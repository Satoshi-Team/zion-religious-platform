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
  title: "Eschatology | Christian Doctrine of Last Things",
  description: "Comprehensive exploration of Christian eschatology, including end times, resurrection, judgment, and eternal states.",
  keywords: [
    "Eschatology",
    "End Times",
    "Second Coming",
    "Resurrection",
    "Final Judgment",
    "Millennium",
    "New Creation",
    "Kingdom of God"
  ]
}

interface EschatologicalView {
  name: string
  description: string
  keyFeatures: string[]
  proponents: string[]
  biblicalSupport: string[]
}

interface LastThings {
  event: string
  description: string
  biblicalReferences: string[]
  theologicalSignificance: string
}

interface MillennialView {
  position: string
  description: string
  interpretation: string
  mainProponents: string[]
  keyTexts: string[]
}

interface EternalState {
  aspect: string
  description: string
  biblicalBasis: string[]
  implications: string[]
}

const eschatologicalViews: EschatologicalView[] = [
  {
    name: "Historical Premillennialism",
    description: "Christ returns before the millennium to establish His kingdom",
    keyFeatures: [
      "Post-tribulational rapture",
      "Literal millennium",
      "Progressive unfolding of end-time events"
    ],
    proponents: ["George Eldon Ladd", "Wayne Grudem", "Justin Martyr"],
    biblicalSupport: ["Revelation 20:1-6", "1 Thessalonians 4:16-17"]
  },
  {
    name: "Amillennialism",
    description: "Millennium is symbolic of Christ's current reign",
    keyFeatures: [
      "Symbolic interpretation of Revelation 20",
      "Church age is the millennium",
      "Single resurrection and judgment"
    ],
    proponents: ["Augustine", "Louis Berkhof", "Anthony Hoekema"],
    biblicalSupport: ["Matthew 12:29", "Colossians 2:15", "John 5:28-29"]
  },
  {
    name: "Postmillennialism",
    description: "Christ returns after a millennium of Christian influence",
    keyFeatures: [
      "Progressive victory of the gospel",
      "Cultural transformation",
      "Optimistic view of history"
    ],
    proponents: ["Jonathan Edwards", "Loraine Boettner", "Keith Mathison"],
    biblicalSupport: ["Matthew 13:31-33", "Isaiah 2:2-4"]
  }
]

const lastThingsEvents: LastThings[] = [
  {
    event: "Second Coming of Christ",
    description: "The visible, personal return of Christ in glory",
    biblicalReferences: ["Acts 1:11", "1 Thessalonians 4:16", "Revelation 1:7"],
    theologicalSignificance: "Culmination of redemptive history and final victory over evil"
  },
  {
    event: "Resurrection of the Dead",
    description: "The bodily resurrection of all people for final judgment",
    biblicalReferences: ["John 5:28-29", "1 Corinthians 15:12-58"],
    theologicalSignificance: "Victory over death and vindication of God's people"
  },
  {
    event: "Final Judgment",
    description: "Universal judgment of all people based on their works and faith",
    biblicalReferences: ["Matthew 25:31-46", "Revelation 20:11-15"],
    theologicalSignificance: "Manifestation of God's justice and righteousness"
  }
]

const eternalStates: EternalState[] = [
  {
    aspect: "New Heaven and New Earth",
    description: "The renewed and transformed creation as God's dwelling place with His people",
    biblicalBasis: ["Revelation 21:1-5", "2 Peter 3:13", "Isaiah 65:17"],
    implications: [
      "Physical renewal of creation",
      "Elimination of sin and its effects",
      "Perfect communion with God",
      "Fulfillment of cultural mandate"
    ]
  },
  {
    aspect: "Eternal Life",
    description: "The blessed final state of the redeemed in God's presence",
    biblicalBasis: ["John 17:3", "Revelation 22:1-5", "1 Corinthians 13:12"],
    implications: [
      "Perfect knowledge of God",
      "Eternal worship and service",
      "Restored relationships",
      "Endless joy and satisfaction"
    ]
  }
]

export default function EschatologyPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Eschatology</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="views">Millennial Views</TabsTrigger>
          <TabsTrigger value="events">Last Things</TabsTrigger>
          <TabsTrigger value="eternal">Eternal State</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Understanding Eschatology</CardTitle>
              <CardDescription>
                The study of last things in Christian theology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Eschatology examines Christian teachings about the end times,
                including the return of Christ, resurrection, judgment, and the
                eternal state. It encompasses both personal eschatology (death,
                intermediate state, resurrection) and cosmic eschatology (second
                coming, millennium, new creation).
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="views">
          <div className="grid gap-4 md:grid-cols-2">
            {eschatologicalViews.map((view) => (
              <Card key={view.name}>
                <CardHeader>
                  <CardTitle>{view.name}</CardTitle>
                  <CardDescription>{view.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {view.keyFeatures.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Notable Proponents:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {view.proponents.map((proponent) => (
                      <li key={proponent}>{proponent}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Biblical Support:</h4>
                  <ul className="list-disc pl-5">
                    {view.biblicalSupport.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events">
          <div className="grid gap-4 md:grid-cols-2">
            {lastThingsEvents.map((event) => (
              <Card key={event.event}>
                <CardHeader>
                  <CardTitle>{event.event}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{event.description}</p>
                  <h4 className="font-semibold mt-2">Biblical References:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {event.biblicalReferences.map((ref) => (
                      <li key={ref}>{ref}</li>
                    ))}
                  </ul>
                  <p><strong>Significance:</strong> {event.theologicalSignificance}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="eternal">
          <div className="grid gap-4 md:grid-cols-2">
            {eternalStates.map((state) => (
              <Card key={state.aspect}>
                <CardHeader>
                  <CardTitle>{state.aspect}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{state.description}</p>
                  <h4 className="font-semibold">Biblical Basis:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {state.biblicalBasis.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Implications:</h4>
                  <ul className="list-disc pl-5">
                    {state.implications.map((implication) => (
                      <li key={implication}>{implication}</li>
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