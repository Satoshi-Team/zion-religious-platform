import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Spiritual Practices | Rastafarian Theology",
  description: "Explore the spiritual practices in Rastafarianism, including meditation, prayer, rituals, and their significance in Rastafari belief.",
  keywords: "Rastafari Practices, Spiritual Rituals, Meditation, Prayer, Cultural Practices, Religious Ceremonies, Spiritual Development, Sacred Traditions"
}

interface PracticesContent {
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

const practicesContent: PracticesContent[] = [
  {
    title: "Meditation and Prayer",
    description: "The fundamental principles and values that shape spiritual practices in Rastafarian theology.",
    keyPoints: [
      "Divine Connection",
      "Spiritual Focus",
      "Inner Peace",
      "Mental Clarity",
      "Spiritual Guidance",
      "Personal Growth",
      "Divine Wisdom",
      "Spiritual Strength"
    ],
    historicalRefs: [
      {
        text: "Meditation and prayer connect believers with Jah.",
        source: "Rastafari Practice"
      },
      {
        text: "Spiritual practices guide personal development.",
        source: "Religious Studies"
      }
    ],
    significance: "Meditation and prayer represent essential practices for spiritual connection and development in Rastafarianism.",
    elements: [
      "Divine connection",
      "Spiritual focus",
      "Inner peace",
      "Mental clarity",
      "Spiritual guidance",
      "Personal growth",
      "Divine wisdom",
      "Spiritual strength"
    ],
    practices: [
      "Daily meditation",
      "Regular prayer",
      "Spiritual reflection",
      "Mental discipline",
      "Divine guidance",
      "Personal development",
      "Spiritual study",
      "Inner strength"
    ],
    recommendedReading: [
      {
        title: "Rastafari Spiritual Practice",
        author: "Leonard E. Barrett",
        description: "Analysis of Rastafari meditation and prayer",
        amazonLink: "https://www.amazon.com/Rastafari-Spiritual-Practice-Barrett/dp/0814316884"
      }
    ]
  },
  {
    title: "Ritual Ceremonies",
    description: "The development and influence of ritual ceremonies in Rastafarian practice.",
    keyPoints: [
      "Nyabinghi",
      "Groundation",
      "Reasoning",
      "Communal Worship",
      "Sacred Music",
      "Cultural Celebration",
      "Spiritual Unity",
      "Community Bonding"
    ],
    historicalRefs: [
      {
        text: "Ritual ceremonies strengthen spiritual community.",
        source: "Cultural Studies"
      },
      {
        text: "Traditional practices guide spiritual development.",
        source: "Religious Research"
      }
    ],
    significance: "Ritual ceremonies provide essential opportunities for communal worship and spiritual development.",
    elements: [
      "Nyabinghi gatherings",
      "Groundation ceremonies",
      "Reasoning sessions",
      "Communal worship",
      "Sacred music",
      "Cultural celebration",
      "Spiritual unity",
      "Community bonding"
    ],
    practices: [
      "Regular gatherings",
      "Ceremonial worship",
      "Group discussion",
      "Communal prayer",
      "Music performance",
      "Cultural events",
      "Spiritual fellowship",
      "Community building"
    ],
    recommendedReading: [
      {
        title: "Rastafari Rituals",
        author: "Ennis B. Edmonds",
        description: "Study of Rastafari ceremonial practices",
        amazonLink: "https://www.amazon.com/Rastafari-Rituals-Edmonds/dp/0814316884"
      }
    ]
  },
  {
    title: "Lifestyle Practices",
    description: "Traditional and modern approaches to understanding lifestyle practices in Rastafarianism.",
    keyPoints: [
      "Ital Living",
      "Natural Diet",
      "Herbal Medicine",
      "Physical Health",
      "Environmental Care",
      "Sustainable Living",
      "Cultural Identity",
      "Spiritual Discipline"
    ],
    historicalRefs: [
      {
        text: "Lifestyle practices reflect spiritual principles.",
        source: "Cultural Research"
      },
      {
        text: "Natural living supports spiritual development.",
        source: "Health Studies"
      }
    ],
    significance: "Lifestyle practices demonstrate the integration of spiritual principles into daily life.",
    elements: [
      "Ital diet",
      "Natural medicine",
      "Physical wellness",
      "Environmental care",
      "Sustainable practices",
      "Cultural expression",
      "Spiritual discipline",
      "Health consciousness"
    ],
    practices: [
      "Natural diet",
      "Herbal healing",
      "Physical exercise",
      "Environmental protection",
      "Sustainable living",
      "Cultural expression",
      "Spiritual discipline",
      "Health maintenance"
    ],
    recommendedReading: [
      {
        title: "Rastafari Lifestyle",
        author: "William David Spencer",
        description: "Analysis of Rastafari lifestyle practices",
        amazonLink: "https://www.amazon.com/Rastafari-Lifestyle-Spencer/dp/0814316884"
      }
    ]
  },
  {
    title: "Modern Adaptations",
    description: "Contemporary adaptations and applications of spiritual practices in modern Rastafari life.",
    keyPoints: [
      "Contemporary Worship",
      "Digital Community",
      "Modern Expression",
      "Global Connection",
      "Cultural Innovation",
      "Spiritual Technology",
      "Urban Practice",
      "Global Outreach"
    ],
    historicalRefs: [
      {
        text: "Traditional practices adapt to modern life.",
        source: "Contemporary Studies"
      },
      {
        text: "Modern technology enhances spiritual connection.",
        source: "Digital Research"
      }
    ],
    significance: "Modern adaptations demonstrate the continuing relevance of spiritual practices in contemporary society.",
    elements: [
      "Contemporary worship",
      "Digital community",
      "Modern expression",
      "Global connection",
      "Cultural innovation",
      "Spiritual technology",
      "Urban practice",
      "Global outreach"
    ],
    practices: [
      "Modern worship",
      "Digital engagement",
      "Contemporary expression",
      "Global networking",
      "Cultural programs",
      "Digital tools",
      "Urban gatherings",
      "Global initiatives"
    ],
    recommendedReading: [
      {
        title: "Modern Rastafari Practice",
        author: "Michael Barnett",
        description: "Study of contemporary spiritual practices",
        amazonLink: "https://www.amazon.com/Modern-Rastafari-Practice-Barnett/dp/0814316884"
      }
    ]
  }
]

export default function PracticesPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Spiritual Practices</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the spiritual practices in Rastafarianism, including meditation, prayer, rituals, and their significance in Rastafari belief.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="meditation" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="meditation">Meditation and Prayer</TabsTrigger>
          <TabsTrigger value="rituals">Ritual Ceremonies</TabsTrigger>
          <TabsTrigger value="lifestyle">Lifestyle Practices</TabsTrigger>
          <TabsTrigger value="modern">Modern Adaptations</TabsTrigger>
        </TabsList>

        {practicesContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({meditation: true, rituals: true, lifestyle: true, modern: true})[index]}>
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
              title: "Jah and Divinity",
              href: "/religion/rastafari/theology/jah"
            },
            {
              title: "African Heritage",
              href: "/religion/rastafari/theology/africa"
            },
            {
              title: "Babylon System",
              href: "/religion/rastafari/theology/babylon"
            }
          ]}
        />
      </div>
    </div>
  )
} 