import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "African Heritage | Rastafarian Theology",
  description: "Explore the African heritage in Rastafarianism, including cultural roots, spiritual traditions, and historical significance in Rastafari belief.",
  keywords: "African Heritage, Rastafari Culture, African Roots, Spiritual Traditions, Cultural Identity, Historical Significance, African Spirituality, Cultural Heritage"
}

interface AfricaContent {
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

const africaContent: AfricaContent[] = [
  {
    title: "Cultural Roots",
    description: "The fundamental principles and values that shape the African heritage in Rastafarian theology.",
    keyPoints: [
      "African Identity",
      "Cultural Heritage",
      "Traditional Values",
      "Spiritual Roots",
      "Historical Connection",
      "Cultural Pride",
      "Ancestral Wisdom",
      "Cultural Continuity"
    ],
    historicalRefs: [
      {
        text: "African heritage forms the foundation of Rastafari identity.",
        source: "Rastafari History"
      },
      {
        text: "Traditional African values guide spiritual development.",
        source: "Cultural Studies"
      }
    ],
    significance: "African heritage represents the fundamental cultural and spiritual foundation of Rastafarian belief and practice.",
    elements: [
      "African identity",
      "Cultural heritage",
      "Traditional values",
      "Spiritual roots",
      "Historical connection",
      "Cultural pride",
      "Ancestral wisdom",
      "Cultural continuity"
    ],
    practices: [
      "Cultural celebration",
      "Heritage preservation",
      "Traditional rituals",
      "Spiritual practice",
      "Historical remembrance",
      "Cultural education",
      "Ancestral worship",
      "Cultural development"
    ],
    recommendedReading: [
      {
        title: "Rastafari and African Heritage",
        author: "Barry Chevannes",
        description: "Analysis of African roots in Rastafari",
        amazonLink: "https://www.amazon.com/Rastafari-African-Heritage-Chevannes/dp/0814316884"
      }
    ]
  },
  {
    title: "Spiritual Traditions",
    description: "The development and influence of African spiritual traditions in Rastafarian practice.",
    keyPoints: [
      "Traditional Beliefs",
      "Spiritual Practices",
      "Ritual Ceremonies",
      "Ancestral Worship",
      "Divine Connection",
      "Spiritual Healing",
      "Cultural Rituals",
      "Sacred Traditions"
    ],
    historicalRefs: [
      {
        text: "African spiritual traditions shape Rastafari practice.",
        source: "Spiritual Heritage"
      },
      {
        text: "Traditional rituals guide spiritual development.",
        source: "Cultural Teachings"
      }
    ],
    significance: "African spiritual traditions provide essential guidance for Rastafarian spiritual practice and development.",
    elements: [
      "Traditional beliefs",
      "Spiritual practices",
      "Ritual ceremonies",
      "Ancestral worship",
      "Divine connection",
      "Spiritual healing",
      "Cultural rituals",
      "Sacred traditions"
    ],
    practices: [
      "Traditional worship",
      "Spiritual ceremonies",
      "Ritual practice",
      "Ancestral rites",
      "Divine connection",
      "Healing practices",
      "Cultural rituals",
      "Sacred ceremonies"
    ],
    recommendedReading: [
      {
        title: "African Spirituality in Rastafari",
        author: "Ennis B. Edmonds",
        description: "Study of African spiritual traditions",
        amazonLink: "https://www.amazon.com/African-Spirituality-Rastafari-Edmonds/dp/0814316884"
      }
    ]
  },
  {
    title: "Historical Significance",
    description: "Traditional and modern approaches to understanding African heritage in Rastafarian history.",
    keyPoints: [
      "Historical Roots",
      "Cultural Development",
      "Social Impact",
      "Political Influence",
      "Identity Formation",
      "Cultural Revival",
      "Historical Memory",
      "Cultural Legacy"
    ],
    historicalRefs: [
      {
        text: "African heritage shapes Rastafari historical development.",
        source: "Historical Studies"
      },
      {
        text: "Cultural roots influence social and political movements.",
        source: "Cultural Research"
      }
    ],
    significance: "Historical significance emphasizes the crucial role of African heritage in shaping Rastafarian identity and development.",
    elements: [
      "Historical roots",
      "Cultural development",
      "Social impact",
      "Political influence",
      "Identity formation",
      "Cultural revival",
      "Historical memory",
      "Cultural legacy"
    ],
    practices: [
      "Historical study",
      "Cultural preservation",
      "Social activism",
      "Political engagement",
      "Identity development",
      "Cultural programs",
      "Historical remembrance",
      "Legacy preservation"
    ],
    recommendedReading: [
      {
        title: "Rastafari History and Heritage",
        author: "William David Spencer",
        description: "Analysis of Rastafari historical significance",
        amazonLink: "https://www.amazon.com/Rastafari-History-Heritage-Spencer/dp/0814316884"
      }
    ]
  },
  {
    title: "Modern Applications",
    description: "Contemporary adaptations and applications of African heritage in modern Rastafari practice.",
    keyPoints: [
      "Cultural Revival",
      "Modern Identity",
      "Global Influence",
      "Cultural Integration",
      "Heritage Preservation",
      "Contemporary Practice",
      "Cultural Innovation",
      "Global Heritage"
    ],
    historicalRefs: [
      {
        text: "Traditional heritage guides modern practice.",
        source: "Contemporary Studies"
      },
      {
        text: "African roots influence global cultural development.",
        source: "Modern Culture"
      }
    ],
    significance: "Modern applications demonstrate the continuing relevance of African heritage to contemporary Rastafari practice.",
    elements: [
      "Cultural revival",
      "Modern identity",
      "Global influence",
      "Cultural integration",
      "Heritage preservation",
      "Contemporary practice",
      "Cultural innovation",
      "Global heritage"
    ],
    practices: [
      "Cultural programs",
      "Identity development",
      "Global exchange",
      "Cultural integration",
      "Heritage protection",
      "Modern practice",
      "Cultural innovation",
      "Global heritage"
    ],
    recommendedReading: [
      {
        title: "Modern Rastafari Heritage",
        author: "Michael Barnett",
        description: "Study of contemporary African heritage",
        amazonLink: "https://www.amazon.com/Modern-Rastafari-Heritage-Barnett/dp/0814316884"
      }
    ]
  }
]

export default function AfricaPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>African Heritage</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the African heritage in Rastafarianism, including cultural roots, spiritual traditions, and historical significance in Rastafari belief.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="roots" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="roots">Cultural Roots</TabsTrigger>
          <TabsTrigger value="traditions">Spiritual Traditions</TabsTrigger>
          <TabsTrigger value="significance">Historical Significance</TabsTrigger>
          <TabsTrigger value="modern">Modern Applications</TabsTrigger>
        </TabsList>

        {africaContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({roots: true, traditions: true, significance: true, modern: true})[index]}>
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
              title: "Babylon System",
              href: "/religion/rastafari/theology/babylon"
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