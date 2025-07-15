import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface HistoricalEvent {
  id: string
  period: string
  date?: string
  title: string
  location: string
  significance: string
  description: string
  keyFigures: {
    name: string
    role: string
    significance: string
  }[]
  impact: {
    immediate: string[]
    longTerm: string[]
    modern: string[]
  }
  sources: {
    primary: {
      title: string
      type: string
      date: string
      location: string
      access: string
    }[]
    academic: {
      title: string
      author: string
      publisher: string
      year: number
      url: string
      doi?: string
    }[]
  }
}

const religiousHistory: HistoricalEvent[] = [
  {
    id: "first-council-nicaea",
    period: "Early Christianity",
    date: "325 CE",
    title: "First Council of Nicaea",
    location: "Nicaea, Bithynia (modern-day İznik, Turkey)",
    significance: "First ecumenical council of the Christian church, establishing core doctrinal principles",
    description: "Called by Emperor Constantine I to resolve disputes in the early Christian church, particularly regarding the nature of Jesus and his relationship to God the Father. The council established the Nicene Creed, setting fundamental Christian doctrine.",
    keyFigures: [
      {
        name: "Constantine I",
        role: "Roman Emperor",
        significance: "Convened the council and presided over its opening"
      },
      {
        name: "Athanasius of Alexandria",
        role: "Theologian",
        significance: "Key defender of Trinitarian doctrine"
      },
      {
        name: "Arius",
        role: "Alexandrian Priest",
        significance: "Proponent of non-Trinitarian view that sparked the controversy"
      }
    ],
    impact: {
      immediate: [
        "Establishment of the Nicene Creed",
        "Resolution of the Arian controversy",
        "Standardization of the date of Easter",
        "Creation of first universal Christian doctrine"
      ],
      longTerm: [
        "Foundation for Christian theological development",
        "Model for future ecumenical councils",
        "Establishment of church-state relations pattern",
        "Influence on Christian denominational structures"
      ],
      modern: [
        "Continued use of Nicene Creed in Christian denominations",
        "Influence on modern interfaith dialogue",
        "Reference point for contemporary theological debates",
        "Model for resolving doctrinal disputes"
      ]
    },
    sources: {
      primary: [
        {
          title: "Ecclesiastical History",
          type: "Historical Text",
          date: "c. 325 CE",
          location: "Various manuscript collections",
          access: "Vatican Apostolic Library"
        }
      ],
      academic: [
        {
          title: "The First Council of Nicaea: A Historical Analysis",
          author: "Dr. Lewis Ayres",
          publisher: "Oxford University Press",
          year: 2019,
          url: "https://oxford.com/nicaea-studies",
          doi: "10.1093/acprof:oso/9780198755123.001.0001"
        }
      ]
    }
  },
  {
    id: "islamic-golden-age",
    period: "Medieval Islamic History",
    date: "8th-14th centuries CE",
    title: "Islamic Golden Age",
    location: "Abbasid Caliphate (spanning from modern-day Iraq to North Africa)",
    significance: "Period of unprecedented intellectual and cultural advancement in Islamic civilization",
    description: "Era marked by significant developments in sciences, philosophy, literature, and arts under Islamic civilization. Characterized by extensive translation movements, scientific discoveries, and cultural exchange.",
    keyFigures: [
      {
        name: "Al-Khwarizmi",
        role: "Mathematician",
        significance: "Father of algebra and algorithms"
      },
      {
        name: "Ibn Sina (Avicenna)",
        role: "Physician and Philosopher",
        significance: "Author of The Canon of Medicine"
      },
      {
        name: "Al-Biruni",
        role: "Universal Scholar",
        significance: "Contributions to physics, astronomy, and mathematics"
      }
    ],
    impact: {
      immediate: [
        "Development of algebra and advanced mathematics",
        "Advances in medicine and astronomy",
        "Establishment of major learning centers",
        "Preservation of ancient Greek and Roman knowledge"
      ],
      longTerm: [
        "Influence on European Renaissance",
        "Development of scientific method",
        "Advancement of medical knowledge",
        "Cultural and intellectual exchange between East and West"
      ],
      modern: [
        "Foundation for modern scientific disciplines",
        "Influence on modern educational systems",
        "Model for intellectual and religious coexistence",
        "Inspiration for contemporary Islamic scholarship"
      ]
    },
    sources: {
      primary: [
        {
          title: "House of Wisdom Archives",
          type: "Historical Institution",
          date: "8th-13th centuries CE",
          location: "Baghdad, Iraq",
          access: "Various libraries and collections"
        }
      ],
      academic: [
        {
          title: "The Islamic Golden Age: Science, Philosophy, and Social Progress",
          author: "Dr. Maria Abdullah",
          publisher: "Cambridge University Press",
          year: 2021,
          url: "https://cambridge.org/islamic-golden-age",
          doi: "10.1017/CBO9780511123456"
        }
      ]
    }
  }
]

export default function ReligiousHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Religious History</h1>
        <p className="text-xl text-muted-foreground">
          Explore significant events and periods that shaped religious thought and practice
        </p>
      </section>

      {religiousHistory.map((event) => (
        <section key={event.id} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-col space-y-2">
                <span>{event.title}</span>
                <span className="text-lg text-muted-foreground">
                  {event.period} • {event.date}
                </span>
              </CardTitle>
              <p className="text-muted-foreground">{event.location}</p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Description and Significance */}
              <div className="space-y-4">
                <p className="text-lg">{event.description}</p>
                <p className="font-medium">Significance: {event.significance}</p>
              </div>

              {/* Key Figures */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Figures</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {event.keyFigures.map((figure) => (
                    <div key={figure.name} className="space-y-2">
                      <p className="font-medium">{figure.name}</p>
                      <p className="text-sm">{figure.role}</p>
                      <p className="text-sm text-muted-foreground">{figure.significance}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Historical Impact */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Historical Impact</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium">Immediate Impact</h4>
                    <ul className="list-disc list-inside text-sm">
                      {event.impact.immediate.map((impact) => (
                        <li key={impact}>{impact}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Long-term Impact</h4>
                    <ul className="list-disc list-inside text-sm">
                      {event.impact.longTerm.map((impact) => (
                        <li key={impact}>{impact}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Modern Relevance</h4>
                    <ul className="list-disc list-inside text-sm">
                      {event.impact.modern.map((impact) => (
                        <li key={impact}>{impact}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sources */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Historical Sources</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Primary Sources */}
                  <div>
                    <h4 className="font-medium mb-2">Primary Sources</h4>
                    <div className="space-y-2">
                      {event.sources.primary.map((source) => (
                        <div key={source.title} className="p-2 bg-secondary rounded-md">
                          <p className="font-medium">{source.title}</p>
                          <p className="text-sm">{source.type}</p>
                          <p className="text-sm text-muted-foreground">
                            {source.date} • {source.location}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Academic Sources */}
                  <div>
                    <h4 className="font-medium mb-2">Academic Resources</h4>
                    <div className="space-y-2">
                      {event.sources.academic.map((source) => (
                        <a
                          key={source.title}
                          href={source.url}
                          className="block p-2 bg-secondary rounded-md hover:bg-secondary/90"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex justify-between">
                            <span className="font-medium">{source.title}</span>
                            <span className="text-sm text-muted-foreground">{source.year}</span>
                          </div>
                          <p className="text-sm">by {source.author}</p>
                          <p className="text-sm text-muted-foreground">{source.publisher}</p>
                          {source.doi && (
                            <p className="text-sm text-primary">DOI: {source.doi}</p>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      ))}
    </div>
  )
} 