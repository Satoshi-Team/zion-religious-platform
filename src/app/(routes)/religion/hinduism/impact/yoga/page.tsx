import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface YogaTradition {
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

interface Yogi {
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
    practice: string[]
    innovation: string[]
    theory: string[]
    teaching: string[]
    other: string[]
  }
  legacy: string
  modernRelevance: string[]
}

interface YogaPractice {
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

interface YogaConcept {
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

interface HinduYogaContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  yogaTraditions: YogaTradition[]
  yogis: Yogi[]
  yogaPractices: YogaPractice[]
  yogaConcepts: YogaConcept[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Hindu Yoga | Hindu Impact",
  description: "Comprehensive exploration of Hindu yoga traditions, practices, and their lasting impact on global wellness.",
  openGraph: {
    title: "Hindu Yoga | Hindu Impact",
    description: "In-depth study of Hindu yoga heritage and its influence on global wellness",
    type: "website",
  },
}

const hinduYogaContent: HinduYogaContent = {
  introduction: `Hindu yoga represents one of the world's most comprehensive systems of physical, mental, and spiritual development. From the ancient Vedic practices to contemporary global yoga movements, Hindu yoga has evolved into diverse traditions that combine physical postures, breathing techniques, meditation, and philosophical insights. This tradition has profoundly influenced global wellness practices while maintaining its spiritual essence and philosophical depth.`,
  timeline: {
    start: "3000 BCE",
    end: "Present",
    overview: "Hindu yoga has evolved through various periods, from early Vedic practices to contemporary global yoga movements, developing sophisticated systems of practice while maintaining spiritual significance.",
    significance: [
      "Development of yoga traditions",
      "Evolution of practice systems",
      "Creation of philosophical frameworks",
      "Influence on global wellness",
      "Preservation of ancient wisdom",
      "Development of teaching methods",
      "Cultural synthesis and exchange",
      "Contemporary global influence"
    ]
  },
  yogaTraditions: [
    {
      name: "Classical Yoga",
      sanskritName: "राजयोग",
      period: "500 BCE - 500 CE",
      regions: [
        "India",
        "Global yoga communities"
      ],
      description: "The systematic yoga tradition codified by Patanjali, encompassing the eight-limbed path of yoga.",
      characteristics: [
        "Eight-limbed path",
        "Systematic practice",
        "Philosophical foundation",
        "Spiritual methodology",
        "Psychological insights"
      ],
      significance: [
        "Yogic foundation",
        "Spiritual guidance",
        "Psychological wisdom",
        "Cultural preservation",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Yoga Sutras",
          sanskritTitle: "योगसूत्र",
          date: "2nd century BCE",
          description: "Patanjali's systematic exposition of yoga philosophy and practice",
          significance: [
            "Philosophical depth",
            "Practical guidance",
            "Spiritual wisdom",
            "Cultural foundation",
            "Global influence"
          ],
          influence: [
            "Yoga practice",
            "Global wellness",
            "Spiritual traditions",
            "Philosophical inquiry",
            "Cultural expression"
          ]
        }
      ],
      influence: [
        "Global yoga",
        "Spiritual traditions",
        "Cultural expression",
        "Wellness practices",
        "Philosophical systems"
      ]
    },
    {
      name: "Hatha Yoga",
      sanskritName: "हठयोग",
      period: "900 CE - Present",
      regions: [
        "India",
        "Global yoga communities"
      ],
      description: "A tradition focusing on physical postures, breathing techniques, and energy practices.",
      characteristics: [
        "Physical postures",
        "Breathing techniques",
        "Energy practices",
        "Meditation methods",
        "Health benefits"
      ],
      significance: [
        "Physical development",
        "Health promotion",
        "Energy cultivation",
        "Spiritual preparation",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Hatha Yoga Pradipika",
          sanskritTitle: "हठयोग प्रदीपिका",
          date: "15th century CE",
          description: "Svatmarama's comprehensive guide to Hatha Yoga practice",
          significance: [
            "Practical guidance",
            "Health benefits",
            "Energy practices",
            "Cultural preservation",
            "Global influence"
          ],
          influence: [
            "Modern yoga",
            "Global wellness",
            "Physical fitness",
            "Health practices",
            "Cultural expression"
          ]
        }
      ],
      influence: [
        "Modern yoga",
        "Physical fitness",
        "Health practices",
        "Energy work",
        "Global wellness"
      ]
    },
    {
      name: "Bhakti Yoga",
      sanskritName: "भक्तियोग",
      period: "500 CE - Present",
      regions: [
        "India",
        "Global yoga communities"
      ],
      description: "A tradition focusing on devotion, love, and spiritual connection.",
      characteristics: [
        "Devotional practice",
        "Emotional expression",
        "Spiritual connection",
        "Cultural integration",
        "Heart-centered approach"
      ],
      significance: [
        "Spiritual development",
        "Emotional healing",
        "Cultural preservation",
        "Community building",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Bhagavad Gita",
          sanskritTitle: "भगवद्गीता",
          date: "500-200 BCE",
          description: "Krishna's teachings on Bhakti Yoga and spiritual practice",
          significance: [
            "Spiritual wisdom",
            "Devotional guidance",
            "Cultural foundation",
            "Philosophical depth",
            "Global influence"
          ],
          influence: [
            "Spiritual practice",
            "Global yoga",
            "Cultural expression",
            "Philosophical inquiry",
            "Devotional traditions"
          ]
        }
      ],
      influence: [
        "Spiritual practice",
        "Cultural expression",
        "Devotional traditions",
        "Community building",
        "Global yoga"
      ]
    },
    {
      name: "Karma Yoga",
      sanskritName: "कर्मयोग",
      period: "500 BCE - Present",
      regions: [
        "India",
        "Global yoga communities"
      ],
      description: "A tradition focusing on selfless action and service as a path to spiritual liberation.",
      characteristics: [
        "Selfless action",
        "Service to others",
        "Detachment from results",
        "Ethical conduct",
        "Spiritual growth"
      ],
      significance: [
        "Practical spirituality",
        "Social engagement",
        "Ethical foundation",
        "Cultural preservation",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Bhagavad Gita",
          sanskritTitle: "भगवद्गीता",
          date: "500-200 BCE",
          description: "Krishna's teachings on Karma Yoga and spiritual practice",
          significance: [
            "Practical wisdom",
            "Ethical guidance",
            "Spiritual foundation",
            "Cultural preservation",
            "Global influence"
          ],
          influence: [
            "Spiritual practice",
            "Global yoga",
            "Cultural expression",
            "Ethical conduct",
            "Social engagement"
          ]
        }
      ],
      influence: [
        "Spiritual practice",
        "Social service",
        "Ethical conduct",
        "Cultural expression",
        "Global yoga"
      ]
    },
    {
      name: "Jnana Yoga",
      sanskritName: "ज्ञानयोग",
      period: "500 BCE - Present",
      regions: [
        "India",
        "Global yoga communities"
      ],
      description: "A tradition focusing on knowledge, wisdom, and intellectual inquiry as a path to liberation.",
      characteristics: [
        "Intellectual inquiry",
        "Self-inquiry",
        "Philosophical study",
        "Discrimination",
        "Spiritual wisdom"
      ],
      significance: [
        "Philosophical depth",
        "Intellectual tradition",
        "Spiritual inquiry",
        "Cultural preservation",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Vivekachudamani",
          sanskritTitle: "विवेकचूडामणि",
          date: "8th century CE",
          description: "Adi Shankara's treatise on Jnana Yoga and self-realization",
          significance: [
            "Philosophical depth",
            "Spiritual wisdom",
            "Intellectual guidance",
            "Cultural preservation",
            "Global influence"
          ],
          influence: [
            "Philosophical inquiry",
            "Spiritual practice",
            "Cultural expression",
            "Intellectual tradition",
            "Global yoga"
          ]
        }
      ],
      influence: [
        "Philosophical inquiry",
        "Spiritual practice",
        "Intellectual tradition",
        "Cultural expression",
        "Global yoga"
      ]
    },
    {
      name: "Tantra Yoga",
      sanskritName: "तन्त्रयोग",
      period: "500 CE - Present",
      regions: [
        "India",
        "Global yoga communities"
      ],
      description: "A tradition focusing on energy practices, ritual, and the transformation of consciousness.",
      characteristics: [
        "Energy practices",
        "Ritual methods",
        "Consciousness transformation",
        "Sacred texts",
        "Esoteric teachings"
      ],
      significance: [
        "Energy work",
        "Ritual tradition",
        "Spiritual transformation",
        "Cultural preservation",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Shiva Sutras",
          sanskritTitle: "शिवसूत्र",
          date: "9th century CE",
          description: "Vasugupta's exposition of Kashmir Shaivism and Tantra",
          significance: [
            "Philosophical depth",
            "Spiritual wisdom",
            "Ritual guidance",
            "Cultural preservation",
            "Global influence"
          ],
          influence: [
            "Tantric practice",
            "Spiritual tradition",
            "Cultural expression",
            "Energy work",
            "Global yoga"
          ]
        }
      ],
      influence: [
        "Tantric practice",
        "Energy work",
        "Ritual tradition",
        "Cultural expression",
        "Global yoga"
      ]
    }
  ],
  yogis: [
    {
      name: "Patanjali",
      sanskritName: "पतञ्जलि",
      period: "2nd century BCE",
      tradition: "Classical Yoga",
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
            description: "Systematic exposition of yoga philosophy and practice",
            significance: "Foundation of classical yoga",
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
        practice: [
          "Eight-limbed path",
          "Meditation methods",
          "Ethical guidelines",
          "Spiritual practices",
          "Practical techniques"
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
      legacy: "Patanjali's contributions established classical yoga as a systematic philosophical and practical system, combining psychological insights with spiritual methodology.",
      modernRelevance: [
        "Yogic practice",
        "Psychological well-being",
        "Spiritual guidance",
        "Cultural values",
        "Global influence"
      ]
    },
    {
      name: "Swami Vivekananda",
      sanskritName: "स्वामी विवेकानन्द",
      period: "1863-1902 CE",
      tradition: "Modern Yoga",
      biography: {
        origin: "Kolkata",
        training: [
          "Traditional yoga",
          "Western philosophy",
          "Spiritual practice",
          "Cultural studies",
          "Global perspectives"
        ],
        positions: [
          "Yoga teacher",
          "Spiritual leader",
          "Cultural ambassador"
        ],
        teachers: [
          "Ramakrishna Paramahamsa",
          "Traditional masters"
        ],
        students: [
          "Global disciples",
          "Modern yoga tradition"
        ],
        majorWorks: [
          {
            title: "Raja Yoga",
            sanskritTitle: "राजयोग",
            date: "1896 CE",
            genre: "Yoga Text",
            description: "Modern exposition of classical yoga philosophy and practice",
            significance: "Bridge between traditional and modern yoga",
            keyFeatures: [
              "Modern synthesis",
              "Practical guidance",
              "Philosophical depth",
              "Cultural integration",
              "Global perspective"
            ]
          }
        ]
      },
      contributions: {
        practice: [
          "Modern yoga",
          "Global teaching",
          "Cultural integration",
          "Spiritual practice",
          "Practical techniques"
        ],
        innovation: [
          "Global yoga",
          "Modern synthesis",
          "Teaching methods",
          "Cultural exchange",
          "Spiritual guidance"
        ],
        theory: [
          "Modern philosophy",
          "Cultural synthesis",
          "Practice methodology",
          "Spiritual wisdom",
          "Global values"
        ],
        teaching: [
          "Global education",
          "Spiritual guidance",
          "Cultural values",
          "Practice training",
          "Philosophical inquiry"
        ],
        other: [
          "Cultural exchange",
          "Global standards",
          "Spiritual guidance",
          "Cultural synthesis",
          "World influence"
        ]
      },
      legacy: "Swami Vivekananda's contributions established modern yoga as a global phenomenon, bridging traditional wisdom with contemporary practice.",
      modernRelevance: [
        "Global yoga",
        "Cultural exchange",
        "Spiritual guidance",
        "Modern practice",
        "World influence"
      ]
    },
    {
      name: "B.K.S. Iyengar",
      sanskritName: "बी.के.एस. आयंगर",
      period: "1918-2014 CE",
      tradition: "Modern Yoga",
      biography: {
        origin: "Bellur",
        training: [
          "Traditional yoga",
          "Asana practice",
          "Teaching methodology",
          "Physical culture",
          "Global perspectives"
        ],
        positions: [
          "Yoga teacher",
          "Author",
          "Global ambassador"
        ],
        teachers: [
          "T. Krishnamacharya",
          "Traditional masters"
        ],
        students: [
          "Global practitioners",
          "Modern yoga tradition"
        ],
        majorWorks: [
          {
            title: "Light on Yoga",
            sanskritTitle: "योगदीपिका",
            date: "1966 CE",
            genre: "Yoga Text",
            description: "Comprehensive guide to yoga postures and practice",
            significance: "Foundation of modern yoga practice",
            keyFeatures: [
              "Posture alignment",
              "Practice methodology",
              "Teaching systems",
              "Cultural integration",
              "Global perspective"
            ]
          }
        ]
      },
      contributions: {
        practice: [
          "Alignment-based yoga",
          "Prop usage",
          "Teaching methodology",
          "Practice systems",
          "Physical culture"
        ],
        innovation: [
          "Modern yoga",
          "Alignment principles",
          "Teaching methods",
          "Practice tools",
          "Global standards"
        ],
        theory: [
          "Alignment principles",
          "Practice methodology",
          "Teaching systems",
          "Physical culture",
          "Global values"
        ],
        teaching: [
          "Global education",
          "Practice guidance",
          "Cultural values",
          "Teaching training",
          "Physical inquiry"
        ],
        other: [
          "Cultural exchange",
          "Global standards",
          "Practice guidance",
          "Cultural synthesis",
          "World influence"
        ]
      },
      legacy: "B.K.S. Iyengar's contributions established modern yoga as a systematic practice, emphasizing alignment, precision, and accessibility.",
      modernRelevance: [
        "Global yoga",
        "Physical culture",
        "Practice guidance",
        "Modern practice",
        "World influence"
      ]
    },
    {
      name: "T. Krishnamacharya",
      sanskritName: "टी. कृष्णमाचार्य",
      period: "1888-1989 CE",
      tradition: "Modern Yoga",
      biography: {
        origin: "Mysore",
        training: [
          "Traditional yoga",
          "Vedic studies",
          "Philosophical analysis",
          "Physical culture",
          "Global perspectives"
        ],
        positions: [
          "Yoga teacher",
          "Scholar",
          "Cultural ambassador"
        ],
        teachers: [
          "Traditional masters",
          "Vedic scholars"
        ],
        students: [
          "B.K.S. Iyengar",
          "Pattabhi Jois",
          "T.K.V. Desikachar",
          "Indra Devi"
        ],
        majorWorks: [
          {
            title: "Yoga Makaranda",
            sanskritTitle: "योग मकरन्द",
            date: "1934 CE",
            genre: "Yoga Text",
            description: "Comprehensive treatise on yoga practice and philosophy",
            significance: "Foundation of modern yoga tradition",
            keyFeatures: [
              "Practice methodology",
              "Philosophical depth",
              "Teaching systems",
              "Cultural integration",
              "Global perspective"
            ]
          }
        ]
      },
      contributions: {
        practice: [
          "Viniyoga",
          "Ashtanga yoga",
          "Teaching methodology",
          "Practice systems",
          "Physical culture"
        ],
        innovation: [
          "Modern yoga",
          "Practice systems",
          "Teaching methods",
          "Cultural integration",
          "Global standards"
        ],
        theory: [
          "Practice methodology",
          "Philosophical synthesis",
          "Teaching systems",
          "Physical culture",
          "Global values"
        ],
        teaching: [
          "Global education",
          "Practice guidance",
          "Cultural values",
          "Teaching training",
          "Physical inquiry"
        ],
        other: [
          "Cultural exchange",
          "Global standards",
          "Practice guidance",
          "Cultural synthesis",
          "World influence"
        ]
      },
      legacy: "T. Krishnamacharya's contributions established modern yoga as a comprehensive system, influencing numerous contemporary yoga traditions.",
      modernRelevance: [
        "Global yoga",
        "Physical culture",
        "Practice guidance",
        "Modern practice",
        "World influence"
      ]
    },
    {
      name: "Paramahansa Yogananda",
      sanskritName: "परमहंस योगानन्द",
      period: "1893-1952 CE",
      tradition: "Modern Yoga",
      biography: {
        origin: "Gorakhpur",
        training: [
          "Traditional yoga",
          "Spiritual practice",
          "Kriya yoga",
          "Cultural studies",
          "Global perspectives"
        ],
        positions: [
          "Yoga teacher",
          "Spiritual leader",
          "Cultural ambassador"
        ],
        teachers: [
          "Swami Yukteswar",
          "Traditional masters"
        ],
        students: [
          "Global practitioners",
          "Modern yoga tradition"
        ],
        majorWorks: [
          {
            title: "Autobiography of a Yogi",
            sanskritTitle: "योगी की आत्मकथा",
            date: "1946 CE",
            genre: "Spiritual Autobiography",
            description: "Classic spiritual autobiography and introduction to yoga",
            significance: "Bridge between East and West",
            keyFeatures: [
              "Spiritual wisdom",
              "Cultural integration",
              "Practice guidance",
              "Philosophical depth",
              "Global perspective"
            ]
          }
        ]
      },
      contributions: {
        practice: [
          "Kriya yoga",
          "Meditation",
          "Spiritual practice",
          "Teaching systems",
          "Cultural integration"
        ],
        innovation: [
          "Global yoga",
          "Spiritual synthesis",
          "Teaching methods",
          "Cultural exchange",
          "Global standards"
        ],
        theory: [
          "Spiritual philosophy",
          "Practice methodology",
          "Teaching systems",
          "Cultural synthesis",
          "Global values"
        ],
        teaching: [
          "Global education",
          "Spiritual guidance",
          "Cultural values",
          "Practice training",
          "Philosophical inquiry"
        ],
        other: [
          "Cultural exchange",
          "Global standards",
          "Spiritual guidance",
          "Cultural synthesis",
          "World influence"
        ]
      },
      legacy: "Paramahansa Yogananda's contributions established yoga as a global spiritual practice, bridging Eastern wisdom with Western culture.",
      modernRelevance: [
        "Global yoga",
        "Spiritual practice",
        "Cultural exchange",
        "Modern practice",
        "World influence"
      ]
    }
  ],
  yogaPractices: [
    {
      name: "Asana",
      sanskritName: "आसन",
      category: "Physical Practice",
      description: "Physical postures and positions that promote health, strength, and flexibility.",
      origins: [
        "Ancient yoga",
        "Traditional practice",
        "Physical culture",
        "Spiritual preparation",
        "Cultural heritage"
      ],
      development: [
        "Posture refinement",
        "Health benefits",
        "Physical culture",
        "Modern adaptation",
        "Global practice"
      ],
      keyPractitioners: [
        {
          name: "B.K.S. Iyengar",
          sanskritName: "बी.के.एस. आयंगर",
          contribution: "Modern systematization"
        }
      ],
      characteristics: [
        "Physical alignment",
        "Breath integration",
        "Mindful movement",
        "Health benefits",
        "Spiritual preparation"
      ],
      significance: [
        "Physical health",
        "Mental well-being",
        "Spiritual preparation",
        "Cultural expression",
        "Global influence"
      ],
      modernApplications: [
        "Physical fitness",
        "Health promotion",
        "Stress reduction",
        "Mental clarity",
        "Global wellness"
      ]
    },
    {
      name: "Pranayama",
      sanskritName: "प्राणायाम",
      category: "Breathing Practice",
      description: "Breathing techniques that regulate energy and promote physical and mental well-being.",
      origins: [
        "Ancient yoga",
        "Traditional practice",
        "Energy work",
        "Spiritual preparation",
        "Cultural heritage"
      ],
      development: [
        "Technique refinement",
        "Health benefits",
        "Energy cultivation",
        "Modern adaptation",
        "Global practice"
      ],
      keyPractitioners: [
        {
          name: "Swami Ramdev",
          sanskritName: "स्वामी रामदेव",
          contribution: "Modern popularization"
        }
      ],
      characteristics: [
        "Breath control",
        "Energy regulation",
        "Mental focus",
        "Health benefits",
        "Spiritual preparation"
      ],
      significance: [
        "Energy management",
        "Mental clarity",
        "Physical health",
        "Spiritual practice",
        "Global influence"
      ],
      modernApplications: [
        "Stress management",
        "Health promotion",
        "Mental focus",
        "Energy work",
        "Global wellness"
      ]
    },
    {
      name: "Meditation",
      sanskritName: "ध्यान",
      category: "Mental Practice",
      description: "Mental practices that cultivate awareness, concentration, and spiritual insight.",
      origins: [
        "Ancient yoga",
        "Traditional practice",
        "Spiritual inquiry",
        "Mental culture",
        "Cultural heritage"
      ],
      development: [
        "Technique refinement",
        "Mental benefits",
        "Spiritual integration",
        "Modern adaptation",
        "Global practice"
      ],
      keyPractitioners: [
        {
          name: "Swami Sivananda",
          sanskritName: "स्वामी शिवानन्द",
          contribution: "Modern systematization"
        }
      ],
      characteristics: [
        "Mental focus",
        "Awareness cultivation",
        "Spiritual insight",
        "Peace of mind",
        "Inner transformation"
      ],
      significance: [
        "Mental well-being",
        "Spiritual growth",
        "Inner peace",
        "Cultural expression",
        "Global influence"
      ],
      modernApplications: [
        "Stress reduction",
        "Mental clarity",
        "Spiritual practice",
        "Personal growth",
        "Global wellness"
      ]
    },
    {
      name: "Bandha",
      sanskritName: "बन्ध",
      category: "Energy Practice",
      description: "Energy locks that regulate the flow of prana in the body.",
      origins: [
        "Ancient yoga",
        "Traditional practice",
        "Energy work",
        "Spiritual preparation",
        "Cultural heritage"
      ],
      development: [
        "Technique refinement",
        "Energy regulation",
        "Health benefits",
        "Modern adaptation",
        "Global practice"
      ],
      keyPractitioners: [
        {
          name: "Swami Satyananda",
          sanskritName: "स्वामी सत्यानन्द",
          contribution: "Modern systematization"
        }
      ],
      characteristics: [
        "Energy regulation",
        "Physical benefits",
        "Mental focus",
        "Spiritual preparation",
        "Health promotion"
      ],
      significance: [
        "Energy management",
        "Physical health",
        "Mental clarity",
        "Spiritual practice",
        "Global influence"
      ],
      modernApplications: [
        "Energy work",
        "Health promotion",
        "Mental focus",
        "Physical well-being",
        "Global wellness"
      ]
    },
    {
      name: "Mudra",
      sanskritName: "मुद्रा",
      category: "Gesture Practice",
      description: "Hand and body gestures that influence energy flow and consciousness.",
      origins: [
        "Ancient yoga",
        "Traditional practice",
        "Energy work",
        "Spiritual preparation",
        "Cultural heritage"
      ],
      development: [
        "Gesture refinement",
        "Energy regulation",
        "Health benefits",
        "Modern adaptation",
        "Global practice"
      ],
      keyPractitioners: [
        {
          name: "Swami Satyananda",
          sanskritName: "स्वामी सत्यानन्द",
          contribution: "Modern systematization"
        }
      ],
      characteristics: [
        "Energy regulation",
        "Mental focus",
        "Spiritual connection",
        "Physical benefits",
        "Health promotion"
      ],
      significance: [
        "Energy management",
        "Mental clarity",
        "Spiritual practice",
        "Physical health",
        "Global influence"
      ],
      modernApplications: [
        "Energy work",
        "Mental focus",
        "Spiritual practice",
        "Physical well-being",
        "Global wellness"
      ]
    },
    {
      name: "Kriya",
      sanskritName: "क्रिया",
      category: "Purification Practice",
      description: "Cleansing techniques that purify the body and mind.",
      origins: [
        "Ancient yoga",
        "Traditional practice",
        "Purification methods",
        "Health practices",
        "Cultural heritage"
      ],
      development: [
        "Technique refinement",
        "Health benefits",
        "Purification methods",
        "Modern adaptation",
        "Global practice"
      ],
      keyPractitioners: [
        {
          name: "Swami Satyananda",
          sanskritName: "स्वामी सत्यानन्द",
          contribution: "Modern systematization"
        }
      ],
      characteristics: [
        "Body purification",
        "Health promotion",
        "Mental clarity",
        "Physical benefits",
        "Spiritual preparation"
      ],
      significance: [
        "Health promotion",
        "Mental clarity",
        "Physical well-being",
        "Spiritual practice",
        "Global influence"
      ],
      modernApplications: [
        "Health practices",
        "Mental focus",
        "Physical well-being",
        "Spiritual preparation",
        "Global wellness"
      ]
    }
  ],
  yogaConcepts: [
    {
      name: "Prana",
      sanskritName: "प्राण",
      period: "3000 BCE - Present",
      description: "The vital life force energy that animates all living beings.",
      composition: [
        {
          style: "Energetic Concept",
          technique: "Yogic Analysis",
          features: [
            "Life force",
            "Energy flow",
            "Vital breath",
            "Spiritual essence",
            "Universal power"
          ]
        }
      ],
      significance: [
        "Energetic foundation",
        "Health promotion",
        "Spiritual practice",
        "Cultural expression",
        "Global influence"
      ],
      evolution: "Developed in ancient yoga, integrated into various traditions, influencing modern wellness",
      modernUse: [
        "Energy work",
        "Health practices",
        "Spiritual practice",
        "Wellness approaches",
        "Global influence"
      ]
    },
    {
      name: "Chakras",
      sanskritName: "चक्र",
      period: "3000 BCE - Present",
      description: "Energy centers in the subtle body that regulate physical, mental, and spiritual functions.",
      composition: [
        {
          style: "Energetic Concept",
          technique: "Yogic Analysis",
          features: [
            "Energy centers",
            "Psychic functions",
            "Spiritual development",
            "Physical health",
            "Mental well-being"
          ]
        }
      ],
      significance: [
        "Energetic foundation",
        "Health promotion",
        "Spiritual practice",
        "Cultural expression",
        "Global influence"
      ],
      evolution: "Developed in tantric yoga, integrated into various traditions, influencing modern wellness",
      modernUse: [
        "Energy work",
        "Health practices",
        "Spiritual practice",
        "Wellness approaches",
        "Global influence"
      ]
    },
    {
      name: "Kundalini",
      sanskritName: "कुण्डलिनी",
      period: "3000 BCE - Present",
      description: "The dormant spiritual energy that can be awakened through yoga practice.",
      composition: [
        {
          style: "Energetic Concept",
          technique: "Yogic Analysis",
          features: [
            "Spiritual energy",
            "Awakening process",
            "Transformation",
            "Enlightenment",
            "Divine power"
          ]
        }
      ],
      significance: [
        "Spiritual foundation",
        "Transformation",
        "Enlightenment",
        "Cultural expression",
        "Global influence"
      ],
      evolution: "Developed in tantric yoga, integrated into various traditions, influencing spiritual practice",
      modernUse: [
        "Spiritual practice",
        "Personal transformation",
        "Energy work",
        "Wellness approaches",
        "Global influence"
      ]
    }
  ],
  resources: [
    {
      title: "Light on Yoga",
      author: "B.K.S. Iyengar",
      year: "1966",
      type: "Book",
      description: "Comprehensive guide to yoga postures and practice",
      language: "English",
      level: "Intermediate",
      isbn: "978-0007107001",
      amazonUrl: "https://www.amazon.com/Light-Yoga-B-K-S-Iyengar/dp/0007107005"
    },
    {
      title: "The Heart of Yoga",
      author: "T.K.V. Desikachar",
      year: "1995",
      type: "Book",
      description: "Developing a personal practice",
      language: "English",
      level: "Beginner",
      isbn: "978-0892817648",
      amazonUrl: "https://www.amazon.com/Heart-Yoga-Developing-Personal-Practice/dp/0892817648"
    },
    {
      title: "The Yoga Sutras of Patanjali",
      author: "Sri Swami Satchidananda",
      year: "1978",
      type: "Book",
      description: "Translation and commentary on the Yoga Sutras",
      language: "English",
      level: "Advanced",
      isbn: "978-1938477072",
      amazonUrl: "https://www.amazon.com/Yoga-Sutras-Patanjali-Swami-Satchidananda/dp/1938477071"
    },
    {
      title: "Autobiography of a Yogi",
      author: "Paramahansa Yogananda",
      year: "1946",
      type: "Book",
      description: "Classic spiritual autobiography",
      language: "English",
      level: "Intermediate",
      isbn: "978-1565892125",
      amazonUrl: "https://www.amazon.com/Autobiography-Yogi-Paramahansa-Yogananda/dp/1565892127"
    },
    {
      title: "The Science of Yoga",
      author: "William J. Broad",
      year: "2012",
      type: "Book",
      description: "The risks and rewards of yoga practice",
      language: "English",
      level: "Intermediate",
      isbn: "978-1451641424",
      amazonUrl: "https://www.amazon.com/Science-Yoga-Risks-Rewards-Practice/dp/1451641425"
    }
  ]
}

export default function HinduYogaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Hindu Yoga</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{hinduYogaContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {hinduYogaContent.timeline.start} - {hinduYogaContent.timeline.end}</p>
            <p>{hinduYogaContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {hinduYogaContent.timeline.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Yoga Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Yoga Traditions</CardTitle>
        </CardHeader>
        <CardContent>
          {hinduYogaContent.yogaTraditions.map((tradition, index) => (
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

      {/* Yogis */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notable Yogis</CardTitle>
        </CardHeader>
        <CardContent>
          {hinduYogaContent.yogis.map((yogi, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {yogi.name} ({yogi.sanskritName})
              </h3>
              <p className="mb-2">Period: {yogi.period}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Contributions:</h4>
                  <ul className="list-disc pl-6">
                    {Object.entries(yogi.contributions).map(([category, items]) => (
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
                  <p>{yogi.legacy}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Yoga Practices */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Yoga Practices</CardTitle>
        </CardHeader>
        <CardContent>
          {hinduYogaContent.yogaPractices.map((practice, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {practice.name} ({practice.sanskritName})
              </h3>
              <p className="mb-2">{practice.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {practice.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Applications:</h4>
                  <ul className="list-disc pl-6">
                    {practice.modernApplications.map((app, idx) => (
                      <li key={idx}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Yoga Concepts */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Yoga Concepts</CardTitle>
        </CardHeader>
        <CardContent>
          {hinduYogaContent.yogaConcepts.map((concept, index) => (
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
            {hinduYogaContent.resources.map((resource, index) => (
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