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
  title: "Biblical Period | Jewish History",
  description: "Explore the Biblical Period of Jewish history, from the Patriarchs through the Babylonian Exile, including key events, archaeological evidence, and cultural developments.",
  openGraph: {
    title: "Biblical Period | Jewish History",
    description: "Comprehensive guide to the Biblical Period in Jewish history",
    type: "website",
  },
  keywords: [
    "Biblical Period",
    "Jewish History",
    "Patriarchs",
    "Exodus",
    "Monarchy",
    "First Temple",
    "Babylonian Exile",
    "Ancient Israel"
  ]
}

const biblicalContent: HistoricalPeriod[] = [
  {
    title: "The Patriarchal Period",
    description: "The foundational period of Jewish history, beginning with Abraham and continuing through the lives of Isaac, Jacob, and Joseph.",
    keyEvents: [
      "Call of Abraham",
      "Covenant establishment",
      "Settlement in Canaan",
      "Joseph in Egypt",
      "Israelite slavery"
    ],
    scriptureRefs: [
      {
        reference: "Genesis 12:1-3",
        text: "Now the Lord said to Abram, 'Go from your country and your kindred and your father's house to the land that I will show you. I will make of you a great nation, and I will bless you, and make your name great, so that you will be a blessing.'"
      },
      {
        reference: "Genesis 15:18",
        text: "On that day the Lord made a covenant with Abram, saying, 'To your descendants I give this land, from the river of Egypt to the great river, the river Euphrates.'"
      }
    ],
    significance: [
      "Establishes monotheistic faith",
      "Forms covenant relationship",
      "Shapes national identity",
      "Develops family structure",
      "Influences cultural practices"
    ],
    archaeologicalEvidence: [
      "Ancient Near Eastern texts",
      "Bronze Age settlements",
      "Canaanite artifacts",
      "Egyptian records",
      "Nomadic patterns"
    ],
    culturalImpact: [
      "Family-based society",
      "Pastoral lifestyle",
      "Tribal organization",
      "Religious practices",
      "Social customs"
    ]
  },
  {
    title: "The Exodus and Wilderness Period",
    description: "The liberation from Egyptian slavery, the giving of the Torah at Sinai, and the forty years of wandering in the wilderness.",
    keyEvents: [
      "Moses' leadership",
      "Ten plagues",
      "Exodus from Egypt",
      "Sinai revelation",
      "Wilderness wanderings"
    ],
    scriptureRefs: [
      {
        reference: "Exodus 12:40-41",
        text: "The time that the Israelites had lived in Egypt was four hundred thirty years. At the end of four hundred thirty years, on that very day, all the companies of the Lord went out from the land of Egypt."
      },
      {
        reference: "Exodus 19:5-6",
        text: "Now therefore, if you obey my voice and keep my covenant, you shall be my treasured possession out of all the peoples. Indeed, the whole earth is mine, but you shall be for me a priestly kingdom and a holy nation."
      }
    ],
    significance: [
      "Forms national identity",
      "Establishes religious law",
      "Develops communal structure",
      "Shapes cultural memory",
      "Influences later traditions"
    ],
    archaeologicalEvidence: [
      "Egyptian records",
      "Desert settlements",
      "Ancient routes",
      "Material culture",
      "Geographic features"
    ],
    culturalImpact: [
      "Religious calendar",
      "Legal system",
      "Social organization",
      "Ritual practices",
      "Literary traditions"
    ]
  },
  {
    title: "The Monarchical Period",
    description: "The establishment of the Israelite monarchy, the building of the First Temple, and the division into Northern and Southern Kingdoms.",
    keyEvents: [
      "Saul's kingship",
      "Davidic dynasty",
      "Solomon's reign",
      "Temple construction",
      "Kingdom division"
    ],
    scriptureRefs: [
      {
        reference: "2 Samuel 7:12-13",
        text: "When your days are fulfilled and you lie down with your ancestors, I will raise up your offspring after you, who shall come forth from your body, and I will establish his kingdom. He shall build a house for my name, and I will establish the throne of his kingdom forever."
      },
      {
        reference: "1 Kings 6:1",
        text: "In the four hundred eightieth year after the Israelites came out of the land of Egypt, in the fourth year of Solomon's reign over Israel, in the month of Ziv, which is the second month, he began to build the house of the Lord."
      }
    ],
    significance: [
      "Establishes centralized rule",
      "Develops religious institutions",
      "Shapes political structure",
      "Advances cultural life",
      "Influences later history"
    ],
    archaeologicalEvidence: [
      "Jerusalem remains",
      "Palace structures",
      "Temple artifacts",
      "Administrative records",
      "Material culture"
    ],
    culturalImpact: [
      "Urban development",
      "Literary production",
      "Artistic expression",
      "Political organization",
      "Religious practices"
    ]
  },
  {
    title: "The Babylonian Exile",
    description: "The destruction of the First Temple, the Babylonian captivity, and the beginning of the Jewish diaspora.",
    keyEvents: [
      "Temple destruction",
      "Babylonian conquest",
      "Exile to Babylon",
      "Prophetic activity",
      "Cultural adaptation"
    ],
    scriptureRefs: [
      {
        reference: "2 Kings 25:8-9",
        text: "In the fifth month, on the seventh day of the month—which was the nineteenth year of King Nebuchadnezzar, king of Babylon—Nebuzaradan, the captain of the bodyguard, a servant of the king of Babylon, came to Jerusalem. He burned the house of the Lord, the king's house, and all the houses of Jerusalem."
      },
      {
        reference: "Jeremiah 29:10",
        text: "For thus says the Lord: Only when Babylon's seventy years are completed will I visit you, and I will fulfill to you my promise and bring you back to this place."
      }
    ],
    significance: [
      "Transforms religious practice",
      "Develops diaspora culture",
      "Shapes biblical literature",
      "Influences Jewish identity",
      "Fosters adaptation"
    ],
    archaeologicalEvidence: [
      "Babylonian records",
      "Exile settlements",
      "Material culture",
      "Documentary evidence",
      "Cultural remains"
    ],
    culturalImpact: [
      "Synagogue development",
      "Literary production",
      "Religious innovation",
      "Cultural synthesis",
      "Identity formation"
    ]
  }
]

export default function BiblicalPeriodPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">The Biblical Period</h1>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-xl">
          The Biblical Period represents the foundational era of Jewish history, spanning from the Patriarchs 
          through the Babylonian Exile. This exploration examines the major historical developments, cultural 
          achievements, and religious transformations that shaped the Jewish people during this formative period. 
          From the establishment of monotheism to the development of complex social structures, this era laid 
          the groundwork for Jewish civilization.
        </p>
      </div>

      <div className="space-y-8">
        {biblicalContent.map((period, index) => (
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
          <Link href="/religion/judaism/history/second-temple" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Second Temple Period</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the development of Judaism after the Babylonian Exile.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/theology/covenant" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Covenant</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the development of covenant theology in the Biblical Period.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/theology/torah" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Torah</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover how the Torah developed during the Biblical Period.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 