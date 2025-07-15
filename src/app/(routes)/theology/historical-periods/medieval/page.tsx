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
  title: "Medieval Period | Christian Historical Theology",
  description: "Comprehensive exploration of Medieval Christianity (500-1500 AD), including scholasticism, monasticism, and theological developments.",
  keywords: [
    "Medieval Christianity",
    "Scholasticism",
    "Monasticism",
    "Medieval Theology",
    "Church History",
    "Medieval Church",
    "Christian Middle Ages"
  ]
}

interface SubPeriod {
  era: string
  years: string
  description: string
  keyDevelopments: string[]
  significance: string
}

interface Theologian {
  name: string
  years: string
  location: string
  majorWorks: string[]
  contributions: string[]
  school: string
  significance: string
}

interface Movement {
  name: string
  description: string
  characteristics: string[]
  keyFigures: string[]
  impact: string[]
}

interface Development {
  area: string
  description: string
  innovations: string[]
  significance: string
  examples: string[]
}

const subPeriods: SubPeriod[] = [
  {
    era: "Early Medieval",
    years: "500-1000",
    description: "Period of transition from ancient to medieval Christianity",
    keyDevelopments: [
      "Rise of monasticism",
      "Christianization of Europe",
      "Development of feudal church structure",
      "Preservation of classical learning",
      "Byzantine theological development"
    ],
    significance: "Foundation of medieval Christian civilization"
  },
  {
    era: "High Medieval",
    years: "1000-1300",
    description: "Peak of medieval Christian culture and thought",
    keyDevelopments: [
      "Rise of scholasticism",
      "Cathedral schools and universities",
      "Crusades",
      "Mendicant orders",
      "Systematic theology development"
    ],
    significance: "Synthesis of faith and reason, peak of medieval achievements"
  },
  {
    era: "Late Medieval",
    years: "1300-1500",
    description: "Period of transition and reform movements",
    keyDevelopments: [
      "Nominalism",
      "Conciliarism",
      "Mysticism",
      "Reform movements",
      "Renaissance humanism"
    ],
    significance: "Seeds of Reformation and modern Christianity"
  }
]

const theologians: Theologian[] = [
  {
    name: "Augustine of Hippo",
    years: "354-430",
    location: "North Africa",
    majorWorks: [
      "Confessions",
      "City of God",
      "On the Trinity",
      "On Christian Doctrine",
      "Anti-Pelagian Writings"
    ],
    contributions: [
      "Doctrine of grace",
      "Original sin",
      "Predestination",
      "Just war theory",
      "Biblical hermeneutics"
    ],
    school: "Western Patristic",
    significance: "Most influential theologian in Western Christianity"
  },
  {
    name: "Thomas Aquinas",
    years: "1225-1274",
    location: "Italy",
    majorWorks: [
      "Summa Theologica",
      "Summa Contra Gentiles",
      "Commentary on the Sentences",
      "On Being and Essence"
    ],
    contributions: [
      "Synthesis of faith and reason",
      "Natural theology",
      "Sacramental theology",
      "Moral theology",
      "Philosophical theology"
    ],
    school: "Scholastic",
    significance: "Greatest medieval systematic theologian"
  },
  {
    name: "Bonaventure",
    years: "1221-1274",
    location: "France/Italy",
    majorWorks: [
      "Journey of the Mind to God",
      "The Soul's Journey into God",
      "Commentary on the Sentences",
      "Tree of Life"
    ],
    contributions: [
      "Mystical theology",
      "Franciscan theology",
      "Exemplarism",
      "Spiritual theology"
    ],
    school: "Franciscan",
    significance: "Major mystical and systematic theologian"
  }
]

const movements: Movement[] = [
  {
    name: "Scholasticism",
    description: "Systematic approach to theology using reason and dialectic",
    characteristics: [
      "Logical analysis",
      "Systematic organization",
      "Question method",
      "Integration of philosophy",
      "University context"
    ],
    keyFigures: [
      "Peter Lombard",
      "Albert the Great",
      "Thomas Aquinas",
      "Duns Scotus",
      "William of Ockham"
    ],
    impact: [
      "Systematic theology",
      "Theological education",
      "Faith-reason synthesis",
      "Technical vocabulary",
      "Method development"
    ]
  },
  {
    name: "Monasticism",
    description: "Religious life focused on prayer, work, and community",
    characteristics: [
      "Communal life",
      "Regular prayer",
      "Manual labor",
      "Ascetic practices",
      "Educational centers"
    ],
    keyFigures: [
      "Benedict of Nursia",
      "Bernard of Clairvaux",
      "Francis of Assisi",
      "Dominic"
    ],
    impact: [
      "Preservation of learning",
      "Spiritual development",
      "Cultural influence",
      "Educational system",
      "Reform movements"
    ]
  }
]

const developments: Development[] = [
  {
    area: "Sacramental Theology",
    description: "Systematic understanding of sacramental practice and theology",
    innovations: [
      "Seven sacraments defined",
      "Transubstantiation doctrine",
      "Ex opere operato",
      "Matter and form distinction",
      "Sacramental character"
    ],
    significance: "Foundational for Catholic sacramental system",
    examples: [
      "Fourth Lateran Council definitions",
      "Aquinas's sacramental theology",
      "Eucharistic controversies",
      "Penitential system"
    ]
  },
  {
    area: "Ecclesiology",
    description: "Development of church structure and authority",
    innovations: [
      "Papal supremacy",
      "Canon law system",
      "Hierarchical structure",
      "Conciliar theory",
      "Church-state relations"
    ],
    significance: "Shaped Western church organization",
    examples: [
      "Gregorian Reform",
      "Papal monarchy",
      "Concordat of Worms",
      "Conciliar movement"
    ]
  }
]

export default function MedievalPeriodPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Medieval Period</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="periods">Sub-Periods</TabsTrigger>
          <TabsTrigger value="theologians">Theologians</TabsTrigger>
          <TabsTrigger value="movements">Movements</TabsTrigger>
          <TabsTrigger value="developments">Developments</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Understanding the Medieval Period</CardTitle>
              <CardDescription>
                The formative millennium of Western Christian thought
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The Medieval Period (500-1500 AD) saw the development of
                systematic theology, the rise of universities, the flowering
                of monasticism, and the integration of faith and reason.
                This era established many enduring patterns of Western
                Christian thought and practice.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="periods">
          <div className="grid gap-4 md:grid-cols-2">
            {subPeriods.map((period) => (
              <Card key={period.era}>
                <CardHeader>
                  <CardTitle>{period.era}</CardTitle>
                  <CardDescription>{period.years}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{period.description}</p>
                  <h4 className="font-semibold">Key Developments:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {period.keyDevelopments.map((development) => (
                      <li key={development}>{development}</li>
                    ))}
                  </ul>
                  <p><strong>Significance:</strong> {period.significance}</p>
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
                  <CardDescription>{theologian.years} - {theologian.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Major Works:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {theologian.majorWorks.map((work) => (
                      <li key={work}>{work}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Contributions:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {theologian.contributions.map((contribution) => (
                      <li key={contribution}>{contribution}</li>
                    ))}
                  </ul>
                  <p><strong>School:</strong> {theologian.school}</p>
                  <p><strong>Significance:</strong> {theologian.significance}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="movements">
          <div className="grid gap-4 md:grid-cols-2">
            {movements.map((movement) => (
              <Card key={movement.name}>
                <CardHeader>
                  <CardTitle>{movement.name}</CardTitle>
                  <CardDescription>{movement.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {movement.characteristics.map((characteristic) => (
                      <li key={characteristic}>{characteristic}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Key Figures:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {movement.keyFigures.map((figure) => (
                      <li key={figure}>{figure}</li>
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

        <TabsContent value="developments">
          <div className="grid gap-4 md:grid-cols-2">
            {developments.map((development) => (
              <Card key={development.area}>
                <CardHeader>
                  <CardTitle>{development.area}</CardTitle>
                  <CardDescription>{development.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Innovations:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {development.innovations.map((innovation) => (
                      <li key={innovation}>{innovation}</li>
                    ))}
                  </ul>
                  <p><strong>Significance:</strong> {development.significance}</p>
                  <h4 className="font-semibold">Examples:</h4>
                  <ul className="list-disc pl-5">
                    {development.examples.map((example) => (
                      <li key={example}>{example}</li>
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