import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Art Impact | Taoist Impact",
  description: "Explore Taoism's profound influence on Chinese and East Asian art, examining its impact on painting, calligraphy, poetry, architecture, and contemporary artistic expressions.",
  keywords: "Taoist Art, Chinese Painting, Landscape Art, Calligraphy, Taoist Poetry, Temple Architecture, Contemporary Art, Artistic Philosophy"
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
    title: "Painting and Calligraphy",
    description: "Examining Taoism's influence on Chinese painting and calligraphy, particularly in landscape art and artistic philosophy.",
    keyPoints: [
      "Landscape painting",
      "Brush techniques",
      "Natural harmony",
      "Artistic spontaneity",
      "Spiritual expression",
      "Meditative practice",
      "Visual philosophy",
      "Aesthetic principles"
    ],
    historicalRefs: [
      {
        text: "Wang Wei's revolutionary landscape paintings in the Tang Dynasty.",
        source: "Classical Chinese Art History"
      },
      {
        text: "Development of the 'Six Principles' of Chinese painting by Xie He.",
        source: "Ancient Chinese Art Theory"
      }
    ],
    significance: "Taoist concepts fundamentally shaped Chinese painting and calligraphy, establishing enduring aesthetic principles and spiritual approaches to artistic creation.",
    elements: [
      "Empty space",
      "Natural flow",
      "Spontaneous expression",
      "Spiritual resonance",
      "Minimal strokes",
      "Dynamic balance",
      "Inner essence",
      "Cosmic harmony"
    ],
    practices: [
      "Brush meditation",
      "Nature observation",
      "Spiritual preparation",
      "Technical training",
      "Philosophical study",
      "Creative spontaneity",
      "Material selection",
      "Environmental harmony"
    ],
    recommendedReading: [
      {
        title: "The Way of Chinese Painting",
        author: "Mai-mai Sze",
        description: "Comprehensive study of Taoist influence on Chinese painting",
        amazonLink: "https://www.amazon.com/Way-Chinese-Painting-Mai-mai-Sze/dp/0394733169"
      }
    ]
  },
  {
    title: "Architecture and Space",
    description: "Analyzing Taoist principles in architectural design, temple construction, and spatial arrangement.",
    keyPoints: [
      "Temple design",
      "Garden layout",
      "Sacred geometry",
      "Natural integration",
      "Spatial harmony",
      "Environmental flow",
      "Symbolic elements",
      "Ritual spaces"
    ],
    historicalRefs: [
      {
        text: "Construction of the White Cloud Temple complex in Beijing.",
        source: "Chinese Architectural History"
      },
      {
        text: "Development of Taoist garden principles in the Song Dynasty.",
        source: "Classical Garden Design Texts"
      }
    ],
    significance: "Taoist architectural principles created spaces that embody harmony between human construction and natural environment.",
    elements: [
      "Feng shui",
      "Natural materials",
      "Sacred orientation",
      "Spatial flow",
      "Environmental integration",
      "Symbolic decoration",
      "Ritual function",
      "Aesthetic balance"
    ],
    practices: [
      "Site selection",
      "Environmental assessment",
      "Material selection",
      "Spatial planning",
      "Ritual consideration",
      "Decorative arts",
      "Maintenance traditions",
      "Sacred geometry"
    ],
    recommendedReading: [
      {
        title: "The Architecture of Sacred Space",
        author: "Sarah Handler",
        description: "Analysis of Taoist temple architecture",
        amazonLink: "https://www.amazon.com/Architecture-Sacred-Space-Chinese-Culture/dp/0824867393"
      }
    ]
  },
  {
    title: "Poetry and Literature",
    description: "Exploring Taoist influences in Chinese poetry, prose, and literary aesthetics.",
    keyPoints: [
      "Nature poetry",
      "Mystical expression",
      "Philosophical verse",
      "Literary theory",
      "Aesthetic principles",
      "Spiritual themes",
      "Metaphorical language",
      "Artistic freedom"
    ],
    historicalRefs: [
      {
        text: "Li Bai's Taoist-influenced poetry in the Tang Dynasty.",
        source: "Classical Chinese Literature"
      },
      {
        text: "Development of Taoist literary theory by Six Dynasties critics.",
        source: "Chinese Literary Theory"
      }
    ],
    significance: "Taoist thought profoundly influenced Chinese literary expression, creating distinctive aesthetic and philosophical approaches.",
    elements: [
      "Natural imagery",
      "Spiritual themes",
      "Philosophical depth",
      "Spontaneous expression",
      "Mystical elements",
      "Symbolic language",
      "Emotional resonance",
      "Universal harmony"
    ],
    practices: [
      "Nature contemplation",
      "Spiritual cultivation",
      "Poetic composition",
      "Literary study",
      "Metaphorical expression",
      "Aesthetic refinement",
      "Creative freedom",
      "Philosophical integration"
    ],
    recommendedReading: [
      {
        title: "The Poetry of Zen",
        author: "Sam Hamill",
        description: "Study of Taoist influence in East Asian poetry",
        amazonLink: "https://www.amazon.com/Poetry-Zen-Sam-Hamill/dp/1590306295"
      }
    ]
  },
  {
    title: "Contemporary Expression",
    description: "Examining modern artistic interpretations and applications of Taoist principles.",
    keyPoints: [
      "Modern adaptation",
      "Global influence",
      "Digital media",
      "Installation art",
      "Performance art",
      "Environmental art",
      "Conceptual work",
      "Cross-cultural fusion"
    ],
    historicalRefs: [
      {
        text: "Emergence of Taoist-influenced environmental art in the 1970s.",
        source: "Contemporary Art History"
      },
      {
        text: "Integration of Taoist principles in digital art practices.",
        source: "Digital Art Theory"
      }
    ],
    significance: "Taoist artistic principles continue to inspire and influence contemporary global art practices.",
    elements: [
      "Digital media",
      "Environmental awareness",
      "Cultural fusion",
      "Conceptual depth",
      "Interactive elements",
      "Spiritual themes",
      "Social engagement",
      "Technological integration"
    ],
    practices: [
      "Digital creation",
      "Installation design",
      "Performance art",
      "Environmental projects",
      "Cross-cultural collaboration",
      "Media exploration",
      "Community engagement",
      "Theoretical development"
    ],
    recommendedReading: [
      {
        title: "Contemporary Chinese Art",
        author: "Wu Hung",
        description: "Analysis of Taoist influence in modern Chinese art",
        amazonLink: "https://www.amazon.com/Contemporary-Chinese-Art-Primary-Documents/dp/0822349433"
      }
    ]
  }
]

export default function ArtPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Taoist Impact on Art</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore Taoism's profound influence on Chinese and East Asian art, examining its impact on painting, calligraphy, poetry, architecture, and contemporary artistic expressions.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="painting" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="painting">Painting</TabsTrigger>
          <TabsTrigger value="architecture">Architecture</TabsTrigger>
          <TabsTrigger value="poetry">Poetry</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        {artContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({painting: true, architecture: true, poetry: true, contemporary: true})[index]}>
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
              title: "Cultural Impact",
              href: "/religion/taoism/impact/culture"
            },
            {
              title: "Literature Impact",
              href: "/religion/taoism/impact/literature"
            },
            {
              title: "Modern Practice",
              href: "/religion/taoism/practice/modern"
            }
          ]}
        />
      </div>
    </div>
  )
} 