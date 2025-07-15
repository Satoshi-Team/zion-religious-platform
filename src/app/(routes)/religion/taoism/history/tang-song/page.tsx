import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Tang-Song Period | Taoist History",
  description: "Explore Taoism during the Tang and Song Dynasties (618-1279 CE), examining its golden age of imperial patronage, philosophical refinement, and the development of Complete Perfection Taoism.",
  keywords: "Tang Dynasty Taoism, Song Dynasty Taoism, Complete Perfection, Quanzhen, Internal Alchemy, Thunder Rites, Imperial Patronage, Taoist Canon"
}

interface TangSongContent {
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

const tangSongContent: TangSongContent[] = [
  {
    title: "Imperial Patronage",
    description: "Examining the relationship between Taoism and the imperial court during the Tang and Song dynasties.",
    keyPoints: [
      "Tang imperial support",
      "Laozi imperial cult",
      "Court Taoists",
      "Imperial ceremonies",
      "State sponsorship",
      "Temple construction",
      "Canon compilation",
      "Political influence"
    ],
    historicalRefs: [
      {
        text: "Emperor Xuanzong's promotion of Taoism as state religion in 741 CE.",
        source: "Tang Imperial Records"
      },
      {
        text: "Song Emperor Huizong's establishment of the Bureau for the Transmission of the Dao.",
        source: "Song Administrative Records"
      }
    ],
    significance: "The Tang-Song period represented the height of imperial patronage for Taoism, leading to unprecedented institutional development and cultural influence.",
    elements: [
      "Imperial rituals",
      "State ceremonies",
      "Court positions",
      "Temple networks",
      "Administrative systems",
      "Educational institutions",
      "Patronage structures",
      "Political integration"
    ],
    practices: [
      "State ceremonies",
      "Imperial rituals",
      "Court divination",
      "Official ordinations",
      "Temple management",
      "Canon preservation",
      "Educational training",
      "Administrative duties"
    ],
    recommendedReading: [
      {
        title: "Taoism and the T'ang State",
        author: "T.H. Barrett",
        description: "Study of Taoism's relationship with Tang Dynasty governance",
        amazonLink: "https://www.amazon.com/Taoism-Tang-State-Oxford-Oriental/dp/0197135641"
      }
    ]
  },
  {
    title: "Doctrinal Developments",
    description: "Analyzing the evolution and refinement of Taoist doctrine during the Tang and Song periods.",
    keyPoints: [
      "Internal Alchemy systematization",
      "Thunder Rites development",
      "Quanzhen formation",
      "Philosophical synthesis",
      "Buddhist integration",
      "Confucian harmony",
      "Textual commentaries",
      "Theoretical refinement"
    ],
    historicalRefs: [
      {
        text: "Formation of the Complete Perfection (Quanzhen) school in the Song Dynasty.",
        source: "Quanzhen Historical Records"
      },
      {
        text: "Development of Thunder Rites in the Song Dynasty.",
        source: "Taoist Ritual Texts"
      }
    ],
    significance: "The Tang-Song period saw major doctrinal developments that would shape all subsequent Taoist thought and practice.",
    elements: [
      "Alchemical theory",
      "Ritual systems",
      "Philosophical frameworks",
      "Meditation methods",
      "Ethical principles",
      "Cosmological models",
      "Soteriological paths",
      "Syncretic integration"
    ],
    practices: [
      "Internal cultivation",
      "Thunder rituals",
      "Meditation techniques",
      "Scriptural study",
      "Ethical cultivation",
      "Philosophical debate",
      "Commentary writing",
      "Lineage transmission"
    ],
    recommendedReading: [
      {
        title: "The Taoist Canon: A Historical Companion to the Daozang",
        author: "Kristofer Schipper",
        description: "Analysis of Tang-Song Taoist textual developments",
        amazonLink: "https://www.amazon.com/Taoist-Canon-Historical-Companion-Daozang/dp/0226738175"
      }
    ]
  },
  {
    title: "Institutional Evolution",
    description: "Understanding the development of Taoist institutions and organizations during the Tang-Song period.",
    keyPoints: [
      "Monastery systems",
      "Ordination ranks",
      "Educational structures",
      "Lineage organization",
      "Temple networks",
      "Administrative methods",
      "Social services",
      "Community integration"
    ],
    historicalRefs: [
      {
        text: "Establishment of major Taoist monasteries during the Tang Dynasty.",
        source: "Tang Monastic Records"
      },
      {
        text: "Development of Quanzhen monastic system in the Song Dynasty.",
        source: "Complete Perfection Chronicles"
      }
    ],
    significance: "The Tang-Song period established enduring institutional patterns for Taoist organization and practice.",
    elements: [
      "Monastic rules",
      "Ordination systems",
      "Educational curricula",
      "Administrative structures",
      "Temple organization",
      "Lineage systems",
      "Social services",
      "Community outreach"
    ],
    practices: [
      "Monastic training",
      "Ordination ceremonies",
      "Educational programs",
      "Temple administration",
      "Lineage transmission",
      "Community service",
      "Ritual performance",
      "Social welfare"
    ],
    recommendedReading: [
      {
        title: "The Taoist Monastic Tradition",
        author: "Florian C. Reiter",
        description: "Study of Tang-Song Taoist monasticism",
        amazonLink: "https://www.amazon.com/Taoist-Monastic-Tradition-Transformation/dp/0824831330"
      }
    ]
  },
  {
    title: "Cultural Integration",
    description: "Exploring Taoism's integration with Tang-Song culture and society.",
    keyPoints: [
      "Literary influence",
      "Artistic expression",
      "Popular practices",
      "Social impact",
      "Elite culture",
      "Folk religion",
      "Urban integration",
      "Rural presence"
    ],
    historicalRefs: [
      {
        text: "Taoist influences in Tang poetry and literature.",
        source: "Tang Literary Anthology"
      },
      {
        text: "Integration of Taoist practices in Song urban culture.",
        source: "Song Social History"
      }
    ],
    significance: "The Tang-Song period saw Taoism's deep integration into Chinese culture at all levels of society.",
    elements: [
      "Literary forms",
      "Artistic styles",
      "Popular beliefs",
      "Social customs",
      "Elite practices",
      "Folk traditions",
      "Urban culture",
      "Rural traditions"
    ],
    practices: [
      "Literary composition",
      "Artistic creation",
      "Festival celebration",
      "Popular worship",
      "Elite cultivation",
      "Folk healing",
      "Urban rituals",
      "Rural ceremonies"
    ],
    recommendedReading: [
      {
        title: "Religion and Society in T'ang and Sung China",
        author: "Patricia Buckley Ebrey",
        description: "Analysis of religion's role in Tang-Song society",
        amazonLink: "https://www.amazon.com/Religion-Society-Tang-Sung-China/dp/0824815122"
      }
    ]
  }
]

export default function TangSongPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Tang-Song Period in Taoist History</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the golden age of Taoism during the Tang and Song Dynasties (618-1279 CE), examining its imperial patronage, doctrinal developments, institutional evolution, and cultural integration.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="imperial" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="imperial">Imperial</TabsTrigger>
          <TabsTrigger value="doctrinal">Doctrinal</TabsTrigger>
          <TabsTrigger value="institutional">Institutional</TabsTrigger>
          <TabsTrigger value="cultural">Cultural</TabsTrigger>
        </TabsList>

        {tangSongContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({imperial: true, doctrinal: true, institutional: true, cultural: true})[index]}>
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
              title: "Six Dynasties",
              href: "/religion/taoism/history/six-dynasties"
            },
            {
              title: "Yuan-Ming Period",
              href: "/religion/taoism/history/yuan-ming"
            },
            {
              title: "Complete Perfection School",
              href: "/religion/taoism/schools/quanzhen"
            }
          ]}
        />
      </div>
    </div>
  )
} 