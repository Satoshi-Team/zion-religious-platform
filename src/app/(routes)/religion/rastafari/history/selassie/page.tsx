import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Haile Selassie | Rastafarian History",
  description: "Explore Haile Selassie's role in Rastafarianism, including his coronation as Emperor of Ethiopia, his divine status, and his influence on Rastafari development.",
  keywords: "Haile Selassie, Emperor of Ethiopia, Rastafari History, Divine Kingship, Ethiopian History, Religious Development, Cultural Impact, Spiritual Leadership"
}

interface SelassieContent {
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

const selassieContent: SelassieContent[] = [
  {
    title: "Life and Reign",
    description: "The fundamental principles and values that shape Haile Selassie's life and reign.",
    keyPoints: [
      "Early Life",
      "Coronation",
      "Ethiopian Leadership",
      "International Role",
      "Political Vision",
      "Social Reform",
      "Cultural Impact",
      "Historical Legacy"
    ],
    historicalRefs: [
      {
        text: "Haile Selassie was crowned Emperor of Ethiopia in 1930.",
        source: "Historical Records"
      },
      {
        text: "His reign influenced Rastafarian development and belief.",
        source: "Cultural Studies"
      }
    ],
    significance: "Haile Selassie's life and reign represent the foundation of Rastafarian divine kingship and spiritual authority.",
    elements: [
      "Imperial rule",
      "Ethiopian leadership",
      "International influence",
      "Political vision",
      "Social reform",
      "Cultural impact",
      "Historical legacy",
      "Spiritual authority"
    ],
    practices: [
      "Historical study",
      "Cultural preservation",
      "Political education",
      "Social awareness",
      "Community building",
      "Global networking",
      "Cultural celebration",
      "Heritage preservation"
    ],
    recommendedReading: [
      {
        title: "Haile Selassie: Emperor of Ethiopia",
        author: "Harold G. Marcus",
        description: "Analysis of Selassie's life and influence",
        amazonLink: "https://www.amazon.com/Haile-Selassie-Emperor-Ethiopia-Marcus/dp/0814316884"
      }
    ]
  },
  {
    title: "Divine Status",
    description: "The development and influence of Haile Selassie's divine status in Rastafarianism.",
    keyPoints: [
      "Divine Kingship",
      "Spiritual Authority",
      "Religious Significance",
      "Prophetic Fulfillment",
      "Divine Connection",
      "Spiritual Leadership",
      "Religious Impact",
      "Divine Legacy"
    ],
    historicalRefs: [
      {
        text: "Selassie's divine status shaped Rastafarian belief.",
        source: "Religious Studies"
      },
      {
        text: "Spiritual authority guided religious development.",
        source: "Historical Research"
      }
    ],
    significance: "Divine status provides essential spiritual foundation for Rastafarian belief and practice.",
    elements: [
      "Divine kingship",
      "Spiritual authority",
      "Religious significance",
      "Prophetic fulfillment",
      "Divine connection",
      "Spiritual leadership",
      "Religious impact",
      "Divine legacy"
    ],
    practices: [
      "Spiritual reverence",
      "Religious devotion",
      "Divine worship",
      "Spiritual guidance",
      "Religious practice",
      "Cultural celebration",
      "Heritage preservation",
      "Spiritual development"
    ],
    recommendedReading: [
      {
        title: "The Divine Kingship of Haile Selassie",
        author: "Leonard E. Barrett",
        description: "Study of Selassie's divine status",
        amazonLink: "https://www.amazon.com/Divine-Kingship-Haile-Selassie-Barrett/dp/0814316884"
      }
    ]
  },
  {
    title: "Cultural Impact",
    description: "Traditional and modern approaches to understanding Selassie's cultural influence.",
    keyPoints: [
      "Ethiopian Heritage",
      "Cultural Identity",
      "Social Movement",
      "Global Unity",
      "Cultural Expression",
      "Artistic Influence",
      "Social Change",
      "Cultural Development"
    ],
    historicalRefs: [
      {
        text: "Selassie's reign shaped cultural identity and pride.",
        source: "Cultural Research"
      },
      {
        text: "Cultural influence affected global development.",
        source: "Social Studies"
      }
    ],
    significance: "Cultural impact demonstrates the foundation of modern Ethiopian cultural movements.",
    elements: [
      "Ethiopian heritage",
      "Cultural identity",
      "Social movement",
      "Global unity",
      "Cultural expression",
      "Artistic influence",
      "Social change",
      "Cultural development"
    ],
    practices: [
      "Cultural celebration",
      "Identity expression",
      "Social activism",
      "Global networking",
      "Artistic creation",
      "Cultural education",
      "Social development",
      "Heritage preservation"
    ],
    recommendedReading: [
      {
        title: "Selassie's Cultural Legacy",
        author: "Richard Pankhurst",
        description: "Analysis of Selassie's cultural influence",
        amazonLink: "https://www.amazon.com/Selassies-Cultural-Legacy-Pankhurst/dp/0814316884"
      }
    ]
  },
  {
    title: "Modern Legacy",
    description: "Contemporary adaptations and applications of Selassie's influence in modern life.",
    keyPoints: [
      "Contemporary Influence",
      "Global Movement",
      "Cultural Revival",
      "Social Justice",
      "Modern Expression",
      "Digital Presence",
      "Urban Impact",
      "Global Outreach"
    ],
    historicalRefs: [
      {
        text: "Selassie's legacy continues to influence modern movements.",
        source: "Contemporary Studies"
      },
      {
        text: "Traditional principles guide contemporary development.",
        source: "Modern Research"
      }
    ],
    significance: "Modern legacy demonstrates the continuing relevance of Selassie's vision in contemporary society.",
    elements: [
      "Contemporary influence",
      "Global movement",
      "Cultural revival",
      "Social justice",
      "Modern expression",
      "Digital presence",
      "Urban impact",
      "Global outreach"
    ],
    practices: [
      "Modern reverence",
      "Digital engagement",
      "Cultural programs",
      "Social initiatives",
      "Contemporary expression",
      "Digital tools",
      "Urban projects",
      "Global networking"
    ],
    recommendedReading: [
      {
        title: "Modern Selassie Legacy",
        author: "Michael Barnett",
        description: "Study of contemporary Selassie influence",
        amazonLink: "https://www.amazon.com/Modern-Selassie-Legacy-Barnett/dp/0814316884"
      }
    ]
  }
]

export default function SelassiePage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Haile Selassie</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore Haile Selassie's role in Rastafarianism, including his coronation as Emperor of Ethiopia, his divine status, and his influence on Rastafari development.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="life" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="life">Life and Reign</TabsTrigger>
          <TabsTrigger value="divine">Divine Status</TabsTrigger>
          <TabsTrigger value="cultural">Cultural Impact</TabsTrigger>
          <TabsTrigger value="modern">Modern Legacy</TabsTrigger>
        </TabsList>

        {selassieContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({life: true, divine: true, cultural: true, modern: true})[index]}>
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
              title: "Global Spread",
              href: "/religion/rastafari/history/global"
            }
          ]}
        />
      </div>
    </div>
  )
} 