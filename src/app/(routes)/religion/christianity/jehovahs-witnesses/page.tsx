import React from 'react'
import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Jehovah's Witnesses - Religious Studies",
  description: "Comprehensive guide to Jehovah's Witnesses beliefs, practices, and organization",
  keywords: [
    "Jehovah's Witnesses",
    "Watch Tower Society",
    "JW beliefs",
    "Kingdom Hall",
    "Biblical interpretation",
    "Door-to-door ministry",
    "Governing Body",
    "Watchtower"
  ]
}

interface HistoricalPeriod {
  era: string
  years: string
  description: string
  events: string[]
  developments: string[]
}

const historicalPeriods: HistoricalPeriod[] = [
  {
    era: "Early Bible Student Movement",
    years: "1870-1916",
    description: "Formation and early development under Charles Taze Russell's leadership.",
    events: [
      "Publication of Zion's Watch Tower (1879)",
      "Formation of Watch Tower Bible and Tract Society (1881)",
      "Release of Studies in the Scriptures series",
      "International Bible Student conventions"
    ],
    developments: [
      "Development of systematic Bible study methods",
      "Establishment of congregational structure",
      "Beginning of public preaching work",
      "Formation of doctrinal foundations"
    ]
  },
  {
    era: "Organizational Development",
    years: "1917-1942",
    description: "Period of significant organizational changes under J.F. Rutherford.",
    events: [
      "Adoption of name 'Jehovah's Witnesses' (1931)",
      "Introduction of house-to-house preaching",
      "Development of theocratic organization structure",
      "Establishment of pioneer service program"
    ],
    developments: [
      "Refinement of doctrinal understanding",
      "Expansion of publishing operations",
      "Development of field ministry methods",
      "Growth of international presence"
    ]
  },
  {
    era: "Global Expansion",
    years: "1943-1975",
    description: "Period of significant worldwide growth and organizational development.",
    events: [
      "Establishment of Gilead School (1943)",
      "Creation of New World Translation",
      "Development of Kingdom Hall building program",
      "Expansion of branch offices worldwide"
    ],
    developments: [
      "Standardization of congregation meetings",
      "Enhancement of ministerial training",
      "Growth of missionary program",
      "Development of disaster relief work"
    ]
  },
  {
    era: "Modern Era",
    years: "1976-Present",
    description: "Contemporary period of technological adaptation and continued growth.",
    events: [
      "Development of JW Broadcasting",
      "Launch of JW.org website",
      "Implementation of digital publishing",
      "Introduction of virtual meetings"
    ],
    developments: [
      "Modernization of communication methods",
      "Enhancement of educational programs",
      "Expansion of translation work",
      "Development of multimedia resources"
    ]
  }
]

interface CoreBelief {
  topic: string
  description: string
  scripturalBasis: string[]
  application: string[]
}

const coreBeliefs: CoreBelief[] = [
  {
    topic: "Divine Name",
    description: "The importance and use of God's personal name, Jehovah.",
    scripturalBasis: [
      "Psalm 83:18",
      "Exodus 3:15",
      "John 17:6",
      "Romans 10:13"
    ],
    application: [
      "Regular use in worship",
      "Public declaration",
      "Personal prayer",
      "Biblical education"
    ]
  },
  {
    topic: "Kingdom Hope",
    description: "God's Kingdom as the solution to mankind's problems.",
    scripturalBasis: [
      "Matthew 6:9, 10",
      "Daniel 2:44",
      "Revelation 21:3, 4",
      "Psalm 37:29"
    ],
    application: [
      "Kingdom preaching work",
      "Living by Kingdom standards",
      "Supporting Kingdom interests",
      "Maintaining political neutrality"
    ]
  }
]

interface OrganizationalStructure {
  name: string
  description: string
  responsibilities: string[]
  qualifications: string[]
}

const organizationalStructure: OrganizationalStructure[] = [
  {
    name: "Governing Body",
    description: "The central administrative council providing spiritual oversight.",
    responsibilities: [
      "Doctrinal oversight",
      "Organizational direction",
      "Publication approval",
      "Worldwide coordination"
    ],
    qualifications: [
      "Anointed Christian men",
      "Mature spiritual experience",
      "Demonstrated faithfulness",
      "Teaching ability"
    ]
  },
  {
    name: "Branch Committees",
    description: "Regional administrative bodies overseeing national territories.",
    responsibilities: [
      "Local oversight",
      "Literature distribution",
      "Property management",
      "Convention organization"
    ],
    qualifications: [
      "Appointed elders",
      "Administrative experience",
      "Organizational skills",
      "Exemplary conduct"
    ]
  }
]

interface MinistryMethod {
  type: string
  description: string
  approaches: string[]
  resources: string[]
}

const ministryMethods: MinistryMethod[] = [
  {
    type: "Public Witnessing",
    description: "Various methods of sharing the Bible's message in public.",
    approaches: [
      "House-to-house ministry",
      "Public witnessing displays",
      "Informal witnessing",
      "Return visits"
    ],
    resources: [
      "Bible",
      "Publications",
      "Digital presentations",
      "Ministry tools"
    ]
  }
]

interface Publication {
  title: string
  type: string
  description: string
  purpose: string[]
  distribution: string[]
}

const publications: Publication[] = [
  {
    title: "The Watchtower",
    type: "Magazine",
    description: "Primary publication for Bible study and spiritual encouragement.",
    purpose: [
      "Bible education",
      "Doctrinal instruction",
      "Spiritual encouragement",
      "News and experiences"
    ],
    distribution: [
      "Public distribution",
      "Congregation study",
      "Personal study",
      "Online access"
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
    name: "Watchtower Online Library",
    url: "https://wol.jw.org",
    description: "Comprehensive digital library of publications and research materials.",
    type: "Digital Resource"
  },
  {
    name: "JW Library",
    url: "https://www.jw.org/en/online-help/jw-library/",
    description: "Official app for accessing and studying publications.",
    type: "Digital Resource"
  },
  {
    name: "Research Guide for Jehovah's Witnesses",
    url: "https://wol.jw.org/en/wol/d/r1/lp-e/1200272433",
    description: "Comprehensive guide for conducting biblical research.",
    type: "Research Tool"
  },
  {
    name: "Biblical Terms and References",
    url: "https://wol.jw.org/en/wol/d/r1/lp-e/1200000032",
    description: "Detailed explanations of biblical terms and concepts.",
    type: "Reference"
  }
]

interface ReligiousPractice {
  name: string
  description: string
  guidelines: string[]
  significance: string[]
}

const religiousPractices: ReligiousPractice[] = [
  {
    name: "Memorial of Christ's Death",
    description: "Annual commemoration of Jesus Christ's death, the most important event of the year.",
    guidelines: [
      "Held once yearly on Nisan 14",
      "Unleavened bread and red wine used as emblems",
      "Solemn observance with special talk",
      "Distinction between partakers and observers"
    ],
    significance: [
      "Remembrance of Christ's sacrifice",
      "Recognition of ransom provision",
      "Affirmation of covenant relationship",
      "Worldwide unity in worship"
    ]
  },
  {
    name: "Field Ministry",
    description: "Regular public preaching work through various methods.",
    guidelines: [
      "Regular participation encouraged",
      "Various methods employed",
      "Training provided through ministry school",
      "Record keeping of activity"
    ],
    significance: [
      "Fulfillment of Matthew 24:14",
      "Personal spiritual growth",
      "Public education work",
      "Congregation unity"
    ]
  },
  {
    name: "Congregation Meetings",
    description: "Regular gatherings for worship, study, and encouragement.",
    guidelines: [
      "Weekly public talks and Watchtower study",
      "Midweek meeting for ministry",
      "Regular attendance encouraged",
      "Participation in discussions"
    ],
    significance: [
      "Spiritual education",
      "Congregational unity",
      "Regular encouragement",
      "Biblical instruction"
    ]
  },
  {
    name: "Bible Study",
    description: "Personal and group study of the Bible and biblical publications.",
    guidelines: [
      "Regular personal study habits",
      "Family worship arrangement",
      "Congregation Bible study",
      "Public Bible study program"
    ],
    significance: [
      "Spiritual growth",
      "Doctrinal understanding",
      "Practical application",
      "Teaching preparation"
    ]
  },
  {
    name: "Assembly and Convention Attendance",
    description: "Regular larger gatherings for worship and instruction.",
    guidelines: [
      "Circuit assemblies twice yearly",
      "Annual regional convention",
      "Special international conventions",
      "Program participation"
    ],
    significance: [
      "Spiritual refreshment",
      "Brotherhood association",
      "New publication releases",
      "Organizational unity"
    ]
  },
  {
    name: "Prayer and Devotion",
    description: "Regular communication with Jehovah God through prayer.",
    guidelines: [
      "Regular personal prayer",
      "Public prayer at meetings",
      "Family prayer sessions",
      "Proper prayer format"
    ],
    significance: [
      "Spiritual relationship",
      "Divine guidance",
      "Expression of gratitude",
      "Request for help"
    ]
  }
]

function JehovahsWitnessesPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Jehovah's Witnesses</h1>
        <p className="text-xl text-muted-foreground">
          Understanding the beliefs, practices, and organization of Jehovah's Witnesses
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-7 gap-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="beliefs">Beliefs</TabsTrigger>
          <TabsTrigger value="organization">Organization</TabsTrigger>
          <TabsTrigger value="practices">Practices</TabsTrigger>
          <TabsTrigger value="ministry">Ministry</TabsTrigger>
          <TabsTrigger value="publications">Publications</TabsTrigger>
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
                      <h4 className="text-sm font-medium">Developments:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {period.developments.map((dev, index) => (
                          <li key={index}>{dev}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="beliefs" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Core Beliefs and Doctrines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {coreBeliefs.map((belief) => (
                <div key={belief.topic} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{belief.topic}</h3>
                  <p className="text-sm mt-2">{belief.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Scriptural Basis:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {belief.scripturalBasis.map((scripture, index) => (
                          <li key={index}>{scripture}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Practical Application:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {belief.application.map((app, index) => (
                          <li key={index}>{app}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="organization" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Organizational Structure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {organizationalStructure.map((level) => (
                <div key={level.name} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{level.name}</h3>
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
                      <h4 className="text-sm font-medium">Qualifications:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {level.qualifications.map((qual, index) => (
                          <li key={index}>{qual}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="practices" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Religious Practices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {religiousPractices.map((practice) => (
                <div key={practice.name} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{practice.name}</h3>
                  <p className="text-sm mt-2">{practice.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Guidelines:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {practice.guidelines.map((guide, index) => (
                          <li key={index}>{guide}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Significance:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {practice.significance.map((sig, index) => (
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

        <TabsContent value="ministry" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Public Ministry</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {ministryMethods.map((method) => (
                <div key={method.type} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{method.type}</h3>
                  <p className="text-sm mt-2">{method.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Approaches:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {method.approaches.map((approach, index) => (
                          <li key={index}>{approach}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Resources Used:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {method.resources.map((resource, index) => (
                          <li key={index}>{resource}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="publications" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Publications and Literature</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {publications.map((publication) => (
                <div key={publication.title} className="p-4 bg-secondary rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{publication.title}</h3>
                    <Badge>{publication.type}</Badge>
                  </div>
                  <p className="text-sm mt-2">{publication.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Purpose:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {publication.purpose.map((purpose, index) => (
                          <li key={index}>{purpose}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Distribution:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {publication.distribution.map((dist, index) => (
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

export default JehovahsWitnessesPage 