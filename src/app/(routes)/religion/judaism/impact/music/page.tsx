import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MusicalPeriod {
  title: string
  description: string
  keyWorks: string[]
  scriptureRefs: Array<{
    reference: string
    text: string
  }>
  significance: string[]
  historicalEvidence: string[]
  culturalImpact: string[]
}

export const metadata: Metadata = {
  title: "Jewish Music | Jewish Impact",
  description: "Explore the rich tradition of Jewish music, from ancient liturgical chants to contemporary compositions, including its historical development, cultural significance, and influence on global musical movements.",
  openGraph: {
    title: "Jewish Music | Jewish Impact",
    description: "Comprehensive guide to Jewish musical expression and influence",
    type: "website",
  },
  keywords: [
    "Jewish Music",
    "Jewish Composers",
    "Jewish Liturgical Music",
    "Jewish Folk Music",
    "Jewish Musical Traditions",
    "Jewish Music History",
    "Jewish Cultural Expression",
    "Jewish Musical Movements"
  ]
}

const musicContent: MusicalPeriod[] = [
  {
    title: "Ancient Jewish Music",
    description: "The musical traditions of ancient Israel, including Temple music, liturgical chants, and folk music, which form the foundation of Jewish musical heritage.",
    keyWorks: [
      "Temple music",
      "Psalms chanting",
      "Ancient instruments",
      "Liturgical melodies",
      "Folk songs"
    ],
    scriptureRefs: [
      {
        reference: "1 Chronicles 15:16",
        text: "David told the leaders of the Levites to appoint their brothers as singers to sing joyful songs, accompanied by musical instruments: lyres, harps and cymbals."
      },
      {
        reference: "Psalm 150:3-5",
        text: "Praise Him with the sound of the trumpet; praise Him with the harp and lyre. Praise Him with timbrel and dance; praise Him with stringed instruments and flutes. Praise Him with loud cymbals; praise Him with resounding cymbals."
      }
    ],
    significance: [
      "Religious foundation",
      "Musical innovation",
      "Cultural identity",
      "Historical documentation",
      "Ritual expression"
    ],
    historicalEvidence: [
      "Ancient instruments",
      "Archaeological findings",
      "Textual references",
      "Iconographic evidence",
      "Musical notation"
    ],
    culturalImpact: [
      "Religious practice",
      "Musical influence",
      "Cultural preservation",
      "Ritual development",
      "Historical legacy"
    ]
  },
  {
    title: "Medieval Jewish Music",
    description: "The development of Jewish musical traditions during the Middle Ages, including the emergence of distinct liturgical styles and the influence of surrounding cultures.",
    keyWorks: [
      "Cantorial music",
      "Sephardic melodies",
      "Ashkenazic chants",
      "Jewish folk music",
      "Mystical music"
    ],
    scriptureRefs: [
      {
        reference: "Zohar, Song of Songs",
        text: "The soul sings when it is filled with the light of the Divine presence, and through song it ascends to higher spiritual realms."
      }
    ],
    significance: [
      "Liturgical development",
      "Cultural synthesis",
      "Musical innovation",
      "Regional styles",
      "Historical documentation"
    ],
    historicalEvidence: [
      "Medieval manuscripts",
      "Musical treatises",
      "Historical records",
      "Cultural artifacts",
      "Oral traditions"
    ],
    culturalImpact: [
      "Liturgical tradition",
      "Cultural exchange",
      "Musical innovation",
      "Regional influence",
      "Historical preservation"
    ]
  },
  {
    title: "Modern Jewish Music",
    description: "The flourishing of Jewish musical expression in the modern period, including the development of new genres and the influence of global musical trends.",
    keyWorks: [
      "Klezmer music",
      "Jewish art music",
      "Israeli folk music",
      "Jewish liturgical music",
      "Jewish popular music"
    ],
    scriptureRefs: [
      {
        reference: "Martin Buber, Tales of the Hasidim",
        text: "The melody is the soul of the word, and the word is the body of the melody. Together they create the complete expression of the spirit."
      }
    ],
    significance: [
      "Genre development",
      "Cultural expression",
      "Musical innovation",
      "Social commentary",
      "Identity formation"
    ],
    historicalEvidence: [
      "Modern compositions",
      "Musical recordings",
      "Historical documents",
      "Cultural archives",
      "Performance history"
    ],
    culturalImpact: [
      "Musical movements",
      "Cultural expression",
      "Social influence",
      "Historical documentation",
      "Global recognition"
    ]
  },
  {
    title: "Contemporary Jewish Music",
    description: "The diverse expressions of Jewish music in the contemporary period, including new genres, fusion styles, and digital innovations.",
    keyWorks: [
      "Jewish rock music",
      "Jewish hip-hop",
      "Jewish electronic music",
      "Jewish fusion music",
      "Jewish experimental music"
    ],
    scriptureRefs: [
      {
        reference: "Contemporary Jewish Music Manifesto",
        text: "Jewish music in the digital age continues to explore the intersection of tradition and innovation, memory and imagination, while embracing new forms of expression and global influences."
      }
    ],
    significance: [
      "Digital innovation",
      "Cultural dialogue",
      "Social engagement",
      "Musical experimentation",
      "Global influence"
    ],
    historicalEvidence: [
      "Contemporary recordings",
      "Digital archives",
      "Performance history",
      "Cultural reception",
      "Global impact"
    ],
    culturalImpact: [
      "Digital expression",
      "Cultural innovation",
      "Social commentary",
      "Musical evolution",
      "Global influence"
    ]
  }
]

export default function JewishMusicPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Jewish Music</h1>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-xl">
          Jewish music represents one of the world's oldest and most diverse musical traditions, 
          spanning from ancient Temple music to contemporary digital expressions. This exploration examines 
          the development of Jewish musical expression across millennia, its religious and cultural significance, 
          and its profound influence on global musical movements. From the sacred chants of the Temple to the 
          vibrant sounds of klezmer, from the soulful melodies of cantorial music to the innovative expressions 
          of contemporary Jewish artists, this tradition continues to evolve while maintaining deep connections 
          to Jewish heritage and identity.
        </p>
      </div>

      <div className="space-y-8">
        {musicContent.map((period, index) => (
          <Card key={index} className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">{period.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg">{period.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Works</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {period.keyWorks.map((work, idx) => (
                      <li key={idx}>{work}</li>
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
                <h3 className="text-lg font-semibold mb-2">Historical Evidence</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {period.historicalEvidence.map((item, idx) => (
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
                <p>Explore the historical context of modern Jewish music.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/impact/literature" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Jewish Literature</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover the literary traditions that complement Jewish music.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/impact/art" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Jewish Art</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the artistic traditions in Jewish culture.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 