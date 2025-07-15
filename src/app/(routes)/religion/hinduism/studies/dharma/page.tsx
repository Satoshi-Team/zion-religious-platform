import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface DharmaTradition {
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

interface DharmaScholar {
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

interface DharmaConcept {
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

interface DharmaPractice {
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

interface DharmaContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  dharmaTraditions: DharmaTradition[]
  scholars: DharmaScholar[]
  dharmaConcepts: DharmaConcept[]
  dharmaPractices: DharmaPractice[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Dharma Studies | Hindu Studies",
  description: "Comprehensive exploration of Dharma concepts, traditions, and their lasting impact on Hindu thought and practice.",
  openGraph: {
    title: "Dharma Studies | Hindu Studies",
    description: "In-depth study of Dharma traditions and their influence on Hindu thought and practice",
    type: "website",
  },
}

const dharmaContent: DharmaContent = {
  introduction: `Dharma represents one of the most fundamental concepts in Hinduism, encompassing duty, righteousness, law, and the natural order of the universe. From ancient Vedic times to the present, Dharma has been central to Hindu thought, guiding both individual conduct and social organization. These teachings combine ethical principles with practical wisdom, offering guidance for both personal growth and societal harmony.`,
  timeline: {
    start: "1500 BCE",
    end: "Present",
    overview: "Dharma has evolved from early Vedic concepts to comprehensive systems of thought and practice. From ancient formulations to modern interpretations, it has maintained its core principles while adapting to changing times.",
    significance: [
      "Development of ethical systems",
      "Evolution of social order",
      "Creation of legal frameworks",
      "Influence on modern thought",
      "Preservation of wisdom traditions",
      "Development of regional variations",
      "Cultural synthesis and exchange",
      "Contemporary global influence"
    ]
  },
  dharmaTraditions: [
    {
      name: "Varnashrama Dharma",
      sanskritName: "वर्णाश्रम धर्म",
      period: "1500 BCE - Present",
      regions: [
        "India",
        "Global"
      ],
      description: "The traditional system of social organization based on varnas (social classes) and ashramas (stages of life), providing a framework for individual and social duties.",
      characteristics: [
        "Social organization",
        "Life stages",
        "Duty-based ethics",
        "Cultural preservation",
        "Practical application"
      ],
      texts: [
        "Vedas",
        "Dharma Shastras",
        "Manu Smriti",
        "Yajnavalkya Smriti"
      ],
      significance: [
        "Social structure",
        "Ethical framework",
        "Cultural preservation",
        "Personal development",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Manu Smriti",
          sanskritTitle: "मनुस्मृति",
          date: "200 BCE - 200 CE",
          author: "Various authors",
          description: "Laws of Manu",
          significance: "Foundational text of Hindu law",
          influence: [
            "Legal systems",
            "Social organization",
            "Ethical frameworks",
            "Cultural preservation",
            "Global influence"
          ]
        }
      ],
      influence: [
        "Social organization",
        "Ethical systems",
        "Cultural preservation",
        "Personal development",
        "Global practice"
      ]
    },
    {
      name: "Sanatana Dharma",
      sanskritName: "सनातन धर्म",
      period: "Ancient - Present",
      regions: [
        "India",
        "Global"
      ],
      description: "The eternal and universal principles of Dharma that transcend time and space, emphasizing the fundamental nature of truth and righteousness.",
      characteristics: [
        "Eternal principles",
        "Universal values",
        "Spiritual foundation",
        "Cultural preservation",
        "Global relevance"
      ],
      texts: [
        "Vedas",
        "Upanishads",
        "Bhagavad Gita",
        "Puranas"
      ],
      significance: [
        "Universal principles",
        "Spiritual foundation",
        "Cultural preservation",
        "Global relevance",
        "Eternal wisdom"
      ],
      majorWorks: [
        {
          title: "Bhagavad Gita",
          sanskritTitle: "भगवद्गीता",
          date: "5th-2nd Century BCE",
          author: "Various authors",
          description: "Song of the Lord",
          significance: "Key text of Sanatana Dharma",
          influence: [
            "Spiritual practice",
            "Ethical guidance",
            "Philosophical insight",
            "Cultural preservation",
            "Global influence"
          ]
        }
      ],
      influence: [
        "Universal principles",
        "Spiritual practice",
        "Cultural preservation",
        "Global relevance",
        "Eternal wisdom"
      ]
    }
  ],
  scholars: [
    {
      name: "Manu",
      sanskritName: "मनु",
      period: "200 BCE - 200 CE",
      tradition: "Varnashrama Dharma",
      biography: {
        origin: "Ancient India",
        training: [
          "Vedic studies",
          "Dharma Shastras",
          "Legal systems",
          "Social organization"
        ],
        positions: [
          "Lawgiver",
          "Philosopher",
          "Social theorist"
        ],
        teachers: [
          "Vedic tradition"
        ],
        students: [
          "Generations of scholars",
          "Legal practitioners"
        ],
        majorWorks: [
          {
            title: "Manu Smriti",
            sanskritTitle: "मनुस्मृति",
            date: "200 BCE - 200 CE",
            genre: "Legal treatise",
            description: "Comprehensive code of law and ethics",
            significance: "Foundational text of Hindu law",
            keyFeatures: [
              "Legal systems",
              "Social organization",
              "Ethical frameworks",
              "Cultural preservation",
              "Global influence"
            ]
          }
        ]
      },
      contributions: {
        philosophy: [
          "Legal systems",
          "Social organization",
          "Ethical frameworks",
          "Cultural preservation",
          "Global influence"
        ],
        teaching: [
          "Legal instruction",
          "Social guidance",
          "Ethical principles",
          "Cultural preservation",
          "Global dialogue"
        ],
        theoretical: [
          "Legal theory",
          "Social theory",
          "Ethical framework",
          "Cultural synthesis",
          "Global perspective"
        ],
        innovation: [
          "Legal systems",
          "Social organization",
          "Ethical frameworks",
          "Cultural adaptation",
          "Global impact"
        ],
        other: [
          "Legal education",
          "Social development",
          "Cultural preservation",
          "Ethical dialogue",
          "International influence"
        ]
      },
      legacy: "Manu's work has been crucial in developing Hindu legal systems and establishing the foundation of social organization and ethical practice.",
      modernRelevance: [
        "Legal systems",
        "Social organization",
        "Ethical frameworks",
        "Cultural preservation",
        "Global influence"
      ]
    },
    {
      name: "Yajnavalkya",
      sanskritName: "याज्ञवल्क्य",
      period: "8th Century BCE",
      tradition: "Sanatana Dharma",
      biography: {
        origin: "Ancient India",
        training: [
          "Vedic studies",
          "Philosophy",
          "Spiritual practice",
          "Social organization"
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
            title: "Yajnavalkya Smriti",
            sanskritTitle: "याज्ञवल्क्यस्मृति",
            date: "8th Century BCE",
            genre: "Legal treatise",
            description: "Comprehensive code of law and ethics",
            significance: "Key text of Hindu law",
            keyFeatures: [
              "Legal systems",
              "Social organization",
              "Ethical frameworks",
              "Cultural preservation",
              "Global influence"
            ]
          }
        ]
      },
      contributions: {
        philosophy: [
          "Legal systems",
          "Social organization",
          "Ethical frameworks",
          "Cultural preservation",
          "Global influence"
        ],
        teaching: [
          "Legal instruction",
          "Social guidance",
          "Ethical principles",
          "Cultural preservation",
          "Global dialogue"
        ],
        theoretical: [
          "Legal theory",
          "Social theory",
          "Ethical framework",
          "Cultural synthesis",
          "Global perspective"
        ],
        innovation: [
          "Legal systems",
          "Social organization",
          "Ethical frameworks",
          "Cultural adaptation",
          "Global impact"
        ],
        other: [
          "Legal education",
          "Social development",
          "Cultural preservation",
          "Ethical dialogue",
          "International influence"
        ]
      },
      legacy: "Yajnavalkya's work has been crucial in developing Hindu legal systems and establishing the foundation of social organization and ethical practice.",
      modernRelevance: [
        "Legal systems",
        "Social organization",
        "Ethical frameworks",
        "Cultural preservation",
        "Global influence"
      ]
    }
  ],
  dharmaConcepts: [
    {
      name: "Dharma",
      sanskritName: "धर्म",
      category: "Fundamental Concept",
      description: "The universal law, duty, and righteousness that governs both individual conduct and the natural order of the universe.",
      origins: [
        "Vedas",
        "Early philosophical development",
        "Social organization"
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
        "Universal law",
        "Duty and obligation",
        "Righteousness",
        "Natural order",
        "Social harmony"
      ],
      significance: [
        "Ethical framework",
        "Social organization",
        "Personal conduct",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "Ethical living",
        "Social harmony",
        "Personal growth",
        "Cultural analysis",
        "Global dialogue"
      ]
    },
    {
      name: "Karma Dharma",
      sanskritName: "कर्म धर्म",
      category: "Action and Duty",
      description: "The relationship between action and duty, emphasizing the importance of performing one's prescribed duties without attachment to results.",
      origins: [
        "Vedas",
        "Early philosophical development",
        "Social organization"
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
        "Action and duty",
        "Detached action",
        "Righteous conduct",
        "Personal responsibility",
        "Social harmony"
      ],
      significance: [
        "Ethical framework",
        "Personal conduct",
        "Social harmony",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "Ethical living",
        "Personal growth",
        "Social harmony",
        "Cultural analysis",
        "Global dialogue"
      ]
    }
  ],
  dharmaPractices: [
    {
      name: "Dharma Practice",
      sanskritName: "धर्म साधना",
      period: "Ancient to Present",
      description: "The systematic practice of Dharma principles in daily life, emphasizing ethical conduct and social responsibility.",
      techniques: [
        {
          method: "Daily practice",
          application: "Ethical living",
          features: [
            "Right conduct",
            "Social responsibility",
            "Personal growth",
            "Cultural preservation",
            "Global harmony"
          ]
        }
      ],
      significance: [
        "Ethical living",
        "Social harmony",
        "Personal growth",
        "Cultural preservation",
        "Global influence"
      ],
      evolution: "Developed from early Vedic practices, modern versions incorporate contemporary ethical approaches",
      modernUse: [
        "Ethical living",
        "Social harmony",
        "Personal growth",
        "Cultural preservation",
        "Global dialogue"
      ]
    },
    {
      name: "Dharma Education",
      sanskritName: "धर्म शिक्षा",
      period: "Ancient to Present",
      description: "The systematic study and teaching of Dharma principles, emphasizing both theoretical understanding and practical application.",
      techniques: [
        {
          method: "Educational practice",
          application: "Knowledge transmission",
          features: [
            "Study",
            "Teaching",
            "Practice",
            "Cultural preservation",
            "Global dialogue"
          ]
        }
      ],
      significance: [
        "Knowledge transmission",
        "Cultural preservation",
        "Personal growth",
        "Social harmony",
        "Global influence"
      ],
      evolution: "Developed from early educational traditions, modern versions incorporate contemporary teaching methods",
      modernUse: [
        "Education",
        "Cultural preservation",
        "Personal growth",
        "Social harmony",
        "Global dialogue"
      ]
    }
  ],
  resources: [
    {
      title: "The Laws of Manu",
      author: "Wendy Doniger",
      year: "1991",
      type: "Book",
      description: "Translation and commentary on the Manu Smriti",
      language: "English",
      level: "Intermediate",
      isbn: "978-0140445404",
      amazonUrl: "https://www.amazon.com/Laws-Manu-Penguin-Classics/dp/0140445404"
    },
    {
      title: "Dharma: Hindu Approach to a Purposeful Life",
      author: "Steven Rosen",
      year: "2006",
      type: "Book",
      description: "Introduction to Dharma concepts and their application in modern life",
      language: "English",
      level: "Beginner",
      isbn: "978-8120831126",
      amazonUrl: "https://www.amazon.com/Dharma-Hindu-Approach-Purposeful-Life/dp/8120831123"
    },
    {
      title: "The Bhagavad Gita",
      author: "Eknath Easwaran",
      year: "2007",
      type: "Book",
      description: "Translation and commentary on the Bhagavad Gita",
      language: "English",
      level: "Intermediate",
      isbn: "978-1586380199",
      amazonUrl: "https://www.amazon.com/Bhagavad-Gita-Classic-Indian-Spirituality/dp/1586380192"
    }
  ]
}

export default function DharmaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Dharma Studies</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{dharmaContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {dharmaContent.timeline.start} - {dharmaContent.timeline.end}</p>
            <p>{dharmaContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {dharmaContent.timeline.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dharma Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Dharma Traditions</CardTitle>
        </CardHeader>
        <CardContent>
          {dharmaContent.dharmaTraditions.map((tradition, index) => (
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
          {dharmaContent.scholars.map((scholar, index) => (
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

      {/* Dharma Concepts */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Dharma Concepts</CardTitle>
        </CardHeader>
        <CardContent>
          {dharmaContent.dharmaConcepts.map((concept, index) => (
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

      {/* Dharma Practices */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Dharma Practices</CardTitle>
        </CardHeader>
        <CardContent>
          {dharmaContent.dharmaPractices.map((practice, index) => (
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
            {dharmaContent.resources.map((resource, index) => (
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
          <CardTitle>Explore More Dharma Studies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-lg">
              Discover more about Dharma concepts, their history, and their influence on modern thought and practice.
            </p>
            <Link href="/religion/hinduism/studies/vedanta">
              <Button size="lg" className="mt-4">
                Explore Vedanta Philosophy
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 