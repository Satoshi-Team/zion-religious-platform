import React from 'react'
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { SacredTextResourceCard } from "@/components/sacred-text-resource"
import { SacredTextResource } from "@/types/sacred-texts"

const sikhTexts: SacredTextResource[] = [
  {
    title: "Sri Guru Granth Sahib",
    description: "The eternal Guru and central holy scripture of Sikhism, containing 1430 pages (angs) of hymns and teachings. It includes compositions from the Sikh Gurus as well as devotional verses from Hindu and Muslim saints whose teachings aligned with Sikh philosophy.",
    languages: ["Gurmukhi", "Punjabi", "Sanskrit", "Persian", "Arabic", "Medieval Prakrit"],
    features: [
      "1430 pages (angs)",
      "Compositions from Sikh Gurus",
      "Devotional verses from various saints",
      "Musical arrangements (ragas)"
    ],
    resources: {
      translations: [
        "Sri Guru Granth Sahib Ji",
        "English Translation by Dr. Sant Singh Khalsa",
        "Modern English Translation"
      ],
      commentaries: [
        "Traditional Sikh commentaries",
        "Modern interpretations",
        "Academic analysis"
      ],
      study_guides: [
        "Gurbani Study Guide",
        "Understanding Guru Granth Sahib",
        "Historical Context"
      ]
    },
    online_access: {
      website: "https://www.sikhitothemax.org",
      app: "SikhiToTheMax"
    }
  },
  {
    title: "Dasam Granth",
    description: "A separate holy text containing the compositions of the tenth Sikh Guru, Guru Gobind Singh. It includes philosophical writings, autobiographical accounts, and devotional poetry.",
    languages: ["Gurmukhi", "Braj Bhasha", "Persian", "Sanskrit"],
    features: [
      "Compositions by Guru Gobind Singh",
      "Philosophical writings",
      "Autobiographical accounts",
      "Devotional poetry"
    ],
    resources: {
      translations: [
        "English translations",
        "Modern interpretations",
        "Academic editions"
      ],
      commentaries: [
        "Traditional commentaries",
        "Modern scholarly analysis",
        "Historical studies"
      ],
      study_guides: [
        "Introduction to Dasam Granth",
        "Textual Analysis Guide",
        "Historical Context"
      ]
    },
    online_access: {
      website: "https://www.dasamgranth.com",
      app: "Dasam Granth Online"
    }
  },
  {
    title: "Janamsakhis",
    description: "Traditional biographies of Guru Nanak Dev Ji, the founder of Sikhism, containing accounts of his life and travels.",
    languages: ["Punjabi", "Gurmukhi"],
    features: [
      "Biographical accounts",
      "Travel narratives",
      "Historical context",
      "Teaching stories"
    ],
    resources: {
      translations: [
        "English translations",
        "Modern adaptations",
        "Academic editions"
      ],
      commentaries: [
        "Historical analysis",
        "Cultural context",
        "Literary studies"
      ],
      study_guides: [
        "Understanding Janamsakhis",
        "Historical Research Guide",
        "Literary Analysis"
      ]
    },
    online_access: {
      website: "https://www.panjabdigilib.org/janamsakhis"
    }
  }
]

export default function SikhTextsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading 
        title="Sikh Sacred Texts" 
        description="Explore the holy scriptures and texts of Sikhism"
        className="mb-8"
      />

      <div className="space-y-8">
        {sikhTexts.map((text) => (
          <SacredTextResourceCard key={text.title} resource={text} />
        ))}
      </div>

      <Separator className="my-8" />

      <div className="prose dark:prose-invert max-w-none">
        <h2>Additional Study Resources</h2>
        <ul>
          <li>
            <strong>Sikh Research Institute (SikhRI)</strong> - Offers courses, workshops, and
            educational materials about Sikh texts and their interpretation.
          </li>
          <li>
            <strong>World Gurudwaras</strong> - Directory of Sikh temples worldwide where you can
            learn about and study Sikh texts in person.
          </li>
          <li>
            <strong>Global Sikh Studies</strong> - Academic research and scholarly articles about
            Sikh texts and their historical context.
          </li>
        </ul>

        <h2>Study Guidelines</h2>
        <ul>
          <li>Approach the texts with respect and reverence</li>
          <li>Begin with basic introductory materials before diving into complex interpretations</li>
          <li>Consider studying with a qualified teacher or joining a study group</li>
          <li>Use reliable translations and commentaries from recognized scholars</li>
          <li>Understand the historical and cultural context of the texts</li>
        </ul>
      </div>
    </div>
  )
} 