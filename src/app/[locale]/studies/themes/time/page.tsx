import React from 'react'
import { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { Shell } from "@/components/shells/shell"

export const metadata: Metadata = {
  title: "Time in Religious Studies | Sacred Time and Temporality",
  description: "Explore concepts of time, eternity, and temporality in religious traditions. Study sacred calendars, cyclical time, linear time, and eschatological perspectives.",
  openGraph: {
    title: "Time in Religious Studies | Sacred Time and Temporality",
    description: "Explore concepts of time, eternity, and temporality in religious traditions. Study sacred calendars, cyclical time, linear time, and eschatological perspectives.",
    type: "website",
    images: [{ url: "/images/og/studies-themes-time.jpg" }],
  },
  keywords: [
    "sacred time",
    "religious temporality",
    "eternal time",
    "sacred calendars",
    "cyclical time",
    "linear time",
    "eschatology",
    "religious history",
    "divine eternity",
    "temporal concepts"
  ]
}

interface TimeThemeCategory {
  title: string
  description: string
  path: string
}

const timeCategories: TimeThemeCategory[] = [
  {
    title: "Sacred Calendars",
    description: "Study religious calendars, holy days, and sacred timing",
    path: "/studies/themes/time/calendars"
  },
  {
    title: "Eternity and Time",
    description: "Explore concepts of eternity, timelessness, and divine time",
    path: "/studies/themes/time/eternity"
  },
  {
    title: "Historical Time",
    description: "Learn about religious perspectives on history and time",
    path: "/studies/themes/time/historical"
  },
  {
    title: "Eschatology",
    description: "Study end-time beliefs and future perspectives",
    path: "/studies/themes/time/eschatology"
  }
]

export default function TimeThemePage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8">
        <Heading
          title="Time in Religious Studies"
          description="Explore concepts of time and temporality across religious traditions"
          className="mb-8"
        />
        
        <div className="grid gap-6 md:grid-cols-2">
          {timeCategories.map((category) => (
            <Card key={category.path} className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{category.title}</h2>
              <p className="text-muted-foreground mb-4">{category.description}</p>
              <a 
                href={category.path}
                className="text-primary hover:underline"
              >
                Explore {category.title} →
              </a>
            </Card>
          ))}
        </div>
      </div>
    </Shell>
  )
} 