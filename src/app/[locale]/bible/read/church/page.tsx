import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Biblical Church and Community | Bible Study Curriculum",
  description: "Learn biblical principles of church and community. Understand the nature, purpose, and practices of the church as God's community of believers.",
  keywords: "biblical church, christian community, church ministry, church leadership, church practices, community building",
  authors: [{ name: "Theological Research Team" }],
  openGraph: {
    title: "Biblical Church and Community | Bible Study Curriculum",
    description: "Learn biblical principles of church and community.",
    type: "article",
    url: 'http://localhost:3000/bible/read/church',
    images: [
      {
        url: '/placeholder-bible-church.jpg',
        width: 1200,
        height: 630,
        alt: 'Visual representation of biblical church and community',
      },
    ],
    siteName: "Bible Study Curriculum",
    locale: "en_US",
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
  },
}

export default function BiblicalChurchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Biblical Church and Community</h1>
      
      <p className="text-lg mb-8">
        The church is God's community of believers, called to live and serve together 
        in unity and love. This module explores biblical principles and practices for 
        building and participating in healthy church communities.
      </p>

      <Tabs defaultValue="church" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="church">Church</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="practices">Practices</TabsTrigger>
        </TabsList>

        <TabsContent value="church" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Church Theology</CardTitle>
                <CardDescription>Biblical Foundation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Church theology is grounded in God's design for His people. These 
                  principles help us understand the nature and purpose of the church 
                  as Christ's body.
                </p>
                <p>
                  Understanding church theology helps us build biblically.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Church Leadership</CardTitle>
                <CardDescription>Leading God's People</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Church leadership involves serving and guiding God's people. These 
                  roles help create environments where believers can grow and serve 
                  effectively.
                </p>
                <p>
                  Understanding church leadership helps us lead effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="community" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Community Building</CardTitle>
                <CardDescription>Building Together</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Community building involves creating meaningful connections. This 
                  process helps believers develop deep relationships and support one 
                  another in faith.
                </p>
                <p>
                  Understanding community building helps us connect effectively.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Life</CardTitle>
                <CardDescription>Living Together</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Community life involves sharing life together in Christ. This 
                  practice helps believers experience the fullness of Christian 
                  fellowship and support.
                </p>
                <p>
                  Understanding community life helps us live together effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="practices" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Worship Practices</CardTitle>
                <CardDescription>Worshipping Together</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Worship practices involve gathering to honor God together. These 
                  practices help believers express their devotion and experience 
                  God's presence.
                </p>
                <p>
                  Understanding worship practices helps us worship effectively.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Practices</CardTitle>
                <CardDescription>Serving Together</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Service practices involve working together for God's kingdom. These 
                  practices help believers demonstrate God's love and make a difference 
                  in the world.
                </p>
                <p>
                  Understanding service practices helps us serve effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Interactive Learning</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Church Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Evaluate your church's health and areas for growth.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Develop strategies for building strong church communities.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Practice Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access tools for church worship and service practices.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Study Resources</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Church Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access resources for understanding church theology and leadership.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Guides</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore resources and tools for building healthy church communities.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 