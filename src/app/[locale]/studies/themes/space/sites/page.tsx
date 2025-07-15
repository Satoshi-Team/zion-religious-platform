import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sacred Sites & Holy Places | Sacred Studies",
  description: "Explore sacred sites and holy places across religious traditions. In-depth analysis of temples, shrines, pilgrimage destinations, and their spiritual significance.",
  openGraph: {
    title: "Sacred Sites & Holy Places",
    description: "Comprehensive guide to sacred sites and holy places across religious traditions.",
    type: "website",
    images: [{ url: "/images/og/sacred-sites.jpg" }]
  },
  keywords: [
    "sacred sites",
    "holy places",
    "religious temples",
    "sacred shrines",
    "pilgrimage destinations",
    "holy cities",
    "religious sanctuaries",
    "sacred spaces",
    "spiritual centers",
    "religious architecture"
  ]
}

interface SacredSite {
  tradition: string
  overview: string
  sites: {
    name: string
    description: string
    features: string[]
    significance: string[]
    practices: {
      type: string
      elements: string[]
    }[]
  }[]
  preservation: {
    challenges: string[]
    methods: string[]
  }
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const sacredSites: SacredSite[] = [
  {
    tradition: "Temple Complexes",
    overview: "Major religious temple complexes and their spiritual significance",
    sites: [
      {
        name: "Ancient Temples",
        description: "Historical temple complexes and their enduring spiritual importance",
        features: [
          "Monumental architecture",
          "Sacred geometry",
          "Ritual spaces",
          "Symbolic decorations"
        ],
        significance: [
          "Divine dwelling",
          "Cosmic representation",
          "Community center",
          "Cultural preservation"
        ],
        practices: [
          {
            type: "Ritual Worship",
            elements: [
              "Daily ceremonies",
              "Festival celebrations",
              "Sacred offerings",
              "Community gatherings"
            ]
          },
          {
            type: "Spiritual Practice",
            elements: [
              "Meditation",
              "Prayer",
              "Sacred study",
              "Cultural transmission"
            ]
          }
        ]
      },
      {
        name: "Living Temples",
        description: "Contemporary active temples and their ongoing traditions",
        features: [
          "Modern facilities",
          "Traditional design",
          "Community spaces",
          "Educational areas"
        ],
        significance: [
          "Active worship",
          "Cultural continuity",
          "Spiritual education",
          "Community development"
        ],
        practices: [
          {
            type: "Contemporary Worship",
            elements: [
              "Modern rituals",
              "Community programs",
              "Educational activities",
              "Cultural events"
            ]
          },
          {
            type: "Social Engagement",
            elements: [
              "Community service",
              "Interfaith dialogue",
              "Cultural preservation",
              "Environmental stewardship"
            ]
          }
        ]
      }
    ],
    preservation: {
      challenges: [
        "Physical deterioration",
        "Modern development",
        "Environmental factors",
        "Cultural changes"
      ],
      methods: [
        "Conservation techniques",
        "Documentation",
        "Community involvement",
        "Sustainable management"
      ]
    },
    resources: [
      {
        title: "Sacred Temple Architecture and Preservation",
        link: "https://www.amazon.com/Sacred-Temple-Architecture-Preservation-Guide/dp/0415779432?tag=zion0ba-20",
        description: "Comprehensive guide to temple architecture and preservation"
      }
    ]
  },
  {
    tradition: "Natural Sacred Sites",
    overview: "Natural locations considered sacred in religious traditions",
    sites: [
      {
        name: "Sacred Mountains",
        description: "Mountains revered as holy places across traditions",
        features: [
          "Natural formations",
          "High altitude",
          "Unique ecosystems",
          "Sacred markers"
        ],
        significance: [
          "Cosmic axis",
          "Divine dwelling",
          "Spiritual power",
          "Natural wisdom"
        ],
        practices: [
          {
            type: "Mountain Pilgrimage",
            elements: [
              "Sacred ascent",
              "Ritual offerings",
              "Meditation practices",
              "Environmental respect"
            ]
          },
          {
            type: "Nature Connection",
            elements: [
              "Ecological awareness",
              "Wilderness retreat",
              "Sacred ecology",
              "Environmental protection"
            ]
          }
        ]
      },
      {
        name: "Sacred Waters",
        description: "Rivers, lakes, and springs considered holy",
        features: [
          "Water sources",
          "Natural beauty",
          "Ecological significance",
          "Ritual facilities"
        ],
        significance: [
          "Purification",
          "Life source",
          "Divine presence",
          "Natural cycles"
        ],
        practices: [
          {
            type: "Water Rituals",
            elements: [
              "Sacred bathing",
              "Water offerings",
              "Purification rites",
              "Healing practices"
            ]
          },
          {
            type: "Environmental Care",
            elements: [
              "Water conservation",
              "Ecosystem protection",
              "Traditional knowledge",
              "Community stewardship"
            ]
          }
        ]
      }
    ],
    preservation: {
      challenges: [
        "Environmental degradation",
        "Climate change",
        "Tourism impact",
        "Resource exploitation"
      ],
      methods: [
        "Environmental protection",
        "Traditional management",
        "Community guardianship",
        "Sustainable tourism"
      ]
    },
    resources: [
      {
        title: "Sacred Natural Sites: Conservation Guidelines",
        link: "https://www.amazon.com/Sacred-Natural-Sites-Conservation-Guidelines/dp/1842464456?tag=zion0ba-20",
        description: "Guide to preserving and protecting sacred natural sites"
      }
    ]
  }
]

interface PilgrimageSite {
  category: string
  description: string
  destinations: {
    name: string
    features: string[]
    practices: string[]
  }[]
  routes: {
    name: string
    elements: string[]
    significance: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const pilgrimageSites: PilgrimageSite[] = [
  {
    category: "Major Pilgrimage Centers",
    description: "Primary destinations for religious pilgrimage",
    destinations: [
      {
        name: "Holy Cities",
        features: [
          "Sacred architecture",
          "Historical sites",
          "Ritual spaces",
          "Community centers"
        ],
        practices: [
          "Sacred rituals",
          "Communal worship",
          "Cultural events",
          "Spiritual education"
        ]
      },
      {
        name: "Sacred Shrines",
        features: [
          "Holy relics",
          "Sacred art",
          "Devotional spaces",
          "Ritual areas"
        ],
        practices: [
          "Personal devotion",
          "Group ceremonies",
          "Meditation practice",
          "Sacred offerings"
        ]
      }
    ],
    routes: [
      {
        name: "Traditional Paths",
        elements: [
          "Ancient routes",
          "Sacred markers",
          "Rest stations",
          "Community support"
        ],
        significance: [
          "Spiritual journey",
          "Historical connection",
          "Community bonds",
          "Personal transformation"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Pilgrimage: Traditional Routes and Modern Practice",
        link: "https://www.amazon.com/Sacred-Pilgrimage-Traditional-Modern-Practice/dp/0415866995?tag=zion0ba-20",
        description: "Guide to pilgrimage traditions and contemporary practice"
      }
    ]
  },
  {
    category: "Modern Pilgrimage Sites",
    description: "Contemporary sacred destinations and their significance",
    destinations: [
      {
        name: "Modern Sanctuaries",
        features: [
          "Contemporary architecture",
          "Multi-faith spaces",
          "Digital facilities",
          "Environmental design"
        ],
        practices: [
          "Interfaith gatherings",
          "Modern rituals",
          "Digital connection",
          "Environmental awareness"
        ]
      },
      {
        name: "Cultural Centers",
        features: [
          "Educational spaces",
          "Art galleries",
          "Performance venues",
          "Community facilities"
        ],
        practices: [
          "Cultural programs",
          "Educational events",
          "Artistic expression",
          "Community engagement"
        ]
      }
    ],
    routes: [
      {
        name: "Contemporary Paths",
        elements: [
          "Modern infrastructure",
          "Digital guidance",
          "Sustainable facilities",
          "Cultural integration"
        ],
        significance: [
          "Cultural exchange",
          "Spiritual exploration",
          "Environmental awareness",
          "Social connection"
        ]
      }
    ],
    resources: [
      {
        title: "Modern Sacred Sites: Contemporary Spirituality and Space",
        link: "https://www.amazon.com/Modern-Sacred-Sites-Contemporary-Spirituality/dp/0415534488?tag=zion0ba-20",
        description: "Analysis of modern sacred sites and their significance"
      }
    ]
  }
]

interface PreservationMethod {
  category: string
  description: string
  methods: {
    name: string
    techniques: string[]
    applications: string[]
  }[]
  challenges: {
    name: string
    issues: string[]
    solutions: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const preservationMethods: PreservationMethod[] = [
  {
    category: "Physical Conservation",
    description: "Methods for preserving sacred sites and structures",
    methods: [
      {
        name: "Traditional Techniques",
        techniques: [
          "Historical materials",
          "Craftsman skills",
          "Natural methods",
          "Cultural practices"
        ],
        applications: [
          "Building repair",
          "Material preservation",
          "Structural support",
          "Artistic restoration"
        ]
      },
      {
        name: "Modern Conservation",
        techniques: [
          "Scientific analysis",
          "Digital documentation",
          "Advanced materials",
          "Environmental control"
        ],
        applications: [
          "Climate protection",
          "Structural reinforcement",
          "Material stabilization",
          "Preventive conservation"
        ]
      }
    ],
    challenges: [
      {
        name: "Environmental Threats",
        issues: [
          "Climate change",
          "Pollution",
          "Natural disasters",
          "Biological damage"
        ],
        solutions: [
          "Climate control",
          "Protective measures",
          "Monitoring systems",
          "Emergency planning"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Site Conservation: Technical Guide",
        link: "https://www.amazon.com/Sacred-Site-Conservation-Technical-Guide/dp/0415779467?tag=zion0ba-20",
        description: "Technical manual for sacred site conservation"
      }
    ]
  },
  {
    category: "Cultural Preservation",
    description: "Methods for preserving intangible heritage of sacred sites",
    methods: [
      {
        name: "Documentation",
        techniques: [
          "Oral history",
          "Digital recording",
          "Written records",
          "Visual documentation"
        ],
        applications: [
          "Traditional knowledge",
          "Ritual practices",
          "Cultural memory",
          "Sacred traditions"
        ]
      },
      {
        name: "Community Engagement",
        techniques: [
          "Local participation",
          "Knowledge transfer",
          "Cultural programs",
          "Educational initiatives"
        ],
        applications: [
          "Traditional practices",
          "Cultural continuity",
          "Community ownership",
          "Heritage education"
        ]
      }
    ],
    challenges: [
      {
        name: "Social Changes",
        issues: [
          "Modernization",
          "Cultural shifts",
          "Generation gaps",
          "Urban development"
        ],
        solutions: [
          "Cultural education",
          "Community programs",
          "Traditional teaching",
          "Modern adaptation"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Heritage: Cultural Preservation Guide",
        link: "https://www.amazon.com/Sacred-Heritage-Cultural-Preservation-Guide/dp/0415534496?tag=zion0ba-20",
        description: "Guide to preserving cultural heritage of sacred sites"
      }
    ]
  }
]

export default function SacredSitesPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Sacred Sites & Holy Places</h1>
          <p className="text-xl text-muted-foreground">
            Explore sacred sites, holy places, and their spiritual significance across religious traditions
          </p>
        </section>

        <Tabs defaultValue="sites" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="sites">Sacred Sites</TabsTrigger>
            <TabsTrigger value="pilgrimage">Pilgrimage Centers</TabsTrigger>
            <TabsTrigger value="preservation">Preservation</TabsTrigger>
          </TabsList>

          <TabsContent value="sites" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {sacredSites.map((site) => (
                <Card key={site.tradition}>
                  <CardHeader>
                    <CardTitle>{site.tradition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{site.overview}</p>

                      {site.sites.map((s) => (
                        <div key={s.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{s.name}</h3>
                          <p className="text-muted-foreground">{s.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Features</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {s.features.map((feature) => (
                                  <li key={feature}>{feature}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Significance</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {s.significance.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-4">
                            {s.practices.map((practice) => (
                              <div key={practice.type} className="space-y-2">
                                <h4 className="font-semibold">{practice.type}</h4>
                                <ul className="list-disc list-inside text-sm text-muted-foreground">
                                  {practice.elements.map((element) => (
                                    <li key={element}>{element}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <h4 className="font-semibold">Preservation Challenges</h4>
                          <ul className="list-disc list-inside text-sm text-muted-foreground">
                            {site.preservation.challenges.map((challenge) => (
                              <li key={challenge}>{challenge}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold">Preservation Methods</h4>
                          <ul className="list-disc list-inside text-sm text-muted-foreground">
                            {site.preservation.methods.map((method) => (
                              <li key={method}>{method}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold">Study Resources:</h4>
                        {site.resources.map((resource) => (
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

          <TabsContent value="pilgrimage" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pilgrimageSites.map((pilgrimage) => (
                <Card key={pilgrimage.category}>
                  <CardHeader>
                    <CardTitle>{pilgrimage.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{pilgrimage.description}</p>

                      {pilgrimage.destinations.map((destination) => (
                        <div key={destination.name} className="space-y-2">
                          <h4 className="font-semibold">{destination.name}</h4>
                          <div>
                            <h5 className="text-sm font-medium">Features:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {destination.features.map((feature) => (
                                <li key={feature}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Practices:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {destination.practices.map((practice) => (
                                <li key={practice}>{practice}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      {pilgrimage.routes.map((route) => (
                        <div key={route.name} className="space-y-2">
                          <h4 className="font-semibold">{route.name}</h4>
                          <div>
                            <h5 className="text-sm font-medium">Elements:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {route.elements.map((element) => (
                                <li key={element}>{element}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Significance:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {route.significance.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {pilgrimage.resources.map((resource) => (
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

          <TabsContent value="preservation" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {preservationMethods.map((method) => (
                <Card key={method.category}>
                  <CardHeader>
                    <CardTitle>{method.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{method.description}</p>

                      {method.methods.map((m) => (
                        <div key={m.name} className="space-y-2">
                          <h4 className="font-semibold">{m.name}</h4>
                          <div>
                            <h5 className="text-sm font-medium">Techniques:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {m.techniques.map((technique) => (
                                <li key={technique}>{technique}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Applications:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {m.applications.map((application) => (
                                <li key={application}>{application}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      {method.challenges.map((challenge) => (
                        <div key={challenge.name} className="space-y-2">
                          <h4 className="font-semibold">{challenge.name}</h4>
                          <div>
                            <h5 className="text-sm font-medium">Issues:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {challenge.issues.map((issue) => (
                                <li key={issue}>{issue}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Solutions:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {challenge.solutions.map((solution) => (
                                <li key={solution}>{solution}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {method.resources.map((resource) => (
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
              href="/studies/themes/space/geography"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Geography →
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