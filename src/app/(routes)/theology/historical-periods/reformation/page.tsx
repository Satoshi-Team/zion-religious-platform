import { Metadata } from "next"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Reformation Period | Christian Historical Theology",
  description: "Comprehensive exploration of the Reformation Period (1500-1650), including Protestant Reformation, Catholic Reform, and theological developments.",
  keywords: [
    "Protestant Reformation",
    "Lutheran Reformation",
    "Reformed Tradition",
    "Catholic Reform",
    "Counter-Reformation",
    "Reformation Theology",
    "Sola Scriptura"
  ]
}

interface ReformationBranch {
  name: string
  founder: string
  keyPrinciples: string[]
  distinctives: string[]
  majorWorks: string[]
  impact: string
}

interface Reformer {
  name: string
  years: string
  location: string
  majorWorks: string[]
  keyDoctrines: string[]
  contributions: string[]
  legacy: string
}

interface Controversy {
  issue: string
  description: string
  mainParties: {
    position: string
    advocates: string[]
    arguments: string[]
  }[]
  resolution: string
  impact: string
}

interface Development {
  area: string
  description: string
  innovations: string[]
  significance: string
  longTermEffects: string[]
}

const reformationBranches: ReformationBranch[] = [
  {
    name: "Lutheran",
    founder: "Martin Luther",
    keyPrinciples: [
      "Sola Scriptura",
      "Sola Fide",
      "Sola Gratia",
      "Law and Gospel distinction",
      "Priesthood of all believers"
    ],
    distinctives: [
      "Real presence in Eucharist",
      "Two kingdoms doctrine",
      "Simul justus et peccator",
      "Emphasis on catechesis"
    ],
    majorWorks: [
      "Augsburg Confession",
      "Luther's Catechisms",
      "Book of Concord",
      "Formula of Concord"
    ],
    impact: "Established Protestant principle and Lutheran churches worldwide"
  },
  {
    name: "Reformed",
    founder: "John Calvin",
    keyPrinciples: [
      "Divine sovereignty",
      "Covenant theology",
      "Predestination",
      "Reformed worship",
      "Church discipline"
    ],
    distinctives: [
      "TULIP theology",
      "Regulative principle",
      "Presbyterian polity",
      "Spiritual presence in sacraments"
    ],
    majorWorks: [
      "Institutes of Christian Religion",
      "Geneva Catechism",
      "Reformed Confessions",
      "Heidelberg Catechism"
    ],
    impact: "Developed systematic Reformed theology and global Reformed churches"
  },
  {
    name: "Catholic Reform",
    founder: "Council of Trent",
    keyPrinciples: [
      "Scripture and Tradition",
      "Seven Sacraments",
      "Papal authority",
      "Justification process",
      "Sacred tradition"
    ],
    distinctives: [
      "Tridentine reforms",
      "Counter-Reformation measures",
      "Jesuit mission",
      "Marian devotion"
    ],
    majorWorks: [
      "Canons of Trent",
      "Roman Catechism",
      "Spiritual Exercises",
      "Index of Prohibited Books"
    ],
    impact: "Renewed Catholic Church and established modern Catholicism"
  }
]

const reformers: Reformer[] = [
  {
    name: "Martin Luther",
    years: "1483-1546",
    location: "Germany",
    majorWorks: [
      "95 Theses",
      "On the Bondage of the Will",
      "On Christian Liberty",
      "Large and Small Catechisms"
    ],
    keyDoctrines: [
      "Justification by faith alone",
      "Priesthood of believers",
      "Two kingdoms",
      "Law and Gospel",
      "Scripture alone"
    ],
    contributions: [
      "German Bible translation",
      "Protestant hymnody",
      "Educational reform",
      "Marriage of clergy"
    ],
    legacy: "Father of Protestant Reformation and Lutheran tradition"
  },
  {
    name: "John Calvin",
    years: "1509-1564",
    location: "Geneva",
    majorWorks: [
      "Institutes of the Christian Religion",
      "Biblical Commentaries",
      "Geneva Catechism",
      "Ecclesiastical Ordinances"
    ],
    keyDoctrines: [
      "Divine sovereignty",
      "Predestination",
      "Covenant theology",
      "Church discipline",
      "Reformed worship"
    ],
    contributions: [
      "Systematic theology",
      "Biblical exposition",
      "Church organization",
      "Educational system"
    ],
    legacy: "Systematic theologian and founder of Reformed tradition"
  }
]

const controversies: Controversy[] = [
  {
    issue: "Justification",
    description: "Debate over the nature of salvation and justification",
    mainParties: [
      {
        position: "Protestant",
        advocates: ["Luther", "Melanchthon", "Calvin"],
        arguments: [
          "Justification by faith alone",
          "Imputed righteousness",
          "Assurance of salvation"
        ]
      },
      {
        position: "Catholic",
        advocates: ["Cajetan", "Eck", "Council of Trent"],
        arguments: [
          "Faith and works",
          "Infused righteousness",
          "Sacramental system"
        ]
      }
    ],
    resolution: "Permanent division between Protestant and Catholic views",
    impact: "Fundamental divide in Western Christianity"
  },
  {
    issue: "Eucharistic Presence",
    description: "Debate over Christ's presence in the Lord's Supper",
    mainParties: [
      {
        position: "Lutheran",
        advocates: ["Luther", "Chemnitz"],
        arguments: [
          "Real presence",
          "Sacramental union",
          "Ubiquity of Christ's human nature"
        ]
      },
      {
        position: "Reformed",
        advocates: ["Calvin", "Zwingli"],
        arguments: [
          "Spiritual presence",
          "Memorial view",
          "Symbolic understanding"
        ]
      }
    ],
    resolution: "Continued distinction between Lutheran and Reformed views",
    impact: "Major factor in Protestant division"
  }
]

const developments: Development[] = [
  {
    area: "Biblical Studies",
    description: "Revolutionary developments in biblical scholarship and translation",
    innovations: [
      "Vernacular translations",
      "Critical text editions",
      "Hebrew and Greek studies",
      "Exegetical methods",
      "Commentary tradition"
    ],
    significance: "Made Scripture accessible and established biblical scholarship",
    longTermEffects: [
      "Biblical languages revival",
      "Translation principles",
      "Textual criticism",
      "Vernacular worship",
      "Biblical literacy"
    ]
  },
  {
    area: "Ecclesiology",
    description: "Radical reconception of church nature and authority",
    innovations: [
      "Protestant church structures",
      "Congregational involvement",
      "Church discipline systems",
      "Ministry redefinition",
      "Catholic reform measures"
    ],
    significance: "Reshaped understanding of church and ministry",
    longTermEffects: [
      "Denominationalism",
      "Democratic church governance",
      "Lay ministry",
      "Religious pluralism",
      "Church-state separation"
    ]
  }
]

export default function ReformationPeriodPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Reformation Period</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="branches">Branches</TabsTrigger>
          <TabsTrigger value="reformers">Reformers</TabsTrigger>
          <TabsTrigger value="controversies">Controversies</TabsTrigger>
          <TabsTrigger value="developments">Developments</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Understanding the Reformation Period</CardTitle>
              <CardDescription>
                The transformative period of Christian reform and division
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The Reformation Period (1500-1650) marked a fundamental
                transformation in Western Christianity, leading to the
                emergence of Protestantism, Catholic reform, and new
                approaches to theology, church, and Christian life.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="branches">
          <div className="grid gap-4 md:grid-cols-2">
            {reformationBranches.map((branch) => (
              <Card key={branch.name}>
                <CardHeader>
                  <CardTitle>{branch.name}</CardTitle>
                  <CardDescription>Founded by: {branch.founder}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Key Principles:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {branch.keyPrinciples.map((principle) => (
                      <li key={principle}>{principle}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Distinctives:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {branch.distinctives.map((distinctive) => (
                      <li key={distinctive}>{distinctive}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Major Works:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {branch.majorWorks.map((work) => (
                      <li key={work}>{work}</li>
                    ))}
                  </ul>
                  <p><strong>Impact:</strong> {branch.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reformers">
          <div className="grid gap-4 md:grid-cols-2">
            {reformers.map((reformer) => (
              <Card key={reformer.name}>
                <CardHeader>
                  <CardTitle>{reformer.name}</CardTitle>
                  <CardDescription>{reformer.years} - {reformer.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Major Works:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {reformer.majorWorks.map((work) => (
                      <li key={work}>{work}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Key Doctrines:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {reformer.keyDoctrines.map((doctrine) => (
                      <li key={doctrine}>{doctrine}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Contributions:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {reformer.contributions.map((contribution) => (
                      <li key={contribution}>{contribution}</li>
                    ))}
                  </ul>
                  <p><strong>Legacy:</strong> {reformer.legacy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="controversies">
          <div className="grid gap-4 md:grid-cols-2">
            {controversies.map((controversy) => (
              <Card key={controversy.issue}>
                <CardHeader>
                  <CardTitle>{controversy.issue}</CardTitle>
                  <CardDescription>{controversy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {controversy.mainParties.map((party) => (
                    <div key={party.position} className="mb-4">
                      <h4 className="font-semibold">{party.position} Position:</h4>
                      <p className="mb-2"><strong>Advocates:</strong> {party.advocates.join(", ")}</p>
                      <h5 className="font-semibold">Arguments:</h5>
                      <ul className="list-disc pl-5 mb-2">
                        {party.arguments.map((argument) => (
                          <li key={argument}>{argument}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <p><strong>Resolution:</strong> {controversy.resolution}</p>
                  <p><strong>Impact:</strong> {controversy.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="developments">
          <div className="grid gap-4 md:grid-cols-2">
            {developments.map((development) => (
              <Card key={development.area}>
                <CardHeader>
                  <CardTitle>{development.area}</CardTitle>
                  <CardDescription>{development.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Innovations:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {development.innovations.map((innovation) => (
                      <li key={innovation}>{innovation}</li>
                    ))}
                  </ul>
                  <p><strong>Significance:</strong> {development.significance}</p>
                  <h4 className="font-semibold">Long-term Effects:</h4>
                  <ul className="list-disc pl-5">
                    {development.longTermEffects.map((effect) => (
                      <li key={effect}>{effect}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
} 