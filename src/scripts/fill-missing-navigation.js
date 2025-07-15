const fs = require('fs')
const path = require('path')

const messagesDir = path.join(process.cwd(), 'src', 'messages')
const en = JSON.parse(fs.readFileSync(path.join(messagesDir, 'en.json'), 'utf8'))
const fallbackNav = en.common.navigation

const files = fs.readdirSync(messagesDir)
  .filter(f => f.endsWith('.json') && !f.includes('.template.json'))
  .map(f => ({ code: f.replace('.json', ''), file: path.join(messagesDir, f) }))

files.forEach(({ code, file }) => {
  const json = JSON.parse(fs.readFileSync(file, 'utf8'))
  if (!json.common) json.common = {}
  if (!json.common.navigation || Object.keys(json.common.navigation).length === 0) {
    json.common.navigation = fallbackNav
    fs.writeFileSync(file, JSON.stringify(json, null, 2), 'utf8')
    console.log(`Filled navigation for ${code}`)
  }
}) 