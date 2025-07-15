import React from 'react'
import { Metadata } from "next"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Pneumatology | Doctrine of the Holy Spirit",
  description: "Comprehensive exploration of Christian pneumatology, including the person, work, and gifts of the Holy Spirit.",
  keywords: [
    "Pneumatology",
    "Holy Spirit",
    "Spirit theology",
    "Spiritual gifts",
    "Divine person",
    "Sanctification",
    "Charismatic theology"
  ]
}

interface Attribute {
  name: string
  description: string
  biblicalBasis: string[]
  theologicalImplications: string[]
}

interface Work {
  area: string
  description: string
  manifestations: string[]
  significance: string
}

interface SpiritualGift {
  name: string
  description: string
  biblicalReference: string
  expression: string
  purpose: string
}

interface Perspective {
  tradition: string
  mainEmphasis: string
  keyTheologians: string[]
  distinctives: string[]
}

const divineAttributes: Attribute[] = [
  {
    name: "Personhood",
    description: "The Holy Spirit as the third person of the Trinity, possessing personality and divine nature",
    biblicalBasis: ["John 14:16-17", "John 16:13-15", "Acts 13:2"],
    theologicalImplications: [
      "Personal relationship with believers",
      "Active agency in salvation",
      "Distinct role in Trinity"
    ]
  },
  {
    name: "Divinity",
    description: "The full deity and divine nature of the Holy Spirit",
    biblicalBasis: ["Acts 5:3-4", "2 Corinthians 3:17-18", "1 Corinthians 2:10-11"],
    theologicalImplications: [
      "Equal with Father and Son",
      "Divine authority and power",
      "Object of worship and prayer"
    ]
  }
]

const spiritWorks: Work[] = [
  {
    area: "Creation",
    description: "The Spirit's role in creation and ongoing sustenance of life",
    manifestations: [
      "Hovering over the waters (Genesis 1:2)",
      "Giving life to creation",
      "Sustaining the natural order"
    ],
    significance: "Demonstrates the Spirit's creative and life-giving power"
  },
  {
    area: "Inspiration",
    description: "The Spirit's work in inspiring Scripture and illuminating truth",
    manifestations: [
      "Biblical inspiration",
      "Guidance in interpretation",
      "Illumination of truth"
    ],
    significance: "Ensures reliable divine revelation and spiritual understanding"
  }
]

const spiritualGifts: SpiritualGift[] = [
  {
    name: "Prophecy",
    description: "The ability to receive and communicate divine revelation",
    biblicalReference: "1 Corinthians 12:10",
    expression: "Speaking forth God's truth with clarity and authority",
    purpose: "Edification, exhortation, and comfort of the church"
  },
  {
    name: "Teaching",
    description: "The ability to explain and apply biblical truth effectively",
    biblicalReference: "Romans 12:7",
    expression: "Clear exposition and application of Scripture",
    purpose: "Building up believers in faith and knowledge"
  }
]

const theologicalPerspectives: Perspective[] = [
  {
    tradition: "Reformed",
    mainEmphasis: "Sovereign work in salvation and sanctification",
    keyTheologians: ["John Calvin", "Abraham Kuyper", "Sinclair Ferguson"],
    distinctives: [
      "Emphasis on effectual calling",
      "Spirit's role in regeneration",
      "Ordinary means of grace"
    ]
  },
  {
    tradition: "Pentecostal/Charismatic",
    mainEmphasis: "Experiential manifestations and spiritual gifts",
    keyTheologians: ["Gordon Fee", "Clark Pinnock", "Frank Macchia"],
    distinctives: [
      "Baptism in the Spirit",
      "Contemporary manifestations of gifts",
      "Emphasis on supernatural empowerment"
    ]
  }
]

export default function PneumatologyPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Pneumatology</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="attributes">Divine Attributes</TabsTrigger>
          <TabsTrigger value="work">Work of the Spirit</TabsTrigger>
          <TabsTrigger value="gifts">Spiritual Gifts</TabsTrigger>
          <TabsTrigger value="perspectives">Perspectives</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Understanding Pneumatology</CardTitle>
              <CardDescription>
                The systematic study of the person and work of the Holy Spirit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Pneumatology examines the nature, role, and ministry of the Holy Spirit
                in Christian theology. This includes study of the Spirit's person,
                attributes, works, and gifts, as well as the Spirit's relationship
                within the Trinity and with believers.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attributes">
          <div className="grid gap-4 md:grid-cols-2">
            {divineAttributes.map((attribute) => (
              <Card key={attribute.name}>
                <CardHeader>
                  <CardTitle>{attribute.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{attribute.description}</p>
                  <h4 className="font-semibold mt-2">Biblical Basis:</h4>
                  <ul className="list-disc pl-5">
                    {attribute.biblicalBasis.map((verse) => (
                      <li key={verse}>{verse}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="work">
          <div className="grid gap-4 md:grid-cols-2">
            {spiritWorks.map((work) => (
              <Card key={work.area}>
                <CardHeader>
                  <CardTitle>{work.area}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{work.description}</p>
                  <h4 className="font-semibold mt-2">Manifestations:</h4>
                  <ul className="list-disc pl-5">
                    {work.manifestations.map((manifestation) => (
                      <li key={manifestation}>{manifestation}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="gifts">
          <div className="grid gap-4 md:grid-cols-2">
            {spiritualGifts.map((gift) => (
              <Card key={gift.name}>
                <CardHeader>
                  <CardTitle>{gift.name}</CardTitle>
                  <CardDescription>{gift.biblicalReference}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{gift.description}</p>
                  <p className="mb-2"><strong>Expression:</strong> {gift.expression}</p>
                  <p><strong>Purpose:</strong> {gift.purpose}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="perspectives">
          <div className="grid gap-4 md:grid-cols-2">
            {theologicalPerspectives.map((perspective) => (
              <Card key={perspective.tradition}>
                <CardHeader>
                  <CardTitle>{perspective.tradition}</CardTitle>
                  <CardDescription>{perspective.mainEmphasis}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Key Theologians:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {perspective.keyTheologians.map((theologian) => (
                      <li key={theologian}>{theologian}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Distinctive Emphases:</h4>
                  <ul className="list-disc pl-5">
                    {perspective.distinctives.map((distinctive) => (
                      <li key={distinctive}>{distinctive}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
} 