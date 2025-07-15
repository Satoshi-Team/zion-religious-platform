import React from 'react'
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

interface SpiritualPractice {
  name: string
  sanskritName: string
  description: string
  methods: string[]
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

interface BrahmanAtmanContent {
  introduction: string
  definition: string
  scriptureReferences: ScriptureReference[]
  historicalDevelopment: HistoricalDevelopment[]
  philosophicalAspects: PhilosophicalAspect[]
  spiritualPractices: SpiritualPractice[]
  commonMisconceptions: Array<{
    misconception: string
    correction: string
  }>
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Brahman & Atman | Hindu Philosophy",
  description: "Explore the profound Hindu concepts of Brahman (Ultimate Reality) and Atman (Individual Self) - understanding the relationship between universal consciousness and individual identity.",
  openGraph: {
    title: "Brahman & Atman | Hindu Philosophy",
    description: "Comprehensive guide to understanding the Hindu concepts of Brahman and Atman",
    type: "website",
  },
}

const brahmanAtmanContent: BrahmanAtmanContent = {
  introduction: `The concepts of Brahman and Atman represent the cornerstone of Hindu metaphysics and spirituality. Brahman refers to the ultimate, unchanging reality that underlies all existence, while Atman is the eternal, innermost essence of each individual being. Their relationship and ultimate identity form the central insight of Vedantic philosophy.`,
  definition: `Brahman is the absolute, infinite, eternal truth and reality that is the ground of all being. Atman is the individual self or soul, which in its deepest nature is identical with Brahman. This identity is expressed in the Mahavakya (great saying) "Tat Tvam Asi" (That Thou Art), revealing the fundamental unity of individual consciousness with universal consciousness.`,
  scriptureReferences: [
    {
      reference: "Chandogya Upanishad 6.8.7",
      text: "Tat Tvam Asi (That Thou Art)",
      explanation: "One of the Mahavakyas expressing the identity of Atman with Brahman, revealing the ultimate truth of existence."
    },
    {
      reference: "Brihadaranyaka Upanishad 1.4.10",
      text: "Aham Brahmasmi (I am Brahman)",
      explanation: "Direct statement of the identity between the individual self and the ultimate reality."
    },
    {
      reference: "Mundaka Upanishad 2.2.9",
      text: "Brahman is truth, knowledge, and infinity. One who realizes Brahman as existing in the cave of the heart enjoys all blessings simultaneously.",
      explanation: "Description of Brahman's nature and the fruits of its realization."
    }
  ],
  historicalDevelopment: [
    {
      period: "Vedic Period (1500-500 BCE)",
      description: "Evolution from external ritual worship to internal philosophical inquiry about the nature of reality and self.",
      keyFigures: [
        {
          name: "Vedic Rishis",
          contribution: "Composition of the Upanishads and early formulations of Brahman-Atman teachings",
          dates: "c. 800-500 BCE"
        },
        {
          name: "Yajnavalkya",
          contribution: "Advanced teachings on Brahman-Atman in Brihadaranyaka Upanishad",
          dates: "c. 700 BCE"
        }
      ],
      significance: "Established foundational concepts of Hindu metaphysics and spirituality"
    },
    {
      period: "Classical Period (500 BCE - 500 CE)",
      description: "Systematic development of Vedanta philosophy and different interpretations of Brahman-Atman relationship.",
      keyFigures: [
        {
          name: "Badarayana",
          contribution: "Composition of the Brahma Sutras",
          dates: "c. 200 BCE"
        },
        {
          name: "Gaudapada",
          contribution: "Advaita interpretation of Upanishads",
          dates: "c. 6th century CE"
        }
      ],
      significance: "Systematized teachings and established different schools of interpretation"
    },
    {
      period: "Medieval Period (500-1500 CE)",
      description: "Development of various Vedanta schools with different interpretations of Brahman-Atman relationship.",
      keyFigures: [
        {
          name: "Adi Shankara",
          contribution: "Established Advaita Vedanta philosophy",
          dates: "788-820 CE"
        },
        {
          name: "Ramanuja",
          contribution: "Developed Vishishtadvaita philosophy",
          dates: "1017-1137 CE"
        },
        {
          name: "Madhva",
          contribution: "Established Dvaita philosophy",
          dates: "1238-1317 CE"
        }
      ],
      significance: "Enriched understanding through diverse philosophical perspectives"
    }
  ],
  philosophicalAspects: [
    {
      name: "Nature of Brahman",
      sanskritName: "Brahman Svarupa",
      description: "Understanding of Brahman as the ultimate reality, both transcendent and immanent.",
      keyPoints: [
        "Sat-Chit-Ananda (Existence-Consciousness-Bliss)",
        "Nirguna (without attributes) and Saguna (with attributes) aspects",
        "Both transcendent and immanent nature",
        "Source and substance of all existence"
      ],
      implications: [
        "Unity underlying all diversity",
        "Divine nature of existence",
        "Possibility of direct realization",
        "Basis for spiritual practice"
      ],
      scriptureRefs: ["Taittiriya Upanishad", "Brahma Sutras"],
      challenges: [
        "Comprehending the ineffable",
        "Reconciling absolute and relative reality",
        "Understanding transcendence and immanence"
      ]
    },
    {
      name: "Nature of Atman",
      sanskritName: "Atman Svarupa",
      description: "Understanding of the true nature of individual self as pure consciousness.",
      keyPoints: [
        "Eternal and unchanging nature",
        "Identity with Brahman",
        "Beyond body and mind",
        "Witness consciousness"
      ],
      implications: [
        "Immortality of self",
        "Possibility of liberation",
        "Ethical basis for life",
        "Purpose of spiritual practice"
      ],
      scriptureRefs: ["Katha Upanishad", "Chandogya Upanishad"],
      challenges: [
        "Overcoming identification with body-mind",
        "Realizing true nature",
        "Living from self-knowledge"
      ]
    },
    {
      name: "Brahman-Atman Relationship",
      sanskritName: "Brahmatma Aikya",
      description: "Understanding of the relationship between universal and individual consciousness.",
      keyPoints: [
        "Essential identity",
        "Apparent difference",
        "Levels of reality",
        "Unity in diversity"
      ],
      implications: [
        "Basis for non-dual realization",
        "Path to liberation",
        "Understanding of individuality",
        "Nature of enlightenment"
      ],
      scriptureRefs: ["Mandukya Upanishad", "Brahma Sutras"],
      challenges: [
        "Reconciling unity and multiplicity",
        "Understanding different levels of reality",
        "Integrating realization into life"
      ]
    }
  ],
  spiritualPractices: [
    {
      name: "Self-Inquiry",
      sanskritName: "Atma Vichara",
      description: "Direct investigation into the nature of the self through questioning and contemplation.",
      methods: [
        "Who am I inquiry",
        "Discrimination between self and non-self",
        "Witness consciousness practice",
        "Contemplation of Mahavakyas"
      ],
      benefits: [
        "Direct self-knowledge",
        "Freedom from false identification",
        "Recognition of true nature",
        "Liberation from suffering"
      ],
      challenges: [
        "Maintaining continuous inquiry",
        "Overcoming habitual thought patterns",
        "Dealing with subtle ego"
      ],
      scriptureRefs: ["Upadesa Saram", "Vivekachudamani"]
    },
    {
      name: "Meditation on Brahman",
      sanskritName: "Brahma Dhyana",
      description: "Contemplation and meditation on the nature of ultimate reality.",
      methods: [
        "Contemplation of Om",
        "Meditation on sacred texts",
        "Practice of neti-neti (not this, not this)",
        "Absorption in pure awareness"
      ],
      benefits: [
        "Direct experience of reality",
        "Transcendence of limitations",
        "Expansion of consciousness",
        "Integration of knowledge"
      ],
      challenges: [
        "Transcending conceptual mind",
        "Maintaining sustained attention",
        "Integrating experience"
      ],
      scriptureRefs: ["Mandukya Upanishad", "Yoga Sutras"]
    },
    {
      name: "Knowledge Integration",
      sanskritName: "Jnana Yoga",
      description: "Integration of intellectual understanding with direct experience through various practices.",
      methods: [
        "Study of scriptures",
        "Contemplation of teachings",
        "Association with realized beings",
        "Practice of discrimination"
      ],
      benefits: [
        "Clear understanding",
        "Removal of doubts",
        "Integration of knowledge",
        "Stable realization"
      ],
      challenges: [
        "Balancing study and practice",
        "Overcoming intellectual barriers",
        "Living the teaching"
      ],
      scriptureRefs: ["Bhagavad Gita", "Upadesha Sahasri"]
    }
  ],
  commonMisconceptions: [
    {
      misconception: "Brahman is a deity or god figure",
      correction: "Brahman is the ultimate reality that transcends all concepts, including personification, though it can be approached through devotion to personal forms of the divine."
    },
    {
      misconception: "Atman is the ego or personality",
      correction: "Atman is the pure consciousness that underlies personality and ego, which are temporary constructs of the mind."
    },
    {
      misconception: "The teaching of Brahman-Atman identity promotes spiritual bypass",
      correction: "This teaching actually demands full engagement with life while maintaining awareness of the underlying reality, leading to greater responsibility and compassion."
    },
    {
      misconception: "Realization of Brahman-Atman requires renunciation of life",
      correction: "While some may choose renunciation, the realization can occur in any life situation; it's about inner understanding rather than external circumstances."
    }
  ],
  resources: [
    {
      title: "The Upanishads",
      author: "Eknath Easwaran (Translator)",
      url: "/resources/upanishads",
      type: "Book",
      description: "Accessible translations of the primary texts discussing Brahman and Atman.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1586380214"
    },
    {
      title: "Brahman: The Discovery of the God of Abraham",
      author: "Isaac Mayer",
      url: "/resources/brahman-discovery",
      type: "Book",
      description: "Scholarly exploration of the concept of Brahman in Hindu philosophy.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0875730213"
    },
    {
      title: "I Am That",
      author: "Sri Nisargadatta Maharaj",
      url: "/resources/i-am-that",
      type: "Book",
      description: "Modern exposition of Brahman-Atman teaching through dialogues.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0893860467"
    }
  ]
}

export default function BrahmanAtmanPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Brahman & Atman: The Ultimate Reality and the Self</h1>
        <p className="text-xl mb-4">{brahmanAtmanContent.introduction}</p>
        <p className="text-lg mb-8">{brahmanAtmanContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Scriptural Foundation</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {brahmanAtmanContent.scriptureReferences.map((reference, index) => (
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
          {brahmanAtmanContent.historicalDevelopment.map((period, index) => (
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
          {brahmanAtmanContent.philosophicalAspects.map((aspect, index) => (
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
        <h2 className="text-3xl font-bold mb-4">Spiritual Practices</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {brahmanAtmanContent.spiritualPractices.map((practice, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  {practice.name} <span className="text-slate-600">({practice.sanskritName})</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{practice.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Methods:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {practice.methods.map((method, idx) => (
                        <li key={idx}>{method}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {practice.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Challenges:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {practice.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scripture References:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {practice.scriptureRefs.map((ref, idx) => (
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
          {brahmanAtmanContent.commonMisconceptions.map((item, index) => (
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
          {brahmanAtmanContent.resources.map((resource, index) => (
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
          <Link href="/teachings/hinduism/dharma" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Dharma</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore how understanding Brahman-Atman relates to righteous living.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/hinduism/karma" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Karma</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand the relationship between self-knowledge and action.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/hinduism/moksha" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Moksha</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn how Brahman-Atman knowledge leads to liberation.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 