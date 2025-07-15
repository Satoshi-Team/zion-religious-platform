import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Contemporary | Confucian History",
  description: "Explore Contemporary Confucianism (1980s-present), including its revival in China, global influence, and modern applications in politics, education, and society.",
  keywords: "Contemporary Confucianism, Chinese Philosophy, Modern Applications, Cultural Revival, Political Philosophy, Confucian Education, Social Harmony, Global Ethics"
}

interface ContemporaryContent {
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

const contemporaryContent: ContemporaryContent[] = [
  {
    title: "Political Applications",
    description: "Contemporary applications of Confucian thought in political theory, governance, and public policy across East Asia.",
    keyPoints: [
      "Political Meritocracy",
      "Harmonious Society",
      "Democratic Integration",
      "Civil Service Reform",
      "Public Ethics",
      "Social Stability",
      "Cultural Governance",
      "Policy Formation"
    ],
    historicalRefs: [
      {
        text: "Confucian values can enhance modern democratic practices.",
        source: "Daniel A. Bell's 'The China Model'"
      },
      {
        text: "Traditional wisdom provides guidance for contemporary governance.",
        source: "Jiang Qing's 'A Confucian Constitutional Order'"
      }
    ],
    significance: "Contemporary Confucianism offers valuable insights for modern political systems, combining traditional wisdom with current governance needs.",
    elements: [
      "Political theory",
      "Public administration",
      "Social harmony",
      "Ethical governance",
      "Cultural policy",
      "Civil service",
      "Public discourse",
      "Policy implementation"
    ],
    practices: [
      "Policy consultation",
      "Public service",
      "Cultural programs",
      "Educational initiatives",
      "Social engagement",
      "Political dialogue",
      "Administrative reform",
      "Public ethics"
    ],
    recommendedReading: [
      {
        title: "The China Model",
        author: "Daniel A. Bell",
        description: "Analysis of contemporary Confucian political theory",
        amazonLink: "https://www.amazon.com/China-Model-Political-Meritocracy-Democracy/dp/0691173045"
      }
    ]
  },
  {
    title: "Educational Revival",
    description: "The resurgence of Confucian educational principles and practices in modern educational systems.",
    keyPoints: [
      "Character Education",
      "Moral Development",
      "Cultural Literacy",
      "Classical Learning",
      "Modern Integration",
      "Teacher Training",
      "Curriculum Reform",
      "Learning Methods"
    ],
    historicalRefs: [
      {
        text: "Education must cultivate both knowledge and virtue.",
        source: "Contemporary Confucian Education Theory"
      },
      {
        text: "Traditional learning methods enhance modern education.",
        source: "East Asian Educational Review"
      }
    ],
    significance: "Contemporary Confucian education combines traditional wisdom with modern pedagogical approaches to develop well-rounded individuals.",
    elements: [
      "Moral cultivation",
      "Academic excellence",
      "Cultural knowledge",
      "Personal development",
      "Social responsibility",
      "Critical thinking",
      "Practical skills",
      "Ethical awareness"
    ],
    practices: [
      "Classical reading",
      "Character building",
      "Cultural activities",
      "Moral education",
      "Academic study",
      "Social service",
      "Personal reflection",
      "Group learning"
    ],
    recommendedReading: [
      {
        title: "Confucian Education in Contemporary Society",
        author: "Charlene Tan",
        description: "Study of modern Confucian educational practices",
        amazonLink: "https://www.amazon.com/Confucian-Education-Contemporary-Society-Charlene/dp/0415892469"
      }
    ]
  },
  {
    title: "Social Ethics",
    description: "Contemporary applications of Confucian ethics in social relationships, business practices, and environmental stewardship.",
    keyPoints: [
      "Family Values",
      "Business Ethics",
      "Environmental Care",
      "Social Harmony",
      "Professional Ethics",
      "Community Building",
      "Moral Leadership",
      "Cultural Values"
    ],
    historicalRefs: [
      {
        text: "Confucian ethics provide guidance for modern challenges.",
        source: "Journal of Business Ethics"
      },
      {
        text: "Traditional values enhance social responsibility.",
        source: "Contemporary Chinese Thought"
      }
    ],
    significance: "Contemporary Confucian ethics offer valuable perspectives on modern social and environmental challenges.",
    elements: [
      "Ethical principles",
      "Social relationships",
      "Environmental wisdom",
      "Business practices",
      "Professional conduct",
      "Community values",
      "Moral development",
      "Cultural heritage"
    ],
    practices: [
      "Ethical business",
      "Environmental protection",
      "Community service",
      "Professional development",
      "Social engagement",
      "Cultural preservation",
      "Moral education",
      "Value transmission"
    ],
    recommendedReading: [
      {
        title: "Confucian Ethics in Modern Society",
        author: "Mary Evelyn Tucker",
        description: "Analysis of contemporary Confucian ethics",
        amazonLink: "https://www.amazon.com/Confucian-Ethics-Modern-Society-Tucker/dp/0791452972"
      }
    ]
  },
  {
    title: "Global Dialogue",
    description: "Contemporary Confucianism's engagement with global philosophical traditions and international challenges.",
    keyPoints: [
      "Cross-cultural Exchange",
      "Global Ethics",
      "Interfaith Dialogue",
      "Cultural Diplomacy",
      "International Relations",
      "Universal Values",
      "Shared Wisdom",
      "Modern Applications"
    ],
    historicalRefs: [
      {
        text: "Confucian wisdom contributes to global dialogue.",
        source: "UNESCO World Philosophy Day"
      },
      {
        text: "Traditional values enhance international understanding.",
        source: "Global Ethics Network"
      }
    ],
    significance: "Contemporary Confucianism actively engages with global philosophical traditions and contributes to international dialogue on shared challenges.",
    elements: [
      "Cultural exchange",
      "Ethical dialogue",
      "Global wisdom",
      "Shared values",
      "International cooperation",
      "Universal principles",
      "Modern relevance",
      "Cross-cultural understanding"
    ],
    practices: [
      "International conferences",
      "Cultural exchange",
      "Academic collaboration",
      "Public diplomacy",
      "Global initiatives",
      "Educational programs",
      "Research projects",
      "Policy dialogue"
    ],
    recommendedReading: [
      {
        title: "Confucianism for the Modern World",
        author: "Daniel A. Bell and Hahm Chaibong",
        description: "Study of Confucianism's global relevance",
        amazonLink: "https://www.amazon.com/Confucianism-Modern-World-Daniel-Bell/dp/0521528887"
      }
    ]
  }
]

export default function ContemporaryPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Contemporary Confucianism</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore Contemporary Confucianism (1980s-present), including its revival in China, global influence, and modern applications in politics, education, and society.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="political" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="political">Political</TabsTrigger>
          <TabsTrigger value="educational">Educational</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="global">Global</TabsTrigger>
        </TabsList>

        {contemporaryContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({political: true, educational: true, social: true, global: true})[index]}>
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
              title: "Modern Revival",
              href: "/religion/confucianism/history/modern"
            },
            {
              title: "Global Impact",
              href: "/religion/confucianism/impact/global"
            },
            {
              title: "Social Development",
              href: "/religion/confucianism/society/development"
            }
          ]}
        />
      </div>
    </div>
  )
} 