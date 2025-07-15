const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const { locales } = require('../config/i18n')

const MESSAGES_DIR = path.join(process.cwd(), 'src/messages')
const BLOG_DIR = path.join(process.cwd(), 'src/app/blog')

// Skip English as it's our base language
const TARGET_LOCALES = locales.filter(locale => locale.code !== 'en')

// Rate limiting and batching
const BATCH_SIZE = 5 // Number of posts to translate at once
const DELAY_BETWEEN_BATCHES = 5000 // 5 seconds delay between batches
const DELAY_BETWEEN_TRANSLATIONS = 1000 // 1 second delay between individual translations
const MAX_RETRIES = 3 // Maximum number of retries for failed translations
const RETRY_DELAY = 2000 // 2 seconds delay between retries

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function translateText(text, targetLang, retryCount = 0) {
  try {
    // Clean and prepare text for translation
    const cleanText = text
      .replace(/"/g, '\\"')
      .replace(/\n/g, ' ')
      .trim()

    // Use trans command with -b for brief output and -no-ansi to avoid formatting issues
    const command = `trans -b -no-ansi :${targetLang} "${cleanText}"`
    const result = execSync(command, { encoding: 'utf-8' }).trim()
    
    // Basic validation of translation
    if (!result || result.length < text.length * 0.5) {
      throw new Error('Translation too short or empty')
    }
    
    return result
  } catch (error) {
    console.error(`Translation error for ${targetLang}:`, error.message)
    
    // Retry logic
    if (retryCount < MAX_RETRIES) {
      console.log(`Retrying translation (attempt ${retryCount + 1} of ${MAX_RETRIES})...`)
      await sleep(RETRY_DELAY)
      return translateText(text, targetLang, retryCount + 1)
    }
    
    return null // Return null after all retries are exhausted
  }
}

async function translateBlogPost(postSlug, targetLang) {
  const postPath = path.join(BLOG_DIR, postSlug, 'page.server.tsx')
  
  if (!fs.existsSync(postPath)) {
    console.error(`Post not found: ${postSlug}`)
    return
  }

  let content = fs.readFileSync(postPath, 'utf-8')

  // Extract sections to translate
  const sections = {
    title: content.match(/title:\s*['"]([^'"]+)['"]/)?.[1],
    description: content.match(/description:\s*['"]([^'"]+)['"]/)?.[1],
    introduction: content.match(/## Introduction\n\n([^#]+)/)?.[1],
    keyConcepts: content.match(/## Key Concepts\n\n([^#]+)/)?.[1],
    historicalContext: content.match(/## Historical Context\n\n([^#]+)/)?.[1],
    practicalApplications: content.match(/## Practical Applications\n\n([^#]+)/)?.[1],
    conclusion: content.match(/## Conclusion\n\n([^#]+)/)?.[1]
  }

  // Translate each section with delay between translations
  const translatedSections = {}
  for (const [key, text] of Object.entries(sections)) {
    if (text) {
      console.log(`Translating ${key} for ${postSlug} to ${targetLang}...`)
      const translation = await translateText(text, targetLang)
      if (translation) {
        translatedSections[key] = translation
      } else {
        console.error(`Failed to translate ${key} for ${postSlug} to ${targetLang} after ${MAX_RETRIES} retries`)
        return // Skip this post if any section fails to translate
      }
      await sleep(DELAY_BETWEEN_TRANSLATIONS)
    }
  }

  // Create translated content
  let translatedContent = content
  if (translatedSections.title) {
    translatedContent = translatedContent.replace(
      /title:\s*['"][^'"]*['"]/,
      `title: '${translatedSections.title}'`
    )
  }
  if (translatedSections.description) {
    translatedContent = translatedContent.replace(
      /description:\s*['"][^'"]*['"]/,
      `description: '${translatedSections.description}'`
    )
  }
  if (translatedSections.introduction) {
    translatedContent = translatedContent.replace(
      /## Introduction\n\n[^#]+/,
      `## Introduction\n\n${translatedSections.introduction}`
    )
  }
  if (translatedSections.keyConcepts) {
    translatedContent = translatedContent.replace(
      /## Key Concepts\n\n[^#]+/,
      `## Key Concepts\n\n${translatedSections.keyConcepts}`
    )
  }
  if (translatedSections.historicalContext) {
    translatedContent = translatedContent.replace(
      /## Historical Context\n\n[^#]+/,
      `## Historical Context\n\n${translatedSections.historicalContext}`
    )
  }
  if (translatedSections.practicalApplications) {
    translatedContent = translatedContent.replace(
      /## Practical Applications\n\n[^#]+/,
      `## Practical Applications\n\n${translatedSections.practicalApplications}`
    )
  }
  if (translatedSections.conclusion) {
    translatedContent = translatedContent.replace(
      /## Conclusion\n\n[^#]+/,
      `## Conclusion\n\n${translatedSections.conclusion}`
    )
  }

  // Save translated content
  const translatedPath = path.join(BLOG_DIR, postSlug, `page.${targetLang}.server.tsx`)
  fs.writeFileSync(translatedPath, translatedContent)
  console.log(`Successfully translated ${postSlug} to ${targetLang}`)
}

async function main() {
  // Get all blog posts
  const posts = fs.readdirSync(BLOG_DIR)
    .filter(category => category !== 'blog-index.ts')
    .filter(category => fs.existsSync(path.join(BLOG_DIR, category, 'page.server.tsx')))

  // Process posts in batches
  for (let i = 0; i < posts.length; i += BATCH_SIZE) {
    const batch = posts.slice(i, i + BATCH_SIZE)
    console.log(`\nProcessing batch ${i / BATCH_SIZE + 1} of ${Math.ceil(posts.length / BATCH_SIZE)}`)
    
    // Translate each post in the batch to each target language
    for (const post of batch) {
      for (const locale of TARGET_LOCALES) {
        await translateBlogPost(post, locale.code)
      }
    }

    // Add delay between batches
    if (i + BATCH_SIZE < posts.length) {
      console.log(`\nWaiting ${DELAY_BETWEEN_BATCHES / 1000} seconds before next batch...`)
      await sleep(DELAY_BETWEEN_BATCHES)
    }
  }

  console.log('\nFinished translating blog posts')
}

// Run with error handling
main().catch(error => {
  console.error('Translation process failed:', error)
  process.exit(1)
}) 