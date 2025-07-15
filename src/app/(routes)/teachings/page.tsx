import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Teachings | Comparative Religious Studies",
  description: "Core teachings and doctrines from major world religions"
}

export default function TeachingsPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Religious Teachings</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Explore core doctrines and teachings across religious traditions
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Core Teachings by Tradition</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {RELIGIOUS_TEACHINGS.map(tradition => (
            <Card key={tradition.path}>
              <CardHeader>
                <CardTitle>{tradition.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {tradition.topics.map(topic => (
                    <li key={topic.path}>
                      <Link href={topic.path} className="hover:underline">
                        {topic.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" asChild className="w-full">
                  <Link href={tradition.path}>View All Teachings</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Comparative Topics</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COMPARATIVE_TOPICS.map(topic => (
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

const RELIGIOUS_TEACHINGS = [
  {
    name: "Christianity",
    path: "/teachings/christianity",
    topics: [
      { name: "Trinity", path: "/teachings/christianity/trinity" },
      { name: "Salvation", path: "/teachings/christianity/salvation" },
      { name: "Church", path: "/teachings/christianity/church" }
    ]
  },
  {
    name: "Buddhism",
    path: "/teachings/buddhism",
    topics: [
      { name: "Four Noble Truths", path: "/teachings/buddhism/noble-truths" },
      { name: "Eightfold Path", path: "/teachings/buddhism/eightfold-path" },
      { name: "Emptiness", path: "/teachings/buddhism/emptiness" }
    ]
  },
  {
    name: "Hinduism",
    path: "/teachings/hinduism",
    topics: [
      { name: "Brahman & Atman", path: "/teachings/hinduism/brahman-atman" },
      { name: "Dharma", path: "/teachings/hinduism/dharma" },
      { name: "Karma", path: "/teachings/hinduism/karma" }
    ]
  },
  {
    name: "Islam",
    path: "/teachings/islam",
    topics: [
      { name: "Tawhid", path: "/teachings/islam/tawhid" },
      { name: "Prophecy", path: "/teachings/islam/prophecy" },
      { name: "Five Pillars", path: "/teachings/islam/pillars" }
    ]
  }
]

const COMPARATIVE_TOPICS = [
  {
    name: "Divine & Human Nature",
    path: "/teachings/comparative/divine-human",
    description: "Explore how different traditions understand the relationship between the divine and human"
  },
  {
    name: "Salvation & Liberation",
    path: "/teachings/comparative/salvation",
    description: "Compare concepts of spiritual liberation across traditions"
  },
  {
    name: "Ethics & Morality",
    path: "/teachings/comparative/ethics",
    description: "Examine moral teachings and ethical frameworks"
  }
] 