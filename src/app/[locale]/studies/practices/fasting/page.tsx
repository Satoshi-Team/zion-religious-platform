import React from 'react'
import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sacred Fasting Spiritual Abstinence | Sacred Studies",
  description: "Explore sacred fasting and spiritual abstinence practices across traditions. In-depth analysis of fasting methods, spiritual discipline, and sacred abstinence.",
  openGraph: {
    title: "Sacred Fasting & Spiritual Abstinence",
    description: "Comprehensive exploration of sacred fasting and spiritual abstinence practices across traditions.",
    type: "website",
    images: [{ url: "/images/og/sacred-fasting.jpg" }]
  },
  keywords: [
    "sacred fasting",
    "spiritual abstinence",
    "fasting methods",
    "spiritual discipline",
    "religious fasting",
    "sacred abstinence",
    "fasting traditions",
    "spiritual practices",
    "sacred studies"
  ]
}

interface FastingTradition {
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

const fastingTraditions: FastingTradition[] = [
  {
    tradition: "Sacred Fasting",
    overview: "Traditional fasting practices from major spiritual traditions",
    practices: [
      {
        name: "Sacred Abstinence",
        description: "Practices of sacred abstinence and spiritual discipline",
        principles: [
          "Sacred discipline",
          "Divine purification",
          "Spiritual cleansing",
          "Holy dedication"
        ],
        methods: [
          "Food abstinence",
          "Sacred discipline",
          "Divine purification",
          "Holy dedication"
        ],
        significance: [
          "Divine purification",
          "Sacred discipline",
          "Spiritual transformation",
          "Holy presence"
        ]
      },
      {
        name: "Spiritual Discipline",
        description: "Sacred practices of spiritual discipline",
        principles: [
          "Sacred discipline",
          "Divine dedication",
          "Holy commitment",
          "Spiritual power"
        ],
        methods: [
          "Discipline practice",
          "Sacred dedication",
          "Divine commitment",
          "Holy abstinence"
        ],
        significance: [
          "Sacred empowerment",
          "Divine blessing",
          "Spiritual awakening",
          "Holy transformation"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Fasting: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Fasting-Comprehensive-Guide-Practice/dp/0801046496?tag=zion0ba-20",
        description: "Guide to sacred fasting practices"
      },
      {
        title: "The Art of Spiritual Discipline",
        link: "https://www.amazon.com/Art-Spiritual-Discipline-Traditional-Methods/dp/0802837528?tag=zion0ba-20",
        description: "Overview of traditional discipline methods"
      }
    ]
  },
  {
    tradition: "Sacred Abstinence",
    overview: "Traditional practices of sacred abstinence and spiritual discipline",
    practices: [
      {
        name: "Divine Discipline",
        description: "Practices of divine discipline and sacred dedication",
        principles: [
          "Sacred dedication",
          "Divine discipline",
          "Holy commitment",
          "Spiritual power"
        ],
        methods: [
          "Discipline practice",
          "Sacred dedication",
          "Divine commitment",
          "Holy abstinence"
        ],
        significance: [
          "Sacred discipline",
          "Divine dedication",
          "Spiritual power",
          "Holy presence"
        ]
      },
      {
        name: "Sacred Discipline",
        description: "Practices centered on sacred discipline",
        principles: [
          "Holy dedication",
          "Divine discipline",
          "Sacred commitment",
          "Spiritual power"
        ],
        methods: [
          "Discipline practice",
          "Sacred dedication",
          "Divine commitment",
          "Holy abstinence"
        ],
        significance: [
          "Sacred dedication",
          "Divine discipline",
          "Holy presence",
          "Spiritual transformation"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Abstinence: A Guide to Practice",
        link: "https://www.amazon.com/Sacred-Abstinence-Guide-Practice-Traditional/dp/0801046504?tag=zion0ba-20",
        description: "Guide to sacred abstinence practices"
      },
      {
        title: "Divine Discipline: Traditional Methods",
        link: "https://www.amazon.com/Divine-Discipline-Traditional-Methods-Practice/dp/0802837536?tag=zion0ba-20",
        description: "Overview of divine discipline practices"
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
    method: "Fasting Practice",
    description: "Methods for engaging in sacred fasting practices",
    aspects: [
      {
        name: "Abstinence Methods",
        principles: [
          "Sacred discipline",
          "Divine dedication",
          "Holy commitment",
          "Spiritual power"
        ],
        practices: [
          "Food abstinence",
          "Sacred discipline",
          "Divine dedication",
          "Holy commitment"
        ],
        applications: [
          "Sacred practice",
          "Divine discipline",
          "Holy presence",
          "Spiritual transformation"
        ]
      },
      {
        name: "Discipline Methods",
        principles: [
          "Sacred dedication",
          "Divine discipline",
          "Holy commitment",
          "Spiritual power"
        ],
        practices: [
          "Discipline practice",
          "Sacred dedication",
          "Divine commitment",
          "Holy abstinence"
        ],
        applications: [
          "Sacred empowerment",
          "Divine blessing",
          "Spiritual awakening",
          "Holy transformation"
        ]
      }
    ],
    resources: [
      {
        title: "Fasting Practice: A Comprehensive Guide",
        link: "https://www.amazon.com/Fasting-Practice-Comprehensive-Guide-Methods/dp/0800663974?tag=zion0ba-20",
        description: "Guide to fasting practice methods"
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
    approach: "Modern Fasting",
    description: "Contemporary approaches to sacred fasting practices",
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
        title: "Modern Sacred Fasting",
        link: "https://www.amazon.com/Modern-Sacred-Fasting-Contemporary-Approaches/dp/0800698790?tag=zion0ba-20",
        description: "Contemporary methods in sacred fasting"
      }
    ]
  }
]

export default function SacredFastingPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Sacred Fasting & Spiritual Abstinence</h1>
          <p className="text-xl text-muted-foreground">
            Explore fasting traditions and methods of spiritual discipline
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Fasting Traditions</TabsTrigger>
            <TabsTrigger value="methods">Practice Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {fastingTraditions.map((tradition) => (
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
              href="/studies/practices/prayer"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Prayer Methods →
            </Link>
            <Link 
              href="/studies/practices/devotion"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Devotional Practices →
            </Link>
            <Link 
              href="/studies/practices/ritual"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Rituals →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 