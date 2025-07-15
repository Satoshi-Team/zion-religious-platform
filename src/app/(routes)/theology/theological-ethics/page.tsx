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
  title: "Theological Ethics | Christian Moral Theology",
  description: "Comprehensive exploration of Christian ethical principles, moral theology, and ethical decision-making.",
  keywords: [
    "Theological Ethics",
    "Christian Ethics",
    "Moral Theology",
    "Biblical Ethics",
    "Christian Morality",
    "Virtue Ethics",
    "Social Ethics"
  ]
}

interface EthicalPrinciple {
  principle: string
  description: string
  biblicalFoundation: string[]
  applications: string[]
}

interface VirtueCategory {
  category: string
  description: string
  virtues: {
    name: string
    description: string
    biblicalExample: string
  }[]
}

interface EthicalIssue {
  topic: string
  description: string
  keyConsiderations: string[]
  biblicalPrinciples: string[]
  challenges: string[]
}

interface Approach {
  name: string
  description: string
  keyProponents: string[]
  mainPrinciples: string[]
  strengths: string[]
  limitations: string[]
}

const ethicalPrinciples: EthicalPrinciple[] = [
  {
    principle: "Love of God and Neighbor",
    description: "The foundational principle of Christian ethics based on Jesus' summary of the law",
    biblicalFoundation: [
      "Matthew 22:37-40",
      "1 John 4:19-21",
      "Deuteronomy 6:5"
    ],
    applications: [
      "Worship and devotion to God",
      "Service to others",
      "Care for creation",
      "Social justice"
    ]
  },
  {
    principle: "Sanctity of Life",
    description: "Recognition of human life's sacred value as created in God's image",
    biblicalFoundation: [
      "Genesis 1:27",
      "Psalm 139:13-16",
      "Exodus 20:13"
    ],
    applications: [
      "Bioethical decisions",
      "Human rights advocacy",
      "Care for vulnerable",
      "Opposition to violence"
    ]
  },
  {
    principle: "Justice and Righteousness",
    description: "Commitment to moral uprightness and fair treatment of all",
    biblicalFoundation: [
      "Micah 6:8",
      "Amos 5:24",
      "Isaiah 1:17"
    ],
    applications: [
      "Economic ethics",
      "Social reform",
      "Legal justice",
      "Environmental stewardship"
    ]
  }
]

const virtueCategories: VirtueCategory[] = [
  {
    category: "Theological Virtues",
    description: "Core virtues given by divine grace",
    virtues: [
      {
        name: "Faith",
        description: "Trust and belief in God and His promises",
        biblicalExample: "Hebrews 11 - Faith Hall of Fame"
      },
      {
        name: "Hope",
        description: "Confident expectation in God's future",
        biblicalExample: "Romans 8:24-25"
      },
      {
        name: "Love",
        description: "Selfless commitment to God and others",
        biblicalExample: "1 Corinthians 13"
      }
    ]
  },
  {
    category: "Cardinal Virtues",
    description: "Classical moral virtues affirmed in Christian tradition",
    virtues: [
      {
        name: "Prudence",
        description: "Practical wisdom in moral decisions",
        biblicalExample: "Proverbs 8"
      },
      {
        name: "Justice",
        description: "Giving to each their due",
        biblicalExample: "Micah 6:8"
      },
      {
        name: "Temperance",
        description: "Self-control and moderation",
        biblicalExample: "Galatians 5:23"
      }
    ]
  }
]

const contemporaryIssues: EthicalIssue[] = [
  {
    topic: "Bioethics",
    description: "Ethical issues in medicine and biotechnology",
    keyConsiderations: [
      "Sanctity of life",
      "Human dignity",
      "Stewardship of technology",
      "Care for vulnerable"
    ],
    biblicalPrinciples: [
      "Image of God",
      "Healing ministry",
      "Compassion",
      "Wisdom"
    ],
    challenges: [
      "Rapid technological advancement",
      "Competing values",
      "Limited resources",
      "Complex decisions"
    ]
  },
  {
    topic: "Environmental Ethics",
    description: "Moral responsibility for creation care",
    keyConsiderations: [
      "Creation stewardship",
      "Intergenerational justice",
      "Sustainable development",
      "Animal welfare"
    ],
    biblicalPrinciples: [
      "Creation mandate",
      "Sabbath rest",
      "Future hope",
      "Responsible dominion"
    ],
    challenges: [
      "Economic pressures",
      "Global coordination",
      "Scientific complexity",
      "Urgent action needed"
    ]
  }
]

const ethicalApproaches: Approach[] = [
  {
    name: "Virtue Ethics",
    description: "Focus on character formation and moral excellence",
    keyProponents: [
      "Augustine",
      "Thomas Aquinas",
      "Alasdair MacIntyre"
    ],
    mainPrinciples: [
      "Character development",
      "Virtue cultivation",
      "Community formation",
      "Narrative importance"
    ],
    strengths: [
      "Holistic approach",
      "Character emphasis",
      "Community context",
      "Practical wisdom"
    ],
    limitations: [
      "Complex situations",
      "Cultural differences",
      "Measurement difficulty"
    ]
  },
  {
    name: "Divine Command Theory",
    description: "Moral obligations based on God's commands",
    keyProponents: [
      "William Lane Craig",
      "Robert Adams",
      "John Hare"
    ],
    mainPrinciples: [
      "Divine authority",
      "Moral absolutes",
      "Biblical commands",
      "Obedience"
    ],
    strengths: [
      "Clear standards",
      "Divine foundation",
      "Moral certainty"
    ],
    limitations: [
      "Interpretation challenges",
      "Application complexity",
      "Cultural context"
    ]
  }
]

export default function TheologicalEthicsPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Theological Ethics</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="principles">Principles</TabsTrigger>
          <TabsTrigger value="virtues">Virtues</TabsTrigger>
          <TabsTrigger value="issues">Contemporary Issues</TabsTrigger>
          <TabsTrigger value="approaches">Approaches</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Understanding Theological Ethics</CardTitle>
              <CardDescription>
                Christian moral theology and ethical decision-making
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Theological ethics examines moral principles, virtues, and decision-making
                from a Christian perspective. It integrates biblical teaching,
                theological reflection, and practical wisdom for moral living in
                contemporary contexts.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="principles">
          <div className="grid gap-4 md:grid-cols-2">
            {ethicalPrinciples.map((principle) => (
              <Card key={principle.principle}>
                <CardHeader>
                  <CardTitle>{principle.principle}</CardTitle>
                  <CardDescription>{principle.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Biblical Foundation:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {principle.biblicalFoundation.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Applications:</h4>
                  <ul className="list-disc pl-5">
                    {principle.applications.map((application) => (
                      <li key={application}>{application}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="virtues">
          <div className="grid gap-4 md:grid-cols-2">
            {virtueCategories.map((category) => (
              <Card key={category.category}>
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {category.virtues.map((virtue) => (
                    <div key={virtue.name} className="mb-4">
                      <h4 className="font-semibold">{virtue.name}</h4>
                      <p className="mb-1">{virtue.description}</p>
                      <p className="text-sm text-gray-600">
                        Biblical Example: {virtue.biblicalExample}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="issues">
          <div className="grid gap-4 md:grid-cols-2">
            {contemporaryIssues.map((issue) => (
              <Card key={issue.topic}>
                <CardHeader>
                  <CardTitle>{issue.topic}</CardTitle>
                  <CardDescription>{issue.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Key Considerations:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {issue.keyConsiderations.map((consideration) => (
                      <li key={consideration}>{consideration}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Biblical Principles:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {issue.biblicalPrinciples.map((principle) => (
                      <li key={principle}>{principle}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5">
                    {issue.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="approaches">
          <div className="grid gap-4 md:grid-cols-2">
            {ethicalApproaches.map((approach) => (
              <Card key={approach.name}>
                <CardHeader>
                  <CardTitle>{approach.name}</CardTitle>
                  <CardDescription>{approach.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Key Proponents:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {approach.keyProponents.map((proponent) => (
                      <li key={proponent}>{proponent}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Main Principles:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {approach.mainPrinciples.map((principle) => (
                      <li key={principle}>{principle}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Strengths:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {approach.strengths.map((strength) => (
                      <li key={strength}>{strength}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Limitations:</h4>
                  <ul className="list-disc pl-5">
                    {approach.limitations.map((limitation) => (
                      <li key={limitation}>{limitation}</li>
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