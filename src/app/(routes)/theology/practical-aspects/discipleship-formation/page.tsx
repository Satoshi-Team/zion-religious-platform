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
  title: "Discipleship and Formation | Christian Practical Aspects",
  description: "Comprehensive guide to Christian discipleship, spiritual formation, and growth practices.",
  keywords: [
    "Christian Discipleship",
    "Spiritual Formation",
    "Mentoring",
    "Spiritual Growth",
    "Christian Education",
    "Faith Development",
    "Discipleship Methods",
    "Spiritual Practices"
  ]
}

interface DiscipleshipMethod {
  method: string
  description: string
  components: string[]
  objectives: string[]
  practices: string[]
  outcomes: string[]
}

interface FormationStage {
  stage: string
  description: string
  characteristics: string[]
  challenges: string[]
  practices: string[]
  support: string[]
}

interface MentoringApproach {
  approach: string
  description: string
  elements: string[]
  benefits: string[]
  challenges: string[]
  bestPractices: string[]
}

interface GrowthResource {
  category: string
  description: string
  tools: string[]
  applications: string[]
  benefits: string[]
  implementation: string[]
}

const discipleshipMethods: DiscipleshipMethod[] = [
  {
    method: "One-on-One Discipleship",
    description: "Personalized mentoring and guidance for spiritual growth",
    components: [
      "Regular meetings",
      "Scripture study",
      "Prayer partnership",
      "Life application",
      "Accountability"
    ],
    objectives: [
      "Spiritual maturity",
      "Character development",
      "Knowledge growth",
      "Skills development",
      "Ministry preparation"
    ],
    practices: [
      "Bible study methods",
      "Prayer disciplines",
      "Life sharing",
      "Goal setting",
      "Spiritual exercises"
    ],
    outcomes: [
      "Deepened faith",
      "Leadership readiness",
      "Ministry involvement",
      "Spiritual habits",
      "Relational growth"
    ]
  },
  {
    method: "Small Group Discipleship",
    description: "Community-based spiritual formation and growth",
    components: [
      "Group discussion",
      "Shared learning",
      "Community support",
      "Mutual accountability",
      "Collective prayer"
    ],
    objectives: [
      "Community building",
      "Biblical literacy",
      "Spiritual growth",
      "Life application",
      "Service orientation"
    ],
    practices: [
      "Group study",
      "Shared prayer",
      "Service projects",
      "Fellowship activities",
      "Accountability pairs"
    ],
    outcomes: [
      "Community bonds",
      "Spiritual maturity",
      "Service mindset",
      "Biblical understanding",
      "Relational skills"
    ]
  }
]

const formationStages: FormationStage[] = [
  {
    stage: "Initial Formation",
    description: "Beginning stage of spiritual development and faith understanding",
    characteristics: [
      "Basic faith understanding",
      "Spiritual curiosity",
      "Initial commitments",
      "Learning orientation",
      "Community connection"
    ],
    challenges: [
      "Knowledge gaps",
      "Inconsistent practices",
      "Doubt management",
      "Lifestyle alignment",
      "Priority setting"
    ],
    practices: [
      "Basic Bible study",
      "Prayer habits",
      "Church attendance",
      "Service participation",
      "Fellowship engagement"
    ],
    support: [
      "Mentoring relationship",
      "Basic resources",
      "Community inclusion",
      "Regular guidance",
      "Learning opportunities"
    ]
  },
  {
    stage: "Deepening Formation",
    description: "Intermediate stage of spiritual growth and maturity",
    characteristics: [
      "Deepening commitment",
      "Growing understanding",
      "Regular practices",
      "Service orientation",
      "Leadership emergence"
    ],
    challenges: [
      "Faith testing",
      "Time management",
      "Relationship dynamics",
      "Ministry balance",
      "Growth plateaus"
    ],
    practices: [
      "Advanced study",
      "Spiritual disciplines",
      "Ministry involvement",
      "Mentoring others",
      "Regular reflection"
    ],
    support: [
      "Advanced resources",
      "Leadership opportunities",
      "Spiritual direction",
      "Ministry training",
      "Community leadership"
    ]
  }
]

const mentoringApproaches: MentoringApproach[] = [
  {
    approach: "Life-on-Life Mentoring",
    description: "Intensive, relationship-based discipleship approach",
    elements: [
      "Regular meetings",
      "Life sharing",
      "Skill modeling",
      "Character development",
      "Ministry exposure"
    ],
    benefits: [
      "Deep relationships",
      "Practical learning",
      "Personalized growth",
      "Real-life application",
      "Long-term impact"
    ],
    challenges: [
      "Time commitment",
      "Boundary setting",
      "Expectation management",
      "Progress measurement",
      "Relationship dynamics"
    ],
    bestPractices: [
      "Clear expectations",
      "Regular scheduling",
      "Progress tracking",
      "Resource sharing",
      "Mutual accountability"
    ]
  },
  {
    approach: "Structured Mentoring",
    description: "Organized, goal-oriented discipleship program",
    elements: [
      "Defined curriculum",
      "Regular meetings",
      "Progress tracking",
      "Skill development",
      "Ministry practice"
    ],
    benefits: [
      "Clear objectives",
      "Measurable progress",
      "Systematic growth",
      "Skill acquisition",
      "Ministry preparation"
    ],
    challenges: [
      "Flexibility needs",
      "Individual pacing",
      "Resource access",
      "Time management",
      "Program adaptation"
    ],
    bestPractices: [
      "Needs assessment",
      "Goal setting",
      "Regular review",
      "Resource provision",
      "Feedback collection"
    ]
  }
]

const growthResources: GrowthResource[] = [
  {
    category: "Study Resources",
    description: "Materials and tools for spiritual learning and growth",
    tools: [
      "Bible study guides",
      "Commentary sets",
      "Online courses",
      "Video teachings",
      "Reading plans"
    ],
    applications: [
      "Personal study",
      "Group learning",
      "Teaching preparation",
      "Research projects",
      "Spiritual growth"
    ],
    benefits: [
      "Knowledge depth",
      "Understanding growth",
      "Teaching ability",
      "Resource access",
      "Learning structure"
    ],
    implementation: [
      "Regular usage",
      "Progressive learning",
      "Application focus",
      "Resource sharing",
      "Growth tracking"
    ]
  },
  {
    category: "Formation Tools",
    description: "Resources for spiritual formation and practice",
    tools: [
      "Prayer journals",
      "Devotional guides",
      "Spiritual exercises",
      "Formation apps",
      "Practice guides"
    ],
    applications: [
      "Daily devotions",
      "Spiritual practices",
      "Growth tracking",
      "Habit formation",
      "Reflection exercises"
    ],
    benefits: [
      "Practice consistency",
      "Spiritual awareness",
      "Growth measurement",
      "Habit development",
      "Personal reflection"
    ],
    implementation: [
      "Regular practice",
      "Progress tracking",
      "Community sharing",
      "Feedback gathering",
      "Adaptation planning"
    ]
  }
]

export default function DiscipleshipFormationPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Discipleship and Formation</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="methods">Methods</TabsTrigger>
          <TabsTrigger value="stages">Stages</TabsTrigger>
          <TabsTrigger value="mentoring">Mentoring</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Understanding Discipleship and Formation</CardTitle>
              <CardDescription>
                The journey of spiritual growth and development in Christian faith
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Christian discipleship and formation encompasses the intentional
                process of spiritual growth, character development, and faith
                maturation through various methods, stages, and practices.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="methods">
          <div className="grid gap-4 md:grid-cols-2">
            {discipleshipMethods.map((method) => (
              <Card key={method.method}>
                <CardHeader>
                  <CardTitle>{method.method}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Components:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {method.components.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Objectives:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {method.objectives.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Practices:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {method.practices.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Outcomes:</h4>
                  <ul className="list-disc pl-5">
                    {method.outcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="stages">
          <div className="grid gap-4 md:grid-cols-2">
            {formationStages.map((stage) => (
              <Card key={stage.stage}>
                <CardHeader>
                  <CardTitle>{stage.stage}</CardTitle>
                  <CardDescription>{stage.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {stage.characteristics.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {stage.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Practices:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {stage.practices.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Support:</h4>
                  <ul className="list-disc pl-5">
                    {stage.support.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mentoring">
          <div className="grid gap-4 md:grid-cols-2">
            {mentoringApproaches.map((approach) => (
              <Card key={approach.approach}>
                <CardHeader>
                  <CardTitle>{approach.approach}</CardTitle>
                  <CardDescription>{approach.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Elements:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {approach.elements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Benefits:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {approach.benefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {approach.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Best Practices:</h4>
                  <ul className="list-disc pl-5">
                    {approach.bestPractices.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources">
          <div className="grid gap-4 md:grid-cols-2">
            {growthResources.map((resource) => (
              <Card key={resource.category}>
                <CardHeader>
                  <CardTitle>{resource.category}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Tools:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {resource.tools.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Applications:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {resource.applications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Benefits:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {resource.benefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Implementation:</h4>
                  <ul className="list-disc pl-5">
                    {resource.implementation.map((item) => (
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