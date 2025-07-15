import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PhilosophicalSchool {
  name: string
  arabicName: string
  period: string
  regions: string[]
  description: string
  principles: string[]
  keyIdeas: string[]
  significance: string[]
  majorWorks: Array<{
    title: string
    arabicTitle: string
    author: string
    date: string
    description: string
    significance: string
    influence: string[]
  }>
  influence: string[]
}

interface Philosopher {
  name: string
  arabicName: string
  period: string
  school: string
  biography: {
    origin: string
    education: string[]
    positions: string[]
    teachers: string[]
    students: string[]
    majorWorks: Array<{
      title: string
      arabicTitle: string
      date: string
      field: string
      description: string
      significance: string
      keyIdeas: string[]
    }>
  }
  contributions: {
    metaphysics: string[]
    epistemology: string[]
    ethics: string[]
    logic: string[]
    other: string[]
  }
  legacy: string
  modernRelevance: string[]
}

interface Concept {
  name: string
  arabicName: string
  category: string
  description: string
  origins: string[]
  development: string[]
  keyProponents: Array<{
    name: string
    arabicName: string
    contribution: string
  }>
  applications: string[]
  significance: string[]
  modernInterpretations: string[]
}

interface Debate {
  name: string
  arabicName: string
  period: string
  description: string
  mainPositions: Array<{
    position: string
    proponents: string[]
    arguments: string[]
  }>
  significance: string[]
  resolution: string
  impact: string[]
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

interface IslamicPhilosophyContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  philosophicalSchools: PhilosophicalSchool[]
  philosophers: Philosopher[]
  concepts: Concept[]
  debates: Debate[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Islamic Philosophy | Islamic Studies",
  description: "Comprehensive exploration of Islamic philosophical traditions, schools of thought, and their lasting impact on global philosophy.",
  openGraph: {
    title: "Islamic Philosophy | Islamic Studies",
    description: "In-depth study of Islamic philosophical heritage and its influence on global philosophical thought",
    type: "website",
  },
}

const islamicPhilosophyContent: IslamicPhilosophyContent = {
  introduction: `Islamic philosophy represents a rich intellectual tradition that synthesized Greek philosophical thought with Islamic theology and Arabic innovations. From the 8th to 14th centuries, Muslim philosophers developed sophisticated systems of logic, metaphysics, epistemology, and ethics while engaging in profound debates about reason, revelation, and the nature of reality. Their work not only preserved and expanded upon classical philosophy but also significantly influenced medieval European thought and continues to inform contemporary philosophical discussions.`,
  timeline: {
    start: "750 CE",
    end: "Present",
    overview: "Islamic philosophy emerged during the Golden Age of Islam, integrating Greek philosophical traditions with Islamic theology and Arabic innovations. This synthesis produced original philosophical systems and methodologies that influenced both Eastern and Western thought.",
    significance: [
      "Preservation of Greek philosophy",
      "Development of logical methods",
      "Synthesis of faith and reason",
      "Advancement of metaphysics",
      "Ethical philosophy development",
      "Political theory contributions",
      "Influence on European thought",
      "Contemporary relevance"
    ]
  },
  philosophicalSchools: [
    {
      name: "Peripatetic School (Mashsha'i)",
      arabicName: "المشّائية",
      period: "9th-12th Century",
      regions: [
        "Baghdad",
        "Cordoba",
        "Cairo",
        "Bukhara"
      ],
      description: "The Islamic Peripatetic school combined Aristotelian philosophy with Islamic theology, developing sophisticated systems of logic, metaphysics, and natural philosophy.",
      principles: [
        "Rational investigation",
        "Logical demonstration",
        "Harmony of reason and revelation",
        "Universal intelligibles",
        "Causality in nature"
      ],
      keyIdeas: [
        "Active Intellect theory",
        "Emanation cosmology",
        "Universal reason",
        "Philosophical psychology",
        "Natural causation"
      ],
      significance: [
        "Systematic philosophical method",
        "Integration of Greek and Islamic thought",
        "Development of logic",
        "Influence on medieval Europe"
      ],
      majorWorks: [
        {
          title: "The Book of Healing",
          arabicTitle: "كتاب الشفاء",
          author: "Ibn Sina",
          date: "1027 CE",
          description: "Comprehensive philosophical encyclopedia covering logic, natural sciences, psychology, geometry, astronomy, arithmetic, music, and metaphysics",
          significance: "Most influential philosophical work in Islamic history",
          influence: [
            "Medieval European universities",
            "Islamic theological discourse",
            "Medical education",
            "Scientific methodology"
          ]
        }
      ],
      influence: [
        "Medieval European philosophy",
        "Islamic theology",
        "Scientific method",
        "Educational curriculum"
      ]
    }
  ],
  philosophers: [
    {
      name: "Al-Farabi",
      arabicName: "الفارابي",
      period: "872-950 CE",
      school: "Peripatetic",
      biography: {
        origin: "Farab, Transoxiana",
        education: [
          "Studied in Baghdad",
          "Greek philosophy",
          "Logic and music",
          "Political theory"
        ],
        positions: [
          "Court philosopher",
          "Independent scholar",
          "Teacher of philosophy"
        ],
        teachers: [
          "Abu Bishr Matta",
          "Yuhanna ibn Haylan"
        ],
        students: [
          "Yahya ibn Adi",
          "Abu Sulayman al-Sijistani"
        ],
        majorWorks: [
          {
            title: "The Virtuous City",
            arabicTitle: "المدينة الفاضلة",
            date: "c. 940 CE",
            field: "Political Philosophy",
            description: "Comprehensive theory of the ideal state based on philosophical principles",
            significance: "Foundational work in Islamic political philosophy",
            keyIdeas: [
              "Perfect state structure",
              "Role of philosopher-king",
              "Social harmony",
              "Political virtue"
            ]
          }
        ]
      },
      contributions: {
        metaphysics: [
          "Theory of intellect",
          "Emanation cosmology",
          "Unity of truth"
        ],
        epistemology: [
          "Hierarchy of knowledge",
          "Theory of intellection",
          "Classification of sciences"
        ],
        ethics: [
          "Virtue ethics",
          "Political morality",
          "Social harmony"
        ],
        logic: [
          "Syllogistic reasoning",
          "Modal logic",
          "Linguistic logic"
        ],
        other: [
          "Music theory",
          "Psychology",
          "Educational theory"
        ]
      },
      legacy: "Second Teacher (after Aristotle) in Islamic philosophy, established systematic approach to philosophy",
      modernRelevance: [
        "Political theory",
        "Ethics in governance",
        "Educational philosophy",
        "Social harmony theories"
      ]
    }
  ],
  concepts: [
    {
      name: "Active Intellect",
      arabicName: "العقل الفعال",
      category: "Metaphysics",
      description: "Cosmic principle responsible for actualizing human intellectual potential and mediating divine knowledge",
      origins: [
        "Aristotelian nous",
        "Neoplatonic emanation",
        "Islamic theology"
      ],
      development: [
        "Al-Farabi's hierarchy of intellects",
        "Ibn Sina's theory of intellection",
        "Integration with prophetic revelation"
      ],
      keyProponents: [
        {
          name: "Al-Farabi",
          arabicName: "الفارابي",
          contribution: "Developed hierarchical theory of intellects"
        }
      ],
      applications: [
        "Epistemology",
        "Prophetic knowledge",
        "Human psychology",
        "Educational theory"
      ],
      significance: [
        "Bridge between divine and human knowledge",
        "Explanation of intellectual development",
        "Framework for prophetic revelation",
        "Basis for educational theory"
      ],
      modernInterpretations: [
        "Cognitive development theory",
        "Educational psychology",
        "Spiritual development",
        "Consciousness studies"
      ]
    }
  ],
  debates: [
    {
      name: "Reason and Revelation",
      arabicName: "العقل والنقل",
      period: "9th-12th Century",
      description: "Fundamental debate about the relationship between philosophical reason and religious revelation",
      mainPositions: [
        {
          position: "Harmony Thesis",
          proponents: ["Al-Farabi", "Ibn Sina"],
          arguments: [
            "Truth is unified",
            "Reason and revelation are compatible",
            "Philosophy confirms revelation",
            "Different paths to same truth"
          ]
        }
      ],
      significance: [
        "Shaped Islamic intellectual history",
        "Influenced theological development",
        "Impacted educational methods",
        "Modern interfaith dialogue"
      ],
      resolution: "Various syntheses emerged, with most philosophers advocating compatibility while recognizing distinct domains",
      impact: [
        "Islamic theology",
        "Educational methodology",
        "Interfaith dialogue",
        "Modern Islamic thought"
      ]
    }
  ],
  resources: [
    {
      title: "History of Islamic Philosophy",
      author: "Seyyed Hossein Nasr",
      year: "2006",
      type: "Academic",
      description: "Comprehensive survey of Islamic philosophical traditions and their development",
      language: "English",
      level: "Advanced",
      amazonUrl: "https://www.amazon.com/History-Islamic-Philosophy-Hossein-Nasr/dp/0415259347",
      isbn: "978-0415259347"
    },
    {
      title: "Classical Arabic Philosophy: An Anthology of Sources",
      author: "Jon McGinnis and David C. Reisman",
      year: "2007",
      type: "Academic",
      description: "Collection of key texts from classical Islamic philosophers with commentary",
      language: "English",
      level: "Intermediate",
      amazonUrl: "https://www.amazon.com/Classical-Arabic-Philosophy-Anthology-Sources/dp/0872208710",
      isbn: "978-0872208711"
    }
  ]
}

export default function IslamicPhilosophyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Islamic Philosophy</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{islamicPhilosophyContent.introduction}</p>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Timeline Overview:</h3>
            <p className="mb-2">
              <span className="font-semibold">Period: </span>
              {islamicPhilosophyContent.timeline.start} - {islamicPhilosophyContent.timeline.end}
            </p>
            <p className="mb-4">{islamicPhilosophyContent.timeline.overview}</p>
            <h4 className="font-semibold mb-2">Historical Significance:</h4>
            <ul className="list-disc pl-6">
              {islamicPhilosophyContent.timeline.significance.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Philosophical Schools */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Philosophical Schools</CardTitle>
        </CardHeader>
        <CardContent>
          {islamicPhilosophyContent.philosophicalSchools.map((school, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                {school.name} ({school.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">
                Period: {school.period} | Regions: {school.regions.join(", ")}
              </p>
              
              <p className="mb-4">{school.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold mb-2">Principles:</h4>
                  <ul className="list-disc pl-6">
                    {school.principles.map((principle, idx) => (
                      <li key={idx}>{principle}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Ideas:</h4>
                  <ul className="list-disc pl-6">
                    {school.keyIdeas.map((idea, idx) => (
                      <li key={idx}>{idea}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Major Works:</h4>
                {school.majorWorks.map((work, idx) => (
                  <div key={idx} className="mb-3 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">
                      {work.title} ({work.arabicTitle})
                    </h5>
                    <p className="text-sm text-gray-600">Author: {work.author}</p>
                    <p className="text-sm text-gray-600">Date: {work.date}</p>
                    <p>{work.description}</p>
                    <p className="text-sm text-gray-600">Significance: {work.significance}</p>
                    <div className="mt-2">
                      <h6 className="font-medium">Influence:</h6>
                      <ul className="list-disc pl-6">
                        {work.influence.map((inf, infIdx) => (
                          <li key={infIdx} className="text-sm">{inf}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Significance:</h4>
                <ul className="list-disc pl-6">
                  {school.significance.map((sig, idx) => (
                    <li key={idx}>{sig}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Influence:</h4>
                <ul className="list-disc pl-6">
                  {school.influence.map((inf, idx) => (
                    <li key={idx}>{inf}</li>
                  ))}
                </ul>
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
          {islamicPhilosophyContent.philosophers.map((philosopher, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                {philosopher.name} ({philosopher.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">
                Period: {philosopher.period} | School: {philosopher.school}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold mb-2">Biography:</h4>
                  <p><strong>Origin:</strong> {philosopher.biography.origin}</p>
                  <div className="mt-2">
                    <strong>Education:</strong>
                    <ul className="list-disc pl-6">
                      {philosopher.biography.education.map((edu, idx) => (
                        <li key={idx}>{edu}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-2">
                    <strong>Positions:</strong>
                    <ul className="list-disc pl-6">
                      {philosopher.biography.positions.map((position, idx) => (
                        <li key={idx}>{position}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Academic Lineage:</h4>
                  <div className="mt-2">
                    <strong>Teachers:</strong>
                    <ul className="list-disc pl-6">
                      {philosopher.biography.teachers.map((teacher, idx) => (
                        <li key={idx}>{teacher}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-2">
                    <strong>Students:</strong>
                    <ul className="list-disc pl-6">
                      {philosopher.biography.students.map((student, idx) => (
                        <li key={idx}>{student}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Major Works:</h4>
                {philosopher.biography.majorWorks.map((work, idx) => (
                  <div key={idx} className="mb-3 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">
                      {work.title} ({work.arabicTitle})
                    </h5>
                    <p className="text-sm text-gray-600">
                      Date: {work.date} | Field: {work.field}
                    </p>
                    <p>{work.description}</p>
                    <p className="text-sm text-gray-600">Significance: {work.significance}</p>
                    <div className="mt-2">
                      <h6 className="font-medium">Key Ideas:</h6>
                      <ul className="list-disc pl-6">
                        {work.keyIdeas.map((idea, ideaIdx) => (
                          <li key={ideaIdx} className="text-sm">{idea}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Contributions:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2">Metaphysics:</h5>
                    <ul className="list-disc pl-6">
                      {philosopher.contributions.metaphysics.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Epistemology:</h5>
                    <ul className="list-disc pl-6">
                      {philosopher.contributions.epistemology.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Ethics:</h5>
                    <ul className="list-disc pl-6">
                      {philosopher.contributions.ethics.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Logic:</h5>
                    <ul className="list-disc pl-6">
                      {philosopher.contributions.logic.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {philosopher.contributions.other.length > 0 && (
                  <div className="mt-4">
                    <h5 className="font-medium mb-2">Other Contributions:</h5>
                    <ul className="list-disc pl-6">
                      {philosopher.contributions.other.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Legacy:</h4>
                <p className="pl-4 border-l-2 border-primary">
                  {philosopher.legacy}
                </p>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Modern Relevance:</h4>
                <ul className="list-disc pl-6">
                  {philosopher.modernRelevance.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Concepts */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Philosophical Concepts</CardTitle>
        </CardHeader>
        <CardContent>
          {islamicPhilosophyContent.concepts.map((concept, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                {concept.name} ({concept.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">Category: {concept.category}</p>
              
              <p className="mb-4">{concept.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold mb-2">Origins:</h4>
                  <ul className="list-disc pl-6">
                    {concept.origins.map((origin, idx) => (
                      <li key={idx}>{origin}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Development:</h4>
                  <ul className="list-disc pl-6">
                    {concept.development.map((dev, idx) => (
                      <li key={idx}>{dev}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Proponents:</h4>
                {concept.keyProponents.map((proponent, idx) => (
                  <div key={idx} className="mb-3 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">
                      {proponent.name} ({proponent.arabicName})
                    </h5>
                    <p className="text-sm text-gray-600">Contribution: {proponent.contribution}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Applications:</h4>
                <ul className="list-disc pl-6">
                  {concept.applications.map((app, idx) => (
                    <li key={idx}>{app}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Significance:</h4>
                <ul className="list-disc pl-6">
                  {concept.significance.map((sig, idx) => (
                    <li key={idx}>{sig}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Modern Interpretations:</h4>
                <ul className="list-disc pl-6">
                  {concept.modernInterpretations.map((interp, idx) => (
                    <li key={idx}>{interp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Debates */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Major Philosophical Debates</CardTitle>
        </CardHeader>
        <CardContent>
          {islamicPhilosophyContent.debates.map((debate, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                {debate.name} ({debate.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">Period: {debate.period}</p>
              
              <p className="mb-4">{debate.description}</p>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Main Positions:</h4>
                {debate.mainPositions.map((position, idx) => (
                  <div key={idx} className="mb-3 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">{position.position}</h5>
                    <p className="text-sm text-gray-600">
                      Proponents: {position.proponents.join(", ")}
                    </p>
                    <div className="mt-2">
                      <h6 className="font-medium">Arguments:</h6>
                      <ul className="list-disc pl-6">
                        {position.arguments.map((arg, argIdx) => (
                          <li key={argIdx} className="text-sm">{arg}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Significance:</h4>
                <ul className="list-disc pl-6">
                  {debate.significance.map((sig, idx) => (
                    <li key={idx}>{sig}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Resolution:</h4>
                <p className="pl-4 border-l-2 border-primary">
                  {debate.resolution}
                </p>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Impact:</h4>
                <ul className="list-disc pl-6">
                  {debate.impact.map((imp, idx) => (
                    <li key={idx}>{imp}</li>
                  ))}
                </ul>
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
            {islamicPhilosophyContent.resources.map((resource, index) => (
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