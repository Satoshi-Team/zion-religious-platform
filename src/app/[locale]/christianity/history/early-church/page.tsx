import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Early Church History | Christianity from 1st-3rd Centuries',
  description: 'Explore the formative years of Christianity from the apostolic period through the early church fathers. Learn about persecution, theological development, and the establishment of Christian communities.',
  keywords: 'early church, apostolic period, church fathers, Christian persecution, early Christianity, New Testament church, Christian history, church fathers, early Christian communities',
  openGraph: {
    title: 'Early Church History | Christianity from 1st-3rd Centuries',
    description: 'Comprehensive guide to the early development of Christianity, from the apostolic period through the church fathers.',
    images: [{ url: '/images/early-church.jpg', width: 1200, height: 630 }]
  }
}

interface KeyFigure {
  name: string
  dates: string
  role: string
  contributions: string[]
  writings: string[]
  significance: string
}

interface HistoricalEvent {
  period: string
  events: Array<{
    title: string
    date: string
    description: string
    significance: string
  }>
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function EarlyChurchHistoryPage({ params }: PageProps) {
  const keyFigures: KeyFigure[] = [
    {
      name: 'Peter (Simon Peter)',
      dates: 'c. 1-64 CE',
      role: 'Apostle and First Pope',
      contributions: [
        'Leader of the Twelve Apostles',
        'First bishop of Rome',
        'Key figure in early church leadership',
        'Bridge between Jewish and Gentile Christianity'
      ],
      writings: [
        'First Epistle of Peter',
        'Second Epistle of Peter (disputed)'
      ],
      significance: 'Considered the foundation of the church and first pope in Catholic tradition'
    },
    {
      name: 'Paul (Saul of Tarsus)',
      dates: 'c. 5-67 CE',
      role: 'Apostle to the Gentiles',
      contributions: [
        'Missionary journeys throughout Mediterranean',
        'Theological development of grace and faith',
        'Establishment of Gentile churches',
        'Bridge between Jewish and Gentile Christianity'
      ],
      writings: [
        'Romans, 1-2 Corinthians, Galatians, Ephesians',
        'Philippians, Colossians, 1-2 Thessalonians',
        '1-2 Timothy, Titus, Philemon'
      ],
      significance: 'Most influential figure in early Christianity after Jesus, shaped Christian theology'
    },
    {
      name: 'Ignatius of Antioch',
      dates: 'c. 35-108 CE',
      role: 'Bishop and Martyr',
      contributions: [
        'Early church structure and hierarchy',
        'Eucharistic theology',
        'Unity of the church',
        'Martyrdom theology'
      ],
      writings: [
        'Epistle to the Ephesians',
        'Epistle to the Magnesians',
        'Epistle to the Trallians',
        'Epistle to the Romans'
      ],
      significance: 'Key figure in establishing episcopal structure and sacramental theology'
    },
    {
      name: 'Justin Martyr',
      dates: 'c. 100-165 CE',
      role: 'Apologist and Philosopher',
      contributions: [
        'Christian apologetics',
        'Integration of Greek philosophy with Christianity',
        'Defense of Christian practices',
        'Logos theology'
      ],
      writings: [
        'First Apology',
        'Second Apology',
        'Dialogue with Trypho'
      ],
      significance: 'First major Christian apologist, bridge between philosophy and theology'
    },
    {
      name: 'Irenaeus of Lyons',
      dates: 'c. 130-202 CE',
      role: 'Bishop and Theologian',
      contributions: [
        'Refutation of Gnosticism',
        'Apostolic succession doctrine',
        'Canon development',
        'Recapitulation theory'
      ],
      writings: [
        'Against Heresies (Adversus Haereses)',
        'Demonstration of the Apostolic Preaching'
      ],
      significance: 'First systematic theologian, defender of orthodoxy against Gnosticism'
    },
    {
      name: 'Tertullian',
      dates: 'c. 155-240 CE',
      role: 'Theologian and Apologist',
      contributions: [
        'Latin Christian theology',
        'Trinity terminology',
        'Christian ethics and morality',
        'Montanist movement'
      ],
      writings: [
        'Apologeticus',
        'De Praescriptione Haereticorum',
        'Adversus Praxeas',
        'De Baptismo'
      ],
      significance: 'Father of Latin theology, coined key theological terms'
    }
  ]

  const historicalEvents: HistoricalEvent[] = [
    {
      period: 'Apostolic Period (30-100 CE)',
      events: [
        {
          title: 'Pentecost and Church Birth',
          date: '30 CE',
          description: 'The Holy Spirit descends on the apostles, marking the birth of the Christian church',
          significance: 'Foundation of Christian community and mission'
        },
        {
          title: 'Council of Jerusalem',
          date: 'c. 50 CE',
          description: 'First church council addressing Gentile conversion and Jewish law requirements',
          significance: 'Established Gentile Christianity and church decision-making process'
        },
        {
          title: 'Paul\'s Missionary Journeys',
          date: '45-60 CE',
          description: 'Three major missionary journeys establishing churches throughout the Mediterranean',
          significance: 'Spread of Christianity to Gentile world and theological development'
        },
        {
          title: 'Destruction of Jerusalem Temple',
          date: '70 CE',
          description: 'Roman destruction of the Second Temple, ending Jewish sacrificial system',
          significance: 'Separation of Christianity from Judaism and shift to Gentile focus'
        }
      ]
    },
    {
      period: 'Post-Apostolic Period (100-200 CE)',
      events: [
        {
          title: 'Persecution under Trajan',
          date: '98-117 CE',
          description: 'Systematic persecution of Christians, including Ignatius\' martyrdom',
          significance: 'Strengthened Christian identity and martyrdom theology'
        },
        {
          title: 'Emergence of Church Structure',
          date: '100-150 CE',
          description: 'Development of episcopal hierarchy and church offices',
          significance: 'Establishment of organized church governance'
        },
        {
          title: 'Gnostic Controversy',
          date: '120-180 CE',
          description: 'Rise of Gnostic sects challenging orthodox Christianity',
          significance: 'Led to canon formation and creedal development'
        },
        {
          title: 'Montanist Movement',
          date: '150-200 CE',
          description: 'Charismatic movement emphasizing prophecy and strict morality',
          significance: 'Influenced early Christian spirituality and eschatology'
        }
      ]
    },
    {
      period: 'Age of Apologists (150-250 CE)',
      events: [
        {
          title: 'Justin Martyr\'s Apologies',
          date: '150-165 CE',
          description: 'Defense of Christianity to Roman authorities and Jewish critics',
          significance: 'First systematic Christian apologetics and philosophy integration'
        },
        {
          title: 'Irenaeus\' Against Heresies',
          date: '180 CE',
          description: 'Comprehensive refutation of Gnosticism and defense of orthodoxy',
          significance: 'Established apostolic succession and canon authority'
        },
        {
          title: 'Tertullian\'s Latin Theology',
          date: '190-220 CE',
          description: 'Development of Latin Christian theology and terminology',
          significance: 'Foundation of Western Christian thought and language'
        },
        {
          title: 'Clement of Alexandria',
          date: '150-215 CE',
          description: 'Integration of Greek philosophy with Christian theology',
          significance: 'Christian humanism and educational approach'
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href={`/${params.locale}/christianity/history`}>
            <Button variant="outline" size="sm">
              ← Back to Church History
            </Button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold">Early Church History</h1>
        <p className="text-xl text-muted-foreground">
          The formative years of Christianity from the apostolic period through the early church fathers (1st-3rd centuries)
        </p>
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
      </section>

      <section className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Overview of the Early Church Period</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Characteristics</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Rapid growth from small Jewish sect to major religious movement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Persecution and martyrdom as defining experiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Development of church structure and hierarchy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Formation of New Testament canon</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Emergence of Christian theology and apologetics</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Major Challenges</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Roman persecution and martyrdom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Gnostic heresies and theological disputes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Separation from Judaism and identity formation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Integration of Gentile converts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Establishment of orthodox doctrine</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Historical Events</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {historicalEvents.map((period, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">{period.period}</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {period.events.map((event, eventIdx) => (
                    <Card key={eventIdx} className="border-l-4 border-l-blue-500">
                      <CardHeader>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm">{event.description}</p>
                        <div className="p-3 bg-secondary rounded-lg">
                          <p className="text-sm font-medium">Significance:</p>
                          <p className="text-sm">{event.significance}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Figures of the Early Church</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {keyFigures.map((figure, idx) => (
              <Card key={idx} className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{figure.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{figure.dates}</p>
                      <p className="text-sm font-medium text-blue-600">{figure.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Major Contributions</h4>
                      <ul className="space-y-1">
                        {figure.contributions.map((contribution, cIdx) => (
                          <li key={cIdx} className="text-sm flex items-start gap-2">
                            <span className="text-green-600">•</span>
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Writings</h4>
                      <ul className="space-y-1">
                        {figure.writings.map((writing, wIdx) => (
                          <li key={wIdx} className="text-sm flex items-start gap-2">
                            <span className="text-blue-600">•</span>
                            <span>{writing}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <p className="text-sm font-medium">Historical Significance:</p>
                    <p className="text-sm">{figure.significance}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Theological Developments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Doctrinal Formation</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Christology</h4>
                    <p className="text-sm mt-1">Development of understanding of Jesus as both divine and human</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Trinity</h4>
                    <p className="text-sm mt-1">Emergence of Trinitarian theology and terminology</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Salvation</h4>
                    <p className="text-sm mt-1">Theology of grace, faith, and redemption</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Church Structure</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Episcopal Hierarchy</h4>
                    <p className="text-sm mt-1">Development of bishop, priest, and deacon offices</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Apostolic Succession</h4>
                    <p className="text-sm mt-1">Continuity of authority from apostles to bishops</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Sacraments</h4>
                    <p className="text-sm mt-1">Development of baptism and Eucharist theology</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Link href={`/${params.locale}/christianity/history`}>
                <Card className="hover:bg-secondary transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">Church History Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Return to the main church history page</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href={`/${params.locale}/christianity/history/medieval`}>
                <Card className="hover:bg-secondary transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">Medieval Period</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Continue to the medieval development of Christianity</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href={`/${params.locale}/christianity/theology`}>
                <Card className="hover:bg-secondary transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">Christian Theology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Explore systematic theology and doctrines</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
} 