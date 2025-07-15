import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Environmental Impact | Taoist Impact",
  description: "Explore Taoism's profound influence on environmental thought and practices, examining traditional ecological wisdom, sacred landscapes, conservation ethics, and modern environmental applications.",
  keywords: "Taoist Environmentalism, Sacred Nature, Ecological Wisdom, Environmental Ethics, Mountain Temples, Sacred Landscapes, Conservation, Traditional Ecological Knowledge"
}

interface EnvironmentContent {
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

const environmentContent: EnvironmentContent[] = [
  {
    title: "Sacred Landscapes",
    description: "Examining Taoism's conception of sacred natural spaces and their role in environmental preservation.",
    keyPoints: [
      "Mountain sanctuaries",
      "Sacred groves",
      "Water temples",
      "Natural altars",
      "Geological features",
      "Biodiversity preservation",
      "Ritual landscapes",
      "Environmental protection"
    ],
    historicalRefs: [
      {
        text: "Establishment of the Wudang Mountains as sacred Taoist sites during the Tang Dynasty.",
        source: "Sacred Mountains of China"
      },
      {
        text: "Traditional protection of sacred groves in Taoist temple complexes.",
        source: "Chinese Sacred Geography"
      }
    ],
    significance: "Taoist sacred landscapes have served as natural reserves, preserving biodiversity and ecological systems through religious protection.",
    elements: [
      "Mountain temples",
      "Sacred caves",
      "Holy springs",
      "Ancient forests",
      "Protected species",
      "Natural monuments",
      "Ritual spaces",
      "Ecological corridors"
    ],
    practices: [
      "Site preservation",
      "Ritual maintenance",
      "Species protection",
      "Landscape restoration",
      "Traditional management",
      "Educational programs",
      "Cultural tourism",
      "Research initiatives"
    ],
    recommendedReading: [
      {
        title: "Sacred Mountains: In Chinese Art",
        author: "John E. Wills Jr.",
        description: "Comprehensive study of China's sacred mountain traditions",
        amazonLink: "https://www.amazon.com/Sacred-Mountains-Chinese-Art-Wills/dp/0824820183"
      }
    ]
  },
  {
    title: "Environmental Ethics",
    description: "Analyzing Taoist philosophical principles regarding human-nature relationships and environmental stewardship.",
    keyPoints: [
      "Natural harmony",
      "Non-interference",
      "Ecological balance",
      "Sustainable living",
      "Resource conservation",
      "Species respect",
      "Environmental wisdom",
      "Ethical frameworks"
    ],
    historicalRefs: [
      {
        text: "Laozi's teachings on living in harmony with nature in the Tao Te Ching.",
        source: "Classical Taoist Texts"
      },
      {
        text: "Development of Taoist environmental ethics during the Song Dynasty.",
        source: "Chinese Environmental History"
      }
    ],
    significance: "Taoist environmental ethics provide a philosophical foundation for sustainable relationships between humans and nature.",
    elements: [
      "Natural law",
      "Ecological wisdom",
      "Minimal impact",
      "Harmonious living",
      "Resource ethics",
      "Species protection",
      "Environmental balance",
      "Sustainable practices"
    ],
    practices: [
      "Ethical guidelines",
      "Conservation methods",
      "Resource management",
      "Impact assessment",
      "Educational programs",
      "Community engagement",
      "Policy development",
      "Research integration"
    ],
    recommendedReading: [
      {
        title: "Environmental Ethics in Buddhism and Taoism",
        author: "Simon P. James",
        description: "Comparative study of Eastern environmental ethics",
        amazonLink: "https://www.amazon.com/Zen-Buddhism-Environmental-Ethics-Ashgate/dp/0754613674"
      }
    ]
  },
  {
    title: "Traditional Ecological Knowledge",
    description: "Exploring Taoist traditional knowledge systems regarding environmental management and conservation.",
    keyPoints: [
      "Herbal wisdom",
      "Weather patterns",
      "Agricultural cycles",
      "Water management",
      "Forest preservation",
      "Animal relationships",
      "Plant knowledge",
      "Ecosystem understanding"
    ],
    historicalRefs: [
      {
        text: "Documentation of Taoist ecological practices in the Baopuzi text.",
        source: "Traditional Chinese Sciences"
      },
      {
        text: "Development of Taoist agricultural almanacs during the Ming Dynasty.",
        source: "Chinese Agricultural History"
      }
    ],
    significance: "Taoist traditional ecological knowledge represents centuries of accumulated wisdom about sustainable environmental management.",
    elements: [
      "Herbal systems",
      "Weather wisdom",
      "Agricultural knowledge",
      "Water systems",
      "Forest management",
      "Wildlife protection",
      "Plant cultivation",
      "Ecosystem maintenance"
    ],
    practices: [
      "Knowledge preservation",
      "Practical application",
      "Teaching methods",
      "Documentation",
      "Modern integration",
      "Research collaboration",
      "Community sharing",
      "Adaptive management"
    ],
    recommendedReading: [
      {
        title: "Taoism and Ecology",
        author: "N.J. Girardot",
        description: "Study of Taoist ecological wisdom",
        amazonLink: "https://www.amazon.com/Daoism-Ecology-Ways-Within-Traditions/dp/0945454309"
      }
    ]
  },
  {
    title: "Modern Conservation",
    description: "Examining contemporary applications of Taoist environmental principles in conservation and sustainability.",
    keyPoints: [
      "Conservation projects",
      "Sustainable development",
      "Climate action",
      "Biodiversity protection",
      "Community initiatives",
      "Policy influence",
      "Research programs",
      "Global partnerships"
    ],
    historicalRefs: [
      {
        text: "Integration of Taoist principles in modern Chinese environmental policy.",
        source: "Contemporary Environmental Policy"
      },
      {
        text: "Establishment of Taoist Ecological Protection Networks in the 21st century.",
        source: "Modern Conservation Initiatives"
      }
    ],
    significance: "Taoist environmental principles continue to influence modern conservation efforts and sustainable development practices.",
    elements: [
      "Conservation strategies",
      "Policy frameworks",
      "Research programs",
      "Community projects",
      "Educational initiatives",
      "Partnership networks",
      "Monitoring systems",
      "Adaptation plans"
    ],
    practices: [
      "Project implementation",
      "Policy development",
      "Research conduct",
      "Community engagement",
      "Education programs",
      "Partnership building",
      "Impact assessment",
      "Adaptive management"
    ],
    recommendedReading: [
      {
        title: "Religion and Ecological Sustainability in China",
        author: "James Miller",
        description: "Analysis of religious environmentalism in modern China",
        amazonLink: "https://www.amazon.com/Religion-Ecological-Sustainability-Routledge-Environment/dp/0415855152"
      }
    ]
  }
]

export default function EnvironmentPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Taoist Impact on Environment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore Taoism's profound influence on environmental thought and practices, examining traditional ecological wisdom, sacred landscapes, conservation ethics, and modern environmental applications.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="sacred" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="sacred">Sacred Landscapes</TabsTrigger>
          <TabsTrigger value="ethics">Environmental Ethics</TabsTrigger>
          <TabsTrigger value="knowledge">Traditional Knowledge</TabsTrigger>
          <TabsTrigger value="conservation">Modern Conservation</TabsTrigger>
        </TabsList>

        {environmentContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({sacred: true, ethics: true, knowledge: true, conservation: true})[index]}>
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
              title: "Philosophy Impact",
              href: "/religion/taoism/impact/philosophy"
            },
            {
              title: "Modern Practice",
              href: "/religion/taoism/practice/modern"
            },
            {
              title: "Social Impact",
              href: "/religion/taoism/impact/social"
            }
          ]}
        />
      </div>
    </div>
  )
} 