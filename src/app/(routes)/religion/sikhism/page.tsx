import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sikh Studies | Religious Studies Portal",
  description: "Explore Sikh philosophy, practices, and the teachings of the Gurus"
}

export default function SikhismPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Sikh Studies</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Explore the teachings of the Gurus, Sikh philosophy, and practices
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Core Concepts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Fundamental Beliefs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/sikhism/concepts/ik-onkar" className="hover:underline">
                    Ik Onkar (One God)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/sikhism/concepts/guru" className="hover:underline">
                    The Guru Tradition
                  </Link>
                </li>
                <li>
                  <Link href="/religion/sikhism/concepts/khalsa" className="hover:underline">
                    The Khalsa
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/sikhism/concepts">Explore Concepts</Link>
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
                  <Link href="/religion/sikhism/texts/guru-granth-sahib" className="hover:underline">
                    Guru Granth Sahib
                  </Link>
                </li>
                <li>
                  <Link href="/religion/sikhism/texts/dasam-granth" className="hover:underline">
                    Dasam Granth
                  </Link>
                </li>
                <li>
                  <Link href="/religion/sikhism/texts/janamsakhis" className="hover:underline">
                    Janamsakhis
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/sikhism/texts">Explore Texts</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Philosophy & Ethics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/sikhism/philosophy/equality" className="hover:underline">
                    Social Equality
                  </Link>
                </li>
                <li>
                  <Link href="/religion/sikhism/philosophy/seva" className="hover:underline">
                    Seva (Selfless Service)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/sikhism/philosophy/miri-piri" className="hover:underline">
                    Miri Piri (Temporal-Spiritual)
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/sikhism/philosophy">Explore Philosophy</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Practices & Traditions</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {SIKH_PRACTICES.map(practice => (
            <Button key={practice.path} variant="outline" asChild className="h-auto py-6">
              <Link href={practice.path}>
                <span className="flex flex-col">
                  <span className="text-lg font-semibold">{practice.name}</span>
                  <span className="text-sm text-muted-foreground">{practice.description}</span>
                </span>
              </Link>
            </Button>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Historical Development</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {HISTORICAL_PERIODS.map(period => (
            <Card key={period.path}>
              <CardHeader>
                <CardTitle>{period.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{period.description}</p>
                <Button variant="outline" asChild className="w-full">
                  <Link href={period.path}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

const SIKH_PRACTICES = [
  {
    name: "Five Ks",
    path: "/religion/sikhism/practices/five-ks",
    description: "The five articles of faith"
  },
  {
    name: "Kirtan",
    path: "/religion/sikhism/practices/kirtan",
    description: "Devotional music"
  },
  {
    name: "Langar",
    path: "/religion/sikhism/practices/langar",
    description: "Community kitchen"
  },
  {
    name: "Nitnem",
    path: "/religion/sikhism/practices/nitnem",
    description: "Daily prayers"
  }
]

const HISTORICAL_PERIODS = [
  {
    name: "The Gurus",
    path: "/religion/sikhism/history/gurus",
    description: "The lives and teachings of the ten Gurus (1469-1708)"
  },
  {
    name: "Khalsa Formation",
    path: "/religion/sikhism/history/khalsa",
    description: "Establishment and development of the Khalsa (1699)"
  },
  {
    name: "Modern Period",
    path: "/religion/sikhism/history/modern",
    description: "Sikhism in the modern world"
  }
] 