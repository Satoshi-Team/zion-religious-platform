import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Sri Guru Granth Sahib | Sacred Scripture of Sikhism",
  description: "Comprehensive guide to the Sri Guru Granth Sahib, including its compilation, structure, musical measures (Raags), and significance in Sikh faith and practice.",
  keywords: [
    "Guru Granth Sahib",
    "Sikh scripture",
    "Gurbani",
    "Sikh holy book",
    "Adi Granth",
    "Sikh raags",
    "Sikh prayers",
    "Sikh literature",
    "Punjabi scripture",
    "Sikh theology"
  ],
  openGraph: {
    title: "Sri Guru Granth Sahib - Sacred Scripture of Sikhism",
    description: "Explore the eternal Guru of the Sikhs and its profound spiritual teachings",
    images: [
      {
        url: "/images/guru-granth-sahib-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Guru Granth Sahib"
      }
    ]
  }
}

interface SikhScripture {
  id: string
  title: {
    gurmukhi: string
    transliteration: string
    english: string
  }
  category: "Primary Scripture" | "Secondary Scripture"
  compilation: {
    period: string
    compiler: string
    location: string
    process: string[]
  }
  content: {
    overview: string
    structure: {
      sections: {
        name: string
        description: string
        contents: string[]
      }[]
      raags: {
        name: string
        compositions: number
        significance: string
      }[]
      languages: string[]
      totalPages: number
    }
    contributors: {
      gurus: {
        name: string
        contributions: number
        significance: string[]
      }[]
      bhagats: {
        name: string
        period: string
        compositions: number
        significance: string
      }[]
    }
    themes: {
      category: string
      topics: string[]
      significance: string
    }[]
  }
  practices: {
    recitation: {
      methods: string[]
      timing: string[]
      significance: string
    }
    musical: {
      traditions: string[]
      instruments: string[]
      styles: string[]
    }
    protocol: {
      handling: string[]
      environment: string[]
      respect: string[]
    }
  }
  preservation: {
    historical: {
      period: string
      events: string[]
      significance: string
    }[]
    modern: {
      methods: string[]
      institutions: {
        name: string
        location: string
        role: string
      }[]
      challenges: string[]
    }
  }
  research: {
    academic: {
      institutions: {
        name: string
        location: string
        programs: string[]
        resources: string[]
      }[]
      scholars: {
        name: string
        affiliation: string
        contributions: string[]
        publications: {
          title: string
          year: number
          publisher: string
          significance: string
        }[]
      }[]
    }
    digitalResources: {
      name: string
      url: string
      features: string[]
      access: string
      languages: string[]
    }[]
    translations: {
      language: string
      translator: string
      year: number
      publisher: string
      features: string[]
      accessibility: string
    }[]
  }
}

const sikhScriptures: SikhScripture[] = [
  {
    id: "guru-granth-sahib",
    title: {
      gurmukhi: "ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ",
      transliteration: "Sri Guru Granth Sahib",
      english: "The Eternal Guru"
    },
    category: "Primary Scripture",
    compilation: {
      period: "1603-1604 CE (First compilation as Adi Granth)",
      compiler: "Guru Arjan Dev Ji",
      location: "Harmandir Sahib, Amritsar",
      process: [
        "Collection of compositions from previous Gurus",
        "Addition of devotional poetry from Hindu and Muslim saints",
        "Organization into Raags",
        "Standardization of script and language",
        "Final compilation by Guru Gobind Singh Ji in 1705"
      ]
    },
    content: {
      overview: "The eternal living Guru of the Sikhs, containing divine revelations, spiritual wisdom, and devotional poetry organized in a unique musical framework",
      structure: {
        sections: [
          {
            name: "Japji Sahib",
            description: "Morning prayer composed by Guru Nanak Dev Ji",
            contents: [
              "Mool Mantar",
              "38 Pauris",
              "Salok"
            ]
          },
          {
            name: "Raag Section",
            description: "Main body organized in 31 classical raags",
            contents: [
              "Shabads (Hymns)",
              "Ashtapadis",
              "Chhants",
              "Vars"
            ]
          }
        ],
        raags: [
          {
            name: "Sri Raag",
            compositions: 142,
            significance: "First musical measure in SGGS"
          },
          {
            name: "Asa",
            compositions: 157,
            significance: "Contains morning prayers including Asa Ki Var"
          }
        ],
        languages: [
          "Gurmukhi",
          "Sanskrit",
          "Persian",
          "Braj Bhasha",
          "Punjabi",
          "Sindhi"
        ],
        totalPages: 1430
      },
      contributors: {
        gurus: [
          {
            name: "Guru Nanak Dev Ji",
            contributions: 974,
            significance: [
              "Founder of Sikhism",
              "Established fundamental principles",
              "Composed Japji Sahib"
            ]
          },
          {
            name: "Guru Arjan Dev Ji",
            contributions: 2218,
            significance: [
              "First compiler",
              "Largest contributor",
              "Established scriptural authority"
            ]
          }
        ],
        bhagats: [
          {
            name: "Bhagat Kabir",
            period: "15th century CE",
            compositions: 541,
            significance: "Major contributor emphasizing social equality"
          }
        ]
      },
      themes: [
        {
          category: "Spiritual",
          topics: [
            "Divine Nature",
            "Human-Divine Relationship",
            "Path to Liberation",
            "Meditation on Name"
          ],
          significance: "Core theological concepts"
        },
        {
          category: "Social",
          topics: [
            "Equality",
            "Social Justice",
            "Ethical Living",
            "Community Service"
          ],
          significance: "Practical guidance for life"
        }
      ]
    },
    practices: {
      recitation: {
        methods: [
          "Akhand Path (Continuous reading)",
          "Sehaj Path (Leisurely reading)",
          "Nitnem (Daily prayers)"
        ],
        timing: [
          "Amrit Vela (Early morning)",
          "Daily services",
          "Special occasions"
        ],
        significance: "Spiritual connection and guidance"
      },
      musical: {
        traditions: [
          "Kirtan",
          "Shabad Gurbani",
          "Classical Raag"
        ],
        instruments: [
          "Harmonium",
          "Tabla",
          "Taus",
          "Rabab"
        ],
        styles: [
          "Traditional Gurmat Sangeet",
          "Classical renditions",
          "Contemporary interpretations"
        ]
      },
      protocol: {
        handling: [
          "Covered head",
          "Washed hands",
          "Elevated placement",
          "Chaur service"
        ],
        environment: [
          "Clean surroundings",
          "Respectful atmosphere",
          "Proper seating arrangement"
        ],
        respect: [
          "No turning back",
          "Standing during transportation",
          "Regular seva (service)"
        ]
      }
    },
    preservation: {
      historical: [
        {
          period: "17th Century",
          events: [
            "Original compilation",
            "Multiple handwritten copies",
            "Establishment of Takhts"
          ],
          significance: "Foundation of textual tradition"
        },
        {
          period: "18th Century",
          events: [
            "Protection during persecution",
            "Establishment of scriptural authority",
            "Development of protocol"
          ],
          significance: "Preservation through challenges"
        }
      ],
      modern: {
        methods: [
          "Digital preservation",
          "Climate-controlled storage",
          "Professional conservation"
        ],
        institutions: [
          {
            name: "Shiromani Gurdwara Parbandhak Committee",
            location: "Amritsar, Punjab",
            role: "Official custodian and publisher"
          }
        ],
        challenges: [
          "Maintaining authenticity",
          "Conservation of historic copies",
          "Digital preservation standards"
        ]
      }
    },
    research: {
      academic: {
        institutions: [
          {
            name: "Guru Nanak Dev University",
            location: "Amritsar, Punjab",
            programs: [
              "Guru Granth Sahib Studies",
              "Sikh Studies",
              "Manuscript Research"
            ],
            resources: [
              "Manuscript collection",
              "Research publications",
              "Digital archives"
            ]
          }
        ],
        scholars: [
          {
            name: "Dr. Pashaura Singh",
            affiliation: "University of California, Riverside",
            contributions: [
              "Textual analysis",
              "Historical research",
              "Translation studies"
            ],
            publications: [
              {
                title: "The Guru Granth Sahib: Canon, Meaning and Authority",
                year: 2000,
                publisher: "Oxford University Press",
                significance: "Comprehensive academic study"
              }
            ]
          }
        ]
      },
      digitalResources: [
        {
          name: "SikhiToTheMax",
          url: "https://www.sikhitothemax.org",
          features: [
            "Search functionality",
            "Multiple translations",
            "Audio recordings",
            "Mobile accessibility"
          ],
          access: "Free",
          languages: [
            "Gurmukhi",
            "English",
            "Punjabi",
            "Spanish"
          ]
        }
      ],
      translations: [
        {
          language: "English",
          translator: "Dr. Sant Singh Khalsa",
          year: 1994,
          publisher: "Hand Made Books",
          features: [
            "Complete translation",
            "Transliteration",
            "Digital version available"
          ],
          accessibility: "Free online access"
        }
      ]
    }
  }
]

export default function SikhScripturesPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Sri Guru Granth Sahib</h1>
        <p className="text-xl text-muted-foreground">
          Explore the eternal Guru of the Sikhs and its profound spiritual teachings
        </p>
      </section>

      <Tabs defaultValue={sikhScriptures[0].id} className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          {sikhScriptures.map((scripture) => (
            <TabsTrigger key={scripture.id} value={scripture.id}>
              {scripture.title.english}
            </TabsTrigger>
          ))}
        </TabsList>

        {sikhScriptures.map((scripture) => (
          <TabsContent key={scripture.id} value={scripture.id} className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="space-y-2">
                    <h2 className="text-2xl">
                      {scripture.title.english}
                      <span className="text-lg ml-2 text-muted-foreground">
                        {scripture.title.gurmukhi}
                      </span>
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {scripture.category}
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Compilation History */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Compilation History</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="text-sm">Period: {scripture.compilation.period}</p>
                      <p className="text-sm">Compiler: {scripture.compilation.compiler}</p>
                      <p className="text-sm">Location: {scripture.compilation.location}</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Compilation Process</h4>
                      <ul className="list-disc list-inside mt-2">
                        {scripture.compilation.process.map((step, index) => (
                          <li key={index} className="text-sm">{step}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Structure and Content */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Structure and Content</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Sections</h4>
                      {scripture.content.structure.sections.map((section) => (
                        <div
                          key={section.name}
                          className="mt-2 p-4 bg-secondary rounded-lg"
                        >
                          <h5 className="font-medium">{section.name}</h5>
                          <p className="text-sm">{section.description}</p>
                          <ul className="list-disc list-inside mt-2">
                            {section.contents.map((content, index) => (
                              <li key={index} className="text-sm">{content}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-medium">Musical Framework (Raags)</h4>
                      {scripture.content.structure.raags.map((raag) => (
                        <div
                          key={raag.name}
                          className="mt-2 p-4 bg-secondary rounded-lg"
                        >
                          <h5 className="font-medium">{raag.name}</h5>
                          <p className="text-sm">
                            Compositions: {raag.compositions}
                          </p>
                          <p className="text-sm">{raag.significance}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Contributors */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Contributors</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Sikh Gurus</h4>
                      {scripture.content.contributors.gurus.map((guru) => (
                        <div
                          key={guru.name}
                          className="mt-2 p-4 bg-secondary rounded-lg"
                        >
                          <h5 className="font-medium">{guru.name}</h5>
                          <p className="text-sm">
                            Contributions: {guru.contributions}
                          </p>
                          <ul className="list-disc list-inside mt-2">
                            {guru.significance.map((sig, index) => (
                              <li key={index} className="text-sm">{sig}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-medium">Bhagats</h4>
                      {scripture.content.contributors.bhagats.map((bhagat) => (
                        <div
                          key={bhagat.name}
                          className="mt-2 p-4 bg-secondary rounded-lg"
                        >
                          <h5 className="font-medium">{bhagat.name}</h5>
                          <p className="text-sm">Period: {bhagat.period}</p>
                          <p className="text-sm">
                            Compositions: {bhagat.compositions}
                          </p>
                          <p className="text-sm">{bhagat.significance}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Practices */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Practices and Protocol</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium">Recitation</h4>
                      <div className="mt-2 p-4 bg-secondary rounded-lg">
                        <h5 className="font-medium">Methods</h5>
                        <ul className="list-disc list-inside mt-2">
                          {scripture.practices.recitation.methods.map((method, index) => (
                            <li key={index} className="text-sm">{method}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Musical Traditions</h4>
                      <div className="mt-2 p-4 bg-secondary rounded-lg">
                        <ul className="list-disc list-inside">
                          {scripture.practices.musical.traditions.map((tradition, index) => (
                            <li key={index} className="text-sm">{tradition}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Protocol</h4>
                      <div className="mt-2 p-4 bg-secondary rounded-lg">
                        <ul className="list-disc list-inside">
                          {scripture.practices.protocol.handling.map((protocol, index) => (
                            <li key={index} className="text-sm">{protocol}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Research and Resources */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Research and Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Academic Research</h4>
                      {scripture.research.academic.institutions.map((institution) => (
                        <div
                          key={institution.name}
                          className="mt-2 p-4 bg-secondary rounded-lg"
                        >
                          <h5 className="font-medium">{institution.name}</h5>
                          <p className="text-sm">{institution.location}</p>
                          <div className="mt-2">
                            <h6 className="text-sm font-medium">Programs:</h6>
                            <ul className="list-disc list-inside">
                              {institution.programs.map((program, index) => (
                                <li key={index} className="text-sm">{program}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-medium">Digital Resources</h4>
                      {scripture.research.digitalResources.map((resource) => (
                        <div
                          key={resource.name}
                          className="mt-2 p-4 bg-secondary rounded-lg"
                        >
                          <h5 className="font-medium">{resource.name}</h5>
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