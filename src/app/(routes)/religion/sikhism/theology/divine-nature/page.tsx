import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Waheguru and Divine Nature | Sikh Theology",
  description: "Explore the Sikh understanding of Waheguru (the Divine) and the nature of God in Sikhism, including concepts of divine unity, attributes, and relationship with creation.",
  keywords: "Waheguru, Sikh theology, Divine Nature, Ik Onkar, Nirguna, Sarguna, Hukam, Guru Granth Sahib"
}

interface DivineConcept {
  title: string
  description: string
  keyPoints: string[]
  scriptureRefs: Array<{ text: string; source: string }>
  significance: string
  practices: string[]
}

const divineContent: DivineConcept[] = [
  {
    title: "Concept of Waheguru",
    description: "In Sikhism, Waheguru represents the Supreme Being - formless, eternal, and beyond human comprehension yet intimately connected with creation. This divine reality is characterized by both nirguna (absolute) and sarguna (manifest) aspects.",
    keyPoints: [
      "Waheguru is One (Ik Onkar) - the fundamental principle of Sikh monotheism",
      "Beyond gender, form, and human limitations",
      "Both transcendent (nirguna) and immanent (sarguna)",
      "Creator, Sustainer, and Destroyer of all existence",
      "Truth (Sat) as a primary divine attribute"
    ],
    scriptureRefs: [
      {
        text: "Ik Onkar Satnam Karta Purakh Nirbhau Nirvair...",
        source: "Mool Mantar, Guru Granth Sahib, Page 1"
      },
      {
        text: "You are the Creator of all, the Life of the world, the Support of every heart.",
        source: "Guru Arjan Dev, Guru Granth Sahib, Page 103"
      }
    ],
    significance: "Understanding Waheguru's nature is central to Sikh theology and practice, forming the foundation for devotion, ethics, and spiritual development.",
    practices: [
      "Nam Simran (meditation on divine names)",
      "Kirtan (devotional singing)",
      "Seva (selfless service) as expression of divine love",
      "Recognition of divine presence in all creation",
      "Living in Hukam (divine will)"
    ]
  },
  {
    title: "Divine Attributes",
    description: "Sikhism describes Waheguru through various attributes that help humans understand and relate to the Divine, while acknowledging that the Ultimate Reality transcends all descriptions.",
    keyPoints: [
      "Nirbhau (Without Fear) and Nirvair (Without Enmity)",
      "Akal Purakh (Timeless Being)",
      "Kartar (Creator) and Karta Purakh (Creative Being)",
      "Satnam (True Name) - eternal truth",
      "Omnipresent, Omniscient, and Omnipotent"
    ],
    scriptureRefs: [
      {
        text: "The One Lord is pervading in all, the One Lord is contained in all.",
        source: "Guru Amar Das, Guru Granth Sahib, Page 1176"
      },
      {
        text: "You Yourself are the Creator, You Yourself are the Enjoyer.",
        source: "Guru Nanak Dev, Guru Granth Sahib, Page 913"
      }
    ],
    significance: "These attributes help Sikhs develop a personal relationship with the Divine while maintaining awareness of its ultimate ineffability.",
    practices: [
      "Contemplation of divine attributes in meditation",
      "Expression through poetry and music",
      "Ethical living reflecting divine qualities",
      "Community service as divine connection",
      "Regular study of Gurbani (divine word)"
    ]
  },
  {
    title: "Divine-Human Relationship",
    description: "Sikhism emphasizes a direct, personal relationship between the individual and Waheguru, facilitated through grace (kirpa) and spiritual practice.",
    keyPoints: [
      "Direct relationship without intermediaries",
      "Grace (kirpa) as essential for spiritual progress",
      "Human birth as precious opportunity for divine realization",
      "Importance of sangat (spiritual community)",
      "Balance of love and devotion with ethical living"
    ],
    scriptureRefs: [
      {
        text: "By His Grace, one meets the True Guru, and the ego is eliminated from within.",
        source: "Guru Amar Das, Guru Granth Sahib, Page 30"
      },
      {
        text: "The Lord Himself unites us in His Union; He Himself links us to His Name.",
        source: "Guru Ram Das, Guru Granth Sahib, Page 449"
      }
    ],
    significance: "This understanding shapes Sikh practices, community life, and individual spiritual journey toward union with the Divine.",
    practices: [
      "Regular prayer and meditation",
      "Participation in sangat",
      "Selfless service to humanity",
      "Cultivation of divine virtues",
      "Living in remembrance (simran)"
    ]
  }
]

export default function DivinePage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Waheguru and Divine Nature in Sikhism</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the Sikh understanding of Waheguru (the Divine) and its relationship with creation, including key concepts of divine unity, attributes, and human-divine connection.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="concept" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="concept">Concept of Waheguru</TabsTrigger>
          <TabsTrigger value="attributes">Divine Attributes</TabsTrigger>
          <TabsTrigger value="relationship">Divine-Human Relationship</TabsTrigger>
        </TabsList>

        {divineContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({concept: true, attributes: true, relationship: true})[index]}>
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
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <RelatedTopics
        topics={[
          { title: "The Guru Tradition", href: "/religion/sikhism/theology/guru-tradition" },
          { title: "Sacred Scripture", href: "/religion/sikhism/theology/sacred-scripture" },
          { title: "Ethics and Values", href: "/religion/sikhism/theology/ethics-values" }
        ]}
        className="mt-8"
      />
    </div>
  )
} 