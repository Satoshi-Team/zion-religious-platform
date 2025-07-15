import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ChurchDoctrine {
  title: string
  description: string
  keyPoints: string[]
  scriptureRefs: Array<{
    reference: string
    text: string
  }>
  significance: string
}

interface ChurchTradition {
  name: string
  description: string
  distinctives: string[]
  practices: string[]
  ecclesialStructure: string
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

interface EcclesiologyContent {
  introduction: string
  definition: string
  doctrines: ChurchDoctrine[]
  traditions: ChurchTradition[]
  marks: Array<{
    mark: string
    description: string
    scriptureRef: string
  }>
  contemporaryImplications: string[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Ecclesiology | Christian Doctrine of the Church",
  description: "Explore Christian teachings about the nature, purpose, and mission of the Church, including different traditions, marks of the church, and contemporary implications.",
  openGraph: {
    title: "Ecclesiology | Christian Doctrine of the Church",
    description: "Comprehensive guide to Christian teachings about the Church",
    type: "website",
  },
}

const ecclesiologyContent: EcclesiologyContent = {
  introduction: `Ecclesiology, the theological study of the church, examines the nature, purpose, and mission of the Christian community. This foundational doctrine explores how Christ's body functions in the world, its essential characteristics, and its role in God's redemptive plan.`,
  definition: `At its core, ecclesiology understands the church as both a divine and human reality—the mystical body of Christ and a historical institution. It encompasses the church's origin, attributes, organization, practices, and mission in the world.`,
  doctrines: [
    {
      title: "The Church as Christ's Body",
      description: "The understanding of the church as the living body of Christ in the world.",
      keyPoints: [
        "Organic unity with Christ as head",
        "Interdependence of members",
        "Diversity of gifts and functions",
        "Universal and local expressions"
      ],
      scriptureRefs: [
        {
          reference: "1 Corinthians 12:27",
          text: "Now you are the body of Christ, and each one of you is a part of it"
        },
        {
          reference: "Ephesians 1:22-23",
          text: "And God placed all things under his feet and appointed him to be head over everything for the church, which is his body"
        }
      ],
      significance: "This doctrine emphasizes both the church's intimate connection to Christ and the essential unity and diversity of its members."
    },
    {
      title: "The Church's Mission",
      description: "The divine commission and purpose of the church in the world.",
      keyPoints: [
        "Proclamation of the gospel",
        "Making disciples of all nations",
        "Worship and fellowship",
        "Service and social justice"
      ],
      scriptureRefs: [
        {
          reference: "Matthew 28:19-20",
          text: "Go and make disciples of all nations, baptizing them... and teaching them to obey everything I have commanded"
        }
      ],
      significance: "Defines the church's essential tasks and purpose in fulfilling God's mission in the world."
    },
    {
      title: "Church Authority",
      description: "The nature and limits of ecclesiastical authority.",
      keyPoints: [
        "Christ's delegated authority",
        "Role of Scripture and tradition",
        "Church governance",
        "Ministerial offices"
      ],
      scriptureRefs: [
        {
          reference: "Matthew 16:19",
          text: "I will give you the keys of the kingdom of heaven"
        }
      ],
      significance: "Addresses how the church exercises authority while remaining under Christ's lordship."
    }
  ],
  traditions: [
    {
      name: "Roman Catholic",
      description: "Emphasizes apostolic succession, sacramental theology, and papal authority.",
      distinctives: [
        "Papal infallibility",
        "Seven sacraments",
        "Magisterial authority",
        "Marian doctrines"
      ],
      practices: [
        "Mass as central worship",
        "Confession to priests",
        "Liturgical calendar",
        "Veneration of saints"
      ],
      ecclesialStructure: "Hierarchical with Pope, bishops, priests, and deacons",
      majorFigures: [
        {
          name: "Augustine",
          contribution: "Developed ecclesiology and sacramental theology",
          dates: "354-430"
        },
        {
          name: "Thomas Aquinas",
          contribution: "Systematic theology of church and sacraments",
          dates: "1225-1274"
        }
      ]
    },
    {
      name: "Eastern Orthodox",
      description: "Emphasizes divine liturgy, theosis, and conciliar authority.",
      distinctives: [
        "Conciliar authority",
        "Divine liturgy",
        "Theosis (deification)",
        "Icon veneration"
      ],
      practices: [
        "Divine Liturgy",
        "Jesus Prayer",
        "Fasting traditions",
        "Icon veneration"
      ],
      ecclesialStructure: "Autocephalous churches with patriarchs and bishops",
      majorFigures: [
        {
          name: "John Chrysostom",
          contribution: "Liturgical and pastoral theology",
          dates: "347-407"
        },
        {
          name: "Gregory Palamas",
          contribution: "Theology of divine energies",
          dates: "1296-1359"
        }
      ]
    },
    {
      name: "Protestant",
      description: "Emphasizes biblical authority, justification by faith, and priesthood of believers.",
      distinctives: [
        "Sola Scriptura",
        "Priesthood of believers",
        "Two sacraments",
        "Justification by faith"
      ],
      practices: [
        "Word-centered worship",
        "Congregational singing",
        "Bible study",
        "Personal prayer"
      ],
      ecclesialStructure: "Various forms (episcopal, presbyterian, congregational)",
      majorFigures: [
        {
          name: "Martin Luther",
          contribution: "Reformed understanding of church and ministry",
          dates: "1483-1546"
        },
        {
          name: "John Calvin",
          contribution: "Systematic Protestant ecclesiology",
          dates: "1509-1564"
        }
      ]
    }
  ],
  marks: [
    {
      mark: "One",
      description: "The essential unity of the church in Christ",
      scriptureRef: "Ephesians 4:4-6"
    },
    {
      mark: "Holy",
      description: "Set apart for God's purposes and being sanctified",
      scriptureRef: "1 Peter 2:9"
    },
    {
      mark: "Catholic",
      description: "Universal scope and fullness of faith",
      scriptureRef: "Colossians 1:5-6"
    },
    {
      mark: "Apostolic",
      description: "Continuity with apostolic teaching and mission",
      scriptureRef: "Ephesians 2:20"
    }
  ],
  contemporaryImplications: [
    "Ecumenical dialogue and unity",
    "Digital church and virtual community",
    "Cultural engagement and contextualization",
    "Social justice and advocacy",
    "Environmental stewardship",
    "Interfaith relations"
  ],
  resources: [
    {
      title: "The Church",
      author: "Edmund P. Clowney",
      url: "/resources/church-clowney",
      type: "Book",
      description: "Biblical theology of the church and its mission.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0830815341"
    },
    {
      title: "Images of the Church",
      author: "Paul S. Minear",
      url: "/resources/church-images",
      type: "Book",
      description: "Study of biblical images and metaphors for the church.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0664225799"
    },
    {
      title: "The Church in the Power of the Spirit",
      author: "Jürgen Moltmann",
      url: "/resources/church-spirit",
      type: "Book",
      description: "Contemporary ecclesiology focusing on mission and hope.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0800614119"
    }
  ]
}

export default function EcclesiologyPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Ecclesiology: The Doctrine of the Church</h1>
        <p className="text-xl mb-4">{ecclesiologyContent.introduction}</p>
        <p className="text-lg mb-8">{ecclesiologyContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Key Doctrines</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {ecclesiologyContent.doctrines.map((doctrine, index) => (
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
        <h2 className="text-3xl font-bold mb-4">Church Traditions</h2>
        <div className="space-y-6">
          {ecclesiologyContent.traditions.map((tradition, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{tradition.name}</CardTitle>
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
                    <h4 className="font-semibold mb-2">Key Practices:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {tradition.practices.map((practice, idx) => (
                        <li key={idx}>{practice}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Church Structure:</h4>
                  <p className="text-slate-600">{tradition.ecclesialStructure}</p>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Major Figures:</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    {tradition.majorFigures.map((figure, idx) => (
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
        <h2 className="text-3xl font-bold mb-4">Marks of the Church</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {ecclesiologyContent.marks.map((mark, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{mark.mark}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">{mark.description}</p>
                <p className="text-sm text-slate-600">{mark.scriptureRef}</p>
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
              {ecclesiologyContent.contemporaryImplications.map((implication, index) => (
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
          {ecclesiologyContent.resources.map((resource, index) => (
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
          <Link href="/religion/christianity/theology/christology" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Christology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore Christ as head of the Church.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/theology/soteriology" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Soteriology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand salvation in the Church context.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/theology/pneumatology" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Pneumatology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the Spirit's work in the Church.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 