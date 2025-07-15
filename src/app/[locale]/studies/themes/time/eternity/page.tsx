import React from 'react'
import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sacred Eternity & Divine Timelessness | Religious Studies",
  description: "Explore religious concepts of eternity, timelessness, and transcendent reality across world traditions. In-depth analysis of eternal existence, divine nature, and mystical understanding.",
  openGraph: {
    title: "Sacred Eternity & Divine Timelessness",
    description: "Comprehensive guide to religious concepts of eternity and timeless reality across traditions.",
    type: "website",
    images: [{ url: "/images/og/sacred-eternity.jpg" }]
  },
  keywords: [
    "sacred eternity",
    "divine timelessness",
    "eternal existence",
    "transcendent reality",
    "mystical time",
    "religious metaphysics",
    "spiritual temporality",
    "divine nature",
    "sacred infinity",
    "timeless wisdom"
  ]
}

interface EternalConcept {
  tradition: string
  overview: string
  concepts: {
    name: string
    description: string
    aspects: string[]
    implications: string[]
  }[]
  practices: {
    name: string
    description: string
    methods: string[]
    benefits: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const eternalConcepts: EternalConcept[] = [
  {
    tradition: "Mystical Traditions",
    overview: "Direct experiential understanding of timeless reality",
    concepts: [
      {
        name: "Eternal Now",
        description: "Transcendent present moment beyond temporal sequence",
        aspects: [
          "Timeless awareness",
          "Non-dual experience",
          "Mystical presence",
          "Immediate knowing"
        ],
        implications: [
          "Direct realization",
          "Transcendence of past/future",
          "Unity consciousness",
          "Experiential wisdom"
        ]
      },
      {
        name: "Divine Unity",
        description: "Absolute reality beyond temporal division",
        aspects: [
          "Undifferentiated being",
          "Pure consciousness",
          "Ultimate reality",
          "Transcendent ground"
        ],
        implications: [
          "Non-dual awareness",
          "Mystical union",
          "Sacred knowledge",
          "Transformative insight"
        ]
      }
    ],
    practices: [
      {
        name: "Contemplative Methods",
        description: "Practices for experiencing timeless reality",
        methods: [
          "Silent meditation",
          "Sacred presence",
          "Mystical contemplation",
          "Direct inquiry"
        ],
        benefits: [
          "Transcendent awareness",
          "Spiritual realization",
          "Inner transformation",
          "Sacred understanding"
        ]
      },
      {
        name: "Sacred Rituals",
        description: "Ceremonial approaches to eternal reality",
        methods: [
          "Sacred chanting",
          "Ritual gestures",
          "Sacred space creation",
          "Symbolic enactment"
        ],
        benefits: [
          "Divine connection",
          "Sacred alignment",
          "Spiritual attunement",
          "Mystical opening"
        ]
      }
    ],
    resources: [
      {
        title: "Mystical Experience and Eternal Now",
        link: "https://www.amazon.com/Mystical-Experience-Eternal-Now-Consciousness/dp/0812693655?tag=zion0ba-20",
        description: "Analysis of mystical approaches to timeless reality"
      }
    ]
  },
  {
    tradition: "Philosophical Traditions",
    overview: "Conceptual understanding of eternal principles",
    concepts: [
      {
        name: "Divine Eternity",
        description: "Philosophical analysis of God's relation to time",
        aspects: [
          "Timeless existence",
          "Perfect being",
          "Eternal presence",
          "Divine attributes"
        ],
        implications: [
          "Divine omniscience",
          "Perfect simplicity",
          "Unchanging nature",
          "Absolute reality"
        ]
      },
      {
        name: "Eternal Forms",
        description: "Unchanging principles of reality",
        aspects: [
          "Platonic ideas",
          "Universal truths",
          "Essential natures",
          "Archetypal forms"
        ],
        implications: [
          "Metaphysical foundation",
          "Eternal knowledge",
          "Universal order",
          "Divine wisdom"
        ]
      }
    ],
    practices: [
      {
        name: "Philosophical Contemplation",
        description: "Rational investigation of eternal truth",
        methods: [
          "Logical analysis",
          "Metaphysical inquiry",
          "Conceptual reflection",
          "Dialectical reasoning"
        ],
        benefits: [
          "Intellectual clarity",
          "Metaphysical insight",
          "Rational understanding",
          "Philosophical wisdom"
        ]
      },
      {
        name: "Wisdom Practices",
        description: "Methods for accessing eternal knowledge",
        methods: [
          "Sacred study",
          "Contemplative reading",
          "Philosophical dialogue",
          "Wisdom transmission"
        ],
        benefits: [
          "Deep understanding",
          "Intellectual vision",
          "Wisdom development",
          "Truth realization"
        ]
      }
    ],
    resources: [
      {
        title: "Divine Eternity and Philosophical Thought",
        link: "https://www.amazon.com/Divine-Eternity-Philosophical-Perspectives/dp/0198837828?tag=zion0ba-20",
        description: "Philosophical analysis of divine eternity"
      }
    ]
  }
]

interface MetaphysicalSystem {
  tradition: string
  description: string
  aspects: {
    name: string
    elements: string[]
    implications: string[]
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

const metaphysicalSystems: MetaphysicalSystem[] = [
  {
    tradition: "Eastern Metaphysics",
    description: "Non-dual understanding of timeless reality",
    aspects: [
      {
        name: "Absolute Reality",
        elements: [
          "Pure consciousness",
          "Non-dual awareness",
          "Ultimate truth",
          "Transcendent being"
        ],
        implications: [
          "Beyond time-space",
          "Unborn nature",
          "Eternal presence",
          "Ultimate identity"
        ]
      },
      {
        name: "Relative Reality",
        elements: [
          "Phenomenal world",
          "Temporal existence",
          "Manifest reality",
          "Conditional being"
        ],
        implications: [
          "Apparent change",
          "Cyclic nature",
          "Interdependence",
          "Sacred play"
        ]
      }
    ],
    practices: [
      {
        name: "Direct Inquiry",
        methods: [
          "Self-investigation",
          "Awareness practice",
          "Non-dual pointing",
          "Direct recognition"
        ],
        benefits: [
          "Self-realization",
          "Liberation",
          "Ultimate freedom",
          "Eternal peace"
        ]
      }
    ],
    resources: [
      {
        title: "Eastern Metaphysics and Timeless Being",
        link: "https://www.amazon.com/Eastern-Metaphysics-Ultimate-Reality/dp/0824868285?tag=zion0ba-20",
        description: "Analysis of Eastern approaches to timeless reality"
      }
    ]
  },
  {
    tradition: "Western Metaphysics",
    description: "Systematic analysis of eternal principles",
    aspects: [
      {
        name: "Divine Nature",
        elements: [
          "Perfect being",
          "Necessary existence",
          "Infinite nature",
          "Eternal presence"
        ],
        implications: [
          "Divine simplicity",
          "Perfect knowledge",
          "Unchanging truth",
          "Absolute reality"
        ]
      },
      {
        name: "Created Order",
        elements: [
          "Temporal world",
          "Contingent being",
          "Natural order",
          "Created reality"
        ],
        implications: [
          "Divine dependence",
          "Temporal sequence",
          "Causal order",
          "Purposeful design"
        ]
      }
    ],
    practices: [
      {
        name: "Theological Reflection",
        methods: [
          "Sacred reading",
          "Systematic analysis",
          "Contemplative study",
          "Spiritual dialogue"
        ],
        benefits: [
          "Divine understanding",
          "Spiritual wisdom",
          "Sacred knowledge",
          "Eternal truth"
        ]
      }
    ],
    resources: [
      {
        title: "Western Metaphysics and Divine Reality",
        link: "https://www.amazon.com/Western-Metaphysics-Divine-Nature/dp/0198789645?tag=zion0ba-20",
        description: "Analysis of Western approaches to eternal reality"
      }
    ]
  }
]

interface ExperientialDimension {
  category: string
  description: string
  aspects: {
    name: string
    elements: string[]
    practices: string[]
  }[]
  implications: {
    personal: string[]
    communal: string[]
  }
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const experientialDimensions: ExperientialDimension[] = [
  {
    category: "Mystical Experience",
    description: "Direct encounter with timeless reality",
    aspects: [
      {
        name: "Transcendent States",
        elements: [
          "Timeless awareness",
          "Non-dual consciousness",
          "Unity experience",
          "Sacred presence"
        ],
        practices: [
          "Deep meditation",
          "Contemplative prayer",
          "Sacred ritual",
          "Mystical practices"
        ]
      },
      {
        name: "Transformative Insights",
        elements: [
          "Direct knowing",
          "Spiritual awakening",
          "Ultimate truth",
          "Sacred vision"
        ],
        practices: [
          "Self-inquiry",
          "Wisdom teachings",
          "Sacred transmission",
          "Direct pointing"
        ]
      }
    ],
    implications: {
      personal: [
        "Spiritual transformation",
        "Inner awakening",
        "Sacred understanding",
        "Divine realization"
      ],
      communal: [
        "Wisdom transmission",
        "Spiritual guidance",
        "Sacred community",
        "Mystical tradition"
      ]
    },
    resources: [
      {
        title: "Mystical Experience and Sacred Reality",
        link: "https://www.amazon.com/Mystical-Experience-Sacred-Reality/dp/0791452948?tag=zion0ba-20",
        description: "Analysis of mystical encounters with timeless reality"
      }
    ]
  },
  {
    category: "Sacred Practice",
    description: "Methods for accessing eternal reality",
    aspects: [
      {
        name: "Contemplative Methods",
        elements: [
          "Silent presence",
          "Sacred attention",
          "Divine remembrance",
          "Spiritual practice"
        ],
        practices: [
          "Meditation techniques",
          "Prayer methods",
          "Ritual observance",
          "Sacred study"
        ]
      },
      {
        name: "Wisdom Transmission",
        elements: [
          "Direct teaching",
          "Sacred lineage",
          "Spiritual guidance",
          "Traditional methods"
        ],
        practices: [
          "Teacher-student relationship",
          "Sacred instruction",
          "Wisdom dialogue",
          "Traditional training"
        ]
      }
    ],
    implications: {
      personal: [
        "Spiritual development",
        "Sacred understanding",
        "Inner transformation",
        "Divine connection"
      ],
      communal: [
        "Traditional preservation",
        "Spiritual community",
        "Sacred transmission",
        "Cultural continuity"
      ]
    },
    resources: [
      {
        title: "Sacred Practice and Eternal Truth",
        link: "https://www.amazon.com/Sacred-Practice-Eternal-Truth/dp/1626258945?tag=zion0ba-20",
        description: "Guide to practices for accessing timeless reality"
      }
    ]
  }
]

export default function SacredEternityPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Sacred Eternity & Divine Timelessness</h1>
          <p className="text-xl text-muted-foreground">
            Explore religious concepts of eternity, timelessness, and transcendent reality across traditions
          </p>
        </section>

        <Tabs defaultValue="concepts" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="concepts">Eternal Concepts</TabsTrigger>
            <TabsTrigger value="metaphysics">Metaphysical Systems</TabsTrigger>
            <TabsTrigger value="experience">Experiential Dimensions</TabsTrigger>
          </TabsList>

          <TabsContent value="concepts" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {eternalConcepts.map((tradition) => (
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
                              <h4 className="font-semibold">Aspects</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {concept.aspects.map((aspect) => (
                                  <li key={aspect}>{aspect}</li>
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

                      {tradition.practices.map((practice) => (
                        <div key={practice.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{practice.name}</h3>
                          <p className="text-muted-foreground">{practice.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Methods</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {practice.methods.map((method) => (
                                  <li key={method}>{method}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Benefits</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {practice.benefits.map((benefit) => (
                                  <li key={benefit}>{benefit}</li>
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

          <TabsContent value="metaphysics" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {metaphysicalSystems.map((system) => (
                <Card key={system.tradition}>
                  <CardHeader>
                    <CardTitle>{system.tradition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{system.description}</p>

                      {system.aspects.map((aspect) => (
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

                      {system.practices.map((practice) => (
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
                        {system.resources.map((resource) => (
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

          <TabsContent value="experience" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experientialDimensions.map((dimension) => (
                <Card key={dimension.category}>
                  <CardHeader>
                    <CardTitle>{dimension.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{dimension.description}</p>

                      {dimension.aspects.map((aspect) => (
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
                            <h5 className="text-sm font-medium">Practices:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {aspect.practices.map((practice) => (
                                <li key={practice}>{practice}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Implications:</h4>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <h5 className="text-sm font-medium">Personal:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {dimension.implications.personal.map((implication) => (
                                <li key={implication}>{implication}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Communal:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {dimension.implications.communal.map((implication) => (
                                <li key={implication}>{implication}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {dimension.resources.map((resource) => (
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
              href="/studies/themes/time/historical"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Historical Time →
            </Link>
            <Link 
              href="/studies/themes/time/eschatology"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Eschatology →
            </Link>
            <Link 
              href="/studies/themes/spirituality/mysticism"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Mysticism →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 