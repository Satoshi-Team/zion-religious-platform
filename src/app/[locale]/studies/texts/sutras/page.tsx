import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Buddhist Sutras | Sacred Texts",
  description: "Comprehensive study of Buddhist sutras, including their structure, historical context, interpretation methods, and contemporary relevance.",
  keywords: "buddhist sutras, pali canon, mahayana sutras, buddhist texts, buddhist literature, buddhist interpretation, buddhist history, buddhist philosophy, buddhist manuscripts, buddhist studies"
}

interface SutraSection {
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

const sutraSections: SutraSection[] = [
  {
    title: "Pali Canon",
    description: "The earliest collection of Buddhist texts, preserved in the Pali language and forming the foundation of Theravada Buddhism.",
    content: {
      structure: [
        "Vinaya Pitaka",
        "Sutta Pitaka",
        "Abhidhamma Pitaka",
        "Commentaries"
      ],
      historical_context: [
        "Early Buddhism",
        "First Buddhist Council",
        "Oral transmission",
        "Written compilation"
      ],
      interpretation_methods: [
        "Traditional exegesis",
        "Historical analysis",
        "Philological study",
        "Comparative approach"
      ],
      key_themes: [
        "Four Noble Truths",
        "Eightfold Path",
        "Dependent Origination",
        "Karma and Rebirth",
        "Meditation practices"
      ],
      resources: {
        primary_sources: [
          "Pali manuscripts",
          "Ancient commentaries",
          "Early translations",
          "Archaeological evidence"
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
    title: "Mahayana Sutras",
    description: "The later Buddhist texts that developed the Mahayana tradition, emphasizing compassion and wisdom.",
    content: {
      structure: [
        "Prajna Paramita Sutras",
        "Pure Land Sutras",
        "Lotus Sutra",
        "Avatamsaka Sutra",
        "Vimalakirti Sutra"
      ],
      historical_context: [
        "Mahayana emergence",
        "Silk Road transmission",
        "Cultural adaptation",
        "Regional development"
      ],
      interpretation_methods: [
        "Philosophical analysis",
        "Symbolic interpretation",
        "Historical criticism",
        "Comparative study"
      ],
      key_themes: [
        "Emptiness",
        "Bodhisattva ideal",
        "Buddha nature",
        "Skillful means",
        "Pure Land"
      ],
      resources: {
        primary_sources: [
          "Sanskrit manuscripts",
          "Chinese translations",
          "Tibetan versions",
          "Archaeological findings"
        ],
        secondary_sources: [
          "Philosophical studies",
          "Historical research",
          "Cultural analyses",
          "Art historical works"
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
    title: "Vajrayana Texts",
    description: "The esoteric Buddhist texts that form the foundation of Vajrayana Buddhism.",
    content: {
      structure: [
        "Tantras",
        "Dharani texts",
        "Sadhanas",
        "Commentaries",
        "Terma texts"
      ],
      historical_context: [
        "Tantric Buddhism",
        "Tibetan transmission",
        "Indian influence",
        "Regional development"
      ],
      interpretation_methods: [
        "Esoteric analysis",
        "Symbolic interpretation",
        "Ritual study",
        "Comparative approach"
      ],
      key_themes: [
        "Deity yoga",
        "Mantra practice",
        "Mandala visualization",
        "Guru devotion",
        "Enlightenment"
      ],
      resources: {
        primary_sources: [
          "Tibetan manuscripts",
          "Sanskrit texts",
          "Ritual manuals",
          "Artistic works"
        ],
        secondary_sources: [
          "Tantric studies",
          "Historical research",
          "Cultural analyses",
          "Art historical works"
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

export default function SutraStudyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Buddhist Sutras</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive study of Buddhist sutras, including their structure, historical context, interpretation methods, and contemporary relevance.
        </p>
      </div>

      <div className="space-y-8">
        {sutraSections.map((section) => (
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
                <p>Explore the ancient Hindu scriptures and their significance.</p>
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