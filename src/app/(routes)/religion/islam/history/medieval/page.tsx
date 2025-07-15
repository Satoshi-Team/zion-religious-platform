import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Dynasty {
  name: string
  arabicName: string
  period: string
  capital: string
  territory: string[]
  rulers: Array<{
    name: string
    arabicName: string
    reignPeriod: string
    achievements: string[]
    significance: string
  }>
  achievements: string[]
  culturalDevelopments: string[]
  decline: {
    causes: string[]
    impact: string
  }
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
}

interface Development {
  area: string
  arabicTerm: string
  description: string
  keyFeatures: string[]
  significance: string[]
  examples: Array<{
    name: string
    description: string
    location?: string
    date?: string
    impact: string
  }>
  modernInfluence: string[]
}

interface MilitaryEvent {
  name: string
  arabicName: string
  date: string
  location: string
  participants: Array<{
    side: string
    leader: string
    forces: string
  }>
  outcome: string
  significance: string[]
  longTermEffects: string[]
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

interface MedievalContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  dynasties: Dynasty[]
  scholars: Scholar[]
  developments: Development[]
  militaryEvents: MilitaryEvent[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Medieval Islamic History | Islamic Studies",
  description: "Comprehensive exploration of Medieval Islamic History, its dynasties, scholars, and transformations.",
  openGraph: {
    title: "Medieval Islamic History | Islamic Studies",
    description: "In-depth study of Islamic civilization's medieval period and its lasting impact",
    type: "website",
  },
}

const medievalContent: MedievalContent = {
  introduction: `The Medieval period of Islamic history, spanning from the mid-13th to the mid-16th century, witnessed significant transformations in Islamic civilization. Following the Mongol invasion of Baghdad, new centers of power emerged, leading to diverse cultural, intellectual, and political developments across the Muslim world.`,
  timeline: {
    start: "1258 CE",
    end: "1517 CE",
    overview: "This period saw the rise of new Islamic empires, the continuation of scholarly traditions, and significant cultural developments despite political fragmentation. The era was marked by the emergence of the Mamluks, the rise of the Ottoman Empire, and the flourishing of Islamic arts and sciences in new centers of learning.",
    significance: [
      "Emergence of new political centers",
      "Preservation and development of Islamic scholarship",
      "Evolution of Islamic architecture and arts",
      "Military and technological innovations",
      "Trade and cultural exchange",
      "Development of Sufi orders",
      "Advancement of Islamic jurisprudence",
      "Cultural resilience and adaptation"
    ]
  },
  dynasties: [
    {
      name: "Mamluk Sultanate",
      arabicName: "سلطنة المماليك",
      period: "1250-1517 CE",
      capital: "Cairo",
      territory: [
        "Egypt",
        "Syria",
        "Hejaz",
        "Parts of North Africa"
      ],
      rulers: [
        {
          name: "Baibars",
          arabicName: "بيبرس",
          reignPeriod: "1260-1277 CE",
          achievements: [
            "Defeated Mongols at Ain Jalut",
            "Established efficient postal system",
            "Reformed administrative system",
            "Strengthened diplomatic relations"
          ],
          significance: "Established Mamluk power and defended Islamic lands against Mongol invasion"
        },
        {
          name: "Qalawun",
          arabicName: "قلاوون",
          reignPeriod: "1279-1290 CE",
          achievements: [
            "Built the Qalawun Complex in Cairo",
            "Established diplomatic relations with European powers",
            "Advanced medical facilities",
            "Strengthened military organization"
          ],
          significance: "Consolidated Mamluk rule and promoted cultural development"
        }
      ],
      achievements: [
        "Defense against Mongols and Crusaders",
        "Architectural renaissance in Cairo",
        "Development of trade routes",
        "Preservation of Islamic scholarship",
        "Military innovations",
        "Administrative reforms"
      ],
      culturalDevelopments: [
        "Distinctive architectural style",
        "Advanced military technology",
        "Scholarly patronage",
        "Trade network expansion",
        "Artistic innovations"
      ],
      decline: {
        causes: [
          "Ottoman military superiority",
          "Economic challenges",
          "Internal political conflicts",
          "Changes in trade routes"
        ],
        impact: "Led to Ottoman conquest and end of independent Mamluk rule"
      }
    }
  ],
  scholars: [
    {
      name: "Ibn Khaldun",
      arabicName: "ابن خلدون",
      title: "Father of Sociology",
      period: "1332-1406 CE",
      fields: ["History", "Sociology", "Economics", "Political Science"],
      biography: {
        birth: "1332 CE",
        death: "1406 CE",
        location: "Tunis",
        education: "Traditional Islamic education in Quran, Hadith, and Law",
        keyContributions: [
          {
            field: "Historiography",
            contribution: "The Muqaddimah",
            significance: "Pioneered scientific approach to history and sociology"
          },
          {
            field: "Social Science",
            contribution: "Theory of Social Cohesion",
            significance: "Developed concepts of social conflict and change"
          }
        ]
      },
      majorWorks: [
        {
          title: "The Muqaddimah",
          arabicTitle: "المقدمة",
          year: "1377",
          field: "History and Social Science",
          description: "Groundbreaking work on historical methodology and social analysis",
          influence: [
            "Modern sociology",
            "Historical methodology",
            "Economic theory",
            "Political science"
          ],
          amazonUrl: "https://www.amazon.com/Muqaddimah-Introduction-History-Princeton-Classics/dp/0691166285"
        }
      ],
      legacy: [
        "Scientific approach to history",
        "Foundations of sociology",
        "Economic theories",
        "Political analysis methodology"
      ]
    }
  ],
  developments: [
    {
      area: "Architecture",
      arabicTerm: "العمارة",
      description: "Evolution of Islamic architecture with distinctive regional styles and innovations.",
      keyFeatures: [
        "Complex dome structures",
        "Elaborate minarets",
        "Intricate geometric patterns",
        "Advanced water systems",
        "Integration of local styles"
      ],
      significance: [
        "Cultural expression",
        "Technological advancement",
        "Religious symbolism",
        "Urban development"
      ],
      examples: [
        {
          name: "Sultan Hassan Mosque",
          description: "Massive Mamluk mosque-madrasa complex in Cairo",
          location: "Cairo, Egypt",
          date: "1356-1363 CE",
          impact: "Exemplifies height of Mamluk architectural achievement"
        }
      ],
      modernInfluence: [
        "Contemporary mosque design",
        "Islamic geometric patterns",
        "Architectural preservation",
        "Urban planning concepts"
      ]
    }
  ],
  militaryEvents: [
    {
      name: "Battle of Ain Jalut",
      arabicName: "معركة عين جالوت",
      date: "September 3, 1260 CE",
      location: "Ain Jalut, Palestine",
      participants: [
        {
          side: "Mamluks",
          leader: "Baibars",
          forces: "Egyptian Mamluk army"
        },
        {
          side: "Mongols",
          leader: "Kitbuqa",
          forces: "Mongol army"
        }
      ],
      outcome: "Decisive Mamluk victory",
      significance: [
        "First major defeat of Mongol army",
        "Preserved Islamic civilization in Egypt and Syria",
        "Established Mamluk military supremacy",
        "Protected Islamic holy sites"
      ],
      longTermEffects: [
        "Secured Mamluk rule",
        "Prevented further Mongol expansion",
        "Preserved Islamic culture in the region",
        "Influenced military tactics"
      ]
    }
  ],
  resources: [
    {
      title: "The Middle East in the Middle Ages: The Early Mamluk Sultanate 1250-1382",
      author: "Robert Irwin",
      year: "1986",
      type: "Academic",
      description: "Comprehensive analysis of the Mamluk period and its significance",
      language: "English",
      level: "Advanced",
      amazonUrl: "https://www.amazon.com/Middle-East-Ages-Sultanate-1250-1382/dp/0709951124",
      isbn: "978-0709951124"
    },
    {
      title: "Ibn Khaldun: An Intellectual Biography",
      author: "Robert Irwin",
      year: "2018",
      type: "Biography",
      description: "Detailed exploration of Ibn Khaldun's life and thought",
      language: "English",
      level: "Intermediate",
      amazonUrl: "https://www.amazon.com/Ibn-Khaldun-Intellectual-Robert-Irwin/dp/0691174660",
      isbn: "978-0691174662"
    }
  ]
}

export default function MedievalPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Medieval Islamic History</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{medievalContent.introduction}</p>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Timeline Overview:</h3>
            <p className="mb-2">
              <span className="font-semibold">Period: </span>
              {medievalContent.timeline.start} - {medievalContent.timeline.end}
            </p>
            <p className="mb-4">{medievalContent.timeline.overview}</p>
            <h4 className="font-semibold mb-2">Historical Significance:</h4>
            <ul className="list-disc pl-6">
              {medievalContent.timeline.significance.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Dynasties */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Major Dynasties</CardTitle>
        </CardHeader>
        <CardContent>
          {medievalContent.dynasties.map((dynasty, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                {dynasty.name} ({dynasty.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">
                Period: {dynasty.period} | Capital: {dynasty.capital}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold mb-2">Territory:</h4>
                  <ul className="list-disc pl-6">
                    {dynasty.territory.map((region, idx) => (
                      <li key={idx}>{region}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Major Achievements:</h4>
                  <ul className="list-disc pl-6">
                    {dynasty.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Notable Rulers:</h4>
                {dynasty.rulers.map((ruler, idx) => (
                  <div key={idx} className="mb-4 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">
                      {ruler.name} ({ruler.arabicName})
                    </h5>
                    <p className="text-sm text-gray-600">Reign: {ruler.reignPeriod}</p>
                    <div className="mt-2">
                      <h6 className="font-medium">Achievements:</h6>
                      <ul className="list-disc pl-6">
                        {ruler.achievements.map((achievement, achIdx) => (
                          <li key={achIdx} className="text-sm">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{ruler.significance}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Cultural Developments:</h4>
                <ul className="list-disc pl-6">
                  {dynasty.culturalDevelopments.map((development, idx) => (
                    <li key={idx}>{development}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Decline:</h4>
                <div className="pl-4">
                  <h5 className="font-medium mb-2">Causes:</h5>
                  <ul className="list-disc pl-6">
                    {dynasty.decline.causes.map((cause, idx) => (
                      <li key={idx}>{cause}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-sm text-gray-600">{dynasty.decline.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Scholars */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notable Scholars</CardTitle>
        </CardHeader>
        <CardContent>
          {medievalContent.scholars.map((scholar, index) => (
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
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Developments */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Cultural and Scientific Developments</CardTitle>
        </CardHeader>
        <CardContent>
          {medievalContent.developments.map((development, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {development.area} ({development.arabicTerm})
              </h3>
              <p className="mb-3">{development.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc pl-6">
                    {development.keyFeatures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <ul className="list-disc pl-6">
                    {development.significance.map((sig, idx) => (
                      <li key={idx}>{sig}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Notable Examples:</h4>
                {development.examples.map((example, idx) => (
                  <div key={idx} className="mb-3 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">{example.name}</h5>
                    <p>{example.description}</p>
                    {example.location && (
                      <p className="text-sm text-gray-600">Location: {example.location}</p>
                    )}
                    {example.date && (
                      <p className="text-sm text-gray-600">Date: {example.date}</p>
                    )}
                    <p className="text-sm text-gray-600">Impact: {example.impact}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Modern Influence:</h4>
                <ul className="list-disc pl-6">
                  {development.modernInfluence.map((influence, idx) => (
                    <li key={idx}>{influence}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Military Events */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Major Military Events</CardTitle>
        </CardHeader>
        <CardContent>
          {medievalContent.militaryEvents.map((event, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {event.name} ({event.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">
                Date: {event.date} | Location: {event.location}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold mb-2">Participants:</h4>
                  {event.participants.map((participant, idx) => (
                    <div key={idx} className="mb-2">
                      <h5 className="font-medium">{participant.side}</h5>
                      <p className="text-sm">Leader: {participant.leader}</p>
                      <p className="text-sm">Forces: {participant.forces}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Outcome:</h4>
                  <p>{event.outcome}</p>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Significance:</h4>
                <ul className="list-disc pl-6">
                  {event.significance.map((sig, idx) => (
                    <li key={idx}>{sig}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Long-term Effects:</h4>
                <ul className="list-disc pl-6">
                  {event.longTermEffects.map((effect, idx) => (
                    <li key={idx}>{effect}</li>
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
            {medievalContent.resources.map((resource, index) => (
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