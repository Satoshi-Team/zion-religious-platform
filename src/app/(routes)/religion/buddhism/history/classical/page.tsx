import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface HistoricalPeriod {
  name: string
  sanskritName: string
  paliName: string
  period: string
  description: string
  keyEvents: string[]
  developments: string[]
  challenges: string[]
  significance: string[]
  modernRelevance: string[]
}

interface KeyFigure {
  name: string
  sanskritName: string
  paliName: string
  period: string
  role: string
  biography: {
    origin: string
    background: string[]
    teachers: string[]
    students: string[]
    majorWorks: Array<{
      title: string
      sanskritTitle: string
      paliTitle: string
      date: string
      description: string
      significance: string
      keyFeatures: string[]
    }>
  }
  contributions: {
    doctrinal: string[]
    institutional: string[]
    literary: string[]
    social: string[]
    other: string[]
  }
  legacy: string
  modernRelevance: string[]
}

interface School {
  name: string
  sanskritName: string
  paliName: string
  period: string
  location: string
  description: string
  founder: string
  doctrines: string[]
  practices: string[]
  texts: string[]
  influence: string[]
  modernPresence: string[]
}

interface TextualTradition {
  name: string
  sanskritName: string
  paliName: string
  category: string
  description: string
  contents: string[]
  transmission: string[]
  significance: string[]
  modernStudy: string[]
  translations: string[]
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

interface ClassicalBuddhismContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  historicalPeriods: HistoricalPeriod[]
  keyFigures: KeyFigure[]
  schools: School[]
  textualTraditions: TextualTradition[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Classical Buddhism | Buddhist History",
  description: "Comprehensive exploration of Classical Buddhism, its philosophical developments, major schools, and influential figures.",
  openGraph: {
    title: "Classical Buddhism | Buddhist History",
    description: "In-depth study of Buddhism's classical period, featuring major philosophical developments and school formations",
    type: "website",
  },
}

const classicalBuddhismContent: ClassicalBuddhismContent = {
  introduction: `Classical Buddhism represents a period of remarkable intellectual and institutional development in Buddhist history, spanning from the 3rd century BCE to the 5th century CE. This era saw the emergence of sophisticated philosophical systems, the formation of major Buddhist schools, and the development of extensive commentarial literature. The period was marked by intense philosophical debate, systematic doctrinal development, and the spread of Buddhism across Asia, laying the groundwork for the diverse Buddhist traditions that exist today.`,
  timeline: {
    start: "3rd Century BCE",
    end: "5th Century CE",
    overview: "Classical Buddhism emerged with the spread of Buddhism under Emperor Aśoka and developed through the formation of major schools, philosophical systematization, and extensive literary production. This period saw the establishment of sophisticated philosophical systems and the development of distinct Buddhist traditions.",
    significance: [
      "Formation of major schools",
      "Development of philosophical systems",
      "Expansion of Buddhist literature",
      "Spread across Asia",
      "Artistic and architectural development",
      "Monastic institution growth",
      "Commentarial tradition",
      "Cultural synthesis"
    ]
  },
  historicalPeriods: [
    {
      name: "Aśokan Period",
      sanskritName: "अशोक काल",
      paliName: "Asoka Kāla",
      period: "3rd Century BCE",
      description: "The period of Buddhist expansion and institutional development under Emperor Aśoka's patronage, which saw the spread of Buddhism across India and beyond.",
      keyEvents: [
        "Aśoka's conversion to Buddhism",
        "Third Buddhist Council",
        "Missionary activities",
        "Stupa construction",
        "Pillar edicts",
        "Monastic establishment",
        "Text compilation"
      ],
      developments: [
        "Institutional organization",
        "Missionary activities",
        "Artistic expression",
        "Textual preservation",
        "Monastic expansion"
      ],
      challenges: [
        "Regional variations",
        "Cultural adaptation",
        "Doctrinal interpretation",
        "Organizational needs",
        "Political dynamics"
      ],
      significance: [
        "Buddhism's first major expansion",
        "Establishment of institutions",
        "Development of Buddhist art",
        "Textual preservation",
        "Cultural transmission"
      ],
      modernRelevance: [
        "Archaeological evidence",
        "Historical documentation",
        "Cultural heritage",
        "Institutional models",
        "Artistic traditions"
      ]
    }
  ],
  keyFigures: [
    {
      name: "Nāgārjuna",
      sanskritName: "नागार्जुन",
      paliName: "Nāgārjuna",
      period: "2nd-3rd Century CE",
      role: "Founder of Mādhyamika School",
      biography: {
        origin: "South India",
        background: [
          "Brahmin family",
          "Early Buddhist education",
          "Study of various traditions",
          "Founder of Mādhyamika"
        ],
        teachers: [
          "Various Buddhist masters",
          "Traditional accounts mention Saraha"
        ],
        students: [
          "Āryadeva",
          "Numerous disciples"
        ],
        majorWorks: [
          {
            title: "Mūlamadhyamakakārikā",
            sanskritTitle: "मूलमध्यमककारिका",
            paliTitle: "Mūlamajjhimakārikā",
            date: "2nd-3rd Century CE",
            description: "Fundamental verses on the Middle Way, establishing the Mādhyamika philosophical system",
            significance: "Foundation of Mādhyamika philosophy",
            keyFeatures: [
              "Emptiness doctrine",
              "Two truths theory",
              "Dependent origination",
              "Logical analysis",
              "Philosophical method"
            ]
          }
        ]
      },
      contributions: {
        doctrinal: [
          "Development of emptiness theory",
          "Two truths doctrine",
          "Philosophical methodology",
          "Logical analysis",
          "Dependent origination interpretation"
        ],
        institutional: [
          "Mādhyamika school establishment",
          "Teaching lineage",
          "Textual tradition",
          "Philosophical debate",
          "Monastic education"
        ],
        literary: [
          "Philosophical treatises",
          "Commentarial works",
          "Poetic compositions",
          "Logical texts",
          "Epistles"
        ],
        social: [
          "Intellectual influence",
          "Cultural impact",
          "Religious dialogue",
          "Educational methods",
          "Philosophical debate"
        ],
        other: [
          "Alchemical works",
          "Medical knowledge",
          "Astronomical texts",
          "Technical treatises",
          "Cultural synthesis"
        ]
      },
      legacy: "Nāgārjuna's philosophical contributions revolutionized Buddhist thought, establishing the Mādhyamika school and profoundly influencing all subsequent Buddhist traditions. His works on emptiness and the Middle Way continue to shape Buddhist philosophy and practice today.",
      modernRelevance: [
        "Philosophical analysis",
        "Logical methodology",
        "Meditation practice",
        "Interreligious dialogue",
        "Contemporary applications"
      ]
    }
  ],
  schools: [
    {
      name: "Mādhyamika",
      sanskritName: "मध्यमिक",
      paliName: "Majjhimika",
      period: "2nd-3rd Century CE",
      location: "South India",
      description: "A major Mahāyāna Buddhist school founded by Nāgārjuna, emphasizing the doctrine of emptiness and the Middle Way.",
      founder: "Nāgārjuna",
      doctrines: [
        "Emptiness (śūnyatā)",
        "Two truths",
        "Dependent origination",
        "Middle Way",
        "Non-duality"
      ],
      practices: [
        "Analytical meditation",
        "Logical analysis",
        "Philosophical debate",
        "Textual study",
        "Contemplative practice"
      ],
      texts: [
        "Mūlamadhyamakakārikā",
        "Vigrahavyāvartanī",
        "Śūnyatāsaptati",
        "Yuktiṣaṣṭikā",
        "Ratnāvalī"
      ],
      influence: [
        "Mahāyāna development",
        "Tibetan Buddhism",
        "East Asian Buddhism",
        "Modern philosophy",
        "Comparative religion"
      ],
      modernPresence: [
        "Tibetan traditions",
        "Zen Buddhism",
        "Academic study",
        "Meditation practice",
        "Philosophical dialogue"
      ]
    }
  ],
  textualTraditions: [
    {
      name: "Mahāyāna Sūtras",
      sanskritName: "महायान सूत्र",
      paliName: "Mahāyāna Sutta",
      category: "Canonical Texts",
      description: "A collection of texts that form the foundation of Mahāyāna Buddhism, presenting new perspectives on Buddhist doctrine and practice.",
      contents: [
        "Prajñāpāramitā Sūtras",
        "Lotus Sūtra",
        "Pure Land Sūtras",
        "Avataṃsaka Sūtra",
        "Vimalakīrti Sūtra"
      ],
      transmission: [
        "Sanskrit originals",
        "Chinese translations",
        "Tibetan translations",
        "Regional variations",
        "Commentarial traditions"
      ],
      significance: [
        "Mahāyāna foundation",
        "New doctrinal perspectives",
        "Bodhisattva ideal",
        "Philosophical development",
        "Cultural influence"
      ],
      modernStudy: [
        "Textual analysis",
        "Historical research",
        "Comparative studies",
        "Translation work",
        "Digital preservation"
      ],
      translations: [
        "English",
        "Chinese",
        "Tibetan",
        "Japanese",
        "Korean"
      ]
    }
  ],
  resources: [
    {
      title: "The Philosophy of the Middle Way: Mūlamadhyamakakārikā",
      author: "David J. Kalupahana",
      year: "1986",
      type: "Book",
      description: "Comprehensive analysis of Nāgārjuna's fundamental work on the Middle Way",
      language: "English",
      level: "Advanced",
      amazonUrl: "https://www.amazon.com/Philosophy-Middle-Way-Mulamadhyamakakarika/dp/0791403614",
      isbn: "978-0791403611"
    },
    {
      title: "Buddhism in India: From the Sixth Century B.C. to the Third Century A.D.",
      author: "Akira Hirakawa",
      year: "1990",
      type: "Book",
      description: "Detailed historical study of Buddhism's development in India during the classical period",
      language: "English",
      level: "Intermediate",
      amazonUrl: "https://www.amazon.com/Buddhism-India-Sixth-Century-Third/dp/8120807416",
      isbn: "978-8120807418"
    }
  ]
}

export default function ClassicalBuddhismPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Classical Buddhism</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{classicalBuddhismContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {classicalBuddhismContent.timeline.start} - {classicalBuddhismContent.timeline.end}</p>
            <p>{classicalBuddhismContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {classicalBuddhismContent.timeline.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Historical Periods */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Periods</CardTitle>
        </CardHeader>
        <CardContent>
          {classicalBuddhismContent.historicalPeriods.map((period, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {period.name} ({period.sanskritName} / {period.paliName})
              </h3>
              <p className="mb-2">Period: {period.period}</p>
              <p className="mb-2">{period.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Key Events:</h4>
                  <ul className="list-disc pl-6">
                    {period.keyEvents.map((event, idx) => (
                      <li key={idx}>{event}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-6">
                    {period.significance.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Key Figures */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Figures</CardTitle>
        </CardHeader>
        <CardContent>
          {classicalBuddhismContent.keyFigures.map((figure, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {figure.name} ({figure.sanskritName} / {figure.paliName})
              </h3>
              <p className="mb-2">Period: {figure.period}</p>
              <p className="mb-2">Role: {figure.role}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Contributions:</h4>
                  <ul className="list-disc pl-6">
                    {Object.entries(figure.contributions).map(([category, items]) => (
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
                  <p>{figure.legacy}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Schools */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Major Schools</CardTitle>
        </CardHeader>
        <CardContent>
          {classicalBuddhismContent.schools.map((school, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {school.name} ({school.sanskritName} / {school.paliName})
              </h3>
              <p className="mb-2">Period: {school.period}</p>
              <p className="mb-2">Location: {school.location}</p>
              <p className="mb-2">Founder: {school.founder}</p>
              <p className="mb-2">{school.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Doctrines:</h4>
                  <ul className="list-disc pl-6">
                    {school.doctrines.map((doctrine, idx) => (
                      <li key={idx}>{doctrine}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Presence:</h4>
                  <ul className="list-disc pl-6">
                    {school.modernPresence.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Textual Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Textual Traditions</CardTitle>
        </CardHeader>
        <CardContent>
          {classicalBuddhismContent.textualTraditions.map((tradition, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {tradition.name} ({tradition.sanskritName} / {tradition.paliName})
              </h3>
              <p className="mb-2">{tradition.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Contents:</h4>
                  <ul className="list-disc pl-6">
                    {tradition.contents.map((content, idx) => (
                      <li key={idx}>{content}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-6">
                    {tradition.significance.map((item, idx) => (
                      <li key={idx}>{item}</li>
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
            {classicalBuddhismContent.resources.map((resource, index) => (
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