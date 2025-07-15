interface ReligiousContent {
  id: string
  name: string
  description: string
  url: string
  type: 'sermon' | 'lecture' | 'course' | 'podcast' | 'archive'
  religion: string
  denomination?: string
  language: string
  topics: string[]
  speaker?: {
    name: string
    title: string
    organization: string
    verified: boolean
  }
  organization: {
    name: string
    url: string
    verified: boolean
    verificationSource?: string
  }
  resources: {
    title: string
    url: string
    type: 'transcript' | 'audio' | 'video' | 'notes' | 'bibliography'
  }[]
  references: {
    title: string
    url: string
    type: 'academic' | 'religious' | 'institutional'
  }[]
  lastVerified: string // ISO date
}

export const RELIGIOUS_CONTENT: ReligiousContent[] = [
  // Christianity - Protestant
  {
    id: "tim-keller-archive",
    name: "Timothy Keller Sermon Archive",
    description: "Complete sermon archive from Timothy Keller at Redeemer Presbyterian Church",
    url: "https://gospelinlife.com",
    type: "archive",
    religion: "Christianity",
    denomination: "Presbyterian",
    language: "English",
    topics: ["Reformed Theology", "Apologetics", "Urban Ministry", "Gospel in Life"],
    speaker: {
      name: "Timothy Keller",
      title: "Pastor Emeritus",
      organization: "Redeemer Presbyterian Church",
      verified: true
    },
    organization: {
      name: "Gospel in Life",
      url: "https://gospelinlife.com",
      verified: true,
      verificationSource: "Redeemer Churches and Ministries"
    },
    resources: [
      {
        title: "Sermon Transcripts",
        url: "https://gospelinlife.com/downloads/",
        type: "transcript"
      },
      {
        title: "Audio Archive",
        url: "https://gospelinlife.com/downloads/",
        type: "audio"
      }
    ],
    references: [
      {
        title: "Redeemer Churches",
        url: "https://www.redeemer.com",
        type: "institutional"
      }
    ],
    lastVerified: "2024-03-20"
  },

  // Islam - Lectures
  {
    id: "yaqeen-institute",
    name: "Yaqeen Institute Lecture Series",
    description: "Academic research and lectures on Islamic thought and spirituality",
    url: "https://yaqeeninstitute.org",
    type: "lecture",
    religion: "Islam",
    language: "English",
    topics: ["Islamic Studies", "Contemporary Issues", "Spirituality", "Research"],
    organization: {
      name: "Yaqeen Institute for Islamic Research",
      url: "https://yaqeeninstitute.org",
      verified: true,
      verificationSource: "501(c)(3) research institute"
    },
    resources: [
      {
        title: "Research Papers",
        url: "https://yaqeeninstitute.org/publications",
        type: "bibliography"
      },
      {
        title: "Video Lectures",
        url: "https://yaqeeninstitute.org/videos",
        type: "video"
      }
    ],
    references: [
      {
        title: "Academic Advisory Board",
        url: "https://yaqeeninstitute.org/about/people",
        type: "academic"
      }
    ],
    lastVerified: "2024-03-20"
  },

  // Judaism - Lectures
  {
    id: "jewish-theological-seminary",
    name: "JTS Torah Online",
    description: "Jewish learning from the Jewish Theological Seminary",
    url: "https://www.jtsa.edu/torah/",
    type: "lecture",
    religion: "Judaism",
    denomination: "Conservative Judaism",
    language: "English",
    topics: ["Torah Study", "Jewish Law", "Jewish History", "Contemporary Judaism"],
    organization: {
      name: "Jewish Theological Seminary",
      url: "https://www.jtsa.edu",
      verified: true,
      verificationSource: "Accredited Academic Institution"
    },
    resources: [
      {
        title: "Weekly Torah Commentary",
        url: "https://www.jtsa.edu/torah/parashat-hashavua/",
        type: "transcript"
      },
      {
        title: "Video Lectures",
        url: "https://www.jtsa.edu/torah/video-lectures/",
        type: "video"
      }
    ],
    references: [
      {
        title: "Academic Programs",
        url: "https://www.jtsa.edu/academic-programs/",
        type: "academic"
      }
    ],
    lastVerified: "2024-03-20"
  },

  // Buddhism - Teachings
  {
    id: "plum-village",
    name: "Plum Village Dharma Talks",
    description: "Teachings from Thich Nhat Hanh and other Buddhist teachers",
    url: "https://plumvillage.org/dharma-talks/",
    type: "lecture",
    religion: "Buddhism",
    denomination: "Mahayana",
    language: "Multiple",
    topics: ["Mindfulness", "Meditation", "Buddhist Philosophy", "Engaged Buddhism"],
    organization: {
      name: "Plum Village Monastery",
      url: "https://plumvillage.org",
      verified: true,
      verificationSource: "International Buddhist Monastery"
    },
    resources: [
      {
        title: "Dharma Talks",
        url: "https://plumvillage.org/dharma-talks/",
        type: "audio"
      },
      {
        title: "Meditation Instructions",
        url: "https://plumvillage.org/meditation/",
        type: "video"
      }
    ],
    references: [
      {
        title: "About Plum Village",
        url: "https://plumvillage.org/about/",
        type: "institutional"
      }
    ],
    lastVerified: "2024-03-20"
  },

  // Christianity - Catholic
  {
    id: "vatican-library",
    name: "Vatican Digital Library",
    description: "Official digital archives and teachings from the Vatican Library",
    url: "https://www.vaticanlibrary.va/en/digital-library.html",
    type: "archive",
    religion: "Christianity",
    denomination: "Catholic",
    language: "Multiple",
    topics: ["Catholic Doctrine", "Church History", "Papal Documents", "Sacred Tradition"],
    organization: {
      name: "Vatican Library",
      url: "https://www.vaticanlibrary.va",
      verified: true,
      verificationSource: "The Holy See"
    },
    resources: [
      {
        title: "Digital Manuscripts",
        url: "https://digi.vatlib.it/",
        type: "bibliography"
      },
      {
        title: "Vatican Documents",
        url: "https://www.vatican.va/content/vatican/en.html",
        type: "transcript"
      }
    ],
    references: [
      {
        title: "Vatican Archives",
        url: "https://www.archivioapostolicovaticano.va/",
        type: "institutional"
      }
    ],
    lastVerified: "2024-03-20"
  },

  // Hinduism - Vedanta
  {
    id: "ramakrishna-mission",
    name: "Ramakrishna Mission Digital Archives",
    description: "Comprehensive collection of Vedantic teachings and spiritual discourses",
    url: "https://belurmath.org/digital-archives",
    type: "archive",
    religion: "Hinduism",
    denomination: "Vedanta",
    language: "Multiple",
    topics: ["Vedanta Philosophy", "Sanskrit Texts", "Spiritual Practice", "Comparative Religion"],
    organization: {
      name: "Ramakrishna Math and Mission",
      url: "https://belurmath.org",
      verified: true,
      verificationSource: "Registered Religious and Charitable Organization"
    },
    resources: [
      {
        title: "Complete Works of Vivekananda",
        url: "https://belurmath.org/complete-works-of-swami-vivekananda/",
        type: "transcript"
      },
      {
        title: "Vedanta Lectures",
        url: "https://www.vedanta.org/lectures/",
        type: "audio"
      }
    ],
    references: [
      {
        title: "About Ramakrishna Mission",
        url: "https://belurmath.org/about-ramakrishna-math-and-mission/",
        type: "institutional"
      }
    ],
    lastVerified: "2024-03-20"
  },

  // Sikhism
  {
    id: "sikhiresource",
    name: "SikhiResource Digital Library",
    description: "Authentic Sikh teachings, history, and spiritual resources",
    url: "https://www.sikhresearch.com/",
    type: "archive",
    religion: "Sikhism",
    language: "Multiple",
    topics: ["Guru Granth Sahib", "Sikh History", "Gurbani", "Sikh Philosophy"],
    organization: {
      name: "Sikh Research Institute",
      url: "https://www.sikhri.org",
      verified: true,
      verificationSource: "Established Academic Institution"
    },
    resources: [
      {
        title: "Gurbani Research",
        url: "https://www.sikhri.org/gurbani",
        type: "transcript"
      },
      {
        title: "Historical Archives",
        url: "https://www.sikhri.org/historical_archives",
        type: "bibliography"
      }
    ],
    references: [
      {
        title: "Academic Programs",
        url: "https://www.sikhri.org/programs",
        type: "academic"
      }
    ],
    lastVerified: "2024-03-20"
  },

  // Jainism
  {
    id: "jain-library",
    name: "Digital Jain Library",
    description: "Comprehensive collection of Jain texts and teachings",
    url: "https://www.jainlibrary.org",
    type: "archive",
    religion: "Jainism",
    language: "Multiple",
    topics: ["Jain Philosophy", "Agamas", "Jain Ethics", "Non-violence"],
    organization: {
      name: "Jain eLibrary",
      url: "https://www.jainelibrary.org",
      verified: true,
      verificationSource: "Federation of Jain Associations"
    },
    resources: [
      {
        title: "Jain Texts",
        url: "https://www.jainelibrary.org/texts",
        type: "transcript"
      },
      {
        title: "Research Papers",
        url: "https://www.jainelibrary.org/research",
        type: "bibliography"
      }
    ],
    references: [
      {
        title: "About Jain eLibrary",
        url: "https://www.jainelibrary.org/about",
        type: "institutional"
      }
    ],
    lastVerified: "2024-03-20"
  }
] 