import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Christology | Christianity',
  description: 'The comprehensive study of Jesus Christ, his divine and human nature, and his role in salvation history',
  keywords: 'Christianity, christology, Jesus Christ, incarnation, hypostatic union, divine nature, human nature, salvation',
  openGraph: {
    title: 'Christology | Christianity',
    description: 'The comprehensive study of Jesus Christ, his divine and human nature, and his role in salvation history',
    images: [{ url: '/images/christianity-christology.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function ChristianityChristologyPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Christology</h1>
        <p className="text-xl text-muted-foreground">
          The comprehensive study of Jesus Christ, his divine and human nature, and his role in salvation history
        </p>
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Christology in Christianity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Introduction</h3>
            <p className="text-muted-foreground leading-relaxed">
              Christology is the theological study of the person, nature, and role of Jesus Christ in Christian faith and doctrine. 
              It explores fundamental questions about Christ's identity, his relationship to God the Father, his mission of salvation, 
              and his ongoing significance for the church and world. At its core, Christology examines the biblical, historical, 
              and theological understanding of Jesus Christ as fully God and fully human, the second person of the Trinity, 
              and the unique mediator between God and humanity.
            </p>
          </section>

          <Separator />

          <section className="space-y-6">
            <h3 className="text-xl font-semibold">Core Doctrines</h3>
            
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">The Incarnation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    The doctrine that the eternal Son of God took on human nature and became flesh in the person of Jesus of Nazareth.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Points:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Full deity and full humanity united in one person</li>
                      <li>Born of the Virgin Mary through the Holy Spirit</li>
                      <li>Maintains divine attributes while taking on human nature</li>
                      <li>Purpose of revealing God and accomplishing salvation</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Scripture References:</h4>
                    <div className="text-sm space-y-1">
                      <p><strong>John 1:14:</strong> "The Word became flesh and dwelt among us"</p>
                      <p><strong>Philippians 2:6-7:</strong> "Who, being in very nature God... made himself nothing, taking the form of a servant"</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The Incarnation enables Christ to be the perfect mediator between God and humanity, capable of both representing 
                    God to humans and humans to God.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">The Hypostatic Union</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    The theological concept explaining how divine and human natures are united in the one person of Jesus Christ.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Points:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Two natures (divine and human) in one person</li>
                      <li>Neither nature compromises the other</li>
                      <li>Complete unity without mixture or confusion</li>
                      <li>Eternal union beginning at incarnation</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Scripture References:</h4>
                    <div className="text-sm space-y-1">
                      <p><strong>Colossians 2:9:</strong> "For in Christ all the fullness of the Deity lives in bodily form"</p>
                      <p><strong>Hebrews 2:14:</strong> "Since the children have flesh and blood, he too shared in their humanity"</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This doctrine preserves both Christ's full deity and full humanity while explaining their relationship in his person.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Christ's Three Offices</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    The traditional understanding of Christ's roles as Prophet, Priest, and King.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">The Three Offices:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li><strong>Prophet:</strong> Reveals God's truth and will</li>
                      <li><strong>Priest:</strong> Mediates between God and humanity</li>
                      <li><strong>King:</strong> Rules over creation and the church</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Scripture References:</h4>
                    <div className="text-sm space-y-1">
                      <p><strong>Hebrews 1:1-2:</strong> "God... has spoken to us by his Son"</p>
                      <p><strong>Hebrews 4:14:</strong> "We have a great high priest who has ascended into heaven"</p>
                      <p><strong>Revelation 19:16:</strong> "King of kings and Lord of lords"</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    These offices explain Christ's comprehensive work in revelation, redemption, and rule.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">The Virgin Birth</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    The miraculous conception of Jesus by the Holy Spirit in the womb of the Virgin Mary.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Significance:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Demonstrates divine intervention in human history</li>
                      <li>Ensures Christ's sinless nature</li>
                      <li>Fulfills Old Testament prophecies</li>
                      <li>Establishes Christ's unique identity</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Scripture References:</h4>
                    <div className="text-sm space-y-1">
                      <p><strong>Matthew 1:18-25:</strong> Joseph's dream and the angel's explanation</p>
                      <p><strong>Luke 1:26-38:</strong> The Annunciation to Mary</p>
                      <p><strong>Isaiah 7:14:</strong> "The virgin will conceive and give birth to a son"</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The virgin birth affirms both Christ's divine origin and his genuine humanity.
                  </p>
                </CardContent>
              </Card>

            </div>
          </section>

          <Separator />

          <section className="space-y-6">
            <h3 className="text-xl font-semibold">Historical Development</h3>
            
            <div className="space-y-6">
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">The Arian Controversy (4th Century)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Debate over whether Christ was fully divine or a created being.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-medium">Key Figures:</h4>
                      <div className="text-sm space-y-2">
                        <p><strong>Arius (c. 256-336):</strong> Argued Christ was the first created being</p>
                        <p><strong>Athanasius (c. 296-373):</strong> Defended Christ's full deity</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Resolution:</h4>
                      <p className="text-sm">
                        Council of Nicaea (325) affirmed Christ's full deity and eternal generation from the Father.
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Established the orthodox understanding of Christ's divine nature and led to the Nicene Creed.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">The Chalcedonian Definition (5th Century)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Debate over how divine and human natures relate in Christ.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-medium">Key Figures:</h4>
                      <div className="text-sm space-y-2">
                        <p><strong>Cyril of Alexandria (c. 376-444):</strong> Emphasized unity of Christ's person</p>
                        <p><strong>Leo I (c. 400-461):</strong> Balanced unity and distinction of natures</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Resolution:</h4>
                      <p className="text-sm">
                        Council of Chalcedon (451) defined Christ as one person in two natures.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Chalcedonian Formula:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>One person in two natures</li>
                      <li>Natures united without confusion</li>
                      <li>Each nature retains properties</li>
                      <li>Unity of person maintained</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Provided the classical definition of Christ's two natures that remains normative for most Christian traditions.
                  </p>
                </CardContent>
              </Card>

            </div>
          </section>

          <Separator />

          <section className="space-y-6">
            <h3 className="text-xl font-semibold">Contemporary Implications</h3>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Interfaith Dialogue</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Christ's unique role in interfaith dialogue, emphasizing both his divine nature and his identification with humanity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Human Dignity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The relevance of incarnation for human dignity, as God's taking on human form affirms the value of human nature.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Social Justice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Christological basis for social justice, as Christ's identification with the poor and marginalized calls for action.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Environmental Stewardship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Environmental stewardship based on Christ's lordship over creation and his incarnation in the material world.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Digital Age Worship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Christ's presence in digital age worship, maintaining the incarnational principle in virtual spaces.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Theological Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The importance of Christological education in forming Christian identity and understanding.
                  </p>
                </CardContent>
              </Card>

            </div>
          </section>

          <Separator />

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Further Exploration</h3>
            <p className="text-muted-foreground">
              This content is part of our comprehensive guide to Christianity. For more detailed information, explore the related sections:
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Link href={`/${params.locale}/christianity/theology`} className="text-blue-600 hover:underline">
                Christian Theology
              </Link>
              <Link href={`/${params.locale}/christianity/history`} className="text-blue-600 hover:underline">
                Church History
              </Link>
              <Link href="/blog-backup/who-is-jesus-christ" className="text-blue-600 hover:underline">
                Who is Jesus Christ?
              </Link>
              <Link href="/blog-backup/the-holy-trinity" className="text-blue-600 hover:underline">
                The Holy Trinity
              </Link>
              <Link href="/en/sacred-texts/bible" className="text-blue-600 hover:underline">
                Bible Study
              </Link>
              <Link href="/en/studies/philosophy" className="text-blue-600 hover:underline">
                Christian Philosophy
              </Link>
            </div>
          </section>

        </CardContent>
      </Card>
    </div>
  )
}