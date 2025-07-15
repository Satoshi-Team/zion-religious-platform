import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Social Impact | Sikh Impact",
  description: "Explore the profound social impact of Sikhism, including revolutionary social reforms, institutions like Langar and Sarbat Khalsa, principles of equality, and ongoing influence in modern society.",
  keywords: "Sikh social reform, Langar, Sangat, Pangat, Sarbat Khalsa, Sikh equality, Sikh institutions, social justice, Sewa, Dasvandh, Khalsa principles, Sikh values, community service, social welfare, anti-caste movement"
}

interface SocialContent {
  title: string
  description: string
  keyPrinciples: string[]
  historicalContext: Array<{ text: string; source: string }>
  significance: string
  institutions: string[]
  impact: string[]
  contemporaryRelevance: string[]
  caseStudies?: Array<{
    title: string
    organization: string
    description: string
    link: string
  }>
}

const socialContent: SocialContent[] = [
  {
    title: "Foundational Social Reforms (1469-1708)",
    description: "The revolutionary period of Sikh social reform established by Guru Nanak Dev Ji and developed through successive Gurus, challenging social hierarchies, establishing new institutions, and creating an egalitarian framework for society.",
    keyPrinciples: [
      "Rejection of caste discrimination",
      "Gender equality and women's empowerment",
      "Universal brotherhood/sisterhood",
      "Dignity of labor (Kirat Karni)",
      "Sharing with others (Vand Chakna)",
      "Communal kitchen (Langar)",
      "Collective decision-making (Sangat)",
      "Equal seating arrangement (Pangat)",
      "Social responsibility (Sewa)",
      "Economic sharing (Dasvandh)",
      "Education for all",
      "Protection of the weak",
      "Religious freedom",
      "Social justice",
      "Interfaith dialogue"
    ],
    historicalContext: [
      {
        text: "Guru Nanak Dev Ji established the institutions of Sangat and Pangat, revolutionizing social interaction across caste and class barriers.",
        source: "Early Sikh historical records"
      },
      {
        text: "The establishment of Langar by Guru Nanak and its expansion by successive Gurus created a practical demonstration of equality and sharing.",
        source: "Studies in Sikh institutions"
      },
      {
        text: "Guru Amar Das Ji's strong stance against caste discrimination and promotion of women's rights included opposing purdah and sati.",
        source: "Historical accounts of social reforms"
      },
      {
        text: "The formation of the Khalsa by Guru Gobind Singh Ji created a new social order based on equality and justice.",
        source: "Documentation of Khalsa formation"
      }
    ],
    significance: "This period established fundamental social principles that challenged existing hierarchies and created new institutions for social equality. These reforms continue to influence social movements and community organization worldwide.",
    institutions: [
      "Langar (Community Kitchen)",
      "Sangat (Spiritual Congregation)",
      "Pangat (Equal Seating)",
      "Gurdwara (Community Center)",
      "Khalsa Panth (Egalitarian Order)",
      "Sarbat Khalsa (Community Assembly)",
      "Guru ka Langar (Free Kitchen)",
      "Manji System (Regional Administration)",
      "Masand System (Community Organization)",
      "Dharamsalas (Community Centers)",
      "Educational Centers",
      "Healthcare Facilities",
      "Community Farms",
      "Welfare Centers",
      "Martial Training Centers"
    ],
    impact: [
      "Elimination of caste barriers",
      "Women's empowerment",
      "Educational access",
      "Economic sharing",
      "Community organization",
      "Social mobility",
      "Interfaith harmony",
      "Democratic practices",
      "Public health initiatives",
      "Agricultural reforms",
      "Trade networks",
      "Cultural integration",
      "Military organization",
      "Political awareness",
      "Environmental stewardship"
    ],
    contemporaryRelevance: [
      "Model for social equality",
      "Community service template",
      "Interfaith dialogue example",
      "Women's rights framework",
      "Democratic decision-making",
      "Economic sharing principles",
      "Educational access model",
      "Healthcare provision system",
      "Environmental consciousness",
      "Cultural integration approach",
      "Conflict resolution methods",
      "Community organization",
      "Social justice framework",
      "Leadership development",
      "Crisis response system"
    ],
    caseStudies: [
      {
        title: "Early Langar System",
        organization: "Various Historical Gurdwaras",
        description: "Implementation and impact of the communal kitchen system in early Sikh history",
        link: "https://example.com/langar-history"
      },
      {
        title: "Women's Empowerment",
        organization: "Early Sikh Community",
        description: "Historical examples of women's leadership and participation in Sikh society",
        link: "https://example.com/women-empowerment"
      },
      {
        title: "Anti-Caste Movements",
        organization: "Sikh Institutions",
        description: "Early efforts to eliminate caste discrimination through institutional reforms",
        link: "https://example.com/anti-caste"
      }
    ]
  },
  {
    title: "Institutional Development (1708-1849)",
    description: "The period of institutional consolidation and expansion, where Sikh social principles were implemented through organized structures and community initiatives, creating lasting models of social organization and welfare.",
    keyPrinciples: [
      "Community governance",
      "Collective decision-making",
      "Resource sharing",
      "Military organization",
      "Educational systems",
      "Healthcare provision",
      "Agricultural development",
      "Trade networks",
      "Cultural integration",
      "Social welfare",
      "Justice systems",
      "Environmental care",
      "Artistic development",
      "Scientific advancement",
      "Diplomatic relations"
    ],
    historicalContext: [
      {
        text: "The development of the Misl system created a unique model of collective leadership and resource sharing.",
        source: "Studies in Sikh political organization"
      },
      {
        text: "The establishment of Sarbat Khalsa as a democratic institution exemplified collective decision-making.",
        source: "Research on Sikh governance"
      },
      {
        text: "The development of educational and healthcare institutions created sustainable models of community welfare.",
        source: "Historical records of Sikh institutions"
      },
      {
        text: "The integration of different communities under Sikh rule demonstrated practical implementation of social harmony.",
        source: "Studies in Sikh administration"
      }
    ],
    significance: "This period demonstrated the practical implementation of Sikh social principles through organized institutions, creating models that continue to influence community organization and social welfare systems.",
    institutions: [
      "Sarbat Khalsa System",
      "Misl Organization",
      "Educational Institutions",
      "Healthcare Centers",
      "Agricultural Cooperatives",
      "Trade Guilds",
      "Military Academies",
      "Judicial Systems",
      "Welfare Organizations",
      "Cultural Centers",
      "Diplomatic Missions",
      "Environmental Projects",
      "Scientific Institutions",
      "Art Academies",
      "Sports Facilities"
    ],
    impact: [
      "Democratic governance",
      "Economic development",
      "Educational advancement",
      "Healthcare access",
      "Agricultural innovation",
      "Trade expansion",
      "Military organization",
      "Justice administration",
      "Cultural preservation",
      "Scientific progress",
      "Diplomatic relations",
      "Environmental protection",
      "Artistic expression",
      "Sports development",
      "Community welfare"
    ],
    contemporaryRelevance: [
      "Governance models",
      "Economic organization",
      "Educational systems",
      "Healthcare delivery",
      "Agricultural planning",
      "Trade networks",
      "Military structure",
      "Legal frameworks",
      "Cultural programs",
      "Scientific research",
      "Diplomatic protocols",
      "Environmental initiatives",
      "Artistic development",
      "Sports organization",
      "Welfare systems"
    ],
    caseStudies: [
      {
        title: "Sarbat Khalsa System",
        organization: "Historical Sikh Institutions",
        description: "Democratic decision-making process in historical Sikh governance",
        link: "https://example.com/sarbat-khalsa"
      },
      {
        title: "Misl Organization",
        organization: "Sikh Confederacies",
        description: "Collective leadership and resource sharing in military-political units",
        link: "https://example.com/misl-system"
      },
      {
        title: "Educational Institutions",
        organization: "Traditional Sikh Schools",
        description: "Development and impact of educational systems under Sikh administration",
        link: "https://example.com/education-system"
      }
    ]
  },
  {
    title: "Colonial and Reform Period (1849-1947)",
    description: "A period of adaptation and renewal, where Sikh social institutions responded to colonial challenges while maintaining core principles through reform movements and community organization.",
    keyPrinciples: [
      "Educational reform",
      "Social modernization",
      "Cultural preservation",
      "Religious identity",
      "Community organization",
      "Political awareness",
      "Economic development",
      "Women's education",
      "Healthcare modernization",
      "Agricultural reform",
      "Industrial development",
      "Urban planning",
      "Environmental awareness",
      "Scientific education",
      "Cultural exchange"
    ],
    historicalContext: [
      {
        text: "The Singh Sabha movement revitalized Sikh social institutions and educational systems.",
        source: "Studies in Sikh reform movements"
      },
      {
        text: "The establishment of modern educational institutions combined traditional values with contemporary knowledge.",
        source: "Research on Sikh education"
      },
      {
        text: "The development of new forms of community organization adapted to colonial conditions.",
        source: "Analysis of colonial period"
      },
      {
        text: "The emergence of modern social welfare institutions maintained traditional principles.",
        source: "Studies in social institutions"
      }
    ],
    significance: "This period demonstrated the adaptability of Sikh social principles to modern conditions while maintaining core values and creating new institutional forms.",
    institutions: [
      "Modern Schools",
      "Colleges",
      "Hospitals",
      "Social Organizations",
      "Political Institutions",
      "Economic Cooperatives",
      "Cultural Centers",
      "Research Institutions",
      "Publishing Houses",
      "Women's Organizations",
      "Youth Groups",
      "Professional Associations",
      "Agricultural Societies",
      "Industrial Units",
      "Urban Development Projects"
    ],
    impact: [
      "Educational modernization",
      "Healthcare development",
      "Social organization",
      "Political awareness",
      "Economic progress",
      "Cultural preservation",
      "Scientific advancement",
      "Women's empowerment",
      "Youth development",
      "Professional growth",
      "Agricultural improvement",
      "Industrial growth",
      "Urban development",
      "Environmental awareness",
      "International connections"
    ],
    contemporaryRelevance: [
      "Educational models",
      "Healthcare systems",
      "Social organizations",
      "Political participation",
      "Economic development",
      "Cultural programs",
      "Scientific research",
      "Women's initiatives",
      "Youth programs",
      "Professional networks",
      "Agricultural projects",
      "Industrial planning",
      "Urban design",
      "Environmental projects",
      "International relations"
    ],
    caseStudies: [
      {
        title: "Singh Sabha Movement",
        organization: "Reform Organizations",
        description: "Impact of reform movement on social and educational development",
        link: "https://example.com/singh-sabha"
      },
      {
        title: "Khalsa College",
        organization: "Educational Institutions",
        description: "Development of modern education while preserving traditional values",
        link: "https://example.com/khalsa-college"
      },
      {
        title: "Chief Khalsa Diwan",
        organization: "Community Organizations",
        description: "Role in social reform and community organization",
        link: "https://example.com/chief-khalsa-diwan"
      }
    ]
  },
  {
    title: "Contemporary Impact (1947-Present)",
    description: "The modern expression of Sikh social principles through global institutions, humanitarian work, and innovative approaches to community service and social justice.",
    keyPrinciples: [
      "Global humanitarian service",
      "Environmental stewardship",
      "Digital innovation",
      "Social justice advocacy",
      "Interfaith dialogue",
      "Educational excellence",
      "Healthcare access",
      "Disaster response",
      "Youth empowerment",
      "Women's leadership",
      "Economic empowerment",
      "Cultural exchange",
      "Scientific advancement",
      "Sustainable development",
      "Community building"
    ],
    historicalContext: [
      {
        text: "The global expansion of Sikh institutions has created new models of community service and social impact.",
        source: "Studies in global Sikh institutions"
      },
      {
        text: "Digital technology has transformed the reach and organization of Sikh social initiatives.",
        source: "Analysis of modern Sikh organizations"
      },
      {
        text: "Environmental and social justice movements have found new expression through Sikh principles.",
        source: "Research on contemporary movements"
      },
      {
        text: "International humanitarian work has demonstrated the universal applicability of Sikh social principles.",
        source: "Documentation of humanitarian projects"
      }
    ],
    significance: "This period shows the continuing relevance and adaptability of Sikh social principles to contemporary challenges, creating new models of community service and social impact.",
    institutions: [
      "International NGOs",
      "Educational Networks",
      "Healthcare Systems",
      "Environmental Organizations",
      "Digital Platforms",
      "Research Centers",
      "Cultural Institutes",
      "Youth Organizations",
      "Women's Networks",
      "Professional Associations",
      "Social Enterprises",
      "Media Organizations",
      "Think Tanks",
      "Advocacy Groups",
      "Community Centers"
    ],
    impact: [
      "Global humanitarian work",
      "Environmental protection",
      "Digital innovation",
      "Social justice",
      "Interfaith cooperation",
      "Educational access",
      "Healthcare provision",
      "Emergency response",
      "Youth development",
      "Women's advancement",
      "Economic development",
      "Cultural preservation",
      "Scientific research",
      "Policy influence",
      "Community building"
    ],
    contemporaryRelevance: [
      "Humanitarian models",
      "Environmental initiatives",
      "Digital solutions",
      "Justice frameworks",
      "Interfaith programs",
      "Educational innovations",
      "Healthcare systems",
      "Crisis response",
      "Youth engagement",
      "Women's leadership",
      "Economic models",
      "Cultural programs",
      "Research initiatives",
      "Policy development",
      "Community organization"
    ],
    caseStudies: [
      {
        title: "Khalsa Aid International",
        organization: "Global Humanitarian Organization",
        description: "Worldwide humanitarian work based on Sikh principles",
        link: "https://example.com/khalsa-aid"
      },
      {
        title: "EcoSikh",
        organization: "Environmental Organization",
        description: "Environmental initiatives inspired by Sikh teachings",
        link: "https://example.com/ecosikh"
      },
      {
        title: "Sikh Coalition",
        organization: "Civil Rights Organization",
        description: "Advocacy and community empowerment in modern context",
        link: "https://example.com/sikh-coalition"
      }
    ]
  }
]

export default function SocialPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Social Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the profound social impact of Sikhism through its revolutionary principles, institutions, and ongoing influence in modern society. From early reforms challenging social hierarchies to contemporary global humanitarian work, discover how Sikh values continue to shape positive social change.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="foundational" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="foundational">Foundational</TabsTrigger>
          <TabsTrigger value="institutional">Institutional</TabsTrigger>
          <TabsTrigger value="colonial">Colonial</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        {socialContent.map((content, index) => {
          const tabValues = ["foundational", "institutional", "colonial", "contemporary"]
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
                    <h3 className="font-semibold mb-3">Key Principles</h3>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {content.keyPrinciples.map((principle, i) => (
                        <li key={i}>{principle}</li>
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
                    <h3 className="font-semibold mb-3">Contemporary Relevance</h3>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      {content.contemporaryRelevance.map((item, i) => (
                        <li key={i}>{item}</li>
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
                            <p className="text-sm text-muted-foreground">By {study.organization}</p>
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
          { title: "Literature", href: "/religion/sikhism/impact/literature" },
          { title: "Music", href: "/religion/sikhism/impact/music" },
          { title: "Modern Period", href: "/religion/sikhism/history/modern" }
        ]}
        className="mt-8"
      />
    </div>
  )
} 