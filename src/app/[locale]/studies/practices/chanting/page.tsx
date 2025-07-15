import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sacred Chanting & Mantra Practice | Sacred Studies",
  description: "Explore sacred chanting and mantra practices across traditions. In-depth analysis of chanting methods, sacred sound, and spiritual vibration.",
  openGraph: {
    title: "Sacred Chanting & Mantra Practice",
    description: "Comprehensive exploration of sacred chanting and mantra practices across traditions.",
    type: "website",
    images: [{ url: "/images/og/sacred-chanting.jpg" }]
  },
  keywords: [
    "sacred chanting",
    "mantra practice",
    "chanting methods",
    "sacred sound",
    "spiritual vibration",
    "religious chanting",
    "sacred mantras",
    "chanting traditions",
    "sound practices",
    "sacred studies"
  ]
}

interface ChantingTradition {
  tradition: string
  overview: string
  practices: {
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

const chantingTraditions: ChantingTradition[] = [
  {
    tradition: "Sacred Chanting",
    overview: "Traditional chanting practices from major spiritual traditions",
    practices: [
      {
        name: "Sacred Sound",
        description: "Practices of sacred sound and divine vibration",
        principles: [
          "Sacred vibration",
          "Divine sound",
          "Spiritual resonance",
          "Holy utterance"
        ],
        methods: [
          "Sound meditation",
          "Sacred chanting",
          "Divine resonance",
          "Holy intonation"
        ],
        significance: [
          "Divine harmony",
          "Sacred attunement",
          "Spiritual transformation",
          "Holy presence"
        ]
      },
      {
        name: "Mantra Practice",
        description: "Sacred practices of mantra recitation",
        principles: [
          "Sacred word",
          "Divine name",
          "Holy syllable",
          "Spiritual power"
        ],
        methods: [
          "Mantra meditation",
          "Sacred repetition",
          "Divine invocation",
          "Holy recitation"
        ],
        significance: [
          "Sacred empowerment",
          "Divine blessing",
          "Spiritual awakening",
          "Holy transformation"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Chanting: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Chanting-Comprehensive-Guide-Practice/dp/0801046472?tag=zion0ba-20",
        description: "Guide to sacred chanting practices"
      },
      {
        title: "The Art of Mantra Practice",
        link: "https://www.amazon.com/Art-Mantra-Practice-Traditional-Methods/dp/0802837504?tag=zion0ba-20",
        description: "Overview of traditional mantra methods"
      }
    ]
  },
  {
    tradition: "Sacred Sound",
    overview: "Traditional practices of sacred sound and divine vibration",
    practices: [
      {
        name: "Divine Resonance",
        description: "Practices of divine resonance and sacred harmony",
        principles: [
          "Sacred harmony",
          "Divine resonance",
          "Holy vibration",
          "Spiritual sound"
        ],
        methods: [
          "Sound practice",
          "Sacred resonance",
          "Divine harmony",
          "Holy attunement"
        ],
        significance: [
          "Sacred harmony",
          "Divine attunement",
          "Spiritual resonance",
          "Holy presence"
        ]
      },
      {
        name: "Sacred Vibration",
        description: "Practices centered on sacred vibration",
        principles: [
          "Holy sound",
          "Divine vibration",
          "Sacred frequency",
          "Spiritual resonance"
        ],
        methods: [
          "Vibration practice",
          "Sacred sound",
          "Divine resonance",
          "Holy attunement"
        ],
        significance: [
          "Sacred attunement",
          "Divine harmony",
          "Holy presence",
          "Spiritual transformation"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Sound: A Guide to Practice",
        link: "https://www.amazon.com/Sacred-Sound-Guide-Practice-Traditional/dp/0801046480?tag=zion0ba-20",
        description: "Guide to sacred sound practices"
      },
      {
        title: "Divine Resonance: Traditional Methods",
        link: "https://www.amazon.com/Divine-Resonance-Traditional-Methods-Practice/dp/0802837512?tag=zion0ba-20",
        description: "Overview of divine resonance practices"
      }
    ]
  }
]

interface PracticeMethod {
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

const practiceMethods: PracticeMethod[] = [
  {
    method: "Chanting Practice",
    description: "Methods for engaging in sacred chanting practices",
    aspects: [
      {
        name: "Sound Methods",
        principles: [
          "Sacred sound",
          "Divine vibration",
          "Holy resonance",
          "Spiritual harmony"
        ],
        practices: [
          "Sound meditation",
          "Sacred chanting",
          "Divine resonance",
          "Holy attunement"
        ],
        applications: [
          "Sacred practice",
          "Divine harmony",
          "Holy presence",
          "Spiritual transformation"
        ]
      },
      {
        name: "Mantra Methods",
        principles: [
          "Sacred word",
          "Divine name",
          "Holy syllable",
          "Spiritual power"
        ],
        practices: [
          "Mantra meditation",
          "Sacred repetition",
          "Divine invocation",
          "Holy recitation"
        ],
        applications: [
          "Sacred empowerment",
          "Divine blessing",
          "Spiritual awakening",
          "Holy transformation"
        ]
      }
    ],
    resources: [
      {
        title: "Chanting Practice: A Comprehensive Guide",
        link: "https://www.amazon.com/Chanting-Practice-Comprehensive-Guide-Methods/dp/0800663950?tag=zion0ba-20",
        description: "Guide to chanting practice methods"
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
    approach: "Modern Chanting",
    description: "Contemporary approaches to sacred chanting practices",
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
        title: "Modern Sacred Chanting",
        link: "https://www.amazon.com/Modern-Sacred-Chanting-Contemporary-Approaches/dp/0800698782?tag=zion0ba-20",
        description: "Contemporary methods in sacred chanting"
      }
    ]
  }
]

export default function SacredChantingPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Sacred Chanting & Mantra Practice</h1>
          <p className="text-xl text-muted-foreground">
            Explore chanting traditions and methods of sacred sound
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Chanting Traditions</TabsTrigger>
            <TabsTrigger value="methods">Practice Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {chantingTraditions.map((tradition) => (
                <Card key={tradition.tradition}>
                  <CardHeader>
                    <CardTitle>{tradition.tradition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{tradition.overview}</p>

                      {tradition.practices.map((practice) => (
                        <div key={practice.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{practice.name}</h3>
                          <p className="text-muted-foreground">{practice.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Principles</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {practice.principles.map((principle) => (
                                  <li key={principle}>{principle}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Methods</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {practice.methods.map((method) => (
                                  <li key={method}>{method}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Significance</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {practice.significance.map((item) => (
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
              {practiceMethods.map((method) => (
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
              href="/studies/practices/meditation"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Meditation Practices →
            </Link>
            <Link 
              href="/studies/practices/prayer"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Prayer Methods →
            </Link>
            <Link 
              href="/studies/practices/devotion"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Devotional Practices →
            </Link>
            <Link 
              href="/studies/practices/ritual"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Rituals →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 