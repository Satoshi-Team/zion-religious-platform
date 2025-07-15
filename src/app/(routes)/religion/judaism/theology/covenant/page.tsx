import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CovenantDoctrine {
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
  title: "Covenant | Jewish Theology",
  description: "Explore Jewish covenant theology, including the Abrahamic, Mosaic, and Davidic covenants. Learn about covenant renewal, divine promises, and the relationship between God and Israel.",
  openGraph: {
    title: "Covenant | Jewish Theology",
    description: "Comprehensive guide to Jewish covenant theology and its significance",
    type: "website",
  },
  keywords: [
    "Jewish Covenant",
    "Abrahamic Covenant",
    "Mosaic Covenant",
    "Davidic Covenant",
    "Covenant Theology",
    "Jewish Theology",
    "Divine Promises",
    "Jewish Belief"
  ]
}

const covenantContent: CovenantDoctrine[] = [
  {
    title: "The Abrahamic Covenant: Foundation of Jewish Identity",
    description: "The covenant with Abraham establishes the fundamental relationship between God and the Jewish people, promising land, descendants, and divine blessing.",
    keyPoints: [
      "Establishment of chosen people",
      "Promise of land and descendants",
      "Circumcision as covenant sign",
      "Universal blessing through Abraham",
      "Eternal nature of divine promise"
    ],
    scriptureRefs: [
      {
        reference: "Genesis 17:7-8",
        text: "I will establish my covenant between me and you and your offspring after you throughout their generations, for an everlasting covenant, to be God to you and to your offspring after you. And I will give to you, and to your offspring after you, the land where you are now an alien, all the land of Canaan, for a perpetual holding; and I will be their God."
      },
      {
        reference: "Genesis 12:2-3",
        text: "I will make of you a great nation, and I will bless you, and make your name great, so that you will be a blessing. I will bless those who bless you, and the one who curses you I will curse; and in you all the families of the earth shall be blessed."
      }
    ],
    significance: [
      "Forms basis of Jewish identity",
      "Establishes divine-human relationship",
      "Shapes Jewish self-understanding",
      "Influences Jewish mission",
      "Guides Jewish ethics"
    ],
    historicalDevelopment: [
      "Biblical establishment",
      "Prophetic interpretation",
      "Rabbinic elaboration",
      "Medieval theological development",
      "Modern reinterpretation"
    ],
    modernInterpretations: [
      "Zionist perspectives",
      "Universalist approaches",
      "Existentialist readings",
      "Post-Holocaust theology",
      "Interfaith dialogue"
    ]
  },
  {
    title: "The Mosaic Covenant: Law and Community",
    description: "The covenant at Sinai establishes the legal and communal framework for Jewish life, providing divine guidance through Torah and mitzvot.",
    keyPoints: [
      "Revelation of Torah",
      "Establishment of mitzvot",
      "Formation of priestly system",
      "Creation of sacred space",
      "Development of communal worship"
    ],
    scriptureRefs: [
      {
        reference: "Exodus 19:5-6",
        text: "Now therefore, if you obey my voice and keep my covenant, you shall be my treasured possession out of all the peoples. Indeed, the whole earth is mine, but you shall be for me a priestly kingdom and a holy nation."
      },
      {
        reference: "Deuteronomy 7:9",
        text: "Know therefore that the Lord your God is God, the faithful God who maintains covenant loyalty with those who love him and keep his commandments, to a thousand generations."
      }
    ],
    significance: [
      "Shapes Jewish legal system",
      "Forms basis of Jewish community",
      "Establishes worship patterns",
      "Guides ethical behavior",
      "Informs Jewish identity"
    ],
    historicalDevelopment: [
      "Sinai revelation",
      "Prophetic interpretation",
      "Rabbinic development",
      "Medieval codification",
      "Modern adaptation"
    ],
    modernInterpretations: [
      "Conservative approaches",
      "Reform perspectives",
      "Orthodox understandings",
      "Reconstructionist views",
      "Contemporary applications"
    ]
  },
  {
    title: "The Davidic Covenant: Kingship and Messianism",
    description: "The covenant with David establishes the promise of an eternal dynasty and shapes Jewish messianic expectations.",
    keyPoints: [
      "Promise of eternal dynasty",
      "Establishment of Jerusalem",
      "Connection to messianic hope",
      "Relationship to Temple",
      "Universal reign of God"
    ],
    scriptureRefs: [
      {
        reference: "2 Samuel 7:12-13",
        text: "I will raise up your offspring after you, who shall come forth from your body, and I will establish his kingdom. He shall build a house for my name, and I will establish the throne of his kingdom forever."
      },
      {
        reference: "Psalm 89:3-4",
        text: "You said, \"I have made a covenant with my chosen one, I have sworn to my servant David: 'I will establish your descendants forever, and build your throne for all generations.'\""
      }
    ],
    significance: [
      "Shapes messianic expectations",
      "Informs Jewish political thought",
      "Influences Temple theology",
      "Guides eschatological views",
      "Forms basis of Jewish hope"
    ],
    historicalDevelopment: [
      "Davidic establishment",
      "Prophetic elaboration",
      "Rabbinic interpretation",
      "Medieval messianism",
      "Modern perspectives"
    ],
    modernInterpretations: [
      "Zionist implications",
      "Political theology",
      "Messianic movements",
      "Contemporary relevance",
      "Interfaith dialogue"
    ]
  }
]

export default function CovenantPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Jewish Covenant Theology</h1>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-xl">
          Covenant theology forms the foundation of Jewish understanding of the relationship between God and Israel. 
          Through multiple covenants—with Abraham, Moses, and David—Judaism develops a rich theological framework 
          that shapes Jewish identity, practice, and hope. This exploration examines the historical development, 
          theological significance, and contemporary interpretations of Jewish covenant theology.
        </p>
      </div>

      <div className="space-y-8">
        {covenantContent.map((doctrine, index) => (
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
          <Link href="/religion/judaism/theology/monotheism" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Monotheism</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore how monotheism shapes Jewish covenant theology.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/theology/torah" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Torah</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the Torah's role in the Mosaic covenant.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/theology/messianism" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Messianism</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover how the Davidic covenant shapes Jewish messianic hope.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 