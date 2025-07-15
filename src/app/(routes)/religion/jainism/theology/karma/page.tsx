import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Karma and Liberation | Jain Theology",
  description: "Explore the Jain understanding of karma, its relationship to the soul, and the path to moksha (liberation) through spiritual practices and ethical living.",
  keywords: "Jain Karma, Moksha, Liberation, Bandha, Nirjara, Samvara, Spiritual Liberation, Ethical Living, Soul Purification"
}

interface KarmaContent {
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

const karmaContent: KarmaContent[] = [
  {
    title: "Nature of Karma",
    description: "Understanding the fundamental nature of karma in Jain philosophy and its relationship to the soul.",
    keyPoints: [
      "Karmic Particles",
      "Soul-Karma Relationship",
      "Types of Karma",
      "Karmic Bondage",
      "Causal Mechanisms",
      "Duration of Karma",
      "Intensity Factors",
      "Karmic Categories"
    ],
    historicalRefs: [
      {
        text: "The nature of karma is explained in detail in the Tattvarthasutra.",
        source: "Tattvarthasutra"
      },
      {
        text: "Eight main types of karma are described in the Karmagranthas.",
        source: "Karmagranthas"
      }
    ],
    significance: "Understanding karma is essential for spiritual progress and eventual liberation.",
    elements: [
      "Knowledge-obscuring karma",
      "Perception-obscuring karma",
      "Feeling-producing karma",
      "Deluding karma",
      "Life-determining karma",
      "Name-determining karma",
      "Status-determining karma",
      "Obstruction-creating karma"
    ],
    practices: [
      "Self-study",
      "Contemplation",
      "Karmic analysis",
      "Ethical living",
      "Mental discipline",
      "Spiritual guidance",
      "Regular reflection",
      "Knowledge cultivation"
    ],
    recommendedReading: [
      {
        title: "Jaina Theory of Karma",
        author: "Dr. N.L. Jain",
        description: "Comprehensive study of Jain karma theory",
        amazonLink: "https://www.amazon.com/Jaina-Theory-Karma-N-L-Jain/dp/8120812123"
      }
    ]
  },
  {
    title: "Path to Liberation",
    description: "Exploring the spiritual journey and practices leading to moksha (liberation).",
    keyPoints: [
      "Three Jewels",
      "Fourteen Stages",
      "Spiritual Practices",
      "Karmic Elimination",
      "Soul Purification",
      "Ethical Conduct",
      "Mental Discipline",
      "Final Liberation"
    ],
    historicalRefs: [
      {
        text: "The path of liberation is detailed in the Samayasara.",
        source: "Samayasara"
      },
      {
        text: "The stages of spiritual progress are described in the Gommatassara.",
        source: "Gommatassara"
      }
    ],
    significance: "The path to liberation represents the ultimate goal of Jain spiritual practice.",
    elements: [
      "Right faith",
      "Right knowledge",
      "Right conduct",
      "Spiritual stages",
      "Karmic removal",
      "Soul development",
      "Ethical principles",
      "Mental purification"
    ],
    practices: [
      "Daily meditation",
      "Ethical observances",
      "Study of scriptures",
      "Self-reflection",
      "Spiritual counseling",
      "Community service",
      "Mindful living",
      "Ascetic practices"
    ],
    recommendedReading: [
      {
        title: "Path to Liberation",
        author: "Acharya Mahapragya",
        description: "Guide to spiritual liberation in Jainism",
        amazonLink: "https://www.amazon.com/Path-Liberation-Acharya-Mahapragya/dp/8124605432"
      }
    ]
  },
  {
    title: "Karmic Processes",
    description: "Understanding the mechanisms of karmic bondage, stoppage, and elimination.",
    keyPoints: [
      "Karmic Bondage",
      "Karmic Stoppage",
      "Karmic Elimination",
      "Causal Factors",
      "Prevention Methods",
      "Purification Techniques",
      "Spiritual Progress",
      "Liberation Process"
    ],
    historicalRefs: [
      {
        text: "The processes of karma are explained in the Pancastikayasara.",
        source: "Pancastikayasara"
      },
      {
        text: "Methods of karmic elimination are detailed in the Niyamasara.",
        source: "Niyamasara"
      }
    ],
    significance: "Understanding karmic processes is crucial for effective spiritual practice.",
    elements: [
      "Bandha (bondage)",
      "Samvara (stoppage)",
      "Nirjara (elimination)",
      "Causal conditions",
      "Prevention methods",
      "Purification practices",
      "Progress indicators",
      "Liberation signs"
    ],
    practices: [
      "Pratikramana",
      "Pratyakhyana",
      "Samayika",
      "Meditation",
      "Fasting",
      "Self-restraint",
      "Mindful action",
      "Spiritual exercises"
    ],
    recommendedReading: [
      {
        title: "Karma and Its Operation",
        author: "Dr. H.C. Bhayani",
        description: "Detailed study of karmic processes",
        amazonLink: "https://www.amazon.com/Karma-Operation-H-C-Bhayani/dp/8120811234"
      }
    ]
  },
  {
    title: "Modern Application",
    description: "Applying Jain karma theory to contemporary life and challenges.",
    keyPoints: [
      "Daily Practice",
      "Modern Lifestyle",
      "Ethical Decisions",
      "Environmental Impact",
      "Social Relations",
      "Professional Life",
      "Personal Growth",
      "Global Perspective"
    ],
    historicalRefs: [
      {
        text: "Modern interpretations of karma theory by contemporary Jain scholars.",
        source: "Contemporary Studies"
      },
      {
        text: "Application of karmic principles in modern contexts.",
        source: "Modern Research"
      }
    ],
    significance: "Karma theory remains relevant for addressing modern challenges and ethical decisions.",
    elements: [
      "Daily choices",
      "Lifestyle decisions",
      "Ethical guidelines",
      "Environmental care",
      "Social responsibility",
      "Professional ethics",
      "Personal development",
      "Global awareness"
    ],
    practices: [
      "Mindful living",
      "Ethical choices",
      "Environmental care",
      "Social service",
      "Professional integrity",
      "Personal growth",
      "Global consciousness",
      "Sustainable practices"
    ],
    recommendedReading: [
      {
        title: "Modern Jain Karma Theory",
        author: "Dr. P.S. Jaini",
        description: "Contemporary perspective on karma",
        amazonLink: "https://www.amazon.com/Modern-Jain-Karma-Theory-Jaini/dp/8124603456"
      }
    ]
  }
]

export default function KarmaPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Karma and Liberation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the Jain understanding of karma, its relationship to the soul, and the path to moksha (liberation) through spiritual practices and ethical living.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="nature" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="nature">Nature of Karma</TabsTrigger>
          <TabsTrigger value="path">Path to Liberation</TabsTrigger>
          <TabsTrigger value="processes">Karmic Processes</TabsTrigger>
          <TabsTrigger value="modern">Modern Application</TabsTrigger>
        </TabsList>

        {karmaContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({nature: true, path: true, processes: true, modern: true})[index]}>
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
              title: "Ahimsa and Non-Violence",
              href: "/religion/jainism/theology/ahimsa"
            },
            {
              title: "Anekantavada",
              href: "/religion/jainism/theology/anekantavada"
            },
            {
              title: "Five Great Vows",
              href: "/religion/jainism/theology/vows"
            }
          ]}
        />
      </div>
    </div>
  )
} 