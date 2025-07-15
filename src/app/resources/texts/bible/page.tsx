import React from 'react'
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { SacredTextResourceCard } from "@/components/sacred-text-resource"
import { TextCategoryCard } from "@/components/text-category"
import { SacredTextResource, TextCategory } from "@/types/sacred-texts"

const bibleTexts: SacredTextResource[] = [
  {
    title: "King James Version (KJV)",
    description: "A historic English translation that has profoundly influenced literature and culture.",
    languages: ["English"],
    features: [
      "Classical English prose",
      "Formal equivalence translation",
      "Rich poetic language",
      "Historical significance"
    ],
    resources: {
      translations: [
        "Original 1611 Edition",
        "Cambridge Edition",
        "Oxford Edition"
      ],
      commentaries: [
        "Matthew Henry's Commentary",
        "John Gill's Exposition",
        "Treasury of Scripture Knowledge"
      ],
      study_guides: [
        "Strong's Concordance",
        "KJV Study Bible",
        "Biblical Cross References"
      ]
    },
    online_access: {
      website: "https://www.kingjamesbibleonline.org",
      app: "Bible Gateway"
    }
  },
  {
    title: "New International Version (NIV)",
    description: "A modern English translation emphasizing clarity and accuracy.",
    languages: ["English", "Spanish", "Portuguese"],
    features: [
      "Contemporary language",
      "Dynamic equivalence",
      "Scholarly accuracy",
      "Readability focus"
    ],
    resources: {
      translations: [
        "NIV Study Bible",
        "NIV Life Application Bible",
        "NIV Cultural Backgrounds Study Bible"
      ],
      commentaries: [
        "NIV Application Commentary",
        "Expositor's Bible Commentary",
        "Life Application Commentary"
      ],
      study_guides: [
        "NIV Study Resources",
        "Zondervan Study Materials",
        "NIV Concordance"
      ]
    },
    online_access: {
      website: "https://www.biblica.com",
      app: "YouVersion"
    }
  },
  {
    title: "English Standard Version (ESV)",
    description: "A literal translation emphasizing word-for-word accuracy with modern English.",
    languages: ["English"],
    features: [
      "Word-for-word translation",
      "Modern English",
      "Literary excellence",
      "Academic rigor"
    ],
    resources: {
      translations: [
        "ESV Study Bible",
        "ESV Literary Study Bible",
        "ESV Gospel Transformation Bible"
      ],
      commentaries: [
        "ESV Expository Commentary",
        "Crossway Bible Commentary",
        "ESV Study Bible Notes"
      ],
      study_guides: [
        "ESV Bible Atlas",
        "ESV Greek-English New Testament",
        "ESV Study Resources"
      ]
    },
    online_access: {
      website: "https://www.esv.org",
      app: "ESV Bible App",
      api: "ESV API"
    }
  }
]

const categories: TextCategory[] = [
  {
    name: "Old Testament",
    description: "The collection of texts sacred to Judaism and Christianity, written primarily in Hebrew.",
    texts: [
      {
        name: "Pentateuch (Torah)",
        content: "The first five books of the Bible, containing the law and early history.",
        themes: ["Creation", "Law", "Covenant", "Exodus", "History"]
      },
      {
        name: "Historical Books",
        content: "Chronicles of Israel's history from conquest through monarchy.",
        themes: ["History", "Leadership", "Kingdom", "Exile", "Return"]
      },
      {
        name: "Wisdom Literature",
        content: "Books of poetry, wisdom, and philosophical reflection.",
        themes: ["Wisdom", "Poetry", "Proverbs", "Suffering", "Love"]
      },
      {
        name: "Prophetic Books",
        content: "Prophetic messages and visions from major and minor prophets.",
        themes: ["Prophecy", "Judgment", "Restoration", "Hope", "Messiah"]
      }
    ]
  },
  {
    name: "New Testament",
    description: "The Christian texts written in Koine Greek, focusing on Jesus Christ and the early church.",
    texts: [
      {
        name: "Gospels",
        content: "Four accounts of Jesus's life, ministry, death, and resurrection.",
        themes: ["Jesus's Life", "Teachings", "Miracles", "Crucifixion", "Resurrection"]
      },
      {
        name: "Acts",
        content: "History of the early Christian church and apostolic ministry.",
        themes: ["Early Church", "Mission", "Holy Spirit", "Growth", "Persecution"]
      },
      {
        name: "Pauline Epistles",
        content: "Letters from Paul to various churches and individuals.",
        themes: ["Doctrine", "Church Life", "Faith", "Grace", "Christian Living"]
      },
      {
        name: "General Epistles",
        content: "Letters from other apostles to various churches.",
        themes: ["Faith", "Perseverance", "False Teaching", "Hope", "Love"]
      },
      {
        name: "Revelation",
        content: "Apocalyptic vision of the end times and Christ's return.",
        themes: ["Prophecy", "End Times", "Victory", "Judgment", "New Creation"]
      }
    ]
  }
]

export default function BibleTextsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading 
        title="Bible Study Resources" 
        description="Comprehensive resources for studying the Bible across different translations and traditions"
        className="mb-8"
      />
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Bible Versions</h2>
        <div className="space-y-8">
          {bibleTexts.map((text) => (
            <SacredTextResourceCard key={text.title} resource={text} />
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Biblical Categories</h2>
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
            <strong>Bible Gateway</strong> - Comprehensive online Bible study resource with
            multiple translations and study tools.
          </li>
          <li>
            <strong>Logos Bible Software</strong> - Professional Bible study software with
            extensive library and research tools.
          </li>
          <li>
            <strong>Blue Letter Bible</strong> - Free online Bible study tools including
            concordances, lexicons, and commentaries.
          </li>
        </ul>

        <h2>Study Guidelines</h2>
        <ul>
          <li>Begin with prayer and reverence for the text</li>
          <li>Study passages in their historical and literary context</li>
          <li>Compare multiple translations for deeper understanding</li>
          <li>Use reliable commentaries and study guides</li>
          <li>Apply the teachings to daily life</li>
        </ul>
      </div>
    </div>
  )
} 