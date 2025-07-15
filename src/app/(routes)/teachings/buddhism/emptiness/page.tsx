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

interface PhilosophicalAspect {
  name: string
  sanskritName: string
  description: string
  keyPoints: string[]
  implications: string[]
  scriptureRefs: string[]
  challenges?: string[]
}

interface MeditationMethod {
  name: string
  description: string
  instructions: string[]
  benefits: string[]
  challenges: string[]
  scriptureRefs: string[]
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

interface EmptinessContent {
  introduction: string
  definition: string
  scriptureReferences: ScriptureReference[]
  historicalDevelopment: HistoricalDevelopment[]
  philosophicalAspects: PhilosophicalAspect[]
  meditationMethods: MeditationMethod[]
  commonMisconceptions: Array<{
    misconception: string
    correction: string
  }>
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Emptiness (Śūnyatā) | Buddhist Philosophy",
  description: "Explore the profound Buddhist teaching of Emptiness (Śūnyatā) - understanding the true nature of reality through the lens of dependent origination and non-substantiality.",
  openGraph: {
    title: "Emptiness (Śūnyatā) | Buddhist Philosophy",
    description: "Comprehensive guide to understanding the Buddhist concept of Emptiness",
    type: "website",
  },
}

const emptinessContent: EmptinessContent = {
  introduction: `Emptiness (Śūnyatā) represents one of Buddhism's most profound and transformative teachings, pointing to the fundamental nature of reality as being empty of inherent existence. This doctrine is central to Mahayana Buddhism and has profound implications for understanding the nature of self, phenomena, and liberation.`,
  definition: `Emptiness refers to the absence of inherent existence in all phenomena, including the self. It teaches that all things exist in dependence upon causes and conditions, lacking any independent, permanent, or intrinsic nature. This understanding is not nihilistic but rather reveals the interconnected and dynamic nature of reality.`,
  scriptureReferences: [
    {
      reference: "Heart Sutra",
      text: "Form is emptiness, emptiness is form. Form is not other than emptiness, emptiness is not other than form.",
      explanation: "The most concise and profound expression of emptiness in Buddhist literature, showing the non-dual nature of form and emptiness."
    },
    {
      reference: "Diamond Sutra",
      text: "All conditioned phenomena are like a dream, like an illusion, like a bubble, like a shadow, like a dewdrop, like a lightning flash; you should contemplate them thus.",
      explanation: "Illustrates the empty nature of all phenomena through powerful metaphors."
    },
    {
      reference: "Mūlamadhyamakakārikā (24:18)",
      text: "Whatever is dependently co-arisen, that is explained to be emptiness. That, being a dependent designation, is itself the middle way.",
      explanation: "Nagarjuna's foundational verse connecting emptiness with dependent origination."
    }
  ],
  historicalDevelopment: [
    {
      period: "Early Buddhism (5th-3rd centuries BCE)",
      description: "Initial teachings on non-self (anatta) and dependent origination (pratityasamutpada) laid the groundwork for later emptiness teachings.",
      keyFigures: [
        {
          name: "Buddha Shakyamuni",
          contribution: "Teaching on non-self and dependent origination",
          dates: "c. 563-483 BCE"
        },
        {
          name: "Sariputta",
          contribution: "Early analytical approach to non-self teachings",
          dates: "5th century BCE"
        }
      ],
      significance: "Established foundational concepts that would later develop into emptiness doctrine"
    },
    {
      period: "Development of Mahayana (1st century BCE - 2nd century CE)",
      description: "Emergence of Prajñāpāramitā literature and systematic exposition of emptiness teaching.",
      keyFigures: [
        {
          name: "Nagarjuna",
          contribution: "Systematic philosophical exposition of emptiness through Madhyamaka",
          dates: "c. 150-250 CE"
        },
        {
          name: "Aryadeva",
          contribution: "Further development of Madhyamaka philosophy",
          dates: "3rd century CE"
        }
      ],
      significance: "Established emptiness as central philosophical doctrine of Mahayana Buddhism"
    },
    {
      period: "Later Development (4th-8th centuries CE)",
      description: "Integration of emptiness teachings with various Buddhist schools and practices.",
      keyFigures: [
        {
          name: "Chandrakirti",
          contribution: "Prasangika interpretation of Madhyamaka",
          dates: "600-650 CE"
        },
        {
          name: "Shantideva",
          contribution: "Integration of emptiness with bodhisattva practice",
          dates: "685-763 CE"
        }
      ],
      significance: "Refined understanding and practical application of emptiness teachings"
    }
  ],
  philosophicalAspects: [
    {
      name: "Dependent Origination",
      sanskritName: "Pratītyasamutpāda",
      description: "The principle that all phenomena arise in dependence upon causes and conditions.",
      keyPoints: [
        "Nothing exists independently",
        "All phenomena are interconnected",
        "Change is constant and inevitable",
        "Conventional reality functions through interdependence"
      ],
      implications: [
        "Rejection of eternal substances",
        "Understanding of impermanence",
        "Basis for ethical responsibility",
        "Foundation for understanding emptiness"
      ],
      scriptureRefs: ["Pratītyasamutpāda Sutra", "Mūlamadhyamakakārikā Chapter 24"],
      challenges: [
        "Understanding causality without inherent existence",
        "Reconciling conventional and ultimate truth",
        "Applying understanding to daily life"
      ]
    },
    {
      name: "Two Truths",
      sanskritName: "Satyadvaya",
      description: "The framework of conventional and ultimate truth for understanding reality.",
      keyPoints: [
        "Conventional truth (relative reality)",
        "Ultimate truth (absolute reality)",
        "Non-contradiction of the two truths",
        "Importance of both for liberation"
      ],
      implications: [
        "Framework for understanding emptiness",
        "Basis for Buddhist practice",
        "Resolution of apparent contradictions",
        "Guide for skillful means"
      ],
      scriptureRefs: ["Mūlamadhyamakakārikā Chapter 24", "Heart Sutra"],
      challenges: [
        "Avoiding extremes of eternalism and nihilism",
        "Understanding non-dual nature of two truths",
        "Maintaining conventional while realizing ultimate"
      ]
    },
    {
      name: "Non-Self",
      sanskritName: "Anātman",
      description: "The absence of an inherent, permanent self or soul.",
      keyPoints: [
        "Analysis of five aggregates",
        "Emptiness of personal identity",
        "Conventional existence of self",
        "Freedom from self-grasping"
      ],
      implications: [
        "Liberation from suffering",
        "Basis for compassion",
        "Understanding of emptiness",
        "Transformation of ego-clinging"
      ],
      scriptureRefs: ["Anatta-lakkhana Sutta", "Diamond Sutra"],
      challenges: [
        "Overcoming deep-seated self-grasping",
        "Maintaining conventional function",
        "Understanding selfless agency"
      ]
    }
  ],
  meditationMethods: [
    {
      name: "Analysis of the Five Aggregates",
      description: "Systematic investigation of the components of personal experience to understand their empty nature.",
      instructions: [
        "Examine each aggregate (form, feeling, perception, formations, consciousness)",
        "Investigate their changing nature",
        "Look for any permanent essence",
        "Observe their interdependent arising"
      ],
      benefits: [
        "Direct insight into non-self",
        "Reduced attachment to self-identity",
        "Understanding of emptiness through experience",
        "Liberation from suffering"
      ],
      challenges: [
        "Maintaining balance between analysis and experience",
        "Avoiding intellectual conceptualization",
        "Dealing with fear or resistance"
      ],
      scriptureRefs: ["Satipatthana Sutta", "Heart Sutra"]
    },
    {
      name: "Diamond Slivers",
      description: "Analytical meditation breaking down phenomena into smaller and smaller parts.",
      instructions: [
        "Select an object of meditation",
        "Analyze its components",
        "Investigate each component's nature",
        "Continue division until no inherent essence is found"
      ],
      benefits: [
        "Direct insight into emptiness",
        "Understanding of conventional existence",
        "Freedom from reification",
        "Development of wisdom"
      ],
      challenges: [
        "Maintaining sharp analysis",
        "Avoiding nihilistic conclusions",
        "Balancing analysis with compassion"
      ],
      scriptureRefs: ["Madhyamakavatara", "Vimsatika"]
    },
    {
      name: "Dependent Origination Meditation",
      description: "Contemplation of the interdependent nature of all phenomena.",
      instructions: [
        "Observe arising and passing of phenomena",
        "Trace causes and conditions",
        "Recognize interconnections",
        "See empty nature through dependence"
      ],
      benefits: [
        "Understanding of causality",
        "Insight into interconnectedness",
        "Freedom from wrong views",
        "Development of wisdom and compassion"
      ],
      challenges: [
        "Understanding subtle causality",
        "Maintaining mindfulness of dependencies",
        "Integrating insight into daily life"
      ],
      scriptureRefs: ["Pratityasamutpada Sutra", "Mulamadhyamakakarika"]
    }
  ],
  commonMisconceptions: [
    {
      misconception: "Emptiness means nothingness or non-existence",
      correction: "Emptiness refers to the absence of inherent existence, not to absolute non-existence. It actually reveals the interdependent nature of reality."
    },
    {
      misconception: "Understanding emptiness makes conventional reality meaningless",
      correction: "Emptiness actually explains how conventional reality functions through interdependence. It enhances, rather than negates, engagement with the world."
    },
    {
      misconception: "Emptiness is purely a philosophical concept",
      correction: "While it has philosophical depth, emptiness is meant to be directly realized through meditation and applied in daily life for liberation."
    },
    {
      misconception: "Emptiness negates karma and ethics",
      correction: "Understanding emptiness actually strengthens ethical behavior by revealing the interconnected nature of actions and their consequences."
    }
  ],
  resources: [
    {
      title: "The Heart of Understanding",
      author: "Thich Nhat Hanh",
      url: "/resources/heart-of-understanding",
      type: "Book",
      description: "Clear and accessible commentary on the Heart Sutra and emptiness.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1888375922"
    },
    {
      title: "Introduction to the Middle Way",
      author: "Chandrakirti (Commentary by Jamgön Mipham)",
      url: "/resources/middle-way",
      type: "Book",
      description: "Classical philosophical exposition of emptiness with modern commentary.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1590304098"
    },
    {
      title: "Progressive Stages of Meditation on Emptiness",
      author: "Khenpo Tsultrim Gyamtso",
      url: "/resources/meditation-emptiness",
      type: "Book",
      description: "Practical guide to developing understanding of emptiness through meditation.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1559394714"
    }
  ]
}

export default function EmptinessPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Emptiness (Śūnyatā): The Nature of Reality</h1>
        <p className="text-xl mb-4">{emptinessContent.introduction}</p>
        <p className="text-lg mb-8">{emptinessContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Scriptural Foundation</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {emptinessContent.scriptureReferences.map((reference, index) => (
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
          {emptinessContent.historicalDevelopment.map((period, index) => (
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
        <h2 className="text-3xl font-bold mb-4">Philosophical Aspects</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {emptinessContent.philosophicalAspects.map((aspect, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  {aspect.name} <span className="text-slate-600">({aspect.sanskritName})</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{aspect.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Points:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {aspect.keyPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Implications:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {aspect.implications.map((implication, idx) => (
                        <li key={idx}>{implication}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scripture References:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {aspect.scriptureRefs.map((ref, idx) => (
                        <li key={idx}>{ref}</li>
                      ))}
                    </ul>
                  </div>
                  {aspect.challenges && (
                    <div>
                      <h4 className="font-semibold mb-2">Key Challenges:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {aspect.challenges.map((challenge, idx) => (
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
        <h2 className="text-3xl font-bold mb-4">Meditation Methods</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {emptinessContent.meditationMethods.map((method, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{method.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{method.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Instructions:</h4>
                    <ul className="list-decimal pl-5 space-y-1">
                      {method.instructions.map((instruction, idx) => (
                        <li key={idx}>{instruction}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {method.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Challenges:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {method.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scripture References:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {method.scriptureRefs.map((ref, idx) => (
                        <li key={idx}>{ref}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Common Misconceptions</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {emptinessContent.commonMisconceptions.map((item, index) => (
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
          {emptinessContent.resources.map((resource, index) => (
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
          <Link href="/teachings/buddhism/noble-truths" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>The Four Noble Truths</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand how emptiness relates to the nature of suffering and liberation.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/buddhism/meditation" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Buddhist Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore meditation practices for realizing emptiness directly.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/buddhism/dependent-origination" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Dependent Origination</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn how emptiness relates to the principle of dependent arising.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 