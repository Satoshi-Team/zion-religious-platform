import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Users, Book, MapPin, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Modern Buddhism History - Colonial Period to Global Buddhism',
  description: 'Explore the modern period of Buddhism: colonial impact, Buddhist revival movements, and contemporary global Buddhism.',
  keywords: 'modern buddhism history, buddhist revival, global buddhism, colonial period, contemporary buddhism, western buddhism',
  openGraph: {
    title: 'Modern Buddhism History - Colonial Period to Global Buddhism',
    description: 'Explore the modern period of Buddhism: colonial impact, Buddhist revival movements, and contemporary global Buddhism.',
    type: 'website',
  },
}

const timeline = [
  {
    period: 'Colonial Period (18th-20th Century CE)',
    description: 'Impact of European colonialism on Buddhist societies.',
    events: [
      {
        year: '18th Century CE',
        event: 'British Colonialism',
        description: 'British rule in India and Sri Lanka affects Buddhist institutions.'
      },
      {
        year: '19th Century CE',
        event: 'Buddhist Revival',
        description: 'Anagarika Dharmapala leads Buddhist revival in Sri Lanka.'
      },
      {
        year: '19th Century CE',
        event: 'Western Interest',
        description: 'European scholars begin studying Buddhist texts and philosophy.'
      },
      {
        year: '1893 CE',
        event: 'World Parliament of Religions',
        description: 'Buddhist representatives introduce Buddhism to the West.'
      }
    ]
  },
  {
    period: 'Buddhist Modernism (19th-20th Century CE)',
    description: 'Adaptation of Buddhism to modern conditions and challenges.',
    events: [
      {
        year: '19th Century CE',
        event: 'Theravada Revival',
        description: 'Reform movements in Sri Lanka, Burma, and Thailand.'
      },
      {
        year: '20th Century CE',
        event: 'Engaged Buddhism',
        description: 'Thich Nhat Hanh and others develop socially engaged Buddhism.'
      },
      {
        year: '20th Century CE',
        event: 'Buddhist Modernism',
        description: 'Adaptation of traditional practices to modern life.'
      }
    ]
  },
  {
    period: 'Global Spread (20th-21st Century CE)',
    description: 'Buddhism spreads to the West and becomes a global religion.',
    events: [
      {
        year: '1950s-1960s CE',
        event: 'Zen in America',
        description: 'D.T. Suzuki and others introduce Zen Buddhism to the West.'
      },
      {
        year: '1970s CE',
        event: 'Tibetan Buddhism',
        description: 'Dalai Lama and Tibetan teachers establish centers worldwide.'
      },
      {
        year: '1980s-1990s CE',
        event: 'Mindfulness Movement',
        description: 'Buddhist meditation practices enter mainstream culture.'
      },
      {
        year: '2000s CE',
        event: 'Digital Buddhism',
        description: 'Technology and social media transform Buddhist practice.'
      }
    ]
  }
]

const keyFigures = [
  {
    name: 'Anagarika Dharmapala',
    role: 'Buddhist Revivalist',
    period: '1864-1933 CE',
    contributions: [
      'Sri Lankan revival',
      'International Buddhism',
      'Buddhist education',
      'Social reform'
    ]
  },
  {
    name: 'D.T. Suzuki',
    role: 'Zen Scholar',
    period: '1870-1966 CE',
    contributions: [
      'Zen introduction to West',
      'Buddhist scholarship',
      'Cultural exchange',
      'Philosophical writings'
    ]
  },
  {
    name: 'Thich Nhat Hanh',
    role: 'Engaged Buddhist',
    period: '1926-2022 CE',
    contributions: [
      'Engaged Buddhism',
      'Mindfulness teaching',
      'Peace activism',
      'Global community'
    ]
  },
  {
    name: 'Dalai Lama',
    role: 'Tibetan Leader',
    period: '1935-Present',
    contributions: [
      'Tibetan Buddhism',
      'Interfaith dialogue',
      'Human rights',
      'Global peace'
    ]
  },
  {
    name: 'Pema Chodron',
    role: 'Western Teacher',
    period: '1936-Present',
    contributions: [
      'Western Buddhism',
      'Meditation teaching',
      'Women\'s leadership',
      'Contemporary practice'
    ]
  }
]

const modernMovements = [
  {
    movement: 'Engaged Buddhism',
    description: 'Application of Buddhist principles to social and political issues.',
    features: [
      'Social justice',
      'Environmental activism',
      'Peace work',
      'Community service'
    ]
  },
  {
    movement: 'Secular Buddhism',
    description: 'Buddhist practice without religious or supernatural elements.',
    features: [
      'Mindfulness focus',
      'Psychological approach',
      'Modern adaptation',
      'Scientific basis'
    ]
  },
  {
    movement: 'Western Buddhism',
    description: 'Adaptation of Buddhist practices to Western cultural contexts.',
    features: [
      'Cultural integration',
      'Lay practice emphasis',
      'Gender equality',
      'Democratic organization'
    ]
  }
]

const contemporaryIssues = [
  {
    issue: 'Technology and Practice',
    description: 'Impact of digital technology on Buddhist practice and community.',
    aspects: [
      'Online meditation',
      'Virtual sanghas',
      'Digital dharma',
      'Social media'
    ]
  },
  {
    issue: 'Cultural Adaptation',
    description: 'Balancing traditional practices with modern cultural contexts.',
    aspects: [
      'Cultural integration',
      'Traditional preservation',
      'Modern relevance',
      'Global diversity'
    ]
  },
  {
    issue: 'Social Engagement',
    description: 'Buddhism\'s role in addressing contemporary social issues.',
    aspects: [
      'Climate change',
      'Social inequality',
      'Mental health',
      'Interfaith dialogue'
    ]
  }
]

export default function ModernBuddhismHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Modern Buddhism History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the modern period of Buddhism: colonial impact, Buddhist revival movements, 
          and contemporary global Buddhism adapting to the modern world.
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

      {/* Modern Movements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Modern Movements</h2>
        <div className="space-y-6">
          {modernMovements.map((movement) => (
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
              <p className="text-sm">Essential modern Buddhist texts:</p>
              <ul className="text-sm space-y-1">
                <li>• Modern commentaries</li>
                <li>• Contemporary writings</li>
                <li>• Academic studies</li>
                <li>• Digital resources</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historical Context</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Understanding modern Buddhism:</p>
              <ul className="text-sm space-y-1">
                <li>• Colonialism</li>
                <li>• Globalization</li>
                <li>• Technology</li>
                <li>• Cultural exchange</li>
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
                <li>• Cultural adaptation</li>
                <li>• Social engagement</li>
                <li>• Technology integration</li>
                <li>• Global community</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Continue Your Study</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          The modern period of Buddhism shows the tradition\'s remarkable ability to adapt 
          and thrive in changing circumstances. Understanding this era is crucial for 
          comprehending contemporary Buddhist practice and its global impact.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="/studies/history" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              More Historical Studies
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="/religion/buddhism/overview" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Buddhism Overview
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
} 