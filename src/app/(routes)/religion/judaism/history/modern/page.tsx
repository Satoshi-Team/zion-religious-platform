import React from 'react'
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
  title: "Modern Period | Jewish History",
  description: "Explore the Modern Period of Jewish history, from the Enlightenment through contemporary times, including key events, archaeological evidence, and cultural developments.",
  openGraph: {
    title: "Modern Period | Jewish History",
    description: "Comprehensive guide to the Modern Period in Jewish history",
    type: "website",
  },
  keywords: [
    "Modern Period",
    "Jewish History",
    "Enlightenment",
    "Emancipation",
    "Zionism",
    "Holocaust",
    "State of Israel",
    "Jewish Denominations"
  ]
}

const modernContent: HistoricalPeriod[] = [
  {
    title: "The Enlightenment and Emancipation",
    description: "The period of Jewish integration into European society, marked by the Haskalah movement and the struggle for civil rights.",
    keyEvents: [
      "Mendelssohn's influence",
      "Jewish emancipation",
      "Reform movement",
      "Orthodox response",
      "Cultural integration"
    ],
    scriptureRefs: [
      {
        reference: "Mendelssohn, Jerusalem",
        text: "The state has the right to coerce its citizens to perform civil and political duties, but not to prescribe religious opinions and practices."
      },
      {
        reference: "Hirsch, Nineteen Letters",
        text: "Torah im derech eretz (Torah with worldly ways) is not a temporary accommodation to the spirit of the times, but rather the eternal principle of Judaism."
      }
    ],
    significance: [
      "Jewish integration",
      "Religious reform",
      "Cultural adaptation",
      "Educational development",
      "Social transformation"
    ],
    archaeologicalEvidence: [
      "Reform synagogues",
      "Jewish schools",
      "Cultural artifacts",
      "Documentary evidence",
      "Material culture"
    ],
    culturalImpact: [
      "Modern education",
      "Cultural synthesis",
      "Religious innovation",
      "Social integration",
      "Literary development"
    ]
  },
  {
    title: "The Rise of Modern Jewish Movements",
    description: "The development of diverse Jewish religious and ideological movements in response to modernity.",
    keyEvents: [
      "Conservative Judaism",
      "Reconstructionist movement",
      "Zionist development",
      "Bundist movement",
      "Hasidic revival"
    ],
    scriptureRefs: [
      {
        reference: "Herzl, The Jewish State",
        text: "The Jewish question exists wherever Jews live in perceptible numbers. Where it does not exist, it is brought in together with Jewish immigrants."
      },
      {
        reference: "Kaplan, Judaism as a Civilization",
        text: "Judaism is an evolving religious civilization, encompassing the totality of Jewish life and culture."
      }
    ],
    significance: [
      "Religious diversity",
      "Political development",
      "Cultural renewal",
      "Social organization",
      "Identity formation"
    ],
    archaeologicalEvidence: [
      "Movement documents",
      "Synagogue architecture",
      "Educational institutions",
      "Cultural artifacts",
      "Material remains"
    ],
    culturalImpact: [
      "Religious pluralism",
      "Political activism",
      "Cultural expression",
      "Social movements",
      "Educational innovation"
    ]
  },
  {
    title: "The Holocaust and World War II",
    description: "The systematic persecution and genocide of European Jewry, and its lasting impact on Jewish history.",
    keyEvents: [
      "Nazi rise to power",
      "Kristallnacht",
      "Ghettos and camps",
      "Resistance movements",
      "Liberation"
    ],
    scriptureRefs: [
      {
        reference: "Wiesel, Night",
        text: "Never shall I forget that night, the first night in camp, which has turned my life into one long night, seven times sealed."
      }
    ],
    significance: [
      "Historical trauma",
      "Jewish resistance",
      "Post-war migration",
      "Memory preservation",
      "Identity transformation"
    ],
    archaeologicalEvidence: [
      "Concentration camps",
      "Ghetto remains",
      "Documentary evidence",
      "Personal artifacts",
      "Material culture"
    ],
    culturalImpact: [
      "Memory culture",
      "Literary response",
      "Theological reflection",
      "Social organization",
      "Identity formation"
    ]
  },
  {
    title: "The State of Israel and Contemporary Judaism",
    description: "The establishment of the State of Israel and the development of modern Jewish life worldwide.",
    keyEvents: [
      "Israeli independence",
      "Soviet Jewry movement",
      "Jewish feminism",
      "Interfaith dialogue",
      "Digital revolution"
    ],
    scriptureRefs: [
      {
        reference: "Israeli Declaration of Independence",
        text: "The Land of Israel was the birthplace of the Jewish people. Here their spiritual, religious and political identity was shaped."
      }
    ],
    significance: [
      "National revival",
      "Cultural renaissance",
      "Religious innovation",
      "Social transformation",
      "Global influence"
    ],
    archaeologicalEvidence: [
      "Modern synagogues",
      "Cultural institutions",
      "Documentary evidence",
      "Digital archives",
      "Material culture"
    ],
    culturalImpact: [
      "National culture",
      "Religious diversity",
      "Social innovation",
      "Cultural expression",
      "Global influence"
    ]
  }
]

export default function ModernPeriodPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">The Modern Period</h1>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-xl">
          The Modern Period represents a transformative era in Jewish history, beginning with the Enlightenment 
          and continuing through contemporary times. This exploration examines the major historical developments, 
          cultural achievements, and religious transformations that have shaped Judaism in the modern world. 
          From the challenges of emancipation and integration to the establishment of the State of Israel and 
          the development of diverse Jewish movements, this era has witnessed unprecedented change and 
          adaptation in Jewish life and thought.
        </p>
      </div>

      <div className="space-y-8">
        {modernContent.map((period, index) => (
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
          <Link href="/religion/judaism/history/medieval" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Medieval Period</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the period that preceded the Modern era.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/theology/messianism" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Messianism</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about modern Jewish messianic thought and movements.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/impact/art" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Modern Jewish Art</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover the development of Jewish art in the modern period.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}