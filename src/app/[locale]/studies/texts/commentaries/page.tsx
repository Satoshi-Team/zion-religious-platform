import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Scriptural Commentaries & Sacred Interpretation | Sacred Studies",
  description: "Explore scriptural commentaries and sacred text interpretation across traditions. In-depth analysis of exegetical methods, hermeneutical approaches, and interpretive traditions.",
  openGraph: {
    title: "Scriptural Commentaries & Sacred Interpretation",
    description: "Comprehensive exploration of scriptural commentaries and sacred text interpretation across traditions.",
    type: "website",
    images: [{ url: "/images/og/scriptural-commentaries.jpg" }]
  },
  keywords: [
    "scriptural commentaries",
    "sacred interpretation",
    "exegetical methods",
    "hermeneutical approaches",
    "interpretive traditions",
    "sacred texts",
    "religious commentary",
    "textual analysis",
    "sacred studies",
    "religious studies"
  ]
}

interface CommentaryTradition {
  tradition: string
  overview: string
  commentaries: {
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

const commentaryTraditions: CommentaryTradition[] = [
  {
    tradition: "Classical Commentaries",
    overview: "Traditional scriptural commentaries from major religious traditions",
    commentaries: [
      {
        name: "Exegetical Commentaries",
        description: "Detailed analysis and interpretation of sacred texts",
        principles: [
          "Textual analysis",
          "Historical context",
          "Linguistic study",
          "Traditional methods"
        ],
        methods: [
          "Verse analysis",
          "Word studies",
          "Context examination",
          "Cross-referencing"
        ],
        significance: [
          "Doctrinal understanding",
          "Textual preservation",
          "Traditional interpretation",
          "Scholarly foundation"
        ]
      },
      {
        name: "Hermeneutical Commentaries",
        description: "Interpretive approaches to understanding sacred texts",
        principles: [
          "Interpretive methods",
          "Meaning extraction",
          "Application principles",
          "Contextual understanding"
        ],
        methods: [
          "Interpretive analysis",
          "Contextual study",
          "Practical application",
          "Theological reflection"
        ],
        significance: [
          "Deeper understanding",
          "Practical wisdom",
          "Spiritual guidance",
          "Contemporary relevance"
        ]
      }
    ],
    resources: [
      {
        title: "Classical Commentary Methods: A Guide",
        link: "https://www.amazon.com/Classical-Commentary-Methods-Guide-Interpretation/dp/0801046408?tag=zion0ba-20",
        description: "Comprehensive guide to traditional commentary methods"
      },
      {
        title: "Sacred Text Interpretation: Traditional Approaches",
        link: "https://www.amazon.com/Sacred-Text-Interpretation-Traditional-Understanding/dp/0802837433?tag=zion0ba-20",
        description: "Overview of traditional interpretive methods"
      }
    ]
  },
  {
    tradition: "Modern Commentaries",
    overview: "Contemporary approaches to scriptural commentary and interpretation",
    commentaries: [
      {
        name: "Academic Commentaries",
        description: "Scholarly analysis using modern research methods",
        principles: [
          "Critical analysis",
          "Historical research",
          "Comparative study",
          "Interdisciplinary approach"
        ],
        methods: [
          "Historical criticism",
          "Literary analysis",
          "Comparative research",
          "Contextual study"
        ],
        significance: [
          "Academic understanding",
          "Historical context",
          "Critical insight",
          "Research foundation"
        ]
      },
      {
        name: "Applied Commentaries",
        description: "Practical application of sacred texts in modern context",
        principles: [
          "Contemporary relevance",
          "Practical wisdom",
          "Modern application",
          "Cultural context"
        ],
        methods: [
          "Modern interpretation",
          "Cultural analysis",
          "Practical application",
          "Contemporary reflection"
        ],
        significance: [
          "Modern relevance",
          "Practical guidance",
          "Cultural insight",
          "Contemporary wisdom"
        ]
      }
    ],
    resources: [
      {
        title: "Modern Biblical Commentary Methods",
        link: "https://www.amazon.com/Modern-Biblical-Commentary-Methods-Approaches/dp/0664227511?tag=zion0ba-20",
        description: "Guide to modern commentary approaches"
      },
      {
        title: "Contemporary Sacred Text Interpretation",
        link: "https://www.amazon.com/Contemporary-Sacred-Text-Interpretation-Modern/dp/0800662733?tag=zion0ba-20",
        description: "Modern methods of sacred text interpretation"
      }
    ]
  }
]

interface InterpretiveMethod {
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

const interpretiveMethods: InterpretiveMethod[] = [
  {
    method: "Textual Analysis",
    description: "Methods for analyzing and interpreting sacred texts",
    aspects: [
      {
        name: "Critical Methods",
        principles: [
          "Textual criticism",
          "Historical analysis",
          "Literary study",
          "Contextual research"
        ],
        practices: [
          "Text comparison",
          "Source analysis",
          "Context study",
          "Literary examination"
        ],
        applications: [
          "Textual understanding",
          "Historical insight",
          "Literary appreciation",
          "Research development"
        ]
      },
      {
        name: "Interpretive Methods",
        principles: [
          "Hermeneutical principles",
          "Meaning analysis",
          "Context consideration",
          "Application focus"
        ],
        practices: [
          "Text interpretation",
          "Meaning extraction",
          "Context application",
          "Practical implementation"
        ],
        applications: [
          "Understanding development",
          "Practical application",
          "Teaching methods",
          "Spiritual guidance"
        ]
      }
    ],
    resources: [
      {
        title: "Sacred Text Analysis: A Comprehensive Guide",
        link: "https://www.amazon.com/Sacred-Text-Analysis-Comprehensive-Methods/dp/0800663918?tag=zion0ba-20",
        description: "Guide to sacred text analysis methods"
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
    approach: "Modern Commentary",
    description: "Contemporary approaches to scriptural commentary",
    elements: [
      {
        name: "Interdisciplinary Analysis",
        features: [
          "Multiple perspectives",
          "Scientific integration",
          "Cultural analysis",
          "Modern methods"
        ],
        methods: [
          "Comparative study",
          "Cultural research",
          "Scientific analysis",
          "Interdisciplinary approach"
        ],
        implications: [
          "Broader understanding",
          "Modern relevance",
          "Cultural insight",
          "Research development"
        ]
      },
      {
        name: "Applied Commentary",
        features: [
          "Practical application",
          "Modern context",
          "Cultural relevance",
          "Contemporary wisdom"
        ],
        methods: [
          "Modern interpretation",
          "Cultural application",
          "Practical implementation",
          "Contemporary reflection"
        ],
        implications: [
          "Modern guidance",
          "Practical wisdom",
          "Cultural understanding",
          "Contemporary relevance"
        ]
      }
    ],
    resources: [
      {
        title: "Modern Commentary Methods",
        link: "https://www.amazon.com/Modern-Commentary-Methods-Contemporary-Approaches/dp/0800698741?tag=zion0ba-20",
        description: "Contemporary methods in scriptural commentary"
      }
    ]
  }
]

export default function ScripturalCommentariesPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Scriptural Commentaries & Sacred Interpretation</h1>
          <p className="text-xl text-muted-foreground">
            Explore commentary traditions and methods of interpreting sacred texts
          </p>
        </section>

        <Tabs defaultValue="traditions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="traditions">Commentary Traditions</TabsTrigger>
            <TabsTrigger value="methods">Interpretive Methods</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporary Approaches</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {commentaryTraditions.map((tradition) => (
                <Card key={tradition.tradition}>
                  <CardHeader>
                    <CardTitle>{tradition.tradition}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-muted-foreground">{tradition.overview}</p>

                      {tradition.commentaries.map((commentary) => (
                        <div key={commentary.name} className="space-y-4">
                          <h3 className="text-xl font-semibold">{commentary.name}</h3>
                          <p className="text-muted-foreground">{commentary.description}</p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <h4 className="font-semibold">Principles</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {commentary.principles.map((principle) => (
                                  <li key={principle}>{principle}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="font-semibold">Methods</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {commentary.methods.map((method) => (
                                  <li key={method}>{method}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Significance</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {commentary.significance.map((item) => (
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
              {interpretiveMethods.map((method) => (
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
              href="/studies/texts/scriptures"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Scriptures →
            </Link>
            <Link 
              href="/studies/texts/mystical"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Mystical Texts →
            </Link>
            <Link 
              href="/studies/methods/hermeneutics"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Hermeneutics →
            </Link>
            <Link 
              href="/studies/methods/exegesis"
              className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
            >
              Sacred Exegesis →
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  )
} 