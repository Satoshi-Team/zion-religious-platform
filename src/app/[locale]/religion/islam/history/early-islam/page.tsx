import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Users, Book, MapPin, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Early Islam History - From Muhammad to the Rashidun Caliphate',
  description: 'Explore the formative period of Islam from the birth of Prophet Muhammad through the Rashidun Caliphate, including the revelation of the Quran and the rapid expansion of the Islamic community.',
  keywords: 'early islam history, prophet muhammad, rashidun caliphate, mecca, medina, quran revelation, islamic expansion',
  openGraph: {
    title: 'Early Islam History - From Muhammad to the Rashidun Caliphate',
    description: 'Explore the formative period of Islam from the birth of Prophet Muhammad through the Rashidun Caliphate, including the revelation of the Quran and the rapid expansion of the Islamic community.',
    type: 'website',
  },
}

const timeline = [
  {
    period: 'Pre-Islamic Arabia (570-610 CE)',
    description: 'The period before Muhammad\'s prophethood, characterized by tribal society, polytheism, and trade routes.',
    events: [
      {
        year: '570 CE',
        event: 'Birth of Muhammad',
        description: 'Muhammad is born in Mecca to the Quraysh tribe, orphaned at an early age.'
      },
      {
        year: '595 CE',
        event: 'Marriage to Khadijah',
        description: 'Muhammad marries Khadijah, a wealthy merchant widow, beginning a monogamous marriage.'
      },
      {
        year: '610 CE',
        event: 'First Revelation',
        description: 'Muhammad receives his first revelation from the Angel Gabriel in the Cave of Hira.'
      }
    ]
  },
  {
    period: 'Meccan Period (610-622 CE)',
    description: 'The period of Muhammad\'s prophethood in Mecca, marked by persecution and the gradual growth of the Muslim community.',
    events: [
      {
        year: '613 CE',
        event: 'Public Preaching',
        description: 'Muhammad begins publicly preaching monotheism and social justice in Mecca.'
      },
      {
        year: '615 CE',
        event: 'First Migration to Abyssinia',
        description: 'Some Muslims migrate to Christian Abyssinia to escape persecution.'
      },
      {
        year: '619 CE',
        event: 'Year of Sorrow',
        description: 'Death of Khadijah and Abu Talib, Muhammad\'s uncle and protector.'
      },
      {
        year: '620 CE',
        event: 'Night Journey and Ascension',
        description: 'Muhammad\'s miraculous journey from Mecca to Jerusalem and ascension to heaven.'
      }
    ]
  },
  {
    period: 'Medinan Period (622-632 CE)',
    description: 'The period in Medina, establishing the first Islamic community and state.',
    events: [
      {
        year: '622 CE',
        event: 'Hijra to Medina',
        description: 'Muhammad and his followers migrate to Medina, marking the beginning of the Islamic calendar.'
      },
      {
        year: '624 CE',
        event: 'Battle of Badr',
        description: 'First major battle between Muslims and Meccans, resulting in Muslim victory.'
      },
      {
        year: '625 CE',
        event: 'Battle of Uhud',
        description: 'Muslims face setback but maintain their position in Medina.'
      },
      {
        year: '627 CE',
        event: 'Battle of the Trench',
        description: 'Muslims successfully defend Medina against a coalition of enemies.'
      },
      {
        year: '628 CE',
        event: 'Treaty of Hudaybiyyah',
        description: 'Peace agreement with Meccans, allowing Muslims to perform pilgrimage the following year.'
      },
      {
        year: '630 CE',
        event: 'Conquest of Mecca',
        description: 'Mecca surrenders to Muhammad, who shows mercy and establishes monotheism.'
      },
      {
        year: '632 CE',
        event: 'Farewell Pilgrimage',
        description: 'Muhammad\'s final pilgrimage and sermon, establishing core Islamic principles.'
      },
      {
        year: '632 CE',
        event: 'Death of Muhammad',
        description: 'Muhammad passes away in Medina, leaving behind a unified Arabian Peninsula.'
      }
    ]
  },
  {
    period: 'Rashidun Caliphate (632-661 CE)',
    description: 'The period of the four "Rightly Guided" caliphs who succeeded Muhammad.',
    events: [
      {
        year: '632-634 CE',
        event: 'Caliphate of Abu Bakr',
        description: 'First caliph, consolidates Islamic rule and begins compilation of the Quran.'
      },
      {
        year: '634-644 CE',
        event: 'Caliphate of Umar',
        description: 'Rapid expansion into Byzantine and Persian territories, establishing administrative systems.'
      },
      {
        year: '644-656 CE',
        event: 'Caliphate of Uthman',
        description: 'Standardization of the Quran, continued expansion, and growing internal tensions.'
      },
      {
        year: '656-661 CE',
        event: 'Caliphate of Ali',
        description: 'Period of civil war, assassination of Ali, and transition to Umayyad dynasty.'
      }
    ]
  }
]

const keyFigures = [
  {
    name: 'Muhammad',
    role: 'Prophet and Messenger',
    period: '570-632 CE',
    contributions: [
      'Revelation of the Quran',
      'Establishment of Islamic community',
      'Unification of Arabia',
      'Model of prophetic character'
    ]
  },
  {
    name: 'Abu Bakr',
    role: 'First Caliph',
    period: '632-634 CE',
    contributions: [
      'Consolidation of Islamic rule',
      'Ridda Wars (Apostasy Wars)',
      'Quran compilation',
      'Succession planning'
    ]
  },
  {
    name: 'Umar ibn al-Khattab',
    role: 'Second Caliph',
    period: '634-644 CE',
    contributions: [
      'Rapid territorial expansion',
      'Administrative reforms',
      'Justice and equality',
      'Military organization'
    ]
  },
  {
    name: 'Uthman ibn Affan',
    role: 'Third Caliph',
    period: '644-656 CE',
    contributions: [
      'Quran standardization',
      'Naval expansion',
      'Charitable works',
      'Diplomatic relations'
    ]
  },
  {
    name: 'Ali ibn Abi Talib',
    role: 'Fourth Caliph',
    period: '656-661 CE',
    contributions: [
      'Justice and reform',
      'Theological leadership',
      'Military campaigns',
      'Shi\'a foundation'
    ]
  },
  {
    name: 'Khadijah',
    role: 'First Wife of Muhammad',
    period: '595-619 CE',
    contributions: [
      'Financial support',
      'Emotional support',
      'First Muslim convert',
      'Model of faith'
    ]
  }
]

const majorDevelopments = [
  {
    area: 'Religious',
    developments: [
      'Revelation of the Quran',
      'Establishment of Five Pillars',
      'Islamic calendar',
      'Prayer direction (Qibla)'
    ]
  },
  {
    area: 'Political',
    developments: [
      'First Islamic state',
      'Caliphate system',
      'Tribal unification',
      'Diplomatic relations'
    ]
  },
  {
    area: 'Social',
    developments: [
      'Ummah (community) concept',
      'Social justice reforms',
      'Women\'s rights',
      'Slavery reforms'
    ]
  },
  {
    area: 'Military',
    developments: [
      'Defensive warfare',
      'Conquest strategies',
      'Military organization',
      'Peace treaties'
    ]
  }
]

const expansion = [
  {
    region: 'Arabian Peninsula',
    period: '622-632 CE',
    events: [
      'Unification under Islam',
      'Elimination of polytheism',
      'Establishment of Islamic law',
      'Tribal alliances'
    ]
  },
  {
    region: 'Byzantine Territories',
    period: '634-661 CE',
    events: [
      'Conquest of Syria',
      'Capture of Jerusalem',
      'Egyptian campaigns',
      'North African expansion'
    ]
  },
  {
    region: 'Persian Empire',
    period: '636-651 CE',
    events: [
      'Battle of Qadisiyyah',
      'Conquest of Iraq',
      'Fall of Ctesiphon',
      'Persian collapse'
    ]
  }
]

export default function EarlyIslamHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Early Islam History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the formative period of Islam from the birth of Prophet Muhammad through the Rashidun Caliphate, 
          including the revelation of the Quran and the rapid expansion of the Islamic community.
        </p>
      </div>

      {/* Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Historical Timeline</h2>
        <div className="space-y-12">
          {timeline.map((period) => (
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFigures.map((figure) => (
            <Card key={figure.name} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  {figure.name}
                </CardTitle>
                <CardDescription>
                  <Badge variant="outline">{figure.role}</Badge>
                  <span className="ml-2 text-xs">{figure.period}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm mb-2">Key Contributions:</h4>
                <ul className="text-sm space-y-1">
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

      {/* Major Developments */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Major Developments</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {majorDevelopments.map((area) => (
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

      {/* Expansion */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Islamic Expansion</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {expansion.map((region) => (
            <Card key={region.region}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {region.region}
                </CardTitle>
                <CardDescription>{region.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {region.events.map((event) => (
                    <li key={event} className="flex items-center gap-2 text-sm">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {event}
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
              <p className="text-sm">Essential texts for understanding early Islam:</p>
              <ul className="text-sm space-y-1">
                <li>• The Quran</li>
                <li>• Hadith Collections</li>
                <li>• Sira (Biography)</li>
                <li>• Early Chronicles</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historical Context</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Understanding the world of early Islam:</p>
              <ul className="text-sm space-y-1">
                <li>• Pre-Islamic Arabia</li>
                <li>• Byzantine Empire</li>
                <li>• Persian Empire</li>
                <li>• Tribal Society</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Archaeological Evidence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Material evidence of early Islam:</p>
              <ul className="text-sm space-y-1">
                <li>• Early Mosques</li>
                <li>• Inscriptions</li>
                <li>• Coins</li>
                <li>• Architecture</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Continue Your Study</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          The early period of Islam established the foundation for one of the world\'s major religions. 
          Understanding this formative era is essential for comprehending Islamic theology, practice, and history.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="/religion/islam/history/medieval" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Medieval Islamic History
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