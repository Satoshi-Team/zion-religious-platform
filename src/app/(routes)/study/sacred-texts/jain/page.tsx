import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Jain Agamas | Sacred Texts of Jainism",
  description: "Comprehensive guide to the Jain Agamas, including Svetambara and Digambara canons, their preservation, interpretation, and significance in Jain philosophy and practice.",
  keywords: [
    "Jain Agamas",
    "Jain scriptures",
    "Svetambara canon",
    "Digambara texts",
    "Angas",
    "Purvas",
    "Jain philosophy",
    "Jain literature",
    "Prakrit texts",
    "Jain doctrine"
  ],
  openGraph: {
    title: "Jain Agamas - Sacred Texts of Jainism",
    description: "Explore the ancient canonical texts of Jainism and their profound philosophical teachings",
    images: [
      {
        url: "/images/jain-agamas-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient Jain Manuscripts"
      }
    ]
  }
}

interface JainText {
  id: string
  title: {
    prakrit: string
    sanskrit: string
    english: string
  }
  tradition: "Svetambara" | "Digambara"
  category: "Anga" | "Upanga" | "Mula" | "Cheda" | "Other"
  period: {
    composition: string
    written: string
    currentForm: string
  }
  content: {
    overview: string
    mainThemes: string[]
    structure: {
      sections: {
        name: string
        topics: string[]
        significance: string
      }[]
      organization: string
      language: string[]
    }
    doctrines: {
      philosophical: string[]
      ethical: string[]
      practical: string[]
    }
    significance: {
      historical: string[]
      theological: string[]
      practical: string[]
    }
  }
  transmission: {
    oral: {
      methods: string[]
      lineages: string[]
      preservation: string[]
    }
    written: {
      history: {
        period: string
        events: string[]
        significance: string
      }[]
      manuscripts: {
        oldest: {
          date: string
          location: string
          condition: string
          contents: string
        }
        significant: {
          name: string
          date: string
          location: string
          importance: string[]
        }[]
      }
    }
    modern: {
      preservation: string[]
      challenges: string[]
      initiatives: {
        name: string
        description: string
        organization: string
        status: string
      }[]
    }
  }
  interpretation: {
    schools: {
      name: string
      period: string
      approach: string[]
      keyScholars: string[]
      texts: string[]
    }[]
    commentaries: {
      title: string
      author: string
      period: string
      language: string
      significance: string[]
    }[]
    modern: {
      scholars: {
        name: string
        institution: string
        contributions: string[]
        publications: {
          title: string
          year: number
          publisher: string
          significance: string
        }[]
      }[]
      approaches: {
        method: string
        description: string
        practitioners: string[]
        examples: string[]
      }[]
    }
  }
  study: {
    traditional: {
      institutions: {
        name: string
        location: string
        focus: string[]
        methods: string[]
      }[]
      practices: {
        type: string
        description: string
        requirements: string[]
        significance: string
      }[]
    }
    academic: {
      institutions: {
        name: string
        location: string
        programs: string[]
        resources: string[]
      }[]
      research: {
        areas: string[]
        projects: {
          name: string
          institution: string
          description: string
          findings: string[]
        }[]
        publications: {
          title: string
          author: string
          year: number
          journal: string
          doi?: string
          abstract: string
        }[]
      }
    }
    digitalResources: {
      name: string
      url: string
      features: string[]
      access: string
      languages: string[]
      contents: string[]
    }[]
  }
}

const jainTexts: JainText[] = [
  {
    id: "acharanga-sutra",
    title: {
      prakrit: "आयारंग सुत्त",
      sanskrit: "आचारांग सूत्र",
      english: "Book of Conduct"
    },
    tradition: "Svetambara",
    category: "Anga",
    period: {
      composition: "5th-4th century BCE",
      written: "1st century CE",
      currentForm: "5th-6th century CE"
    },
    content: {
      overview: "First and most important Anga of the Svetambara canon, dealing with conduct and behavior of Jain monastics",
      mainThemes: [
        "Monastic discipline",
        "Non-violence (Ahimsa)",
        "Ethical conduct",
        "Ascetic practices",
        "Knowledge and awareness"
      ],
      structure: {
        sections: [
          {
            name: "Pahuda (First Book)",
            topics: [
              "Knowledge of living beings",
              "Conquest of the world",
              "Hot and cold",
              "Righteousness",
              "Essence of the world",
              "Cleaning of things",
              "Liberation",
              "Collection of old age"
            ],
            significance: "Fundamental principles of Jain ethics and conduct"
          },
          {
            name: "Cula (Second Book)",
            topics: [
              "Monastic conduct",
              "Begging rules",
              "Clothing regulations",
              "Proper behavior"
            ],
            significance: "Practical guidelines for monastic life"
          }
        ],
        organization: "Two main books divided into chapters and lessons",
        language: ["Ardhamagadhi Prakrit", "Sanskrit commentaries"]
      },
      doctrines: {
        philosophical: [
          "Nature of reality",
          "Theory of knowledge",
          "Concept of soul",
          "Karma doctrine"
        ],
        ethical: [
          "Non-violence",
          "Truth-speaking",
          "Non-stealing",
          "Celibacy",
          "Non-possession"
        ],
        practical: [
          "Monastic rules",
          "Dietary regulations",
          "Daily routines",
          "Meditation practices"
        ]
      },
      significance: {
        historical: [
          "Earliest surviving Jain text",
          "Foundation of Jain monastic tradition",
          "Source for early Jain history"
        ],
        theological: [
          "Establishes core doctrines",
          "Defines monastic discipline",
          "Outlines path to liberation"
        ],
        practical: [
          "Guide for monastic life",
          "Basis for ethical conduct",
          "Reference for ritual practices"
        ]
      }
    },
    transmission: {
      oral: {
        methods: [
          "Memorization techniques",
          "Regular recitation",
          "Teacher-disciple transmission",
          "Group study sessions"
        ],
        lineages: [
          "Gandhar lineage",
          "Acharya succession",
          "Monastic orders"
        ],
        preservation: [
          "Systematic memorization",
          "Regular verification",
          "Cross-referencing between groups"
        ]
      },
      written: {
        history: [
          {
            period: "1st century CE",
            events: [
              "First written compilation",
              "Council at Vallabhi",
              "Standardization of text"
            ],
            significance: "Preservation during crisis of oral transmission"
          }
        ],
        manuscripts: {
          oldest: {
            date: "11th century CE",
            location: "Jaisalmer Jain Library",
            condition: "Well preserved palm leaf",
            contents: "Complete text with commentary"
          },
          significant: [
            {
              name: "Vallabhi manuscript",
              date: "12th century CE",
              location: "Patan Jain Library",
              importance: [
                "Complete text",
                "Early commentary",
                "Excellent condition"
              ]
            }
          ]
        }
      },
      modern: {
        preservation: [
          "Digital scanning",
          "Climate-controlled storage",
          "Conservation treatments"
        ],
        challenges: [
          "Manuscript deterioration",
          "Language expertise scarcity",
          "Access limitations"
        ],
        initiatives: [
          {
            name: "Jain Manuscript Preservation Project",
            description: "Digital preservation of ancient manuscripts",
            organization: "L.D. Institute of Indology",
            status: "Ongoing"
          }
        ]
      }
    },
    interpretation: {
      schools: [
        {
          name: "Traditional Svetambara",
          period: "Classical period",
          approach: [
            "Literal interpretation",
            "Commentary-based study",
            "Practical application"
          ],
          keyScholars: [
            "Acharya Haribhadra",
            "Acharya Hemacandra"
          ],
          texts: [
            "Tika commentaries",
            "Curni explanations"
          ]
        }
      ],
      commentaries: [
        {
          title: "Acharanga Tika",
          author: "Acharya Silanka",
          period: "9th century CE",
          language: "Sanskrit",
          significance: [
            "Standard reference",
            "Detailed explanation",
            "Philosophical analysis"
          ]
        }
      ],
      modern: {
        scholars: [
          {
            name: "Dr. Walther Schubring",
            institution: "University of Hamburg",
            contributions: [
              "Critical edition",
              "Historical analysis",
              "Comparative studies"
            ],
            publications: [
              {
                title: "The Doctrine of the Jainas",
                year: 1962,
                publisher: "Motilal Banarsidass",
                significance: "Foundational academic study"
              }
            ]
          }
        ],
        approaches: [
          {
            method: "Historical-Critical",
            description: "Analysis of textual development and historical context",
            practitioners: [
              "Academic scholars",
              "Research institutions"
            ],
            examples: [
              "Manuscript comparison",
              "Linguistic analysis",
              "Historical contextualization"
            ]
          }
        ]
      }
    },
    study: {
      traditional: {
        institutions: [
          {
            name: "L.D. Institute of Indology",
            location: "Ahmedabad, India",
            focus: [
              "Manuscript preservation",
              "Textual studies",
              "Research publication"
            ],
            methods: [
              "Traditional commentary study",
              "Manuscript analysis",
              "Comparative research"
            ]
          }
        ],
        practices: [
          {
            type: "Monastic Study",
            description: "Systematic study under senior monks",
            requirements: [
              "Initiation",
              "Language proficiency",
              "Dedication to practice"
            ],
            significance: "Preservation of traditional understanding"
          }
        ]
      },
      academic: {
        institutions: [
          {
            name: "SOAS University of London",
            location: "London, UK",
            programs: [
              "Jain Studies",
              "Religious Studies",
              "South Asian Studies"
            ],
            resources: [
              "Manuscript collection",
              "Research library",
              "Digital archives"
            ]
          }
        ],
        research: {
          areas: [
            "Textual criticism",
            "Historical analysis",
            "Philosophical studies"
          ],
          projects: [
            {
              name: "Jain Manuscript Cataloguing Project",
              institution: "University of Hamburg",
              description: "Comprehensive cataloguing of Jain manuscripts",
              findings: [
                "New manuscript discoveries",
                "Textual variants",
                "Historical connections"
              ]
            }
          ],
          publications: [
            {
              title: "The Acaranga Sutra: A New Translation",
              author: "Hermann Jacobi",
              year: 1884,
              journal: "Sacred Books of the East",
              abstract: "First critical translation with commentary"
            }
          ]
        }
      },
      digitalResources: [
        {
          name: "Jain eLibrary",
          url: "https://jainelibrary.org",
          features: [
            "Digital manuscripts",
            "Searchable texts",
            "Multiple translations",
            "Commentary access"
          ],
          access: "Free",
          languages: [
            "Prakrit",
            "Sanskrit",
            "English",
            "Hindi"
          ],
          contents: [
            "Original texts",
            "Commentaries",
            "Research papers",
            "Study guides"
          ]
        }
      ]
    }
  }
]

export default function JainAgamasPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Jain Agamas</h1>
        <p className="text-xl text-muted-foreground">
          Explore the sacred canonical texts of Jainism and their profound philosophical teachings
        </p>
      </section>

      <Tabs defaultValue={jainTexts[0].id} className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          {jainTexts.map((text) => (
            <TabsTrigger key={text.id} value={text.id}>
              {text.title.english}
            </TabsTrigger>
          ))}
        </TabsList>

        {jainTexts.map((text) => (
          <TabsContent key={text.id} value={text.id} className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="space-y-2">
                    <h2 className="text-2xl">
                      {text.title.english}
                      <span className="text-lg ml-2 text-muted-foreground">
                        {text.title.sanskrit} ({text.title.prakrit})
                      </span>
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {text.tradition} Tradition • {text.category}
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Historical Period */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Historical Period</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium">Composition</h4>
                      <p className="text-sm">{text.period.composition}</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium">Written Form</h4>
                      <p className="text-sm">{text.period.written}</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium">Current Form</h4>
                      <p className="text-sm">{text.period.currentForm}</p>
                    </div>
                  </div>
                </section>

                {/* Content Overview */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Content Overview</h3>
                  <p>{text.content.overview}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Main Themes</h4>
                      <ul className="list-disc list-inside mt-2">
                        {text.content.mainThemes.map((theme, index) => (
                          <li key={index} className="text-sm">{theme}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Doctrines</h4>
                      <div className="space-y-2">
                        <div>
                          <h5 className="text-sm font-medium">Philosophical</h5>
                          <ul className="list-disc list-inside">
                            {text.content.doctrines.philosophical.map((item, index) => (
                              <li key={index} className="text-sm">{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium">Ethical</h5>
                          <ul className="list-disc list-inside">
                            {text.content.doctrines.ethical.map((item, index) => (
                              <li key={index} className="text-sm">{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Structure */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Text Structure</h3>
                  <div className="space-y-4">
                    {text.content.structure.sections.map((section) => (
                      <div
                        key={section.name}
                        className="p-4 bg-secondary rounded-lg"
                      >
                        <h4 className="font-medium">{section.name}</h4>
                        <div className="mt-2">
                          <h5 className="text-sm font-medium">Topics:</h5>
                          <ul className="list-disc list-inside">
                            {section.topics.map((topic, index) => (
                              <li key={index} className="text-sm">{topic}</li>
                            ))}
                          </ul>
                        </div>
                        <p className="text-sm mt-2">{section.significance}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Transmission */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Transmission History</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Oral Transmission</h4>
                      <div className="space-y-2">
                        <div className="mt-2 p-4 bg-secondary rounded-lg">
                          <h5 className="text-sm font-medium">Methods</h5>
                          <ul className="list-disc list-inside">
                            {text.transmission.oral.methods.map((method, index) => (
                              <li key={index} className="text-sm">{method}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-4 bg-secondary rounded-lg">
                          <h5 className="text-sm font-medium">Lineages</h5>
                          <ul className="list-disc list-inside">
                            {text.transmission.oral.lineages.map((lineage, index) => (
                              <li key={index} className="text-sm">{lineage}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Written Transmission</h4>
                      {text.transmission.written.history.map((period, index) => (
                        <div
                          key={index}
                          className="mt-2 p-4 bg-secondary rounded-lg"
                        >
                          <h5 className="text-sm font-medium">{period.period}</h5>
                          <ul className="list-disc list-inside">
                            {period.events.map((event, eventIndex) => (
                              <li key={eventIndex} className="text-sm">{event}</li>
                            ))}
                          </ul>
                          <p className="text-sm mt-2">{period.significance}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Manuscripts */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Important Manuscripts</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium">Oldest Known Manuscript</h4>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm">
                          Date: {text.transmission.written.manuscripts.oldest.date}
                        </p>
                        <p className="text-sm">
                          Location: {text.transmission.written.manuscripts.oldest.location}
                        </p>
                        <p className="text-sm">
                          Condition: {text.transmission.written.manuscripts.oldest.condition}
                        </p>
                        <p className="text-sm">
                          Contents: {text.transmission.written.manuscripts.oldest.contents}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Significant Manuscripts</h4>
                      {text.transmission.written.manuscripts.significant.map((manuscript) => (
                        <div
                          key={manuscript.name}
                          className="mt-2 p-4 bg-secondary rounded-lg"
                        >
                          <h5 className="font-medium">{manuscript.name}</h5>
                          <p className="text-sm">Date: {manuscript.date}</p>
                          <p className="text-sm">
                            Location: {manuscript.location}
                          </p>
                          <ul className="list-disc list-inside mt-2">
                            {manuscript.importance.map((point, index) => (
                              <li key={index} className="text-sm">{point}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Modern Study */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Modern Study and Research</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Academic Research</h4>
                      {text.study.academic.institutions.map((institution) => (
                        <div
                          key={institution.name}
                          className="mt-2 p-4 bg-secondary rounded-lg"
                        >
                          <h5 className="font-medium">{institution.name}</h5>
                          <p className="text-sm">{institution.location}</p>
                          <div className="mt-2">
                            <h6 className="text-sm font-medium">Programs:</h6>
                            <ul className="list-disc list-inside">
                              {institution.programs.map((program, index) => (
                                <li key={index} className="text-sm">{program}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-medium">Digital Resources</h4>
                      {text.study.digitalResources.map((resource) => (
                        <div
                          key={resource.name}
                          className="mt-2 p-4 bg-secondary rounded-lg"
                        >
                          <h5 className="font-medium">{resource.name}</h5>
                          <ul className="list-disc list-inside mt-2">
                            {resource.features.map((feature, index) => (
                              <li key={index} className="text-sm">{feature}</li>
                            ))}
                          </ul>
                          <p className="text-sm mt-2">
                            Access: {resource.access}
                          </p>
                          <a
                            href={resource.url}
                            className="text-primary hover:underline text-sm block mt-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Access Resource
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
} 