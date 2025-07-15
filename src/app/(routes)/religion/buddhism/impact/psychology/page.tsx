import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface PsychologicalTradition {
  name: string
  sanskritName: string
  paliName: string
  period: string
  regions: string[]
  description: string
  characteristics: string[]
  texts: string[]
  significance: string[]
  majorWorks: Array<{
    title: string
    sanskritTitle: string
    paliTitle: string
    date: string
    author: string
    description: string
    significance: string
    influence: string[]
  }>
  influence: string[]
}

interface Psychologist {
  name: string
  sanskritName: string
  paliName: string
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
      paliTitle: string
      date: string
      genre: string
      description: string
      significance: string
      keyFeatures: string[]
    }>
  }
  contributions: {
    psychological: string[]
    therapeutic: string[]
    theoretical: string[]
    innovation: string[]
    other: string[]
  }
  legacy: string
  modernRelevance: string[]
}

interface PsychologicalConcept {
  name: string
  sanskritName: string
  paliName: string
  category: string
  description: string
  origins: string[]
  development: string[]
  keyThinkers: Array<{
    name: string
    sanskritName: string
    paliName: string
    contribution: string
  }>
  characteristics: string[]
  significance: string[]
  modernApplications: string[]
}

interface TherapeuticMethod {
  name: string
  sanskritName: string
  paliName: string
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

interface BuddhistPsychologyContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  psychologicalTraditions: PsychologicalTradition[]
  psychologists: Psychologist[]
  psychologicalConcepts: PsychologicalConcept[]
  therapeuticMethods: TherapeuticMethod[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Buddhist Psychology | Buddhist Impact",
  description: "Comprehensive exploration of Buddhist psychological traditions, concepts, and their lasting impact on modern psychology.",
  openGraph: {
    title: "Buddhist Psychology | Buddhist Impact",
    description: "In-depth study of Buddhist psychological heritage and its influence on modern psychological practices",
    type: "website",
  },
}

const buddhistPsychologyContent: BuddhistPsychologyContent = {
  introduction: `Buddhist psychology represents a sophisticated understanding of the human mind and consciousness that has evolved over centuries. From the early Abhidharma analysis of mental states to contemporary applications in psychotherapy, these traditions have contributed significantly to modern psychology. These psychological systems combine rigorous analysis with practical therapeutic applications, offering both theoretical insights and practical methods for mental well-being.`,
  timeline: {
    start: "5th Century BCE",
    end: "Present",
    overview: "Buddhist psychology emerged with the teachings of the Buddha and developed into diverse traditions across different regions. From early analytical systems to complex psychological frameworks, it has evolved while maintaining its practical orientation.",
    significance: [
      "Development of psychological systems",
      "Evolution of therapeutic methods",
      "Creation of unique concepts",
      "Influence on modern psychology",
      "Preservation of wisdom traditions",
      "Development of regional schools",
      "Cultural synthesis and exchange",
      "Contemporary global influence"
    ]
  },
  psychologicalTraditions: [
    {
      name: "Abhidharma Psychology",
      sanskritName: "अभिधर्म",
      paliName: "Abhidhamma",
      period: "3rd Century BCE - Present",
      regions: [
        "India",
        "Sri Lanka",
        "Southeast Asia"
      ],
      description: "A sophisticated psychological tradition that developed from early Buddhist teachings, providing detailed analysis of mental states and consciousness.",
      characteristics: [
        "Mental state analysis",
        "Consciousness mapping",
        "Causal relationships",
        "Systematic categorization",
        "Practical application"
      ],
      texts: [
        "Abhidharma-kośa",
        "Dhammasaṅgaṇi",
        "Vibhaṅga",
        "Dhātukathā",
        "Puggalapaññatti"
      ],
      significance: [
        "Psychological synthesis",
        "Mental state analysis",
        "Therapeutic foundation",
        "Ethical framework",
        "Meditative insight"
      ],
      majorWorks: [
        {
          title: "Abhidharma-kośa",
          sanskritTitle: "अभिधर्मकोश",
          paliTitle: "Abhidhammakosa",
          date: "4th-5th Century CE",
          author: "Vasubandhu",
          description: "Treasury of Abhidharma, comprehensive psychological treatise",
          significance: "Most influential Abhidharma text",
          influence: [
            "Buddhist psychology",
            "Mental state analysis",
            "Therapeutic methods",
            "Ethical thought",
            "Global psychology"
          ]
        }
      ],
      influence: [
        "Theravāda Buddhism",
        "Modern psychology",
        "Psychotherapy",
        "Mindfulness",
        "Global thought"
      ]
    },
    {
      name: "Yogācāra Psychology",
      sanskritName: "योगाचार",
      paliName: "Yogācāra",
      period: "4th-7th Century CE",
      regions: [
        "India",
        "China",
        "Japan",
        "Tibet"
      ],
      description: "A sophisticated psychological tradition focusing on consciousness and mental processes, emphasizing the role of mind in creating experience.",
      characteristics: [
        "Consciousness analysis",
        "Mental transformation",
        "Store consciousness",
        "Mental factors",
        "Meditative insight"
      ],
      texts: [
        "Yogācārabhūmi-śāstra",
        "Saṃdhinirmocana-sūtra",
        "Laṅkāvatāra-sūtra",
        "Mahāyāna-saṃgraha"
      ],
      significance: [
        "Consciousness studies",
        "Mental transformation",
        "Therapeutic methods",
        "Meditative practice",
        "Philosophical insight"
      ],
      majorWorks: [
        {
          title: "Yogācārabhūmi-śāstra",
          sanskritTitle: "योगाचारभूमिशास्त्र",
          paliTitle: "Yogācārabhūmi",
          date: "4th Century CE",
          author: "Asaṅga",
          description: "Comprehensive treatise on consciousness and mental processes",
          significance: "Foundational work of Yogācāra psychology",
          influence: [
            "Consciousness studies",
            "Mental transformation",
            "Therapeutic methods",
            "Meditative practice",
            "Global psychology"
          ]
        }
      ],
      influence: [
        "Mahāyāna Buddhism",
        "Modern psychology",
        "Consciousness studies",
        "Therapeutic methods",
        "Global thought"
      ]
    },
    {
      name: "Theravāda Psychology",
      sanskritName: "स्थविरवाद",
      paliName: "Theravāda",
      period: "3rd Century BCE - Present",
      regions: [
        "Sri Lanka",
        "Myanmar",
        "Thailand",
        "Cambodia"
      ],
      description: "A systematic psychological tradition focusing on the analysis of mental states and their relationship to suffering and liberation.",
      characteristics: [
        "Mental state analysis",
        "Causal relationships",
        "Meditative insight",
        "Practical application",
        "Ethical framework"
      ],
      texts: [
        "Abhidhamma Piṭaka",
        "Visuddhimagga",
        "Abhidhammattha-saṅgaha",
        "Dhammasaṅgaṇi"
      ],
      significance: [
        "Mental state analysis",
        "Therapeutic methods",
        "Meditative practice",
        "Ethical framework",
        "Cultural preservation"
      ],
      majorWorks: [
        {
          title: "Visuddhimagga",
          sanskritTitle: "विशुद्धिमार्ग",
          paliTitle: "Visuddhimagga",
          date: "5th Century CE",
          author: "Buddhaghosa",
          description: "Path of Purification, comprehensive psychological treatise",
          significance: "Most influential Theravāda psychological text",
          influence: [
            "Theravāda Buddhism",
            "Mental state analysis",
            "Meditative practice",
            "Therapeutic methods",
            "Global psychology"
          ]
        }
      ],
      influence: [
        "Theravāda Buddhism",
        "Modern psychology",
        "Therapeutic methods",
        "Meditative practice",
        "Global thought"
      ]
    }
  ],
  psychologists: [
    {
      name: "Vasubandhu",
      sanskritName: "वसुबन्धु",
      paliName: "Vasubandhu",
      period: "4th-5th Century CE",
      tradition: "Abhidharma",
      biography: {
        origin: "Gandhāra",
        training: [
          "Early Buddhist studies",
          "Abhidharma analysis",
          "Meditation practice",
          "Literary composition"
        ],
        positions: [
          "Psychologist",
          "Teacher",
          "Writer"
        ],
        teachers: [
          "Various Buddhist masters",
          "Traditional scholars"
        ],
        students: [
          "Sthiramati",
          "Dignāga"
        ],
        majorWorks: [
          {
            title: "Abhidharma-kośa",
            sanskritTitle: "अभिधर्मकोश",
            paliTitle: "Abhidhammakosa",
            date: "4th-5th Century CE",
            genre: "Psychological treatise",
            description: "Treasury of Abhidharma",
            significance: "Foundational work of Buddhist psychology",
            keyFeatures: [
              "Mental state analysis",
              "Consciousness mapping",
              "Causal relationships",
              "Psychological method",
              "Cultural impact"
            ]
          }
        ]
      },
      contributions: {
        psychological: [
          "Mental state analysis",
          "Consciousness mapping",
          "Causal relationships",
          "Psychological method",
          "Critical thinking"
        ],
        therapeutic: [
          "Abhidharma system",
          "Mental state therapy",
          "Causal analysis",
          "Non-dual perspective",
          "Psychological synthesis"
        ],
        theoretical: [
          "Psychological framework",
          "Analytical method",
          "Mental inquiry",
          "Epistemological theory",
          "Psychological system"
        ],
        innovation: [
          "Psychological method",
          "Mental analysis",
          "Critical approach",
          "Synthetic thinking",
          "Global perspective"
        ],
        other: [
          "Educational work",
          "Monastic development",
          "Cultural preservation",
          "Psychological dialogue",
          "International influence"
        ]
      },
      legacy: "Vasubandhu's work has been crucial in developing Buddhist psychology and establishing the foundation of Abhidharma thought.",
      modernRelevance: [
        "Psychological analysis",
        "Mental state studies",
        "Comparative psychology",
        "Global psychology",
        "Critical thinking"
      ]
    },
    {
      name: "Asaṅga",
      sanskritName: "असङ्ग",
      paliName: "Asaṅga",
      period: "4th Century CE",
      tradition: "Yogācāra",
      biography: {
        origin: "Gandhāra",
        training: [
          "Early Buddhist studies",
          "Yogācāra analysis",
          "Meditation practice",
          "Literary composition"
        ],
        positions: [
          "Psychologist",
          "Teacher",
          "Writer"
        ],
        teachers: [
          "Maitreya",
          "Various Buddhist masters"
        ],
        students: [
          "Vasubandhu",
          "Sthiramati"
        ],
        majorWorks: [
          {
            title: "Yogācārabhūmi-śāstra",
            sanskritTitle: "योगाचारभूमिशास्त्र",
            paliTitle: "Yogācārabhūmi",
            date: "4th Century CE",
            genre: "Psychological treatise",
            description: "Comprehensive work on consciousness and mental processes",
            significance: "Foundational work of Yogācāra psychology",
            keyFeatures: [
              "Consciousness analysis",
              "Mental transformation",
              "Store consciousness",
              "Psychological method",
              "Cultural impact"
            ]
          }
        ]
      },
      contributions: {
        psychological: [
          "Consciousness analysis",
          "Mental transformation",
          "Store consciousness",
          "Psychological method",
          "Critical thinking"
        ],
        therapeutic: [
          "Yogācāra system",
          "Mental transformation",
          "Consciousness therapy",
          "Non-dual perspective",
          "Psychological synthesis"
        ],
        theoretical: [
          "Consciousness framework",
          "Analytical method",
          "Mental inquiry",
          "Epistemological theory",
          "Psychological system"
        ],
        innovation: [
          "Consciousness studies",
          "Mental analysis",
          "Critical approach",
          "Synthetic thinking",
          "Global perspective"
        ],
        other: [
          "Educational work",
          "Monastic development",
          "Cultural preservation",
          "Psychological dialogue",
          "International influence"
        ]
      },
      legacy: "Asaṅga's work has been crucial in developing Yogācāra psychology and establishing the foundation of consciousness studies.",
      modernRelevance: [
        "Consciousness studies",
        "Mental transformation",
        "Comparative psychology",
        "Global psychology",
        "Critical thinking"
      ]
    },
    {
      name: "Buddhaghosa",
      sanskritName: "बुद्धघोष",
      paliName: "Buddhaghosa",
      period: "5th Century CE",
      tradition: "Theravāda",
      biography: {
        origin: "India",
        training: [
          "Early Buddhist studies",
          "Theravāda analysis",
          "Meditation practice",
          "Literary composition"
        ],
        positions: [
          "Psychologist",
          "Teacher",
          "Writer"
        ],
        teachers: [
          "Various Theravāda masters",
          "Traditional scholars"
        ],
        students: [
          "Numerous monks",
          "Established commentarial tradition"
        ],
        majorWorks: [
          {
            title: "Visuddhimagga",
            sanskritTitle: "विशुद्धिमार्ग",
            paliTitle: "Visuddhimagga",
            date: "5th Century CE",
            genre: "Psychological treatise",
            description: "Path of Purification",
            significance: "Most influential Theravāda psychological text",
            keyFeatures: [
              "Mental state analysis",
              "Meditative practice",
              "Therapeutic methods",
              "Psychological method",
              "Cultural impact"
            ]
          }
        ]
      },
      contributions: {
        psychological: [
          "Mental state analysis",
          "Meditative practice",
          "Therapeutic methods",
          "Psychological method",
          "Critical thinking"
        ],
        therapeutic: [
          "Theravāda system",
          "Mental state therapy",
          "Meditative insight",
          "Practical application",
          "Psychological synthesis"
        ],
        theoretical: [
          "Psychological framework",
          "Analytical method",
          "Mental inquiry",
          "Epistemological theory",
          "Psychological system"
        ],
        innovation: [
          "Psychological method",
          "Mental analysis",
          "Critical approach",
          "Synthetic thinking",
          "Global perspective"
        ],
        other: [
          "Educational work",
          "Monastic development",
          "Cultural preservation",
          "Psychological dialogue",
          "International influence"
        ]
      },
      legacy: "Buddhaghosa's work has been crucial in developing Theravāda psychology and establishing the foundation of mental state analysis.",
      modernRelevance: [
        "Mental state studies",
        "Meditative practice",
        "Comparative psychology",
        "Global psychology",
        "Critical thinking"
      ]
    }
  ],
  psychologicalConcepts: [
    {
      name: "Mindfulness",
      sanskritName: "स्मृति",
      paliName: "Sati",
      category: "Consciousness",
      description: "A central concept in Buddhist psychology, indicating present-moment awareness and attention to mental states.",
      origins: [
        "Early Buddhist teachings",
        "Satipaṭṭhāna Sutta",
        "Abhidharma development"
      ],
      development: [
        "Early formulations",
        "Abhidharma elaboration",
        "Regional interpretations",
        "Modern applications"
      ],
      keyThinkers: [
        {
          name: "Buddha",
          sanskritName: "बुद्ध",
          paliName: "Buddha",
          contribution: "Original formulation"
        }
      ],
      characteristics: [
        "Present-moment awareness",
        "Non-judgmental observation",
        "Mental clarity",
        "Analytical approach",
        "Practical application"
      ],
      significance: [
        "Psychological insight",
        "Therapeutic realization",
        "Ethical foundation",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "Psychological therapy",
        "Scientific research",
        "Ethical practice",
        "Cultural studies",
        "Global psychology"
      ]
    },
    {
      name: "Dependent Origination",
      sanskritName: "प्रतीत्यसमुत्पाद",
      paliName: "Paṭiccasamuppāda",
      category: "Causality",
      description: "A fundamental concept in Buddhist psychology explaining the interdependent nature of mental states and experience.",
      origins: [
        "Early Buddhist teachings",
        "Nidāna Sutta",
        "Abhidharma development"
      ],
      development: [
        "Early formulations",
        "Abhidharma elaboration",
        "Regional interpretations",
        "Modern applications"
      ],
      keyThinkers: [
        {
          name: "Buddha",
          sanskritName: "बुद्ध",
          paliName: "Buddha",
          contribution: "Original formulation"
        }
      ],
      characteristics: [
        "Interdependent arising",
        "Causal relationships",
        "Conditional nature",
        "Analytical approach",
        "Practical application"
      ],
      significance: [
        "Psychological insight",
        "Therapeutic realization",
        "Ethical foundation",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "Systems thinking",
        "Scientific research",
        "Ethical practice",
        "Cultural studies",
        "Global psychology"
      ]
    },
    {
      name: "Five Aggregates",
      sanskritName: "पञ्चस्कन्ध",
      paliName: "Pañcakkhandhā",
      category: "Personality",
      description: "A comprehensive model of human experience, analyzing the components of personality and consciousness.",
      origins: [
        "Early Buddhist teachings",
        "Khandha Sutta",
        "Abhidharma development"
      ],
      development: [
        "Early formulations",
        "Abhidharma elaboration",
        "Regional interpretations",
        "Modern applications"
      ],
      keyThinkers: [
        {
          name: "Buddha",
          sanskritName: "बुद्ध",
          paliName: "Buddha",
          contribution: "Original formulation"
        }
      ],
      characteristics: [
        "Form analysis",
        "Feeling analysis",
        "Perception analysis",
        "Mental formations",
        "Consciousness analysis"
      ],
      significance: [
        "Personality theory",
        "Therapeutic insight",
        "Ethical framework",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "Personality psychology",
        "Clinical practice",
        "Ethical practice",
        "Cultural studies",
        "Global psychology"
      ]
    }
  ],
  therapeuticMethods: [
    {
      name: "Mindfulness-Based Therapy",
      sanskritName: "स्मृतिआधारित चिकित्सा",
      paliName: "Satipaṭṭhāna Bhāvanā",
      period: "Ancient to Present",
      description: "A systematic method of psychological therapy in Buddhism, involving careful observation of mental states and processes.",
      techniques: [
        {
          method: "Mindful observation",
          application: "Mental state awareness",
          features: [
            "Present-moment focus",
            "Non-judgmental stance",
            "Clear awareness",
            "Practical application",
            "Cultural context"
          ]
        }
      ],
      significance: [
        "Psychological clarity",
        "Therapeutic effectiveness",
        "Practical insight",
        "Cultural preservation",
        "Global influence"
      ],
      evolution: "Developed from early Buddhist methods, modern versions incorporate contemporary psychological approaches",
      modernUse: [
        "Psychological therapy",
        "Clinical practice",
        "Mental health",
        "Cultural analysis",
        "Global dialogue"
      ]
    }
  ],
  resources: [
    {
      title: "The Psychology of Buddhist Tantra",
      author: "Rob Preece",
      year: "2006",
      type: "Book",
      description: "Comprehensive exploration of Buddhist psychological concepts and their application in modern therapy",
      language: "English",
      level: "Advanced",
      isbn: "978-1559392632",
      amazonUrl: "https://www.amazon.com/Psychology-Buddhist-Tantra-Rob-Preece/dp/1559392634"
    },
    {
      title: "Buddhist Psychology: The Foundation of Buddhist Thought",
      author: "Geshe Tashi Tsering",
      year: "2005",
      type: "Book",
      description: "In-depth study of Buddhist psychological principles and their relevance to modern life",
      language: "English",
      level: "Intermediate",
      isbn: "978-0861712737",
      amazonUrl: "https://www.amazon.com/Buddhist-Psychology-Foundation-Buddhist-Thought/dp/0861712733"
    },
    {
      title: "The Psychology of Awakening",
      author: "Gay Watson",
      year: "2000",
      type: "Book",
      description: "Introduction to Buddhist psychological concepts and their application in contemporary psychology",
      language: "English",
      level: "Beginner",
      isbn: "978-1899579364",
      amazonUrl: "https://www.amazon.com/Psychology-Awakening-Buddhism-Science-Personal/dp/1899579367"
    }
  ]
}

export default function BuddhistPsychologyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Buddhist Psychology</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{buddhistPsychologyContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {buddhistPsychologyContent.timeline.start} - {buddhistPsychologyContent.timeline.end}</p>
            <p>{buddhistPsychologyContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {buddhistPsychologyContent.timeline.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Psychological Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Psychological Traditions</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistPsychologyContent.psychologicalTraditions.map((tradition, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {tradition.name} ({tradition.sanskritName} / {tradition.paliName})
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

      {/* Psychologists */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notable Psychologists</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistPsychologyContent.psychologists.map((psychologist, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {psychologist.name} ({psychologist.sanskritName} / {psychologist.paliName})
              </h3>
              <p className="mb-2">Period: {psychologist.period}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Contributions:</h4>
                  <ul className="list-disc pl-6">
                    {Object.entries(psychologist.contributions).map(([category, items]) => (
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
                  <p>{psychologist.legacy}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Psychological Concepts */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Psychological Concepts</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistPsychologyContent.psychologicalConcepts.map((concept, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {concept.name} ({concept.sanskritName} / {concept.paliName})
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

      {/* Therapeutic Methods */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Therapeutic Methods</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistPsychologyContent.therapeuticMethods.map((method, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {method.name} ({method.sanskritName} / {method.paliName})
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
            {buddhistPsychologyContent.resources.map((resource, index) => (
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
          <CardTitle>Explore More Buddhist Psychology</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-lg">
              Discover more about Buddhist psychology, its history, and its influence on modern psychological practices.
            </p>
            <Link href="/religion/buddhism/impact/philosophy">
              <Button size="lg" className="mt-4">
                Explore Buddhist Philosophy
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 