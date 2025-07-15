import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface MedievalPeriod {
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

interface MedievalEmpire {
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

interface MedievalSociety {
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

interface MedievalReligion {
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

interface MedievalLiterature {
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

interface MedievalContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  periods: MedievalPeriod[]
  empires: MedievalEmpire[]
  society: MedievalSociety[]
  religion: MedievalReligion[]
  literature: MedievalLiterature[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Medieval Period | Hindu History",
  description: "Comprehensive exploration of the Medieval period in Hindu history, including its empires, society, religion, literature, and cultural aspects.",
  openGraph: {
    title: "Medieval Period | Hindu History",
    description: "In-depth study of the Medieval period and its lasting influence on Hindu civilization",
    type: "website",
  },
}

const medievalContent: MedievalContent = {
  introduction: `The Medieval period of Hindu history (500-1500 CE) represents a dynamic era of cultural synthesis, political transformation, and religious evolution. This period saw the rise of regional kingdoms, the development of temple architecture, the flourishing of bhakti movements, and significant interactions with Islamic and other cultural traditions. The era witnessed both challenges and opportunities, leading to remarkable adaptations and innovations in Hindu civilization.`,
  timeline: {
    start: "500 CE",
    end: "1500 CE",
    overview: "The Medieval period encompasses the rise of regional kingdoms, the development of temple architecture, the flourishing of bhakti movements, and significant cultural interactions. This era saw the transformation of Hindu civilization through both internal developments and external influences.",
    significance: [
      "Rise of regional kingdoms",
      "Development of temple architecture",
      "Flourishing of bhakti movements",
      "Cultural synthesis",
      "Evolution of social structures",
      "Expansion of trade and commerce",
      "Development of regional languages",
      "Formation of new religious traditions"
    ]
  },
  periods: [
    {
      name: "Early Medieval Period",
      sanskritName: "पूर्व मध्यकाल",
      period: "500-1000 CE",
      regions: [
        "North India",
        "Central India",
        "Deccan",
        "South India"
      ],
      description: "The early Medieval period saw the rise of regional kingdoms and the development of temple architecture.",
      characteristics: [
        "Regional political fragmentation",
        "Temple construction",
        "Cultural regionalization",
        "Religious development",
        "Economic growth"
      ],
      significance: [
        "Political decentralization",
        "Cultural diversity",
        "Religious evolution",
        "Economic expansion",
        "Social transformation"
      ],
      majorDevelopments: [
        {
          title: "Rise of Regional Kingdoms",
          sanskritTitle: "क्षेत्रीय राज्य",
          date: "500-1000 CE",
          description: "Development of powerful regional states across India",
          impact: [
            "Political decentralization",
            "Cultural regionalization",
            "Economic development",
            "Social evolution",
            "Religious diversity"
          ],
          influence: [
            "Regional identities",
            "Cultural traditions",
            "Political systems",
            "Economic patterns",
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
      name: "Later Medieval Period",
      sanskritName: "उत्तर मध्यकाल",
      period: "1000-1500 CE",
      regions: [
        "All India",
        "Southeast Asia",
        "Central Asia"
      ],
      description: "The later Medieval period saw the rise of Islamic influence and the flourishing of bhakti movements.",
      characteristics: [
        "Islamic influence",
        "Bhakti movements",
        "Cultural synthesis",
        "Religious reform",
        "Social change"
      ],
      significance: [
        "Cultural integration",
        "Religious synthesis",
        "Social reform",
        "Political transformation",
        "Economic adaptation"
      ],
      majorDevelopments: [
        {
          title: "Bhakti Movement",
          sanskritTitle: "भक्ति आन्दोलन",
          date: "1000-1500 CE",
          description: "Widespread devotional movement across India",
          impact: [
            "Religious reform",
            "Social change",
            "Cultural development",
            "Literary growth",
            "Spiritual renewal"
          ],
          influence: [
            "Modern Hinduism",
            "Social equality",
            "Cultural expression",
            "Literary tradition",
            "Spiritual practice"
          ]
        }
      ],
      influence: [
        "Modern Hinduism",
        "Social reform",
        "Cultural synthesis",
        "Literary development",
        "Spiritual practice"
      ]
    }
  ],
  empires: [
    {
      name: "Chola Empire",
      sanskritName: "चोल साम्राज्य",
      period: "850-1279 CE",
      regions: [
        "South India",
        "Sri Lanka",
        "Southeast Asia"
      ],
      description: "A powerful maritime empire known for its temple architecture, trade, and cultural achievements.",
      rulers: [
        {
          name: "Rajaraja Chola I",
          sanskritName: "राजराज चोल प्रथम",
          reign: "985-1014 CE",
          achievements: [
            "Territorial expansion",
            "Temple construction",
            "Naval power",
            "Cultural development",
            "Administrative reforms"
          ],
          legacy: [
            "Temple architecture",
            "Maritime trade",
            "Cultural heritage",
            "Administrative system",
            "Artistic excellence"
          ]
        },
        {
          name: "Rajendra Chola I",
          sanskritName: "राजेन्द्र चोल प्रथम",
          reign: "1014-1044 CE",
          achievements: [
            "Southeast Asian expansion",
            "Naval expeditions",
            "Cultural exchange",
            "Temple construction",
            "Trade development"
          ],
          legacy: [
            "Maritime influence",
            "Cultural exchange",
            "Temple heritage",
            "Trade networks",
            "Political power"
          ]
        }
      ],
      administration: {
        structure: [
          "Centralized government",
          "Local administration",
          "Revenue system",
          "Military organization",
          "Trade regulation"
        ],
        policies: [
          "Temple patronage",
          "Trade promotion",
          "Cultural development",
          "Social welfare",
          "Religious tolerance"
        ],
        achievements: [
          "Temple architecture",
          "Maritime trade",
          "Cultural synthesis",
          "Administrative efficiency",
          "Social stability"
        ],
        challenges: [
          "Territorial management",
          "Succession issues",
          "External threats",
          "Economic balance",
          "Cultural integration"
        ]
      },
      culture: {
        religion: [
          "Temple worship",
          "Bhakti movement",
          "Religious tolerance",
          "Cultural synthesis",
          "Spiritual development"
        ],
        arts: [
          "Temple sculpture",
          "Bronze casting",
          "Music",
          "Dance",
          "Literature"
        ],
        architecture: [
          "Temple complexes",
          "City planning",
          "Water management",
          "Fortification",
          "Public works"
        ],
        literature: [
          "Tamil literature",
          "Sanskrit texts",
          "Religious works",
          "Historical records",
          "Poetry"
        ]
      },
      economy: {
        trade: [
          "Maritime commerce",
          "International trade",
          "Market system",
          "Currency",
          "Trade routes"
        ],
        agriculture: [
          "Irrigation",
          "Crop variety",
          "Land management",
          "Production",
          "Distribution"
        ],
        industry: [
          "Textiles",
          "Metalwork",
          "Shipbuilding",
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
    },
    {
      name: "Vijayanagara Empire",
      sanskritName: "विजयनगर साम्राज्य",
      period: "1336-1646 CE",
      regions: [
        "South India",
        "Deccan",
        "Central India"
      ],
      description: "A powerful Hindu empire known for its cultural achievements and resistance to Islamic expansion.",
      rulers: [
        {
          name: "Krishnadevaraya",
          sanskritName: "कृष्णदेवराय",
          reign: "1509-1529 CE",
          achievements: [
            "Territorial expansion",
            "Cultural patronage",
            "Military victories",
            "Administrative reforms",
            "Economic development"
          ],
          legacy: [
            "Cultural renaissance",
            "Military strength",
            "Administrative efficiency",
            "Economic prosperity",
            "Artistic excellence"
          ]
        }
      ],
      administration: {
        structure: [
          "Centralized system",
          "Provincial administration",
          "Military organization",
          "Revenue management",
          "Local governance"
        ],
        policies: [
          "Hindu revival",
          "Cultural patronage",
          "Economic development",
          "Social welfare",
          "Religious tolerance"
        ],
        achievements: [
          "Cultural renaissance",
          "Military strength",
          "Administrative efficiency",
          "Economic prosperity",
          "Social stability"
        ],
        challenges: [
          "External threats",
          "Succession issues",
          "Regional autonomy",
          "Economic balance",
          "Social stability"
        ]
      },
      culture: {
        religion: [
          "Hindu revival",
          "Temple worship",
          "Religious tolerance",
          "Cultural synthesis",
          "Spiritual development"
        ],
        arts: [
          "Architecture",
          "Sculpture",
          "Music",
          "Dance",
          "Literature"
        ],
        architecture: [
          "Temple complexes",
          "Palace architecture",
          "City planning",
          "Fortification",
          "Public works"
        ],
        literature: [
          "Sanskrit texts",
          "Telugu literature",
          "Kannada works",
          "Tamil texts",
          "Historical records"
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
          "Advanced farming",
          "Irrigation",
          "Crop variety",
          "Production",
          "Distribution"
        ],
        industry: [
          "Textiles",
          "Metalwork",
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
      name: "Medieval Society",
      sanskritName: "मध्यकालीन समाज",
      period: "500-1500 CE",
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
      name: "Medieval Hinduism",
      sanskritName: "मध्यकालीन हिन्दू धर्म",
      period: "500-1500 CE",
      description: "A period of religious synthesis and philosophical development, marked by the emergence of major Hindu traditions.",
      traditions: [
        {
          name: "Bhakti Movement",
          sanskritName: "भक्ति आन्दोलन",
          description: "Devotional movement emphasizing personal relationship with the divine",
          practices: [
            "Devotional worship",
            "Temple rituals",
            "Prayer",
            "Kirtan",
            "Pilgrimage"
          ],
          significance: [
            "Religious reform",
            "Social change",
            "Cultural development",
            "Literary growth",
            "Spiritual renewal"
          ]
        },
        {
          name: "Tantra",
          sanskritName: "तन्त्र",
          description: "Esoteric tradition emphasizing ritual and meditation",
          practices: [
            "Ritual worship",
            "Meditation",
            "Yoga",
            "Mantra",
            "Visualization"
          ],
          significance: [
            "Spiritual practice",
            "Cultural development",
            "Religious synthesis",
            "Artistic expression",
            "Philosophical growth"
          ]
        }
      ],
      temples: [
        {
          name: "Brihadeeswarar Temple",
          sanskritName: "बृहदीश्वर मन्दिर",
          location: "Thanjavur",
          period: "11th century CE",
          architecture: [
            "Dravidian style",
            "Tower construction",
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
          name: "Bhagavata Purana",
          sanskritName: "भागवत पुराण",
          category: "Religious text",
          content: "Narrative of Krishna's life and teachings",
          significance: [
            "Religious guidance",
            "Cultural heritage",
            "Literary excellence",
            "Philosophical wisdom",
            "Spiritual teachings"
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
      name: "Medieval Literature",
      sanskritName: "मध्यकालीन साहित्य",
      period: "500-1500 CE",
      description: "A period of literary achievement in Sanskrit and regional languages.",
      categories: [
        {
          name: "Bhakti Literature",
          sanskritName: "भक्ति साहित्य",
          content: "Devotional poetry and prose",
          significance: [
            "Religious expression",
            "Cultural heritage",
            "Literary excellence",
            "Social reform",
            "Spiritual guidance"
          ],
          majorWorks: [
            {
              title: "Gita Govinda",
              sanskritTitle: "गीत गोविन्द",
              date: "12th century CE",
              content: "Devotional poetry about Krishna and Radha",
              significance: [
                "Literary masterpiece",
                "Religious expression",
                "Cultural heritage",
                "Musical tradition",
                "Artistic influence"
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
              title: "Vedanta Desika's Works",
              sanskritTitle: "वेदान्त देशिक ग्रन्थ",
              date: "13th-14th century CE",
              content: "Philosophical treatises on Vishishtadvaita",
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
        "Devotion and love",
        "Philosophical inquiry",
        "Social reform",
        "Cultural synthesis",
        "Spiritual wisdom"
      ],
      influence: [
        "Modern literature",
        "Religious practice",
        "Cultural development",
        "Social reform",
        "Spiritual guidance"
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
      title: "The Medieval History of India",
      author: "R.C. Majumdar",
      year: "1960",
      type: "Book",
      description: "Comprehensive study of the Medieval period in Indian history",
      language: "English",
      level: "Advanced",
      isbn: "978-8120804939",
      amazonUrl: "https://www.amazon.com/Medieval-History-India-History-Civilization/dp/8120804936"
    },
    {
      title: "The Vijayanagara Empire",
      author: "Robert Sewell",
      year: "1900",
      type: "Book",
      description: "Detailed study of the Vijayanagara Empire and its cultural achievements",
      language: "English",
      level: "Advanced",
      isbn: "978-8120603387",
      amazonUrl: "https://www.amazon.com/Vijayanagara-Empire-Robert-Sewell/dp/8120603389"
    },
    {
      title: "The Art and Architecture of Medieval India",
      author: "George Michell",
      year: "1995",
      type: "Book",
      description: "Comprehensive study of Indian art and architecture from medieval times",
      language: "English",
      level: "Advanced",
      isbn: "978-0300062175",
      amazonUrl: "https://www.amazon.com/Architecture-Medieval-India-George-Michell/dp/0300062176"
    }
  ]
}

export default function MedievalPeriodPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Medieval Period</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{medievalContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {medievalContent.timeline.start} - {medievalContent.timeline.end}</p>
            <p>{medievalContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {medievalContent.timeline.significance.map((item, index) => (
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
          {medievalContent.periods.map((period, index) => (
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
          {medievalContent.empires.map((empire, index) => (
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
          <CardTitle>Medieval Society</CardTitle>
        </CardHeader>
        <CardContent>
          {medievalContent.society.map((society, index) => (
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
          <CardTitle>Medieval Religion</CardTitle>
        </CardHeader>
        <CardContent>
          {medievalContent.religion.map((religion, index) => (
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
          <CardTitle>Medieval Literature</CardTitle>
        </CardHeader>
        <CardContent>
          {medievalContent.literature.map((literature, index) => (
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
            {medievalContent.resources.map((resource, index) => (
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
              Discover more about the Classical period of Hindu history and its lasting influence on Hindu civilization.
            </p>
            <Link href="/religion/hinduism/history/classical">
              <Button size="lg" className="mt-4">
                Explore Classical Period
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}