import { type ReligiousStudy } from "@/lib/types/resources"

interface ReligiousStudyResource {
  id: string
  name: string
  description: string
  url: string
  type: 'study' | 'text' | 'audio' | 'video' | 'reference' | 'course'
  religion: string
  language: string
  topics: string[]
  isVerified: boolean
  organization?: string
  verifiedBy?: string
  availableLanguages?: string[]
}

export const RELIGIOUS_STUDIES: ReligiousStudy[] = [
  // Christianity - Bible Studies
  {
    id: "bible-project",
    name: "The Bible Project",
    description: "High-quality videos and study resources exploring biblical themes",
    url: "https://bibleproject.com",
    type: "video",
    religion: "Christianity",
    language: "Multiple",
    topics: ["Bible Study", "Biblical Themes", "Biblical Hebrew", "Biblical Greek"],
    isVerified: true,
    organization: "The Bible Project",
    verifiedBy: "Educational Institutions"
  },
  {
    id: "yale-divinity",
    name: "Yale Bible Study",
    description: "Free academic Bible study resources from Yale Divinity School",
    url: "https://yalebiblestudy.org",
    type: "course",
    religion: "Christianity",
    language: "English",
    topics: ["Academic Bible Study", "Biblical History", "Theology"],
    isVerified: true,
    organization: "Yale Divinity School",
    verifiedBy: "Yale University"
  },

  // Islam - Quranic Studies
  {
    id: "sunnah-com",
    name: "Sunnah.com",
    description: "Authenticated hadith database with multiple translations",
    url: "https://sunnah.com",
    type: "reference",
    religion: "Islam",
    language: "Multiple",
    topics: ["Hadith", "Islamic Law", "Prophet's Teachings"],
    isVerified: true,
    organization: "Sunnah Foundation",
    verifiedBy: "Islamic Scholars"
  },
  {
    id: "seekersguidance",
    name: "SeekersGuidance",
    description: "Free Islamic courses and resources",
    url: "https://seekersguidance.org",
    type: "course",
    religion: "Islam",
    language: "Multiple",
    topics: ["Islamic Studies", "Fiqh", "Theology"],
    isVerified: true,
    organization: "SeekersGuidance",
    verifiedBy: "Islamic Scholars Council"
  },

  // Judaism - Torah Studies
  {
    id: "my-jewish-learning",
    name: "My Jewish Learning",
    description: "Comprehensive resource for Jewish learning",
    url: "https://www.myjewishlearning.com",
    type: "study",
    religion: "Judaism",
    language: "English",
    topics: ["Torah", "Jewish History", "Jewish Practice", "Traditions"],
    isVerified: true,
    organization: "70 Faces Media",
    verifiedBy: "Jewish Scholars"
  },

  // Buddhism
  {
    id: "dharma-org",
    name: "Dharma.org",
    description: "Insight Meditation Society's dharma talks and resources",
    url: "https://dharma.org",
    type: "audio",
    religion: "Buddhism",
    language: "English",
    topics: ["Meditation", "Buddhist Philosophy", "Mindfulness"],
    isVerified: true,
    organization: "Insight Meditation Society",
    verifiedBy: "Buddhist Teachers Association"
  },

  // Adding new comprehensive study resources
  {
    id: "harvard-world-religions",
    name: "World Religions Through Their Scriptures",
    description: "Harvard's comprehensive course on world religions",
    url: "https://online-learning.harvard.edu/course/religious-literacy",
    type: "course",
    religion: "Comparative",
    language: "English",
    topics: ["Comparative Religion", "Scripture", "Religious Literacy"],
    isVerified: true,
    organization: "Harvard University",
    verifiedBy: "Harvard Divinity School"
  },
  {
    id: "oxford-islamic-studies",
    name: "Oxford Islamic Studies Online",
    description: "Comprehensive resource for Islamic studies",
    url: "https://www.oxfordislamicstudies.com",
    type: "reference",
    religion: "Islam",
    language: "Multiple",
    topics: ["Islamic Law", "Quran Studies", "Islamic History"],
    isVerified: true,
    organization: "Oxford University Press",
    verifiedBy: "Oxford Centre for Islamic Studies"
  },
  {
    id: "stanford-buddhist-studies",
    name: "Buddhist Studies Forum",
    description: "Stanford's Buddhist studies resource collection",
    url: "https://religiousstudies.stanford.edu/buddhist-studies",
    type: "study",
    religion: "Buddhism",
    language: "English",
    topics: ["Buddhist Philosophy", "Meditation", "Buddhist Texts"],
    isVerified: true,
    organization: "Stanford University",
    verifiedBy: "Department of Religious Studies"
  },
  {
    id: "hebrew-university-jewish-studies",
    name: "Center for Jewish Studies",
    description: "Comprehensive Jewish studies program with digital resources",
    url: "https://scholarships.huji.ac.il/jewish-studies",
    type: "study",
    religion: "Judaism",
    language: "Multiple",
    topics: ["Jewish Law", "Hebrew Literature", "Jewish History", "Rabbinics"],
    isVerified: true,
    organization: "Hebrew University of Jerusalem",
    verifiedBy: "Israel Council for Higher Education",
    availableLanguages: ["he", "en", "yi", "la", "ar", "fr", "de"]
  },
  {
    id: "icabs-otani",
    name: "International College for Advanced Buddhist Studies Digital Archives",
    description: "Digital archives and research resources for Buddhist studies",
    url: "https://icabs.otani.ac.jp/en",
    type: "research",
    religion: "Buddhism",
    language: "Multiple",
    topics: ["Japanese Buddhism", "Buddhist Art", "Zen Studies", "Buddhist Philosophy"],
    organization: "Otani University"
  },
  {
    id: "islamic-manuscripts",
    name: "Islamic Manuscripts Collection",
    description: "Digital collection of Islamic manuscripts and research materials",
    url: "https://www.islamic-manuscripts.net",
    type: "reference",
    religion: "Islam",
    language: "Multiple",
    topics: ["Islamic Manuscripts", "Codicology", "Islamic Art", "Calligraphy"],
    isVerified: true,
    organization: "Leiden University",
    verifiedBy: "International Islamic Manuscript Association",
    availableLanguages: ["ar", "fa", "tr", "ur", "en", "fr", "de"]
  },
  {
    id: "vedic-studies-center",
    name: "Center for Indic Studies",
    description: "Comprehensive research center for Vedic and Hindu studies",
    url: "https://www.bhu.ac.in/vedic-studies",
    type: "study",
    religion: "Hinduism",
    language: "Multiple",
    topics: ["Vedic Literature", "Sanskrit Studies", "Hindu Philosophy", "Comparative Religion"],
    isVerified: true,
    organization: "Banaras Hindu University",
    verifiedBy: "UGC India",
    availableLanguages: ["sa", "hi", "en", "bn", "ta", "te", "kn", "ml"]
  },
  {
    id: "tibetan-buddhist-resource",
    name: "Tibetan Buddhist Resource Center",
    description: "Digital library and research center for Tibetan Buddhism",
    url: "https://www.tbrc.org",
    type: "reference",
    religion: "Buddhism",
    language: "Multiple",
    topics: ["Tibetan Buddhism", "Buddhist Texts", "Tibetan Language", "Buddhist Art"],
    isVerified: true,
    organization: "Buddhist Digital Resource Center",
    verifiedBy: "American Institute of Buddhist Studies",
    availableLanguages: ["bo", "en", "zh", "hi", "sa", "ne"]
  },
  {
    id: "vatican-education",
    name: "Pontifical Biblical Institute",
    description: "Advanced biblical and ancient Near Eastern studies",
    url: "https://www.biblico.it",
    type: "course",
    religion: "Christianity",
    language: "Multiple",
    topics: ["Biblical Studies", "Ancient Languages", "Archaeology", "Patristics"],
    isVerified: true,
    organization: "Vatican",
    verifiedBy: "Holy See",
    availableLanguages: ["la", "it", "en", "es", "fr", "de", "he", "grc", "egy"]
  },
  {
    id: "dead-sea-scrolls-institute",
    name: "Dead Sea Scrolls Digital Project",
    description: "Comprehensive study of the Dead Sea Scrolls with high-resolution imagery and translations",
    url: "https://www.deadseascrolls.org.il/",
    type: "reference",
    religion: "Judaism",
    language: "Multiple",
    topics: ["Dead Sea Scrolls", "Second Temple Judaism", "Biblical Archaeology", "Ancient Hebrew"],
    isVerified: true,
    organization: "Israel Antiquities Authority",
    verifiedBy: "Israel Museum Jerusalem",
    availableLanguages: ["he", "en", "ar", "fr", "de", "es", "ru", "grc", "akk"]
  },
  {
    id: "sanskrit-traditions",
    name: "Digital Corpus of Sanskrit",
    description: "Advanced research platform for Sanskrit texts and traditions",
    url: "https://www.sanskrit-linguistics.org/",
    type: "reference",
    religion: "Hinduism",
    language: "Multiple",
    topics: ["Sanskrit Grammar", "Vedic Studies", "Historical Linguistics", "Manuscript Studies"],
    isVerified: true,
    organization: "University of Heidelberg",
    verifiedBy: "International Association of Sanskrit Studies",
    availableLanguages: ["sa", "en", "de", "hi", "bn", "ta", "te", "kn", "ml"]
  },
  {
    id: "coptic-studies",
    name: "Coptic Studies Resource Center",
    description: "Digital repository of Coptic manuscripts and research materials",
    url: "https://copticsources.org",
    type: "reference",
    religion: "Christianity",
    language: "Multiple",
    topics: ["Coptic Christianity", "Early Christian Texts", "Egyptian Christianity", "Monasticism"],
    isVerified: true,
    organization: "Claremont Graduate University",
    verifiedBy: "International Association for Coptic Studies",
    availableLanguages: ["cop", "ar", "en", "fr", "de", "it", "egy", "grc"]
  },
  {
    id: "zoroastrian-archives",
    name: "UNESCO Zoroastrian Archives",
    description: "Digital archive of Zoroastrian texts and scholarly research",
    url: "https://www.unesco.org/zoroastrian-archives",
    type: "reference",
    religion: "Zoroastrianism",
    language: "Multiple",
    topics: ["Avestan Studies", "Zoroastrian Rituals", "Iranian Religious History", "Sacred Fire Temples"],
    isVerified: true,
    organization: "UNESCO",
    verifiedBy: "International Association of Zoroastrian Studies",
    availableLanguages: ["ae", "fa", "en", "gu", "sa", "fr", "de"]
  },
  {
    id: "taoism-studies",
    name: "Daoist Studies Center",
    description: "Comprehensive digital library of Daoist texts and practices",
    url: "https://daoistudies.org",
    type: "study",
    religion: "Taoism",
    language: "Multiple",
    topics: ["Daoist Texts", "Chinese Philosophy", "Meditation Practices", "Religious Taoism"],
    isVerified: true,
    organization: "Chinese Academy of Social Sciences",
    verifiedBy: "International Conference on Daoist Studies",
    availableLanguages: ["zh", "en", "ja", "ko", "fr", "de"]
  },

  // Interfaith & Comparative Religion
  {
    id: "parliament-religions",
    name: "Parliament of World's Religions Digital Library",
    description: "Comprehensive archive of interfaith dialogue and comparative religious studies",
    url: "https://parliamentofreligions.org/digital-library",
    type: "reference",
    religion: "Comparative",
    language: "Multiple",
    topics: ["Interfaith Dialogue", "Religious Harmony", "Comparative Theology", "Global Ethics"],
    isVerified: true,
    organization: "Parliament of World's Religions",
    verifiedBy: "United Religions Initiative",
    availableLanguages: ["en", "es", "fr", "de", "ar", "zh", "hi", "ja", "ko", "ru"]
  },

  {
    id: "woolf-institute",
    name: "Woolf Institute Digital Resources",
    description: "Advanced research in Jewish-Christian-Muslim relations",
    url: "https://www.woolf.cam.ac.uk/research/resources",
    type: "study",
    religion: "Comparative",
    language: "Multiple",
    topics: ["Abrahamic Religions", "Interfaith Relations", "Religious Coexistence", "Cultural Dialogue"],
    isVerified: true,
    organization: "University of Cambridge",
    verifiedBy: "British Academy",
    availableLanguages: ["en", "he", "ar", "fr", "de"]
  },

  // Manuscript Studies & Digital Archaeology
  {
    id: "sinai-palimpsests",
    name: "Sinai Palimpsests Project",
    description: "Digital recovery of erased manuscripts from St. Catherine's Monastery",
    url: "https://sinai.library.ucla.edu",
    type: "reference",
    religion: "Multiple",
    language: "Multiple",
    topics: ["Manuscript Studies", "Digital Restoration", "Religious Texts", "Ancient Languages"],
    isVerified: true,
    organization: "UCLA Library",
    verifiedBy: "Early Manuscripts Electronic Library",
    availableLanguages: ["en", "el", "cop", "ar", "syr", "grc", "la", "he"]
  },

  {
    id: "digital-vatican-library",
    name: "DigiVatLib Manuscript Collection",
    description: "Digital Vatican Library's religious manuscript collection",
    url: "https://digi.vatlib.it/mss/",
    type: "reference",
    religion: "Multiple",
    language: "Multiple",
    topics: ["Religious Manuscripts", "Paleography", "Codicology", "Religious Art"],
    isVerified: true,
    organization: "Vatican Library",
    verifiedBy: "Vatican Museums",
    availableLanguages: ["la", "it", "en", "de", "fr", "es", "grc", "he", "ar"]
  },

  // Religious Heritage & Archaeological Resources
  {
    id: "religious-heritage-network",
    name: "Future for Religious Heritage Network",
    description: "European religious heritage preservation and research",
    url: "https://www.frh-europe.org/projects/",
    type: "reference",
    religion: "Multiple",
    language: "Multiple",
    topics: ["Religious Architecture", "Sacred Art", "Heritage Conservation", "Religious History"],
    isVerified: true,
    organization: "FRH Europe",
    verifiedBy: "European Commission",
    availableLanguages: ["en", "fr", "de", "it", "es", "nl", "pl"]
  },

  {
    id: "digital-silk-road",
    name: "Digital Silk Road Project",
    description: "Archaeological and textual studies of religious sites along the Silk Road",
    url: "https://dsr.nii.ac.jp/",
    type: "reference",
    religion: "Multiple",
    language: "Multiple",
    topics: ["Religious Archaeology", "Cultural Exchange", "Buddhist Art", "Ancient Trade Routes"],
    isVerified: true,
    organization: "National Institute of Informatics, Japan",
    verifiedBy: "UNESCO Silk Road Programme",
    availableLanguages: ["en", "ja", "zh", "ru", "fa", "sa", "ug"]
  }
]

// Verified Organizations that provide religious education
export const VERIFIED_ORGANIZATIONS = [
  {
    id: "harvard-div",
    name: "Harvard Divinity School",
    url: "https://hds.harvard.edu/religious-literacy-project"
  },
  {
    id: "world-council-churches",
    name: "World Council of Churches",
    url: "https://www.oikoumene.org"
  },
  // Add more verified organizations
] 