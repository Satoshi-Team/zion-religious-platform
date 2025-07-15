import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { SacredTextResourceCard } from "@/components/sacred-text-resource"
import { TextCategoryCard } from "@/components/text-category"
import { SacredTextResource, TextCategory } from "@/types/sacred-texts"

const quranTexts: SacredTextResource[] = [
  {
    title: "The Clear Quran",
    description: "A modern English translation focusing on clarity and contemporary language.",
    languages: ["English", "Arabic"],
    features: [
      "Modern English translation",
      "Contextual footnotes",
      "Thematic introductions",
      "Clear formatting"
    ],
    resources: {
      translations: [
        "English Translation",
        "Arabic-English Parallel Text",
        "Digital Edition"
      ],
      commentaries: [
        "Verse by verse commentary",
        "Historical context notes",
        "Word explanations"
      ],
      study_guides: [
        "Quranic Sciences",
        "Thematic Studies",
        "Contextual Analysis"
      ]
    },
    online_access: {
      website: "https://theclearquran.org",
      app: "Clear Quran App"
    }
  },
  {
    title: "Sahih International",
    description: "A highly accurate translation favored for its careful balance of literal meaning and readability.",
    languages: ["English", "Arabic"],
    features: [
      "Accurate translation",
      "Formal language",
      "Detailed footnotes",
      "Arabic script"
    ],
    resources: {
      translations: [
        "English Translation",
        "Word-by-Word Analysis",
        "Dual Language Edition"
      ],
      commentaries: [
        "Tafsir references",
        "Hadith citations",
        "Scholarly notes"
      ],
      study_guides: [
        "Arabic-English Glossary",
        "Index of Concepts",
        "Study Guide"
      ]
    },
    online_access: {
      website: "https://quran.com",
      app: "Quran.com App"
    }
  },
  {
    title: "The Study Quran",
    description: "A comprehensive study edition with extensive commentary from multiple Islamic traditions.",
    languages: ["English", "Arabic"],
    features: [
      "Academic commentary",
      "Multiple perspectives",
      "Classical references",
      "Extensive essays"
    ],
    resources: {
      translations: [
        "English Translation",
        "Critical Edition",
        "Research Edition"
      ],
      commentaries: [
        "Traditional tafsirs",
        "Contemporary insights",
        "Comparative analysis"
      ],
      study_guides: [
        "Hadith index",
        "Topical guide",
        "Historical timeline"
      ]
    },
    online_access: {
      website: "https://studyquran.org",
      app: "Study Quran App"
    }
  }
]

const categories: TextCategory[] = [
  {
    name: "Meccan Surahs",
    description: "Chapters revealed in Mecca, focusing on fundamental beliefs and spiritual teachings.",
    texts: [
      {
        name: "Early Meccan Period",
        content: "Short, powerful surahs focusing on monotheism and the Day of Judgment.",
        themes: ["Monotheism", "Day of Judgment", "Divine Power", "Human Accountability"]
      },
      {
        name: "Middle Meccan Period",
        content: "Longer surahs with detailed arguments and stories of prophets.",
        themes: ["Prophetic Stories", "Divine Signs", "Moral Teachings", "Spiritual Growth"]
      },
      {
        name: "Late Meccan Period",
        content: "Complex discussions of faith and detailed responses to objections.",
        themes: ["Faith", "Divine Unity", "Prophethood", "Revelation"]
      }
    ]
  },
  {
    name: "Medinan Surahs",
    description: "Chapters revealed in Medina, dealing with social laws, community organization, and detailed guidance.",
    texts: [
      {
        name: "Early Medinan Period",
        content: "Establishment of the Muslim community and basic laws.",
        themes: ["Community", "Law", "Interfaith Relations", "Worship"]
      },
      {
        name: "Middle Medinan Period",
        content: "Detailed legislation and responses to social challenges.",
        themes: ["Social Laws", "Family Life", "Ethics", "Warfare"]
      },
      {
        name: "Late Medinan Period",
        content: "Completion of religious law and consolidation of the community.",
        themes: ["Religious Law", "Social Justice", "Leadership", "Unity"]
      }
    ]
  }
]

export default function QuranTextsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading 
        title="Quran Study Resources" 
        description="Comprehensive resources for studying the Quran across different translations and traditions"
        className="mb-8"
      />
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quran Translations</h2>
        <div className="space-y-8">
          {quranTexts.map((text) => (
            <SacredTextResourceCard key={text.title} resource={text} />
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quranic Categories</h2>
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
            <strong>Quranic Arabic Corpus</strong> - Linguistic resource for studying the Arabic
            text of the Quran.
          </li>
          <li>
            <strong>Tafsir.com</strong> - Collection of classical and contemporary Quranic
            commentaries.
          </li>
          <li>
            <strong>Islamic Research Foundation</strong> - Academic research and publications
            on Quranic studies.
          </li>
        </ul>

        <h2>Study Guidelines</h2>
        <ul>
          <li>Begin with proper respect and ritual purity</li>
          <li>Learn basic Arabic pronunciation for recitation</li>
          <li>Study with qualified teachers when possible</li>
          <li>Understand the context of revelation</li>
          <li>Reflect deeply on the meanings and applications</li>
        </ul>
      </div>
    </div>
  )
} 