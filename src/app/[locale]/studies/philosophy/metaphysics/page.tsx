import React from 'react'
import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Metaphysics & Sacred Philosophy | Sacred Studies",
  description: "Explore religious metaphysics and sacred philosophy across traditions. In-depth analysis of metaphysical principles, methods of inquiry, and philosophical approaches.",
  openGraph: {
    title: "Religious Metaphysics & Sacred Philosophy",
    description: "Comprehensive exploration of religious metaphysics and sacred philosophy across traditions.",
    type: "website",
    images: [{ url: "/images/og/religious-metaphysics.jpg" }]
  },
  keywords: [
    "religious metaphysics",
    "sacred philosophy",
    "metaphysical principles",
    "philosophical methods",
    "sacred inquiry",
    "religious philosophy",
    "metaphysical traditions",
    "philosophical studies",
    "sacred studies",
    "metaphysical studies"
  ]
}

interface MetaphysicalTradition {
  tradition: string
  overview: string
  principles: {
    name: string
    description: string
    concepts: string[]
    methods: string[]
    significance: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const metaphysicalTraditions: MetaphysicalTradition[] = [
  {
    tradition: "Sacred Metaphysics",
    overview: "Traditional metaphysical principles from religious traditions",
    principles: [
      {
        name: "Divine Reality",
        description: "Metaphysical principles concerning ultimate reality",
        concepts: [
          "Ultimate Being",
          "Divine Nature",
          "Sacred Reality",
          "Transcendent Truth"
        ],
        methods: [
          "Sacred contemplation",
          "Metaphysical inquiry",
          "Divine reflection",
          "Sacred study"
        ],
        significance: [
          "Ultimate understanding",
          "Sacred knowledge",
          "Divine wisdom",
          "Transcendent insight"
        ]
      },
      {
        name: "Sacred Principles",
        description: "Fundamental principles of sacred metaphysics",
        concepts: [
          "Sacred Order",
          "Divine Law",
          "Eternal Truth",
          "Sacred Harmony"
        ],
        methods: [
          "Sacred study",
          "Divine contemplation",
          "Metaphysical practice",
          "Sacred inquiry"
        ],
        significance: [
          "Sacred understanding",
          "Divine knowledge",
          "Eternal wisdom",
          "Sacred insight"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Metaphysics: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Metaphysics-Comprehensive-Guide-Practice/dp/0801046498?tag=zion0ba-20",
        description: "Guide to sacred metaphysical principles"
      },
      {
        title: "The Art of Sacred Philosophy",
        link: "https://www.amazon.com/Art-Sacred-Philosophy-Traditional-Methods/dp/0802837520?tag=zion0ba-20",
        description: "Overview of traditional philosophical methods"
      }
    ]
  },
  {
    tradition: "Religious Philosophy",
    overview: "Traditional philosophical approaches to sacred knowledge",
    principles: [
      {
        name: "Sacred Knowledge",
        description: "Philosophical principles of sacred understanding",
        concepts: [
          "Divine Wisdom",
          "Sacred Truth",
          "Eternal Knowledge",
          "Holy Understanding"
        ],
        methods: [
          "Sacred study",
          "Divine contemplation",
          "Holy reflection",
          "Sacred inquiry"
        ],
        significance: [
          "Sacred insight",
          "Divine understanding",
          "Holy wisdom",
          "Eternal knowledge"
        ]
      },
      {
        name: "Divine Wisdom",
        description: "Philosophical approaches to divine knowledge",
        concepts: [
          "Sacred Understanding",
          "Divine Truth",
          "Holy Wisdom",
          "Eternal Insight"
        ],
        methods: [
          "Sacred contemplation",
          "Divine study",
          "Holy reflection",
          "Sacred practice"
        ],
        significance: [
          "Sacred wisdom",
          "Divine knowledge",
          "Holy understanding",
          "Eternal truth"
        ]
      }
    ],
    resources: [
      {
        title: "Religious Philosophy: A Guide to Practice",
        link: "https://www.amazon.com/Religious-Philosophy-Guide-Practice-Traditional/dp/0801046501?tag=zion0ba-20",
        description: "Guide to religious philosophical practice"
      },
      {
        title: "Sacred Knowledge: Traditional Methods",
        link: "https://www.amazon.com/Sacred-Knowledge-Traditional-Methods-Practice/dp/0802837539?tag=zion0ba-20",
        description: "Overview of traditional knowledge practices"
      }
    ]
  }
]

interface InquiryMethod {
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

const inquiryMethods: InquiryMethod[] = [
  {
    method: "Sacred Inquiry",
    description: "Methods for engaging in sacred metaphysical inquiry",
    aspects: [
      {
        name: "Sacred Methods",
        principles: [
          "Sacred investigation",
          "Divine contemplation",
          "Holy reflection",
          "Spiritual inquiry"
        ],
        practices: [
          "Sacred study",
          "Divine contemplation",
          "Holy reflection",
          "Spiritual completion"
        ],
        applications: [
          "Sacred understanding",
          "Divine knowledge",
          "Holy wisdom",
          "Spiritual insight"
        ]
      },
      {
        name: "Philosophical Methods",
        principles: [
          "Sacred reasoning",
          "Divine logic",
          "Holy wisdom",
          "Spiritual understanding"
        ],
        practices: [
          "Sacred inquiry",
          "Divine study",
          "Holy contemplation",
          "Spiritual reflection"
        ],
        applications: [
          "Sacred knowledge",
          "Divine wisdom",
          "Holy understanding",
          "Spiritual truth"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Inquiry: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Inquiry-Comprehensive-Guide-Methods/dp/0800663969?tag=zion0ba-20",
        description: "Guide to sacred inquiry methods"
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
    approach: "Modern Metaphysics",
    description: "Contemporary approaches to sacred metaphysical inquiry",
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
        title: "Modern Sacred Metaphysics",
        link: "https://www.amazon.com/Modern-Sacred-Metaphysics-Contemporary-Approaches/dp/0800698790?tag=zion0ba-20",
        description: "Contemporary methods in sacred metaphysics"
      }
    ]
  }
]

export default function ReligiousMetaphysicsPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Religious Metaphysics & Sacred Philosophy</h1>
          <p className="text-xl text-muted-foreground">
            Explore metaphysical traditions and methods of sacred inquiry
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Metaphysical Traditions</TabsTrigger>
            <TabsTrigger value="methods">Inquiry Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {metaphysicalTraditions.map((tradition) => (
                <Card key={tradition.tradition}>
                  <CardHeader>
                    <CardTitle>{tradition.tradition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{tradition.overview}</p>

                      {tradition.principles.map((principle) => (
                        <div key={principle.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{principle.name}</h3>
                          <p className="text-muted-foreground">{principle.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Concepts</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {principle.concepts.map((concept) => (
                                  <li key={concept}>{concept}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Methods</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {principle.methods.map((method) => (
                                  <li key={method}>{method}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Significance</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {principle.significance.map((item) => (
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
              {inquiryMethods.map((method) => (
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
              href="/studies/philosophy/ethics"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Ethics →
            </Link>
            <Link 
              href="/studies/philosophy/epistemology"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Epistemology →
            </Link>
            <Link 
              href="/studies/philosophy/aesthetics"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Aesthetics →
            </Link>
            <Link 
              href="/studies/philosophy/logic"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Logic →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 