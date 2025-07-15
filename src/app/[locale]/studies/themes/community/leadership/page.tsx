import React from 'react'
import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Leadership & Spiritual Authority | Sacred Studies",
  description: "Explore religious leadership roles, responsibilities, and traditions across faiths. In-depth analysis of spiritual authority, guidance, and community leadership.",
  openGraph: {
    title: "Religious Leadership & Spiritual Authority",
    description: "Comprehensive guide to religious leadership and spiritual authority across traditions.",
    type: "website",
    images: [{ url: "/images/og/religious-leadership.jpg" }]
  },
  keywords: [
    "religious leadership",
    "spiritual authority",
    "religious guidance",
    "pastoral care",
    "religious education",
    "community leadership",
    "spiritual mentoring",
    "religious administration",
    "faith leadership",
    "religious governance"
  ]
}

interface LeadershipRole {
  tradition: string
  overview: string
  roles: {
    title: string
    description: string
    responsibilities: string[]
    qualifications: string[]
    challenges: string[]
    modernContext: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const leadershipRoles: LeadershipRole[] = [
  {
    tradition: "Buddhist Leadership",
    overview: "Traditional and contemporary Buddhist leadership roles and responsibilities",
    roles: [
      {
        title: "Monastic Leaders",
        description: "Senior monastics who guide communities and preserve teachings",
        responsibilities: [
          "Teaching Dharma",
          "Community guidance",
          "Ritual leadership",
          "Monastic training"
        ],
        qualifications: [
          "Extensive meditation experience",
          "Deep scriptural knowledge",
          "Years of monastic training",
          "Teaching ability"
        ],
        challenges: [
          "Maintaining traditions",
          "Modern adaptations",
          "Succession planning",
          "Cultural preservation"
        ],
        modernContext: [
          "Digital teaching platforms",
          "Global outreach",
          "Interfaith dialogue",
          "Contemporary applications"
        ]
      },
      {
        title: "Lay Teachers",
        description: "Qualified lay practitioners who teach and guide communities",
        responsibilities: [
          "Meditation instruction",
          "Community programs",
          "Public education",
          "Practice guidance"
        ],
        qualifications: [
          "Established practice",
          "Teaching authorization",
          "Communication skills",
          "Community experience"
        ],
        challenges: [
          "Balancing roles",
          "Teaching authenticity",
          "Cultural adaptation",
          "Time management"
        ],
        modernContext: [
          "Online teaching",
          "Secular applications",
          "Professional development",
          "Community building"
        ]
      }
    ],
    resources: [
      {
        title: "Buddhist Leadership: Traditional and Contemporary",
        link: "https://www.amazon.com/Buddhist-Leadership-Traditional-Contemporary-Perspectives/dp/0861716159?tag=zion0ba-20",
        description: "Comprehensive guide to Buddhist leadership roles and responsibilities"
      }
    ]
  },
  {
    tradition: "Christian Leadership",
    overview: "Pastoral and ministerial leadership in Christian traditions",
    roles: [
      {
        title: "Ordained Ministry",
        description: "Clergy serving in pastoral and sacramental roles",
        responsibilities: [
          "Pastoral care",
          "Sacramental ministry",
          "Teaching",
          "Community leadership"
        ],
        qualifications: [
          "Theological education",
          "Ordination requirements",
          "Pastoral formation",
          "Spiritual maturity"
        ],
        challenges: [
          "Cultural relevance",
          "Institutional changes",
          "Vocational demands",
          "Community needs"
        ],
        modernContext: [
          "Digital ministry",
          "Social engagement",
          "Ecumenical work",
          "Contemporary issues"
        ]
      }
    ],
    resources: [
      {
        title: "Christian Leadership in a Changing World",
        link: "https://www.amazon.com/Christian-Leadership-Changing-World-Ministry/dp/0801018838?tag=zion0ba-20",
        description: "Guide to contemporary Christian leadership and ministry"
      }
    ]
  }
]

interface LeadershipPractice {
  category: string
  description: string
  elements: {
    name: string
    methods: string[]
    skills: string[]
    outcomes: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const leadershipPractices: LeadershipPractice[] = [
  {
    category: "Spiritual Guidance",
    description: "Methods and practices of spiritual direction and guidance",
    elements: [
      {
        name: "Individual Mentoring",
        methods: [
          "One-on-one guidance",
          "Spiritual counseling",
          "Practice instruction",
          "Life direction"
        ],
        skills: [
          "Active listening",
          "Discernment",
          "Emotional intelligence",
          "Spiritual maturity"
        ],
        outcomes: [
          "Personal growth",
          "Spiritual development",
          "Practice deepening",
          "Life integration"
        ]
      },
      {
        name: "Community Building",
        methods: [
          "Group facilitation",
          "Program development",
          "Conflict resolution",
          "Vision setting"
        ],
        skills: [
          "Communication",
          "Organization",
          "Collaboration",
          "Cultural sensitivity"
        ],
        outcomes: [
          "Community cohesion",
          "Shared purpose",
          "Collective growth",
          "Sustainable development"
        ]
      }
    ],
    resources: [
      {
        title: "The Art of Spiritual Guidance",
        link: "https://www.amazon.com/Art-Spiritual-Guidance-Contemporary-Approach/dp/0824518322?tag=zion0ba-20",
        description: "Guide to methods and practices of spiritual guidance"
      }
    ]
  }
]

interface LeadershipDevelopment {
  category: string
  description: string
  programs: {
    name: string
    components: string[]
    methods: string[]
    outcomes: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const leadershipDevelopment: LeadershipDevelopment[] = [
  {
    category: "Leadership Formation",
    description: "Programs and methods for developing religious leaders",
    programs: [
      {
        name: "Formal Training",
        components: [
          "Theological education",
          "Practical skills",
          "Spiritual formation",
          "Professional development"
        ],
        methods: [
          "Academic study",
          "Mentoring relationships",
          "Practical experience",
          "Supervised ministry"
        ],
        outcomes: [
          "Leadership competency",
          "Spiritual maturity",
          "Professional skills",
          "Community awareness"
        ]
      },
      {
        name: "Continuing Education",
        components: [
          "Skills updating",
          "Contemporary issues",
          "Professional networks",
          "Research engagement"
        ],
        methods: [
          "Workshops",
          "Conferences",
          "Online learning",
          "Peer groups"
        ],
        outcomes: [
          "Updated knowledge",
          "Enhanced skills",
          "Professional growth",
          "Network development"
        ]
      }
    ],
    resources: [
      {
        title: "Developing Religious Leaders",
        link: "https://www.amazon.com/Developing-Religious-Leaders-Contemporary-Approaches/dp/0800698345?tag=zion0ba-20",
        description: "Guide to leadership development in religious contexts"
      }
    ]
  }
]

export default function LeadershipPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Religious Leadership & Spiritual Authority</h1>
          <p className="text-xl text-muted-foreground">
            Explore the roles, responsibilities, and development of religious leadership across traditions
          </p>
        </section>

        <Tabs defaultValue="roles" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="roles">Leadership Roles</TabsTrigger>
            <TabsTrigger value="practices">Leadership Practices</TabsTrigger>
            <TabsTrigger value="development">Leadership Development</TabsTrigger>
          </TabsList>

          <TabsContent value="roles" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {leadershipRoles.map((role) => (
                <Card key={role.tradition}>
                  <CardHeader>
                    <CardTitle>{role.tradition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{role.overview}</p>

                      {role.roles.map((position) => (
                        <div key={position.title} className="space-y-4">
                          <h3 className="text-xl font-semibold">{position.title}</h3>
                          <p className="text-muted-foreground">{position.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Responsibilities</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {position.responsibilities.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Qualifications</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {position.qualifications.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Challenges</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {position.challenges.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Modern Context</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {position.modernContext.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {role.resources.map((resource) => (
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

          <TabsContent value="practices" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {leadershipPractices.map((practice) => (
                <Card key={practice.category}>
                  <CardHeader>
                    <CardTitle>{practice.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{practice.description}</p>

                      {practice.elements.map((element) => (
                        <div key={element.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{element.name}</h3>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Methods</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {element.methods.map((method) => (
                                  <li key={method}>{method}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Skills</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {element.skills.map((skill) => (
                                  <li key={skill}>{skill}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Outcomes</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {element.outcomes.map((outcome) => (
                                <li key={outcome}>{outcome}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {practice.resources.map((resource) => (
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

          <TabsContent value="development" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {leadershipDevelopment.map((development) => (
                <Card key={development.category}>
                  <CardHeader>
                    <CardTitle>{development.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{development.description}</p>

                      {development.programs.map((program) => (
                        <div key={program.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{program.name}</h3>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Components</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {program.components.map((component) => (
                                  <li key={component}>{component}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Methods</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {program.methods.map((method) => (
                                  <li key={method}>{method}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Outcomes</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {program.outcomes.map((outcome) => (
                                <li key={outcome}>{outcome}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {development.resources.map((resource) => (
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
              href="/studies/themes/community/congregations"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Congregations →
            </Link>
            <Link 
              href="/studies/themes/community/monastic"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Monastic Communities →
            </Link>
            <Link 
              href="/studies/practices/worship"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Worship Practices →
            </Link>
            <Link 
              href="/studies/practices/teaching"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Teaching →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <Link 
              href="/studies/themes/spirituality/guidance"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Spiritual Guidance →
            </Link>
            <Link 
              href="/studies/themes/spirituality/formation"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Spiritual Formation →
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