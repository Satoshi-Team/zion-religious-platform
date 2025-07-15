import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Psychology & Sacred Mind | Sacred Studies",
  description: "Explore religious psychology and sacred mental studies across traditions. In-depth analysis of psychological methods, religious experience, and contemporary approaches.",
  openGraph: {
    title: "Religious Psychology & Sacred Mind",
    description: "Comprehensive exploration of religious psychology and mental traditions.",
    type: "website",
    images: [{ url: "/images/og/religious-psychology.jpg" }]
  },
  keywords: [
    "religious psychology",
    "sacred mind",
    "psychological studies",
    "religious experience",
    "psychological methods",
    "sacred consciousness",
    "mental analysis",
    "religious behavior",
    "psychological research",
    "sacred psychology"
  ]
}

interface PsychologicalTradition {
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

const psychologicalTraditions: PsychologicalTradition[] = [
  {
    tradition: "Sacred Psychology",
    overview: "Traditional approaches to understanding religious psychology",
    methods: [
      {
        name: "Experiential Analysis",
        description: "Systematic study of religious psychological experiences",
        principles: [
          "Mental processes",
          "Sacred experience",
          "Religious cognition",
          "Spiritual development"
        ],
        techniques: [
          "Experience mapping",
          "Cognitive analysis",
          "Development study",
          "Mental research"
        ],
        applications: [
          "Personal growth",
          "Spiritual development",
          "Mental health",
          "Teaching methods"
        ]
      },
      {
        name: "Behavioral Studies",
        description: "Investigation of religious behaviors and practices",
        principles: [
          "Behavioral patterns",
          "Practice engagement",
          "Ritual behavior",
          "Social interaction"
        ],
        techniques: [
          "Behavioral observation",
          "Practice analysis",
          "Pattern study",
          "Interaction research"
        ],
        applications: [
          "Practice development",
          "Behavioral guidance",
          "Ritual engagement",
          "Social integration"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Psychology: A Guide",
        link: "https://www.amazon.com/Sacred-Psychology-Guide/dp/0195114523?tag=zion0ba-20",
        description: "Comprehensive guide to religious psychological studies"
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
    method: "Psychological Research",
    description: "Methods for studying religious psychological phenomena",
    aspects: [
      {
        name: "Empirical Methods",
        principles: [
          "Scientific rigor",
          "Data collection",
          "Statistical analysis",
          "Systematic observation"
        ],
        practices: [
          "Psychological testing",
          "Data analysis",
          "Behavioral observation",
          "Interview methods"
        ],
        outcomes: [
          "Mental insight",
          "Behavioral data",
          "Research findings",
          "Teaching resources"
        ]
      },
      {
        name: "Clinical Methods",
        principles: [
          "Therapeutic approach",
          "Personal growth",
          "Mental health",
          "Spiritual development"
        ],
        practices: [
          "Clinical observation",
          "Therapeutic work",
          "Development support",
          "Growth facilitation"
        ],
        outcomes: [
          "Personal healing",
          "Mental wellbeing",
          "Spiritual growth",
          "Teaching materials"
        ]
      }
    ],
    resources: [
      {
        title: "Psychological Methods",
        link: "https://www.amazon.com/Psychological-Methods/dp/0861711734?tag=zion0ba-20",
        description: "Guide to psychological research methods"
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
    approach: "Modern Psychology",
    description: "Contemporary approaches to religious psychological studies",
    elements: [
      {
        name: "Neuroscience Methods",
        features: [
          "Brain imaging",
          "Neural networks",
          "Cognitive science",
          "Mental processing"
        ],
        methods: [
          "Brain scanning",
          "Neural analysis",
          "Cognitive research",
          "Process mapping"
        ],
        implications: [
          "Neural understanding",
          "Mental insight",
          "Cognitive knowledge",
          "Research advances"
        ]
      },
      {
        name: "Integrative Approaches",
        features: [
          "Multiple methods",
          "Cross-disciplinary study",
          "Holistic understanding",
          "Comprehensive view"
        ],
        methods: [
          "Mixed methods",
          "Integrated analysis",
          "Holistic research",
          "Synthetic approach"
        ],
        implications: [
          "Deep understanding",
          "Rich insight",
          "Comprehensive knowledge",
          "Research impact"
        ]
      }
    ],
    resources: [
      {
        title: "Modern Religious Psychology",
        link: "https://www.amazon.com/Modern-Religious-Psychology/dp/0865714501?tag=zion0ba-20",
        description: "Guide to modern approaches in religious psychology"
      }
    ]
  }
]

export default function ReligiousPsychologyPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Religious Psychology & Sacred Mind</h1>
          <p className="text-xl text-muted-foreground">
            Explore psychological traditions and methods of studying religious experience
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Psychological Traditions</TabsTrigger>
            <TabsTrigger value="methods">Research Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {psychologicalTraditions.map((tradition) => (
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
              href="/studies/philosophy/anthropology"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Anthropology →
            </Link>
            <Link 
              href="/studies/philosophy/sociology"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Sociology →
            </Link>
            <Link 
              href="/studies/themes/mind/consciousness"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Consciousness →
            </Link>
            <Link 
              href="/studies/themes/mind/cognition"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Cognition →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 