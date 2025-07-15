import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Five Relations | Confucian Philosophy",
  description: "Explore the Five Relations (五伦) in Confucianism, the fundamental relationships that structure social harmony and moral order through reciprocal duties and ethical obligations.",
  keywords: "Five Relations, 五伦, Confucian Relationships, Social Harmony, Moral Order, Chinese Philosophy, Confucianism, Filial Piety, Social Ethics"
}

interface RelationsContent {
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

const relationsContent: RelationsContent[] = [
  {
    title: "Foundation of Social Order",
    description: "The fundamental concept of the Five Relations (五伦) as the cornerstone of Confucian social ethics and moral order.",
    keyPoints: [
      "Ruler-Subject (君臣)",
      "Father-Son (父子)",
      "Husband-Wife (夫婦)",
      "Elder-Younger (長幼)",
      "Friend-Friend (朋友)",
      "Reciprocal duties",
      "Social harmony",
      "Moral obligations"
    ],
    historicalRefs: [
      {
        text: "Original formulation of the Five Relations.",
        source: "Mencius 3A:4"
      },
      {
        text: "Explanation of reciprocal duties.",
        source: "Classic of Rites 10:2"
      }
    ],
    significance: "The Five Relations provide the foundational framework for social organization and moral conduct in Confucian society.",
    elements: [
      "Hierarchical order",
      "Mutual obligations",
      "Moral principles",
      "Social roles",
      "Ethical duties",
      "Reciprocal respect",
      "Harmonious bonds",
      "Moral cultivation"
    ],
    practices: [
      "Role fulfillment",
      "Duty observation",
      "Moral conduct",
      "Social interaction",
      "Relationship cultivation",
      "Ethical behavior",
      "Harmony maintenance",
      "Respect demonstration"
    ],
    recommendedReading: [
      {
        title: "The Five Relations in Confucian Thought",
        author: "Henry Rosemont Jr.",
        description: "Comprehensive analysis of the Five Relations",
        amazonLink: "https://www.amazon.com/Five-Relations-Confucian-Thought/dp/0824835832"
      }
    ]
  },
  {
    title: "Specific Relationships",
    description: "Detailed examination of each of the Five Relations and their particular characteristics and obligations.",
    keyPoints: [
      "Righteousness in ruler-subject",
      "Love in father-son",
      "Distinction in husband-wife",
      "Order in elder-younger",
      "Trust in friend-friend",
      "Role responsibilities",
      "Mutual obligations",
      "Ethical conduct"
    ],
    historicalRefs: [
      {
        text: "Specific duties within each relationship.",
        source: "Analects 12:11"
      },
      {
        text: "Balance of obligations in relationships.",
        source: "Xunzi Chapter 9"
      }
    ],
    significance: "Each relationship carries specific duties and expectations that contribute to social harmony and moral development.",
    elements: [
      "Role definitions",
      "Moral duties",
      "Ethical standards",
      "Behavioral norms",
      "Social expectations",
      "Reciprocal rights",
      "Mutual benefits",
      "Relationship dynamics"
    ],
    practices: [
      "Role understanding",
      "Duty fulfillment",
      "Ethical conduct",
      "Behavioral refinement",
      "Social engagement",
      "Rights respect",
      "Benefit sharing",
      "Dynamic management"
    ],
    recommendedReading: [
      {
        title: "Understanding Confucian Relations",
        author: "Roger T. Ames",
        description: "Analysis of specific relationship dynamics",
        amazonLink: "https://www.amazon.com/Understanding-Confucian-Relations-Roger-Ames/dp/0824835840"
      }
    ]
  },
  {
    title: "Moral Cultivation",
    description: "The role of the Five Relations in personal moral development and social harmony.",
    keyPoints: [
      "Character development",
      "Moral refinement",
      "Social cultivation",
      "Ethical growth",
      "Relationship wisdom",
      "Personal maturity",
      "Social responsibility",
      "Harmonious living"
    ],
    historicalRefs: [
      {
        text: "Moral development through relationships.",
        source: "Mencius 4A:12"
      },
      {
        text: "Cultivation of virtue in relations.",
        source: "Doctrine of the Mean 20"
      }
    ],
    significance: "The practice of proper relationships serves as a path for moral cultivation and social development.",
    elements: [
      "Moral learning",
      "Ethical practice",
      "Social wisdom",
      "Character building",
      "Relationship skills",
      "Personal growth",
      "Social awareness",
      "Harmony cultivation"
    ],
    practices: [
      "Self-reflection",
      "Moral practice",
      "Social learning",
      "Character cultivation",
      "Relationship building",
      "Personal development",
      "Social engagement",
      "Harmony creation"
    ],
    recommendedReading: [
      {
        title: "Moral Cultivation in Confucian Relations",
        author: "Philip J. Ivanhoe",
        description: "Study of moral development through relationships",
        amazonLink: "https://www.amazon.com/Moral-Cultivation-Confucian-Relations/dp/0824835859"
      }
    ]
  },
  {
    title: "Contemporary Application",
    description: "The modern relevance and application of the Five Relations in contemporary society.",
    keyPoints: [
      "Modern relationships",
      "Professional ethics",
      "Family dynamics",
      "Social networks",
      "Global interactions",
      "Cultural adaptation",
      "Ethical leadership",
      "Social harmony"
    ],
    historicalRefs: [
      {
        text: "Modern interpretations of the Five Relations.",
        source: "Contemporary Confucian Studies"
      },
      {
        text: "Application in modern society.",
        source: "Journal of Chinese Philosophy"
      }
    ],
    significance: "The Five Relations continue to offer valuable insights for building harmonious relationships in modern society.",
    elements: [
      "Modern ethics",
      "Professional relations",
      "Family bonds",
      "Social connections",
      "Global networks",
      "Cultural bridges",
      "Leadership principles",
      "Harmony creation"
    ],
    practices: [
      "Relationship building",
      "Professional conduct",
      "Family nurturing",
      "Social networking",
      "Global engagement",
      "Cultural integration",
      "Leadership development",
      "Harmony maintenance"
    ],
    recommendedReading: [
      {
        title: "The Five Relations in Modern Life",
        author: "Daniel A. Bell",
        description: "Contemporary applications of traditional relationships",
        amazonLink: "https://www.amazon.com/Five-Relations-Modern-Life/dp/0824835867"
      }
    ]
  }
]

export default function RelationsPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Five Relations</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the Five Relations (五伦) in Confucianism, the fundamental relationships that structure social harmony and moral order through reciprocal duties and ethical obligations.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="foundation" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="foundation">Foundation</TabsTrigger>
          <TabsTrigger value="specific">Specific</TabsTrigger>
          <TabsTrigger value="cultivation">Cultivation</TabsTrigger>
          <TabsTrigger value="modern">Modern</TabsTrigger>
        </TabsList>

        {relationsContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({foundation: true, specific: true, cultivation: true, modern: true})[index]}>
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
              title: "Ren and Virtue",
              href: "/religion/confucianism/concepts/ren"
            },
            {
              title: "Li and Ritual",
              href: "/religion/confucianism/concepts/li"
            },
            {
              title: "Heaven and Dao",
              href: "/religion/confucianism/concepts/heaven"
            }
          ]}
        />
      </div>
    </div>
  )
} 