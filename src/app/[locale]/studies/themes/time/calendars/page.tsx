import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Religious Calendars & Sacred Time | Comprehensive Guide",
  description: "Explore religious calendars, sacred time reckoning, festival cycles, and liturgical calendars across world religions. In-depth analysis of temporal organization in religious traditions.",
  openGraph: {
    title: "Religious Calendars & Sacred Time",
    description: "Comprehensive guide to religious calendars, sacred time, and liturgical cycles across traditions.",
    type: "website",
    images: [{ url: "/images/og/religious-calendars.jpg" }]
  },
  keywords: [
    "religious calendars",
    "sacred time",
    "liturgical calendar",
    "religious festivals",
    "sacred cycles",
    "ritual time",
    "religious chronology",
    "festival cycles",
    "sacred seasons",
    "temporal organization"
  ]
}

const calendarSystems = [
  {
    tradition: "Islamic Calendar",
    overview: "Purely lunar calendar of 12 months",
    features: {
      basis: "Lunar observation",
      yearLength: "354 or 355 days",
      months: [
        "Muharram",
        "Safar",
        "Rabi' al-Awwal",
        "Rabi' al-Thani",
        "Jumada al-Awwal",
        "Jumada al-Thani",
        "Rajab",
        "Sha'ban",
        "Ramadan",
        "Shawwal",
        "Dhu al-Qi'dah",
        "Dhu al-Hijjah"
      ],
      significance: [
        "Ramadan - Month of fasting",
        "Dhu al-Hijjah - Month of pilgrimage",
        "Muharram - Islamic New Year",
        "Sacred months (4): Muharram, Rajab, Dhu al-Qi'dah, Dhu al-Hijjah"
      ]
    },
    calculations: {
      methods: [
        "Visual moon sighting",
        "Astronomical calculation",
        "Local vs global sighting",
        "Calculation controversies"
      ],
      implications: [
        "Festivals move through solar year",
        "Regional variations possible",
        "Different start dates globally",
        "Seasonal independence"
      ]
    },
    resources: [
      {
        title: "Islamic Calendar: Origins and Modern Practices",
        link: "https://www.amazon.com/Islamic-Calendar-Times-Prayer-Ramadan/dp/1032404558?tag=zion0ba-20",
        description: "Comprehensive guide to Islamic time reckoning"
      }
    ]
  },
  {
    tradition: "Jewish Calendar",
    overview: "Lunisolar calendar with intercalation",
    features: {
      basis: "Lunar months with solar adjustment",
      yearLength: "353-385 days",
      months: [
        "Nisan",
        "Iyar",
        "Sivan",
        "Tammuz",
        "Av",
        "Elul",
        "Tishrei",
        "Cheshvan",
        "Kislev",
        "Tevet",
        "Shevat",
        "Adar (I & II)"
      ],
      significance: [
        "Nisan - Month of redemption",
        "Tishrei - Month of judgment",
        "Adar - Month of joy",
        "Leap month Adar II added 7 times in 19 years"
      ]
    },
    calculations: {
      methods: [
        "Metonic cycle",
        "Molad calculation",
        "Postponement rules",
        "Intercalation system"
      ],
      implications: [
        "Festivals align with seasons",
        "Complex mathematical system",
        "Historical development",
        "Modern standardization"
      ]
    },
    resources: [
      {
        title: "Understanding the Jewish Calendar",
        link: "https://www.amazon.com/Understanding-Jewish-Calendar-Nathan-Bushwick/dp/0940118173?tag=zion0ba-20",
        description: "Detailed analysis of Jewish time reckoning"
      }
    ]
  },
  {
    tradition: "Buddhist Calendar",
    overview: "Various systems across traditions",
    features: {
      basis: "Lunar or lunisolar depending on region",
      yearLength: "Variable by system",
      variants: [
        "Traditional Buddhist calendar",
        "Thai Buddhist calendar",
        "Japanese Buddhist calendar",
        "Tibetan Buddhist calendar"
      ],
      significance: [
        "Full moon days (Poya)",
        "Uposatha observance days",
        "Vassa (Rains retreat)",
        "Regional festival dates"
      ]
    },
    calculations: {
      methods: [
        "Local lunar observation",
        "Regional variations",
        "Seasonal considerations",
        "Modern adaptations"
      ],
      implications: [
        "Cultural integration",
        "Practice scheduling",
        "Monastic timing",
        "Festival coordination"
      ]
    },
    resources: [
      {
        title: "Buddhist Time Calculation",
        link: "https://www.amazon.com/Calendar-Time-Buddhist-Southeast-Asia/dp/0824878566?tag=zion0ba-20",
        description: "Analysis of Buddhist temporal systems"
      }
    ]
  }
]

interface LiturgicalSubcycle {
  name: string
  elements?: string[]
  features: string[]
  seasons?: string[]
}

interface LiturgicalCycle {
  name: string
  cycles: LiturgicalSubcycle[]
  resources: {
    title: string
    link: string
    description: string
  }[]
}

const liturgicalCycles: LiturgicalCycle[] = [
  {
    name: "Christian Liturgical Year",
    cycles: [
      {
        name: "Temporal Cycle",
        seasons: [
          "Advent - Preparation for Christmas",
          "Christmas - Celebration of Nativity",
          "Ordinary Time I",
          "Lent - Preparation for Easter",
          "Easter - Celebration of Resurrection",
          "Ordinary Time II"
        ],
        features: [
          "Movable feasts based on Easter",
          "Fixed feasts on solar calendar",
          "Weekly Sunday worship",
          "Daily prayer cycles"
        ]
      },
      {
        name: "Sanctoral Cycle",
        elements: [
          "Saints' feast days",
          "Marian feasts",
          "Commemorations",
          "Local celebrations"
        ],
        features: [
          "Fixed dates",
          "Regional variations",
          "Ranking system",
          "Historical development"
        ]
      }
    ],
    resources: [
      {
        title: "The Oxford Guide to the Christian Liturgical Year",
        link: "https://www.amazon.com/Oxford-Guide-Christian-Liturgical-Year/dp/0195374630?tag=zion0ba-20",
        description: "Comprehensive guide to Christian liturgical time"
      }
    ]
  },
  {
    name: "Hindu Sacred Time",
    cycles: [
      {
        name: "Festival Cycle",
        elements: [
          "Monthly festivals",
          "Seasonal celebrations",
          "Annual observances",
          "Multi-year cycles"
        ],
        features: [
          "Lunar-solar calculations",
          "Regional variations",
          "Astrological considerations",
          "Deity-specific timing"
        ]
      },
      {
        name: "Cosmic Cycles",
        elements: [
          "Yugas (World Ages)",
          "Manvantaras",
          "Kalpas (Cosmic Days)",
          "Brahma's Lifetime"
        ],
        features: [
          "Vast time scales",
          "Cyclical conception",
          "Spiritual implications",
          "Cosmological framework"
        ]
      }
    ],
    resources: [
      {
        title: "Hindu Time: The Science of Sacred Time",
        link: "https://www.amazon.com/Hindu-Time-Consciousness-Cultural-Memory/dp/1138062618?tag=zion0ba-20",
        description: "Analysis of Hindu temporal concepts"
      }
    ]
  }
]

const timeReckoning = [
  {
    category: "Sacred Timing",
    description: "Methods of determining sacred times",
    aspects: [
      {
        name: "Natural Cycles",
        elements: [
          "Solar observations",
          "Lunar phases",
          "Stellar positions",
          "Seasonal changes"
        ],
        applications: [
          "Festival timing",
          "Daily prayers",
          "Agricultural connections",
          "Ritual scheduling"
        ]
      },
      {
        name: "Mathematical Systems",
        elements: [
          "Calendrical calculations",
          "Intercalation methods",
          "Cycle synchronization",
          "Error correction"
        ],
        applications: [
          "Long-term planning",
          "Festival coordination",
          "Historical dating",
          "Ritual timing"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Time and Religious History",
        link: "https://www.amazon.com/Sacred-Time-Religious-History-Understanding/dp/1474262627?tag=zion0ba-20",
        description: "Analysis of religious time reckoning"
      }
    ]
  },
  {
    category: "Modern Applications",
    description: "Contemporary use of religious calendars",
    aspects: [
      {
        name: "Digital Tools",
        elements: [
          "Calendar apps",
          "Prayer time calculators",
          "Festival planners",
          "Global coordination"
        ],
        applications: [
          "Community organization",
          "Personal practice",
          "Educational resources",
          "Interfaith dialogue"
        ]
      },
      {
        name: "Cultural Integration",
        elements: [
          "Secular accommodation",
          "Multi-faith awareness",
          "Traditional preservation",
          "Modern adaptations"
        ],
        applications: [
          "Workplace policies",
          "Educational planning",
          "Social coordination",
          "Cultural celebration"
        ]
      }
    ],
    resources: [
      {
        title: "Religious Time in the Modern World",
        link: "https://www.amazon.com/Religious-Time-Modern-World-Contemporary/dp/1138345741?tag=zion0ba-20",
        description: "Contemporary analysis of religious time"
      }
    ]
  }
]

export default function ReligiousCalendarsPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Religious Calendars & Sacred Time</h1>
          <p className="text-xl text-muted-foreground">
            Explore religious calendar systems, liturgical cycles, and sacred time reckoning across traditions
          </p>
        </section>

        <Tabs defaultValue="calendars" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="calendars">Calendar Systems</TabsTrigger>
            <TabsTrigger value="liturgical">Liturgical Cycles</TabsTrigger>
            <TabsTrigger value="reckoning">Time Reckoning</TabsTrigger>
          </TabsList>

          <TabsContent value="calendars" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {calendarSystems.map((system) => (
                <Card key={system.tradition}>
                  <CardHeader>
                    <CardTitle>{system.tradition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{system.overview}</p>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Features</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <h4 className="font-semibold">Basic Structure</h4>
                            <p className="text-sm text-muted-foreground">Basis: {system.features.basis}</p>
                            <p className="text-sm text-muted-foreground">Year Length: {system.features.yearLength}</p>
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="font-semibold">Months</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {system.features.months?.map((month) => (
                                <li key={month}>{month}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold">Significance</h4>
                          <ul className="list-disc list-inside text-sm text-muted-foreground">
                            {system.features.significance.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Calculations</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <h4 className="font-semibold">Methods</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {system.calculations.methods.map((method) => (
                                <li key={method}>{method}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="font-semibold">Implications</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {system.calculations.implications.map((implication) => (
                                <li key={implication}>{implication}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold">Study Resources:</h4>
                        {system.resources.map((resource) => (
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

          <TabsContent value="liturgical" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {liturgicalCycles.map((cycle) => (
                <Card key={cycle.name}>
                  <CardHeader>
                    <CardTitle>{cycle.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {cycle.cycles.map((subcycle) => (
                        <div key={subcycle.name} className="space-y-2">
                          <h4 className="font-semibold">{subcycle.name}</h4>
                          <div>
                            <h5 className="text-sm font-medium">Elements:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {subcycle.elements?.map((element) => (
                                <li key={element}>{element}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Features:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {subcycle.features.map((feature) => (
                                <li key={feature}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
                        {cycle.resources.map((resource) => (
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

          <TabsContent value="reckoning" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {timeReckoning.map((category) => (
                <Card key={category.category}>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{category.description}</p>

                      {category.aspects.map((aspect) => (
                        <div key={aspect.name} className="space-y-2">
                          <h4 className="font-semibold">{aspect.name}</h4>
                          <div>
                            <h5 className="text-sm font-medium">Elements:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {aspect.elements.map((element) => (
                                <li key={element}>{element}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Applications:</h5>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {aspect.applications.map((application) => (
                                <li key={application}>{application}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Resources:</h4>
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
              href="/studies/themes/time/historical"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Historical Time →
            </Link>
            <Link 
              href="/studies/themes/time/eternity"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Eternity →
            </Link>
            <Link 
              href="/studies/themes/time/eschatology"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Eschatology →
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