import React from 'react'
import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sacred Symbolism & Religious Iconography | Sacred Studies",
  description: "Explore sacred symbols, religious iconography, and symbolic meaning across traditions. In-depth analysis of religious art, architecture, and ritual objects.",
  openGraph: {
    title: "Sacred Symbolism & Religious Iconography",
    description: "Comprehensive guide to sacred symbols and religious iconography across traditions.",
    type: "website",
    images: [{ url: "/images/og/sacred-symbolism.jpg" }]
  },
  keywords: [
    "sacred symbols",
    "religious iconography",
    "sacred art",
    "ritual objects",
    "religious symbolism",
    "sacred geometry",
    "symbolic meaning",
    "religious artifacts",
    "sacred imagery",
    "spiritual symbols"
  ]
}

interface SymbolicTradition {
  tradition: string
  overview: string
  symbols: {
    category: string
    description: string
    elements: {
      name: string
      meaning: string[]
      contexts: string[]
      practices: string[]
    }[]
    resources: {
      title: string
      link: string
      description: string
    }[]
  }[]
}

const symbolicTraditions: SymbolicTradition[] = [
  {
    tradition: "Sacred Geometry",
    overview: "Mathematical and geometric patterns in religious architecture and art",
    symbols: [
      {
        category: "Geometric Forms",
        description: "Basic geometric shapes and their spiritual significance",
        elements: [
          {
            name: "Circle and Sphere",
            meaning: [
              "Divine unity",
              "Eternal wholeness",
              "Cosmic cycles",
              "Perfect completion"
            ],
            contexts: [
              "Mandalas",
              "Domes",
              "Sacred circles",
              "Ritual spaces"
            ],
            practices: [
              "Meditation",
              "Sacred architecture",
              "Ritual arrangement",
              "Contemplative art"
            ]
          },
          {
            name: "Square and Cube",
            meaning: [
              "Material world",
              "Earthly order",
              "Cardinal directions",
              "Stability"
            ],
            contexts: [
              "Temple foundations",
              "Altars",
              "Sacred cities",
              "Ritual objects"
            ],
            practices: [
              "Temple construction",
              "Space organization",
              "Ritual orientation",
              "Sacred measurement"
            ]
          }
        ],
        resources: [
          {
            title: "Sacred Geometry: Philosophy and Practice",
            link: "https://www.amazon.com/Sacred-Geometry-Philosophy-Practice-Art/dp/0500810303?tag=zion0ba-20",
            description: "Comprehensive guide to sacred geometric principles and applications"
          }
        ]
      },
      {
        category: "Numerical Symbolism",
        description: "Sacred numbers and their spiritual significance",
        elements: [
          {
            name: "Sacred Numbers",
            meaning: [
              "Divine order",
              "Cosmic structure",
              "Spiritual progression",
              "Universal harmony"
            ],
            contexts: [
              "Architecture",
              "Sacred texts",
              "Ritual timing",
              "Art composition"
            ],
            practices: [
              "Sacred calculations",
              "Architectural design",
              "Ritual timing",
              "Symbolic interpretation"
            ]
          }
        ],
        resources: [
          {
            title: "Sacred Number and the Origins of Civilization",
            link: "https://www.amazon.com/Sacred-Number-Origins-Civilization-Measuring/dp/1594771316?tag=zion0ba-20",
            description: "Study of sacred numbers in religious and cultural traditions"
          }
        ]
      }
    ]
  },
  {
    tradition: "Religious Iconography",
    overview: "Visual symbols and images in religious traditions",
    symbols: [
      {
        category: "Sacred Images",
        description: "Religious imagery and its spiritual significance",
        elements: [
          {
            name: "Divine Representations",
            meaning: [
              "Divine presence",
              "Spiritual reality",
              "Sacred narratives",
              "Divine attributes"
            ],
            contexts: [
              "Temples",
              "Shrines",
              "Sacred texts",
              "Ritual objects"
            ],
            practices: [
              "Devotional worship",
              "Meditation",
              "Teaching",
              "Contemplation"
            ]
          }
        ],
        resources: [
          {
            title: "Sacred Art in East and West",
            link: "https://www.amazon.com/Sacred-Art-East-West-Principles/dp/1597311324?tag=zion0ba-20",
            description: "Comparative study of sacred art traditions"
          }
        ]
      }
    ]
  }
]

interface SymbolicObject {
  category: string
  description: string
  objects: {
    name: string
    description: string
    uses: string[]
    significance: string[]
    traditions: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const symbolicObjects: SymbolicObject[] = [
  {
    category: "Ritual Objects",
    description: "Sacred implements used in religious ceremonies and practices",
    objects: [
      {
        name: "Sacred Vessels",
        description: "Containers and vessels used in religious rituals",
        uses: [
          "Offerings",
          "Purification",
          "Sacred substances",
          "Ritual implements"
        ],
        significance: [
          "Divine presence",
          "Sacred containment",
          "Ritual purity",
          "Spiritual transformation"
        ],
        traditions: [
          "Temple worship",
          "Domestic rituals",
          "Ceremonial practices",
          "Sacred meals"
        ]
      },
      {
        name: "Sacred Instruments",
        description: "Musical and ceremonial instruments used in worship",
        uses: [
          "Sacred music",
          "Ritual timing",
          "Ceremonial signals",
          "Divine praise"
        ],
        significance: [
          "Sacred sound",
          "Divine harmony",
          "Spiritual awakening",
          "Communal unity"
        ],
        traditions: [
          "Liturgical music",
          "Ritual ceremonies",
          "Meditative practices",
          "Festival celebrations"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Objects in Religious Practice",
        link: "https://www.amazon.com/Sacred-Objects-Religious-Practice-Traditions/dp/0415534502?tag=zion0ba-20",
        description: "Guide to ritual objects and their use in religious traditions"
      }
    ]
  }
]

interface SymbolicSpace {
  category: string
  description: string
  elements: {
    name: string
    features: string[]
    significance: string[]
    applications: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const symbolicSpaces: SymbolicSpace[] = [
  {
    category: "Sacred Space Organization",
    description: "Symbolic arrangement and organization of religious spaces",
    elements: [
      {
        name: "Spatial Hierarchy",
        features: [
          "Sacred center",
          "Directional alignment",
          "Graduated sanctity",
          "Symbolic boundaries"
        ],
        significance: [
          "Divine order",
          "Cosmic structure",
          "Spiritual progression",
          "Sacred separation"
        ],
        applications: [
          "Temple design",
          "Ritual spaces",
          "Sacred cities",
          "Pilgrimage routes"
        ]
      },
      {
        name: "Sacred Orientation",
        features: [
          "Cardinal directions",
          "Celestial alignment",
          "Sacred axes",
          "Ritual pathways"
        ],
        significance: [
          "Cosmic order",
          "Divine alignment",
          "Spiritual journey",
          "Sacred geography"
        ],
        applications: [
          "Building orientation",
          "Ritual movement",
          "Sacred navigation",
          "Ceremonial procession"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Space and Sacred Time",
        link: "https://www.amazon.com/Sacred-Space-Time-Religious-Architecture/dp/0415866987?tag=zion0ba-20",
        description: "Analysis of sacred space organization in religious traditions"
      }
    ]
  }
]

export default function SacredSymbolismPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Sacred Symbolism & Religious Iconography</h1>
          <p className="text-xl text-muted-foreground">
            Explore sacred symbols, religious iconography, and their spiritual significance across traditions
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Symbolic Traditions</TabsTrigger>
            <TabsTrigger value="objects">Sacred Objects</TabsTrigger>
            <TabsTrigger value="spaces">Symbolic Spaces</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {symbolicTraditions.map((tradition) => (
                <Card key={tradition.tradition}>
                  <CardHeader>
                    <CardTitle>{tradition.tradition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{tradition.overview}</p>

                      {tradition.symbols.map((symbol) => (
                        <div key={symbol.category} className="space-y-4">
                          <h3 className="text-xl font-semibold">{symbol.category}</h3>
                          <p className="text-muted-foreground">{symbol.description}</p>

                          {symbol.elements.map((element) => (
                            <div key={element.name} className="space-y-4">
                              <h4 className="font-semibold">{element.name}</h4>
                              
                              <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                  <h5 className="text-sm font-medium">Meaning:</h5>
                                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                                    {element.meaning.map((item) => (
                                      <li key={item}>{item}</li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="space-y-2">
                                  <h5 className="text-sm font-medium">Contexts:</h5>
                                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                                    {element.contexts.map((context) => (
                                      <li key={context}>{context}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <h5 className="text-sm font-medium">Practices:</h5>
                                <ul className="list-disc list-inside text-sm text-muted-foreground">
                                  {element.practices.map((practice) => (
                                    <li key={practice}>{practice}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}

                          <div className="space-y-2">
                            <h4 className="font-semibold">Resources:</h4>
                            {symbol.resources.map((resource) => (
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

          <TabsContent value="objects" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {symbolicObjects.map((category) => (
                <Card key={category.category}>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{category.description}</p>

                      {category.objects.map((object) => (
                        <div key={object.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{object.name}</h3>
                          <p className="text-muted-foreground">{object.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Uses</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {object.uses.map((use) => (
                                  <li key={use}>{use}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Significance</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {object.significance.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Traditions</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {object.traditions.map((tradition) => (
                                <li key={tradition}>{tradition}</li>
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

          <TabsContent value="spaces" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {symbolicSpaces.map((category) => (
                <Card key={category.category}>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{category.description}</p>

                      {category.elements.map((element) => (
                        <div key={element.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{element.name}</h3>

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
                              <h4 className="font-semibold">Significance</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {element.significance.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Applications</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {element.applications.map((application) => (
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
        </Tabs>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/studies/themes/space/architecture"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Architecture →
            </Link>
            <Link 
              href="/studies/themes/space/sites"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Sites →
            </Link>
            <Link 
              href="/studies/practices/rituals"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Rituals →
            </Link>
            <Link 
              href="/studies/practices/meditation"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Meditation →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <Link 
              href="/studies/texts/mystical"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Mystical Texts →
            </Link>
            <Link 
              href="/studies/philosophy/metaphysics"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Metaphysics →
            </Link>
            <Link 
              href="/studies/themes/spirituality/mysticism"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Mysticism →
            </Link>
            <Link 
              href="/studies/themes/spirituality/practices"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Spiritual Practices →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 