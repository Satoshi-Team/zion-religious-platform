import React from 'react'
import { Metadata } from "next"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Lutheran Christianity | History, Beliefs, and Practices",
  description: "Comprehensive guide to Lutheran Christianity, including its history, theological distinctives, worship practices, global presence, and contemporary expressions.",
  keywords: [
    "Lutheran Church",
    "Martin Luther",
    "Protestant Reformation",
    "Lutheran theology",
    "Lutheran worship",
    "Lutheran education",
    "Lutheran missions",
    "Lutheran resources"
  ]
}

interface Doctrine {
  name: string
  description: string
  biblicalBasis: string[]
  significance: string
  implications: string[]
}

interface Practice {
  name: string
  description: string
  significance: string
  elements: string[]
  frequency: string
  biblicalBasis: string[]
}

interface GlobalRegion {
  name: string
  description: string
  membership: string
  significantBodies: Array<{
    name: string
    location: string
    founded: string
    members: string
    website: string
  }>
  keyInitiatives: string[]
}

interface EducationalInstitution {
  name: string
  location: string
  founded: string
  type: "Seminary" | "University" | "College"
  description: string
  programs: string[]
  website: string
  accreditation: string[]
}

const lutheranDoctrines: Doctrine[] = [
  {
    name: "Sola Scriptura",
    description: "Scripture alone is the authoritative source for faith and practice.",
    biblicalBasis: [
      "2 Timothy 3:16-17",
      "2 Peter 1:20-21",
      "John 17:17"
    ],
    significance: "Establishes the Bible as the only infallible authority for Christian doctrine and life.",
    implications: [
      "Scripture interprets Scripture",
      "Church traditions are subject to biblical authority",
      "Personal experience must align with biblical teaching",
      "Emphasis on biblical literacy and study"
    ]
  },
  {
    name: "Sola Fide",
    description: "Justification is by faith alone, apart from works.",
    biblicalBasis: [
      "Romans 3:28",
      "Ephesians 2:8-9",
      "Galatians 2:16"
    ],
    significance: "Emphasizes that salvation comes through faith in Christ alone, not human works or merit.",
    implications: [
      "Rejection of works-righteousness",
      "Emphasis on grace in salvation",
      "Focus on Christ's completed work",
      "Basis for assurance of salvation"
    ]
  },
  {
    name: "Sola Gratia",
    description: "Salvation is by grace alone, through God's unmerited favor.",
    biblicalBasis: [
      "Ephesians 2:8-9",
      "Romans 11:6",
      "Titus 3:5-7"
    ],
    significance: "Affirms that salvation is entirely God's gift, not human achievement.",
    implications: [
      "Recognition of human inability",
      "Emphasis on divine initiative",
      "Gratitude as motivation for service",
      "Rejection of merit-based salvation"
    ]
  },
  {
    name: "Solus Christus",
    description: "Christ alone is the mediator between God and humanity.",
    biblicalBasis: [
      "1 Timothy 2:5",
      "John 14:6",
      "Acts 4:12"
    ],
    significance: "Establishes Jesus Christ as the only way to salvation and relationship with God.",
    implications: [
      "Christ-centered worship and preaching",
      "Direct access to God through Christ",
      "Focus on Christ's unique role",
      "Emphasis on incarnation and atonement"
    ]
  },
  {
    name: "Soli Deo Gloria",
    description: "All glory belongs to God alone.",
    biblicalBasis: [
      "Romans 11:36",
      "1 Corinthians 10:31",
      "Revelation 4:11"
    ],
    significance: "Directs all praise and honor to God as the source and goal of all things.",
    implications: [
      "God-centered worship",
      "Vocation as divine calling",
      "Stewardship of gifts",
      "Life lived for God's glory"
    ]
  }
]

const lutheranPractices: Practice[] = [
  {
    name: "Holy Baptism",
    description: "Sacrament of initiation into Christ's Church through water and the Word.",
    significance: "Means of grace conveying God's promise of forgiveness and new life.",
    elements: [
      "Water",
      "Trinitarian formula",
      "God's Word",
      "Congregational witness"
    ],
    frequency: "Once in lifetime",
    biblicalBasis: [
      "Matthew 28:19-20",
      "Acts 2:38-39",
      "Romans 6:3-4"
    ]
  },
  {
    name: "Holy Communion",
    description: "Sacrament of Christ's body and blood received in, with, and under bread and wine.",
    significance: "Real presence of Christ for forgiveness, life, and salvation.",
    elements: [
      "Bread",
      "Wine",
      "Words of Institution",
      "Distribution"
    ],
    frequency: "Weekly or monthly",
    biblicalBasis: [
      "Matthew 26:26-28",
      "1 Corinthians 11:23-26",
      "John 6:53-56"
    ]
  },
  {
    name: "Divine Service",
    description: "Primary worship service centered on Word and Sacrament.",
    significance: "God's service to His people through means of grace.",
    elements: [
      "Liturgy",
      "Scripture readings",
      "Preaching",
      "Sacraments",
      "Music"
    ],
    frequency: "Weekly",
    biblicalBasis: [
      "Acts 2:42",
      "Colossians 3:16",
      "Hebrews 10:25"
    ]
  }
]

const globalPresence: GlobalRegion[] = [
  {
    name: "Europe",
    description: "Historical heartland of Lutheranism with strong presence in Nordic countries.",
    membership: "Over 70 million",
    significantBodies: [
      {
        name: "Church of Sweden",
        location: "Sweden",
        founded: "1527",
        members: "5.8 million",
        website: "https://www.svenskakyrkan.se"
      },
      {
        name: "Evangelical Church in Germany (EKD)",
        location: "Germany",
        founded: "1948",
        members: "20.7 million",
        website: "https://www.ekd.de"
      }
    ],
    keyInitiatives: [
      "Ecumenical dialogue",
      "Social welfare programs",
      "Environmental stewardship",
      "Youth ministry"
    ]
  },
  {
    name: "North America",
    description: "Diverse Lutheran presence through various synods and bodies.",
    membership: "Over 7 million",
    significantBodies: [
      {
        name: "Evangelical Lutheran Church in America (ELCA)",
        location: "United States",
        founded: "1988",
        members: "3.3 million",
        website: "https://www.elca.org"
      },
      {
        name: "Lutheran Church—Missouri Synod (LCMS)",
        location: "United States",
        founded: "1847",
        members: "2.1 million",
        website: "https://www.lcms.org"
      }
    ],
    keyInitiatives: [
      "Mission work",
      "Higher education",
      "Social ministry",
      "Disaster response"
    ]
  }
]

const educationalInstitutions: EducationalInstitution[] = [
  {
    name: "Concordia Seminary",
    location: "St. Louis, Missouri, USA",
    founded: "1839",
    type: "Seminary",
    description: "Premier theological institution of the Lutheran Church—Missouri Synod.",
    programs: [
      "Master of Divinity",
      "Master of Arts",
      "Doctor of Ministry",
      "Ph.D. in Theology"
    ],
    website: "https://www.csl.edu",
    accreditation: [
      "Association of Theological Schools",
      "Higher Learning Commission"
    ]
  },
  {
    name: "Luther Seminary",
    location: "St. Paul, Minnesota, USA",
    founded: "1869",
    type: "Seminary",
    description: "Largest ELCA seminary, focused on forming leaders for Christian communities.",
    programs: [
      "Master of Divinity",
      "Master of Arts",
      "Doctor of Ministry",
      "Ph.D. in Congregational Mission and Leadership"
    ],
    website: "https://www.luthersem.edu",
    accreditation: [
      "Association of Theological Schools",
      "Higher Learning Commission"
    ]
  }
]

export default function LutheranPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-center mb-8">Lutheran Christianity</h1>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="doctrines">Doctrines</TabsTrigger>
            <TabsTrigger value="practices">Practices</TabsTrigger>
            <TabsTrigger value="presence">Global Presence</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Lutheran Christianity Overview</CardTitle>
                <CardDescription>
                  A Protestant Christian denomination following the teachings of Martin Luther
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Lutheran Christianity emerged during the Protestant Reformation in the 16th century,
                  led by Martin Luther's emphasis on salvation by grace through faith alone.
                  Today, it represents one of the largest Protestant denominations globally.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium mb-2">Historical Roots</h3>
                    <p className="text-sm">
                      Founded in the Protestant Reformation beginning with Martin Luther's 95 Theses in 1517.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium mb-2">Core Beliefs</h3>
                    <p className="text-sm">
                      Emphasizes salvation by grace through faith, authority of Scripture, and sacramental presence.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="doctrines">
            <Card>
              <CardHeader>
                <CardTitle>Lutheran Doctrines</CardTitle>
                <CardDescription>
                  Core theological principles and teachings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {lutheranDoctrines.map((doctrine) => (
                  <div key={doctrine.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{doctrine.name}</h3>
                    <p className="text-sm mt-2">{doctrine.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Biblical Basis:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {doctrine.biblicalBasis.map((verse, index) => (
                          <li key={index}>{verse}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Implications:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {doctrine.implications.map((implication, index) => (
                          <li key={index}>{implication}</li>
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
                <CardTitle>Lutheran Practices</CardTitle>
                <CardDescription>
                  Worship and sacramental practices
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {lutheranPractices.map((practice) => (
                  <div key={practice.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{practice.name}</h3>
                    <p className="text-sm mt-2">{practice.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Elements:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {practice.elements.map((element, index) => (
                          <li key={index}>{element}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Biblical Basis:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {practice.biblicalBasis.map((verse, index) => (
                          <li key={index}>{verse}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm mt-4">
                      <span className="font-medium">Frequency:</span> {practice.frequency}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="presence">
            <Card>
              <CardHeader>
                <CardTitle>Global Presence</CardTitle>
                <CardDescription>
                  Lutheran presence and impact worldwide
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {globalPresence.map((region) => (
                  <div key={region.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{region.name}</h3>
                    <p className="text-sm mt-2">{region.description}</p>
                    <p className="text-sm mt-2">
                      <span className="font-medium">Membership:</span> {region.membership}
                    </p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Significant Bodies:</h4>
                      <div className="grid gap-4 mt-2 md:grid-cols-2">
                        {region.significantBodies.map((body) => (
                          <div key={body.name} className="p-3 bg-background rounded">
                            <h5 className="font-medium text-sm">{body.name}</h5>
                            <p className="text-sm mt-1">Founded: {body.founded}</p>
                            <p className="text-sm">Members: {body.members}</p>
                            <a
                              href={body.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline"
                            >
                              Website
                            </a>
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
                  Lutheran seminaries and universities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {educationalInstitutions.map((institution) => (
                  <div key={institution.name} className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{institution.name}</h3>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                        {institution.type}
                      </span>
                    </div>
                    <p className="text-sm mt-2">{institution.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Programs:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {institution.programs.map((program, index) => (
                          <li key={index}>{program}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Accreditation:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {institution.accreditation.map((acc, index) => (
                          <li key={index}>{acc}</li>
                        ))}
                      </ul>
                    </div>
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