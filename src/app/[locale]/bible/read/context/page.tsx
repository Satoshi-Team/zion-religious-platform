import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Biblical Context and Historical Background | Bible Study Curriculum",
  description: "Explore the historical, cultural, and geographical context of the Bible. Understand the ancient world that shaped Scripture and its interpretation.",
  keywords: "biblical history, ancient near east, biblical archaeology, cultural context, historical background, bible study, biblical interpretation",
  authors: [{ name: "Theological Research Team" }],
  openGraph: {
    title: "Biblical Context and Historical Background | Bible Study Curriculum",
    description: "Explore the historical, cultural, and geographical context of the Bible.",
    type: "article",
    url: 'http://localhost:3000/bible/read/context',
    images: [
      {
        url: '/placeholder-bible-context.jpg',
        width: 1200,
        height: 630,
        alt: 'Visual representation of biblical historical context',
      },
    ],
    siteName: "Bible Study Curriculum",
    locale: "en_US",
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
  },
}

export default function BiblicalContextPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Biblical Context and Historical Background</h1>
      
      <p className="text-lg mb-8">
        Understanding the historical and cultural context of the Bible is essential for accurate interpretation. 
        This module explores the ancient world that shaped Scripture and its message.
      </p>

      <Tabs defaultValue="historical" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="historical">Historical Context</TabsTrigger>
          <TabsTrigger value="cultural">Cultural Context</TabsTrigger>
          <TabsTrigger value="geographical">Geographical Context</TabsTrigger>
        </TabsList>

        <TabsContent value="historical" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Ancient Near East</CardTitle>
                <CardDescription>Major Empires and Powers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Egyptian Empire</li>
                  <li>Assyrian Empire</li>
                  <li>Babylonian Empire</li>
                  <li>Persian Empire</li>
                  <li>Greek Empire</li>
                  <li>Roman Empire</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Biblical Timeline</CardTitle>
                <CardDescription>Key Historical Periods</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Patriarchal Period (2000-1500 BC)</li>
                  <li>Exodus and Conquest (1500-1200 BC)</li>
                  <li>United Kingdom (1050-930 BC)</li>
                  <li>Divided Kingdom (930-586 BC)</li>
                  <li>Exile and Return (586-400 BC)</li>
                  <li>Intertestamental Period (400 BC-AD 1)</li>
                  <li>New Testament Period (AD 1-100)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="cultural" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Social Structures</CardTitle>
                <CardDescription>Ancient Society and Customs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Family and Kinship</li>
                  <li>Social Classes</li>
                  <li>Gender Roles</li>
                  <li>Religious Practices</li>
                  <li>Economic Systems</li>
                  <li>Political Organization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cultural Practices</CardTitle>
                <CardDescription>Daily Life and Customs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Marriage and Family</li>
                  <li>Food and Agriculture</li>
                  <li>Clothing and Appearance</li>
                  <li>Housing and Architecture</li>
                  <li>Education and Literacy</li>
                  <li>Entertainment and Leisure</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="geographical" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Key Regions</CardTitle>
                <CardDescription>Geographical Areas</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Mesopotamia</li>
                  <li>Egypt</li>
                  <li>Canaan/Israel</li>
                  <li>Syria</li>
                  <li>Asia Minor</li>
                  <li>Mediterranean World</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Important Cities</CardTitle>
                <CardDescription>Urban Centers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Jerusalem</li>
                  <li>Babylon</li>
                  <li>Rome</li>
                  <li>Antioch</li>
                  <li>Corinth</li>
                  <li>Ephesus</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Archaeological Discoveries</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Dead Sea Scrolls</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ancient manuscripts that provide insight into biblical texts and Jewish life during the Second Temple period.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tel Dan Stele</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Archaeological evidence mentioning the "House of David," confirming the historical existence of King David.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Caiaphas Ossuary</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Burial box of the high priest who presided over Jesus' trial, providing historical context for the New Testament.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Interactive Learning</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Timeline Explorer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Interactive timeline showing the relationship between biblical events and world history.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Map Studies</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore biblical locations and their significance in the ancient world.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 