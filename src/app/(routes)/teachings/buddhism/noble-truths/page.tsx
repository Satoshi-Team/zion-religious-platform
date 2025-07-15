import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ScriptureReference {
  reference: string
  text: string
  explanation: string
}

interface HistoricalDevelopment {
  period: string
  description: string
  keyFigures: Array<{
    name: string
    contribution: string
    dates?: string
  }>
  significance: string
}

interface TheologicalConcept {
  title: string
  description: string
  keyPoints: string[]
  scriptureRefs: string[]
  challenges?: string[]
}

interface Resource {
  title: string
  author?: string
  url: string
  type: string
  description: string
  affiliate?: boolean
  affiliateUrl?: string
}

interface NobleTruthsContent {
  introduction: string
  definition: string
  scriptureReferences: ScriptureReference[]
  historicalDevelopment: HistoricalDevelopment[]
  theologicalConcepts: TheologicalConcept[]
  commonMisconceptions: Array<{
    misconception: string
    correction: string
  }>
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "The Four Noble Truths | Buddhist Foundations",
  description: "Explore the Four Noble Truths - the foundational teaching of Buddhism that explains the nature of suffering and the path to liberation. Learn about their historical context, philosophical implications, and practical application.",
  openGraph: {
    title: "The Four Noble Truths | Buddhist Foundations",
    description: "Comprehensive guide to understanding the Four Noble Truths of Buddhism",
    type: "website",
  },
}

const nobleTruthsContent: NobleTruthsContent = {
  introduction: `The Four Noble Truths represent the Buddha's fundamental teaching about the nature of suffering and the path to liberation. First expounded in the Deer Park at Sarnath, these truths form the foundation of Buddhist thought and practice across all traditions.`,
  definition: `The Four Noble Truths are: the truth of suffering (dukkha), the truth of the origin of suffering (samudaya), the truth of the cessation of suffering (nirodha), and the truth of the path leading to cessation (magga). These truths diagnose the human condition and prescribe a solution through the Buddhist path.`,
  scriptureReferences: [
    {
      reference: "Dhammacakkappavattana Sutta (SN 56.11)",
      text: "Now this, monks, is the noble truth of suffering: birth is suffering, aging is suffering, death is suffering; sorrow, lamentation, pain, distress, & despair are suffering...",
      explanation: "The Buddha's first discourse establishing the Four Noble Truths as the foundation of the dharma."
    },
    {
      reference: "Maha-parinibbana Sutta (DN 16)",
      text: "Both formerly and now, I declare only suffering and the cessation of suffering.",
      explanation: "The Buddha's final teaching emphasizing the centrality of the Four Noble Truths."
    },
    {
      reference: "Sacca-vibhanga Sutta (MN 141)",
      text: "And what is the noble truth of the path of practice leading to the cessation of suffering? Just this noble eightfold path...",
      explanation: "Detailed explanation of the Fourth Noble Truth and its connection to the Eightfold Path."
    }
  ],
  historicalDevelopment: [
    {
      period: "Early Buddhism (5th-3rd centuries BCE)",
      description: "Initial formulation and teaching of the Four Noble Truths by the Buddha and his immediate disciples.",
      keyFigures: [
        {
          name: "Buddha Shakyamuni",
          contribution: "Original exposition of the Four Noble Truths",
          dates: "c. 563-483 BCE"
        },
        {
          name: "Sariputta",
          contribution: "Systematic analysis of the Four Noble Truths",
          dates: "5th century BCE"
        }
      ],
      significance: "Established the foundational framework for Buddhist thought and practice"
    },
    {
      period: "Development of Buddhist Schools (3rd century BCE - 2nd century CE)",
      description: "Various interpretations and analyses of the Four Noble Truths by different Buddhist schools.",
      keyFigures: [
        {
          name: "Nagarjuna",
          contribution: "Philosophical analysis of the Four Noble Truths through Madhyamaka perspective",
          dates: "c. 150-250 CE"
        },
        {
          name: "Buddhaghosa",
          contribution: "Detailed commentary on the Four Noble Truths in the Visuddhimagga",
          dates: "5th century CE"
        }
      ],
      significance: "Deepened understanding through various philosophical perspectives"
    }
  ],
  theologicalConcepts: [
    {
      title: "The Truth of Suffering (Dukkha)",
      description: "Analysis of the unsatisfactory nature of conditioned existence.",
      keyPoints: [
        "Three types of suffering: ordinary suffering, suffering of change, existential suffering",
        "Universal nature of suffering in all conditioned phenomena",
        "Relationship between suffering and impermanence",
        "Psychological and existential dimensions of suffering"
      ],
      scriptureRefs: ["Dhammacakkappavattana Sutta", "Dukkha Sutta", "Alagaddupama Sutta"],
      challenges: [
        "Understanding suffering beyond mere physical pain",
        "Recognizing subtle forms of suffering",
        "Avoiding nihilistic interpretations",
        "Balancing awareness of suffering with positive engagement in life"
      ]
    },
    {
      title: "The Origin of Suffering (Samudaya)",
      description: "Understanding the causes and conditions that give rise to suffering.",
      keyPoints: [
        "Role of craving (tanha) in perpetuating suffering",
        "Three types of craving: sensual, existence, non-existence",
        "Dependent origination (pratityasamutpada)",
        "Karma and its relationship to suffering"
      ],
      scriptureRefs: ["Mahatanhasankhaya Sutta", "Paticca-samuppada-vibhanga Sutta"],
      challenges: [
        "Understanding the subtle nature of craving",
        "Recognizing the relationship between desire and suffering",
        "Applying the teaching in daily life"
      ]
    },
    {
      title: "The Cessation of Suffering (Nirodha)",
      description: "The possibility and nature of liberation from suffering.",
      keyPoints: [
        "Nature of Nirvana as cessation of suffering",
        "Complete extinction of craving",
        "Liberation from the cycle of rebirth",
        "Characteristics of enlightened experience"
      ],
      scriptureRefs: ["Nibbana Sutta", "Pahana Sutta"],
      challenges: [
        "Understanding Nirvana as a positive state",
        "Avoiding misconceptions about cessation",
        "Balancing gradual and sudden approaches to enlightenment"
      ]
    },
    {
      title: "The Path to Liberation (Magga)",
      description: "The systematic path of practice leading to the end of suffering.",
      keyPoints: [
        "Structure of the Noble Eightfold Path",
        "Three trainings: ethics, meditation, wisdom",
        "Gradual nature of the path",
        "Integration of theory and practice"
      ],
      scriptureRefs: ["Magga-vibhanga Sutta", "Kitagiri Sutta"],
      challenges: [
        "Maintaining balanced practice",
        "Integrating the path into modern life",
        "Understanding the interrelation of path factors"
      ]
    }
  ],
  commonMisconceptions: [
    {
      misconception: "Buddhism teaches that all life is suffering",
      correction: "The First Noble Truth teaches that suffering is universal in conditioned existence, but also acknowledges happiness and joy while pointing to a deeper liberation."
    },
    {
      misconception: "The goal is to eliminate all desire",
      correction: "The Second Noble Truth specifically addresses craving (tanha) as the cause of suffering, not all forms of wholesome aspiration or motivation."
    },
    {
      misconception: "Nirvana is a nihilistic extinction",
      correction: "The Third Noble Truth describes Nirvana as the highest happiness and freedom, not mere annihilation."
    },
    {
      misconception: "The path requires withdrawal from society",
      correction: "The Fourth Noble Truth outlines a path that can be practiced in any lifestyle, with different levels of intensity."
    }
  ],
  resources: [
    {
      title: "The Four Noble Truths",
      author: "Geshe Tashi Tsering",
      url: "/resources/four-noble-truths",
      type: "Book",
      description: "Clear and comprehensive explanation of the Four Noble Truths for modern practitioners.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0861712706"
    },
    {
      title: "What the Buddha Taught",
      author: "Walpola Rahula",
      url: "/resources/what-buddha-taught",
      type: "Book",
      description: "Classic introduction to Buddhist thought centered on the Four Noble Truths.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0802130313"
    },
    {
      title: "In the Buddha's Words",
      author: "Bhikkhu Bodhi",
      url: "/resources/buddha-words",
      type: "Book",
      description: "Anthology of suttas including key texts on the Four Noble Truths.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0861714911"
    }
  ]
}

export default function NobleTruthsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">The Four Noble Truths: Foundation of Buddhist Teaching</h1>
        <p className="text-xl mb-4">{nobleTruthsContent.introduction}</p>
        <p className="text-lg mb-8">{nobleTruthsContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Scriptural Foundation</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nobleTruthsContent.scriptureReferences.map((reference, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{reference.reference}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="italic mb-4">"{reference.text}"</p>
                <p className="text-slate-600">{reference.explanation}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Historical Development</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {nobleTruthsContent.historicalDevelopment.map((period, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{period.period}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{period.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Figures:</h4>
                    {period.keyFigures.map((figure, idx) => (
                      <div key={idx} className="mb-2">
                        <p className="font-medium">{figure.name}</p>
                        {figure.dates && (
                          <p className="text-sm text-slate-600">{figure.dates}</p>
                        )}
                        <p className="text-sm">{figure.contribution}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold">Historical Significance:</span> {period.significance}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Key Concepts</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {nobleTruthsContent.theologicalConcepts.map((concept, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{concept.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{concept.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Points:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {concept.keyPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scripture References:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {concept.scriptureRefs.map((ref, idx) => (
                        <li key={idx}>{ref}</li>
                      ))}
                    </ul>
                  </div>
                  {concept.challenges && (
                    <div>
                      <h4 className="font-semibold mb-2">Key Challenges:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {concept.challenges.map((challenge, idx) => (
                          <li key={idx}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Common Misconceptions</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {nobleTruthsContent.commonMisconceptions.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-red-600">Misconception:</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 italic">{item.misconception}</p>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Correction:</h4>
                  <p>{item.correction}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Recommended Resources</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {nobleTruthsContent.resources.map((resource, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
                {resource.author && (
                  <p className="text-sm text-slate-600">By {resource.author}</p>
                )}
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{resource.description}</p>
                <div className="space-x-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={resource.url}>Learn More</Link>
                  </Button>
                  {resource.affiliate && (
                    <Button asChild variant="default" size="sm">
                      <Link href={resource.affiliateUrl!} target="_blank" rel="noopener noreferrer">
                        View on Amazon
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Related Topics</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/teachings/buddhism/eightfold-path" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>The Noble Eightfold Path</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the path that leads to the cessation of suffering.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/buddhism/emptiness" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Emptiness</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand the deeper nature of reality and suffering.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/comparative/salvation" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Comparative Liberation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Compare Buddhist and other views of liberation.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 