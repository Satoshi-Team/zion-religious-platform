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

// Extract English sacredTexts.buddhist as template
const enBuddhistMatch = fileText.match(/en:\s*\{[\s\S]*?sacredTexts:\s*\{[\s\S]*?buddhist:\s*\{([\s\S]*?)\n\s*\},[\s\S]*?\n\s*\},[\s\S]*?\n\s*\},/)
if (!enBuddhistMatch) {
  console.error('Could not find English buddhist sacredTexts object!')
  process.exit(1)
}
const enBuddhistText = enBuddhistMatch[1]

let newText = fileText
let changed = false

// 1. Fix nav objects - add missing keys
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

// 2. Replace buddhist: buddhistTranslations.xx in sacredTexts with complete objects
const buddhistRefRegex = /(\s+)buddhist:\s*buddhistTranslations\.(\w+)/g
newText = newText.replace(buddhistRefRegex, (match, indent, lang) => {
  // Create a complete SacredTextTranslations object based on the language
  let buddhistObj = enBuddhistText
  
  // Translate the content based on language
  if (lang === 'zh') {
    buddhistObj = buddhistObj
      .replace(/title: "Buddhist Texts"/, 'title: "佛教经典"')
      .replace(/description: "Collection of Buddhist scriptures and teachings"/, 'description: "佛教典籍和教义集合"')
      .replace(/features: \[[\s\S]*?\]/, `features: [
          "经文",
          "注释",
          "禅修指南",
          "修行指导"
        ]`)
      .replace(/translations: \[[\s\S]*?\]/, `translations: [
            "巴利文圣典协会译本",
            "佛光大藏经",
            "84000译本"
          ]`)
      .replace(/commentaries: \[[\s\S]*?\]/, `commentaries: [
            "传统注释",
            "现代诠释",
            "学术分析"
          ]`)
      .replace(/studyGuides: \[[\s\S]*?\]/, `studyGuides: [
            "佛教哲学",
            "禅修技巧",
            "伦理准则"
          ]`)
  } else if (lang === 'hi') {
    buddhistObj = buddhistObj
      .replace(/title: "Buddhist Texts"/, 'title: "बौद्ध ग्रंथ"')
      .replace(/description: "Collection of Buddhist scriptures and teachings"/, 'description: "बौद्ध धर्म के ग्रंथों और शिक्षाओं का संग्रह"')
      .replace(/features: \[[\s\S]*?\]/, `features: [
          "सूत्र",
          "टीकाएं",
          "ध्यान गाइड",
          "अभ्यास निर्देश"
        ]`)
      .replace(/translations: \[[\s\S]*?\]/, `translations: [
            "पालि कैनन",
            "चीनी कैनन",
            "तिब्बती कैनन"
          ]`)
      .replace(/commentaries: \[[\s\S]*?\]/, `commentaries: [
            "पारंपरिक टीकाएं",
            "आधुनिक व्याख्याएं",
            "शैक्षणिक विश्लेषण"
          ]`)
      .replace(/studyGuides: \[[\s\S]*?\]/, `studyGuides: [
            "बौद्ध दर्शन",
            "ध्यान तकनीक",
            "नैतिक दिशानिर्देश"
          ]`)
  } else if (lang === 'pt') {
    buddhistObj = buddhistObj
      .replace(/title: "Buddhist Texts"/, 'title: "Textos Budistas"')
      .replace(/description: "Collection of Buddhist scriptures and teachings"/, 'description: "Coleção de escrituras e ensinamentos budistas"')
      .replace(/features: \[[\s\S]*?\]/, `features: [
          "Sutras",
          "Comentários",
          "Guias de meditação",
          "Instruções de prática"
        ]`)
      .replace(/translations: \[[\s\S]*?\]/, `translations: [
            "Cânone Pali",
            "Cânone Chinês",
            "Cânone Tibetano"
          ]`)
      .replace(/commentaries: \[[\s\S]*?\]/, `commentaries: [
            "Comentários tradicionais",
            "Interpretações modernas",
            "Análise acadêmica"
          ]`)
      .replace(/studyGuides: \[[\s\S]*?\]/, `studyGuides: [
            "Filosofia Budista",
            "Técnicas de Meditação",
            "Diretrizes Éticas"
          ]`)
  } else if (lang === 'ru') {
    buddhistObj = buddhistObj
      .replace(/title: "Buddhist Texts"/, 'title: "Буддийские тексты"')
      .replace(/description: "Collection of Buddhist scriptures and teachings"/, 'description: "Собрание буддийских писаний и учений"')
      .replace(/features: \[[\s\S]*?\]/, `features: [
          "Сутры",
          "Комментарии",
          "Руководства по медитации",
          "Инструкции по практике"
        ]`)
      .replace(/translations: \[[\s\S]*?\]/, `translations: [
            "Палийский канон",
            "Китайский канон",
            "Тибетский канон"
          ]`)
      .replace(/commentaries: \[[\s\S]*?\]/, `commentaries: [
            "Традиционные комментарии",
            "Современные интерпретации",
            "Академический анализ"
          ]`)
      .replace(/studyGuides: \[[\s\S]*?\]/, `studyGuides: [
            "Буддийская философия",
            "Техники медитации",
            "Этические принципы"
          ]`)
  } else if (lang === 'ja') {
    buddhistObj = buddhistObj
      .replace(/title: "Buddhist Texts"/, 'title: "仏教テキスト"')
      .replace(/description: "Collection of Buddhist scriptures and teachings"/, 'description: "仏教の経典と教えのコレクション"')
      .replace(/features: \[[\s\S]*?\]/, `features: [
          "経典",
          "注釈",
          "瞑想ガイド",
          "実践指導"
        ]`)
      .replace(/translations: \[[\s\S]*?\]/, `translations: [
            "パーリ聖典",
            "中国大蔵経",
            "チベット大蔵経"
          ]`)
      .replace(/commentaries: \[[\s\S]*?\]/, `commentaries: [
            "伝統的注釈",
            "現代的解釈",
            "学術的分析"
          ]`)
      .replace(/studyGuides: \[[\s\S]*?\]/, `studyGuides: [
            "仏教哲学",
            "瞑想技法",
            "倫理指針"
          ]`)
  } else if (lang === 'ur') {
    buddhistObj = buddhistObj
      .replace(/title: "Buddhist Texts"/, 'title: "بدھ متون"')
      .replace(/description: "Collection of Buddhist scriptures and teachings"/, 'description: "بدھ متون اور تعلیمات کا مجموعہ"')
      .replace(/features: \[[\s\S]*?\]/, `features: [
          "سوترا",
          "تبصرے",
          "مراقبہ گائیڈز",
          "عملی ہدایات"
        ]`)
      .replace(/translations: \[[\s\S]*?\]/, `translations: [
            "پالی کینن",
            "چینی کینن",
            "تبتی کینن"
          ]`)
      .replace(/commentaries: \[[\s\S]*?\]/, `commentaries: [
            "روایتی تبصرے",
            "جدید تشریحات",
            "علمی تجزیہ"
          ]`)
      .replace(/studyGuides: \[[\s\S]*?\]/, `studyGuides: [
            "بدھ فلسفہ",
            "مراقبہ تکنیک",
            "اخلاقی رہنما خطوط"
          ]`)
  }
  
  console.log(`[${lang}] Replaced buddhist reference with complete SacredTextTranslations object`)
  changed = true
  return `${indent}buddhist: {${buddhistObj}`
})

if (!changed) {
  console.log('No changes needed.')
  process.exit(0)
}

fs.writeFileSync(translationsPath, newText, 'utf8')
console.log('translations.ts updated successfully!') 