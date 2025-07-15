import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Divine Manifestations | Bahá'í Theology",
  description: "Explore the Bahá'í concept of Divine Manifestations, examining their nature, purpose, and role as perfect mirrors of divine attributes throughout human history.",
  keywords: "Divine Manifestations, Bahá'í Faith, Prophets, Messengers, Spiritual Teachers, Divine Attributes, Religious Founders, Sacred History"
}

interface ManifestationsContent {
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

const manifestationsContent: ManifestationsContent[] = [
  {
    title: "Divine Nature",
    description: "Examining the unique station and characteristics of Divine Manifestations as perfect mirrors of God's attributes.",
    keyPoints: [
      "Double station",
      "Perfect mirrors",
      "Divine attributes",
      "Human nature",
      "Spiritual perfection",
      "Divine knowledge",
      "Infallibility",
      "Universal mission"
    ],
    historicalRefs: [
      {
        text: "Bahá'u'lláh's explanation of the station of Manifestations in Gleanings.",
        source: "Gleanings from the Writings of Bahá'u'lláh"
      },
      {
        text: "'Abdu'l-Bahá's clarification of Manifestations' nature in Some Answered Questions.",
        source: "Some Answered Questions"
      }
    ],
    significance: "Understanding the unique station of Divine Manifestations reveals their essential role as intermediaries between humanity and the Divine.",
    elements: [
      "Divine essence",
      "Human form",
      "Perfect reflection",
      "Spiritual power",
      "Divine authority",
      "Universal wisdom",
      "Perfect attributes",
      "Eternal connection"
    ],
    practices: [
      "Spiritual study",
      "Meditation practice",
      "Sacred readings",
      "Personal reflection",
      "Community discussion",
      "Historical research",
      "Comparative study",
      "Devotional gatherings"
    ],
    recommendedReading: [
      {
        title: "The Kitáb-i-Íqán",
        author: "Bahá'u'lláh",
        description: "Foundational text on the nature of Divine Manifestations",
        amazonLink: "https://www.amazon.com/Kitab-I-Iqan-Book-Certitude-Bahaullah/dp/1931847088"
      }
    ]
  },
  {
    title: "Historical Sequence",
    description: "Analyzing the progressive sequence of Divine Manifestations throughout human history.",
    keyPoints: [
      "Abraham's covenant",
      "Krishna's teachings",
      "Moses' laws",
      "Buddha's enlightenment",
      "Christ's revelation",
      "Muhammad's message",
      "The Báb's herald",
      "Bahá'u'lláh's cycle"
    ],
    historicalRefs: [
      {
        text: "Bahá'u'lláh's recognition of previous Manifestations in The Proclamation.",
        source: "The Proclamation of Bahá'u'lláh"
      },
      {
        text: "Shoghi Effendi's historical analysis in God Passes By.",
        source: "God Passes By"
      }
    ],
    significance: "The sequence of Divine Manifestations reveals the progressive unfoldment of religious truth throughout human history.",
    elements: [
      "Prophetic cycles",
      "Divine covenants",
      "Sacred missions",
      "Social teachings",
      "Spiritual laws",
      "Cultural contexts",
      "Progressive truth",
      "Divine education"
    ],
    practices: [
      "Historical study",
      "Sacred text analysis",
      "Timeline creation",
      "Comparative research",
      "Cultural exploration",
      "Educational programs",
      "Community learning",
      "Interfaith dialogue"
    ],
    recommendedReading: [
      {
        title: "Thief in the Night",
        author: "William Sears",
        description: "Analysis of prophetic fulfillment",
        amazonLink: "https://www.amazon.com/Thief-Night-William-Sears/dp/0853980489"
      }
    ]
  },
  {
    title: "Spiritual Functions",
    description: "Exploring the essential spiritual and social functions of Divine Manifestations in human development.",
    keyPoints: [
      "Divine education",
      "Spiritual transformation",
      "Social advancement",
      "Moral guidance",
      "Cultural evolution",
      "Prophetic vision",
      "Divine knowledge",
      "Universal peace"
    ],
    historicalRefs: [
      {
        text: "'Abdu'l-Bahá's explanations of Manifestations' roles in Paris Talks.",
        source: "Paris Talks"
      },
      {
        text: "Bahá'u'lláh's teachings on divine education in Hidden Words.",
        source: "The Hidden Words"
      }
    ],
    significance: "Divine Manifestations serve as perfect educators for humanity's spiritual and social development.",
    elements: [
      "Educational mission",
      "Spiritual guidance",
      "Social laws",
      "Moral teachings",
      "Cultural advancement",
      "Scientific progress",
      "Artistic inspiration",
      "Unity building"
    ],
    practices: [
      "Spiritual education",
      "Character development",
      "Social service",
      "Community building",
      "Arts and culture",
      "Scientific study",
      "Peace promotion",
      "Unity activities"
    ],
    recommendedReading: [
      {
        title: "Some Answered Questions",
        author: "'Abdu'l-Bahá",
        description: "Detailed explanations of Manifestations' roles",
        amazonLink: "https://www.amazon.com/Some-Answered-Questions-Abdul-Baha/dp/1931847177"
      }
    ]
  },
  {
    title: "Contemporary Recognition",
    description: "Examining the challenges and importance of recognizing Divine Manifestations in the modern age.",
    keyPoints: [
      "Spiritual perception",
      "Independent investigation",
      "Prophetic fulfillment",
      "Modern challenges",
      "Scientific harmony",
      "Social transformation",
      "Global unity",
      "Future promise"
    ],
    historicalRefs: [
      {
        text: "Bahá'u'lláh's guidance on spiritual recognition in Book of Certitude.",
        source: "Kitáb-i-Íqán"
      },
      {
        text: "Universal House of Justice guidance on modern recognition.",
        source: "Messages of the Universal House of Justice"
      }
    ],
    significance: "Recognizing Divine Manifestations is essential for accessing their transformative power in personal and collective life.",
    elements: [
      "Spiritual capacity",
      "Mental clarity",
      "Heart purity",
      "Rational proofs",
      "Spiritual evidence",
      "Social impact",
      "Personal transformation",
      "Global vision"
    ],
    practices: [
      "Personal investigation",
      "Spiritual preparation",
      "Sacred study",
      "Community consultation",
      "Educational programs",
      "Service projects",
      "Unity building",
      "Global outreach"
    ],
    recommendedReading: [
      {
        title: "The Challenge of Bahá'u'lláh",
        author: "Gary L. Matthews",
        description: "Modern proofs of divine manifestation",
        amazonLink: "https://www.amazon.com/Challenge-Bahaullah-Gary-L-Matthews/dp/1931847509"
      }
    ]
  }
]

export default function ManifestationsPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Divine Manifestations in the Bahá'í Faith</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the Bahá'í concept of Divine Manifestations, examining their nature, purpose, and role as perfect mirrors of divine attributes throughout human history.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="nature" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="nature">Divine Nature</TabsTrigger>
          <TabsTrigger value="sequence">Historical Sequence</TabsTrigger>
          <TabsTrigger value="functions">Spiritual Functions</TabsTrigger>
          <TabsTrigger value="recognition">Recognition</TabsTrigger>
        </TabsList>

        {manifestationsContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({nature: true, sequence: true, functions: true, recognition: true})[index]}>
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
              title: "Progressive Revelation",
              href: "/religion/bahai/theology/progressive-revelation"
            },
            {
              title: "Unity of Religion",
              href: "/religion/bahai/theology/unity-religion"
            },
            {
              title: "Social Principles",
              href: "/religion/bahai/principles/social"
            }
          ]}
        />
      </div>
    </div>
  )
} 