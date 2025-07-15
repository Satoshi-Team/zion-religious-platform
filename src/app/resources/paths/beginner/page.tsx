import { Heading } from "@/components/ui/heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const beginnerTopics = [
  {
    title: "Introduction to World Religions",
    description: "Basic overview of major world religions and their core beliefs",
    resources: [
      { name: "Basic Religious Concepts", href: "/resources/concepts/basic" },
      { name: "Sacred Texts Overview", href: "/resources/texts" },
      { name: "Religious Practices Guide", href: "/resources/practices/basic" }
    ]
  },
  {
    title: "Sacred Texts Fundamentals",
    description: "Introduction to reading and understanding sacred texts",
    resources: [
      { name: "Bible Basics", href: "/resources/texts/bible" },
      { name: "Quran Introduction", href: "/resources/texts/quran" },
      { name: "Buddhist Texts Overview", href: "/resources/texts/buddhist" }
    ]
  },
  {
    title: "Religious Practices",
    description: "Understanding basic religious practices and rituals",
    resources: [
      { name: "Prayer and Meditation", href: "/meditation" },
      { name: "Religious Festivals", href: "/resources/festivals" },
      { name: "Sacred Spaces", href: "/resources/places" }
    ]
  },
  {
    title: "Religious History",
    description: "Basic historical context of religious development",
    resources: [
      { name: "Origins of Religion", href: "/resources/history/origins" },
      { name: "Major Religious Events", href: "/resources/history/events" },
      { name: "Religious Movements", href: "/resources/history/movements" }
    ]
  }
]

export default function BeginnerPathPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Heading 
        title="Beginner's Learning Path" 
        description="Start your journey of understanding world religions with these foundational resources"
        className="mb-8"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {beginnerTopics.map((topic) => (
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
        <h2>Getting Started</h2>
        <ul>
          <li>Begin with the Introduction to World Religions section</li>
          <li>Explore basic religious concepts and terminology</li>
          <li>Learn about fundamental religious practices</li>
          <li>Study the historical context of major religions</li>
        </ul>

        <h2>Study Tips</h2>
        <ul>
          <li>Take your time with each topic</li>
          <li>Focus on understanding basic concepts before moving forward</li>
          <li>Practice regular reflection and note-taking</li>
          <li>Join study groups or find a mentor if possible</li>
        </ul>
      </div>
    </div>
  )
} 