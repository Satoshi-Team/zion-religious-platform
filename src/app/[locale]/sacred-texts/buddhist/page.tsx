import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ScrollText, Library, ArrowLeft, ExternalLink, Lightbulb, History, Users, Globe, Search, Music, Calendar, MapPin, Clock } from "lucide-react"
import Link from "next/link"

interface BuddhistTextsPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Buddhist Sacred Texts | Complete Guide to Buddhist Scriptures",
  description: "Explore the vast collection of Buddhist sacred texts including the Pali Canon, Mahayana Sutras, and Tibetan texts. Access free translations, commentaries, and study resources from SuttaCentral, Access to Insight, and more.",
  keywords: [
    "Buddhist scriptures",
    "Pali Canon",
    "Tripitaka",
    "Mahayana sutras",
    "Tibetan texts",
    "Buddhist texts",
    "Dhammapada",
    "Heart Sutra",
    "Buddhist literature",
    "Buddhist philosophy",
    "SuttaCentral",
    "Access to Insight",
    "Tipitaka.org",
    "BuddhaNet"
  ],
  openGraph: {
    title: "Buddhist Sacred Texts - Complete Guide to Buddhist Scriptures",
    description: "Explore the vast collection of Buddhist sacred texts with free access to translations, commentaries, and study resources.",
    images: [
      {
        url: "/images/buddhist-texts-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Buddhist Sacred Texts"
      }
    ]
  }
}

const buddhistCanons = [
  {
    id: "pali-canon",
    name: "Pali Canon (Tripitaka)",
    description: "The earliest and most complete collection of Buddhist texts, preserved in the Pali language and containing the direct teachings of the historical Buddha. This vast collection represents the most authentic record of the Buddha's teachings, preserved through oral tradition for centuries before being written down.",
    tradition: "Theravada",
    language: "Pali",
    period: "5th century BCE - 1st century CE",
    totalTexts: "Over 10,000 suttas and discourses",
    preservation: "Oral tradition for 400+ years before written form",
    historicalContext: "First written down in Sri Lanka around 29 BCE during the Fourth Buddhist Council under King Vattagamani Abhaya",
    structure: {
      vinaya: {
        name: "Vinaya Pitaka",
        description: "Monastic discipline and rules",
        sections: ["Suttavibhanga", "Khandhaka", "Parivara"],
        contents: "Rules for monks and nuns, procedures for monastic life, and disciplinary guidelines",
        keyTexts: [
          "Patimokkha - 227 rules for monks",
          "Mahavagga - Major rules and procedures",
          "Cullavagga - Minor rules and procedures",
          "Parivara - Summary and analysis"
        ],
        significance: "Provides the foundation for monastic life and community harmony, showing how the Buddha adapted rules based on specific situations"
      },
      sutta: {
        name: "Sutta Pitaka",
        description: "Discourses and teachings",
        sections: ["Digha Nikaya", "Majjhima Nikaya", "Samyutta Nikaya", "Anguttara Nikaya", "Khuddaka Nikaya"],
        contents: "Direct teachings of the Buddha, dialogues with disciples, and practical guidance for spiritual development",
        keyTexts: [
          "Digha Nikaya - 34 long discourses including Mahaparinibbana Sutta",
          "Majjhima Nikaya - 152 middle-length discourses",
          "Samyutta Nikaya - 2,889 connected discourses organized by theme",
          "Anguttara Nikaya - 9,557 discourses organized numerically",
          "Khuddaka Nikaya - 15 books including Dhammapada, Sutta Nipata, Jataka tales"
        ],
        significance: "Contains the most direct access to the Buddha's teachings, covering meditation, ethics, philosophy, and practical guidance"
      },
      abhidhamma: {
        name: "Abhidhamma Pitaka",
        description: "Philosophical analysis",
        sections: ["Dhammasangani", "Vibhanga", "Dhatukatha", "Puggalapannatti", "Kathavatthu", "Yamaka", "Patthana"],
        contents: "Systematic analysis of consciousness, mental factors, and the nature of reality",
        keyTexts: [
          "Dhammasangani - Enumeration of phenomena",
          "Vibhanga - Analysis of elements",
          "Dhatukatha - Discussion of elements",
          "Puggalapannatti - Description of individuals",
          "Kathavatthu - Points of controversy",
          "Yamaka - Pairs of questions",
          "Patthana - Conditional relations"
        ],
        significance: "Provides the theoretical framework for understanding consciousness and mental processes, essential for advanced meditation practice"
      }
    },
    significance: "The Pali Canon represents the most authentic record of the Buddha's teachings, preserved through oral tradition and later written down. It serves as the foundation for Theravada Buddhism and provides the most direct access to the historical Buddha's wisdom.",
    translations: [
      {
        name: "Pali Text Society",
        description: "Authoritative English translations",
        url: "https://www.palitext.com",
        features: ["Complete canon", "Academic quality", "Extensive notes"]
      },
      {
        name: "Wisdom Publications",
        description: "Modern accessible translations",
        url: "https://wisdomexperience.org",
        features: ["Bhikkhu Bodhi translations", "Study guides", "Commentaries"]
      }
    ],
    onlineResources: [
      {
        name: "SuttaCentral",
        url: "https://suttacentral.net",
        description: "Comprehensive online library of Buddhist texts",
        features: ["Multiple translations", "Search functionality", "Cross-references", "Audio recordings", "Mobile app", "Study guides"]
      },
      {
        name: "Access to Insight",
        url: "https://www.accesstoinsight.org",
        description: "Theravada Buddhist library and meditation archive",
        features: ["Sutta translations", "Meditation guides", "Study materials", "Commentaries", "Reading lists"]
      },
      {
        name: "Tipitaka.org",
        url: "https://tipitaka.org",
        description: "Digital Pali Canon with search capabilities",
        features: ["Pali text", "English translations", "Search tools", "Study resources", "Concordance"]
      },
      {
        name: "BuddhaNet",
        url: "https://www.buddhanet.net",
        description: "Comprehensive Buddhist information network",
        features: ["E-learning courses", "Text library", "Directory of centers", "Multimedia resources"]
      },
      {
        name: "Dharma Seed",
        url: "https://dharmaseed.org",
        description: "Audio teachings from Buddhist meditation teachers",
        features: ["Thousands of dharma talks", "Meditation instructions", "Retreat recordings", "Multiple traditions"]
      },
      {
        name: "Insight Meditation Society",
        url: "https://www.dharma.org",
        description: "Theravada meditation center with online resources",
        features: ["Meditation instructions", "Dharma talks", "Retreat information", "Study materials"]
      },
      {
        name: "Forest Sangha",
        url: "https://forestsangha.org",
        description: "Thai Forest Tradition teachings",
        features: ["Ajahn Chah teachings", "Forest tradition texts", "Monastic life", "Meditation guidance"]
      },
      {
        name: "Amaravati Buddhist Monastery",
        url: "https://amaravati.org",
        description: "Theravada monastery with extensive online library",
        features: ["Dharma talks", "Meditation guides", "Monastic life", "Study resources"]
      }
    ]
  },
  {
    id: "mahayana-sutras",
    name: "Mahayana Sutras",
    description: "A vast collection of texts that form the foundation of Mahayana Buddhism, emphasizing compassion, wisdom, and the bodhisattva path. These texts represent the evolution of Buddhist thought, expanding upon early teachings to emphasize universal compassion and the ideal of the bodhisattva who works for the liberation of all beings.",
    tradition: "Mahayana",
    language: "Sanskrit (originally), Chinese, Tibetan",
    period: "1st century BCE - 5th century CE",
    totalTexts: "Thousands of sutras across multiple collections",
    historicalContext: "Developed during the period of Buddhist expansion across Asia, reflecting the needs of lay practitioners and the development of new philosophical perspectives",
    keySchools: ["Madhyamaka", "Yogacara", "Pure Land", "Zen", "Tiantai", "Huayan"],
    keyTexts: [
      {
        name: "Heart Sutra (Prajnaparamita Hridaya)",
        description: "The essence of wisdom teachings - the most concise expression of Mahayana wisdom",
        themes: ["Emptiness", "Wisdom", "Non-duality", "Perfection of Wisdom"],
        significance: "One of the most concise and profound expressions of Mahayana wisdom, teaching the emptiness of all phenomena. This 260-character text encapsulates the essence of the Prajnaparamita literature.",
        keyPassages: [
          "Form is emptiness, emptiness is form",
          "No eye, ear, nose, tongue, body, mind",
          "No suffering, no cause of suffering, no cessation, no path"
        ],
        practice: "Recited daily in many Mahayana traditions, used as a meditation object for understanding emptiness"
      },
      {
        name: "Diamond Sutra (Vajracchedika)",
        description: "Teachings on non-attachment and the bodhisattva path",
        themes: ["Non-attachment", "Emptiness", "Bodhisattva path", "Perfection of Giving"],
        significance: "Emphasizes the importance of practicing generosity and other virtues without attachment to results. The oldest printed book in the world (868 CE).",
        keyPassages: [
          "All conditioned phenomena are like a dream, an illusion, a bubble, a shadow",
          "Subhuti, what do you think? Can the Tathagata be seen by means of the thirty-two marks?",
          "The past mind cannot be grasped, the present mind cannot be grasped, the future mind cannot be grasped"
        ],
        practice: "Used for meditation on non-attachment and the perfection of giving"
      },
      {
        name: "Lotus Sutra (Saddharma Pundarika)",
        description: "The supreme teaching of the Buddha",
        themes: ["Skillful means", "Buddha nature", "Universal salvation", "One Vehicle"],
        significance: "Teaches that all beings have the potential for Buddhahood and that the Buddha uses various methods to guide them. The most important text in East Asian Buddhism.",
        keyPassages: [
          "There is only one vehicle, not two or three",
          "All phenomena are empty of inherent existence",
          "The Buddha's lifespan is immeasurable"
        ],
        practice: "Recited in Nichiren Buddhism, used for meditation on Buddha nature"
      },
      {
        name: "Pure Land Sutras",
        description: "Teachings on Amitabha Buddha and the Western Pure Land",
        themes: ["Faith", "Rebirth", "Compassion", "Mindfulness of Buddha"],
        significance: "Describe the Pure Land of Amitabha Buddha and the practice of mindfulness of the Buddha. Foundation of Pure Land Buddhism.",
        keyTexts: [
          "Larger Sukhavativyuha Sutra",
          "Smaller Sukhavativyuha Sutra",
          "Amitayurdhyana Sutra"
        ],
        practice: "Recitation of Amitabha's name (Nianfo/Nembutsu), visualization practices"
      },
      {
        name: "Avatamsaka Sutra (Flower Garland Sutra)",
        description: "The most comprehensive expression of Mahayana cosmology",
        themes: ["Interdependence", "Cosmology", "Buddha nature", "Universal compassion"],
        significance: "Presents the most comprehensive vision of the universe and the interpenetration of all phenomena. Influential in Huayan and Zen traditions.",
        keyPassages: [
          "All phenomena are interconnected",
          "The universe is contained in a single particle",
          "The Buddha's body pervades all space"
        ],
        practice: "Meditation on interdependence and universal compassion"
      },
      {
        name: "Vimalakirti Sutra",
        description: "Teachings on lay practice and non-duality",
        themes: ["Lay practice", "Non-duality", "Skillful means", "Bodhisattva ideal"],
        significance: "Shows how lay practitioners can achieve the same realization as monastics. Emphasizes the non-dual nature of reality.",
        keyPassages: [
          "Sickness and suffering are the bodhisattva's field",
          "The mind is the field of the Buddha",
          "All phenomena are neither existent nor non-existent"
        ],
        practice: "Meditation on non-duality and skillful means"
      }
    ],
    significance: "Mahayana sutras expand upon the early teachings, emphasizing universal compassion, the bodhisattva ideal, and the ultimate goal of Buddhahood for all beings. These texts have profoundly influenced Buddhist practice across Asia.",
    onlineResources: [
      {
        name: "BuddhaNet",
        url: "https://www.buddhanet.net",
        description: "Comprehensive Buddhist information network",
        features: ["Sutra translations", "Study guides", "Multimedia resources", "Directory of centers"]
      },
      {
        name: "Digital Sanskrit Buddhist Canon",
        url: "https://www.dsbcproject.org",
        description: "Digital library of Sanskrit Buddhist texts",
        features: ["Sanskrit texts", "Translations", "Search tools", "Academic resources"]
      },
      {
        name: "Plum Village",
        url: "https://plumvillage.org",
        description: "Thich Nhat Hanh's Zen tradition resources",
        features: ["Sutra translations", "Meditation guides", "Dharma talks", "Practice materials"]
      },
      {
        name: "Zen Mountain Monastery",
        url: "https://zmm.org",
        description: "Soto Zen tradition teachings and texts",
        features: ["Zen texts", "Meditation instructions", "Dharma talks", "Study materials"]
      },
      {
        name: "Pure Land Buddhism",
        url: "https://www.purelandbuddhism.org",
        description: "Pure Land tradition resources and texts",
        features: ["Pure Land sutras", "Commentaries", "Practice guides", "Audio recitations"]
      },
      {
        name: "Nichiren Buddhism Library",
        url: "https://www.nichirenlibrary.org",
        description: "Nichiren tradition texts and commentaries",
        features: ["Lotus Sutra", "Nichiren's writings", "Commentaries", "Study guides"]
      }
    ]
  },
  {
    id: "tibetan-canon",
    name: "Tibetan Buddhist Canon",
    description: "The complete collection of Buddhist texts preserved in Tibet, including both translations from Sanskrit and indigenous Tibetan compositions. This vast collection represents the most comprehensive preservation of Mahayana and Vajrayana literature, including many texts that were lost in India.",
    tradition: "Vajrayana",
    language: "Tibetan",
    period: "7th century CE - present",
    totalTexts: "Kangyur: 1,169 texts in 108 volumes; Tengyur: 3,626 texts in 225 volumes",
    historicalContext: "Systematically compiled between the 8th and 14th centuries CE, preserving texts from the great Indian monastic universities like Nalanda and Vikramashila",
    keySchools: ["Nyingma", "Kagyu", "Sakya", "Gelug", "Jonang", "Bon"],
    structure: {
      kangyur: {
        name: "Kangyur (Buddha's Word)",
        description: "Direct teachings of the Buddha",
        sections: ["Vinaya", "Prajnaparamita", "Avatamsaka", "Ratnakuta", "Mahaparinirvana", "Tantras"],
        contents: "Translated texts considered to be the direct word of the Buddha",
        keyTexts: [
          "Prajnaparamita Sutras - Perfection of Wisdom texts",
          "Avatamsaka Sutra - Flower Garland Sutra",
          "Ratnakuta Sutra - Jewel Heap Sutra",
          "Mahaparinirvana Sutra - Great Nirvana Sutra",
          "Guhyasamaja Tantra - Secret Union Tantra",
          "Hevajra Tantra - Tantra of Hevajra",
          "Kalachakra Tantra - Wheel of Time Tantra"
        ],
        significance: "Contains the most complete collection of Mahayana sutras and Vajrayana tantras, many preserved only in Tibetan"
      },
      tengyur: {
        name: "Tengyur (Commentaries)",
        description: "Commentaries and treatises",
        sections: ["Stotras", "Tantras", "Commentaries", "Philosophical treatises", "Grammar", "Medicine"],
        contents: "Commentaries by Indian masters and original Tibetan compositions",
        keyTexts: [
          "Madhyamakavatara by Chandrakirti",
          "Bodhicharyavatara by Shantideva",
          "Abhidharmakosha by Vasubandhu",
          "Yogacarabhumishastra by Asanga",
          "Tantric commentaries by various masters",
          "Tibetan philosophical treatises"
        ],
        significance: "Provides the theoretical foundation for Tibetan Buddhist practice and philosophy"
      }
    },
    significance: "The Tibetan canon preserves many texts that were lost in India and represents the most complete collection of Mahayana and Vajrayana literature. It includes extensive commentaries and philosophical treatises that have shaped Tibetan Buddhist thought and practice.",
    onlineResources: [
      {
        name: "84000 Reading Room",
        url: "https://84000.co",
        description: "Translating the Tibetan Buddhist canon",
        features: ["English translations", "Tibetan text", "Commentaries", "Study tools"]
      },
      {
        name: "Buddhist Digital Resource Center",
        url: "https://www.tbrc.org",
        description: "Digital library of Tibetan Buddhist texts",
        features: ["Tibetan texts", "Catalog", "Research tools", "Manuscripts"]
      },
      {
        name: "Tibetan Buddhist Resource Center",
        url: "https://www.tbrc.org",
        description: "Comprehensive Tibetan Buddhist library",
        features: ["Digital texts", "Manuscripts", "Research tools", "Academic resources"]
      },
      {
        name: "Rigpa Wiki",
        url: "https://www.rigpawiki.org",
        description: "Tibetan Buddhist encyclopedia",
        features: ["Terminology", "Biographies", "Text summaries", "Study guides"]
      },
      {
        name: "Lotsawa House",
        url: "https://www.lotsawahouse.org",
        description: "Tibetan Buddhist texts and translations",
        features: ["Sutra translations", "Commentaries", "Practice texts", "Audio teachings"]
      },
      {
        name: "Buddhist Digital Archives",
        url: "https://www.buddhistdigitalarchives.org",
        description: "Digital preservation of Buddhist texts",
        features: ["Manuscripts", "Texts", "Research tools", "Academic resources"]
      }
    ]
  }
]

const studyResources = [
  {
    category: "Online Libraries",
    resources: [
      {
        name: "SuttaCentral",
        url: "https://suttacentral.net",
        description: "The most comprehensive online library of Buddhist texts",
        features: [
          "Complete Pali Canon in multiple languages",
          "Advanced search and cross-reference tools",
          "Audio recordings of suttas",
          "Study guides and commentaries",
          "Mobile app for offline reading",
          "Parallel text display",
          "Citation tools and references"
        ]
      },
      {
        name: "Access to Insight",
        url: "https://www.accesstoinsight.org",
        description: "Theravada Buddhist library with extensive study materials",
        features: [
          "Sutta translations with detailed notes",
          "Meditation instructions and guides",
          "Commentaries from respected teachers",
          "Study courses and reading lists",
          "Historical and cultural context",
          "Glossary of Pali terms",
          "Reading recommendations"
        ]
      },
      {
        name: "Tipitaka.org",
        url: "https://tipitaka.org",
        description: "Digital Pali Canon with powerful search capabilities",
        features: [
          "Original Pali text with word-by-word analysis",
          "Multiple English translations",
          "Advanced search and concordance tools",
          "Study resources and guides",
          "Cross-references and indexes",
          "Pali-English dictionary",
          "Text comparison tools"
        ]
      },
      {
        name: "Buddhist Digital Resource Center",
        url: "https://www.tbrc.org",
        description: "Digital library of Tibetan Buddhist texts",
        features: [
          "Tibetan texts and manuscripts",
          "Academic research tools",
          "Digital catalog and search",
          "Historical documents",
          "Multilingual resources",
          "Manuscript preservation",
          "Research publications"
        ]
      }
    ]
  },
  {
    category: "Educational Resources",
    resources: [
      {
        name: "BuddhaNet",
        url: "https://www.buddhanet.net",
        description: "Comprehensive Buddhist education and information network",
        features: [
          "Extensive library of Buddhist texts",
          "Educational courses and study guides",
          "Directory of Buddhist centers worldwide",
          "Multimedia resources and videos",
          "Children's Buddhist education materials",
          "E-learning modules",
          "Teacher resources"
        ]
      },
      {
        name: "84000 Reading Room",
        url: "https://84000.co",
        description: "Translating the Tibetan Buddhist canon",
        features: [
          "English translations of Tibetan texts",
          "Tibetan text with transliteration",
          "Commentaries and study guides",
          "Search and navigation tools",
          "Reading progress tracking",
          "Community discussions",
          "Translation notes"
        ]
      },
      {
        name: "Digital Sanskrit Buddhist Canon",
        url: "https://www.dsbcproject.org",
        description: "Digital library of Sanskrit Buddhist texts",
        features: [
          "Sanskrit texts with transliteration",
          "Multiple translations",
          "Search and concordance tools",
          "Academic research resources",
          "Manuscript images",
          "Bibliographic information",
          "Cross-references"
        ]
      }
    ]
  },
  {
    category: "Practice Resources",
    resources: [
      {
        name: "Dharma Seed",
        url: "https://dharmaseed.org",
        description: "Audio teachings from Buddhist meditation teachers",
        features: [
          "Thousands of dharma talks",
          "Meditation instructions",
          "Retreat recordings",
          "Multiple Buddhist traditions",
          "Free streaming and downloads",
          "Teacher profiles",
          "Topic-based collections"
        ]
      },
      {
        name: "Insight Meditation Society",
        url: "https://www.dharma.org",
        description: "Theravada meditation center with online resources",
        features: [
          "Meditation instructions and guides",
          "Dharma talks and teachings",
          "Retreat information and registration",
          "Study materials and reading lists",
          "Community resources",
          "Online courses",
          "Teacher interviews"
        ]
      },
      {
        name: "Forest Sangha",
        url: "https://forestsangha.org",
        description: "Thai Forest Tradition teachings",
        features: [
          "Ajahn Chah teachings",
          "Forest tradition texts",
          "Monastic life guidance",
          "Meditation instructions",
          "Dharma talks",
          "Monastery information",
          "Practice guidelines"
        ]
      },
      {
        name: "Amaravati Buddhist Monastery",
        url: "https://amaravati.org",
        description: "Theravada monastery with extensive online library",
        features: [
          "Dharma talks and teachings",
          "Meditation guides",
          "Monastic life information",
          "Study resources",
          "Retreat schedules",
          "Community events",
          "Practice instructions"
        ]
      }
    ]
  },
  {
    category: "Academic Resources",
    resources: [
      {
        name: "Buddhist Studies Resources",
        url: "https://www.buddhiststudies.org",
        description: "Academic resources for Buddhist studies",
        features: [
          "Scholarly articles and research papers",
          "Bibliographies and reference materials",
          "Conference proceedings",
          "Academic institutions directory",
          "Research tools and databases",
          "Publication lists",
          "Academic networks"
        ]
      },
      {
        name: "Buddhist Digital Archives",
        url: "https://www.buddhistdigitalarchives.org",
        description: "Digital preservation of Buddhist texts",
        features: [
          "Manuscript preservation",
          "Digital text collections",
          "Research tools",
          "Academic resources",
          "Preservation guidelines",
          "Collaboration opportunities",
          "Technical resources"
        ]
      },
      {
        name: "Rigpa Wiki",
        url: "https://www.rigpawiki.org",
        description: "Tibetan Buddhist encyclopedia",
        features: [
          "Terminology and definitions",
          "Biographies of masters",
          "Text summaries and commentaries",
          "Study guides and resources",
          "Historical information",
          "Practice instructions",
          "Reference materials"
        ]
      }
    ]
  },
  {
    category: "Multimedia Resources",
    resources: [
      {
        name: "BuddhaNet Audio",
        url: "https://www.buddhanet.net/audio",
        description: "Audio resources for Buddhist study",
        features: [
          "Dharma talks and lectures",
          "Meditation instructions",
          "Sutra recitations",
          "Chanting and mantras",
          "Podcasts and interviews",
          "Educational audio",
          "Practice guidance"
        ]
      },
      {
        name: "YouTube Buddhist Channels",
        url: "https://www.youtube.com",
        description: "Video teachings and presentations",
        features: [
          "Dharma talks and lectures",
          "Meditation instructions",
          "Documentary films",
          "Practice demonstrations",
          "Teacher interviews",
          "Cultural presentations",
          "Educational content"
        ]
      },
      {
        name: "Buddhist Podcasts",
        url: "https://www.buddhistpodcasts.org",
        description: "Audio teachings in podcast format",
        features: [
          "Regular dharma talks",
          "Teacher interviews",
          "Practice discussions",
          "Book reviews",
          "Community news",
          "Meditation guidance",
          "Study materials"
        ]
      }
    ]
  }
]

const quickFacts = [
  {
    category: "Historical",
    facts: [
      "The Pali Canon was first written down in Sri Lanka around 29 BCE during the Fourth Buddhist Council",
      "The Mahayana sutras began appearing around the 1st century BCE, marking a significant evolution in Buddhist thought",
      "The Tibetan canon was systematically compiled between the 8th and 14th centuries CE",
      "Buddhist texts have been translated into over 100 languages worldwide",
      "The oldest printed book in the world is the Diamond Sutra (868 CE)",
      "Buddhist texts were preserved through oral tradition for 400+ years before being written down",
      "The Chinese Buddhist canon contains over 5,000 texts in multiple editions"
    ]
  },
  {
    category: "Content",
    facts: [
      "The Pali Canon contains over 10,000 suttas across 45 volumes",
      "The Tibetan Kangyur contains 1,169 texts in 108 volumes",
      "The Tibetan Tengyur contains 3,626 texts in 225 volumes",
      "The Heart Sutra is only 260 characters in Sanskrit but contains the essence of Mahayana wisdom",
      "Buddhist texts cover topics from meditation to philosophy to monastic discipline",
      "The Dhammapada contains 423 verses of practical wisdom",
      "The Lotus Sutra is considered the supreme teaching in East Asian Buddhism"
    ]
  },
  {
    category: "Access",
    facts: [
      "Most Buddhist texts are freely available online through multiple platforms",
      "Many texts have multiple translations and commentaries available",
      "Audio versions of many texts are available for listening and chanting",
      "Study guides and courses are available for beginners and advanced practitioners",
      "Mobile apps provide offline access to complete text collections",
      "Search tools allow finding specific teachings across multiple texts",
      "Cross-references connect related teachings across different traditions"
    ]
  },
  {
    category: "Practice",
    facts: [
      "Many texts are recited daily in Buddhist communities worldwide",
      "Meditation instructions are found throughout the sutta collections",
      "Monastic discipline texts provide detailed guidelines for community life",
      "Philosophical texts support advanced meditation practice",
      "Devotional texts inspire faith and commitment to practice",
      "Commentaries provide practical guidance for understanding complex teachings",
      "Modern teachers continue to create new commentaries and study guides"
    ]
  },
  {
    category: "Languages",
    facts: [
      "Pali is the language of the Theravada canon",
      "Sanskrit was the original language of many Mahayana texts",
      "Tibetan preserves the most complete collection of Vajrayana texts",
      "Chinese translations preserve many texts lost in Sanskrit",
      "English translations are available for most major texts",
      "Many texts are available in multiple modern languages",
      "Digital tools provide access to texts in original languages with translations"
    ]
  },
  {
    category: "Traditions",
    facts: [
      "Theravada Buddhism relies primarily on the Pali Canon",
      "Mahayana Buddhism uses both early texts and Mahayana sutras",
      "Vajrayana Buddhism includes tantric texts and practices",
      "Zen Buddhism emphasizes direct experience over text study",
      "Pure Land Buddhism focuses on devotional texts and practices",
      "Nichiren Buddhism centers on the Lotus Sutra",
      "Each tradition has its own approach to studying and using texts"
    ]
  }
]

export default function BuddhistTextsPage({ params }: BuddhistTextsPageProps) {
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
        <Badge variant="secondary" className="mb-4">Buddhism</Badge>
        <h1 className="text-4xl font-bold mb-4">Buddhist Sacred Texts</h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-6">
          Explore the vast collection of Buddhist sacred texts, from the earliest teachings of the historical Buddha 
          preserved in the Pali Canon to the profound wisdom of Mahayana sutras and the comprehensive Tibetan canon. 
          Discover free access to translations, commentaries, and study resources from authoritative sources.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Badge variant="outline">
            <BookOpen className="mr-1 h-3 w-3" />
            Theravada
          </Badge>
          <Badge variant="outline">
            <ScrollText className="mr-1 h-3 w-3" />
            Mahayana
          </Badge>
          <Badge variant="outline">
            <Library className="mr-1 h-3 w-3" />
            Vajrayana
          </Badge>
          <Badge variant="outline">
            <Music className="mr-1 h-3 w-3" />
            Free Resources
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="pali-canon" className="space-y-8">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
          {buddhistCanons.map((canon) => (
            <TabsTrigger key={canon.id} value={canon.id} className="text-sm">
              {canon.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {buddhistCanons.map((canon) => (
          <TabsContent key={canon.id} value={canon.id} className="space-y-8">
            {/* Canon Overview */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">{canon.name}</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      {canon.description}
                    </CardDescription>
                  </div>
                  <Badge variant="outline">{canon.tradition}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span><strong>Language:</strong> {canon.language}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span><strong>Period:</strong> {canon.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span><strong>Tradition:</strong> {canon.tradition}</span>
                  </div>
                </div>
                
                <div className="prose dark:prose-invert max-w-none">
                  <h3>Historical Significance</h3>
                  <p>{canon.significance}</p>
                </div>
              </CardContent>
            </Card>

            {/* Structure */}
            {canon.structure && (
              <Card>
                <CardHeader>
                  <CardTitle>Structure and Organization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {Object.entries(canon.structure).map(([key, section]) => (
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

            {/* Key Texts for Mahayana */}
            {canon.keyTexts && (
              <Card>
                <CardHeader>
                  <CardTitle>Key Texts and Teachings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {canon.keyTexts.map((text) => (
                      <div key={text.name} className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-lg">{text.name}</h4>
                        <p className="text-muted-foreground mb-2">{text.description}</p>
                        <div className="flex gap-2 mb-2">
                          {text.themes.map((theme) => (
                            <Badge key={theme} variant="secondary" className="text-xs">
                              {theme}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-sm">{text.significance}</p>
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
                  {canon.translations && (
                    <div>
                      <h4 className="font-semibold mb-3">Major Translations</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {canon.translations.map((translation) => (
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
                      {canon.onlineResources.map((resource) => (
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
            Access free, authoritative resources for studying Buddhist texts, including online libraries, 
            educational materials, and practice guides from respected Buddhist organizations.
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
                <Link href={`/${params.locale}/studies/buddhist/beginner`}>
                  <Users className="mr-2 h-4 w-4" />
                  Beginner's Guide
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href={`/${params.locale}/studies/comparative/buddhism`}>
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
                <a href="https://tipitaka.org" target="_blank" rel="noopener noreferrer">
                  <Library className="mr-2 h-4 w-4" />
                  Tipitaka.org - Digital Pali Canon
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <a href="https://www.buddhanet.net" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  BuddhaNet - Buddhist Information
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <a href="https://84000.co" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  84000 - Tibetan Canon Translations
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Begin Your Buddhist Studies</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
          Explore the profound wisdom of Buddhist scriptures with free access to authoritative translations, 
          commentaries, and study resources. Whether you're interested in the foundational teachings of the Pali Canon, 
          the compassionate path of Mahayana, or the esoteric practices of Vajrayana, comprehensive resources are available 
          to support your spiritual journey.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg">
            <Link href={`/${params.locale}/studies/buddhist/beginner`}>
              <BookOpen className="mr-2 h-5 w-5" />
              Start Learning
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <a href="https://suttacentral.net" target="_blank" rel="noopener noreferrer">
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