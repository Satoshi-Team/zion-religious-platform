import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Users, Book, MapPin, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Medieval Hinduism History - Gupta Period to Bhakti Movement',
  description: 'Explore the medieval period of Hinduism: Gupta Empire, Bhakti movement, temple architecture, and the flourishing of Hindu culture.',
  keywords: 'medieval hinduism history, gupta empire, bhakti movement, temple architecture, hindu kingdoms, medieval india',
  openGraph: {
    title: 'Medieval Hinduism History - Gupta Period to Bhakti Movement',
    description: 'Explore the medieval period of Hinduism: Gupta Empire, Bhakti movement, temple architecture, and the flourishing of Hindu culture.',
    type: 'website',
  },
}

const timeline = [
  {
    period: 'Gupta Empire (320-550 CE)',
    description: 'The golden age of classical Hinduism, marked by cultural and artistic achievements.',
    events: [
      {
        year: '320 CE',
        event: 'Foundation of Gupta Empire',
        description: 'Chandragupta I establishes the Gupta dynasty.'
      },
      {
        year: '375-415 CE',
        event: 'Reign of Chandragupta II',
        description: 'Peak of Gupta power and cultural flourishing.'
      },
      {
        year: '400-500 CE',
        event: 'Classical Sanskrit Literature',
        description: 'Kalidasa and other poets create masterpieces.'
      },
      {
        year: '500 CE',
        event: 'Decline of Gupta Empire',
        description: 'Huna invasions and internal conflicts weaken the empire.'
      }
    ]
  },
  {
    period: 'Regional Kingdoms (550-1200 CE)',
    description: 'Period of regional Hindu kingdoms and cultural diversity.',
    events: [
      {
        year: '600-700 CE',
        event: 'Pallava Dynasty',
        description: 'Temple architecture and cultural patronage in South India.'
      },
      {
        year: '700-900 CE',
        event: 'Chola Empire',
        description: 'Maritime power and temple building in Tamil Nadu.'
      },
      {
        year: '800-1000 CE',
        event: 'Rashtrakuta Dynasty',
        description: 'Cultural achievements and temple architecture in Deccan.'
      },
      {
        year: '1000-1200 CE',
        event: 'Chalukya and Hoysala',
        description: 'Temple building and cultural patronage in Karnataka.'
      }
    ]
  },
  {
    period: 'Bhakti Movement (600-1600 CE)',
    description: 'Devotional movement emphasizing personal relationship with the divine.',
    events: [
      {
        year: '600-900 CE',
        event: 'Early Bhakti Saints',
        description: 'Alvars and Nayanars in South India.'
      },
      {
        year: '1000-1300 CE',
        event: 'North Indian Bhakti',
        description: 'Ramananda and his disciples spread devotion.'
      },
      {
        year: '1300-1600 CE',
        event: 'Medieval Bhakti Saints',
        description: 'Kabir, Mirabai, Tulsidas, and other saints.'
      }
    ]
  },
  {
    period: 'Islamic Rule and Hindu Response (1200-1700 CE)',
    description: 'Period of Muslim rule and Hindu cultural adaptation.',
    events: [
      {
        year: '1206 CE',
        event: 'Delhi Sultanate',
        description: 'Beginning of Muslim rule in North India.'
      },
      {
        year: '1526 CE',
        event: 'Mughal Empire',
        description: 'Babur establishes Mughal rule in India.'
      },
      {
        year: '1556-1605 CE',
        event: 'Reign of Akbar',
        description: 'Religious tolerance and cultural synthesis.'
      },
      {
        year: '1600-1700 CE',
        event: 'Hindu Cultural Revival',
        description: 'Religious and cultural responses to Islamic rule.'
      }
    ]
  }
]

const keyFigures = [
  {
    name: 'Kalidasa',
    role: 'Classical Poet',
    period: '4th-5th Century CE',
    contributions: [
      'Shakuntala',
      'Meghaduta',
      'Raghuvamsha',
      'Classical Sanskrit poetry'
    ]
  },
  {
    name: 'Ramanuja',
    role: 'Vishishtadvaita Philosopher',
    period: '1017-1137 CE',
    contributions: [
      'Vishishtadvaita philosophy',
      'Bhakti theology',
      'Commentary on Brahma Sutras',
      'Sri Vaishnavism'
    ]
  },
  {
    name: 'Madhva',
    role: 'Dvaita Philosopher',
    period: '1238-1317 CE',
    contributions: [
      'Dvaita philosophy',
      'Dualistic theology',
      'Commentary on Vedanta',
      'Madhva tradition'
    ]
  },
  {
    name: 'Kabir',
    role: 'Bhakti Saint',
    period: '1440-1518 CE',
    contributions: [
      'Sant tradition',
      'Poetry and songs',
      'Social reform',
      'Interfaith harmony'
    ]
  },
  {
    name: 'Mirabai',
    role: 'Bhakti Poet',
    period: '1498-1547 CE',
    contributions: [
      'Devotional poetry',
      'Krishna bhakti',
      'Women\'s spirituality',
      'Cultural influence'
    ]
  },
  {
    name: 'Tulsidas',
    role: 'Ram Bhakti Saint',
    period: '1532-1623 CE',
    contributions: [
      'Ramcharitmanas',
      'Ram bhakti',
      'Hindi literature',
      'Cultural synthesis'
    ]
  }
]

const culturalAchievements = [
  {
    area: 'Temple Architecture',
    achievements: [
      'Nagara style temples',
      'Dravida style temples',
      'Vesara style temples',
      'Rock-cut architecture'
    ]
  },
  {
    area: 'Literature and Poetry',
    achievements: [
      'Classical Sanskrit drama',
      'Bhakti poetry',
      'Regional literature',
      'Religious texts'
    ]
  },
  {
    area: 'Philosophy and Theology',
    achievements: [
      'Advaita Vedanta',
      'Vishishtadvaita',
      'Dvaita philosophy',
      'Bhakti theology'
    ]
  },
  {
    area: 'Arts and Music',
    achievements: [
      'Classical dance forms',
      'Carnatic music',
      'Temple sculpture',
      'Painting traditions'
    ]
  }
]

const religiousMovements = [
  {
    movement: 'Bhakti Movement',
    description: 'Devotional movement emphasizing personal relationship with God.',
    features: [
      'Personal devotion',
      'Vernacular languages',
      'Social equality',
      'Emotional expression'
    ]
  },
  {
    movement: 'Tantric Traditions',
    description: 'Esoteric practices and rituals for spiritual transformation.',
    features: [
      'Ritual practices',
      'Meditation techniques',
      'Deity worship',
      'Spiritual empowerment'
    ]
  },
  {
    movement: 'Sectarian Developments',
    description: 'Development of major Hindu sects and traditions.',
    features: [
      'Vaishnavism',
      'Shaivism',
      'Shaktism',
      'Smartism'
    ]
  }
]

export default function MedievalHinduismHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Medieval Hinduism History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the medieval period of Hinduism: Gupta Empire, Bhakti movement, temple architecture, 
          and the flourishing of Hindu culture during this transformative era.
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

      {/* Cultural Achievements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Cultural Achievements</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {culturalAchievements.map((area) => (
            <Card key={area.area}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  {area.area}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {area.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Religious Movements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Religious Movements</h2>
        <div className="space-y-6">
          {religiousMovements.map((movement) => (
            <Card key={movement.movement}>
              <CardHeader>
                <CardTitle>{movement.movement}</CardTitle>
                <CardDescription>{movement.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {movement.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
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
              <p className="text-sm">Essential medieval Hindu texts:</p>
              <ul className="text-sm space-y-1">
                <li>• Bhakti poetry</li>
                <li>• Philosophical texts</li>
                <li>• Temple inscriptions</li>
                <li>• Historical chronicles</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historical Context</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Understanding medieval India:</p>
              <ul className="text-sm space-y-1">
                <li>• Gupta Empire</li>
                <li>• Regional Kingdoms</li>
                <li>• Islamic Rule</li>
                <li>• Cultural Exchange</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Architectural Heritage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Medieval Hindu architecture:</p>
              <ul className="text-sm space-y-1">
                <li>• Temple Complexes</li>
                <li>• Rock-cut Monuments</li>
                <li>• Sculpture and Art</li>
                <li>• Urban Planning</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Continue Your Study</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          The medieval period represents a golden age of Hindu culture and spirituality. 
          Explore the modern period to see how Hinduism continues to evolve and adapt.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="/religion/hinduism/history/modern" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Modern Hinduism History
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