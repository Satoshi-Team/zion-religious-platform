import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Social Principles | Bahá'í Theology",
  description: "Explore the Bahá'í social principles and teachings that provide a framework for personal and collective transformation in building a peaceful global civilization.",
  keywords: "Bahá'í Social Principles, Unity of Humanity, Gender Equality, Universal Education, Economic Justice, World Peace, Social Justice, Global Governance, Scientific Harmony"
}

interface SocialPrinciplesContent {
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

const socialPrinciplesContent: SocialPrinciplesContent[] = [
  {
    title: "Foundational Principles",
    description: "Examining the core social principles that form the basis of Bahá'í approaches to social transformation.",
    keyPoints: [
      "Unity of humanity",
      "Gender equality",
      "Universal education",
      "Harmony of science and religion",
      "Economic justice",
      "World peace",
      "Universal language",
      "Global governance"
    ],
    historicalRefs: [
      {
        text: "Bahá'u'lláh's social teachings in the Kitáb-i-Aqdas and Tablets.",
        source: "Kitáb-i-Aqdas"
      },
      {
        text: "'Abdu'l-Bahá's elaboration in The Secret of Divine Civilization.",
        source: "The Secret of Divine Civilization"
      }
    ],
    significance: "These principles provide a comprehensive framework for building a peaceful, just, and sustainable global civilization.",
    elements: [
      "Human oneness",
      "Equal rights",
      "Universal access",
      "Scientific advancement",
      "Economic fairness",
      "Peaceful resolution",
      "Global communication",
      "International order"
    ],
    practices: [
      "Community building",
      "Gender initiatives",
      "Educational programs",
      "Scientific engagement",
      "Economic projects",
      "Peace activities",
      "Language learning",
      "Global cooperation"
    ],
    recommendedReading: [
      {
        title: "The Promise of World Peace",
        author: "Universal House of Justice",
        description: "Comprehensive overview of Bahá'í social principles",
        amazonLink: "https://www.amazon.com/Promise-World-Peace-Universal-Justice/dp/0877432317"
      }
    ]
  },
  {
    title: "Social Transformation",
    description: "Analyzing the Bahá'í approach to achieving systematic social change and development.",
    keyPoints: [
      "Organic growth",
      "Spiritual foundation",
      "Systematic action",
      "Community empowerment",
      "Capacity building",
      "Knowledge generation",
      "Institutional development",
      "Social action"
    ],
    historicalRefs: [
      {
        text: "Shoghi Effendi's guidance on social development in The World Order of Bahá'u'lláh.",
        source: "The World Order of Bahá'u'lláh"
      },
      {
        text: "Universal House of Justice framework for social action.",
        source: "Framework for Action"
      }
    ],
    significance: "The Bahá'í approach to social transformation combines spiritual principles with practical methods for systematic change.",
    elements: [
      "Learning culture",
      "Spiritual dynamics",
      "Action-reflection",
      "Community agency",
      "Training programs",
      "Knowledge systems",
      "Institution building",
      "Service projects"
    ],
    practices: [
      "Study circles",
      "Youth empowerment",
      "Community schools",
      "Social discourse",
      "Development projects",
      "Institutional growth",
      "Consultation process",
      "Service initiatives"
    ],
    recommendedReading: [
      {
        title: "For the Betterment of the World",
        author: "Bahá'í International Community",
        description: "Overview of Bahá'í social and economic development",
        amazonLink: "https://www.amazon.com/Betterment-World-Bahai-International-Community/dp/1931847126"
      }
    ]
  },
  {
    title: "Practical Applications",
    description: "Exploring how Bahá'í social principles are applied in various fields of human endeavor.",
    keyPoints: [
      "Education systems",
      "Economic models",
      "Governance structures",
      "Environmental care",
      "Arts and media",
      "Health services",
      "Agriculture",
      "Technology use"
    ],
    historicalRefs: [
      {
        text: "'Abdu'l-Bahá's practical guidance in Paris Talks.",
        source: "Paris Talks"
      },
      {
        text: "Bahá'í International Community statements on social development.",
        source: "BIC Documents"
      }
    ],
    significance: "Bahá'í principles provide practical frameworks for addressing contemporary challenges in various fields.",
    elements: [
      "Educational methods",
      "Economic principles",
      "Administrative systems",
      "Environmental ethics",
      "Creative expression",
      "Health approaches",
      "Food systems",
      "Digital tools"
    ],
    practices: [
      "Tutorial schools",
      "Cooperative projects",
      "Local governance",
      "Conservation efforts",
      "Arts programs",
      "Health education",
      "Garden projects",
      "Media development"
    ],
    recommendedReading: [
      {
        title: "Social Action",
        author: "Office of Social and Economic Development",
        description: "Guide to implementing Bahá'í social principles",
        amazonLink: "https://www.amazon.com/Social-Action-Office-Economic-Development/dp/1931847673"
      }
    ]
  },
  {
    title: "Future Vision",
    description: "Examining the Bahá'í vision for future social development and global civilization.",
    keyPoints: [
      "World federation",
      "Universal peace",
      "Sustainable development",
      "Cultural diversity",
      "Scientific advancement",
      "Spiritual civilization",
      "Social harmony",
      "Global prosperity"
    ],
    historicalRefs: [
      {
        text: "Shoghi Effendi's vision in The World Order of Bahá'u'lláh.",
        source: "The World Order of Bahá'u'lláh"
      },
      {
        text: "Universal House of Justice guidance on building the future.",
        source: "Century of Light"
      }
    ],
    significance: "The Bahá'í vision provides a blueprint for achieving a peaceful, just, and sustainable world civilization.",
    elements: [
      "Global structures",
      "Peace systems",
      "Environmental care",
      "Cultural preservation",
      "Scientific progress",
      "Moral development",
      "Social cohesion",
      "Economic justice"
    ],
    practices: [
      "Global initiatives",
      "Peace building",
      "Sustainability projects",
      "Cultural programs",
      "Scientific collaboration",
      "Character education",
      "Community building",
      "Economic development"
    ],
    recommendedReading: [
      {
        title: "Century of Light",
        author: "Universal House of Justice",
        description: "Analysis of global development and future directions",
        amazonLink: "https://www.amazon.com/Century-Light-Universal-House-Justice/dp/1931847126"
      }
    ]
  }
]

export default function SocialPrinciplesPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Social Principles in the Bahá'í Faith</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the Bahá'í social principles and teachings that provide a framework for personal and collective transformation in building a peaceful global civilization.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="foundation" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="foundation">Foundation</TabsTrigger>
          <TabsTrigger value="transformation">Transformation</TabsTrigger>
          <TabsTrigger value="application">Application</TabsTrigger>
          <TabsTrigger value="vision">Future Vision</TabsTrigger>
        </TabsList>

        {socialPrinciplesContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({foundation: true, transformation: true, application: true, vision: true})[index]}>
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
              title: "Divine Manifestations",
              href: "/religion/bahai/theology/manifestations"
            }
          ]}
        />
      </div>
    </div>
  )
} 