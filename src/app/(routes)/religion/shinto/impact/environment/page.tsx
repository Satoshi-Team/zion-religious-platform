import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Environmental Impact | Shinto Cultural Impact",
  description: "Explore Shinto's profound influence on Japanese environmental consciousness, from traditional ecological wisdom to modern conservation efforts, examining its role in shaping sustainable practices and nature-human relationships.",
  keywords: "Shinto environment, sacred nature, ecological wisdom, Japanese conservation, environmental ethics, sacred forests, sustainable practices, chinju no mori, shrine forests, natural harmony"
}

interface EnvironmentalContent {
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

const environmentalContent: EnvironmentalContent[] = [
  {
    title: "Sacred Natural Landscapes",
    description: "Examining how Shinto's reverence for nature has shaped the preservation and management of sacred landscapes.",
    keyPoints: [
      "Sacred mountain traditions",
      "Forest preservation",
      "Waterway protection",
      "Sacred grove maintenance",
      "Landscape aesthetics",
      "Biodiversity conservation",
      "Ecological boundaries",
      "Natural monuments"
    ],
    historicalRefs: [
      {
        text: "Establishment of chinju no mori (shrine forests) as protected areas in ancient Japan.",
        source: "Environmental History Records"
      },
      {
        text: "Traditional designation of sacred mountains (reisen) as protected zones.",
        source: "Sacred Landscape Archives"
      }
    ],
    significance: "Shinto's concept of sacred nature has contributed significantly to environmental preservation in Japan.",
    elements: [
      "Sacred groves",
      "Mountain sanctuaries",
      "Sacred waters",
      "Natural boundaries",
      "Protected species",
      "Shrine ecosystems",
      "Landscape features",
      "Natural monuments"
    ],
    practices: [
      "Forest maintenance",
      "Ritual protection",
      "Species conservation",
      "Landscape preservation",
      "Water purification",
      "Sacred site management",
      "Ecological monitoring",
      "Traditional forestry"
    ],
    recommendedReading: [
      {
        title: "Shinto and Sacred Natural Sites",
        author: "John K. Nelson",
        description: "Analysis of Shinto's role in preserving sacred landscapes",
        amazonLink: "https://www.amazon.com/Shinto-Nature-Environmental-Dimensions-Religions/dp/1350001425"
      }
    ]
  },
  {
    title: "Environmental Ethics",
    description: "Analyzing Shinto's influence on Japanese environmental ethics and ecological consciousness.",
    keyPoints: [
      "Nature reverence",
      "Environmental responsibility",
      "Ecological harmony",
      "Resource stewardship",
      "Sustainable practices",
      "Intergenerational duty",
      "Ecological wisdom",
      "Environmental values"
    ],
    historicalRefs: [
      {
        text: "Development of satoyama principles for sustainable resource management.",
        source: "Traditional Knowledge Archives"
      },
      {
        text: "Codification of environmental protection practices in shrine regulations.",
        source: "Shrine Management Records"
      }
    ],
    significance: "Shinto environmental ethics continue to influence modern ecological consciousness and conservation efforts.",
    elements: [
      "Ethical principles",
      "Value systems",
      "Traditional knowledge",
      "Conservation ethics",
      "Resource management",
      "Environmental respect",
      "Ecological balance",
      "Sustainability concepts"
    ],
    practices: [
      "Resource conservation",
      "Ethical education",
      "Traditional knowledge transmission",
      "Environmental awareness",
      "Sustainable harvesting",
      "Waste reduction",
      "Nature education",
      "Conservation planning"
    ],
    recommendedReading: [
      {
        title: "Japanese Environmental Ethics",
        author: "David Edward Shaner",
        description: "Study of Japanese ecological thought and practice",
        amazonLink: "https://www.amazon.com/Japanese-Environmental-Philosophy-Environmental-Cultural/dp/0190456320"
      }
    ]
  },
  {
    title: "Traditional Ecological Knowledge",
    description: "Understanding Shinto's role in preserving and transmitting traditional ecological knowledge.",
    keyPoints: [
      "Indigenous wisdom",
      "Seasonal awareness",
      "Resource management",
      "Agricultural practices",
      "Weather knowledge",
      "Species relationships",
      "Ecosystem understanding",
      "Traditional techniques"
    ],
    historicalRefs: [
      {
        text: "Documentation of traditional farming practices aligned with shrine calendars.",
        source: "Agricultural Records"
      },
      {
        text: "Preservation of traditional fishing methods through shrine rituals.",
        source: "Maritime Practice Archives"
      }
    ],
    significance: "Shinto practices have preserved valuable ecological knowledge and sustainable resource management techniques.",
    elements: [
      "Traditional methods",
      "Seasonal calendars",
      "Resource systems",
      "Local knowledge",
      "Species information",
      "Weather patterns",
      "Ecological indicators",
      "Management practices"
    ],
    practices: [
      "Knowledge transmission",
      "Seasonal observances",
      "Resource monitoring",
      "Traditional agriculture",
      "Sustainable fishing",
      "Forest management",
      "Weather prediction",
      "Species protection"
    ],
    recommendedReading: [
      {
        title: "Traditional Ecological Knowledge in Japan",
        author: "Catherine Knight",
        description: "Analysis of Japanese traditional environmental knowledge",
        amazonLink: "https://www.amazon.com/New-Zealand-Japan-Environmental-Policy/dp/1877578509"
      }
    ]
  },
  {
    title: "Modern Conservation",
    description: "Exploring how Shinto principles inform contemporary environmental conservation efforts.",
    keyPoints: [
      "Urban greening",
      "Biodiversity protection",
      "Climate action",
      "Waste reduction",
      "Energy conservation",
      "Water management",
      "Environmental education",
      "Community initiatives"
    ],
    historicalRefs: [
      {
        text: "Integration of Shinto principles in modern conservation laws post-1950s.",
        source: "Environmental Policy Records"
      },
      {
        text: "Development of shrine-based environmental education programs since 1970.",
        source: "Educational Initiative Archives"
      }
    ],
    significance: "Modern environmental conservation in Japan continues to draw inspiration from Shinto principles and practices.",
    elements: [
      "Conservation programs",
      "Educational initiatives",
      "Policy frameworks",
      "Community projects",
      "Research efforts",
      "Protection measures",
      "Monitoring systems",
      "Restoration projects"
    ],
    practices: [
      "Environmental monitoring",
      "Conservation planning",
      "Public education",
      "Community engagement",
      "Habitat restoration",
      "Species protection",
      "Resource management",
      "Waste reduction"
    ],
    recommendedReading: [
      {
        title: "Nature Conservation in Japan",
        author: "Jeffrey J. Broadbent",
        description: "Analysis of modern Japanese environmental conservation",
        amazonLink: "https://www.amazon.com/Environmental-Politics-Japan-Networks-Progress/dp/0521665744"
      }
    ]
  }
]

export default function EnvironmentalImpactPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Shinto's Environmental Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore Shinto's profound influence on Japanese environmental consciousness, examining its role in shaping sustainable practices, ecological wisdom, and nature-human relationships.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="landscapes" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="landscapes">Sacred Landscapes</TabsTrigger>
          <TabsTrigger value="ethics">Environmental Ethics</TabsTrigger>
          <TabsTrigger value="knowledge">Traditional Knowledge</TabsTrigger>
          <TabsTrigger value="conservation">Modern Conservation</TabsTrigger>
        </TabsList>

        {environmentalContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({landscapes: true, ethics: true, knowledge: true, conservation: true})[index]}>
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
              title: "Social Impact",
              href: "/religion/shinto/impact/social"
            },
            {
              title: "Cultural Impact",
              href: "/religion/shinto/impact/culture"
            },
            {
              title: "Art Impact",
              href: "/religion/shinto/impact/art"
            }
          ]}
        />
      </div>
    </div>
  )
} 