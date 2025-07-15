import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface MusicalTradition {
  name: string
  sanskritName: string
  period: string
  regions: string[]
  description: string
  characteristics: string[]
  significance: string[]
  majorWorks: Array<{
    title: string
    sanskritTitle: string
    composer: string
    date: string
    description: string
    significance: string[]
    influence: string[]
  }>
  influence: string[]
}

interface DanceTradition {
  name: string
  sanskritName: string
  period: string
  regions: string[]
  description: string
  characteristics: string[]
  significance: string[]
  majorWorks: Array<{
    title: string
    sanskritTitle: string
    choreographer: string
    date: string
    description: string
    significance: string[]
    influence: string[]
  }>
  influence: string[]
}

interface Musician {
  name: string
  sanskritName: string
  period: string
  tradition: string
  biography: {
    origin: string
    training: string[]
    positions: string[]
    teachers: string[]
    students: string[]
    majorWorks: Array<{
      title: string
      sanskritTitle: string
      date: string
      genre: string
      description: string
      significance: string
      keyFeatures: string[]
    }>
  }
  contributions: {
    composition: string[]
    performance: string[]
    theory: string[]
    innovation: string[]
    other: string[]
  }
  legacy: string
  modernRelevance: string[]
}

interface Dancer {
  name: string
  sanskritName: string
  period: string
  tradition: string
  biography: {
    origin: string
    training: string[]
    positions: string[]
    teachers: string[]
    students: string[]
    majorWorks: Array<{
      title: string
      sanskritTitle: string
      date: string
      genre: string
      description: string
      significance: string
      keyFeatures: string[]
    }>
  }
  contributions: {
    choreography: string[]
    performance: string[]
    theory: string[]
    innovation: string[]
    other: string[]
  }
  legacy: string
  modernRelevance: string[]
}

interface MusicalForm {
  name: string
  sanskritName: string
  category: string
  description: string
  origins: string[]
  development: string[]
  keyPractitioners: Array<{
    name: string
    sanskritName: string
    contribution: string
  }>
  characteristics: string[]
  significance: string[]
  modernApplications: string[]
}

interface DanceForm {
  name: string
  sanskritName: string
  category: string
  description: string
  origins: string[]
  development: string[]
  keyPractitioners: Array<{
    name: string
    sanskritName: string
    contribution: string
  }>
  characteristics: string[]
  significance: string[]
  modernApplications: string[]
}

interface Instrument {
  name: string
  sanskritName: string
  period: string
  description: string
  construction: Array<{
    material: string
    technique: string
    features: string[]
  }>
  significance: string[]
  evolution: string
  modernUse: string[]
}

interface Resource {
  title: string
  author: string
  year: string
  type: string
  description: string
  language: string
  level: string
  amazonUrl?: string
  isbn?: string
}

interface HinduMusicDanceContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  musicalTraditions: MusicalTradition[]
  danceTraditions: DanceTradition[]
  musicians: Musician[]
  dancers: Dancer[]
  musicalForms: MusicalForm[]
  danceForms: DanceForm[]
  instruments: Instrument[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Hindu Music & Dance | Hindu Impact",
  description: "Comprehensive exploration of Hindu musical and dance traditions, their cultural significance, and global influence.",
  openGraph: {
    title: "Hindu Music & Dance | Hindu Impact",
    description: "In-depth study of Hindu musical and dance heritage and its influence on global arts",
    type: "website",
  },
}

const hinduMusicDanceContent: HinduMusicDanceContent = {
  introduction: `Hindu music and dance represent some of the world's most sophisticated artistic traditions, combining spiritual devotion with artistic excellence. From the ancient Vedic chants to contemporary classical music and dance forms, these traditions have evolved while maintaining their spiritual essence and cultural significance. The integration of music and dance in Hindu worship and cultural expression has created unique forms of artistic communication that continue to influence global arts and culture.`,
  timeline: {
    start: "3000 BCE",
    end: "Present",
    overview: "Hindu music and dance have evolved through various periods, from early Vedic chants and temple dances to contemporary classical traditions, developing sophisticated systems while maintaining spiritual significance.",
    significance: [
      "Development of musical traditions",
      "Evolution of dance forms",
      "Creation of theoretical frameworks",
      "Influence on global arts",
      "Preservation of ancient wisdom",
      "Development of teaching methods",
      "Cultural synthesis and exchange",
      "Contemporary global influence"
    ]
  },
  musicalTraditions: [
    {
      name: "Carnatic Music",
      sanskritName: "कर्णाटक संगीत",
      period: "1500 CE - Present",
      regions: [
        "South India",
        "Global music communities"
      ],
      description: "A sophisticated classical music tradition that developed in South India, combining ancient musical principles with regional influences.",
      characteristics: [
        "Raga system",
        "Tala patterns",
        "Improvisation",
        "Vocal emphasis",
        "Spiritual expression"
      ],
      significance: [
        "Musical excellence",
        "Cultural preservation",
        "Spiritual expression",
        "Technical sophistication",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Sangita Ratnakara",
          sanskritTitle: "संगीत रत्नाकर",
          composer: "Sharngadeva",
          date: "13th century CE",
          description: "Comprehensive treatise on music theory and practice",
          significance: [
            "Theoretical foundation",
            "Practice guidance",
            "Cultural preservation",
            "Technical documentation",
            "Historical record"
          ],
          influence: [
            "Music theory",
            "Practice systems",
            "Cultural expression",
            "Technical development",
            "Global music"
          ]
        }
      ],
      influence: [
        "Global music",
        "Cultural expression",
        "Technical development",
        "Spiritual practice",
        "Artistic excellence"
      ]
    },
    {
      name: "Hindustani Music",
      sanskritName: "हिन्दुस्तानी संगीत",
      period: "1200 CE - Present",
      regions: [
        "North India",
        "Global music communities"
      ],
      description: "A classical music tradition that developed in North India, incorporating Persian and Central Asian influences while maintaining Indian musical principles.",
      characteristics: [
        "Raga system",
        "Tala patterns",
        "Improvisation",
        "Instrumental emphasis",
        "Spiritual expression"
      ],
      significance: [
        "Musical excellence",
        "Cultural synthesis",
        "Spiritual expression",
        "Technical sophistication",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Raga Vibodha",
          sanskritTitle: "राग विबोध",
          composer: "Somanatha",
          date: "1609 CE",
          description: "Comprehensive treatise on Hindustani music theory",
          significance: [
            "Theoretical foundation",
            "Practice guidance",
            "Cultural preservation",
            "Technical documentation",
            "Historical record"
          ],
          influence: [
            "Music theory",
            "Practice systems",
            "Cultural expression",
            "Technical development",
            "Global music"
          ]
        }
      ],
      influence: [
        "Global music",
        "Cultural expression",
        "Technical development",
        "Spiritual practice",
        "Artistic excellence"
      ]
    }
  ],
  danceTraditions: [
    {
      name: "Bharatanatyam",
      sanskritName: "भरतनाट्यम",
      period: "200 BCE - Present",
      regions: [
        "South India",
        "Global dance communities"
      ],
      description: "A classical dance form that originated in Tamil Nadu, combining rhythmic movement, expression, and spiritual devotion.",
      characteristics: [
        "Nritta (pure dance)",
        "Nritya (expressive dance)",
        "Natya (dramatic dance)",
        "Mudras (hand gestures)",
        "Abhinaya (expression)"
      ],
      significance: [
        "Cultural preservation",
        "Spiritual expression",
        "Technical excellence",
        "Artistic tradition",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Natya Shastra",
          sanskritTitle: "नाट्य शास्त्र",
          choreographer: "Bharata Muni",
          date: "200 BCE - 200 CE",
          description: "Ancient treatise on dance and drama",
          significance: [
            "Theoretical foundation",
            "Practice guidance",
            "Cultural preservation",
            "Technical documentation",
            "Historical record"
          ],
          influence: [
            "Dance theory",
            "Practice systems",
            "Cultural expression",
            "Technical development",
            "Global dance"
          ]
        }
      ],
      influence: [
        "Global dance",
        "Cultural expression",
        "Technical development",
        "Spiritual practice",
        "Artistic excellence"
      ]
    },
    {
      name: "Kathak",
      sanskritName: "कथक",
      period: "400 BCE - Present",
      regions: [
        "North India",
        "Global dance communities"
      ],
      description: "A classical dance form that combines storytelling with rhythmic movement, developed in North India.",
      characteristics: [
        "Storytelling",
        "Rhythmic patterns",
        "Footwork",
        "Spins",
        "Expression"
      ],
      significance: [
        "Cultural preservation",
        "Narrative tradition",
        "Technical excellence",
        "Artistic expression",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Kathak Kramik Pustak",
          sanskritTitle: "कथक क्रमिक पुस्तक",
          choreographer: "Pandit Birju Maharaj",
          date: "20th century CE",
          description: "Comprehensive guide to Kathak dance",
          significance: [
            "Technical documentation",
            "Practice guidance",
            "Cultural preservation",
            "Historical record",
            "Teaching resource"
          ],
          influence: [
            "Dance education",
            "Practice systems",
            "Cultural expression",
            "Technical development",
            "Global dance"
          ]
        }
      ],
      influence: [
        "Global dance",
        "Cultural expression",
        "Technical development",
        "Narrative arts",
        "Artistic excellence"
      ]
    }
  ],
  musicians: [
    {
      name: "Tyagaraja",
      sanskritName: "त्यागराज",
      period: "1767-1847 CE",
      tradition: "Carnatic Music",
      biography: {
        origin: "Tiruvaiyaru",
        training: [
          "Traditional music",
          "Vedic studies",
          "Composition",
          "Performance",
          "Spiritual practice"
        ],
        positions: [
          "Composer",
          "Musician",
          "Spiritual teacher"
        ],
        teachers: [
          "Traditional masters",
          "Spiritual guides"
        ],
        students: [
          "Numerous disciples",
          "Musical tradition"
        ],
        majorWorks: [
          {
            title: "Pancharatna Kritis",
            sanskritTitle: "पंचरत्न कृतियः",
            date: "19th century CE",
            genre: "Musical Composition",
            description: "Five masterpieces of Carnatic music",
            significance: "Foundation of Carnatic repertoire",
            keyFeatures: [
              "Musical excellence",
              "Spiritual depth",
              "Technical innovation",
              "Cultural expression",
              "Historical significance"
            ]
          }
        ]
      },
      contributions: {
        composition: [
          "Musical masterpieces",
          "Technical innovation",
          "Spiritual expression",
          "Cultural synthesis",
          "Teaching systems"
        ],
        performance: [
          "Vocal techniques",
          "Musical expression",
          "Spiritual practice",
          "Cultural presentation",
          "Technical excellence"
        ],
        theory: [
          "Musical principles",
          "Composition methods",
          "Teaching systems",
          "Cultural values",
          "Technical standards"
        ],
        innovation: [
          "Musical forms",
          "Composition techniques",
          "Performance methods",
          "Teaching approaches",
          "Cultural integration"
        ],
        other: [
          "Cultural preservation",
          "Spiritual guidance",
          "Musical education",
          "Cultural synthesis",
          "Global influence"
        ]
      },
      legacy: "Tyagaraja's contributions established new standards in Carnatic music composition and performance, combining technical excellence with spiritual depth.",
      modernRelevance: [
        "Musical practice",
        "Cultural expression",
        "Spiritual guidance",
        "Technical standards",
        "Global influence"
      ]
    },
    {
      name: "Tansen",
      sanskritName: "तानसेन",
      period: "1500-1589 CE",
      tradition: "Hindustani Music",
      biography: {
        origin: "Gwalior",
        training: [
          "Traditional music",
          "Vedic studies",
          "Composition",
          "Performance",
          "Spiritual practice"
        ],
        positions: [
          "Court musician",
          "Composer",
          "Musical innovator"
        ],
        teachers: [
          "Traditional masters",
          "Spiritual guides"
        ],
        students: [
          "Numerous disciples",
          "Musical tradition"
        ],
        majorWorks: [
          {
            title: "Raga Darbari",
            sanskritTitle: "राग दरबारी",
            date: "16th century CE",
            genre: "Musical Composition",
            description: "Innovative raga composition",
            significance: "Foundation of Hindustani music",
            keyFeatures: [
              "Musical excellence",
              "Technical innovation",
              "Cultural expression",
              "Historical significance",
              "Spiritual depth"
            ]
          }
        ]
      },
      contributions: {
        composition: [
          "Musical masterpieces",
          "Technical innovation",
          "Cultural synthesis",
          "Teaching systems",
          "Performance methods"
        ],
        performance: [
          "Vocal techniques",
          "Musical expression",
          "Cultural presentation",
          "Technical excellence",
          "Spiritual practice"
        ],
        theory: [
          "Musical principles",
          "Composition methods",
          "Teaching systems",
          "Cultural values",
          "Technical standards"
        ],
        innovation: [
          "Musical forms",
          "Composition techniques",
          "Performance methods",
          "Teaching approaches",
          "Cultural integration"
        ],
        other: [
          "Cultural preservation",
          "Musical education",
          "Cultural synthesis",
          "Technical development",
          "Global influence"
        ]
      },
      legacy: "Tansen's contributions revolutionized Hindustani music, establishing new standards in composition and performance while preserving traditional values.",
      modernRelevance: [
        "Musical practice",
        "Cultural expression",
        "Technical standards",
        "Performance methods",
        "Global influence"
      ]
    }
  ],
  dancers: [
    {
      name: "Rukmini Devi",
      sanskritName: "रुक्मिणी देवी",
      period: "1904-1986 CE",
      tradition: "Bharatanatyam",
      biography: {
        origin: "Madurai",
        training: [
          "Traditional dance",
          "Cultural studies",
          "Choreography",
          "Performance",
          "Teaching methodology"
        ],
        positions: [
          "Dancer",
          "Choreographer",
          "Cultural reformer"
        ],
        teachers: [
          "Traditional masters",
          "Cultural guides"
        ],
        students: [
          "Numerous disciples",
          "Dance tradition"
        ],
        majorWorks: [
          {
            title: "Kalakshetra",
            sanskritTitle: "कलाक्षेत्र",
            date: "1936 CE",
            genre: "Dance Institution",
            description: "Foundation of Kalakshetra dance school",
            significance: "Revival of Bharatanatyam",
            keyFeatures: [
              "Cultural preservation",
              "Technical excellence",
              "Teaching systems",
              "Cultural expression",
              "Historical significance"
            ]
          }
        ]
      },
      contributions: {
        choreography: [
          "Dance compositions",
          "Technical innovation",
          "Cultural expression",
          "Teaching systems",
          "Performance methods"
        ],
        performance: [
          "Dance techniques",
          "Artistic expression",
          "Cultural presentation",
          "Technical excellence",
          "Teaching methods"
        ],
        theory: [
          "Dance principles",
          "Choreography methods",
          "Teaching systems",
          "Cultural values",
          "Technical standards"
        ],
        innovation: [
          "Dance forms",
          "Choreography techniques",
          "Performance methods",
          "Teaching approaches",
          "Cultural integration"
        ],
        other: [
          "Cultural preservation",
          "Dance education",
          "Cultural synthesis",
          "Technical development",
          "Global influence"
        ]
      },
      legacy: "Rukmini Devi's contributions revived and modernized Bharatanatyam, establishing new standards in dance education and performance.",
      modernRelevance: [
        "Dance practice",
        "Cultural expression",
        "Technical standards",
        "Performance methods",
        "Global influence"
      ]
    },
    {
      name: "Birju Maharaj",
      sanskritName: "बिरजू महाराज",
      period: "1938-2022 CE",
      tradition: "Kathak",
      biography: {
        origin: "Lucknow",
        training: [
          "Traditional dance",
          "Cultural studies",
          "Choreography",
          "Performance",
          "Teaching methodology"
        ],
        positions: [
          "Dancer",
          "Choreographer",
          "Cultural ambassador"
        ],
        teachers: [
          "Traditional masters",
          "Cultural guides"
        ],
        students: [
          "Numerous disciples",
          "Dance tradition"
        ],
        majorWorks: [
          {
            title: "Kathak Kramik Pustak",
            sanskritTitle: "कथक क्रमिक पुस्तक",
            date: "20th century CE",
            genre: "Dance Text",
            description: "Comprehensive guide to Kathak dance",
            significance: "Documentation of Kathak tradition",
            keyFeatures: [
              "Technical documentation",
              "Practice guidance",
              "Cultural preservation",
              "Historical record",
              "Teaching resource"
            ]
          }
        ]
      },
      contributions: {
        choreography: [
          "Dance compositions",
          "Technical innovation",
          "Cultural expression",
          "Teaching systems",
          "Performance methods"
        ],
        performance: [
          "Dance techniques",
          "Artistic expression",
          "Cultural presentation",
          "Technical excellence",
          "Teaching methods"
        ],
        theory: [
          "Dance principles",
          "Choreography methods",
          "Teaching systems",
          "Cultural values",
          "Technical standards"
        ],
        innovation: [
          "Dance forms",
          "Choreography techniques",
          "Performance methods",
          "Teaching approaches",
          "Cultural integration"
        ],
        other: [
          "Cultural preservation",
          "Dance education",
          "Cultural synthesis",
          "Technical development",
          "Global influence"
        ]
      },
      legacy: "Birju Maharaj's contributions modernized Kathak while preserving its traditional essence, establishing new standards in dance education and performance.",
      modernRelevance: [
        "Dance practice",
        "Cultural expression",
        "Technical standards",
        "Performance methods",
        "Global influence"
      ]
    }
  ],
  musicalForms: [
    {
      name: "Raga",
      sanskritName: "राग",
      category: "Melodic System",
      description: "A melodic framework that forms the foundation of Indian classical music.",
      origins: [
        "Ancient music",
        "Vedic chants",
        "Folk traditions",
        "Regional music",
        "Cultural heritage"
      ],
      development: [
        "Systematization",
        "Technical refinement",
        "Cultural integration",
        "Modern adaptation",
        "Global practice"
      ],
      keyPractitioners: [
        {
          name: "Bharata Muni",
          sanskritName: "भरत मुनि",
          contribution: "Theoretical foundation"
        }
      ],
      characteristics: [
        "Melodic structure",
        "Emotional expression",
        "Time association",
        "Cultural significance",
        "Technical complexity"
      ],
      significance: [
        "Musical foundation",
        "Cultural expression",
        "Emotional communication",
        "Technical development",
        "Global influence"
      ],
      modernApplications: [
        "Classical music",
        "Fusion music",
        "Film music",
        "World music",
        "Global expression"
      ]
    },
    {
      name: "Tala",
      sanskritName: "ताल",
      category: "Rhythmic System",
      description: "A rhythmic framework that organizes musical time in Indian classical music.",
      origins: [
        "Ancient music",
        "Vedic chants",
        "Folk traditions",
        "Regional music",
        "Cultural heritage"
      ],
      development: [
        "Systematization",
        "Technical refinement",
        "Cultural integration",
        "Modern adaptation",
        "Global practice"
      ],
      keyPractitioners: [
        {
          name: "Bharata Muni",
          sanskritName: "भरत मुनि",
          contribution: "Theoretical foundation"
        }
      ],
      characteristics: [
        "Rhythmic patterns",
        "Time cycles",
        "Cultural significance",
        "Technical complexity",
        "Performance practice"
      ],
      significance: [
        "Rhythmic foundation",
        "Cultural expression",
        "Performance structure",
        "Technical development",
        "Global influence"
      ],
      modernApplications: [
        "Classical music",
        "Fusion music",
        "Film music",
        "World music",
        "Global expression"
      ]
    }
  ],
  danceForms: [
    {
      name: "Nritta",
      sanskritName: "नृत्त",
      category: "Pure Dance",
      description: "Pure dance movements that emphasize rhythm, technique, and geometric patterns.",
      origins: [
        "Ancient dance",
        "Temple traditions",
        "Folk dance",
        "Regional forms",
        "Cultural heritage"
      ],
      development: [
        "Technical refinement",
        "Cultural integration",
        "Modern adaptation",
        "Global practice",
        "Performance evolution"
      ],
      keyPractitioners: [
        {
          name: "Bharata Muni",
          sanskritName: "भरत मुनि",
          contribution: "Theoretical foundation"
        }
      ],
      characteristics: [
        "Rhythmic patterns",
        "Geometric forms",
        "Technical precision",
        "Physical expression",
        "Cultural significance"
      ],
      significance: [
        "Technical foundation",
        "Cultural expression",
        "Performance excellence",
        "Physical development",
        "Global influence"
      ],
      modernApplications: [
        "Classical dance",
        "Contemporary dance",
        "Fusion dance",
        "Performance art",
        "Global expression"
      ]
    },
    {
      name: "Abhinaya",
      sanskritName: "अभिनय",
      category: "Expressive Dance",
      description: "Expressive dance movements that convey meaning, emotion, and narrative.",
      origins: [
        "Ancient dance",
        "Temple traditions",
        "Folk dance",
        "Regional forms",
        "Cultural heritage"
      ],
      development: [
        "Technical refinement",
        "Cultural integration",
        "Modern adaptation",
        "Global practice",
        "Performance evolution"
      ],
      keyPractitioners: [
        {
          name: "Bharata Muni",
          sanskritName: "भरत मुनि",
          contribution: "Theoretical foundation"
        }
      ],
      characteristics: [
        "Emotional expression",
        "Narrative communication",
        "Technical precision",
        "Cultural significance",
        "Performance practice"
      ],
      significance: [
        "Expressive foundation",
        "Cultural expression",
        "Narrative communication",
        "Emotional development",
        "Global influence"
      ],
      modernApplications: [
        "Classical dance",
        "Contemporary dance",
        "Fusion dance",
        "Performance art",
        "Global expression"
      ]
    }
  ],
  instruments: [
    {
      name: "Sitar",
      sanskritName: "सितार",
      period: "13th century CE - Present",
      description: "A plucked string instrument that has become synonymous with Indian classical music.",
      construction: [
        {
          material: "Wood",
          technique: "Handcrafted",
          features: [
            "Long neck",
            "Gourd body",
            "Movable frets",
            "Sympathetic strings",
            "Resonating chamber"
          ]
        }
      ],
      significance: [
        "Musical excellence",
        "Cultural expression",
        "Technical innovation",
        "Global recognition",
        "Artistic tradition"
      ],
      evolution: "Developed from Persian instruments, adapted to Indian musical needs, modern versions have 18-21 strings",
      modernUse: [
        "Classical music",
        "Fusion music",
        "Film music",
        "World music",
        "Global expression"
      ]
    },
    {
      name: "Tabla",
      sanskritName: "तबला",
      period: "18th century CE - Present",
      description: "A pair of hand drums that form the primary percussion instrument in Indian classical music.",
      construction: [
        {
          material: "Wood and skin",
          technique: "Handcrafted",
          features: [
            "Wooden shells",
            "Animal skin heads",
            "Tuning system",
            "Resonating chambers",
            "Playing technique"
          ]
        }
      ],
      significance: [
        "Rhythmic foundation",
        "Cultural expression",
        "Technical innovation",
        "Global recognition",
        "Artistic tradition"
      ],
      evolution: "Developed from earlier drums, refined for classical music, modern versions use synthetic materials",
      modernUse: [
        "Classical music",
        "Fusion music",
        "Film music",
        "World music",
        "Global expression"
      ]
    }
  ],
  resources: [
    {
      title: "The Music of India",
      author: "Reginald Massey",
      year: "1996",
      type: "Book",
      description: "Comprehensive study of Indian musical traditions",
      language: "English",
      level: "Intermediate",
      isbn: "978-8170173328",
      amazonUrl: "https://www.amazon.com/Music-India-Reginald-Massey/dp/8170173329"
    },
    {
      title: "Dance of India",
      author: "Reginald Massey",
      year: "2004",
      type: "Book",
      description: "Comprehensive study of Indian dance traditions",
      language: "English",
      level: "Intermediate",
      isbn: "978-8170174349",
      amazonUrl: "https://www.amazon.com/Dance-India-Reginald-Massey/dp/8170174341"
    },
    {
      title: "The Raga Guide",
      author: "Joep Bor",
      year: "1999",
      type: "Book",
      description: "Survey of 74 Hindustani ragas",
      language: "English",
      level: "Advanced",
      isbn: "978-1902037008",
      amazonUrl: "https://www.amazon.com/Raga-Guide-Survey-Hindustani-Ragas/dp/1902037003"
    },
    {
      title: "Bharata's Natya Shastra",
      author: "M. Ramakrishna Kavi",
      year: "1926",
      type: "Book",
      description: "Ancient treatise on dance and drama",
      language: "English",
      level: "Advanced",
      isbn: "978-8120802328",
      amazonUrl: "https://www.amazon.com/Bharatas-Natya-Shastra-M-Ramakrishna/dp/8120802327"
    },
    {
      title: "The Art of Kathak",
      author: "Sunil Kothari",
      year: "1989",
      type: "Book",
      description: "Comprehensive study of Kathak dance",
      language: "English",
      level: "Intermediate",
      isbn: "978-8170172239",
      amazonUrl: "https://www.amazon.com/Art-Kathak-Sunil-Kothari/dp/8170172233"
    }
  ]
}

export default function HinduMusicDancePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Hindu Music & Dance</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{hinduMusicDanceContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {hinduMusicDanceContent.timeline.start} - {hinduMusicDanceContent.timeline.end}</p>
            <p>{hinduMusicDanceContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {hinduMusicDanceContent.timeline.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Musical Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Musical Traditions</CardTitle>
        </CardHeader>
        <CardContent>
          {hinduMusicDanceContent.musicalTraditions.map((tradition, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {tradition.name} ({tradition.sanskritName})
              </h3>
              <p className="mb-2">{tradition.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {tradition.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-6">
                    {tradition.significance.map((sig, idx) => (
                      <li key={idx}>{sig}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Dance Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Dance Traditions</CardTitle>
        </CardHeader>
        <CardContent>
          {hinduMusicDanceContent.danceTraditions.map((tradition, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {tradition.name} ({tradition.sanskritName})
              </h3>
              <p className="mb-2">{tradition.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {tradition.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-6">
                    {tradition.significance.map((sig, idx) => (
                      <li key={idx}>{sig}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Musicians */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notable Musicians</CardTitle>
        </CardHeader>
        <CardContent>
          {hinduMusicDanceContent.musicians.map((musician, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {musician.name} ({musician.sanskritName})
              </h3>
              <p className="mb-2">Period: {musician.period}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Contributions:</h4>
                  <ul className="list-disc pl-6">
                    {Object.entries(musician.contributions).map(([category, items]) => (
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
                  <p>{musician.legacy}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Dancers */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notable Dancers</CardTitle>
        </CardHeader>
        <CardContent>
          {hinduMusicDanceContent.dancers.map((dancer, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {dancer.name} ({dancer.sanskritName})
              </h3>
              <p className="mb-2">Period: {dancer.period}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Contributions:</h4>
                  <ul className="list-disc pl-6">
                    {Object.entries(dancer.contributions).map(([category, items]) => (
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
                  <p>{dancer.legacy}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Musical Forms */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Musical Forms</CardTitle>
        </CardHeader>
        <CardContent>
          {hinduMusicDanceContent.musicalForms.map((form, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {form.name} ({form.sanskritName})
              </h3>
              <p className="mb-2">{form.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {form.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Applications:</h4>
                  <ul className="list-disc pl-6">
                    {form.modernApplications.map((app, idx) => (
                      <li key={idx}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Dance Forms */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Dance Forms</CardTitle>
        </CardHeader>
        <CardContent>
          {hinduMusicDanceContent.danceForms.map((form, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {form.name} ({form.sanskritName})
              </h3>
              <p className="mb-2">{form.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {form.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Applications:</h4>
                  <ul className="list-disc pl-6">
                    {form.modernApplications.map((app, idx) => (
                      <li key={idx}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Instruments */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Traditional Instruments</CardTitle>
        </CardHeader>
        <CardContent>
          {hinduMusicDanceContent.instruments.map((instrument, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {instrument.name} ({instrument.sanskritName})
              </h3>
              <p className="mb-2">{instrument.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Construction:</h4>
                  <ul className="list-disc pl-6">
                    {instrument.construction.map((item, idx) => (
                      <li key={idx}>
                        <strong>{item.material}:</strong>
                        <ul className="list-disc pl-6">
                          {item.features.map((feature, featureIdx) => (
                            <li key={featureIdx}>{feature}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Use:</h4>
                  <ul className="list-disc pl-6">
                    {instrument.modernUse.map((use, idx) => (
                      <li key={idx}>{use}</li>
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
          <CardTitle>Further Reading</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hinduMusicDanceContent.resources.map((resource, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h3 className="font-semibold">{resource.title}</h3>
                <p>Author: {resource.author}</p>
                <p>Year: {resource.year}</p>
                <p>Type: {resource.type}</p>
                <p>Description: {resource.description}</p>
                <p>Level: {resource.level}</p>
                {resource.isbn && <p>ISBN: {resource.isbn}</p>}
                {resource.amazonUrl && (
                  <Link href={resource.amazonUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="mt-2">Purchase on Amazon</Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 