import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface PhilosophicalConcept {
  name: string
  sanskritName: string
  paliName: string
  category: string
  description: string
  principles: string[]
  applications: string[]
  challenges: string[]
  benefits: string[]
  modernInterpretations: string[]
}

interface School {
  name: string
  sanskritName: string
  period: string
  founders: string[]
  description: string
  mainTeachings: string[]
  keyTexts: Array<{
    title: string
    sanskritTitle: string
    author: string
    period: string
    description: string
    significance: string
    keyIdeas: string[]
  }>
  practices: string[]
  influence: string[]
  modernRelevance: string[]
}

interface Philosopher {
  name: string
  sanskritName: string
  period: string
  tradition: string
  biography: {
    origin: string
    background: string[]
    contributions: string[]
    teachings: string[]
    disciples: string[]
    majorWorks: Array<{
      title: string
      sanskritTitle: string
      date: string
      topic: string
      description: string
      significance: string
      keyIdeas: string[]
    }>
  }
  philosophicalViews: {
    metaphysics: string[]
    epistemology: string[]
    ethics: string[]
    modernContext: string[]
  }
  legacy: string
  quotes: string[]
}

interface Resource {
  title: string
  author: string
  year: string
  type: string
  description: string
  language: string
  level: string
  amazonUrl: string
  isbn?: string
}

interface BuddhistPhilosophyContent {
  introduction: string
  overview: {
    definition: string
    significance: string[]
    mainBranches: {
      abhidharma: string[]
      madhyamaka: string[]
      yogacara: string[]
      tantric: string[]
    }
  }
  concepts: PhilosophicalConcept[]
  schools: School[]
  philosophers: Philosopher[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Buddhist Philosophy | Buddhist Studies",
  description: "Comprehensive exploration of Buddhist philosophical traditions, concepts, and their relevance to modern thought and life.",
  openGraph: {
    title: "Buddhist Philosophy | Buddhist Studies",
    description: "In-depth study of Buddhist philosophical schools, concepts, and their modern applications",
    type: "website",
  },
}

const buddhistPhilosophyContent: BuddhistPhilosophyContent = {
  introduction: `Buddhist philosophy represents one of the world's most sophisticated and comprehensive systems of thought, developed over two and a half millennia. It combines rigorous logical analysis with profound psychological insights and practical methods for transforming human consciousness. From its early foundations in the Buddha's teachings to its later developments across Asia, Buddhist philosophy offers unique perspectives on consciousness, reality, knowledge, and ethics that continue to engage modern thinkers and scientists.`,
  overview: {
    definition: "Buddhist philosophy encompasses a rich tradition of systematic inquiry into the nature of mind, reality, knowledge, and ethics, grounded in the Buddha's insights and developed through various schools of thought across Asia.",
    significance: [
      "Systematic analysis of consciousness and experience",
      "Sophisticated theories of causation and interdependence",
      "Detailed examination of the nature of self and reality",
      "Practical methods for mental cultivation",
      "Integration of epistemology and ethics",
      "Influence on modern psychology and cognitive science",
      "Contributions to contemporary philosophical debates",
      "Framework for understanding mind and consciousness"
    ],
    mainBranches: {
      abhidharma: [
        "Systematic analysis of experience",
        "Classification of mental factors",
        "Theory of momentariness",
        "Analysis of causation"
      ],
      madhyamaka: [
        "Philosophy of emptiness (śūnyatā)",
        "Critique of essentialist views",
        "Two truths doctrine",
        "Analysis of dependent origination"
      ],
      yogacara: [
        "Mind-only philosophy",
        "Eight consciousnesses theory",
        "Three natures doctrine",
        "Buddhist idealism"
      ],
      tantric: [
        "Non-dual philosophy",
        "Unity of wisdom and method",
        "Theory of subtle body",
        "Transformation of consciousness"
      ]
    }
  },
  concepts: [
    {
      name: "Emptiness",
      sanskritName: "Śūnyatā",
      paliName: "Suññatā",
      category: "Metaphysics",
      description: "The fundamental Buddhist philosophical principle that all phenomena lack inherent existence and are empty of independent, permanent essence.",
      principles: [
        "Lack of inherent existence",
        "Dependent origination",
        "Conventional vs ultimate truth",
        "Non-dual understanding",
        "Freedom from conceptual elaboration"
      ],
      applications: [
        "Meditation on emptiness",
        "Analysis of phenomena",
        "Investigation of self",
        "Understanding of interdependence",
        "Cultivation of wisdom"
      ],
      challenges: [
        "Overcoming substantialist views",
        "Understanding without nihilism",
        "Integrating conventional reality",
        "Maintaining balance in practice",
        "Applying in daily life"
      ],
      benefits: [
        "Liberation from attachment",
        "Understanding of reality",
        "Freedom from extremes",
        "Wisdom development",
        "Compassionate action"
      ],
      modernInterpretations: [
        "Quantum physics parallels",
        "Environmental ethics",
        "Systems thinking",
        "Psychological insights",
        "Social theory applications"
      ]
    }
  ],
  schools: [
    {
      name: "Madhyamaka",
      sanskritName: "मध्यमक",
      period: "2nd century CE - Present",
      founders: ["Nāgārjuna", "Āryadeva"],
      description: "The Middle Way school that emphasizes the philosophy of emptiness and avoidance of all philosophical extremes through rigorous logical analysis.",
      mainTeachings: [
        "Emptiness of all phenomena",
        "Rejection of extremes",
        "Dependent origination",
        "Two truths doctrine",
        "Critique of essentialism"
      ],
      keyTexts: [
        {
          title: "Fundamental Verses on the Middle Way",
          sanskritTitle: "Mūlamadhyamakakārikā",
          author: "Nāgārjuna",
          period: "2nd century CE",
          description: "Foundational text of Madhyamaka philosophy presenting systematic analysis of emptiness",
          significance: "Established the philosophical basis for Mahāyāna Buddhism",
          keyIdeas: [
            "Analysis of causation",
            "Critique of essence",
            "Examination of motion",
            "Investigation of self",
            "Nature of reality"
          ]
        }
      ],
      practices: [
        "Analytical meditation",
        "Logical analysis",
        "Contemplation of emptiness",
        "Investigation of phenomena",
        "Application to daily life"
      ],
      influence: [
        "Tibetan Buddhism",
        "East Asian Buddhism",
        "Modern philosophy",
        "Environmental ethics",
        "Systems thinking"
      ],
      modernRelevance: [
        "Quantum physics dialogue",
        "Environmental philosophy",
        "Systems theory",
        "Cognitive science",
        "Peace studies"
      ]
    }
  ],
  philosophers: [
    {
      name: "Nāgārjuna",
      sanskritName: "नागार्जुन",
      period: "c. 150-250 CE",
      tradition: "Mahāyāna Buddhism",
      biography: {
        origin: "South India",
        background: [
          "Renowned Buddhist master",
          "Founder of Madhyamaka school",
          "Major philosopher of Mahāyāna",
          "Revered in Tibet and East Asia",
          "Influential in multiple traditions"
        ],
        contributions: [
          "Systematization of emptiness philosophy",
          "Development of Middle Way thought",
          "Synthesis of Buddhist teachings",
          "Logical methods of analysis",
          "Integration of wisdom and compassion"
        ],
        teachings: [
          "Philosophy of emptiness",
          "Two truths doctrine",
          "Dependent origination",
          "Critique of views",
          "Path to liberation"
        ],
        disciples: [
          "Āryadeva",
          "Rāhulabhadra",
          "Buddhapālita"
        ],
        majorWorks: [
          {
            title: "Fundamental Verses on the Middle Way",
            sanskritTitle: "Mūlamadhyamakakārikā",
            date: "c. 200 CE",
            topic: "Emptiness and Middle Way",
            description: "Systematic philosophical treatise on emptiness and the middle way between extremes",
            significance: "Foundation text of Madhyamaka philosophy",
            keyIdeas: [
              "Analysis of causation",
              "Investigation of self",
              "Nature of reality",
              "Critique of views",
              "Path to liberation"
            ]
          }
        ]
      },
      philosophicalViews: {
        metaphysics: [
          "Emptiness of all phenomena",
          "Dependent origination",
          "Rejection of extremes",
          "Two truths doctrine"
        ],
        epistemology: [
          "Limits of conceptual knowledge",
          "Role of conventional truth",
          "Nature of valid cognition",
          "Critique of philosophical views"
        ],
        ethics: [
          "Integration of wisdom and compassion",
          "Skillful means",
          "Bodhisattva path",
          "Social engagement"
        ],
        modernContext: [
          "Dialogue with science",
          "Environmental philosophy",
          "Peace studies",
          "Systems thinking"
        ]
      },
      legacy: "Nāgārjuna's philosophical work revolutionized Buddhist thought and continues to influence modern discussions in philosophy, science, and ethics.",
      quotes: [
        "Whatever is dependently co-arisen, that is explained to be emptiness.",
        "For whom emptiness is possible, everything is possible.",
        "The nature of things is to have no nature; it is their non-nature that is their nature."
      ]
    }
  ],
  resources: [
    {
      title: "Introduction to Buddhist Philosophy",
      author: "Stephen J. Laumakis",
      year: "2008",
      type: "Book",
      description: "Comprehensive introduction to the major concepts and schools of Buddhist philosophy",
      language: "English",
      level: "Intermediate",
      amazonUrl: "https://www.amazon.com/Introduction-Buddhist-Philosophy-Stephen-Laumakis/dp/0521854113",
      isbn: "978-0521854115"
    },
    {
      title: "Buddhist Philosophy: Essential Readings",
      author: "William Edelglass and Jay L. Garfield",
      year: "2009",
      type: "Book",
      description: "Collection of essential Buddhist philosophical texts with expert commentary",
      language: "English",
      level: "Advanced",
      amazonUrl: "https://www.amazon.com/Buddhist-Philosophy-Essential-William-Edelglass/dp/0195328175",
      isbn: "978-0195328172"
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

      {/* Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>{buddhistPhilosophyContent.overview.definition}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Significance:</h3>
              <ul className="list-disc pl-6">
                {buddhistPhilosophyContent.overview.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Main Philosophical Schools:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Abhidharma:</h4>
                  <ul className="list-disc pl-6">
                    {buddhistPhilosophyContent.overview.mainBranches.abhidharma.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Madhyamaka:</h4>
                  <ul className="list-disc pl-6">
                    {buddhistPhilosophyContent.overview.mainBranches.madhyamaka.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Yogācāra:</h4>
                  <ul className="list-disc pl-6">
                    {buddhistPhilosophyContent.overview.mainBranches.yogacara.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Tantric:</h4>
                  <ul className="list-disc pl-6">
                    {buddhistPhilosophyContent.overview.mainBranches.tantric.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Philosophical Concepts */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Philosophical Concepts</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistPhilosophyContent.concepts.map((concept, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {concept.name} ({concept.sanskritName} / {concept.paliName})
              </h3>
              <p className="mb-2">{concept.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Principles:</h4>
                  <ul className="list-disc pl-6">
                    {concept.principles.map((principle, idx) => (
                      <li key={idx}>{principle}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Applications:</h4>
                  <ul className="list-disc pl-6">
                    {concept.applications.map((application, idx) => (
                      <li key={idx}>{application}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Schools */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Philosophical Schools</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistPhilosophyContent.schools.map((school, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{school.name} ({school.sanskritName})</h3>
              <p className="mb-2">Period: {school.period}</p>
              <p className="mb-2">Founders: {school.founders.join(", ")}</p>
              <p className="mb-2">{school.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Main Teachings:</h4>
                  <ul className="list-disc pl-6">
                    {school.mainTeachings.map((teaching, idx) => (
                      <li key={idx}>{teaching}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Relevance:</h4>
                  <ul className="list-disc pl-6">
                    {school.modernRelevance.map((item, idx) => (
                      <li key={idx}>{item}</li>
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
              <h3 className="text-xl font-semibold mb-2">{philosopher.name} ({philosopher.sanskritName})</h3>
              <p className="mb-2">Period: {philosopher.period}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Contributions:</h4>
                  <ul className="list-disc pl-6">
                    {philosopher.biography.contributions.map((contribution, idx) => (
                      <li key={idx}>{contribution}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Legacy:</h4>
                  <p>{philosopher.legacy}</p>
                  <h4 className="font-semibold mt-4">Notable Quotes:</h4>
                  <ul className="list-disc pl-6">
                    {philosopher.quotes.map((quote, idx) => (
                      <li key={idx} className="italic">{quote}</li>
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
          <CardTitle>Recommended Resources</CardTitle>
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
                <Link 
                  href={resource.amazonUrl}
                  className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Amazon
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 