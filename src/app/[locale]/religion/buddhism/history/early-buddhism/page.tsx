import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Users, Book, MapPin, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Early Buddhism History - Life of Buddha to Early Sangha',
  description: 'Explore the early period of Buddhism: life of Siddhartha Gautama, first Buddhist council, early Sangha, and the initial spread of Buddhism.',
  keywords: 'early buddhism history, life of buddha, first buddhist council, early sangha, buddhist spread, ancient india',
  openGraph: {
    title: 'Early Buddhism History - Life of Buddha to Early Sangha',
    description: 'Explore the early period of Buddhism: life of Siddhartha Gautama, first Buddhist council, early Sangha, and the initial spread of Buddhism.',
    type: 'website',
  },
}

const timeline = [
  {
    period: 'Life of Siddhartha Gautama (563-483 BCE)',
    description: 'The life of the historical Buddha and his path to enlightenment.',
    events: [
      {
        year: '563 BCE',
        event: 'Birth of Siddhartha',
        description: 'Born in Lumbini, Nepal, to King Suddhodana and Queen Maya.'
      },
      {
        year: '534 BCE',
        event: 'Four Sights',
        description: 'Witnesses old age, sickness, death, and a holy man.'
      },
      {
        year: '534 BCE',
        event: 'Great Renunciation',
        description: 'Leaves palace to seek spiritual truth.'
      },
      {
        year: '528 BCE',
        event: 'Enlightenment',
        description: 'Attains Buddhahood under the Bodhi tree in Bodh Gaya.'
      },
      {
        year: '528-483 BCE',
        event: 'Teaching Period',
        description: '45 years of teaching the Dharma throughout northern India.'
      },
      {
        year: '483 BCE',
        event: 'Parinirvana',
        description: 'Buddha passes away in Kushinagar, attaining final nirvana.'
      }
    ]
  },
  {
    period: 'Early Sangha (483-250 BCE)',
    description: 'The development of the Buddhist monastic community and early teachings.',
    events: [
      {
        year: '483 BCE',
        event: 'First Buddhist Council',
        description: 'Compilation of Buddha\'s teachings at Rajgir.'
      },
      {
        year: '383 BCE',
        event: 'Second Buddhist Council',
        description: 'Addresses monastic discipline and doctrinal disputes.'
      },
      {
        year: '250 BCE',
        event: 'Third Buddhist Council',
        description: 'Under Emperor Ashoka, establishes orthodox teachings.'
      }
    ]
  },
  {
    period: 'Ashoka\'s Reign (268-232 BCE)',
    description: 'The Mauryan emperor who spread Buddhism throughout India and beyond.',
    events: [
      {
        year: '268 BCE',
        event: 'Ashoka\'s Conversion',
        description: 'Emperor Ashoka converts to Buddhism after Kalinga war.'
      },
      {
        year: '250 BCE',
        event: 'Buddhist Missions',
        description: 'Ashoka sends missionaries throughout India and abroad.'
      },
      {
        year: '250 BCE',
        event: 'Pillar Edicts',
        description: 'Ashoka erects pillars with Buddhist teachings and moral codes.'
      }
    ]
  }
]

const keyFigures = [
  {
    name: 'Siddhartha Gautama',
    role: 'The Buddha',
    period: '563-483 BCE',
    contributions: [
      'Four Noble Truths',
      'Eightfold Path',
      'Middle Way',
      'Dharma teachings'
    ]
  },
  {
    name: 'Ananda',
    role: 'Buddha\'s Attendant',
    period: '5th Century BCE',
    contributions: [
      'Personal attendant to Buddha',
      'Memorization of discourses',
      'First Council participation',
      'Transmission of teachings'
    ]
  },
  {
    name: 'Mahakasyapa',
    role: 'Senior Disciple',
    period: '5th Century BCE',
    contributions: [
      'First Council leadership',
      'Monastic discipline',
      'Transmission of teachings',
      'Sangha leadership'
    ]
  },
  {
    name: 'Ashoka',
    role: 'Mauryan Emperor',
    period: '268-232 BCE',
    contributions: [
      'Buddhist patronage',
      'Missionary support',
      'Pillar edicts',
      'Social welfare'
    ]
  },
  {
    name: 'Moggaliputta Tissa',
    role: 'Buddhist Scholar',
    period: '3rd Century BCE',
    contributions: [
      'Third Council leadership',
      'Kathavatthu compilation',
      'Doctrinal clarification',
      'Missionary activity'
    ]
  }
]

const majorTeachings = [
  {
    area: 'Core Doctrines',
    teachings: [
      'Four Noble Truths',
      'Eightfold Path',
      'Three Marks of Existence',
      'Dependent Origination'
    ]
  },
  {
    area: 'Monastic Life',
    teachings: [
      'Vinaya (monastic rules)',
      'Sangha organization',
      'Meditation practices',
      'Alms round'
    ]
  },
  {
    area: 'Lay Practice',
    teachings: [
      'Five Precepts',
      'Generosity (dana)',
      'Ethical conduct',
      'Support for Sangha'
    ]
  },
  {
    area: 'Philosophical Concepts',
    teachings: [
      'Anatta (no-self)',
      'Anicca (impermanence)',
      'Dukkha (suffering)',
      'Karma and rebirth'
    ]
  }
]

const earlySpread = [
  {
    region: 'Northern India',
    period: '5th-3rd Century BCE',
    developments: [
      'Magadha kingdom',
      'Kosala kingdom',
      'Vaisali republic',
      'Kushinagar'
    ]
  },
  {
    region: 'Central India',
    period: '3rd Century BCE',
    developments: [
      'Sanchi stupas',
      'Bharhut sculptures',
      'Ashoka pillars',
      'Monastic centers'
    ]
  },
  {
    region: 'Southern India',
    period: '3rd Century BCE',
    developments: [
      'Andhra region',
      'Tamil kingdoms',
      'Monastic networks',
      'Trade routes'
    ]
  }
]

export default function EarlyBuddhismHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Early Buddhism History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the early period of Buddhism: life of Siddhartha Gautama, first Buddhist council, 
          early Sangha, and the initial spread of Buddhism throughout ancient India.
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

      {/* Major Teachings */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Major Teachings</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {majorTeachings.map((area) => (
            <Card key={area.area}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  {area.area}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {area.teachings.map((teaching) => (
                    <li key={teaching} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {teaching}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Early Spread */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Early Spread of Buddhism</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {earlySpread.map((region) => (
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
                  {region.developments.map((development) => (
                    <li key={development} className="flex items-center gap-2 text-sm">
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

      {/* Study Resources */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Study Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Primary Sources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Essential early Buddhist texts:</p>
              <ul className="text-sm space-y-1">
                <li>• Pali Canon</li>
                <li>• Vinaya Pitaka</li>
                <li>• Sutta Pitaka</li>
                <li>• Abhidhamma Pitaka</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historical Context</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Understanding early Buddhist world:</p>
              <ul className="text-sm space-y-1">
                <li>• Ancient India</li>
                <li>• Vedic traditions</li>
                <li>• Mauryan Empire</li>
                <li>• Trade routes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Archaeological Evidence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Material evidence of early Buddhism:</p>
              <ul className="text-sm space-y-1">
                <li>• Ashoka pillars</li>
                <li>• Stupas and monuments</li>
                <li>• Rock edicts</li>
                <li>• Monastic ruins</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Continue Your Study</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          The early period of Buddhism established the foundation for one of the world\'s major religions. 
          Understanding this formative era is essential for comprehending Buddhist philosophy and practice.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="/religion/buddhism/history/medieval" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Medieval Buddhism History
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