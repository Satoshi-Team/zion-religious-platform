import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Users, Book, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Reformation Church History - Protestant and Catholic Reforms',
  description: 'Explore the Reformation period: Protestant Reformation, Catholic Counter-Reformation, key figures, theological changes, and the impact on Christianity and Europe.',
  keywords: 'reformation, protestant reformation, martin luther, catholic reformation, church history, council of trent, religious reform',
  openGraph: {
    title: 'Reformation Church History - Protestant and Catholic Reforms',
    description: 'Explore the Reformation period: Protestant Reformation, Catholic Counter-Reformation, key figures, theological changes, and the impact on Christianity and Europe.',
    type: 'website',
  },
}

const timeline = [
  { year: '1517', event: 'Martin Luther posts 95 Theses', description: 'Luther challenges church practices, sparking the Protestant Reformation.' },
  { year: '1521', event: 'Diet of Worms', description: 'Luther refuses to recant, is excommunicated.' },
  { year: '1525', event: 'Peasants’ War', description: 'Social upheaval influenced by Reformation ideas.' },
  { year: '1534', event: 'Church of England established', description: 'Henry VIII breaks from Rome, founding Anglicanism.' },
  { year: '1545-1563', event: 'Council of Trent', description: 'Catholic Counter-Reformation, doctrinal clarification, reforms.' },
  { year: '1555', event: 'Peace of Augsburg', description: 'Legalizes Lutheranism in the Holy Roman Empire.' },
  { year: '1562-1598', event: 'French Wars of Religion', description: 'Conflict between Catholics and Huguenots.' },
  { year: '1618-1648', event: 'Thirty Years’ War', description: 'Major European conflict with religious and political dimensions.' },
]

const keyFigures = [
  { name: 'Martin Luther', role: 'Reformer', contributions: ['95 Theses', 'German Bible translation', 'Justification by faith'] },
  { name: 'John Calvin', role: 'Reformer', contributions: ['Institutes of the Christian Religion', 'Predestination doctrine', 'Geneva reforms'] },
  { name: 'Henry VIII', role: 'Monarch', contributions: ['Founded Church of England', 'Act of Supremacy'] },
  { name: 'Ignatius of Loyola', role: 'Catholic Reformer', contributions: ['Founded Jesuits', 'Spiritual Exercises'] },
  { name: 'Teresa of Ávila', role: 'Catholic Mystic', contributions: ['Carmelite reform', 'Spiritual writings'] },
  { name: 'Charles V', role: 'Emperor', contributions: ['Opposed Protestantism', 'Summoned Diet of Worms'] },
]

const theologicalChanges = [
  { area: 'Scripture', changes: ['Sola Scriptura (Scripture alone)', 'Vernacular translations', 'Biblical authority'] },
  { area: 'Salvation', changes: ['Justification by faith', 'Predestination', 'Rejection of indulgences'] },
  { area: 'Church Structure', changes: ['Priesthood of all believers', 'National churches', 'Reduced papal authority'] },
  { area: 'Sacraments', changes: ['Reduced number of sacraments', 'Symbolic Eucharist (some traditions)', 'Rejection of transubstantiation (some traditions)'] },
]

const impact = [
  { area: 'Religious', effects: ['Permanent split in Western Christianity', 'Rise of Protestant denominations', 'Catholic reforms'] },
  { area: 'Political', effects: ['Rise of nation-states', 'Decline of papal power', 'Religious wars'] },
  { area: 'Social', effects: ['Increased literacy', 'Printing press spread', 'Individual conscience'] },
  { area: 'Cultural', effects: ['Sacred music and art', 'Education reforms', 'New religious literature'] },
]

export default function ReformationHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Reformation Church History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the Protestant Reformation, Catholic Counter-Reformation, and the profound changes that reshaped Christianity and Europe in the 16th and 17th centuries.
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
        <h2 className="text-3xl font-bold mb-8 text-center">Theological Changes</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {theologicalChanges.map((area) => (
            <Card key={area.area}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  {area.area}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {area.changes.map((change) => (
                    <li key={change} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {change}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Impact of the Reformation</h2>
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
          The Reformation transformed Christianity and European society. Explore the modern and contemporary periods to see how these changes continue to shape the world.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="/religion/christianity/history/modern" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Modern Church History
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