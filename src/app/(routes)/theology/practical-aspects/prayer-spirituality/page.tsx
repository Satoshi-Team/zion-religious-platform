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
  title: "Prayer and Spirituality | Christian Practical Aspects",
  description: "Comprehensive exploration of Christian prayer practices, spiritual disciplines, and contemplative traditions.",
  keywords: [
    "Christian Prayer",
    "Spiritual Disciplines",
    "Contemplative Practice",
    "Christian Meditation",
    "Spiritual Formation",
    "Christian Mysticism",
    "Prayer Methods",
    "Spiritual Growth"
  ]
}

interface PrayerType {
  name: string
  description: string
  methods: string[]
  benefits: string[]
  challenges: string[]
  scriptural: string[]
}

interface SpiritualDiscipline {
  discipline: string
  description: string
  practices: string[]
  purpose: string[]
  challenges: string[]
  guidance: string[]
}

interface ContemplativeTradition {
  tradition: string
  description: string
  keyFigures: string[]
  practices: string[]
  principles: string[]
  modernApplications: string[]
}

interface SpiritualFormation {
  aspect: string
  description: string
  elements: string[]
  goals: string[]
  resources: string[]
  practices: string[]
}

const prayerTypes: PrayerType[] = [
  {
    name: "Contemplative Prayer",
    description: "Silent, receptive prayer focused on divine presence",
    methods: [
      "Centering prayer",
      "Prayer of silence",
      "Lectio divina",
      "Jesus Prayer",
      "Breath prayer"
    ],
    benefits: [
      "Deepened awareness of God",
      "Inner peace",
      "Spiritual insight",
      "Emotional healing",
      "Transformed consciousness"
    ],
    challenges: [
      "Mental distractions",
      "Time commitment",
      "Physical stillness",
      "Spiritual dryness",
      "Understanding method"
    ],
    scriptural: [
      "Psalm 46:10",
      "Matthew 6:6",
      "1 Kings 19:11-12",
      "Psalm 131"
    ]
  },
  {
    name: "Intercessory Prayer",
    description: "Prayer on behalf of others' needs",
    methods: [
      "Specific petitions",
      "Prayer lists",
      "Group intercession",
      "Prayer mapping",
      "Prophetic intercession"
    ],
    benefits: [
      "Community support",
      "Spiritual warfare",
      "Compassion growth",
      "Faith building",
      "Divine partnership"
    ],
    challenges: [
      "Maintaining focus",
      "Discerning God's will",
      "Persistence",
      "Emotional burden",
      "Seeing results"
    ],
    scriptural: [
      "1 Timothy 2:1-2",
      "James 5:16",
      "Colossians 1:9",
      "Ephesians 6:18"
    ]
  }
]

const spiritualDisciplines: SpiritualDiscipline[] = [
  {
    discipline: "Meditation",
    description: "Focused reflection on Scripture and divine truth",
    practices: [
      "Scripture meditation",
      "Sacred reading",
      "Contemplative reflection",
      "Imaginative prayer",
      "Nature meditation"
    ],
    purpose: [
      "Deep understanding",
      "Personal transformation",
      "Divine communion",
      "Spiritual insight",
      "Character formation"
    ],
    challenges: [
      "Mental focus",
      "Time management",
      "Method understanding",
      "Consistency",
      "Cultural distractions"
    ],
    guidance: [
      "Start small",
      "Use structure",
      "Seek mentoring",
      "Join community",
      "Keep journal"
    ]
  },
  {
    discipline: "Fasting",
    description: "Voluntary abstinence for spiritual purposes",
    practices: [
      "Food fasting",
      "Media fasting",
      "Selective fasting",
      "Time fasting",
      "Corporate fasting"
    ],
    purpose: [
      "Spiritual focus",
      "Self-discipline",
      "Divine dependence",
      "Physical discipline",
      "Spiritual breakthrough"
    ],
    challenges: [
      "Physical discomfort",
      "Social pressure",
      "Time management",
      "Health concerns",
      "Spiritual warfare"
    ],
    guidance: [
      "Medical consultation",
      "Gradual start",
      "Prayer connection",
      "Community support",
      "Clear purpose"
    ]
  }
]

const contemplativeTraditions: ContemplativeTradition[] = [
  {
    tradition: "Desert Spirituality",
    description: "Early Christian contemplative tradition from desert fathers and mothers",
    keyFigures: [
      "Anthony the Great",
      "John Cassian",
      "Mary of Egypt",
      "Evagrius Ponticus"
    ],
    practices: [
      "Solitude",
      "Silence",
      "Prayer of the heart",
      "Manual work",
      "Scripture meditation"
    ],
    principles: [
      "Simplicity",
      "Interior freedom",
      "Spiritual combat",
      "Divine presence",
      "Community support"
    ],
    modernApplications: [
      "Urban hermitage",
      "Silent retreats",
      "Spiritual direction",
      "Simple living",
      "Prayer practices"
    ]
  },
  {
    tradition: "Mystical Tradition",
    description: "Direct experience of divine presence and union",
    keyFigures: [
      "Teresa of Avila",
      "John of the Cross",
      "Julian of Norwich",
      "Meister Eckhart"
    ],
    practices: [
      "Contemplative prayer",
      "Spiritual reading",
      "Interior castle",
      "Dark night",
      "Divine union"
    ],
    principles: [
      "Divine intimacy",
      "Spiritual transformation",
      "Interior journey",
      "Mystical knowledge",
      "Love union"
    ],
    modernApplications: [
      "Centering prayer",
      "Contemplative retreats",
      "Spiritual direction",
      "Mystical reading",
      "Prayer groups"
    ]
  }
]

const spiritualFormation: SpiritualFormation[] = [
  {
    aspect: "Personal Formation",
    description: "Individual spiritual growth and development",
    elements: [
      "Prayer life",
      "Scripture study",
      "Spiritual disciplines",
      "Character development",
      "Lifestyle choices"
    ],
    goals: [
      "Christ-likeness",
      "Spiritual maturity",
      "Inner transformation",
      "Ethical living",
      "Divine communion"
    ],
    resources: [
      "Spiritual directors",
      "Formation books",
      "Prayer guides",
      "Retreat centers",
      "Online resources"
    ],
    practices: [
      "Daily prayer",
      "Scripture meditation",
      "Journaling",
      "Spiritual reading",
      "Regular retreat"
    ]
  },
  {
    aspect: "Communal Formation",
    description: "Spiritual growth in community context",
    elements: [
      "Corporate worship",
      "Small groups",
      "Mentoring",
      "Service projects",
      "Community life"
    ],
    goals: [
      "Community building",
      "Mutual support",
      "Shared wisdom",
      "Corporate witness",
      "Kingdom living"
    ],
    resources: [
      "Church community",
      "Study groups",
      "Ministry teams",
      "Service opportunities",
      "Fellowship events"
    ],
    practices: [
      "Group prayer",
      "Bible study",
      "Shared meals",
      "Corporate service",
      "Community celebration"
    ]
  }
]

export default function PrayerSpiritualityPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Prayer and Spirituality</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="prayer">Prayer Types</TabsTrigger>
          <TabsTrigger value="disciplines">Disciplines</TabsTrigger>
          <TabsTrigger value="traditions">Traditions</TabsTrigger>
          <TabsTrigger value="formation">Formation</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Understanding Christian Prayer and Spirituality</CardTitle>
              <CardDescription>
                The practice and development of spiritual life in Christianity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Christian prayer and spirituality encompass various practices and
                traditions that foster relationship with God, personal
                transformation, and spiritual growth through prayer, meditation,
                and other spiritual disciplines.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prayer">
          <div className="grid gap-4 md:grid-cols-2">
            {prayerTypes.map((type) => (
              <Card key={type.name}>
                <CardHeader>
                  <CardTitle>{type.name}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Methods:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {type.methods.map((method) => (
                      <li key={method}>{method}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Benefits:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {type.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {type.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Scriptural Basis:</h4>
                  <ul className="list-disc pl-5">
                    {type.scriptural.map((scripture) => (
                      <li key={scripture}>{scripture}</li>
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
                  <h4 className="font-semibold">Practices:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {discipline.practices.map((practice) => (
                      <li key={practice}>{practice}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Purpose:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {discipline.purpose.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {discipline.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Guidance:</h4>
                  <ul className="list-disc pl-5">
                    {discipline.guidance.map((guide) => (
                      <li key={guide}>{guide}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="traditions">
          <div className="grid gap-4 md:grid-cols-2">
            {contemplativeTraditions.map((tradition) => (
              <Card key={tradition.tradition}>
                <CardHeader>
                  <CardTitle>{tradition.tradition}</CardTitle>
                  <CardDescription>{tradition.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Key Figures:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {tradition.keyFigures.map((figure) => (
                      <li key={figure}>{figure}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Practices:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {tradition.practices.map((practice) => (
                      <li key={practice}>{practice}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Principles:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {tradition.principles.map((principle) => (
                      <li key={principle}>{principle}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Modern Applications:</h4>
                  <ul className="list-disc pl-5">
                    {tradition.modernApplications.map((application) => (
                      <li key={application}>{application}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="formation">
          <div className="grid gap-4 md:grid-cols-2">
            {spiritualFormation.map((formation) => (
              <Card key={formation.aspect}>
                <CardHeader>
                  <CardTitle>{formation.aspect}</CardTitle>
                  <CardDescription>{formation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Elements:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {formation.elements.map((element) => (
                      <li key={element}>{element}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Goals:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {formation.goals.map((goal) => (
                      <li key={goal}>{goal}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Resources:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {formation.resources.map((resource) => (
                      <li key={resource}>{resource}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Practices:</h4>
                  <ul className="list-disc pl-5">
                    {formation.practices.map((practice) => (
                      <li key={practice}>{practice}</li>
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