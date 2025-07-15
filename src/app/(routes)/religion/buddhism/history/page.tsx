import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Buddhist History: Development and Spread of Buddhism',
  description: 'Explore the historical development of Buddhism from its origins in ancient India to its global spread, including major periods, schools, and cultural influences.'
}

function BuddhistHistoryPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Buddhist History: Development and Spread of Buddhism</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Buddhism has a rich and complex history spanning over 2,500 years, from its origins in ancient India 
        to its current global presence. The historical development of Buddhism encompasses the life of the 
        Buddha, the formation of different schools, cultural adaptations, and the spread across Asia and 
        beyond. This page explores the major periods, key figures, and historical developments in Buddhist history.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Major Periods</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Early Buddhism:</strong> Life of Buddha and early communities</li>
              <li><strong>Classical Period:</strong> Development of major schools</li>
              <li><strong>Medieval Era:</strong> Spread across Asia</li>
              <li><strong>Modern Period:</strong> Global expansion and adaptation</li>
              <li><strong>Contemporary:</strong> Current developments and challenges</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Major Schools</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Theravada:</strong> "Way of the Elders"</li>
              <li><strong>Mahayana:</strong> "Great Vehicle"</li>
              <li><strong>Vajrayana:</strong> "Diamond Vehicle"</li>
              <li><strong>Zen:</strong> Japanese meditation tradition</li>
              <li><strong>Pure Land:</strong> Devotional Buddhism</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Geographic Spread</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>India:</strong> Birthplace and early development</li>
              <li><strong>Sri Lanka:</strong> Theravada stronghold</li>
              <li><strong>China:</strong> Mahayana adaptation</li>
              <li><strong>Japan:</strong> Zen and Pure Land</li>
              <li><strong>Tibet:</strong> Vajrayana tradition</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Historical Periods</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Early Buddhism</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                The life of Siddhartha Gautama, his enlightenment, early teachings, 
                and the formation of the first Buddhist communities.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/buddhism/history/early-buddhism">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medieval Period</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Development of different schools, spread across Asia, cultural adaptations, 
                and the establishment of major Buddhist centers and institutions.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/buddhism/history/medieval">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modern Era</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Colonial period, Buddhist revival movements, modernization, and the 
                beginning of Buddhism's spread to the West.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/buddhism/history/modern">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contemporary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Global spread of Buddhism, integration with modern psychology and science, 
                and contemporary challenges and developments.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/buddhism/history">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Key Historical Developments</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Formation of Schools</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>First Council:</strong> Compilation of teachings</li>
                <li><strong>Second Council:</strong> Early schisms</li>
                <li><strong>Mahayana Emergence:</strong> New perspectives</li>
                <li><strong>Vajrayana Development:</strong> Esoteric practices</li>
                <li><strong>Regional Adaptations:</strong> Cultural integration</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cultural Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Art & Architecture:</strong> Temple building and art</li>
                <li><strong>Literature:</strong> Scriptural development</li>
                <li><strong>Philosophy:</strong> Intellectual traditions</li>
                <li><strong>Social Institutions:</strong> Monastic communities</li>
                <li><strong>Political Influence:</strong> Royal patronage</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modern Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Colonialism:</strong> Impact on Buddhist societies</li>
                <li><strong>Modernization:</strong> Adaptation to change</li>
                <li><strong>Globalization:</strong> Cross-cultural exchange</li>
                <li><strong>Social Issues:</strong> Contemporary relevance</li>
                <li><strong>Preservation:</strong> Maintaining traditions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Related Topics</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Buddhist Teachings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Core Buddhist teachings, including the Four Noble Truths, Eightfold Path, 
                and other fundamental concepts that have guided Buddhist practice.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/buddhism/studies">Explore Teachings</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cultural Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Buddhism's influence on art, architecture, literature, music, and other 
                cultural expressions across Asia and the world.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/buddhism/impact">Explore Impact</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contemporary Buddhism</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Modern Buddhist movements, global spread, integration with contemporary 
                society, and current challenges and opportunities.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/buddhism/practices">Explore Practices</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">References & Further Reading</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><a href="https://www.britannica.com/topic/Buddhism" target="_blank" rel="noopener noreferrer" className="underline">Britannica: Buddhism</a></li>
          <li><a href="https://www.bbc.co.uk/religion/religions/buddhism/" target="_blank" rel="noopener noreferrer" className="underline">BBC Religion: Buddhism</a></li>
          <li><a href="https://www.buddhanet.net/" target="_blank" rel="noopener noreferrer" className="underline">BuddhaNet</a></li>
          <li><a href="https://tricycle.org/" target="_blank" rel="noopener noreferrer" className="underline">Tricycle: The Buddhist Review</a></li>
          <li><a href="https://www.lionsroar.com/" target="_blank" rel="noopener noreferrer" className="underline">Lion's Roar</a></li>
        </ul>
      </section>
    </div>
  )
}

export default BuddhistHistoryPage 