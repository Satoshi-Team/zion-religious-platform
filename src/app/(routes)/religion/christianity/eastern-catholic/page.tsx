import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Eastern Catholic Churches - Religious Studies",
  description: "Comprehensive guide to Eastern Catholic Churches, their traditions, liturgies, and spirituality",
  keywords: [
    "Eastern Catholic Churches",
    "Byzantine Catholic",
    "Maronite Church",
    "Eastern liturgy",
    "Eastern traditions",
    "Catholic communion",
    "Eastern rites",
    "Sui iuris churches"
  ]
}

// Add these interfaces and data before the component
interface HistoricalPeriod {
  era: string
  years: string
  description: string
  events: string[]
  significance: string[]
}

const historicalPeriods: HistoricalPeriod[] = [
  {
    era: "Early Church Period",
    years: "1st-5th centuries",
    description: "Development of distinct Eastern Christian traditions and liturgies.",
    events: [
      "Formation of Patriarchates (Alexandria, Antioch, Jerusalem)",
      "Development of Eastern liturgical traditions",
      "Early theological contributions of Eastern Fathers",
      "Establishment of monastic traditions"
    ],
    significance: [
      "Foundation of Eastern Christian identity",
      "Development of theological traditions",
      "Establishment of liturgical practices",
      "Formation of ecclesiastical structures"
    ]
  },
  {
    era: "Byzantine Period",
    years: "5th-15th centuries",
    description: "Flourishing of Eastern Christian traditions under Byzantine influence.",
    events: [
      "Council of Chalcedon (451)",
      "Development of Byzantine Rite",
      "Missionary work among Slavic peoples",
      "Interaction with Islamic civilization"
    ],
    significance: [
      "Refinement of liturgical traditions",
      "Development of iconographic traditions",
      "Expansion of Eastern Christianity",
      "Preservation of ancient traditions"
    ]
  },
  {
    era: "Union Period",
    years: "15th-19th centuries",
    description: "Various Eastern Churches enter into communion with Rome while maintaining their traditions.",
    events: [
      "Council of Florence (1439)",
      "Union of Brest (1596)",
      "Formation of various Eastern Catholic Churches",
      "Development of Eastern Catholic identity"
    ],
    significance: [
      "Establishment of Eastern Catholic Churches",
      "Preservation of Eastern traditions in Catholic communion",
      "Development of unique Eastern Catholic identity",
      "Bridge between East and West"
    ]
  },
  {
    era: "Modern Period",
    years: "19th century-present",
    description: "Revival and renewal of Eastern Catholic Churches in modern context.",
    events: [
      "Vatican II recognition of Eastern traditions",
      "Post-Communist revival in Eastern Europe",
      "Global expansion of Eastern Catholic Churches",
      "Modern theological dialogue"
    ],
    significance: [
      "Renewed appreciation of Eastern traditions",
      "Growth in diaspora communities",
      "Contribution to ecumenical dialogue",
      "Development of modern Eastern Catholic identity"
    ]
  }
]

interface EasternChurch {
  name: string
  rite: string
  description: string
  characteristics: string[]
  distribution: string[]
}

const easternChurches: EasternChurch[] = [
  {
    name: "Ukrainian Greek Catholic Church",
    rite: "Byzantine",
    description: "Largest Eastern Catholic Church, following Byzantine tradition while in communion with Rome.",
    characteristics: [
      "Byzantine liturgical tradition",
      "Ukrainian cultural heritage",
      "Strong monastic tradition",
      "Active youth ministry"
    ],
    distribution: [
      "Ukraine (primary presence)",
      "North and South America",
      "Western Europe",
      "Australia"
    ]
  },
  {
    name: "Maronite Church",
    rite: "West Syriac",
    description: "Ancient church of Lebanon, never separated from Rome, with distinct liturgical tradition.",
    characteristics: [
      "Syriac liturgical heritage",
      "Strong Lebanese identity",
      "Unique musical tradition",
      "Ancient monastic tradition"
    ],
    distribution: [
      "Lebanon (primary presence)",
      "Middle East",
      "Americas",
      "Australia"
    ]
  },
  {
    name: "Syro-Malabar Church",
    rite: "East Syriac",
    description: "Major Eastern Catholic Church in India, tracing origins to St. Thomas the Apostle.",
    characteristics: [
      "East Syriac liturgical tradition",
      "Indian cultural integration",
      "Strong missionary emphasis",
      "Active educational ministry"
    ],
    distribution: [
      "India (primary presence)",
      "Gulf countries",
      "North America",
      "Europe"
    ]
  }
]

// Add remaining interfaces and data...
interface LiturgicalTradition {
  name: string
  description: string
  elements: string[]
  features: string[]
}

const liturgicalTraditions: LiturgicalTradition[] = [
  {
    name: "Byzantine Divine Liturgy",
    description: "The primary liturgical celebration in Byzantine Catholic Churches.",
    elements: [
      "Proskomedia (preparation)",
      "Liturgy of the Word",
      "Liturgy of the Faithful",
      "Divine Communion"
    ],
    features: [
      "Use of iconostasis",
      "Byzantine chant",
      "Elaborate ceremonial",
      "Multiple liturgical languages"
    ]
  }
  // Add more traditions...
]

interface CulturalTradition {
  name: string
  description: string
  practices: string[]
  modernExpression: string[]
}

const culturalTraditions: CulturalTradition[] = [
  {
    name: "Byzantine Cultural Heritage",
    description: "Rich cultural traditions inherited from the Byzantine Empire.",
    practices: [
      "Traditional iconography",
      "Byzantine chant and music",
      "Liturgical calendar celebrations",
      "Traditional vestments and symbols"
    ],
    modernExpression: [
      "Contemporary icon writing schools",
      "Modern Byzantine music compositions",
      "Cultural festivals and events",
      "Educational programs preserving traditions"
    ]
  },
  {
    name: "Middle Eastern Traditions",
    description: "Cultural practices from ancient Middle Eastern Christian communities.",
    practices: [
      "Syriac language preservation",
      "Traditional Middle Eastern sacred music",
      "Ancient ritual practices",
      "Traditional religious art forms"
    ],
    modernExpression: [
      "Modern Syriac language programs",
      "Contemporary Middle Eastern Christian music",
      "Cultural heritage preservation projects",
      "Digital archives of traditions"
    ]
  },
  {
    name: "Indian Christian Heritage",
    description: "Cultural traditions of St. Thomas Christians in India.",
    practices: [
      "Malayalam liturgical traditions",
      "Traditional Indian Christian art",
      "Local cultural adaptations",
      "Indigenous spiritual practices"
    ],
    modernExpression: [
      "Modern Indian Christian music",
      "Contemporary cultural synthesis",
      "Youth cultural programs",
      "Digital preservation initiatives"
    ]
  },
  {
    name: "Slavic Traditions",
    description: "Cultural heritage of Slavic Eastern Catholic Churches.",
    practices: [
      "Church Slavonic language",
      "Traditional Slavic church music",
      "Folk religious customs",
      "Traditional religious celebrations"
    ],
    modernExpression: [
      "Modern Slavic Christian culture",
      "Contemporary religious music",
      "Cultural education programs",
      "Digital documentation projects"
    ]
  }
]

interface SpiritualTradition {
  name: string
  description: string
  practices: string[]
  sources: string[]
}

const spiritualTraditions: SpiritualTradition[] = [
  {
    name: "Eastern Mystical Tradition",
    description: "Mystical and contemplative practices of Eastern Catholic spirituality.",
    practices: [
      "Jesus Prayer practice",
      "Hesychastic meditation",
      "Spiritual direction",
      "Ascetic disciplines"
    ],
    sources: [
      "Desert Fathers writings",
      "Eastern Patristic texts",
      "Monastic traditions",
      "Spiritual classics"
    ]
  },
  {
    name: "Liturgical Spirituality",
    description: "Spiritual life centered on liturgical celebration and prayer.",
    practices: [
      "Liturgical prayer cycle",
      "Sacramental life",
      "Liturgical year observance",
      "Sacred music participation"
    ],
    sources: [
      "Ancient liturgical texts",
      "Church Fathers' commentaries",
      "Liturgical manuals",
      "Traditional hymns"
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
    name: "Metropolitan Andrey Sheptytsky Institute",
    type: "Academic",
    description: "Center for Eastern Christian Studies focusing on Eastern Catholic traditions.",
    url: "https://www.sheptytskyinstitute.ca"
  },
  {
    name: "Pontifical Oriental Institute",
    type: "Academic",
    description: "Premier institution for Eastern Christian studies in Rome.",
    url: "https://www.pontificio-orientale.com"
  },
  {
    name: "Eastern Churches Journal",
    type: "Research",
    description: "Academic publication dedicated to Eastern Catholic studies.",
    url: "https://easternchurchesjournal.example"
  }
]

interface HierarchyLevel {
  title: string
  description: string
  responsibilities: string[]
  requirements: string[]
}

const hierarchyLevels: HierarchyLevel[] = [
  {
    title: "Major Archbishop",
    description: "Head of a Major Archiepiscopal Church, equivalent to a Patriarch in authority over their particular Church.",
    responsibilities: [
      "Leading particular Eastern Catholic Church",
      "Appointing bishops within the Church",
      "Convoking and presiding over synods",
      "Maintaining communion with Rome"
    ],
    requirements: [
      "Episcopal ordination",
      "Election by Holy Synod",
      "Confirmation by Holy See",
      "Extensive pastoral experience"
    ]
  },
  {
    title: "Metropolitan",
    description: "Head of an ecclesiastical province within an Eastern Catholic Church.",
    responsibilities: [
      "Overseeing metropolitan province",
      "Coordinating episcopal activities",
      "Representing province in synods",
      "Maintaining liturgical traditions"
    ],
    requirements: [
      "Episcopal ordination",
      "Appointment by Major Archbishop/Patriarch",
      "Confirmation by Holy See",
      "Significant administrative experience"
    ]
  },
  {
    title: "Eparchial Bishop",
    description: "Leader of an eparchy (diocese) in Eastern Catholic Churches.",
    responsibilities: [
      "Governing local eparchy",
      "Ordaining priests and deacons",
      "Teaching and sanctifying",
      "Administering church property"
    ],
    requirements: [
      "Priestly ordination",
      "Theological education",
      "Pastoral experience",
      "Canonical appointment"
    ]
  },
  {
    title: "Protosyncellus",
    description: "Equivalent to Vicar General in Latin Church, principal deputy of the eparchial bishop.",
    responsibilities: [
      "Assisting eparchial bishop",
      "Administrative oversight",
      "Coordinating pastoral programs",
      "Representing bishop when needed"
    ],
    requirements: [
      "Priestly ordination",
      "Administrative experience",
      "Knowledge of Eastern Canon Law",
      "Appointment by eparchial bishop"
    ]
  },
  {
    title: "Archpriest",
    description: "Senior priest overseeing a district or group of parishes.",
    responsibilities: [
      "Supervising local clergy",
      "Coordinating pastoral activities",
      "Maintaining liturgical standards",
      "Reporting to eparchial bishop"
    ],
    requirements: [
      "Priestly ordination",
      "Years of pastoral experience",
      "Leadership abilities",
      "Good standing in eparchy"
    ]
  },
  {
    title: "Presbyter",
    description: "Ordained priest serving in Eastern Catholic parishes.",
    responsibilities: [
      "Celebrating Divine Liturgy",
      "Administering sacraments",
      "Pastoral care of faithful",
      "Parish administration"
    ],
    requirements: [
      "Seminary formation",
      "Theological education",
      "Liturgical training",
      "Episcopal appointment"
    ]
  },
  {
    title: "Deacon",
    description: "Ordained minister serving in liturgical and pastoral roles.",
    responsibilities: [
      "Assisting in Divine Liturgy",
      "Proclaiming Gospel",
      "Charitable service",
      "Catechetical instruction"
    ],
    requirements: [
      "Diaconal formation",
      "Theological education",
      "Good standing in community",
      "Episcopal appointment"
    ]
  }
]

function EasternCatholicPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Eastern Catholic Churches</h1>
        <p className="text-xl text-muted-foreground">
          Exploring the rich traditions and diversity of Eastern Catholic Churches in communion with Rome
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-7 gap-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="churches">Churches</TabsTrigger>
          <TabsTrigger value="liturgy">Liturgy</TabsTrigger>
          <TabsTrigger value="traditions">Traditions</TabsTrigger>
          <TabsTrigger value="spirituality">Spirituality</TabsTrigger>
          <TabsTrigger value="hierarchy">Hierarchy</TabsTrigger>
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
              <CardTitle>Major Eastern Catholic Churches</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {easternChurches.map((church) => (
                <div key={church.name} className="p-4 bg-secondary rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{church.name}</h3>
                    <Badge>{church.rite}</Badge>
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
                      <h4 className="text-sm font-medium">Distribution:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {church.distribution.map((dist, index) => (
                          <li key={index}>{dist}</li>
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

        <TabsContent value="spirituality" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Spiritual Traditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {spiritualTraditions.map((tradition) => (
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
                      <h4 className="text-sm font-medium">Sources:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {tradition.sources.map((source, index) => (
                          <li key={index}>{source}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hierarchy" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Ecclesiastical Hierarchy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {hierarchyLevels.map((level) => (
                <div key={level.title} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{level.title}</h3>
                  <p className="text-sm mt-2">{level.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Responsibilities:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {level.responsibilities.map((resp, index) => (
                          <li key={index}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Requirements:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {level.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
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

export default EasternCatholicPage 