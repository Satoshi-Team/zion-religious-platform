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
  title: "Contemporary Period | Christian Historical Theology",
  description: "Comprehensive exploration of Contemporary Christianity (1900-present), including modern theological movements, global developments, and current challenges.",
  keywords: [
    "Contemporary Christianity",
    "Modern Theology",
    "Liberation Theology",
    "Neo-orthodoxy",
    "Evangelicalism",
    "Ecumenism",
    "Global Christianity"
  ]
}

interface Movement {
  name: string
  period: string
  description: string
  keyFigures: string[]
  mainIdeas: string[]
  impact: string[]
  currentStatus: string
}

interface Theologian {
  name: string
  years: string
  tradition: string
  majorWorks: string[]
  keyIdeas: string[]
  influence: string[]
  significance: string
}

interface Development {
  area: string
  description: string
  characteristics: string[]
  challenges: string[]
  responses: string[]
  futureImplications: string[]
}

interface GlobalTrend {
  trend: string
  description: string
  manifestations: string[]
  impact: string[]
  challenges: string[]
  opportunities: string[]
}

const theologicalMovements: Movement[] = [
  {
    name: "Neo-orthodoxy",
    period: "1920s-1960s",
    description: "Theological movement emphasizing divine transcendence and biblical revelation",
    keyFigures: [
      "Karl Barth",
      "Emil Brunner",
      "Reinhold Niebuhr",
      "Paul Tillich"
    ],
    mainIdeas: [
      "Word of God theology",
      "Divine transcendence",
      "Crisis theology",
      "Dialectical method",
      "Christian realism"
    ],
    impact: [
      "Revival of Reformed theology",
      "Critique of liberalism",
      "Biblical theology movement",
      "Political theology"
    ],
    currentStatus: "Continuing influence through post-liberal theology"
  },
  {
    name: "Liberation Theology",
    period: "1960s-present",
    description: "Theology emphasizing social and political liberation",
    keyFigures: [
      "Gustavo Gutiérrez",
      "Leonardo Boff",
      "James Cone",
      "Elisabeth Schüssler Fiorenza"
    ],
    mainIdeas: [
      "Preferential option for the poor",
      "Social justice",
      "Political liberation",
      "Contextual interpretation",
      "Praxis-oriented theology"
    ],
    impact: [
      "Social justice movements",
      "Contextual theologies",
      "Political engagement",
      "Feminist theology"
    ],
    currentStatus: "Diverse global expressions and ongoing development"
  },
  {
    name: "Evangelical Theology",
    period: "1940s-present",
    description: "Conservative Protestant theology emphasizing biblical authority",
    keyFigures: [
      "Carl F.H. Henry",
      "John Stott",
      "J.I. Packer",
      "Alister McGrath"
    ],
    mainIdeas: [
      "Biblical inerrancy",
      "Conversion experience",
      "Missionary emphasis",
      "Social engagement",
      "Orthodox doctrine"
    ],
    impact: [
      "Global evangelicalism",
      "Biblical scholarship",
      "Missionary movements",
      "Cultural engagement"
    ],
    currentStatus: "Major global force with diverse expressions"
  }
]

const contemporaryTheologians: Theologian[] = [
  {
    name: "Karl Barth",
    years: "1886-1968",
    tradition: "Reformed/Neo-orthodox",
    majorWorks: [
      "Church Dogmatics",
      "The Epistle to the Romans",
      "Evangelical Theology",
      "The Word of God and the Word of Man"
    ],
    keyIdeas: [
      "Word of God theology",
      "Christocentric revelation",
      "Divine freedom",
      "Election in Christ",
      "Analogia fidei"
    ],
    influence: [
      "Neo-orthodoxy",
      "Biblical theology",
      "Political theology",
      "Ecumenical movement"
    ],
    significance: "Most influential Protestant theologian of 20th century"
  },
  {
    name: "Hans Urs von Balthasar",
    years: "1905-1988",
    tradition: "Catholic",
    majorWorks: [
      "The Glory of the Lord",
      "Theo-Drama",
      "Theo-Logic",
      "Love Alone Is Credible"
    ],
    keyIdeas: [
      "Theological aesthetics",
      "Dramatic theology",
      "Trinitarian theology",
      "Catholic universalism"
    ],
    influence: [
      "Catholic theology",
      "Theological aesthetics",
      "Ecumenical dialogue",
      "Spiritual theology"
    ],
    significance: "Major Catholic theological innovator"
  }
]

const theologicalDevelopments: Development[] = [
  {
    area: "Ecumenical Movement",
    description: "Efforts toward Christian unity and cooperation",
    characteristics: [
      "Institutional dialogue",
      "Theological convergence",
      "Common witness",
      "Shared service",
      "Unity in diversity"
    ],
    challenges: [
      "Doctrinal differences",
      "Institutional inertia",
      "Cultural divisions",
      "Authority issues"
    ],
    responses: [
      "Bilateral dialogues",
      "Common statements",
      "Practical cooperation",
      "Spiritual ecumenism"
    ],
    futureImplications: [
      "Continued dialogue",
      "Growing cooperation",
      "New unity models",
      "Global Christianity"
    ]
  },
  {
    area: "Global Christianity",
    description: "Shift of Christianity's center to Global South",
    characteristics: [
      "Demographic shift",
      "Cultural diversity",
      "Indigenous theology",
      "Pentecostal growth",
      "Mission from everywhere"
    ],
    challenges: [
      "Cultural adaptation",
      "Theological education",
      "Resource distribution",
      "Power dynamics"
    ],
    responses: [
      "Contextual theology",
      "Leadership development",
      "Resource sharing",
      "Partnership models"
    ],
    futureImplications: [
      "Continued growth",
      "Theological diversity",
      "New expressions",
      "Global partnerships"
    ]
  }
]

const globalTrends: GlobalTrend[] = [
  {
    trend: "Pentecostalization",
    description: "Growing influence of Pentecostal-charismatic spirituality",
    manifestations: [
      "Charismatic worship",
      "Spirit emphasis",
      "Healing ministry",
      "Experiential faith",
      "Global reach"
    ],
    impact: [
      "Worship styles",
      "Spiritual practices",
      "Church growth",
      "Global Christianity"
    ],
    challenges: [
      "Theological depth",
      "Cultural adaptation",
      "Institutional development",
      "Leadership training"
    ],
    opportunities: [
      "Spiritual renewal",
      "Global expansion",
      "Cultural engagement",
      "Youth appeal"
    ]
  },
  {
    trend: "Digital Christianity",
    description: "Impact of digital technology on Christian faith and practice",
    manifestations: [
      "Online worship",
      "Digital ministry",
      "Social media evangelism",
      "Virtual communities",
      "Digital resources"
    ],
    impact: [
      "Church practices",
      "Community formation",
      "Ministry methods",
      "Theological education"
    ],
    challenges: [
      "Digital divide",
      "Virtual vs physical",
      "Information quality",
      "Community authenticity"
    ],
    opportunities: [
      "Global reach",
      "Resource access",
      "Innovation",
      "New connections"
    ]
  }
]

export default function ContemporaryPeriodPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Contemporary Period</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="movements">Movements</TabsTrigger>
          <TabsTrigger value="theologians">Theologians</TabsTrigger>
          <TabsTrigger value="developments">Developments</TabsTrigger>
          <TabsTrigger value="trends">Global Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Understanding the Contemporary Period</CardTitle>
              <CardDescription>
                Christianity in the modern and postmodern world
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The Contemporary Period (1900-present) has seen unprecedented
                changes in Christian thought and practice, including the rise
                of global Christianity, new theological movements, and
                responses to modern challenges.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="movements">
          <div className="grid gap-4 md:grid-cols-2">
            {theologicalMovements.map((movement) => (
              <Card key={movement.name}>
                <CardHeader>
                  <CardTitle>{movement.name}</CardTitle>
                  <CardDescription>{movement.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{movement.description}</p>
                  <h4 className="font-semibold">Key Figures:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {movement.keyFigures.map((figure) => (
                      <li key={figure}>{figure}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Main Ideas:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {movement.mainIdeas.map((idea) => (
                      <li key={idea}>{idea}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Impact:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {movement.impact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p><strong>Current Status:</strong> {movement.currentStatus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="theologians">
          <div className="grid gap-4 md:grid-cols-2">
            {contemporaryTheologians.map((theologian) => (
              <Card key={theologian.name}>
                <CardHeader>
                  <CardTitle>{theologian.name}</CardTitle>
                  <CardDescription>{theologian.years} - {theologian.tradition}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Major Works:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {theologian.majorWorks.map((work) => (
                      <li key={work}>{work}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Key Ideas:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {theologian.keyIdeas.map((idea) => (
                      <li key={idea}>{idea}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Influence:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {theologian.influence.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p><strong>Significance:</strong> {theologian.significance}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="developments">
          <div className="grid gap-4 md:grid-cols-2">
            {theologicalDevelopments.map((development) => (
              <Card key={development.area}>
                <CardHeader>
                  <CardTitle>{development.area}</CardTitle>
                  <CardDescription>{development.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {development.characteristics.map((char) => (
                      <li key={char}>{char}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {development.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Responses:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {development.responses.map((response) => (
                      <li key={response}>{response}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Future Implications:</h4>
                  <ul className="list-disc pl-5">
                    {development.futureImplications.map((implication) => (
                      <li key={implication}>{implication}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="trends">
          <div className="grid gap-4 md:grid-cols-2">
            {globalTrends.map((trend) => (
              <Card key={trend.trend}>
                <CardHeader>
                  <CardTitle>{trend.trend}</CardTitle>
                  <CardDescription>{trend.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Manifestations:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {trend.manifestations.map((manifestation) => (
                      <li key={manifestation}>{manifestation}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Impact:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {trend.impact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {trend.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Opportunities:</h4>
                  <ul className="list-disc pl-5">
                    {trend.opportunities.map((opportunity) => (
                      <li key={opportunity}>{opportunity}</li>
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