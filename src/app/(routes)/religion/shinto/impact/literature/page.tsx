import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Literature Impact | Shinto Cultural Impact",
  description: "Explore Shinto's profound influence on Japanese literature, from ancient mythological texts to modern literary expressions, examining its themes, symbolism, and cultural significance.",
  keywords: "Shinto literature, Japanese mythology, Kojiki, Nihon Shoki, sacred texts, poetry, modern literature, literary traditions, spiritual narratives"
}

interface LiteratureContent {
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

const literatureContent: LiteratureContent[] = [
  {
    title: "Sacred Texts and Chronicles",
    description: "Examining the foundational texts and chronicles that established Shinto literary traditions.",
    keyPoints: [
      "Kojiki compilation",
      "Nihon Shoki narratives",
      "Imperial chronicles",
      "Creation myths",
      "Divine genealogies",
      "Ritual texts",
      "Historical records",
      "Shrine documents"
    ],
    historicalRefs: [
      {
        text: "Completion of the Kojiki in 712 CE as Japan's earliest written record.",
        source: "Ancient Literary Records"
      },
      {
        text: "Compilation of the Nihon Shoki in 720 CE as the official imperial history.",
        source: "Imperial Archives"
      }
    ],
    significance: "Sacred texts established the literary foundations of Shinto thought and Japanese cultural identity.",
    elements: [
      "Creation stories",
      "Divine narratives",
      "Imperial legends",
      "Ritual instructions",
      "Genealogical records",
      "Mythological accounts",
      "Historical chronicles",
      "Sacred poetry"
    ],
    practices: [
      "Text preservation",
      "Ritual recitation",
      "Manuscript copying",
      "Literary study",
      "Oral transmission",
      "Textual analysis",
      "Historical research",
      "Archival maintenance"
    ],
    recommendedReading: [
      {
        title: "The Kojiki: Records of Ancient Matters",
        author: "Donald L. Philippi",
        description: "Definitive translation of Japan's oldest chronicle",
        amazonLink: "https://www.amazon.com/Kojiki-Records-Ancient-Matters-Classics/dp/0691014892"
      }
    ]
  },
  {
    title: "Poetic and Literary Forms",
    description: "Analyzing Shinto's influence on Japanese poetic and literary expressions.",
    keyPoints: [
      "Sacred poetry",
      "Ritual verses",
      "Nature imagery",
      "Spiritual themes",
      "Seasonal references",
      "Divine inspiration",
      "Literary forms",
      "Symbolic language"
    ],
    historicalRefs: [
      {
        text: "Collection of norito (ritual prayers) in the Engishiki (927 CE).",
        source: "Literary Archives"
      },
      {
        text: "Development of waka poetry with Shinto themes during the Heian period.",
        source: "Classical Poetry Collections"
      }
    ],
    significance: "Shinto poetic forms shaped Japanese literary aesthetics and spiritual expression.",
    elements: [
      "Ritual prayers",
      "Sacred poems",
      "Nature motifs",
      "Seasonal cycles",
      "Divine references",
      "Symbolic imagery",
      "Literary devices",
      "Spiritual themes"
    ],
    practices: [
      "Poetry composition",
      "Ritual writing",
      "Literary study",
      "Oral recitation",
      "Symbolic analysis",
      "Artistic expression",
      "Cultural preservation",
      "Educational transmission"
    ],
    recommendedReading: [
      {
        title: "Traditional Japanese Poetry",
        author: "Steven D. Carter",
        description: "Analysis of Japanese poetic forms and traditions",
        amazonLink: "https://www.amazon.com/Traditional-Japanese-Poetry-Anthology/dp/0804722124"
      }
    ]
  },
  {
    title: "Narrative Traditions",
    description: "Understanding Shinto's role in shaping Japanese narrative traditions and storytelling.",
    keyPoints: [
      "Mythological tales",
      "Folk stories",
      "Legend cycles",
      "Shrine histories",
      "Miracle stories",
      "Biographical accounts",
      "Regional traditions",
      "Oral histories"
    ],
    historicalRefs: [
      {
        text: "Collection of shrine origin stories (engi) during the Kamakura period.",
        source: "Shrine Records"
      },
      {
        text: "Compilation of regional religious tales in the Fudoki.",
        source: "Regional Chronicles"
      }
    ],
    significance: "Narrative traditions preserved and transmitted Shinto worldviews and cultural values.",
    elements: [
      "Origin stories",
      "Divine tales",
      "Local legends",
      "Miracle accounts",
      "Historical narratives",
      "Folk traditions",
      "Shrine chronicles",
      "Spiritual biographies"
    ],
    practices: [
      "Story preservation",
      "Oral transmission",
      "Written documentation",
      "Cultural education",
      "Historical research",
      "Literary analysis",
      "Regional studies",
      "Narrative performance"
    ],
    recommendedReading: [
      {
        title: "Japanese Mythology",
        author: "Juliet Piggott",
        description: "Comprehensive study of Japanese mythological traditions",
        amazonLink: "https://www.amazon.com/Japanese-Mythology-Library-Worlds-Myths/dp/0872263517"
      }
    ]
  },
  {
    title: "Modern Interpretations",
    description: "Exploring contemporary literary expressions and adaptations of Shinto themes.",
    keyPoints: [
      "Modern fiction",
      "Contemporary poetry",
      "Academic works",
      "Popular literature",
      "Digital media",
      "Global perspectives",
      "Cultural analysis",
      "Literary criticism"
    ],
    historicalRefs: [
      {
        text: "Integration of Shinto themes in modern Japanese literature since the Meiji period.",
        source: "Modern Literary Archives"
      },
      {
        text: "Development of academic Shinto studies in the post-war period.",
        source: "Academic Records"
      }
    ],
    significance: "Modern interpretations demonstrate the continuing relevance of Shinto themes in contemporary literature.",
    elements: [
      "Modern novels",
      "Academic texts",
      "Digital content",
      "Literary criticism",
      "Cultural studies",
      "Research papers",
      "Popular media",
      "Educational materials"
    ],
    practices: [
      "Literary creation",
      "Academic research",
      "Digital publishing",
      "Cultural analysis",
      "Critical writing",
      "Educational development",
      "Media production",
      "Global dissemination"
    ],
    recommendedReading: [
      {
        title: "Shinto in Modern Literature",
        author: "Mark Teeuwen",
        description: "Analysis of Shinto themes in contemporary writing",
        amazonLink: "https://www.amazon.com/Shinto-Modern-World-Reader/dp/0415508738"
      }
    ]
  }
]

export default function LiteratureImpactPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Shinto's Literature Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore Shinto's profound influence on Japanese literature, from ancient sacred texts and poetry to modern literary expressions and academic works.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="sacred" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="sacred">Sacred Texts</TabsTrigger>
          <TabsTrigger value="poetic">Poetic Forms</TabsTrigger>
          <TabsTrigger value="narrative">Narratives</TabsTrigger>
          <TabsTrigger value="modern">Modern</TabsTrigger>
        </TabsList>

        {literatureContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({sacred: true, poetic: true, narrative: true, modern: true})[index]}>
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
              title: "Art Impact",
              href: "/religion/shinto/impact/art"
            },
            {
              title: "Cultural Impact",
              href: "/religion/shinto/impact/culture"
            },
            {
              title: "Festivals Impact",
              href: "/religion/shinto/impact/festivals"
            }
          ]}
        />
      </div>
    </div>
  )
} 