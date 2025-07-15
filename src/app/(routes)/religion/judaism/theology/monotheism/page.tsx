import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MonotheisticDoctrine {
  title: string
  description: string
  keyPoints: string[]
  scriptureRefs: Array<{
    reference: string
    text: string
  }>
  significance: string[]
  historicalDevelopment: string[]
  modernInterpretations: string[]
}

export const metadata: Metadata = {
  title: "Monotheism | Jewish Theology",
  description: "Explore Jewish monotheism, its historical development, theological significance, and contemporary interpretations. Learn about the Shema, divine attributes, and Jewish understanding of God's oneness.",
  openGraph: {
    title: "Monotheism | Jewish Theology",
    description: "Comprehensive guide to Jewish monotheism and its theological significance",
    type: "website",
  },
  keywords: [
    "Jewish Monotheism",
    "Shema",
    "Divine Unity",
    "Jewish Theology",
    "God's Oneness",
    "Jewish Belief",
    "Divine Attributes",
    "Jewish Philosophy"
  ]
}

const monotheismContent: MonotheisticDoctrine[] = [
  {
    title: "The Shema: Foundation of Jewish Monotheism",
    description: "The Shema prayer, beginning with 'Hear, O Israel: The Lord our God, the Lord is one,' represents the core declaration of Jewish monotheism.",
    keyPoints: [
      "Central declaration of Jewish faith",
      "Emphasizes God's absolute oneness",
      "Recited twice daily in Jewish prayer",
      "Foundational text for Jewish theology",
      "Bridges theological and practical aspects of faith"
    ],
    scriptureRefs: [
      {
        reference: "Deuteronomy 6:4",
        text: "Hear, O Israel: The Lord our God, the Lord is one."
      },
      {
        reference: "Isaiah 45:5",
        text: "I am the Lord, and there is no other; besides Me there is no God."
      }
    ],
    significance: [
      "Unifies Jewish theological understanding",
      "Distinguishes Judaism from polytheistic religions",
      "Forms basis for ethical monotheism",
      "Influences Jewish worship and practice",
      "Shapes Jewish philosophical thought"
    ],
    historicalDevelopment: [
      "Origins in biblical period",
      "Development during Second Temple period",
      "Rabbinic interpretation and expansion",
      "Medieval philosophical elaboration",
      "Modern theological reinterpretation"
    ],
    modernInterpretations: [
      "Existentialist approaches",
      "Process theology perspectives",
      "Post-Holocaust theological responses",
      "Contemporary philosophical frameworks",
      "Interfaith dialogue considerations"
    ]
  },
  {
    title: "Divine Attributes and Unity",
    description: "Jewish theology explores the nature of God's attributes while maintaining the principle of divine unity.",
    keyPoints: [
      "Balance between divine transcendence and immanence",
      "Understanding of divine attributes (middot)",
      "Concept of divine simplicity",
      "Relationship between divine unity and multiplicity",
      "Philosophical approaches to divine attributes"
    ],
    scriptureRefs: [
      {
        reference: "Exodus 34:6-7",
        text: "The Lord, the Lord, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness."
      },
      {
        reference: "Psalm 145:8-9",
        text: "The Lord is gracious and merciful, slow to anger and abounding in steadfast love. The Lord is good to all, and his mercy is over all that he has made."
      }
    ],
    significance: [
      "Shapes Jewish understanding of divine nature",
      "Informs Jewish prayer and worship",
      "Influences ethical behavior",
      "Guides theological reflection",
      "Forms basis for Jewish spirituality"
    ],
    historicalDevelopment: [
      "Biblical foundations",
      "Rabbinic interpretations",
      "Medieval philosophical developments",
      "Kabbalistic perspectives",
      "Modern theological approaches"
    ],
    modernInterpretations: [
      "Contemporary philosophical analysis",
      "Psychological interpretations",
      "Mystical understandings",
      "Ethical implications",
      "Interfaith perspectives"
    ]
  }
]

export default function MonotheismPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Jewish Monotheism</h1>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-xl">
          Jewish monotheism represents one of the most significant theological developments in human history. 
          The belief in one God, articulated in the Shema prayer and developed through centuries of Jewish thought, 
          has profoundly influenced not only Judaism but also Christianity and Islam. This exploration examines the 
          historical development, theological significance, and contemporary interpretations of Jewish monotheism.
        </p>
      </div>

      <div className="space-y-8">
        {monotheismContent.map((doctrine, index) => (
          <Card key={index} className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">{doctrine.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg">{doctrine.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Points</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {doctrine.keyPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Scripture References</h3>
                  <ul className="space-y-2">
                    {doctrine.scriptureRefs.map((ref, idx) => (
                      <li key={idx}>
                        <span className="font-medium">{ref.reference}:</span> {ref.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Historical Development</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {doctrine.historicalDevelopment.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Significance</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {doctrine.significance.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Modern Interpretations</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {doctrine.modernInterpretations.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Related Topics</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/religion/judaism/theology/covenant" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Covenant</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the Jewish understanding of God's covenant with Israel.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/theology/torah" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Torah</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the Torah as divine revelation and its role in Jewish theology.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/theology/ethics" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Jewish Ethics</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover how monotheism shapes Jewish ethical principles and practices.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 