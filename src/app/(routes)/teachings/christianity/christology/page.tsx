import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ChristologicalDoctrine {
  title: string
  description: string
  keyPoints: string[]
  scriptureRefs: Array<{
    reference: string
    text: string
  }>
  significance: string
}

interface HistoricalDebate {
  title: string
  period: string
  description: string
  keyFigures: Array<{
    name: string
    position: string
    dates?: string
  }>
  resolution: string
  impact: string
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

interface ChristologyContent {
  introduction: string
  definition: string
  doctrines: ChristologicalDoctrine[]
  historicalDebates: HistoricalDebate[]
  contemporaryImplications: string[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Christology | The Study of Jesus Christ",
  description: "Explore Christian teachings about the person, nature, and work of Jesus Christ. Learn about historical debates, key doctrines, and contemporary understanding of Christ's significance.",
  openGraph: {
    title: "Christology | The Study of Jesus Christ",
    description: "Comprehensive guide to Christian teachings about Jesus Christ",
    type: "website",
  },
}

const christologyContent: ChristologyContent = {
  introduction: `Christology is the theological study of the person, nature, and role of Jesus Christ in Christian faith and doctrine. It explores fundamental questions about Christ's identity, his relationship to God the Father, his mission of salvation, and his ongoing significance for the church and world.`,
  definition: `At its core, Christology examines the biblical, historical, and theological understanding of Jesus Christ as fully God and fully human, the second person of the Trinity, and the unique mediator between God and humanity. This field encompasses both the study of Jesus' historical life and his eternal significance.`,
  doctrines: [
    {
      title: "The Incarnation",
      description: "The doctrine that the eternal Son of God took on human nature and became flesh in the person of Jesus of Nazareth.",
      keyPoints: [
        "Full deity and full humanity united in one person",
        "Born of the Virgin Mary through the Holy Spirit",
        "Maintains divine attributes while taking on human nature",
        "Purpose of revealing God and accomplishing salvation"
      ],
      scriptureRefs: [
        {
          reference: "John 1:14",
          text: "The Word became flesh and dwelt among us"
        },
        {
          reference: "Philippians 2:6-7",
          text: "Who, being in very nature God... made himself nothing, taking the form of a servant"
        }
      ],
      significance: "The Incarnation enables Christ to be the perfect mediator between God and humanity, capable of both representing God to humans and humans to God."
    },
    {
      title: "The Hypostatic Union",
      description: "The theological concept explaining how divine and human natures are united in the one person of Jesus Christ.",
      keyPoints: [
        "Two natures (divine and human) in one person",
        "Neither nature compromises the other",
        "Complete unity without mixture or confusion",
        "Eternal union beginning at incarnation"
      ],
      scriptureRefs: [
        {
          reference: "Colossians 2:9",
          text: "For in Christ all the fullness of the Deity lives in bodily form"
        }
      ],
      significance: "This doctrine preserves both Christ's full deity and full humanity while explaining their relationship in his person."
    },
    {
      title: "Christ's Three Offices",
      description: "The traditional understanding of Christ's roles as Prophet, Priest, and King.",
      keyPoints: [
        "Prophet: Reveals God's truth and will",
        "Priest: Mediates between God and humanity",
        "King: Rules over creation and the church",
        "Fulfills all Old Testament offices"
      ],
      scriptureRefs: [
        {
          reference: "Hebrews 1:1-2",
          text: "God... has spoken to us by his Son"
        }
      ],
      significance: "These offices explain Christ's comprehensive work in revelation, redemption, and rule."
    }
  ],
  historicalDebates: [
    {
      title: "The Arian Controversy",
      period: "4th Century",
      description: "Debate over whether Christ was fully divine or a created being.",
      keyFigures: [
        {
          name: "Arius",
          position: "Argued Christ was the first created being",
          dates: "c. 256-336"
        },
        {
          name: "Athanasius",
          position: "Defended Christ's full deity",
          dates: "c. 296-373"
        }
      ],
      resolution: "Council of Nicaea (325) affirmed Christ's full deity and eternal generation from the Father.",
      impact: "Established the orthodox understanding of Christ's divine nature and led to the Nicene Creed."
    },
    {
      title: "The Chalcedonian Definition",
      period: "5th Century",
      description: "Debate over how divine and human natures relate in Christ.",
      keyFigures: [
        {
          name: "Cyril of Alexandria",
          position: "Emphasized unity of Christ's person",
          dates: "c. 376-444"
        },
        {
          name: "Leo I",
          position: "Balanced unity and distinction of natures",
          dates: "c. 400-461"
        }
      ],
      resolution: "Council of Chalcedon (451) defined Christ as one person in two natures.",
      impact: "Provided the classical definition of Christ's two natures that remains normative for most Christian traditions."
    }
  ],
  contemporaryImplications: [
    "Christ's unique role in interfaith dialogue",
    "Relevance of incarnation for human dignity",
    "Christological basis for social justice",
    "Environmental stewardship based on Christ's lordship",
    "Christ's presence in digital age worship"
  ],
  resources: [
    {
      title: "The Person of Christ",
      author: "Donald Macleod",
      url: "/resources/person-of-christ",
      type: "Book",
      description: "Comprehensive introduction to Christology from a Reformed perspective.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0830815376"
    },
    {
      title: "Jesus Through the Centuries",
      author: "Jaroslav Pelikan",
      url: "/resources/jesus-centuries",
      type: "Book",
      description: "Historical survey of changing understandings of Christ.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0300079877"
    },
    {
      title: "The Oxford Handbook of Christology",
      author: "Francesca Murphy",
      url: "/resources/oxford-christology",
      type: "Academic Resource",
      description: "Scholarly resource covering all aspects of Christology.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0199641901"
    }
  ]
}

export default function ChristologyPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Christology: Understanding Jesus Christ</h1>
        <p className="text-xl mb-4">{christologyContent.introduction}</p>
        <p className="text-lg mb-8">{christologyContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Key Doctrines</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {christologyContent.doctrines.map((doctrine, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{doctrine.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{doctrine.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Points:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {doctrine.keyPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scripture References:</h4>
                    {doctrine.scriptureRefs.map((ref, idx) => (
                      <div key={idx} className="mb-2">
                        <p className="font-medium">{ref.reference}</p>
                        <p className="text-slate-600 italic">"{ref.text}"</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Significance:</h4>
                    <p className="text-slate-600">{doctrine.significance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Historical Debates</h2>
        <div className="space-y-6">
          {christologyContent.historicalDebates.map((debate, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{debate.title}</CardTitle>
                <p className="text-slate-600">{debate.period}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{debate.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Figures:</h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      {debate.keyFigures.map((figure, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 rounded-lg">
                          <p className="font-medium">{figure.name}</p>
                          {figure.dates && (
                            <p className="text-sm text-slate-600">{figure.dates}</p>
                          )}
                          <p className="mt-2">{figure.position}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Resolution:</h4>
                    <p className="text-slate-600">{debate.resolution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Historical Impact:</h4>
                    <p className="text-slate-600">{debate.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Contemporary Implications</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {christologyContent.contemporaryImplications.map((implication, index) => (
                <li key={index} className="p-4 bg-slate-50 rounded-lg">
                  {implication}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Recommended Resources</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {christologyContent.resources.map((resource, index) => (
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
                <p>Explore how Christ relates to the Trinity.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/christianity/soteriology" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Soteriology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand Christ's work in salvation.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/christianity/church" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Ecclesiology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about Christ's relationship to the Church.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 