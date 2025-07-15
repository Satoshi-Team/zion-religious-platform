import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface EschatologicalDoctrine {
  title: string
  description: string
  keyPoints: string[]
  scriptureRefs: Array<{
    reference: string
    text: string
  }>
  significance: string
}

interface ViewPoint {
  name: string
  description: string
  distinctives: string[]
  proponents: Array<{
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

interface EschatologyContent {
  introduction: string
  definition: string
  doctrines: EschatologicalDoctrine[]
  viewpoints: ViewPoint[]
  events: Array<{
    event: string
    description: string
    interpretations: string[]
    scriptureRef: string
  }>
  contemporaryImplications: string[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Eschatology | Christian Doctrine of Last Things",
  description: "Explore Christian teachings about the end times, including different views on Christ's return, final judgment, and the new creation.",
  openGraph: {
    title: "Eschatology | Christian Doctrine of Last Things",
    description: "Comprehensive guide to Christian teachings about the end times",
    type: "website",
  },
}

const eschatologyContent: EschatologyContent = {
  introduction: `Eschatology, the theological study of last things, explores Christian teachings about the culmination of God's redemptive plan. This vital doctrine examines the future hope of believers, the return of Christ, and the ultimate destiny of creation.`,
  definition: `At its core, eschatology addresses the Christian understanding of history's goal and God's final purposes. It encompasses individual destiny after death, Christ's second coming, final judgment, and the new creation, integrating personal and cosmic dimensions of redemption.`,
  doctrines: [
    {
      title: "The Second Coming of Christ",
      description: "The personal, visible return of Christ to earth.",
      keyPoints: [
        "Personal and visible return",
        "Timing unknown but certain",
        "Universal significance",
        "Final triumph over evil"
      ],
      scriptureRefs: [
        {
          reference: "Acts 1:11",
          text: "This Jesus... will come in the same way as you saw him go into heaven"
        },
        {
          reference: "1 Thessalonians 4:16",
          text: "For the Lord himself will descend from heaven with a cry of command"
        }
      ],
      significance: "Central to Christian hope and the completion of God's redemptive plan."
    },
    {
      title: "Resurrection and Final Judgment",
      description: "The bodily resurrection and final judgment of all people.",
      keyPoints: [
        "Universal resurrection",
        "Christ as judge",
        "Perfect justice",
        "Eternal consequences"
      ],
      scriptureRefs: [
        {
          reference: "John 5:28-29",
          text: "All who are in the tombs will hear his voice and come out"
        },
        {
          reference: "Revelation 20:12",
          text: "And I saw the dead, great and small, standing before the throne, and books were opened"
        }
      ],
      significance: "Establishes ultimate accountability and the final triumph of God's justice."
    },
    {
      title: "New Creation",
      description: "The renewal and transformation of creation.",
      keyPoints: [
        "Cosmic renewal",
        "Physical and spiritual",
        "Perfect harmony",
        "Divine presence"
      ],
      scriptureRefs: [
        {
          reference: "Revelation 21:1",
          text: "Then I saw a new heaven and a new earth"
        },
        {
          reference: "2 Peter 3:13",
          text: "We are waiting for new heavens and a new earth in which righteousness dwells"
        }
      ],
      significance: "Reveals the ultimate goal of redemption: the renewal of all creation."
    }
  ],
  viewpoints: [
    {
      name: "Amillennialism",
      description: "Views the millennium as symbolic of Christ's current reign through the church.",
      distinctives: [
        "Symbolic interpretation of Revelation 20",
        "Christ's reign now through church",
        "Single future coming of Christ",
        "Emphasis on present kingdom"
      ],
      proponents: [
        {
          name: "Augustine",
          contribution: "Developed amillennial framework",
          dates: "354-430"
        },
        {
          name: "Anthony Hoekema",
          contribution: "Modern amillennial theology",
          dates: "1913-1988"
        }
      ]
    },
    {
      name: "Postmillennialism",
      description: "Expects gradual Christian influence leading to a millennium before Christ's return.",
      distinctives: [
        "Progressive kingdom growth",
        "Christian cultural influence",
        "Optimistic world view",
        "Christ returns after millennium"
      ],
      proponents: [
        {
          name: "Jonathan Edwards",
          contribution: "Historical postmillennialism",
          dates: "1703-1758"
        },
        {
          name: "Loraine Boettner",
          contribution: "Modern postmillennial thought",
          dates: "1901-1990"
        }
      ]
    },
    {
      name: "Premillennialism",
      description: "Anticipates Christ's return before a literal millennial kingdom.",
      distinctives: [
        "Literal thousand-year reign",
        "Christ's return initiates millennium",
        "Future tribulation period",
        "Israel's future role"
      ],
      proponents: [
        {
          name: "George Eldon Ladd",
          contribution: "Historic premillennialism",
          dates: "1911-1982"
        },
        {
          name: "John F. Walvoord",
          contribution: "Dispensational premillennialism",
          dates: "1910-2002"
        }
      ]
    }
  ],
  events: [
    {
      event: "The Tribulation",
      description: "A period of unprecedented trouble before Christ's return",
      interpretations: [
        "Pre-tribulation rapture view",
        "Mid-tribulation rapture view",
        "Post-tribulation rapture view",
        "Preterist interpretation"
      ],
      scriptureRef: "Matthew 24:21"
    },
    {
      event: "The Rapture",
      description: "The gathering of believers to Christ",
      interpretations: [
        "Meeting Christ in the air",
        "Transformation of living believers",
        "Resurrection of dead in Christ",
        "Timing debates"
      ],
      scriptureRef: "1 Thessalonians 4:17"
    },
    {
      event: "The Millennium",
      description: "The thousand-year reign of Christ",
      interpretations: [
        "Literal earthly reign",
        "Present spiritual reign",
        "Future golden age",
        "Symbolic period"
      ],
      scriptureRef: "Revelation 20:4-6"
    },
    {
      event: "Final State",
      description: "The eternal state of new creation",
      interpretations: [
        "New heavens and earth",
        "Eternal communion with God",
        "Physical resurrection",
        "Perfect justice and peace"
      ],
      scriptureRef: "Revelation 21-22"
    }
  ],
  contemporaryImplications: [
    "Environmental stewardship",
    "Social justice engagement",
    "Mission and evangelism",
    "Hope in suffering",
    "Ethical living",
    "Cultural engagement"
  ],
  resources: [
    {
      title: "The Bible and the Future",
      author: "Anthony Hoekema",
      url: "/resources/bible-future-hoekema",
      type: "Book",
      description: "Comprehensive amillennial perspective on eschatology.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0802808516"
    },
    {
      title: "The Blessed Hope",
      author: "George Eldon Ladd",
      url: "/resources/blessed-hope-ladd",
      type: "Book",
      description: "Historic premillennial approach to end times.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0802811541"
    },
    {
      title: "The Last Things",
      author: "G. C. Berkouwer",
      url: "/resources/last-things-berkouwer",
      type: "Book",
      description: "Reformed perspective on eschatological themes.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0802848123"
    }
  ]
}

export default function EschatologyPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Eschatology: The Doctrine of Last Things</h1>
        <p className="text-xl mb-4">{eschatologyContent.introduction}</p>
        <p className="text-lg mb-8">{eschatologyContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Key Doctrines</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {eschatologyContent.doctrines.map((doctrine, index) => (
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
        <h2 className="text-3xl font-bold mb-4">Millennial Viewpoints</h2>
        <div className="space-y-6">
          {eschatologyContent.viewpoints.map((viewpoint, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{viewpoint.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{viewpoint.description}</p>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Distinctive Features:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {viewpoint.distinctives.map((distinctive, idx) => (
                        <li key={idx}>{distinctive}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Proponents:</h4>
                    <div className="space-y-4">
                      {viewpoint.proponents.map((proponent, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 rounded-lg">
                          <p className="font-medium">{proponent.name}</p>
                          {proponent.dates && (
                            <p className="text-sm text-slate-600">{proponent.dates}</p>
                          )}
                          <p className="mt-2">{proponent.contribution}</p>
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
        <h2 className="text-3xl font-bold mb-4">End-Time Events</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {eschatologyContent.events.map((event, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{event.event}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{event.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Interpretations:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {event.interpretations.map((interpretation, idx) => (
                      <li key={idx}>{interpretation}</li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4 text-sm text-slate-600">{event.scriptureRef}</p>
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
              {eschatologyContent.contemporaryImplications.map((implication, index) => (
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
          {eschatologyContent.resources.map((resource, index) => (
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
          <Link href="/christianity/theology/christology" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Christology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore Christ's return and final victory.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/christianity/theology/soteriology" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Soteriology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand salvation's final completion.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/christianity/history" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Church History</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about historical eschatological views.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 