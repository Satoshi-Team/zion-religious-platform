import React from 'react'
import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Orthodox Christianity - Religious Studies",
  description: "Comprehensive guide to Orthodox Christianity, including Eastern Orthodox and Oriental Orthodox traditions",
  keywords: [
    "Orthodox Christianity",
    "Eastern Orthodox",
    "Divine Liturgy",
    "Orthodox theology",
    "Orthodox traditions",
    "Orthodox icons",
    "Orthodox spirituality",
    "Orthodox Church history"
  ]
}

interface HistoricalPeriod {
  era: string
  description: string
  events: string[]
  significance: string[]
}

const historicalPeriods: HistoricalPeriod[] = [
  {
    era: "Apostolic Age (33-100 AD)",
    description: "Foundation of the Church through apostolic missions and early Christian communities.",
    events: [
      "Pentecost and early Church formation",
      "Apostolic missions throughout Roman Empire",
      "Establishment of major sees",
      "Development of liturgical practices"
    ],
    significance: [
      "Apostolic succession established",
      "Early Church structure formed",
      "Basic liturgical patterns developed",
      "Oral tradition preservation"
    ]
  },
  {
    era: "Patristic Period (100-787 AD)",
    description: "Age of the Church Fathers and Ecumenical Councils.",
    events: [
      "Seven Ecumenical Councils",
      "Development of Orthodox theology",
      "Establishment of monasticism",
      "Creation of liturgical traditions"
    ],
    significance: [
      "Doctrinal foundations established",
      "Monastic traditions developed",
      "Liturgical forms codified",
      "Patristic writings compiled"
    ]
  },
  {
    era: "Byzantine Period (330-1453)",
    description: "Orthodox Church during the Byzantine Empire.",
    events: [
      "Constantinople as New Rome",
      "Golden Age of Byzantine culture",
      "Missionary work to Slavic lands",
      "Development of iconography"
    ],
    significance: [
      "Imperial protection of Church",
      "Cultural flowering",
      "Expansion of Orthodoxy",
      "Artistic traditions established"
    ]
  },
  {
    era: "Ottoman Period (1453-1821)",
    description: "Orthodox Church under Ottoman rule.",
    events: [
      "Fall of Constantinople",
      "Millet system establishment",
      "Preservation of traditions",
      "Development of modern Greek identity"
    ],
    significance: [
      "Church preservation under occupation",
      "Cultural identity maintained",
      "Educational role strengthened",
      "Martyrdom tradition"
    ]
  },
  {
    era: "Modern Period (1821-Present)",
    description: "Orthodox Church in the modern world.",
    events: [
      "National churches' independence",
      "Russian Revolution impact",
      "Orthodox diaspora formation",
      "Ecumenical dialogue"
    ],
    significance: [
      "Church adaptation to modernity",
      "Global Orthodox presence",
      "Revival movements",
      "Contemporary challenges"
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
    title: "Trinity",
    description: "Orthodox understanding of the Triune God.",
    keyPoints: [
      "One essence, three persons",
      "Eternal generation of the Son",
      "Procession of the Holy Spirit",
      "Divine energies doctrine"
    ],
    churchFathers: [
      "St. Basil the Great",
      "St. Gregory the Theologian",
      "St. Gregory of Nyssa",
      "St. John of Damascus"
    ]
  },
  {
    title: "Christology",
    description: "Orthodox doctrine of Christ's person and natures.",
    keyPoints: [
      "Two natures united in one person",
      "Chalcedonian definition",
      "Hypostatic union",
      "Theotokos doctrine"
    ],
    churchFathers: [
      "St. Cyril of Alexandria",
      "St. Maximus the Confessor",
      "St. John of Damascus",
      "St. Theodore the Studite"
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
    name: "Divine Liturgy",
    description: "Central worship service of the Orthodox Church.",
    elements: [
      "Proskomedia (Preparation)",
      "Liturgy of the Catechumens",
      "Liturgy of the Faithful",
      "Holy Communion"
    ],
    features: [
      "Use of iconostasis",
      "Byzantine chant",
      "Liturgical processions",
      "Symbolic vestments"
    ]
  },
  {
    name: "Daily Cycle",
    description: "Daily services of prayer and worship.",
    elements: [
      "Vespers",
      "Compline",
      "Midnight Office",
      "Matins"
    ],
    features: [
      "Psalter readings",
      "Canonical hours",
      "Seasonal variations",
      "Monastic influence"
    ]
  }
]

interface SpiritualPractice {
  name: string
  description: string
  methods: string[]
  benefits: string[]
}

const spiritualPractices: SpiritualPractice[] = [
  {
    name: "Jesus Prayer",
    description: "Continuous prayer of the heart.",
    methods: [
      "Repetition of prayer formula",
      "Breath coordination",
      "Use of prayer rope",
      "Mental concentration"
    ],
    benefits: [
      "Inner stillness",
      "Spiritual awareness",
      "Heart purification",
      "Divine communion"
    ]
  },
  {
    name: "Fasting",
    description: "Ascetic practice of dietary restriction.",
    methods: [
      "Wednesday and Friday fasts",
      "Great Lent observance",
      "Seasonal fasting periods",
      "Eucharistic preparation"
    ],
    benefits: [
      "Spiritual discipline",
      "Physical health",
      "Mental clarity",
      "Community unity"
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
    name: "St. Vladimir's Orthodox Theological Seminary",
    type: "Educational",
    description: "Premier Orthodox theological institution in North America.",
    url: "https://www.svots.edu"
  },
  {
    name: "Orthodox Christian Studies Center",
    type: "Research",
    description: "Academic center for Orthodox Christian studies.",
    url: "https://www.fordham.edu/orthodoxy"
  }
]

interface Tradition {
  name: string
  description: string
  practices: string[]
  modernExpression: string[]
}

const traditions: Tradition[] = [
  {
    name: "Iconography",
    description: "Sacred art tradition of the Orthodox Church.",
    practices: [
      "Traditional icon writing techniques",
      "Canonical image composition",
      "Natural pigment preparation",
      "Prayer during icon writing"
    ],
    modernExpression: [
      "Contemporary icon schools",
      "Modern church decoration",
      "Digital preservation",
      "Educational programs"
    ]
  },
  {
    name: "Sacred Music",
    description: "Traditional Orthodox liturgical music.",
    practices: [
      "Byzantine chant",
      "Russian choral traditions",
      "Serbian chant",
      "Romanian psaltiki"
    ],
    modernExpression: [
      "Modern compositions",
      "Digital recordings",
      "Music education",
      "Concert performances"
    ]
  },
  {
    name: "Monasticism",
    description: "Orthodox monastic traditions and practices.",
    practices: [
      "Cenobitic life",
      "Hesychastic prayer",
      "Ascetic disciplines",
      "Manual labor"
    ],
    modernExpression: [
      "Modern monasteries",
      "Retreat centers",
      "Publishing houses",
      "Online presence"
    ]
  },
  {
    name: "Church Architecture",
    description: "Traditional Orthodox church building and decoration.",
    practices: [
      "Byzantine architectural style",
      "Dome construction",
      "Iconographic programs",
      "Liturgical space design"
    ],
    modernExpression: [
      "Contemporary church design",
      "Adaptive reuse",
      "Environmental considerations",
      "Modern materials"
    ]
  },
  {
    name: "Liturgical Calendar",
    description: "Annual cycle of feasts and fasts.",
    practices: [
      "Paschal cycle",
      "Fixed feasts",
      "Fasting periods",
      "Saints' commemorations"
    ],
    modernExpression: [
      "Digital calendars",
      "Local adaptations",
      "Cultural celebrations",
      "Educational resources"
    ]
  },
  {
    name: "Sacramental Life",
    description: "Orthodox sacramental practices and traditions.",
    practices: [
      "Baptismal customs",
      "Marriage ceremonies",
      "Funeral rites",
      "Confession practices"
    ],
    modernExpression: [
      "Contemporary pastoral care",
      "Cultural adaptations",
      "Interfaith families",
      "Distance ministry"
    ]
  }
]

interface IconCategory {
  type: string
  description: string
  symbolism: string[]
  usage: string[]
}

const iconography: IconCategory[] = [
  {
    type: "Christological Icons",
    description: "Icons depicting Christ and events from His life.",
    symbolism: [
      "Christ's dual nature",
      "Divine uncreated light",
      "Inverse perspective",
      "Theological color symbolism"
    ],
    usage: [
      "Iconostasis central tier",
      "Feast day celebrations",
      "Personal devotion",
      "Theological instruction"
    ]
  },
  {
    type: "Theotokos Icons",
    description: "Icons of the Mother of God in various forms.",
    symbolism: [
      "Divine motherhood",
      "Perpetual virginity",
      "Intercessory role",
      "Star symbolism"
    ],
    usage: [
      "Church decoration",
      "Marian feasts",
      "Personal prayer",
      "Protection blessing"
    ]
  },
  {
    type: "Festal Icons",
    description: "Icons depicting major feasts of the liturgical year.",
    symbolism: [
      "Theological narrative",
      "Liturgical connection",
      "Historical events",
      "Spiritual reality"
    ],
    usage: [
      "Feast day celebrations",
      "Church decoration",
      "Liturgical processions",
      "Catechetical teaching"
    ]
  },
  {
    type: "Saints Icons",
    description: "Icons of saints and holy figures throughout church history.",
    symbolism: [
      "Sanctity attributes",
      "Martyrdom symbols",
      "Hierarchical status",
      "Spiritual achievements"
    ],
    usage: [
      "Saint commemorations",
      "Personal patronage",
      "Church dedication",
      "Intercessory prayer"
    ]
  },
  {
    type: "Calendar Icons",
    description: "Icons arranged according to the liturgical calendar.",
    symbolism: [
      "Temporal sequence",
      "Liturgical cycles",
      "Sanctoral cycle",
      "Seasonal themes"
    ],
    usage: [
      "Daily commemoration",
      "Liturgical planning",
      "Educational purposes",
      "Devotional practice"
    ]
  },
  {
    type: "Iconostasis Program",
    description: "Systematic arrangement of icons on the church screen.",
    symbolism: [
      "Hierarchical order",
      "Theological progression",
      "Church unity",
      "Heaven-earth connection"
    ],
    usage: [
      "Liturgical function",
      "Spatial organization",
      "Visual theology",
      "Worship focus"
    ]
  },
  {
    type: "Portable Icons",
    description: "Icons for personal and processional use.",
    symbolism: [
      "Personal sanctification",
      "Divine presence",
      "Spiritual protection",
      "Prayer focus"
    ],
    usage: [
      "Personal devotion",
      "Processions",
      "Home blessing",
      "Travel protection"
    ]
  }
]

function OrthodoxPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Orthodox Christianity</h1>
        <p className="text-xl text-muted-foreground">
          Exploring the ancient traditions, theology, and practices of Orthodox Christianity
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-7 gap-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="theology">Theology</TabsTrigger>
          <TabsTrigger value="liturgy">Liturgy</TabsTrigger>
          <TabsTrigger value="traditions">Traditions</TabsTrigger>
          <TabsTrigger value="spirituality">Spirituality</TabsTrigger>
          <TabsTrigger value="icons">Icons</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Historical Development and Structure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {historicalPeriods.map((period) => (
                <div key={period.era} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{period.era}</h3>
                  <p className="text-sm mt-2">{period.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Key Events:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {period.events.map((event, index) => (
                          <li key={index}>
                            <span className="font-medium">{event}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Significance:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {period.significance.map((item, index) => (
                          <li key={index}>{item}</li>
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
              <CardTitle>Orthodox Theology and Doctrine</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {theologicalTopics.map((topic) => (
                <div key={topic.title} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{topic.title}</h3>
                  <p className="text-sm mt-2">{topic.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Key Concepts:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {topic.keyPoints.map((concept, index) => (
                          <li key={index}>{concept}</li>
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
              <CardTitle>Divine Liturgy and Worship</CardTitle>
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
                      <h4 className="text-sm font-medium">Features:</h4>
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
              <CardTitle>Orthodox Traditions and Practices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {traditions.map((tradition) => (
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
                        {tradition.modernExpression.map((expression, index) => (
                          <li key={index}>{expression}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="spirituality" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Orthodox Spirituality</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {spiritualPractices.map((practice) => (
                <div key={practice.name} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{practice.name}</h3>
                  <p className="text-sm mt-2">{practice.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Methods:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {practice.methods.map((method, index) => (
                          <li key={index}>{method}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Benefits:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {practice.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="icons" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Icons and Sacred Art</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {iconography.map((category) => (
                <div key={category.type} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{category.type}</h3>
                  <p className="text-sm mt-2">{category.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Symbolism:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {category.symbolism.map((symbol, index) => (
                          <li key={index}>{symbol}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Usage:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {category.usage.map((use, index) => (
                          <li key={index}>{use}</li>
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

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Christianity Navigation</CardTitle>
          <CardDescription>
            Explore related topics in Christianity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Core Teachings</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/teachings/christianity/trinity" className="text-primary hover:underline">
                    The Trinity
                  </Link>
                </li>
                <li>
                  <Link href="/teachings/christianity/church" className="text-primary hover:underline">
                    The Church
                  </Link>
                </li>
                <li>
                  <Link href="/teachings/christianity/salvation" className="text-primary hover:underline">
                    Salvation
                  </Link>
                </li>
                <li>
                  <Link href="/blog/how-to-read-the-bible" className="text-primary hover:underline">
                    How to Read the Bible
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Theology</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/religion/christianity/theology/pneumatology" className="text-primary hover:underline">
                    Pneumatology
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/theology/christology" className="text-primary hover:underline">
                    Christology
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/theology/ecclesiology" className="text-primary hover:underline">
                    Ecclesiology
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/theology/soteriology" className="text-primary hover:underline">
                    Soteriology
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Traditions</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/religion/christianity/orthodox" className="text-primary hover:underline">
                    Orthodox Christianity
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/lutheran" className="text-primary hover:underline">
                    Lutheran Tradition
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/churches-of-christ" className="text-primary hover:underline">
                    Churches of Christ
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/assyrian-church" className="text-primary hover:underline">
                    Assyrian Church
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">History</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/religion/christianity/history/early-church" className="text-primary hover:underline">
                    Early Church History
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/history/reformation" className="text-primary hover:underline">
                    The Reformation
                  </Link>
                </li>
                <li>
                  <Link href="/blog/christian-creeds-and-confessions" className="text-primary hover:underline">
                    Christian Creeds
                  </Link>
                </li>
                <li>
                  <Link href="/blog/who-is-the-holy-spirit" className="text-primary hover:underline">
                    Who Is the Holy Spirit?
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default OrthodoxPage 