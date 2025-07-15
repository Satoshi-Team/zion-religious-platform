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
  title: "Christianity and Social Movements | Cultural Impact",
  description: "Comprehensive exploration of Christianity's influence on social movements, reform efforts, and justice initiatives throughout history.",
  keywords: [
    "Christian Social Movements",
    "Religious Reform",
    "Social Justice",
    "Christian Activism",
    "Faith-Based Initiatives",
    "Religious Social Action",
    "Christian Social Reform",
    "Religious Advocacy",
    "Christian Justice",
    "Faith and Society"
  ]
}

interface HistoricalMovement {
  movement: string
  description: string
  principles: string[]
  leaders: string[]
  achievements: string[]
  legacy: string[]
}

interface SocialJusticeArea {
  area: string
  description: string
  initiatives: string[]
  organizations: string[]
  approaches: string[]
  impact: string[]
}

interface ReformEffort {
  effort: string
  description: string
  objectives: string[]
  methods: string[]
  challenges: string[]
  outcomes: string[]
}

interface ContemporaryMovement {
  movement: string
  description: string
  focus: string[]
  organizations: string[]
  strategies: string[]
  impact: string[]
}

const historicalMovements: HistoricalMovement[] = [
  {
    movement: "Abolition Movement",
    description: "Christian-led movement to end slavery and the slave trade",
    principles: [
      "Human dignity",
      "Biblical equality",
      "Moral imperative",
      "Social justice",
      "Christian ethics"
    ],
    leaders: [
      "William Wilberforce",
      "John Wesley",
      "Frederick Douglass",
      "Harriet Beecher Stowe",
      "Sojourner Truth"
    ],
    achievements: [
      "Slave trade abolition",
      "Emancipation advocacy",
      "Public awareness",
      "Legal reforms",
      "Social transformation"
    ],
    legacy: [
      "Human rights advocacy",
      "Social reform model",
      "Faith-based activism",
      "Civil rights foundation",
      "Moral leadership"
    ]
  },
  {
    movement: "Civil Rights Movement",
    description: "Faith-based movement for racial equality and justice",
    principles: [
      "Nonviolent resistance",
      "Beloved community",
      "Human dignity",
      "Social justice",
      "Christian love"
    ],
    leaders: [
      "Martin Luther King Jr.",
      "Ralph Abernathy",
      "John Lewis",
      "Fred Shuttlesworth",
      "Dorothy Cotton"
    ],
    achievements: [
      "Civil Rights Act",
      "Voting Rights Act",
      "Desegregation",
      "Public awareness",
      "Social change"
    ],
    legacy: [
      "Nonviolent activism",
      "Social justice model",
      "Faith-based organizing",
      "Community empowerment",
      "Ongoing movement"
    ]
  }
]

const socialJusticeAreas: SocialJusticeArea[] = [
  {
    area: "Poverty and Economic Justice",
    description: "Christian initiatives addressing poverty and economic inequality",
    initiatives: [
      "Food security programs",
      "Housing assistance",
      "Job training",
      "Financial education",
      "Community development"
    ],
    organizations: [
      "World Vision",
      "Catholic Charities",
      "Habitat for Humanity",
      "Bread for the World",
      "Christian Aid"
    ],
    approaches: [
      "Direct service",
      "Policy advocacy",
      "Community organizing",
      "Economic development",
      "Education programs"
    ],
    impact: [
      "Poverty reduction",
      "Community empowerment",
      "Policy change",
      "Social awareness",
      "Systemic reform"
    ]
  },
  {
    area: "Environmental Stewardship",
    description: "Christian environmental protection and climate action initiatives",
    initiatives: [
      "Creation care",
      "Climate action",
      "Environmental justice",
      "Conservation",
      "Sustainable living"
    ],
    organizations: [
      "A Rocha",
      "Evangelical Environmental Network",
      "Catholic Climate Covenant",
      "Creation Justice Ministries",
      "Green Faith"
    ],
    approaches: [
      "Education",
      "Advocacy",
      "Direct action",
      "Community projects",
      "Policy reform"
    ],
    impact: [
      "Environmental awareness",
      "Policy change",
      "Community action",
      "Lifestyle changes",
      "Global influence"
    ]
  }
]

const reformEfforts: ReformEffort[] = [
  {
    effort: "Prison Reform",
    description: "Christian initiatives for criminal justice reform and rehabilitation",
    objectives: [
      "Restorative justice",
      "Rehabilitation",
      "System reform",
      "Reentry support",
      "Prison ministry"
    ],
    methods: [
      "Advocacy",
      "Direct service",
      "Education",
      "Policy reform",
      "Support programs"
    ],
    challenges: [
      "System resistance",
      "Resource limitations",
      "Public perception",
      "Policy barriers",
      "Implementation"
    ],
    outcomes: [
      "Policy changes",
      "Program development",
      "Public awareness",
      "Lives transformed",
      "System improvement"
    ]
  },
  {
    effort: "Education Reform",
    description: "Christian initiatives for educational access and quality",
    objectives: [
      "Equal access",
      "Quality education",
      "Character formation",
      "Community development",
      "Life skills"
    ],
    methods: [
      "School programs",
      "Advocacy",
      "Teacher training",
      "Resource provision",
      "Community partnership"
    ],
    challenges: [
      "Funding limitations",
      "System barriers",
      "Resource gaps",
      "Implementation",
      "Sustainability"
    ],
    outcomes: [
      "Improved access",
      "Better quality",
      "Community impact",
      "Student success",
      "System change"
    ]
  }
]

const contemporaryMovements: ContemporaryMovement[] = [
  {
    movement: "Creation Care Movement",
    description: "Christian environmental stewardship and climate action",
    focus: [
      "Environmental protection",
      "Climate action",
      "Resource stewardship",
      "Sustainable living",
      "Ecological justice"
    ],
    organizations: [
      "Environmental ministries",
      "Faith-based networks",
      "Church initiatives",
      "Advocacy groups",
      "Global partnerships"
    ],
    strategies: [
      "Education",
      "Advocacy",
      "Direct action",
      "Lifestyle change",
      "Policy reform"
    ],
    impact: [
      "Environmental awareness",
      "Church engagement",
      "Policy influence",
      "Behavior change",
      "Global movement"
    ]
  },
  {
    movement: "Immigration Justice",
    description: "Christian advocacy for immigrant rights and refugee support",
    focus: [
      "Immigrant rights",
      "Refugee support",
      "Family unity",
      "Legal protection",
      "Community welcome"
    ],
    organizations: [
      "Church networks",
      "Faith-based agencies",
      "Legal services",
      "Support ministries",
      "Advocacy groups"
    ],
    strategies: [
      "Direct service",
      "Legal advocacy",
      "Policy reform",
      "Community support",
      "Public education"
    ],
    impact: [
      "Policy change",
      "Community support",
      "Public awareness",
      "Lives improved",
      "System reform"
    ]
  }
]

export default function ChristianitySocialMovementsPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Christianity and Social Movements</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="historical">Historical</TabsTrigger>
          <TabsTrigger value="justice">Social Justice</TabsTrigger>
          <TabsTrigger value="reform">Reform Efforts</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Christianity's Role in Social Movements</CardTitle>
              <CardDescription>
                The influence of Christian faith on social reform and justice movements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Throughout history, Christianity has played a significant role in
                inspiring and sustaining social movements, from abolition to civil
                rights, and continues to influence contemporary social justice efforts.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="historical">
          <div className="grid gap-4 md:grid-cols-2">
            {historicalMovements.map((movement) => (
              <Card key={movement.movement}>
                <CardHeader>
                  <CardTitle>{movement.movement}</CardTitle>
                  <CardDescription>{movement.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Principles:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {movement.principles.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Leaders:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {movement.leaders.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Achievements:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {movement.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Legacy:</h4>
                  <ul className="list-disc pl-5">
                    {movement.legacy.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="justice">
          <div className="grid gap-4 md:grid-cols-2">
            {socialJusticeAreas.map((area) => (
              <Card key={area.area}>
                <CardHeader>
                  <CardTitle>{area.area}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Initiatives:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {area.initiatives.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Organizations:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {area.organizations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Approaches:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {area.approaches.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Impact:</h4>
                  <ul className="list-disc pl-5">
                    {area.impact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reform">
          <div className="grid gap-4 md:grid-cols-2">
            {reformEfforts.map((effort) => (
              <Card key={effort.effort}>
                <CardHeader>
                  <CardTitle>{effort.effort}</CardTitle>
                  <CardDescription>{effort.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Objectives:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {effort.objectives.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Methods:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {effort.methods.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {effort.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Outcomes:</h4>
                  <ul className="list-disc pl-5">
                    {effort.outcomes.map((item) => (
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
            {contemporaryMovements.map((movement) => (
              <Card key={movement.movement}>
                <CardHeader>
                  <CardTitle>{movement.movement}</CardTitle>
                  <CardDescription>{movement.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Focus:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {movement.focus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Organizations:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {movement.organizations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Strategies:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {movement.strategies.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Impact:</h4>
                  <ul className="list-disc pl-5">
                    {movement.impact.map((item) => (
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