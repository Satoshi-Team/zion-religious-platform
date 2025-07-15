import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Progressive Revelation | Bahá'í Theology",
  description: "Explore the Bahá'í concept of Progressive Revelation, examining how divine truth unfolds gradually through successive Manifestations of God throughout human history.",
  keywords: "Progressive Revelation, Bahá'í Faith, Manifestations of God, Religious Unity, Divine Education, Spiritual Evolution, Religious Truth, Divine Plan"
}

interface ProgressiveRevelationContent {
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

const progressiveRevelationContent: ProgressiveRevelationContent[] = [
  {
    title: "Foundational Principles",
    description: "Examining the core concepts and principles underlying the Bahá'í understanding of Progressive Revelation.",
    keyPoints: [
      "Unity of religion",
      "Divine education",
      "Spiritual evolution",
      "Manifestations of God",
      "Cyclical revelation",
      "Religious renewal",
      "Divine attributes",
      "Universal truth"
    ],
    historicalRefs: [
      {
        text: "Bahá'u'lláh's explanation of Progressive Revelation in the Kitáb-i-Íqán (The Book of Certitude).",
        source: "Kitáb-i-Íqán"
      },
      {
        text: "'Abdu'l-Bahá's elaboration on the concept in Some Answered Questions.",
        source: "Some Answered Questions"
      }
    ],
    significance: "Progressive Revelation forms the theological foundation for understanding the relationship between different religions and the purpose of divine education in human spiritual evolution.",
    elements: [
      "Divine unity",
      "Religious continuity",
      "Spiritual capacity",
      "Divine educators",
      "Historical context",
      "Social evolution",
      "Prophetic fulfillment",
      "Universal principles"
    ],
    practices: [
      "Comparative study",
      "Interfaith dialogue",
      "Historical analysis",
      "Scriptural reflection",
      "Community discussion",
      "Personal investigation",
      "Educational programs",
      "Unity building"
    ],
    recommendedReading: [
      {
        title: "The Kitáb-i-Íqán: The Book of Certitude",
        author: "Bahá'u'lláh",
        description: "Foundational text explaining Progressive Revelation",
        amazonLink: "https://www.amazon.com/Kitab-I-Iqan-Book-Certitude-Bahaullah/dp/1931847088"
      }
    ]
  },
  {
    title: "Historical Manifestations",
    description: "Analyzing the sequence of Divine Manifestations and their roles in humanity's spiritual development.",
    keyPoints: [
      "Abraham's covenant",
      "Krishna's teachings",
      "Moses' laws",
      "Buddha's enlightenment",
      "Christ's revelation",
      "Muhammad's message",
      "The Báb's herald",
      "Bahá'u'lláh's dispensation"
    ],
    historicalRefs: [
      {
        text: "Bahá'u'lláh's recognition of previous Manifestations in The Proclamation of Bahá'u'lláh.",
        source: "The Proclamation of Bahá'u'lláh"
      },
      {
        text: "Shoghi Effendi's systematic explanation in God Passes By.",
        source: "God Passes By"
      }
    ],
    significance: "Understanding the sequence and purpose of Divine Manifestations reveals the coherent pattern of religious history and spiritual development.",
    elements: [
      "Divine attributes",
      "Historical context",
      "Social teachings",
      "Spiritual laws",
      "Prophetic cycles",
      "Cultural adaptation",
      "Progressive unfoldment",
      "Unity in diversity"
    ],
    practices: [
      "Sacred text study",
      "Historical research",
      "Comparative analysis",
      "Timeline creation",
      "Cultural understanding",
      "Interfaith dialogue",
      "Educational outreach",
      "Community building"
    ],
    recommendedReading: [
      {
        title: "God Passes By",
        author: "Shoghi Effendi",
        description: "Historical analysis of religious dispensations",
        amazonLink: "https://www.amazon.com/God-Passes-By-Shoghi-Effendi/dp/1931847126"
      }
    ]
  },
  {
    title: "Spiritual Evolution",
    description: "Exploring how Progressive Revelation guides humanity's collective spiritual and social development.",
    keyPoints: [
      "Collective growth",
      "Social advancement",
      "Moral development",
      "Scientific harmony",
      "Unity principles",
      "Global civilization",
      "Spiritual capacity",
      "Divine education"
    ],
    historicalRefs: [
      {
        text: "'Abdu'l-Bahá's exposition on spiritual evolution in Paris Talks.",
        source: "Paris Talks"
      },
      {
        text: "Bahá'u'lláh's vision of humanity's maturation in Gleanings.",
        source: "Gleanings from the Writings of Bahá'u'lláh"
      }
    ],
    significance: "Progressive Revelation drives humanity's spiritual evolution toward global unity and collective maturity.",
    elements: [
      "Evolutionary stages",
      "Social transformation",
      "Moral advancement",
      "Scientific progress",
      "Cultural integration",
      "Global consciousness",
      "Spiritual qualities",
      "Universal peace"
    ],
    practices: [
      "Community development",
      "Educational initiatives",
      "Social action",
      "Moral education",
      "Unity building",
      "Scientific engagement",
      "Arts integration",
      "Peace promotion"
    ],
    recommendedReading: [
      {
        title: "Century of Light",
        author: "Universal House of Justice",
        description: "Analysis of humanity's spiritual evolution",
        amazonLink: "https://www.amazon.com/Century-Light-Universal-House-Justice/dp/1931847126"
      }
    ]
  },
  {
    title: "Contemporary Applications",
    description: "Examining how Progressive Revelation addresses modern challenges and guides future development.",
    keyPoints: [
      "Global unity",
      "Scientific harmony",
      "Social justice",
      "Environmental stewardship",
      "Gender equality",
      "Economic fairness",
      "Educational access",
      "Peace building"
    ],
    historicalRefs: [
      {
        text: "Universal House of Justice guidance on applying Progressive Revelation principles.",
        source: "Messages of the Universal House of Justice"
      },
      {
        text: "Bahá'í International Community statements on global challenges.",
        source: "BIC Documents"
      }
    ],
    significance: "Progressive Revelation provides a framework for addressing contemporary global challenges and building a peaceful world civilization.",
    elements: [
      "Global governance",
      "Social principles",
      "Economic justice",
      "Environmental care",
      "Educational systems",
      "Scientific advancement",
      "Cultural preservation",
      "Unity frameworks"
    ],
    practices: [
      "Community action",
      "Social discourse",
      "Public engagement",
      "Environmental projects",
      "Educational programs",
      "Economic initiatives",
      "Peace building",
      "Unity promotion"
    ],
    recommendedReading: [
      {
        title: "For the Betterment of the World",
        author: "Bahá'í International Community",
        description: "Contemporary application of Bahá'í principles",
        amazonLink: "https://www.amazon.com/Betterment-World-Bahai-International-Community/dp/1931847126"
      }
    ]
  }
]

export default function ProgressiveRevelationPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Progressive Revelation in the Bahá'í Faith</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the Bahá'í concept of Progressive Revelation, examining how divine truth unfolds gradually through successive Manifestations of God throughout human history.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="principles" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="principles">Principles</TabsTrigger>
          <TabsTrigger value="manifestations">Manifestations</TabsTrigger>
          <TabsTrigger value="evolution">Evolution</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        {progressiveRevelationContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({principles: true, manifestations: true, evolution: true, contemporary: true})[index]}>
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
              title: "Unity of Religion",
              href: "/religion/bahai/theology/unity-religion"
            },
            {
              title: "Manifestation of God",
              href: "/religion/bahai/theology/manifestation"
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