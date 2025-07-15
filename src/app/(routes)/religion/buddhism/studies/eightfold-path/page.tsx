import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface PathComponent {
  name: string
  sanskritName: string
  paliName: string
  category: string
  description: string
  principles: string[]
  practices: string[]
  challenges: string[]
  benefits: string[]
  modernApplications: string[]
}

interface Teacher {
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
      keyTeachings: string[]
    }>
  }
  interpretations: {
    eightfoldPath: string[]
    meditation: string[]
    practice: string[]
    modernContext: string[]
  }
  legacy: string
  quotes: string[]
}

interface Practice {
  name: string
  sanskritName: string
  category: string
  description: string
  origins: string[]
  methodology: string[]
  keyTeachers: Array<{
    name: string
    sanskritName: string
    contribution: string
  }>
  benefits: string[]
  challenges: string[]
  modernApplications: string[]
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

interface EightfoldPathContent {
  introduction: string
  overview: {
    definition: string
    significance: string[]
    categories: {
      wisdom: string[]
      ethics: string[]
      meditation: string[]
    }
  }
  pathComponents: PathComponent[]
  teachers: Teacher[]
  practices: Practice[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "The Noble Eightfold Path | Buddhist Studies",
  description: "Comprehensive exploration of Buddhism's Noble Eightfold Path - the practical guide to enlightenment and liberation from suffering.",
  openGraph: {
    title: "The Noble Eightfold Path | Buddhist Studies",
    description: "In-depth study of the Buddha's Noble Eightfold Path and its application in modern life",
    type: "website",
  },
}

const eightfoldPathContent: EightfoldPathContent = {
  introduction: `The Noble Eightfold Path (Ariya Aṭṭhaṅgika Magga) represents the fourth Noble Truth in Buddhism, offering a practical guide to ethical and mental development aimed at liberation from suffering. This comprehensive path, taught by the Buddha, integrates wisdom, ethical conduct, and mental discipline to lead practitioners toward enlightenment. Each aspect of the path is interconnected and mutually supportive, creating a holistic approach to spiritual development.`,
  overview: {
    definition: "The Noble Eightfold Path is the Buddha's practical guide to ending suffering, consisting of eight interconnected practices grouped into three essential categories: wisdom, ethical conduct, and mental discipline.",
    significance: [
      "Foundation of Buddhist practice",
      "Practical implementation of the Four Noble Truths",
      "Guide to ethical living",
      "Path to mental purification",
      "Framework for spiritual development",
      "Method for ending suffering",
      "Guide to enlightenment",
      "Blueprint for modern mindful living"
    ],
    categories: {
      wisdom: [
        "Right View (Samma Ditthi)",
        "Right Intention (Samma Sankappa)"
      ],
      ethics: [
        "Right Speech (Samma Vaca)",
        "Right Action (Samma Kammanta)",
        "Right Livelihood (Samma Ajiva)"
      ],
      meditation: [
        "Right Effort (Samma Vayama)",
        "Right Mindfulness (Samma Sati)",
        "Right Concentration (Samma Samadhi)"
      ]
    }
  },
  pathComponents: [
    {
      name: "Right View",
      sanskritName: "Samyag Dṛṣṭi",
      paliName: "Sammā Diṭṭhi",
      category: "Wisdom (Pañña)",
      description: "Understanding reality as it is, particularly in terms of the Four Noble Truths and the nature of karma and rebirth.",
      principles: [
        "Understanding of the Four Noble Truths",
        "Recognition of karma and its effects",
        "Understanding of impermanence (anicca)",
        "Recognition of non-self (anatta)",
        "Understanding of dependent origination"
      ],
      practices: [
        "Study of Buddhist teachings",
        "Contemplation of life experiences",
        "Mindful observation of cause and effect",
        "Regular reflection on the nature of reality",
        "Discussion with wise teachers and practitioners"
      ],
      challenges: [
        "Overcoming ingrained wrong views",
        "Breaking through conceptual thinking",
        "Dealing with cultural conditioning",
        "Maintaining consistent practice",
        "Integrating understanding into daily life"
      ],
      benefits: [
        "Clear understanding of reality",
        "Reduced confusion and delusion",
        "Better decision-making ability",
        "Increased wisdom in daily life",
        "Foundation for further practice"
      ],
      modernApplications: [
        "Critical thinking development",
        "Ethical decision-making",
        "Personal development",
        "Professional ethics",
        "Environmental awareness"
      ]
    }
  ],
  teachers: [
    {
      name: "Thich Nhat Hanh",
      sanskritName: "Thích Nhất Hạnh",
      period: "1926-2022",
      tradition: "Zen Buddhism",
      biography: {
        origin: "Vietnam",
        background: [
          "Ordained as a monk at age 16",
          "Founded the Order of Interbeing",
          "Pioneered Engaged Buddhism",
          "Peace activist during Vietnam War",
          "Established Plum Village monastery"
        ],
        contributions: [
          "Modern interpretation of mindfulness",
          "Integration of Buddhism with social action",
          "Accessible teaching methods",
          "Interfaith dialogue promotion",
          "Environmental engagement"
        ],
        teachings: [
          "Mindfulness in daily life",
          "Peace activism",
          "Environmental awareness",
          "Community building",
          "Engaged Buddhism"
        ],
        disciples: [
          "Sister Chan Khong",
          "Brother Phap Hai",
          "Sister Dang Nghiem"
        ],
        majorWorks: [
          {
            title: "The Heart of the Buddha's Teaching",
            sanskritTitle: "",
            date: "1998",
            topic: "Buddhist Fundamentals",
            description: "Comprehensive guide to basic Buddhist teachings including the Eightfold Path",
            significance: "Made Buddhist teachings accessible to Western audiences",
            keyTeachings: [
              "Integration of mindfulness in daily life",
              "Modern interpretation of Buddhist practices",
              "Practical application of Buddhist principles",
              "Mindful living in modern society"
            ]
          }
        ]
      },
      interpretations: {
        eightfoldPath: [
          "Integration of mindfulness in daily activities",
          "Emphasis on practical application",
          "Connection between personal and social transformation",
          "Importance of community practice"
        ],
        meditation: [
          "Walking meditation",
          "Mindful breathing",
          "Engaged mindfulness",
          "Community meditation"
        ],
        practice: [
          "Mindfulness in daily life",
          "Peace cultivation",
          "Environmental awareness",
          "Social engagement"
        ],
        modernContext: [
          "Application in social justice",
          "Environmental protection",
          "Conflict resolution",
          "Mental health"
        ]
      },
      legacy: "Thich Nhat Hanh's interpretation of the Eightfold Path made Buddhist teachings accessible and relevant to modern practitioners while maintaining their essential wisdom.",
      quotes: [
        "Walk as if you are kissing the Earth with your feet.",
        "Peace in oneself, peace in the world.",
        "The present moment is filled with joy and happiness. If you are attentive, you will see it."
      ]
    }
  ],
  practices: [
    {
      name: "Mindful Speech",
      sanskritName: "Samyag Vac",
      category: "Ethical Conduct",
      description: "The practice of using speech that is truthful, helpful, kind, and conducive to harmony.",
      origins: [
        "Buddha's teachings on Right Speech",
        "Early Buddhist texts",
        "Monastic guidelines"
      ],
      methodology: [
        "Speaking truthfully",
        "Avoiding harsh speech",
        "Practicing kind communication",
        "Mindful listening",
        "Cultivating helpful speech"
      ],
      keyTeachers: [
        {
          name: "Thich Nhat Hanh",
          sanskritName: "Thích Nhất Hạnh",
          contribution: "Development of mindful communication practices"
        }
      ],
      benefits: [
        "Improved relationships",
        "Better communication",
        "Reduced conflicts",
        "Greater self-awareness",
        "Harmonious community"
      ],
      challenges: [
        "Breaking habitual speech patterns",
        "Maintaining mindfulness in conversation",
        "Managing emotional reactions",
        "Cultural communication differences"
      ],
      modernApplications: [
        "Workplace communication",
        "Digital communication",
        "Conflict resolution",
        "Public speaking",
        "Social media interaction"
      ]
    }
  ],
  resources: [
    {
      title: "The Noble Eightfold Path: Way to the End of Suffering",
      author: "Bhikkhu Bodhi",
      year: "1984",
      type: "Book",
      description: "Comprehensive guide to understanding and practicing the Noble Eightfold Path",
      language: "English",
      level: "Intermediate",
      amazonUrl: "https://www.amazon.com/Noble-Eightfold-Path-Way-Suffering/dp/192870607X",
      isbn: "978-1928706076"
    },
    {
      title: "The Heart of the Buddha's Teaching",
      author: "Thich Nhat Hanh",
      year: "1998",
      type: "Book",
      description: "Accessible introduction to core Buddhist teachings including the Eightfold Path",
      language: "English",
      level: "Beginner",
      amazonUrl: "https://www.amazon.com/Heart-Buddhas-Teaching-Transforming-Liberation/dp/0767903692",
      isbn: "978-0767903691"
    }
  ]
}

export default function EightfoldPathPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">The Noble Eightfold Path</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{eightfoldPathContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>{eightfoldPathContent.overview.definition}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Significance:</h3>
              <ul className="list-disc pl-6">
                {eightfoldPathContent.overview.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Categories:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold">Wisdom (Pañña):</h4>
                  <ul className="list-disc pl-6">
                    {eightfoldPathContent.overview.categories.wisdom.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Ethics (Sīla):</h4>
                  <ul className="list-disc pl-6">
                    {eightfoldPathContent.overview.categories.ethics.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Mental Discipline (Samādhi):</h4>
                  <ul className="list-disc pl-6">
                    {eightfoldPathContent.overview.categories.meditation.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Path Components */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Path Components</CardTitle>
        </CardHeader>
        <CardContent>
          {eightfoldPathContent.pathComponents.map((component, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {component.name} ({component.sanskritName} / {component.paliName})
              </h3>
              <p className="mb-2">{component.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Principles:</h4>
                  <ul className="list-disc pl-6">
                    {component.principles.map((principle, idx) => (
                      <li key={idx}>{principle}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Practices:</h4>
                  <ul className="list-disc pl-6">
                    {component.practices.map((practice, idx) => (
                      <li key={idx}>{practice}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Teachers */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notable Teachers</CardTitle>
        </CardHeader>
        <CardContent>
          {eightfoldPathContent.teachers.map((teacher, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{teacher.name} ({teacher.sanskritName})</h3>
              <p className="mb-2">Period: {teacher.period}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Contributions:</h4>
                  <ul className="list-disc pl-6">
                    {teacher.biography.contributions.map((contribution, idx) => (
                      <li key={idx}>{contribution}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Legacy:</h4>
                  <p>{teacher.legacy}</p>
                  <h4 className="font-semibold mt-4">Notable Quotes:</h4>
                  <ul className="list-disc pl-6">
                    {teacher.quotes.map((quote, idx) => (
                      <li key={idx} className="italic">{quote}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Practices */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Practices</CardTitle>
        </CardHeader>
        <CardContent>
          {eightfoldPathContent.practices.map((practice, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{practice.name} ({practice.sanskritName})</h3>
              <p className="mb-2">{practice.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Methodology:</h4>
                  <ul className="list-disc pl-6">
                    {practice.methodology.map((method, idx) => (
                      <li key={idx}>{method}</li>
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

      {/* Resources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recommended Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {eightfoldPathContent.resources.map((resource, index) => (
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