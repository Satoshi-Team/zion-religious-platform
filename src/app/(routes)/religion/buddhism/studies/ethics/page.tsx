import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface EthicalPrinciple {
  name: string
  sanskritName: string
  paliName: string
  category: string
  description: string
  principles: string[]
  applications: string[]
  challenges: string[]
  benefits: string[]
  modernInterpretations: string[]
}

interface Precept {
  name: string
  sanskritName: string
  paliName: string
  description: string
  interpretation: string[]
  practices: string[]
  challenges: string[]
  modernApplications: string[]
  relatedVirtues: string[]
}

interface VirtuePractice {
  name: string
  sanskritName: string
  paliName: string
  category: string
  description: string
  qualities: string[]
  practices: string[]
  benefits: string[]
  challenges: string[]
  modernApplications: string[]
}

interface EthicalTeaching {
  title: string
  sanskritTitle: string
  source: string
  period: string
  context: string
  mainPoints: string[]
  interpretation: string[]
  significance: string[]
  modernRelevance: string[]
}

interface Resource {
  title: string
  author: string
  year: string
  type: string
  description: string
  language: string
  level: string
  amazonUrl: string
  isbn?: string
}

interface BuddhistEthicsContent {
  introduction: string
  overview: {
    definition: string
    significance: string[]
    foundations: {
      karma: string[]
      precepts: string[]
      virtues: string[]
      mindfulness: string[]
    }
  }
  principles: EthicalPrinciple[]
  precepts: Precept[]
  virtues: VirtuePractice[]
  teachings: EthicalTeaching[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Buddhist Ethics | Buddhist Studies",
  description: "Comprehensive exploration of Buddhist ethical principles, precepts, and their application in modern life.",
  openGraph: {
    title: "Buddhist Ethics | Buddhist Studies",
    description: "In-depth study of Buddhist moral teachings and their relevance to contemporary ethical challenges",
    type: "website",
  },
}

const buddhistEthicsContent: BuddhistEthicsContent = {
  introduction: `Buddhist ethics represents a comprehensive system of moral principles and practices rooted in the Buddha's teachings on wisdom and compassion. Rather than being merely rule-based, Buddhist ethics emphasizes the cultivation of virtuous qualities and mindful awareness as the foundation for ethical behavior. This approach integrates personal development with moral conduct, offering practical guidance for addressing both traditional and contemporary ethical challenges.`,
  overview: {
    definition: "Buddhist ethics combines moral principles, mindful awareness, and compassionate action to cultivate wholesome states of mind and beneficial conduct for oneself and others.",
    significance: [
      "Foundation for spiritual development",
      "Guide for skillful living",
      "Framework for moral decision-making",
      "Path to personal transformation",
      "Basis for social harmony",
      "Method for reducing suffering",
      "Development of wisdom and compassion",
      "Integration of theory and practice"
    ],
    foundations: {
      karma: [
        "Law of cause and effect",
        "Responsibility for actions",
        "Long-term consequences",
        "Intention and motivation",
        "Transformative potential"
      ],
      precepts: [
        "Non-harming (ahimsa)",
        "Ethical restraint",
        "Mindful conduct",
        "Protection of life",
        "Cultivation of virtue"
      ],
      virtues: [
        "Generosity (dana)",
        "Ethical conduct (sila)",
        "Patience (khanti)",
        "Diligence (viriya)",
        "Mindfulness (sati)"
      ],
      mindfulness: [
        "Ethical awareness",
        "Present moment attention",
        "Clear comprehension",
        "Wise reflection",
        "Conscious choice"
      ]
    }
  },
  principles: [
    {
      name: "Right Action",
      sanskritName: "Samyak Karmānta",
      paliName: "Sammā Kammanta",
      category: "Ethical Conduct",
      description: "The principle of engaging in wholesome physical actions while abstaining from harmful conduct, based on wisdom and compassion.",
      principles: [
        "Non-harming of living beings",
        "Non-taking of what is not given",
        "Ethical sexual conduct",
        "Truthful speech",
        "Mindful consumption"
      ],
      applications: [
        "Vegetarian/vegan lifestyle",
        "Ethical business practices",
        "Environmental stewardship",
        "Responsible relationships",
        "Mindful consumption habits"
      ],
      challenges: [
        "Modern economic pressures",
        "Social expectations",
        "Cultural differences",
        "Practical limitations",
        "Competing values"
      ],
      benefits: [
        "Personal integrity",
        "Social harmony",
        "Mental peace",
        "Reduced remorse",
        "Positive relationships"
      ],
      modernInterpretations: [
        "Business ethics",
        "Environmental ethics",
        "Digital ethics",
        "Bioethics",
        "Social responsibility"
      ]
    }
  ],
  precepts: [
    {
      name: "First Precept",
      sanskritName: "Ahiṃsā",
      paliName: "Pāṇātipātā veramaṇī",
      description: "The fundamental ethical principle of non-harming and reverence for life.",
      interpretation: [
        "Respect for all life forms",
        "Prevention of harm",
        "Cultivation of compassion",
        "Protection of nature",
        "Peaceful conflict resolution"
      ],
      practices: [
        "Vegetarian/vegan diet",
        "Mindful movement",
        "Environmental protection",
        "Peaceful communication",
        "Compassionate action"
      ],
      challenges: [
        "Food choices",
        "Self-defense situations",
        "Medical decisions",
        "Pest control",
        "Economic impacts"
      ],
      modernApplications: [
        "Animal rights",
        "Environmental protection",
        "Peace activism",
        "Healthcare ethics",
        "Conflict resolution"
      ],
      relatedVirtues: [
        "Compassion (karuṇā)",
        "Loving-kindness (mettā)",
        "Mindfulness (sati)",
        "Wisdom (paññā)",
        "Restraint (saṃvara)"
      ]
    }
  ],
  virtues: [
    {
      name: "Loving-kindness",
      sanskritName: "Maitrī",
      paliName: "Mettā",
      category: "Divine Abodes",
      description: "The practice of unconditional goodwill and benevolence towards all beings without discrimination.",
      qualities: [
        "Universal goodwill",
        "Unconditional love",
        "Genuine care",
        "Inclusive kindness",
        "Peaceful intention"
      ],
      practices: [
        "Metta meditation",
        "Compassionate action",
        "Forgiveness practice",
        "Kind speech",
        "Altruistic service"
      ],
      benefits: [
        "Mental peace",
        "Improved relationships",
        "Reduced anger",
        "Emotional resilience",
        "Social harmony"
      ],
      challenges: [
        "Dealing with difficult people",
        "Personal aversion",
        "Cultural barriers",
        "Self-judgment",
        "Maintaining consistency"
      ],
      modernApplications: [
        "Conflict resolution",
        "Mental health",
        "Social work",
        "Education",
        "Healthcare"
      ]
    }
  ],
  teachings: [
    {
      title: "Advice to Sigāla",
      sanskritTitle: "Sigālovāda Sutta",
      source: "Dīgha Nikāya",
      period: "Early Buddhist Period",
      context: "The Buddha's advice to a young householder on ethical living and social relationships",
      mainPoints: [
        "Duties in relationships",
        "Virtuous friendship",
        "Wealth management",
        "Social harmony",
        "Balanced lifestyle"
      ],
      interpretation: [
        "Practical ethics for laypeople",
        "Social responsibility",
        "Economic ethics",
        "Family values",
        "Community relations"
      ],
      significance: [
        "Guide for lay ethics",
        "Social harmony framework",
        "Practical application",
        "Universal relevance",
        "Balanced approach"
      ],
      modernRelevance: [
        "Professional ethics",
        "Family relationships",
        "Financial management",
        "Work-life balance",
        "Social networking"
      ]
    }
  ],
  resources: [
    {
      title: "Ethics in the Buddha's Teachings",
      author: "Peter Harvey",
      year: "2000",
      type: "Book",
      description: "Comprehensive exploration of Buddhist ethical principles and their practical applications",
      language: "English",
      level: "Intermediate",
      amazonUrl: "https://www.amazon.com/Introduction-Buddhist-Ethics-Foundations-Values/dp/0521556406",
      isbn: "978-0521556408"
    },
    {
      title: "Being Good: Buddhist Ethics for Everyday Life",
      author: "Hsing Yun",
      year: "2012",
      type: "Book",
      description: "Practical guide to applying Buddhist ethics in modern daily life",
      language: "English",
      level: "Beginner",
      amazonUrl: "https://www.amazon.com/Being-Good-Buddhist-Ethics-Everyday/dp/1932293558",
      isbn: "978-1932293555"
    }
  ]
}

export default function BuddhistEthicsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Buddhist Ethics</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{buddhistEthicsContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>{buddhistEthicsContent.overview.definition}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Significance:</h3>
              <ul className="list-disc pl-6">
                {buddhistEthicsContent.overview.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Foundations:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Karma:</h4>
                  <ul className="list-disc pl-6">
                    {buddhistEthicsContent.overview.foundations.karma.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Precepts:</h4>
                  <ul className="list-disc pl-6">
                    {buddhistEthicsContent.overview.foundations.precepts.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Virtues:</h4>
                  <ul className="list-disc pl-6">
                    {buddhistEthicsContent.overview.foundations.virtues.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Mindfulness:</h4>
                  <ul className="list-disc pl-6">
                    {buddhistEthicsContent.overview.foundations.mindfulness.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ethical Principles */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Ethical Principles</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistEthicsContent.principles.map((principle, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {principle.name} ({principle.sanskritName} / {principle.paliName})
              </h3>
              <p className="mb-2">{principle.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Core Principles:</h4>
                  <ul className="list-disc pl-6">
                    {principle.principles.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Applications:</h4>
                  <ul className="list-disc pl-6">
                    {principle.modernInterpretations.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Precepts */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Precepts and Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistEthicsContent.precepts.map((precept, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {precept.name} ({precept.sanskritName} / {precept.paliName})
              </h3>
              <p className="mb-2">{precept.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Practices:</h4>
                  <ul className="list-disc pl-6">
                    {precept.practices.map((practice, idx) => (
                      <li key={idx}>{practice}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Applications:</h4>
                  <ul className="list-disc pl-6">
                    {precept.modernApplications.map((app, idx) => (
                      <li key={idx}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Virtues */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Virtues and Their Practice</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistEthicsContent.virtues.map((virtue, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {virtue.name} ({virtue.sanskritName} / {virtue.paliName})
              </h3>
              <p className="mb-2">{virtue.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Qualities:</h4>
                  <ul className="list-disc pl-6">
                    {virtue.qualities.map((quality, idx) => (
                      <li key={idx}>{quality}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Benefits:</h4>
                  <ul className="list-disc pl-6">
                    {virtue.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Teachings */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Ethical Teachings</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistEthicsContent.teachings.map((teaching, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{teaching.title} ({teaching.sanskritTitle})</h3>
              <p className="mb-2">Source: {teaching.source}</p>
              <p className="mb-2">Period: {teaching.period}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Main Points:</h4>
                  <ul className="list-disc pl-6">
                    {teaching.mainPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Relevance:</h4>
                  <ul className="list-disc pl-6">
                    {teaching.modernRelevance.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Resources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recommended Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {buddhistEthicsContent.resources.map((resource, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h3 className="font-semibold">{resource.title}</h3>
                <p>Author: {resource.author}</p>
                <p>Year: {resource.year}</p>
                <p>Type: {resource.type}</p>
                <p>Description: {resource.description}</p>
                <p>Level: {resource.level}</p>
                {resource.isbn && <p>ISBN: {resource.isbn}</p>}
                <Link 
                  href={resource.amazonUrl}
                  className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Amazon
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 