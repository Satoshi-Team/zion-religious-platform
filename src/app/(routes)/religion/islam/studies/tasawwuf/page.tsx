import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface TasawwufConcept {
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
  examples: string[]
}

interface SpiritualStation {
  name: string
  arabicName: string
  description: string
  characteristics: string[]
  principles: string[]
  quranicBasis: Array<{
    surah: string
    ayah: string
    text: string
  }>
}

interface SufiOrder {
  name: string
  arabicName: string
  description: string
  practices: Array<{
    name: string
    arabicName: string
    description: string
    methods: string[]
    evidence: Array<{
      type: string
      source: string
      text: string
    }>
  }>
  principles: string[]
  founders: Array<{
    name: string
    period: string
    contribution: string
  }>
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

interface Practice {
  context: string
  description: string
  methods: string[]
  benefits: string[]
  guidelines: string[]
  historicalExamples: Array<{
    period: string
    figure: string
    description: string
    significance: string
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

interface TasawwufContent {
  introduction: string
  definition: string
  importance: string[]
  concepts: TasawwufConcept[]
  stations: SpiritualStation[]
  orders: SufiOrder[]
  scholarlyPerspectives: ScholarlyPerspective[]
  practices: Practice[]
  contemporary: Contemporary[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Tasawwuf (Islamic Spirituality) | Islamic Studies",
  description: "Comprehensive exploration of Tasawwuf, its concepts, practices, and spiritual development in Islam.",
  openGraph: {
    title: "Tasawwuf (Islamic Spirituality) | Islamic Studies",
    description: "In-depth study of Islamic spirituality and mysticism",
    type: "website",
  },
}

const tasawwufContent: TasawwufContent = {
  introduction: `Tasawwuf, often referred to as Islamic mysticism or Sufism, represents the spiritual dimension of Islam that focuses on purification of the heart, development of character, and attainment of divine knowledge through direct experience.`,
  definition: `Tasawwuf is derived from either the word 'suf' (wool, referring to the simple woolen garments worn by early ascetics) or 'safa' (purity). It represents the science of spiritual purification and the path to divine proximity through inner development and ethical refinement.`,
  importance: [
    "Purification of the heart (Tazkiyah)",
    "Character development (Akhlaq)",
    "Spiritual enlightenment (Ma'rifah)",
    "Divine love and proximity",
    "Inner dimension of worship",
    "Ethical refinement",
    "Spiritual healing"
  ],
  concepts: [
    {
      name: "Divine Love",
      arabicName: "المحبة",
      description: "The essence of spiritual path, representing the highest form of relationship with the Divine",
      significance: [
        "Core of spiritual journey",
        "Motivation for worship",
        "Source of spiritual taste",
        "Transformative power",
        "Ultimate purpose"
      ],
      quranicReferences: [
        {
          surah: "Al-Maidah",
          ayah: "5:54",
          text: "He loves them and they love Him",
          explanation: "Establishes mutual love between Divine and creation"
        },
        {
          surah: "Al-Baqarah",
          ayah: "2:165",
          text: "Those who believe are stronger in love for Allah",
          explanation: "Describes intensity of believers' love"
        }
      ],
      examples: [
        "Rabi'a al-Adawiyya's poetry",
        "Imam Al-Ghazali's teachings",
        "Ibn Arabi's writings",
        "Rumi's Mathnawi",
        "Al-Hallaj's expressions"
      ]
    },
    {
      name: "Remembrance",
      arabicName: "الذكر",
      description: "Constant awareness and remembrance of the Divine through various forms",
      significance: [
        "Heart purification",
        "Spiritual presence",
        "Divine connection",
        "Mental focus",
        "Emotional balance"
      ],
      quranicReferences: [
        {
          surah: "Ar-Ra'd",
          ayah: "13:28",
          text: "Verily, in the remembrance of Allah do hearts find rest",
          explanation: "Highlights the tranquility found in divine remembrance"
        },
        {
          surah: "Al-Ahzab",
          ayah: "33:41",
          text: "O you who believe! Remember Allah with much remembrance",
          explanation: "Commands abundant divine remembrance"
        }
      ],
      examples: [
        "Silent dhikr",
        "Vocal remembrance",
        "Contemplative practice",
        "Collective gatherings",
        "Daily litanies"
      ]
    }
  ],
  stations: [
    {
      name: "Repentance",
      arabicName: "التوبة",
      description: "The initial station of turning back to Allah with sincere regret and determination",
      characteristics: [
        "Sincere remorse",
        "Immediate cessation",
        "Resolution not to return",
        "Making amends",
        "Seeking forgiveness"
      ],
      principles: [
        "Immediacy",
        "Sincerity",
        "Determination",
        "Hope",
        "Action"
      ],
      quranicBasis: [
        {
          surah: "At-Tahrim",
          ayah: "66:8",
          text: "O you who believe! Turn to Allah with sincere repentance"
        }
      ]
    },
    {
      name: "Patience",
      arabicName: "الصبر",
      description: "Steadfastness in face of trials and in obedience to divine commands",
      characteristics: [
        "Endurance",
        "Acceptance",
        "Contentment",
        "Perseverance",
        "Trust"
      ],
      principles: [
        "Constancy",
        "Resilience",
        "Acceptance",
        "Hope",
        "Wisdom"
      ],
      quranicBasis: [
        {
          surah: "Al-Baqarah",
          ayah: "2:153",
          text: "O you who believe! Seek help through patience and prayer"
        }
      ]
    }
  ],
  orders: [
    {
      name: "Qadiriyya",
      arabicName: "القادرية",
      description: "One of the oldest Sufi orders, known for its emphasis on divine love and purification of the self",
      practices: [
        {
          name: "Dhikr",
          arabicName: "الذكر",
          description: "Systematic remembrance of Allah through specific formulas",
          methods: [
            "Silent remembrance",
            "Vocal dhikr",
            "Collective gatherings",
            "Individual practice"
          ],
          evidence: [
            {
              type: "Quran",
              source: "33:41",
              text: "O you who believe! Remember Allah with much remembrance"
            }
          ]
        }
      ],
      principles: [
        "Divine love",
        "Service to humanity",
        "Spiritual purification",
        "Ethical conduct"
      ],
      founders: [
        {
          name: "Abdul-Qadir Gilani",
          period: "1077-1166 CE",
          contribution: "Established the Qadiri order and its principles"
        }
      ]
    },
    {
      name: "Naqshbandiyya",
      arabicName: "النقشبندية",
      description: "Known for its silent dhikr and emphasis on consciousness of the Divine",
      practices: [
        {
          name: "Silent Dhikr",
          arabicName: "الذكر الخفي",
          description: "Internal remembrance of Allah with presence of heart",
          methods: [
            "Heart-centered meditation",
            "Breath awareness",
            "Divine presence practice",
            "Spiritual connection"
          ],
          evidence: [
            {
              type: "Quran",
              source: "7:205",
              text: "Remember your Lord within yourself in humility and in fear"
            }
          ]
        }
      ],
      principles: [
        "Silent remembrance",
        "Conscious breathing",
        "Spiritual companionship",
        "Service to creation"
      ],
      founders: [
        {
          name: "Baha-ud-Din Naqshband",
          period: "1318-1389 CE",
          contribution: "Systematized the silent dhikr method"
        }
      ]
    }
  ],
  scholarlyPerspectives: [
    {
      period: "Classical Period (8th-12th Century)",
      scholars: [
        {
          name: "Al-Junayd al-Baghdadi",
          arabicName: "الجنيد البغدادي",
          years: "830-910 CE",
          contribution: "Established sober Sufism and systematic spiritual training",
          significance: "Master of the Path and teacher of generations",
          keyTexts: [
            {
              title: "The Life and Work of Junayd",
              arabicTitle: "حياة وأعمال الجنيد",
              description: "Collection of his teachings and letters",
              amazonUrl: "https://www.amazon.com/Classical-Islam-Sourcebook-Religious-Literature/dp/0415505089"
            }
          ]
        },
        {
          name: "Abu Hamid Al-Ghazali",
          arabicName: "أبو حامد الغزالي",
          years: "1058-1111 CE",
          contribution: "Harmonized Sufism with orthodox Islam",
          significance: "Revived Islamic spirituality and defended mystical practices",
          keyTexts: [
            {
              title: "Revival of Religious Sciences",
              arabicTitle: "إحياء علوم الدين",
              description: "Comprehensive work on Islamic spirituality",
              amazonUrl: "https://www.amazon.com/Al-Ghazalis-Path-Sufism-Deliverance-Error/dp/1887752307"
            },
            {
              title: "The Alchemy of Happiness",
              arabicTitle: "كيمياء السعادة",
              description: "Practical guide to spiritual development",
              amazonUrl: "https://www.amazon.com/Alchemy-Happiness-Al-Ghazzali/dp/1578989930"
            }
          ]
        }
      ],
      mainIdeas: [
        "Purification of soul",
        "Spiritual methodology",
        "Ethical development",
        "Divine knowledge",
        "Practical spirituality"
      ],
      impact: "Established foundational principles of Islamic spirituality"
    },
    {
      period: "Modern Period (19th-21st Century)",
      scholars: [
        {
          name: "Martin Lings",
          arabicName: "أبو بكر سراج الدين",
          years: "1909-2005",
          contribution: "Modern exposition of traditional Sufism",
          significance: "Bridge between traditional Sufism and modern audience",
          keyTexts: [
            {
              title: "What is Sufism?",
              arabicTitle: "ما هو التصوف؟",
              description: "Clear introduction to Sufi principles",
              amazonUrl: "https://www.amazon.com/What-Sufism-Martin-Lings/dp/0946621810"
            },
            {
              title: "A Sufi Saint of the Twentieth Century",
              arabicTitle: "ولي صوفي في القرن العشرين",
              description: "Biography of Sheikh Ahmad Al-Alawi",
              amazonUrl: "https://www.amazon.com/Sufi-Saint-Twentieth-Century-al-Alawi/dp/0946621500"
            }
          ]
        }
      ],
      mainIdeas: [
        "Traditional preservation",
        "Modern application",
        "Universal principles",
        "Authentic transmission",
        "Contemporary relevance"
      ],
      impact: "Preserved traditional Sufism while making it accessible to modern audiences"
    }
  ],
  practices: [
    {
      context: "Daily Spiritual Practice",
      description: "Regular spiritual exercises for heart purification and divine proximity",
      methods: [
        "Regular dhikr",
        "Contemplation",
        "Self-examination",
        "Spiritual retreats",
        "Service to others"
      ],
      benefits: [
        "Heart purification",
        "Spiritual growth",
        "Emotional balance",
        "Mental clarity",
        "Character refinement"
      ],
      guidelines: [
        "Proper guidance",
        "Regular practice",
        "Sincerity",
        "Balance",
        "Gradual progress"
      ],
      historicalExamples: [
        {
          period: "Early Islamic Period",
          figure: "Hassan al-Basri",
          description: "Exemplar of asceticism and spiritual practice",
          significance: "Model of combined knowledge and practice"
        }
      ]
    }
  ],
  contemporary: [
    {
      aspect: "Modern Spirituality",
      description: "Application of traditional spiritual principles in contemporary life",
      challenges: [
        "Materialism",
        "Time constraints",
        "Digital distractions",
        "Loss of community"
      ],
      solutions: [
        "Adapted practices",
        "Online communities",
        "Modern guidance",
        "Practical application"
      ],
      examples: [
        "Digital dhikr apps",
        "Online spiritual gatherings",
        "Modern retreat formats",
        "Urban spirituality"
      ],
      scholarlyViews: [
        {
          scholar: "Hamza Yusuf",
          perspective: "Traditional Spirituality in Modern Context",
          reasoning: "Necessity of spiritual practice in modern life",
          implications: [
            "Balanced approach",
            "Practical implementation",
            "Community development",
            "Personal growth"
          ],
          references: [
            {
              title: "Purification of the Heart",
              url: "https://www.amazon.com/Purification-Heart-Symptoms-Spiritual-Diseases/dp/0985565918"
            }
          ]
        }
      ]
    }
  ],
  resources: [
    {
      title: "The Garden of Truth: The Vision and Promise of Sufism",
      author: "Seyyed Hossein Nasr",
      url: "https://www.amazon.com/Garden-Truth-Vision-Promise-Sufism/dp/0061625994",
      type: "Book",
      description: "Comprehensive introduction to Sufi principles and practices",
      language: "English",
      level: "Intermediate",
      year: "2008",
      isbn: "978-0061625992",
      amazonUrl: "https://www.amazon.com/Garden-Truth-Vision-Promise-Sufism/dp/0061625994"
    },
    {
      title: "Essential Sufism",
      author: "James Fadiman & Robert Frager",
      url: "https://www.amazon.com/Essential-Sufism-James-Fadiman/dp/0062514741",
      type: "Book",
      description: "Collection of Sufi wisdom and teachings",
      language: "English",
      level: "Beginner",
      year: "1999",
      isbn: "978-0062514745",
      amazonUrl: "https://www.amazon.com/Essential-Sufism-James-Fadiman/dp/0062514741"
    },
    {
      title: "The Autobiography of a Moroccan Sufi: Ahmad Ibn 'Ajiba",
      author: "Jean-Louis Michon",
      url: "https://www.amazon.com/Autobiography-Moroccan-Sufi-Ahmad-Ajiba/dp/1887752978",
      type: "Biography",
      description: "Personal account of spiritual journey",
      language: "English",
      level: "Advanced",
      year: "1999",
      isbn: "978-1887752978",
      amazonUrl: "https://www.amazon.com/Autobiography-Moroccan-Sufi-Ahmad-Ajiba/dp/1887752978"
    }
  ]
}

export default function TasawwufPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Islamic Spirituality (Tasawwuf)</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction to Tasawwuf</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{tasawwufContent.introduction}</p>
          <p className="mb-4">{tasawwufContent.definition}</p>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Importance of Tasawwuf:</h3>
            <ul className="list-disc pl-6">
              {tasawwufContent.importance.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Core Concepts */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Core Concepts</CardTitle>
        </CardHeader>
        <CardContent>
          {tasawwufContent.concepts.map((concept, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {concept.name} ({concept.arabicName})
              </h3>
              <p className="mb-3">{concept.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <ul className="list-disc pl-6">
                    {concept.significance.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Quranic References:</h4>
                  <ul className="list-disc pl-6">
                    {concept.quranicReferences.map((ref, idx) => (
                      <li key={idx}>
                        <strong>{ref.surah} ({ref.ayah})</strong>: {ref.text}
                        <p className="text-sm text-gray-600">{ref.explanation}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Sufi Orders */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Major Sufi Orders (Turuq)</CardTitle>
        </CardHeader>
        <CardContent>
          {tasawwufContent.orders.map((order, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {order.name} ({order.arabicName})
              </h3>
              <p className="mb-3">{order.description}</p>
              
              {/* Practices */}
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Practices:</h4>
                {order.practices.map((practice, idx) => (
                  <div key={idx} className="mb-4 pl-4 border-l-2 border-primary">
                    <h5 className="font-semibold">
                      {practice.name} ({practice.arabicName})
                    </h5>
                    <p className="mb-2">{practice.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h6 className="font-semibold mb-1">Methods:</h6>
                        <ul className="list-disc pl-6">
                          {practice.methods.map((method, methodIdx) => (
                            <li key={methodIdx}>{method}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-semibold mb-1">Evidence:</h6>
                        <ul className="list-disc pl-6">
                          {practice.evidence.map((evidence, evidenceIdx) => (
                            <li key={evidenceIdx}>
                              <strong>{evidence.source}:</strong> {evidence.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Principles */}
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Core Principles:</h4>
                <ul className="list-disc pl-6">
                  {order.principles.map((principle, idx) => (
                    <li key={idx}>{principle}</li>
                  ))}
                </ul>
              </div>

              {/* Founders */}
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Founders:</h4>
                {order.founders.map((founder, idx) => (
                  <div key={idx} className="mb-2">
                    <p className="font-medium">{founder.name}</p>
                    <p className="text-sm text-gray-600">
                      {founder.period} - {founder.contribution}
                    </p>
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
          {tasawwufContent.scholarlyPerspectives.map((perspective, index) => (
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

      {/* Resources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Learning Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tasawwufContent.resources.map((resource, index) => (
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