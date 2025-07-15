import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ScrollText, Library, ArrowLeft, ExternalLink, Lightbulb, History, Users, Globe, Search, Music, Calendar, MapPin, Clock } from "lucide-react"
import Link from "next/link"

interface HinduTextsPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Hindu Sacred Texts | Complete Guide to Hindu Scriptures",
  description: "Explore the vast collection of Hindu sacred texts including the Vedas, Upanishads, Bhagavad Gita, and Puranas. Access free translations, commentaries, and study resources from Sacred-texts.com and Hinduism Today.",
  keywords: [
    "Hindu scriptures",
    "Vedas",
    "Upanishads",
    "Bhagavad Gita",
    "Puranas",
    "Hindu texts",
    "Sanskrit literature",
    "Vedic texts",
    "Hindu philosophy",
    "Dharma texts",
    "Sacred-texts.com",
    "Hinduism Today",
    "Vedanta",
    "Yoga texts"
  ],
  openGraph: {
    title: "Hindu Sacred Texts - Complete Guide to Hindu Scriptures",
    description: "Explore the vast collection of Hindu sacred texts with free access to translations, commentaries, and study resources.",
    images: [
      {
        url: "/images/hindu-texts-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Hindu Sacred Texts"
      }
    ]
  }
}

const hinduScriptures = [
  {
    id: "vedas",
    name: "The Vedas",
    description: "The oldest and most authoritative sacred texts of Hinduism, considered to be divine revelation (shruti) and the foundation of all Hindu philosophy and practice. These texts represent the eternal, uncreated knowledge (apaurusheya) that was revealed to ancient sages (rishis) in deep meditation and have been preserved through oral tradition for millennia.",
    category: "Shruti (Revealed)",
    language: "Vedic Sanskrit",
    period: "1500-500 BCE",
    totalTexts: "Four main Vedas with over 20,000 verses total",
    preservation: "Oral tradition for 3,000+ years before written form",
    historicalContext: "Composed during the Vedic period, representing the earliest layer of Indian literature and the foundation of Hindu civilization",
    keySchools: ["Mimamsa", "Vedanta", "Nyaya", "Vaisheshika", "Samkhya", "Yoga"],
    structure: {
      rigveda: {
        name: "Rig Veda",
        description: "The oldest Veda containing hymns and mantras",
        sections: ["Mandala 1-10", "Suktas (Hymns)", "Rishis (Seers)", "Devas (Deities)"],
        contents: "1,028 hymns in 10,600 verses, primarily addressed to various deities and containing philosophical insights",
        keyTexts: [
          "Purusha Sukta - Cosmic Man hymn",
          "Nasadiya Sukta - Creation hymn",
          "Gayatri Mantra - Most sacred mantra",
          "Hymns to Indra, Agni, Varuna, Soma"
        ],
        significance: "The oldest religious text in the world, containing the foundation of Hindu cosmology, theology, and philosophy"
      },
      yajurveda: {
        name: "Yajur Veda",
        description: "Veda of sacrificial formulas and rituals",
        sections: ["Krishna Yajur Veda", "Shukla Yajur Veda", "Brahmanas", "Aranyakas"],
        contents: "Prose formulas for rituals and ceremonies, along with explanatory texts",
        keyTexts: [
          "Shatapatha Brahmana - Detailed ritual instructions",
          "Taittiriya Samhita - Ritual formulas",
          "Vajasaneyi Samhita - White Yajur Veda",
          "Brihadaranyaka Upanishad - Philosophical teachings"
        ],
        significance: "Provides the practical framework for Vedic rituals and ceremonies, connecting ritual action with spiritual meaning"
      },
      samaveda: {
        name: "Sama Veda",
        description: "Veda of melodies and chants",
        sections: ["Purvarchika", "Uttararchika", "Aranyaka", "Upanishads"],
        contents: "Musical arrangements of Rig Vedic hymns for ritual chanting",
        keyTexts: [
          "Chandogya Upanishad - Major philosophical text",
          "Kena Upanishad - Knowledge and Brahman",
          "Musical notations and melodies",
          "Chanting instructions and techniques"
        ],
        significance: "Emphasizes the power of sound and music in spiritual practice, connecting chanting with divine experience"
      },
      atharvaveda: {
        name: "Atharva Veda",
        description: "Veda of spells and incantations",
        sections: ["Kandas", "Suktas", "Charms and Spells", "Philosophical hymns"],
        contents: "Practical knowledge, healing, protection, and daily life guidance",
        keyTexts: [
          "Healing mantras and spells",
          "Protection charms and amulets",
          "Marriage and domestic rituals",
          "Philosophical hymns on creation and reality"
        ],
        significance: "Represents the practical application of Vedic knowledge to daily life, including healing, protection, and domestic rituals"
      }
    },
    significance: "The Vedas represent the oldest layer of Hindu literature and are considered the eternal, uncreated knowledge revealed to ancient sages (rishis) in deep meditation. They form the foundation of Hindu philosophy, ritual practice, and spiritual understanding, influencing all subsequent Hindu texts and traditions.",
    keyThemes: [
      {
        name: "Ritual and Sacrifice",
        description: "Detailed instructions for various yajnas (sacrifices) and ceremonies"
      },
      {
        name: "Cosmology",
        description: "Understanding of the universe, creation, and cosmic order (rta)"
      },
      {
        name: "Deity Worship",
        description: "Hymns to various deities including Indra, Agni, Varuna, and others"
      },
      {
        name: "Philosophical Inquiry",
        description: "Early exploration of fundamental questions about existence and reality"
      }
    ],
    translations: [
      {
        name: "Sacred-texts.com",
        description: "Free online translations of Vedic texts",
        url: "https://www.sacred-texts.com/hin/",
        features: ["Complete translations", "Sanskrit text", "Commentaries", "Search functionality"]
      },
      {
        name: "Harvard Oriental Series",
        description: "Academic translations with extensive notes",
        url: "https://archive.org/details/harvardorientalseries",
        features: ["Scholarly quality", "Historical context", "Linguistic analysis"]
      }
    ],
    onlineResources: [
      {
        name: "Vedabase",
        url: "https://vedabase.io",
        description: "Comprehensive Vedic library with multiple translations",
        features: ["Multiple translations", "Sanskrit text", "Commentaries", "Search tools", "Cross-references"]
      },
      {
        name: "Sacred-texts.com",
        url: "https://www.sacred-texts.com/hin/",
        description: "Free access to Vedic texts and translations",
        features: ["Free downloads", "Multiple formats", "Historical editions", "Commentaries"]
      },
      {
        name: "GRETIL",
        url: "https://gretil.sub.uni-goettingen.de",
        description: "Göttingen Register of Electronic Texts in Indian Languages",
        features: ["Sanskrit texts", "Academic editions", "Search tools", "Bibliographic information"]
      },
      {
        name: "Sanskrit Documents",
        url: "https://sanskritdocuments.org",
        description: "Collection of Sanskrit texts and resources",
        features: ["Vedic texts", "Sanskrit grammar", "Dictionaries", "Learning resources"]
      },
      {
        name: "Vedic Heritage Portal",
        url: "https://vedicheritage.gov.in",
        description: "Government of India's Vedic heritage portal",
        features: ["Vedic texts", "Cultural context", "Historical information", "Educational resources"]
      },
      {
        name: "Harvard Oriental Series",
        url: "https://archive.org/details/harvardorientalseries",
        description: "Academic translations with extensive notes",
        features: ["Scholarly quality", "Historical context", "Linguistic analysis", "Research materials"]
      }
    ]
  },
  {
    id: "upanishads",
    name: "The Upanishads",
    description: "Philosophical texts that form the theoretical basis for Hindu religion, exploring the nature of reality, consciousness, and the ultimate truth (Brahman).",
    category: "Shruti (Revealed)",
    language: "Sanskrit",
    period: "800-200 BCE",
    structure: {
      principal: {
        name: "Principal Upanishads",
        description: "The most important and widely studied Upanishads",
        sections: ["Brihadaranyaka", "Chandogya", "Taittiriya", "Aitareya", "Kaushitaki", "Kena", "Katha", "Isha", "Mundaka", "Prashna", "Mandukya", "Shvetashvatara"],
        contents: "Core philosophical teachings on Brahman, Atman, and the nature of reality"
      },
      vedantic: {
        name: "Vedantic Philosophy",
        description: "Systematic exploration of non-dualistic thought",
        sections: ["Advaita", "Vishishtadvaita", "Dvaita"],
        contents: "Different interpretations of the relationship between individual soul and universal consciousness"
      }
    },
    significance: "The Upanishads represent the culmination of Vedic thought and mark the transition from ritualistic religion to philosophical inquiry. They introduce key concepts like Brahman (universal consciousness), Atman (individual soul), karma, rebirth, and moksha (liberation), which form the foundation of all subsequent Hindu philosophy.",
    keyThemes: [
      {
        name: "Brahman and Atman",
        description: "The relationship between universal consciousness and individual soul"
      },
      {
        name: "Moksha",
        description: "Liberation from the cycle of birth and death"
      },
      {
        name: "Karma and Rebirth",
        description: "The law of action and its consequences across lifetimes"
      },
      {
        name: "Meditation and Knowledge",
        description: "The path to self-realization through inner inquiry"
      }
    ],
    translations: [
      {
        name: "Sacred-texts.com",
        description: "Free translations of major Upanishads",
        url: "https://www.sacred-texts.com/hin/upan/",
        features: ["Complete texts", "Multiple translations", "Commentaries", "Study guides"]
      },
      {
        name: "Vedanta.org",
        description: "Vedantic interpretations and commentaries",
        url: "https://vedanta.org",
        features: ["Traditional commentaries", "Modern interpretations", "Study materials"]
      }
    ],
    onlineResources: [
      {
        name: "Sacred-texts.com",
        url: "https://www.sacred-texts.com/hin/upan/",
        description: "Comprehensive Upanishad library",
        features: ["Free access", "Multiple translations", "Historical context", "Commentaries"]
      },
      {
        name: "Vedanta.org",
        url: "https://vedanta.org",
        description: "Vedantic study resources",
        features: ["Study guides", "Commentaries", "Audio lectures", "Discussion forums"]
      }
    ]
  },
  {
    id: "bhagavad-gita",
    name: "Bhagavad Gita",
    description: "The most beloved and widely read Hindu text, presenting a synthesis of different paths to spiritual realization through the dialogue between Krishna and Arjuna.",
    category: "Smriti (Remembered)",
    language: "Sanskrit",
    period: "200 BCE - 200 CE",
    structure: {
      chapters: {
        name: "18 Chapters",
        description: "Systematic presentation of spiritual knowledge",
        sections: ["Arjuna Vishada Yoga", "Sankhya Yoga", "Karma Yoga", "Jnana Yoga", "Dhyana Yoga", "Bhakti Yoga"],
        contents: "700 verses covering various aspects of dharma, karma, devotion, and spiritual practice"
      },
      paths: {
        name: "Three Paths",
        description: "Different approaches to spiritual realization",
        sections: ["Karma Yoga (Path of Action)", "Bhakti Yoga (Path of Devotion)", "Jnana Yoga (Path of Knowledge)"],
        contents: "Integration of different spiritual approaches for comprehensive development"
      }
    },
    significance: "The Bhagavad Gita is considered the essence of all Vedic knowledge and provides practical guidance for living a spiritual life while fulfilling worldly responsibilities. It addresses fundamental questions about duty, morality, and the purpose of life, making it relevant for people in all walks of life.",
    keyThemes: [
      {
        name: "Dharma",
        description: "Righteous duty and moral responsibility"
      },
      {
        name: "Karma Yoga",
        description: "Selfless action without attachment to results"
      },
      {
        name: "Bhakti",
        description: "Devotional love and surrender to the divine"
      },
      {
        name: "Jnana",
        description: "Knowledge and wisdom for self-realization"
      }
    ],
    translations: [
      {
        name: "Sacred-texts.com",
        description: "Multiple translations of the Gita",
        url: "https://www.sacred-texts.com/hin/gita/",
        features: ["Various translations", "Commentaries", "Study guides", "Audio versions"]
      },
      {
        name: "Bhagavad-gita.org",
        description: "Comprehensive Gita study resources",
        url: "https://bhagavad-gita.org",
        features: ["Multiple languages", "Commentaries", "Audio recitations", "Study materials"]
      }
    ],
    onlineResources: [
      {
        name: "Sacred-texts.com",
        url: "https://www.sacred-texts.com/hin/gita/",
        description: "Free access to Gita translations",
        features: ["Free downloads", "Multiple versions", "Commentaries", "Study guides"]
      },
      {
        name: "Bhagavad-gita.org",
        url: "https://bhagavad-gita.org",
        description: "Comprehensive Gita study platform",
        features: ["Multiple languages", "Audio recitations", "Commentaries", "Discussion forums"]
      }
    ]
  },
  {
    id: "puranas",
    name: "The Puranas",
    description: "Ancient texts containing mythology, cosmology, genealogies, and religious instruction, serving as popular sources of Hindu religious knowledge and cultural heritage.",
    category: "Smriti (Remembered)",
    language: "Sanskrit",
    period: "300-1500 CE",
    structure: {
      major: {
        name: "Major Puranas",
        description: "The eighteen principal Puranas",
        sections: ["Vishnu Purana", "Shiva Purana", "Brahma Purana", "Bhagavata Purana", "Markandeya Purana", "Vayu Purana"],
        contents: "Comprehensive texts covering creation, destruction, genealogies, and religious instruction"
      },
      upa: {
        name: "Upa Puranas",
        description: "Minor Puranas and supplementary texts",
        sections: ["Various regional and sectarian texts"],
        contents: "Specialized texts focusing on specific deities, regions, or practices"
      }
    },
    significance: "The Puranas serve as the primary source of Hindu mythology and popular religious knowledge, making complex philosophical concepts accessible through stories and narratives. They preserve cultural traditions, historical accounts, and provide practical guidance for religious practice and daily life.",
    keyThemes: [
      {
        name: "Mythology",
        description: "Stories of gods, goddesses, and divine incarnations"
      },
      {
        name: "Cosmology",
        description: "Understanding of creation, time cycles, and cosmic order"
      },
      {
        name: "Dharma",
        description: "Moral and ethical guidelines for different stages of life"
      },
      {
        name: "Bhakti",
        description: "Devotional practices and worship methods"
      }
    ],
    translations: [
      {
        name: "Sacred-texts.com",
        description: "Free Purana translations",
        url: "https://www.sacred-texts.com/hin/",
        features: ["Multiple Puranas", "Complete translations", "Commentaries", "Study guides"]
      },
      {
        name: "Wisdom Library",
        description: "Digital Purana library",
        url: "https://www.wisdomlib.org",
        features: ["Searchable texts", "Multiple translations", "Cross-references", "Study tools"]
      }
    ],
    onlineResources: [
      {
        name: "Sacred-texts.com",
        url: "https://www.sacred-texts.com/hin/",
        description: "Comprehensive Purana collection",
        features: ["Free access", "Multiple texts", "Historical editions", "Commentaries"]
      },
      {
        name: "Wisdom Library",
        url: "https://www.wisdomlib.org",
        description: "Digital Hindu texts library",
        features: ["Search functionality", "Multiple translations", "Cross-references", "Study resources"]
      }
    ]
  }
]

const studyResources = [
  {
    category: "Online Libraries",
    resources: [
      {
        name: "Sacred-texts.com",
        url: "https://www.sacred-texts.com/hin/",
        description: "The most comprehensive free online library of Hindu texts",
        features: [
          "Complete Vedic texts and translations",
          "Upanishads with multiple translations",
          "Bhagavad Gita in various versions",
          "Major Puranas and epics",
          "Historical commentaries and studies"
        ]
      },
      {
        name: "Vedabase",
        url: "https://vedabase.io",
        description: "Comprehensive Vedic and Hindu texts library",
        features: [
          "Sanskrit texts with transliteration",
          "Multiple English translations",
          "Commentaries from various traditions",
          "Search and cross-reference tools",
          "Audio recitations"
        ]
      },
      {
        name: "Wisdom Library",
        url: "https://www.wisdomlib.org",
        description: "Digital library of Hindu and Buddhist texts",
        features: [
          "Searchable database of texts",
          "Multiple translations and versions",
          "Cross-references and indexes",
          "Study guides and commentaries",
          "Historical context and background"
        ]
      }
    ]
  },
  {
    category: "Educational Resources",
    resources: [
      {
        name: "Hinduism Today",
        url: "https://www.hinduismtoday.com",
        description: "Comprehensive Hindu education and information resource",
        features: [
          "Educational articles and features",
          "Hindu philosophy and practice guides",
          "Cultural and historical information",
          "Directory of temples and organizations",
          "Multimedia resources and videos"
        ]
      },
      {
        name: "Vedanta.org",
        url: "https://www.vedanta.org",
        description: "Vedantic philosophy and study resources",
        features: [
          "Vedantic texts and commentaries",
          "Study courses and materials",
          "Audio lectures and discussions",
          "Traditional and modern interpretations",
          "Community resources and events"
        ]
      }
    ]
  },
  {
    category: "Practice Resources",
    resources: [
      {
        name: "Bhagavad-gita.org",
        url: "https://bhagavad-gita.org",
        description: "Comprehensive Gita study and practice platform",
        features: [
          "Multiple translations and commentaries",
          "Audio recitations and lectures",
          "Study guides and courses",
          "Discussion forums and community",
          "Practice guidelines and applications"
        ]
      },
      {
        name: "Vedanta Society",
        url: "https://vedantasociety.net",
        description: "Vedantic study and practice resources",
        features: [
          "Study materials and courses",
          "Meditation and practice guides",
          "Community events and retreats",
          "Traditional teachings and commentaries",
          "Modern applications and relevance"
        ]
      }
    ]
  }
]

const quickFacts = [
  {
    category: "Historical",
    facts: [
      "The Rig Veda is the oldest known text in any Indo-European language",
      "The Upanishads were composed over a period of 600 years",
      "The Bhagavad Gita is part of the epic Mahabharata",
      "There are 18 major Puranas and many minor ones"
    ]
  },
  {
    category: "Content",
    facts: [
      "The Rig Veda contains 1,028 hymns in 10,600 verses",
      "There are 108 principal Upanishads",
      "The Bhagavad Gita has 700 verses in 18 chapters",
      "The Puranas contain millions of verses covering various topics"
    ]
  },
  {
    category: "Access",
    facts: [
      "Most Hindu texts are freely available online",
      "Many texts have multiple translations and commentaries",
      "Audio versions and recitations are widely available",
      "Study guides and courses are available for all levels"
    ]
  }
]

export default function HinduTextsPage({ params }: HinduTextsPageProps) {
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
        <Badge variant="secondary" className="mb-4">Hinduism</Badge>
        <h1 className="text-4xl font-bold mb-4">Hindu Sacred Texts</h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-6">
          Explore the vast collection of Hindu sacred texts, from the ancient wisdom of the Vedas and Upanishads 
          to the practical guidance of the Bhagavad Gita and the rich mythology of the Puranas. Discover free access 
          to translations, commentaries, and study resources from authoritative sources.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Badge variant="outline">
            <BookOpen className="mr-1 h-3 w-3" />
            Vedas
          </Badge>
          <Badge variant="outline">
            <ScrollText className="mr-1 h-3 w-3" />
            Upanishads
          </Badge>
          <Badge variant="outline">
            <Library className="mr-1 h-3 w-3" />
            Gita
          </Badge>
          <Badge variant="outline">
            <Music className="mr-1 h-3 w-3" />
            Free Resources
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="vedas" className="space-y-8">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          {hinduScriptures.map((scripture) => (
            <TabsTrigger key={scripture.id} value={scripture.id} className="text-sm">
              {scripture.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {hinduScriptures.map((scripture) => (
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
            Access free, authoritative resources for studying Hindu texts, including online libraries, 
            educational materials, and practice guides from respected Hindu organizations.
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
                <Link href={`/${params.locale}/studies/hindu/beginner`}>
                  <Users className="mr-2 h-4 w-4" />
                  Beginner's Guide
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href={`/${params.locale}/studies/comparative/hinduism`}>
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
                  <Globe className="mr-2 h-4 w-4" />
                  Hinduism Today - Education
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <a href="https://bhagavad-gita.org" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Bhagavad-gita.org - Gita Study
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Begin Your Hindu Studies</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
          Explore the profound wisdom of Hindu scriptures with free access to authoritative translations, 
          commentaries, and study resources. Whether you're interested in the ancient wisdom of the Vedas, 
          the philosophical insights of the Upanishads, the practical guidance of the Bhagavad Gita, or the 
          rich mythology of the Puranas, comprehensive resources are available to support your spiritual journey.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg">
            <Link href={`/${params.locale}/studies/hindu/beginner`}>
              <BookOpen className="mr-2 h-5 w-5" />
              Start Learning
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <a href="https://www.sacred-texts.com/hin/" target="_blank" rel="noopener noreferrer">
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