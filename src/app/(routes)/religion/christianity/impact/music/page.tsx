import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MusicalPeriod {
  era: string
  years: string
  description: string
  characteristics: string[]
  keyWorks: Array<{
    title: string
    composer: string
    year: string
    significance: string
  }>
  forms: string[]
  impact: string
}

interface MusicalTradition {
  name: string
  description: string
  characteristics: string[]
  significance: string
  examples: Array<{
    work: string
    origin: string
    period: string
  }>
  legacy: string
}

interface Genre {
  name: string
  description: string
  elements: string[]
  significance: string
  examples: Array<{
    work: string
    composer: string
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

interface ChristianMusicContent {
  introduction: string
  definition: string
  periods: MusicalPeriod[]
  traditions: MusicalTradition[]
  genres: Genre[]
  contemporary: Contemporary[]
  impact: {
    cultural: string[]
    theological: string[]
    social: string[]
  }
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Christianity's Impact on Music | Christianity",
  description: "Explore Christianity's profound influence on music throughout history, from Gregorian chant to contemporary worship.",
  openGraph: {
    title: "Christianity's Impact on Music | Christianity",
    description: "Comprehensive guide to Christian influence on musical expression",
    type: "website",
  },
}

const christianMusicContent: ChristianMusicContent = {
  introduction: `Christianity has profoundly shaped the development of Western music, from its earliest liturgical chants to modern worship music. The Church has been both patron and innovator, nurturing musical development while establishing enduring traditions that continue to influence composers and performers across genres.`,
  definition: `Christian music encompasses both sacred music created specifically for worship and devotional purposes, as well as music influenced by Christian themes, values, and traditions, spanning various genres and cultural contexts from ancient times to the present.`,
  periods: [
    {
      era: "Early Christian",
      years: "1-500 CE",
      description: "Development of early Christian liturgical music and chant traditions.",
      characteristics: [
        "Monophonic singing",
        "Call and response",
        "Psalm recitation",
        "Hebrew influences",
        "Greek musical modes"
      ],
      keyWorks: [
        {
          title: "Oxyrhynchus Hymn",
          composer: "Unknown",
          year: "c. 300 CE",
          significance: "Earliest known Christian music manuscript"
        },
        {
          title: "Te Deum",
          composer: "Attributed to Nicetas",
          year: "c. 400 CE",
          significance: "Early Christian hymn still in use today"
        }
      ],
      forms: [
        "Psalms",
        "Hymns",
        "Antiphonal singing",
        "Responsorial singing",
        "Liturgical chants"
      ],
      impact: "Established foundations of Western liturgical music"
    },
    {
      era: "Medieval",
      years: "500-1400 CE",
      description: "Codification of sacred music and development of polyphony.",
      characteristics: [
        "Gregorian chant",
        "Early polyphony",
        "Modal system",
        "Notation development",
        "Liturgical cycles"
      ],
      keyWorks: [
        {
          title: "Gregorian Chant Repertory",
          composer: "Various",
          year: "c. 600-900",
          significance: "Standardized liturgical music of Western Church"
        },
        {
          title: "Notre Dame School Polyphony",
          composer: "Léonin and Pérotin",
          year: "c. 1200",
          significance: "Early development of polyphonic music"
        }
      ],
      forms: [
        "Plainchant",
        "Organum",
        "Conductus",
        "Motet",
        "Mass settings"
      ],
      impact: "Developed musical notation and polyphonic composition"
    },
    {
      era: "Renaissance",
      years: "1400-1600 CE",
      description: "Flowering of sacred polyphony and musical complexity.",
      characteristics: [
        "Complex polyphony",
        "A cappella style",
        "Word painting",
        "Mass cycles",
        "Motet development"
      ],
      keyWorks: [
        {
          title: "Missa Papae Marcelli",
          composer: "Giovanni Pierluigi da Palestrina",
          year: "1562",
          significance: "Exemplar of Counter-Reformation sacred music"
        },
        {
          title: "Spem in alium",
          composer: "Thomas Tallis",
          year: "c. 1570",
          significance: "Masterpiece of 40-voice polyphony"
        }
      ],
      forms: [
        "Mass",
        "Motet",
        "Madrigal",
        "Hymn",
        "Psalm settings"
      ],
      impact: "Perfected sacred polyphonic style"
    },
    {
      era: "Baroque to Modern",
      years: "1600-present",
      description: "Expansion of sacred music forms and styles.",
      characteristics: [
        "Oratorio development",
        "Protestant hymnody",
        "Sacred cantatas",
        "Gospel music",
        "Contemporary worship"
      ],
      keyWorks: [
        {
          title: "St. Matthew Passion",
          composer: "J.S. Bach",
          year: "1727",
          significance: "Masterwork of Protestant sacred music"
        },
        {
          title: "Messiah",
          composer: "G.F. Handel",
          year: "1741",
          significance: "Most performed sacred oratorio"
        }
      ],
      forms: [
        "Oratorio",
        "Cantata",
        "Chorale",
        "Gospel song",
        "Praise music"
      ],
      impact: "Diversified Christian musical expression"
    }
  ],
  traditions: [
    {
      name: "Gregorian Chant",
      description: "Traditional monophonic sacred song of Western Christianity",
      characteristics: [
        "Unaccompanied melody",
        "Latin text",
        "Modal scales",
        "Free rhythm",
        "Liturgical function"
      ],
      significance: "Foundation of Western sacred music",
      examples: [
        {
          work: "Dies Irae",
          origin: "Medieval Latin",
          period: "13th century"
        },
        {
          work: "Veni Creator Spiritus",
          origin: "Frankish",
          period: "9th century"
        }
      ],
      legacy: "Continues to influence both sacred and secular music"
    },
    {
      name: "Protestant Hymnody",
      description: "Congregational song tradition emerging from Reformation",
      characteristics: [
        "Vernacular texts",
        "Metrical psalms",
        "Four-part harmony",
        "Strophic form",
        "Congregational singing"
      ],
      significance: "Democratized church music",
      examples: [
        {
          work: "Ein feste Burg",
          origin: "German Lutheran",
          period: "16th century"
        },
        {
          work: "Amazing Grace",
          origin: "English/American",
          period: "18th century"
        }
      ],
      legacy: "Shaped modern congregational worship"
    },
    {
      name: "Gospel Music",
      description: "African American sacred music tradition",
      characteristics: [
        "Call and response",
        "Improvisation",
        "Rhythmic emphasis",
        "Spiritual themes",
        "Emotional expression"
      ],
      significance: "Blended African and Christian traditions",
      examples: [
        {
          work: "Precious Lord",
          origin: "African American",
          period: "20th century"
        },
        {
          work: "Oh Happy Day",
          origin: "African American",
          period: "20th century"
        }
      ],
      legacy: "Influenced popular music globally"
    }
  ],
  genres: [
    {
      name: "Sacred Choral Music",
      description: "Complex vocal works for liturgical and concert settings",
      elements: [
        "Multiple voice parts",
        "Sacred texts",
        "Liturgical function",
        "Complex harmony",
        "Traditional forms"
      ],
      significance: "Preserves and develops sacred musical tradition",
      examples: [
        {
          work: "Mass in B Minor",
          composer: "J.S. Bach",
          interpretation: "Supreme achievement in sacred music"
        },
        {
          work: "Requiem",
          composer: "W.A. Mozart",
          interpretation: "Dramatic sacred expression"
        }
      ]
    },
    {
      name: "Contemporary Worship",
      description: "Modern expressions of Christian worship music",
      elements: [
        "Popular music styles",
        "Simple harmony",
        "Repetitive structure",
        "Personal expression",
        "Congregational focus"
      ],
      significance: "Adapts worship music to contemporary culture",
      examples: [
        {
          work: "Shout to the Lord",
          composer: "Darlene Zschech",
          interpretation: "Modern worship anthem"
        },
        {
          work: "10,000 Reasons",
          composer: "Matt Redman",
          interpretation: "Contemporary hymn structure"
        }
      ]
    }
  ],
  contemporary: [
    {
      area: "Digital Worship",
      description: "Integration of technology in worship music",
      trends: [
        "Online streaming",
        "Virtual choirs",
        "Digital production",
        "Mobile apps",
        "Social media integration"
      ],
      challenges: [
        "Audio quality",
        "Participation barriers",
        "Copyright issues",
        "Technical requirements",
        "Community building"
      ],
      opportunities: [
        "Global reach",
        "Creative innovation",
        "Accessibility",
        "Collaboration",
        "Resource sharing"
      ],
      examples: [
        "Virtual worship services",
        "Online collaborations",
        "Streaming platforms",
        "Digital sheet music",
        "Worship apps"
      ]
    },
    {
      area: "Cross-Cultural Music",
      description: "Integration of diverse musical traditions",
      trends: [
        "Global influences",
        "Indigenous styles",
        "Fusion genres",
        "Cultural exchange",
        "Multilingual worship"
      ],
      challenges: [
        "Cultural authenticity",
        "Language barriers",
        "Musical complexity",
        "Traditional resistance",
        "Resource limitations"
      ],
      opportunities: [
        "Cultural enrichment",
        "Global unity",
        "Musical innovation",
        "Cultural preservation",
        "Mission support"
      ],
      examples: [
        "African praise music",
        "Asian fusion worship",
        "Latin American styles",
        "Indigenous compositions",
        "Global worship gatherings"
      ]
    }
  ],
  impact: {
    cultural: [
      "Shaped Western musical tradition",
      "Developed notation systems",
      "Preserved musical heritage",
      "Influenced secular music",
      "Advanced musical education"
    ],
    theological: [
      "Enhanced worship experience",
      "Expressed doctrine musically",
      "Facilitated memorization",
      "Unified congregations",
      "Supported evangelism"
    ],
    social: [
      "Built communities",
      "Preserved cultural heritage",
      "Facilitated social change",
      "Connected generations",
      "Promoted cultural exchange"
    ]
  },
  resources: [
    {
      title: "A History of Western Music",
      author: "J. Peter Burkholder",
      url: "/resources/history-western-music-burkholder",
      type: "Book",
      description: "Comprehensive study of Western musical development.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0393668178"
    },
    {
      title: "Christian Music: A Global History",
      author: "Tim Dowley",
      url: "/resources/christian-music-dowley",
      type: "Book",
      description: "Survey of Christian music across cultures and times.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0800698416"
    },
    {
      title: "Worship Through the Ages",
      author: "Vernon M. Whaley",
      url: "/resources/worship-through-ages-whaley",
      type: "Book",
      description: "Evolution of Christian worship music.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0805448381"
    }
  ]
}

export default function ChristianMusicPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Christianity's Impact on Music</h1>
        <p className="text-xl mb-4">{christianMusicContent.introduction}</p>
        <p className="text-lg mb-8">{christianMusicContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Historical Periods</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {christianMusicContent.periods.map((period, index) => (
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
                            {work.composer}, {work.year}
                          </span>
                          <span className="text-slate-600 text-sm">
                            {work.significance}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Forms:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {period.forms.map((form, idx) => (
                        <li key={idx}>{form}</li>
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
        <h2 className="text-3xl font-bold mb-4">Musical Traditions</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {christianMusicContent.traditions.map((tradition, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{tradition.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{tradition.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Characteristics:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {tradition.characteristics.map((char, idx) => (
                        <li key={idx}>{char}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {tradition.examples.map((example, idx) => (
                        <li key={idx}>
                          <span className="font-medium">{example.work}</span>
                          <span className="text-slate-600 block text-sm">
                            {example.origin}, {example.period}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Legacy:</h4>
                    <p className="text-slate-600">{tradition.legacy}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Musical Genres</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {christianMusicContent.genres.map((genre, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{genre.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{genre.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Elements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {genre.elements.map((element, idx) => (
                        <li key={idx}>{element}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Examples:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {genre.examples.map((example, idx) => (
                        <li key={idx}>
                          <span className="font-medium">{example.work}</span>
                          <span className="text-slate-600 block text-sm">
                            by {example.composer}
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
          {christianMusicContent.contemporary.map((cont, index) => (
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
                {christianMusicContent.impact.cultural.map((item, idx) => (
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
                {christianMusicContent.impact.theological.map((item, idx) => (
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
                {christianMusicContent.impact.social.map((item, idx) => (
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
          {christianMusicContent.resources.map((resource, index) => (
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
          <Link href="/religion/christianity/impact/literature" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Literature</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover Christianity's impact on literary traditions.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/worship/liturgy" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Liturgy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about Christian liturgical traditions.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 