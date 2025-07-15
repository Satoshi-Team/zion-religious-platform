import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Biblical Worldview and Culture | Bible Study Curriculum",
  description: "Develop a biblical perspective for understanding and engaging with contemporary culture. Learn how to view the world through God's lens.",
  keywords: "biblical worldview, christian culture, cultural engagement, worldview formation, christian perspective, cultural analysis",
  authors: [{ name: "Theological Research Team" }],
  openGraph: {
    title: "Biblical Worldview and Culture | Bible Study Curriculum",
    description: "Develop a biblical perspective for understanding and engaging with contemporary culture.",
    type: "article",
    url: 'http://localhost:3000/bible/read/worldview',
    images: [
      {
        url: '/placeholder-bible-worldview.jpg',
        width: 1200,
        height: 630,
        alt: 'Visual representation of biblical worldview and cultural engagement',
      },
    ],
    siteName: "Bible Study Curriculum",
    locale: "en_US",
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
  },
}

export default function BiblicalWorldviewPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Biblical Worldview and Culture</h1>
      
      <p className="text-lg mb-8">
        A biblical worldview provides a framework for understanding reality through God's 
        perspective. This module explores how to develop and apply this worldview in engaging 
        with contemporary culture and its various expressions.
      </p>

      <Tabs defaultValue="foundations" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="foundations">Worldview Foundations</TabsTrigger>
          <TabsTrigger value="culture">Cultural Analysis</TabsTrigger>
          <TabsTrigger value="engagement">Cultural Engagement</TabsTrigger>
        </TabsList>

        <TabsContent value="foundations" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Biblical Lens</CardTitle>
                <CardDescription>God's Perspective</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Scripture provides a comprehensive view of reality, from creation to 
                  redemption. This biblical lens shapes how we understand God, humanity, 
                  and the world.
                </p>
                <p>
                  Developing a biblical lens helps us interpret life and culture through 
                  God's truth.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Worldview Formation</CardTitle>
                <CardDescription>Building Perspective</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A biblical worldview is formed through intentional study of Scripture, 
                  prayer, and community. This process shapes our values, beliefs, and 
                  actions.
                </p>
                <p>
                  Understanding worldview formation helps us grow in our faith and 
                  cultural engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="culture" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Cultural Trends</CardTitle>
                <CardDescription>Understanding Change</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Culture constantly evolves, presenting new ideas and challenges. Biblical 
                  worldview helps us analyze these trends and their implications for faith 
                  and life.
                </p>
                <p>
                  Understanding cultural trends helps us engage thoughtfully with 
                  contemporary issues.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cultural Expressions</CardTitle>
                <CardDescription>Art and Media</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Culture expresses itself through various forms, from art to media. A 
                  biblical worldview helps us appreciate and evaluate these expressions.
                </p>
                <p>
                  Understanding cultural expressions helps us engage with creativity and 
                  communication.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="engagement" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Faithful Presence</CardTitle>
                <CardDescription>Being in Culture</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Christians are called to be present in culture while maintaining biblical 
                  distinctiveness. This involves both participation and prophetic witness.
                </p>
                <p>
                  Understanding faithful presence helps us engage culture with wisdom and 
                  integrity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cultural Renewal</CardTitle>
                <CardDescription>Transforming Culture</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Biblical worldview calls us to participate in God's work of cultural 
                  renewal. This involves both critique and creative contribution.
                </p>
                <p>
                  Understanding cultural renewal helps us be agents of positive change in 
                  our communities.
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
              <CardTitle>Worldview Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Evaluate your understanding of biblical worldview and identify areas for growth in cultural engagement.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cultural Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn and practice analyzing cultural trends and expressions through a biblical lens.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Engagement Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Develop a personal approach for engaging with culture in ways that honor God and serve others.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Study Resources</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Worldview Guides</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access resources for developing and applying a biblical worldview in various contexts.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cultural Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore resources and tools for analyzing and engaging with contemporary culture.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 