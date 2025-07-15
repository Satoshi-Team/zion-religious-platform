import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Ancient History | Shinto History",
  description: "Explore the ancient history of Shinto from prehistoric Japan through the Nara period, including early practices, mythology, and the formation of organized shrine worship.",
  keywords: "ancient Shinto, Jomon period, Yayoi period, Kofun period, Asuka period, Nara period, kojiki, nihon shoki, early shrines, prehistoric Japan, imperial rituals"
}

interface HistoryContent {
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

const historyContent: HistoryContent[] = [
  {
    title: "Prehistoric Origins",
    description: "Examining the earliest roots of Shinto practices in prehistoric Japan, from the Jomon period through the Yayoi period.",
    keyPoints: [
      "Jomon period practices (14,000-300 BCE)",
      "Yayoi period developments (300 BCE-300 CE)",
      "Early agricultural rituals",
      "Primitive shrine structures",
      "Nature worship practices",
      "Ancestor veneration",
      "Community ceremonies",
      "Archaeological evidence"
    ],
    historicalRefs: [
      {
        text: "Archaeological evidence shows ritual sites and objects dating back to the Jomon period.",
        source: "Archaeological records"
      },
      {
        text: "Rice cultivation brought new agricultural rituals during the Yayoi period.",
        source: "Historical agricultural records"
      }
    ],
    significance: "The prehistoric period established fundamental patterns of Japanese religious practice that would evolve into Shinto.",
    elements: [
      "Clay figurines",
      "Stone circles",
      "Ritual tools",
      "Sacred spaces",
      "Agricultural implements",
      "Burial practices",
      "Ceremonial vessels",
      "Natural features"
    ],
    practices: [
      "Nature worship",
      "Agricultural rites",
      "Burial ceremonies",
      "Seasonal festivals",
      "Community gatherings",
      "Ritual offerings",
      "Sacred dances",
      "Purification rites"
    ],
    recommendedReading: [
      {
        title: "Prehistoric Japan",
        author: "Keiji Imamura",
        description: "Comprehensive study of prehistoric Japanese religion and society",
        amazonLink: "https://www.amazon.com/Prehistoric-Japan-Survey-000-300-Studies/dp/0824818520"
      }
    ]
  },
  {
    title: "Formation Period",
    description: "Understanding the critical Kofun and Asuka periods (300-710 CE) when Shinto began to take organized form.",
    keyPoints: [
      "Kofun period developments",
      "Imperial ritual formation",
      "Chinese influences",
      "Korean connections",
      "Early shrine organization",
      "Political integration",
      "Religious hierarchy",
      "Writing system adoption"
    ],
    historicalRefs: [
      {
        text: "The imperial line established its religious authority through ritual practices.",
        source: "Early court records"
      },
      {
        text: "Organized shrine structures emerged during the Asuka period.",
        source: "Temple and shrine records"
      }
    ],
    significance: "This period saw the transformation of local practices into an organized system connected to political power.",
    elements: [
      "Burial mounds",
      "Imperial regalia",
      "Shrine structures",
      "Sacred texts",
      "Ritual implements",
      "Court ceremonies",
      "Religious offices",
      "Sacred territories"
    ],
    practices: [
      "Imperial rituals",
      "Court ceremonies",
      "Shrine worship",
      "State festivals",
      "Agricultural rites",
      "Purification ceremonies",
      "Ancestor worship",
      "Political ceremonies"
    ],
    recommendedReading: [
      {
        title: "Early Japan",
        author: "Jonathan Edward Kidder",
        description: "Analysis of religion and society in early Japan",
        amazonLink: "https://www.amazon.com/Early-Japanese-Art-Great-Tombs/dp/0295974487"
      }
    ]
  },
  {
    title: "Nara Period Developments",
    description: "Exploring the crucial Nara period (710-794 CE) when Shinto was first documented in written texts.",
    keyPoints: [
      "Kojiki compilation",
      "Nihon Shoki creation",
      "Buddhist influence",
      "Imperial ceremonies",
      "Shrine organization",
      "Mythological codification",
      "Political structure",
      "Religious synthesis"
    ],
    historicalRefs: [
      {
        text: "The Kojiki and Nihon Shoki were compiled to legitimize imperial rule through mythology.",
        source: "Nara period documents"
      },
      {
        text: "State support for shrines was systematized during this period.",
        source: "Administrative records"
      }
    ],
    significance: "The Nara period established the textual and institutional foundations of organized Shinto practice.",
    elements: [
      "Sacred texts",
      "Imperial records",
      "Shrine registers",
      "Buddhist temples",
      "Court documents",
      "Ritual manuals",
      "Administrative systems",
      "Religious artifacts"
    ],
    practices: [
      "Text compilation",
      "State ceremonies",
      "Shrine rituals",
      "Buddhist rites",
      "Imperial worship",
      "Festival organization",
      "Administrative duties",
      "Religious education"
    ],
    recommendedReading: [
      {
        title: "The Kojiki",
        author: "Donald L. Philippi",
        description: "Translation and analysis of Japan's earliest written text",
        amazonLink: "https://www.amazon.com/Kojiki-Records-Ancient-Matters-Classics/dp/0691014892"
      }
    ]
  },
  {
    title: "Early Texts and Mythology",
    description: "Analyzing the earliest written sources of Shinto mythology and practice.",
    keyPoints: [
      "Creation myths",
      "Divine genealogies",
      "Imperial origins",
      "Ritual instructions",
      "Mythological landscapes",
      "Sacred narratives",
      "Historical records",
      "Literary traditions"
    ],
    historicalRefs: [
      {
        text: "Early texts combined mythology, history, and political legitimacy.",
        source: "Literary analysis"
      },
      {
        text: "Oral traditions were preserved through careful textual compilation.",
        source: "Scholarly studies"
      }
    ],
    significance: "Early texts provided the mythological and doctrinal foundation for organized Shinto practice.",
    elements: [
      "Sacred texts",
      "Imperial records",
      "Ritual manuals",
      "Mythological accounts",
      "Poetry collections",
      "Historical chronicles",
      "Administrative documents",
      "Religious commentaries"
    ],
    practices: [
      "Text preservation",
      "Ritual recording",
      "Myth recitation",
      "Historical compilation",
      "Poetry composition",
      "Document copying",
      "Scholarly study",
      "Oral transmission"
    ],
    recommendedReading: [
      {
        title: "Ancient Japanese Mythology",
        author: "Michiko Y. Aoki",
        description: "Study of early Japanese mythological texts and traditions",
        amazonLink: "https://www.amazon.com/Ancient-Mythology-Japan-Religious-Traditions/dp/0521604281"
      }
    ]
  }
]

export default function AncientHistoryPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Ancient History of Shinto</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the ancient history of Shinto from prehistoric Japan through the Nara period, including early practices, mythology, and the formation of organized shrine worship.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="prehistoric" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="prehistoric">Prehistoric</TabsTrigger>
          <TabsTrigger value="formation">Formation</TabsTrigger>
          <TabsTrigger value="nara">Nara Period</TabsTrigger>
          <TabsTrigger value="texts">Early Texts</TabsTrigger>
        </TabsList>

        {historyContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({prehistoric: true, formation: true, nara: true, texts: true})[index]}>
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
              title: "Medieval History",
              href: "/religion/shinto/history/medieval"
            },
            {
              title: "Modern History",
              href: "/religion/shinto/history/modern"
            },
            {
              title: "Kami",
              href: "/religion/shinto/theology/kami"
            }
          ]}
        />
      </div>
    </div>
  )
}