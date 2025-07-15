import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Origins of Religion | Religious History",
  description: "Explore the earliest developments of religious traditions, from prehistoric spirituality to the emergence of organized religions.",
  keywords: "religious origins, prehistoric religion, ancient spirituality, religious evolution, early religious practices, religious anthropology, religious archaeology, religious history, religious development, religious traditions"
}

interface OriginPeriod {
  title: string
  timeframe: string
  description: string
  key_developments: string[]
  archaeological_evidence: string[]
  cultural_impact: string[]
  resources: {
    primary_sources: string[]
    secondary_sources: string[]
    multimedia: string[]
  }
}

const originPeriods: OriginPeriod[] = [
  {
    title: "Prehistoric Spirituality",
    timeframe: "100,000 BCE - 10,000 BCE",
    description: "The earliest evidence of human spiritual and religious practices, including burial rituals, cave art, and symbolic expression.",
    key_developments: [
      "Development of burial practices",
      "Creation of cave art and symbolism",
      "Emergence of ritual behavior",
      "Formation of spiritual beliefs"
    ],
    archaeological_evidence: [
      "Neanderthal burial sites",
      "Paleolithic cave paintings",
      "Venus figurines",
      "Early ritual objects"
    ],
    cultural_impact: [
      "Social organization",
      "Artistic expression",
      "Ritual practices",
      "Belief systems"
    ],
    resources: {
      primary_sources: [
        "Archaeological findings",
        "Cave art documentation",
        "Burial site evidence",
        "Artifact analysis"
      ],
      secondary_sources: [
        "Anthropological studies",
        "Archaeological reports",
        "Historical analyses",
        "Cultural research"
      ],
      multimedia: [
        "Virtual cave tours",
        "Documentary films",
        "Interactive timelines",
        "Museum collections"
      ]
    }
  },
  {
    title: "Early Agricultural Religions",
    timeframe: "10,000 BCE - 3,000 BCE",
    description: "The development of religious practices alongside agricultural societies, including fertility cults and nature worship.",
    key_developments: [
      "Agricultural rituals",
      "Fertility cults",
      "Nature worship",
      "Temple construction"
    ],
    archaeological_evidence: [
      "Göbekli Tepe",
      "Çatalhöyük",
      "Early temples",
      "Agricultural artifacts"
    ],
    cultural_impact: [
      "Agricultural practices",
      "Social organization",
      "Artistic traditions",
      "Religious architecture"
    ],
    resources: {
      primary_sources: [
        "Archaeological sites",
        "Early religious artifacts",
        "Agricultural tools",
        "Temple remains"
      ],
      secondary_sources: [
        "Archaeological studies",
        "Historical analyses",
        "Cultural research",
        "Anthropological reports"
      ],
      multimedia: [
        "Site reconstructions",
        "Documentary films",
        "Virtual tours",
        "Interactive exhibits"
      ]
    }
  },
  {
    title: "Emergence of Organized Religions",
    timeframe: "3,000 BCE - 1,000 BCE",
    description: "The rise of early organized religions with written scriptures, formal institutions, and systematic beliefs.",
    key_developments: [
      "Written scriptures",
      "Religious institutions",
      "Systematic theology",
      "Priestly classes"
    ],
    archaeological_evidence: [
      "Early temples",
      "Written records",
      "Religious artifacts",
      "Burial practices"
    ],
    cultural_impact: [
      "Legal systems",
      "Social hierarchy",
      "Educational institutions",
      "Artistic traditions"
    ],
    resources: {
      primary_sources: [
        "Ancient texts",
        "Archaeological findings",
        "Historical records",
        "Religious artifacts"
      ],
      secondary_sources: [
        "Academic research",
        "Historical analyses",
        "Archaeological reports",
        "Cultural studies"
      ],
      multimedia: [
        "Digital archives",
        "Virtual reconstructions",
        "Documentary films",
        "Interactive timelines"
      ]
    }
  }
]

export default function ReligiousOriginsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Origins of Religion</h1>
        <p className="text-xl text-muted-foreground">
          Explore the earliest developments of religious traditions, from prehistoric spirituality to the emergence of organized religions.
        </p>
      </div>

      <div className="space-y-8">
        {originPeriods.map((period) => (
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
                  <h3 className="text-lg font-semibold mb-3">Archaeological Evidence</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {period.archaeological_evidence.map((item) => (
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
          <Link href="/resources/history/development">
            <Card className="hover:bg-accent transition-colors">
              <CardHeader>
                <CardTitle>Religious Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore how religions evolved and developed after their initial formation.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/resources/history/ancient">
            <Card className="hover:bg-accent transition-colors">
              <CardHeader>
                <CardTitle>Ancient Religions</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the major religious traditions of the ancient world.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
} 