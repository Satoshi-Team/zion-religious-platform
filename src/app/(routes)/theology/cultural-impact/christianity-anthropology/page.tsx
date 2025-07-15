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
  title: "Christianity and Anthropology | Cultural Impact",
  description: "Exploration of the relationship between Christianity and anthropology, including cultural expressions, religious practices, ritual analysis, and cross-cultural perspectives.",
  keywords: [
    "Christian Anthropology",
    "Religious Culture",
    "Cultural Studies",
    "Religious Practices",
    "Ritual Analysis",
    "Cross-Cultural Studies",
    "Religious Expression",
    "Cultural Christianity",
    "Religious Traditions",
    "Cultural Analysis"
  ]
}

interface CulturalDimension {
  dimension: string
  description: string
  elements: string[]
  expressions: string[]
  significance: string[]
  variations: string[]
}

interface ReligiousPractice {
  practice: string
  description: string
  forms: string[]
  functions: string[]
  meanings: string[]
  contexts: string[]
}

interface CrossCulturalPerspective {
  perspective: string
  description: string
  insights: string[]
  patterns: string[]
  implications: string[]
  applications: string[]
}

interface ContemporaryIssue {
  issue: string
  description: string
  factors: string[]
  manifestations: string[]
  challenges: string[]
  responses: string[]
}

const culturalDimensions: CulturalDimension[] = [
  {
    dimension: "Religious Symbolism",
    description: "Analysis of Christian symbolic systems and meanings",
    elements: [
      "Sacred symbols",
      "Ritual objects",
      "Religious art",
      "Symbolic language",
      "Sacred space"
    ],
    expressions: [
      "Liturgical practices",
      "Visual representations",
      "Narrative forms",
      "Material culture",
      "Spatial arrangements"
    ],
    significance: [
      "Identity formation",
      "Community cohesion",
      "Faith expression",
      "Cultural memory",
      "Spiritual meaning"
    ],
    variations: [
      "Cultural adaptations",
      "Regional differences",
      "Historical changes",
      "Contextual expressions",
      "Contemporary forms"
    ]
  },
  {
    dimension: "Sacred Narratives",
    description: "Study of Christian stories and mythological structures",
    elements: [
      "Creation stories",
      "Salvation narratives",
      "Saint legends",
      "Community histories",
      "Moral tales"
    ],
    expressions: [
      "Oral traditions",
      "Written texts",
      "Ritual performances",
      "Visual arts",
      "Musical forms"
    ],
    significance: [
      "Worldview formation",
      "Value transmission",
      "Identity construction",
      "Social memory",
      "Moral guidance"
    ],
    variations: [
      "Cultural interpretations",
      "Local adaptations",
      "Historical developments",
      "Contemporary retellings",
      "Cross-cultural forms"
    ]
  }
]

const religiousPractices: ReligiousPractice[] = [
  {
    practice: "Ritual Worship",
    description: "Analysis of Christian worship practices across cultures",
    forms: [
      "Liturgical worship",
      "Charismatic expression",
      "Contemplative practice",
      "Sacramental rituals",
      "Community gatherings"
    ],
    functions: [
      "Community formation",
      "Faith expression",
      "Spiritual formation",
      "Cultural preservation",
      "Identity reinforcement"
    ],
    meanings: [
      "Theological significance",
      "Cultural symbolism",
      "Social bonding",
      "Spiritual experience",
      "Identity expression"
    ],
    contexts: [
      "Cultural settings",
      "Historical periods",
      "Social contexts",
      "Geographic locations",
      "Contemporary adaptations"
    ]
  },
  {
    practice: "Life Cycle Rituals",
    description: "Study of Christian rites of passage and life transitions",
    forms: [
      "Baptism ceremonies",
      "Coming of age rites",
      "Marriage rituals",
      "Funeral practices",
      "Ordination rites"
    ],
    functions: [
      "Status transition",
      "Community integration",
      "Identity formation",
      "Social recognition",
      "Spiritual marking"
    ],
    meanings: [
      "Life transitions",
      "Community bonds",
      "Faith commitment",
      "Social status",
      "Spiritual growth"
    ],
    contexts: [
      "Family systems",
      "Community structures",
      "Cultural traditions",
      "Social networks",
      "Religious institutions"
    ]
  }
]

const crossCulturalPerspectives: CrossCulturalPerspective[] = [
  {
    perspective: "Inculturation",
    description: "Process of faith expression in cultural forms",
    insights: [
      "Cultural adaptation",
      "Faith translation",
      "Local expression",
      "Contextual theology",
      "Indigenous forms"
    ],
    patterns: [
      "Cultural integration",
      "Religious synthesis",
      "Local innovation",
      "Traditional preservation",
      "Contemporary adaptation"
    ],
    implications: [
      "Cultural authenticity",
      "Religious identity",
      "Community formation",
      "Faith transmission",
      "Social integration"
    ],
    applications: [
      "Worship forms",
      "Community life",
      "Religious education",
      "Social ministry",
      "Cultural engagement"
    ]
  },
  {
    perspective: "Global Christianity",
    description: "Analysis of Christianity as a global phenomenon",
    insights: [
      "Cultural diversity",
      "Religious adaptation",
      "Global connections",
      "Local expressions",
      "Transnational networks"
    ],
    patterns: [
      "Global spread",
      "Local adaptation",
      "Cultural exchange",
      "Network formation",
      "Identity negotiation"
    ],
    implications: [
      "Religious diversity",
      "Cultural exchange",
      "Global community",
      "Local identity",
      "Social change"
    ],
    applications: [
      "Mission work",
      "Cultural dialogue",
      "Community development",
      "Social engagement",
      "Global partnerships"
    ]
  }
]

const contemporaryIssues: ContemporaryIssue[] = [
  {
    issue: "Cultural Change",
    description: "Impact of cultural change on Christian communities",
    factors: [
      "Globalization",
      "Technological change",
      "Social mobility",
      "Cultural mixing",
      "Generational shifts"
    ],
    manifestations: [
      "Religious adaptation",
      "Cultural synthesis",
      "Identity formation",
      "Practice modification",
      "Community transformation"
    ],
    challenges: [
      "Tradition maintenance",
      "Identity preservation",
      "Community cohesion",
      "Faith transmission",
      "Cultural authenticity"
    ],
    responses: [
      "Cultural dialogue",
      "Adaptive practices",
      "Community building",
      "Educational programs",
      "Social engagement"
    ]
  },
  {
    issue: "Religious Identity",
    description: "Formation and expression of Christian identity in diverse contexts",
    factors: [
      "Cultural context",
      "Social dynamics",
      "Religious heritage",
      "Personal choice",
      "Community influence"
    ],
    manifestations: [
      "Identity expression",
      "Cultural practice",
      "Community participation",
      "Religious observance",
      "Social engagement"
    ],
    challenges: [
      "Cultural tension",
      "Identity conflict",
      "Social pressure",
      "Religious authenticity",
      "Community belonging"
    ],
    responses: [
      "Identity formation",
      "Cultural integration",
      "Community support",
      "Educational resources",
      "Social networks"
    ]
  }
]

export default function ChristianityAnthropologyPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Christianity and Anthropology</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="dimensions">Dimensions</TabsTrigger>
          <TabsTrigger value="practices">Practices</TabsTrigger>
          <TabsTrigger value="perspectives">Perspectives</TabsTrigger>
          <TabsTrigger value="issues">Issues</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Christianity and Anthropology Overview</CardTitle>
              <CardDescription>
                The study of Christianity through anthropological perspectives
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Anthropological approaches to Christianity examine how faith is
                expressed, practiced, and understood across different cultures
                and contexts, revealing the rich diversity of Christian experience
                and expression worldwide.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dimensions">
          <div className="grid gap-4 md:grid-cols-2">
            {culturalDimensions.map((dimension) => (
              <Card key={dimension.dimension}>
                <CardHeader>
                  <CardTitle>{dimension.dimension}</CardTitle>
                  <CardDescription>{dimension.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Elements:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {dimension.elements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Expressions:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {dimension.expressions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {dimension.significance.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Variations:</h4>
                  <ul className="list-disc pl-5">
                    {dimension.variations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="practices">
          <div className="grid gap-4 md:grid-cols-2">
            {religiousPractices.map((practice) => (
              <Card key={practice.practice}>
                <CardHeader>
                  <CardTitle>{practice.practice}</CardTitle>
                  <CardDescription>{practice.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Forms:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {practice.forms.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Functions:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {practice.functions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Meanings:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {practice.meanings.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Contexts:</h4>
                  <ul className="list-disc pl-5">
                    {practice.contexts.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="perspectives">
          <div className="grid gap-4 md:grid-cols-2">
            {crossCulturalPerspectives.map((perspective) => (
              <Card key={perspective.perspective}>
                <CardHeader>
                  <CardTitle>{perspective.perspective}</CardTitle>
                  <CardDescription>{perspective.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Insights:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {perspective.insights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Patterns:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {perspective.patterns.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Implications:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {perspective.implications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Applications:</h4>
                  <ul className="list-disc pl-5">
                    {perspective.applications.map((item) => (
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
            {contemporaryIssues.map((issue) => (
              <Card key={issue.issue}>
                <CardHeader>
                  <CardTitle>{issue.issue}</CardTitle>
                  <CardDescription>{issue.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Factors:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {issue.factors.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Manifestations:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {issue.manifestations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {issue.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Responses:</h4>
                  <ul className="list-disc pl-5">
                    {issue.responses.map((item) => (
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