import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Global Spread | Rastafarian History",
  description: "Explore the global spread of Rastafarianism, including its development in Jamaica, international expansion, cultural influence, and modern global presence.",
  keywords: "Rastafari History, Global Movement, Cultural Spread, International Development, Religious Expansion, Cultural Influence, Global Impact, Modern Presence"
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
    title: "Jamaican Origins",
    description: "The fundamental development and establishment of Rastafarianism in Jamaica.",
    keyPoints: [
      "Early Development",
      "Community Formation",
      "Cultural Roots",
      "Social Movement",
      "Religious Practice",
      "Cultural Expression",
      "Social Impact",
      "Historical Foundation"
    ],
    historicalRefs: [
      {
        text: "Rastafarianism emerged in Jamaica during the 1930s.",
        source: "Historical Records"
      },
      {
        text: "Early communities established foundational practices.",
        source: "Cultural Studies"
      }
    ],
    significance: "Jamaican origins represent the foundation of Rastafarian development and cultural expression.",
    elements: [
      "Community development",
      "Cultural formation",
      "Social organization",
      "Religious practice",
      "Cultural expression",
      "Social movement",
      "Historical roots",
      "Cultural foundation"
    ],
    practices: [
      "Community building",
      "Cultural preservation",
      "Social organization",
      "Religious practice",
      "Cultural expression",
      "Social activism",
      "Historical study",
      "Heritage preservation"
    ],
    recommendedReading: [
      {
        title: "Rastafari: Roots and Ideology",
        author: "Barry Chevannes",
        description: "Analysis of Rastafarian development in Jamaica",
        amazonLink: "https://www.amazon.com/Rastafari-Roots-Ideology-Chevannes/dp/0814316884"
      }
    ]
  },
  {
    title: "International Expansion",
    description: "The development and influence of Rastafarianism's spread beyond Jamaica.",
    keyPoints: [
      "Global Movement",
      "Cultural Exchange",
      "International Growth",
      "Cross-Cultural Impact",
      "Global Unity",
      "Cultural Adaptation",
      "International Influence",
      "Global Development"
    ],
    historicalRefs: [
      {
        text: "Rastafarianism spread globally through cultural exchange.",
        source: "Global Studies"
      },
      {
        text: "International communities developed unique expressions.",
        source: "Cultural Research"
      }
    ],
    significance: "International expansion demonstrates the universal appeal and adaptability of Rastafarian principles.",
    elements: [
      "Global movement",
      "Cultural exchange",
      "International growth",
      "Cross-cultural impact",
      "Global unity",
      "Cultural adaptation",
      "International influence",
      "Global development"
    ],
    practices: [
      "Global networking",
      "Cultural exchange",
      "International outreach",
      "Cross-cultural dialogue",
      "Global unity",
      "Cultural adaptation",
      "International collaboration",
      "Global development"
    ],
    recommendedReading: [
      {
        title: "Global Rastafari",
        author: "Michael Barnett",
        description: "Study of Rastafarian global spread",
        amazonLink: "https://www.amazon.com/Global-Rastafari-Barnett/dp/0814316884"
      }
    ]
  },
  {
    title: "Cultural Influence",
    description: "Traditional and modern approaches to understanding Rastafarian cultural impact.",
    keyPoints: [
      "Cultural Expression",
      "Artistic Impact",
      "Social Movement",
      "Global Culture",
      "Cultural Innovation",
      "Artistic Development",
      "Social Change",
      "Cultural Legacy"
    ],
    historicalRefs: [
      {
        text: "Rastafarian culture influenced global artistic expression.",
        source: "Cultural Research"
      },
      {
        text: "Cultural impact affected global social movements.",
        source: "Social Studies"
      }
    ],
    significance: "Cultural influence demonstrates the foundation of modern global cultural movements.",
    elements: [
      "Cultural expression",
      "Artistic impact",
      "Social movement",
      "Global culture",
      "Cultural innovation",
      "Artistic development",
      "Social change",
      "Cultural legacy"
    ],
    practices: [
      "Cultural celebration",
      "Artistic creation",
      "Social activism",
      "Global networking",
      "Cultural innovation",
      "Artistic expression",
      "Social development",
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
    title: "Modern Presence",
    description: "Contemporary adaptations and applications of Rastafarianism in modern global society.",
    keyPoints: [
      "Contemporary Movement",
      "Digital Presence",
      "Global Community",
      "Modern Expression",
      "Digital Outreach",
      "Urban Impact",
      "Global Unity",
      "Modern Development"
    ],
    historicalRefs: [
      {
        text: "Rastafarianism continues to evolve in modern society.",
        source: "Contemporary Studies"
      },
      {
        text: "Digital platforms facilitate global connections.",
        source: "Modern Research"
      }
    ],
    significance: "Modern presence demonstrates the continuing relevance of Rastafarian principles in contemporary society.",
    elements: [
      "Contemporary movement",
      "Digital presence",
      "Global community",
      "Modern expression",
      "Digital outreach",
      "Urban impact",
      "Global unity",
      "Modern development"
    ],
    practices: [
      "Digital engagement",
      "Global networking",
      "Modern expression",
      "Digital tools",
      "Urban projects",
      "Global outreach",
      "Contemporary practice",
      "Modern development"
    ],
    recommendedReading: [
      {
        title: "Modern Rastafari Movement",
        author: "Neil J. Savishinsky",
        description: "Study of contemporary Rastafarian development",
        amazonLink: "https://www.amazon.com/Modern-Rastafari-Movement-Savishinsky/dp/0814316884"
      }
    ]
  }
]

export default function GlobalPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Global Spread</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the global spread of Rastafarianism, including its development in Jamaica, international expansion, cultural influence, and modern global presence.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="jamaican" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="jamaican">Jamaican Origins</TabsTrigger>
          <TabsTrigger value="international">International Expansion</TabsTrigger>
          <TabsTrigger value="cultural">Cultural Influence</TabsTrigger>
          <TabsTrigger value="modern">Modern Presence</TabsTrigger>
        </TabsList>

        {globalContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({jamaican: true, international: true, cultural: true, modern: true})[index]}>
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
              title: "Origins",
              href: "/religion/rastafari/history/origins"
            },
            {
              title: "Marcus Garvey",
              href: "/religion/rastafari/history/garvey"
            },
            {
              title: "Haile Selassie",
              href: "/religion/rastafari/history/selassie"
            }
          ]}
        />
      </div>
    </div>
  )
} 