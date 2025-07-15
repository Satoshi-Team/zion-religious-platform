import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface HistoricalPeriod {
  title: string
  years: string
  description: string
  keyEvents: string[]
  significance: string
  link: string
}

interface KeyDevelopment {
  area: string
  description: string
  impact: string
  examples: string[]
}

interface HistoricalFigure {
  name: string
  period: string
  role: string
  contribution: string
}

interface Resource {
  title: string
  author?: string
  url: string
  type: string
  description: string
}

export const metadata: Metadata = {
  title: 'History | Christianity',
  description: 'Explore the comprehensive history of Christianity from its origins to the modern era, including key periods, developments, and influential figures.',
  keywords: 'Christianity, history, early church, reformation, christianity history',
  openGraph: {
    title: 'History | Christianity',
    description: 'Comprehensive guide to Christian history from origins to modern era',
    images: [{ url: '/images/christianity-history.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

const historicalPeriods: HistoricalPeriod[] = [
  {
    title: "Early Church",
    years: "c. 30-500 AD",
    description: "From the apostolic age through the church fathers, establishing foundational doctrines and structures.",
    keyEvents: [
      "Pentecost and Church birth",
      "Paul's missionary journeys",
      "New Testament canon formation",
      "Early persecutions",
      "Council of Nicaea (325)",
      "Augustine's theological contributions"
    ],
    significance: "Established Christian orthodoxy, ecclesiastical structures, and theological foundations that continue to shape Christianity today.",
    link: "/christianity/history/early-church"
  },
  {
    title: "Medieval Period",
    years: "500-1500 AD",
    description: "The age of Christendom, monasticism, scholasticism, and the development of Western and Eastern traditions.",
    keyEvents: [
      "Gregory the Great's papacy",
      "Rise of monasticism",
      "Scholastic theology development",
      "Crusades",
      "Great Schism (1054)",
      "Medieval universities"
    ],
    significance: "Shaped Christian culture, education, and the relationship between church and state in Europe.",
    link: "/christianity/history/medieval"
  },
  {
    title: "Reformation Era",
    years: "1500-1700 AD",
    description: "Period of religious reform, theological renewal, and the emergence of Protestant traditions.",
    keyEvents: [
      "Luther's 95 Theses (1517)",
      "Calvin's Geneva reforms",
      "English Reformation",
      "Council of Trent",
      "Thirty Years' War",
      "Westminster Confession"
    ],
    significance: "Transformed Christian theology and practice, creating new traditions and reshaping European society.",
    link: "/christianity/history/reformation"
  },
  {
    title: "Modern Period",
    years: "1700-1900 AD",
    description: "Age of Enlightenment, revival movements, and the global expansion of Christianity.",
    keyEvents: [
      "Great Awakening",
      "Methodist movement",
      "Missionary expansion",
      "Industrial Revolution impact",
      "Biblical criticism development",
      "Social gospel movement"
    ],
    significance: "Witnessed Christianity's global spread and adaptation to modern challenges and opportunities.",
    link: "/christianity/history/modern"
  },
  {
    title: "Contemporary Era",
    years: "1900-Present",
    description: "Modern challenges, ecumenical movements, and Christianity's role in a globalized world.",
    keyEvents: [
      "Ecumenical movement",
      "Vatican II",
      "Pentecostal revival",
      "Global South Christianity",
      "Digital age adaptation",
      "Interfaith dialogue"
    ],
    significance: "Shows Christianity's ongoing adaptation and relevance in contemporary global society.",
    link: "/christianity/history/contemporary"
  }
]

const keyDevelopments: KeyDevelopment[] = [
  {
    area: "Theological Development",
    description: "Evolution of Christian doctrine and theological understanding",
    impact: "Shaped Christian identity and practice across traditions",
    examples: [
      "Trinitarian theology formulation",
      "Christological controversies and resolutions",
      "Sacramental theology development",
      "Justification by faith doctrine",
      "Modern theological movements"
    ]
  },
  {
    area: "Ecclesiastical Organization",
    description: "Development of church structures and governance",
    impact: "Influenced how Christian communities function and relate to society",
    examples: [
      "Episcopal hierarchy establishment",
      "Monastic communities",
      "Protestant church structures",
      "Denominational organization",
      "Contemporary church models"
    ]
  },
  {
    area: "Cultural Engagement",
    description: "Christianity's interaction with various cultures and societies",
    impact: "Shaped Western civilization and global cultures",
    examples: [
      "Roman Empire integration",
      "Medieval European culture",
      "Colonial missions",
      "Modern social movements",
      "Contemporary cultural dialogue"
    ]
  },
  {
    area: "Scripture and Tradition",
    description: "Development of biblical canon and interpretive traditions",
    impact: "Established authoritative sources for Christian faith and practice",
    examples: [
      "New Testament canon formation",
      "Biblical interpretation methods",
      "Tradition development",
      "Modern biblical scholarship",
      "Contemporary hermeneutics"
    ]
  }
]

const influentialFigures: HistoricalFigure[] = [
  {
    name: "Paul the Apostle",
    period: "Early Church",
    role: "Missionary and Theologian",
    contribution: "Spread Christianity to Gentiles and wrote foundational epistles"
  },
  {
    name: "Augustine of Hippo",
    period: "Early Church",
    role: "Bishop and Theologian",
    contribution: "Developed key doctrines of grace, sin, and church"
  },
  {
    name: "Thomas Aquinas",
    period: "Medieval",
    role: "Theologian and Philosopher",
    contribution: "Synthesized Christian theology with Aristotelian philosophy"
  },
  {
    name: "Martin Luther",
    period: "Reformation",
    role: "Reformer and Theologian",
    contribution: "Initiated Protestant Reformation and emphasized justification by faith"
  },
  {
    name: "John Calvin",
    period: "Reformation",
    role: "Reformer and Theologian",
    contribution: "Developed systematic Protestant theology and church polity"
  },
  {
    name: "John Wesley",
    period: "Modern",
    role: "Evangelist and Theologian",
    contribution: "Founded Methodism and emphasized personal holiness"
  }
]

const resources: Resource[] = [
  {
    title: "A History of Christianity",
    author: "Diarmaid MacCulloch",
    url: "/resources/history-christianity-macculloch",
    type: "Book",
    description: "Comprehensive history of Christianity from origins to present"
  },
  {
    title: "The Story of Christianity",
    author: "Justo González",
    url: "/resources/story-christianity-gonzalez",
    type: "Book",
    description: "Accessible two-volume history of Christian tradition"
  },
  {
    title: "Christianity: The First Three Thousand Years",
    author: "Diarmaid MacCulloch",
    url: "/resources/christianity-first-three-thousand",
    type: "Book",
    description: "Sweeping history including pre-Christian Jewish and Greek contexts"
  }
]

export default function ChristianityHistoryPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Christianity: A Historical Journey</h1>
        <p className="text-xl mb-4">
          Christianity's history spans over two millennia, from its origins in first-century Palestine to its current status as the world's largest religion. This journey reveals how a small Jewish sect transformed into a global faith that has shaped civilizations, cultures, and countless individual lives.
        </p>
        <p className="text-lg mb-8">
          The historical development of Christianity encompasses theological evolution, ecclesiastical organization, cultural engagement, and global expansion. Each period has contributed to the rich tapestry of Christian tradition, creating a faith that continues to adapt and thrive in changing circumstances.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Major Historical Periods</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {historicalPeriods.map((period, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{period.title}</span>
                  <span className="text-sm font-normal text-slate-600">{period.years}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{period.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Events:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {period.keyEvents.map((event, idx) => (
                        <li key={idx}>{event}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Historical Significance:</h4>
                    <p className="text-slate-600 text-sm">{period.significance}</p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="mt-4">
                    <Link href={`/${params.locale}${period.link}`}>Explore This Period</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Key Historical Developments</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {keyDevelopments.map((development, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{development.area}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{development.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Historical Impact:</h4>
                    <p className="text-slate-600">{development.impact}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Examples:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {development.examples.map((example, idx) => (
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
        <h2 className="text-3xl font-bold mb-6">Influential Historical Figures</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {influentialFigures.map((figure, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{figure.name}</CardTitle>
                <p className="text-sm text-slate-600">{figure.period} • {figure.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">{figure.contribution}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Theological Traditions</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Eastern Orthodox</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Emphasizes divine liturgy, theosis, and conciliar authority, maintaining continuity with early church traditions.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Divine liturgy and sacraments</li>
                <li>Theosis (deification)</li>
                <li>Icon veneration</li>
                <li>Conciliar decision-making</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Roman Catholic</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Emphasizes papal authority, sacramental theology, and magisterial teaching, with a hierarchical structure.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Papal infallibility</li>
                <li>Seven sacraments</li>
                <li>Magisterial authority</li>
                <li>Marian doctrines</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Protestant</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Emphasizes biblical authority, justification by faith, and priesthood of believers, with diverse denominational expressions.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Sola Scriptura</li>
                <li>Justification by faith</li>
                <li>Priesthood of believers</li>
                <li>Denominational diversity</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Contemporary Significance</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold mb-4">Global Presence</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Over 2.4 billion adherents worldwide</li>
                  <li>Significant growth in Global South</li>
                  <li>Diverse cultural expressions</li>
                  <li>Ecumenical cooperation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Modern Challenges</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Secularization in Western societies</li>
                  <li>Interfaith dialogue and cooperation</li>
                  <li>Social justice and human rights</li>
                  <li>Digital age adaptation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Recommended Resources</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
                {resource.author && (
                  <p className="text-sm text-slate-600">By {resource.author}</p>
                )}
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{resource.description}</p>
                <Button asChild variant="outline" size="sm">
                  <Link href={resource.url}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Explore Historical Periods</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link href={`/${params.locale}/christianity/history/early-church`} className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Early Church</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the formative years of Christianity from the 1st to 3rd centuries.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href={`/${params.locale}/christianity/history/medieval`} className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Medieval Period</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover Christianity's development from the 4th to 15th centuries.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href={`/${params.locale}/christianity/history/reformation`} className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Reformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the Protestant Reformation and Catholic Counter-Reformation.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href={`/${params.locale}/christianity/history/modern`} className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Modern Period</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore Christianity from the 17th to 19th centuries.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href={`/${params.locale}/christianity/history/contemporary`} className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Contemporary</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover Christianity in the 20th and 21st centuries.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href={`/${params.locale}/christianity/theology`} className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Christian Theology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore systematic theology and core doctrines.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}