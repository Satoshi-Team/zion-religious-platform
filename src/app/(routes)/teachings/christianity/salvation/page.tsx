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

interface SalvationContent {
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
  title: "Salvation | Christian Doctrine of Redemption",
  description: "Explore the Christian doctrine of salvation - understanding how God redeems humanity through Christ. Learn about its biblical foundations, historical development, and theological significance.",
  openGraph: {
    title: "Salvation | Christian Doctrine of Redemption",
    description: "Comprehensive guide to understanding the Christian doctrine of salvation",
    type: "website",
  },
}

const salvationContent: SalvationContent = {
  introduction: `The doctrine of salvation is central to Christian theology, explaining how God redeems humanity from sin and death through Jesus Christ. This profound mystery of divine grace has been the subject of deep theological reflection throughout Christian history.`,
  definition: `Salvation in Christianity refers to God's work of delivering humanity from sin and its consequences through Jesus Christ. It encompasses justification (being declared righteous), sanctification (growing in holiness), and glorification (final transformation). This salvation is received by grace through faith in Christ.`,
  scriptureReferences: [
    {
      reference: "Ephesians 2:8-9",
      text: "For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.",
      explanation: "This passage establishes salvation as a gift of God's grace received through faith, not through human works."
    },
    {
      reference: "Romans 5:1",
      text: "Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ.",
      explanation: "Paul explains how justification through faith brings peace with God."
    },
    {
      reference: "John 3:16",
      text: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
      explanation: "This verse reveals God's love as the motive for salvation and faith as the means of receiving it."
    }
  ],
  historicalDevelopment: [
    {
      period: "Early Church (1st-3rd centuries)",
      description: "The early church emphasized salvation through Christ's work and the necessity of faith.",
      keyFigures: [
        {
          name: "Augustine",
          contribution: "Developed doctrine of original sin and divine grace",
          dates: "354-430 AD"
        },
        {
          name: "Irenaeus",
          contribution: "Formulated recapitulation theory of salvation",
          dates: "c. 130-202 AD"
        }
      ],
      significance: "Laid the groundwork for later doctrinal formulations about salvation"
    },
    {
      period: "Reformation Era (16th century)",
      description: "Major developments in understanding salvation, particularly justification by faith.",
      keyFigures: [
        {
          name: "Martin Luther",
          contribution: "Rediscovered and emphasized justification by faith alone",
          dates: "1483-1546"
        },
        {
          name: "John Calvin",
          contribution: "Systematic development of Reformed soteriology",
          dates: "1509-1564"
        }
      ],
      significance: "Established Protestant understanding of salvation that remains influential today"
    }
  ],
  theologicalConcepts: [
    {
      title: "Justification by Faith",
      description: "The doctrine that sinners are declared righteous before God through faith in Christ.",
      keyPoints: [
        "Righteousness imputed through faith",
        "Not based on human works or merit",
        "Results in peace with God",
        "Basis for Christian assurance"
      ],
      scriptureRefs: ["Romans 5:1", "Galatians 2:16", "Philippians 3:9"],
      challenges: [
        "Balancing divine grace and human responsibility",
        "Understanding the relationship of faith and works",
        "Maintaining assurance while avoiding presumption"
      ]
    },
    {
      title: "Sanctification",
      description: "The ongoing process of spiritual growth and transformation in Christ.",
      keyPoints: [
        "Progressive growth in holiness",
        "Work of the Holy Spirit",
        "Involves human cooperation",
        "Lifelong process of transformation"
      ],
      scriptureRefs: ["1 Thessalonians 5:23", "2 Corinthians 3:18", "Philippians 2:12-13"]
    }
  ],
  commonMisconceptions: [
    {
      misconception: "Salvation is earned through good works",
      correction: "Salvation is a gift of God's grace received through faith in Christ, not earned through human works."
    },
    {
      misconception: "Once saved, always saved means no need for growth",
      correction: "While salvation is secure, believers are called to grow in holiness and Christlikeness through sanctification."
    },
    {
      misconception: "Salvation is only about going to heaven",
      correction: "Salvation includes both eternal life and present transformation through the Holy Spirit."
    }
  ],
  resources: [
    {
      title: "The Doctrine of Salvation",
      author: "Thomas Schreiner",
      url: "/resources/doctrine-salvation",
      type: "Book",
      description: "Comprehensive exploration of salvation theology from a biblical perspective.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1433556375"
    },
    {
      title: "Saved by Grace",
      author: "Anthony Hoekema",
      url: "/resources/saved-grace",
      type: "Book",
      description: "Classic work on the Reformed understanding of salvation.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0830839836"
    },
    {
      title: "Salvation Study Bible",
      author: "Various",
      url: "/resources/salvation-study-bible",
      type: "Study Resource",
      description: "Bible with study notes focusing on salvation themes.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/B08XYZGHI"
    }
  ]
}

export default function SalvationPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Salvation: Understanding God's Redemption</h1>
        <p className="text-xl mb-4">{salvationContent.introduction}</p>
        <p className="text-lg mb-8">{salvationContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Biblical Foundation</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {salvationContent.scriptureReferences.map((reference, index) => (
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
          {salvationContent.historicalDevelopment.map((period, index) => (
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
          {salvationContent.theologicalConcepts.map((concept, index) => (
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
              {salvationContent.commonMisconceptions.map((item, index) => (
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
          {salvationContent.resources.map((resource, index) => (
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
                <p>Explore how the Trinity works together in salvation.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/christianity/church" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>The Church</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand the church's role in salvation.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/comparative/salvation" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Comparative Salvation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Compare Christian salvation with other religious views.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 