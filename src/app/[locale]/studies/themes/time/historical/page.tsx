import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Historical Time | Sacred History & Chronology",
  description: "Explore religious conceptions of historical time, sacred history, chronology, and temporal understanding across world religions. Analysis of historical consciousness in religious traditions.",
  openGraph: {
    title: "Religious Historical Time & Sacred History",
    description: "Comprehensive analysis of historical time, sacred history, and chronology in religious traditions.",
    type: "website",
    images: [{ url: "/images/og/religious-history.jpg" }]
  },
  keywords: [
    "religious history",
    "sacred time",
    "historical consciousness",
    "religious chronology",
    "sacred history",
    "temporal understanding",
    "religious historiography",
    "mythological time",
    "historical interpretation",
    "religious periodization"
  ]
}

interface HistoricalConcept {
  tradition: string
  overview: string
  concepts: {
    name: string
    description: string
    elements: string[]
    implications: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const historicalConcepts: HistoricalConcept[] = [
  {
    tradition: "Abrahamic Traditions",
    overview: "Linear progression from creation to eschaton",
    concepts: [
      {
        name: "Sacred History",
        description: "Divine action in human events",
        elements: [
          "Creation and fall",
          "Covenantal history",
          "Prophetic interventions",
          "Messianic expectations"
        ],
        implications: [
          "Purposeful historical direction",
          "Divine providence in events",
          "Moral lessons from history",
          "Future hope and redemption"
        ]
      },
      {
        name: "Periodization",
        description: "Division of time into meaningful epochs",
        elements: [
          "Ages of revelation",
          "Dispensations",
          "Prophetic eras",
          "Millennial periods"
        ],
        implications: [
          "Progressive revelation",
          "Historical patterns",
          "Interpretative framework",
          "Eschatological meaning"
        ]
      }
    ],
    resources: [
      {
        title: "Time and History in Abrahamic Faiths",
        link: "https://www.amazon.com/Time-Abrahamic-Faiths-Religious-Perspectives/dp/1138245682?tag=zion0ba-20",
        description: "Analysis of historical consciousness in Abrahamic traditions"
      }
    ]
  },
  {
    tradition: "Dharmic Traditions",
    overview: "Cyclical time with embedded linearity",
    concepts: [
      {
        name: "Cosmic Cycles",
        description: "Nested cycles of temporal existence",
        elements: [
          "Yugas (World Ages)",
          "Kalpas (Cosmic Days)",
          "Manvantaras (Manu Cycles)",
          "Historical periods"
        ],
        implications: [
          "Recurring patterns",
          "Moral decline and renewal",
          "Multiple time scales",
          "Eternal recurrence"
        ]
      },
      {
        name: "Historical Consciousness",
        description: "Understanding of temporal progression",
        elements: [
          "Dynastic histories",
          "Teacher lineages",
          "Temple chronicles",
          "Sacred biographies"
        ],
        implications: [
          "Transmission of tradition",
          "Legitimacy through history",
          "Cultural memory",
          "Spiritual genealogy"
        ]
      }
    ],
    resources: [
      {
        title: "Time in Indian Philosophy",
        link: "https://www.amazon.com/Time-Indian-Philosophy-Tradition-Modernity/dp/1138087645?tag=zion0ba-20",
        description: "Analysis of temporal concepts in Indian thought"
      }
    ]
  }
]

interface HistoricalMethod {
  category: string
  description: string
  methods: {
    name: string
    elements: string[]
    applications: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const historicalMethods: HistoricalMethod[] = [
  {
    category: "Traditional Methods",
    description: "Classical approaches to religious history",
    methods: [
      {
        name: "Textual Transmission",
        elements: [
          "Manuscript traditions",
          "Oral histories",
          "Genealogical records",
          "Commentary traditions"
        ],
        applications: [
          "Establishing chronology",
          "Preserving teachings",
          "Tracing developments",
          "Validating authority"
        ]
      },
      {
        name: "Sacred Geography",
        elements: [
          "Holy sites",
          "Pilgrimage routes",
          "Sacred landscapes",
          "Historical monuments"
        ],
        applications: [
          "Spatial memory",
          "Historical continuity",
          "Cultural preservation",
          "Religious identity"
        ]
      }
    ],
    resources: [
      {
        title: "Religious Historiography",
        link: "https://www.amazon.com/Religious-Historiography-Writing-History-Traditions/dp/1441177988?tag=zion0ba-20",
        description: "Analysis of traditional historical methods"
      }
    ]
  },
  {
    category: "Modern Approaches",
    description: "Contemporary methods of studying religious history",
    methods: [
      {
        name: "Critical Methods",
        elements: [
          "Historical criticism",
          "Archaeological evidence",
          "Comparative analysis",
          "Social context"
        ],
        applications: [
          "Dating events",
          "Verifying accounts",
          "Understanding development",
          "Cultural analysis"
        ]
      },
      {
        name: "Digital Humanities",
        elements: [
          "Database analysis",
          "Digital archives",
          "Network analysis",
          "Visualization tools"
        ],
        applications: [
          "Pattern recognition",
          "Data preservation",
          "Relationship mapping",
          "Knowledge sharing"
        ]
      }
    ],
    resources: [
      {
        title: "Digital Religious History",
        link: "https://www.amazon.com/Digital-Religious-Studies-Methods-Analysis/dp/1138307955?tag=zion0ba-20",
        description: "Guide to modern historical methods"
      }
    ]
  }
]

interface TemporalInterpretation {
  category: string
  description: string
  aspects: {
    name: string
    elements: string[]
    implications: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const temporalInterpretations: TemporalInterpretation[] = [
  {
    category: "Mythological Time",
    description: "Sacred narratives and temporal understanding",
    aspects: [
      {
        name: "Origin Stories",
        elements: [
          "Creation myths",
          "Foundation narratives",
          "Cultural origins",
          "Sacred beginnings"
        ],
        implications: [
          "Identity formation",
          "Worldview structure",
          "Moral framework",
          "Cultural continuity"
        ]
      },
      {
        name: "Heroic Ages",
        elements: [
          "Golden ages",
          "Ancestral times",
          "Age of miracles",
          "Foundational periods"
        ],
        implications: [
          "Ideal models",
          "Spiritual authority",
          "Traditional values",
          "Cultural inspiration"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Time and Myth",
        link: "https://www.amazon.com/Sacred-Time-Myth-Religious-Experience/dp/0520285468?tag=zion0ba-20",
        description: "Analysis of mythological time concepts"
      }
    ]
  },
  {
    category: "Contemporary Integration",
    description: "Modern understanding of religious history",
    aspects: [
      {
        name: "Scientific Dialogue",
        elements: [
          "Archaeological findings",
          "Historical dating",
          "Evolutionary theory",
          "Cosmological time"
        ],
        implications: [
          "Interpretative challenges",
          "Synthesis attempts",
          "Theological adaptation",
          "Modern relevance"
        ]
      },
      {
        name: "Cultural Memory",
        elements: [
          "Communal narratives",
          "Ritual remembrance",
          "Traditional practices",
          "Identity formation"
        ],
        implications: [
          "Contemporary meaning",
          "Adaptive interpretation",
          "Community cohesion",
          "Living tradition"
        ]
      }
    ],
    resources: [
      {
        title: "Religion and Historical Science",
        link: "https://www.amazon.com/Religion-Historical-Science-Contemporary-Perspectives/dp/0800698347?tag=zion0ba-20",
        description: "Analysis of religion-science dialogue"
      }
    ]
  }
]

export default function ReligiousHistoricalTimePage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Religious Historical Time</h1>
          <p className="text-xl text-muted-foreground">
            Explore religious conceptions of historical time, sacred history, and temporal understanding across traditions
          </p>
        </section>

        <Tabs defaultValue="concepts" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="concepts">Historical Concepts</TabsTrigger>
            <TabsTrigger value="methods">Historical Methods</TabsTrigger>
            <TabsTrigger value="interpretations">Temporal Interpretations</TabsTrigger>
          </TabsList>

          <TabsContent value="concepts" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {historicalConcepts.map((tradition) => (
                <Card key={tradition.tradition}>
                  <CardHeader>
                    <CardTitle>{tradition.tradition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{tradition.overview}</p>

                      {tradition.concepts.map((concept) => (
                        <div key={concept.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{concept.name}</h3>
                          <p className="text-muted-foreground">{concept.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Elements</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {concept.elements.map((element) => (
                                  <li key={element}>{element}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Implications</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {concept.implications.map((implication) => (
                                  <li key={implication}>{implication}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Study Resources:</h4>
                        {tradition.resources.map((resource) => (
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

          <TabsContent value="methods" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {historicalMethods.map((category) => (
                <Card key={category.category}>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{category.description}</p>

                      {category.methods.map((method) => (
                        <div key={method.name} className="space-y-2">
                          <h4 className="font-semibold">{method.name}</h4>
                          <div>
                            <h5 className="text-sm font-medium">Elements:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {method.elements.map((element) => (
                                <li key={element}>{element}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Applications:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {method.applications.map((application) => (
                                <li key={application}>{application}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {category.resources.map((resource) => (
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

          <TabsContent value="interpretations" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {temporalInterpretations.map((category) => (
                <Card key={category.category}>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{category.description}</p>

                      {category.aspects.map((aspect) => (
                        <div key={aspect.name} className="space-y-2">
                          <h4 className="font-semibold">{aspect.name}</h4>
                          <div>
                            <h5 className="text-sm font-medium">Elements:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {aspect.elements.map((element) => (
                                <li key={element}>{element}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Implications:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {aspect.implications.map((implication) => (
                                <li key={implication}>{implication}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {category.resources.map((resource) => (
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
              href="/studies/themes/time/calendars"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Calendars →
            </Link>
            <Link 
              href="/studies/themes/time/eternity"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Eternity →
            </Link>
            <Link 
              href="/studies/themes/time/eschatology"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Eschatology →
            </Link>
            <Link 
              href="/studies/practices/rituals"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Rituals →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 