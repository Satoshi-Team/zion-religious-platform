import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Biblical Application | Bible Study Curriculum",
  description: "Learn how to apply biblical principles to daily life. Transform knowledge into practical wisdom and meaningful action.",
  keywords: "biblical application, practical faith, spiritual growth, bible study, christian living, biblical wisdom",
  authors: [{ name: "Theological Research Team" }],
  openGraph: {
    title: "Biblical Application | Bible Study Curriculum",
    description: "Learn how to apply biblical principles to daily life.",
    type: "article",
    url: 'http://localhost:3000/bible/read/application',
    images: [
      {
        url: '/placeholder-bible-application.jpg',
        width: 1200,
        height: 630,
        alt: 'Visual representation of biblical application in daily life',
      },
    ],
    siteName: "Bible Study Curriculum",
    locale: "en_US",
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
  },
}

export default function BiblicalApplicationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Biblical Application</h1>
      
      <p className="text-lg mb-8">
        The ultimate goal of Bible study is transformation. This module explores how to bridge the gap between 
        understanding Scripture and living it out in daily life. Through practical examples and interactive exercises, 
        you'll learn to apply biblical wisdom to contemporary situations.
      </p>

      <Tabs defaultValue="principles" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="principles">Core Principles</TabsTrigger>
          <TabsTrigger value="methods">Application Methods</TabsTrigger>
          <TabsTrigger value="practice">Practical Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="principles" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>From Knowledge to Action</CardTitle>
                <CardDescription>Understanding the Process of Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Biblical application begins with understanding the text's original meaning and intent. 
                  We must bridge the gap between the ancient world and our contemporary context, 
                  identifying timeless principles that can guide our lives today.
                </p>
                <p>
                  The process involves careful consideration of how biblical truths can be lived out 
                  in our specific circumstances while remaining faithful to the original message.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Common Challenges</CardTitle>
                <CardDescription>Navigating Application Difficulties</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Many believers struggle with applying Scripture to modern life. Cultural differences, 
                  changing social contexts, and complex contemporary issues can make application challenging.
                </p>
                <p>
                  Understanding these challenges helps us develop more effective approaches to applying 
                  biblical wisdom in our daily lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="methods" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Contextual Application</CardTitle>
                <CardDescription>Bridging Ancient and Modern Worlds</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Effective application requires understanding both the original context and our modern situation. 
                  We must identify the timeless principles within culturally specific instructions.
                </p>
                <p>
                  This approach helps us apply biblical wisdom in ways that are both faithful to the text 
                  and relevant to contemporary life.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personal Transformation</CardTitle>
                <CardDescription>Growing Through Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Biblical application is not just about external actions but internal transformation. 
                  The Holy Spirit works through Scripture to change our hearts and minds.
                </p>
                <p>
                  This transformation process involves regular reflection, prayer, and intentional 
                  practice of biblical principles.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="practice" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Daily Life Applications</CardTitle>
                <CardDescription>Practical Examples</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Biblical wisdom can be applied to every aspect of life, from personal relationships 
                  to professional decisions. Through real-world examples, we'll explore how to bring 
                  Scripture into daily situations.
                </p>
                <p>
                  These practical applications demonstrate how biblical principles can guide our 
                  choices and actions in contemporary contexts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Impact</CardTitle>
                <CardDescription>Applying Scripture Together</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Biblical application extends beyond individual practice to community transformation. 
                  Together, we can apply Scripture to create positive change in our communities.
                </p>
                <p>
                  This collaborative approach to application helps us live out biblical principles 
                  in ways that benefit others and glorify God.
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
              <CardTitle>Scenario Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore real-life situations and learn how to apply biblical principles to them effectively.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reflection Journal</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Document your journey of applying Scripture to daily life and track your spiritual growth.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Group Discussion</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Engage with others to explore different perspectives on applying biblical wisdom.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Growth Areas</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Personal Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Focus on applying biblical principles to personal growth, character development, and spiritual maturity.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn how to apply Scripture to build stronger relationships and serve others effectively.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 