import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hindu Studies | Religious Studies Portal",
  description: "Comprehensive exploration of Hindu philosophy, practices, and cultural traditions"
}

export default function HinduismPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Hindu Studies</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Explore the ancient wisdom, philosophy, and practices of Hinduism
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Core Concepts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Philosophy & Theology</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/hinduism/concepts/brahman" className="hover:underline">
                    Brahman & Atman
                  </Link>
                </li>
                <li>
                  <Link href="/religion/hinduism/concepts/dharma" className="hover:underline">
                    Dharma
                  </Link>
                </li>
                <li>
                  <Link href="/religion/hinduism/concepts/karma" className="hover:underline">
                    Karma & Samsara
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/hinduism/concepts">Explore Concepts</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sacred Texts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/hinduism/texts/vedas" className="hover:underline">
                    The Vedas
                  </Link>
                </li>
                <li>
                  <Link href="/religion/hinduism/texts/upanishads" className="hover:underline">
                    Upanishads
                  </Link>
                </li>
                <li>
                  <Link href="/religion/hinduism/texts/bhagavad-gita" className="hover:underline">
                    Bhagavad Gita
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/hinduism/texts">Explore Texts</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Schools of Thought</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/hinduism/schools/vedanta" className="hover:underline">
                    Vedanta
                  </Link>
                </li>
                <li>
                  <Link href="/religion/hinduism/schools/yoga" className="hover:underline">
                    Yoga Philosophy
                  </Link>
                </li>
                <li>
                  <Link href="/religion/hinduism/schools/tantra" className="hover:underline">
                    Tantra
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/hinduism/schools">Explore Schools</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Practices & Spirituality</h2>
        <div className="grid gap-4 md:grid-cols-4">
          <Button variant="outline" asChild className="h-auto py-6">
            <Link href="/religion/hinduism/practices/puja">
              <span className="flex flex-col">
                <span className="text-lg font-semibold">Puja</span>
                <span className="text-sm text-muted-foreground">Worship Rituals</span>
              </span>
            </Link>
          </Button>
          <Button variant="outline" asChild className="h-auto py-6">
            <Link href="/religion/hinduism/practices/yoga">
              <span className="flex flex-col">
                <span className="text-lg font-semibold">Yoga</span>
                <span className="text-sm text-muted-foreground">Spiritual Practice</span>
              </span>
            </Link>
          </Button>
          <Button variant="outline" asChild className="h-auto py-6">
            <Link href="/religion/hinduism/practices/ethics">
              <span className="flex flex-col">
                <span className="text-lg font-semibold">Ethics</span>
                <span className="text-sm text-muted-foreground">Hindu Ethics</span>
              </span>
            </Link>
          </Button>
          <Button variant="outline" asChild className="h-auto py-6">
            <Link href="/religion/hinduism/practices/rituals">
              <span className="flex flex-col">
                <span className="text-lg font-semibold">Rituals</span>
                <span className="text-sm text-muted-foreground">Hindu Practices</span>
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
                  <Link href="/religion/hinduism/impact/art" className="hover:underline">
                    Hindu Art
                  </Link>
                </li>
                <li>
                  <Link href="/religion/hinduism/impact/architecture" className="hover:underline">
                    Temple Architecture
                  </Link>
                </li>
                <li>
                  <Link href="/religion/hinduism/impact/literature" className="hover:underline">
                    Hindu Literature
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/hinduism/impact">Explore Impact</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
} 