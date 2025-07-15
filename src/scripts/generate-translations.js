const fs = require('fs')
const path = require('path')
const { locales } = require('../config/i18n')

const BLOG_DIR = path.join(process.cwd(), 'src/app/blog')
const MESSAGES_DIR = path.join(process.cwd(), 'src/messages')

function getBlogPosts() {
  const posts = []
  const categories = fs.readdirSync(BLOG_DIR)

  for (const category of categories) {
    if (category === 'blog-index.ts') continue

    const categoryPath = path.join(BLOG_DIR, category)
    if (fs.statSync(categoryPath).isDirectory()) {
      const postSlug = category
      const postPath = path.join(categoryPath, 'page.server.tsx')
      
      if (fs.existsSync(postPath)) {
        const content = fs.readFileSync(postPath, 'utf-8')
        const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/)
        const categoryMatch = content.match(/category:\s*['"]([^'"]+)['"]/)
        const tagsMatch = content.match(/tags:\s*\[([^\]]+)\]/)

        posts.push({
          slug: postSlug,
          title: titleMatch ? titleMatch[1] : postSlug,
          category: categoryMatch ? categoryMatch[1] : 'uncategorized',
          tags: tagsMatch ? tagsMatch[1].split(',').map(tag => tag.trim().replace(/['"]/g, '')) : []
        })
      }
    }
  }

  return posts
}

function generateTranslationTemplate(posts) {
  const template = {
    common: {
      navigation: {
        home: '',
        blog: '',
        bible: '',
        religion: '',
        resources: '',
        studies: '',
        meditation: '',
        teachings: ''
      },
      actions: {
        readMore: '',
        learnMore: '',
        explore: '',
        search: '',
        share: ''
      },
      footer: {
        privacy: '',
        terms: '',
        contact: '',
        about: ''
      }
    },
    blog: {
      categories: {
        hinduism: '',
        buddhism: '',
        islam: '',
        christianity: ''
      },
      tags: {},
      posts: {
        hinduism: {},
        buddhism: {},
        islam: {},
        christianity: {}
      }
    },
    bible: {
      navigation: {
        oldTestament: '',
        newTestament: '',
        search: '',
        audio: ''
      },
      actions: {
        read: '',
        listen: '',
        share: '',
        bookmark: ''
      }
    }
  }

  // Add all unique tags
  const allTags = new Set()
  posts.forEach(post => {
    post.tags.forEach(tag => allTags.add(tag))
  })
  allTags.forEach(tag => {
    template.blog.tags[tag] = ''
  })

  // Add all posts to their respective categories
  posts.forEach(post => {
    const category = post.category.toLowerCase()
    if (!template.blog.posts[category]) {
      template.blog.posts[category] = {}
    }
    template.blog.posts[category][post.slug] = ''
  })

  return template
}

function main() {
  const posts = getBlogPosts()
  const template = generateTranslationTemplate(posts)

  // Generate template for each locale
  locales.forEach(locale => {
    const templatePath = path.join(MESSAGES_DIR, `${locale.code}.template.json`)
    fs.writeFileSync(templatePath, JSON.stringify(template, null, 2))
    console.log(`Generated translation template for ${locale.code}`)
  })

  // Generate a report of all content
  const report = {
    totalPosts: posts.length,
    postsByCategory: posts.reduce((acc, post) => {
      acc[post.category] = (acc[post.category] || 0) + 1
      return acc
    }, {}),
    allTags: Array.from(new Set(posts.flatMap(post => post.tags))),
    posts: posts.map(post => ({
      slug: post.slug,
      title: post.title,
      category: post.category,
      tags: post.tags
    }))
  }

  fs.writeFileSync(
    path.join(process.cwd(), 'translation-report.json'),
    JSON.stringify(report, null, 2)
  )
  console.log('Generated translation report')
}

main() 