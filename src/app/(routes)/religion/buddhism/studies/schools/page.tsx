import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface BuddhistSchool {
  name: string
  sanskritName: string
  region: string
  period: string
  founders: Array<{
    name: string
    sanskritName: string
    dates: string
    significance: string
  }>
  description: string
  mainTeachings: string[]
  practices: string[]
  keyTexts: Array<{
    title: string
    sanskritTitle: string
    author: string
    period: string
    description: string
    significance: string
  }>
  monasteries: Array<{
    name: string
    location: string
    founded: string
    significance: string
    status: string
  }>
  modernDevelopments: string[]
  influence: string[]
}

interface Lineage {
  name: string
  sanskritName: string
  tradition: string
  origin: string
  founders: string[]
  description: string
  teachings: string[]
  practices: string[]
  transmission: string[]
  modernPresence: string[]
}

interface Teacher {
  name: string
  sanskritName: string
  dates: string
  school: string
  biography: {
    origin: string
    education: string[]
    accomplishments: string[]
    teachings: string[]
    disciples: string[]
  }
  contributions: string[]
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

interface BuddhistSchoolsContent {
  introduction: string
  overview: {
    definition: string
    significance: string[]
    mainTraditions: {
      theravada: string[]
      mahayana: string[]
      vajrayana: string[]
      zen: string[]
    }
  }
  schools: BuddhistSchool[]
  lineages: Lineage[]
  teachers: Teacher[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Buddhist Schools and Traditions | Buddhist Studies",
  description: "Comprehensive exploration of Buddhist schools, lineages, and their development across different cultures and time periods.",
  openGraph: {
    title: "Buddhist Schools and Traditions | Buddhist Studies",
    description: "In-depth study of Buddhist schools, their teachings, practices, and historical development",
    type: "website",
  },
}

const buddhistSchoolsContent: BuddhistSchoolsContent = {
  introduction: `Buddhist schools represent the diverse traditions and interpretations of the Buddha's teachings that have developed across different cultures and time periods. From the early split into various schools following the Buddha's parinirvana to the later development of Mahayana and Vajrayana traditions, Buddhism has adapted to different cultural contexts while maintaining its essential teachings. Each school offers unique perspectives, practices, and methods for achieving enlightenment, contributing to the rich tapestry of Buddhist thought and practice.`,
  overview: {
    definition: "Buddhist schools are distinct traditions and lineages that have developed unique interpretations, practices, and emphases while maintaining the core teachings of the Buddha.",
    significance: [
      "Preservation and transmission of Buddhist teachings",
      "Adaptation to different cultural contexts",
      "Development of diverse meditation practices",
      "Evolution of philosophical interpretations",
      "Creation of comprehensive practice systems",
      "Integration with local traditions",
      "Response to different historical conditions",
      "Development of unique artistic traditions"
    ],
    mainTraditions: {
      theravada: [
        "Focus on individual liberation",
        "Preservation of early Buddhist texts",
        "Emphasis on monastic practice",
        "Systematic meditation methods",
        "Strong scriptural scholarship"
      ],
      mahayana: [
        "Emphasis on universal liberation",
        "Development of bodhisattva path",
        "Philosophical sophistication",
        "Integration with East Asian cultures",
        "Diverse meditation traditions"
      ],
      vajrayana: [
        "Tantric practices and methods",
        "Integration of subtle body theory",
        "Emphasis on guru-disciple relationship",
        "Complex visualization practices",
        "Integration with Tibetan culture"
      ],
      zen: [
        "Direct transmission beyond words",
        "Emphasis on meditation practice",
        "Integration with East Asian arts",
        "Simplicity and directness",
        "Focus on immediate experience"
      ]
    }
  },
  schools: [
    {
      name: "Zen Buddhism",
      sanskritName: "Dhyāna",
      region: "East Asia",
      period: "6th century CE - Present",
      founders: [
        {
          name: "Bodhidharma",
          sanskritName: "Bodhidharma",
          dates: "5th-6th century CE",
          significance: "Transmitted Chan Buddhism to China"
        }
      ],
      description: "A Mahayana tradition emphasizing direct experience through meditation, known for its simplicity, directness, and integration with East Asian arts and culture.",
      mainTeachings: [
        "Direct pointing to the mind",
        "Seeing one's true nature",
        "Sudden enlightenment",
        "Non-reliance on words",
        "Everyday mind is the Way"
      ],
      practices: [
        "Zazen (seated meditation)",
        "Koan study",
        "Walking meditation",
        "Work practice",
        "Arts as meditation"
      ],
      keyTexts: [
        {
          title: "Platform Sutra",
          sanskritTitle: "Liuzu Tanjing",
          author: "Huineng",
          period: "8th century CE",
          description: "Core text of Zen Buddhism presenting the teachings of the Sixth Patriarch",
          significance: "Established the sudden enlightenment teaching of Southern Chan"
        }
      ],
      monasteries: [
        {
          name: "Eiheiji",
          location: "Japan",
          founded: "1244 CE",
          significance: "Main training monastery of Soto Zen",
          status: "Active"
        }
      ],
      modernDevelopments: [
        "Spread to Western countries",
        "Integration with psychology",
        "Secular mindfulness movement",
        "Environmental activism",
        "Interfaith dialogue"
      ],
      influence: [
        "Japanese culture and arts",
        "Western spirituality",
        "Modern mindfulness",
        "Contemporary architecture",
        "Environmental philosophy"
      ]
    }
  ],
  lineages: [
    {
      name: "Soto Zen",
      sanskritName: "Caodong",
      tradition: "Zen Buddhism",
      origin: "Japan",
      founders: ["Dogen Zenji"],
      description: "A major school of Zen Buddhism emphasizing gradual cultivation through just sitting meditation (shikantaza).",
      teachings: [
        "Just sitting practice",
        "Buddha nature is universal",
        "Practice-enlightenment unity",
        "Everyday life as practice",
        "Non-dual understanding"
      ],
      practices: [
        "Shikantaza meditation",
        "Formal meal practice",
        "Liturgical practice",
        "Work practice",
        "Study of Dogen's works"
      ],
      transmission: [
        "Mind-to-mind transmission",
        "Formal dharma transmission",
        "Lineage documentation",
        "Training monasteries",
        "Teacher certification"
      ],
      modernPresence: [
        "International centers",
        "Lay practice groups",
        "Online teachings",
        "Social engagement",
        "Environmental activism"
      ]
    }
  ],
  teachers: [
    {
      name: "Dogen Zenji",
      sanskritName: "Dōgen Kigen",
      dates: "1200-1253",
      school: "Soto Zen",
      biography: {
        origin: "Japan",
        education: [
          "Early Tendai training",
          "Study in China under Rujing",
          "Dharma transmission in Caodong lineage",
          "Established Eiheiji temple",
          "Extensive writing and teaching"
        ],
        accomplishments: [
          "Founded Japanese Soto school",
          "Wrote Shobogenzo",
          "Established monastic standards",
          "Transmitted Chinese Chan",
          "Developed philosophical system"
        ],
        teachings: [
          "Practice-enlightenment unity",
          "Universal Buddha nature",
          "Time-being philosophy",
          "Zazen as enlightenment",
          "Everyday life practice"
        ],
        disciples: [
          "Ejo",
          "Gikai",
          "Tettsu Gikai",
          "Koun Ejo"
        ]
      },
      contributions: [
        "Established Soto Zen in Japan",
        "Developed comprehensive philosophy",
        "Created monastic guidelines",
        "Wrote influential texts",
        "Integrated practice and study"
      ],
      legacy: "Dogen's teachings continue to influence modern Buddhist practice and philosophy, particularly his emphasis on the unity of practice and enlightenment.",
      quotes: [
        "To study the Buddha Way is to study the self. To study the self is to forget the self.",
        "If you cannot find the truth right where you are, where else do you expect to find it?",
        "When you walk in the mist, you get wet."
      ]
    }
  ],
  resources: [
    {
      title: "The Foundations of Buddhism",
      author: "Rupert Gethin",
      year: "1998",
      type: "Book",
      description: "Comprehensive introduction to Buddhist traditions and their historical development",
      language: "English",
      level: "Intermediate",
      amazonUrl: "https://www.amazon.com/Foundations-Buddhism-OPUS-Rupert-Gethin/dp/0192892231",
      isbn: "978-0192892232"
    },
    {
      title: "The Different Paths of Buddhism: A Narrative-Historical Introduction",
      author: "Carl Olson",
      year: "2005",
      type: "Book",
      description: "Detailed exploration of various Buddhist schools and their development",
      language: "English",
      level: "Advanced",
      amazonUrl: "https://www.amazon.com/Different-Paths-Buddhism-Narrative-Historical-Introduction/dp/0813535611",
      isbn: "978-0813535616"
    }
  ]
}

export default function BuddhistSchoolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Buddhist Schools and Traditions</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{buddhistSchoolsContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>{buddhistSchoolsContent.overview.definition}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Significance:</h3>
              <ul className="list-disc pl-6">
                {buddhistSchoolsContent.overview.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Main Traditions:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Theravada:</h4>
                  <ul className="list-disc pl-6">
                    {buddhistSchoolsContent.overview.mainTraditions.theravada.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Mahayana:</h4>
                  <ul className="list-disc pl-6">
                    {buddhistSchoolsContent.overview.mainTraditions.mahayana.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Vajrayana:</h4>
                  <ul className="list-disc pl-6">
                    {buddhistSchoolsContent.overview.mainTraditions.vajrayana.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Zen:</h4>
                  <ul className="list-disc pl-6">
                    {buddhistSchoolsContent.overview.mainTraditions.zen.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Schools */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Major Schools</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistSchoolsContent.schools.map((school, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {school.name} ({school.sanskritName})
              </h3>
              <p className="mb-2">Region: {school.region}</p>
              <p className="mb-2">Period: {school.period}</p>
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
                  <h4 className="font-semibold">Practices:</h4>
                  <ul className="list-disc pl-6">
                    {school.practices.map((practice, idx) => (
                      <li key={idx}>{practice}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Lineages */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Important Lineages</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistSchoolsContent.lineages.map((lineage, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {lineage.name} ({lineage.sanskritName})
              </h3>
              <p className="mb-2">Tradition: {lineage.tradition}</p>
              <p className="mb-2">Founders: {lineage.founders.join(", ")}</p>
              <p className="mb-2">{lineage.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Teachings:</h4>
                  <ul className="list-disc pl-6">
                    {lineage.teachings.map((teaching, idx) => (
                      <li key={idx}>{teaching}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Presence:</h4>
                  <ul className="list-disc pl-6">
                    {lineage.modernPresence.map((presence, idx) => (
                      <li key={idx}>{presence}</li>
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
          {buddhistSchoolsContent.teachers.map((teacher, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{teacher.name} ({teacher.sanskritName})</h3>
              <p className="mb-2">Dates: {teacher.dates}</p>
              <p className="mb-2">School: {teacher.school}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Contributions:</h4>
                  <ul className="list-disc pl-6">
                    {teacher.contributions.map((contribution, idx) => (
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

      {/* Resources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recommended Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {buddhistSchoolsContent.resources.map((resource, index) => (
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