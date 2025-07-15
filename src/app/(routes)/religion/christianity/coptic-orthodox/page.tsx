import React from 'react'
import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Coptic Orthodox Church - Religious Studies",
  description: "Comprehensive guide to the Coptic Orthodox Church, its history, traditions, and modern practice",
  keywords: [
    "Coptic Orthodox Church",
    "Coptic Christianity",
    "Egyptian Christianity",
    "Saint Mark",
    "Coptic liturgy",
    "Coptic monasticism",
    "Coptic art",
    "Coptic traditions"
  ]
}

// Add these interfaces and data before the component
interface ChurchSection {
  title: string
  description: string
  keyFeatures: string[]
  globalPresence: string[]
}

const churchOverview: ChurchSection[] = [
  {
    title: "Apostolic Foundation",
    description: "Founded by Saint Mark the Evangelist in Alexandria around 42 AD, making it one of the oldest Christian churches.",
    keyFeatures: [
      "Direct apostolic succession from Saint Mark",
      "Preservation of ancient Christian traditions",
      "Strong emphasis on monasticism",
      "Rich liturgical heritage"
    ],
    globalPresence: [
      "Headquarters in Alexandria, Egypt",
      "Large diaspora communities worldwide",
      "Growing presence in Africa and Asia",
      "Established churches in Europe and Americas"
    ]
  },
  {
    title: "Modern Church",
    description: "The largest Christian church in Egypt and the Middle East, with a growing global presence.",
    keyFeatures: [
      "Strong youth ministry programs",
      "Active missionary work",
      "Modern theological education",
      "Interfaith dialogue initiatives"
    ],
    globalPresence: [
      "Over 15 million members worldwide",
      "Churches in over 60 countries",
      "Expanding presence in Sub-Saharan Africa",
      "Growing communities in Western nations"
    ]
  }
]

// Add similar interfaces and data for other sections
interface HistoricalPeriod {
  era: string
  years: string
  description: string
  events: string[]
  culturalImpact: string[]
}

const historicalPeriods: HistoricalPeriod[] = [
  {
    era: "Apostolic Age",
    years: "42-200 AD",
    description: "Foundation and early growth of the Coptic Church under Saint Mark and his successors.",
    events: [
      "Arrival of Saint Mark in Alexandria",
      "Establishment of the Catechetical School",
      "Formation of early monastic communities",
      "Development of Coptic liturgical traditions"
    ],
    culturalImpact: [
      "Creation of Coptic language and script",
      "Early Christian theological development",
      "Influence on early monasticism",
      "Preservation of ancient Christian texts"
    ]
  }
  // Add more historical periods...
]

// Add similar data structures for other sections
interface TheologicalTradition {
  topic: string
  description: string
  keyConcepts: string[]
  churchFathers: string[]
}

const theologicalTraditions: TheologicalTradition[] = [
  {
    topic: "Christology",
    description: "The Coptic Orthodox understanding of the nature of Christ.",
    keyConcepts: [
      "Miaphysite doctrine",
      "Unity of Christ's divinity and humanity",
      "Rejection of Chalcedonian definition",
      "Emphasis on mystical union"
    ],
    churchFathers: [
      "Saint Cyril of Alexandria",
      "Saint Dioscorus",
      "Saint Timothy of Alexandria",
      "Saint Severus of Antioch"
    ]
  }
  // Add more theological traditions...
]

// Add the remaining interfaces and data for all sections used in the component
interface LiturgicalTradition {
  name: string
  description: string
  elements: string[]
  seasonalVariations: string[]
}

const liturgicalTraditions: LiturgicalTradition[] = [
  {
    name: "Divine Liturgy",
    description: "The central worship service of the Coptic Orthodox Church.",
    elements: [
      "Raising of Incense",
      "Liturgy of the Word",
      "Liturgy of the Faithful",
      "Distribution of Holy Mysteries"
    ],
    seasonalVariations: [
      "Great Fast (Lent) adaptations",
      "Feast day variations",
      "Special holy week services",
      "Seasonal hymns and prayers"
    ]
  }
  // Add more liturgical traditions...
]

// Add after the existing interfaces and data...

interface MonasticTradition {
  name: string
  description: string
  practices: string[]
  monasteries: string[]
}

const monasticTraditions: MonasticTradition[] = [
  {
    name: "Desert Monasticism",
    description: "The ancient tradition of Egyptian desert monasticism, founded by St. Anthony the Great.",
    practices: [
      "Solitary contemplation",
      "Communal worship",
      "Manual labor",
      "Strict asceticism"
    ],
    monasteries: [
      "Monastery of St. Anthony",
      "Monastery of St. Paul",
      "Monastery of St. Macarius",
      "Monastery of St. Pishoy"
    ]
  },
  {
    name: "Cenobitic Monasticism",
    description: "Communal monastic life established by St. Pachomius.",
    practices: [
      "Structured daily prayers",
      "Communal living",
      "Scriptural study",
      "Service to the community"
    ],
    monasteries: [
      "White Monastery",
      "Red Monastery",
      "Monastery of St. Samuel",
      "Monastery of St. Mina"
    ]
  }
]

interface ArtTradition {
  type: string
  description: string
  characteristics: string[]
  examples: string[]
}

const artTraditions: ArtTradition[] = [
  {
    type: "Iconography",
    description: "Traditional Coptic sacred art following ancient canonical rules.",
    characteristics: [
      "Frontal perspective",
      "Large eyes symbolizing spiritual vision",
      "Gold backgrounds representing divine light",
      "Symbolic color usage"
    ],
    examples: [
      "Icons of Christ Pantocrator",
      "Icons of the Virgin Mary",
      "Martyrs and Saints icons",
      "Biblical narrative scenes"
    ]
  },
  {
    type: "Architecture",
    description: "Distinctive Coptic church architecture combining Egyptian and Byzantine elements.",
    characteristics: [
      "Basilica layout",
      "Iconic domed structures",
      "Ornate wooden screens (iconostasis)",
      "Symbolic architectural elements"
    ],
    examples: [
      "Saint Mark's Coptic Cathedral",
      "Hanging Church of Cairo",
      "Church of St. Sergius and Bacchus",
      "Monastery of Saint Simon"
    ]
  }
]

interface ModernChurchAspect {
  topic: string
  description: string
  initiatives: string[]
  challenges: string[]
}

const modernChurch: ModernChurchAspect[] = [
  {
    topic: "Global Ministry",
    description: "Contemporary outreach and ministry efforts worldwide.",
    initiatives: [
      "Youth ministry programs",
      "International mission work",
      "Interfaith dialogue",
      "Social service projects"
    ],
    challenges: [
      "Preserving traditions in diaspora",
      "Adapting to modern culture",
      "Religious persecution",
      "Youth retention"
    ]
  },
  {
    topic: "Education and Formation",
    description: "Modern approaches to religious education and spiritual formation.",
    initiatives: [
      "Sunday School curriculum development",
      "Theological seminaries",
      "Online learning platforms",
      "Leadership training programs"
    ],
    challenges: [
      "Maintaining orthodox teaching",
      "Language preservation",
      "Cultural integration",
      "Resource limitations"
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
    name: "St. Mark's Coptic Orthodox College",
    type: "Educational",
    description: "Premier institution for Coptic theological studies and research.",
    url: "https://stmarks.edu.example"
  },
  {
    name: "Coptic Studies Digital Library",
    type: "Research",
    description: "Comprehensive digital archive of Coptic manuscripts and resources.",
    url: "https://copticstudieslibrary.example"
  },
  {
    name: "Journal of Coptic Studies",
    type: "Academic",
    description: "Peer-reviewed journal focusing on Coptic Christianity research.",
    url: "https://journalofcopticstudies.example"
  }
]

function CopticOrthodoxPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Coptic Orthodox Church</h1>
        <p className="text-xl text-muted-foreground">
          Exploring the ancient Christian tradition of Egypt and its worldwide presence
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-8 gap-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="theology">Theology</TabsTrigger>
          <TabsTrigger value="liturgy">Liturgy</TabsTrigger>
          <TabsTrigger value="monasticism">Monasticism</TabsTrigger>
          <TabsTrigger value="art">Art</TabsTrigger>
          <TabsTrigger value="modern">Modern Church</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Church Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {churchOverview.map((section) => (
                <div key={section.title} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{section.title}</h3>
                  <p className="text-sm mt-2">{section.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Key Features:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {section.keyFeatures.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Global Presence:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {section.globalPresence.map((presence, index) => (
                          <li key={index}>{presence}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-8">
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
                      <h4 className="text-sm font-medium">Cultural Impact:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {period.culturalImpact.map((impact, index) => (
                          <li key={index}>{impact}</li>
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
              <CardTitle>Theological Traditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {theologicalTraditions.map((tradition) => (
                <div key={tradition.topic} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{tradition.topic}</h3>
                  <p className="text-sm mt-2">{tradition.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Key Concepts:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {tradition.keyConcepts.map((concept, index) => (
                          <li key={index}>{concept}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Church Fathers:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {tradition.churchFathers.map((father, index) => (
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
                      <h4 className="text-sm font-medium">Seasonal Variations:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {tradition.seasonalVariations.map((variation, index) => (
                          <li key={index}>{variation}</li>
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

        <TabsContent value="art" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Coptic Art and Architecture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {artTraditions.map((tradition) => (
                <div key={tradition.type} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{tradition.type}</h3>
                  <p className="text-sm mt-2">{tradition.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Characteristics:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {tradition.characteristics.map((char, index) => (
                          <li key={index}>{char}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Notable Examples:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {tradition.examples.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="modern" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Modern Church Life</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {modernChurch.map((aspect) => (
                <div key={aspect.topic} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{aspect.topic}</h3>
                  <p className="text-sm mt-2">{aspect.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Current Initiatives:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {aspect.initiatives.map((initiative, index) => (
                          <li key={index}>{initiative}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Challenges:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {aspect.challenges.map((challenge, index) => (
                          <li key={index}>{challenge}</li>
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

export default CopticOrthodoxPage 