const fs = require('fs')
const path = require('path')

// Get all language files excluding templates
const messagesDir = path.join(process.cwd(), 'src', 'messages')
const languageFiles = fs.readdirSync(messagesDir)
  .filter(file => file.endsWith('.json') && !file.includes('.template.json'))
  .map(file => file.replace('.json', ''))

// Navigation translations for all languages
const NAVIGATION_TRANSLATIONS = {
  mr: {
    home: "मुख्यपृष्ठ",
    sacredTexts: "पवित्र ग्रंथ",
    studies: "अभ्यास",
    teachings: "शिकवणी",
    blog: "ब्लॉग",
    resources: "संसाधने",
    meditation: "ध्यान"
  },
  mni: {
    home: "মূল পৃষ্ঠা",
    sacredTexts: "পবিত্র গ্রন্থ",
    studies: "অধ্যয়ন",
    teachings: "শিক্ষা",
    blog: "ব্লগ",
    resources: "সমল",
    meditation: "ধ্যান"
  },
  ml: {
    home: "ഹോം",
    sacredTexts: "പവിത്ര ഗ്രന്ഥങ്ങൾ",
    studies: "പഠനങ്ങൾ",
    teachings: "ഉപദേശങ്ങൾ",
    blog: "ബ്ലോഗ്",
    resources: "വിഭവങ്ങൾ",
    meditation: "ധ്യാനം"
  },
  kok: {
    home: "मुखेल पान",
    sacredTexts: "पवित्र ग्रंथ",
    studies: "अभ्यास",
    teachings: "शिकवणी",
    blog: "ब्लॉग",
    resources: "संसाधनां",
    meditation: "ध्यान"
  },
  ks: {
    home: "گھر",
    sacredTexts: "مقدس متن",
    studies: "مطالعہ",
    teachings: "تعلیمات",
    blog: "بلاگ",
    resources: "وسائل",
    meditation: "مراقبہ"
  },
  as: {
    home: "মূল পৃষ্ঠা",
    sacredTexts: "পবিত্র গ্ৰন্থ",
    studies: "অধ্যয়ন",
    teachings: "শিক্ষা",
    blog: "ব্লগ",
    resources: "সমল",
    meditation: "ধ্যান"
  },
  gu: {
    home: "હોમ",
    sacredTexts: "પવિત્ર ગ્રંથો",
    studies: "અભ્યાસ",
    teachings: "શિક્ષણ",
    blog: "બ્લોગ",
    resources: "સંસાધનો",
    meditation: "ધ્યાન"
  },
  si: {
    home: "මුල් පිටුව",
    sacredTexts: "ශුද්ධ ග්‍රන්ථ",
    studies: "අධ්‍යයන",
    teachings: "ඉගැන්වීම්",
    blog: "බ්ලොග්",
    resources: "සම්පත්",
    meditation: "භාවනා"
  },
  ne: {
    home: "मुख्य पृष्ठ",
    sacredTexts: "पवित्र ग्रन्थहरू",
    studies: "अध्ययन",
    teachings: "शिक्षा",
    blog: "ब्लग",
    resources: "स्रोतहरू",
    meditation: "ध्यान"
  },
  bn: {
    home: "হোম",
    sacredTexts: "পবিত্র গ্রন্থ",
    studies: "অধ্যয়ন",
    teachings: "শিক্ষা",
    blog: "ব্লগ",
    resources: "সম্পদ",
    meditation: "ধ্যান"
  },
  ur: {
    home: "ہوم",
    sacredTexts: "مقدس کتب",
    studies: "مطالعہ",
    teachings: "تعلیمات",
    blog: "بلاگ",
    resources: "وسائل",
    meditation: "مراقبہ"
  },
  te: {
    home: "హోమ్",
    sacredTexts: "పవిత్ర గ్రంథాలు",
    studies: "అధ్యయనాలు",
    teachings: "బోధనలు",
    blog: "బ్లాగ్",
    resources: "వనరులు",
    meditation: "ధ్యానం"
  },
  ta: {
    home: "முகப்பு",
    sacredTexts: "புனித நூல்கள்",
    studies: "படிப்புகள்",
    teachings: "கற்பித்தல்கள்",
    blog: "வலைப்பதிவு",
    resources: "வளங்கள்",
    meditation: "தியானம்"
  },
  en: {
    home: "Home",
    sacredTexts: "Sacred Texts",
    studies: "Studies",
    teachings: "Teachings",
    blog: "Blog",
    resources: "Resources",
    meditation: "Meditation"
  },
  es: {
    home: "Inicio",
    sacredTexts: "Textos Sagrados",
    studies: "Estudios",
    teachings: "Enseñanzas",
    blog: "Blog",
    resources: "Recursos",
    meditation: "Meditación"
  },
  fr: {
    home: "Accueil",
    sacredTexts: "Textes Sacrés",
    studies: "Études",
    teachings: "Enseignements",
    blog: "Blog",
    resources: "Ressources",
    meditation: "Méditation"
  },
  de: {
    home: "Startseite",
    sacredTexts: "Heilige Schriften",
    studies: "Studien",
    teachings: "Lehren",
    blog: "Blog",
    resources: "Ressourcen",
    meditation: "Meditation"
  },
  it: {
    home: "Home",
    sacredTexts: "Testi Sacri",
    studies: "Studi",
    teachings: "Insegnamenti",
    blog: "Blog",
    resources: "Risorse",
    meditation: "Meditazione"
  },
  pt: {
    home: "Início",
    sacredTexts: "Textos Sagrados",
    studies: "Estudos",
    teachings: "Ensinamentos",
    blog: "Blog",
    resources: "Recursos",
    meditation: "Meditação"
  },
  ru: {
    home: "Главная",
    sacredTexts: "Священные Тексты",
    studies: "Исследования",
    teachings: "Учения",
    blog: "Блог",
    resources: "Ресурсы",
    meditation: "Медитация"
  },
  zh: {
    home: "首页",
    sacredTexts: "圣典",
    studies: "研究",
    teachings: "教义",
    blog: "博客",
    resources: "资源",
    meditation: "冥想"
  },
  ja: {
    home: "ホーム",
    sacredTexts: "聖典",
    studies: "研究",
    teachings: "教え",
    blog: "ブログ",
    resources: "リソース",
    meditation: "瞑想"
  },
  ko: {
    home: "홈",
    sacredTexts: "성경",
    studies: "연구",
    teachings: "가르침",
    blog: "블로그",
    resources: "자원",
    meditation: "명상"
  },
  ar: {
    home: "الرئيسية",
    sacredTexts: "النصوص المقدسة",
    studies: "الدراسات",
    teachings: "التعاليم",
    blog: "المدونة",
    resources: "الموارد",
    meditation: "التأمل"
  },
  hi: {
    home: "होम",
    sacredTexts: "पवित्र ग्रंथ",
    studies: "अध्ययन",
    teachings: "शिक्षाएं",
    blog: "ब्लॉग",
    resources: "संसाधन",
    meditation: "ध्यान"
  },
  th: {
    home: "หน้าแรก",
    sacredTexts: "คัมภีร์ศักดิ์สิทธิ์",
    studies: "การศึกษา",
    teachings: "คำสอน",
    blog: "บล็อก",
    resources: "ทรัพยากร",
    meditation: "การทำสมาธิ"
  },
  vi: {
    home: "Trang chủ",
    sacredTexts: "Kinh Thánh",
    studies: "Nghiên cứu",
    teachings: "Giáo lý",
    blog: "Blog",
    resources: "Tài nguyên",
    meditation: "Thiền định"
  },
  id: {
    home: "Beranda",
    sacredTexts: "Teks Suci",
    studies: "Studi",
    teachings: "Ajaran",
    blog: "Blog",
    resources: "Sumber Daya",
    meditation: "Meditasi"
  },
  ms: {
    home: "Utama",
    sacredTexts: "Teks Suci",
    studies: "Kajian",
    teachings: "Pengajaran",
    blog: "Blog",
    resources: "Sumber",
    meditation: "Meditasi"
  },
  fil: {
    home: "Tahanan",
    sacredTexts: "Mga Banal na Kasulatan",
    studies: "Mga Pag-aaral",
    teachings: "Mga Turo",
    blog: "Blog",
    resources: "Mga Mapagkukunan",
    meditation: "Meditasyon"
  },
  tr: {
    home: "Ana Sayfa",
    sacredTexts: "Kutsal Metinler",
    studies: "Çalışmalar",
    teachings: "Öğretiler",
    blog: "Blog",
    resources: "Kaynaklar",
    meditation: "Meditasyon"
  },
  pl: {
    home: "Strona główna",
    sacredTexts: "Święte Teksty",
    studies: "Studia",
    teachings: "Nauki",
    blog: "Blog",
    resources: "Zasoby",
    meditation: "Medytacja"
  },
  nl: {
    home: "Home",
    sacredTexts: "Heilige Teksten",
    studies: "Studies",
    teachings: "Leer",
    blog: "Blog",
    resources: "Bronnen",
    meditation: "Meditatie"
  },
  sv: {
    home: "Hem",
    sacredTexts: "Heliga Skrifter",
    studies: "Studier",
    teachings: "Läror",
    blog: "Blogg",
    resources: "Resurser",
    meditation: "Meditation"
  },
  da: {
    home: "Hjem",
    sacredTexts: "Hellige Skrifter",
    studies: "Studier",
    teachings: "Lære",
    blog: "Blog",
    resources: "Ressourcer",
    meditation: "Meditation"
  },
  no: {
    home: "Hjem",
    sacredTexts: "Hellige Skrifter",
    studies: "Studier",
    teachings: "Lære",
    blog: "Blogg",
    resources: "Ressurser",
    meditation: "Meditasjon"
  },
  fi: {
    home: "Koti",
    sacredTexts: "Pyhät Kirjoitukset",
    studies: "Tutkimukset",
    teachings: "Opetukset",
    blog: "Blogi",
    resources: "Resurssit",
    meditation: "Meditaatio"
  },
  cs: {
    home: "Domů",
    sacredTexts: "Posvátné Texty",
    studies: "Studie",
    teachings: "Učení",
    blog: "Blog",
    resources: "Zdroje",
    meditation: "Meditace"
  },
  hu: {
    home: "Főoldal",
    sacredTexts: "Szent Írások",
    studies: "Tanulmányok",
    teachings: "Tanítások",
    blog: "Blog",
    resources: "Erőforrások",
    meditation: "Meditáció"
  },
  ro: {
    home: "Acasă",
    sacredTexts: "Texte Sacre",
    studies: "Studii",
    teachings: "Învățături",
    blog: "Blog",
    resources: "Resurse",
    meditation: "Meditație"
  },
  el: {
    home: "Αρχική",
    sacredTexts: "Ιερά Κείμενα",
    studies: "Μελέτες",
    teachings: "Διδασκαλίες",
    blog: "Ιστολόγιο",
    resources: "Πόροι",
    meditation: "Διαλογισμός"
  },
  bg: {
    home: "Начало",
    sacredTexts: "Свещени Текстове",
    studies: "Изследвания",
    teachings: "Учения",
    blog: "Блог",
    resources: "Ресурси",
    meditation: "Медитация"
  },
  hr: {
    home: "Početna",
    sacredTexts: "Sveti Tekstovi",
    studies: "Studije",
    teachings: "Učenja",
    blog: "Blog",
    resources: "Resursi",
    meditation: "Meditacija"
  },
  sk: {
    home: "Domov",
    sacredTexts: "Sväté Texty",
    studies: "Štúdie",
    teachings: "Učenia",
    blog: "Blog",
    resources: "Zdroje",
    meditation: "Meditácia"
  },
  sl: {
    home: "Domov",
    sacredTexts: "Sveti Teksti",
    studies: "Študije",
    teachings: "Učenja",
    blog: "Blog",
    resources: "Viri",
    meditation: "Meditacija"
  },
  lt: {
    home: "Pradžia",
    sacredTexts: "Šventieji Tekstai",
    studies: "Studijos",
    teachings: "Mokymai",
    blog: "Tinklaraštis",
    resources: "Ištekliai",
    meditation: "Meditacija"
  },
  lv: {
    home: "Sākums",
    sacredTexts: "Svētie Raksti",
    studies: "Pētījumi",
    teachings: "Mācības",
    blog: "Blogs",
    resources: "Resursi",
    meditation: "Meditācija"
  },
  et: {
    home: "Avaleht",
    sacredTexts: "Pühakirjad",
    studies: "Uuringud",
    teachings: "Õpetused",
    blog: "Blogi",
    resources: "Ressursid",
    meditation: "Meditatsioon"
  },
  uk: {
    home: "Головна",
    sacredTexts: "Священні Тексти",
    studies: "Дослідження",
    teachings: "Вчення",
    blog: "Блог",
    resources: "Ресурси",
    meditation: "Медитація"
  },
  sr: {
    home: "Почетна",
    sacredTexts: "Свети Текстови",
    studies: "Студије",
    teachings: "Учења",
    blog: "Блог",
    resources: "Ресурси",
    meditation: "Медитација"
  },
  he: {
    home: "בית",
    sacredTexts: "טקסטים קדושים",
    studies: "מחקרים",
    teachings: "תורות",
    blog: "בלוג",
    resources: "משאבים",
    meditation: "מדיטציה"
  },
  kn: {
    home: "ಮುಖಪುಟ",
    sacredTexts: "ಪವಿತ್ರ ಗ್ರಂಥಗಳು",
    studies: "ಅಧ್ಯಯನಗಳು",
    teachings: "ಬೋಧನೆಗಳು",
    blog: "ಬ್ಲಾಗ್",
    resources: "ಸಂಪನ್ಮೂಲಗಳು",
    meditation: "ಧ್ಯಾನ"
  },
  pa: {
    home: "ਹੋਮ",
    sacredTexts: "ਪਵਿੱਤਰ ਗ੍ਰੰਥ",
    studies: "ਅਧਿਐਨ",
    teachings: "ਸਿੱਖਿਆਵਾਂ",
    blog: "ਬਲੌਗ",
    resources: "ਸਰੋਤ",
    meditation: "ਧਿਆਨ"
  }
}

function updateNavigation() {
  languageFiles.forEach(lang => {
    const filePath = path.join(messagesDir, `${lang}.json`)
    
    // Read existing content
    let existingContent = {}
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8')
      existingContent = JSON.parse(fileContent)
    } catch (error) {
      console.log(`Error reading file for ${lang}: ${error.message}`)
      return
    }
    
    // Update navigation structure
    if (existingContent.common && existingContent.common.navigation) {
      const translations = NAVIGATION_TRANSLATIONS[lang] || NAVIGATION_TRANSLATIONS.en
      existingContent.common.navigation = {
        home: translations.home,
        sacredTexts: translations.sacredTexts,
        studies: translations.studies,
        teachings: translations.teachings,
        blog: translations.blog,
        resources: translations.resources,
        meditation: translations.meditation
      }
      
      // Write back to file
      fs.writeFileSync(
        filePath,
        JSON.stringify(existingContent, null, 2),
        'utf8'
      )
      
      console.log(`Updated navigation for ${lang}`)
    } else {
      console.log(`Skipping ${lang} - missing common.navigation structure`)
    }
  })
}

// Run the script
updateNavigation() 