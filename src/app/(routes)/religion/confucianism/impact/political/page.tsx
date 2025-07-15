import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Political Thought | Confucian Cultural Impact",
  description: "Explore Confucianism's profound influence on political philosophy, governance systems, and statecraft across East Asia and beyond.",
  keywords: "Confucian Politics, Political Philosophy, Meritocracy, Civil Service, Statecraft, Governance, Political Ethics, Social Harmony"
}

interface PoliticalContent {
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

const politicalContent: PoliticalContent[] = [
  {
    title: "Political Philosophy",
    description: "The fundamental principles and values that shape Confucian approaches to governance and political theory.",
    keyPoints: [
      "Moral Leadership",
      "Benevolent Rule",
      "Social Harmony",
      "Merit-based Governance",
      "People-Centered Politics",
      "Ethical Administration",
      "Cultural Unity",
      "Political Stability"
    ],
    historicalRefs: [
      {
        text: "The ruler should govern through virtue rather than force.",
        source: "Analects 2.1"
      },
      {
        text: "The people are the foundation of the state.",
        source: "Mencius 7B.14"
      }
    ],
    significance: "Confucian political philosophy emphasizes moral leadership and ethical governance, shaping political systems across East Asia.",
    elements: [
      "Moral authority",
      "Social order",
      "Political ethics",
      "Public service",
      "Cultural values",
      "Social harmony",
      "Statecraft",
      "Governance principles"
    ],
    practices: [
      "Moral cultivation",
      "Public service",
      "Policy formation",
      "Social welfare",
      "Cultural preservation",
      "Political consultation",
      "Administrative reform",
      "State rituals"
    ],
    recommendedReading: [
      {
        title: "Confucian Political Ethics",
        author: "Daniel A. Bell",
        description: "Analysis of Confucian political philosophy",
        amazonLink: "https://www.amazon.com/Confucian-Political-Ethics-Daniel-Bell/dp/0691143225"
      }
    ]
  },
  {
    title: "Governance Systems",
    description: "The development and influence of Confucian political institutions and administrative practices.",
    keyPoints: [
      "Civil Service System",
      "Merit-based Selection",
      "Bureaucratic Structure",
      "Local Administration",
      "State Rituals",
      "Legal Framework",
      "Social Welfare",
      "Cultural Policy"
    ],
    historicalRefs: [
      {
        text: "The civil service system established meritocratic governance.",
        source: "History of Chinese Civil Service"
      },
      {
        text: "Local administration should reflect central values.",
        source: "Confucian Administrative Theory"
      }
    ],
    significance: "Confucian governance systems established principles of meritocracy and ethical administration that continue to influence modern political institutions.",
    elements: [
      "Administrative structure",
      "Selection criteria",
      "Policy implementation",
      "Social services",
      "Cultural programs",
      "Legal principles",
      "Public welfare",
      "State ceremonies"
    ],
    practices: [
      "Civil service exams",
      "Local governance",
      "Public administration",
      "Social programs",
      "Cultural activities",
      "Legal procedures",
      "Welfare services",
      "State rituals"
    ],
    recommendedReading: [
      {
        title: "The Chinese Civil Service System",
        author: "John W. Chaffee",
        description: "Study of traditional Chinese governance",
        amazonLink: "https://www.amazon.com/Chinese-Civil-Service-System-Chaffee/dp/0521023892"
      }
    ]
  },
  {
    title: "Statecraft",
    description: "Traditional and modern approaches to political leadership and state management in Confucian thought.",
    keyPoints: [
      "Political Wisdom",
      "Strategic Planning",
      "Crisis Management",
      "Diplomatic Relations",
      "Economic Policy",
      "Social Reform",
      "Cultural Integration",
      "National Unity"
    ],
    historicalRefs: [
      {
        text: "Good governance requires both wisdom and virtue.",
        source: "Great Learning"
      },
      {
        text: "Statecraft should balance tradition and innovation.",
        source: "Classic of History"
      }
    ],
    significance: "Confucian statecraft combines practical wisdom with moral principles, influencing political leadership worldwide.",
    elements: [
      "Political strategy",
      "Crisis handling",
      "Diplomatic skills",
      "Economic management",
      "Social policy",
      "Cultural affairs",
      "National security",
      "Public relations"
    ],
    practices: [
      "Policy planning",
      "Crisis response",
      "Diplomatic relations",
      "Economic development",
      "Social programs",
      "Cultural activities",
      "Security measures",
      "Public communication"
    ],
    recommendedReading: [
      {
        title: "Confucian Statecraft and Korean Institutions",
        author: "James B. Palais",
        description: "Analysis of Confucian political practices",
        amazonLink: "https://www.amazon.com/Confucian-Statecraft-Korean-Institutions-Palais/dp/0295974559"
      }
    ]
  },
  {
    title: "Modern Applications",
    description: "Contemporary adaptations and applications of Confucian political principles in modern contexts.",
    keyPoints: [
      "Democratic Integration",
      "Public Ethics",
      "Social Justice",
      "Global Governance",
      "Political Reform",
      "Cultural Revival",
      "Environmental Policy",
      "International Relations"
    ],
    historicalRefs: [
      {
        text: "Confucian values can enhance modern democracy.",
        source: "Contemporary Political Theory"
      },
      {
        text: "Traditional wisdom guides global governance.",
        source: "International Relations Studies"
      }
    ],
    significance: "Modern applications of Confucian political thought demonstrate its continuing relevance to contemporary governance challenges.",
    elements: [
      "Democratic principles",
      "Ethical governance",
      "Social equity",
      "Global cooperation",
      "Political reform",
      "Cultural identity",
      "Environmental care",
      "International dialogue"
    ],
    practices: [
      "Democratic reform",
      "Ethical leadership",
      "Social programs",
      "Global initiatives",
      "Political consultation",
      "Cultural activities",
      "Environmental protection",
      "International cooperation"
    ],
    recommendedReading: [
      {
        title: "Confucianism for the Modern World",
        author: "Daniel A. Bell and Hahm Chaibong",
        description: "Study of modern Confucian political applications",
        amazonLink: "https://www.amazon.com/Confucianism-Modern-World-Daniel-Bell/dp/0521528887"
      }
    ]
  }
]

export default function PoliticalPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Political Thought</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore Confucianism's profound influence on political philosophy, governance systems, and statecraft across East Asia and beyond.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="philosophy" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
          <TabsTrigger value="governance">Governance</TabsTrigger>
          <TabsTrigger value="statecraft">Statecraft</TabsTrigger>
          <TabsTrigger value="modern">Modern</TabsTrigger>
        </TabsList>

        {politicalContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({philosophy: true, governance: true, statecraft: true, modern: true})[index]}>
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
              title: "Social Structure",
              href: "/religion/confucianism/impact/social"
            },
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