import React from 'react'
import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Ethics & Sacred Morality | Sacred Studies",
  description: "Explore religious ethics and sacred morality across traditions. In-depth analysis of ethical principles, moral methods, and contemporary approaches.",
  openGraph: {
    title: "Religious Ethics & Sacred Morality",
    description: "Comprehensive exploration of religious ethics and sacred morality across traditions.",
    type: "website",
    images: [{ url: "/images/og/religious-ethics.jpg" }]
  },
  keywords: [
    "religious ethics",
    "sacred morality",
    "ethical principles",
    "moral methods",
    "sacred ethics",
    "religious morality",
    "ethical traditions",
    "moral studies",
    "sacred studies",
    "ethical studies"
  ]
}

interface EthicalTradition {
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

const ethicalTraditions: EthicalTradition[] = [
  {
    tradition: "Sacred Ethics",
    overview: "Traditional ethical principles from religious traditions",
    principles: [
      {
        name: "Divine Ethics",
        description: "Ethical principles based on divine guidance",
        concepts: [
          "Sacred duty",
          "Divine law",
          "Moral truth",
          "Holy guidance"
        ],
        methods: [
          "Sacred study",
          "Moral reflection",
          "Divine guidance",
          "Ethical practice"
        ],
        significance: [
          "Sacred living",
          "Divine alignment",
          "Moral growth",
          "Holy conduct"
        ]
      },
      {
        name: "Sacred Morality",
        description: "Fundamental principles of sacred moral conduct",
        concepts: [
          "Sacred virtue",
          "Divine good",
          "Moral wisdom",
          "Holy living"
        ],
        methods: [
          "Sacred practice",
          "Moral study",
          "Divine reflection",
          "Ethical living"
        ],
        significance: [
          "Sacred conduct",
          "Divine harmony",
          "Moral excellence",
          "Holy life"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Ethics: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Ethics-Comprehensive-Guide-Practice/dp/0801046498?tag=zion0ba-20",
        description: "Guide to sacred ethical principles"
      },
      {
        title: "The Art of Sacred Morality",
        link: "https://www.amazon.com/Art-Sacred-Morality-Traditional-Methods/dp/0802837520?tag=zion0ba-20",
        description: "Overview of traditional moral methods"
      }
    ]
  },
  {
    tradition: "Religious Morality",
    overview: "Traditional moral approaches to sacred living",
    principles: [
      {
        name: "Sacred Conduct",
        description: "Principles of sacred moral conduct",
        concepts: [
          "Divine virtue",
          "Sacred duty",
          "Moral wisdom",
          "Holy living"
        ],
        methods: [
          "Sacred practice",
          "Moral study",
          "Divine guidance",
          "Ethical living"
        ],
        significance: [
          "Sacred life",
          "Divine harmony",
          "Moral growth",
          "Holy conduct"
        ]
      },
      {
        name: "Divine Guidance",
        description: "Moral principles based on divine guidance",
        concepts: [
          "Sacred wisdom",
          "Divine truth",
          "Holy guidance",
          "Moral light"
        ],
        methods: [
          "Sacred reflection",
          "Moral practice",
          "Divine study",
          "Ethical guidance"
        ],
        significance: [
          "Sacred wisdom",
          "Divine conduct",
          "Holy living",
          "Moral truth"
        ]
      }
    ],
    resources: [
      {
        title: "Religious Morality: A Guide to Practice",
        link: "https://www.amazon.com/Religious-Morality-Guide-Practice-Traditional/dp/0801046501?tag=zion0ba-20",
        description: "Guide to religious moral practice"
      },
      {
        title: "Sacred Conduct: Traditional Methods",
        link: "https://www.amazon.com/Sacred-Conduct-Traditional-Methods-Practice/dp/0802837539?tag=zion0ba-20",
        description: "Overview of traditional conduct practices"
      }
    ]
  }
]

interface MoralMethod {
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

const moralMethods: MoralMethod[] = [
  {
    method: "Sacred Ethics",
    description: "Methods for engaging in sacred ethical practice",
    aspects: [
      {
        name: "Sacred Methods",
        principles: [
          "Sacred duty",
          "Divine guidance",
          "Holy wisdom",
          "Moral truth"
        ],
        practices: [
          "Sacred study",
          "Divine reflection",
          "Holy practice",
          "Moral living"
        ],
        applications: [
          "Sacred conduct",
          "Divine harmony",
          "Holy life",
          "Moral growth"
        ]
      },
      {
        name: "Moral Methods",
        principles: [
          "Sacred wisdom",
          "Divine truth",
          "Holy guidance",
          "Moral light"
        ],
        practices: [
          "Sacred practice",
          "Divine study",
          "Holy reflection",
          "Moral guidance"
        ],
        applications: [
          "Sacred living",
          "Divine conduct",
          "Holy wisdom",
          "Moral truth"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Ethics: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Ethics-Comprehensive-Guide-Methods/dp/0800663969?tag=zion0ba-20",
        description: "Guide to sacred ethical methods"
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
    approach: "Modern Ethics",
    description: "Contemporary approaches to sacred ethical practice",
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
        title: "Modern Sacred Ethics",
        link: "https://www.amazon.com/Modern-Sacred-Ethics-Contemporary-Approaches/dp/0800698790?tag=zion0ba-20",
        description: "Contemporary methods in sacred ethics"
      }
    ]
  }
]

export default function ReligiousEthicsPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Religious Ethics & Sacred Morality</h1>
          <p className="text-xl text-muted-foreground">
            Explore ethical traditions and methods of moral inquiry
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Ethical Traditions</TabsTrigger>
            <TabsTrigger value="methods">Moral Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {ethicalTraditions.map((tradition) => (
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
              {moralMethods.map((method) => (
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
              href="/studies/philosophy/metaphysics"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Metaphysics →
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