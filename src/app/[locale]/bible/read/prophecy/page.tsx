import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Biblical Prophecy and End Times | Bible Study Curriculum",
  description: "Learn biblical principles of prophecy and end times. Understand God's plan for the future and interpret biblical prophecies with wisdom and discernment.",
  keywords: "biblical prophecy, end times, eschatology, prophetic interpretation, biblical prophecy, christian eschatology",
  authors: [{ name: "Theological Research Team" }],
  openGraph: {
    title: "Biblical Prophecy and End Times | Bible Study Curriculum",
    description: "Learn biblical principles of prophecy and end times.",
    type: "article",
    url: 'http://localhost:3000/bible/read/prophecy',
    images: [
      {
        url: '/placeholder-bible-prophecy.jpg',
        width: 1200,
        height: 630,
        alt: 'Visual representation of biblical prophecy and end times',
      },
    ],
    siteName: "Bible Study Curriculum",
    locale: "en_US",
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
  },
}

export default function BiblicalProphecyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Biblical Prophecy and End Times</h1>
      
      <p className="text-lg mb-8">
        Biblical prophecy reveals God's plan for the future and His sovereignty over history. 
        This module explores principles for understanding prophecy and interpreting end times 
        events according to Scripture.
      </p>

      <Tabs defaultValue="prophecy" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="prophecy">Prophecy</TabsTrigger>
          <TabsTrigger value="endtimes">End Times</TabsTrigger>
          <TabsTrigger value="interpretation">Interpretation</TabsTrigger>
        </TabsList>

        <TabsContent value="prophecy" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Prophetic Theology</CardTitle>
                <CardDescription>Biblical Foundation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Prophetic theology is grounded in God's revelation of future events. 
                  These principles help us understand God's plan and purpose throughout 
                  history and into the future.
                </p>
                <p>
                  Understanding prophetic theology helps us interpret prophecy biblically.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prophetic Literature</CardTitle>
                <CardDescription>Biblical Texts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Prophetic literature contains God's messages about future events. 
                  Understanding these texts helps us grasp God's plan and purpose for 
                  humanity and creation.
                </p>
                <p>
                  Understanding prophetic literature helps us interpret God's Word.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="endtimes" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Eschatology</CardTitle>
                <CardDescription>End Times Study</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Eschatology involves studying the end times and final events. This 
                  understanding helps us prepare for Christ's return and live with 
                  eternal perspective.
                </p>
                <p>
                  Understanding eschatology helps us live with hope.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>End Times Events</CardTitle>
                <CardDescription>Biblical Timeline</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  End times events reveal God's plan for the culmination of history. 
                  Understanding these events helps us live with purpose and prepare 
                  for Christ's return.
                </p>
                <p>
                  Understanding end times events helps us live with purpose.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="interpretation" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Interpretive Methods</CardTitle>
                <CardDescription>Understanding Prophecy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Interpretive methods help us understand prophetic texts accurately. 
                  These methods guide us in discerning God's message and applying it 
                  to our lives.
                </p>
                <p>
                  Understanding interpretive methods helps us study prophecy effectively.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Practical Application</CardTitle>
                <CardDescription>Living with Hope</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Practical application involves living in light of prophecy. This 
                  practice helps us maintain hope and prepare for Christ's return 
                  while serving Him faithfully.
                </p>
                <p>
                  Understanding practical application helps us live with purpose.
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
              <CardTitle>Prophecy Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore biblical prophecies and their fulfillment throughout history.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>End Times Study</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn about end times events and their significance for believers.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interpretation Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access tools for studying and understanding biblical prophecy.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Study Resources</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Prophetic Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access resources for studying biblical prophecy and end times.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Study Guides</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore resources and tools for understanding prophecy and eschatology.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 