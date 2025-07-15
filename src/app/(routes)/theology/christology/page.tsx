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
  title: "Christology | Christian Theological Studies",
  description: "Comprehensive exploration of Christology, including historical developments, key doctrines, and contemporary perspectives.",
  keywords: [
    "Christology",
    "Person of Christ",
    "Incarnation",
    "Hypostatic Union",
    "Chalcedonian Definition",
    "Christological controversies",
    "Contemporary Christology"
  ]
}

interface Doctrine {
  name: string
  definition: string
  biblicalBasis: string[]
  historicalDevelopment: string[]
  significance: string[]
  controversies: string[]
}

interface Council {
  name: string
  date: string
  location: string
  significance: string
  declarations: string[]
  impact: string[]
}

interface Perspective {
  tradition: string
  mainEmphasis: string
  keyThinkers: string[]
  distinctives: string[]
  contributions: string[]
}

interface Contemporary {
  approach: string
  description: string
  proponents: string[]
  themes: string[]
  implications: string[]
}

const christologicalDoctrines: Doctrine[] = [
  {
    name: "Incarnation",
    definition: "The doctrine that the eternal Son of God took on human nature in Jesus Christ",
    biblicalBasis: [
      "John 1:1-14",
      "Philippians 2:5-11",
      "Colossians 1:15-20",
      "Hebrews 1:1-4"
    ],
    historicalDevelopment: [
      "Apostolic teaching on Jesus as both divine and human",
      "Nicene formulation of Christ's full deity",
      "Chalcedonian definition of two natures",
      "Medieval developments in understanding the union"
    ],
    significance: [
      "Bridges divine and human realms",
      "Enables genuine salvation",
      "Models perfect humanity",
      "Demonstrates God's love"
    ],
    controversies: [
      "Arianism debate over Christ's deity",
      "Apollinarian controversy over Christ's humanity",
      "Nestorian controversy over unity of person",
      "Monophysite debate over nature(s)"
    ]
  },
  {
    name: "Hypostatic Union",
    definition: "The union of divine and human natures in the one person of Christ",
    biblicalBasis: [
      "John 1:14",
      "Romans 1:3-4",
      "1 Timothy 3:16",
      "Hebrews 2:14-18"
    ],
    historicalDevelopment: [
      "Early church debates over Christ's identity",
      "Chalcedonian Formula (451 CE)",
      "Medieval scholastic refinements",
      "Modern reinterpretations"
    ],
    significance: [
      "Preserves both full deity and humanity",
      "Maintains unity of Christ's person",
      "Enables genuine mediation",
      "Grounds salvation"
    ],
    controversies: [
      "Nature of the union",
      "Communication of properties",
      "Kenotic theories",
      "Modern challenges"
    ]
  }
]

const ecumenicalCouncils: Council[] = [
  {
    name: "Council of Nicaea",
    date: "325 CE",
    location: "Nicaea, Bithynia",
    significance: "Established Christ's full deity against Arianism",
    declarations: [
      "Christ is homoousios with the Father",
      "Christ is 'true God from true God'",
      "Christ is 'begotten, not made'",
      "Rejection of Arian subordinationism"
    ],
    impact: [
      "Nicene Creed formulation",
      "Orthodox Christology establishment",
      "Trinitarian doctrine development",
      "Church unity foundation"
    ]
  },
  {
    name: "Council of Chalcedon",
    date: "451 CE",
    location: "Chalcedon",
    significance: "Defined orthodox doctrine of Christ's two natures",
    declarations: [
      "One person in two natures",
      "Natures united without confusion",
      "Each nature retains properties",
      "Unity of person maintained"
    ],
    impact: [
      "Classical Christology defined",
      "Framework for future discussion",
      "Church divisions emerged",
      "Theological precision established"
    ]
  }
]

const traditionalPerspectives: Perspective[] = [
  {
    tradition: "Eastern Orthodox",
    mainEmphasis: "Deification through Christ's divine-human union",
    keyThinkers: [
      "Athanasius of Alexandria",
      "Maximus the Confessor",
      "John of Damascus",
      "Gregory Palamas"
    ],
    distinctives: [
      "Emphasis on theosis",
      "Cosmic dimension of salvation",
      "Role of icons",
      "Liturgical expression"
    ],
    contributions: [
      "Rich mystical theology",
      "Preservation of patristic thought",
      "Holistic soteriology",
      "Incarnational focus"
    ]
  },
  {
    tradition: "Western Catholic",
    mainEmphasis: "Sacrificial and mediatorial roles of Christ",
    keyThinkers: [
      "Augustine of Hippo",
      "Thomas Aquinas",
      "Karl Rahner",
      "Hans Urs von Balthasar"
    ],
    distinctives: [
      "Emphasis on atonement",
      "Sacramental presence",
      "Ecclesial mediation",
      "Systematic development"
    ],
    contributions: [
      "Scholastic precision",
      "Sacramental theology",
      "Modern developments",
      "Ecumenical dialogue"
    ]
  }
]

const contemporaryApproaches: Contemporary[] = [
  {
    approach: "Liberation Christology",
    description: "Christ understood as liberator of the oppressed",
    proponents: [
      "Gustavo Gutiérrez",
      "Jon Sobrino",
      "James Cone",
      "Elizabeth Johnson"
    ],
    themes: [
      "Preferential option for the poor",
      "Christ's solidarity with sufferers",
      "Social transformation",
      "Contextual interpretation"
    ],
    implications: [
      "Social justice emphasis",
      "Political engagement",
      "Praxis orientation",
      "Contextual theology"
    ]
  },
  {
    approach: "Feminist Christology",
    description: "Christological reflection from feminist perspective",
    proponents: [
      "Rosemary Radford Ruether",
      "Elizabeth Schüssler Fiorenza",
      "Catherine Mowry LaCugna",
      "Sarah Coakley"
    ],
    themes: [
      "Gender and incarnation",
      "Inclusive salvation",
      "Divine sophia",
      "Relational emphasis"
    ],
    implications: [
      "Gender-inclusive language",
      "Ecclesial reform",
      "Theological reconstruction",
      "Ethical reorientation"
    ]
  }
]

export default function ChristologyPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-center mb-8">Christology</h1>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="doctrines">Doctrines</TabsTrigger>
            <TabsTrigger value="councils">Councils</TabsTrigger>
            <TabsTrigger value="traditions">Traditions</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Christology Overview</CardTitle>
                <CardDescription>
                  The theological study of the person and work of Jesus Christ
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Christology examines the nature, person, and work of Jesus Christ,
                  including questions of his divinity, humanity, and salvation work.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium mb-2">Historical Development</h3>
                    <p className="text-sm">
                      From early church debates through medieval refinements to
                      modern reinterpretations.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium mb-2">Contemporary Significance</h3>
                    <p className="text-sm">
                      Continues to shape theological reflection, spiritual practice,
                      and ethical engagement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="doctrines">
            <Card>
              <CardHeader>
                <CardTitle>Christological Doctrines</CardTitle>
                <CardDescription>
                  Core teachings about the person and work of Christ
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {christologicalDoctrines.map((doctrine) => (
                  <div key={doctrine.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{doctrine.name}</h3>
                    <p className="text-sm mt-2">{doctrine.definition}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Biblical Basis:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {doctrine.biblicalBasis.map((verse, index) => (
                          <li key={index}>{verse}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Historical Development:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {doctrine.historicalDevelopment.map((stage, index) => (
                          <li key={index}>{stage}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Controversies:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {doctrine.controversies.map((controversy, index) => (
                          <li key={index}>{controversy}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="councils">
            <Card>
              <CardHeader>
                <CardTitle>Ecumenical Councils</CardTitle>
                <CardDescription>
                  Major church councils addressing Christological issues
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {ecumenicalCouncils.map((council) => (
                  <div key={council.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{council.name}</h3>
                    <p className="text-sm mt-2">
                      <span className="font-medium">Date:</span> {council.date}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Location:</span> {council.location}
                    </p>
                    <p className="text-sm mt-2">{council.significance}</p>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Declarations:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {council.declarations.map((declaration, index) => (
                            <li key={index}>{declaration}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Impact:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {council.impact.map((item, index) => (
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

          <TabsContent value="traditions">
            <Card>
              <CardHeader>
                <CardTitle>Traditional Perspectives</CardTitle>
                <CardDescription>
                  Major Christian traditions' Christological emphases
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {traditionalPerspectives.map((perspective) => (
                  <div key={perspective.tradition} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{perspective.tradition}</h3>
                    <p className="text-sm mt-2">{perspective.mainEmphasis}</p>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Key Thinkers:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {perspective.keyThinkers.map((thinker, index) => (
                            <li key={index}>{thinker}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Distinctives:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {perspective.distinctives.map((distinctive, index) => (
                            <li key={index}>{distinctive}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contemporary">
            <Card>
              <CardHeader>
                <CardTitle>Contemporary Approaches</CardTitle>
                <CardDescription>
                  Modern interpretations and developments
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contemporaryApproaches.map((approach) => (
                  <div key={approach.approach} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{approach.approach}</h3>
                    <p className="text-sm mt-2">{approach.description}</p>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Proponents:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {approach.proponents.map((proponent, index) => (
                            <li key={index}>{proponent}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Themes:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {approach.themes.map((theme, index) => (
                            <li key={index}>{theme}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Implications:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {approach.implications.map((implication, index) => (
                          <li key={index}>{implication}</li>
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