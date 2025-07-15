import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Three Treasures | Taoist Theology",
  description: "Explore the profound concept of the Three Treasures (San Bao) in Taoist theology, examining Jing (Essence), Qi (Energy), and Shen (Spirit) as fundamental aspects of existence and cultivation.",
  keywords: "Three Treasures, San Bao, Jing, Qi, Shen, Taoist theology, essence, energy, spirit, internal alchemy, cultivation, Chinese philosophy, spiritual practice, vitality"
}

interface ThreeTreasuresContent {
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

const treasuresContent: ThreeTreasuresContent[] = [
  {
    title: "Foundational Principles",
    description: "Understanding the Three Treasures as fundamental aspects of existence and spiritual cultivation.",
    keyPoints: [
      "Jing (Essence)",
      "Qi (Energy)",
      "Shen (Spirit)",
      "Interconnected nature",
      "Hierarchical relationship",
      "Transformative process",
      "Cultivation sequence",
      "Holistic integration"
    ],
    historicalRefs: [
      {
        text: "Original exposition of the Three Treasures in the 'Huang Di Nei Jing'.",
        source: "Yellow Emperor's Classic of Medicine"
      },
      {
        text: "Development of Three Treasures theory in Taoist internal alchemy texts.",
        source: "Internal Alchemy Classics"
      }
    ],
    significance: "The Three Treasures represent the fundamental substances of life and the keys to spiritual transformation.",
    elements: [
      "Physical essence",
      "Vital energy",
      "Spiritual consciousness",
      "Material foundation",
      "Energetic processes",
      "Mental aspects",
      "Transformative stages",
      "Unity principles"
    ],
    practices: [
      "Essence preservation",
      "Energy cultivation",
      "Spirit refinement",
      "Meditation practice",
      "Physical exercises",
      "Breathing methods",
      "Mental cultivation",
      "Integrated practice"
    ],
    recommendedReading: [
      {
        title: "The Foundations of Internal Alchemy",
        author: "Wang Mu",
        description: "Comprehensive guide to the Three Treasures and internal alchemy",
        amazonLink: "https://www.amazon.com/Foundations-Internal-Alchemy-Taoist-Practice/dp/0984308261"
      }
    ]
  },
  {
    title: "Individual Aspects",
    description: "Examining each of the Three Treasures in detail and their specific characteristics.",
    keyPoints: [
      "Jing characteristics",
      "Qi manifestations",
      "Shen attributes",
      "Individual functions",
      "Specific qualities",
      "Unique expressions",
      "Development stages",
      "Cultivation methods"
    ],
    historicalRefs: [
      {
        text: "Detailed analysis of each treasure in 'The Secret of the Golden Flower'.",
        source: "Golden Flower Treatise"
      },
      {
        text: "Specific cultivation methods for each treasure in Taoist texts.",
        source: "Cultivation Classics"
      }
    ],
    significance: "Understanding each treasure's unique qualities enables proper cultivation and transformation.",
    elements: [
      "Jing qualities",
      "Qi characteristics",
      "Shen attributes",
      "Physical basis",
      "Energetic nature",
      "Spiritual aspects",
      "Development stages",
      "Refinement processes"
    ],
    practices: [
      "Jing preservation",
      "Qi circulation",
      "Shen cultivation",
      "Physical methods",
      "Energy practices",
      "Spiritual exercises",
      "Integrated techniques",
      "Progressive development"
    ],
    recommendedReading: [
      {
        title: "The Secret of the Golden Flower",
        author: "Thomas Cleary",
        description: "Classical text on spiritual alchemy and the Three Treasures",
        amazonLink: "https://www.amazon.com/Secret-Golden-Flower-Chinese-Book/dp/0062501933"
      }
    ]
  },
  {
    title: "Practical Cultivation",
    description: "Understanding how to cultivate and transform the Three Treasures in practice.",
    keyPoints: [
      "Daily practices",
      "Cultivation methods",
      "Progressive stages",
      "Integration techniques",
      "Transformation process",
      "Balance maintenance",
      "Health preservation",
      "Spiritual development"
    ],
    historicalRefs: [
      {
        text: "Traditional cultivation methods from various Taoist schools.",
        source: "School Transmission Texts"
      },
      {
        text: "Practical applications in Taoist medicine and cultivation.",
        source: "Medical and Cultivation Records"
      }
    ],
    significance: "Practical cultivation of the Three Treasures leads to health, longevity, and spiritual realization.",
    elements: [
      "Daily routines",
      "Exercise methods",
      "Meditation techniques",
      "Dietary practices",
      "Lifestyle adjustments",
      "Mental training",
      "Energy work",
      "Spiritual practices"
    ],
    practices: [
      "Morning/evening routines",
      "Qigong exercises",
      "Meditation sessions",
      "Dietary guidelines",
      "Sleep practices",
      "Mental cultivation",
      "Energy circulation",
      "Spiritual refinement"
    ],
    recommendedReading: [
      {
        title: "The Way of Energy",
        author: "Master Lam Kam Chuen",
        description: "Practical guide to cultivating the Three Treasures",
        amazonLink: "https://www.amazon.com/Way-Energy-Mastering-Internal-Strength/dp/0671736450"
      }
    ]
  },
  {
    title: "Modern Applications",
    description: "Exploring contemporary understanding and applications of the Three Treasures.",
    keyPoints: [
      "Health applications",
      "Scientific perspectives",
      "Modern practices",
      "Clinical applications",
      "Research findings",
      "Integration methods",
      "Practical adaptations",
      "Contemporary relevance"
    ],
    historicalRefs: [
      {
        text: "Modern research on Three Treasures principles in health and medicine.",
        source: "Contemporary Medical Studies"
      },
      {
        text: "Integration of traditional concepts with modern science.",
        source: "Scientific Research Literature"
      }
    ],
    significance: "The Three Treasures offer valuable insights for modern health, wellness, and personal development.",
    elements: [
      "Health principles",
      "Scientific concepts",
      "Clinical applications",
      "Research findings",
      "Modern methods",
      "Integration approaches",
      "Practical tools",
      "Contemporary practices"
    ],
    practices: [
      "Modern exercises",
      "Health protocols",
      "Wellness practices",
      "Stress management",
      "Energy cultivation",
      "Mental training",
      "Lifestyle integration",
      "Personal development"
    ],
    recommendedReading: [
      {
        title: "The Scientific Basis of Integrative Health",
        author: "Leonard Wisneski",
        description: "Modern scientific perspective on traditional concepts",
        amazonLink: "https://www.amazon.com/Scientific-Basis-Integrative-Health/dp/1138196290"
      }
    ]
  }
]

export default function ThreeTreasuresPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>The Three Treasures in Taoist Theology</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the profound concept of the Three Treasures (San Bao), examining Jing (Essence), Qi (Energy), and Shen (Spirit) as fundamental aspects of existence and cultivation in Taoist tradition.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="foundational" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="foundational">Foundational</TabsTrigger>
          <TabsTrigger value="individual">Individual</TabsTrigger>
          <TabsTrigger value="practical">Practical</TabsTrigger>
          <TabsTrigger value="modern">Modern</TabsTrigger>
        </TabsList>

        {treasuresContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({foundational: true, individual: true, practical: true, modern: true})[index]}>
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
              title: "Tao",
              href: "/religion/taoism/theology/tao"
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