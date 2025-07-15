import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "The Tao | Taoist Theology",
  description: "Explore the profound concept of the Tao in Taoist theology, from its metaphysical foundations to practical applications, examining its role as the fundamental principle of existence and guide for spiritual cultivation.",
  keywords: "Tao, Dao, Way, Taoist theology, wu wei, non-action, natural way, cosmic principle, unity, harmony, spiritual cultivation, Chinese philosophy, metaphysics, mysticism"
}

interface TaoContent {
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

const taoContent: TaoContent[] = [
  {
    title: "Metaphysical Nature",
    description: "Understanding the Tao as the fundamental principle of existence and cosmic order.",
    keyPoints: [
      "Ineffable nature",
      "Primordial unity",
      "Source of being",
      "Cosmic principle",
      "Natural order",
      "Spontaneous emergence",
      "Dynamic balance",
      "Ultimate reality"
    ],
    historicalRefs: [
      {
        text: "Lao Tzu's foundational description in the Tao Te Ching: 'The Tao that can be spoken is not the eternal Tao.'",
        source: "Tao Te Ching, Chapter 1"
      },
      {
        text: "Chuang Tzu's exposition on the nature of Tao through paradox and allegory.",
        source: "Zhuangzi, Inner Chapters"
      }
    ],
    significance: "The Tao represents the ultimate source and principle underlying all existence and transformation.",
    elements: [
      "Non-being (wu)",
      "Being (you)",
      "Emptiness",
      "Fullness",
      "Change",
      "Constancy",
      "Mystery",
      "Manifestation"
    ],
    practices: [
      "Contemplation",
      "Silent meditation",
      "Nature observation",
      "Paradox reflection",
      "Direct perception",
      "Non-conceptual awareness",
      "Inner stillness",
      "Mystical intuition"
    ],
    recommendedReading: [
      {
        title: "The Tao of Physics",
        author: "Fritjof Capra",
        description: "Exploration of parallels between modern physics and Eastern mysticism",
        amazonLink: "https://www.amazon.com/Tao-Physics-Exploration-Parallels-Mysticism/dp/1590308352"
      }
    ]
  },
  {
    title: "Principles and Manifestations",
    description: "Examining how the Tao manifests through fundamental principles and natural phenomena.",
    keyPoints: [
      "Yin-Yang polarity",
      "Five elements",
      "Natural cycles",
      "Organic growth",
      "Spontaneous order",
      "Internal harmony",
      "Universal patterns",
      "Cosmic rhythms"
    ],
    historicalRefs: [
      {
        text: "Development of Yin-Yang theory in relation to Tao during the Warring States period.",
        source: "Historical Records of Chinese Philosophy"
      },
      {
        text: "Integration of Five Elements theory with Taoist cosmology in the Han dynasty.",
        source: "Han Dynasty Philosophical Texts"
      }
    ],
    significance: "Understanding the principles of Tao provides insight into natural law and harmonious living.",
    elements: [
      "Yin aspects",
      "Yang aspects",
      "Five phases",
      "Natural laws",
      "Cosmic patterns",
      "Seasonal cycles",
      "Life processes",
      "Energy flows"
    ],
    practices: [
      "Pattern observation",
      "Cycle awareness",
      "Energy cultivation",
      "Balance maintenance",
      "Natural alignment",
      "Rhythm attunement",
      "Element understanding",
      "Polarity recognition"
    ],
    recommendedReading: [
      {
        title: "The Web That Has No Weaver",
        author: "Ted Kaptchuk",
        description: "Understanding of Chinese medicine and Taoist principles",
        amazonLink: "https://www.amazon.com/Web-That-Has-Weaver-Understanding/dp/0809228408"
      }
    ]
  },
  {
    title: "Practical Application",
    description: "Understanding how to apply Tao principles in daily life and spiritual practice.",
    keyPoints: [
      "Wu-wei practice",
      "Natural action",
      "Effortless effort",
      "Spontaneous response",
      "Mindful living",
      "Harmonious relationships",
      "Spiritual cultivation",
      "Life navigation"
    ],
    historicalRefs: [
      {
        text: "Development of practical Taoist cultivation methods in the Tang Dynasty.",
        source: "Tang Dynasty Taoist Texts"
      },
      {
        text: "Systematization of internal alchemy practices based on Tao principles.",
        source: "Taoist Cultivation Records"
      }
    ],
    significance: "The practical application of Tao principles leads to harmony, effectiveness, and spiritual realization.",
    elements: [
      "Non-action",
      "Natural flow",
      "Spontaneity",
      "Adaptability",
      "Responsiveness",
      "Integration",
      "Balance",
      "Harmony"
    ],
    practices: [
      "Wu-wei cultivation",
      "Mindful action",
      "Natural response",
      "Flow alignment",
      "Energy practice",
      "Meditation",
      "Internal cultivation",
      "Life integration"
    ],
    recommendedReading: [
      {
        title: "Everyday Tao",
        author: "Deng Ming-Dao",
        description: "Practical application of Taoist principles in daily life",
        amazonLink: "https://www.amazon.com/Everyday-Tao-Living-Deng-Ming-Dao/dp/0062513958"
      }
    ]
  },
  {
    title: "Modern Interpretations",
    description: "Exploring contemporary understandings and applications of Tao principles.",
    keyPoints: [
      "Scientific parallels",
      "Psychological insights",
      "Ecological wisdom",
      "Leadership applications",
      "Health practices",
      "Creative expression",
      "Personal growth",
      "Social harmony"
    ],
    historicalRefs: [
      {
        text: "Integration of Tao concepts with modern physics and systems theory.",
        source: "Contemporary Scientific Literature"
      },
      {
        text: "Application of Taoist principles in modern psychology and therapy.",
        source: "Modern Psychological Studies"
      }
    ],
    significance: "Tao principles remain relevant and applicable to contemporary challenges and understanding.",
    elements: [
      "Systems thinking",
      "Holistic approach",
      "Quantum concepts",
      "Psychological aspects",
      "Ecological principles",
      "Social dynamics",
      "Health integration",
      "Creative processes"
    ],
    practices: [
      "Modern meditation",
      "Systems analysis",
      "Ecological awareness",
      "Holistic healing",
      "Creative flow",
      "Leadership style",
      "Personal development",
      "Social application"
    ],
    recommendedReading: [
      {
        title: "The Tao of Leadership",
        author: "John Heider",
        description: "Application of Taoist principles to modern leadership",
        amazonLink: "https://www.amazon.com/Tao-Leadership-Strategies-Success-Classics/dp/0893340790"
      }
    ]
  }
]

export default function TaoPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>The Tao in Taoist Theology</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the profound concept of the Tao, examining its nature as the fundamental principle of existence, its manifestations in natural law, practical applications, and modern interpretations.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="metaphysical" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="metaphysical">Metaphysical</TabsTrigger>
          <TabsTrigger value="principles">Principles</TabsTrigger>
          <TabsTrigger value="practical">Practical</TabsTrigger>
          <TabsTrigger value="modern">Modern</TabsTrigger>
        </TabsList>

        {taoContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({metaphysical: true, principles: true, practical: true, modern: true})[index]}>
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
              title: "Wu Wei",
              href: "/religion/taoism/theology/wu-wei"
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