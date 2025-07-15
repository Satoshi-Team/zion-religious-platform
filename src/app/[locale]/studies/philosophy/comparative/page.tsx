import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Comparative Religious Philosophy | Sacred Studies",
  description: "Explore comparative religious philosophy across traditions. In-depth analysis of cross-cultural philosophical dialogue, methodologies, and shared wisdom.",
  openGraph: {
    title: "Comparative Religious Philosophy",
    description: "Comprehensive exploration of comparative philosophical approaches across religious traditions.",
    type: "website",
    images: [{ url: "/images/og/comparative-philosophy.jpg" }]
  },
  keywords: [
    "comparative philosophy",
    "religious dialogue",
    "cross-cultural philosophy",
    "interfaith wisdom",
    "philosophical methods",
    "religious understanding",
    "shared wisdom",
    "philosophical dialogue",
    "cultural synthesis",
    "philosophical integration"
  ]
}

interface ComparativeMethod {
  method: string
  overview: string
  approaches: {
    name: string
    description: string
    principles: string[]
    techniques: string[]
    outcomes: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const comparativeMethods: ComparativeMethod[] = [
  {
    method: "Cross-Cultural Analysis",
    overview: "Methodologies for comparing philosophical concepts across traditions",
    approaches: [
      {
        name: "Conceptual Bridge-Building",
        description: "Identifying and analyzing parallel concepts across traditions",
        principles: [
          "Conceptual equivalence",
          "Cultural context",
          "Semantic analysis",
          "Philosophical resonance"
        ],
        techniques: [
          "Comparative textual analysis",
          "Conceptual mapping",
          "Cultural hermeneutics",
          "Linguistic analysis"
        ],
        outcomes: [
          "Shared understanding",
          "Conceptual bridges",
          "Cultural dialogue",
          "Philosophical synthesis"
        ]
      },
      {
        name: "Methodological Integration",
        description: "Combining analytical methods from different traditions",
        principles: [
          "Methodological pluralism",
          "Analytical synthesis",
          "Complementary approaches",
          "Integrative understanding"
        ],
        techniques: [
          "Multi-perspective analysis",
          "Methodological synthesis",
          "Comparative dialectics",
          "Integrative hermeneutics"
        ],
        outcomes: [
          "Enhanced methodology",
          "Deeper insights",
          "Integrated understanding",
          "New analytical tools"
        ]
      }
    ],
    resources: [
      {
        title: "Cross-Cultural Philosophy: Methods and Applications",
        link: "https://www.amazon.com/Cross-Cultural-Philosophy-Methods-Applications/dp/0195114523?tag=zion0ba-20",
        description: "Comprehensive guide to cross-cultural philosophical analysis"
      }
    ]
  }
]

interface PhilosophicalDialogue {
  dialogue: string
  description: string
  traditions: {
    name: string
    concepts: string[]
    methods: string[]
    contributions: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const philosophicalDialogues: PhilosophicalDialogue[] = [
  {
    dialogue: "East-West Dialogue",
    description: "Philosophical exchange between Eastern and Western traditions",
    traditions: [
      {
        name: "Buddhist-Christian Dialogue",
        concepts: [
          "Nature of consciousness",
          "Ultimate reality",
          "Ethical frameworks",
          "Contemplative practice"
        ],
        methods: [
          "Comparative theology",
          "Phenomenological analysis",
          "Contemplative dialogue",
          "Ethical reflection"
        ],
        contributions: [
          "Enriched understanding",
          "Practical synthesis",
          "Shared insights",
          "New perspectives"
        ]
      },
      {
        name: "Hindu-Western Philosophy",
        concepts: [
          "Consciousness studies",
          "Metaphysical reality",
          "Self and identity",
          "Knowledge theory"
        ],
        methods: [
          "Vedantic analysis",
          "Phenomenology",
          "Comparative epistemology",
          "Integrative metaphysics"
        ],
        contributions: [
          "Expanded frameworks",
          "Methodological insights",
          "Conceptual bridges",
          "Practical applications"
        ]
      }
    ],
    resources: [
      {
        title: "East-West Dialogue in Religious Philosophy",
        link: "https://www.amazon.com/East-West-Dialogue-Religious-Philosophy/dp/0861711734?tag=zion0ba-20",
        description: "Exploration of East-West philosophical dialogue"
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
    approach: "Integrative Philosophy",
    description: "Contemporary approaches to philosophical integration across traditions",
    frameworks: [
      {
        name: "Global Philosophy",
        elements: [
          "Cultural synthesis",
          "Universal principles",
          "Shared wisdom",
          "Common ground"
        ],
        methods: [
          "Cross-cultural dialogue",
          "Integrative analysis",
          "Comparative study",
          "Synthetic methodology"
        ],
        applications: [
          "Global ethics",
          "Interfaith dialogue",
          "Cultural understanding",
          "Practical wisdom"
        ]
      },
      {
        name: "Digital Integration",
        elements: [
          "Digital platforms",
          "Online dialogue",
          "Virtual communities",
          "Global networks"
        ],
        methods: [
          "Digital collaboration",
          "Virtual dialogue",
          "Online learning",
          "Network analysis"
        ],
        applications: [
          "Global education",
          "Digital dialogue",
          "Online community",
          "Knowledge sharing"
        ]
      }
    ],
    resources: [
      {
        title: "Integrative Religious Philosophy: A Global Approach",
        link: "https://www.amazon.com/Integrative-Religious-Philosophy-Global-Approach/dp/0865714501?tag=zion0ba-20",
        description: "Guide to integrative philosophical approaches"
      }
    ]
  }
]

export default function ComparativePhilosophyPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Comparative Religious Philosophy</h1>
          <p className="text-xl text-muted-foreground">
            Explore philosophical dialogue and understanding across religious traditions
          </p>
        </section>

        <Tabs defaultValue="methods" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="methods">Comparative Methods</TabsTrigger>
            <TabsTrigger value="dialogues">Philosophical Dialogues</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="methods" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {comparativeMethods.map((method) => (
                <Card key={method.method}>
                  <CardHeader>
                    <CardTitle>{method.method}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{method.overview}</p>

                      {method.approaches.map((approach) => (
                        <div key={approach.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{approach.name}</h3>
                          <p className="text-muted-foreground">{approach.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Principles</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {approach.principles.map((principle) => (
                                  <li key={principle}>{principle}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Techniques</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {approach.techniques.map((technique) => (
                                  <li key={technique}>{technique}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Outcomes</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {approach.outcomes.map((outcome) => (
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

          <TabsContent value="dialogues" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {philosophicalDialogues.map((dialogue) => (
                <Card key={dialogue.dialogue}>
                  <CardHeader>
                    <CardTitle>{dialogue.dialogue}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{dialogue.description}</p>

                      {dialogue.traditions.map((tradition) => (
                        <div key={tradition.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{tradition.name}</h3>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Key Concepts</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {tradition.concepts.map((concept) => (
                                  <li key={concept}>{concept}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Methods</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {tradition.methods.map((method) => (
                                  <li key={method}>{method}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Contributions</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {tradition.contributions.map((contribution) => (
                                <li key={contribution}>{contribution}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {dialogue.resources.map((resource) => (
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
              href="/studies/philosophy/metaphysics"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Metaphysics →
            </Link>
            <Link 
              href="/studies/philosophy/epistemology"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Epistemology →
            </Link>
            <Link 
              href="/studies/philosophy/ethics"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Ethics →
            </Link>
            <Link 
              href="/studies/themes/dialogue/interfaith"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Interfaith Dialogue →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 