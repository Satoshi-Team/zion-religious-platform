import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface LiteraryPeriod {
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
  title: "Jewish Literature | Jewish Impact",
  description: "Explore the rich tradition of Jewish literature, from biblical texts to contemporary works, including its historical development, cultural significance, and influence on global literary movements.",
  openGraph: {
    title: "Jewish Literature | Jewish Impact",
    description: "Comprehensive guide to Jewish literary expression and influence",
    type: "website",
  },
  keywords: [
    "Jewish Literature",
    "Jewish Writers",
    "Jewish Poetry",
    "Jewish Fiction",
    "Jewish Literary Traditions",
    "Jewish Literature History",
    "Jewish Cultural Expression",
    "Jewish Literary Movements"
  ]
}

const literatureContent: LiteraryPeriod[] = [
  {
    title: "Biblical Literature",
    description: "The foundational texts of Jewish literature, including the Torah, Prophets, and Writings, which form the basis of Jewish religious and cultural identity.",
    keyWorks: [
      "The Torah (Pentateuch)",
      "The Prophets (Nevi'im)",
      "The Writings (Ketuvim)",
      "Apocryphal texts",
      "Dead Sea Scrolls"
    ],
    scriptureRefs: [
      {
        reference: "Deuteronomy 31:24-26",
        text: "When Moses had finished writing the words of this law in a book to the very end, Moses commanded the Levites who carried the ark of the covenant of the Lord."
      },
      {
        reference: "Psalm 1:1-2",
        text: "Happy are those who do not follow the advice of the wicked, or take the path that sinners tread, or sit in the seat of scoffers; but their delight is in the law of the Lord, and on his law they meditate day and night."
      }
    ],
    significance: [
      "Religious foundation",
      "Literary innovation",
      "Historical documentation",
      "Cultural identity",
      "Moral guidance"
    ],
    historicalEvidence: [
      "Ancient manuscripts",
      "Archaeological findings",
      "Textual traditions",
      "Translation history",
      "Commentary traditions"
    ],
    culturalImpact: [
      "Religious practice",
      "Literary influence",
      "Cultural preservation",
      "Moral development",
      "Historical legacy"
    ]
  },
  {
    title: "Rabbinic Literature",
    description: "The extensive body of Jewish legal, ethical, and narrative texts developed by the rabbis, including the Mishnah, Talmud, and Midrash.",
    keyWorks: [
      "The Mishnah",
      "The Babylonian Talmud",
      "The Jerusalem Talmud",
      "Midrash collections",
      "Responsa literature"
    ],
    scriptureRefs: [
      {
        reference: "Pirkei Avot 1:1",
        text: "Moses received the Torah from Sinai and transmitted it to Joshua, Joshua to the elders, and the elders to the prophets, and the prophets to the men of the Great Assembly."
      }
    ],
    significance: [
      "Legal development",
      "Ethical teaching",
      "Literary innovation",
      "Cultural synthesis",
      "Historical documentation"
    ],
    historicalEvidence: [
      "Manuscript traditions",
      "Archaeological remains",
      "Historical records",
      "Translation history",
      "Commentary traditions"
    ],
    culturalImpact: [
      "Legal tradition",
      "Ethical development",
      "Literary influence",
      "Cultural preservation",
      "Educational practice"
    ]
  },
  {
    title: "Medieval Jewish Literature",
    description: "The rich literary output of Jewish communities during the Middle Ages, including philosophy, poetry, and mystical texts.",
    keyWorks: [
      "Philosophical works",
      "Hebrew poetry",
      "Kabbalistic texts",
      "Ethical literature",
      "Travel narratives"
    ],
    scriptureRefs: [
      {
        reference: "Maimonides, Guide for the Perplexed",
        text: "The object of this treatise is to enlighten a religious man who has been trained to believe in the truth of our holy Law, who conscientiously fulfills his moral and religious duties, and at the same time has been successful in his philosophical studies."
      }
    ],
    significance: [
      "Philosophical development",
      "Poetic innovation",
      "Mystical expression",
      "Cultural synthesis",
      "Historical documentation"
    ],
    historicalEvidence: [
      "Medieval manuscripts",
      "Historical records",
      "Translation history",
      "Commentary traditions",
      "Cultural artifacts"
    ],
    culturalImpact: [
      "Philosophical influence",
      "Poetic tradition",
      "Mystical development",
      "Cultural exchange",
      "Literary innovation"
    ]
  },
  {
    title: "Modern Jewish Literature",
    description: "The flourishing of Jewish literary expression in the modern period, including fiction, poetry, and philosophical works.",
    keyWorks: [
      "Yiddish literature",
      "Hebrew literature",
      "Jewish American literature",
      "Holocaust literature",
      "Israeli literature"
    ],
    scriptureRefs: [
      {
        reference: "Sholem Aleichem, Tevye the Dairyman",
        text: "I am a Jew, and I am proud of it. I am a Jew, and I love my people."
      }
    ],
    significance: [
      "Cultural expression",
      "Historical reflection",
      "Social commentary",
      "Literary innovation",
      "Identity formation"
    ],
    historicalEvidence: [
      "Modern publications",
      "Literary archives",
      "Translation history",
      "Critical reception",
      "Cultural impact"
    ],
    culturalImpact: [
      "Literary movements",
      "Cultural expression",
      "Social influence",
      "Historical documentation",
      "Global recognition"
    ]
  },
  {
    title: "Contemporary Jewish Literature",
    description: "The diverse expressions of Jewish literature in the contemporary period, including new genres, digital literature, and global perspectives.",
    keyWorks: [
      "Contemporary fiction",
      "Digital literature",
      "Graphic novels",
      "Memoir and autobiography",
      "Experimental writing"
    ],
    scriptureRefs: [
      {
        reference: "Contemporary Jewish Literature Manifesto",
        text: "Jewish literature in the digital age continues to explore the intersection of tradition and innovation, memory and imagination, while embracing new forms of expression and global perspectives."
      }
    ],
    significance: [
      "Digital innovation",
      "Cultural dialogue",
      "Social engagement",
      "Literary experimentation",
      "Global influence"
    ],
    historicalEvidence: [
      "Contemporary publications",
      "Digital archives",
      "Literary criticism",
      "Cultural reception",
      "Global impact"
    ],
    culturalImpact: [
      "Digital expression",
      "Cultural innovation",
      "Social commentary",
      "Literary evolution",
      "Global influence"
    ]
  }
]

export default function JewishLiteraturePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Jewish Literature</h1>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-xl">
          Jewish literature represents one of the world's oldest and most influential literary traditions, 
          spanning from ancient biblical texts to contemporary digital expressions. This exploration examines 
          the development of Jewish writing across millennia, its religious and cultural significance, and 
          its profound influence on global literary movements. From the poetic beauty of the Psalms to the 
          philosophical depth of medieval works, from the social commentary of modern Yiddish literature to 
          the innovative expressions of contemporary Jewish writers, this tradition continues to evolve while 
          maintaining deep connections to Jewish heritage and identity.
        </p>
      </div>

      <div className="space-y-8">
        {literatureContent.map((period, index) => (
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
                <p>Explore the historical context of modern Jewish literature.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/impact/art" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Jewish Art</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover the artistic traditions that complement Jewish literature.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/impact/philosophy" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Jewish Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the philosophical traditions in Jewish thought.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 