import { Heading } from "@/components/ui/heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const advancedTopics = [
  {
    title: "Religious Philosophy",
    description: "Advanced exploration of religious philosophical concepts and theories",
    resources: [
      { name: "Metaphysics", href: "/resources/philosophy/metaphysics" },
      { name: "Epistemology", href: "/resources/philosophy/epistemology" },
      { name: "Ethics", href: "/resources/philosophy/ethics" }
    ]
  },
  {
    title: "Advanced Textual Studies",
    description: "In-depth analysis and interpretation of religious texts",
    resources: [
      { name: "Hermeneutics", href: "/resources/texts/hermeneutics" },
      { name: "Critical Methods", href: "/resources/texts/critical-methods" },
      { name: "Manuscript Studies", href: "/resources/texts/manuscripts" }
    ]
  },
  {
    title: "Contemporary Issues",
    description: "Analysis of modern religious challenges and developments",
    resources: [
      { name: "Science and Religion", href: "/resources/contemporary/science" },
      { name: "Religious Pluralism", href: "/resources/contemporary/pluralism" },
      { name: "Modern Ethics", href: "/resources/contemporary/ethics" }
    ]
  },
  {
    title: "Research Methods",
    description: "Advanced research methodologies in religious studies",
    resources: [
      { name: "Academic Research", href: "/resources/research/methods" },
      { name: "Field Studies", href: "/resources/research/field" },
      { name: "Data Analysis", href: "/resources/research/data" }
    ]
  }
]

export default function AdvancedPathPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading 
        title="Advanced Learning Path" 
        description="Explore complex religious topics and engage in scholarly research"
        className="mb-8"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {advancedTopics.map((topic) => (
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
        <h2>Research Approach</h2>
        <ul>
          <li>Engage with primary sources and original languages</li>
          <li>Apply critical analysis and research methodologies</li>
          <li>Contribute to academic discourse</li>
          <li>Develop original research projects</li>
        </ul>

        <h2>Academic Skills</h2>
        <ul>
          <li>Advanced research methodology</li>
          <li>Critical analysis and interpretation</li>
          <li>Academic writing and publication</li>
          <li>Interdisciplinary approaches</li>
        </ul>
      </div>
    </div>
  )
} 