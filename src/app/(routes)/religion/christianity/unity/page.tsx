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
  title: "Unity Church | New Thought Christianity",
  description: "Comprehensive guide to Unity Church, including its principles, practices, and contemporary expressions.",
  keywords: [
    "Unity Church",
    "New Thought",
    "Practical Christianity",
    "Spiritual healing",
    "Metaphysical interpretation",
    "Positive prayer",
    "Meditation"
  ]
}

interface Principle {
  name: string
  description: string
  application: string[]
  teachings: string[]
  practices: string[]
}

interface Practice {
  name: string
  description: string
  method: string[]
  benefits: string[]
  resources: string[]
}

interface Center {
  name: string
  location: string
  established: string
  programs: string[]
  ministries: string[]
  website?: string
}

interface Publication {
  name: string
  type: string
  description: string
  audience: string[]
  content: string[]
  website?: string
}

const corePrinciples: Principle[] = [
  {
    name: "Divine Nature",
    description: "Recognition of the divine presence within all people.",
    application: [
      "Personal empowerment",
      "Spiritual awareness",
      "Inner guidance",
      "Self-realization"
    ],
    teachings: [
      "God as Divine Mind",
      "Christ Consciousness",
      "Spiritual identity",
      "Divine potential"
    ],
    practices: [
      "Affirmative prayer",
      "Meditation",
      "Spiritual study",
      "Self-reflection"
    ]
  },
  {
    name: "Power of Thought",
    description: "Understanding the creative power of thought and consciousness.",
    application: [
      "Positive thinking",
      "Mental healing",
      "Consciousness transformation",
      "Life manifestation"
    ],
    teachings: [
      "Law of Mind Action",
      "Thought causation",
      "Mental equivalents",
      "Consciousness development"
    ],
    practices: [
      "Affirmations",
      "Visualization",
      "Mindfulness",
      "Denials"
    ]
  }
]

const spiritualPractices: Practice[] = [
  {
    name: "Affirmative Prayer",
    description: "Recognition and alignment with divine truth through positive declaration.",
    method: [
      "Recognition of divine presence",
      "Declaration of truth",
      "Gratitude expression",
      "Release and acceptance"
    ],
    benefits: [
      "Mental clarity",
      "Emotional healing",
      "Spiritual alignment",
      "Life transformation"
    ],
    resources: [
      "Daily Word magazine",
      "Prayer ministry",
      "Online resources",
      "Prayer workshops"
    ]
  },
  {
    name: "Meditation",
    description: "Silent communion with divine presence and inner wisdom.",
    method: [
      "Centering practice",
      "Breath awareness",
      "Sacred silence",
      "Spiritual listening"
    ],
    benefits: [
      "Inner peace",
      "Spiritual insight",
      "Divine guidance",
      "Personal transformation"
    ],
    resources: [
      "Meditation guides",
      "Online sessions",
      "Retreat programs",
      "Audio resources"
    ]
  }
]

const unityCenters: Center[] = [
  {
    name: "Unity Village",
    location: "Unity Village, Missouri",
    established: "1929",
    programs: [
      "Spiritual education",
      "Minister training",
      "Retreat programs",
      "Prayer ministry"
    ],
    ministries: [
      "Silent Unity",
      "Unity World Headquarters",
      "Unity Institute",
      "Publishing ministry"
    ],
    website: "https://www.unity.org"
  },
  {
    name: "Unity Temple on the Plaza",
    location: "Kansas City, Missouri",
    established: "1889",
    programs: [
      "Worship services",
      "Education classes",
      "Community outreach",
      "Youth ministry"
    ],
    ministries: [
      "Prayer support",
      "Spiritual counseling",
      "Music ministry",
      "Social action"
    ],
    website: "https://www.unitytemple.com"
  }
]

const publications: Publication[] = [
  {
    name: "Daily Word",
    type: "Magazine",
    description: "Daily devotional magazine offering spiritual inspiration and guidance.",
    audience: [
      "Unity members",
      "Spiritual seekers",
      "Prayer practitioners",
      "General public"
    ],
    content: [
      "Daily meditations",
      "Affirmative prayers",
      "Inspirational articles",
      "Personal testimonies"
    ],
    website: "https://www.dailyword.com"
  },
  {
    name: "Unity Magazine",
    type: "Bi-monthly publication",
    description: "Magazine exploring spiritual principles and practical application.",
    audience: [
      "Unity students",
      "New Thought practitioners",
      "Spiritual explorers",
      "Religious scholars"
    ],
    content: [
      "Feature articles",
      "Spiritual teachings",
      "Personal growth",
      "Practical spirituality"
    ],
    website: "https://www.unitymagazine.org"
  }
]

export default function UnityChurchPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-center mb-8">Unity Church</h1>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="principles">Principles</TabsTrigger>
            <TabsTrigger value="practices">Practices</TabsTrigger>
            <TabsTrigger value="centers">Centers</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Unity Church Overview</CardTitle>
                <CardDescription>
                  A positive, practical approach to Christianity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Unity Church is a New Thought Christian organization emphasizing
                  practical spirituality, positive thinking, and healing through prayer.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium mb-2">Historical Roots</h3>
                    <p className="text-sm">
                      Founded by Charles and Myrtle Fillmore in 1889, combining
                      Christian teaching with metaphysical interpretation.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium mb-2">Contemporary Expression</h3>
                    <p className="text-sm">
                      Global spiritual movement offering practical spiritual tools
                      for personal transformation and healing.
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
                  Foundational teachings and their application
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {corePrinciples.map((principle) => (
                  <div key={principle.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{principle.name}</h3>
                    <p className="text-sm mt-2">{principle.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Application:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {principle.application.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Teachings:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {principle.teachings.map((teaching, index) => (
                          <li key={index}>{teaching}</li>
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
                <CardTitle>Spiritual Practices</CardTitle>
                <CardDescription>
                  Methods for spiritual growth and healing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {spiritualPractices.map((practice) => (
                  <div key={practice.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{practice.name}</h3>
                    <p className="text-sm mt-2">{practice.description}</p>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Method:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {practice.method.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Benefits:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {practice.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="centers">
            <Card>
              <CardHeader>
                <CardTitle>Unity Centers</CardTitle>
                <CardDescription>
                  Major Unity facilities and their programs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {unityCenters.map((center) => (
                  <div key={center.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{center.name}</h3>
                    <p className="text-sm mt-2">
                      <span className="font-medium">Location:</span> {center.location}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Established:</span> {center.established}
                    </p>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Programs:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {center.programs.map((program, index) => (
                            <li key={index}>{program}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Ministries:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {center.ministries.map((ministry, index) => (
                            <li key={index}>{ministry}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {center.website && (
                      <div className="mt-4">
                        <a
                          href={center.website}
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

          <TabsContent value="resources">
            <Card>
              <CardHeader>
                <CardTitle>Publications and Resources</CardTitle>
                <CardDescription>
                  Unity literature and educational materials
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {publications.map((publication) => (
                  <div key={publication.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{publication.name}</h3>
                    <p className="text-sm mt-2">{publication.description}</p>
                    <div className="grid gap-4 mt-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium">Audience:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {publication.audience.map((group, index) => (
                            <li key={index}>{group}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Content:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {publication.content.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {publication.website && (
                      <div className="mt-4">
                        <a
                          href={publication.website}
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
        </Tabs>
      </div>
    </div>
  )
} 