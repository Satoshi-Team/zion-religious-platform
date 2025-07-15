import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { SacredTextResourceCard } from "@/components/sacred-text-resource"
import { TextCategoryCard } from "@/components/text-category"
import { SacredTextResource, TextCategory } from "@/types/sacred-texts"

const hinduTexts: SacredTextResource[] = [
  {
    title: "The Vedas",
    description: "The oldest sacred texts of Hinduism, composed in Vedic Sanskrit.",
    languages: ["Sanskrit", "English", "Hindi"],
    features: [
      "Four collections",
      "Mantras and hymns",
      "Ritual instructions",
      "Philosophical discussions"
    ],
    resources: {
      translations: [
        "Ralph T.H. Griffith Translation",
        "Harvard Oriental Series",
        "Sacred Books of the East"
      ],
      commentaries: [
        "Traditional Bhashyas",
        "Modern Interpretations",
        "Academic Studies"
      ],
      study_guides: [
        "Introduction to Vedic Sanskrit",
        "Vedic Chanting Guide",
        "Ritual Manuals"
      ]
    },
    online_access: {
      website: "https://www.sacred-texts.com/hin/",
      app: "Vedic Wisdom App"
    }
  },
  {
    title: "The Upanishads",
    description: "Philosophical texts that form the theoretical basis for Hindu religion.",
    languages: ["Sanskrit", "English", "Hindi"],
    features: [
      "Principal Upanishads",
      "Philosophical dialogues",
      "Spiritual teachings",
      "Metaphysical inquiries"
    ],
    resources: {
      translations: [
        "S. Radhakrishnan Translation",
        "Max Müller Edition",
        "Patrick Olivelle Translation"
      ],
      commentaries: [
        "Adi Shankara's Commentary",
        "Modern Interpretations",
        "Academic Analysis"
      ],
      study_guides: [
        "Introduction to Vedanta",
        "Key Concepts Guide",
        "Study Companion"
      ]
    },
    online_access: {
      website: "https://www.vedanta.org",
      app: "Vedanta Study App"
    }
  },
  {
    title: "The Puranas",
    description: "Ancient stories containing the mythology and philosophy of Hinduism.",
    languages: ["Sanskrit", "English", "Hindi"],
    features: [
      "Eighteen major Puranas",
      "Mythological stories",
      "Genealogies",
      "Religious instruction"
    ],
    resources: {
      translations: [
        "Motilal Banarsidass Edition",
        "MLBD Series",
        "Digital Library of India"
      ],
      commentaries: [
        "Traditional Commentaries",
        "Modern Interpretations",
        "Academic Studies"
      ],
      study_guides: [
        "Introduction to Puranas",
        "Mythological Guide",
        "Historical Context"
      ]
    },
    online_access: {
      website: "https://www.wisdomlib.org",
      app: "Hindu Scriptures App"
    }
  }
]

const categories: TextCategory[] = [
  {
    name: "Shruti (Revealed Texts)",
    description: "Texts considered to be directly revealed by the divine, including the Vedas and Upanishads.",
    texts: [
      {
        name: "Rig Veda",
        content: "Collection of hymns to various deities",
        themes: ["Devotion", "Ritual", "Cosmology", "Philosophy"]
      },
      {
        name: "Sama Veda",
        content: "Musical arrangements of Rigvedic texts",
        themes: ["Music", "Ritual", "Worship"]
      },
      {
        name: "Yajur Veda",
        content: "Prose mantras for rituals",
        themes: ["Ritual", "Sacrifice", "Ceremony"]
      }
    ]
  },
  {
    name: "Smriti (Remembered Texts)",
    description: "Texts composed by sages based on their understanding and memory of eternal truths.",
    texts: [
      {
        name: "Bhagavad Gita",
        content: "Philosophical dialogue on dharma and duty",
        themes: ["Dharma", "Devotion", "Philosophy", "Ethics"]
      },
      {
        name: "Mahabharata",
        content: "Epic narrative containing moral and philosophical teachings",
        themes: ["Ethics", "Duty", "War", "Philosophy"]
      },
      {
        name: "Ramayana",
        content: "Epic story of Rama embodying dharmic ideals",
        themes: ["Dharma", "Devotion", "Ethics", "Leadership"]
      }
    ]
  },
  {
    name: "Darshanas (Philosophical Systems)",
    description: "Systematic philosophical schools of Hindu thought.",
    texts: [
      {
        name: "Vedanta Sutras",
        content: "Systematic exposition of Upanishadic philosophy",
        themes: ["Metaphysics", "Knowledge", "Liberation"]
      },
      {
        name: "Yoga Sutras",
        content: "Classical text on yoga philosophy and practice",
        themes: ["Meditation", "Psychology", "Practice"]
      },
      {
        name: "Nyaya Sutras",
        content: "Treatise on logic and epistemology",
        themes: ["Logic", "Knowledge", "Reasoning"]
      }
    ]
  }
]

export default function HinduTextsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading 
        title="Hindu Sacred Texts" 
        description="Explore the vast collection of Hindu scriptures and philosophical works"
        className="mb-8"
      />
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Major Hindu Texts</h2>
        <div className="space-y-8">
          {hinduTexts.map((text) => (
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
            <strong>Digital Sanskrit Library</strong> - Comprehensive collection of
            Sanskrit texts and manuscripts.
          </li>
          <li>
            <strong>Vedic Knowledge Online</strong> - Educational platform for
            studying Hindu scriptures.
          </li>
          <li>
            <strong>Hindu Philosophy Research Center</strong> - Academic resources
            and research tools.
          </li>
        </ul>

        <h2>Study Guidelines</h2>
        <ul>
          <li>Begin with reliable translations and commentaries</li>
          <li>Study with qualified teachers (gurus) when possible</li>
          <li>Understand the historical and cultural context</li>
          <li>Practice meditation and contemplation</li>
          <li>Engage with living traditions and communities</li>
        </ul>
      </div>
    </div>
  )
} 