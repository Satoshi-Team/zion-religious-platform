import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Mysticism & Sacred Experience | Sacred Studies",
  description: "Explore religious mysticism and sacred experiences across traditions. In-depth analysis of mystical practices, states of consciousness, and spiritual transformation.",
  openGraph: {
    title: "Religious Mysticism & Sacred Experience",
    description: "Comprehensive exploration of mystical traditions and practices across religions.",
    type: "website",
    images: [{ url: "/images/og/religious-mysticism.jpg" }]
  },
  keywords: [
    "religious mysticism",
    "mystical experience",
    "sacred practices",
    "spiritual transformation",
    "contemplative traditions",
    "mystical states",
    "sacred wisdom",
    "spiritual awakening",
    "divine union",
    "transcendent experience"
  ]
}

interface MysticalTradition {
  tradition: string
  overview: string
  practices: {
    name: string
    description: string
    methods: string[]
    stages: string[]
    experiences: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const mysticalTraditions: MysticalTradition[] = [
  {
    tradition: "Contemplative Mysticism",
    overview: "Deep contemplative practices and mystical experiences across traditions",
    practices: [
      {
        name: "Silent Contemplation",
        description: "Practices of deep silence and inner awareness",
        methods: [
          "Sacred silence",
          "Inner listening",
          "Presence practice",
          "Contemplative prayer"
        ],
        stages: [
          "Initial stillness",
          "Deep presence",
          "Sacred encounter",
          "Divine union"
        ],
        experiences: [
          "Inner peace",
          "Sacred presence",
          "Divine intimacy",
          "Transformative insight"
        ]
      },
      {
        name: "Mystical Prayer",
        description: "Deep prayer practices leading to mystical states",
        methods: [
          "Heart prayer",
          "Sacred mantra",
          "Divine invocation",
          "Contemplative chant"
        ],
        stages: [
          "Devotional opening",
          "Sacred resonance",
          "Divine communion",
          "Mystical union"
        ],
        experiences: [
          "Divine presence",
          "Sacred love",
          "Mystical insight",
          "Transformative union"
        ]
      }
    ],
    resources: [
      {
        title: "Contemplative Mysticism: A Guide to Practice",
        link: "https://www.amazon.com/Contemplative-Mysticism-Guide-Practice/dp/0195114523?tag=zion0ba-20",
        description: "Comprehensive guide to contemplative mystical practices"
      }
    ]
  }
]

interface MysticalState {
  state: string
  description: string
  aspects: {
    name: string
    characteristics: string[]
    manifestations: string[]
    implications: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const mysticalStates: MysticalState[] = [
  {
    state: "Transcendent States",
    description: "Analysis of mystical states of consciousness and experience",
    aspects: [
      {
        name: "Divine Union",
        characteristics: [
          "Transcendent awareness",
          "Sacred presence",
          "Divine intimacy",
          "Mystical knowing"
        ],
        manifestations: [
          "Profound peace",
          "Divine love",
          "Sacred wisdom",
          "Transformative insight"
        ],
        implications: [
          "Spiritual transformation",
          "Sacred understanding",
          "Divine relationship",
          "Life integration"
        ]
      },
      {
        name: "Sacred Vision",
        characteristics: [
          "Divine perception",
          "Sacred insight",
          "Mystical vision",
          "Spiritual discernment"
        ],
        manifestations: [
          "Sacred symbols",
          "Divine light",
          "Mystical imagery",
          "Spiritual revelation"
        ],
        implications: [
          "Enhanced perception",
          "Spiritual guidance",
          "Sacred understanding",
          "Life direction"
        ]
      }
    ],
    resources: [
      {
        title: "Mystical States: Understanding Sacred Experience",
        link: "https://www.amazon.com/Mystical-States-Understanding-Sacred-Experience/dp/0861711734?tag=zion0ba-20",
        description: "Guide to understanding mystical states of consciousness"
      }
    ]
  }
]

interface ContemporaryApproach {
  approach: string
  description: string
  frameworks: {
    name: string
    elements: string[]
    methods: string[]
    applications: string[]
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
    description: "Contemporary approaches to mystical practice and understanding",
    frameworks: [
      {
        name: "Integrative Practice",
        elements: [
          "Traditional wisdom",
          "Modern context",
          "Scientific understanding",
          "Practical application"
        ],
        methods: [
          "Contemplative practice",
          "Psychological integration",
          "Scientific study",
          "Life application"
        ],
        applications: [
          "Personal development",
          "Spiritual growth",
          "Life integration",
          "Social engagement"
        ]
      },
      {
        name: "Scientific Study",
        elements: [
          "Neuroscience research",
          "Psychological studies",
          "Consciousness research",
          "Clinical applications"
        ],
        methods: [
          "Brain imaging",
          "Psychological assessment",
          "Experiential analysis",
          "Clinical observation"
        ],
        applications: [
          "Understanding mechanisms",
          "Therapeutic use",
          "Personal development",
          "Clinical practice"
        ]
      }
    ],
    resources: [
      {
        title: "Modern Mysticism: Science and Spirit",
        link: "https://www.amazon.com/Modern-Mysticism-Science-Spirit/dp/0865714501?tag=zion0ba-20",
        description: "Guide to modern mystical understanding and practice"
      }
    ]
  }
]

export default function ReligiousMysticismPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Religious Mysticism & Sacred Experience</h1>
          <p className="text-xl text-muted-foreground">
            Explore mystical traditions, practices, and experiences across religions
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Mystical Traditions</TabsTrigger>
            <TabsTrigger value="states">Mystical States</TabsTrigger>
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

                      {tradition.practices.map((practice) => (
                        <div key={practice.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{practice.name}</h3>
                          <p className="text-muted-foreground">{practice.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Methods</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {practice.methods.map((method) => (
                                  <li key={method}>{method}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Stages</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {practice.stages.map((stage) => (
                                  <li key={stage}>{stage}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Experiences</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {practice.experiences.map((experience) => (
                                <li key={experience}>{experience}</li>
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

          <TabsContent value="states" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {mysticalStates.map((state) => (
                <Card key={state.state}>
                  <CardHeader>
                    <CardTitle>{state.state}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{state.description}</p>

                      {state.aspects.map((aspect) => (
                        <div key={aspect.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{aspect.name}</h3>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Characteristics</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {aspect.characteristics.map((characteristic) => (
                                  <li key={characteristic}>{characteristic}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Manifestations</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {aspect.manifestations.map((manifestation) => (
                                  <li key={manifestation}>{manifestation}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Implications</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {aspect.implications.map((implication) => (
                                <li key={implication}>{implication}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {state.resources.map((resource) => (
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

                      {approach.frameworks.map((framework) => (
                        <div key={framework.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{framework.name}</h3>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Elements</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {framework.elements.map((element) => (
                                  <li key={element}>{element}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Methods</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {framework.methods.map((method) => (
                                  <li key={method}>{method}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Applications</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {framework.applications.map((application) => (
                                <li key={application}>{application}</li>
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
              href="/studies/themes/spirituality/contemplation"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Contemplative Practice →
            </Link>
            <Link 
              href="/studies/themes/spirituality/meditation"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Meditation Traditions →
            </Link>
            <Link 
              href="/studies/themes/spirituality/wisdom"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Spiritual Wisdom →
            </Link>
            <Link 
              href="/studies/philosophy/metaphysics"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Metaphysics →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 