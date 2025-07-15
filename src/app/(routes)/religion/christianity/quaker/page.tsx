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
  title: "Quakers (Religious Society of Friends) | Faith and Practice",
  description: "Comprehensive guide to Quaker beliefs, practices, testimonies, and contemporary expressions of faith.",
  keywords: [
    "Quakers",
    "Religious Society of Friends",
    "Silent worship",
    "Inner Light",
    "Quaker testimonies",
    "Peace testimony",
    "Simplicity",
    "Equality"
  ]
}

interface Testimony {
  name: string
  description: string
  principles: string[]
  practices: string[]
  historicalContext: string
  contemporaryApplication: string[]
}

interface WorshipStyle {
  type: string
  description: string
  elements: string[]
  practice: string[]
  significance: string[]
}

interface Meeting {
  name: string
  location: string
  established: string
  type: "Programmed" | "Unprogrammed" | "Conservative" | "Evangelical"
  description: string
  activities: string[]
  website?: string
}

interface SocialAction {
  area: string
  description: string
  initiatives: string[]
  impact: string[]
  organizations: Array<{
    name: string
    focus: string
    website?: string
  }>
}

const quakerTestimonies: Testimony[] = [
  {
    name: "Peace",
    description: "Active commitment to nonviolence and peaceful resolution of conflicts.",
    principles: [
      "Divine presence in all people",
      "Power of nonviolent action",
      "Reconciliation and healing",
      "Active peacemaking"
    ],
    practices: [
      "Conscientious objection",
      "Conflict resolution",
      "Peace education",
      "International reconciliation"
    ],
    historicalContext: "Emerged from 17th century religious persecution and warfare",
    contemporaryApplication: [
      "Mediation programs",
      "Peace education",
      "Alternatives to violence",
      "International peace work"
    ]
  },
  {
    name: "Simplicity",
    description: "Living with focus on what matters most spiritually and ethically.",
    principles: [
      "Removal of distractions",
      "Spiritual focus",
      "Environmental stewardship",
      "Mindful consumption"
    ],
    practices: [
      "Plain living",
      "Mindful consumption",
      "Environmental care",
      "Time management"
    ],
    historicalContext: "Response to materialism and social excess",
    contemporaryApplication: [
      "Sustainable living",
      "Minimalism",
      "Digital simplicity",
      "Ethical consumption"
    ]
  },
  {
    name: "Equality",
    description: "Recognition of divine worth in all people.",
    principles: [
      "Universal divine spark",
      "Human dignity",
      "Equal voice",
      "Social justice"
    ],
    practices: [
      "Inclusive decision-making",
      "Gender equality",
      "Anti-racism work",
      "Social justice advocacy"
    ],
    historicalContext: "Challenge to social hierarchies and discrimination",
    contemporaryApplication: [
      "Rights advocacy",
      "Gender justice",
      "Racial equality",
      "LGBTQ+ inclusion"
    ]
  }
]

const worshipStyles: WorshipStyle[] = [
  {
    type: "Unprogrammed Worship",
    description: "Silent waiting worship based on direct spiritual experience.",
    elements: [
      "Gathered silence",
      "Vocal ministry",
      "Spiritual listening",
      "Corporate discernment"
    ],
    practice: [
      "Enter in silence",
      "Center down",
      "Listen inwardly",
      "Speak if led"
    ],
    significance: [
      "Direct experience",
      "Equality in ministry",
      "Corporate wisdom",
      "Divine presence"
    ]
  },
  {
    type: "Programmed Worship",
    description: "Structured worship with pastoral leadership and planned elements.",
    elements: [
      "Pastoral message",
      "Hymn singing",
      "Scripture reading",
      "Open worship"
    ],
    practice: [
      "Planned service",
      "Musical worship",
      "Biblical teaching",
      "Silent waiting"
    ],
    significance: [
      "Biblical grounding",
      "Community building",
      "Spiritual formation",
      "Accessible worship"
    ]
  }
]

const meetings: Meeting[] = [
  {
    name: "London Yearly Meeting",
    location: "United Kingdom",
    established: "1668",
    type: "Unprogrammed",
    description: "Historic yearly meeting representing British Quakers.",
    activities: [
      "Peace work",
      "Social justice",
      "Environmental action",
      "Interfaith dialogue"
    ],
    website: "https://www.quaker.org.uk"
  },
  {
    name: "Friends General Conference",
    location: "United States",
    established: "1900",
    type: "Unprogrammed",
    description: "Association of North American unprogrammed meetings.",
    activities: [
      "Spiritual development",
      "Publishing",
      "Youth programs",
      "Social witness"
    ],
    website: "https://www.fgcquaker.org"
  }
]

const socialActions: SocialAction[] = [
  {
    area: "Peace and Conflict Resolution",
    description: "Working for nonviolent solutions to conflicts worldwide.",
    initiatives: [
      "Conflict mediation",
      "Peace education",
      "Alternatives to violence",
      "International reconciliation"
    ],
    impact: [
      "Reduced violence",
      "Community healing",
      "Policy change",
      "Peace skills development"
    ],
    organizations: [
      {
        name: "American Friends Service Committee",
        focus: "Peace and social justice",
        website: "https://www.afsc.org"
      },
      {
        name: "Quaker Peace & Social Witness",
        focus: "International peace work",
        website: "https://www.quaker.org.uk/our-work"
      }
    ]
  },
  {
    area: "Environmental Justice",
    description: "Addressing climate change and environmental degradation.",
    initiatives: [
      "Climate action",
      "Sustainable living",
      "Environmental advocacy",
      "Green energy"
    ],
    impact: [
      "Policy changes",
      "Community awareness",
      "Sustainable practices",
      "Environmental protection"
    ],
    organizations: [
      {
        name: "Quaker Earthcare Witness",
        focus: "Environmental stewardship",
        website: "https://www.quakerearthcare.org"
      }
    ]
  }
]

export default function QuakerPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-center mb-8">Quakers (Religious Society of Friends)</h1>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="testimonies">Testimonies</TabsTrigger>
            <TabsTrigger value="worship">Worship</TabsTrigger>
            <TabsTrigger value="meetings">Meetings</TabsTrigger>
            <TabsTrigger value="action">Social Action</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Quaker Overview</CardTitle>
                <CardDescription>
                  A religious movement emphasizing direct spiritual experience and social witness
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Religious Society of Friends (Quakers) emerged in 17th century England,
                  emphasizing direct spiritual experience, peace, simplicity, and equality.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium mb-2">Historical Roots</h3>
                    <p className="text-sm">
                      Founded by George Fox and early Friends during the religious turmoil
                      of 1640s England, seeking authentic spiritual experience.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium mb-2">Contemporary Expression</h3>
                    <p className="text-sm">
                      Global community known for peace work, social justice, and diverse
                      forms of worship and witness.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="testimonies">
            <Card>
              <CardHeader>
                <CardTitle>Quaker Testimonies</CardTitle>
                <CardDescription>
                  Core values and their practical expression
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {quakerTestimonies.map((testimony) => (
                  <div key={testimony.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{testimony.name}</h3>
                    <p className="text-sm mt-2">{testimony.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Principles:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {testimony.principles.map((principle, index) => (
                          <li key={index}>{principle}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Contemporary Application:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {testimony.contemporaryApplication.map((app, index) => (
                          <li key={index}>{app}</li>
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
                <CardTitle>Worship Styles</CardTitle>
                <CardDescription>
                  Different approaches to Quaker worship
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {worshipStyles.map((style) => (
                  <div key={style.type} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{style.type}</h3>
                    <p className="text-sm mt-2">{style.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Elements:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {style.elements.map((element, index) => (
                          <li key={index}>{element}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Significance:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {style.significance.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="meetings">
            <Card>
              <CardHeader>
                <CardTitle>Quaker Meetings</CardTitle>
                <CardDescription>
                  Major Quaker organizations and gatherings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {meetings.map((meeting) => (
                  <div key={meeting.name} className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{meeting.name}</h3>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                        {meeting.type}
                      </span>
                    </div>
                    <p className="text-sm mt-2">{meeting.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Activities:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {meeting.activities.map((activity, index) => (
                          <li key={index}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                    {meeting.website && (
                      <div className="mt-4">
                        <a
                          href={meeting.website}
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

          <TabsContent value="action">
            <Card>
              <CardHeader>
                <CardTitle>Social Action</CardTitle>
                <CardDescription>
                  Contemporary Quaker witness and service
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {socialActions.map((action) => (
                  <div key={action.area} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{action.area}</h3>
                    <p className="text-sm mt-2">{action.description}</p>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Initiatives:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {action.initiatives.map((initiative, index) => (
                            <li key={index}>{initiative}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Impact:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {action.impact.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Organizations:</h4>
                      <div className="grid gap-4 mt-2 md:grid-cols-2">
                        {action.organizations.map((org) => (
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
        </Tabs>
      </div>
    </div>
  )
} 