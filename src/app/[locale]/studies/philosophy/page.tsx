import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Philosophy & Sacred Wisdom | Comprehensive Analysis",
  description: "Explore religious philosophical traditions, metaphysical systems, epistemology, and ethics across world religions. In-depth analysis of theological concepts and contemporary interpretations.",
  openGraph: {
    title: "Religious Philosophy & Sacred Wisdom",
    description: "Comprehensive analysis of religious philosophical traditions, metaphysical systems, and contemporary interpretations.",
    type: "website",
    images: [{ url: "/images/og/religious-philosophy.jpg" }]
  },
  keywords: [
    "religious philosophy",
    "theological concepts",
    "metaphysical systems",
    "religious epistemology",
    "sacred wisdom",
    "comparative philosophy",
    "philosophical theology",
    "religious ethics",
    "mystical philosophy",
    "contemporary theology"
  ]
}

const philosophicalTraditions = [
  {
    tradition: "Buddhist Philosophy",
    overview: "Systematic analysis of reality, mind, and liberation",
    schools: [
      {
        name: "Madhyamaka (Middle Way)",
        description: "Philosophy of emptiness and dependent origination",
        concepts: [
          {
            name: "Śūnyatā (Emptiness)",
            explanation: "The absence of inherent existence in all phenomena",
            principles: [
              "Dependent origination",
              "Conventional vs ultimate truth",
              "Non-dual understanding",
              "Freedom from extremes"
            ],
            implications: "Leads to liberation from conceptual proliferation and attachment"
          },
          {
            name: "Two Truths",
            explanation: "Framework of conventional and ultimate reality",
            principles: [
              "Conventional truth (vyavahāra-satya)",
              "Ultimate truth (paramārtha-satya)",
              "Their inseparability",
              "Skillful means"
            ],
            implications: "Reconciles everyday experience with ultimate reality"
          }
        ],
        resources: [
          {
            title: "The Fundamental Wisdom of the Middle Way",
            link: "https://www.amazon.com/Fundamental-Wisdom-Middle-Way-Mulamadhyamakakarika/dp/0195093364?tag=zion0ba-20",
            description: "Nāgārjuna's foundational text with commentary"
          },
          {
            title: "Introduction to the Middle Way",
            link: "https://www.amazon.com/Introduction-Middle-Way-Chandrakirtis-Madhyamakavatara/dp/1590304098?tag=zion0ba-20",
            description: "Comprehensive guide to Madhyamaka thought"
          }
        ]
      },
      {
        name: "Yogācāra (Mind-Only)",
        description: "Analysis of consciousness and experience",
        concepts: [
          {
            name: "Eight Consciousnesses",
            explanation: "Detailed model of mind and awareness",
            principles: [
              "Store consciousness (ālaya-vijñāna)",
              "Afflicted mind (kliṣṭa-manas)",
              "Six sense consciousnesses",
              "Transformation of consciousness"
            ],
            implications: "Framework for understanding mind and transformation"
          },
          {
            name: "Three Natures",
            explanation: "Analysis of how reality appears and exists",
            principles: [
              "Imagined nature",
              "Dependent nature",
              "Perfected nature",
              "Non-dual wisdom"
            ],
            implications: "Path from delusion to awakening"
          }
        ],
        resources: [
          {
            title: "Buddhist Philosophy of Mind",
            link: "https://www.amazon.com/Buddhist-Philosophy-Mind-Experiential-Psychology/dp/1614294739?tag=zion0ba-20",
            description: "Contemporary analysis of Yogācāra"
          }
        ]
      }
    ]
  },
  {
    tradition: "Islamic Philosophy",
    overview: "Integration of Greek philosophy with Islamic revelation",
    schools: [
      {
        name: "Falsafa",
        description: "Rational philosophical tradition in Islam",
        concepts: [
          {
            name: "Divine Intellect",
            explanation: "Theory of emanation and intellectual hierarchy",
            principles: [
              "First Intellect",
              "Universal Intelligence",
              "Active Intellect",
              "Human Reason"
            ],
            implications: "Bridge between divine and human understanding"
          },
          {
            name: "Existence and Essence",
            explanation: "Analysis of being and quiddity",
            principles: [
              "Necessary vs possible existence",
              "Unity of existence",
              "Gradation of being",
              "Divine simplicity"
            ],
            implications: "Framework for understanding God and creation"
          }
        ],
        resources: [
          {
            title: "Classical Islamic Philosophy",
            link: "https://www.amazon.com/Classical-Islamic-Philosophy-Introduction/dp/0415312531?tag=zion0ba-20",
            description: "Comprehensive introduction to Islamic philosophy"
          }
        ]
      }
    ]
  }
]

const philosophicalThemes = [
  {
    category: "Metaphysics",
    description: "Study of ultimate reality and existence",
    themes: [
      {
        name: "Divine Nature",
        aspects: [
          "Transcendence vs immanence",
          "Unity and multiplicity",
          "Personal vs impersonal",
          "Attributes and essence"
        ],
        approaches: [
          "Negative theology",
          "Analogical predication",
          "Mystical insight",
          "Rational analysis"
        ]
      },
      {
        name: "Reality and Illusion",
        aspects: [
          "Levels of reality",
          "Appearance vs truth",
          "Consciousness and world",
          "Time and eternity"
        ],
        approaches: [
          "Phenomenological analysis",
          "Contemplative insight",
          "Logical investigation",
          "Experiential verification"
        ]
      }
    ],
    resources: [
  {
        title: "Religious Metaphysics",
        link: "https://www.amazon.com/Introduction-Religious-Metaphysics/dp/0567693953?tag=zion0ba-20",
        description: "Contemporary analysis of religious metaphysics"
      }
    ]
  },
  {
    category: "Epistemology",
    description: "Theory of knowledge and understanding",
    themes: [
      {
        name: "Sacred Knowledge",
        aspects: [
          "Revelation vs reason",
          "Intuitive wisdom",
          "Transmitted knowledge",
          "Direct realization"
        ],
        approaches: [
          "Scriptural study",
          "Rational inquiry",
          "Meditative insight",
          "Traditional transmission"
        ]
      },
      {
        name: "Limits of Understanding",
        aspects: [
          "Human vs divine knowledge",
          "Ineffable truth",
          "Conceptual boundaries",
          "Experiential knowing"
        ],
        approaches: [
          "Critical analysis",
          "Mystical approaches",
          "Comparative study",
          "Practical verification"
        ]
      }
    ],
    resources: [
  {
        title: "Religious Epistemology",
        link: "https://www.amazon.com/Religious-Epistemology-Cambridge-Elements-Philosophy/dp/1108745323?tag=zion0ba-20",
        description: "Analysis of religious knowledge"
      }
    ]
  }
]

const contemporaryApproaches = [
  {
    area: "Comparative Philosophy",
    description: "Cross-cultural philosophical analysis",
    approaches: [
      {
        name: "Methodological Issues",
        elements: [
          "Translation problems",
          "Conceptual frameworks",
          "Cultural context",
          "Hermeneutic principles"
        ],
        applications: [
          "Textual analysis",
          "Conceptual mapping",
          "Dialogue facilitation",
          "Synthesis development"
        ]
      },
      {
        name: "Thematic Analysis",
        elements: [
          "Common themes",
          "Unique perspectives",
          "Complementary insights",
          "Critical differences"
        ],
        applications: [
          "Comparative studies",
          "Interfaith dialogue",
          "Academic research",
          "Contemporary relevance"
        ]
      }
    ],
    resources: [
  {
        title: "Comparative Religious Ideas",
        link: "https://www.amazon.com/Comparative-Religious-Ideas-Project-Three/dp/0791447995?tag=zion0ba-20",
        description: "Analysis of comparative methodology"
      }
    ]
  },
  {
    area: "Contemporary Integration",
    description: "Modern synthesis and application",
    approaches: [
      {
        name: "Science Dialogue",
        elements: [
          "Cognitive science",
          "Quantum physics",
          "Evolutionary theory",
          "Consciousness studies"
        ],
        applications: [
          "Research programs",
          "Theoretical models",
          "Empirical studies",
          "Practical applications"
        ]
      },
      {
        name: "Social Engagement",
        elements: [
          "Environmental ethics",
          "Social justice",
          "Bioethics",
          "Technology ethics"
        ],
        applications: [
          "Policy development",
          "Ethical frameworks",
          "Practical guidance",
          "Public discourse"
        ]
      }
    ],
    resources: [
      {
        title: "Religion and Science",
        link: "https://www.amazon.com/Religion-Science-Historical-Contemporary-Issues/dp/0334029112?tag=zion0ba-20",
        description: "Analysis of religion-science dialogue"
      }
    ]
  }
]

export default function ReligiousPhilosophyPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Religious Philosophy & Sacred Wisdom</h1>
          <p className="text-xl text-muted-foreground">
            Explore philosophical traditions, metaphysical systems, and contemporary interpretations across religions
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Philosophical Traditions</TabsTrigger>
            <TabsTrigger value="themes">Key Themes</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {philosophicalTraditions.map((tradition) => (
                <Card key={tradition.tradition}>
                  <CardHeader>
                    <CardTitle>{tradition.tradition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{tradition.overview}</p>

                      {tradition.schools.map((school) => (
                        <div key={school.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{school.name}</h3>
                          <p className="text-muted-foreground">{school.description}</p>
        
                          <div className="grid gap-4 md:grid-cols-2">
                            {school.concepts.map((concept) => (
                              <div key={concept.name} className="space-y-2">
                                <h4 className="font-semibold">{concept.name}</h4>
                                <p className="text-sm text-muted-foreground">{concept.explanation}</p>
                                <div>
                                  <h5 className="text-sm font-medium">Key Principles:</h5>
                                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                                    {concept.principles.map((principle) => (
                                      <li key={principle}>{principle}</li>
                                    ))}
                                  </ul>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  <span className="font-medium">Implications:</span> {concept.implications}
                                </p>
                              </div>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Study Resources:</h4>
                            {school.resources.map((resource) => (
                              <div key={resource.title} className="space-y-1">
                                <a
                                  href={resource.link}
                                  className="block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {resource.title}
                                </a>
                                <p className="text-sm text-muted-foreground text-center">{resource.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="themes" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {philosophicalThemes.map((theme) => (
                <Card key={theme.category}>
                  <CardHeader>
                    <CardTitle>{theme.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{theme.description}</p>

                      {theme.themes.map((t) => (
                        <div key={t.name} className="space-y-2">
                          <h4 className="font-semibold">{t.name}</h4>
                          <div>
                            <h5 className="text-sm font-medium">Key Aspects:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {t.aspects.map((aspect) => (
                                <li key={aspect}>{aspect}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Approaches:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {t.approaches.map((approach) => (
                                <li key={approach}>{approach}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {theme.resources.map((resource) => (
                          <div key={resource.title} className="space-y-1">
                            <a
                              href={resource.link}
                              className="block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {resource.title}
                            </a>
                            <p className="text-sm text-muted-foreground text-center">{resource.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contemporary" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contemporaryApproaches.map((approach) => (
                <Card key={approach.area}>
                  <CardHeader>
                    <CardTitle>{approach.area}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{approach.description}</p>

                      {approach.approaches.map((a) => (
                        <div key={a.name} className="space-y-2">
                          <h4 className="font-semibold">{a.name}</h4>
                          <div>
                            <h5 className="text-sm font-medium">Elements:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {a.elements.map((element) => (
                                <li key={element}>{element}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Applications:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {a.applications.map((application) => (
                                <li key={application}>{application}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {approach.resources.map((resource) => (
                          <div key={resource.title} className="space-y-1">
                            <a
                              href={resource.link}
                              className="block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {resource.title}
                            </a>
                            <p className="text-sm text-muted-foreground text-center">{resource.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
            </Card>
          ))}
        </div>
          </TabsContent>
        </Tabs>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/studies/philosophy/metaphysics"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Metaphysical Systems →
            </Link>
            <Link 
              href="/studies/philosophy/epistemology"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Epistemology →
            </Link>
            <Link 
              href="/studies/philosophy/ethics"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Moral Philosophy →
            </Link>
            <Link 
              href="/studies/philosophy/mysticism"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Mystical Philosophy →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 