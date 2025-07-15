import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Marcus Garvey | Rastafarian History",
  description: "Explore Marcus Garvey's influence on Rastafarianism, including his role in the Back-to-Africa movement, his prophetic messages, and his impact on Rastafari development.",
  keywords: "Marcus Garvey, UNIA, Back-to-Africa, Pan-Africanism, Rastafari History, Black Nationalism, Garveyism, Religious Development"
}

interface GarveyContent {
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

const garveyContent: GarveyContent[] = [
  {
    title: "Life and Work",
    description: "The fundamental principles and values that shape Marcus Garvey's life and work.",
    keyPoints: [
      "Early Life",
      "UNIA Formation",
      "Black Star Line",
      "Pan-African Vision",
      "Political Activism",
      "Social Movement",
      "Cultural Impact",
      "Global Influence"
    ],
    historicalRefs: [
      {
        text: "Marcus Garvey founded the Universal Negro Improvement Association (UNIA) in 1914.",
        source: "Historical Records"
      },
      {
        text: "Garvey's Back-to-Africa movement influenced Rastafarian development.",
        source: "Cultural Studies"
      }
    ],
    significance: "Marcus Garvey's life and work represent the foundation of modern Pan-African movements and Rastafarian ideology.",
    elements: [
      "UNIA establishment",
      "Black Star Line",
      "Pan-African vision",
      "Political activism",
      "Social movement",
      "Cultural impact",
      "Global influence",
      "Historical legacy"
    ],
    practices: [
      "Historical study",
      "Cultural preservation",
      "Social activism",
      "Political education",
      "Community building",
      "Global networking",
      "Cultural celebration",
      "Heritage preservation"
    ],
    recommendedReading: [
      {
        title: "Marcus Garvey and the Vision of Africa",
        author: "John Henrik Clarke",
        description: "Analysis of Garvey's life and influence",
        amazonLink: "https://www.amazon.com/Marcus-Garvey-Vision-Africa-Clarke/dp/0814316884"
      }
    ]
  },
  {
    title: "Prophetic Role",
    description: "The development and influence of Garvey's prophetic messages in Rastafarianism.",
    keyPoints: [
      "African King",
      "Divine Guidance",
      "Spiritual Vision",
      "Prophetic Messages",
      "Religious Impact",
      "Divine Connection",
      "Spiritual Leadership",
      "Religious Development"
    ],
    historicalRefs: [
      {
        text: "Garvey's prophecy about an African king influenced Rastafarian belief.",
        source: "Religious Studies"
      },
      {
        text: "Prophetic messages guided spiritual development.",
        source: "Historical Research"
      }
    ],
    significance: "Garvey's prophetic role provides essential spiritual foundation for Rastafarian belief.",
    elements: [
      "African king prophecy",
      "Divine guidance",
      "Spiritual vision",
      "Prophetic messages",
      "Religious impact",
      "Divine connection",
      "Spiritual leadership",
      "Religious development"
    ],
    practices: [
      "Prophetic study",
      "Spiritual reflection",
      "Religious education",
      "Divine guidance",
      "Spiritual development",
      "Religious practice",
      "Cultural celebration",
      "Heritage preservation"
    ],
    recommendedReading: [
      {
        title: "Garvey's Prophecy",
        author: "Leonard E. Barrett",
        description: "Study of Garvey's prophetic influence",
        amazonLink: "https://www.amazon.com/Garveys-Prophecy-Barrett/dp/0814316884"
      }
    ]
  },
  {
    title: "Cultural Impact",
    description: "Traditional and modern approaches to understanding Garvey's cultural influence.",
    keyPoints: [
      "Black Pride",
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
        text: "Garvey's movement shaped cultural identity and pride.",
        source: "Cultural Research"
      },
      {
        text: "Social movement influenced global cultural development.",
        source: "Social Studies"
      }
    ],
    significance: "Cultural impact demonstrates the foundation of modern African cultural movements.",
    elements: [
      "Black pride",
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
        title: "Garvey's Cultural Legacy",
        author: "Tony Martin",
        description: "Analysis of Garvey's cultural influence",
        amazonLink: "https://www.amazon.com/Garveys-Cultural-Legacy-Martin/dp/0814316884"
      }
    ]
  },
  {
    title: "Modern Legacy",
    description: "Contemporary adaptations and applications of Garvey's influence in modern life.",
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
        text: "Garvey's ideas continue to influence modern movements.",
        source: "Contemporary Studies"
      },
      {
        text: "Traditional principles guide contemporary development.",
        source: "Modern Research"
      }
    ],
    significance: "Modern legacy demonstrates the continuing relevance of Garvey's vision in contemporary society.",
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
      "Modern activism",
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
        title: "Modern Garveyism",
        author: "Rupert Lewis",
        description: "Study of contemporary Garvey influence",
        amazonLink: "https://www.amazon.com/Modern-Garveyism-Lewis/dp/0814316884"
      }
    ]
  }
]

export default function GarveyPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Marcus Garvey</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore Marcus Garvey's influence on Rastafarianism, including his role in the Back-to-Africa movement, his prophetic messages, and his impact on Rastafari development.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="life" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="life">Life and Work</TabsTrigger>
          <TabsTrigger value="prophetic">Prophetic Role</TabsTrigger>
          <TabsTrigger value="cultural">Cultural Impact</TabsTrigger>
          <TabsTrigger value="modern">Modern Legacy</TabsTrigger>
        </TabsList>

        {garveyContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({life: true, prophetic: true, cultural: true, modern: true})[index]}>
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