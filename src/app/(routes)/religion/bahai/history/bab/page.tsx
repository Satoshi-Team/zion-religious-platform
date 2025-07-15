import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "The Báb | Bahá'í History",
  description: "Explore the life, mission, and martyrdom of the Báb, Herald of the Bahá'í Faith and founder of the Bábí religion, whose teachings prepared the way for Bahá'u'lláh.",
  keywords: "The Báb, Siyyid 'Alí-Muhammad, Bábí Faith, Declaration of the Báb, Báb's Martyrdom, Qayyúmu'l-Asmá, Persian Bayán, Letters of the Living, Shrine of the Báb"
}

interface BabContent {
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

const babContent: BabContent[] = [
  {
    title: "Early Life and Declaration",
    description: "The early life of the Báb (Siyyid 'Alí-Muhammad) and His momentous declaration as the Herald of a new religious dispensation.",
    keyPoints: [
      "Birth in Shiraz (1819)",
      "Merchant background and character",
      "Marriage to Khadíjih-Bagum",
      "Declaration to Mullá Husayn (1844)",
      "Letters of the Living",
      "First pilgrimage to Mecca",
      "Early followers and disciples",
      "Public proclamation of mission"
    ],
    historicalRefs: [
      {
        text: "The Dawn-Breakers' account of the Báb's declaration to Mullá Husayn.",
        source: "The Dawn-Breakers (Nabíl's Narrative)"
      },
      {
        text: "Shoghi Effendi's analysis in God Passes By.",
        source: "God Passes By"
      }
    ],
    significance: "The Báb's declaration marked the beginning of a new religious dispensation and the fulfillment of Islamic prophecies about the Promised Qa'im.",
    elements: [
      "Divine revelation",
      "Prophetic mission",
      "Spiritual transformation",
      "Historical significance",
      "Religious renewal",
      "Messianic fulfillment",
      "Social reform",
      "Spiritual leadership"
    ],
    practices: [
      "Commemoration of Declaration",
      "Study of early history",
      "Pilgrimage sites",
      "Historical preservation",
      "Educational programs",
      "Artistic expression",
      "Community celebrations",
      "Youth activities"
    ],
    recommendedReading: [
      {
        title: "The Dawn-Breakers",
        author: "Nabíl-i-A'zam",
        description: "Comprehensive early history of the Bábí Faith",
        amazonLink: "https://www.amazon.com/Dawn-Breakers-Nabil-Zarandi/dp/1931847673"
      }
    ]
  },
  {
    title: "Writings and Teachings",
    description: "The extensive writings, teachings, and doctrinal contributions of the Báb to religious thought and spiritual understanding.",
    keyPoints: [
      "Qayyúmu'l-Asmá revelation",
      "Persian Bayán",
      "Arabic Bayán",
      "Prayers and meditations",
      "Prophetic fulfillment",
      "Progressive revelation",
      "Divine unity",
      "Spiritual laws"
    ],
    historicalRefs: [
      {
        text: "The Báb's revelation of the Qayyúmu'l-Asmá, commentary on the Súrih of Joseph.",
        source: "Selections from the Writings of the Báb"
      },
      {
        text: "Comprehensive laws and teachings in the Persian Bayán.",
        source: "The Persian Bayán"
      }
    ],
    significance: "The Báb's writings established a new theological framework and prepared His followers for the coming of Bahá'u'lláh.",
    elements: [
      "Divine revelation",
      "Scriptural authority",
      "Spiritual laws",
      "Prophetic interpretation",
      "Religious renewal",
      "Mystical insights",
      "Social teachings",
      "Ethical principles"
    ],
    practices: [
      "Scripture study",
      "Prayer recitation",
      "Meditation practice",
      "Teaching work",
      "Scholarly research",
      "Translation efforts",
      "Educational programs",
      "Artistic inspiration"
    ],
    recommendedReading: [
      {
        title: "Selections from the Writings of the Báb",
        author: "The Báb",
        description: "Collection of the Báb's most significant writings",
        amazonLink: "https://www.amazon.com/Selections-Writings-Bab-Bahai-Publishing/dp/1931847673"
      }
    ]
  },
  {
    title: "Ministry and Persecution",
    description: "The six-year ministry of the Báb, marked by rapid spread of His teachings and intense persecution of His followers.",
    keyPoints: [
      "Spread of movement",
      "Government opposition",
      "House arrest periods",
      "Prison confinements",
      "Public examinations",
      "Follower persecutions",
      "Letters to believers",
      "Divine protection"
    ],
    historicalRefs: [
      {
        text: "Account of the Báb's examination in Tabriz.",
        source: "The Dawn-Breakers"
      },
      {
        text: "Documentation of persecutions in government records.",
        source: "Historical Documents"
      }
    ],
    significance: "The Báb's ministry demonstrated divine power in the face of opposition and established a pattern of steadfastness for future generations.",
    elements: [
      "Divine protection",
      "Spiritual leadership",
      "Prophetic authority",
      "Sacrificial service",
      "Religious persecution",
      "Follower devotion",
      "Historical documentation",
      "Legacy preservation"
    ],
    practices: [
      "Historical study",
      "Commemoration events",
      "Pilgrimage visits",
      "Educational programs",
      "Artistic tributes",
      "Youth education",
      "Community gatherings",
      "Research projects"
    ],
    recommendedReading: [
      {
        title: "The Báb: The Herald of the Day of Days",
        author: "H.M. Balyuzi",
        description: "Detailed biography of the Báb's life and ministry",
        amazonLink: "https://www.amazon.com/Bab-Herald-Day-Days/dp/0853980489"
      }
    ]
  },
  {
    title: "Martyrdom and Legacy",
    description: "The martyrdom of the Báb in 1850 and His enduring legacy in religious history and the Bahá'í Faith.",
    keyPoints: [
      "Martyrdom in Tabriz",
      "Miraculous circumstances",
      "Remains preservation",
      "Shrine construction",
      "Historical impact",
      "Spiritual influence",
      "Prophetic fulfillment",
      "Continuing inspiration"
    ],
    historicalRefs: [
      {
        text: "Eye-witness accounts of the Báb's martyrdom.",
        source: "The Dawn-Breakers"
      },
      {
        text: "Shoghi Effendi's analysis of the significance of the Báb's martyrdom.",
        source: "God Passes By"
      }
    ],
    significance: "The Báb's martyrdom marked the culmination of His mission and demonstrated the transformative power of divine sacrifice.",
    elements: [
      "Divine sacrifice",
      "Spiritual victory",
      "Historical witness",
      "Sacred remains",
      "Shrine development",
      "Global recognition",
      "Continuing influence",
      "Prophetic fulfillment"
    ],
    practices: [
      "Martyrdom commemoration",
      "Shrine pilgrimage",
      "Historical study",
      "Artistic expression",
      "Educational programs",
      "Community gatherings",
      "Youth activities",
      "Research projects"
    ],
    recommendedReading: [
      {
        title: "Gate of the Heart",
        author: "Nader Saiedi",
        description: "Understanding the Báb's writings and station",
        amazonLink: "https://www.amazon.com/Gate-Heart-Understanding-Writings-Studies/dp/1554580358"
      }
    ]
  }
]

export default function BabPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>The Báb in Bahá'í History</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the life, mission, and martyrdom of the Báb, Herald of the Bahá'í Faith and founder of the Bábí religion, whose teachings prepared the way for Bahá'u'lláh.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="early" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="early">Early Life</TabsTrigger>
          <TabsTrigger value="writings">Writings</TabsTrigger>
          <TabsTrigger value="ministry">Ministry</TabsTrigger>
          <TabsTrigger value="martyrdom">Martyrdom</TabsTrigger>
        </TabsList>

        {babContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({early: true, writings: true, ministry: true, martyrdom: true})[index]}>
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
              title: "Bahá'u'lláh",
              href: "/religion/bahai/history/bahaullah"
            },
            {
              title: "Letters of the Living",
              href: "/religion/bahai/history/letters-living"
            },
            {
              title: "Early Believers",
              href: "/religion/bahai/history/early-believers"
            }
          ]}
        />
      </div>
    </div>
  )
}