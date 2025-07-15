import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sacred Festivals & Holy Celebrations | Sacred Studies",
  description: "Explore sacred festivals and holy celebrations across traditions. In-depth analysis of festival practices, celebratory methods, and traditional observances.",
  openGraph: {
    title: "Sacred Festivals & Holy Celebrations",
    description: "Comprehensive exploration of sacred festivals and holy celebrations across traditions.",
    type: "website",
    images: [{ url: "/images/og/sacred-festivals.jpg" }]
  },
  keywords: [
    "sacred festivals",
    "holy celebrations",
    "festival practices",
    "celebratory methods",
    "traditional observances",
    "religious festivals",
    "sacred celebrations",
    "festival traditions",
    "festival studies",
    "sacred studies"
  ]
}

interface FestivalTradition {
  tradition: string
  overview: string
  festivals: {
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

const festivalTraditions: FestivalTradition[] = [
  {
    tradition: "Sacred Festivals",
    overview: "Traditional sacred festivals from major religious traditions",
    festivals: [
      {
        name: "Seasonal Festivals",
        description: "Sacred celebrations marking natural cycles and seasons",
        principles: [
          "Sacred timing",
          "Natural cycles",
          "Divine harmony",
          "Spiritual renewal"
        ],
        methods: [
          "Seasonal rituals",
          "Sacred gatherings",
          "Traditional customs",
          "Community celebration"
        ],
        significance: [
          "Natural harmony",
          "Spiritual renewal",
          "Community unity",
          "Divine connection"
        ]
      },
      {
        name: "Holy Days",
        description: "Sacred observances of holy days and religious festivals",
        principles: [
          "Sacred time",
          "Divine presence",
          "Holy remembrance",
          "Spiritual celebration"
        ],
        methods: [
          "Sacred rituals",
          "Holy gatherings",
          "Traditional practices",
          "Community worship"
        ],
        significance: [
          "Sacred memory",
          "Divine presence",
          "Community bonding",
          "Spiritual renewal"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Festivals: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Festivals-Comprehensive-Guide-Practice/dp/0801046498?tag=zion0ba-20",
        description: "Guide to sacred festival practices"
      },
      {
        title: "The Art of Sacred Celebration",
        link: "https://www.amazon.com/Art-Sacred-Celebration-Traditional-Methods/dp/0802837520?tag=zion0ba-20",
        description: "Overview of traditional celebration methods"
      }
    ]
  },
  {
    tradition: "Holy Celebrations",
    overview: "Traditional holy celebrations and sacred observances",
    festivals: [
      {
        name: "Community Festivals",
        description: "Sacred celebrations bringing communities together",
        principles: [
          "Community unity",
          "Sacred gathering",
          "Divine presence",
          "Spiritual celebration"
        ],
        methods: [
          "Community rituals",
          "Sacred feasts",
          "Traditional customs",
          "Collective worship"
        ],
        significance: [
          "Community bonding",
          "Sacred unity",
          "Divine blessing",
          "Spiritual renewal"
        ]
      },
      {
        name: "Sacred Feasts",
        description: "Holy feasts and sacred celebrations",
        principles: [
          "Sacred sharing",
          "Divine abundance",
          "Holy communion",
          "Spiritual nourishment"
        ],
        methods: [
          "Sacred preparation",
          "Holy sharing",
          "Traditional foods",
          "Community gathering"
        ],
        significance: [
          "Sacred communion",
          "Divine blessing",
          "Community unity",
          "Spiritual nourishment"
        ]
      }
    ],
    resources: [
      {
        title: "Holy Celebrations: A Guide to Practice",
        link: "https://www.amazon.com/Holy-Celebrations-Guide-Practice-Traditional/dp/0801046501?tag=zion0ba-20",
        description: "Guide to holy celebration practices"
      },
      {
        title: "Sacred Feasts: Traditional Methods",
        link: "https://www.amazon.com/Sacred-Feasts-Traditional-Methods-Practice/dp/0802837539?tag=zion0ba-20",
        description: "Overview of traditional feast practices"
      }
    ]
  }
]

interface CelebrationMethod {
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

const celebrationMethods: CelebrationMethod[] = [
  {
    method: "Festival Practice",
    description: "Methods for engaging in sacred festival practices",
    aspects: [
      {
        name: "Sacred Methods",
        principles: [
          "Sacred timing",
          "Divine celebration",
          "Holy gathering",
          "Spiritual joy"
        ],
        practices: [
          "Sacred preparation",
          "Divine celebration",
          "Holy gathering",
          "Spiritual completion"
        ],
        applications: [
          "Sacred festival",
          "Divine celebration",
          "Holy gathering",
          "Spiritual practice"
        ]
      },
      {
        name: "Celebratory Methods",
        principles: [
          "Sacred joy",
          "Divine presence",
          "Holy communion",
          "Spiritual celebration"
        ],
        practices: [
          "Sacred celebration",
          "Divine gathering",
          "Holy communion",
          "Spiritual festivity"
        ],
        applications: [
          "Sacred celebration",
          "Divine festivity",
          "Holy gathering",
          "Spiritual communion"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Celebration: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Celebration-Comprehensive-Guide-Methods/dp/0800663969?tag=zion0ba-20",
        description: "Guide to sacred celebration methods"
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
    approach: "Modern Festival",
    description: "Contemporary approaches to sacred festival practices",
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
        title: "Modern Sacred Festival",
        link: "https://www.amazon.com/Modern-Sacred-Festival-Contemporary-Approaches/dp/0800698790?tag=zion0ba-20",
        description: "Contemporary methods in sacred festival"
      }
    ]
  }
]

export default function SacredFestivalsPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Sacred Festivals & Holy Celebrations</h1>
          <p className="text-xl text-muted-foreground">
            Explore festival traditions and methods of sacred celebration
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Festival Traditions</TabsTrigger>
            <TabsTrigger value="methods">Celebration Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {festivalTraditions.map((tradition) => (
                <Card key={tradition.tradition}>
                  <CardHeader>
                    <CardTitle>{tradition.tradition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{tradition.overview}</p>

                      {tradition.festivals.map((festival) => (
                        <div key={festival.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{festival.name}</h3>
                          <p className="text-muted-foreground">{festival.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Principles</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {festival.principles.map((principle) => (
                                  <li key={principle}>{principle}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Methods</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {festival.methods.map((method) => (
                                  <li key={method}>{method}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Significance</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {festival.significance.map((item) => (
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
              {celebrationMethods.map((method) => (
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
              href="/studies/practices/worship"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Worship Practices →
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
              href="/studies/practices/rituals"
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