import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Contemporary Christianity | Church History 20th-21st Centuries',
  description: 'Explore contemporary Christianity from the 20th century to today. Learn about Pentecostalism, ecumenism, liberation theology, digital Christianity, and current trends and challenges.',
  keywords: 'contemporary Christianity, Pentecostalism, ecumenism, liberation theology, digital Christianity, church history, modern church',
  openGraph: {
    title: 'Contemporary Christianity | Church History 20th-21st Centuries',
    description: 'Comprehensive guide to contemporary Christianity and current trends.',
    images: [{ url: '/images/contemporary-church.jpg', width: 1200, height: 630 }]
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

export default function ContemporaryChristianityPage({ params }: PageProps) {
  const keyFigures: KeyFigure[] = [
    {
      name: 'Karl Barth',
      dates: '1886-1968 CE',
      role: 'Swiss Theologian',
      contributions: [
        'Neo-orthodox theology',
        'Dialectical theology',
        'Church Dogmatics',
        'Rejection of liberal theology'
      ],
      writings: [
        'Church Dogmatics',
        'Epistle to the Romans',
        'The Word of God and the Word of Man',
        'Evangelical Theology'
      ],
      significance: 'Most influential Protestant theologian of the 20th century'
    },
    {
      name: 'Dietrich Bonhoeffer',
      dates: '1906-1945 CE',
      role: 'German Theologian and Martyr',
      contributions: [
        'Costly discipleship',
        'Resistance to Nazism',
        'Religionless Christianity',
        'Ethics and social responsibility'
      ],
      writings: [
        'The Cost of Discipleship',
        'Letters and Papers from Prison',
        'Ethics',
        'Life Together'
      ],
      significance: 'Martyr and theologian of resistance against evil'
    },
    {
      name: 'Billy Graham',
      dates: '1918-2018 CE',
      role: 'American Evangelist',
      contributions: [
        'Mass evangelism',
        'Cross-denominational cooperation',
        'Media ministry',
        'Presidential advisor'
      ],
      writings: [
        'Peace with God',
        'Just As I Am',
        'The Jesus Generation',
        'Various sermons and books'
      ],
      significance: 'Most influential evangelist of the 20th century'
    },
    {
      name: 'Oscar Romero',
      dates: '1917-1980 CE',
      role: 'Salvadoran Archbishop and Martyr',
      contributions: [
        'Liberation theology',
        'Human rights advocacy',
        'Option for the poor',
        'Nonviolent resistance'
      ],
      writings: [
        'Voice of the Voiceless',
        'The Violence of Love',
        'Various homilies and letters'
      ],
      significance: 'Martyr for social justice and liberation theology'
    },
    {
      name: 'Pope John Paul II',
      dates: '1926-2005 CE',
      role: 'Roman Catholic Pope',
      contributions: [
        'Global papal ministry',
        'Interfaith dialogue',
        'Human dignity theology',
        'Fall of communism'
      ],
      writings: [
        'Theology of the Body',
        'Evangelium Vitae',
        'Various encyclicals',
        'Crossing the Threshold of Hope'
      ],
      significance: 'Most traveled pope, influential in global politics and theology'
    },
    {
      name: 'Desmond Tutu',
      dates: '1931-2021 CE',
      role: 'South African Archbishop',
      contributions: [
        'Anti-apartheid leadership',
        'Truth and Reconciliation Commission',
        'Ubuntu theology',
        'Global peace advocacy'
      ],
      writings: [
        'No Future Without Forgiveness',
        'God Has a Dream',
        'Made for Goodness',
        'Various sermons and speeches'
      ],
      significance: 'Nobel Peace Prize winner, leader in reconciliation and justice'
    }
  ]

  const historicalEvents: HistoricalEvent[] = [
    {
      period: 'Early 20th Century (1900-1945)',
      events: [
        {
          title: 'Azusa Street Revival',
          date: '1906-1915',
          description: 'Pentecostal revival in Los Angeles led by William Seymour',
          significance: 'Birth of modern Pentecostalism and charismatic movement'
        },
        {
          title: 'Fundamentalist-Modernist Controversy',
          date: '1920-1930',
          description: 'Theological conflict between conservative and liberal Protestants',
          significance: 'Formation of fundamentalist and evangelical movements'
        },
        {
          title: 'World Council of Churches',
          date: '1948',
          description: 'International ecumenical organization founded',
          significance: 'Major force in Christian unity and cooperation'
        },
        {
          title: 'Nazi Persecution',
          date: '1933-1945',
          description: 'Persecution of Christians, especially Confessing Church',
          significance: 'Christian resistance to totalitarianism and anti-Semitism'
        }
      ]
    },
    {
      period: 'Post-War Era (1945-1980)',
      events: [
        {
          title: 'Vatican II Council',
          date: '1962-1965',
          description: 'Catholic council modernizing church practices and relations',
          significance: 'Major reform of Catholic Church and ecumenical outreach'
        },
        {
          title: 'Civil Rights Movement',
          date: '1955-1968',
          description: 'Christian leadership in American civil rights struggle',
          significance: 'Integration of faith and social justice activism'
        },
        {
          title: 'Liberation Theology',
          date: '1960-1980',
          description: 'Theology emphasizing God\'s preference for the poor',
          significance: 'New approach to theology from Latin American context'
        },
        {
          title: 'Charismatic Movement',
          date: '1960-1980',
          description: 'Pentecostal practices spreading to mainline denominations',
          significance: 'Renewal movement across Christian traditions'
        }
      ]
    },
    {
      period: 'Late 20th Century (1980-2000)',
      events: [
        {
          title: 'Fall of Communism',
          date: '1989-1991',
          description: 'Collapse of Soviet Union and Eastern Bloc',
          significance: 'Religious freedom restored in Eastern Europe'
        },
        {
          title: 'Global South Christianity',
          date: '1980-2000',
          description: 'Rapid growth of Christianity in Africa, Asia, and Latin America',
          significance: 'Shift of Christian center from Europe to Global South'
        },
        {
          title: 'Emerging Church Movement',
          date: '1990-2010',
          description: 'Postmodern approach to church and theology',
          significance: 'New forms of Christian community and worship'
        },
        {
          title: 'Digital Revolution',
          date: '1990-2000',
          description: 'Internet and technology transforming Christian communication',
          significance: 'New platforms for evangelism and community'
        }
      ]
    },
    {
      period: '21st Century (2000-Present)',
      events: [
        {
          title: 'Global Christianity Growth',
          date: '2000-Present',
          description: 'Continued expansion in Global South, decline in West',
          significance: 'Christianity becoming more diverse and global'
        },
        {
          title: 'Social Media Ministry',
          date: '2005-Present',
          description: 'Churches and leaders using digital platforms',
          significance: 'New forms of evangelism and community building'
        },
        {
          title: 'Climate Change Advocacy',
          date: '2010-Present',
          description: 'Christian environmental stewardship and activism',
          significance: 'Integration of creation care with Christian mission'
        },
        {
          title: 'Pandemic Impact',
          date: '2020-Present',
          description: 'COVID-19 transforming church practices and worship',
          significance: 'Acceleration of digital church and hybrid models'
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
        <h1 className="text-4xl font-bold">Contemporary Christianity</h1>
        <p className="text-xl text-muted-foreground">
          Christianity in the 20th and 21st centuries: trends, challenges, and transformations
        </p>
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
      </section>

      <section className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Overview of the Contemporary Period</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Characteristics</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Globalization and cultural diversity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Digital technology and social media</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Secularization in the West</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Growth in Global South</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Ecumenical cooperation and dialogue</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Major Trends</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Pentecostal and charismatic growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Social justice and environmental activism</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Interfaith dialogue and cooperation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>New forms of church and community</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Integration of faith and technology</span>
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
            <CardTitle>Key Figures of Contemporary Christianity</CardTitle>
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
            <CardTitle>Contemporary Theological Movements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Liberation Theologies</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Latin American</h4>
                    <p className="text-sm mt-1">Gustavo Gutiérrez, Leonardo Boff, option for the poor</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Black Theology</h4>
                    <p className="text-sm mt-1">James Cone, liberation from racism and oppression</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Feminist Theology</h4>
                    <p className="text-sm mt-1">Rosemary Radford Ruether, gender justice and equality</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Pentecostal/Charismatic</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Classical Pentecostalism</h4>
                    <p className="text-sm mt-1">Assemblies of God, Church of God, speaking in tongues</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Charismatic Movement</h4>
                    <p className="text-sm mt-1">Pentecostal gifts in mainline denominations</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Third Wave</h4>
                    <p className="text-sm mt-1">Vineyard movement, signs and wonders</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Challenges and Opportunities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Challenges</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Secularization and declining church attendance in West</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Religious persecution in various regions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Cultural relativism and moral challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Technology addiction and digital distraction</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Opportunities</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Global connectivity and digital evangelism</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Interfaith dialogue and cooperation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Social justice and environmental activism</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>New forms of church and community</span>
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
              <Link href={`/${params.locale}/christianity/overview`}>
                <Card className="hover:bg-secondary transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">Christianity Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Return to Christianity overview</p>
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