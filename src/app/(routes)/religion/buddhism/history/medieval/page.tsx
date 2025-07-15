import React from 'react'
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

interface School {
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

interface TextualTradition {
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

interface MedievalBuddhismContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  historicalPeriods: HistoricalPeriod[]
  keyFigures: KeyFigure[]
  schools: School[]
  textualTraditions: TextualTradition[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Medieval Buddhism | Buddhist History",
  description: "Comprehensive exploration of Medieval Buddhism, its regional developments, major schools, and influential figures across Asia.",
  openGraph: {
    title: "Medieval Buddhism | Buddhist History",
    description: "In-depth study of Buddhism's medieval period, featuring regional developments and school formations across Asia",
    type: "website",
  },
}

const medievalBuddhismContent: MedievalBuddhismContent = {
  introduction: `Medieval Buddhism represents a period of remarkable regional development and cultural synthesis across Asia, spanning from the 5th to the 15th century CE. This era saw the emergence of distinct Buddhist traditions in China, Japan, Korea, Tibet, and Southeast Asia, each developing unique characteristics while maintaining core Buddhist teachings. The period was marked by the establishment of major monastic centers, the development of sophisticated philosophical systems, and the integration of Buddhism with local cultures and religions.`,
  timeline: {
    start: "5th Century CE",
    end: "15th Century CE",
    overview: "Medieval Buddhism emerged with the spread of Buddhism across Asia and developed through regional adaptations, philosophical systematization, and cultural synthesis. This period saw the establishment of distinct Buddhist traditions in various regions of Asia.",
    significance: [
      "Regional Buddhist traditions",
      "Cultural synthesis",
      "Monastic development",
      "Philosophical systems",
      "Artistic achievements",
      "Textual transmission",
      "Religious integration",
      "Political influence"
    ]
  },
  historicalPeriods: [
    {
      name: "Tang Dynasty Period",
      sanskritName: "तांग राजवंश काल",
      paliName: "Tang Rājavansa Kāla",
      period: "618-907 CE",
      description: "A golden age of Chinese Buddhism marked by the establishment of major schools, extensive translation activities, and cultural flourishing.",
      keyEvents: [
        "Establishment of Chan Buddhism",
        "Translation of Buddhist texts",
        "Development of Pure Land tradition",
        "Tiantai school formation",
        "Huayan school development",
        "Monastic expansion",
        "Cultural exchange"
      ],
      developments: [
        "School formation",
        "Text translation",
        "Artistic expression",
        "Monastic organization",
        "Cultural synthesis"
      ],
      challenges: [
        "Political persecution",
        "Doctrinal debates",
        "Cultural adaptation",
        "Institutional conflicts",
        "Social integration"
      ],
      significance: [
        "Chinese Buddhist traditions",
        "Cultural exchange",
        "Artistic development",
        "Textual preservation",
        "Philosophical synthesis"
      ],
      modernRelevance: [
        "Cultural heritage",
        "Artistic traditions",
        "Philosophical systems",
        "Monastic practices",
        "Historical documentation"
      ]
    },
    {
      name: "Pala Dynasty Period",
      sanskritName: "पाल राजवंश काल",
      paliName: "Pāla Rājavansa Kāla",
      period: "8th-12th Century CE",
      description: "A period of Buddhist revival and development in India, particularly in Bengal and Bihar, marked by the establishment of major monastic universities.",
      keyEvents: [
        "Nalanda University expansion",
        "Vikramashila establishment",
        "Tantric Buddhism development",
        "Artistic flourishing",
        "Textual production",
        "International exchange",
        "Monastic education"
      ],
      developments: [
        "Monastic universities",
        "Tantric traditions",
        "Artistic schools",
        "Textual production",
        "International relations"
      ],
      challenges: [
        "Muslim invasions",
        "Institutional decline",
        "Political changes",
        "Social transformation",
        "Cultural shifts"
      ],
      significance: [
        "Buddhist education",
        "Artistic traditions",
        "Textual preservation",
        "Cultural exchange",
        "Historical legacy"
      ],
      modernRelevance: [
        "Archaeological sites",
        "Artistic heritage",
        "Educational models",
        "Cultural preservation",
        "Historical research"
      ]
    },
    {
      name: "Kamakura Period",
      sanskritName: "कामाकुरा काल",
      paliName: "Kāmakura Kāla",
      period: "1185-1333 CE",
      description: "A transformative period in Japanese Buddhism marked by the emergence of new schools and the popularization of Buddhism among common people.",
      keyEvents: [
        "Establishment of Pure Land Buddhism",
        "Development of Nichiren Buddhism",
        "Zen Buddhism introduction",
        "Kamakura shogunate support",
        "Cultural synthesis",
        "Artistic flourishing",
        "Social transformation"
      ],
      developments: [
        "New Buddhist schools",
        "Popular Buddhism",
        "Cultural integration",
        "Artistic expression",
        "Social reform"
      ],
      challenges: [
        "Political upheaval",
        "Social change",
        "Natural disasters",
        "Institutional reform",
        "Cultural adaptation"
      ],
      significance: [
        "Japanese Buddhist traditions",
        "Cultural development",
        "Social transformation",
        "Artistic achievements",
        "Religious innovation"
      ],
      modernRelevance: [
        "Contemporary Japanese Buddhism",
        "Cultural heritage",
        "Artistic traditions",
        "Social practices",
        "Historical research"
      ]
    },
    {
      name: "Yuan Dynasty Period",
      sanskritName: "युआन राजवंश काल",
      paliName: "Yuan Rājavansa Kāla",
      period: "1271-1368 CE",
      description: "A period of significant Buddhist development in China under Mongol rule, marked by the integration of Tibetan Buddhism and Chinese traditions.",
      keyEvents: [
        "Tibetan Buddhism introduction",
        "Imperial patronage",
        "Cultural exchange",
        "Artistic synthesis",
        "Monastic expansion",
        "Textual translation",
        "Religious integration"
      ],
      developments: [
        "Tibetan-Chinese synthesis",
        "Imperial Buddhism",
        "Artistic traditions",
        "Monastic institutions",
        "Cultural exchange"
      ],
      challenges: [
        "Cultural tensions",
        "Political control",
        "Social integration",
        "Religious competition",
        "Institutional adaptation"
      ],
      significance: [
        "Sino-Tibetan Buddhism",
        "Cultural synthesis",
        "Artistic development",
        "Political influence",
        "Historical legacy"
      ],
      modernRelevance: [
        "Cultural heritage",
        "Artistic traditions",
        "Religious practices",
        "Historical research",
        "Cross-cultural exchange"
      ]
    },
    {
      name: "Silla Period",
      sanskritName: "शिला काल",
      paliName: "Silla Kāla",
      period: "57 BCE - 935 CE",
      description: "A golden age of Korean Buddhism marked by the establishment of major schools, artistic flourishing, and cultural synthesis.",
      keyEvents: [
        "Introduction of Buddhism",
        "Establishment of major temples",
        "Development of Korean Buddhist art",
        "Cultural exchange with China",
        "Monastic education system",
        "Buddhist state support",
        "Religious integration"
      ],
      developments: [
        "Korean Buddhist schools",
        "Artistic traditions",
        "Monastic institutions",
        "Cultural synthesis",
        "Educational systems"
      ],
      challenges: [
        "Political changes",
        "Cultural adaptation",
        "Religious competition",
        "Social transformation",
        "Institutional reform"
      ],
      significance: [
        "Korean Buddhist traditions",
        "Cultural heritage",
        "Artistic achievements",
        "Educational models",
        "Historical legacy"
      ],
      modernRelevance: [
        "Korean Buddhism",
        "Cultural preservation",
        "Artistic traditions",
        "Historical research",
        "Tourism"
      ]
    },
    {
      name: "Srivijaya Period",
      sanskritName: "श्रीविजय काल",
      paliName: "Sīvijaya Kāla",
      period: "7th-13th Century CE",
      description: "A maritime empire period in Southeast Asia marked by the spread of Buddhism and cultural exchange across the region.",
      keyEvents: [
        "Establishment of Srivijaya",
        "Buddhist learning centers",
        "Maritime trade routes",
        "Cultural exchange",
        "Monastic expansion",
        "Artistic development",
        "Textual transmission"
      ],
      developments: [
        "Southeast Asian Buddhism",
        "Maritime networks",
        "Cultural synthesis",
        "Educational centers",
        "Artistic traditions"
      ],
      challenges: [
        "Political changes",
        "Maritime security",
        "Cultural integration",
        "Religious diversity",
        "Environmental factors"
      ],
      significance: [
        "Regional Buddhism",
        "Cultural exchange",
        "Maritime history",
        "Artistic heritage",
        "Educational legacy"
      ],
      modernRelevance: [
        "Southeast Asian Buddhism",
        "Cultural heritage",
        "Archaeological sites",
        "Historical research",
        "Tourism"
      ]
    }
  ],
  keyFigures: [
    {
      name: "Bodhidharma",
      sanskritName: "बोधिधर्म",
      paliName: "Bodhidhamma",
      period: "5th-6th Century CE",
      role: "Founder of Chan/Zen Buddhism",
      biography: {
        origin: "South India",
        background: [
          "Brahmin family",
          "Buddhist training",
          "Missionary activities",
          "Chan transmission"
        ],
        teachers: [
          "Prajñātāra",
          "Various Buddhist masters"
        ],
        students: [
          "Huike",
          "Chan lineage founders"
        ],
        majorWorks: [
          {
            title: "Two Entrances and Four Practices",
            sanskritTitle: "द्वे प्रवेशे चतुष्प्रयोग",
            paliTitle: "Dve Pavese Catuppayoga",
            date: "5th-6th Century CE",
            description: "Fundamental text of Chan Buddhism outlining the principles of direct mind transmission",
            significance: "Foundation of Chan/Zen tradition",
            keyFeatures: [
              "Direct transmission",
              "Mind-to-mind teaching",
              "Practice methods",
              "Enlightenment approach",
              "Lineage transmission"
            ]
          }
        ]
      },
      contributions: {
        doctrinal: [
          "Direct mind transmission",
          "Chan methodology",
          "Enlightenment approach",
          "Practice principles",
          "Teaching methods"
        ],
        institutional: [
          "Chan school establishment",
          "Lineage transmission",
          "Monastic practices",
          "Teaching methods",
          "Cultural integration"
        ],
        literary: [
          "Chan texts",
          "Teaching records",
          "Practice manuals",
          "Transmission documents",
          "Cultural works"
        ],
        social: [
          "Cultural influence",
          "Religious integration",
          "Social transformation",
          "Educational methods",
          "Artistic expression"
        ],
        other: [
          "Martial arts",
          "Cultural exchange",
          "Artistic traditions",
          "Medicinal knowledge",
          "Technical skills"
        ]
      },
      legacy: "Bodhidharma's contributions established the foundation of Chan/Zen Buddhism, introducing a direct approach to enlightenment that profoundly influenced East Asian Buddhism and culture. His teachings continue to shape Buddhist practice and philosophy worldwide.",
      modernRelevance: [
        "Zen practice",
        "Meditation methods",
        "Cultural heritage",
        "Artistic traditions",
        "Philosophical influence"
      ]
    },
    {
      name: "Atiśa",
      sanskritName: "अतिश",
      paliName: "Atisa",
      period: "982-1054 CE",
      role: "Revival of Buddhism in Tibet",
      biography: {
        origin: "Bengal",
        background: [
          "Royal family",
          "Monastic education",
          "International study",
          "Missionary work"
        ],
        teachers: [
          "Various Indian masters",
          "Southeast Asian teachers"
        ],
        students: [
          "Dromtönpa",
          "Numerous Tibetan disciples"
        ],
        majorWorks: [
          {
            title: "Lamp for the Path to Enlightenment",
            sanskritTitle: "बोधिपथप्रदीप",
            paliTitle: "Bodhipathapadīpa",
            date: "11th Century CE",
            description: "Comprehensive guide to the Buddhist path, establishing the foundation for Tibetan Buddhism",
            significance: "Foundation of Tibetan Buddhist practice",
            keyFeatures: [
              "Gradual path",
              "Three vehicles",
              "Bodhisattva ideal",
              "Practice methods",
              "Textual synthesis"
            ]
          }
        ]
      },
      contributions: {
        doctrinal: [
          "Path systematization",
          "Practice methods",
          "Textual synthesis",
          "Teaching methods",
          "Philosophical integration"
        ],
        institutional: [
          "Monastic reform",
          "Teaching system",
          "Practice structure",
          "Cultural integration",
          "International exchange"
        ],
        literary: [
          "Practice manuals",
          "Philosophical texts",
          "Commentaries",
          "Teaching records",
          "Cultural works"
        ],
        social: [
          "Cultural synthesis",
          "Religious reform",
          "Social transformation",
          "Educational methods",
          "International relations"
        ],
        other: [
          "Cultural exchange",
          "Artistic influence",
          "Technical knowledge",
          "Medical practices",
          "Social organization"
        ]
      },
      legacy: "Atiśa's work in Tibet established the foundation for the later development of Tibetan Buddhism, introducing systematic approaches to practice and study that continue to influence Buddhist traditions worldwide.",
      modernRelevance: [
        "Tibetan Buddhism",
        "Practice methods",
        "Cultural heritage",
        "Educational systems",
        "International exchange"
      ]
    },
    {
      name: "Dogen",
      sanskritName: "दोगेन",
      paliName: "Dogen",
      period: "1200-1253 CE",
      role: "Founder of Soto Zen Buddhism",
      biography: {
        origin: "Japan",
        background: [
          "Aristocratic family",
          "Early monastic training",
          "Study in China",
          "Zen transmission"
        ],
        teachers: [
          "Rujing",
          "Various Chinese masters"
        ],
        students: [
          "Koun Ejo",
          "Numerous Japanese disciples"
        ],
        majorWorks: [
          {
            title: "Shobogenzo",
            sanskritTitle: "शोबोगेन्जो",
            paliTitle: "Shobogenzo",
            date: "13th Century CE",
            description: "Masterpiece of Zen literature exploring the nature of practice and enlightenment",
            significance: "Foundation of Soto Zen tradition",
            keyFeatures: [
              "Practice-realization",
              "Time-being",
              "Buddha-nature",
              "Zazen practice",
              "Philosophical depth"
            ]
          }
        ]
      },
      contributions: {
        doctrinal: [
          "Practice-realization unity",
          "Time-being concept",
          "Buddha-nature teaching",
          "Zazen methodology",
          "Philosophical synthesis"
        ],
        institutional: [
          "Soto school establishment",
          "Monastic regulations",
          "Teaching methods",
          "Practice structure",
          "Cultural integration"
        ],
        literary: [
          "Zen texts",
          "Poetry",
          "Philosophical works",
          "Teaching records",
          "Cultural writings"
        ],
        social: [
          "Cultural influence",
          "Social reform",
          "Educational methods",
          "Artistic expression",
          "Religious integration"
        ],
        other: [
          "Cultural exchange",
          "Artistic traditions",
          "Medicinal knowledge",
          "Technical skills",
          "Social organization"
        ]
      },
      legacy: "Dogen's contributions established the foundation of Soto Zen Buddhism in Japan, introducing a sophisticated philosophical system and practical approach to meditation that continues to influence Zen practice worldwide.",
      modernRelevance: [
        "Soto Zen practice",
        "Philosophical study",
        "Cultural heritage",
        "Artistic traditions",
        "Social influence"
      ]
    },
    {
      name: "Shinran",
      sanskritName: "शिनरन",
      paliName: "Shinran",
      period: "1173-1263 CE",
      role: "Founder of Jodo Shinshu Buddhism",
      biography: {
        origin: "Japan",
        background: [
          "Aristocratic family",
          "Tendai training",
          "Pure Land study",
          "Social reform"
        ],
        teachers: [
          "Honen",
          "Various Pure Land masters"
        ],
        students: [
          "Numerous disciples",
          "Jodo Shinshu founders"
        ],
        majorWorks: [
          {
            title: "Kyogyoshinsho",
            sanskritTitle: "क्योग्योशिन्शो",
            paliTitle: "Kyogyoshinsho",
            date: "13th Century CE",
            description: "Comprehensive exposition of Pure Land teachings and practice",
            significance: "Foundation of Jodo Shinshu tradition",
            keyFeatures: [
              "Other-power faith",
              "Amida's vow",
              "Practice methods",
              "Philosophical system",
              "Social implications"
            ]
          }
        ]
      },
      contributions: {
        doctrinal: [
          "Other-power teaching",
          "Faith development",
          "Pure Land practice",
          "Philosophical system",
          "Social ethics"
        ],
        institutional: [
          "Jodo Shinshu establishment",
          "Lay organization",
          "Teaching methods",
          "Practice structure",
          "Social integration"
        ],
        literary: [
          "Pure Land texts",
          "Poetry",
          "Letters",
          "Teaching records",
          "Cultural works"
        ],
        social: [
          "Social reform",
          "Lay Buddhism",
          "Cultural influence",
          "Educational methods",
          "Religious integration"
        ],
        other: [
          "Cultural exchange",
          "Artistic influence",
          "Social organization",
          "Educational systems",
          "Religious innovation"
        ]
      },
      legacy: "Shinran's work revolutionized Pure Land Buddhism in Japan, establishing a tradition that emphasizes faith and accessibility to all people, profoundly influencing Japanese Buddhism and culture.",
      modernRelevance: [
        "Jodo Shinshu practice",
        "Social Buddhism",
        "Cultural heritage",
        "Religious reform",
        "Contemporary relevance"
      ]
    },
    {
      name: "Nichiren",
      sanskritName: "निचिरेन",
      paliName: "Nichiren",
      period: "1222-1282 CE",
      role: "Founder of Nichiren Buddhism",
      biography: {
        origin: "Japan",
        background: [
          "Commoner family",
          "Tendai training",
          "Study of various schools",
          "Social reform"
        ],
        teachers: [
          "Various Tendai masters",
          "Pure Land teachers"
        ],
        students: [
          "Nikkō",
          "Numerous disciples"
        ],
        majorWorks: [
          {
            title: "Risshō Ankoku Ron",
            sanskritTitle: "रिशो अंकोकु रोन",
            paliTitle: "Rissho Ankoku Ron",
            date: "13th Century CE",
            description: "Treatise on establishing the correct teaching for the peace of the land",
            significance: "Foundation of Nichiren Buddhism",
            keyFeatures: [
              "Lotus Sūtra focus",
              "Social reform",
              "National peace",
              "Religious unity",
              "Practice methods"
            ]
          }
        ]
      },
      contributions: {
        doctrinal: [
          "Lotus Sūtra emphasis",
          "Nam-myoho-renge-kyo",
          "Three great secret laws",
          "Social teachings",
          "Religious reform"
        ],
        institutional: [
          "Nichiren school establishment",
          "Lay organization",
          "Teaching methods",
          "Practice structure",
          "Social integration"
        ],
        literary: [
          "Treatises",
          "Letters",
          "Gosho",
          "Teaching records",
          "Cultural works"
        ],
        social: [
          "Social reform",
          "Peace advocacy",
          "Cultural influence",
          "Educational methods",
          "Religious unity"
        ],
        other: [
          "Cultural exchange",
          "Artistic influence",
          "Social organization",
          "Educational systems",
          "Religious innovation"
        ]
      },
      legacy: "Nichiren's work established a new form of Buddhism in Japan that emphasizes the Lotus Sūtra and social engagement, profoundly influencing Japanese Buddhism and culture.",
      modernRelevance: [
        "Nichiren Buddhism",
        "Social Buddhism",
        "Cultural heritage",
        "Religious reform",
        "Contemporary relevance"
      ]
    },
    {
      name: "Tsongkhapa",
      sanskritName: "त्सोंगखापा",
      paliName: "Tsongkhapa",
      period: "1357-1419 CE",
      role: "Founder of Gelug School of Tibetan Buddhism",
      biography: {
        origin: "Tibet",
        background: [
          "Monastic education",
          "Extensive study",
          "Meditation practice",
          "Teaching career"
        ],
        teachers: [
          "Various Tibetan masters",
          "Indian panditas"
        ],
        students: [
          "Gyaltsab Je",
          "Khedrup Je",
          "Numerous disciples"
        ],
        majorWorks: [
          {
            title: "Lam Rim Chen Mo",
            sanskritTitle: "लम रिम चेन मो",
            paliTitle: "Lam Rim Chen Mo",
            date: "14th Century CE",
            description: "Great Treatise on the Stages of the Path to Enlightenment",
            significance: "Foundation of Gelug tradition",
            keyFeatures: [
              "Gradual path",
              "Madhyamaka philosophy",
              "Practice methods",
              "Textual synthesis",
              "Monastic discipline"
            ]
          }
        ]
      },
      contributions: {
        doctrinal: [
          "Madhyamaka synthesis",
          "Lam Rim system",
          "Vinaya reform",
          "Philosophical integration",
          "Practice methods"
        ],
        institutional: [
          "Gelug school establishment",
          "Monastic reform",
          "Educational system",
          "Practice structure",
          "Cultural integration"
        ],
        literary: [
          "Philosophical works",
          "Practice manuals",
          "Commentaries",
          "Teaching records",
          "Cultural writings"
        ],
        social: [
          "Monastic reform",
          "Cultural influence",
          "Educational methods",
          "Social organization",
          "Religious integration"
        ],
        other: [
          "Cultural exchange",
          "Artistic influence",
          "Technical knowledge",
          "Medical practices",
          "Social organization"
        ]
      },
      legacy: "Tsongkhapa's work established the Gelug school of Tibetan Buddhism, introducing systematic approaches to study and practice that continue to influence Buddhist traditions worldwide.",
      modernRelevance: [
        "Gelug Buddhism",
        "Philosophical study",
        "Cultural heritage",
        "Educational systems",
        "Contemporary practice"
      ]
    }
  ],
  schools: [
    {
      name: "Chan/Zen",
      sanskritName: "ध्यान",
      paliName: "Jhāna",
      period: "6th Century CE",
      location: "China",
      description: "A school emphasizing direct experience and meditation, which later developed into Zen in Japan.",
      founder: "Bodhidharma",
      doctrines: [
        "Direct mind transmission",
        "Sudden enlightenment",
        "No-mind",
        "Emptiness",
        "Buddha-nature"
      ],
      practices: [
        "Zazen meditation",
        "Koan study",
        "Mindfulness",
        "Physical discipline",
        "Artistic expression"
      ],
      texts: [
        "Platform Sūtra",
        "Blue Cliff Record",
        "Gateless Gate",
        "Transmission of the Lamp",
        "Zen poetry"
      ],
      influence: [
        "East Asian Buddhism",
        "Japanese culture",
        "Western Buddhism",
        "Modern spirituality",
        "Artistic traditions"
      ],
      modernPresence: [
        "Japanese Zen",
        "Korean Seon",
        "Vietnamese Thiền",
        "Western Zen",
        "Contemporary practice"
      ]
    },
    {
      name: "Vajrayāna",
      sanskritName: "वज्रयान",
      paliName: "Vajrayāna",
      period: "7th-8th Century CE",
      location: "India and Tibet",
      description: "A form of Buddhism emphasizing esoteric practices and tantric methods for rapid enlightenment.",
      founder: "Various Indian masters",
      doctrines: [
        "Tantric methods",
        "Deity yoga",
        "Mantra practice",
        "Mandala visualization",
        "Energy practices"
      ],
      practices: [
        "Deity meditation",
        "Mantra recitation",
        "Mandala practice",
        "Energy work",
        "Ritual performance"
      ],
      texts: [
        "Guhyasamāja Tantra",
        "Hevajra Tantra",
        "Kālacakra Tantra",
        "Vajrayāna commentaries",
        "Practice manuals"
      ],
      influence: [
        "Tibetan Buddhism",
        "Japanese Shingon",
        "Modern esotericism",
        "Artistic traditions",
        "Cultural practices"
      ],
      modernPresence: [
        "Tibetan traditions",
        "Japanese esotericism",
        "Western Vajrayāna",
        "Contemporary practice",
        "Cultural heritage"
      ]
    },
    {
      name: "Pure Land",
      sanskritName: "सुखावती",
      paliName: "Sukhavati",
      period: "4th Century CE",
      location: "China and Japan",
      description: "A school emphasizing faith in Amida Buddha and rebirth in the Pure Land, which became particularly influential in East Asia.",
      founder: "Huiyuan",
      doctrines: [
        "Other-power faith",
        "Amida's vow",
        "Pure Land rebirth",
        "Nembutsu practice",
        "Universal salvation"
      ],
      practices: [
        "Nembutsu recitation",
        "Faith cultivation",
        "Pure Land visualization",
        "Merit dedication",
        "Community practice"
      ],
      texts: [
        "Three Pure Land Sūtras",
        "Commentaries",
        "Practice manuals",
        "Hymns and poetry",
        "Teaching records"
      ],
      influence: [
        "East Asian Buddhism",
        "Japanese culture",
        "Modern spirituality",
        "Social Buddhism",
        "Cultural practices"
      ],
      modernPresence: [
        "Jodo Shinshu",
        "Jodo Shu",
        "Chinese Pure Land",
        "Western Pure Land",
        "Contemporary practice"
      ]
    },
    {
      name: "Tiantai",
      sanskritName: "तियानताई",
      paliName: "Tiantai",
      period: "6th Century CE",
      location: "China",
      description: "A comprehensive school emphasizing the Lotus Sūtra and the concept of perfect interfusion of all phenomena.",
      founder: "Zhiyi",
      doctrines: [
        "Threefold truth",
        "Perfect interfusion",
        "Lotus vehicle",
        "Buddha-nature",
        "Gradual-sudden teaching"
      ],
      practices: [
        "Meditation methods",
        "Ritual practices",
        "Textual study",
        "Contemplation",
        "Monastic discipline"
      ],
      texts: [
        "Lotus Sūtra",
        "Tiantai commentaries",
        "Practice manuals",
        "Philosophical works",
        "Teaching records"
      ],
      influence: [
        "Chinese Buddhism",
        "Japanese Tendai",
        "Korean Buddhism",
        "Philosophical systems",
        "Cultural practices"
      ],
      modernPresence: [
        "Chinese Tiantai",
        "Japanese Tendai",
        "Korean traditions",
        "Western study",
        "Contemporary practice"
      ]
    },
    {
      name: "Huayan",
      sanskritName: "अवतंसक",
      paliName: "Avatamsaka",
      period: "6th Century CE",
      location: "China",
      description: "A school emphasizing the interpenetration of all phenomena and the ultimate unity of reality, based on the Avatamsaka Sūtra.",
      founder: "Dushun",
      doctrines: [
        "Interpenetration",
        "Four dharma realms",
        "Ten profound gates",
        "Six characteristics",
        "Perfect interfusion"
      ],
      practices: [
        "Contemplation",
        "Meditation",
        "Ritual practices",
        "Textual study",
        "Monastic discipline"
      ],
      texts: [
        "Avatamsaka Sūtra",
        "Huayan commentaries",
        "Practice manuals",
        "Philosophical works",
        "Teaching records"
      ],
      influence: [
        "Chinese Buddhism",
        "Korean Hwaeom",
        "Japanese Kegon",
        "Philosophical systems",
        "Cultural practices"
      ],
      modernPresence: [
        "Chinese Huayan",
        "Korean Hwaeom",
        "Japanese Kegon",
        "Western study",
        "Contemporary practice"
      ]
    },
    {
      name: "Nichiren",
      sanskritName: "निचिरेन",
      paliName: "Nichiren",
      period: "13th Century CE",
      location: "Japan",
      description: "A school emphasizing the Lotus Sūtra and chanting Nam-myoho-renge-kyo, with a focus on social engagement and world peace.",
      founder: "Nichiren",
      doctrines: [
        "Lotus Sūtra supremacy",
        "Three great secret laws",
        "Ichinen sanzen",
        "Social engagement",
        "World peace"
      ],
      practices: [
        "Daimoku chanting",
        "Gongyo",
        "Study",
        "Social action",
        "Community practice"
      ],
      texts: [
        "Lotus Sūtra",
        "Nichiren's writings",
        "Commentaries",
        "Practice manuals",
        "Teaching records"
      ],
      influence: [
        "Japanese Buddhism",
        "Social Buddhism",
        "Modern spirituality",
        "Peace movements",
        "Cultural practices"
      ],
      modernPresence: [
        "Nichiren Shoshu",
        "Soka Gakkai",
        "Rissho Kosei-kai",
        "Western Nichiren",
        "Contemporary practice"
      ]
    }
  ],
  textualTraditions: [
    {
      name: "Tibetan Buddhist Canon",
      sanskritName: "तिब्बती बौद्ध ग्रंथ",
      paliName: "Tibbatī Bauddha Gantha",
      category: "Canonical Collection",
      description: "The comprehensive collection of Buddhist texts in Tibetan, including translations and original works.",
      contents: [
        "Kangyur (Buddha's words)",
        "Tengyur (Indian commentaries)",
        "Tibetan commentaries",
        "Practice manuals",
        "Historical works"
      ],
      transmission: [
        "Sanskrit originals",
        "Chinese translations",
        "Tibetan translations",
        "Regional variations",
        "Commentarial traditions"
      ],
      significance: [
        "Textual preservation",
        "Cultural heritage",
        "Philosophical development",
        "Practice guidance",
        "Historical documentation"
      ],
      modernStudy: [
        "Textual analysis",
        "Translation work",
        "Digital preservation",
        "Comparative studies",
        "Cultural research"
      ],
      translations: [
        "English",
        "Chinese",
        "Japanese",
        "Korean",
        "Western languages"
      ]
    }
  ],
  resources: [
    {
      title: "The Zen Teachings of Bodhidharma",
      author: "Red Pine",
      year: "1987",
      type: "Book",
      description: "Translation and commentary on Bodhidharma's essential teachings",
      language: "English",
      level: "Intermediate",
      amazonUrl: "https://www.amazon.com/Zen-Teachings-Bodhidharma-North-Point/dp/0865473994",
      isbn: "978-0865473997"
    },
    {
      title: "Buddhism in Medieval India",
      author: "Richard H. Robinson",
      year: "1965",
      type: "Book",
      description: "Comprehensive study of Buddhism's development in medieval India",
      language: "English",
      level: "Advanced",
      amazonUrl: "https://www.amazon.com/Buddhism-Medieval-India-Richard-Robinson/dp/8120807726",
      isbn: "978-8120807722"
    }
  ]
}

export default function MedievalBuddhismPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Medieval Buddhism</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{medievalBuddhismContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {medievalBuddhismContent.timeline.start} - {medievalBuddhismContent.timeline.end}</p>
            <p>{medievalBuddhismContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {medievalBuddhismContent.timeline.significance.map((item, index) => (
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
          {medievalBuddhismContent.historicalPeriods.map((period, index) => (
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
          {medievalBuddhismContent.keyFigures.map((figure, index) => (
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

      {/* Schools */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Major Schools</CardTitle>
        </CardHeader>
        <CardContent>
          {medievalBuddhismContent.schools.map((school, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {school.name} ({school.sanskritName} / {school.paliName})
              </h3>
              <p className="mb-2">Period: {school.period}</p>
              <p className="mb-2">Location: {school.location}</p>
              <p className="mb-2">Founder: {school.founder}</p>
              <p className="mb-2">{school.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Doctrines:</h4>
                  <ul className="list-disc pl-6">
                    {school.doctrines.map((doctrine, idx) => (
                      <li key={idx}>{doctrine}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Presence:</h4>
                  <ul className="list-disc pl-6">
                    {school.modernPresence.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Textual Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Textual Traditions</CardTitle>
        </CardHeader>
        <CardContent>
          {medievalBuddhismContent.textualTraditions.map((tradition, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {tradition.name} ({tradition.sanskritName} / {tradition.paliName})
              </h3>
              <p className="mb-2">{tradition.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Contents:</h4>
                  <ul className="list-disc pl-6">
                    {tradition.contents.map((content, idx) => (
                      <li key={idx}>{content}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-6">
                    {tradition.significance.map((item, idx) => (
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
            {medievalBuddhismContent.resources.map((resource, index) => (
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