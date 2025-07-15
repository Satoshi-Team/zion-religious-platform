import React from 'react'
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Taoist Studies | Religious Studies Portal",
  description: "Explore Taoist philosophy, practices, and the harmony between humanity and nature"
}

export default function TaoismPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Taoist Studies</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Explore the Way of the Tao, its philosophical wisdom, and practices for harmonious living
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Core Concepts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Fundamental Principles</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/taoism/concepts/tao" className="hover:underline">
                    The Tao (The Way)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/taoism/concepts/wu-wei" className="hover:underline">
                    Wu Wei (Non-action)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/taoism/concepts/yin-yang" className="hover:underline">
                    Yin and Yang
                  </Link>
                </li>
                <li>
                  <Link href="/religion/taoism/concepts/te" className="hover:underline">
                    Te (Virtue/Power)
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/taoism/concepts">Explore Concepts</Link>
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
                  <Link href="/religion/taoism/texts/tao-te-ching" className="hover:underline">
                    Tao Te Ching
                  </Link>
                </li>
                <li>
                  <Link href="/religion/taoism/texts/zhuangzi" className="hover:underline">
                    Zhuangzi
                  </Link>
                </li>
                <li>
                  <Link href="/religion/taoism/texts/daozang" className="hover:underline">
                    Daozang
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/taoism/texts">Explore Texts</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Internal Arts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/taoism/arts/qigong" className="hover:underline">
                    Qigong
                  </Link>
                </li>
                <li>
                  <Link href="/religion/taoism/arts/neidan" className="hover:underline">
                    Internal Alchemy
                  </Link>
                </li>
                <li>
                  <Link href="/religion/taoism/arts/meditation" className="hover:underline">
                    Taoist Meditation
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/taoism/arts">Explore Arts</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Practices & Cultivation</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {TAOIST_PRACTICES.map(practice => (
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
        <h2 className="text-2xl font-bold mb-6">Schools & Traditions</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TAOIST_SCHOOLS.map(school => (
            <Card key={school.path}>
              <CardHeader>
                <CardTitle>{school.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{school.description}</p>
                <Button variant="outline" asChild className="w-full">
                  <Link href={school.path}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Modern Applications</h2>
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

const TAOIST_PRACTICES = [
  {
    name: "Meditation",
    path: "/religion/taoism/practices/meditation",
    description: "Inner cultivation"
  },
  {
    name: "Ritual",
    path: "/religion/taoism/practices/ritual",
    description: "Sacred ceremonies"
  },
  {
    name: "Feng Shui",
    path: "/religion/taoism/practices/feng-shui",
    description: "Environmental harmony"
  },
  {
    name: "Healing Arts",
    path: "/religion/taoism/practices/healing",
    description: "Traditional medicine"
  }
]

const TAOIST_SCHOOLS = [
  {
    name: "Quanzhen School",
    path: "/religion/taoism/schools/quanzhen",
    description: "Complete Reality School emphasizing internal alchemy"
  },
  {
    name: "Zhengyi School",
    path: "/religion/taoism/schools/zhengyi",
    description: "Orthodox Unity School focusing on ritual and ceremony"
  },
  {
    name: "Philosophical Taoism",
    path: "/religion/taoism/schools/philosophical",
    description: "Wisdom traditions based on classical texts"
  },
  {
    name: "Religious Taoism",
    path: "/religion/taoism/schools/religious",
    description: "Organized traditions with temples and priesthood"
  }
]

const CONTEMPORARY_TOPICS = [
  {
    name: "Environmental Ethics",
    path: "/religion/taoism/contemporary/environment",
    description: "Taoist principles in ecological preservation"
  },
  {
    name: "Health & Wellness",
    path: "/religion/taoism/contemporary/health",
    description: "Traditional practices in modern healthcare"
  },
  {
    name: "Mindfulness",
    path: "/religion/taoism/contemporary/mindfulness",
    description: "Taoist meditation in modern life"
  },
  {
    name: "Cultural Impact",
    path: "/religion/taoism/contemporary/culture",
    description: "Influence on arts, literature, and society"
  }
] 