import React from 'react'
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

interface KeyFigure {
  name: string
  role: string
  dates: string
  significance: string
  contributions: string[]
  writings?: string[]
}

interface Challenge {
  name: string
  description: string
  response: string
  keyFigures: string[]
  impact: string
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

interface EarlyChurchContent {
  introduction: string
  definition: string
  periods: HistoricalPeriod[]
  figures: KeyFigure[]
  challenges: Challenge[]
  developments: Array<{
    area: string
    description: string
    details: string[]
    significance: string
  }>
  legacy: string[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Early Church History | Christianity",
  description: "Explore the history of early Christianity from the apostolic period through the first few centuries, including key figures, developments, and challenges.",
  openGraph: {
    title: "Early Church History | Christianity",
    description: "Comprehensive guide to early Christian history and development",
    type: "website",
  },
}

const earlyChurchContent: EarlyChurchContent = {
  introduction: `The early church period, spanning from the death and resurrection of Jesus Christ to approximately the 5th century AD, represents a crucial formative era in Christian history. This period saw the emergence of essential doctrines, ecclesiastical structures, and the spread of Christianity throughout the Roman Empire.`,
  definition: `The early church era encompasses the apostolic age, the post-apostolic period, and the age of the church fathers, during which Christianity transformed from a small Jewish sect into a major religious force in the Roman world.`,
  periods: [
    {
      title: "Apostolic Age",
      years: "c. 30-100 AD",
      description: "The period of the original apostles and the formation of the first Christian communities.",
      keyEvents: [
        "Pentecost and the birth of the Church",
        "Spread of Christianity beyond Jerusalem",
        "Paul's missionary journeys",
        "Writing of the New Testament",
        "Destruction of Jerusalem Temple (70 AD)"
      ],
      significance: "Established the foundational teachings and practices of Christianity."
    },
    {
      title: "Post-Apostolic Period",
      years: "c. 100-250 AD",
      description: "The era of the apostolic fathers and the first systematic expressions of Christian theology.",
      keyEvents: [
        "Development of church organization",
        "First Christian apologetic writings",
        "Emergence of early creeds",
        "Growth of Christian communities",
        "Early persecutions"
      ],
      significance: "Consolidated Christian doctrine and established ecclesiastical structures."
    },
    {
      title: "Pre-Constantinian Era",
      years: "c. 250-313 AD",
      description: "Period of intense persecution and theological development before Christianity's legalization.",
      keyEvents: [
        "Diocletian persecution",
        "Development of catechetical schools",
        "Rise of monasticism",
        "Growth despite persecution",
        "Emergence of systematic theology"
      ],
      significance: "Demonstrated Christianity's resilience and deepened theological understanding."
    }
  ],
  figures: [
    {
      name: "Ignatius of Antioch",
      role: "Bishop and Martyr",
      dates: "c. 35-108 AD",
      significance: "Early advocate for episcopal church structure and unity",
      contributions: [
        "Emphasized episcopal authority",
        "Wrote seven authentic letters",
        "Developed Eucharistic theology",
        "Defended against docetism"
      ],
      writings: [
        "Letter to the Romans",
        "Letter to the Smyrnaeans",
        "Letter to Polycarp"
      ]
    },
    {
      name: "Justin Martyr",
      role: "Apologist and Philosopher",
      dates: "c. 100-165 AD",
      significance: "First major Christian apologist who engaged with Greek philosophy",
      contributions: [
        "Defended Christianity to Roman authorities",
        "Integrated Greek philosophy with Christian thought",
        "Described early Christian worship",
        "Developed Logos theology"
      ],
      writings: [
        "First Apology",
        "Second Apology",
        "Dialogue with Trypho"
      ]
    },
    {
      name: "Irenaeus of Lyon",
      role: "Bishop and Theologian",
      dates: "c. 130-202 AD",
      significance: "Major opponent of Gnosticism and developer of Christian orthodoxy",
      contributions: [
        "Refuted Gnostic teachings",
        "Developed doctrine of apostolic succession",
        "Emphasized unity of Old and New Testaments",
        "Articulated rule of faith"
      ],
      writings: [
        "Against Heresies",
        "Demonstration of Apostolic Preaching"
      ]
    }
  ],
  challenges: [
    {
      name: "Persecution",
      description: "Systematic opposition and violence from Roman authorities",
      response: "Development of martyrdom theology and apologetic literature",
      keyFigures: [
        "Polycarp",
        "Justin Martyr",
        "Perpetua and Felicity"
      ],
      impact: "Strengthened Christian identity and witness"
    },
    {
      name: "Gnosticism",
      description: "Syncretistic movement emphasizing secret knowledge and dualism",
      response: "Development of orthodox theology and canon",
      keyFigures: [
        "Irenaeus",
        "Tertullian",
        "Clement of Alexandria"
      ],
      impact: "Clarified Christian doctrine and scripture"
    },
    {
      name: "Montanism",
      description: "Charismatic movement claiming new revelation",
      response: "Development of criteria for orthodoxy and authority",
      keyFigures: [
        "Montanus",
        "Tertullian (later period)",
        "Priscilla and Maximilla"
      ],
      impact: "Clarified role of prophecy and scripture"
    }
  ],
  developments: [
    {
      area: "Doctrine",
      description: "Formation of core Christian beliefs and practices",
      details: [
        "Development of Trinitarian theology",
        "Christological formulations",
        "Establishment of creeds",
        "Sacramental theology"
      ],
      significance: "Established foundational Christian orthodoxy"
    },
    {
      area: "Worship",
      description: "Evolution of Christian liturgical practices",
      details: [
        "Sunday worship establishment",
        "Baptismal practices",
        "Eucharistic celebrations",
        "Prayer and hymn traditions"
      ],
      significance: "Created enduring patterns of Christian worship"
    },
    {
      area: "Organization",
      description: "Development of church structure and leadership",
      details: [
        "Episcopal system",
        "Role of deacons",
        "Monastic communities",
        "Geographical organization"
      ],
      significance: "Established enduring ecclesiastical patterns"
    }
  ],
  legacy: [
    "Established Christian orthodoxy",
    "Developed church organization",
    "Created theological vocabulary",
    "Established scriptural canon",
    "Formed liturgical traditions",
    "Demonstrated Christian resilience",
    "Shaped Western civilization"
  ],
  resources: [
    {
      title: "The Early Church",
      author: "Henry Chadwick",
      url: "/resources/early-church-chadwick",
      type: "Book",
      description: "Classic introduction to early Christian history.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0140231994"
    },
    {
      title: "Christianity in the First Three Centuries",
      author: "Hans Lietzmann",
      url: "/resources/early-christianity-lietzmann",
      type: "Book",
      description: "Detailed study of early Christian development.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0800634128"
    },
    {
      title: "The Rise of Christianity",
      author: "Rodney Stark",
      url: "/resources/rise-christianity-stark",
      type: "Book",
      description: "Sociological analysis of early Christian growth.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0060677015"
    }
  ]
}

export default function EarlyChurchPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Early Church History</h1>
        <p className="text-xl mb-4">{earlyChurchContent.introduction}</p>
        <p className="text-lg mb-8">{earlyChurchContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Historical Periods</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {earlyChurchContent.periods.map((period, index) => (
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
        <h2 className="text-3xl font-bold mb-4">Key Figures</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {earlyChurchContent.figures.map((figure, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>
                  {figure.name}
                  <span className="text-slate-600 text-sm block">
                    {figure.role} ({figure.dates})
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{figure.significance}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Contributions:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {figure.contributions.map((contribution, idx) => (
                        <li key={idx}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                  {figure.writings && (
                    <div>
                      <h4 className="font-semibold mb-2">Major Writings:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {figure.writings.map((writing, idx) => (
                          <li key={idx}>{writing}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Major Challenges</h2>
        <div className="grid gap-6">
          {earlyChurchContent.challenges.map((challenge, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{challenge.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Description:</h4>
                    <p className="text-slate-600">{challenge.description}</p>
                    <h4 className="font-semibold mb-2 mt-4">Response:</h4>
                    <p className="text-slate-600">{challenge.response}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Figures:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {challenge.keyFigures.map((figure, idx) => (
                        <li key={idx}>{figure}</li>
                      ))}
                    </ul>
                    <h4 className="font-semibold mb-2 mt-4">Impact:</h4>
                    <p className="text-slate-600">{challenge.impact}</p>
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
          {earlyChurchContent.developments.map((development, index) => (
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
        <h2 className="text-3xl font-bold mb-4">Historical Legacy</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {earlyChurchContent.legacy.map((item, index) => (
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
          {earlyChurchContent.resources.map((resource, index) => (
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
          <Link href="/religion/christianity/history/medieval" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Medieval Church</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the next major period of church history.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/theology/patristics" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Patristic Theology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Study the theological developments of the church fathers.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/practices/worship" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Early Christian Worship</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about early Christian liturgy and practices.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 