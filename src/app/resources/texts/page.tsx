import React from 'react'
import { Heading } from "@/components/ui/heading"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SacredText {
  title: string
  tradition: string
  description: string
  languages: string[]
  resources: {
    translations: string[]
    commentaries: string[]
    study_guides: string[]
  }
  href: string
}

const sacredTexts: SacredText[] = [
  {
    title: "The Bible",
    tradition: "Christianity",
    description: "A collection of sacred texts including the Old and New Testaments.",
    languages: ["Hebrew", "Greek", "Aramaic", "Latin", "English"],
    resources: {
      translations: [
        "King James Version",
        "New International Version",
        "English Standard Version"
      ],
      commentaries: [
        "Matthew Henry's Commentary",
        "The IVP Bible Commentary",
        "The New Bible Commentary"
      ],
      study_guides: [
        "Bible Study Methods",
        "Biblical Interpretation Guide",
        "Historical Context Studies"
      ]
    },
    href: "/resources/texts/bible"
  },
  {
    title: "The Quran",
    tradition: "Islam",
    description: "The central religious text of Islam, believed to be divine revelation.",
    languages: ["Arabic", "English", "Turkish", "Persian", "Urdu"],
    resources: {
      translations: [
        "Sahih International",
        "Pickthall",
        "Yusuf Ali"
      ],
      commentaries: [
        "Tafsir Ibn Kathir",
        "Tafsir al-Jalalayn",
        "Maariful Quran"
      ],
      study_guides: [
        "Quranic Sciences",
        "Thematic Studies",
        "Contextual Analysis"
      ]
    },
    href: "/resources/texts/quran"
  },
  {
    title: "Buddhist Sutras",
    tradition: "Buddhism",
    description: "Collection of Buddhist canonical texts and teachings.",
    languages: ["Pali", "Sanskrit", "Chinese", "Tibetan", "English"],
    resources: {
      translations: [
        "Pali Text Society",
        "BDK English Tripitaka",
        "84000 Translation"
      ],
      commentaries: [
        "Traditional Commentaries",
        "Modern Interpretations",
        "Academic Analysis"
      ],
      study_guides: [
        "Sutra Study Guide",
        "Buddhist Text Reading",
        "Comparative Studies"
      ]
    },
    href: "/resources/texts/buddhist"
  },
  {
    title: "Hindu Scriptures",
    tradition: "Hinduism",
    description: "Various sacred texts including Vedas, Upanishads, and Puranas.",
    languages: ["Sanskrit", "Hindi", "English", "Bengali", "Tamil"],
    resources: {
      translations: [
        "Max Müller Edition",
        "Gita Press",
        "Harvard Oriental Series"
      ],
      commentaries: [
        "Traditional Commentaries",
        "Modern Interpretations",
        "Academic Studies"
      ],
      study_guides: [
        "Vedic Study Guide",
        "Scripture Reading Methods",
        "Textual Analysis"
      ]
    },
    href: "/resources/texts/hindu"
  },
  {
    title: "Guru Granth Sahib",
    tradition: "Sikhism",
    description: "The eternal Guru and holy scripture of Sikhism, containing hymns and teachings of the Sikh Gurus.",
    languages: ["Gurmukhi", "Punjabi", "English", "Hindi", "Urdu"],
    resources: {
      translations: [
        "Sri Guru Granth Sahib Ji",
        "English Translation by Dr. Sant Singh Khalsa",
        "Modern English Translation"
      ],
      commentaries: [
        "Traditional Sikh Commentaries",
        "Modern Interpretations",
        "Academic Analysis"
      ],
      study_guides: [
        "Gurbani Study Guide",
        "Understanding Guru Granth Sahib",
        "Historical Context"
      ]
    },
    href: "/resources/texts/sikh"
  },
  {
    title: "Avesta",
    tradition: "Zoroastrianism",
    description: "The primary collection of sacred texts of Zoroastrianism, including the Gathas of Zarathustra.",
    languages: ["Avestan", "Pahlavi", "English", "Gujarati", "Persian"],
    resources: {
      translations: [
        "Sacred Books of the East Series",
        "Modern Academic Translations",
        "Traditional Translations"
      ],
      commentaries: [
        "Traditional Zoroastrian Commentaries",
        "Modern Scholarly Analysis",
        "Historical Studies"
      ],
      study_guides: [
        "Understanding the Avesta",
        "Zoroastrian Text Study",
        "Historical Context"
      ]
    },
    href: "/resources/texts/zoroastrian"
  }
]

export default function SacredTextsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading 
        title="Sacred Texts" 
        description="Explore sacred texts from various religious traditions with translations and study resources"
        className="mb-8"
      />
      
      <div className="grid gap-6 md:grid-cols-2">
        {sacredTexts.map((text) => (
          <Card key={text.title} className="p-6">
            <h2 className="text-2xl font-semibold mb-2">{text.title}</h2>
            <p className="text-sm text-muted-foreground mb-1">{text.tradition}</p>
            <p className="text-muted-foreground mb-4">{text.description}</p>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Available Languages:</h3>
              <div className="flex flex-wrap gap-2">
                {text.languages.map((lang) => (
                  <span
                    key={lang}
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-sm font-medium mb-1">Translations:</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {text.resources.translations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-1">Commentaries:</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {text.resources.commentaries.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-1">Study Guides:</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {text.resources.study_guides.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <Button asChild>
              <Link href={text.href}>Explore Resources</Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
} 