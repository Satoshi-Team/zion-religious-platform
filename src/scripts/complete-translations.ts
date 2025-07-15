import fs from 'fs'
import path from 'path'

type LanguageCode = 'mr' | 'mni' | 'ml' | 'kok' | 'ks' | 'as' | 'gu' | 'si' | 'ne' | 'bn' | 'ur' | 'te' | 'ta'

interface Translation {
  common: {
    navigation: {
      home: string
      blog: string
      bible: string
      religion: string
      resources: string
      studies: string
      meditation: string
      teachings: string
    }
    actions: {
      readMore: string
      learnMore: string
      explore: string
      search: string
      share: string
    }
    footer: {
      privacy: string
      terms: string
      contact: string
      about: string
    }
  }
}

const LANGUAGES_TO_COMPLETE: LanguageCode[] = [
  'mr', // Marathi
  'mni', // Manipuri
  'ml', // Malayalam
  'kok', // Konkani
  'ks', // Kashmiri
  'as', // Assamese
  'gu', // Gujarati
  'si', // Sinhala
  'ne', // Nepali
  'bn', // Bengali
  'ur', // Urdu
  'te', // Telugu
  'ta'  // Tamil
]

const TRANSLATIONS: Record<LanguageCode, Translation> = {
  mr: {
    common: {
      navigation: {
        home: "मुख्यपृष्ठ",
        blog: "ब्लॉग",
        bible: "बायबल",
        religion: "धर्म",
        resources: "संसाधने",
        studies: "अभ्यास",
        meditation: "ध्यान",
        teachings: "शिकवणी"
      },
      actions: {
        readMore: "अधिक वाचा",
        learnMore: "अधिक जाणून घ्या",
        explore: "अन्वेषण करा",
        search: "शोधा",
        share: "शेअर करा"
      },
      footer: {
        privacy: "गोपनीयता",
        terms: "नियम आणि अटी",
        contact: "संपर्क",
        about: "आमच्याबद्दल"
      }
    }
  },
  mni: {
    common: {
      navigation: {
        home: "মূল পৃষ্ঠা",
        blog: "ব্লগ",
        bible: "বাইবেল",
        religion: "ধর্ম",
        resources: "সমল",
        studies: "অধ্যয়ন",
        meditation: "ধ্যান",
        teachings: "শিক্ষা"
      },
      actions: {
        readMore: "অধিক পঢ়ক",
        learnMore: "অধিক জানক",
        explore: "অন্বেষণ কৰক",
        search: "সন্ধান কৰক",
        share: "শ্বেয়াৰ কৰক"
      },
      footer: {
        privacy: "গোপনীয়তা",
        terms: "নিয়ম আৰু চৰ্ত",
        contact: "যোগাযোগ",
        about: "আমাৰ বিষয়ে"
      }
    }
  },
  ml: {
    common: {
      navigation: {
        home: "ഹോം",
        blog: "ബ്ലോഗ്",
        bible: "ബൈബിൾ",
        religion: "മതം",
        resources: "വിഭവങ്ങൾ",
        studies: "പഠനങ്ങൾ",
        meditation: "ധ്യാനം",
        teachings: "ഉപദേശങ്ങൾ"
      },
      actions: {
        readMore: "കൂടുതൽ വായിക്കുക",
        learnMore: "കൂടുതൽ അറിയുക",
        explore: "അറിയുക",
        search: "തിരയുക",
        share: "പങ്കുവയ്ക്കുക"
      },
      footer: {
        privacy: "സ്വകാര്യത",
        terms: "നിബന്ധനകൾ",
        contact: "ബന്ധപ്പെടുക",
        about: "ഞങ്ങളെക്കുറിച്ച്"
      }
    }
  },
  kok: {
    common: {
      navigation: {
        home: "मुखेल पान",
        blog: "ब्लॉग",
        bible: "बायबल",
        religion: "धर्म",
        resources: "संसाधनां",
        studies: "अभ्यास",
        meditation: "ध्यान",
        teachings: "शिकवणी"
      },
      actions: {
        readMore: "अधिक वाचात",
        learnMore: "अधिक शिकात",
        explore: "शोधात",
        search: "सोदात",
        share: "वांटात"
      },
      footer: {
        privacy: "गुप्तताय",
        terms: "नियम आनी अटी",
        contact: "संपर्क",
        about: "आमकडे विशीं"
      }
    }
  },
  ks: {
    common: {
      navigation: {
        home: "گھر",
        blog: "بلاگ",
        bible: "بائبل",
        religion: "مذہب",
        resources: "وسائل",
        studies: "مطالعہ",
        meditation: "مراقبہ",
        teachings: "تعلیمات"
      },
      actions: {
        readMore: "وادھو پڑھو",
        learnMore: "وادھو جانو",
        explore: "دریافت کرو",
        search: "ڳولو",
        share: "شیئر کرو"
      },
      footer: {
        privacy: "رازداری",
        terms: "شرطاں",
        contact: "رابطہ",
        about: "اسان بارے"
      }
    }
  },
  as: {
    common: {
      navigation: {
        home: "মূল পৃষ্ঠা",
        blog: "ব্লগ",
        bible: "বাইবেল",
        religion: "ধর্ম",
        resources: "সমল",
        studies: "অধ্যয়ন",
        meditation: "ধ্যান",
        teachings: "শিক্ষা"
      },
      actions: {
        readMore: "অধিক পঢ়ক",
        learnMore: "অধিক জানক",
        explore: "অন্বেষণ কৰক",
        search: "সন্ধান কৰক",
        share: "শ্বেয়াৰ কৰক"
      },
      footer: {
        privacy: "গোপনীয়তা",
        terms: "নিয়ম আৰু চৰ্ত",
        contact: "যোগাযোগ",
        about: "আমাৰ বিষয়ে"
      }
    }
  },
  gu: {
    common: {
      navigation: {
        home: "હોમ",
        blog: "બ્લોગ",
        bible: "બાઇબલ",
        religion: "ધર્મ",
        resources: "સંસાધનો",
        studies: "અભ્યાસ",
        meditation: "ધ્યાન",
        teachings: "શિક્ષણ"
      },
      actions: {
        readMore: "વધુ વાંચો",
        learnMore: "વધુ જાણો",
        explore: "શોધો",
        search: "શોધો",
        share: "શેર કરો"
      },
      footer: {
        privacy: "ગોપનીયતા",
        terms: "નિયમો અને શરતો",
        contact: "સંપર્ક",
        about: "અમારા વિશે"
      }
    }
  },
  si: {
    common: {
      navigation: {
        home: "මුල් පිටුව",
        blog: "බ්ලොග්",
        bible: "බයිබලය",
        religion: "ආගම",
        resources: "සම්පත්",
        studies: "අධ්‍යයන",
        meditation: "භාවනා",
        teachings: "ඉගැන්වීම්"
      },
      actions: {
        readMore: "තවත් කියවන්න",
        learnMore: "තවත් දැනගන්න",
        explore: "ගවේෂණය කරන්න",
        search: "සොයන්න",
        share: "බෙදාගන්න"
      },
      footer: {
        privacy: "පෞද්ගලිකත්වය",
        terms: "නියමයන් සහ කොන්දේසි",
        contact: "සම්බන්ධ වන්න",
        about: "අප ගැන"
      }
    }
  },
  ne: {
    common: {
      navigation: {
        home: "मुख्य पृष्ठ",
        blog: "ब्लग",
        bible: "बाइबल",
        religion: "धर्म",
        resources: "स्रोतहरू",
        studies: "अध्ययन",
        meditation: "ध्यान",
        teachings: "शिक्षा"
      },
      actions: {
        readMore: "अझै पढ्नुहोस्",
        learnMore: "अझै जान्नुहोस्",
        explore: "अन्वेषण गर्नुहोस्",
        search: "खोज्नुहोस्",
        share: "साझेदारी गर्नुहोस्"
      },
      footer: {
        privacy: "गोपनीयता",
        terms: "नियम र शर्तहरू",
        contact: "सम्पर्क",
        about: "हाम्रोबारे"
      }
    }
  },
  bn: {
    common: {
      navigation: {
        home: "হোম",
        blog: "ব্লগ",
        bible: "বাইবেল",
        religion: "ধর্ম",
        resources: "সম্পদ",
        studies: "অধ্যয়ন",
        meditation: "ধ্যান",
        teachings: "শিক্ষা"
      },
      actions: {
        readMore: "আরও পড়ুন",
        learnMore: "আরও জানুন",
        explore: "অন্বেষণ করুন",
        search: "অনুসন্ধান করুন",
        share: "শেয়ার করুন"
      },
      footer: {
        privacy: "গোপনীয়তা",
        terms: "নিয়ম ও শর্তাবলী",
        contact: "যোগাযোগ",
        about: "আমাদের সম্পর্কে"
      }
    }
  },
  ur: {
    common: {
      navigation: {
        home: "ہوم",
        blog: "بلاگ",
        bible: "بائبل",
        religion: "مذہب",
        resources: "وسائل",
        studies: "مطالعہ",
        meditation: "مراقبہ",
        teachings: "تعلیمات"
      },
      actions: {
        readMore: "مزید پڑھیں",
        learnMore: "مزید جانیں",
        explore: "دریافت کریں",
        search: "تلاش کریں",
        share: "شیئر کریں"
      },
      footer: {
        privacy: "رازداری",
        terms: "شرائط و ضوابط",
        contact: "رابطہ",
        about: "ہمارے بارے میں"
      }
    }
  },
  te: {
    common: {
      navigation: {
        home: "హోమ్",
        blog: "బ్లాగ్",
        bible: "బైబిల్",
        religion: "మతం",
        resources: "వనరులు",
        studies: "అధ్యయనాలు",
        meditation: "ధ్యానం",
        teachings: "బోధనలు"
      },
      actions: {
        readMore: "మరింత చదవండి",
        learnMore: "మరింత తెలుసుకోండి",
        explore: "అన్వేషించండి",
        search: "వెతకండి",
        share: "షేర్ చేయండి"
      },
      footer: {
        privacy: "గోప్యత",
        terms: "నిబంధనలు",
        contact: "సంప్రదించండి",
        about: "మా గురించి"
      }
    }
  },
  ta: {
    common: {
      navigation: {
        home: "முகப்பு",
        blog: "வலைப்பதிவு",
        bible: "விவிலியம்",
        religion: "மதம்",
        resources: "வளங்கள்",
        studies: "படிப்புகள்",
        meditation: "தியானம்",
        teachings: "கற்பித்தல்கள்"
      },
      actions: {
        readMore: "மேலும் படிக்க",
        learnMore: "மேலும் அறிய",
        explore: "ஆராயுங்கள்",
        search: "தேடுங்கள்",
        share: "பகிருங்கள்"
      },
      footer: {
        privacy: "தனியுரிமை",
        terms: "விதிமுறைகள்",
        contact: "தொடர்பு",
        about: "எங்களை பற்றி"
      }
    }
  }
}

function completeTranslations() {
  const messagesDir = path.join(process.cwd(), 'src', 'messages')
  
  LANGUAGES_TO_COMPLETE.forEach(lang => {
    const filePath = path.join(messagesDir, `${lang}.json`)
    
    // Read existing content
    let existingContent = {}
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8')
      existingContent = JSON.parse(fileContent)
    } catch (error) {
      console.log(`Creating new file for ${lang}`)
    }
    
    // Merge translations
    const mergedContent = {
      ...existingContent,
      ...TRANSLATIONS[lang]
    }
    
    // Write back to file
    fs.writeFileSync(
      filePath,
      JSON.stringify(mergedContent, null, 2),
      'utf8'
    )
    
    console.log(`Completed translations for ${lang}`)
  })
}

// Run the script
completeTranslations() 