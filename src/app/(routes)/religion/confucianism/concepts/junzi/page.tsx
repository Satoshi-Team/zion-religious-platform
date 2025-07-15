import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Junzi Ideal | Confucian Philosophy",
  description: "Explore the Confucian concept of Junzi (君子), the ideal of moral nobility and exemplary person, representing the highest standard of ethical cultivation and leadership.",
  keywords: "Junzi, 君子, Confucian Noble Person, Moral Excellence, Ethical Leadership, Chinese Philosophy, Confucianism, Superior Person, Moral Cultivation"
}

interface JunziContent {
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

const junziContent: JunziContent[] = [
  {
    title: "Nature of Junzi",
    description: "The fundamental concept of Junzi (君子) as the morally noble person and the embodiment of Confucian ethical ideals.",
    keyPoints: [
      "Etymology and character meaning",
      "Moral excellence",
      "Ethical leadership",
      "Personal cultivation",
      "Inner nobility",
      "Exemplary conduct",
      "Wisdom cultivation",
      "Character development"
    ],
    historicalRefs: [
      {
        text: "Confucius's description of the ideal Junzi.",
        source: "Analects 4:16"
      },
      {
        text: "Contrast between Junzi and Xiaoren (小人).",
        source: "Analects 15:21"
      }
    ],
    significance: "The Junzi represents the highest ideal of human character and moral development in Confucian philosophy.",
    elements: [
      "Moral integrity",
      "Ethical wisdom",
      "Cultural refinement",
      "Social responsibility",
      "Self-cultivation",
      "Leadership qualities",
      "Ritual mastery",
      "Intellectual depth"
    ],
    practices: [
      "Moral reflection",
      "Ethical study",
      "Cultural learning",
      "Social engagement",
      "Self-improvement",
      "Leadership practice",
      "Ritual observance",
      "Intellectual pursuit"
    ],
    recommendedReading: [
      {
        title: "The Ideal of the Junzi",
        author: "Tu Wei-ming",
        description: "Comprehensive analysis of the Junzi concept",
        amazonLink: "https://www.amazon.com/Ideal-Junzi-Tu-Wei-ming/dp/0824835794"
      }
    ]
  },
  {
    title: "Virtues and Characteristics",
    description: "The essential virtues and characteristics that define the Junzi as an exemplary person in Confucian thought.",
    keyPoints: [
      "Ren (仁) - Benevolence",
      "Yi (义) - Righteousness",
      "Li (礼) - Propriety",
      "Zhi (智) - Wisdom",
      "Xin (信) - Trustworthiness",
      "Yong (勇) - Courage",
      "He (和) - Harmony",
      "Zhong (忠) - Loyalty"
    ],
    historicalRefs: [
      {
        text: "The virtues of the Junzi in practice.",
        source: "Analects 7:6"
      },
      {
        text: "Integration of virtues in the Junzi's character.",
        source: "Mencius 2A:2"
      }
    ],
    significance: "The virtues of the Junzi form a comprehensive framework for moral excellence and ethical leadership.",
    elements: [
      "Moral character",
      "Ethical principles",
      "Social virtues",
      "Personal qualities",
      "Leadership traits",
      "Cultural values",
      "Spiritual aspects",
      "Intellectual virtues"
    ],
    practices: [
      "Virtue cultivation",
      "Ethical practice",
      "Social engagement",
      "Personal development",
      "Leadership training",
      "Cultural study",
      "Spiritual growth",
      "Intellectual development"
    ],
    recommendedReading: [
      {
        title: "Confucian Moral Self Cultivation",
        author: "Philip J. Ivanhoe",
        description: "Study of Junzi virtues and development",
        amazonLink: "https://www.amazon.com/Confucian-Moral-Self-Cultivation-Ivanhoe/dp/0824835808"
      }
    ]
  },
  {
    title: "Social Role and Leadership",
    description: "The Junzi's role in society as a moral leader and exemplar of ethical conduct.",
    keyPoints: [
      "Moral leadership",
      "Social responsibility",
      "Cultural preservation",
      "Educational influence",
      "Political guidance",
      "Family leadership",
      "Community service",
      "Ethical example"
    ],
    historicalRefs: [
      {
        text: "The Junzi's role in government and society.",
        source: "Analects 2:3"
      },
      {
        text: "Leadership qualities of the Junzi.",
        source: "Mencius 4A:6"
      }
    ],
    significance: "The Junzi serves as a model for ethical leadership and social responsibility in Confucian society.",
    elements: [
      "Leadership style",
      "Social influence",
      "Cultural role",
      "Educational function",
      "Political duty",
      "Family position",
      "Community role",
      "Moral authority"
    ],
    practices: [
      "Leadership development",
      "Social service",
      "Cultural promotion",
      "Educational guidance",
      "Political engagement",
      "Family cultivation",
      "Community building",
      "Moral example"
    ],
    recommendedReading: [
      {
        title: "The Way of the Leader",
        author: "Donald J. Munro",
        description: "Analysis of Junzi leadership principles",
        amazonLink: "https://www.amazon.com/Way-Leader-Donald-J-Munro/dp/0824835816"
      }
    ]
  },
  {
    title: "Contemporary Relevance",
    description: "The modern significance and application of the Junzi ideal in contemporary society and leadership.",
    keyPoints: [
      "Modern leadership",
      "Professional ethics",
      "Personal development",
      "Social responsibility",
      "Cultural integration",
      "Global perspective",
      "Ethical business",
      "Moral education"
    ],
    historicalRefs: [
      {
        text: "Modern interpretations of the Junzi ideal.",
        source: "Contemporary Confucian Studies"
      },
      {
        text: "Application of Junzi principles in modern contexts.",
        source: "Journal of Chinese Philosophy"
      }
    ],
    significance: "The Junzi ideal continues to offer valuable insights for ethical leadership and personal development in the modern world.",
    elements: [
      "Modern ethics",
      "Professional standards",
      "Personal growth",
      "Social impact",
      "Cultural awareness",
      "Global mindset",
      "Business ethics",
      "Educational values"
    ],
    practices: [
      "Professional development",
      "Ethical leadership",
      "Personal cultivation",
      "Social engagement",
      "Cultural integration",
      "Global cooperation",
      "Business practice",
      "Educational reform"
    ],
    recommendedReading: [
      {
        title: "The Contemporary Junzi",
        author: "Robert C. Neville",
        description: "Modern applications of the Junzi ideal",
        amazonLink: "https://www.amazon.com/Contemporary-Junzi-Robert-C-Neville/dp/0824835824"
      }
    ]
  }
]

export default function JunziPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Junzi Ideal</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the Confucian concept of Junzi (君子), the ideal of moral nobility and exemplary person, representing the highest standard of ethical cultivation and leadership.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="nature" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="nature">Nature</TabsTrigger>
          <TabsTrigger value="virtues">Virtues</TabsTrigger>
          <TabsTrigger value="leadership">Leadership</TabsTrigger>
          <TabsTrigger value="modern">Modern</TabsTrigger>
        </TabsList>

        {junziContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({nature: true, virtues: true, leadership: true, modern: true})[index]}>
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