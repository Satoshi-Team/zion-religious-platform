import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "British Colonial Period | Sikh History",
  description: "Explore the period of Sikh history under British colonial rule, including military service, social reforms, political movements, and the struggle for independence.",
  keywords: "British colonial period, Sikh military service, Singh Sabha movement, Akali movement, Gurdwara reform, Indian independence, Sikh diaspora"
}

interface ColonialContent {
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

const colonialContent: ColonialContent[] = [
  {
    title: "Early Colonial Period (1849-1870)",
    description: "The period immediately following the annexation of Punjab, marked by British attempts to integrate Sikhs into colonial structures and the initial Sikh responses to colonial rule.",
    keyPoints: [
      "Integration of Sikh soldiers into British Indian Army",
      "Establishment of colonial administrative systems",
      "Development of canal colonies",
      "Introduction of Western education",
      "Early Sikh migration to British colonies"
    ],
    historicalRefs: [
      {
        text: "The Sikhs proved to be among the most loyal and effective soldiers in the British Indian Army.",
        source: "British military records"
      },
      {
        text: "The colonial period brought both challenges and opportunities for Sikh identity and development.",
        source: "Contemporary Sikh accounts"
      }
    ],
    significance: "This period saw the transformation of Sikh society under colonial rule, with significant impacts on military service, education, and social organization.",
    developments: [
      "Formation of Sikh regiments",
      "Development of colonial infrastructure",
      "Establishment of educational institutions",
      "Creation of new agricultural settlements",
      "Beginning of overseas migration"
    ],
    recommendedReading: [
      {
        title: "The Sikhs and the British: 1849-1920",
        author: "N.G. Barrier",
        description: "Analysis of early Sikh-British relations and colonial impact",
        amazonLink: "https://www.amazon.com/Sikhs-British-1849-1920-N-Barrier/dp/0195673097/"
      }
    ]
  },
  {
    title: "Reform Movements (1870-1920)",
    description: "The period of significant social and religious reform movements within the Sikh community, responding to colonial challenges and internal needs.",
    keyPoints: [
      "Formation of Singh Sabha movement",
      "Development of Khalsa College",
      "Establishment of Chief Khalsa Diwan",
      "Reform of Sikh educational institutions",
      "Publication of Sikh literature and periodicals"
    ],
    historicalRefs: [
      {
        text: "The Singh Sabha movement sought to purify and modernize Sikh practices.",
        source: "Contemporary Sikh literature"
      },
      {
        text: "Education became a key tool for preserving and promoting Sikh identity.",
        source: "Historical records of Khalsa College"
      }
    ],
    significance: "This period saw the emergence of organized Sikh reform movements that would shape modern Sikh identity and institutions.",
    developments: [
      "Establishment of Singh Sabhas",
      "Creation of educational institutions",
      "Publication of religious literature",
      "Development of Sikh press",
      "Formation of social organizations"
    ],
    recommendedReading: [
      {
        title: "The Singh Sabha Movement",
        author: "Harjot Singh Oberoi",
        description: "Comprehensive study of Sikh reform movements",
        amazonLink: "https://www.amazon.com/Singh-Sabha-Movement-Harjot-Oberoi/dp/019563015X/"
      }
    ]
  },
  {
    title: "Gurdwara Reform Movement (1920-1925)",
    description: "The period of struggle for control of Sikh places of worship and the establishment of the Shiromani Gurdwara Parbandhak Committee (SGPC).",
    keyPoints: [
      "Formation of Akali movement",
      "Struggle for control of gurdwaras",
      "Establishment of SGPC",
      "Jaito Morcha",
      "Guru ka Bagh agitation"
    ],
    historicalRefs: [
      {
        text: "The Akali movement united Sikhs in their struggle for religious autonomy.",
        source: "Contemporary Akali records"
      },
      {
        text: "The Gurdwara Reform Movement became a catalyst for broader Sikh political awakening.",
        source: "Historical accounts of the movement"
      }
    ],
    significance: "This period marked a crucial turning point in Sikh history, leading to greater community organization and political consciousness.",
    developments: [
      "Formation of SGPC",
      "Establishment of Akali Dal",
      "Development of Sikh political consciousness",
      "Creation of Sikh institutions",
      "Mobilization of Sikh masses"
    ],
    recommendedReading: [
      {
        title: "The Akali Movement",
        author: "Mohinder Singh",
        description: "Detailed account of the Gurdwara Reform Movement",
        amazonLink: "https://www.amazon.com/Akali-Movement-Mohinder-Singh/dp/8172052898/"
      }
    ]
  },
  {
    title: "Independence Struggle and Partition (1925-1947)",
    description: "The period of Sikh participation in the Indian independence movement and the traumatic experience of Partition.",
    keyPoints: [
      "Participation in independence movement",
      "Formation of Unionist Party",
      "Demand for Punjabi Suba",
      "Partition of Punjab",
      "Mass migration and resettlement"
    ],
    historicalRefs: [
      {
        text: "The Sikhs played a crucial role in India's struggle for independence.",
        source: "Contemporary political records"
      },
      {
        text: "Partition brought unprecedented challenges and transformations to Sikh society.",
        source: "Historical accounts of Partition"
      }
    ],
    significance: "This period saw Sikhs actively participating in the independence movement while facing the challenges of Partition, which would profoundly impact Sikh history.",
    developments: [
      "Political mobilization",
      "Formation of new political parties",
      "Development of Punjabi language movement",
      "Creation of refugee settlements",
      "Establishment of new institutions"
    ],
    recommendedReading: [
      {
        title: "The Sikhs and the Independence Movement",
        author: "J.S. Grewal",
        description: "Analysis of Sikh role in Indian independence",
        amazonLink: "https://www.amazon.com/Sikhs-Independence-Movement-J-S-Grewal/dp/8172051638/"
      }
    ]
  }
]

export default function ColonialPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>British Colonial Period</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the period of Sikh history under British colonial rule, from the annexation of Punjab to Indian independence. This period saw significant transformations in Sikh society, including military service, social reforms, political movements, and the struggle for independence.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="early" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="early">Early Colonial Period</TabsTrigger>
          <TabsTrigger value="reform">Reform Movements</TabsTrigger>
          <TabsTrigger value="gurdwara">Gurdwara Reform</TabsTrigger>
          <TabsTrigger value="independence">Independence Struggle</TabsTrigger>
        </TabsList>

        {colonialContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({early: true, reform: true, gurdwara: true, independence: true})[index]}>
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
          { title: "Sikh Empire Period", href: "/religion/sikhism/history/empire" },
          { title: "Modern Period", href: "/religion/sikhism/history/modern" },
          { title: "Khalsa Identity", href: "/religion/sikhism/theology/khalsa-identity" }
        ]}
        className="mt-8"
      />
    </div>
  )
} 