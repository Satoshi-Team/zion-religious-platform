const fs = require('fs')
const path = require('path')

const BLOG_DIR = path.join(process.cwd(), 'src/app/blog')

// Define categories and their associated keywords
const categories = {
  hinduism: ['hindu', 'vishnu', 'dharma', 'karma', 'bhakti', 'avatar'],
  buddhism: ['buddhist', 'buddhism', 'buddha', 'meditation', 'mindfulness', 'zen'],
  islam: ['islam', 'muslim', 'hadith', 'quran', 'muhammad', 'islamic'],
  christianity: ['christian', 'christianity', 'jesus', 'bible', 'gospel', 'church']
}

// Define common tags for each category
const categoryTags = {
  hinduism: ['philosophy', 'mythology', 'rituals', 'festivals', 'art', 'architecture', 'scriptures', 'deities'],
  buddhism: ['meditation', 'philosophy', 'ethics', 'monasticism', 'scriptures', 'art', 'festivals', 'mindfulness'],
  islam: ['scriptures', 'law', 'philosophy', 'art', 'architecture', 'festivals', 'ethics', 'society'],
  christianity: ['scriptures', 'theology', 'ethics', 'art', 'architecture', 'festivals', 'history', 'philosophy']
}

function updateBlogPostMetadata(postSlug, category, tags) {
  const postPath = path.join(BLOG_DIR, postSlug, 'page.server.tsx')
  
  if (!fs.existsSync(postPath)) {
    console.error(`Post not found: ${postSlug}`)
    return
  }

  let content = fs.readFileSync(postPath, 'utf-8')
  
  // Update category
  if (content.includes('category:')) {
    content = content.replace(/category:\s*['"][^'"]*['"]/, `category: '${category}'`)
  } else {
    content = content.replace(/export const metadata = {/, `export const metadata = {\n  category: '${category}',`)
  }

  // Update tags
  if (content.includes('tags:')) {
    content = content.replace(/tags:\s*\[[^\]]*\]/, `tags: [${tags.map(tag => `'${tag}'`).join(', ')}]`)
  } else {
    content = content.replace(/export const metadata = {/, `export const metadata = {\n  tags: [${tags.map(tag => `'${tag}'`).join(', ')}],`)
  }

  fs.writeFileSync(postPath, content)
  console.log(`Updated ${postSlug} with category: ${category} and tags: ${tags.join(', ')}`)
}

function categorizePost(title, slug) {
  const lowerTitle = title.toLowerCase()
  const lowerSlug = slug.toLowerCase()

  // Check for category matches
  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => lowerTitle.includes(keyword) || lowerSlug.includes(keyword))) {
      return {
        category,
        tags: categoryTags[category]
      }
    }
  }

  // Default to uncategorized if no match found
  return {
    category: 'uncategorized',
    tags: []
  }
}

function main() {
  const posts = fs.readdirSync(BLOG_DIR)
    .filter(category => category !== 'blog-index.ts')
    .map(category => {
      const postPath = path.join(BLOG_DIR, category, 'page.server.tsx')
      if (fs.existsSync(postPath)) {
        const content = fs.readFileSync(postPath, 'utf-8')
        const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/)
        return {
          slug: category,
          title: titleMatch ? titleMatch[1] : category
        }
      }
      return null
    })
    .filter(Boolean)

  // Update each post with proper category and tags
  posts.forEach(post => {
    const { category, tags } = categorizePost(post.title, post.slug)
    updateBlogPostMetadata(post.slug, category, tags)
  })

  console.log('Finished updating blog post metadata')
}

main() 