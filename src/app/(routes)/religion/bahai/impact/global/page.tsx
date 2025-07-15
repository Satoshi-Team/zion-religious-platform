import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Global Impact | Bahá'í Faith",
  description: "Explore the worldwide influence of the Bahá'í Faith through its international development work, community building efforts, and contributions to global discourse on peace, unity, and social progress.",
  keywords: "Bahá'í Global Impact, International Development, United Nations, Social Action, Community Building, Peace Building, Global Governance, Sustainable Development"
}

interface GlobalContent {
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

const globalContent: GlobalContent[] = [
  {
    title: "International Development and Social Action",
    description: "The Bahá'í Faith's systematic approach to international development and social transformation through community-based initiatives and global partnerships.",
    keyPoints: [
      "Sustainable development projects",
      "Grassroots empowerment",
      "Gender equality initiatives",
      "Environmental stewardship",
      "Economic justice programs",
      "Health and education",
      "Rural development",
      "Urban transformation"
    ],
    historicalRefs: [
      {
        text: "Evolution of Bahá'í social and economic development initiatives.",
        source: "For the Betterment of the World"
      },
      {
        text: "Framework for action in development outlined in messages.",
        source: "Universal House of Justice Messages"
      }
    ],
    significance: "Bahá'í development initiatives demonstrate the practical application of spiritual principles in addressing global challenges and promoting sustainable progress.",
    elements: [
      "Community consultation",
      "Capacity building",
      "Knowledge generation",
      "Institutional development",
      "Resource mobilization",
      "Partnership building",
      "Impact assessment",
      "Learning frameworks"
    ],
    practices: [
      "Project planning",
      "Community engagement",
      "Training programs",
      "Resource sharing",
      "Monitoring systems",
      "Evaluation methods",
      "Knowledge sharing",
      "Capacity assessment"
    ],
    recommendedReading: [
      {
        title: "For the Betterment of the World",
        author: "Bahá'í International Community",
        description: "Comprehensive overview of Bahá'í social and economic development",
        amazonLink: "https://www.amazon.com/Betterment-World-Development-Bahai-Community/dp/0877432759"
      }
    ]
  },
  {
    title: "United Nations and International Relations",
    description: "The Bahá'í International Community's engagement with the United Nations and other international bodies in promoting global peace, human rights, and sustainable development.",
    keyPoints: [
      "UN consultative status",
      "Human rights advocacy",
      "Peace initiatives",
      "Gender equality",
      "Climate action",
      "Sustainable development",
      "Religious freedom",
      "Youth empowerment"
    ],
    historicalRefs: [
      {
        text: "History of BIC engagement with the United Nations.",
        source: "Century of Light"
      },
      {
        text: "Development of international relations in modern era.",
        source: "The Bahá'í World"
      }
    ],
    significance: "The Bahá'í International Community's work at the UN demonstrates the Faith's commitment to global governance and international cooperation.",
    elements: [
      "Policy advocacy",
      "Statement submissions",
      "Conference participation",
      "Partnership building",
      "Research contributions",
      "Program development",
      "Consultation processes",
      "Youth involvement"
    ],
    practices: [
      "UN representation",
      "Policy development",
      "Statement preparation",
      "Partnership coordination",
      "Research publication",
      "Event organization",
      "Youth engagement",
      "Media relations"
    ],
    recommendedReading: [
      {
        title: "The Bahá'í International Community and Global Governance",
        author: "Michael Karlberg",
        description: "Analysis of BIC's contribution to international development",
        amazonLink: "https://www.amazon.com/Bahai-International-Community-Global-Governance/dp/0877432767"
      }
    ]
  },
  {
    title: "Global Community Building and Unity",
    description: "The worldwide efforts to build unified, diverse communities through spiritual and social development programs.",
    keyPoints: [
      "Community building",
      "Cultural integration",
      "Racial unity",
      "Interfaith dialogue",
      "Youth empowerment",
      "Family strengthening",
      "Social cohesion",
      "Moral education"
    ],
    historicalRefs: [
      {
        text: "Development of community building processes globally.",
        source: "Turning Point"
      },
      {
        text: "Evolution of unity initiatives worldwide.",
        source: "Five Year Plan Documents"
      }
    ],
    significance: "Global community building efforts demonstrate the practical application of Bahá'í principles in creating unified, diverse communities worldwide.",
    elements: [
      "Core activities",
      "Training institutes",
      "Youth programs",
      "Children's classes",
      "Study circles",
      "Devotional meetings",
      "Service projects",
      "Consultation forums"
    ],
    practices: [
      "Activity coordination",
      "Resource development",
      "Training facilitation",
      "Youth mentoring",
      "Children's education",
      "Community consultation",
      "Service planning",
      "Progress monitoring"
    ],
    recommendedReading: [
      {
        title: "Building Vibrant Communities",
        author: "Paul Lample",
        description: "Study of global community building processes",
        amazonLink: "https://www.amazon.com/Building-Vibrant-Communities-Paul-Lample/dp/0877432775"
      }
    ]
  },
  {
    title: "Global Discourse and Public Policy",
    description: "The Bahá'í Faith's contributions to global discourse on major issues facing humanity and its influence on public policy development.",
    keyPoints: [
      "Peace building",
      "Social discourse",
      "Policy development",
      "Global governance",
      "Climate action",
      "Gender equality",
      "Economic justice",
      "Education reform"
    ],
    historicalRefs: [
      {
        text: "Evolution of Bahá'í participation in global discourse.",
        source: "One Common Faith"
      },
      {
        text: "Development of policy contributions worldwide.",
        source: "BIC Documents"
      }
    ],
    significance: "Bahá'í contributions to global discourse help shape public policy and promote innovative solutions to global challenges.",
    elements: [
      "Policy papers",
      "Research studies",
      "Consultation forums",
      "Think tanks",
      "Academic discourse",
      "Media engagement",
      "Public seminars",
      "Publication series"
    ],
    practices: [
      "Research coordination",
      "Policy analysis",
      "Document preparation",
      "Forum organization",
      "Media relations",
      "Academic engagement",
      "Publication planning",
      "Impact assessment"
    ],
    recommendedReading: [
      {
        title: "Bahá'í Participation in Public Discourse",
        author: "Bahá'í International Community",
        description: "Analysis of Bahá'í contributions to global dialogue",
        amazonLink: "https://www.amazon.com/Bahai-Participation-Public-Discourse/dp/0877432783"
      }
    ]
  }
]

export default function GlobalPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Global Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the worldwide influence of the Bahá'í Faith through its international development work, community building efforts, and contributions to global discourse on peace, unity, and social progress.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="development" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="development">Development</TabsTrigger>
          <TabsTrigger value="international">International</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="discourse">Discourse</TabsTrigger>
        </TabsList>

        {globalContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({development: true, international: true, community: true, discourse: true})[index]}>
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
              title: "Impact on Social Development",
              href: "/religion/bahai/impact/social"
            },
            {
              title: "Community Life",
              href: "/religion/bahai/community/life"
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