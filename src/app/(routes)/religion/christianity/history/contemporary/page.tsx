import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Trend {
  name: string
  description: string
  characteristics: string[]
  impact: string
  examples: string[]
}

interface Movement {
  name: string
  description: string
  keyFigures: string[]
  mainIdeas: string[]
  impact: string
  currentStatus: string
}

interface Challenge {
  name: string
  description: string
  implications: string[]
  responses: string[]
  futureOutlook: string
}

interface DigitalTransformation {
  area: string
  description: string
  examples: string[]
  impact: string
  challenges: string[]
  opportunities: string[]
}

interface Resource {
  title: string
  author?: string
  url: string
  type: string
  description: string
  affiliate?: boolean
  affiliateUrl?: string
}

interface ContemporaryChurchContent {
  introduction: string
  definition: string
  trends: Trend[]
  movements: Movement[]
  challenges: Challenge[]
  digitalTransformation: DigitalTransformation[]
  globalDynamics: {
    description: string
    shifts: Array<{
      area: string
      description: string
      implications: string[]
      examples: string[]
    }>
  }
  futureDirections: {
    area: string
    description: string
    possibilities: string[]
    challenges: string[]
  }[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Contemporary Church History | Christianity",
  description: "Explore contemporary Christianity, including current trends, movements, challenges, and the impact of digital transformation on religious practice.",
  openGraph: {
    title: "Contemporary Church History | Christianity",
    description: "Comprehensive guide to contemporary Christian developments and trends",
    type: "website",
  },
}

const contemporaryChurchContent: ContemporaryChurchContent = {
  introduction: `Contemporary church history examines Christianity's ongoing development in our rapidly changing world, focusing on the transformations and challenges facing the faith in the digital age, globalized context, and post-secular society.`,
  definition: `The contemporary period of church history encompasses the late 20th and early 21st centuries, characterized by technological revolution, cultural shifts, globalization, and the emergence of new forms of religious expression and practice.`,
  trends: [
    {
      name: "Digital Church",
      description: "Integration of technology and digital platforms in religious practice and community building",
      characteristics: [
        "Online worship services",
        "Virtual communities",
        "Social media ministry",
        "Digital resources",
        "Hybrid church models"
      ],
      impact: "Transformed how faith communities gather, worship, and connect",
      examples: [
        "Livestreamed services",
        "Church apps",
        "Online small groups",
        "Digital giving platforms",
        "Virtual reality church experiences"
      ]
    },
    {
      name: "Deconstruction Movement",
      description: "Critical examination and reassessment of traditional religious beliefs and practices",
      characteristics: [
        "Question traditional doctrines",
        "Emphasis on authenticity",
        "Social justice focus",
        "Progressive interpretation",
        "Community dialogue"
      ],
      impact: "Challenged established church structures and beliefs while promoting authentic faith exploration",
      examples: [
        "Exvangelical movement",
        "Progressive Christianity",
        "Inclusive church communities",
        "Faith reconstruction groups",
        "Religious trauma recovery"
      ]
    },
    {
      name: "Multiethnic Church Movement",
      description: "Intentional development of racially and culturally diverse congregations",
      characteristics: [
        "Diverse leadership",
        "Cultural integration",
        "Racial reconciliation",
        "Inclusive worship styles",
        "Cross-cultural ministry"
      ],
      impact: "Advanced racial reconciliation and cultural integration in Christian communities",
      examples: [
        "Multicultural worship services",
        "Diverse leadership teams",
        "Cultural celebration events",
        "Integration initiatives",
        "Cross-cultural partnerships"
      ]
    }
  ],
  movements: [
    {
      name: "Progressive Christianity",
      description: "Movement emphasizing social justice, inclusivity, and contemporary theological interpretation",
      keyFigures: [
        "Brian McLaren",
        "Richard Rohr",
        "Rachel Held Evans",
        "Diana Butler Bass"
      ],
      mainIdeas: [
        "Social justice emphasis",
        "LGBTQ+ inclusion",
        "Environmental stewardship",
        "Interfaith dialogue",
        "Biblical reinterpretation"
      ],
      impact: "Challenged traditional church positions on social issues and promoted inclusive theology",
      currentStatus: "Growing influence in mainline denominations and among younger Christians"
    },
    {
      name: "New Monasticism",
      description: "Contemporary movement applying monastic principles to modern Christian life",
      keyFigures: [
        "Shane Claiborne",
        "Jonathan Wilson-Hartgrove",
        "Karen Sloan",
        "Ian Morgan Cron"
      ],
      mainIdeas: [
        "Intentional community",
        "Simple living",
        "Social justice",
        "Contemplative practice",
        "Urban ministry"
      ],
      impact: "Renewed interest in contemplative spirituality and intentional Christian community",
      currentStatus: "Growing network of communities and influence on Christian spiritual formation"
    },
    {
      name: "Emerging Church",
      description: "Movement seeking to contextualize Christianity for postmodern culture",
      keyFigures: [
        "Rob Bell",
        "Peter Rollins",
        "Phyllis Tickle",
        "Tony Jones"
      ],
      mainIdeas: [
        "Cultural engagement",
        "Ancient-future worship",
        "Narrative theology",
        "Missional living",
        "Authentic community"
      ],
      impact: "Influenced worship styles and ministry approaches across denominations",
      currentStatus: "Evolved into various expressions of progressive and experimental Christianity"
    }
  ],
  challenges: [
    {
      name: "Religious Disaffiliation",
      description: "Growing trend of people leaving organized religion, particularly among younger generations",
      implications: [
        "Declining church attendance",
        "Changing religious identity",
        "Institutional sustainability",
        "Generational disconnect",
        "Resource challenges"
      ],
      responses: [
        "Innovation in ministry",
        "Focus on authenticity",
        "Addressing trauma",
        "Youth engagement",
        "Community building"
      ],
      futureOutlook: "Continued adaptation and reimagining of church structures and practices"
    },
    {
      name: "Cultural Polarization",
      description: "Increasing division over social, political, and theological issues within churches",
      implications: [
        "Church divisions",
        "Community conflict",
        "Witness credibility",
        "Leadership challenges",
        "Member retention"
      ],
      responses: [
        "Dialogue initiatives",
        "Bridge building",
        "Common ground focus",
        "Peace-making ministry",
        "Unity emphasis"
      ],
      futureOutlook: "Growing emphasis on unity amid diversity and peaceful dialogue"
    },
    {
      name: "Digital Transformation",
      description: "Rapid technological change affecting religious practice and community",
      implications: [
        "Virtual worship",
        "Online community",
        "Digital literacy",
        "Resource allocation",
        "Generational needs"
      ],
      responses: [
        "Digital strategy",
        "Hybrid models",
        "Tech investment",
        "Training programs",
        "Innovation focus"
      ],
      futureOutlook: "Continued integration of digital and traditional ministry approaches"
    }
  ],
  digitalTransformation: [
    {
      area: "Worship",
      description: "Integration of digital technologies in worship services and spiritual practices",
      examples: [
        "Livestreaming services",
        "Virtual communion",
        "Digital prayer walls",
        "Online giving",
        "Interactive worship"
      ],
      impact: "Expanded access and participation in worship experiences",
      challenges: [
        "Digital divide",
        "Technical issues",
        "Community building",
        "Sacramental practice",
        "Engagement quality"
      ],
      opportunities: [
        "Global reach",
        "Innovation",
        "Accessibility",
        "Youth engagement",
        "Resource sharing"
      ]
    },
    {
      area: "Community",
      description: "Development of digital platforms for Christian community and connection",
      examples: [
        "Online small groups",
        "Social media ministry",
        "Virtual fellowship",
        "Digital discipleship",
        "Community apps"
      ],
      impact: "Created new ways for Christians to connect and support each other",
      challenges: [
        "Authentic relationships",
        "Digital fatigue",
        "Privacy concerns",
        "Platform limitations",
        "Integration issues"
      ],
      opportunities: [
        "24/7 connection",
        "Global community",
        "Flexible participation",
        "Resource access",
        "Innovative ministry"
      ]
    },
    {
      area: "Education",
      description: "Digital transformation of Christian education and discipleship",
      examples: [
        "Online courses",
        "Digital resources",
        "Virtual seminaries",
        "Mobile learning",
        "Interactive Bible study"
      ],
      impact: "Increased access to theological education and spiritual formation resources",
      challenges: [
        "Quality control",
        "Student engagement",
        "Technology access",
        "Teacher training",
        "Cost management"
      ],
      opportunities: [
        "Global access",
        "Personalization",
        "Resource sharing",
        "Innovation",
        "Lifelong learning"
      ]
    }
  ],
  globalDynamics: {
    description: "The shifting dynamics of global Christianity in the contemporary period",
    shifts: [
      {
        area: "Global South Growth",
        description: "Continued expansion of Christianity in Africa, Asia, and Latin America",
        implications: [
          "Leadership shifts",
          "Theological diversity",
          "Cultural adaptation",
          "Resource distribution",
          "Mission dynamics"
        ],
        examples: [
          "African-led churches",
          "Asian theological development",
          "Latin American revival",
          "Reverse missions",
          "Indigenous leadership"
        ]
      },
      {
        area: "Post-Christian West",
        description: "Declining religious influence in traditionally Christian societies",
        implications: [
          "Cultural change",
          "Identity questions",
          "Ministry adaptation",
          "Resource challenges",
          "Mission rethinking"
        ],
        examples: [
          "European secularization",
          "American religious decline",
          "Alternative spirituality",
          "Church closures",
          "Cultural Christianity"
        ]
      },
      {
        area: "Global Networks",
        description: "Development of international Christian networks and partnerships",
        implications: [
          "Resource sharing",
          "Leadership development",
          "Mission cooperation",
          "Cultural exchange",
          "Innovation spread"
        ],
        examples: [
          "Global alliances",
          "Partnership missions",
          "Digital networks",
          "Leadership exchanges",
          "Resource sharing"
        ]
      }
    ]
  },
  futureDirections: [
    {
      area: "Digital Integration",
      description: "Continued development of digital ministry and hybrid church models",
      possibilities: [
        "AI integration",
        "VR church",
        "Digital sacraments",
        "Global connectivity",
        "Innovative worship"
      ],
      challenges: [
        "Digital divide",
        "Authentic community",
        "Technical complexity",
        "Resource allocation",
        "Theological questions"
      ]
    },
    {
      area: "Cultural Engagement",
      description: "Evolving approaches to cultural engagement and social witness",
      possibilities: [
        "New apologetics",
        "Cultural dialogue",
        "Social impact",
        "Public witness",
        "Creative ministry"
      ],
      challenges: [
        "Cultural opposition",
        "Identity preservation",
        "Message clarity",
        "Ethical complexity",
        "Unity maintenance"
      ]
    },
    {
      area: "Institutional Evolution",
      description: "Transformation of traditional church structures and organizations",
      possibilities: [
        "New models",
        "Flexible structures",
        "Network churches",
        "Resource sharing",
        "Innovation focus"
      ],
      challenges: [
        "Change resistance",
        "Resource limitations",
        "Leadership development",
        "Identity questions",
        "Sustainability"
      ]
    }
  ],
  resources: [
    {
      title: "The Future of Christianity",
      author: "David F. Ford",
      url: "/resources/future-christianity-ford",
      type: "Book",
      description: "Analysis of contemporary trends and future directions in Christianity.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1405152265"
    },
    {
      title: "Digital Religion",
      author: "Heidi Campbell",
      url: "/resources/digital-religion-campbell",
      type: "Book",
      description: "Study of technology's impact on religious practice.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0415676118"
    },
    {
      title: "The New Faces of Christianity",
      author: "Philip Jenkins",
      url: "/resources/new-faces-christianity-jenkins",
      type: "Book",
      description: "Exploration of Global South Christianity.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0195368517"
    }
  ]
}

export default function ContemporaryChurchPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Contemporary Church History</h1>
        <p className="text-xl mb-4">{contemporaryChurchContent.introduction}</p>
        <p className="text-lg mb-8">{contemporaryChurchContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Current Trends</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {contemporaryChurchContent.trends.map((trend, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{trend.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{trend.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Characteristics:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {trend.characteristics.map((char, idx) => (
                        <li key={idx}>{char}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {trend.examples.map((example, idx) => (
                        <li key={idx}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Impact:</h4>
                    <p className="text-slate-600">{trend.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Contemporary Movements</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {contemporaryChurchContent.movements.map((movement, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{movement.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{movement.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Figures:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {movement.keyFigures.map((figure, idx) => (
                        <li key={idx}>{figure}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Main Ideas:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {movement.mainIdeas.map((idea, idx) => (
                        <li key={idx}>{idea}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Impact:</h4>
                    <p className="text-slate-600">{movement.impact}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Current Status:</h4>
                    <p className="text-slate-600">{movement.currentStatus}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Current Challenges</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {contemporaryChurchContent.challenges.map((challenge, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{challenge.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{challenge.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Implications:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {challenge.implications.map((implication, idx) => (
                        <li key={idx}>{implication}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Responses:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {challenge.responses.map((response, idx) => (
                        <li key={idx}>{response}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Future Outlook:</h4>
                    <p className="text-slate-600">{challenge.futureOutlook}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Digital Transformation</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {contemporaryChurchContent.digitalTransformation.map((digital, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{digital.area}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{digital.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {digital.examples.map((example, idx) => (
                        <li key={idx}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Challenges:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {digital.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Opportunities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {digital.opportunities.map((opportunity, idx) => (
                        <li key={idx}>{opportunity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Global Dynamics</h2>
        <Card className="mb-6">
          <CardContent className="pt-6">
            <p className="text-lg mb-6">{contemporaryChurchContent.globalDynamics.description}</p>
          </CardContent>
        </Card>
        <div className="grid gap-6 lg:grid-cols-3">
          {contemporaryChurchContent.globalDynamics.shifts.map((shift, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{shift.area}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{shift.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Implications:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {shift.implications.map((implication, idx) => (
                        <li key={idx}>{implication}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {shift.examples.map((example, idx) => (
                        <li key={idx}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Future Directions</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {contemporaryChurchContent.futureDirections.map((direction, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{direction.area}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{direction.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Possibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {direction.possibilities.map((possibility, idx) => (
                        <li key={idx}>{possibility}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Challenges:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {direction.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Recommended Resources</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {contemporaryChurchContent.resources.map((resource, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
                {resource.author && (
                  <p className="text-sm text-slate-600">By {resource.author}</p>
                )}
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{resource.description}</p>
                <div className="space-x-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={resource.url}>Learn More</Link>
                  </Button>
                  {resource.affiliate && (
                    <Button asChild variant="default" size="sm">
                      <Link href={resource.affiliateUrl!} target="_blank" rel="noopener noreferrer">
                        View on Amazon
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Related Topics</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/religion/christianity/history/modern" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Modern Church</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore modern church history and developments.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/theology/contemporary" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Contemporary Theology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Study current theological trends and discussions.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/practices/digital" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Digital Christianity</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore Christianity in the digital age.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 