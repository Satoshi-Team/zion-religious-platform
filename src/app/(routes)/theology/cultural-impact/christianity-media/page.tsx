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
  title: "Christianity and Media | Cultural Impact",
  description: "Exploration of the relationship between Christianity and media, including traditional media, digital platforms, and social media engagement.",
  keywords: [
    "Christianity and Media",
    "Religious Broadcasting",
    "Christian Media",
    "Social Media Ministry",
    "Digital Evangelism",
    "Religious Communication",
    "Christian Journalism",
    "Media Ethics",
    "Religious Programming",
    "Faith-based Media"
  ]
}

interface MediaForm {
  form: string
  description: string
  applications: string[]
  impact: string[]
  challenges: string[]
  strategies: string[]
}

interface ContentType {
  type: string
  description: string
  formats: string[]
  purposes: string[]
  considerations: string[]
  examples: string[]
}

interface EthicalGuideline {
  area: string
  description: string
  principles: string[]
  challenges: string[]
  practices: string[]
  standards: string[]
}

interface EngagementStrategy {
  strategy: string
  description: string
  methods: string[]
  tools: string[]
  outcomes: string[]
  challenges: string[]
}

const mediaForms: MediaForm[] = [
  {
    form: "Traditional Media",
    description: "Established media formats including print, radio, and television",
    applications: [
      "Religious broadcasting",
      "Christian publishing",
      "Religious journalism",
      "Documentary production",
      "Educational programming"
    ],
    impact: [
      "Mass communication",
      "Cultural influence",
      "Public discourse",
      "Religious education",
      "Community building"
    ],
    challenges: [
      "Production costs",
      "Market competition",
      "Content quality",
      "Audience reach",
      "Regulatory compliance"
    ],
    strategies: [
      "Professional production",
      "Content partnerships",
      "Distribution networks",
      "Audience engagement",
      "Quality standards"
    ]
  },
  {
    form: "Digital Media",
    description: "Online and digital platforms for religious content",
    applications: [
      "Streaming services",
      "Podcasting",
      "Digital publishing",
      "Online video",
      "Mobile apps"
    ],
    impact: [
      "Global reach",
      "Interactive engagement",
      "Content accessibility",
      "Real-time communication",
      "Data analytics"
    ],
    challenges: [
      "Platform dependency",
      "Digital literacy",
      "Content overload",
      "Technical requirements",
      "Monetization"
    ],
    strategies: [
      "Multi-platform presence",
      "Content optimization",
      "User experience",
      "Analytics utilization",
      "Platform diversification"
    ]
  }
]

const contentTypes: ContentType[] = [
  {
    type: "Educational Content",
    description: "Materials designed for religious education and spiritual formation",
    formats: [
      "Online courses",
      "Video series",
      "Study guides",
      "Interactive lessons",
      "Educational podcasts"
    ],
    purposes: [
      "Biblical literacy",
      "Theological education",
      "Spiritual formation",
      "Leadership development",
      "Cultural engagement"
    ],
    considerations: [
      "Learning objectives",
      "Audience level",
      "Accessibility",
      "Interactivity",
      "Assessment methods"
    ],
    examples: [
      "Bible study series",
      "Theology courses",
      "Ministry training",
      "Youth education",
      "Cultural analysis"
    ]
  },
  {
    type: "Evangelistic Content",
    description: "Content designed for outreach and mission",
    formats: [
      "Testimonial videos",
      "Documentary series",
      "Social media campaigns",
      "Digital storytelling",
      "Interactive experiences"
    ],
    purposes: [
      "Gospel presentation",
      "Cultural engagement",
      "Faith sharing",
      "Community outreach",
      "Mission support"
    ],
    considerations: [
      "Cultural relevance",
      "Message clarity",
      "Audience sensitivity",
      "Platform appropriateness",
      "Response mechanisms"
    ],
    examples: [
      "Life stories",
      "Faith journeys",
      "Cultural dialogues",
      "Mission reports",
      "Community impact"
    ]
  }
]

const ethicalGuidelines: EthicalGuideline[] = [
  {
    area: "Content Ethics",
    description: "Ethical principles for Christian media content",
    principles: [
      "Truth-telling",
      "Respect for persons",
      "Cultural sensitivity",
      "Intellectual honesty",
      "Social responsibility"
    ],
    challenges: [
      "Bias management",
      "Source verification",
      "Privacy concerns",
      "Cultural representation",
      "Content integrity"
    ],
    practices: [
      "Fact-checking",
      "Source attribution",
      "Balanced reporting",
      "Privacy protection",
      "Cultural consultation"
    ],
    standards: [
      "Editorial guidelines",
      "Content policies",
      "Ethics codes",
      "Quality standards",
      "Review processes"
    ]
  },
  {
    area: "Platform Ethics",
    description: "Ethical considerations for media platform usage",
    principles: [
      "Platform integrity",
      "User respect",
      "Data responsibility",
      "Transparency",
      "Community care"
    ],
    challenges: [
      "Algorithm bias",
      "Data privacy",
      "Content moderation",
      "Platform policies",
      "User safety"
    ],
    practices: [
      "Policy compliance",
      "Data protection",
      "Community guidelines",
      "User education",
      "Safety measures"
    ],
    standards: [
      "Platform guidelines",
      "Privacy policies",
      "Community standards",
      "Safety protocols",
      "User agreements"
    ]
  }
]

const engagementStrategies: EngagementStrategy[] = [
  {
    strategy: "Social Media Ministry",
    description: "Strategic engagement through social media platforms",
    methods: [
      "Content creation",
      "Community management",
      "Campaign planning",
      "Audience engagement",
      "Analytics tracking"
    ],
    tools: [
      "Social platforms",
      "Content calendars",
      "Analytics tools",
      "Management systems",
      "Engagement apps"
    ],
    outcomes: [
      "Community growth",
      "Message reach",
      "Engagement metrics",
      "Relationship building",
      "Ministry impact"
    ],
    challenges: [
      "Platform changes",
      "Content consistency",
      "Resource demands",
      "Algorithm updates",
      "Engagement quality"
    ]
  },
  {
    strategy: "Digital Storytelling",
    description: "Narrative approaches for digital media",
    methods: [
      "Story development",
      "Visual storytelling",
      "Interactive narratives",
      "Multimedia integration",
      "Audience participation"
    ],
    tools: [
      "Video platforms",
      "Story apps",
      "Design tools",
      "Interactive media",
      "Publishing platforms"
    ],
    outcomes: [
      "Narrative impact",
      "Audience connection",
      "Message retention",
      "Cultural dialogue",
      "Faith sharing"
    ],
    challenges: [
      "Story quality",
      "Production value",
      "Platform limitations",
      "Audience attention",
      "Resource needs"
    ]
  }
]

export default function ChristianityMediaPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Christianity and Media</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="forms">Media Forms</TabsTrigger>
          <TabsTrigger value="content">Content Types</TabsTrigger>
          <TabsTrigger value="ethics">Ethics</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Christianity's Engagement with Media</CardTitle>
              <CardDescription>
                The intersection of Christian faith with various forms of media and communication
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Christianity's relationship with media encompasses traditional and
                digital platforms, content creation, ethical considerations, and
                strategic engagement for ministry and outreach.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forms">
          <div className="grid gap-4 md:grid-cols-2">
            {mediaForms.map((form) => (
              <Card key={form.form}>
                <CardHeader>
                  <CardTitle>{form.form}</CardTitle>
                  <CardDescription>{form.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Applications:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {form.applications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Impact:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {form.impact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {form.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Strategies:</h4>
                  <ul className="list-disc pl-5">
                    {form.strategies.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="content">
          <div className="grid gap-4 md:grid-cols-2">
            {contentTypes.map((type) => (
              <Card key={type.type}>
                <CardHeader>
                  <CardTitle>{type.type}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Formats:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {type.formats.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Purposes:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {type.purposes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Considerations:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {type.considerations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Examples:</h4>
                  <ul className="list-disc pl-5">
                    {type.examples.map((item) => (
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
            {ethicalGuidelines.map((guideline) => (
              <Card key={guideline.area}>
                <CardHeader>
                  <CardTitle>{guideline.area}</CardTitle>
                  <CardDescription>{guideline.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Principles:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {guideline.principles.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {guideline.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Practices:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {guideline.practices.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Standards:</h4>
                  <ul className="list-disc pl-5">
                    {guideline.standards.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="engagement">
          <div className="grid gap-4 md:grid-cols-2">
            {engagementStrategies.map((strategy) => (
              <Card key={strategy.strategy}>
                <CardHeader>
                  <CardTitle>{strategy.strategy}</CardTitle>
                  <CardDescription>{strategy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Methods:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {strategy.methods.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Tools:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {strategy.tools.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Outcomes:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {strategy.outcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5">
                    {strategy.challenges.map((item) => (
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