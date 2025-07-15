import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Medieval Christianity | Church History 4th-15th Centuries',
  description: 'Explore medieval Christianity from Constantine through the Renaissance. Learn about monasticism, scholasticism, the East-West schism, and the church\'s role in medieval society.',
  keywords: 'medieval Christianity, monasticism, scholasticism, East-West schism, medieval church, church history, medieval theology, crusades, medieval society',
  openGraph: {
    title: 'Medieval Christianity | Church History 4th-15th Centuries',
    description: 'Comprehensive guide to medieval Christianity, from Constantine to the Renaissance.',
    images: [{ url: '/images/medieval-church.jpg', width: 1200, height: 630 }]
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

export default function MedievalChristianityPage({ params }: PageProps) {
  const keyFigures: KeyFigure[] = [
    {
      name: 'Constantine the Great',
      dates: '272-337 CE',
      role: 'Roman Emperor',
      contributions: [
        'Legalization of Christianity (Edict of Milan)',
        'Council of Nicaea convener',
        'Christianization of Roman Empire',
        'Foundation of Constantinople'
      ],
      writings: [
        'Edict of Milan (313)',
        'Various imperial decrees',
        'Letters to bishops'
      ],
      significance: 'Transformed Christianity from persecuted sect to state religion'
    },
    {
      name: 'Augustine of Hippo',
      dates: '354-430 CE',
      role: 'Bishop and Theologian',
      contributions: [
        'Doctrine of original sin',
        'Grace and predestination theology',
        'Just war theory',
        'Christian philosophy'
      ],
      writings: [
        'Confessions',
        'City of God',
        'On the Trinity',
        'On Christian Doctrine'
      ],
      significance: 'Most influential theologian in Western Christianity'
    },
    {
      name: 'Benedict of Nursia',
      dates: '480-547 CE',
      role: 'Monk and Abbot',
      contributions: [
        'Benedictine Rule',
        'Monastic organization',
        'Balance of prayer and work',
        'Stability in monastic life'
      ],
      writings: [
        'Rule of Saint Benedict',
        'Various letters and sermons'
      ],
      significance: 'Father of Western monasticism, shaped medieval spirituality'
    },
    {
      name: 'Gregory the Great',
      dates: '540-604 CE',
      role: 'Pope and Theologian',
      contributions: [
        'Papal authority expansion',
        'Missionary outreach',
        'Liturgical reforms',
        'Pastoral theology'
      ],
      writings: [
        'Pastoral Care',
        'Dialogues',
        'Moralia in Job',
        'Gregorian chant development'
      ],
      significance: 'Established papal primacy and medieval church structure'
    },
    {
      name: 'Thomas Aquinas',
      dates: '1225-1274 CE',
      role: 'Theologian and Philosopher',
      contributions: [
        'Summa Theologica',
        'Integration of Aristotle with Christianity',
        'Natural theology',
        'Scholastic method'
      ],
      writings: [
        'Summa Theologica',
        'Summa Contra Gentiles',
        'Commentaries on Aristotle',
        'Various theological treatises'
      ],
      significance: 'Greatest medieval theologian, synthesized faith and reason'
    },
    {
      name: 'Francis of Assisi',
      dates: '1181-1226 CE',
      role: 'Monk and Saint',
      contributions: [
        'Franciscan Order founder',
        'Poverty and simplicity',
        'Creation spirituality',
        'Peace and reconciliation'
      ],
      writings: [
        'Canticle of the Sun',
        'Rule of Saint Francis',
        'Various prayers and letters'
      ],
      significance: 'Revolutionary approach to Christian spirituality and poverty'
    }
  ]

  const historicalEvents: HistoricalEvent[] = [
    {
      period: 'Late Antiquity (300-600 CE)',
      events: [
        {
          title: 'Edict of Milan',
          date: '313 CE',
          description: 'Constantine and Licinius legalize Christianity throughout the Roman Empire',
          significance: 'End of persecution, beginning of Christian imperial support'
        },
        {
          title: 'Council of Nicaea',
          date: '325 CE',
          description: 'First ecumenical council addressing Arian controversy and establishing Nicene Creed',
          significance: 'Foundation of orthodox Christology and creedal Christianity'
        },
        {
          title: 'Theodosian Decrees',
          date: '380-392 CE',
          description: 'Christianity becomes the official state religion of the Roman Empire',
          significance: 'Complete Christianization of imperial institutions'
        },
        {
          title: 'Fall of Western Roman Empire',
          date: '476 CE',
          description: 'Odoacer deposes Romulus Augustulus, ending Western Roman Empire',
          significance: 'Church becomes primary institution preserving Roman culture'
        }
      ]
    },
    {
      period: 'Early Middle Ages (600-1000 CE)',
      events: [
        {
          title: 'Gregory the Great\'s Papacy',
          date: '590-604 CE',
          description: 'Establishes papal authority and missionary outreach to Anglo-Saxons',
          significance: 'Foundation of medieval papal power and missionary activity'
        },
        {
          title: 'Benedictine Monasticism Spread',
          date: '600-800 CE',
          description: 'Benedictine Rule becomes standard for Western monasticism',
          significance: 'Monasteries become centers of learning and culture preservation'
        },
        {
          title: 'Iconoclasm Controversy',
          date: '726-842 CE',
          description: 'Byzantine controversy over religious images, affecting East-West relations',
          significance: 'Contributed to growing division between Eastern and Western churches'
        },
        {
          title: 'Charlemagne\'s Coronation',
          date: '800 CE',
          description: 'Pope Leo III crowns Charlemagne as Holy Roman Emperor',
          significance: 'Establishment of Holy Roman Empire and papal political authority'
        }
      ]
    },
    {
      period: 'High Middle Ages (1000-1300 CE)',
      events: [
        {
          title: 'East-West Schism',
          date: '1054 CE',
          description: 'Mutual excommunications between Pope and Patriarch create permanent division',
          significance: 'Formal split between Roman Catholic and Eastern Orthodox churches'
        },
        {
          title: 'First Crusade',
          date: '1095-1099 CE',
          description: 'Pope Urban II calls for crusade to liberate Jerusalem from Muslim control',
          significance: 'Beginning of crusading movement and Christian-Muslim conflict'
        },
        {
          title: 'Rise of Universities',
          date: '1100-1300 CE',
          description: 'Development of medieval universities and scholastic theology',
          significance: 'Institutionalization of Christian learning and philosophy'
        },
        {
          title: 'Fourth Lateran Council',
          date: '1215 CE',
          description: 'Major reform council addressing church discipline and doctrine',
          significance: 'Established transubstantiation and annual confession requirements'
        }
      ]
    },
    {
      period: 'Late Middle Ages (1300-1500 CE)',
      events: [
        {
          title: 'Avignon Papacy',
          date: '1309-1377 CE',
          description: 'Popes reside in Avignon, France, under French influence',
          significance: 'Weakened papal authority and led to Great Schism'
        },
        {
          title: 'Great Western Schism',
          date: '1378-1417 CE',
          description: 'Multiple claimants to papacy, dividing Western Christianity',
          significance: 'Crisis of papal authority and conciliar movement'
        },
        {
          title: 'Council of Constance',
          date: '1414-1418 CE',
          description: 'Ends Great Schism and addresses church reform',
          significance: 'Established conciliar authority over papacy'
        },
        {
          title: 'Fall of Constantinople',
          date: '1453 CE',
          description: 'Ottoman Turks capture Constantinople, ending Byzantine Empire',
          significance: 'End of medieval period, beginning of early modern era'
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
        <h1 className="text-4xl font-bold">Medieval Christianity</h1>
        <p className="text-xl text-muted-foreground">
          The development of Christianity from Constantine through the Renaissance (4th-15th centuries)
        </p>
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
      </section>

      <section className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Overview of the Medieval Period</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Characteristics</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Christianization of European society and culture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Rise of monasticism and religious orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Development of scholastic theology and philosophy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Church as primary institution of medieval society</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>East-West schism and crusading movement</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Major Developments</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Establishment of papal authority and hierarchy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Development of sacramental theology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Integration of classical philosophy with Christianity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Creation of universities and educational institutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Art, architecture, and culture as religious expression</span>
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
            <CardTitle>Key Figures of Medieval Christianity</CardTitle>
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
            <CardTitle>Medieval Institutions and Movements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Monasticism</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Benedictine Order</h4>
                    <p className="text-sm mt-1">Founded by Benedict of Nursia, emphasizing prayer, work, and stability</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Franciscan Order</h4>
                    <p className="text-sm mt-1">Founded by Francis of Assisi, emphasizing poverty and simplicity</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Dominican Order</h4>
                    <p className="text-sm mt-1">Founded by Dominic, emphasizing preaching and education</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Intellectual Movements</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Scholasticism</h4>
                    <p className="text-sm mt-1">Integration of reason and faith, systematic theology</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Universities</h4>
                    <p className="text-sm mt-1">Centers of learning and theological education</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-medium">Mysticism</h4>
                    <p className="text-sm mt-1">Direct experience of God through contemplation</p>
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
              <Link href={`/${params.locale}/christianity/history/reformation`}>
                <Card className="hover:bg-secondary transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">Reformation Period</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Continue to the Protestant Reformation</p>
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