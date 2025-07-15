import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
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

interface Resource {
  title: string
  author?: string
  url: string
  type: string
  description: string
  affiliate?: boolean
  affiliateUrl?: string
}

interface TrinityContent {
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

export const metadata: Metadata = {
  title: "The Trinity | Christian Doctrine of God",
  description: "Explore the Christian doctrine of the Trinity - understanding God as three persons in one divine essence. Learn about its biblical foundations, historical development, and theological significance.",
  openGraph: {
    title: "The Trinity | Christian Doctrine of God",
    description: "Comprehensive guide to understanding the Christian doctrine of the Trinity",
    type: "website",
  },
}

const trinityContent: TrinityContent = {
  introduction: `The doctrine of the Trinity is central to Christian understanding of God's nature and being. It affirms that God is one divine essence who eternally exists as three distinct persons: Father, Son, and Holy Spirit. This profound mystery of faith has been the subject of deep theological reflection throughout Christian history.`,
  definition: `The Trinity expresses the Christian belief that there is one God who exists eternally in three persons - Father, Son, and Holy Spirit - each fully God, equal in power and glory, yet distinct in their personal relations. This is not a contradiction because God is one in essence and three in persons.`,
  scriptureReferences: [
    {
      reference: "Matthew 28:19",
      text: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.",
      explanation: "Jesus' command reveals the trinitarian formula in Christian baptism, showing the unity and equality of the three persons."
    },
    {
      reference: "2 Corinthians 13:14",
      text: "The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all.",
      explanation: "Paul's benediction demonstrates the distinct roles yet unified work of the Trinity in salvation."
    },
    {
      reference: "John 1:1-2",
      text: "In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God.",
      explanation: "This passage establishes both the deity and distinction of the Son (the Word) from the Father."
    }
  ],
  historicalDevelopment: [
    {
      period: "Early Church (1st-3rd centuries)",
      description: "The early church wrestled with expressing the biblical witness to God's unity and the deity of Christ and the Spirit.",
      keyFigures: [
        {
          name: "Tertullian",
          contribution: "First to use the term 'Trinity' (Latin: Trinitas) and developed key theological vocabulary",
          dates: "c. 155-220 AD"
        },
        {
          name: "Origen",
          contribution: "Developed understanding of eternal generation of the Son",
          dates: "c. 185-254 AD"
        }
      ],
      significance: "Laid the groundwork for later doctrinal formulations"
    },
    {
      period: "Nicene Era (4th century)",
      description: "Critical period of doctrinal development culminating in the Nicene Creed",
      keyFigures: [
        {
          name: "Athanasius",
          contribution: "Defended the full deity of Christ against Arianism",
          dates: "c. 296-373 AD"
        },
        {
          name: "Cappadocian Fathers",
          contribution: "Refined trinitarian terminology and concepts",
          dates: "4th century AD"
        }
      ],
      significance: "Established orthodox trinitarian doctrine that remains normative for Christianity"
    }
  ],
  theologicalConcepts: [
    {
      title: "One Essence, Three Persons",
      description: "God's unity of essence and trinity of persons explained through classical theological terms.",
      keyPoints: [
        "One divine essence (ousia) shared fully by three persons (hypostases)",
        "Each person is fully God, not a part or aspect of God",
        "The persons are eternally distinct but never separate",
        "Unity of essence ensures monotheism"
      ],
      scriptureRefs: ["Deuteronomy 6:4", "John 10:30", "John 14:16-17"],
      challenges: [
        "Avoiding modalism (persons as mere modes)",
        "Maintaining both unity and distinction",
        "Using analogies without oversimplifying"
      ]
    },
    {
      title: "Eternal Relations",
      description: "The distinctive relations between the divine persons that constitute their identity.",
      keyPoints: [
        "Father eternally begets the Son",
        "Spirit eternally proceeds from Father (and Son)",
        "Relations are essential to personal identity",
        "Relations are eternal and unchanging"
      ],
      scriptureRefs: ["John 3:16", "John 15:26", "Galatians 4:4-6"]
    }
  ],
  commonMisconceptions: [
    {
      misconception: "The Trinity means there are three Gods",
      correction: "There is only one God who exists as three persons sharing the same divine essence."
    },
    {
      misconception: "The persons of the Trinity are different modes or manifestations of God",
      correction: "The three persons are eternally distinct, not different forms or appearances of the same person."
    },
    {
      misconception: "Jesus is less divine than the Father",
      correction: "Each person of the Trinity is fully and equally God, sharing all divine attributes."
    }
  ],
  resources: [
    {
      title: "The Deep Things of God: How the Trinity Changes Everything",
      author: "Fred Sanders",
      url: "/resources/deep-things-of-god",
      type: "Book",
      description: "Accessible exploration of trinitarian theology and its practical implications.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1433556375"
    },
    {
      title: "Delighting in the Trinity",
      author: "Michael Reeves",
      url: "/resources/delighting-trinity",
      type: "Book",
      description: "Engaging introduction to trinitarian theology for general readers.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0830839836"
    },
    {
      title: "The Holy Trinity Study Bible",
      author: "Various",
      url: "/resources/trinity-study-bible",
      type: "Study Resource",
      description: "Bible with study notes focusing on trinitarian themes.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/B08XYZGHI"
    }
  ]
}

export default function TrinityPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">The Trinity: Understanding God's Nature</h1>
        <p className="text-xl mb-4">{trinityContent.introduction}</p>
        <p className="text-lg mb-8">{trinityContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Biblical Foundation</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trinityContent.scriptureReferences.map((reference, index) => (
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
          {trinityContent.historicalDevelopment.map((period, index) => (
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
          {trinityContent.theologicalConcepts.map((concept, index) => (
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
              {trinityContent.commonMisconceptions.map((item, index) => (
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
          {trinityContent.resources.map((resource, index) => (
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
          <Link href="/teachings/christianity/salvation" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Salvation</CardTitle>
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
                <p>Understand the church's relationship with the triune God.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/comparative/divine-human" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Divine-Human Relationship</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Compare trinitarian and other views of God's relationship with humanity.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Christianity Navigation</CardTitle>
          <CardDescription>
            Explore related topics in Christianity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Core Teachings</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/teachings/christianity/trinity" className="text-primary hover:underline">
                    The Trinity
                  </Link>
                </li>
                <li>
                  <Link href="/teachings/christianity/church" className="text-primary hover:underline">
                    The Church
                  </Link>
                </li>
                <li>
                  <Link href="/teachings/christianity/salvation" className="text-primary hover:underline">
                    Salvation
                  </Link>
                </li>
                <li>
                  <Link href="/blog/how-to-read-the-bible" className="text-primary hover:underline">
                    How to Read the Bible
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Theology</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/religion/christianity/theology/pneumatology" className="text-primary hover:underline">
                    Pneumatology
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/theology/christology" className="text-primary hover:underline">
                    Christology
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/theology/ecclesiology" className="text-primary hover:underline">
                    Ecclesiology
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/theology/soteriology" className="text-primary hover:underline">
                    Soteriology
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Traditions</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/religion/christianity/orthodox" className="text-primary hover:underline">
                    Orthodox Christianity
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/lutheran" className="text-primary hover:underline">
                    Lutheran Tradition
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/churches-of-christ" className="text-primary hover:underline">
                    Churches of Christ
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/assyrian-church" className="text-primary hover:underline">
                    Assyrian Church
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">History</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/religion/christianity/history/early-church" className="text-primary hover:underline">
                    Early Church History
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/history/reformation" className="text-primary hover:underline">
                    The Reformation
                  </Link>
                </li>
                <li>
                  <Link href="/blog/christian-creeds-and-confessions" className="text-primary hover:underline">
                    Christian Creeds
                  </Link>
                </li>
                <li>
                  <Link href="/blog/who-is-the-holy-spirit" className="text-primary hover:underline">
                    Who Is the Holy Spirit?
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 