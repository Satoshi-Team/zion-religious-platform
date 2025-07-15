import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Protestant Reformation | Church History 16th-17th Centuries',
  description: 'Explore the Protestant Reformation and Catholic Counter-Reformation. Learn about Martin Luther, John Calvin, theological reforms, and the transformation of Christianity in early modern Europe.',
  keywords: 'Protestant Reformation, Martin Luther, John Calvin, Reformation history, 95 Theses, Counter-Reformation, church history, religious reform',
  openGraph: {
    title: 'Protestant Reformation | Church History 16th-17th Centuries',
    description: 'Comprehensive guide to the Protestant Reformation and its impact on Christianity.',
    images: [{ url: '/images/reformation.jpg', width: 1200, height: 630 }]
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

export default function ReformationHistoryPage({ params }: PageProps) {
  const keyFigures: KeyFigure[] = [
    {
      name: 'Martin Luther',
      dates: '1483-1546 CE',
      role: 'German Reformer and Theologian',
      contributions: [
        'Justification by faith alone (Sola Fide)',
        'Scripture alone authority (Sola Scriptura)',
        'Priesthood of all believers',
        'German Bible translation'
      ],
      writings: [
        '95 Theses (1517)',
        'On the Bondage of the Will',
        'Large and Small Catechisms',
        'German Bible translation'
      ],
      significance: 'Catalyst of the Protestant Reformation, founder of Lutheranism'
    },
    {
      name: 'John Calvin',
      dates: '1509-1564 CE',
      role: 'French Reformer and Theologian',
      contributions: [
        'Reformed theology and predestination',
        'Church governance and discipline',
        'Systematic theology',
        'Geneva Reformation'
      ],
      writings: [
        'Institutes of the Christian Religion',
        'Commentaries on Scripture',
        'Various theological treatises',
        'Church ordinances'
      ],
      significance: 'Founder of Reformed tradition, systematic theologian'
    },
    {
      name: 'Ulrich Zwingli',
      dates: '1484-1531 CE',
      role: 'Swiss Reformer',
      contributions: [
        'Swiss Reformation',
        'Symbolic view of sacraments',
        'Church-state relations',
        'Reform of worship practices'
      ],
      writings: [
        '67 Articles (1523)',
        'Commentary on True and False Religion',
        'Various theological works'
      ],
      significance: 'Leader of Swiss Reformation, influenced Reformed tradition'
    },
    {
      name: 'Henry VIII',
      dates: '1491-1547 CE',
      role: 'English King',
      contributions: [
        'English Reformation',
        'Establishment of Church of England',
        'Royal supremacy over church',
        'Dissolution of monasteries'
      ],
      writings: [
        'Defense of the Seven Sacraments',
        'Various royal proclamations'
      ],
      significance: 'Established Anglican tradition and royal control of church'
    },
    {
      name: 'Ignatius of Loyola',
      dates: '1491-1556 CE',
      role: 'Catholic Reformer and Jesuit Founder',
      contributions: [
        'Society of Jesus (Jesuits)',
        'Spiritual Exercises',
        'Catholic education',
        'Missionary activity'
      ],
      writings: [
        'Spiritual Exercises',
        'Constitutions of the Society of Jesus',
        'Autobiography'
      ],
      significance: 'Key figure in Catholic Counter-Reformation'
    },
    {
      name: 'John Knox',
      dates: '1514-1572 CE',
      role: 'Scottish Reformer',
      contributions: [
        'Scottish Reformation',
        'Presbyterian church structure',
        'Reformed worship',
        'Church discipline'
      ],
      writings: [
        'First Book of Discipline',
        'History of the Reformation in Scotland',
        'Various sermons and treatises'
      ],
      significance: 'Founder of Presbyterianism in Scotland'
    }
  ]

  const historicalEvents: HistoricalEvent[] = [
    {
      period: 'Early Reformation (1517-1530)',
      events: [
        {
          title: '95 Theses',
          date: 'October 31, 1517',
          description: 'Martin Luther nails 95 theses to Wittenberg church door, criticizing indulgences',
          significance: 'Catalyst for the Protestant Reformation'
        },
        {
          title: 'Leipzig Debate',
          date: '1519',
          description: 'Public debate between Luther and Johann Eck on papal authority',
          significance: 'Established Luther\'s opposition to papal supremacy'
        },
        {
          title: 'Diet of Worms',
          date: '1521',
          description: 'Luther refuses to recant before Holy Roman Emperor Charles V',
          significance: 'Luther excommunicated, Reformation becomes political issue'
        },
        {
          title: 'Peasants\' War',
          date: '1524-1525',
          description: 'German peasant uprising influenced by Reformation ideas',
          significance: 'Luther opposes violence, Reformation becomes more conservative'
        }
      ]
    },
    {
      period: 'Spread of Reformation (1530-1560)',
      events: [
        {
          title: 'Augsburg Confession',
          date: '1530',
          description: 'Lutheran statement of faith presented to Emperor Charles V',
          significance: 'First Protestant confession of faith'
        },
        {
          title: 'Geneva Reformation',
          date: '1536-1564',
          description: 'John Calvin establishes Reformed church in Geneva',
          significance: 'Model for Reformed churches throughout Europe'
        },
        {
          title: 'English Reformation',
          date: '1534-1558',
          description: 'Henry VIII breaks with Rome, establishes Church of England',
          significance: 'Creation of Anglican tradition'
        },
        {
          title: 'Scottish Reformation',
          date: '1560',
          description: 'John Knox leads Reformation in Scotland',
          significance: 'Establishment of Presbyterianism'
        }
      ]
    },
    {
      period: 'Religious Wars (1560-1648)',
      events: [
        {
          title: 'French Wars of Religion',
          date: '1562-1598',
          description: 'Series of conflicts between Catholics and Huguenots in France',
          significance: 'Edict of Nantes grants religious tolerance'
        },
        {
          title: 'Eighty Years\' War',
          date: '1568-1648',
          description: 'Dutch revolt against Spanish Catholic rule',
          significance: 'Independence of Protestant Netherlands'
        },
        {
          title: 'Thirty Years\' War',
          date: '1618-1648',
          description: 'European conflict between Protestant and Catholic states',
          significance: 'Peace of Westphalia establishes religious boundaries'
        },
        {
          title: 'English Civil War',
          date: '1642-1651',
          description: 'Conflict between Royalists and Parliamentarians',
          significance: 'Temporary establishment of Puritan Commonwealth'
        }
      ]
    },
    {
      period: 'Catholic Counter-Reformation (1545-1648)',
      events: [
        {
          title: 'Council of Trent',
          date: '1545-1563',
          description: 'Catholic council addressing Protestant challenges and church reform',
          significance: 'Defined Catholic doctrine and initiated internal reforms'
        },
        {
          title: 'Society of Jesus',
          date: '1540',
          description: 'Pope Paul III approves Jesuit order founded by Ignatius of Loyola',
          significance: 'Major force in Catholic education and missionary work'
        },
        {
          title: 'Index of Forbidden Books',
          date: '1559',
          description: 'Catholic Church publishes list of prohibited books',
          significance: 'Attempt to control spread of Protestant ideas'
        },
        {
          title: 'Inquisition Expansion',
          date: '1542-1648',
          description: 'Roman Inquisition investigates and prosecutes heresy',
          significance: 'Enforcement of Catholic orthodoxy'
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
        <h1 className="text-4xl font-bold">Protestant Reformation</h1>
        <p className="text-xl text-muted-foreground">
          The religious, political, and social transformation of Christianity in 16th-17th century Europe
        </p>
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
      </section>

      <section className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Overview of the Reformation Period</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Characteristics</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Challenge to papal authority and church hierarchy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Emphasis on Scripture alone (Sola Scriptura)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Justification by faith alone (Sola Fide)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Priesthood of all believers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>National churches and vernacular worship</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Major Reforms</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Translation of Bible into vernacular languages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Simplification of worship and sacraments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Rejection of indulgences and purgatory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Emphasis on preaching and education</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>New church structures and governance</span>
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
            <CardTitle>Key Figures of the Reformation</CardTitle>
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
            <CardTitle>Reformation Traditions and Movements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Protestant Traditions</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Lutheranism</h4>
                    <p className="text-sm mt-1">Founded by Martin Luther, emphasizing justification by faith and sacraments</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Reformed/Calvinism</h4>
                    <p className="text-sm mt-1">Founded by John Calvin, emphasizing predestination and church discipline</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Anglicanism</h4>
                    <p className="text-sm mt-1">Church of England, balancing Catholic and Protestant elements</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Anabaptism</h4>
                    <p className="text-sm mt-1">Radical Reformation, emphasizing adult baptism and separation from state</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Catholic Response</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Counter-Reformation</h4>
                    <p className="text-sm mt-1">Catholic response to Protestant challenges and internal reform</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Council of Trent</h4>
                    <p className="text-sm mt-1">Defined Catholic doctrine and initiated reforms</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Jesuits</h4>
                    <p className="text-sm mt-1">Society of Jesus, leading Catholic education and missions</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Inquisition</h4>
                    <p className="text-sm mt-1">Enforcement of Catholic orthodoxy and suppression of heresy</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Legacy and Impact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Religious Impact</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Permanent division of Western Christianity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Development of multiple Protestant denominations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Emphasis on individual faith and Bible reading</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Reform of Catholic Church practices</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Social and Political Impact</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Rise of nationalism and state churches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Development of modern education systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Influence on modern democracy and individual rights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Shaping of European political boundaries</span>
                  </li>
                </ul>
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
              <Link href={`/${params.locale}/christianity/history/modern`}>
                <Card className="hover:bg-secondary transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">Modern Period</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Continue to modern Christianity</p>
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