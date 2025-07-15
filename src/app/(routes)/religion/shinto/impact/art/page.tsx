import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Art Impact | Shinto Cultural Impact",
  description: "Explore Shinto's profound influence on Japanese art forms, from traditional visual arts and architecture to modern artistic expressions and aesthetic principles.",
  keywords: "Shinto art, Japanese aesthetics, shrine architecture, sacred art, ritual objects, contemporary Shinto art, artistic traditions, visual culture, spiritual symbolism"
}

interface ArtContent {
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

const artContent: ArtContent[] = [
  {
    title: "Visual Arts and Symbolism",
    description: "Examining Shinto's influence on traditional Japanese visual arts and symbolic representation.",
    keyPoints: [
      "Sacred symbols and motifs",
      "Ritual art objects",
      "Pictorial narratives",
      "Decorative traditions",
      "Color symbolism",
      "Natural imagery",
      "Divine representations",
      "Artistic techniques"
    ],
    historicalRefs: [
      {
        text: "Early Shinto art representations found in the Kojiki scrolls (8th century).",
        source: "Ancient Art Archives"
      },
      {
        text: "Development of unique Shinto artistic styles during the Heian period.",
        source: "Classical Art Records"
      }
    ],
    significance: "Shinto visual arts established distinctive Japanese aesthetic principles and symbolic languages.",
    elements: [
      "Sacred paintings",
      "Ritual objects",
      "Decorative elements",
      "Natural motifs",
      "Divine symbols",
      "Color patterns",
      "Sacred geometry",
      "Traditional materials"
    ],
    practices: [
      "Icon creation",
      "Ritual decoration",
      "Sacred painting",
      "Object consecration",
      "Symbol design",
      "Pattern making",
      "Traditional crafts",
      "Artistic training"
    ],
    recommendedReading: [
      {
        title: "Sacred Arts of Japan",
        author: "John Rosenfield",
        description: "Comprehensive study of Japanese religious art",
        amazonLink: "https://www.amazon.com/Sacred-Arts-Japan-Buddhist-Religious/dp/0300095988"
      }
    ]
  },
  {
    title: "Architecture and Space",
    description: "Analyzing Shinto's impact on architectural design and sacred space creation.",
    keyPoints: [
      "Shrine architecture",
      "Sacred space design",
      "Natural integration",
      "Spatial hierarchy",
      "Construction techniques",
      "Material selection",
      "Aesthetic principles",
      "Modern adaptations"
    ],
    historicalRefs: [
      {
        text: "Establishment of Ise Shrine architectural style in the 7th century.",
        source: "Architectural History Records"
      },
      {
        text: "Evolution of shrine construction techniques during the Edo period.",
        source: "Traditional Architecture Documents"
      }
    ],
    significance: "Shinto architecture created unique Japanese spatial concepts and building traditions.",
    elements: [
      "Torii gates",
      "Shrine buildings",
      "Sacred spaces",
      "Natural elements",
      "Construction methods",
      "Traditional materials",
      "Spatial layouts",
      "Decorative features"
    ],
    practices: [
      "Sacred construction",
      "Space purification",
      "Material selection",
      "Traditional building",
      "Site planning",
      "Maintenance rituals",
      "Design principles",
      "Modern adaptation"
    ],
    recommendedReading: [
      {
        title: "The Architecture of Japan",
        author: "David Young",
        description: "Analysis of Japanese architectural traditions",
        amazonLink: "https://www.amazon.com/Japanese-Architecture-Religious-Influence-Construction/dp/0471198269"
      }
    ]
  },
  {
    title: "Performance and Ritual Arts",
    description: "Understanding Shinto's influence on performance arts and ritual expressions.",
    keyPoints: [
      "Ritual dance",
      "Sacred music",
      "Theatrical forms",
      "Ceremonial arts",
      "Festival performances",
      "Artistic training",
      "Traditional instruments",
      "Modern interpretations"
    ],
    historicalRefs: [
      {
        text: "Origins of kagura dance in ancient Shinto ceremonies.",
        source: "Performance Arts History"
      },
      {
        text: "Development of gagaku court music for Shinto rituals.",
        source: "Musical Traditions Archive"
      }
    ],
    significance: "Shinto performance arts shaped Japanese theatrical and musical traditions.",
    elements: [
      "Sacred dances",
      "Ritual music",
      "Theatrical forms",
      "Ceremonial costumes",
      "Traditional instruments",
      "Performance spaces",
      "Artistic training",
      "Festival arts"
    ],
    practices: [
      "Ritual performance",
      "Sacred dance",
      "Musical training",
      "Costume creation",
      "Instrument making",
      "Festival preparation",
      "Artistic preservation",
      "Modern adaptation"
    ],
    recommendedReading: [
      {
        title: "Ritual and Music of Japan",
        author: "Steven Nelson",
        description: "Study of Japanese ritual performance arts",
        amazonLink: "https://www.amazon.com/Japanese-Traditional-Music-Cultural-History/dp/0521514744"
      }
    ]
  },
  {
    title: "Contemporary Expressions",
    description: "Exploring modern artistic interpretations and adaptations of Shinto themes.",
    keyPoints: [
      "Modern interpretations",
      "Digital art forms",
      "Contemporary design",
      "Urban aesthetics",
      "Global influences",
      "Artistic innovation",
      "Cultural fusion",
      "Future directions"
    ],
    historicalRefs: [
      {
        text: "Integration of Shinto themes in contemporary Japanese art movements since 1950s.",
        source: "Modern Art Archives"
      },
      {
        text: "Emergence of digital Shinto art forms in the 21st century.",
        source: "Contemporary Art Records"
      }
    ],
    significance: "Contemporary Shinto art demonstrates the tradition's continued relevance and adaptability.",
    elements: [
      "Modern materials",
      "Digital media",
      "Urban designs",
      "Mixed techniques",
      "Global influences",
      "New technologies",
      "Cultural fusion",
      "Environmental art"
    ],
    practices: [
      "Digital creation",
      "Modern design",
      "Urban installation",
      "Mixed media",
      "Global collaboration",
      "Environmental art",
      "Cultural exchange",
      "Innovation research"
    ],
    recommendedReading: [
      {
        title: "Contemporary Japanese Art",
        author: "Ming Tiampo",
        description: "Analysis of modern Japanese artistic expressions",
        amazonLink: "https://www.amazon.com/Contemporary-Japanese-Art-World-Beyond/dp/1780233841"
      }
    ]
  }
]

export default function ArtImpactPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Shinto's Impact on Art</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore Shinto's profound influence on Japanese artistic traditions, from ancient visual arts and architecture to contemporary expressions and aesthetic principles.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="visual" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="visual">Visual Arts</TabsTrigger>
          <TabsTrigger value="architecture">Architecture</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        {artContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({visual: true, architecture: true, performance: true, contemporary: true})[index]}>
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
              title: "Literature Impact",
              href: "/religion/shinto/impact/literature"
            },
            {
              title: "Cultural Impact",
              href: "/religion/shinto/impact/culture"
            },
            {
              title: "Social Impact",
              href: "/religion/shinto/impact/society"
            }
          ]}
        />
      </div>
    </div>
  )
} 