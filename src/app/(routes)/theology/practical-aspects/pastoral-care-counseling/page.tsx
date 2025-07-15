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
  title: "Pastoral Care and Counseling | Christian Practical Aspects",
  description: "Comprehensive guide to pastoral care, counseling methods, crisis intervention, and support systems in Christian ministry.",
  keywords: [
    "Pastoral Care",
    "Christian Counseling",
    "Crisis Intervention",
    "Spiritual Support",
    "Mental Health",
    "Pastoral Ministry",
    "Grief Support",
    "Family Counseling"
  ]
}

interface CareApproach {
  approach: string
  description: string
  methods: string[]
  principles: string[]
  applications: string[]
  considerations: string[]
}

interface CounselingMethod {
  method: string
  description: string
  techniques: string[]
  objectives: string[]
  limitations: string[]
  resources: string[]
}

interface CrisisIntervention {
  type: string
  description: string
  steps: string[]
  resources: string[]
  guidelines: string[]
  referrals: string[]
}

interface SupportSystem {
  area: string
  description: string
  services: string[]
  providers: string[]
  protocols: string[]
  training: string[]
}

const careApproaches: CareApproach[] = [
  {
    approach: "Holistic Pastoral Care",
    description: "Comprehensive care addressing spiritual, emotional, and practical needs",
    methods: [
      "Active listening",
      "Spiritual guidance",
      "Prayer support",
      "Resource connection",
      "Follow-up care"
    ],
    principles: [
      "Person-centered care",
      "Biblical foundation",
      "Cultural sensitivity",
      "Professional boundaries",
      "Confidentiality"
    ],
    applications: [
      "Individual support",
      "Family ministry",
      "Hospital visitation",
      "Grief support",
      "Life transitions"
    ],
    considerations: [
      "Cultural context",
      "Personal boundaries",
      "Professional limits",
      "Ethical guidelines",
      "Self-care needs"
    ]
  },
  {
    approach: "Preventive Care",
    description: "Proactive support and education to prevent crises",
    methods: [
      "Educational programs",
      "Support groups",
      "Life skills training",
      "Relationship building",
      "Community resources"
    ],
    principles: [
      "Early intervention",
      "Community support",
      "Skill development",
      "Resource access",
      "Ongoing assessment"
    ],
    applications: [
      "Marriage preparation",
      "Family education",
      "Financial counseling",
      "Conflict resolution",
      "Stress management"
    ],
    considerations: [
      "Resource availability",
      "Program accessibility",
      "Community needs",
      "Cultural factors",
      "Implementation timing"
    ]
  }
]

const counselingMethods: CounselingMethod[] = [
  {
    method: "Biblical Counseling",
    description: "Integration of biblical principles with counseling practice",
    techniques: [
      "Scripture application",
      "Prayer integration",
      "Spiritual assessment",
      "Biblical narrative",
      "Truth-centered dialogue"
    ],
    objectives: [
      "Spiritual growth",
      "Biblical wisdom",
      "Character development",
      "Life transformation",
      "Faith integration"
    ],
    limitations: [
      "Clinical needs",
      "Professional boundaries",
      "Scope of practice",
      "Mental health issues",
      "Crisis situations"
    ],
    resources: [
      "Biblical references",
      "Counseling guides",
      "Training materials",
      "Support networks",
      "Professional supervision"
    ]
  },
  {
    method: "Integrative Counseling",
    description: "Combining psychological insights with spiritual care",
    techniques: [
      "Therapeutic dialogue",
      "Cognitive approaches",
      "Emotional processing",
      "Behavioral strategies",
      "Spiritual integration"
    ],
    objectives: [
      "Emotional healing",
      "Mental health",
      "Relationship healing",
      "Personal growth",
      "Faith development"
    ],
    limitations: [
      "Professional training",
      "Ethical boundaries",
      "Legal requirements",
      "Complex cases",
      "Resource limits"
    ],
    resources: [
      "Professional networks",
      "Clinical supervision",
      "Training programs",
      "Research literature",
      "Assessment tools"
    ]
  }
]

const crisisInterventions: CrisisIntervention[] = [
  {
    type: "Acute Crisis Response",
    description: "Immediate support for urgent situations",
    steps: [
      "Safety assessment",
      "Immediate support",
      "Resource mobilization",
      "Professional referral",
      "Follow-up care"
    ],
    resources: [
      "Crisis hotlines",
      "Emergency services",
      "Mental health providers",
      "Support networks",
      "Community resources"
    ],
    guidelines: [
      "Safety first",
      "Clear communication",
      "Professional limits",
      "Documentation",
      "Team coordination"
    ],
    referrals: [
      "Emergency services",
      "Mental health",
      "Medical care",
      "Social services",
      "Support groups"
    ]
  },
  {
    type: "Grief Support",
    description: "Care for those experiencing loss and bereavement",
    steps: [
      "Initial contact",
      "Assessment",
      "Support planning",
      "Ongoing care",
      "Group integration"
    ],
    resources: [
      "Grief materials",
      "Support groups",
      "Counseling services",
      "Memorial resources",
      "Family support"
    ],
    guidelines: [
      "Presence ministry",
      "Emotional support",
      "Practical help",
      "Spiritual care",
      "Long-term support"
    ],
    referrals: [
      "Grief counselors",
      "Support groups",
      "Mental health",
      "Spiritual directors",
      "Family services"
    ]
  }
]

const supportSystems: SupportSystem[] = [
  {
    area: "Congregational Care",
    description: "Organized support within church community",
    services: [
      "Visitation ministry",
      "Prayer teams",
      "Meal support",
      "Transportation help",
      "Care groups"
    ],
    providers: [
      "Pastoral staff",
      "Care teams",
      "Trained volunteers",
      "Ministry leaders",
      "Support coordinators"
    ],
    protocols: [
      "Needs assessment",
      "Service coordination",
      "Communication flow",
      "Follow-up care",
      "Documentation"
    ],
    training: [
      "Basic care skills",
      "Communication",
      "Crisis response",
      "Resource knowledge",
      "Team coordination"
    ]
  },
  {
    area: "Professional Networks",
    description: "Connections with professional care providers",
    services: [
      "Counseling referrals",
      "Medical support",
      "Legal assistance",
      "Financial advice",
      "Specialized care"
    ],
    providers: [
      "Mental health",
      "Medical professionals",
      "Social workers",
      "Legal advisors",
      "Financial counselors"
    ],
    protocols: [
      "Referral process",
      "Information sharing",
      "Confidentiality",
      "Case management",
      "Professional boundaries"
    ],
    training: [
      "Referral skills",
      "Network building",
      "Resource management",
      "Documentation",
      "Collaboration"
    ]
  }
]

export default function PastoralCareCounselingPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Pastoral Care and Counseling</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="care">Care Approaches</TabsTrigger>
          <TabsTrigger value="counseling">Counseling</TabsTrigger>
          <TabsTrigger value="crisis">Crisis Care</TabsTrigger>
          <TabsTrigger value="support">Support Systems</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Understanding Pastoral Care and Counseling</CardTitle>
              <CardDescription>
                Comprehensive approach to providing spiritual and emotional support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Pastoral care and counseling combines spiritual guidance with
                practical support, offering comprehensive care for individuals,
                families, and communities through various approaches and methods.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="care">
          <div className="grid gap-4 md:grid-cols-2">
            {careApproaches.map((approach) => (
              <Card key={approach.approach}>
                <CardHeader>
                  <CardTitle>{approach.approach}</CardTitle>
                  <CardDescription>{approach.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Methods:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {approach.methods.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Principles:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {approach.principles.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Applications:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {approach.applications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Considerations:</h4>
                  <ul className="list-disc pl-5">
                    {approach.considerations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="counseling">
          <div className="grid gap-4 md:grid-cols-2">
            {counselingMethods.map((method) => (
              <Card key={method.method}>
                <CardHeader>
                  <CardTitle>{method.method}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Techniques:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {method.techniques.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Objectives:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {method.objectives.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Limitations:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {method.limitations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Resources:</h4>
                  <ul className="list-disc pl-5">
                    {method.resources.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="crisis">
          <div className="grid gap-4 md:grid-cols-2">
            {crisisInterventions.map((intervention) => (
              <Card key={intervention.type}>
                <CardHeader>
                  <CardTitle>{intervention.type}</CardTitle>
                  <CardDescription>{intervention.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Steps:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {intervention.steps.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Resources:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {intervention.resources.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Guidelines:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {intervention.guidelines.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Referrals:</h4>
                  <ul className="list-disc pl-5">
                    {intervention.referrals.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="support">
          <div className="grid gap-4 md:grid-cols-2">
            {supportSystems.map((system) => (
              <Card key={system.area}>
                <CardHeader>
                  <CardTitle>{system.area}</CardTitle>
                  <CardDescription>{system.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Services:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {system.services.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Providers:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {system.providers.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Protocols:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {system.protocols.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Training:</h4>
                  <ul className="list-disc pl-5">
                    {system.training.map((item) => (
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