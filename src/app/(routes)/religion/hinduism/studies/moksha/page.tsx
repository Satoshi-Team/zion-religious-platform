import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface MokshaTradition {
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

interface MokshaScholar {
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

interface MokshaConcept {
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

interface MokshaPractice {
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

interface MokshaContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  mokshaTraditions: MokshaTradition[]
  scholars: MokshaScholar[]
  mokshaConcepts: MokshaConcept[]
  mokshaPractices: MokshaPractice[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Moksha Studies | Hindu Studies",
  description: "Comprehensive exploration of Moksha concepts, traditions, and their lasting impact on Hindu thought and practice.",
  openGraph: {
    title: "Moksha Studies | Hindu Studies",
    description: "In-depth study of Moksha traditions and their influence on Hindu thought and practice",
    type: "website",
  },
}

const mokshaContent: MokshaContent = {
  introduction: `Moksha represents the ultimate goal of Hindu spiritual practice - liberation from the cycle of birth and death (samsara). From ancient Vedic times to the present, Moksha has been central to Hindu thought, guiding both individual spiritual practice and philosophical understanding. These teachings combine profound metaphysical insights with practical methods for achieving liberation, offering guidance for both personal transformation and ultimate freedom.`,
  timeline: {
    start: "1500 BCE",
    end: "Present",
    overview: "Moksha has evolved from early Vedic concepts to comprehensive systems of thought and practice. From ancient formulations to modern interpretations, it has maintained its core principles while adapting to changing times.",
    significance: [
      "Development of liberation doctrines",
      "Evolution of spiritual practices",
      "Creation of unique methods",
      "Influence on modern thought",
      "Preservation of wisdom traditions",
      "Development of regional variations",
      "Cultural synthesis and exchange",
      "Contemporary global influence"
    ]
  },
  mokshaTraditions: [
    {
      name: "Vedantic Moksha",
      sanskritName: "वेदान्त मोक्ष",
      period: "800 BCE - Present",
      regions: [
        "India",
        "Global"
      ],
      description: "The philosophical elaboration of Moksha in the Vedantic tradition, emphasizing knowledge (jnana) as the path to liberation.",
      characteristics: [
        "Knowledge-based liberation",
        "Self-realization",
        "Non-dual understanding",
        "Transcendental wisdom",
        "Practical application"
      ],
      texts: [
        "Upanishads",
        "Brahma Sutras",
        "Bhagavad Gita",
        "Commentaries"
      ],
      significance: [
        "Foundation of liberation theory",
        "Philosophical practice",
        "Spiritual framework",
        "Cultural preservation",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Brahma Sutras",
          sanskritTitle: "ब्रह्म सूत्र",
          date: "5th Century BCE",
          author: "Badarayana",
          description: "Systematic exposition of Vedantic philosophy",
          significance: "Key text on Moksha and liberation",
          influence: [
            "Liberation theory",
            "Philosophical development",
            "Spiritual practice",
            "Cultural impact",
            "Global influence"
          ]
        }
      ],
      influence: [
        "Liberation theory",
        "Philosophical practice",
        "Spiritual systems",
        "Cultural preservation",
        "Global practice"
      ]
    },
    {
      name: "Yogic Moksha",
      sanskritName: "योग मोक्ष",
      period: "500 BCE - Present",
      regions: [
        "India",
        "Global"
      ],
      description: "The systematic practice of Yoga as a path to liberation, emphasizing meditation and spiritual discipline.",
      characteristics: [
        "Meditative practice",
        "Spiritual discipline",
        "Self-transformation",
        "Consciousness expansion",
        "Practical wisdom"
      ],
      texts: [
        "Yoga Sutras",
        "Bhagavad Gita",
        "Hatha Yoga Pradipika",
        "Commentaries"
      ],
      significance: [
        "Practical liberation path",
        "Spiritual practice",
        "Transformative framework",
        "Cultural impact",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Yoga Sutras",
          sanskritTitle: "योग सूत्र",
          date: "2nd Century BCE",
          author: "Patanjali",
          description: "Systematic exposition of Yoga philosophy",
          significance: "Key text on Yoga and liberation",
          influence: [
            "Yoga philosophy",
            "Spiritual practice",
            "Meditative guidance",
            "Cultural preservation",
            "Global influence"
          ]
        }
      ],
      influence: [
        "Yoga practice",
        "Spiritual discipline",
        "Meditative systems",
        "Cultural impact",
        "Global practice"
      ]
    }
  ],
  scholars: [
    {
      name: "Adi Shankara",
      sanskritName: "आदि शंकर",
      period: "788-820 CE",
      tradition: "Advaita Vedanta",
      biography: {
        origin: "Kerala, India",
        training: [
          "Vedantic studies",
          "Philosophy",
          "Spiritual practice",
          "Liberation theory"
        ],
        positions: [
          "Philosopher",
          "Teacher",
          "Spiritual guide"
        ],
        teachers: [
          "Govinda Bhagavatpada"
        ],
        students: [
          "Numerous disciples",
          "Future generations"
        ],
        majorWorks: [
          {
            title: "Vivekachudamani",
            sanskritTitle: "विवेकचूडामणि",
            date: "8th Century CE",
            genre: "Philosophical treatise",
            description: "Crest Jewel of Discrimination",
            significance: "Key text on Moksha and liberation",
            keyFeatures: [
              "Liberation theory",
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
          "Advaita Vedanta",
          "Liberation doctrine",
          "Non-dual framework",
          "Spiritual practice",
          "Cultural impact"
        ],
        teaching: [
          "Philosophical instruction",
          "Spiritual guidance",
          "Liberation principles",
          "Cultural preservation",
          "Global dialogue"
        ],
        theoretical: [
          "Liberation theory",
          "Non-dual doctrine",
          "Philosophical framework",
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
      legacy: "Adi Shankara's work has been crucial in developing the Advaita Vedanta tradition and establishing the foundation of liberation practice.",
      modernRelevance: [
        "Liberation philosophy",
        "Spiritual practice",
        "Non-dual systems",
        "Cultural impact",
        "Global influence"
      ]
    },
    {
      name: "Patanjali",
      sanskritName: "पतञ्जलि",
      period: "2nd Century BCE",
      tradition: "Yoga",
      biography: {
        origin: "Ancient India",
        training: [
          "Yoga studies",
          "Philosophy",
          "Spiritual practice",
          "Liberation theory"
        ],
        positions: [
          "Philosopher",
          "Teacher",
          "Spiritual guide"
        ],
        teachers: [
          "Yoga tradition"
        ],
        students: [
          "Numerous disciples",
          "Future generations"
        ],
        majorWorks: [
          {
            title: "Yoga Sutras",
            sanskritTitle: "योग सूत्र",
            date: "2nd Century BCE",
            genre: "Philosophical treatise",
            description: "Systematic exposition of Yoga",
            significance: "Key text on Yoga and liberation",
            keyFeatures: [
              "Yoga philosophy",
              "Spiritual practice",
              "Meditative analysis",
              "Cultural context",
              "Global influence"
            ]
          }
        ]
      },
      contributions: {
        philosophy: [
          "Yoga philosophy",
          "Liberation doctrine",
          "Meditative framework",
          "Spiritual practice",
          "Cultural impact"
        ],
        teaching: [
          "Yogic instruction",
          "Spiritual guidance",
          "Liberation principles",
          "Cultural preservation",
          "Global dialogue"
        ],
        theoretical: [
          "Yoga theory",
          "Liberation doctrine",
          "Meditative framework",
          "Cultural synthesis",
          "Global perspective"
        ],
        innovation: [
          "Yogic methods",
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
      legacy: "Patanjali's work has been crucial in developing the Yoga tradition and establishing the foundation of liberation practice.",
      modernRelevance: [
        "Yoga philosophy",
        "Spiritual practice",
        "Meditative systems",
        "Cultural impact",
        "Global influence"
      ]
    }
  ],
  mokshaConcepts: [
    {
      name: "Moksha",
      sanskritName: "मोक्ष",
      category: "Fundamental Concept",
      description: "The ultimate goal of Hindu spiritual practice - liberation from the cycle of birth and death, and realization of one's true nature.",
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
          name: "Adi Shankara",
          sanskritName: "आदि शंकर",
          contribution: "Systematic formulation"
        }
      ],
      characteristics: [
        "Liberation goal",
        "Self-realization",
        "Transcendental wisdom",
        "Spiritual freedom",
        "Ultimate truth"
      ],
      significance: [
        "Spiritual framework",
        "Philosophical insight",
        "Liberation path",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "Spiritual practice",
        "Personal growth",
        "Philosophical study",
        "Cultural analysis",
        "Global dialogue"
      ]
    },
    {
      name: "Kaivalya",
      sanskritName: "कैवल्य",
      category: "Liberation State",
      description: "The state of absolute independence and isolation of the pure consciousness, as described in Yoga philosophy.",
      origins: [
        "Yoga Sutras",
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
          name: "Patanjali",
          sanskritName: "पतञ्जलि",
          contribution: "Systematic formulation"
        }
      ],
      characteristics: [
        "Absolute independence",
        "Pure consciousness",
        "Transcendental state",
        "Spiritual freedom",
        "Ultimate liberation"
      ],
      significance: [
        "Liberation theory",
        "Spiritual practice",
        "Philosophical insight",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "Spiritual practice",
        "Meditative study",
        "Personal growth",
        "Cultural analysis",
        "Global dialogue"
      ]
    },
    {
      name: "Jivanmukti",
      sanskritName: "जीवन्मुक्ति",
      category: "Liberation in Life",
      description: "The state of liberation while still living in the body, emphasizing the possibility of spiritual freedom in this life.",
      origins: [
        "Upanishads",
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
        "Living liberation",
        "Embodied freedom",
        "Spiritual wisdom",
        "Practical realization",
        "Worldly engagement"
      ],
      significance: [
        "Liberation theory",
        "Spiritual practice",
        "Practical wisdom",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "Spiritual practice",
        "Personal growth",
        "Worldly engagement",
        "Cultural analysis",
        "Global dialogue"
      ]
    }
  ],
  mokshaPractices: [
    {
      name: "Jnana Yoga",
      sanskritName: "ज्ञान योग",
      period: "Ancient to Present",
      description: "The path of knowledge and wisdom, emphasizing self-inquiry and realization of the true nature of reality.",
      techniques: [
        {
          method: "Self-inquiry",
          application: "Knowledge practice",
          features: [
            "Vedantic study",
            "Meditation",
            "Contemplation",
            "Discrimination",
            "Liberation path"
          ]
        }
      ],
      significance: [
        "Liberation practice",
        "Philosophical study",
        "Spiritual growth",
        "Cultural preservation",
        "Global influence"
      ],
      evolution: "Developed from early Vedic practices, modern versions incorporate contemporary philosophical approaches",
      modernUse: [
        "Spiritual practice",
        "Philosophical study",
        "Personal growth",
        "Cultural preservation",
        "Global dialogue"
      ]
    },
    {
      name: "Raja Yoga",
      sanskritName: "राज योग",
      period: "Ancient to Present",
      description: "The royal path of meditation and mental discipline, emphasizing control of the mind and consciousness.",
      techniques: [
        {
          method: "Meditation practice",
          application: "Mental discipline",
          features: [
            "Mind control",
            "Meditation",
            "Concentration",
            "Samadhi",
            "Liberation path"
          ]
        }
      ],
      significance: [
        "Liberation practice",
        "Mental discipline",
        "Spiritual growth",
        "Cultural preservation",
        "Global influence"
      ],
      evolution: "Developed from early Yogic traditions, modern versions incorporate contemporary meditative approaches",
      modernUse: [
        "Spiritual practice",
        "Meditative study",
        "Personal growth",
        "Cultural preservation",
        "Global dialogue"
      ]
    }
  ],
  resources: [
    {
      title: "The Yoga Sutras of Patanjali",
      author: "Sri Swami Satchidananda",
      year: "2012",
      type: "Book",
      description: "Translation and commentary on the Yoga Sutras, focusing on liberation through Yoga",
      language: "English",
      level: "Intermediate",
      isbn: "978-1938477072",
      amazonUrl: "https://www.amazon.com/Yoga-Sutras-Patanjali-Swami-Satchidananda/dp/1938477071"
    },
    {
      title: "Vivekachudamani",
      author: "Adi Shankara",
      year: "2004",
      type: "Book",
      description: "Translation and commentary on the Crest Jewel of Discrimination",
      language: "English",
      level: "Advanced",
      isbn: "978-0874810384",
      amazonUrl: "https://www.amazon.com/Vivekachudamani-Crest-Jewel-Discrimination-Shankara/dp/0874810387"
    },
    {
      title: "The Upanishads",
      author: "Eknath Easwaran",
      year: "2007",
      type: "Book",
      description: "Translation and commentary on the principal Upanishads, including Moksha concepts",
      language: "English",
      level: "Intermediate",
      isbn: "978-1586380212",
      amazonUrl: "https://www.amazon.com/Upanishads-Classic-Indian-Philosophy/dp/1586380214"
    }
  ]
}

export default function MokshaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Moksha Studies</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{mokshaContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {mokshaContent.timeline.start} - {mokshaContent.timeline.end}</p>
            <p>{mokshaContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {mokshaContent.timeline.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Moksha Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Moksha Traditions</CardTitle>
        </CardHeader>
        <CardContent>
          {mokshaContent.mokshaTraditions.map((tradition, index) => (
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
          {mokshaContent.scholars.map((scholar, index) => (
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

      {/* Moksha Concepts */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Moksha Concepts</CardTitle>
        </CardHeader>
        <CardContent>
          {mokshaContent.mokshaConcepts.map((concept, index) => (
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

      {/* Moksha Practices */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Moksha Practices</CardTitle>
        </CardHeader>
        <CardContent>
          {mokshaContent.mokshaPractices.map((practice, index) => (
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
            {mokshaContent.resources.map((resource, index) => (
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
          <CardTitle>Explore More Moksha Studies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-lg">
              Discover more about Moksha concepts, their history, and their influence on modern thought and practice.
            </p>
            <Link href="/religion/hinduism/studies/karma">
              <Button size="lg" className="mt-4">
                Explore Karma Studies
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 