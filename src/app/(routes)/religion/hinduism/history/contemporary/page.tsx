import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ContemporaryPeriod {
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

interface ContemporarySociety {
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

interface ContemporaryReligion {
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

interface ContemporaryLiterature {
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

interface ContemporaryContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  periods: ContemporaryPeriod[]
  society: ContemporarySociety[]
  religion: ContemporaryReligion[]
  literature: ContemporaryLiterature[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Contemporary Period | Hindu History",
  description: "Comprehensive exploration of the Contemporary period in Hindu history, including modern developments, global influence, and cultural evolution.",
  openGraph: {
    title: "Contemporary Period | Hindu History",
    description: "In-depth study of contemporary Hindu civilization and its global impact",
    type: "website",
  },
}

const contemporaryContent: ContemporaryContent = {
  introduction: `The Contemporary period of Hindu history (1970s to present) represents a dynamic era marked by globalization, technological advancement, and cultural evolution. This period has witnessed the unprecedented spread of Hinduism worldwide, the integration of traditional practices with modern technology, and the emergence of new forms of Hindu expression and community building. The era is characterized by both the preservation of ancient traditions and innovative adaptations to contemporary challenges.`,
  timeline: {
    start: "1970s",
    end: "Present",
    overview: "The Contemporary period encompasses the globalization of Hinduism, technological integration, and cultural evolution. This era has seen remarkable developments in how Hinduism is practiced, preserved, and shared globally.",
    significance: [
      "Global spread of Hinduism",
      "Digital transformation",
      "Cultural preservation",
      "Modern adaptations",
      "Interfaith dialogue",
      "Environmental consciousness",
      "Social reform",
      "Technological integration"
    ]
  },
  periods: [
    {
      name: "Digital Age Hinduism",
      sanskritName: "डिजिटल युग हिन्दू धर्म",
      period: "1990s-Present",
      regions: [
        "Global",
        "India",
        "Diaspora communities"
      ],
      description: "The integration of digital technology with traditional Hindu practices and community building.",
      characteristics: [
        "Online temples",
        "Digital resources",
        "Virtual communities",
        "Social media presence",
        "E-learning platforms"
      ],
      significance: [
        "Global accessibility",
        "Community building",
        "Cultural preservation",
        "Modern outreach",
        "Educational innovation"
      ],
      majorDevelopments: [
        {
          title: "Digital Temple Services",
          sanskritTitle: "डिजिटल मन्दिर सेवाएं",
          date: "2000s-Present",
          description: "Online temple services and virtual darshan",
          impact: [
            "Global accessibility",
            "Community engagement",
            "Cultural preservation",
            "Modern outreach",
            "Technological integration"
          ],
          influence: [
            "Religious practice",
            "Community building",
            "Cultural transmission",
            "Global Hinduism",
            "Modern spirituality"
          ]
        }
      ],
      influence: [
        "Global Hinduism",
        "Modern spirituality",
        "Community building",
        "Cultural preservation",
        "Educational access"
      ]
    },
    {
      name: "Global Hindu Renaissance",
      sanskritName: "वैश्विक हिन्दू पुनरुत्थान",
      period: "1970s-Present",
      regions: [
        "Global",
        "India",
        "Diaspora communities"
      ],
      description: "The global spread and revival of Hindu traditions and practices.",
      characteristics: [
        "Global temples",
        "Cultural centers",
        "Educational institutions",
        "Community organizations",
        "Interfaith dialogue"
      ],
      significance: [
        "Cultural preservation",
        "Global influence",
        "Community building",
        "Educational outreach",
        "Modern adaptation"
      ],
      majorDevelopments: [
        {
          title: "Global Temple Movement",
          sanskritTitle: "वैश्विक मन्दिर आन्दोलन",
          date: "1970s-Present",
          description: "Establishment of Hindu temples worldwide",
          impact: [
            "Cultural preservation",
            "Community building",
            "Religious practice",
            "Educational outreach",
            "Cultural exchange"
          ],
          influence: [
            "Global Hinduism",
            "Cultural transmission",
            "Community development",
            "Interfaith relations",
            "Modern spirituality"
          ]
        }
      ],
      influence: [
        "Global culture",
        "Community development",
        "Cultural preservation",
        "Modern spirituality",
        "Interfaith dialogue"
      ]
    }
  ],
  society: [
    {
      name: "Contemporary Hindu Society",
      sanskritName: "समकालीन हिन्दू समाज",
      period: "1970s-Present",
      description: "Modern Hindu society characterized by global presence and technological integration.",
      structure: {
        classes: [
          {
            name: "Global Hindu Community",
            sanskritName: "वैश्विक हिन्दू समुदाय",
            role: "Global cultural ambassadors",
            responsibilities: [
              "Cultural preservation",
              "Community building",
              "Educational outreach",
              "Interfaith dialogue",
              "Social service"
            ],
            significance: [
              "Global influence",
              "Cultural transmission",
              "Community development",
              "Modern adaptation",
              "Social progress"
            ]
          },
          {
            name: "Digital Generation",
            sanskritName: "डिजिटल पीढ़ी",
            role: "Modern practitioners",
            responsibilities: [
              "Digital outreach",
              "Cultural innovation",
              "Community engagement",
              "Educational development",
              "Social progress"
            ],
            significance: [
              "Modern adaptation",
              "Cultural evolution",
              "Community building",
              "Educational innovation",
              "Social change"
            ]
          }
        ],
        family: {
          structure: "Modern nuclear and extended families",
          roles: [
            "Cultural preservation",
            "Modern adaptation",
            "Educational guidance",
            "Social progress",
            "Community building"
          ],
          customs: [
            "Traditional practices",
            "Modern celebrations",
            "Digital integration",
            "Global connections",
            "Cultural synthesis"
          ],
          significance: [
            "Cultural transmission",
            "Social stability",
            "Modern adaptation",
            "Community building",
            "Cultural preservation"
          ]
        },
        education: {
          system: "Modern and traditional education",
          methods: [
            "Digital learning",
            "Traditional teaching",
            "Cultural programs",
            "Community education",
            "Global exchange"
          ],
          subjects: [
            "Modern sciences",
            "Traditional knowledge",
            "Cultural studies",
            "Digital skills",
            "Global perspectives"
          ],
          significance: [
            "Cultural preservation",
            "Modern development",
            "Community building",
            "Global understanding",
            "Social progress"
          ]
        }
      },
      economy: {
        activities: [
          "Digital services",
          "Cultural tourism",
          "Educational programs",
          "Community development",
          "Global trade"
        ],
        trade: [
          "Global commerce",
          "Digital economy",
          "Cultural products",
          "Educational resources",
          "Community services"
        ],
        agriculture: [
          "Modern farming",
          "Sustainable practices",
          "Organic farming",
          "Community gardens",
          "Environmental care"
        ],
        crafts: [
          "Traditional arts",
          "Modern design",
          "Digital media",
          "Cultural products",
          "Community crafts"
        ]
      },
      culture: {
        dailyLife: [
          "Digital integration",
          "Traditional practices",
          "Modern lifestyle",
          "Global connections",
          "Cultural synthesis"
        ],
        festivals: [
          "Global celebrations",
          "Digital participation",
          "Community events",
          "Cultural programs",
          "Modern adaptations"
        ],
        rituals: [
          "Traditional worship",
          "Digital services",
          "Community ceremonies",
          "Modern practices",
          "Cultural preservation"
        ],
        arts: [
          "Digital media",
          "Traditional arts",
          "Modern expression",
          "Cultural programs",
          "Community arts"
        ]
      }
    }
  ],
  religion: [
    {
      name: "Contemporary Hinduism",
      sanskritName: "समकालीन हिन्दू धर्म",
      period: "1970s-Present",
      description: "Modern expressions of Hindu traditions and practices.",
      traditions: [
        {
          name: "Digital Dharma",
          sanskritName: "डिजिटल धर्म",
          description: "Integration of digital technology with traditional practices",
          practices: [
            "Online worship",
            "Digital resources",
            "Virtual communities",
            "E-learning",
            "Social media outreach"
          ],
          significance: [
            "Global accessibility",
            "Community building",
            "Cultural preservation",
            "Modern outreach",
            "Educational innovation"
          ]
        },
        {
          name: "Global Hinduism",
          sanskritName: "वैश्विक हिन्दू धर्म",
          description: "Worldwide spread and adaptation of Hindu traditions",
          practices: [
            "Global temples",
            "Cultural centers",
            "Community programs",
            "Educational outreach",
            "Interfaith dialogue"
          ],
          significance: [
            "Cultural preservation",
            "Global influence",
            "Community building",
            "Modern adaptation",
            "Cultural exchange"
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
          name: "Digital Scriptures",
          sanskritName: "डिजिटल शास्त्र",
          category: "Modern religious resources",
          content: "Digital versions of traditional texts and modern interpretations",
          significance: [
            "Global accessibility",
            "Cultural preservation",
            "Modern adaptation",
            "Educational resource",
            "Community building"
          ]
        }
      ],
      practices: [
        {
          name: "Modern Temple Worship",
          sanskritName: "आधुनिक मन्दिर पूजा",
          description: "Contemporary temple practices and community activities",
          methods: [
            "Digital services",
            "Community programs",
            "Cultural activities",
            "Educational outreach",
            "Social service"
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
      name: "Contemporary Literature",
      sanskritName: "समकालीन साहित्य",
      period: "1970s-Present",
      description: "Modern literary expressions of Hindu culture and philosophy.",
      categories: [
        {
          name: "Digital Literature",
          sanskritName: "डिजिटल साहित्य",
          content: "Online resources and digital publications",
          significance: [
            "Global accessibility",
            "Cultural preservation",
            "Modern adaptation",
            "Community building",
            "Educational resource"
          ],
          majorWorks: [
            {
              title: "Digital Dharma",
              sanskritTitle: "डिजिटल धर्म",
              date: "21st century CE",
              content: "Modern interpretations of Hindu texts and practices",
              significance: [
                "Global accessibility",
                "Cultural preservation",
                "Modern adaptation",
                "Community building",
                "Educational innovation"
              ]
            }
          ]
        },
        {
          name: "Global Hindu Literature",
          sanskritName: "वैश्विक हिन्दू साहित्य",
          content: "Contemporary works in multiple languages",
          significance: [
            "Cultural expression",
            "Global influence",
            "Community building",
            "Modern adaptation",
            "Cultural exchange"
          ],
          majorWorks: [
            {
              title: "Global Hinduism",
              sanskritTitle: "वैश्विक हिन्दू धर्म",
              date: "21st century CE",
              content: "Contemporary perspectives on Hindu traditions",
              significance: [
                "Global understanding",
                "Cultural preservation",
                "Modern adaptation",
                "Community building",
                "Cultural exchange"
              ]
            }
          ]
        }
      ],
      themes: [
        "Modern life",
        "Global culture",
        "Digital integration",
        "Cultural preservation",
        "Community building"
      ],
      influence: [
        "Global literature",
        "Modern thought",
        "Cultural exchange",
        "Community development",
        "Educational innovation"
      ],
      preservation: [
        "Digital archives",
        "Online resources",
        "Community libraries",
        "Educational programs",
        "Cultural centers"
      ]
    }
  ],
  resources: [
    {
      title: "Hinduism in the Digital Age",
      author: "Ravi Gupta",
      year: "2018",
      type: "Book",
      description: "Examination of how digital technology is transforming Hindu practices and community building",
      language: "English",
      level: "Advanced",
      isbn: "978-1138486823",
      amazonUrl: "https://www.amazon.com/Hinduism-Digital-Age-Ravi-Gupta/dp/1138486824"
    },
    {
      title: "Global Hinduism: A Reader",
      author: "Mark Juergensmeyer",
      year: "2012",
      type: "Book",
      description: "Collection of essays on the global spread and adaptation of Hinduism",
      language: "English",
      level: "Advanced",
      isbn: "978-0199925005",
      amazonUrl: "https://www.amazon.com/Global-Hinduism-Reader-Mark-Juergensmeyer/dp/0199925005"
    },
    {
      title: "Modern Hinduism: An Introduction",
      author: "Brian A. Hatcher",
      year: "2015",
      type: "Book",
      description: "Comprehensive introduction to contemporary Hinduism and its global presence",
      language: "English",
      level: "Intermediate",
      isbn: "978-0415857550",
      amazonUrl: "https://www.amazon.com/Hinduism-Modern-World-Religions/dp/0415857558"
    }
  ]
}

export default function ContemporaryPeriodPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contemporary Period</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{contemporaryContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {contemporaryContent.timeline.start} - {contemporaryContent.timeline.end}</p>
            <p>{contemporaryContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {contemporaryContent.timeline.significance.map((item, index) => (
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
          {contemporaryContent.periods.map((period, index) => (
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
          <CardTitle>Contemporary Society</CardTitle>
        </CardHeader>
        <CardContent>
          {contemporaryContent.society.map((society, index) => (
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
          <CardTitle>Contemporary Religion</CardTitle>
        </CardHeader>
        <CardContent>
          {contemporaryContent.religion.map((religion, index) => (
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
          <CardTitle>Contemporary Literature</CardTitle>
        </CardHeader>
        <CardContent>
          {contemporaryContent.literature.map((literature, index) => (
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
            {contemporaryContent.resources.map((resource, index) => (
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
              Discover more about the Modern period of Hindu history and its lasting influence on Hindu civilization.
            </p>
            <Link href="/religion/hinduism/history/modern">
              <Button size="lg" className="mt-4">
                Explore Modern Period
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 