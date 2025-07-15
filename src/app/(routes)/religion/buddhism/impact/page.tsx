import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Buddhism\'s Cultural Impact: Philosophy, Art, Science, and Society',
  description: 'Explore Buddhism\'s profound influence on Asian and global culture, including its impact on philosophy, art, meditation, psychology, and social values.'
}

function BuddhismImpactPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Buddhism's Cultural Impact: Philosophy, Art, Science, and Society</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Buddhism has profoundly influenced cultures across Asia and increasingly around the world for over 
        2,500 years. From philosophy and psychology to art and architecture, Buddhist teachings have shaped 
        human understanding, cultural expression, and social values. This page explores Buddhism's 
        multifaceted impact on meditation, mindfulness, art, literature, science, and contemporary society.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Spiritual & Psychological</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Meditation:</strong> Mindfulness and concentration practices</li>
              <li><strong>Psychology:</strong> Understanding of mind and consciousness</li>
              <li><strong>Ethics:</strong> Compassion and non-violence</li>
              <li><strong>Philosophy:</strong> Wisdom and insight traditions</li>
              <li><strong>Wellness:</strong> Mental health and stress reduction</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cultural Influence</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Art:</strong> Painting, sculpture, mandalas</li>
              <li><strong>Architecture:</strong> Temples, stupas, monasteries</li>
              <li><strong>Literature:</strong> Sutras, poetry, stories</li>
              <li><strong>Music:</strong> Chanting and ritual music</li>
              <li><strong>Festivals:</strong> Religious and cultural celebrations</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Social Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Education:</strong> Monastic schools and learning</li>
              <li><strong>Healthcare:</strong> Traditional medicine and healing</li>
              <li><strong>Peace:</strong> Conflict resolution and non-violence</li>
              <li><strong>Environment:</strong> Ecological awareness and protection</li>
              <li><strong>Community:</strong> Sangha and social harmony</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Areas of Impact</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Meditation & Mindfulness</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Buddhist meditation techniques, mindfulness practices, and their modern applications 
                in psychology, healthcare, and personal development.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/buddhism/impact/meditation">Explore Meditation</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Art & Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Buddhist artistic traditions, temple architecture, sacred art, and the influence 
                of Buddhist aesthetics on global art and design.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/buddhism/impact/art">Explore Art</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Literature & Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Buddhist scriptures, philosophical texts, poetry, and the influence of Buddhist 
                thought on literature and intellectual traditions.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/buddhism/impact/literature">Explore Literature</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Psychology & Science</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Buddhist contributions to understanding consciousness, psychology, neuroscience, 
                and the integration of meditation with modern science.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/buddhism/impact/science">Explore Science</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Philosophy & Ethics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Buddhist philosophical traditions, ethical frameworks, and contributions 
                to moral philosophy and social thought.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/buddhism/impact/philosophy">Explore Philosophy</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Buddhist influence on social values, community organization, education, 
                and contemporary social movements and activism.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/buddhism/history">Explore History</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Historical Periods of Impact</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Early Buddhism</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Foundation of Buddhist teachings, early monastic communities, and the spread 
                of Buddhism across India and neighboring regions.
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
                Expansion across Asia, development of different schools, cultural integration, 
                and establishment of major Buddhist centers and institutions.
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
                Global spread of Buddhism, integration with modern psychology and science, 
                and contemporary applications of Buddhist teachings and practices.
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
                Current Buddhist influence on mindfulness, wellness, social justice, 
                environmentalism, and interfaith dialogue in the modern world.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/buddhism/history">Learn More</Link>
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

export default BuddhismImpactPage 