import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Global Influence | Rastafarian Impact",
  description: "Explore the profound global influence of Rastafarianism, including its cultural spread, social impact, and worldwide significance.",
  keywords: "Rastafari Global Impact, Cultural Spread, Global Movement, Cultural Exchange, Global Heritage, Cultural Influence, Global Unity, Cultural Legacy"
}

interface GlobalContent {
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

const globalContent: GlobalContent[] = [
  {
    title: "Global Spread",
    description: "The development and expansion of Rastafarianism across the world.",
    keyPoints: [
      "Cultural Diffusion",
      "Global Movement",
      "Cultural Exchange",
      "Social Impact",
      "Global Unity",
      "Cultural Heritage",
      "Global Community",
      "Cultural Legacy"
    ],
    historicalRefs: [
      {
        text: "Rastafarianism spread globally through cultural and social movements.",
        source: "Global History"
      },
      {
        text: "Global expansion reflects cultural and spiritual values.",
        source: "Cultural Research"
      }
    ],
    significance: "Global spread represents the foundation of Rastafarian worldwide influence and cultural identity.",
    elements: [
      "Cultural diffusion",
      "Global movement",
      "Cultural exchange",
      "Social impact",
      "Global unity",
      "Cultural heritage",
      "Global community",
      "Cultural legacy"
    ],
    practices: [
      "Cultural sharing",
      "Global networking",
      "Cultural exchange",
      "Social development",
      "Community building",
      "Heritage preservation",
      "Global outreach",
      "Cultural development"
    ],
    recommendedReading: [
      {
        title: "Rastafari Global Impact",
        author: "Barry Chevannes",
        description: "Analysis of Rastafarian global spread",
        amazonLink: "https://www.amazon.com/Rastafari-Global-Impact-Chevannes/dp/0814316884"
      }
    ]
  },
  {
    title: "Cultural Exchange",
    description: "The interaction and influence between Rastafarian and global cultures.",
    keyPoints: [
      "Cultural Integration",
      "Global Influence",
      "Cultural Adaptation",
      "Social Exchange",
      "Cultural Innovation",
      "Global Unity",
      "Cultural Heritage",
      "Social Progress"
    ],
    historicalRefs: [
      {
        text: "Rastafarian culture influences global cultural expression.",
        source: "Cultural History"
      },
      {
        text: "Cultural exchange shapes global cultural development.",
        source: "Global Studies"
      }
    ],
    significance: "Cultural exchange demonstrates the unique character of Rastafarian global influence and its cultural importance.",
    elements: [
      "Cultural integration",
      "Global influence",
      "Cultural adaptation",
      "Social exchange",
      "Cultural innovation",
      "Global unity",
      "Cultural heritage",
      "Social progress"
    ],
    practices: [
      "Cultural sharing",
      "Global outreach",
      "Cultural adaptation",
      "Social interaction",
      "Cultural innovation",
      "Community building",
      "Heritage preservation",
      "Progress development"
    ],
    recommendedReading: [
      {
        title: "The Global Rastafari Movement",
        author: "Ennis B. Edmonds",
        description: "Study of Rastafarian cultural exchange",
        amazonLink: "https://www.amazon.com/Global-Rastafari-Movement-Edmonds/dp/0814316884"
      }
    ]
  },
  {
    title: "Global Impact",
    description: "The worldwide influence and significance of Rastafarian culture and values.",
    keyPoints: [
      "Cultural Influence",
      "Social Movement",
      "Global Unity",
      "Cultural Innovation",
      "Social Change",
      "Global Heritage",
      "Cultural Legacy",
      "Social Progress"
    ],
    historicalRefs: [
      {
        text: "Rastafarian influence shapes global cultural expression.",
        source: "Global Research"
      },
      {
        text: "Global impact affects cultural movements worldwide.",
        source: "Cultural Studies"
      }
    ],
    significance: "Global impact demonstrates the foundation of modern global cultural movements.",
    elements: [
      "Cultural influence",
      "Social movement",
      "Global unity",
      "Cultural innovation",
      "Social change",
      "Global heritage",
      "Cultural legacy",
      "Social progress"
    ],
    practices: [
      "Global outreach",
      "Cultural sharing",
      "Social activism",
      "Cultural innovation",
      "Social development",
      "Heritage preservation",
      "Global networking",
      "Progress building"
    ],
    recommendedReading: [
      {
        title: "Rastafari Culture",
        author: "Ennis B. Edmonds",
        description: "Analysis of Rastafarian global influence",
        amazonLink: "https://www.amazon.com/Rastafari-Culture-Edmonds/dp/0814316884"
      }
    ]
  },
  {
    title: "Modern Presence",
    description: "Contemporary developments and adaptations of Rastafarian global influence.",
    keyPoints: [
      "Digital Presence",
      "Global Reach",
      "Modern Innovation",
      "Digital Culture",
      "Urban Impact",
      "Youth Culture",
      "Future Direction",
      "Cultural Adaptation"
    ],
    historicalRefs: [
      {
        text: "Rastafarian influence continues to evolve in modern society.",
        source: "Contemporary Studies"
      },
      {
        text: "Digital platforms expand global influence.",
        source: "Modern Research"
      }
    ],
    significance: "Modern presence demonstrates the continuing relevance and adaptability of Rastafarian global principles.",
    elements: [
      "Digital presence",
      "Global reach",
      "Modern innovation",
      "Digital culture",
      "Urban impact",
      "Youth culture",
      "Future direction",
      "Cultural adaptation"
    ],
    practices: [
      "Digital engagement",
      "Global outreach",
      "Modern creation",
      "Digital sharing",
      "Urban projects",
      "Youth programs",
      "Future planning",
      "Cultural development"
    ],
    recommendedReading: [
      {
        title: "Modern Rastafari Global Impact",
        author: "Michael Barnett",
        description: "Study of contemporary Rastafarian global influence",
        amazonLink: "https://www.amazon.com/Modern-Rastafari-Global-Impact-Barnett/dp/0814316884"
      }
    ]
  }
]

export default function GlobalPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Global Influence</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the profound global influence of Rastafarianism, including its cultural spread, social impact, and worldwide significance.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="spread" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="spread">Global Spread</TabsTrigger>
          <TabsTrigger value="exchange">Cultural Exchange</TabsTrigger>
          <TabsTrigger value="impact">Global Impact</TabsTrigger>
          <TabsTrigger value="modern">Modern Presence</TabsTrigger>
        </TabsList>

        {globalContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({spread: true, exchange: true, impact: true, modern: true})[index]}>
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
              title: "Social Justice",
              href: "/religion/rastafari/impact/social"
            },
            {
              title: "Art and Symbolism",
              href: "/religion/rastafari/impact/art"
            },
            {
              title: "Language and Iyaric",
              href: "/religion/rastafari/impact/language"
            }
          ]}
        />
      </div>
    </div>
  )
} 