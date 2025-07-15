import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ModernPeriod {
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

interface ModernEmpire {
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

interface ModernSociety {
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

interface ModernReligion {
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

interface ModernLiterature {
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

interface ModernContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  periods: ModernPeriod[]
  empires: ModernEmpire[]
  society: ModernSociety[]
  religion: ModernReligion[]
  literature: ModernLiterature[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Modern Period | Hindu History",
  description: "Comprehensive exploration of the Modern period in Hindu history, including colonial rule, independence movement, and contemporary developments.",
  openGraph: {
    title: "Modern Period | Hindu History",
    description: "In-depth study of the Modern period and its lasting influence on Hindu civilization",
    type: "website",
  },
}

const modernContent: ModernContent = {
  introduction: `The Modern period of Hindu history (1500 CE to present) represents a transformative era marked by colonial rule, social reform movements, independence struggle, and contemporary Hindu revival. This period saw significant changes in Hindu society, religion, and culture, as well as the emergence of new philosophical and spiritual movements. The era witnessed both challenges to traditional Hindu practices and remarkable adaptations to modern circumstances.`,
  timeline: {
    start: "1500 CE",
    end: "Present",
    overview: "The Modern period encompasses colonial rule, social reform movements, independence struggle, and contemporary Hindu revival. This era saw the transformation of Hindu civilization through both internal developments and external influences.",
    significance: [
      "Colonial rule and its impact",
      "Social reform movements",
      "Independence struggle",
      "Modern Hindu revival",
      "Global spread of Hinduism",
      "Contemporary challenges",
      "Technological adaptation",
      "Cultural preservation"
    ]
  },
  periods: [
    {
      name: "Early Modern Period",
      sanskritName: "पूर्व आधुनिक काल",
      period: "1500-1800 CE",
      regions: [
        "All India",
        "Southeast Asia",
        "Europe"
      ],
      description: "The early Modern period saw the beginning of European influence and the decline of traditional empires.",
      characteristics: [
        "European contact",
        "Trade expansion",
        "Cultural exchange",
        "Political transformation",
        "Social change"
      ],
      significance: [
        "Global connections",
        "Cultural synthesis",
        "Economic transformation",
        "Political evolution",
        "Social adaptation"
      ],
      majorDevelopments: [
        {
          title: "European Contact",
          sanskritTitle: "यूरोपीय संपर्क",
          date: "1500-1800 CE",
          description: "Beginning of European influence in India",
          impact: [
            "Trade expansion",
            "Cultural exchange",
            "Political change",
            "Social transformation",
            "Economic development"
          ],
          influence: [
            "Global connections",
            "Cultural synthesis",
            "Political systems",
            "Economic patterns",
            "Social structures"
          ]
        }
      ],
      influence: [
        "Global trade",
        "Cultural exchange",
        "Political systems",
        "Social organization",
        "Economic structures"
      ]
    },
    {
      name: "Colonial Period",
      sanskritName: "औपनिवेशिक काल",
      period: "1800-1947 CE",
      regions: [
        "British India",
        "Global Hindu diaspora"
      ],
      description: "The colonial period saw British rule and significant social and religious reform movements.",
      characteristics: [
        "British administration",
        "Social reform",
        "Religious revival",
        "National awakening",
        "Cultural preservation"
      ],
      significance: [
        "Political transformation",
        "Social reform",
        "Religious revival",
        "Cultural preservation",
        "National identity"
      ],
      majorDevelopments: [
        {
          title: "Social Reform Movements",
          sanskritTitle: "सामाजिक सुधार आन्दोलन",
          date: "1800-1947 CE",
          description: "Movements for social and religious reform",
          impact: [
            "Social change",
            "Religious reform",
            "Cultural preservation",
            "National awakening",
            "Modern education"
          ],
          influence: [
            "Modern Hinduism",
            "Social equality",
            "Cultural identity",
            "National movement",
            "Educational system"
          ]
        }
      ],
      influence: [
        "Modern Hinduism",
        "Social reform",
        "Cultural preservation",
        "National movement",
        "Educational system"
      ]
    },
    {
      name: "Post-Independence Period",
      sanskritName: "स्वतंत्रोत्तर काल",
      period: "1947-Present",
      regions: [
        "India",
        "Global Hindu diaspora"
      ],
      description: "The post-independence period has seen the revival and global spread of Hinduism.",
      characteristics: [
        "Hindu revival",
        "Global spread",
        "Modern adaptation",
        "Cultural preservation",
        "Technological integration"
      ],
      significance: [
        "Cultural revival",
        "Global presence",
        "Modern adaptation",
        "Social transformation",
        "Technological integration"
      ],
      majorDevelopments: [
        {
          title: "Hindu Revival",
          sanskritTitle: "हिन्दू पुनरुत्थान",
          date: "1947-Present",
          description: "Revival and global spread of Hinduism",
          impact: [
            "Cultural revival",
            "Global presence",
            "Modern adaptation",
            "Social transformation",
            "Technological integration"
          ],
          influence: [
            "Contemporary Hinduism",
            "Global culture",
            "Modern society",
            "Social change",
            "Cultural preservation"
          ]
        }
      ],
      influence: [
        "Contemporary Hinduism",
        "Global culture",
        "Modern society",
        "Social change",
        "Cultural preservation"
      ]
    }
  ],
  empires: [
    {
      name: "British Raj",
      sanskritName: "ब्रिटिश राज",
      period: "1858-1947 CE",
      regions: [
        "All India",
        "Burma",
        "Sri Lanka"
      ],
      description: "British colonial rule in India, which significantly impacted Hindu society and culture.",
      rulers: [
        {
          name: "Queen Victoria",
          sanskritName: "रानी विक्टोरिया",
          reign: "1837-1901 CE",
          achievements: [
            "Empress of India",
            "Administrative reforms",
            "Cultural policies",
            "Educational system",
            "Infrastructure development"
          ],
          legacy: [
            "Modern administration",
            "Educational system",
            "Infrastructure",
            "Cultural impact",
            "Social changes"
          ]
        }
      ],
      administration: {
        structure: [
          "Centralized government",
          "Provincial administration",
          "District system",
          "Civil service",
          "Police force"
        ],
        policies: [
          "Divide and rule",
          "Western education",
          "Social reform",
          "Infrastructure development",
          "Cultural policies"
        ],
        achievements: [
          "Modern infrastructure",
          "Educational system",
          "Administrative framework",
          "Transport network",
          "Communication system"
        ],
        challenges: [
          "National resistance",
          "Social unrest",
          "Cultural conflict",
          "Economic exploitation",
          "Political opposition"
        ]
      },
      culture: {
        religion: [
          "Christian missions",
          "Hindu reform",
          "Religious tolerance",
          "Cultural synthesis",
          "Social reform"
        ],
        arts: [
          "Modern art",
          "Literature",
          "Music",
          "Dance",
          "Architecture"
        ],
        architecture: [
          "Colonial style",
          "Public buildings",
          "Educational institutions",
          "Transport infrastructure",
          "Urban planning"
        ],
        literature: [
          "English literature",
          "Modern Indian literature",
          "Social reform",
          "National movement",
          "Cultural revival"
        ]
      },
      economy: {
        trade: [
          "International commerce",
          "Industrial development",
          "Market system",
          "Currency",
          "Trade routes"
        ],
        agriculture: [
          "Cash crops",
          "Plantation system",
          "Land management",
          "Production",
          "Distribution"
        ],
        industry: [
          "Textiles",
          "Mining",
          "Railways",
          "Manufacturing",
          "Technology"
        ],
        currency: [
          "British currency",
          "Banking system",
          "Financial institutions",
          "Trade finance",
          "Economic policies"
        ]
      }
    }
  ],
  society: [
    {
      name: "Modern Society",
      sanskritName: "आधुनिक समाज",
      period: "1500-Present",
      description: "A period of significant social transformation and modernization.",
      structure: {
        classes: [
          {
            name: "Urban Middle Class",
            sanskritName: "नगरीय मध्यम वर्ग",
            role: "Modern professionals and business people",
            responsibilities: [
              "Economic development",
              "Social progress",
              "Cultural preservation",
              "Modern education",
              "Social reform"
            ],
            significance: [
              "Modern development",
              "Social change",
              "Cultural adaptation",
              "Economic growth",
              "Social mobility"
            ]
          },
          {
            name: "Rural Population",
            sanskritName: "ग्रामीण जनसंख्या",
            role: "Agricultural and traditional workers",
            responsibilities: [
              "Agricultural production",
              "Traditional crafts",
              "Cultural preservation",
              "Social stability",
              "Economic contribution"
            ],
            significance: [
              "Food production",
              "Cultural heritage",
              "Social stability",
              "Economic foundation",
              "Traditional knowledge"
            ]
          }
        ],
        family: {
          structure: "Nuclear and extended family systems",
          roles: [
            "Modern education",
            "Career development",
            "Cultural preservation",
            "Social progress",
            "Family values"
          ],
          customs: [
            "Modern practices",
            "Traditional values",
            "Cultural synthesis",
            "Social adaptation",
            "Family bonds"
          ],
          significance: [
            "Social stability",
            "Cultural transmission",
            "Modern adaptation",
            "Social progress",
            "Family values"
          ]
        },
        education: {
          system: "Modern education system",
          methods: [
            "Formal education",
            "Technical training",
            "Cultural learning",
            "Professional development",
            "Global exposure"
          ],
          subjects: [
            "Modern sciences",
            "Traditional knowledge",
            "Professional skills",
            "Cultural studies",
            "Global perspectives"
          ],
          significance: [
            "Modern development",
            "Cultural preservation",
            "Social progress",
            "Economic growth",
            "Global integration"
          ]
        }
      },
      economy: {
        activities: [
          "Modern industry",
          "Information technology",
          "Services sector",
          "Traditional crafts",
          "Global trade"
        ],
        trade: [
          "Global commerce",
          "Digital economy",
          "International markets",
          "Modern finance",
          "Economic integration"
        ],
        agriculture: [
          "Modern farming",
          "Technology integration",
          "Market orientation",
          "Sustainable practices",
          "Rural development"
        ],
        crafts: [
          "Modern industry",
          "Traditional crafts",
          "Digital technology",
          "Creative industries",
          "Global markets"
        ]
      },
      culture: {
        dailyLife: [
          "Modern lifestyle",
          "Traditional practices",
          "Cultural synthesis",
          "Global influences",
          "Social interaction"
        ],
        festivals: [
          "Traditional celebrations",
          "Modern adaptations",
          "Global presence",
          "Cultural expression",
          "Community bonding"
        ],
        rituals: [
          "Traditional worship",
          "Modern adaptations",
          "Cultural preservation",
          "Social integration",
          "Spiritual practice"
        ],
        arts: [
          "Modern art",
          "Traditional forms",
          "Digital media",
          "Global influences",
          "Cultural expression"
        ]
      }
    }
  ],
  religion: [
    {
      name: "Modern Hinduism",
      sanskritName: "आधुनिक हिन्दू धर्म",
      period: "1500-Present",
      description: "A period of religious reform, revival, and global spread.",
      traditions: [
        {
          name: "Modern Hindu Movements",
          sanskritName: "आधुनिक हिन्दू आन्दोलन",
          description: "Contemporary Hindu spiritual and social movements",
          practices: [
            "Modern worship",
            "Social service",
            "Global outreach",
            "Cultural preservation",
            "Spiritual practice"
          ],
          significance: [
            "Religious revival",
            "Social reform",
            "Global presence",
            "Cultural preservation",
            "Modern adaptation"
          ]
        },
        {
          name: "Global Hinduism",
          sanskritName: "वैश्विक हिन्दू धर्म",
          description: "Spread and adaptation of Hinduism worldwide",
          practices: [
            "Global temples",
            "Cultural centers",
            "Educational institutions",
            "Community organizations",
            "Digital presence"
          ],
          significance: [
            "Global influence",
            "Cultural exchange",
            "Community building",
            "Educational outreach",
            "Modern adaptation"
          ]
        }
      ],
      temples: [
        {
          name: "Akshardham Temple",
          sanskritName: "अक्षरधाम मन्दिर",
          location: "Delhi",
          period: "2005 CE",
          architecture: [
            "Modern design",
            "Traditional elements",
            "Cultural exhibits",
            "Visitor facilities",
            "Environmental features"
          ],
          significance: [
            "Modern architecture",
            "Cultural center",
            "Tourist attraction",
            "Community hub",
            "Spiritual destination"
          ]
        }
      ],
      texts: [
        {
          name: "Modern Hindu Literature",
          sanskritName: "आधुनिक हिन्दू साहित्य",
          category: "Contemporary religious literature",
          content: "Modern interpretations and adaptations of Hindu texts",
          significance: [
            "Modern relevance",
            "Cultural preservation",
            "Global understanding",
            "Social guidance",
            "Spiritual wisdom"
          ]
        }
      ],
      practices: [
        {
          name: "Modern Temple Worship",
          sanskritName: "आधुनिक मन्दिर पूजा",
          description: "Contemporary temple practices and community activities",
          methods: [
            "Modern rituals",
            "Community programs",
            "Cultural activities",
            "Educational outreach",
            "Digital presence"
          ],
          significance: [
            "Community building",
            "Cultural preservation",
            "Modern adaptation",
            "Social integration",
            "Spiritual practice"
          ]
        }
      ]
    }
  ],
  literature: [
    {
      name: "Modern Literature",
      sanskritName: "आधुनिक साहित्य",
      period: "1500-Present",
      description: "A period of literary achievement in multiple languages and forms.",
      categories: [
        {
          name: "Modern Hindu Literature",
          sanskritName: "आधुनिक हिन्दू साहित्य",
          content: "Contemporary religious and philosophical works",
          significance: [
            "Modern relevance",
            "Cultural preservation",
            "Global understanding",
            "Social guidance",
            "Spiritual wisdom"
          ],
          majorWorks: [
            {
              title: "The Gita and Modern Life",
              sanskritTitle: "गीता और आधुनिक जीवन",
              date: "20th century CE",
              content: "Modern interpretation of the Bhagavad Gita",
              significance: [
                "Modern relevance",
                "Practical wisdom",
                "Global appeal",
                "Social guidance",
                "Spiritual insight"
              ]
            }
          ]
        },
        {
          name: "Contemporary Literature",
          sanskritName: "समकालीन साहित्य",
          content: "Modern literary works in various languages",
          significance: [
            "Cultural expression",
            "Social reflection",
            "Modern themes",
            "Global perspectives",
            "Literary innovation"
          ],
          majorWorks: [
            {
              title: "Modern Hindu Stories",
              sanskritTitle: "आधुनिक हिन्दू कथाएं",
              date: "21st century CE",
              content: "Contemporary narratives of Hindu life",
              significance: [
                "Modern relevance",
                "Cultural preservation",
                "Social reflection",
                "Global understanding",
                "Literary excellence"
              ]
            }
          ]
        }
      ],
      themes: [
        "Modern life",
        "Cultural identity",
        "Social change",
        "Global perspectives",
        "Spiritual wisdom"
      ],
      influence: [
        "Contemporary culture",
        "Global literature",
        "Social change",
        "Cultural preservation",
        "Modern thought"
      ],
      preservation: [
        "Digital archives",
        "Modern publishing",
        "Global distribution",
        "Educational use",
        "Cultural centers"
      ]
    }
  ],
  resources: [
    {
      title: "Modern Hinduism: An Introduction",
      author: "David Smith",
      year: "2003",
      type: "Book",
      description: "Comprehensive introduction to modern Hinduism and its global presence",
      language: "English",
      level: "Intermediate",
      isbn: "978-0415333208",
      amazonUrl: "https://www.amazon.com/Modern-Hinduism-Introduction-David-Smith/dp/0415333205"
    },
    {
      title: "The Hindu Renaissance and its Apologetic Patterns",
      author: "Arvind Sharma",
      year: "2000",
      type: "Book",
      description: "Study of modern Hindu revival movements and their impact",
      language: "English",
      level: "Advanced",
      isbn: "978-8120815324",
      amazonUrl: "https://www.amazon.com/Hindu-Renaissance-Apologetic-Patterns-Sharma/dp/8120815323"
    },
    {
      title: "Hinduism in the Modern World",
      author: "Brian A. Hatcher",
      year: "2015",
      type: "Book",
      description: "Examination of contemporary Hinduism and its global influence",
      language: "English",
      level: "Advanced",
      isbn: "978-0415857550",
      amazonUrl: "https://www.amazon.com/Hinduism-Modern-World-Religions/dp/0415857558"
    }
  ]
}

export default function ModernPeriodPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Modern Period</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{modernContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {modernContent.timeline.start} - {modernContent.timeline.end}</p>
            <p>{modernContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {modernContent.timeline.significance.map((item, index) => (
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
          {modernContent.periods.map((period, index) => (
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
          {modernContent.empires.map((empire, index) => (
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
          <CardTitle>Modern Society</CardTitle>
        </CardHeader>
        <CardContent>
          {modernContent.society.map((society, index) => (
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
          <CardTitle>Modern Religion</CardTitle>
        </CardHeader>
        <CardContent>
          {modernContent.religion.map((religion, index) => (
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
          <CardTitle>Modern Literature</CardTitle>
        </CardHeader>
        <CardContent>
          {modernContent.literature.map((literature, index) => (
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
            {modernContent.resources.map((resource, index) => (
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