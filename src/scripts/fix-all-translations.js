const fs = require('fs')
const path = require('path')

// Paths
const translationsTsPath = path.join(__dirname, '../lib/i18n/translations.ts')
const localesDir = path.join(__dirname, '../lib/i18n/locales')
const buddhistTranslationsPath = path.join(__dirname, '../lib/i18n/buddhist-translations.ts')

// Backup the TypeScript translations file
const tsBackupPath = translationsTsPath + '.bak'
if (!fs.existsSync(tsBackupPath)) {
  fs.copyFileSync(translationsTsPath, tsBackupPath)
  console.log('Backup created at', tsBackupPath)
}

// List of required nav keys
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

console.log('🔧 Starting comprehensive translation fix...')

// Step 1: Fix the TypeScript translations.ts file
console.log('\n📝 Step 1: Fixing TypeScript translations.ts file...')

const tsFileText = fs.readFileSync(translationsTsPath, 'utf8')

// Fix the SacredTextTranslations interface
let fixedTsText = tsFileText.replace(
  /resources:\s*\n\s*translations:/,
  'resources: {\n    translations:'
)

// Fix missing braces in studies objects
fixedTsText = fixedTsText.replace(
  /studies:\s*\n\s*title:/g,
  'studies: {\n      title:'
)

// Remove 'as const' to fix readonly array issues
fixedTsText = fixedTsText.replace(/\s*as const\s*$/, '')

// Change buddhism to buddhist in sacredTexts only (not language level)
fixedTsText = fixedTsText.replace(
  /(\s+)buddhism:\s*buddhistTranslations\.(\w+)/g,
  '$1buddhist: buddhistTranslations.$2'
)

// Add missing TranslationKey export if not present
if (!fixedTsText.includes('export type TranslationKey')) {
  fixedTsText += '\n\nexport type TranslationKey = keyof LanguageTranslations | \n  `${keyof LanguageTranslations}.${string}` |\n  `${keyof LanguageTranslations}.${string}.${string}`\n'
}

fs.writeFileSync(translationsTsPath, fixedTsText, 'utf8')
console.log('✅ TypeScript translations.ts file fixed')

// Step 2: Fix all JSON locale files
console.log('\n🌍 Step 2: Fixing JSON locale files...')

const localeFiles = fs.readdirSync(localesDir).filter(file => file.endsWith('.json'))
console.log(`Found ${localeFiles.length} locale files`)

let totalFixed = 0
let totalAdded = 0

for (const file of localeFiles) {
  const filePath = path.join(localesDir, file)
  const lang = file.replace('.json', '')
  
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const translations = JSON.parse(content)
    
    let changed = false
    
    // Ensure nav object exists and has all required keys
    if (!translations.nav) {
      translations.nav = {}
      changed = true
    }
    
    // Add missing nav keys (use English as fallback)
    const englishFile = path.join(localesDir, 'en.json')
    let englishNav = {}
    
    if (fs.existsSync(englishFile)) {
      const englishContent = fs.readFileSync(englishFile, 'utf8')
      const englishTranslations = JSON.parse(englishContent)
      englishNav = englishTranslations.nav || {}
    }
    
    for (const key of navKeys) {
      if (!translations.nav[key]) {
        translations.nav[key] = englishNav[key] || key
        console.log(`[${lang}] Added missing nav key: ${key}`)
        totalAdded++
        changed = true
      }
    }
    
    // Fix any buddhism -> buddhist naming issues in sacredTexts
    if (translations.sacredTexts && translations.sacredTexts.buddhism) {
      translations.sacredTexts.buddhist = translations.sacredTexts.buddhism
      delete translations.sacredTexts.buddhism
      console.log(`[${lang}] Fixed buddhism -> buddhist in sacredTexts`)
      changed = true
    }
    
    if (changed) {
      fs.writeFileSync(filePath, JSON.stringify(translations, null, 2), 'utf8')
      totalFixed++
    }
    
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message)
  }
}

console.log(`✅ Fixed ${totalFixed} locale files, added ${totalAdded} missing keys`)

// Step 3: Verify Buddhist translations file
console.log('\n🧘 Step 3: Verifying Buddhist translations...')

if (fs.existsSync(buddhistTranslationsPath)) {
  const buddhistContent = fs.readFileSync(buddhistTranslationsPath, 'utf8')
  
  // Check for any buddhism -> buddhist issues
  if (buddhistContent.includes('buddhism:')) {
    console.log('⚠️  Found potential buddhism naming issues in buddhist-translations.ts')
  } else {
    console.log('✅ Buddhist translations file looks good')
  }
} else {
  console.log('⚠️  Buddhist translations file not found')
}

// Step 4: Create a summary report
console.log('\n📊 Summary Report:')
console.log('==================')
console.log(`• TypeScript translations.ts: Fixed interface and structure issues`)
console.log(`• JSON locale files processed: ${localeFiles.length}`)
console.log(`• Files with changes: ${totalFixed}`)
console.log(`• Missing keys added: ${totalAdded}`)
console.log(`• Backup created: ${tsBackupPath}`)

console.log('\n🎉 Translation fix completed successfully!')
console.log('\nNext steps:')
console.log('1. Run "npm run build" to test the fixes')
console.log('2. Check that all pages load correctly')
console.log('3. Verify that navigation works in all languages')

// Step 5: Test build
console.log('\n🔨 Step 5: Testing build...')
const { execSync } = require('child_process')

try {
  console.log('Running npm run build...')
  execSync('npm run build', { stdio: 'inherit' })
  console.log('✅ Build successful! All translation issues resolved.')
} catch (error) {
  console.log('❌ Build failed. Please check the errors above.')
  console.log('You can restore the backup with: cp src/lib/i18n/translations.ts.bak src/lib/i18n/translations.ts')
} 