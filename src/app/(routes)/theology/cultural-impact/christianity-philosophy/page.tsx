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
  title: "Christianity and Philosophy | Cultural Impact",
  description: "Exploration of the relationship between Christianity and philosophy, including philosophical theology, epistemology, ethics, and contemporary philosophical debates.",
  keywords: [
    "Christian Philosophy",
    "Philosophical Theology",
    "Religious Epistemology",
    "Christian Ethics",
    "Faith and Reason",
    "Natural Theology",
    "Religious Knowledge",
    "Moral Philosophy",
    "Christian Thought",
    "Philosophical Arguments"
  ]
}

interface PhilosophicalTradition {
  tradition: string
  description: string
  concepts: string[]
  thinkers: string[]
  contributions: string[]
  influences: string[]
}

interface PhilosophicalArgument {
  argument: string
  description: string
  premises: string[]
  implications: string[]
  critiques: string[]
  responses: string[]
}

interface PhilosophicalIssue {
  issue: string
  description: string
  perspectives: string[]
  debates: string[]
  significance: string[]
  developments: string[]
}

interface ContemporaryDialogue {
  topic: string
  description: string
  approaches: string[]
  challenges: string[]
  insights: string[]
  applications: string[]
}

const philosophicalTraditions: PhilosophicalTradition[] = [
  {
    tradition: "Scholastic Philosophy",
    description: "Medieval Christian philosophical tradition integrating faith and reason",
    concepts: [
      "Natural theology",
      "Divine attributes",
      "Analogical knowledge",
      "Metaphysical realism",
      "Rational theology"
    ],
    thinkers: [
      "Thomas Aquinas",
      "Bonaventure",
      "Duns Scotus",
      "William of Ockham",
      "Albert the Great"
    ],
    contributions: [
      "Faith-reason synthesis",
      "Systematic theology",
      "Philosophical method",
      "Natural law theory",
      "Metaphysical framework"
    ],
    influences: [
      "Catholic thought",
      "Western philosophy",
      "Educational systems",
      "Theological method",
      "Ethical theory"
    ]
  },
  {
    tradition: "Modern Christian Philosophy",
    description: "Contemporary philosophical engagement with Christian faith",
    concepts: [
      "Religious epistemology",
      "Reformed epistemology",
      "Divine action",
      "Religious language",
      "Moral realism"
    ],
    thinkers: [
      "Alvin Plantinga",
      "William Lane Craig",
      "Richard Swinburne",
      "Elizabeth Anscombe",
      "Nicholas Wolterstorff"
    ],
    contributions: [
      "Epistemological reform",
      "Philosophical theology",
      "Moral philosophy",
      "Religious knowledge",
      "Cultural engagement"
    ],
    influences: [
      "Analytic philosophy",
      "Religious thought",
      "Cultural dialogue",
      "Academic theology",
      "Public discourse"
    ]
  }
]

const philosophicalArguments: PhilosophicalArgument[] = [
  {
    argument: "Natural Theology",
    description: "Philosophical arguments for God's existence and attributes",
    premises: [
      "Cosmological arguments",
      "Teleological arguments",
      "Moral arguments",
      "Ontological arguments",
      "Design arguments"
    ],
    implications: [
      "Divine existence",
      "Divine attributes",
      "Creation purpose",
      "Moral foundation",
      "Human significance"
    ],
    critiques: [
      "Logical challenges",
      "Empirical questions",
      "Alternative explanations",
      "Methodological issues",
      "Philosophical limitations"
    ],
    responses: [
      "Refined arguments",
      "Evidential support",
      "Methodological defense",
      "Conceptual clarification",
      "Philosophical development"
    ]
  },
  {
    argument: "Religious Epistemology",
    description: "Philosophical analysis of religious knowledge and belief",
    premises: [
      "Warranted belief",
      "Religious experience",
      "Divine revelation",
      "Faith rationality",
      "Epistemic virtue"
    ],
    implications: [
      "Knowledge claims",
      "Belief justification",
      "Faith understanding",
      "Truth access",
      "Rational faith"
    ],
    critiques: [
      "Verification issues",
      "Epistemic limitations",
      "Pluralism challenges",
      "Cognitive bias",
      "Methodological concerns"
    ],
    responses: [
      "Reformed epistemology",
      "Experiential warrant",
      "Rational defense",
      "Epistemic frameworks",
      "Knowledge models"
    ]
  }
]

const philosophicalIssues: PhilosophicalIssue[] = [
  {
    issue: "Faith and Reason",
    description: "Relationship between religious faith and rational inquiry",
    perspectives: [
      "Harmony view",
      "Conflict thesis",
      "Independence model",
      "Integration approach",
      "Dialogue position"
    ],
    debates: [
      "Epistemological status",
      "Methodological differences",
      "Truth claims",
      "Knowledge sources",
      "Rational limits"
    ],
    significance: [
      "Intellectual integrity",
      "Faith understanding",
      "Cultural engagement",
      "Academic discourse",
      "Personal integration"
    ],
    developments: [
      "New synthesis",
      "Methodological advances",
      "Dialogue models",
      "Integration frameworks",
      "Cultural applications"
    ]
  },
  {
    issue: "Divine Action",
    description: "Philosophical analysis of God's interaction with the world",
    perspectives: [
      "Classical theism",
      "Process thought",
      "Open theism",
      "Neo-Thomism",
      "Scientific theology"
    ],
    debates: [
      "Causation models",
      "Freedom questions",
      "Natural law",
      "Divine sovereignty",
      "Human responsibility"
    ],
    significance: [
      "Theological understanding",
      "Scientific dialogue",
      "Practical implications",
      "Ethical considerations",
      "Pastoral applications"
    ],
    developments: [
      "New models",
      "Scientific integration",
      "Theological refinement",
      "Practical applications",
      "Cultural engagement"
    ]
  }
]

const contemporaryDialogues: ContemporaryDialogue[] = [
  {
    topic: "Science and Religion",
    description: "Philosophical engagement with science-faith questions",
    approaches: [
      "Integration models",
      "Dialogue methods",
      "Boundary analysis",
      "Methodological study",
      "Cultural engagement"
    ],
    challenges: [
      "Methodological differences",
      "Epistemological questions",
      "Cultural tensions",
      "Communication issues",
      "Integration problems"
    ],
    insights: [
      "Complementary understanding",
      "Methodological clarity",
      "Knowledge integration",
      "Cultural wisdom",
      "Practical applications"
    ],
    applications: [
      "Academic dialogue",
      "Public discourse",
      "Educational programs",
      "Cultural engagement",
      "Practical integration"
    ]
  },
  {
    topic: "Religious Pluralism",
    description: "Philosophical analysis of religious diversity",
    approaches: [
      "Exclusivist views",
      "Inclusivist models",
      "Pluralist theories",
      "Comparative methods",
      "Dialogue approaches"
    ],
    challenges: [
      "Truth claims",
      "Salvation questions",
      "Cultural differences",
      "Dialogue barriers",
      "Practical issues"
    ],
    insights: [
      "Truth understanding",
      "Cultural wisdom",
      "Dialogue methods",
      "Practical approaches",
      "Social applications"
    ],
    applications: [
      "Interfaith dialogue",
      "Cultural engagement",
      "Social cooperation",
      "Educational programs",
      "Practical initiatives"
    ]
  }
]

export default function ChristianityPhilosophyPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Christianity and Philosophy</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="traditions">Traditions</TabsTrigger>
          <TabsTrigger value="arguments">Arguments</TabsTrigger>
          <TabsTrigger value="issues">Issues</TabsTrigger>
          <TabsTrigger value="dialogues">Dialogues</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Christianity and Philosophy Overview</CardTitle>
              <CardDescription>
                The intersection of Christian thought with philosophical inquiry
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The relationship between Christianity and philosophy involves the
                systematic examination of religious truth claims, the nature of
                reality, knowledge, and ethics through philosophical methods and
                concepts.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="traditions">
          <div className="grid gap-4 md:grid-cols-2">
            {philosophicalTraditions.map((tradition) => (
              <Card key={tradition.tradition}>
                <CardHeader>
                  <CardTitle>{tradition.tradition}</CardTitle>
                  <CardDescription>{tradition.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Concepts:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {tradition.concepts.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Thinkers:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {tradition.thinkers.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Contributions:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {tradition.contributions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Influences:</h4>
                  <ul className="list-disc pl-5">
                    {tradition.influences.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="arguments">
          <div className="grid gap-4 md:grid-cols-2">
            {philosophicalArguments.map((argument) => (
              <Card key={argument.argument}>
                <CardHeader>
                  <CardTitle>{argument.argument}</CardTitle>
                  <CardDescription>{argument.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Premises:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {argument.premises.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Implications:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {argument.implications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Critiques:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {argument.critiques.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Responses:</h4>
                  <ul className="list-disc pl-5">
                    {argument.responses.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="issues">
          <div className="grid gap-4 md:grid-cols-2">
            {philosophicalIssues.map((issue) => (
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
                  <h4 className="font-semibold">Debates:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {issue.debates.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {issue.significance.map((item) => (
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

        <TabsContent value="dialogues">
          <div className="grid gap-4 md:grid-cols-2">
            {contemporaryDialogues.map((dialogue) => (
              <Card key={dialogue.topic}>
                <CardHeader>
                  <CardTitle>{dialogue.topic}</CardTitle>
                  <CardDescription>{dialogue.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Approaches:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {dialogue.approaches.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {dialogue.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Insights:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {dialogue.insights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Applications:</h4>
                  <ul className="list-disc pl-5">
                    {dialogue.applications.map((item) => (
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