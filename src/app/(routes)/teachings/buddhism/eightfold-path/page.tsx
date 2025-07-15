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

interface PathFactor {
  name: string
  sanskritName: string
  description: string
  keyPoints: string[]
  practices: string[]
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

interface EightfoldPathContent {
  introduction: string
  definition: string
  scriptureReferences: ScriptureReference[]
  historicalDevelopment: HistoricalDevelopment[]
  pathFactors: PathFactor[]
  commonMisconceptions: Array<{
    misconception: string
    correction: string
  }>
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "The Noble Eightfold Path | Buddhist Practice",
  description: "Explore the Noble Eightfold Path - Buddhism's practical guide to enlightenment through right view, intention, speech, action, livelihood, effort, mindfulness, and concentration.",
  openGraph: {
    title: "The Noble Eightfold Path | Buddhist Practice",
    description: "Comprehensive guide to understanding and practicing the Noble Eightfold Path",
    type: "website",
  },
}

const eightfoldPathContent: EightfoldPathContent = {
  introduction: `The Noble Eightfold Path (Ariya Aṭṭhaṅgika Magga) represents the Buddha's practical guide to enlightenment, offering a comprehensive approach to spiritual development through eight interconnected factors. This path constitutes the Fourth Noble Truth, providing the systematic method for ending suffering.`,
  definition: `The Noble Eightfold Path consists of eight factors grouped into three trainings: Wisdom (Right View and Right Intention), Ethics (Right Speech, Right Action, and Right Livelihood), and Mental Discipline (Right Effort, Right Mindfulness, and Right Concentration). These factors work together synergistically to transform understanding, behavior, and consciousness.`,
  scriptureReferences: [
    {
      reference: "Dhammacakkappavattana Sutta (SN 56.11)",
      text: "And what is that middle way? It is simply the Noble Eightfold Path, namely, right view, right intention, right speech, right action, right livelihood, right effort, right mindfulness, right concentration.",
      explanation: "The Buddha's first discourse introducing the Eightfold Path as the middle way between extremes."
    },
    {
      reference: "Magga-vibhanga Sutta (SN 45.8)",
      text: "And what, monks, is right view? Knowledge of suffering, knowledge of the origin of suffering, knowledge of the cessation of suffering, knowledge of the way leading to the cessation of suffering: This is called right view.",
      explanation: "Detailed explanation of each factor of the Noble Eightfold Path."
    },
    {
      reference: "Mahacattarisaka Sutta (MN 117)",
      text: "Therein, right view comes first. And how does right view come first? One understands wrong view as wrong view and right view as right view: this is one's right view.",
      explanation: "Discussion of how the factors of the path support and reinforce each other."
    }
  ],
  historicalDevelopment: [
    {
      period: "Early Buddhism (5th-3rd centuries BCE)",
      description: "Initial formulation and teaching of the Eightfold Path as the practical implementation of the Four Noble Truths.",
      keyFigures: [
        {
          name: "Buddha Shakyamuni",
          contribution: "Original exposition of the Noble Eightfold Path",
          dates: "c. 563-483 BCE"
        },
        {
          name: "Ananda",
          contribution: "Preservation and transmission of detailed teachings on the path",
          dates: "5th century BCE"
        }
      ],
      significance: "Established the practical framework for Buddhist practice and realization"
    },
    {
      period: "Development of Buddhist Schools (3rd century BCE - 5th century CE)",
      description: "Elaboration and systematic analysis of the path factors by various Buddhist traditions.",
      keyFigures: [
        {
          name: "Buddhaghosa",
          contribution: "Systematic exposition of the path in the Visuddhimagga",
          dates: "5th century CE"
        },
        {
          name: "Asanga",
          contribution: "Integration of the path with Mahayana concepts",
          dates: "4th century CE"
        }
      ],
      significance: "Deepened understanding and practical application across different Buddhist traditions"
    }
  ],
  pathFactors: [
    {
      name: "Right View",
      sanskritName: "Sammā Diṭṭhi",
      description: "Understanding reality as it is, particularly in terms of the Four Noble Truths and the nature of karma.",
      keyPoints: [
        "Understanding of the Four Noble Truths",
        "Recognition of karma and its fruits",
        "Understanding of dependent origination",
        "Recognition of the Three Marks of Existence"
      ],
      practices: [
        "Study of Buddhist teachings",
        "Contemplation of causality",
        "Investigation of experience",
        "Association with wise teachers"
      ],
      scriptureRefs: ["Sammādiṭṭhi Sutta", "Mahācattārīsaka Sutta"],
      challenges: [
        "Overcoming ingrained misconceptions",
        "Developing wisdom without becoming attached to views",
        "Balancing intellectual understanding with direct experience"
      ]
    },
    {
      name: "Right Intention",
      sanskritName: "Sammā Saṅkappa",
      description: "Cultivating wholesome intentions and motivations aligned with liberation and compassion.",
      keyPoints: [
        "Intention of renunciation",
        "Intention of good will",
        "Intention of harmlessness",
        "Transformation of motivations"
      ],
      practices: [
        "Cultivation of loving-kindness",
        "Practice of contentment",
        "Development of compassion",
        "Reflection on harmful intentions"
      ],
      scriptureRefs: ["Dvedhavitakka Sutta", "Vitakkasanthana Sutta"],
      challenges: [
        "Working with deeply rooted desires",
        "Maintaining pure motivation",
        "Balancing personal needs with altruistic intentions"
      ]
    },
    {
      name: "Right Speech",
      sanskritName: "Sammā Vācā",
      description: "Engaging in truthful, harmonious, and beneficial speech while abstaining from harmful speech.",
      keyPoints: [
        "Abstaining from false speech",
        "Abstaining from divisive speech",
        "Abstaining from harsh speech",
        "Abstaining from idle chatter"
      ],
      practices: [
        "Mindful speech practice",
        "Truth-telling exercises",
        "Conscious communication",
        "Noble silence"
      ],
      scriptureRefs: ["Abhaya Sutta", "Ambalatthika-rahulovada Sutta"],
      challenges: [
        "Breaking habitual speech patterns",
        "Speaking truth with compassion",
        "Maintaining mindful speech in difficult situations"
      ]
    },
    {
      name: "Right Action",
      sanskritName: "Sammā Kammanta",
      description: "Engaging in ethical physical actions while abstaining from harmful behaviors.",
      keyPoints: [
        "Abstaining from killing",
        "Abstaining from stealing",
        "Abstaining from sexual misconduct",
        "Cultivating positive actions"
      ],
      practices: [
        "Practice of the precepts",
        "Mindful physical activity",
        "Ethical decision-making",
        "Conscious lifestyle choices"
      ],
      scriptureRefs: ["Cunda Kammaraputta Sutta", "Veludvareyya Sutta"],
      challenges: [
        "Maintaining ethical conduct in challenging situations",
        "Balancing personal needs with ethical considerations",
        "Developing skillful responses to conflict"
      ]
    },
    {
      name: "Right Livelihood",
      sanskritName: "Sammā Ājīva",
      description: "Earning one's living in an ethical way that does not harm others.",
      keyPoints: [
        "Avoiding harmful occupations",
        "Ethical business practices",
        "Sustainable living",
        "Work-life balance"
      ],
      practices: [
        "Ethical career choices",
        "Mindful consumption",
        "Simple living",
        "Fair trade practices"
      ],
      scriptureRefs: ["Vanijja Sutta", "Dighajanu Sutta"],
      challenges: [
        "Finding ethical work opportunities",
        "Balancing financial needs with ethical concerns",
        "Navigating complex economic systems"
      ]
    },
    {
      name: "Right Effort",
      sanskritName: "Sammā Vāyāma",
      description: "Applying appropriate energy to cultivate wholesome states and abandon unwholesome ones.",
      keyPoints: [
        "Preventing unwholesome states",
        "Abandoning arisen unwholesome states",
        "Developing wholesome states",
        "Maintaining wholesome states"
      ],
      practices: [
        "Regular meditation practice",
        "Mindful daily activities",
        "Energy balancing exercises",
        "Habit transformation"
      ],
      scriptureRefs: ["Vitakkasanthana Sutta", "Dvedhavitakka Sutta"],
      challenges: [
        "Finding the right balance of effort",
        "Maintaining consistent practice",
        "Working with resistance and procrastination"
      ]
    },
    {
      name: "Right Mindfulness",
      sanskritName: "Sammā Sati",
      description: "Maintaining clear awareness of present moment experience in four domains.",
      keyPoints: [
        "Mindfulness of body",
        "Mindfulness of feelings",
        "Mindfulness of mind",
        "Mindfulness of phenomena"
      ],
      practices: [
        "Formal meditation practice",
        "Body scanning",
        "Contemplation of feelings",
        "Open awareness practice"
      ],
      scriptureRefs: ["Satipatthana Sutta", "Anapanasati Sutta"],
      challenges: [
        "Maintaining continuous awareness",
        "Working with distractions",
        "Integrating mindfulness into daily life"
      ]
    },
    {
      name: "Right Concentration",
      sanskritName: "Sammā Samādhi",
      description: "Developing focused, unified states of mind through meditation.",
      keyPoints: [
        "Development of jhanas",
        "Unification of mind",
        "Cultivation of tranquility",
        "Support for insight"
      ],
      practices: [
        "Breath meditation",
        "Walking meditation",
        "Concentration exercises",
        "Progressive meditation stages"
      ],
      scriptureRefs: ["Samadhanga Sutta", "Jhana Sutta"],
      challenges: [
        "Overcoming hindrances",
        "Developing stable concentration",
        "Balancing concentration with insight"
      ]
    }
  ],
  commonMisconceptions: [
    {
      misconception: "The Eightfold Path must be followed sequentially",
      correction: "The eight factors are developed simultaneously and support each other, though emphasis may vary at different stages of practice."
    },
    {
      misconception: "The path is purely individual and solitary",
      correction: "While personal practice is essential, the path emphasizes ethical relationships and community support (sangha)."
    },
    {
      misconception: "Right Mindfulness is just about relaxation or stress reduction",
      correction: "While mindfulness can reduce stress, its primary purpose is developing clear seeing and understanding of reality."
    },
    {
      misconception: "The path requires becoming a monk or nun",
      correction: "The Eightfold Path can be practiced by anyone in any lifestyle, though the depth and form of practice may vary."
    }
  ],
  resources: [
    {
      title: "The Noble Eightfold Path",
      author: "Bhikkhu Bodhi",
      url: "/resources/noble-eightfold-path",
      type: "Book",
      description: "Comprehensive guide to understanding and practicing the Noble Eightfold Path.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/192870607X"
    },
    {
      title: "Eight Mindful Steps to Happiness",
      author: "Bhante Gunaratana",
      url: "/resources/eight-mindful-steps",
      type: "Book",
      description: "Practical guide to implementing the Eightfold Path in daily life.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0861711769"
    },
    {
      title: "The Heart of the Buddha's Teaching",
      author: "Thich Nhat Hanh",
      url: "/resources/heart-buddha-teaching",
      type: "Book",
      description: "Clear explanation of core Buddhist teachings including the Eightfold Path.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0767903692"
    }
  ]
}

export default function EightfoldPathPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">The Noble Eightfold Path: The Buddhist Path to Liberation</h1>
        <p className="text-xl mb-4">{eightfoldPathContent.introduction}</p>
        <p className="text-lg mb-8">{eightfoldPathContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Scriptural Foundation</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eightfoldPathContent.scriptureReferences.map((reference, index) => (
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
          {eightfoldPathContent.historicalDevelopment.map((period, index) => (
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
        <h2 className="text-3xl font-bold mb-4">The Eight Factors of the Path</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {eightfoldPathContent.pathFactors.map((factor, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  {factor.name} <span className="text-slate-600">({factor.sanskritName})</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{factor.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Points:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {factor.keyPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Practices:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {factor.practices.map((practice, idx) => (
                        <li key={idx}>{practice}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scripture References:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {factor.scriptureRefs.map((ref, idx) => (
                        <li key={idx}>{ref}</li>
                      ))}
                    </ul>
                  </div>
                  {factor.challenges && (
                    <div>
                      <h4 className="font-semibold mb-2">Key Challenges:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {factor.challenges.map((challenge, idx) => (
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
          {eightfoldPathContent.commonMisconceptions.map((item, index) => (
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
          {eightfoldPathContent.resources.map((resource, index) => (
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
                <p>Understand the foundation that gives rise to the Noble Eightfold Path.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/buddhism/meditation" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Buddhist Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the practices of Right Mindfulness and Right Concentration.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/buddhism/ethics" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Buddhist Ethics</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn more about Right Speech, Action, and Livelihood.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 