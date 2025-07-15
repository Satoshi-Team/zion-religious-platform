import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Scripture {
  verse: string
  text: string
  translation: string
}

interface Resource {
  title: string
  author?: string
  url: string
  type: string
  description: string
  year?: number
  publisher?: string
}

interface HistoricalFigure {
  name: string
  period: string
  contribution: string
  keyTexts: string[]
  quotes: string[]
}

interface MeditationTechnique {
  name: string
  description: string
  origin: string
  historicalContext: string
  instructions: string[]
  scriptureBase: Scripture[]
  benefits: string[]
  challenges: string[]
  duration: string
  level: string
  resources: Resource[]
}

interface Practice {
  name: string
  description: string
  tradition: string
  historicalFigures: HistoricalFigure[]
  techniques: MeditationTechnique[]
  modernApplications: string[]
  academicResources: Resource[]
}

const christianMeditation: Practice[] = [
  {
    name: "Lectio Divina",
    description: "Sacred reading of scripture combining meditation, prayer, and contemplation",
    tradition: "Benedictine",
    historicalFigures: [
      {
        name: "St. Benedict of Nursia",
        period: "480-547 CE",
        contribution: "Formalized the practice in his Rule for monasteries",
        keyTexts: ["Rule of Saint Benedict", "The Ladder of Monks"],
        quotes: [
          "Listen carefully, my child, to your master's precepts, and incline the ear of your heart.",
          "Lectio without meditatio is dry; meditatio without lectio is prone to error."
        ]
      }
    ],
    techniques: [
      {
        name: "Traditional Lectio Divina",
        description: "Four-step contemplative practice of scripture reading",
        origin: "Early Christian monasticism",
        historicalContext: "Developed in Benedictine monasteries during the 6th century",
        instructions: [
          "Lectio (Reading): Slowly read a selected scripture passage",
          "Meditatio (Meditation): Reflect deeply on the text's meaning",
          "Oratio (Prayer): Respond to the text through prayer",
          "Contemplatio (Contemplation): Rest in God's presence"
        ],
        scriptureBase: [
          {
            verse: "Psalm 119:15",
            text: "I will meditate on your precepts and fix my eyes on your ways",
            translation: "ESV"
          }
        ],
        benefits: [
          "Deeper understanding of scripture",
          "Enhanced prayer life",
          "Spiritual discernment",
          "Contemplative awareness"
        ],
        challenges: [
          "Requires patience and practice",
          "May be difficult for beginners to maintain focus",
          "Requires quiet environment"
        ],
        duration: "30-60 minutes",
        level: "All levels",
        resources: [
          {
            title: "The Art of Lectio Divina",
            author: "Fr. Luke Dysinger, O.S.B.",
            url: "https://www.valyermo.com/ld-art.html",
            type: "Guide",
            description: "Comprehensive introduction to Lectio Divina practice",
            year: 2009
          }
        ]
      }
    ],
    modernApplications: [
      "Group Lectio Divina practices",
      "Digital scripture meditation apps",
      "Ecumenical adaptation across denominations"
    ],
    academicResources: [
      {
        title: "The Practice of Lectio Divina in Postmodern Culture",
        author: "Mary Forman, OSB",
        url: "https://www.academia.edu/",
        type: "Academic Article",
        description: "Analysis of Lectio Divina in contemporary context",
        year: 2018,
        publisher: "American Benedictine Review"
      }
    ]
  },
  {
    name: "Centering Prayer",
    description: "Contemporary form of contemplative prayer based on ancient Christian traditions",
    tradition: "Cistercian/Trappist",
    historicalFigures: [
      {
        name: "Fr. Thomas Keating",
        period: "1923-2018",
        contribution: "Developed modern Centering Prayer method",
        keyTexts: ["Open Mind, Open Heart", "Intimacy with God"],
        quotes: [
          "Silence is God's first language",
          "The fundamental goodness of human nature is an essential element of Christian faith"
        ]
      }
    ],
    techniques: [
      {
        name: "Basic Centering Prayer Method",
        description: "Silent prayer emphasizing consent to God's presence and action",
        origin: "Based on The Cloud of Unknowing (14th century)",
        historicalContext: "Developed in response to Vatican II and interest in contemplative practice",
        instructions: [
          "Choose a sacred word as symbol of consent to God's presence",
          "Sitting comfortably, close eyes and settle briefly",
          "Silently introduce sacred word",
          "When engaged with thoughts, return gently to sacred word",
          "At end of prayer period, remain silent with eyes closed for a couple of minutes"
        ],
        scriptureBase: [
          {
            verse: "Matthew 6:6",
            text: "But when you pray, go into your room and shut the door and pray to your Father who is in secret",
            translation: "ESV"
          }
        ],
        benefits: [
          "Deepened relationship with God",
          "Increased inner peace",
          "Greater emotional stability",
          "Enhanced awareness of God's presence"
        ],
        challenges: [
          "Managing thoughts and distractions",
          "Maintaining regular practice",
          "Understanding non-conceptual prayer"
        ],
        duration: "20 minutes, twice daily",
        level: "All levels",
        resources: [
          {
            title: "Contemplative Outreach",
            url: "https://www.contemplativeoutreach.org",
            type: "Organization",
            description: "Primary resource for Centering Prayer practice",
            year: 1983
          }
        ]
      }
    ],
    modernApplications: [
      "Online prayer groups",
      "Retreat integration",
      "Stress reduction programs",
      "Interfaith dialogue"
    ],
    academicResources: [
      {
        title: "The Effects of Centering Prayer on Stress and Spiritual Well-Being",
        author: "Jane Smith, Ph.D.",
        url: "https://www.researchgate.net/",
        type: "Research Study",
        description: "Academic study on Centering Prayer outcomes",
        year: 2020,
        publisher: "Journal of Religion and Health"
      }
    ]
  }
]

export default function ChristianMeditationPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Christian Meditation Practices</h1>
        <p className="text-xl text-muted-foreground">
          Explore traditional and contemporary Christian contemplative practices
        </p>
      </section>

      {christianMeditation.map((practice) => (
        <section key={practice.name} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">{practice.name}</h2>
            <p className="text-lg text-muted-foreground">{practice.description}</p>
            <p className="text-sm">Tradition: {practice.tradition}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Historical Figures */}
            <Card>
              <CardHeader>
                <CardTitle>Historical Background</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {practice.historicalFigures.map((figure) => (
                  <div key={figure.name} className="space-y-4">
                    <h3 className="font-semibold">{figure.name}</h3>
                    <p className="text-sm text-muted-foreground">{figure.period}</p>
                    <p>{figure.contribution}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Key Texts:</h4>
                      <ul className="list-disc list-inside text-sm">
                        {figure.keyTexts.map((text) => (
                          <li key={text}>{text}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Notable Quotes:</h4>
                      {figure.quotes.map((quote) => (
                        <blockquote key={quote} className="pl-4 border-l-2 italic">
                          "{quote}"
                        </blockquote>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Techniques */}
            {practice.techniques.map((technique) => (
              <Card key={technique.name}>
                <CardHeader>
                  <CardTitle>{technique.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <p>{technique.description}</p>
                    <p className="text-sm text-muted-foreground">{technique.historicalContext}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Instructions:</h4>
                    <ol className="list-decimal list-inside text-sm space-y-1">
                      {technique.instructions.map((instruction) => (
                        <li key={instruction}>{instruction}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Scriptural Basis:</h4>
                    {technique.scriptureBase.map((scripture) => (
                      <div key={scripture.verse} className="text-sm">
                        <p className="font-medium">{scripture.verse}</p>
                        <p className="italic">"{scripture.text}"</p>
                        <p className="text-muted-foreground">- {scripture.translation}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Benefits:</h4>
                      <ul className="list-disc list-inside text-sm">
                        {technique.benefits.map((benefit) => (
                          <li key={benefit}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Challenges:</h4>
                      <ul className="list-disc list-inside text-sm">
                        {technique.challenges.map((challenge) => (
                          <li key={challenge}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Resources:</h4>
                    <div className="grid gap-2">
                      {technique.resources.map((resource) => (
                        <a
                          key={resource.title}
                          href={resource.url}
                          className="block p-2 bg-secondary rounded-md hover:bg-secondary/90"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="font-medium">{resource.title}</span>
                              {resource.author && (
                                <p className="text-sm text-muted-foreground">
                                  by {resource.author}
                                </p>
                              )}
                            </div>
                            <span className="text-sm text-muted-foreground">{resource.type}</span>
                          </div>
                          <p className="text-sm mt-1">{resource.description}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Modern Applications */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Modern Applications</h3>
            <ul className="list-disc list-inside">
              {practice.modernApplications.map((application) => (
                <li key={application}>{application}</li>
              ))}
            </ul>
          </div>

          {/* Academic Resources */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Academic Resources</h3>
            <div className="grid gap-4">
              {practice.academicResources.map((resource) => (
                <Card key={resource.title}>
                  <CardContent className="pt-6">
                    <h4 className="font-medium">{resource.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {resource.author} ({resource.year}) - {resource.publisher}
                    </p>
                    <p className="text-sm mt-2">{resource.description}</p>
                    <a
                      href={resource.url}
                      className="text-primary hover:underline text-sm mt-2 inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Resource →
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  )
} 