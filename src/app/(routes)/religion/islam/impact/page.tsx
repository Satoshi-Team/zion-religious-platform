import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Islam\'s Cultural Impact: Science, Art, Philosophy, and Civilization',
  description: 'Explore Islam\'s profound influence on world civilization, including its contributions to science, mathematics, medicine, art, architecture, and philosophy during the Golden Age and beyond.'
}

function IslamImpactPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Islam's Cultural Impact: Science, Art, Philosophy, and Civilization</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Islam has made extraordinary contributions to world civilization, particularly during its Golden Age 
        (8th-14th centuries) and continuing through modern times. From groundbreaking scientific discoveries 
        to magnificent art and architecture, Islamic civilization has shaped human knowledge, culture, and 
        society across continents and centuries. This page explores Islam's multifaceted impact on science, 
        mathematics, medicine, art, literature, and philosophy.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Scientific Contributions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Mathematics:</strong> Algebra, algorithms, decimal system</li>
              <li><strong>Astronomy:</strong> Celestial observations and instruments</li>
              <li><strong>Medicine:</strong> Hospitals, pharmacology, surgery</li>
              <li><strong>Chemistry:</strong> Alchemy and chemical processes</li>
              <li><strong>Physics:</strong> Optics, mechanics, and engineering</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cultural Influence</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Architecture:</strong> Mosques, palaces, gardens</li>
              <li><strong>Calligraphy:</strong> Islamic art and writing</li>
              <li><strong>Literature:</strong> Poetry, philosophy, stories</li>
              <li><strong>Music:</strong> Classical and devotional traditions</li>
              <li><strong>Cuisine:</strong> Culinary arts and trade</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Philosophical Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Islamic Philosophy:</strong> Kalam, Sufism, rationalism</li>
              <li><strong>Ethics:</strong> Moral philosophy and values</li>
              <li><strong>Education:</strong> Madrasas and knowledge transmission</li>
              <li><strong>Law:</strong> Sharia and legal systems</li>
              <li><strong>Social Justice:</strong> Community and welfare</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Areas of Impact</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Science & Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Islamic contributions to mathematics, astronomy, medicine, chemistry, and engineering, 
                including the development of the scientific method and preservation of classical knowledge.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/islam/impact/science">Explore Science</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Art & Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Islamic artistic traditions, including calligraphy, geometric patterns, 
                architecture, and decorative arts that have influenced global aesthetics.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/islam/impact/art">Explore Art</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Literature & Language</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Rich literary traditions, poetry, philosophical texts, and the influence 
                of Arabic language and literature on world culture and knowledge.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/islam/impact/literature">Explore Literature</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Music & Culture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Islamic musical traditions, devotional music, and cultural expressions 
                that have enriched world music and cultural heritage.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/islam/impact/music">Explore Music</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Philosophy & Ethics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Islamic philosophical traditions, ethical frameworks, and contributions 
                to moral philosophy and social thought.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/islam/impact/philosophy">Explore Philosophy</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Institutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Islamic contributions to education, healthcare, social welfare, and 
                community organization that have influenced global institutions.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/islam/history">Explore History</Link>
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
              <CardTitle>Early Islam</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Foundation of Islamic civilization, establishment of religious practices, 
                and early cultural and intellectual developments.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/islam/history/early-islam">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Golden Age</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Peak of Islamic civilization, scientific breakthroughs, cultural flourishing, 
                and establishment of major centers of learning.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/islam/history/medieval">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medieval Period</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Continued cultural and intellectual achievements, expansion of Islamic 
                influence, and development of diverse regional traditions.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/islam/history/medieval">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modern Era</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Contemporary Islamic contributions to science, culture, and society, 
                and the role of Islam in the modern world.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/islam/history/modern">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">References & Further Reading</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><a href="https://www.britannica.com/topic/Islam" target="_blank" rel="noopener noreferrer" className="underline">Britannica: Islam</a></li>
          <li><a href="https://www.bbc.co.uk/religion/religions/islam/" target="_blank" rel="noopener noreferrer" className="underline">BBC Religion: Islam</a></li>
          <li><a href="https://www.metmuseum.org/toah/hd/isma/hd_isma.htm" target="_blank" rel="noopener noreferrer" className="underline">Metropolitan Museum: Islamic Art</a></li>
          <li><a href="https://www.history.com/topics/religion/islam" target="_blank" rel="noopener noreferrer" className="underline">History.com: Islam</a></li>
          <li><a href="https://www.islamicity.org/" target="_blank" rel="noopener noreferrer" className="underline">IslamiCity</a></li>
        </ul>
      </section>
    </div>
  )
}

export default IslamImpactPage 