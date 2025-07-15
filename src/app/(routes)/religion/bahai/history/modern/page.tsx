import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Modern History | Bahá'í Faith",
  description: "Explore the modern history of the Bahá'í Faith from 1957 to present, including the establishment of the Universal House of Justice, global expansion, and development of the Administrative Order.",
  keywords: "Modern Bahá'í History, Universal House of Justice, Hands of the Cause, Nine Year Plan, Five Year Plan, Institute Process, Core Activities, Ruhi Institute"
}

interface ModernContent {
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

const modernContent: ModernContent[] = [
  {
    title: "Transition and Formation (1957-1963)",
    description: "The critical period following the passing of Shoghi Effendi, the ministry of the Hands of the Cause, and the establishment of the Universal House of Justice.",
    keyPoints: [
      "Passing of Shoghi Effendi (1957)",
      "Ministry of the Hands of the Cause",
      "Completion of the Ten Year Crusade",
      "First Election of Universal House of Justice (1963)",
      "Completion of the International Archives Building",
      "Global expansion milestones",
      "Preservation of the Covenant",
      "Administrative transition"
    ],
    historicalRefs: [
      {
        text: "Details of the election of the Universal House of Justice in The Ministry of the Custodians.",
        source: "The Ministry of the Custodians"
      },
      {
        text: "Account of the Ten Year Crusade completion in The Bahá'í World volumes.",
        source: "The Bahá'í World, Vol. XIII"
      }
    ],
    significance: "This period demonstrated the resilience of the Bahá'í Administrative Order and established the foundation for future global development.",
    elements: [
      "Custodial leadership",
      "Electoral process",
      "Administrative continuity",
      "Global coordination",
      "Institutional development",
      "Community resilience",
      "Covenant protection",
      "Historical documentation"
    ],
    practices: [
      "Historical study",
      "Administrative service",
      "Electoral participation",
      "Institutional support",
      "Community building",
      "Archive preservation",
      "Leadership development",
      "Unity building"
    ],
    recommendedReading: [
      {
        title: "The Ministry of the Custodians",
        author: "Universal House of Justice",
        description: "Comprehensive account of the period between 1957-1963",
        amazonLink: "https://www.amazon.com/Ministry-Custodians-1957-1963-Account/dp/0853983364"
      }
    ]
  },
  {
    title: "Global Expansion (1963-1986)",
    description: "The systematic expansion of the Bahá'í Faith through a series of global plans under the guidance of the Universal House of Justice.",
    keyPoints: [
      "Nine Year Plan (1964-1973)",
      "Five Year Plan (1974-1979)",
      "Seven Year Plan (1979-1986)",
      "Development of World Center",
      "Construction of Seat of UHJ",
      "Continental Counsellors system",
      "Mass teaching campaigns",
      "Indigenous enrollment"
    ],
    historicalRefs: [
      {
        text: "Analysis of systematic growth in Century of Light.",
        source: "Century of Light"
      },
      {
        text: "Documentation of plans in Messages of the Universal House of Justice.",
        source: "Messages of the Universal House of Justice"
      }
    ],
    significance: "This era established the pattern of systematic global expansion and consolidation that would characterize the Faith's development.",
    elements: [
      "Systematic growth",
      "Administrative development",
      "Teaching campaigns",
      "Indigenous participation",
      "Institutional maturation",
      "Educational programs",
      "Property development",
      "Community consolidation"
    ],
    practices: [
      "Teaching activities",
      "Plan execution",
      "Community development",
      "Statistical reporting",
      "Property maintenance",
      "Educational programs",
      "Cultural integration",
      "Administrative service"
    ],
    recommendedReading: [
      {
        title: "Century of Light",
        author: "Universal House of Justice",
        description: "Analysis of the twentieth century and the Bahá'í Faith's development",
        amazonLink: "https://www.amazon.com/Century-Light-Universal-House-Justice/dp/0853984336"
      }
    ]
  },
  {
    title: "Institute Process (1986-2001)",
    description: "The development and implementation of systematic training institutes and the evolution of the core activities of community life.",
    keyPoints: [
      "Training Institute development",
      "Ruhi Institute emergence",
      "Core activities framework",
      "Six Year Plan (1986-1992)",
      "Holy Year celebrations (1992)",
      "Three Year Plan (1993-1996)",
      "Four Year Plan (1996-2000)",
      "Twelve Month Plan (2000-2001)"
    ],
    historicalRefs: [
      {
        text: "Development of training institutes in Turning Point.",
        source: "Turning Point"
      },
      {
        text: "Framework for action in Four Year Plan messages.",
        source: "Four Year Plan Messages"
      }
    ],
    significance: "This period established the educational framework that would enable sustainable growth and community development worldwide.",
    elements: [
      "Educational system",
      "Community development",
      "Systematic training",
      "Youth empowerment",
      "Service projects",
      "Study circles",
      "Children's classes",
      "Junior youth programs"
    ],
    practices: [
      "Institute coordination",
      "Tutor training",
      "Study circle facilitation",
      "Children's class teaching",
      "Junior youth animation",
      "Community service",
      "Resource development",
      "Capacity building"
    ],
    recommendedReading: [
      {
        title: "Turning Point",
        author: "Universal House of Justice",
        description: "Selected messages regarding the Four Year Plan",
        amazonLink: "https://www.amazon.com/Turning-Point-Selected-Messages-1996-2001/dp/0853984352"
      }
    ]
  },
  {
    title: "Intensive Growth (2001-Present)",
    description: "The current phase of systematic expansion and consolidation through cycles of growth and the cluster development process.",
    keyPoints: [
      "Five Year Plans framework",
      "Cluster development",
      "Growth programs",
      "Intensive Programs of Growth",
      "Social action initiatives",
      "Bicentenary celebrations",
      "Houses of Worship development",
      "Public discourse participation"
    ],
    historicalRefs: [
      {
        text: "Analysis of growth patterns in Ridván messages.",
        source: "Ridván Messages 2001-Present"
      },
      {
        text: "Framework for action in Five Year Plan guidance.",
        source: "Five Year Plan Messages"
      }
    ],
    significance: "This era represents the current phase of systematic growth and community building, integrating spiritual and social development.",
    elements: [
      "Cluster focus",
      "Cycles of growth",
      "Core activities",
      "Social action",
      "Public discourse",
      "Institutional capacity",
      "Community building",
      "Learning framework"
    ],
    practices: [
      "Cluster coordination",
      "Growth facilitation",
      "Activity multiplication",
      "Social action projects",
      "Public engagement",
      "Reflection meetings",
      "Planning gatherings",
      "Statistical analysis"
    ],
    recommendedReading: [
      {
        title: "Framework for Action",
        author: "Universal House of Justice",
        description: "Guidance for current phase of growth",
        amazonLink: "https://www.amazon.com/Framework-Action-Selected-Messages-2006-2016/dp/0877433445"
      }
    ]
  }
]

export default function ModernPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Modern History of the Bahá'í Faith</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the modern history of the Bahá'í Faith from 1957 to present, including the establishment of the Universal House of Justice, global expansion, and development of the Administrative Order.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="transition" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="transition">Transition</TabsTrigger>
          <TabsTrigger value="expansion">Expansion</TabsTrigger>
          <TabsTrigger value="institute">Institute</TabsTrigger>
          <TabsTrigger value="growth">Growth</TabsTrigger>
        </TabsList>

        {modernContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({transition: true, expansion: true, institute: true, growth: true})[index]}>
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
              title: "The Guardian",
              href: "/religion/bahai/history/guardian"
            },
            {
              title: "Universal House of Justice",
              href: "/religion/bahai/administration/uhj"
            },
            {
              title: "Administrative Order",
              href: "/religion/bahai/administration/order"
            }
          ]}
        />
      </div>
    </div>
  )
} 