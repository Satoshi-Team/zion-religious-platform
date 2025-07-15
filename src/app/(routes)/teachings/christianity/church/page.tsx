import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ScriptureReference {
  reference: string
  text: string
  explanation: string
}

interface HistoricalDevelopment {
  period: string
  description: string
  keyFigures: Array<{
    name: string
    contribution: string
    dates?: string
  }>
  significance: string
}

interface TheologicalConcept {
  title: string
  description: string
  keyPoints: string[]
  scriptureRefs: string[]
  challenges?: string[]
}

interface ChurchContent {
  introduction: string
  definition: string
  scriptureReferences: ScriptureReference[]
  historicalDevelopment: HistoricalDevelopment[]
  theologicalConcepts: TheologicalConcept[]
  commonMisconceptions: Array<{
    misconception: string
    correction: string
  }>
  resources: Resource[]
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

export const metadata: Metadata = {
  title: "The Church | Christian Doctrine of Community",
  description: "Explore the Christian doctrine of the Church - understanding the nature, purpose, and mission of the Christian community. Learn about its biblical foundations, historical development, and theological significance.",
  openGraph: {
    title: "The Church | Christian Doctrine of Community",
    description: "Comprehensive guide to understanding the Christian doctrine of the Church",
    type: "website",
  },
}

const churchContent: ChurchContent = {
  introduction: `The doctrine of the Church (ecclesiology) is central to Christian theology, explaining the nature, purpose, and mission of the Christian community. This profound mystery of divine community has been the subject of deep theological reflection throughout Christian history.`,
  definition: `The Church in Christianity refers to the community of believers united by faith in Christ, empowered by the Holy Spirit, and called to worship, fellowship, and mission. It is both a divine institution and a human community, visible and invisible, local and universal.`,
  scriptureReferences: [
    {
      reference: "Matthew 16:18",
      text: "And I tell you, you are Peter, and on this rock I will build my church, and the gates of hell shall not prevail against it.",
      explanation: "Jesus establishes the Church as his community with divine authority and protection."
    },
    {
      reference: "1 Corinthians 12:27",
      text: "Now you are the body of Christ and individually members of it.",
      explanation: "Paul describes the Church as the body of Christ, emphasizing unity and diversity."
    },
    {
      reference: "Ephesians 2:19-20",
      text: "So then you are no longer strangers and aliens, but you are fellow citizens with the saints and members of the household of God, built on the foundation of the apostles and prophets, Christ Jesus himself being the cornerstone.",
      explanation: "This passage reveals the Church as God's household built on Christ and the apostles."
    }
  ],
  historicalDevelopment: [
    {
      period: "Early Church (1st-3rd centuries)",
      description: "The early church developed its understanding of community and leadership.",
      keyFigures: [
        {
          name: "Ignatius of Antioch",
          contribution: "Developed early episcopal structure and church unity",
          dates: "c. 35-108 AD"
        },
        {
          name: "Cyprian of Carthage",
          contribution: "Formulated doctrine of church unity and authority",
          dates: "c. 200-258 AD"
        }
      ],
      significance: "Established foundational patterns of church life and governance"
    },
    {
      period: "Reformation Era (16th century)",
      description: "Major developments in understanding church nature and authority.",
      keyFigures: [
        {
          name: "Martin Luther",
          contribution: "Reformed understanding of church as community of believers",
          dates: "1483-1546"
        },
        {
          name: "John Calvin",
          contribution: "Systematic development of Reformed ecclesiology",
          dates: "1509-1564"
        }
      ],
      significance: "Shaped Protestant understanding of church that remains influential today"
    }
  ],
  theologicalConcepts: [
    {
      title: "The Church as Body of Christ",
      description: "The theological concept of the Church as the living body of Christ on earth.",
      keyPoints: [
        "Unity in diversity of members",
        "Christ as head of the body",
        "Interdependence of members",
        "Growth and maturity in Christ"
      ],
      scriptureRefs: ["1 Corinthians 12:27", "Ephesians 4:15-16", "Colossians 1:18"],
      challenges: [
        "Maintaining unity amid diversity",
        "Balancing individual and corporate identity",
        "Fostering healthy relationships"
      ]
    },
    {
      title: "The Marks of the Church",
      description: "The essential characteristics that identify the true Church.",
      keyPoints: [
        "Preaching of the Word",
        "Administration of sacraments",
        "Exercise of discipline",
        "Fellowship of believers"
      ],
      scriptureRefs: ["Acts 2:42", "Matthew 28:19-20", "1 Corinthians 5:1-5"]
    }
  ],
  commonMisconceptions: [
    {
      misconception: "The Church is just a human organization",
      correction: "The Church is both a divine institution and a human community, established by Christ and empowered by the Holy Spirit."
    },
    {
      misconception: "Church membership is optional for Christians",
      correction: "While salvation is by faith alone, the New Testament consistently presents church membership as essential for Christian growth and obedience."
    },
    {
      misconception: "The Church is perfect and without problems",
      correction: "The Church is both holy and sinful, being made up of redeemed sinners who are still growing in Christlikeness."
    }
  ],
  resources: [
    {
      title: "The Church: The Gospel Made Visible",
      author: "Mark Dever",
      url: "/resources/church-gospel-visible",
      type: "Book",
      description: "Clear and practical exploration of church theology and practice.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1433556375"
    },
    {
      title: "The Church: One, Holy, Catholic, and Apostolic",
      author: "Richard Phillips",
      url: "/resources/church-one-holy",
      type: "Book",
      description: "Comprehensive study of the four marks of the church.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0830839836"
    },
    {
      title: "Church History Study Bible",
      author: "Various",
      url: "/resources/church-history-bible",
      type: "Study Resource",
      description: "Bible with study notes focusing on church history and ecclesiology.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/B08XYZGHI"
    }
  ]
}

export default function ChurchPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">The Church: Understanding Christian Community</h1>
        <p className="text-xl mb-4">{churchContent.introduction}</p>
        <p className="text-lg mb-8">{churchContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Biblical Foundation</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {churchContent.scriptureReferences.map((reference, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{reference.reference}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="italic mb-4">"{reference.text}"</p>
                <p className="text-slate-600">{reference.explanation}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Historical Development</h2>
        <div className="space-y-6">
          {churchContent.historicalDevelopment.map((period, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{period.period}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{period.description}</p>
                <div className="space-y-4">
                  <h4 className="font-semibold">Key Figures:</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    {period.keyFigures.map((figure, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 rounded-lg">
                        <p className="font-medium">{figure.name}</p>
                        {figure.dates && (
                          <p className="text-sm text-slate-600">{figure.dates}</p>
                        )}
                        <p className="mt-2">{figure.contribution}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-600 mt-4">
                    <span className="font-medium">Significance:</span> {period.significance}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Key Theological Concepts</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {churchContent.theologicalConcepts.map((concept, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{concept.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{concept.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Points:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {concept.keyPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scripture References:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {concept.scriptureRefs.map((ref, idx) => (
                        <li key={idx}>{ref}</li>
                      ))}
                    </ul>
                  </div>
                  {concept.challenges && (
                    <div>
                      <h4 className="font-semibold mb-2">Theological Challenges:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {concept.challenges.map((challenge, idx) => (
                          <li key={idx}>{challenge}</li>
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
        <h2 className="text-3xl font-bold mb-4">Common Misconceptions</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {churchContent.commonMisconceptions.map((item, index) => (
                <div key={index} className="p-4 bg-slate-50 rounded-lg">
                  <p className="font-medium text-red-600 mb-2">
                    Misconception: {item.misconception}
                  </p>
                  <p className="text-green-600">
                    Correction: {item.correction}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Recommended Resources</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {churchContent.resources.map((resource, index) => (
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
          <Link href="/teachings/christianity/trinity" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>The Trinity</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore how the Trinity shapes the Church.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/christianity/salvation" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Salvation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand the Church's role in salvation.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/comparative/community" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Comparative Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Compare Christian community with other religious views.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 