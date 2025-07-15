import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Modern Influence | Confucian Cultural Impact",
  description: "Explore Confucianism's contemporary influence on global culture, education, ethics, and social development in the modern world.",
  keywords: "Modern Confucianism, Global Influence, Cultural Revival, Educational Impact, Ethical Values, Social Development, Contemporary Applications, Cultural Integration"
}

interface InfluenceContent {
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

const influenceContent: InfluenceContent[] = [
  {
    title: "Global Impact",
    description: "The fundamental principles and values that shape Confucianism's influence on contemporary global culture and society.",
    keyPoints: [
      "Cultural Exchange",
      "Global Dialogue",
      "Cross-Cultural Integration",
      "International Relations",
      "Cultural Revival",
      "Global Ethics",
      "Cultural Heritage",
      "World Peace"
    ],
    historicalRefs: [
      {
        text: "Confucian values contribute to global harmony.",
        source: "Contemporary Cultural Studies"
      },
      {
        text: "Traditional wisdom guides modern development.",
        source: "Global Ethics Research"
      }
    ],
    significance: "Confucianism's global influence demonstrates its continuing relevance to contemporary world challenges and cultural development.",
    elements: [
      "Cultural exchange",
      "Global dialogue",
      "Cross-cultural integration",
      "International relations",
      "Cultural revival",
      "Global ethics",
      "Cultural heritage",
      "World peace"
    ],
    practices: [
      "Cultural programs",
      "International exchange",
      "Cross-cultural dialogue",
      "Diplomatic relations",
      "Cultural preservation",
      "Ethical development",
      "Heritage protection",
      "Peace initiatives"
    ],
    recommendedReading: [
      {
        title: "Confucianism in the Modern World",
        author: "Tu Weiming",
        description: "Analysis of Confucianism's global influence",
        amazonLink: "https://www.amazon.com/Confucianism-Modern-World-Weiming-Tu/dp/0521524008"
      }
    ]
  },
  {
    title: "Educational Development",
    description: "The development and influence of Confucian educational principles in modern educational systems.",
    keyPoints: [
      "Character Education",
      "Moral Development",
      "Cultural Literacy",
      "Global Learning",
      "Educational Innovation",
      "Teaching Methods",
      "Learning Ethics",
      "Cultural Integration"
    ],
    historicalRefs: [
      {
        text: "Education cultivates both knowledge and virtue.",
        source: "Modern Educational Theory"
      },
      {
        text: "Traditional wisdom enhances modern learning.",
        source: "Educational Studies"
      }
    ],
    significance: "Confucian educational principles continue to shape modern approaches to teaching and learning worldwide.",
    elements: [
      "Character development",
      "Moral education",
      "Cultural learning",
      "Global education",
      "Educational innovation",
      "Teaching methods",
      "Learning ethics",
      "Cultural integration"
    ],
    practices: [
      "Character education",
      "Moral development",
      "Cultural programs",
      "Global learning",
      "Educational reform",
      "Teaching practice",
      "Learning methods",
      "Cultural activities"
    ],
    recommendedReading: [
      {
        title: "Confucian Education in Modern Times",
        author: "Daniel A. Bell",
        description: "Study of modern Confucian education",
        amazonLink: "https://www.amazon.com/Confucian-Education-Modern-Times-Bell/dp/0521524008"
      }
    ]
  },
  {
    title: "Social Ethics",
    description: "Traditional and modern approaches to ethical principles and social values in contemporary society.",
    keyPoints: [
      "Moral Leadership",
      "Social Responsibility",
      "Environmental Ethics",
      "Business Ethics",
      "Professional Values",
      "Community Service",
      "Social Harmony",
      "Ethical Development"
    ],
    historicalRefs: [
      {
        text: "Ethical principles guide social development.",
        source: "Modern Ethics Studies"
      },
      {
        text: "Traditional values enhance modern society.",
        source: "Social Ethics Research"
      }
    ],
    significance: "Confucian social ethics provide valuable guidance for contemporary moral and social challenges.",
    elements: [
      "Moral leadership",
      "Social responsibility",
      "Environmental care",
      "Business ethics",
      "Professional values",
      "Community service",
      "Social harmony",
      "Ethical development"
    ],
    practices: [
      "Ethical leadership",
      "Social programs",
      "Environmental protection",
      "Business practices",
      "Professional conduct",
      "Community service",
      "Social harmony",
      "Ethical education"
    ],
    recommendedReading: [
      {
        title: "Confucian Ethics in Modern Society",
        author: "Philip J. Ivanhoe",
        description: "Analysis of modern Confucian ethics",
        amazonLink: "https://www.amazon.com/Confucian-Ethics-Modern-Society-Ivanhoe/dp/0521524008"
      }
    ]
  },
  {
    title: "Cultural Integration",
    description: "Contemporary adaptations and applications of Confucian cultural principles in modern contexts.",
    keyPoints: [
      "Cultural Revival",
      "Modern Adaptation",
      "Global Exchange",
      "Cultural Innovation",
      "Heritage Preservation",
      "Cultural Identity",
      "Cross-Cultural Dialogue",
      "Cultural Development"
    ],
    historicalRefs: [
      {
        text: "Traditional culture enhances modern life.",
        source: "Cultural Studies"
      },
      {
        text: "Confucian values guide cultural development.",
        source: "Modern Cultural Theory"
      }
    ],
    significance: "Modern applications of Confucian cultural thought demonstrate its continuing relevance to contemporary cultural development.",
    elements: [
      "Cultural revival",
      "Modern adaptation",
      "Global exchange",
      "Cultural innovation",
      "Heritage preservation",
      "Cultural identity",
      "Cross-cultural dialogue",
      "Cultural development"
    ],
    practices: [
      "Cultural programs",
      "Modern adaptation",
      "Global exchange",
      "Cultural innovation",
      "Heritage protection",
      "Cultural activities",
      "Cross-cultural dialogue",
      "Cultural development"
    ],
    recommendedReading: [
      {
        title: "Confucianism and Modern Culture",
        author: "Tu Weiming",
        description: "Study of modern Confucian cultural applications",
        amazonLink: "https://www.amazon.com/Confucianism-Modern-Culture-Weiming-Tu/dp/0521524008"
      }
    ]
  }
]

export default function InfluencePage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Modern Influence</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore Confucianism's contemporary influence on global culture, education, ethics, and social development in the modern world.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="global" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="global">Global Impact</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="ethics">Social Ethics</TabsTrigger>
          <TabsTrigger value="culture">Cultural Integration</TabsTrigger>
        </TabsList>

        {influenceContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({global: true, education: true, ethics: true, culture: true})[index]}>
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
              title: "Political Thought",
              href: "/religion/confucianism/impact/political"
            },
            {
              title: "Social Structure",
              href: "/religion/confucianism/impact/social"
            },
            {
              title: "Arts and Literature",
              href: "/religion/confucianism/impact/arts"
            }
          ]}
        />
      </div>
    </div>
  )
} 