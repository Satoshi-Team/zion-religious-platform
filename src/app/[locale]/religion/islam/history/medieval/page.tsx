import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Users, Book, MapPin, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Medieval Islamic History - Umayyad and Abbasid Caliphates',
  description: 'Explore the medieval period of Islam: Umayyad and Abbasid caliphates, Islamic Golden Age, scientific achievements, and cultural flourishing.',
  keywords: 'medieval islam history, umayyad caliphate, abbasid caliphate, islamic golden age, islamic science, islamic culture, medieval islam',
  openGraph: {
    title: 'Medieval Islamic History - Umayyad and Abbasid Caliphates',
    description: 'Explore the medieval period of Islam: Umayyad and Abbasid caliphates, Islamic Golden Age, scientific achievements, and cultural flourishing.',
    type: 'website',
  },
}

const timeline = [
  {
    period: 'Umayyad Caliphate (661-750 CE)',
    description: 'The first hereditary caliphate, expanding Islamic rule across three continents.',
    events: [
      {
        year: '661 CE',
        event: 'Foundation of Umayyad Dynasty',
        description: 'Muawiyah establishes the Umayyad caliphate in Damascus.'
      },
      {
        year: '711 CE',
        event: 'Conquest of Spain',
        description: 'Tariq ibn Ziyad leads Muslim forces into the Iberian Peninsula.'
      },
      {
        year: '732 CE',
        event: 'Battle of Tours',
        description: 'Muslim advance into France is halted by Charles Martel.'
      },
      {
        year: '750 CE',
        event: 'Fall of Umayyads',
        description: 'Abbasid revolution overthrows Umayyad rule, except in Spain.'
      }
    ]
  },
  {
    period: 'Abbasid Caliphate (750-1258 CE)',
    description: 'The golden age of Islamic civilization, marked by cultural and scientific achievements.',
    events: [
      {
        year: '750 CE',
        event: 'Abbasid Revolution',
        description: 'Abu al-Abbas establishes Abbasid rule, moving capital to Iraq.'
      },
      {
        year: '762 CE',
        event: 'Foundation of Baghdad',
        description: 'Caliph al-Mansur builds Baghdad as the new capital.'
      },
      {
        year: '786-809 CE',
        event: 'Reign of Harun al-Rashid',
        description: 'Peak of Abbasid power and cultural flourishing.'
      },
      {
        year: '813-833 CE',
        event: 'Reign of al-Ma\'mun',
        description: 'Patron of science and philosophy, House of Wisdom established.'
      },
      {
        year: '1055 CE',
        event: 'Seljuk Conquest',
        description: 'Seljuk Turks take control, beginning Turkish influence.'
      },
      {
        year: '1258 CE',
        event: 'Mongol Sack of Baghdad',
        description: 'Mongols destroy Baghdad, ending Abbasid caliphate.'
      }
    ]
  },
  {
    period: 'Regional Dynasties (750-1500 CE)',
    description: 'Period of multiple Islamic dynasties ruling different regions.',
    events: [
      {
        year: '756-1031 CE',
        event: 'Umayyad Caliphate of Cordoba',
        description: 'Muslim rule in Spain, cultural and architectural achievements.'
      },
      {
        year: '909-1171 CE',
        event: 'Fatimid Caliphate',
        description: 'Shi\'a dynasty in North Africa and Egypt, founded Cairo.'
      },
      {
        year: '1037-1194 CE',
        event: 'Seljuk Empire',
        description: 'Turkish dynasty ruling much of the Middle East.'
      },
      {
        year: '1171-1250 CE',
        event: 'Ayyubid Dynasty',
        description: 'Saladin\'s dynasty, known for fighting the Crusades.'
      },
      {
        year: '1250-1517 CE',
        event: 'Mamluk Sultanate',
        description: 'Slave-soldier dynasty ruling Egypt and Syria.'
      }
    ]
  }
]

const keyFigures = [
  {
    name: 'Muawiyah I',
    role: 'First Umayyad Caliph',
    period: '661-680 CE',
    contributions: [
      'Established hereditary caliphate',
      'Expanded Islamic territories',
      'Administrative reforms',
      'Naval power development'
    ]
  },
  {
    name: 'Harun al-Rashid',
    role: 'Abbasid Caliph',
    period: '786-809 CE',
    contributions: [
      'Cultural patronage',
      'Diplomatic relations',
      'Economic prosperity',
      'Literary achievements'
    ]
  },
  {
    name: 'al-Ma\'mun',
    role: 'Abbasid Caliph',
    period: '813-833 CE',
    contributions: [
      'House of Wisdom',
      'Translation movement',
      'Scientific patronage',
      'Religious tolerance'
    ]
  },
  {
    name: 'Saladin',
    role: 'Ayyubid Sultan',
    period: '1174-1193 CE',
    contributions: [
      'Recapture of Jerusalem',
      'Crusader resistance',
      'Unified Muslim forces',
      'Chivalrous reputation'
    ]
  },
  {
    name: 'Ibn Sina (Avicenna)',
    role: 'Philosopher and Physician',
    period: '980-1037 CE',
    contributions: [
      'Medical encyclopedia',
      'Philosophical works',
      'Scientific method',
      'Influence on Europe'
    ]
  },
  {
    name: 'al-Khwarizmi',
    role: 'Mathematician',
    period: '780-850 CE',
    contributions: [
      'Algebra development',
      'Algorithm concept',
      'Astronomical tables',
      'Mathematical notation'
    ]
  }
]

const achievements = [
  {
    area: 'Science and Medicine',
    achievements: [
      'Advances in algebra and geometry',
      'Medical encyclopedias',
      'Astronomical observations',
      'Chemical processes'
    ]
  },
  {
    area: 'Philosophy and Theology',
    achievements: [
      'Integration of Greek philosophy',
      'Islamic theology development',
      'Sufi mysticism',
      'Religious tolerance'
    ]
  },
  {
    area: 'Arts and Architecture',
    achievements: [
      'Mosque architecture',
      'Calligraphy and illumination',
      'Geometric patterns',
      'Garden design'
    ]
  },
  {
    area: 'Literature and Poetry',
    achievements: [
      'Arabic poetry revival',
      'Persian literature',
      'Story collections',
      'Historical chronicles'
    ]
  }
]

const culturalImpact = [
  {
    area: 'Education',
    impact: [
      'Madrasa system',
      'University foundations',
      'Library networks',
      'Translation centers'
    ]
  },
  {
    area: 'Trade and Economy',
    impact: [
      'Silk Road connections',
      'Banking innovations',
      'Market regulations',
      'International trade'
    ]
  },
  {
    area: 'Urban Development',
    impact: [
      'Planned cities',
      'Infrastructure projects',
      'Public services',
      'Architectural innovations'
    ]
  },
  {
    area: 'Social Structure',
    impact: [
      'Religious tolerance',
      'Social mobility',
      'Women\'s education',
      'Cultural diversity'
    ]
  }
]

export default function MedievalIslamHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Medieval Islamic History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the medieval period of Islam: Umayyad and Abbasid caliphates, the Islamic Golden Age, 
          scientific achievements, and cultural flourishing that shaped the medieval world.
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

      {/* Achievements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Cultural and Scientific Achievements</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((area) => (
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
              <p className="text-sm">Essential medieval Islamic texts:</p>
              <ul className="text-sm space-y-1">
                <li>• Historical Chronicles</li>
                <li>• Scientific Works</li>
                <li>• Literary Collections</li>
                <li>• Travel Accounts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historical Context</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Understanding the medieval Islamic world:</p>
              <ul className="text-sm space-y-1">
                <li>• Byzantine Empire</li>
                <li>• Crusades</li>
                <li>• Mongol Invasions</li>
                <li>• Trade Networks</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Architectural Heritage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Medieval Islamic architecture:</p>
              <ul className="text-sm space-y-1">
                <li>• Great Mosques</li>
                <li>• Palaces and Fortresses</li>
                <li>• Gardens and Fountains</li>
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
          The medieval period represents the golden age of Islamic civilization, with achievements 
          that influenced the entire world. Explore the modern period to see how Islam continues to evolve.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="/religion/islam/history/modern" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Modern Islamic History
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