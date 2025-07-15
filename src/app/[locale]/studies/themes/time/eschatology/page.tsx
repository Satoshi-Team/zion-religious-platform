import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Eschatology & End Times | Sacred Studies",
  description: "Explore religious perspectives on eschatology, end times, and ultimate destiny across world traditions. In-depth analysis of apocalyptic literature, prophetic traditions, and final fulfillment.",
  openGraph: {
    title: "Religious Eschatology & End Times",
    description: "Comprehensive guide to religious eschatology and end-time beliefs across traditions.",
    type: "website",
    images: [{ url: "/images/og/religious-eschatology.jpg" }]
  },
  keywords: [
    "religious eschatology",
    "end times",
    "apocalyptic literature",
    "prophetic traditions",
    "final destiny",
    "ultimate fulfillment",
    "messianic age",
    "divine judgment",
    "sacred prophecy",
    "religious salvation"
  ]
}

interface EschatologicalTradition {
  tradition: string
  overview: string
  concepts: {
    name: string
    description: string
    elements: string[]
    implications: string[]
  }[]
  texts: {
    name: string
    description: string
    themes: string[]
    significance: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const eschatologicalTraditions: EschatologicalTradition[] = [
  {
    tradition: "Abrahamic Traditions",
    overview: "Linear view of history culminating in divine fulfillment",
    concepts: [
      {
        name: "Messianic Age",
        description: "Final era of universal peace and divine knowledge",
        elements: [
          "Universal redemption",
          "Divine manifestation",
          "World transformation",
          "Spiritual fulfillment"
        ],
        implications: [
          "Hope for future",
          "Moral responsibility",
          "Divine purpose",
          "Ultimate justice"
        ]
      },
      {
        name: "Divine Judgment",
        description: "Final reckoning and cosmic justice",
        elements: [
          "Universal accountability",
          "Moral evaluation",
          "Divine justice",
          "Eternal consequences"
        ],
        implications: [
          "Ethical living",
          "Personal responsibility",
          "Ultimate meaning",
          "Cosmic order"
        ]
      }
    ],
    texts: [
      {
        name: "Apocalyptic Literature",
        description: "Revelatory texts about end times",
        themes: [
          "Cosmic battles",
          "Divine intervention",
          "World transformation",
          "Final triumph"
        ],
        significance: [
          "Hope in suffering",
          "Divine assurance",
          "Moral guidance",
          "Ultimate meaning"
        ]
      },
      {
        name: "Prophetic Traditions",
        description: "Predictions of future events and final destiny",
        themes: [
          "Divine warning",
          "Moral reform",
          "Future hope",
          "Ultimate restoration"
        ],
        significance: [
          "Ethical guidance",
          "Social reform",
          "Spiritual renewal",
          "Historical purpose"
        ]
      }
    ],
    resources: [
      {
        title: "Abrahamic Eschatology: A Comparative Study",
        link: "https://www.amazon.com/Abrahamic-Eschatology-Comparative-Religious-Studies/dp/0195305027?tag=zion0ba-20",
        description: "Comprehensive analysis of end-time beliefs in Abrahamic traditions"
      }
    ]
  },
  {
    tradition: "Eastern Traditions",
    overview: "Cyclical view of time with recurring patterns of dissolution and renewal",
    concepts: [
      {
        name: "Cosmic Cycles",
        description: "Recurring patterns of creation and dissolution",
        elements: [
          "Time cycles",
          "World ages",
          "Cosmic dissolution",
          "Universal renewal"
        ],
        implications: [
          "Eternal recurrence",
          "Cosmic harmony",
          "Natural order",
          "Ultimate unity"
        ]
      },
      {
        name: "Ultimate Liberation",
        description: "Final release from cyclic existence",
        elements: [
          "Spiritual freedom",
          "Ultimate reality",
          "Divine union",
          "Transcendent being"
        ],
        implications: [
          "Spiritual practice",
          "Inner transformation",
          "Ultimate truth",
          "Final peace"
        ]
      }
    ],
    texts: [
      {
        name: "Puranic Literature",
        description: "Sacred texts describing cosmic cycles",
        themes: [
          "World ages",
          "Divine manifestations",
          "Cosmic order",
          "Universal patterns"
        ],
        significance: [
          "Cosmic understanding",
          "Divine wisdom",
          "Life guidance",
          "Ultimate purpose"
        ]
      },
      {
        name: "Wisdom Traditions",
        description: "Teachings about ultimate reality and liberation",
        themes: [
          "Ultimate truth",
          "Spiritual freedom",
          "Divine nature",
          "Final realization"
        ],
        significance: [
          "Spiritual guidance",
          "Liberation path",
          "Sacred knowledge",
          "Ultimate reality"
        ]
      }
    ],
    resources: [
      {
        title: "Eastern Eschatology and Cosmic Cycles",
        link: "https://www.amazon.com/Eastern-Eschatology-Cosmic-Cycles-Studies/dp/0791436289?tag=zion0ba-20",
        description: "Analysis of end-time concepts in Eastern traditions"
      }
    ]
  }
]

interface PropheticTradition {
  tradition: string
  description: string
  elements: {
    name: string
    aspects: string[]
    significance: string[]
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

const propheticTraditions: PropheticTradition[] = [
  {
    tradition: "Biblical Prophecy",
    description: "Divine revelation through prophetic figures",
    elements: [
      {
        name: "Messianic Prophecies",
        aspects: [
          "Divine promise",
          "Future redemption",
          "Universal peace",
          "Divine kingdom"
        ],
        significance: [
          "Hope foundation",
          "Moral guidance",
          "Divine plan",
          "Ultimate purpose"
        ]
      },
      {
        name: "Apocalyptic Visions",
        aspects: [
          "Cosmic events",
          "Divine intervention",
          "World judgment",
          "Final triumph"
        ],
        significance: [
          "Future hope",
          "Present courage",
          "Moral strength",
          "Ultimate meaning"
        ]
      }
    ],
    practices: [
      {
        name: "Prophetic Interpretation",
        methods: [
          "Textual study",
          "Historical analysis",
          "Symbolic understanding",
          "Contemporary application"
        ],
        benefits: [
          "Spiritual insight",
          "Moral guidance",
          "Future hope",
          "Present wisdom"
        ]
      }
    ],
    resources: [
      {
        title: "Biblical Prophecy and End Times",
        link: "https://www.amazon.com/Biblical-Prophecy-End-Times-Understanding/dp/0801066239?tag=zion0ba-20",
        description: "Guide to understanding biblical prophetic traditions"
      }
    ]
  },
  {
    tradition: "Islamic Prophecy",
    description: "Prophetic traditions about final events",
    elements: [
      {
        name: "Signs of the Hour",
        aspects: [
          "Major signs",
          "Minor signs",
          "World events",
          "Spiritual conditions"
        ],
        significance: [
          "Moral warning",
          "Spiritual preparation",
          "Divine guidance",
          "Ultimate accountability"
        ]
      },
      {
        name: "Final Events",
        aspects: [
          "Divine justice",
          "Universal gathering",
          "Final judgment",
          "Eternal destiny"
        ],
        significance: [
          "Moral living",
          "Spiritual awareness",
          "Divine fear",
          "Ultimate hope"
        ]
      }
    ],
    practices: [
      {
        name: "Prophetic Study",
        methods: [
          "Hadith analysis",
          "Quranic interpretation",
          "Historical understanding",
          "Contemporary application"
        ],
        benefits: [
          "Spiritual guidance",
          "Moral preparation",
          "Future awareness",
          "Present wisdom"
        ]
      }
    ],
    resources: [
      {
        title: "Islamic Eschatology and Prophecy",
        link: "https://www.amazon.com/Islamic-Eschatology-Prophecy-Studies/dp/1563245329?tag=zion0ba-20",
        description: "Analysis of Islamic prophetic traditions"
      }
    ]
  }
]

interface ModernInterpretation {
  category: string
  description: string
  approaches: {
    name: string
    methods: string[]
    insights: string[]
  }[]
  implications: {
    theological: string[]
    practical: string[]
  }
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const modernInterpretations: ModernInterpretation[] = [
  {
    category: "Contemporary Theology",
    description: "Modern theological interpretations of eschatology",
    approaches: [
      {
        name: "Liberation Theology",
        methods: [
          "Social analysis",
          "Prophetic critique",
          "Historical engagement",
          "Contemporary application"
        ],
        insights: [
          "Present transformation",
          "Social justice",
          "Divine action",
          "Human responsibility"
        ]
      },
      {
        name: "Process Theology",
        methods: [
          "Philosophical analysis",
          "Scientific dialogue",
          "Ecological awareness",
          "Evolutionary perspective"
        ],
        insights: [
          "Divine participation",
          "Cosmic process",
          "Ultimate hope",
          "Present meaning"
        ]
      }
    ],
    implications: {
      theological: [
        "Divine nature",
        "Human destiny",
        "Cosmic purpose",
        "Ultimate meaning"
      ],
      practical: [
        "Social engagement",
        "Environmental care",
        "Ethical living",
        "Spiritual practice"
      ]
    },
    resources: [
      {
        title: "Modern Approaches to Eschatology",
        link: "https://www.amazon.com/Modern-Approaches-Eschatology-Contemporary-Theology/dp/0800662091?tag=zion0ba-20",
        description: "Analysis of contemporary theological perspectives"
      }
    ]
  },
  {
    category: "Scientific Dialogue",
    description: "Integration of scientific and religious perspectives",
    approaches: [
      {
        name: "Cosmic Evolution",
        methods: [
          "Scientific research",
          "Theological reflection",
          "Interdisciplinary dialogue",
          "Synthetic understanding"
        ],
        insights: [
          "Universal destiny",
          "Cosmic purpose",
          "Human significance",
          "Ultimate meaning"
        ]
      },
      {
        name: "Environmental Ethics",
        methods: [
          "Ecological study",
          "Ethical analysis",
          "Religious wisdom",
          "Practical application"
        ],
        insights: [
          "Earth care",
          "Future responsibility",
          "Sacred nature",
          "Human stewardship"
        ]
      }
    ],
    implications: {
      theological: [
        "Divine action",
        "Natural processes",
        "Human purpose",
        "Cosmic meaning"
      ],
      practical: [
        "Environmental responsibility",
        "Scientific understanding",
        "Ethical behavior",
        "Spiritual awareness"
      ]
    },
    resources: [
      {
        title: "Science and Religious Eschatology",
        link: "https://www.amazon.com/Science-Religious-Eschatology-Dialogue/dp/0800698789?tag=zion0ba-20",
        description: "Integration of scientific and religious perspectives"
      }
    ]
  }
]

export default function EschatologyPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Religious Eschatology & End Times</h1>
          <p className="text-xl text-muted-foreground">
            Explore religious perspectives on eschatology, end times, and ultimate destiny across traditions
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Eschatological Traditions</TabsTrigger>
            <TabsTrigger value="prophecy">Prophetic Traditions</TabsTrigger>
            <TabsTrigger value="modern">Modern Interpretations</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {eschatologicalTraditions.map((tradition) => (
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

                      {tradition.texts.map((text) => (
                        <div key={text.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{text.name}</h3>
                          <p className="text-muted-foreground">{text.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Themes</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {text.themes.map((theme) => (
                                  <li key={theme}>{theme}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Significance</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {text.significance.map((item) => (
                                  <li key={item}>{item}</li>
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

          <TabsContent value="prophecy" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {propheticTraditions.map((tradition) => (
                <Card key={tradition.tradition}>
                  <CardHeader>
                    <CardTitle>{tradition.tradition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{tradition.description}</p>

                      {tradition.elements.map((element) => (
                        <div key={element.name} className="space-y-2">
                          <h4 className="font-semibold">{element.name}</h4>
                          <div>
                            <h5 className="text-sm font-medium">Aspects:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {element.aspects.map((aspect) => (
                                <li key={aspect}>{aspect}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Significance:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {element.significance.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      {tradition.practices.map((practice) => (
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

          <TabsContent value="modern" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modernInterpretations.map((interpretation) => (
                <Card key={interpretation.category}>
                  <CardHeader>
                    <CardTitle>{interpretation.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{interpretation.description}</p>

                      {interpretation.approaches.map((approach) => (
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
                            <h5 className="text-sm font-medium">Insights:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {approach.insights.map((insight) => (
                                <li key={insight}>{insight}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Implications:</h4>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <h5 className="text-sm font-medium">Theological:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {interpretation.implications.theological.map((implication) => (
                                <li key={implication}>{implication}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Practical:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {interpretation.implications.practical.map((implication) => (
                                <li key={implication}>{implication}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {interpretation.resources.map((resource) => (
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
              href="/studies/themes/time/eternity"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Eternity →
            </Link>
            <Link 
              href="/studies/themes/time/historical"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Historical Time →
            </Link>
            <Link 
              href="/studies/themes/time/calendars"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Calendars →
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