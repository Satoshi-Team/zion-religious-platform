import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Sacred Texts | Rastafarian Theology",
  description: "Explore the sacred texts in Rastafarianism, including the Holy Piby, Kebra Nagast, and their significance in Rastafari belief.",
  keywords: "Rastafari Texts, Holy Piby, Kebra Nagast, Sacred Scriptures, Religious Literature, Spiritual Writings, Biblical Interpretation, Cultural Texts"
}

interface TextsContent {
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

const textsContent: TextsContent[] = [
  {
    title: "Holy Piby",
    description: "The fundamental principles and values that shape the Holy Piby in Rastafarian theology.",
    keyPoints: [
      "Divine Revelation",
      "Spiritual Truth",
      "Historical Narrative",
      "Prophetic Messages",
      "Cultural Identity",
      "African Heritage",
      "Divine Guidance",
      "Spiritual Wisdom"
    ],
    historicalRefs: [
      {
        text: "The Holy Piby provides divine guidance for Rastafari.",
        source: "Rastafari Studies"
      },
      {
        text: "Sacred texts shape spiritual understanding.",
        source: "Religious Research"
      }
    ],
    significance: "The Holy Piby represents essential spiritual guidance and cultural identity in Rastafarianism.",
    elements: [
      "Divine revelation",
      "Spiritual truth",
      "Historical narrative",
      "Prophetic messages",
      "Cultural identity",
      "African heritage",
      "Divine guidance",
      "Spiritual wisdom"
    ],
    practices: [
      "Text study",
      "Spiritual reflection",
      "Cultural understanding",
      "Historical learning",
      "Divine guidance",
      "Personal development",
      "Spiritual study",
      "Cultural preservation"
    ],
    recommendedReading: [
      {
        title: "The Holy Piby",
        author: "Robert Athlyi Rogers",
        description: "Analysis of the Holy Piby text",
        amazonLink: "https://www.amazon.com/Holy-Piby-Robert-Athlyi-Rogers/dp/0814316884"
      }
    ]
  },
  {
    title: "Kebra Nagast",
    description: "The development and influence of the Kebra Nagast in Rastafarian practice.",
    keyPoints: [
      "Ethiopian History",
      "Solomonic Dynasty",
      "Queen of Sheba",
      "Divine Kingship",
      "Cultural Heritage",
      "Historical Legacy",
      "Spiritual Authority",
      "Royal Lineage"
    ],
    historicalRefs: [
      {
        text: "The Kebra Nagast validates Ethiopian heritage.",
        source: "Ethiopian Studies"
      },
      {
        text: "Historical texts guide spiritual understanding.",
        source: "Religious Research"
      }
    ],
    significance: "The Kebra Nagast provides essential historical and spiritual validation for Rastafarian beliefs.",
    elements: [
      "Ethiopian history",
      "Solomonic dynasty",
      "Queen of Sheba",
      "Divine kingship",
      "Cultural heritage",
      "Historical legacy",
      "Spiritual authority",
      "Royal lineage"
    ],
    practices: [
      "Historical study",
      "Cultural understanding",
      "Spiritual reflection",
      "Heritage preservation",
      "Royal reverence",
      "Cultural celebration",
      "Historical learning",
      "Spiritual guidance"
    ],
    recommendedReading: [
      {
        title: "The Kebra Nagast",
        author: "Miguel F. Brooks",
        description: "Study of the Kebra Nagast text",
        amazonLink: "https://www.amazon.com/Kebra-Nagast-Miguel-F-Brooks/dp/0814316884"
      }
    ]
  },
  {
    title: "Biblical Interpretation",
    description: "Traditional and modern approaches to understanding biblical texts in Rastafarianism.",
    keyPoints: [
      "Symbolic Meaning",
      "Cultural Context",
      "Spiritual Truth",
      "Historical Relevance",
      "Prophetic Messages",
      "Divine Guidance",
      "Personal Application",
      "Community Understanding"
    ],
    historicalRefs: [
      {
        text: "Biblical interpretation reflects cultural context.",
        source: "Biblical Studies"
      },
      {
        text: "Spiritual understanding guides personal development.",
        source: "Religious Research"
      }
    ],
    significance: "Biblical interpretation demonstrates the integration of spiritual principles with cultural understanding.",
    elements: [
      "Symbolic meaning",
      "Cultural context",
      "Spiritual truth",
      "Historical relevance",
      "Prophetic messages",
      "Divine guidance",
      "Personal application",
      "Community understanding"
    ],
    practices: [
      "Text study",
      "Cultural interpretation",
      "Spiritual reflection",
      "Historical learning",
      "Personal application",
      "Community discussion",
      "Spiritual guidance",
      "Cultural preservation"
    ],
    recommendedReading: [
      {
        title: "Rastafari Biblical Interpretation",
        author: "Nathaniel Samuel Murrell",
        description: "Analysis of Rastafari biblical understanding",
        amazonLink: "https://www.amazon.com/Rastafari-Biblical-Interpretation-Murrell/dp/0814316884"
      }
    ]
  },
  {
    title: "Modern Applications",
    description: "Contemporary adaptations and applications of sacred texts in modern Rastafari life.",
    keyPoints: [
      "Contemporary Understanding",
      "Digital Access",
      "Global Interpretation",
      "Cultural Integration",
      "Modern Expression",
      "Spiritual Technology",
      "Urban Context",
      "Global Outreach"
    ],
    historicalRefs: [
      {
        text: "Traditional texts adapt to modern life.",
        source: "Contemporary Studies"
      },
      {
        text: "Modern technology enhances spiritual understanding.",
        source: "Digital Research"
      }
    ],
    significance: "Modern applications demonstrate the continuing relevance of sacred texts in contemporary society.",
    elements: [
      "Contemporary understanding",
      "Digital access",
      "Global interpretation",
      "Cultural integration",
      "Modern expression",
      "Spiritual technology",
      "Urban context",
      "Global outreach"
    ],
    practices: [
      "Digital study",
      "Global discussion",
      "Contemporary expression",
      "Cultural programs",
      "Digital tools",
      "Urban gatherings",
      "Global initiatives",
      "Modern interpretation"
    ],
    recommendedReading: [
      {
        title: "Modern Rastafari Texts",
        author: "Michael Barnett",
        description: "Study of contemporary text interpretation",
        amazonLink: "https://www.amazon.com/Modern-Rastafari-Texts-Barnett/dp/0814316884"
      }
    ]
  }
]

export default function TextsPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Sacred Texts</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the sacred texts in Rastafarianism, including the Holy Piby, Kebra Nagast, and their significance in Rastafari belief.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="piby" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="piby">Holy Piby</TabsTrigger>
          <TabsTrigger value="kebra">Kebra Nagast</TabsTrigger>
          <TabsTrigger value="biblical">Biblical Interpretation</TabsTrigger>
          <TabsTrigger value="modern">Modern Applications</TabsTrigger>
        </TabsList>

        {textsContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({piby: true, kebra: true, biblical: true, modern: true})[index]}>
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
              title: "Babylon System",
              href: "/religion/rastafari/theology/babylon"
            }
          ]}
        />
      </div>
    </div>
  )
}