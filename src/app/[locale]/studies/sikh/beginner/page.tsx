import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ScrollText, Library, ArrowLeft, ExternalLink, Lightbulb, History, Users, Globe, Search, Music, Calendar, MapPin, Clock, Target, Heart, Brain, Shield } from "lucide-react"
import Link from "next/link"

interface SikhBeginnerPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Sikh Studies for Beginners | Complete Guide to Sikhism",
  description: "Start your journey into Sikh studies with this comprehensive beginner's guide. Learn about the Gurus, Sikh philosophy, practices, and the path of devotion with free resources from SriGranth.org and SikhNet.",
  keywords: [
    "Sikh studies",
    "Sikhism for beginners",
    "Sikh Gurus",
    "Guru Granth Sahib",
    "Sikh philosophy",
    "Sikh practices",
    "Gurbani",
    "Sikh teachings",
    "Sikh history",
    "Sikh values"
  ],
  openGraph: {
    title: "Sikh Studies for Beginners - Complete Guide to Sikhism",
    description: "Start your journey into Sikh studies with this comprehensive beginner's guide.",
    images: [
      {
        url: "/images/sikh-beginner-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sikh Studies for Beginners"
      }
    ]
  }
}

const beginnerTopics = [
  {
    id: "gurus",
    name: "The Sikh Gurus",
    description: "Understanding the ten Sikh Gurus and their teachings that form the foundation of Sikhism.",
    icon: Target,
    content: {
      overview: "Sikhism was founded by Guru Nanak Dev Ji in the 15th century and developed through the teachings of ten successive Gurus. Each Guru contributed to the spiritual and social development of the Sikh community, culminating in the establishment of the Guru Granth Sahib as the eternal Guru.",
      gurus: [
        {
          name: "Guru Nanak Dev Ji (1469-1539)",
          description: "The founder of Sikhism",
          teachings: "Emphasized the oneness of God, equality of all human beings, and the importance of honest living and service to humanity. Taught that God is beyond religious labels and can be realized through devotion and righteous living.",
          contributions: "Established the basic principles of Sikhism, composed the foundational hymns, and set up the first Sikh community."
        },
        {
          name: "Guru Angad Dev Ji (1504-1552)",
          description: "The second Guru",
          teachings: "Developed the Gurmukhi script and emphasized physical fitness and education. Continued Guru Nanak's teachings and organized the Sikh community.",
          contributions: "Standardized the Gurmukhi script, collected Guru Nanak's hymns, and established the langar (community kitchen) system."
        },
        {
          name: "Guru Amar Das Ji (1479-1574)",
          description: "The third Guru",
          teachings: "Emphasized the equality of women, abolished the practice of purdah (veiling), and established the manji system for spreading Sikh teachings.",
          contributions: "Composed many hymns, established the Anand Karaj (Sikh marriage ceremony), and promoted social reforms."
        },
        {
          name: "Guru Ram Das Ji (1534-1581)",
          description: "The fourth Guru",
          teachings: "Founded the city of Amritsar and emphasized the importance of community service and devotion. Composed the Lavan (wedding hymns).",
          contributions: "Established Amritsar as the spiritual center of Sikhism and composed many devotional hymns."
        },
        {
          name: "Guru Arjan Dev Ji (1563-1606)",
          description: "The fifth Guru",
          teachings: "Compiled the Adi Granth (first version of Guru Granth Sahib) and built the Golden Temple. Emphasized the importance of spiritual knowledge and devotion.",
          contributions: "Compiled the first Sikh scripture, built the Harmandir Sahib (Golden Temple), and established the tradition of Sikh martyrdom."
        },
        {
          name: "Guru Hargobind Ji (1595-1644)",
          description: "The sixth Guru",
          teachings: "Introduced the concept of miri-piri (temporal and spiritual authority) and established the Akal Takht. Emphasized the need for self-defense and justice.",
          contributions: "Built the Akal Takht, established the Sikh martial tradition, and wore two swords representing spiritual and temporal authority."
        },
        {
          name: "Guru Har Rai Ji (1630-1661)",
          description: "The seventh Guru",
          teachings: "Emphasized compassion and healing. Maintained the Sikh tradition while avoiding direct conflict with the Mughal authorities.",
          contributions: "Established medical clinics, continued the tradition of peaceful resistance, and preserved Sikh teachings."
        },
        {
          name: "Guru Har Krishan Ji (1656-1664)",
          description: "The eighth Guru",
          teachings: "Became Guru at the age of five and emphasized the power of divine grace and the importance of serving others.",
          contributions: "Demonstrated that spiritual wisdom is not dependent on age and emphasized selfless service."
        },
        {
          name: "Guru Tegh Bahadur Ji (1621-1675)",
          description: "The ninth Guru",
          teachings: "Sacrificed his life to protect the religious freedom of others. Emphasized the importance of standing up for justice and human rights.",
          contributions: "Became a martyr for religious freedom, protecting the right of Hindus to practice their religion, and composed many hymns."
        },
        {
          name: "Guru Gobind Singh Ji (1666-1708)",
          description: "The tenth Guru",
          teachings: "Established the Khalsa (the pure ones) and declared the Guru Granth Sahib as the eternal Guru. Emphasized the importance of courage, justice, and spiritual discipline.",
          contributions: "Created the Khalsa, compiled the final version of Guru Granth Sahib, and established the five Ks and the Sikh code of conduct."
        }
      ],
      practice: "Study the lives and teachings of the Gurus to understand the development of Sikh philosophy and values. Reflect on how their teachings can be applied in your daily life."
    },
    resources: [
      {
        name: "SikhNet",
        url: "https://www.sikhnet.com/gurus",
        description: "Comprehensive information about the Sikh Gurus"
      },
      {
        name: "SriGranth.org",
        url: "https://www.srigranth.org",
        description: "Guru Granth Sahib with translations and commentaries"
      }
    ]
  },
  {
    id: "philosophy",
    name: "Sikh Philosophy",
    description: "Core philosophical concepts and values that guide Sikh thought and practice.",
    icon: Heart,
    content: {
      overview: "Sikh philosophy is based on the teachings of the Gurus and emphasizes the oneness of God, equality of all human beings, honest living, and service to humanity. It provides a practical path for spiritual development and social responsibility.",
      concepts: [
        {
          name: "Ik Onkar (One God)",
          description: "The fundamental belief in one universal God",
          explanation: "Sikhism teaches that there is only one God who is the creator and sustainer of all existence. God is beyond religious labels and can be realized through devotion and righteous living."
        },
        {
          name: "Equality and Justice",
          description: "The principle of equality for all human beings",
          explanation: "Sikhism rejects all forms of discrimination based on caste, gender, religion, or social status. All human beings are equal in the eyes of God and deserve equal respect and opportunities."
        },
        {
          name: "Honest Living (Kirat Karna)",
          description: "Earning a living through honest means",
          explanation: "Sikhs are encouraged to work hard and earn their living through honest labor. This includes avoiding exploitation, corruption, and any work that harms others."
        },
        {
          name: "Sharing with Others (Vand Chakna)",
          description: "Sharing one's earnings and resources with others",
          explanation: "Sikhs are taught to share their wealth and resources with those in need. This is practiced through the langar (community kitchen) and other charitable activities."
        },
        {
          name: "Remembering God (Naam Japna)",
          description: "Constant remembrance of the divine",
          explanation: "Sikhs are encouraged to remember God at all times through prayer, meditation, and living according to divine will. This helps develop spiritual awareness and inner peace."
        },
        {
          name: "Selfless Service (Seva)",
          description: "Serving others without expectation of reward",
          explanation: "Service to humanity is considered a form of worship. Sikhs are encouraged to help others selflessly, especially those in need, regardless of their background."
        }
      ],
      practice: "Begin by practicing these values in your daily life. Treat everyone with respect and equality, work honestly, share with others, and develop a regular practice of prayer and meditation."
    },
    resources: [
      {
        name: "SikhNet",
        url: "https://www.sikhnet.com/philosophy",
        description: "Sikh philosophy and values"
      },
      {
        name: "Sikh Research Institute",
        url: "https://www.sikhri.org",
        description: "Academic study of Sikh philosophy"
      }
    ]
  },
  {
    id: "practices",
    name: "Sikh Practices",
    description: "Essential practices and rituals that form the foundation of Sikh spiritual life.",
    icon: Brain,
    content: {
      overview: "Sikh practices are designed to help individuals develop spiritual awareness, live according to Sikh values, and serve the community. These practices are practical and can be adapted to different life circumstances.",
      practices: [
        {
          name: "Daily Prayer (Nitnem)",
          description: "Regular daily prayers and meditation",
          practice: "Recite the five daily prayers: Japji Sahib (morning), Jaap Sahib, Tav-Prasad Savaiye, Chaupai Sahib, and Anand Sahib. These prayers help develop spiritual awareness and connection with God.",
          benefits: "Provides spiritual discipline, develops concentration, brings inner peace, and strengthens connection with the divine."
        },
        {
          name: "Kirtan (Sacred Music)",
          description: "Singing and listening to sacred hymns",
          practice: "Participate in or listen to kirtan (devotional singing) of Gurbani (Guru's words). This can be done individually or in community gatherings at the gurdwara.",
          benefits: "Purifies the mind, develops devotion, creates a peaceful atmosphere, and helps internalize spiritual teachings."
        },
        {
          name: "Langar (Community Kitchen)",
          description: "Sharing meals in community",
          practice: "Participate in langar by helping prepare, serve, or clean up after community meals. This practice emphasizes equality and service to others.",
          benefits: "Promotes equality, develops humility, builds community, and provides practical experience of selfless service."
        },
        {
          name: "Seva (Selfless Service)",
          description: "Volunteering and helping others",
          practice: "Engage in various forms of service such as helping at the gurdwara, participating in community projects, or helping individuals in need.",
          benefits: "Develops compassion, reduces ego, builds character, and creates positive impact in the community."
        },
        {
          name: "Simran (Meditation)",
          description: "Meditation on the divine name",
          practice: "Practice meditation by focusing on the divine name or reciting mantras like 'Waheguru' (Wonderful Lord). This can be done in quiet contemplation or during daily activities.",
          benefits: "Calms the mind, develops concentration, brings inner peace, and helps realize the divine presence."
        },
        {
          name: "Gurdwara Attendance",
          description: "Regular visits to the Sikh temple",
          practice: "Visit the gurdwara regularly to participate in congregational prayers, listen to kirtan, and engage in community activities.",
          benefits: "Provides spiritual community, offers guidance from granthis (scripture readers), and strengthens commitment to Sikh values."
        }
      ],
      practice: "Start with simple practices like daily prayer and meditation. Gradually incorporate other practices as you become more comfortable. Remember that consistency is more important than perfection."
    },
    resources: [
      {
        name: "SikhNet",
        url: "https://www.sikhnet.com/practices",
        description: "Sikh practices and rituals"
      },
      {
        name: "SikhNet Gurbani",
        url: "https://www.sikhnet.com/gurbani",
        description: "Daily Gurbani readings and kirtan"
      }
    ]
  }
]

const studyPath = [
  {
    stage: "Foundation",
    duration: "1-3 months",
    topics: [
      "Understanding the Sikh Gurus and their teachings",
      "Learning basic Sikh philosophy and values",
      "Introduction to daily prayers and practices",
      "Sikh history and community"
    ],
    resources: [
      "The Sikh Religion by Max Arthur Macauliffe",
      "Sikhism: A Very Short Introduction by Eleanor Nesbitt",
      "The Guru Granth Sahib (various translations)"
    ]
  },
  {
    stage: "Deepening",
    duration: "3-6 months",
    topics: [
      "Advanced study of Gurbani and Sikh texts",
      "Understanding Sikh theology and philosophy",
      "Developing regular spiritual practices",
      "Community involvement and service"
    ],
    resources: [
      "The Sikh Religion (6 volumes) by Max Arthur Macauliffe",
      "Sikhism: An Introduction by Nikky-Guninder Kaur Singh",
      "The Dasam Granth and other Sikh texts"
    ]
  },
  {
    stage: "Integration",
    duration: "6-12 months",
    topics: [
      "Applying Sikh teachings to daily life",
      "Active participation in Sikh community",
      "Advanced philosophical concepts",
      "Personal spiritual discipline"
    ],
    resources: [
      "The Complete Works of Bhai Gurdas",
      "Sikhism: A Guide for the Perplexed by Arvind-Pal Singh Mandair",
      "Contemporary Sikh studies and research"
    ]
  }
]

const onlineResources = [
  {
    category: "Free Text Access",
    resources: [
      {
        name: "SriGranth.org",
        url: "https://www.srigranth.org",
        description: "Complete Guru Granth Sahib with translations",
        features: ["Gurmukhi text", "English translation", "Roman transliteration", "Search functionality"]
      },
      {
        name: "SikhNet",
        url: "https://www.sikhnet.com",
        description: "Comprehensive Sikh information and resources",
        features: ["Gurbani library", "Educational articles", "Community resources", "Multimedia content"]
      },
      {
        name: "SikhiToTheMax",
        url: "https://www.sikhitothemax.org",
        description: "Advanced Gurbani search and study platform",
        features: ["Advanced search", "Multiple translations", "Cross-references", "Study tools"]
      }
    ]
  },
  {
    category: "Educational Resources",
    resources: [
      {
        name: "Sikh Research Institute",
        url: "https://www.sikhri.org",
        description: "Academic and educational resources for Sikh studies",
        features: ["Research papers", "Educational courses", "Study materials", "Community education"]
      },
      {
        name: "SikhNet Education",
        url: "https://www.sikhnet.com/education",
        description: "Comprehensive Sikh education resources",
        features: ["Educational articles", "Study guides", "Cultural information", "Interactive learning"]
      }
    ]
  },
  {
    category: "Practice Resources",
    resources: [
      {
        name: "SikhNet Gurbani",
        url: "https://www.sikhnet.com/gurbani",
        description: "Gurbani study and practice resources",
        features: ["Daily readings", "Audio recitations", "Study guides", "Practice instructions"]
      },
      {
        name: "SikhNet Community",
        url: "https://www.sikhnet.com/community",
        description: "Sikh community and practice resources",
        features: ["Community forums", "Practice guidelines", "Cultural resources", "Event information"]
      }
    ]
  }
]

export default function SikhBeginnerPage({ params }: SikhBeginnerPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="mb-6">
        <Button asChild variant="ghost">
          <Link href={`/${params.locale}/studies/sikh`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Sikh Studies
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">Sikh Studies</Badge>
        <h1 className="text-4xl font-bold mb-4">Sikh Studies for Beginners</h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-6">
          Welcome to your journey into Sikh studies. This comprehensive guide will introduce you to the teachings 
          of the Sikh Gurus, Sikh philosophy, practices, and values. Discover the path of devotion, equality, 
          and service that has guided millions for over 500 years.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Badge variant="outline">
            <Target className="mr-1 h-3 w-3" />
            Sikh Gurus
          </Badge>
          <Badge variant="outline">
            <Heart className="mr-1 h-3 w-3" />
            Philosophy
          </Badge>
          <Badge variant="outline">
            <Brain className="mr-1 h-3 w-3" />
            Practices
          </Badge>
          <Badge variant="outline">
            <Shield className="mr-1 h-3 w-3" />
            Free Resources
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="gurus" className="space-y-8">
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
                {topic.id === "gurus" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">The Ten Sikh Gurus</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {topic.content.gurus.map((guru, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h4 className="font-semibold text-lg mb-2">{guru.name}</h4>
                          <p className="text-muted-foreground mb-2">{guru.description}</p>
                          <p className="text-sm mb-2"><strong>Teachings:</strong> {guru.teachings}</p>
                          <p className="text-sm"><strong>Contributions:</strong> {guru.contributions}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Practice Suggestion</h4>
                      <p className="text-sm">{topic.content.practice}</p>
                    </div>
                  </div>
                )}

                {topic.id === "philosophy" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Core Concepts</h3>
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

                {topic.id === "practices" && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Essential Practices</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {topic.content.practices.map((practice, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h4 className="font-semibold text-lg mb-2">{practice.name}</h4>
                          <p className="text-muted-foreground mb-2">{practice.description}</p>
                          <p className="text-sm mb-2"><strong>Practice:</strong> {practice.practice}</p>
                          <p className="text-sm"><strong>Benefits:</strong> {practice.benefits}</p>
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
            Follow this structured path to develop a comprehensive understanding of Sikh studies. 
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
            Access comprehensive Sikh study materials, texts, and practice resources completely free online. 
            These authoritative sources provide everything you need for your Sikh studies journey.
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
                <Link href={`/${params.locale}/studies/sikh/philosophy`}>
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Sikh Philosophy
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href={`/${params.locale}/studies/sikh/history`}>
                  <History className="mr-2 h-4 w-4" />
                  Sikh History
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href={`/${params.locale}/studies/sikh/practice`}>
                  <Search className="mr-2 h-4 w-4" />
                  Sikh Practices
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href={`/${params.locale}/sacred-texts/sikh`}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Sikh Texts
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
                <a href="https://www.srigranth.org" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2 h-4 w-4" />
                  SriGranth.org - Complete Library
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <a href="https://www.sikhnet.com" target="_blank" rel="noopener noreferrer">
                  <ScrollText className="mr-2 h-4 w-4" />
                  SikhNet - Sikh Resources
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <a href="https://www.sikhitothemax.org" target="_blank" rel="noopener noreferrer">
                  <Library className="mr-2 h-4 w-4" />
                  SikhiToTheMax - Advanced Search
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <a href="https://www.sikhri.org" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Sikh Research Institute
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Begin Your Sikh Journey</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
          You now have a solid foundation to begin your Sikh studies. Start by learning about the Gurus, 
          practice the basic values of equality and service, and explore the rich tradition of Sikh teachings. 
          Remember that Sikhism emphasizes practical spirituality and service to humanity.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg">
            <a href="https://www.srigranth.org" target="_blank" rel="noopener noreferrer">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Reading Texts
            </a>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href={`/${params.locale}/studies/sikh/philosophy`}>
              <Lightbulb className="mr-2 h-5 w-5" />
              Explore Philosophy
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href={`/${params.locale}/studies/sikh`}>
              <Globe className="mr-2 h-5 w-5" />
              All Sikh Studies
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 