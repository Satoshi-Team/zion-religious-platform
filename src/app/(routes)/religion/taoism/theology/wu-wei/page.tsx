import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Wu Wei | Taoist Theology",
  description: "Explore the profound concept of Wu Wei in Taoist theology, from its philosophical foundations to practical applications, examining its role in achieving effortless action and natural harmony.",
  keywords: "Wu Wei, non-action, effortless action, Taoist theology, natural way, spontaneity, non-interference, Chinese philosophy, mindfulness, flow state, spiritual practice, natural harmony"
}

interface WuWeiContent {
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

const wuWeiContent: WuWeiContent[] = [
  {
    title: "Philosophical Foundation",
    description: "Understanding Wu Wei as the principle of effortless action and non-interference in harmony with the Tao.",
    keyPoints: [
      "Non-interference",
      "Natural action",
      "Spontaneous response",
      "Effortless efficiency",
      "Alignment with Tao",
      "Absence of forcing",
      "Natural wisdom",
      "Intuitive action"
    ],
    historicalRefs: [
      {
        text: "Lao Tzu's foundational teaching: 'The Tao does nothing, yet nothing is left undone.'",
        source: "Tao Te Ching, Chapter 37"
      },
      {
        text: "Chuang Tzu's parables illustrating Wu Wei through natural examples.",
        source: "Zhuangzi, Inner Chapters"
      }
    ],
    significance: "Wu Wei represents the highest form of action through alignment with natural principles and the Tao.",
    elements: [
      "Non-interference",
      "Natural flow",
      "Spontaneity",
      "Effortlessness",
      "Simplicity",
      "Naturalness",
      "Wisdom",
      "Harmony"
    ],
    practices: [
      "Mindful observation",
      "Natural response",
      "Intuitive action",
      "Flow cultivation",
      "Simplicity practice",
      "Non-forcing",
      "Spontaneous living",
      "Wisdom development"
    ],
    recommendedReading: [
      {
        title: "Effortless Action",
        author: "Edward Slingerland",
        description: "Scholarly analysis of Wu Wei in Chinese thought",
        amazonLink: "https://www.amazon.com/Effortless-Action-Conceptual-Metaphor-Spiritual/dp/0195314875"
      }
    ]
  },
  {
    title: "Natural Expression",
    description: "Examining how Wu Wei manifests in natural processes and phenomena.",
    keyPoints: [
      "Natural flow",
      "Organic growth",
      "Effortless movement",
      "Natural cycles",
      "Ecological balance",
      "Spontaneous order",
      "Environmental harmony",
      "Natural wisdom"
    ],
    historicalRefs: [
      {
        text: "Classical observations of Wu Wei in natural processes.",
        source: "Taoist Nature Texts"
      },
      {
        text: "Traditional understanding of natural cultivation without forcing.",
        source: "Agricultural Wisdom Records"
      }
    ],
    significance: "Natural expressions of Wu Wei demonstrate the effectiveness of non-interference and spontaneous action.",
    elements: [
      "Water flow",
      "Plant growth",
      "Animal behavior",
      "Weather patterns",
      "Seasonal changes",
      "Ecosystem balance",
      "Natural cycles",
      "Environmental wisdom"
    ],
    practices: [
      "Nature observation",
      "Flow following",
      "Natural timing",
      "Ecological awareness",
      "Seasonal alignment",
      "Environmental attunement",
      "Natural cultivation",
      "Wisdom gathering"
    ],
    recommendedReading: [
      {
        title: "The Way of Nature",
        author: "Alan Watts",
        description: "Exploration of natural Wu Wei principles",
        amazonLink: "https://www.amazon.com/Tao-Nature-Alan-Watts/dp/0394733118"
      }
    ]
  },
  {
    title: "Practical Application",
    description: "Understanding how to apply Wu Wei principles in daily life and activities.",
    keyPoints: [
      "Effortless action",
      "Natural response",
      "Skillful living",
      "Flow states",
      "Mindful presence",
      "Spontaneous wisdom",
      "Effective simplicity",
      "Natural leadership"
    ],
    historicalRefs: [
      {
        text: "Development of Wu Wei practices in various arts and skills.",
        source: "Traditional Arts Texts"
      },
      {
        text: "Application of Wu Wei principles in governance and management.",
        source: "Classical Administrative Texts"
      }
    ],
    significance: "Wu Wei practice leads to effective action, reduced stress, and natural accomplishment.",
    elements: [
      "Skillful action",
      "Natural timing",
      "Effortless flow",
      "Intuitive response",
      "Simple solutions",
      "Effective methods",
      "Natural leadership",
      "Harmonious relationships"
    ],
    practices: [
      "Mindful action",
      "Flow cultivation",
      "Natural timing",
      "Intuitive response",
      "Simplicity practice",
      "Effective management",
      "Harmonious leadership",
      "Skillful living"
    ],
    recommendedReading: [
      {
        title: "The Watercourse Way",
        author: "Alan Watts",
        description: "Practical application of Wu Wei principles",
        amazonLink: "https://www.amazon.com/Tao-Watercourse-Way-Alan-Watts/dp/0394733118"
      }
    ]
  },
  {
    title: "Modern Integration",
    description: "Exploring contemporary applications and understanding of Wu Wei principles.",
    keyPoints: [
      "Flow psychology",
      "Mindful leadership",
      "Effective management",
      "Natural learning",
      "Stress reduction",
      "Peak performance",
      "Creative flow",
      "Sustainable practice"
    ],
    historicalRefs: [
      {
        text: "Integration of Wu Wei concepts with modern psychology and flow states.",
        source: "Contemporary Psychology Studies"
      },
      {
        text: "Application of Wu Wei principles in modern organizational theory.",
        source: "Management Research Literature"
      }
    ],
    significance: "Wu Wei principles offer valuable insights for modern life, work, and personal development.",
    elements: [
      "Flow states",
      "Natural leadership",
      "Effective methods",
      "Mindful presence",
      "Stress reduction",
      "Peak performance",
      "Creative process",
      "Sustainable practice"
    ],
    practices: [
      "Flow cultivation",
      "Mindful leadership",
      "Natural management",
      "Stress reduction",
      "Performance optimization",
      "Creative practice",
      "Sustainable living",
      "Personal development"
    ],
    recommendedReading: [
      {
        title: "Flow: The Psychology of Optimal Experience",
        author: "Mihaly Csikszentmihalyi",
        description: "Modern psychological perspective on flow states",
        amazonLink: "https://www.amazon.com/Flow-Psychology-Experience-Perennial-Classics/dp/0061339202"
      }
    ]
  }
]

export default function WuWeiPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Wu Wei in Taoist Theology</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the profound concept of Wu Wei, examining its nature as effortless action and non-interference, its manifestations in nature, practical applications, and modern relevance.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="philosophical" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="philosophical">Philosophical</TabsTrigger>
          <TabsTrigger value="natural">Natural</TabsTrigger>
          <TabsTrigger value="practical">Practical</TabsTrigger>
          <TabsTrigger value="modern">Modern</TabsTrigger>
        </TabsList>

        {wuWeiContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({philosophical: true, natural: true, practical: true, modern: true})[index]}>
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
              title: "Yin Yang",
              href: "/religion/taoism/theology/yin-yang"
            },
            {
              title: "Te (Virtue)",
              href: "/religion/taoism/theology/te"
            }
          ]}
        />
      </div>
    </div>
  )
} 