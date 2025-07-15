import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Modern Era | Rastafarian History",
  description: "Explore the modern era of Rastafarianism, including contemporary developments, digital presence, urban influence, and future directions of the movement.",
  keywords: "Modern Rastafari, Contemporary Movement, Digital Presence, Urban Culture, Cultural Evolution, Social Impact, Global Influence, Future Development"
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
    title: "Contemporary Development",
    description: "The fundamental principles and values that shape modern Rastafarian development.",
    keyPoints: [
      "Modern Evolution",
      "Cultural Adaptation",
      "Social Integration",
      "Urban Presence",
      "Digital Engagement",
      "Global Connection",
      "Cultural Innovation",
      "Future Direction"
    ],
    historicalRefs: [
      {
        text: "Rastafarianism continues to evolve in contemporary society.",
        source: "Modern Studies"
      },
      {
        text: "Traditional principles guide modern development.",
        source: "Cultural Research"
      }
    ],
    significance: "Contemporary development represents the ongoing evolution and relevance of Rastafarian principles in modern society.",
    elements: [
      "Modern evolution",
      "Cultural adaptation",
      "Social integration",
      "Urban presence",
      "Digital engagement",
      "Global connection",
      "Cultural innovation",
      "Future direction"
    ],
    practices: [
      "Modern expression",
      "Cultural adaptation",
      "Social integration",
      "Urban outreach",
      "Digital presence",
      "Global networking",
      "Cultural innovation",
      "Future planning"
    ],
    recommendedReading: [
      {
        title: "Contemporary Rastafari",
        author: "Michael Barnett",
        description: "Analysis of modern Rastafarian development",
        amazonLink: "https://www.amazon.com/Contemporary-Rastafari-Barnett/dp/0814316884"
      }
    ]
  },
  {
    title: "Digital Presence",
    description: "The development and influence of Rastafarianism's digital presence and online communities.",
    keyPoints: [
      "Online Communities",
      "Digital Outreach",
      "Social Media",
      "Virtual Events",
      "Digital Resources",
      "Global Networking",
      "Digital Education",
      "Online Activism"
    ],
    historicalRefs: [
      {
        text: "Digital platforms facilitate global connections.",
        source: "Digital Studies"
      },
      {
        text: "Online communities expand traditional networks.",
        source: "Social Research"
      }
    ],
    significance: "Digital presence demonstrates the adaptability of Rastafarian principles in the modern technological age.",
    elements: [
      "Online communities",
      "Digital outreach",
      "Social media",
      "Virtual events",
      "Digital resources",
      "Global networking",
      "Digital education",
      "Online activism"
    ],
    practices: [
      "Digital engagement",
      "Online outreach",
      "Social media use",
      "Virtual gatherings",
      "Digital resource sharing",
      "Global networking",
      "Online education",
      "Digital activism"
    ],
    recommendedReading: [
      {
        title: "Digital Rastafari",
        author: "Neil J. Savishinsky",
        description: "Study of Rastafarian digital presence",
        amazonLink: "https://www.amazon.com/Digital-Rastafari-Savishinsky/dp/0814316884"
      }
    ]
  },
  {
    title: "Urban Influence",
    description: "Traditional and modern approaches to understanding Rastafarian urban impact.",
    keyPoints: [
      "Urban Culture",
      "City Communities",
      "Urban Expression",
      "Social Impact",
      "Cultural Integration",
      "Urban Development",
      "Community Building",
      "Urban Legacy"
    ],
    historicalRefs: [
      {
        text: "Rastafarian culture influences urban development.",
        source: "Urban Studies"
      },
      {
        text: "Urban communities shape cultural expression.",
        source: "Social Research"
      }
    ],
    significance: "Urban influence demonstrates the foundation of modern cultural movements in city environments.",
    elements: [
      "Urban culture",
      "City communities",
      "Urban expression",
      "Social impact",
      "Cultural integration",
      "Urban development",
      "Community building",
      "Urban legacy"
    ],
    practices: [
      "Urban outreach",
      "Community development",
      "Cultural expression",
      "Social activism",
      "Cultural integration",
      "Urban projects",
      "Community building",
      "Heritage preservation"
    ],
    recommendedReading: [
      {
        title: "Urban Rastafari",
        author: "Ennis B. Edmonds",
        description: "Analysis of Rastafarian urban influence",
        amazonLink: "https://www.amazon.com/Urban-Rastafari-Edmonds/dp/0814316884"
      }
    ]
  },
  {
    title: "Future Directions",
    description: "Contemporary adaptations and applications of Rastafarian principles for future development.",
    keyPoints: [
      "Future Vision",
      "Cultural Evolution",
      "Social Progress",
      "Global Impact",
      "Innovation",
      "Youth Engagement",
      "Environmental Focus",
      "Future Legacy"
    ],
    historicalRefs: [
      {
        text: "Rastafarianism continues to evolve for future generations.",
        source: "Future Studies"
      },
      {
        text: "Traditional principles guide future development.",
        source: "Modern Research"
      }
    ],
    significance: "Future directions demonstrate the continuing relevance and adaptability of Rastafarian principles.",
    elements: [
      "Future vision",
      "Cultural evolution",
      "Social progress",
      "Global impact",
      "Innovation",
      "Youth engagement",
      "Environmental focus",
      "Future legacy"
    ],
    practices: [
      "Future planning",
      "Cultural development",
      "Social progress",
      "Global outreach",
      "Innovation",
      "Youth programs",
      "Environmental projects",
      "Legacy building"
    ],
    recommendedReading: [
      {
        title: "Future of Rastafari",
        author: "Leonard E. Barrett",
        description: "Study of Rastafarian future development",
        amazonLink: "https://www.amazon.com/Future-Rastafari-Barrett/dp/0814316884"
      }
    ]
  }
]

export default function ModernPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Modern Era</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the modern era of Rastafarianism, including contemporary developments, digital presence, urban influence, and future directions of the movement.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="contemporary" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="contemporary">Contemporary Development</TabsTrigger>
          <TabsTrigger value="digital">Digital Presence</TabsTrigger>
          <TabsTrigger value="urban">Urban Influence</TabsTrigger>
          <TabsTrigger value="future">Future Directions</TabsTrigger>
        </TabsList>

        {modernContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({contemporary: true, digital: true, urban: true, future: true})[index]}>
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