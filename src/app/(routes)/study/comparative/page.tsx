import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ReligiousComparison {
  id: string
  category: string
  traditions: {
    name: string
    overview: string
    keyBeliefs: string[]
    practices: {
      name: string
      description: string
      significance: string
      frequency: string
    }[]
    sacredTexts: {
      name: string
      language: string
      period: string
      significance: string
    }[]
    concepts: {
      name: string
      description: string
      equivalents: {
        tradition: string
        concept: string
        similarity: string
      }[]
    }[]
  }[]
  commonalities: {
    theme: string
    description: string
    examples: {
      tradition: string
      example: string
    }[]
  }[]
  academicResources: {
    title: string
    author: string
    publisher: string
    year: number
    url: string
    type: string
    topics: string[]
  }[]
}

const comparativeData: ReligiousComparison[] = [
  {
    id: "divine-nature",
    category: "Concepts of the Divine",
    traditions: [
      {
        name: "Abrahamic Traditions",
        overview: "Monotheistic understanding of a personal God",
        keyBeliefs: [
          "One supreme deity",
          "Divine revelation through prophets",
          "Sacred texts as divine word",
          "Linear view of history",
          "Final judgment"
        ],
        practices: [
          {
            name: "Prayer",
            description: "Direct communication with the Divine",
            significance: "Essential act of worship and connection",
            frequency: "Multiple times daily"
          },
          {
            name: "Scripture Study",
            description: "Regular engagement with sacred texts",
            significance: "Understanding divine will and guidance",
            frequency: "Regular/Daily"
          }
        ],
        sacredTexts: [
          {
            name: "Torah",
            language: "Hebrew",
            period: "c. 1200-100 BCE",
            significance: "Divine law and instruction"
          },
          {
            name: "Bible",
            language: "Hebrew, Greek",
            period: "c. 1200 BCE - 100 CE",
            significance: "Divine revelation and salvation history"
          },
          {
            name: "Quran",
            language: "Arabic",
            period: "7th century CE",
            significance: "Direct divine revelation"
          }
        ],
        concepts: [
          {
            name: "Divine Unity",
            description: "Absolute oneness of God",
            equivalents: [
              {
                tradition: "Judaism",
                concept: "Echad",
                similarity: "Indivisible unity"
              },
              {
                tradition: "Islam",
                concept: "Tawhid",
                similarity: "Absolute oneness"
              }
            ]
          }
        ]
      },
      {
        name: "Dharmic Traditions",
        overview: "Various concepts of ultimate reality and divine manifestation",
        keyBeliefs: [
          "Cyclical nature of existence",
          "Karma and rebirth",
          "Multiple paths to liberation",
          "Interconnectedness of reality",
          "Non-dualistic perspectives"
        ],
        practices: [
          {
            name: "Meditation",
            description: "Inner contemplation and awareness",
            significance: "Path to enlightenment and self-realization",
            frequency: "Daily"
          },
          {
            name: "Ritual Worship",
            description: "Devotional practices and ceremonies",
            significance: "Connection with divine aspects",
            frequency: "Daily to occasional"
          }
        ],
        sacredTexts: [
          {
            name: "Vedas",
            language: "Sanskrit",
            period: "c. 1500-500 BCE",
            significance: "Eternal knowledge and wisdom"
          },
          {
            name: "Upanishads",
            language: "Sanskrit",
            period: "c. 800-500 BCE",
            significance: "Philosophical insights into ultimate reality"
          }
        ],
        concepts: [
          {
            name: "Ultimate Reality",
            description: "Understanding of absolute truth or being",
            equivalents: [
              {
                tradition: "Hinduism",
                concept: "Brahman",
                similarity: "Ultimate reality beyond form"
              },
              {
                tradition: "Buddhism",
                concept: "Dharmakaya",
                similarity: "Ultimate nature of reality"
              }
            ]
          }
        ]
      }
    ],
    commonalities: [
      {
        theme: "Ethical Principles",
        description: "Shared moral values and ethical guidelines",
        examples: [
          {
            tradition: "Judaism",
            example: "Ten Commandments"
          },
          {
            tradition: "Buddhism",
            example: "Five Precepts"
          },
          {
            tradition: "Islam",
            example: "Islamic Ethics (Akhlaq)"
          }
        ]
      },
      {
        theme: "Sacred Time",
        description: "Cyclical and linear concepts of sacred time and history",
        examples: [
          {
            tradition: "Christianity",
            example: "Liturgical Calendar"
          },
          {
            tradition: "Hinduism",
            example: "Yugas (World Ages)"
          }
        ]
      }
    ],
    academicResources: [
      {
        title: "Patterns in Comparative Religion",
        author: "Mircea Eliade",
        publisher: "University of Chicago Press",
        year: 1996,
        url: "https://press.uchicago.edu/comparative-religion",
        type: "Academic Book",
        topics: [
          "Religious Phenomenology",
          "Sacred Space",
          "Sacred Time",
          "Religious Symbols"
        ]
      },
      {
        title: "The Varieties of Religious Experience",
        author: "William James",
        publisher: "Oxford University Press",
        year: 2012,
        url: "https://oxford.com/varieties",
        type: "Classic Study",
        topics: [
          "Religious Psychology",
          "Mystical Experience",
          "Personal Religion",
          "Conversion"
        ]
      }
    ]
  }
]

export default function ComparativeReligionPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Comparative Religion Studies</h1>
        <p className="text-xl text-muted-foreground">
          Explore the similarities and differences between religious traditions
        </p>
      </section>

      {comparativeData.map((comparison) => (
        <section key={comparison.id} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{comparison.category}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Traditions Comparison */}
              {comparison.traditions.map((tradition) => (
                <div key={tradition.name} className="space-y-6">
                  <h3 className="text-xl font-semibold">{tradition.name}</h3>
                  <p className="text-muted-foreground">{tradition.overview}</p>

                  {/* Key Beliefs */}
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Beliefs</h4>
                    <ul className="list-disc list-inside text-sm">
                      {tradition.keyBeliefs.map((belief) => (
                        <li key={belief}>{belief}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Practices */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Religious Practices</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {tradition.practices.map((practice) => (
                        <div key={practice.name} className="p-4 bg-secondary rounded-lg">
                          <h5 className="font-medium">{practice.name}</h5>
                          <p className="text-sm">{practice.description}</p>
                          <p className="text-sm text-muted-foreground mt-2">
                            Frequency: {practice.frequency}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sacred Texts */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Sacred Texts</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {tradition.sacredTexts.map((text) => (
                        <div key={text.name} className="p-4 bg-secondary rounded-lg">
                          <h5 className="font-medium">{text.name}</h5>
                          <p className="text-sm">Language: {text.language}</p>
                          <p className="text-sm">Period: {text.period}</p>
                          <p className="text-sm text-muted-foreground mt-2">
                            {text.significance}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Concepts */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Key Concepts</h4>
                    {tradition.concepts.map((concept) => (
                      <div key={concept.name} className="space-y-2">
                        <h5 className="font-medium">{concept.name}</h5>
                        <p className="text-sm">{concept.description}</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {concept.equivalents.map((eq) => (
                            <div key={eq.tradition} className="text-sm">
                              <span className="font-medium">{eq.tradition}:</span>{" "}
                              {eq.concept} - {eq.similarity}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Common Themes */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Common Themes</h3>
                {comparison.commonalities.map((common) => (
                  <div key={common.theme} className="space-y-2">
                    <h4 className="font-medium">{common.theme}</h4>
                    <p className="text-sm">{common.description}</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {common.examples.map((ex) => (
                        <div key={ex.tradition} className="text-sm">
                          <span className="font-medium">{ex.tradition}:</span> {ex.example}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Academic Resources */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Academic Resources</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {comparison.academicResources.map((resource) => (
                    <a
                      key={resource.title}
                      href={resource.url}
                      className="block p-4 bg-secondary rounded-lg hover:bg-secondary/90"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h4 className="font-medium">{resource.title}</h4>
                      <p className="text-sm">by {resource.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {resource.publisher}, {resource.year}
                      </p>
                      <div className="mt-2">
                        <p className="text-sm font-medium">Topics:</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {resource.topics.map((topic) => (
                            <span
                              key={topic}
                              className="text-xs px-2 py-1 bg-primary/10 rounded"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      ))}
    </div>
  )
} 