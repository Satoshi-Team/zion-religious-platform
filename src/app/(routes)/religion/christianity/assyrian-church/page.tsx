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
  title: "Assyrian Church of the East | Ancient Christian Tradition",
  description: "Comprehensive guide to the Assyrian Church of the East, including its apostolic heritage, liturgical traditions, theology, and contemporary presence.",
  keywords: [
    "Assyrian Church of the East",
    "Church of the East",
    "Syriac Christianity",
    "East Syriac Rite",
    "Nestorian Church",
    "Mar Addai",
    "Mar Mari",
    "Chaldean liturgy"
  ]
}

interface Tradition {
  name: string
  description: string
  significance: string
  historicalContext: string[]
  currentPractice: string[]
}

interface Liturgy {
  name: string
  description: string
  elements: string[]
  significance: string
  language: string
  frequency: string
}

interface Diocese {
  name: string
  location: string
  established: string
  parishes: number
  bishop: string
  population: string
}

interface Heritage {
  period: string
  description: string
  keyFigures: Array<{
    name: string
    role: string
    contribution: string
    period: string
  }>
  significance: string[]
}

const liturgicalTraditions: Liturgy[] = [
  {
    name: "Holy Qurbana of Addai and Mari",
    description: "One of the oldest Eucharistic prayers in continuous use, dating to the 3rd century.",
    elements: [
      "Preparation of the Gifts",
      "Liturgy of the Word",
      "Liturgy of the Faithful",
      "Holy Communion",
      "Dismissal"
    ],
    significance: "Preserves ancient Mesopotamian Christian liturgical practices",
    language: "Classical Syriac (Aramaic)",
    frequency: "Every Sunday and Feast Days"
  },
  {
    name: "Liturgy of the Hours",
    description: "Daily prayer cycle following ancient Eastern Christian tradition.",
    elements: [
      "Evening Prayer (Ramsha)",
      "Night Prayer (Suba'a)",
      "Morning Prayer (Sapra)",
      "Noon Prayer (Qayla)",
      "Afternoon Prayer (Endana)"
    ],
    significance: "Maintains continuous prayer tradition from apostolic times",
    language: "Classical Syriac and vernacular",
    frequency: "Daily"
  }
]

const apostolicHeritage: Heritage[] = [
  {
    period: "Apostolic Era (1st-2nd centuries)",
    description: "Traditional foundation by Apostles Thomas, Thaddeus, and Mari",
    keyFigures: [
      {
        name: "Mar Addai (Thaddeus)",
        role: "Apostle",
        contribution: "Established Christian presence in Edessa",
        period: "1st century"
      },
      {
        name: "Mar Mari",
        role: "Apostle",
        contribution: "Evangelized Mesopotamia",
        period: "1st century"
      }
    ],
    significance: [
      "Direct apostolic succession",
      "Preservation of Aramaic Christianity",
      "Early missionary activity in Asia"
    ]
  },
  {
    period: "Early Church (3rd-5th centuries)",
    description: "Development of distinct theological and liturgical traditions",
    keyFigures: [
      {
        name: "Mar Narsai",
        role: "Theologian",
        contribution: "Theological writings and biblical commentary",
        period: "399-502 AD"
      },
      {
        name: "Mar Bar Sauma",
        role: "Metropolitan",
        contribution: "Established theological school of Nisibis",
        period: "435-489 AD"
      }
    ],
    significance: [
      "Development of East Syriac theology",
      "Establishment of monastic schools",
      "Missionary expansion to Central Asia"
    ]
  }
]

const modernDioceses: Diocese[] = [
  {
    name: "Diocese of Western USA",
    location: "California, USA",
    established: "1954",
    parishes: 15,
    bishop: "Mar Awa III",
    population: "40,000"
  },
  {
    name: "Diocese of Australia and New Zealand",
    location: "Sydney, Australia",
    established: "1984",
    parishes: 10,
    bishop: "Mar Meelis Zaia",
    population: "25,000"
  }
]

interface TheologicalTradition {
  aspect: string
  description: string
  keyTexts: string[]
  significance: string[]
}

const theologicalTraditions: TheologicalTradition[] = [
  {
    aspect: "Christology",
    description: "Emphasizes the distinction between divine and human natures in Christ while maintaining their unity in one person.",
    keyTexts: [
      "Synodical Letters of Mar Babai the Great",
      "Book of the Union by Mar Babai",
      "Commentary on the Creed by Mar Narsai"
    ],
    significance: [
      "Preserves ancient Eastern Christian understanding",
      "Maintains apostolic teaching on Christ's nature",
      "Influences Eastern Christian theology"
    ]
  },
  {
    aspect: "Soteriology",
    description: "Salvation understood as deification (theosis) through participation in divine life.",
    keyTexts: [
      "Homilies of Mar Narsai",
      "Writings of Mar Theodore",
      "Liturgical texts of Addai and Mari"
    ],
    significance: [
      "Emphasizes transformative nature of salvation",
      "Maintains ancient Eastern understanding",
      "Links liturgical and spiritual life"
    ]
  }
]

export default function AssyrianChurchPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-center mb-8">Assyrian Church of the East</h1>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="liturgy">Liturgy</TabsTrigger>
            <TabsTrigger value="heritage">Heritage</TabsTrigger>
            <TabsTrigger value="dioceses">Dioceses</TabsTrigger>
            <TabsTrigger value="theology">Theology</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Assyrian Church Overview</CardTitle>
                <CardDescription>
                  One of the most ancient Christian churches, tracing its origins to apostolic times
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Assyrian Church of the East represents one of the oldest continuous Christian traditions,
                  maintaining ancient liturgical practices in Aramaic and a unique theological perspective
                  from the East Syriac tradition.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium mb-2">Historical Significance</h3>
                    <p className="text-sm">
                      Traces its origins to the apostolic era through Saints Thomas, Addai, and Mari,
                      preserving ancient Christian traditions and practices.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium mb-2">Contemporary Presence</h3>
                    <p className="text-sm">
                      Global presence with dioceses across the Middle East, India, North America,
                      Europe, and Australia.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="liturgy">
            <Card>
              <CardHeader>
                <CardTitle>Liturgical Traditions</CardTitle>
                <CardDescription>
                  Ancient liturgical practices preserved in Aramaic
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {liturgicalTraditions.map((liturgy) => (
                  <div key={liturgy.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{liturgy.name}</h3>
                    <p className="text-sm mt-2">{liturgy.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Elements:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {liturgy.elements.map((element, index) => (
                          <li key={index}>{element}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm mt-4">
                      <span className="font-medium">Language:</span> {liturgy.language}
                    </p>
                    <p className="text-sm mt-2">
                      <span className="font-medium">Frequency:</span> {liturgy.frequency}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="heritage">
            <Card>
              <CardHeader>
                <CardTitle>Apostolic Heritage</CardTitle>
                <CardDescription>
                  Historical development and apostolic succession
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {apostolicHeritage.map((period) => (
                  <div key={period.period} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{period.period}</h3>
                    <p className="text-sm mt-2">{period.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Key Figures:</h4>
                      <div className="grid gap-4 mt-2 md:grid-cols-2">
                        {period.keyFigures.map((figure) => (
                          <div key={figure.name} className="p-3 bg-background rounded">
                            <h5 className="font-medium text-sm">{figure.name}</h5>
                            <p className="text-sm mt-1">{figure.role}</p>
                            <p className="text-sm">{figure.contribution}</p>
                            <p className="text-sm text-muted-foreground">{figure.period}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Significance:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {period.significance.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dioceses">
            <Card>
              <CardHeader>
                <CardTitle>Modern Dioceses</CardTitle>
                <CardDescription>
                  Current ecclesiastical organization and presence
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {modernDioceses.map((diocese) => (
                  <div key={diocese.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{diocese.name}</h3>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">Location:</span> {diocese.location}
                        </p>
                        <p className="text-sm mt-1">
                          <span className="font-medium">Established:</span> {diocese.established}
                        </p>
                        <p className="text-sm mt-1">
                          <span className="font-medium">Parishes:</span> {diocese.parishes}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">Bishop:</span> {diocese.bishop}
                        </p>
                        <p className="text-sm mt-1">
                          <span className="font-medium">Population:</span> {diocese.population}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="theology">
            <Card>
              <CardHeader>
                <CardTitle>Theological Traditions</CardTitle>
                <CardDescription>
                  Distinctive theological perspectives and teachings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {theologicalTraditions.map((tradition) => (
                  <div key={tradition.aspect} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{tradition.aspect}</h3>
                    <p className="text-sm mt-2">{tradition.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Key Texts:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {tradition.keyTexts.map((text, index) => (
                          <li key={index}>{text}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Significance:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {tradition.significance.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 