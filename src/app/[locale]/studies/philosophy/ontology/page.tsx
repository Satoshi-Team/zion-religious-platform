import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Ontology & Sacred Being | Sacred Studies",
  description: "Explore religious ontology and sacred being across traditions. In-depth analysis of being traditions, sacred reality, and contemporary approaches.",
  openGraph: {
    title: "Religious Ontology & Sacred Being",
    description: "Comprehensive exploration of religious ontology and being traditions.",
    type: "website",
    images: [{ url: "/images/og/religious-ontology.jpg" }]
  },
  keywords: [
    "religious ontology",
    "sacred being",
    "being studies",
    "sacred reality",
    "ontological methods",
    "sacred ontology",
    "being analysis",
    "religious existence",
    "ontology studies",
    "sacred studies"
  ]
}

interface OntologicalTradition {
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

const ontologicalTraditions: OntologicalTradition[] = [
  {
    tradition: "Sacred Being",
    overview: "Traditional approaches to understanding religious reality and sacred being",
    methods: [
      {
        name: "Being Studies",
        description: "Systematic investigation of sacred reality and existence",
        principles: [
          "Sacred existence",
          "Divine being",
          "Ontological truth",
          "Being integrity"
        ],
        techniques: [
          "Reality analysis",
          "Being study",
          "Ontological research",
          "Existence development"
        ],
        applications: [
          "Reality understanding",
          "Teaching methods",
          "Spiritual guidance",
          "Community instruction"
        ]
      },
      {
        name: "Ontic Traditions",
        description: "Study of traditional methods of sacred being",
        principles: [
          "Sacred wisdom",
          "Divine insight",
          "Ontic insight",
          "Being truth"
        ],
        techniques: [
          "Reality practice",
          "Being study",
          "Ontological analysis",
          "Existence integration"
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
        title: "Sacred Ontology: A Guide",
        link: "https://www.amazon.com/Sacred-Ontology-Guide/dp/0195114523?tag=zion0ba-20",
        description: "Comprehensive guide to religious ontological studies"
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
    method: "Ontological Research",
    description: "Methods for studying religious reality and sacred being",
    aspects: [
      {
        name: "Analytical Methods",
        principles: [
          "Systematic study",
          "Reality analysis",
          "Being research",
          "Ontological understanding"
        ],
        practices: [
          "Reality analysis",
          "Being investigation",
          "Study development",
          "Existence practice"
        ],
        outcomes: [
          "Deep understanding",
          "Ontic insight",
          "Research findings",
          "Teaching resources"
        ]
      },
      {
        name: "Applied Methods",
        principles: [
          "Practical wisdom",
          "Ontic insight",
          "Reality awareness",
          "Being integration"
        ],
        practices: [
          "Field research",
          "Community study",
          "Reality observation",
          "Being application"
        ],
        outcomes: [
          "Practical solutions",
          "Ontic insight",
          "Reality knowledge",
          "Teaching depth"
        ]
      }
    ],
    resources: [
      {
        title: "Ontological Methods",
        link: "https://www.amazon.com/Ontological-Methods/dp/0861711734?tag=zion0ba-20",
        description: "Guide to ontological research methods"
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
    approach: "Modern Ontology",
    description: "Contemporary approaches to religious reality and sacred being",
    elements: [
      {
        name: "Scientific Integration",
        features: [
          "Empirical methods",
          "Reality methodology",
          "Being analysis",
          "Ontological study"
        ],
        methods: [
          "Scientific investigation",
          "Data analysis",
          "Reality research",
          "Being observation"
        ],
        implications: [
          "Enhanced understanding",
          "Ontic insight",
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
          "Reality integration",
          "Global research"
        ],
        implications: [
          "Rich understanding",
          "Cultural insight",
          "Ontic depth",
          "Teaching impact"
        ]
      }
    ],
    resources: [
      {
        title: "Modern Religious Ontology",
        link: "https://www.amazon.com/Modern-Religious-Ontology/dp/0865714501?tag=zion0ba-20",
        description: "Guide to modern approaches in religious ontology"
      }
    ]
  }
]

export default function ReligiousOntologyPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Religious Ontology & Sacred Being</h1>
          <p className="text-xl text-muted-foreground">
            Explore being traditions and methods of understanding sacred reality
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Ontological Traditions</TabsTrigger>
            <TabsTrigger value="methods">Research Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {ontologicalTraditions.map((tradition) => (
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
              href="/studies/philosophy/axiology"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Axiology →
            </Link>
            <Link 
              href="/studies/themes/being/sacred-reality"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Reality →
            </Link>
            <Link 
              href="/studies/themes/being/sacred-being"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Being →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 