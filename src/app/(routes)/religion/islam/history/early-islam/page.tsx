import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HistoricalEvent {
  title: string
  arabicTitle: string
  year: string
  description: string
  significance: string[]
  quranicReferences?: Array<{
    surah: string
    ayah: string
    text: string
    relevance: string
  }>
  historicalSources: Array<{
    author: string
    work: string
    citation: string
    details: string
  }>
  impact: string[]
}

interface KeyFigure {
  name: string
  arabicName: string
  title: string
  period: string
  role: string
  significance: string[]
  achievements: string[]
  biography: {
    birth: string
    death: string
    keyEvents: Array<{
      year: string
      event: string
      significance: string
    }>
  }
  legacy: string[]
  sources: Array<{
    title: string
    author: string
    year: string
    amazonUrl?: string
    description: string
  }>
}

interface SocialAspect {
  aspect: string
  description: string
  developments: Array<{
    area: string
    changes: string[]
    impact: string
    evidence: string[]
  }>
  significance: string[]
  scholarlyViews: Array<{
    scholar: string
    perspective: string
    source: string
    amazonUrl?: string
  }>
}

interface Institution {
  name: string
  arabicName: string
  establishment: string
  purpose: string
  development: Array<{
    period: string
    changes: string[]
    significance: string
  }>
  impact: string[]
  modernRelevance: string
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

interface EarlyIslamContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  keyEvents: HistoricalEvent[]
  keyFigures: KeyFigure[]
  socialDevelopments: SocialAspect[]
  institutions: Institution[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Early Islamic History | Islamic Studies",
  description: "Comprehensive exploration of early Islamic history, key events, figures, and developments.",
  openGraph: {
    title: "Early Islamic History | Islamic Studies",
    description: "In-depth study of the formative period of Islamic civilization",
    type: "website",
  },
}

const earlyIslamContent: EarlyIslamContent = {
  introduction: `The early Islamic period represents a transformative era in human history, marked by the emergence and rapid spread of Islam, the establishment of a new social order, and the foundations of what would become a global civilization. This period witnessed unprecedented developments in religious thought, social organization, and cultural synthesis.`,
  timeline: {
    start: "570 CE",
    end: "661 CE",
    overview: "Spanning from the birth of Prophet Muhammad (peace be upon him) to the end of the Rashidun Caliphate, this period encompasses the foundational years of Islam, including the prophetic mission, the establishment of the first Islamic state, and the early expansion of the Muslim community.",
    significance: [
      "Establishment of monotheistic faith",
      "Formation of the first Muslim community",
      "Development of Islamic legal and social systems",
      "Preservation and compilation of the Quran",
      "Expansion of Islamic territories",
      "Creation of administrative institutions"
    ]
  },
  keyEvents: [
    {
      title: "Birth of Prophet Muhammad",
      arabicTitle: "مولد النبي محمد",
      year: "570 CE",
      description: "Prophet Muhammad (peace be upon him) was born in Makkah into the noble Quraysh tribe. His birth marked the beginning of a new era in human history.",
      significance: [
        "Beginning of the final prophetic mission",
        "Arrival of the last messenger",
        "Start of the Islamic calendar reference point",
        "Fulfillment of previous prophecies"
      ],
      historicalSources: [
        {
          author: "Ibn Ishaq",
          work: "Sirat Rasul Allah",
          citation: "Early biographical account",
          details: "Detailed description of the Prophet's birth and early life"
        },
        {
          author: "Ibn Hisham",
          work: "As-Sirah an-Nabawiyyah",
          citation: "Refined version of Ibn Ishaq's work",
          details: "Comprehensive account of the Prophet's life"
        }
      ],
      impact: [
        "Established historical reference point",
        "Influenced Arabian Peninsula's history",
        "Beginning of Islamic civilization",
        "Source of prophetic traditions"
      ]
    },
    {
      title: "First Revelation",
      arabicTitle: "نزول الوحي",
      year: "610 CE",
      description: "The first divine revelation received by Prophet Muhammad in the Cave of Hira, marking the beginning of the Quranic revelation.",
      significance: [
        "Beginning of Quranic revelation",
        "Start of prophetic mission",
        "Foundation of Islamic message",
        "Transformation of Arabian society"
      ],
      quranicReferences: [
        {
          surah: "Al-Alaq",
          ayah: "96:1-5",
          text: "Read in the name of your Lord who created...",
          relevance: "First revealed verses of the Quran"
        }
      ],
      historicalSources: [
        {
          author: "Bukhari",
          work: "Sahih al-Bukhari",
          citation: "Hadith compilation",
          details: "Authentic narration of the first revelation"
        }
      ],
      impact: [
        "Initiated Islamic monotheism",
        "Began transformation of society",
        "Established prophetic authority",
        "Started Quranic compilation process"
      ]
    }
  ],
  keyFigures: [
    {
      name: "Abu Bakr As-Siddiq",
      arabicName: "أبو بكر الصديق",
      title: "First Caliph",
      period: "632-634 CE",
      role: "First successor to Prophet Muhammad",
      significance: [
        "First adult male convert to Islam",
        "Closest companion of the Prophet",
        "Led the Muslim community after Prophet's death",
        "Preserved Islamic unity during apostasy wars"
      ],
      achievements: [
        "Compilation of the Quran",
        "Suppression of apostasy movements",
        "Establishment of caliphate system",
        "Expansion of Islamic territory"
      ],
      biography: {
        birth: "573 CE",
        death: "634 CE",
        keyEvents: [
          {
            year: "610 CE",
            event: "Accepted Islam",
            significance: "First adult male convert"
          },
          {
            year: "632 CE",
            event: "Became Caliph",
            significance: "Established succession system"
          }
        ]
      },
      legacy: [
        "Model of leadership",
        "Example of friendship",
        "Administrative precedents",
        "Preservation of Islamic teachings"
      ],
      sources: [
        {
          title: "Abu Bakr As-Siddiq: His Life and Times",
          author: "Ali Muhammad Sallabi",
          year: "2017",
          amazonUrl: "https://www.amazon.com/Abu-Bakr-As-Siddiq-Life-Times/dp/1535469432",
          description: "Comprehensive biography of the first caliph"
        }
      ]
    }
  ],
  socialDevelopments: [
    {
      aspect: "Social Justice System",
      description: "Development of comprehensive social welfare and justice systems during the early Islamic period",
      developments: [
        {
          area: "Economic Justice",
          changes: [
            "Institution of Zakat",
            "Fair trade practices",
            "Property rights",
            "Inheritance laws"
          ],
          impact: "Established economic equality and social welfare",
          evidence: [
            "Quranic injunctions",
            "Prophetic traditions",
            "Historical records"
          ]
        }
      ],
      significance: [
        "Reduced social inequality",
        "Established welfare system",
        "Protected minority rights",
        "Created economic stability"
      ],
      scholarlyViews: [
        {
          scholar: "Wael B. Hallaq",
          perspective: "Islamic law developed organically from social needs",
          source: "The Origins and Evolution of Islamic Law",
          amazonUrl: "https://www.amazon.com/Origins-Evolution-Islamic-Themes-Islamic/dp/0521005809"
        }
      ]
    }
  ],
  institutions: [
    {
      name: "Diwan",
      arabicName: "الديوان",
      establishment: "634 CE",
      purpose: "Administrative and financial management system",
      development: [
        {
          period: "Umar's Caliphate",
          changes: [
            "Establishment of salary system",
            "Census records",
            "Land management"
          ],
          significance: "Created systematic administration"
        }
      ],
      impact: [
        "Efficient governance",
        "Financial organization",
        "Military administration",
        "Social welfare management"
      ],
      modernRelevance: "Foundation for Islamic administrative systems"
    }
  ],
  resources: [
    {
      title: "Muhammad: His Life Based on the Earliest Sources",
      author: "Martin Lings",
      year: "2006",
      type: "Biography",
      description: "Comprehensive biography based on earliest historical sources",
      language: "English",
      level: "Intermediate",
      amazonUrl: "https://www.amazon.com/Muhammad-Life-Based-Earliest-Sources/dp/1594771537",
      isbn: "978-1594771538"
    },
    {
      title: "The First Dynasty of Islam: The Umayyad Caliphate",
      author: "G.R. Hawting",
      year: "2000",
      type: "Academic",
      description: "Detailed analysis of the Umayyad period",
      language: "English",
      level: "Advanced",
      amazonUrl: "https://www.amazon.com/First-Dynasty-Islam-Umayyad-Caliphate/dp/0415240735",
      isbn: "978-0415240734"
    }
  ]
}

export default function EarlyIslamPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Early Islamic History</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{earlyIslamContent.introduction}</p>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Timeline Overview:</h3>
            <p className="mb-2">
              <span className="font-semibold">Period: </span>
              {earlyIslamContent.timeline.start} - {earlyIslamContent.timeline.end}
            </p>
            <p className="mb-4">{earlyIslamContent.timeline.overview}</p>
            <h4 className="font-semibold mb-2">Historical Significance:</h4>
            <ul className="list-disc pl-6">
              {earlyIslamContent.timeline.significance.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Key Events */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Historical Events</CardTitle>
        </CardHeader>
        <CardContent>
          {earlyIslamContent.keyEvents.map((event, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {event.title} ({event.arabicTitle})
              </h3>
              <p className="text-gray-600 mb-2">{event.year}</p>
              <p className="mb-3">{event.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <ul className="list-disc pl-6">
                    {event.significance.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Historical Sources:</h4>
                  <ul className="list-disc pl-6">
                    {event.historicalSources.map((source, idx) => (
                      <li key={idx}>
                        <strong>{source.author}</strong> - {source.work}
                        <p className="text-sm text-gray-600">{source.details}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {event.quranicReferences && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Quranic References:</h4>
                  <ul className="list-disc pl-6">
                    {event.quranicReferences.map((ref, idx) => (
                      <li key={idx}>
                        <strong>{ref.surah} ({ref.ayah})</strong>: {ref.text}
                        <p className="text-sm text-gray-600">{ref.relevance}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Historical Impact:</h4>
                <ul className="list-disc pl-6">
                  {event.impact.map((impact, idx) => (
                    <li key={idx}>{impact}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Key Figures */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Historical Figures</CardTitle>
        </CardHeader>
        <CardContent>
          {earlyIslamContent.keyFigures.map((figure, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {figure.name} ({figure.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">{figure.title} - {figure.period}</p>
              <p className="mb-3">{figure.role}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <ul className="list-disc pl-6">
                    {figure.significance.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Achievements:</h4>
                  <ul className="list-disc pl-6">
                    {figure.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Biography:</h4>
                <p className="mb-2">
                  <strong>Birth:</strong> {figure.biography.birth} |{" "}
                  <strong>Death:</strong> {figure.biography.death}
                </p>
                <h5 className="font-semibold mb-1">Key Events:</h5>
                <ul className="list-disc pl-6">
                  {figure.biography.keyEvents.map((event, idx) => (
                    <li key={idx}>
                      <strong>{event.year}:</strong> {event.event}
                      <p className="text-sm text-gray-600">{event.significance}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Legacy:</h4>
                <ul className="list-disc pl-6">
                  {figure.legacy.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Sources:</h4>
                <ul className="list-disc pl-6">
                  {figure.sources.map((source, idx) => (
                    <li key={idx}>
                      <Link
                        href={source.amazonUrl || "#"}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                      >
                        {source.title}
                      </Link>
                      <p className="text-sm text-gray-600">
                        By {source.author} ({source.year})
                      </p>
                      <p className="text-sm text-gray-600">{source.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Social Developments */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Social Developments</CardTitle>
        </CardHeader>
        <CardContent>
          {earlyIslamContent.socialDevelopments.map((development, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{development.aspect}</h3>
              <p className="mb-3">{development.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {development.developments.map((dev, idx) => (
                  <div key={idx} className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold mb-2">{dev.area}</h4>
                    <ul className="list-disc pl-6 mb-2">
                      {dev.changes.map((change, changeIdx) => (
                        <li key={changeIdx}>{change}</li>
                      ))}
                    </ul>
                    <p className="text-gray-600 mb-2">{dev.impact}</p>
                    <div>
                      <h5 className="font-semibold mb-1">Evidence:</h5>
                      <ul className="list-disc pl-6">
                        {dev.evidence.map((item, evidenceIdx) => (
                          <li key={evidenceIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Significance:</h4>
                <ul className="list-disc pl-6">
                  {development.significance.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Scholarly Views:</h4>
                {development.scholarlyViews.map((view, idx) => (
                  <div key={idx} className="mb-3">
                    <p className="font-semibold">{view.scholar}</p>
                    <p className="mb-1">{view.perspective}</p>
                    <Link
                      href={view.amazonUrl || "#"}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      {view.source}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Institutions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Early Islamic Institutions</CardTitle>
        </CardHeader>
        <CardContent>
          {earlyIslamContent.institutions.map((institution, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {institution.name} ({institution.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">Established: {institution.establishment}</p>
              <p className="mb-3">{institution.purpose}</p>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Historical Development:</h4>
                {institution.development.map((dev, idx) => (
                  <div key={idx} className="mb-3 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">{dev.period}</h5>
                    <ul className="list-disc pl-6">
                      {dev.changes.map((change, changeIdx) => (
                        <li key={changeIdx}>{change}</li>
                      ))}
                    </ul>
                    <p className="text-gray-600 mt-1">{dev.significance}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Historical Impact:</h4>
                <ul className="list-disc pl-6">
                  {institution.impact.map((impact, idx) => (
                    <li key={idx}>{impact}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Modern Relevance:</h4>
                <p>{institution.modernRelevance}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Resources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Learning Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {earlyIslamContent.resources.map((resource, index) => (
              <Card key={index} className="bg-secondary/20">
                <CardHeader>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2"><strong>Author:</strong> {resource.author}</p>
                  <p className="mb-2"><strong>Year:</strong> {resource.year}</p>
                  <p className="mb-2"><strong>Type:</strong> {resource.type}</p>
                  <p className="mb-2"><strong>Level:</strong> {resource.level}</p>
                  <p className="mb-2"><strong>Language:</strong> {resource.language}</p>
                  {resource.isbn && (
                    <p className="mb-2"><strong>ISBN:</strong> {resource.isbn}</p>
                  )}
                  <p className="mb-4">{resource.description}</p>
                  {resource.amazonUrl && (
                    <Button asChild>
                      <Link href={resource.amazonUrl} target="_blank">
                        View on Amazon
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 