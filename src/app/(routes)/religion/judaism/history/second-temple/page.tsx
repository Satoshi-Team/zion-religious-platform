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
  title: "Second Temple Period | Jewish History",
  description: "Explore the Second Temple Period of Jewish history, from the return from exile through the Roman destruction, including key events, archaeological evidence, and cultural developments.",
  openGraph: {
    title: "Second Temple Period | Jewish History",
    description: "Comprehensive guide to the Second Temple Period in Jewish history",
    type: "website",
  },
  keywords: [
    "Second Temple Period",
    "Jewish History",
    "Persian Period",
    "Hellenistic Period",
    "Hasmonean Dynasty",
    "Roman Period",
    "Dead Sea Scrolls",
    "Ancient Judaism"
  ]
}

const secondTempleContent: HistoricalPeriod[] = [
  {
    title: "The Persian Period",
    description: "The return from Babylonian exile, rebuilding of the Temple, and establishment of Jewish communal life under Persian rule.",
    keyEvents: [
      "Cyrus's decree",
      "Return from exile",
      "Temple rebuilding",
      "Ezra's reforms",
      "Nehemiah's wall"
    ],
    scriptureRefs: [
      {
        reference: "Ezra 1:2-3",
        text: "Thus says King Cyrus of Persia: The Lord, the God of heaven, has given me all the kingdoms of the earth, and he has charged me to build him a house at Jerusalem in Judah. Whoever is among you of all his people, may his God be with him! Let him go up to Jerusalem in Judah, and rebuild the house of the Lord, the God of Israel."
      },
      {
        reference: "Nehemiah 8:1-3",
        text: "All the people gathered together into the square before the Water Gate. They told the scribe Ezra to bring the book of the law of Moses, which the Lord had given to Israel. Accordingly, the priest Ezra brought the law before the assembly, both men and women and all who could hear with understanding."
      }
    ],
    significance: [
      "Restores Temple worship",
      "Establishes Torah authority",
      "Forms communal structure",
      "Develops religious leadership",
      "Shapes Jewish identity"
    ],
    archaeologicalEvidence: [
      "Persian administrative records",
      "Temple remains",
      "City walls",
      "Seal impressions",
      "Material culture"
    ],
    culturalImpact: [
      "Religious reforms",
      "Social organization",
      "Literary production",
      "Legal development",
      "Cultural renewal"
    ]
  },
  {
    title: "The Hellenistic Period",
    description: "The spread of Greek culture, the rise of Jewish sects, and the development of Jewish literature and thought.",
    keyEvents: [
      "Alexander's conquest",
      "Ptolemaic rule",
      "Seleucid control",
      "Translation of Septuagint",
      "Emergence of sects"
    ],
    scriptureRefs: [
      {
        reference: "1 Maccabees 1:11-15",
        text: "In those days certain renegades came out from Israel and misled many, saying, 'Let us go and make a covenant with the Gentiles around us, for since we separated from them many disasters have come upon us.' This proposal pleased them, and some of the people eagerly went to the king, who authorized them to observe the ordinances of the Gentiles."
      }
    ],
    significance: [
      "Cultural synthesis",
      "Religious diversity",
      "Literary development",
      "Philosophical influence",
      "Social transformation"
    ],
    archaeologicalEvidence: [
      "Hellenistic architecture",
      "Greek inscriptions",
      "Coins",
      "Artifacts",
      "Settlement patterns"
    ],
    culturalImpact: [
      "Greek influence",
      "Jewish literature",
      "Religious thought",
      "Social structures",
      "Artistic expression"
    ]
  },
  {
    title: "The Hasmonean Period",
    description: "The Maccabean revolt, establishment of Jewish independence, and development of Jewish political power.",
    keyEvents: [
      "Maccabean revolt",
      "Temple rededication",
      "Hasmonean dynasty",
      "Territorial expansion",
      "Internal conflicts"
    ],
    scriptureRefs: [
      {
        reference: "1 Maccabees 4:36-38",
        text: "Then Judas and his brothers said, 'See, our enemies are crushed; let us go up to cleanse the sanctuary and dedicate it.' So all the army assembled and went up to Mount Zion."
      }
    ],
    significance: [
      "Jewish independence",
      "Political power",
      "Religious freedom",
      "Territorial expansion",
      "Dynastic rule"
    ],
    archaeologicalEvidence: [
      "Hasmonean palaces",
      "Fortress remains",
      "Coins",
      "Inscriptions",
      "Material culture"
    ],
    culturalImpact: [
      "Political institutions",
      "Military development",
      "Religious practices",
      "Artistic expression",
      "Social organization"
    ]
  },
  {
    title: "The Roman Period",
    description: "Roman conquest, Herod's reign, and the development of diverse Jewish movements leading to the Temple's destruction.",
    keyEvents: [
      "Roman conquest",
      "Herod's reign",
      "Temple expansion",
      "Jewish revolts",
      "Temple destruction"
    ],
    scriptureRefs: [
      {
        reference: "Josephus, Jewish War 6.250",
        text: "While the holy house was on fire, everything was plundered that came to hand, and ten thousand of those that were caught were slain; nor was there a commiseration of any age, or any reverence of gravity; but children, and old men, and profane persons, and priests were all slain in the same manner."
      }
    ],
    significance: [
      "End of Temple period",
      "Diaspora expansion",
      "Rabbinic development",
      "Christian emergence",
      "Historical transformation"
    ],
    archaeologicalEvidence: [
      "Herodian architecture",
      "Roman remains",
      "Dead Sea Scrolls",
      "Ossuaries",
      "Material culture"
    ],
    culturalImpact: [
      "Religious transformation",
      "Literary production",
      "Social reorganization",
      "Cultural adaptation",
      "Identity development"
    ]
  }
]

export default function SecondTemplePeriodPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">The Second Temple Period</h1>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-xl">
          The Second Temple Period represents a crucial era in Jewish history, spanning from the return from 
          Babylonian exile through the Roman destruction of the Second Temple. This exploration examines the 
          major historical developments, cultural achievements, and religious transformations that shaped 
          Judaism during this dynamic period. From the restoration of Temple worship to the emergence of 
          diverse Jewish movements, this era laid the foundation for modern Judaism.
        </p>
      </div>

      <div className="space-y-8">
        {secondTempleContent.map((period, index) => (
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
          <Link href="/religion/judaism/history/biblical" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Biblical Period</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the foundational period of Jewish history before the Second Temple.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/history/rabbinic" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Rabbinic Period</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the development of Rabbinic Judaism after the Temple's destruction.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/theology/messianism" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Messianism</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover how messianic beliefs developed during the Second Temple Period.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 