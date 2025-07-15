import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Li and Ritual | Confucian Philosophy",
  description: "Explore the essential Confucian concept of Li (礼), encompassing ritual propriety, social etiquette, and moral conduct in maintaining social harmony and personal cultivation.",
  keywords: "Li, 礼, Confucian Ritual, Propriety, Social Order, Moral Conduct, Chinese Philosophy, Confucianism, Ritual Propriety, Cultural Norms"
}

interface LiContent {
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

const liContent: LiContent[] = [
  {
    title: "Essence of Li",
    description: "The fundamental concept of Li (礼) as ritual propriety and its role in establishing social order and moral cultivation.",
    keyPoints: [
      "Etymology and character meaning",
      "Ritual propriety",
      "Social harmony",
      "Moral cultivation",
      "Cultural refinement",
      "Ceremonial practices",
      "Ethical behavior",
      "Social order"
    ],
    historicalRefs: [
      {
        text: "Confucius on the importance of Li in social order.",
        source: "Analects 8:2"
      },
      {
        text: "The relationship between Li and moral development.",
        source: "Book of Rites 1:1"
      }
    ],
    significance: "Li serves as the foundational framework for social order, moral development, and cultural preservation in Confucian philosophy.",
    elements: [
      "Ritual forms",
      "Ceremonial practices",
      "Social etiquette",
      "Moral principles",
      "Cultural traditions",
      "Behavioral norms",
      "Ethical standards",
      "Spiritual aspects"
    ],
    practices: [
      "Ritual performance",
      "Ceremonial observance",
      "Etiquette study",
      "Cultural preservation",
      "Moral cultivation",
      "Social interaction",
      "Personal refinement",
      "Traditional learning"
    ],
    recommendedReading: [
      {
        title: "Ritual and Deference",
        author: "Herbert Fingarette",
        description: "Analysis of Li in Confucian thought",
        amazonLink: "https://www.amazon.com/Ritual-Deference-Herbert-Fingarette/dp/0824835743"
      }
    ]
  },
  {
    title: "Social and Cultural Functions",
    description: "The role of Li in maintaining social relationships, cultural continuity, and harmonious society.",
    keyPoints: [
      "Social relationships",
      "Cultural transmission",
      "Hierarchical order",
      "Family structure",
      "Community bonds",
      "Educational role",
      "Political order",
      "Moral education"
    ],
    historicalRefs: [
      {
        text: "Li's role in social organization and harmony.",
        source: "Analects 1:12"
      },
      {
        text: "Cultural preservation through ritual practice.",
        source: "Book of Rites 19:2"
      }
    ],
    significance: "Li provides the structural framework for social relationships, cultural transmission, and the maintenance of harmonious order.",
    elements: [
      "Social roles",
      "Cultural norms",
      "Family duties",
      "Community practices",
      "Educational methods",
      "Political structures",
      "Moral guidelines",
      "Traditional values"
    ],
    practices: [
      "Role fulfillment",
      "Cultural education",
      "Family rituals",
      "Community ceremonies",
      "Educational activities",
      "Political protocols",
      "Moral instruction",
      "Value transmission"
    ],
    recommendedReading: [
      {
        title: "Confucian Role Ethics",
        author: "Roger T. Ames",
        description: "Study of social roles and Li",
        amazonLink: "https://www.amazon.com/Confucian-Role-Ethics-Roger-Ames/dp/0824835751"
      }
    ]
  },
  {
    title: "Ritual Practice and Performance",
    description: "The practical aspects of Li in daily life, ceremonies, and social interactions.",
    keyPoints: [
      "Daily rituals",
      "Ceremonial forms",
      "Personal conduct",
      "Social etiquette",
      "Sacred practices",
      "Formal protocols",
      "Behavioral standards",
      "Traditional customs"
    ],
    historicalRefs: [
      {
        text: "Proper performance of rituals and ceremonies.",
        source: "Book of Rites 12:1"
      },
      {
        text: "Daily practice of Li in personal conduct.",
        source: "Analects 12:1"
      }
    ],
    significance: "The proper performance of Li through rituals and ceremonies cultivates moral character and maintains social harmony.",
    elements: [
      "Ritual procedures",
      "Ceremonial forms",
      "Behavioral codes",
      "Etiquette rules",
      "Sacred elements",
      "Traditional methods",
      "Performance standards",
      "Cultural practices"
    ],
    practices: [
      "Ritual observance",
      "Ceremonial participation",
      "Etiquette practice",
      "Behavioral refinement",
      "Sacred ceremonies",
      "Traditional customs",
      "Performance training",
      "Cultural activities"
    ],
    recommendedReading: [
      {
        title: "Confucian Ritual and Modern Life",
        author: "Thomas A. Wilson",
        description: "Contemporary analysis of ritual practice",
        amazonLink: "https://www.amazon.com/Confucian-Ritual-Modern-Life-Wilson/dp/0824835778"
      }
    ]
  },
  {
    title: "Modern Applications",
    description: "The contemporary relevance and application of Li in modern society and personal development.",
    keyPoints: [
      "Business etiquette",
      "Professional conduct",
      "Cultural preservation",
      "Social harmony",
      "Personal development",
      "Ethical leadership",
      "Global relations",
      "Modern ceremonies"
    ],
    historicalRefs: [
      {
        text: "Modern interpretations of Li in contemporary society.",
        source: "Journal of Chinese Philosophy"
      },
      {
        text: "Application of Li in modern contexts.",
        source: "Contemporary Confucian Studies"
      }
    ],
    significance: "Li continues to provide valuable guidance for maintaining social order and personal development in contemporary society.",
    elements: [
      "Modern protocols",
      "Business practices",
      "Cultural adaptation",
      "Social skills",
      "Leadership principles",
      "Global etiquette",
      "Ethical standards",
      "Personal growth"
    ],
    practices: [
      "Professional conduct",
      "Cultural awareness",
      "Social networking",
      "Leadership development",
      "Global communication",
      "Ethical behavior",
      "Personal cultivation",
      "Modern ceremonies"
    ],
    recommendedReading: [
      {
        title: "Li in Contemporary Practice",
        author: "Daniel A. Bell",
        description: "Modern applications of Li",
        amazonLink: "https://www.amazon.com/Li-Contemporary-Practice-Daniel-Bell/dp/0824835786"
      }
    ]
  }
]

export default function LiPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Li and Ritual</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the essential Confucian concept of Li (礼), encompassing ritual propriety, social etiquette, and moral conduct in maintaining social harmony and personal cultivation.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="essence" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="essence">Essence</TabsTrigger>
          <TabsTrigger value="functions">Functions</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="modern">Modern</TabsTrigger>
        </TabsList>

        {liContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({essence: true, functions: true, practice: true, modern: true})[index]}>
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
              title: "Ren and Virtue",
              href: "/religion/confucianism/concepts/ren"
            },
            {
              title: "Junzi Ideal",
              href: "/religion/confucianism/concepts/junzi"
            },
            {
              title: "Five Relations",
              href: "/religion/confucianism/concepts/relations"
            }
          ]}
        />
      </div>
    </div>
  )
} 