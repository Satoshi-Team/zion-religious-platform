import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sacred Scriptures & Religious Texts | Sacred Studies",
  description: "Explore sacred scriptures and religious texts across traditions. In-depth analysis of scriptural traditions, textual study methods, and contemporary approaches to understanding holy texts.",
  openGraph: {
    title: "Sacred Scriptures & Religious Texts",
    description: "Comprehensive exploration of sacred scriptures and religious texts across world traditions.",
    type: "website",
    images: [{ url: "/images/og/sacred-scriptures.jpg" }]
  },
  keywords: [
    "sacred scriptures",
    "religious texts",
    "holy books",
    "scriptural studies",
    "textual analysis",
    "sacred texts",
    "biblical studies",
    "quranic studies",
    "vedic texts",
    "buddhist sutras",
    "scriptural interpretation",
    "religious manuscripts"
  ]
}

interface ScripturalTradition {
  tradition: string
  overview: string
  texts: {
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

const scripturalTraditions: ScripturalTradition[] = [
  {
    tradition: "Abrahamic Scriptures",
    overview: "Sacred texts from the Jewish, Christian, and Islamic traditions",
    texts: [
      {
        name: "Biblical Texts",
        description: "The Hebrew Bible and Christian Scriptures",
        principles: [
          "Divine inspiration",
          "Textual preservation",
          "Canonical formation",
          "Interpretive traditions"
        ],
        methods: [
          "Historical-critical method",
          "Literary analysis",
          "Theological interpretation",
          "Comparative study"
        ],
        significance: [
          "Foundational teachings",
          "Moral guidance",
          "Spiritual formation",
          "Community identity"
        ]
      },
      {
        name: "Quranic Studies",
        description: "The Holy Quran and related texts",
        principles: [
          "Divine revelation",
          "Linguistic perfection",
          "Preservation integrity",
          "Interpretive sciences"
        ],
        methods: [
          "Textual analysis",
          "Linguistic study",
          "Historical context",
          "Thematic interpretation"
        ],
        significance: [
          "Divine guidance",
          "Legal framework",
          "Spiritual direction",
          "Cultural foundation"
        ]
      }
    ],
    resources: [
      {
        title: "King James Bible (KJV) - Premium Leather Bound",
        link: "https://www.amazon.com/Holy-Bible-James-Version-Brown/dp/0718098617?tag=zion0ba-20",
        description: "Classic King James Version in premium leather binding"
      },
      {
        title: "The Study Quran: A New Translation and Commentary",
        link: "https://www.amazon.com/Study-Quran-New-Translation-Commentary/dp/0061125865?tag=zion0ba-20",
        description: "Comprehensive study Quran with detailed commentary"
      }
    ]
  },
  {
    tradition: "Dharmic Scriptures",
    overview: "Sacred texts from Hindu, Buddhist, and Jain traditions",
    texts: [
      {
        name: "Vedic Texts",
        description: "The Vedas, Upanishads, and related literature",
        principles: [
          "Eternal wisdom",
          "Oral transmission",
          "Systematic organization",
          "Multiple levels of meaning"
        ],
        methods: [
          "Sanskrit analysis",
          "Philosophical study",
          "Ritual context",
          "Comparative interpretation"
        ],
        significance: [
          "Spiritual knowledge",
          "Ritual guidance",
          "Philosophical insights",
          "Cultural heritage"
        ]
      },
      {
        name: "Buddhist Sutras",
        description: "The Buddhist canonical texts and commentaries",
        principles: [
          "Buddha's teachings",
          "Textual transmission",
          "Multiple traditions",
          "Practice orientation"
        ],
        methods: [
          "Linguistic study",
          "Historical analysis",
          "Doctrinal comparison",
          "Meditative insight"
        ],
        significance: [
          "Dharma preservation",
          "Meditation guidance",
          "Ethical framework",
          "Liberation path"
        ]
      }
    ],
    resources: [
      {
        title: "The Principal Upanishads (Collector's Edition)",
        link: "https://www.amazon.com/Principal-Upanishads-Collectors-S-Radhakrishnan/dp/8172238975?tag=zion0ba-20",
        description: "Classic translation of major Upanishads with commentary"
      },
      {
        title: "The Complete Buddhist Sutras Collection",
        link: "https://www.amazon.com/Complete-Buddhist-Sutras-Collection-Volumes/dp/1614294771?tag=zion0ba-20",
        description: "Comprehensive collection of Buddhist canonical texts"
      }
    ]
  }
]

interface StudyMethod {
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

const studyMethods: StudyMethod[] = [
  {
    method: "Textual Analysis",
    description: "Methods for studying and interpreting sacred texts",
    aspects: [
      {
        name: "Historical-Critical Method",
        principles: [
          "Historical context",
          "Textual criticism",
          "Source analysis",
          "Form criticism"
        ],
        practices: [
          "Manuscript study",
          "Comparative analysis",
          "Literary criticism",
          "Redaction criticism"
        ],
        applications: [
          "Text reconstruction",
          "Historical understanding",
          "Meaning interpretation",
          "Teaching development"
        ]
      },
      {
        name: "Hermeneutical Approaches",
        principles: [
          "Interpretive principles",
          "Contextual reading",
          "Theological reflection",
          "Contemporary application"
        ],
        practices: [
          "Close reading",
          "Thematic analysis",
          "Comparative study",
          "Contemporary application"
        ],
        applications: [
          "Spiritual formation",
          "Teaching methods",
          "Community guidance",
          "Personal study"
        ]
      }
    ],
    resources: [
      {
        title: "Biblical Interpretation: Theory and Practice",
        link: "https://www.amazon.com/Biblical-Interpretation-Practice-Robert-Chisholm/dp/0801098467?tag=zion0ba-20",
        description: "Comprehensive guide to biblical interpretation methods"
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
    approach: "Modern Scripture Study",
    description: "Contemporary approaches to studying sacred texts",
    elements: [
      {
        name: "Digital Humanities",
        features: [
          "Digital tools",
          "Database analysis",
          "Text mining",
          "Visual representation"
        ],
        methods: [
          "Computational analysis",
          "Digital archiving",
          "Network analysis",
          "Visual analytics"
        ],
        implications: [
          "New insights",
          "Broader access",
          "Enhanced study",
          "Global collaboration"
        ]
      },
      {
        name: "Interdisciplinary Approaches",
        features: [
          "Multiple perspectives",
          "Cross-cultural study",
          "Scientific integration",
          "Social analysis"
        ],
        methods: [
          "Comparative analysis",
          "Scientific study",
          "Social research",
          "Cultural studies"
        ],
        implications: [
          "Deeper understanding",
          "Broader context",
          "New perspectives",
          "Contemporary relevance"
        ]
      }
    ],
    resources: [
      {
        title: "Digital Biblical Studies: Methods and Tools",
        link: "https://www.amazon.com/Digital-Biblical-Studies-Methods-Tools/dp/9004397798?tag=zion0ba-20",
        description: "Guide to digital methods in biblical studies"
      }
    ]
  }
]

export default function SacredScripturesPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Sacred Scriptures & Religious Texts</h1>
          <p className="text-xl text-muted-foreground">
            Explore scriptural traditions and methods of studying sacred texts
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Scriptural Traditions</TabsTrigger>
            <TabsTrigger value="methods">Study Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {scripturalTraditions.map((tradition) => (
                <Card key={tradition.tradition}>
                  <CardHeader>
                    <CardTitle>{tradition.tradition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{tradition.overview}</p>

                      {tradition.texts.map((text) => (
                        <div key={text.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{text.name}</h3>
                          <p className="text-muted-foreground">{text.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Principles</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {text.principles.map((principle) => (
                                  <li key={principle}>{principle}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Methods</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {text.methods.map((method) => (
                                  <li key={method}>{method}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Significance</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {text.significance.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Recommended Resources:</h4>
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

          <TabsContent value="methods" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {studyMethods.map((method) => (
                <Card key={method.method}>
                  <CardHeader>
                    <CardTitle>{method.method}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{method.description}</p>

                      {method.aspects.map((aspect) => (
                        <div key={aspect.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{aspect.name}</h3>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Principles</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {aspect.principles.map((principle) => (
                                  <li key={principle}>{principle}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Practices</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {aspect.practices.map((practice) => (
                                  <li key={practice}>{practice}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Applications</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {aspect.applications.map((application) => (
                                <li key={application}>{application}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Recommended Resources:</h4>
                        {method.resources.map((resource) => (
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

          <TabsContent value="contemporary" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {contemporaryApproaches.map((approach) => (
                <Card key={approach.approach}>
                  <CardHeader>
                    <CardTitle>{approach.approach}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{approach.description}</p>

                      {approach.elements.map((element) => (
                        <div key={element.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{element.name}</h3>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Features</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {element.features.map((feature) => (
                                  <li key={feature}>{feature}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Methods</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {element.methods.map((method) => (
                                  <li key={method}>{method}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Implications</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {element.implications.map((implication) => (
                                <li key={implication}>{implication}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-2">
                        <h4 className="font-semibold">Recommended Resources:</h4>
                        {approach.resources.map((resource) => (
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
              href="/studies/texts/mystical"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Mystical Texts →
            </Link>
            <Link 
              href="/studies/texts/commentaries"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Scriptural Commentaries →
            </Link>
            <Link 
              href="/studies/texts/historical"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Historical Texts →
            </Link>
            <Link 
              href="/resources/texts/hermeneutics"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Hermeneutics Guide →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 