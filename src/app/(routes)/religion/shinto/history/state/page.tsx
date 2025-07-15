import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "State Shinto | Shinto History",
  description: "Explore the development and impact of State Shinto from the Meiji Restoration through its dissolution, including its role in nationalism and modern implications.",
  keywords: "State Shinto, kokka shinto, Meiji Restoration, imperial worship, nationalism, shrine system, religious policy, wartime Shinto, post-war reforms, shrine politics"
}

interface StateContent {
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

const stateContent: StateContent[] = [
  {
    title: "Formation of State Shinto",
    description: "Examining the establishment and systematization of State Shinto during the early Meiji period (1868-1890).",
    keyPoints: [
      "Separation of Buddhism and Shinto",
      "Shrine reorganization system",
      "Imperial worship policies",
      "Religious education mandates",
      "Bureaucratic structures",
      "Shrine ranking system",
      "Priesthood regulations",
      "National ritual calendar"
    ],
    historicalRefs: [
      {
        text: "The 1868 separation edict (shinbutsu bunri) marked the beginning of State Shinto.",
        source: "Meiji Government Records"
      },
      {
        text: "The 1871 shrine ranking system established a national hierarchy of shrines.",
        source: "Ministry of Doctrine Documents"
      }
    ],
    significance: "The formation period established the fundamental structures and policies that would define State Shinto.",
    elements: [
      "Government bureaus",
      "Shrine hierarchies",
      "Imperial rituals",
      "Educational materials",
      "Legal frameworks",
      "Administrative systems",
      "Priesthood regulations",
      "National ceremonies"
    ],
    practices: [
      "Shrine worship",
      "Imperial ceremonies",
      "National festivals",
      "School rituals",
      "Bureaucratic rites",
      "Standardized prayers",
      "Official pilgrimages",
      "State ceremonies"
    ],
    recommendedReading: [
      {
        title: "The Making of State Shinto",
        author: "Helen Hardacre",
        description: "Comprehensive analysis of State Shinto's formation",
        amazonLink: "https://www.amazon.com/Shinto-State-1868-1988-Studies-Religion/dp/0691020525"
      }
    ]
  },
  {
    title: "Institutional Development",
    description: "Analyzing the evolution of State Shinto's institutional structures from 1890 to 1920.",
    keyPoints: [
      "Shrine administration",
      "Educational integration",
      "Military chaplaincy",
      "Colonial expansion",
      "Legal frameworks",
      "Ritual standardization",
      "Ideological formation",
      "International relations"
    ],
    historicalRefs: [
      {
        text: "The 1890 Imperial Rescript on Education established Shinto's role in national education.",
        source: "Educational Policy Documents"
      },
      {
        text: "Shrine regulations of 1906 further centralized religious administration.",
        source: "Administrative Records"
      }
    ],
    significance: "Institutional development created a comprehensive system linking state, education, and religion.",
    elements: [
      "Educational system",
      "Military structures",
      "Colonial offices",
      "Legal codes",
      "Administrative bodies",
      "Ritual manuals",
      "Training programs",
      "Propaganda materials"
    ],
    practices: [
      "School ceremonies",
      "Military rites",
      "Colonial rituals",
      "Administrative procedures",
      "Teacher training",
      "Official worship",
      "Public ceremonies",
      "Patriotic events"
    ],
    recommendedReading: [
      {
        title: "Shinto and the State",
        author: "Helen Hardacre",
        description: "Analysis of institutional development of State Shinto",
        amazonLink: "https://www.amazon.com/Shinto-State-Modern-Japan-Hardacre/dp/0691020527"
      }
    ]
  },
  {
    title: "Wartime Transformation",
    description: "Understanding State Shinto's role during Japan's wartime period (1931-1945).",
    keyPoints: [
      "Military mobilization",
      "Spiritual training",
      "Ideological control",
      "Colonial expansion",
      "Shrine construction",
      "Ritual intensification",
      "International policy",
      "Resistance movements"
    ],
    historicalRefs: [
      {
        text: "The Religious Organizations Law of 1939 strengthened state control over religion.",
        source: "Wartime Legislation"
      },
      {
        text: "Shrine attendance became mandatory as part of national mobilization.",
        source: "Home Ministry Records"
      }
    ],
    significance: "Wartime transformation represented the peak of State Shinto's influence and control.",
    elements: [
      "Military shrines",
      "War memorials",
      "Training centers",
      "Propaganda offices",
      "Colonial shrines",
      "Mobilization systems",
      "Control mechanisms",
      "Resistance documents"
    ],
    practices: [
      "War prayers",
      "Victory ceremonies",
      "Death rites",
      "Loyalty oaths",
      "Colonial worship",
      "Military training",
      "Spiritual exercises",
      "National ceremonies"
    ],
    recommendedReading: [
      {
        title: "Shinto and War",
        author: "Walter Skya",
        description: "Study of State Shinto during wartime Japan",
        amazonLink: "https://www.amazon.com/Japans-Holy-War-Radical-Ultranationalism/dp/0822344238"
      }
    ]
  },
  {
    title: "Dissolution and Legacy",
    description: "Examining the dismantling of State Shinto and its lasting impact on modern Japan.",
    keyPoints: [
      "Shinto Directive",
      "Constitutional separation",
      "Shrine privatization",
      "Religious freedom",
      "Political controversies",
      "Cultural preservation",
      "International relations",
      "Modern implications"
    ],
    historicalRefs: [
      {
        text: "The 1945 Shinto Directive formally separated religion and state.",
        source: "Occupation Documents"
      },
      {
        text: "The 1947 Constitution established religious freedom and state separation.",
        source: "Constitutional Records"
      }
    ],
    significance: "The dissolution of State Shinto fundamentally reshaped religion-state relations in modern Japan.",
    elements: [
      "Legal reforms",
      "Private shrines",
      "Religious organizations",
      "Cultural heritage",
      "Political debates",
      "Educational changes",
      "International perspectives",
      "Modern scholarship"
    ],
    practices: [
      "Private worship",
      "Cultural preservation",
      "Educational programs",
      "Political discussions",
      "Academic research",
      "International dialogue",
      "Memorial services",
      "Heritage management"
    ],
    recommendedReading: [
      {
        title: "After State Shinto",
        author: "Mark Mullins",
        description: "Analysis of post-war religious transformation in Japan",
        amazonLink: "https://www.amazon.com/Religion-Modern-Japan-Secularization-Society/dp/0195386205"
      }
    ]
  }
]

export default function StateHistoryPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>State Shinto History</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the development and impact of State Shinto from its formation through dissolution, examining its role in nationalism, wartime mobilization, and modern implications.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="formation" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="formation">Formation</TabsTrigger>
          <TabsTrigger value="institutional">Institutional</TabsTrigger>
          <TabsTrigger value="wartime">Wartime</TabsTrigger>
          <TabsTrigger value="dissolution">Dissolution</TabsTrigger>
        </TabsList>

        {stateContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({formation: true, institutional: true, wartime: true, dissolution: true})[index]}>
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
              title: "Imperial History",
              href: "/religion/shinto/history/imperial"
            },
            {
              title: "Modern History",
              href: "/religion/shinto/history/modern"
            },
            {
              title: "Medieval History",
              href: "/religion/shinto/history/medieval"
            }
          ]}
        />
      </div>
    </div>
  )
} 