import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Classical Period | Confucian History",
  description: "Explore the Classical Period of Confucianism (551-221 BCE), from Confucius through the Warring States period, including key figures, texts, and developments in Confucian thought.",
  keywords: "Classical Confucianism, Confucius, Mencius, Xunzi, Spring and Autumn Period, Warring States Period, Chinese Philosophy, Early Confucian Thought"
}

interface ClassicalContent {
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

const classicalContent: ClassicalContent[] = [
  {
    title: "Origins and Development",
    description: "The emergence and early development of Confucianism during the Spring and Autumn Period (771-476 BCE), centered on the teachings of Confucius.",
    keyPoints: [
      "Life of Confucius (551-479 BCE)",
      "Social and political context",
      "Early disciples and transmission",
      "Formation of core teachings",
      "Educational tradition",
      "Political philosophy",
      "Moral teachings",
      "Cultural preservation"
    ],
    historicalRefs: [
      {
        text: "The Master said: 'At fifteen I set my heart on learning...'",
        source: "Analects 2:4"
      },
      {
        text: "By nature, men are nearly alike; by practice, they get to be wide apart.",
        source: "Analects 17:2"
      }
    ],
    significance: "The Classical Period established the foundational principles and texts that would shape Chinese civilization for over two millennia.",
    elements: [
      "Moral cultivation",
      "Ritual propriety",
      "Social harmony",
      "Political wisdom",
      "Educational methods",
      "Cultural values",
      "Ethical principles",
      "Traditional learning"
    ],
    practices: [
      "Ritual performance",
      "Text study",
      "Character cultivation",
      "Moral reflection",
      "Social engagement",
      "Political service",
      "Cultural preservation",
      "Educational development"
    ],
    recommendedReading: [
      {
        title: "Confucius: The Golden Rule",
        author: "Russell Freedman",
        description: "Biography of Confucius and early Confucian development",
        amazonLink: "https://www.amazon.com/Confucius-Golden-Rule-Russell-Freedman/dp/0439139570"
      }
    ]
  },
  {
    title: "Key Figures and Schools",
    description: "The major philosophers and schools of thought that developed during the Classical Period, particularly during the Warring States era.",
    keyPoints: [
      "Mencius (372-289 BCE)",
      "Xunzi (c. 310-235 BCE)",
      "Disciples of Confucius",
      "Competing schools",
      "Philosophical debates",
      "Theoretical developments",
      "Different interpretations",
      "School formations"
    ],
    historicalRefs: [
      {
        text: "Human nature is good, just as water seeks low ground.",
        source: "Mencius 6A:2"
      },
      {
        text: "Human nature is evil; its goodness is acquired training.",
        source: "Xunzi: Human Nature is Evil"
      }
    ],
    significance: "The diverse interpretations and developments of Confucian thought during this period enriched and expanded the tradition.",
    elements: [
      "Human nature theories",
      "Moral philosophy",
      "Political theory",
      "Educational methods",
      "Ritual theory",
      "Social philosophy",
      "Ethical debates",
      "Cultural perspectives"
    ],
    practices: [
      "Philosophical discourse",
      "Textual interpretation",
      "School formation",
      "Debate participation",
      "Theory development",
      "Teaching methods",
      "Moral instruction",
      "Cultural transmission"
    ],
    recommendedReading: [
      {
        title: "Mencius and Early Chinese Thought",
        author: "Kwong-loi Shun",
        description: "Study of Mencian philosophy and its context",
        amazonLink: "https://www.amazon.com/Mencius-Early-Chinese-Thought-Kwong-loi/dp/0804725896"
      }
    ]
  },
  {
    title: "Texts and Traditions",
    description: "The formation and transmission of classical Confucian texts and traditions during the pre-Qin period.",
    keyPoints: [
      "The Analects compilation",
      "Five Classics formation",
      "Textual transmission",
      "Oral traditions",
      "Commentary development",
      "Educational texts",
      "Ritual manuals",
      "Historical records"
    ],
    historicalRefs: [
      {
        text: "The Master transmitted but did not create.",
        source: "Analects 7:1"
      },
      {
        text: "I am a transmitter, not a creator.",
        source: "Analects 7:1"
      }
    ],
    significance: "The classical texts established the canonical foundation for Confucian learning and practice throughout history.",
    elements: [
      "Canonical texts",
      "Commentary traditions",
      "Educational materials",
      "Ritual documents",
      "Historical records",
      "Philosophical works",
      "Literary forms",
      "Teaching methods"
    ],
    practices: [
      "Text preservation",
      "Commentary writing",
      "Educational use",
      "Ritual recording",
      "Historical documentation",
      "Literary composition",
      "Oral transmission",
      "Scholarly methods"
    ],
    recommendedReading: [
      {
        title: "The Formation of the Confucian Canon",
        author: "Michael Nylan",
        description: "Study of classical text formation and transmission",
        amazonLink: "https://www.amazon.com/Formation-Confucian-Canon-Michael-Nylan/dp/0791434567"
      }
    ]
  },
  {
    title: "Social and Political Impact",
    description: "The influence of Classical Confucianism on Chinese society and politics during the pre-Qin period.",
    keyPoints: [
      "Political reform efforts",
      "Educational institutions",
      "Social organization",
      "Cultural influence",
      "State governance",
      "Moral education",
      "Ritual system",
      "Civil service"
    ],
    historicalRefs: [
      {
        text: "When the Way prevails in the state, speak of wisdom and virtue.",
        source: "Analects 14:3"
      },
      {
        text: "Guide them by edicts, keep them in line with punishments, and people will stay out of trouble but will have no sense of shame.",
        source: "Analects 2:3"
      }
    ],
    significance: "Classical Confucianism established enduring patterns of social organization and political thought in Chinese civilization.",
    elements: [
      "Political theory",
      "Social structure",
      "Educational system",
      "Cultural norms",
      "Moral standards",
      "Ritual practices",
      "Administrative methods",
      "Civil institutions"
    ],
    practices: [
      "Political service",
      "Educational reform",
      "Social organization",
      "Cultural development",
      "Moral instruction",
      "Ritual implementation",
      "Administrative work",
      "Institutional building"
    ],
    recommendedReading: [
      {
        title: "Confucianism and Chinese Civilization",
        author: "Arthur F. Wright",
        description: "Analysis of Confucianism's social and political impact",
        amazonLink: "https://www.amazon.com/Confucianism-Chinese-Civilization-Arthur-Wright/dp/0804706891"
      }
    ]
  }
]

export default function ClassicalPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Classical Period</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the Classical Period of Confucianism (551-221 BCE), from Confucius through the Warring States period, including key figures, texts, and developments in Confucian thought.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="origins" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="origins">Origins</TabsTrigger>
          <TabsTrigger value="figures">Figures</TabsTrigger>
          <TabsTrigger value="texts">Texts</TabsTrigger>
          <TabsTrigger value="impact">Impact</TabsTrigger>
        </TabsList>

        {classicalContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({origins: true, figures: true, texts: true, impact: true})[index]}>
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
              title: "Han Synthesis",
              href: "/religion/confucianism/history/han"
            },
            {
              title: "Neo-Confucianism",
              href: "/religion/confucianism/history/neo"
            },
            {
              title: "Modern Revival",
              href: "/religion/confucianism/history/modern"
            }
          ]}
        />
      </div>
    </div>
  )
} 