import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Monastic Life & Religious Communities | Sacred Studies",
  description: "Explore monastic traditions, contemplative practices, and communal religious life across faiths. In-depth analysis of monasticism, ascetic practices, and spiritual disciplines.",
  openGraph: {
    title: "Monastic Life & Religious Communities",
    description: "Comprehensive guide to monastic traditions and contemplative religious life across faiths.",
    type: "website",
    images: [{ url: "/images/og/monastic-life.jpg" }]
  },
  keywords: [
    "monasticism",
    "monastic life",
    "contemplative practices",
    "religious orders",
    "spiritual disciplines",
    "ascetic traditions",
    "religious communities",
    "meditation practices",
    "monastic rules",
    "contemplative life"
  ]
}

interface MonasticTradition {
  tradition: string
  overview: string
  communities: {
    name: string
    description: string
    practices: string[]
    disciplines: string[]
    lifestyle: string[]
    challenges: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const monasticTraditions: MonasticTradition[] = [
  {
    tradition: "Buddhist Monasticism",
    overview: "Ancient traditions of Buddhist monastic life and practice",
    communities: [
      {
        name: "Theravada Monasticism",
        description: "Traditional Buddhist monastic practice following the Vinaya",
        practices: [
          "Daily meditation",
          "Alms rounds",
          "Scriptural study",
          "Community teaching"
        ],
        disciplines: [
          "227 Patimokkha rules",
          "Eight precepts",
          "Mindfulness practice",
          "Contemplative silence"
        ],
        lifestyle: [
          "Simple living",
          "Celibacy",
          "Community service",
          "Spiritual mentoring"
        ],
        challenges: [
          "Modern adaptations",
          "Maintaining traditions",
          "Cultural preservation",
          "Generational transmission"
        ]
      },
      {
        name: "Zen Monasticism",
        description: "Japanese Zen Buddhist monastic traditions and practices",
        practices: [
          "Zazen meditation",
          "Koan study",
          "Work practice",
          "Ritual ceremonies"
        ],
        disciplines: [
          "Strict daily schedule",
          "Mindful activities",
          "Traditional arts",
          "Communal living"
        ],
        lifestyle: [
          "Minimalist living",
          "Artistic practice",
          "Contemplative work",
          "Community harmony"
        ],
        challenges: [
          "Contemporary relevance",
          "Balancing tradition",
          "Maintaining practice",
          "Cultural adaptation"
        ]
      }
    ],
    resources: [
      {
        title: "Buddhist Monastic Life: Ancient Wisdom for Contemporary Practice",
        link: "https://www.amazon.com/Buddhist-Monastic-Life-Contemporary-Practice/dp/086171444X?tag=zion0ba-20",
        description: "Comprehensive guide to Buddhist monastic traditions and practices"
      }
    ]
  },
  {
    tradition: "Christian Monasticism",
    overview: "Christian contemplative and monastic traditions through history",
    communities: [
      {
        name: "Benedictine Tradition",
        description: "Following the Rule of St. Benedict in communal life",
        practices: [
          "Liturgy of the Hours",
          "Lectio Divina",
          "Manual labor",
          "Hospitality"
        ],
        disciplines: [
          "Benedictine Rule",
          "Communal prayer",
          "Stability",
          "Obedience"
        ],
        lifestyle: [
          "Ora et Labora",
          "Community life",
          "Spiritual direction",
          "Contemplative practice"
        ],
        challenges: [
          "Vocational decline",
          "Property maintenance",
          "Aging communities",
          "Modern ministry"
        ]
      }
    ],
    resources: [
      {
        title: "The Benedictine Way: Ancient Wisdom for Modern Life",
        link: "https://www.amazon.com/Benedictine-Way-Ancient-Wisdom-Modern/dp/0814633021?tag=zion0ba-20",
        description: "Guide to Benedictine monastic spirituality and practice"
      }
    ]
  }
]

interface DailyPractice {
  category: string
  description: string
  elements: {
    name: string
    schedule: string[]
    activities: string[]
    benefits: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const dailyPractices: DailyPractice[] = [
  {
    category: "Daily Rhythm",
    description: "Structure and practice of daily monastic life",
    elements: [
      {
        name: "Prayer and Meditation",
        schedule: [
          "Pre-dawn meditation",
          "Morning prayers",
          "Midday contemplation",
          "Evening practice"
        ],
        activities: [
          "Group chanting",
          "Silent meditation",
          "Scriptural recitation",
          "Contemplative prayer"
        ],
        benefits: [
          "Mental clarity",
          "Spiritual growth",
          "Community cohesion",
          "Inner peace"
        ]
      },
      {
        name: "Work and Service",
        schedule: [
          "Morning duties",
          "Communal work",
          "Skill training",
          "Evening tasks"
        ],
        activities: [
          "Garden maintenance",
          "Food preparation",
          "Building care",
          "Community service"
        ],
        benefits: [
          "Practical skills",
          "Community support",
          "Self-sufficiency",
          "Mindful action"
        ]
      }
    ],
    resources: [
      {
        title: "The Monastic Day: Pattern and Practice",
        link: "https://www.amazon.com/Monastic-Day-Pattern-Practice-Contemplative/dp/0814633250?tag=zion0ba-20",
        description: "Guide to daily monastic schedules and practices"
      }
    ]
  }
]

interface SpiritualDiscipline {
  category: string
  description: string
  practices: {
    name: string
    methods: string[]
    benefits: string[]
    challenges: string[]
  }[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const spiritualDisciplines: SpiritualDiscipline[] = [
  {
    category: "Contemplative Practices",
    description: "Core spiritual disciplines of monastic life",
    practices: [
      {
        name: "Meditation and Prayer",
        methods: [
          "Silent meditation",
          "Contemplative prayer",
          "Sacred reading",
          "Ritual practice"
        ],
        benefits: [
          "Spiritual insight",
          "Mental clarity",
          "Emotional balance",
          "Divine connection"
        ],
        challenges: [
          "Mental distractions",
          "Physical discomfort",
          "Time management",
          "Practice consistency"
        ]
      },
      {
        name: "Ascetic Disciplines",
        methods: [
          "Fasting practice",
          "Simple living",
          "Voluntary poverty",
          "Physical austerities"
        ],
        benefits: [
          "Self-discipline",
          "Spiritual focus",
          "Material detachment",
          "Mental purification"
        ],
        challenges: [
          "Physical health",
          "Modern context",
          "Balance finding",
          "Sustainable practice"
        ]
      }
    ],
    resources: [
      {
        title: "The Way of the Monk: Spiritual Disciplines for Today",
        link: "https://www.amazon.com/Way-Monk-Spiritual-Disciplines-Today/dp/0814633269?tag=zion0ba-20",
        description: "Guide to monastic spiritual disciplines and practices"
      }
    ]
  }
]

export default function MonasticPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Monastic Life & Religious Communities</h1>
          <p className="text-xl text-muted-foreground">
            Explore the traditions, practices, and spiritual disciplines of monastic life across religious traditions
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Monastic Traditions</TabsTrigger>
            <TabsTrigger value="daily">Daily Life</TabsTrigger>
            <TabsTrigger value="disciplines">Spiritual Disciplines</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {monasticTraditions.map((tradition) => (
                <Card key={tradition.tradition}>
                  <CardHeader>
                    <CardTitle>{tradition.tradition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{tradition.overview}</p>

                      {tradition.communities.map((community) => (
                        <div key={community.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{community.name}</h3>
                          <p className="text-muted-foreground">{community.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Practices</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {community.practices.map((practice) => (
                                  <li key={practice}>{practice}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Disciplines</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {community.disciplines.map((discipline) => (
                                  <li key={discipline}>{discipline}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Lifestyle</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {community.lifestyle.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Challenges</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {community.challenges.map((challenge) => (
                                  <li key={challenge}>{challenge}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {tradition.resources.map((resource) => (
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

          <TabsContent value="daily" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {dailyPractices.map((practice) => (
                <Card key={practice.category}>
                  <CardHeader>
                    <CardTitle>{practice.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{practice.description}</p>

                      {practice.elements.map((element) => (
                        <div key={element.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{element.name}</h3>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Schedule</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {element.schedule.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Activities</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {element.activities.map((activity) => (
                                  <li key={activity}>{activity}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Benefits</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {element.benefits.map((benefit) => (
                                <li key={benefit}>{benefit}</li>
                              ))}
                            </ul>
                          </div>
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

          <TabsContent value="disciplines" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {spiritualDisciplines.map((discipline) => (
                <Card key={discipline.category}>
                  <CardHeader>
                    <CardTitle>{discipline.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{discipline.description}</p>

                      {discipline.practices.map((practice) => (
                        <div key={practice.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{practice.name}</h3>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Methods</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {practice.methods.map((method) => (
                                  <li key={method}>{method}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Benefits</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {practice.benefits.map((benefit) => (
                                  <li key={benefit}>{benefit}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Challenges</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {practice.challenges.map((challenge) => (
                                <li key={challenge}>{challenge}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {discipline.resources.map((resource) => (
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
              href="/studies/themes/community/congregations"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Congregations →
            </Link>
            <Link 
              href="/studies/themes/community/leadership"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Leadership →
            </Link>
            <Link 
              href="/studies/practices/meditation"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Meditation Practices →
            </Link>
            <Link 
              href="/studies/practices/contemplation"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Contemplative Practices →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <Link 
              href="/studies/themes/spirituality/mysticism"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Religious Mysticism →
            </Link>
            <Link 
              href="/studies/themes/spirituality/asceticism"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Ascetic Traditions →
            </Link>
            <Link 
              href="/studies/philosophy/wisdom"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Wisdom Traditions →
            </Link>
            <Link 
              href="/studies/themes/community/organization"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Community Organization →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 