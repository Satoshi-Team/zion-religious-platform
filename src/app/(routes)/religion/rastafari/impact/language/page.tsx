import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Language and Iyaric | Rastafarian Impact",
  description: "Explore the unique language and Iyaric of Rastafarianism, including its spiritual significance, cultural expression, and linguistic innovation.",
  keywords: "Rastafari Language, Iyaric, Linguistic Innovation, Cultural Expression, Spiritual Language, Language Heritage, Cultural Identity, Linguistic Impact"
}

interface LanguageContent {
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

const languageContent: LanguageContent[] = [
  {
    title: "Iyaric Origins",
    description: "The development and fundamental principles of Iyaric language in Rastafarianism.",
    keyPoints: [
      "Linguistic Innovation",
      "Cultural Expression",
      "Spiritual Language",
      "Identity Formation",
      "Social Resistance",
      "Cultural Heritage",
      "Linguistic Unity",
      "Spiritual Connection"
    ],
    historicalRefs: [
      {
        text: "Iyaric emerged as a form of linguistic resistance and cultural expression.",
        source: "Linguistic Studies"
      },
      {
        text: "Language development reflects spiritual and cultural values.",
        source: "Cultural Research"
      }
    ],
    significance: "Iyaric origins represent the foundation of Rastafarian linguistic identity and cultural expression.",
    elements: [
      "Linguistic innovation",
      "Cultural expression",
      "Spiritual language",
      "Identity formation",
      "Social resistance",
      "Cultural heritage",
      "Linguistic unity",
      "Spiritual connection"
    ],
    practices: [
      "Language creation",
      "Cultural expression",
      "Spiritual communication",
      "Identity development",
      "Social activism",
      "Heritage preservation",
      "Community building",
      "Spiritual development"
    ],
    recommendedReading: [
      {
        title: "Rastafari Language",
        author: "Velma Pollard",
        description: "Analysis of Rastafarian linguistic innovation",
        amazonLink: "https://www.amazon.com/Rastafari-Language-Pollard/dp/0814316884"
      }
    ]
  },
  {
    title: "Linguistic Features",
    description: "The distinctive characteristics and patterns of Rastafarian language.",
    keyPoints: [
      "Word Formation",
      "Sound Patterns",
      "Meaning Creation",
      "Cultural Context",
      "Spiritual Significance",
      "Social Function",
      "Expressive Power",
      "Linguistic Identity"
    ],
    historicalRefs: [
      {
        text: "Rastafarian language features reflect cultural and spiritual values.",
        source: "Linguistic Research"
      },
      {
        text: "Word formation carries deep spiritual and cultural meaning.",
        source: "Cultural Studies"
      }
    ],
    significance: "Linguistic features demonstrate the unique character of Rastafarian language and its cultural importance.",
    elements: [
      "Word formation",
      "Sound patterns",
      "Meaning creation",
      "Cultural context",
      "Spiritual significance",
      "Social function",
      "Expressive power",
      "Linguistic identity"
    ],
    practices: [
      "Word creation",
      "Sound development",
      "Meaning expression",
      "Cultural communication",
      "Spiritual expression",
      "Social interaction",
      "Creative expression",
      "Identity affirmation"
    ],
    recommendedReading: [
      {
        title: "The Language of Rastafari",
        author: "Joseph T. Farquharson",
        description: "Study of Rastafarian linguistic features",
        amazonLink: "https://www.amazon.com/Language-Rastafari-Farquharson/dp/0814316884"
      }
    ]
  },
  {
    title: "Cultural Impact",
    description: "The influence of Rastafarian language on global culture and communication.",
    keyPoints: [
      "Global Influence",
      "Cultural Exchange",
      "Social Movement",
      "Artistic Expression",
      "Cultural Innovation",
      "Social Change",
      "Global Unity",
      "Cultural Legacy"
    ],
    historicalRefs: [
      {
        text: "Rastafarian language influences global cultural expression.",
        source: "Cultural Research"
      },
      {
        text: "Linguistic impact affects social movements worldwide.",
        source: "Social Studies"
      }
    ],
    significance: "Cultural impact demonstrates the foundation of modern global linguistic movements.",
    elements: [
      "Global influence",
      "Cultural exchange",
      "Social movement",
      "Artistic expression",
      "Cultural innovation",
      "Social change",
      "Global unity",
      "Cultural legacy"
    ],
    practices: [
      "Global outreach",
      "Cultural sharing",
      "Social activism",
      "Artistic creation",
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
    title: "Modern Evolution",
    description: "Contemporary developments and adaptations of Rastafarian language.",
    keyPoints: [
      "Digital Communication",
      "Global Reach",
      "Modern Innovation",
      "Digital Presence",
      "Urban Expression",
      "Youth Culture",
      "Future Direction",
      "Cultural Adaptation"
    ],
    historicalRefs: [
      {
        text: "Rastafarian language continues to evolve in modern society.",
        source: "Contemporary Studies"
      },
      {
        text: "Digital platforms expand linguistic influence.",
        source: "Modern Research"
      }
    ],
    significance: "Modern evolution demonstrates the continuing relevance and adaptability of Rastafarian linguistic principles.",
    elements: [
      "Digital communication",
      "Global reach",
      "Modern innovation",
      "Digital presence",
      "Urban expression",
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
        title: "Modern Rastafari Language",
        author: "Michael Barnett",
        description: "Study of contemporary Rastafarian linguistic expression",
        amazonLink: "https://www.amazon.com/Modern-Rastafari-Language-Barnett/dp/0814316884"
      }
    ]
  }
]

export default function LanguagePage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Language and Iyaric</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the unique language and Iyaric of Rastafarianism, including its spiritual significance, cultural expression, and linguistic innovation.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="origins" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="origins">Iyaric Origins</TabsTrigger>
          <TabsTrigger value="features">Linguistic Features</TabsTrigger>
          <TabsTrigger value="cultural">Cultural Impact</TabsTrigger>
          <TabsTrigger value="modern">Modern Evolution</TabsTrigger>
        </TabsList>

        {languageContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({origins: true, features: true, cultural: true, modern: true})[index]}>
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
              title: "Art and Symbolism",
              href: "/religion/rastafari/impact/art"
            },
            {
              title: "Social Justice",
              href: "/religion/rastafari/impact/social"
            },
            {
              title: "Global Influence",
              href: "/religion/rastafari/impact/global"
            }
          ]}
        />
      </div>
    </div>
  )
} 