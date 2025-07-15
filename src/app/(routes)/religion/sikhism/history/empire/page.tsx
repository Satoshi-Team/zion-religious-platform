import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Sikh Empire Period | Sikh History",
  description: "Explore the period of the Sikh Empire, from its establishment under Maharaja Ranjit Singh through its expansion, cultural flourishing, and eventual decline.",
  keywords: "Sikh Empire, Maharaja Ranjit Singh, Lahore Durbar, Anglo-Sikh Wars, Sikh military, Sikh architecture, Sikh art, Sikh culture"
}

interface EmpireContent {
  title: string
  description: string
  keyPoints: string[]
  historicalRefs: Array<{ text: string; source: string }>
  significance: string
  developments: string[]
  recommendedReading?: Array<{
    title: string
    author: string
    description: string
    amazonLink: string
  }>
}

const empireContent: EmpireContent[] = [
  {
    title: "Rise of the Sikh Empire (1799-1839)",
    description: "The period of consolidation and expansion under Maharaja Ranjit Singh, who unified the Sikh misls and established a powerful empire in the Punjab.",
    keyPoints: [
      "Unification of Sikh misls under Ranjit Singh",
      "Establishment of Lahore as capital",
      "Modernization of military forces",
      "Expansion of territory",
      "Development of administrative systems"
    ],
    historicalRefs: [
      {
        text: "The Lion of the Punjab has established a kingdom where all faiths are respected.",
        source: "Contemporary British accounts"
      },
      {
        text: "The Sikh Empire stands as a beacon of religious tolerance and cultural synthesis.",
        source: "Historical records of the Lahore Durbar"
      }
    ],
    significance: "This period marked the establishment of the first and only Sikh Empire, which became a major power in South Asia and a center of cultural and religious tolerance.",
    developments: [
      "Formation of modern Sikh army",
      "Establishment of efficient bureaucracy",
      "Development of trade routes",
      "Construction of major infrastructure",
      "Cultural and artistic patronage"
    ],
    recommendedReading: [
      {
        title: "The Sikh Empire: A History",
        author: "Khushwant Singh",
        description: "Comprehensive history of the Sikh Empire under Ranjit Singh",
        amazonLink: "https://www.amazon.com/Sikh-Empire-History-Khushwant-Singh/dp/0143065432/"
      }
    ]
  },
  {
    title: "Cultural and Religious Flourishing (1800-1840)",
    description: "The period of cultural renaissance and religious development during the Sikh Empire's golden age.",
    keyPoints: [
      "Patronage of Sikh arts and architecture",
      "Development of Sikh educational institutions",
      "Preservation and expansion of religious sites",
      "Promotion of Sikh literature and music",
      "Integration of diverse cultural traditions"
    ],
    historicalRefs: [
      {
        text: "The Golden Temple stands as a testament to the Empire's devotion to Sikh heritage.",
        source: "Historical records of Amritsar"
      },
      {
        text: "Under the Sikh rule, the arts flourished as never before in the Punjab.",
        source: "Contemporary cultural accounts"
      }
    ],
    significance: "This period saw unprecedented development of Sikh culture, arts, and religious institutions, leaving a lasting legacy on Sikh identity.",
    developments: [
      "Renovation of Harmandir Sahib",
      "Establishment of Sikh schools",
      "Development of Sikh painting style",
      "Creation of new gurdwaras",
      "Preservation of historical manuscripts"
    ],
    recommendedReading: [
      {
        title: "Sikh Art and Literature",
        author: "K.S. Duggal",
        description: "Study of artistic and literary developments during the Sikh Empire",
        amazonLink: "https://www.amazon.com/Sikh-Art-Literature-K-S-Duggal/dp/8172053649/"
      }
    ]
  },
  {
    title: "Military and Administrative Systems (1800-1840)",
    description: "The development of sophisticated military and administrative structures that maintained the Empire's power and stability.",
    keyPoints: [
      "Modernization of the Khalsa Army",
      "Establishment of efficient revenue system",
      "Development of diplomatic relations",
      "Creation of modern infrastructure",
      "Implementation of legal reforms"
    ],
    historicalRefs: [
      {
        text: "The Sikh Army was the most formidable force in India after the British.",
        source: "British military records"
      },
      {
        text: "The Empire's administration was marked by efficiency and justice.",
        source: "Contemporary administrative records"
      }
    ],
    significance: "The military and administrative systems established during this period demonstrated the Sikh Empire's ability to govern effectively and maintain regional power.",
    developments: [
      "Formation of Fauj-i-Khas",
      "Establishment of modern mint",
      "Development of road networks",
      "Creation of postal system",
      "Implementation of land reforms"
    ],
    recommendedReading: [
      {
        title: "The Sikh Army: Organization and Military System",
        author: "H.S. Bhatia",
        description: "Analysis of the Sikh Empire's military organization",
        amazonLink: "https://www.amazon.com/Sikh-Army-Organization-Military-System/dp/8172053746/"
      }
    ]
  },
  {
    title: "Decline and Fall (1839-1849)",
    description: "The period of political instability, succession struggles, and eventual collapse of the Sikh Empire.",
    keyPoints: [
      "Death of Maharaja Ranjit Singh",
      "Succession struggles and court intrigues",
      "Anglo-Sikh Wars",
      "Treaty of Lahore",
      "Annexation by British"
    ],
    historicalRefs: [
      {
        text: "The Empire's decline began with the passing of the Lion of the Punjab.",
        source: "British historical records"
      },
      {
        text: "The Sikhs fought bravely but were divided by internal conflicts.",
        source: "Contemporary military accounts"
      }
    ],
    significance: "The fall of the Sikh Empire marked a significant turning point in Sikh history, leading to British colonial rule and subsequent developments in Sikh identity and politics.",
    developments: [
      "First Anglo-Sikh War",
      "Second Anglo-Sikh War",
      "Treaty of Bhyrowal",
      "Annexation of Punjab",
      "Integration into British India"
    ],
    recommendedReading: [
      {
        title: "The Anglo-Sikh Wars",
        author: "Amarpal Singh Sidhu",
        description: "Detailed account of the wars that led to the Empire's fall",
        amazonLink: "https://www.amazon.com/Anglo-Sikh-Wars-Amarpal-Singh-Sidhu/dp/0752453293/"
      }
    ]
  }
]

export default function EmpirePage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Sikh Empire Period</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the period of the Sikh Empire, from its establishment under Maharaja Ranjit Singh through its expansion, cultural flourishing, and eventual decline. This period represents a significant chapter in Sikh history, marked by political power, cultural development, and religious tolerance.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="rise" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="rise">Rise of Empire</TabsTrigger>
          <TabsTrigger value="cultural">Cultural Flourishing</TabsTrigger>
          <TabsTrigger value="military">Military Systems</TabsTrigger>
          <TabsTrigger value="decline">Decline & Fall</TabsTrigger>
        </TabsList>

        {empireContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({rise: true, cultural: true, military: true, decline: true})[index]}>
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
                  <h3 className="font-semibold mb-3">Key Developments</h3>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    {content.developments.map((development, i) => (
                      <li key={i}>{development}</li>
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

      <RelatedTopics
        topics={[
          { title: "Period of the Gurus", href: "/religion/sikhism/history/gurus" },
          { title: "British Colonial Period", href: "/religion/sikhism/history/colonial" },
          { title: "Khalsa Identity", href: "/religion/sikhism/theology/khalsa-identity" }
        ]}
        className="mt-8"
      />
    </div>
  )
} 