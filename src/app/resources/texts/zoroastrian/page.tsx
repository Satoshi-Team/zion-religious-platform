import React from 'react'
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { SacredTextResourceCard } from "@/components/sacred-text-resource"
import { SacredTextResource } from "@/types/sacred-texts"

const zoroastrianTexts: SacredTextResource[] = [
  {
    title: "Avesta",
    description: "The primary collection of sacred texts of Zoroastrianism, containing ancient religious texts compiled over several centuries. The Avesta includes the Gathas, which are hymns traditionally attributed to Zarathustra (Zoroaster) himself.",
    languages: ["Avestan", "Pahlavi", "English", "Gujarati", "Persian"],
    features: [
      "Ancient religious texts",
      "Original hymns by Zarathustra",
      "Ritual instructions",
      "Theological teachings"
    ],
    sections: [
      "Yasna (including the Gathas)",
      "Visperad",
      "Vendidad",
      "Yashts",
      "Khordeh Avesta"
    ],
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
    online_access: {
      website: "http://www.avesta.org",
      app: "Avesta Digital Library"
    }
  },
  {
    title: "Denkard",
    description: "A 9th-century encyclopedia of the Zoroastrian religion, containing explanations of religious doctrine, traditions, and practices. It's one of the most important extant Middle Persian works about Zoroastrianism.",
    languages: ["Pahlavi", "English", "Gujarati"],
    features: [
      "Religious encyclopedia",
      "Doctrinal explanations",
      "Historical accounts",
      "Traditional practices"
    ],
    resources: {
      translations: [
        "English Academic Translations",
        "Modern Persian Translations",
        "Traditional Renderings"
      ],
      commentaries: [
        "Scholarly Analysis",
        "Historical Studies",
        "Religious Interpretations"
      ],
      study_guides: [
        "Guide to Denkard",
        "Understanding Zoroastrian Doctrine",
        "Historical Context"
      ]
    },
    online_access: {
      website: "https://www.zoroastrian.org.uk/articles/denkard"
    }
  },
  {
    title: "Bundahishn",
    description: "An important Zoroastrian text about the creation of the world and the nature of the material and spiritual universe. It contains Zoroastrian cosmogony, cosmology, and eschatology.",
    languages: ["Pahlavi", "English", "Persian"],
    features: [
      "Creation accounts",
      "Cosmological teachings",
      "Eschatological descriptions",
      "Natural philosophy"
    ],
    resources: {
      translations: [
        "Academic Translations",
        "Modern Interpretations",
        "Traditional Versions"
      ],
      commentaries: [
        "Scholarly Analysis",
        "Religious Interpretations",
        "Historical Studies"
      ],
      study_guides: [
        "Understanding Zoroastrian Cosmology",
        "Guide to Creation Accounts",
        "Comparative Studies"
      ]
    },
    online_access: {
      website: "https://www.iranicaonline.org/articles/bundahisn"
    }
  }
]

export default function ZoroastrianTextsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading 
        title="Zoroastrian Sacred Texts" 
        description="Explore the ancient scriptures and religious texts of Zoroastrianism"
        className="mb-8"
      />

      <div className="space-y-8">
        {zoroastrianTexts.map((text) => (
          <SacredTextResourceCard key={text.title} resource={text} />
        ))}
      </div>

      <Separator className="my-8" />

      <div className="prose dark:prose-invert max-w-none">
        <h2>Additional Study Resources</h2>
        <ul>
          <li>
            <strong>FEZANA (Federation of Zoroastrian Associations of North America)</strong> - 
            Provides educational resources and study materials about Zoroastrian texts.
          </li>
          <li>
            <strong>World Zoroastrian Organization</strong> - Offers access to scholarly works
            and research on Zoroastrian texts.
          </li>
          <li>
            <strong>UNESCO Parsi Zoroastrian Project</strong> - Documentation and preservation
            of Zoroastrian textual heritage.
          </li>
        </ul>

        <h2>Study Guidelines</h2>
        <ul>
          <li>Begin with introductory texts before studying the original scriptures</li>
          <li>Understand the historical context of the texts</li>
          <li>Study with guidance from knowledgeable scholars or priests</li>
          <li>Compare different translations to better understand the meanings</li>
          <li>Consider the oral tradition alongside written texts</li>
        </ul>
      </div>
    </div>
  )
} 