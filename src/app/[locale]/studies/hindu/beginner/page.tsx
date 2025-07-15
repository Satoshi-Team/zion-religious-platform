import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ScrollText, Library, ArrowLeft, ExternalLink, Lightbulb, History, Users, Globe, Search, Music, Calendar, MapPin, Clock, Target, Heart, Brain, Om } from "lucide-react"
import Link from "next/link"

interface HinduBeginnerPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Hindu Studies for Beginners | Complete Guide to Hinduism",
  description: "Start your journey into Hindu studies with this comprehensive beginner's guide. Learn about dharma, karma, yoga, and Hindu philosophy with free resources from Sacred-texts.com and Hinduism Today.",
  keywords: [
    "Hindu studies",
    "Hinduism for beginners",
    "Dharma",
    "Karma",
    "Yoga",
    "Hindu philosophy",
    "Vedanta",
    "Hindu practices",
    "Hindu texts",
    "Hindu teachings",
    "Hindu history"
  ],
  openGraph: {
    title: "Hindu Studies for Beginners - Complete Guide to Hinduism",
    description: "Start your journey into Hindu studies with this comprehensive beginner's guide.",
    images: [
      {
        url: "/images/hindu-beginner-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Hindu Studies for Beginners"
      }
    ]
  }
}

const beginnerTopics = [
  {
    id: "dharma",
    name: "Dharma - The Foundation",
    description: "Understanding dharma, the cosmic law and moral order that sustains the universe and guides human conduct.",
    icon: Target,
    content: {
      overview: "Dharma is one of the most fundamental concepts in Hinduism, representing the cosmic law, moral order, and righteous way of living. It's not just a set of rules but a comprehensive framework for understanding one's purpose and responsibilities in life.",
      aspects: [
        {
          name: "Universal Dharma (Rita)",
          description: "The cosmic order that maintains harmony in the universe",
          explanation: "This is the natural law that governs the functioning of the cosmos, including the cycles of nature, the movement of celestial bodies, and the balance of all elements."
        },
        {
          name: "Social Dharma (Varna Dharma)",
          description: "Duties and responsibilities based on one's role in society",
          explanation: "Traditionally, this refers to the duties associated with different social classes (varnas) and stages of life (ashramas), though modern interpretations focus on individual talents and contributions."
        },
        {
          name: "Personal Dharma (Svadharma)",
          description: "Individual duty based on one's nature and circumstances",
          explanation: "This is the unique path that each person must follow based on their inherent nature (svabhava), talents, and life situation. It's about finding and fulfilling one's true calling."
        },
        {
          name: "Moral Dharma (Sadharana Dharma)",
          description: "Universal ethical principles for all human beings",
          explanation: "These are the fundamental virtues that apply to everyone: truthfulness, non-violence, compassion, generosity, patience, and self-control."
        }
      ],
      practice: "Begin by reflecting on your own nature and talents. What are you naturally good at? What brings you joy and fulfillment? Consider how you can use these gifts to serve others and contribute to the world. Practice the universal virtues in your daily interactions."
    },
    resources: [
      {
        name: "Sacred-texts.com",
        url: "https://www.sacred-texts.com/hin/db/",
        description: "Dharma texts and commentaries"
      },
      {
        name: "Hinduism Today",
        url: "https://www.hinduismtoday.com/modules/smartsection/item.php?itemid=5078",
        description: "Understanding dharma in modern context"
      }
    ]
  },
  {
    id: "karma",
    name: "Karma and Rebirth",
    description: "The law of action and its consequences, and the cycle of birth, death, and rebirth.",
    icon: Heart,
    content: {
      overview: "Karma is the universal law of cause and effect that governs all actions and their consequences. It's not just about punishment and reward, but about understanding how our actions shape our character and future experiences.",
      concepts: [
        {
          name: "The Law of Karma",
          description: "Every action has consequences that affect our future",
          explanation: "Karma means 'action' and refers to the principle that every intentional action, whether physical, verbal, or mental, creates an impression that will bear fruit in the future."
        },
        {
          name: "Types of Karma",
          description: "Different categories of actions and their effects",
          explanation: "Sanchita karma (accumulated from past lives), Prarabdha karma (currently bearing fruit), and Kriyamana karma (actions being created now)."
        },
        {
          name: "Karma and Character",
          description: "How actions shape our personality and tendencies",
          explanation: "Repeated actions create habits and tendencies (vasanas) that become part of our character. Good actions develop positive qualities, while harmful actions strengthen negative tendencies."
        },
        {
          name: "Liberation from Karma",
          description: "The path to freedom from the cycle of rebirth",
          explanation: "Through selfless action (karma yoga), knowledge (jnana yoga), and devotion (bhakti yoga), one can transcend the effects of karma and achieve moksha (liberation)."
        }
      ],
      practice: "Practice karma yoga by performing your duties selflessly, without attachment to results. Focus on the quality of your actions rather than their outcomes. Cultivate awareness of your thoughts, words, and deeds, and their impact on others."
    },
    resources: [
      {
        name: "Sacred-texts.com",
        url: "https://www.sacred-texts.com/hin/bg/",
        description: "Bhagavad Gita on karma yoga"
      },
      {
        name: "Vedanta.org",
        url: "https://www.vedanta.org/teachings/karma-and-reincarnation",
        description: "Vedantic perspective on karma"
      }
    ]
  },
  {
    id: "yoga",
    name: "The Paths of Yoga",
    description: "Different approaches to spiritual development and self-realization.",
    icon: Brain,
    content: {
      overview: "Yoga means 'union' and refers to various paths for achieving union with the divine and realizing one's true nature. Hinduism recognizes multiple paths to accommodate different temperaments and inclinations.",
      paths: [
        {
          name: "Karma Yoga (Path of Action)",
          description: "Selfless service and action without attachment",
          practice: "Perform your duties with dedication and skill, but without attachment to results. Serve others selflessly and see your work as an offering to the divine.",
          benefits: "Purifies the mind, develops selflessness, reduces ego, and prepares the mind for higher knowledge."
        },
        {
          name: "Bhakti Yoga (Path of Devotion)",
          description: "Loving devotion to a personal deity",
          practice: "Cultivate love and devotion through prayer, worship, chanting, and meditation on the divine. Choose a form of God that appeals to your heart.",
          benefits: "Purifies emotions, develops love and compassion, provides emotional support, and leads to divine grace."
        },
        {
          name: "Jnana Yoga (Path of Knowledge)",
          description: "Inquiry and discrimination to realize the truth",
          practice: "Study sacred texts, reflect on their meaning, and practice discrimination between the real and unreal. Question everything until you realize the truth.",
          benefits: "Develops wisdom, removes ignorance, leads to direct realization, and provides intellectual satisfaction."
        },
        {
          name: "Raja Yoga (Path of Meditation)",
          description: "Systematic meditation and mind control",
          practice: "Practice meditation, breath control, and concentration techniques to still the mind and experience higher states of consciousness.",
          benefits: "Calms the mind, develops concentration, provides inner peace, and leads to spiritual experiences."
        }
      ],
      practice: "Start with the path that naturally appeals to you, but don't limit yourself to one approach. All paths complement each other and can be practiced together. Begin with simple practices and gradually deepen your commitment."
    },
    resources: [
      {
        name: "Sacred-texts.com",
        url: "https://www.sacred-texts.com/hin/yoga/",
        description: "Yoga texts and teachings"
      },
      {
        name: "Vedanta.org",
        url: "https://www.vedanta.org/teachings/the-four-yogas",
        description: "Comprehensive guide to the four yogas"
      }
    ]
  }
]

const studyPath = [
  {
    stage: "Foundation",
    duration: "1-3 months",
    topics: [
      "Understanding dharma and its applications",
      "Learning about karma and rebirth",
      "Basic yoga and meditation practices",
      "Hindu ethics and values"
    ],
    resources: [
      "The Bhagavad Gita (Eknath Easwaran translation)",
      "What is Hinduism? by Himalayan Academy",
      "The Upanishads (Eknath Easwaran translation)"
    ]
  },
  {
    stage: "Deepening",
    duration: "3-6 months",
    topics: [
      "Advanced yoga practices",
      "Study of Hindu texts and philosophy",
      "Understanding different Hindu traditions",
      "Developing devotion and spiritual practices"
    ],
    resources: [
      "The Upanishads (various translations)",
      "Autobiography of a Yogi by Paramahansa Yogananda",
      "The Complete Works of Swami Vivekananda"
    ]
  },
  {
    stage: "Integration",
    duration: "6-12 months",
    topics: [
      "Applying teachings to daily life",
      "Community practice and temple worship",
      "Advanced philosophical concepts",
      "Personal spiritual discipline"
    ],
    resources: [
      "The Vedanta Sutras with commentary",
      "Hinduism: A Very Short Introduction by Kim Knott",
      "The Yoga Sutras of Patanjali"
    ]
  }
]

const onlineResources = [
  {
    category: "Free Text Access",
    resources: [
      {
        name: "Sacred-texts.com",
        url: "https://www.sacred-texts.com/hin/",
        description: "Comprehensive library of Hindu texts",
        features: ["Complete Vedic texts", "Upanishads", "Bhagavad Gita", "Puranas", "Multiple translations"]
      },
      {
        name: "Vedabase",
        url: "https://vedabase.io",
        description: "Vedic texts with multiple translations",
        features: ["Sanskrit text", "Multiple translations", "Commentaries", "Search tools"]
      },
      {
        name: "Wisdom Library",
        url: "https://www.wisdomlib.org",
        description: "Digital library of Hindu and Buddhist texts",
        features: ["Searchable database", "Multiple translations", "Cross-references", "Study tools"]
      }
    ]
  },
  {
    category: "Educational Resources",
    resources: [
      {
        name: "Hinduism Today",
        url: "https://www.hinduismtoday.com",
        description: "Comprehensive Hindu education and information",
        features: ["Educational articles", "Study guides", "Cultural information", "Directory of temples"]
      },
      {
        name: "Vedanta.org",
        url: "https://www.vedanta.org",
        description: "Vedantic philosophy and study resources",
        features: ["Vedantic texts", "Study courses", "Audio lectures", "Traditional commentaries"]
      }
    ]
  },
  {
    category: "Practice Resources",
    resources: [
      {
        name: "Bhagavad-gita.org",
        url: "https://bhagavad-gita.org",
        description: "Comprehensive Gita study and practice",
        features: ["Multiple translations", "Audio recitations", "Study guides", "Practice instructions"]
      },
      {
        name: "Vedanta Society",
        url: "https://vedantasociety.net",
        description: "Vedantic study and practice resources",
        features: ["Study materials", "Meditation guides", "Community resources", "Traditional teachings"]
      }
    ]
  }
]

export default function HinduBeginnerPage({ params }: HinduBeginnerPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="mb-6">
        <Button asChild variant="ghost">
          <Link href={`/${params.locale}/studies/hindu`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Hindu Studies
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">Hindu Studies</Badge>
        <h1 className="text-4xl font-bold mb-4">Hindu Studies for Beginners</h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-6">
          Welcome to your journey into Hindu studies. This comprehensive guide will introduce you to the fundamental 
          concepts of Hinduism, including dharma, karma, yoga, and Hindu philosophy. Discover the rich spiritual 
          tradition that has guided millions for thousands of years.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Badge variant="outline">
            <Target className="mr-1 h-3 w-3" />
            Dharma
          </Badge>
          <Badge variant="outline">
            <Heart className="mr-1 h-3 w-3" />
            Karma
          </Badge>
          <Badge variant="outline">
            <Brain className="mr-1 h-3 w-3" />
            Yoga
          </Badge>
          <Badge variant="outline">
            <Om className="mr-1 h-3 w-3" />
            Free Resources
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="dharma" className="space-y-8">
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
                {topic.id === "dharma" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Aspects of Dharma</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {topic.content.aspects.map((aspect, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h4 className="font-semibold text-lg mb-2">{aspect.name}</h4>
                          <p className="text-muted-foreground mb-2">{aspect.description}</p>
                          <p className="text-sm">{aspect.explanation}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Practice Suggestion</h4>
                      <p className="text-sm">{topic.content.practice}</p>
                    </div>
                  </div>
                )}

                {topic.id === "karma" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Key Concepts</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {topic.content.concepts.map((concept, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h4 className="font-semibold text-lg mb-2">{concept.name}</h4>
                          <p className="text-muted-foreground mb-2">{concept.description}</p>
                          <p className="text-sm">{concept.explanation}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Practice Suggestion</h4>
                      <p className="text-sm">{topic.content.practice}</p>
                    </div>
                  </div>
                )}

                {topic.id === "yoga" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">The Four Paths</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {topic.content.paths.map((path, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h4 className="font-semibold text-lg mb-2">{path.name}</h4>
                          <p className="text-muted-foreground mb-2">{path.description}</p>
                          <p className="text-sm mb-2"><strong>Practice:</strong> {path.practice}</p>
                          <p className="text-sm"><strong>Benefits:</strong> {path.benefits}</p>
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
            Follow this structured path to develop a comprehensive understanding of Hindu studies. 
            Each stage builds upon the previous one, providing a solid foundation for your spiritual journey.
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
            Access comprehensive Hindu study materials, texts, and practice resources completely free online. 
            These authoritative sources provide everything you need for your Hindu studies journey.
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
                <Link href={`/${params.locale}/studies/hindu/philosophy`}>
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Hindu Philosophy
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href={`/${params.locale}/studies/hindu/yoga`}>
                  <Search className="mr-2 h-4 w-4" />
                  Yoga & Meditation
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href={`/${params.locale}/studies/hindu/history`}>
                  <History className="mr-2 h-4 w-4" />
                  Hindu History
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href={`/${params.locale}/sacred-texts/hindu`}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Hindu Texts
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
                <a href="https://www.sacred-texts.com/hin/" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Sacred-texts.com - Complete Library
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <a href="https://vedabase.io" target="_blank" rel="noopener noreferrer">
                  <ScrollText className="mr-2 h-4 w-4" />
                  Vedabase - Vedic Texts
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <a href="https://www.wisdomlib.org" target="_blank" rel="noopener noreferrer">
                  <Library className="mr-2 h-4 w-4" />
                  Wisdom Library - Hindu Texts
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <a href="https://www.hinduismtoday.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Hinduism Today - Education
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Begin Your Hindu Journey</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
          You now have a solid foundation to begin your Hindu studies. Start with understanding dharma, 
          practice karma yoga in your daily life, and explore the path of yoga that resonates with you. 
          Remember that Hinduism is a living tradition that continues to evolve and adapt to modern times.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg">
            <a href="https://www.sacred-texts.com/hin/" target="_blank" rel="noopener noreferrer">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Reading Texts
            </a>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href={`/${params.locale}/studies/hindu/philosophy`}>
              <Lightbulb className="mr-2 h-5 w-5" />
              Explore Philosophy
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href={`/${params.locale}/studies/hindu`}>
              <Globe className="mr-2 h-5 w-5" />
              All Hindu Studies
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 