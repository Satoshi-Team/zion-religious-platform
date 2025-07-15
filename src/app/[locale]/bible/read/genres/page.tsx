import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Understanding Biblical Genres | Bible Study Curriculum",
  description: "Explore the different literary genres in the Bible and learn how to interpret each type of writing correctly. Master the art of reading narrative, poetry, prophecy, and more.",
  keywords: "bible genres, biblical literature, bible study, hermeneutics, biblical interpretation, narrative, poetry, prophecy, wisdom literature, epistles",
  authors: [{ name: "Theological Research Team" }],
  openGraph: {
    title: "Understanding Biblical Genres | Bible Study Curriculum",
    description: "Explore the different literary genres in the Bible and learn how to interpret each type of writing correctly.",
    type: "article",
    url: 'http://localhost:3000/bible/read/genres',
    images: [
      {
        url: '/placeholder-bible-genres.jpg',
        width: 1200,
        height: 630,
        alt: 'Visual representation of different biblical genres',
      },
    ],
    siteName: "Bible Study Curriculum",
    locale: "en_US",
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
  },
}

export default function BiblicalGenresPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Understanding Biblical Genres</h1>
      
      <p className="text-lg mb-8">
        The Bible contains various literary genres, each requiring different approaches to interpretation. 
        Understanding these genres is crucial for accurate biblical interpretation and application.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Narrative</CardTitle>
            <CardDescription>Historical accounts and stories</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Biblical narratives tell the story of God's interaction with humanity. They include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Historical accounts (Genesis, Exodus, 1-2 Kings)</li>
              <li>Biographical narratives (Gospels)</li>
              <li>Parables (Jesus' teaching stories)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Poetry</CardTitle>
            <CardDescription>Expressive and symbolic language</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Hebrew poetry uses parallelism and vivid imagery:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Psalms (worship and prayer)</li>
              <li>Song of Songs (love poetry)</li>
              <li>Lamentations (mourning poetry)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Wisdom Literature</CardTitle>
            <CardDescription>Practical and philosophical insights</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Books that explore life's big questions:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Proverbs (practical wisdom)</li>
              <li>Ecclesiastes (philosophical reflection)</li>
              <li>Job (theological dialogue)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prophecy</CardTitle>
            <CardDescription>Divine messages and visions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Prophetic books contain:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Oracles of judgment and hope</li>
              <li>Apocalyptic visions</li>
              <li>Messianic prophecies</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Epistles</CardTitle>
            <CardDescription>Letters to early churches</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              New Testament letters that:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Address specific situations</li>
              <li>Teach theological concepts</li>
              <li>Provide practical guidance</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Law</CardTitle>
            <CardDescription>Divine commands and instructions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Foundational texts containing:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Moral laws</li>
              <li>Civil regulations</li>
              <li>Religious ceremonies</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Key Principles for Genre Interpretation</h2>
        <div className="space-y-4">
          <p>
            Each genre requires specific interpretive approaches. Here are some key principles:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Identify the genre before interpreting</li>
            <li>Understand the cultural and historical context</li>
            <li>Recognize literary devices and patterns</li>
            <li>Consider the author's intended purpose</li>
            <li>Apply appropriate interpretive methods</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Practice Exercises</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Genre Identification</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Practice identifying different genres in various biblical passages.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Interpretation Practice</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Apply appropriate interpretive methods to different genres.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 