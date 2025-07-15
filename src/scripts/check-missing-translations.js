const fs = require('fs')
const path = require('path')

// Read the TS config as plain text and extract the locales array
const configPath = path.join(__dirname, '../config/i18n.ts')
const configText = fs.readFileSync(configPath, 'utf8')
const localeMatches = Array.from(configText.matchAll(/code:\s*'([a-zA-Z0-9]+)'/g))
const locales = localeMatches.map(m => m[1])

const messagesDir = path.join(__dirname, '../messages')
const files = fs.readdirSync(messagesDir)
  .filter(f => f.endsWith('.json') && !f.endsWith('.template.json'))
  .map(f => f.replace('.json', ''))

const missing = locales.filter(code => !files.includes(code))
const empty = files.filter(code => {
  const filePath = path.join(messagesDir, code + '.json')
  const content = fs.readFileSync(filePath, 'utf8')
  try {
    const json = JSON.parse(content)
    return Object.keys(json).length === 0
  } catch {
    return true
  }
})

console.log('Missing translation files:', missing)
console.log('Empty translation files:', empty) 