import React from 'react'
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
  title: "Early Church Period | Christian Historical Theology",
  description: "Comprehensive exploration of Early Church period (100-451 AD), including major developments, figures, and controversies.",
  keywords: [
    "Early Church",
    "Patristic Period",
    "Church Fathers",
    "Early Christian Doctrine",
    "Ecumenical Councils",
    "Christian Heresies",
    "Apostolic Fathers"
  ]
}

interface TimePeriod {
  era: string
  years: string
  description: string
  keyEvents: string[]
  significance: string
}

interface ChurchFather {
  name: string
  years: string
  location: string
  majorWorks: string[]
  contributions: string[]
  significance: string
}

interface Controversy {
  name: string
  description: string
  mainIssues: string[]
  keyFigures: {
    orthodox: string[]
    heterodox: string[]
  }
  resolution: string
}

interface Council {
  name: string
  year: string
  location: string
  mainIssues: string[]
  decisions: string[]
  significance: string
}

const timePeriods: TimePeriod[] = [
  {
    era: "Apostolic Age",
    years: "30-100 AD",
    description: "Period immediately following Christ's ascension",
    keyEvents: [
      "Spread of Christianity",
      "Writing of New Testament",
      "Persecution under Nero",
      "Destruction of Jerusalem Temple (70 AD)"
    ],
    significance: "Foundation of Christian church and doctrine"
  },
  {
    era: "Post-Apostolic Age",
    years: "100-150 AD",
    description: "Period of the Apostolic Fathers",
    keyEvents: [
      "Writing of Didache",
      "Letters of Ignatius",
      "Development of church order",
      "Early Christian worship patterns"
    ],
    significance: "Transition from apostolic to patristic Christianity"
  },
  {
    era: "Ante-Nicene Period",
    years: "150-325 AD",
    description: "Period before First Council of Nicaea",
    keyEvents: [
      "Development of Christian theology",
      "Persecution under Roman emperors",
      "Rise of Christian apologetics",
      "Formation of biblical canon"
    ],
    significance: "Development of Christian doctrine and identity"
  }
]

const churchFathers: ChurchFather[] = [
  {
    name: "Ignatius of Antioch",
    years: "c. 35-108 AD",
    location: "Antioch, Syria",
    majorWorks: [
      "Letters to Seven Churches",
      "Letter to Polycarp",
      "Letter to the Romans"
    ],
    contributions: [
      "Episcopal church structure",
      "Eucharistic theology",
      "Martyrdom theology",
      "Unity of church"
    ],
    significance: "Early witness to church order and sacramental life"
  },
  {
    name: "Justin Martyr",
    years: "c. 100-165 AD",
    location: "Rome",
    majorWorks: [
      "First Apology",
      "Second Apology",
      "Dialogue with Trypho"
    ],
    contributions: [
      "Christian apologetics",
      "Logos theology",
      "Defense of Christianity",
      "Integration of philosophy"
    ],
    significance: "First major Christian apologist"
  },
  {
    name: "Irenaeus of Lyon",
    years: "c. 130-202 AD",
    location: "Lyon, Gaul",
    majorWorks: [
      "Against Heresies",
      "Demonstration of Apostolic Preaching"
    ],
    contributions: [
      "Rule of faith",
      "Biblical canon",
      "Anti-Gnostic polemic",
      "Apostolic succession"
    ],
    significance: "First systematic theologian"
  }
]

const controversies: Controversy[] = [
  {
    name: "Gnostic Controversy",
    description: "Conflict over Gnostic interpretations of Christianity",
    mainIssues: [
      "Nature of God",
      "Creation",
      "Salvation",
      "Biblical interpretation"
    ],
    keyFigures: {
      orthodox: ["Irenaeus", "Tertullian", "Hippolytus"],
      heterodox: ["Valentinus", "Marcion", "Basilides"]
    },
    resolution: "Orthodox rejection of Gnosticism through theological and biblical arguments"
  },
  {
    name: "Montanist Controversy",
    description: "Debate over prophetic authority and spiritual gifts",
    mainIssues: [
      "Continuing revelation",
      "Church authority",
      "Spiritual gifts",
      "Asceticism"
    ],
    keyFigures: {
      orthodox: ["Pope Zephyrinus", "Anonymous Anti-Montanists"],
      heterodox: ["Montanus", "Priscilla", "Maximilla"]
    },
    resolution: "Rejection of Montanism while maintaining belief in Holy Spirit"
  }
]

const councils: Council[] = [
  {
    name: "Council of Nicaea",
    year: "325 AD",
    location: "Nicaea, Bithynia",
    mainIssues: [
      "Deity of Christ",
      "Arian controversy",
      "Date of Easter",
      "Church organization"
    ],
    decisions: [
      "Nicene Creed",
      "Condemnation of Arianism",
      "Easter date formula",
      "Canon law provisions"
    ],
    significance: "First ecumenical council; established Christological orthodoxy"
  },
  {
    name: "Council of Constantinople I",
    year: "381 AD",
    location: "Constantinople",
    mainIssues: [
      "Deity of Holy Spirit",
      "Apollinarian controversy",
      "Church jurisdiction"
    ],
    decisions: [
      "Nicene-Constantinopolitan Creed",
      "Condemnation of Apollinarianism",
      "Episcopal jurisdiction"
    ],
    significance: "Completed Trinitarian doctrine"
  }
]

export default function EarlyChurchPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Early Church Period</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="periods">Time Periods</TabsTrigger>
          <TabsTrigger value="fathers">Church Fathers</TabsTrigger>
          <TabsTrigger value="controversies">Controversies</TabsTrigger>
          <TabsTrigger value="councils">Councils</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Understanding the Early Church Period</CardTitle>
              <CardDescription>
                The formative period of Christian theology and practice
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The Early Church period (100-451 AD) was crucial in the development
                of Christian doctrine, church organization, and worship. This era
                saw the formation of the biblical canon, the development of
                theological orthodoxy, and the establishment of church structures.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="periods">
          <div className="grid gap-4 md:grid-cols-2">
            {timePeriods.map((period) => (
              <Card key={period.era}>
                <CardHeader>
                  <CardTitle>{period.era}</CardTitle>
                  <CardDescription>{period.years}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{period.description}</p>
                  <h4 className="font-semibold">Key Events:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {period.keyEvents.map((event) => (
                      <li key={event}>{event}</li>
                    ))}
                  </ul>
                  <p><strong>Significance:</strong> {period.significance}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="fathers">
          <div className="grid gap-4 md:grid-cols-2">
            {churchFathers.map((father) => (
              <Card key={father.name}>
                <CardHeader>
                  <CardTitle>{father.name}</CardTitle>
                  <CardDescription>{father.years} - {father.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Major Works:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {father.majorWorks.map((work) => (
                      <li key={work}>{work}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Contributions:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {father.contributions.map((contribution) => (
                      <li key={contribution}>{contribution}</li>
                    ))}
                  </ul>
                  <p><strong>Significance:</strong> {father.significance}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="controversies">
          <div className="grid gap-4 md:grid-cols-2">
            {controversies.map((controversy) => (
              <Card key={controversy.name}>
                <CardHeader>
                  <CardTitle>{controversy.name}</CardTitle>
                  <CardDescription>{controversy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Main Issues:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {controversy.mainIssues.map((issue) => (
                      <li key={issue}>{issue}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Key Figures:</h4>
                  <div className="ml-5">
                    <p><strong>Orthodox:</strong></p>
                    <ul className="list-disc pl-5 mb-2">
                      {controversy.keyFigures.orthodox.map((figure) => (
                        <li key={figure}>{figure}</li>
                      ))}
                    </ul>
                    <p><strong>Heterodox:</strong></p>
                    <ul className="list-disc pl-5 mb-2">
                      {controversy.keyFigures.heterodox.map((figure) => (
                        <li key={figure}>{figure}</li>
                      ))}
                    </ul>
                  </div>
                  <p><strong>Resolution:</strong> {controversy.resolution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="councils">
          <div className="grid gap-4 md:grid-cols-2">
            {councils.map((council) => (
              <Card key={council.name}>
                <CardHeader>
                  <CardTitle>{council.name}</CardTitle>
                  <CardDescription>{council.year} - {council.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Main Issues:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {council.mainIssues.map((issue) => (
                      <li key={issue}>{issue}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Decisions:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {council.decisions.map((decision) => (
                      <li key={decision}>{decision}</li>
                    ))}
                  </ul>
                  <p><strong>Significance:</strong> {council.significance}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
} 