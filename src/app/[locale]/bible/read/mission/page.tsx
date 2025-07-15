import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Biblical Mission and Evangelism | Bible Study Curriculum",
  description: "Explore the biblical foundations of mission and evangelism. Learn how to share your faith effectively and participate in God's mission to reach the world.",
  keywords: "biblical mission, christian evangelism, gospel sharing, mission work, faith sharing, christian outreach",
  authors: [{ name: "Theological Research Team" }],
  openGraph: {
    title: "Biblical Mission and Evangelism | Bible Study Curriculum",
    description: "Explore the biblical foundations of mission and evangelism.",
    type: "article",
    url: 'http://localhost:3000/bible/read/mission',
    images: [
      {
        url: '/placeholder-bible-mission.jpg',
        width: 1200,
        height: 630,
        alt: 'Visual representation of biblical mission and evangelism',
      },
    ],
    siteName: "Bible Study Curriculum",
    locale: "en_US",
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
  },
}

export default function BiblicalMissionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Biblical Mission and Evangelism</h1>
      
      <p className="text-lg mb-8">
        God's mission is to redeem and restore all creation through the gospel of Jesus Christ. 
        This module explores how Scripture calls us to participate in this mission through 
        evangelism, discipleship, and compassionate service to the world.
      </p>

      <Tabs defaultValue="foundations" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="foundations">Mission Foundations</TabsTrigger>
          <TabsTrigger value="evangelism">Sharing the Gospel</TabsTrigger>
          <TabsTrigger value="participation">Mission Participation</TabsTrigger>
        </TabsList>

        <TabsContent value="foundations" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>God's Mission</CardTitle>
                <CardDescription>The Heart of Mission</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Mission begins with God's heart for the world. Scripture reveals God's desire 
                  to redeem all creation and restore humanity's relationship with Him through 
                  Jesus Christ.
                </p>
                <p>
                  Understanding God's mission helps us align our lives and ministry with His 
                  purposes for the world.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Great Commission</CardTitle>
                <CardDescription>Jesus' Mission Mandate</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Jesus' final command to make disciples of all nations shapes our understanding 
                  of mission. This involves evangelism, discipleship, and equipping others to 
                  follow Christ.
                </p>
                <p>
                  The Great Commission calls every believer to participate in God's mission to 
                  reach the world.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="evangelism" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Gospel Message</CardTitle>
                <CardDescription>Sharing Good News</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Effective evangelism begins with understanding and clearly communicating the 
                  gospel message. This includes God's love, human sin, Christ's sacrifice, and 
                  the call to repentance and faith.
                </p>
                <p>
                  A clear gospel message helps others understand God's offer of salvation and 
                  eternal life.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Evangelism Methods</CardTitle>
                <CardDescription>Sharing Faith Effectively</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Scripture provides various approaches to sharing the gospel, from personal 
                  testimony to systematic presentation. Each method can be effective when 
                  guided by the Holy Spirit and adapted to the context.
                </p>
                <p>
                  Understanding different evangelism methods helps us share our faith more 
                  effectively in various situations.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="participation" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Local Mission</CardTitle>
                <CardDescription>Serving Your Community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Mission begins in our local communities, where we can share the gospel and 
                  demonstrate God's love through practical service. This involves building 
                  relationships and meeting real needs.
                </p>
                <p>
                  Local mission provides opportunities to impact lives and transform communities 
                  with the gospel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Global Mission</CardTitle>
                <CardDescription>Reaching the World</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  God's mission extends to all nations and peoples. This involves supporting 
                  global mission work, praying for unreached people groups, and participating 
                  in cross-cultural ministry.
                </p>
                <p>
                  Global mission helps fulfill God's purpose of reaching every nation with the 
                  gospel of Jesus Christ.
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
              <CardTitle>Mission Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Evaluate your understanding of mission and identify ways to participate in God's work.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Evangelism Practice</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn and practice effective methods for sharing your faith in various contexts.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mission Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Develop strategies for participating in both local and global mission work.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Study Resources</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Mission Guides</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access resources for understanding and participating in God's mission.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Evangelism Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore practical tools and strategies for effective evangelism and faith sharing.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 