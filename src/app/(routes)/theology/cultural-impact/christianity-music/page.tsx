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
  title: "Christianity and Music | Cultural Impact",
  description: "Comprehensive exploration of Christianity's influence on music throughout history, including sacred music, worship styles, and contemporary expressions.",
  keywords: [
    "Christian Music",
    "Sacred Music",
    "Church Music",
    "Worship Music",
    "Hymns",
    "Gospel Music",
    "Contemporary Christian Music",
    "Liturgical Music",
    "Christian Composers",
    "Religious Music"
  ]
}

interface MusicalPeriod {
  period: string
  description: string
  characteristics: string[]
  keyWorks: string[]
  composers: string[]
  influence: string[]
}

interface MusicalStyle {
  style: string
  description: string
  elements: string[]
  traditions: string[]
  examples: string[]
  significance: string[]
}

interface WorshipForm {
  form: string
  description: string
  elements: string[]
  practices: string[]
  repertoire: string[]
  impact: string[]
}

interface ContemporaryTrend {
  trend: string
  description: string
  characteristics: string[]
  artists: string[]
  examples: string[]
  influence: string[]
}

const musicalPeriods: MusicalPeriod[] = [
  {
    period: "Early Church Music (1-500 AD)",
    description: "Music from the early Christian church period",
    characteristics: [
      "Monophonic chant",
      "Biblical texts",
      "Liturgical function",
      "Oral tradition",
      "Simple melodies"
    ],
    keyWorks: [
      "Gregorian chant",
      "Ambrosian chant",
      "Psalms settings",
      "Early hymns",
      "Liturgical responses"
    ],
    composers: [
      "St. Ambrose",
      "Pope Gregory I",
      "Early church musicians",
      "Anonymous composers",
      "Monastic writers"
    ],
    influence: [
      "Established liturgical music",
      "Developed notation",
      "Shaped Western music",
      "Preserved traditions",
      "Influenced later styles"
    ]
  },
  {
    period: "Medieval Sacred Music (500-1400)",
    description: "Sacred music from the Middle Ages",
    characteristics: [
      "Polyphony development",
      "Modal system",
      "Sacred texts",
      "Liturgical use",
      "Manuscript tradition"
    ],
    keyWorks: [
      "Notre Dame polyphony",
      "Gregorian repertoire",
      "Medieval motets",
      "Liturgical dramas",
      "Sacred songs"
    ],
    composers: [
      "Léonin",
      "Pérotin",
      "Hildegard of Bingen",
      "Guillaume de Machaut",
      "John Dunstable"
    ],
    influence: [
      "Advanced musical notation",
      "Developed harmony",
      "Established forms",
      "Influenced composition",
      "Created traditions"
    ]
  }
]

const musicalStyles: MusicalStyle[] = [
  {
    style: "Gospel Music",
    description: "African-American sacred music tradition",
    elements: [
      "Call and response",
      "Spiritual themes",
      "Rhythmic emphasis",
      "Improvisation",
      "Emotional expression"
    ],
    traditions: [
      "Spirituals",
      "Traditional gospel",
      "Contemporary gospel",
      "Urban gospel",
      "Gospel blues"
    ],
    examples: [
      "Amazing Grace",
      "Oh Happy Day",
      "Take My Hand, Precious Lord",
      "How Great Is Our God",
      "Total Praise"
    ],
    significance: [
      "Cultural expression",
      "Spiritual formation",
      "Musical innovation",
      "Social impact",
      "Artistic influence"
    ]
  },
  {
    style: "Hymnody",
    description: "Traditional church songs and hymns",
    elements: [
      "Four-part harmony",
      "Strophic form",
      "Doctrinal content",
      "Congregational singing",
      "Metrical psalms"
    ],
    traditions: [
      "Lutheran chorales",
      "English hymns",
      "American hymns",
      "Gospel hymns",
      "Modern hymns"
    ],
    examples: [
      "A Mighty Fortress",
      "Holy, Holy, Holy",
      "Great Is Thy Faithfulness",
      "How Great Thou Art",
      "In Christ Alone"
    ],
    significance: [
      "Theological teaching",
      "Congregational worship",
      "Musical heritage",
      "Cultural impact",
      "Spiritual formation"
    ]
  }
]

const worshipForms: WorshipForm[] = [
  {
    form: "Liturgical Worship",
    description: "Formal, structured worship music",
    elements: [
      "Choral music",
      "Organ accompaniment",
      "Liturgical responses",
      "Sacred music",
      "Traditional hymns"
    ],
    practices: [
      "Choral singing",
      "Congregational hymns",
      "Liturgical responses",
      "Musical settings",
      "Seasonal repertoire"
    ],
    repertoire: [
      "Mass settings",
      "Anthems",
      "Service music",
      "Psalter settings",
      "Hymnal selections"
    ],
    impact: [
      "Worship structure",
      "Musical tradition",
      "Spiritual formation",
      "Cultural preservation",
      "Artistic excellence"
    ]
  },
  {
    form: "Contemporary Worship",
    description: "Modern expressions of worship music",
    elements: [
      "Band-led music",
      "Contemporary songs",
      "Modern instruments",
      "Audio technology",
      "Visual elements"
    ],
    practices: [
      "Praise teams",
      "Modern arrangements",
      "Multi-media",
      "Sound systems",
      "Creative arts"
    ],
    repertoire: [
      "Worship songs",
      "Modern hymns",
      "Original music",
      "Covers/arrangements",
      "Instrumental music"
    ],
    impact: [
      "Cultural relevance",
      "Youth engagement",
      "Musical innovation",
      "Global influence",
      "Worship renewal"
    ]
  }
]

const contemporaryTrends: ContemporaryTrend[] = [
  {
    trend: "Modern Worship Music",
    description: "Contemporary expressions of Christian worship",
    characteristics: [
      "Modern sound",
      "Biblical lyrics",
      "Emotional connection",
      "Production quality",
      "Global reach"
    ],
    artists: [
      "Hillsong Worship",
      "Bethel Music",
      "Elevation Worship",
      "Chris Tomlin",
      "Matt Redman"
    ],
    examples: [
      "10,000 Reasons",
      "What A Beautiful Name",
      "Good Good Father",
      "Way Maker",
      "Build My Life"
    ],
    influence: [
      "Global worship",
      "Church music",
      "Youth culture",
      "Music industry",
      "Worship practices"
    ]
  },
  {
    trend: "Christian Contemporary Music (CCM)",
    description: "Contemporary Christian popular music",
    characteristics: [
      "Popular styles",
      "Christian themes",
      "Professional production",
      "Market focus",
      "Cultural engagement"
    ],
    artists: [
      "Lauren Daigle",
      "For King & Country",
      "TobyMac",
      "Casting Crowns",
      "MercyMe"
    ],
    examples: [
      "You Say",
      "God Only Knows",
      "I Can Only Imagine",
      "Who Am I",
      "Speak Life"
    ],
    influence: [
      "Popular culture",
      "Music industry",
      "Youth ministry",
      "Christian media",
      "Cultural dialogue"
    ]
  }
]

export default function ChristianityMusicPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Christianity and Music</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="periods">Historical Periods</TabsTrigger>
          <TabsTrigger value="styles">Musical Styles</TabsTrigger>
          <TabsTrigger value="worship">Worship Forms</TabsTrigger>
          <TabsTrigger value="trends">Contemporary</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Christianity's Influence on Music</CardTitle>
              <CardDescription>
                The profound impact of Christian faith on musical expression throughout history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Christianity has deeply influenced music throughout history,
                from early church chants to contemporary worship music,
                shaping both sacred and secular musical traditions.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="periods">
          <div className="grid gap-4 md:grid-cols-2">
            {musicalPeriods.map((period) => (
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
                  <h4 className="font-semibold">Composers:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {period.composers.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Influence:</h4>
                  <ul className="list-disc pl-5">
                    {period.influence.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="styles">
          <div className="grid gap-4 md:grid-cols-2">
            {musicalStyles.map((style) => (
              <Card key={style.style}>
                <CardHeader>
                  <CardTitle>{style.style}</CardTitle>
                  <CardDescription>{style.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Elements:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {style.elements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Traditions:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {style.traditions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Examples:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {style.examples.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-5">
                    {style.significance.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="worship">
          <div className="grid gap-4 md:grid-cols-2">
            {worshipForms.map((form) => (
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
                  <h4 className="font-semibold">Practices:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {form.practices.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Repertoire:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {form.repertoire.map((item) => (
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

        <TabsContent value="trends">
          <div className="grid gap-4 md:grid-cols-2">
            {contemporaryTrends.map((trend) => (
              <Card key={trend.trend}>
                <CardHeader>
                  <CardTitle>{trend.trend}</CardTitle>
                  <CardDescription>{trend.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {trend.characteristics.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Artists:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {trend.artists.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Examples:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {trend.examples.map((item) => (
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