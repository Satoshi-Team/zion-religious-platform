import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ScriptureReference {
  reference: string
  text: string
  explanation: string
}

interface HistoricalDevelopment {
  period: string
  description: string
  keyFigures: Array<{
    name: string
    contribution: string
    dates?: string
  }>
  significance: string
}

interface TheologicalAspect {
  name: string
  arabicName: string
  description: string
  keyPoints: string[]
  implications: string[]
  scriptureRefs: string[]
  challenges?: string[]
}

interface DevotionalPractice {
  name: string
  arabicName: string
  description: string
  methods: string[]
  benefits: string[]
  challenges: string[]
  scriptureRefs: string[]
}

interface Resource {
  title: string
  author?: string
  url: string
  type: string
  description: string
  affiliate?: boolean
  affiliateUrl?: string
}

interface TawhidContent {
  introduction: string
  definition: string
  scriptureReferences: ScriptureReference[]
  historicalDevelopment: HistoricalDevelopment[]
  theologicalAspects: TheologicalAspect[]
  devotionalPractices: DevotionalPractice[]
  commonMisconceptions: Array<{
    misconception: string
    correction: string
  }>
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Tawhid (Divine Unity) | Islamic Theology",
  description: "Explore the fundamental Islamic concept of Tawhid - understanding the absolute oneness and unity of Allah in Islamic theology and practice.",
  openGraph: {
    title: "Tawhid (Divine Unity) | Islamic Theology",
    description: "Comprehensive guide to understanding the Islamic concept of Tawhid",
    type: "website",
  },
}

const tawhidContent: TawhidContent = {
  introduction: `Tawhid (توحيد) is the most fundamental principle of Islamic theology, asserting the absolute oneness and unity of Allah. This concept forms the cornerstone of Islamic faith and shapes every aspect of Muslim belief and practice. It represents not just a theological doctrine, but a complete worldview that influences how Muslims understand their relationship with God, the universe, and their purpose in life.`,
  
  definition: `Tawhid literally means "making one" or "unification" and refers to maintaining the unity of Allah in all aspects of belief and worship. It encompasses the understanding that Allah is One in His Essence (Dhat), His Attributes (Sifat), and His Actions (Af'al). This principle rejects any form of polytheism (shirk), anthropomorphism (tashbih), or denial of divine attributes (ta'til).`,
  
  scriptureReferences: [
    {
      reference: "Quran 112:1-4",
      text: "Say: He is Allah, the One and Only; Allah, the Eternal, Absolute; He begets not, nor is He begotten; And there is none like unto Him.",
      explanation: "Known as Surat al-Ikhlas, these verses provide the most concise and profound description of Allah's unity and uniqueness."
    },
    {
      reference: "Quran 2:255 (Ayat al-Kursi)",
      text: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence...",
      explanation: "The Throne Verse emphasizes Allah's absolute sovereignty and uniqueness in sustaining all existence."
    },
    {
      reference: "Hadith Qudsi",
      text: "O My servants, if the first of you and the last of you, and the humans of you and the jinn of you, were all as pious as the most pious heart of any individual amongst you, then this would not increase My Kingdom an iota.",
      explanation: "Illustrates Allah's complete independence and perfection, key aspects of Tawhid."
    }
  ],
  
  historicalDevelopment: [
    {
      period: "Pre-Islamic Arabia (Before 610 CE)",
      description: "Context of polytheistic practices and the need for pure monotheism.",
      keyFigures: [
        {
          name: "Hanifs",
          contribution: "Early monotheists who rejected idol worship",
          dates: "Pre-610 CE"
        }
      ],
      significance: "Set the stage for the revolutionary message of Tawhid"
    },
    {
      period: "Prophetic Period (610-632 CE)",
      description: "Establishment of pure monotheism through divine revelation.",
      keyFigures: [
        {
          name: "Prophet Muhammad ﷺ",
          contribution: "Received and transmitted divine revelation of Tawhid",
          dates: "570-632 CE"
        },
        {
          name: "Early Companions",
          contribution: "Preserved and transmitted Tawhid teachings",
          dates: "610-632 CE"
        }
      ],
      significance: "Established foundational understanding of divine unity"
    },
    {
      period: "Classical Period (8th-13th centuries)",
      description: "Systematic development of Tawhid doctrine through theological schools.",
      keyFigures: [
        {
          name: "Imam Abu Hanifa",
          contribution: "Early systematic theology of Tawhid",
          dates: "699-767 CE"
        },
        {
          name: "Imam Al-Ash'ari",
          contribution: "Development of orthodox theological framework",
          dates: "874-936 CE"
        },
        {
          name: "Imam Al-Ghazali",
          contribution: "Integration of theology with spirituality",
          dates: "1058-1111 CE"
        }
      ],
      significance: "Developed sophisticated theological frameworks for understanding Tawhid"
    }
  ],
  
  theologicalAspects: [
    {
      name: "Unity of Lordship",
      arabicName: "Tawhid ar-Rububiyyah",
      description: "Affirmation that Allah alone is the Creator, Sustainer, and Master of all existence.",
      keyPoints: [
        "Allah as sole creator",
        "Divine sovereignty",
        "Universal sustenance",
        "Absolute control"
      ],
      implications: [
        "Complete dependence on Allah",
        "Gratitude for all blessings",
        "Trust in divine wisdom",
        "Recognition of divine order"
      ],
      scriptureRefs: ["Quran 39:62", "Quran 51:58"],
      challenges: [
        "Understanding divine decree",
        "Reconciling human free will",
        "Natural causation"
      ]
    },
    {
      name: "Unity of Worship",
      arabicName: "Tawhid al-Uluhiyyah",
      description: "Dedicating all worship and devotional acts solely to Allah.",
      keyPoints: [
        "Exclusive worship",
        "Sincerity of intention",
        "Rejection of intermediaries",
        "Comprehensive devotion"
      ],
      implications: [
        "Pure monotheistic practice",
        "Direct relationship with Allah",
        "Spiritual authenticity",
        "Liberation from creation"
      ],
      scriptureRefs: ["Quran 1:5", "Quran 18:110"],
      challenges: [
        "Identifying subtle forms of shirk",
        "Maintaining pure intention",
        "Cultural practices"
      ]
    },
    {
      name: "Unity of Names and Attributes",
      arabicName: "Tawhid al-Asma was-Sifat",
      description: "Affirming Allah's names and attributes as He has described Himself.",
      keyPoints: [
        "Divine perfection",
        "Unique attributes",
        "Transcendence",
        "Divine names"
      ],
      implications: [
        "Knowledge of Allah",
        "Proper supplication",
        "Character development",
        "Spiritual awareness"
      ],
      scriptureRefs: ["Quran 42:11", "Quran 59:22-24"],
      challenges: [
        "Avoiding anthropomorphism",
        "Understanding divine attributes",
        "Maintaining proper balance"
      ]
    }
  ],
  
  devotionalPractices: [
    {
      name: "Declaration of Faith",
      arabicName: "Shahadah",
      description: "Conscious affirmation of Allah's unity through testimony of faith.",
      methods: [
        "Regular renewal of testimony",
        "Contemplation of meaning",
        "Living its implications",
        "Teaching others"
      ],
      benefits: [
        "Strengthened faith",
        "Spiritual clarity",
        "Identity formation",
        "Community connection"
      ],
      challenges: [
        "Maintaining awareness",
        "Deep understanding",
        "Consistent application"
      ],
      scriptureRefs: ["Quran 3:18", "Sahih Bukhari"]
    },
    {
      name: "Divine Remembrance",
      arabicName: "Dhikr",
      description: "Regular remembrance and awareness of Allah's unity.",
      methods: [
        "Prescribed adhkar",
        "Contemplation of creation",
        "Regular reflection",
        "Mindful presence"
      ],
      benefits: [
        "Spiritual presence",
        "Heart purification",
        "Protection from heedlessness",
        "Inner peace"
      ],
      challenges: [
        "Maintaining concentration",
        "Consistency",
        "Depth of presence"
      ],
      scriptureRefs: ["Quran 13:28", "Quran 33:41"]
    },
    {
      name: "Knowledge Seeking",
      arabicName: "Talab al-Ilm",
      description: "Deepening understanding of Tawhid through knowledge.",
      methods: [
        "Study of Quran",
        "Learning from scholars",
        "Regular classes",
        "Personal research"
      ],
      benefits: [
        "Deeper understanding",
        "Protected belief",
        "Ability to teach others",
        "Strengthened conviction"
      ],
      challenges: [
        "Finding authentic sources",
        "Regular commitment",
        "Practical application"
      ],
      scriptureRefs: ["Quran 20:114", "Sunan Ibn Majah"]
    }
  ],
  
  commonMisconceptions: [
    {
      misconception: "Tawhid is simply believing in one God",
      correction: "Tawhid is a comprehensive concept that includes unity in lordship, worship, and divine attributes, affecting all aspects of belief and practice."
    },
    {
      misconception: "Tawhid rejects the existence of causes",
      correction: "Tawhid acknowledges secondary causes while affirming Allah as the ultimate cause, encouraging engagement with natural laws while maintaining divine dependence."
    },
    {
      misconception: "Tawhid is purely theoretical",
      correction: "Tawhid has practical implications for worship, ethics, social relations, and all aspects of life, shaping Muslim worldview and behavior."
    },
    {
      misconception: "Strict Tawhid leads to fatalism",
      correction: "Proper understanding of Tawhid balances divine decree with human responsibility, encouraging active engagement while maintaining trust in Allah."
    }
  ],
  
  resources: [
    {
      title: "Kitab at-Tawhid",
      author: "Muhammad ibn Abdul-Wahhab",
      url: "/resources/kitab-tawhid",
      type: "Book",
      description: "Classical text on the fundamentals of Islamic monotheism.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/9960850188"
    },
    {
      title: "The Three Fundamental Principles",
      author: "Muhammad ibn Abdul-Wahhab",
      url: "/resources/three-principles",
      type: "Book",
      description: "Essential explanation of Tawhid principles.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/9960850196"
    },
    {
      title: "Divine Unity: Understanding Tawhid",
      author: "Dr. Yasir Qadhi",
      url: "/resources/divine-unity",
      type: "Video Course",
      description: "Contemporary explanation of Tawhid for modern audiences.",
      affiliate: false
    }
  ]
}

export default function TawhidPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Tawhid: The Islamic Concept of Divine Unity</h1>
        <p className="text-xl mb-4">{tawhidContent.introduction}</p>
        <p className="text-lg mb-8">{tawhidContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Scriptural Foundation</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tawhidContent.scriptureReferences.map((reference, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{reference.reference}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="italic mb-4">"{reference.text}"</p>
                <p className="text-slate-600">{reference.explanation}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Historical Development</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {tawhidContent.historicalDevelopment.map((period, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{period.period}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{period.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Figures:</h4>
                    {period.keyFigures.map((figure, idx) => (
                      <div key={idx} className="mb-2">
                        <p className="font-medium">{figure.name}</p>
                        {figure.dates && (
                          <p className="text-sm text-slate-600">{figure.dates}</p>
                        )}
                        <p className="text-sm">{figure.contribution}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold">Historical Significance:</span> {period.significance}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Theological Aspects</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {tawhidContent.theologicalAspects.map((aspect, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  {aspect.name} <span className="text-slate-600">({aspect.arabicName})</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{aspect.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Points:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {aspect.keyPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Implications:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {aspect.implications.map((implication, idx) => (
                        <li key={idx}>{implication}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scripture References:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {aspect.scriptureRefs.map((ref, idx) => (
                        <li key={idx}>{ref}</li>
                      ))}
                    </ul>
                  </div>
                  {aspect.challenges && (
                    <div>
                      <h4 className="font-semibold mb-2">Key Challenges:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {aspect.challenges.map((challenge, idx) => (
                          <li key={idx}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Devotional Practices</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {tawhidContent.devotionalPractices.map((practice, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  {practice.name} <span className="text-slate-600">({practice.arabicName})</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{practice.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Methods:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {practice.methods.map((method, idx) => (
                        <li key={idx}>{method}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {practice.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Challenges:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {practice.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scripture References:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {practice.scriptureRefs.map((ref, idx) => (
                        <li key={idx}>{ref}</li>
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
        <h2 className="text-3xl font-bold mb-4">Common Misconceptions</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {tawhidContent.commonMisconceptions.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-red-600">Misconception:</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 italic">{item.misconception}</p>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Correction:</h4>
                  <p>{item.correction}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Recommended Resources</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tawhidContent.resources.map((resource, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
                {resource.author && (
                  <p className="text-sm text-slate-600">By {resource.author}</p>
                )}
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
          <Link href="/teachings/islam/prophecy" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Prophecy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore how divine unity relates to prophetic guidance.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/islam/pillars" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Pillars of Islam</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn how Tawhid manifests in Islamic practices.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/islam/iman" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Articles of Faith</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand how Tawhid relates to Islamic beliefs.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 