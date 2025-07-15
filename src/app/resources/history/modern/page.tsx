import React from 'react'
import { Heading } from "@/components/ui/heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const modernPeriods = [
  {
    title: "Early Modern Period (1500-1800)",
    description: "Religious transformations during the Renaissance and Reformation",
    topics: [
      "Protestant Reformation",
      "Catholic Counter-Reformation",
      "Religious wars in Europe",
      "Global missionary movements"
    ]
  },
  {
    title: "19th Century",
    description: "Religious responses to modernization and secularization",
    topics: [
      "Rise of religious nationalism",
      "Impact of scientific revolution",
      "New religious movements",
      "Colonial impact on religion"
    ]
  },
  {
    title: "Early 20th Century",
    description: "Religion in an age of global conflict",
    topics: [
      "Religion and World Wars",
      "Religious responses to totalitarianism",
      "Fundamentalist movements",
      "Modernist religious thought"
    ]
  },
  {
    title: "Post-World War II Era",
    description: "Religious developments in the contemporary world",
    topics: [
      "Religious revival movements",
      "Liberation theology",
      "Interfaith dialogue",
      "Secularization debates"
    ]
  },
  {
    title: "Contemporary Religious Movements",
    description: "Recent developments and emerging trends",
    topics: [
      "New Age movements",
      "Religious environmentalism",
      "Digital religion",
      "Religious extremism"
    ]
  },
  {
    title: "Global Religious Trends",
    description: "Current patterns in world religions",
    topics: [
      "Religious demographics",
      "Migration and diaspora",
      "Religious pluralism",
      "Religion in public life"
    ]
  }
]

export default function ModernHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading 
        title="Modern Religious History" 
        description="Explore religious developments from the Reformation to the present day"
        className="mb-8"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modernPeriods.map((period) => (
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
        <h2>Research Methods in Modern Religious History</h2>
        <ul>
          <li>Analysis of modern historical documents</li>
          <li>Sociological and anthropological approaches</li>
          <li>Media and digital research methods</li>
          <li>Contemporary religious studies methodology</li>
        </ul>

        <h2>Key Resources</h2>
        <ul>
          <li>Historical documents and archives</li>
          <li>Sociological and demographic data</li>
          <li>Media and digital sources</li>
          <li>Contemporary religious publications</li>
        </ul>
      </div>
    </div>
  )
} 