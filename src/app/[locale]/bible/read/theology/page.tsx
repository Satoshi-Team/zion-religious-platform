import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Biblical Theology | Bible Study Curriculum",
  description: "Explore the major theological themes and concepts that run throughout Scripture. Understand how God's story unfolds from Genesis to Revelation.",
  keywords: "biblical theology, theological themes, bible study, systematic theology, biblical concepts, theological framework",
  authors: [{ name: "Theological Research Team" }],
  openGraph: {
    title: "Biblical Theology | Bible Study Curriculum",
    description: "Explore the major theological themes and concepts that run throughout Scripture.",
    type: "article",
    url: 'http://localhost:3000/bible/read/theology',
    images: [
      {
        url: '/placeholder-bible-theology.jpg',
        width: 1200,
        height: 630,
        alt: 'Visual representation of biblical theology and themes',
      },
    ],
    siteName: "Bible Study Curriculum",
    locale: "en_US",
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
  },
}

export default function BiblicalTheologyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Biblical Theology</h1>
      
      <p className="text-lg mb-8">
        Biblical theology explores the grand narrative of Scripture and the theological themes that weave 
        throughout God's story. This module helps you understand how different parts of the Bible connect 
        and how God's plan unfolds from creation to new creation.
      </p>

      <Tabs defaultValue="themes" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="themes">Major Themes</TabsTrigger>
          <TabsTrigger value="narrative">Biblical Narrative</TabsTrigger>
          <TabsTrigger value="concepts">Key Concepts</TabsTrigger>
        </TabsList>

        <TabsContent value="themes" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>God's Character and Nature</CardTitle>
                <CardDescription>Understanding Who God Is</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Throughout Scripture, we discover the multifaceted nature of God. He reveals Himself as 
                  creator, sustainer, redeemer, and judge. His attributes of love, justice, mercy, and 
                  holiness are consistently displayed across both Testaments.
                </p>
                <p>
                  The Bible presents God as both transcendent and immanent, sovereign over all creation 
                  yet intimately involved in human history and personal lives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Humanity and Sin</CardTitle>
                <CardDescription>The Human Condition</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The Bible presents a realistic view of humanity, created in God's image yet fallen into 
                  sin. This tension between our original design and our current state runs throughout 
                  Scripture, highlighting our need for redemption.
                </p>
                <p>
                  Understanding this theological framework helps us grasp the significance of Christ's 
                  work and our ongoing need for grace.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="narrative" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>The Story of Redemption</CardTitle>
                <CardDescription>God's Plan Unfolds</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The Bible tells one unified story of God's redemptive work. From the promise in Genesis 
                  to its fulfillment in Revelation, we see God's consistent purpose to restore creation 
                  and reconcile humanity to Himself.
                </p>
                <p>
                  This grand narrative helps us understand how each part of Scripture contributes to the 
                  whole, revealing God's character and purposes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Covenant Relationships</CardTitle>
                <CardDescription>God's Faithful Promises</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Throughout Scripture, God establishes and maintains covenant relationships with His people. 
                  These covenants reveal His faithfulness and provide the framework for understanding 
                  His ongoing work in the world.
                </p>
                <p>
                  The new covenant in Christ fulfills and transforms the previous covenants, bringing 
                  God's promises to their ultimate expression.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="concepts" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Kingdom of God</CardTitle>
                <CardDescription>God's Reign and Rule</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The concept of God's kingdom runs throughout Scripture, from the creation mandate to 
                  the new heavens and earth. It represents God's sovereign rule and His purposes for 
                  creation.
                </p>
                <p>
                  Jesus' ministry centered on proclaiming and demonstrating the kingdom, showing how 
                  God's rule brings transformation to individuals and communities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Salvation and Grace</CardTitle>
                <CardDescription>God's Saving Work</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The Bible presents salvation as God's gracious work from beginning to end. It involves 
                  justification, sanctification, and glorification, all made possible through Christ's 
                  life, death, and resurrection.
                </p>
                <p>
                  Understanding salvation helps us appreciate the depth of God's love and the 
                  comprehensive nature of His redemptive work.
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
              <CardTitle>Theme Tracker</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Follow theological themes throughout Scripture and see how they develop and connect.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Timeline Explorer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Visualize how God's story unfolds through different periods of biblical history.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Concept Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Discover how different theological concepts relate to and inform each other.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Study Resources</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Biblical Theology Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access resources and tools to help you study and understand biblical theology more deeply.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Further Reading</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore recommended books and articles for deeper study of biblical theology.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 