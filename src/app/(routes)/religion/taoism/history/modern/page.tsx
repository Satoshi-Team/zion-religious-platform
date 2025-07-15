import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Modern History | Taoist History",
  description: "Explore modern Taoist history from the late Qing Dynasty to the present (1840-present), examining its transformation, adaptation, globalization, and contemporary relevance.",
  keywords: "Modern Taoism, Contemporary Taoism, Chinese Religion, Religious Reform, Cultural Revolution, Taoist Revival, Global Taoism, Digital Age Taoism"
}

interface ModernContent {
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

const modernContent: ModernContent[] = [
  {
    title: "Late Qing Transformation",
    description: "Examining Taoism's adaptation and challenges during the late Qing Dynasty and Republican period (1840-1949).",
    keyPoints: [
      "Western influence",
      "Modernization pressures",
      "Religious reforms",
      "Intellectual responses",
      "Political changes",
      "Social upheaval",
      "Temple preservation",
      "Adaptation strategies"
    ],
    historicalRefs: [
      {
        text: "Chen Yingning's modernization of Inner Alchemy practices in the 1920s.",
        source: "Journal of Modern Chinese Religious History"
      },
      {
        text: "Formation of the Chinese Taoist Association in 1912.",
        source: "Republican Period Religious Records"
      }
    ],
    significance: "The late Qing and Republican period marked a critical transition as Taoism adapted to modernization while preserving traditional practices.",
    elements: [
      "Reform movements",
      "Modern interpretations",
      "Scientific integration",
      "Political adaptation",
      "Social engagement",
      "Educational reform",
      "Temple management",
      "Cultural preservation"
    ],
    practices: [
      "Modern cultivation",
      "Adapted rituals",
      "Public education",
      "Social services",
      "Political navigation",
      "Cultural preservation",
      "Temple maintenance",
      "Community outreach"
    ],
    recommendedReading: [
      {
        title: "Taoism in the Modern World",
        author: "Kristofer Schipper",
        description: "Analysis of Taoism's adaptation to modernity",
        amazonLink: "https://www.amazon.com/Taoism-Modern-World-Kristofer-Schipper/dp/0231067054"
      }
    ]
  },
  {
    title: "Communist Era Changes",
    description: "Analyzing Taoism's experience during the establishment of the People's Republic and the Cultural Revolution (1949-1976).",
    keyPoints: [
      "Political pressure",
      "Cultural Revolution",
      "Temple destruction",
      "Underground practice",
      "Survival strategies",
      "Textual preservation",
      "Lineage maintenance",
      "Overseas transmission"
    ],
    historicalRefs: [
      {
        text: "Closure of White Cloud Temple during the Cultural Revolution (1966-1976).",
        source: "Chinese Religious Policy Documents"
      },
      {
        text: "Establishment of the Chinese Taoist Association under state supervision in 1957.",
        source: "Modern Chinese Religious Organizations"
      }
    ],
    significance: "The Communist era represented both severe challenges and remarkable resilience for Taoist traditions.",
    elements: [
      "Political adaptation",
      "Underground networks",
      "Preservation efforts",
      "Diaspora formation",
      "Lineage protection",
      "Cultural resistance",
      "International connections",
      "Revival preparation"
    ],
    practices: [
      "Private cultivation",
      "Hidden transmission",
      "Adapted rituals",
      "Overseas practice",
      "Text preservation",
      "Lineage protection",
      "Community support",
      "Cultural maintenance"
    ],
    recommendedReading: [
      {
        title: "Religion in China Under Communism",
        author: "Holmes Welch",
        description: "Study of religious policy and practice in Communist China",
        amazonLink: "https://www.amazon.com/Religion-China-Communism-Holmes-Welch/dp/0674755308"
      }
    ]
  },
  {
    title: "Contemporary Revival",
    description: "Exploring the revival and transformation of Taoism in post-reform China (1976-present).",
    keyPoints: [
      "Temple reconstruction",
      "Organizational revival",
      "Tourism development",
      "Academic interest",
      "Government support",
      "Cultural heritage",
      "Modern adaptation",
      "Global engagement"
    ],
    historicalRefs: [
      {
        text: "Reopening and renovation of the White Cloud Temple in 1980.",
        source: "Contemporary Chinese Religious Studies"
      },
      {
        text: "Establishment of Taoist academic programs at Chinese universities in the 1990s.",
        source: "Chinese Religious Education Records"
      }
    ],
    significance: "The contemporary revival period has seen Taoism's remarkable resurgence and adaptation to modern conditions.",
    elements: [
      "Temple restoration",
      "Academic research",
      "Tourist development",
      "Cultural programs",
      "Government relations",
      "International exchange",
      "Modern education",
      "Digital presence"
    ],
    practices: [
      "Public ceremonies",
      "Tourist services",
      "Academic study",
      "Cultural events",
      "Heritage preservation",
      "International exchange",
      "Digital engagement",
      "Community service"
    ],
    recommendedReading: [
      {
        title: "Taoism in the Twenty-First Century",
        author: "David A. Palmer",
        description: "Analysis of contemporary Taoist revival and adaptation",
        amazonLink: "https://www.amazon.com/Taoism-Twenty-First-Century-David-Palmer/dp/0520289242"
      }
    ]
  },
  {
    title: "Global Expansion",
    description: "Examining Taoism's spread and adaptation in the global context.",
    keyPoints: [
      "International spread",
      "Western adaptation",
      "Cultural translation",
      "Digital presence",
      "Modern interpretation",
      "Global networks",
      "Cross-cultural dialogue",
      "Contemporary relevance"
    ],
    historicalRefs: [
      {
        text: "Establishment of the International Taoist Studies Association in 2005.",
        source: "Global Religious Organizations Directory"
      },
      {
        text: "Creation of major Taoist centers in Europe and North America since the 1990s.",
        source: "Western Taoist Organizations Records"
      }
    ],
    significance: "Taoism's global expansion has led to new interpretations and applications while maintaining traditional roots.",
    elements: [
      "Global networks",
      "Digital platforms",
      "Cultural adaptation",
      "Western integration",
      "Modern interpretation",
      "Environmental focus",
      "Health practices",
      "Interfaith dialogue"
    ],
    practices: [
      "Online teaching",
      "Global workshops",
      "Digital resources",
      "Cultural exchange",
      "Environmental activism",
      "Health programs",
      "Interfaith events",
      "Academic conferences"
    ],
    recommendedReading: [
      {
        title: "Global Taoism",
        author: "Livia Kohn",
        description: "Study of Taoism's global spread and adaptation",
        amazonLink: "https://www.amazon.com/Global-Taoism-Livia-Kohn/dp/1931483280"
      }
    ]
  }
]

export default function ModernPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Modern Period in Taoist History</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore modern Taoist history from the late Qing Dynasty to the present (1840-present), examining its transformation, adaptation, globalization, and contemporary relevance.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="late-qing" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="late-qing">Late Qing</TabsTrigger>
          <TabsTrigger value="communist">Communist Era</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
          <TabsTrigger value="global">Global</TabsTrigger>
        </TabsList>

        {modernContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({"late-qing": true, "communist": true, "contemporary": true, "global": true})[index]}>
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
              title: "Tang-Song Period",
              href: "/religion/taoism/history/tang-song"
            },
            {
              title: "Contemporary Practice",
              href: "/religion/taoism/practice/contemporary"
            },
            {
              title: "Global Impact",
              href: "/religion/taoism/impact/global"
            }
          ]}
        />
      </div>
    </div>
  )
} 