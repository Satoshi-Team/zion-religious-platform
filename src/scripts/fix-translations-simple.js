const fs = require('fs')
const path = require('path')

const translationsPath = path.join(__dirname, '../lib/i18n/translations.ts')
const backupPath = translationsPath + '.bak'

if (!fs.existsSync(backupPath)) {
  fs.copyFileSync(translationsPath, backupPath)
  console.log('Backup created at', backupPath)
}

const fileText = fs.readFileSync(translationsPath, 'utf8')

// List of nav keys
const navKeys = [
  'home',
  'readBible',
  'studies',
  'teachings',
  'resources',
  'meditation',
  'listenNow',
  'sacredTexts',
  'sacredTextsTitle',
  'sacredTextsDescription',
  'bible',
  'bibleDescription',
  'quran',
  'quranDescription',
  'blog',
  'blogTitle',
  'blogDescription',
  'hinduism',
  'hinduismDescription',
  'buddhism',
  'buddhismDescription',
  'about',
  'login',
  'register',
]

// Extract English nav as fallback
const enNavMatch = fileText.match(/en:\s*\{[\s\S]*?nav:\s*\{([\s\S]*?)\n\s*\},/)
if (!enNavMatch) {
  console.error('Could not find English nav object!')
  process.exit(1)
}
const enNavText = enNavMatch[1]
const enNav = {}
enNavText.replace(/(\w+):\s*"([^"]*)"/g, (m, k, v) => { enNav[k] = v })

let newText = fileText
let changed = false

// 1. Fix the SacredTextTranslations interface missing brace
newText = newText.replace(
  /resources:\s*\n\s*translations:/,
  'resources: {\n    translations:'
)

// 2. Fix nav objects - add missing keys
const navRegex = /(\w+):\s*\{([\s\S]*?nav:\s*\{)([\s\S]*?)(\n\s*\},)/g
newText = newText.replace(navRegex, (match, lang, prefix, navBody, suffix) => {
  // Parse current nav keys
  const navObj = {}
  navBody.replace(/(\w+):\s*"([^"]*)"/g, (m, k, v) => { navObj[k] = v })
  
  // Add missing keys to navBody
  let newNavBody = navBody
  for (const key of navKeys) {
    if (!(key in navObj)) {
      // Add the missing key at the end of the nav object
      newNavBody = newNavBody.replace(/(\n\s*\},)/, `\n  ${key}: "${enNav[key]}",$1`)
      console.log(`[${lang}] Added missing nav key: ${key}`)
      changed = true
    }
  }
  
  return `${lang}: ${prefix}${newNavBody}${suffix}`
})

// 3. Change buddhism to buddhist in sacredTexts only (not language level)
const buddhismInSacredTextsRegex = /(\s+)buddhism:\s*buddhistTranslations\.(\w+)/g
newText = newText.replace(buddhismInSacredTextsRegex, (match, indent, lang) => {
  console.log(`[${lang}] Changed buddhism to buddhist in sacredTexts`)
  changed = true
  return `${indent}buddhist: buddhistTranslations.${lang}`
})

if (!changed) {
  console.log('No changes needed.')
  process.exit(0)
}

fs.writeFileSync(translationsPath, newText, 'utf8')
console.log('translations.ts updated successfully!') 