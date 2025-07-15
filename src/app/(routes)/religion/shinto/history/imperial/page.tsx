import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Imperial History | Shinto History",
  description: "Explore the complex relationship between Shinto and Japanese imperialism, from the Meiji Restoration through the post-war period.",
  keywords: "State Shinto, kokka shinto, imperial cult, Meiji Restoration, emperor worship, nationalism, kokutai, imperial rituals, post-war Shinto, religious reform"
}

interface ImperialContent {
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

const imperialContent: ImperialContent[] = [
  {
    title: "Meiji Restoration and State Shinto",
    description: "Examining the transformation of Shinto into a state ideology during the Meiji period (1868-1912).",
    keyPoints: [
      "Separation of Buddhism and Shinto",
      "Creation of State Shinto system",
      "Imperial institution centralization",
      "Shrine reorganization",
      "National ideology formation",
      "Religious education policies",
      "Ritual standardization",
      "Nationalist interpretation"
    ],
    historicalRefs: [
      {
        text: "The Meiji government established State Shinto as the national ideology in 1868.",
        source: "Meiji Period Documents"
      },
      {
        text: "Shrines were reorganized into a hierarchical system under state control.",
        source: "Government Records"
      }
    ],
    significance: "The Meiji period transformed Shinto from a local religious tradition into a state-sponsored ideology supporting imperial rule.",
    elements: [
      "State shrines",
      "Imperial ceremonies",
      "National holidays",
      "Educational system",
      "Government bureaus",
      "Shrine hierarchy",
      "Religious policies",
      "Imperial symbols"
    ],
    practices: [
      "State rituals",
      "Emperor worship",
      "Shrine visits",
      "Patriotic ceremonies",
      "School rituals",
      "National celebrations",
      "Military rites",
      "Civil religion"
    ],
    recommendedReading: [
      {
        title: "State Shinto",
        author: "Helen Hardacre",
        description: "Comprehensive analysis of State Shinto development",
        amazonLink: "https://www.amazon.com/Shinto-State-1868-1988-Studies-Religion/dp/0691020525"
      }
    ]
  },
  {
    title: "Imperial Ideology Development",
    description: "Understanding the evolution of imperial ideology and its relationship with Shinto from the late Meiji to early Showa periods.",
    keyPoints: [
      "Kokutai doctrine",
      "Emperor divinity concept",
      "National essence theory",
      "Militaristic interpretation",
      "Educational indoctrination",
      "Shrine worship policies",
      "Imperial mythology",
      "Nationalist movements"
    ],
    historicalRefs: [
      {
        text: "The concept of kokutai became central to national ideology by the 1930s.",
        source: "Political Documents"
      },
      {
        text: "Imperial education edicts shaped religious and nationalist education.",
        source: "Educational Records"
      }
    ],
    significance: "Imperial ideology merged religious and political authority, making Shinto central to national identity.",
    elements: [
      "Imperial rescripts",
      "Nationalist texts",
      "Educational materials",
      "Military doctrine",
      "Shrine regulations",
      "Political theories",
      "Religious policies",
      "Propaganda materials"
    ],
    practices: [
      "Imperial worship",
      "Nationalist education",
      "Military ceremonies",
      "Political rituals",
      "Shrine observances",
      "Patriotic activities",
      "Youth indoctrination",
      "Public ceremonies"
    ],
    recommendedReading: [
      {
        title: "Emperor of Japan",
        author: "Herbert P. Bix",
        description: "Study of the imperial institution and ideology",
        amazonLink: "https://www.amazon.com/Emperor-Japan-Meiji-His-World/dp/0231123418"
      }
    ]
  },
  {
    title: "Wartime State Shinto",
    description: "Analyzing the role of State Shinto during Japan's imperial expansion and wartime period (1931-1945).",
    keyPoints: [
      "Military expansion",
      "Colonial policies",
      "Spiritual mobilization",
      "War propaganda",
      "Religious control",
      "Shrine expansion",
      "Ideological enforcement",
      "International impact"
    ],
    historicalRefs: [
      {
        text: "State Shinto was used to justify imperial expansion and war efforts.",
        source: "Wartime Documents"
      },
      {
        text: "Shrines were established in colonized territories as symbols of Japanese rule.",
        source: "Colonial Records"
      }
    ],
    significance: "Wartime State Shinto represented the culmination of religious nationalism and imperial ideology.",
    elements: [
      "War shrines",
      "Military rituals",
      "Colonial institutions",
      "Propaganda systems",
      "Educational controls",
      "Religious policies",
      "Imperial ceremonies",
      "Nationalist symbols"
    ],
    practices: [
      "War memorials",
      "Military rites",
      "Colonial worship",
      "Patriotic ceremonies",
      "Spiritual training",
      "Nationalist rituals",
      "Death rites",
      "Victory celebrations"
    ],
    recommendedReading: [
      {
        title: "Japan's Holy War",
        author: "Walter Skya",
        description: "Analysis of radical Shinto ultranationalism",
        amazonLink: "https://www.amazon.com/Japans-Holy-War-Radical-Ultranationalism/dp/0822344238"
      }
    ]
  },
  {
    title: "Post-War Transformation",
    description: "Examining the dismantling of State Shinto and its aftermath in post-war Japan.",
    keyPoints: [
      "Shinto Directive",
      "Religious freedom",
      "Emperor status change",
      "Shrine independence",
      "Constitutional separation",
      "Democratic reforms",
      "Cultural preservation",
      "Modern adaptations"
    ],
    historicalRefs: [
      {
        text: "The 1945 Shinto Directive separated religion from state control.",
        source: "Occupation Documents"
      },
      {
        text: "The Emperor's renunciation of divinity transformed imperial institution.",
        source: "Post-war Records"
      }
    ],
    significance: "Post-war reforms fundamentally changed the relationship between Shinto, state, and society.",
    elements: [
      "Constitutional law",
      "Religious freedom",
      "Shrine organizations",
      "Cultural heritage",
      "Democratic institutions",
      "Educational reforms",
      "Civil society",
      "International relations"
    ],
    practices: [
      "Private worship",
      "Cultural celebrations",
      "Educational programs",
      "Community events",
      "Historical preservation",
      "Interfaith dialogue",
      "Academic study",
      "Tourist activities"
    ],
    recommendedReading: [
      {
        title: "After the Imperial Turn",
        author: "John Breen",
        description: "Study of post-war transformation of Shinto institutions",
        amazonLink: "https://www.amazon.com/After-Imperial-Turn-Thinking-Through/dp/0822331233"
      }
    ]
  }
]

export default function ImperialHistoryPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Imperial History of Shinto</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the complex relationship between Shinto and Japanese imperialism, from the Meiji Restoration through the post-war period, including State Shinto, imperial ideology, and subsequent reforms.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="meiji" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="meiji">Meiji Era</TabsTrigger>
          <TabsTrigger value="ideology">Imperial Ideology</TabsTrigger>
          <TabsTrigger value="wartime">Wartime</TabsTrigger>
          <TabsTrigger value="postwar">Post-War</TabsTrigger>
        </TabsList>

        {imperialContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({meiji: true, ideology: true, wartime: true, postwar: true})[index]}>
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
              title: "Medieval History",
              href: "/religion/shinto/history/medieval"
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