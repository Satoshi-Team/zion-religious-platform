import React from 'react'
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Study Resources | Religious Studies",
  description: "Educational resources and study materials for religious studies"
}

export default function ResourcesPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Study Resources</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Comprehensive resources for studying world religions
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Study Materials</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STUDY_MATERIALS.map(category => (
            <Card key={category.path}>
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {category.resources.map(resource => (
                    <li key={resource.path}>
                      <Link href={resource.path} className="hover:underline">
                        {resource.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" asChild className="w-full">
                  <Link href={category.path}>View All Resources</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Learning Paths</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {LEARNING_PATHS.map(path => (
            <Button key={path.path} variant="outline" asChild className="h-auto py-6">
              <Link href={path.path}>
                <span className="flex flex-col">
                  <span className="text-lg font-semibold">{path.name}</span>
                  <span className="text-sm text-muted-foreground">{path.description}</span>
                </span>
              </Link>
            </Button>
          ))}
        </div>
      </section>
    </main>
  )
}

const STUDY_MATERIALS = [
  {
    name: "Sacred Texts",
    path: "/resources/texts",
    resources: [
      { name: "Biblical Studies", path: "/resources/texts/bible" },
      { name: "Quranic Studies", path: "/resources/texts/quran" },
      { name: "Buddhist Texts", path: "/resources/texts/buddhist" },
      { name: "Hindu Scriptures", path: "/resources/texts/hindu" }
    ]
  },
  {
    name: "Historical Studies",
    path: "/resources/history",
    resources: [
      { name: "Religious Origins", path: "/resources/history/origins" },
      { name: "Development", path: "/resources/history/development" },
      { name: "Modern Period", path: "/resources/history/modern" }
    ]
  },
  {
    name: "Comparative Studies",
    path: "/resources/comparative",
    resources: [
      { name: "Mystical Traditions", path: "/resources/comparative/mysticism" },
      { name: "Ethics", path: "/resources/comparative/ethics" },
      { name: "Practices", path: "/resources/comparative/practices" }
    ]
  }
]

const LEARNING_PATHS = [
  {
    name: "Beginner",
    path: "/resources/paths/beginner",
    description: "Introduction to World Religions"
  },
  {
    name: "Intermediate",
    path: "/resources/paths/intermediate",
    description: "Comparative Religious Studies"
  },
  {
    name: "Advanced",
    path: "/resources/paths/advanced",
    description: "Specialized Topics"
  },
  {
    name: "Research",
    path: "/resources/paths/research",
    description: "Academic Studies"
  }
] 