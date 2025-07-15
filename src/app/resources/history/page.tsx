import React from 'react'
import { Heading } from "@/components/ui/heading"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HistoricalPeriod {
  title: string
  timeframe: string
  description: string
  key_developments: string[]
  religious_movements: string[]
  cultural_impact: string[]
  resources: {
    primary_sources: string[]
    secondary_sources: string[]
    multimedia: string[]
  }
  href: string
}

const historicalPeriods: HistoricalPeriod[] = [
  {
    title: "Ancient Period",
    timeframe: "3000 BCE - 500 CE",
    description: "The formation and early development of major religious traditions.",
    key_developments: [
      "Rise of monotheistic religions",
      "Development of written scriptures",
      "Establishment of religious institutions",
      "Formation of theological doctrines"
    ],
    religious_movements: [
      "Early Judaism",
      "Early Christianity",
      "Early Buddhism",
      "Vedic Religion"
    ],
    cultural_impact: [
      "Art and architecture",
      "Legal systems",
      "Social structures",
      "Educational institutions"
    ],
    resources: {
      primary_sources: [
        "Ancient religious texts",
        "Archaeological findings",
        "Historical inscriptions"
      ],
      secondary_sources: [
        "Academic research papers",
        "Historical analyses",
        "Archaeological reports"
      ],
      multimedia: [
        "Documentary films",
        "Virtual tours",
        "Interactive timelines"
      ]
    },
    href: "/resources/history/ancient"
  },
  {
    title: "Medieval Period",
    timeframe: "500 CE - 1500 CE",
    description: "Religious development and interaction during the middle ages.",
    key_developments: [
      "Islamic expansion",
      "Christian monasticism",
      "Buddhist spread to East Asia",
      "Hindu temple traditions"
    ],
    religious_movements: [
      "Islamic Golden Age",
      "Christian Crusades",
      "Buddhist Mahayana",
      "Bhakti Movement"
    ],
    cultural_impact: [
      "Religious architecture",
      "Literary traditions",
      "Educational systems",
      "Artistic developments"
    ],
    resources: {
      primary_sources: [
        "Medieval manuscripts",
        "Religious artifacts",
        "Historical documents"
      ],
      secondary_sources: [
        "Academic studies",
        "Historical analyses",
        "Cultural research"
      ],
      multimedia: [
        "Historical documentaries",
        "Digital reconstructions",
        "Museum collections"
      ]
    },
    href: "/resources/history/medieval"
  },
  {
    title: "Modern Period",
    timeframe: "1500 CE - Present",
    description: "Religious transformation in the modern world.",
    key_developments: [
      "Religious reformation",
      "Secularization",
      "Interfaith dialogue",
      "Religious pluralism"
    ],
    religious_movements: [
      "Protestant Reformation",
      "Islamic Reform",
      "Buddhist Modernism",
      "Hindu Renaissance"
    ],
    cultural_impact: [
      "Global religious diversity",
      "Interfaith initiatives",
      "Religious freedom",
      "Modern spirituality"
    ],
    resources: {
      primary_sources: [
        "Modern religious texts",
        "Contemporary documents",
        "Digital archives"
      ],
      secondary_sources: [
        "Academic research",
        "Sociological studies",
        "Religious surveys"
      ],
      multimedia: [
        "Online courses",
        "Video lectures",
        "Digital resources"
      ]
    },
    href: "/resources/history/modern"
  }
]

export default function ReligiousHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading 
        title="Religious History" 
        description="Explore the historical development of religious traditions through different periods"
        className="mb-8"
      />
      
      <div className="grid gap-6 md:grid-cols-2">
        {historicalPeriods.map((period) => (
          <Card key={period.title} className="p-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold">{period.title}</h2>
              <p className="text-sm text-muted-foreground">{period.timeframe}</p>
            </div>
            
            <p className="text-muted-foreground mb-4">{period.description}</p>
            
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Key Developments:</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {period.key_developments.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Religious Movements:</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {period.religious_movements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Cultural Impact:</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {period.cultural_impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Available Resources:</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-xs font-medium mb-1">Primary Sources</h4>
                    <ul className="list-disc list-inside text-xs text-muted-foreground">
                      {period.resources.primary_sources.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium mb-1">Secondary Sources</h4>
                    <ul className="list-disc list-inside text-xs text-muted-foreground">
                      {period.resources.secondary_sources.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium mb-1">Multimedia</h4>
                    <ul className="list-disc list-inside text-xs text-muted-foreground">
                      {period.resources.multimedia.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Button asChild>
              <Link href={period.href}>Explore Period</Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
} 