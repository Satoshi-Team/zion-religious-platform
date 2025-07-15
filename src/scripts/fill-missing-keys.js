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

function setDeep(obj, keyPath, value) {
  const keys = keyPath.split('.')
  let curr = obj
  for (let i = 0; i < keys.length - 1; i++) {
    if (!(keys[i] in curr)) curr[keys[i]] = {}
    curr = curr[keys[i]]
  }
  curr[keys[keys.length - 1]] = value
}

function getDeep(obj, keyPath) {
  const keys = keyPath.split('.')
  let curr = obj
  for (const k of keys) {
    if (curr && typeof curr === 'object' && k in curr) curr = curr[k]
    else return undefined
  }
  return curr
}

const baseKeys = getAllKeys(baseJson)

const files = fs.readdirSync(messagesDir)
  .filter(f => f.endsWith('.json') && !f.endsWith('.template.json'))
  .map(f => f.replace('.json', ''))

for (const code of files) {
  if (code === baseLang) continue
  const filePath = path.join(messagesDir, code + '.json')
  const json = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  let changed = false
  for (const key of baseKeys) {
    if (getDeep(json, key) === undefined) {
      setDeep(json, key, getDeep(baseJson, key))
      changed = true
    }
  }
  if (changed) {
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8')
    console.log(`Filled missing keys for ${code}`)
  }
} 