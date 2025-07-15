import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Han Dynasty | Taoist History",
  description: "Explore Taoism during the Han Dynasty (206 BCE - 220 CE), examining the development of organized Taoism, Huang-Lao thought, and the integration of Taoist philosophy with statecraft.",
  keywords: "Han Dynasty Taoism, Huang-Lao, Yellow Emperor, Laozi deification, Zhang Daoling, Way of the Celestial Masters, Han syncretism, Chinese history"
}

interface HanContent {
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

const hanContent: HanContent[] = [
  {
    title: "Early Han Developments",
    description: "Examining the transformation of Taoism during the Western Han period (206 BCE - 9 CE).",
    keyPoints: [
      "Huang-Lao synthesis",
      "Imperial patronage",
      "Court Taoism",
      "Cosmological theories",
      "Political application",
      "Text compilation",
      "Ritual development",
      "Philosophical evolution"
    ],
    historicalRefs: [
      {
        text: "Emperor Wu's early support of Huang-Lao thought before adopting Confucianism.",
        source: "Records of the Grand Historian"
      },
      {
        text: "Discovery of the Mawangdui texts revealing early Han Taoist practices.",
        source: "Mawangdui Archaeological Findings"
      }
    ],
    significance: "The Early Han period saw the first systematic integration of Taoist thought with statecraft and imperial governance.",
    elements: [
      "Imperial rituals",
      "Court ceremonies",
      "Political theory",
      "Cosmological systems",
      "Administrative practices",
      "Religious elements",
      "Literary developments",
      "Philosophical synthesis"
    ],
    practices: [
      "Court divination",
      "Imperial ceremonies",
      "Administrative methods",
      "Ritual procedures",
      "Text preservation",
      "Scholarly study",
      "Political application",
      "Religious observances"
    ],
    recommendedReading: [
      {
        title: "The Huainanzi: A Guide to the Theory and Practice of Government in Early Han China",
        author: "John S. Major",
        description: "Translation and analysis of key Han Dynasty Taoist text",
        amazonLink: "https://www.amazon.com/Huainanzi-Theory-Practice-Government-Translations/dp/0231142048"
      }
    ]
  },
  {
    title: "Religious Organization",
    description: "Understanding the emergence of organized religious Taoism during the Eastern Han period.",
    keyPoints: [
      "Zhang Daoling",
      "Celestial Masters",
      "Religious hierarchy",
      "Community structure",
      "Ritual systems",
      "Healing practices",
      "Moral codes",
      "Social organization"
    ],
    historicalRefs: [
      {
        text: "Founding of the Way of the Celestial Masters by Zhang Daoling in 142 CE.",
        source: "History of the Later Han Dynasty"
      },
      {
        text: "Development of the first organized Taoist communities in Sichuan.",
        source: "Records of the Three Kingdoms"
      }
    ],
    significance: "The establishment of organized religious Taoism created enduring institutional structures and practices.",
    elements: [
      "Religious hierarchy",
      "Community rules",
      "Ritual systems",
      "Healing methods",
      "Moral teachings",
      "Social structures",
      "Administrative systems",
      "Religious texts"
    ],
    practices: [
      "Communal worship",
      "Healing rituals",
      "Confession practices",
      "Merit recording",
      "Dietary regulations",
      "Meditation methods",
      "Talismanic writing",
      "Community service"
    ],
    recommendedReading: [
      {
        title: "Early Daoist Scriptures",
        author: "Stephen R. Bokenkamp",
        description: "Study of early Taoist religious texts and practices",
        amazonLink: "https://www.amazon.com/Early-Daoist-Scriptures-Daozang/dp/0520219325"
      }
    ]
  },
  {
    title: "Intellectual Developments",
    description: "Analyzing the evolution of Taoist thought and its interaction with other traditions during the Han period.",
    keyPoints: [
      "Philosophical synthesis",
      "Buddhist influence",
      "Confucian integration",
      "Cosmological theories",
      "Medical developments",
      "Alchemical beginnings",
      "Literary traditions",
      "Scholarly debates"
    ],
    historicalRefs: [
      {
        text: "Integration of Yin-Yang theories with Taoist thought in the Han period.",
        source: "Han Dynasty Philosophical Texts"
      },
      {
        text: "Early interactions between Taoism and Buddhism during the Eastern Han.",
        source: "Buddhist-Taoist Exchange Records"
      }
    ],
    significance: "Han Dynasty intellectual developments established lasting paradigms for Chinese thought and culture.",
    elements: [
      "Philosophical systems",
      "Medical theories",
      "Alchemical concepts",
      "Literary forms",
      "Scholarly methods",
      "Synthetic thinking",
      "Cultural integration",
      "Theoretical frameworks"
    ],
    practices: [
      "Textual study",
      "Medical practice",
      "Alchemical experiments",
      "Literary composition",
      "Philosophical debate",
      "Theoretical research",
      "Cultural synthesis",
      "Knowledge transmission"
    ],
    recommendedReading: [
      {
        title: "To Become a God: Cosmology, Sacrifice, and Self-Divinization in Early China",
        author: "Michael J. Puett",
        description: "Analysis of Han Dynasty religious and philosophical thought",
        amazonLink: "https://www.amazon.com/Become-God-Self-Divinization-Harvard-Monographs/dp/0674016432"
      }
    ]
  },
  {
    title: "Social Impact",
    description: "Examining the influence of Taoism on Han Dynasty society and culture.",
    keyPoints: [
      "Popular practices",
      "Social movements",
      "Cultural influence",
      "Local traditions",
      "Family practices",
      "Community organization",
      "Economic aspects",
      "Educational impact"
    ],
    historicalRefs: [
      {
        text: "Yellow Turban Rebellion and its Taoist influences.",
        source: "Chronicles of the Later Han"
      },
      {
        text: "Integration of Taoist practices in local community life.",
        source: "Han Social History Records"
      }
    ],
    significance: "Taoist influences permeated all levels of Han society, shaping cultural practices and social structures.",
    elements: [
      "Popular beliefs",
      "Social structures",
      "Cultural practices",
      "Community norms",
      "Family traditions",
      "Economic patterns",
      "Educational methods",
      "Local customs"
    ],
    practices: [
      "Folk healing",
      "Community rituals",
      "Family ceremonies",
      "Local festivals",
      "Social organization",
      "Economic activities",
      "Educational programs",
      "Cultural preservation"
    ],
    recommendedReading: [
      {
        title: "Religion in Han China: A General Introduction",
        author: "Rafe de Crespigny",
        description: "Comprehensive study of religious life in Han Dynasty China",
        amazonLink: "https://www.amazon.com/Religion-China-Introduction-Asian-Studies/dp/9004156194"
      }
    ]
  }
]

export default function HanPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Han Dynasty Period in Taoist History</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the crucial Han Dynasty period (206 BCE - 220 CE) in Taoist history, examining the development of organized Taoism, Huang-Lao thought, and the integration of Taoist philosophy with statecraft and society.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="early" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="early">Early Han</TabsTrigger>
          <TabsTrigger value="religious">Religious</TabsTrigger>
          <TabsTrigger value="intellectual">Intellectual</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
        </TabsList>

        {hanContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({early: true, religious: true, intellectual: true, social: true})[index]}>
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
              title: "Classical Period",
              href: "/religion/taoism/history/classical"
            },
            {
              title: "Medieval Period",
              href: "/religion/taoism/history/medieval"
            },
            {
              title: "Huang-Lao School",
              href: "/religion/taoism/schools/huang-lao"
            }
          ]}
        />
      </div>
    </div>
  )
} 