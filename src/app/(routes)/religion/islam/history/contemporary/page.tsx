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

interface ContemporaryContent {
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
  title: "Contemporary Islamic History | Islamic Studies",
  description: "Comprehensive exploration of Contemporary Islamic History, current developments, and future directions.",
  openGraph: {
    title: "Contemporary Islamic History | Islamic Studies",
    description: "In-depth study of Islamic civilization's contemporary period and its ongoing transformations",
    type: "website",
  },
}

const contemporaryContent: ContemporaryContent = {
  introduction: `The Contemporary period of Islamic history, from the late 20th century to the present, marks an era of unprecedented global interconnectedness, technological advancement, and complex challenges for Muslim societies. This period witnesses the emergence of new interpretations of Islamic traditions, responses to globalization, and efforts to address modern challenges while maintaining Islamic values and identity.`,
  timeline: {
    start: "1991 CE",
    end: "Present",
    overview: "Beginning with the end of the Cold War, this period encompasses the rise of globalization, digital revolution, geopolitical shifts, and evolving interpretations of Islam in the modern world. It features new intellectual discourse, social movements, and ongoing negotiations between tradition and contemporary life.",
    significance: [
      "Global Islamic presence",
      "Digital transformation",
      "Identity and integration",
      "Environmental awareness",
      "Women's empowerment",
      "Youth engagement",
      "Interfaith dialogue",
      "Economic innovation"
    ]
  },
  reforms: [
    {
      name: "Progressive Islam Movement",
      arabicName: "الإسلام التقدمي",
      period: "1990s-Present",
      location: "Global",
      leaders: [
        {
          name: "Khaled Abou El Fadl",
          arabicName: "خالد أبو الفضل",
          role: "Scholar and Jurist",
          contributions: [
            "Islamic legal reform",
            "Gender equality advocacy",
            "Democratic principles in Islam",
            "Human rights framework"
          ],
          impact: "Pioneered progressive Islamic jurisprudence"
        },
        {
          name: "Amina Wadud",
          arabicName: "أمينة ودود",
          role: "Islamic Feminist Scholar",
          contributions: [
            "Gender-inclusive Quranic interpretation",
            "Women's leadership in prayer",
            "Islamic feminism development",
            "Social justice advocacy"
          ],
          impact: "Revolutionized gender discourse in Islamic thought"
        }
      ],
      keyPrinciples: [
        "Gender equality",
        "Social justice",
        "Religious pluralism",
        "Democratic values",
        "Environmental ethics"
      ],
      achievements: [
        "Inclusive interpretations",
        "Women's mosque access",
        "Interfaith initiatives",
        "Environmental awareness",
        "Youth engagement"
      ],
      challenges: [
        "Traditional resistance",
        "Methodological debates",
        "Implementation issues",
        "Cultural barriers"
      ],
      legacy: "Established framework for contemporary Islamic thought and practice"
    }
  ],
  movements: [
    {
      name: "Digital Islam Movement",
      arabicName: "الإسلام الرقمي",
      period: "2000s-Present",
      region: [
        "Global Digital Space",
        "Social Media Platforms",
        "Online Communities",
        "Mobile Applications"
      ],
      founders: [
        {
          name: "Hamza Yusuf",
          arabicName: "حمزة يوسف",
          period: "1958-Present",
          background: "American Islamic scholar and educator",
          keyIdeas: [
            "Traditional knowledge in digital age",
            "Online Islamic education",
            "Digital dawah",
            "Virtual community building"
          ]
        }
      ],
      principles: [
        "Digital accessibility",
        "Global connectivity",
        "Educational innovation",
        "Community engagement",
        "Information authenticity"
      ],
      developments: [
        "Islamic apps development",
        "Online learning platforms",
        "Social media presence",
        "Digital libraries",
        "Virtual communities"
      ],
      influence: [
        "Global reach",
        "Youth engagement",
        "Educational access",
        "Community building",
        "Knowledge preservation"
      ],
      currentStatus: "Rapidly expanding with continuous technological innovation"
    }
  ],
  scholars: [
    {
      name: "Tariq Ramadan",
      arabicName: "طارق رمضان",
      title: "Contemporary Islamic Thinker",
      period: "1962-Present",
      fields: ["Islamic Ethics", "Contemporary Fiqh", "Islamic Reform", "European Islam"],
      biography: {
        birth: "1962",
        location: "Geneva, Switzerland",
        education: "PhD in Arabic and Islamic Studies, University of Geneva",
        keyContributions: [
          {
            field: "European Islam",
            contribution: "European Muslim Identity Framework",
            significance: "New approach to Muslim minority integration"
          },
          {
            field: "Islamic Ethics",
            contribution: "Radical Reform Theory",
            significance: "Contemporary ethical framework for Muslims"
          }
        ]
      },
      majorWorks: [
        {
          title: "Radical Reform: Islamic Ethics and Liberation",
          arabicTitle: "الإصلاح الجذري: الأخلاق الإسلامية والتحرر",
          year: "2009",
          field: "Islamic Ethics",
          description: "Comprehensive framework for contemporary Islamic ethics",
          influence: [
            "Modern ethical discourse",
            "Reform methodology",
            "Social transformation",
            "Religious adaptation"
          ],
          amazonUrl: "https://www.amazon.com/Radical-Reform-Islamic-Ethics-Liberation/dp/0195331710"
        }
      ],
      legacy: [
        "European Muslim identity development",
        "Contemporary Islamic ethics",
        "Integration framework",
        "Educational innovation"
      ]
    }
  ],
  developments: [
    {
      area: "Islamic Environmental Movement",
      arabicTerm: "الحركة البيئية الإسلامية",
      description: "Integration of Islamic principles with environmental conservation and sustainable development.",
      keyFeatures: [
        "Eco-friendly mosques",
        "Green Ramadan initiatives",
        "Islamic environmental ethics",
        "Sustainable development",
        "Conservation programs"
      ],
      significance: [
        "Environmental protection",
        "Resource conservation",
        "Community awareness",
        "Global cooperation"
      ],
      examples: [
        {
          name: "Green Mosque Initiative",
          description: "Solar-powered mosques with water conservation systems",
          location: "UAE",
          date: "2019",
          impact: "Model for sustainable religious infrastructure"
        }
      ],
      challenges: [
        "Implementation costs",
        "Technical expertise",
        "Community adoption",
        "Resource limitations"
      ],
      futureProspects: [
        "Renewable energy adoption",
        "Zero-waste programs",
        "Global partnerships",
        "Educational initiatives"
      ]
    }
  ],
  events: [
    {
      name: "Arab Spring",
      arabicName: "الربيع العربي",
      date: "2010-2012",
      location: "Middle East and North Africa",
      background: "Series of pro-democracy uprisings that spread across the Arab world",
      keyFigures: [
        {
          name: "Various Civil Society Leaders",
          role: "Protest Organizers",
          significance: "Led peaceful demonstrations for democratic reform"
        }
      ],
      significance: [
        "Democratic aspirations",
        "Youth empowerment",
        "Social media impact",
        "Political transformation"
      ],
      impact: [
        "Regional political changes",
        "Social movement evolution",
        "Digital activism growth",
        "Civil society development"
      ],
      aftermath: "Complex regional transformations with varying outcomes across different countries"
    }
  ],
  resources: [
    {
      title: "Islam in the Modern World",
      author: "Jeffrey T. Kenney",
      year: "2021",
      type: "Academic",
      description: "Comprehensive analysis of contemporary Islamic issues and developments",
      language: "English",
      level: "Advanced",
      amazonUrl: "https://www.amazon.com/Islam-Modern-World-Jeffrey-Kenney/dp/0415782570",
      isbn: "978-0415782579"
    },
    {
      title: "The Future of Islam",
      author: "John L. Esposito",
      year: "2010",
      type: "Analysis",
      description: "Exploration of Islam's role in contemporary global society",
      language: "English",
      level: "Intermediate",
      amazonUrl: "https://www.amazon.com/Future-Islam-John-L-Esposito/dp/0195165217",
      isbn: "978-0195165210"
    }
  ]
}

export default function ContemporaryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contemporary Islamic History</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{contemporaryContent.introduction}</p>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Timeline Overview:</h3>
            <p className="mb-2">
              <span className="font-semibold">Period: </span>
              {contemporaryContent.timeline.start} - {contemporaryContent.timeline.end}
            </p>
            <p className="mb-4">{contemporaryContent.timeline.overview}</p>
            <h4 className="font-semibold mb-2">Historical Significance:</h4>
            <ul className="list-disc pl-6">
              {contemporaryContent.timeline.significance.map((point, index) => (
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
          {contemporaryContent.reforms.map((reform, index) => (
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
          {contemporaryContent.movements.map((movement, index) => (
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
          {contemporaryContent.scholars.map((scholar, index) => (
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
          <CardTitle>Contemporary Developments</CardTitle>
        </CardHeader>
        <CardContent>
          {contemporaryContent.developments.map((development, index) => (
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
          {contemporaryContent.events.map((event, index) => (
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
            {contemporaryContent.resources.map((resource, index) => (
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