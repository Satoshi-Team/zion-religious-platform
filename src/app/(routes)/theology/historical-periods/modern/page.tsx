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
  title: "Modern Period | Christian Historical Theology",
  description: "Comprehensive exploration of Modern Christianity (1650-1900), including Enlightenment influence, revivals, and theological developments.",
  keywords: [
    "Modern Christianity",
    "Enlightenment",
    "Protestant Orthodoxy",
    "Pietism",
    "Great Awakening",
    "Liberal Theology",
    "Modern Missions"
  ]
}

interface Movement {
  name: string
  period: string
  description: string
  keyFigures: string[]
  mainIdeas: string[]
  impact: string[]
}

interface Theologian {
  name: string
  years: string
  tradition: string
  majorWorks: string[]
  keyIdeas: string[]
  influence: string[]
  significance: string
}

interface Development {
  area: string
  description: string
  keyFeatures: string[]
  challenges: string[]
  responses: string[]
  impact: string
}

interface Event {
  name: string
  period: string
  description: string
  significance: string[]
  keyFigures: string[]
  longTermEffects: string[]
}

const theologicalMovements: Movement[] = [
  {
    name: "Protestant Orthodoxy",
    period: "1650-1750",
    description: "Systematic development and defense of Reformation theology",
    keyFigures: [
      "Francis Turretin",
      "Johannes Cocceius",
      "John Owen",
      "Johann Gerhard"
    ],
    mainIdeas: [
      "Scholastic methodology",
      "Confessional fidelity",
      "Biblical authority",
      "Systematic theology",
      "Polemical defense"
    ],
    impact: [
      "Reformed scholasticism",
      "Lutheran orthodoxy",
      "Theological education",
      "Doctrinal precision",
      "Confessional identity"
    ]
  },
  {
    name: "Pietism",
    period: "1670-1750",
    description: "Movement emphasizing personal piety and practical Christianity",
    keyFigures: [
      "Philipp Spener",
      "August Hermann Francke",
      "Nikolaus Zinzendorf",
      "John Wesley"
    ],
    mainIdeas: [
      "Living faith",
      "Bible study",
      "Practical holiness",
      "Church renewal",
      "Social reform"
    ],
    impact: [
      "Revival movements",
      "Missionary activity",
      "Social reform",
      "Educational reform",
      "Devotional literature"
    ]
  },
  {
    name: "Liberal Theology",
    period: "1800-1900",
    description: "Attempt to reconcile Christianity with modern thought",
    keyFigures: [
      "Friedrich Schleiermacher",
      "Albrecht Ritschl",
      "Adolf von Harnack",
      "Horace Bushnell"
    ],
    mainIdeas: [
      "Religious experience",
      "Historical criticism",
      "Cultural accommodation",
      "Moral emphasis",
      "Kingdom of God"
    ],
    impact: [
      "Modern theology",
      "Biblical criticism",
      "Cultural engagement",
      "Social gospel",
      "Religious pluralism"
    ]
  }
]

const theologians: Theologian[] = [
  {
    name: "Friedrich Schleiermacher",
    years: "1768-1834",
    tradition: "Liberal Protestant",
    majorWorks: [
      "On Religion: Speeches to its Cultured Despisers",
      "The Christian Faith",
      "Brief Outline of Theology as a Field of Study"
    ],
    keyIdeas: [
      "Feeling of absolute dependence",
      "Religious experience",
      "Christ-consciousness",
      "Church as community",
      "Theological method"
    ],
    influence: [
      "Modern theology",
      "Liberal Protestantism",
      "Religious experience",
      "Theological method",
      "Cultural engagement"
    ],
    significance: "Father of modern Protestant theology"
  },
  {
    name: "John Henry Newman",
    years: "1801-1890",
    tradition: "Anglican/Catholic",
    majorWorks: [
      "Essay on the Development of Christian Doctrine",
      "Apologia Pro Vita Sua",
      "Grammar of Assent"
    ],
    keyIdeas: [
      "Doctrinal development",
      "Religious epistemology",
      "Conscience",
      "Church authority",
      "Faith and reason"
    ],
    influence: [
      "Catholic theology",
      "Anglican thought",
      "Religious epistemology",
      "Conversion theory",
      "Development theory"
    ],
    significance: "Bridge between Anglican and Catholic theology"
  }
]

const developments: Development[] = [
  {
    area: "Biblical Criticism",
    description: "Historical-critical approach to Scripture",
    keyFeatures: [
      "Source criticism",
      "Form criticism",
      "Historical investigation",
      "Literary analysis",
      "Textual criticism"
    ],
    challenges: [
      "Traditional authority",
      "Biblical inspiration",
      "Historical reliability",
      "Doctrinal implications"
    ],
    responses: [
      "Conservative defense",
      "Mediating positions",
      "Liberal acceptance",
      "New methodologies"
    ],
    impact: "Transformed biblical studies and theological method"
  },
  {
    area: "Science and Faith",
    description: "Interaction between Christian theology and modern science",
    keyFeatures: [
      "Evolution debate",
      "Biblical interpretation",
      "Natural theology",
      "Scientific method"
    ],
    challenges: [
      "Darwinian evolution",
      "Geological time",
      "Biblical creation",
      "Miracles"
    ],
    responses: [
      "Conflict model",
      "Harmony model",
      "Independence model",
      "Dialogue model"
    ],
    impact: "Ongoing debate about science-faith relationship"
  }
]

const significantEvents: Event[] = [
  {
    name: "Great Awakening",
    period: "1730-1740s",
    description: "Revival movement in British North America",
    significance: [
      "Religious renewal",
      "Evangelical movement",
      "Democratic impulse",
      "Educational institutions",
      "Social reform"
    ],
    keyFigures: [
      "Jonathan Edwards",
      "George Whitefield",
      "Gilbert Tennent",
      "John Wesley"
    ],
    longTermEffects: [
      "American evangelicalism",
      "Religious voluntarism",
      "Educational institutions",
      "Revival tradition",
      "Social reform movements"
    ]
  },
  {
    name: "Modern Missionary Movement",
    period: "1790s-1900",
    description: "Global expansion of Protestant missions",
    significance: [
      "Global Christianity",
      "Cultural exchange",
      "Bible translation",
      "Educational institutions",
      "Medical missions"
    ],
    keyFigures: [
      "William Carey",
      "Hudson Taylor",
      "David Livingstone",
      "Adoniram Judson"
    ],
    longTermEffects: [
      "Global church",
      "Indigenous churches",
      "Bible translation",
      "Cross-cultural methods",
      "Mission theology"
    ]
  }
]

export default function ModernPeriodPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Modern Period</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="movements">Movements</TabsTrigger>
          <TabsTrigger value="theologians">Theologians</TabsTrigger>
          <TabsTrigger value="developments">Developments</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Understanding the Modern Period</CardTitle>
              <CardDescription>
                The transformation of Christianity in the modern world
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The Modern Period (1650-1900) saw Christianity engaging with
                Enlightenment thought, scientific advances, and global expansion.
                This era witnessed the rise of new theological movements,
                missionary activity, and significant cultural changes.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="movements">
          <div className="grid gap-4 md:grid-cols-2">
            {theologicalMovements.map((movement) => (
              <Card key={movement.name}>
                <CardHeader>
                  <CardTitle>{movement.name}</CardTitle>
                  <CardDescription>{movement.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{movement.description}</p>
                  <h4 className="font-semibold">Key Figures:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {movement.keyFigures.map((figure) => (
                      <li key={figure}>{figure}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Main Ideas:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {movement.mainIdeas.map((idea) => (
                      <li key={idea}>{idea}</li>
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

        <TabsContent value="theologians">
          <div className="grid gap-4 md:grid-cols-2">
            {theologians.map((theologian) => (
              <Card key={theologian.name}>
                <CardHeader>
                  <CardTitle>{theologian.name}</CardTitle>
                  <CardDescription>{theologian.years} - {theologian.tradition}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Major Works:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {theologian.majorWorks.map((work) => (
                      <li key={work}>{work}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Key Ideas:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {theologian.keyIdeas.map((idea) => (
                      <li key={idea}>{idea}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Influence:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {theologian.influence.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p><strong>Significance:</strong> {theologian.significance}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="developments">
          <div className="grid gap-4 md:grid-cols-2">
            {developments.map((development) => (
              <Card key={development.area}>
                <CardHeader>
                  <CardTitle>{development.area}</CardTitle>
                  <CardDescription>{development.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {development.keyFeatures.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {development.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Responses:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {development.responses.map((response) => (
                      <li key={response}>{response}</li>
                    ))}
                  </ul>
                  <p><strong>Impact:</strong> {development.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events">
          <div className="grid gap-4 md:grid-cols-2">
            {significantEvents.map((event) => (
              <Card key={event.name}>
                <CardHeader>
                  <CardTitle>{event.name}</CardTitle>
                  <CardDescription>{event.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{event.description}</p>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {event.significance.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Key Figures:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {event.keyFigures.map((figure) => (
                      <li key={figure}>{figure}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Long-term Effects:</h4>
                  <ul className="list-disc pl-5">
                    {event.longTermEffects.map((effect) => (
                      <li key={effect}>{effect}</li>
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