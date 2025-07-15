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

interface PhilosophyContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  philosophicalTraditions: PhilosophicalTradition[]
  philosophers: Philosopher[]
  philosophicalConcepts: PhilosophicalConcept[]
  philosophicalMethods: PhilosophicalMethod[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Hindu Philosophy | Hindu Studies",
  description: "Comprehensive exploration of Hindu philosophical traditions, concepts, and their lasting impact on global thought.",
  openGraph: {
    title: "Hindu Philosophy | Hindu Studies",
    description: "In-depth study of Hindu philosophical traditions and their influence on global thought",
    type: "website",
  },
}

const philosophyContent: PhilosophyContent = {
  introduction: `Hindu philosophy represents one of the world's oldest and most comprehensive systems of thought, encompassing diverse schools of philosophy that have evolved over millennia. From the early Vedic period to the present, Hindu philosophy has developed sophisticated systems of metaphysics, epistemology, ethics, and spiritual practice. These traditions combine profound theoretical insights with practical methods for understanding reality and achieving spiritual liberation.`,
  timeline: {
    start: "1500 BCE",
    end: "Present",
    overview: "Hindu philosophy has evolved from early Vedic thought to comprehensive systems of philosophy. From ancient formulations to modern interpretations, it has maintained its core principles while adapting to changing times.",
    significance: [
      "Development of philosophical systems",
      "Evolution of metaphysical thought",
      "Creation of epistemological methods",
      "Influence on global philosophy",
      "Preservation of wisdom traditions",
      "Development of regional variations",
      "Cultural synthesis and exchange",
      "Contemporary global influence"
    ]
  },
  philosophicalTraditions: [
    {
      name: "Vedanta",
      sanskritName: "वेदान्त",
      period: "800 BCE - Present",
      regions: [
        "India",
        "Global"
      ],
      description: "The philosophical elaboration of the Upanishads, emphasizing the nature of reality, consciousness, and liberation.",
      characteristics: [
        "Non-dual understanding",
        "Self-realization",
        "Transcendental wisdom",
        "Practical application",
        "Systematic philosophy"
      ],
      texts: [
        "Upanishads",
        "Brahma Sutras",
        "Bhagavad Gita",
        "Commentaries"
      ],
      significance: [
        "Foundation of Hindu philosophy",
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
          significance: "Key text on Hindu philosophy",
          influence: [
            "Philosophical development",
            "Spiritual practice",
            "Cultural impact",
            "Global influence",
            "Modern thought"
          ]
        }
      ],
      influence: [
        "Philosophical systems",
        "Spiritual practice",
        "Cultural preservation",
        "Global thought",
        "Modern philosophy"
      ]
    },
    {
      name: "Samkhya",
      sanskritName: "सांख्य",
      period: "600 BCE - Present",
      regions: [
        "India",
        "Global"
      ],
      description: "One of the oldest philosophical systems, emphasizing dualism between consciousness (Purusha) and matter (Prakriti).",
      characteristics: [
        "Dualistic metaphysics",
        "Evolutionary cosmology",
        "Psychological analysis",
        "Liberation theory",
        "Practical wisdom"
      ],
      texts: [
        "Samkhya Karika",
        "Samkhya Sutras",
        "Commentaries",
        "Modern interpretations"
      ],
      significance: [
        "Ancient philosophical system",
        "Psychological framework",
        "Liberation theory",
        "Cultural impact",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Samkhya Karika",
          sanskritTitle: "सांख्य कारिका",
          date: "4th Century CE",
          author: "Ishvarakrishna",
          description: "Systematic exposition of Samkhya philosophy",
          significance: "Key text on Samkhya philosophy",
          influence: [
            "Philosophical development",
            "Psychological theory",
            "Cultural impact",
            "Global influence",
            "Modern thought"
          ]
        }
      ],
      influence: [
        "Philosophical systems",
        "Psychological theory",
        "Cultural preservation",
        "Global thought",
        "Modern philosophy"
      ]
    }
  ],
  philosophers: [
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
            significance: "Key text on Advaita philosophy",
            keyFeatures: [
              "Philosophical analysis",
              "Spiritual practice",
              "Liberation theory",
              "Cultural context",
              "Global influence"
            ]
          }
        ]
      },
      contributions: {
        philosophy: [
          "Advaita Vedanta",
          "Non-dual framework",
          "Liberation doctrine",
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
          "Philosophical framework",
          "Non-dual doctrine",
          "Liberation theory",
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
      legacy: "Adi Shankara's work has been crucial in developing the Advaita Vedanta tradition and establishing the foundation of Hindu philosophy.",
      modernRelevance: [
        "Philosophical systems",
        "Spiritual practice",
        "Non-dual thought",
        "Cultural impact",
        "Global influence"
      ]
    },
    {
      name: "Kapila",
      sanskritName: "कपिल",
      period: "600 BCE",
      tradition: "Samkhya",
      biography: {
        origin: "Ancient India",
        training: [
          "Philosophical studies",
          "Spiritual practice",
          "Liberation theory",
          "Cosmology"
        ],
        positions: [
          "Philosopher",
          "Teacher",
          "Spiritual guide"
        ],
        teachers: [
          "Ancient tradition"
        ],
        students: [
          "Numerous disciples",
          "Future generations"
        ],
        majorWorks: [
          {
            title: "Samkhya Sutras",
            sanskritTitle: "सांख्य सूत्र",
            date: "600 BCE",
            genre: "Philosophical treatise",
            description: "Systematic exposition of Samkhya philosophy",
            significance: "Key text on Samkhya philosophy",
            keyFeatures: [
              "Philosophical analysis",
              "Cosmological theory",
              "Liberation doctrine",
              "Cultural context",
              "Global influence"
            ]
          }
        ]
      },
      contributions: {
        philosophy: [
          "Samkhya system",
          "Dualistic framework",
          "Liberation doctrine",
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
          "Philosophical framework",
          "Dualistic doctrine",
          "Liberation theory",
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
      legacy: "Kapila's work has been crucial in developing the Samkhya tradition and establishing the foundation of Hindu philosophy.",
      modernRelevance: [
        "Philosophical systems",
        "Spiritual practice",
        "Dualistic thought",
        "Cultural impact",
        "Global influence"
      ]
    }
  ],
  philosophicalConcepts: [
    {
      name: "Brahman",
      sanskritName: "ब्रह्मन्",
      category: "Metaphysical Concept",
      description: "The ultimate reality, the absolute, and the source of all existence in Hindu philosophy.",
      origins: [
        "Vedas",
        "Upanishads",
        "Early philosophical development"
      ],
      development: [
        "Early formulations",
        "Upanishadic elaboration",
        "Philosophical systems",
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
        "Ultimate reality",
        "Absolute truth",
        "Transcendental being",
        "Source of existence",
        "Universal consciousness"
      ],
      significance: [
        "Philosophical framework",
        "Spiritual insight",
        "Metaphysical foundation",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "Philosophical study",
        "Spiritual practice",
        "Personal growth",
        "Cultural analysis",
        "Global dialogue"
      ]
    },
    {
      name: "Atman",
      sanskritName: "आत्मन्",
      category: "Self Concept",
      description: "The true self or soul, the eternal essence of individual consciousness.",
      origins: [
        "Vedas",
        "Upanishads",
        "Early philosophical development"
      ],
      development: [
        "Early formulations",
        "Upanishadic elaboration",
        "Philosophical systems",
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
        "True self",
        "Eternal essence",
        "Pure consciousness",
        "Individual being",
        "Universal connection"
      ],
      significance: [
        "Philosophical framework",
        "Spiritual insight",
        "Self-realization",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "Philosophical study",
        "Spiritual practice",
        "Personal growth",
        "Cultural analysis",
        "Global dialogue"
      ]
    },
    {
      name: "Maya",
      sanskritName: "माया",
      category: "Epistemological Concept",
      description: "The power of illusion that creates the appearance of the phenomenal world.",
      origins: [
        "Vedas",
        "Upanishads",
        "Early philosophical development"
      ],
      development: [
        "Early formulations",
        "Upanishadic elaboration",
        "Philosophical systems",
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
        "Phenomenal reality",
        "Transcendental truth",
        "Spiritual wisdom"
      ],
      significance: [
        "Philosophical framework",
        "Spiritual insight",
        "Reality understanding",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "Philosophical study",
        "Spiritual practice",
        "Personal growth",
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
      description: "The method of negation, systematically eliminating what is not the ultimate reality.",
      techniques: [
        {
          method: "Negation practice",
          application: "Philosophical inquiry",
          features: [
            "Systematic negation",
            "Reality investigation",
            "Truth discovery",
            "Self-inquiry",
            "Liberation path"
          ]
        }
      ],
      significance: [
        "Philosophical method",
        "Spiritual practice",
        "Truth discovery",
        "Cultural preservation",
        "Global influence"
      ],
      evolution: "Developed from early Upanishadic practices, modern versions incorporate contemporary philosophical approaches",
      modernUse: [
        "Philosophical study",
        "Spiritual practice",
        "Personal growth",
        "Cultural preservation",
        "Global dialogue"
      ]
    },
    {
      name: "Vichara",
      sanskritName: "विचार",
      period: "Ancient to Present",
      description: "The method of philosophical inquiry and reflection on the nature of reality.",
      techniques: [
        {
          method: "Inquiry practice",
          application: "Philosophical reflection",
          features: [
            "Deep reflection",
            "Reality investigation",
            "Truth discovery",
            "Self-inquiry",
            "Liberation path"
          ]
        }
      ],
      significance: [
        "Philosophical method",
        "Spiritual practice",
        "Truth discovery",
        "Cultural preservation",
        "Global influence"
      ],
      evolution: "Developed from early philosophical traditions, modern versions incorporate contemporary inquiry approaches",
      modernUse: [
        "Philosophical study",
        "Spiritual practice",
        "Personal growth",
        "Cultural preservation",
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
      description: "Translation and commentary on the principal Upanishads, including philosophical concepts",
      language: "English",
      level: "Intermediate",
      isbn: "978-1586380212",
      amazonUrl: "https://www.amazon.com/Upanishads-Classic-Indian-Philosophy/dp/1586380214"
    },
    {
      title: "A Source Book in Indian Philosophy",
      author: "Sarvepalli Radhakrishnan and Charles A. Moore",
      year: "1957",
      type: "Book",
      description: "Comprehensive collection of primary texts from major Indian philosophical traditions",
      language: "English",
      level: "Advanced",
      isbn: "978-0691019581",
      amazonUrl: "https://www.amazon.com/Source-Book-Indian-Philosophy/dp/0691019584"
    },
    {
      title: "Indian Philosophy: A Very Short Introduction",
      author: "Sue Hamilton",
      year: "2001",
      type: "Book",
      description: "Accessible introduction to Indian philosophical traditions and concepts",
      language: "English",
      level: "Beginner",
      isbn: "978-0192853745",
      amazonUrl: "https://www.amazon.com/Indian-Philosophy-Very-Short-Introduction/dp/0192853740"
    }
  ]
}

export default function PhilosophyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Hindu Philosophy</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{philosophyContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {philosophyContent.timeline.start} - {philosophyContent.timeline.end}</p>
            <p>{philosophyContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {philosophyContent.timeline.significance.map((item, index) => (
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
          {philosophyContent.philosophicalTraditions.map((tradition, index) => (
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
          {philosophyContent.philosophers.map((philosopher, index) => (
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
          {philosophyContent.philosophicalConcepts.map((concept, index) => (
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
          {philosophyContent.philosophicalMethods.map((method, index) => (
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
            {philosophyContent.resources.map((resource, index) => (
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
          <CardTitle>Explore More Hindu Philosophy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-lg">
              Discover more about Hindu philosophical concepts, their history, and their influence on modern thought and practice.
            </p>
            <Link href="/religion/hinduism/studies/vedanta">
              <Button size="lg" className="mt-4">
                Explore Vedanta Studies
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 