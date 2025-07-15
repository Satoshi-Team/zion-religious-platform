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
  title: "Christianity and Politics | Cultural Impact",
  description: "Comprehensive exploration of the relationship between Christianity and politics throughout history, including political theories, church-state relations, and contemporary issues.",
  keywords: [
    "Christian Politics",
    "Religious Politics",
    "Church and State",
    "Political Theology",
    "Christian Democracy",
    "Religious Freedom",
    "Political Ethics",
    "Christian Political Thought",
    "Religious Liberty",
    "Faith and Politics"
  ]
}

interface HistoricalPeriod {
  period: string
  description: string
  developments: string[]
  figures: string[]
  principles: string[]
  impact: string[]
}

interface PoliticalTheory {
  theory: string
  description: string
  concepts: string[]
  proponents: string[]
  applications: string[]
  influence: string[]
}

interface ChurchStateRelation {
  model: string
  description: string
  principles: string[]
  examples: string[]
  challenges: string[]
  outcomes: string[]
}

interface ContemporaryIssue {
  issue: string
  description: string
  perspectives: string[]
  approaches: string[]
  challenges: string[]
  developments: string[]
}

const historicalPeriods: HistoricalPeriod[] = [
  {
    period: "Early Church Politics",
    description: "Political engagement of early Christianity under Roman rule",
    developments: [
      "Church organization",
      "Religious freedom",
      "Political theology",
      "Social ethics",
      "Imperial relations"
    ],
    figures: [
      "Constantine",
      "Augustine",
      "Ambrose",
      "Tertullian",
      "Eusebius"
    ],
    principles: [
      "Two kingdoms doctrine",
      "Just authority",
      "Religious liberty",
      "Moral witness",
      "Social responsibility"
    ],
    impact: [
      "Church-state relations",
      "Political thought",
      "Social reform",
      "Legal development",
      "Cultural change"
    ]
  },
  {
    period: "Medieval Church Politics",
    description: "Church-state relations in medieval Europe",
    developments: [
      "Papal authority",
      "Political theology",
      "Canon law",
      "Social order",
      "Religious governance"
    ],
    figures: [
      "Gregory VII",
      "Innocent III",
      "Thomas Aquinas",
      "Bernard of Clairvaux",
      "John of Salisbury"
    ],
    principles: [
      "Two swords doctrine",
      "Divine right",
      "Natural law",
      "Just war",
      "Common good"
    ],
    impact: [
      "Political systems",
      "Legal traditions",
      "Social institutions",
      "Educational development",
      "Cultural formation"
    ]
  }
]

const politicalTheories: PoliticalTheory[] = [
  {
    theory: "Christian Democracy",
    description: "Political ideology combining Christian ethics with democratic principles",
    concepts: [
      "Human dignity",
      "Subsidiarity",
      "Social justice",
      "Common good",
      "Solidarity"
    ],
    proponents: [
      "Konrad Adenauer",
      "Robert Schuman",
      "Alcide De Gasperi",
      "Jacques Maritain",
      "Luigi Sturzo"
    ],
    applications: [
      "European politics",
      "Social policy",
      "Economic systems",
      "International relations",
      "Cultural development"
    ],
    influence: [
      "Political parties",
      "Social movements",
      "Policy development",
      "International cooperation",
      "Cultural values"
    ]
  },
  {
    theory: "Religious Liberty",
    description: "Political theory supporting freedom of religious belief and practice",
    concepts: [
      "Freedom of conscience",
      "Religious pluralism",
      "Separation of church and state",
      "Religious rights",
      "Civil liberty"
    ],
    proponents: [
      "Roger Williams",
      "John Locke",
      "James Madison",
      "Thomas Jefferson",
      "John Leland"
    ],
    applications: [
      "Constitutional law",
      "Civil rights",
      "International law",
      "Public policy",
      "Social institutions"
    ],
    influence: [
      "Legal systems",
      "Political rights",
      "Social development",
      "Cultural diversity",
      "International relations"
    ]
  }
]

const churchStateRelations: ChurchStateRelation[] = [
  {
    model: "Separation of Church and State",
    description: "Institutional distinction between religious and political authority",
    principles: [
      "Religious freedom",
      "State neutrality",
      "Institutional autonomy",
      "Public pluralism",
      "Civil rights"
    ],
    examples: [
      "United States",
      "France",
      "Netherlands",
      "Australia",
      "Brazil"
    ],
    challenges: [
      "Religious expression",
      "Public policy",
      "Cultural values",
      "Social services",
      "Education"
    ],
    outcomes: [
      "Religious liberty",
      "Institutional independence",
      "Social pluralism",
      "Cultural diversity",
      "Civil society"
    ]
  },
  {
    model: "Religious Establishment",
    description: "Official recognition of religious institution by state",
    principles: [
      "Religious heritage",
      "Cultural identity",
      "Social cohesion",
      "Moral authority",
      "Public religion"
    ],
    examples: [
      "United Kingdom",
      "Greece",
      "Denmark",
      "Norway",
      "Malta"
    ],
    challenges: [
      "Religious pluralism",
      "Minority rights",
      "Social change",
      "Cultural diversity",
      "Secularization"
    ],
    outcomes: [
      "Cultural tradition",
      "Social identity",
      "Public religion",
      "Institutional support",
      "Moral influence"
    ]
  }
]

const contemporaryIssues: ContemporaryIssue[] = [
  {
    issue: "Religious Freedom",
    description: "Protection and promotion of religious liberty rights",
    perspectives: [
      "Human rights",
      "Civil liberties",
      "Cultural rights",
      "Minority protection",
      "Social pluralism"
    ],
    approaches: [
      "Legal protection",
      "Policy advocacy",
      "International cooperation",
      "Cultural dialogue",
      "Social engagement"
    ],
    challenges: [
      "Religious persecution",
      "Cultural conflict",
      "Political pressure",
      "Social discrimination",
      "Legal restrictions"
    ],
    developments: [
      "International law",
      "Policy reform",
      "Social movements",
      "Cultural change",
      "Institutional support"
    ]
  },
  {
    issue: "Public Policy Ethics",
    description: "Moral principles in political decision-making",
    perspectives: [
      "Social justice",
      "Human dignity",
      "Common good",
      "Moral values",
      "Public ethics"
    ],
    approaches: [
      "Policy analysis",
      "Ethical framework",
      "Public dialogue",
      "Social research",
      "Cultural engagement"
    ],
    challenges: [
      "Value pluralism",
      "Cultural diversity",
      "Political conflict",
      "Social complexity",
      "Implementation"
    ],
    developments: [
      "Policy innovation",
      "Ethical guidelines",
      "Social research",
      "Public dialogue",
      "Cultural change"
    ]
  }
]

export default function ChristianityPoliticsPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Christianity and Politics</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="historical">Historical</TabsTrigger>
          <TabsTrigger value="theories">Theories</TabsTrigger>
          <TabsTrigger value="relations">Church-State</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Christianity's Relationship with Politics</CardTitle>
              <CardDescription>
                The historical and ongoing interaction between Christian faith and political systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Christianity has significantly influenced political thought and
                systems throughout history, shaping concepts of authority,
                justice, and social order while engaging with various political
                structures and ideologies.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="historical">
          <div className="grid gap-4 md:grid-cols-2">
            {historicalPeriods.map((period) => (
              <Card key={period.period}>
                <CardHeader>
                  <CardTitle>{period.period}</CardTitle>
                  <CardDescription>{period.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Developments:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {period.developments.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Key Figures:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {period.figures.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Principles:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {period.principles.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Impact:</h4>
                  <ul className="list-disc pl-5">
                    {period.impact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="theories">
          <div className="grid gap-4 md:grid-cols-2">
            {politicalTheories.map((theory) => (
              <Card key={theory.theory}>
                <CardHeader>
                  <CardTitle>{theory.theory}</CardTitle>
                  <CardDescription>{theory.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Key Concepts:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {theory.concepts.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Proponents:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {theory.proponents.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Applications:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {theory.applications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Influence:</h4>
                  <ul className="list-disc pl-5">
                    {theory.influence.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="relations">
          <div className="grid gap-4 md:grid-cols-2">
            {churchStateRelations.map((relation) => (
              <Card key={relation.model}>
                <CardHeader>
                  <CardTitle>{relation.model}</CardTitle>
                  <CardDescription>{relation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Principles:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {relation.principles.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Examples:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {relation.examples.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {relation.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Outcomes:</h4>
                  <ul className="list-disc pl-5">
                    {relation.outcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="contemporary">
          <div className="grid gap-4 md:grid-cols-2">
            {contemporaryIssues.map((issue) => (
              <Card key={issue.issue}>
                <CardHeader>
                  <CardTitle>{issue.issue}</CardTitle>
                  <CardDescription>{issue.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Perspectives:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {issue.perspectives.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Approaches:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {issue.approaches.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {issue.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Developments:</h4>
                  <ul className="list-disc pl-5">
                    {issue.developments.map((item) => (
                      <li key={item}>{item}</li>
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