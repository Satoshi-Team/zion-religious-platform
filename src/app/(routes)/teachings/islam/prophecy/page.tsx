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

interface PropheticAspect {
  name: string
  arabicName: string
  description: string
  keyPoints: string[]
  implications: string[]
  scriptureRefs: string[]
  challenges?: string[]
}

interface PropheticTeaching {
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

interface ProphecyContent {
  introduction: string
  definition: string
  scriptureReferences: ScriptureReference[]
  historicalDevelopment: HistoricalDevelopment[]
  propheticAspects: PropheticAspect[]
  propheticTeachings: PropheticTeaching[]
  commonMisconceptions: Array<{
    misconception: string
    correction: string
  }>
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Prophecy in Islam | Islamic Theology",
  description: "Explore the Islamic understanding of prophecy - examining the role, nature, and significance of prophets in conveying divine guidance.",
  openGraph: {
    title: "Prophecy in Islam | Islamic Theology",
    description: "Comprehensive guide to understanding prophecy in Islam",
    type: "website",
  },
}

const prophecyContent: ProphecyContent = {
  introduction: `Prophecy (نبوة, Nubuwwah) is a central concept in Islamic theology, representing the divine method of guidance through which Allah communicates His message to humanity. Through prophets and messengers, divine guidance has been transmitted throughout history, culminating in the final prophethood of Muhammad ﷺ. This system of prophecy ensures the preservation and transmission of divine truth across generations.`,
  
  definition: `In Islamic theology, prophecy refers to the divine institution through which Allah selects certain individuals to receive and convey His message to humanity. Prophets (Anbiya) and Messengers (Rusul) are chosen individuals who receive divine revelation and are tasked with guiding their communities to the truth. The concept encompasses both the personal qualities of prophets and the nature of their mission in establishing divine guidance on earth.`,
  
  scriptureReferences: [
    {
      reference: "Quran 33:40",
      text: "Muhammad is not the father of any of your men, but he is the Messenger of Allah and the Seal of the Prophets. And Allah has full knowledge of all things.",
      explanation: "Establishes the finality of prophethood with Muhammad ﷺ while affirming the continuity of divine guidance."
    },
    {
      reference: "Quran 4:165",
      text: "Messengers as bearers of glad tidings and warners, so that mankind should have no argument against Allah after the Messengers.",
      explanation: "Explains the purpose of sending prophets as completing the proof of divine guidance for humanity."
    },
    {
      reference: "Hadith in Sahih Bukhari",
      text: "The example of me in comparison to the previous prophets is like a man who built a house completely and excellently, except for a place of one brick...",
      explanation: "Illustrates the completion and perfection of the prophetic mission through Muhammad ﷺ."
    }
  ],
  
  historicalDevelopment: [
    {
      period: "Early Prophetic Period (Adam to Noah)",
      description: "Establishment of basic divine guidance and human civilization.",
      keyFigures: [
        {
          name: "Prophet Adam",
          contribution: "First prophet and establisher of human civilization",
          dates: "Beginning of human history"
        },
        {
          name: "Prophet Noah",
          contribution: "Renewal of divine guidance after widespread corruption",
          dates: "Early human history"
        }
      ],
      significance: "Established the pattern of divine guidance through prophecy"
    },
    {
      period: "Abrahamic Period",
      description: "Development of monotheistic tradition and establishment of key religious practices.",
      keyFigures: [
        {
          name: "Prophet Ibrahim",
          contribution: "Established pure monotheism and built the Kaaba",
          dates: "c. 2000-1800 BCE"
        },
        {
          name: "Prophets Ismail and Ishaq",
          contribution: "Continuation of Abrahamic tradition",
          dates: "Post-Abrahamic period"
        }
      ],
      significance: "Formed the foundation of monotheistic traditions"
    },
    {
      period: "Final Prophetic Period",
      description: "Culmination of prophetic guidance through Muhammad ﷺ.",
      keyFigures: [
        {
          name: "Prophet Muhammad ﷺ",
          contribution: "Final messenger and completer of divine guidance",
          dates: "570-632 CE"
        },
        {
          name: "Companions (Sahabah)",
          contribution: "Preservation and transmission of prophetic teachings",
          dates: "610-632 CE"
        }
      ],
      significance: "Completed and preserved the final divine message"
    }
  ],
  
  propheticAspects: [
    {
      name: "Qualities of Prophets",
      arabicName: "Sifat al-Anbiya",
      description: "Essential characteristics and qualities of prophets that qualify them for their divine mission.",
      keyPoints: [
        "Truthfulness (Sidq)",
        "Trustworthiness (Amanah)",
        "Intelligence (Fatanah)",
        "Protection from sin (Ismah)"
      ],
      implications: [
        "Reliability of divine message",
        "Perfect moral example",
        "Effective leadership",
        "Preserved guidance"
      ],
      scriptureRefs: ["Quran 19:41", "Quran 33:21"],
      challenges: [
        "Understanding prophetic infallibility",
        "Balancing human and prophetic aspects",
        "Following prophetic example"
      ]
    },
    {
      name: "Nature of Revelation",
      arabicName: "Wahy",
      description: "Divine communication methods and forms of revelation to prophets.",
      keyPoints: [
        "Direct divine speech",
        "Angelic transmission",
        "True dreams",
        "Divine inspiration"
      ],
      implications: [
        "Authenticity of scripture",
        "Preservation of message",
        "Guidance methodology",
        "Spiritual connection"
      ],
      scriptureRefs: ["Quran 42:51", "Quran 53:4-5"],
      challenges: [
        "Understanding revelation process",
        "Distinguishing true revelation",
        "Modern application"
      ]
    },
    {
      name: "Prophetic Mission",
      arabicName: "Risalah",
      description: "Purpose and objectives of prophetic guidance in human society.",
      keyPoints: [
        "Moral reformation",
        "Social justice",
        "Spiritual guidance",
        "Community building"
      ],
      implications: [
        "Ethical framework",
        "Social development",
        "Individual growth",
        "Collective progress"
      ],
      scriptureRefs: ["Quran 62:2", "Quran 3:164"],
      challenges: [
        "Contemporary application",
        "Cultural adaptation",
        "Universal relevance"
      ]
    }
  ],
  
  propheticTeachings: [
    {
      name: "Following Prophetic Example",
      arabicName: "Ittiba as-Sunnah",
      description: "Implementation of prophetic teachings in personal and communal life.",
      methods: [
        "Study of prophetic biography",
        "Practice of traditions",
        "Character development",
        "Community engagement"
      ],
      benefits: [
        "Spiritual growth",
        "Moral excellence",
        "Social harmony",
        "Divine pleasure"
      ],
      challenges: [
        "Modern application",
        "Cultural barriers",
        "Authentic understanding"
      ],
      scriptureRefs: ["Quran 33:21", "Sahih Bukhari"]
    },
    {
      name: "Preservation of Message",
      arabicName: "Hifz ar-Risalah",
      description: "Methods and importance of preserving prophetic teachings.",
      methods: [
        "Scriptural preservation",
        "Chain of transmission",
        "Scholarly verification",
        "Community practice"
      ],
      benefits: [
        "Authentic guidance",
        "Protected tradition",
        "Reliable reference",
        "Continuous guidance"
      ],
      challenges: [
        "Authentication methods",
        "Modern preservation",
        "Accurate transmission"
      ],
      scriptureRefs: ["Quran 15:9", "Sahih Muslim"]
    },
    {
      name: "Prophetic Wisdom",
      arabicName: "Hikmah Nabawiyyah",
      description: "Understanding and applying prophetic wisdom in life.",
      methods: [
        "Study of hadith",
        "Reflection on guidance",
        "Practical application",
        "Teaching others"
      ],
      benefits: [
        "Wise decision-making",
        "Balanced approach",
        "Effective solutions",
        "Personal development"
      ],
      challenges: [
        "Deep understanding",
        "Contemporary relevance",
        "Practical implementation"
      ],
      scriptureRefs: ["Quran 2:129", "Sunan Abu Dawud"]
    }
  ],
  
  commonMisconceptions: [
    {
      misconception: "Prophets were superhuman beings",
      correction: "Prophets were human beings chosen by Allah for their exemplary character and given divine guidance. Their humanity makes their example achievable and relatable."
    },
    {
      misconception: "Prophecy was limited to certain regions",
      correction: "Islamic teaching states that Allah sent prophets to all nations throughout history, though not all are mentioned in the Quran."
    },
    {
      misconception: "Prophetic guidance is outdated",
      correction: "Prophetic teachings address fundamental human needs and values that remain relevant across time, while providing principles that can be applied to new situations."
    },
    {
      misconception: "Following prophetic example requires literal imitation",
      correction: "Following prophetic example involves understanding the principles and wisdom behind their actions and applying them appropriately to current contexts."
    }
  ],
  
  resources: [
    {
      title: "Muhammad: His Life Based on the Earliest Sources",
      author: "Martin Lings",
      url: "/resources/prophet-biography",
      type: "Book",
      description: "Detailed biography of Prophet Muhammad ﷺ based on authentic sources.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1594771537"
    },
    {
      title: "The History of the Prophets in Islam",
      author: "Ibn Kathir",
      url: "/resources/prophets-history",
      type: "Book",
      description: "Comprehensive account of prophetic history in Islam.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1591440718"
    },
    {
      title: "Understanding Prophecy in Islam",
      author: "Dr. Omar Suleiman",
      url: "/resources/prophecy-course",
      type: "Video Course",
      description: "Modern explanation of Islamic prophecy and its significance.",
      affiliate: false
    }
  ]
}

export default function ProphecyPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Prophecy in Islam: Divine Guidance Through History</h1>
        <p className="text-xl mb-4">{prophecyContent.introduction}</p>
        <p className="text-lg mb-8">{prophecyContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Scriptural Foundation</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {prophecyContent.scriptureReferences.map((reference, index) => (
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
          {prophecyContent.historicalDevelopment.map((period, index) => (
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
        <h2 className="text-3xl font-bold mb-4">Aspects of Prophecy</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {prophecyContent.propheticAspects.map((aspect, index) => (
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
        <h2 className="text-3xl font-bold mb-4">Prophetic Teachings</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {prophecyContent.propheticTeachings.map((teaching, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  {teaching.name} <span className="text-slate-600">({teaching.arabicName})</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{teaching.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Methods:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {teaching.methods.map((method, idx) => (
                        <li key={idx}>{method}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {teaching.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Challenges:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {teaching.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scripture References:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {teaching.scriptureRefs.map((ref, idx) => (
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
          {prophecyContent.commonMisconceptions.map((item, index) => (
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
          {prophecyContent.resources.map((resource, index) => (
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
          <Link href="/teachings/islam/tawhid" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Tawhid</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore how prophecy relates to divine unity.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/islam/pillars" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Pillars of Islam</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn how prophetic guidance shapes Islamic practices.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/islam/quran" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Quran</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand the final prophetic revelation.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 