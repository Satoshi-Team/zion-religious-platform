import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MessianicDoctrine {
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
  title: "Messianism | Jewish Theology",
  description: "Explore Jewish messianic beliefs, including the Davidic Messiah, messianic age, and the development of messianic thought throughout Jewish history.",
  openGraph: {
    title: "Messianism | Jewish Theology",
    description: "Comprehensive guide to Jewish messianic theology and its significance",
    type: "website",
  },
  keywords: [
    "Jewish Messianism",
    "Davidic Messiah",
    "Messianic Age",
    "Jewish Eschatology",
    "Jewish Theology",
    "Messianic Hope",
    "Jewish Prophecy",
    "Jewish Belief"
  ]
}

const messianicContent: MessianicDoctrine[] = [
  {
    title: "The Davidic Messiah: Royal Redeemer",
    description: "The concept of the Davidic Messiah, a descendant of King David who will restore Israel and usher in an era of peace and justice.",
    keyPoints: [
      "Davidic lineage",
      "Political restoration",
      "Spiritual renewal",
      "Universal peace",
      "Divine wisdom"
    ],
    scriptureRefs: [
      {
        reference: "Isaiah 11:1-2",
        text: "A shoot shall come out from the stump of Jesse, and a branch shall grow out of his roots. The spirit of the Lord shall rest on him, the spirit of wisdom and understanding, the spirit of counsel and might, the spirit of knowledge and the fear of the Lord."
      },
      {
        reference: "Jeremiah 23:5-6",
        text: "The days are surely coming, says the Lord, when I will raise up for David a righteous Branch, and he shall reign as king and deal wisely, and shall execute justice and righteousness in the land. In his days Judah will be saved and Israel will live in safety."
      }
    ],
    significance: [
      "Shapes Jewish political hope",
      "Informs messianic expectations",
      "Guides ethical behavior",
      "Influences Jewish identity",
      "Fosters communal resilience"
    ],
    historicalDevelopment: [
      "Biblical foundation",
      "Second Temple period",
      "Rabbinic elaboration",
      "Medieval speculation",
      "Modern reinterpretation"
    ],
    modernInterpretations: [
      "Zionist perspectives",
      "Hasidic understandings",
      "Reform views",
      "Conservative approaches",
      "Contemporary relevance"
    ]
  },
  {
    title: "The Messianic Age: World Transformation",
    description: "The vision of a transformed world characterized by universal peace, knowledge of God, and the restoration of Israel.",
    keyPoints: [
      "Universal peace",
      "Knowledge of God",
      "Restoration of Israel",
      "End of oppression",
      "Spiritual renewal"
    ],
    scriptureRefs: [
      {
        reference: "Isaiah 2:2-4",
        text: "In days to come the mountain of the Lord's house shall be established as the highest of the mountains, and shall be raised above the hills; all the nations shall stream to it. Many peoples shall come and say, 'Come, let us go up to the mountain of the Lord, to the house of the God of Jacob; that he may teach us his ways and that we may walk in his paths.'"
      },
      {
        reference: "Isaiah 11:6-9",
        text: "The wolf shall live with the lamb, the leopard shall lie down with the kid, the calf and the lion and the fatling together, and a little child shall lead them. They will not hurt or destroy on all my holy mountain; for the earth will be full of the knowledge of the Lord as the waters cover the sea."
      }
    ],
    significance: [
      "Shapes Jewish eschatology",
      "Informs ethical action",
      "Guides social vision",
      "Fosters hope",
      "Influences Jewish practice"
    ],
    historicalDevelopment: [
      "Prophetic vision",
      "Apocalyptic literature",
      "Rabbinic interpretation",
      "Medieval speculation",
      "Modern adaptation"
    ],
    modernInterpretations: [
      "Social justice focus",
      "Environmental concerns",
      "Interfaith dialogue",
      "Political implications",
      "Contemporary relevance"
    ]
  },
  {
    title: "Messianic Movements and False Messiahs",
    description: "The history of messianic movements and the Jewish community's response to various messianic claims throughout history.",
    keyPoints: [
      "Historical movements",
      "Community responses",
      "Theological criteria",
      "Social impact",
      "Modern implications"
    ],
    scriptureRefs: [
      {
        reference: "Deuteronomy 13:1-5",
        text: "If prophets or those who divine by dreams appear among you and promise you omens or portents, and the omens or the portents declared by them take place, and they say, 'Let us follow other gods' (whom you have not known) 'and let us serve them,' you must not heed the words of those prophets or those who divine by dreams; for the Lord your God is testing you, to know whether you love the Lord your God with all your heart and soul."
      },
      {
        reference: "Matthew 24:24",
        text: "For false messiahs and false prophets will appear and produce great signs and omens, to lead astray, if possible, even the elect."
      }
    ],
    significance: [
      "Shapes Jewish skepticism",
      "Informs communal boundaries",
      "Guides theological criteria",
      "Influences Jewish identity",
      "Fosters critical thinking"
    ],
    historicalDevelopment: [
      "Bar Kokhba revolt",
      "Medieval movements",
      "Sabbatean controversy",
      "Hasidic development",
      "Modern movements"
    ],
    modernInterpretations: [
      "Historical analysis",
      "Psychological perspectives",
      "Sociological approaches",
      "Contemporary movements",
      "Interfaith implications"
    ]
  }
]

export default function MessianismPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Jewish Messianism</h1>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-xl">
          Jewish messianism represents a complex and evolving tradition of hope for redemption and transformation. 
          This exploration examines the development of messianic beliefs, from the biblical foundation through 
          various historical interpretations and contemporary understandings. The concept encompasses both the 
          figure of the Messiah and the vision of a transformed world, shaping Jewish thought and practice throughout history.
        </p>
      </div>

      <div className="space-y-8">
        {messianicContent.map((doctrine, index) => (
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
                <p>Explore how the Davidic covenant shapes messianic expectations.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/theology/torah" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Torah</CardTitle>
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
                <p>Discover how messianic hope influences Jewish ethics.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 