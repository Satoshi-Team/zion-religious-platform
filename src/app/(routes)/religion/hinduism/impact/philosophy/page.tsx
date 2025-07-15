import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface PhilosophicalTradition {
  name: string
  sanskritName: string
  period: string
  regions: string[]
  description: string
  characteristics: string[]
  significance: string[]
  majorWorks: Array<{
    title: string
    sanskritTitle: string
    date: string
    description: string
    significance: string[]
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
    innovation: string[]
    theory: string[]
    teaching: string[]
    other: string[]
  }
  legacy: string
  modernRelevance: string[]
}

interface PhilosophicalSchool {
  name: string
  sanskritName: string
  category: string
  description: string
  origins: string[]
  development: string[]
  keyPractitioners: Array<{
    name: string
    sanskritName: string
    contribution: string
  }>
  characteristics: string[]
  significance: string[]
  modernApplications: string[]
}

interface PhilosophicalConcept {
  name: string
  sanskritName: string
  period: string
  description: string
  composition: Array<{
    style: string
    technique: string
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

interface HinduPhilosophyContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  philosophicalTraditions: PhilosophicalTradition[]
  philosophers: Philosopher[]
  philosophicalSchools: PhilosophicalSchool[]
  philosophicalConcepts: PhilosophicalConcept[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Hindu Philosophy | Hindu Impact",
  description: "Comprehensive exploration of Hindu philosophical traditions, schools of thought, and their lasting impact on global philosophy.",
  openGraph: {
    title: "Hindu Philosophy | Hindu Impact",
    description: "In-depth study of Hindu philosophical heritage and its influence on global thought",
    type: "website",
  },
}

const hinduPhilosophyContent: HinduPhilosophyContent = {
  introduction: `Hindu philosophy represents one of the world's oldest and most sophisticated philosophical traditions, encompassing diverse schools of thought that have evolved over millennia. From the ancient Upanishadic insights to contemporary philosophical developments, Hindu philosophy has developed unique approaches to understanding reality, consciousness, and the nature of existence. This tradition combines rigorous logical analysis with profound spiritual insights, creating systems of thought that continue to influence global philosophical discourse.`,
  timeline: {
    start: "1500 BCE",
    end: "Present",
    overview: "Hindu philosophy has evolved through various periods, from the early Vedic speculations to contemporary philosophical developments, developing sophisticated systems of thought while maintaining spiritual significance.",
    significance: [
      "Development of philosophical schools",
      "Evolution of metaphysical systems",
      "Creation of epistemological frameworks",
      "Influence on global philosophy",
      "Preservation of ancient wisdom",
      "Development of logical systems",
      "Cultural synthesis and exchange",
      "Contemporary global influence"
    ]
  },
  philosophicalTraditions: [
    {
      name: "Vedic Philosophy",
      sanskritName: "वैदिक दर्शन",
      period: "1500 BCE - 500 BCE",
      regions: [
        "India",
        "Global Hindu communities"
      ],
      description: "The foundational philosophical tradition of Hinduism, encompassing early metaphysical speculations and spiritual insights.",
      characteristics: [
        "Cosmic order (Rta)",
        "Sacred knowledge",
        "Ritual significance",
        "Metaphysical inquiry",
        "Spiritual wisdom"
      ],
      significance: [
        "Philosophical foundation",
        "Cultural preservation",
        "Spiritual guidance",
        "Historical record",
        "Metaphysical inquiry"
      ],
      majorWorks: [
        {
          title: "Upanishads",
          sanskritTitle: "उपनिषद्",
          date: "800-500 BCE",
          description: "A collection of philosophical texts exploring the nature of reality and consciousness",
          significance: [
            "Philosophical depth",
            "Spiritual wisdom",
            "Metaphysical inquiry",
            "Cultural foundation",
            "Global influence"
          ],
          influence: [
            "Hindu philosophy",
            "Global thought",
            "Spiritual traditions",
            "Philosophical inquiry",
            "Cultural expression"
          ]
        }
      ],
      influence: [
        "Global philosophy",
        "Spiritual traditions",
        "Cultural expression",
        "Metaphysical inquiry",
        "Philosophical systems"
      ]
    },
    {
      name: "Classical Philosophy",
      sanskritName: "दर्शन",
      period: "500 BCE - 1200 CE",
      regions: [
        "India",
        "Southeast Asia",
        "Global Hindu communities"
      ],
      description: "A rich tradition of systematic philosophical inquiry that developed into six major schools of thought.",
      characteristics: [
        "Systematic analysis",
        "Logical rigor",
        "Metaphysical depth",
        "Epistemological inquiry",
        "Spiritual integration"
      ],
      significance: [
        "Philosophical development",
        "Cultural preservation",
        "Logical systems",
        "Spiritual guidance",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Brahma Sutra",
          sanskritTitle: "ब्रह्मसूत्र",
          date: "400-200 BCE",
          description: "Badarayana's systematic exposition of Vedanta philosophy",
          significance: [
            "Philosophical synthesis",
            "Systematic analysis",
            "Cultural preservation",
            "Spiritual guidance",
            "Global influence"
          ],
          influence: [
            "Vedanta philosophy",
            "Global thought",
            "Spiritual traditions",
            "Philosophical systems",
            "Cultural expression"
          ]
        }
      ],
      influence: [
        "Global philosophy",
        "Spiritual traditions",
        "Cultural expression",
        "Logical systems",
        "Philosophical inquiry"
      ]
    },
    {
      name: "Modern Hindu Philosophy",
      sanskritName: "आधुनिक हिन्दू दर्शन",
      period: "1800 CE - Present",
      regions: [
        "India",
        "Global Hindu communities",
        "Academic institutions"
      ],
      description: "Contemporary philosophical developments that engage with modern thought while maintaining traditional insights.",
      characteristics: [
        "Modern synthesis",
        "Global perspective",
        "Interdisciplinary approach",
        "Cultural integration",
        "Contemporary relevance"
      ],
      significance: [
        "Modern adaptation",
        "Global influence",
        "Cultural preservation",
        "Philosophical innovation",
        "Spiritual guidance"
      ],
      majorWorks: [
        {
          title: "The Life Divine",
          sanskritTitle: "दिव्य जीवन",
          date: "1939-1940 CE",
          description: "Sri Aurobindo's comprehensive philosophical synthesis",
          significance: [
            "Modern synthesis",
            "Global influence",
            "Cultural integration",
            "Philosophical innovation",
            "Spiritual guidance"
          ],
          influence: [
            "Modern philosophy",
            "Global thought",
            "Spiritual traditions",
            "Cultural expression",
            "Philosophical systems"
          ]
        }
      ],
      influence: [
        "Global philosophy",
        "Modern thought",
        "Cultural expression",
        "Spiritual traditions",
        "Philosophical inquiry"
      ]
    }
  ],
  philosophers: [
    {
      name: "Adi Shankara",
      sanskritName: "आदि शंकर",
      period: "788-820 CE",
      tradition: "Vedanta Philosophy",
      biography: {
        origin: "Kerala",
        training: [
          "Vedic studies",
          "Philosophical analysis",
          "Spiritual practice",
          "Logical systems",
          "Traditional scholarship"
        ],
        positions: [
          "Vedanta teacher",
          "Spiritual guide",
          "Philosophical reformer"
        ],
        teachers: [
          "Govinda Bhagavatpada",
          "Traditional scholars"
        ],
        students: [
          "Numerous disciples",
          "Philosophical tradition"
        ],
        majorWorks: [
          {
            title: "Brahmasutra Bhashya",
            sanskritTitle: "ब्रह्मसूत्र भाष्य",
            date: "8th century CE",
            genre: "Philosophical Commentary",
            description: "Commentary on the Brahma Sutra establishing Advaita Vedanta",
            significance: "Systematic exposition of non-dual philosophy",
            keyFeatures: [
              "Logical analysis",
              "Metaphysical depth",
              "Spiritual wisdom",
              "Cultural synthesis",
              "Philosophical innovation"
            ]
          }
        ]
      },
      contributions: {
        philosophy: [
          "Advaita Vedanta",
          "Non-dual metaphysics",
          "Epistemological analysis",
          "Spiritual philosophy",
          "Cultural synthesis"
        ],
        innovation: [
          "Philosophical synthesis",
          "Logical systems",
          "Teaching methods",
          "Cultural integration",
          "Spiritual guidance"
        ],
        theory: [
          "Metaphysical principles",
          "Epistemological frameworks",
          "Logical analysis",
          "Spiritual wisdom",
          "Cultural values"
        ],
        teaching: [
          "Philosophical education",
          "Spiritual guidance",
          "Cultural values",
          "Logical training",
          "Metaphysical inquiry"
        ],
        other: [
          "Cultural revival",
          "Philosophical standards",
          "Spiritual guidance",
          "Cultural synthesis",
          "Global influence"
        ]
      },
      legacy: "Adi Shankara's contributions established Advaita Vedanta as a major philosophical system, combining rigorous logical analysis with profound spiritual insights.",
      modernRelevance: [
        "Philosophical study",
        "Spiritual guidance",
        "Cultural values",
        "Logical analysis",
        "Global influence"
      ]
    },
    {
      name: "Ramanuja",
      sanskritName: "रामानुज",
      period: "1017-1137 CE",
      tradition: "Vedanta Philosophy",
      biography: {
        origin: "Tamil Nadu",
        training: [
          "Vedic studies",
          "Philosophical analysis",
          "Spiritual practice",
          "Logical systems",
          "Traditional scholarship"
        ],
        positions: [
          "Vedanta teacher",
          "Spiritual guide",
          "Philosophical reformer"
        ],
        teachers: [
          "Yadava Prakasha",
          "Traditional scholars"
        ],
        students: [
          "Numerous disciples",
          "Philosophical tradition"
        ],
        majorWorks: [
          {
            title: "Sri Bhashya",
            sanskritTitle: "श्री भाष्य",
            date: "12th century CE",
            genre: "Philosophical Commentary",
            description: "Commentary on the Brahma Sutra establishing Vishishtadvaita",
            significance: "Systematic exposition of qualified non-dual philosophy",
            keyFeatures: [
              "Logical analysis",
              "Metaphysical depth",
              "Spiritual wisdom",
              "Cultural synthesis",
              "Philosophical innovation"
            ]
          }
        ]
      },
      contributions: {
        philosophy: [
          "Vishishtadvaita Vedanta",
          "Qualified non-dualism",
          "Epistemological analysis",
          "Spiritual philosophy",
          "Cultural synthesis"
        ],
        innovation: [
          "Philosophical synthesis",
          "Logical systems",
          "Teaching methods",
          "Cultural integration",
          "Spiritual guidance"
        ],
        theory: [
          "Metaphysical principles",
          "Epistemological frameworks",
          "Logical analysis",
          "Spiritual wisdom",
          "Cultural values"
        ],
        teaching: [
          "Philosophical education",
          "Spiritual guidance",
          "Cultural values",
          "Logical training",
          "Metaphysical inquiry"
        ],
        other: [
          "Cultural revival",
          "Philosophical standards",
          "Spiritual guidance",
          "Cultural synthesis",
          "Global influence"
        ]
      },
      legacy: "Ramanuja's contributions established Vishishtadvaita Vedanta as a major philosophical system, emphasizing the relationship between the individual soul and the Supreme.",
      modernRelevance: [
        "Philosophical study",
        "Spiritual guidance",
        "Cultural values",
        "Logical analysis",
        "Global influence"
      ]
    },
    {
      name: "Sri Aurobindo",
      sanskritName: "श्री अरविन्द",
      period: "1872-1950 CE",
      tradition: "Modern Hindu Philosophy",
      biography: {
        origin: "Kolkata",
        training: [
          "Western philosophy",
          "Indian philosophy",
          "Spiritual practice",
          "Yogic systems",
          "Cultural studies"
        ],
        positions: [
          "Philosopher",
          "Yogi",
          "Cultural reformer"
        ],
        teachers: [
          "Traditional scholars",
          "Spiritual masters"
        ],
        students: [
          "Numerous disciples",
          "Philosophical tradition"
        ],
        majorWorks: [
          {
            title: "The Life Divine",
            sanskritTitle: "दिव्य जीवन",
            date: "1939-1940 CE",
            genre: "Philosophical Synthesis",
            description: "Comprehensive philosophical system integrating Eastern and Western thought",
            significance: "Modern synthesis of spiritual and philosophical traditions",
            keyFeatures: [
              "Evolutionary metaphysics",
              "Integral yoga",
              "Spiritual philosophy",
              "Cultural synthesis",
              "Modern adaptation"
            ]
          }
        ]
      },
      contributions: {
        philosophy: [
          "Integral philosophy",
          "Evolutionary metaphysics",
          "Spiritual psychology",
          "Cultural synthesis",
          "Modern adaptation"
        ],
        innovation: [
          "Philosophical synthesis",
          "Yogic systems",
          "Teaching methods",
          "Cultural integration",
          "Spiritual guidance"
        ],
        theory: [
          "Metaphysical principles",
          "Psychological frameworks",
          "Evolutionary theory",
          "Spiritual wisdom",
          "Cultural values"
        ],
        teaching: [
          "Philosophical education",
          "Spiritual guidance",
          "Cultural values",
          "Yogic practice",
          "Metaphysical inquiry"
        ],
        other: [
          "Cultural revival",
          "Philosophical standards",
          "Spiritual guidance",
          "Cultural synthesis",
          "Global influence"
        ]
      },
      legacy: "Sri Aurobindo's contributions established Integral Philosophy as a modern synthesis of Eastern and Western thought, emphasizing spiritual evolution and cultural integration.",
      modernRelevance: [
        "Philosophical study",
        "Spiritual guidance",
        "Cultural values",
        "Evolutionary theory",
        "Global influence"
      ]
    },
    {
      name: "Patanjali",
      sanskritName: "पतञ्जलि",
      period: "2nd century BCE",
      tradition: "Yoga Philosophy",
      biography: {
        origin: "Ancient India",
        training: [
          "Yogic traditions",
          "Philosophical analysis",
          "Spiritual practice",
          "Textual study",
          "Traditional scholarship"
        ],
        positions: [
          "Yoga teacher",
          "Spiritual guide",
          "Philosophical systematizer"
        ],
        teachers: [
          "Traditional masters",
          "Ancient scholars"
        ],
        students: [
          "Numerous disciples",
          "Yogic tradition"
        ],
        majorWorks: [
          {
            title: "Yoga Sutras",
            sanskritTitle: "योगसूत्र",
            date: "2nd century BCE",
            genre: "Philosophical Text",
            description: "Systematic exposition of Yoga philosophy and practice",
            significance: "Foundation of classical Yoga",
            keyFeatures: [
              "Eight-limbed path",
              "Psychological analysis",
              "Spiritual methodology",
              "Philosophical depth",
              "Practical guidance"
            ]
          }
        ]
      },
      contributions: {
        philosophy: [
          "Yoga philosophy",
          "Psychological analysis",
          "Spiritual methodology",
          "Philosophical synthesis",
          "Practical guidance"
        ],
        innovation: [
          "Systematic yoga",
          "Psychological frameworks",
          "Practice methods",
          "Teaching systems",
          "Spiritual guidance"
        ],
        theory: [
          "Metaphysical principles",
          "Psychological frameworks",
          "Practice methodology",
          "Spiritual wisdom",
          "Cultural values"
        ],
        teaching: [
          "Yogic education",
          "Spiritual guidance",
          "Cultural values",
          "Practice training",
          "Philosophical inquiry"
        ],
        other: [
          "Cultural preservation",
          "Philosophical standards",
          "Spiritual guidance",
          "Cultural synthesis",
          "Global influence"
        ]
      },
      legacy: "Patanjali's contributions established classical Yoga as a systematic philosophical and practical system, combining psychological insights with spiritual methodology.",
      modernRelevance: [
        "Yogic practice",
        "Psychological well-being",
        "Spiritual guidance",
        "Cultural values",
        "Global influence"
      ]
    },
    {
      name: "Kapila",
      sanskritName: "कपिल",
      period: "6th century BCE",
      tradition: "Samkhya Philosophy",
      biography: {
        origin: "Ancient India",
        training: [
          "Traditional wisdom",
          "Philosophical analysis",
          "Spiritual practice",
          "Metaphysical inquiry",
          "Cultural heritage"
        ],
        positions: [
          "Samkhya teacher",
          "Spiritual guide",
          "Philosophical founder"
        ],
        teachers: [
          "Traditional masters",
          "Ancient scholars"
        ],
        students: [
          "Numerous disciples",
          "Philosophical tradition"
        ],
        majorWorks: [
          {
            title: "Samkhya Sutras",
            sanskritTitle: "सांख्यसूत्र",
            date: "6th century BCE",
            genre: "Philosophical Text",
            description: "Foundation of Samkhya philosophy",
            significance: "Systematic exposition of dualistic metaphysics",
            keyFeatures: [
              "Dualistic metaphysics",
              "Psychological analysis",
              "Spiritual wisdom",
              "Philosophical depth",
              "Cultural synthesis"
            ]
          }
        ]
      },
      contributions: {
        philosophy: [
          "Samkhya philosophy",
          "Dualistic metaphysics",
          "Psychological analysis",
          "Spiritual wisdom",
          "Cultural synthesis"
        ],
        innovation: [
          "Metaphysical system",
          "Psychological frameworks",
          "Philosophical methodology",
          "Teaching systems",
          "Spiritual guidance"
        ],
        theory: [
          "Metaphysical principles",
          "Psychological frameworks",
          "Spiritual methodology",
          "Philosophical depth",
          "Cultural values"
        ],
        teaching: [
          "Philosophical education",
          "Spiritual guidance",
          "Cultural values",
          "Metaphysical inquiry",
          "Psychological analysis"
        ],
        other: [
          "Cultural preservation",
          "Philosophical standards",
          "Spiritual guidance",
          "Cultural synthesis",
          "Global influence"
        ]
      },
      legacy: "Kapila's contributions established Samkhya as a major philosophical system, providing a sophisticated analysis of consciousness and matter.",
      modernRelevance: [
        "Philosophical study",
        "Psychological analysis",
        "Spiritual guidance",
        "Cultural values",
        "Global influence"
      ]
    },
    {
      name: "Gautama",
      sanskritName: "गौतम",
      period: "6th century BCE",
      tradition: "Nyaya Philosophy",
      biography: {
        origin: "Ancient India",
        training: [
          "Logical traditions",
          "Philosophical analysis",
          "Debate methodology",
          "Textual study",
          "Traditional scholarship"
        ],
        positions: [
          "Nyaya teacher",
          "Logical systematizer",
          "Philosophical founder"
        ],
        teachers: [
          "Traditional masters",
          "Ancient scholars"
        ],
        students: [
          "Numerous disciples",
          "Philosophical tradition"
        ],
        majorWorks: [
          {
            title: "Nyaya Sutras",
            sanskritTitle: "न्यायसूत्र",
            date: "6th century BCE",
            genre: "Philosophical Text",
            description: "Foundation of Nyaya philosophy",
            significance: "Systematic exposition of logic and epistemology",
            keyFeatures: [
              "Logical analysis",
              "Epistemological frameworks",
              "Debate methodology",
              "Philosophical depth",
              "Cultural synthesis"
            ]
          }
        ]
      },
      contributions: {
        philosophy: [
          "Nyaya philosophy",
          "Logical analysis",
          "Epistemological frameworks",
          "Debate methodology",
          "Cultural synthesis"
        ],
        innovation: [
          "Logical systems",
          "Epistemological methods",
          "Debate techniques",
          "Teaching systems",
          "Philosophical guidance"
        ],
        theory: [
          "Logical principles",
          "Epistemological frameworks",
          "Debate methodology",
          "Philosophical depth",
          "Cultural values"
        ],
        teaching: [
          "Logical education",
          "Philosophical guidance",
          "Cultural values",
          "Debate training",
          "Analytical inquiry"
        ],
        other: [
          "Cultural preservation",
          "Philosophical standards",
          "Logical guidance",
          "Cultural synthesis",
          "Global influence"
        ]
      },
      legacy: "Gautama's contributions established Nyaya as a major philosophical system, providing sophisticated tools for logical analysis and debate.",
      modernRelevance: [
        "Logical analysis",
        "Scientific methodology",
        "Critical thinking",
        "Cultural values",
        "Global influence"
      ]
    }
  ],
  philosophicalSchools: [
    {
      name: "Vedanta",
      sanskritName: "वेदान्त",
      category: "Metaphysics",
      description: "A comprehensive philosophical system based on the Upanishads, exploring the nature of reality and consciousness.",
      origins: [
        "Upanishadic teachings",
        "Vedic philosophy",
        "Traditional wisdom",
        "Spiritual insights",
        "Cultural heritage"
      ],
      development: [
        "Systematic analysis",
        "Logical frameworks",
        "Metaphysical inquiry",
        "Spiritual integration",
        "Cultural synthesis"
      ],
      keyPractitioners: [
        {
          name: "Badarayana",
          sanskritName: "बादरायण",
          contribution: "Systematic foundation"
        }
      ],
      characteristics: [
        "Metaphysical depth",
        "Logical rigor",
        "Spiritual wisdom",
        "Cultural synthesis",
        "Philosophical innovation"
      ],
      significance: [
        "Philosophical foundation",
        "Spiritual guidance",
        "Cultural preservation",
        "Logical systems",
        "Global influence"
      ],
      modernApplications: [
        "Philosophical study",
        "Spiritual practice",
        "Cultural understanding",
        "Logical analysis",
        "Global thought"
      ]
    },
    {
      name: "Nyaya",
      sanskritName: "न्याय",
      category: "Logic and Epistemology",
      description: "A school of philosophy focusing on logic, epistemology, and systematic reasoning.",
      origins: [
        "Ancient logical traditions",
        "Vedic reasoning",
        "Traditional debate",
        "Analytical thinking",
        "Cultural heritage"
      ],
      development: [
        "Systematic logic",
        "Epistemological frameworks",
        "Debate methodology",
        "Analytical tools",
        "Philosophical inquiry"
      ],
      keyPractitioners: [
        {
          name: "Gautama",
          sanskritName: "गौतम",
          contribution: "Foundational texts and methodology"
        }
      ],
      characteristics: [
        "Logical analysis",
        "Epistemological rigor",
        "Debate methodology",
        "Systematic reasoning",
        "Philosophical precision"
      ],
      significance: [
        "Logical foundation",
        "Analytical methods",
        "Debate tradition",
        "Philosophical inquiry",
        "Global influence"
      ],
      modernApplications: [
        "Logical analysis",
        "Scientific methodology",
        "Critical thinking",
        "Philosophical inquiry",
        "Global thought"
      ]
    },
    {
      name: "Vaisheshika",
      sanskritName: "वैशेषिक",
      category: "Atomism and Natural Philosophy",
      description: "A school focusing on atomism, natural philosophy, and systematic categorization of reality.",
      origins: [
        "Ancient natural philosophy",
        "Vedic cosmology",
        "Traditional observation",
        "Scientific inquiry",
        "Cultural heritage"
      ],
      development: [
        "Atomic theory",
        "Natural categorization",
        "Physical analysis",
        "Scientific methodology",
        "Philosophical inquiry"
      ],
      keyPractitioners: [
        {
          name: "Kanada",
          sanskritName: "कणाद",
          contribution: "Atomic theory and categorization"
        }
      ],
      characteristics: [
        "Atomic theory",
        "Natural philosophy",
        "Systematic categorization",
        "Physical analysis",
        "Scientific inquiry"
      ],
      significance: [
        "Scientific foundation",
        "Natural philosophy",
        "Analytical methods",
        "Philosophical inquiry",
        "Global influence"
      ],
      modernApplications: [
        "Scientific methodology",
        "Natural philosophy",
        "Analytical thinking",
        "Philosophical inquiry",
        "Global thought"
      ]
    },
    {
      name: "Samkhya",
      sanskritName: "सांख्य",
      category: "Metaphysics and Psychology",
      description: "A dualistic school focusing on the nature of consciousness and matter.",
      origins: [
        "Ancient metaphysics",
        "Vedic psychology",
        "Traditional wisdom",
        "Spiritual insights",
        "Cultural heritage"
      ],
      development: [
        "Metaphysical analysis",
        "Psychological frameworks",
        "Spiritual integration",
        "Philosophical inquiry",
        "Cultural synthesis"
      ],
      keyPractitioners: [
        {
          name: "Kapila",
          sanskritName: "कपिल",
          contribution: "Systematic foundation"
        }
      ],
      characteristics: [
        "Dualistic metaphysics",
        "Psychological analysis",
        "Spiritual wisdom",
        "Philosophical depth",
        "Cultural synthesis"
      ],
      significance: [
        "Metaphysical foundation",
        "Psychological insights",
        "Spiritual guidance",
        "Philosophical inquiry",
        "Global influence"
      ],
      modernApplications: [
        "Psychological analysis",
        "Spiritual practice",
        "Philosophical inquiry",
        "Cultural understanding",
        "Global thought"
      ]
    },
    {
      name: "Yoga",
      sanskritName: "योग",
      category: "Spiritual Practice and Psychology",
      description: "A school focusing on spiritual practice, psychological transformation, and liberation.",
      origins: [
        "Ancient spiritual practices",
        "Vedic psychology",
        "Traditional wisdom",
        "Spiritual insights",
        "Cultural heritage"
      ],
      development: [
        "Spiritual methodology",
        "Psychological frameworks",
        "Practice systems",
        "Philosophical inquiry",
        "Cultural synthesis"
      ],
      keyPractitioners: [
        {
          name: "Patanjali",
          sanskritName: "पतञ्जलि",
          contribution: "Systematic foundation"
        }
      ],
      characteristics: [
        "Spiritual practice",
        "Psychological transformation",
        "Systematic methodology",
        "Philosophical depth",
        "Cultural synthesis"
      ],
      significance: [
        "Spiritual foundation",
        "Psychological insights",
        "Practice systems",
        "Philosophical inquiry",
        "Global influence"
      ],
      modernApplications: [
        "Spiritual practice",
        "Psychological well-being",
        "Physical health",
        "Mental clarity",
        "Global influence"
      ]
    },
    {
      name: "Mimamsa",
      sanskritName: "मीमांसा",
      category: "Hermeneutics and Ritual Philosophy",
      description: "A school focusing on the interpretation of Vedic texts and ritual philosophy.",
      origins: [
        "Vedic interpretation",
        "Ritual traditions",
        "Traditional wisdom",
        "Textual analysis",
        "Cultural heritage"
      ],
      development: [
        "Hermeneutic methods",
        "Ritual philosophy",
        "Textual analysis",
        "Philosophical inquiry",
        "Cultural synthesis"
      ],
      keyPractitioners: [
        {
          name: "Jaimini",
          sanskritName: "जैमिनि",
          contribution: "Systematic foundation"
        }
      ],
      characteristics: [
        "Textual interpretation",
        "Ritual philosophy",
        "Hermeneutic methods",
        "Philosophical depth",
        "Cultural synthesis"
      ],
      significance: [
        "Hermeneutic foundation",
        "Ritual understanding",
        "Textual analysis",
        "Philosophical inquiry",
        "Global influence"
      ],
      modernApplications: [
        "Textual interpretation",
        "Ritual understanding",
        "Cultural analysis",
        "Philosophical inquiry",
        "Global thought"
      ]
    }
  ],
  philosophicalConcepts: [
    {
      name: "Brahman",
      sanskritName: "ब्रह्मन्",
      period: "1500 BCE - Present",
      description: "The ultimate reality, the source and ground of all existence in Hindu philosophy.",
      composition: [
        {
          style: "Metaphysical Concept",
          technique: "Philosophical Analysis",
          features: [
            "Absolute reality",
            "Transcendent being",
            "Immanent presence",
            "Universal consciousness",
            "Ultimate truth"
          ]
        }
      ],
      significance: [
        "Metaphysical foundation",
        "Spiritual wisdom",
        "Philosophical inquiry",
        "Cultural expression",
        "Global influence"
      ],
      evolution: "Developed from Vedic concepts, elaborated in Upanishads, systematized in philosophical schools",
      modernUse: [
        "Philosophical study",
        "Spiritual practice",
        "Cultural understanding",
        "Metaphysical inquiry",
        "Global thought"
      ]
    },
    {
      name: "Purusha",
      sanskritName: "पुरुष",
      period: "1500 BCE - Present",
      description: "The conscious principle, pure awareness, and the eternal self in Hindu philosophy.",
      composition: [
        {
          style: "Metaphysical Concept",
          technique: "Philosophical Analysis",
          features: [
            "Pure consciousness",
            "Eternal self",
            "Witness principle",
            "Transcendent being",
            "Spiritual essence"
          ]
        }
      ],
      significance: [
        "Metaphysical foundation",
        "Spiritual wisdom",
        "Philosophical inquiry",
        "Cultural expression",
        "Global influence"
      ],
      evolution: "Developed in Samkhya philosophy, integrated into various schools, influencing spiritual practice",
      modernUse: [
        "Philosophical study",
        "Spiritual practice",
        "Cultural understanding",
        "Metaphysical inquiry",
        "Global thought"
      ]
    },
    {
      name: "Prakriti",
      sanskritName: "प्रकृति",
      period: "1500 BCE - Present",
      description: "The material principle, nature, and the manifest world in Hindu philosophy.",
      composition: [
        {
          style: "Metaphysical Concept",
          technique: "Philosophical Analysis",
          features: [
            "Material nature",
            "Manifest world",
            "Dynamic principle",
            "Creative force",
            "Evolving reality"
          ]
        }
      ],
      significance: [
        "Metaphysical foundation",
        "Natural philosophy",
        "Philosophical inquiry",
        "Cultural expression",
        "Global influence"
      ],
      evolution: "Developed in Samkhya philosophy, integrated into various schools, influencing natural science",
      modernUse: [
        "Philosophical study",
        "Scientific inquiry",
        "Cultural understanding",
        "Metaphysical inquiry",
        "Global thought"
      ]
    },
    {
      name: "Maya",
      sanskritName: "माया",
      period: "1500 BCE - Present",
      description: "The power of illusion, creative energy, and the phenomenal world in Hindu philosophy.",
      composition: [
        {
          style: "Metaphysical Concept",
          technique: "Philosophical Analysis",
          features: [
            "Creative power",
            "Illusory nature",
            "Dynamic energy",
            "Manifestation",
            "Transformation"
          ]
        }
      ],
      significance: [
        "Metaphysical foundation",
        "Spiritual wisdom",
        "Philosophical inquiry",
        "Cultural expression",
        "Global influence"
      ],
      evolution: "Developed in Vedanta philosophy, integrated into various schools, influencing spiritual practice",
      modernUse: [
        "Philosophical study",
        "Spiritual practice",
        "Cultural understanding",
        "Metaphysical inquiry",
        "Global thought"
      ]
    }
  ],
  resources: [
    {
      title: "A History of Indian Philosophy",
      author: "Surendranath Dasgupta",
      year: "1922-1955",
      type: "Book",
      description: "Comprehensive five-volume history of Indian philosophical traditions",
      language: "English",
      level: "Advanced",
      isbn: "978-8120804081",
      amazonUrl: "https://www.amazon.com/History-Indian-Philosophy-Surendranath-Dasgupta/dp/8120804082"
    },
    {
      title: "The Essentials of Indian Philosophy",
      author: "M. Hiriyanna",
      year: "1949",
      type: "Book",
      description: "Accessible introduction to Indian philosophical systems",
      language: "English",
      level: "Intermediate",
      isbn: "978-8120813304",
      amazonUrl: "https://www.amazon.com/Essentials-Indian-Philosophy-M-Hiriyanna/dp/8120813303"
    },
    {
      title: "Indian Philosophy: A Very Short Introduction",
      author: "Sue Hamilton",
      year: "2001",
      type: "Book",
      description: "Concise overview of Indian philosophical traditions",
      language: "English",
      level: "Beginner",
      isbn: "978-0192853745",
      amazonUrl: "https://www.amazon.com/Indian-Philosophy-Very-Short-Introduction/dp/0192853740"
    },
    {
      title: "The Philosophy of the Upanishads",
      author: "Paul Deussen",
      year: "1906",
      type: "Book",
      description: "Classic study of Upanishadic philosophy",
      language: "English",
      level: "Advanced",
      isbn: "978-8120816202",
      amazonUrl: "https://www.amazon.com/Philosophy-Upanishads-Paul-Deussen/dp/8120816205"
    },
    {
      title: "Modern Indian Philosophy",
      author: "Bina Gupta",
      year: "2009",
      type: "Book",
      description: "Contemporary perspectives on Indian philosophy",
      language: "English",
      level: "Advanced",
      isbn: "978-0415482125",
      amazonUrl: "https://www.amazon.com/Modern-Indian-Philosophy-Bina-Gupta/dp/0415482125"
    }
  ]
}

export default function HinduPhilosophyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Hindu Philosophy</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{hinduPhilosophyContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {hinduPhilosophyContent.timeline.start} - {hinduPhilosophyContent.timeline.end}</p>
            <p>{hinduPhilosophyContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {hinduPhilosophyContent.timeline.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Philosophical Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Philosophical Traditions</CardTitle>
        </CardHeader>
        <CardContent>
          {hinduPhilosophyContent.philosophicalTraditions.map((tradition, index) => (
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
          {hinduPhilosophyContent.philosophers.map((philosopher, index) => (
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

      {/* Philosophical Schools */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Philosophical Schools</CardTitle>
        </CardHeader>
        <CardContent>
          {hinduPhilosophyContent.philosophicalSchools.map((school, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {school.name} ({school.sanskritName})
              </h3>
              <p className="mb-2">{school.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {school.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Applications:</h4>
                  <ul className="list-disc pl-6">
                    {school.modernApplications.map((app, idx) => (
                      <li key={idx}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Philosophical Concepts */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Philosophical Concepts</CardTitle>
        </CardHeader>
        <CardContent>
          {hinduPhilosophyContent.philosophicalConcepts.map((concept, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {concept.name} ({concept.sanskritName})
              </h3>
              <p className="mb-2">{concept.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Composition:</h4>
                  <ul className="list-disc pl-6">
                    {concept.composition.map((item, idx) => (
                      <li key={idx}>
                        <strong>{item.style}:</strong>
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
                    {concept.modernUse.map((use, idx) => (
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
            {hinduPhilosophyContent.resources.map((resource, index) => (
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
    </div>
  )
} 