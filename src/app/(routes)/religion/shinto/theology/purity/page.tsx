import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Purity | Shinto Theology",
  description: "Explore the central concept of purity in Shinto theology, including ritual purification, spiritual cleanliness, and the balance between purity and impurity.",
  keywords: "Shinto purity, harae, misogi, kegare, tsumi, imi, oharae, spiritual cleansing, purification rituals, ritual purity, spiritual pollution"
}

interface PurityContent {
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

const purityContent: PurityContent[] = [
  {
    title: "Foundations of Purity",
    description: "Understanding the fundamental concepts of purity and impurity in Shinto theology, and their role in spiritual and daily life.",
    keyPoints: [
      "Concept of kegare (impurity)",
      "Nature of spiritual pollution",
      "Balance of pure and impure",
      "Natural vs. human impurity",
      "Cycles of purification",
      "Relationship to kami",
      "Environmental purity",
      "Personal cleanliness"
    ],
    historicalRefs: [
      {
        text: "The concept of purity has been central to Shinto practice since ancient times.",
        source: "Early Shinto texts"
      },
      {
        text: "Purification rituals were codified in the Nara period to maintain harmony between humans and kami.",
        source: "Historical records"
      }
    ],
    significance: "Purity forms the foundation of proper relationship with kami and harmonious living in the world.",
    elements: [
      "Pure water",
      "Salt",
      "Sacred fire",
      "Purification wands",
      "Sacred spaces",
      "Natural elements",
      "Ritual implements",
      "Ceremonial clothing"
    ],
    practices: [
      "Daily cleansing",
      "Ritual handwashing",
      "Salt purification",
      "Water ablutions",
      "Mental purification",
      "Environmental cleaning",
      "Seasonal purification",
      "Ritual bathing"
    ],
    recommendedReading: [
      {
        title: "Purification in Japanese Religion",
        author: "Toshio Kuroda",
        description: "Comprehensive study of purification concepts in Shinto",
        amazonLink: "https://www.amazon.com/Japanese-Religion-Understanding-Contemporary-Society/dp/0824851889"
      }
    ]
  },
  {
    title: "Types of Impurity",
    description: "Examination of various forms of kegare (impurity) and their implications in Shinto theology and practice.",
    keyPoints: [
      "Physical impurity",
      "Spiritual pollution",
      "Environmental contamination",
      "Death pollution",
      "Blood impurity",
      "Natural disasters",
      "Human misconduct",
      "Collective impurity"
    ],
    historicalRefs: [
      {
        text: "Different types of impurity require specific purification methods.",
        source: "Traditional shrine practices"
      },
      {
        text: "The classification of impurities evolved with societal development.",
        source: "Historical documents"
      }
    ],
    significance: "Understanding different types of impurity guides appropriate purification practices and maintains spiritual harmony.",
    elements: [
      "Purification tools",
      "Sacred water sources",
      "Ritual salt",
      "Ceremonial fire",
      "Sacred papers",
      "Purification wands",
      "Natural elements",
      "Sacred spaces"
    ],
    practices: [
      "Great purification",
      "Personal cleansing",
      "Environmental purification",
      "Ritual bathing",
      "Salt cleansing",
      "Fire purification",
      "Sound purification",
      "Collective rituals"
    ],
    recommendedReading: [
      {
        title: "Ritual Purity in Japan",
        author: "Helen Hardacre",
        description: "Analysis of purity concepts in Japanese religious tradition",
        amazonLink: "https://www.amazon.com/Ritual-Purity-Japan-Helen-Hardacre/dp/0520228235"
      }
    ]
  },
  {
    title: "Purification Methods",
    description: "Detailed exploration of various harae (purification) methods and their applications in Shinto practice.",
    keyPoints: [
      "Water purification",
      "Salt purification",
      "Fire rituals",
      "Sound purification",
      "Movement practices",
      "Breathing techniques",
      "Mental cleansing",
      "Collective purification"
    ],
    historicalRefs: [
      {
        text: "Purification methods developed to address specific types of pollution.",
        source: "Shrine records"
      },
      {
        text: "Different regions developed unique purification practices.",
        source: "Local traditions"
      }
    ],
    significance: "Proper purification methods ensure effective removal of impurity and restoration of harmony.",
    elements: [
      "Sacred water",
      "Ritual salt",
      "Sacred fire",
      "Musical instruments",
      "Purification wands",
      "Ceremonial vessels",
      "Natural materials",
      "Sacred texts"
    ],
    practices: [
      "Misogi (water)",
      "Shubatsu (salt)",
      "Oharae (great)",
      "Imi (avoidance)",
      "Sound rituals",
      "Movement rituals",
      "Breathing practices",
      "Mental techniques"
    ],
    recommendedReading: [
      {
        title: "Japanese Purification Rites",
        author: "Emiko Ohnuki-Tierney",
        description: "Detailed study of Shinto purification practices",
        amazonLink: "https://www.amazon.com/Japanese-Purification-Rites-Contemporary-Society/dp/0824815289"
      }
    ]
  },
  {
    title: "Contemporary Understanding",
    description: "Modern interpretations and applications of Shinto purity concepts in contemporary life and society.",
    keyPoints: [
      "Modern applications",
      "Urban adaptations",
      "Environmental concerns",
      "Personal wellness",
      "Social implications",
      "Global perspectives",
      "Scientific understanding",
      "Cultural preservation"
    ],
    historicalRefs: [
      {
        text: "Traditional purity concepts adapt to modern life while maintaining core principles.",
        source: "Contemporary studies"
      },
      {
        text: "Environmental awareness connects with traditional purity concepts.",
        source: "Modern interpretations"
      }
    ],
    significance: "Contemporary understanding of purity bridges traditional wisdom with modern needs and scientific knowledge.",
    elements: [
      "Modern facilities",
      "Urban spaces",
      "Natural resources",
      "Technology",
      "Educational materials",
      "Scientific research",
      "Cultural programs",
      "Global networks"
    ],
    practices: [
      "Daily hygiene",
      "Environmental care",
      "Mental wellness",
      "Social responsibility",
      "Educational programs",
      "Cultural exchange",
      "Research studies",
      "Community engagement"
    ],
    recommendedReading: [
      {
        title: "Contemporary Japanese Spirituality",
        author: "John K. Nelson",
        description: "Modern perspective on Shinto purity concepts",
        amazonLink: "https://www.amazon.com/Contemporary-Japanese-Spirituality-John-Nelson/dp/0824820347"
      }
    ]
  }
]

export default function PurityPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Purity in Shinto</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the fundamental concept of purity in Shinto theology, its various forms, methods of purification, and contemporary understanding in modern society.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="foundations" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="foundations">Foundations</TabsTrigger>
          <TabsTrigger value="types">Types</TabsTrigger>
          <TabsTrigger value="methods">Methods</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        {purityContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({foundations: true, types: true, methods: true, contemporary: true})[index]}>
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
              title: "Ritual",
              href: "/religion/shinto/theology/ritual"
            },
            {
              title: "Sacred Space",
              href: "/religion/shinto/theology/sacred-space"
            },
            {
              title: "Festivals",
              href: "/religion/shinto/practices/festivals"
            }
          ]}
        />
      </div>
    </div>
  )
} 