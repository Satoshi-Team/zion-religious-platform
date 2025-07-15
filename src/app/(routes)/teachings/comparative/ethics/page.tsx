import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface EthicalFramework {
  name: string
  description: string
  keyPrinciples: string[]
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

interface EthicalConcept {
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

interface EthicsContent {
  introduction: string
  definition: string
  frameworks: EthicalFramework[]
  keyConcepts: EthicalConcept[]
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
  title: "Ethics | Comparative Religious Perspectives",
  description: "Explore ethical frameworks across religious traditions. Compare moral principles, practices, and philosophical foundations of major world religions.",
  openGraph: {
    title: "Ethics | Comparative Religious Perspectives",
    description: "Comprehensive comparison of ethical frameworks across religions",
    type: "website",
  },
}

const ethicsContent: EthicsContent = {
  introduction: `Ethical frameworks in religious traditions provide guidance for moral decision-making and shape how adherents understand their responsibilities to others and the world. This comparative study explores the diverse ways religions approach ethics and morality.`,
  definition: `Religious ethics encompasses the moral principles, values, and practices that guide adherents in their daily lives. These frameworks often derive from sacred texts, religious authorities, and philosophical traditions, shaping both individual behavior and communal norms.`,
  frameworks: [
    {
      name: "Christianity",
      description: "Emphasizes love, justice, and personal responsibility based on divine command and human dignity.",
      keyPrinciples: [
        "Love of God and neighbor",
        "Golden Rule",
        "Divine command ethics",
        "Natural law"
      ],
      scriptureRefs: [
        {
          reference: "Matthew 22:37-39",
          text: "Love the Lord your God with all your heart... Love your neighbor as yourself.",
          explanation: "Establishes the foundation of Christian ethics."
        },
        {
          reference: "Micah 6:8",
          text: "What does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.",
          explanation: "Summarizes key ethical principles."
        }
      ],
      practices: [
        {
          name: "Works of Mercy",
          description: "Acts of compassion and service",
          significance: "Expression of love and justice"
        },
        {
          name: "Moral Formation",
          description: "Development of virtue and character",
          significance: "Cultivation of ethical living"
        }
      ],
      historicalFigures: [
        {
          name: "Thomas Aquinas",
          contribution: "Developed natural law theory",
          dates: "1225-1274"
        },
        {
          name: "Immanuel Kant",
          contribution: "Influenced Christian deontological ethics",
          dates: "1724-1804"
        }
      ]
    },
    {
      name: "Islam",
      description: "Provides comprehensive ethical guidance through divine law (Sharia) and prophetic example.",
      keyPrinciples: [
        "Divine command",
        "Five Pillars",
        "Sharia (Islamic law)",
        "Prophetic tradition"
      ],
      scriptureRefs: [
        {
          reference: "Quran 2:177",
          text: "Righteousness is not that you turn your faces toward the east or the west, but righteousness is believing in Allah... and giving wealth, in spite of love for it, to relatives, orphans, the needy, the traveler, those who ask, and for freeing slaves.",
          explanation: "Defines ethical righteousness."
        }
      ],
      practices: [
        {
          name: "Zakat",
          description: "Obligatory charitable giving",
          significance: "Social justice and responsibility"
        },
        {
          name: "Salah",
          description: "Regular prayer and worship",
          significance: "Moral discipline and remembrance"
        }
      ],
      historicalFigures: [
        {
          name: "Al-Ghazali",
          contribution: "Synthesized Islamic ethics and philosophy",
          dates: "1058-1111"
        }
      ]
    },
    {
      name: "Judaism",
      description: "Emphasizes ethical living through Torah observance and social justice.",
      keyPrinciples: [
        "Tikkun Olam (Repairing the world)",
        "Tzedakah (Righteous giving)",
        "Mitzvot (Commandments)",
        "Gemilut Hasadim (Acts of kindness)"
      ],
      scriptureRefs: [
        {
          reference: "Leviticus 19:18",
          text: "Love your neighbor as yourself.",
          explanation: "Foundation of Jewish ethics."
        }
      ],
      practices: [
        {
          name: "Tzedakah",
          description: "Charitable giving",
          significance: "Social responsibility"
        },
        {
          name: "Gemilut Hasadim",
          description: "Acts of kindness",
          significance: "Ethical living"
        }
      ],
      historicalFigures: [
        {
          name: "Maimonides",
          contribution: "Systematized Jewish ethics",
          dates: "1135-1204"
        }
      ]
    },
    {
      name: "Sikhism",
      description: "Emphasizes ethical living through service and devotion to God.",
      keyPrinciples: [
        "Seva (Selfless service)",
        "Truthful living",
        "Equality and justice",
        "Compassion"
      ],
      scriptureRefs: [
        {
          reference: "Guru Granth Sahib",
          text: "Truth is high, but higher still is truthful living.",
          explanation: "Emphasis on ethical action."
        }
      ],
      practices: [
        {
          name: "Seva",
          description: "Selfless service",
          significance: "Expression of divine love"
        },
        {
          name: "Langar",
          description: "Community kitchen",
          significance: "Equality and sharing"
        }
      ],
      historicalFigures: [
        {
          name: "Guru Nanak",
          contribution: "Established Sikh ethical principles",
          dates: "1469-1539"
        }
      ]
    },
    {
      name: "Taoism",
      description: "Emphasizes natural harmony and ethical living through alignment with the Tao.",
      keyPrinciples: [
        "Wu Wei (Non-action)",
        "Natural harmony",
        "Compassion",
        "Simplicity"
      ],
      scriptureRefs: [
        {
          reference: "Tao Te Ching 67",
          text: "I have three treasures which I hold and keep. The first is mercy; the second is economy; the third is daring not to be ahead of others.",
          explanation: "Core ethical principles."
        }
      ],
      practices: [
        {
          name: "Wu Wei",
          description: "Natural action",
          significance: "Harmonious living"
        },
        {
          name: "Meditation",
          description: "Alignment with Tao",
          significance: "Ethical awareness"
        }
      ],
      historicalFigures: [
        {
          name: "Laozi",
          contribution: "Expounded Taoist ethics",
          dates: "6th century BCE"
        }
      ]
    },
    {
      name: "Shinto",
      description: "Emphasizes purity, sincerity, and harmony with natural and social order.",
      keyPrinciples: [
        "Makoto (Sincerity)",
        "Harmony with nature",
        "Respect for kami",
        "Social harmony"
      ],
      scriptureRefs: [
        {
          reference: "Kojiki",
          text: "The way of the kami is sincerity.",
          explanation: "Foundation of Shinto ethics."
        }
      ],
      practices: [
        {
          name: "Misogi",
          description: "Purification rituals",
          significance: "Moral purity"
        },
        {
          name: "Matsuri",
          description: "Community festivals",
          significance: "Social harmony"
        }
      ],
      historicalFigures: [
        {
          name: "Motoori Norinaga",
          contribution: "Revived Shinto ethics",
          dates: "1730-1801"
        }
      ]
    },
    {
      name: "Bahá'í Faith",
      description: "Emphasizes unity, justice, and progressive revelation of ethical principles.",
      keyPrinciples: [
        "Unity of humanity",
        "Justice and fairness",
        "Truthfulness",
        "Service to humanity"
      ],
      scriptureRefs: [
        {
          reference: "Hidden Words",
          text: "The best beloved of all things in My sight is Justice.",
          explanation: "Central ethical principle."
        }
      ],
      practices: [
        {
          name: "Service",
          description: "Work for humanity",
          significance: "Expression of unity"
        },
        {
          name: "Consultation",
          description: "Collective decision-making",
          significance: "Justice in action"
        }
      ],
      historicalFigures: [
        {
          name: "Bahá'u'lláh",
          contribution: "Revealed Bahá'í ethical teachings",
          dates: "1817-1892"
        }
      ]
    },
    {
      name: "Confucianism",
      description: "Emphasizes ethical living through proper relationships and ritual propriety.",
      keyPrinciples: [
        "Ren (Humaneness)",
        "Li (Ritual propriety)",
        "Xiao (Filial piety)",
        "Yi (Righteousness)"
      ],
      scriptureRefs: [
        {
          reference: "Analects 12:2",
          text: "Do not impose on others what you yourself do not desire.",
          explanation: "Confucian golden rule."
        }
      ],
      practices: [
        {
          name: "Li",
          description: "Ritual propriety",
          significance: "Social harmony"
        },
        {
          name: "Self-cultivation",
          description: "Moral development",
          significance: "Ethical growth"
        }
      ],
      historicalFigures: [
        {
          name: "Confucius",
          contribution: "Established Confucian ethics",
          dates: "551-479 BCE"
        }
      ]
    },
    {
      name: "Rastafarianism",
      description: "Emphasizes ethical living through resistance to oppression and promotion of justice.",
      keyPrinciples: [
        "Social justice",
        "Natural living",
        "Unity and equality",
        "Resistance to Babylon"
      ],
      scriptureRefs: [
        {
          reference: "Psalms 82:3-4",
          text: "Defend the weak and the fatherless; uphold the cause of the poor and the oppressed.",
          explanation: "Ethical responsibility."
        }
      ],
      practices: [
        {
          name: "Ital",
          description: "Natural living",
          significance: "Harmony with creation"
        },
        {
          name: "Reasoning",
          description: "Communal discussion",
          significance: "Social justice"
        }
      ],
      historicalFigures: [
        {
          name: "Marcus Garvey",
          contribution: "Influenced Rastafarian ethics",
          dates: "1887-1940"
        }
      ]
    }
  ],
  keyConcepts: [
    {
      concept: "Moral Authority",
      description: "Sources and justification of ethical principles.",
      frameworks: [
        {
          framework: "Christianity",
          understanding: "Divine command and natural law",
          significance: "Combines divine authority with human reason"
        },
        {
          framework: "Buddhism",
          understanding: "Enlightened wisdom and practical consequences",
          significance: "Emphasizes experiential understanding"
        },
        {
          framework: "Islam",
          understanding: "Divine revelation and prophetic example",
          significance: "Comprehensive guidance for all aspects of life"
        }
      ],
      commonalities: [
        "Recognition of higher authority",
        "Importance of tradition",
        "Role of human reason"
      ],
      differences: [
        "Nature of authority",
        "Role of human autonomy",
        "Balance of divine and human elements"
      ]
    },
    {
      concept: "Virtue and Character",
      description: "Development of moral character and ethical excellence.",
      frameworks: [
        {
          framework: "Christianity",
          understanding: "Cultivation of theological virtues",
          significance: "Transformation through divine grace"
        },
        {
          framework: "Buddhism",
          understanding: "Development of wisdom and compassion",
          significance: "Path to enlightenment"
        },
        {
          framework: "Islam",
          understanding: "Cultivation of Islamic virtues",
          significance: "Fulfillment of divine purpose"
        }
      ],
      commonalities: [
        "Importance of character",
        "Role of practice",
        "Connection to ultimate good"
      ],
      differences: [
        "Nature of virtue",
        "Path to development",
        "Role of divine assistance"
      ]
    }
  ],
  commonThemes: [
    {
      theme: "Social Justice",
      description: "Ethical responsibilities to society and others",
      examples: [
        {
          framework: "Christianity",
          example: "Works of mercy and social teaching"
        },
        {
          framework: "Buddhism",
          example: "Compassion and right livelihood"
        },
        {
          framework: "Islam",
          example: "Zakat and social responsibility"
        }
      ]
    },
    {
      theme: "Personal Development",
      description: "Ethical cultivation of self",
      examples: [
        {
          framework: "Christianity",
          example: "Virtue ethics and spiritual growth"
        },
        {
          framework: "Buddhism",
          example: "Eightfold Path and meditation"
        },
        {
          framework: "Islam",
          example: "Spiritual purification and worship"
        }
      ]
    }
  ],
  resources: [
    {
      title: "Comparative Religious Ethics",
      author: "David Little",
      url: "/resources/comparative-ethics",
      type: "Book",
      description: "Analysis of ethical frameworks in major religions.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0830839836"
    },
    {
      title: "The Ethics of World Religions",
      author: "Hans Küng",
      url: "/resources/ethics-world-religions",
      type: "Book",
      description: "Global perspective on religious ethics.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0824518893"
    },
    {
      title: "Buddhist Ethics",
      author: "Damien Keown",
      url: "/resources/buddhist-ethics",
      type: "Book",
      description: "Comprehensive study of Buddhist ethical thought.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/019280457X"
    }
  ]
}

export default function EthicsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Ethics: A Comparative Study</h1>
        <p className="text-xl mb-4">{ethicsContent.introduction}</p>
        <p className="text-lg mb-8">{ethicsContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Ethical Frameworks</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {ethicsContent.frameworks.map((framework, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{framework.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{framework.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Principles:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {framework.keyPrinciples.map((principle, idx) => (
                        <li key={idx}>{principle}</li>
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
          {ethicsContent.keyConcepts.map((concept, index) => (
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
          {ethicsContent.commonThemes.map((theme, index) => (
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
          {ethicsContent.resources.map((resource, index) => (
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
          <Link href="/teachings/comparative/salvation" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Salvation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Compare concepts of salvation and liberation.</p>
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