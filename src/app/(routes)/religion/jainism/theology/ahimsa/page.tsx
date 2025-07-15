import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Ahimsa and Non-Violence | Jain Theology",
  description: "Explore the fundamental Jain principle of Ahimsa (non-violence) and its profound implications for ethical living, spiritual development, and universal compassion.",
  keywords: "Ahimsa, Non-violence, Jainism, Jain Ethics, Spiritual Practice, Compassion, Universal Kindness, Ethical Living"
}

interface AhimsaContent {
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

const ahimsaContent: AhimsaContent[] = [
  {
    title: "Core Principles",
    description: "The fundamental understanding and philosophical basis of Ahimsa in Jain thought.",
    keyPoints: [
      "Universal Non-Violence",
      "Respect for All Life",
      "Mental, Verbal, and Physical Aspects",
      "Karmic Implications",
      "Spiritual Liberation",
      "Environmental Care",
      "Ethical Living",
      "Universal Compassion"
    ],
    historicalRefs: [
      {
        text: "Ahimsa is the highest dharma, as taught by Lord Mahavira in the Acaranga Sutra.",
        source: "Acaranga Sutra"
      },
      {
        text: "The practice of Ahimsa leads to the cessation of karmic bondage.",
        source: "Tattvartha Sutra"
      }
    ],
    significance: "Ahimsa forms the cornerstone of Jain ethics and spiritual practice, representing the path to liberation.",
    elements: [
      "Non-injury to living beings",
      "Respect for all life forms",
      "Mental discipline",
      "Verbal restraint",
      "Physical carefulness",
      "Environmental awareness",
      "Ethical consideration",
      "Universal kindness"
    ],
    practices: [
      "Mindful movement",
      "Dietary restrictions",
      "Speech control",
      "Environmental protection",
      "Careful resource use",
      "Meditation practice",
      "Ethical decision-making",
      "Compassionate living"
    ],
    recommendedReading: [
      {
        title: "Ahimsa: The Way to Peace",
        author: "Acharya Mahapragya",
        description: "Comprehensive exploration of Jain non-violence",
        amazonLink: "https://www.amazon.com/Ahimsa-Way-Peace-Acharya-Mahapragya/dp/8124604223"
      }
    ]
  },
  {
    title: "Practical Application",
    description: "The implementation of Ahimsa in daily life and spiritual practice.",
    keyPoints: [
      "Daily Observances",
      "Dietary Guidelines",
      "Professional Ethics",
      "Social Interactions",
      "Environmental Care",
      "Personal Development",
      "Spiritual Growth",
      "Community Impact"
    ],
    historicalRefs: [
      {
        text: "The practice of Ahimsa requires constant vigilance in thought, word, and deed.",
        source: "Dasavaikalika Sutra"
      },
      {
        text: "Even the smallest acts of violence create karmic bondage.",
        source: "Uttaradhyayana Sutra"
      }
    ],
    significance: "Practical application of Ahimsa transforms theoretical understanding into lived experience and spiritual growth.",
    elements: [
      "Daily practices",
      "Dietary choices",
      "Professional conduct",
      "Social behavior",
      "Environmental stewardship",
      "Personal discipline",
      "Spiritual practices",
      "Community service"
    ],
    practices: [
      "Vegetarian/vegan diet",
      "Mindful walking",
      "Filtered water use",
      "Careful cleaning",
      "Sustainable living",
      "Peaceful communication",
      "Meditation",
      "Community support"
    ],
    recommendedReading: [
      {
        title: "Living with Ahimsa",
        author: "Gurudev Chitrabhanu",
        description: "Practical guide to implementing non-violence",
        amazonLink: "https://www.amazon.com/Living-Ahimsa-Gurudev-Chitrabhanu/dp/0893891231"
      }
    ]
  },
  {
    title: "Spiritual Dimensions",
    description: "The deeper spiritual aspects and transformative power of Ahimsa.",
    keyPoints: [
      "Inner Transformation",
      "Karmic Freedom",
      "Spiritual Purification",
      "Consciousness Evolution",
      "Divine Connection",
      "Soul Development",
      "Universal Harmony",
      "Liberation Path"
    ],
    historicalRefs: [
      {
        text: "Through perfect non-violence, one attains supreme knowledge.",
        source: "Samayasara"
      },
      {
        text: "Ahimsa leads to the purification of the soul.",
        source: "Niyamasara"
      }
    ],
    significance: "Spiritual practice of Ahimsa leads to the ultimate goal of moksha (liberation).",
    elements: [
      "Inner peace",
      "Karmic cleansing",
      "Soul purification",
      "Consciousness expansion",
      "Divine awareness",
      "Spiritual growth",
      "Universal connection",
      "Liberation focus"
    ],
    practices: [
      "Deep meditation",
      "Self-reflection",
      "Karmic awareness",
      "Spiritual study",
      "Divine contemplation",
      "Soul purification",
      "Universal love",
      "Liberation practices"
    ],
    recommendedReading: [
      {
        title: "The Spiritual Path of Ahimsa",
        author: "Acharya Tulsi",
        description: "Spiritual dimensions of non-violence",
        amazonLink: "https://www.amazon.com/Spiritual-Path-Ahimsa-Acharya-Tulsi/dp/8124601234"
      }
    ]
  },
  {
    title: "Modern Relevance",
    description: "The contemporary significance and applications of Ahimsa.",
    keyPoints: [
      "Global Peace",
      "Environmental Protection",
      "Social Justice",
      "Animal Rights",
      "Sustainable Living",
      "Ethical Business",
      "Personal Growth",
      "World Harmony"
    ],
    historicalRefs: [
      {
        text: "Ahimsa's principles align with modern environmental and peace movements.",
        source: "Contemporary Studies"
      },
      {
        text: "Non-violence remains relevant in addressing current global challenges.",
        source: "Modern Research"
      }
    ],
    significance: "Ahimsa offers solutions to contemporary challenges and promotes global harmony.",
    elements: [
      "Peace initiatives",
      "Environmental care",
      "Social activism",
      "Animal welfare",
      "Sustainable practices",
      "Ethical commerce",
      "Personal development",
      "Global harmony"
    ],
    practices: [
      "Peace advocacy",
      "Green living",
      "Social service",
      "Animal protection",
      "Sustainable choices",
      "Ethical business",
      "Self-improvement",
      "Global cooperation"
    ],
    recommendedReading: [
      {
        title: "Ahimsa in the Modern World",
        author: "Samani Charitra Prajna",
        description: "Contemporary applications of non-violence",
        amazonLink: "https://www.amazon.com/Ahimsa-Modern-World-Samani-Prajna/dp/8124605678"
      }
    ]
  }
]

export default function AhimsaPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Ahimsa and Non-Violence</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the fundamental Jain principle of Ahimsa (non-violence) and its profound implications for ethical living, spiritual development, and universal compassion.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="core" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="core">Core Principles</TabsTrigger>
          <TabsTrigger value="practical">Practical Application</TabsTrigger>
          <TabsTrigger value="spiritual">Spiritual Dimensions</TabsTrigger>
          <TabsTrigger value="modern">Modern Relevance</TabsTrigger>
        </TabsList>

        {ahimsaContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({core: true, practical: true, spiritual: true, modern: true})[index]}>
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
              title: "Karma and Liberation",
              href: "/religion/jainism/theology/karma"
            },
            {
              title: "Five Great Vows",
              href: "/religion/jainism/theology/vows"
            },
            {
              title: "Jiva and Ajiva",
              href: "/religion/jainism/theology/jiva"
            }
          ]}
        />
      </div>
    </div>
  )
} 