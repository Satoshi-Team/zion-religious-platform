import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HistoricalPeriod {
  title: string
  description: string
  keyEvents: string[]
  scriptureRefs: Array<{
    reference: string
    text: string
  }>
  significance: string[]
  archaeologicalEvidence: string[]
  culturalImpact: string[]
}

export const metadata: Metadata = {
  title: "Medieval Period | Jewish History",
  description: "Explore the Medieval Period of Jewish history, from the Islamic conquests through the Renaissance, including key events, archaeological evidence, and cultural developments.",
  openGraph: {
    title: "Medieval Period | Jewish History",
    description: "Comprehensive guide to the Medieval Period in Jewish history",
    type: "website",
  },
  keywords: [
    "Medieval Period",
    "Jewish History",
    "Islamic Golden Age",
    "Jewish Philosophy",
    "Kabbalah",
    "Rashi",
    "Maimonides",
    "Jewish Communities"
  ]
}

const medievalContent: HistoricalPeriod[] = [
  {
    title: "The Islamic Golden Age",
    description: "The flourishing of Jewish culture under Islamic rule, marked by significant intellectual and cultural achievements.",
    keyEvents: [
      "Islamic conquests",
      "Jewish courtiers",
      "Translation movement",
      "Philosophical development",
      "Cultural synthesis"
    ],
    scriptureRefs: [
      {
        reference: "Guide for the Perplexed 1:71",
        text: "The object of this treatise is to enlighten a religious man who has been trained to believe in the truth of our holy Law, who conscientiously fulfills his moral and religious duties, and at the same time has been successful in his philosophical studies."
      }
    ],
    significance: [
      "Jewish-Arabic synthesis",
      "Philosophical development",
      "Scientific advancement",
      "Cultural exchange",
      "Literary production"
    ],
    archaeologicalEvidence: [
      "Cairo Geniza documents",
      "Synagogue remains",
      "Manuscripts",
      "Artifacts",
      "Material culture"
    ],
    culturalImpact: [
      "Arabic influence",
      "Philosophical thought",
      "Scientific knowledge",
      "Literary traditions",
      "Cultural integration"
    ]
  },
  {
    title: "The European Middle Ages",
    description: "The development of Jewish communities in Christian Europe, marked by both persecution and cultural achievement.",
    keyEvents: [
      "Crusader attacks",
      "Blood libels",
      "Expulsions",
      "Ghetto formation",
      "Rashi's influence"
    ],
    scriptureRefs: [
      {
        reference: "Rashi on Genesis 1:1",
        text: "In the beginning: Said Rabbi Isaac: It was not necessary to begin the Torah except from 'This month shall be unto you' (Exod. 12:2), which is the first commandment that Israel was commanded. Now for what reason did He commence with 'In the beginning?'"
      }
    ],
    significance: [
      "Jewish-Christian relations",
      "Legal development",
      "Educational system",
      "Community structure",
      "Cultural preservation"
    ],
    archaeologicalEvidence: [
      "Medieval synagogues",
      "Jewish quarters",
      "Manuscripts",
      "Artifacts",
      "Documentary evidence"
    ],
    culturalImpact: [
      "Ashkenazi culture",
      "Legal traditions",
      "Educational methods",
      "Religious practices",
      "Social organization"
    ]
  },
  {
    title: "The Kabbalistic Period",
    description: "The emergence and development of Jewish mystical thought and practice.",
    keyEvents: [
      "Zohar composition",
      "Kabbalah development",
      "Mystical circles",
      "Safed school",
      "Lurianic Kabbalah"
    ],
    scriptureRefs: [
      {
        reference: "Zohar 1:15a",
        text: "In the beginning of the King's authority, the lamp of darkness engraved a hollow into the supernal purity. A ring of this line, white and not white, emerged in the sealed Ancient of Days."
      }
    ],
    significance: [
      "Mystical tradition",
      "Theological development",
      "Spiritual practice",
      "Cultural influence",
      "Literary heritage"
    ],
    archaeologicalEvidence: [
      "Kabbalistic manuscripts",
      "Synagogue remains",
      "Artifacts",
      "Documentary evidence",
      "Material culture"
    ],
    culturalImpact: [
      "Mystical thought",
      "Religious practice",
      "Literary tradition",
      "Cultural expression",
      "Spiritual development"
    ]
  },
  {
    title: "The Late Medieval Period",
    description: "The transition from medieval to early modern Judaism, marked by significant social and intellectual changes.",
    keyEvents: [
      "Spanish expulsion",
      "Printing revolution",
      "Jewish migration",
      "Cultural adaptation",
      "Intellectual renewal"
    ],
    scriptureRefs: [
      {
        reference: "Shulchan Aruch, Introduction",
        text: "I have written this work to serve as a handbook for all who seek to know the proper way to conduct themselves in accordance with the Torah and its commandments."
      }
    ],
    significance: [
      "Diaspora expansion",
      "Cultural transformation",
      "Intellectual development",
      "Social adaptation",
      "Modern transition"
    ],
    archaeologicalEvidence: [
      "Printed books",
      "Synagogue remains",
      "Manuscripts",
      "Artifacts",
      "Documentary evidence"
    ],
    culturalImpact: [
      "Printing influence",
      "Cultural adaptation",
      "Social organization",
      "Religious practice",
      "Intellectual development"
    ]
  }
]

export default function MedievalPeriodPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">The Medieval Period</h1>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-xl">
          The Medieval Period represents a complex and dynamic era in Jewish history, spanning from the Islamic 
          conquests through the Renaissance. This exploration examines the major historical developments, 
          cultural achievements, and religious transformations that shaped Judaism during this diverse period. 
          From the flourishing of Jewish culture under Islamic rule to the challenges and achievements of 
          European Jewish communities, this era witnessed both remarkable intellectual achievements and 
          significant social challenges.
        </p>
      </div>

      <div className="space-y-8">
        {medievalContent.map((period, index) => (
          <Card key={index} className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">{period.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg">{period.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Events</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {period.keyEvents.map((event, idx) => (
                      <li key={idx}>{event}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Scripture References</h3>
                  <ul className="space-y-2">
                    {period.scriptureRefs.map((ref, idx) => (
                      <li key={idx}>
                        <span className="font-medium">{ref.reference}:</span> {ref.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Archaeological Evidence</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {period.archaeologicalEvidence.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Significance</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {period.significance.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Cultural Impact</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {period.culturalImpact.map((item, idx) => (
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
          <Link href="/religion/judaism/history/rabbinic" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Rabbinic Period</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the period that preceded the Medieval era.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/history/modern" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Modern Period</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the development of Judaism after the Medieval era.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/theology/kabbalah" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Kabbalah</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover the development of Jewish mysticism during the Medieval Period.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}