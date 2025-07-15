import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Bahá'u'lláh | Bahá'í History",
  description: "Explore the life, revelation, writings, and legacy of Bahá'u'lláh, the Founder of the Bahá'í Faith, whose teachings established a new global religion focused on unity and progressive revelation.",
  keywords: "Bahá'u'lláh, Mírzá Ḥusayn-'Alí Núrí, Founder Bahá'í Faith, Kitáb-i-Aqdas, Kitáb-i-Íqán, Hidden Words, Baghdad Period, Adrianople, Akka, Bahji"
}

interface BahaullaContent {
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

const bahaullaContent: BahaullaContent[] = [
  {
    title: "Early Life and Recognition of the Báb",
    description: "The noble birth, early life, and acceptance of the Báb's message by Bahá'u'lláh (Mírzá Ḥusayn-'Alí Núrí).",
    keyPoints: [
      "Birth in Tehran (1817)",
      "Noble lineage and family background",
      "Early spiritual inclinations",
      "Marriage to Ásíyih Khánum",
      "Acceptance of the Báb's message",
      "Support of the Bábí community",
      "Defense of Bábí teachings",
      "Early persecution experiences"
    ],
    historicalRefs: [
      {
        text: "Shoghi Effendi's account of Bahá'u'lláh's early life in God Passes By.",
        source: "God Passes By"
      },
      {
        text: "Bahá'u'lláh's own recollections in Epistle to the Son of the Wolf.",
        source: "Epistle to the Son of the Wolf"
      }
    ],
    significance: "Bahá'u'lláh's early life and recognition of the Báb set the stage for His future revelation and mission.",
    elements: [
      "Noble character",
      "Spiritual capacity",
      "Divine preparation",
      "Leadership qualities",
      "Prophetic recognition",
      "Social influence",
      "Family heritage",
      "Spiritual insight"
    ],
    practices: [
      "Historical study",
      "Pilgrimage visits",
      "Commemoration events",
      "Educational programs",
      "Youth activities",
      "Community gatherings",
      "Artistic tributes",
      "Research projects"
    ],
    recommendedReading: [
      {
        title: "Bahá'u'lláh: The King of Glory",
        author: "H.M. Balyuzi",
        description: "Comprehensive biography of Bahá'u'lláh's life",
        amazonLink: "https://www.amazon.com/Bahaullah-King-Glory-H-M-Balyuzi/dp/0853980489"
      }
    ]
  },
  {
    title: "Divine Revelation and Exile",
    description: "The period of Bahá'u'lláh's divine revelation in the Síyáh-Chál, followed by successive exiles from Tehran to Baghdad, Constantinople, Adrianople, and finally 'Akká.",
    keyPoints: [
      "Síyáh-Chál imprisonment (1852)",
      "Divine revelation experience",
      "Exile to Baghdad (1853)",
      "Kurdistan retreat",
      "Baghdad declaration (1863)",
      "Constantinople and Adrianople",
      "Final exile to 'Akká",
      "Prison city confinement"
    ],
    historicalRefs: [
      {
        text: "Bahá'u'lláh's account of His revelation in the Súriy-i-Haykal.",
        source: "Súriy-i-Haykal"
      },
      {
        text: "Historical documentation of the exiles in Shoghi Effendi's writings.",
        source: "God Passes By"
      }
    ],
    significance: "The period of exile marked the progressive unfoldment of Bahá'u'lláh's revelation and the establishment of the Bahá'í Faith.",
    elements: [
      "Divine revelation",
      "Prophetic mission",
      "Spiritual authority",
      "Religious persecution",
      "Divine protection",
      "Global dispersion",
      "Sacred history",
      "Covenant establishment"
    ],
    practices: [
      "Holy Day observances",
      "Pilgrimage journeys",
      "Historical study",
      "Meditation practice",
      "Prayer gatherings",
      "Community commemoration",
      "Youth education",
      "Artistic expression"
    ],
    recommendedReading: [
      {
        title: "The Revelation of Bahá'u'lláh",
        author: "Adib Taherzadeh",
        description: "Four-volume series on Bahá'u'lláh's revelation during exile",
        amazonLink: "https://www.amazon.com/Revelation-Bahaullah-Vol-1-Baghdad-1853-63/dp/0853980438"
      }
    ]
  },
  {
    title: "Writings and Teachings",
    description: "The vast corpus of Bahá'u'lláh's writings and teachings, establishing the foundations of a new world religion.",
    keyPoints: [
      "Kitáb-i-Aqdas revelation",
      "Kitáb-i-Íqán composition",
      "Hidden Words revelation",
      "Tablets to Kings",
      "Mystical writings",
      "Social teachings",
      "Administrative principles",
      "Covenant establishment"
    ],
    historicalRefs: [
      {
        text: "The circumstances of the Kitáb-i-Aqdas revelation in 'Akká.",
        source: "The Kitáb-i-Aqdas"
      },
      {
        text: "Collection and preservation of the Sacred Writings.",
        source: "The Universal House of Justice"
      }
    ],
    significance: "Bahá'u'lláh's writings constitute a vast repository of spiritual and social teachings for humanity's collective maturity.",
    elements: [
      "Divine revelation",
      "Spiritual laws",
      "Social principles",
      "Administrative order",
      "Mystical truth",
      "Ethical guidance",
      "Global vision",
      "Progressive revelation"
    ],
    practices: [
      "Scripture study",
      "Translation work",
      "Research projects",
      "Educational programs",
      "Devotional gatherings",
      "Publishing efforts",
      "Academic study",
      "Teaching activities"
    ],
    recommendedReading: [
      {
        title: "The Hidden Words",
        author: "Bahá'u'lláh",
        description: "Essential mystical writings of Bahá'u'lláh",
        amazonLink: "https://www.amazon.com/Hidden-Words-Bahaullah/dp/1931847304"
      }
    ]
  },
  {
    title: "Final Years and Legacy",
    description: "The final years of Bahá'u'lláh's life in 'Akká and Bahjí, and His enduring legacy in establishing the Bahá'í Faith.",
    keyPoints: [
      "Life in Bahjí mansion",
      "Completion of revelation",
      "Appointment of 'Abdu'l-Bahá",
      "Covenant establishment",
      "Final tablets",
      "Ascension (1892)",
      "Shrine development",
      "Global expansion"
    ],
    historicalRefs: [
      {
        text: "Bahá'u'lláh's final years described in Memorials of the Faithful.",
        source: "Memorials of the Faithful"
      },
      {
        text: "The Covenant of Bahá'u'lláh in the Kitáb-i-'Ahd.",
        source: "Kitáb-i-'Ahd"
      }
    ],
    significance: "Bahá'u'lláh's final years consolidated His revelation and established the foundation for its future development.",
    elements: [
      "Divine legacy",
      "Covenant power",
      "Administrative order",
      "Spiritual heritage",
      "Global mission",
      "Sacred places",
      "Future vision",
      "Unity principle"
    ],
    practices: [
      "Pilgrimage visits",
      "Covenant study",
      "Historical research",
      "Community building",
      "Teaching work",
      "Administrative service",
      "Youth education",
      "Arts development"
    ],
    recommendedReading: [
      {
        title: "The Covenant of Bahá'u'lláh",
        author: "Adib Taherzadeh",
        description: "Study of Bahá'u'lláh's Covenant and its significance",
        amazonLink: "https://www.amazon.com/Covenant-Bahaullah-Adib-Taherzadeh/dp/0853983445"
      }
    ]
  }
]

export default function BahaullaPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Bahá'u'lláh in Bahá'í History</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the life, revelation, writings, and legacy of Bahá'u'lláh, the Founder of the Bahá'í Faith, whose teachings established a new global religion focused on unity and progressive revelation.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="early" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="early">Early Life</TabsTrigger>
          <TabsTrigger value="revelation">Revelation</TabsTrigger>
          <TabsTrigger value="writings">Writings</TabsTrigger>
          <TabsTrigger value="legacy">Legacy</TabsTrigger>
        </TabsList>

        {bahaullaContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({early: true, revelation: true, writings: true, legacy: true})[index]}>
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
              title: "The Báb",
              href: "/religion/bahai/history/bab"
            },
            {
              title: "'Abdu'l-Bahá",
              href: "/religion/bahai/history/abdul-baha"
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