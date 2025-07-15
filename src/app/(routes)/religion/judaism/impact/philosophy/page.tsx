import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PhilosophicalPeriod {
  title: string
  description: string
  keyContributions: string[]
  scriptureRefs: Array<{
    reference: string
    text: string
  }>
  significance: string[]
  historicalEvidence: string[]
  culturalImpact: string[]
}

export const metadata: Metadata = {
  title: "Jewish Philosophy | Jewish Impact",
  description: "Explore Jewish philosophical thought from antiquity to the present, including major thinkers, schools of thought, and their influence on both Jewish and general philosophy.",
  openGraph: {
    title: "Jewish Philosophy | Jewish Impact",
    description: "Comprehensive guide to Jewish philosophical traditions and influence",
    type: "website",
  },
  keywords: [
    "Jewish Philosophy",
    "Jewish Philosophers",
    "Jewish Philosophical Traditions",
    "Jewish Philosophical History",
    "Jewish Philosophical Contributions",
    "Jewish Philosophical Thought",
    "Jewish Cultural Expression",
    "Jewish Philosophical Movements"
  ]
}

const philosophyContent: PhilosophicalPeriod[] = [
  {
    title: "Ancient Jewish Philosophy",
    description: "The foundational philosophical ideas in Jewish thought, emerging from biblical and early rabbinic sources, exploring questions of creation, divine nature, human purpose, and ethical responsibility.",
    keyContributions: [
      "Biblical wisdom literature",
      "Creation theology",
      "Divine attributes",
      "Human nature",
      "Ethical monotheism"
    ],
    scriptureRefs: [
      {
        reference: "Proverbs 8:22-31",
        text: "The Lord created me at the beginning of His work, the first of His acts of old. Ages ago I was set up, at the first, before the beginning of the earth."
      },
      {
        reference: "Ecclesiastes 3:11",
        text: "He has made everything beautiful in its time. He has also set eternity in the human heart; yet no one can fathom what God has done from beginning to end."
      }
    ],
    significance: [
      "Philosophical foundation",
      "Theological development",
      "Ethical framework",
      "Cultural identity",
      "Historical documentation"
    ],
    historicalEvidence: [
      "Biblical texts",
      "Ancient commentaries",
      "Archaeological findings",
      "Cultural artifacts",
      "Historical records"
    ],
    culturalImpact: [
      "Religious thought",
      "Cultural preservation",
      "Ethical development",
      "Historical legacy",
      "Educational foundation"
    ]
  },
  {
    title: "Medieval Jewish Philosophy",
    description: "The flourishing of Jewish philosophical thought during the Middle Ages, particularly through engagement with Greek, Islamic, and Christian philosophical traditions, leading to significant developments in metaphysics, epistemology, and ethics.",
    keyContributions: [
      "Saadia Gaon's rationalism",
      "Maimonides' Guide",
      "Gersonides' astronomy",
      "Crescas' critique",
      "Jewish Aristotelianism"
    ],
    scriptureRefs: [
      {
        reference: "Maimonides, Guide for the Perplexed",
        text: "The foundation of all foundations and the pillar of all sciences is to know that there is a First Being who brought every existing thing into being."
      }
    ],
    significance: [
      "Philosophical synthesis",
      "Cultural integration",
      "Intellectual development",
      "Religious thought",
      "Historical documentation"
    ],
    historicalEvidence: [
      "Medieval manuscripts",
      "Philosophical treatises",
      "Historical records",
      "Cultural artifacts",
      "Translation works"
    ],
    culturalImpact: [
      "Philosophical tradition",
      "Cultural exchange",
      "Religious thought",
      "Educational development",
      "Historical preservation"
    ]
  },
  {
    title: "Modern Jewish Philosophy",
    description: "The development of Jewish philosophical thought in response to modernity, including the Enlightenment, emancipation, and new intellectual challenges, leading to diverse philosophical approaches and schools of thought.",
    keyContributions: [
      "Mendelssohn's enlightenment",
      "Hermann Cohen's ethics",
      "Martin Buber's dialogical philosophy",
      "Emmanuel Levinas' ethics",
      "Jewish existentialism"
    ],
    scriptureRefs: [
      {
        reference: "Martin Buber, I and Thou",
        text: "The primary word I-Thou can only be spoken with the whole being. The primary word I-It can never be spoken with the whole being."
      }
    ],
    significance: [
      "Modern adaptation",
      "Cultural renewal",
      "Intellectual innovation",
      "Social influence",
      "Global impact"
    ],
    historicalEvidence: [
      "Modern texts",
      "Philosophical works",
      "Historical documents",
      "Cultural archives",
      "Personal papers"
    ],
    culturalImpact: [
      "Modern thought",
      "Cultural expression",
      "Social influence",
      "Educational development",
      "Global recognition"
    ]
  },
  {
    title: "Contemporary Jewish Philosophy",
    description: "The ongoing development of Jewish philosophical thought in response to contemporary challenges, including postmodernism, feminism, environmental concerns, and new ethical questions.",
    keyContributions: [
      "Post-Holocaust theology",
      "Jewish feminism",
      "Environmental ethics",
      "Bioethics",
      "Digital ethics"
    ],
    scriptureRefs: [
      {
        reference: "Contemporary Jewish Philosophy Manifesto",
        text: "Jewish philosophical tradition continues to engage with contemporary challenges while maintaining its commitment to ethical monotheism and human responsibility."
      }
    ],
    significance: [
      "Contemporary relevance",
      "Ethical guidance",
      "Social responsibility",
      "Cultural adaptation",
      "Global influence"
    ],
    historicalEvidence: [
      "Contemporary works",
      "Philosophical publications",
      "Research institutions",
      "Cultural reception",
      "Global influence"
    ],
    culturalImpact: [
      "Modern relevance",
      "Cultural innovation",
      "Social responsibility",
      "Educational advancement",
      "Global influence"
    ]
  }
]

export default function JewishPhilosophyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Jewish Philosophy</h1>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-xl">
          Jewish philosophy represents a rich tradition of intellectual inquiry that spans millennia, 
          from ancient wisdom literature to contemporary ethical thought. This exploration examines 
          the development of Jewish philosophical ideas, their religious and cultural significance, 
          and their profound influence on both Jewish and general philosophical discourse. From the 
          foundational concepts in biblical texts to the sophisticated systems of medieval thinkers, 
          from the modern responses to Enlightenment challenges to the contemporary engagement with 
          pressing ethical questions, this tradition continues to evolve while maintaining deep 
          connections to Jewish heritage and values.
        </p>
      </div>

      <div className="space-y-8">
        {philosophyContent.map((period, index) => (
          <Card key={index} className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">{period.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg">{period.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Contributions</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {period.keyContributions.map((contribution, idx) => (
                      <li key={idx}>{contribution}</li>
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
                <p>Explore the historical context of modern Jewish philosophy.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/impact/science" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Jewish Science</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover the scientific traditions that complement Jewish philosophy.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/impact/ethics" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Jewish Ethics</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the ethical traditions in Jewish philosophy.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 