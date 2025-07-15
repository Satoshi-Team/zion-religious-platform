import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SalvationFramework {
  name: string
  description: string
  keyConcepts: string[]
  scriptureRefs: Array<{
    reference: string
    text: string
    explanation: string
  }>
  practices: Array<{
    name: string
    description: string
    significance: string
  }>
  historicalFigures: Array<{
    name: string
    contribution: string
    dates?: string
  }>
}

interface SalvationConcept {
  concept: string
  description: string
  frameworks: Array<{
    framework: string
    understanding: string
    significance: string
  }>
  commonalities: string[]
  differences: string[]
}

interface SalvationContent {
  introduction: string
  definition: string
  frameworks: SalvationFramework[]
  keyConcepts: SalvationConcept[]
  commonThemes: Array<{
    theme: string
    description: string
    examples: Array<{
      framework: string
      example: string
    }>
  }>
  resources: Resource[]
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

export const metadata: Metadata = {
  title: "Salvation | Comparative Religious Perspectives",
  description: "Explore concepts of salvation and liberation across religious traditions. Compare how different religions understand ultimate human destiny and the path to spiritual fulfillment.",
  openGraph: {
    title: "Salvation | Comparative Religious Perspectives",
    description: "Comprehensive comparison of salvation concepts across religions",
    type: "website",
  },
}

const salvationContent: SalvationContent = {
  introduction: `The concept of salvation or liberation represents the ultimate goal of human existence across religious traditions. This comparative study explores how different religions understand the path to spiritual fulfillment and ultimate destiny.`,
  definition: `Salvation/liberation refers to the ultimate goal of human existence in religious traditions, whether conceived as union with God, liberation from suffering, or attainment of perfect wisdom. These concepts shape religious practices, ethical frameworks, and spiritual development.`,
  frameworks: [
    {
      name: "Christianity",
      description: "Emphasizes salvation through faith in Jesus Christ, characterized by divine grace and human response.",
      keyConcepts: [
        "Justification by faith",
        "Divine grace",
        "Atonement",
        "Eternal life"
      ],
      scriptureRefs: [
        {
          reference: "John 3:16",
          text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
          explanation: "Core message of Christian salvation."
        },
        {
          reference: "Ephesians 2:8-9",
          text: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.",
          explanation: "Emphasizes grace and faith in salvation."
        }
      ],
      practices: [
        {
          name: "Faith",
          description: "Trust in Christ's saving work",
          significance: "Means of receiving salvation"
        },
        {
          name: "Baptism",
          description: "Sacramental initiation",
          significance: "Symbol of new life in Christ"
        }
      ],
      historicalFigures: [
        {
          name: "Augustine of Hippo",
          contribution: "Developed theology of grace and predestination",
          dates: "354-430 AD"
        },
        {
          name: "Martin Luther",
          contribution: "Emphasized justification by faith alone",
          dates: "1483-1546"
        }
      ]
    },
    {
      name: "Islam",
      description: "Emphasizes salvation through submission to Allah's will and righteous deeds.",
      keyConcepts: [
        "Submission to Allah",
        "Divine mercy",
        "Judgment Day",
        "Paradise"
      ],
      scriptureRefs: [
        {
          reference: "Quran 2:62",
          text: "Indeed, those who believed and those who were Jews or Christians or Sabeans - those who believed in Allah and the Last Day and did righteousness - will have their reward with their Lord.",
          explanation: "Universal salvation through faith and deeds."
        }
      ],
      practices: [
        {
          name: "Five Pillars",
          description: "Core religious obligations",
          significance: "Path to salvation"
        },
        {
          name: "Dhikr",
          description: "Remembrance of God",
          significance: "Spiritual purification"
        }
      ],
      historicalFigures: [
        {
          name: "Al-Ghazali",
          contribution: "Developed Islamic soteriology",
          dates: "1058-1111"
        }
      ]
    },
    {
      name: "Judaism",
      description: "Emphasizes salvation through covenant relationship with God and righteous living.",
      keyConcepts: [
        "Covenant",
        "Tikkun Olam",
        "Messianic age",
        "World to come"
      ],
      scriptureRefs: [
        {
          reference: "Isaiah 45:22",
          text: "Turn to me and be saved, all you ends of the earth; for I am God, and there is no other.",
          explanation: "Universal salvation through God."
        }
      ],
      practices: [
        {
          name: "Teshuvah",
          description: "Repentance and return",
          significance: "Spiritual renewal"
        },
        {
          name: "Tikkun Olam",
          description: "Repairing the world",
          significance: "Messianic preparation"
        }
      ],
      historicalFigures: [
        {
          name: "Maimonides",
          contribution: "Systematized Jewish eschatology",
          dates: "1135-1204"
        }
      ]
    },
    {
      name: "Sikhism",
      description: "Emphasizes liberation through devotion to God and ethical living.",
      keyConcepts: [
        "Mukti (Liberation)",
        "Naam (Divine name)",
        "Hukam (Divine will)",
        "Sach Khand (Realm of truth)"
      ],
      scriptureRefs: [
        {
          reference: "Guru Granth Sahib",
          text: "Through the Guru's teachings, one is liberated.",
          explanation: "Path to liberation."
        }
      ],
      practices: [
        {
          name: "Naam Simran",
          description: "Meditation on divine name",
          significance: "Path to liberation"
        },
        {
          name: "Seva",
          description: "Selfless service",
          significance: "Spiritual growth"
        }
      ],
      historicalFigures: [
        {
          name: "Guru Nanak",
          contribution: "Established Sikh path to liberation",
          dates: "1469-1539"
        }
      ]
    },
    {
      name: "Taoism",
      description: "Emphasizes harmony with the Tao and liberation from artificial constraints.",
      keyConcepts: [
        "Return to Tao",
        "Immortality",
        "Natural harmony",
        "Wu Wei"
      ],
      scriptureRefs: [
        {
          reference: "Tao Te Ching 16",
          text: "Returning to the source is stillness, which is the way of nature.",
          explanation: "Path to harmony."
        }
      ],
      practices: [
        {
          name: "Meditation",
          description: "Alignment with Tao",
          significance: "Spiritual liberation"
        },
        {
          name: "Qigong",
          description: "Energy cultivation",
          significance: "Physical and spiritual harmony"
        }
      ],
      historicalFigures: [
        {
          name: "Laozi",
          contribution: "Expounded Taoist liberation",
          dates: "6th century BCE"
        }
      ]
    },
    {
      name: "Shinto",
      description: "Emphasizes harmony with kami and natural forces for spiritual well-being.",
      keyConcepts: [
        "Kami no michi",
        "Musubi",
        "Makoto",
        "Takama-ga-hara"
      ],
      scriptureRefs: [
        {
          reference: "Kojiki",
          text: "The way of the kami brings harmony.",
          explanation: "Path to spiritual harmony."
        }
      ],
      practices: [
        {
          name: "Matsuri",
          description: "Festivals and rituals",
          significance: "Connection with kami"
        },
        {
          name: "Misogi",
          description: "Purification rituals",
          significance: "Spiritual renewal"
        }
      ],
      historicalFigures: [
        {
          name: "Motoori Norinaga",
          contribution: "Revived Shinto spirituality",
          dates: "1730-1801"
        }
      ]
    },
    {
      name: "Bahá'í Faith",
      description: "Emphasizes progressive revelation and unity of humanity for spiritual advancement.",
      keyConcepts: [
        "Progressive revelation",
        "Unity of humanity",
        "Spiritual education",
        "World peace"
      ],
      scriptureRefs: [
        {
          reference: "Hidden Words",
          text: "The best beloved of all things in My sight is Justice.",
          explanation: "Path to spiritual advancement."
        }
      ],
      practices: [
        {
          name: "Prayer",
          description: "Communication with God",
          significance: "Spiritual growth"
        },
        {
          name: "Service",
          description: "Work for humanity",
          significance: "Spiritual development"
        }
      ],
      historicalFigures: [
        {
          name: "Bahá'u'lláh",
          contribution: "Revealed Bahá'í teachings",
          dates: "1817-1892"
        }
      ]
    },
    {
      name: "Confucianism",
      description: "Emphasizes moral cultivation and harmony with cosmic order.",
      keyConcepts: [
        "Self-cultivation",
        "Harmony with Tian",
        "Moral perfection",
        "Social harmony"
      ],
      scriptureRefs: [
        {
          reference: "Analects 7:23",
          text: "Heaven is the author of the virtue that is in me.",
          explanation: "Path to moral perfection."
        }
      ],
      practices: [
        {
          name: "Li",
          description: "Ritual propriety",
          significance: "Moral cultivation"
        },
        {
          name: "Self-cultivation",
          description: "Moral development",
          significance: "Harmony with Tian"
        }
      ],
      historicalFigures: [
        {
          name: "Confucius",
          contribution: "Established Confucian path",
          dates: "551-479 BCE"
        }
      ]
    },
    {
      name: "Rastafarianism",
      description: "Emphasizes liberation from oppression and return to Africa (Zion).",
      keyConcepts: [
        "Zion",
        "Repatriation",
        "I and I",
        "Jah"
      ],
      scriptureRefs: [
        {
          reference: "Psalms 68:31",
          text: "Ethiopia shall stretch out her hands unto God.",
          explanation: "Promise of liberation."
        }
      ],
      practices: [
        {
          name: "Reasoning",
          description: "Communal discussion",
          significance: "Spiritual growth"
        },
        {
          name: "Nyabinghi",
          description: "Worship gatherings",
          significance: "Divine connection"
        }
      ],
      historicalFigures: [
        {
          name: "Marcus Garvey",
          contribution: "Influenced Rastafarian liberation theology",
          dates: "1887-1940"
        }
      ]
    }
  ],
  keyConcepts: [
    {
      concept: "Nature of Ultimate Goal",
      description: "Understanding of the final state or destination of human existence.",
      frameworks: [
        {
          framework: "Christianity",
          understanding: "Eternal life in relationship with God",
          significance: "Fulfillment of divine purpose"
        },
        {
          framework: "Buddhism",
          understanding: "Liberation from suffering and rebirth",
          significance: "Attainment of perfect wisdom"
        },
        {
          framework: "Hinduism",
          understanding: "Union with ultimate reality (Brahman)",
          significance: "Release from cycle of rebirth"
        }
      ],
      commonalities: [
        "Transcendence of ordinary existence",
        "End of suffering",
        "Ultimate fulfillment"
      ],
      differences: [
        "Nature of ultimate reality",
        "Relationship with divine",
        "Path to attainment"
      ]
    },
    {
      concept: "Means of Attainment",
      description: "Methods and practices for achieving salvation or liberation.",
      frameworks: [
        {
          framework: "Christianity",
          understanding: "Faith in Christ and divine grace",
          significance: "Dependent on divine initiative"
        },
        {
          framework: "Buddhism",
          understanding: "Personal effort and practice",
          significance: "Self-reliant path"
        },
        {
          framework: "Hinduism",
          understanding: "Multiple paths (karma, jnana, bhakti)",
          significance: "Accommodates different dispositions"
        }
      ],
      commonalities: [
        "Importance of practice",
        "Role of wisdom",
        "Need for transformation"
      ],
      differences: [
        "Role of divine grace",
        "Nature of effort required",
        "Path to follow"
      ]
    }
  ],
  commonThemes: [
    {
      theme: "Transformation",
      description: "Process of spiritual change and growth",
      examples: [
        {
          framework: "Christianity",
          example: "New birth and sanctification"
        },
        {
          framework: "Buddhism",
          example: "Development of wisdom and compassion"
        },
        {
          framework: "Hinduism",
          example: "Purification and spiritual evolution"
        }
      ]
    },
    {
      theme: "Community",
      description: "Role of religious community in salvation",
      examples: [
        {
          framework: "Christianity",
          example: "Church and sacraments"
        },
        {
          framework: "Buddhism",
          example: "Sangha and teaching"
        },
        {
          framework: "Hinduism",
          example: "Guru-disciple relationship"
        }
      ]
    }
  ],
  resources: [
    {
      title: "Salvation in World Religions",
      author: "John Hick",
      url: "/resources/salvation-world-religions",
      type: "Book",
      description: "Comparative study of salvation concepts.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0334021685"
    },
    {
      title: "Paths to Liberation",
      author: "Robert E. Buswell",
      url: "/resources/paths-liberation",
      type: "Book",
      description: "Analysis of liberation in Asian religions.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0824815808"
    },
    {
      title: "The Nature of Salvation",
      author: "Alister McGrath",
      url: "/resources/nature-salvation",
      type: "Book",
      description: "Theological exploration of salvation.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0802805105"
    }
  ]
}

export default function SalvationPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Salvation: A Comparative Study</h1>
        <p className="text-xl mb-4">{salvationContent.introduction}</p>
        <p className="text-lg mb-8">{salvationContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Religious Frameworks</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {salvationContent.frameworks.map((framework, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{framework.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{framework.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Concepts:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {framework.keyConcepts.map((concept, idx) => (
                        <li key={idx}>{concept}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scripture References:</h4>
                    {framework.scriptureRefs.map((ref, idx) => (
                      <div key={idx} className="mb-2">
                        <p className="font-medium">{ref.reference}</p>
                        <p className="italic">"{ref.text}"</p>
                        <p className="text-sm text-slate-600">{ref.explanation}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Practices:</h4>
                    {framework.practices.map((practice, idx) => (
                      <div key={idx} className="mb-2">
                        <p className="font-medium">{practice.name}</p>
                        <p className="text-sm">{practice.description}</p>
                        <p className="text-sm text-slate-600">Significance: {practice.significance}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Historical Figures:</h4>
                    {framework.historicalFigures.map((figure, idx) => (
                      <div key={idx} className="mb-2">
                        <p className="font-medium">{figure.name}</p>
                        {figure.dates && (
                          <p className="text-sm text-slate-600">{figure.dates}</p>
                        )}
                        <p className="text-sm">{figure.contribution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Key Concepts</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {salvationContent.keyConcepts.map((concept, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{concept.concept}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{concept.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Frameworks:</h4>
                    {concept.frameworks.map((framework, idx) => (
                      <div key={idx} className="mb-4">
                        <p className="font-medium">{framework.framework}</p>
                        <p className="text-sm">{framework.understanding}</p>
                        <p className="text-sm text-slate-600">Significance: {framework.significance}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Commonalities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {concept.commonalities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Differences:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {concept.differences.map((item, idx) => (
                        <li key={idx}>{item}</li>
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
        <h2 className="text-3xl font-bold mb-4">Common Themes</h2>
        <div className="grid gap-6">
          {salvationContent.commonThemes.map((theme, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{theme.theme}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{theme.description}</p>
                <div className="grid gap-4 md:grid-cols-3">
                  {theme.examples.map((example, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-lg">
                      <p className="font-medium">{example.framework}</p>
                      <p className="mt-2">{example.example}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Recommended Resources</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {salvationContent.resources.map((resource, index) => (
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
          <Link href="/teachings/comparative/divine-human" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Divine-Human Relationship</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore divine-human concepts across religions.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/comparative/ethics" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Ethics</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Compare ethical frameworks across religions.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/comparative/community" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand religious community structures.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 