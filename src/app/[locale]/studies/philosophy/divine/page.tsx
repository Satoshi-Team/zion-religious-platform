import React from 'react'
import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Views of the Divine | Sacred Studies",
  description: "Explore religious perspectives on the divine nature across traditions. In-depth analysis of theological principles, divine attributes, and contemporary approaches.",
  openGraph: {
    title: "Religious Views of the Divine",
    description: "Comprehensive exploration of religious perspectives on divine nature.",
    type: "website",
    images: [{ url: "/images/og/religious-divine.jpg" }]
  },
  keywords: [
    "religious theology",
    "sacred divinity",
    "divine attributes",
    "theological frameworks",
    "sacred nature",
    "religious divinity",
    "theological traditions",
    "divine studies",
    "sacred studies",
    "theological studies"
  ]
}

interface DivineTradition {
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

const divineTraditions: DivineTradition[] = [
  {
    tradition: "Sacred Divinity",
    overview: "Traditional theological principles from religious traditions",
    principles: [
      {
        name: "Divine Nature",
        description: "Understanding of divine attributes and essence",
        concepts: [
          "Sacred attributes",
          "Divine essence",
          "Ultimate nature",
          "Holy being"
        ],
        methods: [
          "Sacred inquiry",
          "Theological reflection",
          "Divine contemplation",
          "Spiritual study"
        ],
        significance: [
          "Sacred understanding",
          "Divine knowledge",
          "Ultimate wisdom",
          "Holy insight"
        ]
      },
      {
        name: "Divine Presence",
        description: "Fundamental principles of divine manifestation",
        concepts: [
          "Sacred presence",
          "Divine manifestation",
          "Ultimate reality",
          "Holy presence"
        ],
        methods: [
          "Sacred study",
          "Theological analysis",
          "Divine reflection",
          "Spiritual inquiry"
        ],
        significance: [
          "Sacred knowledge",
          "Divine understanding",
          "Ultimate truth",
          "Holy wisdom"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Divinity: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Divinity-Comprehensive-Guide-Practice/dp/0801046498?tag=zion0ba-20",
        description: "Guide to sacred theological principles"
      },
      {
        title: "The Nature of Sacred Divinity",
        link: "https://www.amazon.com/Nature-Sacred-Divinity-Traditional-Methods/dp/0802837520?tag=zion0ba-20",
        description: "Overview of traditional theological methods"
      }
    ]
  },
  {
    tradition: "Religious Theology",
    overview: "Traditional theological approaches to divine nature",
    principles: [
      {
        name: "Divine Essence",
        description: "Principles of divine being",
        concepts: [
          "Sacred essence",
          "Divine nature",
          "Ultimate reality",
          "Holy being"
        ],
        methods: [
          "Sacred inquiry",
          "Theological study",
          "Divine reflection",
          "Spiritual analysis"
        ],
        significance: [
          "Sacred knowledge",
          "Divine understanding",
          "Ultimate wisdom",
          "Holy insight"
        ]
      },
      {
        name: "Divine Attributes",
        description: "Theological principles based on divine nature",
        concepts: [
          "Sacred attributes",
          "Divine qualities",
          "Ultimate being",
          "Holy nature"
        ],
        methods: [
          "Sacred reflection",
          "Theological inquiry",
          "Divine study",
          "Spiritual contemplation"
        ],
        significance: [
          "Sacred wisdom",
          "Divine knowledge",
          "Ultimate understanding",
          "Holy truth"
        ]
      }
    ],
    resources: [
      {
        title: "Religious Theology: A Guide to Practice",
        link: "https://www.amazon.com/Religious-Theology-Guide-Practice-Traditional/dp/0801046501?tag=zion0ba-20",
        description: "Guide to religious theological practice"
      },
      {
        title: "Sacred Divinity: Traditional Methods",
        link: "https://www.amazon.com/Sacred-Divinity-Traditional-Methods-Practice/dp/0802837539?tag=zion0ba-20",
        description: "Overview of traditional divine practices"
      }
    ]
  }
]

interface TheologicalMethod {
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

const theologicalMethods: TheologicalMethod[] = [
  {
    method: "Sacred Divinity",
    description: "Methods for engaging in sacred theological practice",
    aspects: [
      {
        name: "Sacred Methods",
        principles: [
          "Sacred essence",
          "Divine being",
          "Holy truth",
          "Ultimate reality"
        ],
        practices: [
          "Sacred inquiry",
          "Divine reflection",
          "Holy study",
          "Theological analysis"
        ],
        applications: [
          "Sacred understanding",
          "Divine knowledge",
          "Holy wisdom",
          "Ultimate insight"
        ]
      },
      {
        name: "Theological Methods",
        principles: [
          "Sacred truth",
          "Divine essence",
          "Holy reality",
          "Ultimate being"
        ],
        practices: [
          "Sacred study",
          "Divine inquiry",
          "Holy reflection",
          "Theological contemplation"
        ],
        applications: [
          "Sacred knowledge",
          "Divine understanding",
          "Holy truth",
          "Ultimate wisdom"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Divinity: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Divinity-Comprehensive-Guide-Methods/dp/0800663969?tag=zion0ba-20",
        description: "Guide to sacred theological methods"
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
    approach: "Modern Divinity",
    description: "Contemporary approaches to sacred theological practice",
    elements: [
      {
        name: "Contemporary Practice",
        features: [
          "Modern understanding",
          "Scientific integration",
          "Sacred authenticity",
          "Personal relevance"
        ],
        methods: [
          "Contemporary forms",
          "Scientific inquiry",
          "Sacred preservation",
          "Personal integration"
        ],
        implications: [
          "Modern relevance",
          "Scientific harmony",
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
        title: "Modern Sacred Divinity",
        link: "https://www.amazon.com/Modern-Sacred-Divinity-Contemporary-Approaches/dp/0800698790?tag=zion0ba-20",
        description: "Contemporary methods in sacred theology"
      }
    ]
  }
]

export default function ReligiousDivinePage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Religious Views of the Divine</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive study of religious perspectives on divine nature across traditions, including their structure, historical context, and contemporary applications.
          </p>
        </div>

        <div className="space-y-8">
          {divineTraditions.map((tradition) => (
            <Card key={tradition.tradition}>
              <CardHeader>
                <CardTitle>{tradition.tradition}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg">{tradition.overview}</p>

                <div className="space-y-6">
                  {tradition.principles.map((principle) => (
                    <div key={principle.name} className="space-y-4">
                      <h3 className="text-xl font-semibold">{principle.name}</h3>
                      <p className="text-muted-foreground">{principle.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-2">Concepts</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            {principle.concepts.map((concept) => (
                              <li key={concept}>{concept}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Methods</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            {principle.methods.map((method) => (
                              <li key={method}>{method}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Significance</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          {principle.significance.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Resources</h3>
                  <div className="grid gap-4">
                    {tradition.resources.map((resource) => (
                      <div key={resource.title} className="flex items-start space-x-4">
                        <div>
                          <h4 className="font-medium">{resource.title}</h4>
                          <p className="text-sm text-muted-foreground">{resource.description}</p>
                          <a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                          >
                            Learn more →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {theologicalMethods.map((method) => (
            <Card key={method.method}>
              <CardHeader>
                <CardTitle>{method.method}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg">{method.description}</p>

                <div className="space-y-6">
                  {method.aspects.map((aspect) => (
                    <div key={aspect.name} className="space-y-4">
                      <h3 className="text-xl font-semibold">{aspect.name}</h3>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-2">Principles</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            {aspect.principles.map((principle) => (
                              <li key={principle}>{principle}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Practices</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            {aspect.practices.map((practice) => (
                              <li key={practice}>{practice}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Applications</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          {aspect.applications.map((application) => (
                            <li key={application}>{application}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Resources</h3>
                  <div className="grid gap-4">
                    {method.resources.map((resource) => (
                      <div key={resource.title} className="flex items-start space-x-4">
                        <div>
                          <h4 className="font-medium">{resource.title}</h4>
                          <p className="text-sm text-muted-foreground">{resource.description}</p>
                          <a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                          >
                            Learn more →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {contemporaryApproaches.map((approach) => (
            <Card key={approach.approach}>
              <CardHeader>
                <CardTitle>{approach.approach}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg">{approach.description}</p>

                <div className="space-y-6">
                  {approach.elements.map((element) => (
                    <div key={element.name} className="space-y-4">
                      <h3 className="text-xl font-semibold">{element.name}</h3>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-2">Features</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            {element.features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Methods</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            {element.methods.map((method) => (
                              <li key={method}>{method}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Implications</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          {element.implications.map((implication) => (
                            <li key={implication}>{implication}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Resources</h3>
                  <div className="grid gap-4">
                    {approach.resources.map((resource) => (
                      <div key={resource.title} className="flex items-start space-x-4">
                        <div>
                          <h4 className="font-medium">{resource.title}</h4>
                          <p className="text-sm text-muted-foreground">{resource.description}</p>
                          <a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                          >
                            Learn more →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/studies/philosophy/reality"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Reality →
            </Link>
            <Link 
              href="/studies/philosophy/mysticism"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Mysticism →
            </Link>
            <Link 
              href="/studies/philosophy/ethics"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Ethics →
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