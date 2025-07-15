import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Yin-Yang | Taoist Theology",
  description: "Explore the profound concept of Yin-Yang in Taoist theology, from its cosmological foundations to practical applications, examining its role in understanding duality, complementarity, and cyclical transformation.",
  keywords: "Yin-Yang, Taoist theology, duality, complementarity, balance, transformation, Chinese philosophy, cosmic forces, natural cycles, harmony, polarity, dynamic equilibrium"
}

interface YinYangContent {
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

const yinYangContent: YinYangContent[] = [
  {
    title: "Cosmological Foundation",
    description: "Understanding Yin-Yang as the fundamental pattern of cosmic differentiation and complementarity.",
    keyPoints: [
      "Primordial division",
      "Complementary forces",
      "Dynamic interplay",
      "Cosmic rhythm",
      "Universal pattern",
      "Creative tension",
      "Cyclical nature",
      "Holistic unity"
    ],
    historicalRefs: [
      {
        text: "Origin in the I Ching's concept of complementary forces in the universe.",
        source: "I Ching (Book of Changes)"
      },
      {
        text: "Development of Yin-Yang cosmology in the Han Dynasty's 'Huainanzi'.",
        source: "Huainanzi Philosophical Text"
      }
    ],
    significance: "Yin-Yang represents the fundamental pattern underlying all existence and transformation in the universe.",
    elements: [
      "Heaven (Yang)",
      "Earth (Yin)",
      "Light-Dark",
      "Active-Receptive",
      "Expanding-Contracting",
      "Rising-Descending",
      "Warming-Cooling",
      "Manifesting-Dissolving"
    ],
    practices: [
      "Cosmic observation",
      "Pattern recognition",
      "Cycle awareness",
      "Balance cultivation",
      "Polarity meditation",
      "Natural attunement",
      "Rhythmic awareness",
      "Unity contemplation"
    ],
    recommendedReading: [
      {
        title: "The Book of Balance and Harmony",
        author: "Thomas Cleary",
        description: "Classical translation of Taoist teachings on Yin-Yang harmony",
        amazonLink: "https://www.amazon.com/Book-Balance-Harmony-Thomas-Cleary/dp/1590302648"
      }
    ]
  },
  {
    title: "Natural Manifestations",
    description: "Examining how Yin-Yang manifests in natural phenomena and cycles.",
    keyPoints: [
      "Seasonal changes",
      "Day-night cycle",
      "Growth patterns",
      "Weather dynamics",
      "Ecological balance",
      "Life cycles",
      "Geographic features",
      "Environmental harmony"
    ],
    historicalRefs: [
      {
        text: "Classical observations of natural cycles in the 'Neijing Suwen'.",
        source: "Yellow Emperor's Classic of Medicine"
      },
      {
        text: "Taoist records of seasonal observations and their relationship to Yin-Yang.",
        source: "Traditional Almanacs"
      }
    ],
    significance: "Natural manifestations of Yin-Yang provide practical wisdom for understanding life's patterns and cycles.",
    elements: [
      "Summer-Winter",
      "Day-Night",
      "Growth-Rest",
      "Heat-Cold",
      "Movement-Stillness",
      "Action-Receptivity",
      "Expression-Conservation",
      "Transformation-Preservation"
    ],
    practices: [
      "Nature observation",
      "Seasonal alignment",
      "Cyclic awareness",
      "Environmental harmony",
      "Weather wisdom",
      "Growth understanding",
      "Pattern recognition",
      "Ecological balance"
    ],
    recommendedReading: [
      {
        title: "The Way of Heaven",
        author: "Yi-Fu Tuan",
        description: "Study of natural patterns in Chinese thought",
        amazonLink: "https://www.amazon.com/Way-Heaven-Introduction-Chinese-Thought/dp/0520207998"
      }
    ]
  },
  {
    title: "Human Application",
    description: "Understanding how Yin-Yang principles apply to human life and cultivation.",
    keyPoints: [
      "Body-mind harmony",
      "Emotional balance",
      "Social relationships",
      "Personal development",
      "Health maintenance",
      "Activity-rest cycles",
      "Learning-practice",
      "Inner-outer alignment"
    ],
    historicalRefs: [
      {
        text: "Development of Taoist internal practices based on Yin-Yang principles.",
        source: "Internal Cultivation Texts"
      },
      {
        text: "Integration of Yin-Yang theory in traditional Chinese medicine.",
        source: "Medical Classics"
      }
    ],
    significance: "Yin-Yang understanding enables harmonious living and personal cultivation.",
    elements: [
      "Activity-Rest",
      "Exertion-Recovery",
      "Expression-Reflection",
      "Social-Solitary",
      "Learning-Integration",
      "Strength-Flexibility",
      "Discipline-Spontaneity",
      "External-Internal"
    ],
    practices: [
      "Balanced living",
      "Health cultivation",
      "Relationship harmony",
      "Energy management",
      "Emotional balance",
      "Physical practice",
      "Mental cultivation",
      "Social integration"
    ],
    recommendedReading: [
      {
        title: "The Living I Ching",
        author: "Deng Ming-Dao",
        description: "Using ancient wisdom for practical insights",
        amazonLink: "https://www.amazon.com/Living-Ching-Using-Ancient-Practical/dp/0060850027"
      }
    ]
  },
  {
    title: "Contemporary Understanding",
    description: "Exploring modern interpretations and applications of Yin-Yang principles.",
    keyPoints: [
      "Systems thinking",
      "Psychological balance",
      "Organizational dynamics",
      "Scientific parallels",
      "Cultural integration",
      "Modern medicine",
      "Environmental wisdom",
      "Social harmony"
    ],
    historicalRefs: [
      {
        text: "Integration of Yin-Yang concepts in modern systems theory.",
        source: "Contemporary Research Literature"
      },
      {
        text: "Application of Yin-Yang principles in modern Chinese medicine.",
        source: "Modern TCM Studies"
      }
    ],
    significance: "Yin-Yang principles offer valuable insights for addressing contemporary challenges.",
    elements: [
      "Analysis-Synthesis",
      "Innovation-Tradition",
      "Technology-Nature",
      "Global-Local",
      "Progress-Sustainability",
      "Individual-Collective",
      "Efficiency-Balance",
      "Development-Conservation"
    ],
    practices: [
      "Holistic analysis",
      "Balanced development",
      "Sustainable planning",
      "Integrative medicine",
      "Cultural bridging",
      "Environmental management",
      "Social harmonization",
      "Personal growth"
    ],
    recommendedReading: [
      {
        title: "The Yin-Yang Complex",
        author: "Deng Ming-Dao",
        description: "Modern applications of ancient wisdom",
        amazonLink: "https://www.amazon.com/Scholar-Warrior-Introduction-Tao-Everyday/dp/0062502328"
      }
    ]
  }
]

export default function YinYangPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Yin-Yang in Taoist Theology</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the profound concept of Yin-Yang, examining its role as a fundamental pattern of cosmic differentiation, its manifestations in nature, applications in human life, and contemporary relevance.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="cosmological" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="cosmological">Cosmological</TabsTrigger>
          <TabsTrigger value="natural">Natural</TabsTrigger>
          <TabsTrigger value="human">Human</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        {yinYangContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({cosmological: true, natural: true, human: true, contemporary: true})[index]}>
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
              title: "Tao",
              href: "/religion/taoism/theology/tao"
            },
            {
              title: "Wu Wei",
              href: "/religion/taoism/theology/wu-wei"
            },
            {
              title: "Te (Virtue)",
              href: "/religion/taoism/theology/te"
            }
          ]}
        />
      </div>
    </div>
  )
} 