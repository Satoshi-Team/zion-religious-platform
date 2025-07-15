import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Modern Christianity | Church History 17th-19th Centuries',
  description: 'Explore modern Christianity from the Enlightenment through the 19th century. Learn about religious revivals, missionary movements, denominational development, and Christianity\'s encounter with modernity.',
  keywords: 'modern Christianity, Enlightenment, religious revivals, missionary movements, denominationalism, church history, modern theology',
  openGraph: {
    title: 'Modern Christianity | Church History 17th-19th Centuries',
    description: 'Comprehensive guide to modern Christianity and its development.',
    images: [{ url: '/images/modern-church.jpg', width: 1200, height: 630 }]
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

export default function ModernChristianityPage({ params }: PageProps) {
  const keyFigures: KeyFigure[] = [
    {
      name: 'John Wesley',
      dates: '1703-1791 CE',
      role: 'Anglican Clergyman and Methodist Founder',
      contributions: [
        'Methodist movement and revival',
        'Preaching to the masses',
        'Social reform and education',
        'Small group discipleship'
      ],
      writings: [
        'Sermons on Several Occasions',
        'Journal of John Wesley',
        'A Plain Account of Christian Perfection',
        'Various hymns and letters'
      ],
      significance: 'Founder of Methodism, leader of Evangelical Revival'
    },
    {
      name: 'Jonathan Edwards',
      dates: '1703-1758 CE',
      role: 'American Theologian and Revivalist',
      contributions: [
        'Great Awakening leadership',
        'Calvinist theology',
        'Religious experience analysis',
        'Philosophical theology'
      ],
      writings: [
        'Sinners in the Hands of an Angry God',
        'Religious Affections',
        'Freedom of the Will',
        'A Treatise Concerning Religious Affections'
      ],
      significance: 'Leading figure in American Great Awakening'
    },
    {
      name: 'William Carey',
      dates: '1761-1834 CE',
      role: 'Baptist Missionary',
      contributions: [
        'Modern missionary movement',
        'Translation work in India',
        'Missionary organization',
        'Cross-cultural evangelism'
      ],
      writings: [
        'An Enquiry into the Obligations of Christians',
        'Bengali Bible translation',
        'Various missionary reports'
      ],
      significance: 'Father of modern Protestant missions'
    },
    {
      name: 'Friedrich Schleiermacher',
      dates: '1768-1834 CE',
      role: 'German Theologian and Philosopher',
      contributions: [
        'Liberal theology development',
        'Religious experience focus',
        'Hermeneutics and interpretation',
        'Dialogue with Enlightenment'
      ],
      writings: [
        'On Religion: Speeches to its Cultured Despisers',
        'The Christian Faith',
        'Hermeneutics and Criticism'
      ],
      significance: 'Father of modern liberal theology'
    },
    {
      name: 'Charles Haddon Spurgeon',
      dates: '1834-1892 CE',
      role: 'Baptist Preacher and Theologian',
      contributions: [
        'Popular preaching ministry',
        'Pastors\' College establishment',
        'Social reform and charity',
        'Calvinist evangelism'
      ],
      writings: [
        'Lectures to My Students',
        'The Treasury of David',
        'Thousands of sermons',
        'Various theological works'
      ],
      significance: 'Prince of Preachers, influential Baptist leader'
    },
    {
      name: 'Hudson Taylor',
      dates: '1832-1905 CE',
      role: 'Missionary to China',
      contributions: [
        'China Inland Mission founder',
        'Indigenous church planting',
        'Faith mission principles',
        'Cross-cultural adaptation'
      ],
      writings: [
        'China\'s Spiritual Need and Claims',
        'A Retrospect',
        'Various missionary letters'
      ],
      significance: 'Pioneer of faith missions and indigenous church planting'
    }
  ]

  const historicalEvents: HistoricalEvent[] = [
    {
      period: 'Enlightenment and Rationalism (1650-1800)',
      events: [
        {
          title: 'Scientific Revolution Impact',
          date: '1650-1700',
          description: 'Scientific discoveries challenge traditional religious worldviews',
          significance: 'Beginning of tension between faith and reason'
        },
        {
          title: 'Deism Movement',
          date: '1680-1800',
          description: 'Belief in a distant God who created but doesn\'t intervene',
          significance: 'Challenge to traditional Christian theism'
        },
        {
          title: 'Pietism Movement',
          date: '1675-1750',
          description: 'German movement emphasizing personal piety and Bible study',
          significance: 'Reaction against rationalism, influence on revivalism'
        },
        {
          title: 'Methodist Revival',
          date: '1738-1791',
          description: 'John Wesley\'s evangelical movement in England',
          significance: 'Mass evangelism and social reform'
        }
      ]
    },
    {
      period: 'Great Awakenings (1720-1800)',
      events: [
        {
          title: 'First Great Awakening',
          date: '1720-1750',
          description: 'Religious revival in American colonies led by Jonathan Edwards',
          significance: 'Unified American colonies, established revival tradition'
        },
        {
          title: 'Second Great Awakening',
          date: '1790-1840',
          description: 'Religious revival emphasizing personal conversion and social reform',
          significance: 'Birth of American evangelicalism and reform movements'
        },
        {
          title: 'Camp Meeting Movement',
          date: '1800-1850',
          description: 'Outdoor revival meetings in frontier America',
          significance: 'Popular evangelism and denominational growth'
        },
        {
          title: 'Charles Finney Revivals',
          date: '1825-1875',
          description: 'Revivalist preaching emphasizing human agency in conversion',
          significance: 'New measures in evangelism and social reform'
        }
      ]
    },
    {
      period: 'Missionary Movement (1790-1900)',
      events: [
        {
          title: 'Baptist Missionary Society',
          date: '1792',
          description: 'William Carey\'s mission to India begins modern missions',
          significance: 'Foundation of Protestant missionary movement'
        },
        {
          title: 'London Missionary Society',
          date: '1795',
          description: 'Interdenominational mission society founded',
          significance: 'Cooperation in missions across denominations'
        },
        {
          title: 'Student Volunteer Movement',
          date: '1886',
          description: 'College students committing to foreign missions',
          significance: 'Mobilization of young people for missions'
        },
        {
          title: 'China Inland Mission',
          date: '1865',
          description: 'Hudson Taylor\'s faith mission to interior China',
          significance: 'Model for indigenous church planting'
        }
      ]
    },
    {
      period: 'Denominational Development (1800-1900)',
      events: [
        {
          title: 'Disciples of Christ',
          date: '1809',
          description: 'Restoration movement led by Alexander Campbell',
          significance: 'Emphasis on New Testament church restoration'
        },
        {
          title: 'Seventh-day Adventism',
          date: '1863',
          description: 'William Miller\'s millennial movement',
          significance: 'Adventist theology and health reform'
        },
        {
          title: 'Salvation Army',
          date: '1865',
          description: 'William Booth\'s social service organization',
          significance: 'Integration of evangelism and social work'
        },
        {
          title: 'Christian Science',
          date: '1879',
          description: 'Mary Baker Eddy\'s metaphysical Christianity',
          significance: 'Alternative Christian movement'
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
        <h1 className="text-4xl font-bold">Modern Christianity</h1>
        <p className="text-xl text-muted-foreground">
          Christianity\'s encounter with modernity, from the Enlightenment through the 19th century
        </p>
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
      </section>

      <section className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Overview of the Modern Period</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Characteristics</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Encounter with Enlightenment rationalism</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Religious revivals and evangelical movements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Global missionary expansion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Denominational proliferation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Social reform and humanitarian work</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Major Developments</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Liberal theology and biblical criticism</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Fundamentalist reaction and conservatism</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Pentecostal and charismatic movements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Ecumenical movement and cooperation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Christian engagement with social issues</span>
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
            <CardTitle>Key Figures of Modern Christianity</CardTitle>
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
            <CardTitle>Modern Theological Movements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Liberal Theology</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Schleiermacher</h4>
                    <p className="text-sm mt-1">Religious experience as basis for theology</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Ritschl</h4>
                    <p className="text-sm mt-1">Value judgments and moral theology</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Harnack</h4>
                    <p className="text-sm mt-1">Historical Jesus and essence of Christianity</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Conservative Responses</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Princeton Theology</h4>
                    <p className="text-sm mt-1">Conservative Calvinist response to liberalism</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Fundamentalism</h4>
                    <p className="text-sm mt-1">Reaction against modernism and biblical criticism</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Evangelicalism</h4>
                    <p className="text-sm mt-1">Conservative Protestantism with emphasis on conversion</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Social Impact and Reform</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Reform Movements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Abolition of slavery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Women\'s rights and suffrage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Temperance and prohibition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Education and literacy</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Institutional Development</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Christian colleges and universities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Hospitals and healthcare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Orphanages and social services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Missionary organizations</span>
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
              <Link href={`/${params.locale}/christianity/history/contemporary`}>
                <Card className="hover:bg-secondary transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">Contemporary Period</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Continue to contemporary Christianity</p>
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