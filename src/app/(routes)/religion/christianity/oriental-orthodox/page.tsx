import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Oriental Orthodox Churches - Religious Studies",
  description: "Comprehensive guide to Oriental Orthodox Christianity, including Coptic, Ethiopian, Armenian, Syriac, Indian, and Eritrean churches",
  keywords: [
    "Oriental Orthodox",
    "Coptic Church",
    "Ethiopian Orthodox",
    "Armenian Apostolic",
    "Syriac Orthodox",
    "Indian Orthodox",
    "Eritrean Orthodox",
    "Non-Chalcedonian"
  ]
}

interface HistoricalPeriod {
  era: string
  years: string
  description: string
  events: string[]
  significance: string[]
}

const historicalPeriods: HistoricalPeriod[] = [
  {
    era: "Apostolic Age",
    years: "33-100 AD",
    description: "Foundation of Oriental Orthodox Churches through apostolic missions.",
    events: [
      "St. Mark's mission to Egypt",
      "St. Thomas's mission to India",
      "Establishment of early Christian communities",
      "Development of local liturgical traditions"
    ],
    significance: [
      "Apostolic foundations",
      "Early Christian witness",
      "Indigenous Christianity",
      "Cultural adaptation"
    ]
  },
  {
    era: "Patristic Period",
    years: "100-451 AD",
    description: "Development of distinctive theological and liturgical traditions.",
    events: [
      "Catechetical School of Alexandria",
      "Desert Fathers movement",
      "Development of monasticism",
      "Early church councils"
    ],
    significance: [
      "Theological development",
      "Monastic traditions",
      "Literary heritage",
      "Educational institutions"
    ]
  },
  {
    era: "Post-Chalcedon",
    years: "451-642 AD",
    description: "Period following the Council of Chalcedon and church divisions.",
    events: [
      "Council of Chalcedon (451)",
      "Formation of non-Chalcedonian communion",
      "Development of distinct identities",
      "Theological clarifications"
    ],
    significance: [
      "Ecclesiastical independence",
      "Theological distinctiveness",
      "Cultural preservation",
      "Spiritual resilience"
    ]
  },
  {
    era: "Islamic Period",
    years: "642-1900 AD",
    description: "Churches under Islamic rule and cultural preservation.",
    events: [
      "Islamic conquests",
      "Dhimmi status",
      "Preservation of traditions",
      "Cultural adaptations"
    ],
    significance: [
      "Cultural survival",
      "Religious continuity",
      "Interfaith relations",
      "Community resilience"
    ]
  },
  {
    era: "Modern Period",
    years: "1900-Present",
    description: "Contemporary challenges and global presence.",
    events: [
      "Global diaspora",
      "Ecumenical dialogue",
      "Modern challenges",
      "Revival movements"
    ],
    significance: [
      "Global expansion",
      "Cultural adaptation",
      "Ecumenical engagement",
      "Modern witness"
    ]
  }
]

interface MemberChurch {
  name: string
  founded: string
  description: string
  characteristics: string[]
  presentStatus: string[]
}

const memberChurches: MemberChurch[] = [
  {
    name: "Coptic Orthodox Church",
    founded: "42 AD",
    description: "The largest Oriental Orthodox Church, based in Egypt.",
    characteristics: [
      "Alexandrian liturgical tradition",
      "Strong monastic presence",
      "Rich iconographic tradition",
      "Ancient biblical scholarship"
    ],
    presentStatus: [
      "Global presence",
      "Active missionary work",
      "Modern theological education",
      "Youth engagement"
    ]
  },
  {
    name: "Ethiopian Orthodox Tewahedo Church",
    founded: "4th century",
    description: "Ancient African church with unique traditions.",
    characteristics: [
      "Ge'ez liturgical language",
      "Distinctive church architecture",
      "Strong biblical tradition",
      "Unique sacred music"
    ],
    presentStatus: [
      "Largest Oriental Orthodox Church in Africa",
      "Cultural preservation",
      "Educational development",
      "Social engagement"
    ]
  },
  {
    name: "Armenian Apostolic Church",
    founded: "301 AD",
    description: "National church of Armenia with rich cultural heritage.",
    characteristics: [
      "Armenian liturgical tradition",
      "Distinctive architecture",
      "Rich manuscript tradition",
      "Strong diaspora presence"
    ],
    presentStatus: [
      "Global Armenian diaspora",
      "Cultural preservation",
      "Educational institutions",
      "Ecumenical engagement"
    ]
  }
]

interface TheologicalTopic {
  title: string
  description: string
  keyPoints: string[]
  churchFathers: string[]
}

const theologicalTopics: TheologicalTopic[] = [
  {
    title: "Christology",
    description: "Oriental Orthodox understanding of Christ's nature.",
    keyPoints: [
      "Miaphysite doctrine",
      "Unity of Christ's nature",
      "Rejection of Chalcedonian definition",
      "Emphasis on mystery of Incarnation"
    ],
    churchFathers: [
      "St. Cyril of Alexandria",
      "Severus of Antioch",
      "Dioscorus of Alexandria",
      "St. Gregory of Tatev"
    ]
  }
]

interface LiturgicalTradition {
  name: string
  description: string
  elements: string[]
  features: string[]
}

const liturgicalTraditions: LiturgicalTradition[] = [
  {
    name: "Alexandrian Liturgy",
    description: "Ancient liturgical tradition of the Coptic and Ethiopian Churches.",
    elements: [
      "Liturgy of St. Basil",
      "Liturgy of St. Gregory",
      "Liturgy of St. Cyril",
      "Midnight Praise (Tasbeha)"
    ],
    features: [
      "Coptic hymns and chants",
      "Elaborate censing rituals",
      "Symbolic vestments",
      "Ancient prayer forms"
    ]
  },
  {
    name: "Armenian Divine Liturgy",
    description: "Distinctive liturgical tradition of the Armenian Apostolic Church.",
    elements: [
      "Badarak (Divine Liturgy)",
      "Sharakan (Hymnal)",
      "Morning Service",
      "Evening Service"
    ],
    features: [
      "Armenian sacred music",
      "Distinctive church architecture",
      "Unique liturgical calendar",
      "Special feast celebrations"
    ]
  },
  {
    name: "West Syriac Liturgy",
    description: "Liturgical tradition of the Syriac Orthodox Church.",
    elements: [
      "Liturgy of St. James",
      "Beth Gazo (Treasury of Chants)",
      "Daily Office",
      "Sacramental Rites"
    ],
    features: [
      "Syriac chant tradition",
      "Ancient ritual gestures",
      "Elaborate processionals",
      "Traditional vestments"
    ]
  }
]

interface CulturalTradition {
  name: string
  description: string
  practices: string[]
  modernExpression: string[]
}

const culturalTraditions: CulturalTradition[] = [
  {
    name: "Coptic Traditions",
    description: "Cultural heritage of Egyptian Christianity.",
    practices: [
      "Coptic language in liturgy",
      "Traditional iconography",
      "Coptic calendar observances",
      "Ancient musical traditions"
    ],
    modernExpression: [
      "Contemporary Coptic art",
      "Modern language preservation",
      "Cultural festivals",
      "Youth cultural programs"
    ]
  },
  {
    name: "Ethiopian Traditions",
    description: "Unique cultural expressions of Ethiopian Orthodoxy.",
    practices: [
      "Ge'ez liturgical language",
      "Traditional church architecture",
      "Ethiopian sacred music",
      "Religious dance traditions"
    ],
    modernExpression: [
      "Modern Ethiopian church art",
      "Contemporary musical adaptations",
      "Cultural education programs",
      "Heritage preservation efforts"
    ]
  }
]

interface MonasticTradition {
  name: string
  description: string
  practices: string[]
  monasteries: string[]
}

const monasticTraditions: MonasticTradition[] = [
  {
    name: "Coptic Monasticism",
    description: "Ancient desert monastic tradition of Egypt.",
    practices: [
      "Solitary contemplation",
      "Communal worship",
      "Manual labor",
      "Spiritual direction"
    ],
    monasteries: [
      "St. Anthony's Monastery",
      "St. Catherine's Monastery",
      "Monastery of St. Macarius",
      "Monastery of St. Pishoy"
    ]
  },
  {
    name: "Ethiopian Monasticism",
    description: "Distinctive Ethiopian monastic tradition.",
    practices: [
      "Strict asceticism",
      "Manuscript preservation",
      "Traditional education",
      "Community service"
    ],
    monasteries: [
      "Debre Damo Monastery",
      "Debre Libanos Monastery",
      "Lake Tana Monasteries",
      "Gishen Mariam Monastery"
    ]
  }
]

interface AcademicResource {
  name: string
  type: string
  description: string
  url: string
}

const academicResources: AcademicResource[] = [
  {
    name: "St. Athanasius Coptic Orthodox Theological Seminary",
    type: "Educational",
    description: "Premier institution for Oriental Orthodox theological studies.",
    url: "https://www.sacts.edu"
  },
  {
    name: "Oriental Orthodox Library",
    type: "Research",
    description: "Digital repository of Oriental Orthodox texts and resources.",
    url: "https://www.orientalorthodoxlibrary.org"
  },
  {
    name: "Journal of Oriental Christian Studies",
    type: "Academic",
    description: "Peer-reviewed journal focusing on Oriental Orthodox Christianity.",
    url: "https://www.orientalchristianstudies.org"
  }
]

function OrientalOrthodoxPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Oriental Orthodox Churches</h1>
        <p className="text-xl text-muted-foreground">
          Exploring the ancient traditions and rich heritage of the Oriental Orthodox communion
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-7 gap-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="churches">Churches</TabsTrigger>
          <TabsTrigger value="theology">Theology</TabsTrigger>
          <TabsTrigger value="liturgy">Liturgy</TabsTrigger>
          <TabsTrigger value="traditions">Traditions</TabsTrigger>
          <TabsTrigger value="monasticism">Monasticism</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Historical Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {historicalPeriods.map((period) => (
                <div key={period.era} className="p-4 bg-secondary rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{period.era}</h3>
                    <Badge>{period.years}</Badge>
                  </div>
                  <p className="text-sm mt-2">{period.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Key Events:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {period.events.map((event, index) => (
                          <li key={index}>{event}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Significance:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {period.significance.map((sig, index) => (
                          <li key={index}>{sig}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="churches" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Member Churches</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {memberChurches.map((church) => (
                <div key={church.name} className="p-4 bg-secondary rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{church.name}</h3>
                    <Badge>{church.founded}</Badge>
                  </div>
                  <p className="text-sm mt-2">{church.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Characteristics:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {church.characteristics.map((char, index) => (
                          <li key={index}>{char}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Present Status:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {church.presentStatus.map((status, index) => (
                          <li key={index}>{status}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="theology" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Theological Distinctives</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {theologicalTopics.map((topic) => (
                <div key={topic.title} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{topic.title}</h3>
                  <p className="text-sm mt-2">{topic.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Key Points:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {topic.keyPoints.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Church Fathers:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {topic.churchFathers.map((father, index) => (
                          <li key={index}>{father}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="liturgy" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Liturgical Traditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {liturgicalTraditions.map((tradition) => (
                <div key={tradition.name} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{tradition.name}</h3>
                  <p className="text-sm mt-2">{tradition.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Elements:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {tradition.elements.map((element, index) => (
                          <li key={index}>{element}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Special Features:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {tradition.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="traditions" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Cultural and Religious Traditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {culturalTraditions.map((tradition) => (
                <div key={tradition.name} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{tradition.name}</h3>
                  <p className="text-sm mt-2">{tradition.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Practices:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {tradition.practices.map((practice, index) => (
                          <li key={index}>{practice}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Modern Expression:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {tradition.modernExpression.map((expr, index) => (
                          <li key={index}>{expr}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monasticism" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Monastic Traditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {monasticTraditions.map((tradition) => (
                <div key={tradition.name} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{tradition.name}</h3>
                  <p className="text-sm mt-2">{tradition.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Practices:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {tradition.practices.map((practice, index) => (
                          <li key={index}>{practice}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Notable Monasteries:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {tradition.monasteries.map((monastery, index) => (
                          <li key={index}>{monastery}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Academic and Educational Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {academicResources.map((resource) => (
                <div key={resource.name} className="p-4 bg-secondary rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{resource.name}</h3>
                    <Badge>{resource.type}</Badge>
                  </div>
                  <p className="text-sm mt-2">{resource.description}</p>
                  <a
                    href={resource.url}
                    className="text-primary hover:underline text-sm block mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Resource
                  </a>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default OrientalOrthodoxPage 