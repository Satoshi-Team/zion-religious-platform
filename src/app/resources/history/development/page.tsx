import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Development | Religious History",
  description: "Explore how religions evolved and developed after their initial formation, from the spread of major traditions to modern religious movements.",
  keywords: "religious development, religious evolution, religious history, religious movements, religious reform, religious adaptation, religious change, religious traditions, religious institutions, religious practices"
}

interface DevelopmentPeriod {
  title: string
  timeframe: string
  description: string
  key_developments: string[]
  major_traditions: string[]
  cultural_impact: string[]
  resources: {
    primary_sources: string[]
    secondary_sources: string[]
    multimedia: string[]
  }
}

const developmentPeriods: DevelopmentPeriod[] = [
  {
    title: "Classical Period",
    timeframe: "1,000 BCE - 500 CE",
    description: "The establishment and spread of major religious traditions, including the development of systematic theology and religious institutions.",
    key_developments: [
      "Formation of major religious traditions",
      "Development of systematic theology",
      "Establishment of religious institutions",
      "Creation of religious literature"
    ],
    major_traditions: [
      "Hinduism",
      "Buddhism",
      "Judaism",
      "Christianity",
      "Zoroastrianism"
    ],
    cultural_impact: [
      "Philosophical systems",
      "Legal frameworks",
      "Educational institutions",
      "Artistic traditions"
    ],
    resources: {
      primary_sources: [
        "Religious texts",
        "Historical records",
        "Archaeological findings",
        "Artistic works"
      ],
      secondary_sources: [
        "Historical analyses",
        "Theological studies",
        "Cultural research",
        "Archaeological reports"
      ],
      multimedia: [
        "Digital archives",
        "Virtual tours",
        "Documentary films",
        "Interactive timelines"
      ]
    }
  },
  {
    title: "Medieval Period",
    timeframe: "500 CE - 1500 CE",
    description: "The consolidation and expansion of religious traditions, including the development of religious art, architecture, and scholarship.",
    key_developments: [
      "Religious art and architecture",
      "Scholastic theology",
      "Monastic traditions",
      "Religious education"
    ],
    major_traditions: [
      "Christianity",
      "Islam",
      "Hinduism",
      "Buddhism",
      "Judaism"
    ],
    cultural_impact: [
      "Architectural styles",
      "Educational systems",
      "Social organization",
      "Cultural exchange"
    ],
    resources: {
      primary_sources: [
        "Medieval texts",
        "Artistic works",
        "Architectural remains",
        "Historical records"
      ],
      secondary_sources: [
        "Historical studies",
        "Art historical research",
        "Cultural analyses",
        "Archaeological reports"
      ],
      multimedia: [
        "Virtual tours",
        "Documentary films",
        "Digital archives",
        "Interactive exhibits"
      ]
    }
  },
  {
    title: "Early Modern Period",
    timeframe: "1500 CE - 1800 CE",
    description: "The transformation of religious traditions through reform movements, colonial expansion, and intellectual developments.",
    key_developments: [
      "Religious reform movements",
      "Colonial expansion",
      "Intellectual developments",
      "Religious pluralism"
    ],
    major_traditions: [
      "Protestant Christianity",
      "Catholic Christianity",
      "Islam",
      "Hinduism",
      "Buddhism"
    ],
    cultural_impact: [
      "Social reform",
      "Political systems",
      "Cultural exchange",
      "Intellectual traditions"
    ],
    resources: {
      primary_sources: [
        "Reform texts",
        "Historical records",
        "Artistic works",
        "Travel accounts"
      ],
      secondary_sources: [
        "Historical analyses",
        "Reform studies",
        "Cultural research",
        "Colonial studies"
      ],
      multimedia: [
        "Digital archives",
        "Virtual exhibitions",
        "Documentary films",
        "Interactive timelines"
      ]
    }
  },
  {
    title: "Modern Period",
    timeframe: "1800 CE - Present",
    description: "The adaptation of religious traditions to modern challenges, including secularization, globalization, and new religious movements.",
    key_developments: [
      "Modern religious movements",
      "Global religious trends",
      "Interfaith dialogue",
      "Religious adaptation"
    ],
    major_traditions: [
      "All major world religions",
      "New religious movements",
      "Secular spirituality",
      "Interfaith initiatives"
    ],
    cultural_impact: [
      "Global culture",
      "Social movements",
      "Political systems",
      "Technological adaptation"
    ],
    resources: {
      primary_sources: [
        "Contemporary texts",
        "Historical records",
        "Media sources",
        "Digital archives"
      ],
      secondary_sources: [
        "Sociological studies",
        "Historical analyses",
        "Cultural research",
        "Global studies"
      ],
      multimedia: [
        "Digital resources",
        "Online archives",
        "Documentary films",
        "Interactive platforms"
      ]
    }
  }
]

export default function ReligiousDevelopmentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Religious Development</h1>
        <p className="text-xl text-muted-foreground">
          Explore how religions evolved and developed after their initial formation, from the spread of major traditions to modern religious movements.
        </p>
      </div>

      <div className="space-y-8">
        {developmentPeriods.map((period) => (
          <Card key={period.title}>
            <CardHeader>
              <CardTitle>{period.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{period.timeframe}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg">{period.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Developments</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {period.key_developments.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Major Traditions</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {period.major_traditions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Cultural Impact</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {period.cultural_impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Available Resources</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Primary Sources</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      {period.resources.primary_sources.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Secondary Sources</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      {period.resources.secondary_sources.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Multimedia</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      {period.resources.multimedia.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Related Topics</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/resources/history/origins">
            <Card className="hover:bg-accent transition-colors">
              <CardHeader>
                <CardTitle>Religious Origins</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the earliest developments of religious traditions.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/resources/history/modern">
            <Card className="hover:bg-accent transition-colors">
              <CardHeader>
                <CardTitle>Modern Religious History</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about contemporary religious developments and trends.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
} 