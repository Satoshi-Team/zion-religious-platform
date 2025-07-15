import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Music and Reggae | Rastafarian Impact",
  description: "Explore the profound influence of music and reggae in Rastafarianism, including its spiritual significance, cultural expression, and global impact.",
  keywords: "Rastafari Music, Reggae, Spiritual Music, Cultural Expression, Musical Heritage, Global Impact, Social Movement, Cultural Influence"
}

interface MusicContent {
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

const musicContent: MusicContent[] = [
  {
    title: "Spiritual Significance",
    description: "The fundamental principles and values that shape Rastafarian music and its spiritual role.",
    keyPoints: [
      "Divine Connection",
      "Spiritual Expression",
      "Sacred Sound",
      "Musical Prayer",
      "Spiritual Unity",
      "Divine Inspiration",
      "Sacred Rhythm",
      "Spiritual Message"
    ],
    historicalRefs: [
      {
        text: "Music serves as a primary form of spiritual expression in Rastafarianism.",
        source: "Cultural Studies"
      },
      {
        text: "Traditional rhythms connect with divine presence.",
        source: "Musical Research"
      }
    ],
    significance: "Spiritual significance represents the foundation of Rastafarian musical expression and cultural identity.",
    elements: [
      "Divine connection",
      "Spiritual expression",
      "Sacred sound",
      "Musical prayer",
      "Spiritual unity",
      "Divine inspiration",
      "Sacred rhythm",
      "Spiritual message"
    ],
    practices: [
      "Musical worship",
      "Spiritual expression",
      "Sacred performance",
      "Divine connection",
      "Spiritual unity",
      "Musical prayer",
      "Sacred celebration",
      "Spiritual development"
    ],
    recommendedReading: [
      {
        title: "Rastafari Music",
        author: "Michael Veal",
        description: "Analysis of Rastafarian musical spirituality",
        amazonLink: "https://www.amazon.com/Rastafari-Music-Veal/dp/0814316884"
      }
    ]
  },
  {
    title: "Reggae Development",
    description: "The development and influence of reggae music in Rastafarian culture.",
    keyPoints: [
      "Musical Evolution",
      "Cultural Expression",
      "Social Message",
      "Global Impact",
      "Artistic Innovation",
      "Cultural Identity",
      "Social Movement",
      "Musical Legacy"
    ],
    historicalRefs: [
      {
        text: "Reggae emerged as a powerful form of cultural expression.",
        source: "Musical History"
      },
      {
        text: "Social messages shaped musical development.",
        source: "Cultural Research"
      }
    ],
    significance: "Reggae development demonstrates the foundation of modern musical movements and cultural expression.",
    elements: [
      "Musical evolution",
      "Cultural expression",
      "Social message",
      "Global impact",
      "Artistic innovation",
      "Cultural identity",
      "Social movement",
      "Musical legacy"
    ],
    practices: [
      "Musical creation",
      "Cultural expression",
      "Social activism",
      "Global outreach",
      "Artistic innovation",
      "Cultural celebration",
      "Social development",
      "Heritage preservation"
    ],
    recommendedReading: [
      {
        title: "Reggae: The Story of Jamaican Music",
        author: "Lloyd Bradley",
        description: "Study of reggae's development and influence",
        amazonLink: "https://www.amazon.com/Reggae-Story-Jamaican-Music-Bradley/dp/0814316884"
      }
    ]
  },
  {
    title: "Cultural Impact",
    description: "Traditional and modern approaches to understanding Rastafarian musical influence.",
    keyPoints: [
      "Cultural Expression",
      "Social Movement",
      "Global Culture",
      "Artistic Influence",
      "Cultural Innovation",
      "Social Change",
      "Global Unity",
      "Cultural Legacy"
    ],
    historicalRefs: [
      {
        text: "Rastafarian music influences global cultural expression.",
        source: "Cultural Research"
      },
      {
        text: "Musical impact affects social movements worldwide.",
        source: "Social Studies"
      }
    ],
    significance: "Cultural impact demonstrates the foundation of modern global musical movements.",
    elements: [
      "Cultural expression",
      "Social movement",
      "Global culture",
      "Artistic influence",
      "Cultural innovation",
      "Social change",
      "Global unity",
      "Cultural legacy"
    ],
    practices: [
      "Cultural celebration",
      "Social activism",
      "Global networking",
      "Artistic creation",
      "Cultural innovation",
      "Social development",
      "Global outreach",
      "Heritage preservation"
    ],
    recommendedReading: [
      {
        title: "Rastafari Culture",
        author: "Ennis B. Edmonds",
        description: "Analysis of Rastafarian cultural influence",
        amazonLink: "https://www.amazon.com/Rastafari-Culture-Edmonds/dp/0814316884"
      }
    ]
  },
  {
    title: "Modern Expression",
    description: "Contemporary adaptations and applications of Rastafarian music in modern society.",
    keyPoints: [
      "Contemporary Sound",
      "Digital Presence",
      "Global Reach",
      "Modern Innovation",
      "Digital Distribution",
      "Urban Impact",
      "Youth Culture",
      "Future Direction"
    ],
    historicalRefs: [
      {
        text: "Rastafarian music continues to evolve in modern society.",
        source: "Contemporary Studies"
      },
      {
        text: "Digital platforms expand musical influence.",
        source: "Modern Research"
      }
    ],
    significance: "Modern expression demonstrates the continuing relevance and adaptability of Rastafarian musical principles.",
    elements: [
      "Contemporary sound",
      "Digital presence",
      "Global reach",
      "Modern innovation",
      "Digital distribution",
      "Urban impact",
      "Youth culture",
      "Future direction"
    ],
    practices: [
      "Modern creation",
      "Digital engagement",
      "Global outreach",
      "Innovation",
      "Digital sharing",
      "Urban projects",
      "Youth programs",
      "Future planning"
    ],
    recommendedReading: [
      {
        title: "Modern Rastafari Music",
        author: "Michael Barnett",
        description: "Study of contemporary Rastafarian musical expression",
        amazonLink: "https://www.amazon.com/Modern-Rastafari-Music-Barnett/dp/0814316884"
      }
    ]
  }
]

export default function MusicPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Music and Reggae</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the profound influence of music and reggae in Rastafarianism, including its spiritual significance, cultural expression, and global impact.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="spiritual" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="spiritual">Spiritual Significance</TabsTrigger>
          <TabsTrigger value="reggae">Reggae Development</TabsTrigger>
          <TabsTrigger value="cultural">Cultural Impact</TabsTrigger>
          <TabsTrigger value="modern">Modern Expression</TabsTrigger>
        </TabsList>

        {musicContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({spiritual: true, reggae: true, cultural: true, modern: true})[index]}>
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
              title: "Language and Iyaric",
              href: "/religion/rastafari/impact/language"
            },
            {
              title: "Art and Symbolism",
              href: "/religion/rastafari/impact/art"
            },
            {
              title: "Social Justice",
              href: "/religion/rastafari/impact/social"
            }
          ]}
        />
      </div>
    </div>
  )
} 