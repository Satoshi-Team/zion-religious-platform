import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Cosmology & Sacred Universe | Sacred Studies",
  description: "Explore religious cosmology and sacred universe studies across traditions. In-depth analysis of cosmological theories, creation narratives, and contemporary approaches.",
  openGraph: {
    title: "Religious Cosmology & Sacred Universe",
    description: "Comprehensive exploration of religious cosmology and universal traditions.",
    type: "website",
    images: [{ url: "/images/og/religious-cosmology.jpg" }]
  },
  keywords: [
    "religious cosmology",
    "sacred universe",
    "cosmological studies",
    "creation narratives",
    "cosmological methods",
    "sacred creation",
    "universal analysis",
    "religious origins",
    "cosmological research",
    "sacred cosmos"
  ]
}

interface CosmologicalTradition {
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

const cosmologicalTraditions: CosmologicalTradition[] = [
  {
    tradition: "Sacred Cosmos",
    overview: "Traditional approaches to understanding sacred universe",
    methods: [
      {
        name: "Creation Studies",
        description: "Systematic study of religious creation narratives",
        principles: [
          "Divine creation",
          "Sacred order",
          "Universal harmony",
          "Cosmic purpose"
        ],
        techniques: [
          "Narrative analysis",
          "Symbolic study",
          "Pattern recognition",
          "Comparative research"
        ],
        applications: [
          "Worldview development",
          "Spiritual understanding",
          "Teaching methods",
          "Cultural insight"
        ]
      },
      {
        name: "Universal Order",
        description: "Investigation of sacred cosmic principles",
        principles: [
          "Cosmic laws",
          "Divine order",
          "Universal harmony",
          "Sacred patterns"
        ],
        techniques: [
          "Pattern analysis",
          "Symbolic interpretation",
          "Structural study",
          "Comparative research"
        ],
        applications: [
          "Spiritual practice",
          "Teaching methods",
          "Cultural understanding",
          "Personal development"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Cosmos: A Guide",
        link: "https://www.amazon.com/Sacred-Cosmos-Guide/dp/0195114523?tag=zion0ba-20",
        description: "Comprehensive guide to religious cosmological studies"
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
    method: "Cosmological Research",
    description: "Methods for studying religious cosmological phenomena",
    aspects: [
      {
        name: "Analytical Methods",
        principles: [
          "Systematic study",
          "Comparative analysis",
          "Pattern recognition",
          "Structural understanding"
        ],
        practices: [
          "Narrative analysis",
          "Symbol study",
          "Pattern research",
          "Comparative work"
        ],
        outcomes: [
          "Deep understanding",
          "Cultural insight",
          "Teaching resources",
          "Research findings"
        ]
      },
      {
        name: "Interpretive Methods",
        principles: [
          "Sacred meaning",
          "Symbolic understanding",
          "Cultural context",
          "Spiritual significance"
        ],
        practices: [
          "Symbol interpretation",
          "Context analysis",
          "Meaning research",
          "Cultural study"
        ],
        outcomes: [
          "Rich insight",
          "Cultural knowledge",
          "Teaching materials",
          "Research depth"
        ]
      }
    ],
    resources: [
      {
        title: "Cosmological Methods",
        link: "https://www.amazon.com/Cosmological-Methods/dp/0861711734?tag=zion0ba-20",
        description: "Guide to cosmological research methods"
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
    approach: "Modern Cosmology",
    description: "Contemporary approaches to religious cosmological studies",
    elements: [
      {
        name: "Scientific Integration",
        features: [
          "Scientific methods",
          "Modern research",
          "Empirical study",
          "Data analysis"
        ],
        methods: [
          "Scientific research",
          "Data collection",
          "Empirical study",
          "Analysis methods"
        ],
        implications: [
          "New understanding",
          "Rich insight",
          "Research advances",
          "Teaching resources"
        ]
      },
      {
        name: "Integrative Approaches",
        features: [
          "Multiple perspectives",
          "Cross-cultural study",
          "Interdisciplinary work",
          "Global view"
        ],
        methods: [
          "Comparative analysis",
          "Cultural synthesis",
          "Integrated research",
          "Global study"
        ],
        implications: [
          "Deep understanding",
          "Cultural insight",
          "Research impact",
          "Teaching depth"
        ]
      }
    ],
    resources: [
      {
        title: "Modern Religious Cosmology",
        link: "https://www.amazon.com/Modern-Religious-Cosmology/dp/0865714501?tag=zion0ba-20",
        description: "Guide to modern approaches in religious cosmology"
      }
    ]
  }
]

export default function ReligiousCosmologyPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Religious Cosmology & Sacred Universe</h1>
          <p className="text-xl text-muted-foreground">
            Explore cosmological traditions and theories of sacred creation
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Cosmological Traditions</TabsTrigger>
            <TabsTrigger value="methods">Research Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {cosmologicalTraditions.map((tradition) => (
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
              href="/studies/philosophy/metaphysics"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Metaphysics →
            </Link>
            <Link 
              href="/studies/themes/universe/creation"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Creation →
            </Link>
            <Link 
              href="/studies/themes/universe/order"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Universal Order →
            </Link>
            <Link 
              href="/studies/themes/universe/purpose"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Cosmic Purpose →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 