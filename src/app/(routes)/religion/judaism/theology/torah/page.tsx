import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface TorahDoctrine {
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
  title: "Torah | Jewish Theology",
  description: "Explore the central role of Torah in Jewish theology, including its divine origin, interpretation, and influence on Jewish life and practice.",
  openGraph: {
    title: "Torah | Jewish Theology",
    description: "Comprehensive guide to Torah theology and its significance in Judaism",
    type: "website",
  },
  keywords: [
    "Jewish Torah",
    "Written Torah",
    "Oral Torah",
    "Torah Study",
    "Jewish Law",
    "Jewish Theology",
    "Divine Revelation",
    "Jewish Practice"
  ]
}

const torahContent: TorahDoctrine[] = [
  {
    title: "The Written Torah: Divine Revelation",
    description: "The Written Torah, comprising the first five books of the Hebrew Bible, represents the foundational divine revelation to the Jewish people.",
    keyPoints: [
      "Divine origin and inspiration",
      "Five books of Moses",
      "Central narrative of Jewish history",
      "Foundation of Jewish law",
      "Source of divine wisdom"
    ],
    scriptureRefs: [
      {
        reference: "Deuteronomy 31:24-26",
        text: "When Moses had finished writing down in a book the words of this law to the very end, Moses commanded the Levites who carried the ark of the covenant of the Lord, saying, 'Take this book of the law and put it beside the ark of the covenant of the Lord your God; let it remain there as a witness against you.'"
      },
      {
        reference: "Exodus 24:12",
        text: "The Lord said to Moses, 'Come up to me on the mountain, and wait there; and I will give you the tablets of stone, with the law and the commandment, which I have written for their instruction.'"
      }
    ],
    significance: [
      "Forms basis of Jewish identity",
      "Shapes Jewish legal system",
      "Guides ethical behavior",
      "Preserves historical memory",
      "Informs Jewish worship"
    ],
    historicalDevelopment: [
      "Sinai revelation",
      "Written compilation",
      "Canonical formation",
      "Textual preservation",
      "Modern scholarship"
    ],
    modernInterpretations: [
      "Historical-critical approaches",
      "Literary analysis",
      "Contemporary relevance",
      "Feminist readings",
      "Post-Holocaust theology"
    ]
  },
  {
    title: "The Oral Torah: Living Tradition",
    description: "The Oral Torah represents the interpretive tradition that accompanies the Written Torah, providing guidance for its application in changing circumstances.",
    keyPoints: [
      "Transmission of interpretation",
      "Development of halakhah",
      "Formation of Mishnah",
      "Creation of Talmud",
      "Evolution of Jewish law"
    ],
    scriptureRefs: [
      {
        reference: "Deuteronomy 17:8-11",
        text: "If a judicial decision is too difficult for you to make between one kind of bloodshed and another, one kind of legal right and another, or one kind of assault and another—any such matters of dispute in your towns—then you shall immediately go up to the place that the Lord your God will choose, where you shall consult with the levitical priests and the judge who is in office in those days; they shall announce to you the decision in the case."
      },
      {
        reference: "Exodus 18:20",
        text: "You should teach them the statutes and instructions and make known to them the way they are to go and the things they are to do."
      }
    ],
    significance: [
      "Adapts Torah to new situations",
      "Preserves interpretive tradition",
      "Develops legal system",
      "Maintains communal practice",
      "Fosters intellectual engagement"
    ],
    historicalDevelopment: [
      "Prophetic interpretation",
      "Rabbinic development",
      "Talmudic compilation",
      "Medieval codification",
      "Modern adaptation"
    ],
    modernInterpretations: [
      "Conservative approaches",
      "Orthodox perspectives",
      "Reform interpretations",
      "Reconstructionist views",
      "Contemporary applications"
    ]
  },
  {
    title: "Torah Study and Practice",
    description: "The study and practice of Torah form the central focus of Jewish religious life, encompassing both intellectual engagement and practical application.",
    keyPoints: [
      "Daily study obligation",
      "Public Torah reading",
      "Halakhic observance",
      "Ethical application",
      "Spiritual development"
    ],
    scriptureRefs: [
      {
        reference: "Joshua 1:8",
        text: "This book of the law shall not depart out of your mouth; you shall meditate on it day and night, so that you may be careful to act in accordance with all that is written in it. For then you shall make your way prosperous, and then you shall be successful."
      },
      {
        reference: "Deuteronomy 6:7",
        text: "Recite them to your children and talk about them when you are at home and when you are away, when you lie down and when you rise."
      }
    ],
    significance: [
      "Maintains Jewish continuity",
      "Shapes Jewish education",
      "Guides daily practice",
      "Fosters community",
      "Develops character"
    ],
    historicalDevelopment: [
      "Ancient study methods",
      "Rabbinic academies",
      "Medieval yeshivot",
      "Modern institutions",
      "Contemporary approaches"
    ],
    modernInterpretations: [
      "Traditional study",
      "Modern scholarship",
      "Women's Torah study",
      "Digital resources",
      "Interdisciplinary approaches"
    ]
  }
]

export default function TorahPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Jewish Torah Theology</h1>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-xl">
          The Torah stands at the heart of Jewish theology and practice, serving as both the foundation of divine revelation 
          and the source of ongoing interpretation and guidance. This exploration examines the Written and Oral Torah, 
          their relationship, and their central role in shaping Jewish life and thought throughout history.
        </p>
      </div>

      <div className="space-y-8">
        {torahContent.map((doctrine, index) => (
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
                <p>Explore how the Torah relates to Jewish covenant theology.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/theology/messianism" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Messianism</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about messianic themes in the Torah.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/theology/ethics" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Ethics</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover how Torah guides Jewish ethical thought and practice.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 