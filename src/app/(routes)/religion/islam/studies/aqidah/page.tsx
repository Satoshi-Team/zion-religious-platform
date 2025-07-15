import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface AqidahPrinciple {
  name: string
  arabicName: string
  description: string
  significance: string[]
  quranicReferences: Array<{
    surah: string
    ayah: string
    text: string
    explanation: string
  }>
  hadithReferences: Array<{
    source: string
    book: string
    number: string
    text: string
    explanation: string
  }>
  implications: string[]
}

interface TheologicalSchool {
  name: string
  arabicName: string
  period: string
  description: string
  mainPrinciples: string[]
  methodology: string[]
  keyScholars: Array<{
    name: string
    arabicName: string
    years: string
    contribution: string
    significance: string
    keyTexts: Array<{
      title: string
      arabicTitle: string
      description: string
      amazonUrl?: string
    }>
  }>
  distinctiveViews: Array<{
    topic: string
    position: string
    evidence: string[]
  }>
  influence: string[]
}

interface ScholarlyPerspective {
  period: string
  scholars: Array<{
    name: string
    arabicName: string
    years: string
    contribution: string
    significance: string
    keyTexts: Array<{
      title: string
      arabicTitle: string
      description: string
      amazonUrl?: string
    }>
  }>
  mainIdeas: string[]
  impact: string
}

interface Misconception {
  topic: string
  description: string
  clarification: string
  evidence: Array<{
    type: string
    source: string
    text: string
    explanation: string
  }>
  scholarlyResponses: Array<{
    scholar: string
    response: string
    reference: string
  }>
}

interface Contemporary {
  aspect: string
  description: string
  challenges: string[]
  solutions: string[]
  examples: string[]
  scholarlyViews: Array<{
    scholar: string
    perspective: string
    reasoning: string
    implications: string[]
    references: Array<{
      title: string
      url: string
    }>
  }>
}

interface Resource {
  title: string
  author: string
  url: string
  type: string
  description: string
  language: string
  level: string
  year: string
  isbn?: string
  amazonUrl?: string
  affiliate?: boolean
  affiliateUrl?: string
}

interface AqidahContent {
  introduction: string
  definition: string
  importance: string[]
  principles: AqidahPrinciple[]
  schools: TheologicalSchool[]
  scholarlyPerspectives: ScholarlyPerspective[]
  misconceptions: Misconception[]
  contemporary: Contemporary[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Aqidah (Islamic Creed) | Islamic Studies",
  description: "Comprehensive exploration of Islamic creed, its principles, schools of thought, and contemporary relevance.",
  openGraph: {
    title: "Aqidah (Islamic Creed) | Islamic Studies",
    description: "In-depth study of Islamic theology and belief system",
    type: "website",
  },
}

const aqidahContent: AqidahContent = {
  introduction: `Aqidah represents the foundational beliefs and theological principles of Islam. It encompasses the core tenets of faith that every Muslim must understand and believe in with certainty. These beliefs shape a Muslim's worldview and form the basis for all Islamic practices and ethical conduct.`,
  definition: `Aqidah, linguistically meaning 'that which is tied/bound to', refers to those matters which are firmly believed in the heart, with absolute conviction and certainty, leaving no room for doubt. In Islamic terminology, it specifically refers to the six articles of faith and related theological principles.`,
  importance: [
    "Foundation of faith and practice",
    "Criterion for sound belief",
    "Protection from deviation",
    "Basis for salvation",
    "Framework for understanding reality",
    "Guide for ethical conduct",
    "Source of spiritual strength"
  ],
  principles: [
    {
      name: "Divine Unity",
      arabicName: "التوحيد",
      description: "The absolute oneness of Allah in His essence, attributes, and actions",
      significance: [
        "Core of Islamic faith",
        "Basis of worship",
        "Foundation of worldview",
        "Purpose of creation",
        "Key to salvation"
      ],
      quranicReferences: [
        {
          surah: "Al-Ikhlas",
          ayah: "112:1-4",
          text: "Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, Nor is there to Him any equivalent.",
          explanation: "Clear statement of divine unity and transcendence"
        },
        {
          surah: "Al-Baqarah",
          ayah: "2:255",
          text: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence",
          explanation: "Affirmation of divine uniqueness and perfection"
        }
      ],
      hadithReferences: [
        {
          source: "Sahih Bukhari",
          book: "Book of Faith",
          number: "7372",
          text: "Whoever dies knowing that there is no deity worthy of worship except Allah will enter Paradise",
          explanation: "Emphasizes the fundamental importance of Tawhid"
        }
      ],
      implications: [
        "Exclusive worship",
        "Complete reliance",
        "Perfect trust",
        "Ethical monotheism",
        "Spiritual focus"
      ]
    },
    {
      name: "Divine Attributes",
      arabicName: "الصفات",
      description: "The perfect attributes and names of Allah as revealed in scripture",
      significance: [
        "Understanding divine nature",
        "Proper worship",
        "Spiritual development",
        "Ethical guidance",
        "Divine recognition"
      ],
      quranicReferences: [
        {
          surah: "Al-Hashr",
          ayah: "59:22-24",
          text: "He is Allah, other than whom there is no deity, Knower of the unseen and the witnessed. He is the Entirely Merciful, the Especially Merciful...",
          explanation: "Lists several divine names and attributes"
        }
      ],
      hadithReferences: [
        {
          source: "Sahih Muslim",
          book: "Book of Remembrance",
          number: "2677",
          text: "Allah has ninety-nine names, whoever enumerates them will enter Paradise",
          explanation: "Importance of knowing and understanding divine names"
        }
      ],
      implications: [
        "Perfect knowledge",
        "Complete power",
        "Absolute wisdom",
        "Universal mercy",
        "Perfect justice"
      ]
    }
  ],
  schools: [
    {
      name: "Ash'ari School",
      arabicName: "المذهب الأشعري",
      period: "10th Century CE onwards",
      description: "Traditional Sunni theological school combining revelation with rational argumentation",
      mainPrinciples: [
        "Middle path methodology",
        "Divine attributes affirmation",
        "Human responsibility",
        "Rational demonstration",
        "Scriptural adherence"
      ],
      methodology: [
        "Rational proof",
        "Scriptural evidence",
        "Logical argumentation",
        "Systematic theology",
        "Balanced approach"
      ],
      keyScholars: [
        {
          name: "Abu al-Hasan al-Ash'ari",
          arabicName: "أبو الحسن الأشعري",
          years: "874-936 CE",
          contribution: "Founded the school and established its principles",
          significance: "Systematized Sunni theology",
          keyTexts: [
            {
              title: "Al-Ibanah 'an Usul ad-Diyanah",
              arabicTitle: "الإبانة عن أصول الديانة",
              description: "Exposition of foundational beliefs",
              amazonUrl: "https://www.amazon.com/Al-Ibanah-Usul-Ad-Diyanah-Principles-Religion/dp/1567447570"
            }
          ]
        }
      ],
      distinctiveViews: [
        {
          topic: "Divine Attributes",
          position: "Affirmation without modality",
          evidence: [
            "Quranic verses",
            "Prophetic traditions",
            "Rational proofs"
          ]
        }
      ],
      influence: [
        "Major Sunni regions",
        "Islamic institutions",
        "Theological discourse",
        "Educational curricula"
      ]
    }
  ],
  scholarlyPerspectives: [
    {
      period: "Classical Period (8th-13th Century)",
      scholars: [
        {
          name: "Abu Hamid Al-Ghazali",
          arabicName: "أبو حامد الغزالي",
          years: "1058-1111 CE",
          contribution: "Synthesized theology with spirituality",
          significance: "Defended orthodox creed through multiple approaches",
          keyTexts: [
            {
              title: "Jerusalem in the Quran",
              arabicTitle: "القدس في القرآن",
              description: "Analysis of Islamic eschatology and Jerusalem",
              amazonUrl: "https://www.amazon.com/Jerusalem-Quran-Imran-N-Hosein/dp/0970766726"
            },
            {
              title: "Foundations of Islamic Faith",
              arabicTitle: "قواعد العقائد",
              description: "Systematic presentation of Islamic theology",
              amazonUrl: "https://www.amazon.com/Foundations-Islamic-Belief-Qawaid-al-Aqaid/dp/1567447503"
            }
          ]
        }
      ],
      mainIdeas: [
        "Rational theology",
        "Spiritual insight",
        "Ethical dimension",
        "Practical application",
        "Balanced approach"
      ],
      impact: "Established enduring framework for understanding Islamic theology"
    }
  ],
  misconceptions: [
    {
      topic: "Divine Attributes",
      description: "Misunderstanding regarding Allah's attributes and their interpretation",
      clarification: "Proper understanding balances between affirmation and transcendence",
      evidence: [
        {
          type: "Quran",
          source: "42:11",
          text: "There is nothing like unto Him, and He is the Hearing, the Seeing",
          explanation: "Establishes both transcendence and attribution"
        }
      ],
      scholarlyResponses: [
        {
          scholar: "Ibn Taymiyyah",
          response: "Affirmation without comparison or denial",
          reference: "Al-Aqidah Al-Wasitiyyah"
        }
      ]
    }
  ],
  contemporary: [
    {
      aspect: "Modern Challenges",
      description: "Addressing contemporary ideological and philosophical challenges to Islamic belief",
      challenges: [
        "Materialism",
        "Secularism",
        "Moral relativism",
        "Scientific reductionism"
      ],
      solutions: [
        "Islamic epistemology",
        "Rational demonstration",
        "Scientific harmony",
        "Ethical framework"
      ],
      examples: [
        "Integration of science and faith",
        "Islamic responses to modernity",
        "Ethical solutions to modern problems",
        "Contemporary theological discourse"
      ],
      scholarlyViews: [
        {
          scholar: "Syed Muhammad Naquib al-Attas",
          perspective: "Islamic Worldview in Modern Context",
          reasoning: "Need for Islamic epistemological framework",
          implications: [
            "Educational reform",
            "Intellectual revival",
            "Cultural renewal",
            "Spiritual awakening"
          ],
          references: [
            {
              title: "Prolegomena to the Metaphysics of Islam",
              url: "https://www.amazon.com/Prolegomena-Metaphysics-Islam-Exposition-Fundamental/dp/9839519549"
            }
          ]
        }
      ]
    }
  ],
  resources: [
    {
      title: "Islamic Creed Series",
      author: "Umar S. al-Ashqar",
      url: "https://www.amazon.com/Belief-Allah-Light-Quran-Sunnah/dp/9960850188",
      type: "Book Series",
      description: "Comprehensive exploration of Islamic beliefs",
      language: "English",
      level: "Intermediate",
      year: "2003",
      isbn: "978-9960850184",
      amazonUrl: "https://www.amazon.com/Belief-Allah-Light-Quran-Sunnah/dp/9960850188"
    },
    {
      title: "The Creed of Imam al-Tahawi",
      author: "Abu Ja'far al-Tahawi",
      url: "https://www.amazon.com/Creed-Imam-al-Tahawi-Hamza-Yusuf/dp/0970284396",
      type: "Book",
      description: "Classical text on Islamic creed with contemporary commentary",
      language: "English",
      level: "Advanced",
      year: "2007",
      isbn: "978-0970284396",
      amazonUrl: "https://www.amazon.com/Creed-Imam-al-Tahawi-Hamza-Yusuf/dp/0970284396"
    },
    {
      title: "The Cambridge Companion to Classical Islamic Theology",
      author: "Tim Winter",
      url: "https://www.amazon.com/Cambridge-Companion-Classical-Islamic-Theology/dp/0521785499",
      type: "Academic",
      description: "Scholarly introduction to Islamic theological traditions",
      language: "English",
      level: "Advanced",
      year: "2008",
      isbn: "978-0521785495",
      amazonUrl: "https://www.amazon.com/Cambridge-Companion-Classical-Islamic-Theology/dp/0521785499"
    }
  ]
}

export default function AqidahPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Islamic Creed (Aqidah)</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction to Aqidah</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{aqidahContent.introduction}</p>
          <p className="mb-4">{aqidahContent.definition}</p>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Importance of Aqidah:</h3>
            <ul className="list-disc pl-6">
              {aqidahContent.importance.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Core Principles */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Core Principles</CardTitle>
        </CardHeader>
        <CardContent>
          {aqidahContent.principles.map((principle, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {principle.name} ({principle.arabicName})
              </h3>
              <p className="mb-3">{principle.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <ul className="list-disc pl-6">
                    {principle.significance.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Quranic References:</h4>
                  <ul className="list-disc pl-6">
                    {principle.quranicReferences.map((ref, idx) => (
                      <li key={idx}>
                        <strong>{ref.surah} ({ref.ayah})</strong>: {ref.text}
                        <p className="text-sm text-gray-600">{ref.explanation}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Hadith References:</h4>
                <ul className="list-disc pl-6">
                  {principle.hadithReferences.map((hadith, idx) => (
                    <li key={idx}>
                      <strong>{hadith.source} ({hadith.number})</strong>: {hadith.text}
                      <p className="text-sm text-gray-600">{hadith.explanation}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Theological Schools */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Theological Schools</CardTitle>
        </CardHeader>
        <CardContent>
          {aqidahContent.schools.map((school, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {school.name} ({school.arabicName})
              </h3>
              <p className="mb-2 text-gray-600">{school.period}</p>
              <p className="mb-3">{school.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Main Principles:</h4>
                  <ul className="list-disc pl-6">
                    {school.mainPrinciples.map((principle, idx) => (
                      <li key={idx}>{principle}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Methodology:</h4>
                  <ul className="list-disc pl-6">
                    {school.methodology.map((method, idx) => (
                      <li key={idx}>{method}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Scholars:</h4>
                {school.keyScholars.map((scholar, idx) => (
                  <div key={idx} className="mb-4 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">
                      {scholar.name} ({scholar.arabicName}) - {scholar.years}
                    </h5>
                    <p className="mb-2">{scholar.contribution}</p>
                    <p className="mb-2 text-gray-600">{scholar.significance}</p>
                    <div className="mt-2">
                      <h6 className="font-semibold">Key Works:</h6>
                      <ul className="list-disc pl-6">
                        {scholar.keyTexts.map((text, textIdx) => (
                          <li key={textIdx}>
                            <Link
                              href={text.amazonUrl || "#"}
                              className="text-blue-600 hover:underline"
                              target="_blank"
                            >
                              {text.title} ({text.arabicTitle})
                            </Link>
                            <p className="text-sm text-gray-600">{text.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Distinctive Views:</h4>
                {school.distinctiveViews.map((view, idx) => (
                  <div key={idx} className="mb-3">
                    <h5 className="font-medium">{view.topic}</h5>
                    <p className="mb-1">{view.position}</p>
                    <ul className="list-disc pl-6">
                      {view.evidence.map((item, evidenceIdx) => (
                        <li key={evidenceIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Scholarly Perspectives */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Scholarly Perspectives</CardTitle>
        </CardHeader>
        <CardContent>
          {aqidahContent.scholarlyPerspectives.map((perspective, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{perspective.period}</h3>
              <div className="grid grid-cols-1 gap-4">
                {perspective.scholars.map((scholar, idx) => (
                  <div key={idx} className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold">
                      {scholar.name} ({scholar.arabicName}) - {scholar.years}
                    </h4>
                    <p className="mb-2">{scholar.contribution}</p>
                    <p className="mb-2 text-gray-600">{scholar.significance}</p>
                    <div className="mt-2">
                      <h5 className="font-semibold">Key Works:</h5>
                      <ul className="list-disc pl-6">
                        {scholar.keyTexts.map((text, textIdx) => (
                          <li key={textIdx}>
                            <Link
                              href={text.amazonUrl || "#"}
                              className="text-blue-600 hover:underline"
                              target="_blank"
                            >
                              {text.title} ({text.arabicTitle})
                            </Link>
                            <p className="text-sm text-gray-600">{text.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Main Ideas:</h4>
                <ul className="list-disc pl-6">
                  {perspective.mainIdeas.map((idea, idx) => (
                    <li key={idx}>{idea}</li>
                  ))}
                </ul>
                <p className="mt-2 text-gray-700">{perspective.impact}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Contemporary Issues */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Contemporary Issues</CardTitle>
        </CardHeader>
        <CardContent>
          {aqidahContent.contemporary.map((issue, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{issue.aspect}</h3>
              <p className="mb-3">{issue.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Challenges:</h4>
                  <ul className="list-disc pl-6">
                    {issue.challenges.map((challenge, idx) => (
                      <li key={idx}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Solutions:</h4>
                  <ul className="list-disc pl-6">
                    {issue.solutions.map((solution, idx) => (
                      <li key={idx}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="list-disc pl-6">
                  {issue.examples.map((example, idx) => (
                    <li key={idx}>{example}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Scholarly Views:</h4>
                {issue.scholarlyViews.map((view, idx) => (
                  <div key={idx} className="mb-4 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">{view.scholar}</h5>
                    <p className="mb-2">{view.perspective}</p>
                    <p className="mb-2">{view.reasoning}</p>
                    <div>
                      <h6 className="font-semibold mb-1">Implications:</h6>
                      <ul className="list-disc pl-6">
                        {view.implications.map((implication, impIdx) => (
                          <li key={impIdx}>{implication}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-2">
                      <h6 className="font-semibold mb-1">References:</h6>
                      <ul className="list-disc pl-6">
                        {view.references.map((ref, refIdx) => (
                          <li key={refIdx}>
                            <Link
                              href={ref.url}
                              className="text-blue-600 hover:underline"
                              target="_blank"
                            >
                              {ref.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
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
            {aqidahContent.resources.map((resource, index) => (
              <Card key={index} className="bg-secondary/20">
                <CardHeader>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2"><strong>Author:</strong> {resource.author}</p>
                  <p className="mb-2"><strong>Type:</strong> {resource.type}</p>
                  <p className="mb-2"><strong>Level:</strong> {resource.level}</p>
                  <p className="mb-2"><strong>Year:</strong> {resource.year}</p>
                  <p className="mb-2"><strong>ISBN:</strong> {resource.isbn}</p>
                  <p className="mb-4">{resource.description}</p>
                  <Button asChild>
                    <Link href={resource.amazonUrl || resource.url} target="_blank">
                      View on Amazon
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 