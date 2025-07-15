import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Users, Book, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contemporary Church History - Christianity in the 21st Century',
  description: 'Explore contemporary Christianity: global trends, digital faith, ecumenism, social justice, and the church’s role in today’s world.',
  keywords: 'contemporary church history, 21st century Christianity, digital faith, global church, social justice, ecumenism, current issues',
  openGraph: {
    title: 'Contemporary Church History - Christianity in the 21st Century',
    description: 'Explore contemporary Christianity: global trends, digital faith, ecumenism, social justice, and the church’s role in today’s world.',
    type: 'website',
  },
}

const timeline = [
  { year: '2000s', event: 'Rise of Digital Faith', description: 'Online worship, digital evangelism, and faith communities on the internet.' },
  { year: '2001', event: 'Global South Majority', description: 'Majority of Christians now live in Africa, Asia, and Latin America.' },
  { year: '2013', event: 'Pope Francis Elected', description: 'First Latin American pope, focus on humility, social justice, and interfaith dialogue.' },
  { year: '2010s', event: 'Growth of Pentecostalism', description: 'Rapid expansion of charismatic and Pentecostal movements worldwide.' },
  { year: '2020', event: 'COVID-19 Pandemic', description: 'Churches adapt to lockdowns with online services and community support.' },
  { year: '2020s', event: 'Social Justice Movements', description: 'Christian activism in racial justice, climate change, and humanitarian aid.' },
]

const keyTrends = [
  { area: 'Digital Faith', points: ['Online worship', 'Streaming services', 'Faith apps', 'Virtual communities'] },
  { area: 'Global Christianity', points: ['Growth in Global South', 'Indigenous leadership', 'Mission partnerships'] },
  { area: 'Ecumenism', points: ['Interdenominational cooperation', 'Interfaith dialogue', 'Joint humanitarian work'] },
  { area: 'Social Justice', points: ['Racial justice', 'Climate action', 'Poverty relief', 'Refugee support'] },
  { area: 'Religious Freedom', points: ['Persecution in some regions', 'Legal advocacy', 'International support'] },
]

const impact = [
  { area: 'Religious', effects: ['Diverse worship styles', 'New denominations', 'Lay leadership'] },
  { area: 'Political', effects: ['Christian advocacy', 'Human rights', 'Peacebuilding'] },
  { area: 'Cultural', effects: ['Christian media', 'Art and music', 'Education and healthcare'] },
]

export default function ContemporaryChurchHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contemporary Church History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore Christianity in the 21st century: global trends, digital faith, ecumenism, social justice, and the church’s evolving role in today’s world.
        </p>
      </div>
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Timeline</h2>
        <div className="space-y-4">
          {timeline.map((item) => (
            <Card key={item.year} className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Badge variant="outline" className="shrink-0">
                    <Calendar className="h-3 w-3 mr-1" />
                    {item.year}
                  </Badge>
                  <div>
                    <h4 className="font-semibold">{item.event}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Trends</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {keyTrends.map((area) => (
            <Card key={area.area}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  {area.area}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {area.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Impact of the Contemporary Era</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {impact.map((area) => (
            <Card key={area.area}>
              <CardHeader>
                <CardTitle>{area.area}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {area.effects.map((effect) => (
                    <li key={effect} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {effect}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="text-center bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Continue Your Study</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          The story of Christianity continues to unfold. Explore other traditions and historical periods to gain a deeper understanding of faith in the modern world.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
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