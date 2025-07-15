import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Vedic Studies | Sacred Texts",
  description: "Comprehensive study of the Vedas, including their structure, historical context, interpretation methods, and contemporary relevance.",
  keywords: "vedic studies, vedas, rig veda, sama veda, yajur veda, atharva veda, vedic literature, vedic interpretation, vedic history, vedic philosophy, vedic manuscripts, vedic texts"
}

interface VedaSection {
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

const vedaSections: VedaSection[] = [
  {
    title: "Samhitas",
    description: "The core Vedic texts containing hymns, prayers, and mantras.",
    content: {
      structure: [
        "Rig Veda",
        "Sama Veda",
        "Yajur Veda",
        "Atharva Veda"
      ],
      historical_context: [
        "Indo-Aryan migration",
        "Vedic period",
        "Oral transmission",
        "Written compilation"
      ],
      interpretation_methods: [
        "Philological analysis",
        "Historical criticism",
        "Ritual study",
        "Comparative approach"
      ],
      key_themes: [
        "Deity worship",
        "Sacrifice",
        "Cosmology",
        "Ethics",
        "Philosophy"
      ],
      resources: {
        primary_sources: [
          "Sanskrit manuscripts",
          "Ancient commentaries",
          "Archaeological evidence",
          "Oral traditions"
        ],
        secondary_sources: [
          "Philological studies",
          "Historical research",
          "Philosophical works",
          "Cultural studies"
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
    title: "Brahmanas",
    description: "The ritual and theological commentaries on the Samhitas.",
    content: {
      structure: [
        "Aitareya Brahmana",
        "Shatapatha Brahmana",
        "Gopatha Brahmana",
        "Other Brahmanas"
      ],
      historical_context: [
        "Vedic ritual development",
        "Priestly traditions",
        "Social organization",
        "Cultural evolution"
      ],
      interpretation_methods: [
        "Ritual analysis",
        "Symbolic interpretation",
        "Historical study",
        "Comparative approach"
      ],
      key_themes: [
        "Ritual procedures",
        "Sacrificial symbolism",
        "Priestly duties",
        "Cosmic order",
        "Social structure"
      ],
      resources: {
        primary_sources: [
          "Sanskrit texts",
          "Ancient commentaries",
          "Archaeological findings",
          "Ritual manuals"
        ],
        secondary_sources: [
          "Ritual studies",
          "Historical research",
          "Cultural analyses",
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
    title: "Aranyakas and Upanishads",
    description: "The philosophical and mystical texts that explore the nature of reality and self.",
    content: {
      structure: [
        "Major Aranyakas",
        "Principal Upanishads",
        "Later Upanishads",
        "Commentaries"
      ],
      historical_context: [
        "Philosophical development",
        "Forest traditions",
        "Mystical movements",
        "Cultural transformation"
      ],
      interpretation_methods: [
        "Philosophical analysis",
        "Mystical interpretation",
        "Historical criticism",
        "Comparative study"
      ],
      key_themes: [
        "Brahman",
        "Atman",
        "Karma",
        "Moksha",
        "Meditation"
      ],
      resources: {
        primary_sources: [
          "Sanskrit manuscripts",
          "Ancient commentaries",
          "Philosophical texts",
          "Mystical writings"
        ],
        secondary_sources: [
          "Philosophical studies",
          "Historical research",
          "Cultural analyses",
          "Comparative works"
        ],
        multimedia: [
          "Digital archives",
          "Virtual exhibitions",
          "Documentary films",
          "Interactive resources"
        ]
      }
    }
  }
]

export default function VedaStudyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Vedic Studies</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive study of the Vedas, including their structure, historical context, interpretation methods, and contemporary relevance.
        </p>
      </div>

      <div className="space-y-8">
        {vedaSections.map((section) => (
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
          <Link href="/studies/texts/sutras">
            <Card className="hover:bg-accent transition-colors">
              <CardHeader>
                <CardTitle>Buddhist Sutras</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the Buddhist scriptures and their interpretation.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/studies/texts/quran">
            <Card className="hover:bg-accent transition-colors">
              <CardHeader>
                <CardTitle>Quran Studies</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Study the Islamic holy book and its interpretation.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
} 