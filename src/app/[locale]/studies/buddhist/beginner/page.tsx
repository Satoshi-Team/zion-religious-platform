import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ScrollText, Library, ArrowLeft, ExternalLink, Lightbulb, History, Users, Globe, Search, Music, Calendar, MapPin, Clock, Target, Heart, Brain } from "lucide-react"
import Link from "next/link"

interface BuddhistBeginnerPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Buddhist Studies for Beginners | Complete Guide to Buddhism",
  description: "Start your journey into Buddhist studies with this comprehensive beginner's guide. Learn about the Four Noble Truths, Eightfold Path, meditation, and Buddhist philosophy with free resources.",
  keywords: [
    "Buddhist studies",
    "Buddhism for beginners",
    "Four Noble Truths",
    "Eightfold Path",
    "Buddhist meditation",
    "Buddhist philosophy",
    "Buddhist practice",
    "Buddhist texts",
    "Buddhist teachings",
    "Buddhist history"
  ],
  openGraph: {
    title: "Buddhist Studies for Beginners - Complete Guide to Buddhism",
    description: "Start your journey into Buddhist studies with this comprehensive beginner's guide.",
    images: [
      {
        url: "/images/buddhist-beginner-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Buddhist Studies for Beginners"
      }
    ]
  }
}

const beginnerTopics = [
  {
    id: "four-noble-truths",
    name: "The Four Noble Truths",
    description: "The foundation of Buddhist teaching and the path to understanding suffering and liberation.",
    icon: Target,
    content: {
      overview: "The Four Noble Truths are the Buddha's first teaching and form the foundation of all Buddhist practice. They provide a framework for understanding the nature of suffering and the path to liberation.",
      truths: [
        {
          name: "The Truth of Suffering (Dukkha)",
          description: "Understanding that suffering exists in various forms",
          explanation: "Suffering includes physical pain, mental anguish, and the dissatisfaction that comes from craving and attachment. It's not that life is only suffering, but that suffering is an inherent part of conditioned existence."
        },
        {
          name: "The Truth of the Cause of Suffering (Samudaya)",
          description: "Identifying the root causes of suffering",
          explanation: "The primary cause of suffering is craving (tanha) - the desire for things to be different than they are. This includes craving for sensual pleasures, for becoming, and for non-becoming."
        },
        {
          name: "The Truth of the Cessation of Suffering (Nirodha)",
          description: "The possibility of ending suffering",
          explanation: "Suffering can be overcome by eliminating craving and attachment. This leads to nibbana (nirvana), a state of peace and freedom from suffering."
        },
        {
          name: "The Truth of the Path to Cessation (Magga)",
          description: "The way to end suffering",
          explanation: "The Eightfold Path provides the practical method for ending suffering and achieving liberation."
        }
      ],
      practice: "Begin by reflecting on these truths in your daily life. Notice when you experience suffering and investigate its causes. Practice letting go of attachments and developing contentment."
    },
    resources: [
      {
        name: "Access to Insight",
        url: "https://www.accesstoinsight.org/lib/authors/bodhi/waytoend.html",
        description: "Detailed explanation of the Four Noble Truths"
      },
      {
        name: "SuttaCentral",
        url: "https://suttacentral.net/sn56.11",
        description: "The Buddha's first discourse on the Four Noble Truths"
      }
    ]
  },
  {
    id: "eightfold-path",
    name: "The Noble Eightfold Path",
    description: "The practical path to liberation, consisting of eight interconnected factors for spiritual development.",
    icon: Heart,
    content: {
      overview: "The Eightfold Path is the practical method for achieving the cessation of suffering. It's not a linear progression but eight interconnected factors that develop together.",
      factors: [
        {
          name: "Right Understanding (Samma Ditthi)",
          description: "Understanding the Four Noble Truths and the nature of reality",
          practice: "Study Buddhist teachings, reflect on the nature of suffering and impermanence, and develop insight into the true nature of things."
        },
        {
          name: "Right Intention (Samma Sankappa)",
          description: "Cultivating wholesome intentions and motivations",
          practice: "Develop intentions of renunciation, goodwill, and harmlessness. Let go of harmful thoughts and cultivate positive mental states."
        },
        {
          name: "Right Speech (Samma Vaca)",
          description: "Speaking truthfully, kindly, and constructively",
          practice: "Avoid lying, harsh speech, gossip, and idle chatter. Speak truthfully, gently, meaningfully, and at appropriate times."
        },
        {
          name: "Right Action (Samma Kammanta)",
          description: "Acting ethically and harmlessly",
          practice: "Refrain from killing, stealing, and sexual misconduct. Act with kindness, generosity, and respect for others."
        },
        {
          name: "Right Livelihood (Samma Ajiva)",
          description: "Earning a living in ways that don't harm others",
          practice: "Avoid occupations that involve killing, selling weapons, drugs, or other harmful substances, or exploiting others."
        },
        {
          name: "Right Effort (Samma Vayama)",
          description: "Cultivating wholesome states and abandoning unwholesome ones",
          practice: "Make effort to prevent unwholesome states from arising, abandon those that have arisen, develop wholesome states, and maintain those that have arisen."
        },
        {
          name: "Right Mindfulness (Samma Sati)",
          description: "Developing awareness of body, feelings, mind, and mental objects",
          practice: "Practice mindfulness meditation, be aware of your body, feelings, thoughts, and mental states in the present moment."
        },
        {
          name: "Right Concentration (Samma Samadhi)",
          description: "Developing deep concentration and mental unification",
          practice: "Practice meditation to develop concentration, leading to the jhanas (meditative absorptions) and insight."
        }
      ],
      practice: "Begin with Right Understanding and Right Intention, then gradually incorporate the other factors into your daily life. Remember that all factors support each other and develop together."
    },
    resources: [
      {
        name: "Access to Insight",
        url: "https://www.accesstoinsight.org/lib/authors/bodhi/waytoend.html",
        description: "Comprehensive guide to the Eightfold Path"
      },
      {
        name: "BuddhaNet",
        url: "https://www.buddhanet.net/e-learning/8foldpath.htm",
        description: "Interactive guide to the Eightfold Path"
      }
    ]
  },
  {
    id: "meditation",
    name: "Buddhist Meditation",
    description: "Essential meditation practices for developing mindfulness, concentration, and insight.",
    icon: Brain,
    content: {
      overview: "Meditation is central to Buddhist practice, providing the tools for developing mindfulness, concentration, and insight. There are many types of Buddhist meditation, each serving different purposes.",
      types: [
        {
          name: "Mindfulness Meditation (Satipatthana)",
          description: "Developing awareness of the present moment",
          practice: "Focus on the breath, body sensations, feelings, or thoughts. Simply observe without judgment or reaction.",
          benefits: "Reduces stress, increases self-awareness, develops concentration, and provides insight into the nature of mind and reality."
        },
        {
          name: "Loving-Kindness Meditation (Metta)",
          description: "Cultivating unconditional love and goodwill",
          practice: "Direct loving thoughts toward yourself, loved ones, neutral people, difficult people, and all beings.",
          benefits: "Develops compassion, reduces anger and ill-will, increases positive emotions, and improves relationships."
        },
        {
          name: "Concentration Meditation (Samatha)",
          description: "Developing deep concentration and tranquility",
          practice: "Focus on a single object like the breath, a mantra, or a visual object to develop one-pointed concentration.",
          benefits: "Calms the mind, develops concentration, reduces stress, and prepares the mind for insight meditation."
        },
        {
          name: "Insight Meditation (Vipassana)",
          description: "Developing wisdom and understanding",
          practice: "Observe the changing nature of all phenomena, developing insight into impermanence, suffering, and non-self.",
          benefits: "Develops wisdom, reduces attachment, leads to liberation, and provides deep understanding of reality."
        }
      ],
      practice: "Start with 10-15 minutes of mindfulness meditation daily. Focus on the breath and gently return your attention when the mind wanders. Gradually increase the duration as your practice develops."
    },
    resources: [
      {
        name: "Access to Insight",
        url: "https://www.accesstoinsight.org/lib/authors/thanissaro/meditations.html",
        description: "Meditation instructions and guides"
      },
      {
        name: "Dharma Seed",
        url: "https://dharmaseed.org",
        description: "Audio meditation instructions and talks"
      }
    ]
  }
]

const studyPath = [
  {
    stage: "Foundation",
    duration: "1-3 months",
    topics: [
      "Understanding the Four Noble Truths",
      "Learning about the Eightfold Path",
      "Basic meditation practice",
      "Buddhist ethics and precepts"
    ],
    resources: [
      "What the Buddha Taught by Walpola Rahula",
      "The Heart of the Buddha's Teaching by Thich Nhat Hanh",
      "Mindfulness in Plain English by Bhante Gunaratana"
    ]
  },
  {
    stage: "Deepening",
    duration: "3-6 months",
    topics: [
      "Advanced meditation techniques",
      "Study of Buddhist texts",
      "Understanding karma and rebirth",
      "Developing compassion and loving-kindness"
    ],
    resources: [
      "In the Buddha's Words by Bhikkhu Bodhi",
      "The Dhammapada (various translations)",
      "Loving-Kindness by Sharon Salzberg"
    ]
  },
  {
    stage: "Integration",
    duration: "6-12 months",
    topics: [
      "Applying teachings to daily life",
      "Community practice and sangha",
      "Advanced philosophical concepts",
      "Personal retreat practice"
    ],
    resources: [
      "The Middle Length Discourses by Bhikkhu Bodhi",
      "Buddhism: A Very Short Introduction by Damien Keown",
      "The Experience of Insight by Joseph Goldstein"
    ]
  }
]

const onlineResources = [
  {
    category: "Free Text Access",
    resources: [
      {
        name: "SuttaCentral",
        url: "https://suttacentral.net",
        description: "Complete Pali Canon with multiple translations",
        features: ["Search functionality", "Cross-references", "Audio recordings", "Study guides"]
      },
      {
        name: "Access to Insight",
        url: "https://www.accesstoinsight.org",
        description: "Theravada Buddhist library and meditation archive",
        features: ["Sutta translations", "Meditation guides", "Study materials", "Commentaries"]
      },
      {
        name: "BuddhaNet",
        url: "https://www.buddhanet.net",
        description: "Comprehensive Buddhist education network",
        features: ["Educational courses", "Study guides", "Directory of centers", "Multimedia resources"]
      }
    ]
  },
  {
    category: "Meditation Resources",
    resources: [
      {
        name: "Dharma Seed",
        url: "https://dharmaseed.org",
        description: "Audio teachings from Buddhist meditation teachers",
        features: ["Meditation instructions", "Dharma talks", "Retreat recordings", "Multiple traditions"]
      },
      {
        name: "Insight Meditation Society",
        url: "https://www.dharma.org",
        description: "Theravada meditation center with online resources",
        features: ["Meditation guides", "Retreat information", "Study materials", "Community resources"]
      }
    ]
  },
  {
    category: "Study Materials",
    resources: [
      {
        name: "Buddhist Studies",
        url: "https://www.buddhiststudies.org",
        description: "Academic resources for Buddhist studies",
        features: ["Scholarly articles", "Research papers", "Bibliographies", "Academic links"]
      },
      {
        name: "Digital Dictionary of Buddhism",
        url: "https://www.buddhism-dict.net",
        description: "Comprehensive Buddhist terminology database",
        features: ["Term definitions", "Cross-references", "Multiple languages", "Academic quality"]
      }
    ]
  }
]

export default function BuddhistBeginnerPage({ params }: BuddhistBeginnerPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="mb-6">
        <Button asChild variant="ghost">
          <Link href={`/${params.locale}/studies/buddhist`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Buddhist Studies
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">Buddhist Studies</Badge>
        <h1 className="text-4xl font-bold mb-4">Buddhist Studies for Beginners</h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-6">
          Welcome to your journey into Buddhist studies. This comprehensive guide will introduce you to the fundamental 
          teachings of Buddhism, including the Four Noble Truths, Eightfold Path, meditation practices, and Buddhist philosophy. 
          Start your exploration with free resources and structured learning paths.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Badge variant="outline">
            <Target className="mr-1 h-3 w-3" />
            Four Noble Truths
          </Badge>
          <Badge variant="outline">
            <Heart className="mr-1 h-3 w-3" />
            Eightfold Path
          </Badge>
          <Badge variant="outline">
            <Brain className="mr-1 h-3 w-3" />
            Meditation
          </Badge>
          <Badge variant="outline">
            <BookOpen className="mr-1 h-3 w-3" />
            Free Resources
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="four-noble-truths" className="space-y-8">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
          {beginnerTopics.map((topic) => (
            <TabsTrigger key={topic.id} value={topic.id} className="text-sm">
              {topic.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {beginnerTopics.map((topic) => (
          <TabsContent key={topic.id} value={topic.id} className="space-y-8">
            {/* Topic Overview */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <topic.icon className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-2xl">{topic.name}</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      {topic.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose dark:prose-invert max-w-none">
                  <h3>Overview</h3>
                  <p>{topic.content.overview}</p>
                </div>

                {/* Specific content based on topic */}
                {topic.id === "four-noble-truths" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">The Four Noble Truths</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {topic.content.truths.map((truth, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h4 className="font-semibold text-lg mb-2">{truth.name}</h4>
                          <p className="text-muted-foreground mb-2">{truth.description}</p>
                          <p className="text-sm">{truth.explanation}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Practice Suggestion</h4>
                      <p className="text-sm">{topic.content.practice}</p>
                    </div>
                  </div>
                )}

                {topic.id === "eightfold-path" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">The Eight Factors</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {topic.content.factors.map((factor, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h4 className="font-semibold text-lg mb-2">{factor.name}</h4>
                          <p className="text-muted-foreground mb-2">{factor.description}</p>
                          <p className="text-sm mb-2"><strong>Practice:</strong> {factor.practice}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Practice Suggestion</h4>
                      <p className="text-sm">{topic.content.practice}</p>
                    </div>
                  </div>
                )}

                {topic.id === "meditation" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Types of Buddhist Meditation</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {topic.content.types.map((type, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h4 className="font-semibold text-lg mb-2">{type.name}</h4>
                          <p className="text-muted-foreground mb-2">{type.description}</p>
                          <p className="text-sm mb-2"><strong>Practice:</strong> {type.practice}</p>
                          <p className="text-sm"><strong>Benefits:</strong> {type.benefits}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Getting Started</h4>
                      <p className="text-sm">{topic.content.practice}</p>
                    </div>
                  </div>
                )}

                {/* Resources */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Recommended Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {topic.resources.map((resource) => (
                      <Button key={resource.name} asChild variant="outline" className="w-full justify-start">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {resource.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <Separator className="my-12" />

      {/* Study Path */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Recommended Study Path</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow this structured path to develop a comprehensive understanding of Buddhist studies. 
            Each stage builds upon the previous one, providing a solid foundation for your practice.
          </p>
        </div>

        <div className="grid gap-6">
          {studyPath.map((stage, index) => (
            <Card key={stage.stage}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">Stage {index + 1}: {stage.stage}</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      Duration: {stage.duration}
                    </CardDescription>
                  </div>
                  <Badge variant="outline">{stage.stage}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Topics</h4>
                    <ul className="space-y-2">
                      {stage.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Recommended Books</h4>
                    <ul className="space-y-2">
                      {stage.resources.map((resource) => (
                        <li key={resource} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {resource}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      {/* Online Resources */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Free Online Resources</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive Buddhist study materials, texts, and practice resources completely free online. 
            These authoritative sources provide everything you need for your Buddhist studies journey.
          </p>
        </div>

        <div className="grid gap-8">
          {onlineResources.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.resources.map((resource) => (
                    <div key={resource.name} className="border rounded-lg p-6 space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{resource.name}</h4>
                        <p className="text-muted-foreground mb-3">{resource.description}</p>
                        <Button asChild variant="outline" className="w-full">
                          <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Visit {resource.name}
                          </a>
                        </Button>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Key Features:</h5>
                        <ul className="space-y-1 text-sm">
                          {resource.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      {/* Next Steps */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Continue Your Studies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href={`/${params.locale}/studies/buddhist/philosophy`}>
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Buddhist Philosophy
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href={`/${params.locale}/studies/buddhist/meditation`}>
                  <Search className="mr-2 h-4 w-4" />
                  Meditation Practices
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href={`/${params.locale}/studies/buddhist/history`}>
                  <History className="mr-2 h-4 w-4" />
                  Buddhist History
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href={`/${params.locale}/sacred-texts/buddhist`}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Buddhist Texts
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Free Text Access</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start">
                <a href="https://suttacentral.net" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2 h-4 w-4" />
                  SuttaCentral - Complete Pali Canon
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <a href="https://www.accesstoinsight.org" target="_blank" rel="noopener noreferrer">
                  <ScrollText className="mr-2 h-4 w-4" />
                  Access to Insight - Theravada Library
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <a href="https://www.buddhanet.net" target="_blank" rel="noopener noreferrer">
                  <Library className="mr-2 h-4 w-4" />
                  BuddhaNet - Buddhist Education
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <a href="https://dharmaseed.org" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Dharma Seed - Audio Teachings
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Begin Your Buddhist Journey</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
          You now have a solid foundation to begin your Buddhist studies. Start with the Four Noble Truths, 
          practice basic meditation, and gradually explore the rich tradition of Buddhist teachings. Remember 
          that understanding comes through both study and practice - take your time and be patient with yourself.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg">
            <a href="https://suttacentral.net" target="_blank" rel="noopener noreferrer">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Reading Texts
            </a>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href={`/${params.locale}/studies/buddhist/philosophy`}>
              <Lightbulb className="mr-2 h-5 w-5" />
              Explore Philosophy
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href={`/${params.locale}/studies/buddhist`}>
              <Globe className="mr-2 h-5 w-5" />
              All Buddhist Studies
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 