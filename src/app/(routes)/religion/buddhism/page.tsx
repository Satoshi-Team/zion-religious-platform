import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Buddhist Studies | Religious Studies Portal",
  description: "Comprehensive exploration of Buddhist teachings, history, and cultural impact"
}

export default function BuddhismPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Buddhist Studies</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Explore the wisdom traditions, philosophy, and practices of Buddhism
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Core Teachings</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Fundamental Teachings</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/buddhism/studies/four-noble-truths" className="hover:underline">
                    Four Noble Truths
                  </Link>
                </li>
                <li>
                  <Link href="/religion/buddhism/studies/eightfold-path" className="hover:underline">
                    Noble Eightfold Path
                  </Link>
                </li>
                <li>
                  <Link href="/religion/buddhism/studies/dharma" className="hover:underline">
                    Buddhist Dharma
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/buddhism/studies">Explore Teachings</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Schools & Traditions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/buddhism/schools/theravada" className="hover:underline">
                    Theravada Buddhism
                  </Link>
                </li>
                <li>
                  <Link href="/religion/buddhism/schools/mahayana" className="hover:underline">
                    Mahayana Buddhism
                  </Link>
                </li>
                <li>
                  <Link href="/religion/buddhism/schools/vajrayana" className="hover:underline">
                    Vajrayana Buddhism
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/buddhism/schools">Explore Schools</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Philosophy & Thought</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/buddhism/philosophy/emptiness" className="hover:underline">
                    Emptiness (Śūnyatā)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/buddhism/philosophy/dependent-origination" className="hover:underline">
                    Dependent Origination
                  </Link>
                </li>
                <li>
                  <Link href="/religion/buddhism/philosophy/mind" className="hover:underline">
                    Buddhist Psychology
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/buddhism/philosophy">Explore Philosophy</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Practices & Meditation</h2>
        <div className="grid gap-4 md:grid-cols-4">
          <Button variant="outline" asChild className="h-auto py-6">
            <Link href="/religion/buddhism/practices/meditation">
              <span className="flex flex-col">
                <span className="text-lg font-semibold">Meditation</span>
                <span className="text-sm text-muted-foreground">Buddhist Meditation</span>
              </span>
            </Link>
          </Button>
          <Button variant="outline" asChild className="h-auto py-6">
            <Link href="/religion/buddhism/practices/mindfulness">
              <span className="flex flex-col">
                <span className="text-lg font-semibold">Mindfulness</span>
                <span className="text-sm text-muted-foreground">Present Awareness</span>
              </span>
            </Link>
          </Button>
          <Button variant="outline" asChild className="h-auto py-6">
            <Link href="/religion/buddhism/practices/ethics">
              <span className="flex flex-col">
                <span className="text-lg font-semibold">Ethics</span>
                <span className="text-sm text-muted-foreground">Buddhist Ethics</span>
              </span>
            </Link>
          </Button>
          <Button variant="outline" asChild className="h-auto py-6">
            <Link href="/religion/buddhism/practices/rituals">
              <span className="flex flex-col">
                <span className="text-lg font-semibold">Rituals</span>
                <span className="text-sm text-muted-foreground">Buddhist Practices</span>
              </span>
            </Link>
          </Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Cultural Impact</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Arts & Culture</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/buddhism/impact/art" className="hover:underline">
                    Buddhist Art
                  </Link>
                </li>
                <li>
                  <Link href="/religion/buddhism/impact/architecture" className="hover:underline">
                    Temple Architecture
                  </Link>
                </li>
                <li>
                  <Link href="/religion/buddhism/impact/literature" className="hover:underline">
                    Buddhist Literature
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/buddhism/impact">Explore Impact</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
} 