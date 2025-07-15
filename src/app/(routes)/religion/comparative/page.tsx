import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Comparative Religion: Understanding World Faiths',
  description: 'Explore comparative religion, the systematic study of similarities and differences between religious traditions, including methodology, themes, and cross-cultural understanding.'
}

function ComparativeReligionPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Comparative Religion: Understanding World Faiths</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Comparative religion is the systematic study of similarities and differences between religious 
        traditions, beliefs, and practices. It seeks to understand the universal aspects of religious 
        experience while appreciating the unique expressions of different faiths. This field promotes 
        interfaith dialogue, mutual understanding, and appreciation for religious diversity.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Core Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Understanding:</strong> Deep appreciation of diverse faiths</li>
              <li><strong>Dialogue:</strong> Interfaith communication and cooperation</li>
              <li><strong>Peace:</strong> Religious harmony and conflict resolution</li>
              <li><strong>Education:</strong> Knowledge sharing and learning</li>
              <li><strong>Unity:</strong> Recognition of shared human values</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Methodology</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Phenomenology:</strong> Study of religious experience</li>
              <li><strong>Historical Analysis:</strong> Development and evolution</li>
              <li><strong>Structural Comparison:</strong> Similar patterns and themes</li>
              <li><strong>Cultural Context:</strong> Social and historical factors</li>
              <li><strong>Interdisciplinary:</strong> Multiple academic approaches</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Themes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Sacred Texts:</strong> Scripture and oral traditions</li>
              <li><strong>Rituals:</strong> Ceremonies and practices</li>
              <li><strong>Ethics:</strong> Moral principles and values</li>
              <li><strong>Mysticism:</strong> Spiritual experience and union</li>
              <li><strong>Community:</strong> Religious organization and leadership</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Historical Development</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Early Comparative</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Ancient and medieval approaches to understanding religious diversity, 
                including early travelers' accounts and philosophical comparisons.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/comparative/history/early-comparative">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medieval Comparative</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Religious encounters during the medieval period, including trade routes, 
                missionary activities, and scholarly exchanges.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/comparative/history/medieval-comparative">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modern Comparative</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Development of systematic comparative religion as an academic discipline, 
                including modern methodologies and approaches.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/comparative/history/modern-comparative">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contemporary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Current approaches to comparative religion, including interfaith dialogue, 
                global religious studies, and contemporary challenges.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/comparative/history">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Comparative Themes</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Creation Narratives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Genesis Stories:</strong> Biblical and other creation accounts</li>
                <li><strong>Cosmological Myths:</strong> Ancient and indigenous traditions</li>
                <li><strong>Scientific Integration:</strong> Modern perspectives</li>
                <li><strong>Symbolic Meaning:</strong> Metaphorical interpretations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prayer & Meditation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Prayer Forms:</strong> Petitionary, contemplative, communal</li>
                <li><strong>Meditation Techniques:</strong> Mindfulness, concentration, insight</li>
                <li><strong>Sacred Spaces:</strong> Temples, mosques, churches, shrines</li>
                <li><strong>Spiritual Practices:</strong> Rituals and ceremonies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ethical Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Golden Rule:</strong> Universal ethical principle</li>
                <li><strong>Virtue Ethics:</strong> Character and moral excellence</li>
                <li><strong>Social Justice:</strong> Community and societal concerns</li>
                <li><strong>Environmental Ethics:</strong> Stewardship and sustainability</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Interfaith Dialogue</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Dialogue Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Approaches to interfaith conversation, including respectful dialogue, 
                shared learning, and collaborative action for common good.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/comparative/impact/dialogue">Explore Dialogue</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Common Ground</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Shared values, principles, and goals across religious traditions, 
                including peace, justice, compassion, and human dignity.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/comparative/impact/common-ground">Explore Common Ground</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Global Cooperation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Religious cooperation on global challenges, including poverty, 
                climate change, conflict resolution, and humanitarian aid.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/comparative/impact/cooperation">Explore Cooperation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">References & Further Reading</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><a href="https://www.britannica.com/topic/comparative-religion" target="_blank" rel="noopener noreferrer" className="underline">Britannica: Comparative Religion</a></li>
          <li><a href="https://www.bbc.co.uk/religion/religions/" target="_blank" rel="noopener noreferrer" className="underline">BBC Religion: World Religions</a></li>
          <li><a href="https://www.interfaith.org/" target="_blank" rel="noopener noreferrer" className="underline">Interfaith.org</a></li>
          <li><a href="https://www.parliamentofreligions.org/" target="_blank" rel="noopener noreferrer" className="underline">Parliament of the World's Religions</a></li>
          <li><a href="https://www.un.org/en/observances/international-day-human-fraternity" target="_blank" rel="noopener noreferrer" className="underline">UN International Day of Human Fraternity</a></li>
        </ul>
      </section>
    </div>
  )
}

export default ComparativeReligionPage 