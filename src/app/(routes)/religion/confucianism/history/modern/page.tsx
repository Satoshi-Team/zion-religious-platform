import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Modern Revival | Confucian History",
  description: "Explore the Modern Revival of Confucianism (1860s-present), including responses to Western modernization, intellectual developments, and cultural preservation efforts.",
  keywords: "Modern Confucianism, New Confucianism, Kang Youwei, Xiong Shili, Mou Zongsan, Tu Wei-ming, Chinese Philosophy, Cultural Revival"
}

interface ModernContent {
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

const modernContent: ModernContent[] = [
  {
    title: "Early Modern Response",
    description: "The initial Confucian response to Western modernization and the challenges of the late Qing and early Republican periods (1860s-1920s).",
    keyPoints: [
      "Kang Youwei (1858-1927)",
      "Liang Qichao (1873-1929)",
      "Reform Movement",
      "Western Learning",
      "Constitutional Monarchy",
      "Educational Reform",
      "Cultural Preservation",
      "Modern Adaptation"
    ],
    historicalRefs: [
      {
        text: "Confucianism must be reformed to meet the needs of the modern world.",
        source: "Kang Youwei's 'Datong Shu'"
      },
      {
        text: "The essence of Chinese culture can be preserved while adopting Western methods.",
        source: "Zhang Zhidong's 'Quanxue Pian'"
      }
    ],
    significance: "Early modern reformers sought to adapt Confucian traditions to modern conditions while preserving essential cultural values.",
    elements: [
      "Cultural synthesis",
      "Political reform",
      "Educational modernization",
      "Philosophical adaptation",
      "Social transformation",
      "Institutional change",
      "Cultural preservation",
      "Western integration"
    ],
    practices: [
      "Modern education",
      "Political activism",
      "Cultural preservation",
      "Text interpretation",
      "Social reform",
      "Institutional development",
      "Cross-cultural dialogue",
      "Modern scholarship"
    ],
    recommendedReading: [
      {
        title: "China's New Confucianism",
        author: "Daniel A. Bell",
        description: "Study of early modern Confucian reform",
        amazonLink: "https://www.amazon.com/Chinas-New-Confucianism-Politics-Everyday/dp/0691145857"
      }
    ]
  },
  {
    title: "New Confucian Movement",
    description: "The development of New Confucianism as a philosophical and cultural movement from the 1920s to the present.",
    keyPoints: [
      "Xiong Shili (1885-1968)",
      "Feng Youlan (1895-1990)",
      "Mou Zongsan (1909-1995)",
      "Tu Wei-ming (1940-)",
      "Philosophical synthesis",
      "Cultural reconstruction",
      "Modern interpretation",
      "Global dialogue"
    ],
    historicalRefs: [
      {
        text: "The moral mind can know the noumenal world.",
        source: "Mou Zongsan's 'Intellectual Intuition and Chinese Philosophy'"
      },
      {
        text: "Confucian humanism offers resources for global ethics.",
        source: "Tu Wei-ming's 'Confucian Thought'"
      }
    ],
    significance: "New Confucianism developed sophisticated philosophical responses to modern challenges while engaging with global intellectual traditions.",
    elements: [
      "Modern metaphysics",
      "Moral philosophy",
      "Cultural theory",
      "Global ethics",
      "Political thought",
      "Educational philosophy",
      "Social theory",
      "Cross-cultural dialogue"
    ],
    practices: [
      "Philosophical writing",
      "Academic research",
      "Cultural dialogue",
      "Educational reform",
      "Public engagement",
      "International exchange",
      "Text interpretation",
      "Modern application"
    ],
    recommendedReading: [
      {
        title: "New Confucian Philosophy",
        author: "John H. Berthrong",
        description: "Study of modern Confucian thought",
        amazonLink: "https://www.amazon.com/New-Confucian-Philosophy-John-Berthrong/dp/0791452980"
      }
    ]
  },
  {
    title: "Cultural Renaissance",
    description: "The revival of Confucian culture and values in contemporary East Asian societies and beyond.",
    keyPoints: [
      "Cultural identity",
      "Value preservation",
      "Modern application",
      "Social development",
      "Educational renewal",
      "Moral education",
      "Cultural confidence",
      "Global influence"
    ],
    historicalRefs: [
      {
        text: "Confucian values remain relevant to modern life.",
        source: "Yu Ying-shih's 'Modern Meaning of Confucianism'"
      },
      {
        text: "Traditional wisdom can guide modern development.",
        source: "Chung-ying Cheng's 'New Dimensions'"
      }
    ],
    significance: "The cultural renaissance demonstrates the continuing relevance of Confucian values in modern society and global culture.",
    elements: [
      "Cultural heritage",
      "Modern values",
      "Social ethics",
      "Educational principles",
      "Moral development",
      "Cultural identity",
      "Global perspective",
      "Social harmony"
    ],
    practices: [
      "Cultural activities",
      "Educational programs",
      "Value transmission",
      "Social engagement",
      "Moral cultivation",
      "Cultural exchange",
      "Modern adaptation",
      "Global dialogue"
    ],
    recommendedReading: [
      {
        title: "Confucian Revival",
        author: "Kenneth J. Hammond",
        description: "Study of contemporary Confucian renaissance",
        amazonLink: "https://www.amazon.com/Confucian-Revival-Kenneth-J-Hammond/dp/0791476030"
      }
    ]
  },
  {
    title: "Global Impact",
    description: "The influence of modern Confucianism on global thought, ethics, and social development.",
    keyPoints: [
      "Global ethics",
      "Cross-cultural dialogue",
      "Business ethics",
      "Environmental ethics",
      "Social development",
      "Political theory",
      "Educational philosophy",
      "Cultural exchange"
    ],
    historicalRefs: [
      {
        text: "Confucian values can contribute to global harmony.",
        source: "International Confucian Network Declaration"
      },
      {
        text: "East Asian development demonstrates Confucian relevance.",
        source: "World Economic Forum Report"
      }
    ],
    significance: "Modern Confucianism offers valuable perspectives on global challenges and contributes to international dialogue on ethics and development.",
    elements: [
      "Global ethics",
      "Cultural dialogue",
      "Business practices",
      "Environmental wisdom",
      "Social development",
      "Political thought",
      "Educational theory",
      "International relations"
    ],
    practices: [
      "International cooperation",
      "Cultural exchange",
      "Business application",
      "Environmental protection",
      "Social development",
      "Political consultation",
      "Educational exchange",
      "Global networking"
    ],
    recommendedReading: [
      {
        title: "Global Confucianism",
        author: "Robert C. Neville",
        description: "Study of Confucianism's global impact",
        amazonLink: "https://www.amazon.com/Global-Confucianism-Robert-C-Neville/dp/0791452999"
      }
    ]
  }
]

export default function ModernPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Modern Revival</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the Modern Revival of Confucianism (1860s-present), including responses to Western modernization, intellectual developments, and cultural preservation efforts.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="early" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="early">Early Modern</TabsTrigger>
          <TabsTrigger value="new">New Confucian</TabsTrigger>
          <TabsTrigger value="renaissance">Renaissance</TabsTrigger>
          <TabsTrigger value="global">Global</TabsTrigger>
        </TabsList>

        {modernContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({early: true, new: true, renaissance: true, global: true})[index]}>
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
              title: "Neo-Confucianism",
              href: "/religion/confucianism/history/neo"
            },
            {
              title: "Contemporary",
              href: "/religion/confucianism/history/contemporary"
            },
            {
              title: "Global Impact",
              href: "/religion/confucianism/impact/global"
            }
          ]}
        />
      </div>
    </div>
  )
} 