import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Foundation Period | Sikh History",
  description: "Explore the foundation period of Sikhism, including Guru Nanak Dev Ji's life, early teachings, and the establishment of core Sikh principles and institutions.",
  keywords: "Guru Nanak Dev Ji, Sikh history, foundation period, Kartarpur, Udasis, early Sikhism, Sikh principles"
}

interface FoundationContent {
  title: string
  description: string
  keyPoints: string[]
  historicalRefs: Array<{ text: string; source: string }>
  significance: string
  developments: string[]
  recommendedReading?: Array<{
    title: string
    author: string
    description: string
    amazonLink: string
  }>
}

const foundationContent: FoundationContent[] = [
  {
    title: "Life of Guru Nanak Dev Ji (1469-1539)",
    description: "The foundation period begins with the birth and life of Guru Nanak Dev Ji, whose spiritual experiences and teachings established the fundamental principles of Sikhism.",
    keyPoints: [
      "Birth in Talwandi (now Nankana Sahib, Pakistan)",
      "Early spiritual inclinations and divine revelation",
      "The declaration: 'There is no Hindu, there is no Muslim'",
      "Four major spiritual journeys (Udasis)",
      "Establishment of Kartarpur as first Sikh community"
    ],
    historicalRefs: [
      {
        text: "Through the Guru's teachings, one understands that the Lord is everywhere, in everyone's heart.",
        source: "Janamsakhi tradition"
      },
      {
        text: "As fragrance abides in the flower, and reflection in the mirror, so does God dwell inside all.",
        source: "Guru Nanak Dev Ji, recorded in early manuscripts"
      }
    ],
    significance: "Guru Nanak Dev Ji's life and teachings laid the foundation for a new faith that emphasized equality, social justice, and direct connection with the Divine.",
    developments: [
      "Introduction of langar (community kitchen)",
      "Establishment of sangat (congregation)",
      "Creation of Mul Mantar",
      "Development of Gurmukhi script",
      "Institution of kirtan (devotional music)"
    ],
    recommendedReading: [
      {
        title: "Guru Nanak: His Life and Teachings",
        author: "Roopinder Singh",
        description: "Comprehensive biography of Guru Nanak Dev Ji and analysis of his foundational teachings",
        amazonLink: "https://www.amazon.com/Guru-Nanak-His-Life-Teachings/dp/8129137206/"
      }
    ]
  },
  {
    title: "Early Community Development (1500-1539)",
    description: "The formation and growth of the early Sikh community under Guru Nanak Dev Ji's guidance, establishing distinctive social and religious practices.",
    keyPoints: [
      "Formation of first Sikh congregation",
      "Development of unique worship practices",
      "Establishment of basic institutions",
      "Creation of first Sikh settlement",
      "Integration of work, worship, and service"
    ],
    historicalRefs: [
      {
        text: "The True Guru has established a perfect way of life.",
        source: "Early Sikh chronicles"
      },
      {
        text: "In the Guru's court, all are treated equally, regardless of caste or status.",
        source: "Contemporary accounts of Kartarpur"
      }
    ],
    significance: "The early community development established patterns of Sikh social organization and religious practice that would become fundamental to the faith.",
    developments: [
      "Regular congregational gatherings",
      "System of voluntary service (seva)",
      "Collective cooking and dining",
      "Morning and evening prayers",
      "Agricultural community model"
    ],
    recommendedReading: [
      {
        title: "Early Sikh Tradition",
        author: "W.H. McLeod",
        description: "Scholarly analysis of early Sikh community development and institutions",
        amazonLink: "https://www.amazon.com/Early-Sikh-Tradition-Critical-Janam-sakhis/dp/0198264674/"
      }
    ]
  },
  {
    title: "Doctrinal Foundations (1469-1539)",
    description: "The establishment of core Sikh theological and philosophical principles through Guru Nanak Dev Ji's teachings and compositions.",
    keyPoints: [
      "Concept of One Universal Creator",
      "Rejection of caste system",
      "Balance of spiritual and worldly duties",
      "Importance of truthful living",
      "Emphasis on devotional worship"
    ],
    historicalRefs: [
      {
        text: "Ik Onkar, Sat Naam, Karta Purakh...",
        source: "Mul Mantar, as recorded by Guru Nanak Dev Ji"
      },
      {
        text: "Practice truth, contentment and kindness; this is the most excellent way of life.",
        source: "Early compilations of Guru Nanak's teachings"
      }
    ],
    significance: "The doctrinal foundations established during this period continue to guide Sikh theology, ethics, and practice to the present day.",
    developments: [
      "Composition of sacred hymns",
      "Development of ethical framework",
      "Establishment of daily prayers",
      "Creation of distinctive religious identity",
      "Framework for future theological development"
    ],
    recommendedReading: [
      {
        title: "Sikhism: Philosophy and Culture",
        author: "Daljeet Singh",
        description: "Analysis of early Sikh philosophical and theological developments",
        amazonLink: "https://www.amazon.com/Sikhism-Philosophy-Culture-Daljeet-Singh/dp/8172052669/"
      }
    ]
  },
  {
    title: "Institutional Development (1520-1539)",
    description: "The establishment of key Sikh institutions and practices during the later years of Guru Nanak Dev Ji's life, particularly at Kartarpur.",
    keyPoints: [
      "Establishment of dharamsalas (places of worship)",
      "Organization of langar system",
      "Development of congregational practices",
      "Institution of succession system",
      "Creation of administrative structure"
    ],
    historicalRefs: [
      {
        text: "The Guru established Kartarpur as a model of ideal community living.",
        source: "Historical records of Kartarpur"
      },
      {
        text: "Before his passing, the Guru bowed to Bhai Lehna (later Guru Angad Dev), establishing the succession.",
        source: "Early Sikh chronicles"
      }
    ],
    significance: "The institutional developments of this period created the framework for Sikhism's growth and organization in subsequent centuries.",
    developments: [
      "Regular prayer gatherings",
      "Community service programs",
      "Educational initiatives",
      "Administrative systems",
      "Succession planning"
    ],
    recommendedReading: [
      {
        title: "The Making of Sikh Tradition",
        author: "Gurinder Singh Mann",
        description: "Detailed study of early Sikh institutional development and organization",
        amazonLink: "https://www.amazon.com/Making-Sikh-Scripture-Gurinder-Singh/dp/0195130243/"
      }
    ]
  }
]

export default function FoundationPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Foundation Period of Sikhism</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the foundational period of Sikhism, from Guru Nanak Dev Ji's birth through the establishment of core principles, practices, and institutions that would shape the religion's development.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="life" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="life">Guru Nanak's Life</TabsTrigger>
          <TabsTrigger value="community">Early Community</TabsTrigger>
          <TabsTrigger value="doctrinal">Doctrinal Foundations</TabsTrigger>
          <TabsTrigger value="institutional">Institutions</TabsTrigger>
        </TabsList>

        {foundationContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({life: true, community: true, doctrinal: true, institutional: true})[index]}>
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
                  <h3 className="font-semibold mb-3">Key Developments</h3>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    {content.developments.map((development, i) => (
                      <li key={i}>{development}</li>
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

      <RelatedTopics
        topics={[
          { title: "Period of the Gurus", href: "/religion/sikhism/history/gurus" },
          { title: "Sacred Scripture", href: "/religion/sikhism/theology/sacred-scripture" },
          { title: "The Guru Tradition", href: "/religion/sikhism/theology/guru-tradition" }
        ]}
        className="mt-8"
      />
    </div>
  )
} 