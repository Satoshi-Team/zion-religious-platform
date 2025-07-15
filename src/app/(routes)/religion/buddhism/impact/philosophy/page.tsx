import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface PhilosophicalTradition {
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

interface Philosopher {
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
    philosophical: string[]
    doctrinal: string[]
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

interface PhilosophicalMethod {
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

interface BuddhistPhilosophyContent {
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
  title: "Buddhist Philosophy | Buddhist Impact",
  description: "Comprehensive exploration of Buddhist philosophical traditions, concepts, and their lasting impact on global thought.",
  openGraph: {
    title: "Buddhist Philosophy | Buddhist Impact",
    description: "In-depth study of Buddhist philosophical heritage and its influence on global philosophical traditions",
    type: "website",
  },
}

const buddhistPhilosophyContent: BuddhistPhilosophyContent = {
  introduction: `Buddhist philosophy represents a rich and diverse tradition that has evolved over centuries, encompassing various schools of thought, analytical methods, and philosophical insights. From the early Abhidharma analysis to contemporary Buddhist philosophy, these traditions have contributed significantly to world philosophy. These philosophical systems serve both as intellectual inquiry and practical guidance, combining rigorous analysis with experiential wisdom.`,
  timeline: {
    start: "5th Century BCE",
    end: "Present",
    overview: "Buddhist philosophy emerged with the teachings of the Buddha and developed into diverse traditions across different regions. From early analytical systems to complex philosophical frameworks, it has evolved while maintaining its practical orientation.",
    significance: [
      "Development of philosophical systems",
      "Evolution of analytical methods",
      "Creation of unique concepts",
      "Influence on global philosophy",
      "Preservation of wisdom traditions",
      "Development of regional schools",
      "Cultural synthesis and exchange",
      "Contemporary global influence"
    ]
  },
  philosophicalTraditions: [
    {
      name: "Madhyamaka",
      sanskritName: "मध्यमक",
      paliName: "Majjhimaka",
      period: "2nd Century CE - Present",
      regions: [
        "India",
        "Tibet",
        "East Asia"
      ],
      description: "A sophisticated philosophical tradition that developed from Nāgārjuna's teachings, emphasizing the Middle Way and the doctrine of emptiness (śūnyatā).",
      characteristics: [
        "Emptiness doctrine",
        "Two truths theory",
        "Dependent origination",
        "Critical analysis",
        "Non-dual perspective"
      ],
      texts: [
        "Mūlamadhyamakakārikā",
        "Madhyamakāvatāra",
        "Prasannapadā",
        "Madhyamakālaṅkāra",
        "Bodhicaryāvatāra"
      ],
      significance: [
        "Philosophical synthesis",
        "Logical analysis",
        "Metaphysical inquiry",
        "Ethical foundation",
        "Meditative insight"
      ],
      majorWorks: [
        {
          title: "Mūlamadhyamakakārikā",
          sanskritTitle: "मूलमध्यमककारिका",
          paliTitle: "Mūlamajjhimakakārikā",
          date: "2nd Century CE",
          author: "Nāgārjuna",
          description: "Fundamental Verses on the Middle Way, foundational text of Madhyamaka",
          significance: "Most influential Madhyamaka text",
          influence: [
            "Buddhist philosophy",
            "Logic and epistemology",
            "Metaphysical inquiry",
            "Ethical thought",
            "Global philosophy"
          ]
        }
      ],
      influence: [
        "Tibetan Buddhism",
        "Zen philosophy",
        "Western philosophy",
        "Comparative religion",
        "Global thought"
      ]
    }
  ],
  philosophers: [
    {
      name: "Nāgārjuna",
      sanskritName: "नागार्जुन",
      paliName: "Nāgārjuna",
      period: "2nd Century CE",
      tradition: "Madhyamaka",
      biography: {
        origin: "South India",
        training: [
          "Early Buddhist studies",
          "Mahayana philosophy",
          "Meditation practice",
          "Literary composition"
        ],
        positions: [
          "Philosopher",
          "Teacher",
          "Writer"
        ],
        teachers: [
          "Various Buddhist masters",
          "Traditional scholars"
        ],
        students: [
          "Āryadeva",
          "Buddhapālita"
        ],
        majorWorks: [
          {
            title: "Mūlamadhyamakakārikā",
            sanskritTitle: "मूलमध्यमककारिका",
            paliTitle: "Mūlamajjhimakakārikā",
            date: "2nd Century CE",
            genre: "Philosophical treatise",
            description: "Fundamental Verses on the Middle Way",
            significance: "Foundational work of Madhyamaka philosophy",
            keyFeatures: [
              "Emptiness doctrine",
              "Two truths theory",
              "Logical analysis",
              "Philosophical method",
              "Cultural impact"
            ]
          }
        ]
      },
      contributions: {
        philosophical: [
          "Emptiness doctrine",
          "Two truths theory",
          "Logical analysis",
          "Philosophical method",
          "Critical thinking"
        ],
        doctrinal: [
          "Madhyamaka system",
          "Middle Way doctrine",
          "Dependent origination",
          "Non-dual perspective",
          "Philosophical synthesis"
        ],
        theoretical: [
          "Logical framework",
          "Analytical method",
          "Metaphysical inquiry",
          "Epistemological theory",
          "Philosophical system"
        ],
        innovation: [
          "Philosophical method",
          "Logical analysis",
          "Critical approach",
          "Synthetic thinking",
          "Global perspective"
        ],
        other: [
          "Educational work",
          "Monastic development",
          "Cultural preservation",
          "Philosophical dialogue",
          "International influence"
        ]
      },
      legacy: "Nāgārjuna's work has been crucial in developing Buddhist philosophy and establishing the foundation of Madhyamaka thought.",
      modernRelevance: [
        "Philosophical analysis",
        "Logical studies",
        "Comparative religion",
        "Global philosophy",
        "Critical thinking"
      ]
    }
  ],
  philosophicalConcepts: [
    {
      name: "Emptiness",
      sanskritName: "शून्यता",
      paliName: "Suññatā",
      category: "Metaphysics",
      description: "A central concept in Buddhist philosophy, particularly in Madhyamaka, indicating the absence of inherent existence in all phenomena.",
      origins: [
        "Early Buddhist teachings",
        "Prajñāpāramitā literature",
        "Madhyamaka development"
      ],
      development: [
        "Early formulations",
        "Madhyamaka elaboration",
        "Regional interpretations",
        "Modern applications"
      ],
      keyThinkers: [
        {
          name: "Nāgārjuna",
          sanskritName: "नागार्जुन",
          paliName: "Nāgārjuna",
          contribution: "Systematic formulation"
        }
      ],
      characteristics: [
        "Non-inherent existence",
        "Dependent nature",
        "Middle Way position",
        "Analytical approach",
        "Practical application"
      ],
      significance: [
        "Philosophical insight",
        "Meditative realization",
        "Ethical foundation",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "Philosophical analysis",
        "Scientific inquiry",
        "Ethical thought",
        "Cultural studies",
        "Global philosophy"
      ]
    }
  ],
  philosophicalMethods: [
    {
      name: "Critical Analysis",
      sanskritName: "विचार",
      paliName: "Vicāra",
      period: "Ancient to Present",
      description: "A systematic method of philosophical inquiry in Buddhism, involving careful examination of concepts and phenomena.",
      techniques: [
        {
          method: "Logical analysis",
          application: "Examination of concepts",
          features: [
            "Rigorous inquiry",
            "Systematic approach",
            "Clear reasoning",
            "Practical focus",
            "Cultural context"
          ]
        }
      ],
      significance: [
        "Philosophical clarity",
        "Intellectual rigor",
        "Practical insight",
        "Cultural preservation",
        "Global influence"
      ],
      evolution: "Developed from early Buddhist methods, modern versions incorporate contemporary philosophical approaches",
      modernUse: [
        "Philosophical research",
        "Academic study",
        "Meditative inquiry",
        "Cultural analysis",
        "Global dialogue"
      ]
    }
  ],
  resources: [
    {
      title: "The Fundamental Wisdom of the Middle Way",
      author: "Jay L. Garfield",
      year: "1995",
      type: "Book",
      description: "Translation and commentary on Nāgārjuna's Mūlamadhyamakakārikā",
      language: "English",
      level: "Advanced",
      isbn: "978-0195093360",
      amazonUrl: "https://www.amazon.com/Fundamental-Wisdom-Middle-Way-Nagarjunas/dp/0195093364"
    },
    {
      title: "Buddhist Philosophy: A Historical Analysis",
      author: "David J. Kalupahana",
      year: "1976",
      type: "Book",
      description: "Comprehensive study of Buddhist philosophical development",
      language: "English",
      level: "Intermediate",
      isbn: "978-0824802871",
      amazonUrl: "https://www.amazon.com/Buddhist-Philosophy-Historical-Analysis-Kalupahana/dp/0824802870"
    },
    {
      title: "The Heart of Buddhist Philosophy",
      author: "Nolan Pliny Jacobson",
      year: "1988",
      type: "Book",
      description: "Introduction to core Buddhist philosophical concepts",
      language: "English",
      level: "Beginner",
      isbn: "978-0809129233",
      amazonUrl: "https://www.amazon.com/Heart-Buddhist-Philosophy-Nolan-Jacobson/dp/0809129233"
    }
  ]
}

export default function BuddhistPhilosophyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Buddhist Philosophy</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{buddhistPhilosophyContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {buddhistPhilosophyContent.timeline.start} - {buddhistPhilosophyContent.timeline.end}</p>
            <p>{buddhistPhilosophyContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {buddhistPhilosophyContent.timeline.significance.map((item, index) => (
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
          {buddhistPhilosophyContent.philosophicalTraditions.map((tradition, index) => (
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

      {/* Philosophers */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notable Philosophers</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistPhilosophyContent.philosophers.map((philosopher, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {philosopher.name} ({philosopher.sanskritName} / {philosopher.paliName})
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
          {buddhistPhilosophyContent.philosophicalConcepts.map((concept, index) => (
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

      {/* Philosophical Methods */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Philosophical Methods</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistPhilosophyContent.philosophicalMethods.map((method, index) => (
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
            {buddhistPhilosophyContent.resources.map((resource, index) => (
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
          <CardTitle>Explore More Buddhist Philosophy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-lg">
              Discover more about Buddhist philosophy, its history, and its influence on global thought.
            </p>
            <Link href="/religion/buddhism/impact/literature">
              <Button size="lg" className="mt-4">
                Explore Buddhist Literature
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 