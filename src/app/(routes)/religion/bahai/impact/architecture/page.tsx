import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Impact on Architecture | Bahá'í Faith",
  description: "Explore the profound influence of the Bahá'í Faith on architectural design, sacred spaces, and community buildings, from the development of Houses of Worship to innovative community spaces.",
  keywords: "Bahá'í Architecture, Houses of Worship, Mashriqu'l-Adhkár, Sacred Geometry, Bahá'í Gardens, World Center Buildings, Community Centers, Temple Design"
}

interface ArchitectureContent {
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

const architectureContent: ArchitectureContent[] = [
  {
    title: "Sacred Architecture Principles",
    description: "The fundamental principles and spiritual concepts that guide Bahá'í architectural design, particularly in Houses of Worship and sacred spaces.",
    keyPoints: [
      "Nine-sided geometric design",
      "Integration of light and nature",
      "Unity in diversity principle",
      "Sacred geometry applications",
      "Cultural adaptation",
      "Environmental harmony",
      "Spiritual symbolism",
      "Universal accessibility"
    ],
    historicalRefs: [
      {
        text: "Guidance on House of Worship design in Tablets of Bahá'u'lláh.",
        source: "Tablets of Bahá'u'lláh"
      },
      {
        text: "Architectural principles in Messages of Shoghi Effendi.",
        source: "Messages to the Bahá'í World"
      }
    ],
    significance: "Bahá'í architectural principles represent the Faith's teachings of unity, progressive revelation, and harmony between science and religion.",
    elements: [
      "Geometric patterns",
      "Natural light integration",
      "Garden integration",
      "Cultural elements",
      "Acoustic design",
      "Spatial harmony",
      "Sacred proportions",
      "Environmental features"
    ],
    practices: [
      "Design consultation",
      "Site selection",
      "Environmental assessment",
      "Community input",
      "Cultural integration",
      "Sustainability planning",
      "Accessibility design",
      "Maintenance programs"
    ],
    recommendedReading: [
      {
        title: "The Architecture of the Bahá'í Temple",
        author: "Earl H. Morris",
        description: "Detailed study of Bahá'í temple architecture and principles",
        amazonLink: "https://www.amazon.com/Architecture-Bahai-Temple-Earl-Morris/dp/0877432449"
      }
    ]
  },
  {
    title: "Houses of Worship Development",
    description: "The evolution and construction of Bahá'í Houses of Worship (Mashriqu'l-Adhkár) across continents, representing unity in diversity through architectural expression.",
    keyPoints: [
      "Continental temples",
      "Local houses of worship",
      "Design competitions",
      "Construction innovations",
      "Community involvement",
      "Indigenous influences",
      "Sustainable practices",
      "Acoustic engineering"
    ],
    historicalRefs: [
      {
        text: "Development of Mother Temple of the West in God Passes By.",
        source: "God Passes By"
      },
      {
        text: "Temple construction accounts in The Bahá'í World volumes.",
        source: "The Bahá'í World"
      }
    ],
    significance: "Each House of Worship represents the unity of religion while celebrating cultural diversity through architectural expression.",
    elements: [
      "Dome structures",
      "Garden design",
      "Prayer halls",
      "Auxiliary buildings",
      "Landscaping features",
      "Lighting systems",
      "Ventilation design",
      "Acoustic elements"
    ],
    practices: [
      "Construction planning",
      "Design adaptation",
      "Material selection",
      "Community consultation",
      "Environmental integration",
      "Maintenance systems",
      "Visitor services",
      "Educational programs"
    ],
    recommendedReading: [
      {
        title: "Temples of Light",
        author: "Julie Badiee",
        description: "Comprehensive study of Bahá'í Houses of Worship worldwide",
        amazonLink: "https://www.amazon.com/Temples-Light-Julie-Badiee/dp/0853983588"
      }
    ]
  },
  {
    title: "World Center Development",
    description: "The architectural development of the Bahá'í World Center in Haifa and 'Akká, including the terraced gardens, administrative buildings, and sacred sites.",
    keyPoints: [
      "Shrine architecture",
      "Terraced gardens",
      "Administrative buildings",
      "Arc project",
      "Historic preservation",
      "Infrastructure development",
      "Pilgrimage facilities",
      "Environmental planning"
    ],
    historicalRefs: [
      {
        text: "Development plans in Messages of the Universal House of Justice.",
        source: "Messages of the Universal House of Justice"
      },
      {
        text: "Historical development in Century of Light.",
        source: "Century of Light"
      }
    ],
    significance: "The World Center's architecture demonstrates the harmonious integration of spiritual, administrative, and environmental elements.",
    elements: [
      "Sacred structures",
      "Garden systems",
      "Office buildings",
      "Library facilities",
      "Archive spaces",
      "Visitor centers",
      "Support facilities",
      "Conservation areas"
    ],
    practices: [
      "Master planning",
      "Historic preservation",
      "Garden maintenance",
      "Facility management",
      "Visitor services",
      "Security systems",
      "Environmental protection",
      "Infrastructure maintenance"
    ],
    recommendedReading: [
      {
        title: "Bahá'í World Centre",
        author: "Douglas Martin",
        description: "Detailed study of the development and architecture of the World Center",
        amazonLink: "https://www.amazon.com/Bahai-World-Centre-Douglas-Martin/dp/0853983596"
      }
    ]
  },
  {
    title: "Community Spaces",
    description: "The development of Bahá'í community centers, educational facilities, and administrative buildings worldwide, reflecting principles of service and community building.",
    keyPoints: [
      "Hazíratu'l-Quds design",
      "Educational facilities",
      "Community centers",
      "Regional offices",
      "Training institutes",
      "Conference facilities",
      "Youth spaces",
      "Service buildings"
    ],
    historicalRefs: [
      {
        text: "Community building guidance in Framework for Action.",
        source: "Framework for Action"
      },
      {
        text: "Development principles in Five Year Plan messages.",
        source: "Five Year Plan Messages"
      }
    ],
    significance: "Community spaces embody the principle of service to humanity while fostering community development and educational advancement.",
    elements: [
      "Meeting spaces",
      "Educational rooms",
      "Office facilities",
      "Social areas",
      "Library spaces",
      "Children's areas",
      "Youth facilities",
      "Service centers"
    ],
    practices: [
      "Space planning",
      "Program development",
      "Facility management",
      "Community consultation",
      "Activity coordination",
      "Maintenance systems",
      "Safety protocols",
      "Accessibility planning"
    ],
    recommendedReading: [
      {
        title: "Building Communities",
        author: "Holly Hanson",
        description: "Study of Bahá'í community development and spaces",
        amazonLink: "https://www.amazon.com/Building-Communities-Holly-Hanson/dp/0853984379"
      }
    ]
  }
]

export default function ArchitecturePage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Impact on Architecture</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the profound influence of the Bahá'í Faith on architectural design, sacred spaces, and community buildings, from the development of Houses of Worship to innovative community spaces.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="principles" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="principles">Principles</TabsTrigger>
          <TabsTrigger value="temples">Temples</TabsTrigger>
          <TabsTrigger value="worldcenter">World Center</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        {architectureContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({principles: true, temples: true, worldcenter: true, community: true})[index]}>
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
              title: "Impact on Arts",
              href: "/religion/bahai/impact/arts"
            },
            {
              title: "World Center",
              href: "/religion/bahai/places/world-center"
            },
            {
              title: "Houses of Worship",
              href: "/religion/bahai/places/temples"
            }
          ]}
        />
      </div>
    </div>
  )
}