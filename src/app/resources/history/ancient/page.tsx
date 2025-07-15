import { Heading } from "@/components/ui/heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const ancientPeriods = [
  {
    title: "Prehistoric Religion",
    description: "Early religious practices and beliefs (before 3000 BCE)",
    topics: [
      "Cave art and religious symbolism",
      "Burial practices and afterlife beliefs",
      "Early ritual sites and structures",
      "Goddess worship and fertility cults"
    ]
  },
  {
    title: "Ancient Mesopotamia",
    description: "Religious traditions of Sumer, Babylon, and Assyria (3000-539 BCE)",
    topics: [
      "Sumerian pantheon and mythology",
      "Babylonian religious texts",
      "Temple architecture and priesthood",
      "Creation myths and epic literature"
    ]
  },
  {
    title: "Ancient Egypt",
    description: "Egyptian religious traditions and practices (3000-30 BCE)",
    topics: [
      "Egyptian pantheon and mythology",
      "Pyramid texts and Book of the Dead",
      "Temple complexes and priesthood",
      "Pharaonic religion and divine kingship"
    ]
  },
  {
    title: "Ancient India",
    description: "Early Indian religious traditions (1500-500 BCE)",
    topics: [
      "Vedic religion and rituals",
      "Early Upanishadic philosophy",
      "Development of Brahmanism",
      "Origins of Buddhism and Jainism"
    ]
  },
  {
    title: "Ancient China",
    description: "Early Chinese religious traditions (2000-221 BCE)",
    topics: [
      "Oracle bone divination",
      "Ancestor worship",
      "Development of Confucianism",
      "Early Daoist traditions"
    ]
  },
  {
    title: "Ancient Greece",
    description: "Greek religious traditions and mythology (800-146 BCE)",
    topics: [
      "Greek pantheon and mythology",
      "Mystery cults and oracles",
      "Temple architecture and festivals",
      "Philosophical approaches to religion"
    ]
  }
]

export default function AncientHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading 
        title="Ancient Religious History" 
        description="Explore the foundations of human religious thought and practice from prehistory through classical antiquity"
        className="mb-8"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ancientPeriods.map((period) => (
          <Card key={period.title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{period.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{period.description}</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                {period.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-8" />

      <div className="prose dark:prose-invert max-w-none">
        <h2>Research Methods in Ancient Religious History</h2>
        <ul>
          <li>Archaeological evidence interpretation</li>
          <li>Analysis of primary textual sources</li>
          <li>Comparative mythology and religious studies</li>
          <li>Historical linguistics and philology</li>
        </ul>

        <h2>Key Resources</h2>
        <ul>
          <li>Archaeological reports and findings</li>
          <li>Ancient texts and inscriptions</li>
          <li>Material culture and artifacts</li>
          <li>Contemporary scholarly research</li>
        </ul>
      </div>
    </div>
  )
} 