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
  title: "Biblical Hermeneutics | Principles of Biblical Interpretation",
  description: "Comprehensive guide to biblical hermeneutics, including interpretative methods, principles, and approaches to understanding Scripture.",
  keywords: [
    "Biblical Hermeneutics",
    "Exegesis",
    "Biblical Interpretation",
    "Hermeneutical Methods",
    "Biblical Context",
    "Textual Criticism",
    "Literary Analysis"
  ]
}

interface HermeneuticalPrinciple {
  name: string
  description: string
  application: string[]
  examples: string[]
}

interface InterpretiveMethod {
  method: string
  description: string
  steps: string[]
  strengths: string[]
  challenges: string[]
}

interface Genre {
  name: string
  characteristics: string[]
  interpretivePrinciples: string[]
  biblicalExamples: string[]
}

interface School {
  name: string
  description: string
  keyProponents: string[]
  mainPrinciples: string[]
  criticalEvaluation: string
}

const hermeneuticalPrinciples: HermeneuticalPrinciple[] = [
  {
    name: "Grammatical-Historical Method",
    description: "Understanding the text in its original historical and linguistic context",
    application: [
      "Study of original languages",
      "Historical background research",
      "Cultural context analysis",
      "Literary context examination"
    ],
    examples: [
      "Word studies in original languages",
      "Understanding ancient customs",
      "Analyzing historical context of passages"
    ]
  },
  {
    name: "Scripture Interprets Scripture",
    description: "Using clearer passages to understand more difficult ones",
    application: [
      "Cross-referencing related passages",
      "Comparing parallel accounts",
      "Understanding biblical themes across books"
    ],
    examples: [
      "Gospel parallels",
      "Old Testament quotations in New Testament",
      "Prophetic fulfillments"
    ]
  },
  {
    name: "Contextual Interpretation",
    description: "Understanding passages within their immediate and broader contexts",
    application: [
      "Literary context analysis",
      "Book context consideration",
      "Canonical context examination",
      "Covenantal framework understanding"
    ],
    examples: [
      "Epistle interpretation within historical situation",
      "Prophetic oracle within broader message",
      "Psalm within its collection"
    ]
  }
]

const interpretiveMethods: InterpretiveMethod[] = [
  {
    method: "Textual Criticism",
    description: "Determining the most reliable text from manuscript evidence",
    steps: [
      "Gather manuscript evidence",
      "Compare textual variants",
      "Apply critical principles",
      "Evaluate internal and external evidence"
    ],
    strengths: [
      "Scientific approach to text",
      "Helps establish reliable text",
      "Considers manuscript tradition"
    ],
    challenges: [
      "Complex methodology",
      "Incomplete manuscript evidence",
      "Technical expertise required"
    ]
  },
  {
    method: "Literary Analysis",
    description: "Examining the literary features and structures of the text",
    steps: [
      "Identify genre",
      "Analyze structure",
      "Study literary devices",
      "Consider composition"
    ],
    strengths: [
      "Respects literary nature of text",
      "Reveals artistic features",
      "Aids interpretation"
    ],
    challenges: [
      "Cultural distance in literary conventions",
      "Complex literary features",
      "Multiple genre possibilities"
    ]
  }
]

const biblicalGenres: Genre[] = [
  {
    name: "Narrative",
    characteristics: [
      "Story format",
      "Plot development",
      "Character portrayal",
      "Setting description"
    ],
    interpretivePrinciples: [
      "Identify main plot and subplots",
      "Consider character development",
      "Look for theological message",
      "Note historical context"
    ],
    biblicalExamples: [
      "Genesis narratives",
      "Samuel-Kings histories",
      "Gospel accounts"
    ]
  },
  {
    name: "Poetry",
    characteristics: [
      "Parallelism",
      "Imagery",
      "Figurative language",
      "Emotional expression"
    ],
    interpretivePrinciples: [
      "Identify poetic devices",
      "Consider emotional context",
      "Understand metaphorical language",
      "Note structural patterns"
    ],
    biblicalExamples: [
      "Psalms",
      "Song of Songs",
      "Prophetic poetry"
    ]
  }
]

const hermeneuticalSchools: School[] = [
  {
    name: "Historical-Critical Method",
    description: "Analyzes texts through historical investigation and critical methodology",
    keyProponents: [
      "Julius Wellhausen",
      "Rudolf Bultmann",
      "Ernst Troeltsch"
    ],
    mainPrinciples: [
      "Historical investigation",
      "Source criticism",
      "Form criticism",
      "Redaction criticism"
    ],
    criticalEvaluation: "Valuable for historical research but can undermine supernatural elements"
  },
  {
    name: "Canonical Approach",
    description: "Interprets texts within their final canonical context",
    keyProponents: [
      "Brevard Childs",
      "James Sanders",
      "Christopher Seitz"
    ],
    mainPrinciples: [
      "Final form emphasis",
      "Canonical context",
      "Theological interpretation",
      "Church tradition consideration"
    ],
    criticalEvaluation: "Maintains unity of Scripture but may downplay historical development"
  }
]

export default function BiblicalHermeneuticsPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Biblical Hermeneutics</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="principles">Principles</TabsTrigger>
          <TabsTrigger value="methods">Methods</TabsTrigger>
          <TabsTrigger value="genres">Genres</TabsTrigger>
          <TabsTrigger value="schools">Schools</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Understanding Biblical Hermeneutics</CardTitle>
              <CardDescription>
                The science and art of biblical interpretation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Biblical hermeneutics involves the principles and methods used to
                interpret Scripture. It combines linguistic analysis, historical
                research, literary study, and theological reflection to understand
                the meaning of biblical texts in their original context and their
                application today.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="principles">
          <div className="grid gap-4 md:grid-cols-2">
            {hermeneuticalPrinciples.map((principle) => (
              <Card key={principle.name}>
                <CardHeader>
                  <CardTitle>{principle.name}</CardTitle>
                  <CardDescription>{principle.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Application:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {principle.application.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Examples:</h4>
                  <ul className="list-disc pl-5">
                    {principle.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="methods">
          <div className="grid gap-4 md:grid-cols-2">
            {interpretiveMethods.map((method) => (
              <Card key={method.method}>
                <CardHeader>
                  <CardTitle>{method.method}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Steps:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {method.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Strengths:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {method.strengths.map((strength) => (
                      <li key={strength}>{strength}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5">
                    {method.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="genres">
          <div className="grid gap-4 md:grid-cols-2">
            {biblicalGenres.map((genre) => (
              <Card key={genre.name}>
                <CardHeader>
                  <CardTitle>{genre.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {genre.characteristics.map((char) => (
                      <li key={char}>{char}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Interpretive Principles:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {genre.interpretivePrinciples.map((principle) => (
                      <li key={principle}>{principle}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Biblical Examples:</h4>
                  <ul className="list-disc pl-5">
                    {genre.biblicalExamples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="schools">
          <div className="grid gap-4 md:grid-cols-2">
            {hermeneuticalSchools.map((school) => (
              <Card key={school.name}>
                <CardHeader>
                  <CardTitle>{school.name}</CardTitle>
                  <CardDescription>{school.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Key Proponents:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {school.keyProponents.map((proponent) => (
                      <li key={proponent}>{proponent}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Main Principles:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {school.mainPrinciples.map((principle) => (
                      <li key={principle}>{principle}</li>
                    ))}
                  </ul>
                  <p><strong>Critical Evaluation:</strong> {school.criticalEvaluation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
} 