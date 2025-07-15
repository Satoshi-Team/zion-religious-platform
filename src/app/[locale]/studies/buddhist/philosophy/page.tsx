import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ScrollText, Library, ArrowLeft, ExternalLink, Lightbulb, History, Users, Globe, Search, Music, Calendar, MapPin, Clock, Target, Heart, Brain, Eye } from "lucide-react"
import Link from "next/link"

interface BuddhistPhilosophyPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Buddhist Philosophy | Complete Guide to Buddhist Thought",
  description: "Explore the profound philosophy of Buddhism including the Four Noble Truths, Eightfold Path, dependent origination, and Buddhist metaphysics with free resources.",
  keywords: [
    "Buddhist philosophy",
    "Four Noble Truths",
    "Eightfold Path",
    "dependent origination",
    "Buddhist metaphysics",
    "emptiness",
    "non-self",
    "karma",
    "rebirth",
    "nirvana"
  ],
  openGraph: {
    title: "Buddhist Philosophy - Complete Guide to Buddhist Thought",
    description: "Explore the profound philosophy of Buddhism with comprehensive resources.",
    images: [
      {
        url: "/images/buddhist-philosophy-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Buddhist Philosophy"
      }
    ]
  }
}

const philosophicalTopics = [
  {
    id: "four-noble-truths",
    name: "The Four Noble Truths",
    description: "The foundation of Buddhist philosophy and the path to understanding suffering and liberation.",
    icon: Target,
    content: {
      overview: "The Four Noble Truths are the Buddha's first teaching and form the foundation of all Buddhist philosophy. They provide a systematic framework for understanding the nature of suffering and the path to liberation.",
      truths: [
        {
          name: "The Truth of Suffering (Dukkha)",
          description: "Understanding that suffering exists in various forms",
          explanation: "Suffering includes physical pain, mental anguish, and the subtle dissatisfaction that pervades ordinary life. Even pleasant experiences can lead to suffering when they end. The Buddha identified three types of suffering: suffering of pain, suffering of change, and suffering of conditioned existence.",
          philosophicalImplications: "This truth challenges the common belief that lasting happiness can be found in worldly pleasures and conditions. It encourages us to examine the nature of our experience more deeply."
        },
        {
          name: "The Truth of the Cause of Suffering (Samudaya)",
          description: "Identifying the root causes of suffering",
          explanation: "The primary cause of suffering is craving (tanha) - the desire for things to be different than they are. This includes craving for sensual pleasures, for becoming, and for non-becoming. The Buddha taught that craving arises from ignorance about the true nature of reality.",
          philosophicalImplications: "This truth introduces the concept of causality in mental states and shows how our desires and attachments create suffering. It provides a framework for understanding the psychology of suffering."
        },
        {
          name: "The Truth of the Cessation of Suffering (Nirodha)",
          description: "The possibility of ending suffering",
          explanation: "Suffering can be overcome by eliminating craving and attachment. This leads to nibbana (nirvana), a state of peace and freedom from suffering. Nibbana is not annihilation but the cessation of the causes of suffering.",
          philosophicalImplications: "This truth offers hope and shows that liberation is possible. It introduces the concept of nibbana as the ultimate goal of Buddhist practice."
        },
        {
          name: "The Truth of the Path to Cessation (Magga)",
          description: "The way to end suffering",
          explanation: "The Eightfold Path provides the practical method for ending suffering and achieving liberation. It includes ethical conduct, mental discipline, and wisdom development.",
          philosophicalImplications: "This truth shows that liberation requires systematic practice and development. It provides a practical framework for spiritual development."
        }
      ],
      practice: "Study and reflect on these truths in your daily life. Notice when you experience suffering and investigate its causes. Practice letting go of attachments and developing contentment."
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
    id: "dependent-origination",
    name: "Dependent Origination",
    description: "The Buddhist understanding of causality and the interconnected nature of all phenomena.",
    icon: Brain,
    content: {
      overview: "Dependent origination (paticca samuppada) is one of the most profound teachings in Buddhism. It explains how all phenomena arise in dependence upon conditions and how suffering can be brought to an end by removing its causes.",
      links: [
        {
          name: "Ignorance → Mental Formations",
          description: "From ignorance arise mental formations",
          explanation: "Ignorance (avijja) of the true nature of reality gives rise to mental formations (sankhara) - volitional actions of body, speech, and mind. These formations are conditioned by our deluded understanding."
        },
        {
          name: "Mental Formations → Consciousness",
          description: "From mental formations arises consciousness",
          explanation: "Mental formations condition consciousness (vinnana) - the awareness that arises in relation to sense objects. This consciousness is not a permanent self but a conditioned process."
        },
        {
          name: "Consciousness → Name and Form",
          description: "From consciousness arise name and form",
          explanation: "Consciousness conditions name and form (nama-rupa) - the mental and physical aspects of existence. Name refers to mental factors, form to the physical body."
        },
        {
          name: "Name and Form → Six Sense Bases",
          description: "From name and form arise the six sense bases",
          explanation: "Name and form condition the six sense bases (salayatana) - the eye, ear, nose, tongue, body, and mind. These are the doors through which we experience the world."
        },
        {
          name: "Six Sense Bases → Contact",
          description: "From the six sense bases arises contact",
          explanation: "The six sense bases condition contact (phassa) - the meeting of sense organ, sense object, and consciousness. This is the moment of sensory experience."
        },
        {
          name: "Contact → Feeling",
          description: "From contact arises feeling",
          explanation: "Contact conditions feeling (vedana) - the pleasant, unpleasant, or neutral tone of experience. Feelings arise automatically based on our conditioning."
        },
        {
          name: "Feeling → Craving",
          description: "From feeling arises craving",
          explanation: "Feeling conditions craving (tanha) - the desire for pleasant experiences and the desire to avoid unpleasant ones. This is where suffering begins to arise."
        },
        {
          name: "Craving → Clinging",
          description: "From craving arises clinging",
          explanation: "Craving conditions clinging (upadana) - the grasping and attachment to experiences, views, and sense of self. This solidifies our suffering."
        },
        {
          name: "Clinging → Becoming",
          description: "From clinging arises becoming",
          explanation: "Clinging conditions becoming (bhava) - the process of taking birth and developing a sense of identity. This perpetuates the cycle of existence."
        },
        {
          name: "Becoming → Birth",
          description: "From becoming arises birth",
          explanation: "Becoming conditions birth (jati) - the arising of new existence. This includes both physical birth and the birth of new mental states."
        },
        {
          name: "Birth → Aging and Death",
          description: "From birth arise aging and death",
          explanation: "Birth conditions aging and death (jara-marana) - the inevitable decay and cessation of all conditioned phenomena. This includes sorrow, lamentation, pain, grief, and despair."
        }
      ],
      practice: "Contemplate the dependent nature of all phenomena. Notice how your experiences arise in dependence upon conditions. Practice seeing the emptiness of inherent existence in all things."
    },
    resources: [
      {
        name: "Access to Insight",
        url: "https://www.accesstoinsight.org/lib/authors/bodhi/wheel277.html",
        description: "Comprehensive guide to dependent origination"
      },
      {
        name: "SuttaCentral",
        url: "https://suttacentral.net/sn12.1",
        description: "The Buddha's teaching on dependent origination"
      }
    ]
  },
  {
    id: "emptiness",
    name: "Emptiness (Sunyata)",
    description: "The Mahayana understanding of the ultimate nature of reality and the absence of inherent existence.",
    icon: Eye,
    content: {
      overview: "Emptiness (sunyata) is a central concept in Mahayana Buddhism that refers to the absence of inherent existence in all phenomena. It does not mean that things don't exist, but that they exist only in dependence upon other factors.",
      aspects: [
        {
          name: "Emptiness of Self",
          description: "The absence of inherent existence in the person",
          explanation: "The self is not a permanent, unchanging entity but a collection of constantly changing physical and mental processes. Understanding this emptiness of self reduces attachment and suffering.",
          philosophicalImplications: "This challenges the common belief in a permanent self and shows how our sense of identity is constructed and impermanent."
        },
        {
          name: "Emptiness of Phenomena",
          description: "The absence of inherent existence in all things",
          explanation: "All phenomena - objects, thoughts, emotions - lack inherent existence. They arise in dependence upon causes and conditions and exist only conventionally, not ultimately.",
          philosophicalImplications: "This shows that reality is not as solid and independent as it appears. All things are interconnected and dependent."
        },
        {
          name: "Emptiness of Emptiness",
          description: "The emptiness of the concept of emptiness itself",
          explanation: "Even the concept of emptiness is empty of inherent existence. This prevents us from clinging to emptiness as a view or position.",
          philosophicalImplications: "This prevents the reification of emptiness and shows the non-dual nature of ultimate reality."
        },
        {
          name: "Two Truths",
          description: "Conventional and ultimate truth",
          explanation: "Buddhism recognizes two levels of truth: conventional truth (how things appear) and ultimate truth (how things actually are). Both are necessary for understanding reality.",
          philosophicalImplications: "This provides a framework for understanding how conventional reality and ultimate reality relate to each other."
        }
      ],
      practice: "Meditate on the emptiness of phenomena. Contemplate how all things arise in dependence upon conditions. Practice seeing the conventional nature of reality while understanding its ultimate emptiness."
    },
    resources: [
      {
        name: "Access to Insight",
        url: "https://www.accesstoinsight.org/lib/authors/bodhi/waytoend.html",
        description: "Understanding emptiness in Theravada context"
      },
      {
        name: "BuddhaNet",
        url: "https://www.buddhanet.net/e-learning/emptiness.htm",
        description: "Introduction to emptiness teachings"
      }
    ]
  }
]

const philosophicalSchools = [
  {
    name: "Theravada",
    description: "The oldest form of Buddhism, emphasizing individual liberation through the Eightfold Path",
    keyConcepts: [
      "Focus on individual liberation (arahantship)",
      "Emphasis on the Pali Canon",
      "Practice of vipassana meditation",
      "Understanding of nibbana as cessation"
    ],
    texts: [
      "Pali Canon (Tipitaka)",
      "Visuddhimagga by Buddhaghosa",
      "Abhidhamma texts"
    ]
  },
  {
    name: "Mahayana",
    description: "The Great Vehicle, emphasizing compassion and the bodhisattva path",
    keyConcepts: [
      "Bodhisattva ideal and compassion",
      "Emptiness (sunyata) teachings",
      "Skillful means (upaya)",
      "Buddha nature (tathagatagarbha)"
    ],
    texts: [
      "Prajnaparamita Sutras",
      "Lotus Sutra",
      "Heart Sutra",
      "Diamond Sutra"
    ]
  },
  {
    name: "Vajrayana",
    description: "The Diamond Vehicle, emphasizing esoteric practices and rapid enlightenment",
    keyConcepts: [
      "Tantric practices and rituals",
      "Guru devotion",
      "Deity yoga and visualization",
      "Direct recognition of mind nature"
    ],
    texts: [
      "Tibetan Book of the Dead",
      "Various tantras",
      "Mahamudra and Dzogchen texts"
    ]
  }
]

const onlineResources = [
  {
    category: "Philosophical Texts",
    resources: [
      {
        name: "SuttaCentral",
        url: "https://suttacentral.net",
        description: "Complete Pali Canon with philosophical discourses",
        features: ["Search functionality", "Cross-references", "Multiple translations", "Study guides"]
      },
      {
        name: "Access to Insight",
        url: "https://www.accesstoinsight.org",
        description: "Theravada philosophical texts and commentaries",
        features: ["Sutta translations", "Commentaries", "Study materials", "Philosophical essays"]
      },
      {
        name: "BuddhaNet",
        url: "https://www.buddhanet.net",
        description: "Comprehensive Buddhist philosophy resources",
        features: ["Educational articles", "Study guides", "Philosophical discussions", "Multimedia content"]
      }
    ]
  },
  {
    category: "Academic Resources",
    resources: [
      {
        name: "Buddhist Studies",
        url: "https://www.buddhiststudies.org",
        description: "Academic resources for Buddhist philosophy",
        features: ["Scholarly articles", "Research papers", "Bibliographies", "Academic links"]
      },
      {
        name: "Digital Dictionary of Buddhism",
        url: "https://www.buddhism-dict.net",
        description: "Comprehensive Buddhist terminology database",
        features: ["Term definitions", "Cross-references", "Multiple languages", "Academic quality"]
      }
    ]
  },
  {
    category: "Study Materials",
    resources: [
      {
        name: "Dharma Seed",
        url: "https://dharmaseed.org",
        description: "Audio teachings on Buddhist philosophy",
        features: ["Philosophy lectures", "Meditation instructions", "Dharma talks", "Multiple traditions"]
      },
      {
        name: "Insight Meditation Society",
        url: "https://www.dharma.org",
        description: "Theravada philosophy and practice",
        features: ["Philosophy courses", "Meditation guides", "Study materials", "Community resources"]
      }
    ]
  }
]

export default function BuddhistPhilosophyPage({ params }: BuddhistPhilosophyPageProps) {
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
        <h1 className="text-4xl font-bold mb-4">Buddhist Philosophy</h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-6">
          Explore the profound philosophical insights of Buddhism, from the foundational Four Noble Truths 
          to the advanced concepts of dependent origination and emptiness. Discover how Buddhist philosophy 
          provides a comprehensive understanding of reality and the path to liberation.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Badge variant="outline">
            <Target className="mr-1 h-3 w-3" />
            Four Noble Truths
          </Badge>
          <Badge variant="outline">
            <Brain className="mr-1 h-3 w-3" />
            Dependent Origination
          </Badge>
          <Badge variant="outline">
            <Eye className="mr-1 h-3 w-3" />
            Emptiness
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
          {philosophicalTopics.map((topic) => (
            <TabsTrigger key={topic.id} value={topic.id} className="text-sm">
              {topic.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {philosophicalTopics.map((topic) => (
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
                          <p className="text-sm mb-2">{truth.explanation}</p>
                          <p className="text-sm"><strong>Philosophical Implications:</strong> {truth.philosophicalImplications}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Practice Suggestion</h4>
                      <p className="text-sm">{topic.content.practice}</p>
                    </div>
                  </div>
                )}

                {topic.id === "dependent-origination" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">The Twelve Links</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {topic.content.links.map((link, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h4 className="font-semibold text-lg mb-2">{link.name}</h4>
                          <p className="text-muted-foreground mb-2">{link.description}</p>
                          <p className="text-sm">{link.explanation}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Practice Suggestion</h4>
                      <p className="text-sm">{topic.content.practice}</p>
                    </div>
                  </div>
                )}

                {topic.id === "emptiness" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Aspects of Emptiness</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {topic.content.aspects.map((aspect, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h4 className="font-semibold text-lg mb-2">{aspect.name}</h4>
                          <p className="text-muted-foreground mb-2">{aspect.description}</p>
                          <p className="text-sm mb-2">{aspect.explanation}</p>
                          <p className="text-sm"><strong>Philosophical Implications:</strong> {aspect.philosophicalImplications}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Practice Suggestion</h4>
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

      {/* Philosophical Schools */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Buddhist Philosophical Schools</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Buddhism has developed into several major philosophical traditions, each with its own 
            emphasis and approach to understanding reality and achieving liberation.
          </p>
        </div>

        <div className="grid gap-6">
          {philosophicalSchools.map((school) => (
            <Card key={school.name}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{school.name}</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      {school.description}
                    </CardDescription>
                  </div>
                  <Badge variant="outline">{school.name}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Concepts</h4>
                    <ul className="space-y-2">
                      {school.keyConcepts.map((concept) => (
                        <li key={concept} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {concept}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Key Texts</h4>
                    <ul className="space-y-2">
                      {school.texts.map((text) => (
                        <li key={text} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {text}
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
            Access comprehensive Buddhist philosophy materials, texts, and study resources completely free online. 
            These authoritative sources provide everything you need for your philosophical studies.
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
                <Link href={`/${params.locale}/studies/buddhist/beginner`}>
                  <Users className="mr-2 h-4 w-4" />
                  Beginner's Guide
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
        <h2 className="text-2xl font-bold mb-4">Deepen Your Philosophical Understanding</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
          You now have a solid foundation in Buddhist philosophy. Continue your studies by exploring 
          the practical applications of these philosophical insights through meditation and daily practice. 
          Remember that true understanding comes through both study and direct experience.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg">
            <a href="https://suttacentral.net" target="_blank" rel="noopener noreferrer">
              <BookOpen className="mr-2 h-5 w-5" />
              Read Philosophical Texts
            </a>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href={`/${params.locale}/studies/buddhist/meditation`}>
              <Search className="mr-2 h-5 w-5" />
              Practice Meditation
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