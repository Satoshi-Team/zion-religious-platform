import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface VedicPeriod {
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

interface VedicSociety {
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

interface VedicReligion {
  name: string
  sanskritName: string
  period: string
  description: string
  deities: Array<{
    name: string
    sanskritName: string
    role: string
    attributes: string[]
    significance: string[]
  }>
  rituals: Array<{
    name: string
    sanskritName: string
    purpose: string
    components: string[]
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

interface VedicLiterature {
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

interface VedicContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  periods: VedicPeriod[]
  society: VedicSociety[]
  religion: VedicReligion[]
  literature: VedicLiterature[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Vedic Period | Hindu History",
  description: "Comprehensive exploration of the Vedic period in Hindu history, including its society, religion, literature, and cultural aspects.",
  openGraph: {
    title: "Vedic Period | Hindu History",
    description: "In-depth study of the Vedic period and its lasting influence on Hindu civilization",
    type: "website",
  },
}

const vedicContent: VedicContent = {
  introduction: `The Vedic period represents one of the most formative eras in Hindu history, spanning from approximately 1500 BCE to 500 BCE. This period saw the composition of the sacred Vedic texts, the development of early Hindu religious practices, and the establishment of fundamental social structures. The Vedic civilization laid the foundation for much of Hindu thought, culture, and practice that continues to influence the tradition today.`,
  timeline: {
    start: "1500 BCE",
    end: "500 BCE",
    overview: "The Vedic period encompasses the early development of Hindu civilization, from the composition of the Rigveda to the emergence of the Upanishads. This era saw significant developments in religious thought, social organization, and cultural expression.",
    significance: [
      "Composition of Vedic texts",
      "Development of early Hinduism",
      "Establishment of social structure",
      "Evolution of religious practices",
      "Formation of cultural traditions",
      "Development of philosophical thought",
      "Creation of literary heritage",
      "Influence on later periods"
    ]
  },
  periods: [
    {
      name: "Early Vedic Period",
      sanskritName: "पूर्व वैदिक काल",
      period: "1500-1000 BCE",
      regions: [
        "Northwest India",
        "Punjab",
        "Haryana"
      ],
      description: "The early Vedic period saw the composition of the Rigveda and the establishment of basic religious and social structures.",
      characteristics: [
        "Pastoral society",
        "Tribal organization",
        "Sacrificial religion",
        "Oral tradition",
        "Nomadic lifestyle"
      ],
      significance: [
        "Foundation of Vedic culture",
        "Development of early Hinduism",
        "Establishment of social order",
        "Creation of literary tradition",
        "Formation of religious practices"
      ],
      majorDevelopments: [
        {
          title: "Composition of Rigveda",
          sanskritTitle: "ऋग्वेद",
          date: "1500-1200 BCE",
          description: "The earliest of the four Vedas, containing hymns to various deities",
          impact: [
            "Religious foundation",
            "Literary tradition",
            "Cultural heritage",
            "Social structure",
            "Philosophical thought"
          ],
          influence: [
            "Later Vedic texts",
            "Hindu philosophy",
            "Religious practices",
            "Cultural development",
            "Modern Hinduism"
          ]
        }
      ],
      influence: [
        "Religious development",
        "Social organization",
        "Cultural traditions",
        "Literary heritage",
        "Philosophical thought"
      ]
    },
    {
      name: "Later Vedic Period",
      sanskritName: "उत्तर वैदिक काल",
      period: "1000-500 BCE",
      regions: [
        "Gangetic Plain",
        "North India",
        "Central India"
      ],
      description: "The later Vedic period saw the expansion of Vedic culture, the composition of later Vedic texts, and the development of more complex religious and social structures.",
      characteristics: [
        "Agricultural society",
        "Territorial states",
        "Complex rituals",
        "Written tradition",
        "Settled lifestyle"
      ],
      significance: [
        "Expansion of Vedic culture",
        "Development of philosophy",
        "Evolution of society",
        "Creation of new texts",
        "Formation of states"
      ],
      majorDevelopments: [
        {
          title: "Composition of Upanishads",
          sanskritTitle: "उपनिषद्",
          date: "800-500 BCE",
          description: "Philosophical texts exploring the nature of reality and self",
          impact: [
            "Philosophical development",
            "Spiritual thought",
            "Religious evolution",
            "Cultural synthesis",
            "Intellectual tradition"
          ],
          influence: [
            "Hindu philosophy",
            "Spiritual practices",
            "Cultural development",
            "Modern thought",
            "Global philosophy"
          ]
        }
      ],
      influence: [
        "Philosophical development",
        "Social evolution",
        "Cultural expansion",
        "Religious transformation",
        "State formation"
      ]
    }
  ],
  society: [
    {
      name: "Vedic Society",
      sanskritName: "वैदिक समाज",
      period: "1500-500 BCE",
      description: "The social structure of the Vedic period evolved from tribal organization to more complex societal forms.",
      structure: {
        classes: [
          {
            name: "Brahmins",
            sanskritName: "ब्राह्मण",
            role: "Priests and scholars",
            responsibilities: [
              "Performing rituals",
              "Preserving texts",
              "Teaching",
              "Advising rulers",
              "Maintaining tradition"
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
              "Protection",
              "Governance",
              "Military leadership",
              "Social order",
              "Territorial expansion"
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
              "Agriculture",
              "Trade",
              "Commerce",
              "Economic activity",
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
            "Rituals",
            "Grammar",
            "Mathematics"
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
          "Pastoralism",
          "Trade",
          "Craftsmanship",
          "Service"
        ],
        trade: [
          "Local exchange",
          "Regional trade",
          "Commodity exchange",
          "Market development",
          "Economic growth"
        ],
        agriculture: [
          "Crop cultivation",
          "Animal husbandry",
          "Irrigation",
          "Land management",
          "Food production"
        ],
        crafts: [
          "Metalwork",
          "Textile production",
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
          "Seasonal celebrations",
          "Religious observances",
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
      name: "Vedic Religion",
      sanskritName: "वैदिक धर्म",
      period: "1500-500 BCE",
      description: "The early form of Hinduism characterized by ritual worship and philosophical inquiry.",
      deities: [
        {
          name: "Indra",
          sanskritName: "इन्द्र",
          role: "King of gods",
          attributes: [
            "Thunder",
            "Rain",
            "War",
            "Strength",
            "Leadership"
          ],
          significance: [
            "Natural forces",
            "Divine power",
            "Protection",
            "Prosperity",
            "Victory"
          ]
        },
        {
          name: "Agni",
          sanskritName: "अग्नि",
          role: "Fire god",
          attributes: [
            "Fire",
            "Sacrifice",
            "Transformation",
            "Purification",
            "Light"
          ],
          significance: [
            "Ritual worship",
            "Divine messenger",
            "Transformation",
            "Purification",
            "Spiritual light"
          ]
        },
        {
          name: "Varuna",
          sanskritName: "वरुण",
          role: "God of cosmic order",
          attributes: [
            "Water",
            "Law",
            "Truth",
            "Justice",
            "Cosmic order"
          ],
          significance: [
            "Moral order",
            "Natural law",
            "Divine justice",
            "Cosmic harmony",
            "Universal truth"
          ]
        }
      ],
      rituals: [
        {
          name: "Yajna",
          sanskritName: "यज्ञ",
          purpose: "Sacrificial worship",
          components: [
            "Fire altar",
            "Offerings",
            "Mantras",
            "Priests",
            "Participants"
          ],
          significance: [
            "Divine communication",
            "Cosmic harmony",
            "Social unity",
            "Spiritual growth",
            "Cultural preservation"
          ]
        },
        {
          name: "Soma",
          sanskritName: "सोम",
          purpose: "Ritual drink offering",
          components: [
            "Plant preparation",
            "Ritual offering",
            "Divine communion",
            "Spiritual experience",
            "Community sharing"
          ],
          significance: [
            "Divine connection",
            "Spiritual experience",
            "Community bonding",
            "Cultural tradition",
            "Religious practice"
          ]
        }
      ],
      texts: [
        {
          name: "Vedas",
          sanskritName: "वेद",
          category: "Sacred texts",
          content: "Hymns, rituals, and philosophical teachings",
          significance: [
            "Religious authority",
            "Cultural heritage",
            "Philosophical foundation",
            "Literary tradition",
            "Spiritual guidance"
          ]
        },
        {
          name: "Brahmanas",
          sanskritName: "ब्राह्मण",
          category: "Ritual texts",
          content: "Ritual instructions and explanations",
          significance: [
            "Ritual guidance",
            "Cultural preservation",
            "Religious practice",
            "Social order",
            "Traditional knowledge"
          ]
        }
      ],
      practices: [
        {
          name: "Meditation",
          sanskritName: "ध्यान",
          description: "Spiritual practice for self-realization",
          methods: [
            "Breath control",
            "Mantra repetition",
            "Visualization",
            "Contemplation",
            "Self-inquiry"
          ],
          significance: [
            "Spiritual growth",
            "Self-realization",
            "Mental clarity",
            "Inner peace",
            "Divine connection"
          ]
        },
        {
          name: "Yoga",
          sanskritName: "योग",
          description: "Physical and spiritual discipline",
          methods: [
            "Postures",
            "Breath control",
            "Meditation",
            "Ethics",
            "Self-discipline"
          ],
          significance: [
            "Physical health",
            "Mental well-being",
            "Spiritual growth",
            "Self-realization",
            "Universal harmony"
          ]
        }
      ]
    }
  ],
  literature: [
    {
      name: "Vedic Literature",
      sanskritName: "वैदिक साहित्य",
      period: "1500-500 BCE",
      description: "The extensive body of texts composed during the Vedic period.",
      categories: [
        {
          name: "Samhitas",
          sanskritName: "संहिता",
          content: "Collections of hymns and mantras",
          significance: [
            "Religious foundation",
            "Literary heritage",
            "Cultural preservation",
            "Spiritual guidance",
            "Historical record"
          ],
          majorWorks: [
            {
              title: "Rigveda",
              sanskritTitle: "ऋग्वेद",
              date: "1500-1200 BCE",
              content: "Hymns to various deities",
              significance: [
                "Earliest Vedic text",
                "Religious foundation",
                "Literary masterpiece",
                "Cultural heritage",
                "Historical source"
              ]
            }
          ]
        },
        {
          name: "Brahmanas",
          sanskritName: "ब्राह्मण",
          content: "Ritual and theological texts",
          significance: [
            "Ritual guidance",
            "Theological development",
            "Cultural preservation",
            "Social order",
            "Religious practice"
          ],
          majorWorks: [
            {
              title: "Shatapatha Brahmana",
              sanskritTitle: "शतपथ ब्राह्मण",
              date: "1000-800 BCE",
              content: "Detailed ritual instructions",
              significance: [
                "Ritual guidance",
                "Cultural preservation",
                "Social structure",
                "Religious practice",
                "Historical record"
              ]
            }
          ]
        }
      ],
      themes: [
        "Divine worship",
        "Cosmic order",
        "Human duty",
        "Spiritual liberation",
        "Social harmony"
      ],
      influence: [
        "Religious development",
        "Cultural preservation",
        "Philosophical thought",
        "Literary tradition",
        "Social structure"
      ],
      preservation: [
        "Oral tradition",
        "Written records",
        "Cultural transmission",
        "Religious practice",
        "Educational system"
      ]
    }
  ],
  resources: [
    {
      title: "The Rig Veda: An Anthology",
      author: "Wendy Doniger",
      year: "2005",
      type: "Book",
      description: "Translation and commentary on selected hymns from the Rigveda",
      language: "English",
      level: "Intermediate",
      isbn: "978-0140449891",
      amazonUrl: "https://www.amazon.com/Rig-Veda-Anthology-Penguin-Classics/dp/0140449892"
    },
    {
      title: "The Vedic Experience: Mantramanjari",
      author: "Raimundo Panikkar",
      year: "1994",
      type: "Book",
      description: "Comprehensive collection of Vedic texts with commentary",
      language: "English",
      level: "Advanced",
      isbn: "978-8120812347",
      amazonUrl: "https://www.amazon.com/Vedic-Experience-Mantramanjari-Raimundo-Panikkar/dp/8120812349"
    },
    {
      title: "The Vedic Age",
      author: "R.C. Majumdar",
      year: "1951",
      type: "Book",
      description: "Historical study of the Vedic period and its significance",
      language: "English",
      level: "Advanced",
      isbn: "978-8120804632",
      amazonUrl: "https://www.amazon.com/Vedic-Age-History-Culture-Civilization/dp/8120804635"
    }
  ]
}

export default function VedicPeriodPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Vedic Period</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{vedicContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {vedicContent.timeline.start} - {vedicContent.timeline.end}</p>
            <p>{vedicContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {vedicContent.timeline.significance.map((item, index) => (
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
          {vedicContent.periods.map((period, index) => (
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

      {/* Society */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Vedic Society</CardTitle>
        </CardHeader>
        <CardContent>
          {vedicContent.society.map((society, index) => (
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
          <CardTitle>Vedic Religion</CardTitle>
        </CardHeader>
        <CardContent>
          {vedicContent.religion.map((religion, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {religion.name} ({religion.sanskritName})
              </h3>
              <p className="mb-2">{religion.description}</p>
              
              {/* Deities */}
              <div className="mb-4">
                <h4 className="font-semibold">Deities:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {religion.deities.map((deity, idx) => (
                    <div key={idx} className="border p-4 rounded-lg">
                      <h5 className="font-semibold">{deity.name} ({deity.sanskritName})</h5>
                      <p>Role: {deity.role}</p>
                      <h6 className="font-semibold">Attributes:</h6>
                      <ul className="list-disc pl-6">
                        {deity.attributes.map((attr, attrIdx) => (
                          <li key={attrIdx}>{attr}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rituals */}
              <div className="mb-4">
                <h4 className="font-semibold">Rituals:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {religion.rituals.map((ritual, idx) => (
                    <div key={idx} className="border p-4 rounded-lg">
                      <h5 className="font-semibold">{ritual.name} ({ritual.sanskritName})</h5>
                      <p>Purpose: {ritual.purpose}</p>
                      <h6 className="font-semibold">Components:</h6>
                      <ul className="list-disc pl-6">
                        {ritual.components.map((comp, compIdx) => (
                          <li key={compIdx}>{comp}</li>
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
          <CardTitle>Vedic Literature</CardTitle>
        </CardHeader>
        <CardContent>
          {vedicContent.literature.map((literature, index) => (
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
            {vedicContent.resources.map((resource, index) => (
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