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
  title: "Systematic Theology | Christian Doctrinal System",
  description: "Comprehensive exploration of systematic theology, including doctrinal loci, methodological approaches, and theological systems.",
  keywords: [
    "Systematic Theology",
    "Christian Doctrine",
    "Theological Method",
    "Doctrinal Systems",
    "Theological Integration",
    "Biblical Theology",
    "Dogmatics"
  ]
}

interface DoctrinalLocus {
  name: string
  description: string
  keyTopics: string[]
  primarySources: string[]
  keyThinkers: string[]
}

interface Method {
  name: string
  description: string
  principles: string[]
  strengths: string[]
  challenges: string[]
}

interface Tradition {
  name: string
  description: string
  distinctives: string[]
  keyWorks: string[]
  representatives: string[]
}

interface Integration {
  aspect: string
  description: string
  importance: string[]
  examples: string[]
}

const doctrinalLoci: DoctrinalLocus[] = [
  {
    name: "Theology Proper",
    description: "The doctrine of God's nature, attributes, and works",
    keyTopics: [
      "Divine attributes",
      "Trinity",
      "Divine sovereignty",
      "God's relationship to creation"
    ],
    primarySources: [
      "Biblical revelation",
      "Creeds and confessions",
      "Natural theology",
      "Philosophical theology"
    ],
    keyThinkers: [
      "Augustine",
      "Thomas Aquinas",
      "Karl Barth",
      "John Frame"
    ]
  },
  {
    name: "Christology",
    description: "The doctrine of the person and work of Christ",
    keyTopics: [
      "Incarnation",
      "Two natures of Christ",
      "Atonement",
      "Resurrection"
    ],
    primarySources: [
      "Gospel accounts",
      "Pauline epistles",
      "Chalcedonian Definition",
      "Patristic writings"
    ],
    keyThinkers: [
      "Athanasius",
      "Cyril of Alexandria",
      "Martin Luther",
      "Karl Barth"
    ]
  },
  {
    name: "Soteriology",
    description: "The doctrine of salvation",
    keyTopics: [
      "Election",
      "Justification",
      "Sanctification",
      "Perseverance"
    ],
    primarySources: [
      "Pauline epistles",
      "Gospel of John",
      "Reformed confessions",
      "Theological treatises"
    ],
    keyThinkers: [
      "Augustine",
      "John Calvin",
      "Jonathan Edwards",
      "Herman Bavinck"
    ]
  }
]

const theologicalMethods: Method[] = [
  {
    name: "Biblical-Systematic Method",
    description: "Integration of biblical and systematic theological approaches",
    principles: [
      "Scripture as primary source",
      "Systematic organization",
      "Biblical-theological development",
      "Contemporary application"
    ],
    strengths: [
      "Biblical fidelity",
      "Systematic coherence",
      "Historical awareness",
      "Practical relevance"
    ],
    challenges: [
      "Balancing biblical and systematic concerns",
      "Handling diverse biblical data",
      "Contemporary contextualization",
      "Methodological complexity"
    ]
  },
  {
    name: "Historical-Dogmatic Method",
    description: "Analysis of doctrine through historical development",
    principles: [
      "Historical investigation",
      "Dogmatic formulation",
      "Tradition engagement",
      "Contemporary reformulation"
    ],
    strengths: [
      "Historical depth",
      "Traditional wisdom",
      "Doctrinal development",
      "Ecumenical awareness"
    ],
    challenges: [
      "Historical distance",
      "Cultural translation",
      "Contemporary relevance",
      "Theological innovation"
    ]
  }
]

const theologicalTraditions: Tradition[] = [
  {
    name: "Reformed Systematic Theology",
    description: "Theological system emphasizing divine sovereignty and covenant",
    distinctives: [
      "Divine sovereignty",
      "Covenant theology",
      "Reformed soteriology",
      "Biblical authority"
    ],
    keyWorks: [
      "Calvin's Institutes",
      "Bavinck's Reformed Dogmatics",
      "Berkhof's Systematic Theology"
    ],
    representatives: [
      "John Calvin",
      "Herman Bavinck",
      "Louis Berkhof",
      "Michael Horton"
    ]
  },
  {
    name: "Lutheran Systematic Theology",
    description: "Theological system emphasizing Law and Gospel distinction",
    distinctives: [
      "Law-Gospel dialectic",
      "Christological focus",
      "Sacramental theology",
      "Proper distinction of God's Word"
    ],
    keyWorks: [
      "Melanchthon's Loci Communes",
      "Chemnitz's Loci Theologici",
      "Pieper's Christian Dogmatics"
    ],
    representatives: [
      "Martin Luther",
      "Philip Melanchthon",
      "Martin Chemnitz",
      "Robert Kolb"
    ]
  }
]

const theologicalIntegration: Integration[] = [
  {
    aspect: "Biblical and Systematic Integration",
    description: "Integration of biblical and systematic theological methods",
    importance: [
      "Biblical foundation",
      "Systematic coherence",
      "Theological development",
      "Contemporary application"
    ],
    examples: [
      "Covenant theology",
      "Biblical theology of redemption",
      "Systematic exposition of doctrine",
      "Contemporary theological construction"
    ]
  },
  {
    aspect: "Historical and Contemporary Integration",
    description: "Integration of historical insights with contemporary concerns",
    importance: [
      "Historical awareness",
      "Contemporary relevance",
      "Cultural engagement",
      "Theological development"
    ],
    examples: [
      "Retrieval theology",
      "Contemporary reformulation",
      "Cultural contextualization",
      "Theological innovation"
    ]
  }
]

export default function SystematicTheologyPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Systematic Theology</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="loci">Doctrinal Loci</TabsTrigger>
          <TabsTrigger value="methods">Methods</TabsTrigger>
          <TabsTrigger value="traditions">Traditions</TabsTrigger>
          <TabsTrigger value="integration">Integration</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Understanding Systematic Theology</CardTitle>
              <CardDescription>
                The systematic organization and exposition of Christian doctrine
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Systematic theology organizes Christian doctrine into a coherent,
                comprehensive system. It integrates biblical, historical, and
                philosophical insights while addressing contemporary questions
                and challenges.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="loci">
          <div className="grid gap-4 md:grid-cols-2">
            {doctrinalLoci.map((locus) => (
              <Card key={locus.name}>
                <CardHeader>
                  <CardTitle>{locus.name}</CardTitle>
                  <CardDescription>{locus.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Key Topics:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {locus.keyTopics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Primary Sources:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {locus.primarySources.map((source) => (
                      <li key={source}>{source}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Key Thinkers:</h4>
                  <ul className="list-disc pl-5">
                    {locus.keyThinkers.map((thinker) => (
                      <li key={thinker}>{thinker}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="methods">
          <div className="grid gap-4 md:grid-cols-2">
            {theologicalMethods.map((method) => (
              <Card key={method.name}>
                <CardHeader>
                  <CardTitle>{method.name}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Principles:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {method.principles.map((principle) => (
                      <li key={principle}>{principle}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Strengths:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {method.strengths.map((strength) => (
                      <li key={strength}>{strength}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5">
                    {method.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="traditions">
          <div className="grid gap-4 md:grid-cols-2">
            {theologicalTraditions.map((tradition) => (
              <Card key={tradition.name}>
                <CardHeader>
                  <CardTitle>{tradition.name}</CardTitle>
                  <CardDescription>{tradition.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Distinctives:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {tradition.distinctives.map((distinctive) => (
                      <li key={distinctive}>{distinctive}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Key Works:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {tradition.keyWorks.map((work) => (
                      <li key={work}>{work}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Representatives:</h4>
                  <ul className="list-disc pl-5">
                    {tradition.representatives.map((representative) => (
                      <li key={representative}>{representative}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="integration">
          <div className="grid gap-4 md:grid-cols-2">
            {theologicalIntegration.map((integration) => (
              <Card key={integration.aspect}>
                <CardHeader>
                  <CardTitle>{integration.aspect}</CardTitle>
                  <CardDescription>{integration.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Importance:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {integration.importance.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Examples:</h4>
                  <ul className="list-disc pl-5">
                    {integration.examples.map((example) => (
                      <li key={example}>{example}</li>
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