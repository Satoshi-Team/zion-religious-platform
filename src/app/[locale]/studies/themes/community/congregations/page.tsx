import React from 'react'
import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Congregations & Faith Communities | Sacred Studies",
  description: "Explore religious congregations, community structures, worship practices, and social dynamics across faith traditions. In-depth analysis of communal religious life.",
  openGraph: {
    title: "Religious Congregations & Faith Communities",
    description: "Comprehensive guide to religious congregations and faith communities across traditions.",
    type: "website",
    images: [{ url: "/images/og/religious-congregations.jpg" }]
  },
  keywords: [
    "religious congregations",
    "faith communities",
    "worship practices",
    "community life",
    "religious gatherings",
    "sacred assembly",
    "communal worship",
    "spiritual community",
    "religious organization",
    "congregation dynamics"
  ]
}

interface CongregationType {
  category: string
  overview: string
  structures: {
    name: string
    description: string
    features: string[]
    practices: string[]
    dynamics: string[]
    challenges: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const congregationTypes: CongregationType[] = [
  {
    category: "Traditional Congregations",
    overview: "Historical and established religious congregational structures",
    structures: [
      {
        name: "Local Worship Communities",
        description: "Primary gathering places for regular communal worship and religious practice",
        features: [
          "Dedicated sacred spaces",
          "Regular worship schedules",
          "Hierarchical leadership",
          "Community programs"
        ],
        practices: [
          "Communal prayer",
          "Religious education",
          "Life cycle ceremonies",
          "Festival celebrations"
        ],
        dynamics: [
          "Intergenerational relationships",
          "Social support networks",
          "Cultural preservation",
          "Spiritual mentorship"
        ],
        challenges: [
          "Maintaining tradition",
          "Generational differences",
          "Resource management",
          "Modern adaptations"
        ]
      },
      {
        name: "Extended Religious Networks",
        description: "Broader organizational structures connecting multiple congregations",
        features: [
          "Shared resources",
          "Coordinated programs",
          "Common governance",
          "Standardized practices"
        ],
        practices: [
          "Joint celebrations",
          "Shared education",
          "Resource sharing",
          "Collaborative projects"
        ],
        dynamics: [
          "Inter-congregation relationships",
          "Regional coordination",
          "Resource distribution",
          "Leadership development"
        ],
        challenges: [
          "Maintaining unity",
          "Geographic coordination",
          "Resource allocation",
          "Policy implementation"
        ]
      }
    ],
    resources: [
      {
        title: "Building Congregations: Traditional Models",
        link: "https://www.amazon.com/Building-Congregations-Traditional-Models-Practice/dp/0800698452?tag=zion0ba-20",
        description: "Comprehensive guide to traditional congregational structures and practices"
      }
    ]
  },
  {
    category: "Contemporary Forms",
    overview: "Modern adaptations and new models of religious community",
    structures: [
      {
        name: "Emerging Communities",
        description: "Innovative approaches to religious gathering and practice",
        features: [
          "Flexible structures",
          "Digital integration",
          "Participatory leadership",
          "Adaptive spaces"
        ],
        practices: [
          "Hybrid worship",
          "Online community",
          "Collaborative learning",
          "Social engagement"
        ],
        dynamics: [
          "Fluid membership",
          "Digital relationships",
          "Distributed leadership",
          "Cross-cultural exchange"
        ],
        challenges: [
          "Community cohesion",
          "Digital-physical balance",
          "Leadership development",
          "Sustainable growth"
        ]
      }
    ],
    resources: [
      {
        title: "The Future of Congregation: Digital Age",
        link: "https://www.amazon.com/Future-Congregation-Digital-Religious-Communities/dp/0830841725?tag=zion0ba-20",
        description: "Analysis of contemporary congregational forms and future trends"
      }
    ]
  }
]

interface WorshipPattern {
  category: string
  description: string
  elements: {
    name: string
    features: string[]
    practices: string[]
    benefits: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const worshipPatterns: WorshipPattern[] = [
  {
    category: "Communal Worship",
    description: "Patterns and practices of collective religious observance",
    elements: [
      {
        name: "Regular Gatherings",
        features: [
          "Structured liturgy",
          "Communal prayer",
          "Sacred music",
          "Ritual actions"
        ],
        practices: [
          "Collective worship",
          "Shared meditation",
          "Community singing",
          "Sacred readings"
        ],
        benefits: [
          "Spiritual growth",
          "Community bonding",
          "Cultural continuity",
          "Social support"
        ]
      },
      {
        name: "Festival Celebrations",
        features: [
          "Special rituals",
          "Community meals",
          "Cultural programs",
          "Intergenerational activities"
        ],
        practices: [
          "Ceremonial worship",
          "Traditional customs",
          "Shared celebrations",
          "Educational events"
        ],
        benefits: [
          "Cultural preservation",
          "Community unity",
          "Spiritual renewal",
          "Social connection"
        ]
      }
    ],
    resources: [
      {
        title: "Patterns of Congregational Worship",
        link: "https://www.amazon.com/Patterns-Congregational-Worship-Traditions/dp/0664261508?tag=zion0ba-20",
        description: "Guide to worship patterns and practices in congregational settings"
      }
    ]
  }
]

interface CommunityDynamic {
  category: string
  description: string
  aspects: {
    name: string
    elements: string[]
    implications: string[]
    strategies: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const communityDynamics: CommunityDynamic[] = [
  {
    category: "Social Relationships",
    description: "Interpersonal dynamics within religious communities",
    aspects: [
      {
        name: "Community Bonds",
        elements: [
          "Shared values",
          "Mutual support",
          "Common purpose",
          "Collective identity"
        ],
        implications: [
          "Social cohesion",
          "Emotional support",
          "Spiritual growth",
          "Cultural continuity"
        ],
        strategies: [
          "Community programs",
          "Social activities",
          "Support networks",
          "Mentorship initiatives"
        ]
      },
      {
        name: "Leadership Relations",
        elements: [
          "Authority structures",
          "Decision making",
          "Conflict resolution",
          "Vision sharing"
        ],
        implications: [
          "Community direction",
          "Organizational health",
          "Member engagement",
          "Growth potential"
        ],
        strategies: [
          "Leadership development",
          "Communication channels",
          "Collaborative planning",
          "Conflict management"
        ]
      }
    ],
    resources: [
      {
        title: "Building Healthy Congregations",
        link: "https://www.amazon.com/Building-Healthy-Congregations-Relationships-Community/dp/0827236646?tag=zion0ba-20",
        description: "Guide to developing healthy community relationships and dynamics"
      }
    ]
  }
]

export default function CongregationsPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Religious Congregations & Faith Communities</h1>
          <p className="text-xl text-muted-foreground">
            Explore the structures, practices, and dynamics of religious congregations across traditions
          </p>
        </section>

        <Tabs defaultValue="types" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="types">Congregation Types</TabsTrigger>
            <TabsTrigger value="worship">Worship Patterns</TabsTrigger>
            <TabsTrigger value="dynamics">Community Dynamics</TabsTrigger>
          </TabsList>

          <TabsContent value="types" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {congregationTypes.map((type) => (
                <Card key={type.category}>
                  <CardHeader>
                    <CardTitle>{type.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{type.overview}</p>

                      {type.structures.map((structure) => (
                        <div key={structure.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{structure.name}</h3>
                          <p className="text-muted-foreground">{structure.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Features</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {structure.features.map((feature) => (
                                  <li key={feature}>{feature}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Practices</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {structure.practices.map((practice) => (
                                  <li key={practice}>{practice}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Dynamics</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {structure.dynamics.map((dynamic) => (
                                  <li key={dynamic}>{dynamic}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Challenges</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {structure.challenges.map((challenge) => (
                                  <li key={challenge}>{challenge}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {type.resources.map((resource) => (
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

          <TabsContent value="worship" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {worshipPatterns.map((pattern) => (
                <Card key={pattern.category}>
                  <CardHeader>
                    <CardTitle>{pattern.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{pattern.description}</p>

                      {pattern.elements.map((element) => (
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
                              <h4 className="font-semibold">Practices</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {element.practices.map((practice) => (
                                  <li key={practice}>{practice}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Benefits</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {element.benefits.map((benefit) => (
                                <li key={benefit}>{benefit}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {pattern.resources.map((resource) => (
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

          <TabsContent value="dynamics" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {communityDynamics.map((dynamic) => (
                <Card key={dynamic.category}>
                  <CardHeader>
                    <CardTitle>{dynamic.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{dynamic.description}</p>

                      {dynamic.aspects.map((aspect) => (
                        <div key={aspect.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{aspect.name}</h3>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Elements</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {aspect.elements.map((element) => (
                                  <li key={element}>{element}</li>
                                ))}
                              </ul>
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

                          <div className="space-y-2">
                            <h4 className="font-semibold">Strategies</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {aspect.strategies.map((strategy) => (
                                <li key={strategy}>{strategy}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {dynamic.resources.map((resource) => (
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
              href="/studies/themes/community/monastic"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Monastic Communities →
            </Link>
            <Link 
              href="/studies/themes/community/leadership"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Leadership →
            </Link>
            <Link 
              href="/studies/practices/worship"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Worship Practices →
            </Link>
            <Link 
              href="/studies/practices/rituals"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Rituals →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <Link 
              href="/studies/themes/spirituality/practices"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Spiritual Practices →
            </Link>
            <Link 
              href="/studies/themes/spirituality/experience"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Spiritual Experience →
            </Link>
            <Link 
              href="/studies/philosophy/ethics"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Ethics →
            </Link>
            <Link 
              href="/studies/themes/community/organization"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Community Organization →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 