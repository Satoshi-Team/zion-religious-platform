import { BuddhismTranslations, buddhistTranslations } from './buddhist-translations'

export interface NavTranslations {
  home: string
  studies: string
  teachings: string
  resources: string
  meditation: string
  sacredTexts: string
}

export interface PageTranslations {
  title: string
  description: string
}

export interface SacredTextTranslations {
  title: string
  description: string
  features: string[]
  resources: {
    translations: string[]
    commentaries: string[]
    studyGuides: string[]
  }
  onlineAccess: {
    website: string
    app?: string
  }
}

export interface ResourcePageTranslations {
  title: string
  description: string
  level: string
  topics: string[]
  materials: string[]
  studyTips: string[]
}

export interface SacredTextsTranslations {
  bible: SacredTextTranslations
  quran: SacredTextTranslations
  buddhist: SacredTextTranslations
  hindu: SacredTextTranslations
  sikh: SacredTextTranslations
  zoroastrian: SacredTextTranslations
}

export interface LanguageTranslations {
  home: PageTranslations
  nav: NavTranslations
  studies: PageTranslations
  teachings: PageTranslations
  resources: PageTranslations
  meditation: PageTranslations
  sacredTexts: SacredTextsTranslations
  resourcePages: {
    beginner: ResourcePageTranslations
    intermediate: ResourcePageTranslations
    advanced: ResourcePageTranslations
  }
  history: {
    ancient: PageTranslations
    medieval: PageTranslations
    modern: PageTranslations
  }
  buddhist: BuddhismTranslations
}

export const translations: Record<string, LanguageTranslations> = {
  en: {
    home: {
      title: "Welcome to ZION.FM",
      description: "Your faith, your music, your station"
    },
    nav: {
      home: "Home",
      studies: "Studies",
      teachings: "Teachings",
      resources: "Resources",
      meditation: "Meditation",
      sacredTexts: "Sacred Texts"
    },
    studies: {
      title: "Studies",
      description: "Deep dive into religious texts"
    },
    teachings: {
      title: "Teachings",
      description: "Learn from experienced teachers"
    },
    resources: {
      title: "Resources",
      description: "Tools to help you grow"
    },
    meditation: {
      title: "Meditation",
      description: "Find peace and connection"
    },
    sacredTexts: {
      bible: {
        title: "The Bible",
        description: "Sacred texts of Christianity",
        features: [
          "Old Testament",
          "New Testament",
          "Commentaries",
          "Study guides"
        ],
        resources: {
          translations: [
            "King James Version",
            "New International Version",
            "English Standard Version"
          ],
          commentaries: [
            "Matthew Henry's Commentary",
            "The IVP Bible Commentary",
            "The New Bible Commentary"
          ],
          studyGuides: [
            "Bible Study Methods",
            "Biblical Interpretation Guide",
            "Historical Context Studies"
          ]
        },
        onlineAccess: {
          website: "https://www.biblegateway.com"
        }
      },
      quran: {
        title: "The Quran",
        description: "Sacred text of Islam",
        features: [
          "Surahs",
          "Ayahs",
          "Tafsir",
          "Study materials"
        ],
        resources: {
          translations: [
            "Sahih International",
            "Pickthall",
            "Yusuf Ali"
          ],
          commentaries: [
            "Tafsir Ibn Kathir",
            "Tafsir al-Jalalayn",
            "Maariful Quran"
          ],
          studyGuides: [
            "Quranic Sciences",
            "Thematic Studies",
            "Contextual Analysis"
          ]
        },
        onlineAccess: {
          website: "https://quran.com"
        }
      },
      buddhist: {
        title: "Buddhist Texts",
        description: "Collection of Buddhist scriptures and teachings",
        features: [
          "Sutras",
          "Commentaries",
          "Meditation guides",
          "Practice instructions"
        ],
        resources: {
          translations: [
            "Pali Canon",
            "Chinese Canon",
            "Tibetan Canon"
          ],
          commentaries: [
            "Traditional commentaries",
            "Modern interpretations",
            "Scholarly analysis"
          ],
          studyGuides: [
            "Buddhist Philosophy",
            "Meditation Techniques",
            "Ethical Guidelines"
          ]
        },
        onlineAccess: {
          website: "https://www.buddhanet.net"
        }
      },
      hindu: {
        title: "Hindu Scriptures",
        description: "Ancient texts of Hinduism",
        features: [
          "Vedas",
          "Upanishads",
          "Bhagavad Gita",
          "Puranas"
        ],
        resources: {
          translations: [
            "Sanskrit texts",
            "English translations",
            "Regional translations"
          ],
          commentaries: [
            "Traditional commentaries",
            "Modern interpretations",
            "Academic studies"
          ],
          studyGuides: [
            "Vedic Studies",
            "Philosophy guides",
            "Practice manuals"
          ]
        },
        onlineAccess: {
          website: "https://www.vedabase.com"
        }
      },
      sikh: {
        title: "Sikh Texts",
        description: "Sacred texts of Sikhism including the Guru Granth Sahib",
        features: [
          "Guru Granth Sahib",
          "Historical texts",
          "Devotional poetry",
          "Philosophical works"
        ],
        resources: {
          translations: [
            "Sri Guru Granth Sahib Ji",
            "English Translation",
            "Modern Interpretations"
          ],
          commentaries: [
            "Traditional Commentaries",
            "Modern Analysis",
            "Academic Studies"
          ],
          studyGuides: [
            "Gurbani Study Guide",
            "Historical Context",
            "Textual Analysis"
          ]
        },
        onlineAccess: {
          website: "https://www.sikhnet.com"
        }
      },
      zoroastrian: {
        title: "Zoroastrian Texts",
        description: "Ancient texts of Zoroastrianism including the Avesta",
        features: [
          "Avesta",
          "Gathas",
          "Historical texts",
          "Ritual instructions"
        ],
        resources: {
          translations: [
            "Sacred Books of the East",
            "Modern Translations",
            "Academic Editions"
          ],
          commentaries: [
            "Traditional Commentaries",
            "Modern Analysis",
            "Historical Studies"
          ],
          studyGuides: [
            "Understanding Avesta",
            "Historical Context",
            "Study Methods"
          ]
        },
        onlineAccess: {
          website: "http://www.avesta.org"
        }
      }
    },
    resourcePages: {
      beginner: {
        title: "Beginner's Path",
        description: "Start your religious learning journey",
        level: "Beginner",
        topics: [
          "Introduction to World Religions",
          "Basic Religious Concepts",
          "Sacred Text Overview",
          "Prayer and Meditation"
        ],
        materials: [
          "Introductory Materials",
          "Study Guides",
          "Audio Resources",
          "Video Lectures"
        ],
        studyTips: [
          "Start with basics",
          "Take it step by step",
          "Join study groups",
          "Ask questions"
        ]
      },
      intermediate: {
        title: "Intermediate Studies",
        description: "Deepen your understanding of religious traditions",
        level: "Intermediate",
        topics: [
          "Comparative Religion",
          "Religious History",
          "Textual Analysis",
          "Religious Philosophy"
        ],
        materials: [
          "Academic Works",
          "Research Papers",
          "Commentary Collections",
          "Online Courses"
        ],
        studyTips: [
          "Compare different perspectives",
          "Study historical context",
          "Develop critical thinking",
          "Engage in discussions"
        ]
      },
      advanced: {
        title: "Advanced Research",
        description: "Explore complex religious topics and academic research",
        level: "Advanced",
        topics: [
          "Religious Philosophy",
          "Textual Criticism",
          "Theological Studies",
          "Contemporary Issues"
        ],
        materials: [
          "Academic Journals",
          "Research Databases",
          "Primary Sources",
          "Scholarly Works"
        ],
        studyTips: [
          "Conduct independent research",
          "Write academic papers",
          "Attend conferences",
          "Build academic networks"
        ]
      }
    },
    history: {
      ancient: {
        title: "Ancient History",
        description: "Explore the roots of faith"
      },
      medieval: {
        title: "Medieval History",
        description: "Discover historical developments"
      },
      modern: {
        title: "Modern History",
        description: "Understand contemporary context"
      }
    },
    buddhist: buddhistTranslations.en
  }
}

export type TranslationKey = keyof LanguageTranslations | 
  `${keyof LanguageTranslations}.${string}` |
  `${keyof LanguageTranslations}.${string}.${string}`
