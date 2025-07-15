import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface ContemporaryPeriod {
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

interface Movement {
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

interface ContemporaryDevelopment {
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

interface ContemporaryBuddhismContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  contemporaryPeriods: ContemporaryPeriod[]
  keyFigures: KeyFigure[]
  movements: Movement[]
  contemporaryDevelopments: ContemporaryDevelopment[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Contemporary Buddhism | Buddhist History",
  description: "Comprehensive exploration of Contemporary Buddhism, its global developments, current movements, and influential figures across the world.",
  openGraph: {
    title: "Contemporary Buddhism | Buddhist History",
    description: "In-depth study of Buddhism's contemporary period, featuring current developments and modern movements",
    type: "website",
  },
}

const contemporaryBuddhismContent: ContemporaryBuddhismContent = {
  introduction: `Contemporary Buddhism represents the current phase of Buddhist development, characterized by unprecedented global spread, technological integration, and engagement with modern challenges. This period has seen Buddhism adapt to contemporary contexts while maintaining its core teachings, leading to innovative forms of practice and new ways of understanding Buddhist thought in the modern world.`,
  timeline: {
    start: "21st Century CE",
    end: "Present",
    overview: "Contemporary Buddhism continues to evolve in response to modern challenges, technological advances, and global interconnectedness, while maintaining traditional wisdom and adapting to new contexts.",
    significance: [
      "Digital transformation",
      "Global interconnectedness",
      "Environmental crisis response",
      "Social justice movements",
      "Scientific integration",
      "Cultural exchange",
      "Technological adaptation",
      "Social engagement"
    ]
  },
  contemporaryPeriods: [
    {
      name: "Digital Age Period",
      sanskritName: "डिजिटल युग काल",
      paliName: "Digital Yuga Kāla",
      period: "2000-Present",
      description: "A period marked by the integration of digital technology with Buddhist practice and teaching, leading to new forms of practice and community building.",
      keyEvents: [
        "Online meditation platforms",
        "Digital sanghas",
        "Social media presence",
        "Virtual retreats",
        "Digital archives",
        "Mobile applications",
        "Virtual reality practice"
      ],
      developments: [
        "Digital practice",
        "Online communities",
        "Virtual teaching",
        "Digital preservation",
        "Technological integration"
      ],
      challenges: [
        "Digital divide",
        "Authenticity",
        "Community building",
        "Traditional preservation",
        "Technological adaptation"
      ],
      significance: [
        "Global accessibility",
        "Modern practice",
        "Community building",
        "Cultural exchange",
        "Digital innovation"
      ],
      modernRelevance: [
        "Digital Buddhism",
        "Online practice",
        "Virtual communities",
        "Digital preservation",
        "Technological integration"
      ]
    },
    {
      name: "Environmental Crisis Period",
      sanskritName: "पर्यावरण संकट काल",
      paliName: "Pariyāvaṇa Saṅkaṭa Kāla",
      period: "2010-Present",
      description: "A period marked by Buddhist engagement with environmental issues and climate change, emphasizing ecological responsibility and sustainable practices.",
      keyEvents: [
        "Climate activism",
        "Environmental projects",
        "Sustainable practices",
        "Eco-temples",
        "Green initiatives",
        "Environmental education",
        "Climate advocacy"
      ],
      developments: [
        "Eco-Buddhism",
        "Environmental ethics",
        "Sustainable practices",
        "Climate action",
        "Green initiatives"
      ],
      challenges: [
        "Climate crisis",
        "Environmental degradation",
        "Sustainable development",
        "Traditional adaptation",
        "Global cooperation"
      ],
      significance: [
        "Environmental ethics",
        "Climate action",
        "Sustainable practice",
        "Global responsibility",
        "Cultural adaptation"
      ],
      modernRelevance: [
        "Environmental Buddhism",
        "Climate activism",
        "Sustainable living",
        "Global responsibility",
        "Cultural change"
      ]
    },
    {
      name: "Social Justice Period",
      sanskritName: "सामाजिक न्याय काल",
      paliName: "Sāmājika Naya Kāla",
      period: "2015-Present",
      description: "A period marked by increased Buddhist engagement with social justice issues, including racial equality, gender equity, and economic justice.",
      keyEvents: [
        "Racial justice movements",
        "Gender equity initiatives",
        "Economic justice projects",
        "Social activism",
        "Community building",
        "Cultural transformation",
        "Institutional reform"
      ],
      developments: [
        "Social engagement",
        "Justice initiatives",
        "Community building",
        "Cultural transformation",
        "Institutional reform"
      ],
      challenges: [
        "Social inequality",
        "Cultural change",
        "Institutional reform",
        "Traditional adaptation",
        "Global cooperation"
      ],
      significance: [
        "Social justice",
        "Cultural transformation",
        "Community building",
        "Global impact",
        "Historical change"
      ],
      modernRelevance: [
        "Social Buddhism",
        "Justice movements",
        "Cultural change",
        "Community building",
        "Global impact"
      ]
    }
  ],
  keyFigures: [
    {
      name: "Joseph Goldstein",
      sanskritName: "जोसेफ गोल्डस्टीन",
      paliName: "Joseph Goldstein",
      period: "1944-Present",
      role: "Pioneer of Western Insight Meditation",
      biography: {
        origin: "United States",
        background: [
          "Theravāda training",
          "Western psychology",
          "Social activism",
          "Global teaching"
        ],
        teachers: [
          "Various Theravāda masters",
          "Western teachers"
        ],
        students: [
          "Western practitioners",
          "Mental health professionals"
        ],
        majorWorks: [
          {
            title: "Mindfulness",
            sanskritTitle: "स्मृति",
            paliTitle: "Sati",
            date: "2016 CE",
            description: "Comprehensive guide to mindfulness practice in contemporary life",
            significance: "Modern synthesis of traditional and contemporary practice",
            keyFeatures: [
              "Modern psychology",
              "Traditional practice",
              "Social integration",
              "Personal development",
              "Contemporary adaptation"
            ]
          }
        ]
      },
      contributions: {
        doctrinal: [
          "Western Insight Meditation",
          "Modern psychology",
          "Social integration",
          "Personal development",
          "Contemporary practice"
        ],
        institutional: [
          "Insight Meditation Society",
          "Barre Center for Buddhist Studies",
          "Educational programs",
          "Social projects",
          "Community building"
        ],
        literary: [
          "Practice manuals",
          "Psychology texts",
          "Social writings",
          "Personal development",
          "Modern commentaries"
        ],
        social: [
          "Mental health",
          "Social activism",
          "Community building",
          "Cultural exchange",
          "Modern adaptation"
        ],
        other: [
          "Artistic influence",
          "Cultural preservation",
          "Technical knowledge",
          "Social organization",
          "International relations"
        ]
      },
      legacy: "Joseph Goldstein's work has been crucial in developing accessible forms of Buddhist practice for contemporary practitioners while maintaining traditional wisdom.",
      modernRelevance: [
        "Western Insight Meditation",
        "Mental health",
        "Social integration",
        "Personal development",
        "Contemporary practice"
      ]
    },
    {
      name: "Bhikkhu Bodhi",
      sanskritName: "भिक्षु बोधि",
      paliName: "Bhikkhu Bodhi",
      period: "1944-Present",
      role: "Pioneer of Buddhist Social Ethics",
      biography: {
        origin: "United States",
        background: [
          "Theravāda monastic training",
          "Pali studies",
          "Social activism",
          "Global teaching"
        ],
        teachers: [
          "Various Theravāda masters",
          "Western scholars"
        ],
        students: [
          "Western practitioners",
          "Academic researchers"
        ],
        majorWorks: [
          {
            title: "The Buddha's Teachings on Social and Communal Harmony",
            sanskritTitle: "बुद्ध के सामाजिक और सामुदायिक सद्भाव के उपदेश",
            paliTitle: "Buddhassa Sāmājika ca Sāmudāyika Samaggi Desanā",
            date: "2016 CE",
            description: "Analysis of Buddhist teachings on social harmony and ethical living",
            significance: "Modern interpretation of Buddhist social ethics",
            keyFeatures: [
              "Social ethics",
              "Community building",
              "Ethical living",
              "Social harmony",
              "Contemporary adaptation"
            ]
          }
        ]
      },
      contributions: {
        doctrinal: [
          "Buddhist social ethics",
          "Modern interpretation",
          "Social engagement",
          "Ethical living",
          "Contemporary practice"
        ],
        institutional: [
          "Buddhist Global Relief",
          "Educational programs",
          "Social projects",
          "Community building",
          "Global initiatives"
        ],
        literary: [
          "Pali translations",
          "Social writings",
          "Ethical texts",
          "Modern commentaries",
          "Educational works"
        ],
        social: [
          "Social justice",
          "Environmental action",
          "Community building",
          "Cultural exchange",
          "Global responsibility"
        ],
        other: [
          "Cultural preservation",
          "Technical knowledge",
          "Social organization",
          "Environmental work",
          "International relations"
        ]
      },
      legacy: "Bhikkhu Bodhi's work has been instrumental in developing Buddhist social ethics and promoting engaged Buddhism in response to contemporary challenges.",
      modernRelevance: [
        "Buddhist social ethics",
        "Social justice",
        "Environmental action",
        "Community building",
        "Global responsibility"
      ]
    }
  ],
  movements: [
    {
      name: "Eco-Buddhism",
      sanskritName: "पर्यावरण बौद्ध धर्म",
      paliName: "Pariyāvaṇa Bauddha Dhamma",
      period: "21st Century CE",
      location: "Global",
      description: "A movement emphasizing Buddhist principles in addressing environmental issues and promoting sustainable living.",
      founder: "Various contemporary teachers",
      doctrines: [
        "Environmental ethics",
        "Sustainable living",
        "Climate action",
        "Eco-consciousness",
        "Global responsibility"
      ],
      practices: [
        "Environmental action",
        "Sustainable living",
        "Climate advocacy",
        "Eco-temple initiatives",
        "Green practices"
      ],
      texts: [
        "Environmental writings",
        "Modern commentaries",
        "Practice guides",
        "Scientific works",
        "Social texts"
      ],
      influence: [
        "Environmental movement",
        "Climate action",
        "Sustainable living",
        "Global responsibility",
        "Cultural change"
      ],
      modernPresence: [
        "Eco-temples",
        "Environmental projects",
        "Climate initiatives",
        "Green communities",
        "Global networks"
      ]
    },
    {
      name: "Socially Engaged Buddhism",
      sanskritName: "सामाजिक रूप से सक्रिय बौद्ध धर्म",
      paliName: "Sāmājika Sakriya Bauddha Dhamma",
      period: "21st Century CE",
      location: "Global",
      description: "A movement emphasizing the application of Buddhist principles to contemporary social issues and community building.",
      founder: "Various contemporary teachers",
      doctrines: [
        "Social justice",
        "Community building",
        "Ethical living",
        "Cultural transformation",
        "Global responsibility"
      ],
      practices: [
        "Social activism",
        "Community service",
        "Justice work",
        "Cultural exchange",
        "Global initiatives"
      ],
      texts: [
        "Social writings",
        "Modern commentaries",
        "Practice guides",
        "Ethical texts",
        "Community works"
      ],
      influence: [
        "Social movements",
        "Community building",
        "Cultural change",
        "Global responsibility",
        "Social transformation"
      ],
      modernPresence: [
        "Social projects",
        "Community centers",
        "Justice initiatives",
        "Cultural organizations",
        "Global networks"
      ]
    }
  ],
  contemporaryDevelopments: [
    {
      name: "Digital Buddhism",
      sanskritName: "डिजिटल बौद्ध धर्म",
      paliName: "Digital Bauddha Dhamma",
      category: "Modern Adaptation",
      description: "The integration of digital technology with Buddhist practice and teaching in contemporary contexts.",
      contents: [
        "Online meditation",
        "Digital sanghas",
        "Virtual retreats",
        "Social media",
        "Mobile applications"
      ],
      transmission: [
        "Digital platforms",
        "Social networks",
        "Online courses",
        "Virtual communities",
        "Digital archives"
      ],
      significance: [
        "Global accessibility",
        "Modern practice",
        "Community building",
        "Cultural exchange",
        "Digital innovation"
      ],
      modernStudy: [
        "Digital humanities",
        "Online learning",
        "Social media research",
        "Virtual communities",
        "Digital preservation"
      ],
      translations: [
        "Digital formats",
        "Mobile apps",
        "Online resources",
        "Virtual reality",
        "Social platforms"
      ]
    },
    {
      name: "Scientific Buddhism",
      sanskritName: "वैज्ञानिक बौद्ध धर्म",
      paliName: "Vijjānika Bauddha Dhamma",
      category: "Modern Integration",
      description: "The integration of Buddhist thought with contemporary scientific research and understanding.",
      contents: [
        "Neuroscience research",
        "Psychological studies",
        "Contemplative science",
        "Mind-body medicine",
        "Quantum physics"
      ],
      transmission: [
        "Research institutes",
        "Academic programs",
        "Scientific publications",
        "Interdisciplinary studies",
        "Public education"
      ],
      significance: [
        "Scientific validation",
        "Modern understanding",
        "Research innovation",
        "Cultural integration",
        "Global impact"
      ],
      modernStudy: [
        "Neuroscience",
        "Psychology",
        "Medicine",
        "Physics",
        "Contemplative science"
      ],
      translations: [
        "Scientific language",
        "Research methods",
        "Technical terms",
        "Modern concepts",
        "Interdisciplinary approaches"
      ]
    }
  ],
  resources: [
    {
      title: "The Buddha's Teachings on Social and Communal Harmony",
      author: "Bhikkhu Bodhi",
      year: "2016",
      type: "Book",
      description: "Analysis of Buddhist teachings on social harmony and ethical living in contemporary context",
      language: "English",
      level: "Advanced",
      amazonUrl: "https://www.amazon.com/Buddhas-Teachings-Social-Communal-Harmony/dp/1614292254",
      isbn: "978-1614292252"
    },
    {
      title: "Mindfulness",
      author: "Joseph Goldstein",
      year: "2016",
      type: "Book",
      description: "Comprehensive guide to mindfulness practice in contemporary life",
      language: "English",
      level: "Intermediate",
      amazonUrl: "https://www.amazon.com/Mindfulness-Practical-Guide-Awakening-Joseph/dp/1604079075",
      isbn: "978-1604079079"
    }
  ]
}

export default function ContemporaryBuddhismPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contemporary Buddhism</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{contemporaryBuddhismContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Contemporary Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {contemporaryBuddhismContent.timeline.start} - {contemporaryBuddhismContent.timeline.end}</p>
            <p>{contemporaryBuddhismContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {contemporaryBuddhismContent.timeline.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contemporary Periods */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Contemporary Periods</CardTitle>
        </CardHeader>
        <CardContent>
          {contemporaryBuddhismContent.contemporaryPeriods.map((period, index) => (
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
          {contemporaryBuddhismContent.keyFigures.map((figure, index) => (
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

      {/* Movements */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Contemporary Movements</CardTitle>
        </CardHeader>
        <CardContent>
          {contemporaryBuddhismContent.movements.map((movement, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {movement.name} ({movement.sanskritName} / {movement.paliName})
              </h3>
              <p className="mb-2">Period: {movement.period}</p>
              <p className="mb-2">Location: {movement.location}</p>
              <p className="mb-2">Founder: {movement.founder}</p>
              <p className="mb-2">{movement.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Doctrines:</h4>
                  <ul className="list-disc pl-6">
                    {movement.doctrines.map((doctrine, idx) => (
                      <li key={idx}>{doctrine}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Presence:</h4>
                  <ul className="list-disc pl-6">
                    {movement.modernPresence.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Contemporary Developments */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Contemporary Developments</CardTitle>
        </CardHeader>
        <CardContent>
          {contemporaryBuddhismContent.contemporaryDevelopments.map((development, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {development.name} ({development.sanskritName} / {development.paliName})
              </h3>
              <p className="mb-2">{development.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Contents:</h4>
                  <ul className="list-disc pl-6">
                    {development.contents.map((content, idx) => (
                      <li key={idx}>{content}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-6">
                    {development.significance.map((item, idx) => (
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
            {contemporaryBuddhismContent.resources.map((resource, index) => (
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