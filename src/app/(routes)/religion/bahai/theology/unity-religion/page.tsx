import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Unity of Religion | Bahá'í Theology",
  description: "Explore the Bahá'í principle of the Unity of Religion, examining how all major faiths are part of one progressive divine plan for humanity's spiritual education.",
  keywords: "Unity of Religion, Bahá'í Faith, Religious Unity, Interfaith Harmony, Essential Truth, Divine Plan, Religious Reconciliation, Spiritual Unity"
}

interface UnityReligionContent {
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

const unityReligionContent: UnityReligionContent[] = [
  {
    title: "Essential Unity",
    description: "Examining the fundamental Bahá'í teaching that all religions originate from the same divine source and share essential spiritual truths.",
    keyPoints: [
      "One divine source",
      "Common spiritual truths",
      "Universal values",
      "Divine attributes",
      "Spiritual foundations",
      "Eternal truths",
      "Divine wisdom",
      "Sacred unity"
    ],
    historicalRefs: [
      {
        text: "Bahá'u'lláh's declaration of religious unity in the Kitáb-i-Íqán.",
        source: "Kitáb-i-Íqán"
      },
      {
        text: "'Abdu'l-Bahá's explanations of religious unity in Paris Talks.",
        source: "Paris Talks"
      }
    ],
    significance: "The unity of religion represents the foundational truth that all authentic faiths are expressions of one divine reality and purpose.",
    elements: [
      "Divine origin",
      "Spiritual essence",
      "Common purpose",
      "Moral principles",
      "Sacred teachings",
      "Universal laws",
      "Divine guidance",
      "Eternal wisdom"
    ],
    practices: [
      "Interfaith study",
      "Comparative analysis",
      "Sacred text exploration",
      "Unity discussions",
      "Spiritual reflection",
      "Community dialogue",
      "Educational programs",
      "Unity building"
    ],
    recommendedReading: [
      {
        title: "The World's Religions in Light of the Bahá'í Faith",
        author: "J.E. Esslemont",
        description: "Comprehensive analysis of religious unity",
        amazonLink: "https://www.amazon.com/Bahaullah-New-Era-Introduction-Bahai/dp/1931847274"
      }
    ]
  },
  {
    title: "Comparative Teachings",
    description: "Analyzing the shared spiritual and moral teachings across major world religions.",
    keyPoints: [
      "Golden Rule",
      "Divine love",
      "Moral virtues",
      "Spiritual growth",
      "Human nobility",
      "Service to humanity",
      "Prayer and meditation",
      "Spiritual transformation"
    ],
    historicalRefs: [
      {
        text: "Bahá'u'lláh's exposition on religious unity in the Seven Valleys.",
        source: "The Seven Valleys"
      },
      {
        text: "'Abdu'l-Bahá's comparative religious analysis in Some Answered Questions.",
        source: "Some Answered Questions"
      }
    ],
    significance: "The common spiritual and moral teachings across religions demonstrate their essential unity and shared divine origin.",
    elements: [
      "Ethical principles",
      "Spiritual practices",
      "Moral teachings",
      "Divine worship",
      "Human purpose",
      "Social justice",
      "Community life",
      "Personal transformation"
    ],
    practices: [
      "Comparative study",
      "Sacred text analysis",
      "Moral education",
      "Spiritual practices",
      "Community service",
      "Unity building",
      "Interfaith dialogue",
      "Educational outreach"
    ],
    recommendedReading: [
      {
        title: "All Things Made New",
        author: "John Ferraby",
        description: "Comparative study of religious teachings",
        amazonLink: "https://www.amazon.com/All-Things-Made-New-Comprehensive/dp/0853980713"
      }
    ]
  },
  {
    title: "Social Implementation",
    description: "Exploring how the principle of religious unity can be applied to build harmonious and inclusive communities.",
    keyPoints: [
      "Interfaith harmony",
      "Social cohesion",
      "Community building",
      "Cultural integration",
      "Unity in diversity",
      "Collective worship",
      "Joint service",
      "Spiritual fellowship"
    ],
    historicalRefs: [
      {
        text: "Shoghi Effendi's guidance on building unity in The World Order of Bahá'u'lláh.",
        source: "The World Order of Bahá'u'lláh"
      },
      {
        text: "Universal House of Justice directives on interfaith collaboration.",
        source: "Messages of the Universal House of Justice"
      }
    ],
    significance: "Religious unity provides a foundation for building harmonious communities and addressing global challenges through interfaith cooperation.",
    elements: [
      "Community structures",
      "Unity programs",
      "Service projects",
      "Educational initiatives",
      "Cultural celebrations",
      "Interfaith activities",
      "Social development",
      "Peace building"
    ],
    practices: [
      "Community gatherings",
      "Joint projects",
      "Unity festivals",
      "Service initiatives",
      "Educational programs",
      "Cultural exchange",
      "Peace promotion",
      "Social action"
    ],
    recommendedReading: [
      {
        title: "Building Vibrant Communities",
        author: "Bahá'í International Community",
        description: "Guide to implementing unity principles",
        amazonLink: "https://www.amazon.com/Community-Building-Bahai-Faith-Development/dp/1931847673"
      }
    ]
  },
  {
    title: "Contemporary Challenges",
    description: "Addressing modern challenges and opportunities in promoting religious unity and interfaith harmony.",
    keyPoints: [
      "Religious prejudice",
      "Sectarian conflict",
      "Fundamentalism",
      "Secular society",
      "Global challenges",
      "Interfaith dialogue",
      "Peace building",
      "Social transformation"
    ],
    historicalRefs: [
      {
        text: "Universal House of Justice analysis of contemporary religious challenges.",
        source: "One Common Faith"
      },
      {
        text: "Bahá'í International Community statements on religious harmony.",
        source: "BIC Documents"
      }
    ],
    significance: "Understanding and addressing contemporary challenges to religious unity is essential for building a peaceful global civilization.",
    elements: [
      "Dialogue methods",
      "Conflict resolution",
      "Peace initiatives",
      "Educational approaches",
      "Media engagement",
      "Youth involvement",
      "Community action",
      "Global networking"
    ],
    practices: [
      "Interfaith forums",
      "Peace programs",
      "Youth workshops",
      "Media outreach",
      "Educational seminars",
      "Community projects",
      "Global initiatives",
      "Unity campaigns"
    ],
    recommendedReading: [
      {
        title: "One Common Faith",
        author: "Universal House of Justice",
        description: "Analysis of contemporary religious unity challenges",
        amazonLink: "https://www.amazon.com/One-Common-Faith-Universal-Justice/dp/1931847169"
      }
    ]
  }
]

export default function UnityReligionPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Unity of Religion in the Bahá'í Faith</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the Bahá'í principle of the Unity of Religion, examining how all major faiths are part of one progressive divine plan for humanity's spiritual education.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="essential" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="essential">Essential Unity</TabsTrigger>
          <TabsTrigger value="comparative">Comparative</TabsTrigger>
          <TabsTrigger value="implementation">Implementation</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
        </TabsList>

        {unityReligionContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({essential: true, comparative: true, implementation: true, challenges: true})[index]}>
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
              title: "Progressive Revelation",
              href: "/religion/bahai/theology/progressive-revelation"
            },
            {
              title: "Manifestation of God",
              href: "/religion/bahai/theology/manifestation"
            },
            {
              title: "Social Principles",
              href: "/religion/bahai/principles/social"
            }
          ]}
        />
      </div>
    </div>
  )
} 