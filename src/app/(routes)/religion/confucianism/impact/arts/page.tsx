import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Arts and Literature | Confucian Cultural Impact",
  description: "Explore Confucianism's profound influence on artistic expression, literary traditions, and cultural aesthetics across East Asia and beyond.",
  keywords: "Confucian Arts, Literary Traditions, Cultural Aesthetics, Poetry, Calligraphy, Music, Cultural Expression, Artistic Values"
}

interface ArtsContent {
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

const artsContent: ArtsContent[] = [
  {
    title: "Literary Traditions",
    description: "The fundamental principles and values that shape Confucian approaches to literature and written expression.",
    keyPoints: [
      "Classical Poetry",
      "Historical Records",
      "Philosophical Texts",
      "Educational Literature",
      "Moral Tales",
      "Literary Criticism",
      "Cultural Heritage",
      "Literary Canon"
    ],
    historicalRefs: [
      {
        text: "Literature serves to express moral principles.",
        source: "Analects 17.9"
      },
      {
        text: "Poetry expresses human nature and emotions.",
        source: "Book of Rites"
      }
    ],
    significance: "Confucian literary traditions established principles of moral expression and cultural preservation that continue to influence literature worldwide.",
    elements: [
      "Poetic forms",
      "Historical writing",
      "Philosophical texts",
      "Educational works",
      "Moral stories",
      "Literary theory",
      "Cultural texts",
      "Classical canon"
    ],
    practices: [
      "Poetry composition",
      "Historical recording",
      "Philosophical writing",
      "Educational texts",
      "Moral storytelling",
      "Literary analysis",
      "Cultural preservation",
      "Textual study"
    ],
    recommendedReading: [
      {
        title: "Confucian Literature",
        author: "Stephen Owen",
        description: "Analysis of Confucian literary traditions",
        amazonLink: "https://www.amazon.com/Confucian-Literature-Stephen-Owen/dp/0674007271"
      }
    ]
  },
  {
    title: "Visual Arts",
    description: "The development and influence of Confucian values on visual artistic expression and aesthetics.",
    keyPoints: [
      "Calligraphy",
      "Painting",
      "Architecture",
      "Ceramics",
      "Gardens",
      "Ritual Objects",
      "Cultural Symbols",
      "Artistic Values"
    ],
    historicalRefs: [
      {
        text: "Art should reflect moral principles.",
        source: "Book of Rites"
      },
      {
        text: "Aesthetics serve ethical purposes.",
        source: "Analects 3.25"
      }
    ],
    significance: "Confucian visual arts established principles of moral aesthetics and cultural expression that continue to influence artistic traditions worldwide.",
    elements: [
      "Calligraphic styles",
      "Painting techniques",
      "Architectural forms",
      "Ceramic designs",
      "Garden layouts",
      "Ritual artifacts",
      "Cultural symbols",
      "Artistic principles"
    ],
    practices: [
      "Calligraphy practice",
      "Painting techniques",
      "Architectural design",
      "Ceramic making",
      "Garden design",
      "Ritual art",
      "Cultural expression",
      "Artistic creation"
    ],
    recommendedReading: [
      {
        title: "Confucian Aesthetics",
        author: "Mary Evelyn Tucker",
        description: "Study of Confucian artistic values",
        amazonLink: "https://www.amazon.com/Confucian-Aesthetics-Mary-Evelyn-Tucker/dp/0791451025"
      }
    ]
  },
  {
    title: "Performing Arts",
    description: "Traditional and modern approaches to music, dance, and ritual performance in Confucian thought.",
    keyPoints: [
      "Ritual Music",
      "Court Dance",
      "Opera",
      "Ritual Performance",
      "Cultural Ceremonies",
      "Musical Theory",
      "Performance Ethics",
      "Cultural Expression"
    ],
    historicalRefs: [
      {
        text: "Music harmonizes human emotions.",
        source: "Book of Music"
      },
      {
        text: "Ritual performance cultivates virtue.",
        source: "Book of Rites"
      }
    ],
    significance: "Confucian performing arts emphasize moral cultivation and cultural harmony, influencing artistic traditions worldwide.",
    elements: [
      "Musical forms",
      "Dance styles",
      "Opera traditions",
      "Ritual performances",
      "Cultural ceremonies",
      "Musical theory",
      "Performance ethics",
      "Cultural expression"
    ],
    practices: [
      "Music performance",
      "Dance practice",
      "Opera performance",
      "Ritual ceremonies",
      "Cultural events",
      "Musical education",
      "Performance training",
      "Cultural preservation"
    ],
    recommendedReading: [
      {
        title: "Confucian Music Theory",
        author: "Kenneth DeWoskin",
        description: "Analysis of Confucian musical traditions",
        amazonLink: "https://www.amazon.com/Confucian-Music-Theory-Kenneth-DeWoskin/dp/0521524008"
      }
    ]
  },
  {
    title: "Modern Applications",
    description: "Contemporary adaptations and applications of Confucian artistic principles in modern contexts.",
    keyPoints: [
      "Cultural Revival",
      "Modern Literature",
      "Contemporary Art",
      "Digital Media",
      "Cultural Heritage",
      "Artistic Innovation",
      "Global Exchange",
      "Cultural Identity"
    ],
    historicalRefs: [
      {
        text: "Traditional values enhance modern art.",
        source: "Contemporary Art Studies"
      },
      {
        text: "Confucian aesthetics guide cultural expression.",
        source: "Modern Cultural Theory"
      }
    ],
    significance: "Modern applications of Confucian artistic thought demonstrate its continuing relevance to contemporary cultural expression.",
    elements: [
      "Cultural revival",
      "Literary innovation",
      "Artistic expression",
      "Digital media",
      "Cultural heritage",
      "Artistic values",
      "Global influence",
      "Cultural identity"
    ],
    practices: [
      "Cultural programs",
      "Literary creation",
      "Artistic expression",
      "Digital content",
      "Heritage preservation",
      "Artistic innovation",
      "Global exchange",
      "Cultural activities"
    ],
    recommendedReading: [
      {
        title: "Confucianism in Modern Art",
        author: "Tu Weiming",
        description: "Study of modern Confucian artistic applications",
        amazonLink: "https://www.amazon.com/Confucianism-Modern-Art-Weiming-Tu/dp/0521524008"
      }
    ]
  }
]

export default function ArtsPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Arts and Literature</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore Confucianism's profound influence on artistic expression, literary traditions, and cultural aesthetics across East Asia and beyond.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="literature" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="literature">Literature</TabsTrigger>
          <TabsTrigger value="visual">Visual Arts</TabsTrigger>
          <TabsTrigger value="performing">Performing Arts</TabsTrigger>
          <TabsTrigger value="modern">Modern</TabsTrigger>
        </TabsList>

        {artsContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({literature: true, visual: true, performing: true, modern: true})[index]}>
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
              title: "Modern Influence",
              href: "/religion/confucianism/impact/influence"
            }
          ]}
        />
      </div>
    </div>
  )
} 