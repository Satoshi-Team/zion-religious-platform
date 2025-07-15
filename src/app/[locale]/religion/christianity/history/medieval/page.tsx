import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Users, Book, MapPin, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Medieval Church History - From Fall of Rome to Renaissance',
  description: 'Explore the medieval period of Christianity, from the fall of Rome through the rise of monasticism, the Crusades, scholasticism, and the church\'s role in medieval society.',
  keywords: 'medieval church history, monasticism, crusades, scholasticism, medieval Christianity, church and state, religious orders',
  openGraph: {
    title: 'Medieval Church History - From Fall of Rome to Renaissance',
    description: 'Explore the medieval period of Christianity, from the fall of Rome through the rise of monasticism, the Crusades, scholasticism, and the church\'s role in medieval society.',
    type: 'website',
  },
}

const timePeriods = [
  {
    period: 'Early Middle Ages (500-1000 CE)',
    description: 'The period following the fall of Rome, marked by the rise of monasticism, missionary activity, and the church\'s role in preserving civilization.',
    events: [
      {
        year: '496 CE',
        event: 'Conversion of Clovis',
        description: 'Frankish king Clovis converts to Christianity, establishing the church\'s alliance with Germanic rulers.'
      },
      {
        year: '529 CE',
        event: 'Benedictine Rule',
        description: 'St. Benedict establishes his monastic rule, creating the foundation for Western monasticism.'
      },
      {
        year: '590-604 CE',
        event: 'Pope Gregory the Great',
        description: 'Gregory strengthens papal authority, sends missionaries to England, and develops liturgical music.'
      },
      {
        year: '732 CE',
        event: 'Battle of Tours',
        description: 'Charles Martel defeats Muslim forces, preventing the Islamic conquest of Western Europe.'
      },
      {
        year: '800 CE',
        event: 'Coronation of Charlemagne',
        description: 'Pope Leo III crowns Charlemagne as Holy Roman Emperor, establishing the church-state alliance.'
      },
      {
        year: '910 CE',
        event: 'Foundation of Cluny',
        description: 'Benedictine monastery at Cluny becomes the center of monastic reform and papal authority.'
      }
    ]
  },
  {
    period: 'High Middle Ages (1000-1300 CE)',
    description: 'The period of church reform, the Crusades, scholasticism, and the height of papal power.',
    events: [
      {
        year: '1054 CE',
        event: 'Great Schism',
        description: 'Formal split between Eastern Orthodox and Roman Catholic churches over theological and political issues.'
      },
      {
        year: '1095-1291 CE',
        event: 'The Crusades',
        description: 'Series of military campaigns to reclaim the Holy Land, with profound religious and political consequences.'
      },
      {
        year: '1098 CE',
        event: 'Foundation of Cîteaux',
        description: 'Cistercian order founded, emphasizing manual labor, simplicity, and agricultural innovation.'
      },
      {
        year: '1209-1229 CE',
        event: 'Albigensian Crusade',
        description: 'Crusade against Cathar heresy in southern France, leading to the Inquisition.'
      },
      {
        year: '1215 CE',
        event: 'Fourth Lateran Council',
        description: 'Major church council addressing heresy, sacraments, and church reform under Pope Innocent III.'
      },
      {
        year: '1223 CE',
        event: 'Franciscan Rule Approved',
        description: 'Pope Honorius III approves the Franciscan rule, establishing the mendicant orders.'
      }
    ]
  },
  {
    period: 'Late Middle Ages (1300-1500 CE)',
    description: 'The period of papal crisis, the Black Death, the rise of universities, and the beginning of the Renaissance.',
    events: [
      {
        year: '1309-1377 CE',
        event: 'Avignon Papacy',
        description: 'Popes reside in Avignon, France, leading to questions about papal independence and authority.'
      },
      {
        year: '1378-1417 CE',
        event: 'Western Schism',
        description: 'Period of multiple claimants to the papacy, damaging church authority and unity.'
      },
      {
        year: '1347-1351 CE',
        event: 'Black Death',
        description: 'Plague devastates Europe, leading to religious responses, flagellant movements, and social changes.'
      },
      {
        year: '1414-1418 CE',
        event: 'Council of Constance',
        description: 'Ecumenical council ending the Western Schism and addressing church reform.'
      },
      {
        year: '1453 CE',
        event: 'Fall of Constantinople',
        description: 'Ottoman conquest of Constantinople ends the Byzantine Empire and Eastern Christian influence.'
      },
      {
        year: '1492 CE',
        event: 'Reconquista Complete',
        description: 'Spain completes the reconquest of Muslim territories, establishing Christian dominance.'
      }
    ]
  }
]

const keyFigures = [
  {
    name: 'Benedict of Nursia',
    role: 'Founder of Western Monasticism',
    period: '6th Century',
    contributions: [
      'Benedictine Rule',
      'Monastic communities',
      'Prayer and work balance',
      'Stability and obedience'
    ]
  },
  {
    name: 'Gregory the Great',
    role: 'Pope and Reformer',
    period: '6th-7th Century',
    contributions: [
      'Papal authority',
      'Missionary activity',
      'Liturgical reform',
      'Pastoral care'
    ]
  },
  {
    name: 'Charlemagne',
    role: 'Holy Roman Emperor',
    period: '8th-9th Century',
    contributions: [
      'Carolingian Renaissance',
      'Church-state alliance',
      'Educational reform',
      'Territorial expansion'
    ]
  },
  {
    name: 'Bernard of Clairvaux',
    role: 'Cistercian Abbot',
    period: '12th Century',
    contributions: [
      'Cistercian reform',
      'Mystical theology',
      'Second Crusade',
      'Monastic spirituality'
    ]
  },
  {
    name: 'Thomas Aquinas',
    role: 'Theologian and Philosopher',
    period: '13th Century',
    contributions: [
      'Summa Theologica',
      'Scholastic method',
      'Aristotelian synthesis',
      'Natural theology'
    ]
  },
  {
    name: 'Francis of Assisi',
    role: 'Founder of Franciscans',
    period: '13th Century',
    contributions: [
      'Mendicant orders',
      'Poverty and simplicity',
      'Creation spirituality',
      'Peace and reconciliation'
    ]
  },
  {
    name: 'Dante Alighieri',
    role: 'Poet and Theologian',
    period: '13th-14th Century',
    contributions: [
      'Divine Comedy',
      'Medieval worldview',
      'Political theology',
      'Literary influence'
    ]
  },
  {
    name: 'Catherine of Siena',
    role: 'Mystic and Reformer',
    period: '14th Century',
    contributions: [
      'Mystical experiences',
      'Papal reform',
      'Political influence',
      'Spiritual writings'
    ]
  }
]

const monasticOrders = [
  {
    order: 'Benedictines',
    founded: '529 CE',
    founder: 'Benedict of Nursia',
    characteristics: [
      'Stability and obedience',
      'Prayer and work (ora et labora)',
      'Community life',
      'Agricultural work'
    ]
  },
  {
    order: 'Cistercians',
    founded: '1098 CE',
    founder: 'Robert of Molesme',
    characteristics: [
      'Strict observance',
      'Manual labor',
      'Agricultural innovation',
      'Simplicity and poverty'
    ]
  },
  {
    order: 'Franciscans',
    founded: '1209 CE',
    founder: 'Francis of Assisi',
    characteristics: [
      'Mendicant lifestyle',
      'Poverty and simplicity',
      'Preaching and service',
      'Creation spirituality'
    ]
  },
  {
    order: 'Dominicans',
    founded: '1216 CE',
    founder: 'Dominic de Guzmán',
    characteristics: [
      'Preaching and teaching',
      'Intellectual rigor',
      'Inquisition involvement',
      'University education'
    ]
  }
]

const theologicalDevelopments = [
  {
    area: 'Scholasticism',
    developments: [
      'Rational theology',
      'Aristotelian philosophy',
      'University education',
      'Systematic theology'
    ]
  },
  {
    area: 'Mysticism',
    developments: [
      'Contemplative prayer',
      'Mystical experiences',
      'Spiritual writings',
      'Personal devotion'
    ]
  },
  {
    area: 'Sacramental Theology',
    developments: [
      'Seven sacraments',
      'Transubstantiation',
      'Penance system',
      'Indulgences'
    ]
  },
  {
    area: 'Church Authority',
    developments: [
      'Papal supremacy',
      'Canon law',
      'Ecclesiastical hierarchy',
      'Church-state relations'
    ]
  }
]

const culturalImpact = [
  {
    area: 'Education',
    impact: [
      'University foundation',
      'Monastic schools',
      'Classical preservation',
      'Scholastic method'
    ]
  },
  {
    area: 'Art and Architecture',
    impact: [
      'Gothic cathedrals',
      'Religious art',
      'Manuscript illumination',
      'Liturgical music'
    ]
  },
  {
    area: 'Social Structure',
    impact: [
      'Feudal system',
      'Church hierarchy',
      'Monastic communities',
      'Charitable institutions'
    ]
  },
  {
    area: 'Political Influence',
    impact: [
      'Papal authority',
      'Church-state relations',
      'Crusades',
      'Canon law'
    ]
  }
]

export default function MedievalChurchHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Medieval Church History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the medieval period of Christianity, from the fall of Rome through the rise of monasticism, 
          the Crusades, scholasticism, and the church\'s central role in medieval society and culture.
        </p>
      </div>

      {/* Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Historical Timeline</h2>
        <div className="space-y-12">
          {timePeriods.map((period) => (
            <div key={period.period} className="bg-card rounded-lg p-6 border">
              <h3 className="text-2xl font-bold mb-4 text-primary">{period.period}</h3>
              <p className="text-muted-foreground mb-6">{period.description}</p>
              <div className="space-y-4">
                {period.events.map((event) => (
                  <Card key={event.year} className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Badge variant="outline" className="shrink-0">
                          <Calendar className="h-3 w-3 mr-1" />
                          {event.year}
                        </Badge>
                        <div>
                          <h4 className="font-semibold">{event.event}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Figures */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Figures</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyFigures.map((figure) => (
            <Card key={figure.name} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-4 w-4" />
                  {figure.name}
                </CardTitle>
                <CardDescription>
                  <Badge variant="outline" className="text-xs">{figure.role}</Badge>
                  <span className="ml-2 text-xs">{figure.period}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm mb-2">Contributions:</h4>
                <ul className="text-xs space-y-1">
                  {figure.contributions.map((contribution) => (
                    <li key={contribution} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {contribution}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Monastic Orders */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Major Monastic Orders</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {monasticOrders.map((order) => (
            <Card key={order.order}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  {order.order}
                </CardTitle>
                <CardDescription>
                  Founded {order.founded} by {order.founder}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm mb-2">Characteristics:</h4>
                <ul className="space-y-1">
                  {order.characteristics.map((characteristic) => (
                    <li key={characteristic} className="flex items-center gap-2 text-sm">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {characteristic}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Theological Developments */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Theological Developments</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {theologicalDevelopments.map((area) => (
            <Card key={area.area}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  {area.area}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {area.developments.map((development) => (
                    <li key={development} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {development}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Cultural Impact */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Cultural Impact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {culturalImpact.map((area) => (
            <Card key={area.area}>
              <CardHeader>
                <CardTitle>{area.area}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {area.impact.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Study Resources */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Study Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Primary Sources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Essential medieval texts:</p>
              <ul className="text-sm space-y-1">
                <li>• Summa Theologica</li>
                <li>• Divine Comedy</li>
                <li>• Monastic Rules</li>
                <li>• Church Councils</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historical Context</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Understanding medieval society:</p>
              <ul className="text-sm space-y-1">
                <li>• Feudal System</li>
                <li>• Crusades</li>
                <li>• Black Death</li>
                <li>• Renaissance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Architectural Heritage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Medieval church architecture:</p>
              <ul className="text-sm space-y-1">
                <li>• Gothic Cathedrals</li>
                <li>• Monastic Buildings</li>
                <li>• Romanesque Churches</li>
                <li>• Religious Art</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Continue Your Study</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          The medieval period shaped Christianity\'s role in society and culture for centuries. 
          Understanding this era is crucial for comprehending the church\'s development and 
          its relationship with secular authority.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="/religion/christianity/history/reformation" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Reformation Period
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="/studies/history" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              More Historical Studies
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
} 