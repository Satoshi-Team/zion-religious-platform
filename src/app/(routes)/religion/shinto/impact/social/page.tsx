import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Social Impact | Shinto Cultural Impact",
  description: "Explore Shinto's profound influence on Japanese society, from traditional social structures to modern community organization, examining its role in shaping values, relationships, and social practices.",
  keywords: "Shinto society, Japanese values, social structure, community organization, ritual practices, social relationships, modern society, cultural identity, social harmony"
}

interface SocialContent {
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

const socialContent: SocialContent[] = [
  {
    title: "Traditional Social Structures",
    description: "Examining how Shinto shaped traditional Japanese social organization and hierarchies.",
    keyPoints: [
      "Family systems",
      "Community organization",
      "Social hierarchies",
      "Ritual roles",
      "Gender relations",
      "Age structures",
      "Local governance",
      "Kinship networks"
    ],
    historicalRefs: [
      {
        text: "Establishment of ujiko (shrine parish) system in early Japanese communities.",
        source: "Social History Records"
      },
      {
        text: "Development of miyaza (shrine guilds) during the medieval period.",
        source: "Community Organization Documents"
      }
    ],
    significance: "Shinto principles fundamentally shaped Japanese social organization and community structures.",
    elements: [
      "Family units",
      "Community groups",
      "Social roles",
      "Ritual positions",
      "Status systems",
      "Local organizations",
      "Leadership structures",
      "Kinship bonds"
    ],
    practices: [
      "Community rituals",
      "Family ceremonies",
      "Social gatherings",
      "Role assignments",
      "Status maintenance",
      "Group decision-making",
      "Conflict resolution",
      "Ritual participation"
    ],
    recommendedReading: [
      {
        title: "The Social Order of Japan",
        author: "John W. Bennett",
        description: "Analysis of traditional Japanese social structures",
        amazonLink: "https://www.amazon.com/Traditional-Japanese-Social-Organization-Studies/dp/0804712794"
      }
    ]
  },
  {
    title: "Values and Ethics",
    description: "Analyzing Shinto's influence on Japanese moral values and ethical principles.",
    keyPoints: [
      "Moral principles",
      "Ethical codes",
      "Social harmony",
      "Natural respect",
      "Ritual purity",
      "Community duty",
      "Personal virtue",
      "Collective responsibility"
    ],
    historicalRefs: [
      {
        text: "Codification of Shinto ethical principles in the Edo period.",
        source: "Ethical Texts Archive"
      },
      {
        text: "Integration of Shinto values in the Imperial Rescript on Education (1890).",
        source: "Educational Policy Records"
      }
    ],
    significance: "Shinto values continue to influence Japanese ethical thinking and social behavior.",
    elements: [
      "Moral codes",
      "Ethical guidelines",
      "Value systems",
      "Social norms",
      "Behavioral standards",
      "Cultural ideals",
      "Spiritual principles",
      "Community rules"
    ],
    practices: [
      "Moral education",
      "Ethical training",
      "Value transmission",
      "Social guidance",
      "Character building",
      "Community service",
      "Ritual observance",
      "Cultural preservation"
    ],
    recommendedReading: [
      {
        title: "Japanese Moral Values",
        author: "Robert J. Smith",
        description: "Study of Japanese ethical traditions",
        amazonLink: "https://www.amazon.com/Japanese-Society-Tradition-Social-Order/dp/0521021219"
      }
    ]
  },
  {
    title: "Community Relations",
    description: "Understanding Shinto's role in shaping community relationships and social bonds.",
    keyPoints: [
      "Neighborhood ties",
      "Group dynamics",
      "Social networks",
      "Mutual support",
      "Collective activities",
      "Intergenerational bonds",
      "Local identity",
      "Community spirit"
    ],
    historicalRefs: [
      {
        text: "Formation of chonaikai (neighborhood associations) with shrine connections.",
        source: "Community Records"
      },
      {
        text: "Development of kō (religious mutual aid societies) in local communities.",
        source: "Social Organization Archives"
      }
    ],
    significance: "Shinto practices foster strong community bonds and social cohesion.",
    elements: [
      "Social networks",
      "Support systems",
      "Group activities",
      "Community spaces",
      "Shared resources",
      "Cultural events",
      "Local traditions",
      "Mutual aid"
    ],
    practices: [
      "Community meetings",
      "Group celebrations",
      "Mutual assistance",
      "Cultural activities",
      "Social networking",
      "Local cooperation",
      "Festival organization",
      "Collective worship"
    ],
    recommendedReading: [
      {
        title: "Community and Society in Japan",
        author: "Theodore C. Bestor",
        description: "Analysis of Japanese community structures",
        amazonLink: "https://www.amazon.com/Neighborhood-Tokyo-Studies-East-Asian/dp/0804714894"
      }
    ]
  },
  {
    title: "Modern Adaptations",
    description: "Exploring how Shinto social principles adapt to contemporary Japanese society.",
    keyPoints: [
      "Urban communities",
      "Digital networks",
      "Social media",
      "Modern rituals",
      "Youth engagement",
      "Global connections",
      "Cultural preservation",
      "Social innovation"
    ],
    historicalRefs: [
      {
        text: "Adaptation of shrine communities to urban environments post-1960s.",
        source: "Urban Development Records"
      },
      {
        text: "Integration of digital technologies in community organization since 2000.",
        source: "Contemporary Social Studies"
      }
    ],
    significance: "Modern adaptations demonstrate Shinto's continuing relevance in contemporary social life.",
    elements: [
      "Digital platforms",
      "Urban networks",
      "Modern facilities",
      "Youth programs",
      "Global connections",
      "Social media",
      "Cultural centers",
      "Community apps"
    ],
    practices: [
      "Online networking",
      "Digital communication",
      "Urban gatherings",
      "Youth activities",
      "Global outreach",
      "Cultural education",
      "Social planning",
      "Community development"
    ],
    recommendedReading: [
      {
        title: "Contemporary Japanese Society",
        author: "Yoshio Sugimoto",
        description: "Analysis of modern Japanese social structures",
        amazonLink: "https://www.amazon.com/Introduction-Japanese-Society-Yoshio-Sugimoto/dp/1316648346"
      }
    ]
  }
]

export default function SocialImpactPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Shinto's Social Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore Shinto's profound influence on Japanese society, examining its role in shaping social structures, values, community relationships, and modern adaptations.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="traditional" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="traditional">Traditional</TabsTrigger>
          <TabsTrigger value="values">Values</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="modern">Modern</TabsTrigger>
        </TabsList>

        {socialContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({traditional: true, values: true, community: true, modern: true})[index]}>
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
              title: "Literature Impact",
              href: "/religion/shinto/impact/literature"
            }
          ]}
        />
      </div>
    </div>
  )
} 