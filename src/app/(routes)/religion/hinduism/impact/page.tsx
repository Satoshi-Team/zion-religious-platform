import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Hinduism\'s Cultural Impact: Philosophy, Yoga, Art, and Society',
  description: 'Explore Hinduism\'s profound influence on Indian and global culture, including its impact on yoga, philosophy, art, literature, science, and spiritual practices.'
}

function HinduismImpactPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Hinduism's Cultural Impact: Philosophy, Yoga, Art, and Society</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Hinduism, one of the world's oldest living religions, has profoundly influenced Indian civilization 
        and global culture for over 4,000 years. From philosophy and yoga to art and science, Hindu 
        traditions have shaped human understanding, cultural expression, and spiritual practices. This page 
        explores Hinduism's multifaceted impact on yoga, meditation, art, literature, philosophy, and society.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Spiritual Practices</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Yoga:</strong> Physical, mental, and spiritual disciplines</li>
              <li><strong>Meditation:</strong> Contemplative and mindfulness practices</li>
              <li><strong>Ayurveda:</strong> Traditional medicine and wellness</li>
              <li><strong>Dharma:</strong> Ethical living and duty</li>
              <li><strong>Karma:</strong> Action and its consequences</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cultural Influence</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Art:</strong> Temple architecture, sculpture, painting</li>
              <li><strong>Music:</strong> Classical ragas and devotional songs</li>
              <li><strong>Dance:</strong> Classical dance forms and expression</li>
              <li><strong>Literature:</strong> Sacred texts, poetry, epics</li>
              <li><strong>Festivals:</strong> Religious and cultural celebrations</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Philosophical Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Vedanta:</strong> Non-dualistic philosophy</li>
              <li><strong>Sankhya:</strong> Dualistic cosmology</li>
              <li><strong>Yoga Philosophy:</strong> Mind-body integration</li>
              <li><strong>Bhakti:</strong> Devotional traditions</li>
              <li><strong>Advaita:</strong> Unity consciousness</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Areas of Impact</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Yoga & Wellness</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Hindu contributions to yoga, meditation, Ayurveda, and wellness practices 
                that have become global phenomena and influenced modern health and fitness.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/hinduism/impact/yoga">Explore Yoga</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Art & Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Hindu temple architecture, sacred art, sculpture, and the influence 
                of Hindu aesthetics on Indian and global art and design.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/hinduism/impact/art">Explore Art</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Literature & Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Hindu scriptures, philosophical texts, epics, and the influence of Hindu 
                thought on literature, poetry, and intellectual traditions.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/hinduism/impact/literature">Explore Literature</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Music & Dance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Hindu contributions to classical music, dance forms, devotional songs, 
                and the influence on performing arts and cultural expression.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/hinduism/impact/music-dance">Explore Music & Dance</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Philosophy & Ethics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Hindu philosophical traditions, ethical frameworks, and contributions 
                to moral philosophy, metaphysics, and social thought.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/hinduism/impact/philosophy">Explore Philosophy</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Science & Mathematics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Hindu contributions to mathematics, astronomy, medicine, and scientific 
                thought that have influenced global knowledge and discovery.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/hinduism/impact/science">Explore Science</Link>
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
              <CardTitle>Vedic Period</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Foundation of Hindu traditions, Vedic literature, early philosophical 
                systems, and the development of ritual and spiritual practices.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/hinduism/history/early-hinduism">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Classical Period</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Development of major philosophical schools, classical literature, 
                temple building, and the flourishing of Hindu arts and sciences.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/hinduism/history/medieval">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medieval Period</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Bhakti movements, devotional traditions, regional developments, 
                and the integration of Hindu culture across South Asia.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/hinduism/history/medieval">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modern Era</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Global spread of Hindu practices, modern interpretations, integration 
                with contemporary science, and influence on global spirituality.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/hinduism/history/modern">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">References & Further Reading</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><a href="https://www.britannica.com/topic/Hinduism" target="_blank" rel="noopener noreferrer" className="underline">Britannica: Hinduism</a></li>
          <li><a href="https://www.bbc.co.uk/religion/religions/hinduism/" target="_blank" rel="noopener noreferrer" className="underline">BBC Religion: Hinduism</a></li>
          <li><a href="https://www.hinduwebsite.com/" target="_blank" rel="noopener noreferrer" className="underline">Hindu Website</a></li>
          <li><a href="https://www.hinduismtoday.com/" target="_blank" rel="noopener noreferrer" className="underline">Hinduism Today</a></li>
          <li><a href="https://www.yogajournal.com/" target="_blank" rel="noopener noreferrer" className="underline">Yoga Journal</a></li>
        </ul>
      </section>
    </div>
  )
}

export default HinduismImpactPage 