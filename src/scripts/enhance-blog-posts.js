const fs = require('fs')
const path = require('path')

const BLOG_DIR = path.join(process.cwd(), 'src/app/blog')

// SEO best practices
const SEO_REQUIREMENTS = {
  minTitleLength: 50,
  maxTitleLength: 60,
  minDescriptionLength: 120,
  maxDescriptionLength: 160,
  minContentLength: 1500,
  requiredSections: [
    'introduction',
    'key-concepts',
    'historical-context',
    'practical-applications',
    'conclusion'
  ],
  requiredElements: [
    'h1',
    'h2',
    'h3',
    'meta-description',
    'keywords',
    'structured-data'
  ]
}

// Content enhancement templates
const CONTENT_TEMPLATES = {
  hinduism: {
    introduction: 'Hinduism, one of the world\'s oldest religions, offers profound insights into spiritual wisdom and cultural heritage.',
    keyConcepts: 'Core concepts include dharma (duty), karma (action), and moksha (liberation).',
    historicalContext: 'With roots dating back over 4,000 years, Hinduism has evolved through various periods.',
    practicalApplications: 'Modern applications include yoga, meditation, and ethical living.',
    conclusion: 'Hinduism continues to influence global spirituality and cultural practices.'
  },
  buddhism: {
    introduction: 'Buddhism, founded by Siddhartha Gautama, provides a path to enlightenment through wisdom and compassion.',
    keyConcepts: 'The Four Noble Truths and Eightfold Path form the foundation of Buddhist teachings.',
    historicalContext: 'Originating in ancient India, Buddhism spread across Asia and the world.',
    practicalApplications: 'Mindfulness and meditation practices are widely adopted in modern life.',
    conclusion: 'Buddhism\'s universal principles continue to guide seekers of peace and wisdom.'
  },
  islam: {
    introduction: 'Islam, a monotheistic faith, emphasizes submission to Allah and following the teachings of Prophet Muhammad.',
    keyConcepts: 'The Five Pillars and Six Articles of Faith form the core of Islamic practice.',
    historicalContext: 'Founded in 7th century Arabia, Islam has become a global religion.',
    practicalApplications: 'Islamic principles guide daily life, ethics, and community relations.',
    conclusion: 'Islam continues to shape cultures and societies worldwide.'
  },
  christianity: {
    introduction: 'Christianity, centered on the life and teachings of Jesus Christ, emphasizes love, forgiveness, and salvation.',
    keyConcepts: 'The Holy Trinity, salvation, and the Bible form the foundation of Christian belief.',
    historicalContext: 'Originating in 1st century Palestine, Christianity spread globally.',
    practicalApplications: 'Christian principles guide personal conduct and community service.',
    conclusion: 'Christianity remains a major influence on global culture and values.'
  }
}

function enhanceBlogPost(postSlug, category) {
  const postPath = path.join(BLOG_DIR, postSlug, 'page.server.tsx')
  
  if (!fs.existsSync(postPath)) {
    console.error(`Post not found: ${postSlug}`)
    return
  }

  let content = fs.readFileSync(postPath, 'utf-8')
  const template = CONTENT_TEMPLATES[category] || CONTENT_TEMPLATES.hinduism

  // Extract current metadata
  const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/)
  const descriptionMatch = content.match(/description:\s*['"]([^'"]+)['"]/)
  const keywordsMatch = content.match(/keywords:\s*\[([^\]]+)\]/)

  // Enhance title
  let title = titleMatch ? titleMatch[1] : postSlug
  if (title.length < SEO_REQUIREMENTS.minTitleLength) {
    title = `${title} | Comprehensive Guide to ${category.charAt(0).toUpperCase() + category.slice(1)}`
  }

  // Enhance description
  let description = descriptionMatch ? descriptionMatch[1] : ''
  if (!description || description.length < SEO_REQUIREMENTS.minDescriptionLength) {
    description = `${template.introduction} Explore key concepts, historical context, and modern applications of ${category}.`
  }

  // Enhance keywords
  let keywords = keywordsMatch ? keywordsMatch[1].split(',').map(k => k.trim()) : []
  keywords = [...new Set([...keywords, category, ...template.keyConcepts.split(' ').slice(0, 5)])]

  // Update metadata
  content = content.replace(/title:\s*['"][^'"]*['"]/, `title: '${title}'`)
  content = content.replace(/description:\s*['"][^'"]*['"]/, `description: '${description}'`)
  content = content.replace(/keywords:\s*\[[^\]]*\]/, `keywords: [${keywords.map(k => `'${k}'`).join(', ')}]`)

  // Add structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    keywords: keywords.join(', '),
    category: category,
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString()
  }

  content = content.replace(
    /export const metadata = {/,
    `export const metadata = {\n  structuredData: ${JSON.stringify(structuredData, null, 2)},\n`
  )

  // Add content sections if missing
  if (!content.includes('## Introduction')) {
    content += `\n\n## Introduction\n\n${template.introduction}\n\n`
  }
  if (!content.includes('## Key Concepts')) {
    content += `## Key Concepts\n\n${template.keyConcepts}\n\n`
  }
  if (!content.includes('## Historical Context')) {
    content += `## Historical Context\n\n${template.historicalContext}\n\n`
  }
  if (!content.includes('## Practical Applications')) {
    content += `## Practical Applications\n\n${template.practicalApplications}\n\n`
  }
  if (!content.includes('## Conclusion')) {
    content += `## Conclusion\n\n${template.conclusion}\n\n`
  }

  fs.writeFileSync(postPath, content)
  console.log(`Enhanced ${postSlug} with SEO improvements and content structure`)
}

function main() {
  const posts = fs.readdirSync(BLOG_DIR)
    .filter(category => category !== 'blog-index.ts')
    .map(category => {
      const postPath = path.join(BLOG_DIR, category, 'page.server.tsx')
      if (fs.existsSync(postPath)) {
        const content = fs.readFileSync(postPath, 'utf-8')
        const categoryMatch = content.match(/category:\s*['"]([^'"]+)['"]/)
        return {
          slug: category,
          category: categoryMatch ? categoryMatch[1] : 'uncategorized'
        }
      }
      return null
    })
    .filter(Boolean)

  // Enhance each post
  posts.forEach(post => {
    enhanceBlogPost(post.slug, post.category)
  })

  console.log('Finished enhancing blog posts')
}

main() 