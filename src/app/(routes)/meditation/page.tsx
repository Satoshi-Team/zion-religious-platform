import React from 'react'
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Meditation & Contemplative Practices | Religious Studies",
  description: "Explore meditation and contemplative practices across religious traditions"
}

export default function MeditationPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Meditation & Contemplative Practices</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Discover contemplative traditions and practices from world religions
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Traditions</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MEDITATION_TRADITIONS.map(tradition => (
            <Card key={tradition.path}>
              <CardHeader>
                <CardTitle>{tradition.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {tradition.practices.map(practice => (
                    <li key={practice.path}>
                      <Link href={practice.path} className="hover:underline">
                        {practice.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" asChild className="w-full">
                  <Link href={tradition.path}>Explore Tradition</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Practice Guides</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRACTICE_GUIDES.map(guide => (
            <Card key={guide.path}>
              <CardHeader>
                <CardTitle>{guide.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{guide.description}</p>
                <Button variant="outline" asChild className="w-full">
                  <Link href={guide.path}>View Guide</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

const MEDITATION_TRADITIONS = [
  {
    name: "Buddhist Meditation",
    path: "/meditation/buddhist",
    practices: [
      { name: "Mindfulness", path: "/meditation/buddhist/mindfulness" },
      { name: "Zen", path: "/meditation/buddhist/zen" },
      { name: "Vipassana", path: "/meditation/buddhist/vipassana" }
    ]
  },
  {
    name: "Christian Prayer",
    path: "/meditation/christian",
    practices: [
      { name: "Contemplative Prayer", path: "/meditation/christian/contemplative" },
      { name: "Lectio Divina", path: "/meditation/christian/lectio-divina" },
      { name: "Centering Prayer", path: "/meditation/christian/centering" }
    ]
  },
  {
    name: "Hindu Meditation",
    path: "/meditation/hindu",
    practices: [
      { name: "Yoga", path: "/meditation/hindu/yoga" },
      { name: "Mantra", path: "/meditation/hindu/mantra" },
      { name: "Vedanta", path: "/meditation/hindu/vedanta" }
    ]
  },
  {
    name: "Islamic Practices",
    path: "/meditation/islamic",
    practices: [
      { name: "Dhikr", path: "/meditation/islamic/dhikr" },
      { name: "Muraqaba", path: "/meditation/islamic/muraqaba" },
      { name: "Sufi Meditation", path: "/meditation/islamic/sufi" }
    ]
  }
]

const PRACTICE_GUIDES = [
  {
    name: "Beginning Meditation",
    path: "/meditation/guides/beginning",
    description: "Introduction to basic meditation techniques from various traditions"
  },
  {
    name: "Contemplative Prayer",
    path: "/meditation/guides/contemplative-prayer",
    description: "Guide to Christian contemplative prayer practices"
  },
  {
    name: "Mindfulness Practice",
    path: "/meditation/guides/mindfulness",
    description: "Buddhist-inspired mindfulness meditation techniques"
  }
] 