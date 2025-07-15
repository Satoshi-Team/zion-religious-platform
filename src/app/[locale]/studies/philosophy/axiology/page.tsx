import React from 'react'
import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Axiology & Sacred Values | Sacred Studies",
  description: "Explore religious axiology and sacred values across traditions. In-depth analysis of value traditions, sacred ethics, and contemporary approaches.",
  openGraph: {
    title: "Religious Axiology & Sacred Values",
    description: "Comprehensive exploration of religious axiology and value traditions.",
    type: "website",
    images: [{ url: "/images/og/religious-axiology.jpg" }]
  },
  keywords: [
    "religious axiology",
    "sacred values",
    "value studies",
    "sacred ethics",
    "axiological methods",
    "sacred axiology",
    "value analysis",
    "religious ethics",
    "axiology studies",
    "sacred studies"
  ]
}

interface AxiologicalTradition {
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

const axiologicalTraditions: AxiologicalTradition[] = [
  {
    tradition: "Sacred Values",
    overview: "Traditional approaches to understanding religious values and sacred ethics",
    methods: [
      {
        name: "Value Studies",
        description: "Systematic investigation of sacred values and ethics",
        principles: [
          "Sacred ethics",
          "Divine values",
          "Axiological truth",
          "Value integrity"
        ],
        techniques: [
          "Value analysis",
          "Ethics study",
          "Axiological research",
          "Value development"
        ],
        applications: [
          "Ethics understanding",
          "Teaching methods",
          "Spiritual guidance",
          "Community instruction"
        ]
      },
      {
        name: "Ethical Traditions",
        description: "Study of traditional methods of sacred values",
        principles: [
          "Sacred wisdom",
          "Divine insight",
          "Ethical insight",
          "Value truth"
        ],
        techniques: [
          "Ethics practice",
          "Value study",
          "Axiological analysis",
          "Ethics integration"
        ],
        applications: [
          "Spiritual understanding",
          "Teaching systems",
          "Community guidance",
          "Personal insight"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Axiology: A Guide",
        link: "https://www.amazon.com/Sacred-Axiology-Guide/dp/0195114523?tag=zion0ba-20",
        description: "Comprehensive guide to religious axiological studies"
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
    method: "Axiological Research",
    description: "Methods for studying religious values and sacred ethics",
    aspects: [
      {
        name: "Analytical Methods",
        principles: [
          "Systematic study",
          "Value analysis",
          "Ethics research",
          "Axiological understanding"
        ],
        practices: [
          "Value analysis",
          "Ethics investigation",
          "Study development",
          "Value practice"
        ],
        outcomes: [
          "Deep understanding",
          "Ethical insight",
          "Research findings",
          "Teaching resources"
        ]
      },
      {
        name: "Applied Methods",
        principles: [
          "Practical wisdom",
          "Ethical insight",
          "Value awareness",
          "Ethics integration"
        ],
        practices: [
          "Field research",
          "Community study",
          "Value observation",
          "Ethics application"
        ],
        outcomes: [
          "Practical solutions",
          "Ethical insight",
          "Value knowledge",
          "Teaching depth"
        ]
      }
    ],
    resources: [
      {
        title: "Axiological Methods",
        link: "https://www.amazon.com/Axiological-Methods/dp/0861711734?tag=zion0ba-20",
        description: "Guide to axiological research methods"
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
    approach: "Modern Axiology",
    description: "Contemporary approaches to religious values and sacred ethics",
    elements: [
      {
        name: "Scientific Integration",
        features: [
          "Empirical methods",
          "Value methodology",
          "Ethics analysis",
          "Axiological study"
        ],
        methods: [
          "Scientific investigation",
          "Data analysis",
          "Value research",
          "Ethics observation"
        ],
        implications: [
          "Enhanced understanding",
          "Ethical insight",
          "Research advances",
          "Teaching depth"
        ]
      },
      {
        name: "Integrative Approaches",
        features: [
          "Multiple perspectives",
          "Cross-cultural study",
          "Interdisciplinary work",
          "Global synthesis"
        ],
        methods: [
          "Comparative analysis",
          "Cultural synthesis",
          "Value integration",
          "Global research"
        ],
        implications: [
          "Rich understanding",
          "Cultural insight",
          "Ethical depth",
          "Teaching impact"
        ]
      }
    ],
    resources: [
      {
        title: "Modern Religious Axiology",
        link: "https://www.amazon.com/Modern-Religious-Axiology/dp/0865714501?tag=zion0ba-20",
        description: "Guide to modern approaches in religious axiology"
      }
    ]
  }
]

export default function ReligiousAxiologyPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Religious Axiology & Sacred Values</h1>
          <p className="text-xl text-muted-foreground">
            Explore value traditions and methods of understanding sacred ethics
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Axiological Traditions</TabsTrigger>
            <TabsTrigger value="methods">Research Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {axiologicalTraditions.map((tradition) => (
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
              href="/studies/philosophy/epistemology"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Epistemology →
            </Link>
            <Link 
              href="/studies/philosophy/ontology"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Ontology →
            </Link>
            <Link 
              href="/studies/themes/values/sacred-ethics"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Ethics →
            </Link>
            <Link 
              href="/studies/themes/values/sacred-values"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Values →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 