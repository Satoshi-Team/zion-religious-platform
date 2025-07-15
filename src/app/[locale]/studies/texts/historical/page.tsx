import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Historical Religious Texts & Sacred Literature | Sacred Studies",
  description: "Explore historical religious texts and sacred literature across traditions. In-depth analysis of historical writings, sacred chronicles, and religious histories.",
  openGraph: {
    title: "Historical Religious Texts & Sacred Literature",
    description: "Comprehensive exploration of historical religious texts and sacred literature across traditions.",
    type: "website",
    images: [{ url: "/images/og/historical-texts.jpg" }]
  },
  keywords: [
    "historical texts",
    "sacred literature",
    "religious history",
    "sacred chronicles",
    "historical traditions",
    "religious writings",
    "historical documents",
    "sacred history",
    "historical studies",
    "sacred studies"
  ]
}

interface HistoricalTradition {
  tradition: string
  overview: string
  texts: {
    name: string
    description: string
    principles: string[]
    methods: string[]
    significance: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const historicalTraditions: HistoricalTradition[] = [
  {
    tradition: "Sacred Chronicles",
    overview: "Historical texts documenting religious events and developments",
    texts: [
      {
        name: "Religious Histories",
        description: "Chronicles of religious communities and traditions",
        principles: [
          "Historical accuracy",
          "Traditional preservation",
          "Cultural context",
          "Sacred memory"
        ],
        methods: [
          "Historical research",
          "Textual analysis",
          "Cultural study",
          "Comparative methods"
        ],
        significance: [
          "Historical understanding",
          "Cultural preservation",
          "Traditional knowledge",
          "Sacred heritage"
        ]
      },
      {
        name: "Sacred Chronicles",
        description: "Records of sacred events and religious developments",
        principles: [
          "Sacred history",
          "Divine providence",
          "Religious memory",
          "Traditional wisdom"
        ],
        methods: [
          "Chronicle study",
          "Historical analysis",
          "Traditional research",
          "Comparative study"
        ],
        significance: [
          "Sacred understanding",
          "Historical insight",
          "Traditional wisdom",
          "Religious heritage"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Chronicles: A Historical Guide",
        link: "https://www.amazon.com/Sacred-Chronicles-Historical-Guide-Religious/dp/0801046416?tag=zion0ba-20",
        description: "Comprehensive guide to religious historical texts"
      },
      {
        title: "Religious History: Traditional Approaches",
        link: "https://www.amazon.com/Religious-History-Traditional-Understanding-Chronicles/dp/0802837441?tag=zion0ba-20",
        description: "Overview of traditional historical methods"
      }
    ]
  },
  {
    tradition: "Religious Documents",
    overview: "Historical documents and records from religious traditions",
    texts: [
      {
        name: "Sacred Documents",
        description: "Historical religious documents and records",
        principles: [
          "Document preservation",
          "Historical accuracy",
          "Cultural context",
          "Traditional methods"
        ],
        methods: [
          "Document analysis",
          "Historical research",
          "Cultural study",
          "Comparative methods"
        ],
        significance: [
          "Historical preservation",
          "Cultural understanding",
          "Traditional knowledge",
          "Sacred memory"
        ]
      },
      {
        name: "Religious Records",
        description: "Records of religious communities and practices",
        principles: [
          "Record keeping",
          "Historical accuracy",
          "Cultural preservation",
          "Traditional methods"
        ],
        methods: [
          "Record analysis",
          "Historical research",
          "Cultural study",
          "Comparative methods"
        ],
        significance: [
          "Historical understanding",
          "Cultural preservation",
          "Traditional knowledge",
          "Sacred memory"
        ]
      }
    ],
    resources: [
      {
        title: "Religious Documents: A Historical Guide",
        link: "https://www.amazon.com/Religious-Documents-Historical-Guide-Records/dp/0801046424?tag=zion0ba-20",
        description: "Guide to religious historical documents"
      },
      {
        title: "Sacred Records: Traditional Methods",
        link: "https://www.amazon.com/Sacred-Records-Traditional-Methods-Analysis/dp/0802837458?tag=zion0ba-20",
        description: "Overview of traditional record analysis"
      }
    ]
  }
]

interface StudyMethod {
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

const studyMethods: StudyMethod[] = [
  {
    method: "Historical Analysis",
    description: "Methods for studying and analyzing historical religious texts",
    aspects: [
      {
        name: "Research Methods",
        principles: [
          "Historical accuracy",
          "Document analysis",
          "Cultural context",
          "Traditional methods"
        ],
        practices: [
          "Historical research",
          "Document study",
          "Cultural analysis",
          "Comparative methods"
        ],
        applications: [
          "Historical understanding",
          "Cultural insight",
          "Research methods",
          "Teaching tools"
        ]
      },
      {
        name: "Analytical Methods",
        principles: [
          "Critical analysis",
          "Historical context",
          "Cultural study",
          "Traditional research"
        ],
        practices: [
          "Text analysis",
          "Historical study",
          "Cultural research",
          "Comparative analysis"
        ],
        applications: [
          "Research development",
          "Teaching methods",
          "Historical insight",
          "Cultural understanding"
        ]
      }
    ],
    resources: [
      {
        title: "Historical Religious Text Analysis",
        link: "https://www.amazon.com/Historical-Religious-Text-Analysis-Methods/dp/0800663926?tag=zion0ba-20",
        description: "Guide to historical text analysis"
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
    approach: "Modern Historical Study",
    description: "Contemporary approaches to studying historical religious texts",
    elements: [
      {
        name: "Interdisciplinary Analysis",
        features: [
          "Multiple perspectives",
          "Scientific integration",
          "Cultural analysis",
          "Modern methods"
        ],
        methods: [
          "Comparative study",
          "Cultural research",
          "Scientific analysis",
          "Interdisciplinary approach"
        ],
        implications: [
          "Broader understanding",
          "Modern relevance",
          "Cultural insight",
          "Research development"
        ]
      },
      {
        name: "Applied Research",
        features: [
          "Practical application",
          "Modern context",
          "Cultural relevance",
          "Contemporary methods"
        ],
        methods: [
          "Modern research",
          "Cultural analysis",
          "Practical study",
          "Contemporary methods"
        ],
        implications: [
          "Modern understanding",
          "Research development",
          "Cultural insight",
          "Contemporary relevance"
        ]
      }
    ],
    resources: [
      {
        title: "Modern Historical Religious Studies",
        link: "https://www.amazon.com/Modern-Historical-Religious-Studies-Methods/dp/0800698758?tag=zion0ba-20",
        description: "Contemporary methods in historical religious studies"
      }
    ]
  }
]

export default function HistoricalTextsPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Historical Religious Texts & Sacred Literature</h1>
          <p className="text-xl text-muted-foreground">
            Explore historical traditions and methods of understanding sacred writings
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Historical Traditions</TabsTrigger>
            <TabsTrigger value="methods">Study Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {historicalTraditions.map((tradition) => (
                <Card key={tradition.tradition}>
                  <CardHeader>
                    <CardTitle>{tradition.tradition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{tradition.overview}</p>

                      {tradition.texts.map((text) => (
                        <div key={text.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{text.name}</h3>
                          <p className="text-muted-foreground">{text.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Principles</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {text.principles.map((principle) => (
                                  <li key={principle}>{principle}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Methods</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {text.methods.map((method) => (
                                  <li key={method}>{method}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Significance</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {text.significance.map((item) => (
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
              {studyMethods.map((method) => (
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
              href="/studies/texts/scriptures"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Scriptures →
            </Link>
            <Link 
              href="/studies/texts/mystical"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Mystical Texts →
            </Link>
            <Link 
              href="/studies/methods/historiography"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Historiography →
            </Link>
            <Link 
              href="/studies/methods/archaeology"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Archaeology →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 