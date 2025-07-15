import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Babylon System | Rastafarian Theology",
  description: "Explore the concept of Babylon in Rastafarianism, including its meaning, historical context, and significance in Rastafari belief.",
  keywords: "Babylon System, Rastafari Theology, Oppression, Social Justice, Liberation, Cultural Resistance, Spiritual Freedom, Historical Context"
}

interface BabylonContent {
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

const babylonContent: BabylonContent[] = [
  {
    title: "Conceptual Framework",
    description: "The fundamental principles and values that shape the concept of Babylon in Rastafarian theology.",
    keyPoints: [
      "System of Oppression",
      "Materialistic Society",
      "Spiritual Bondage",
      "Cultural Imperialism",
      "Social Injustice",
      "Economic Exploitation",
      "Political Control",
      "Mental Slavery"
    ],
    historicalRefs: [
      {
        text: "Babylon represents systems of oppression and control.",
        source: "Rastafari Theology"
      },
      {
        text: "The concept reflects historical and contemporary social conditions.",
        source: "Social Studies"
      }
    ],
    significance: "The concept of Babylon represents the fundamental understanding of oppressive systems in Rastafarian theology.",
    elements: [
      "Oppressive systems",
      "Materialistic values",
      "Spiritual constraints",
      "Cultural domination",
      "Social inequality",
      "Economic exploitation",
      "Political control",
      "Mental conditioning"
    ],
    practices: [
      "Social awareness",
      "Cultural resistance",
      "Spiritual liberation",
      "Social activism",
      "Economic independence",
      "Political engagement",
      "Mental freedom",
      "Cultural preservation"
    ],
    recommendedReading: [
      {
        title: "Rastafari and Babylon",
        author: "Barry Chevannes",
        description: "Analysis of Babylon concept in Rastafari",
        amazonLink: "https://www.amazon.com/Rastafari-Babylon-Chevannes/dp/0814316884"
      }
    ]
  },
  {
    title: "Historical Context",
    description: "The development and influence of Babylon's historical context in Rastafarian understanding.",
    keyPoints: [
      "Colonial History",
      "Slavery Legacy",
      "Social Inequality",
      "Cultural Oppression",
      "Economic Exploitation",
      "Political Control",
      "Racial Discrimination",
      "Social Resistance"
    ],
    historicalRefs: [
      {
        text: "Babylon's roots lie in historical systems of oppression.",
        source: "Historical Research"
      },
      {
        text: "The concept reflects centuries of social struggle.",
        source: "Cultural Studies"
      }
    ],
    significance: "Historical context provides essential understanding of Babylon's role in Rastafarian theology.",
    elements: [
      "Colonial systems",
      "Slavery impact",
      "Social structures",
      "Cultural domination",
      "Economic systems",
      "Political control",
      "Racial systems",
      "Resistance movements"
    ],
    practices: [
      "Historical study",
      "Social analysis",
      "Cultural preservation",
      "Economic development",
      "Political activism",
      "Racial justice",
      "Social change",
      "Cultural revival"
    ],
    recommendedReading: [
      {
        title: "Babylon's History",
        author: "Ennis B. Edmonds",
        description: "Study of Babylon's historical context",
        amazonLink: "https://www.amazon.com/Babylons-History-Edmonds/dp/0814316884"
      }
    ]
  },
  {
    title: "Contemporary Relevance",
    description: "Traditional and modern approaches to understanding Babylon in contemporary society.",
    keyPoints: [
      "Modern Oppression",
      "Global Systems",
      "Social Justice",
      "Cultural Resistance",
      "Economic Freedom",
      "Political Liberation",
      "Mental Liberation",
      "Spiritual Freedom"
    ],
    historicalRefs: [
      {
        text: "Babylon continues to manifest in modern systems.",
        source: "Contemporary Studies"
      },
      {
        text: "The concept guides contemporary social movements.",
        source: "Social Research"
      }
    ],
    significance: "Contemporary relevance emphasizes the continuing importance of understanding and resisting Babylon systems.",
    elements: [
      "Modern systems",
      "Global structures",
      "Social movements",
      "Cultural resistance",
      "Economic systems",
      "Political structures",
      "Mental systems",
      "Spiritual practice"
    ],
    practices: [
      "Social activism",
      "Global awareness",
      "Justice work",
      "Cultural preservation",
      "Economic independence",
      "Political engagement",
      "Mental freedom",
      "Spiritual practice"
    ],
    recommendedReading: [
      {
        title: "Modern Babylon",
        author: "William David Spencer",
        description: "Analysis of contemporary Babylon systems",
        amazonLink: "https://www.amazon.com/Modern-Babylon-Spencer/dp/0814316884"
      }
    ]
  },
  {
    title: "Liberation Theology",
    description: "Contemporary adaptations and applications of Babylon concepts in liberation theology.",
    keyPoints: [
      "Spiritual Liberation",
      "Social Freedom",
      "Cultural Independence",
      "Economic Justice",
      "Political Rights",
      "Mental Freedom",
      "Personal Growth",
      "Community Development"
    ],
    historicalRefs: [
      {
        text: "Liberation theology guides resistance to Babylon.",
        source: "Theological Studies"
      },
      {
        text: "Freedom movements shape contemporary practice.",
        source: "Social Research"
      }
    ],
    significance: "Liberation theology demonstrates practical applications of resisting Babylon systems.",
    elements: [
      "Spiritual practice",
      "Social action",
      "Cultural development",
      "Economic justice",
      "Political rights",
      "Mental freedom",
      "Personal growth",
      "Community building"
    ],
    practices: [
      "Spiritual development",
      "Social activism",
      "Cultural programs",
      "Economic projects",
      "Political engagement",
      "Mental health",
      "Personal development",
      "Community work"
    ],
    recommendedReading: [
      {
        title: "Rastafari Liberation",
        author: "Michael Barnett",
        description: "Study of Rastafari liberation theology",
        amazonLink: "https://www.amazon.com/Rastafari-Liberation-Barnett/dp/0814316884"
      }
    ]
  }
]

export default function BabylonPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Babylon System</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the concept of Babylon in Rastafarianism, including its meaning, historical context, and significance in Rastafari belief.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="concept" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="concept">Conceptual Framework</TabsTrigger>
          <TabsTrigger value="history">Historical Context</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary Relevance</TabsTrigger>
          <TabsTrigger value="liberation">Liberation Theology</TabsTrigger>
        </TabsList>

        {babylonContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({concept: true, history: true, contemporary: true, liberation: true})[index]}>
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
              title: "Jah and Divinity",
              href: "/religion/rastafari/theology/jah"
            },
            {
              title: "African Heritage",
              href: "/religion/rastafari/theology/africa"
            },
            {
              title: "Spiritual Practices",
              href: "/religion/rastafari/theology/practices"
            }
          ]}
        />
      </div>
    </div>
  )
}