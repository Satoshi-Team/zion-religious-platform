import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Biblical Archaeology and History | Bible Study Curriculum",
  description: "Explore the archaeological discoveries and historical context that illuminate the world of the Bible. Understand how ancient civilizations, artifacts, and historical records enhance our understanding of Scripture.",
  keywords: "biblical archaeology, ancient history, bible study, archaeological discoveries, ancient civilizations, historical context",
  authors: [{ name: "Theological Research Team" }],
  openGraph: {
    title: "Biblical Archaeology and History | Bible Study Curriculum",
    description: "Explore the archaeological discoveries and historical context that illuminate the world of the Bible.",
    type: "article",
    url: 'http://localhost:3000/bible/read/archaeology',
    images: [
      {
        url: '/placeholder-bible-archaeology.jpg',
        width: 1200,
        height: 630,
        alt: 'Visual representation of biblical archaeology and historical discoveries',
      },
    ],
    siteName: "Bible Study Curriculum",
    locale: "en_US",
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
  },
}

export default function BiblicalArchaeologyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Biblical Archaeology and History</h1>
      
      <p className="text-lg mb-8">
        Biblical archaeology and history provide crucial context for understanding Scripture. This module 
        explores how archaeological discoveries and historical records illuminate the world of the Bible, 
        helping us better grasp the cultural, social, and political settings of biblical events.
      </p>

      <Tabs defaultValue="discoveries" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="discoveries">Key Discoveries</TabsTrigger>
          <TabsTrigger value="context">Historical Context</TabsTrigger>
          <TabsTrigger value="significance">Archaeological Significance</TabsTrigger>
        </TabsList>

        <TabsContent value="discoveries" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Ancient Cities and Sites</CardTitle>
                <CardDescription>Uncovering Biblical Locations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Archaeological excavations have revealed numerous cities and sites mentioned in Scripture, 
                  from Jericho and Jerusalem to Capernaum and Corinth. These discoveries help us understand 
                  the physical settings of biblical events and the daily life of ancient peoples.
                </p>
                <p>
                  The layout, architecture, and artifacts found at these sites provide valuable insights 
                  into the social, economic, and religious practices of biblical times.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Artifacts and Inscriptions</CardTitle>
                <CardDescription>Material Evidence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Ancient artifacts and inscriptions offer direct evidence of biblical events and figures. 
                  From royal seals and administrative records to religious objects and everyday items, 
                  these finds help verify historical details and illuminate cultural practices.
                </p>
                <p>
                  These discoveries often provide independent confirmation of biblical accounts and help 
                  us understand the broader historical context.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="context" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Ancient Near East</CardTitle>
                <CardDescription>The World of the Old Testament</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The Old Testament unfolds against the backdrop of ancient Near Eastern civilizations. 
                  Understanding the political, religious, and cultural dynamics of Egypt, Mesopotamia, 
                  and surrounding regions helps us grasp the context of biblical events and teachings.
                </p>
                <p>
                  Archaeological discoveries reveal how Israel's neighbors influenced and interacted 
                  with biblical peoples, providing important context for understanding Scripture.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Greco-Roman World</CardTitle>
                <CardDescription>The Setting of the New Testament</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The New Testament takes place in the context of the Greco-Roman world. Archaeological 
                  and historical evidence helps us understand the social structures, religious practices, 
                  and cultural values that shaped the early Christian movement.
                </p>
                <p>
                  This context illuminates the challenges faced by early Christians and helps us 
                  better understand the New Testament's message and mission.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="significance" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Historical Reliability</CardTitle>
                <CardDescription>Verifying Biblical Accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Archaeological discoveries have repeatedly confirmed the historical reliability of 
                  biblical accounts. From the existence of ancient cities to the accuracy of cultural 
                  details, archaeology provides external verification of Scripture's historical claims.
                </p>
                <p>
                  While archaeology cannot prove theological truths, it can demonstrate the historical 
                  accuracy of biblical narratives and help us understand their context.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cultural Understanding</CardTitle>
                <CardDescription>Illuminating Biblical World</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Archaeology helps us understand the daily life, customs, and beliefs of biblical 
                  peoples. This knowledge enhances our understanding of biblical texts and helps us 
                  avoid misinterpreting passages due to cultural differences.
                </p>
                <p>
                  By understanding the ancient context, we can better apply biblical principles to 
                  our modern lives while remaining faithful to their original meaning.
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
              <CardTitle>Site Explorer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Take virtual tours of important archaeological sites and see how they relate to biblical events.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Timeline Navigator</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore the chronological relationship between biblical events and archaeological discoveries.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Artifact Gallery</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Examine significant archaeological finds and learn how they illuminate biblical history.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Study Resources</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Archaeological Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access detailed reports and analyses of important archaeological discoveries related to the Bible.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historical Maps</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore interactive maps showing the geographical and historical context of biblical events.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 