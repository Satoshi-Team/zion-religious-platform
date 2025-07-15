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

interface DharmaAspect {
  name: string
  sanskritName: string
  description: string
  keyPoints: string[]
  implications: string[]
  scriptureRefs: string[]
  challenges?: string[]
}

interface DharmicPractice {
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

interface DharmaContent {
  introduction: string
  definition: string
  scriptureReferences: ScriptureReference[]
  historicalDevelopment: HistoricalDevelopment[]
  dharmaAspects: DharmaAspect[]
  dharmicPractices: DharmicPractice[]
  commonMisconceptions: Array<{
    misconception: string
    correction: string
  }>
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Dharma | Hindu Philosophy",
  description: "Explore the profound Hindu concept of Dharma - understanding cosmic order, moral law, and individual duty in Hindu philosophy and practice.",
  openGraph: {
    title: "Dharma | Hindu Philosophy",
    description: "Comprehensive guide to understanding the Hindu concept of Dharma",
    type: "website",
  },
}

const dharmaContent: DharmaContent = {
  introduction: `Dharma is one of the most fundamental concepts in Hindu philosophy and practice, encompassing cosmic order, moral law, and individual duty. It represents the underlying principle that maintains harmony in the universe and guides human conduct towards righteousness and spiritual fulfillment.`,
  definition: `Dharma refers to the eternal law that governs all existence and manifests as moral, social, and spiritual duties. It includes both universal principles (sanatana dharma) and specific duties based on one's position and stage in life (svadharma). The concept integrates personal ethics, social responsibility, and cosmic order into a unified framework for living.`,
  scriptureReferences: [
    {
      reference: "Bhagavad Gita 18.47",
      text: "Better is one's own dharma though imperfectly performed than the dharma of another well performed. By performing the duty prescribed by one's own nature, one incurs no sin.",
      explanation: "Emphasizes the importance of following one's own dharma (svadharma) over imitating others'."
    },
    {
      reference: "Manusmriti 1.98",
      text: "Teaching, studying, sacrificing, officiating in sacrifices, giving, receiving - these six are the duties of a Brahmin.",
      explanation: "Illustrates how dharma manifests as specific duties based on one's role in society."
    },
    {
      reference: "Mahabharata, Shanti Parva 109.10",
      text: "Dharma protects those who protect it. Those who destroy dharma get destroyed.",
      explanation: "Highlights the reciprocal relationship between dharma and its practitioners."
    }
  ],
  historicalDevelopment: [
    {
      period: "Vedic Period (1500-500 BCE)",
      description: "Development of ritual dharma and cosmic order through Vedic sacrifices and social duties.",
      keyFigures: [
        {
          name: "Vedic Seers",
          contribution: "Establishment of rituals and social duties as expressions of cosmic order",
          dates: "c. 1500-800 BCE"
        },
        {
          name: "Early Dharma Sutras Authors",
          contribution: "Compilation of first systematic texts on dharma",
          dates: "c. 600-300 BCE"
        }
      ],
      significance: "Established foundation of dharmic principles and practices"
    },
    {
      period: "Classical Period (500 BCE - 500 CE)",
      description: "Systematization of dharma through dharmasastras and philosophical texts.",
      keyFigures: [
        {
          name: "Manu",
          contribution: "Composition of Manusmriti, comprehensive dharma text",
          dates: "c. 200 BCE - 200 CE"
        },
        {
          name: "Yajnavalkya",
          contribution: "Authored Yajnavalkya Smriti",
          dates: "c. 100-300 CE"
        }
      ],
      significance: "Codified dharmic principles into comprehensive legal and ethical systems"
    },
    {
      period: "Medieval Period (500-1500 CE)",
      description: "Integration of dharma with devotional movements and philosophical schools.",
      keyFigures: [
        {
          name: "Kumarila Bhatta",
          contribution: "Defense of dharmic traditions through Mimamsa philosophy",
          dates: "c. 700 CE"
        },
        {
          name: "Vijnaneshvara",
          contribution: "Commentary on dharmasastras",
          dates: "c. 1100 CE"
        }
      ],
      significance: "Adapted dharmic principles to changing social conditions"
    }
  ],
  dharmaAspects: [
    {
      name: "Universal Dharma",
      sanskritName: "Sanatana Dharma",
      description: "The eternal principles that govern existence and apply to all beings.",
      keyPoints: [
        "Truth (Satya)",
        "Non-violence (Ahimsa)",
        "Purity (Saucha)",
        "Self-control (Dama)"
      ],
      implications: [
        "Foundation for moral behavior",
        "Basis for cosmic order",
        "Guide for spiritual development",
        "Framework for social harmony"
      ],
      scriptureRefs: ["Bhagavad Gita", "Upanishads"],
      challenges: [
        "Maintaining principles in changing times",
        "Balancing universal with particular duties",
        "Applying eternal principles to modern situations"
      ]
    },
    {
      name: "Individual Duty",
      sanskritName: "Svadharma",
      description: "Specific duties based on one's nature, position, and stage of life.",
      keyPoints: [
        "Stage of life duties (Ashrama Dharma)",
        "Social position duties (Varna Dharma)",
        "Personal nature (Svabhava)",
        "Circumstantial duties"
      ],
      implications: [
        "Personal growth and development",
        "Social stability",
        "Spiritual progress",
        "Harmonious society"
      ],
      scriptureRefs: ["Bhagavad Gita", "Dharmasutras"],
      challenges: [
        "Determining one's true duty",
        "Resolving conflicting duties",
        "Adapting traditional roles to modern life"
      ]
    },
    {
      name: "Social Dharma",
      sanskritName: "Samaja Dharma",
      description: "Principles governing social relationships and collective welfare.",
      keyPoints: [
        "Family duties",
        "Professional ethics",
        "Social responsibilities",
        "Environmental stewardship"
      ],
      implications: [
        "Social cohesion",
        "Environmental protection",
        "Cultural preservation",
        "Collective progress"
      ],
      scriptureRefs: ["Manusmriti", "Arthashastra"],
      challenges: [
        "Balancing individual and collective needs",
        "Addressing social inequalities",
        "Preserving tradition while embracing change"
      ]
    }
  ],
  dharmicPractices: [
    {
      name: "Daily Duties",
      sanskritName: "Nitya Karma",
      description: "Regular practices that maintain personal and social dharma.",
      methods: [
        "Morning and evening prayers",
        "Service to family and community",
        "Professional work as worship",
        "Environmental care"
      ],
      benefits: [
        "Personal discipline",
        "Social harmony",
        "Spiritual growth",
        "Environmental balance"
      ],
      challenges: [
        "Time management",
        "Modern lifestyle adaptation",
        "Maintaining consistency"
      ],
      scriptureRefs: ["Grihya Sutras", "Dharmasutras"]
    },
    {
      name: "Life Stage Practices",
      sanskritName: "Ashrama Dharma",
      description: "Specific practices for different stages of life.",
      methods: [
        "Student life practices (Brahmacharya)",
        "Householder duties (Grihastha)",
        "Retirement practices (Vanaprastha)",
        "Renunciation (Sannyasa)"
      ],
      benefits: [
        "Structured development",
        "Balanced life progression",
        "Spiritual maturation",
        "Social stability"
      ],
      challenges: [
        "Modern lifestyle integration",
        "Traditional role adaptation",
        "Life transition management"
      ],
      scriptureRefs: ["Upanishads", "Dharmasastras"]
    },
    {
      name: "Ethical Development",
      sanskritName: "Dharma Sadhana",
      description: "Practices for cultivating dharmic qualities and behavior.",
      methods: [
        "Self-study (Svadhyaya)",
        "Ethical reflection",
        "Character development",
        "Social service"
      ],
      benefits: [
        "Moral growth",
        "Ethical clarity",
        "Personal integrity",
        "Social contribution"
      ],
      challenges: [
        "Ethical decision-making",
        "Handling moral dilemmas",
        "Maintaining motivation"
      ],
      scriptureRefs: ["Yoga Sutras", "Bhagavad Gita"]
    }
  ],
  commonMisconceptions: [
    {
      misconception: "Dharma means religion",
      correction: "While often translated as 'religion,' dharma is a broader concept encompassing natural law, moral order, duty, righteousness, and cosmic harmony."
    },
    {
      misconception: "Dharma is rigid and unchanging",
      correction: "While eternal principles remain constant, their application is dynamic and contextual, adapting to time, place, and circumstance."
    },
    {
      misconception: "Dharma only applies to Hindus",
      correction: "As a universal principle governing existence, dharma applies to all beings, though its understanding and practice may vary across traditions."
    },
    {
      misconception: "Following dharma means following tradition blindly",
      correction: "Dharma requires intelligent discrimination and adaptation to current circumstances while maintaining core principles."
    }
  ],
  resources: [
    {
      title: "The Hindu Dharma",
      author: "Bansi Pandit",
      url: "/resources/hindu-dharma",
      type: "Book",
      description: "Comprehensive introduction to dharmic principles and practices.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/8178235099"
    },
    {
      title: "Dharma: The Hindu Approach to Life",
      author: "Julius Lipner",
      url: "/resources/dharma-approach",
      type: "Book",
      description: "Academic exploration of dharma in Hindu thought and practice.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0824836782"
    },
    {
      title: "The Dharma of Modern Mindful Living",
      author: "Swami Sarvapriyananda",
      url: "/resources/modern-dharma",
      type: "Video Course",
      description: "Application of dharmic principles to contemporary life.",
      affiliate: false
    }
  ]
}

export default function DharmaPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Dharma: Cosmic Order and Moral Law</h1>
        <p className="text-xl mb-4">{dharmaContent.introduction}</p>
        <p className="text-lg mb-8">{dharmaContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Scriptural Foundation</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dharmaContent.scriptureReferences.map((reference, index) => (
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
          {dharmaContent.historicalDevelopment.map((period, index) => (
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
        <h2 className="text-3xl font-bold mb-4">Aspects of Dharma</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {dharmaContent.dharmaAspects.map((aspect, index) => (
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
        <h2 className="text-3xl font-bold mb-4">Dharmic Practices</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {dharmaContent.dharmicPractices.map((practice, index) => (
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
          {dharmaContent.commonMisconceptions.map((item, index) => (
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
          {dharmaContent.resources.map((resource, index) => (
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
          <Link href="/teachings/hinduism/karma" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Karma</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand how dharma relates to the law of karma.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/hinduism/brahman-atman" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Brahman-Atman</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the relationship between dharma and ultimate reality.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/hinduism/moksha" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Moksha</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover how dharma leads to spiritual liberation.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 