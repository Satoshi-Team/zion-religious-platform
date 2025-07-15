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

interface Pillar {
  name: string
  arabicName: string
  description: string
  requirements: string[]
  benefits: string[]
  scriptureRefs: string[]
  practices: Array<{
    name: string
    description: string
    method: string[]
    conditions?: string[]
  }>
  challenges?: string[]
}

interface PracticalGuidance {
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

interface PillarsContent {
  introduction: string
  definition: string
  scriptureReferences: ScriptureReference[]
  historicalDevelopment: HistoricalDevelopment[]
  pillars: Pillar[]
  practicalGuidance: PracticalGuidance[]
  commonMisconceptions: Array<{
    misconception: string
    correction: string
  }>
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "The Five Pillars of Islam | Islamic Practice",
  description: "Explore the fundamental practices of Islam through its Five Pillars - Shahada, Salah, Zakat, Sawm, and Hajj - understanding their significance, requirements, and spiritual benefits.",
  openGraph: {
    title: "The Five Pillars of Islam | Islamic Practice",
    description: "Comprehensive guide to understanding and implementing the Five Pillars of Islam",
    type: "website",
  },
}

const pillarsContent: PillarsContent = {
  introduction: `The Five Pillars of Islam (أركان الإسلام, Arkan al-Islam) represent the core practices and obligations of Islamic faith. These fundamental acts of worship form the framework of Muslim life, establishing the essential relationship between the believer and Allah while fostering both individual spiritual growth and community cohesion. Each pillar serves as a vital component in the comprehensive system of Islamic practice, combining physical actions with spiritual meanings.`,
  
  definition: `The Five Pillars constitute the foundational practices that every Muslim is required to fulfill, representing the practical manifestation of faith in daily life. They consist of the Declaration of Faith (Shahada), Prayer (Salah), Charity (Zakat), Fasting (Sawm), and Pilgrimage (Hajj). These practices are not mere rituals but comprehensive systems that develop the individual's relationship with Allah, self-discipline, social responsibility, and community solidarity.`,
  
  scriptureReferences: [
    {
      reference: "Hadith in Sahih Bukhari",
      text: "Islam is built upon five [pillars]: testifying that there is no god but Allah and that Muhammad is the Messenger of Allah, establishing the prayer, giving Zakat, making the pilgrimage to the House, and fasting in Ramadan.",
      explanation: "This foundational hadith establishes the five core practices of Islam."
    },
    {
      reference: "Quran 2:43",
      text: "And establish prayer and give zakat and bow with those who bow [in worship and obedience].",
      explanation: "Emphasizes the importance of prayer and charity as fundamental acts of worship."
    },
    {
      reference: "Quran 2:183",
      text: "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous.",
      explanation: "Establishes fasting as a divine commandment for spiritual development."
    }
  ],
  
  historicalDevelopment: [
    {
      period: "Prophetic Period (610-632 CE)",
      description: "Gradual establishment and implementation of the Five Pillars.",
      keyFigures: [
        {
          name: "Prophet Muhammad ﷺ",
          contribution: "Established and demonstrated the proper practice of the pillars",
          dates: "570-632 CE"
        },
        {
          name: "Early Companions",
          contribution: "First practitioners and transmitters of the detailed practices",
          dates: "610-632 CE"
        }
      ],
      significance: "Set the foundation for Islamic worship practices"
    },
    {
      period: "Rightly Guided Caliphs (632-661 CE)",
      description: "Systematization and institutional establishment of the pillars.",
      keyFigures: [
        {
          name: "Abu Bakr as-Siddiq",
          contribution: "Established systematic collection of Zakat",
          dates: "632-634 CE"
        },
        {
          name: "Umar ibn al-Khattab",
          contribution: "Organized Hajj administration and prayer times",
          dates: "634-644 CE"
        }
      ],
      significance: "Institutionalized the practices across the expanding Islamic territory"
    },
    {
      period: "Classical Period (8th-13th centuries)",
      description: "Development of detailed jurisprudential rulings for the pillars.",
      keyFigures: [
        {
          name: "Imam Abu Hanifa",
          contribution: "Detailed rulings on worship practices",
          dates: "699-767 CE"
        },
        {
          name: "Imam Malik",
          contribution: "Preserved Medinan practice of the pillars",
          dates: "711-795 CE"
        },
        {
          name: "Imam Al-Ghazali",
          contribution: "Spiritual dimensions of the pillars",
          dates: "1058-1111 CE"
        }
      ],
      significance: "Established comprehensive guidelines for practicing the pillars"
    }
  ],
  
  pillars: [
    {
      name: "Declaration of Faith",
      arabicName: "Ash-Shahadah",
      description: "The testimony that there is no deity worthy of worship except Allah and that Muhammad is His messenger.",
      requirements: [
        "Understanding its meaning",
        "Sincere belief",
        "Verbal proclamation",
        "Acting upon its implications"
      ],
      benefits: [
        "Entry into Islam",
        "Foundation of belief",
        "Clarity of purpose",
        "Identity affirmation"
      ],
      scriptureRefs: ["Quran 3:18", "Sahih Bukhari 8"],
      practices: [
        {
          name: "Pronunciation",
          description: "Correct articulation of the testimony",
          method: [
            "Clear pronunciation",
            "Understanding each word",
            "Proper sequence"
          ]
        },
        {
          name: "Implementation",
          description: "Living according to the testimony",
          method: [
            "Regular renewal",
            "Consistent practice",
            "Teaching others"
          ],
          conditions: [
            "Sincerity",
            "Certainty",
            "Acceptance"
          ]
        }
      ],
      challenges: [
        "Maintaining awareness",
        "Full implementation",
        "Contemporary challenges"
      ]
    },
    {
      name: "Prayer",
      arabicName: "As-Salah",
      description: "The five daily prescribed prayers that establish regular communion with Allah.",
      requirements: [
        "Ritual purity",
        "Proper timing",
        "Facing Qibla",
        "Covering awrah",
        "Proper movements"
      ],
      benefits: [
        "Regular divine connection",
        "Spiritual purification",
        "Time management",
        "Physical discipline"
      ],
      scriptureRefs: ["Quran 2:43", "Quran 29:45"],
      practices: [
        {
          name: "Preparation",
          description: "Steps before prayer",
          method: [
            "Ablution",
            "Clean clothing",
            "Clean place",
            "Proper timing"
          ],
          conditions: [
            "Physical purity",
            "Mental focus",
            "Proper intention"
          ]
        },
        {
          name: "Performance",
          description: "Actual prayer execution",
          method: [
            "Standing",
            "Bowing",
            "Prostration",
            "Sitting",
            "Recitation"
          ]
        }
      ],
      challenges: [
        "Maintaining concentration",
        "Time management",
        "Consistency"
      ]
    },
    {
      name: "Obligatory Charity",
      arabicName: "Az-Zakat",
      description: "Annual giving of a portion of wealth to specified categories of recipients.",
      requirements: [
        "Minimum wealth threshold",
        "One lunar year possession",
        "Proper calculation",
        "Eligible recipients"
      ],
      benefits: [
        "Wealth purification",
        "Social welfare",
        "Economic circulation",
        "Spiritual growth"
      ],
      scriptureRefs: ["Quran 2:110", "Quran 9:103"],
      practices: [
        {
          name: "Calculation",
          description: "Determining Zakat amount",
          method: [
            "Asset evaluation",
            "Rate application",
            "Recipient identification"
          ]
        },
        {
          name: "Distribution",
          description: "Proper giving of Zakat",
          method: [
            "Recipient verification",
            "Timely payment",
            "Documentation"
          ],
          conditions: [
            "Proper intention",
            "Eligible wealth",
            "Correct timing"
          ]
        }
      ],
      challenges: [
        "Complex modern assets",
        "Finding eligible recipients",
        "Proper calculation"
      ]
    },
    {
      name: "Fasting",
      arabicName: "As-Sawm",
      description: "Abstaining from food, drink, and other specified activities from dawn to sunset during Ramadan.",
      requirements: [
        "Intention",
        "Dawn to sunset abstention",
        "Ramadan timing",
        "Physical ability"
      ],
      benefits: [
        "Self-discipline",
        "Spiritual awareness",
        "Health benefits",
        "Social solidarity"
      ],
      scriptureRefs: ["Quran 2:183-185", "Sahih Bukhari 1904"],
      practices: [
        {
          name: "Pre-dawn Meal",
          description: "Suhoor preparation and timing",
          method: [
            "Proper timing",
            "Nutritious selection",
            "Hydration"
          ]
        },
        {
          name: "Daily Fasting",
          description: "Maintaining the fast",
          method: [
            "Abstention management",
            "Worship integration",
            "Activity planning"
          ],
          conditions: [
            "Physical ability",
            "Mental capacity",
            "Travel status"
          ]
        }
      ],
      challenges: [
        "Long summer days",
        "Work/study balance",
        "Physical endurance"
      ]
    },
    {
      name: "Pilgrimage",
      arabicName: "Al-Hajj",
      description: "Annual pilgrimage to Makkah required once in a lifetime for those who are able.",
      requirements: [
        "Physical ability",
        "Financial capacity",
        "Safe journey",
        "Family provision"
      ],
      benefits: [
        "Unity experience",
        "Spiritual climax",
        "Historical connection",
        "Life transformation"
      ],
      scriptureRefs: ["Quran 3:97", "Quran 22:27"],
      practices: [
        {
          name: "Preparation",
          description: "Pre-Hajj requirements",
          method: [
            "Financial planning",
            "Physical preparation",
            "Learning rituals",
            "Travel arrangements"
          ]
        },
        {
          name: "Performance",
          description: "Hajj rituals execution",
          method: [
            "Ihram",
            "Tawaf",
            "Sa'i",
            "Arafah",
            "Stoning"
          ],
          conditions: [
            "Proper timing",
            "Correct sequence",
            "Physical presence"
          ]
        }
      ],
      challenges: [
        "Physical demands",
        "Financial preparation",
        "Crowd management"
      ]
    }
  ],
  
  practicalGuidance: [
    {
      name: "Integration of Pillars",
      arabicName: "Takamul al-Arkan",
      description: "Harmonious implementation of all pillars in daily life.",
      methods: [
        "Time management",
        "Priority setting",
        "Family coordination",
        "Work-worship balance"
      ],
      benefits: [
        "Comprehensive worship",
        "Balanced lifestyle",
        "Spiritual consistency",
        "Family harmony"
      ],
      challenges: [
        "Modern lifestyle demands",
        "Time constraints",
        "Energy management"
      ],
      scriptureRefs: ["Quran 2:208", "Sahih Muslim"]
    },
    {
      name: "Community Support",
      arabicName: "Ta'awun al-Jama'ah",
      description: "Collective implementation and support systems.",
      methods: [
        "Group prayer organization",
        "Zakat collection systems",
        "Ramadan activities",
        "Hajj groups"
      ],
      benefits: [
        "Mutual encouragement",
        "Resource sharing",
        "Knowledge exchange",
        "Unity strengthening"
      ],
      challenges: [
        "Coordination difficulties",
        "Resource limitations",
        "Diverse needs"
      ],
      scriptureRefs: ["Quran 5:2", "Sahih Bukhari"]
    },
    {
      name: "Modern Adaptations",
      arabicName: "Tatbiq Mu'asir",
      description: "Contemporary applications while maintaining authenticity.",
      methods: [
        "Digital tools integration",
        "Remote community connection",
        "Modern payment systems",
        "Travel adaptations"
      ],
      benefits: [
        "Increased accessibility",
        "Wider reach",
        "Better organization",
        "Enhanced understanding"
      ],
      challenges: [
        "Technology limitations",
        "Authentication issues",
        "Traditional balance"
      ],
      scriptureRefs: ["Quran 22:78", "Fiqh principles"]
    }
  ],
  
  commonMisconceptions: [
    {
      misconception: "The pillars are mere rituals without deeper meaning",
      correction: "Each pillar combines physical actions with profound spiritual, social, and personal development aspects, forming a comprehensive system of human development."
    },
    {
      misconception: "Pillars must be perfectly performed from the start",
      correction: "Islamic teaching emphasizes gradual improvement and sincere effort, recognizing that perfection develops through consistent practice and learning."
    },
    {
      misconception: "The pillars are purely individual practices",
      correction: "While personal in nature, the pillars have significant communal dimensions, fostering social cohesion, economic justice, and collective spiritual growth."
    },
    {
      misconception: "Modern life makes practicing the pillars too difficult",
      correction: "Islamic law provides flexibility and accommodations for various circumstances while maintaining core principles, making practice possible in any era."
    }
  ],
  
  resources: [
    {
      title: "The Spirit of Worship in Islam",
      author: "Abu Ameenah Bilal Philips",
      url: "/resources/spirit-worship",
      type: "Book",
      description: "Comprehensive guide to understanding and implementing the Five Pillars.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/9960850196"
    },
    {
      title: "A Guide to the Five Pillars of Islam",
      author: "Dr. Yasir Qadhi",
      url: "/resources/pillars-guide",
      type: "Video Course",
      description: "Detailed practical guidance for implementing the pillars in modern life.",
      affiliate: false
    },
    {
      title: "Fiqh of Worship",
      author: "Imam Al-Ghazali",
      url: "/resources/fiqh-worship",
      type: "Book",
      description: "Classical text on the spiritual dimensions of Islamic practices.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1234567890"
    }
  ]
}

export default function PillarsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">The Five Pillars of Islam: Foundation of Faith and Practice</h1>
        <p className="text-xl mb-4">{pillarsContent.introduction}</p>
        <p className="text-lg mb-8">{pillarsContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Scriptural Foundation</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillarsContent.scriptureReferences.map((reference, index) => (
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
          {pillarsContent.historicalDevelopment.map((period, index) => (
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
        <h2 className="text-3xl font-bold mb-4">The Five Pillars</h2>
        <div className="grid gap-6">
          {pillarsContent.pillars.map((pillar, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  {pillar.name} <span className="text-slate-600">({pillar.arabicName})</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{pillar.description}</p>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {pillar.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {pillar.benefits.map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Scripture References:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {pillar.scriptureRefs.map((ref, idx) => (
                          <li key={idx}>{ref}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Practices:</h4>
                      {pillar.practices.map((practice, idx) => (
                        <div key={idx} className="mb-4">
                          <h5 className="font-medium mb-2">{practice.name}</h5>
                          <p className="mb-2">{practice.description}</p>
                          <div className="pl-4">
                            <h6 className="font-medium mb-1">Method:</h6>
                            <ul className="list-disc pl-5 space-y-1">
                              {practice.method.map((step, stepIdx) => (
                                <li key={stepIdx}>{step}</li>
                              ))}
                            </ul>
                            {practice.conditions && (
                              <>
                                <h6 className="font-medium mb-1 mt-2">Conditions:</h6>
                                <ul className="list-disc pl-5 space-y-1">
                                  {practice.conditions.map((condition, condIdx) => (
                                    <li key={condIdx}>{condition}</li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    {pillar.challenges && (
                      <div>
                        <h4 className="font-semibold mb-2">Challenges:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {pillar.challenges.map((challenge, idx) => (
                            <li key={idx}>{challenge}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Practical Guidance</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {pillarsContent.practicalGuidance.map((guidance, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  {guidance.name} <span className="text-slate-600">({guidance.arabicName})</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{guidance.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Methods:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {guidance.methods.map((method, idx) => (
                        <li key={idx}>{method}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {guidance.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Challenges:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {guidance.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scripture References:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {guidance.scriptureRefs.map((ref, idx) => (
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
          {pillarsContent.commonMisconceptions.map((item, index) => (
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
          {pillarsContent.resources.map((resource, index) => (
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
                <p>Explore how the pillars express divine unity.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/islam/prophecy" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Prophecy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn how prophetic guidance established these practices.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/islam/spirituality" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Spirituality</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand the spiritual dimensions of the pillars.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 