import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Art and Symbolism | Rastafarian Impact",
  description: "Explore the rich artistic traditions and symbolism of Rastafarianism, including its spiritual significance, cultural expression, and visual heritage.",
  keywords: "Rastafari Art, Cultural Symbols, Visual Heritage, Spiritual Art, Cultural Expression, Artistic Heritage, Cultural Identity, Visual Impact"
}

interface ArtContent {
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

const artContent: ArtContent[] = [
  {
    title: "Visual Symbols",
    description: "The fundamental symbols and visual elements that represent Rastafarian beliefs and values.",
    keyPoints: [
      "Lion of Judah",
      "Ethiopian Colors",
      "Dreadlocks",
      "Sacred Images",
      "Cultural Icons",
      "Spiritual Symbols",
      "Visual Identity",
      "Cultural Heritage"
    ],
    historicalRefs: [
      {
        text: "Visual symbols emerged as powerful expressions of Rastafarian identity.",
        source: "Art History"
      },
      {
        text: "Symbolic elements reflect spiritual and cultural values.",
        source: "Cultural Research"
      }
    ],
    significance: "Visual symbols represent the foundation of Rastafarian artistic expression and cultural identity.",
    elements: [
      "Lion of Judah",
      "Ethiopian colors",
      "Dreadlocks",
      "Sacred images",
      "Cultural icons",
      "Spiritual symbols",
      "Visual identity",
      "Cultural heritage"
    ],
    practices: [
      "Symbol creation",
      "Visual expression",
      "Cultural representation",
      "Spiritual art",
      "Cultural celebration",
      "Heritage preservation",
      "Community building",
      "Identity development"
    ],
    recommendedReading: [
      {
        title: "Rastafari Art",
        author: "Barry Chevannes",
        description: "Analysis of Rastafarian visual symbolism",
        amazonLink: "https://www.amazon.com/Rastafari-Art-Chevannes/dp/0814316884"
      }
    ]
  },
  {
    title: "Artistic Traditions",
    description: "The development and practice of traditional Rastafarian art forms.",
    keyPoints: [
      "Traditional Art",
      "Cultural Expression",
      "Artistic Heritage",
      "Visual Culture",
      "Creative Practice",
      "Cultural Innovation",
      "Artistic Identity",
      "Heritage Preservation"
    ],
    historicalRefs: [
      {
        text: "Artistic traditions reflect cultural and spiritual values.",
        source: "Art History"
      },
      {
        text: "Traditional art forms carry deep cultural meaning.",
        source: "Cultural Studies"
      }
    ],
    significance: "Artistic traditions demonstrate the unique character of Rastafarian visual culture and its cultural importance.",
    elements: [
      "Traditional art",
      "Cultural expression",
      "Artistic heritage",
      "Visual culture",
      "Creative practice",
      "Cultural innovation",
      "Artistic identity",
      "Heritage preservation"
    ],
    practices: [
      "Art creation",
      "Cultural expression",
      "Heritage practice",
      "Visual communication",
      "Creative development",
      "Cultural innovation",
      "Identity expression",
      "Heritage sharing"
    ],
    recommendedReading: [
      {
        title: "The Art of Rastafari",
        author: "Carolyn Cooper",
        description: "Study of Rastafarian artistic traditions",
        amazonLink: "https://www.amazon.com/Art-Rastafari-Cooper/dp/0814316884"
      }
    ]
  },
  {
    title: "Cultural Impact",
    description: "The influence of Rastafarian art and symbolism on global culture.",
    keyPoints: [
      "Global Influence",
      "Cultural Exchange",
      "Artistic Movement",
      "Visual Impact",
      "Cultural Innovation",
      "Social Change",
      "Global Unity",
      "Cultural Legacy"
    ],
    historicalRefs: [
      {
        text: "Rastafarian art influences global cultural expression.",
        source: "Cultural Research"
      },
      {
        text: "Visual impact affects artistic movements worldwide.",
        source: "Art History"
      }
    ],
    significance: "Cultural impact demonstrates the foundation of modern global artistic movements.",
    elements: [
      "Global influence",
      "Cultural exchange",
      "Artistic movement",
      "Visual impact",
      "Cultural innovation",
      "Social change",
      "Global unity",
      "Cultural legacy"
    ],
    practices: [
      "Global outreach",
      "Cultural sharing",
      "Artistic exchange",
      "Visual communication",
      "Cultural innovation",
      "Social development",
      "Global networking",
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
    description: "Contemporary developments and adaptations of Rastafarian art and symbolism.",
    keyPoints: [
      "Contemporary Art",
      "Digital Expression",
      "Global Reach",
      "Modern Innovation",
      "Digital Art",
      "Urban Expression",
      "Youth Culture",
      "Future Direction"
    ],
    historicalRefs: [
      {
        text: "Rastafarian art continues to evolve in modern society.",
        source: "Contemporary Studies"
      },
      {
        text: "Digital platforms expand artistic influence.",
        source: "Modern Research"
      }
    ],
    significance: "Modern expression demonstrates the continuing relevance and adaptability of Rastafarian artistic principles.",
    elements: [
      "Contemporary art",
      "Digital expression",
      "Global reach",
      "Modern innovation",
      "Digital art",
      "Urban expression",
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
        title: "Modern Rastafari Art",
        author: "Michael Barnett",
        description: "Study of contemporary Rastafarian artistic expression",
        amazonLink: "https://www.amazon.com/Modern-Rastafari-Art-Barnett/dp/0814316884"
      }
    ]
  }
]

export default function ArtPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Art and Symbolism</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the rich artistic traditions and symbolism of Rastafarianism, including its spiritual significance, cultural expression, and visual heritage.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="symbols" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="symbols">Visual Symbols</TabsTrigger>
          <TabsTrigger value="traditions">Artistic Traditions</TabsTrigger>
          <TabsTrigger value="cultural">Cultural Impact</TabsTrigger>
          <TabsTrigger value="modern">Modern Expression</TabsTrigger>
        </TabsList>

        {artContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({symbols: true, traditions: true, cultural: true, modern: true})[index]}>
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
              title: "Global Influence",
              href: "/religion/rastafari/impact/global"
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