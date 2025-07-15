import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Users, Book, MapPin, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Early Hinduism History - Vedic to Classical Periods',
  description: 'Explore the early period of Hinduism: Vedic civilization, Upanishadic philosophy, and the development of classical Hindu traditions.',
  keywords: 'early hinduism history, vedic period, upanishads, classical hinduism, indus valley, sanskrit literature',
  openGraph: {
    title: 'Early Hinduism History - Vedic to Classical Periods',
    description: 'Explore the early period of Hinduism: Vedic civilization, Upanishadic philosophy, and the development of classical Hindu traditions.',
    type: 'website',
  },
}

const timeline = [
  {
    period: 'Indus Valley Civilization (3300-1300 BCE)',
    description: 'The pre-Vedic urban civilization that laid the foundation for later Hindu culture.',
    events: [
      {
        year: '3300-2600 BCE',
        event: 'Early Harappan Period',
        description: 'Development of early urban centers and trade networks.'
      },
      {
        year: '2600-1900 BCE',
        event: 'Mature Harappan Period',
        description: 'Peak of urban civilization with advanced architecture and culture.'
      },
      {
        year: '1900-1300 BCE',
        event: 'Late Harappan Period',
        description: 'Decline of urban centers and transition to rural society.'
      }
    ]
  },
  {
    period: 'Vedic Period (1500-500 BCE)',
    description: 'The period of Vedic literature and early Hindu religious practices.',
    events: [
      {
        year: '1500-1000 BCE',
        event: 'Early Vedic Period',
        description: 'Composition of the Rigveda, earliest Hindu scripture.'
      },
      {
        year: '1000-600 BCE',
        event: 'Later Vedic Period',
        description: 'Composition of other Vedas, Brahmanas, and early Upanishads.'
      },
      {
        year: '800-500 BCE',
        event: 'Upanishadic Period',
        description: 'Development of philosophical texts and spiritual inquiry.'
      }
    ]
  },
  {
    period: 'Epic Period (500 BCE-500 CE)',
    description: 'The period of great epics and the development of classical Hinduism.',
    events: [
      {
        year: '500-200 BCE',
        event: 'Composition of Epics',
        description: 'Development of the Mahabharata and Ramayana.'
      },
      {
        year: '200 BCE-200 CE',
        event: 'Classical Sanskrit Literature',
        description: 'Flourishing of Sanskrit literature and drama.'
      },
      {
        year: '200-500 CE',
        event: 'Puranic Period',
        description: 'Composition of Puranas and development of temple worship.'
      }
    ]
  }
]

const keyFigures = [
  {
    name: 'Vyasa',
    role: 'Compiler of Vedas',
    period: 'Ancient',
    contributions: [
      'Compilation of Vedas',
      'Composition of Mahabharata',
      'Establishment of Vedic tradition',
      'Philosophical teachings'
    ]
  },
  {
    name: 'Valmiki',
    role: 'Author of Ramayana',
    period: 'Ancient',
    contributions: [
      'Composition of Ramayana',
      'Establishment of epic tradition',
      'Moral teachings',
      'Literary innovation'
    ]
  },
  {
    name: 'Yajnavalkya',
    role: 'Upanishadic Sage',
    period: '800-600 BCE',
    contributions: [
      'Brihadaranyaka Upanishad',
      'Advaita philosophy',
      'Spiritual teachings',
      'Dialectical method'
    ]
  },
  {
    name: 'Krishna',
    role: 'Divine Teacher',
    period: 'Mythological',
    contributions: [
      'Bhagavad Gita',
      'Dharma teachings',
      'Devotional philosophy',
      'Karma yoga'
    ]
  },
  {
    name: 'Patanjali',
    role: 'Yoga Philosopher',
    period: '200 BCE-200 CE',
    contributions: [
      'Yoga Sutras',
      'Ashtanga yoga',
      'Meditation techniques',
      'Philosophical system'
    ]
  }
]

const majorDevelopments = [
  {
    area: 'Religious',
    developments: [
      'Vedic rituals and sacrifices',
      'Upanishadic philosophy',
      'Bhakti movement origins',
      'Temple worship development'
    ]
  },
  {
    area: 'Philosophical',
    developments: [
      'Advaita Vedanta',
      'Samkhya philosophy',
      'Yoga philosophy',
      'Karma and rebirth concepts'
    ]
  },
  {
    area: 'Social',
    developments: [
      'Varna system development',
      'Ashrama system',
      'Dharma concepts',
      'Family and community life'
    ]
  },
  {
    area: 'Cultural',
    developments: [
      'Sanskrit literature',
      'Classical arts',
      'Architecture',
      'Music and dance'
    ]
  }
]

const sacredTexts = [
  {
    category: 'Vedas',
    texts: [
      'Rigveda - Hymns and prayers',
      'Yajurveda - Ritual formulas',
      'Samaveda - Musical chants',
      'Atharvaveda - Spells and incantations'
    ]
  },
  {
    category: 'Upanishads',
    texts: [
      'Brihadaranyaka - Great forest teaching',
      'Chandogya - Chanting and meditation',
      'Katha - Death and immortality',
      'Mundaka - Knowledge and ignorance'
    ]
  },
  {
    category: 'Epics',
    texts: [
      'Mahabharata - Great Indian epic',
      'Ramayana - Story of Rama',
      'Bhagavad Gita - Divine song',
      'Puranas - Ancient legends'
    ]
  }
]

export default function EarlyHinduismHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Early Hinduism History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the early period of Hinduism: Vedic civilization, Upanishadic philosophy, 
          and the development of classical Hindu traditions that shaped Indian culture.
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

      {/* Sacred Texts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Sacred Texts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {sacredTexts.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.texts.map((text) => (
                    <li key={text} className="flex items-center gap-2 text-sm">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {text}
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
              <p className="text-sm">Essential early Hindu texts:</p>
              <ul className="text-sm space-y-1">
                <li>• Four Vedas</li>
                <li>• Principal Upanishads</li>
                <li>• Mahabharata</li>
                <li>• Ramayana</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historical Context</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Understanding early Hindu society:</p>
              <ul className="text-sm space-y-1">
                <li>• Indus Valley Civilization</li>
                <li>• Aryan Migration</li>
                <li>• Vedic Society</li>
                <li>• Classical India</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Archaeological Evidence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Material evidence of early Hinduism:</p>
              <ul className="text-sm space-y-1">
                <li>• Indus Valley Sites</li>
                <li>• Early Temples</li>
                <li>• Religious Artifacts</li>
                <li>• Inscriptions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Continue Your Study</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          The early period of Hinduism established the foundation for one of the world\'s oldest religions. 
          Understanding this formative era is essential for comprehending Hindu philosophy, practice, and culture.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="/religion/hinduism/history/medieval" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Medieval Hinduism History
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