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
  title: "Christian Church (Disciples of Christ) | Faith and Practice",
  description: "Comprehensive guide to the Christian Church (Disciples of Christ), including beliefs, practices, and contemporary expressions.",
  keywords: [
    "Disciples of Christ",
    "Christian Church",
    "Stone-Campbell Movement",
    "Christian unity",
    "Open communion",
    "Ecumenical movement"
  ]
}

interface Identity {
  aspect: string
  description: string
  significance: string[]
  expression: string[]
  historicalContext: string
}

interface Practice {
  name: string
  description: string
  biblicalBasis: string[]
  implementation: string[]
  significance: string
}

interface Ministry {
  area: string
  description: string
  programs: string[]
  impact: string[]
  organizations: Array<{
    name: string
    focus: string
    website?: string
  }>
}

interface Institution {
  name: string
  location: string
  established: string
  description: string
  programs: string[]
  distinctives: string[]
  website?: string
}

const denominationalIdentity: Identity[] = [
  {
    aspect: "Christian Unity",
    description: "Commitment to the unity of all Christians as a witness to the world.",
    significance: [
      "Ecumenical partnerships",
      "Inclusive communion",
      "Interfaith dialogue",
      "Cooperative ministry"
    ],
    expression: [
      "Open communion",
      "Recognition of other baptisms",
      "Ecumenical partnerships",
      "Inclusive fellowship"
    ],
    historicalContext: "Founded as a unity movement in the American frontier"
  },
  {
    aspect: "Congregational Autonomy",
    description: "Local churches self-governing while maintaining covenant relationships.",
    significance: [
      "Local decision-making",
      "Diverse expressions",
      "Covenant relationships",
      "Regional support"
    ],
    expression: [
      "Democratic governance",
      "Regional partnerships",
      "General Assembly",
      "Shared mission"
    ],
    historicalContext: "Balance of freedom and accountability in church structure"
  }
]

const corePractices: Practice[] = [
  {
    name: "Open Communion",
    description: "Weekly celebration of the Lord's Supper open to all believers.",
    biblicalBasis: [
      "1 Corinthians 11:23-26",
      "Acts 20:7",
      "Matthew 26:26-29"
    ],
    implementation: [
      "Weekly observance",
      "Open invitation",
      "Lay leadership",
      "Spiritual reflection"
    ],
    significance: "Expression of Christian unity and grace"
  },
  {
    name: "Believer's Baptism",
    description: "Baptism by immersion upon profession of faith.",
    biblicalBasis: [
      "Matthew 28:19-20",
      "Acts 2:38",
      "Romans 6:3-4"
    ],
    implementation: [
      "Personal confession",
      "Immersion practice",
      "Recognition of other forms",
      "Membership inclusion"
    ],
    significance: "Personal commitment and church membership"
  }
]

const ministryAreas: Ministry[] = [
  {
    area: "Global Missions",
    description: "Partnership in global mission and service.",
    programs: [
      "Global Ministries",
      "Week of Compassion",
      "Reconciliation Ministry",
      "Disaster response"
    ],
    impact: [
      "International development",
      "Emergency relief",
      "Church partnerships",
      "Justice advocacy"
    ],
    organizations: [
      {
        name: "Global Ministries",
        focus: "International partnerships",
        website: "https://www.globalministries.org"
      },
      {
        name: "Week of Compassion",
        focus: "Relief and development",
        website: "https://www.weekofcompassion.org"
      }
    ]
  },
  {
    area: "Higher Education",
    description: "Support of theological education and leadership development.",
    programs: [
      "Seminary education",
      "Leadership training",
      "Scholarship programs",
      "Continuing education"
    ],
    impact: [
      "Pastoral formation",
      "Lay leadership",
      "Theological research",
      "Church renewal"
    ],
    organizations: [
      {
        name: "Disciples Seminary Foundation",
        focus: "Theological education",
        website: "https://www.dsf.edu"
      }
    ]
  }
]

const educationalInstitutions: Institution[] = [
  {
    name: "Christian Theological Seminary",
    location: "Indianapolis, Indiana",
    established: "1855",
    description: "Graduate theological education in the Disciples tradition.",
    programs: [
      "Master of Divinity",
      "Master of Arts",
      "Doctor of Ministry",
      "Counseling programs"
    ],
    distinctives: [
      "Ecumenical focus",
      "Practice-based learning",
      "Social justice emphasis",
      "Pastoral formation"
    ],
    website: "https://www.cts.edu"
  },
  {
    name: "Lexington Theological Seminary",
    location: "Lexington, Kentucky",
    established: "1865",
    description: "Online theological education for ministry formation.",
    programs: [
      "Master of Divinity",
      "Master of Pastoral Studies",
      "Certificate programs",
      "Continuing education"
    ],
    distinctives: [
      "Online learning",
      "Contextual education",
      "Bi-vocational focus",
      "Practical ministry"
    ],
    website: "https://www.lextheo.edu"
  }
]

export default function DisciplesOfChristPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-center mb-8">Christian Church (Disciples of Christ)</h1>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="identity">Identity</TabsTrigger>
            <TabsTrigger value="practices">Practices</TabsTrigger>
            <TabsTrigger value="ministry">Ministry</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Disciples of Christ Overview</CardTitle>
                <CardDescription>
                  A mainline Protestant denomination committed to Christian unity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Christian Church (Disciples of Christ) emerged from the Stone-Campbell
                  Movement, emphasizing Christian unity and biblical authority.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium mb-2">Historical Roots</h3>
                    <p className="text-sm">
                      Founded in the American frontier revival movement, seeking
                      Christian unity and restoration of New Testament Christianity.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium mb-2">Contemporary Expression</h3>
                    <p className="text-sm">
                      Modern mainline denomination known for ecumenical engagement
                      and social justice commitment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="identity">
            <Card>
              <CardHeader>
                <CardTitle>Denominational Identity</CardTitle>
                <CardDescription>
                  Core values and distinctive characteristics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {denominationalIdentity.map((identity) => (
                  <div key={identity.aspect} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{identity.aspect}</h3>
                    <p className="text-sm mt-2">{identity.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Significance:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {identity.significance.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Expression:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {identity.expression.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="practices">
            <Card>
              <CardHeader>
                <CardTitle>Core Practices</CardTitle>
                <CardDescription>
                  Essential practices and their implementation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {corePractices.map((practice) => (
                  <div key={practice.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{practice.name}</h3>
                    <p className="text-sm mt-2">{practice.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Biblical Basis:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {practice.biblicalBasis.map((verse, index) => (
                          <li key={index}>{verse}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Implementation:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {practice.implementation.map((item, index) => (
                          <li key={index}>{item}</li>
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
                <CardTitle>Ministry Areas</CardTitle>
                <CardDescription>
                  Global mission and service initiatives
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {ministryAreas.map((ministry) => (
                  <div key={ministry.area} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{ministry.area}</h3>
                    <p className="text-sm mt-2">{ministry.description}</p>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Programs:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {ministry.programs.map((program, index) => (
                            <li key={index}>{program}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Impact:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {ministry.impact.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Organizations:</h4>
                      <div className="grid gap-4 mt-2 md:grid-cols-2">
                        {ministry.organizations.map((org) => (
                          <div key={org.name} className="p-3 bg-background rounded">
                            <h5 className="font-medium text-sm">{org.name}</h5>
                            <p className="text-sm mt-1">{org.focus}</p>
                            {org.website && (
                              <a
                                href={org.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:underline"
                              >
                                Visit Website
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education">
            <Card>
              <CardHeader>
                <CardTitle>Educational Institutions</CardTitle>
                <CardDescription>
                  Theological education and leadership development
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {educationalInstitutions.map((institution) => (
                  <div key={institution.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{institution.name}</h3>
                    <p className="text-sm mt-2">{institution.description}</p>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Programs:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {institution.programs.map((program, index) => (
                            <li key={index}>{program}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Distinctives:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {institution.distinctives.map((distinctive, index) => (
                            <li key={index}>{distinctive}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {institution.website && (
                      <div className="mt-4">
                        <a
                          href={institution.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          Visit Website
                        </a>
                      </div>
                    )}
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