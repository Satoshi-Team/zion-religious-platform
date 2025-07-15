import React from 'react'
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { SacredTextResourceCard } from "@/components/sacred-text-resource"
import { TextCategoryCard } from "@/components/text-category"
import { SacredTextResource, TextCategory } from "@/types/sacred-texts"

const buddhistTexts: SacredTextResource[] = [
  {
    title: "Tripitaka (Pali Canon)",
    description: "The earliest complete collection of Buddhist texts, preserved in the Pali language.",
    languages: ["Pali", "English", "Chinese", "Thai"],
    features: [
      "Three main collections (pitakas)",
      "Original Pali text",
      "Verse and prose sections",
      "Comprehensive commentaries"
    ],
    resources: {
      translations: [
        "Wisdom Publications Edition",
        "Access to Insight Translations",
        "Digital Pali Reader"
      ],
      commentaries: [
        "Traditional Commentaries (Atthakatha)",
        "Modern Academic Commentaries",
        "Study Guides"
      ],
      study_guides: [
        "Introduction to Pali",
        "Buddhist Dictionary",
        "Topical Guide"
      ]
    },
    online_access: {
      website: "https://suttacentral.net",
      app: "SuttaCentral App"
    }
  },
  {
    title: "Chinese Buddhist Canon",
    description: "The most complete collection of Mahayana Buddhist texts, including translations from Sanskrit and original Chinese compositions.",
    languages: ["Chinese", "English", "Japanese", "Korean"],
    features: [
      "Multiple recensions",
      "Extensive commentaries",
      "Historical development",
      "Digital preservation"
    ],
    resources: {
      translations: [
        "BDK English Tripitaka",
        "CBETA Digital Edition",
        "SAT Daizōkyō Text Database"
      ],
      commentaries: [
        "Traditional Chinese Commentaries",
        "Modern Academic Studies",
        "Digital Resources"
      ],
      study_guides: [
        "Buddhist Chinese",
        "Digital Dictionary",
        "Research Tools"
      ]
    },
    online_access: {
      website: "https://cbetaonline.dila.edu.tw",
      app: "CBETA Reader"
    }
  },
  {
    title: "Tibetan Buddhist Canon",
    description: "The complete collection of Buddhist texts preserved in Tibet, including both translations and indigenous compositions.",
    languages: ["Tibetan", "English", "Sanskrit"],
    features: [
      "Kangyur and Tengyur collections",
      "Tantric texts",
      "Philosophical treatises",
      "Practice manuals"
    ],
    resources: {
      translations: [
        "84000 Translations",
        "Lotsawa House",
        "Buddhist Digital Resource Center"
      ],
      commentaries: [
        "Traditional Commentaries",
        "Modern Translations",
        "Academic Studies"
      ],
      study_guides: [
        "Classical Tibetan",
        "Buddhist Philosophy",
        "Practice Guides"
      ]
    },
    online_access: {
      website: "https://84000.co",
      app: "84000 Reading Room"
    }
  }
]

const categories: TextCategory[] = [
  {
    name: "Vinaya Pitaka",
    description: "Collection of texts concerning rules and regulations for monastic life.",
    texts: [
      {
        name: "Suttavibhanga",
        content: "Detailed analysis of monastic rules",
        themes: ["Monastic Discipline", "Ethics", "Community Life"]
      },
      {
        name: "Khandhaka",
        content: "Procedures for monastic ceremonies and duties",
        themes: ["Ordination", "Ceremonies", "Daily Life"]
      },
      {
        name: "Parivara",
        content: "Summary and analysis of Vinaya rules",
        themes: ["Classification", "Analysis", "Study Guide"]
      }
    ]
  },
  {
    name: "Sutta Pitaka",
    description: "Collection of discourses attributed to the Buddha and his close disciples.",
    texts: [
      {
        name: "Digha Nikaya",
        content: "Collection of long discourses",
        themes: ["Philosophy", "Doctrine", "Meditation"]
      },
      {
        name: "Majjhima Nikaya",
        content: "Collection of middle-length discourses",
        themes: ["Practice", "Ethics", "Psychology"]
      },
      {
        name: "Samyutta Nikaya",
        content: "Connected discourses on specific themes",
        themes: ["Doctrine", "Practice", "Poetry"]
      }
    ]
  },
  {
    name: "Abhidhamma Pitaka",
    description: "Systematic analysis of Buddhist doctrine and philosophy.",
    texts: [
      {
        name: "Dhammasangani",
        content: "Classification of mental states",
        themes: ["Psychology", "Philosophy", "Analysis"]
      },
      {
        name: "Vibhanga",
        content: "Analysis of key Buddhist concepts",
        themes: ["Doctrine", "Method", "Theory"]
      },
      {
        name: "Patthana",
        content: "Study of causal relations",
        themes: ["Causality", "Logic", "Metaphysics"]
      }
    ]
  }
]

export default function BuddhistTextsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading 
        title="Buddhist Sacred Texts" 
        description="Explore the rich textual traditions of Buddhism across different schools and traditions"
        className="mb-8"
      />
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Buddhist Canons</h2>
        <div className="space-y-8">
          {buddhistTexts.map((text) => (
            <SacredTextResourceCard key={text.title} resource={text} />
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Textual Categories</h2>
        <div className="space-y-8">
          {categories.map((category) => (
            <TextCategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      <div className="prose dark:prose-invert max-w-none">
        <h2>Additional Study Resources</h2>
        <ul>
          <li>
            <strong>Buddhist Digital Archives</strong> - Comprehensive collection of
            Buddhist texts and manuscripts.
          </li>
          <li>
            <strong>Digital Dictionary of Buddhism</strong> - Extensive reference work
            for Buddhist terminology.
          </li>
          <li>
            <strong>Buddhist Studies Information Gateway</strong> - Academic resources
            and research tools.
          </li>
        </ul>

        <h2>Study Guidelines</h2>
        <ul>
          <li>Begin with introductory texts and reliable translations</li>
          <li>Study with qualified teachers when possible</li>
          <li>Learn the historical and cultural context</li>
          <li>Practice meditation alongside textual study</li>
          <li>Engage with living traditions and communities</li>
        </ul>
      </div>
    </div>
  )
} 