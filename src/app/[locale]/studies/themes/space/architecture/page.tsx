import React from 'react'
import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Architecture & Sacred Spaces | Sacred Studies",
  description: "Explore religious architecture, sacred spaces, and temple design across world traditions. In-depth analysis of architectural symbolism, sacred geometry, and ritual spaces.",
  openGraph: {
    title: "Religious Architecture & Sacred Spaces",
    description: "Comprehensive guide to religious architecture and sacred spaces across traditions.",
    type: "website",
    images: [{ url: "/images/og/religious-architecture.jpg" }]
  },
  keywords: [
    "religious architecture",
    "sacred spaces",
    "temple design",
    "sacred geometry",
    "ritual spaces",
    "religious buildings",
    "sacred architecture",
    "worship spaces",
    "architectural symbolism",
    "religious symbolism"
  ]
}

interface ArchitecturalTradition {
  tradition: string
  overview: string
  elements: {
    name: string
    description: string
    features: string[]
    symbolism: string[]
  }[]
  spaces: {
    name: string
    description: string
    characteristics: string[]
    functions: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const architecturalTraditions: ArchitecturalTradition[] = [
  {
    tradition: "Sacred Temple Architecture",
    overview: "Design principles and symbolic elements of religious temples",
    elements: [
      {
        name: "Sacred Geometry",
        description: "Mathematical and geometric principles in religious architecture",
        features: [
          "Golden ratio proportions",
          "Mandala patterns",
          "Sacred measurements",
          "Geometric symbolism"
        ],
        symbolism: [
          "Divine order",
          "Cosmic harmony",
          "Sacred proportions",
          "Universal patterns"
        ]
      },
      {
        name: "Ritual Spaces",
        description: "Areas designed for specific religious ceremonies",
        features: [
          "Sanctuaries",
          "Altars",
          "Processional paths",
          "Sacred enclosures"
        ],
        symbolism: [
          "Sacred center",
          "Divine presence",
          "Spiritual journey",
          "Holy ground"
        ]
      }
    ],
    spaces: [
      {
        name: "Main Sanctuary",
        description: "Central worship space in religious buildings",
        characteristics: [
          "Sacred orientation",
          "Symbolic layout",
          "Ritual furnishings",
          "Sacred imagery"
        ],
        functions: [
          "Communal worship",
          "Sacred rituals",
          "Divine presence",
          "Spiritual focus"
        ]
      },
      {
        name: "Auxiliary Spaces",
        description: "Supporting areas for religious activities",
        characteristics: [
          "Preparation areas",
          "Storage spaces",
          "Community halls",
          "Educational rooms"
        ],
        functions: [
          "Ritual preparation",
          "Community gathering",
          "Religious education",
          "Social functions"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Architecture: Principles and Design",
        link: "https://www.amazon.com/Sacred-Architecture-Principles-Religious-Buildings/dp/0500342857?tag=zion0ba-20",
        description: "Comprehensive guide to religious architectural principles"
      }
    ]
  },
  {
    tradition: "Monastic Architecture",
    overview: "Design principles for religious communities and contemplative spaces",
    elements: [
      {
        name: "Contemplative Spaces",
        description: "Areas designed for meditation and prayer",
        features: [
          "Quiet courtyards",
          "Meditation halls",
          "Prayer cells",
          "Sacred gardens"
        ],
        symbolism: [
          "Inner journey",
          "Spiritual silence",
          "Divine presence",
          "Natural harmony"
        ]
      },
      {
        name: "Community Spaces",
        description: "Areas for communal living and practice",
        features: [
          "Refectories",
          "Chapter houses",
          "Work areas",
          "Living quarters"
        ],
        symbolism: [
          "Shared life",
          "Sacred work",
          "Community bonds",
          "Spiritual family"
        ]
      }
    ],
    spaces: [
      {
        name: "Prayer Spaces",
        description: "Areas dedicated to spiritual practice",
        characteristics: [
          "Acoustic design",
          "Natural light",
          "Sacred orientation",
          "Minimal decoration"
        ],
        functions: [
          "Individual prayer",
          "Group meditation",
          "Spiritual study",
          "Sacred chanting"
        ]
      },
      {
        name: "Living Spaces",
        description: "Areas for daily monastic life",
        characteristics: [
          "Simple design",
          "Functional layout",
          "Natural materials",
          "Sustainable features"
        ],
        functions: [
          "Daily living",
          "Community meals",
          "Shared work",
          "Sacred study"
        ]
      }
    ],
    resources: [
      {
        title: "Monastic Architecture and Sacred Space",
        link: "https://www.amazon.com/Monastic-Architecture-Sacred-Space-Design/dp/0300170513?tag=zion0ba-20",
        description: "Analysis of monastic architectural traditions"
      }
    ]
  }
]

interface DesignPrinciple {
  category: string
  description: string
  principles: {
    name: string
    elements: string[]
    applications: string[]
  }[]
  practices: {
    name: string
    methods: string[]
    benefits: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const designPrinciples: DesignPrinciple[] = [
  {
    category: "Sacred Geometry",
    description: "Mathematical and geometric principles in religious architecture",
    principles: [
      {
        name: "Proportional Systems",
        elements: [
          "Golden ratio",
          "Sacred numbers",
          "Geometric patterns",
          "Harmonic proportions"
        ],
        applications: [
          "Building layout",
          "Space design",
          "Structural elements",
          "Decorative features"
        ]
      },
      {
        name: "Symbolic Patterns",
        elements: [
          "Mandalas",
          "Sacred circles",
          "Cosmic diagrams",
          "Divine proportions"
        ],
        applications: [
          "Floor plans",
          "Ceiling designs",
          "Window patterns",
          "Ornamental details"
        ]
      }
    ],
    practices: [
      {
        name: "Design Methods",
        methods: [
          "Geometric construction",
          "Proportional analysis",
          "Pattern development",
          "Symbolic integration"
        ],
        benefits: [
          "Sacred harmony",
          "Divine reflection",
          "Spiritual focus",
          "Aesthetic beauty"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Geometry in Religious Architecture",
        link: "https://www.amazon.com/Sacred-Geometry-Religious-Architecture-Design/dp/0500342865?tag=zion0ba-20",
        description: "Guide to geometric principles in sacred architecture"
      }
    ]
  },
  {
    category: "Spatial Organization",
    description: "Principles of organizing sacred spaces and religious buildings",
    principles: [
      {
        name: "Hierarchical Spaces",
        elements: [
          "Sacred center",
          "Transitional zones",
          "Public areas",
          "Service spaces"
        ],
        applications: [
          "Temple layout",
          "Church design",
          "Mosque planning",
          "Monastery organization"
        ]
      },
      {
        name: "Circulation Patterns",
        elements: [
          "Processional routes",
          "Ritual pathways",
          "Sacred axes",
          "Spiritual journeys"
        ],
        applications: [
          "Movement design",
          "Space sequence",
          "Access control",
          "Ritual flow"
        ]
      }
    ],
    practices: [
      {
        name: "Planning Methods",
        methods: [
          "Functional analysis",
          "Spatial hierarchy",
          "Circulation study",
          "Symbolic planning"
        ],
        benefits: [
          "Sacred order",
          "Ritual support",
          "Spiritual journey",
          "Divine experience"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Space Planning and Design",
        link: "https://www.amazon.com/Sacred-Space-Planning-Religious-Architecture/dp/0415779197?tag=zion0ba-20",
        description: "Guide to planning and organizing sacred spaces"
      }
    ]
  }
]

interface ModernApplication {
  category: string
  description: string
  approaches: {
    name: string
    methods: string[]
    applications: string[]
  }[]
  considerations: {
    name: string
    aspects: string[]
    solutions: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const modernApplications: ModernApplication[] = [
  {
    category: "Contemporary Sacred Architecture",
    description: "Modern approaches to religious architectural design",
    approaches: [
      {
        name: "Sustainable Design",
        methods: [
          "Green materials",
          "Energy efficiency",
          "Natural systems",
          "Environmental harmony"
        ],
        applications: [
          "Building systems",
          "Material selection",
          "Energy use",
          "Site integration"
        ]
      },
      {
        name: "Technology Integration",
        methods: [
          "Digital systems",
          "Modern materials",
          "Smart controls",
          "Multimedia integration"
        ],
        applications: [
          "Worship support",
          "Building management",
          "Community connection",
          "Educational programs"
        ]
      }
    ],
    considerations: [
      {
        name: "Cultural Adaptation",
        aspects: [
          "Traditional values",
          "Modern needs",
          "Community requirements",
          "Social changes"
        ],
        solutions: [
          "Flexible spaces",
          "Adaptable design",
          "Cultural sensitivity",
          "Community input"
        ]
      }
    ],
    resources: [
      {
        title: "Contemporary Religious Architecture",
        link: "https://www.amazon.com/Contemporary-Religious-Architecture-Modern-Design/dp/0415534445?tag=zion0ba-20",
        description: "Analysis of modern religious architectural approaches"
      }
    ]
  },
  {
    category: "Interfaith Spaces",
    description: "Design principles for multi-faith religious spaces",
    approaches: [
      {
        name: "Universal Design",
        methods: [
          "Neutral spaces",
          "Flexible layouts",
          "Inclusive features",
          "Shared symbols"
        ],
        applications: [
          "Prayer rooms",
          "Meditation spaces",
          "Community areas",
          "Sacred gardens"
        ]
      },
      {
        name: "Adaptive Reuse",
        methods: [
          "Space conversion",
          "Historic preservation",
          "Modern adaptation",
          "Functional update"
        ],
        applications: [
          "Building renovation",
          "Space transformation",
          "Heritage conservation",
          "Contemporary use"
        ]
      }
    ],
    considerations: [
      {
        name: "Inclusive Planning",
        aspects: [
          "Multiple traditions",
          "Diverse needs",
          "Shared spaces",
          "Universal access"
        ],
        solutions: [
          "Flexible design",
          "Modular spaces",
          "Neutral aesthetics",
          "Inclusive features"
        ]
      }
    ],
    resources: [
      {
        title: "Interfaith Architecture and Sacred Space",
        link: "https://www.amazon.com/Interfaith-Architecture-Sacred-Space-Design/dp/0415779654?tag=zion0ba-20",
        description: "Guide to designing multi-faith religious spaces"
      }
    ]
  }
]

export default function ReligiousArchitecturePage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Religious Architecture & Sacred Spaces</h1>
          <p className="text-xl text-muted-foreground">
            Explore religious architecture, sacred spaces, and temple design across traditions
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Architectural Traditions</TabsTrigger>
            <TabsTrigger value="principles">Design Principles</TabsTrigger>
            <TabsTrigger value="modern">Modern Applications</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {architecturalTraditions.map((tradition) => (
                <Card key={tradition.tradition}>
                  <CardHeader>
                    <CardTitle>{tradition.tradition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{tradition.overview}</p>

                      {tradition.elements.map((element) => (
                        <div key={element.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{element.name}</h3>
                          <p className="text-muted-foreground">{element.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Features</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {element.features.map((feature) => (
                                  <li key={feature}>{feature}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Symbolism</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {element.symbolism.map((symbol) => (
                                  <li key={symbol}>{symbol}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}

                      {tradition.spaces.map((space) => (
                        <div key={space.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{space.name}</h3>
                          <p className="text-muted-foreground">{space.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Characteristics</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {space.characteristics.map((characteristic) => (
                                  <li key={characteristic}>{characteristic}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Functions</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {space.functions.map((function_) => (
                                  <li key={function_}>{function_}</li>
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

          <TabsContent value="principles" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {designPrinciples.map((principle) => (
                <Card key={principle.category}>
                  <CardHeader>
                    <CardTitle>{principle.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{principle.description}</p>

                      {principle.principles.map((p) => (
                        <div key={p.name} className="space-y-2">
                          <h4 className="font-semibold">{p.name}</h4>
                          <div>
                            <h5 className="text-sm font-medium">Elements:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {p.elements.map((element) => (
                                <li key={element}>{element}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Applications:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {p.applications.map((application) => (
                                <li key={application}>{application}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      {principle.practices.map((practice) => (
                        <div key={practice.name} className="space-y-2">
                          <h4 className="font-semibold">{practice.name}</h4>
                          <div>
                            <h5 className="text-sm font-medium">Methods:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {practice.methods.map((method) => (
                                <li key={method}>{method}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Benefits:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {practice.benefits.map((benefit) => (
                                <li key={benefit}>{benefit}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {principle.resources.map((resource) => (
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

          <TabsContent value="modern" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modernApplications.map((application) => (
                <Card key={application.category}>
                  <CardHeader>
                    <CardTitle>{application.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{application.description}</p>

                      {application.approaches.map((approach) => (
                        <div key={approach.name} className="space-y-2">
                          <h4 className="font-semibold">{approach.name}</h4>
                          <div>
                            <h5 className="text-sm font-medium">Methods:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {approach.methods.map((method) => (
                                <li key={method}>{method}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Applications:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {approach.applications.map((app) => (
                                <li key={app}>{app}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      {application.considerations.map((consideration) => (
                        <div key={consideration.name} className="space-y-2">
                          <h4 className="font-semibold">{consideration.name}</h4>
                          <div>
                            <h5 className="text-sm font-medium">Aspects:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {consideration.aspects.map((aspect) => (
                                <li key={aspect}>{aspect}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Solutions:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {consideration.solutions.map((solution) => (
                                <li key={solution}>{solution}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {application.resources.map((resource) => (
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
              href="/studies/themes/space/geography"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Geography →
            </Link>
            <Link 
              href="/studies/themes/space/sites"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Sites →
            </Link>
            <Link 
              href="/studies/themes/space/symbolic"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Symbolism →
            </Link>
            <Link 
              href="/studies/themes/community/monastic"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Monastic Communities →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 