import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Reform {
  name: string
  arabicName: string
  period: string
  location: string
  leaders: Array<{
    name: string
    arabicName: string
    role: string
    contributions: string[]
    impact: string
  }>
  keyPrinciples: string[]
  achievements: string[]
  challenges: string[]
  legacy: string
}

interface Movement {
  name: string
  arabicName: string
  period: string
  region: string[]
  founders: Array<{
    name: string
    arabicName: string
    period: string
    background: string
    keyIdeas: string[]
  }>
  principles: string[]
  developments: string[]
  influence: string[]
  currentStatus: string
}

interface Scholar {
  name: string
  arabicName: string
  title: string
  period: string
  fields: string[]
  biography: {
    birth: string
    death?: string
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
  challenges: string[]
  futureProspects: string[]
}

interface Event {
  name: string
  arabicName: string
  date: string
  location: string
  background: string
  keyFigures: Array<{
    name: string
    role: string
    significance: string
  }>
  significance: string[]
  impact: string[]
  aftermath: string
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

interface ModernContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  reforms: Reform[]
  movements: Movement[]
  scholars: Scholar[]
  developments: Development[]
  events: Event[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Modern Islamic History | Islamic Studies",
  description: "Comprehensive exploration of Modern Islamic History, its reforms, movements, and contemporary developments.",
  openGraph: {
    title: "Modern Islamic History | Islamic Studies",
    description: "In-depth study of Islamic civilization's modern period and its ongoing impact",
    type: "website",
  },
}

const modernContent: ModernContent = {
  introduction: `The Modern period of Islamic history, from the late 18th century to the present day, represents a time of profound transformation, challenge, and renewal in the Muslim world. This era has witnessed the intersection of Islamic traditions with modernity, colonialism, nationalism, and globalization, leading to diverse responses and adaptations within Muslim societies.`,
  timeline: {
    start: "1798 CE",
    end: "Present",
    overview: "Beginning with Napoleon's invasion of Egypt, this period encompasses the decline of traditional Islamic empires, European colonialism, independence movements, Islamic revival, and contemporary challenges. It features intellectual reforms, political movements, and ongoing debates about Islam's role in modern society.",
    significance: [
      "Encounter with Western modernity",
      "Islamic reform movements",
      "Rise of nation-states",
      "Religious revival and renewal",
      "Technological adaptation",
      "Educational reforms",
      "Economic transformation",
      "Cultural preservation and innovation"
    ]
  },
  reforms: [
    {
      name: "Islamic Modernism",
      arabicName: "التجديد الإسلامي",
      period: "1875-1935",
      location: "Egypt and wider Muslim world",
      leaders: [
        {
          name: "Muhammad Abduh",
          arabicName: "محمد عبده",
          role: "Grand Mufti of Egypt",
          contributions: [
            "Reformation of Al-Azhar education",
            "Rational interpretation of Islamic texts",
            "Integration of modern sciences",
            "Women's education advocacy"
          ],
          impact: "Pioneered modern Islamic reform methodology"
        },
        {
          name: "Rashid Rida",
          arabicName: "رشيد رضا",
          role: "Scholar and Reformer",
          contributions: [
            "Published Al-Manar journal",
            "Islamic political theory",
            "Scriptural interpretation",
            "Pan-Islamic advocacy"
          ],
          impact: "Bridged classical scholarship with modern thought"
        }
      ],
      keyPrinciples: [
        "Compatibility of Islam with modern science",
        "Return to original sources",
        "Rational interpretation",
        "Educational reform",
        "Social progress within Islamic framework"
      ],
      achievements: [
        "Educational modernization",
        "Religious text reinterpretation",
        "Scientific integration",
        "Women's rights advancement",
        "Political reform theories"
      ],
      challenges: [
        "Colonial resistance",
        "Traditional opposition",
        "Political instability",
        "Social conservatism"
      ],
      legacy: "Established framework for modern Islamic thought and reform"
    }
  ],
  movements: [
    {
      name: "Islamic Revival Movement",
      arabicName: "الصحوة الإسلامية",
      period: "1970s-Present",
      region: [
        "Middle East",
        "North Africa",
        "South Asia",
        "Southeast Asia"
      ],
      founders: [
        {
          name: "Hassan al-Banna",
          arabicName: "حسن البنا",
          period: "1906-1949",
          background: "Egyptian educator and reformer",
          keyIdeas: [
            "Islamic social reform",
            "Educational development",
            "Political activism",
            "Economic independence"
          ]
        }
      ],
      principles: [
        "Return to Islamic values",
        "Social justice",
        "Educational reform",
        "Political participation",
        "Economic development"
      ],
      developments: [
        "Establishment of Islamic institutions",
        "Educational programs",
        "Social services",
        "Political participation",
        "Media presence"
      ],
      influence: [
        "Religious discourse",
        "Social organization",
        "Political activism",
        "Educational systems",
        "Cultural expression"
      ],
      currentStatus: "Active across multiple regions with varying forms and approaches"
    }
  ],
  scholars: [
    {
      name: "Fazlur Rahman",
      arabicName: "فضل الرحمن",
      title: "Islamic Modernist Scholar",
      period: "1919-1988",
      fields: ["Islamic Philosophy", "Quranic Studies", "Islamic Ethics", "Modern Islamic Thought"],
      biography: {
        birth: "1919",
        death: "1988",
        location: "Pakistan/USA",
        education: "Oxford University, Classical Islamic Education",
        keyContributions: [
          {
            field: "Quranic Interpretation",
            contribution: "Double Movement Theory",
            significance: "New methodology for contemporary Quranic understanding"
          },
          {
            field: "Islamic Ethics",
            contribution: "Ethical Framework",
            significance: "Integration of Islamic ethics with modern challenges"
          }
        ]
      },
      majorWorks: [
        {
          title: "Islam and Modernity: Transformation of an Intellectual Tradition",
          arabicTitle: "الإسلام والحداثة",
          year: "1982",
          field: "Islamic Thought",
          description: "Analysis of Islamic educational and intellectual history",
          influence: [
            "Modern Islamic education",
            "Reform methodology",
            "Intellectual development",
            "Educational policy"
          ],
          amazonUrl: "https://www.amazon.com/Islam-Modernity-Transformation-Intellectual-Tradition/dp/0226702847"
        }
      ],
      legacy: [
        "Modern Quranic interpretation methodology",
        "Islamic educational reform",
        "Ethical framework development",
        "Integration of tradition and modernity"
      ]
    }
  ],
  developments: [
    {
      area: "Islamic Finance",
      arabicTerm: "التمويل الإسلامي",
      description: "Development of financial systems and instruments compliant with Islamic law.",
      keyFeatures: [
        "Interest-free banking",
        "Profit-sharing mechanisms",
        "Ethical investment",
        "Islamic bonds (Sukuk)",
        "Shariah compliance"
      ],
      significance: [
        "Economic development",
        "Ethical finance",
        "Global integration",
        "Alternative banking"
      ],
      examples: [
        {
          name: "Dubai Islamic Bank",
          description: "First modern Islamic bank",
          location: "Dubai, UAE",
          date: "1975",
          impact: "Pioneered modern Islamic banking practices"
        }
      ],
      challenges: [
        "Standardization issues",
        "Regulatory frameworks",
        "Competition with conventional banking",
        "Innovation needs"
      ],
      futureProspects: [
        "Digital integration",
        "Global expansion",
        "Product innovation",
        "Sustainable finance"
      ]
    }
  ],
  events: [
    {
      name: "Iranian Revolution",
      arabicName: "الثورة الإيرانية",
      date: "1978-1979",
      location: "Iran",
      background: "Popular uprising against the Shah's regime leading to establishment of Islamic Republic",
      keyFigures: [
        {
          name: "Ayatollah Khomeini",
          role: "Revolutionary Leader",
          significance: "Led the revolution and established Islamic governance model"
        }
      ],
      significance: [
        "First modern Islamic state",
        "New political model",
        "Regional power shift",
        "Islamic governance example"
      ],
      impact: [
        "Global Islamic movements",
        "Regional politics",
        "Islamic political thought",
        "International relations"
      ],
      aftermath: "Establishment of Islamic Republic and influence on global Islamic movements"
    }
  ],
  resources: [
    {
      title: "Modern Islamic Thought in a Radical Age",
      author: "Muhammad Qasim Zaman",
      year: "2012",
      type: "Academic",
      description: "Analysis of modern Islamic intellectual trends and religious authority",
      language: "English",
      level: "Advanced",
      amazonUrl: "https://www.amazon.com/Modern-Islamic-Thought-Radical-Age/dp/1107096456",
      isbn: "978-1107096455"
    },
    {
      title: "Islam: The Straight Path",
      author: "John L. Esposito",
      year: "2016",
      type: "Overview",
      description: "Comprehensive introduction to Islam's development in the modern world",
      language: "English",
      level: "Intermediate",
      amazonUrl: "https://www.amazon.com/Islam-Straight-Path-Updated-Fifth/dp/0190632151",
      isbn: "978-0190632151"
    }
  ]
}

export default function ModernPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Modern Islamic History</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{modernContent.introduction}</p>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Timeline Overview:</h3>
            <p className="mb-2">
              <span className="font-semibold">Period: </span>
              {modernContent.timeline.start} - {modernContent.timeline.end}
            </p>
            <p className="mb-4">{modernContent.timeline.overview}</p>
            <h4 className="font-semibold mb-2">Historical Significance:</h4>
            <ul className="list-disc pl-6">
              {modernContent.timeline.significance.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Reforms */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Major Reforms</CardTitle>
        </CardHeader>
        <CardContent>
          {modernContent.reforms.map((reform, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                {reform.name} ({reform.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">
                Period: {reform.period} | Location: {reform.location}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Principles:</h4>
                  <ul className="list-disc pl-6">
                    {reform.keyPrinciples.map((principle, idx) => (
                      <li key={idx}>{principle}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Achievements:</h4>
                  <ul className="list-disc pl-6">
                    {reform.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Leaders:</h4>
                {reform.leaders.map((leader, idx) => (
                  <div key={idx} className="mb-4 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">
                      {leader.name} ({leader.arabicName})
                    </h5>
                    <p className="text-sm text-gray-600">Role: {leader.role}</p>
                    <div className="mt-2">
                      <h6 className="font-medium">Contributions:</h6>
                      <ul className="list-disc pl-6">
                        {leader.contributions.map((contribution, contIdx) => (
                          <li key={contIdx} className="text-sm">{contribution}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{leader.impact}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Challenges:</h4>
                <ul className="list-disc pl-6">
                  {reform.challenges.map((challenge, idx) => (
                    <li key={idx}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Legacy:</h4>
                <p className="pl-4 border-l-2 border-primary">
                  {reform.legacy}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Movements */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Islamic Movements</CardTitle>
        </CardHeader>
        <CardContent>
          {modernContent.movements.map((movement, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">
                {movement.name} ({movement.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">Period: {movement.period}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold mb-2">Regions:</h4>
                  <ul className="list-disc pl-6">
                    {movement.region.map((region, idx) => (
                      <li key={idx}>{region}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Core Principles:</h4>
                  <ul className="list-disc pl-6">
                    {movement.principles.map((principle, idx) => (
                      <li key={idx}>{principle}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Founders:</h4>
                {movement.founders.map((founder, idx) => (
                  <div key={idx} className="mb-4 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">
                      {founder.name} ({founder.arabicName})
                    </h5>
                    <p className="text-sm text-gray-600">Period: {founder.period}</p>
                    <p className="text-sm text-gray-600">Background: {founder.background}</p>
                    <div className="mt-2">
                      <h6 className="font-medium">Key Ideas:</h6>
                      <ul className="list-disc pl-6">
                        {founder.keyIdeas.map((idea, ideaIdx) => (
                          <li key={ideaIdx} className="text-sm">{idea}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Developments:</h4>
                <ul className="list-disc pl-6">
                  {movement.developments.map((development, idx) => (
                    <li key={idx}>{development}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Influence:</h4>
                <ul className="list-disc pl-6">
                  {movement.influence.map((inf, idx) => (
                    <li key={idx}>{inf}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Current Status:</h4>
                <p className="pl-4 border-l-2 border-primary">
                  {movement.currentStatus}
                </p>
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
          {modernContent.scholars.map((scholar, index) => (
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
                  {scholar.biography.death && (
                    <p><strong>Death:</strong> {scholar.biography.death}</p>
                  )}
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
          <CardTitle>Modern Developments</CardTitle>
        </CardHeader>
        <CardContent>
          {modernContent.developments.map((development, index) => (
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
                <h4 className="font-semibold mb-2">Challenges:</h4>
                <ul className="list-disc pl-6">
                  {development.challenges.map((challenge, idx) => (
                    <li key={idx}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Future Prospects:</h4>
                <ul className="list-disc pl-6">
                  {development.futureProspects.map((prospect, idx) => (
                    <li key={idx}>{prospect}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Events */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Significant Events</CardTitle>
        </CardHeader>
        <CardContent>
          {modernContent.events.map((event, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {event.name} ({event.arabicName})
              </h3>
              <p className="text-gray-600 mb-2">
                Date: {event.date} | Location: {event.location}
              </p>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Background:</h4>
                <p className="pl-4 border-l-2 border-primary">
                  {event.background}
                </p>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Figures:</h4>
                {event.keyFigures.map((figure, idx) => (
                  <div key={idx} className="mb-3 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">{figure.name}</h5>
                    <p className="text-sm">Role: {figure.role}</p>
                    <p className="text-sm text-gray-600">{figure.significance}</p>
                  </div>
                ))}
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
                <h4 className="font-semibold mb-2">Impact:</h4>
                <ul className="list-disc pl-6">
                  {event.impact.map((imp, idx) => (
                    <li key={idx}>{imp}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Aftermath:</h4>
                <p className="pl-4 border-l-2 border-primary">
                  {event.aftermath}
                </p>
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
            {modernContent.resources.map((resource, index) => (
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