import React from 'react'
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Zoroastrian Studies | Religious Studies Portal",
  description: "Explore the ancient wisdom of Zoroastrianism, its profound influence on world religions, and its living traditions"
}

export default function ZoroastrianismPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Zoroastrian Studies</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Explore one of the world&apos;s oldest monotheistic religions, its profound theological insights, 
          and its enduring influence on religious thought
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Core Teachings</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Theological Concepts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/zoroastrianism/concepts/ahura-mazda" className="hover:underline">
                    Ahura Mazda (Wise Lord)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/zoroastrianism/concepts/spenta-mainyu" className="hover:underline">
                    Spenta Mainyu (Holy Spirit)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/zoroastrianism/concepts/asha" className="hover:underline">
                    Asha (Truth/Order)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/zoroastrianism/concepts/dualism" className="hover:underline">
                    Cosmic Dualism
                  </Link>
                </li>
                <li>
                  <Link href="/religion/zoroastrianism/concepts/fravashi" className="hover:underline">
                    Fravashi (Guardian Spirits)
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/zoroastrianism/concepts">Explore Concepts</Link>
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
                  <Link href="/religion/zoroastrianism/texts/avesta" className="hover:underline">
                    Avesta
                  </Link>
                </li>
                <li>
                  <Link href="/religion/zoroastrianism/texts/gathas" className="hover:underline">
                    Gathas of Zarathustra
                  </Link>
                </li>
                <li>
                  <Link href="/religion/zoroastrianism/texts/yasna" className="hover:underline">
                    Yasna Liturgy
                  </Link>
                </li>
                <li>
                  <Link href="/religion/zoroastrianism/texts/vendidad" className="hover:underline">
                    Vendidad
                  </Link>
                </li>
                <li>
                  <Link href="/religion/zoroastrianism/texts/denkard" className="hover:underline">
                    Denkard
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/zoroastrianism/texts">Explore Texts</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ethical Principles</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/zoroastrianism/ethics/good-thoughts" className="hover:underline">
                    Good Thoughts (Humata)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/zoroastrianism/ethics/good-words" className="hover:underline">
                    Good Words (Hukhta)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/zoroastrianism/ethics/good-deeds" className="hover:underline">
                    Good Deeds (Huvarshta)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/zoroastrianism/ethics/free-will" className="hover:underline">
                    Free Will and Choice
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/zoroastrianism/ethics">Explore Ethics</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Rituals & Practices</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RITUALS_AND_PRACTICES.map(category => (
            <Card key={category.path}>
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {category.items.map(item => (
                    <li key={item.path}>
                      <Link href={item.path} className="hover:underline">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" asChild className="w-full">
                  <Link href={category.path}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
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
                  <Link href={period.path}>Explore Period</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Contemporary Zoroastrianism</h2>
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

const RITUALS_AND_PRACTICES = [
  {
    name: "Fire Temples",
    path: "/religion/zoroastrianism/practices/fire-temples",
    items: [
      { name: "Sacred Fires", path: "/religion/zoroastrianism/practices/fire-temples/sacred-fires" },
      { name: "Rituals", path: "/religion/zoroastrianism/practices/fire-temples/rituals" },
      { name: "Priesthood", path: "/religion/zoroastrianism/practices/fire-temples/priesthood" },
      { name: "Architecture", path: "/religion/zoroastrianism/practices/fire-temples/architecture" }
    ]
  },
  {
    name: "Life Cycle Rituals",
    path: "/religion/zoroastrianism/practices/life-cycle",
    items: [
      { name: "Navjote (Initiation)", path: "/religion/zoroastrianism/practices/life-cycle/navjote" },
      { name: "Marriage", path: "/religion/zoroastrianism/practices/life-cycle/marriage" },
      { name: "Death Ceremonies", path: "/religion/zoroastrianism/practices/life-cycle/death" },
      { name: "Purification", path: "/religion/zoroastrianism/practices/life-cycle/purification" }
    ]
  },
  {
    name: "Festivals",
    path: "/religion/zoroastrianism/practices/festivals",
    items: [
      { name: "Nowruz", path: "/religion/zoroastrianism/practices/festivals/nowruz" },
      { name: "Gahambars", path: "/religion/zoroastrianism/practices/festivals/gahambars" },
      { name: "Mehragan", path: "/religion/zoroastrianism/practices/festivals/mehragan" },
      { name: "Sadeh", path: "/religion/zoroastrianism/practices/festivals/sadeh" }
    ]
  }
]

const HISTORICAL_PERIODS = [
  {
    name: "Ancient Period",
    path: "/religion/zoroastrianism/history/ancient",
    description: "From Prophet Zarathustra to the Achaemenid Empire (1500-330 BCE)"
  },
  {
    name: "Parthian & Sassanid Era",
    path: "/religion/zoroastrianism/history/classical",
    description: "Golden Age of Zoroastrianism (247 BCE - 651 CE)"
  },
  {
    name: "Post-Islamic Period",
    path: "/religion/zoroastrianism/history/medieval",
    description: "Adaptation and preservation (651-1500 CE)"
  },
  {
    name: "Modern Era",
    path: "/religion/zoroastrianism/history/modern",
    description: "Parsi diaspora and contemporary developments"
  }
]

const CONTEMPORARY_TOPICS = [
  {
    name: "Global Communities",
    path: "/religion/zoroastrianism/contemporary/communities",
    description: "Modern Zoroastrian communities worldwide"
  },
  {
    name: "Cultural Preservation",
    path: "/religion/zoroastrianism/contemporary/preservation",
    description: "Efforts to maintain traditions and heritage"
  },
  {
    name: "Interfaith Dialogue",
    path: "/religion/zoroastrianism/contemporary/interfaith",
    description: "Engagement with other religious traditions"
  },
  {
    name: "Modern Challenges",
    path: "/religion/zoroastrianism/contemporary/challenges",
    description: "Contemporary issues facing the community"
  },
  {
    name: "Environmental Ethics",
    path: "/religion/zoroastrianism/contemporary/environment",
    description: "Zoroastrian perspectives on ecological preservation"
  },
  {
    name: "Scholarly Studies",
    path: "/religion/zoroastrianism/contemporary/scholarship",
    description: "Academic research and modern interpretations"
  }
] 