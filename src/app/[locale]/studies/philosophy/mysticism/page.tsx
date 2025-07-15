import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Mysticism | Sacred Studies",
  description: "Explore religious mysticism across traditions. In-depth analysis of mystical principles, spiritual practices, and contemporary approaches.",
  openGraph: {
    title: "Religious Mysticism",
    description: "Comprehensive exploration of religious mystical traditions and practices.",
    type: "website",
    images: [{ url: "/images/og/religious-mysticism.jpg" }]
  },
  keywords: [
    "religious mysticism",
    "sacred spirituality",
    "mystical practices",
    "spiritual frameworks",
    "sacred experience",
    "religious spirituality",
    "mystical traditions",
    "spiritual studies",
    "sacred studies",
    "mystical studies"
  ]
}

interface MysticalTradition {
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

const mysticalTraditions: MysticalTradition[] = [
  {
    tradition: "Sacred Mysticism",
    overview: "Traditional mystical principles from religious traditions",
    principles: [
      {
        name: "Mystical Experience",
        description: "Understanding of direct spiritual experience",
        concepts: [
          "Sacred union",
          "Divine presence",
          "Ultimate reality",
          "Holy experience"
        ],
        methods: [
          "Sacred meditation",
          "Spiritual contemplation",
          "Divine communion",
          "Mystical practice"
        ],
        significance: [
          "Sacred understanding",
          "Divine knowledge",
          "Ultimate wisdom",
          "Holy insight"
        ]
      },
      {
        name: "Mystical Path",
        description: "Fundamental principles of spiritual journey",
        concepts: [
          "Sacred journey",
          "Divine path",
          "Ultimate truth",
          "Holy way"
        ],
        methods: [
          "Sacred practice",
          "Spiritual discipline",
          "Divine guidance",
          "Mystical study"
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
        title: "Sacred Mysticism: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Mysticism-Comprehensive-Guide-Practice/dp/0801046498?tag=zion0ba-20",
        description: "Guide to sacred mystical principles"
      },
      {
        title: "The Nature of Sacred Mysticism",
        link: "https://www.amazon.com/Nature-Sacred-Mysticism-Traditional-Methods/dp/0802837520?tag=zion0ba-20",
        description: "Overview of traditional mystical methods"
      }
    ]
  },
  {
    tradition: "Religious Spirituality",
    overview: "Traditional mystical approaches to spiritual experience",
    principles: [
      {
        name: "Spiritual Essence",
        description: "Principles of mystical being",
        concepts: [
          "Sacred essence",
          "Divine nature",
          "Ultimate reality",
          "Holy being"
        ],
        methods: [
          "Sacred practice",
          "Spiritual study",
          "Divine reflection",
          "Mystical analysis"
        ],
        significance: [
          "Sacred knowledge",
          "Divine understanding",
          "Ultimate wisdom",
          "Holy insight"
        ]
      },
      {
        name: "Spiritual Journey",
        description: "Mystical principles based on divine experience",
        concepts: [
          "Sacred path",
          "Divine journey",
          "Ultimate being",
          "Holy way"
        ],
        methods: [
          "Sacred reflection",
          "Spiritual inquiry",
          "Divine practice",
          "Mystical contemplation"
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
        title: "Religious Spirituality: A Guide to Practice",
        link: "https://www.amazon.com/Religious-Spirituality-Guide-Practice-Traditional/dp/0801046501?tag=zion0ba-20",
        description: "Guide to religious mystical practice"
      },
      {
        title: "Sacred Mysticism: Traditional Methods",
        link: "https://www.amazon.com/Sacred-Mysticism-Traditional-Methods-Practice/dp/0802837539?tag=zion0ba-20",
        description: "Overview of traditional spiritual practices"
      }
    ]
  }
]

interface MysticalMethod {
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

const mysticalMethods: MysticalMethod[] = [
  {
    method: "Sacred Mysticism",
    description: "Methods for engaging in sacred mystical practice",
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
          "Sacred meditation",
          "Divine contemplation",
          "Holy practice",
          "Mystical analysis"
        ],
        applications: [
          "Sacred understanding",
          "Divine knowledge",
          "Holy wisdom",
          "Ultimate insight"
        ]
      },
      {
        name: "Mystical Methods",
        principles: [
          "Sacred truth",
          "Divine essence",
          "Holy reality",
          "Ultimate being"
        ],
        practices: [
          "Sacred practice",
          "Divine inquiry",
          "Holy reflection",
          "Mystical contemplation"
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
        title: "Sacred Mysticism: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Mysticism-Comprehensive-Guide-Methods/dp/0800663969?tag=zion0ba-20",
        description: "Guide to sacred mystical methods"
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
    approach: "Modern Mysticism",
    description: "Contemporary approaches to sacred mystical practice",
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
        title: "Modern Sacred Mysticism",
        link: "https://www.amazon.com/Modern-Sacred-Mysticism-Contemporary-Approaches/dp/0800698790?tag=zion0ba-20",
        description: "Contemporary methods in sacred mysticism"
      }
    ]
  }
]

export default function ReligiousMysticismPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Religious Mysticism</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive study of religious mystical traditions and practices across traditions, including their structure, historical context, and contemporary applications.
          </p>
        </div>

        <div className="space-y-8">
          {mysticalTraditions.map((tradition) => (
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

          {mysticalMethods.map((method) => (
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
              href="/studies/philosophy/divine"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Divine Nature →
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