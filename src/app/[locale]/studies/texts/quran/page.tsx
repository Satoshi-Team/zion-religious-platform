import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Quran Studies | Sacred Texts",
  description: "Comprehensive study of the Quran, including its structure, historical context, interpretation methods, and contemporary relevance.",
  keywords: "quran studies, quran, islamic scripture, quranic interpretation, quranic history, quranic manuscripts, quranic themes, quranic studies, islamic texts, quranic commentary"
}

interface QuranSection {
  title: string
  description: string
  content: {
    structure: string[]
    historical_context: string[]
    interpretation_methods: string[]
    key_themes: string[]
    resources: {
      primary_sources: string[]
      secondary_sources: string[]
      multimedia: string[]
    }
  }
}

const quranSections: QuranSection[] = [
  {
    title: "Structure and Organization",
    description: "The composition and arrangement of the Quranic text.",
    content: {
      structure: [
        "114 Surahs",
        "Meccan and Medinan revelations",
        "Chronological order",
        "Thematic organization"
      ],
      historical_context: [
        "Revelation period",
        "Oral transmission",
        "Written compilation",
        "Standardization"
      ],
      interpretation_methods: [
        "Tafsir tradition",
        "Historical criticism",
        "Literary analysis",
        "Contextual study"
      ],
      key_themes: [
        "Monotheism",
        "Prophethood",
        "Divine guidance",
        "Human responsibility",
        "Eschatology"
      ],
      resources: {
        primary_sources: [
          "Quranic manuscripts",
          "Early tafsir works",
          "Hadith collections",
          "Historical records"
        ],
        secondary_sources: [
          "Modern tafsir",
          "Historical research",
          "Literary studies",
          "Cultural analyses"
        ],
        multimedia: [
          "Digital archives",
          "Virtual libraries",
          "Documentary films",
          "Interactive resources"
        ]
      }
    }
  },
  {
    title: "Interpretation and Commentary",
    description: "The various methods and traditions of Quranic interpretation.",
    content: {
      structure: [
        "Classical tafsir",
        "Modern interpretation",
        "Specialized studies",
        "Comparative approaches"
      ],
      historical_context: [
        "Early interpretation",
        "Development of tafsir",
        "Modern approaches",
        "Contemporary debates"
      ],
      interpretation_methods: [
        "Textual analysis",
        "Historical context",
        "Linguistic study",
        "Thematic approach"
      ],
      key_themes: [
        "Hermeneutics",
        "Contextualization",
        "Modern relevance",
        "Cross-cultural understanding",
        "Contemporary application"
      ],
      resources: {
        primary_sources: [
          "Classical tafsir works",
          "Modern commentaries",
          "Academic studies",
          "Historical documents"
        ],
        secondary_sources: [
          "Critical analyses",
          "Comparative studies",
          "Cultural research",
          "Sociological works"
        ],
        multimedia: [
          "Digital collections",
          "Virtual exhibitions",
          "Documentary films",
          "Interactive tools"
        ]
      }
    }
  },
  {
    title: "Contemporary Study and Application",
    description: "Modern approaches to understanding and applying Quranic teachings.",
    content: {
      structure: [
        "Academic study",
        "Religious education",
        "Interfaith dialogue",
        "Contemporary issues"
      ],
      historical_context: [
        "Modern scholarship",
        "Global perspectives",
        "Cultural adaptation",
        "Social relevance"
      ],
      interpretation_methods: [
        "Modern hermeneutics",
        "Contextual analysis",
        "Interdisciplinary study",
        "Comparative religion"
      ],
      key_themes: [
        "Social justice",
        "Ethics",
        "Science",
        "Gender",
        "Environment"
      ],
      resources: {
        primary_sources: [
          "Modern translations",
          "Contemporary tafsir",
          "Academic research",
          "Digital resources"
        ],
        secondary_sources: [
          "Critical studies",
          "Social research",
          "Cultural analyses",
          "Interdisciplinary works"
        ],
        multimedia: [
          "Online courses",
          "Digital libraries",
          "Documentary films",
          "Interactive platforms"
        ]
      }
    }
  }
]

export default function QuranStudyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Quran Studies</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive study of the Quran, including its structure, historical context, interpretation methods, and contemporary relevance.
        </p>
      </div>

      <div className="space-y-8">
        {quranSections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg">{section.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Structure</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {section.content.structure.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Historical Context</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {section.content.historical_context.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Interpretation Methods</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {section.content.interpretation_methods.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Themes</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {section.content.key_themes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Available Resources</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Primary Sources</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      {section.content.resources.primary_sources.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Secondary Sources</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      {section.content.resources.secondary_sources.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Multimedia</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      {section.content.resources.multimedia.map((item) => (
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
          <Link href="/studies/texts/vedas">
            <Card className="hover:bg-accent transition-colors">
              <CardHeader>
                <CardTitle>Vedic Studies</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the ancient Vedic scriptures and their interpretation.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/studies/texts/sutras">
            <Card className="hover:bg-accent transition-colors">
              <CardHeader>
                <CardTitle>Buddhist Sutras</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Study the Buddhist scriptures and their interpretation.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
} 