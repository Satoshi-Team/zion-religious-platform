import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface LiteraryPeriod {
  era: string
  years: string
  description: string
  characteristics: string[]
  keyWorks: Array<{
    title: string
    author: string
    year: string
    significance: string
  }>
  themes: string[]
  impact: string
}

interface LiteraryGenre {
  name: string
  description: string
  characteristics: string[]
  significance: string
  examples: Array<{
    work: string
    author: string
    year: string
  }>
  legacy: string
}

interface Theme {
  name: string
  description: string
  manifestations: string[]
  significance: string
  examples: Array<{
    work: string
    author: string
    interpretation: string
  }>
}

interface Contemporary {
  area: string
  description: string
  trends: string[]
  challenges: string[]
  opportunities: string[]
  examples: string[]
}

interface Resource {
  title: string
  author?: string
  url: string
  type: string
  description: string
  affiliate?: boolean
  affiliateUrl?: string
}

interface ChristianLiteratureContent {
  introduction: string
  definition: string
  periods: LiteraryPeriod[]
  genres: LiteraryGenre[]
  themes: Theme[]
  contemporary: Contemporary[]
  impact: {
    cultural: string[]
    theological: string[]
    social: string[]
  }
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Christianity's Impact on Literature | Christianity",
  description: "Explore Christianity's profound influence on literature throughout history, from medieval manuscripts to contemporary fiction.",
  openGraph: {
    title: "Christianity's Impact on Literature | Christianity",
    description: "Comprehensive guide to Christian influence on literary expression",
    type: "website",
  },
}

const christianLiteratureContent: ChristianLiteratureContent = {
  introduction: `Christianity has fundamentally shaped the development of Western literature, providing themes, narratives, symbols, and moral frameworks that continue to influence writers and readers. From medieval manuscripts to contemporary fiction, Christian thought and tradition have been integral to literary expression.`,
  definition: `Christian literature encompasses works directly inspired by Christian faith, themes, and traditions, as well as literature significantly influenced by Christian worldview and values, spanning various genres and periods from ancient times to the present.`,
  periods: [
    {
      era: "Early Christian",
      years: "1-500 CE",
      description: "Development of foundational Christian texts and early theological writings.",
      characteristics: [
        "Epistolary writing",
        "Apologetic literature",
        "Martyrdom accounts",
        "Theological treatises",
        "Biblical commentaries"
      ],
      keyWorks: [
        {
          title: "Confessions",
          author: "Augustine of Hippo",
          year: "397-400 CE",
          significance: "First Western autobiography, exploring faith journey"
        },
        {
          title: "City of God",
          author: "Augustine of Hippo",
          year: "413-426 CE",
          significance: "Foundational work of Christian philosophy and political thought"
        }
      ],
      themes: [
        "Conversion narratives",
        "Divine providence",
        "Spiritual warfare",
        "Martyrdom",
        "Theological discourse"
      ],
      impact: "Established Christian literary forms and theological vocabulary"
    },
    {
      era: "Medieval",
      years: "500-1500 CE",
      description: "Integration of Christian themes with various literary forms and traditions.",
      characteristics: [
        "Religious allegory",
        "Miracle plays",
        "Devotional poetry",
        "Hagiography",
        "Mystical writings"
      ],
      keyWorks: [
        {
          title: "Divine Comedy",
          author: "Dante Alighieri",
          year: "1308-1320",
          significance: "Masterpiece combining Christian theology with classical learning"
        },
        {
          title: "Canterbury Tales",
          author: "Geoffrey Chaucer",
          year: "1387-1400",
          significance: "Portrait of medieval Christian society and pilgrimage"
        }
      ],
      themes: [
        "Pilgrimage",
        "Moral allegory",
        "Divine love",
        "Salvation",
        "Christian virtues"
      ],
      impact: "Created enduring literary forms and spiritual metaphors"
    },
    {
      era: "Renaissance and Reformation",
      years: "1300-1700 CE",
      description: "Revival of classical learning within Christian framework and religious reform.",
      characteristics: [
        "Biblical translation",
        "Protestant polemic",
        "Metaphysical poetry",
        "Christian humanism",
        "Religious drama"
      ],
      keyWorks: [
        {
          title: "Paradise Lost",
          author: "John Milton",
          year: "1667",
          significance: "Epic retelling of Biblical narrative with Protestant theology"
        },
        {
          title: "Holy Sonnets",
          author: "John Donne",
          year: "1633",
          significance: "Integration of sacred and secular love poetry"
        }
      ],
      themes: [
        "Fall and redemption",
        "Divine providence",
        "Religious reform",
        "Individual faith",
        "Biblical interpretation"
      ],
      impact: "Transformed religious expression in vernacular literature"
    },
    {
      era: "Modern",
      years: "1700-present",
      description: "Engagement with secularization while maintaining Christian themes.",
      characteristics: [
        "Religious novels",
        "Christian allegory",
        "Spiritual autobiography",
        "Faith-based poetry",
        "Theological fiction"
      ],
      keyWorks: [
        {
          title: "The Chronicles of Narnia",
          author: "C.S. Lewis",
          year: "1950-1956",
          significance: "Christian themes in fantasy literature"
        },
        {
          title: "The Power and the Glory",
          author: "Graham Greene",
          year: "1940",
          significance: "Modern Catholic novel exploring faith and doubt"
        }
      ],
      themes: [
        "Faith and doubt",
        "Moral complexity",
        "Religious identity",
        "Secularization",
        "Spiritual journey"
      ],
      impact: "Adapted Christian themes for modern audiences"
    }
  ],
  genres: [
    {
      name: "Religious Poetry",
      description: "Verse exploring spiritual themes and religious experience",
      characteristics: [
        "Metaphysical imagery",
        "Biblical allusion",
        "Devotional language",
        "Spiritual metaphor",
        "Divine address"
      ],
      significance: "Expresses spiritual experience in artistic form",
      examples: [
        {
          work: "The Temple",
          author: "George Herbert",
          year: "1633"
        },
        {
          work: "Four Quartets",
          author: "T.S. Eliot",
          year: "1943"
        }
      ],
      legacy: "Influenced modern spiritual and secular poetry"
    },
    {
      name: "Christian Fiction",
      description: "Narrative works incorporating Christian themes and worldview",
      characteristics: [
        "Moral allegory",
        "Spiritual journey",
        "Faith struggles",
        "Divine intervention",
        "Religious symbolism"
      ],
      significance: "Explores faith through narrative form",
      examples: [
        {
          work: "Pilgrim's Progress",
          author: "John Bunyan",
          year: "1678"
        },
        {
          work: "The Great Divorce",
          author: "C.S. Lewis",
          year: "1945"
        }
      ],
      legacy: "Established patterns for religious storytelling"
    },
    {
      name: "Theological Writing",
      description: "Systematic exploration of Christian thought and practice",
      characteristics: [
        "Doctrinal analysis",
        "Biblical exposition",
        "Philosophical argument",
        "Spiritual guidance",
        "Apologetics"
      ],
      significance: "Develops and transmits Christian thought",
      examples: [
        {
          work: "Mere Christianity",
          author: "C.S. Lewis",
          year: "1952"
        },
        {
          work: "The Cost of Discipleship",
          author: "Dietrich Bonhoeffer",
          year: "1937"
        }
      ],
      legacy: "Shapes Christian intellectual tradition"
    }
  ],
  themes: [
    {
      name: "Redemption",
      description: "The journey from sin to salvation through divine grace",
      manifestations: [
        "Conversion narratives",
        "Moral transformation",
        "Divine intervention",
        "Sacrificial love",
        "Spiritual renewal"
      ],
      significance: "Central Christian doctrine in narrative form",
      examples: [
        {
          work: "Crime and Punishment",
          author: "Fyodor Dostoevsky",
          interpretation: "Redemption through suffering and faith"
        },
        {
          work: "Les Misérables",
          author: "Victor Hugo",
          interpretation: "Grace and moral transformation"
        }
      ]
    },
    {
      name: "Faith and Doubt",
      description: "Wrestling with religious belief in modern context",
      manifestations: [
        "Spiritual crisis",
        "Intellectual questioning",
        "Moral uncertainty",
        "Religious skepticism",
        "Search for meaning"
      ],
      significance: "Explores contemporary religious experience",
      examples: [
        {
          work: "Silence",
          author: "Shusaku Endo",
          interpretation: "Faith tested by persecution and doubt"
        },
        {
          work: "The End of the Affair",
          author: "Graham Greene",
          interpretation: "Reluctant conversion through divine love"
        }
      ]
    }
  ],
  contemporary: [
    {
      area: "Digital Literature",
      description: "Christian themes in digital and interactive formats",
      trends: [
        "Online devotionals",
        "Religious blogs",
        "Christian social media",
        "Interactive Bible study",
        "Faith-based apps"
      ],
      challenges: [
        "Digital distraction",
        "Content quality",
        "Platform limitations",
        "Audience engagement",
        "Theological depth"
      ],
      opportunities: [
        "Global reach",
        "Interactive engagement",
        "Multimedia integration",
        "Community building",
        "Innovative formats"
      ],
      examples: [
        "Christian blogging platforms",
        "Bible study apps",
        "Religious podcasts",
        "Online spiritual journals",
        "Virtual prayer rooms"
      ]
    },
    {
      area: "Multicultural Christian Literature",
      description: "Christian themes from diverse cultural perspectives",
      trends: [
        "Global voices",
        "Cultural synthesis",
        "Indigenous expression",
        "Interfaith dialogue",
        "Liberation themes"
      ],
      challenges: [
        "Cultural translation",
        "Market access",
        "Western dominance",
        "Theological diversity",
        "Audience reach"
      ],
      opportunities: [
        "New perspectives",
        "Cultural enrichment",
        "Global dialogue",
        "Theological innovation",
        "Cross-cultural understanding"
      ],
      examples: [
        "African Christian poetry",
        "Asian theological writing",
        "Latin American liberation literature",
        "Indigenous Christian stories",
        "Cross-cultural devotionals"
      ]
    }
  ],
  impact: {
    cultural: [
      "Shaped Western literary tradition",
      "Influenced narrative forms",
      "Established moral frameworks",
      "Preserved classical learning",
      "Inspired artistic expression"
    ],
    theological: [
      "Developed religious vocabulary",
      "Explored faith experience",
      "Transmitted doctrine",
      "Encouraged spiritual reflection",
      "Facilitated theological debate"
    ],
    social: [
      "Promoted literacy",
      "Shaped moral discourse",
      "Built communities",
      "Preserved history",
      "Influenced education"
    ]
  },
  resources: [
    {
      title: "The Christian Imagination",
      author: "Leland Ryken",
      url: "/resources/christian-imagination-ryken",
      type: "Book",
      description: "Comprehensive study of Christianity and literature.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0877881235"
    },
    {
      title: "How to Read Literature",
      author: "Terry Eagleton",
      url: "/resources/how-to-read-literature-eagleton",
      type: "Book",
      description: "Analysis of Christian influence in literary interpretation.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0300190964"
    },
    {
      title: "The Oxford Handbook of English Literature and Theology",
      author: "Andrew Hass",
      url: "/resources/oxford-handbook-literature-theology",
      type: "Book",
      description: "Academic resource on religion and literature.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0199544486"
    }
  ]
}

export default function ChristianLiteraturePage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Christianity's Impact on Literature</h1>
        <p className="text-xl mb-4">{christianLiteratureContent.introduction}</p>
        <p className="text-lg mb-8">{christianLiteratureContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Historical Periods</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {christianLiteratureContent.periods.map((period, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>
                  {period.era}
                  <span className="text-slate-600 text-sm block">
                    {period.years}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{period.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Characteristics:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {period.characteristics.map((char, idx) => (
                        <li key={idx}>{char}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Works:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {period.keyWorks.map((work, idx) => (
                        <li key={idx}>
                          <span className="font-medium">{work.title}</span>
                          <span className="text-slate-600 block text-sm">
                            {work.author}, {work.year}
                          </span>
                          <span className="text-slate-600 text-sm">
                            {work.significance}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Themes:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {period.themes.map((theme, idx) => (
                        <li key={idx}>{theme}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Impact:</h4>
                    <p className="text-slate-600">{period.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Literary Genres</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {christianLiteratureContent.genres.map((genre, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{genre.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{genre.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Characteristics:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {genre.characteristics.map((char, idx) => (
                        <li key={idx}>{char}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {genre.examples.map((example, idx) => (
                        <li key={idx}>
                          <span className="font-medium">{example.work}</span>
                          <span className="text-slate-600 block text-sm">
                            {example.author}, {example.year}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Legacy:</h4>
                    <p className="text-slate-600">{genre.legacy}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Major Themes</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {christianLiteratureContent.themes.map((theme, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{theme.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{theme.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Manifestations:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {theme.manifestations.map((manifestation, idx) => (
                        <li key={idx}>{manifestation}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Examples:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {theme.examples.map((example, idx) => (
                        <li key={idx}>
                          <span className="font-medium">{example.work}</span>
                          <span className="text-slate-600 block text-sm">
                            by {example.author}
                          </span>
                          <span className="text-slate-600 text-sm">
                            {example.interpretation}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Contemporary Expressions</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {christianLiteratureContent.contemporary.map((cont, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{cont.area}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{cont.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Trends:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {cont.trends.map((trend, idx) => (
                        <li key={idx}>{trend}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Challenges:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {cont.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Opportunities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {cont.opportunities.map((opportunity, idx) => (
                        <li key={idx}>{opportunity}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {cont.examples.map((example, idx) => (
                        <li key={idx}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Cultural Impact</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Cultural Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {christianLiteratureContent.impact.cultural.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Theological Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {christianLiteratureContent.impact.theological.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Social Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {christianLiteratureContent.impact.social.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Recommended Resources</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {christianLiteratureContent.resources.map((resource, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
                {resource.author && (
                  <p className="text-sm text-slate-600">By {resource.author}</p>
                )}
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{resource.description}</p>
                <div className="space-x-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={resource.url}>Learn More</Link>
                  </Button>
                  {resource.affiliate && (
                    <Button asChild variant="default" size="sm">
                      <Link href={resource.affiliateUrl!} target="_blank" rel="noopener noreferrer">
                        View on Amazon
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Related Topics</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/religion/christianity/impact/art" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Art</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore Christianity's influence on visual arts.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/impact/music" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Music</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover Christianity's impact on musical traditions.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/impact/philosophy" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about Christian influence on philosophical thought.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 