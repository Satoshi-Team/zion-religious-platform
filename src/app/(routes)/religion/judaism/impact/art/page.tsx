import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ArtisticPeriod {
  title: string
  description: string
  keyArtworks: string[]
  scriptureRefs: Array<{
    reference: string
    text: string
  }>
  significance: string[]
  archaeologicalEvidence: string[]
  culturalImpact: string[]
}

export const metadata: Metadata = {
  title: "Jewish Art | Jewish Impact",
  description: "Explore the rich tradition of Jewish art, from ancient artifacts to contemporary expressions, including its historical development, cultural significance, and influence on global artistic movements.",
  openGraph: {
    title: "Jewish Art | Jewish Impact",
    description: "Comprehensive guide to Jewish artistic expression and influence",
    type: "website",
  },
  keywords: [
    "Jewish Art",
    "Jewish Artists",
    "Jewish Architecture",
    "Jewish Visual Culture",
    "Jewish Artistic Traditions",
    "Jewish Art History",
    "Jewish Cultural Expression",
    "Jewish Artistic Movements"
  ]
}

const artContent: ArtisticPeriod[] = [
  {
    title: "Ancient Jewish Art",
    description: "The artistic expressions of ancient Jewish communities, from the First Temple period through the Second Temple era, including architectural elements, ritual objects, and decorative arts.",
    keyArtworks: [
      "Temple menorah",
      "Mikveh designs",
      "Synagogue mosaics",
      "Ritual vessels",
      "Funerary art"
    ],
    scriptureRefs: [
      {
        reference: "Exodus 25:31-40",
        text: "Make a lampstand of pure gold. The lampstand and its base and its shaft are to be made of hammered work; its cups, its bulbs and its flowers shall be of one piece with it."
      },
      {
        reference: "1 Kings 6:29-35",
        text: "He carved all the walls of the house round about with carved engravings of cherubim, palm trees, and open flowers, inner and outer sanctuaries."
      }
    ],
    significance: [
      "Religious symbolism",
      "Cultural identity",
      "Artistic innovation",
      "Historical documentation",
      "Ritual expression"
    ],
    archaeologicalEvidence: [
      "Dura-Europos synagogue",
      "Beth Alpha mosaics",
      "Ancient coins",
      "Ritual objects",
      "Architectural remains"
    ],
    culturalImpact: [
      "Symbolic language",
      "Ritual aesthetics",
      "Cultural preservation",
      "Artistic tradition",
      "Historical legacy"
    ]
  },
  {
    title: "Medieval Jewish Art",
    description: "The development of Jewish artistic expression during the Middle Ages, including illuminated manuscripts, synagogue architecture, and ritual objects.",
    keyArtworks: [
      "Illuminated Haggadot",
      "Synagogue architecture",
      "Torah ornaments",
      "Marriage contracts",
      "Ritual objects"
    ],
    scriptureRefs: [
      {
        reference: "Psalm 96:6",
        text: "Splendor and majesty are before Him, strength and beauty are in His sanctuary."
      }
    ],
    significance: [
      "Manuscript illumination",
      "Architectural design",
      "Ritual aesthetics",
      "Cultural synthesis",
      "Artistic preservation"
    ],
    archaeologicalEvidence: [
      "Medieval manuscripts",
      "Synagogue remains",
      "Ritual objects",
      "Documentary evidence",
      "Material culture"
    ],
    culturalImpact: [
      "Visual tradition",
      "Cultural exchange",
      "Artistic innovation",
      "Religious expression",
      "Historical documentation"
    ]
  },
  {
    title: "Modern Jewish Art",
    description: "The flourishing of Jewish artistic expression in the modern period, including the emergence of distinct Jewish art movements and contemporary expressions.",
    keyArtworks: [
      "Chagall's paintings",
      "Modigliani's portraits",
      "Rothko's abstractions",
      "Jewish ceremonial art",
      "Contemporary installations"
    ],
    scriptureRefs: [
      {
        reference: "Chagall, My Life",
        text: "In our life there is a single color, as on an artist's palette, which provides the meaning of life and art. It is the color of love."
      }
    ],
    significance: [
      "Modernist influence",
      "Cultural identity",
      "Artistic innovation",
      "Social commentary",
      "Historical reflection"
    ],
    archaeologicalEvidence: [
      "Modern artworks",
      "Exhibition catalogs",
      "Artistic archives",
      "Documentary evidence",
      "Material culture"
    ],
    culturalImpact: [
      "Artistic movements",
      "Cultural expression",
      "Social influence",
      "Historical documentation",
      "Global recognition"
    ]
  },
  {
    title: "Contemporary Jewish Art",
    description: "The diverse expressions of Jewish art in the contemporary period, including new media, installation art, and digital expressions.",
    keyArtworks: [
      "Digital installations",
      "Public art projects",
      "Performance art",
      "Mixed media works",
      "Conceptual art"
    ],
    scriptureRefs: [
      {
        reference: "Contemporary Jewish Art Manifesto",
        text: "Jewish art in the digital age continues to explore the intersection of tradition and innovation, memory and imagination."
      }
    ],
    significance: [
      "Digital innovation",
      "Cultural dialogue",
      "Social engagement",
      "Artistic experimentation",
      "Global influence"
    ],
    archaeologicalEvidence: [
      "Digital archives",
      "Contemporary exhibitions",
      "Artistic documentation",
      "Material culture",
      "Virtual collections"
    ],
    culturalImpact: [
      "Digital expression",
      "Cultural innovation",
      "Social commentary",
      "Artistic evolution",
      "Global influence"
    ]
  }
]

export default function JewishArtPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Jewish Art</h1>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-xl">
          Jewish art represents a rich and diverse tradition of artistic expression that spans millennia, 
          from ancient ritual objects to contemporary digital installations. This exploration examines the 
          development of Jewish visual culture, its religious and cultural significance, and its influence 
          on global artistic movements. From the architectural splendor of ancient synagogues to the 
          innovative expressions of modern Jewish artists, this tradition continues to evolve while 
          maintaining deep connections to Jewish heritage and identity.
        </p>
      </div>

      <div className="space-y-8">
        {artContent.map((period, index) => (
          <Card key={index} className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">{period.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg">{period.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Artworks</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {period.keyArtworks.map((artwork, idx) => (
                      <li key={idx}>{artwork}</li>
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
          <Link href="/religion/judaism/history/modern" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Modern Period</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the historical context of modern Jewish art.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/impact/architecture" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Jewish Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the architectural achievements of Jewish communities.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/impact/literature" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Jewish Literature</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover the literary traditions that complement Jewish art.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 