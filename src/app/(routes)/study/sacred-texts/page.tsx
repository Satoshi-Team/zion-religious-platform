import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Sacred Texts Development & History | Religious Scripture Analysis",
  description: "Comprehensive exploration of sacred text development, manuscript traditions, translations, and interpretations across major world religions. Includes academic resources and historical analysis.",
  keywords: [
    "sacred texts",
    "religious manuscripts",
    "scripture development",
    "biblical manuscripts",
    "Quranic compilation",
    "Vedic texts",
    "Buddhist canon",
    "textual criticism",
    "manuscript tradition",
    "religious literature"
  ],
  openGraph: {
    title: "Sacred Texts Development & History",
    description: "In-depth analysis of religious text development and transmission",
    images: [
      {
        url: "/images/sacred-texts-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient Religious Manuscripts"
      }
    ]
  }
}

interface SacredText {
  id: string
  tradition: string
  name: string
  overview: string
  development: {
    periods: {
      name: string
      timeframe: string
      description: string
      keyDevelopments: string[]
      historicalContext: string
      significance: string[]
    }[]
    transmission: {
      method: string
      description: string
      challenges: string[]
      preservation: string[]
    }
    manuscripts: {
      name: string
      date: string
      location: string
      significance: string
      contents: string
      condition: string
      accessibility: string
    }[]
  }
  languages: {
    original: string[]
    translations: {
      language: string
      date: string
      significance: string
      scholars: string[]
      impact: string[]
    }[]
  }
  interpretation: {
    schools: {
      name: string
      period: string
      approach: string
      keyScholars: string[]
      mainTexts: string[]
      influence: string
    }[]
    methods: {
      name: string
      description: string
      principles: string[]
      examples: string[]
    }[]
  }
  scholarship: {
    modern: {
      field: string
      description: string
      keyScholars: string[]
      institutions: string[]
      publications: {
        title: string
        author: string
        year: number
        publisher: string
        doi?: string
        url?: string
      }[]
    }[]
    digitalResources: {
      name: string
      description: string
      url: string
      access: string
      features: string[]
    }[]
    research: {
      project: string
      institution: string
      description: string
      findings: string[]
      publications: string[]
      website?: string
    }[]
  }
}

const sacredTexts: SacredText[] = [
  {
    id: "hebrew-bible",
    tradition: "Judaism",
    name: "Hebrew Bible (Tanakh)",
    overview: "The canonical collection of Hebrew scriptures, including the Torah, Nevi'im, and Ketuvim",
    development: {
      periods: [
        {
          name: "Formation of the Torah",
          timeframe: "c. 1200-400 BCE",
          description: "Development and compilation of the five books of Moses",
          keyDevelopments: [
            "Oral tradition codification",
            "Multiple source compilation",
            "Scribal schools establishment",
            "Standardization of text"
          ],
          historicalContext: "Period of Israelite settlement through Second Temple period",
          significance: [
            "Foundation of Jewish law and practice",
            "Establishment of monotheistic worship",
            "Development of covenant theology",
            "Creation of scribal tradition"
          ]
        },
        {
          name: "Prophetic Literature Development",
          timeframe: "c. 800-200 BCE",
          description: "Composition and compilation of prophetic books",
          keyDevelopments: [
            "Written prophecy emergence",
            "Collection of oracles",
            "Editorial processes",
            "Canon formation"
          ],
          historicalContext: "Divided monarchy through post-exilic period",
          significance: [
            "Development of prophetic tradition",
            "Social justice emphasis",
            "Messianic expectations",
            "Historical documentation"
          ]
        }
      ],
      transmission: {
        method: "Scribal copying",
        description: "Careful manuscript transmission through professional scribes",
        challenges: [
          "Material deterioration",
          "Political upheaval",
          "Textual variants",
          "Language evolution"
        ],
        preservation: [
          "Massoretic annotation system",
          "Genizah preservation",
          "Scroll production standards",
          "Copying verification methods"
        ]
      },
      manuscripts: [
        {
          name: "Aleppo Codex",
          date: "c. 930 CE",
          location: "Israel Museum, Jerusalem",
          significance: "Most authoritative Masoretic Text manuscript",
          contents: "Hebrew Bible with Masoretic notation",
          condition: "Partially preserved",
          accessibility: "Digital access available"
        },
        {
          name: "Leningrad Codex",
          date: "1008 CE",
          location: "Russian National Library",
          significance: "Oldest complete Hebrew Bible manuscript",
          contents: "Complete Hebrew Bible with Masorah",
          condition: "Well preserved",
          accessibility: "Digital and scholarly access"
        }
      ]
    },
    languages: {
      original: ["Biblical Hebrew", "Biblical Aramaic"],
      translations: [
        {
          language: "Greek (Septuagint)",
          date: "3rd-2nd century BCE",
          significance: "First major translation, influenced Christian Old Testament",
          scholars: ["Ptolemaic scholars", "Alexandrian Jewish community"],
          impact: [
            "Hellenistic Jewish interpretation",
            "Christian scripture formation",
            "Biblical Greek vocabulary development"
          ]
        }
      ]
    },
    interpretation: {
      schools: [
        {
          name: "Rabbinic Interpretation",
          period: "70-500 CE",
          approach: "Midrashic and legal interpretation",
          keyScholars: ["Rabbi Akiva", "Rabbi Ishmael", "Rabbi Meir"],
          mainTexts: ["Mishnah", "Talmud", "Midrash collections"],
          influence: "Foundation of Jewish law and theology"
        }
      ],
      methods: [
        {
          name: "PaRDeS",
          description: "Four-level interpretation system",
          principles: [
            "Peshat (literal meaning)",
            "Remez (allegorical meaning)",
            "Derash (homiletical meaning)",
            "Sod (mystical meaning)"
          ],
          examples: [
            "Genesis creation narrative interpretation",
            "Legal text analysis",
            "Prophetic text interpretation"
          ]
        }
      ]
    },
    scholarship: {
      modern: [
        {
          field: "Biblical Archaeology",
          description: "Archaeological research related to biblical texts",
          keyScholars: [
            "William F. Albright",
            "Yigael Yadin",
            "Israel Finkelstein"
          ],
          institutions: [
            "Hebrew University of Jerusalem",
            "Tel Aviv University",
            "American Schools of Oriental Research"
          ],
          publications: [
            {
              title: "The Bible Unearthed",
              author: "Israel Finkelstein and Neil Asher Silberman",
              year: 2001,
              publisher: "Free Press",
              doi: "10.1017/S0003581500077684"
            }
          ]
        }
      ],
      digitalResources: [
        {
          name: "STEP Bible",
          description: "Scripture Tools for Every Person",
          url: "https://www.stepbible.org",
          access: "Free",
          features: [
            "Original language texts",
            "Multiple translations",
            "Search tools",
            "Linguistic analysis"
          ]
        },
        {
          name: "Dead Sea Scrolls Digital Library",
          description: "High-resolution images of the Dead Sea Scrolls",
          url: "https://www.deadseascrolls.org.il",
          access: "Free",
          features: [
            "Manuscript images",
            "Translations",
            "Historical context",
            "Search functionality"
          ]
        }
      ],
      research: [
        {
          project: "Hebrew Bible Critical Edition",
          institution: "Oxford University",
          description: "Comprehensive critical edition of the Hebrew Bible",
          findings: [
            "Textual variants analysis",
            "Manuscript tradition documentation",
            "Translation history"
          ],
          publications: [
            "The Hebrew Bible: A Critical Edition",
            "Oxford Hebrew Bible: Theoretical Foundations"
          ],
          website: "https://www.ochjs.ac.uk/oxford-hebrew-bible/"
        }
      ]
    }
  }
]

export default function SacredTextsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Sacred Texts Development & History</h1>
        <p className="text-xl text-muted-foreground">
          Explore the historical development, transmission, and interpretation of major religious texts
        </p>
      </section>

      <Tabs defaultValue={sacredTexts[0].id} className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          {sacredTexts.map((text) => (
            <TabsTrigger key={text.id} value={text.id}>
              {text.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {sacredTexts.map((text) => (
          <TabsContent key={text.id} value={text.id} className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>{text.name}</CardTitle>
                <p className="text-muted-foreground">{text.overview}</p>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Development Periods */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Historical Development</h3>
                  <div className="grid gap-4">
                    {text.development.periods.map((period) => (
                      <div
                        key={period.name}
                        className="p-4 bg-secondary rounded-lg space-y-2"
                      >
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium">{period.name}</h4>
                          <span className="text-sm text-muted-foreground">
                            {period.timeframe}
                          </span>
                        </div>
                        <p className="text-sm">{period.description}</p>
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium">Key Developments</h5>
                          <ul className="list-disc list-inside text-sm">
                            {period.keyDevelopments.map((dev, index) => (
                              <li key={index}>{dev}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium">Significance</h5>
                          <ul className="list-disc list-inside text-sm">
                            {period.significance.map((sig, index) => (
                              <li key={index}>{sig}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Manuscripts */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Important Manuscripts</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {text.development.manuscripts.map((manuscript) => (
                      <div
                        key={manuscript.name}
                        className="p-4 bg-secondary rounded-lg space-y-2"
                      >
                        <h4 className="font-medium">{manuscript.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {manuscript.date}
                        </p>
                        <p className="text-sm">{manuscript.significance}</p>
                        <div className="text-sm">
                          <p>Location: {manuscript.location}</p>
                          <p>Condition: {manuscript.condition}</p>
                          <p>Access: {manuscript.accessibility}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Interpretation */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Interpretative Traditions</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {text.interpretation.schools.map((school) => (
                      <div
                        key={school.name}
                        className="p-4 bg-secondary rounded-lg space-y-2"
                      >
                        <h4 className="font-medium">{school.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {school.period}
                        </p>
                        <p className="text-sm">{school.approach}</p>
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium">Key Scholars</h5>
                          <ul className="list-disc list-inside text-sm">
                            {school.keyScholars.map((scholar, index) => (
                              <li key={index}>{scholar}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Modern Scholarship */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Modern Scholarship</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {text.scholarship.modern.map((field) => (
                      <div
                        key={field.field}
                        className="p-4 bg-secondary rounded-lg space-y-2"
                      >
                        <h4 className="font-medium">{field.field}</h4>
                        <p className="text-sm">{field.description}</p>
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium">Key Publications</h5>
                          {field.publications.map((pub) => (
                            <div key={pub.title} className="text-sm">
                              <p className="font-medium">{pub.title}</p>
                              <p>
                                {pub.author} ({pub.year})
                              </p>
                              {pub.doi && (
                                <a
                                  href={`https://doi.org/${pub.doi}`}
                                  className="text-primary hover:underline"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  DOI: {pub.doi}
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Digital Resources */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Digital Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {text.scholarship.digitalResources.map((resource) => (
                      <div
                        key={resource.name}
                        className="p-4 bg-secondary rounded-lg space-y-2"
                      >
                        <h4 className="font-medium">{resource.name}</h4>
                        <p className="text-sm">{resource.description}</p>
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium">Features</h5>
                          <ul className="list-disc list-inside text-sm">
                            {resource.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <a
                          href={resource.url}
                          className="text-primary hover:underline text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Access Resource
                        </a>
                      </div>
                    ))}
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