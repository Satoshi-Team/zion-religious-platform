import React from 'react'
import { Heading } from "@/components/ui/heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const intermediateTopics = [
  {
    title: "Comparative Religion",
    description: "In-depth study of similarities and differences between religious traditions",
    resources: [
      { name: "Religious Philosophy", href: "/resources/philosophy" },
      { name: "Comparative Theology", href: "/resources/theology/comparative" },
      { name: "Sacred Text Analysis", href: "/resources/texts/analysis" }
    ]
  },
  {
    title: "Religious History & Culture",
    description: "Explore historical development and cultural impact of religions",
    resources: [
      { name: "Medieval Religious History", href: "/resources/history/medieval" },
      { name: "Religious Art & Architecture", href: "/resources/art" },
      { name: "Religious Music & Liturgy", href: "/resources/music" }
    ]
  },
  {
    title: "Advanced Sacred Texts",
    description: "Deeper analysis of religious texts and interpretative traditions",
    resources: [
      { name: "Hermeneutics", href: "/resources/texts/hermeneutics" },
      { name: "Textual Criticism", href: "/resources/texts/criticism" },
      { name: "Commentary Traditions", href: "/resources/texts/commentaries" }
    ]
  },
  {
    title: "Religious Practices & Spirituality",
    description: "Advanced study of religious practices and spiritual disciplines",
    resources: [
      { name: "Mystical Traditions", href: "/resources/spirituality/mysticism" },
      { name: "Contemplative Practices", href: "/resources/spirituality/contemplation" },
      { name: "Religious Rituals", href: "/resources/practices/advanced" }
    ]
  }
]

export default function IntermediatePathPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading 
        title="Intermediate Learning Path" 
        description="Deepen your understanding of religious traditions with advanced topics and comparative studies"
        className="mb-8"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {intermediateTopics.map((topic) => (
          <Card key={topic.title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{topic.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{topic.description}</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {topic.resources.map((resource) => (
                  <li key={resource.name}>
                    <Link
                      href={resource.href}
                      className="text-sm text-primary hover:underline"
                    >
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-8" />

      <div className="prose dark:prose-invert max-w-none">
        <h2>Study Approach</h2>
        <ul>
          <li>Focus on comparative analysis between different traditions</li>
          <li>Explore historical and cultural contexts in depth</li>
          <li>Study original languages when possible</li>
          <li>Engage with scholarly interpretations and commentaries</li>
        </ul>

        <h2>Research Methods</h2>
        <ul>
          <li>Use academic sources and peer-reviewed materials</li>
          <li>Practice critical analysis of religious texts</li>
          <li>Develop comparative frameworks for understanding</li>
          <li>Engage with multiple interpretative traditions</li>
        </ul>
      </div>
    </div>
  )
} 