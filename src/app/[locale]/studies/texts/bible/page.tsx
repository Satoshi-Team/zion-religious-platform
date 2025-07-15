import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Bible Studies | Sacred Texts",
  description: "Comprehensive study of the Bible, including its structure, historical context, interpretation methods, and contemporary relevance.",
  keywords: "bible study, biblical texts, old testament, new testament, biblical interpretation, biblical history, biblical archaeology, biblical theology, biblical literature, biblical manuscripts"
}

interface BibleSection {
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

const bibleSections: BibleSection[] = [
  {
    title: "Old Testament",
    description: "The Hebrew Bible and its historical, literary, and theological significance.",
    content: {
      structure: [
        "Torah (Pentateuch)",
        "Nevi'im (Prophets)",
        "Ketuvim (Writings)",
        "Apocrypha/Deuterocanonical books"
      ],
      historical_context: [
        "Ancient Near Eastern context",
        "Israelite history",
        "Babylonian exile",
        "Second Temple period"
      ],
      interpretation_methods: [
        "Historical-critical method",
        "Literary analysis",
        "Canonical criticism",
        "Jewish interpretation"
      ],
      key_themes: [
        "Covenant",
        "Creation",
        "Exodus",
        "Prophecy",
        "Wisdom literature"
      ],
      resources: {
        primary_sources: [
          "Dead Sea Scrolls",
          "Septuagint manuscripts",
          "Masoretic Text",
          "Ancient translations"
        ],
        secondary_sources: [
          "Biblical commentaries",
          "Historical studies",
          "Archaeological reports",
          "Theological works"
        ],
        multimedia: [
          "Digital manuscripts",
          "Archaeological sites",
          "Documentary films",
          "Interactive timelines"
        ]
      }
    }
  },
  {
    title: "New Testament",
    description: "The Christian scriptures and their historical, theological, and cultural impact.",
    content: {
      structure: [
        "Gospels",
        "Acts of the Apostles",
        "Pauline letters",
        "General epistles",
        "Revelation"
      ],
      historical_context: [
        "Roman Empire",
        "Early Christianity",
        "Jewish context",
        "Greco-Roman culture"
      ],
      interpretation_methods: [
        "Form criticism",
        "Redaction criticism",
        "Narrative criticism",
        "Social-scientific criticism"
      ],
      key_themes: [
        "Kingdom of God",
        "Christology",
        "Salvation",
        "Church",
        "Eschatology"
      ],
      resources: {
        primary_sources: [
          "Early manuscripts",
          "Patristic writings",
          "Ancient translations",
          "Archaeological evidence"
        ],
        secondary_sources: [
          "New Testament studies",
          "Historical research",
          "Theological works",
          "Cultural studies"
        ],
        multimedia: [
          "Digital archives",
          "Virtual tours",
          "Documentary films",
          "Interactive resources"
        ]
      }
    }
  },
  {
    title: "Biblical Interpretation",
    description: "Methods and approaches to understanding and interpreting biblical texts.",
    content: {
      structure: [
        "Historical approaches",
        "Literary approaches",
        "Theological approaches",
        "Contemporary methods"
      ],
      historical_context: [
        "Ancient interpretation",
        "Medieval exegesis",
        "Reformation period",
        "Modern scholarship"
      ],
      interpretation_methods: [
        "Textual criticism",
        "Source criticism",
        "Form criticism",
        "Rhetorical criticism"
      ],
      key_themes: [
        "Hermeneutics",
        "Exegesis",
        "Biblical theology",
        "Contextual interpretation"
      ],
      resources: {
        primary_sources: [
          "Ancient commentaries",
          "Historical documents",
          "Manuscript evidence",
          "Archaeological findings"
        ],
        secondary_sources: [
          "Methodological studies",
          "Historical analyses",
          "Theological works",
          "Contemporary research"
        ],
        multimedia: [
          "Digital libraries",
          "Online courses",
          "Documentary films",
          "Interactive tools"
        ]
      }
    }
  }
]

export default function BibleStudyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Bible Studies</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive study of the Bible, including its structure, historical context, interpretation methods, and contemporary relevance.
        </p>
      </div>

      <div className="space-y-8">
        {bibleSections.map((section) => (
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
          <Link href="/studies/texts/quran">
            <Card className="hover:bg-accent transition-colors">
              <CardHeader>
                <CardTitle>Quran Studies</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the Islamic holy book and its interpretation.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/studies/texts/vedas">
            <Card className="hover:bg-accent transition-colors">
              <CardHeader>
                <CardTitle>Vedic Studies</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Study the ancient Hindu scriptures and their significance.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
} 