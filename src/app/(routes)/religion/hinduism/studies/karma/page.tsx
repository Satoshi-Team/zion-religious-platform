import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface KarmaTradition {
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

interface KarmaScholar {
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

interface KarmaConcept {
  name: string
  sanskritName: string
  category: string
  description: string
  origins: string[]
  development: string[]
  keyScholars: Array<{
    name: string
    sanskritName: string
    contribution: string
  }>
  characteristics: string[]
  significance: string[]
  modernApplications: string[]
}

interface KarmaPractice {
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

interface KarmaContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  karmaTraditions: KarmaTradition[]
  scholars: KarmaScholar[]
  karmaConcepts: KarmaConcept[]
  karmaPractices: KarmaPractice[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Karma Studies | Hindu Studies",
  description: "Comprehensive exploration of Karma concepts, traditions, and their lasting impact on Hindu thought and practice.",
  openGraph: {
    title: "Karma Studies | Hindu Studies",
    description: "In-depth study of Karma traditions and their influence on Hindu thought and practice",
    type: "website",
  },
}

const karmaContent: KarmaContent = {
  introduction: `Karma represents one of the most fundamental concepts in Hinduism, encompassing the universal law of cause and effect, action and consequence. From ancient Vedic times to the present, Karma has been central to Hindu thought, guiding both individual conduct and understanding of life's purpose. These teachings combine ethical principles with practical wisdom, offering guidance for both personal growth and spiritual liberation.`,
  timeline: {
    start: "1500 BCE",
    end: "Present",
    overview: "Karma has evolved from early Vedic concepts to comprehensive systems of thought and practice. From ancient formulations to modern interpretations, it has maintained its core principles while adapting to changing times.",
    significance: [
      "Development of ethical systems",
      "Evolution of spiritual practices",
      "Creation of unique methods",
      "Influence on modern thought",
      "Preservation of wisdom traditions",
      "Development of regional variations",
      "Cultural synthesis and exchange",
      "Contemporary global influence"
    ]
  },
  karmaTraditions: [
    {
      name: "Vedic Karma",
      sanskritName: "वैदिक कर्म",
      period: "1500 BCE - Present",
      regions: [
        "India",
        "Global"
      ],
      description: "The earliest formulation of Karma in the Vedic tradition, emphasizing ritual action and its consequences in this life and beyond.",
      characteristics: [
        "Ritual action",
        "Sacrificial practice",
        "Ethical conduct",
        "Cosmic order",
        "Practical application"
      ],
      texts: [
        "Vedas",
        "Brahmanas",
        "Aranyakas",
        "Upanishads"
      ],
      significance: [
        "Foundation of Karma theory",
        "Ritual practice",
        "Ethical framework",
        "Cultural preservation",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Brihadaranyaka Upanishad",
          sanskritTitle: "बृहदारण्यक उपनिषद्",
          date: "8th Century BCE",
          author: "Various authors",
          description: "Great Forest Upanishad",
          significance: "Early systematic treatment of Karma",
          influence: [
            "Karma theory",
            "Philosophical development",
            "Spiritual practice",
            "Cultural impact",
            "Global influence"
          ]
        }
      ],
      influence: [
        "Karma theory",
        "Ritual practice",
        "Ethical systems",
        "Cultural preservation",
        "Global practice"
      ]
    },
    {
      name: "Upanishadic Karma",
      sanskritName: "उपनिषदीय कर्म",
      period: "800 BCE - Present",
      regions: [
        "India",
        "Global"
      ],
      description: "The philosophical elaboration of Karma in the Upanishads, emphasizing the relationship between action, knowledge, and liberation.",
      characteristics: [
        "Philosophical analysis",
        "Spiritual practice",
        "Ethical conduct",
        "Liberation path",
        "Practical wisdom"
      ],
      texts: [
        "Upanishads",
        "Bhagavad Gita",
        "Brahma Sutras",
        "Commentaries"
      ],
      significance: [
        "Philosophical foundation",
        "Spiritual practice",
        "Ethical framework",
        "Cultural impact",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Chandogya Upanishad",
          sanskritTitle: "छान्दोग्य उपनिषद्",
          date: "8th Century BCE",
          author: "Various authors",
          description: "Chant Upanishad",
          significance: "Key text on Karma and liberation",
          influence: [
            "Karma philosophy",
            "Spiritual practice",
            "Ethical guidance",
            "Cultural preservation",
            "Global influence"
          ]
        }
      ],
      influence: [
        "Philosophical development",
        "Spiritual practice",
        "Ethical systems",
        "Cultural impact",
        "Global practice"
      ]
    }
  ],
  scholars: [
    {
      name: "Yajnavalkya",
      sanskritName: "याज्ञवल्क्य",
      period: "8th Century BCE",
      tradition: "Upanishadic",
      biography: {
        origin: "Ancient India",
        training: [
          "Vedic studies",
          "Philosophy",
          "Spiritual practice",
          "Karma theory"
        ],
        positions: [
          "Philosopher",
          "Teacher",
          "Spiritual guide"
        ],
        teachers: [
          "Vedic tradition"
        ],
        students: [
          "Numerous disciples",
          "Future generations"
        ],
        majorWorks: [
          {
            title: "Brihadaranyaka Upanishad",
            sanskritTitle: "बृहदारण्यक उपनिषद्",
            date: "8th Century BCE",
            genre: "Philosophical treatise",
            description: "Great Forest Upanishad",
            significance: "Key text on Karma and liberation",
            keyFeatures: [
              "Karma theory",
              "Spiritual practice",
              "Philosophical analysis",
              "Cultural context",
              "Global influence"
            ]
          }
        ]
      },
      contributions: {
        philosophy: [
          "Karma theory",
          "Liberation doctrine",
          "Ethical framework",
          "Spiritual practice",
          "Cultural impact"
        ],
        teaching: [
          "Philosophical instruction",
          "Spiritual guidance",
          "Ethical principles",
          "Cultural preservation",
          "Global dialogue"
        ],
        theoretical: [
          "Karma theory",
          "Liberation doctrine",
          "Ethical framework",
          "Cultural synthesis",
          "Global perspective"
        ],
        innovation: [
          "Philosophical methods",
          "Teaching approach",
          "Spiritual practice",
          "Cultural adaptation",
          "Global impact"
        ],
        other: [
          "Educational work",
          "Spiritual development",
          "Cultural preservation",
          "Philosophical dialogue",
          "International influence"
        ]
      },
      legacy: "Yajnavalkya's work has been crucial in developing Karma theory and establishing the foundation of spiritual practice.",
      modernRelevance: [
        "Karma philosophy",
        "Spiritual practice",
        "Ethical systems",
        "Cultural impact",
        "Global influence"
      ]
    },
    {
      name: "Krishna",
      sanskritName: "कृष्ण",
      period: "5th-2nd Century BCE",
      tradition: "Bhagavad Gita",
      biography: {
        origin: "Ancient India",
        training: [
          "Spiritual wisdom",
          "Karma theory",
          "Ethical practice",
          "Divine knowledge"
        ],
        positions: [
          "Divine teacher",
          "Spiritual guide",
          "Ethical mentor"
        ],
        teachers: [
          "Divine wisdom"
        ],
        students: [
          "Arjuna",
          "Humanity"
        ],
        majorWorks: [
          {
            title: "Bhagavad Gita",
            sanskritTitle: "भगवद्गीता",
            date: "5th-2nd Century BCE",
            genre: "Spiritual treatise",
            description: "Song of the Lord",
            significance: "Key text on Karma Yoga",
            keyFeatures: [
              "Karma Yoga",
              "Spiritual practice",
              "Ethical guidance",
              "Cultural context",
              "Global influence"
            ]
          }
        ]
      },
      contributions: {
        philosophy: [
          "Karma Yoga",
          "Spiritual wisdom",
          "Ethical framework",
          "Divine knowledge",
          "Cultural impact"
        ],
        teaching: [
          "Spiritual instruction",
          "Ethical guidance",
          "Practical wisdom",
          "Cultural preservation",
          "Global dialogue"
        ],
        theoretical: [
          "Karma theory",
          "Yoga philosophy",
          "Ethical framework",
          "Cultural synthesis",
          "Global perspective"
        ],
        innovation: [
          "Karma Yoga",
          "Teaching approach",
          "Spiritual practice",
          "Cultural adaptation",
          "Global impact"
        ],
        other: [
          "Spiritual guidance",
          "Ethical development",
          "Cultural preservation",
          "Philosophical dialogue",
          "International influence"
        ]
      },
      legacy: "Krishna's teachings in the Bhagavad Gita have been crucial in developing Karma Yoga and establishing the foundation of spiritual practice.",
      modernRelevance: [
        "Karma Yoga",
        "Spiritual practice",
        "Ethical systems",
        "Cultural impact",
        "Global influence"
      ]
    }
  ],
  karmaConcepts: [
    {
      name: "Karma",
      sanskritName: "कर्म",
      category: "Fundamental Concept",
      description: "The universal law of cause and effect that governs all actions and their consequences, both in this life and across lifetimes.",
      origins: [
        "Vedas",
        "Early philosophical development",
        "Spiritual practice"
      ],
      development: [
        "Early formulations",
        "Upanishadic elaboration",
        "Philosophical systems",
        "Modern applications"
      ],
      keyScholars: [
        {
          name: "Yajnavalkya",
          sanskritName: "याज्ञवल्क्य",
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
      name: "Karma Yoga",
      sanskritName: "कर्म योग",
      category: "Spiritual Practice",
      description: "The path of selfless action, emphasizing the performance of one's duties without attachment to results.",
      origins: [
        "Upanishads",
        "Bhagavad Gita",
        "Spiritual practice"
      ],
      development: [
        "Early formulations",
        "Systematic elaboration",
        "Regional interpretations",
        "Modern applications"
      ],
      keyScholars: [
        {
          name: "Krishna",
          sanskritName: "कृष्ण",
          contribution: "Systematic formulation"
        }
      ],
      characteristics: [
        "Selfless action",
        "Duty performance",
        "Detachment",
        "Spiritual growth",
        "Liberation path"
      ],
      significance: [
        "Spiritual practice",
        "Ethical framework",
        "Personal growth",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "Spiritual practice",
        "Ethical living",
        "Personal growth",
        "Cultural analysis",
        "Global dialogue"
      ]
    },
    {
      name: "Karma Phala",
      sanskritName: "कर्म फल",
      category: "Action and Result",
      description: "The fruits or results of actions, emphasizing the relationship between deeds and their consequences.",
      origins: [
        "Vedas",
        "Early philosophical development",
        "Spiritual practice"
      ],
      development: [
        "Early formulations",
        "Systematic elaboration",
        "Regional interpretations",
        "Modern applications"
      ],
      keyScholars: [
        {
          name: "Various",
          sanskritName: "विविध",
          contribution: "Systematic formulation"
        }
      ],
      characteristics: [
        "Action results",
        "Moral consequences",
        "Spiritual impact",
        "Personal responsibility",
        "Liberation path"
      ],
      significance: [
        "Ethical framework",
        "Spiritual practice",
        "Personal growth",
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
    }
  ],
  karmaPractices: [
    {
      name: "Karma Yoga Practice",
      sanskritName: "कर्म योग साधना",
      period: "Ancient to Present",
      description: "The systematic practice of Karma Yoga, emphasizing selfless action and detachment from results.",
      techniques: [
        {
          method: "Daily practice",
          application: "Selfless action",
          features: [
            "Duty performance",
            "Detachment",
            "Spiritual growth",
            "Ethical conduct",
            "Liberation path"
          ]
        }
      ],
      significance: [
        "Spiritual practice",
        "Ethical living",
        "Personal growth",
        "Cultural preservation",
        "Global influence"
      ],
      evolution: "Developed from early Vedic practices, modern versions incorporate contemporary spiritual approaches",
      modernUse: [
        "Spiritual practice",
        "Ethical living",
        "Personal growth",
        "Cultural preservation",
        "Global dialogue"
      ]
    },
    {
      name: "Karma Purification",
      sanskritName: "कर्म शोधन",
      period: "Ancient to Present",
      description: "The practice of purifying past karma through various spiritual methods and ethical conduct.",
      techniques: [
        {
          method: "Purification practice",
          application: "Karma purification",
          features: [
            "Ethical conduct",
            "Spiritual practice",
            "Meditation",
            "Service",
            "Liberation path"
          ]
        }
      ],
      significance: [
        "Spiritual practice",
        "Ethical living",
        "Personal growth",
        "Cultural preservation",
        "Global influence"
      ],
      evolution: "Developed from early spiritual traditions, modern versions incorporate contemporary purification methods",
      modernUse: [
        "Spiritual practice",
        "Ethical living",
        "Personal growth",
        "Cultural preservation",
        "Global dialogue"
      ]
    }
  ],
  resources: [
    {
      title: "The Bhagavad Gita",
      author: "Eknath Easwaran",
      year: "2007",
      type: "Book",
      description: "Translation and commentary on the Bhagavad Gita, focusing on Karma Yoga",
      language: "English",
      level: "Intermediate",
      isbn: "978-1586380199",
      amazonUrl: "https://www.amazon.com/Bhagavad-Gita-Classic-Indian-Spirituality/dp/1586380192"
    },
    {
      title: "Karma Yoga: The Yoga of Action",
      author: "Swami Vivekananda",
      year: "1995",
      type: "Book",
      description: "Comprehensive study of Karma Yoga and its practice",
      language: "English",
      level: "Beginner",
      isbn: "978-1565892125",
      amazonUrl: "https://www.amazon.com/Karma-Yoga-Action-Swami-Vivekananda/dp/1565892125"
    },
    {
      title: "The Upanishads",
      author: "Eknath Easwaran",
      year: "2007",
      type: "Book",
      description: "Translation and commentary on the principal Upanishads, including Karma concepts",
      language: "English",
      level: "Intermediate",
      isbn: "978-1586380212",
      amazonUrl: "https://www.amazon.com/Upanishads-Classic-Indian-Philosophy/dp/1586380214"
    }
  ]
}

export default function KarmaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Karma Studies</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{karmaContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {karmaContent.timeline.start} - {karmaContent.timeline.end}</p>
            <p>{karmaContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {karmaContent.timeline.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Karma Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Karma Traditions</CardTitle>
        </CardHeader>
        <CardContent>
          {karmaContent.karmaTraditions.map((tradition, index) => (
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

      {/* Scholars */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notable Scholars</CardTitle>
        </CardHeader>
        <CardContent>
          {karmaContent.scholars.map((scholar, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {scholar.name} ({scholar.sanskritName})
              </h3>
              <p className="mb-2">Period: {scholar.period}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Contributions:</h4>
                  <ul className="list-disc pl-6">
                    {Object.entries(scholar.contributions).map(([category, items]) => (
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
                  <p>{scholar.legacy}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Karma Concepts */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Karma Concepts</CardTitle>
        </CardHeader>
        <CardContent>
          {karmaContent.karmaConcepts.map((concept, index) => (
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

      {/* Karma Practices */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Karma Practices</CardTitle>
        </CardHeader>
        <CardContent>
          {karmaContent.karmaPractices.map((practice, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {practice.name} ({practice.sanskritName})
              </h3>
              <p className="mb-2">{practice.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Techniques:</h4>
                  <ul className="list-disc pl-6">
                    {practice.techniques.map((item, idx) => (
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
                    {practice.modernUse.map((use, idx) => (
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
            {karmaContent.resources.map((resource, index) => (
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
          <CardTitle>Explore More Karma Studies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-lg">
              Discover more about Karma concepts, their history, and their influence on modern thought and practice.
            </p>
            <Link href="/religion/hinduism/studies/dharma">
              <Button size="lg" className="mt-4">
                Explore Dharma Studies
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 