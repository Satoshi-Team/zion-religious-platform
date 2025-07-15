import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Sacred Space | Shinto Theology",
  description: "Explore the concept of sacred space in Shinto theology, including shrine architecture, sacred locations, and the relationship between physical and spiritual realms.",
  keywords: "Shinto shrine, jinja, torii gate, sacred space, shrine architecture, yorishiro, shimenawa, sandō, haiden, honden, tamagaki, sacred mountain, sacred grove, kami dwelling"
}

interface SacredSpaceContent {
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

const sacredSpaceContent: SacredSpaceContent[] = [
  {
    title: "Fundamentals of Sacred Space",
    description: "Understanding the essential concepts and principles of sacred space in Shinto tradition, including the demarcation between sacred and ordinary realms.",
    keyPoints: [
      "Concept of sacred vs. profane space",
      "Role of natural features in sacred sites",
      "Significance of boundaries and thresholds",
      "Relationship between space and kami",
      "Purification of sacred areas",
      "Hierarchy of sacred spaces",
      "Seasonal and temporal aspects",
      "Community relationship to sacred space"
    ],
    historicalRefs: [
      {
        text: "Sacred space in Shinto is where the kami descend to meet with humans.",
        source: "Traditional Shinto teaching"
      },
      {
        text: "The distinction between sacred and profane is marked by visible boundaries.",
        source: "Ancient shrine practices"
      }
    ],
    significance: "Sacred space in Shinto represents the intersection between the mundane and divine worlds, providing locations for interaction between humans and kami.",
    elements: [
      "Natural formations (mountains, groves)",
      "Constructed boundaries (torii gates)",
      "Purification areas (temizuya)",
      "Offering halls (haiden)",
      "Inner sanctuaries (honden)",
      "Sacred ropes (shimenawa)",
      "Ritual pathways (sandō)",
      "Protective fences (tamagaki)"
    ],
    practices: [
      "Ritual purification before entry",
      "Proper approach procedures",
      "Offering presentations",
      "Prayer protocols",
      "Festival preparations",
      "Space maintenance",
      "Boundary respect",
      "Seasonal observances"
    ],
    recommendedReading: [
      {
        title: "The Essence of Shinto: Japan's Spiritual Heart",
        author: "Motohisa Yamakage",
        description: "Comprehensive exploration of Shinto sacred space and ritual",
        amazonLink: "https://www.amazon.com/Essence-Shinto-Japans-Spiritual-Heart/dp/1568364377"
      }
    ]
  },
  {
    title: "Shrine Architecture and Design",
    description: "Examination of traditional Shinto shrine architecture, its elements, symbolism, and relationship to sacred space concepts.",
    keyPoints: [
      "Evolution of shrine architecture",
      "Symbolic meanings of structures",
      "Regional variations in design",
      "Influence of natural setting",
      "Essential architectural elements",
      "Space organization principles",
      "Construction traditions",
      "Modern adaptations"
    ],
    historicalRefs: [
      {
        text: "Shrine architecture evolved from temporary structures to permanent sacred spaces.",
        source: "Archaeological records"
      },
      {
        text: "The arrangement of shrine buildings reflects the path from mundane to sacred.",
        source: "Traditional architectural principles"
      }
    ],
    significance: "Shrine architecture embodies Shinto theological principles and facilitates proper interaction between humans and kami.",
    elements: [
      "Torii gates",
      "Worship halls (haiden)",
      "Main sanctuaries (honden)",
      "Purification fountains",
      "Sacred storehouses",
      "Ceremonial stages",
      "Priest quarters",
      "Administrative buildings"
    ],
    practices: [
      "Traditional construction methods",
      "Regular maintenance rituals",
      "Periodic rebuilding",
      "Space purification",
      "Architectural preservation",
      "Modern adaptations",
      "Environmental integration",
      "Community involvement"
    ],
    recommendedReading: [
      {
        title: "Understanding Japanese Architecture",
        author: "Mira Locher",
        description: "Detailed study of traditional Japanese sacred architecture",
        amazonLink: "https://www.amazon.com/Understanding-Japanese-Architecture-Mira-Locher/dp/4805312327"
      }
    ]
  },
  {
    title: "Natural Sacred Spaces",
    description: "Understanding the role of natural features and landscapes in Shinto sacred space, including mountains, groves, and water sources.",
    keyPoints: [
      "Sacred mountain traditions",
      "Holy grove preservation",
      "Water source sanctity",
      "Natural boundary markers",
      "Seasonal sacred sites",
      "Landscape integration",
      "Environmental protection",
      "Natural power spots"
    ],
    historicalRefs: [
      {
        text: "Mountains have been viewed as sacred dwelling places of kami since ancient times.",
        source: "Early Shinto texts"
      },
      {
        text: "Sacred groves represent the original state of harmony between humans and nature.",
        source: "Traditional ecological knowledge"
      }
    ],
    significance: "Natural sacred spaces form the foundation of Shinto understanding of divine presence in the physical world.",
    elements: [
      "Sacred mountains",
      "Ancient trees",
      "Sacred groves",
      "Waterfalls",
      "Rock formations",
      "Natural caves",
      "Sacred islands",
      "Holy springs"
    ],
    practices: [
      "Mountain pilgrimages",
      "Grove maintenance",
      "Water source protection",
      "Natural area purification",
      "Seasonal observations",
      "Environmental stewardship",
      "Traditional knowledge transmission",
      "Community conservation"
    ],
    recommendedReading: [
      {
        title: "Sacred Mountains of Japan",
        author: "Byron Earhart",
        description: "Study of Japan's sacred mountains and their religious significance",
        amazonLink: "https://www.amazon.com/Sacred-Mountains-Japan-Byron-Earhart/dp/0295984392"
      }
    ]
  },
  {
    title: "Contemporary Sacred Space",
    description: "Exploration of modern interpretations and adaptations of Shinto sacred space in contemporary society.",
    keyPoints: [
      "Urban shrine adaptations",
      "Modern space constraints",
      "Digital sacred spaces",
      "Environmental challenges",
      "Cultural preservation",
      "Global influences",
      "Community engagement",
      "Future developments"
    ],
    historicalRefs: [
      {
        text: "Modern shrines adapt while maintaining essential sacred principles.",
        source: "Contemporary Shinto studies"
      },
      {
        text: "Urban development creates new challenges for sacred space preservation.",
        source: "Modern urban planning research"
      }
    ],
    significance: "Contemporary sacred spaces continue Shinto traditions while adapting to modern needs and challenges.",
    elements: [
      "Urban shrines",
      "Modern materials",
      "Digital interfaces",
      "Environmental features",
      "Community spaces",
      "Educational facilities",
      "Cultural centers",
      "Global connections"
    ],
    practices: [
      "Urban space adaptation",
      "Modern maintenance",
      "Digital engagement",
      "Environmental programs",
      "Community activities",
      "Educational outreach",
      "Cultural exchange",
      "Sustainable practices"
    ],
    recommendedReading: [
      {
        title: "Shinto in the Twenty-First Century",
        author: "John Breen",
        description: "Analysis of contemporary Shinto practice and sacred space",
        amazonLink: "https://www.amazon.com/Shinto-Twenty-First-Century-Japanese/dp/1845539249"
      }
    ]
  }
]

export default function SacredSpacePage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Sacred Space in Shinto</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the concept of sacred space in Shinto theology, including shrine architecture, natural sacred locations, and the relationship between physical and spiritual realms.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="fundamentals" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
          <TabsTrigger value="architecture">Architecture</TabsTrigger>
          <TabsTrigger value="natural">Natural Spaces</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        {sacredSpaceContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({fundamentals: true, architecture: true, natural: true, contemporary: true})[index]}>
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
              title: "Kami",
              href: "/religion/shinto/theology/kami"
            },
            {
              title: "Rituals",
              href: "/religion/shinto/practices/rituals"
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