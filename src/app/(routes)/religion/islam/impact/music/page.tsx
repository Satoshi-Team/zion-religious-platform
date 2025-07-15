import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MusicalTradition {
  name: string
  arabicName: string
  period: string
  regions: string[]
  description: string
  characteristics: string[]
  instruments: string[]
  significance: string[]
  majorWorks: Array<{
    title: string
    arabicTitle: string
    composer: string
    date: string
    description: string
    significance: string
    influence: string[]
  }>
  influence: string[]
}

interface Musician {
  name: string
  arabicName: string
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
      arabicTitle: string
      date: string
      genre: string
      description: string
      significance: string
      keyFeatures: string[]
    }>
  }
  contributions: {
    composition: string[]
    performance: string[]
    theory: string[]
    innovation: string[]
    other: string[]
  }
  legacy: string
  modernRelevance: string[]
}

interface MusicalForm {
  name: string
  arabicName: string
  category: string
  description: string
  origins: string[]
  development: string[]
  keyPractitioners: Array<{
    name: string
    arabicName: string
    contribution: string
  }>
  characteristics: string[]
  significance: string[]
  modernApplications: string[]
}

interface Instrument {
  name: string
  arabicName: string
  period: string
  description: string
  construction: Array<{
    material: string
    technique: string
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

interface IslamicMusicContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  musicalTraditions: MusicalTradition[]
  musicians: Musician[]
  musicalForms: MusicalForm[]
  instruments: Instrument[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Islamic Music | Islamic Studies",
  description: "Comprehensive exploration of Islamic musical traditions, forms, and their lasting impact on global music.",
  openGraph: {
    title: "Islamic Music | Islamic Studies",
    description: "In-depth study of Islamic musical heritage and its influence on global musical traditions",
    type: "website",
  },
}

const islamicMusicContent: IslamicMusicContent = {
  introduction: `Islamic music represents a rich and diverse tradition that has evolved over centuries, encompassing various regional styles, spiritual practices, and artistic expressions. From the melodious call to prayer (Adhan) to the sophisticated maqam system, Islamic musical traditions have contributed significantly to world music. While maintaining religious sensitivities, Islamic music has developed unique forms of expression that combine spiritual devotion with artistic excellence.`,
  timeline: {
    start: "622 CE",
    end: "Present",
    overview: "Islamic music emerged with the rise of Islam and developed into diverse traditions across different regions. From the early religious chants to complex musical systems, it has evolved while maintaining its spiritual essence.",
    significance: [
      "Development of modal systems (maqamat)",
      "Evolution of religious music",
      "Creation of unique instruments",
      "Influence on Western music theory",
      "Preservation of ancient musical traditions",
      "Development of Sufi musical practices",
      "Cultural synthesis and exchange",
      "Contemporary global influence"
    ]
  },
  musicalTraditions: [
    {
      name: "Andalusian Classical Music",
      arabicName: "الموسيقى الأندلسية",
      period: "8th-15th Century",
      regions: [
        "Al-Andalus",
        "North Africa",
        "Middle East"
      ],
      description: "A sophisticated musical tradition that developed in Islamic Spain, combining Arab, Berber, and local Iberian elements into a unique musical style.",
      characteristics: [
        "Modal system (nawbat)",
        "Complex rhythmic patterns",
        "Poetic lyrics",
        "Orchestral ensemble",
        "Improvisational elements"
      ],
      instruments: [
        "Oud",
        "Rebab",
        "Qanun",
        "Ney",
        "Tar"
      ],
      significance: [
        "Preservation of medieval Arabic music",
        "Influence on European classical music",
        "Development of musical forms",
        "Cultural bridge between East and West"
      ],
      majorWorks: [
        {
          title: "Nuba al-Istihlal",
          arabicTitle: "نوبة الاستهلال",
          composer: "Traditional",
          date: "13th Century",
          description: "A classical Andalusian suite in the mode of Raml al-Maya",
          significance: "Foundational work in Andalusian classical tradition",
          influence: [
            "North African music",
            "European medieval music",
            "Modern Arab orchestral music",
            "World music fusion"
          ]
        }
      ],
      influence: [
        "European classical music",
        "North African traditions",
        "Modern Arab music",
        "World music"
      ]
    }
  ],
  musicians: [
    {
      name: "Ziryab",
      arabicName: "زرياب",
      period: "789-857 CE",
      tradition: "Andalusian Classical",
      biography: {
        origin: "Baghdad",
        training: [
          "Court musician in Baghdad",
          "Student of Ishaq al-Mawsili",
          "Musical theory and composition",
          "Voice training"
        ],
        positions: [
          "Court musician in Cordoba",
          "Founder of first music school in Europe",
          "Cultural innovator"
        ],
        teachers: [
          "Ishaq al-Mawsili"
        ],
        students: [
          "Numerous court musicians",
          "Established music school tradition"
        ],
        majorWorks: [
          {
            title: "System of Nawbat",
            arabicTitle: "نظام النوبات",
            date: "c. 830 CE",
            genre: "Music Theory",
            description: "Systematic organization of Andalusian musical suites",
            significance: "Foundation of Andalusian classical music",
            keyFeatures: [
              "Modal organization",
              "Rhythmic patterns",
              "Performance practice",
              "Vocal techniques"
            ]
          }
        ]
      },
      contributions: {
        composition: [
          "Development of nawba form",
          "Creation of new musical modes",
          "Integration of Persian and Arab styles"
        ],
        performance: [
          "Introduction of new vocal techniques",
          "Standardization of performance practice",
          "Development of ensemble playing"
        ],
        theory: [
          "Systematization of modes",
          "Creation of rhythmic patterns",
          "Codification of musical forms"
        ],
        innovation: [
          "Addition of fifth string to oud",
          "Establishment of music schools",
          "Introduction of new instruments"
        ],
        other: [
          "Cultural refinement",
          "Fashion and etiquette",
          "Culinary arts"
        ]
      },
      legacy: "Ziryab's contributions transformed the musical landscape of medieval Spain and North Africa, establishing foundations that influenced both Eastern and Western music traditions.",
      modernRelevance: [
        "Influence on contemporary Arab-Andalusian music",
        "Model for music education",
        "Cultural exchange paradigm",
        "Integration of diverse musical traditions"
      ]
    }
  ],
  musicalForms: [
    {
      name: "Maqam",
      arabicName: "مقام",
      category: "Modal System",
      description: "A system of melodic modes used in traditional Arabic music, defining the pitch, patterns, and development of a musical piece.",
      origins: [
        "Ancient Middle Eastern music traditions",
        "Persian dastgah system",
        "Greek modal theory"
      ],
      development: [
        "Systematization in Abbasid period",
        "Regional variations",
        "Theoretical codification",
        "Modern standardization"
      ],
      keyPractitioners: [
        {
          name: "Al-Farabi",
          arabicName: "الفارابي",
          contribution: "Theoretical foundation and documentation"
        }
      ],
      characteristics: [
        "Quarter-tone intervals",
        "Modal progression",
        "Improvisational framework",
        "Emotional expression"
      ],
      significance: [
        "Foundation of Arabic music",
        "Influence on Turkish music",
        "Development of musical theory",
        "Preservation of traditions"
      ],
      modernApplications: [
        "Contemporary Arab music",
        "World music fusion",
        "Film scoring",
        "Cross-cultural collaboration"
      ]
    }
  ],
  instruments: [
    {
      name: "Oud",
      arabicName: "عود",
      period: "Pre-Islamic to Present",
      description: "A pear-shaped stringed instrument considered the king of Arabic musical instruments and ancestor of the European lute.",
      construction: [
        {
          material: "Wood",
          technique: "Bent staves construction",
          features: [
            "Fretless neck",
            "Double strings",
            "Distinctive sound hole pattern",
            "Lightweight construction"
          ]
        }
      ],
      significance: [
        "Central to Arabic music",
        "Predecessor of European lute",
        "Symbol of musical culture",
        "Vehicle for modal music"
      ],
      evolution: "Developed from ancient Persian barbat, gained fifth string under Ziryab, modern versions have 11-13 strings",
      modernUse: [
        "Traditional Arabic music",
        "Contemporary fusion",
        "World music",
        "Solo performance"
      ]
    }
  ],
  resources: [
    {
      title: "The Art of Arabic Music",
      author: "Habib Hassan Touma",
      year: "1996",
      type: "Book",
      description: "Comprehensive study of Arabic musical traditions, theory, and practice",
      language: "English",
      level: "Advanced",
      isbn: "978-0870736963"
    }
  ]
}

export default function IslamicMusicPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Islamic Music</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{islamicMusicContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {islamicMusicContent.timeline.start} - {islamicMusicContent.timeline.end}</p>
            <p>{islamicMusicContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {islamicMusicContent.timeline.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Musical Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Musical Traditions</CardTitle>
        </CardHeader>
        <CardContent>
          {islamicMusicContent.musicalTraditions.map((tradition, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{tradition.name} ({tradition.arabicName})</h3>
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

      {/* Musicians */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notable Musicians</CardTitle>
        </CardHeader>
        <CardContent>
          {islamicMusicContent.musicians.map((musician, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{musician.name} ({musician.arabicName})</h3>
              <p className="mb-2">Period: {musician.period}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Contributions:</h4>
                  <ul className="list-disc pl-6">
                    {Object.entries(musician.contributions).map(([category, items]) => (
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
                  <p>{musician.legacy}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Musical Forms */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Musical Forms</CardTitle>
        </CardHeader>
        <CardContent>
          {islamicMusicContent.musicalForms.map((form, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{form.name} ({form.arabicName})</h3>
              <p className="mb-2">{form.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {form.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Applications:</h4>
                  <ul className="list-disc pl-6">
                    {form.modernApplications.map((app, idx) => (
                      <li key={idx}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Instruments */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Traditional Instruments</CardTitle>
        </CardHeader>
        <CardContent>
          {islamicMusicContent.instruments.map((instrument, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{instrument.name} ({instrument.arabicName})</h3>
              <p className="mb-2">{instrument.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Construction:</h4>
                  <ul className="list-disc pl-6">
                    {instrument.construction.map((item, idx) => (
                      <li key={idx}>
                        <strong>{item.material}:</strong>
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
                    {instrument.modernUse.map((use, idx) => (
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
            {islamicMusicContent.resources.map((resource, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h3 className="font-semibold">{resource.title}</h3>
                <p>Author: {resource.author}</p>
                <p>Year: {resource.year}</p>
                <p>Type: {resource.type}</p>
                <p>Description: {resource.description}</p>
                <p>Level: {resource.level}</p>
                {resource.isbn && <p>ISBN: {resource.isbn}</p>}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 