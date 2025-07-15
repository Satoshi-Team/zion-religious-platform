import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Jain Studies | Religious Studies Portal",
  description: "Explore Jain philosophy, ethics, practices, and the path of non-violence and spiritual liberation"
}

export default function JainismPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Jain Studies</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Explore the ancient wisdom of Jainism, its principles of non-violence, and path to liberation
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Core Principles</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Fundamental Beliefs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/jainism/concepts/ahimsa" className="hover:underline">
                    Ahimsa (Non-violence)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/jainism/concepts/anekantavada" className="hover:underline">
                    Anekantavada (Many-sided Reality)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/jainism/concepts/aparigraha" className="hover:underline">
                    Aparigraha (Non-possession)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/jainism/concepts/karma" className="hover:underline">
                    Karma Theory
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/jainism/concepts">Explore Concepts</Link>
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
                  <Link href="/religion/jainism/texts/agamas" className="hover:underline">
                    Agamas
                  </Link>
                </li>
                <li>
                  <Link href="/religion/jainism/texts/purvas" className="hover:underline">
                    Purvas
                  </Link>
                </li>
                <li>
                  <Link href="/religion/jainism/texts/angas" className="hover:underline">
                    Angas
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/jainism/texts">Explore Texts</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Path to Liberation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/jainism/liberation/ratnatraya" className="hover:underline">
                    Three Jewels
                  </Link>
                </li>
                <li>
                  <Link href="/religion/jainism/liberation/gunasthana" className="hover:underline">
                    Fourteen Stages
                  </Link>
                </li>
                <li>
                  <Link href="/religion/jainism/liberation/moksha" className="hover:underline">
                    Moksha
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/jainism/liberation">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Practices & Observances</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {JAIN_PRACTICES.map(practice => (
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
        <h2 className="text-2xl font-bold mb-6">Traditions & Schools</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {JAIN_TRADITIONS.map(tradition => (
            <Card key={tradition.path}>
              <CardHeader>
                <CardTitle>{tradition.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{tradition.description}</p>
                <Button variant="outline" asChild className="w-full">
                  <Link href={tradition.path}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Contemporary Jainism</h2>
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

const JAIN_PRACTICES = [
  {
    name: "Samayika",
    path: "/religion/jainism/practices/samayika",
    description: "Daily meditation"
  },
  {
    name: "Pratikraman",
    path: "/religion/jainism/practices/pratikraman",
    description: "Self-reflection"
  },
  {
    name: "Paryushan",
    path: "/religion/jainism/practices/paryushan",
    description: "Annual festival"
  },
  {
    name: "Dietary Laws",
    path: "/religion/jainism/practices/diet",
    description: "Food guidelines"
  }
]

const JAIN_TRADITIONS = [
  {
    name: "Svetambara",
    path: "/religion/jainism/traditions/svetambara",
    description: "White-clad tradition with its distinct practices and interpretations"
  },
  {
    name: "Digambara",
    path: "/religion/jainism/traditions/digambara",
    description: "Sky-clad tradition emphasizing complete renunciation"
  },
  {
    name: "Sthanakvasi",
    path: "/religion/jainism/traditions/sthanakvasi",
    description: "Non-image-worshipping Svetambara tradition"
  }
]

const CONTEMPORARY_TOPICS = [
  {
    name: "Environmental Ethics",
    path: "/religion/jainism/contemporary/environment",
    description: "Jain principles applied to ecological conservation"
  },
  {
    name: "Business Ethics",
    path: "/religion/jainism/contemporary/business",
    description: "Applying Jain values in commerce"
  },
  {
    name: "Modern Practice",
    path: "/religion/jainism/contemporary/modern",
    description: "Contemporary adaptations of Jain practices"
  },
  {
    name: "Global Community",
    path: "/religion/jainism/contemporary/global",
    description: "Jainism in the modern world"
  }
] 