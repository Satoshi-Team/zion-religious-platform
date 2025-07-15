import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Prayer Methods & Sacred Invocation | Sacred Studies",
  description: "Explore prayer methods and sacred invocation across traditions. In-depth analysis of devotional practices, contemplative prayer, and sacred communion.",
  openGraph: {
    title: "Prayer Methods & Sacred Invocation",
    description: "Comprehensive exploration of prayer methods and sacred invocation across traditions.",
    type: "website",
    images: [{ url: "/images/og/prayer-methods.jpg" }]
  },
  keywords: [
    "prayer methods",
    "sacred invocation",
    "devotional practices",
    "contemplative prayer",
    "sacred communion",
    "spiritual prayer",
    "divine connection",
    "sacred practices",
    "prayer studies",
    "sacred studies"
  ]
}

interface PrayerTradition {
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

const prayerTraditions: PrayerTradition[] = [
  {
    tradition: "Contemplative Prayer",
    overview: "Sacred methods of contemplative prayer and divine communion",
    practices: [
      {
        name: "Silent Prayer",
        description: "Sacred practices of silent communion and contemplation",
        principles: [
          "Sacred silence",
          "Divine presence",
          "Holy stillness",
          "Spiritual receptivity"
        ],
        methods: [
          "Sacred stillness",
          "Divine listening",
          "Holy presence",
          "Spiritual openness"
        ],
        significance: [
          "Divine communion",
          "Sacred presence",
          "Holy connection",
          "Spiritual depth"
        ]
      },
      {
        name: "Meditative Prayer",
        description: "Sacred practices of meditative prayer and contemplation",
        principles: [
          "Sacred focus",
          "Divine attention",
          "Holy mindfulness",
          "Spiritual awareness"
        ],
        methods: [
          "Sacred attention",
          "Divine contemplation",
          "Holy meditation",
          "Spiritual practice"
        ],
        significance: [
          "Divine awareness",
          "Sacred depth",
          "Holy presence",
          "Spiritual growth"
        ]
      }
    ],
    resources: [
      {
        title: "Contemplative Prayer: A Guide to Practice",
        link: "https://www.amazon.com/Contemplative-Prayer-Guide-Practice/dp/0801046499?tag=zion0ba-20",
        description: "Guide to contemplative prayer practices"
      },
      {
        title: "The Art of Sacred Prayer",
        link: "https://www.amazon.com/Art-Sacred-Prayer-Traditional/dp/0802837530?tag=zion0ba-20",
        description: "Overview of traditional prayer methods"
      }
    ]
  },
  {
    tradition: "Devotional Prayer",
    overview: "Sacred methods of devotional prayer and divine connection",
    practices: [
      {
        name: "Sacred Invocation",
        description: "Traditional practices of sacred invocation and divine connection",
        principles: [
          "Sacred devotion",
          "Divine love",
          "Holy connection",
          "Spiritual offering"
        ],
        methods: [
          "Sacred invocation",
          "Divine praise",
          "Holy devotion",
          "Spiritual offering"
        ],
        significance: [
          "Divine connection",
          "Sacred relationship",
          "Holy communion",
          "Spiritual intimacy"
        ]
      },
      {
        name: "Sacred Communion",
        description: "Sacred practices of divine communion and connection",
        principles: [
          "Sacred presence",
          "Divine communion",
          "Holy connection",
          "Spiritual intimacy"
        ],
        methods: [
          "Sacred presence",
          "Divine communion",
          "Holy connection",
          "Spiritual practice"
        ],
        significance: [
          "Divine intimacy",
          "Sacred union",
          "Holy presence",
          "Spiritual depth"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Prayer: A Guide to Practice",
        link: "https://www.amazon.com/Sacred-Prayer-Guide-Practice/dp/0801046502?tag=zion0ba-20",
        description: "Guide to sacred prayer practices"
      },
      {
        title: "The Way of Sacred Prayer",
        link: "https://www.amazon.com/Way-Sacred-Prayer-Traditional/dp/0802837549?tag=zion0ba-20",
        description: "Overview of traditional prayer methods"
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
    method: "Sacred Prayer",
    description: "Methods for engaging in sacred prayer practices",
    aspects: [
      {
        name: "Prayer Methods",
        principles: [
          "Sacred intention",
          "Divine presence",
          "Holy attention",
          "Spiritual practice"
        ],
        practices: [
          "Sacred preparation",
          "Divine invocation",
          "Holy practice",
          "Spiritual completion"
        ],
        applications: [
          "Sacred devotion",
          "Divine communion",
          "Holy connection",
          "Spiritual growth"
        ]
      },
      {
        name: "Devotional Methods",
        principles: [
          "Sacred devotion",
          "Divine love",
          "Holy offering",
          "Spiritual connection"
        ],
        practices: [
          "Sacred offering",
          "Divine praise",
          "Holy devotion",
          "Spiritual practice"
        ],
        applications: [
          "Sacred intimacy",
          "Divine relationship",
          "Holy communion",
          "Spiritual depth"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Prayer: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Prayer-Comprehensive-Guide-Methods/dp/0800663969?tag=zion0ba-20",
        description: "Guide to sacred prayer methods"
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
    approach: "Modern Prayer",
    description: "Contemporary approaches to sacred prayer practices",
    elements: [
      {
        name: "Contemporary Practice",
        features: [
          "Modern expression",
          "Personal authenticity",
          "Sacred connection",
          "Spiritual relevance"
        ],
        methods: [
          "Contemporary forms",
          "Personal expression",
          "Sacred connection",
          "Spiritual practice"
        ],
        implications: [
          "Modern relevance",
          "Personal authenticity",
          "Sacred vitality",
          "Spiritual growth"
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
        title: "Modern Sacred Prayer",
        link: "https://www.amazon.com/Modern-Sacred-Prayer-Contemporary-Approaches/dp/0800698790?tag=zion0ba-20",
        description: "Contemporary methods in sacred prayer"
      }
    ]
  }
]

export default function PrayerMethodsPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Prayer Methods & Sacred Invocation</h1>
          <p className="text-xl text-muted-foreground">
            Explore prayer traditions and methods of sacred practice
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Prayer Traditions</TabsTrigger>
            <TabsTrigger value="methods">Practice Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {prayerTraditions.map((tradition) => (
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
              href="/studies/practices/ritual"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Ritual Practices →
            </Link>
            <Link 
              href="/studies/practices/ceremony"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Ceremonies →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 