import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ReligiousTradition {
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

interface ComparativeConcept {
  concept: string
  description: string
  traditions: Array<{
    tradition: string
    understanding: string
    significance: string
  }>
  commonalities: string[]
  differences: string[]
}

interface DivineHumanContent {
  introduction: string
  definition: string
  traditions: ReligiousTradition[]
  keyConcepts: ComparativeConcept[]
  commonThemes: Array<{
    theme: string
    description: string
    examples: Array<{
      tradition: string
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
  title: "Divine-Human Relationship | Comparative Religious Perspectives",
  description: "Explore how different religious traditions understand the relationship between the divine and human. Compare concepts, practices, and theological frameworks across major world religions.",
  openGraph: {
    title: "Divine-Human Relationship | Comparative Religious Perspectives",
    description: "Comprehensive comparison of divine-human relationship concepts across religions",
    type: "website",
  },
}

const divineHumanContent: DivineHumanContent = {
  introduction: `The relationship between the divine and human is a central theme across religious traditions, shaping how people understand their purpose, morality, and ultimate destiny. This comparative study explores how different religions conceptualize and practice this fundamental relationship.`,
  definition: `The divine-human relationship encompasses the ways in which religious traditions understand the connection, interaction, and purpose between ultimate reality (God, gods, or transcendent principles) and human beings. This relationship influences religious practices, ethical frameworks, and spiritual development.`,
  traditions: [
    {
      name: "Christianity",
      description: "Emphasizes a personal relationship with God through Jesus Christ, characterized by grace, faith, and love.",
      keyConcepts: [
        "Image of God (Imago Dei)",
        "Divine grace and human response",
        "Incarnation of Christ",
        "Indwelling of Holy Spirit"
      ],
      scriptureRefs: [
        {
          reference: "Genesis 1:27",
          text: "So God created mankind in his own image, in the image of God he created them.",
          explanation: "Establishes human dignity and capacity for relationship with God."
        },
        {
          reference: "John 1:14",
          text: "The Word became flesh and made his dwelling among us.",
          explanation: "Shows God's intimate involvement with humanity through Christ."
        }
      ],
      practices: [
        {
          name: "Prayer",
          description: "Direct communication with God through Christ",
          significance: "Maintains personal relationship with the divine"
        },
        {
          name: "Sacraments",
          description: "Visible signs of divine grace and presence",
          significance: "Experience divine-human encounter through physical means"
        }
      ],
      historicalFigures: [
        {
          name: "Augustine of Hippo",
          contribution: "Developed theology of divine grace and human will",
          dates: "354-430 AD"
        },
        {
          name: "Martin Luther",
          contribution: "Emphasized personal relationship with God through faith",
          dates: "1483-1546"
        }
      ]
    },
    {
      name: "Islam",
      description: "Emphasizes submission to Allah's will and direct relationship with the divine through prayer and obedience.",
      keyConcepts: [
        "Tawhid (Oneness of God)",
        "Khalifa (Human stewardship)",
        "Fitra (Human nature)",
        "Rahma (Divine mercy)"
      ],
      scriptureRefs: [
        {
          reference: "Quran 2:30",
          text: "And when your Lord said to the angels, 'I will make a vicegerent on earth.'",
          explanation: "Establishes human role as God's representative on earth."
        }
      ],
      practices: [
        {
          name: "Salah",
          description: "Five daily prayers",
          significance: "Direct communication with Allah"
        },
        {
          name: "Dhikr",
          description: "Remembrance of God",
          significance: "Cultivation of divine presence"
        }
      ],
      historicalFigures: [
        {
          name: "Al-Ghazali",
          contribution: "Developed mystical understanding of divine-human relationship",
          dates: "1058-1111"
        }
      ]
    },
    {
      name: "Judaism",
      description: "Emphasizes covenantal relationship with God and human responsibility in partnership with the divine.",
      keyConcepts: [
        "Brit (Covenant)",
        "Tzelem Elohim (Image of God)",
        "Tikkun Olam (Repairing the world)",
        "Shekhinah (Divine presence)"
      ],
      scriptureRefs: [
        {
          reference: "Genesis 1:27",
          text: "So God created mankind in his own image, in the image of God he created them.",
          explanation: "Foundation of human dignity and divine relationship."
        }
      ],
      practices: [
        {
          name: "Tefillah",
          description: "Prayer and worship",
          significance: "Maintenance of divine-human relationship"
        },
        {
          name: "Mitzvot",
          description: "Commandments and good deeds",
          significance: "Partnership with God in creation"
        }
      ],
      historicalFigures: [
        {
          name: "Maimonides",
          contribution: "Synthesized Jewish theology and philosophy",
          dates: "1135-1204"
        }
      ]
    },
    {
      name: "Sikhism",
      description: "Emphasizes direct relationship with Waheguru through meditation and service.",
      keyConcepts: [
        "Ik Onkar (One God)",
        "Hukam (Divine will)",
        "Seva (Selfless service)",
        "Naam (Divine name)"
      ],
      scriptureRefs: [
        {
          reference: "Guru Granth Sahib",
          text: "There is one God, eternal truth is his name.",
          explanation: "Foundation of divine-human relationship."
        }
      ],
      practices: [
        {
          name: "Simran",
          description: "Meditation on divine name",
          significance: "Union with divine"
        },
        {
          name: "Seva",
          description: "Selfless service",
          significance: "Expression of divine love"
        }
      ],
      historicalFigures: [
        {
          name: "Guru Nanak",
          contribution: "Established Sikh understanding of divine-human relationship",
          dates: "1469-1539"
        }
      ]
    },
    {
      name: "Taoism",
      description: "Emphasizes harmony with the Tao (Way) and natural alignment with cosmic principles.",
      keyConcepts: [
        "Tao (Way)",
        "Wu Wei (Non-action)",
        "Te (Virtue)",
        "Qi (Vital energy)"
      ],
      scriptureRefs: [
        {
          reference: "Tao Te Ching 25",
          text: "Man follows Earth, Earth follows Heaven, Heaven follows Tao, Tao follows what is natural.",
          explanation: "Human relationship with cosmic order."
        }
      ],
      practices: [
        {
          name: "Meditation",
          description: "Alignment with Tao",
          significance: "Harmony with natural order"
        },
        {
          name: "Qigong",
          description: "Energy cultivation",
          significance: "Balance of vital forces"
        }
      ],
      historicalFigures: [
        {
          name: "Laozi",
          contribution: "Expounded Taoist philosophy",
          dates: "6th century BCE"
        }
      ]
    },
    {
      name: "Shinto",
      description: "Emphasizes connection with kami (divine spirits) and harmony with natural forces.",
      keyConcepts: [
        "Kami (Divine spirits)",
        "Musubi (Divine connection)",
        "Makoto (Sincerity)",
        "Kannagara (Way of the kami)"
      ],
      scriptureRefs: [
        {
          reference: "Kojiki",
          text: "The kami descended from heaven to earth.",
          explanation: "Foundation of divine-human relationship."
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
          contribution: "Revived Shinto theology",
          dates: "1730-1801"
        }
      ]
    },
    {
      name: "Bahá'í Faith",
      description: "Emphasizes unity of humanity and progressive revelation of divine truth.",
      keyConcepts: [
        "Unity of God",
        "Unity of religion",
        "Unity of humanity",
        "Progressive revelation"
      ],
      scriptureRefs: [
        {
          reference: "Hidden Words",
          text: "O Son of Man! Veiled in My immemorial being and in the ancient eternity of My essence, I knew My love for thee.",
          explanation: "Divine love and human potential."
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
          significance: "Expression of divine love"
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
      description: "Emphasizes human relationships and harmony with cosmic order through ethical living.",
      keyConcepts: [
        "Tian (Heaven)",
        "Li (Ritual propriety)",
        "Ren (Humaneness)",
        "Junzi (Noble person)"
      ],
      scriptureRefs: [
        {
          reference: "Analects 7:23",
          text: "Heaven is the author of the virtue that is in me.",
          explanation: "Human connection to divine order."
        }
      ],
      practices: [
        {
          name: "Li",
          description: "Ritual propriety",
          significance: "Harmony with cosmic order"
        },
        {
          name: "Self-cultivation",
          description: "Moral development",
          significance: "Alignment with Tian"
        }
      ],
      historicalFigures: [
        {
          name: "Confucius",
          contribution: "Established Confucian teachings",
          dates: "551-479 BCE"
        }
      ]
    },
    {
      name: "Rastafarianism",
      description: "Emphasizes direct connection with Jah (God) and liberation from oppression.",
      keyConcepts: [
        "Jah (God)",
        "I and I (Divine-human unity)",
        "Zion (Heaven)",
        "Babylon (Oppression)"
      ],
      scriptureRefs: [
        {
          reference: "Psalms 68:4",
          text: "Sing unto God, sing praises to his name.",
          explanation: "Connection with divine through music."
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
          name: "Haile Selassie I",
          contribution: "Central figure in Rastafarian theology",
          dates: "1892-1975"
        }
      ]
    }
  ],
  keyConcepts: [
    {
      concept: "Divine Immanence and Transcendence",
      description: "How religions understand the divine presence in and beyond the world.",
      traditions: [
        {
          tradition: "Christianity",
          understanding: "God is both transcendent Creator and immanent through Christ and Spirit",
          significance: "Enables personal relationship while maintaining divine mystery"
        },
        {
          tradition: "Hinduism",
          understanding: "Brahman is both transcendent absolute and immanent in all things",
          significance: "Supports both personal devotion and philosophical inquiry"
        },
        {
          tradition: "Buddhism",
          understanding: "Ultimate reality is neither immanent nor transcendent",
          significance: "Emphasizes direct experience over conceptual understanding"
        }
      ],
      commonalities: [
        "Recognition of divine mystery",
        "Balance of presence and otherness",
        "Importance of spiritual experience"
      ],
      differences: [
        "Nature of divine reality",
        "Role of personal deity",
        "Path to understanding"
      ]
    },
    {
      concept: "Human Nature and Purpose",
      description: "Understanding of human identity and destiny in relation to the divine.",
      traditions: [
        {
          tradition: "Christianity",
          understanding: "Humans created in God's image for relationship and stewardship",
          significance: "Basis for human dignity and responsibility"
        },
        {
          tradition: "Hinduism",
          understanding: "Atman (self) is identical with Brahman (ultimate reality)",
          significance: "Foundation for liberation and spiritual growth"
        },
        {
          tradition: "Buddhism",
          understanding: "No permanent self; potential for awakening to ultimate reality",
          significance: "Path to liberation from suffering"
        }
      ],
      commonalities: [
        "Recognition of human potential",
        "Importance of spiritual growth",
        "Connection to ultimate reality"
      ],
      differences: [
        "Nature of self",
        "Purpose of existence",
        "Path to fulfillment"
      ]
    }
  ],
  commonThemes: [
    {
      theme: "Spiritual Practice",
      description: "Methods for cultivating divine-human relationship",
      examples: [
        {
          tradition: "Christianity",
          example: "Prayer, worship, sacraments"
        },
        {
          tradition: "Hinduism",
          example: "Yoga, meditation, puja"
        },
        {
          tradition: "Buddhism",
          example: "Meditation, mindfulness, ethical conduct"
        }
      ]
    },
    {
      theme: "Ethical Living",
      description: "Moral implications of divine-human relationship",
      examples: [
        {
          tradition: "Christianity",
          example: "Love of God and neighbor"
        },
        {
          tradition: "Hinduism",
          example: "Dharma and karma"
        },
        {
          tradition: "Buddhism",
          example: "Eightfold Path and compassion"
        }
      ]
    }
  ],
  resources: [
    {
      title: "The Divine-Human Relationship in World Religions",
      author: "John Hick",
      url: "/resources/divine-human-relationship",
      type: "Book",
      description: "Comprehensive study of divine-human concepts across religions.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1433556375"
    },
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
      title: "The Experience of God: Being, Consciousness, Bliss",
      author: "David Bentley Hart",
      url: "/resources/experience-god",
      type: "Book",
      description: "Philosophical exploration of divine-human encounter.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/B08XYZGHI"
    }
  ]
}

export default function DivineHumanPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Divine-Human Relationship: A Comparative Study</h1>
        <p className="text-xl mb-4">{divineHumanContent.introduction}</p>
        <p className="text-lg mb-8">{divineHumanContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Religious Traditions</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {divineHumanContent.traditions.map((tradition, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{tradition.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{tradition.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Concepts:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {tradition.keyConcepts.map((concept, idx) => (
                        <li key={idx}>{concept}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scripture References:</h4>
                    {tradition.scriptureRefs.map((ref, idx) => (
                      <div key={idx} className="mb-2">
                        <p className="font-medium">{ref.reference}</p>
                        <p className="italic">"{ref.text}"</p>
                        <p className="text-sm text-slate-600">{ref.explanation}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Practices:</h4>
                    {tradition.practices.map((practice, idx) => (
                      <div key={idx} className="mb-2">
                        <p className="font-medium">{practice.name}</p>
                        <p className="text-sm">{practice.description}</p>
                        <p className="text-sm text-slate-600">Significance: {practice.significance}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Historical Figures:</h4>
                    {tradition.historicalFigures.map((figure, idx) => (
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
          {divineHumanContent.keyConcepts.map((concept, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{concept.concept}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{concept.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Traditions:</h4>
                    {concept.traditions.map((tradition, idx) => (
                      <div key={idx} className="mb-4">
                        <p className="font-medium">{tradition.tradition}</p>
                        <p className="text-sm">{tradition.understanding}</p>
                        <p className="text-sm text-slate-600">Significance: {tradition.significance}</p>
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
          {divineHumanContent.commonThemes.map((theme, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{theme.theme}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{theme.description}</p>
                <div className="grid gap-4 md:grid-cols-3">
                  {theme.examples.map((example, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-lg">
                      <p className="font-medium">{example.tradition}</p>
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
          {divineHumanContent.resources.map((resource, index) => (
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
          <Link href="/teachings/comparative/ethics" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Ethics</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore ethical frameworks across religions.</p>
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