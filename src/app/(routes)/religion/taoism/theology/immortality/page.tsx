import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Immortality | Taoist Theology",
  description: "Explore the profound concept of immortality in Taoist theology, examining physical longevity, spiritual transcendence, and the various paths to attaining immortal existence through Taoist practices.",
  keywords: "Taoist immortality, xian, spiritual cultivation, elixir of life, internal alchemy, longevity practices, transcendence, Chinese philosophy, immortal beings, eternal life"
}

interface ImmortalityContent {
  title: string
  description: string
  keyPoints: string[]
  historicalRefs: Array<{ text: string; source: string }>
  significance: string
  elements: string[]
  practices: string[]
  recommendedReading?: Array<{
    title: string
    author: string
    description: string
    amazonLink: string
  }>
}

const immortalityContent: ImmortalityContent[] = [
  {
    title: "Conceptual Foundation",
    description: "Understanding the multifaceted nature of immortality in Taoist thought and its various manifestations.",
    keyPoints: [
      "Physical immortality",
      "Spiritual transcendence",
      "Celestial realms",
      "Immortal beings (Xian)",
      "Levels of attainment",
      "Transformation process",
      "Unity with Tao",
      "Beyond death concepts"
    ],
    historicalRefs: [
      {
        text: "Classical descriptions of immortality in 'Zhuangzi' and their philosophical implications.",
        source: "Zhuangzi Inner Chapters"
      },
      {
        text: "Accounts of immortal beings and their attainments in Taoist canonical texts.",
        source: "Daozang (Taoist Canon)"
      }
    ],
    significance: "Immortality represents the ultimate goal of Taoist practice, encompassing both physical longevity and spiritual transcendence.",
    elements: [
      "Physical transformation",
      "Spiritual elevation",
      "Energy refinement",
      "Consciousness expansion",
      "Material transcendence",
      "Dimensional shifting",
      "Divine qualities",
      "Eternal existence"
    ],
    practices: [
      "Meditation techniques",
      "Breathing exercises",
      "Dietary methods",
      "Alchemical practices",
      "Energy cultivation",
      "Virtue development",
      "Mind purification",
      "Spirit refinement"
    ],
    recommendedReading: [
      {
        title: "Immortal Sisters: Secret Teachings of Taoist Women",
        author: "Thomas Cleary",
        description: "Collection of teachings from female Taoist immortals",
        amazonLink: "https://www.amazon.com/Immortal-Sisters-Secret-Teachings-Taoist/dp/1556432224"
      }
    ]
  },
  {
    title: "Methods and Practices",
    description: "Exploring the various methods and practices for attaining immortality in Taoist tradition.",
    keyPoints: [
      "Internal alchemy",
      "External alchemy",
      "Meditation practices",
      "Energy cultivation",
      "Dietary regimens",
      "Herbal practices",
      "Sexual practices",
      "Virtue cultivation"
    ],
    historicalRefs: [
      {
        text: "Detailed methods from the 'Can Tong Qi' on alchemical transformation.",
        source: "Triplex Unity"
      },
      {
        text: "Practical instructions from immortality texts of the Tang Dynasty.",
        source: "Tang Dynasty Manuals"
      }
    ],
    significance: "The methods of immortality cultivation represent systematic approaches to transcending ordinary human limitations.",
    elements: [
      "Alchemical processes",
      "Energy refinement",
      "Spirit cultivation",
      "Body transformation",
      "Mind purification",
      "Virtue development",
      "Dietary practices",
      "Breathing methods"
    ],
    practices: [
      "Golden elixir",
      "Breath retention",
      "Energy circulation",
      "Meditation methods",
      "Dietary restrictions",
      "Herbal formulas",
      "Sexual practices",
      "Virtue actions"
    ],
    recommendedReading: [
      {
        title: "The Way of the Golden Elixir: An Introduction to Taoist Alchemy",
        author: "Fabrizio Pregadio",
        description: "Comprehensive guide to Taoist alchemical practices",
        amazonLink: "https://www.amazon.com/Way-Golden-Elixir-Introduction-Alchemy/dp/0984308232"
      }
    ]
  },
  {
    title: "Stages and Manifestations",
    description: "Understanding the progressive stages and various manifestations of immortality attainment.",
    keyPoints: [
      "Earthly immortals",
      "Celestial immortals",
      "Spirit immortals",
      "Divine immortals",
      "Physical signs",
      "Spiritual indicators",
      "Transformation stages",
      "Ultimate attainment"
    ],
    historicalRefs: [
      {
        text: "Classification of immortal beings in 'Baopuzi'.",
        source: "Master Who Embraces Simplicity"
      },
      {
        text: "Descriptions of immortality stages in Shangqing texts.",
        source: "Highest Clarity Scriptures"
      }
    ],
    significance: "The stages of immortality represent progressive levels of spiritual and physical transformation.",
    elements: [
      "Physical signs",
      "Energy manifestations",
      "Spiritual qualities",
      "Supernatural abilities",
      "Consciousness levels",
      "Divine attributes",
      "Dimensional access",
      "Ultimate freedom"
    ],
    practices: [
      "Stage verification",
      "Progress assessment",
      "Sign recognition",
      "Power development",
      "Ability cultivation",
      "Realm exploration",
      "Divine communication",
      "Ultimate integration"
    ],
    recommendedReading: [
      {
        title: "Teachings of the Tao",
        author: "Eva Wong",
        description: "Overview of Taoist immortality teachings and stages",
        amazonLink: "https://www.amazon.com/Teachings-Tao-Eva-Wong/dp/1570623074"
      }
    ]
  },
  {
    title: "Contemporary Understanding",
    description: "Examining modern interpretations and applications of Taoist immortality concepts.",
    keyPoints: [
      "Modern interpretations",
      "Scientific perspectives",
      "Psychological aspects",
      "Health applications",
      "Longevity research",
      "Consciousness studies",
      "Practical adaptations",
      "Contemporary relevance"
    ],
    historicalRefs: [
      {
        text: "Modern scientific studies on Taoist longevity practices.",
        source: "Contemporary Research Papers"
      },
      {
        text: "Integration of traditional immortality concepts with modern health science.",
        source: "Modern Taoist Studies"
      }
    ],
    significance: "Traditional immortality concepts offer valuable insights for modern health, longevity, and consciousness development.",
    elements: [
      "Scientific validation",
      "Health principles",
      "Psychological insights",
      "Practical applications",
      "Modern methods",
      "Research findings",
      "Clinical studies",
      "Integration approaches"
    ],
    practices: [
      "Modern adaptations",
      "Health protocols",
      "Longevity practices",
      "Mind-body methods",
      "Stress reduction",
      "Life extension",
      "Consciousness development",
      "Holistic integration"
    ],
    recommendedReading: [
      {
        title: "The Tao of Health, Sex, and Longevity",
        author: "Daniel Reid",
        description: "Modern guide to Taoist longevity practices",
        amazonLink: "https://www.amazon.com/Tao-Health-Sex-Longevity-Practical/dp/067164811X"
      }
    ]
  }
]

export default function ImmortalityPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Immortality in Taoist Theology</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the profound concept of immortality in Taoist thought, examining its physical, spiritual, and transcendental aspects through traditional practices and modern understanding.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="foundational" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="foundational">Conceptual</TabsTrigger>
          <TabsTrigger value="methods">Methods</TabsTrigger>
          <TabsTrigger value="stages">Stages</TabsTrigger>
          <TabsTrigger value="modern">Contemporary</TabsTrigger>
        </TabsList>

        {immortalityContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({foundational: true, methods: true, stages: true, modern: true})[index]}>
            <Card>
              <CardHeader>
                <CardTitle>{content.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="font-semibold mb-3">Overview</h3>
                  <p className="text-muted-foreground">{content.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Key Points</h3>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    {content.keyPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Historical References</h3>
                  <div className="space-y-4">
                    {content.historicalRefs.map((ref, i) => (
                      <div key={i} className="pl-6 border-l-2">
                        <p className="italic text-muted-foreground">{ref.text}</p>
                        <p className="text-sm text-muted-foreground mt-1">- {ref.source}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Significance</h3>
                  <p className="text-muted-foreground">{content.significance}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Elements</h3>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    {content.elements.map((element, i) => (
                      <li key={i}>{element}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Practices</h3>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    {content.practices.map((practice, i) => (
                      <li key={i}>{practice}</li>
                    ))}
                  </ul>
                </div>

                {content.recommendedReading && (
                  <div>
                    <h3 className="font-semibold mb-3">Recommended Reading</h3>
                    <div className="space-y-4">
                      {content.recommendedReading.map((book, i) => (
                        <Card key={i} className="p-4">
                          <h4 className="font-semibold">{book.title}</h4>
                          <p className="text-sm text-muted-foreground">By {book.author}</p>
                          <p className="text-sm text-muted-foreground mt-2">{book.description}</p>
                          <Button asChild className="mt-4">
                            <a href={book.amazonLink} target="_blank" rel="noopener noreferrer">
                              View on Amazon
                            </a>
                          </Button>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-8">
        <RelatedTopics
          topics={[
            {
              title: "Three Treasures",
              href: "/religion/taoism/theology/three-treasures"
            },
            {
              title: "Internal Alchemy",
              href: "/religion/taoism/practices/internal-alchemy"
            },
            {
              title: "Meditation",
              href: "/religion/taoism/practices/meditation"
            }
          ]}
        />
      </div>
    </div>
  )
} 