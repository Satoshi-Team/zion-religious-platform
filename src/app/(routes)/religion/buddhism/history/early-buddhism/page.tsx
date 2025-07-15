import React from 'react'
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

interface Council {
  name: string
  sanskritName: string
  paliName: string
  period: string
  location: string
  description: string
  participants: string[]
  purpose: string[]
  outcomes: string[]
  significance: string[]
  historicalContext: string[]
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

interface EarlyBuddhismContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  historicalPeriods: HistoricalPeriod[]
  keyFigures: KeyFigure[]
  councils: Council[]
  textualTraditions: TextualTradition[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Early Buddhism | Buddhist History",
  description: "Comprehensive exploration of Early Buddhism, its historical development, key figures, and foundational texts.",
  openGraph: {
    title: "Early Buddhism | Buddhist History",
    description: "In-depth study of Buddhism's early period, from the Buddha's life to the first Buddhist councils",
    type: "website",
  },
}

const earlyBuddhismContent: EarlyBuddhismContent = {
  introduction: `Early Buddhism represents the formative period of Buddhist history, beginning with the Buddha's life and teachings in the 5th century BCE and extending through the first few centuries after his passing. This period saw the establishment of core doctrines, the formation of the monastic community, and the initial transmission of the teachings. The developments during this time laid the foundation for all subsequent Buddhist traditions and continue to influence Buddhist practice and thought today.`,
  timeline: {
    start: "5th Century BCE",
    end: "3rd Century BCE",
    overview: "Early Buddhism emerged with the Buddha's enlightenment and teaching career, followed by the establishment of the monastic community and the first Buddhist councils. This period saw the initial compilation and transmission of the Buddhist teachings.",
    significance: [
      "Establishment of core doctrines",
      "Formation of monastic community",
      "First Buddhist councils",
      "Initial text compilation",
      "Spread of Buddhism",
      "Development of early schools",
      "Establishment of monastic rules",
      "Formation of Buddhist art"
    ]
  },
  historicalPeriods: [
    {
      name: "Buddha's Life and Teaching",
      sanskritName: "Buddha Jīvita",
      paliName: "Buddha Jīvita",
      period: "5th Century BCE",
      description: "The period encompassing the Buddha's life, from his birth to his passing away, during which he established the core teachings and monastic community.",
      keyEvents: [
        "Birth in Lumbini",
        "Great Renunciation",
        "Enlightenment at Bodh Gaya",
        "First teaching at Sarnath",
        "Formation of Sangha",
        "Establishment of monastic rules",
        "Final passing at Kusinara"
      ],
      developments: [
        "Core doctrinal framework",
        "Monastic community structure",
        "Teaching methods",
        "Meditation practices",
        "Ethical guidelines"
      ],
      challenges: [
        "Opposition from other traditions",
        "Internal dissent",
        "Organizational needs",
        "Geographic spread",
        "Teaching adaptation"
      ],
      significance: [
        "Foundation of Buddhism",
        "Establishment of Sangha",
        "Formulation of core teachings",
        "Development of monastic life",
        "Creation of teaching methods"
      ],
      modernRelevance: [
        "Historical authenticity",
        "Teaching methods",
        "Monastic traditions",
        "Meditation practices",
        "Ethical guidelines"
      ]
    }
  ],
  keyFigures: [
    {
      name: "Ānanda",
      sanskritName: "आनन्द",
      paliName: "Ānanda",
      period: "5th Century BCE",
      role: "Buddha's Personal Attendant",
      biography: {
        origin: "Kapilavastu",
        background: [
          "Cousin of the Buddha",
          "Member of the Śākya clan",
          "Early follower of the Buddha",
          "Personal attendant for 25 years"
        ],
        teachers: [
          "The Buddha",
          "Mahākassapa"
        ],
        students: [
          "Numerous monks and nuns",
          "Key transmitter of teachings"
        ],
        majorWorks: [
          {
            title: "Recitation of Suttas",
            sanskritTitle: "सूत्र संग्रह",
            paliTitle: "Sutta Saṅgaha",
            date: "1st Council",
            description: "Recitation of the Buddha's discourses at the First Council",
            significance: "Preservation of the Sutta Piṭaka",
            keyFeatures: [
              "Systematic organization",
              "Verbatim transmission",
              "Group recitation",
              "Cross-verification",
              "Canonical establishment"
            ]
          }
        ]
      },
      contributions: {
        doctrinal: [
          "Preservation of discourses",
          "Teaching transmission",
          "Doctrinal clarification",
          "Question formulation",
          "Teaching requests"
        ],
        institutional: [
          "Sangha organization",
          "Monastic rules",
          "Community harmony",
          "Women's ordination",
          "Teaching structure"
        ],
        literary: [
          "Sutta compilation",
          "Teaching organization",
          "Narrative preservation",
          "Biographical details",
          "Historical records"
        ],
        social: [
          "Lay community relations",
          "Women's inclusion",
          "Social harmony",
          "Community building",
          "Cultural adaptation"
        ],
        other: [
          "Personal example",
          "Teaching accessibility",
          "Historical documentation",
          "Cultural preservation",
          "Tradition establishment"
        ]
      },
      legacy: "Ānanda's role as the Buddha's personal attendant and his exceptional memory made him crucial in preserving and transmitting the Buddha's teachings. His contributions to the First Council and his advocacy for women's ordination demonstrate his commitment to both preserving the teachings and making them accessible to all.",
      modernRelevance: [
        "Historical authenticity",
        "Teaching transmission",
        "Gender equality",
        "Community building",
        "Cultural preservation"
      ]
    }
  ],
  councils: [
    {
      name: "First Buddhist Council",
      sanskritName: "प्रथम संगीति",
      paliName: "Paṭhama Saṅgīti",
      period: "483 BCE",
      location: "Rājagaha",
      description: "The first gathering of Buddhist monks after the Buddha's passing, convened to preserve and systematize his teachings.",
      participants: [
        "500 Arahants",
        "Mahākassapa (president)",
        "Ānanda (sutta reciter)",
        "Upāli (vinaya reciter)"
      ],
      purpose: [
        "Preserve Buddha's teachings",
        "Establish canonical texts",
        "Maintain doctrinal unity",
        "Systematize monastic rules",
        "Ensure teaching accuracy"
      ],
      outcomes: [
        "Recitation of Vinaya",
        "Recitation of Suttas",
        "Establishment of canon",
        "Formation of Abhidhamma",
        "Organization of teachings"
      ],
      significance: [
        "Canonical establishment",
        "Doctrinal preservation",
        "Monastic organization",
        "Teaching transmission",
        "Historical documentation"
      ],
      historicalContext: [
        "Post-Buddha period",
        "Monastic development",
        "Teaching preservation",
        "Community organization",
        "Cultural transmission"
      ]
    }
  ],
  textualTraditions: [
    {
      name: "Pali Canon",
      sanskritName: "पालि त्रिपिटक",
      paliName: "Pāli Tipiṭaka",
      category: "Canonical Texts",
      description: "The earliest complete collection of Buddhist scriptures, preserved in the Pali language and containing the core teachings of Early Buddhism.",
      contents: [
        "Vinaya Piṭaka",
        "Sutta Piṭaka",
        "Abhidhamma Piṭaka"
      ],
      transmission: [
        "Oral tradition",
        "Written preservation",
        "Monastic recitation",
        "Regional variations",
        "Textual evolution"
      ],
      significance: [
        "Historical authenticity",
        "Doctrinal foundation",
        "Monastic guidance",
        "Teaching preservation",
        "Cultural heritage"
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
      title: "The Life of the Buddha: According to the Pali Canon",
      author: "Bhikkhu Ñānamoli",
      year: "1972",
      type: "Book",
      description: "Comprehensive biography of the Buddha based on the earliest Buddhist texts",
      language: "English",
      level: "Intermediate",
      amazonUrl: "https://www.amazon.com/Life-Buddha-According-Pali-Canon/dp/0861712126",
      isbn: "978-0861712121"
    },
    {
      title: "Early Buddhism: A New Approach",
      author: "Sue Hamilton",
      year: "2000",
      type: "Book",
      description: "Modern scholarly analysis of Early Buddhist teachings and their historical context",
      language: "English",
      level: "Advanced",
      amazonUrl: "https://www.amazon.com/Early-Buddhism-Approach-Sue-Hamilton/dp/070071172X",
      isbn: "978-0700711727"
    }
  ]
}

export default function EarlyBuddhismPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Early Buddhism</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{earlyBuddhismContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {earlyBuddhismContent.timeline.start} - {earlyBuddhismContent.timeline.end}</p>
            <p>{earlyBuddhismContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {earlyBuddhismContent.timeline.significance.map((item, index) => (
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
          {earlyBuddhismContent.historicalPeriods.map((period, index) => (
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
          {earlyBuddhismContent.keyFigures.map((figure, index) => (
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

      {/* Councils */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Buddhist Councils</CardTitle>
        </CardHeader>
        <CardContent>
          {earlyBuddhismContent.councils.map((council, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {council.name} ({council.sanskritName} / {council.paliName})
              </h3>
              <p className="mb-2">Period: {council.period}</p>
              <p className="mb-2">Location: {council.location}</p>
              <p className="mb-2">{council.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Outcomes:</h4>
                  <ul className="list-disc pl-6">
                    {council.outcomes.map((outcome, idx) => (
                      <li key={idx}>{outcome}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-6">
                    {council.significance.map((item, idx) => (
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
          {earlyBuddhismContent.textualTraditions.map((tradition, index) => (
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
            {earlyBuddhismContent.resources.map((resource, index) => (
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