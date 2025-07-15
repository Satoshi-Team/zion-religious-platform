import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Views of Reality | Sacred Studies",
  description: "Explore religious perspectives on reality and existence across traditions. In-depth analysis of metaphysical principles, ontological frameworks, and contemporary approaches.",
  openGraph: {
    title: "Religious Views of Reality",
    description: "Comprehensive exploration of religious perspectives on reality and existence.",
    type: "website",
    images: [{ url: "/images/og/religious-reality.jpg" }]
  },
  keywords: [
    "religious metaphysics",
    "sacred reality",
    "ontological principles",
    "metaphysical frameworks",
    "sacred existence",
    "religious ontology",
    "metaphysical traditions",
    "reality studies",
    "sacred studies",
    "metaphysical studies"
  ]
}

interface RealityTradition {
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

const realityTraditions: RealityTradition[] = [
  {
    tradition: "Sacred Reality",
    overview: "Traditional metaphysical principles from religious traditions",
    principles: [
      {
        name: "Divine Reality",
        description: "Understanding of ultimate reality and divine nature",
        concepts: [
          "Sacred essence",
          "Divine being",
          "Ultimate truth",
          "Holy reality"
        ],
        methods: [
          "Sacred inquiry",
          "Metaphysical reflection",
          "Divine contemplation",
          "Ontological study"
        ],
        significance: [
          "Sacred understanding",
          "Divine knowledge",
          "Ultimate wisdom",
          "Holy insight"
        ]
      },
      {
        name: "Sacred Existence",
        description: "Fundamental principles of sacred being",
        concepts: [
          "Sacred being",
          "Divine existence",
          "Ultimate nature",
          "Holy presence"
        ],
        methods: [
          "Sacred study",
          "Metaphysical analysis",
          "Divine reflection",
          "Ontological inquiry"
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
        title: "Sacred Reality: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Reality-Comprehensive-Guide-Practice/dp/0801046498?tag=zion0ba-20",
        description: "Guide to sacred metaphysical principles"
      },
      {
        title: "The Nature of Sacred Reality",
        link: "https://www.amazon.com/Nature-Sacred-Reality-Traditional-Methods/dp/0802837520?tag=zion0ba-20",
        description: "Overview of traditional metaphysical methods"
      }
    ]
  },
  {
    tradition: "Religious Ontology",
    overview: "Traditional metaphysical approaches to sacred being",
    principles: [
      {
        name: "Sacred Being",
        description: "Principles of sacred existence",
        concepts: [
          "Divine essence",
          "Sacred nature",
          "Ultimate reality",
          "Holy being"
        ],
        methods: [
          "Sacred inquiry",
          "Metaphysical study",
          "Divine reflection",
          "Ontological analysis"
        ],
        significance: [
          "Sacred knowledge",
          "Divine understanding",
          "Ultimate wisdom",
          "Holy insight"
        ]
      },
      {
        name: "Divine Reality",
        description: "Metaphysical principles based on divine nature",
        concepts: [
          "Sacred truth",
          "Divine essence",
          "Ultimate being",
          "Holy reality"
        ],
        methods: [
          "Sacred reflection",
          "Metaphysical inquiry",
          "Divine study",
          "Ontological contemplation"
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
        title: "Religious Ontology: A Guide to Practice",
        link: "https://www.amazon.com/Religious-Ontology-Guide-Practice-Traditional/dp/0801046501?tag=zion0ba-20",
        description: "Guide to religious metaphysical practice"
      },
      {
        title: "Sacred Being: Traditional Methods",
        link: "https://www.amazon.com/Sacred-Being-Traditional-Methods-Practice/dp/0802837539?tag=zion0ba-20",
        description: "Overview of traditional being practices"
      }
    ]
  }
]

interface MetaphysicalMethod {
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

const metaphysicalMethods: MetaphysicalMethod[] = [
  {
    method: "Sacred Reality",
    description: "Methods for engaging in sacred metaphysical practice",
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
          "Metaphysical analysis"
        ],
        applications: [
          "Sacred understanding",
          "Divine knowledge",
          "Holy wisdom",
          "Ultimate insight"
        ]
      },
      {
        name: "Metaphysical Methods",
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
          "Metaphysical contemplation"
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
        title: "Sacred Reality: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Reality-Comprehensive-Guide-Methods/dp/0800663969?tag=zion0ba-20",
        description: "Guide to sacred metaphysical methods"
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
    approach: "Modern Reality",
    description: "Contemporary approaches to sacred metaphysical practice",
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
        title: "Modern Sacred Reality",
        link: "https://www.amazon.com/Modern-Sacred-Reality-Contemporary-Approaches/dp/0800698790?tag=zion0ba-20",
        description: "Contemporary methods in sacred metaphysics"
      }
    ]
  }
]

export default function ReligiousRealityPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Religious Views of Reality</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive study of religious perspectives on reality and existence across traditions, including their structure, historical context, and contemporary applications.
          </p>
        </div>

        <div className="space-y-8">
          {realityTraditions.map((tradition) => (
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

          {metaphysicalMethods.map((method) => (
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
              href="/studies/philosophy/divine"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Divine Nature →
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