import React from 'react'
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Shinto Studies | Religious Studies Portal",
  description: "Explore Japanese Shinto traditions, kami worship, and ritual practices"
}

export default function ShintoPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Shinto Studies</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Explore the indigenous faith of Japan, its kami, rituals, and traditions
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
                  <Link href="/religion/shinto/concepts/kami" className="hover:underline">
                    Kami (Deities)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/shinto/concepts/purity" className="hover:underline">
                    Purity & Pollution
                  </Link>
                </li>
                <li>
                  <Link href="/religion/shinto/concepts/harmony" className="hover:underline">
                    Natural Harmony
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/shinto/concepts">Explore Concepts</Link>
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
                  <Link href="/religion/shinto/texts/kojiki" className="hover:underline">
                    Kojiki
                  </Link>
                </li>
                <li>
                  <Link href="/religion/shinto/texts/nihon-shoki" className="hover:underline">
                    Nihon Shoki
                  </Link>
                </li>
                <li>
                  <Link href="/religion/shinto/texts/engishiki" className="hover:underline">
                    Engishiki
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/shinto/texts">Explore Texts</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rituals & Ceremonies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/shinto/rituals/matsuri" className="hover:underline">
                    Matsuri Festivals
                  </Link>
                </li>
                <li>
                  <Link href="/religion/shinto/rituals/harae" className="hover:underline">
                    Harae (Purification)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/shinto/rituals/lifecycle" className="hover:underline">
                    Life Cycle Rituals
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/shinto/rituals">Explore Rituals</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Sacred Spaces & Practices</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {SHINTO_PRACTICES.map(practice => (
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

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Contemporary Shinto</h2>
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

const SHINTO_PRACTICES = [
  {
    name: "Jinja",
    path: "/religion/shinto/practices/jinja",
    description: "Shinto shrines"
  },
  {
    name: "Norito",
    path: "/religion/shinto/practices/norito",
    description: "Ritual prayers"
  },
  {
    name: "Kagura",
    path: "/religion/shinto/practices/kagura",
    description: "Sacred dance"
  },
  {
    name: "Omamori",
    path: "/religion/shinto/practices/omamori",
    description: "Protective amulets"
  }
]

const HISTORICAL_PERIODS = [
  {
    name: "Ancient Shinto",
    path: "/religion/shinto/history/ancient",
    description: "Early development and indigenous practices"
  },
  {
    name: "State Shinto",
    path: "/religion/shinto/history/state",
    description: "Meiji period to WWII (1868-1945)"
  },
  {
    name: "Modern Shinto",
    path: "/religion/shinto/history/modern",
    description: "Post-war development to present"
  }
]

const CONTEMPORARY_TOPICS = [
  {
    name: "Shrine Shinto",
    path: "/religion/shinto/contemporary/shrine",
    description: "Modern shrine practices and organization"
  },
  {
    name: "Folk Shinto",
    path: "/religion/shinto/contemporary/folk",
    description: "Local traditions and customs"
  },
  {
    name: "Shinto & Society",
    path: "/religion/shinto/contemporary/society",
    description: "Role in modern Japanese life"
  }
] 