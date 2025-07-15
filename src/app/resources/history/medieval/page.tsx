import { Heading } from "@/components/ui/heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const medievalPeriods = [
  {
    title: "Early Middle Ages (500-1000 CE)",
    description: "The transformation of religious traditions after the fall of Rome",
    topics: [
      "Rise of monasticism in Europe",
      "Islamic expansion and early Islamic civilization",
      "Byzantine Christianity",
      "Celtic and Germanic Christianity"
    ]
  },
  {
    title: "High Middle Ages (1000-1300 CE)",
    description: "The peak of medieval religious institutions and thought",
    topics: [
      "Crusades and religious warfare",
      "Scholasticism and universities",
      "Gothic cathedral architecture",
      "Religious orders and monasticism"
    ]
  },
  {
    title: "Late Middle Ages (1300-1500 CE)",
    description: "Religious developments leading to the early modern period",
    topics: [
      "Religious reform movements",
      "Mysticism and devotional practices",
      "Impact of the Black Death",
      "Early Renaissance humanism"
    ]
  },
  {
    title: "Medieval Islamic World",
    description: "Religious and intellectual developments in Islamic societies",
    topics: [
      "Islamic philosophy and theology",
      "Sufi mysticism",
      "Islamic science and medicine",
      "Art and architecture in Islamic lands"
    ]
  },
  {
    title: "Medieval Judaism",
    description: "Jewish communities and thought in medieval times",
    topics: [
      "Jewish philosophy and mysticism",
      "Jewish-Christian-Muslim relations",
      "Jewish communities in Europe",
      "Development of Jewish law"
    ]
  },
  {
    title: "Asian Religious Traditions",
    description: "Medieval developments in Asian religions",
    topics: [
      "Buddhism in East Asia",
      "Hindu temple traditions",
      "Rise of Tibetan Buddhism",
      "Neo-Confucianism"
    ]
  }
]

export default function MedievalHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading 
        title="Medieval Religious History" 
        description="Explore the development of religious traditions during the Middle Ages across different civilizations"
        className="mb-8"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {medievalPeriods.map((period) => (
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
        <h2>Research Methods in Medieval Religious History</h2>
        <ul>
          <li>Analysis of medieval manuscripts and documents</li>
          <li>Study of religious art and architecture</li>
          <li>Investigation of religious institutions</li>
          <li>Examination of theological developments</li>
        </ul>

        <h2>Key Resources</h2>
        <ul>
          <li>Medieval religious texts and manuscripts</li>
          <li>Archaeological evidence from religious sites</li>
          <li>Art historical sources</li>
          <li>Contemporary scholarly research</li>
        </ul>
      </div>
    </div>
  )
} 