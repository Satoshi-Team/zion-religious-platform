const fs = require('fs')
const path = require('path')

function removeMarkdownContent(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const lines = content.split('\n')
  const newLines = []
  let inMetadata = false
  let inDescription = false
  let descriptionContent = []
  let hasDescription = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    // Check if we're entering metadata section
    if (line === 'export const metadata = {') {
      inMetadata = true
      newLines.push(line)
      continue
    }

    // Check if we're exiting metadata section
    if (inMetadata && line === '}') {
      inMetadata = false
      newLines.push(line)
      continue
    }

    // Handle description field in metadata
    if (inMetadata && line.startsWith('description:')) {
      if (!hasDescription) {
        newLines.push(line)
        hasDescription = true
      }
      continue
    }

    // Skip markdown content
    if (line.startsWith('#') || line.startsWith('##') || line.startsWith('###')) {
      continue
    }

    // Skip standalone text that looks like markdown content
    if (!inMetadata && line.length > 0 && !line.includes('import') && !line.includes('export') && !line.includes('function') && !line.includes('return')) {
      continue
    }

    newLines.push(lines[i])
  }

  fs.writeFileSync(filePath, newLines.join('\n'))
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory)
  
  for (const file of files) {
    const filePath = path.join(directory, file)
    const stat = fs.statSync(filePath)
    
    if (stat.isDirectory()) {
      processDirectory(filePath)
    } else if (file.endsWith('.server.tsx')) {
      removeMarkdownContent(filePath)
    }
  }
}

const blogDir = path.join(process.cwd(), 'src', 'app', 'blog')
processDirectory(blogDir) 