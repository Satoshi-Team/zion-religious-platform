import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HistoricalPeriod {
  title: string
  years: string
  description: string
  keyEvents: string[]
  significance: string
}

interface Movement {
  name: string
  period: string
  description: string
  keyFigures: string[]
  characteristics: string[]
  impact: string
}

interface Development {
  area: string
  description: string
  details: string[]
  significance: string
}

interface Challenge {
  name: string
  description: string
  response: string
  impact: string
  ongoingImplications: string[]
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

interface ModernChurchContent {
  introduction: string
  definition: string
  periods: HistoricalPeriod[]
  movements: Movement[]
  developments: Development[]
  challenges: Challenge[]
  globalChristianity: {
    description: string
    regions: Array<{
      name: string
      characteristics: string[]
      challenges: string[]
      opportunities: string[]
    }>
  }
  legacy: string[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Modern Church History | Christianity",
  description: "Explore the history of Christianity from the 17th century to the present, including global developments, theological movements, and contemporary challenges.",
  openGraph: {
    title: "Modern Church History | Christianity",
    description: "Comprehensive guide to modern Christian history and development",
    type: "website",
  },
}

const modernChurchContent: ModernChurchContent = {
  introduction: `Modern church history spans from the aftermath of the Protestant Reformation to the present day, encompassing dramatic social changes, intellectual developments, and the global expansion of Christianity. This period has seen unprecedented challenges and opportunities for the Christian faith.`,
  definition: `The modern era of church history represents a time of significant transformation, characterized by global expansion, theological diversification, engagement with modernity, and the emergence of new forms of Christian expression and practice.`,
  periods: [
    {
      title: "Post-Reformation Era",
      years: "1648-1789",
      description: "Period following the Peace of Westphalia, marked by Protestant scholasticism and Catholic renewal.",
      keyEvents: [
        "Rise of Pietism",
        "Great Awakening in America",
        "Methodist Revival in Britain",
        "Enlightenment challenges to faith",
        "Missionary expansion begins"
      ],
      significance: "Established patterns of Protestant denominationalism and evangelical revival."
    },
    {
      title: "Long 19th Century",
      years: "1789-1914",
      description: "Era of rapid social change, missionary expansion, and theological development.",
      keyEvents: [
        "Second Great Awakening",
        "Modern missionary movement",
        "Vatican I Council",
        "Rise of Biblical criticism",
        "Social Gospel movement"
      ],
      significance: "Expanded global Christian presence and engaged modern challenges."
    },
    {
      title: "20th Century",
      years: "1914-2000",
      description: "Period of global conflicts, ecumenical movements, and pentecostal growth.",
      keyEvents: [
        "World Wars impact",
        "Vatican II Council",
        "Pentecostal expansion",
        "Liberation theology",
        "Rise of Global South Christianity"
      ],
      significance: "Transformed Christianity into a truly global faith."
    },
    {
      title: "Contemporary Era",
      years: "2000-Present",
      description: "Current period marked by technological change, secularization, and global shifts.",
      keyEvents: [
        "Digital church emergence",
        "Global South leadership",
        "Interfaith dialogue",
        "Environmental engagement",
        "Post-Christian West"
      ],
      significance: "Reshaping Christian practice and identity in a digital, pluralistic world."
    }
  ],
  movements: [
    {
      name: "Evangelicalism",
      period: "18th century-Present",
      description: "Protestant movement emphasizing personal conversion, biblical authority, and evangelism.",
      keyFigures: [
        "Jonathan Edwards",
        "John Wesley",
        "Billy Graham",
        "John Stott"
      ],
      characteristics: [
        "Biblical authority",
        "Conversionism",
        "Activism",
        "Crucicentrism"
      ],
      impact: "Shaped Protestant spirituality and global missionary movement."
    },
    {
      name: "Liberal Christianity",
      period: "19th century-Present",
      description: "Movement seeking to reconcile Christianity with modern thought and culture.",
      keyFigures: [
        "Friedrich Schleiermacher",
        "Adolf von Harnack",
        "Paul Tillich",
        "Rudolf Bultmann"
      ],
      characteristics: [
        "Historical criticism",
        "Cultural accommodation",
        "Social reform emphasis",
        "Doctrinal flexibility"
      ],
      impact: "Influenced mainline denominations and theological education."
    },
    {
      name: "Pentecostalism",
      period: "20th century-Present",
      description: "Movement emphasizing the Holy Spirit's direct experience and charismatic gifts.",
      keyFigures: [
        "William Seymour",
        "Aimee Semple McPherson",
        "David du Plessis",
        "Oral Roberts"
      ],
      characteristics: [
        "Spirit baptism",
        "Divine healing",
        "Expressive worship",
        "Supernatural emphasis"
      ],
      impact: "Became fastest-growing Christian movement globally."
    }
  ],
  developments: [
    {
      area: "Theology",
      description: "Evolution of Christian thought in response to modern challenges",
      details: [
        "Neo-orthodoxy emergence",
        "Liberation theologies",
        "Feminist theology",
        "Ecological theology"
      ],
      significance: "Developed new theological approaches for contemporary issues"
    },
    {
      area: "Church and Society",
      description: "Changing relationship between Christianity and culture",
      details: [
        "Secularization response",
        "Social justice engagement",
        "Environmental stewardship",
        "Digital ministry"
      ],
      significance: "Redefined Christian social engagement and cultural presence"
    },
    {
      area: "Ecumenism",
      description: "Efforts toward Christian unity and cooperation",
      details: [
        "World Council of Churches",
        "Evangelical alliances",
        "Catholic-Protestant dialogue",
        "Orthodox participation"
      ],
      significance: "Advanced Christian cooperation and mutual understanding"
    }
  ],
  challenges: [
    {
      name: "Secularization",
      description: "Declining religious influence in society and personal life",
      response: "Development of new apologetics and cultural engagement",
      impact: "Transformed Christian presence in Western societies",
      ongoingImplications: [
        "Church attendance decline",
        "Religious pluralism",
        "Faith privatization",
        "Identity questions"
      ]
    },
    {
      name: "Scientific Advances",
      description: "Challenges from scientific discoveries and theories",
      response: "Science-faith dialogue and integration efforts",
      impact: "Reshaped understanding of creation and human nature",
      ongoingImplications: [
        "Evolution debate",
        "Bioethical questions",
        "Technological impact",
        "Environmental concerns"
      ]
    },
    {
      name: "Religious Pluralism",
      description: "Increasing religious diversity and interfaith contact",
      response: "Development of interfaith dialogue and theological reflection",
      impact: "New approaches to Christian identity and mission",
      ongoingImplications: [
        "Mission methods",
        "Truth claims",
        "Dialogue practice",
        "Inclusive theology"
      ]
    }
  ],
  globalChristianity: {
    description: "The transformation of Christianity into a truly global faith, with significant growth in the Global South.",
    regions: [
      {
        name: "Africa",
        characteristics: [
          "Rapid growth",
          "Indigenous theology",
          "Pentecostal influence",
          "Traditional culture integration"
        ],
        challenges: [
          "Leadership training",
          "Resource limitations",
          "Syncretism concerns",
          "Social issues"
        ],
        opportunities: [
          "Youth engagement",
          "Cultural authenticity",
          "Mission innovation",
          "Social transformation"
        ]
      },
      {
        name: "Asia",
        characteristics: [
          "Minority status",
          "Intellectual engagement",
          "Indigenous expressions",
          "Technology adoption"
        ],
        challenges: [
          "Religious persecution",
          "Cultural barriers",
          "Political restrictions",
          "Minority status"
        ],
        opportunities: [
          "Educational influence",
          "Cultural dialogue",
          "Social service",
          "Digital outreach"
        ]
      },
      {
        name: "Latin America",
        characteristics: [
          "Protestant growth",
          "Pentecostal vitality",
          "Social engagement",
          "Indigenous leadership"
        ],
        challenges: [
          "Economic inequality",
          "Religious competition",
          "Social justice",
          "Leadership development"
        ],
        opportunities: [
          "Youth ministry",
          "Social transformation",
          "Cultural influence",
          "Mission sending"
        ]
      }
    ]
  },
  legacy: [
    "Global diversity",
    "Social engagement",
    "Theological plurality",
    "Digital adaptation",
    "Environmental awareness",
    "Interfaith dialogue",
    "Cultural contextualization"
  ],
  resources: [
    {
      title: "A History of Christianity in the Modern World",
      author: "David Bebbington",
      url: "/resources/modern-christianity-bebbington",
      type: "Book",
      description: "Comprehensive overview of modern Christian developments.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0415669936"
    },
    {
      title: "The Next Christendom",
      author: "Philip Jenkins",
      url: "/resources/next-christendom-jenkins",
      type: "Book",
      description: "Analysis of Global South Christianity's rise.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0190625945"
    },
    {
      title: "Christianity in the Twentieth Century",
      author: "Brian Stanley",
      url: "/resources/christianity-twentieth-century-stanley",
      type: "Book",
      description: "Detailed study of recent Christian history.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0691157103"
    }
  ]
}

export default function ModernChurchPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Modern Church History</h1>
        <p className="text-xl mb-4">{modernChurchContent.introduction}</p>
        <p className="text-lg mb-8">{modernChurchContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Historical Periods</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {modernChurchContent.periods.map((period, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>
                  {period.title}
                  <span className="text-slate-600 text-sm block">
                    {period.years}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{period.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Events:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {period.keyEvents.map((event, idx) => (
                        <li key={idx}>{event}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Significance:</h4>
                    <p className="text-slate-600">{period.significance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Major Movements</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {modernChurchContent.movements.map((movement, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>
                  {movement.name}
                  <span className="text-slate-600 text-sm block">
                    {movement.period}
                  </span>
                </CardTitle>
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
                    <h4 className="font-semibold mb-2">Characteristics:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {movement.characteristics.map((characteristic, idx) => (
                        <li key={idx}>{characteristic}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Impact:</h4>
                    <p className="text-slate-600">{movement.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Key Developments</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {modernChurchContent.developments.map((development, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{development.area}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{development.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Details:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {development.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  Significance: {development.significance}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Contemporary Challenges</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {modernChurchContent.challenges.map((challenge, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{challenge.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{challenge.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Response:</h4>
                    <p className="text-slate-600">{challenge.response}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Impact:</h4>
                    <p className="text-slate-600">{challenge.impact}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Ongoing Implications:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {challenge.ongoingImplications.map((implication, idx) => (
                        <li key={idx}>{implication}</li>
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
        <h2 className="text-3xl font-bold mb-4">Global Christianity</h2>
        <Card className="mb-6">
          <CardContent className="pt-6">
            <p className="text-lg mb-6">{modernChurchContent.globalChristianity.description}</p>
          </CardContent>
        </Card>
        <div className="grid gap-6 lg:grid-cols-3">
          {modernChurchContent.globalChristianity.regions.map((region, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{region.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Characteristics:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {region.characteristics.map((char, idx) => (
                        <li key={idx}>{char}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Challenges:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {region.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Opportunities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {region.opportunities.map((opportunity, idx) => (
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
        <h2 className="text-3xl font-bold mb-4">Historical Legacy</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {modernChurchContent.legacy.map((item, index) => (
                <li key={index} className="p-4 bg-slate-50 rounded-lg">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Recommended Resources</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modernChurchContent.resources.map((resource, index) => (
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
          <Link href="/religion/christianity/history/reformation" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Reformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the Protestant Reformation and its impact.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/theology/contemporary" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Contemporary Theology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Study modern theological developments and trends.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/practices/global" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Global Christianity</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about Christianity's global expressions and practices.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 