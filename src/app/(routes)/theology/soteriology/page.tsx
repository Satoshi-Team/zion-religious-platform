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
  title: "Soteriology | Christian Doctrine of Salvation",
  description: "Comprehensive exploration of Christian soteriology, including theories of atonement, grace, justification, and sanctification.",
  keywords: [
    "Soteriology",
    "Christian salvation",
    "Atonement",
    "Justification",
    "Sanctification",
    "Grace",
    "Redemption"
  ]
}

interface Doctrine {
  name: string
  definition: string
  biblicalBasis: string[]
  theologicalImplications: string[]
  traditions: Array<{
    name: string
    emphasis: string
  }>
}

interface AtonementTheory {
  name: string
  description: string
  mainProponents: string[]
  keyScriptures: string[]
  strengths: string[]
  challenges: string[]
}

interface SalvationConcept {
  aspect: string
  definition: string
  significance: string[]
  biblicalSupport: string[]
  practicalImplications: string[]
}

interface Perspective {
  tradition: string
  mainEmphasis: string
  keyThinkers: string[]
  distinctives: string[]
  modernExpression: string[]
}

const soteriologicalDoctrines: Doctrine[] = [
  {
    name: "Justification",
    definition: "The act by which God declares sinners righteous through faith in Christ",
    biblicalBasis: [
      "Romans 3:21-26",
      "Galatians 2:16",
      "Ephesians 2:8-9",
      "Philippians 3:9"
    ],
    theologicalImplications: [
      "Forensic declaration of righteousness",
      "Basis for peace with God",
      "Foundation for sanctification",
      "Assurance of salvation"
    ],
    traditions: [
      {
        name: "Protestant",
        emphasis: "Sola fide - justification by faith alone"
      },
      {
        name: "Catholic",
        emphasis: "Faith working through love"
      },
      {
        name: "Orthodox",
        emphasis: "Theosis and participation in divine life"
      }
    ]
  },
  {
    name: "Sanctification",
    definition: "The ongoing process of being made holy and conformed to Christ's image",
    biblicalBasis: [
      "1 Thessalonians 4:3-7",
      "Romans 6:22",
      "2 Corinthians 3:18",
      "Philippians 2:12-13"
    ],
    theologicalImplications: [
      "Progressive growth in holiness",
      "Cooperation with divine grace",
      "Transformation of character",
      "Ethical development"
    ],
    traditions: [
      {
        name: "Wesleyan",
        emphasis: "Entire sanctification possible"
      },
      {
        name: "Reformed",
        emphasis: "Progressive sanctification"
      },
      {
        name: "Eastern",
        emphasis: "Deification process"
      }
    ]
  }
]

const atonementTheories: AtonementTheory[] = [
  {
    name: "Substitutionary Atonement",
    description: "Christ died as a substitute for sinners, bearing God's punishment for sin",
    mainProponents: [
      "Anselm of Canterbury",
      "John Calvin",
      "Charles Hodge",
      "J.I. Packer"
    ],
    keyScriptures: [
      "Isaiah 53:5-6",
      "2 Corinthians 5:21",
      "1 Peter 2:24",
      "Romans 3:25"
    ],
    strengths: [
      "Strong biblical support",
      "Addresses God's justice",
      "Personal application",
      "Historical acceptance"
    ],
    challenges: [
      "Questions of divine violence",
      "Relationship to divine love",
      "Modern ethical concerns",
      "Limited metaphorical scope"
    ]
  },
  {
    name: "Christus Victor",
    description: "Christ's death and resurrection defeat the powers of evil and death",
    mainProponents: [
      "Gustaf Aulén",
      "Gregory of Nyssa",
      "Walter Wink",
      "N.T. Wright"
    ],
    keyScriptures: [
      "Colossians 2:15",
      "Hebrews 2:14-15",
      "1 John 3:8",
      "Revelation 12:10-11"
    ],
    strengths: [
      "Cosmic scope",
      "Early church emphasis",
      "Liberation theme",
      "Contemporary relevance"
    ],
    challenges: [
      "Mechanism of victory",
      "Individual application",
      "Modern worldview issues",
      "Relationship to justice"
    ]
  }
]

const salvationConcepts: SalvationConcept[] = [
  {
    aspect: "Election",
    definition: "God's sovereign choice in salvation",
    significance: [
      "Divine initiative in salvation",
      "Purpose in redemption",
      "Security of believers",
      "Mystery of divine will"
    ],
    biblicalSupport: [
      "Ephesians 1:4-5",
      "Romans 8:29-30",
      "John 15:16",
      "2 Thessalonians 2:13"
    ],
    practicalImplications: [
      "Humility in salvation",
      "Assurance of faith",
      "Motivation for evangelism",
      "Trust in God's sovereignty"
    ]
  },
  {
    aspect: "Perseverance",
    definition: "Continuing in faith and holiness to final salvation",
    significance: [
      "Assurance of salvation",
      "Need for faithfulness",
      "Divine preservation",
      "Human responsibility"
    ],
    biblicalSupport: [
      "Philippians 1:6",
      "John 10:27-29",
      "Hebrews 3:14",
      "1 Peter 1:5"
    ],
    practicalImplications: [
      "Encouragement in trials",
      "Motivation for holiness",
      "Balance of trust and effort",
      "Pastoral care focus"
    ]
  }
]

const traditionalPerspectives: Perspective[] = [
  {
    tradition: "Reformed",
    mainEmphasis: "Divine sovereignty in salvation",
    keyThinkers: [
      "John Calvin",
      "Jonathan Edwards",
      "Charles Hodge",
      "Karl Barth"
    ],
    distinctives: [
      "Unconditional election",
      "Limited atonement",
      "Irresistible grace",
      "Perseverance of saints"
    ],
    modernExpression: [
      "Neo-Calvinist movements",
      "Presbyterian churches",
      "Reformed Baptist groups",
      "Contemporary Reformed theology"
    ]
  },
  {
    tradition: "Wesleyan-Arminian",
    mainEmphasis: "Human response and possibility of entire sanctification",
    keyThinkers: [
      "John Wesley",
      "Jacob Arminius",
      "H. Orton Wiley",
      "Thomas C. Oden"
    ],
    distinctives: [
      "Prevenient grace",
      "Conditional election",
      "Universal atonement",
      "Entire sanctification"
    ],
    modernExpression: [
      "Methodist churches",
      "Holiness movement",
      "Pentecostal theology",
      "Contemporary Wesleyan thought"
    ]
  }
]

export default function SoteriologyPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-center mb-8">Soteriology</h1>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="doctrines">Doctrines</TabsTrigger>
            <TabsTrigger value="atonement">Atonement</TabsTrigger>
            <TabsTrigger value="concepts">Concepts</TabsTrigger>
            <TabsTrigger value="traditions">Traditions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Soteriology Overview</CardTitle>
                <CardDescription>
                  The theological study of salvation in Christian thought
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Soteriology examines how salvation is accomplished and applied,
                  including theories of atonement, the role of grace, and the process
                  of sanctification.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium mb-2">Historical Development</h3>
                    <p className="text-sm">
                      From early church debates through medieval syntheses to
                      Reformation controversies and modern perspectives.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium mb-2">Contemporary Significance</h3>
                    <p className="text-sm">
                      Continues to shape understanding of Christian life, mission,
                      and hope.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="doctrines">
            <Card>
              <CardHeader>
                <CardTitle>Soteriological Doctrines</CardTitle>
                <CardDescription>
                  Core teachings about salvation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {soteriologicalDoctrines.map((doctrine) => (
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
                      <h4 className="text-sm font-medium">Theological Implications:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {doctrine.theologicalImplications.map((implication, index) => (
                          <li key={index}>{implication}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Traditional Perspectives:</h4>
                      {doctrine.traditions.map((tradition, index) => (
                        <div key={index} className="mt-2">
                          <span className="font-medium">{tradition.name}:</span>{" "}
                          <span className="text-sm">{tradition.emphasis}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="atonement">
            <Card>
              <CardHeader>
                <CardTitle>Atonement Theories</CardTitle>
                <CardDescription>
                  Different understandings of Christ's saving work
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {atonementTheories.map((theory) => (
                  <div key={theory.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{theory.name}</h3>
                    <p className="text-sm mt-2">{theory.description}</p>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Main Proponents:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {theory.mainProponents.map((proponent, index) => (
                            <li key={index}>{proponent}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Key Scriptures:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {theory.keyScriptures.map((scripture, index) => (
                            <li key={index}>{scripture}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Strengths:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {theory.strengths.map((strength, index) => (
                            <li key={index}>{strength}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Challenges:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {theory.challenges.map((challenge, index) => (
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

          <TabsContent value="concepts">
            <Card>
              <CardHeader>
                <CardTitle>Salvation Concepts</CardTitle>
                <CardDescription>
                  Key aspects of salvation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {salvationConcepts.map((concept) => (
                  <div key={concept.aspect} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{concept.aspect}</h3>
                    <p className="text-sm mt-2">{concept.definition}</p>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Significance:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {concept.significance.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Biblical Support:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {concept.biblicalSupport.map((verse, index) => (
                            <li key={index}>{verse}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Practical Implications:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {concept.practicalImplications.map((implication, index) => (
                          <li key={index}>{implication}</li>
                        ))}
                      </ul>
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
                  Major theological traditions' views on salvation
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
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Modern Expression:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {perspective.modernExpression.map((expression, index) => (
                          <li key={index}>{expression}</li>
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