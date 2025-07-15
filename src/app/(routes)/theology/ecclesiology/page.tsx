import React from 'react'
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
  title: "Ecclesiology | Doctrine of the Church",
  description: "Comprehensive exploration of Christian ecclesiology, including church nature, ministry, sacraments, and mission.",
  keywords: [
    "Ecclesiology",
    "Church doctrine",
    "Church ministry",
    "Church government",
    "Sacraments",
    "Church mission",
    "Church unity"
  ]
}

interface ChurchModel {
  name: string
  description: string
  biblicalBasis: string[]
  characteristics: string[]
  examples: string[]
  challenges: string[]
}

interface Ministry {
  type: string
  description: string
  biblicalBasis: string[]
  functions: string[]
  qualifications: string[]
  contemporary: string[]
}

interface Sacrament {
  name: string
  definition: string
  biblicalBasis: string[]
  theology: string[]
  practice: string[]
  variations: Array<{
    tradition: string
    approach: string
  }>
}

interface Polity {
  system: string
  description: string
  principles: string[]
  structures: string[]
  advantages: string[]
  challenges: string[]
}

const churchModels: ChurchModel[] = [
  {
    name: "Body of Christ",
    description: "The church as organic community united to Christ and each other",
    biblicalBasis: [
      "1 Corinthians 12:12-27",
      "Ephesians 1:22-23",
      "Colossians 1:18",
      "Romans 12:4-5"
    ],
    characteristics: [
      "Unity in diversity",
      "Mutual dependence",
      "Christ as head",
      "Spiritual gifts"
    ],
    examples: [
      "Local congregations",
      "Denominational cooperation",
      "Ecumenical movements",
      "Para-church ministries"
    ],
    challenges: [
      "Maintaining unity",
      "Recognizing diversity",
      "Coordinating functions",
      "Resolving conflicts"
    ]
  },
  {
    name: "People of God",
    description: "The church as covenant community called by God",
    biblicalBasis: [
      "1 Peter 2:9-10",
      "Exodus 19:5-6",
      "Titus 2:14",
      "Revelation 21:3"
    ],
    characteristics: [
      "Divine election",
      "Covenant relationship",
      "Holy calling",
      "Witness to world"
    ],
    examples: [
      "Worship communities",
      "Mission organizations",
      "Faith communities",
      "Social witness"
    ],
    challenges: [
      "Cultural engagement",
      "Identity maintenance",
      "Mission fulfillment",
      "Generational transmission"
    ]
  }
]

const ministryTypes: Ministry[] = [
  {
    type: "Pastoral Ministry",
    description: "Leadership and care of local congregation",
    biblicalBasis: [
      "Ephesians 4:11-13",
      "1 Peter 5:1-4",
      "1 Timothy 3:1-7",
      "Titus 1:5-9"
    ],
    functions: [
      "Preaching/Teaching",
      "Pastoral care",
      "Administration",
      "Leadership development"
    ],
    qualifications: [
      "Character qualities",
      "Teaching ability",
      "Leadership skills",
      "Spiritual maturity"
    ],
    contemporary: [
      "Professional clergy",
      "Bi-vocational ministry",
      "Team leadership",
      "Specialized roles"
    ]
  },
  {
    type: "Diaconal Ministry",
    description: "Service ministry focusing on practical needs",
    biblicalBasis: [
      "Acts 6:1-7",
      "1 Timothy 3:8-13",
      "Romans 16:1",
      "Philippians 1:1"
    ],
    functions: [
      "Practical service",
      "Community care",
      "Resource management",
      "Ministry support"
    ],
    qualifications: [
      "Spiritual character",
      "Practical wisdom",
      "Service orientation",
      "Administrative ability"
    ],
    contemporary: [
      "Social ministry",
      "Community outreach",
      "Administrative service",
      "Care ministries"
    ]
  }
]

const sacraments: Sacrament[] = [
  {
    name: "Baptism",
    definition: "Sacrament of initiation into Christ and church",
    biblicalBasis: [
      "Matthew 28:19-20",
      "Acts 2:38",
      "Romans 6:3-4",
      "Galatians 3:27"
    ],
    theology: [
      "Union with Christ",
      "Forgiveness of sins",
      "Church membership",
      "New life in Spirit"
    ],
    practice: [
      "Water baptism",
      "Trinitarian formula",
      "Public witness",
      "Community celebration"
    ],
    variations: [
      {
        tradition: "Baptist",
        approach: "Believer's baptism by immersion"
      },
      {
        tradition: "Presbyterian",
        approach: "Covenant baptism including infants"
      },
      {
        tradition: "Orthodox",
        approach: "Triple immersion with chrismation"
      }
    ]
  },
  {
    name: "Eucharist",
    definition: "Sacrament of communion with Christ and church",
    biblicalBasis: [
      "Matthew 26:26-29",
      "1 Corinthians 11:23-26",
      "John 6:53-58",
      "Acts 2:42"
    ],
    theology: [
      "Real presence",
      "Memorial",
      "Sacrifice",
      "Communion"
    ],
    practice: [
      "Bread and wine",
      "Words of institution",
      "Communal sharing",
      "Regular celebration"
    ],
    variations: [
      {
        tradition: "Catholic",
        approach: "Transubstantiation"
      },
      {
        tradition: "Lutheran",
        approach: "Consubstantiation"
      },
      {
        tradition: "Reformed",
        approach: "Spiritual presence"
      }
    ]
  }
]

const churchPolities: Polity[] = [
  {
    system: "Episcopal",
    description: "Hierarchical governance through bishops",
    principles: [
      "Apostolic succession",
      "Hierarchical authority",
      "Sacramental ministry",
      "Unity through oversight"
    ],
    structures: [
      "Bishops",
      "Dioceses",
      "Parishes",
      "Clergy orders"
    ],
    advantages: [
      "Clear authority",
      "Historical continuity",
      "Unified structure",
      "Pastoral oversight"
    ],
    challenges: [
      "Power concentration",
      "Bureaucracy",
      "Local autonomy",
      "Reform difficulty"
    ]
  },
  {
    system: "Presbyterian",
    description: "Representative governance through elders",
    principles: [
      "Elder leadership",
      "Representative assemblies",
      "Shared authority",
      "Constitutional order"
    ],
    structures: [
      "Sessions",
      "Presbyteries",
      "Synods",
      "General Assembly"
    ],
    advantages: [
      "Balanced authority",
      "Representative input",
      "Ordered process",
      "Shared wisdom"
    ],
    challenges: [
      "Complex processes",
      "Time-consuming",
      "Leadership development",
      "Unity maintenance"
    ]
  }
]

export default function EcclesiologyPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-center mb-8">Ecclesiology</h1>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="models">Models</TabsTrigger>
            <TabsTrigger value="ministry">Ministry</TabsTrigger>
            <TabsTrigger value="sacraments">Sacraments</TabsTrigger>
            <TabsTrigger value="polity">Polity</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Ecclesiology Overview</CardTitle>
                <CardDescription>
                  The theological study of the church's nature and mission
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Ecclesiology examines the nature, purpose, and structure of the
                  Christian church, including its worship, ministry, and mission.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium mb-2">Biblical Foundations</h3>
                    <p className="text-sm">
                      Rooted in New Testament teachings about the church as
                      Christ's body and God's people.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium mb-2">Contemporary Relevance</h3>
                    <p className="text-sm">
                      Addresses questions of church identity, unity, and mission
                      in today's world.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="models">
            <Card>
              <CardHeader>
                <CardTitle>Church Models</CardTitle>
                <CardDescription>
                  Biblical and theological models of the church
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {churchModels.map((model) => (
                  <div key={model.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{model.name}</h3>
                    <p className="text-sm mt-2">{model.description}</p>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Biblical Basis:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {model.biblicalBasis.map((verse, index) => (
                            <li key={index}>{verse}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Characteristics:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {model.characteristics.map((char, index) => (
                            <li key={index}>{char}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Challenges:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {model.challenges.map((challenge, index) => (
                          <li key={index}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ministry">
            <Card>
              <CardHeader>
                <CardTitle>Church Ministry</CardTitle>
                <CardDescription>
                  Forms and functions of church ministry
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {ministryTypes.map((ministry) => (
                  <div key={ministry.type} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{ministry.type}</h3>
                    <p className="text-sm mt-2">{ministry.description}</p>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Functions:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {ministry.functions.map((function_, index) => (
                            <li key={index}>{function_}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Qualifications:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {ministry.qualifications.map((qual, index) => (
                            <li key={index}>{qual}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Contemporary Expression:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {ministry.contemporary.map((expr, index) => (
                          <li key={index}>{expr}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sacraments">
            <Card>
              <CardHeader>
                <CardTitle>Sacraments</CardTitle>
                <CardDescription>
                  Sacramental life and practice
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {sacraments.map((sacrament) => (
                  <div key={sacrament.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{sacrament.name}</h3>
                    <p className="text-sm mt-2">{sacrament.definition}</p>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Theology:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {sacrament.theology.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Practice:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {sacrament.practice.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Variations:</h4>
                      {sacrament.variations.map((variation, index) => (
                        <div key={index} className="mt-2">
                          <span className="font-medium">{variation.tradition}:</span>{" "}
                          <span className="text-sm">{variation.approach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="polity">
            <Card>
              <CardHeader>
                <CardTitle>Church Polity</CardTitle>
                <CardDescription>
                  Systems of church government and organization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {churchPolities.map((polity) => (
                  <div key={polity.system} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{polity.system}</h3>
                    <p className="text-sm mt-2">{polity.description}</p>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Principles:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {polity.principles.map((principle, index) => (
                            <li key={index}>{principle}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Structures:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {polity.structures.map((structure, index) => (
                            <li key={index}>{structure}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Advantages:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {polity.advantages.map((advantage, index) => (
                            <li key={index}>{advantage}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Challenges:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {polity.challenges.map((challenge, index) => (
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
        </Tabs>
      </div>
    </div>
  )
} 