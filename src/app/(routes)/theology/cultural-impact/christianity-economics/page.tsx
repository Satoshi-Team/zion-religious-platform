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
  title: "Christianity and Economics | Cultural Impact",
  description: "Comprehensive exploration of the relationship between Christianity and economic thought, including historical perspectives, ethical principles, and contemporary approaches.",
  keywords: [
    "Christian Economics",
    "Religious Economics",
    "Economic Ethics",
    "Christian Business",
    "Biblical Economics",
    "Economic Justice",
    "Christian Stewardship",
    "Business Ethics",
    "Economic Morality",
    "Faith and Economics"
  ]
}

interface EconomicPrinciple {
  principle: string
  description: string
  foundations: string[]
  applications: string[]
  implications: string[]
  examples: string[]
}

interface HistoricalDevelopment {
  era: string
  description: string
  concepts: string[]
  figures: string[]
  practices: string[]
  influence: string[]
}

interface EthicalApproach {
  approach: string
  description: string
  principles: string[]
  methods: string[]
  challenges: string[]
  outcomes: string[]
}

interface ContemporaryIssue {
  issue: string
  description: string
  perspectives: string[]
  responses: string[]
  challenges: string[]
  developments: string[]
}

const economicPrinciples: EconomicPrinciple[] = [
  {
    principle: "Stewardship",
    description: "Responsible management of resources as gifts from God",
    foundations: [
      "Divine ownership",
      "Human responsibility",
      "Resource management",
      "Accountability",
      "Sustainability"
    ],
    applications: [
      "Financial management",
      "Environmental care",
      "Resource allocation",
      "Investment decisions",
      "Business practices"
    ],
    implications: [
      "Ethical business",
      "Sustainable development",
      "Social responsibility",
      "Economic justice",
      "Environmental care"
    ],
    examples: [
      "Ethical investing",
      "Sustainable business",
      "Fair trade",
      "Charitable giving",
      "Resource conservation"
    ]
  },
  {
    principle: "Economic Justice",
    description: "Fair and equitable economic relationships and systems",
    foundations: [
      "Human dignity",
      "Common good",
      "Fair distribution",
      "Worker rights",
      "Social responsibility"
    ],
    applications: [
      "Fair wages",
      "Market ethics",
      "Labor rights",
      "Poverty alleviation",
      "Economic development"
    ],
    implications: [
      "Social equity",
      "Worker dignity",
      "Market fairness",
      "Poverty reduction",
      "Community development"
    ],
    examples: [
      "Living wage policies",
      "Fair trade practices",
      "Worker protections",
      "Community development",
      "Social enterprise"
    ]
  }
]

const historicalDevelopments: HistoricalDevelopment[] = [
  {
    era: "Medieval Economic Thought",
    description: "Christian economic principles in medieval society",
    concepts: [
      "Just price",
      "Usury prohibition",
      "Common good",
      "Guild system",
      "Social order"
    ],
    figures: [
      "Thomas Aquinas",
      "Bernardino of Siena",
      "Antonino of Florence",
      "Nicholas of Oresme",
      "Albert the Great"
    ],
    practices: [
      "Fair trade",
      "Guild regulation",
      "Market morality",
      "Social welfare",
      "Economic ethics"
    ],
    influence: [
      "Market ethics",
      "Business practices",
      "Social institutions",
      "Economic thought",
      "Labor relations"
    ]
  },
  {
    era: "Protestant Economic Ethics",
    description: "Economic thought influenced by Protestant Reformation",
    concepts: [
      "Work ethic",
      "Vocation",
      "Thrift",
      "Entrepreneurship",
      "Social responsibility"
    ],
    figures: [
      "Martin Luther",
      "John Calvin",
      "Max Weber",
      "R.H. Tawney",
      "Ernst Troeltsch"
    ],
    practices: [
      "Business development",
      "Capital investment",
      "Social welfare",
      "Economic development",
      "Market participation"
    ],
    influence: [
      "Capitalism development",
      "Business culture",
      "Work values",
      "Economic systems",
      "Social reform"
    ]
  }
]

const ethicalApproaches: EthicalApproach[] = [
  {
    approach: "Christian Business Ethics",
    description: "Application of Christian principles to business practices",
    principles: [
      "Integrity",
      "Service",
      "Stewardship",
      "Justice",
      "Human dignity"
    ],
    methods: [
      "Ethical decision-making",
      "Stakeholder consideration",
      "Value integration",
      "Social responsibility",
      "Environmental care"
    ],
    challenges: [
      "Market pressures",
      "Profit demands",
      "Competitive forces",
      "Cultural differences",
      "Implementation costs"
    ],
    outcomes: [
      "Sustainable business",
      "Ethical culture",
      "Social impact",
      "Employee wellbeing",
      "Community benefit"
    ]
  },
  {
    approach: "Social Enterprise",
    description: "Business models combining profit and social mission",
    principles: [
      "Social mission",
      "Financial sustainability",
      "Community impact",
      "Innovation",
      "Empowerment"
    ],
    methods: [
      "Business planning",
      "Social impact measurement",
      "Community engagement",
      "Market development",
      "Resource mobilization"
    ],
    challenges: [
      "Financial sustainability",
      "Market competition",
      "Impact measurement",
      "Scale issues",
      "Resource limitations"
    ],
    outcomes: [
      "Social change",
      "Economic development",
      "Community empowerment",
      "Sustainable solutions",
      "Market transformation"
    ]
  }
]

const contemporaryIssues: ContemporaryIssue[] = [
  {
    issue: "Economic Globalization",
    description: "Christian responses to global economic integration",
    perspectives: [
      "Global justice",
      "Cultural impact",
      "Environmental concerns",
      "Social responsibility",
      "Economic development"
    ],
    responses: [
      "Ethical trade",
      "Social responsibility",
      "Environmental stewardship",
      "Cultural engagement",
      "Development partnerships"
    ],
    challenges: [
      "Economic inequality",
      "Cultural disruption",
      "Environmental impact",
      "Labor issues",
      "Market dominance"
    ],
    developments: [
      "Fair trade movement",
      "Social enterprise",
      "Ethical investment",
      "Development initiatives",
      "Global partnerships"
    ]
  },
  {
    issue: "Sustainable Development",
    description: "Integration of economic growth with environmental and social concerns",
    perspectives: [
      "Environmental stewardship",
      "Social equity",
      "Economic viability",
      "Future generations",
      "Global responsibility"
    ],
    responses: [
      "Green business",
      "Social enterprise",
      "Ethical investment",
      "Community development",
      "Environmental protection"
    ],
    challenges: [
      "Resource limitations",
      "Market pressures",
      "Implementation costs",
      "Cultural barriers",
      "Technical constraints"
    ],
    developments: [
      "Green technology",
      "Social innovation",
      "Impact investment",
      "Policy reform",
      "Global cooperation"
    ]
  }
]

export default function ChristianityEconomicsPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Christianity and Economics</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="principles">Principles</TabsTrigger>
          <TabsTrigger value="historical">Historical</TabsTrigger>
          <TabsTrigger value="ethical">Ethical</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Christianity's Relationship with Economics</CardTitle>
              <CardDescription>
                The interaction between Christian faith and economic thought and practice
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Christianity has significantly influenced economic thought and
                practice throughout history, developing distinctive principles
                and approaches to economic activity and social responsibility.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="principles">
          <div className="grid gap-4 md:grid-cols-2">
            {economicPrinciples.map((principle) => (
              <Card key={principle.principle}>
                <CardHeader>
                  <CardTitle>{principle.principle}</CardTitle>
                  <CardDescription>{principle.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Foundations:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {principle.foundations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Applications:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {principle.applications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Implications:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {principle.implications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Examples:</h4>
                  <ul className="list-disc pl-5">
                    {principle.examples.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="historical">
          <div className="grid gap-4 md:grid-cols-2">
            {historicalDevelopments.map((development) => (
              <Card key={development.era}>
                <CardHeader>
                  <CardTitle>{development.era}</CardTitle>
                  <CardDescription>{development.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Key Concepts:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {development.concepts.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Key Figures:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {development.figures.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Practices:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {development.practices.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Influence:</h4>
                  <ul className="list-disc pl-5">
                    {development.influence.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ethical">
          <div className="grid gap-4 md:grid-cols-2">
            {ethicalApproaches.map((approach) => (
              <Card key={approach.approach}>
                <CardHeader>
                  <CardTitle>{approach.approach}</CardTitle>
                  <CardDescription>{approach.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Principles:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {approach.principles.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Methods:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {approach.methods.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {approach.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Outcomes:</h4>
                  <ul className="list-disc pl-5">
                    {approach.outcomes.map((item) => (
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