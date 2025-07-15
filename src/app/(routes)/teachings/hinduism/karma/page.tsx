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

interface KarmaAspect {
  name: string
  sanskritName: string
  description: string
  keyPoints: string[]
  implications: string[]
  scriptureRefs: string[]
  challenges?: string[]
}

interface KarmicPractice {
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

interface KarmaContent {
  introduction: string
  definition: string
  scriptureReferences: ScriptureReference[]
  historicalDevelopment: HistoricalDevelopment[]
  karmaAspects: KarmaAspect[]
  karmicPractices: KarmicPractice[]
  commonMisconceptions: Array<{
    misconception: string
    correction: string
  }>
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Karma | Hindu Philosophy",
  description: "Explore the profound Hindu concept of Karma - understanding the law of cause and effect, action and reaction in spiritual life.",
  openGraph: {
    title: "Karma | Hindu Philosophy",
    description: "Comprehensive guide to understanding the Hindu concept of Karma",
    type: "website",
  },
}

const karmaContent: KarmaContent = {
  introduction: `Karma is a fundamental concept in Hindu philosophy that explains the universal law of cause and effect governing all actions and their consequences. It is intricately connected with the concepts of dharma, rebirth, and moksha, forming a comprehensive framework for understanding human experience and spiritual evolution.`,
  definition: `Karma literally means "action" or "deed" and refers to the universal principle that every action generates a force of energy that returns to the doer in corresponding ways. This law operates on physical, mental, and spiritual levels, encompassing thoughts, words, and deeds. The concept includes both the action and its consequences, creating a complex web of cause and effect that shapes individual destiny and cosmic order.`,
  scriptureReferences: [
    {
      reference: "Bhagavad Gita 2.47",
      text: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction.",
      explanation: "Explains the proper attitude towards action and its results, emphasizing detached performance of duty."
    },
    {
      reference: "Brihadaranyaka Upanishad 4.4.5",
      text: "According to one's actions, according to one's behavior, so one becomes. One becomes virtuous by virtuous action, bad by bad action.",
      explanation: "Describes how karma shapes individual character and destiny through repeated actions."
    },
    {
      reference: "Mundaka Upanishad 3.2.1",
      text: "As is one's desire, so is one's destiny. For as one's desire is, so is one's will; and as is one's will, so is one's deed; and as is one's deed, so is one's reward.",
      explanation: "Links desire, will, action, and consequence in the karmic process."
    }
  ],
  historicalDevelopment: [
    {
      period: "Early Vedic Period (1500-1000 BCE)",
      description: "Initial development of karma concept through ritual action and cosmic order.",
      keyFigures: [
        {
          name: "Vedic Rishis",
          contribution: "Established connection between ritual action and cosmic order",
          dates: "c. 1500-1000 BCE"
        },
        {
          name: "Early Upanishadic Sages",
          contribution: "Internalized karma from ritual to ethical action",
          dates: "c. 800-600 BCE"
        }
      ],
      significance: "Laid foundation for understanding action and consequence in spiritual life"
    },
    {
      period: "Classical Upanishadic Period (800-500 BCE)",
      description: "Refinement of karma theory in relation to rebirth and liberation.",
      keyFigures: [
        {
          name: "Yajnavalkya",
          contribution: "Developed theory of karma and rebirth",
          dates: "c. 700 BCE"
        },
        {
          name: "Uddalaka Aruni",
          contribution: "Connected karma with moral causation",
          dates: "c. 600 BCE"
        }
      ],
      significance: "Established karma as moral law governing individual destiny"
    },
    {
      period: "Epic and Puranic Period (500 BCE - 500 CE)",
      description: "Elaboration of karma theory through stories and teachings.",
      keyFigures: [
        {
          name: "Vyasa",
          contribution: "Synthesis of karma teachings in Mahabharata",
          dates: "Traditional dating"
        },
        {
          name: "Krishna",
          contribution: "Teachings on karma yoga in Bhagavad Gita",
          dates: "Text compiled c. 500 BCE - 200 CE"
        }
      ],
      significance: "Made karma teachings accessible through stories and practical guidance"
    }
  ],
  karmaAspects: [
    {
      name: "Types of Karma",
      sanskritName: "Karma Bheda",
      description: "Different categories of karma affecting individual experience and destiny.",
      keyPoints: [
        "Sanchita (Accumulated) Karma",
        "Prarabdha (Current) Karma",
        "Agami (Future) Karma",
        "Kriyamana (Current Actions) Karma"
      ],
      implications: [
        "Multiple lifetimes of experience",
        "Current life circumstances",
        "Future possibilities",
        "Present responsibility"
      ],
      scriptureRefs: ["Yoga Sutras", "Bhagavad Gita"],
      challenges: [
        "Understanding karmic complexity",
        "Dealing with past karma",
        "Creating positive future karma"
      ]
    },
    {
      name: "Laws of Karma",
      sanskritName: "Karma Siddhanta",
      description: "Principles governing the operation of karmic law.",
      keyPoints: [
        "Law of Cause and Effect",
        "Law of Intention and Desire",
        "Law of Cycles and Patterns",
        "Law of Growth and Opportunity"
      ],
      implications: [
        "Personal responsibility",
        "Importance of motivation",
        "Patterns of experience",
        "Spiritual evolution"
      ],
      scriptureRefs: ["Upanishads", "Yoga Vasishtha"],
      challenges: [
        "Understanding subtle causation",
        "Recognizing patterns",
        "Working with karmic law"
      ]
    },
    {
      name: "Karma and Liberation",
      sanskritName: "Karma Mukti",
      description: "Relationship between karma and spiritual liberation.",
      keyPoints: [
        "Transcending karmic bonds",
        "Role of selfless action",
        "Grace and karma",
        "Liberation while living"
      ],
      implications: [
        "Path to freedom",
        "Importance of detachment",
        "Role of divine grace",
        "Living liberation"
      ],
      scriptureRefs: ["Bhagavad Gita", "Vivekachudamani"],
      challenges: [
        "Balancing action and renunciation",
        "Understanding grace",
        "Living in freedom"
      ]
    }
  ],
  karmicPractices: [
    {
      name: "Selfless Action",
      sanskritName: "Karma Yoga",
      description: "Practice of action without attachment to results.",
      methods: [
        "Dedicated action",
        "Service without expectation",
        "Mindful work",
        "Offering results to divine"
      ],
      benefits: [
        "Mental purification",
        "Freedom from bondage",
        "Spiritual growth",
        "Social harmony"
      ],
      challenges: [
        "Overcoming desire for results",
        "Maintaining pure motivation",
        "Consistent practice"
      ],
      scriptureRefs: ["Bhagavad Gita", "Karma Yoga"]
    },
    {
      name: "Karmic Purification",
      sanskritName: "Karma Shuddhi",
      description: "Practices for resolving and purifying karmic patterns.",
      methods: [
        "Self-reflection",
        "Atonement practices",
        "Service and charity",
        "Spiritual disciplines"
      ],
      benefits: [
        "Karmic resolution",
        "Mental peace",
        "Spiritual progress",
        "Better relationships"
      ],
      challenges: [
        "Facing past actions",
        "Persistent practice",
        "Emotional processing"
      ],
      scriptureRefs: ["Yoga Sutras", "Dharma Shastras"]
    },
    {
      name: "Conscious Living",
      sanskritName: "Karma Sadhana",
      description: "Practice of mindful action and karmic awareness.",
      methods: [
        "Mindful decision-making",
        "Ethical living",
        "Regular self-examination",
        "Conscious relationships"
      ],
      benefits: [
        "Better choices",
        "Harmonious life",
        "Personal growth",
        "Spiritual awareness"
      ],
      challenges: [
        "Maintaining awareness",
        "Ethical decisions",
        "Relationship dynamics"
      ],
      scriptureRefs: ["Bhagavad Gita", "Yoga Vasishtha"]
    }
  ],
  commonMisconceptions: [
    {
      misconception: "Karma is fatalistic determinism",
      correction: "Karma is a dynamic law of cause and effect that includes free will and the possibility of changing future outcomes through present choices."
    },
    {
      misconception: "Karma is punishment or reward",
      correction: "Karma is a natural law of learning and growth through experience, not a system of divine reward or punishment."
    },
    {
      misconception: "Bad things happening are always due to bad karma",
      correction: "Life experiences are complex interactions of various karmic streams, present choices, and collective circumstances, not simple one-to-one correlations."
    },
    {
      misconception: "Karma can be escaped or transferred",
      correction: "While karma can be transformed through spiritual practice and grace, it operates as a natural law that must be understood and worked with consciously."
    }
  ],
  resources: [
    {
      title: "The Laws of Karma",
      author: "Swami Sivananda",
      url: "/resources/karma-laws",
      type: "Book",
      description: "Comprehensive explanation of karmic principles and their application.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/8170520002"
    },
    {
      title: "Karma: The Ancient Science of Cause and Effect",
      author: "Jeffrey Armstrong",
      url: "/resources/karma-science",
      type: "Book",
      description: "Modern interpretation of karma for contemporary readers.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1683837029"
    },
    {
      title: "Understanding Karma in Daily Life",
      author: "Swami Sarvapriyananda",
      url: "/resources/daily-karma",
      type: "Video Course",
      description: "Practical application of karmic principles in modern life.",
      affiliate: false
    }
  ]
}

export default function KarmaPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Karma: The Law of Action and Consequence</h1>
        <p className="text-xl mb-4">{karmaContent.introduction}</p>
        <p className="text-lg mb-8">{karmaContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Scriptural Foundation</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {karmaContent.scriptureReferences.map((reference, index) => (
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
          {karmaContent.historicalDevelopment.map((period, index) => (
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
        <h2 className="text-3xl font-bold mb-4">Aspects of Karma</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {karmaContent.karmaAspects.map((aspect, index) => (
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
        <h2 className="text-3xl font-bold mb-4">Karmic Practices</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {karmaContent.karmicPractices.map((practice, index) => (
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
          {karmaContent.commonMisconceptions.map((item, index) => (
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
          {karmaContent.resources.map((resource, index) => (
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
                <p>Explore how karma relates to cosmic and moral law.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/hinduism/brahman-atman" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Brahman-Atman</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand karma's role in self-realization.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/hinduism/moksha" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Moksha</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn how karma relates to spiritual liberation.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 