import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Ritual | Shinto Theology",
  description: "Explore Shinto ritual practices, their theological significance, and their role in maintaining harmony between humans and kami.",
  keywords: "Shinto ritual, matsuri, harae, misogi, norito, kagura, shinsen, tamagushi, goshintai, saishi, purification rites, offerings, festival ceremonies"
}

interface RitualContent {
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

const ritualContent: RitualContent[] = [
  {
    title: "Foundations of Ritual Practice",
    description: "Understanding the fundamental principles and purposes of Shinto ritual, including purification, offering, and communion with kami.",
    keyPoints: [
      "Concept of ritual purity",
      "Role of offerings and reciprocity",
      "Importance of proper procedure",
      "Seasonal ritual cycles",
      "Daily ritual observances",
      "Relationship to kami",
      "Community participation",
      "Ritual space and time"
    ],
    historicalRefs: [
      {
        text: "Ritual practice maintains the harmony between human and divine realms.",
        source: "Traditional Shinto teachings"
      },
      {
        text: "Through proper ritual, humans can communicate with and receive blessings from the kami.",
        source: "Ancient shrine traditions"
      }
    ],
    significance: "Ritual forms the core of Shinto practice, providing structured means for maintaining relationships between humans and kami.",
    elements: [
      "Purification implements",
      "Offering vessels",
      "Ritual clothing",
      "Sacred texts (norito)",
      "Musical instruments",
      "Ceremonial tools",
      "Sacred spaces",
      "Ritual timing"
    ],
    practices: [
      "Daily purification",
      "Morning offerings",
      "Prayer recitation",
      "Ritual hand washing",
      "Sacred music",
      "Ceremonial dance",
      "Offering preparation",
      "Ritual procession"
    ],
    recommendedReading: [
      {
        title: "Shinto: The Kami Way",
        author: "Sokyo Ono",
        description: "Comprehensive guide to Shinto ritual practice and theology",
        amazonLink: "https://www.amazon.com/Shinto-Kami-Way-Sokyo-Ono/dp/0804835573"
      }
    ]
  },
  {
    title: "Types of Rituals",
    description: "Exploration of various categories of Shinto rituals, from daily observances to major festivals and life cycle ceremonies.",
    keyPoints: [
      "Purification rituals (harae)",
      "Offering ceremonies (shinsen)",
      "Festival rituals (matsuri)",
      "Life cycle rituals (kanreki)",
      "Agricultural rituals",
      "Imperial rituals",
      "Household rituals",
      "Community ceremonies"
    ],
    historicalRefs: [
      {
        text: "Different types of rituals developed to address various aspects of life and community needs.",
        source: "Historical shrine records"
      },
      {
        text: "The pattern of ritual observance follows natural and agricultural cycles.",
        source: "Traditional ritual calendars"
      }
    ],
    significance: "The variety of ritual types ensures comprehensive coverage of all aspects of life requiring divine blessing and protection.",
    elements: [
      "Purification materials",
      "Festival equipment",
      "Ceremonial vessels",
      "Ritual clothing",
      "Sacred implements",
      "Musical instruments",
      "Decorative elements",
      "Ritual spaces"
    ],
    practices: [
      "Water purification",
      "Salt purification",
      "Food offerings",
      "Sacred dance",
      "Ritual music",
      "Processions",
      "Prayer recitation",
      "Communal feasting"
    ],
    recommendedReading: [
      {
        title: "Ritual and Its Consequences",
        author: "Adam B. Seligman",
        description: "Analysis of ritual practice in religious traditions including Shinto",
        amazonLink: "https://www.amazon.com/Ritual-Its-Consequences-Limits-Sincerity/dp/0195336011"
      }
    ]
  },
  {
    title: "Ritual Specialists and Roles",
    description: "Understanding the roles and responsibilities of ritual specialists in Shinto practice, including priests, assistants, and community participants.",
    keyPoints: [
      "Priestly hierarchy",
      "Training and qualification",
      "Ritual responsibilities",
      "Community leadership",
      "Specialist knowledge",
      "Gender roles",
      "Hereditary positions",
      "Modern adaptations"
    ],
    historicalRefs: [
      {
        text: "The role of ritual specialists evolved from clan-based to professional priesthood.",
        source: "Historical shrine documents"
      },
      {
        text: "Proper ritual requires both knowledge and spiritual preparation.",
        source: "Priestly training manuals"
      }
    ],
    significance: "Ritual specialists ensure the proper maintenance of sacred traditions and relationships with kami.",
    elements: [
      "Priestly vestments",
      "Ritual implements",
      "Sacred texts",
      "Training materials",
      "Ceremonial positions",
      "Administrative roles",
      "Community connections",
      "Educational resources"
    ],
    practices: [
      "Daily shrine duties",
      "Ritual preparation",
      "Ceremony leadership",
      "Community guidance",
      "Training apprentices",
      "Sacred text study",
      "Ritual innovation",
      "Public education"
    ],
    recommendedReading: [
      {
        title: "Shinto Priesthood",
        author: "Rosemarie Bernard",
        description: "Study of the role and training of Shinto priests",
        amazonLink: "https://www.amazon.com/Shinto-Priesthood-Religious-Studies-Monographs/dp/0824851972"
      }
    ]
  },
  {
    title: "Contemporary Ritual Practice",
    description: "Examination of how Shinto ritual practices adapt to modern contexts while maintaining traditional significance.",
    keyPoints: [
      "Modern adaptations",
      "Urban practice",
      "Technology integration",
      "Global influence",
      "Environmental concerns",
      "Cultural preservation",
      "Educational aspects",
      "Community engagement"
    ],
    historicalRefs: [
      {
        text: "Ritual practice adapts to contemporary needs while maintaining essential principles.",
        source: "Modern Shinto studies"
      },
      {
        text: "Technology and modern life create new contexts for ritual observance.",
        source: "Contemporary shrine practices"
      }
    ],
    significance: "Contemporary ritual practice bridges traditional meanings with modern needs and understanding.",
    elements: [
      "Modern implements",
      "Digital resources",
      "Urban spaces",
      "Educational materials",
      "Environmental focus",
      "Global connections",
      "Cultural programs",
      "Community centers"
    ],
    practices: [
      "Simplified rituals",
      "Online participation",
      "Environmental rites",
      "Cultural education",
      "Community events",
      "Global networking",
      "Youth engagement",
      "Social media presence"
    ],
    recommendedReading: [
      {
        title: "Contemporary Shinto Ritual",
        author: "Michael Pye",
        description: "Analysis of modern Shinto ritual practice and adaptation",
        amazonLink: "https://www.amazon.com/Contemporary-Shinto-Practice-Michael-Pye/dp/1845539249"
      }
    ]
  }
]

export default function RitualPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Ritual in Shinto</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore Shinto ritual practices, their theological significance, and their role in maintaining harmony between humans and kami through structured ceremonial activities.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="foundations" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="foundations">Foundations</TabsTrigger>
          <TabsTrigger value="types">Types</TabsTrigger>
          <TabsTrigger value="specialists">Specialists</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        {ritualContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({foundations: true, types: true, specialists: true, contemporary: true})[index]}>
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