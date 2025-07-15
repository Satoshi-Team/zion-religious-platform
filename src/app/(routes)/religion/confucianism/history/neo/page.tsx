import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Neo-Confucianism | Confucian History",
  description: "Explore Neo-Confucianism (960-1911 CE), the renaissance of Confucian thought that integrated Buddhist and Daoist insights while maintaining classical foundations.",
  keywords: "Neo-Confucianism, Song Dynasty, Zhu Xi, Wang Yangming, Li Principle, School of Mind, School of Principle, Chinese Philosophy"
}

interface NeoContent {
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

const neoContent: NeoContent[] = [
  {
    title: "Song Renaissance",
    description: "The revival and transformation of Confucianism during the Song Dynasty (960-1279 CE), integrating Buddhist and Daoist insights.",
    keyPoints: [
      "Zhou Dunyi (1017-1073)",
      "Cheng Yi (1033-1107)",
      "Cheng Hao (1032-1085)",
      "Zhu Xi (1130-1200)",
      "Buddhist influence",
      "Daoist elements",
      "Metaphysical framework",
      "Educational reform"
    ],
    historicalRefs: [
      {
        text: "The Supreme Ultimate generates the Two Forces.",
        source: "Explanation of the Diagram of the Supreme Ultimate 太極圖說"
      },
      {
        text: "Learning without thought is labor lost; thought without learning is perilous.",
        source: "Zhu Xi's Commentary on the Analects"
      }
    ],
    significance: "The Song Renaissance revitalized Confucianism by developing a sophisticated metaphysical system while preserving classical moral teachings.",
    elements: [
      "Metaphysical principles",
      "Moral cultivation",
      "Educational methods",
      "Textual studies",
      "Philosophical synthesis",
      "Cultural integration",
      "Political theory",
      "Social ethics"
    ],
    practices: [
      "Meditation",
      "Text study",
      "Moral reflection",
      "Ritual performance",
      "Educational reform",
      "Philosophical debate",
      "Cultural preservation",
      "Social engagement"
    ],
    recommendedReading: [
      {
        title: "Zhu Xi's Neo-Confucianism",
        author: "Daniel K. Gardner",
        description: "Study of Song Dynasty Neo-Confucian thought",
        amazonLink: "https://www.amazon.com/Zhu-Xis-Neo-Confucianism-Daniel-Gardner/dp/0674436857"
      }
    ]
  },
  {
    title: "Philosophical Systems",
    description: "The development of comprehensive philosophical systems, particularly the School of Principle (理學) and the School of Mind (心學).",
    keyPoints: [
      "Li (理) Principle",
      "Qi (氣) Material Force",
      "Xin (心) Mind-Heart",
      "Nature (性) Theory",
      "Investigation of Things",
      "Moral Knowledge",
      "Self-Cultivation",
      "Unity of Knowledge"
    ],
    historicalRefs: [
      {
        text: "Principle is one but its manifestations are many.",
        source: "Zhu Xi's Collected Writings"
      },
      {
        text: "The mind is principle.",
        source: "Wang Yangming's Instructions for Practical Living"
      }
    ],
    significance: "Neo-Confucian philosophical systems provided comprehensive frameworks for understanding reality, knowledge, and moral cultivation.",
    elements: [
      "Metaphysical theory",
      "Epistemology",
      "Moral philosophy",
      "Psychological insights",
      "Educational theory",
      "Cultural synthesis",
      "Political thought",
      "Social philosophy"
    ],
    practices: [
      "Philosophical inquiry",
      "Mental cultivation",
      "Moral practice",
      "Educational methods",
      "Textual study",
      "Meditation techniques",
      "Social application",
      "Political service"
    ],
    recommendedReading: [
      {
        title: "Neo-Confucian Philosophy",
        author: "Wing-tsit Chan",
        description: "Comprehensive study of Neo-Confucian thought",
        amazonLink: "https://www.amazon.com/Neo-Confucian-Philosophy-Wing-tsit-Chan/dp/0691020167"
      }
    ]
  },
  {
    title: "Cultural Integration",
    description: "The integration of Neo-Confucian thought with various aspects of East Asian culture and society.",
    keyPoints: [
      "Buddhist synthesis",
      "Daoist integration",
      "Educational system",
      "Social institutions",
      "Political theory",
      "Moral education",
      "Cultural practices",
      "Regional variations"
    ],
    historicalRefs: [
      {
        text: "The Three Teachings are ultimately one.",
        source: "Neo-Confucian Anthology"
      },
      {
        text: "In learning, there must be cultural refinement.",
        source: "Wang Yangming's Records of Instructions"
      }
    ],
    significance: "Neo-Confucianism became the dominant intellectual and cultural force across East Asia, shaping education, politics, and society.",
    elements: [
      "Cultural synthesis",
      "Educational system",
      "Social structure",
      "Political theory",
      "Moral framework",
      "Ritual practices",
      "Literary traditions",
      "Artistic expression"
    ],
    practices: [
      "Cultural activities",
      "Educational methods",
      "Social ceremonies",
      "Political service",
      "Moral instruction",
      "Artistic creation",
      "Literary composition",
      "Ritual performance"
    ],
    recommendedReading: [
      {
        title: "Neo-Confucianism in History",
        author: "Peter Bol",
        description: "Study of Neo-Confucianism's cultural impact",
        amazonLink: "https://www.amazon.com/Neo-Confucianism-History-Peter-Bol/dp/0674024559"
      }
    ]
  },
  {
    title: "Global Influence",
    description: "The spread and influence of Neo-Confucian thought beyond China to Korea, Japan, Vietnam, and the modern world.",
    keyPoints: [
      "Korean adoption",
      "Japanese adaptation",
      "Vietnamese integration",
      "Modern relevance",
      "Western interaction",
      "Contemporary applications",
      "Global dialogue",
      "Cultural exchange"
    ],
    historicalRefs: [
      {
        text: "The Way of the sages knows no national boundaries.",
        source: "Korean Neo-Confucian Yi Hwang"
      },
      {
        text: "Learning extends to all under Heaven.",
        source: "Japanese Neo-Confucian Hayashi Razan"
      }
    ],
    significance: "Neo-Confucian thought transcended cultural boundaries to influence intellectual and social development across East Asia and beyond.",
    elements: [
      "Cultural transmission",
      "Philosophical adaptation",
      "Educational systems",
      "Political thought",
      "Social structures",
      "Moral frameworks",
      "International relations",
      "Modern applications"
    ],
    practices: [
      "Cross-cultural learning",
      "Educational exchange",
      "Philosophical dialogue",
      "Cultural preservation",
      "Modern adaptation",
      "Global engagement",
      "Social application",
      "Ethical practice"
    ],
    recommendedReading: [
      {
        title: "The Korean Neo-Confucianism",
        author: "JaHyun Kim Haboush",
        description: "Study of Neo-Confucianism in Korea",
        amazonLink: "https://www.amazon.com/Korean-Neo-Confucianism-JaHyun-Kim-Haboush/dp/0791417441"
      }
    ]
  }
]

export default function NeoPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Neo-Confucianism</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore Neo-Confucianism (960-1911 CE), the renaissance of Confucian thought that integrated Buddhist and Daoist insights while maintaining classical foundations.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="renaissance" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="renaissance">Renaissance</TabsTrigger>
          <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
          <TabsTrigger value="culture">Culture</TabsTrigger>
          <TabsTrigger value="influence">Influence</TabsTrigger>
        </TabsList>

        {neoContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({renaissance: true, philosophy: true, culture: true, influence: true})[index]}>
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
              title: "Han Synthesis",
              href: "/religion/confucianism/history/han"
            },
            {
              title: "Modern Revival",
              href: "/religion/confucianism/history/modern"
            },
            {
              title: "Contemporary",
              href: "/religion/confucianism/history/contemporary"
            }
          ]}
        />
      </div>
    </div>
  )
} 