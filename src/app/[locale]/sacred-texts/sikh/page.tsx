import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ScrollText, Library, ArrowLeft, ExternalLink, Lightbulb, History, Users, Globe, Search, Music, Calendar, MapPin, Clock } from "lucide-react"
import Link from "next/link"

interface SikhTextsPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Sikh Sacred Texts | Complete Guide to Sikh Scriptures",
  description: "Explore the sacred texts of Sikhism including the Guru Granth Sahib, Dasam Granth, and other Sikh scriptures. Access free translations, commentaries, and study resources from SriGranth.org and SikhNet.",
  keywords: [
    "Sikh scriptures",
    "Guru Granth Sahib",
    "Dasam Granth",
    "Gurbani",
    "Sikh texts",
    "Gurmukhi",
    "Sikh literature",
    "Sikh philosophy",
    "SriGranth.org",
    "SikhNet",
    "Sikh studies",
    "Gurbani study"
  ],
  openGraph: {
    title: "Sikh Sacred Texts - Complete Guide to Sikh Scriptures",
    description: "Explore the sacred texts of Sikhism with free access to translations, commentaries, and study resources.",
    images: [
      {
        url: "/images/sikh-texts-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sikh Sacred Texts"
      }
    ]
  }
}

const sikhScriptures = [
  {
    id: "guru-granth-sahib",
    name: "Sri Guru Granth Sahib",
    description: "The eternal Guru and central holy scripture of Sikhism, containing the divine revelations and spiritual wisdom of the Sikh Gurus and other enlightened souls. This sacred text is considered the living Guru of the Sikhs, providing spiritual guidance and wisdom for all aspects of life.",
    category: "Primary Scripture",
    language: "Gurmukhi, Punjabi, Sanskrit, Persian, Arabic",
    period: "1469-1708 CE",
    totalTexts: "5,894 hymns and compositions",
    preservation: "Compiled by Guru Arjan Dev Ji (1604) and finalized by Guru Gobind Singh Ji (1708)",
    historicalContext: "Compiled over 239 years by the Sikh Gurus, representing the spiritual evolution of Sikhism from Guru Nanak to Guru Gobind Singh",
    keySchools: ["Khalsa", "Udasi", "Nirmala", "Sevapanthi", "Nihang"],
    structure: {
      composition: {
        name: "Composition and Structure",
        description: "Organization of the sacred text",
        sections: ["1430 Angs (Pages)", "31 Ragas (Musical Measures)", "Guru's Compositions", "Bhagat Bani"],
        contents: "The text is organized by musical measures (ragas) and contains compositions from Sikh Gurus and other spiritual masters",
        keyTexts: [
          "Japji Sahib - Morning prayer by Guru Nanak",
          "Asa Ki Vaar - Hymn of hope and faith",
          "Sukhmani Sahib - Psalm of peace",
          "Anand Sahib - Song of bliss",
          "Rehras Sahib - Evening prayer",
          "Kirtan Sohila - Night prayer"
        ],
        significance: "The musical organization reflects the importance of kirtan (devotional singing) in Sikh practice, with each raga creating a specific spiritual mood"
      },
      content: {
        name: "Content and Themes",
        description: "Spiritual teachings and wisdom",
        sections: ["Divine Unity", "Spiritual Practice", "Social Justice", "Devotional Love", "Philosophical Wisdom"],
        contents: "Teachings on the nature of God, spiritual practice, social responsibility, and the path to liberation",
        keyTexts: [
          "Guru Nanak's compositions - Foundation of Sikh philosophy",
          "Guru Angad's teachings - Development of Gurmukhi script",
          "Guru Amar Das's hymns - Social reform and equality",
          "Guru Ram Das's compositions - Devotional poetry",
          "Guru Arjan's writings - Compilation and synthesis",
          "Guru Tegh Bahadur's hymns - Martyrdom and sacrifice",
          "Bhagat Bani - Compositions of Hindu and Muslim saints"
        ],
        significance: "Represents the complete spiritual wisdom of the Sikh tradition, emphasizing unity, equality, and devotion to the One God"
      }
    },
    significance: "The Guru Granth Sahib is considered the living Guru of the Sikhs, containing the divine wisdom and spiritual guidance for all aspects of life. It emphasizes the unity of God, equality of all human beings, and the importance of honest living and service to humanity.",
    keyThemes: [
      {
        name: "Ik Onkar",
        description: "The fundamental belief in One God, the Creator of all"
      },
      {
        name: "Guru's Grace",
        description: "The importance of spiritual guidance and divine grace"
      },
      {
        name: "Naam Simran",
        description: "Meditation on the divine name and remembrance of God"
      },
      {
        name: "Seva",
        description: "Selfless service to humanity and community"
      }
    ],
    translations: [
      {
        name: "SriGranth.org",
        description: "Comprehensive online version with translations",
        url: "https://www.srigranth.org",
        features: ["Gurmukhi text", "English translation", "Roman transliteration", "Search functionality"]
      },
      {
        name: "SikhNet",
        description: "SikhNet's Gurbani library and resources",
        url: "https://www.sikhnet.com/gurbani",
        features: ["Multiple translations", "Audio recitations", "Study materials", "Community resources"]
      }
    ],
    onlineResources: [
      {
        name: "SriGranth.org",
        url: "https://www.srigranth.org",
        description: "Complete online version of Guru Granth Sahib",
        features: ["Complete text", "Multiple translations", "Search tools", "Study resources", "Audio recitations"]
      },
      {
        name: "SikhNet",
        url: "https://www.sikhnet.com",
        description: "Comprehensive Sikh information and resources",
        features: ["Gurbani library", "Audio recitations", "Educational materials", "Community forums"]
      },
      {
        name: "SearchGurbani",
        url: "https://www.searchgurbani.com",
        description: "Advanced search and study tools for Gurbani",
        features: ["Advanced search", "Multiple translations", "Commentaries", "Study tools", "Mobile app"]
      },
      {
        name: "GurbaniNow",
        url: "https://www.gurbaninow.com",
        description: "Daily Gurbani readings and study resources",
        features: ["Daily readings", "Commentaries", "Audio recitations", "Study guides"]
      },
      {
        name: "Sikh Research Institute",
        url: "https://www.sikhri.org",
        description: "Academic and educational resources for Sikh studies",
        features: ["Research papers", "Educational courses", "Publications", "Study materials"]
      },
      {
        name: "Gurbani.org",
        url: "https://www.gurbani.org",
        description: "Gurbani texts and translations",
        features: ["Complete texts", "Translations", "Commentaries", "Study resources"]
      }
    ]
  },
  {
    id: "dasam-granth",
    name: "Dasam Granth",
    description: "A separate holy text containing the compositions of Guru Gobind Singh Ji, the tenth Sikh Guru, including philosophical writings, autobiographical accounts, and devotional poetry.",
    category: "Secondary Scripture",
    language: "Gurmukhi, Braj Bhasha, Persian, Sanskrit",
    period: "1685-1708 CE",
    structure: {
      sections: {
        name: "Major Sections",
        description: "Organization of the text",
        sections: ["Jaap Sahib", "Akal Ustat", "Bachittar Natak", "Chandi Charitar", "Gyan Prabodh"],
        contents: "Various compositions including prayers, philosophical treatises, and historical accounts"
      },
      themes: {
        name: "Thematic Content",
        description: "Key themes and teachings",
        sections: ["Divine Power", "Martial Spirit", "Spiritual Wisdom", "Historical Accounts"],
        contents: "Emphasis on divine power, courage, spiritual wisdom, and the historical context of Sikhism"
      }
    },
    significance: "The Dasam Granth contains the writings of Guru Gobind Singh Ji, emphasizing the martial spirit, divine power, and the historical development of Sikhism. It includes important compositions like Jaap Sahib and Bachittar Natak, which are recited in Sikh ceremonies.",
    keyThemes: [
      {
        name: "Divine Power",
        description: "Understanding of God's power and protection"
      },
      {
        name: "Martial Spirit",
        description: "The importance of courage and defending righteousness"
      },
      {
        name: "Spiritual Wisdom",
        description: "Deep philosophical insights and spiritual guidance"
      },
      {
        name: "Historical Context",
        description: "Accounts of Sikh history and the Guru's life"
      }
    ],
    translations: [
      {
        name: "SriGranth.org",
        description: "Dasam Granth with translations",
        url: "https://www.srigranth.org/dasam",
        features: ["Complete text", "English translation", "Commentaries", "Study guides"]
      },
      {
        name: "SikhNet",
        description: "Dasam Granth resources",
        url: "https://www.sikhnet.com/dasam-granth",
        features: ["Selected compositions", "Audio recitations", "Explanations", "Historical context"]
      }
    ],
    onlineResources: [
      {
        name: "SriGranth.org",
        url: "https://www.srigranth.org/dasam",
        description: "Complete Dasam Granth online",
        features: ["Full text", "Translations", "Commentaries", "Search tools"]
      },
      {
        name: "SikhNet",
        url: "https://www.sikhnet.com/dasam-granth",
        description: "Dasam Granth study resources",
        features: ["Selected texts", "Audio versions", "Explanations", "Study materials"]
      }
    ]
  },
  {
    id: "janamsakhis",
    name: "Janamsakhis",
    description: "Traditional biographies of Guru Nanak Dev Ji, the founder of Sikhism, containing accounts of his life, travels, and teachings.",
    category: "Historical Texts",
    language: "Punjabi, Gurmukhi",
    period: "16th-18th centuries CE",
    structure: {
      versions: {
        name: "Major Versions",
        description: "Different accounts of Guru Nanak's life",
        sections: ["Bala Janamsakhi", "Puratan Janamsakhi", "Miharban Janamsakhi", "Adi Janamsakhi"],
        contents: "Various accounts compiled by different authors and traditions"
      },
      content: {
        name: "Content and Stories",
        description: "Life events and teachings",
        sections: ["Birth and Early Life", "Travels and Journeys", "Miracles and Teachings", "Historical Context"],
        contents: "Narratives of Guru Nanak's life, his travels, teachings, and the historical context of his time"
      }
    },
    significance: "The Janamsakhis provide valuable insights into the life and teachings of Guru Nanak Dev Ji, the founder of Sikhism. While they contain both historical accounts and legendary stories, they offer important perspectives on the development of Sikh thought and practice.",
    keyThemes: [
      {
        name: "Guru Nanak's Life",
        description: "Accounts of the founder's life and experiences"
      },
      {
        name: "Spiritual Journeys",
        description: "Narratives of Guru Nanak's travels and encounters"
      },
      {
        name: "Teachings and Wisdom",
        description: "Spiritual teachings and philosophical insights"
      },
      {
        name: "Historical Context",
        description: "Understanding of the social and religious environment"
      }
    ],
    translations: [
      {
        name: "SikhNet",
        description: "Janamsakhi stories and accounts",
        url: "https://www.sikhnet.com/janamsakhi",
        features: ["Selected stories", "Modern retellings", "Historical context", "Educational materials"]
      },
      {
        name: "Sikh Research Institute",
        description: "Academic study of Janamsakhis",
        url: "https://www.sikhri.org",
        features: ["Scholarly analysis", "Historical research", "Comparative studies", "Publications"]
      }
    ],
    onlineResources: [
      {
        name: "SikhNet",
        url: "https://www.sikhnet.com/janamsakhi",
        description: "Janamsakhi stories and resources",
        features: ["Stories and accounts", "Modern interpretations", "Educational content", "Multimedia resources"]
      },
      {
        name: "Sikh Research Institute",
        url: "https://www.sikhri.org",
        description: "Academic Sikh studies",
        features: ["Research papers", "Historical studies", "Publications", "Educational resources"]
      }
    ]
  },
  {
    id: "rahit-namas",
    name: "Rahit Namas",
    description: "Codes of conduct and guidelines for Sikh living, providing practical guidance for Sikh practice and community life.",
    category: "Practice Guidelines",
    language: "Punjabi, Gurmukhi",
    period: "18th-19th centuries CE",
    structure: {
      guidelines: {
        name: "Conduct Guidelines",
        description: "Practical guidance for Sikh living",
        sections: ["Personal Conduct", "Community Life", "Religious Practice", "Social Responsibility"],
        contents: "Guidelines for individual behavior, community participation, religious practice, and social engagement"
      },
      principles: {
        name: "Core Principles",
        description: "Fundamental Sikh values and principles",
        sections: ["Truthfulness", "Honest Living", "Service to Others", "Devotion to God"],
        contents: "Core values and principles that guide Sikh thought and action"
      }
    },
    significance: "The Rahit Namas provide practical guidance for Sikh living, translating the spiritual teachings of the Gurus into daily practice. They help Sikhs understand how to live according to Sikh principles in various aspects of life.",
    keyThemes: [
      {
        name: "Personal Conduct",
        description: "Guidelines for individual behavior and character"
      },
      {
        name: "Community Life",
        description: "Principles for living in harmony with others"
      },
      {
        name: "Religious Practice",
        description: "Guidelines for spiritual practice and worship"
      },
      {
        name: "Social Responsibility",
        description: "Duties and responsibilities toward society"
      }
    ],
    translations: [
      {
        name: "SikhNet",
        description: "Sikh conduct and practice guidelines",
        url: "https://www.sikhnet.com/rahit",
        features: ["Conduct guidelines", "Practice instructions", "Modern interpretations", "Community resources"]
      },
      {
        name: "Sikh Research Institute",
        description: "Academic study of Sikh practice",
        url: "https://www.sikhri.org/practice",
        features: ["Historical context", "Modern applications", "Research studies", "Educational materials"]
      }
    ],
    onlineResources: [
      {
        name: "SikhNet",
        url: "https://www.sikhnet.com/rahit",
        description: "Sikh practice and conduct resources",
        features: ["Practice guidelines", "Modern interpretations", "Community resources", "Educational materials"]
      },
      {
        name: "Sikh Research Institute",
        url: "https://www.sikhri.org",
        description: "Sikh studies and research",
        features: ["Academic research", "Historical studies", "Modern applications", "Educational resources"]
      }
    ]
  }
]

const studyResources = [
  {
    category: "Online Libraries",
    resources: [
      {
        name: "SriGranth.org",
        url: "https://www.srigranth.org",
        description: "The most comprehensive online library of Sikh texts",
        features: [
          "Complete Guru Granth Sahib with translations",
          "Dasam Granth and other Sikh texts",
          "Advanced search and cross-reference tools",
          "Multiple language support",
          "Historical commentaries and studies"
        ]
      },
      {
        name: "SikhNet",
        url: "https://www.sikhnet.com",
        description: "Comprehensive Sikh information and education network",
        features: [
          "Extensive Gurbani library",
          "Audio recitations and kirtan",
          "Educational articles and courses",
          "Community forums and discussions",
          "Multimedia resources and videos"
        ]
      },
      {
        name: "SikhiToTheMax",
        url: "https://www.sikhitothemax.org",
        description: "Advanced Gurbani search and study platform",
        features: [
          "Advanced search functionality",
          "Multiple translations and commentaries",
          "Cross-references and indexes",
          "Study tools and resources",
          "Mobile app for offline access"
        ]
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
        features: [
          "Research papers and publications",
          "Educational courses and materials",
          "Historical studies and analysis",
          "Modern applications and relevance",
          "Community education programs"
        ]
      },
      {
        name: "SikhNet Education",
        url: "https://www.sikhnet.com/education",
        description: "Comprehensive Sikh education resources",
        features: [
          "Educational articles and features",
          "Children's education materials",
          "Study guides and courses",
          "Cultural and historical information",
          "Interactive learning tools"
        ]
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
        features: [
          "Daily Gurbani readings",
          "Audio recitations and kirtan",
          "Study guides and commentaries",
          "Practice instructions and guidance",
          "Community discussion forums"
        ]
      },
      {
        name: "SikhNet Community",
        url: "https://www.sikhnet.com/community",
        description: "Sikh community and practice resources",
        features: [
          "Community forums and discussions",
          "Practice guidelines and instructions",
          "Cultural and social resources",
          "Event information and networking",
          "Support and guidance resources"
        ]
      }
    ]
  }
]

const quickFacts = [
  {
    category: "Historical",
    facts: [
      "Guru Granth Sahib was compiled by Guru Arjan Dev Ji in 1604",
      "Guru Gobind Singh Ji declared Guru Granth Sahib as the eternal Guru in 1708",
      "The Dasam Granth contains compositions of Guru Gobind Singh Ji",
      "Janamsakhis were compiled between the 16th and 18th centuries"
    ]
  },
  {
    category: "Content",
    facts: [
      "Guru Granth Sahib contains 1,430 pages (angs)",
      "The text includes compositions from 6 Sikh Gurus",
      "It also contains writings from 15 Bhagats and 11 Bhatts",
      "The text is organized by 31 musical measures (ragas)"
    ]
  },
  {
    category: "Access",
    facts: [
      "Most Sikh texts are freely available online",
      "Audio recitations and kirtan are widely available",
      "Multiple translations and commentaries exist",
      "Study guides and courses are available for all levels"
    ]
  }
]

export default function SikhTextsPage({ params }: SikhTextsPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="mb-6">
        <Button asChild variant="ghost">
          <Link href={`/${params.locale}/sacred-texts`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Sacred Texts
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">Sikhism</Badge>
        <h1 className="text-4xl font-bold mb-4">Sikh Sacred Texts</h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-6">
          Explore the sacred texts of Sikhism, from the eternal wisdom of the Guru Granth Sahib to the martial spirit 
          of the Dasam Granth and the historical accounts of the Janamsakhis. Discover free access to translations, 
          commentaries, and study resources from authoritative sources.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Badge variant="outline">
            <BookOpen className="mr-1 h-3 w-3" />
            Guru Granth Sahib
          </Badge>
          <Badge variant="outline">
            <ScrollText className="mr-1 h-3 w-3" />
            Dasam Granth
          </Badge>
          <Badge variant="outline">
            <Library className="mr-1 h-3 w-3" />
            Gurbani
          </Badge>
          <Badge variant="outline">
            <Music className="mr-1 h-3 w-3" />
            Free Resources
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="guru-granth-sahib" className="space-y-8">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          {sikhScriptures.map((scripture) => (
            <TabsTrigger key={scripture.id} value={scripture.id} className="text-sm">
              {scripture.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {sikhScriptures.map((scripture) => (
          <TabsContent key={scripture.id} value={scripture.id} className="space-y-8">
            {/* Scripture Overview */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">{scripture.name}</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      {scripture.description}
                    </CardDescription>
                  </div>
                  <Badge variant="outline">{scripture.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span><strong>Language:</strong> {scripture.language}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span><strong>Period:</strong> {scripture.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span><strong>Category:</strong> {scripture.category}</span>
                  </div>
                </div>
                
                <div className="prose dark:prose-invert max-w-none">
                  <h3>Historical Significance</h3>
                  <p>{scripture.significance}</p>
                </div>
              </CardContent>
            </Card>

            {/* Structure */}
            {scripture.structure && (
              <Card>
                <CardHeader>
                  <CardTitle>Structure and Organization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(scripture.structure).map(([key, section]) => (
                      <div key={key} className="space-y-3">
                        <h4 className="font-semibold text-lg">{section.name}</h4>
                        <p className="text-muted-foreground">{section.description}</p>
                        <div>
                          <strong>Major Sections:</strong>
                          <ul className="list-disc list-inside mt-1 text-sm">
                            {section.sections.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <p className="text-sm">{section.contents}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Key Themes */}
            {scripture.keyThemes && (
              <Card>
                <CardHeader>
                  <CardTitle>Key Themes and Concepts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {scripture.keyThemes.map((theme) => (
                      <div key={theme.name} className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-lg">{theme.name}</h4>
                        <p className="text-muted-foreground">{theme.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Translations and Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Translations and Study Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {scripture.translations && (
                    <div>
                      <h4 className="font-semibold mb-3">Major Translations</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {scripture.translations.map((translation) => (
                          <div key={translation.name} className="border rounded-lg p-4">
                            <h5 className="font-medium">{translation.name}</h5>
                            <p className="text-sm text-muted-foreground mb-2">{translation.description}</p>
                            <div className="flex gap-2 mb-3">
                              {translation.features.map((feature) => (
                                <Badge key={feature} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                            <Button asChild size="sm" variant="outline">
                              <a href={translation.url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-3 w-3" />
                                Visit Site
                              </a>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold mb-3">Free Online Resources</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {scripture.onlineResources.map((resource) => (
                        <div key={resource.name} className="border rounded-lg p-4">
                          <h5 className="font-medium">{resource.name}</h5>
                          <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>
                          <div className="flex gap-2 mb-3">
                            {resource.features.map((feature) => (
                              <Badge key={feature} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                          <Button asChild size="sm" variant="outline">
                            <a href={resource.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-3 w-3" />
                              Access Free
                            </a>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <Separator className="my-12" />

      {/* Study Resources Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Study Resources</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access free, authoritative resources for studying Sikh texts, including online libraries, 
            educational materials, and practice guides from respected Sikh organizations.
          </p>
        </div>

        <div className="grid gap-8">
          {studyResources.map((category) => (
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

      {/* Quick Facts */}
      <div className="grid md:grid-cols-3 gap-8">
        {quickFacts.map((category) => (
          <Card key={category.category}>
            <CardHeader>
              <CardTitle>{category.category} Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.facts.map((fact, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {fact}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      {/* Study Resources */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Study Resources</CardTitle>
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
                <Link href={`/${params.locale}/studies/sikh/beginner`}>
                  <Users className="mr-2 h-4 w-4" />
                  Beginner's Guide
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href={`/${params.locale}/studies/comparative/sikhism`}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Comparative Study
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
                  <Globe className="mr-2 h-4 w-4" />
                  Sikh Research Institute
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <a href="https://www.sikhnet.com/gurbani" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  SikhNet Gurbani - Daily Readings
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Begin Your Sikh Studies</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
          Explore the profound wisdom of Sikh scriptures with free access to authoritative translations, 
          commentaries, and study resources. Whether you're interested in the eternal teachings of the Guru Granth Sahib, 
          the martial spirit of the Dasam Granth, or the practical wisdom of Sikh philosophy, comprehensive resources 
          are available to support your spiritual journey.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg">
            <Link href={`/${params.locale}/studies/sikh/beginner`}>
              <BookOpen className="mr-2 h-5 w-5" />
              Start Learning
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <a href="https://www.srigranth.org" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Read Texts Online
            </a>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href={`/${params.locale}/sacred-texts`}>
              <Globe className="mr-2 h-5 w-5" />
              All Sacred Texts
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 