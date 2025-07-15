import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Six Dynasties | Taoist History",
  description: "Explore Taoism during the Six Dynasties period (220-589 CE), examining the flourishing of religious Taoism, development of Shangqing and Lingbao traditions, and the synthesis with Buddhist thought.",
  keywords: "Six Dynasties Taoism, Shangqing, Lingbao, Ge Hong, Upper Clarity, Numinous Treasure, Chinese Buddhism, Taoist alchemy, medieval Taoism"
}

interface SixDynastiesContent {
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

const sixDynastiesContent: SixDynastiesContent[] = [
  {
    title: "Religious Developments",
    description: "Examining the major religious innovations and institutional developments during the Six Dynasties period.",
    keyPoints: [
      "Shangqing revelation",
      "Lingbao tradition",
      "Celestial Masters evolution",
      "Buddhist integration",
      "Scriptural codification",
      "Ritual systematization",
      "Meditation traditions",
      "Institutional growth"
    ],
    historicalRefs: [
      {
        text: "Yang Xi's revelations establishing the Shangqing tradition in 364-370 CE.",
        source: "Shangqing Revelatory Texts"
      },
      {
        text: "Compilation of the Lingbao scriptures in the late 4th-early 5th centuries.",
        source: "Lingbao Scriptural History"
      }
    ],
    significance: "The Six Dynasties period saw the emergence of major new Taoist schools and the systematization of religious practices.",
    elements: [
      "Revelatory texts",
      "Liturgical systems",
      "Meditation methods",
      "Ordination ranks",
      "Temple structures",
      "Scriptural canon",
      "Ritual procedures",
      "Institutional hierarchy"
    ],
    practices: [
      "Visualization methods",
      "Scriptural recitation",
      "Ritual performance",
      "Meditative techniques",
      "Talismanic writing",
      "Ordination ceremonies",
      "Temple worship",
      "Communal practices"
    ],
    recommendedReading: [
      {
        title: "The Taoist Canon: A Historical Companion to the Daozang",
        author: "Kristofer Schipper",
        description: "Comprehensive guide to Six Dynasties Taoist texts",
        amazonLink: "https://www.amazon.com/Taoist-Canon-Historical-Companion-Daozang/dp/0226738175"
      }
    ]
  },
  {
    title: "Alchemical Traditions",
    description: "Understanding the development of internal and external alchemy during the Six Dynasties period.",
    keyPoints: [
      "Ge Hong's works",
      "External alchemy",
      "Internal practices",
      "Immortality techniques",
      "Laboratory methods",
      "Meditation systems",
      "Dietary practices",
      "Theoretical foundations"
    ],
    historicalRefs: [
      {
        text: "Ge Hong's compilation of the Baopuzi in the 4th century CE.",
        source: "Master Who Embraces Simplicity"
      },
      {
        text: "Development of internal alchemical practices in Shangqing tradition.",
        source: "Upper Clarity Texts"
      }
    ],
    significance: "The Six Dynasties period established the classical foundations of Chinese alchemy in both its external and internal forms.",
    elements: [
      "Laboratory techniques",
      "Mineral processing",
      "Herbal knowledge",
      "Body energetics",
      "Spiritual cultivation",
      "Theoretical systems",
      "Practical methods",
      "Transmission lineages"
    ],
    practices: [
      "Elixir preparation",
      "Mineral refinement",
      "Breath cultivation",
      "Energy circulation",
      "Meditation methods",
      "Dietary regimens",
      "Laboratory work",
      "Inner transformation"
    ],
    recommendedReading: [
      {
        title: "Alchemy, Medicine, Religion in the China of A.D. 320",
        author: "James R. Ware",
        description: "Translation and study of Ge Hong's Baopuzi",
        amazonLink: "https://www.amazon.com/Alchemy-Medicine-Religion-China-D/dp/0262230275"
      }
    ]
  },
  {
    title: "Textual Traditions",
    description: "Analyzing the development and systematization of Taoist texts and scriptures during the Six Dynasties.",
    keyPoints: [
      "Shangqing corpus",
      "Lingbao scriptures",
      "Commentary traditions",
      "Ritual texts",
      "Medical works",
      "Alchemical manuals",
      "Meditation guides",
      "Transmission records"
    ],
    historicalRefs: [
      {
        text: "Tao Hongjing's compilation and organization of Shangqing texts.",
        source: "Declarations of the Perfected"
      },
      {
        text: "Systematization of Lingbao scriptures by Lu Xiujing.",
        source: "Lingbao Scriptural Catalogs"
      }
    ],
    significance: "The Six Dynasties period established the textual foundations for all subsequent Taoist traditions.",
    elements: [
      "Scriptural categories",
      "Commentary systems",
      "Transmission methods",
      "Textual hierarchy",
      "Ritual manuals",
      "Meditation texts",
      "Biographical works",
      "Technical treatises"
    ],
    practices: [
      "Text preservation",
      "Scriptural study",
      "Commentary writing",
      "Ritual compilation",
      "Manual preparation",
      "Text transmission",
      "Catalog creation",
      "Textual editing"
    ],
    recommendedReading: [
      {
        title: "The Shangqing School of Taoism",
        author: "Isabelle Robinet",
        description: "Study of early Shangqing texts and practices",
        amazonLink: "https://www.amazon.com/Shangqing-School-Taoism-Masters-Revelation/dp/0791409805"
      }
    ]
  },
  {
    title: "Cultural Integration",
    description: "Exploring the integration of Taoism with Chinese culture and other traditions during the Six Dynasties.",
    keyPoints: [
      "Buddhist interaction",
      "Literary influence",
      "Artistic development",
      "Social integration",
      "Political roles",
      "Elite practices",
      "Popular religion",
      "Cultural synthesis"
    ],
    historicalRefs: [
      {
        text: "Integration of Buddhist concepts in Lingbao scriptures.",
        source: "Comparative Religious Studies"
      },
      {
        text: "Taoist influence on Six Dynasties literature and art.",
        source: "Cultural History Records"
      }
    ],
    significance: "The Six Dynasties period saw the deep integration of Taoism with Chinese culture and other religious traditions.",
    elements: [
      "Artistic styles",
      "Literary forms",
      "Religious synthesis",
      "Social structures",
      "Political roles",
      "Cultural patterns",
      "Elite practices",
      "Popular customs"
    ],
    practices: [
      "Religious art",
      "Literary composition",
      "Ritual adaptation",
      "Social networking",
      "Political advising",
      "Cultural preservation",
      "Elite cultivation",
      "Popular worship"
    ],
    recommendedReading: [
      {
        title: "Buddhism and Taoism Face to Face",
        author: "Christine Mollier",
        description: "Study of religious interaction in medieval China",
        amazonLink: "https://www.amazon.com/Buddhism-Taoism-Face-Scripture-Medieval/dp/0824831691"
      }
    ]
  }
]

export default function SixDynastiesPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Six Dynasties Period in Taoist History</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the transformative Six Dynasties period (220-589 CE) in Taoist history, examining the flourishing of religious Taoism, development of new schools, and the synthesis with Buddhist thought.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="religious" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="religious">Religious</TabsTrigger>
          <TabsTrigger value="alchemical">Alchemical</TabsTrigger>
          <TabsTrigger value="textual">Textual</TabsTrigger>
          <TabsTrigger value="cultural">Cultural</TabsTrigger>
        </TabsList>

        {sixDynastiesContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({religious: true, alchemical: true, textual: true, cultural: true})[index]}>
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
              title: "Han Dynasty",
              href: "/religion/taoism/history/han"
            },
            {
              title: "Tang Dynasty",
              href: "/religion/taoism/history/tang"
            },
            {
              title: "Shangqing School",
              href: "/religion/taoism/schools/shangqing"
            }
          ]}
        />
      </div>
    </div>
  )
} 