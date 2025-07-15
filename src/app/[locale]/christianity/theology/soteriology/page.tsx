import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SalvationDoctrine {
  title: string
  description: string
  keyPoints: string[]
  scriptureRefs: Array<{
    reference: string
    text: string
  }>
  significance: string
}

interface TheologicalPerspective {
  tradition: string
  description: string
  keyEmphases: string[]
  distinctives: string[]
  majorFigures: Array<{
    name: string
    contribution: string
    dates?: string
  }>
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

interface SoteriologyContent {
  introduction: string
  definition: string
  doctrines: SalvationDoctrine[]
  perspectives: TheologicalPerspective[]
  orderOfSalvation: Array<{
    stage: string
    description: string
    scriptureRef: string
  }>
  contemporaryImplications: string[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Soteriology | Christian Doctrine of Salvation",
  description: "Explore Christian teachings about salvation, including different theological perspectives, the order of salvation, and contemporary implications for faith and practice.",
  openGraph: {
    title: "Soteriology | Christian Doctrine of Salvation",
    description: "Comprehensive guide to Christian teachings about salvation",
    type: "website",
  },
}

const soteriologyContent: SoteriologyContent = {
  introduction: `Soteriology, the study of salvation in Christian theology, explores how God's redemptive work in Christ brings humanity from sin and death to forgiveness and eternal life. This foundational doctrine addresses the nature, means, and scope of salvation, as well as its application in human experience.`,
  definition: `At its core, Christian soteriology examines how God's saving work in Christ reconciles sinful humanity to Himself, transforming individuals and communities through grace, faith, and the work of the Holy Spirit. It encompasses both the objective work of Christ and its subjective application in human lives.`,
  doctrines: [
    {
      title: "Atonement",
      description: "The work of Christ in securing salvation through his death and resurrection.",
      keyPoints: [
        "Substitutionary sacrifice for sin",
        "Reconciliation between God and humanity",
        "Victory over sin, death, and evil",
        "Demonstration of God's love and justice"
      ],
      scriptureRefs: [
        {
          reference: "Romans 3:25",
          text: "God presented Christ as a sacrifice of atonement, through the shedding of his blood"
        },
        {
          reference: "2 Corinthians 5:21",
          text: "God made him who had no sin to be sin for us, so that in him we might become the righteousness of God"
        }
      ],
      significance: "The atonement is the foundation of salvation, addressing both the objective problem of sin and its subjective effects in human life."
    },
    {
      title: "Justification by Faith",
      description: "The doctrine that sinners are declared righteous before God through faith in Christ.",
      keyPoints: [
        "Righteousness imputed through faith",
        "Not based on human works or merit",
        "Results in peace with God",
        "Basis for Christian assurance"
      ],
      scriptureRefs: [
        {
          reference: "Romans 5:1",
          text: "Therefore, since we have been justified through faith, we have peace with God"
        }
      ],
      significance: "Justification provides the legal basis for salvation and the foundation for Christian peace and assurance."
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
      scriptureRefs: [
        {
          reference: "1 Thessalonians 5:23",
          text: "May God himself, the God of peace, sanctify you through and through"
        }
      ],
      significance: "Sanctification represents the transformative aspect of salvation, making believers more like Christ."
    }
  ],
  perspectives: [
    {
      tradition: "Reformed",
      description: "Emphasizes God's sovereignty in salvation and the doctrines of grace.",
      keyEmphases: [
        "Divine election and predestination",
        "Total depravity of human nature",
        "Irresistible grace",
        "Perseverance of the saints"
      ],
      distinctives: [
        "Unconditional election",
        "Limited/particular atonement",
        "Covenant theology"
      ],
      majorFigures: [
        {
          name: "John Calvin",
          contribution: "Systematic development of Reformed soteriology",
          dates: "1509-1564"
        },
        {
          name: "Jonathan Edwards",
          contribution: "Reformed revival theology",
          dates: "1703-1758"
        }
      ]
    },
    {
      tradition: "Wesleyan-Arminian",
      description: "Emphasizes human free will and universal availability of grace.",
      keyEmphases: [
        "Prevenient grace",
        "Conditional election",
        "Universal atonement",
        "Resistible grace"
      ],
      distinctives: [
        "Possibility of falling from grace",
        "Emphasis on holiness",
        "Synergistic view of salvation"
      ],
      majorFigures: [
        {
          name: "Jacob Arminius",
          contribution: "Developed alternative to Calvinist soteriology",
          dates: "1560-1609"
        },
        {
          name: "John Wesley",
          contribution: "Methodist theology of salvation and sanctification",
          dates: "1703-1791"
        }
      ]
    }
  ],
  orderOfSalvation: [
    {
      stage: "Election",
      description: "God's eternal choice of those who will be saved",
      scriptureRef: "Ephesians 1:4-5"
    },
    {
      stage: "Calling",
      description: "God's invitation through the gospel",
      scriptureRef: "Romans 8:30"
    },
    {
      stage: "Regeneration",
      description: "New birth through the Holy Spirit",
      scriptureRef: "John 3:3"
    },
    {
      stage: "Conversion",
      description: "Repentance and faith in response to the gospel",
      scriptureRef: "Acts 16:31"
    },
    {
      stage: "Justification",
      description: "Declaration of righteousness through faith",
      scriptureRef: "Romans 5:1"
    },
    {
      stage: "Adoption",
      description: "Reception into God's family",
      scriptureRef: "Romans 8:15"
    },
    {
      stage: "Sanctification",
      description: "Growth in holiness and Christlikeness",
      scriptureRef: "1 Thessalonians 4:3"
    },
    {
      stage: "Glorification",
      description: "Final transformation at Christ's return",
      scriptureRef: "Romans 8:30"
    }
  ],
  contemporaryImplications: [
    "Personal assurance of salvation",
    "Motivation for evangelism and missions",
    "Basis for social justice engagement",
    "Framework for spiritual formation",
    "Hope in face of suffering and death"
  ],
  resources: [
    {
      title: "Salvation by Grace",
      author: "Matthew Barrett",
      url: "/resources/salvation-grace",
      type: "Book",
      description: "Contemporary explanation of salvation by grace through faith.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1433524597"
    },
    {
      title: "The Cross of Christ",
      author: "John Stott",
      url: "/resources/cross-of-christ",
      type: "Book",
      description: "Classic work on the meaning and significance of Christ's atonement.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0830833188"
    },
    {
      title: "Foundations of the Christian Faith",
      author: "James Montgomery Boice",
      url: "/resources/foundations-faith",
      type: "Book",
      description: "Comprehensive overview of Christian doctrine including salvation.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0830847960"
    }
  ]
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function SoteriologyPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Soteriology: The Doctrine of Salvation</h1>
        <p className="text-xl mb-4">{soteriologyContent.introduction}</p>
        <p className="text-lg mb-8">{soteriologyContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Key Doctrines</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {soteriologyContent.doctrines.map((doctrine, index) => (
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
        <h2 className="text-3xl font-bold mb-4">Theological Perspectives</h2>
        <div className="space-y-6">
          {soteriologyContent.perspectives.map((perspective, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{perspective.tradition}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{perspective.description}</p>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Key Emphases:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {perspective.keyEmphases.map((emphasis, idx) => (
                        <li key={idx}>{emphasis}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Distinctive Features:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {perspective.distinctives.map((distinctive, idx) => (
                        <li key={idx}>{distinctive}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Major Figures:</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    {perspective.majorFigures.map((figure, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 rounded-lg">
                        <p className="font-medium">{figure.name}</p>
                        {figure.dates && (
                          <p className="text-sm text-slate-600">{figure.dates}</p>
                        )}
                        <p className="mt-2">{figure.contribution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Order of Salvation</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {soteriologyContent.orderOfSalvation.map((stage, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-700">
                    {index + 1}
                  </span>
                  {stage.stage}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">{stage.description}</p>
                <p className="text-sm text-slate-600">{stage.scriptureRef}</p>
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
              {soteriologyContent.contemporaryImplications.map((implication, index) => (
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
          {soteriologyContent.resources.map((resource, index) => (
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
          <Link href={`/${params.locale}/christianity/christology`} className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Christology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the person and work of Christ.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href={`/${params.locale}/christianity/theology/pneumatology`} className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Pneumatology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand the Holy Spirit's role in salvation.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href={`/${params.locale}/christianity/theology/ecclesiology`} className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Ecclesiology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about salvation in the context of the Church.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 