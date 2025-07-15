import React from 'react'
import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Sociology & Sacred Society | Sacred Studies",
  description: "Explore religious sociology and sacred social studies across traditions. In-depth analysis of social methods, religious communities, and contemporary approaches.",
  openGraph: {
    title: "Religious Sociology & Sacred Society",
    description: "Comprehensive exploration of religious sociology and social traditions.",
    type: "website",
    images: [{ url: "/images/og/religious-sociology.jpg" }]
  },
  keywords: [
    "religious sociology",
    "sacred society",
    "social studies",
    "religious communities",
    "sociological methods",
    "sacred traditions",
    "social analysis",
    "religious institutions",
    "sociological research",
    "sacred community"
  ]
}

interface SociologicalTradition {
  tradition: string
  overview: string
  methods: {
    name: string
    description: string
    principles: string[]
    techniques: string[]
    applications: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const sociologicalTraditions: SociologicalTradition[] = [
  {
    tradition: "Sacred Society",
    overview: "Traditional approaches to studying religious social structures",
    methods: [
      {
        name: "Social Analysis",
        description: "Systematic study of religious social organizations",
        principles: [
          "Social structure",
          "Sacred institutions",
          "Religious organization",
          "Community dynamics"
        ],
        techniques: [
          "Social observation",
          "Institutional analysis",
          "Community study",
          "Network mapping"
        ],
        applications: [
          "Community building",
          "Institutional development",
          "Social cohesion",
          "Leadership training"
        ]
      },
      {
        name: "Community Studies",
        description: "Investigation of religious communities and networks",
        principles: [
          "Community formation",
          "Social bonds",
          "Religious identity",
          "Group dynamics"
        ],
        techniques: [
          "Community mapping",
          "Network analysis",
          "Identity studies",
          "Social research"
        ],
        applications: [
          "Community development",
          "Social integration",
          "Identity formation",
          "Leadership development"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Society: A Guide",
        link: "https://www.amazon.com/Sacred-Society-Guide/dp/0195114523?tag=zion0ba-20",
        description: "Comprehensive guide to religious social studies"
      }
    ]
  }
]

interface ResearchMethod {
  method: string
  description: string
  aspects: {
    name: string
    principles: string[]
    practices: string[]
    outcomes: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const researchMethods: ResearchMethod[] = [
  {
    method: "Sociological Research",
    description: "Methods for studying religious social phenomena",
    aspects: [
      {
        name: "Empirical Methods",
        principles: [
          "Scientific rigor",
          "Data collection",
          "Statistical analysis",
          "Systematic observation"
        ],
        practices: [
          "Survey research",
          "Data analysis",
          "Field observation",
          "Interview methods"
        ],
        outcomes: [
          "Social insight",
          "Statistical data",
          "Research findings",
          "Teaching resources"
        ]
      },
      {
        name: "Qualitative Methods",
        principles: [
          "Deep understanding",
          "Rich description",
          "Context analysis",
          "Interpretive approach"
        ],
        practices: [
          "Ethnography",
          "Case studies",
          "Narrative analysis",
          "Participant observation"
        ],
        outcomes: [
          "Cultural insight",
          "Social understanding",
          "Research depth",
          "Teaching materials"
        ]
      }
    ],
    resources: [
      {
        title: "Sociological Methods",
        link: "https://www.amazon.com/Sociological-Methods/dp/0861711734?tag=zion0ba-20",
        description: "Guide to sociological research methods"
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
    approach: "Modern Sociology",
    description: "Contemporary approaches to religious social studies",
    elements: [
      {
        name: "Digital Methods",
        features: [
          "Online communities",
          "Digital networks",
          "Social media",
          "Virtual spaces"
        ],
        methods: [
          "Digital ethnography",
          "Network analysis",
          "Social media research",
          "Online observation"
        ],
        implications: [
          "Virtual communities",
          "Digital networks",
          "Online identity",
          "Global connection"
        ]
      },
      {
        name: "Integrative Approaches",
        features: [
          "Multiple methods",
          "Cross-cultural study",
          "Interdisciplinary work",
          "Global perspective"
        ],
        methods: [
          "Mixed methods",
          "Comparative analysis",
          "Cultural synthesis",
          "Global research"
        ],
        implications: [
          "Rich understanding",
          "Cultural insight",
          "Global knowledge",
          "Research impact"
        ]
      }
    ],
    resources: [
      {
        title: "Modern Religious Sociology",
        link: "https://www.amazon.com/Modern-Religious-Sociology/dp/0865714501?tag=zion0ba-20",
        description: "Guide to modern approaches in religious sociology"
      }
    ]
  }
]

export default function ReligiousSociologyPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Religious Sociology & Sacred Society</h1>
          <p className="text-xl text-muted-foreground">
            Explore sociological traditions and methods of studying religious communities
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Sociological Traditions</TabsTrigger>
            <TabsTrigger value="methods">Research Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {sociologicalTraditions.map((tradition) => (
                <Card key={tradition.tradition}>
                  <CardHeader>
                    <CardTitle>{tradition.tradition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{tradition.overview}</p>

                      {tradition.methods.map((method) => (
                        <div key={method.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{method.name}</h3>
                          <p className="text-muted-foreground">{method.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Principles</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {method.principles.map((principle) => (
                                  <li key={principle}>{principle}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Techniques</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {method.techniques.map((technique) => (
                                  <li key={technique}>{technique}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Applications</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {method.applications.map((application) => (
                                <li key={application}>{application}</li>
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

          <TabsContent value="methods" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {researchMethods.map((method) => (
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
                            <h4 className="font-semibold">Outcomes</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {aspect.outcomes.map((outcome) => (
                                <li key={outcome}>{outcome}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
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
                        <h4 className="font-semibold">Resources:</h4>
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
              href="/studies/philosophy/anthropology"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Anthropology →
            </Link>
            <Link 
              href="/studies/philosophy/psychology"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Psychology →
            </Link>
            <Link 
              href="/studies/themes/society/communities"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Communities →
            </Link>
            <Link 
              href="/studies/themes/society/institutions"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Institutions →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 