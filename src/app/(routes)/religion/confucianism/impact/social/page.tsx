import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Social Structure | Confucian Cultural Impact",
  description: "Explore Confucianism's profound influence on social organization, family relationships, and community structures across East Asia and beyond.",
  keywords: "Confucian Society, Social Hierarchy, Family Values, Community Relations, Social Ethics, Cultural Norms, Social Harmony, Traditional Values"
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
    title: "Social Hierarchy",
    description: "The fundamental principles and values that shape Confucian approaches to social organization and relationships.",
    keyPoints: [
      "Five Relationships",
      "Social Order",
      "Role Ethics",
      "Status Distinctions",
      "Social Harmony",
      "Moral Authority",
      "Cultural Unity",
      "Social Stability"
    ],
    historicalRefs: [
      {
        text: "The five relationships establish proper social order.",
        source: "Mencius 3A.4"
      },
      {
        text: "Social harmony depends on proper role fulfillment.",
        source: "Analects 12.11"
      }
    ],
    significance: "Confucian social hierarchy emphasizes moral relationships and ethical responsibilities, shaping social structures across East Asia.",
    elements: [
      "Social roles",
      "Moral obligations",
      "Status relationships",
      "Social order",
      "Cultural values",
      "Community bonds",
      "Social norms",
      "Hierarchical principles"
    ],
    practices: [
      "Role fulfillment",
      "Social etiquette",
      "Community service",
      "Cultural rituals",
      "Social ceremonies",
      "Family obligations",
      "Social harmony",
      "Community activities"
    ],
    recommendedReading: [
      {
        title: "Confucian Role Ethics",
        author: "Henry Rosemont Jr.",
        description: "Analysis of Confucian social relationships",
        amazonLink: "https://www.amazon.com/Confucian-Role-Ethics-Henry-Rosemont/dp/0824839551"
      }
    ]
  },
  {
    title: "Family Structure",
    description: "The development and influence of Confucian family values and domestic relationships.",
    keyPoints: [
      "Filial Piety",
      "Family Harmony",
      "Ancestral Worship",
      "Marriage Customs",
      "Family Rituals",
      "Lineage System",
      "Family Education",
      "Domestic Ethics"
    ],
    historicalRefs: [
      {
        text: "Filial piety is the foundation of all virtues.",
        source: "Classic of Filial Piety"
      },
      {
        text: "Family harmony leads to social stability.",
        source: "Great Learning"
      }
    ],
    significance: "Confucian family structure established principles of filial piety and domestic harmony that continue to influence family life worldwide.",
    elements: [
      "Family relationships",
      "Domestic rituals",
      "Ancestral customs",
      "Marriage practices",
      "Family education",
      "Lineage traditions",
      "Domestic ethics",
      "Family ceremonies"
    ],
    practices: [
      "Family rituals",
      "Ancestral worship",
      "Marriage ceremonies",
      "Family education",
      "Lineage records",
      "Domestic harmony",
      "Family gatherings",
      "Cultural traditions"
    ],
    recommendedReading: [
      {
        title: "Confucian Family Values",
        author: "Patricia Buckley Ebrey",
        description: "Study of traditional Chinese family life",
        amazonLink: "https://www.amazon.com/Confucianism-Family-Values-Patricia-Ebrey/dp/0521523222"
      }
    ]
  },
  {
    title: "Community Relations",
    description: "Traditional and modern approaches to social interaction and community organization in Confucian thought.",
    keyPoints: [
      "Social Networks",
      "Community Bonds",
      "Cultural Integration",
      "Social Support",
      "Community Rituals",
      "Social Ethics",
      "Cultural Unity",
      "Social Harmony"
    ],
    historicalRefs: [
      {
        text: "Community harmony depends on proper social relations.",
        source: "Book of Rites"
      },
      {
        text: "Social support strengthens community bonds.",
        source: "Analects 6.30"
      }
    ],
    significance: "Confucian community relations emphasize social harmony and mutual support, influencing community organization worldwide.",
    elements: [
      "Social networks",
      "Community bonds",
      "Cultural activities",
      "Social support",
      "Community rituals",
      "Social ethics",
      "Cultural unity",
      "Social harmony"
    ],
    practices: [
      "Community activities",
      "Social gatherings",
      "Cultural events",
      "Mutual support",
      "Community rituals",
      "Social service",
      "Cultural preservation",
      "Community building"
    ],
    recommendedReading: [
      {
        title: "Confucian Community Ethics",
        author: "Philip J. Ivanhoe",
        description: "Analysis of Confucian social practices",
        amazonLink: "https://www.amazon.com/Confucian-Community-Ethics-Philip-Ivanhoe/dp/0521524008"
      }
    ]
  },
  {
    title: "Modern Applications",
    description: "Contemporary adaptations and applications of Confucian social principles in modern contexts.",
    keyPoints: [
      "Social Integration",
      "Family Values",
      "Community Building",
      "Cultural Identity",
      "Social Harmony",
      "Ethical Relations",
      "Cultural Revival",
      "Global Impact"
    ],
    historicalRefs: [
      {
        text: "Traditional values enhance modern social life.",
        source: "Contemporary Social Studies"
      },
      {
        text: "Confucian ethics guide community development.",
        source: "Modern Social Theory"
      }
    ],
    significance: "Modern applications of Confucian social thought demonstrate its continuing relevance to contemporary community challenges.",
    elements: [
      "Social integration",
      "Family values",
      "Community bonds",
      "Cultural identity",
      "Social harmony",
      "Ethical relations",
      "Cultural revival",
      "Global influence"
    ],
    practices: [
      "Social programs",
      "Family support",
      "Community activities",
      "Cultural events",
      "Social harmony",
      "Ethical relations",
      "Cultural preservation",
      "Global exchange"
    ],
    recommendedReading: [
      {
        title: "Confucianism in Modern Society",
        author: "Tu Weiming",
        description: "Study of modern Confucian social applications",
        amazonLink: "https://www.amazon.com/Confucianism-Modern-Society-Weiming-Tu/dp/0521524008"
      }
    ]
  }
]

export default function SocialPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Social Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore Confucianism's profound influence on social organization, family relationships, and community structures across East Asia and beyond.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="hierarchy" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="hierarchy">Hierarchy</TabsTrigger>
          <TabsTrigger value="family">Family</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="modern">Modern</TabsTrigger>
        </TabsList>

        {socialContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({hierarchy: true, family: true, community: true, modern: true})[index]}>
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
              title: "Arts and Literature",
              href: "/religion/confucianism/impact/arts"
            },
            {
              title: "Modern Influence",
              href: "/religion/confucianism/impact/modern"
            }
          ]}
        />
      </div>
    </div>
  )
} 