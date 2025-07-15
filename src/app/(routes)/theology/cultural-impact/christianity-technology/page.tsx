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
  title: "Christianity and Technology | Cultural Impact",
  description: "Exploration of the relationship between Christianity and technology, including theological perspectives, ethical considerations, and digital ministry.",
  keywords: [
    "Christianity and Technology",
    "Digital Theology",
    "Cyber Theology",
    "Digital Ministry",
    "Christian Tech Ethics",
    "Virtual Church",
    "AI and Religion",
    "Digital Evangelism",
    "Christian Innovation",
    "Technology Ethics"
  ]
}

interface TheologicalPerspective {
  perspective: string
  description: string
  principles: string[]
  implications: string[]
  challenges: string[]
  opportunities: string[]
}

interface TechnologicalDomain {
  domain: string
  description: string
  applications: string[]
  impact: string[]
  challenges: string[]
  responses: string[]
}

interface EthicalConsideration {
  consideration: string
  description: string
  concerns: string[]
  principles: string[]
  guidelines: string[]
  examples: string[]
}

interface DigitalMinistry {
  area: string
  description: string
  methods: string[]
  tools: string[]
  benefits: string[]
  challenges: string[]
}

const theologicalPerspectives: TheologicalPerspective[] = [
  {
    perspective: "Creation and Technology",
    description: "Understanding technology in light of Christian creation theology",
    principles: [
      "Human creativity as divine image",
      "Stewardship of creation",
      "Technology as cultural mandate",
      "Responsible innovation",
      "Common good"
    ],
    implications: [
      "Ethical innovation",
      "Environmental responsibility",
      "Human dignity",
      "Social benefit",
      "Sustainable development"
    ],
    challenges: [
      "Technological determinism",
      "Environmental impact",
      "Human enhancement",
      "Digital divide",
      "Ethical boundaries"
    ],
    opportunities: [
      "Creation care",
      "Human flourishing",
      "Social development",
      "Global connection",
      "Innovation for good"
    ]
  },
  {
    perspective: "Digital Theology",
    description: "Theological reflection on digital culture and technology",
    principles: [
      "Digital incarnation",
      "Virtual community",
      "Digital presence",
      "Cyber spirituality",
      "Digital witness"
    ],
    implications: [
      "Online worship",
      "Digital ministry",
      "Virtual fellowship",
      "Digital evangelism",
      "Cyber pastoral care"
    ],
    challenges: [
      "Authenticity",
      "Embodiment",
      "Digital addiction",
      "Privacy concerns",
      "Spiritual formation"
    ],
    opportunities: [
      "Global reach",
      "Inclusive community",
      "Interactive learning",
      "24/7 accessibility",
      "Innovative ministry"
    ]
  }
]

const technologicalDomains: TechnologicalDomain[] = [
  {
    domain: "Artificial Intelligence",
    description: "Christian engagement with AI development and implementation",
    applications: [
      "Ministry automation",
      "Pastoral care systems",
      "Bible study tools",
      "Community management",
      "Content creation"
    ],
    impact: [
      "Ethical decision-making",
      "Theological reflection",
      "Ministry efficiency",
      "Personalized spirituality",
      "Global outreach"
    ],
    challenges: [
      "Human uniqueness",
      "Moral agency",
      "Job displacement",
      "Privacy concerns",
      "Algorithmic bias"
    ],
    responses: [
      "Ethical frameworks",
      "Human-centered design",
      "Theological integration",
      "Policy development",
      "Educational initiatives"
    ]
  },
  {
    domain: "Virtual Reality",
    description: "Religious applications and implications of VR technology",
    applications: [
      "Virtual worship",
      "Sacred space simulation",
      "Biblical experiences",
      "Religious education",
      "Spiritual practices"
    ],
    impact: [
      "Immersive worship",
      "Global connection",
      "Educational enhancement",
      "Accessibility",
      "Cultural preservation"
    ],
    challenges: [
      "Physical presence",
      "Community authenticity",
      "Digital divide",
      "Technical limitations",
      "Spiritual authenticity"
    ],
    responses: [
      "Hybrid approaches",
      "Community guidelines",
      "Accessibility initiatives",
      "Content standards",
      "Theological reflection"
    ]
  }
]

const ethicalConsiderations: EthicalConsideration[] = [
  {
    consideration: "Digital Ethics",
    description: "Ethical principles for Christian engagement with digital technology",
    concerns: [
      "Privacy",
      "Data security",
      "Digital addiction",
      "Online behavior",
      "Information integrity"
    ],
    principles: [
      "Human dignity",
      "Truth-telling",
      "Justice",
      "Community",
      "Stewardship"
    ],
    guidelines: [
      "Data protection",
      "Digital sabbath",
      "Online etiquette",
      "Content standards",
      "Privacy respect"
    ],
    examples: [
      "Social media policies",
      "Digital wellness programs",
      "Online community guidelines",
      "Privacy protocols",
      "Content moderation"
    ]
  },
  {
    consideration: "Technological Stewardship",
    description: "Responsible development and use of technology",
    concerns: [
      "Environmental impact",
      "Resource allocation",
      "Digital divide",
      "Technological dependency",
      "Innovation ethics"
    ],
    principles: [
      "Sustainability",
      "Accessibility",
      "Justice",
      "Common good",
      "Human flourishing"
    ],
    guidelines: [
      "Green technology",
      "Universal design",
      "Ethical innovation",
      "Resource sharing",
      "Impact assessment"
    ],
    examples: [
      "Sustainable IT",
      "Digital inclusion programs",
      "Ethical AI development",
      "Technology sharing",
      "Environmental monitoring"
    ]
  }
]

const digitalMinistries: DigitalMinistry[] = [
  {
    area: "Online Worship",
    description: "Digital platforms and practices for worship services",
    methods: [
      "Live streaming",
      "Interactive worship",
      "Digital communion",
      "Virtual choir",
      "Online prayer"
    ],
    tools: [
      "Streaming platforms",
      "Digital hymnals",
      "Prayer apps",
      "Virtual reality",
      "Community platforms"
    ],
    benefits: [
      "Global accessibility",
      "Inclusive participation",
      "Recording capability",
      "Multiple formats",
      "Interactive elements"
    ],
    challenges: [
      "Technical issues",
      "Digital divide",
      "Community building",
      "Sacramental practice",
      "Participation engagement"
    ]
  },
  {
    area: "Digital Evangelism",
    description: "Using technology for spreading the Gospel",
    methods: [
      "Social media outreach",
      "Digital storytelling",
      "Online courses",
      "Virtual events",
      "Mobile apps"
    ],
    tools: [
      "Social platforms",
      "Content management",
      "Analytics tools",
      "Email marketing",
      "Mobile apps"
    ],
    benefits: [
      "Wide reach",
      "Data insights",
      "Cost effective",
      "Personalization",
      "Measurable impact"
    ],
    challenges: [
      "Content quality",
      "Platform changes",
      "Message authenticity",
      "Digital noise",
      "Resource demands"
    ]
  }
]

export default function ChristianityTechnologyPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Christianity and Technology</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="perspectives">Perspectives</TabsTrigger>
          <TabsTrigger value="domains">Domains</TabsTrigger>
          <TabsTrigger value="ethics">Ethics</TabsTrigger>
          <TabsTrigger value="ministry">Digital Ministry</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Christianity's Engagement with Technology</CardTitle>
              <CardDescription>
                The intersection of Christian faith with technological development and digital culture
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Christianity's relationship with technology encompasses theological
                reflection, ethical considerations, practical applications in ministry,
                and responses to emerging technological challenges.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="perspectives">
          <div className="grid gap-4 md:grid-cols-2">
            {theologicalPerspectives.map((perspective) => (
              <Card key={perspective.perspective}>
                <CardHeader>
                  <CardTitle>{perspective.perspective}</CardTitle>
                  <CardDescription>{perspective.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Principles:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {perspective.principles.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Implications:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {perspective.implications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {perspective.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Opportunities:</h4>
                  <ul className="list-disc pl-5">
                    {perspective.opportunities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="domains">
          <div className="grid gap-4 md:grid-cols-2">
            {technologicalDomains.map((domain) => (
              <Card key={domain.domain}>
                <CardHeader>
                  <CardTitle>{domain.domain}</CardTitle>
                  <CardDescription>{domain.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Applications:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {domain.applications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Impact:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {domain.impact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {domain.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Responses:</h4>
                  <ul className="list-disc pl-5">
                    {domain.responses.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ethics">
          <div className="grid gap-4 md:grid-cols-2">
            {ethicalConsiderations.map((consideration) => (
              <Card key={consideration.consideration}>
                <CardHeader>
                  <CardTitle>{consideration.consideration}</CardTitle>
                  <CardDescription>{consideration.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Concerns:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {consideration.concerns.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Principles:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {consideration.principles.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Guidelines:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {consideration.guidelines.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Examples:</h4>
                  <ul className="list-disc pl-5">
                    {consideration.examples.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ministry">
          <div className="grid gap-4 md:grid-cols-2">
            {digitalMinistries.map((ministry) => (
              <Card key={ministry.area}>
                <CardHeader>
                  <CardTitle>{ministry.area}</CardTitle>
                  <CardDescription>{ministry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Methods:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {ministry.methods.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Tools:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {ministry.tools.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Benefits:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {ministry.benefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5">
                    {ministry.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
} 