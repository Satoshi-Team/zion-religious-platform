import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Religious History: Development of World Religions',
  description: 'Explore the historical development of world religions, from ancient origins to modern expressions, including major events, figures, and cultural influences.'
}

function ReligiousHistoryPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Religious History: Development of World Religions</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Religious history traces the development, evolution, and interaction of religious traditions 
        throughout human civilization. From ancient spiritual practices to modern religious movements, 
        this field examines how religions have shaped societies, cultures, and human experience across 
        time and geography. This page explores the major periods, developments, and themes in religious history.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Major Periods</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Ancient Period:</strong> Prehistoric to classical civilizations</li>
              <li><strong>Medieval Period:</strong> Middle Ages and religious institutions</li>
              <li><strong>Early Modern:</strong> Reformation and global expansion</li>
              <li><strong>Modern Period:</strong> Enlightenment to present</li>
              <li><strong>Contemporary:</strong> Current religious developments</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Themes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Religious Evolution:</strong> Development and adaptation</li>
              <li><strong>Cultural Exchange:</strong> Cross-cultural influences</li>
              <li><strong>Social Impact:</strong> Religion and society</li>
              <li><strong>Political Power:</strong> Religion and governance</li>
              <li><strong>Intellectual History:</strong> Religious thought and philosophy</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Research Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Archaeology:</strong> Material evidence and artifacts</li>
              <li><strong>Textual Analysis:</strong> Sacred texts and documents</li>
              <li><strong>Comparative Study:</strong> Cross-religious analysis</li>
              <li><strong>Social History:</strong> Religious communities and practices</li>
              <li><strong>Cultural History:</strong> Religious expression and art</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Historical Periods</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Early Religions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Prehistoric spiritual practices, ancient civilizations, and the emergence 
                of organized religious traditions.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/history/early-religions">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medieval Religions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Religious institutions, theological development, and the role of religion 
                in medieval society and culture.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/history/medieval-religions">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modern Religions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Religious reformations, global expansion, and the impact of modernity 
                on religious traditions and practices.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/history/modern-religions">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Comparative Religions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Cross-cultural religious studies, interfaith dialogue, and comparative 
                analysis of religious traditions.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/history/comparative-religions">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Major Religious Traditions</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Abrahamic Traditions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Judaism:</strong> Ancient origins to modern expressions</li>
                <li><strong>Christianity:</strong> Early church to global religion</li>
                <li><strong>Islam:</strong> Prophetic tradition to contemporary practice</li>
                <li><strong>Common Heritage:</strong> Shared historical and theological roots</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Eastern Traditions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Hinduism:</strong> Vedic origins to modern practice</li>
                <li><strong>Buddhism:</strong> Enlightenment to global spread</li>
                <li><strong>Confucianism:</strong> Chinese philosophy and tradition</li>
                <li><strong>Daoism:</strong> Natural philosophy and practice</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Indigenous Traditions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Native American:</strong> Spiritual practices and cosmology</li>
                <li><strong>African Traditional:</strong> Ancestral and nature religions</li>
                <li><strong>Pacific Islander:</strong> Oceanic spiritual traditions</li>
                <li><strong>Aboriginal:</strong> Australian indigenous spirituality</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Historical Themes</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Religious Movements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Major religious reformations, revivals, and new religious movements 
                that have shaped religious history.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/history/impact/movements">Explore Movements</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Religious Art & Culture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Artistic expression, cultural influence, and the role of religion 
                in shaping human creativity and culture.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/history/impact/art">Explore Art & Culture</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Religious Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Development of religious thought, theological systems, and philosophical 
                approaches to religious questions.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/history/impact/philosophy">Explore Philosophy</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">References & Further Reading</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><a href="https://www.britannica.com/topic/religion" target="_blank" rel="noopener noreferrer" className="underline">Britannica: Religion</a></li>
          <li><a href="https://www.bbc.co.uk/religion/religions/" target="_blank" rel="noopener noreferrer" className="underline">BBC Religion: World Religions</a></li>
          <li><a href="https://www.metmuseum.org/toah/ht/06/" target="_blank" rel="noopener noreferrer" className="underline">Metropolitan Museum: Timeline of Art History</a></li>
          <li><a href="https://www.history.com/topics/religion" target="_blank" rel="noopener noreferrer" className="underline">History.com: Religion</a></li>
          <li><a href="https://www.smithsonianmag.com/history/" target="_blank" rel="noopener noreferrer" className="underline">Smithsonian: History</a></li>
        </ul>
      </section>
    </div>
  )
}

export default ReligiousHistoryPage 