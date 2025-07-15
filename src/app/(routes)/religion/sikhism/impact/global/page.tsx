import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Global Impact | Sikh Impact",
  description: "Explore the worldwide influence of Sikhism through its diaspora communities, international institutions, humanitarian work, and cultural contributions across continents.",
  keywords: "Sikh diaspora, global Sikhism, Sikh migration, international Gurdwaras, Khalsa Aid, Sikh humanitarian work, Sikh culture worldwide, Sikh organizations, global Sikh community, Sikh values, international impact, cross-cultural influence, Sikh institutions"
}

interface GlobalContent {
  title: string
  description: string
  keyDevelopments: string[]
  historicalContext: Array<{ text: string; source: string }>
  significance: string
  institutions: string[]
  impact: string[]
  challenges: string[]
  caseStudies?: Array<{
    title: string
    location: string
    description: string
    link: string
  }>
}

const globalContent: GlobalContent[] = [
  {
    title: "Early Global Presence (1800s-1947)",
    description: "The initial expansion of Sikhism beyond Punjab through migration, trade networks, and military service, establishing early diaspora communities and international connections.",
    keyDevelopments: [
      "Military service in British forces",
      "Trading communities in Southeast Asia",
      "Early settlements in East Africa",
      "Agricultural migration to Canada",
      "Student movements to Britain",
      "Business networks in Hong Kong",
      "Cultural exchange with China",
      "Presence in British colonies",
      "Maritime trade connections",
      "Educational pursuits abroad",
      "Professional migrations",
      "Political activism networks",
      "Religious missions",
      "Cultural preservation efforts",
      "Community organization abroad"
    ],
    historicalContext: [
      {
        text: "Sikh soldiers in British military service established communities across the Empire, from Hong Kong to East Africa.",
        source: "Studies in Colonial Military History"
      },
      {
        text: "Early Sikh traders established significant networks throughout Southeast Asia, particularly in Singapore and Malaysia.",
        source: "Research on Asian Trade Networks"
      },
      {
        text: "The pioneering migration to Canada in the early 1900s laid foundations for North American Sikh communities.",
        source: "Canadian Immigration History"
      },
      {
        text: "Student movements to Britain created intellectual and professional networks that would influence future migrations.",
        source: "British Asian Studies"
      }
    ],
    significance: "This period established the foundational patterns of Sikh migration and community formation abroad, creating networks and institutions that would support later expansions of the diaspora.",
    institutions: [
      "Early Gurdwaras abroad",
      "Military service networks",
      "Trading associations",
      "Student organizations",
      "Cultural societies",
      "Educational institutions",
      "Professional networks",
      "Community centers",
      "Political organizations",
      "Business associations",
      "Maritime networks",
      "Agricultural cooperatives",
      "Religious missions",
      "Cultural preservation groups",
      "Welfare organizations"
    ],
    impact: [
      "Cultural exchange",
      "Economic networks",
      "Educational pathways",
      "Professional opportunities",
      "Religious expansion",
      "Community building",
      "Political awareness",
      "Social integration",
      "Identity preservation",
      "International trade",
      "Military contributions",
      "Agricultural development",
      "Technological transfer",
      "Artistic influence",
      "Linguistic diversity"
    ],
    challenges: [
      "Cultural adaptation",
      "Religious preservation",
      "Language barriers",
      "Legal restrictions",
      "Social discrimination",
      "Economic hardships",
      "Political limitations",
      "Educational access",
      "Community cohesion",
      "Identity maintenance",
      "Family separation",
      "Professional recognition",
      "Religious freedom",
      "Cultural stereotypes",
      "Generational differences"
    ],
    caseStudies: [
      {
        title: "Hong Kong Sikh Community",
        location: "Hong Kong",
        description: "Development of early Sikh presence through military and police service",
        link: "https://example.com/hong-kong-sikhs"
      },
      {
        title: "Khalsa Diwan Society",
        location: "Vancouver, Canada",
        description: "Establishment of first Sikh institution in North America",
        link: "https://example.com/vancouver-sikhs"
      },
      {
        title: "East African Sikhs",
        location: "Kenya, Uganda, Tanzania",
        description: "Development of trading and professional communities in East Africa",
        link: "https://example.com/east-african-sikhs"
      }
    ]
  },
  {
    title: "Post-Independence Migration (1947-1984)",
    description: "The period of significant expansion of the Sikh diaspora through professional migration, family reunification, and economic opportunities, establishing major communities in Western countries.",
    keyDevelopments: [
      "Professional migration to UK",
      "Family reunification programs",
      "Student movements to USA",
      "Industrial worker migration",
      "Business expansion abroad",
      "Educational pursuits",
      "Agricultural settlement",
      "Technical expertise transfer",
      "Cultural institution building",
      "Community organization",
      "Political participation",
      "Economic development",
      "Social integration",
      "Religious infrastructure",
      "Youth education"
    ],
    historicalContext: [
      {
        text: "Post-war labor shortages in Britain led to significant Sikh migration, establishing major communities in industrial cities.",
        source: "British Immigration Studies"
      },
      {
        text: "Professional and educational opportunities in North America attracted skilled Sikh migrants.",
        source: "Studies in Migration Patterns"
      },
      {
        text: "Family reunification policies in Western countries enabled community consolidation.",
        source: "Immigration Policy Analysis"
      },
      {
        text: "Economic developments in Southeast Asia created opportunities for Sikh business expansion.",
        source: "Asian Economic History"
      }
    ],
    significance: "This period saw the establishment of major Sikh communities in Western countries, creating permanent institutional structures and influencing host societies.",
    institutions: [
      "Major urban Gurdwaras",
      "Cultural centers",
      "Educational institutions",
      "Professional associations",
      "Youth organizations",
      "Women's groups",
      "Business networks",
      "Political advocacy groups",
      "Media organizations",
      "Sports clubs",
      "Arts societies",
      "Language schools",
      "Welfare organizations",
      "Research institutions",
      "Community councils"
    ],
    impact: [
      "Professional integration",
      "Educational achievement",
      "Economic contribution",
      "Cultural influence",
      "Political participation",
      "Social integration",
      "Religious diversity",
      "Community development",
      "Youth engagement",
      "Women's advancement",
      "Business innovation",
      "Artistic expression",
      "Sports participation",
      "Media representation",
      "Academic contribution"
    ],
    challenges: [
      "Cultural preservation",
      "Identity maintenance",
      "Discrimination issues",
      "Educational access",
      "Professional barriers",
      "Housing challenges",
      "Language adaptation",
      "Religious accommodation",
      "Youth integration",
      "Gender equality",
      "Political representation",
      "Economic opportunities",
      "Social acceptance",
      "Family dynamics",
      "Intergenerational issues"
    ],
    caseStudies: [
      {
        title: "Southall Sikh Community",
        location: "London, UK",
        description: "Development of major urban Sikh community and institutions",
        link: "https://example.com/southall-sikhs"
      },
      {
        title: "California Sikh Farmers",
        location: "California, USA",
        description: "Agricultural settlement and economic development",
        link: "https://example.com/california-sikhs"
      },
      {
        title: "Malaysian Sikh Professionals",
        location: "Malaysia",
        description: "Professional integration and community development",
        link: "https://example.com/malaysian-sikhs"
      }
    ]
  },
  {
    title: "Global Expansion (1984-2000)",
    description: "A period of significant diaspora growth and diversification, marked by increased migration, institutional development, and growing international influence of Sikh communities.",
    keyDevelopments: [
      "Refugee movements",
      "Professional expansion",
      "Business development",
      "Educational achievement",
      "Cultural preservation",
      "Political engagement",
      "Media representation",
      "Youth leadership",
      "Women's empowerment",
      "Interfaith dialogue",
      "Social advocacy",
      "Economic innovation",
      "Artistic expression",
      "Sports excellence",
      "Technology adoption"
    ],
    historicalContext: [
      {
        text: "Political events in Punjab led to significant refugee movements and community expansion abroad.",
        source: "Diaspora Studies"
      },
      {
        text: "Economic opportunities in technology and professional sectors attracted skilled migrants.",
        source: "Migration Economics Research"
      },
      {
        text: "Cultural institutions developed to preserve identity while engaging with host societies.",
        source: "Cultural Integration Studies"
      },
      {
        text: "Political advocacy and civil rights movements emerged in diaspora communities.",
        source: "Political Activism Research"
      }
    ],
    significance: "This period marked the maturation of diaspora communities and their increasing influence in host countries, while developing new forms of cultural expression and identity.",
    institutions: [
      "Community organizations",
      "Civil rights groups",
      "Professional networks",
      "Educational foundations",
      "Cultural institutes",
      "Media platforms",
      "Youth organizations",
      "Women's associations",
      "Business chambers",
      "Sports federations",
      "Arts councils",
      "Research centers",
      "Advocacy groups",
      "Interfaith networks",
      "Technology hubs"
    ],
    impact: [
      "Civil rights advocacy",
      "Professional achievement",
      "Cultural influence",
      "Political representation",
      "Economic contribution",
      "Educational excellence",
      "Social justice work",
      "Interfaith dialogue",
      "Youth development",
      "Women's leadership",
      "Business innovation",
      "Artistic creation",
      "Sports achievement",
      "Media presence",
      "Technological advancement"
    ],
    challenges: [
      "Identity negotiation",
      "Discrimination response",
      "Cultural transmission",
      "Political representation",
      "Economic opportunity",
      "Educational access",
      "Gender equality",
      "Youth engagement",
      "Community cohesion",
      "Religious freedom",
      "Media portrayal",
      "Professional advancement",
      "Social integration",
      "Cultural preservation",
      "Generational gaps"
    ],
    caseStudies: [
      {
        title: "Silicon Valley Sikhs",
        location: "California, USA",
        description: "Professional achievement and community development in technology sector",
        link: "https://example.com/silicon-valley-sikhs"
      },
      {
        title: "Vancouver Sikh Community",
        location: "British Columbia, Canada",
        description: "Political engagement and institutional development",
        link: "https://example.com/vancouver-community"
      },
      {
        title: "Australian Sikh Heritage",
        location: "Australia",
        description: "Cultural preservation and community building",
        link: "https://example.com/australian-sikhs"
      }
    ]
  },
  {
    title: "Contemporary Global Presence (2000-Present)",
    description: "The current era of global Sikh influence, characterized by technological innovation, humanitarian work, cultural exchange, and increasing international recognition of Sikh contributions.",
    keyDevelopments: [
      "Digital innovation",
      "Humanitarian initiatives",
      "Environmental leadership",
      "Cultural exchange",
      "Professional excellence",
      "Political engagement",
      "Educational innovation",
      "Social justice work",
      "Interfaith leadership",
      "Youth empowerment",
      "Women's advancement",
      "Business innovation",
      "Artistic achievement",
      "Sports excellence",
      "Global networking"
    ],
    historicalContext: [
      {
        text: "Digital technology has transformed global Sikh connectivity and cultural expression.",
        source: "Digital Diaspora Studies"
      },
      {
        text: "Humanitarian organizations like Khalsa Aid have demonstrated Sikh principles globally.",
        source: "Humanitarian Impact Research"
      },
      {
        text: "Environmental initiatives have shown Sikh leadership in sustainability.",
        source: "Environmental Leadership Studies"
      },
      {
        text: "Cultural exchange programs have increased international understanding of Sikhism.",
        source: "Cultural Exchange Research"
      }
    ],
    significance: "This period represents the full emergence of global Sikh influence through humanitarian work, technological innovation, cultural exchange, and leadership in various fields.",
    institutions: [
      "Digital platforms",
      "Humanitarian organizations",
      "Environmental groups",
      "Cultural centers",
      "Professional networks",
      "Educational institutions",
      "Research institutes",
      "Media organizations",
      "Youth initiatives",
      "Women's networks",
      "Business innovations",
      "Arts collectives",
      "Sports organizations",
      "Technology startups",
      "Global foundations"
    ],
    impact: [
      "Digital innovation",
      "Humanitarian service",
      "Environmental leadership",
      "Cultural influence",
      "Professional achievement",
      "Educational excellence",
      "Social justice",
      "Political engagement",
      "Youth leadership",
      "Women's empowerment",
      "Business development",
      "Artistic expression",
      "Sports excellence",
      "Media presence",
      "Global networking"
    ],
    challenges: [
      "Digital divide",
      "Resource allocation",
      "Environmental action",
      "Cultural preservation",
      "Professional barriers",
      "Educational access",
      "Social justice",
      "Political representation",
      "Youth engagement",
      "Gender equality",
      "Economic opportunity",
      "Artistic support",
      "Sports development",
      "Media representation",
      "Global coordination"
    ],
    caseStudies: [
      {
        title: "Khalsa Aid International",
        location: "Global",
        description: "Humanitarian work and disaster relief based on Sikh principles",
        link: "https://example.com/khalsa-aid-global"
      },
      {
        title: "EcoSikh Movement",
        location: "Worldwide",
        description: "Environmental leadership and sustainability initiatives",
        link: "https://example.com/ecosikh-global"
      },
      {
        title: "Digital Sikh Network",
        location: "International",
        description: "Global connectivity and cultural preservation through technology",
        link: "https://example.com/digital-sikh"
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
            Explore the worldwide influence of Sikhism through its diaspora communities, international institutions, and global contributions. From early migration patterns to contemporary humanitarian work, discover how Sikh values and practices have shaped communities and created positive change across continents.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="early" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="early">Early Global</TabsTrigger>
          <TabsTrigger value="post-independence">Post-Independence</TabsTrigger>
          <TabsTrigger value="expansion">Global Expansion</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        {globalContent.map((content, index) => {
          const tabValues = ["early", "post-independence", "expansion", "contemporary"]
          return (
            <TabsContent key={index} value={tabValues[index]}>
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
                    <h3 className="font-semibold mb-3">Key Developments</h3>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {content.keyDevelopments.map((development, i) => (
                        <li key={i}>{development}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Historical Context</h3>
                    <div className="space-y-4">
                      {content.historicalContext.map((ref, i) => (
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
                    <h3 className="font-semibold mb-3">Institutions</h3>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {content.institutions.map((institution, i) => (
                        <li key={i}>{institution}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Impact Areas</h3>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {content.impact.map((area, i) => (
                        <li key={i}>{area}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Challenges</h3>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {content.challenges.map((challenge, i) => (
                        <li key={i}>{challenge}</li>
                      ))}
                    </ul>
                  </div>

                  {content.caseStudies && (
                    <div>
                      <h3 className="font-semibold mb-3">Case Studies</h3>
                      <div className="space-y-4">
                        {content.caseStudies.map((study, i) => (
                          <Card key={i} className="p-4">
                            <h4 className="font-semibold">{study.title}</h4>
                            <p className="text-sm text-muted-foreground">Location: {study.location}</p>
                            <p className="text-sm text-muted-foreground mt-2">{study.description}</p>
                            <Button asChild className="mt-4">
                              <a href={study.link} target="_blank" rel="noopener noreferrer">
                                Learn More
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
          )
        })}
      </Tabs>

      <RelatedTopics
        topics={[
          { title: "Social Impact", href: "/religion/sikhism/impact/social" },
          { title: "Modern Period", href: "/religion/sikhism/history/modern" },
          { title: "Contemporary", href: "/religion/sikhism/history/contemporary" }
        ]}
        className="mt-8"
      />
    </div>
  )
} 