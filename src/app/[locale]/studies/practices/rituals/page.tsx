import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sacred Rituals & Religious Ceremonies | Sacred Studies",
  description: "Explore sacred rituals and religious ceremonies across traditions. In-depth analysis of ritual practices, ceremonial methods, and traditional observances.",
  openGraph: {
    title: "Sacred Rituals & Religious Ceremonies",
    description: "Comprehensive exploration of sacred rituals and religious ceremonies across traditions.",
    type: "website",
    images: [{ url: "/images/og/sacred-rituals.jpg" }]
  },
  keywords: [
    "sacred rituals",
    "religious ceremonies",
    "ritual practices",
    "ceremonial methods",
    "traditional observances",
    "religious rituals",
    "sacred ceremonies",
    "ritual traditions",
    "ritual studies",
    "sacred studies"
  ]
}

interface RitualTradition {
  tradition: string
  overview: string
  rituals: {
    name: string
    description: string
    principles: string[]
    methods: string[]
    significance: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const ritualTraditions: RitualTradition[] = [
  {
    tradition: "Sacred Rituals",
    overview: "Traditional sacred rituals from major religious traditions",
    rituals: [
      {
        name: "Purification Rituals",
        description: "Sacred practices of purification and cleansing",
        principles: [
          "Sacred purity",
          "Ritual cleansing",
          "Spiritual preparation",
          "Divine presence"
        ],
        methods: [
          "Water purification",
          "Sacred ablutions",
          "Ritual cleansing",
          "Spiritual preparation"
        ],
        significance: [
          "Spiritual purity",
          "Sacred preparation",
          "Divine receptivity",
          "Inner cleansing"
        ]
      },
      {
        name: "Consecration Rituals",
        description: "Sacred practices of blessing and consecration",
        principles: [
          "Sacred blessing",
          "Divine consecration",
          "Holy dedication",
          "Spiritual sanctification"
        ],
        methods: [
          "Sacred blessing",
          "Divine invocation",
          "Holy dedication",
          "Ritual consecration"
        ],
        significance: [
          "Sacred transformation",
          "Divine blessing",
          "Holy dedication",
          "Spiritual power"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Rituals: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Rituals-Comprehensive-Guide-Practice/dp/0801046472?tag=zion0ba-20",
        description: "Guide to sacred ritual practices"
      },
      {
        title: "The Art of Sacred Ritual",
        link: "https://www.amazon.com/Art-Sacred-Ritual-Traditional-Methods/dp/0802837504?tag=zion0ba-20",
        description: "Overview of traditional ritual methods"
      }
    ]
  },
  {
    tradition: "Ceremonial Practices",
    overview: "Traditional ceremonial practices and sacred observances",
    rituals: [
      {
        name: "Sacred Ceremonies",
        description: "Traditional ceremonies and holy observances",
        principles: [
          "Sacred form",
          "Divine order",
          "Holy sequence",
          "Spiritual presence"
        ],
        methods: [
          "Ceremonial preparation",
          "Sacred performance",
          "Divine invocation",
          "Holy completion"
        ],
        significance: [
          "Sacred continuity",
          "Divine blessing",
          "Holy presence",
          "Spiritual power"
        ]
      },
      {
        name: "Holy Observances",
        description: "Sacred observances and religious practices",
        principles: [
          "Sacred timing",
          "Divine rhythm",
          "Holy order",
          "Spiritual cycle"
        ],
        methods: [
          "Sacred timing",
          "Divine sequence",
          "Holy practice",
          "Spiritual observance"
        ],
        significance: [
          "Sacred harmony",
          "Divine order",
          "Holy rhythm",
          "Spiritual alignment"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Ceremonies: A Guide to Practice",
        link: "https://www.amazon.com/Sacred-Ceremonies-Guide-Practice-Traditional/dp/0801046480?tag=zion0ba-20",
        description: "Guide to sacred ceremonial practices"
      },
      {
        title: "Holy Observances: Traditional Methods",
        link: "https://www.amazon.com/Holy-Observances-Traditional-Methods-Practice/dp/0802837512?tag=zion0ba-20",
        description: "Overview of traditional observances"
      }
    ]
  }
]

interface PracticeMethod {
  method: string
  description: string
  aspects: {
    name: string
    principles: string[]
    practices: string[]
    applications: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const practiceMethods: PracticeMethod[] = [
  {
    method: "Ritual Practice",
    description: "Methods for engaging in sacred ritual practices",
    aspects: [
      {
        name: "Sacred Methods",
        principles: [
          "Sacred form",
          "Divine order",
          "Holy sequence",
          "Spiritual presence"
        ],
        practices: [
          "Sacred preparation",
          "Divine sequence",
          "Holy practice",
          "Spiritual completion"
        ],
        applications: [
          "Sacred ritual",
          "Divine ceremony",
          "Holy observance",
          "Spiritual practice"
        ]
      },
      {
        name: "Ceremonial Methods",
        principles: [
          "Sacred timing",
          "Divine order",
          "Holy rhythm",
          "Spiritual cycle"
        ],
        practices: [
          "Sacred timing",
          "Divine sequence",
          "Holy practice",
          "Spiritual observance"
        ],
        applications: [
          "Sacred ceremony",
          "Divine celebration",
          "Holy gathering",
          "Spiritual communion"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Practice: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Practice-Comprehensive-Guide-Methods/dp/0800663950?tag=zion0ba-20",
        description: "Guide to sacred practice methods"
      }
    ]
  }
]

interface ContemporaryApproach {
  approach: string
  description: string
  elements: {
    name: string
    features: string[]
    methods: string[]
    implications: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const contemporaryApproaches: ContemporaryApproach[] = [
  {
    approach: "Modern Ritual",
    description: "Contemporary approaches to sacred ritual practices",
    elements: [
      {
        name: "Contemporary Practice",
        features: [
          "Modern expression",
          "Cultural integration",
          "Sacred authenticity",
          "Personal relevance"
        ],
        methods: [
          "Contemporary forms",
          "Cultural expression",
          "Sacred preservation",
          "Personal integration"
        ],
        implications: [
          "Modern relevance",
          "Cultural harmony",
          "Sacred continuity",
          "Personal meaning"
        ]
      },
      {
        name: "Integrated Practice",
        features: [
          "Traditional wisdom",
          "Modern context",
          "Sacred balance",
          "Personal needs"
        ],
        methods: [
          "Traditional preservation",
          "Modern adaptation",
          "Sacred integration",
          "Personal development"
        ],
        implications: [
          "Living tradition",
          "Modern relevance",
          "Sacred vitality",
          "Personal growth"
        ]
      }
    ],
    resources: [
      {
        title: "Modern Sacred Ritual",
        link: "https://www.amazon.com/Modern-Sacred-Ritual-Contemporary-Approaches/dp/0800698782?tag=zion0ba-20",
        description: "Contemporary methods in sacred ritual"
      }
    ]
  }
]

export default function SacredRitualsPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Sacred Rituals & Religious Ceremonies</h1>
          <p className="text-xl text-muted-foreground">
            Explore ritual traditions and methods of sacred practice
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Ritual Traditions</TabsTrigger>
            <TabsTrigger value="methods">Practice Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {ritualTraditions.map((tradition) => (
                <Card key={tradition.tradition}>
                  <CardHeader>
                    <CardTitle>{tradition.tradition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{tradition.overview}</p>

                      {tradition.rituals.map((ritual) => (
                        <div key={ritual.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{ritual.name}</h3>
                          <p className="text-muted-foreground">{ritual.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Principles</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {ritual.principles.map((principle) => (
                                  <li key={principle}>{principle}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Methods</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {ritual.methods.map((method) => (
                                  <li key={method}>{method}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Significance</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {ritual.significance.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Recommended Resources:</h4>
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
            <div className="grid grid-cols-1 gap-6">
              {practiceMethods.map((method) => (
                <Card key={method.method}>
                  <CardHeader>
                    <CardTitle>{method.method}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{method.description}</p>

                      {method.aspects.map((aspect) => (
                        <div key={aspect.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{aspect.name}</h3>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Principles</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {aspect.principles.map((principle) => (
                                  <li key={principle}>{principle}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Practices</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {aspect.practices.map((practice) => (
                                  <li key={practice}>{practice}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Applications</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {aspect.applications.map((application) => (
                                <li key={application}>{application}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Recommended Resources:</h4>
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

          <TabsContent value="contemporary" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {contemporaryApproaches.map((approach) => (
                <Card key={approach.approach}>
                  <CardHeader>
                    <CardTitle>{approach.approach}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{approach.description}</p>

                      {approach.elements.map((element) => (
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
                              <h4 className="font-semibold">Methods</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {element.methods.map((method) => (
                                  <li key={method}>{method}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Implications</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {element.implications.map((implication) => (
                                <li key={implication}>{implication}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Recommended Resources:</h4>
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
              href="/studies/practices/worship"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Worship Practices →
            </Link>
            <Link 
              href="/studies/practices/meditation"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Meditation Practices →
            </Link>
            <Link 
              href="/studies/practices/prayer"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Prayer Methods →
            </Link>
            <Link 
              href="/studies/practices/festivals"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Festivals →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 