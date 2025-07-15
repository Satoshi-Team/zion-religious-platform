import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SpiritDoctrine {
  title: string
  description: string
  keyPoints: string[]
  scriptureRefs: Array<{
    reference: string
    text: string
  }>
  significance: string
}

interface TraditionView {
  tradition: string
  description: string
  distinctives: string[]
  theologians: Array<{
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

interface PneumatologyContent {
  introduction: string
  definition: string
  doctrines: SpiritDoctrine[]
  traditions: TraditionView[]
  works: Array<{
    category: string
    description: string
    examples: string[]
    scriptureRef: string
  }>
  contemporaryImplications: string[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Pneumatology | Christian Doctrine of the Holy Spirit",
  description: "Explore Christian teachings about the Holy Spirit, including the Spirit's person, work, and role in the life of believers and the Church.",
  openGraph: {
    title: "Pneumatology | Christian Doctrine of the Holy Spirit",
    description: "Comprehensive guide to Christian teachings about the Holy Spirit",
    type: "website",
  },
}

const pneumatologyContent: PneumatologyContent = {
  introduction: `Pneumatology, the theological study of the Holy Spirit, explores the person, work, and role of the third person of the Trinity. This vital doctrine examines how the Spirit operates in creation, redemption, and the ongoing life of the Church and believers.`,
  definition: `At its core, pneumatology understands the Holy Spirit as fully divine, equal with the Father and Son, yet distinct in person and operation. The Spirit is God's active presence in the world, empowering the Church and transforming believers into Christ's image.`,
  doctrines: [
    {
      title: "Person of the Holy Spirit",
      description: "The Holy Spirit's identity as the third person of the Trinity.",
      keyPoints: [
        "Full deity and personality",
        "Eternal procession from Father and Son",
        "Personal attributes and actions",
        "Relationship within the Trinity"
      ],
      scriptureRefs: [
        {
          reference: "John 14:16-17",
          text: "And I will ask the Father, and he will give you another Helper, to be with you forever, even the Spirit of truth"
        },
        {
          reference: "Acts 5:3-4",
          text: "Why has Satan filled your heart to lie to the Holy Spirit?... You have not lied to man but to God"
        }
      ],
      significance: "Establishes the Holy Spirit's full deity and personal nature, essential for understanding His work in salvation and sanctification."
    },
    {
      title: "Work in Creation",
      description: "The Spirit's role in creation and providence.",
      keyPoints: [
        "Hovering over the waters",
        "Giving and sustaining life",
        "Inspiring creativity and wisdom",
        "Upholding the natural order"
      ],
      scriptureRefs: [
        {
          reference: "Genesis 1:2",
          text: "The Spirit of God was hovering over the face of the waters"
        },
        {
          reference: "Psalm 104:30",
          text: "When you send forth your Spirit, they are created"
        }
      ],
      significance: "Shows the Spirit's essential role in both creating and sustaining all life and order in the universe."
    },
    {
      title: "Work in Redemption",
      description: "The Spirit's role in salvation and sanctification.",
      keyPoints: [
        "Conviction of sin",
        "Regeneration of believers",
        "Indwelling presence",
        "Sanctifying work"
      ],
      scriptureRefs: [
        {
          reference: "John 16:8",
          text: "He will convict the world concerning sin and righteousness and judgment"
        },
        {
          reference: "Romans 8:11",
          text: "If the Spirit of him who raised Jesus from the dead dwells in you..."
        }
      ],
      significance: "Central to understanding how salvation is applied to believers and how they grow in holiness."
    }
  ],
  traditions: [
    {
      tradition: "Eastern Orthodox",
      description: "Emphasizes the Spirit's procession from the Father alone and role in theosis.",
      distinctives: [
        "Single procession from the Father",
        "Divine energies doctrine",
        "Emphasis on mystical experience",
        "Role in sacramental life"
      ],
      theologians: [
        {
          name: "Gregory of Nazianzus",
          contribution: "Developed pneumatological doctrine",
          dates: "329-390"
        },
        {
          name: "Gregory Palamas",
          contribution: "Connected Spirit to divine energies",
          dates: "1296-1359"
        }
      ]
    },
    {
      tradition: "Roman Catholic",
      description: "Emphasizes the Spirit's procession from Father and Son and role in Church authority.",
      distinctives: [
        "Double procession (Filioque)",
        "Institutional charisms",
        "Sacramental operation",
        "Magisterial guidance"
      ],
      theologians: [
        {
          name: "Augustine",
          contribution: "Developed Trinity and Spirit doctrine",
          dates: "354-430"
        },
        {
          name: "Yves Congar",
          contribution: "Modern Catholic pneumatology",
          dates: "1904-1995"
        }
      ]
    },
    {
      tradition: "Protestant",
      description: "Emphasizes the Spirit's role in Scripture and personal transformation.",
      distinctives: [
        "Scripture illumination",
        "Personal witness",
        "Spiritual gifts",
        "Individual leading"
      ],
      theologians: [
        {
          name: "John Calvin",
          contribution: "Spirit's role in faith and Scripture",
          dates: "1509-1564"
        },
        {
          name: "Abraham Kuyper",
          contribution: "Spirit's work in all of life",
          dates: "1837-1920"
        }
      ]
    },
    {
      tradition: "Pentecostal/Charismatic",
      description: "Emphasizes the Spirit's ongoing miraculous gifts and empowerment.",
      distinctives: [
        "Baptism in the Spirit",
        "Contemporary prophecy",
        "Divine healing",
        "Speaking in tongues"
      ],
      theologians: [
        {
          name: "William Seymour",
          contribution: "Azusa Street Revival leader",
          dates: "1870-1922"
        },
        {
          name: "Gordon Fee",
          contribution: "Biblical theology of the Spirit",
          dates: "1934-2022"
        }
      ]
    }
  ],
  works: [
    {
      category: "Revelation",
      description: "The Spirit's role in divine revelation and illumination",
      examples: [
        "Inspiration of Scripture",
        "Illumination of truth",
        "Prophetic guidance",
        "Spiritual wisdom"
      ],
      scriptureRef: "2 Peter 1:21"
    },
    {
      category: "Regeneration",
      description: "The Spirit's work in bringing new spiritual life",
      examples: [
        "New birth",
        "Faith creation",
        "Repentance",
        "Union with Christ"
      ],
      scriptureRef: "John 3:5-6"
    },
    {
      category: "Sanctification",
      description: "The Spirit's ongoing work of transformation",
      examples: [
        "Character formation",
        "Fruit of the Spirit",
        "Victory over sin",
        "Christ-likeness"
      ],
      scriptureRef: "Galatians 5:22-23"
    },
    {
      category: "Empowerment",
      description: "The Spirit's enabling for service and witness",
      examples: [
        "Spiritual gifts",
        "Bold witness",
        "Ministry effectiveness",
        "Divine guidance"
      ],
      scriptureRef: "Acts 1:8"
    }
  ],
  contemporaryImplications: [
    "Spiritual formation practices",
    "Charismatic renewal movements",
    "Ecumenical dialogue",
    "Environmental stewardship",
    "Cultural engagement",
    "Social justice advocacy"
  ],
  resources: [
    {
      title: "Keep in Step with the Spirit",
      author: "J.I. Packer",
      url: "/resources/spirit-packer",
      type: "Book",
      description: "Biblical teaching on the Holy Spirit's work in Christian life.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0801065585"
    },
    {
      title: "The Holy Spirit",
      author: "Sinclair B. Ferguson",
      url: "/resources/spirit-ferguson",
      type: "Book",
      description: "Comprehensive study of the person and work of the Spirit.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0830815368"
    },
    {
      title: "The Spirit of Life",
      author: "Jürgen Moltmann",
      url: "/resources/spirit-life",
      type: "Book",
      description: "Theology of the Spirit in ecological and liberation contexts.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0800634241"
    }
  ]
}

export default function PneumatologyPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Pneumatology: The Doctrine of the Holy Spirit</h1>
        <p className="text-xl mb-4">{pneumatologyContent.introduction}</p>
        <p className="text-lg mb-8">{pneumatologyContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Key Doctrines</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {pneumatologyContent.doctrines.map((doctrine, index) => (
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
        <h2 className="text-3xl font-bold mb-4">Traditional Views</h2>
        <div className="space-y-6">
          {pneumatologyContent.traditions.map((tradition, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{tradition.tradition}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{tradition.description}</p>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Distinctive Features:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {tradition.distinctives.map((distinctive, idx) => (
                        <li key={idx}>{distinctive}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Theologians:</h4>
                    <div className="space-y-4">
                      {tradition.theologians.map((theologian, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 rounded-lg">
                          <p className="font-medium">{theologian.name}</p>
                          {theologian.dates && (
                            <p className="text-sm text-slate-600">{theologian.dates}</p>
                          )}
                          <p className="mt-2">{theologian.contribution}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Works of the Spirit</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {pneumatologyContent.works.map((work, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{work.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{work.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Examples:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {work.examples.map((example, idx) => (
                      <li key={idx}>{example}</li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4 text-sm text-slate-600">Scripture: {work.scriptureRef}</p>
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
              {pneumatologyContent.contemporaryImplications.map((implication, index) => (
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
          {pneumatologyContent.resources.map((resource, index) => (
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
          <Link href="/religion/christianity/theology/trinity" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Trinity</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the Spirit's role in the Trinity.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/theology/soteriology" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Soteriology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand the Spirit's work in salvation.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/theology/ecclesiology" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Ecclesiology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the Spirit's role in the Church.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 