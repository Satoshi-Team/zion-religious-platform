import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Ren and Virtue | Confucian Philosophy",
  description: "Explore the central Confucian concept of Ren (仁), encompassing benevolence, humaneness, and moral virtue, and its role in personal cultivation and social harmony.",
  keywords: "Ren, 仁, Confucian Virtue, Benevolence, Humaneness, Moral Cultivation, Chinese Philosophy, Confucianism, Human-heartedness, Moral Character"
}

interface RenContent {
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

const renContent: RenContent[] = [
  {
    title: "Fundamental Nature of Ren",
    description: "The core concept of Ren (仁) as the foundation of Confucian ethics, representing the perfect virtue of human-heartedness and benevolence.",
    keyPoints: [
      "Etymology and character composition (人 + 二)",
      "Universal love and compassion",
      "Moral perfection ideal",
      "Inner moral force",
      "Basis of human nature",
      "Source of all virtues",
      "Perfect goodness",
      "Authentic humanity"
    ],
    historicalRefs: [
      {
        text: "Confucius defines Ren as 'to love all men' in the Analects.",
        source: "Analects 12:22"
      },
      {
        text: "The relationship between Ren and human nature.",
        source: "Mencius 2A:6"
      }
    ],
    significance: "Ren represents the highest moral achievement in Confucian thought, serving as the foundation for all other virtues and ethical behavior.",
    elements: [
      "Moral consciousness",
      "Empathetic understanding",
      "Ethical awareness",
      "Human dignity",
      "Inner cultivation",
      "Moral wisdom",
      "Spiritual development",
      "Character formation"
    ],
    practices: [
      "Self-reflection",
      "Moral cultivation",
      "Ethical study",
      "Character development",
      "Virtuous action",
      "Compassionate behavior",
      "Mindful interaction",
      "Personal refinement"
    ],
    recommendedReading: [
      {
        title: "Confucian Role Ethics: A Vocabulary",
        author: "Roger T. Ames",
        description: "Comprehensive analysis of Ren and Confucian ethics",
        amazonLink: "https://www.amazon.com/Confucian-Role-Ethics-Vocabulary-Roger/dp/0824837959"
      }
    ]
  },
  {
    title: "Manifestation and Practice",
    description: "The practical expression and cultivation of Ren through daily actions, relationships, and moral development.",
    keyPoints: [
      "Filial piety (Xiao)",
      "Reciprocal relationships",
      "Social harmony",
      "Moral example",
      "Ethical leadership",
      "Personal cultivation",
      "Virtuous conduct",
      "Moral education"
    ],
    historicalRefs: [
      {
        text: "The practice of Ren in daily life and relationships.",
        source: "Analects 4:15"
      },
      {
        text: "Connection between Ren and proper conduct.",
        source: "Analects 12:1"
      }
    ],
    significance: "The manifestation of Ren through concrete actions and relationships demonstrates the practical application of Confucian virtue in daily life.",
    elements: [
      "Ethical behavior",
      "Moral conduct",
      "Social relationships",
      "Family duties",
      "Community service",
      "Leadership qualities",
      "Educational roles",
      "Cultural practices"
    ],
    practices: [
      "Family reverence",
      "Social responsibility",
      "Ethical decision-making",
      "Moral leadership",
      "Community engagement",
      "Cultural preservation",
      "Educational development",
      "Relationship building"
    ],
    recommendedReading: [
      {
        title: "Thinking Through Confucian Values",
        author: "Philip J. Ivanhoe",
        description: "Analysis of practical applications of Ren",
        amazonLink: "https://www.amazon.com/Thinking-Through-Confucian-Values-Philip/dp/0824828755"
      }
    ]
  },
  {
    title: "Relationship to Other Virtues",
    description: "The interconnection between Ren and other core Confucian virtues, forming a comprehensive system of moral philosophy.",
    keyPoints: [
      "Connection to Li (礼)",
      "Relationship with Yi (义)",
      "Link to Zhi (智)",
      "Integration with Xin (信)",
      "Balance with Yong (勇)",
      "Harmony with He (和)",
      "Unity with Zhong (忠)",
      "Synergy with Shu (恕)"
    ],
    historicalRefs: [
      {
        text: "The relationship between Ren and other virtues.",
        source: "Analects 14:33"
      },
      {
        text: "Integration of virtues in moral development.",
        source: "Mencius 7A:15"
      }
    ],
    significance: "Understanding the relationship between Ren and other virtues reveals the integrated nature of Confucian moral philosophy.",
    elements: [
      "Virtue integration",
      "Moral harmony",
      "Ethical balance",
      "Character wholeness",
      "Value synthesis",
      "Principle unity",
      "Virtue coordination",
      "Moral coherence"
    ],
    practices: [
      "Virtue cultivation",
      "Ethical integration",
      "Moral development",
      "Character building",
      "Value alignment",
      "Principle application",
      "Virtue coordination",
      "Moral synthesis"
    ],
    recommendedReading: [
      {
        title: "Understanding Confucian Philosophy",
        author: "Peimin Ni",
        description: "Analysis of virtue relationships in Confucianism",
        amazonLink: "https://www.amazon.com/Understanding-Confucian-Philosophy-Peimin-Ni/dp/0824836731"
      }
    ]
  },
  {
    title: "Contemporary Relevance",
    description: "The modern significance and application of Ren in contemporary society, ethics, and personal development.",
    keyPoints: [
      "Modern ethics",
      "Business applications",
      "Leadership principles",
      "Educational philosophy",
      "Social development",
      "Cultural preservation",
      "Global relations",
      "Environmental ethics"
    ],
    historicalRefs: [
      {
        text: "Modern interpretations of Ren in contemporary society.",
        source: "Contemporary Confucian Studies"
      },
      {
        text: "Application of Ren in modern contexts.",
        source: "Journal of Chinese Philosophy"
      }
    ],
    significance: "Ren continues to offer valuable insights for addressing contemporary moral challenges and fostering ethical development in modern society.",
    elements: [
      "Modern applications",
      "Ethical frameworks",
      "Leadership models",
      "Educational methods",
      "Social principles",
      "Cultural values",
      "Global perspectives",
      "Environmental awareness"
    ],
    practices: [
      "Contemporary ethics",
      "Business leadership",
      "Educational reform",
      "Social development",
      "Cultural engagement",
      "Global cooperation",
      "Environmental stewardship",
      "Ethical innovation"
    ],
    recommendedReading: [
      {
        title: "Confucianism in Contemporary Context",
        author: "Tze-ki Hon",
        description: "Modern applications of Confucian concepts",
        amazonLink: "https://www.amazon.com/Confucianism-Contemporary-Context-Tze-ki-Hon/dp/0824838774"
      }
    ]
  }
]

export default function RenPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Ren and Virtue</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the central Confucian concept of Ren (仁), encompassing benevolence, humaneness, and moral virtue, and its role in personal cultivation and social harmony.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="nature" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="nature">Nature</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="virtues">Virtues</TabsTrigger>
          <TabsTrigger value="modern">Modern</TabsTrigger>
        </TabsList>

        {renContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({nature: true, practice: true, virtues: true, modern: true})[index]}>
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
              title: "Li and Ritual",
              href: "/religion/confucianism/concepts/li"
            },
            {
              title: "Junzi Ideal",
              href: "/religion/confucianism/concepts/junzi"
            },
            {
              title: "Five Relations",
              href: "/religion/confucianism/concepts/relations"
            }
          ]}
        />
      </div>
    </div>
  )
} 