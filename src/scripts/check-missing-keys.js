const fs = require('fs')
const path = require('path')

const messagesDir = path.join(__dirname, '../messages')
const baseLang = 'en'
const baseJson = JSON.parse(fs.readFileSync(path.join(messagesDir, baseLang + '.json'), 'utf8'))

function getAllKeys(obj, prefix = '') {
  let keys = []
  for (const k in obj) {
    const fullKey = prefix ? `${prefix}.${k}` : k
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      keys = keys.concat(getAllKeys(obj[k], fullKey))
    } else {
      keys.push(fullKey)
    }
  }
  return keys
}

const baseKeys = getAllKeys(baseJson)

const files = fs.readdirSync(messagesDir)
  .filter(f => f.endsWith('.json') && !f.endsWith('.template.json'))
  .map(f => f.replace('.json', ''))

const missingKeysReport = {}

for (const code of files) {
  if (code === baseLang) continue
  const json = JSON.parse(fs.readFileSync(path.join(messagesDir, code + '.json'), 'utf8'))
  const keys = getAllKeys(json)
  const missing = baseKeys.filter(k => !keys.includes(k))
  if (missing.length > 0) missingKeysReport[code] = missing
}

console.log('Missing keys per language:')
console.log(JSON.stringify(missingKeysReport, null, 2)) 