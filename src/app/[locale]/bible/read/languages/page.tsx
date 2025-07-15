import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Biblical Languages and Translation | Bible Study Curriculum",
  description: "Explore the original languages of Scripture and understand how translation choices impact our reading of the Bible. Learn about Hebrew, Greek, and translation principles.",
  keywords: "biblical languages, hebrew, greek, bible translation, biblical studies, original languages, translation principles",
  authors: [{ name: "Theological Research Team" }],
  openGraph: {
    title: "Biblical Languages and Translation | Bible Study Curriculum",
    description: "Explore the original languages of Scripture and understand how translation choices impact our reading of the Bible.",
    type: "article",
    url: 'http://localhost:3000/bible/read/languages',
    images: [
      {
        url: '/placeholder-bible-languages.jpg',
        width: 1200,
        height: 630,
        alt: 'Visual representation of biblical languages and translation',
      },
    ],
    siteName: "Bible Study Curriculum",
    locale: "en_US",
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
  },
}

export default function BiblicalLanguagesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Biblical Languages and Translation</h1>
      
      <p className="text-lg mb-8">
        Understanding the original languages of Scripture and translation principles helps us grasp the 
        nuances and depth of God's Word. This module explores Hebrew and Greek, translation approaches, 
        and how these impact our understanding of the Bible.
      </p>

      <Tabs defaultValue="languages" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="languages">Original Languages</TabsTrigger>
          <TabsTrigger value="translation">Translation Principles</TabsTrigger>
          <TabsTrigger value="impact">Understanding Impact</TabsTrigger>
        </TabsList>

        <TabsContent value="languages" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Biblical Hebrew</CardTitle>
                <CardDescription>The Language of the Old Testament</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Hebrew, the primary language of the Old Testament, carries unique characteristics that 
                  shape our understanding of God's revelation. Its verbal system, word order, and 
                  vocabulary choices often convey theological significance.
                </p>
                <p>
                  Understanding Hebrew's structure and nuances helps us appreciate the depth of meaning 
                  in the original text and how it influences our interpretation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Koine Greek</CardTitle>
                <CardDescription>The Language of the New Testament</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The New Testament was written in Koine Greek, the common language of the first-century 
                  Mediterranean world. Its precise grammar and rich vocabulary allow for nuanced 
                  expression of theological concepts.
                </p>
                <p>
                  The Greek text's grammatical structures and word choices often carry theological 
                  significance that may not be immediately apparent in translation.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="translation" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Translation Approaches</CardTitle>
                <CardDescription>Methods and Philosophies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Different translation approaches prioritize various aspects of the original text. 
                  Some focus on formal equivalence, maintaining the structure and form of the original, 
                  while others emphasize dynamic equivalence, conveying the meaning in natural language.
                </p>
                <p>
                  Understanding these approaches helps us choose appropriate translations for different 
                  study purposes and appreciate the strengths of various Bible versions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Translation Challenges</CardTitle>
                <CardDescription>Navigating Complexities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Translating Scripture involves numerous challenges, from cultural differences to 
                  linguistic nuances. Words and concepts may not have direct equivalents in English, 
                  requiring careful consideration of context and meaning.
                </p>
                <p>
                  These challenges highlight the importance of using multiple translations and 
                  consulting original language resources for deeper study.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="impact" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Interpretive Significance</CardTitle>
                <CardDescription>How Translation Affects Understanding</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Translation choices can significantly impact our understanding of Scripture. 
                  Different renderings of key terms or phrases may lead to varying interpretations 
                  of important theological concepts.
                </p>
                <p>
                  Awareness of these translation issues helps us make informed decisions about 
                  interpretation and avoid potential misunderstandings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Study Tools</CardTitle>
                <CardDescription>Resources for Deeper Understanding</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Various tools and resources can help us engage with the original languages, 
                  even without formal language training. Interlinear Bibles, word studies, and 
                  language commentaries provide valuable insights.
                </p>
                <p>
                  These resources enable us to appreciate the richness of the original text and 
                  make more informed interpretations of Scripture.
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
              <CardTitle>Word Study Explorer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Investigate key biblical terms in their original languages and see how they're used throughout Scripture.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Translation Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Compare different translations of important passages to understand how translation choices affect meaning.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Language Basics</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn fundamental concepts of Hebrew and Greek to enhance your Bible study.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Study Resources</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Language Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access dictionaries, lexicons, and other resources for studying biblical languages.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Translation Guides</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore resources that explain different translation approaches and help you choose appropriate Bible versions.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 