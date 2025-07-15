import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Daoist Canon (Daozang) | Sacred Texts of Daoism",
  description: "Comprehensive guide to the Daoist Canon (Daozang), including the Three Caverns (San Dong), Four Supplements, and major Daoist texts. Explore the history, transmission, and interpretation of Daoist scriptures.",
  keywords: [
    "Daoist Canon",
    "Daozang",
    "Three Caverns",
    "San Dong",
    "Dao De Jing",
    "Zhuangzi",
    "Daoist scriptures",
    "Chinese religion",
    "Daoist texts",
    "religious literature"
  ],
  openGraph: {
    title: "Daoist Canon (Daozang) - Sacred Texts of Daoism",
    description: "Explore the comprehensive collection of Daoist scriptures and their transmission history",
    images: [
      {
        url: "/images/daoist-canon-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient Daoist Manuscripts"
      }
    ]
  }
}

interface DaoistText {
  id: string
  title: {
    chinese: string
    pinyin: string
    english: string
  }
  category: "Three Caverns" | "Four Supplements" | "Major Text"
  period: string
  classification: {
    tradition: string
    school: string
    lineage: string[]
  }
  content: {
    overview: string
    mainThemes: string[]
    structure: {
      sections: string[]
      organization: string
      format: string
    }
    significance: string[]
    practices: {
      type: string
      description: string
      methods: string[]
    }[]
  }
  transmission: {
    history: {
      period: string
      events: string[]
      significance: string
    }[]
    lineages: {
      name: string
      founders: string[]
      practices: string[]
      texts: string[]
    }[]
    preservation: {
      methods: string[]
      locations: string[]
      challenges: string[]
    }
  }
  manuscripts: {
    earliest: {
      date: string
      location: string
      condition: string
      contents: string
    }
    significant: {
      name: string
      date: string
      location: string
      importance: string
      features: string[]
    }[]
  }
  editions: {
    name: string
    date: string
    compiler: string
    contents: string[]
    location: string
    significance: string
  }[]
  commentary: {
    classical: {
      author: string
      period: string
      work: string
      influence: string[]
    }[]
    modern: {
      scholar: string
      institution: string
      publications: {
        title: string
        year: number
        publisher: string
        significance: string
      }[]
    }[]
  }
  research: {
    institutions: {
      name: string
      location: string
      projects: string[]
      resources: string[]
    }[]
    digitalResources: {
      name: string
      url: string
      description: string
      features: string[]
      access: string
    }[]
    publications: {
      title: string
      author: string
      year: number
      publisher: string
      doi?: string
      abstract: string
    }[]
  }
}

const daoistTexts: DaoistText[] = [
  {
    id: "dao-de-jing",
    title: {
      chinese: "道德經",
      pinyin: "Dào Dé Jīng",
      english: "Classic of the Way and Virtue"
    },
    category: "Major Text",
    period: "c. 4th century BCE",
    classification: {
      tradition: "Philosophical Daoism",
      school: "Laozi tradition",
      lineage: ["Huang-Lao", "Early Daoist"]
    },
    content: {
      overview: "Foundational text of Daoism, attributed to Laozi, exploring the concepts of Dao and De through philosophical poetry and practical wisdom",
      mainThemes: [
        "Nature of the Dao",
        "Virtue and non-action (wu-wei)",
        "Political philosophy",
        "Natural harmony",
        "Simplicity and spontaneity"
      ],
      structure: {
        sections: [
          "Dao Jing (Chapters 1-37)",
          "De Jing (Chapters 38-81)"
        ],
        organization: "81 short chapters of verse",
        format: "Classical Chinese verse with commentary"
      },
      significance: [
        "Foundation of Daoist philosophy",
        "Influence on Chinese culture",
        "Development of Chinese medicine",
        "Impact on East Asian thought"
      ],
      practices: [
        {
          type: "Meditation",
          description: "Contemplative practices based on text principles",
          methods: [
            "Breath cultivation",
            "Empty mind meditation",
            "Nature observation"
          ]
        },
        {
          type: "Governance",
          description: "Political application of Daoist principles",
          methods: [
            "Non-interference leadership",
            "Natural regulation",
            "Minimal governance"
          ]
        }
      ]
    },
    transmission: {
      history: [
        {
          period: "Warring States",
          events: [
            "Initial compilation",
            "Oral transmission",
            "Multiple versions circulation"
          ],
          significance: "Formation of core text"
        },
        {
          period: "Han Dynasty",
          events: [
            "Standard text establishment",
            "Commentary tradition begins",
            "Imperial patronage"
          ],
          significance: "Canonization and standardization"
        }
      ],
      lineages: [
        {
          name: "Huang-Lao tradition",
          founders: ["Huang Di", "Laozi"],
          practices: [
            "Cultivation techniques",
            "Political philosophy",
            "Longevity practices"
          ],
          texts: [
            "Huang Di Nei Jing",
            "Dao De Jing",
            "Huang-Lao boshu"
          ]
        }
      ],
      preservation: {
        methods: [
          "Silk manuscripts",
          "Bamboo slips",
          "Stone inscriptions",
          "Woodblock printing"
        ],
        locations: [
          "Mawangdui tombs",
          "Dunhuang caves",
          "Mount Tai temples"
        ],
        challenges: [
          "Material degradation",
          "Political persecution",
          "Textual variants",
          "Translation difficulties"
        ]
      }
    },
    manuscripts: {
      earliest: {
        date: "168 BCE",
        location: "Mawangdui, Hunan",
        condition: "Well preserved silk manuscript",
        contents: "Complete text with variants"
      },
      significant: [
        {
          name: "Guodian bamboo slips",
          date: "c. 300 BCE",
          location: "Hubei Provincial Museum",
          importance: "Oldest known version",
          features: [
            "Partial text",
            "Early organization",
            "Variant chapters"
          ]
        },
        {
          name: "Wang Bi edition",
          date: "c. 250 CE",
          location: "Multiple copies",
          importance: "Standard received text",
          features: [
            "Complete text",
            "Influential commentary",
            "Traditional chapter order"
          ]
        }
      ]
    },
    editions: [
      {
        name: "Wang Bi Edition",
        date: "c. 250 CE",
        compiler: "Wang Bi",
        contents: [
          "Complete text",
          "Philosophical commentary",
          "Chapter analysis"
        ],
        location: "Multiple repositories",
        significance: "Most influential historical edition"
      },
      {
        name: "Heshanggong Commentary Edition",
        date: "2nd century CE",
        compiler: "Heshanggong",
        contents: [
          "Complete text",
          "Practical commentary",
          "Cultivation methods"
        ],
        location: "Various collections",
        significance: "Important for religious Daoism"
      }
    ],
    commentary: {
      classical: [
        {
          author: "Wang Bi",
          period: "Three Kingdoms",
          work: "Commentary on the Laozi",
          influence: [
            "Philosophical interpretation",
            "Metaphysical analysis",
            "Literary exegesis"
          ]
        }
      ],
      modern: [
        {
          scholar: "D.C. Lau",
          institution: "University of Hong Kong",
          publications: [
            {
              title: "Tao Te Ching: A Bilingual Edition",
              year: 1989,
              publisher: "Chinese University Press",
              significance: "Authoritative modern translation"
            }
          ]
        }
      ]
    },
    research: {
      institutions: [
        {
          name: "Institute of Daoist Studies",
          location: "Sichuan University",
          projects: [
            "Manuscript preservation",
            "Digital text analysis",
            "Translation projects"
          ],
          resources: [
            "Manuscript database",
            "Research publications",
            "Digital archives"
          ]
        }
      ],
      digitalResources: [
        {
          name: "Daoist Studies Database",
          url: "https://daoistudies.org",
          description: "Comprehensive digital resource for Daoist texts",
          features: [
            "Text comparison tools",
            "Manuscript images",
            "Research papers",
            "Translation database"
          ],
          access: "Academic subscription"
        }
      ],
      publications: [
        {
          title: "The Daodejing: A New Critical Translation",
          author: "Hans-Georg Moeller",
          year: 2007,
          publisher: "Open Court",
          doi: "10.1093/acprof:oso/9780199373857.001.0001",
          abstract: "New philological analysis of early manuscripts"
        }
      ]
    }
  }
  // Additional Daoist texts would be added here
]

export default function DaoistCanonPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Daoist Canon (Daozang)</h1>
        <p className="text-xl text-muted-foreground">
          Explore the comprehensive collection of Daoist scriptures and their profound
          influence on Chinese spirituality and culture
        </p>
      </section>

      <Tabs defaultValue={daoistTexts[0].id} className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          {daoistTexts.map((text) => (
            <TabsTrigger key={text.id} value={text.id}>
              {text.title.english}
            </TabsTrigger>
          ))}
        </TabsList>

        {daoistTexts.map((text) => (
          <TabsContent key={text.id} value={text.id} className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="space-y-2">
                    <h2 className="text-2xl">
                      {text.title.english}
                      <span className="text-lg ml-2 text-muted-foreground">
                        {text.title.chinese} ({text.title.pinyin})
                      </span>
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {text.category} • {text.period}
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Overview Section */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Overview</h3>
                  <p>{text.content.overview}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Main Themes</h4>
                      <ul className="list-disc list-inside mt-2">
                        {text.content.mainThemes.map((theme, index) => (
                          <li key={index} className="text-sm">{theme}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Significance</h4>
                      <ul className="list-disc list-inside mt-2">
                        {text.content.significance.map((item, index) => (
                          <li key={index} className="text-sm">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Structure and Practices */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Structure and Practices</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Text Structure</h4>
                      <div className="mt-2 space-y-2">
                        <p className="text-sm">
                          Organization: {text.content.structure.organization}
                        </p>
                        <div>
                          <h5 className="text-sm font-medium">Sections:</h5>
                          <ul className="list-disc list-inside">
                            {text.content.structure.sections.map((section, index) => (
                              <li key={index} className="text-sm">{section}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Practices</h4>
                      {text.content.practices.map((practice) => (
                        <div
                          key={practice.type}
                          className="mt-2 p-4 bg-secondary rounded-lg"
                        >
                          <h5 className="font-medium">{practice.type}</h5>
                          <p className="text-sm">{practice.description}</p>
                          <ul className="list-disc list-inside mt-2">
                            {practice.methods.map((method, index) => (
                              <li key={index} className="text-sm">{method}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Transmission History */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Transmission History</h3>
                  <div className="space-y-4">
                    {text.transmission.history.map((period, index) => (
                      <div key={index} className="p-4 bg-secondary rounded-lg">
                        <h4 className="font-medium">{period.period}</h4>
                        <ul className="list-disc list-inside mt-2">
                          {period.events.map((event, eventIndex) => (
                            <li key={eventIndex} className="text-sm">{event}</li>
                          ))}
                        </ul>
                        <p className="text-sm text-muted-foreground mt-2">
                          {period.significance}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Manuscripts and Editions */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Manuscripts and Editions</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Earliest Manuscript</h4>
                      <div className="mt-2 p-4 bg-secondary rounded-lg">
                        <p className="text-sm">Date: {text.manuscripts.earliest.date}</p>
                        <p className="text-sm">
                          Location: {text.manuscripts.earliest.location}
                        </p>
                        <p className="text-sm">
                          Condition: {text.manuscripts.earliest.condition}
                        </p>
                        <p className="text-sm">
                          Contents: {text.manuscripts.earliest.contents}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Significant Manuscripts</h4>
                      {text.manuscripts.significant.map((manuscript) => (
                        <div
                          key={manuscript.name}
                          className="mt-2 p-4 bg-secondary rounded-lg"
                        >
                          <h5 className="font-medium">{manuscript.name}</h5>
                          <p className="text-sm">Date: {manuscript.date}</p>
                          <p className="text-sm">
                            Location: {manuscript.location}
                          </p>
                          <p className="text-sm">
                            Importance: {manuscript.importance}
                          </p>
                          <ul className="list-disc list-inside mt-2">
                            {manuscript.features.map((feature, index) => (
                              <li key={index} className="text-sm">{feature}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Commentary Tradition */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Commentary Tradition</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Classical Commentary</h4>
                      {text.commentary.classical.map((comment) => (
                        <div
                          key={comment.author}
                          className="mt-2 p-4 bg-secondary rounded-lg"
                        >
                          <h5 className="font-medium">{comment.author}</h5>
                          <p className="text-sm">{comment.period}</p>
                          <p className="text-sm">{comment.work}</p>
                          <ul className="list-disc list-inside mt-2">
                            {comment.influence.map((item, index) => (
                              <li key={index} className="text-sm">{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-medium">Modern Scholarship</h4>
                      {text.commentary.modern.map((scholar) => (
                        <div
                          key={scholar.scholar}
                          className="mt-2 p-4 bg-secondary rounded-lg"
                        >
                          <h5 className="font-medium">{scholar.scholar}</h5>
                          <p className="text-sm">{scholar.institution}</p>
                          {scholar.publications.map((pub) => (
                            <div key={pub.title} className="mt-2">
                              <p className="text-sm font-medium">{pub.title}</p>
                              <p className="text-sm">
                                {pub.publisher}, {pub.year}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {pub.significance}
                              </p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Research Resources */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Research Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Academic Institutions</h4>
                      {text.research.institutions.map((institution) => (
                        <div
                          key={institution.name}
                          className="mt-2 p-4 bg-secondary rounded-lg"
                        >
                          <h5 className="font-medium">{institution.name}</h5>
                          <p className="text-sm">{institution.location}</p>
                          <div className="mt-2">
                            <h6 className="text-sm font-medium">Projects:</h6>
                            <ul className="list-disc list-inside">
                              {institution.projects.map((project, index) => (
                                <li key={index} className="text-sm">{project}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-medium">Digital Resources</h4>
                      {text.research.digitalResources.map((resource) => (
                        <div
                          key={resource.name}
                          className="mt-2 p-4 bg-secondary rounded-lg"
                        >
                          <h5 className="font-medium">{resource.name}</h5>
                          <p className="text-sm">{resource.description}</p>
                          <ul className="list-disc list-inside mt-2">
                            {resource.features.map((feature, index) => (
                              <li key={index} className="text-sm">{feature}</li>
                            ))}
                          </ul>
                          <a
                            href={resource.url}
                            className="text-primary hover:underline text-sm block mt-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Access Resource
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
} 