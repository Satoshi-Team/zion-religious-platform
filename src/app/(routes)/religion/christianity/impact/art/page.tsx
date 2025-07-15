import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ArtPeriod {
  era: string
  years: string
  description: string
  characteristics: string[]
  keyWorks: Array<{
    title: string
    artist: string
    year: string
    significance: string
  }>
  themes: string[]
  impact: string
}

interface ArtisticTradition {
  name: string
  description: string
  elements: string[]
  significance: string
  examples: string[]
  legacy: string
}

interface Theme {
  name: string
  description: string
  representations: string[]
  significance: string
  examples: Array<{
    work: string
    artist: string
    interpretation: string
  }>
}

interface Contemporary {
  area: string
  description: string
  approaches: string[]
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

interface ChristianArtContent {
  introduction: string
  definition: string
  periods: ArtPeriod[]
  traditions: ArtisticTradition[]
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
  title: "Christianity's Impact on Art | Christianity",
  description: "Explore Christianity's profound influence on art throughout history, from early Christian symbols to contemporary expressions.",
  openGraph: {
    title: "Christianity's Impact on Art | Christianity",
    description: "Comprehensive guide to Christian influence on artistic expression",
    type: "website",
  },
}

const christianArtContent: ChristianArtContent = {
  introduction: `Christianity has profoundly shaped the development of Western art, serving as both inspiration and patron throughout history. From early catacomb paintings to contemporary installations, Christian themes, symbols, and narratives have been central to artistic expression.`,
  definition: `Christian art encompasses works that explicitly depict religious figures, themes, or symbols, as well as works created for religious purposes or spiritual contemplation, spanning various mediums and styles across different historical periods and cultures.`,
  periods: [
    {
      era: "Early Christian",
      years: "1-500 CE",
      description: "Art developed in the context of early Christian communities, often hidden in catacombs and later emerging in public spaces.",
      characteristics: [
        "Symbolic representation",
        "Narrative scenes from scripture",
        "Adaptation of Roman styles",
        "Catacomb paintings",
        "Sarcophagus reliefs"
      ],
      keyWorks: [
        {
          title: "Good Shepherd Catacomb Fresco",
          artist: "Unknown",
          year: "3rd century",
          significance: "Early Christian symbol of Christ's pastoral care"
        },
        {
          title: "Santa Maria Maggiore Mosaics",
          artist: "Various",
          year: "432-440 CE",
          significance: "Early Christian narrative cycles"
        }
      ],
      themes: [
        "Good Shepherd imagery",
        "Biblical narratives",
        "Christological symbols",
        "Paradise scenes",
        "Martyrdom depictions"
      ],
      impact: "Established foundational Christian iconography and symbolic language"
    },
    {
      era: "Byzantine",
      years: "500-1453 CE",
      description: "Developed sophisticated theological and artistic traditions, emphasizing the transcendent and divine.",
      characteristics: [
        "Icon tradition",
        "Gold backgrounds",
        "Hierarchical scaling",
        "Formal composition",
        "Mosaic decoration"
      ],
      keyWorks: [
        {
          title: "Hagia Sophia Mosaics",
          artist: "Various",
          year: "6th-13th centuries",
          significance: "Masterpiece of Byzantine art and architecture"
        },
        {
          title: "Christ Pantocrator",
          artist: "Unknown",
          year: "6th century",
          significance: "Definitive image of Christ as ruler"
        }
      ],
      themes: [
        "Divine authority",
        "Heavenly hierarchy",
        "Theological concepts",
        "Imperial imagery",
        "Liturgical scenes"
      ],
      impact: "Established enduring traditions of Christian imagery and sacred space"
    },
    {
      era: "Medieval",
      years: "500-1400 CE",
      description: "Art serving educational and devotional purposes in Western Europe.",
      characteristics: [
        "Manuscript illumination",
        "Romanesque sculpture",
        "Gothic architecture",
        "Stained glass",
        "Altar pieces"
      ],
      keyWorks: [
        {
          title: "Book of Kells",
          artist: "Celtic Monks",
          year: "800 CE",
          significance: "Masterpiece of manuscript illumination"
        },
        {
          title: "Chartres Cathedral",
          artist: "Various",
          year: "1194-1220",
          significance: "Gothic architectural and artistic achievement"
        }
      ],
      themes: [
        "Biblical narratives",
        "Lives of saints",
        "Last Judgment",
        "Mary as Queen of Heaven",
        "Moral instruction"
      ],
      impact: "Created comprehensive visual theology for teaching and worship"
    },
    {
      era: "Renaissance",
      years: "1400-1600 CE",
      description: "Synthesis of Christian themes with classical humanism and naturalism.",
      characteristics: [
        "Perspective",
        "Anatomical accuracy",
        "Oil painting",
        "Fresco cycles",
        "Patronage system"
      ],
      keyWorks: [
        {
          title: "Sistine Chapel Ceiling",
          artist: "Michelangelo",
          year: "1508-1512",
          significance: "Masterpiece of Biblical narrative and human form"
        },
        {
          title: "The Last Supper",
          artist: "Leonardo da Vinci",
          year: "1495-1498",
          significance: "Revolutionary composition of sacred scene"
        }
      ],
      themes: [
        "Biblical narratives",
        "Human dignity",
        "Divine beauty",
        "Sacred space",
        "Individual spirituality"
      ],
      impact: "Transformed religious art through humanism and technical innovation"
    }
  ],
  traditions: [
    {
      name: "Iconography",
      description: "Sacred image tradition emphasizing theological meaning and spiritual presence",
      elements: [
        "Symbolic colors",
        "Reverse perspective",
        "Gold leaf",
        "Prescribed forms",
        "Prayer function"
      ],
      significance: "Bridges material and spiritual realms in worship",
      examples: [
        "Russian icons",
        "Greek Orthodox imagery",
        "Coptic icons",
        "Ethiopian icons",
        "Contemporary icon writing"
      ],
      legacy: "Continues as living tradition in Eastern Christianity and beyond"
    },
    {
      name: "Sacred Architecture",
      description: "Design and construction of religious spaces for worship and community",
      elements: [
        "Symbolic layout",
        "Light manipulation",
        "Acoustic design",
        "Sacred geometry",
        "Artistic integration"
      ],
      significance: "Creates physical and spiritual space for worship",
      examples: [
        "Gothic cathedrals",
        "Baroque churches",
        "Modern chapels",
        "Monastic complexes",
        "Contemporary worship spaces"
      ],
      legacy: "Influences modern architectural theory and practice"
    },
    {
      name: "Liturgical Art",
      description: "Art created for worship and sacramental celebration",
      elements: [
        "Ritual objects",
        "Vestments",
        "Altar pieces",
        "Processional items",
        "Sacred vessels"
      ],
      significance: "Enhances worship through beauty and symbolism",
      examples: [
        "Chalices",
        "Crosses",
        "Vestments",
        "Altar frontals",
        "Processional banners"
      ],
      legacy: "Maintains connection between art and worship"
    }
  ],
  themes: [
    {
      name: "Incarnation",
      description: "Artistic exploration of divine becoming human",
      representations: [
        "Nativity scenes",
        "Madonna and Child",
        "Annunciation",
        "Holy Family",
        "Christ's humanity"
      ],
      significance: "Central Christian doctrine expressed visually",
      examples: [
        {
          work: "Annunciation",
          artist: "Fra Angelico",
          interpretation: "Divine light entering human realm"
        },
        {
          work: "Madonna of the Rocks",
          artist: "Leonardo da Vinci",
          interpretation: "Humanity and divinity in balance"
        }
      ]
    },
    {
      name: "Sacrifice and Redemption",
      description: "Visual representation of Christ's sacrifice and human salvation",
      representations: [
        "Crucifixion",
        "Resurrection",
        "Lamb of God",
        "Eucharistic symbols",
        "Salvation narratives"
      ],
      significance: "Core salvation narrative in visual form",
      examples: [
        {
          work: "Isenheim Altarpiece",
          artist: "Matthias Grünewald",
          interpretation: "Suffering and hope in redemption"
        },
        {
          work: "Resurrection",
          artist: "Piero della Francesca",
          interpretation: "Victory over death"
        }
      ]
    }
  ],
  contemporary: [
    {
      area: "Digital Art",
      description: "Integration of technology in religious artistic expression",
      approaches: [
        "Virtual reality experiences",
        "Digital installations",
        "Interactive prayer spaces",
        "Social media art",
        "Projection mapping"
      ],
      challenges: [
        "Authenticity questions",
        "Technical limitations",
        "Traditional resistance",
        "Access issues",
        "Preservation concerns"
      ],
      opportunities: [
        "Global reach",
        "Interactive engagement",
        "New expressions",
        "Youth connection",
        "Innovation potential"
      ],
      examples: [
        "VR church experiences",
        "Digital icons",
        "Multimedia installations",
        "Online galleries",
        "Sacred game design"
      ]
    },
    {
      area: "Social Justice Art",
      description: "Art addressing contemporary issues through Christian lens",
      approaches: [
        "Community engagement",
        "Prophetic witness",
        "Cultural critique",
        "Environmental awareness",
        "Peace advocacy"
      ],
      challenges: [
        "Political tension",
        "Church acceptance",
        "Message balance",
        "Funding issues",
        "Audience reach"
      ],
      opportunities: [
        "Cultural dialogue",
        "Social change",
        "Faith expression",
        "Community building",
        "Prophetic voice"
      ],
      examples: [
        "Street murals",
        "Installation art",
        "Performance pieces",
        "Community projects",
        "Environmental art"
      ]
    }
  ],
  impact: {
    cultural: [
      "Shaped Western visual culture",
      "Influenced artistic techniques",
      "Established symbolic language",
      "Preserved classical heritage",
      "Inspired secular art"
    ],
    theological: [
      "Visualized doctrine",
      "Enhanced worship",
      "Aided teaching",
      "Expressed spirituality",
      "Facilitated devotion"
    ],
    social: [
      "Created shared visual language",
      "Unified communities",
      "Educated populations",
      "Preserved history",
      "Promoted values"
    ]
  },
  resources: [
    {
      title: "Art and Christianity",
      author: "John W. Dixon Jr.",
      url: "/resources/art-christianity-dixon",
      type: "Book",
      description: "Comprehensive study of Christian art history and theology.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0313261245"
    },
    {
      title: "Sacred Art in a Secular Century",
      author: "Jane Dillenberger",
      url: "/resources/sacred-art-dillenberger",
      type: "Book",
      description: "Analysis of modern religious art.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0824500741"
    },
    {
      title: "The Story of Christian Art",
      author: "Edward Lucie-Smith",
      url: "/resources/christian-art-lucie-smith",
      type: "Book",
      description: "Historical survey of Christian artistic expression.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1556709188"
    }
  ]
}

export default function ChristianArtPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Christianity's Impact on Art</h1>
        <p className="text-xl mb-4">{christianArtContent.introduction}</p>
        <p className="text-lg mb-8">{christianArtContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Historical Periods</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {christianArtContent.periods.map((period, index) => (
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
                            {work.artist}, {work.year}
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
        <h2 className="text-3xl font-bold mb-4">Artistic Traditions</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {christianArtContent.traditions.map((tradition, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{tradition.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{tradition.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Elements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {tradition.elements.map((element, idx) => (
                        <li key={idx}>{element}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {tradition.examples.map((example, idx) => (
                        <li key={idx}>{example}</li>
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
        <h2 className="text-3xl font-bold mb-4">Major Themes</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {christianArtContent.themes.map((theme, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{theme.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{theme.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Representations:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {theme.representations.map((rep, idx) => (
                        <li key={idx}>{rep}</li>
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
                            by {example.artist}
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
          {christianArtContent.contemporary.map((cont, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{cont.area}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{cont.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Approaches:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {cont.approaches.map((approach, idx) => (
                        <li key={idx}>{approach}</li>
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
                {christianArtContent.impact.cultural.map((item, idx) => (
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
                {christianArtContent.impact.theological.map((item, idx) => (
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
                {christianArtContent.impact.social.map((item, idx) => (
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
          {christianArtContent.resources.map((resource, index) => (
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
          <Link href="/religion/christianity/impact/architecture" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore Christianity's influence on architectural development.</p>
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
          <Link href="/religion/christianity/impact/literature" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Literature</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about Christian influence on literary works.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 