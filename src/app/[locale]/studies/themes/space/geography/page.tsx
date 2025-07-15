import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sacred Geography & Religious Landscapes | Sacred Studies",
  description: "Explore sacred geography, holy landscapes, and religious spatial concepts across world traditions. In-depth analysis of sacred sites, pilgrimage routes, and cosmic geography.",
  openGraph: {
    title: "Sacred Geography & Religious Landscapes",
    description: "Comprehensive guide to sacred geography and religious landscapes across traditions.",
    type: "website",
    images: [{ url: "/images/og/sacred-geography.jpg" }]
  },
  keywords: [
    "sacred geography",
    "religious landscapes",
    "holy sites",
    "pilgrimage routes",
    "cosmic geography",
    "sacred mountains",
    "holy rivers",
    "religious territories",
    "sacred space",
    "spiritual landscapes"
  ]
}

interface GeographicTradition {
  tradition: string
  overview: string
  concepts: {
    name: string
    description: string
    elements: string[]
    significance: string[]
  }[]
  landscapes: {
    name: string
    description: string
    features: string[]
    practices: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const geographicTraditions: GeographicTradition[] = [
  {
    tradition: "Sacred Mountains",
    overview: "Mountains as cosmic centers and divine dwelling places",
    concepts: [
      {
        name: "Axis Mundi",
        description: "Mountains as cosmic pillars connecting heaven and earth",
        elements: [
          "Vertical alignment",
          "Three-world connection",
          "Divine descent point",
          "Cosmic stability"
        ],
        significance: [
          "Spiritual ascent",
          "Divine revelation",
          "Cosmic order",
          "Sacred power"
        ]
      },
      {
        name: "Divine Abode",
        description: "Mountains as dwelling places of gods and spiritual beings",
        elements: [
          "Temple locations",
          "Meditation sites",
          "Vision quest places",
          "Sacred caves"
        ],
        significance: [
          "Divine presence",
          "Spiritual power",
          "Mystical encounters",
          "Sacred protection"
        ]
      }
    ],
    landscapes: [
      {
        name: "Mountain Sanctuaries",
        description: "Sacred spaces on mountains for worship and practice",
        features: [
          "High altitude temples",
          "Natural shrines",
          "Pilgrimage paths",
          "Meditation caves"
        ],
        practices: [
          "Mountain pilgrimage",
          "Altitude meditation",
          "Sacred circumambulation",
          "Offering rituals"
        ]
      },
      {
        name: "Sacred Peaks",
        description: "Specific mountains revered in different traditions",
        features: [
          "Summit shrines",
          "Holy springs",
          "Sacred forests",
          "Rock formations"
        ],
        practices: [
          "Annual festivals",
          "Vision quests",
          "Spiritual retreats",
          "Community gatherings"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Mountains of the World",
        link: "https://www.amazon.com/Sacred-Mountains-World-Spiritual-Geography/dp/0520213637?tag=zion0ba-20",
        description: "Comprehensive study of sacred mountains across traditions"
      }
    ]
  },
  {
    tradition: "Sacred Waters",
    overview: "Rivers, lakes, and seas in religious geography",
    concepts: [
      {
        name: "Living Waters",
        description: "Sacred waters as sources of spiritual and physical purification",
        elements: [
          "Holy rivers",
          "Sacred springs",
          "Blessed wells",
          "Ritual pools"
        ],
        significance: [
          "Purification",
          "Renewal",
          "Healing",
          "Transformation"
        ]
      },
      {
        name: "Cosmic Waters",
        description: "Waters as primordial elements and divine manifestations",
        elements: [
          "Creation waters",
          "Divine rivers",
          "Sacred oceans",
          "Celestial waters"
        ],
        significance: [
          "Divine origin",
          "Cosmic order",
          "Life source",
          "Spiritual power"
        ]
      }
    ],
    landscapes: [
      {
        name: "River Sanctuaries",
        description: "Sacred sites along holy rivers",
        features: [
          "Bathing ghats",
          "Temple complexes",
          "Pilgrimage centers",
          "Ritual platforms"
        ],
        practices: [
          "Ritual bathing",
          "Water offerings",
          "Sacred festivals",
          "River pilgrimages"
        ]
      },
      {
        name: "Holy Wells",
        description: "Sacred springs and wells in religious practice",
        features: [
          "Well shrines",
          "Sacred pools",
          "Healing waters",
          "Ritual fountains"
        ],
        practices: [
          "Water collection",
          "Healing rituals",
          "Devotional offerings",
          "Blessing ceremonies"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Waters: Holy Wells and Water Lore",
        link: "https://www.amazon.com/Sacred-Waters-Religious-Geography-Traditions/dp/1780235739?tag=zion0ba-20",
        description: "Study of sacred water sites and their religious significance"
      }
    ]
  }
]

interface CosmicGeography {
  category: string
  description: string
  concepts: {
    name: string
    elements: string[]
    manifestations: string[]
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

const cosmicGeographies: CosmicGeography[] = [
  {
    category: "Sacred Directions",
    description: "Cardinal directions and their spiritual significance",
    concepts: [
      {
        name: "Directional Guardians",
        elements: [
          "Divine protectors",
          "Elemental powers",
          "Cosmic forces",
          "Spiritual beings"
        ],
        manifestations: [
          "Temple orientation",
          "Ritual directions",
          "Sacred alignments",
          "Protective boundaries"
        ]
      },
      {
        name: "Cosmic Orientation",
        elements: [
          "Cardinal points",
          "Solar alignment",
          "Stellar patterns",
          "Energy flows"
        ],
        manifestations: [
          "Sacred architecture",
          "Ritual movements",
          "Spiritual practices",
          "Sacred ceremonies"
        ]
      }
    ],
    practices: [
      {
        name: "Directional Practices",
        methods: [
          "Directional prayers",
          "Ritual circumambulation",
          "Spatial orientation",
          "Sacred alignment"
        ],
        benefits: [
          "Spiritual protection",
          "Energy balance",
          "Divine connection",
          "Sacred harmony"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Directions in Religious Practice",
        link: "https://www.amazon.com/Sacred-Directions-Religious-Geography/dp/0415866987?tag=zion0ba-20",
        description: "Analysis of directional symbolism in religious traditions"
      }
    ]
  },
  {
    category: "Sacred Centers",
    description: "Geographic and spiritual centers in religious traditions",
    concepts: [
      {
        name: "World Center",
        elements: [
          "Sacred mountains",
          "Holy cities",
          "Temple complexes",
          "Cosmic pillars"
        ],
        manifestations: [
          "Pilgrimage destinations",
          "Ritual centers",
          "Spiritual capitals",
          "Divine dwellings"
        ]
      },
      {
        name: "Power Places",
        elements: [
          "Energy vortexes",
          "Sacred intersections",
          "Holy grounds",
          "Spiritual nodes"
        ],
        manifestations: [
          "Healing centers",
          "Meditation spots",
          "Vision sites",
          "Prayer locations"
        ]
      }
    ],
    practices: [
      {
        name: "Center Practices",
        methods: [
          "Center pilgrimage",
          "Sacred alignment",
          "Energy work",
          "Ritual positioning"
        ],
        benefits: [
          "Spiritual connection",
          "Divine presence",
          "Sacred power",
          "Cosmic harmony"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Centers in Religious Geography",
        link: "https://www.amazon.com/Sacred-Centers-Religious-Geography-Traditions/dp/0415779456?tag=zion0ba-20",
        description: "Study of sacred centers and their spiritual significance"
      }
    ]
  }
]

interface LandscapePattern {
  category: string
  description: string
  patterns: {
    name: string
    features: string[]
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

const landscapePatterns: LandscapePattern[] = [
  {
    category: "Natural Sanctuaries",
    description: "Sacred natural landscapes and their religious significance",
    patterns: [
      {
        name: "Sacred Groves",
        features: [
          "Ancient trees",
          "Sacred springs",
          "Natural altars",
          "Wildlife sanctuary"
        ],
        applications: [
          "Nature worship",
          "Forest meditation",
          "Ecological preservation",
          "Community rituals"
        ]
      },
      {
        name: "Desert Sanctuaries",
        features: [
          "Sacred dunes",
          "Rock formations",
          "Oasis shrines",
          "Vision quest sites"
        ],
        applications: [
          "Spiritual retreat",
          "Desert meditation",
          "Sacred isolation",
          "Vision quests"
        ]
      }
    ],
    practices: [
      {
        name: "Nature Practices",
        methods: [
          "Outdoor meditation",
          "Nature communion",
          "Sacred walks",
          "Environmental rituals"
        ],
        benefits: [
          "Natural harmony",
          "Spiritual connection",
          "Environmental awareness",
          "Sacred presence"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Natural Sites: Guidelines for Protected Areas",
        link: "https://www.amazon.com/Sacred-Natural-Sites-Guidelines-Protection/dp/1842464123?tag=zion0ba-20",
        description: "Guide to understanding and preserving sacred natural sites"
      }
    ]
  },
  {
    category: "Cultural Landscapes",
    description: "Human-shaped sacred landscapes and their religious meaning",
    patterns: [
      {
        name: "Temple Complexes",
        features: [
          "Sacred architecture",
          "Ritual spaces",
          "Garden design",
          "Symbolic layout"
        ],
        applications: [
          "Worship centers",
          "Community gathering",
          "Educational spaces",
          "Cultural preservation"
        ]
      },
      {
        name: "Pilgrimage Routes",
        features: [
          "Sacred paths",
          "Way stations",
          "Holy markers",
          "Journey symbols"
        ],
        applications: [
          "Spiritual journey",
          "Cultural connection",
          "Community bonding",
          "Sacred travel"
        ]
      }
    ],
    practices: [
      {
        name: "Cultural Practices",
        methods: [
          "Sacred architecture",
          "Landscape design",
          "Route planning",
          "Site preservation"
        ],
        benefits: [
          "Cultural continuity",
          "Community identity",
          "Sacred memory",
          "Spiritual heritage"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Cultural Landscapes and Religious Heritage",
        link: "https://www.amazon.com/Sacred-Cultural-Landscapes-Religious-Heritage/dp/0415534437?tag=zion0ba-20",
        description: "Analysis of cultural landscapes in religious traditions"
      }
    ]
  }
]

export default function SacredGeographyPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Sacred Geography & Religious Landscapes</h1>
          <p className="text-xl text-muted-foreground">
            Explore sacred geography, holy landscapes, and religious spatial concepts across traditions
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Geographic Traditions</TabsTrigger>
            <TabsTrigger value="cosmic">Cosmic Geography</TabsTrigger>
            <TabsTrigger value="patterns">Landscape Patterns</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {geographicTraditions.map((tradition) => (
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
                              <h4 className="font-semibold">Significance</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {concept.significance.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}

                      {tradition.landscapes.map((landscape) => (
                        <div key={landscape.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{landscape.name}</h3>
                          <p className="text-muted-foreground">{landscape.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Features</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {landscape.features.map((feature) => (
                                  <li key={feature}>{feature}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Practices</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {landscape.practices.map((practice) => (
                                  <li key={practice}>{practice}</li>
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

          <TabsContent value="cosmic" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cosmicGeographies.map((cosmic) => (
                <Card key={cosmic.category}>
                  <CardHeader>
                    <CardTitle>{cosmic.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{cosmic.description}</p>

                      {cosmic.concepts.map((concept) => (
                        <div key={concept.name} className="space-y-2">
                          <h4 className="font-semibold">{concept.name}</h4>
                          <div>
                            <h5 className="text-sm font-medium">Elements:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {concept.elements.map((element) => (
                                <li key={element}>{element}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Manifestations:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {concept.manifestations.map((manifestation) => (
                                <li key={manifestation}>{manifestation}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      {cosmic.practices.map((practice) => (
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
                        {cosmic.resources.map((resource) => (
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

          <TabsContent value="patterns" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {landscapePatterns.map((pattern) => (
                <Card key={pattern.category}>
                  <CardHeader>
                    <CardTitle>{pattern.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{pattern.description}</p>

                      {pattern.patterns.map((p) => (
                        <div key={p.name} className="space-y-2">
                          <h4 className="font-semibold">{p.name}</h4>
                          <div>
                            <h5 className="text-sm font-medium">Features:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {p.features.map((feature) => (
                                <li key={feature}>{feature}</li>
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

                      {pattern.practices.map((practice) => (
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
                        {pattern.resources.map((resource) => (
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
              href="/studies/themes/space/symbolic"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Symbolism →
            </Link>
            <Link 
              href="/studies/practices/pilgrimage"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Pilgrimage →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 