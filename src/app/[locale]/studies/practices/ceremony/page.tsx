import React from 'react'
import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sacred Ceremonies & Holy Observances | Sacred Studies",
  description: "Explore sacred ceremonies and holy observances across traditions. In-depth analysis of ceremonial practices, ritual observances, and sacred celebrations.",
  openGraph: {
    title: "Sacred Ceremonies & Holy Observances",
    description: "Comprehensive exploration of sacred ceremonies and holy observances across traditions.",
    type: "website",
    images: [{ url: "/images/og/sacred-ceremonies.jpg" }]
  },
  keywords: [
    "sacred ceremonies",
    "holy observances",
    "ceremonial practices",
    "ritual observances",
    "sacred celebrations",
    "spiritual ceremonies",
    "divine observances",
    "sacred practices",
    "ceremony studies",
    "sacred studies"
  ]
}

interface CeremonialTradition {
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

const ceremonialTraditions: CeremonialTradition[] = [
  {
    tradition: "Sacred Ceremonies",
    overview: "Traditional sacred ceremonies and holy observances",
    practices: [
      {
        name: "Holy Ceremonies",
        description: "Sacred practices of holy ceremonies and divine observances",
        principles: [
          "Sacred form",
          "Divine presence",
          "Holy order",
          "Spiritual sequence"
        ],
        methods: [
          "Sacred preparation",
          "Divine invocation",
          "Holy performance",
          "Spiritual completion"
        ],
        significance: [
          "Divine presence",
          "Sacred transformation",
          "Holy communion",
          "Spiritual power"
        ]
      },
      {
        name: "Sacred Observances",
        description: "Traditional practices of sacred observances and holy celebrations",
        principles: [
          "Sacred timing",
          "Divine order",
          "Holy rhythm",
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
        title: "Sacred Ceremonies: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Ceremonies-Comprehensive-Guide-Practice/dp/0801046510?tag=zion0ba-20",
        description: "Guide to sacred ceremonial practices"
      },
      {
        title: "The Art of Sacred Ceremony",
        link: "https://www.amazon.com/Art-Sacred-Ceremony-Traditional/dp/0802837557?tag=zion0ba-20",
        description: "Overview of traditional ceremonial methods"
      }
    ]
  },
  {
    tradition: "Holy Observances",
    overview: "Sacred observances and holy celebrations",
    practices: [
      {
        name: "Sacred Celebrations",
        description: "Traditional practices of sacred celebrations and holy festivals",
        principles: [
          "Sacred joy",
          "Divine celebration",
          "Holy festivity",
          "Spiritual gathering"
        ],
        methods: [
          "Sacred preparation",
          "Divine celebration",
          "Holy gathering",
          "Spiritual communion"
        ],
        significance: [
          "Sacred community",
          "Divine joy",
          "Holy unity",
          "Spiritual celebration"
        ]
      },
      {
        name: "Holy Festivals",
        description: "Sacred practices of holy festivals and divine celebrations",
        principles: [
          "Sacred timing",
          "Divine celebration",
          "Holy gathering",
          "Spiritual festivity"
        ],
        methods: [
          "Sacred preparation",
          "Divine celebration",
          "Holy gathering",
          "Spiritual communion"
        ],
        significance: [
          "Sacred unity",
          "Divine joy",
          "Holy community",
          "Spiritual celebration"
        ]
      }
    ],
    resources: [
      {
        title: "Holy Observances: A Guide to Practice",
        link: "https://www.amazon.com/Holy-Observances-Guide-Practice/dp/0801046529?tag=zion0ba-20",
        description: "Guide to holy observance practices"
      },
      {
        title: "The Way of Sacred Celebration",
        link: "https://www.amazon.com/Way-Sacred-Celebration-Traditional/dp/0802837565?tag=zion0ba-20",
        description: "Overview of traditional celebration methods"
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
    description: "Methods for engaging in sacred ceremonial practices",
    aspects: [
      {
        name: "Ceremonial Methods",
        principles: [
          "Sacred form",
          "Divine order",
          "Holy sequence",
          "Spiritual practice"
        ],
        practices: [
          "Sacred preparation",
          "Divine sequence",
          "Holy practice",
          "Spiritual completion"
        ],
        applications: [
          "Sacred ceremony",
          "Divine celebration",
          "Holy observance",
          "Spiritual practice"
        ]
      },
      {
        name: "Observance Methods",
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
          "Sacred celebration",
          "Divine festivity",
          "Holy gathering",
          "Spiritual communion"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Practice: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Practice-Comprehensive-Guide-Methods/dp/0800663977?tag=zion0ba-20",
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
    approach: "Modern Ceremony",
    description: "Contemporary approaches to sacred ceremonial practices",
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
        title: "Modern Sacred Ceremony",
        link: "https://www.amazon.com/Modern-Sacred-Ceremony-Contemporary-Approaches/dp/0800698804?tag=zion0ba-20",
        description: "Contemporary methods in sacred ceremony"
      }
    ]
  }
]

export default function SacredCeremoniesPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Sacred Ceremonies & Holy Observances</h1>
          <p className="text-xl text-muted-foreground">
            Explore ceremonial traditions and methods of sacred practice
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Ceremonial Traditions</TabsTrigger>
            <TabsTrigger value="methods">Practice Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {ceremonialTraditions.map((tradition) => (
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
              href="/studies/practices/ritual"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Ritual Practices →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 