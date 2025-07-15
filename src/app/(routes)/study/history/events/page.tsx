import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface HistoricalPeriod {
  id: string
  era: string
  timeframe: string
  events: HistoricalEvent[]
}

interface HistoricalEvent {
  id: string
  title: string
  date: string
  location: {
    region: string
    coordinates?: {
      latitude: number
      longitude: number
    }
    modernLocation: string
  }
  tradition: string[]
  description: string
  significance: string[]
  keyFigures: {
    name: string
    role: string
    contribution: string
    dates?: string
  }[]
  impact: {
    immediate: string[]
    longTerm: string[]
    cultural: string[]
    theological: string[]
  }
  artifacts: {
    type: string
    name: string
    location: string
    significance: string
    imageUrl?: string
  }[]
  sources: {
    primary: {
      title: string
      author?: string
      date: string
      type: string
      link?: string
    }[]
    academic: {
      title: string
      author: string
      publication: string
      year: number
      doi?: string
      link?: string
    }[]
  }
}

const historicalPeriods: HistoricalPeriod[] = [
  {
    id: "ancient",
    era: "Ancient Period",
    timeframe: "3000 BCE - 500 CE",
    events: [
      {
        id: "akhenaten-revolution",
        title: "Akhenaten's Religious Revolution",
        date: "c. 1353-1336 BCE",
        location: {
          region: "Ancient Egypt",
          coordinates: {
            latitude: 27.7435,
            longitude: 30.8503
          },
          modernLocation: "Tell el-Amarna, Egypt"
        },
        tradition: ["Ancient Egyptian Religion"],
        description: "The first recorded attempt at establishing monotheism in history, when Pharaoh Akhenaten abolished the traditional Egyptian pantheon in favor of the worship of Aten.",
        significance: [
          "First documented monotheistic revolution",
          "Radical departure from traditional Egyptian polytheism",
          "Influenced development of subsequent monotheistic traditions",
          "Revolutionary changes in Egyptian art and architecture"
        ],
        keyFigures: [
          {
            name: "Akhenaten",
            role: "Pharaoh",
            contribution: "Initiated religious reforms and established Aten worship",
            dates: "c. 1380-1336 BCE"
          },
          {
            name: "Nefertiti",
            role: "Queen",
            contribution: "Supported religious reforms and served as high priestess",
            dates: "c. 1370-1330 BCE"
          }
        ],
        impact: {
          immediate: [
            "Construction of new capital city at Amarna",
            "Development of naturalistic art style",
            "Suppression of traditional cults",
            "Administrative reorganization of Egypt"
          ],
          longTerm: [
            "Influence on development of monotheistic religions",
            "Changes in religious architectural design",
            "Impact on historical understanding of religious reform"
          ],
          cultural: [
            "Revolutionary changes in artistic representation",
            "New forms of religious expression",
            "Innovations in architectural design"
          ],
          theological: [
            "Development of personal relationship with deity",
            "Concept of universal solar deity",
            "Simplified religious practices"
          ]
        },
        artifacts: [
          {
            type: "Sculpture",
            name: "Colossal Statue of Akhenaten",
            location: "Egyptian Museum, Cairo",
            significance: "Demonstrates new artistic style and religious symbolism"
          },
          {
            type: "Relief",
            name: "The Great Hymn to the Aten",
            location: "Tomb of Ay, Amarna",
            significance: "Primary theological text of Aten worship"
          }
        ],
        sources: {
          primary: [
            {
              title: "Great Hymn to the Aten",
              author: "Attributed to Akhenaten",
              date: "c. 1345 BCE",
              type: "Religious Text"
            },
            {
              title: "Amarna Letters",
              date: "14th century BCE",
              type: "Diplomatic Correspondence"
            }
          ],
          academic: [
            {
              title: "Akhenaten and the Origins of Monotheism",
              author: "James K. Hoffmeier",
              publication: "Oxford University Press",
              year: 2015,
              doi: "10.1093/acprof:oso/9780199792085.001.0001"
            },
            {
              title: "Akhenaten: History, Fantasy and Ancient Egypt",
              author: "Dominic Montserrat",
              publication: "Routledge",
              year: 2000,
              doi: "10.4324/9780203165874"
            }
          ]
        }
      }
    ]
  }
]

export default function ReligiousHistoryEventsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Religious History Events</h1>
        <p className="text-xl text-muted-foreground">
          Explore significant events that shaped religious history and their lasting impact
        </p>
      </section>

      <Tabs defaultValue="ancient" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          {historicalPeriods.map((period) => (
            <TabsTrigger key={period.id} value={period.id}>
              {period.era}
            </TabsTrigger>
          ))}
        </TabsList>

        {historicalPeriods.map((period) => (
          <TabsContent key={period.id} value={period.id} className="space-y-8">
            <div className="grid gap-6">
              {period.events.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl">{event.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {event.date} • {event.location.region}
                        </p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Description and Significance */}
                    <div className="space-y-4">
                      <p className="text-lg">{event.description}</p>
                      <div>
                        <h4 className="font-medium mb-2">Historical Significance</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {event.significance.map((point, index) => (
                            <li key={index} className="text-sm">{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Key Figures */}
                    <div className="space-y-4">
                      <h4 className="font-medium">Key Historical Figures</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {event.keyFigures.map((figure) => (
                          <div key={figure.name} className="p-4 bg-secondary rounded-lg">
                            <h5 className="font-medium">{figure.name}</h5>
                            <p className="text-sm text-muted-foreground">{figure.role}</p>
                            <p className="text-sm mt-2">{figure.contribution}</p>
                            {figure.dates && (
                              <p className="text-sm text-muted-foreground mt-1">
                                {figure.dates}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Historical Impact */}
                    <div className="space-y-4">
                      <h4 className="font-medium">Historical Impact</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h5 className="font-medium text-sm">Immediate Impact</h5>
                          <ul className="list-disc list-inside space-y-1">
                            {event.impact.immediate.map((impact, index) => (
                              <li key={index} className="text-sm">{impact}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium text-sm">Long-term Impact</h5>
                          <ul className="list-disc list-inside space-y-1">
                            {event.impact.longTerm.map((impact, index) => (
                              <li key={index} className="text-sm">{impact}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Artifacts */}
                    <div className="space-y-4">
                      <h4 className="font-medium">Historical Artifacts</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {event.artifacts.map((artifact) => (
                          <div key={artifact.name} className="p-4 bg-secondary rounded-lg">
                            <h5 className="font-medium">{artifact.name}</h5>
                            <p className="text-sm text-muted-foreground">
                              {artifact.type}
                            </p>
                            <p className="text-sm mt-2">{artifact.significance}</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              Location: {artifact.location}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sources */}
                    <div className="space-y-4">
                      <h4 className="font-medium">Historical Sources</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h5 className="font-medium text-sm">Primary Sources</h5>
                          {event.sources.primary.map((source) => (
                            <div key={source.title} className="text-sm">
                              <p className="font-medium">{source.title}</p>
                              {source.author && <p>Author: {source.author}</p>}
                              <p className="text-muted-foreground">
                                {source.date} • {source.type}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium text-sm">Academic Sources</h5>
                          {event.sources.academic.map((source) => (
                            <div key={source.title} className="text-sm">
                              <p className="font-medium">{source.title}</p>
                              <p>{source.author}</p>
                              <p className="text-muted-foreground">
                                {source.publication}, {source.year}
                              </p>
                              {source.doi && (
                                <a
                                  href={`https://doi.org/${source.doi}`}
                                  className="text-primary hover:underline"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  DOI: {source.doi}
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
} 