import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sacred Pilgrimage & Holy Journeys | Sacred Studies",
  description: "Explore sacred pilgrimage and holy journeys across traditions. In-depth analysis of pilgrimage practices, sacred sites, and spiritual journeys.",
  openGraph: {
    title: "Sacred Pilgrimage & Holy Journeys",
    description: "Comprehensive exploration of sacred pilgrimage and holy journeys across traditions.",
    type: "website",
    images: [{ url: "/images/og/sacred-pilgrimage.jpg" }]
  },
  keywords: [
    "sacred pilgrimage",
    "holy journeys",
    "pilgrimage practices",
    "sacred sites",
    "spiritual journeys",
    "religious pilgrimage",
    "sacred travel",
    "pilgrimage traditions",
    "pilgrimage studies",
    "sacred studies"
  ]
}

interface PilgrimageTradition {
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

const pilgrimageTraditions: PilgrimageTradition[] = [
  {
    tradition: "Sacred Pilgrimage",
    overview: "Traditional pilgrimage practices from major spiritual traditions",
    practices: [
      {
        name: "Holy Sites",
        description: "Sacred journeys to holy sites and sacred places",
        principles: [
          "Sacred geography",
          "Holy presence",
          "Spiritual journey",
          "Divine encounter"
        ],
        methods: [
          "Sacred travel",
          "Holy visitation",
          "Spiritual preparation",
          "Sacred rituals"
        ],
        significance: [
          "Divine blessing",
          "Sacred transformation",
          "Spiritual renewal",
          "Holy encounter"
        ]
      },
      {
        name: "Sacred Journeys",
        description: "Traditional practices of sacred pilgrimage",
        principles: [
          "Sacred path",
          "Divine guidance",
          "Holy intention",
          "Spiritual quest"
        ],
        methods: [
          "Journey preparation",
          "Sacred travel",
          "Holy practices",
          "Spiritual completion"
        ],
        significance: [
          "Sacred transformation",
          "Divine blessing",
          "Holy renewal",
          "Spiritual growth"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Pilgrimage: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Pilgrimage-Comprehensive-Guide-Practice/dp/0801046472?tag=zion0ba-20",
        description: "Guide to sacred pilgrimage practices"
      },
      {
        title: "The Art of Holy Journey",
        link: "https://www.amazon.com/Art-Holy-Journey-Traditional-Methods/dp/0802837504?tag=zion0ba-20",
        description: "Overview of traditional pilgrimage methods"
      }
    ]
  },
  {
    tradition: "Holy Journeys",
    overview: "Traditional practices of holy journeys and sacred travel",
    practices: [
      {
        name: "Sacred Travel",
        description: "Practices of sacred travel and holy journeying",
        principles: [
          "Sacred intention",
          "Holy purpose",
          "Spiritual journey",
          "Divine quest"
        ],
        methods: [
          "Sacred preparation",
          "Holy travel",
          "Spiritual practice",
          "Divine completion"
        ],
        significance: [
          "Sacred transformation",
          "Holy blessing",
          "Spiritual growth",
          "Divine encounter"
        ]
      },
      {
        name: "Sacred Sites",
        description: "Practices centered on visiting sacred sites",
        principles: [
          "Holy presence",
          "Sacred space",
          "Divine encounter",
          "Spiritual power"
        ],
        methods: [
          "Site preparation",
          "Sacred approach",
          "Holy practice",
          "Divine communion"
        ],
        significance: [
          "Sacred blessing",
          "Holy presence",
          "Divine power",
          "Spiritual renewal"
        ]
      }
    ],
    resources: [
      {
        title: "Holy Journeys: A Guide to Practice",
        link: "https://www.amazon.com/Holy-Journeys-Guide-Practice-Traditional/dp/0801046480?tag=zion0ba-20",
        description: "Guide to holy journey practices"
      },
      {
        title: "Sacred Sites: Traditional Methods",
        link: "https://www.amazon.com/Sacred-Sites-Traditional-Methods-Practice/dp/0802837512?tag=zion0ba-20",
        description: "Overview of sacred site practices"
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
    method: "Pilgrimage Practice",
    description: "Methods for engaging in sacred pilgrimage practices",
    aspects: [
      {
        name: "Journey Methods",
        principles: [
          "Sacred intention",
          "Holy purpose",
          "Spiritual journey",
          "Divine quest"
        ],
        practices: [
          "Journey preparation",
          "Sacred travel",
          "Holy practice",
          "Divine completion"
        ],
        applications: [
          "Sacred pilgrimage",
          "Holy journey",
          "Spiritual quest",
          "Divine encounter"
        ]
      },
      {
        name: "Sacred Methods",
        principles: [
          "Holy presence",
          "Sacred space",
          "Divine encounter",
          "Spiritual power"
        ],
        practices: [
          "Sacred preparation",
          "Holy approach",
          "Divine practice",
          "Sacred completion"
        ],
        applications: [
          "Sacred sites",
          "Holy places",
          "Divine presence",
          "Spiritual power"
        ]
      }
    ],
    resources: [
      {
        title: "Pilgrimage Practice: A Comprehensive Guide",
        link: "https://www.amazon.com/Pilgrimage-Practice-Comprehensive-Guide-Methods/dp/0800663950?tag=zion0ba-20",
        description: "Guide to pilgrimage practice methods"
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
    approach: "Modern Pilgrimage",
    description: "Contemporary approaches to sacred pilgrimage practices",
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
        title: "Modern Sacred Pilgrimage",
        link: "https://www.amazon.com/Modern-Sacred-Pilgrimage-Contemporary-Approaches/dp/0800698782?tag=zion0ba-20",
        description: "Contemporary methods in sacred pilgrimage"
      }
    ]
  }
]

export default function SacredPilgrimagePage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Sacred Pilgrimage & Holy Journeys</h1>
          <p className="text-xl text-muted-foreground">
            Explore pilgrimage traditions and methods of sacred journey
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Pilgrimage Traditions</TabsTrigger>
            <TabsTrigger value="methods">Practice Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {pilgrimageTraditions.map((tradition) => (
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
              href="/studies/practices/devotion"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Devotional Practices →
            </Link>
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