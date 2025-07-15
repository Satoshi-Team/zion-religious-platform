import React from 'react'
import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Methodology & Sacred Research | Sacred Studies",
  description: "Explore religious methodology and sacred research across traditions. In-depth analysis of research methods, sacred investigation, and contemporary approaches.",
  openGraph: {
    title: "Religious Methodology & Sacred Research",
    description: "Comprehensive exploration of religious methodology and research traditions.",
    type: "website",
    images: [{ url: "/images/og/religious-methodology.jpg" }]
  },
  keywords: [
    "religious methodology",
    "sacred research",
    "methodological studies",
    "sacred investigation",
    "research methods",
    "sacred methodology",
    "methodological analysis",
    "religious research",
    "research methodology",
    "sacred studies"
  ]
}

interface MethodologicalTradition {
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

const methodologicalTraditions: MethodologicalTradition[] = [
  {
    tradition: "Sacred Research",
    overview: "Traditional approaches to understanding religious methodology and investigation",
    methods: [
      {
        name: "Research Studies",
        description: "Systematic investigation of sacred phenomena and traditions",
        principles: [
          "Sacred investigation",
          "Divine understanding",
          "Methodological truth",
          "Research integrity"
        ],
        techniques: [
          "Research analysis",
          "Method study",
          "Investigation research",
          "Methodology development"
        ],
        applications: [
          "Research understanding",
          "Teaching methods",
          "Spiritual guidance",
          "Community instruction"
        ]
      },
      {
        name: "Investigative Traditions",
        description: "Study of traditional methods of sacred research",
        principles: [
          "Sacred wisdom",
          "Divine insight",
          "Research insight",
          "Methodological truth"
        ],
        techniques: [
          "Research practice",
          "Method study",
          "Investigation analysis",
          "Methodology integration"
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
        title: "Sacred Methodology: A Guide",
        link: "https://www.amazon.com/Sacred-Methodology-Guide/dp/0195114523?tag=zion0ba-20",
        description: "Comprehensive guide to religious methodological studies"
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
    method: "Methodological Research",
    description: "Methods for studying religious methodology and investigation",
    aspects: [
      {
        name: "Analytical Methods",
        principles: [
          "Systematic study",
          "Method analysis",
          "Investigation research",
          "Methodology understanding"
        ],
        practices: [
          "Method analysis",
          "Research investigation",
          "Study development",
          "Investigation practice"
        ],
        outcomes: [
          "Deep understanding",
          "Methodological insight",
          "Research findings",
          "Teaching resources"
        ]
      },
      {
        name: "Applied Methods",
        principles: [
          "Practical wisdom",
          "Research insight",
          "Methodological awareness",
          "Investigation integration"
        ],
        practices: [
          "Field research",
          "Community study",
          "Method observation",
          "Research application"
        ],
        outcomes: [
          "Practical solutions",
          "Research insight",
          "Methodological knowledge",
          "Teaching depth"
        ]
      }
    ],
    resources: [
      {
        title: "Methodological Methods",
        link: "https://www.amazon.com/Methodological-Methods/dp/0861711734?tag=zion0ba-20",
        description: "Guide to methodological research methods"
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
    approach: "Modern Methodology",
    description: "Contemporary approaches to religious methodology and research",
    elements: [
      {
        name: "Scientific Integration",
        features: [
          "Empirical methods",
          "Research methodology",
          "Investigation analysis",
          "Method study"
        ],
        methods: [
          "Scientific investigation",
          "Data analysis",
          "Method research",
          "Investigation observation"
        ],
        implications: [
          "Enhanced understanding",
          "Methodological insight",
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
          "Method integration",
          "Global research"
        ],
        implications: [
          "Rich understanding",
          "Cultural insight",
          "Methodological depth",
          "Teaching impact"
        ]
      }
    ],
    resources: [
      {
        title: "Modern Religious Methodology",
        link: "https://www.amazon.com/Modern-Religious-Methodology/dp/0865714501?tag=zion0ba-20",
        description: "Guide to modern approaches in religious methodology"
      }
    ]
  }
]

export default function ReligiousMethodologyPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Religious Methodology & Sacred Research</h1>
          <p className="text-xl text-muted-foreground">
            Explore methodological traditions and methods of studying sacred phenomena
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Methodological Traditions</TabsTrigger>
            <TabsTrigger value="methods">Research Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {methodologicalTraditions.map((tradition) => (
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
              href="/studies/philosophy/logic"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Logic →
            </Link>
            <Link 
              href="/studies/philosophy/symbolism"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Symbolism →
            </Link>
            <Link 
              href="/studies/themes/research/sacred-methods"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Methods →
            </Link>
            <Link 
              href="/studies/themes/research/sacred-investigation"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Investigation →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 