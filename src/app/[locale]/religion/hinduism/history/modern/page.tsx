import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Users, Book, MapPin, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Modern Hinduism History - Colonial Period to Present',
  description: 'Explore the modern period of Hinduism: British colonial rule, independence movement, reform movements, and contemporary Hindu practices.',
  keywords: 'modern hinduism history, british colonial period, hindu reform movements, independence movement, contemporary hinduism',
  openGraph: {
    title: 'Modern Hinduism History - Colonial Period to Present',
    description: 'Explore the modern period of Hinduism: British colonial rule, independence movement, reform movements, and contemporary Hindu practices.',
    type: 'website',
  },
}

const timeline = [
  {
    period: 'British Colonial Period (1757-1947 CE)',
    description: 'Period of British rule and its impact on Hindu society and religion.',
    events: [
      {
        year: '1757 CE',
        event: 'Battle of Plassey',
        description: 'Beginning of British political control in India.'
      },
      {
        year: '1813 CE',
        event: 'Christian Missionary Activity',
        description: 'British allow Christian missionaries in India.'
      },
      {
        year: '1828 CE',
        event: 'Brahmo Samaj Founded',
        description: 'Raja Ram Mohan Roy establishes Hindu reform movement.'
      },
      {
        year: '1875 CE',
        event: 'Arya Samaj Founded',
        description: 'Swami Dayananda Saraswati establishes reform movement.'
      },
      {
        year: '1893 CE',
        event: 'World Parliament of Religions',
        description: 'Swami Vivekananda introduces Hinduism to the West.'
      }
    ]
  },
  {
    period: 'Independence Movement (1885-1947 CE)',
    description: 'Period of nationalist struggle and Hindu participation in freedom movement.',
    events: [
      {
        year: '1885 CE',
        event: 'Indian National Congress',
        description: 'Formation of major nationalist organization.'
      },
      {
        year: '1905 CE',
        event: 'Partition of Bengal',
        description: 'British divide Bengal, sparking nationalist protests.'
      },
      {
        year: '1915-1948 CE',
        event: 'Mahatma Gandhi',
        description: 'Gandhi leads non-violent independence movement.'
      },
      {
        year: '1947 CE',
        event: 'Indian Independence',
        description: 'India gains independence, partition creates Pakistan.'
      }
    ]
  },
  {
    period: 'Post-Independence Period (1947-2000 CE)',
    description: 'Period of nation-building and Hindu cultural revival.',
    events: [
      {
        year: '1947-1964 CE',
        event: 'Nehru Era',
        description: 'Secular democracy and modernization policies.'
      },
      {
        year: '1966-1984 CE',
        event: 'Indira Gandhi',
        description: 'Socialist policies and emergency period.'
      },
      {
        year: '1980s-1990s CE',
        event: 'Hindu Nationalism Rise',
        description: 'Growth of Hindu nationalist political parties.'
      },
      {
        year: '1991 CE',
        event: 'Economic Liberalization',
        description: 'India opens economy to global markets.'
      }
    ]
  },
  {
    period: 'Contemporary Period (2000-Present)',
    description: 'Hinduism in the 21st century, facing new challenges and opportunities.',
    events: [
      {
        year: '2000s CE',
        event: 'Global Hinduism',
        description: 'Hindu diaspora and international influence grows.'
      },
      {
        year: '2014 CE',
        event: 'Modi Government',
        description: 'Hindu nationalist BJP comes to power.'
      },
      {
        year: '2020s CE',
        event: 'Digital Hinduism',
        description: 'Technology and social media transform religious practice.'
      }
    ]
  }
]

const keyFigures = [
  {
    name: 'Raja Ram Mohan Roy',
    role: 'Hindu Reformer',
    period: '1772-1833 CE',
    contributions: [
      'Brahmo Samaj founder',
      'Social reform',
      'Women\'s rights',
      'Modern education'
    ]
  },
  {
    name: 'Swami Dayananda Saraswati',
    role: 'Arya Samaj Founder',
    period: '1824-1883 CE',
    contributions: [
      'Arya Samaj movement',
      'Vedic revival',
      'Social reform',
      'Anti-caste movement'
    ]
  },
  {
    name: 'Swami Vivekananda',
    role: 'Spiritual Leader',
    period: '1863-1902 CE',
    contributions: [
      'Vedanta philosophy',
      'International Hinduism',
      'Social service',
      'Youth empowerment'
    ]
  },
  {
    name: 'Mahatma Gandhi',
    role: 'Political Leader',
    period: '1869-1948 CE',
    contributions: [
      'Non-violent resistance',
      'Hindu-Muslim unity',
      'Social reform',
      'Independence movement'
    ]
  },
  {
    name: 'Sri Aurobindo',
    role: 'Philosopher and Yogi',
    period: '1872-1950 CE',
    contributions: [
      'Integral yoga',
      'Evolutionary philosophy',
      'Spiritual nationalism',
      'Literary works'
    ]
  },
  {
    name: 'Swami Chinmayananda',
    role: 'Modern Teacher',
    period: '1916-1993 CE',
    contributions: [
      'Vedanta teaching',
      'Global mission',
      'Educational institutions',
      'Spiritual organization'
    ]
  }
]

const reformMovements = [
  {
    movement: 'Brahmo Samaj',
    description: 'Reform movement emphasizing monotheism and social reform.',
    features: [
      'Monotheistic worship',
      'Social reform',
      'Women\'s education',
      'Modern education'
    ]
  },
  {
    movement: 'Arya Samaj',
    description: 'Movement for Vedic revival and social reform.',
    features: [
      'Vedic authority',
      'Anti-caste movement',
      'Social reform',
      'Educational institutions'
    ]
  },
  {
    movement: 'Ramakrishna Mission',
    description: 'Service-oriented organization based on Vedanta philosophy.',
    features: [
      'Social service',
      'Vedanta teaching',
      'Educational work',
      'Healthcare services'
    ]
  }
]

const contemporaryIssues = [
  {
    issue: 'Hindu Nationalism',
    description: 'Political movement emphasizing Hindu identity and culture.',
    aspects: [
      'Cultural revival',
      'Political participation',
      'Social reform',
      'National identity'
    ]
  },
  {
    issue: 'Global Hinduism',
    description: 'Hinduism\'s spread and adaptation worldwide.',
    aspects: [
      'Diaspora communities',
      'International temples',
      'Cultural exchange',
      'Modern adaptations'
    ]
  },
  {
    issue: 'Social Reform',
    description: 'Addressing caste discrimination and social inequality.',
    aspects: [
      'Caste reform',
      'Women\'s rights',
      'Education access',
      'Social justice'
    ]
  }
]

export default function ModernHinduismHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Modern Hinduism History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the modern period of Hinduism: British colonial rule, independence movement, 
          reform movements, and contemporary Hindu practices in a changing world.
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

      {/* Reform Movements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Reform Movements</h2>
        <div className="space-y-6">
          {reformMovements.map((movement) => (
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

      {/* Contemporary Issues */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Contemporary Issues</h2>
        <div className="space-y-6">
          {contemporaryIssues.map((issue) => (
            <Card key={issue.issue}>
              <CardHeader>
                <CardTitle>{issue.issue}</CardTitle>
                <CardDescription>{issue.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm mb-2">Key Aspects:</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {issue.aspects.map((aspect) => (
                    <div key={aspect} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span className="text-sm">{aspect}</span>
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
              <p className="text-sm">Essential modern Hindu texts:</p>
              <ul className="text-sm space-y-1">
                <li>• Reformist writings</li>
                <li>• Political manifestos</li>
                <li>• Autobiographies</li>
                <li>• Contemporary literature</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historical Context</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Understanding modern India:</p>
              <ul className="text-sm space-y-1">
                <li>• British colonialism</li>
                <li>• Independence movement</li>
                <li>• Nation-building</li>
                <li>• Globalization</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contemporary Issues</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Current challenges and debates:</p>
              <ul className="text-sm space-y-1">
                <li>• Religious reform</li>
                <li>• Social justice</li>
                <li>• Political participation</li>
                <li>• Cultural preservation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Continue Your Study</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          The modern period of Hinduism shows the dynamic nature of the tradition as it adapts 
          to changing social, political, and cultural circumstances. Understanding this era is 
          crucial for comprehending contemporary Hindu practices and beliefs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="/studies/history" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              More Historical Studies
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="/religion/hinduism/overview" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Hinduism Overview
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
} 