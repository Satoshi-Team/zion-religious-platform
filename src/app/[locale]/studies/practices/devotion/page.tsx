import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sacred Devotion & Devotional Practices | Sacred Studies",
  description: "Explore sacred devotion and devotional practices across traditions. In-depth analysis of devotional methods, sacred dedication, and spiritual devotion.",
  openGraph: {
    title: "Sacred Devotion & Devotional Practices",
    description: "Comprehensive exploration of sacred devotion and devotional practices across traditions.",
    type: "website",
    images: [{ url: "/images/og/sacred-devotion.jpg" }]
  },
  keywords: [
    "sacred devotion",
    "devotional practices",
    "spiritual dedication",
    "sacred dedication",
    "devotional methods",
    "spiritual devotion",
    "devotional traditions",
    "sacred practices",
    "devotional studies",
    "sacred studies"
  ]
}

interface DevotionalTradition {
  tradition: string
  overview: string
  practices: {
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

const devotionalTraditions: DevotionalTradition[] = [
  {
    tradition: "Sacred Devotion",
    overview: "Traditional devotional practices from major spiritual traditions",
    practices: [
      {
        name: "Heart Devotion",
        description: "Sacred practices of heart-centered devotion",
        principles: [
          "Divine love",
          "Sacred intimacy",
          "Spiritual surrender",
          "Heart opening"
        ],
        methods: [
          "Heart meditation",
          "Sacred chanting",
          "Divine remembrance",
          "Devotional prayer"
        ],
        significance: [
          "Divine communion",
          "Sacred intimacy",
          "Spiritual transformation",
          "Heart awakening"
        ]
      },
      {
        name: "Sacred Service",
        description: "Devotional practices through sacred service",
        principles: [
          "Selfless service",
          "Divine offering",
          "Sacred action",
          "Spiritual dedication"
        ],
        methods: [
          "Service meditation",
          "Sacred work",
          "Divine offering",
          "Devotional action"
        ],
        significance: [
          "Divine connection",
          "Sacred purpose",
          "Spiritual growth",
          "Heart purification"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Devotion: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Devotion-Comprehensive-Guide-Practice/dp/0801046472?tag=zion0ba-20",
        description: "Guide to sacred devotional practices"
      },
      {
        title: "The Art of Devotional Practice",
        link: "https://www.amazon.com/Art-Devotional-Practice-Traditional-Methods/dp/0802837504?tag=zion0ba-20",
        description: "Overview of traditional devotional methods"
      }
    ]
  },
  {
    tradition: "Spiritual Dedication",
    overview: "Traditional practices of spiritual dedication and sacred commitment",
    practices: [
      {
        name: "Sacred Dedication",
        description: "Practices of sacred dedication and spiritual commitment",
        principles: [
          "Divine commitment",
          "Sacred dedication",
          "Spiritual resolve",
          "Holy devotion"
        ],
        methods: [
          "Dedication ritual",
          "Sacred vows",
          "Spiritual practice",
          "Divine service"
        ],
        significance: [
          "Sacred commitment",
          "Divine alignment",
          "Spiritual growth",
          "Heart transformation"
        ]
      },
      {
        name: "Divine Love",
        description: "Practices centered on divine love and sacred intimacy",
        principles: [
          "Sacred love",
          "Divine intimacy",
          "Heart opening",
          "Spiritual union"
        ],
        methods: [
          "Love meditation",
          "Sacred intimacy",
          "Heart practice",
          "Divine communion"
        ],
        significance: [
          "Divine union",
          "Sacred love",
          "Heart awakening",
          "Spiritual intimacy"
        ]
      }
    ],
    resources: [
      {
        title: "Spiritual Dedication: A Guide to Practice",
        link: "https://www.amazon.com/Spiritual-Dedication-Guide-Practice-Traditional/dp/0801046480?tag=zion0ba-20",
        description: "Guide to spiritual dedication practices"
      },
      {
        title: "Sacred Love: Traditional Methods",
        link: "https://www.amazon.com/Sacred-Love-Traditional-Methods-Practice/dp/0802837512?tag=zion0ba-20",
        description: "Overview of divine love practices"
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
    method: "Devotional Practice",
    description: "Methods for engaging in sacred devotional practices",
    aspects: [
      {
        name: "Heart Methods",
        principles: [
          "Sacred love",
          "Divine intimacy",
          "Heart opening",
          "Spiritual surrender"
        ],
        practices: [
          "Heart meditation",
          "Sacred chanting",
          "Divine remembrance",
          "Devotional prayer"
        ],
        applications: [
          "Daily devotion",
          "Sacred service",
          "Divine communion",
          "Heart awakening"
        ]
      },
      {
        name: "Sacred Methods",
        principles: [
          "Divine dedication",
          "Sacred commitment",
          "Spiritual resolve",
          "Holy devotion"
        ],
        practices: [
          "Sacred ritual",
          "Divine service",
          "Spiritual practice",
          "Heart offering"
        ],
        applications: [
          "Sacred living",
          "Divine work",
          "Spiritual growth",
          "Heart transformation"
        ]
      }
    ],
    resources: [
      {
        title: "Devotional Practice: A Comprehensive Guide",
        link: "https://www.amazon.com/Devotional-Practice-Comprehensive-Guide-Methods/dp/0800663950?tag=zion0ba-20",
        description: "Guide to devotional practice methods"
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
    approach: "Modern Devotion",
    description: "Contemporary approaches to sacred devotional practices",
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
        title: "Modern Sacred Devotion",
        link: "https://www.amazon.com/Modern-Sacred-Devotion-Contemporary-Approaches/dp/0800698782?tag=zion0ba-20",
        description: "Contemporary methods in sacred devotion"
      }
    ]
  }
]

export default function DevotionalPracticesPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Sacred Devotion & Devotional Practices</h1>
          <p className="text-xl text-muted-foreground">
            Explore devotional traditions and methods of sacred practice
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Devotional Traditions</TabsTrigger>
            <TabsTrigger value="methods">Practice Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {devotionalTraditions.map((tradition) => (
                <Card key={tradition.tradition}>
                  <CardHeader>
                    <CardTitle>{tradition.tradition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{tradition.overview}</p>

                      {tradition.practices.map((practice) => (
                        <div key={practice.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{practice.name}</h3>
                          <p className="text-muted-foreground">{practice.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Principles</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {practice.principles.map((principle) => (
                                  <li key={principle}>{principle}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Methods</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {practice.methods.map((method) => (
                                  <li key={method}>{method}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Significance</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {practice.significance.map((item) => (
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
              href="/studies/practices/service"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Service →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 