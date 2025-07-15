import { Metadata } from "next"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Christianity and Art | Cultural Impact",
  description: "Comprehensive exploration of Christianity's influence on art and artistic expression throughout history.",
  keywords: [
    "Christian Art",
    "Religious Art",
    "Sacred Art",
    "Church Architecture",
    "Religious Symbolism",
    "Christian Iconography",
    "Religious Music",
    "Sacred Music",
    "Christian Visual Arts",
    "Religious Architecture"
  ]
}

interface ArtisticPeriod {
  period: string
  description: string
  characteristics: string[]
  keyWorks: string[]
  artists: string[]
  significance: string[]
}

interface ArtForm {
  form: string
  description: string
  elements: string[]
  techniques: string[]
  examples: string[]
  impact: string[]
}

interface Symbol {
  symbol: string
  description: string
  origins: string[]
  meanings: string[]
  applications: string[]
  variations: string[]
}

interface ContemporaryTrend {
  trend: string
  description: string
  expressions: string[]
  artists: string[]
  themes: string[]
  influence: string[]
}

const artisticPeriods: ArtisticPeriod[] = [
  {
    period: "Early Christian Art (100-500 AD)",
    description: "Art from the early Christian church period, often hidden in catacombs and homes",
    characteristics: [
      "Symbol-based representation",
      "Hidden Christian meanings",
      "Simple artistic forms",
      "Narrative scenes",
      "Catacomb paintings"
    ],
    keyWorks: [
      "Good Shepherd catacomb paintings",
      "Chi-Rho symbols",
      "Fish symbols (Ichthys)",
      "Dura-Europos church frescoes",
      "Sarcophagus reliefs"
    ],
    artists: [
      "Unknown catacomb artists",
      "Early Christian craftsmen",
      "Roman Christian artists",
      "Mosaic creators",
      "Stone carvers"
    ],
    significance: [
      "Established Christian symbolism",
      "Preserved early faith expressions",
      "Developed visual theology",
      "Created worship spaces",
      "Influenced later art"
    ]
  },
  {
    period: "Medieval Christian Art (500-1500)",
    description: "Art from the Middle Ages, characterized by religious themes and church patronage",
    characteristics: [
      "Gothic architecture",
      "Illuminated manuscripts",
      "Icon painting",
      "Stained glass",
      "Religious sculpture"
    ],
    keyWorks: [
      "Book of Kells",
      "Chartres Cathedral",
      "Giotto's frescoes",
      "Byzantine icons",
      "Notre-Dame sculptures"
    ],
    artists: [
      "Giotto",
      "Fra Angelico",
      "Duccio",
      "Master builders",
      "Manuscript illuminators"
    ],
    significance: [
      "Developed Christian imagery",
      "Advanced architectural forms",
      "Preserved biblical narratives",
      "Enhanced worship spaces",
      "Educated believers"
    ]
  }
]

const artForms: ArtForm[] = [
  {
    form: "Sacred Architecture",
    description: "Design and construction of religious buildings and spaces",
    elements: [
      "Cruciform layout",
      "Vertical emphasis",
      "Sacred geometry",
      "Light symbolism",
      "Acoustic design"
    ],
    techniques: [
      "Stone masonry",
      "Vaulting systems",
      "Stained glass",
      "Carved decoration",
      "Spatial planning"
    ],
    examples: [
      "Gothic cathedrals",
      "Romanesque churches",
      "Byzantine basilicas",
      "Modern chapels",
      "Monastery complexes"
    ],
    impact: [
      "Worship experience",
      "Community gathering",
      "Architectural innovation",
      "Cultural identity",
      "Urban development"
    ]
  },
  {
    form: "Religious Painting",
    description: "Visual art expressing Christian themes and narratives",
    elements: [
      "Biblical scenes",
      "Saint portraits",
      "Symbolic elements",
      "Sacred space decoration",
      "Devotional images"
    ],
    techniques: [
      "Fresco painting",
      "Panel painting",
      "Icon writing",
      "Oil painting",
      "Manuscript illumination"
    ],
    examples: [
      "Sistine Chapel",
      "Icon collections",
      "Altar pieces",
      "Gospel books",
      "Church murals"
    ],
    impact: [
      "Visual theology",
      "Faith education",
      "Artistic development",
      "Cultural preservation",
      "Spiritual formation"
    ]
  }
]

const symbols: Symbol[] = [
  {
    symbol: "Cross",
    description: "Primary symbol of Christian faith representing Christ's sacrifice",
    origins: [
      "Early Christian use",
      "Roman execution tool",
      "Greek letter Tau",
      "Ancient symbols",
      "Biblical reference"
    ],
    meanings: [
      "Salvation",
      "Sacrifice",
      "Victory",
      "Redemption",
      "Divine love"
    ],
    applications: [
      "Church architecture",
      "Personal jewelry",
      "Religious art",
      "Liturgical objects",
      "Sacred spaces"
    ],
    variations: [
      "Latin cross",
      "Greek cross",
      "Celtic cross",
      "Orthodox cross",
      "Crucifix"
    ]
  },
  {
    symbol: "Chi-Rho",
    description: "Monogram of Christ combining Greek letters X (Chi) and P (Rho)",
    origins: [
      "Constantine's vision",
      "Greek alphabet",
      "Early Christian use",
      "Military standards",
      "Imperial symbol"
    ],
    meanings: [
      "Christ's name",
      "Divine authority",
      "Christian identity",
      "Imperial protection",
      "Victory symbol"
    ],
    applications: [
      "Church decoration",
      "Manuscript art",
      "Official seals",
      "Religious objects",
      "Architectural elements"
    ],
    variations: [
      "Simple monogram",
      "Decorated versions",
      "Combined with alpha-omega",
      "Military standards",
      "Modern adaptations"
    ]
  }
]

const contemporaryTrends: ContemporaryTrend[] = [
  {
    trend: "Digital Sacred Art",
    description: "Modern religious art using digital media and technology",
    expressions: [
      "Digital paintings",
      "Virtual reality experiences",
      "Projection mapping",
      "Interactive installations",
      "Social media art"
    ],
    artists: [
      "Digital artists",
      "Multimedia creators",
      "VR designers",
      "Installation artists",
      "New media artists"
    ],
    themes: [
      "Traditional symbolism",
      "Contemporary interpretation",
      "Social justice",
      "Environmental care",
      "Spiritual journey"
    ],
    influence: [
      "Modern worship",
      "Youth engagement",
      "Global reach",
      "Cultural dialogue",
      "Artistic innovation"
    ]
  },
  {
    trend: "Social Justice Art",
    description: "Christian art addressing contemporary social issues",
    expressions: [
      "Street art",
      "Public murals",
      "Installation art",
      "Performance art",
      "Mixed media"
    ],
    artists: [
      "Urban artists",
      "Community artists",
      "Activist creators",
      "Church artists",
      "Global artists"
    ],
    themes: [
      "Human dignity",
      "Environmental care",
      "Peace and justice",
      "Community healing",
      "Cultural reconciliation"
    ],
    influence: [
      "Social awareness",
      "Faith action",
      "Community engagement",
      "Cultural change",
      "Spiritual reflection"
    ]
  }
]

export default function ChristianityArtPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Christianity and Art</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="periods">Historical Periods</TabsTrigger>
          <TabsTrigger value="forms">Art Forms</TabsTrigger>
          <TabsTrigger value="symbols">Symbols</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Christianity's Influence on Art</CardTitle>
              <CardDescription>
                The profound impact of Christian faith on artistic expression throughout history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Christianity has been a major influence on art throughout history,
                shaping various forms of artistic expression from architecture to
                painting, sculpture to music, and continuing to inspire contemporary
                artists in new media and forms.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="periods">
          <div className="grid gap-4 md:grid-cols-2">
            {artisticPeriods.map((period) => (
              <Card key={period.period}>
                <CardHeader>
                  <CardTitle>{period.period}</CardTitle>
                  <CardDescription>{period.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {period.characteristics.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Key Works:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {period.keyWorks.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Artists:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {period.artists.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-5">
                    {period.significance.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="forms">
          <div className="grid gap-4 md:grid-cols-2">
            {artForms.map((form) => (
              <Card key={form.form}>
                <CardHeader>
                  <CardTitle>{form.form}</CardTitle>
                  <CardDescription>{form.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Elements:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {form.elements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Techniques:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {form.techniques.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Examples:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {form.examples.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Impact:</h4>
                  <ul className="list-disc pl-5">
                    {form.impact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="symbols">
          <div className="grid gap-4 md:grid-cols-2">
            {symbols.map((symbol) => (
              <Card key={symbol.symbol}>
                <CardHeader>
                  <CardTitle>{symbol.symbol}</CardTitle>
                  <CardDescription>{symbol.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Origins:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {symbol.origins.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Meanings:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {symbol.meanings.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Applications:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {symbol.applications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Variations:</h4>
                  <ul className="list-disc pl-5">
                    {symbol.variations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="contemporary">
          <div className="grid gap-4 md:grid-cols-2">
            {contemporaryTrends.map((trend) => (
              <Card key={trend.trend}>
                <CardHeader>
                  <CardTitle>{trend.trend}</CardTitle>
                  <CardDescription>{trend.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Expressions:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {trend.expressions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Artists:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {trend.artists.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Themes:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {trend.themes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Influence:</h4>
                  <ul className="list-disc pl-5">
                    {trend.influence.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
} 