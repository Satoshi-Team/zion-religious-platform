import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Confucian Classics | The Five Classics & Four Books",
  description: "Comprehensive guide to the Confucian canonical texts, including the Five Classics (Wu Jing) and Four Books (Si Shu). Explore their history, interpretation, and influence on East Asian thought.",
  keywords: [
    "Confucian Classics",
    "Five Classics",
    "Four Books",
    "Wu Jing",
    "Si Shu",
    "Analects",
    "Mencius",
    "Chinese classics",
    "Confucian philosophy",
    "Chinese literature"
  ],
  openGraph: {
    title: "Confucian Classics - The Five Classics & Four Books",
    description: "Explore the foundational texts of Confucian thought and their influence",
    images: [
      {
        url: "/images/confucian-classics-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ancient Confucian Texts"
      }
    ]
  }
}

interface ConfucianText {
  id: string
  title: {
    chinese: string
    pinyin: string
    english: string
  }
  category: "Five Classics" | "Four Books"
  period: string
  content: {
    overview: string
    mainThemes: string[]
    structure: {
      sections: string[]
      organization: string
      length: string
    }
    significance: string[]
  }
  transmission: {
    history: {
      period: string
      events: string[]
      significance: string
    }[]
    preservation: {
      methods: string[]
      challenges: string[]
      restorations: {
        period: string
        description: string
        impact: string
      }[]
    }
  }
  editions: {
    name: string
    date: string
    features: string[]
    location: string
    significance: string
  }[]
  commentary: {
    traditional: {
      author: string
      period: string
      significance: string
      influence: string[]
    }[]
    modern: {
      scholar: string
      work: string
      contribution: string
      institution: string
    }[]
  }
  research: {
    institutions: {
      name: string
      location: string
      projects: string[]
      resources: string[]
    }[]
    publications: {
      title: string
      author: string
      year: number
      publisher: string
      doi?: string
      significance: string
    }[]
    digitalResources: {
      name: string
      url: string
      description: string
      features: string[]
      access: string
    }[]
  }
}

const confucianTexts: ConfucianText[] = [
  {
    id: "analects",
    title: {
      chinese: "論語",
      pinyin: "Lún Yǔ",
      english: "The Analects"
    },
    category: "Four Books",
    period: "5th-3rd century BCE",
    content: {
      overview: "Collection of sayings and discussions of Confucius and his disciples, compiled posthumously",
      mainThemes: [
        "Moral cultivation",
        "Proper governance",
        "Social relationships",
        "Educational philosophy",
        "Ritual propriety"
      ],
      structure: {
        sections: ["20 Books", "512 Passages"],
        organization: "Thematic arrangement with some chronological elements",
        length: "Approximately 15,900 characters"
      },
      significance: [
        "Core text of Confucian thought",
        "Foundation of Chinese education for over 2000 years",
        "Model of Classical Chinese prose",
        "Source of East Asian political philosophy"
      ]
    },
    transmission: {
      history: [
        {
          period: "Warring States Period",
          events: [
            "Initial compilation by disciples",
            "Multiple versions in circulation",
            "Development of early commentaries"
          ],
          significance: "Formation of core text"
        },
        {
          period: "Han Dynasty",
          events: [
            "Official recognition",
            "Standard version established",
            "Integration into imperial curriculum"
          ],
          significance: "Canonization and standardization"
        }
      ],
      preservation: {
        methods: [
          "Stone inscriptions",
          "Bamboo and silk manuscripts",
          "Woodblock printing",
          "Scholar-official memorization"
        ],
        challenges: [
          "Qin book burning",
          "Multiple textual variants",
          "War and political upheaval",
          "Manuscript deterioration"
        ],
        restorations: [
          {
            period: "Han Dynasty",
            description: "Recovery and collation of texts after Qin destruction",
            impact: "Establishment of standard text"
          }
        ]
      }
    },
    editions: [
      {
        name: "Stone Classics of Xiping",
        date: "175-183 CE",
        features: [
          "Stone inscription",
          "Official Han version",
          "Complete text"
        ],
        location: "Luoyang, China",
        significance: "Earliest complete stone inscription"
      },
      {
        name: "Dunhuang manuscript",
        date: "c. 890 CE",
        features: [
          "Paper manuscript",
          "Tang dynasty version",
          "Contains commentaries"
        ],
        location: "British Library",
        significance: "Oldest extant paper manuscript"
      }
    ],
    commentary: {
      traditional: [
        {
          author: "Zhu Xi",
          period: "Song Dynasty",
          significance: "Standard Neo-Confucian interpretation",
          influence: [
            "Imperial examination system",
            "East Asian Confucian tradition",
            "Educational curriculum"
          ]
        }
      ],
      modern: [
        {
          scholar: "D.C. Lau",
          work: "Confucius: The Analects",
          contribution: "Modern critical translation and analysis",
          institution: "University of Hong Kong"
        }
      ]
    },
    research: {
      institutions: [
        {
          name: "Harvard-Yenching Institute",
          location: "Cambridge, MA, USA",
          projects: [
            "Digital Analects Project",
            "Textual Analysis Database"
          ],
          resources: [
            "Digital manuscript collection",
            "Research publications",
            "Translation database"
          ]
        }
      ],
      publications: [
        {
          title: "The Original Analects",
          author: "E. Bruce Brooks and A. Taeko Brooks",
          year: 1998,
          publisher: "Columbia University Press",
          doi: "10.7312/broo11010",
          significance: "Chronological analysis of text formation"
        }
      ],
      digitalResources: [
        {
          name: "Chinese Text Project",
          url: "https://ctext.org",
          description: "Digital library of Chinese classical texts",
          features: [
            "Parallel text viewing",
            "Dictionary lookup",
            "Cross-reference tools",
            "Textual analysis"
          ],
          access: "Free"
        }
      ]
    }
  }
  // Additional Confucian texts would be added here
]

export default function ConfucianClassicsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Confucian Classics</h1>
        <p className="text-xl text-muted-foreground">
          Explore the foundational texts of Confucian thought and their profound influence
          on East Asian civilization
        </p>
      </section>

      <Tabs defaultValue={confucianTexts[0].id} className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          {confucianTexts.map((text) => (
            <TabsTrigger key={text.id} value={text.id}>
              {text.title.english}
            </TabsTrigger>
          ))}
        </TabsList>

        {confucianTexts.map((text) => (
          <TabsContent key={text.id} value={text.id} className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="space-y-2">
                    <h2 className="text-2xl">
                      {text.title.english}
                      <span className="text-lg ml-2 text-muted-foreground">
                        {text.title.chinese} ({text.title.pinyin})
                      </span>
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {text.category} • {text.period}
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Overview Section */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Overview</h3>
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
                      <h4 className="font-medium">Historical Significance</h4>
                      <ul className="list-disc list-inside mt-2">
                        {text.content.significance.map((item, index) => (
                          <li key={index} className="text-sm">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Transmission History */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Transmission History</h3>
                  <div className="space-y-4">
                    {text.transmission.history.map((period, index) => (
                      <div key={index} className="p-4 bg-secondary rounded-lg">
                        <h4 className="font-medium">{period.period}</h4>
                        <ul className="list-disc list-inside mt-2">
                          {period.events.map((event, eventIndex) => (
                            <li key={eventIndex} className="text-sm">{event}</li>
                          ))}
                        </ul>
                        <p className="text-sm text-muted-foreground mt-2">
                          {period.significance}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Editions */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Important Editions</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {text.editions.map((edition) => (
                      <div
                        key={edition.name}
                        className="p-4 bg-secondary rounded-lg"
                      >
                        <h4 className="font-medium">{edition.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {edition.date}
                        </p>
                        <ul className="list-disc list-inside mt-2">
                          {edition.features.map((feature, index) => (
                            <li key={index} className="text-sm">{feature}</li>
                          ))}
                        </ul>
                        <p className="text-sm mt-2">
                          Location: {edition.location}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {edition.significance}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Commentary */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Commentary Tradition</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Traditional Commentary</h4>
                      {text.commentary.traditional.map((comment) => (
                        <div
                          key={comment.author}
                          className="mt-2 p-4 bg-secondary rounded-lg"
                        >
                          <h5 className="font-medium">{comment.author}</h5>
                          <p className="text-sm">{comment.period}</p>
                          <p className="text-sm mt-2">{comment.significance}</p>
                          <ul className="list-disc list-inside mt-2">
                            {comment.influence.map((item, index) => (
                              <li key={index} className="text-sm">{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-medium">Modern Scholarship</h4>
                      {text.commentary.modern.map((scholar) => (
                        <div
                          key={scholar.scholar}
                          className="mt-2 p-4 bg-secondary rounded-lg"
                        >
                          <h5 className="font-medium">{scholar.scholar}</h5>
                          <p className="text-sm">{scholar.work}</p>
                          <p className="text-sm mt-2">{scholar.contribution}</p>
                          <p className="text-sm text-muted-foreground">
                            {scholar.institution}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Research Resources */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold">Research Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium">Academic Publications</h4>
                      {text.research.publications.map((pub) => (
                        <div
                          key={pub.title}
                          className="mt-2 p-4 bg-secondary rounded-lg"
                        >
                          <h5 className="font-medium">{pub.title}</h5>
                          <p className="text-sm">
                            {pub.author} ({pub.year})
                          </p>
                          <p className="text-sm">{pub.publisher}</p>
                          {pub.doi && (
                            <a
                              href={`https://doi.org/${pub.doi}`}
                              className="text-primary hover:underline text-sm"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              DOI: {pub.doi}
                            </a>
                          )}
                          <p className="text-sm text-muted-foreground mt-2">
                            {pub.significance}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-medium">Digital Resources</h4>
                      {text.research.digitalResources.map((resource) => (
                        <div
                          key={resource.name}
                          className="mt-2 p-4 bg-secondary rounded-lg"
                        >
                          <h5 className="font-medium">{resource.name}</h5>
                          <p className="text-sm">{resource.description}</p>
                          <ul className="list-disc list-inside mt-2">
                            {resource.features.map((feature, index) => (
                              <li key={index} className="text-sm">{feature}</li>
                            ))}
                          </ul>
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