import React from 'react'
import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Mystical Texts & Sacred Literature | Sacred Studies",
  description: "Explore mystical texts and sacred literature across traditions. In-depth analysis of mystical writings, contemplative texts, and esoteric traditions.",
  openGraph: {
    title: "Mystical Texts & Sacred Literature",
    description: "Comprehensive exploration of mystical texts and sacred literature across traditions.",
    type: "website",
    images: [{ url: "/images/og/mystical-texts.jpg" }]
  },
  keywords: [
    "mystical texts",
    "sacred literature",
    "esoteric writings",
    "contemplative texts",
    "mystical traditions",
    "spiritual writings",
    "mystical poetry",
    "sacred mysticism",
    "mystical studies",
    "sacred studies"
  ]
}

interface MysticalTradition {
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

const mysticalTraditions: MysticalTradition[] = [
  {
    tradition: "Western Mysticism",
    overview: "Mystical texts from Christian, Jewish, and Islamic traditions",
    texts: [
      {
        name: "Christian Mystical Texts",
        description: "Writings of Christian mystics and contemplatives",
        principles: [
          "Divine union",
          "Contemplative prayer",
          "Spiritual transformation",
          "Mystical experience"
        ],
        methods: [
          "Contemplative reading",
          "Spiritual practice",
          "Mystical interpretation",
          "Personal reflection"
        ],
        significance: [
          "Spiritual guidance",
          "Contemplative life",
          "Inner transformation",
          "Divine communion"
        ]
      },
      {
        name: "Sufi Literature",
        description: "Islamic mystical texts and poetry",
        principles: [
          "Divine love",
          "Spiritual path",
          "Heart purification",
          "Unity of being"
        ],
        methods: [
          "Poetic expression",
          "Spiritual teaching",
          "Symbolic interpretation",
          "Mystical practice"
        ],
        significance: [
          "Spiritual guidance",
          "Heart awakening",
          "Divine knowledge",
          "Inner transformation"
        ]
      }
    ],
    resources: [
      {
        title: "The Essential Mystics: The Soul's Journey into Truth",
        link: "https://www.amazon.com/Essential-Mystics-Souls-Journey-Truth/dp/0062513796?tag=zion0ba-20",
        description: "Collection of essential Western mystical writings"
      },
      {
        title: "The Conference of the Birds: A Sufi Allegory",
        link: "https://www.amazon.com/Conference-Birds-Sufi-Allegory/dp/0140444343?tag=zion0ba-20",
        description: "Classic Sufi mystical text with commentary"
      }
    ]
  },
  {
    tradition: "Eastern Mysticism",
    overview: "Mystical texts from Hindu, Buddhist, and Taoist traditions",
    texts: [
      {
        name: "Tantric Texts",
        description: "Esoteric Hindu and Buddhist writings",
        principles: [
          "Sacred energy",
          "Divine union",
          "Spiritual practice",
          "Mystical realization"
        ],
        methods: [
          "Ritual practice",
          "Meditation techniques",
          "Symbol interpretation",
          "Oral transmission"
        ],
        significance: [
          "Spiritual awakening",
          "Energy transformation",
          "Divine realization",
          "Sacred practice"
        ]
      },
      {
        name: "Zen Literature",
        description: "Chan and Zen Buddhist mystical texts",
        principles: [
          "Direct experience",
          "Mind nature",
          "Present awareness",
          "Non-dual wisdom"
        ],
        methods: [
          "Koan study",
          "Meditation practice",
          "Direct pointing",
          "Silent transmission"
        ],
        significance: [
          "Awakening practice",
          "Mind training",
          "Direct realization",
          "Living wisdom"
        ]
      }
    ],
    resources: [
      {
        title: "Tantric Traditions: Sacred Texts and Practices",
        link: "https://www.amazon.com/Tantric-Traditions-Sacred-Texts-Practices/dp/0877286973?tag=zion0ba-20",
        description: "Comprehensive guide to tantric literature"
      },
      {
        title: "The Zen Teaching of Huang Po",
        link: "https://www.amazon.com/Zen-Teaching-Huang-Po-Transmission/dp/0802150926?tag=zion0ba-20",
        description: "Classic Zen text on direct realization"
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
    method: "Mystical Interpretation",
    description: "Methods for studying and understanding mystical texts",
    aspects: [
      {
        name: "Contemplative Reading",
        principles: [
          "Sacred attention",
          "Inner receptivity",
          "Spiritual discernment",
          "Heart understanding"
        ],
        practices: [
          "Slow reading",
          "Silent reflection",
          "Contemplative pause",
          "Inner listening"
        ],
        applications: [
          "Personal practice",
          "Spiritual guidance",
          "Teaching methods",
          "Group study"
        ]
      },
      {
        name: "Symbolic Analysis",
        principles: [
          "Sacred symbolism",
          "Multiple meanings",
          "Hidden wisdom",
          "Universal patterns"
        ],
        practices: [
          "Symbol study",
          "Pattern recognition",
          "Comparative analysis",
          "Experiential understanding"
        ],
        applications: [
          "Deeper insight",
          "Teaching tools",
          "Practice guidance",
          "Personal transformation"
        ]
      }
    ],
    resources: [
      {
        title: "Reading Mystical Texts: A Guide",
        link: "https://www.amazon.com/Reading-Mystical-Texts-Guide-Understanding/dp/0809105632?tag=zion0ba-20",
        description: "Guide to mystical text interpretation"
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
    approach: "Modern Mystical Study",
    description: "Contemporary approaches to studying mystical texts",
    elements: [
      {
        name: "Interdisciplinary Analysis",
        features: [
          "Multiple perspectives",
          "Scientific integration",
          "Psychological insight",
          "Cultural context"
        ],
        methods: [
          "Comparative study",
          "Psychological analysis",
          "Cultural research",
          "Scientific investigation"
        ],
        implications: [
          "Deeper understanding",
          "Broader context",
          "Modern relevance",
          "Practical application"
        ]
      },
      {
        name: "Experiential Approaches",
        features: [
          "Direct experience",
          "Practice integration",
          "Personal transformation",
          "Community engagement"
        ],
        methods: [
          "Contemplative practice",
          "Group study",
          "Personal reflection",
          "Shared experience"
        ],
        implications: [
          "Living wisdom",
          "Personal growth",
          "Community development",
          "Contemporary relevance"
        ]
      }
    ],
    resources: [
      {
        title: "Modern Approaches to Mystical Texts",
        link: "https://www.amazon.com/Modern-Approaches-Mystical-Texts-Contemporary/dp/0814658741?tag=zion0ba-20",
        description: "Contemporary methods in mystical studies"
      }
    ]
  }
]

export default function MysticalTextsPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Mystical Texts & Sacred Literature</h1>
          <p className="text-xl text-muted-foreground">
            Explore mystical traditions and methods of understanding sacred writings
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Mystical Traditions</TabsTrigger>
            <TabsTrigger value="methods">Study Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {mysticalTraditions.map((tradition) => (
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
              href="/studies/texts/commentaries"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Scriptural Commentaries →
            </Link>
            <Link 
              href="/studies/themes/spirituality/mysticism"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Mysticism →
            </Link>
            <Link 
              href="/studies/themes/spirituality/practices"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Spiritual Practices →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 