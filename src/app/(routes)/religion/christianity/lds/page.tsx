import React from 'react'
import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "The Church of Jesus Christ of Latter-day Saints (LDS) - Religious Studies",
  description: "Comprehensive guide to LDS beliefs, practices, history, and modern expressions",
  keywords: [
    "LDS Church",
    "Mormon",
    "Joseph Smith",
    "Book of Mormon",
    "Latter-day Saints",
    "Mormon theology",
    "Mormon temples",
    "Mormon practices"
  ]
}

interface HistoricalPeriod {
  era: string
  events: {
    title: string
    date: string
    description: string
    significance: string[]
  }[]
}

const historicalPeriods: HistoricalPeriod[] = [
  {
    era: "Restoration Period (1820-1844)",
    events: [
      {
        title: "First Vision",
        date: "1820",
        description: "Joseph Smith's first vision of God the Father and Jesus Christ.",
        significance: [
          "Beginning of the Restoration",
          "Direct divine revelation",
          "Clarification of Godhead nature",
          "Call of Joseph Smith as prophet"
        ]
      },
      {
        title: "Book of Mormon Translation",
        date: "1827-1829",
        description: "Translation and publication of the Book of Mormon.",
        significance: [
          "Additional scripture revealed",
          "Witness of Jesus Christ",
          "Ancient American record",
          "Cornerstone of faith"
        ]
      },
      {
        title: "Church Organization",
        date: "1830",
        description: "Official organization of The Church of Jesus Christ of Latter-day Saints.",
        significance: [
          "Restoration of priesthood authority",
          "Establishment of church structure",
          "Beginning of missionary work",
          "Gathering of the Saints"
        ]
      }
    ]
  },
  {
    era: "Pioneer Period (1844-1890)",
    events: [
      {
        title: "Exodus to Utah",
        date: "1846-1847",
        description: "Migration of the Saints to the Salt Lake Valley.",
        significance: [
          "Establishment of Zion in the West",
          "Pioneer legacy",
          "Temple building begins",
          "Community development"
        ]
      },
      {
        title: "Utah Territory",
        date: "1850-1890",
        description: "Development of settlements throughout the intermountain west.",
        significance: [
          "Expansion of church settlements",
          "Economic development",
          "Educational institutions",
          "Cultural preservation"
        ]
      }
    ]
  },
  {
    era: "Modern Church (1890-Present)",
    events: [
      {
        title: "Worldwide Expansion",
        date: "1890-Present",
        description: "Growth and development of the Church worldwide.",
        significance: [
          "Global missionary program",
          "Temple construction worldwide",
          "International leadership",
          "Multicultural membership"
        ]
      },
      {
        title: "Modern Developments",
        date: "1950-Present",
        description: "Contemporary growth and adaptations.",
        significance: [
          "Correlation program",
          "Technological integration",
          "Humanitarian efforts",
          "Educational initiatives"
        ]
      }
    ]
  }
]

interface Practice {
  name: string
  description: string
  requirements: string[]
  significance: string[]
}

const practices: Practice[] = [
  {
    name: "Temple Worship",
    description: "Sacred ordinances and covenants performed in temples.",
    requirements: [
      "Temple recommend",
      "Worthiness standards",
      "Church membership",
      "Preparation classes"
    ],
    significance: [
      "Eternal family sealing",
      "Endowment ceremony",
      "Baptisms for the dead",
      "Sacred covenants"
    ]
  },
  {
    name: "Family Home Evening",
    description: "Weekly family gathering for teaching and activities.",
    requirements: [
      "Regular scheduling",
      "Family participation",
      "Gospel teaching",
      "Activity planning"
    ],
    significance: [
      "Family unity",
      "Gospel teaching",
      "Tradition building",
      "Spiritual growth"
    ]
  }
]

interface ChurchOrganization {
  title: string
  description: string
  responsibilities: string[]
}

const churchOrganization: ChurchOrganization[] = [
  {
    title: "First Presidency",
    description: "The highest governing body of the Church.",
    responsibilities: [
      "Church leadership",
      "Doctrinal oversight",
      "Policy decisions",
      "Worldwide administration"
    ]
  },
  {
    title: "Quorum of the Twelve",
    description: "Second highest governing body, special witnesses of Christ.",
    responsibilities: [
      "Apostolic ministry",
      "Church administration",
      "Missionary oversight",
      "Temple dedication"
    ]
  }
]

interface TempleInformation {
  topic: string
  description: string
  purposes: string[]
  ordinances: string[]
}

const templeInformation: TempleInformation[] = [
  {
    topic: "Temple Purpose",
    description: "Sacred buildings dedicated for highest ordinances.",
    purposes: [
      "Eternal marriage sealings",
      "Endowment ceremony",
      "Baptisms for the dead",
      "Instruction in plan of salvation"
    ],
    ordinances: [
      "Baptism and confirmation",
      "Initiatory ordinances",
      "Endowment",
      "Sealing ordinances"
    ]
  }
]

interface AcademicResource {
  name: string
  type: string
  description: string
  url: string
}

const academicResources: AcademicResource[] = [
  {
    name: "Brigham Young University",
    type: "Educational",
    description: "Premier LDS university with extensive religious studies programs.",
    url: "https://www.byu.edu"
  },
  {
    name: "Church History Library",
    type: "Research",
    description: "Repository of Church historical documents and artifacts.",
    url: "https://history.churchofjesuschrist.org"
  }
]

interface CoreBelief {
  topic: string
  description: string
  scripturalBasis: string[]
  modernApplication: string[]
}

const coreBeliefs: CoreBelief[] = [
  {
    topic: "Restoration of the Gospel",
    description: "The restoration of Christ's original church through the Prophet Joseph Smith.",
    scripturalBasis: [
      "Joseph Smith—History 1:15-20",
      "Doctrine and Covenants 1:30",
      "Articles of Faith 1:6",
      "Ephesians 2:20"
    ],
    modernApplication: [
      "Continuing revelation through living prophets",
      "Priesthood authority",
      "Modern scripture",
      "Temple ordinances"
    ]
  },
  {
    topic: "Plan of Salvation",
    description: "God's plan for human salvation and eternal progression.",
    scripturalBasis: [
      "2 Nephi 2:25-27",
      "Moses 1:39",
      "Abraham 3:22-26",
      "Doctrine and Covenants 76"
    ],
    modernApplication: [
      "Temple work for the dead",
      "Family history research",
      "Eternal family relationships",
      "Personal growth and progression"
    ]
  },
  {
    topic: "Book of Mormon",
    description: "Ancient scripture testifying of Jesus Christ as a companion to the Bible.",
    scripturalBasis: [
      "2 Nephi 29:7-8",
      "Mormon 7:8-9",
      "Moroni 10:3-5",
      "1 Nephi 13:40"
    ],
    modernApplication: [
      "Daily scripture study",
      "Missionary work",
      "Personal testimony",
      "Gospel teaching"
    ]
  },
  {
    topic: "Living Prophets",
    description: "Modern-day prophets who receive revelation for the Church.",
    scripturalBasis: [
      "Amos 3:7",
      "Doctrine and Covenants 1:38",
      "Articles of Faith 1:9",
      "Ephesians 4:11-14"
    ],
    modernApplication: [
      "Following prophetic counsel",
      "General Conference attendance",
      "Church policy updates",
      "Modern revelation"
    ]
  },
  {
    topic: "Eternal Families",
    description: "The doctrine that families can be together forever through temple ordinances.",
    scripturalBasis: [
      "Doctrine and Covenants 132:19-20",
      "Matthew 16:19",
      "Malachi 4:5-6",
      "Doctrine and Covenants 2:1-3"
    ],
    modernApplication: [
      "Temple marriage",
      "Family history work",
      "Family home evening",
      "Parental responsibilities"
    ]
  },
  {
    topic: "Priesthood Authority",
    description: "The authority to act in God's name, restored through heavenly messengers.",
    scripturalBasis: [
      "Doctrine and Covenants 13",
      "Doctrine and Covenants 110",
      "Articles of Faith 1:5",
      "Hebrews 5:4"
    ],
    modernApplication: [
      "Church organization",
      "Ordinance performance",
      "Service in callings",
      "Priesthood blessings"
    ]
  },
  {
    topic: "Word of Wisdom",
    description: "A health code revealed by God for physical and spiritual well-being.",
    scripturalBasis: [
      "Doctrine and Covenants 89",
      "1 Corinthians 3:16-17",
      "Daniel 1:8-20",
      "1 Corinthians 6:19-20"
    ],
    modernApplication: [
      "Healthy lifestyle choices",
      "Abstinence from harmful substances",
      "Physical health maintenance",
      "Spiritual sensitivity"
    ]
  }
]

function LDSPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">The Church of Jesus Christ of Latter-day Saints</h1>
        <p className="text-xl text-muted-foreground">
          Exploring the beliefs, practices, and history of the LDS Church
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="beliefs">Beliefs</TabsTrigger>
          <TabsTrigger value="practices">Practices</TabsTrigger>
          <TabsTrigger value="organization">Organization</TabsTrigger>
          <TabsTrigger value="temples">Temples</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Historical Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {historicalPeriods.map((period) => (
                <div key={period.era} className="space-y-4">
                  <h3 className="text-xl font-semibold">{period.era}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {period.events.map((event) => (
                      <div key={event.title} className="p-4 bg-secondary rounded-lg">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{event.title}</h4>
                          <Badge>{event.date}</Badge>
                        </div>
                        <p className="text-sm mt-2">{event.description}</p>
                        <div className="mt-4">
                          <h5 className="text-sm font-medium">Significance:</h5>
                          <ul className="list-disc list-inside mt-2 text-sm">
                            {event.significance.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="beliefs" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Core Beliefs and Doctrine</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {coreBeliefs.map((belief) => (
                <div key={belief.topic} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{belief.topic}</h3>
                  <p className="text-sm mt-2">{belief.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Scriptural Basis:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {belief.scripturalBasis.map((scripture, index) => (
                          <li key={index}>{scripture}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Modern Application:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {belief.modernApplication.map((app, index) => (
                          <li key={index}>{app}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="practices" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Religious Practices and Ordinances</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {practices.map((practice) => (
                <div key={practice.name} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{practice.name}</h3>
                  <p className="text-sm mt-2">{practice.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Requirements:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {practice.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Significance:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {practice.significance.map((sig, index) => (
                          <li key={index}>{sig}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="organization" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Church Organization and Leadership</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {churchOrganization.map((level) => (
                <div key={level.title} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{level.title}</h3>
                  <p className="text-sm mt-2">{level.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium">Responsibilities:</h4>
                    <ul className="list-disc list-inside mt-2 text-sm">
                      {level.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="temples" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Temples and Sacred Spaces</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {templeInformation.map((section) => (
                <div key={section.topic} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{section.topic}</h3>
                  <p className="text-sm mt-2">{section.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Purpose:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {section.purposes.map((purpose, index) => (
                          <li key={index}>{purpose}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Ordinances:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {section.ordinances.map((ord, index) => (
                          <li key={index}>{ord}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Academic and Educational Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {academicResources.map((resource) => (
                <div key={resource.name} className="p-4 bg-secondary rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{resource.name}</h3>
                    <Badge>{resource.type}</Badge>
                  </div>
                  <p className="text-sm mt-2">{resource.description}</p>
                  <a
                    href={resource.url}
                    className="text-primary hover:underline text-sm block mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Resource
                  </a>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default LDSPage 