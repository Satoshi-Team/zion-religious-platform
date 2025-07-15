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
  title: "Ministry and Leadership | Christian Practical Aspects",
  description: "Comprehensive guide to Christian ministry and leadership principles, practices, and development.",
  keywords: [
    "Christian Ministry",
    "Church Leadership",
    "Pastoral Care",
    "Ministry Development",
    "Church Administration",
    "Leadership Training",
    "Ministry Skills",
    "Church Management"
  ]
}

interface MinistryRole {
  role: string
  description: string
  responsibilities: string[]
  qualifications: string[]
  challenges: string[]
  development: string[]
}

interface LeadershipPrinciple {
  principle: string
  description: string
  applications: string[]
  biblicalBasis: string[]
  challenges: string[]
  strategies: string[]
}

interface AdministrativePractice {
  area: string
  description: string
  keyTasks: string[]
  bestPractices: string[]
  resources: string[]
  metrics: string[]
}

interface DevelopmentPath {
  category: string
  description: string
  skills: string[]
  training: string[]
  resources: string[]
  milestones: string[]
}

const ministryRoles: MinistryRole[] = [
  {
    role: "Senior Pastor",
    description: "Primary spiritual leader and overseer of church ministry",
    responsibilities: [
      "Preaching and teaching",
      "Vision casting and strategic planning",
      "Pastoral care and counseling",
      "Leadership development",
      "Church administration oversight"
    ],
    qualifications: [
      "Theological education",
      "Leadership experience",
      "Pastoral gifting",
      "Character integrity",
      "Communication skills"
    ],
    challenges: [
      "Work-life balance",
      "Congregational expectations",
      "Administrative burden",
      "Spiritual warfare",
      "Personal growth"
    ],
    development: [
      "Continuing education",
      "Mentoring relationships",
      "Professional networks",
      "Spiritual retreats",
      "Leadership training"
    ]
  },
  {
    role: "Ministry Director",
    description: "Oversees specific ministry areas and programs",
    responsibilities: [
      "Program development",
      "Team leadership",
      "Budget management",
      "Strategic planning",
      "Ministry evaluation"
    ],
    qualifications: [
      "Ministry experience",
      "Team management",
      "Program development",
      "Communication skills",
      "Administrative ability"
    ],
    challenges: [
      "Resource limitations",
      "Volunteer management",
      "Program effectiveness",
      "Time management",
      "Change implementation"
    ],
    development: [
      "Skills training",
      "Leadership conferences",
      "Professional development",
      "Peer learning",
      "Coaching relationships"
    ]
  }
]

const leadershipPrinciples: LeadershipPrinciple[] = [
  {
    principle: "Servant Leadership",
    description: "Leading through service and example following Christ's model",
    applications: [
      "Prioritizing others' needs",
      "Empowering team members",
      "Leading by example",
      "Building relationships",
      "Supporting growth"
    ],
    biblicalBasis: [
      "Mark 10:42-45",
      "John 13:12-17",
      "Philippians 2:3-4",
      "1 Peter 5:2-3"
    ],
    challenges: [
      "Balance of authority",
      "Time management",
      "Personal sacrifice",
      "Cultural resistance",
      "Maintaining boundaries"
    ],
    strategies: [
      "Regular reflection",
      "Mentoring others",
      "Delegation skills",
      "Team building",
      "Personal development"
    ]
  },
  {
    principle: "Vision and Strategy",
    description: "Developing and implementing ministry vision and strategy",
    applications: [
      "Vision casting",
      "Strategic planning",
      "Goal setting",
      "Change management",
      "Team alignment"
    ],
    biblicalBasis: [
      "Proverbs 29:18",
      "Nehemiah 2:17-18",
      "Habakkuk 2:2",
      "Acts 16:9-10"
    ],
    challenges: [
      "Clarity communication",
      "Resource allocation",
      "Resistance to change",
      "Implementation timing",
      "Maintaining focus"
    ],
    strategies: [
      "Regular evaluation",
      "Stakeholder input",
      "Clear communication",
      "Milestone tracking",
      "Adaptive planning"
    ]
  }
]

const administrativePractices: AdministrativePractice[] = [
  {
    area: "Church Operations",
    description: "Managing daily church operations and resources",
    keyTasks: [
      "Facility management",
      "Budget oversight",
      "Staff coordination",
      "Schedule planning",
      "Resource allocation"
    ],
    bestPractices: [
      "Clear procedures",
      "Regular reviews",
      "Team communication",
      "Resource stewardship",
      "Process documentation"
    ],
    resources: [
      "Management software",
      "Planning tools",
      "Training materials",
      "Policy manuals",
      "Professional networks"
    ],
    metrics: [
      "Budget adherence",
      "Facility utilization",
      "Staff satisfaction",
      "Process efficiency",
      "Resource optimization"
    ]
  },
  {
    area: "Ministry Programs",
    description: "Overseeing church programs and ministries",
    keyTasks: [
      "Program planning",
      "Volunteer coordination",
      "Resource management",
      "Event scheduling",
      "Impact evaluation"
    ],
    bestPractices: [
      "Clear objectives",
      "Regular evaluation",
      "Team collaboration",
      "Resource sharing",
      "Feedback collection"
    ],
    resources: [
      "Planning templates",
      "Evaluation tools",
      "Training resources",
      "Communication platforms",
      "Ministry guides"
    ],
    metrics: [
      "Participation rates",
      "Program effectiveness",
      "Volunteer engagement",
      "Resource efficiency",
      "Impact measures"
    ]
  }
]

const developmentPaths: DevelopmentPath[] = [
  {
    category: "Leadership Development",
    description: "Cultivating leadership skills and capabilities",
    skills: [
      "Vision casting",
      "Team building",
      "Decision making",
      "Conflict resolution",
      "Strategic planning"
    ],
    training: [
      "Leadership workshops",
      "Mentoring programs",
      "Conference attendance",
      "Online courses",
      "Peer learning groups"
    ],
    resources: [
      "Leadership books",
      "Training materials",
      "Online platforms",
      "Professional networks",
      "Ministry tools"
    ],
    milestones: [
      "Team leadership",
      "Program oversight",
      "Strategic planning",
      "Change management",
      "Ministry expansion"
    ]
  },
  {
    category: "Ministry Skills",
    description: "Developing essential ministry competencies",
    skills: [
      "Teaching ability",
      "Pastoral care",
      "Program development",
      "Communication",
      "Administration"
    ],
    training: [
      "Theological education",
      "Skills workshops",
      "Certification programs",
      "Practical training",
      "Ministry internships"
    ],
    resources: [
      "Ministry guides",
      "Online resources",
      "Training materials",
      "Professional tools",
      "Learning platforms"
    ],
    milestones: [
      "Teaching proficiency",
      "Program leadership",
      "Pastoral effectiveness",
      "Administrative competence",
      "Ministry impact"
    ]
  }
]

export default function MinistryLeadershipPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Ministry and Leadership</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="roles">Ministry Roles</TabsTrigger>
          <TabsTrigger value="principles">Leadership</TabsTrigger>
          <TabsTrigger value="administration">Administration</TabsTrigger>
          <TabsTrigger value="development">Development</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Understanding Ministry and Leadership</CardTitle>
              <CardDescription>
                Essential principles and practices for effective church ministry and leadership
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Christian ministry and leadership involves the practical application
                of theological principles in leading and serving the church community
                through various roles, responsibilities, and development paths.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles">
          <div className="grid gap-4 md:grid-cols-2">
            {ministryRoles.map((role) => (
              <Card key={role.role}>
                <CardHeader>
                  <CardTitle>{role.role}</CardTitle>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Responsibilities:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {role.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Qualifications:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {role.qualifications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {role.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Development:</h4>
                  <ul className="list-disc pl-5">
                    {role.development.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="principles">
          <div className="grid gap-4 md:grid-cols-2">
            {leadershipPrinciples.map((principle) => (
              <Card key={principle.principle}>
                <CardHeader>
                  <CardTitle>{principle.principle}</CardTitle>
                  <CardDescription>{principle.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Applications:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {principle.applications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Biblical Basis:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {principle.biblicalBasis.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {principle.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Strategies:</h4>
                  <ul className="list-disc pl-5">
                    {principle.strategies.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="administration">
          <div className="grid gap-4 md:grid-cols-2">
            {administrativePractices.map((practice) => (
              <Card key={practice.area}>
                <CardHeader>
                  <CardTitle>{practice.area}</CardTitle>
                  <CardDescription>{practice.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Key Tasks:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {practice.keyTasks.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Best Practices:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {practice.bestPractices.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Resources:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {practice.resources.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Metrics:</h4>
                  <ul className="list-disc pl-5">
                    {practice.metrics.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="development">
          <div className="grid gap-4 md:grid-cols-2">
            {developmentPaths.map((path) => (
              <Card key={path.category}>
                <CardHeader>
                  <CardTitle>{path.category}</CardTitle>
                  <CardDescription>{path.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Skills:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {path.skills.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Training:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {path.training.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Resources:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {path.resources.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Milestones:</h4>
                  <ul className="list-disc pl-5">
                    {path.milestones.map((item) => (
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