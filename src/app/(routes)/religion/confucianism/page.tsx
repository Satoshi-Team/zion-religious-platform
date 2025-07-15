import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Confucian Studies | Religious Studies Portal",
  description: "Explore Confucian philosophy, ethics, social teachings, and cultural influence"
}

export default function ConfucianismPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Confucian Studies</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Explore the philosophical tradition, moral teachings, and social principles of Confucianism
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Core Teachings</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Key Concepts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/confucianism/concepts/ren" className="hover:underline">
                    Ren (Benevolence)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/confucianism/concepts/li" className="hover:underline">
                    Li (Propriety)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/confucianism/concepts/yi" className="hover:underline">
                    Yi (Righteousness)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/confucianism/concepts/xiao" className="hover:underline">
                    Xiao (Filial Piety)
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/confucianism/concepts">Explore Concepts</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Classical Texts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/confucianism/texts/four-books" className="hover:underline">
                    Four Books
                  </Link>
                </li>
                <li>
                  <Link href="/religion/confucianism/texts/five-classics" className="hover:underline">
                    Five Classics
                  </Link>
                </li>
                <li>
                  <Link href="/religion/confucianism/texts/analects" className="hover:underline">
                    The Analects
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/confucianism/texts">Explore Texts</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/confucianism/philosophy/relationships" className="hover:underline">
                    Five Relationships
                  </Link>
                </li>
                <li>
                  <Link href="/religion/confucianism/philosophy/harmony" className="hover:underline">
                    Social Harmony
                  </Link>
                </li>
                <li>
                  <Link href="/religion/confucianism/philosophy/education" className="hover:underline">
                    Moral Education
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/confucianism/philosophy">Explore Philosophy</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Schools & Development</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {CONFUCIAN_SCHOOLS.map(school => (
            <Button key={school.path} variant="outline" asChild className="h-auto py-6">
              <Link href={school.path}>
                <span className="flex flex-col">
                  <span className="text-lg font-semibold">{school.name}</span>
                  <span className="text-sm text-muted-foreground">{school.description}</span>
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

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Contemporary Relevance</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CONTEMPORARY_TOPICS.map(topic => (
            <Card key={topic.path}>
              <CardHeader>
                <CardTitle>{topic.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{topic.description}</p>
                <Button variant="outline" asChild className="w-full">
                  <Link href={topic.path}>Explore Topic</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

const CONFUCIAN_SCHOOLS = [
  {
    name: "Classical",
    path: "/religion/confucianism/schools/classical",
    description: "Original teachings of Confucius"
  },
  {
    name: "Neo-Confucianism",
    path: "/religion/confucianism/schools/neo",
    description: "Song-Ming synthesis"
  },
  {
    name: "New Confucianism",
    path: "/religion/confucianism/schools/new",
    description: "Modern interpretations"
  },
  {
    name: "Korean Confucianism",
    path: "/religion/confucianism/schools/korean",
    description: "Korean development"
  }
]

const HISTORICAL_PERIODS = [
  {
    name: "Classical Period",
    path: "/religion/confucianism/history/classical",
    description: "From Confucius to the Han Dynasty (551 BCE - 220 CE)"
  },
  {
    name: "Imperial Era",
    path: "/religion/confucianism/history/imperial",
    description: "State orthodoxy and examination system"
  },
  {
    name: "Modern Period",
    path: "/religion/confucianism/history/modern",
    description: "Challenges and adaptations in modern times"
  }
]

const CONTEMPORARY_TOPICS = [
  {
    name: "Business Ethics",
    path: "/religion/confucianism/contemporary/business",
    description: "Confucian principles in modern business"
  },
  {
    name: "Political Philosophy",
    path: "/religion/confucianism/contemporary/politics",
    description: "Confucian approaches to governance"
  },
  {
    name: "Education",
    path: "/religion/confucianism/contemporary/education",
    description: "Confucian values in modern education"
  },
  {
    name: "Family Values",
    path: "/religion/confucianism/contemporary/family",
    description: "Traditional values in modern society"
  }
] 