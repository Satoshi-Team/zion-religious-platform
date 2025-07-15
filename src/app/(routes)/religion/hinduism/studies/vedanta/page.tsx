import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface VedantaTradition {
  name: string
  sanskritName: string
  period: string
  regions: string[]
  description: string
  characteristics: string[]
  texts: string[]
  significance: string[]
  majorWorks: Array<{
    title: string
    sanskritTitle: string
    date: string
    author: string
    description: string
    significance: string
    influence: string[]
  }>
  influence: string[]
}

interface Philosopher {
  name: string
  sanskritName: string
  period: string
  tradition: string
  biography: {
    origin: string
    training: string[]
    positions: string[]
    teachers: string[]
    students: string[]
    majorWorks: Array<{
      title: string
      sanskritTitle: string
      date: string
      genre: string
      description: string
      significance: string
      keyFeatures: string[]
    }>
  }
  contributions: {
    philosophy: string[]
    teaching: string[]
    theoretical: string[]
    innovation: string[]
    other: string[]
  }
  legacy: string
  modernRelevance: string[]
}

interface PhilosophicalConcept {
  name: string
  sanskritName: string
  category: string
  description: string
  origins: string[]
  development: string[]
  keyPhilosophers: Array<{
    name: string
    sanskritName: string
    contribution: string
  }>
  characteristics: string[]
  significance: string[]
  modernApplications: string[]
}

interface PhilosophicalMethod {
  name: string
  sanskritName: string
  period: string
  description: string
  techniques: Array<{
    method: string
    application: string
    features: string[]
  }>
  significance: string[]
  evolution: string
  modernUse: string[]
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

interface VedantaContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  vedantaTraditions: VedantaTradition[]
  philosophers: Philosopher[]
  philosophicalConcepts: PhilosophicalConcept[]
  philosophicalMethods: PhilosophicalMethod[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Vedanta Philosophy | Hindu Studies",
  description: "Comprehensive exploration of Vedanta philosophical traditions, concepts, and their lasting impact on Hindu thought.",
  openGraph: {
    title: "Vedanta Philosophy | Hindu Studies",
    description: "In-depth study of Vedanta philosophical heritage and its influence on Hindu thought",
    type: "website",
  },
}

const vedantaContent: VedantaContent = {
  introduction: `Vedanta represents one of the most profound philosophical traditions in Hinduism, emerging from the Upanishads and developing into diverse schools of thought. From the non-dualistic Advaita to the dualistic Dvaita, these traditions have contributed significantly to global philosophical discourse. These systems combine rigorous logical analysis with deep spiritual insight, offering both intellectual understanding and practical realization.`,
  timeline: {
    start: "8th Century BCE",
    end: "Present",
    overview: "Vedanta philosophy emerged from the Upanishads and developed into diverse traditions across different regions. From early formulations to systematic schools, it has evolved while maintaining its core insights.",
    significance: [
      "Development of philosophical systems",
      "Evolution of spiritual practices",
      "Creation of unique methods",
      "Influence on modern philosophy",
      "Preservation of wisdom traditions",
      "Development of regional schools",
      "Cultural synthesis and exchange",
      "Contemporary global influence"
    ]
  },
  vedantaTraditions: [
    {
      name: "Advaita Vedanta",
      sanskritName: "अद्वैत वेदान्त",
      period: "8th Century CE - Present",
      regions: [
        "India",
        "Global"
      ],
      description: "A non-dualistic philosophical tradition emphasizing the identity of the individual self (Atman) with the ultimate reality (Brahman).",
      characteristics: [
        "Non-dual realization",
        "Scriptural interpretation",
        "Logical analysis",
        "Direct experience",
        "Practical application"
      ],
      texts: [
        "Upanishads",
        "Brahma Sutras",
        "Bhagavad Gita",
        "Vivekachudamani"
      ],
      significance: [
        "Non-dual philosophy",
        "Spiritual realization",
        "Logical framework",
        "Cultural impact",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Vivekachudamani",
          sanskritTitle: "विवेकचूडामणि",
          date: "8th Century CE",
          author: "Adi Shankara",
          description: "Crest Jewel of Discrimination",
          significance: "Most influential Advaita text",
          influence: [
            "Advaita Vedanta",
            "Non-dual philosophy",
            "Spiritual practice",
            "Philosophical discourse",
            "Global Vedanta"
          ]
        }
      ],
      influence: [
        "Non-dual philosophy",
        "Modern spirituality",
        "Philosophical discourse",
        "Cultural impact",
        "Global practice"
      ]
    },
    {
      name: "Vishishtadvaita Vedanta",
      sanskritName: "विशिष्टाद्वैत वेदान्त",
      period: "11th Century CE - Present",
      regions: [
        "South India",
        "Global"
      ],
      description: "A qualified non-dualistic tradition that maintains the reality of both the individual self and the world while seeing them as attributes of Brahman.",
      characteristics: [
        "Qualified non-dualism",
        "Bhakti emphasis",
        "Scriptural interpretation",
        "Logical analysis",
        "Practical devotion"
      ],
      texts: [
        "Upanishads",
        "Brahma Sutras",
        "Bhagavad Gita",
        "Sri Bhashya"
      ],
      significance: [
        "Qualified non-dualism",
        "Devotional practice",
        "Philosophical framework",
        "Cultural impact",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Sri Bhashya",
          sanskritTitle: "श्रीभाष्य",
          date: "11th Century CE",
          author: "Ramanuja",
          description: "Commentary on Brahma Sutras",
          significance: "Foundational work of Vishishtadvaita",
          influence: [
            "Vishishtadvaita Vedanta",
            "Devotional philosophy",
            "Spiritual practice",
            "Philosophical discourse",
            "Global Vedanta"
          ]
        }
      ],
      influence: [
        "Devotional philosophy",
        "Modern spirituality",
        "Philosophical discourse",
        "Cultural impact",
        "Global practice"
      ]
    },
    {
      name: "Dvaita Vedanta",
      sanskritName: "द्वैत वेदान्त",
      period: "13th Century CE - Present",
      regions: [
        "South India",
        "Global"
      ],
      description: "A dualistic tradition that maintains the eternal distinction between the individual self, the world, and God.",
      characteristics: [
        "Dualistic philosophy",
        "Bhakti emphasis",
        "Scriptural interpretation",
        "Logical analysis",
        "Practical devotion"
      ],
      texts: [
        "Upanishads",
        "Brahma Sutras",
        "Bhagavad Gita",
        "Anu Vyakhyana"
      ],
      significance: [
        "Dualistic philosophy",
        "Devotional practice",
        "Philosophical framework",
        "Cultural impact",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Anu Vyakhyana",
          sanskritTitle: "अनुव्याख्यान",
          date: "13th Century CE",
          author: "Madhvacharya",
          description: "Detailed commentary on Brahma Sutras",
          significance: "Foundational work of Dvaita",
          influence: [
            "Dvaita Vedanta",
            "Devotional philosophy",
            "Spiritual practice",
            "Philosophical discourse",
            "Global Vedanta"
          ]
        }
      ],
      influence: [
        "Dualistic philosophy",
        "Modern spirituality",
        "Philosophical discourse",
        "Cultural impact",
        "Global practice"
      ]
    },
    {
      name: "Bhedabheda Vedanta",
      sanskritName: "भेदाभेद वेदान्त",
      period: "8th Century CE - Present",
      regions: [
        "India",
        "Global"
      ],
      description: "A tradition that maintains both difference and non-difference between the individual self and Brahman, emphasizing their simultaneous identity and distinction.",
      characteristics: [
        "Identity-in-difference",
        "Scriptural interpretation",
        "Logical analysis",
        "Direct experience",
        "Practical application"
      ],
      texts: [
        "Upanishads",
        "Brahma Sutras",
        "Bhagavad Gita",
        "Bhedabheda texts"
      ],
      significance: [
        "Identity-in-difference philosophy",
        "Spiritual realization",
        "Logical framework",
        "Cultural impact",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Bhedabheda texts",
          sanskritTitle: "भेदाभेद ग्रन्थ",
          date: "8th Century CE",
          author: "Various authors",
          description: "Foundational texts of Bhedabheda tradition",
          significance: "Key works of Bhedabheda philosophy",
          influence: [
            "Bhedabheda Vedanta",
            "Identity-in-difference philosophy",
            "Spiritual practice",
            "Philosophical discourse",
            "Global Vedanta"
          ]
        }
      ],
      influence: [
        "Identity-in-difference philosophy",
        "Modern spirituality",
        "Philosophical discourse",
        "Cultural impact",
        "Global practice"
      ]
    },
    {
      name: "Suddhadvaita Vedanta",
      sanskritName: "शुद्धाद्वैत वेदान्त",
      period: "15th Century CE - Present",
      regions: [
        "India",
        "Global"
      ],
      description: "A pure non-dualistic tradition that maintains the absolute identity of the individual self with Brahman, emphasizing the reality of the world as Brahman's manifestation.",
      characteristics: [
        "Pure non-dualism",
        "Bhakti emphasis",
        "Scriptural interpretation",
        "Logical analysis",
        "Practical devotion"
      ],
      texts: [
        "Upanishads",
        "Brahma Sutras",
        "Bhagavad Gita",
        "Subodhini"
      ],
      significance: [
        "Pure non-dualism",
        "Devotional practice",
        "Philosophical framework",
        "Cultural impact",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Subodhini",
          sanskritTitle: "सुबोधिनी",
          date: "15th Century CE",
          author: "Vallabha",
          description: "Commentary on Bhagavata Purana",
          significance: "Foundational work of Suddhadvaita",
          influence: [
            "Suddhadvaita Vedanta",
            "Devotional philosophy",
            "Spiritual practice",
            "Philosophical discourse",
            "Global Vedanta"
          ]
        }
      ],
      influence: [
        "Pure non-dualism",
        "Modern spirituality",
        "Philosophical discourse",
        "Cultural impact",
        "Global practice"
      ]
    }
  ],
  philosophers: [
    {
      name: "Adi Shankara",
      sanskritName: "आदि शंकर",
      period: "788-820 CE",
      tradition: "Advaita",
      biography: {
        origin: "Kerala",
        training: [
          "Early Vedic studies",
          "Advaita philosophy",
          "Scriptural interpretation",
          "Literary composition"
        ],
        positions: [
          "Philosopher",
          "Teacher",
          "Writer"
        ],
        teachers: [
          "Govinda Bhagavatpada",
          "Various traditional scholars"
        ],
        students: [
          "Numerous disciples",
          "Established Advaita tradition"
        ],
        majorWorks: [
          {
            title: "Vivekachudamani",
            sanskritTitle: "विवेकचूडामणि",
            date: "8th Century CE",
            genre: "Philosophical treatise",
            description: "Crest Jewel of Discrimination",
            significance: "Most influential Advaita text",
            keyFeatures: [
              "Non-dual philosophy",
              "Spiritual practice",
              "Logical analysis",
              "Cultural context",
              "Global influence"
            ]
          }
        ]
      },
      contributions: {
        philosophy: [
          "Non-dual philosophy",
          "Scriptural interpretation",
          "Logical analysis",
          "Cultural context",
          "Global influence"
        ],
        teaching: [
          "Philosophical instruction",
          "Textual commentary",
          "Practical guidance",
          "Cultural preservation",
          "Global dialogue"
        ],
        theoretical: [
          "Philosophical theory",
          "Analytical framework",
          "Practical insight",
          "Cultural synthesis",
          "Global perspective"
        ],
        innovation: [
          "Philosophical methods",
          "Teaching approach",
          "Textual organization",
          "Cultural adaptation",
          "Global impact"
        ],
        other: [
          "Educational work",
          "Monastic development",
          "Cultural preservation",
          "Philosophical dialogue",
          "International influence"
        ]
      },
      legacy: "Adi Shankara's work has been crucial in developing Advaita Vedanta and establishing the foundation of systematic philosophical practice.",
      modernRelevance: [
        "Non-dual philosophy",
        "Spiritual practice",
        "Comparative studies",
        "Global Vedanta",
        "Cultural impact"
      ]
    },
    {
      name: "Ramanuja",
      sanskritName: "रामानुज",
      period: "1017-1137 CE",
      tradition: "Vishishtadvaita",
      biography: {
        origin: "Tamil Nadu",
        training: [
          "Early Vedic studies",
          "Vishishtadvaita philosophy",
          "Scriptural interpretation",
          "Literary composition"
        ],
        positions: [
          "Philosopher",
          "Teacher",
          "Writer"
        ],
        teachers: [
          "Yadava Prakasha",
          "Various traditional scholars"
        ],
        students: [
          "Numerous disciples",
          "Established Vishishtadvaita tradition"
        ],
        majorWorks: [
          {
            title: "Sri Bhashya",
            sanskritTitle: "श्रीभाष्य",
            date: "11th Century CE",
            genre: "Philosophical treatise",
            description: "Commentary on Brahma Sutras",
            significance: "Foundational work of Vishishtadvaita",
            keyFeatures: [
              "Qualified non-dualism",
              "Devotional practice",
              "Logical analysis",
              "Cultural context",
              "Global influence"
            ]
          }
        ]
      },
      contributions: {
        philosophy: [
          "Qualified non-dualism",
          "Scriptural interpretation",
          "Logical analysis",
          "Cultural context",
          "Global influence"
        ],
        teaching: [
          "Philosophical instruction",
          "Textual commentary",
          "Practical guidance",
          "Cultural preservation",
          "Global dialogue"
        ],
        theoretical: [
          "Philosophical theory",
          "Analytical framework",
          "Practical insight",
          "Cultural synthesis",
          "Global perspective"
        ],
        innovation: [
          "Philosophical methods",
          "Teaching approach",
          "Textual organization",
          "Cultural adaptation",
          "Global impact"
        ],
        other: [
          "Educational work",
          "Monastic development",
          "Cultural preservation",
          "Philosophical dialogue",
          "International influence"
        ]
      },
      legacy: "Ramanuja's work has been crucial in developing Vishishtadvaita Vedanta and establishing the foundation of devotional philosophical practice.",
      modernRelevance: [
        "Devotional philosophy",
        "Spiritual practice",
        "Comparative studies",
        "Global Vedanta",
        "Cultural impact"
      ]
    },
    {
      name: "Madhvacharya",
      sanskritName: "मध्वाचार्य",
      period: "1238-1317 CE",
      tradition: "Dvaita",
      biography: {
        origin: "Karnataka",
        training: [
          "Early Vedic studies",
          "Dvaita philosophy",
          "Scriptural interpretation",
          "Literary composition"
        ],
        positions: [
          "Philosopher",
          "Teacher",
          "Writer"
        ],
        teachers: [
          "Achyutapreksha",
          "Various traditional scholars"
        ],
        students: [
          "Numerous disciples",
          "Established Dvaita tradition"
        ],
        majorWorks: [
          {
            title: "Anu Vyakhyana",
            sanskritTitle: "अनुव्याख्यान",
            date: "13th Century CE",
            genre: "Philosophical treatise",
            description: "Detailed commentary on Brahma Sutras",
            significance: "Foundational work of Dvaita",
            keyFeatures: [
              "Dualistic philosophy",
              "Devotional practice",
              "Logical analysis",
              "Cultural context",
              "Global influence"
            ]
          }
        ]
      },
      contributions: {
        philosophy: [
          "Dualistic philosophy",
          "Scriptural interpretation",
          "Logical analysis",
          "Cultural context",
          "Global influence"
        ],
        teaching: [
          "Philosophical instruction",
          "Textual commentary",
          "Practical guidance",
          "Cultural preservation",
          "Global dialogue"
        ],
        theoretical: [
          "Philosophical theory",
          "Analytical framework",
          "Practical insight",
          "Cultural synthesis",
          "Global perspective"
        ],
        innovation: [
          "Philosophical methods",
          "Teaching approach",
          "Textual organization",
          "Cultural adaptation",
          "Global impact"
        ],
        other: [
          "Educational work",
          "Monastic development",
          "Cultural preservation",
          "Philosophical dialogue",
          "International influence"
        ]
      },
      legacy: "Madhvacharya's work has been crucial in developing Dvaita Vedanta and establishing the foundation of dualistic philosophical practice.",
      modernRelevance: [
        "Dualistic philosophy",
        "Spiritual practice",
        "Comparative studies",
        "Global Vedanta",
        "Cultural impact"
      ]
    },
    {
      name: "Vallabha",
      sanskritName: "वल्लभ",
      period: "1479-1531 CE",
      tradition: "Suddhadvaita",
      biography: {
        origin: "South India",
        training: [
          "Early Vedic studies",
          "Suddhadvaita philosophy",
          "Scriptural interpretation",
          "Literary composition"
        ],
        positions: [
          "Philosopher",
          "Teacher",
          "Writer"
        ],
        teachers: [
          "Various traditional scholars"
        ],
        students: [
          "Numerous disciples",
          "Established Suddhadvaita tradition"
        ],
        majorWorks: [
          {
            title: "Subodhini",
            sanskritTitle: "सुबोधिनी",
            date: "15th Century CE",
            genre: "Philosophical treatise",
            description: "Commentary on Bhagavata Purana",
            significance: "Foundational work of Suddhadvaita",
            keyFeatures: [
              "Pure non-dualism",
              "Devotional practice",
              "Logical analysis",
              "Cultural context",
              "Global influence"
            ]
          }
        ]
      },
      contributions: {
        philosophy: [
          "Pure non-dualism",
          "Scriptural interpretation",
          "Logical analysis",
          "Cultural context",
          "Global influence"
        ],
        teaching: [
          "Philosophical instruction",
          "Textual commentary",
          "Practical guidance",
          "Cultural preservation",
          "Global dialogue"
        ],
        theoretical: [
          "Philosophical theory",
          "Analytical framework",
          "Practical insight",
          "Cultural synthesis",
          "Global perspective"
        ],
        innovation: [
          "Philosophical methods",
          "Teaching approach",
          "Textual organization",
          "Cultural adaptation",
          "Global impact"
        ],
        other: [
          "Educational work",
          "Monastic development",
          "Cultural preservation",
          "Philosophical dialogue",
          "International influence"
        ]
      },
      legacy: "Vallabha's work has been crucial in developing Suddhadvaita Vedanta and establishing the foundation of pure non-dualistic philosophical practice.",
      modernRelevance: [
        "Pure non-dualism",
        "Spiritual practice",
        "Comparative studies",
        "Global Vedanta",
        "Cultural impact"
      ]
    },
    {
      name: "Nimbarka",
      sanskritName: "निम्बार्क",
      period: "12th Century CE",
      tradition: "Dvaitadvaita",
      biography: {
        origin: "South India",
        training: [
          "Early Vedic studies",
          "Dvaitadvaita philosophy",
          "Scriptural interpretation",
          "Literary composition"
        ],
        positions: [
          "Philosopher",
          "Teacher",
          "Writer"
        ],
        teachers: [
          "Various traditional scholars"
        ],
        students: [
          "Numerous disciples",
          "Established Dvaitadvaita tradition"
        ],
        majorWorks: [
          {
            title: "Vedanta-Parijata-Saurabha",
            sanskritTitle: "वेदान्तपारिजातसौरभ",
            date: "12th Century CE",
            genre: "Philosophical treatise",
            description: "Commentary on Brahma Sutras",
            significance: "Foundational work of Dvaitadvaita",
            keyFeatures: [
              "Dual-non-dual philosophy",
              "Devotional practice",
              "Logical analysis",
              "Cultural context",
              "Global influence"
            ]
          }
        ]
      },
      contributions: {
        philosophy: [
          "Dual-non-dual philosophy",
          "Scriptural interpretation",
          "Logical analysis",
          "Cultural context",
          "Global influence"
        ],
        teaching: [
          "Philosophical instruction",
          "Textual commentary",
          "Practical guidance",
          "Cultural preservation",
          "Global dialogue"
        ],
        theoretical: [
          "Philosophical theory",
          "Analytical framework",
          "Practical insight",
          "Cultural synthesis",
          "Global perspective"
        ],
        innovation: [
          "Philosophical methods",
          "Teaching approach",
          "Textual organization",
          "Cultural adaptation",
          "Global impact"
        ],
        other: [
          "Educational work",
          "Monastic development",
          "Cultural preservation",
          "Philosophical dialogue",
          "International influence"
        ]
      },
      legacy: "Nimbarka's work has been crucial in developing Dvaitadvaita Vedanta and establishing the foundation of dual-non-dual philosophical practice.",
      modernRelevance: [
        "Dual-non-dual philosophy",
        "Spiritual practice",
        "Comparative studies",
        "Global Vedanta",
        "Cultural impact"
      ]
    }
  ],
  philosophicalConcepts: [
    {
      name: "Brahman",
      sanskritName: "ब्रह्मन्",
      category: "Ultimate Reality",
      description: "The absolute, infinite, and eternal reality that is the source and ground of all existence.",
      origins: [
        "Upanishads",
        "Vedantic tradition",
        "Early philosophical development"
      ],
      development: [
        "Early formulations",
        "Vedantic elaboration",
        "Regional interpretations",
        "Modern applications"
      ],
      keyPhilosophers: [
        {
          name: "Adi Shankara",
          sanskritName: "आदि शंकर",
          contribution: "Non-dual interpretation"
        }
      ],
      characteristics: [
        "Absolute reality",
        "Infinite nature",
        "Eternal existence",
        "Source of all",
        "Ultimate truth"
      ],
      significance: [
        "Philosophical foundation",
        "Spiritual realization",
        "Metaphysical understanding",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "Philosophical discourse",
        "Spiritual practice",
        "Comparative studies",
        "Cultural analysis",
        "Global dialogue"
      ]
    },
    {
      name: "Atman",
      sanskritName: "आत्मन्",
      category: "Self",
      description: "The true self or consciousness that is identical with Brahman in Advaita and related to Brahman in other traditions.",
      origins: [
        "Upanishads",
        "Vedantic tradition",
        "Early philosophical development"
      ],
      development: [
        "Early formulations",
        "Vedantic elaboration",
        "Regional interpretations",
        "Modern applications"
      ],
      keyPhilosophers: [
        {
          name: "Adi Shankara",
          sanskritName: "आदि शंकर",
          contribution: "Non-dual interpretation"
        }
      ],
      characteristics: [
        "True self",
        "Consciousness",
        "Eternal nature",
        "Divine essence",
        "Spiritual reality"
      ],
      significance: [
        "Self-realization",
        "Spiritual practice",
        "Philosophical understanding",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "Self-inquiry",
        "Spiritual practice",
        "Comparative studies",
        "Cultural analysis",
        "Global dialogue"
      ]
    },
    {
      name: "Maya",
      sanskritName: "माया",
      category: "Illusion",
      description: "The power of illusion that creates the appearance of multiplicity and duality in the world.",
      origins: [
        "Upanishads",
        "Vedantic tradition",
        "Early philosophical development"
      ],
      development: [
        "Early formulations",
        "Vedantic elaboration",
        "Regional interpretations",
        "Modern applications"
      ],
      keyPhilosophers: [
        {
          name: "Adi Shankara",
          sanskritName: "आदि शंकर",
          contribution: "Systematic formulation"
        }
      ],
      characteristics: [
        "Illusory power",
        "World appearance",
        "Dualistic perception",
        "Creative energy",
        "Spiritual ignorance"
      ],
      significance: [
        "World understanding",
        "Spiritual practice",
        "Philosophical insight",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "World understanding",
        "Spiritual practice",
        "Comparative studies",
        "Cultural analysis",
        "Global dialogue"
      ]
    },
    {
      name: "Karma",
      sanskritName: "कर्म",
      category: "Action and Consequence",
      description: "The universal law of cause and effect that governs all actions and their consequences, both in this life and across lifetimes.",
      origins: [
        "Upanishads",
        "Vedantic tradition",
        "Early philosophical development"
      ],
      development: [
        "Early formulations",
        "Vedantic elaboration",
        "Regional interpretations",
        "Modern applications"
      ],
      keyPhilosophers: [
        {
          name: "Various",
          sanskritName: "विविध",
          contribution: "Systematic formulation"
        }
      ],
      characteristics: [
        "Universal law",
        "Cause and effect",
        "Moral responsibility",
        "Spiritual growth",
        "Liberation path"
      ],
      significance: [
        "Ethical framework",
        "Spiritual practice",
        "Philosophical insight",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "Ethical living",
        "Spiritual practice",
        "Personal growth",
        "Cultural analysis",
        "Global dialogue"
      ]
    },
    {
      name: "Moksha",
      sanskritName: "मोक्ष",
      category: "Liberation",
      description: "The ultimate goal of human life, representing liberation from the cycle of birth and death, and realization of one's true nature.",
      origins: [
        "Upanishads",
        "Vedantic tradition",
        "Early philosophical development"
      ],
      development: [
        "Early formulations",
        "Vedantic elaboration",
        "Regional interpretations",
        "Modern applications"
      ],
      keyPhilosophers: [
        {
          name: "Various",
          sanskritName: "विविध",
          contribution: "Systematic formulation"
        }
      ],
      characteristics: [
        "Liberation",
        "Self-realization",
        "Eternal bliss",
        "Freedom from suffering",
        "Ultimate goal"
      ],
      significance: [
        "Spiritual goal",
        "Philosophical aim",
        "Life purpose",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "Spiritual practice",
        "Personal growth",
        "Philosophical inquiry",
        "Cultural analysis",
        "Global dialogue"
      ]
    }
  ],
  philosophicalMethods: [
    {
      name: "Neti Neti",
      sanskritName: "नेति नेति",
      period: "Ancient to Present",
      description: "A method of negation used to realize the true nature of the self by eliminating what it is not.",
      techniques: [
        {
          method: "Negation",
          application: "Self-realization",
          features: [
            "Not this",
            "Not that",
            "Beyond concepts",
            "Direct experience",
            "Ultimate truth"
          ]
        }
      ],
      significance: [
        "Self-realization",
        "Truth discovery",
        "Philosophical insight",
        "Cultural preservation",
        "Global influence"
      ],
      evolution: "Developed from early Upanishadic methods, modern versions incorporate contemporary philosophical approaches",
      modernUse: [
        "Self-inquiry",
        "Philosophical discourse",
        "Spiritual practice",
        "Cultural analysis",
        "Global dialogue"
      ]
    },
    {
      name: "Sravana Manana Nididhyasana",
      sanskritName: "श्रवण मनन निदिध्यासन",
      period: "Ancient to Present",
      description: "A threefold method of study, reflection, and meditation for realizing the truth of Vedanta.",
      techniques: [
        {
          method: "Threefold practice",
          application: "Truth realization",
          features: [
            "Listening",
            "Reflection",
            "Meditation",
            "Direct experience",
            "Ultimate realization"
          ]
        }
      ],
      significance: [
        "Truth realization",
        "Spiritual practice",
        "Philosophical insight",
        "Cultural preservation",
        "Global influence"
      ],
      evolution: "Developed from early Vedantic methods, modern versions incorporate contemporary philosophical approaches",
      modernUse: [
        "Philosophical study",
        "Spiritual practice",
        "Truth realization",
        "Cultural analysis",
        "Global dialogue"
      ]
    },
    {
      name: "Jnana Yoga",
      sanskritName: "ज्ञान योग",
      period: "Ancient to Present",
      description: "The path of knowledge and wisdom, emphasizing intellectual understanding and direct realization of the truth.",
      techniques: [
        {
          method: "Knowledge path",
          application: "Truth realization",
          features: [
            "Study",
            "Reflection",
            "Meditation",
            "Direct experience",
            "Ultimate realization"
          ]
        }
      ],
      significance: [
        "Truth realization",
        "Spiritual practice",
        "Philosophical insight",
        "Cultural preservation",
        "Global influence"
      ],
      evolution: "Developed from early Vedantic methods, modern versions incorporate contemporary philosophical approaches",
      modernUse: [
        "Philosophical study",
        "Spiritual practice",
        "Truth realization",
        "Cultural analysis",
        "Global dialogue"
      ]
    },
    {
      name: "Bhakti Yoga",
      sanskritName: "भक्ति योग",
      period: "Ancient to Present",
      description: "The path of devotion and love, emphasizing emotional connection and surrender to the divine.",
      techniques: [
        {
          method: "Devotional practice",
          application: "Divine realization",
          features: [
            "Devotion",
            "Surrender",
            "Love",
            "Service",
            "Divine union"
          ]
        }
      ],
      significance: [
        "Divine realization",
        "Spiritual practice",
        "Emotional connection",
        "Cultural preservation",
        "Global influence"
      ],
      evolution: "Developed from early devotional traditions, modern versions incorporate contemporary spiritual approaches",
      modernUse: [
        "Devotional practice",
        "Spiritual growth",
        "Divine connection",
        "Cultural analysis",
        "Global dialogue"
      ]
    }
  ],
  resources: [
    {
      title: "The Upanishads",
      author: "Eknath Easwaran",
      year: "2007",
      type: "Book",
      description: "Comprehensive translation and commentary on the principal Upanishads",
      language: "English",
      level: "Intermediate",
      isbn: "978-1586380212",
      amazonUrl: "https://www.amazon.com/Upanishads-Classic-Indian-Philosophy/dp/1586380214"
    },
    {
      title: "Vedanta: Heart of Hinduism",
      author: "Hans Torwesten",
      year: "1991",
      type: "Book",
      description: "Introduction to Vedanta philosophy and its influence on Hindu thought",
      language: "English",
      level: "Beginner",
      isbn: "978-0802132628",
      amazonUrl: "https://www.amazon.com/Vedanta-Heart-Hinduism-Hans-Torwesten/dp/0802132629"
    },
    {
      title: "The Crest Jewel of Discrimination",
      author: "Adi Shankara",
      year: "1970",
      type: "Book",
      description: "Classic text of Advaita Vedanta with commentary",
      language: "English",
      level: "Advanced",
      isbn: "978-0877735778",
      amazonUrl: "https://www.amazon.com/Crest-Jewel-Discrimination-Vivekachudamani/dp/0877735775"
    }
  ]
}

export default function VedantaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Vedanta Philosophy</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{vedantaContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {vedantaContent.timeline.start} - {vedantaContent.timeline.end}</p>
            <p>{vedantaContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {vedantaContent.timeline.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vedanta Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Vedanta Traditions</CardTitle>
        </CardHeader>
        <CardContent>
          {vedantaContent.vedantaTraditions.map((tradition, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {tradition.name} ({tradition.sanskritName})
              </h3>
              <p className="mb-2">{tradition.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {tradition.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-6">
                    {tradition.significance.map((sig, idx) => (
                      <li key={idx}>{sig}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Philosophers */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notable Philosophers</CardTitle>
        </CardHeader>
        <CardContent>
          {vedantaContent.philosophers.map((philosopher, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {philosopher.name} ({philosopher.sanskritName})
              </h3>
              <p className="mb-2">Period: {philosopher.period}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Contributions:</h4>
                  <ul className="list-disc pl-6">
                    {Object.entries(philosopher.contributions).map(([category, items]) => (
                      <li key={category}>
                        <strong>{category}:</strong>
                        <ul className="list-disc pl-6">
                          {items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Legacy:</h4>
                  <p>{philosopher.legacy}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Philosophical Concepts */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Philosophical Concepts</CardTitle>
        </CardHeader>
        <CardContent>
          {vedantaContent.philosophicalConcepts.map((concept, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {concept.name} ({concept.sanskritName})
              </h3>
              <p className="mb-2">{concept.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {concept.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Applications:</h4>
                  <ul className="list-disc pl-6">
                    {concept.modernApplications.map((app, idx) => (
                      <li key={idx}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Philosophical Methods */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Philosophical Methods</CardTitle>
        </CardHeader>
        <CardContent>
          {vedantaContent.philosophicalMethods.map((method, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {method.name} ({method.sanskritName})
              </h3>
              <p className="mb-2">{method.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Techniques:</h4>
                  <ul className="list-disc pl-6">
                    {method.techniques.map((item, idx) => (
                      <li key={idx}>
                        <strong>{item.method}:</strong>
                        <ul className="list-disc pl-6">
                          {item.features.map((feature, featureIdx) => (
                            <li key={featureIdx}>{feature}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Use:</h4>
                  <ul className="list-disc pl-6">
                    {method.modernUse.map((use, idx) => (
                      <li key={idx}>{use}</li>
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
            {vedantaContent.resources.map((resource, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h3 className="font-semibold">{resource.title}</h3>
                <p>Author: {resource.author}</p>
                <p>Year: {resource.year}</p>
                <p>Type: {resource.type}</p>
                <p>Description: {resource.description}</p>
                <p>Level: {resource.level}</p>
                {resource.isbn && <p>ISBN: {resource.isbn}</p>}
                {resource.amazonUrl && (
                  <Link href={resource.amazonUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="mt-2">Purchase on Amazon</Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Further Reading CTA */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Explore More Vedanta Philosophy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-lg">
              Discover more about Vedanta philosophy, its history, and its influence on modern thought.
            </p>
            <Link href="/religion/hinduism/studies/yoga">
              <Button size="lg" className="mt-4">
                Explore Yoga Philosophy
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 