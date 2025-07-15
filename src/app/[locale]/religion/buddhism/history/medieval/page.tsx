import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Users, Book, MapPin, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Medieval Buddhism History - Spread to Asia and School Development',
  description: 'Explore the medieval period of Buddhism: spread throughout Asia, development of different schools, and cultural achievements.',
  keywords: 'medieval buddhism history, buddhist schools, asian buddhism, mahayana, theravada, vajrayana, cultural spread',
  openGraph: {
    title: 'Medieval Buddhism History - Spread to Asia and School Development',
    description: 'Explore the medieval period of Buddhism: spread throughout Asia, development of different schools, and cultural achievements.',
    type: 'website',
  },
}

const timeline = [
  {
    period: 'Spread to Central Asia (1st-6th Century CE)',
    description: 'Buddhism spreads along the Silk Road to Central Asia and China.',
    events: [
      {
        year: '1st Century CE',
        event: 'Buddhism in China',
        description: 'First Buddhist missionaries arrive in China via Silk Road.'
      },
      {
        year: '2nd Century CE',
        event: 'Translation Movement',
        description: 'Kumarajiva and others translate Buddhist texts into Chinese.'
      },
      {
        year: '4th-6th Century CE',
        event: 'Buddhist Art Flourishes',
        description: 'Development of Buddhist art and architecture in Central Asia.'
      }
    ]
  },
  {
    period: 'Development of Mahayana (1st-8th Century CE)',
    description: 'Emergence and development of Mahayana Buddhism.',
    events: [
      {
        year: '1st Century CE',
        event: 'Mahayana Sutras',
        description: 'Composition of major Mahayana texts like Lotus Sutra.'
      },
      {
        year: '2nd-3rd Century CE',
        event: 'Nagarjuna',
        description: 'Founder of Madhyamaka philosophy and Middle Way school.'
      },
      {
        year: '4th-5th Century CE',
        event: 'Asanga and Vasubandhu',
        description: 'Development of Yogacara philosophy and consciousness-only school.'
      }
    ]
  },
  {
    period: 'Spread to East Asia (6th-12th Century CE)',
    description: 'Buddhism establishes itself in Korea, Japan, and Vietnam.',
    events: [
      {
        year: '6th Century CE',
        event: 'Buddhism in Korea',
        description: 'Buddhism introduced to Korean peninsula from China.'
      },
      {
        year: '6th Century CE',
        event: 'Buddhism in Japan',
        description: 'Buddhism officially introduced to Japan from Korea.'
      },
      {
        year: '8th Century CE',
        event: 'Nara Period',
        description: 'Establishment of major Buddhist temples in Japan.'
      },
      {
        year: '12th Century CE',
        event: 'Zen Buddhism',
        description: 'Introduction of Zen (Chan) Buddhism to Japan.'
      }
    ]
  },
  {
    period: 'Vajrayana Development (7th-12th Century CE)',
    description: 'Development of Vajrayana Buddhism in India and Tibet.',
    events: [
      {
        year: '7th Century CE',
        event: 'Buddhism in Tibet',
        description: 'King Songtsen Gampo introduces Buddhism to Tibet.'
      },
      {
        year: '8th Century CE',
        event: 'Padmasambhava',
        description: 'Introduction of Vajrayana Buddhism to Tibet.'
      },
      {
        year: '11th Century CE',
        event: 'Atisha',
        description: 'Reform of Tibetan Buddhism and establishment of Kadam school.'
      }
    ]
  }
]

const keyFigures = [
  {
    name: 'Nagarjuna',
    role: 'Madhyamaka Philosopher',
    period: '2nd-3rd Century CE',
    contributions: [
      'Madhyamaka philosophy',
      'Middle Way doctrine',
      'Emptiness teachings',
      'Philosophical texts'
    ]
  },
  {
    name: 'Asanga',
    role: 'Yogacara Philosopher',
    period: '4th Century CE',
    contributions: [
      'Yogacara philosophy',
      'Consciousness-only school',
      'Mahayana sutras',
      'Meditation practices'
    ]
  },
  {
    name: 'Kumarajiva',
    role: 'Translator',
    period: '4th-5th Century CE',
    contributions: [
      'Chinese translations',
      'Buddhist texts',
      'Cultural exchange',
      'Translation methods'
    ]
  },
  {
    name: 'Padmasambhava',
    role: 'Vajrayana Master',
    period: '8th Century CE',
    contributions: [
      'Tibetan Buddhism',
      'Vajrayana practices',
      'Tantric teachings',
      'Monastic establishment'
    ]
  },
  {
    name: 'Atisha',
    role: 'Tibetan Reformer',
    period: '11th Century CE',
    contributions: [
      'Buddhist reform',
      'Kadam school',
      'Lamrim teachings',
      'Monastic discipline'
    ]
  }
]

const buddhistSchools = [
  {
    school: 'Theravada',
    description: 'School of the Elders, emphasizing individual liberation.',
    features: [
      'Pali Canon',
      'Monastic focus',
      'Individual practice',
      'Southeast Asia'
    ]
  },
  {
    school: 'Mahayana',
    description: 'Great Vehicle, emphasizing compassion and universal liberation.',
    features: [
      'Bodhisattva ideal',
      'Compassion focus',
      'Universal salvation',
      'East Asia'
    ]
  },
  {
    school: 'Vajrayana',
    description: 'Diamond Vehicle, emphasizing esoteric practices and rapid enlightenment.',
    features: [
      'Tantric practices',
      'Guru devotion',
      'Rapid methods',
      'Tibet and Mongolia'
    ]
  }
]

const culturalAchievements = [
  {
    area: 'Architecture',
    achievements: [
      'Stupa construction',
      'Temple complexes',
      'Cave monasteries',
      'Pagoda design'
    ]
  },
  {
    area: 'Art and Sculpture',
    achievements: [
      'Buddhist iconography',
      'Mural paintings',
      'Sculpture traditions',
      'Mandala art'
    ]
  },
  {
    area: 'Literature',
    achievements: [
      'Sutra translations',
      'Commentarial literature',
      'Poetry and hymns',
      'Philosophical texts'
    ]
  },
  {
    area: 'Education',
    achievements: [
      'Monastic universities',
      'Text preservation',
      'Philosophical debate',
      'Meditation training'
    ]
  }
]

export default function MedievalBuddhismHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Medieval Buddhism History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the medieval period of Buddhism: spread throughout Asia, development of different schools, 
          and cultural achievements that shaped Buddhist traditions worldwide.
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

      {/* Buddhist Schools */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Buddhist Schools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {buddhistSchools.map((school) => (
            <Card key={school.school}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  {school.school}
                </CardTitle>
                <CardDescription>{school.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  {school.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {feature}
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

      {/* Study Resources */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Study Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Primary Sources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Essential medieval Buddhist texts:</p>
              <ul className="text-sm space-y-1">
                <li>• Mahayana Sutras</li>
                <li>• Philosophical texts</li>
                <li>• Commentaries</li>
                <li>• Historical chronicles</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historical Context</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Understanding medieval Asia:</p>
              <ul className="text-sm space-y-1">
                <li>• Silk Road trade</li>
                <li>• Asian kingdoms</li>
                <li>• Cultural exchange</li>
                <li>• Political changes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Architectural Heritage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Medieval Buddhist architecture:</p>
              <ul className="text-sm space-y-1">
                <li>• Temple complexes</li>
                <li>• Cave monasteries</li>
                <li>• Stupas and pagodas</li>
                <li>• Art and sculpture</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Continue Your Study</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          The medieval period represents the golden age of Buddhist expansion and cultural achievement. 
          Explore the modern period to see how Buddhism continues to adapt and spread globally.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="/religion/buddhism/history/modern" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Modern Buddhism History
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