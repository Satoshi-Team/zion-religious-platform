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
  title: "Churches of Christ | Restoration Movement Christianity",
  description: "Comprehensive guide to Churches of Christ, including beliefs, practices, worship, and contemporary expressions.",
  keywords: [
    "Churches of Christ",
    "Restoration Movement",
    "A cappella worship",
    "Biblical authority",
    "Christian unity",
    "New Testament church",
    "Congregational autonomy"
  ]
}

interface CorePrinciple {
  name: string
  description: string
  biblicalBasis: string[]
  application: string[]
  significance: string
}

interface WorshipPractice {
  name: string
  description: string
  biblicalBasis: string[]
  implementation: string[]
  frequency: string
}

interface Education {
  name: string
  location: string
  established: string
  description: string
  programs: string[]
  distinctives: string[]
  website?: string
}

interface Ministry {
  area: string
  description: string
  activities: string[]
  impact: string[]
  examples: Array<{
    name: string
    focus: string
    location: string
  }>
}

const corePrinciples: CorePrinciple[] = [
  {
    name: "Biblical Authority",
    description: "Scripture as the sole authority for faith and practice.",
    biblicalBasis: [
      "2 Timothy 3:16-17",
      "1 Peter 4:11",
      "Colossians 3:17"
    ],
    application: [
      "Bible-centered teaching",
      "Pattern theology",
      "Scripture-based worship",
      "Biblical hermeneutics"
    ],
    significance: "Establishes foundation for restoration of New Testament Christianity"
  },
  {
    name: "Congregational Autonomy",
    description: "Each congregation self-governing under Christ.",
    biblicalBasis: [
      "Acts 14:23",
      "Titus 1:5",
      "1 Peter 5:1-4"
    ],
    application: [
      "Local eldership",
      "Independent decision-making",
      "Congregational cooperation",
      "Local responsibility"
    ],
    significance: "Maintains local church independence while fostering voluntary cooperation"
  },
  {
    name: "A Cappella Worship",
    description: "Singing without instrumental accompaniment.",
    biblicalBasis: [
      "Ephesians 5:19",
      "Colossians 3:16",
      "Hebrews 13:15"
    ],
    application: [
      "Congregational singing",
      "Four-part harmony",
      "Spiritual edification",
      "Mutual participation"
    ],
    significance: "Preserves early church practice and emphasizes congregational participation"
  }
]

const worshipPractices: WorshipPractice[] = [
  {
    name: "Lord's Supper",
    description: "Weekly communion commemorating Christ's death and resurrection.",
    biblicalBasis: [
      "Acts 20:7",
      "1 Corinthians 11:23-26",
      "Matthew 26:26-29"
    ],
    implementation: [
      "Every first day",
      "Unleavened bread",
      "Fruit of the vine",
      "Self-examination"
    ],
    frequency: "Weekly"
  },
  {
    name: "Baptism",
    description: "Immersion in water for remission of sins.",
    biblicalBasis: [
      "Acts 2:38",
      "Romans 6:3-4",
      "Mark 16:16"
    ],
    implementation: [
      "Believer's baptism",
      "Immersion only",
      "For remission of sins",
      "Immediate response"
    ],
    frequency: "Upon confession of faith"
  }
]

const educationalInstitutions: Education[] = [
  {
    name: "Harding University",
    location: "Searcy, Arkansas",
    established: "1924",
    description: "Comprehensive Christian university emphasizing faith, learning, and service.",
    programs: [
      "Biblical Studies",
      "Liberal Arts",
      "Professional Programs",
      "Graduate Studies"
    ],
    distinctives: [
      "Daily Bible classes",
      "Chapel services",
      "Christian worldview",
      "Global missions"
    ],
    website: "https://www.harding.edu"
  },
  {
    name: "Lipscomb University",
    location: "Nashville, Tennessee",
    established: "1891",
    description: "Christian liberal arts institution integrating faith and academics.",
    programs: [
      "Bible and Ministry",
      "Arts and Sciences",
      "Professional Studies",
      "Graduate Programs"
    ],
    distinctives: [
      "Biblical foundation",
      "Service learning",
      "Academic excellence",
      "Christian community"
    ],
    website: "https://www.lipscomb.edu"
  }
]

const ministries: Ministry[] = [
  {
    area: "Global Missions",
    description: "Worldwide evangelism and church planting efforts.",
    activities: [
      "Church planting",
      "Leadership training",
      "Bible translation",
      "Humanitarian aid"
    ],
    impact: [
      "New congregations",
      "Indigenous leadership",
      "Community development",
      "Cultural engagement"
    ],
    examples: [
      {
        name: "World Bible School",
        focus: "Bible correspondence courses",
        location: "Global"
      },
      {
        name: "Let's Start Talking",
        focus: "English Bible study outreach",
        location: "International"
      }
    ]
  },
  {
    area: "Campus Ministry",
    description: "University outreach and student spiritual development.",
    activities: [
      "Bible studies",
      "Discipleship",
      "Service projects",
      "Fellowship"
    ],
    impact: [
      "Student conversion",
      "Leadership development",
      "Campus presence",
      "Life-long faith"
    ],
    examples: [
      {
        name: "Campus for Christ",
        focus: "University evangelism",
        location: "Multiple campuses"
      }
    ]
  }
]

export default function ChurchesOfChristPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-center mb-8">Churches of Christ</h1>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="principles">Principles</TabsTrigger>
            <TabsTrigger value="worship">Worship</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="ministry">Ministry</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Churches of Christ Overview</CardTitle>
                <CardDescription>
                  A Christian movement seeking to restore New Testament Christianity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Churches of Christ emerged from the American Restoration Movement,
                  seeking to restore the patterns of New Testament Christianity.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium mb-2">Historical Roots</h3>
                    <p className="text-sm">
                      Emerged from the American Restoration Movement of the early 19th century,
                      emphasizing biblical authority and Christian unity.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium mb-2">Contemporary Expression</h3>
                    <p className="text-sm">
                      Global fellowship of autonomous congregations united by common
                      commitment to New Testament Christianity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="principles">
            <Card>
              <CardHeader>
                <CardTitle>Core Principles</CardTitle>
                <CardDescription>
                  Foundational beliefs and practices
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {corePrinciples.map((principle) => (
                  <div key={principle.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{principle.name}</h3>
                    <p className="text-sm mt-2">{principle.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Biblical Basis:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {principle.biblicalBasis.map((verse, index) => (
                          <li key={index}>{verse}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Application:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {principle.application.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="worship">
            <Card>
              <CardHeader>
                <CardTitle>Worship Practices</CardTitle>
                <CardDescription>
                  Essential elements of worship and their implementation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {worshipPractices.map((practice) => (
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
                    <p className="text-sm mt-4">
                      <span className="font-medium">Frequency:</span> {practice.frequency}
                    </p>
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
                  Christian higher education in the Churches of Christ tradition
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

          <TabsContent value="ministry">
            <Card>
              <CardHeader>
                <CardTitle>Ministry and Outreach</CardTitle>
                <CardDescription>
                  Global ministry efforts and impact
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {ministries.map((ministry) => (
                  <div key={ministry.area} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{ministry.area}</h3>
                    <p className="text-sm mt-2">{ministry.description}</p>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Activities:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {ministry.activities.map((activity, index) => (
                            <li key={index}>{activity}</li>
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
                      <h4 className="text-sm font-medium">Examples:</h4>
                      <div className="grid gap-4 mt-2 md:grid-cols-2">
                        {ministry.examples.map((example) => (
                          <div key={example.name} className="p-3 bg-background rounded">
                            <h5 className="font-medium text-sm">{example.name}</h5>
                            <p className="text-sm mt-1">{example.focus}</p>
                            <p className="text-sm text-muted-foreground">{example.location}</p>
                          </div>
                        ))}
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