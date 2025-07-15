import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ClassicalPeriod {
  name: string
  sanskritName: string
  period: string
  regions: string[]
  description: string
  characteristics: string[]
  significance: string[]
  majorDevelopments: Array<{
    title: string
    sanskritTitle: string
    date: string
    description: string
    impact: string[]
    influence: string[]
  }>
  influence: string[]
}

interface ClassicalEmpire {
  name: string
  sanskritName: string
  period: string
  regions: string[]
  description: string
  rulers: Array<{
    name: string
    sanskritName: string
    reign: string
    achievements: string[]
    legacy: string[]
  }>
  administration: {
    structure: string[]
    policies: string[]
    achievements: string[]
    challenges: string[]
  }
  culture: {
    religion: string[]
    arts: string[]
    architecture: string[]
    literature: string[]
  }
  economy: {
    trade: string[]
    agriculture: string[]
    industry: string[]
    currency: string[]
  }
}

interface ClassicalSociety {
  name: string
  sanskritName: string
  period: string
  description: string
  structure: {
    classes: Array<{
      name: string
      sanskritName: string
      role: string
      responsibilities: string[]
      significance: string[]
    }>
    family: {
      structure: string
      roles: string[]
      customs: string[]
      significance: string[]
    }
    education: {
      system: string
      methods: string[]
      subjects: string[]
      significance: string[]
    }
  }
  economy: {
    activities: string[]
    trade: string[]
    agriculture: string[]
    crafts: string[]
  }
  culture: {
    dailyLife: string[]
    festivals: string[]
    rituals: string[]
    arts: string[]
  }
}

interface ClassicalReligion {
  name: string
  sanskritName: string
  period: string
  description: string
  traditions: Array<{
    name: string
    sanskritName: string
    description: string
    practices: string[]
    significance: string[]
  }>
  temples: Array<{
    name: string
    sanskritName: string
    location: string
    period: string
    architecture: string[]
    significance: string[]
  }>
  texts: Array<{
    name: string
    sanskritName: string
    category: string
    content: string
    significance: string[]
  }>
  practices: Array<{
    name: string
    sanskritName: string
    description: string
    methods: string[]
    significance: string[]
  }>
}

interface ClassicalLiterature {
  name: string
  sanskritName: string
  period: string
  description: string
  categories: Array<{
    name: string
    sanskritName: string
    content: string
    significance: string[]
    majorWorks: Array<{
      title: string
      sanskritTitle: string
      date: string
      content: string
      significance: string[]
    }>
  }>
  themes: string[]
  influence: string[]
  preservation: string[]
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

interface ClassicalContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  periods: ClassicalPeriod[]
  empires: ClassicalEmpire[]
  society: ClassicalSociety[]
  religion: ClassicalReligion[]
  literature: ClassicalLiterature[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Classical Period | Hindu History",
  description: "Comprehensive exploration of the Classical period in Hindu history, including its empires, society, religion, literature, and cultural aspects.",
  openGraph: {
    title: "Classical Period | Hindu History",
    description: "In-depth study of the Classical period and its lasting influence on Hindu civilization",
    type: "website",
  },
}

const classicalContent: ClassicalContent = {
  introduction: `The Classical period of Hindu history (500 BCE - 500 CE) represents a golden age of cultural, intellectual, and artistic achievement. This era saw the rise of major empires, the development of classical Hindu philosophy, the emergence of temple architecture, and significant advancements in literature, science, and the arts. The period laid the foundation for many aspects of modern Hindu civilization and witnessed the flourishing of diverse religious and philosophical traditions.`,
  timeline: {
    start: "500 BCE",
    end: "500 CE",
    overview: "The Classical period encompasses the rise and fall of major empires, the development of classical Hindu philosophy, the emergence of temple architecture, and significant cultural achievements. This era saw the transformation of Hindu civilization from its Vedic roots to a more sophisticated and diverse cultural system.",
    significance: [
      "Rise of major empires",
      "Development of classical philosophy",
      "Emergence of temple architecture",
      "Flourishing of literature and arts",
      "Evolution of social structures",
      "Expansion of trade and commerce",
      "Development of classical Sanskrit",
      "Formation of major religious traditions"
    ]
  },
  periods: [
    {
      name: "Early Classical Period",
      sanskritName: "पूर्व क्लासिक काल",
      period: "500-200 BCE",
      regions: [
        "North India",
        "Central India",
        "Deccan"
      ],
      description: "The early Classical period saw the rise of the Mauryan Empire and the development of early classical Hindu traditions.",
      characteristics: [
        "Imperial expansion",
        "Urban development",
        "Religious synthesis",
        "Literary growth",
        "Cultural exchange"
      ],
      significance: [
        "Political unification",
        "Cultural integration",
        "Religious development",
        "Economic growth",
        "Social evolution"
      ],
      majorDevelopments: [
        {
          title: "Rise of Mauryan Empire",
          sanskritTitle: "मौर्य साम्राज्य",
          date: "322-185 BCE",
          description: "The first major empire in Indian history, unifying much of the subcontinent",
          impact: [
            "Political unification",
            "Administrative system",
            "Cultural integration",
            "Economic development",
            "Social organization"
          ],
          influence: [
            "Imperial administration",
            "Cultural synthesis",
            "Religious tolerance",
            "Economic systems",
            "Social structures"
          ]
        }
      ],
      influence: [
        "Political systems",
        "Cultural development",
        "Religious evolution",
        "Social organization",
        "Economic structures"
      ]
    },
    {
      name: "Later Classical Period",
      sanskritName: "उत्तर क्लासिक काल",
      period: "200 BCE - 500 CE",
      regions: [
        "All India",
        "Southeast Asia",
        "Central Asia"
      ],
      description: "The later Classical period saw the rise of the Gupta Empire and the flourishing of classical Hindu culture.",
      characteristics: [
        "Cultural renaissance",
        "Philosophical development",
        "Artistic achievement",
        "Scientific advancement",
        "Religious synthesis"
      ],
      significance: [
        "Golden age of culture",
        "Philosophical synthesis",
        "Artistic excellence",
        "Scientific progress",
        "Religious harmony"
      ],
      majorDevelopments: [
        {
          title: "Gupta Empire",
          sanskritTitle: "गुप्त साम्राज्य",
          date: "320-550 CE",
          description: "A period of cultural renaissance and artistic achievement",
          impact: [
            "Cultural flowering",
            "Scientific advancement",
            "Literary development",
            "Artistic excellence",
            "Religious synthesis"
          ],
          influence: [
            "Cultural heritage",
            "Scientific tradition",
            "Literary canon",
            "Artistic styles",
            "Religious practices"
          ]
        }
      ],
      influence: [
        "Cultural renaissance",
        "Scientific advancement",
        "Literary development",
        "Artistic excellence",
        "Religious synthesis"
      ]
    }
  ],
  empires: [
    {
      name: "Mauryan Empire",
      sanskritName: "मौर्य साम्राज्य",
      period: "322-185 BCE",
      regions: [
        "North India",
        "Central India",
        "Deccan"
      ],
      description: "The first major empire in Indian history, known for its administrative efficiency and cultural achievements.",
      rulers: [
        {
          name: "Chandragupta Maurya",
          sanskritName: "चन्द्रगुप्त मौर्य",
          reign: "322-298 BCE",
          achievements: [
            "Empire foundation",
            "Administrative system",
            "Military organization",
            "Economic development",
            "Cultural integration"
          ],
          legacy: [
            "Imperial administration",
            "Political unity",
            "Cultural synthesis",
            "Economic systems",
            "Social organization"
          ]
        },
        {
          name: "Ashoka",
          sanskritName: "अशोक",
          reign: "268-232 BCE",
          achievements: [
            "Territorial expansion",
            "Buddhist patronage",
            "Social welfare",
            "Cultural development",
            "Diplomatic relations"
          ],
          legacy: [
            "Religious tolerance",
            "Social welfare",
            "Cultural exchange",
            "Diplomatic tradition",
            "Moral governance"
          ]
        }
      ],
      administration: {
        structure: [
          "Centralized government",
          "Provincial administration",
          "Local governance",
          "Military organization",
          "Revenue system"
        ],
        policies: [
          "Social welfare",
          "Religious tolerance",
          "Economic development",
          "Cultural integration",
          "Diplomatic relations"
        ],
        achievements: [
          "Political unity",
          "Administrative efficiency",
          "Economic prosperity",
          "Cultural synthesis",
          "Social welfare"
        ],
        challenges: [
          "Territorial management",
          "Succession issues",
          "Regional diversity",
          "Economic balance",
          "Cultural integration"
        ]
      },
      culture: {
        religion: [
          "Buddhist influence",
          "Hindu traditions",
          "Religious tolerance",
          "Cultural synthesis",
          "Spiritual development"
        ],
        arts: [
          "Sculpture",
          "Architecture",
          "Literature",
          "Music",
          "Dance"
        ],
        architecture: [
          "Stupas",
          "Pillars",
          "Palaces",
          "Cities",
          "Fortifications"
        ],
        literature: [
          "Sanskrit texts",
          "Pali literature",
          "Historical records",
          "Philosophical works",
          "Religious texts"
        ]
      },
      economy: {
        trade: [
          "International commerce",
          "Maritime trade",
          "Land routes",
          "Market system",
          "Currency"
        ],
        agriculture: [
          "Irrigation",
          "Crop variety",
          "Land management",
          "Production",
          "Distribution"
        ],
        industry: [
          "Metalwork",
          "Textiles",
          "Mining",
          "Craftsmanship",
          "Technology"
        ],
        currency: [
          "Coins",
          "Trade tokens",
          "Barter system",
          "Monetary policy",
          "Economic regulation"
        ]
      }
    },
    {
      name: "Gupta Empire",
      sanskritName: "गुप्त साम्राज्य",
      period: "320-550 CE",
      regions: [
        "North India",
        "Central India",
        "Deccan"
      ],
      description: "A period of cultural renaissance and artistic achievement, often called the Golden Age of India.",
      rulers: [
        {
          name: "Chandragupta I",
          sanskritName: "चन्द्रगुप्त प्रथम",
          reign: "320-335 CE",
          achievements: [
            "Empire foundation",
            "Political stability",
            "Cultural patronage",
            "Economic development",
            "Social harmony"
          ],
          legacy: [
            "Imperial foundation",
            "Cultural renaissance",
            "Political stability",
            "Economic prosperity",
            "Social development"
          ]
        },
        {
          name: "Samudragupta",
          sanskritName: "समुद्रगुप्त",
          reign: "335-380 CE",
          achievements: [
            "Territorial expansion",
            "Military conquest",
            "Cultural patronage",
            "Literary development",
            "Artistic excellence"
          ],
          legacy: [
            "Military prowess",
            "Cultural achievement",
            "Literary excellence",
            "Artistic development",
            "Imperial expansion"
          ]
        }
      ],
      administration: {
        structure: [
          "Decentralized system",
          "Feudal organization",
          "Local autonomy",
          "Military structure",
          "Revenue management"
        ],
        policies: [
          "Cultural patronage",
          "Religious tolerance",
          "Economic development",
          "Social welfare",
          "Educational support"
        ],
        achievements: [
          "Cultural renaissance",
          "Scientific advancement",
          "Literary development",
          "Artistic excellence",
          "Social harmony"
        ],
        challenges: [
          "Regional autonomy",
          "Succession issues",
          "External threats",
          "Economic balance",
          "Social stability"
        ]
      },
      culture: {
        religion: [
          "Hindu revival",
          "Buddhist influence",
          "Religious synthesis",
          "Temple development",
          "Spiritual growth"
        ],
        arts: [
          "Classical music",
          "Dance forms",
          "Sculpture",
          "Painting",
          "Architecture"
        ],
        architecture: [
          "Temple design",
          "Cave temples",
          "Palace architecture",
          "City planning",
          "Fortification"
        ],
        literature: [
          "Sanskrit poetry",
          "Drama",
          "Philosophy",
          "Science",
          "History"
        ]
      },
      economy: {
        trade: [
          "International commerce",
          "Maritime trade",
          "Silk route",
          "Market system",
          "Currency"
        ],
        agriculture: [
          "Advanced farming",
          "Irrigation",
          "Crop variety",
          "Production",
          "Distribution"
        ],
        industry: [
          "Metalwork",
          "Textiles",
          "Mining",
          "Craftsmanship",
          "Technology"
        ],
        currency: [
          "Gold coins",
          "Silver coins",
          "Copper coins",
          "Trade tokens",
          "Monetary policy"
        ]
      }
    }
  ],
  society: [
    {
      name: "Classical Society",
      sanskritName: "क्लासिक समाज",
      period: "500 BCE - 500 CE",
      description: "A period of social evolution and cultural development, marked by increasing urbanization and social complexity.",
      structure: {
        classes: [
          {
            name: "Brahmins",
            sanskritName: "ब्राह्मण",
            role: "Priests and scholars",
            responsibilities: [
              "Religious leadership",
              "Education",
              "Cultural preservation",
              "Social guidance",
              "Intellectual development"
            ],
            significance: [
              "Religious authority",
              "Knowledge preservation",
              "Cultural transmission",
              "Social stability",
              "Intellectual leadership"
            ]
          },
          {
            name: "Kshatriyas",
            sanskritName: "क्षत्रिय",
            role: "Warriors and rulers",
            responsibilities: [
              "Political leadership",
              "Military defense",
              "Social order",
              "Territorial expansion",
              "Cultural protection"
            ],
            significance: [
              "Political power",
              "Military strength",
              "Social order",
              "Territorial control",
              "Cultural protection"
            ]
          },
          {
            name: "Vaishyas",
            sanskritName: "वैश्य",
            role: "Merchants and farmers",
            responsibilities: [
              "Economic activity",
              "Trade",
              "Agriculture",
              "Commerce",
              "Social contribution"
            ],
            significance: [
              "Economic foundation",
              "Social stability",
              "Cultural exchange",
              "Material prosperity",
              "Social mobility"
            ]
          },
          {
            name: "Shudras",
            sanskritName: "शूद्र",
            role: "Service providers",
            responsibilities: [
              "Service to others",
              "Support roles",
              "Manual labor",
              "Social assistance",
              "Cultural support"
            ],
            significance: [
              "Social support",
              "Cultural maintenance",
              "Economic contribution",
              "Social stability",
              "Cultural diversity"
            ]
          }
        ],
        family: {
          structure: "Extended family system",
          roles: [
            "Patriarchal leadership",
            "Maternal care",
            "Elder guidance",
            "Youth support",
            "Family unity"
          ],
          customs: [
            "Joint family living",
            "Elder respect",
            "Family rituals",
            "Marriage customs",
            "Inheritance practices"
          ],
          significance: [
            "Social stability",
            "Cultural transmission",
            "Economic support",
            "Social security",
            "Cultural preservation"
          ]
        },
        education: {
          system: "Gurukula system",
          methods: [
            "Oral transmission",
            "Memorization",
            "Practical training",
            "Personal guidance",
            "Ritual practice"
          ],
          subjects: [
            "Vedas",
            "Philosophy",
            "Grammar",
            "Mathematics",
            "Arts"
          ],
          significance: [
            "Knowledge preservation",
            "Cultural transmission",
            "Social development",
            "Intellectual growth",
            "Spiritual advancement"
          ]
        }
      },
      economy: {
        activities: [
          "Agriculture",
          "Trade",
          "Industry",
          "Craftsmanship",
          "Service"
        ],
        trade: [
          "International commerce",
          "Maritime trade",
          "Land routes",
          "Market system",
          "Currency"
        ],
        agriculture: [
          "Advanced farming",
          "Irrigation",
          "Crop variety",
          "Production",
          "Distribution"
        ],
        crafts: [
          "Metalwork",
          "Textiles",
          "Pottery",
          "Woodwork",
          "Stone work"
        ]
      },
      culture: {
        dailyLife: [
          "Family activities",
          "Religious practices",
          "Social gatherings",
          "Economic work",
          "Cultural events"
        ],
        festivals: [
          "Religious celebrations",
          "Seasonal festivals",
          "Social gatherings",
          "Cultural events",
          "Community bonding"
        ],
        rituals: [
          "Daily worship",
          "Life-cycle ceremonies",
          "Seasonal rites",
          "Social ceremonies",
          "Religious observances"
        ],
        arts: [
          "Music",
          "Dance",
          "Poetry",
          "Architecture",
          "Visual arts"
        ]
      }
    }
  ],
  religion: [
    {
      name: "Classical Hinduism",
      sanskritName: "क्लासिक हिन्दू धर्म",
      period: "500 BCE - 500 CE",
      description: "A period of religious synthesis and philosophical development, marked by the emergence of major Hindu traditions.",
      traditions: [
        {
          name: "Vedanta",
          sanskritName: "वेदान्त",
          description: "Philosophical tradition based on the Upanishads",
          practices: [
            "Meditation",
            "Study of scriptures",
            "Philosophical inquiry",
            "Spiritual practice",
            "Self-realization"
          ],
          significance: [
            "Philosophical foundation",
            "Spiritual guidance",
            "Cultural preservation",
            "Intellectual development",
            "Religious synthesis"
          ]
        },
        {
          name: "Bhakti",
          sanskritName: "भक्ति",
          description: "Devotional tradition emphasizing personal relationship with the divine",
          practices: [
            "Devotional worship",
            "Temple rituals",
            "Prayer",
            "Kirtan",
            "Pilgrimage"
          ],
          significance: [
            "Religious expression",
            "Cultural development",
            "Social integration",
            "Spiritual growth",
            "Community bonding"
          ]
        }
      ],
      temples: [
        {
          name: "Kailasanatha Temple",
          sanskritName: "कैलासनाथ मन्दिर",
          location: "Ellora",
          period: "8th century CE",
          architecture: [
            "Rock-cut architecture",
            "Dravidian style",
            "Sculptural decoration",
            "Complex layout",
            "Symbolic design"
          ],
          significance: [
            "Architectural achievement",
            "Religious center",
            "Cultural heritage",
            "Artistic excellence",
            "Historical record"
          ]
        }
      ],
      texts: [
        {
          name: "Bhagavad Gita",
          sanskritName: "भगवद्गीता",
          category: "Philosophical text",
          content: "Dialogue on duty, devotion, and spiritual wisdom",
          significance: [
            "Philosophical guidance",
            "Spiritual wisdom",
            "Cultural heritage",
            "Moral teachings",
            "Religious synthesis"
          ]
        }
      ],
      practices: [
        {
          name: "Temple Worship",
          sanskritName: "मन्दिर पूजा",
          description: "Organized worship in temple complexes",
          methods: [
            "Daily rituals",
            "Festival celebrations",
            "Pilgrimage",
            "Community worship",
            "Personal devotion"
          ],
          significance: [
            "Religious expression",
            "Community bonding",
            "Cultural preservation",
            "Social integration",
            "Spiritual growth"
          ]
        }
      ]
    }
  ],
  literature: [
    {
      name: "Classical Literature",
      sanskritName: "क्लासिक साहित्य",
      period: "500 BCE - 500 CE",
      description: "A golden age of literary achievement in Sanskrit and other languages.",
      categories: [
        {
          name: "Epic Literature",
          sanskritName: "महाकाव्य",
          content: "Long narrative poems and stories",
          significance: [
            "Cultural heritage",
            "Moral teachings",
            "Historical record",
            "Literary excellence",
            "Religious guidance"
          ],
          majorWorks: [
            {
              title: "Mahabharata",
              sanskritTitle: "महाभारत",
              date: "400 BCE - 400 CE",
              content: "Epic narrative of the Kuru dynasty",
              significance: [
                "Cultural foundation",
                "Moral teachings",
                "Historical record",
                "Literary masterpiece",
                "Religious guidance"
              ]
            },
            {
              title: "Ramayana",
              sanskritTitle: "रामायण",
              date: "500-200 BCE",
              content: "Epic story of Rama and Sita",
              significance: [
                "Cultural heritage",
                "Moral values",
                "Religious guidance",
                "Literary excellence",
                "Social ideals"
              ]
            }
          ]
        },
        {
          name: "Philosophical Literature",
          sanskritName: "दर्शन साहित्य",
          content: "Philosophical and theological texts",
          significance: [
            "Intellectual development",
            "Spiritual guidance",
            "Cultural heritage",
            "Philosophical tradition",
            "Religious synthesis"
          ],
          majorWorks: [
            {
              title: "Brahma Sutra",
              sanskritTitle: "ब्रह्म सूत्र",
              date: "200 BCE - 200 CE",
              content: "Systematic exposition of Vedanta philosophy",
              significance: [
                "Philosophical foundation",
                "Religious guidance",
                "Cultural heritage",
                "Intellectual tradition",
                "Spiritual wisdom"
              ]
            }
          ]
        }
      ],
      themes: [
        "Dharma and duty",
        "Love and devotion",
        "Philosophical inquiry",
        "Moral values",
        "Spiritual wisdom"
      ],
      influence: [
        "Cultural development",
        "Literary tradition",
        "Philosophical thought",
        "Religious practice",
        "Social values"
      ],
      preservation: [
        "Written records",
        "Oral tradition",
        "Cultural transmission",
        "Religious practice",
        "Educational system"
      ]
    }
  ],
  resources: [
    {
      title: "The Classical Age of India",
      author: "R.C. Majumdar",
      year: "1954",
      type: "Book",
      description: "Comprehensive study of the Classical period in Indian history",
      language: "English",
      level: "Advanced",
      isbn: "978-8120804632",
      amazonUrl: "https://www.amazon.com/Classical-Age-India-History-Civilization/dp/8120804635"
    },
    {
      title: "The Gupta Empire",
      author: "Radhakumud Mookerji",
      year: "1959",
      type: "Book",
      description: "Detailed study of the Gupta Empire and its cultural achievements",
      language: "English",
      level: "Advanced",
      isbn: "978-8120804403",
      amazonUrl: "https://www.amazon.com/Gupta-Empire-Radhakumud-Mookerji/dp/8120804406"
    },
    {
      title: "The Art and Architecture of the Indian Subcontinent",
      author: "James C. Harle",
      year: "1994",
      type: "Book",
      description: "Comprehensive study of Indian art and architecture from ancient to medieval times",
      language: "English",
      level: "Advanced",
      isbn: "978-0300062175",
      amazonUrl: "https://www.amazon.com/Architecture-Indian-Subcontinent-Pelican-History/dp/0300062176"
    }
  ]
}

export default function ClassicalPeriodPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Classical Period</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{classicalContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {classicalContent.timeline.start} - {classicalContent.timeline.end}</p>
            <p>{classicalContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {classicalContent.timeline.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Periods */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Periods</CardTitle>
        </CardHeader>
        <CardContent>
          {classicalContent.periods.map((period, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {period.name} ({period.sanskritName})
              </h3>
              <p className="mb-2">{period.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {period.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-6">
                    {period.significance.map((sig, idx) => (
                      <li key={idx}>{sig}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Empires */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Major Empires</CardTitle>
        </CardHeader>
        <CardContent>
          {classicalContent.empires.map((empire, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {empire.name} ({empire.sanskritName})
              </h3>
              <p className="mb-2">{empire.description}</p>
              
              {/* Rulers */}
              <div className="mb-4">
                <h4 className="font-semibold">Notable Rulers:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {empire.rulers.map((ruler, idx) => (
                    <div key={idx} className="border p-4 rounded-lg">
                      <h5 className="font-semibold">{ruler.name} ({ruler.sanskritName})</h5>
                      <p>Reign: {ruler.reign}</p>
                      <h6 className="font-semibold">Achievements:</h6>
                      <ul className="list-disc pl-6">
                        {ruler.achievements.map((achievement, achIdx) => (
                          <li key={achIdx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Administration */}
              <div className="mb-4">
                <h4 className="font-semibold">Administration:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold">Structure:</h5>
                    <ul className="list-disc pl-6">
                      {empire.administration.structure.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold">Policies:</h5>
                    <ul className="list-disc pl-6">
                      {empire.administration.policies.map((policy, idx) => (
                        <li key={idx}>{policy}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Culture */}
              <div className="mb-4">
                <h4 className="font-semibold">Culture:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold">Religion:</h5>
                    <ul className="list-disc pl-6">
                      {empire.culture.religion.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold">Arts:</h5>
                    <ul className="list-disc pl-6">
                      {empire.culture.arts.map((art, idx) => (
                        <li key={idx}>{art}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Economy */}
              <div className="mb-4">
                <h4 className="font-semibold">Economy:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold">Trade:</h5>
                    <ul className="list-disc pl-6">
                      {empire.economy.trade.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold">Agriculture:</h5>
                    <ul className="list-disc pl-6">
                      {empire.economy.agriculture.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Society */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Classical Society</CardTitle>
        </CardHeader>
        <CardContent>
          {classicalContent.society.map((society, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {society.name} ({society.sanskritName})
              </h3>
              <p className="mb-2">{society.description}</p>
              
              {/* Social Structure */}
              <div className="mb-4">
                <h4 className="font-semibold">Social Structure:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold">Classes:</h5>
                    <ul className="list-disc pl-6">
                      {society.structure.classes.map((cls, idx) => (
                        <li key={idx}>
                          <strong>{cls.name} ({cls.sanskritName}):</strong>
                          <ul className="list-disc pl-6">
                            <li>Role: {cls.role}</li>
                            <li>Responsibilities:</li>
                            <ul className="list-disc pl-6">
                              {cls.responsibilities.map((resp, respIdx) => (
                                <li key={respIdx}>{resp}</li>
                              ))}
                            </ul>
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold">Family Structure:</h5>
                    <ul className="list-disc pl-6">
                      <li>Structure: {society.structure.family.structure}</li>
                      <li>Roles:</li>
                      <ul className="list-disc pl-6">
                        {society.structure.family.roles.map((role, roleIdx) => (
                          <li key={roleIdx}>{role}</li>
                        ))}
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Economy */}
              <div className="mb-4">
                <h4 className="font-semibold">Economy:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold">Activities:</h5>
                    <ul className="list-disc pl-6">
                      {society.economy.activities.map((activity, idx) => (
                        <li key={idx}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold">Trade:</h5>
                    <ul className="list-disc pl-6">
                      {society.economy.trade.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Culture */}
              <div className="mb-4">
                <h4 className="font-semibold">Culture:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold">Daily Life:</h5>
                    <ul className="list-disc pl-6">
                      {society.culture.dailyLife.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold">Festivals:</h5>
                    <ul className="list-disc pl-6">
                      {society.culture.festivals.map((festival, idx) => (
                        <li key={idx}>{festival}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Religion */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Classical Religion</CardTitle>
        </CardHeader>
        <CardContent>
          {classicalContent.religion.map((religion, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {religion.name} ({religion.sanskritName})
              </h3>
              <p className="mb-2">{religion.description}</p>
              
              {/* Traditions */}
              <div className="mb-4">
                <h4 className="font-semibold">Traditions:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {religion.traditions.map((tradition, idx) => (
                    <div key={idx} className="border p-4 rounded-lg">
                      <h5 className="font-semibold">{tradition.name} ({tradition.sanskritName})</h5>
                      <p>{tradition.description}</p>
                      <h6 className="font-semibold">Practices:</h6>
                      <ul className="list-disc pl-6">
                        {tradition.practices.map((practice, pracIdx) => (
                          <li key={pracIdx}>{practice}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Temples */}
              <div className="mb-4">
                <h4 className="font-semibold">Temples:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {religion.temples.map((temple, idx) => (
                    <div key={idx} className="border p-4 rounded-lg">
                      <h5 className="font-semibold">{temple.name} ({temple.sanskritName})</h5>
                      <p>Location: {temple.location}</p>
                      <p>Period: {temple.period}</p>
                      <h6 className="font-semibold">Architecture:</h6>
                      <ul className="list-disc pl-6">
                        {temple.architecture.map((feature, archIdx) => (
                          <li key={archIdx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Texts */}
              <div className="mb-4">
                <h4 className="font-semibold">Texts:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {religion.texts.map((text, idx) => (
                    <div key={idx} className="border p-4 rounded-lg">
                      <h5 className="font-semibold">{text.name} ({text.sanskritName})</h5>
                      <p>Category: {text.category}</p>
                      <p>Content: {text.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Literature */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Classical Literature</CardTitle>
        </CardHeader>
        <CardContent>
          {classicalContent.literature.map((literature, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {literature.name} ({literature.sanskritName})
              </h3>
              <p className="mb-2">{literature.description}</p>
              
              {/* Categories */}
              <div className="mb-4">
                <h4 className="font-semibold">Categories:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {literature.categories.map((category, idx) => (
                    <div key={idx} className="border p-4 rounded-lg">
                      <h5 className="font-semibold">{category.name} ({category.sanskritName})</h5>
                      <p>Content: {category.content}</p>
                      <h6 className="font-semibold">Major Works:</h6>
                      <ul className="list-disc pl-6">
                        {category.majorWorks.map((work, workIdx) => (
                          <li key={workIdx}>
                            <strong>{work.title} ({work.sanskritTitle})</strong>
                            <p>Date: {work.date}</p>
                            <p>Content: {work.content}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Themes */}
              <div className="mb-4">
                <h4 className="font-semibold">Themes:</h4>
                <ul className="list-disc pl-6">
                  {literature.themes.map((theme, idx) => (
                    <li key={idx}>{theme}</li>
                  ))}
                </ul>
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
            {classicalContent.resources.map((resource, index) => (
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

      {/* Further Reading CTA */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Explore More Hindu History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-lg">
              Discover more about the Medieval period of Hindu history and its lasting influence on Hindu civilization.
            </p>
            <Link href="/religion/hinduism/history/medieval">
              <Button size="lg" className="mt-4">
                Explore Medieval Period
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 