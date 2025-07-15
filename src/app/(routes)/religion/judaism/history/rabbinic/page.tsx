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
  title: "Rabbinic Period | Jewish History",
  description: "Explore the Rabbinic Period of Jewish history, from the destruction of the Second Temple through the completion of the Talmud, including key events, archaeological evidence, and cultural developments.",
  openGraph: {
    title: "Rabbinic Period | Jewish History",
    description: "Comprehensive guide to the Rabbinic Period in Jewish history",
    type: "website",
  },
  keywords: [
    "Rabbinic Period",
    "Jewish History",
    "Tannaim",
    "Amoraim",
    "Mishnah",
    "Talmud",
    "Jewish Law",
    "Rabbinic Judaism"
  ]
}

const rabbinicContent: HistoricalPeriod[] = [
  {
    title: "The Tannaitic Period",
    description: "The era of the Tannaim, from the destruction of the Second Temple through the compilation of the Mishnah.",
    keyEvents: [
      "Destruction of Second Temple",
      "Yavneh Academy",
      "Bar Kokhba Revolt",
      "Mishnah compilation",
      "Rabbinic leadership"
    ],
    scriptureRefs: [
      {
        reference: "Avot 1:1",
        text: "Moses received the Torah from Sinai and transmitted it to Joshua, and Joshua to the elders, and the elders to the prophets, and the prophets transmitted it to the men of the Great Assembly."
      },
      {
        reference: "Tosefta Sotah 13:3",
        text: "When the Temple was destroyed, the sages gathered in the vineyard at Yavneh, and they said: The time will come when a person will seek a matter of Torah and will not find it, a matter of the scribes and will not find it."
      }
    ],
    significance: [
      "Establishes Rabbinic authority",
      "Develops oral tradition",
      "Forms legal system",
      "Shapes communal structure",
      "Preserves Jewish identity"
    ],
    archaeologicalEvidence: [
      "Yavneh excavations",
      "Synagogue remains",
      "Burial caves",
      "Coins",
      "Material culture"
    ],
    culturalImpact: [
      "Legal development",
      "Educational system",
      "Religious practices",
      "Social organization",
      "Literary production"
    ]
  },
  {
    title: "The Amoraic Period",
    description: "The era of the Amoraim, marked by the development of the Gemara and the completion of the Talmud.",
    keyEvents: [
      "Gemara development",
      "Talmud compilation",
      "Babylonian academies",
      "Palestinian centers",
      "Legal codification"
    ],
    scriptureRefs: [
      {
        reference: "Bava Metzia 59b",
        text: "Rav Yehuda said in the name of Rav: When Moses ascended on high, he found the Holy One, blessed be He, sitting and tying crowns to the letters of the Torah."
      }
    ],
    significance: [
      "Completes Talmud",
      "Develops legal system",
      "Establishes academies",
      "Shapes Jewish thought",
      "Influences practice"
    ],
    archaeologicalEvidence: [
      "Babylonian remains",
      "Synagogue mosaics",
      "Burial sites",
      "Artifacts",
      "Documentary evidence"
    ],
    culturalImpact: [
      "Legal tradition",
      "Educational methods",
      "Religious customs",
      "Social structures",
      "Literary heritage"
    ]
  },
  {
    title: "The Savoraic Period",
    description: "The final period of classical Rabbinic Judaism, marked by the editing and completion of the Talmud.",
    keyEvents: [
      "Talmud editing",
      "Text standardization",
      "Legal clarification",
      "Tradition preservation",
      "Cultural synthesis"
    ],
    scriptureRefs: [
      {
        reference: "Bava Batra 157b",
        text: "Rav Ashi and Ravina are the end of instruction, as it is written: 'Until I come and take you to a land like your own land, a land of grain and wine, a land of bread and vineyards, a land of olive oil and honey, that you may live and not die.'"
      }
    ],
    significance: [
      "Finalizes Talmud",
      "Standardizes text",
      "Clarifies law",
      "Preserves tradition",
      "Transmits heritage"
    ],
    archaeologicalEvidence: [
      "Babylonian sites",
      "Literary remains",
      "Material culture",
      "Documentary evidence",
      "Cultural artifacts"
    ],
    culturalImpact: [
      "Textual tradition",
      "Legal system",
      "Educational methods",
      "Religious practice",
      "Cultural heritage"
    ]
  },
  {
    title: "The Geonic Period",
    description: "The era of the Geonim, who served as the spiritual leaders of Babylonian Jewry and developed the Talmudic tradition.",
    keyEvents: [
      "Geonic leadership",
      "Responsa literature",
      "Legal development",
      "Cultural expansion",
      "Tradition transmission"
    ],
    scriptureRefs: [
      {
        reference: "Iggeret Rav Sherira Gaon",
        text: "And after Ravina, who was the end of instruction, the Savoraim arose and completed the Talmud, and they were the last of the Savoraim."
      }
    ],
    significance: [
      "Develops legal system",
      "Expands tradition",
      "Shapes practice",
      "Influences thought",
      "Preserves heritage"
    ],
    archaeologicalEvidence: [
      "Babylonian remains",
      "Documentary evidence",
      "Material culture",
      "Literary sources",
      "Cultural artifacts"
    ],
    culturalImpact: [
      "Legal development",
      "Religious practice",
      "Educational system",
      "Social organization",
      "Cultural heritage"
    ]
  }
]

export default function RabbinicPeriodPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">The Rabbinic Period</h1>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-xl">
          The Rabbinic Period represents a transformative era in Jewish history, beginning with the destruction 
          of the Second Temple and continuing through the completion of the Talmud. This exploration examines 
          the major historical developments, cultural achievements, and religious transformations that shaped 
          Judaism during this crucial period. From the establishment of Rabbinic authority to the development 
          of the Talmudic tradition, this era laid the foundation for modern Jewish practice and thought.
        </p>
      </div>

      <div className="space-y-8">
        {rabbinicContent.map((period, index) => (
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
                <p>Explore the period that preceded the Rabbinic era.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/history/medieval" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Medieval Period</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the development of Judaism after the Rabbinic era.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/theology/torah" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Torah</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover how the Torah was interpreted during the Rabbinic Period.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 