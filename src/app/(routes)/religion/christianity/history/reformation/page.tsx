import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ReformationPeriod {
  title: string
  years: string
  description: string
  keyEvents: string[]
  significance: string
}

interface Reformer {
  name: string
  role: string
  dates: string
  significance: string
  contributions: string[]
  writings: string[]
  theology?: {
    key: string
    description: string
  }[]
}

interface Movement {
  name: string
  leader: string
  years: string
  keyPrinciples: string[]
  distinctives: string[]
  impact: string
}

interface Development {
  area: string
  description: string
  details: string[]
  significance: string
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

interface ReformationContent {
  introduction: string
  definition: string
  periods: ReformationPeriod[]
  reformers: Reformer[]
  movements: Movement[]
  catholicReform: {
    description: string
    initiatives: Array<{
      name: string
      year: string
      description: string
      impact: string
    }>
  }
  developments: Development[]
  legacy: string[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Reformation History | Christianity",
  description: "Explore the Protestant Reformation and Catholic Reform of the 16th century, including key reformers, theological developments, and lasting impacts.",
  openGraph: {
    title: "Reformation History | Christianity",
    description: "Comprehensive guide to the Protestant Reformation and Catholic Reform",
    type: "website",
  },
}

const reformationContent: ReformationContent = {
  introduction: `The Protestant Reformation, beginning in the early 16th century, was a transformative religious movement that fundamentally reshaped Western Christianity and European society. This period witnessed dramatic changes in theology, church structure, and the relationship between religion and society.`,
  definition: `The Reformation era represents a major schism in Western Christianity, characterized by calls for reform of the Catholic Church, the emergence of Protestant denominations, and subsequent Catholic renewal, leading to lasting changes in Christian doctrine, practice, and culture.`,
  periods: [
    {
      title: "Early Reformation",
      years: "1517-1525",
      description: "Initial period of reform sparked by Luther's 95 Theses and early Protestant developments.",
      keyEvents: [
        "Luther posts 95 Theses (1517)",
        "Leipzig Debate (1519)",
        "Diet of Worms (1521)",
        "Translation of New Testament into German (1522)",
        "Peasants' War (1524-1525)"
      ],
      significance: "Established foundational Protestant principles and challenged church authority."
    },
    {
      title: "Reformation Expansion",
      years: "1525-1555",
      description: "Period of rapid spread of Protestant ideas and establishment of reformed churches.",
      keyEvents: [
        "Formation of Lutheran churches",
        "Zwingli's reforms in Zurich",
        "Anabaptist movement begins",
        "Calvin's arrival in Geneva (1536)",
        "Council of Trent begins (1545)"
      ],
      significance: "Developed distinct Protestant traditions and theological systems."
    },
    {
      title: "Confessional Era",
      years: "1555-1648",
      description: "Period of consolidation and conflict between Catholic and Protestant territories.",
      keyEvents: [
        "Peace of Augsburg (1555)",
        "Elizabeth I's Settlement (1559)",
        "St. Bartholomew's Day Massacre (1572)",
        "Thirty Years' War (1618-1648)",
        "Peace of Westphalia (1648)"
      ],
      significance: "Established principle of cuius regio, eius religio and religious pluralism."
    }
  ],
  reformers: [
    {
      name: "Martin Luther",
      role: "German Reformer",
      dates: "1483-1546",
      significance: "Primary catalyst of the Protestant Reformation",
      contributions: [
        "Doctrine of justification by faith alone",
        "Translation of Bible into German",
        "Reform of worship and liturgy",
        "Emphasis on priesthood of all believers"
      ],
      writings: [
        "95 Theses (1517)",
        "On the Freedom of a Christian (1520)",
        "On the Bondage of the Will (1525)",
        "Large and Small Catechisms (1529)"
      ],
      theology: [
        {
          key: "Sola Fide",
          description: "Justification by faith alone, apart from works"
        },
        {
          key: "Sola Scriptura",
          description: "Scripture alone as the supreme authority"
        },
        {
          key: "Priesthood of Believers",
          description: "All Christians have direct access to God"
        }
      ]
    },
    {
      name: "John Calvin",
      role: "French Reformer",
      dates: "1509-1564",
      significance: "Systematic theologian of the Reformed tradition",
      contributions: [
        "Systematic Reformed theology",
        "Geneva church organization",
        "Educational reforms",
        "International Protestant influence"
      ],
      writings: [
        "Institutes of the Christian Religion",
        "Commentary on Romans",
        "Reply to Sadoleto",
        "Ecclesiastical Ordinances"
      ],
      theology: [
        {
          key: "Divine Sovereignty",
          description: "God's absolute control over all things"
        },
        {
          key: "Predestination",
          description: "God's eternal decree of election and reprobation"
        },
        {
          key: "Church Discipline",
          description: "Structured approach to maintaining pure church"
        }
      ]
    },
    {
      name: "Huldrych Zwingli",
      role: "Swiss Reformer",
      dates: "1484-1531",
      significance: "Leader of Swiss Reformation and sacramental reformer",
      contributions: [
        "Reformed understanding of the Lord's Supper",
        "Reformation in Zurich",
        "Emphasis on biblical preaching",
        "Reform of church and society"
      ],
      writings: [
        "67 Articles",
        "On the Lord's Supper",
        "On Divine Providence",
        "Commentary on True and False Religion"
      ],
      theology: [
        {
          key: "Memorial View",
          description: "Lord's Supper as memorial rather than physical presence"
        },
        {
          key: "Scripture Principle",
          description: "Bible as sole authority for faith and practice"
        },
        {
          key: "Church-State Relations",
          description: "Cooperation between religious and civil authorities"
        }
      ]
    }
  ],
  movements: [
    {
      name: "Lutheran Reformation",
      leader: "Martin Luther",
      years: "1517-1555",
      keyPrinciples: [
        "Justification by faith alone",
        "Authority of Scripture",
        "Priesthood of all believers",
        "Two kingdoms doctrine"
      ],
      distinctives: [
        "Conservative liturgical reform",
        "Consubstantiation view of Eucharist",
        "Strong emphasis on grace",
        "Retention of some traditional practices"
      ],
      impact: "Established first major Protestant tradition and influenced Northern European Christianity"
    },
    {
      name: "Reformed/Calvinist Movement",
      leader: "John Calvin",
      years: "1536-1564",
      keyPrinciples: [
        "Divine sovereignty",
        "Predestination",
        "Covenant theology",
        "Reformed worship"
      ],
      distinctives: [
        "Systematic theology",
        "Presbyterian church government",
        "Emphasis on discipline",
        "Integration of faith and society"
      ],
      impact: "Created international Reformed movement and influenced modern democracy"
    },
    {
      name: "Radical Reformation",
      leader: "Various Leaders",
      years: "1525-1600",
      keyPrinciples: [
        "Believers' baptism",
        "Separation of church and state",
        "Discipleship",
        "Pacifism"
      ],
      distinctives: [
        "Voluntary church membership",
        "Strict biblical literalism",
        "Community of goods",
        "Nonviolence"
      ],
      impact: "Established free church tradition and influenced religious liberty"
    }
  ],
  catholicReform: {
    description: "The Catholic Church's response to Protestant challenges through internal reform and renewal.",
    initiatives: [
      {
        name: "Council of Trent",
        year: "1545-1563",
        description: "Comprehensive reform council addressing doctrine and practice",
        impact: "Clarified Catholic doctrine and implemented institutional reforms"
      },
      {
        name: "Society of Jesus",
        year: "1540",
        description: "New religious order founded by Ignatius of Loyola",
        impact: "Advanced Catholic education and missionary work"
      },
      {
        name: "Index of Prohibited Books",
        year: "1559",
        description: "List of banned books deemed dangerous to faith",
        impact: "Controlled spread of Protestant ideas in Catholic territories"
      }
    ]
  },
  developments: [
    {
      area: "Theology",
      description: "Major developments in Christian doctrine and biblical interpretation",
      details: [
        "Sola scriptura principle",
        "Justification by faith",
        "Sacramental theology",
        "Ecclesiology"
      ],
      significance: "Reshaped Christian theological understanding and practice"
    },
    {
      area: "Church Structure",
      description: "Reorganization of ecclesiastical authority and governance",
      details: [
        "New denominational structures",
        "Reformed church governance",
        "Catholic reforms",
        "Local church autonomy"
      ],
      significance: "Created new models of church organization and authority"
    },
    {
      area: "Education",
      description: "Transformation of religious and general education",
      details: [
        "Catechetical instruction",
        "Bible translation",
        "University reform",
        "Popular literacy"
      ],
      significance: "Advanced education and biblical literacy"
    }
  ],
  legacy: [
    "Religious pluralism",
    "Biblical translation",
    "Educational reform",
    "Modern state system",
    "Individual conscience",
    "Denominationalism",
    "Vernacular worship"
  ],
  resources: [
    {
      title: "The Reformation",
      author: "Diarmaid MacCulloch",
      url: "/resources/reformation-macculloch",
      type: "Book",
      description: "Comprehensive history of the Reformation era.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/014303538X"
    },
    {
      title: "Martin Luther: Renegade and Prophet",
      author: "Lyndal Roper",
      url: "/resources/luther-roper",
      type: "Book",
      description: "Detailed biography of Martin Luther.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0812989341"
    },
    {
      title: "Calvin",
      author: "Bruce Gordon",
      url: "/resources/calvin-gordon",
      type: "Book",
      description: "Scholarly biography of John Calvin.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0300170848"
    }
  ]
}

export default function ReformationPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">The Protestant Reformation</h1>
        <p className="text-xl mb-4">{reformationContent.introduction}</p>
        <p className="text-lg mb-8">{reformationContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Historical Periods</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {reformationContent.periods.map((period, index) => (
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
        <h2 className="text-3xl font-bold mb-4">Key Reformers</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {reformationContent.reformers.map((reformer, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>
                  {reformer.name}
                  <span className="text-slate-600 text-sm block">
                    {reformer.role} ({reformer.dates})
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{reformer.significance}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Contributions:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {reformer.contributions.map((contribution, idx) => (
                        <li key={idx}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Major Writings:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {reformer.writings.map((writing, idx) => (
                        <li key={idx}>{writing}</li>
                      ))}
                    </ul>
                  </div>
                  {reformer.theology && (
                    <div>
                      <h4 className="font-semibold mb-2">Key Theological Contributions:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {reformer.theology.map((item, idx) => (
                          <li key={idx}>
                            <span className="font-medium">{item.key}:</span> {item.description}
                          </li>
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
        <h2 className="text-3xl font-bold mb-4">Reformation Movements</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {reformationContent.movements.map((movement, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>
                  {movement.name}
                  <span className="text-slate-600 text-sm block">
                    Led by {movement.leader}, {movement.years}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Principles:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {movement.keyPrinciples.map((principle, idx) => (
                        <li key={idx}>{principle}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Distinctives:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {movement.distinctives.map((distinctive, idx) => (
                        <li key={idx}>{distinctive}</li>
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
        <h2 className="text-3xl font-bold mb-4">Catholic Reform</h2>
        <Card className="mb-6">
          <CardContent className="pt-6">
            <p className="text-lg mb-6">{reformationContent.catholicReform.description}</p>
          </CardContent>
        </Card>
        <div className="grid gap-6 lg:grid-cols-3">
          {reformationContent.catholicReform.initiatives.map((initiative, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>
                  {initiative.name}
                  <span className="text-slate-600 text-sm block">
                    {initiative.year}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{initiative.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Impact:</h4>
                  <p className="text-slate-600">{initiative.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Key Developments</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {reformationContent.developments.map((development, index) => (
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
              {reformationContent.legacy.map((item, index) => (
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
          {reformationContent.resources.map((resource, index) => (
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
                <p>Explore the period leading to the Reformation.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/history/modern" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Modern Church</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Study the development of Christianity after the Reformation.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/theology/protestant" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Protestant Theology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about Protestant theological developments.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 