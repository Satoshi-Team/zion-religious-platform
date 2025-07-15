import React from 'react'
import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Epistemology & Sacred Knowledge | Sacred Studies",
  description: "Explore religious epistemology and sacred knowledge across traditions. In-depth analysis of knowledge traditions, sacred truth, and contemporary approaches.",
  openGraph: {
    title: "Religious Epistemology & Sacred Knowledge",
    description: "Comprehensive exploration of religious epistemology and knowledge traditions.",
    type: "website",
    images: [{ url: "/images/og/religious-epistemology.jpg" }]
  },
  keywords: [
    "religious epistemology",
    "sacred knowledge",
    "knowledge studies",
    "sacred truth",
    "epistemological methods",
    "sacred epistemology",
    "knowledge analysis",
    "religious understanding",
    "epistemology studies",
    "sacred studies"
  ]
}

interface EpistemologicalTradition {
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

const epistemologicalTraditions: EpistemologicalTradition[] = [
  {
    tradition: "Sacred Knowledge",
    overview: "Traditional approaches to understanding religious truth and sacred knowledge",
    methods: [
      {
        name: "Knowledge Studies",
        description: "Systematic investigation of sacred truth and understanding",
        principles: [
          "Sacred understanding",
          "Divine knowledge",
          "Epistemological truth",
          "Knowledge integrity"
        ],
        techniques: [
          "Truth analysis",
          "Knowledge study",
          "Epistemological research",
          "Understanding development"
        ],
        applications: [
          "Truth understanding",
          "Teaching methods",
          "Spiritual guidance",
          "Community instruction"
        ]
      },
      {
        name: "Epistemic Traditions",
        description: "Study of traditional methods of sacred knowledge",
        principles: [
          "Sacred wisdom",
          "Divine insight",
          "Epistemic insight",
          "Knowledge truth"
        ],
        techniques: [
          "Truth practice",
          "Knowledge study",
          "Epistemological analysis",
          "Understanding integration"
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
        title: "Sacred Epistemology: A Guide",
        link: "https://www.amazon.com/Sacred-Epistemology-Guide/dp/0195114523?tag=zion0ba-20",
        description: "Comprehensive guide to religious epistemological studies"
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
    method: "Epistemological Research",
    description: "Methods for studying religious truth and sacred knowledge",
    aspects: [
      {
        name: "Analytical Methods",
        principles: [
          "Systematic study",
          "Truth analysis",
          "Knowledge research",
          "Epistemological understanding"
        ],
        practices: [
          "Truth analysis",
          "Knowledge investigation",
          "Study development",
          "Understanding practice"
        ],
        outcomes: [
          "Deep understanding",
          "Epistemic insight",
          "Research findings",
          "Teaching resources"
        ]
      },
      {
        name: "Applied Methods",
        principles: [
          "Practical wisdom",
          "Epistemic insight",
          "Truth awareness",
          "Knowledge integration"
        ],
        practices: [
          "Field research",
          "Community study",
          "Truth observation",
          "Knowledge application"
        ],
        outcomes: [
          "Practical solutions",
          "Epistemic insight",
          "Truth knowledge",
          "Teaching depth"
        ]
      }
    ],
    resources: [
      {
        title: "Epistemological Methods",
        link: "https://www.amazon.com/Epistemological-Methods/dp/0861711734?tag=zion0ba-20",
        description: "Guide to epistemological research methods"
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
    approach: "Modern Epistemology",
    description: "Contemporary approaches to religious truth and sacred knowledge",
    elements: [
      {
        name: "Scientific Integration",
        features: [
          "Empirical methods",
          "Truth methodology",
          "Knowledge analysis",
          "Epistemological study"
        ],
        methods: [
          "Scientific investigation",
          "Data analysis",
          "Truth research",
          "Knowledge observation"
        ],
        implications: [
          "Enhanced understanding",
          "Epistemic insight",
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
          "Truth integration",
          "Global research"
        ],
        implications: [
          "Rich understanding",
          "Cultural insight",
          "Epistemic depth",
          "Teaching impact"
        ]
      }
    ],
    resources: [
      {
        title: "Modern Religious Epistemology",
        link: "https://www.amazon.com/Modern-Religious-Epistemology/dp/0865714501?tag=zion0ba-20",
        description: "Guide to modern approaches in religious epistemology"
      }
    ]
  }
]

export default function ReligiousEpistemologyPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Religious Epistemology & Sacred Knowledge</h1>
          <p className="text-xl text-muted-foreground">
            Explore knowledge traditions and methods of understanding sacred truth
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Epistemological Traditions</TabsTrigger>
            <TabsTrigger value="methods">Research Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {epistemologicalTraditions.map((tradition) => (
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
              href="/studies/philosophy/ontology"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Ontology →
            </Link>
            <Link 
              href="/studies/philosophy/axiology"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Axiology →
            </Link>
            <Link 
              href="/studies/themes/knowledge/sacred-truth"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Truth →
            </Link>
            <Link 
              href="/studies/themes/knowledge/sacred-knowledge"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Knowledge →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 