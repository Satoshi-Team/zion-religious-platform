import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface EthicalDoctrine {
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
  title: "Ethics | Jewish Theology",
  description: "Explore Jewish ethical thought, including moral principles, social justice, and the relationship between divine law and human responsibility.",
  openGraph: {
    title: "Ethics | Jewish Theology",
    description: "Comprehensive guide to Jewish ethical theology and its significance",
    type: "website",
  },
  keywords: [
    "Jewish Ethics",
    "Moral Principles",
    "Social Justice",
    "Jewish Law",
    "Jewish Theology",
    "Ethical Behavior",
    "Jewish Values",
    "Moral Philosophy"
  ]
}

const ethicalContent: EthicalDoctrine[] = [
  {
    title: "Divine Command and Human Responsibility",
    description: "The relationship between divine commandments and human moral responsibility in Jewish ethical thought.",
    keyPoints: [
      "Divine moral authority",
      "Human free will",
      "Moral reasoning",
      "Divine-human partnership",
      "Ethical autonomy"
    ],
    scriptureRefs: [
      {
        reference: "Deuteronomy 30:19",
        text: "I call heaven and earth to witness against you today that I have set before you life and death, blessings and curses. Choose life so that you and your descendants may live."
      },
      {
        reference: "Genesis 4:7",
        text: "If you do well, will you not be accepted? And if you do not do well, sin is lurking at the door; its desire is for you, but you must master it."
      }
    ],
    significance: [
      "Shapes moral decision-making",
      "Informs ethical responsibility",
      "Guides personal conduct",
      "Influences communal life",
      "Fosters spiritual growth"
    ],
    historicalDevelopment: [
      "Biblical foundation",
      "Rabbinic interpretation",
      "Medieval philosophy",
      "Modern ethical thought",
      "Contemporary applications"
    ],
    modernInterpretations: [
      "Existentialist approaches",
      "Natural law perspectives",
      "Virtue ethics",
      "Commandment theology",
      "Contemporary relevance"
    ]
  },
  {
    title: "Social Justice and Tikkun Olam",
    description: "The Jewish commitment to social justice and the concept of repairing the world through ethical action.",
    keyPoints: [
      "Social responsibility",
      "Economic justice",
      "Environmental stewardship",
      "Human dignity",
      "Community welfare"
    ],
    scriptureRefs: [
      {
        reference: "Leviticus 19:15-16",
        text: "You shall not render an unjust judgment; you shall not be partial to the poor or defer to the great: with justice you shall judge your neighbor. You shall not go around as a slanderer among your people, and you shall not profit by the blood of your neighbor: I am the Lord."
      },
      {
        reference: "Isaiah 1:17",
        text: "Learn to do good; seek justice, rescue the oppressed, defend the orphan, plead for the widow."
      }
    ],
    significance: [
      "Shapes social action",
      "Informs public policy",
      "Guides communal responsibility",
      "Influences global engagement",
      "Fosters ethical leadership"
    ],
    historicalDevelopment: [
      "Prophetic tradition",
      "Rabbinic teachings",
      "Medieval thought",
      "Modern movements",
      "Contemporary activism"
    ],
    modernInterpretations: [
      "Social justice movements",
      "Environmental ethics",
      "Economic justice",
      "Human rights",
      "Global responsibility"
    ]
  },
  {
    title: "Interpersonal Ethics and Character Development",
    description: "The Jewish emphasis on personal character development and ethical relationships between individuals.",
    keyPoints: [
      "Character formation",
      "Interpersonal conduct",
      "Speech ethics",
      "Business ethics",
      "Family relationships"
    ],
    scriptureRefs: [
      {
        reference: "Leviticus 19:18",
        text: "You shall not take vengeance or bear a grudge against any of your people, but you shall love your neighbor as yourself: I am the Lord."
      },
      {
        reference: "Proverbs 22:1",
        text: "A good name is to be chosen rather than great riches, and favor is better than silver or gold."
      }
    ],
    significance: [
      "Shapes personal conduct",
      "Informs relationships",
      "Guides communication",
      "Influences character",
      "Fosters ethical community"
    ],
    historicalDevelopment: [
      "Biblical wisdom",
      "Rabbinic ethics",
      "Musar movement",
      "Modern psychology",
      "Contemporary practice"
    ],
    modernInterpretations: [
      "Character education",
      "Relationship counseling",
      "Business ethics",
      "Communication ethics",
      "Family values"
    ]
  }
]

export default function EthicsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Jewish Ethics</h1>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-xl">
          Jewish ethics represents a rich tradition of moral thought and practice that combines divine guidance 
          with human responsibility. This exploration examines the development of Jewish ethical principles, 
          from biblical foundations through rabbinic interpretation to contemporary applications. The tradition 
          emphasizes both individual character development and communal responsibility, shaping Jewish life and 
          influencing broader ethical discourse.
        </p>
      </div>

      <div className="space-y-8">
        {ethicalContent.map((doctrine, index) => (
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
          <Link href="/religion/judaism/theology/torah" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Torah</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore how Torah guides Jewish ethical thought and practice.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/theology/covenant" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Covenant</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the ethical implications of the covenant relationship.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/theology/messianism" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Messianism</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover how messianic hope influences Jewish ethics.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 