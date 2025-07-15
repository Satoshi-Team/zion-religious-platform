import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The Holy Bible | Christian Scriptures",
  description: "Explore the complete text of the Holy Bible with study resources, commentaries, and historical context.",
  openGraph: {
    title: "The Holy Bible | Christian Scriptures",
    description: "Complete text of the Holy Bible with study resources and historical context",
    type: "website",
  },
}

interface BibleBook {
  name: string
  testament: "Old" | "New"
  category: string
  description: string
  keyThemes: string[]
  notablePassages: Array<{
    reference: string
    text: string
    significance: string
  }>
}

const bibleBooks: BibleBook[] = [
  {
    name: "Genesis",
    testament: "Old",
    category: "Pentateuch",
    description: "The first book of the Bible, containing the creation account, early human history, and the stories of the patriarchs.",
    keyThemes: [
      "Creation",
      "Fall of humanity",
      "Covenant with Abraham",
      "God's faithfulness"
    ],
    notablePassages: [
      {
        reference: "Genesis 1:1",
        text: "In the beginning, God created the heavens and the earth.",
        significance: "The foundational statement of God's creative power"
      },
      {
        reference: "Genesis 12:1-3",
        text: "Now the Lord said to Abram, 'Go from your country...'",
        significance: "The Abrahamic covenant establishing God's chosen people"
      }
    ]
  },
  {
    name: "Matthew",
    testament: "New",
    category: "Gospels",
    description: "The first Gospel, presenting Jesus as the promised Messiah and King of the Jews.",
    keyThemes: [
      "Kingdom of Heaven",
      "Jesus as Messiah",
      "Discipleship",
      "Fulfillment of prophecy"
    ],
    notablePassages: [
      {
        reference: "Matthew 5:1-12",
        text: "Blessed are the poor in spirit...",
        significance: "The Beatitudes, Jesus' teaching on kingdom values"
      },
      {
        reference: "Matthew 28:18-20",
        text: "Go therefore and make disciples of all nations...",
        significance: "The Great Commission, Jesus' final command to his followers"
      }
    ]
  }
]

interface StudyResource {
  title: string
  type: string
  description: string
  url: string
}

const studyResources: StudyResource[] = [
  {
    title: "Bible Study Methods",
    type: "Guide",
    description: "Learn effective methods for studying and understanding Scripture.",
    url: "/blog/how-to-read-the-bible"
  },
  {
    title: "Historical Context",
    type: "Resource",
    description: "Explore the historical and cultural background of biblical times.",
    url: "/religion/christianity/history/early-church"
  }
]

export default function BiblePage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">The Holy Bible</h1>
        <p className="text-xl text-muted-foreground">
          The inspired Word of God, containing the Old and New Testaments
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="old-testament">Old Testament</TabsTrigger>
          <TabsTrigger value="new-testament">New Testament</TabsTrigger>
          <TabsTrigger value="resources">Study Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>About the Bible</CardTitle>
              <CardDescription>
                The Bible is a collection of 66 books written by various authors over thousands of years, inspired by God.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Old Testament</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>39 books</li>
                    <li>Written primarily in Hebrew</li>
                    <li>Covers creation to the time of Christ</li>
                    <li>Contains the Law, Prophets, and Writings</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">New Testament</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>27 books</li>
                    <li>Written in Greek</li>
                    <li>Focuses on Jesus Christ and the early church</li>
                    <li>Contains Gospels, Acts, Epistles, and Revelation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="old-testament" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Old Testament Books</CardTitle>
              <CardDescription>
                The Hebrew Scriptures that tell the story of God's relationship with Israel
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {bibleBooks
                .filter(book => book.testament === "Old")
                .map((book) => (
                  <div key={book.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{book.name}</h3>
                    <p className="text-sm mt-2">{book.description}</p>
                    <div className="mt-4 grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium">Key Themes:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {book.keyThemes.map((theme, index) => (
                            <li key={index}>{theme}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Notable Passages:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {book.notablePassages.map((passage, index) => (
                            <li key={index}>
                              <Link href={`/bible/${book.name.toLowerCase()}/${passage.reference}`} className="text-primary hover:underline">
                                {passage.reference}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="new-testament" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>New Testament Books</CardTitle>
              <CardDescription>
                The Christian Scriptures that focus on Jesus Christ and the early church
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {bibleBooks
                .filter(book => book.testament === "New")
                .map((book) => (
                  <div key={book.name} className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">{book.name}</h3>
                    <p className="text-sm mt-2">{book.description}</p>
                    <div className="mt-4 grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium">Key Themes:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {book.keyThemes.map((theme, index) => (
                            <li key={index}>{theme}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Notable Passages:</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                          {book.notablePassages.map((passage, index) => (
                            <li key={index}>
                              <Link href={`/bible/${book.name.toLowerCase()}/${passage.reference}`} className="text-primary hover:underline">
                                {passage.reference}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Study Resources</CardTitle>
              <CardDescription>
                Tools and guides to help you understand and apply Scripture
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {studyResources.map((resource) => (
                <div key={resource.title} className="p-4 bg-secondary rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{resource.title}</h3>
                    <span className="text-sm text-muted-foreground">{resource.type}</span>
                  </div>
                  <p className="text-sm mt-2">{resource.description}</p>
                  <Link
                    href={resource.url}
                    className="text-primary hover:underline text-sm block mt-2"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Christianity Navigation</CardTitle>
          <CardDescription>
            Explore related topics in Christianity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Core Teachings</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/teachings/christianity/trinity" className="text-primary hover:underline">
                    The Trinity
                  </Link>
                </li>
                <li>
                  <Link href="/teachings/christianity/church" className="text-primary hover:underline">
                    The Church
                  </Link>
                </li>
                <li>
                  <Link href="/teachings/christianity/salvation" className="text-primary hover:underline">
                    Salvation
                  </Link>
                </li>
                <li>
                  <Link href="/blog/how-to-read-the-bible" className="text-primary hover:underline">
                    How to Read the Bible
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Theology</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/religion/christianity/theology/pneumatology" className="text-primary hover:underline">
                    Pneumatology
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/theology/christology" className="text-primary hover:underline">
                    Christology
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/theology/ecclesiology" className="text-primary hover:underline">
                    Ecclesiology
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/theology/soteriology" className="text-primary hover:underline">
                    Soteriology
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Traditions</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/religion/christianity/orthodox" className="text-primary hover:underline">
                    Orthodox Christianity
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/lutheran" className="text-primary hover:underline">
                    Lutheran Tradition
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/churches-of-christ" className="text-primary hover:underline">
                    Churches of Christ
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/assyrian-church" className="text-primary hover:underline">
                    Assyrian Church
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">History</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/religion/christianity/history/early-church" className="text-primary hover:underline">
                    Early Church History
                  </Link>
                </li>
                <li>
                  <Link href="/religion/christianity/history/reformation" className="text-primary hover:underline">
                    The Reformation
                  </Link>
                </li>
                <li>
                  <Link href="/blog/christian-creeds-and-confessions" className="text-primary hover:underline">
                    Christian Creeds
                  </Link>
                </li>
                <li>
                  <Link href="/blog/who-is-the-holy-spirit" className="text-primary hover:underline">
                    Who Is the Holy Spirit?
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 