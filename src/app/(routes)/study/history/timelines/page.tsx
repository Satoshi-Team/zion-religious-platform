import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Timeline {
  id: string
  tradition: string
  periods: Period[]
  overview: string
  significance: string[]
}

interface Period {
  id: string
  name: string
  timeframe: string
  events: TimelineEvent[]
  culturalContext: {
    social: string[]
    political: string[]
    economic: string[]
  }
  developments: {
    theological: string[]
    institutional: string[]
    textual: string[]
  }
}

interface TimelineEvent {
  id: string
  date: string
  title: string
  description: string
  location: string
  keyFigures: {
    name: string
    role: string
    significance: string
  }[]
  impact: {
    religious: string[]
    social: string[]
    political: string[]
  }
  artifacts: {
    name: string
    type: string
    location: string
    significance: string
  }[]
  sources: {
    primary: string[]
    academic: {
      citation: string
      doi?: string
    }[]
  }
}

const religiousTimelines: Timeline[] = [
  {
    id: "buddhism",
    tradition: "Buddhism",
    overview: "Chronological development of Buddhist thought, practice, and spread across Asia and globally",
    significance: [
      "Evolution from regional to global religion",
      "Development of major schools and traditions",
      "Cultural adaptation and synthesis",
      "Modern revival and Western adoption"
    ],
    periods: [
      {
        id: "early-buddhism",
        name: "Early Buddhism",
        timeframe: "6th century BCE - 1st century BCE",
        events: [
          {
            id: "buddha-enlightenment",
            date: "c. 486 BCE",
            title: "Buddha's Enlightenment",
            description: "Siddhartha Gautama attains enlightenment under the Bodhi tree at Bodh Gaya",
            location: "Bodh Gaya, modern-day Bihar, India",
            keyFigures: [
              {
                name: "Siddhartha Gautama",
                role: "Founder",
                significance: "Attained enlightenment and established Buddhist teachings"
              },
              {
                name: "Five Ascetics",
                role: "First Disciples",
                significance: "First to hear the Buddha's teachings at Deer Park"
              }
            ],
            impact: {
              religious: [
                "Establishment of the Four Noble Truths",
                "Foundation of the Buddhist Sangha",
                "Development of meditation practices"
              ],
              social: [
                "Challenge to caste system",
                "New model of spiritual community",
                "Alternative to Brahmanical traditions"
              ],
              political: [
                "Royal patronage of Buddhism",
                "New social mobility through monastic system",
                "Alternative power structure to Brahmanical order"
              ]
            },
            artifacts: [
              {
                name: "Mahabodhi Temple",
                type: "Architecture",
                location: "Bodh Gaya, India",
                significance: "Marks the site of Buddha's enlightenment"
              },
              {
                name: "Ashoka Pillar",
                type: "Monument",
                location: "Various locations in India",
                significance: "Early evidence of Buddhist spread and royal patronage"
              }
            ],
            sources: {
              primary: [
                "Vinaya Pitaka accounts",
                "Lalitavistara Sutra",
                "Buddhacarita"
              ],
              academic: [
                {
                  citation: "The Life of the Buddha: According to the Pali Canon by Bhikkhu Ñanamoli",
                  doi: "10.1093/acprof:oso/9780198154785.001.0001"
                },
                {
                  citation: "Early Buddhism: A New Approach by Sue Hamilton",
                  doi: "10.4324/9780203451175"
                }
              ]
            }
          }
        ],
        culturalContext: {
          social: [
            "Urbanization in Gangetic plain",
            "Emergence of new religious movements",
            "Challenge to Vedic orthodoxy"
          ],
          political: [
            "Rise of Magadha kingdom",
            "Competition between regional powers",
            "New forms of political organization"
          ],
          economic: [
            "Growth of trade networks",
            "Urban merchant class emergence",
            "New economic systems"
          ]
        },
        developments: {
          theological: [
            "Formulation of Four Noble Truths",
            "Development of meditation techniques",
            "Establishment of monastic rules"
          ],
          institutional: [
            "Formation of Sangha",
            "Development of monastic codes",
            "Establishment of Buddhist councils"
          ],
          textual: [
            "Oral transmission of teachings",
            "Early compilation of sutras",
            "Development of Vinaya"
          ]
        }
      }
    ]
  },
  {
    id: "christianity",
    tradition: "Christianity",
    overview: "Development from Jewish sect to global religion, including major theological developments and institutional changes",
    significance: [
      "Transformation from Jewish movement to universal religion",
      "Development of church institutions",
      "Integration with various cultures",
      "Impact on Western civilization"
    ],
    periods: [
      {
        id: "apostolic-age",
        name: "Apostolic Age",
        timeframe: "c. 30-100 CE",
        events: [
          {
            id: "pentecost",
            date: "c. 30 CE",
            title: "Day of Pentecost",
            description: "Foundational event marking the beginning of Christian mission",
            location: "Jerusalem",
            keyFigures: [
              {
                name: "Peter",
                role: "Apostle",
                significance: "Leader of early Christian community"
              },
              {
                name: "Paul",
                role: "Apostle",
                significance: "Major missionary and theological writer"
              }
            ],
            impact: {
              religious: [
                "Establishment of first Christian community",
                "Beginning of Christian mission",
                "Development of early Christian worship"
              ],
              social: [
                "Formation of new religious communities",
                "Cross-cultural religious movement",
                "New social networks"
              ],
              political: [
                "Tension with Jewish authorities",
                "Relationship with Roman authority",
                "Development of church leadership"
              ]
            },
            artifacts: [
              {
                name: "Cenacle",
                type: "Architecture",
                location: "Jerusalem",
                significance: "Traditional site of Pentecost"
              }
            ],
            sources: {
              primary: [
                "Acts of the Apostles",
                "Pauline Epistles",
                "Early Church Fathers"
              ],
              academic: [
                {
                  citation: "Christianity in the Making: Jesus and the Rise of Early Christianity by James D.G. Dunn",
                  doi: "10.1002/9780470773444"
                }
              ]
            }
          }
        ],
        culturalContext: {
          social: [
            "Jewish diaspora communities",
            "Greco-Roman cultural dominance",
            "Urban-centered religious movements"
          ],
          political: [
            "Roman imperial control",
            "Jewish political tensions",
            "Local autonomy systems"
          ],
          economic: [
            "Mediterranean trade networks",
            "Temple economy",
            "Urban economic systems"
          ]
        },
        developments: {
          theological: [
            "Christological development",
            "Pneumatology",
            "Ecclesiology"
          ],
          institutional: [
            "Church leadership structures",
            "Worship patterns",
            "Community organization"
          ],
          textual: [
            "Gospel formation",
            "Epistolary literature",
            "Early Christian writings"
          ]
        }
      }
    ]
  }
]

export default function ReligiousTimelinesPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Religious Tradition Timelines</h1>
        <p className="text-xl text-muted-foreground">
          Explore the historical development of major religious traditions
        </p>
      </section>

      <Tabs defaultValue={religiousTimelines[0].id} className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          {religiousTimelines.map((timeline) => (
            <TabsTrigger key={timeline.id} value={timeline.id}>
              {timeline.tradition}
            </TabsTrigger>
          ))}
        </TabsList>

        {religiousTimelines.map((timeline) => (
          <TabsContent key={timeline.id} value={timeline.id} className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>{timeline.tradition} Timeline</CardTitle>
                <p className="text-muted-foreground">{timeline.overview}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Historical Significance</h3>
                    <ul className="list-disc list-inside mt-2">
                      {timeline.significance.map((point, index) => (
                        <li key={index} className="text-sm">{point}</li>
                      ))}
                    </ul>
                  </div>

                  {timeline.periods.map((period) => (
                    <div key={period.id} className="mt-8 space-y-6">
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="text-xl font-semibold">{period.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {period.timeframe}
                        </p>
                      </div>

                      {/* Cultural Context */}
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-medium">Social Context</h4>
                          <ul className="list-disc list-inside text-sm">
                            {period.culturalContext.social.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">Political Context</h4>
                          <ul className="list-disc list-inside text-sm">
                            {period.culturalContext.political.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">Economic Context</h4>
                          <ul className="list-disc list-inside text-sm">
                            {period.culturalContext.economic.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Events */}
                      {period.events.map((event) => (
                        <Card key={event.id} className="mt-4">
                          <CardHeader>
                            <CardTitle className="text-lg">
                              {event.title}
                              <span className="text-sm text-muted-foreground ml-2">
                                {event.date}
                              </span>
                            </CardTitle>
                            <p className="text-sm">{event.description}</p>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            {/* Key Figures */}
                            <div className="space-y-2">
                              <h4 className="font-medium">Key Figures</h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                {event.keyFigures.map((figure) => (
                                  <div
                                    key={figure.name}
                                    className="p-4 bg-secondary rounded-lg"
                                  >
                                    <h5 className="font-medium">{figure.name}</h5>
                                    <p className="text-sm text-muted-foreground">
                                      {figure.role}
                                    </p>
                                    <p className="text-sm mt-2">
                                      {figure.significance}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Impact */}
                            <div className="grid md:grid-cols-3 gap-4">
                              <div className="space-y-2">
                                <h4 className="font-medium">Religious Impact</h4>
                                <ul className="list-disc list-inside text-sm">
                                  {event.impact.religious.map((item, index) => (
                                    <li key={index}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="space-y-2">
                                <h4 className="font-medium">Social Impact</h4>
                                <ul className="list-disc list-inside text-sm">
                                  {event.impact.social.map((item, index) => (
                                    <li key={index}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="space-y-2">
                                <h4 className="font-medium">Political Impact</h4>
                                <ul className="list-disc list-inside text-sm">
                                  {event.impact.political.map((item, index) => (
                                    <li key={index}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Sources */}
                            <div className="space-y-2">
                              <h4 className="font-medium">Historical Sources</h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="text-sm font-medium">
                                    Primary Sources
                                  </h5>
                                  <ul className="list-disc list-inside text-sm">
                                    {event.sources.primary.map((source, index) => (
                                      <li key={index}>{source}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="text-sm font-medium">
                                    Academic Sources
                                  </h5>
                                  <ul className="space-y-2">
                                    {event.sources.academic.map((source, index) => (
                                      <li key={index} className="text-sm">
                                        {source.citation}
                                        {source.doi && (
                                          <a
                                            href={`https://doi.org/${source.doi}`}
                                            className="text-primary hover:underline block"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            DOI: {source.doi}
                                          </a>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
} 