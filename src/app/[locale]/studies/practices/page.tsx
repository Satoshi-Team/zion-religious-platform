import React from 'react'
import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Practices & Sacred Traditions | Comprehensive Study Guide",
  description: "Explore religious practices across traditions, including rituals, ceremonies, meditation, prayer, and devotional practices. In-depth analysis of worship methods and spiritual disciplines.",
  openGraph: {
    title: "Religious Practices & Sacred Traditions",
    description: "Comprehensive guide to religious practices, rituals, and spiritual disciplines across world religions.",
    type: "website",
    images: [{ url: "/images/og/religious-practices.jpg" }]
  },
  keywords: [
    "religious practices",
    "spiritual disciplines",
    "religious rituals",
    "sacred ceremonies",
    "meditation practices",
    "prayer traditions",
    "worship methods",
    "devotional practices",
    "religious observances",
    "sacred traditions"
  ]
}

const devotionalPractices = [
  {
    tradition: "Buddhist Practices",
    overview: "Systematic approaches to spiritual development and liberation",
    categories: [
      {
        name: "Meditation (Bhāvanā)",
        description: "Cultivation of mind and insight",
        practices: [
          {
            name: "Samatha (Calm-abiding)",
            description: "Development of mental stability and peace",
            techniques: [
              "Mindfulness of breathing (Ānāpānasati)",
              "Walking meditation (Caṅkama)",
              "Loving-kindness (Mettā)",
              "Visualization practices"
            ],
            benefits: "Develops concentration, emotional balance, and mental clarity"
          },
          {
            name: "Vipassanā (Insight)",
            description: "Investigation of reality's nature",
            techniques: [
              "Body contemplation",
              "Feeling observation",
              "Mind states awareness",
              "Dharma investigation"
            ],
            benefits: "Leads to wisdom, understanding of impermanence, and liberation"
          }
        ],
        resources: [
          {
            title: "The Mind Illuminated: A Complete Meditation Guide",
            link: "https://www.amazon.com/Mind-Illuminated-Meditation-Integrating-Mindfulness/dp/1501156985?tag=zion0ba-20",
            description: "Comprehensive stage-based meditation manual"
          },
          {
            title: "Manual of Insight",
            link: "https://www.amazon.com/Manual-Insight-Mahasi-Sayadaw/dp/1614292779?tag=zion0ba-20",
            description: "Classical guide to Vipassana meditation"
          }
        ]
      },
      {
        name: "Ritual Practices",
        description: "Traditional ceremonies and observances",
        practices: [
          {
            name: "Puja (Devotional Offerings)",
            description: "Ceremonial offerings and reverence",
            techniques: [
              "Altar preparation",
              "Offering arrangements",
              "Mantra recitation",
              "Prostrations"
            ],
            benefits: "Cultivates devotion, mindfulness, and connection to tradition"
          },
          {
            name: "Sutra Study and Chanting",
            description: "Engagement with sacred texts",
            techniques: [
              "Text memorization",
              "Group recitation",
              "Contemplative study",
              "Traditional melodies"
            ],
            benefits: "Deepens understanding and internalization of teachings"
          }
        ],
        resources: [
  {
            title: "Buddhist Rituals and Practices",
            link: "https://www.amazon.com/Buddhist-Ritual-Practice-Thailand-Cambodia/dp/0824856740?tag=zion0ba-20",
            description: "Scholarly analysis of Buddhist ceremonies"
          }
        ]
      }
    ]
  },
  {
    tradition: "Hindu Practices",
    overview: "Rich tradition of devotional and yogic practices",
    categories: [
      {
        name: "Yoga and Meditation",
        description: "Systematic approaches to union with divine",
        practices: [
          {
            name: "Raja Yoga",
            description: "Royal path of meditation and mind control",
            techniques: [
              "Yama (ethical restraints)",
              "Niyama (observances)",
              "Asana (posture)",
              "Pranayama (breath control)",
              "Pratyahara (sense withdrawal)",
              "Dharana (concentration)",
              "Dhyana (meditation)",
              "Samadhi (absorption)"
            ],
            benefits: "Leads to self-realization and spiritual liberation"
          },
          {
            name: "Bhakti Yoga",
            description: "Path of devotion and love",
            techniques: [
              "Kirtan (devotional singing)",
              "Japa (mantra repetition)",
              "Puja (worship)",
              "Seva (service)"
            ],
            benefits: "Develops divine love and emotional purification"
          }
        ],
        resources: [
          {
            title: "Light on Yoga",
            link: "https://www.amazon.com/Light-Yoga-B-K-Iyengar/dp/0805210318?tag=zion0ba-20",
            description: "Comprehensive guide to yoga practice"
          },
          {
            title: "The Bhakti Path",
            link: "https://www.amazon.com/Heart-Yoga-Developing-Personal-Practice/dp/0892817488?tag=zion0ba-20",
            description: "Guide to devotional practices"
          }
        ]
      }
    ]
  },
  {
    tradition: "Islamic Practices",
    overview: "Comprehensive system of worship and devotion",
    categories: [
      {
        name: "Ritual Prayer (Salah)",
        description: "Five daily prayers and their requirements",
        practices: [
          {
            name: "Obligatory Prayers",
            description: "Five daily prescribed prayers",
            techniques: [
              "Wudu (ablution)",
              "Qiyam (standing)",
              "Ruku (bowing)",
              "Sujud (prostration)",
              "Tashahhud (sitting)"
            ],
            benefits: "Establishes regular connection with Divine, purifies heart"
          },
          {
            name: "Dhikr (Remembrance)",
            description: "Continuous remembrance of Allah",
            techniques: [
              "Tasbih (glorification)",
              "Tahmid (praise)",
              "Takbir (magnification)",
              "Silent meditation"
            ],
            benefits: "Maintains constant awareness of Divine presence"
          }
        ],
        resources: [
          {
            title: "The Spiritual Practices of Islam",
            link: "https://www.amazon.com/Purification-Heart-Symptoms-Spiritual-Diseases/dp/0985565926?tag=zion0ba-20",
            description: "Guide to Islamic spiritual practices"
          }
        ]
      }
    ]
  }
]

const contemplativePractices = [
  {
    category: "Meditation Methods",
    description: "Systematic approaches to mental cultivation",
    techniques: [
      {
        name: "Concentration Practices",
        elements: [
          "Single-pointed focus",
          "Breath awareness",
          "Visualization",
          "Mantra repetition"
        ],
        benefits: "Develops mental stability and clarity"
      },
      {
        name: "Insight Practices",
        elements: [
          "Mindfulness",
          "Body scanning",
          "Contemplation",
          "Analytical meditation"
        ],
        benefits: "Develops wisdom and understanding"
      }
    ],
    resources: [
  {
        title: "The Science of Meditation",
        link: "https://www.amazon.com/Science-Meditation-Transform-Improve-Performance/dp/0241975697?tag=zion0ba-20",
        description: "Research-based analysis of meditation effects"
      }
    ]
  },
  {
    category: "Prayer Methods",
    description: "Approaches to divine communication",
    techniques: [
      {
        name: "Contemplative Prayer",
        elements: [
          "Silent presence",
          "Sacred reading",
          "Divine dialogue",
          "Heart-centered prayer"
        ],
        benefits: "Deepens spiritual connection"
      },
      {
        name: "Liturgical Prayer",
        elements: [
          "Structured formats",
          "Communal worship",
          "Sacred texts",
          "Ritual elements"
        ],
        benefits: "Maintains traditional forms"
      }
    ],
    resources: [
  {
        title: "The Practice of Prayer",
        link: "https://www.amazon.com/Practice-Prayer-Margaret-Guenther/dp/1561011983?tag=zion0ba-20",
        description: "Guide to prayer methods"
      }
    ]
  }
]

const modernApplications = [
  {
    area: "Secular Adaptations",
    description: "Contemporary applications of traditional practices",
    applications: [
      {
        name: "Mindfulness-Based Interventions",
        elements: [
          "Stress reduction",
          "Emotional regulation",
          "Attention training",
          "Body awareness"
        ],
        contexts: [
          "Healthcare",
          "Education",
          "Business",
          "Mental health"
        ]
      },
      {
        name: "Contemplative Science",
        elements: [
          "Neuroscience research",
          "Psychological studies",
          "Clinical applications",
          "Performance enhancement"
        ],
        contexts: [
          "Research institutions",
          "Medical centers",
          "Sports psychology",
          "Cognitive science"
        ]
      }
    ],
    resources: [
      {
        title: "Altered Traits: Science Reveals How Meditation Changes Your Mind, Brain, and Body",
        link: "https://www.amazon.com/Altered-Traits-Science-Reveals-Meditation/dp/0399184384?tag=zion0ba-20",
        description: "Scientific research on meditation effects"
      }
    ]
  },
  {
    area: "Integration Methods",
    description: "Approaches to combining traditional and modern practices",
    applications: [
      {
        name: "Psychological Integration",
        elements: [
          "Therapeutic applications",
          "Personal development",
          "Emotional healing",
          "Behavioral change"
        ],
        contexts: [
          "Psychotherapy",
          "Counseling",
          "Personal growth",
          "Wellness programs"
        ]
      },
      {
        name: "Social Applications",
        elements: [
          "Community building",
          "Conflict resolution",
          "Environmental awareness",
          "Social justice"
        ],
        contexts: [
          "Organizations",
          "Communities",
          "Activism",
          "Education"
        ]
      }
    ],
    resources: [
      {
        title: "Contemplative Practice in Action",
        link: "https://www.amazon.com/Contemplative-Practices-Action-Spirituality-Meditation/dp/0313382565?tag=zion0ba-20",
        description: "Applications of contemplative practices"
      }
    ]
  }
]

export default function ReligiousPracticesPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Religious Practices & Sacred Traditions</h1>
          <p className="text-xl text-muted-foreground">
            Explore the rich diversity of religious practices and spiritual disciplines across world traditions
          </p>
        </section>

        <Tabs defaultValue="devotional" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="devotional">Devotional Practices</TabsTrigger>
            <TabsTrigger value="contemplative">Contemplative Methods</TabsTrigger>
            <TabsTrigger value="modern">Modern Applications</TabsTrigger>
          </TabsList>

          <TabsContent value="devotional" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {devotionalPractices.map((tradition) => (
                <Card key={tradition.tradition}>
                  <CardHeader>
                    <CardTitle>{tradition.tradition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{tradition.overview}</p>

                      {tradition.categories.map((category) => (
                        <div key={category.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{category.name}</h3>
                          <p className="text-muted-foreground">{category.description}</p>
        
                          <div className="grid gap-4 md:grid-cols-2">
                            {category.practices.map((practice) => (
                              <div key={practice.name} className="space-y-2">
                                <h4 className="font-semibold">{practice.name}</h4>
                                <p className="text-sm text-muted-foreground">{practice.description}</p>
                                <div>
                                  <h5 className="text-sm font-medium">Techniques:</h5>
                                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                                    {practice.techniques.map((technique) => (
                                      <li key={technique}>{technique}</li>
                                    ))}
                                  </ul>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  <span className="font-medium">Benefits:</span> {practice.benefits}
                                </p>
                              </div>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Study Resources:</h4>
                            {category.resources.map((resource) => (
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
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contemplative" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contemplativePractices.map((practice) => (
                <Card key={practice.category}>
                  <CardHeader>
                    <CardTitle>{practice.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{practice.description}</p>

                      {practice.techniques.map((technique) => (
                        <div key={technique.name} className="space-y-2">
                          <h4 className="font-semibold">{technique.name}</h4>
                          <ul className="list-disc list-inside text-sm text-muted-foreground">
                            {technique.elements.map((element) => (
                              <li key={element}>{element}</li>
                            ))}
                          </ul>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">Benefits:</span> {technique.benefits}
                          </p>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {practice.resources.map((resource) => (
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

          <TabsContent value="modern" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modernApplications.map((application) => (
                <Card key={application.area}>
                  <CardHeader>
                    <CardTitle>{application.area}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{application.description}</p>

                      {application.applications.map((app) => (
                        <div key={app.name} className="space-y-2">
                          <h4 className="font-semibold">{app.name}</h4>
                          <div>
                            <h5 className="text-sm font-medium">Elements:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {app.elements.map((element) => (
                                <li key={element}>{element}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Application Contexts:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {app.contexts.map((context) => (
                                <li key={context}>{context}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {application.resources.map((resource) => (
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
              href="/studies/practices/meditation"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Meditation Practices →
            </Link>
            <Link 
              href="/studies/practices/rituals"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Rituals →
            </Link>
            <Link 
              href="/studies/practices/worship"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Worship Methods →
            </Link>
            <Link 
              href="/studies/practices/festivals"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Festivals →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 