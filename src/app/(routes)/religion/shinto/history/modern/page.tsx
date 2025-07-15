import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Modern History | Shinto History",
  description: "Explore modern Shinto history from post-war developments to contemporary practices, including cultural preservation, global engagement, and adaptation to modern society.",
  keywords: "modern Shinto, contemporary Shinto, post-war Shinto, globalization, secularization, cultural preservation, shrine tourism, environmental Shinto, digital age"
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
    title: "Post-War Reconstruction",
    description: "Examining the revival and reorganization of Shinto practices in post-war Japan (1945-1960).",
    keyPoints: [
      "Religious freedom reforms",
      "Shrine independence",
      "New organizational structures",
      "Cultural preservation efforts",
      "Democratic adaptations",
      "Community rebuilding",
      "Economic recovery impact",
      "International relations"
    ],
    historicalRefs: [
      {
        text: "The 1946 Religious Corporations Ordinance established new legal framework for shrines.",
        source: "Post-war Legislative Records"
      },
      {
        text: "Formation of the Association of Shinto Shrines (Jinja Honchō) in 1946.",
        source: "Shrine Organization Documents"
      }
    ],
    significance: "Post-war reconstruction period redefined Shinto's role in Japanese society as a religious and cultural institution.",
    elements: [
      "Independent shrines",
      "Religious corporations",
      "Community centers",
      "Cultural programs",
      "Educational initiatives",
      "Memorial services",
      "Festival revivals",
      "International outreach"
    ],
    practices: [
      "Private worship",
      "Community festivals",
      "Cultural education",
      "Memorial services",
      "Shrine maintenance",
      "Local traditions",
      "Interfaith dialogue",
      "Youth programs"
    ],
    recommendedReading: [
      {
        title: "Post-war Shinto",
        author: "John Breen",
        description: "Analysis of Shinto's post-war transformation",
        amazonLink: "https://www.amazon.com/New-History-Shinto-Blackwell-Histories/dp/1405155167"
      }
    ]
  },
  {
    title: "Cultural Preservation",
    description: "Analyzing efforts to preserve and transmit Shinto traditions in modern society (1960-1990).",
    keyPoints: [
      "Heritage protection",
      "Festival preservation",
      "Ritual documentation",
      "Educational programs",
      "Artistic traditions",
      "Architectural conservation",
      "Environmental awareness",
      "Community engagement"
    ],
    historicalRefs: [
      {
        text: "The 1975 UNESCO recognition of shrine architecture as world heritage.",
        source: "UNESCO Documents"
      },
      {
        text: "Establishment of the Traditional Culture Preservation Act in 1950.",
        source: "Cultural Policy Records"
      }
    ],
    significance: "Cultural preservation efforts ensured the continuity of Shinto traditions while adapting to modern society.",
    elements: [
      "Heritage sites",
      "Festival archives",
      "Training programs",
      "Educational materials",
      "Art preservation",
      "Environmental projects",
      "Community centers",
      "Research institutes"
    ],
    practices: [
      "Traditional ceremonies",
      "Apprenticeship programs",
      "Cultural workshops",
      "Environmental care",
      "Heritage tourism",
      "Educational tours",
      "Community events",
      "Research activities"
    ],
    recommendedReading: [
      {
        title: "Shinto in Modern Japan",
        author: "Sarah Thal",
        description: "Study of modern Shinto cultural preservation",
        amazonLink: "https://www.amazon.com/Invention-Religion-Japan-Jason-Josephson/dp/0226412342"
      }
    ]
  },
  {
    title: "Global Engagement",
    description: "Understanding Shinto's interaction with global society and contemporary issues (1990-2010).",
    keyPoints: [
      "International dialogue",
      "Environmental advocacy",
      "Interfaith cooperation",
      "Cultural exchange",
      "Academic partnerships",
      "Tourism development",
      "Digital presence",
      "Global networks"
    ],
    historicalRefs: [
      {
        text: "The 1993 Parliament of World's Religions marked increased international engagement.",
        source: "International Conference Records"
      },
      {
        text: "Establishment of overseas Shinto shrines and cultural centers in the 2000s.",
        source: "Global Outreach Documents"
      }
    ],
    significance: "Global engagement expanded Shinto's influence while fostering international understanding and cooperation.",
    elements: [
      "International centers",
      "Digital platforms",
      "Exchange programs",
      "Research networks",
      "Tourism facilities",
      "Educational resources",
      "Environmental initiatives",
      "Cultural exhibitions"
    ],
    practices: [
      "International festivals",
      "Cultural exchanges",
      "Environmental programs",
      "Digital outreach",
      "Tourism services",
      "Academic conferences",
      "Interfaith events",
      "Global networking"
    ],
    recommendedReading: [
      {
        title: "Global Shinto",
        author: "Michael Pye",
        description: "Analysis of Shinto's global engagement",
        amazonLink: "https://www.amazon.com/Japanese-Buddhist-Pilgrimage-Michael-Pye/dp/1845539745"
      }
    ]
  },
  {
    title: "Contemporary Adaptations",
    description: "Exploring how Shinto adapts to contemporary society and challenges (2010-present).",
    keyPoints: [
      "Digital transformation",
      "Social media presence",
      "Environmental leadership",
      "Youth engagement",
      "Urban adaptation",
      "Social issues",
      "Technological integration",
      "Future perspectives"
    ],
    historicalRefs: [
      {
        text: "Launch of major shrine online platforms and virtual visits in 2020.",
        source: "Digital Innovation Records"
      },
      {
        text: "Formation of Youth Shinto Association's environmental initiative in 2015.",
        source: "Contemporary Programs Archive"
      }
    ],
    significance: "Contemporary adaptations demonstrate Shinto's continued relevance and ability to address modern challenges.",
    elements: [
      "Digital platforms",
      "Social programs",
      "Youth centers",
      "Urban shrines",
      "Tech integration",
      "Environmental projects",
      "Community services",
      "Research facilities"
    ],
    practices: [
      "Virtual rituals",
      "Online education",
      "Environmental action",
      "Youth programs",
      "Urban festivals",
      "Digital outreach",
      "Community support",
      "Modern ceremonies"
    ],
    recommendedReading: [
      {
        title: "Contemporary Shinto",
        author: "Fabio Rambelli",
        description: "Analysis of contemporary Shinto practices",
        amazonLink: "https://www.amazon.com/Contemporary-Religions-Japan-Reader/dp/0824851668"
      }
    ]
  }
]

export default function ModernHistoryPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Modern Shinto History</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore modern Shinto history from post-war developments to contemporary practices, examining cultural preservation, global engagement, and adaptation to modern society.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="post-war" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="post-war">Post-War</TabsTrigger>
          <TabsTrigger value="cultural">Cultural</TabsTrigger>
          <TabsTrigger value="global">Global</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        {modernContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({"post-war": true, "cultural": true, "global": true, "contemporary": true})[index]}>
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
              title: "State History",
              href: "/religion/shinto/history/state"
            },
            {
              title: "Imperial History",
              href: "/religion/shinto/history/imperial"
            },
            {
              title: "Medieval History",
              href: "/religion/shinto/history/medieval"
            }
          ]}
        />
      </div>
    </div>
  )
} 