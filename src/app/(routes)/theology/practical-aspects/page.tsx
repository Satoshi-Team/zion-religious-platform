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
  title: "Practical Aspects of Christianity | Christian Practice and Ministry",
  description: "Comprehensive exploration of practical Christian life, including worship, prayer, ministry, discipleship, and spiritual formation.",
  keywords: [
    "Christian Practice",
    "Spiritual Formation",
    "Christian Worship",
    "Christian Prayer",
    "Christian Ministry",
    "Discipleship",
    "Pastoral Care",
    "Christian Education"
  ]
}

interface PracticalArea {
  name: string
  description: string
  keyComponents: string[]
  practices: string[]
  challenges: string[]
  resources: string[]
}

interface MinistryType {
  name: string
  description: string
  roles: string[]
  skills: string[]
  challenges: string[]
  bestPractices: string[]
}

interface SpiritualDiscipline {
  discipline: string
  description: string
  methods: string[]
  benefits: string[]
  challenges: string[]
  scriptural: string[]
}

interface PastoralCare {
  area: string
  description: string
  approaches: string[]
  skills: string[]
  resources: string[]
  considerations: string[]
}

const practicalAreas: PracticalArea[] = [
  {
    name: "Worship",
    description: "Corporate and individual worship practices in Christian life",
    keyComponents: [
      "Liturgical elements",
      "Music and hymnody",
      "Sacramental practice",
      "Prayer and meditation",
      "Scripture reading"
    ],
    practices: [
      "Sunday worship services",
      "Daily office",
      "Festival celebrations",
      "Praise and worship",
      "Contemplative worship"
    ],
    challenges: [
      "Cultural relevance",
      "Traditional vs contemporary",
      "Participation levels",
      "Theological depth",
      "Community engagement"
    ],
    resources: [
      "Hymnals and songbooks",
      "Liturgical resources",
      "Worship planning tools",
      "Musical instruments",
      "Technology integration"
    ]
  },
  {
    name: "Discipleship",
    description: "Process of spiritual growth and Christian formation",
    keyComponents: [
      "Bible study",
      "Prayer life",
      "Community involvement",
      "Service opportunities",
      "Mentoring relationships"
    ],
    practices: [
      "Small groups",
      "One-on-one mentoring",
      "Spiritual direction",
      "Educational programs",
      "Service projects"
    ],
    challenges: [
      "Time management",
      "Commitment levels",
      "Cultural pressures",
      "Resource limitations",
      "Leadership development"
    ],
    resources: [
      "Study materials",
      "Digital platforms",
      "Training programs",
      "Community support",
      "Spiritual guides"
    ]
  }
]

const ministryTypes: MinistryType[] = [
  {
    name: "Pastoral Ministry",
    description: "Leadership and care of a Christian congregation",
    roles: [
      "Preaching and teaching",
      "Pastoral care",
      "Administration",
      "Leadership development",
      "Community engagement"
    ],
    skills: [
      "Biblical knowledge",
      "Communication",
      "Counseling",
      "Organization",
      "Conflict resolution"
    ],
    challenges: [
      "Work-life balance",
      "Congregational expectations",
      "Cultural changes",
      "Resource limitations",
      "Personal growth"
    ],
    bestPractices: [
      "Regular study time",
      "Self-care routines",
      "Continuing education",
      "Mentoring relationships",
      "Professional boundaries"
    ]
  },
  {
    name: "Youth Ministry",
    description: "Specialized ministry focused on young people",
    roles: [
      "Program development",
      "Mentoring",
      "Teaching",
      "Event planning",
      "Family ministry"
    ],
    skills: [
      "Relational ability",
      "Cultural awareness",
      "Digital competency",
      "Creative programming",
      "Safety management"
    ],
    challenges: [
      "Changing youth culture",
      "Family dynamics",
      "Technology use",
      "Resource needs",
      "Volunteer recruitment"
    ],
    bestPractices: [
      "Regular training",
      "Parent partnerships",
      "Safe church policies",
      "Engaging programs",
      "Leadership development"
    ]
  }
]

const spiritualDisciplines: SpiritualDiscipline[] = [
  {
    discipline: "Prayer",
    description: "Communication with God through various forms of prayer",
    methods: [
      "Contemplative prayer",
      "Intercessory prayer",
      "Liturgical prayer",
      "Spontaneous prayer",
      "Centering prayer"
    ],
    benefits: [
      "Spiritual growth",
      "Divine communion",
      "Peace and guidance",
      "Character formation",
      "Community building"
    ],
    challenges: [
      "Consistency",
      "Distractions",
      "Dryness periods",
      "Time management",
      "Focus maintenance"
    ],
    scriptural: [
      "Matthew 6:5-15",
      "Philippians 4:6-7",
      "1 Thessalonians 5:17",
      "James 5:13-16"
    ]
  },
  {
    discipline: "Bible Study",
    description: "Systematic study and application of Scripture",
    methods: [
      "Inductive study",
      "Devotional reading",
      "Exegetical study",
      "Topical study",
      "Group study"
    ],
    benefits: [
      "Biblical knowledge",
      "Spiritual insight",
      "Life application",
      "Wisdom development",
      "Faith strengthening"
    ],
    challenges: [
      "Time commitment",
      "Understanding context",
      "Application skills",
      "Resource selection",
      "Consistency"
    ],
    scriptural: [
      "2 Timothy 3:16-17",
      "Psalm 119:105",
      "Joshua 1:8",
      "Hebrews 4:12"
    ]
  }
]

const pastoralCareAreas: PastoralCare[] = [
  {
    area: "Counseling",
    description: "Providing spiritual and emotional support through counseling",
    approaches: [
      "Pastoral counseling",
      "Crisis intervention",
      "Grief support",
      "Marriage counseling",
      "Family therapy"
    ],
    skills: [
      "Active listening",
      "Empathy",
      "Boundaries",
      "Assessment",
      "Referral"
    ],
    resources: [
      "Training programs",
      "Professional networks",
      "Supervision",
      "Reference materials",
      "Support systems"
    ],
    considerations: [
      "Ethical guidelines",
      "Professional limits",
      "Cultural sensitivity",
      "Legal requirements",
      "Self-care"
    ]
  },
  {
    area: "Spiritual Direction",
    description: "Guiding individuals in their spiritual journey",
    approaches: [
      "One-on-one direction",
      "Group spiritual direction",
      "Retreat guidance",
      "Discernment process",
      "Life transitions"
    ],
    skills: [
      "Contemplative listening",
      "Spiritual discernment",
      "Prayer guidance",
      "Wisdom sharing",
      "Patience"
    ],
    resources: [
      "Spiritual classics",
      "Prayer resources",
      "Direction training",
      "Community support",
      "Continuing education"
    ],
    considerations: [
      "Individual needs",
      "Spiritual traditions",
      "Personal boundaries",
      "Growth patterns",
      "Divine guidance"
    ]
  }
]

export default function PracticalAspectsPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Practical Aspects of Christianity</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="areas">Areas</TabsTrigger>
          <TabsTrigger value="ministry">Ministry</TabsTrigger>
          <TabsTrigger value="disciplines">Disciplines</TabsTrigger>
          <TabsTrigger value="pastoral">Pastoral Care</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Understanding Practical Christianity</CardTitle>
              <CardDescription>
                The lived experience and practice of Christian faith
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Practical aspects of Christianity encompass the daily living
                and application of Christian faith, including worship,
                discipleship, ministry, spiritual disciplines, and pastoral care.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="areas">
          <div className="grid gap-4 md:grid-cols-2">
            {practicalAreas.map((area) => (
              <Card key={area.name}>
                <CardHeader>
                  <CardTitle>{area.name}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Key Components:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {area.keyComponents.map((component) => (
                      <li key={component}>{component}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Practices:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {area.practices.map((practice) => (
                      <li key={practice}>{practice}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {area.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Resources:</h4>
                  <ul className="list-disc pl-5">
                    {area.resources.map((resource) => (
                      <li key={resource}>{resource}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ministry">
          <div className="grid gap-4 md:grid-cols-2">
            {ministryTypes.map((ministry) => (
              <Card key={ministry.name}>
                <CardHeader>
                  <CardTitle>{ministry.name}</CardTitle>
                  <CardDescription>{ministry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Roles:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {ministry.roles.map((role) => (
                      <li key={role}>{role}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Skills:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {ministry.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {ministry.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Best Practices:</h4>
                  <ul className="list-disc pl-5">
                    {ministry.bestPractices.map((practice) => (
                      <li key={practice}>{practice}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="disciplines">
          <div className="grid gap-4 md:grid-cols-2">
            {spiritualDisciplines.map((discipline) => (
              <Card key={discipline.discipline}>
                <CardHeader>
                  <CardTitle>{discipline.discipline}</CardTitle>
                  <CardDescription>{discipline.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Methods:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {discipline.methods.map((method) => (
                      <li key={method}>{method}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Benefits:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {discipline.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {discipline.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Scriptural Basis:</h4>
                  <ul className="list-disc pl-5">
                    {discipline.scriptural.map((scripture) => (
                      <li key={scripture}>{scripture}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pastoral">
          <div className="grid gap-4 md:grid-cols-2">
            {pastoralCareAreas.map((area) => (
              <Card key={area.area}>
                <CardHeader>
                  <CardTitle>{area.area}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Approaches:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {area.approaches.map((approach) => (
                      <li key={approach}>{approach}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Skills:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {area.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Resources:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {area.resources.map((resource) => (
                      <li key={resource}>{resource}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Considerations:</h4>
                  <ul className="list-disc pl-5">
                    {area.considerations.map((consideration) => (
                      <li key={consideration}>{consideration}</li>
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