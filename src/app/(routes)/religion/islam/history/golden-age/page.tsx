import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Achievement {
  field: string
  arabicTerm: string
  description: string
  keyInnovations: string[]
  notableWorks: Array<{
    title: string
    arabicTitle: string
    author: string
    year: string
    significance: string
    amazonUrl?: string
  }>
  impact: string[]
  modernApplications: string[]
}

interface Scholar {
  name: string
  arabicName: string
  title: string
  period: string
  fields: string[]
  biography: {
    birth: string
    death: string
    location: string
    education: string
    keyContributions: Array<{
      field: string
      contribution: string
      significance: string
      year?: string
    }>
  }
  majorWorks: Array<{
    title: string
    arabicTitle: string
    year: string
    field: string
    description: string
    influence: string[]
    amazonUrl?: string
  }>
  legacy: string[]
  modernRecognition: string[]
}

interface Institution {
  name: string
  arabicName: string
  location: string
  established: string
  type: string
  description: string
  features: string[]
  contributions: Array<{
    field: string
    achievements: string[]
    impact: string
  }>
  scholars: Array<{
    name: string
    period: string
    contributions: string[]
  }>
  legacy: string[]
}

interface CulturalAspect {
  aspect: string
  description: string
  characteristics: string[]
  developments: Array<{
    area: string
    innovations: string[]
    significance: string
  }>
  influence: string[]
  examples: Array<{
    name: string
    description: string
    significance: string
    source?: string
  }>
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

interface GoldenAgeContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  achievements: Achievement[]
  scholars: Scholar[]
  institutions: Institution[]
  culturalDevelopments: CulturalAspect[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Islamic Golden Age | Islamic Studies",
  description: "Comprehensive exploration of the Islamic Golden Age, its achievements, scholars, and lasting impact on world civilization.",
  openGraph: {
    title: "Islamic Golden Age | Islamic Studies",
    description: "In-depth study of Islam's greatest period of scientific and cultural achievement",
    type: "website",
  },
}

const goldenAgeContent: GoldenAgeContent = {
  introduction: `The Islamic Golden Age represents one of humanity's most remarkable periods of intellectual, scientific, and cultural advancement. From the 8th to the 14th centuries, Muslim civilization became the world's leading center of knowledge, innovation, and cultural exchange, producing groundbreaking discoveries and works that continue to influence modern civilization.`,
  timeline: {
    start: "750 CE",
    end: "1258 CE",
    overview: "This period, primarily spanning the Abbasid Caliphate until the Mongol invasion of Baghdad, witnessed unprecedented advancements in sciences, philosophy, medicine, literature, and the arts. The era was characterized by systematic translation of ancient works, original research, and the establishment of major centers of learning.",
    significance: [
      "Development of scientific method",
      "Preservation of ancient knowledge",
      "Advancement of mathematics and astronomy",
      "Medical breakthroughs",
      "Architectural innovations",
      "Cultural and artistic flowering",
      "Establishment of libraries and universities",
      "Interfaith and intercultural dialogue"
    ]
  },
  achievements: [
    {
      field: "Mathematics",
      arabicTerm: "الرياضيات",
      description: "Revolutionary developments in algebra, geometry, and trigonometry that laid the foundation for modern mathematics.",
      keyInnovations: [
        "Development of algebra as a distinct discipline",
        "Introduction of zero and decimal system",
        "Advanced trigonometric functions",
        "Solutions to cubic equations",
        "Development of algorithmic thinking"
      ],
      notableWorks: [
        {
          title: "The Compendious Book on Calculation by Completion and Balancing",
          arabicTitle: "كتاب المختصر في حساب الجبر والمقابلة",
          author: "Al-Khwarizmi",
          year: "820 CE",
          significance: "Foundational text of algebra",
          amazonUrl: "https://www.amazon.com/Algebra-Al-Khwarizmi-History-Arabic-Science/dp/1614274827"
        }
      ],
      impact: [
        "Foundation of modern algebra",
        "Development of algorithmic thinking",
        "Advanced mathematical notation",
        "Integration of geometry and algebra"
      ],
      modernApplications: [
        "Computer science algorithms",
        "Modern engineering",
        "Financial mathematics",
        "Data analysis"
      ]
    },
    {
      field: "Medicine",
      arabicTerm: "الطب",
      description: "Groundbreaking advances in medical science, anatomy, surgery, and pharmacology.",
      keyInnovations: [
        "Systematic medical encyclopedia",
        "Surgical instruments and techniques",
        "Hospital systems",
        "Clinical trials methodology",
        "Pharmacological classifications"
      ],
      notableWorks: [
        {
          title: "The Canon of Medicine",
          arabicTitle: "القانون في الطب",
          author: "Ibn Sina (Avicenna)",
          year: "1025 CE",
          significance: "Comprehensive medical encyclopedia used until the 18th century",
          amazonUrl: "https://www.amazon.com/Canon-Medicine-Complete-English-Translation/dp/1871031672"
        }
      ],
      impact: [
        "Modern hospital systems",
        "Surgical procedures",
        "Pharmacology development",
        "Medical education methods"
      ],
      modernApplications: [
        "Evidence-based medicine",
        "Hospital organization",
        "Surgical techniques",
        "Drug development"
      ]
    }
  ],
  scholars: [
    {
      name: "Ibn Sina (Avicenna)",
      arabicName: "ابن سينا",
      title: "The Prince of Physicians",
      period: "980-1037 CE",
      fields: ["Medicine", "Philosophy", "Mathematics", "Astronomy"],
      biography: {
        birth: "980 CE",
        death: "1037 CE",
        location: "Bukhara (modern-day Uzbekistan)",
        education: "Self-taught in medicine, studied under various scholars",
        keyContributions: [
          {
            field: "Medicine",
            contribution: "The Canon of Medicine",
            significance: "Most influential medical text in both Islamic and European medicine"
          },
          {
            field: "Philosophy",
            contribution: "The Book of Healing",
            significance: "Comprehensive philosophical and scientific encyclopedia"
          }
        ]
      },
      majorWorks: [
        {
          title: "The Canon of Medicine",
          arabicTitle: "القانون في الطب",
          year: "1025",
          field: "Medicine",
          description: "Comprehensive medical encyclopedia covering all aspects of health and disease",
          influence: [
            "Standard medical text in Europe until 18th century",
            "Foundation of modern medical practice",
            "Systematic approach to medicine"
          ],
          amazonUrl: "https://www.amazon.com/Canon-Medicine-Complete-English-Translation/dp/1871031672"
        }
      ],
      legacy: [
        "Medical education methodology",
        "Integration of philosophy and medicine",
        "Systematic medical knowledge",
        "Evidence-based approach"
      ],
      modernRecognition: [
        "Lunar crater named after him",
        "Influence on modern medical education",
        "Continued study of his works"
      ]
    }
  ],
  institutions: [
    {
      name: "House of Wisdom",
      arabicName: "بيت الحكمة",
      location: "Baghdad",
      established: "832 CE",
      type: "Research Center and Library",
      description: "Major intellectual center that housed thousands of books and manuscripts, serving as a hub for translation, research, and scholarly discourse.",
      features: [
        "Vast library collection",
        "Translation bureau",
        "Research facilities",
        "Astronomical observatory",
        "Scholar gatherings"
      ],
      contributions: [
        {
          field: "Translation",
          achievements: [
            "Greek texts preservation",
            "Persian works translation",
            "Indian scientific works"
          ],
          impact: "Preserved and transmitted ancient knowledge"
        }
      ],
      scholars: [
        {
          name: "Al-Khwarizmi",
          period: "9th century",
          contributions: [
            "Mathematical innovations",
            "Astronomical tables",
            "Geographic works"
          ]
        }
      ],
      legacy: [
        "Model for research institutions",
        "Knowledge preservation",
        "Multicultural scholarship",
        "Scientific methodology"
      ]
    }
  ],
  culturalDevelopments: [
    {
      aspect: "Architecture",
      description: "Development of distinctive Islamic architectural styles combining functionality with aesthetic beauty.",
      characteristics: [
        "Geometric patterns",
        "Calligraphic decoration",
        "Domed structures",
        "Garden design"
      ],
      developments: [
        {
          area: "Mosque Architecture",
          innovations: [
            "Minaret development",
            "Dome construction",
            "Courtyard design"
          ],
          significance: "Created distinctive Islamic architectural identity"
        }
      ],
      influence: [
        "Modern architectural design",
        "Geometric art",
        "Urban planning",
        "Garden architecture"
      ],
      examples: [
        {
          name: "Great Mosque of Samarra",
          description: "Largest mosque of its time with unique spiral minaret",
          significance: "Innovative architectural design",
          source: "Historical records and existing structure"
        }
      ]
    }
  ],
  resources: [
    {
      title: "Lost History: The Enduring Legacy of Muslim Scientists, Thinkers, and Artists",
      author: "Michael Hamilton Morgan",
      year: "2008",
      type: "Historical Overview",
      description: "Comprehensive exploration of Islamic Golden Age achievements",
      language: "English",
      level: "Intermediate",
      amazonUrl: "https://www.amazon.com/Lost-History-Enduring-Scientists-Thinkers/dp/1426202806",
      isbn: "978-1426202803"
    },
    {
      title: "The House of Wisdom: How Arabic Science Saved Ancient Knowledge and Gave Us the Renaissance",
      author: "Jim Al-Khalili",
      year: "2012",
      type: "Academic",
      description: "Detailed analysis of scientific achievements during the Golden Age",
      language: "English",
      level: "Advanced",
      amazonUrl: "https://www.amazon.com/House-Wisdom-Science-Ancient-Knowledge/dp/0143120565",
      isbn: "978-0143120568"
    }
  ]
}

export default function GoldenAgePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Islamic Golden Age</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{goldenAgeContent.introduction}</p>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Timeline Overview:</h3>
            <p className="mb-2">
              <span className="font-semibold">Period: </span>
              {goldenAgeContent.timeline.start} - {goldenAgeContent.timeline.end}
            </p>
            <p className="mb-4">{goldenAgeContent.timeline.overview}</p>
            <h4 className="font-semibold mb-2">Historical Significance:</h4>
            <ul className="list-disc pl-6">
              {goldenAgeContent.timeline.significance.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Scientific Achievements */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Scientific and Intellectual Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          {goldenAgeContent.achievements.map((achievement, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {achievement.field} ({achievement.arabicTerm})
              </h3>
              <p className="mb-3">{achievement.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Innovations:</h4>
                  <ul className="list-disc pl-6">
                    {achievement.keyInnovations.map((innovation, idx) => (
                      <li key={idx}>{innovation}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Notable Works:</h4>
                  <ul className="list-disc pl-6">
                    {achievement.notableWorks.map((work, idx) => (
                      <li key={idx}>
                        <Link
                          href={work.amazonUrl || "#"}
                          className="text-blue-600 hover:underline"
                          target="_blank"
                        >
                          {work.title} ({work.arabicTitle})
                        </Link>
                        <p className="text-sm text-gray-600">
                          By {work.author}, {work.year}
                        </p>
                        <p className="text-sm text-gray-600">{work.significance}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Historical Impact:</h4>
                <ul className="list-disc pl-6">
                  {achievement.impact.map((impact, idx) => (
                    <li key={idx}>{impact}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Modern Applications:</h4>
                <ul className="list-disc pl-6">
                  {achievement.modernApplications.map((application, idx) => (
                    <li key={idx}>{application}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Notable Scholars */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notable Scholars</CardTitle>
        </CardHeader>
        <CardContent>
          {goldenAgeContent.scholars.map((scholar, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {scholar.name} ({scholar.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">{scholar.title}</p>
              <p className="mb-2">{scholar.period}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Fields of Expertise:</h4>
                  <ul className="list-disc pl-6">
                    {scholar.fields.map((field, idx) => (
                      <li key={idx}>{field}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Biography:</h4>
                  <p><strong>Birth:</strong> {scholar.biography.birth}</p>
                  <p><strong>Death:</strong> {scholar.biography.death}</p>
                  <p><strong>Location:</strong> {scholar.biography.location}</p>
                  <p><strong>Education:</strong> {scholar.biography.education}</p>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Contributions:</h4>
                {scholar.biography.keyContributions.map((contribution, idx) => (
                  <div key={idx} className="mb-3 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">{contribution.field}</h5>
                    <p>{contribution.contribution}</p>
                    <p className="text-sm text-gray-600">{contribution.significance}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Major Works:</h4>
                {scholar.majorWorks.map((work, idx) => (
                  <div key={idx} className="mb-4">
                    <Link
                      href={work.amazonUrl || "#"}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                    >
                      {work.title} ({work.arabicTitle})
                    </Link>
                    <p className="text-sm">{work.year} - {work.field}</p>
                    <p className="text-sm text-gray-600">{work.description}</p>
                    <ul className="list-disc pl-6 mt-2">
                      {work.influence.map((inf, infIdx) => (
                        <li key={infIdx} className="text-sm">{inf}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Legacy:</h4>
                <ul className="list-disc pl-6">
                  {scholar.legacy.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Modern Recognition:</h4>
                <ul className="list-disc pl-6">
                  {scholar.modernRecognition.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Institutions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Major Institutions</CardTitle>
        </CardHeader>
        <CardContent>
          {goldenAgeContent.institutions.map((institution, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {institution.name} ({institution.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">
                {institution.location} - Established: {institution.established}
              </p>
              <p className="mb-3">{institution.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc pl-6">
                    {institution.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contributions:</h4>
                  {institution.contributions.map((contribution, idx) => (
                    <div key={idx} className="mb-3">
                      <h5 className="font-medium">{contribution.field}</h5>
                      <ul className="list-disc pl-6">
                        {contribution.achievements.map((achievement, achIdx) => (
                          <li key={achIdx}>{achievement}</li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-600 mt-1">{contribution.impact}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Notable Scholars:</h4>
                {institution.scholars.map((scholar, idx) => (
                  <div key={idx} className="mb-3 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">{scholar.name}</h5>
                    <p className="text-sm text-gray-600">{scholar.period}</p>
                    <ul className="list-disc pl-6">
                      {scholar.contributions.map((contribution, contIdx) => (
                        <li key={contIdx}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Legacy:</h4>
                <ul className="list-disc pl-6">
                  {institution.legacy.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Cultural Developments */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Cultural Developments</CardTitle>
        </CardHeader>
        <CardContent>
          {goldenAgeContent.culturalDevelopments.map((development, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{development.aspect}</h3>
              <p className="mb-3">{development.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {development.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Developments:</h4>
                  {development.developments.map((dev, idx) => (
                    <div key={idx} className="mb-3">
                      <h5 className="font-medium">{dev.area}</h5>
                      <ul className="list-disc pl-6">
                        {dev.innovations.map((innovation, innIdx) => (
                          <li key={innIdx}>{innovation}</li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-600 mt-1">{dev.significance}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Influence:</h4>
                <ul className="list-disc pl-6">
                  {development.influence.map((inf, idx) => (
                    <li key={idx}>{inf}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Notable Examples:</h4>
                {development.examples.map((example, idx) => (
                  <div key={idx} className="mb-3 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">{example.name}</h5>
                    <p>{example.description}</p>
                    <p className="text-sm text-gray-600">{example.significance}</p>
                    {example.source && (
                      <p className="text-sm text-gray-500">Source: {example.source}</p>
                    )}
                  </div>
                ))}
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
            {goldenAgeContent.resources.map((resource, index) => (
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