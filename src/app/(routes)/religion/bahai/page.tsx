import React from 'react'
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Baha'i Faith Studies | Religious Studies Portal",
  description: "Explore the teachings, principles, and global community of the Baha'i Faith"
}

export default function BahaiPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Baha&apos;i Faith Studies</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Explore the progressive revelation, unity principles, and global vision of the Baha&apos;i Faith
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Core Teachings</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Central Principles</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/bahai/principles/unity" className="hover:underline">
                    Unity of Humanity
                  </Link>
                </li>
                <li>
                  <Link href="/religion/bahai/principles/progressive-revelation" className="hover:underline">
                    Progressive Revelation
                  </Link>
                </li>
                <li>
                  <Link href="/religion/bahai/principles/harmony" className="hover:underline">
                    Science & Religion
                  </Link>
                </li>
                <li>
                  <Link href="/religion/bahai/principles/equality" className="hover:underline">
                    Gender Equality
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/bahai/principles">Explore Principles</Link>
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
                  <Link href="/religion/bahai/texts/kitab-i-aqdas" className="hover:underline">
                    Kitáb-i-Aqdas
                  </Link>
                </li>
                <li>
                  <Link href="/religion/bahai/texts/kitab-i-iqan" className="hover:underline">
                    Kitáb-i-Íqán
                  </Link>
                </li>
                <li>
                  <Link href="/religion/bahai/texts/hidden-words" className="hover:underline">
                    The Hidden Words
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/bahai/texts">Explore Texts</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Administrative Order</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/bahai/administration/uhj" className="hover:underline">
                    Universal House of Justice
                  </Link>
                </li>
                <li>
                  <Link href="/religion/bahai/administration/nsa" className="hover:underline">
                    National Assemblies
                  </Link>
                </li>
                <li>
                  <Link href="/religion/bahai/administration/lsa" className="hover:underline">
                    Local Assemblies
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/bahai/administration">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Practices & Community Life</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {BAHAI_PRACTICES.map(practice => (
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
        <h2 className="text-2xl font-bold mb-6">Global Community</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COMMUNITY_TOPICS.map(topic => (
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

const BAHAI_PRACTICES = [
  {
    name: "Prayer",
    path: "/religion/bahai/practices/prayer",
    description: "Daily obligatory prayers"
  },
  {
    name: "Feasts",
    path: "/religion/bahai/practices/feasts",
    description: "19-Day Feast"
  },
  {
    name: "Fasting",
    path: "/religion/bahai/practices/fasting",
    description: "Annual fast"
  },
  {
    name: "Holy Days",
    path: "/religion/bahai/practices/holy-days",
    description: "Sacred celebrations"
  }
]

const HISTORICAL_PERIODS = [
  {
    name: "The Báb",
    path: "/religion/bahai/history/bab",
    description: "The ministry of the Báb (1844-1850)"
  },
  {
    name: "Bahá'u'lláh",
    path: "/religion/bahai/history/bahaullah",
    description: "The founding of the Baha'i Faith (1863-1892)"
  },
  {
    name: "Modern Era",
    path: "/religion/bahai/history/modern",
    description: "Global expansion and development"
  }
]

const COMMUNITY_TOPICS = [
  {
    name: "Social Action",
    path: "/religion/bahai/community/social-action",
    description: "Community service and development projects"
  },
  {
    name: "Education",
    path: "/religion/bahai/community/education",
    description: "Spiritual education programs"
  },
  {
    name: "Arts & Culture",
    path: "/religion/bahai/community/arts",
    description: "Creative expression in community life"
  },
  {
    name: "Global Initiatives",
    path: "/religion/bahai/community/initiatives",
    description: "Worldwide development projects"
  }
] 