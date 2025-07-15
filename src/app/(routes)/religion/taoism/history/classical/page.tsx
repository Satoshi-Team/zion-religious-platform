import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Classical Period | Taoist History",
  description: "Explore the classical period of Taoist history, examining its development from the Zhou Dynasty through the Han Dynasty, including key figures, texts, and philosophical developments.",
  keywords: "Classical Taoism, Laozi, Zhuangzi, Huang-Lao, Zhou Dynasty, Han Dynasty, Daodejing, Chinese philosophy, early Taoism, philosophical Taoism"
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
    title: "Early Formation",
    description: "Understanding the origins and early development of Taoism during the Zhou Dynasty period.",
    keyPoints: [
      "Pre-Laozi influences",
      "Shamanic traditions",
      "Zhou Dynasty context",
      "Early philosophical concepts",
      "Formation of key ideas",
      "Cultural background",
      "Political influences",
      "Social conditions"
    ],
    historicalRefs: [
      {
        text: "Early Taoist concepts found in the Yijing (I Ching) and their influence.",
        source: "Book of Changes"
      },
      {
        text: "Shamanic practices and their integration into early Taoist thought.",
        source: "Zhou Dynasty Records"
      }
    ],
    significance: "The early formation period established the foundational concepts and practices that would define Taoism.",
    elements: [
      "Natural philosophy",
      "Mystical practices",
      "Political thought",
      "Cosmological views",
      "Ethical principles",
      "Social criticism",
      "Spiritual practices",
      "Cultural integration"
    ],
    practices: [
      "Meditation methods",
      "Ritual practices",
      "Nature observation",
      "Philosophical inquiry",
      "Political withdrawal",
      "Simple living",
      "Mystical cultivation",
      "Ethical conduct"
    ],
    recommendedReading: [
      {
        title: "Early Chinese Religion: Part One: Shang through Han (1250 BC-220 AD)",
        author: "John Lagerwey",
        description: "Comprehensive study of early Chinese religious traditions",
        amazonLink: "https://www.amazon.com/Early-Chinese-Religion-through-1250-220/dp/9004168354"
      }
    ]
  },
  {
    title: "Classical Masters",
    description: "Examining the lives, teachings, and influences of the great classical Taoist masters.",
    keyPoints: [
      "Laozi's teachings",
      "Zhuangzi's philosophy",
      "Liezi's contributions",
      "School formations",
      "Text compilations",
      "Philosophical debates",
      "Teaching methods",
      "Legacy development"
    ],
    historicalRefs: [
      {
        text: "Traditional accounts of Laozi's life and the writing of the Daodejing.",
        source: "Historical Records of Sima Qian"
      },
      {
        text: "Biographical details and philosophical contributions of Zhuangzi.",
        source: "Records of the Grand Historian"
      }
    ],
    significance: "The classical masters established the core philosophical framework of Taoism through their teachings and writings.",
    elements: [
      "Philosophical concepts",
      "Literary styles",
      "Teaching methods",
      "Mystical insights",
      "Political views",
      "Social commentary",
      "Natural observations",
      "Practical wisdom"
    ],
    practices: [
      "Philosophical discourse",
      "Metaphorical teaching",
      "Story-telling",
      "Paradoxical logic",
      "Natural living",
      "Non-action",
      "Spontaneity",
      "Inner cultivation"
    ],
    recommendedReading: [
      {
        title: "Tao Te Ching: A New English Version",
        author: "Stephen Mitchell",
        description: "Modern translation of Laozi's classic text",
        amazonLink: "https://www.amazon.com/Tao-Te-Ching-English-Version/dp/0060812451"
      }
    ]
  },
  {
    title: "Textual Traditions",
    description: "Analyzing the development and transmission of classical Taoist texts and their interpretations.",
    keyPoints: [
      "Daodejing versions",
      "Zhuangzi chapters",
      "Liezi text",
      "Commentary traditions",
      "Transmission methods",
      "Textual analysis",
      "Interpretation schools",
      "Preservation efforts"
    ],
    historicalRefs: [
      {
        text: "Discovery of the Mawangdui silk texts of the Daodejing.",
        source: "Archaeological Records"
      },
      {
        text: "Development of the Seven Inner Chapters of the Zhuangzi.",
        source: "Textual Studies"
      }
    ],
    significance: "The classical texts formed the foundation for all subsequent Taoist thought and practice.",
    elements: [
      "Textual variations",
      "Commentary systems",
      "Interpretation methods",
      "Preservation techniques",
      "Translation issues",
      "Philosophical analysis",
      "Literary features",
      "Historical context"
    ],
    practices: [
      "Text study",
      "Memorization",
      "Commentary writing",
      "Interpretation",
      "Translation work",
      "Comparative analysis",
      "Textual preservation",
      "Teaching methods"
    ],
    recommendedReading: [
      {
        title: "The Way of Chuang Tzu",
        author: "Thomas Merton",
        description: "Interpretative version of Zhuangzi's writings",
        amazonLink: "https://www.amazon.com/Way-Chuang-Tzu-Second/dp/0811218511"
      }
    ]
  },
  {
    title: "Political Impact",
    description: "Understanding the influence of classical Taoism on Chinese political thought and practice.",
    keyPoints: [
      "Huang-Lao school",
      "Court influence",
      "Political theory",
      "Administrative ideas",
      "Social criticism",
      "Reform proposals",
      "Imperial patronage",
      "Cultural impact"
    ],
    historicalRefs: [
      {
        text: "Influence of Huang-Lao thought during the early Han Dynasty.",
        source: "Han Historical Records"
      },
      {
        text: "Taoist influences on Han Dynasty political philosophy.",
        source: "Imperial Court Documents"
      }
    ],
    significance: "Classical Taoism significantly influenced Chinese political thought and governance practices.",
    elements: [
      "Political philosophy",
      "Administrative theory",
      "Social principles",
      "Governance methods",
      "Reform ideas",
      "Cultural influence",
      "Ethical standards",
      "Leadership concepts"
    ],
    practices: [
      "Political advising",
      "Court service",
      "Policy formation",
      "Administrative reform",
      "Social criticism",
      "Ethical governance",
      "Cultural integration",
      "Educational methods"
    ],
    recommendedReading: [
      {
        title: "The Tao of Politics: Lessons of the Masters of Huainan",
        author: "Thomas Cleary",
        description: "Analysis of classical Taoist political thought",
        amazonLink: "https://www.amazon.com/Tao-Politics-Lessons-Masters-Huainan/dp/1570627154"
      }
    ]
  }
]

export default function ClassicalPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Classical Period in Taoist History</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the formative classical period of Taoism, examining its development from the Zhou Dynasty through the Han Dynasty, including key figures, texts, and philosophical developments.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="foundational" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="foundational">Formation</TabsTrigger>
          <TabsTrigger value="masters">Masters</TabsTrigger>
          <TabsTrigger value="texts">Texts</TabsTrigger>
          <TabsTrigger value="political">Political</TabsTrigger>
        </TabsList>

        {classicalContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({foundational: true, masters: true, texts: true, political: true})[index]}>
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
              title: "Medieval Period",
              href: "/religion/taoism/history/medieval"
            },
            {
              title: "Modern Period",
              href: "/religion/taoism/history/modern"
            },
            {
              title: "Key Figures",
              href: "/religion/taoism/figures"
            }
          ]}
        />
      </div>
    </div>
  )
} 