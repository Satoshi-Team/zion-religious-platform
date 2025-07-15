const fs = require('fs')
const path = require('path')

// Paths
const translationsTsPath = path.join(__dirname, '../lib/i18n/translations.ts')

console.log('🔧 Final translation fix - removing duplicates and readonly issues...')

// Read the file
const tsFileText = fs.readFileSync(translationsTsPath, 'utf8')

// Step 1: Remove duplicate buddhist properties in sacredTexts
// Keep only the first one (the complete object) and remove the reference to buddhistTranslations
let fixedText = tsFileText.replace(
  /(\s+)buddhist:\s*buddhistTranslations\.(\w+)(\s*),?\s*\n\s*(\w+):/g,
  '$4:'
)

// Step 2: Ensure all arrays are mutable by removing any readonly assertions
fixedText = fixedText.replace(/readonly\s+\[/g, '[')
fixedText = fixedText.replace(/\[\s*readonly\s+/g, '[')

// Step 3: Fix any remaining interface issues
fixedText = fixedText.replace(
  /resources:\s*\n\s*translations:/g,
  'resources: {\n    translations:'
)

// Step 4: Remove any trailing commas that might cause issues
fixedText = fixedText.replace(/,(\s*})/g, '$1')

// Step 5: Ensure proper closing braces
fixedText = fixedText.replace(
  /(\s+)(\w+):\s*{\s*\n\s*title:/g,
  '$1$2: {\n      title:'
)

// Write the fixed file
fs.writeFileSync(translationsTsPath, fixedText, 'utf8')

console.log('✅ Final fixes applied')

// Test the build
console.log('\n🔨 Testing build...')
const { execSync } = require('child_process')

try {
  console.log('Running npm run build...')
  execSync('npm run build', { stdio: 'inherit' })
  console.log('✅ Build successful! All translation issues resolved.')
} catch (error) {
  console.log('❌ Build still failed. Let me check the specific error...')
  
  // Try to get more specific error information
  try {
    execSync('npx tsc --noEmit', { stdio: 'inherit' })
  } catch (tscError) {
    console.log('TypeScript compilation errors found. Let me create a more targeted fix...')
    
    // Create a backup and restore from the original backup
    const backupPath = translationsTsPath + '.final-backup'
    fs.copyFileSync(translationsTsPath, backupPath)
    
    // Restore from the original backup and apply a simpler fix
    const originalBackup = translationsTsPath + '.bak'
    if (fs.existsSync(originalBackup)) {
      fs.copyFileSync(originalBackup, translationsTsPath)
      console.log('Restored from original backup')
      
      // Apply minimal fixes
      const restoredText = fs.readFileSync(translationsTsPath, 'utf8')
      let minimalFix = restoredText
      
      // Only fix the most critical issues
      minimalFix = minimalFix.replace(/\s*as const\s*$/, '')
      minimalFix = minimalFix.replace(
        /(\s+)buddhism:\s*buddhistTranslations\.(\w+)/g,
        '$1buddhist: buddhistTranslations.$2'
      )
      
      // Add TranslationKey export if missing
      if (!minimalFix.includes('export type TranslationKey')) {
        minimalFix += '\n\nexport type TranslationKey = keyof LanguageTranslations | \n  `${keyof LanguageTranslations}.${string}` |\n  `${keyof LanguageTranslations}.${string}.${string}`\n'
      }
      
      fs.writeFileSync(translationsTsPath, minimalFix, 'utf8')
      console.log('Applied minimal fixes')
      
      // Test again
      try {
        execSync('npm run build', { stdio: 'inherit' })
        console.log('✅ Build successful with minimal fixes!')
      } catch (finalError) {
        console.log('❌ Still failing. Please check the translations.ts file manually.')
        console.log('Backup files available:')
        console.log('- Original backup: src/lib/i18n/translations.ts.bak')
        console.log('- Final backup: src/lib/i18n/translations.ts.final-backup')
      }
    }
  }
} 