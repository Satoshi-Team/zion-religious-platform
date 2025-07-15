import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HistoricalPeriod {
  title: string
  years: string
  description: string
  keyEvents: string[]
  significance: string
}

interface KeyFigure {
  name: string
  role: string
  dates: string
  significance: string
  contributions: string[]
  writings?: string[]
}

interface Development {
  area: string
  description: string
  details: string[]
  significance: string
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

interface MedievalChurchContent {
  introduction: string
  definition: string
  periods: HistoricalPeriod[]
  figures: KeyFigure[]
  monasticism: {
    description: string
    orders: Array<{
      name: string
      founder: string
      year: string
      characteristics: string[]
      impact: string
    }>
  }
  developments: Development[]
  legacy: string[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Medieval Church History | Christianity",
  description: "Explore the history of Christianity during the Middle Ages (5th-15th centuries), including monasticism, scholasticism, and church-state relations.",
  openGraph: {
    title: "Medieval Church History | Christianity",
    description: "Comprehensive guide to medieval Christian history and development",
    type: "website",
  },
}

const medievalChurchContent: MedievalChurchContent = {
  introduction: `The medieval period, spanning roughly from the 5th to the 15th century, represents a transformative era in Christian history. During this time, the Church became the dominant institution in European society, shaping culture, education, politics, and daily life.`,
  definition: `The medieval church era encompasses the period from the fall of the Western Roman Empire to the Renaissance, characterized by the rise of monasticism, the development of scholasticism, and the complex relationship between church and state.`,
  periods: [
    {
      title: "Early Middle Ages",
      years: "c. 500-1000",
      description: "Period of missionary expansion, monastic development, and the emergence of Christendom.",
      keyEvents: [
        "Conversion of Germanic peoples",
        "Rise of Benedictine monasticism",
        "Islamic conquests",
        "Carolingian Renaissance",
        "Christianization of Northern Europe"
      ],
      significance: "Established Christianity as the dominant cultural force in Europe."
    },
    {
      title: "High Middle Ages",
      years: "c. 1000-1300",
      description: "Peak of medieval Christian civilization, marked by intellectual and institutional development.",
      keyEvents: [
        "First Crusade (1095)",
        "Gregorian Reform",
        "Rise of universities",
        "Fourth Lateran Council (1215)",
        "Gothic cathedral building"
      ],
      significance: "Developed sophisticated theological and philosophical systems."
    },
    {
      title: "Late Middle Ages",
      years: "c. 1300-1500",
      description: "Period of crisis and transformation leading to the Renaissance and Reformation.",
      keyEvents: [
        "Avignon Papacy",
        "Black Death",
        "Great Western Schism",
        "Conciliar movement",
        "Early Renaissance humanism"
      ],
      significance: "Set the stage for major religious transformations."
    }
  ],
  figures: [
    {
      name: "Benedict of Nursia",
      role: "Monastic Founder",
      dates: "c. 480-547",
      significance: "Father of Western monasticism",
      contributions: [
        "Wrote the Rule of St. Benedict",
        "Established Monte Cassino monastery",
        "Created balanced monastic lifestyle",
        "Influenced Western spirituality"
      ],
      writings: [
        "Rule of St. Benedict",
        "Monastic Guidelines"
      ]
    },
    {
      name: "Thomas Aquinas",
      role: "Theologian and Philosopher",
      dates: "1225-1274",
      significance: "Greatest scholastic theologian",
      contributions: [
        "Synthesized faith and reason",
        "Developed natural theology",
        "Systematized Catholic doctrine",
        "Integrated Aristotelian philosophy"
      ],
      writings: [
        "Summa Theologica",
        "Summa Contra Gentiles",
        "On Being and Essence"
      ]
    },
    {
      name: "Francis of Assisi",
      role: "Mendicant Founder",
      dates: "1181/82-1226",
      significance: "Founder of Franciscan Order and reformer",
      contributions: [
        "Established mendicant lifestyle",
        "Promoted evangelical poverty",
        "Reformed church spirituality",
        "Emphasized nature and creation"
      ],
      writings: [
        "Canticle of the Sun",
        "Rule of the Friars Minor",
        "Testament"
      ]
    }
  ],
  monasticism: {
    description: "Monasticism played a central role in medieval Christianity, preserving learning, developing spirituality, and serving society.",
    orders: [
      {
        name: "Benedictines",
        founder: "Benedict of Nursia",
        year: "c. 529",
        characteristics: [
          "Stability",
          "Community life",
          "Balance of prayer and work",
          "Hospitality"
        ],
        impact: "Preserved classical learning and established educational traditions"
      },
      {
        name: "Cistercians",
        founder: "Robert of Molesme",
        year: "1098",
        characteristics: [
          "Strict observance",
          "Manual labor",
          "Architectural simplicity",
          "Rural locations"
        ],
        impact: "Reformed monastic life and developed agricultural techniques"
      },
      {
        name: "Franciscans",
        founder: "Francis of Assisi",
        year: "1209",
        characteristics: [
          "Evangelical poverty",
          "Preaching ministry",
          "Care for poor",
          "Urban presence"
        ],
        impact: "Renewed spirituality and developed urban ministry"
      }
    ]
  },
  developments: [
    {
      area: "Theology",
      description: "Development of systematic theology and philosophical frameworks",
      details: [
        "Scholastic method",
        "University system",
        "Sacramental theology",
        "Natural theology"
      ],
      significance: "Created enduring theological and educational methods"
    },
    {
      area: "Church-State Relations",
      description: "Complex interaction between religious and secular authority",
      details: [
        "Investiture Controversy",
        "Papal monarchy",
        "Canon law development",
        "Crusades"
      ],
      significance: "Shaped Western political thought and institutions"
    },
    {
      area: "Art and Architecture",
      description: "Development of distinctive Christian artistic traditions",
      details: [
        "Gothic architecture",
        "Manuscript illumination",
        "Religious iconography",
        "Liturgical art"
      ],
      significance: "Created enduring artistic and cultural heritage"
    }
  ],
  legacy: [
    "Educational institutions",
    "Legal traditions",
    "Architectural heritage",
    "Philosophical methods",
    "Monastic traditions",
    "Cultural synthesis",
    "Social services"
  ],
  resources: [
    {
      title: "The Medieval Church",
      author: "Joseph H. Lynch",
      url: "/resources/medieval-church-lynch",
      type: "Book",
      description: "Comprehensive overview of medieval church history.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0582494664"
    },
    {
      title: "Medieval Christianity: A New History",
      author: "Kevin Madigan",
      url: "/resources/medieval-christianity-madigan",
      type: "Book",
      description: "Fresh perspective on medieval Christian development.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0300216777"
    },
    {
      title: "The Story of Medieval Christianity",
      author: "G.R. Evans",
      url: "/resources/medieval-christianity-evans",
      type: "Book",
      description: "Narrative approach to medieval church history.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0800697235"
    }
  ]
}

export default function MedievalChurchPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Medieval Church History</h1>
        <p className="text-xl mb-4">{medievalChurchContent.introduction}</p>
        <p className="text-lg mb-8">{medievalChurchContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Historical Periods</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {medievalChurchContent.periods.map((period, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>
                  {period.title}
                  <span className="text-slate-600 text-sm block">
                    {period.years}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{period.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Events:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {period.keyEvents.map((event, idx) => (
                        <li key={idx}>{event}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Significance:</h4>
                    <p className="text-slate-600">{period.significance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Key Figures</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {medievalChurchContent.figures.map((figure, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>
                  {figure.name}
                  <span className="text-slate-600 text-sm block">
                    {figure.role} ({figure.dates})
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{figure.significance}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Contributions:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {figure.contributions.map((contribution, idx) => (
                        <li key={idx}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                  {figure.writings && (
                    <div>
                      <h4 className="font-semibold mb-2">Major Writings:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {figure.writings.map((writing, idx) => (
                          <li key={idx}>{writing}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Monasticism</h2>
        <Card className="mb-6">
          <CardContent className="pt-6">
            <p className="text-lg mb-6">{medievalChurchContent.monasticism.description}</p>
          </CardContent>
        </Card>
        <div className="grid gap-6 lg:grid-cols-3">
          {medievalChurchContent.monasticism.orders.map((order, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>
                  {order.name}
                  <span className="text-slate-600 text-sm block">
                    Founded by {order.founder}, {order.year}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Characteristics:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {order.characteristics.map((char, idx) => (
                        <li key={idx}>{char}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Impact:</h4>
                    <p className="text-slate-600">{order.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Key Developments</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {medievalChurchContent.developments.map((development, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{development.area}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{development.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Details:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {development.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  Significance: {development.significance}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Historical Legacy</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {medievalChurchContent.legacy.map((item, index) => (
                <li key={index} className="p-4 bg-slate-50 rounded-lg">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Recommended Resources</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {medievalChurchContent.resources.map((resource, index) => (
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
          <Link href="/religion/christianity/history/early-church" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Early Church</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the foundational period of Christian history.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/history/reformation" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Reformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Study the Protestant Reformation and Catholic Reform.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/practices/monasticism" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Monastic Life</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about medieval monastic traditions and practices.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 