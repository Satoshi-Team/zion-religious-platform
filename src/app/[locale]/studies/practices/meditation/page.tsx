import React from 'react'
import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Meditation Practices & Contemplative Methods | Sacred Studies",
  description: "Explore meditation practices and contemplative methods across traditions. In-depth analysis of meditation techniques, contemplative practices, and mindfulness approaches.",
  openGraph: {
    title: "Meditation Practices & Contemplative Methods",
    description: "Comprehensive exploration of meditation practices and contemplative methods across traditions.",
    type: "website",
    images: [{ url: "/images/og/meditation-practices.jpg" }]
  },
  keywords: [
    "meditation practices",
    "contemplative methods",
    "mindfulness techniques",
    "meditation traditions",
    "contemplative practices",
    "spiritual meditation",
    "sacred contemplation",
    "meditation studies",
    "mindfulness practices",
    "sacred studies"
  ]
}

interface MeditationTradition {
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

const meditationTraditions: MeditationTradition[] = [
  {
    tradition: "Eastern Meditation",
    overview: "Traditional meditation practices from Buddhist and Hindu traditions",
    practices: [
      {
        name: "Buddhist Meditation",
        description: "Mindfulness and insight meditation practices",
        principles: [
          "Present awareness",
          "Mental clarity",
          "Insight development",
          "Compassion cultivation"
        ],
        methods: [
          "Mindfulness practice",
          "Breath awareness",
          "Walking meditation",
          "Loving-kindness"
        ],
        significance: [
          "Mental development",
          "Wisdom cultivation",
          "Emotional balance",
          "Spiritual growth"
        ]
      },
      {
        name: "Hindu Meditation",
        description: "Yogic and contemplative meditation practices",
        principles: [
          "Divine connection",
          "Energy awareness",
          "Sacred sound",
          "Inner stillness"
        ],
        methods: [
          "Mantra meditation",
          "Chakra awareness",
          "Kundalini practice",
          "Self-inquiry"
        ],
        significance: [
          "Spiritual realization",
          "Energy awakening",
          "Divine communion",
          "Self-knowledge"
        ]
      }
    ],
    resources: [
      {
        title: "The Mind Illuminated: A Complete Meditation Guide",
        link: "https://www.amazon.com/Mind-Illuminated-Meditation-Integrating-Mindfulness/dp/1501156985?tag=zion0ba-20",
        description: "Comprehensive guide to Buddhist meditation"
      },
      {
        title: "Light on Meditation: A Practical Guide",
        link: "https://www.amazon.com/Light-Meditation-Practical-Guide-Practice/dp/1683835778?tag=zion0ba-20",
        description: "Guide to Hindu meditation practices"
      }
    ]
  },
  {
    tradition: "Western Contemplation",
    overview: "Contemplative practices from Western spiritual traditions",
    practices: [
      {
        name: "Christian Contemplation",
        description: "Christian contemplative prayer and meditation",
        principles: [
          "Divine presence",
          "Sacred silence",
          "Heart opening",
          "Spiritual receptivity"
        ],
        methods: [
          "Centering prayer",
          "Lectio divina",
          "Jesus prayer",
          "Sacred gazing"
        ],
        significance: [
          "Divine union",
          "Spiritual transformation",
          "Inner peace",
          "Sacred awareness"
        ]
      },
      {
        name: "Islamic Meditation",
        description: "Sufi meditation and contemplative practices",
        principles: [
          "Divine remembrance",
          "Heart purification",
          "Spiritual presence",
          "Sacred invocation"
        ],
        methods: [
          "Dhikr practice",
          "Heart meditation",
          "Breath awareness",
          "Divine contemplation"
        ],
        significance: [
          "Divine nearness",
          "Heart awakening",
          "Spiritual realization",
          "Sacred presence"
        ]
      }
    ],
    resources: [
      {
        title: "The Cloud of Unknowing: A Guide to Contemplative Prayer",
        link: "https://www.amazon.com/Cloud-Unknowing-Guide-Contemplative-Prayer/dp/0385030975?tag=zion0ba-20",
        description: "Classic guide to Christian contemplation"
      },
      {
        title: "The Heart of Islamic Meditation",
        link: "https://www.amazon.com/Heart-Islamic-Meditation-Spiritual-Practice/dp/1683831234?tag=zion0ba-20",
        description: "Guide to Sufi meditation practices"
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
    method: "Meditation Practice",
    description: "Methods for developing meditation and contemplative practice",
    aspects: [
      {
        name: "Foundation Methods",
        principles: [
          "Present awareness",
          "Mental stability",
          "Body awareness",
          "Breath connection"
        ],
        practices: [
          "Posture training",
          "Breath awareness",
          "Body scanning",
          "Mental noting"
        ],
        applications: [
          "Daily practice",
          "Stress reduction",
          "Mental clarity",
          "Emotional balance"
        ]
      },
      {
        name: "Advanced Methods",
        principles: [
          "Deep concentration",
          "Insight development",
          "Energy awareness",
          "Spiritual connection"
        ],
        practices: [
          "Extended sitting",
          "Advanced techniques",
          "Energy practices",
          "Contemplative methods"
        ],
        applications: [
          "Spiritual development",
          "Wisdom cultivation",
          "Energy mastery",
          "Sacred awareness"
        ]
      }
    ],
    resources: [
      {
        title: "Meditation: A Complete Practice Guide",
        link: "https://www.amazon.com/Meditation-Complete-Practice-Guide-Methods/dp/1683834557?tag=zion0ba-20",
        description: "Comprehensive meditation practice guide"
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
    approach: "Modern Meditation",
    description: "Contemporary approaches to meditation practice",
    elements: [
      {
        name: "Secular Practice",
        features: [
          "Scientific basis",
          "Practical methods",
          "Accessible techniques",
          "Evidence-based"
        ],
        methods: [
          "Mindfulness practice",
          "Stress reduction",
          "Focus training",
          "Emotional awareness"
        ],
        implications: [
          "Mental health",
          "Emotional balance",
          "Cognitive function",
          "Life quality"
        ]
      },
      {
        name: "Integrated Practice",
        features: [
          "Traditional wisdom",
          "Modern context",
          "Scientific understanding",
          "Practical application"
        ],
        methods: [
          "Combined techniques",
          "Adapted practices",
          "Modern methods",
          "Research-based"
        ],
        implications: [
          "Personal growth",
          "Spiritual development",
          "Life balance",
          "Well-being"
        ]
      }
    ],
    resources: [
      {
        title: "Modern Meditation: Science and Practice",
        link: "https://www.amazon.com/Modern-Meditation-Science-Practice-Guide/dp/1683837773?tag=zion0ba-20",
        description: "Contemporary meditation approaches"
      }
    ]
  }
]

export default function MeditationPracticesPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Meditation Practices & Contemplative Methods</h1>
          <p className="text-xl text-muted-foreground">
            Explore meditation traditions and methods of contemplative practice
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Meditation Traditions</TabsTrigger>
            <TabsTrigger value="methods">Practice Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {meditationTraditions.map((tradition) => (
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
              href="/meditation/buddhist"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Buddhist Meditation →
            </Link>
            <Link 
              href="/meditation/christian"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Christian Contemplation →
            </Link>
            <Link 
              href="/meditation/hindu"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Hindu Meditation →
            </Link>
            <Link 
              href="/meditation/islamic"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Islamic Meditation →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 