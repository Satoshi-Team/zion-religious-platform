import React from 'react'
import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Worship Practices & Sacred Rituals | Sacred Studies",
  description: "Explore worship practices and sacred rituals across traditions. In-depth analysis of devotional methods, ritual practices, and sacred ceremonies.",
  openGraph: {
    title: "Worship Practices & Sacred Rituals",
    description: "Comprehensive exploration of worship practices and sacred rituals across traditions.",
    type: "website",
    images: [{ url: "/images/og/worship-practices.jpg" }]
  },
  keywords: [
    "worship practices",
    "sacred rituals",
    "devotional methods",
    "ritual practices",
    "sacred ceremonies",
    "religious worship",
    "spiritual practices",
    "sacred traditions",
    "worship studies",
    "sacred studies"
  ]
}

interface WorshipTradition {
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

const worshipTraditions: WorshipTradition[] = [
  {
    tradition: "Devotional Practices",
    overview: "Sacred practices focused on devotion and spiritual connection",
    practices: [
      {
        name: "Prayer Practices",
        description: "Methods of sacred prayer and devotional connection",
        principles: [
          "Sacred intention",
          "Divine connection",
          "Spiritual focus",
          "Sacred presence"
        ],
        methods: [
          "Contemplative prayer",
          "Devotional practice",
          "Sacred recitation",
          "Spiritual meditation"
        ],
        significance: [
          "Divine communion",
          "Spiritual growth",
          "Sacred connection",
          "Inner transformation"
        ]
      },
      {
        name: "Ritual Practices",
        description: "Sacred rituals and ceremonial practices",
        principles: [
          "Sacred form",
          "Ritual purity",
          "Divine presence",
          "Sacred space"
        ],
        methods: [
          "Ritual preparation",
          "Sacred ceremony",
          "Divine invocation",
          "Sacred offering"
        ],
        significance: [
          "Sacred participation",
          "Divine blessing",
          "Spiritual transformation",
          "Sacred communion"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Devotion: A Guide to Spiritual Practice",
        link: "https://www.amazon.com/Sacred-Devotion-Guide-Spiritual-Practice/dp/0801046432?tag=zion0ba-20",
        description: "Comprehensive guide to devotional practices"
      },
      {
        title: "Sacred Ritual: Traditional Methods",
        link: "https://www.amazon.com/Sacred-Ritual-Traditional-Methods-Practice/dp/0802837466?tag=zion0ba-20",
        description: "Overview of traditional ritual practices"
      }
    ]
  },
  {
    tradition: "Ceremonial Practices",
    overview: "Sacred ceremonies and ritual traditions",
    practices: [
      {
        name: "Sacred Ceremonies",
        description: "Traditional ceremonies and sacred observances",
        principles: [
          "Sacred tradition",
          "Ritual form",
          "Divine presence",
          "Sacred space"
        ],
        methods: [
          "Ceremonial preparation",
          "Sacred performance",
          "Divine invocation",
          "Ritual completion"
        ],
        significance: [
          "Sacred continuity",
          "Divine blessing",
          "Spiritual renewal",
          "Community unity"
        ]
      },
      {
        name: "Sacred Observances",
        description: "Regular practices and sacred observances",
        principles: [
          "Sacred timing",
          "Ritual purity",
          "Divine awareness",
          "Sacred intention"
        ],
        methods: [
          "Sacred preparation",
          "Ritual practice",
          "Divine remembrance",
          "Sacred completion"
        ],
        significance: [
          "Spiritual rhythm",
          "Sacred continuity",
          "Divine connection",
          "Community harmony"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Ceremonies: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Ceremonies-Comprehensive-Guide-Practice/dp/0801046440?tag=zion0ba-20",
        description: "Guide to sacred ceremonial practices"
      },
      {
        title: "Sacred Observances: Traditional Approaches",
        link: "https://www.amazon.com/Sacred-Observances-Traditional-Approaches-Practice/dp/0802837474?tag=zion0ba-20",
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
    method: "Sacred Practice",
    description: "Methods for engaging in sacred worship practices",
    aspects: [
      {
        name: "Devotional Methods",
        principles: [
          "Sacred intention",
          "Divine focus",
          "Spiritual presence",
          "Sacred awareness"
        ],
        practices: [
          "Sacred preparation",
          "Divine remembrance",
          "Spiritual practice",
          "Sacred completion"
        ],
        applications: [
          "Personal devotion",
          "Spiritual growth",
          "Sacred connection",
          "Divine communion"
        ]
      },
      {
        name: "Ritual Methods",
        principles: [
          "Sacred form",
          "Ritual purity",
          "Divine presence",
          "Sacred space"
        ],
        practices: [
          "Ritual preparation",
          "Sacred performance",
          "Divine invocation",
          "Sacred completion"
        ],
        applications: [
          "Sacred ceremony",
          "Divine blessing",
          "Spiritual transformation",
          "Community unity"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Practice: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Practice-Comprehensive-Guide-Methods/dp/0800663934?tag=zion0ba-20",
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
    approach: "Modern Worship",
    description: "Contemporary approaches to sacred worship practices",
    elements: [
      {
        name: "Contemporary Practice",
        features: [
          "Modern adaptation",
          "Cultural relevance",
          "Sacred authenticity",
          "Community engagement"
        ],
        methods: [
          "Contemporary forms",
          "Cultural integration",
          "Sacred preservation",
          "Community involvement"
        ],
        implications: [
          "Modern relevance",
          "Cultural harmony",
          "Sacred continuity",
          "Community vitality"
        ]
      },
      {
        name: "Integrated Practice",
        features: [
          "Traditional wisdom",
          "Modern context",
          "Sacred balance",
          "Community needs"
        ],
        methods: [
          "Traditional preservation",
          "Modern adaptation",
          "Sacred integration",
          "Community development"
        ],
        implications: [
          "Living tradition",
          "Cultural relevance",
          "Sacred vitality",
          "Community growth"
        ]
      }
    ],
    resources: [
      {
        title: "Modern Sacred Practice",
        link: "https://www.amazon.com/Modern-Sacred-Practice-Contemporary-Approaches/dp/0800698766?tag=zion0ba-20",
        description: "Contemporary methods in sacred practice"
      }
    ]
  }
]

export default function WorshipPracticesPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Worship Practices & Sacred Rituals</h1>
          <p className="text-xl text-muted-foreground">
            Explore worship traditions and methods of sacred practice
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Worship Traditions</TabsTrigger>
            <TabsTrigger value="methods">Practice Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {worshipTraditions.map((tradition) => (
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
              href="/studies/practices/prayer"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Prayer Methods →
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