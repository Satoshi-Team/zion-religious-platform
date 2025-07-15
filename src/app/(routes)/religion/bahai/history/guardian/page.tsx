import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "The Guardian | Bahá'í History",
  description: "Explore the life, ministry, and achievements of Shoghi Effendi, the Guardian of the Bahá'í Faith, who systematically developed its administrative order and guided its global expansion.",
  keywords: "Shoghi Effendi, Guardian Bahá'í Faith, Administrative Order, Ten Year Crusade, God Passes By, World Order Letters, Translation Work, Bahá'í World Center"
}

interface GuardianContent {
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

const guardianContent: GuardianContent[] = [
  {
    title: "Early Life and Appointment",
    description: "The formative years of Shoghi Effendi's life and his unexpected appointment as Guardian of the Bahá'í Faith in 'Abdu'l-Bahá's Will and Testament.",
    keyPoints: [
      "Birth in 'Akká (1897)",
      "Education at Oxford University",
      "Close relationship with 'Abdu'l-Bahá",
      "Appointment as Guardian (1921)",
      "Initial period of preparation",
      "Early challenges of leadership",
      "Development of administrative vision",
      "First communications to believers"
    ],
    historicalRefs: [
      {
        text: "Appointment details in the Will and Testament of 'Abdu'l-Bahá.",
        source: "Will and Testament of 'Abdu'l-Bahá"
      },
      {
        text: "Early life accounts in The Priceless Pearl.",
        source: "The Priceless Pearl"
      }
    ],
    significance: "Shoghi Effendi's appointment marked the beginning of the Administrative Order's systematic development and the Faith's global expansion.",
    elements: [
      "Divine appointment",
      "Leadership preparation",
      "Administrative vision",
      "Spiritual authority",
      "Educational background",
      "Family heritage",
      "Personal qualities",
      "Divine guidance"
    ],
    practices: [
      "Historical study",
      "Administrative training",
      "Leadership development",
      "Covenant education",
      "Character building",
      "Institutional service",
      "Youth programs",
      "Research projects"
    ],
    recommendedReading: [
      {
        title: "The Priceless Pearl",
        author: "Rúhíyyih Rabbani",
        description: "Comprehensive biography of Shoghi Effendi's life and ministry",
        amazonLink: "https://www.amazon.com/Priceless-Pearl-Ruhiyyih-Rabbani/dp/0853980055"
      }
    ]
  },
  {
    title: "Administrative Development",
    description: "Shoghi Effendi's systematic development of the Bahá'í Administrative Order and establishment of its institutions worldwide.",
    keyPoints: [
      "Formation of Local Assemblies",
      "National Assembly development",
      "Constitutional guidelines",
      "Election procedures",
      "Consultation principles",
      "Committee systems",
      "Feast institution",
      "Fund establishment"
    ],
    historicalRefs: [
      {
        text: "Administrative principles in World Order of Bahá'u'lláh letters.",
        source: "The World Order of Bahá'u'lláh"
      },
      {
        text: "Institutional development in Messages to America.",
        source: "Messages to America"
      }
    ],
    significance: "The Guardian's work established the framework for the Bahá'í Administrative Order that would guide the Faith's future development.",
    elements: [
      "Administrative principles",
      "Institutional structure",
      "Consultative process",
      "Electoral system",
      "Financial order",
      "Communication channels",
      "Organizational development",
      "Unity preservation"
    ],
    practices: [
      "Assembly service",
      "Committee work",
      "Consultation training",
      "Administrative study",
      "Institutional development",
      "Leadership training",
      "Community building",
      "Fund education"
    ],
    recommendedReading: [
      {
        title: "The World Order of Bahá'u'lláh",
        author: "Shoghi Effendi",
        description: "Collection of letters explaining the Administrative Order",
        amazonLink: "https://www.amazon.com/World-Order-Bahaullah-Selected-Letters/dp/1931847673"
      }
    ]
  },
  {
    title: "Writings and Translations",
    description: "Shoghi Effendi's monumental work in translating Bahá'í sacred texts and producing historical and interpretive works.",
    keyPoints: [
      "English translations",
      "God Passes By authorship",
      "World Order letters",
      "Historical narratives",
      "Interpretive works",
      "Literary style development",
      "Translation principles",
      "Documentation standards"
    ],
    historicalRefs: [
      {
        text: "Translation methodology described in letters to individuals.",
        source: "Letters from the Guardian"
      },
      {
        text: "Historical narrative development in God Passes By.",
        source: "God Passes By"
      }
    ],
    significance: "The Guardian's translations and writings established the standard for Bahá'í literature and historical documentation.",
    elements: [
      "Translation work",
      "Historical documentation",
      "Literary excellence",
      "Interpretive authority",
      "Narrative development",
      "Stylistic standards",
      "Research methodology",
      "Archival preservation"
    ],
    practices: [
      "Translation study",
      "Writing workshops",
      "Research training",
      "Literary analysis",
      "Historical research",
      "Documentation work",
      "Publishing projects",
      "Archive development"
    ],
    recommendedReading: [
      {
        title: "God Passes By",
        author: "Shoghi Effendi",
        description: "Comprehensive history of the first Bahá'í century",
        amazonLink: "https://www.amazon.com/God-Passes-By-Shoghi-Effendi/dp/1931847673"
      }
    ]
  },
  {
    title: "Global Development",
    description: "The Guardian's direction of the worldwide expansion of the Bahá'í Faith through systematic plans and development of the World Center.",
    keyPoints: [
      "Ten Year Crusade",
      "World Center development",
      "Shrine construction",
      "Gardens design",
      "Pioneer movement",
      "Teaching plans",
      "Property acquisition",
      "International institutions"
    ],
    historicalRefs: [
      {
        text: "Ten Year Crusade objectives in Messages to the Bahá'í World.",
        source: "Messages to the Bahá'í World"
      },
      {
        text: "World Center development in Citadel of Faith.",
        source: "Citadel of Faith"
      }
    ],
    significance: "Shoghi Effendi's global plans and World Center development established the foundation for the Faith's worldwide expansion.",
    elements: [
      "Global vision",
      "Systematic growth",
      "Physical development",
      "Architectural beauty",
      "Teaching expansion",
      "Geographic spread",
      "Institutional growth",
      "Cultural diversity"
    ],
    practices: [
      "Pioneer service",
      "Teaching work",
      "Property development",
      "Garden maintenance",
      "Architecture study",
      "Planning skills",
      "Project management",
      "Cultural integration"
    ],
    recommendedReading: [
      {
        title: "Messages to the Bahá'í World",
        author: "Shoghi Effendi",
        description: "Guidance for global expansion and development",
        amazonLink: "https://www.amazon.com/Messages-Bahai-World-1950-1957-Shoghi/dp/1931847673"
      }
    ]
  }
]

export default function GuardianPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>The Guardian of the Bahá'í Faith</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the life, ministry, and achievements of Shoghi Effendi, the Guardian of the Bahá'í Faith, who systematically developed its administrative order and guided its global expansion.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="early" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="early">Early Life</TabsTrigger>
          <TabsTrigger value="administrative">Administration</TabsTrigger>
          <TabsTrigger value="writings">Writings</TabsTrigger>
          <TabsTrigger value="development">Development</TabsTrigger>
        </TabsList>

        {guardianContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({early: true, administrative: true, writings: true, development: true})[index]}>
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
              title: "'Abdu'l-Bahá",
              href: "/religion/bahai/history/abdul-baha"
            },
            {
              title: "Administrative Order",
              href: "/religion/bahai/administration/order"
            },
            {
              title: "World Center",
              href: "/religion/bahai/places/world-center"
            }
          ]}
        />
      </div>
    </div>
  )
} 