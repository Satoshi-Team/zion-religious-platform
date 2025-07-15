import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Kami | Shinto Theology",
  description: "Explore the concept of Kami in Shinto theology, including their nature, types, relationships with humans, and role in Japanese spiritual life.",
  keywords: "Kami, Shinto gods, Japanese deities, Shinto theology, nature spirits, ancestral spirits, Amaterasu, Inari, Tenjin, Shinto worship, matsuri, yorishiro"
}

interface KamiContent {
  title: string
  description: string
  keyPoints: string[]
  historicalRefs: Array<{ text: string; source: string }>
  significance: string
  manifestations: string[]
  practices: string[]
  recommendedReading?: Array<{
    title: string
    author: string
    description: string
    amazonLink: string
  }>
}

const kamiContent: KamiContent[] = [
  {
    title: "Nature and Essence of Kami",
    description: "Understanding the fundamental nature of Kami as sacred forces or spirits in Shinto theology, encompassing natural phenomena, ancestral spirits, and deified historical figures.",
    keyPoints: [
      "Multiple meanings and manifestations of Kami",
      "Relationship between Kami and natural phenomena",
      "Concept of sacred power (tama)",
      "Interconnection between Kami and human world",
      "Role of Kami in maintaining cosmic order",
      "Dual aspects of blessing and curse",
      "Concept of many myriads of Kami",
      "Hierarchy and relationships among Kami"
    ],
    historicalRefs: [
      {
        text: "The term Kami refers to the divinity or sacred essence in the phenomena of nature, human beings, and ancestral spirits.",
        source: "Motoori Norinaga, 18th century scholar"
      },
      {
        text: "Everything that inspires awe and wonder can be considered Kami.",
        source: "Kojiki, 8th century text"
      }
    ],
    significance: "The concept of Kami forms the foundation of Shinto theology and Japanese spiritual understanding, shaping the relationship between humans, nature, and the divine.",
    manifestations: [
      "Natural phenomena (mountains, trees, rivers)",
      "Celestial bodies (sun, moon, stars)",
      "Weather phenomena (rain, wind, thunder)",
      "Ancestral spirits",
      "Deified historical figures",
      "Guardian deities of places",
      "Patron deities of professions",
      "Household protective spirits"
    ],
    practices: [
      "Daily offerings (shinsen)",
      "Ritual purification (misogi, harai)",
      "Festival celebrations (matsuri)",
      "Shrine visitation (sanpai)",
      "Home altar maintenance (kamidana)",
      "Seasonal observances",
      "Prayer and meditation",
      "Community ceremonies"
    ],
    recommendedReading: [
      {
        title: "Shinto: The Way of the Kami",
        author: "John K. Nelson",
        description: "Comprehensive study of Kami in Shinto theology and practice",
        amazonLink: "https://www.amazon.com/Shinto-Way-Kami-John-Nelson/dp/0824851722"
      }
    ]
  },
  {
    title: "Major Kami and Their Roles",
    description: "Exploration of significant Kami in Shinto tradition, their mythological roles, and their continued importance in contemporary practice.",
    keyPoints: [
      "Amaterasu as the sun goddess and imperial ancestor",
      "Inari as patron of agriculture and prosperity",
      "Tenjin as deity of scholarship and learning",
      "Hachiman as protector of warriors and nation",
      "Susanoo as deity of storms and sea",
      "Benzaiten as goddess of everything that flows",
      "Local and regional Kami variations",
      "Syncretic influences on Kami worship"
    ],
    historicalRefs: [
      {
        text: "Amaterasu emerged from her cave, bringing light back to the world.",
        source: "Nihon Shoki, 720 CE"
      },
      {
        text: "The imperial line descends unbroken from Amaterasu Omikami.",
        source: "Traditional imperial mythology"
      }
    ],
    significance: "Major Kami represent different aspects of life, nature, and society, providing spiritual focus and protection for various human activities and aspirations.",
    manifestations: [
      "Imperial ancestral spirits",
      "Agricultural deities",
      "Mountain gods",
      "Sea deities",
      "Guardian spirits",
      "Household protectors",
      "Professional patron deities",
      "Local tutelary deities"
    ],
    practices: [
      "Specific shrine rituals",
      "Seasonal festivals",
      "Professional devotions",
      "Agricultural ceremonies",
      "Imperial ceremonies",
      "Local customs",
      "Pilgrimage traditions",
      "Protective rituals"
    ],
    recommendedReading: [
      {
        title: "A Year in the Life of a Shinto Shrine",
        author: "John K. Nelson",
        description: "Detailed examination of Shinto shrine practices and Kami worship",
        amazonLink: "https://www.amazon.com/Year-Life-Shinto-Shrine/dp/0295975008"
      }
    ]
  },
  {
    title: "Human-Kami Relationships",
    description: "Understanding the dynamic relationship between humans and Kami, including worship practices, ritual obligations, and spiritual exchange.",
    keyPoints: [
      "Concept of reciprocal relationships",
      "Role of ritual offerings",
      "Importance of purification",
      "Festival participation",
      "Community obligations",
      "Personal devotion practices",
      "Mediation through priests",
      "Household worship traditions"
    ],
    historicalRefs: [
      {
        text: "Humans and Kami exist in a relationship of mutual dependence and benefit.",
        source: "Traditional Shinto teaching"
      },
      {
        text: "Through proper ritual and sincere heart, humans can communicate with Kami.",
        source: "Shinto priestly traditions"
      }
    ],
    significance: "The relationship between humans and Kami forms the basis of Shinto practice and Japanese cultural understanding of the sacred.",
    manifestations: [
      "Shrine architecture",
      "Ritual implements",
      "Sacred spaces",
      "Festival structures",
      "Household altars",
      "Sacred objects",
      "Natural yorishiro",
      "Human mediators"
    ],
    practices: [
      "Daily offerings",
      "Festival participation",
      "Shrine visits",
      "Life cycle rituals",
      "Seasonal observances",
      "Community ceremonies",
      "Personal devotions",
      "Purification rites"
    ],
    recommendedReading: [
      {
        title: "Shinto: Origins, Rituals, Festivals, Spirits, Sacred Places",
        author: "C. Scott Littleton",
        description: "Comprehensive overview of Shinto practice and Kami relationships",
        amazonLink: "https://www.amazon.com/Shinto-Origins-Rituals-Festivals-Spirits/dp/0195218868"
      }
    ]
  },
  {
    title: "Contemporary Understanding",
    description: "Modern interpretations and practices related to Kami in contemporary Japanese society and global Shinto communities.",
    keyPoints: [
      "Modern interpretations of Kami",
      "Secular and religious perspectives",
      "Environmental connections",
      "Cultural preservation",
      "Global adaptations",
      "Interfaith dialogue",
      "Academic studies",
      "New religious movements"
    ],
    historicalRefs: [
      {
        text: "Kami concept adapts to contemporary environmental and social concerns.",
        source: "Modern Shinto scholarship"
      },
      {
        text: "Shinto's understanding of Kami contributes to ecological awareness.",
        source: "Contemporary religious studies"
      }
    ],
    significance: "Contemporary understanding of Kami continues to evolve while maintaining connection to traditional beliefs and practices.",
    manifestations: [
      "Environmental movements",
      "Cultural preservation",
      "Academic research",
      "Interfaith dialogue",
      "Global shrines",
      "Modern festivals",
      "Digital presence",
      "Educational programs"
    ],
    practices: [
      "Modern shrine visits",
      "Environmental protection",
      "Cultural education",
      "International exchange",
      "Academic study",
      "Digital devotions",
      "Community outreach",
      "Interfaith activities"
    ],
    recommendedReading: [
      {
        title: "Contemporary Shinto: A Living Spirituality",
        author: "Michael Pye",
        description: "Analysis of modern Shinto practice and Kami worship",
        amazonLink: "https://www.amazon.com/Contemporary-Shinto-Spirituality-Michael-Pye/dp/1845539249"
      }
    ]
  }
]

export default function KamiPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Kami in Shinto Theology</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the concept of Kami in Shinto theology, including their nature, manifestations, relationships with humans, and role in Japanese spiritual life.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="nature" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="nature">Nature & Essence</TabsTrigger>
          <TabsTrigger value="major">Major Kami</TabsTrigger>
          <TabsTrigger value="relationships">Human Relations</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        {kamiContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({nature: true, major: true, relationships: true, contemporary: true})[index]}>
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
                  <h3 className="font-semibold mb-3">Manifestations</h3>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    {content.manifestations.map((manifestation, i) => (
                      <li key={i}>{manifestation}</li>
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
              title: "Sacred Space",
              href: "/religion/shinto/theology/sacred-space"
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