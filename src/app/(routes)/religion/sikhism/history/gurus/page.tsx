import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Period of the Gurus | Sikh History",
  description: "Explore the period of the Sikh Gurus, from Guru Angad Dev Ji to Guru Gobind Singh Ji, including their lives, teachings, and significant contributions to Sikhism.",
  keywords: "Sikh Gurus, Guru Angad, Guru Amar Das, Guru Ram Das, Guru Arjan, Guru Hargobind, Guru Har Rai, Guru Har Krishan, Guru Tegh Bahadur, Guru Gobind Singh, Khalsa, Amritsar"
}

interface GuruContent {
  title: string
  description: string
  keyPoints: string[]
  historicalRefs: Array<{ text: string; source: string }>
  significance: string
  developments: string[]
  recommendedReading?: Array<{
    title: string
    author: string
    description: string
    amazonLink: string
  }>
}

const guruContent: GuruContent[] = [
  {
    title: "Early Gurus: Angad Dev to Ram Das (1539-1581)",
    description: "The period of the first four Gurus after Guru Nanak Dev Ji, who established and expanded the Sikh community and institutions.",
    keyPoints: [
      "Guru Angad Dev Ji: Development of Gurmukhi script and compilation of Guru Nanak's hymns",
      "Guru Amar Das Ji: Establishment of Manji system and expansion of langar",
      "Guru Ram Das Ji: Foundation of Amritsar and development of Sikh ceremonies",
      "Guru Arjan Dev Ji: Compilation of Adi Granth and construction of Harmandir Sahib"
    ],
    historicalRefs: [
      {
        text: "The Guru's word is the highest truth; it is the eternal wisdom.",
        source: "Guru Angad Dev Ji's teachings"
      },
      {
        text: "The True Guru has established the perfect way of life.",
        source: "Guru Amar Das Ji's compositions"
      }
    ],
    significance: "This period established the foundational institutions and practices of Sikhism, including the compilation of sacred scripture and development of major centers.",
    developments: [
      "Creation of Gurmukhi script",
      "Establishment of Manji system for community organization",
      "Development of Sikh marriage ceremony (Anand Karaj)",
      "Construction of Harmandir Sahib (Golden Temple)",
      "Compilation of Adi Granth"
    ],
    recommendedReading: [
      {
        title: "The Sikh Gurus: Their Lives and Teachings",
        author: "Harbans Singh",
        description: "Comprehensive study of the lives and contributions of the Sikh Gurus",
        amazonLink: "https://www.amazon.com/Sikh-Gurus-Their-Lives-Teachings/dp/8172053118/"
      }
    ]
  },
  {
    title: "Martial Period: Hargobind to Tegh Bahadur (1606-1675)",
    description: "The period marked by increasing Mughal persecution and the development of Sikh martial traditions.",
    keyPoints: [
      "Guru Hargobind Ji: Introduction of martial training and construction of Akal Takht",
      "Guru Har Rai Ji: Focus on healing and medicine",
      "Guru Har Krishan Ji: Youngest Guru who served during smallpox epidemic",
      "Guru Tegh Bahadur Ji: Martyrdom for religious freedom"
    ],
    historicalRefs: [
      {
        text: "The Guru shall maintain both spiritual and temporal authority.",
        source: "Guru Hargobind Ji's declaration"
      },
      {
        text: "For the sake of Dharma, it is worth sacrificing one's head.",
        source: "Guru Tegh Bahadur Ji's final words"
      }
    ],
    significance: "This period saw the transformation of Sikhism into a community capable of defending its faith and values, culminating in the martyrdom of Guru Tegh Bahadur Ji.",
    developments: [
      "Establishment of Akal Takht",
      "Development of martial traditions",
      "Creation of Sikh military units",
      "Expansion of Sikh territories",
      "Institution of religious defense"
    ],
    recommendedReading: [
      {
        title: "Sikh History from Persian Sources",
        author: "J.S. Grewal and Irfan Habib",
        description: "Analysis of Sikh history during the Mughal period",
        amazonLink: "https://www.amazon.com/Sikh-History-Persian-Sources-Grewal/dp/8125022858/"
      }
    ]
  },
  {
    title: "Guru Gobind Singh Ji and the Khalsa (1675-1708)",
    description: "The final period of the human Gurus, marked by the creation of the Khalsa and the establishment of the Guru Granth Sahib as the eternal Guru.",
    keyPoints: [
      "Creation of the Khalsa in 1699",
      "Establishment of the Five Ks",
      "Compilation of Dasam Granth",
      "Declaration of Guru Granth Sahib as eternal Guru"
    ],
    historicalRefs: [
      {
        text: "When the Panj Pyare are ready, I shall give them the Amrit of the double-edged sword.",
        source: "Guru Gobind Singh Ji's declaration at Vaisakhi 1699"
      },
      {
        text: "The Khalsa is my true form.",
        source: "Guru Gobind Singh Ji's teachings"
      }
    ],
    significance: "This period transformed Sikhism into a distinct religious community with its own identity, symbols, and organizational structure.",
    developments: [
      "Institution of the Khalsa",
      "Establishment of the Five Ks",
      "Creation of the Rehit Maryada",
      "Development of martial traditions",
      "Compilation of Dasam Granth"
    ],
    recommendedReading: [
      {
        title: "The Khalsa: Sikh and Non-Sikh Perspectives",
        author: "J.S. Grewal",
        description: "Analysis of the creation and significance of the Khalsa",
        amazonLink: "https://www.amazon.com/Khalsa-Sikh-Non-Sikh-Perspectives-Grewal/dp/0195677471/"
      }
    ]
  },
  {
    title: "Legacy and Impact (1708-Present)",
    description: "The lasting impact of the Gurus' teachings and institutions on Sikh history and contemporary practice.",
    keyPoints: [
      "Enduring influence of Guru Granth Sahib",
      "Continuation of Khalsa tradition",
      "Preservation of historical sites",
      "Global spread of Sikhism"
    ],
    historicalRefs: [
      {
        text: "The Guru's teachings continue to guide the Sikh community through all challenges.",
        source: "Modern Sikh scholarship"
      },
      {
        text: "The Khalsa remains the living embodiment of the Guru's vision.",
        source: "Contemporary Sikh writings"
      }
    ],
    significance: "The period of the Gurus established the foundation for Sikhism's development into a global religion with distinct identity and practices.",
    developments: [
      "Preservation of historical gurdwaras",
      "Development of Sikh educational institutions",
      "Global Sikh diaspora",
      "Modern Sikh organizations",
      "Contemporary Sikh scholarship"
    ],
    recommendedReading: [
      {
        title: "Sikhism: A Very Short Introduction",
        author: "Eleanor Nesbitt",
        description: "Overview of Sikh history and contemporary practice",
        amazonLink: "https://www.amazon.com/Sikhism-Very-Short-Introduction-Introductions/dp/0198745575/"
      }
    ]
  }
]

export default function GurusPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Period of the Gurus</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the period of the Sikh Gurus, from Guru Angad Dev Ji to Guru Gobind Singh Ji, including their lives, teachings, and significant contributions to the development of Sikhism.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="early" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="early">Early Gurus</TabsTrigger>
          <TabsTrigger value="martial">Martial Period</TabsTrigger>
          <TabsTrigger value="gobind">Guru Gobind Singh</TabsTrigger>
          <TabsTrigger value="legacy">Legacy</TabsTrigger>
        </TabsList>

        {guruContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({early: true, martial: true, gobind: true, legacy: true})[index]}>
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
                  <h3 className="font-semibold mb-3">Key Developments</h3>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    {content.developments.map((development, i) => (
                      <li key={i}>{development}</li>
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
          { title: "Foundation Period", href: "/religion/sikhism/history/foundation" },
          { title: "The Guru Tradition", href: "/religion/sikhism/theology/guru-tradition" },
          { title: "Khalsa Identity", href: "/religion/sikhism/theology/khalsa-identity" }
        ]}
        className="mt-8"
      />
    </div>
  )
} 