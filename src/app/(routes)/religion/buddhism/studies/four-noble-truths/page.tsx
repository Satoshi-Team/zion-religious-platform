import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface NobleTruth {
  name: string
  sanskritName: string
  paliName: string
  description: string
  keyPrinciples: string[]
  interpretation: string[]
  practicalApplications: string[]
  challenges: string[]
  modernPerspectives: string[]
}

interface Teacher {
  name: string
  sanskritName: string
  period: string
  tradition: string
  biography: {
    origin: string
    background: string[]
    significance: string[]
    teachings: Array<{
      topic: string
      description: string
      significance: string
      keyPoints: string[]
    }>
  }
  interpretations: {
    firstTruth: string[]
    secondTruth: string[]
    thirdTruth: string[]
    fourthTruth: string[]
  }
  legacy: string
  modernRelevance: string[]
}

interface Scripture {
  title: string
  sanskritTitle: string
  paliTitle: string
  tradition: string
  period: string
  description: string
  keyPassages: Array<{
    passage: string
    translation: string
    context: string
    significance: string[]
  }>
  interpretations: string[]
  modernApplications: string[]
}

interface Practice {
  name: string
  sanskritName: string
  description: string
  methodology: string[]
  benefits: string[]
  challenges: string[]
  modernApplications: string[]
  scientificStudies?: string[]
}

interface Resource {
  title: string
  author: string
  year: string
  type: string
  description: string
  language: string
  level: string
  amazonUrl?: string
  isbn?: string
}

interface FourNobleTruthsContent {
  introduction: string
  overview: {
    definition: string
    historicalContext: string
    significance: string[]
    coreTeachings: string[]
  }
  nobleTruths: NobleTruth[]
  teachers: Teacher[]
  scriptures: Scripture[]
  practices: Practice[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "The Four Noble Truths | Buddhist Studies",
  description: "Comprehensive exploration of Buddhism's Four Noble Truths - the foundation of Buddhist teachings and path to enlightenment.",
  openGraph: {
    title: "The Four Noble Truths | Buddhist Studies",
    description: "In-depth study of the Four Noble Truths and their significance in Buddhist philosophy and practice",
    type: "website",
  },
}

const fourNobleTruthsContent: FourNobleTruthsContent = {
  introduction: `The Four Noble Truths (Sanskrit: चत्वारि आर्यसत्यानि; Pali: cattāri ariyasaccāni) represent the core of Buddhist teachings, first expounded by the Buddha in his initial sermon after attaining enlightenment. These fundamental principles explain the nature of suffering, its causes, the possibility of its cessation, and the path leading to its end. They serve as both a theoretical framework for understanding the human condition and a practical guide for spiritual development.`,
  overview: {
    definition: "The Four Noble Truths are the Buddha's basic teaching about the nature of suffering and the way to end it, forming the foundation of Buddhist thought and practice.",
    historicalContext: "First taught by the Buddha in the Deer Park at Sarnath, these truths emerged from his enlightenment experience and observation of human existence.",
    significance: [
      "Foundation of Buddhist doctrine",
      "Framework for understanding suffering",
      "Basis for Buddhist practice",
      "Guide to liberation",
      "Universal applicability",
      "Psychological insight",
      "Ethical framework",
      "Therapeutic approach"
    ],
    coreTeachings: [
      "Recognition of suffering's existence",
      "Understanding suffering's origin",
      "Possibility of suffering's cessation",
      "Path to end suffering"
    ]
  },
  nobleTruths: [
    {
      name: "The Truth of Suffering (Dukkha)",
      sanskritName: "दुःख आर्य सत्य",
      paliName: "Dukkha ariyasacca",
      description: "The truth that all existence is characterized by suffering, unsatisfactoriness, and stress.",
      keyPrinciples: [
        "Three types of suffering (physical, mental, existential)",
        "Impermanence of all phenomena",
        "Unsatisfactoriness of conditioned existence",
        "Universal nature of suffering",
        "Interconnection of pleasure and pain"
      ],
      interpretation: [
        "Suffering as a fundamental characteristic of existence",
        "Broader meaning beyond mere pain",
        "Psychological and existential dimensions",
        "Role of attachment in creating suffering",
        "Relationship to impermanence"
      ],
      practicalApplications: [
        "Mindful awareness of suffering",
        "Acceptance of life's challenges",
        "Development of emotional resilience",
        "Cultivation of equanimity",
        "Understanding of human experience"
      ],
      challenges: [
        "Misconception as pessimistic philosophy",
        "Difficulty in accepting universal suffering",
        "Balance between acceptance and action",
        "Cultural differences in understanding suffering",
        "Modern interpretations and relevance"
      ],
      modernPerspectives: [
        "Psychological interpretations",
        "Scientific studies on suffering",
        "Application in mental health",
        "Relevance to social issues",
        "Integration with modern philosophy"
      ]
    },
    {
      name: "The Truth of the Origin of Suffering (Samudaya)",
      sanskritName: "समुदय आर्य सत्य",
      paliName: "Samudaya ariyasacca",
      description: "The truth that craving, aversion, and ignorance are the roots of suffering.",
      keyPrinciples: [
        "Three poisons (greed, hatred, delusion)",
        "Law of karma",
        "Dependent origination",
        "Role of attachment",
        "Nature of desire"
      ],
      interpretation: [
        "Psychological causes of suffering",
        "Karmic consequences of actions",
        "Cycle of rebirth",
        "Role of mental formations",
        "Impact of ignorance"
      ],
      practicalApplications: [
        "Mindfulness of mental states",
        "Recognition of craving",
        "Understanding of cause and effect",
        "Ethical decision-making",
        "Self-reflection practices"
      ],
      challenges: [
        "Complexity of karmic law",
        "Difficulty in recognizing subtle desires",
        "Cultural attachment to materialism",
        "Balance of healthy and unhealthy desires",
        "Modern consumer culture"
      ],
      modernPerspectives: [
        "Psychological addiction studies",
        "Neuroscience of craving",
        "Environmental implications",
        "Social justice perspectives",
        "Economic implications"
      ]
    },
    {
      name: "The Truth of the Cessation of Suffering (Nirodha)",
      sanskritName: "निरोध आर्य सत्य",
      paliName: "Nirodha ariyasacca",
      description: "The truth that suffering can be ended through the cessation of its causes.",
      keyPrinciples: [
        "Nature of Nirvana",
        "Complete liberation",
        "End of craving",
        "Freedom from delusion",
        "State of peace"
      ],
      interpretation: [
        "Ultimate goal of practice",
        "Nature of enlightenment",
        "Stages of liberation",
        "Relationship to emptiness",
        "Experience of freedom"
      ],
      practicalApplications: [
        "Gradual path of practice",
        "Cultivation of wisdom",
        "Development of concentration",
        "Ethical living",
        "Mindfulness practice"
      ],
      challenges: [
        "Abstract nature of Nirvana",
        "Misconceptions about enlightenment",
        "Patience in practice",
        "Balance of effort and acceptance",
        "Integration with daily life"
      ],
      modernPerspectives: [
        "Psychological well-being",
        "Secular interpretations",
        "Scientific studies of meditation",
        "Contemporary applications",
        "Integration with therapy"
      ]
    },
    {
      name: "The Truth of the Path (Magga)",
      sanskritName: "मार्ग आर्य सत्य",
      paliName: "Magga ariyasacca",
      description: "The truth of the Noble Eightfold Path as the way to end suffering.",
      keyPrinciples: [
        "Eight aspects of the path",
        "Three trainings (ethics, concentration, wisdom)",
        "Gradual development",
        "Balanced practice",
        "Integration of all factors"
      ],
      interpretation: [
        "Practical methodology",
        "Holistic approach",
        "Progressive development",
        "Interconnection of factors",
        "Role of wisdom and compassion"
      ],
      practicalApplications: [
        "Daily ethical practice",
        "Meditation techniques",
        "Mindful living",
        "Study of teachings",
        "Community engagement"
      ],
      challenges: [
        "Maintaining consistent practice",
        "Balancing different aspects",
        "Modern lifestyle adaptation",
        "Understanding deep concepts",
        "Finding qualified guidance"
      ],
      modernPerspectives: [
        "Secular Buddhism",
        "Mindfulness movement",
        "Therapeutic applications",
        "Social engagement",
        "Environmental awareness"
      ]
    }
  ],
  teachers: [
    {
      name: "The Buddha",
      sanskritName: "शाक्यमुनि बुद्ध",
      period: "563-483 BCE (traditional dates)",
      tradition: "Early Buddhism",
      biography: {
        origin: "Lumbini, Ancient India (now Nepal)",
        background: [
          "Born as Prince Siddhartha Gautama",
          "Renounced royal life in search of truth",
          "Achieved enlightenment under the Bodhi tree",
          "Taught for 45 years after enlightenment"
        ],
        significance: [
          "Founder of Buddhism",
          "First teacher of the Four Noble Truths",
          "Perfect embodiment of the teachings",
          "Guide to countless beings"
        ],
        teachings: [
          {
            topic: "First Sermon (Dhammacakkappavattana Sutta)",
            description: "Initial teaching of the Four Noble Truths and Noble Eightfold Path",
            significance: "Foundation of Buddhist doctrine",
            keyPoints: [
              "Introduction of Middle Way",
              "Explanation of Four Noble Truths",
              "Description of Noble Eightfold Path",
              "Framework for liberation"
            ]
          }
        ]
      },
      interpretations: {
        firstTruth: [
          "Comprehensive understanding of suffering",
          "Three marks of existence",
          "Nature of human experience"
        ],
        secondTruth: [
          "Analysis of craving and attachment",
          "Dependent origination",
          "Psychological causation"
        ],
        thirdTruth: [
          "Possibility of liberation",
          "Nature of Nirvana",
          "Complete freedom from suffering"
        ],
        fourthTruth: [
          "Systematic path to liberation",
          "Integration of practice",
          "Gradual training"
        ]
      },
      legacy: "The Buddha's exposition of the Four Noble Truths remains the cornerstone of Buddhist teaching, providing both theoretical understanding and practical guidance for the path to liberation.",
      modernRelevance: [
        "Psychological insights",
        "Practical methodology",
        "Universal applicability",
        "Scientific compatibility",
        "Therapeutic potential"
      ]
    }
  ],
  scriptures: [
    {
      title: "Dhammacakkappavattana Sutta",
      sanskritTitle: "धर्मचक्रप्रवर्तन सूत्र",
      paliTitle: "Dhammacakkappavattana Sutta",
      tradition: "Early Buddhism",
      period: "5th century BCE",
      description: "The Buddha's first discourse setting forth the Four Noble Truths and the Noble Eightfold Path.",
      keyPassages: [
        {
          passage: "This is the noble truth of suffering...",
          translation: "Birth is suffering, aging is suffering, illness is suffering, death is suffering...",
          context: "Introduction of the First Noble Truth",
          significance: [
            "Foundation of Buddhist teaching",
            "Universal human experience",
            "Basis for investigation",
            "Starting point of practice"
          ]
        }
      ],
      interpretations: [
        "Historical analysis",
        "Doctrinal significance",
        "Practical implications",
        "Modern relevance"
      ],
      modernApplications: [
        "Psychological therapy",
        "Stress reduction",
        "Personal development",
        "Social analysis"
      ]
    }
  ],
  practices: [
    {
      name: "Mindfulness of Suffering",
      sanskritName: "दुःख अनुपश्यना",
      description: "Practice of observing and understanding the nature of suffering in one's experience.",
      methodology: [
        "Direct observation of experience",
        "Recognition of suffering's characteristics",
        "Investigation of causes",
        "Development of insight",
        "Cultivation of acceptance"
      ],
      benefits: [
        "Deeper understanding of reality",
        "Reduced reactivity to pain",
        "Increased emotional resilience",
        "Greater compassion",
        "Wisdom development"
      ],
      challenges: [
        "Facing difficult emotions",
        "Maintaining consistent practice",
        "Balancing acceptance and change",
        "Overcoming resistance",
        "Integration with daily life"
      ],
      modernApplications: [
        "Mindfulness-based therapy",
        "Stress reduction programs",
        "Pain management",
        "Emotional intelligence development",
        "Trauma healing"
      ],
      scientificStudies: [
        "Neuroplasticity research",
        "Pain perception studies",
        "Psychological resilience",
        "Emotional regulation",
        "Stress response"
      ]
    }
  ],
  resources: [
    {
      title: "What the Buddha Taught",
      author: "Walpola Rahula",
      year: "1959",
      type: "Book",
      description: "Classic introduction to basic Buddhist teachings with emphasis on the Four Noble Truths",
      language: "English",
      level: "Beginner to Intermediate",
      isbn: "978-0802130310"
    },
    {
      title: "The Heart of the Buddha's Teaching",
      author: "Thich Nhat Hanh",
      year: "1998",
      type: "Book",
      description: "Comprehensive explanation of fundamental Buddhist teachings including the Four Noble Truths",
      language: "English",
      level: "All Levels",
      isbn: "978-0767903692"
    }
  ]
}

export default function FourNobleTruthsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">The Four Noble Truths</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{fourNobleTruthsContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>{fourNobleTruthsContent.overview.definition}</p>
            <p>{fourNobleTruthsContent.overview.historicalContext}</p>
            <div>
              <h3 className="font-semibold mb-2">Significance:</h3>
              <ul className="list-disc pl-6">
                {fourNobleTruthsContent.overview.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Core Teachings:</h3>
              <ul className="list-disc pl-6">
                {fourNobleTruthsContent.overview.coreTeachings.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Noble Truths */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>The Four Noble Truths</CardTitle>
        </CardHeader>
        <CardContent>
          {fourNobleTruthsContent.nobleTruths.map((truth, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">{truth.name}</h3>
              <p className="mb-2 text-gray-600">Sanskrit: {truth.sanskritName} | Pali: {truth.paliName}</p>
              <p className="mb-4">{truth.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Key Principles:</h4>
                  <ul className="list-disc pl-6">
                    {truth.keyPrinciples.map((principle, idx) => (
                      <li key={idx}>{principle}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Practical Applications:</h4>
                  <ul className="list-disc pl-6">
                    {truth.practicalApplications.map((application, idx) => (
                      <li key={idx}>{application}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Teachers */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Teachers</CardTitle>
        </CardHeader>
        <CardContent>
          {fourNobleTruthsContent.teachers.map((teacher, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{teacher.name} ({teacher.sanskritName})</h3>
              <p className="mb-2">Period: {teacher.period}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Background:</h4>
                  <ul className="list-disc pl-6">
                    {teacher.biography.background.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-6">
                    {teacher.biography.significance.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Scriptures */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Scriptures</CardTitle>
        </CardHeader>
        <CardContent>
          {fourNobleTruthsContent.scriptures.map((scripture, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{scripture.title}</h3>
              <p className="mb-2">Sanskrit: {scripture.sanskritTitle} | Pali: {scripture.paliTitle}</p>
              <p className="mb-4">{scripture.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Key Passages:</h4>
                  {scripture.keyPassages.map((passage, idx) => (
                    <div key={idx} className="mb-4">
                      <p className="italic mb-2">{passage.translation}</p>
                      <p className="text-sm text-gray-600">Context: {passage.context}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold">Modern Applications:</h4>
                  <ul className="list-disc pl-6">
                    {scripture.modernApplications.map((app, idx) => (
                      <li key={idx}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Practices */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Practices</CardTitle>
        </CardHeader>
        <CardContent>
          {fourNobleTruthsContent.practices.map((practice, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{practice.name} ({practice.sanskritName})</h3>
              <p className="mb-4">{practice.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Methodology:</h4>
                  <ul className="list-disc pl-6">
                    {practice.methodology.map((method, idx) => (
                      <li key={idx}>{method}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Benefits:</h4>
                  <ul className="list-disc pl-6">
                    {practice.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
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
          <CardTitle>Further Reading</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fourNobleTruthsContent.resources.map((resource, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h3 className="font-semibold text-xl mb-2">{resource.title}</h3>
                <p className="mb-1">Author: {resource.author}</p>
                <p className="mb-1">Year: {resource.year}</p>
                <p className="mb-1">Type: {resource.type}</p>
                <p className="mb-3">{resource.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Level: {resource.level}</p>
                  {resource.isbn && <p className="text-sm text-gray-600">ISBN: {resource.isbn}</p>}
                  <Button asChild className="w-full mt-4" variant="default">
                    <Link 
                      href={`https://www.amazon.com/dp/${resource.isbn}?tag=religiousstu-20`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View on Amazon
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Button asChild variant="outline">
          <Link href="/religion/buddhism/studies">← Back to Buddhist Studies</Link>
        </Button>
        <Button asChild>
          <Link href="/religion/buddhism/studies/noble-eightfold-path">Noble Eightfold Path →</Link>
        </Button>
      </div>
    </div>
  )
} 