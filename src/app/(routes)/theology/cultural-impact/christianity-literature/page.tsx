import React from 'react'
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
  title: "Christianity and Literature | Cultural Impact",
  description: "Comprehensive exploration of Christianity's influence on literature and literary traditions throughout history.",
  keywords: [
    "Christian Literature",
    "Religious Writing",
    "Sacred Texts",
    "Christian Poetry",
    "Religious Fiction",
    "Christian Authors",
    "Biblical Literature",
    "Religious Poetry",
    "Christian Novels",
    "Religious Drama"
  ]
}

interface LiteraryPeriod {
  period: string
  description: string
  characteristics: string[]
  keyWorks: string[]
  authors: string[]
  influence: string[]
}

interface LiteraryGenre {
  genre: string
  description: string
  elements: string[]
  themes: string[]
  examples: string[]
  significance: string[]
}

interface Author {
  name: string
  description: string
  works: string[]
  themes: string[]
  influence: string[]
  legacy: string[]
}

interface ContemporaryTrend {
  trend: string
  description: string
  characteristics: string[]
  authors: string[]
  works: string[]
  impact: string[]
}

const literaryPeriods: LiteraryPeriod[] = [
  {
    period: "Medieval Christian Literature",
    description: "Literature from the Middle Ages deeply influenced by Christian theology",
    characteristics: [
      "Allegorical interpretation",
      "Religious symbolism",
      "Moral instruction",
      "Divine providence",
      "Spiritual journey themes"
    ],
    keyWorks: [
      "Divine Comedy by Dante",
      "Canterbury Tales by Chaucer",
      "Beowulf",
      "Pearl",
      "Piers Plowman"
    ],
    authors: [
      "Dante Alighieri",
      "Geoffrey Chaucer",
      "Anonymous poets",
      "Julian of Norwich",
      "Thomas à Kempis"
    ],
    influence: [
      "Established literary traditions",
      "Developed allegory",
      "Preserved classical learning",
      "Shaped vernacular literature",
      "Influenced modern writing"
    ]
  },
  {
    period: "Renaissance Christian Literature",
    description: "Literature combining Christian themes with humanist learning",
    characteristics: [
      "Classical influences",
      "Biblical references",
      "Humanist philosophy",
      "Religious reform themes",
      "Personal devotion"
    ],
    keyWorks: [
      "Paradise Lost by Milton",
      "Holy Sonnets by Donne",
      "Faerie Queene by Spenser",
      "Doctor Faustus by Marlowe",
      "Pilgrim's Progress by Bunyan"
    ],
    authors: [
      "John Milton",
      "John Donne",
      "Edmund Spenser",
      "Christopher Marlowe",
      "John Bunyan"
    ],
    influence: [
      "Reformed literary style",
      "Integrated faith and learning",
      "Developed religious poetry",
      "Influenced modern literature",
      "Shaped Protestant culture"
    ]
  }
]

const literaryGenres: LiteraryGenre[] = [
  {
    genre: "Christian Poetry",
    description: "Poetic works expressing Christian themes and experiences",
    elements: [
      "Religious imagery",
      "Biblical allusions",
      "Spiritual metaphors",
      "Divine contemplation",
      "Moral reflection"
    ],
    themes: [
      "Divine love",
      "Spiritual struggle",
      "Redemption",
      "Faith journey",
      "Sacred experience"
    ],
    examples: [
      "Paradise Lost",
      "Holy Sonnets",
      "The Dream of the Rood",
      "Hopkins' religious poetry",
      "Contemporary Christian verse"
    ],
    significance: [
      "Artistic expression of faith",
      "Spiritual formation",
      "Cultural influence",
      "Literary innovation",
      "Religious education"
    ]
  },
  {
    genre: "Christian Fiction",
    description: "Narrative works incorporating Christian themes and worldview",
    elements: [
      "Moral conflict",
      "Spiritual journey",
      "Faith challenges",
      "Divine intervention",
      "Character transformation"
    ],
    themes: [
      "Redemption",
      "Grace",
      "Faith testing",
      "Moral choice",
      "Spiritual warfare"
    ],
    examples: [
      "Pilgrim's Progress",
      "Chronicles of Narnia",
      "Ben-Hur",
      "The Great Divorce",
      "Contemporary Christian novels"
    ],
    significance: [
      "Faith exploration",
      "Cultural engagement",
      "Moral instruction",
      "Evangelistic tool",
      "Literary artistry"
    ]
  }
]

const significantAuthors: Author[] = [
  {
    name: "C.S. Lewis",
    description: "20th century Christian author and apologist",
    works: [
      "Chronicles of Narnia",
      "Mere Christianity",
      "The Screwtape Letters",
      "Till We Have Faces",
      "The Space Trilogy"
    ],
    themes: [
      "Christian allegory",
      "Theological exploration",
      "Moral development",
      "Spiritual warfare",
      "Divine love"
    ],
    influence: [
      "Modern apologetics",
      "Christian fiction",
      "Children's literature",
      "Religious education",
      "Popular theology"
    ],
    legacy: [
      "Literary excellence",
      "Theological clarity",
      "Cultural impact",
      "Educational influence",
      "Artistic innovation"
    ]
  },
  {
    name: "Flannery O'Connor",
    description: "20th century Catholic author known for Southern Gothic style",
    works: [
      "Wise Blood",
      "The Violent Bear It Away",
      "Everything That Rises Must Converge",
      "Mystery and Manners",
      "The Complete Stories"
    ],
    themes: [
      "Grace through violence",
      "Religious mystery",
      "Human nature",
      "Divine intervention",
      "Moral revelation"
    ],
    influence: [
      "Modern fiction",
      "Catholic literature",
      "Southern literature",
      "Religious writing",
      "Literary style"
    ],
    legacy: [
      "Artistic vision",
      "Theological depth",
      "Literary craft",
      "Cultural critique",
      "Religious insight"
    ]
  }
]

const contemporaryTrends: ContemporaryTrend[] = [
  {
    trend: "Faith-Based Fiction",
    description: "Modern literature exploring contemporary faith experiences",
    characteristics: [
      "Contemporary settings",
      "Real-life challenges",
      "Faith integration",
      "Cultural engagement",
      "Personal transformation"
    ],
    authors: [
      "Contemporary novelists",
      "Christian writers",
      "Literary authors",
      "Genre writers",
      "Cross-over authors"
    ],
    works: [
      "Literary fiction",
      "Genre fiction",
      "Young adult novels",
      "Short stories",
      "Digital narratives"
    ],
    impact: [
      "Cultural dialogue",
      "Faith expression",
      "Literary development",
      "Reader engagement",
      "Market influence"
    ]
  },
  {
    trend: "Digital Christian Literature",
    description: "Religious writing in digital formats and platforms",
    characteristics: [
      "Digital formats",
      "Interactive elements",
      "Social media integration",
      "Multimedia content",
      "Global reach"
    ],
    authors: [
      "Digital writers",
      "Bloggers",
      "Content creators",
      "Online communities",
      "Social media authors"
    ],
    works: [
      "Blog posts",
      "Digital books",
      "Online devotionals",
      "Social content",
      "Multimedia stories"
    ],
    impact: [
      "Accessibility",
      "Global community",
      "Innovation",
      "Youth engagement",
      "Cultural influence"
    ]
  }
]

export default function ChristianityLiteraturePage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Christianity and Literature</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="periods">Historical Periods</TabsTrigger>
          <TabsTrigger value="genres">Genres</TabsTrigger>
          <TabsTrigger value="authors">Authors</TabsTrigger>
          <TabsTrigger value="trends">Contemporary</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Christianity's Influence on Literature</CardTitle>
              <CardDescription>
                The profound impact of Christian faith on literary expression throughout history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Christianity has deeply influenced literature throughout history,
                shaping genres, themes, and artistic expression while providing
                inspiration for countless authors and works.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="periods">
          <div className="grid gap-4 md:grid-cols-2">
            {literaryPeriods.map((period) => (
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
                  <h4 className="font-semibold">Authors:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {period.authors.map((item) => (
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

        <TabsContent value="genres">
          <div className="grid gap-4 md:grid-cols-2">
            {literaryGenres.map((genre) => (
              <Card key={genre.genre}>
                <CardHeader>
                  <CardTitle>{genre.genre}</CardTitle>
                  <CardDescription>{genre.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Elements:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {genre.elements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Themes:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {genre.themes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Examples:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {genre.examples.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-5">
                    {genre.significance.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="authors">
          <div className="grid gap-4 md:grid-cols-2">
            {significantAuthors.map((author) => (
              <Card key={author.name}>
                <CardHeader>
                  <CardTitle>{author.name}</CardTitle>
                  <CardDescription>{author.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Works:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {author.works.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Themes:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {author.themes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Influence:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {author.influence.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Legacy:</h4>
                  <ul className="list-disc pl-5">
                    {author.legacy.map((item) => (
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
                  <h4 className="font-semibold">Authors:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {trend.authors.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Works:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {trend.works.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Impact:</h4>
                  <ul className="list-disc pl-5">
                    {trend.impact.map((item) => (
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