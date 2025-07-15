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
  title: "Christianity and Psychology | Cultural Impact",
  description: "Exploration of the relationship between Christianity and psychology, including integration models, therapeutic approaches, and contemporary issues.",
  keywords: [
    "Christian Psychology",
    "Integration Models",
    "Pastoral Counseling",
    "Christian Counseling",
    "Faith-Based Therapy",
    "Religious Psychology",
    "Spiritual Formation",
    "Mental Health",
    "Christian Therapy",
    "Biblical Counseling"
  ]
}

interface IntegrationModel {
  model: string
  description: string
  principles: string[]
  methods: string[]
  applications: string[]
  challenges: string[]
}

interface TherapeuticApproach {
  approach: string
  description: string
  methods: string[]
  techniques: string[]
  benefits: string[]
  considerations: string[]
}

interface PsychologicalDomain {
  domain: string
  description: string
  concepts: string[]
  research: string[]
  implications: string[]
  applications: string[]
}

interface ContemporaryIssue {
  issue: string
  description: string
  challenges: string[]
  responses: string[]
  practices: string[]
  developments: string[]
}

const integrationModels: IntegrationModel[] = [
  {
    model: "Faith-Psychology Integration",
    description: "Systematic integration of Christian faith and psychological insights",
    principles: [
      "Biblical authority",
      "Scientific validity",
      "Holistic understanding",
      "Truth integration",
      "Ethical practice"
    ],
    methods: [
      "Biblical analysis",
      "Psychological research",
      "Theological reflection",
      "Clinical practice",
      "Interdisciplinary dialogue"
    ],
    applications: [
      "Counseling practice",
      "Research methodology",
      "Theory development",
      "Clinical training",
      "Spiritual formation"
    ],
    challenges: [
      "Methodological differences",
      "Worldview conflicts",
      "Integration complexity",
      "Practice standards",
      "Ethical considerations"
    ]
  },
  {
    model: "Biblical Counseling",
    description: "Counseling approach based primarily on biblical principles",
    principles: [
      "Scripture sufficiency",
      "Biblical anthropology",
      "Spiritual transformation",
      "Community context",
      "Pastoral care"
    ],
    methods: [
      "Biblical guidance",
      "Spiritual direction",
      "Character formation",
      "Community support",
      "Prayer integration"
    ],
    applications: [
      "Personal counseling",
      "Marriage therapy",
      "Family ministry",
      "Discipleship",
      "Crisis intervention"
    ],
    challenges: [
      "Clinical issues",
      "Professional recognition",
      "Scope limitations",
      "Training standards",
      "Integration questions"
    ]
  }
]

const therapeuticApproaches: TherapeuticApproach[] = [
  {
    approach: "Christian Cognitive Therapy",
    description: "Integration of cognitive therapy with Christian principles",
    methods: [
      "Thought analysis",
      "Biblical reflection",
      "Behavioral change",
      "Spiritual practices",
      "Cognitive restructuring"
    ],
    techniques: [
      "Scripture meditation",
      "Thought journaling",
      "Prayer integration",
      "Biblical reframing",
      "Spiritual exercises"
    ],
    benefits: [
      "Faith integration",
      "Cognitive change",
      "Spiritual growth",
      "Emotional healing",
      "Behavioral improvement"
    ],
    considerations: [
      "Faith context",
      "Clinical appropriateness",
      "Cultural sensitivity",
      "Integration balance",
      "Treatment goals"
    ]
  },
  {
    approach: "Pastoral Counseling",
    description: "Integration of psychological and spiritual care",
    methods: [
      "Spiritual assessment",
      "Psychological insight",
      "Pastoral care",
      "Faith integration",
      "Community support"
    ],
    techniques: [
      "Active listening",
      "Spiritual direction",
      "Prayer ministry",
      "Scripture application",
      "Community resources"
    ],
    benefits: [
      "Holistic care",
      "Spiritual support",
      "Community connection",
      "Faith development",
      "Life integration"
    ],
    considerations: [
      "Professional boundaries",
      "Clinical limitations",
      "Referral needs",
      "Ethical guidelines",
      "Supervision requirements"
    ]
  }
]

const psychologicalDomains: PsychologicalDomain[] = [
  {
    domain: "Spiritual Formation",
    description: "Psychological aspects of spiritual development",
    concepts: [
      "Identity formation",
      "Faith development",
      "Spiritual maturity",
      "Character growth",
      "Religious experience"
    ],
    research: [
      "Development studies",
      "Faith psychology",
      "Spiritual assessment",
      "Formation patterns",
      "Outcome research"
    ],
    implications: [
      "Formation practices",
      "Ministry approaches",
      "Counseling methods",
      "Educational strategies",
      "Community development"
    ],
    applications: [
      "Spiritual direction",
      "Formation programs",
      "Counseling practice",
      "Education design",
      "Ministry planning"
    ]
  },
  {
    domain: "Religious Coping",
    description: "Psychological study of religious coping mechanisms",
    concepts: [
      "Faith resources",
      "Spiritual support",
      "Religious meaning",
      "Coping strategies",
      "Community support"
    ],
    research: [
      "Coping studies",
      "Outcome research",
      "Faith factors",
      "Support systems",
      "Effectiveness measures"
    ],
    implications: [
      "Clinical practice",
      "Pastoral care",
      "Support systems",
      "Treatment planning",
      "Community resources"
    ],
    applications: [
      "Counseling methods",
      "Support programs",
      "Crisis intervention",
      "Community care",
      "Treatment planning"
    ]
  }
]

const contemporaryIssues: ContemporaryIssue[] = [
  {
    issue: "Mental Health and Faith",
    description: "Integration of mental health care and religious faith",
    challenges: [
      "Stigma reduction",
      "Treatment integration",
      "Faith sensitivity",
      "Professional training",
      "Community education"
    ],
    responses: [
      "Education programs",
      "Integration models",
      "Community outreach",
      "Professional development",
      "Research initiatives"
    ],
    practices: [
      "Integrated care",
      "Faith-sensitive therapy",
      "Community support",
      "Professional collaboration",
      "Education programs"
    ],
    developments: [
      "Treatment models",
      "Research studies",
      "Training programs",
      "Community initiatives",
      "Professional standards"
    ]
  },
  {
    issue: "Cultural Competency",
    description: "Cultural and religious sensitivity in psychological practice",
    challenges: [
      "Cultural understanding",
      "Religious diversity",
      "Practice adaptation",
      "Training needs",
      "Assessment methods"
    ],
    responses: [
      "Cultural training",
      "Practice guidelines",
      "Assessment tools",
      "Community engagement",
      "Research development"
    ],
    practices: [
      "Cultural assessment",
      "Adapted treatment",
      "Community consultation",
      "Professional development",
      "Research integration"
    ],
    developments: [
      "Training models",
      "Assessment tools",
      "Practice guidelines",
      "Research studies",
      "Professional standards"
    ]
  }
]

export default function ChristianityPsychologyPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Christianity and Psychology</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="integration">Integration</TabsTrigger>
          <TabsTrigger value="therapeutic">Therapeutic</TabsTrigger>
          <TabsTrigger value="domains">Domains</TabsTrigger>
          <TabsTrigger value="issues">Issues</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Christianity and Psychology Overview</CardTitle>
              <CardDescription>
                The integration of Christian faith and psychological understanding
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The relationship between Christianity and psychology involves the
                integration of faith perspectives with psychological insights,
                creating approaches that honor both spiritual and psychological
                dimensions of human experience.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integration">
          <div className="grid gap-4 md:grid-cols-2">
            {integrationModels.map((model) => (
              <Card key={model.model}>
                <CardHeader>
                  <CardTitle>{model.model}</CardTitle>
                  <CardDescription>{model.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Principles:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {model.principles.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Methods:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {model.methods.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Applications:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {model.applications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5">
                    {model.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="therapeutic">
          <div className="grid gap-4 md:grid-cols-2">
            {therapeuticApproaches.map((approach) => (
              <Card key={approach.approach}>
                <CardHeader>
                  <CardTitle>{approach.approach}</CardTitle>
                  <CardDescription>{approach.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Methods:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {approach.methods.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Techniques:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {approach.techniques.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Benefits:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {approach.benefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Considerations:</h4>
                  <ul className="list-disc pl-5">
                    {approach.considerations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="domains">
          <div className="grid gap-4 md:grid-cols-2">
            {psychologicalDomains.map((domain) => (
              <Card key={domain.domain}>
                <CardHeader>
                  <CardTitle>{domain.domain}</CardTitle>
                  <CardDescription>{domain.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Concepts:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {domain.concepts.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Research:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {domain.research.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Implications:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {domain.implications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Applications:</h4>
                  <ul className="list-disc pl-5">
                    {domain.applications.map((item) => (
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
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {issue.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Responses:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {issue.responses.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Practices:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {issue.practices.map((item) => (
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