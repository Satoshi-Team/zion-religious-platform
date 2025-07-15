import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sacred Music | Religious Practices",
  description: "Comprehensive study of sacred music practices across religious traditions, including their structure, historical context, and contemporary applications.",
  keywords: "sacred music, religious music, devotional music, spiritual music, religious chanting, sacred songs, religious hymns, spiritual practices, religious traditions, musical worship"
}

interface MusicTradition {
  tradition: string
  overview: string
  practices: {
    name: string
    description: string
    principles: string[]
    methods: string[]
    significance: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const musicTraditions: MusicTradition[] = [
  {
    tradition: "Devotional Music",
    overview: "Sacred music practices focused on devotion and spiritual connection",
    practices: [
      {
        name: "Sacred Chanting",
        description: "Traditional chanting and vocal practices",
        principles: [
          "Sacred sound",
          "Divine resonance",
          "Spiritual vibration",
          "Heart connection"
        ],
        methods: [
          "Mantra chanting",
          "Sacred recitation",
          "Devotional singing",
          "Spiritual hymns"
        ],
        significance: [
          "Divine communion",
          "Spiritual elevation",
          "Heart opening",
          "Sacred presence"
        ]
      },
      {
        name: "Sacred Instruments",
        description: "Traditional musical instruments in sacred practice",
        principles: [
          "Sacred resonance",
          "Divine vibration",
          "Spiritual harmony",
          "Sacred rhythm"
        ],
        methods: [
          "Instrumental accompaniment",
          "Ritual music",
          "Sacred performance",
          "Devotional music"
        ],
        significance: [
          "Divine connection",
          "Spiritual atmosphere",
          "Sacred celebration",
          "Community unity"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Sound: The Power of Music in Spiritual Practice",
        link: "https://www.amazon.com/Sacred-Sound-Power-Music-Spiritual/dp/089281767X?tag=zion0ba-20",
        description: "Comprehensive guide to sacred music practices"
      },
      {
        title: "The Power of Sacred Music",
        link: "https://www.amazon.com/Power-Sacred-Music-Spiritual-Practice/dp/0892817688?tag=zion0ba-20",
        description: "Overview of sacred music traditions"
      }
    ]
  },
  {
    tradition: "Ritual Music",
    overview: "Music in sacred ceremonies and ritual practices",
    practices: [
      {
        name: "Ceremonial Music",
        description: "Music in sacred ceremonies and rituals",
        principles: [
          "Sacred timing",
          "Ritual form",
          "Divine presence",
          "Sacred space"
        ],
        methods: [
          "Processional music",
          "Ritual accompaniment",
          "Sacred performance",
          "Ceremonial songs"
        ],
        significance: [
          "Sacred atmosphere",
          "Ritual enhancement",
          "Divine blessing",
          "Community participation"
        ]
      },
      {
        name: "Festival Music",
        description: "Music in religious festivals and celebrations",
        principles: [
          "Joyful expression",
          "Community celebration",
          "Sacred tradition",
          "Cultural heritage"
        ],
        methods: [
          "Festival songs",
          "Celebratory music",
          "Traditional melodies",
          "Community singing"
        ],
        significance: [
          "Cultural preservation",
          "Community unity",
          "Spiritual celebration",
          "Sacred joy"
        ]
      }
    ],
    resources: [
      {
        title: "Ritual Music: A Guide to Sacred Ceremonies",
        link: "https://www.amazon.com/Ritual-Music-Guide-Sacred-Ceremonies/dp/0892817696?tag=zion0ba-20",
        description: "Guide to ritual music practices"
      },
      {
        title: "Festival Music: Sacred Celebrations",
        link: "https://www.amazon.com/Festival-Music-Sacred-Celebrations-Traditions/dp/089281770X?tag=zion0ba-20",
        description: "Overview of festival music traditions"
      }
    ]
  }
]

interface PracticeMethod {
  method: string
  description: string
  aspects: {
    name: string
    principles: string[]
    practices: string[]
    applications: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const practiceMethods: PracticeMethod[] = [
  {
    method: "Sacred Music Practice",
    description: "Methods for engaging in sacred music practices",
    aspects: [
      {
        name: "Vocal Practice",
        principles: [
          "Sacred intention",
          "Divine resonance",
          "Spiritual focus",
          "Heart connection"
        ],
        practices: [
          "Voice training",
          "Sacred chanting",
          "Devotional singing",
          "Spiritual hymns"
        ],
        applications: [
          "Personal practice",
          "Group singing",
          "Ritual performance",
          "Sacred celebration"
        ]
      },
      {
        name: "Instrumental Practice",
        principles: [
          "Sacred sound",
          "Divine vibration",
          "Spiritual harmony",
          "Ritual timing"
        ],
        practices: [
          "Instrument mastery",
          "Sacred accompaniment",
          "Ritual music",
          "Devotional performance"
        ],
        applications: [
          "Ceremonial music",
          "Sacred celebration",
          "Ritual enhancement",
          "Community worship"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Music Practice: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Music-Practice-Comprehensive-Guide/dp/0892817718?tag=zion0ba-20",
        description: "Guide to sacred music practice methods"
      }
    ]
  }
]

interface ContemporaryApproach {
  approach: string
  description: string
  elements: {
    name: string
    features: string[]
    methods: string[]
    implications: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const contemporaryApproaches: ContemporaryApproach[] = [
  {
    approach: "Modern Sacred Music",
    description: "Contemporary approaches to sacred music practice",
    elements: [
      {
        name: "Contemporary Practice",
        features: [
          "Modern adaptation",
          "Cultural relevance",
          "Sacred authenticity",
          "Community engagement"
        ],
        methods: [
          "Contemporary forms",
          "Cultural integration",
          "Sacred preservation",
          "Community involvement"
        ],
        implications: [
          "Modern relevance",
          "Cultural harmony",
          "Sacred continuity",
          "Community vitality"
        ]
      },
      {
        name: "Integrated Practice",
        features: [
          "Traditional wisdom",
          "Modern context",
          "Sacred balance",
          "Community needs"
        ],
        methods: [
          "Traditional preservation",
          "Modern adaptation",
          "Sacred integration",
          "Community development"
        ],
        implications: [
          "Living tradition",
          "Cultural relevance",
          "Sacred vitality",
          "Community growth"
        ]
      }
    ],
    resources: [
      {
        title: "Modern Sacred Music: Contemporary Approaches",
        link: "https://www.amazon.com/Modern-Sacred-Music-Contemporary-Approaches/dp/0892817726?tag=zion0ba-20",
        description: "Contemporary methods in sacred music"
      }
    ]
  }
]

export default function SacredMusicPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Sacred Music</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive study of sacred music practices across religious traditions, including their structure, historical context, and contemporary applications.
        </p>
      </div>

      <div className="space-y-8">
        {musicTraditions.map((tradition) => (
          <Card key={tradition.tradition}>
            <CardHeader>
              <CardTitle>{tradition.tradition}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg">{tradition.overview}</p>

              <div className="space-y-6">
                {tradition.practices.map((practice) => (
                  <div key={practice.name} className="space-y-4">
                    <h3 className="text-xl font-semibold">{practice.name}</h3>
                    <p className="text-muted-foreground">{practice.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Principles</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          {practice.principles.map((principle) => (
                            <li key={principle}>{principle}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Methods</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          {practice.methods.map((method) => (
                            <li key={method}>{method}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Significance</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        {practice.significance.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Resources</h3>
                <div className="grid gap-4">
                  {tradition.resources.map((resource) => (
                    <div key={resource.title} className="flex items-start space-x-4">
                      <div>
                        <h4 className="font-medium">{resource.title}</h4>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          Learn more →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {practiceMethods.map((method) => (
          <Card key={method.method}>
            <CardHeader>
              <CardTitle>{method.method}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg">{method.description}</p>

              <div className="space-y-6">
                {method.aspects.map((aspect) => (
                  <div key={aspect.name} className="space-y-4">
                    <h3 className="text-xl font-semibold">{aspect.name}</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Principles</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          {aspect.principles.map((principle) => (
                            <li key={principle}>{principle}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Practices</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          {aspect.practices.map((practice) => (
                            <li key={practice}>{practice}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Applications</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        {aspect.applications.map((application) => (
                          <li key={application}>{application}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Resources</h3>
                <div className="grid gap-4">
                  {method.resources.map((resource) => (
                    <div key={resource.title} className="flex items-start space-x-4">
                      <div>
                        <h4 className="font-medium">{resource.title}</h4>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          Learn more →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {contemporaryApproaches.map((approach) => (
          <Card key={approach.approach}>
            <CardHeader>
              <CardTitle>{approach.approach}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg">{approach.description}</p>

              <div className="space-y-6">
                {approach.elements.map((element) => (
                  <div key={element.name} className="space-y-4">
                    <h3 className="text-xl font-semibold">{element.name}</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Features</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          {element.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Methods</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          {element.methods.map((method) => (
                            <li key={method}>{method}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Implications</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        {element.implications.map((implication) => (
                          <li key={implication}>{implication}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Resources</h3>
                <div className="grid gap-4">
                  {approach.resources.map((resource) => (
                    <div key={resource.title} className="flex items-start space-x-4">
                      <div>
                        <h4 className="font-medium">{resource.title}</h4>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          Learn more →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Related Topics</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/studies/practices/worship">
            <Card className="hover:bg-accent transition-colors">
              <CardHeader>
                <CardTitle>Worship Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore sacred worship practices and their significance.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/studies/practices/meditation">
            <Card className="hover:bg-accent transition-colors">
              <CardHeader>
                <CardTitle>Meditation Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Study meditation and contemplative practices.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
} 