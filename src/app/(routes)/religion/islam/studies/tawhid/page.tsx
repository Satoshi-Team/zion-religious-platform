import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface TawhidCategory {
  name: string
  arabicName: string
  description: string
  keyPrinciples: string[]
  quranicReferences: Array<{
    surah: string
    ayah: string
    text: string
    explanation: string
  }>
  implications: string[]
}

interface ScholarlyPerspective {
  period: string
  scholars: Array<{
    name: string
    arabicName: string
    contribution: string
    significance: string
    keyTexts: string[]
  }>
  mainIdeas: string[]
  impact: string
}

interface Contemporary {
  aspect: string
  description: string
  challenges: string[]
  responses: string[]
  applications: string[]
  examples: string[]
}

interface Resource {
  title: string
  author: string
  url: string
  type: string
  description: string
  language: string
  affiliate?: boolean
  affiliateUrl?: string
}

interface TawhidContent {
  introduction: string
  definition: string
  importance: string[]
  categories: TawhidCategory[]
  scholarlyPerspectives: ScholarlyPerspective[]
  contemporary: Contemporary[]
  practicalImplications: {
    belief: string[]
    worship: string[]
    daily: string[]
    social: string[]
  }
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Tawhid (Islamic Monotheism) | Islamic Studies",
  description: "Comprehensive exploration of Tawhid, the fundamental principle of Islamic monotheism, its categories, implications, and contemporary relevance.",
  openGraph: {
    title: "Tawhid (Islamic Monotheism) | Islamic Studies",
    description: "In-depth study of Islamic monotheism and its significance",
    type: "website",
  },
}

const tawhidContent: TawhidContent = {
  introduction: `Tawhid, the absolute monotheism of Islam, represents the most fundamental principle of the Islamic faith. It is the cornerstone upon which all Islamic beliefs and practices are built, asserting the absolute oneness and unity of Allah (God).`,
  definition: `Tawhid is derived from the Arabic word "wahhada" meaning to unite, unify or consolidate. In Islamic theology, it refers to maintaining and affirming divine unity, asserting that there is only one divine being, perfect in all attributes, who is the sole creator, sustainer, and master of all existence.`,
  importance: [
    "Foundation of Islamic faith and practice",
    "Core message of all prophets throughout history",
    "Criterion for salvation in Islamic theology",
    "Basis for Islamic worldview and ethics",
    "Framework for understanding divine-human relationship"
  ],
  categories: [
    {
      name: "Oneness of Lordship",
      arabicName: "Tawhid ar-Rububiyyah",
      description: "Affirming that Allah alone is the creator, sustainer, and master of all creation.",
      keyPrinciples: [
        "Allah is the sole creator",
        "Divine sovereignty over creation",
        "Universal divine providence",
        "Divine control and planning",
        "Exclusive divine lordship"
      ],
      quranicReferences: [
        {
          surah: "Al-Fatihah",
          ayah: "1:2",
          text: "All praise is due to Allah, Lord of all worlds",
          explanation: "Establishes Allah's universal lordship"
        },
        {
          surah: "Az-Zumar",
          ayah: "39:62",
          text: "Allah is the Creator of all things, and He is the Guardian over all things",
          explanation: "Affirms Allah's exclusive creative power"
        }
      ],
      implications: [
        "Recognition of divine authority",
        "Gratitude to the Creator",
        "Trust in divine providence",
        "Submission to divine will",
        "Environmental stewardship"
      ]
    },
    {
      name: "Oneness of Worship",
      arabicName: "Tawhid al-Uluhiyyah",
      description: "Directing all acts of worship solely to Allah without any intermediaries.",
      keyPrinciples: [
        "Exclusive divine worship",
        "Rejection of idolatry",
        "Direct divine relationship",
        "Sincerity in worship",
        "Comprehensive worship concept"
      ],
      quranicReferences: [
        {
          surah: "Al-Ikhlas",
          ayah: "112:1-4",
          text: "Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, Nor is there to Him any equivalent.",
          explanation: "Pure expression of divine unity"
        },
        {
          surah: "Al-Fatiha",
          ayah: "1:5",
          text: "You alone we worship, and You alone we ask for help",
          explanation: "Declaration of exclusive worship"
        }
      ],
      implications: [
        "Pure monotheistic worship",
        "Rejection of polytheism",
        "Spiritual authenticity",
        "Direct divine connection",
        "Worship integration"
      ]
    },
    {
      name: "Oneness of Names and Attributes",
      arabicName: "Tawhid al-Asma wa's-Sifat",
      description: "Affirming Allah's perfect names and attributes as revealed in scripture without distortion, denial, or comparison.",
      keyPrinciples: [
        "Divine perfection",
        "Scriptural adherence",
        "Transcendence",
        "Uniqueness",
        "Divine completeness"
      ],
      quranicReferences: [
        {
          surah: "Ash-Shura",
          ayah: "42:11",
          text: "There is nothing like unto Him, and He is the Hearing, the Seeing",
          explanation: "Affirms divine uniqueness while confirming attributes"
        },
        {
          surah: "Al-Hashr",
          ayah: "59:24",
          text: "He is Allah, the Creator, the Inventor, the Fashioner; to Him belong the best names",
          explanation: "Establishes divine perfect names"
        }
      ],
      implications: [
        "Understanding divine nature",
        "Proper divine conception",
        "Balanced approach",
        "Scriptural guidance",
        "Spiritual development"
      ]
    }
  ],
  scholarlyPerspectives: [
    {
      period: "Classical Period",
      scholars: [
        {
          name: "Ibn Taymiyyah",
          arabicName: "ابن تيمية",
          contribution: "Systematic analysis of Tawhid categories",
          significance: "Established clear framework for understanding divine unity",
          keyTexts: [
            "Kitab at-Tawhid",
            "Al-Aqidah al-Wasitiyyah",
            "Dar' ta'arud al-'aql wa'l-naql"
          ]
        },
        {
          name: "Al-Ghazali",
          arabicName: "الغزالي",
          contribution: "Integration of Tawhid with spirituality",
          significance: "Balanced intellectual and spiritual approaches",
          keyTexts: [
            "Ihya Ulum al-Din",
            "Al-Iqtisad fil-I'tiqad",
            "Mishkat al-Anwar"
          ]
        }
      ],
      mainIdeas: [
        "Systematic categorization",
        "Theological precision",
        "Spiritual integration",
        "Practical application",
        "Intellectual defense"
      ],
      impact: "Established enduring frameworks for understanding and applying Tawhid"
    },
    {
      period: "Modern Period",
      scholars: [
        {
          name: "Muhammad ibn Abdul Wahhab",
          arabicName: "محمد بن عبد الوهاب",
          contribution: "Revival of pure monotheistic practice",
          significance: "Renewed emphasis on practical Tawhid",
          keyTexts: [
            "Kitab at-Tawhid",
            "Kashf ash-Shubuhat",
            "Al-Usul ath-Thalatha"
          ]
        },
        {
          name: "Said Nursi",
          arabicName: "سعيد النورسي",
          contribution: "Modern intellectual defense of Tawhid",
          significance: "Reconciliation with modern thought",
          keyTexts: [
            "Risale-i Nur Collection",
            "The Words",
            "The Letters"
          ]
        }
      ],
      mainIdeas: [
        "Contemporary relevance",
        "Practical implementation",
        "Modern challenges",
        "Intellectual defense",
        "Social reform"
      ],
      impact: "Renewed Tawhid's relevance in modern context"
    }
  ],
  contemporary: [
    {
      aspect: "Modern Challenges",
      description: "Contemporary issues affecting understanding and practice of Tawhid",
      challenges: [
        "Secularization",
        "Materialism",
        "Religious pluralism",
        "Scientific reductionism",
        "Moral relativism"
      ],
      responses: [
        "Intellectual engagement",
        "Educational initiatives",
        "Cultural dialogue",
        "Spiritual renewal",
        "Social activism"
      ],
      applications: [
        "Digital platforms",
        "Academic research",
        "Community programs",
        "Youth education",
        "Interfaith dialogue"
      ],
      examples: [
        "Online Tawhid courses",
        "Academic publications",
        "Community workshops",
        "Youth programs",
        "Interfaith initiatives"
      ]
    },
    {
      aspect: "Practical Implementation",
      description: "Modern applications of Tawhid principles",
      challenges: [
        "Modern lifestyle",
        "Consumer culture",
        "Time management",
        "Social pressures",
        "Global influences"
      ],
      responses: [
        "Lifestyle guidance",
        "Practical frameworks",
        "Community support",
        "Personal development",
        "Social engagement"
      ],
      applications: [
        "Daily worship",
        "Ethical business",
        "Family life",
        "Social relations",
        "Environmental care"
      ],
      examples: [
        "Islamic finance",
        "Ethical consumption",
        "Family programs",
        "Community service",
        "Environmental initiatives"
      ]
    }
  ],
  practicalImplications: {
    belief: [
      "Pure monotheistic faith",
      "Divine consciousness",
      "Spiritual authenticity",
      "Intellectual conviction",
      "Moral foundation"
    ],
    worship: [
      "Sincere devotion",
      "Direct divine connection",
      "Ritual purity",
      "Spiritual focus",
      "Continuous remembrance"
    ],
    daily: [
      "Ethical conduct",
      "Mindful living",
      "Purposeful action",
      "Gratitude practice",
      "Divine trust"
    ],
    social: [
      "Community unity",
      "Social justice",
      "Moral leadership",
      "Cultural harmony",
      "Environmental responsibility"
    ]
  },
  resources: [
    {
      title: "Kitab at-Tawhid",
      author: "Muhammad ibn Abdul Wahhab",
      url: "/resources/kitab-tawhid",
      type: "Book",
      description: "Classical text on Islamic monotheism.",
      language: "Arabic/English",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1891229893"
    },
    {
      title: "The Fundamentals of Tawheed",
      author: "Abu Ameenah Bilal Philips",
      url: "/resources/fundamentals-tawheed",
      type: "Book",
      description: "Modern comprehensive guide to Islamic monotheism.",
      language: "English",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1898649197"
    },
    {
      title: "Divine Unity",
      author: "Hamza Yusuf",
      url: "/resources/divine-unity",
      type: "Course",
      description: "Contemporary explanation of Tawhid principles.",
      language: "English",
      affiliate: false
    }
  ]
}

export default function TawhidPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Tawhid (Islamic Monotheism)</h1>
        <p className="text-xl mb-4">{tawhidContent.introduction}</p>
        <p className="text-lg mb-8">{tawhidContent.definition}</p>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Importance</h3>
          <ul className="list-disc pl-5 space-y-2">
            {tawhidContent.importance.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Categories of Tawhid</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {tawhidContent.categories.map((category, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>
                  {category.name}
                  <span className="text-slate-600 text-sm block">
                    {category.arabicName}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{category.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Principles:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {category.keyPrinciples.map((principle, idx) => (
                        <li key={idx}>{principle}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Quranic References:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {category.quranicReferences.map((ref, idx) => (
                        <li key={idx}>
                          <span className="font-medium">{ref.surah} ({ref.ayah})</span>
                          <span className="text-slate-600 block text-sm">
                            "{ref.text}"
                          </span>
                          <span className="text-slate-600 italic text-sm">
                            {ref.explanation}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Implications:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {category.implications.map((impl, idx) => (
                        <li key={idx}>{impl}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Scholarly Perspectives</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {tawhidContent.scholarlyPerspectives.map((perspective, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{perspective.period}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Scholars:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {perspective.scholars.map((scholar, idx) => (
                        <li key={idx}>
                          <span className="font-medium">{scholar.name}</span>
                          <span className="text-slate-600 block text-sm">
                            {scholar.arabicName}
                          </span>
                          <span className="text-slate-600 text-sm">
                            {scholar.contribution}
                          </span>
                          <span className="text-slate-600 italic text-sm">
                            {scholar.significance}
                          </span>
                          <ul className="list-disc pl-5 text-sm text-slate-600">
                            {scholar.keyTexts.map((text, textIdx) => (
                              <li key={textIdx}>{text}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Main Ideas:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {perspective.mainIdeas.map((idea, idx) => (
                        <li key={idx}>{idea}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Impact:</h4>
                    <p className="text-slate-600">{perspective.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Contemporary Issues</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {tawhidContent.contemporary.map((cont, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{cont.aspect}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{cont.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Challenges:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {cont.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Responses:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {cont.responses.map((response, idx) => (
                        <li key={idx}>{response}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Applications:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {cont.applications.map((app, idx) => (
                        <li key={idx}>{app}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {cont.examples.map((example, idx) => (
                        <li key={idx}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Practical Implications</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Belief</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {tawhidContent.practicalImplications.belief.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Worship</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {tawhidContent.practicalImplications.worship.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Daily Life</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {tawhidContent.practicalImplications.daily.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Social Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {tawhidContent.practicalImplications.social.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Recommended Resources</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tawhidContent.resources.map((resource, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
                <p className="text-sm text-slate-600">By {resource.author}</p>
                <p className="text-sm text-slate-600">Language: {resource.language}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{resource.description}</p>
                <div className="space-x-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={resource.url}>Learn More</Link>
                  </Button>
                  {resource.affiliate && (
                    <Button asChild variant="default" size="sm">
                      <Link href={resource.affiliateUrl!} target="_blank" rel="noopener noreferrer">
                        View on Amazon
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Related Topics</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/religion/islam/beliefs/allah" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Divine Names & Attributes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the beautiful names and attributes of Allah.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/islam/practices/worship" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Islamic Worship</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about Islamic worship practices and their connection to Tawhid.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/islam/beliefs/prophets" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Prophets & Messengers</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover how prophets conveyed the message of Tawhid.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 