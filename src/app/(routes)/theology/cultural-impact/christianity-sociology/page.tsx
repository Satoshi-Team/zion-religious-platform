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
  title: "Christianity and Sociology | Cultural Impact",
  description: "Exploration of the relationship between Christianity and sociology, including social structures, religious institutions, cultural dynamics, and contemporary social issues.",
  keywords: [
    "Christian Sociology",
    "Religious Institutions",
    "Social Dynamics",
    "Religious Communities",
    "Faith and Society",
    "Social Change",
    "Religious Identity",
    "Cultural Analysis",
    "Social Justice",
    "Religious Organizations"
  ]
}

interface SociologicalPerspective {
  perspective: string
  description: string
  concepts: string[]
  theories: string[]
  applications: string[]
  implications: string[]
}

interface SocialInstitution {
  institution: string
  description: string
  functions: string[]
  structures: string[]
  challenges: string[]
  developments: string[]
}

interface CulturalDynamic {
  dynamic: string
  description: string
  patterns: string[]
  influences: string[]
  impacts: string[]
  trends: string[]
}

interface SocialIssue {
  issue: string
  description: string
  factors: string[]
  responses: string[]
  challenges: string[]
  approaches: string[]
}

const sociologicalPerspectives: SociologicalPerspective[] = [
  {
    perspective: "Religious Organization",
    description: "Analysis of religious institutions and organizational structures",
    concepts: [
      "Institutional dynamics",
      "Organizational structure",
      "Leadership patterns",
      "Community formation",
      "Social networks"
    ],
    theories: [
      "Organizational theory",
      "Social structure",
      "Network analysis",
      "Institutional change",
      "Community development"
    ],
    applications: [
      "Church organization",
      "Ministry development",
      "Community building",
      "Leadership training",
      "Institutional planning"
    ],
    implications: [
      "Organizational effectiveness",
      "Community cohesion",
      "Leadership development",
      "Social impact",
      "Institutional sustainability"
    ]
  },
  {
    perspective: "Religious Identity",
    description: "Study of religious identity formation and expression",
    concepts: [
      "Identity formation",
      "Religious socialization",
      "Cultural expression",
      "Group dynamics",
      "Social boundaries"
    ],
    theories: [
      "Identity theory",
      "Social construction",
      "Cultural analysis",
      "Group dynamics",
      "Boundary maintenance"
    ],
    applications: [
      "Faith formation",
      "Community development",
      "Cultural engagement",
      "Group integration",
      "Identity expression"
    ],
    implications: [
      "Personal development",
      "Community formation",
      "Cultural interaction",
      "Social integration",
      "Identity maintenance"
    ]
  }
]

const socialInstitutions: SocialInstitution[] = [
  {
    institution: "Church Community",
    description: "Analysis of church as a social institution",
    functions: [
      "Spiritual formation",
      "Social support",
      "Cultural transmission",
      "Moral guidance",
      "Community building"
    ],
    structures: [
      "Organizational hierarchy",
      "Ministry programs",
      "Community groups",
      "Leadership roles",
      "Support systems"
    ],
    challenges: [
      "Cultural relevance",
      "Generational change",
      "Resource allocation",
      "Leadership development",
      "Community engagement"
    ],
    developments: [
      "Organizational innovation",
      "Ministry adaptation",
      "Community outreach",
      "Leadership training",
      "Program development"
    ]
  },
  {
    institution: "Religious Education",
    description: "Social analysis of religious education systems",
    functions: [
      "Faith formation",
      "Knowledge transmission",
      "Cultural preservation",
      "Social integration",
      "Leadership development"
    ],
    structures: [
      "Educational programs",
      "Teaching roles",
      "Curriculum design",
      "Learning communities",
      "Assessment systems"
    ],
    challenges: [
      "Cultural adaptation",
      "Educational quality",
      "Resource limitations",
      "Program relevance",
      "Student engagement"
    ],
    developments: [
      "Program innovation",
      "Teaching methods",
      "Curriculum development",
      "Learning assessment",
      "Community integration"
    ]
  }
]

const culturalDynamics: CulturalDynamic[] = [
  {
    dynamic: "Religious Change",
    description: "Analysis of religious and cultural transformation",
    patterns: [
      "Secularization",
      "Religious revival",
      "Cultural adaptation",
      "Institutional change",
      "Social transformation"
    ],
    influences: [
      "Cultural trends",
      "Social movements",
      "Technological change",
      "Generational shifts",
      "Global dynamics"
    ],
    impacts: [
      "Faith expression",
      "Community life",
      "Social practices",
      "Cultural values",
      "Institutional forms"
    ],
    trends: [
      "Digital religion",
      "Cultural engagement",
      "Social innovation",
      "Community adaptation",
      "Institutional reform"
    ]
  },
  {
    dynamic: "Social Integration",
    description: "Analysis of religious and social integration",
    patterns: [
      "Community formation",
      "Cultural interaction",
      "Social networking",
      "Identity development",
      "Group dynamics"
    ],
    influences: [
      "Social context",
      "Cultural diversity",
      "Community needs",
      "Identity factors",
      "Group processes"
    ],
    impacts: [
      "Community cohesion",
      "Social harmony",
      "Cultural exchange",
      "Identity formation",
      "Group development"
    ],
    trends: [
      "Multicultural ministry",
      "Community building",
      "Cultural dialogue",
      "Identity expression",
      "Group formation"
    ]
  }
]

const socialIssues: SocialIssue[] = [
  {
    issue: "Religious Pluralism",
    description: "Challenges and opportunities of religious diversity",
    factors: [
      "Cultural diversity",
      "Religious freedom",
      "Social interaction",
      "Identity expression",
      "Community relations"
    ],
    responses: [
      "Interfaith dialogue",
      "Cultural education",
      "Community building",
      "Social engagement",
      "Policy development"
    ],
    challenges: [
      "Cultural tension",
      "Religious conflict",
      "Social division",
      "Identity issues",
      "Community stress"
    ],
    approaches: [
      "Dialogue promotion",
      "Cultural understanding",
      "Community integration",
      "Social cooperation",
      "Policy implementation"
    ]
  },
  {
    issue: "Social Justice",
    description: "Religious engagement with social justice issues",
    factors: [
      "Social inequality",
      "Economic disparity",
      "Cultural discrimination",
      "Political power",
      "Resource distribution"
    ],
    responses: [
      "Advocacy work",
      "Community action",
      "Policy reform",
      "Social programs",
      "Resource allocation"
    ],
    challenges: [
      "Systemic barriers",
      "Resource limitations",
      "Political resistance",
      "Social complexity",
      "Implementation issues"
    ],
    approaches: [
      "Social advocacy",
      "Community organizing",
      "Policy development",
      "Program implementation",
      "Resource mobilization"
    ]
  }
]

export default function ChristianitySociologyPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Christianity and Sociology</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="perspectives">Perspectives</TabsTrigger>
          <TabsTrigger value="institutions">Institutions</TabsTrigger>
          <TabsTrigger value="dynamics">Dynamics</TabsTrigger>
          <TabsTrigger value="issues">Issues</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Christianity and Sociology Overview</CardTitle>
              <CardDescription>
                The intersection of Christian faith with social structures and dynamics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The relationship between Christianity and sociology examines how
                religious faith shapes and is shaped by social structures,
                institutions, and cultural dynamics.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="perspectives">
          <div className="grid gap-4 md:grid-cols-2">
            {sociologicalPerspectives.map((perspective) => (
              <Card key={perspective.perspective}>
                <CardHeader>
                  <CardTitle>{perspective.perspective}</CardTitle>
                  <CardDescription>{perspective.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Concepts:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {perspective.concepts.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Theories:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {perspective.theories.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Applications:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {perspective.applications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Implications:</h4>
                  <ul className="list-disc pl-5">
                    {perspective.implications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="institutions">
          <div className="grid gap-4 md:grid-cols-2">
            {socialInstitutions.map((institution) => (
              <Card key={institution.institution}>
                <CardHeader>
                  <CardTitle>{institution.institution}</CardTitle>
                  <CardDescription>{institution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Functions:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {institution.functions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Structures:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {institution.structures.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {institution.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Developments:</h4>
                  <ul className="list-disc pl-5">
                    {institution.developments.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="dynamics">
          <div className="grid gap-4 md:grid-cols-2">
            {culturalDynamics.map((dynamic) => (
              <Card key={dynamic.dynamic}>
                <CardHeader>
                  <CardTitle>{dynamic.dynamic}</CardTitle>
                  <CardDescription>{dynamic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Patterns:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {dynamic.patterns.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Influences:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {dynamic.influences.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Impacts:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {dynamic.impacts.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Trends:</h4>
                  <ul className="list-disc pl-5">
                    {dynamic.trends.map((item) => (
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
            {socialIssues.map((issue) => (
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
                  <h4 className="font-semibold">Responses:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {issue.responses.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {issue.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Approaches:</h4>
                  <ul className="list-disc pl-5">
                    {issue.approaches.map((item) => (
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