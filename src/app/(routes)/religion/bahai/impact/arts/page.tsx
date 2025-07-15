import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Impact on Arts | Bahá'í Faith",
  description: "Explore the profound influence of the Bahá'í Faith on artistic expression, from visual arts and music to calligraphy and performing arts, reflecting principles of unity and spiritual elevation.",
  keywords: "Bahá'í Arts, Sacred Music, Calligraphy, Visual Arts, Performing Arts, Cultural Expression, Devotional Art, Sacred Geometry, Unity in Diversity"
}

interface ArtsContent {
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

const artsContent: ArtsContent[] = [
  {
    title: "Visual Arts and Sacred Geometry",
    description: "The development and expression of Bahá'í-inspired visual arts, incorporating sacred geometry, calligraphy, and symbolic representation.",
    keyPoints: [
      "Sacred geometric patterns",
      "Calligraphic traditions",
      "Symbol integration",
      "Cultural diversity",
      "Contemporary adaptations",
      "Nature-inspired designs",
      "Unity principles",
      "Spiritual symbolism"
    ],
    historicalRefs: [
      {
        text: "Guidance on art in Writings of Bahá'u'lláh.",
        source: "Bahá'u'lláh and the New Era"
      },
      {
        text: "Development of artistic expression in Messages of Shoghi Effendi.",
        source: "The Advent of Divine Justice"
      }
    ],
    significance: "Visual arts in the Bahá'í Faith serve as a bridge between spiritual truth and material beauty, expressing unity in diversity through artistic creation.",
    elements: [
      "Geometric designs",
      "Calligraphic styles",
      "Color symbolism",
      "Natural motifs",
      "Cultural elements",
      "Sacred symbols",
      "Unity patterns",
      "Spiritual themes"
    ],
    practices: [
      "Sacred art creation",
      "Exhibition planning",
      "Workshop facilitation",
      "Cultural integration",
      "Symbol study",
      "Technique development",
      "Community engagement",
      "Educational programs"
    ],
    recommendedReading: [
      {
        title: "The Art of the Bahá'í Faith",
        author: "Anne Gordon Perry",
        description: "Comprehensive study of Bahá'í visual arts and symbolism",
        amazonLink: "https://www.amazon.com/Art-Bahai-Faith-Gordon-Perry/dp/0853984425"
      }
    ]
  },
  {
    title: "Music and Sacred Sound",
    description: "The influence of Bahá'í teachings on musical composition, performance, and the development of devotional music across cultures.",
    keyPoints: [
      "Sacred chanting",
      "Devotional music",
      "Cultural integration",
      "Musical diversity",
      "Composition principles",
      "Performance practices",
      "Instrumental traditions",
      "Community singing"
    ],
    historicalRefs: [
      {
        text: "Guidance on music in The Kitáb-i-Aqdas.",
        source: "The Kitáb-i-Aqdas"
      },
      {
        text: "Musical development in early Bahá'í communities.",
        source: "The Dawn-Breakers"
      }
    ],
    significance: "Music serves as a ladder for the soul, combining spiritual elevation with cultural expression in the Bahá'í Faith.",
    elements: [
      "Sacred texts",
      "Melodic patterns",
      "Rhythmic elements",
      "Cultural styles",
      "Instrumental use",
      "Vocal techniques",
      "Devotional settings",
      "Performance spaces"
    ],
    practices: [
      "Composition development",
      "Performance training",
      "Cultural adaptation",
      "Community singing",
      "Musical education",
      "Recording projects",
      "Festival organization",
      "Workshop facilitation"
    ],
    recommendedReading: [
      {
        title: "Music, Devotions, and Mashriqu'l-Adhkár",
        author: "R. Jackson Armstrong-Ingram",
        description: "Study of music in Bahá'í worship and community life",
        amazonLink: "https://www.amazon.com/Music-Devotions-Mashriqu-l-Adhkar-Armstrong-Ingram/dp/0853983626"
      }
    ]
  },
  {
    title: "Performing Arts",
    description: "The development of Bahá'í-inspired theater, dance, and other performing arts that express spiritual principles through movement and dramatic presentation.",
    keyPoints: [
      "Dramatic presentations",
      "Sacred dance",
      "Cultural performances",
      "Story-telling traditions",
      "Youth programs",
      "Festival productions",
      "Community theater",
      "Educational drama"
    ],
    historicalRefs: [
      {
        text: "Guidance on drama and performance in Bahá'í World volumes.",
        source: "The Bahá'í World"
      },
      {
        text: "Development of performing arts in Five Year Plan messages.",
        source: "Five Year Plan Messages"
      }
    ],
    significance: "Performing arts serve as a powerful medium for expressing Bahá'í teachings and building community through collaborative artistic creation.",
    elements: [
      "Dramatic scripts",
      "Movement design",
      "Cultural elements",
      "Educational themes",
      "Youth focus",
      "Community participation",
      "Sacred stories",
      "Historical narratives"
    ],
    practices: [
      "Production planning",
      "Performance training",
      "Workshop development",
      "Community involvement",
      "Youth engagement",
      "Cultural consultation",
      "Festival organization",
      "Educational integration"
    ],
    recommendedReading: [
      {
        title: "Drama and the Bahá'í Faith",
        author: "Mary Hanford Ford",
        description: "Study of dramatic arts in Bahá'í community life",
        amazonLink: "https://www.amazon.com/Drama-Bahai-Faith-Hanford-Ford/dp/0853984441"
      }
    ]
  },
  {
    title: "Literary and Poetic Arts",
    description: "The influence of Bahá'í teachings on literature, poetry, and creative writing, fostering spiritual and artistic expression through the written word.",
    keyPoints: [
      "Sacred poetry",
      "Narrative writing",
      "Translation work",
      "Cultural stories",
      "Youth literature",
      "Historical accounts",
      "Creative expression",
      "Educational materials"
    ],
    historicalRefs: [
      {
        text: "Literary traditions in early Bahá'í history.",
        source: "God Passes By"
      },
      {
        text: "Development of Bahá'í literature in various cultures.",
        source: "Century of Light"
      }
    ],
    significance: "Literary arts provide a means for exploring and expressing spiritual truths while preserving and sharing Bahá'í history and teachings.",
    elements: [
      "Poetic forms",
      "Narrative styles",
      "Sacred texts",
      "Cultural expressions",
      "Historical accounts",
      "Youth materials",
      "Educational content",
      "Creative writing"
    ],
    practices: [
      "Writing workshops",
      "Publication development",
      "Translation projects",
      "Literary events",
      "Youth programs",
      "Cultural adaptation",
      "Editorial work",
      "Archive preservation"
    ],
    recommendedReading: [
      {
        title: "Bahá'í Literature and Poetry",
        author: "Robert Hayden",
        description: "Study of literary arts in the Bahá'í Faith",
        amazonLink: "https://www.amazon.com/Bahai-Literature-Poetry-Robert-Hayden/dp/0853984468"
      }
    ]
  }
]

export default function ArtsPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Impact on Arts</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the profound influence of the Bahá'í Faith on artistic expression, from visual arts and music to performing arts and literature, reflecting principles of unity and spiritual elevation.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="visual" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="visual">Visual Arts</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="performing">Performing</TabsTrigger>
          <TabsTrigger value="literary">Literary</TabsTrigger>
        </TabsList>

        {artsContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({visual: true, music: true, performing: true, literary: true})[index]}>
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
              title: "Impact on Architecture",
              href: "/religion/bahai/impact/architecture"
            },
            {
              title: "Impact on Literature",
              href: "/religion/bahai/impact/literature"
            },
            {
              title: "Cultural Expression",
              href: "/religion/bahai/culture/expression"
            }
          ]}
        />
      </div>
    </div>
  )
} 