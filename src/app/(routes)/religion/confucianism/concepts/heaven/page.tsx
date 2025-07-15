import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Heaven and Dao | Confucian Philosophy",
  description: "Explore Heaven (天) and Dao (道) in Confucianism, the fundamental concepts of cosmic order, moral authority, and the Way that guides human conduct and social harmony.",
  keywords: "Heaven, Tian, 天, Dao, 道, Mandate of Heaven, Tianming, 天命, Confucianism, Chinese Philosophy, Moral Order, Cosmic Order"
}

interface HeavenContent {
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

const heavenContent: HeavenContent[] = [
  {
    title: "Nature of Heaven (天)",
    description: "The concept of Heaven (天) as the supreme moral and cosmic force that governs the universe and human affairs.",
    keyPoints: [
      "Heaven as moral authority",
      "Cosmic order and harmony",
      "Mandate of Heaven (天命)",
      "Moral universe",
      "Divine providence",
      "Natural law",
      "Moral causation",
      "Universal principle"
    ],
    historicalRefs: [
      {
        text: "Heaven sees as our people see; Heaven hears as our people hear.",
        source: "Book of Documents 尚書"
      },
      {
        text: "Heaven's command is not constant.",
        source: "Analects 17:19"
      }
    ],
    significance: "Heaven represents the ultimate source of moral authority and cosmic order in Confucian thought, guiding both personal conduct and political legitimacy.",
    elements: [
      "Moral authority",
      "Cosmic order",
      "Divine mandate",
      "Natural law",
      "Universal principle",
      "Moral causation",
      "Ethical foundation",
      "Cosmic harmony"
    ],
    practices: [
      "Moral cultivation",
      "Ritual observance",
      "Ethical conduct",
      "Self-reflection",
      "Heaven's will discernment",
      "Virtue development",
      "Social responsibility",
      "Harmonious living"
    ],
    recommendedReading: [
      {
        title: "Heaven and Earth in Early Han Thought",
        author: "Michael J. Puett",
        description: "Comprehensive study of Heaven in early Confucian thought",
        amazonLink: "https://www.amazon.com/Heaven-Earth-Early-Han-Thought/dp/0791415864"
      }
    ]
  },
  {
    title: "The Way (道)",
    description: "The concept of Dao (道) as the fundamental path or way of moral conduct, social order, and cosmic harmony.",
    keyPoints: [
      "Way of Heaven",
      "Moral path",
      "Social order",
      "Ethical conduct",
      "Universal principle",
      "Human cultivation",
      "Natural harmony",
      "Moral wisdom"
    ],
    historicalRefs: [
      {
        text: "The Way of Heaven is constant in its order.",
        source: "Doctrine of the Mean 1:1"
      },
      {
        text: "Man can enlarge the Way, it is not the Way that enlarges man.",
        source: "Analects 15:29"
      }
    ],
    significance: "The Dao represents the ideal path of human conduct and social organization, aligned with Heaven's principles and natural order.",
    elements: [
      "Moral principles",
      "Natural order",
      "Human nature",
      "Social harmony",
      "Ethical wisdom",
      "Universal truth",
      "Cosmic pattern",
      "Moral guidance"
    ],
    practices: [
      "Path following",
      "Moral practice",
      "Wisdom cultivation",
      "Harmony seeking",
      "Order maintenance",
      "Virtue development",
      "Social engagement",
      "Natural alignment"
    ],
    recommendedReading: [
      {
        title: "The Way and Its Power",
        author: "Arthur Waley",
        description: "Classic study of Dao in Chinese thought",
        amazonLink: "https://www.amazon.com/Way-Its-Power-Arthur-Waley/dp/0802150853"
      }
    ]
  },
  {
    title: "Mandate and Authority",
    description: "The relationship between Heaven's Mandate (天命) and moral-political authority in Confucian thought.",
    keyPoints: [
      "Divine mandate",
      "Political legitimacy",
      "Moral authority",
      "Ethical leadership",
      "Social responsibility",
      "Heavenly approval",
      "Virtuous governance",
      "Moral accountability"
    ],
    historicalRefs: [
      {
        text: "He who gains the mandate of Heaven shall rule.",
        source: "Mencius 5A:5"
      },
      {
        text: "Heaven's mandate is not easily preserved.",
        source: "Book of History"
      }
    ],
    significance: "The Mandate of Heaven establishes the connection between moral virtue and political authority, providing the foundation for legitimate governance.",
    elements: [
      "Divine sanction",
      "Moral leadership",
      "Political power",
      "Ethical governance",
      "Social order",
      "Heavenly approval",
      "Virtuous rule",
      "Public welfare"
    ],
    practices: [
      "Virtuous leadership",
      "Moral governance",
      "Public service",
      "Ethical decision-making",
      "Social responsibility",
      "Heaven's will following",
      "Order maintenance",
      "People's welfare"
    ],
    recommendedReading: [
      {
        title: "The Mandate of Heaven",
        author: "S.J. Marshall",
        description: "Study of Heaven's Mandate in Chinese political thought",
        amazonLink: "https://www.amazon.com/Mandate-Heaven-Hidden-History/dp/0231122985"
      }
    ]
  },
  {
    title: "Modern Interpretation",
    description: "Contemporary understanding and application of Heaven and Dao in modern context.",
    keyPoints: [
      "Modern relevance",
      "Ethical principles",
      "Leadership wisdom",
      "Social harmony",
      "Environmental ethics",
      "Moral guidance",
      "Cultural heritage",
      "Global application"
    ],
    historicalRefs: [
      {
        text: "Modern interpretations of Heaven and Dao.",
        source: "Contemporary Confucian Studies"
      },
      {
        text: "Application in modern society.",
        source: "Journal of Chinese Philosophy"
      }
    ],
    significance: "Heaven and Dao continue to offer valuable insights for modern ethical leadership, social harmony, and environmental stewardship.",
    elements: [
      "Modern ethics",
      "Leadership principles",
      "Social values",
      "Environmental wisdom",
      "Cultural heritage",
      "Global perspective",
      "Moral guidance",
      "Harmonious development"
    ],
    practices: [
      "Ethical leadership",
      "Social responsibility",
      "Environmental care",
      "Cultural preservation",
      "Global engagement",
      "Moral development",
      "Harmony building",
      "Wisdom application"
    ],
    recommendedReading: [
      {
        title: "Contemporary Confucianism",
        author: "Peimin Ni",
        description: "Modern interpretation of Confucian concepts",
        amazonLink: "https://www.amazon.com/Contemporary-Confucianism-Peimin-Ni/dp/1441192786"
      }
    ]
  }
]

export default function HeavenPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Heaven and Dao</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore Heaven (天) and Dao (道) in Confucianism, the fundamental concepts of cosmic order, moral authority, and the Way that guides human conduct and social harmony.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="nature" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="nature">Nature</TabsTrigger>
          <TabsTrigger value="way">Way</TabsTrigger>
          <TabsTrigger value="mandate">Mandate</TabsTrigger>
          <TabsTrigger value="modern">Modern</TabsTrigger>
        </TabsList>

        {heavenContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({nature: true, way: true, mandate: true, modern: true})[index]}>
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
              title: "Five Relations",
              href: "/religion/confucianism/concepts/relations"
            }
          ]}
        />
      </div>
    </div>
  )
} 