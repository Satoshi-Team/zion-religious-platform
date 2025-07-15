import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Nature | Shinto Theology",
  description: "Explore the profound relationship between Shinto and nature, including sacred natural elements, environmental harmony, and the spiritual significance of the natural world.",
  keywords: "Shinto nature, sacred mountains, yorishiro, chinju no mori, sacred groves, natural kami, environmental harmony, seasonal cycles, natural elements, sacred landscapes"
}

interface NatureContent {
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

const natureContent: NatureContent[] = [
  {
    title: "Foundations of Nature in Shinto",
    description: "Understanding the fundamental relationship between Shinto theology and the natural world, including the sacred qualities of natural phenomena.",
    keyPoints: [
      "Nature as manifestation of kami",
      "Sacred landscapes and features",
      "Seasonal cycles and rituals",
      "Natural elements as yorishiro",
      "Environmental harmony",
      "Sacred mountains and waters",
      "Natural cycles and time",
      "Ecological wisdom"
    ],
    historicalRefs: [
      {
        text: "Ancient Japanese people recognized kami in natural phenomena and sacred landscapes.",
        source: "Early Shinto records"
      },
      {
        text: "Sacred groves (chinju no mori) have been preserved as dwelling places of kami since ancient times.",
        source: "Historical shrine documents"
      }
    ],
    significance: "Nature forms the foundation of Shinto worldview and provides the sacred spaces where kami dwell and manifest.",
    elements: [
      "Sacred mountains",
      "Ancient trees",
      "Natural springs",
      "Rock formations",
      "Sacred groves",
      "Rivers and waterfalls",
      "Natural materials",
      "Seasonal elements"
    ],
    practices: [
      "Nature veneration",
      "Sacred site visits",
      "Seasonal observances",
      "Environmental care",
      "Tree planting",
      "Water offerings",
      "Mountain pilgrimages",
      "Grove maintenance"
    ],
    recommendedReading: [
      {
        title: "Shinto and Ecology",
        author: "Rosemarie Bernard",
        description: "Study of the relationship between Shinto and natural environment",
        amazonLink: "https://www.amazon.com/Shinto-Ecology-Practice-Sacred-Nature/dp/0674127178"
      }
    ]
  },
  {
    title: "Sacred Natural Elements",
    description: "Exploration of specific natural elements and features that hold special significance in Shinto theology and practice.",
    keyPoints: [
      "Sacred mountains (yama)",
      "Ancient trees (shinboku)",
      "Sacred waters (mitarashi)",
      "Rock formations (iwakura)",
      "Sacred groves (chinju no mori)",
      "Natural boundaries",
      "Seasonal markers",
      "Wildlife and kami"
    ],
    historicalRefs: [
      {
        text: "Specific natural features have been recognized as yorishiro (objects capable of attracting kami) throughout history.",
        source: "Traditional shrine records"
      },
      {
        text: "The practice of marking sacred natural sites developed with the evolution of Shinto.",
        source: "Archaeological evidence"
      }
    ],
    significance: "Sacred natural elements serve as bridges between the human and divine realms, providing physical locations for spiritual connection.",
    elements: [
      "Mountain peaks",
      "Sacred trees",
      "Pure springs",
      "Sacred stones",
      "Forest groves",
      "Waterfalls",
      "Natural caves",
      "Unique landscapes"
    ],
    practices: [
      "Tree veneration",
      "Water purification",
      "Stone offerings",
      "Grove preservation",
      "Mountain worship",
      "Natural meditation",
      "Seasonal rites",
      "Environmental protection"
    ],
    recommendedReading: [
      {
        title: "Sacred Mountains of Japan",
        author: "H. Byron Earhart",
        description: "Detailed study of sacred mountains in Japanese religion",
        amazonLink: "https://www.amazon.com/Mount-Fuji-Sacred-Mountains-Japan/dp/0295993308"
      }
    ]
  },
  {
    title: "Environmental Harmony",
    description: "Understanding the Shinto principles of living in harmony with nature and their practical applications.",
    keyPoints: [
      "Ecological balance",
      "Sustainable practices",
      "Resource preservation",
      "Natural cycles",
      "Environmental ethics",
      "Human-nature relationship",
      "Traditional wisdom",
      "Conservation principles"
    ],
    historicalRefs: [
      {
        text: "Traditional Shinto practices emphasized sustainable resource use and environmental protection.",
        source: "Historical agricultural records"
      },
      {
        text: "Environmental harmony was central to community life and spiritual practice.",
        source: "Village records"
      }
    ],
    significance: "Environmental harmony represents the practical application of Shinto principles in maintaining balance with nature.",
    elements: [
      "Natural resources",
      "Local ecosystems",
      "Traditional knowledge",
      "Seasonal patterns",
      "Agricultural cycles",
      "Forest management",
      "Water systems",
      "Wildlife habitats"
    ],
    practices: [
      "Sustainable farming",
      "Forest conservation",
      "Water protection",
      "Waste reduction",
      "Resource cycling",
      "Traditional crafts",
      "Local sourcing",
      "Environmental education"
    ],
    recommendedReading: [
      {
        title: "Japanese Environmental Philosophy",
        author: "J. Baird Callicott",
        description: "Analysis of Japanese approaches to environmental ethics",
        amazonLink: "https://www.amazon.com/Japanese-Environmental-Philosophy-J-Callicott/dp/0190456320"
      }
    ]
  },
  {
    title: "Contemporary Nature Connection",
    description: "Modern interpretations and applications of Shinto nature principles in contemporary society and environmental practices.",
    keyPoints: [
      "Modern environmentalism",
      "Urban nature connection",
      "Conservation efforts",
      "Environmental education",
      "Technological balance",
      "Global perspectives",
      "Climate awareness",
      "Future sustainability"
    ],
    historicalRefs: [
      {
        text: "Traditional nature relationships adapt to modern environmental challenges.",
        source: "Contemporary studies"
      },
      {
        text: "Shinto principles inform modern environmental conservation efforts.",
        source: "Environmental reports"
      }
    ],
    significance: "Contemporary nature connection bridges traditional Shinto wisdom with modern environmental needs and challenges.",
    elements: [
      "Urban green spaces",
      "Conservation areas",
      "Educational facilities",
      "Technology integration",
      "Research programs",
      "Community projects",
      "Global networks",
      "Digital resources"
    ],
    practices: [
      "Urban gardening",
      "Conservation work",
      "Nature education",
      "Digital monitoring",
      "Community projects",
      "Global cooperation",
      "Research studies",
      "Environmental advocacy"
    ],
    recommendedReading: [
      {
        title: "Nature and Sacred Sites in Japan",
        author: "Aike P. Rots",
        description: "Modern analysis of sacred natural places in contemporary Japan",
        amazonLink: "https://www.amazon.com/Shinto-Nature-Sacred-Sites-Contemporary/dp/1350102830"
      }
    ]
  }
]

export default function NaturePage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Nature in Shinto</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the profound relationship between Shinto and nature, including sacred natural elements, environmental harmony, and the spiritual significance of the natural world in Shinto theology.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="foundations" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="foundations">Foundations</TabsTrigger>
          <TabsTrigger value="elements">Elements</TabsTrigger>
          <TabsTrigger value="harmony">Harmony</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        {natureContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({foundations: true, elements: true, harmony: true, contemporary: true})[index]}>
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
              title: "Kami",
              href: "/religion/shinto/theology/kami"
            },
            {
              title: "Sacred Space",
              href: "/religion/shinto/theology/sacred-space"
            },
            {
              title: "Purity",
              href: "/religion/shinto/theology/purity"
            }
          ]}
        />
      </div>
    </div>
  )
} 