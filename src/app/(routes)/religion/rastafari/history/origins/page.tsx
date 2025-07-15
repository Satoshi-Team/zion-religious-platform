import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Origins | Rastafarian History",
  description: "Explore the origins of Rastafarianism, including its historical roots, cultural influences, and early development in Jamaica.",
  keywords: "Rastafari Origins, Jamaican History, Cultural Roots, Religious Development, Historical Background, Early Movement, Cultural Heritage, Religious Formation"
}

interface OriginsContent {
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

const originsContent: OriginsContent[] = [
  {
    title: "Historical Roots",
    description: "The fundamental principles and values that shape the historical roots of Rastafarianism.",
    keyPoints: [
      "African Heritage",
      "Colonial History",
      "Slavery Legacy",
      "Cultural Resistance",
      "Spiritual Traditions",
      "Social Movement",
      "Political Context",
      "Religious Evolution"
    ],
    historicalRefs: [
      {
        text: "Rastafarianism emerged from African cultural heritage and colonial resistance.",
        source: "Historical Studies"
      },
      {
        text: "The movement developed in response to social and political conditions.",
        source: "Cultural Research"
      }
    ],
    significance: "The historical roots represent the foundation of Rastafarian identity and development.",
    elements: [
      "African heritage",
      "Colonial history",
      "Slavery legacy",
      "Cultural resistance",
      "Spiritual traditions",
      "Social movement",
      "Political context",
      "Religious evolution"
    ],
    practices: [
      "Historical study",
      "Cultural preservation",
      "Heritage celebration",
      "Social activism",
      "Spiritual development",
      "Community building",
      "Political awareness",
      "Cultural expression"
    ],
    recommendedReading: [
      {
        title: "The Rastafari Movement",
        author: "Leonard E. Barrett",
        description: "Analysis of Rastafari historical origins",
        amazonLink: "https://www.amazon.com/Rastafari-Movement-Barrett/dp/0814316884"
      }
    ]
  },
  {
    title: "Cultural Influences",
    description: "The development and influence of cultural elements in early Rastafarianism.",
    keyPoints: [
      "African Traditions",
      "Jamaican Culture",
      "Caribbean Heritage",
      "Indigenous Beliefs",
      "Folk Religion",
      "Cultural Synthesis",
      "Social Customs",
      "Artistic Expression"
    ],
    historicalRefs: [
      {
        text: "Cultural influences shaped early Rastafari practices.",
        source: "Cultural Studies"
      },
      {
        text: "Traditional customs guided spiritual development.",
        source: "Anthropological Research"
      }
    ],
    significance: "Cultural influences provide essential context for understanding Rastafarian development.",
    elements: [
      "African traditions",
      "Jamaican culture",
      "Caribbean heritage",
      "Indigenous beliefs",
      "Folk religion",
      "Cultural synthesis",
      "Social customs",
      "Artistic expression"
    ],
    practices: [
      "Cultural celebration",
      "Traditional customs",
      "Heritage preservation",
      "Spiritual practices",
      "Community rituals",
      "Artistic creation",
      "Cultural education",
      "Social bonding"
    ],
    recommendedReading: [
      {
        title: "Rastafari Culture",
        author: "Ennis B. Edmonds",
        description: "Study of Rastafari cultural development",
        amazonLink: "https://www.amazon.com/Rastafari-Culture-Edmonds/dp/0814316884"
      }
    ]
  },
  {
    title: "Early Development",
    description: "Traditional and modern approaches to understanding early Rastafarian development.",
    keyPoints: [
      "Movement Formation",
      "Community Building",
      "Leadership Development",
      "Doctrinal Evolution",
      "Social Organization",
      "Cultural Expression",
      "Spiritual Growth",
      "Political Awareness"
    ],
    historicalRefs: [
      {
        text: "Early development shaped Rastafari identity.",
        source: "Historical Research"
      },
      {
        text: "Community formation guided movement growth.",
        source: "Social Studies"
      }
    ],
    significance: "Early development demonstrates the foundation of Rastafarian community and belief.",
    elements: [
      "Movement formation",
      "Community building",
      "Leadership development",
      "Doctrinal evolution",
      "Social organization",
      "Cultural expression",
      "Spiritual growth",
      "Political awareness"
    ],
    practices: [
      "Community organization",
      "Leadership training",
      "Doctrinal study",
      "Social development",
      "Cultural activities",
      "Spiritual guidance",
      "Political education",
      "Movement building"
    ],
    recommendedReading: [
      {
        title: "Early Rastafari",
        author: "William David Spencer",
        description: "Analysis of early Rastafari development",
        amazonLink: "https://www.amazon.com/Early-Rastafari-Spencer/dp/0814316884"
      }
    ]
  },
  {
    title: "Modern Legacy",
    description: "Contemporary adaptations and applications of Rastafarian origins in modern life.",
    keyPoints: [
      "Historical Memory",
      "Cultural Continuity",
      "Global Influence",
      "Modern Expression",
      "Heritage Preservation",
      "Contemporary Practice",
      "Cultural Innovation",
      "Global Outreach"
    ],
    historicalRefs: [
      {
        text: "Historical origins continue to influence modern practice.",
        source: "Contemporary Studies"
      },
      {
        text: "Traditional roots guide contemporary development.",
        source: "Modern Research"
      }
    ],
    significance: "Modern legacy demonstrates the continuing relevance of Rastafarian origins in contemporary society.",
    elements: [
      "Historical memory",
      "Cultural continuity",
      "Global influence",
      "Modern expression",
      "Heritage preservation",
      "Contemporary practice",
      "Cultural innovation",
      "Global outreach"
    ],
    practices: [
      "Historical education",
      "Cultural programs",
      "Global initiatives",
      "Modern expression",
      "Heritage projects",
      "Contemporary activities",
      "Cultural development",
      "Global networking"
    ],
    recommendedReading: [
      {
        title: "Modern Rastafari History",
        author: "Michael Barnett",
        description: "Study of contemporary historical understanding",
        amazonLink: "https://www.amazon.com/Modern-Rastafari-History-Barnett/dp/0814316884"
      }
    ]
  }
]

export default function OriginsPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Origins</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the origins of Rastafarianism, including its historical roots, cultural influences, and early development in Jamaica.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="roots" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="roots">Historical Roots</TabsTrigger>
          <TabsTrigger value="cultural">Cultural Influences</TabsTrigger>
          <TabsTrigger value="early">Early Development</TabsTrigger>
          <TabsTrigger value="modern">Modern Legacy</TabsTrigger>
        </TabsList>

        {originsContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({roots: true, cultural: true, early: true, modern: true})[index]}>
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
              title: "Marcus Garvey",
              href: "/religion/rastafari/history/garvey"
            },
            {
              title: "Haile Selassie",
              href: "/religion/rastafari/history/selassie"
            },
            {
              title: "Global Spread",
              href: "/religion/rastafari/history/global"
            }
          ]}
        />
      </div>
    </div>
  )
} 