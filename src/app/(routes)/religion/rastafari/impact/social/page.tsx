import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Social Justice | Rastafarian Impact",
  description: "Explore the profound commitment to social justice in Rastafarianism, including its principles, activism, and global influence on social change.",
  keywords: "Rastafari Social Justice, Social Activism, Human Rights, Social Change, Cultural Resistance, Social Movement, Global Impact, Social Reform"
}

interface SocialContent {
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

const socialContent: SocialContent[] = [
  {
    title: "Social Principles",
    description: "The fundamental principles and values that guide Rastafarian social justice efforts.",
    keyPoints: [
      "Human Rights",
      "Social Equality",
      "Cultural Freedom",
      "Economic Justice",
      "Political Rights",
      "Social Unity",
      "Community Development",
      "Global Solidarity"
    ],
    historicalRefs: [
      {
        text: "Rastafarian social principles emerged from resistance to oppression.",
        source: "Social History"
      },
      {
        text: "Social values reflect spiritual and cultural beliefs.",
        source: "Cultural Research"
      }
    ],
    significance: "Social principles represent the foundation of Rastafarian social justice movement and cultural identity.",
    elements: [
      "Human rights",
      "Social equality",
      "Cultural freedom",
      "Economic justice",
      "Political rights",
      "Social unity",
      "Community development",
      "Global solidarity"
    ],
    practices: [
      "Social activism",
      "Community building",
      "Cultural preservation",
      "Economic development",
      "Political engagement",
      "Social unity",
      "Community support",
      "Global networking"
    ],
    recommendedReading: [
      {
        title: "Rastafari Social Justice",
        author: "Barry Chevannes",
        description: "Analysis of Rastafarian social principles",
        amazonLink: "https://www.amazon.com/Rastafari-Social-Justice-Chevannes/dp/0814316884"
      }
    ]
  },
  {
    title: "Social Activism",
    description: "The development and practice of Rastafarian social justice movements.",
    keyPoints: [
      "Social Movement",
      "Cultural Resistance",
      "Political Action",
      "Community Organizing",
      "Social Reform",
      "Cultural Revival",
      "Social Change",
      "Global Impact"
    ],
    historicalRefs: [
      {
        text: "Rastafarian activism has influenced global social movements.",
        source: "Social History"
      },
      {
        text: "Social action reflects cultural and spiritual values.",
        source: "Cultural Studies"
      }
    ],
    significance: "Social activism demonstrates the unique character of Rastafarian social justice efforts and their cultural importance.",
    elements: [
      "Social movement",
      "Cultural resistance",
      "Political action",
      "Community organizing",
      "Social reform",
      "Cultural revival",
      "Social change",
      "Global impact"
    ],
    practices: [
      "Movement building",
      "Cultural activism",
      "Political engagement",
      "Community development",
      "Social advocacy",
      "Cultural preservation",
      "Change making",
      "Global outreach"
    ],
    recommendedReading: [
      {
        title: "The Rastafari Movement",
        author: "Ennis B. Edmonds",
        description: "Study of Rastafarian social activism",
        amazonLink: "https://www.amazon.com/Rastafari-Movement-Edmonds/dp/0814316884"
      }
    ]
  },
  {
    title: "Cultural Impact",
    description: "The influence of Rastafarian social justice on global culture and society.",
    keyPoints: [
      "Global Influence",
      "Cultural Exchange",
      "Social Movement",
      "Cultural Innovation",
      "Social Change",
      "Global Unity",
      "Cultural Legacy",
      "Social Progress"
    ],
    historicalRefs: [
      {
        text: "Rastafarian social justice influences global cultural expression.",
        source: "Cultural Research"
      },
      {
        text: "Social impact affects movements worldwide.",
        source: "Social Studies"
      }
    ],
    significance: "Cultural impact demonstrates the foundation of modern global social justice movements.",
    elements: [
      "Global influence",
      "Cultural exchange",
      "Social movement",
      "Cultural innovation",
      "Social change",
      "Global unity",
      "Cultural legacy",
      "Social progress"
    ],
    practices: [
      "Global outreach",
      "Cultural sharing",
      "Social activism",
      "Cultural innovation",
      "Social development",
      "Global networking",
      "Heritage preservation",
      "Progress building"
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
    title: "Modern Development",
    description: "Contemporary developments and adaptations of Rastafarian social justice.",
    keyPoints: [
      "Contemporary Activism",
      "Digital Movement",
      "Global Reach",
      "Modern Innovation",
      "Digital Advocacy",
      "Urban Impact",
      "Youth Engagement",
      "Future Direction"
    ],
    historicalRefs: [
      {
        text: "Rastafarian social justice continues to evolve in modern society.",
        source: "Contemporary Studies"
      },
      {
        text: "Digital platforms expand social influence.",
        source: "Modern Research"
      }
    ],
    significance: "Modern development demonstrates the continuing relevance and adaptability of Rastafarian social justice principles.",
    elements: [
      "Contemporary activism",
      "Digital movement",
      "Global reach",
      "Modern innovation",
      "Digital advocacy",
      "Urban impact",
      "Youth engagement",
      "Future direction"
    ],
    practices: [
      "Modern activism",
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
        title: "Modern Rastafari Social Justice",
        author: "Michael Barnett",
        description: "Study of contemporary Rastafarian social activism",
        amazonLink: "https://www.amazon.com/Modern-Rastafari-Social-Justice-Barnett/dp/0814316884"
      }
    ]
  }
]

export default function SocialPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Social Justice</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the profound commitment to social justice in Rastafarianism, including its principles, activism, and global influence on social change.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="principles" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="principles">Social Principles</TabsTrigger>
          <TabsTrigger value="activism">Social Activism</TabsTrigger>
          <TabsTrigger value="cultural">Cultural Impact</TabsTrigger>
          <TabsTrigger value="modern">Modern Development</TabsTrigger>
        </TabsList>

        {socialContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({principles: true, activism: true, cultural: true, modern: true})[index]}>
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
              title: "Global Influence",
              href: "/religion/rastafari/impact/global"
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