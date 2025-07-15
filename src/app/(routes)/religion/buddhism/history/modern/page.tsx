import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface HistoricalPeriod {
  name: string
  sanskritName: string
  paliName: string
  period: string
  description: string
  keyEvents: string[]
  developments: string[]
  challenges: string[]
  significance: string[]
  modernRelevance: string[]
}

interface KeyFigure {
  name: string
  sanskritName: string
  paliName: string
  period: string
  role: string
  biography: {
    origin: string
    background: string[]
    teachers: string[]
    students: string[]
    majorWorks: Array<{
      title: string
      sanskritTitle: string
      paliTitle: string
      date: string
      description: string
      significance: string
      keyFeatures: string[]
    }>
  }
  contributions: {
    doctrinal: string[]
    institutional: string[]
    literary: string[]
    social: string[]
    other: string[]
  }
  legacy: string
  modernRelevance: string[]
}

interface Movement {
  name: string
  sanskritName: string
  paliName: string
  period: string
  location: string
  description: string
  founder: string
  doctrines: string[]
  practices: string[]
  texts: string[]
  influence: string[]
  modernPresence: string[]
}

interface ModernDevelopment {
  name: string
  sanskritName: string
  paliName: string
  category: string
  description: string
  contents: string[]
  transmission: string[]
  significance: string[]
  modernStudy: string[]
  translations: string[]
}

interface Resource {
  title: string
  author: string
  year: string
  type: string
  description: string
  language: string
  level: string
  amazonUrl: string
  isbn?: string
}

interface ModernBuddhismContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  historicalPeriods: HistoricalPeriod[]
  keyFigures: KeyFigure[]
  movements: Movement[]
  modernDevelopments: ModernDevelopment[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Modern Buddhism | Buddhist History",
  description: "Comprehensive exploration of Modern Buddhism, its global spread, contemporary movements, and influential figures across the world.",
  openGraph: {
    title: "Modern Buddhism | Buddhist History",
    description: "In-depth study of Buddhism's modern period, featuring global developments and contemporary movements",
    type: "website",
  },
}

const modernBuddhismContent: ModernBuddhismContent = {
  introduction: `Modern Buddhism represents a period of unprecedented global spread and adaptation, from the late 19th century to the present. This era has seen Buddhism transform from primarily Asian traditions into a global phenomenon, marked by the emergence of new forms of practice, engagement with modern science and psychology, and the development of socially engaged Buddhism. The period has been characterized by both preservation of traditional forms and innovative adaptations to contemporary contexts.`,
  timeline: {
    start: "19th Century CE",
    end: "Present",
    overview: "Modern Buddhism emerged with the encounter between Asian Buddhist traditions and Western thought, leading to global spread and contemporary adaptations. This period has seen both preservation of traditional forms and innovative developments in response to modern challenges.",
    significance: [
      "Global spread of Buddhism",
      "Modern adaptations",
      "Scientific engagement",
      "Social activism",
      "Cultural exchange",
      "Technological integration",
      "Interfaith dialogue",
      "Environmental awareness"
    ]
  },
  historicalPeriods: [
    {
      name: "Meiji Restoration Period",
      sanskritName: "मेजी पुनर्स्थापना काल",
      paliName: "Meiji Punatthāpana Kāla",
      period: "1868-1912 CE",
      description: "A transformative period in Japanese Buddhism marked by modernization, secularization, and adaptation to Western influences.",
      keyEvents: [
        "Shinbutsu bunri",
        "Modern education system",
        "Western philosophy integration",
        "Social reform movements",
        "Cultural modernization",
        "Religious freedom",
        "Institutional reform"
      ],
      developments: [
        "Modern Buddhist education",
        "Social engagement",
        "Philosophical synthesis",
        "Cultural adaptation",
        "Institutional reform"
      ],
      challenges: [
        "State control",
        "Cultural change",
        "Religious competition",
        "Modernization pressure",
        "Traditional preservation"
      ],
      significance: [
        "Modern Japanese Buddhism",
        "Educational reform",
        "Social transformation",
        "Cultural synthesis",
        "Global influence"
      ],
      modernRelevance: [
        "Contemporary Japanese Buddhism",
        "Educational systems",
        "Social movements",
        "Cultural heritage",
        "Historical research"
      ]
    },
    {
      name: "Colonial Period",
      sanskritName: "उपनिवेश काल",
      paliName: "Upanivesa Kāla",
      period: "19th-20th Century CE",
      description: "A period marked by the encounter between Asian Buddhist traditions and Western colonial powers, leading to both challenges and opportunities for Buddhist development.",
      keyEvents: [
        "Western scholarship",
        "Textual translation",
        "Archaeological discovery",
        "Cultural exchange",
        "Religious reform",
        "National movements",
        "Modern education"
      ],
      developments: [
        "Buddhist studies",
        "Textual preservation",
        "Cultural exchange",
        "Modern education",
        "Social reform"
      ],
      challenges: [
        "Colonial control",
        "Cultural disruption",
        "Religious competition",
        "Social change",
        "Traditional preservation"
      ],
      significance: [
        "Global Buddhism",
        "Academic study",
        "Cultural exchange",
        "Social reform",
        "Historical documentation"
      ],
      modernRelevance: [
        "Post-colonial Buddhism",
        "Academic research",
        "Cultural heritage",
        "Social movements",
        "Historical study"
      ]
    },
    {
      name: "Post-War Period",
      sanskritName: "युद्धोत्तर काल",
      paliName: "Yuddhottara Kāla",
      period: "1945-Present",
      description: "A period of global Buddhist expansion and adaptation, marked by the emergence of new forms of practice and engagement with contemporary issues.",
      keyEvents: [
        "Global spread",
        "Social engagement",
        "Scientific dialogue",
        "Environmental awareness",
        "Interfaith cooperation",
        "Digital technology",
        "Cultural exchange"
      ],
      developments: [
        "Engaged Buddhism",
        "Modern meditation",
        "Scientific research",
        "Social activism",
        "Digital Buddhism"
      ],
      challenges: [
        "Cultural adaptation",
        "Traditional preservation",
        "Modern integration",
        "Social relevance",
        "Environmental crisis"
      ],
      significance: [
        "Global Buddhism",
        "Modern practice",
        "Social impact",
        "Scientific dialogue",
        "Cultural exchange"
      ],
      modernRelevance: [
        "Contemporary Buddhism",
        "Social movements",
        "Scientific research",
        "Environmental action",
        "Digital practice"
      ]
    },
    {
      name: "Cultural Revolution Period",
      sanskritName: "सांस्कृतिक क्रांति काल",
      paliName: "Saṅkārika Kāla",
      period: "1966-1976 CE",
      description: "A tumultuous period in Chinese Buddhism marked by severe persecution, destruction of temples, and suppression of religious practices.",
      keyEvents: [
        "Temple destruction",
        "Monastic persecution",
        "Cultural heritage loss",
        "Religious suppression",
        "Social upheaval",
        "Monastic disrobing",
        "Cultural preservation"
      ],
      developments: [
        "Underground practice",
        "Cultural preservation",
        "Social adaptation",
        "Religious resilience",
        "Modern revival"
      ],
      challenges: [
        "State persecution",
        "Cultural destruction",
        "Religious suppression",
        "Social upheaval",
        "Traditional preservation"
      ],
      significance: [
        "Modern Chinese Buddhism",
        "Cultural preservation",
        "Religious resilience",
        "Social adaptation",
        "Historical documentation"
      ],
      modernRelevance: [
        "Contemporary Chinese Buddhism",
        "Cultural heritage",
        "Religious freedom",
        "Social movements",
        "Historical study"
      ]
    },
    {
      name: "Vietnam War Period",
      sanskritName: "वियतनाम युद्ध काल",
      paliName: "Vietnam Yuddha Kāla",
      period: "1955-1975 CE",
      description: "A period marked by the emergence of Engaged Buddhism and the role of Buddhist monks in peace activism and social reform.",
      keyEvents: [
        "Self-immolation protests",
        "Peace movements",
        "Social activism",
        "Monastic leadership",
        "International attention",
        "Religious reform",
        "Cultural exchange"
      ],
      developments: [
        "Engaged Buddhism",
        "Peace activism",
        "Social reform",
        "International dialogue",
        "Modern adaptation"
      ],
      challenges: [
        "War devastation",
        "Political repression",
        "Social upheaval",
        "Religious persecution",
        "Cultural disruption"
      ],
      significance: [
        "Modern Vietnamese Buddhism",
        "Peace movement",
        "Social activism",
        "International influence",
        "Cultural exchange"
      ],
      modernRelevance: [
        "Contemporary Vietnamese Buddhism",
        "Peace activism",
        "Social engagement",
        "Cultural heritage",
        "Historical research"
      ]
    },
    {
      name: "Korean War Period",
      sanskritName: "कोरियाई युद्ध काल",
      paliName: "Koriya Yuddha Kāla",
      period: "1950-1953 CE",
      description: "A period marked by the division of Korean Buddhism and the emergence of distinct Northern and Southern Buddhist traditions.",
      keyEvents: [
        "Division of Korean Buddhism",
        "Monastic persecution",
        "Cultural disruption",
        "Religious suppression",
        "Social upheaval",
        "Monastic migration",
        "Cultural preservation"
      ],
      developments: [
        "Northern adaptation",
        "Southern revival",
        "Cultural preservation",
        "Social adaptation",
        "Modern reform"
      ],
      challenges: [
        "Political division",
        "Cultural disruption",
        "Religious suppression",
        "Social upheaval",
        "Traditional preservation"
      ],
      significance: [
        "Modern Korean Buddhism",
        "Cultural preservation",
        "Religious adaptation",
        "Social reform",
        "Historical documentation"
      ],
      modernRelevance: [
        "Contemporary Korean Buddhism",
        "Cultural heritage",
        "Religious freedom",
        "Social movements",
        "Historical study"
      ]
    },
    {
      name: "Cambodian Genocide Period",
      sanskritName: "कम्बोडियाई नरसंहार काल",
      paliName: "Kambodiya Narasaṁhāra Kāla",
      period: "1975-1979 CE",
      description: "A devastating period marked by the near-destruction of Cambodian Buddhism and the persecution of Buddhist monks and practitioners.",
      keyEvents: [
        "Monastic persecution",
        "Temple destruction",
        "Cultural genocide",
        "Religious suppression",
        "Social devastation",
        "Monastic execution",
        "Cultural loss"
      ],
      developments: [
        "Underground practice",
        "Cultural preservation",
        "Social resistance",
        "Religious resilience",
        "Modern revival"
      ],
      challenges: [
        "Genocidal persecution",
        "Cultural destruction",
        "Religious suppression",
        "Social devastation",
        "Traditional preservation"
      ],
      significance: [
        "Modern Cambodian Buddhism",
        "Cultural preservation",
        "Religious resilience",
        "Social recovery",
        "Historical documentation"
      ],
      modernRelevance: [
        "Contemporary Cambodian Buddhism",
        "Cultural heritage",
        "Religious freedom",
        "Social recovery",
        "Historical study"
      ]
    }
  ],
  keyFigures: [
    {
      name: "D.T. Suzuki",
      sanskritName: "डी.टी. सुजुकी",
      paliName: "D.T. Suzuki",
      period: "1870-1966 CE",
      role: "Pioneer of Zen Buddhism in the West",
      biography: {
        origin: "Japan",
        background: [
          "Samurai family",
          "Zen training",
          "Western education",
          "Translation work"
        ],
        teachers: [
          "Shaku Sōen",
          "Various Zen masters"
        ],
        students: [
          "Numerous Western students",
          "Beat generation writers"
        ],
        majorWorks: [
          {
            title: "Zen and Japanese Culture",
            sanskritTitle: "ध्यान और जापानी संस्कृति",
            paliTitle: "Jhāna ca Japāni Saṅkāra",
            date: "1938 CE",
            description: "Comprehensive study of Zen's influence on Japanese culture",
            significance: "Foundation of Western Zen understanding",
            keyFeatures: [
              "Cultural integration",
              "Philosophical synthesis",
              "Artistic expression",
              "Social influence",
              "Modern interpretation"
            ]
          }
        ]
      },
      contributions: {
        doctrinal: [
          "Zen interpretation",
          "Philosophical synthesis",
          "Cultural integration",
          "Modern adaptation",
          "Western transmission"
        ],
        institutional: [
          "Western Zen centers",
          "Educational programs",
          "Translation projects",
          "Cultural exchange",
          "Interfaith dialogue"
        ],
        literary: [
          "Zen texts",
          "Cultural studies",
          "Philosophical works",
          "Translation work",
          "Modern writings"
        ],
        social: [
          "Cultural exchange",
          "Social influence",
          "Educational reform",
          "Interfaith dialogue",
          "Modern adaptation"
        ],
        other: [
          "Artistic influence",
          "Cultural preservation",
          "Technical knowledge",
          "Social organization",
          "International relations"
        ]
      },
      legacy: "D.T. Suzuki's work established the foundation for Zen Buddhism in the West, introducing Japanese Buddhist thought and practice to a global audience and profoundly influencing modern spirituality.",
      modernRelevance: [
        "Western Zen",
        "Cultural exchange",
        "Philosophical study",
        "Modern spirituality",
        "Global Buddhism"
      ]
    },
    {
      name: "Thich Nhat Hanh",
      sanskritName: "थिच न्हात हान्ह",
      paliName: "Thich Nhat Hanh",
      period: "1926-2022 CE",
      role: "Founder of Engaged Buddhism",
      biography: {
        origin: "Vietnam",
        background: [
          "Monastic training",
          "Social activism",
          "Peace movement",
          "Global teaching"
        ],
        teachers: [
          "Various Zen masters",
          "Social activists"
        ],
        students: [
          "Global community",
          "Peace activists"
        ],
        majorWorks: [
          {
            title: "The Miracle of Mindfulness",
            sanskritTitle: "स्मृति का चमत्कार",
            paliTitle: "Satiya Acchariya",
            date: "1975 CE",
            description: "Guide to mindfulness practice in daily life",
            significance: "Foundation of modern mindfulness movement",
            keyFeatures: [
              "Mindfulness practice",
              "Daily life integration",
              "Peace activism",
              "Social engagement",
              "Modern adaptation"
            ]
          }
        ]
      },
      contributions: {
        doctrinal: [
          "Engaged Buddhism",
          "Mindfulness practice",
          "Social ethics",
          "Peace activism",
          "Modern adaptation"
        ],
        institutional: [
          "Plum Village",
          "Global sangha",
          "Peace centers",
          "Educational programs",
          "Social projects"
        ],
        literary: [
          "Practice manuals",
          "Peace writings",
          "Poetry",
          "Social commentary",
          "Modern texts"
        ],
        social: [
          "Peace movement",
          "Social activism",
          "Environmental action",
          "Interfaith dialogue",
          "Global community"
        ],
        other: [
          "Cultural exchange",
          "Artistic influence",
          "Social organization",
          "Environmental work",
          "International relations"
        ]
      },
      legacy: "Thich Nhat Hanh's work revolutionized modern Buddhism by integrating traditional practice with social engagement, establishing a model for contemporary Buddhist activism and community building.",
      modernRelevance: [
        "Engaged Buddhism",
        "Mindfulness movement",
        "Peace activism",
        "Social engagement",
        "Environmental action"
      ]
    },
    {
      name: "Dalai Lama",
      sanskritName: "दलाई लामा",
      paliName: "Dalai Lama",
      period: "1935-Present",
      role: "Spiritual Leader of Tibetan Buddhism",
      biography: {
        origin: "Tibet",
        background: [
          "Monastic education",
          "Political leadership",
          "Global advocacy",
          "Scientific dialogue"
        ],
        teachers: [
          "Various Tibetan masters",
          "Modern scholars"
        ],
        students: [
          "Global community",
          "Scientific researchers"
        ],
        majorWorks: [
          {
            title: "The Art of Happiness",
            sanskritTitle: "सुख की कला",
            paliTitle: "Sukha Sippa",
            date: "1998 CE",
            description: "Modern interpretation of Buddhist teachings for contemporary life",
            significance: "Bridge between traditional and modern Buddhism",
            keyFeatures: [
              "Modern adaptation",
              "Scientific dialogue",
              "Ethical principles",
              "Social engagement",
              "Global perspective"
            ]
          }
        ]
      },
      contributions: {
        doctrinal: [
          "Modern interpretation",
          "Scientific dialogue",
          "Ethical principles",
          "Social engagement",
          "Global perspective"
        ],
        institutional: [
          "Tibetan government",
          "Educational centers",
          "Research institutes",
          "Cultural preservation",
          "Global initiatives"
        ],
        literary: [
          "Modern texts",
          "Scientific works",
          "Ethical writings",
          "Social commentary",
          "Cultural preservation"
        ],
        social: [
          "Peace advocacy",
          "Human rights",
          "Environmental action",
          "Interfaith dialogue",
          "Global community"
        ],
        other: [
          "Cultural preservation",
          "Scientific research",
          "Environmental work",
          "Social organization",
          "International relations"
        ]
      },
      legacy: "The Dalai Lama's work has brought Tibetan Buddhism to global attention while promoting dialogue between traditional Buddhist thought and modern science, ethics, and social concerns.",
      modernRelevance: [
        "Tibetan Buddhism",
        "Scientific dialogue",
        "Peace advocacy",
        "Human rights",
        "Environmental action"
      ]
    },
    {
      name: "Chögyam Trungpa",
      sanskritName: "चोग्याम त्रुंग्पा",
      paliName: "Chogyam Trungpa",
      period: "1939-1987 CE",
      role: "Founder of Shambhala Buddhism",
      biography: {
        origin: "Tibet",
        background: [
          "Tibetan monastic education",
          "Karma Kagyü lineage",
          "Western adaptation",
          "Cultural integration"
        ],
        teachers: [
          "Various Tibetan masters",
          "Western scholars"
        ],
        students: [
          "Western practitioners",
          "Modern teachers"
        ],
        majorWorks: [
          {
            title: "Cutting Through Spiritual Materialism",
            sanskritTitle: "आध्यात्मिक भौतिकवाद का विच्छेदन",
            paliTitle: "Ādhyātmika Bhautikavāda Vicchedana",
            date: "1973 CE",
            description: "Modern interpretation of Buddhist teachings for Western practitioners",
            significance: "Foundation of modern Tibetan Buddhism in the West",
            keyFeatures: [
              "Modern adaptation",
              "Cultural integration",
              "Western psychology",
              "Social engagement",
              "Contemporary practice"
            ]
          }
        ]
      },
      contributions: {
        doctrinal: [
          "Shambhala Buddhism",
          "Modern interpretation",
          "Cultural integration",
          "Western adaptation",
          "Social engagement"
        ],
        institutional: [
          "Naropa University",
          "Shambhala centers",
          "Educational programs",
          "Cultural exchange",
          "Social projects"
        ],
        literary: [
          "Modern texts",
          "Practice manuals",
          "Cultural studies",
          "Social commentary",
          "Educational works"
        ],
        social: [
          "Cultural exchange",
          "Social integration",
          "Educational reform",
          "Community building",
          "Modern adaptation"
        ],
        other: [
          "Artistic influence",
          "Cultural preservation",
          "Technical knowledge",
          "Social organization",
          "International relations"
        ]
      },
      legacy: "Chögyam Trungpa's work established a bridge between traditional Tibetan Buddhism and modern Western culture, creating new forms of practice and understanding that continue to influence contemporary Buddhism.",
      modernRelevance: [
        "Western Tibetan Buddhism",
        "Cultural integration",
        "Modern practice",
        "Social engagement",
        "Educational innovation"
      ]
    },
    {
      name: "Jack Kornfield",
      sanskritName: "जैक कॉर्नफील्ड",
      paliName: "Jack Kornfield",
      period: "1945-Present",
      role: "Pioneer of Western Vipassanā",
      biography: {
        origin: "United States",
        background: [
          "Theravāda training",
          "Western psychology",
          "Social activism",
          "Global teaching"
        ],
        teachers: [
          "Ajahn Chah",
          "Mahasi Sayadaw",
          "Various Theravāda masters"
        ],
        students: [
          "Western practitioners",
          "Mental health professionals"
        ],
        majorWorks: [
          {
            title: "A Path with Heart",
            sanskritTitle: "हृदय के साथ मार्ग",
            paliTitle: "Hadaya Saha Magga",
            date: "1993 CE",
            description: "Guide to Buddhist practice integrating traditional teachings with modern psychology",
            significance: "Foundation of modern Western Vipassanā practice",
            keyFeatures: [
              "Modern psychology",
              "Traditional practice",
              "Social integration",
              "Personal development",
              "Contemporary adaptation"
            ]
          }
        ]
      },
      contributions: {
        doctrinal: [
          "Western Vipassanā",
          "Modern psychology",
          "Social integration",
          "Personal development",
          "Contemporary practice"
        ],
        institutional: [
          "Spirit Rock Center",
          "Insight Meditation Society",
          "Educational programs",
          "Social projects",
          "Community building"
        ],
        literary: [
          "Practice manuals",
          "Psychology texts",
          "Social writings",
          "Personal development",
          "Modern commentaries"
        ],
        social: [
          "Mental health",
          "Social activism",
          "Community building",
          "Cultural exchange",
          "Modern adaptation"
        ],
        other: [
          "Artistic influence",
          "Cultural preservation",
          "Technical knowledge",
          "Social organization",
          "International relations"
        ]
      },
      legacy: "Jack Kornfield's work has been instrumental in bringing Buddhist meditation and psychology to the West, creating accessible forms of practice that integrate traditional wisdom with modern understanding.",
      modernRelevance: [
        "Western Vipassanā",
        "Mental health",
        "Social integration",
        "Personal development",
        "Contemporary practice"
      ]
    },
    {
      name: "Robert Thurman",
      sanskritName: "रॉबर्ट थरमन",
      paliName: "Robert Thurman",
      period: "1941-Present",
      role: "Pioneer of Tibetan Buddhist Studies in the West",
      biography: {
        origin: "United States",
        background: [
          "Harvard education",
          "Tibetan monastic training",
          "Academic career",
          "Global teaching"
        ],
        teachers: [
          "Dalai Lama",
          "Various Tibetan masters",
          "Western scholars"
        ],
        students: [
          "Numerous Western students",
          "Academic researchers"
        ],
        majorWorks: [
          {
            title: "Inner Revolution",
            sanskritTitle: "आन्तरिक क्रांति",
            paliTitle: "Antarika Kāla",
            date: "1998 CE",
            description: "Modern interpretation of Buddhist teachings for contemporary life",
            significance: "Bridge between traditional and modern Buddhism",
            keyFeatures: [
              "Modern adaptation",
              "Cultural integration",
              "Social engagement",
              "Academic synthesis",
              "Contemporary practice"
            ]
          }
        ]
      },
      contributions: {
        doctrinal: [
          "Tibetan Buddhist studies",
          "Modern interpretation",
          "Cultural integration",
          "Academic synthesis",
          "Social engagement"
        ],
        institutional: [
          "Columbia University",
          "Tibet House",
          "Educational programs",
          "Cultural exchange",
          "Social projects"
        ],
        literary: [
          "Academic works",
          "Modern texts",
          "Cultural studies",
          "Social commentary",
          "Educational works"
        ],
        social: [
          "Cultural exchange",
          "Social integration",
          "Educational reform",
          "Community building",
          "Modern adaptation"
        ],
        other: [
          "Artistic influence",
          "Cultural preservation",
          "Technical knowledge",
          "Social organization",
          "International relations"
        ]
      },
      legacy: "Robert Thurman's work has been instrumental in establishing Tibetan Buddhist studies in Western academia while promoting dialogue between traditional Buddhist thought and modern scholarship.",
      modernRelevance: [
        "Tibetan Buddhist studies",
        "Cultural exchange",
        "Academic research",
        "Social engagement",
        "Global Buddhism"
      ]
    },
    {
      name: "Sharon Salzberg",
      sanskritName: "शेरोन साल्ज़बर्ग",
      paliName: "Sharon Salzberg",
      period: "1952-Present",
      role: "Pioneer of Western Insight Meditation",
      biography: {
        origin: "United States",
        background: [
          "Theravāda training",
          "Western psychology",
          "Social activism",
          "Global teaching"
        ],
        teachers: [
          "Various Theravāda masters",
          "Western teachers"
        ],
        students: [
          "Western practitioners",
          "Mental health professionals"
        ],
        majorWorks: [
          {
            title: "Lovingkindness",
            sanskritTitle: "मैत्री",
            paliTitle: "Mettā",
            date: "1995 CE",
            description: "Guide to loving-kindness meditation and its modern applications",
            significance: "Foundation of modern mettā practice in the West",
            keyFeatures: [
              "Modern psychology",
              "Traditional practice",
              "Social integration",
              "Personal development",
              "Contemporary adaptation"
            ]
          }
        ]
      },
      contributions: {
        doctrinal: [
          "Western Insight Meditation",
          "Modern psychology",
          "Social integration",
          "Personal development",
          "Contemporary practice"
        ],
        institutional: [
          "Insight Meditation Society",
          "Barre Center for Buddhist Studies",
          "Educational programs",
          "Social projects",
          "Community building"
        ],
        literary: [
          "Practice manuals",
          "Psychology texts",
          "Social writings",
          "Personal development",
          "Modern commentaries"
        ],
        social: [
          "Mental health",
          "Social activism",
          "Community building",
          "Cultural exchange",
          "Modern adaptation"
        ],
        other: [
          "Artistic influence",
          "Cultural preservation",
          "Technical knowledge",
          "Social organization",
          "International relations"
        ]
      },
      legacy: "Sharon Salzberg's work has been crucial in bringing Buddhist meditation and psychology to the West, particularly in developing accessible forms of loving-kindness practice for contemporary practitioners.",
      modernRelevance: [
        "Western Insight Meditation",
        "Mental health",
        "Social integration",
        "Personal development",
        "Contemporary practice"
      ]
    }
  ],
  movements: [
    {
      name: "Engaged Buddhism",
      sanskritName: "सक्रिय बौद्ध धर्म",
      paliName: "Sakriya Bauddha Dhamma",
      period: "20th Century CE",
      location: "Global",
      description: "A movement emphasizing the application of Buddhist principles to social, political, and environmental issues.",
      founder: "Thich Nhat Hanh",
      doctrines: [
        "Social engagement",
        "Peace activism",
        "Environmental ethics",
        "Social justice",
        "Modern adaptation"
      ],
      practices: [
        "Mindful activism",
        "Peace work",
        "Environmental action",
        "Social service",
        "Community building"
      ],
      texts: [
        "Modern commentaries",
        "Social writings",
        "Practice manuals",
        "Environmental texts",
        "Peace literature"
      ],
      influence: [
        "Modern Buddhism",
        "Social movements",
        "Environmental action",
        "Peace work",
        "Global community"
      ],
      modernPresence: [
        "Plum Village",
        "Buddhist Peace Fellowship",
        "International Network",
        "Environmental groups",
        "Social projects"
      ]
    },
    {
      name: "Secular Buddhism",
      sanskritName: "लौकिक बौद्ध धर्म",
      paliName: "Lokika Bauddha Dhamma",
      period: "20th Century CE",
      location: "Global",
      description: "A movement emphasizing the practical and philosophical aspects of Buddhism without traditional religious elements.",
      founder: "Stephen Batchelor",
      doctrines: [
        "Secular approach",
        "Scientific basis",
        "Modern interpretation",
        "Practical focus",
        "Cultural adaptation"
      ],
      practices: [
        "Mindfulness",
        "Meditation",
        "Philosophical study",
        "Ethical living",
        "Community practice"
      ],
      texts: [
        "Modern interpretations",
        "Scientific works",
        "Practice guides",
        "Philosophical texts",
        "Cultural studies"
      ],
      influence: [
        "Modern spirituality",
        "Scientific research",
        "Cultural adaptation",
        "Social integration",
        "Global practice"
      ],
      modernPresence: [
        "Secular Buddhist Association",
        "Modern meditation centers",
        "Online communities",
        "Research institutes",
        "Cultural organizations"
      ]
    }
  ],
  modernDevelopments: [
    {
      name: "Digital Buddhism",
      sanskritName: "डिजिटल बौद्ध धर्म",
      paliName: "Digital Bauddha Dhamma",
      category: "Modern Adaptation",
      description: "The integration of digital technology with Buddhist practice and teaching.",
      contents: [
        "Online meditation",
        "Digital texts",
        "Virtual sanghas",
        "Social media",
        "Mobile applications"
      ],
      transmission: [
        "Digital platforms",
        "Social networks",
        "Online courses",
        "Virtual retreats",
        "Digital archives"
      ],
      significance: [
        "Global accessibility",
        "Modern adaptation",
        "Community building",
        "Cultural exchange",
        "Practice innovation"
      ],
      modernStudy: [
        "Digital humanities",
        "Online learning",
        "Social media research",
        "Virtual communities",
        "Digital preservation"
      ],
      translations: [
        "Digital formats",
        "Mobile apps",
        "Online resources",
        "Virtual reality",
        "Social platforms"
      ]
    },
    {
      name: "Scientific Buddhism",
      sanskritName: "वैज्ञानिक बौद्ध धर्म",
      paliName: "Vijjānika Bauddha Dhamma",
      category: "Modern Integration",
      description: "The integration of Buddhist thought with modern scientific research and understanding.",
      contents: [
        "Neuroscience research",
        "Psychological studies",
        "Contemplative science",
        "Mind-body medicine",
        "Quantum physics"
      ],
      transmission: [
        "Research institutes",
        "Academic programs",
        "Scientific publications",
        "Interdisciplinary studies",
        "Public education"
      ],
      significance: [
        "Scientific validation",
        "Modern understanding",
        "Research innovation",
        "Cultural integration",
        "Global impact"
      ],
      modernStudy: [
        "Neuroscience",
        "Psychology",
        "Medicine",
        "Physics",
        "Contemplative science"
      ],
      translations: [
        "Scientific language",
        "Research methods",
        "Technical terms",
        "Modern concepts",
        "Interdisciplinary approaches"
      ]
    }
  ],
  resources: [
    {
      title: "The Heart of the Buddha's Teaching",
      author: "Thich Nhat Hanh",
      year: "1998",
      type: "Book",
      description: "Comprehensive introduction to Buddhist teachings with modern interpretation",
      language: "English",
      level: "Intermediate",
      amazonUrl: "https://www.amazon.com/Heart-Buddhas-Teaching-Transforming-Suffering/dp/0767903692",
      isbn: "978-0767903691"
    },
    {
      title: "Buddhism Without Beliefs",
      author: "Stephen Batchelor",
      year: "1997",
      type: "Book",
      description: "Modern interpretation of Buddhism focusing on practice rather than belief",
      language: "English",
      level: "Intermediate",
      amazonUrl: "https://www.amazon.com/Buddhism-Without-Beliefs-Contemporary-Guide/dp/1573226564",
      isbn: "978-1573226561"
    }
  ]
}

export default function ModernBuddhismPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Modern Buddhism</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{modernBuddhismContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {modernBuddhismContent.timeline.start} - {modernBuddhismContent.timeline.end}</p>
            <p>{modernBuddhismContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {modernBuddhismContent.timeline.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Historical Periods */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Periods</CardTitle>
        </CardHeader>
        <CardContent>
          {modernBuddhismContent.historicalPeriods.map((period, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {period.name} ({period.sanskritName} / {period.paliName})
              </h3>
              <p className="mb-2">Period: {period.period}</p>
              <p className="mb-2">{period.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Key Events:</h4>
                  <ul className="list-disc pl-6">
                    {period.keyEvents.map((event, idx) => (
                      <li key={idx}>{event}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-6">
                    {period.significance.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Key Figures */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Figures</CardTitle>
        </CardHeader>
        <CardContent>
          {modernBuddhismContent.keyFigures.map((figure, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {figure.name} ({figure.sanskritName} / {figure.paliName})
              </h3>
              <p className="mb-2">Period: {figure.period}</p>
              <p className="mb-2">Role: {figure.role}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Contributions:</h4>
                  <ul className="list-disc pl-6">
                    {Object.entries(figure.contributions).map(([category, items]) => (
                      <li key={category}>
                        <strong>{category}:</strong>
                        <ul className="list-disc pl-6">
                          {items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Legacy:</h4>
                  <p>{figure.legacy}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Movements */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Modern Movements</CardTitle>
        </CardHeader>
        <CardContent>
          {modernBuddhismContent.movements.map((movement, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {movement.name} ({movement.sanskritName} / {movement.paliName})
              </h3>
              <p className="mb-2">Period: {movement.period}</p>
              <p className="mb-2">Location: {movement.location}</p>
              <p className="mb-2">Founder: {movement.founder}</p>
              <p className="mb-2">{movement.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Doctrines:</h4>
                  <ul className="list-disc pl-6">
                    {movement.doctrines.map((doctrine, idx) => (
                      <li key={idx}>{doctrine}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Presence:</h4>
                  <ul className="list-disc pl-6">
                    {movement.modernPresence.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Modern Developments */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Modern Developments</CardTitle>
        </CardHeader>
        <CardContent>
          {modernBuddhismContent.modernDevelopments.map((development, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {development.name} ({development.sanskritName} / {development.paliName})
              </h3>
              <p className="mb-2">{development.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Contents:</h4>
                  <ul className="list-disc pl-6">
                    {development.contents.map((content, idx) => (
                      <li key={idx}>{content}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-6">
                    {development.significance.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Resources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recommended Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modernBuddhismContent.resources.map((resource, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h3 className="font-semibold">{resource.title}</h3>
                <p>Author: {resource.author}</p>
                <p>Year: {resource.year}</p>
                <p>Type: {resource.type}</p>
                <p>Description: {resource.description}</p>
                <p>Level: {resource.level}</p>
                {resource.isbn && <p>ISBN: {resource.isbn}</p>}
                <Link 
                  href={resource.amazonUrl}
                  className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Amazon
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 