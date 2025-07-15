import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Medieval History | Shinto History",
  description: "Explore medieval Shinto history from the Heian through Muromachi periods, including Buddhist syncretism, shrine development, and warrior influence.",
  keywords: "medieval Shinto, Heian period, Kamakura period, Muromachi period, honji suijaku, shinbutsu shugo, shrine-temple complexes, warrior culture, kami worship"
}

interface MedievalContent {
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

const medievalContent: MedievalContent[] = [
  {
    title: "Heian Period Development",
    description: "Examining the evolution of Shinto during the Heian period (794-1185), marked by Buddhist syncretism and aristocratic influence.",
    keyPoints: [
      "Buddhist-Shinto fusion",
      "Aristocratic patronage",
      "Imperial ritual refinement",
      "Shrine-temple complexes",
      "Esoteric influences",
      "Kami theology development",
      "Court ceremony elaboration",
      "Provincial shrine networks"
    ],
    historicalRefs: [
      {
        text: "The honji suijaku theory established Buddhist deities as original forms of kami.",
        source: "Heian Religious Texts"
      },
      {
        text: "Court aristocrats developed elaborate ritual protocols for shrine worship.",
        source: "Court Documents"
      }
    ],
    significance: "The Heian period established lasting patterns of Buddhist-Shinto syncretism and aristocratic ritual practice.",
    elements: [
      "Shrine-temple architecture",
      "Ritual implements",
      "Buddhist scriptures",
      "Court protocols",
      "Sacred art",
      "Ceremonial dress",
      "Religious texts",
      "Ritual music"
    ],
    practices: [
      "Syncretic rituals",
      "Court ceremonies",
      "Buddhist services",
      "Shrine festivals",
      "Imperial rites",
      "Aristocratic worship",
      "Provincial ceremonies",
      "Esoteric practices"
    ],
    recommendedReading: [
      {
        title: "Heian Japan",
        author: "Mikael Adolphson",
        description: "Study of religion and society in Heian period Japan",
        amazonLink: "https://www.amazon.com/Heian-Japan-Centers-Peripheries-Harvard/dp/0674024052"
      }
    ]
  },
  {
    title: "Kamakura Transformations",
    description: "Understanding the changes in Shinto practice during the Kamakura period (1185-1333), influenced by warrior culture and new Buddhist movements.",
    keyPoints: [
      "Warrior patronage",
      "New Buddhist schools",
      "Shrine reorganization",
      "Military rituals",
      "Provincial developments",
      "Popular religious movements",
      "Shrine architecture",
      "Ritual adaptations"
    ],
    historicalRefs: [
      {
        text: "Warrior clans became prominent shrine patrons and ritual participants.",
        source: "Kamakura Records"
      },
      {
        text: "New Buddhist movements influenced Shinto theological understanding.",
        source: "Religious Documents"
      }
    ],
    significance: "The Kamakura period saw the integration of warrior culture and popular religious movements into Shinto practice.",
    elements: [
      "Warrior shrines",
      "Military banners",
      "Buddhist texts",
      "Ritual weapons",
      "Sacred armor",
      "Provincial temples",
      "Popular texts",
      "Religious art"
    ],
    practices: [
      "Warrior rituals",
      "Battle prayers",
      "Popular worship",
      "Shrine festivals",
      "Buddhist ceremonies",
      "Provincial rites",
      "Military ceremonies",
      "Folk practices"
    ],
    recommendedReading: [
      {
        title: "The Rise of Warriors",
        author: "Karl F. Friday",
        description: "Analysis of warrior society and religion in medieval Japan",
        amazonLink: "https://www.amazon.com/Samurai-Warfare-State-Medieval-Japan/dp/0415329620"
      }
    ]
  },
  {
    title: "Muromachi Innovations",
    description: "Analyzing religious developments during the Muromachi period (1333-1573), including new forms of shrine organization and ritual practice.",
    keyPoints: [
      "Shrine networks",
      "Ritual systemization",
      "Artistic developments",
      "Cultural synthesis",
      "Regional variations",
      "Popular traditions",
      "Theoretical refinements",
      "Institutional changes"
    ],
    historicalRefs: [
      {
        text: "Shrine networks developed sophisticated organizational structures.",
        source: "Shrine Records"
      },
      {
        text: "New forms of religious art and ritual emerged in major shrines.",
        source: "Cultural Documents"
      }
    ],
    significance: "The Muromachi period produced innovative forms of religious expression and organization in Shinto practice.",
    elements: [
      "Network structures",
      "Ritual manuals",
      "Religious art",
      "Shrine documents",
      "Cultural artifacts",
      "Administrative records",
      "Theoretical texts",
      "Popular literature"
    ],
    practices: [
      "Network rituals",
      "Artistic ceremonies",
      "Administrative rites",
      "Cultural festivals",
      "Regional customs",
      "Popular worship",
      "Theoretical study",
      "Institutional practices"
    ],
    recommendedReading: [
      {
        title: "Medieval Japanese Religion",
        author: "Richard Bowring",
        description: "Comprehensive study of religion in medieval Japan",
        amazonLink: "https://www.amazon.com/Medieval-Japanese-Religion-Richard-Bowring/dp/0824851507"
      }
    ]
  },
  {
    title: "Cultural Integration",
    description: "Exploring the integration of Shinto with various aspects of medieval Japanese culture and society.",
    keyPoints: [
      "Literary traditions",
      "Artistic expressions",
      "Social structures",
      "Political systems",
      "Economic relations",
      "Educational practices",
      "Cultural synthesis",
      "Regional diversity"
    ],
    historicalRefs: [
      {
        text: "Shinto themes became central to medieval Japanese literature and art.",
        source: "Cultural History"
      },
      {
        text: "Religious practices integrated with social and political structures.",
        source: "Social Records"
      }
    ],
    significance: "Medieval cultural integration created enduring patterns of Shinto expression in Japanese society.",
    elements: [
      "Literary works",
      "Artistic forms",
      "Social customs",
      "Political structures",
      "Economic systems",
      "Educational materials",
      "Cultural practices",
      "Regional traditions"
    ],
    practices: [
      "Literary composition",
      "Artistic creation",
      "Social ceremonies",
      "Political rituals",
      "Economic rites",
      "Educational training",
      "Cultural festivals",
      "Regional customs"
    ],
    recommendedReading: [
      {
        title: "Medieval Japanese Culture",
        author: "Barbara Ruch",
        description: "Analysis of cultural and religious integration in medieval Japan",
        amazonLink: "https://www.amazon.com/Medieval-Japanese-Culture-Barbara-Ruch/dp/0824818524"
      }
    ]
  }
]

export default function MedievalHistoryPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Medieval History of Shinto</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore medieval Shinto history from the Heian through Muromachi periods, examining Buddhist syncretism, shrine development, warrior influence, and cultural integration.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="heian" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="heian">Heian Era</TabsTrigger>
          <TabsTrigger value="kamakura">Kamakura Era</TabsTrigger>
          <TabsTrigger value="muromachi">Muromachi Era</TabsTrigger>
          <TabsTrigger value="culture">Cultural Integration</TabsTrigger>
        </TabsList>

        {medievalContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({heian: true, kamakura: true, muromachi: true, culture: true})[index]}>
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
              title: "Ancient History",
              href: "/religion/shinto/history/ancient"
            },
            {
              title: "Imperial History",
              href: "/religion/shinto/history/imperial"
            },
            {
              title: "Modern History",
              href: "/religion/shinto/history/modern"
            }
          ]}
        />
      </div>
    </div>
  )
} 