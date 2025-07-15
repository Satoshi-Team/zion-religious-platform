import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Users, Book, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Modern Church History - Enlightenment to Present',
  description: 'Explore the modern period of Christianity: Enlightenment, denominationalism, global missions, social change, and the church in the modern world.',
  keywords: 'modern church history, enlightenment, denominationalism, global missions, social gospel, ecumenism, Christianity today',
  openGraph: {
    title: 'Modern Church History - Enlightenment to Present',
    description: 'Explore the modern period of Christianity: Enlightenment, denominationalism, global missions, social change, and the church in the modern world.',
    type: 'website',
  },
}

const timeline = [
  { year: '1648', event: 'Peace of Westphalia', description: 'Ends Thirty Years’ War, establishes religious pluralism in Europe.' },
  { year: '18th c.', event: 'Enlightenment', description: 'Rise of reason, science, and challenges to traditional authority.' },
  { year: '1730s-40s', event: 'Great Awakening', description: 'Evangelical revival movements in America and Britain.' },
  { year: '1792', event: 'Modern Missions Movement', description: 'William Carey launches Protestant missions to India.' },
  { year: '1800s', event: 'Rise of Denominations', description: 'Growth of Methodists, Baptists, Pentecostals, and others.' },
  { year: '1910', event: 'Edinburgh Missionary Conference', description: 'Birth of modern ecumenical movement.' },
  { year: '1962-65', event: 'Second Vatican Council', description: 'Major Catholic reforms, engagement with modernity.' },
  { year: '1970s-present', event: 'Global South Christianity', description: 'Rapid growth of Christianity in Africa, Asia, Latin America.' },
]

const keyFigures = [
  { name: 'John Wesley', role: 'Methodist Founder', contributions: ['Evangelical revival', 'Methodist societies', 'Social reform'] },
  { name: 'William Carey', role: 'Missionary Pioneer', contributions: ['Father of modern missions', 'Bible translation', 'Education in India'] },
  { name: 'Karl Barth', role: 'Theologian', contributions: ['Neo-orthodoxy', 'Church Dogmatics', 'Opposition to Nazism'] },
  { name: 'Pope John XXIII', role: 'Catholic Reformer', contributions: ['Second Vatican Council', 'Ecumenism', 'Social teaching'] },
  { name: 'Desmond Tutu', role: 'Archbishop', contributions: ['Anti-apartheid activism', 'Truth and Reconciliation', 'Global Christian witness'] },
  { name: 'Billy Graham', role: 'Evangelist', contributions: ['Global crusades', 'Mass media ministry', 'Counsel to presidents'] },
]

const themes = [
  { area: 'Denominationalism', points: ['Proliferation of Protestant denominations', 'Ecumenical efforts', 'Doctrinal diversity'] },
  { area: 'Global Missions', points: ['Expansion to Africa, Asia, Americas', 'Translation of the Bible', 'Indigenous leadership'] },
  { area: 'Social Change', points: ['Abolition, civil rights, social gospel', 'Women’s ordination', 'Liberation theology'] },
  { area: 'Modern Catholicism', points: ['Vatican II reforms', 'Lay participation', 'Interfaith dialogue'] },
  { area: 'Secularization', points: ['Decline in Western church attendance', 'Rise of secular ideologies', 'Religious pluralism'] },
]

const impact = [
  { area: 'Religious', effects: ['Global Christianity', 'Rise of Pentecostalism', 'Interdenominational cooperation'] },
  { area: 'Political', effects: ['Church-state separation', 'Christian activism', 'Human rights advocacy'] },
  { area: 'Cultural', effects: ['Christian media', 'Music and arts', 'Education and healthcare'] },
]

export default function ModernChurchHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Modern Church History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the modern era of Christianity, from the Enlightenment and denominationalism to global missions, social change, and the church’s role in the contemporary world.
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
        <h2 className="text-3xl font-bold mb-8 text-center">Key Figures</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFigures.map((figure) => (
            <Card key={figure.name} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  {figure.name}
                </CardTitle>
                <CardDescription>{figure.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm mb-2">Contributions:</h4>
                <ul className="text-sm space-y-1">
                  {figure.contributions.map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {c}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Major Themes</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {themes.map((area) => (
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
        <h2 className="text-3xl font-bold mb-8 text-center">Impact of the Modern Era</h2>
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
          The modern era set the stage for contemporary Christianity. Explore the next period to see how the church continues to evolve in the 21st century.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="/religion/christianity/history/contemporary" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Contemporary Church History
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