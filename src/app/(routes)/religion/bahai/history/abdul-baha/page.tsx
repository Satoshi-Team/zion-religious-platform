import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "'Abdu'l-Bahá | Bahá'í History",
  description: "Explore the life, ministry, and legacy of 'Abdu'l-Bahá, the Center of Bahá'u'lláh's Covenant and Perfect Exemplar of His teachings, who led the Bahá'í Faith into the modern era.",
  keywords: "'Abdu'l-Bahá, Center of the Covenant, Mystery of God, Western Travels, Tablets of the Divine Plan, Will and Testament, World War I, Knighthood"
}

interface AbdulBahaContent {
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

const abdulBahaContent: AbdulBahaContent[] = [
  {
    title: "Early Life and Exile",
    description: "The early years of 'Abdu'l-Bahá's life, from His birth in Tehran to the periods of exile and imprisonment with Bahá'u'lláh.",
    keyPoints: [
      "Birth in Tehran (1844)",
      "Childhood recognition of Bahá'u'lláh's station",
      "Early exile to Baghdad",
      "Life during successive exiles",
      "Marriage to Munírih Khánum",
      "Family life in 'Akká",
      "Prison city experiences",
      "Early leadership roles"
    ],
    historicalRefs: [
      {
        text: "Personal accounts in Memorials of the Faithful.",
        source: "Memorials of the Faithful"
      },
      {
        text: "Historical documentation in The Priceless Pearl.",
        source: "The Priceless Pearl"
      }
    ],
    significance: "'Abdu'l-Bahá's early life prepared Him for His future role as the Center of the Covenant and interpreter of Bahá'u'lláh's teachings.",
    elements: [
      "Divine preparation",
      "Spiritual education",
      "Family devotion",
      "Leadership development",
      "Personal sacrifice",
      "Administrative skills",
      "Teaching abilities",
      "Character formation"
    ],
    practices: [
      "Historical study",
      "Pilgrimage visits",
      "Youth education",
      "Character development",
      "Family life",
      "Community service",
      "Leadership training",
      "Artistic expression"
    ],
    recommendedReading: [
      {
        title: "'Abdu'l-Bahá: The Centre of the Covenant",
        author: "H.M. Balyuzi",
        description: "Comprehensive biography of 'Abdu'l-Bahá's life",
        amazonLink: "https://www.amazon.com/Abdul-Baha-Centre-Covenant-H-M-Balyuzi/dp/0853980438"
      }
    ]
  },
  {
    title: "Ministry and Leadership",
    description: "The period of 'Abdu'l-Bahá's ministry as the Center of the Covenant, including His guidance of the Bahá'í community and interpretation of the teachings.",
    keyPoints: [
      "Appointment as Center of Covenant",
      "Leadership after Bahá'u'lláh's ascension",
      "Interpretation of teachings",
      "Community development",
      "Correspondence with believers",
      "Resolution of conflicts",
      "Protection of the Faith",
      "Administrative foundations"
    ],
    historicalRefs: [
      {
        text: "'Abdu'l-Bahá's exposition of the Covenant in The Will and Testament.",
        source: "Will and Testament of 'Abdu'l-Bahá"
      },
      {
        text: "Documentation of His ministry in God Passes By.",
        source: "God Passes By"
      }
    ],
    significance: "'Abdu'l-Bahá's ministry established the administrative order and protected the unity of the Bahá'í Faith.",
    elements: [
      "Covenant power",
      "Administrative order",
      "Teaching work",
      "Unity preservation",
      "Spiritual guidance",
      "Social principles",
      "Educational development",
      "Community organization"
    ],
    practices: [
      "Covenant study",
      "Administrative service",
      "Teaching activities",
      "Unity building",
      "Community development",
      "Educational programs",
      "Social action",
      "Consultation practice"
    ],
    recommendedReading: [
      {
        title: "The Covenant of Bahá'u'lláh",
        author: "Adib Taherzadeh",
        description: "Analysis of 'Abdu'l-Bahá's role as Center of the Covenant",
        amazonLink: "https://www.amazon.com/Covenant-Bahaullah-Adib-Taherzadeh/dp/0853983445"
      }
    ]
  },
  {
    title: "Western Travels and Teachings",
    description: "'Abdu'l-Bahá's historic journeys to Europe and North America, where He proclaimed Bahá'u'lláh's message to Western audiences.",
    keyPoints: [
      "Freedom from imprisonment (1908)",
      "European travels (1911)",
      "North American journey (1912)",
      "Public addresses",
      "Media coverage",
      "Interfaith outreach",
      "Social reform advocacy",
      "Race unity promotion"
    ],
    historicalRefs: [
      {
        text: "Accounts of Western travels in 'Abdu'l-Bahá in London.",
        source: "'Abdu'l-Bahá in London"
      },
      {
        text: "Documentation of American travels in Promulgation of Universal Peace.",
        source: "The Promulgation of Universal Peace"
      }
    ],
    significance: "'Abdu'l-Bahá's Western travels established the Bahá'í Faith globally and demonstrated its principles in action.",
    elements: [
      "Global outreach",
      "Public proclamation",
      "Social principles",
      "Interfaith dialogue",
      "Race unity",
      "Peace promotion",
      "Educational work",
      "Media relations"
    ],
    practices: [
      "Public speaking",
      "Media engagement",
      "Interfaith activities",
      "Race unity work",
      "Peace building",
      "Social action",
      "Historical research",
      "Community outreach"
    ],
    recommendedReading: [
      {
        title: "'Abdu'l-Bahá in America",
        author: "Robert H. Stockman",
        description: "Detailed account of 'Abdu'l-Bahá's travels in North America",
        amazonLink: "https://www.amazon.com/Abdul-Baha-America-Robert-H-Stockman/dp/1931847975"
      }
    ]
  },
  {
    title: "Final Years and Legacy",
    description: "'Abdu'l-Bahá's later years, including World War I period, His knighthood, and the establishment of His lasting legacy through the Will and Testament.",
    keyPoints: [
      "War years service",
      "Knighthood (1920)",
      "Tablets of the Divine Plan",
      "Will and Testament",
      "Establishment of Guardianship",
      "Administrative Order blueprint",
      "Ascension (1921)",
      "Global memorial services"
    ],
    historicalRefs: [
      {
        text: "Details of wartime service in The Chosen Highway.",
        source: "The Chosen Highway"
      },
      {
        text: "Final instructions in the Will and Testament.",
        source: "Will and Testament of 'Abdu'l-Bahá"
      }
    ],
    significance: "'Abdu'l-Bahá's final years consolidated the foundations of the Bahá'í Administrative Order and set the pattern for future growth.",
    elements: [
      "Divine Plan",
      "Administrative Order",
      "Global teaching",
      "Social service",
      "Spiritual legacy",
      "Leadership succession",
      "Future guidance",
      "Unity preservation"
    ],
    practices: [
      "Will and Testament study",
      "Administrative service",
      "Teaching plans",
      "Social development",
      "Historical research",
      "Memorial events",
      "Youth education",
      "Community building"
    ],
    recommendedReading: [
      {
        title: "The Will and Testament of 'Abdu'l-Bahá",
        author: "'Abdu'l-Bahá",
        description: "Charter of the future administrative order",
        amazonLink: "https://www.amazon.com/Will-Testament-Abdul-Baha/dp/1931847673"
      }
    ]
  }
]

export default function AbdulBahaPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>'Abdu'l-Bahá in Bahá'í History</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the life, ministry, and legacy of 'Abdu'l-Bahá, the Center of Bahá'u'lláh's Covenant and Perfect Exemplar of His teachings, who led the Bahá'í Faith into the modern era.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="early" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="early">Early Life</TabsTrigger>
          <TabsTrigger value="ministry">Ministry</TabsTrigger>
          <TabsTrigger value="travels">Travels</TabsTrigger>
          <TabsTrigger value="legacy">Legacy</TabsTrigger>
        </TabsList>

        {abdulBahaContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({early: true, ministry: true, travels: true, legacy: true})[index]}>
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
              title: "Shoghi Effendi",
              href: "/religion/bahai/history/shoghi-effendi"
            },
            {
              title: "Holy Places",
              href: "/religion/bahai/history/holy-places"
            }
          ]}
        />
      </div>
    </div>
  )
} 