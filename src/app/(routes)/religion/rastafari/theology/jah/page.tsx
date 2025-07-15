import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Jah and Divinity | Rastafarian Theology",
  description: "Explore the concept of Jah in Rastafarianism, including divine nature, manifestations, and spiritual significance in Rastafari belief.",
  keywords: "Jah, Rastafari Divinity, Divine Nature, Spiritual Belief, Religious Theology, Divine Manifestation, Spiritual Significance, Religious Practice"
}

interface JahContent {
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

const jahContent: JahContent[] = [
  {
    title: "Divine Nature",
    description: "The fundamental principles and values that shape the concept of Jah in Rastafarian theology.",
    keyPoints: [
      "Divine Essence",
      "Universal Presence",
      "Spiritual Power",
      "Divine Love",
      "Eternal Nature",
      "Divine Wisdom",
      "Spiritual Truth",
      "Divine Justice"
    ],
    historicalRefs: [
      {
        text: "Jah is the source of all creation and life.",
        source: "Rastafari Theology"
      },
      {
        text: "Divine presence manifests in all beings.",
        source: "Spiritual Teachings"
      }
    ],
    significance: "The concept of Jah represents the fundamental divine nature that unites all creation and guides spiritual development.",
    elements: [
      "Divine essence",
      "Universal presence",
      "Spiritual power",
      "Divine love",
      "Eternal nature",
      "Divine wisdom",
      "Spiritual truth",
      "Divine justice"
    ],
    practices: [
      "Divine worship",
      "Spiritual meditation",
      "Divine connection",
      "Spiritual practice",
      "Divine guidance",
      "Spiritual development",
      "Divine wisdom",
      "Spiritual truth"
    ],
    recommendedReading: [
      {
        title: "Rastafari Theology",
        author: "Leonard E. Barrett",
        description: "Analysis of Rastafari divine concepts",
        amazonLink: "https://www.amazon.com/Rastafari-Theology-Leonard-Barrett/dp/0814316884"
      }
    ]
  },
  {
    title: "Divine Manifestation",
    description: "The development and influence of Jah's manifestation in the physical world and human experience.",
    keyPoints: [
      "Human Form",
      "Natural World",
      "Spiritual Signs",
      "Divine Messages",
      "Sacred Places",
      "Ritual Objects",
      "Spiritual Events",
      "Divine Presence"
    ],
    historicalRefs: [
      {
        text: "Jah manifests in human form and nature.",
        source: "Rastafari Belief"
      },
      {
        text: "Divine presence guides spiritual development.",
        source: "Spiritual Teachings"
      }
    ],
    significance: "Divine manifestation demonstrates Jah's active presence in the world and human experience.",
    elements: [
      "Human manifestation",
      "Natural presence",
      "Spiritual signs",
      "Divine messages",
      "Sacred spaces",
      "Ritual objects",
      "Spiritual events",
      "Divine guidance"
    ],
    practices: [
      "Divine worship",
      "Spiritual observation",
      "Ritual practice",
      "Divine communication",
      "Sacred ceremonies",
      "Spiritual rituals",
      "Divine connection",
      "Spiritual development"
    ],
    recommendedReading: [
      {
        title: "Rastafari Manifestation",
        author: "Ennis B. Edmonds",
        description: "Study of divine manifestation in Rastafari",
        amazonLink: "https://www.amazon.com/Rastafari-Manifestation-Ennis-Edmonds/dp/0814316884"
      }
    ]
  },
  {
    title: "Spiritual Significance",
    description: "Traditional and modern approaches to understanding Jah's role in spiritual development and practice.",
    keyPoints: [
      "Spiritual Guidance",
      "Divine Protection",
      "Spiritual Growth",
      "Divine Blessing",
      "Spiritual Truth",
      "Divine Wisdom",
      "Spiritual Power",
      "Divine Love"
    ],
    historicalRefs: [
      {
        text: "Jah guides spiritual development and growth.",
        source: "Rastafari Practice"
      },
      {
        text: "Divine presence protects and blesses believers.",
        source: "Spiritual Teachings"
      }
    ],
    significance: "Spiritual significance emphasizes Jah's role in guiding and supporting spiritual development.",
    elements: [
      "Spiritual guidance",
      "Divine protection",
      "Spiritual growth",
      "Divine blessing",
      "Spiritual truth",
      "Divine wisdom",
      "Spiritual power",
      "Divine love"
    ],
    practices: [
      "Spiritual meditation",
      "Divine worship",
      "Spiritual practice",
      "Divine connection",
      "Spiritual development",
      "Divine guidance",
      "Spiritual rituals",
      "Divine blessing"
    ],
    recommendedReading: [
      {
        title: "Rastafari Spirituality",
        author: "William David Spencer",
        description: "Analysis of Rastafari spiritual significance",
        amazonLink: "https://www.amazon.com/Rastafari-Spirituality-William-Spencer/dp/0814316884"
      }
    ]
  },
  {
    title: "Modern Applications",
    description: "Contemporary adaptations and applications of Jah concepts in modern Rastafari practice.",
    keyPoints: [
      "Contemporary Worship",
      "Modern Spirituality",
      "Global Influence",
      "Cultural Integration",
      "Spiritual Innovation",
      "Divine Connection",
      "Cultural Revival",
      "Spiritual Development"
    ],
    historicalRefs: [
      {
        text: "Traditional concepts guide modern practice.",
        source: "Contemporary Rastafari"
      },
      {
        text: "Divine presence influences global culture.",
        source: "Modern Spirituality"
      }
    ],
    significance: "Modern applications demonstrate the continuing relevance of Jah concepts to contemporary spiritual practice.",
    elements: [
      "Contemporary worship",
      "Modern spirituality",
      "Global influence",
      "Cultural integration",
      "Spiritual innovation",
      "Divine connection",
      "Cultural revival",
      "Spiritual development"
    ],
    practices: [
      "Modern worship",
      "Spiritual practice",
      "Cultural programs",
      "Global exchange",
      "Spiritual innovation",
      "Divine connection",
      "Cultural activities",
      "Spiritual development"
    ],
    recommendedReading: [
      {
        title: "Modern Rastafari",
        author: "Michael Barnett",
        description: "Study of contemporary Rastafari practice",
        amazonLink: "https://www.amazon.com/Modern-Rastafari-Michael-Barnett/dp/0814316884"
      }
    ]
  }
]

export default function JahPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Jah and Divinity</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the concept of Jah in Rastafarianism, including divine nature, manifestations, and spiritual significance in Rastafari belief.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="nature" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="nature">Divine Nature</TabsTrigger>
          <TabsTrigger value="manifestation">Manifestation</TabsTrigger>
          <TabsTrigger value="significance">Spiritual Significance</TabsTrigger>
          <TabsTrigger value="modern">Modern Applications</TabsTrigger>
        </TabsList>

        {jahContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({nature: true, manifestation: true, significance: true, modern: true})[index]}>
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
              title: "African Heritage",
              href: "/religion/rastafari/theology/african"
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