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
  title: "Mennonite Christianity | Faith, Practice, and Community",
  description: "Comprehensive guide to Mennonite Christianity, including history, beliefs, practices, and contemporary expressions.",
  keywords: [
    "Mennonite",
    "Anabaptist",
    "Peace church",
    "Nonviolence",
    "Simple living",
    "Community of faith",
    "Discipleship",
    "Service"
  ]
}

interface CoreBelief {
  name: string
  description: string
  biblicalBasis: string[]
  practices: string[]
  implications: string[]
}

interface Practice {
  name: string
  description: string
  significance: string
  implementation: string[]
  scriptural: string[]
}

interface Community {
  name: string
  location: string
  established: string
  description: string
  distinctives: string[]
  ministries: string[]
  website?: string
}

interface ServiceProgram {
  name: string
  focus: string
  description: string
  locations: string[]
  impact: string[]
  partners: string[]
}

const coreBeliefs: CoreBelief[] = [
  {
    name: "Discipleship",
    description: "Following Jesus in daily life through practical obedience and faithful witness.",
    biblicalBasis: [
      "Matthew 16:24",
      "John 13:15",
      "1 Peter 2:21"
    ],
    practices: [
      "Daily prayer and Bible study",
      "Mutual accountability",
      "Simple lifestyle",
      "Service to others"
    ],
    implications: [
      "Active faith expression",
      "Community responsibility",
      "Ethical living",
      "Witness through action"
    ]
  },
  {
    name: "Peace and Nonviolence",
    description: "Commitment to Christ's way of peace, rejecting violence and pursuing reconciliation.",
    biblicalBasis: [
      "Matthew 5:38-48",
      "Romans 12:18-21",
      "2 Corinthians 5:18-20"
    ],
    practices: [
      "Conflict resolution",
      "Peace witness",
      "Alternative service",
      "Reconciliation work"
    ],
    implications: [
      "Conscientious objection",
      "Peace education",
      "International service",
      "Conflict transformation"
    ]
  },
  {
    name: "Community",
    description: "Living faith in committed relationships within the body of Christ.",
    biblicalBasis: [
      "Acts 2:42-47",
      "1 Corinthians 12:12-27",
      "Ephesians 4:1-6"
    ],
    practices: [
      "Mutual aid",
      "Shared decision-making",
      "Corporate worship",
      "Community discernment"
    ],
    implications: [
      "Mutual support",
      "Shared resources",
      "Collective wisdom",
      "Accountability"
    ]
  }
]

const communityPractices: Practice[] = [
  {
    name: "Believers Baptism",
    description: "Voluntary baptism upon confession of faith as a sign of commitment to Christ and the church.",
    significance: "Marks conscious decision to follow Christ and join the faith community",
    implementation: [
      "Instruction period",
      "Public confession",
      "Water baptism",
      "Church membership"
    ],
    scriptural: [
      "Matthew 28:19-20",
      "Acts 2:38",
      "Romans 6:3-4"
    ]
  },
  {
    name: "Lord's Supper",
    description: "Shared meal remembering Christ's sacrifice and celebrating community unity.",
    significance: "Expresses unity, remembrance, and commitment",
    implementation: [
      "Foot washing",
      "Peace making",
      "Communion elements",
      "Community meal"
    ],
    scriptural: [
      "1 Corinthians 11:23-26",
      "John 13:1-17",
      "Matthew 26:26-29"
    ]
  }
]

const communities: Community[] = [
  {
    name: "Lancaster Mennonite Conference",
    location: "Pennsylvania, USA",
    established: "1711",
    description: "Historic Mennonite community known for traditional values and progressive engagement.",
    distinctives: [
      "Plain dress tradition",
      "Agricultural heritage",
      "Educational emphasis",
      "Mission focus"
    ],
    ministries: [
      "Schools and education",
      "Mutual aid programs",
      "Mission work",
      "Peace witness"
    ],
    website: "https://lmcchurches.org"
  },
  {
    name: "Mennonite Church Canada",
    location: "Canada",
    established: "1903",
    description: "National church body fostering Anabaptist faith and witness in Canadian context.",
    distinctives: [
      "Indigenous partnerships",
      "Urban ministry",
      "Peace and justice work",
      "Environmental stewardship"
    ],
    ministries: [
      "Church planting",
      "Peace initiatives",
      "Creation care",
      "International partnerships"
    ],
    website: "https://www.mennonitechurch.ca"
  }
]

const servicePrograms: ServiceProgram[] = [
  {
    name: "Mennonite Central Committee",
    focus: "Relief, development, and peace",
    description: "Global ministry providing disaster relief, sustainable community development, and peace-building.",
    locations: [
      "North America",
      "Latin America",
      "Africa",
      "Asia",
      "Middle East"
    ],
    impact: [
      "Disaster response",
      "Food security",
      "Education support",
      "Peace building",
      "Water projects"
    ],
    partners: [
      "Local churches",
      "Community organizations",
      "Government agencies",
      "International NGOs"
    ]
  },
  {
    name: "Mennonite Disaster Service",
    focus: "Disaster response and rebuilding",
    description: "Volunteer network responding to disasters in Canada and the United States.",
    locations: [
      "United States",
      "Canada"
    ],
    impact: [
      "Home rebuilding",
      "Community restoration",
      "Volunteer mobilization",
      "Long-term recovery"
    ],
    partners: [
      "Local churches",
      "FEMA",
      "Red Cross",
      "Community organizations"
    ]
  }
]

export default function MennonitePage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-center mb-8">Mennonite Christianity</h1>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="beliefs">Beliefs</TabsTrigger>
            <TabsTrigger value="practices">Practices</TabsTrigger>
            <TabsTrigger value="communities">Communities</TabsTrigger>
            <TabsTrigger value="service">Service</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Mennonite Overview</CardTitle>
                <CardDescription>
                  An Anabaptist Christian denomination emphasizing discipleship, peace, and community
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Mennonites are part of the historic peace church tradition, emphasizing faithful
                  discipleship, nonviolence, and community in the way of Jesus Christ.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium mb-2">Historical Roots</h3>
                    <p className="text-sm">
                      Emerged from the Radical Reformation of the 16th century, emphasizing voluntary
                      faith, discipleship, and separation of church and state.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium mb-2">Contemporary Expression</h3>
                    <p className="text-sm">
                      Global community known for peace witness, service, and commitment to
                      following Jesus in daily life.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="beliefs">
            <Card>
              <CardHeader>
                <CardTitle>Core Beliefs</CardTitle>
                <CardDescription>
                  Foundational beliefs and their practical implications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {coreBeliefs.map((belief) => (
                  <div key={belief.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{belief.name}</h3>
                    <p className="text-sm mt-2">{belief.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Biblical Basis:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {belief.biblicalBasis.map((verse, index) => (
                          <li key={index}>{verse}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Practices:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {belief.practices.map((practice, index) => (
                          <li key={index}>{practice}</li>
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
                <CardTitle>Community Practices</CardTitle>
                <CardDescription>
                  Distinctive practices and their significance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {communityPractices.map((practice) => (
                  <div key={practice.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{practice.name}</h3>
                    <p className="text-sm mt-2">{practice.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Implementation:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {practice.implementation.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Scriptural Basis:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {practice.scriptural.map((verse, index) => (
                          <li key={index}>{verse}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="communities">
            <Card>
              <CardHeader>
                <CardTitle>Mennonite Communities</CardTitle>
                <CardDescription>
                  Contemporary expressions of Mennonite faith and life
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {communities.map((community) => (
                  <div key={community.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{community.name}</h3>
                    <p className="text-sm mt-2">{community.description}</p>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Distinctives:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {community.distinctives.map((distinctive, index) => (
                            <li key={index}>{distinctive}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Ministries:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {community.ministries.map((ministry, index) => (
                            <li key={index}>{ministry}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {community.website && (
                      <div className="mt-4">
                        <a
                          href={community.website}
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

          <TabsContent value="service">
            <Card>
              <CardHeader>
                <CardTitle>Service Programs</CardTitle>
                <CardDescription>
                  Global ministry and service initiatives
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {servicePrograms.map((program) => (
                  <div key={program.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{program.name}</h3>
                    <p className="text-sm mt-2">{program.description}</p>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Locations:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {program.locations.map((location, index) => (
                            <li key={index}>{location}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Impact Areas:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {program.impact.map((area, index) => (
                            <li key={index}>{area}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Partners:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {program.partners.map((partner, index) => (
                          <li key={index}>{partner}</li>
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