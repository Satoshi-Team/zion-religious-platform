import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Festivals Impact | Shinto Cultural Impact",
  description: "Explore the rich tradition of Shinto festivals (matsuri), from ancient ritual ceremonies to modern celebrations, examining their cultural significance and community impact.",
  keywords: "Shinto festivals, matsuri, Japanese festivals, ritual ceremonies, community celebrations, seasonal festivals, shrine festivals, festival traditions, cultural heritage"
}

interface FestivalContent {
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

const festivalContent: FestivalContent[] = [
  {
    title: "Traditional Festival Forms",
    description: "Examining the foundational structures and types of Shinto festivals throughout Japanese history.",
    keyPoints: [
      "Annual shrine festivals",
      "Seasonal celebrations",
      "Agricultural rituals",
      "Imperial ceremonies",
      "Regional variations",
      "Ritual processions",
      "Festival hierarchies",
      "Community roles"
    ],
    historicalRefs: [
      {
        text: "First recorded Shinto festival at Ise Shrine in 632 CE.",
        source: "Ancient Festival Records"
      },
      {
        text: "Establishment of the ritual calendar during the Heian period.",
        source: "Imperial Court Documents"
      }
    ],
    significance: "Traditional festivals established core patterns of Japanese communal celebration and ritual practice.",
    elements: [
      "Sacred processions",
      "Ritual offerings",
      "Festival music",
      "Traditional costumes",
      "Sacred objects",
      "Festival foods",
      "Ceremonial spaces",
      "Community roles"
    ],
    practices: [
      "Ritual purification",
      "Sacred processions",
      "Offering ceremonies",
      "Festival preparation",
      "Community organization",
      "Traditional performances",
      "Food preparation",
      "Prayer ceremonies"
    ],
    recommendedReading: [
      {
        title: "Matsuri: Japanese Festival Arts",
        author: "Gloria Granz Gonick",
        description: "Comprehensive study of traditional Japanese festivals",
        amazonLink: "https://www.amazon.com/Matsuri-Japanese-Festival-Arts-UCLA/dp/0930741749"
      }
    ]
  },
  {
    title: "Community and Social Impact",
    description: "Analyzing how Shinto festivals shape community identity and social bonds.",
    keyPoints: [
      "Community organization",
      "Social hierarchies",
      "Intergenerational bonds",
      "Cultural transmission",
      "Local identity",
      "Economic impact",
      "Social networking",
      "Collective memory"
    ],
    historicalRefs: [
      {
        text: "Evolution of festival organizations during the Edo period.",
        source: "Social History Archives"
      },
      {
        text: "Documentation of festival communities' role in local governance.",
        source: "Community Records"
      }
    ],
    significance: "Festivals serve as crucial mechanisms for community cohesion and cultural continuity.",
    elements: [
      "Community groups",
      "Festival committees",
      "Youth organizations",
      "Local businesses",
      "Volunteer networks",
      "Family traditions",
      "Social structures",
      "Cultural education"
    ],
    practices: [
      "Community planning",
      "Role assignment",
      "Skills transmission",
      "Fund raising",
      "Network building",
      "Youth training",
      "Elder consultation",
      "Cultural preservation"
    ],
    recommendedReading: [
      {
        title: "Festival and Society in Japan",
        author: "Michael Ashkenazi",
        description: "Analysis of festivals' social impact",
        amazonLink: "https://www.amazon.com/Matsuri-Feasts-Japanese-Religious-Tradition/dp/0710304425"
      }
    ]
  },
  {
    title: "Ritual and Spiritual Elements",
    description: "Understanding the religious and spiritual dimensions of Shinto festivals.",
    keyPoints: [
      "Divine communion",
      "Ritual purification",
      "Spiritual renewal",
      "Sacred time",
      "Divine presence",
      "Blessing ceremonies",
      "Prayer traditions",
      "Spiritual training"
    ],
    historicalRefs: [
      {
        text: "Codification of festival rituals in the Engishiki (927 CE).",
        source: "Religious Texts"
      },
      {
        text: "Development of festival purification rites during the Kamakura period.",
        source: "Ritual Documents"
      }
    ],
    significance: "Festival rituals maintain spiritual connections between communities and their guardian deities.",
    elements: [
      "Sacred objects",
      "Ritual spaces",
      "Prayer formats",
      "Purification items",
      "Offering types",
      "Ceremonial tools",
      "Spiritual symbols",
      "Divine messages"
    ],
    practices: [
      "Ritual cleansing",
      "Sacred offerings",
      "Prayer sessions",
      "Spirit possession",
      "Blessing rituals",
      "Divination rites",
      "Meditation practices",
      "Spiritual training"
    ],
    recommendedReading: [
      {
        title: "Ritual Practice in Japan",
        author: "Brian Bocking",
        description: "Study of Japanese religious rituals",
        amazonLink: "https://www.amazon.com/Popular-Buddhist-Ritual-Contemporary-Japan/dp/0824851164"
      }
    ]
  },
  {
    title: "Contemporary Adaptations",
    description: "Exploring how Shinto festivals adapt to modern society while maintaining traditions.",
    keyPoints: [
      "Modern innovations",
      "Urban adaptations",
      "Tourism impact",
      "Digital elements",
      "Global influence",
      "Youth engagement",
      "Environmental awareness",
      "Cultural preservation"
    ],
    historicalRefs: [
      {
        text: "Integration of modern technology in festival organization since 1980s.",
        source: "Contemporary Festival Records"
      },
      {
        text: "Development of sustainable festival practices in the 21st century.",
        source: "Environmental Impact Studies"
      }
    ],
    significance: "Modern festivals demonstrate the adaptability of traditional practices to contemporary needs.",
    elements: [
      "Digital platforms",
      "Modern logistics",
      "Tourist facilities",
      "Environmental measures",
      "Safety systems",
      "Media coverage",
      "Social networks",
      "Educational programs"
    ],
    practices: [
      "Online coordination",
      "Sustainable planning",
      "Tourist management",
      "Safety protocols",
      "Media engagement",
      "Waste reduction",
      "Digital promotion",
      "Cultural education"
    ],
    recommendedReading: [
      {
        title: "Contemporary Japanese Festivals",
        author: "Jennifer Robertson",
        description: "Analysis of modern festival adaptations",
        amazonLink: "https://www.amazon.com/Japanese-Festival-Contemporary-Japan-Society/dp/0521529298"
      }
    ]
  }
]

export default function FestivalsImpactPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Shinto's Festival Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the rich tradition of Shinto festivals (matsuri), examining their historical development, community impact, spiritual significance, and modern adaptations.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="traditional" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="traditional">Traditional</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="ritual">Ritual</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        {festivalContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({traditional: true, community: true, ritual: true, contemporary: true})[index]}>
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
              title: "Social Impact",
              href: "/religion/shinto/impact/society"
            }
          ]}
        />
      </div>
    </div>
  )
} 