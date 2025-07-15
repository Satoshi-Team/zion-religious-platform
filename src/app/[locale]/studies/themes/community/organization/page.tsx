import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Community Organization & Structure | Sacred Studies",
  description: "Explore how religious communities organize themselves, make decisions, and manage resources. In-depth analysis of governance structures, decision-making processes, and community development.",
  openGraph: {
    title: "Religious Community Organization & Structure",
    description: "Comprehensive guide to religious community organization and governance across traditions.",
    type: "website",
    images: [{ url: "/images/og/community-organization.jpg" }]
  },
  keywords: [
    "religious organization",
    "community structure",
    "religious governance",
    "decision making",
    "resource management",
    "community development",
    "religious administration",
    "community planning",
    "religious institutions",
    "organizational leadership"
  ]
}

interface GovernanceStructure {
  model: string
  overview: string
  elements: {
    name: string
    description: string
    features: string[]
    processes: string[]
    challenges: string[]
    adaptations: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const governanceStructures: GovernanceStructure[] = [
  {
    model: "Traditional Hierarchical",
    overview: "Established religious governance structures with clear authority lines",
    elements: [
      {
        name: "Ecclesiastical Hierarchy",
        description: "Structured leadership and decision-making authority",
        features: [
          "Clear authority lines",
          "Defined roles and responsibilities",
          "Established protocols",
          "Historical continuity"
        ],
        processes: [
          "Top-down decision making",
          "Formal consultation",
          "Policy implementation",
          "Tradition preservation"
        ],
        challenges: [
          "Adapting to change",
          "Modern relevance",
          "Communication flow",
          "Representation issues"
        ],
        adaptations: [
          "Digital communication",
          "Collaborative leadership",
          "Transparency initiatives",
          "Community feedback"
        ]
      },
      {
        name: "Democratic Elements",
        description: "Incorporating community input and participatory processes",
        features: [
          "Community voting",
          "Representative bodies",
          "Open forums",
          "Consensus building"
        ],
        processes: [
          "Community consultation",
          "Collective decision-making",
          "Policy review",
          "Feedback systems"
        ],
        challenges: [
          "Balancing traditions",
          "Decision efficiency",
          "Diverse perspectives",
          "Implementation time"
        ],
        adaptations: [
          "Hybrid models",
          "Online participation",
          "Working groups",
          "Regular reviews"
        ]
      }
    ],
    resources: [
      {
        title: "Religious Governance: Traditional and Modern Approaches",
        link: "https://www.amazon.com/Religious-Governance-Traditional-Modern-Approaches/dp/0800698345?tag=zion0ba-20",
        description: "Comprehensive guide to religious governance structures"
      }
    ]
  }
]

interface DecisionProcess {
  category: string
  description: string
  methods: {
    name: string
    approaches: string[]
    tools: string[]
    outcomes: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const decisionProcesses: DecisionProcess[] = [
  {
    category: "Community Decision-Making",
    description: "Methods and processes for collective decision-making in religious communities",
    methods: [
      {
        name: "Consensus Building",
        approaches: [
          "Group discussion",
          "Spiritual discernment",
          "Collaborative planning",
          "Inclusive dialogue"
        ],
        tools: [
          "Facilitated meetings",
          "Prayer and reflection",
          "Documentation systems",
          "Communication platforms"
        ],
        outcomes: [
          "Shared ownership",
          "Community buy-in",
          "Sustainable decisions",
          "Stronger relationships"
        ]
      },
      {
        name: "Strategic Planning",
        approaches: [
          "Vision development",
          "Resource assessment",
          "Action planning",
          "Implementation strategy"
        ],
        tools: [
          "Planning workshops",
          "Assessment tools",
          "Project management",
          "Evaluation systems"
        ],
        outcomes: [
          "Clear direction",
          "Resource alignment",
          "Measurable progress",
          "Community growth"
        ]
      }
    ],
    resources: [
      {
        title: "Religious Community Decision-Making",
        link: "https://www.amazon.com/Religious-Community-Decision-Making-Guide/dp/0800698345?tag=zion0ba-20",
        description: "Guide to decision-making processes in religious communities"
      }
    ]
  }
]

interface ResourceManagement {
  category: string
  description: string
  systems: {
    name: string
    components: string[]
    practices: string[]
    benefits: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const resourceManagement: ResourceManagement[] = [
  {
    category: "Community Resources",
    description: "Systems and practices for managing community resources effectively",
    systems: [
      {
        name: "Financial Stewardship",
        components: [
          "Budget planning",
          "Financial oversight",
          "Donation management",
          "Expense tracking"
        ],
        practices: [
          "Transparent reporting",
          "Regular audits",
          "Policy compliance",
          "Resource allocation"
        ],
        benefits: [
          "Financial stability",
          "Community trust",
          "Sustainable operations",
          "Growth capacity"
        ]
      },
      {
        name: "Facility Management",
        components: [
          "Property maintenance",
          "Space utilization",
          "Safety protocols",
          "Environmental care"
        ],
        practices: [
          "Regular maintenance",
          "Usage scheduling",
          "Safety inspections",
          "Green initiatives"
        ],
        benefits: [
          "Optimal use",
          "Cost efficiency",
          "Safe environment",
          "Sustainability"
        ]
      }
    ],
    resources: [
      {
        title: "Religious Community Resource Management",
        link: "https://www.amazon.com/Religious-Community-Resource-Management/dp/0800698345?tag=zion0ba-20",
        description: "Guide to managing resources in religious communities"
      }
    ]
  }
]

export default function CommunityOrganizationPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Religious Community Organization & Structure</h1>
          <p className="text-xl text-muted-foreground">
            Explore how religious communities organize themselves, make decisions, and manage resources
          </p>
        </section>

        <Tabs defaultValue="governance" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="governance">Governance Structures</TabsTrigger>
            <TabsTrigger value="decisions">Decision Processes</TabsTrigger>
            <TabsTrigger value="resources">Resource Management</TabsTrigger>
          </TabsList>

          <TabsContent value="governance" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {governanceStructures.map((structure) => (
                <Card key={structure.model}>
                  <CardHeader>
                    <CardTitle>{structure.model}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{structure.overview}</p>

                      {structure.elements.map((element) => (
                        <div key={element.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{element.name}</h3>
                          <p className="text-muted-foreground">{element.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Features</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {element.features.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Processes</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {element.processes.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Challenges</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {element.challenges.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Adaptations</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {element.adaptations.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {structure.resources.map((resource) => (
                          <div key={resource.title} className="space-y-1">
                            <a
                              href={resource.link}
                              className="block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {resource.title}
                            </a>
                            <p className="text-sm text-muted-foreground text-center">{resource.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="decisions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {decisionProcesses.map((process) => (
                <Card key={process.category}>
                  <CardHeader>
                    <CardTitle>{process.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{process.description}</p>

                      {process.methods.map((method) => (
                        <div key={method.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{method.name}</h3>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Approaches</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {method.approaches.map((approach) => (
                                  <li key={approach}>{approach}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Tools</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {method.tools.map((tool) => (
                                  <li key={tool}>{tool}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Outcomes</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {method.outcomes.map((outcome) => (
                                <li key={outcome}>{outcome}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {process.resources.map((resource) => (
                          <div key={resource.title} className="space-y-1">
                            <a
                              href={resource.link}
                              className="block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {resource.title}
                            </a>
                            <p className="text-sm text-muted-foreground text-center">{resource.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {resourceManagement.map((management) => (
                <Card key={management.category}>
                  <CardHeader>
                    <CardTitle>{management.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{management.description}</p>

                      {management.systems.map((system) => (
                        <div key={system.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{system.name}</h3>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Components</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {system.components.map((component) => (
                                  <li key={component}>{component}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Practices</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {system.practices.map((practice) => (
                                  <li key={practice}>{practice}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Benefits</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {system.benefits.map((benefit) => (
                                <li key={benefit}>{benefit}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {management.resources.map((resource) => (
                          <div key={resource.title} className="space-y-1">
                            <a
                              href={resource.link}
                              className="block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {resource.title}
                            </a>
                            <p className="text-sm text-muted-foreground text-center">{resource.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/studies/themes/community/leadership"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Leadership →
            </Link>
            <Link 
              href="/studies/themes/community/congregations"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Congregations →
            </Link>
            <Link 
              href="/studies/themes/community/monastic"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Monastic Communities →
            </Link>
            <Link 
              href="/studies/practices/administration"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Administration →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <Link 
              href="/studies/practices/governance"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Governance →
            </Link>
            <Link 
              href="/studies/philosophy/ethics"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Ethics →
            </Link>
            <Link 
              href="/studies/themes/spirituality/formation"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Spiritual Formation →
            </Link>
            <Link 
              href="/studies/practices/teaching"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Teaching →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 