import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ScientificPeriod {
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
  title: "Jewish Science | Jewish Impact",
  description: "Explore Jewish contributions to scientific thought and discovery, from ancient astronomy to modern physics, including historical developments, cultural significance, and influence on global scientific progress.",
  openGraph: {
    title: "Jewish Science | Jewish Impact",
    description: "Comprehensive guide to Jewish scientific contributions and influence",
    type: "website",
  },
  keywords: [
    "Jewish Science",
    "Jewish Scientists",
    "Jewish Scientific Traditions",
    "Jewish Scientific History",
    "Jewish Scientific Contributions",
    "Jewish Scientific Thought",
    "Jewish Cultural Expression",
    "Jewish Scientific Movements"
  ]
}

const scienceContent: ScientificPeriod[] = [
  {
    title: "Ancient Jewish Science",
    description: "The scientific knowledge and observations of ancient Jewish communities, including astronomy, medicine, and natural philosophy, which laid the foundation for later scientific developments.",
    keyContributions: [
      "Biblical astronomy",
      "Ancient medicine",
      "Agricultural science",
      "Natural observations",
      "Mathematical concepts"
    ],
    scriptureRefs: [
      {
        reference: "Genesis 1:14-15",
        text: "And God said, 'Let there be lights in the expanse of the heavens to separate the day from the night. And let them be for signs and for seasons, and for days and years.'"
      },
      {
        reference: "Job 38:31-33",
        text: "Can you bind the chains of the Pleiades or loose the cords of Orion? Can you lead forth the Mazzaroth in their season, or can you guide the Bear with its children?"
      }
    ],
    significance: [
      "Scientific foundation",
      "Natural observation",
      "Cultural identity",
      "Historical documentation",
      "Religious integration"
    ],
    historicalEvidence: [
      "Ancient texts",
      "Archaeological findings",
      "Scientific treatises",
      "Cultural artifacts",
      "Historical records"
    ],
    culturalImpact: [
      "Scientific tradition",
      "Cultural preservation",
      "Religious practice",
      "Historical legacy",
      "Educational development"
    ]
  },
  {
    title: "Medieval Jewish Science",
    description: "The significant contributions of Jewish scientists during the Middle Ages, particularly in mathematics, astronomy, medicine, and philosophy, often serving as bridges between different scientific traditions.",
    keyContributions: [
      "Maimonides' medical works",
      "Abraham bar Hiyya's mathematics",
      "Abraham Ibn Ezra's astronomy",
      "Jewish medical practice",
      "Scientific translations"
    ],
    scriptureRefs: [
      {
        reference: "Maimonides, Guide for the Perplexed",
        text: "The study of nature and science leads to the knowledge of God, for through the understanding of His works, we come to know Him."
      }
    ],
    significance: [
      "Scientific advancement",
      "Cultural synthesis",
      "Knowledge transmission",
      "Medical innovation",
      "Historical documentation"
    ],
    historicalEvidence: [
      "Medieval manuscripts",
      "Scientific treatises",
      "Historical records",
      "Cultural artifacts",
      "Translation works"
    ],
    culturalImpact: [
      "Scientific tradition",
      "Cultural exchange",
      "Medical practice",
      "Educational development",
      "Historical preservation"
    ]
  },
  {
    title: "Modern Jewish Science",
    description: "The remarkable contributions of Jewish scientists in the modern period, particularly in physics, chemistry, medicine, and mathematics, which have profoundly influenced global scientific progress.",
    keyContributions: [
      "Einstein's relativity",
      "Jewish Nobel laureates",
      "Medical breakthroughs",
      "Mathematical theories",
      "Scientific institutions"
    ],
    scriptureRefs: [
      {
        reference: "Einstein, The World as I See It",
        text: "The most beautiful experience we can have is the mysterious. It is the fundamental emotion which stands at the cradle of true art and true science."
      }
    ],
    significance: [
      "Scientific revolution",
      "Technological advancement",
      "Medical innovation",
      "Theoretical development",
      "Global influence"
    ],
    historicalEvidence: [
      "Scientific publications",
      "Research institutions",
      "Historical documents",
      "Cultural archives",
      "Personal papers"
    ],
    culturalImpact: [
      "Scientific progress",
      "Cultural expression",
      "Social influence",
      "Educational development",
      "Global recognition"
    ]
  },
  {
    title: "Contemporary Jewish Science",
    description: "The ongoing contributions of Jewish scientists in contemporary fields, including quantum physics, biotechnology, computer science, and environmental studies.",
    keyContributions: [
      "Quantum computing",
      "Biotechnology advances",
      "Environmental science",
      "Medical research",
      "Space exploration"
    ],
    scriptureRefs: [
      {
        reference: "Contemporary Jewish Science Manifesto",
        text: "Jewish scientific tradition continues to explore the intersection of knowledge and wisdom, innovation and responsibility, while addressing the challenges of our time."
      }
    ],
    significance: [
      "Technological innovation",
      "Scientific advancement",
      "Medical progress",
      "Environmental protection",
      "Global impact"
    ],
    historicalEvidence: [
      "Contemporary research",
      "Scientific publications",
      "Research institutions",
      "Cultural reception",
      "Global influence"
    ],
    culturalImpact: [
      "Scientific leadership",
      "Cultural innovation",
      "Social responsibility",
      "Educational advancement",
      "Global influence"
    ]
  }
]

export default function JewishSciencePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Jewish Science</h1>
      
      <div className="prose prose-slate max-w-none mb-8">
        <p className="text-xl">
          Jewish science represents a rich tradition of scientific inquiry and discovery that spans millennia, 
          from ancient astronomical observations to contemporary breakthroughs in quantum physics. This exploration 
          examines the development of Jewish scientific thought and practice, its religious and cultural significance, 
          and its profound influence on global scientific progress. From the natural observations in biblical texts 
          to the revolutionary theories of modern Jewish scientists, from the medical innovations of medieval Jewish 
          physicians to the cutting-edge research of contemporary Jewish researchers, this tradition continues to 
          evolve while maintaining deep connections to Jewish heritage and values.
        </p>
      </div>

      <div className="space-y-8">
        {scienceContent.map((period, index) => (
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
                <p>Explore the historical context of modern Jewish science.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/impact/philosophy" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Jewish Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover the philosophical traditions that complement Jewish science.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/judaism/impact/medicine" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Jewish Medicine</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the medical traditions in Jewish culture.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 