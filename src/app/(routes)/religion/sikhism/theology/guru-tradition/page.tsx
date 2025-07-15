import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "The Guru Tradition | Sikh Theology",
  description: "Explore the Sikh Guru tradition, including the lineage of the Ten Gurus, their teachings, and the eternal Guru Granth Sahib.",
  keywords: "Sikh Gurus, Guru Nanak, Guru Granth Sahib, Guruship, Sikh theology, Ten Gurus of Sikhism"
}

interface GuruTradition {
  title: string
  description: string
  keyPoints: string[]
  scriptureRefs: Array<{ text: string; source: string }>
  significance: string
  practices: string[]
  recommendedReading?: Array<{
    title: string
    author: string
    description: string
    amazonLink: string
  }>
}

const guruContent: GuruTradition[] = [
  {
    title: "The Ten Gurus and Their Legacy",
    description: "The foundation of Sikhism rests upon the teachings and spiritual leadership of the Ten Gurus, from Guru Nanak Dev Ji to Guru Gobind Singh Ji, who established and shaped the faith over two centuries.",
    keyPoints: [
      "Guru Nanak Dev Ji (1469-1539) - Founder of Sikhism",
      "Guru Angad Dev Ji - Developed Gurmukhi script",
      "Guru Amar Das Ji - Established new institutions",
      "Guru Ram Das Ji - Founded Amritsar",
      "Guru Arjan Dev Ji - Compiled the Adi Granth",
      "Guru Hargobind Ji - Introduced Miri-Piri concept",
      "Guru Har Rai Ji - Emphasized compassion and healing",
      "Guru Har Krishan Ji - Known for healing ministry",
      "Guru Tegh Bahadur Ji - Martyr for religious freedom",
      "Guru Gobind Singh Ji - Established the Khalsa"
    ],
    scriptureRefs: [
      {
        text: "The True Guru is the one who unites all with the Lord.",
        source: "Guru Granth Sahib, Page 72"
      },
      {
        text: "Through the True Guru, the Name is obtained.",
        source: "Guru Granth Sahib, Page 1044"
      }
    ],
    significance: "The Guru tradition represents the divine light passing through ten forms, establishing Sikh principles, practices, and institutions that continue to guide the community today.",
    practices: [
      "Daily remembrance of the Gurus through prayers",
      "Study of their teachings and lives",
      "Following their examples in daily life",
      "Participating in Gurpurabs (Guru celebrations)",
      "Service to humanity as taught by the Gurus"
    ],
    recommendedReading: [
      {
        title: "The Sikh Gurus: Lives and Teachings",
        author: "Harish Dhillon",
        description: "Comprehensive biography of all ten Gurus with historical context",
        amazonLink: "https://www.amazon.com/Sikh-Gurus-Lives-Teachings/dp/8129137208/"
      }
    ]
  },
  {
    title: "Guru Granth Sahib - The Eternal Guru",
    description: "The Guru Granth Sahib, installed as the eternal Guru by Guru Gobind Singh Ji in 1708, contains the spiritual wisdom and divine revelations of the Sikh Gurus and other holy men.",
    keyPoints: [
      "Contains 1430 pages of spiritual wisdom",
      "Written in Gurmukhi script",
      "Includes teachings from Hindu and Muslim saints",
      "Emphasizes equality and universal brotherhood",
      "Treated with utmost respect as the living Guru"
    ],
    scriptureRefs: [
      {
        text: "The Bani is the Guru, and the Guru is the Bani.",
        source: "Guru Ram Das, Guru Granth Sahib, Page 982"
      },
      {
        text: "Within the Bani, the Ambrosial Nectar is contained.",
        source: "Guru Amar Das, Guru Granth Sahib, Page 1239"
      }
    ],
    significance: "The Guru Granth Sahib serves as the eternal spiritual guide for Sikhs, providing divine wisdom and guidance for all aspects of life.",
    practices: [
      "Daily reading (Nitnem)",
      "Proper protocols for handling and housing",
      "Musical rendition of hymns (Kirtan)",
      "Taking Hukam (divine order) for guidance",
      "Studying with learned scholars (Gianis)"
    ],
    recommendedReading: [
      {
        title: "Sri Guru Granth Sahib: A User's Guide",
        author: "Kavneet Singh",
        description: "Practical guide to understanding and engaging with the eternal Guru",
        amazonLink: "https://www.amazon.com/Sri-Guru-Granth-Sahib-Users/dp/1984549472/"
      }
    ]
  },
  {
    title: "Contemporary Guruship",
    description: "In modern Sikhism, the Guru exists in three forms: the Word (Shabad), the community (Sangat), and the physical scripture (Guru Granth Sahib), collectively guiding the faithful.",
    keyPoints: [
      "Concept of Gurbani as living wisdom",
      "Role of Sangat in collective guidance",
      "Institution of Akal Takht leadership",
      "Modern interpretations and applications",
      "Global reach of Guru's teachings"
    ],
    scriptureRefs: [
      {
        text: "In the Sangat, the Divine Light shines forth.",
        source: "Guru Granth Sahib, Page 667"
      },
      {
        text: "The Word is the Guru, and the Guru is the Word.",
        source: "Guru Ram Das, Guru Granth Sahib, Page 982"
      }
    ],
    significance: "Contemporary Guruship maintains the living tradition while adapting to modern challenges and global context.",
    practices: [
      "Participation in Sangat gatherings",
      "Following Hukamnamas (edicts)",
      "Engaging in collective decision-making",
      "Digital access to Gurbani",
      "Modern scholarship and interpretation"
    ],
    recommendedReading: [
      {
        title: "Sikhism in the Modern World",
        author: "Paramjit Singh Judge",
        description: "Analysis of contemporary Sikh practices and institutions",
        amazonLink: "https://www.amazon.com/Sikhism-Modern-World-Paramjit-Judge/dp/1138020451/"
      }
    ]
  }
]

export default function GuruTraditionPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>The Guru Tradition in Sikhism</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the foundational Guru tradition in Sikhism, from the Ten Gurus to the eternal Guru Granth Sahib, and its contemporary significance.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="ten-gurus" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="ten-gurus">The Ten Gurus</TabsTrigger>
          <TabsTrigger value="granth-sahib">Guru Granth Sahib</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary Guruship</TabsTrigger>
        </TabsList>

        {guruContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({"ten-gurus": true, "granth-sahib": true, "contemporary": true})[index]}>
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
                  <h3 className="font-semibold mb-3">Scripture References</h3>
                  <div className="space-y-4">
                    {content.scriptureRefs.map((ref, i) => (
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

      <RelatedTopics
        topics={[
          { title: "Waheguru and Divine Nature", href: "/religion/sikhism/theology/divine-nature" },
          { title: "Sacred Scripture", href: "/religion/sikhism/theology/sacred-scripture" },
          { title: "Khalsa and Identity", href: "/religion/sikhism/theology/khalsa-identity" }
        ]}
        className="mt-8"
      />
    </div>
  )
} 