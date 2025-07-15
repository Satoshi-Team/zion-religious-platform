import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Christianity\'s Cultural Impact: Art, Science, Philosophy, and Society',
  description: 'Explore Christianity\'s profound influence on Western civilization and global culture, including its impact on art, literature, music, science, philosophy, and social institutions.'
}

function ChristianityImpactPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Christianity's Cultural Impact: Art, Science, Philosophy, and Society</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Christianity has profoundly shaped Western civilization and global culture for over two millennia. 
        From the arts and sciences to philosophy and social institutions, Christian beliefs, values, and 
        practices have influenced every aspect of human society. This page explores Christianity's 
        multifaceted impact on culture, education, social justice, and human development.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Cultural Influence</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Visual Arts:</strong> Painting, sculpture, architecture</li>
              <li><strong>Literature:</strong> Poetry, prose, drama</li>
              <li><strong>Music:</strong> Sacred and secular compositions</li>
              <li><strong>Film:</strong> Religious themes and moral narratives</li>
              <li><strong>Festivals:</strong> Christmas, Easter, and celebrations</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Intellectual Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Philosophy:</strong> Christian thought and ethics</li>
              <li><strong>Science:</strong> Scientific method and inquiry</li>
              <li><strong>Education:</strong> Universities and schools</li>
              <li><strong>Theology:</strong> Systematic religious study</li>
              <li><strong>Humanism:</strong> Dignity and value of human life</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Social Institutions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Healthcare:</strong> Hospitals and medical care</li>
              <li><strong>Charity:</strong> Social services and aid</li>
              <li><strong>Law:</strong> Legal systems and justice</li>
              <li><strong>Politics:</strong> Governance and human rights</li>
              <li><strong>Family:</strong> Marriage and community values</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Areas of Impact</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Art & Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Christianity's influence on visual arts, from Byzantine icons to Renaissance masterpieces, 
                Gothic cathedrals to modern religious art.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/christianity/impact/art">Explore Art</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Literature & Language</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Biblical influence on literature, language development, storytelling traditions, 
                and literary themes and motifs.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/christianity/impact/literature">Explore Literature</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Music & Worship</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Development of sacred music, choral traditions, hymns, and Christianity's 
                influence on Western musical forms and theory.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/christianity/impact/music">Explore Music</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Science & Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Christian contributions to scientific discovery, establishment of universities, 
                and the development of educational systems and institutions.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/christianity/impact/science">Explore Science</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Philosophy & Ethics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Christian philosophical traditions, ethical frameworks, moral philosophy, 
                and influence on Western thought and values.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/christianity/impact/philosophy">Explore Philosophy</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Justice</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Christian involvement in social reform, human rights movements, charity work, 
                and advocacy for justice and equality.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/christianity/history">Explore History</Link>
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
              <CardTitle>Early Church</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Formation of Christian communities, development of theology, and early 
                cultural influence in the Roman Empire.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/christianity/history/early-church">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medieval Period</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Monastic culture, cathedral building, scholasticism, and Christianity's 
                central role in medieval society and culture.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/christianity/history/medieval">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reformation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Religious reform, cultural transformation, and the impact of Protestantism 
                on art, music, education, and society.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/christianity/history/reformation">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modern Era</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Christianity's role in modern society, social movements, global missions, 
                and contemporary cultural influence.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/christianity/history/modern">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">References & Further Reading</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><a href="https://www.britannica.com/topic/Christianity" target="_blank" rel="noopener noreferrer" className="underline">Britannica: Christianity</a></li>
          <li><a href="https://www.bbc.co.uk/religion/religions/christianity/" target="_blank" rel="noopener noreferrer" className="underline">BBC Religion: Christianity</a></li>
          <li><a href="https://www.metmuseum.org/toah/hd/chri/hd_chri.htm" target="_blank" rel="noopener noreferrer" className="underline">Metropolitan Museum: Christianity and Art</a></li>
          <li><a href="https://www.history.com/topics/religion/history-of-christianity" target="_blank" rel="noopener noreferrer" className="underline">History.com: History of Christianity</a></li>
          <li><a href="https://www.catholic.org/" target="_blank" rel="noopener noreferrer" className="underline">Catholic.org</a></li>
        </ul>
      </section>
    </div>
  )
}

export default ChristianityImpactPage 