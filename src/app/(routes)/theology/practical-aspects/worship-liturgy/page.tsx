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
  title: "Worship and Liturgy | Christian Practical Aspects",
  description: "Comprehensive exploration of Christian worship practices, liturgical traditions, and sacramental celebrations.",
  keywords: [
    "Christian Worship",
    "Liturgy",
    "Church Service",
    "Sacraments",
    "Christian Rituals",
    "Sacred Music",
    "Worship Planning",
    "Liturgical Year"
  ]
}

interface LiturgicalElement {
  element: string
  description: string
  purpose: string[]
  practices: string[]
  variations: string[]
  significance: string
}

interface WorshipStyle {
  style: string
  description: string
  characteristics: string[]
  elements: string[]
  strengths: string[]
  challenges: string[]
}

interface LiturgicalSeason {
  season: string
  description: string
  themes: string[]
  practices: string[]
  significance: string[]
  traditions: string[]
}

interface WorshipResource {
  category: string
  description: string
  examples: string[]
  uses: string[]
  considerations: string[]
  implementation: string[]
}

const liturgicalElements: LiturgicalElement[] = [
  {
    element: "Eucharist/Communion",
    description: "Central sacramental celebration of Christian worship",
    purpose: [
      "Memorial of Christ's sacrifice",
      "Communion with God and church",
      "Spiritual nourishment",
      "Kingdom anticipation"
    ],
    practices: [
      "Consecration of elements",
      "Distribution methods",
      "Communal participation",
      "Liturgical prayers"
    ],
    variations: [
      "Weekly celebration",
      "Monthly observance",
      "Open/closed communion",
      "Different liturgical traditions"
    ],
    significance: "Core sacramental practice expressing Christian unity and faith"
  },
  {
    element: "Proclamation of the Word",
    description: "Scripture reading and preaching in worship",
    purpose: [
      "Biblical teaching",
      "Faith formation",
      "Community instruction",
      "Spiritual guidance"
    ],
    practices: [
      "Lectionary readings",
      "Expository preaching",
      "Responsive reading",
      "Biblical interpretation"
    ],
    variations: [
      "Lectionary-based",
      "Topical series",
      "Book studies",
      "Narrative preaching"
    ],
    significance: "Essential element for faith formation and spiritual growth"
  }
]

const worshipStyles: WorshipStyle[] = [
  {
    style: "Traditional Liturgical",
    description: "Structured worship following historical patterns",
    characteristics: [
      "Formal liturgy",
      "Historic prayers",
      "Traditional music",
      "Ritual actions",
      "Seasonal observances"
    ],
    elements: [
      "Processional",
      "Kyrie",
      "Gloria",
      "Creeds",
      "Eucharistic prayers"
    ],
    strengths: [
      "Historical connection",
      "Theological depth",
      "Structured formation",
      "Rich symbolism"
    ],
    challenges: [
      "Cultural accessibility",
      "Modern relevance",
      "Participation levels",
      "Understanding ritual"
    ]
  },
  {
    style: "Contemporary Worship",
    description: "Modern expressions of Christian worship",
    characteristics: [
      "Contemporary music",
      "Informal structure",
      "Modern language",
      "Technology use",
      "Experiential focus"
    ],
    elements: [
      "Praise band",
      "Multimedia",
      "Modern prayers",
      "Interactive elements",
      "Testimony"
    ],
    strengths: [
      "Cultural relevance",
      "Accessibility",
      "Emotional engagement",
      "Youth appeal"
    ],
    challenges: [
      "Theological depth",
      "Historical connection",
      "Quality control",
      "Balance of elements"
    ]
  }
]

const liturgicalSeasons: LiturgicalSeason[] = [
  {
    season: "Advent",
    description: "Season of preparation for Christmas",
    themes: [
      "Anticipation",
      "Hope",
      "Preparation",
      "Coming of Christ"
    ],
    practices: [
      "Advent wreath",
      "Special prayers",
      "Jesse tree",
      "Seasonal hymns"
    ],
    significance: [
      "Beginning of church year",
      "Spiritual preparation",
      "Prophetic fulfillment",
      "Christ's return"
    ],
    traditions: [
      "Purple/blue vestments",
      "Daily devotions",
      "Special services",
      "Advent calendars"
    ]
  },
  {
    season: "Lent",
    description: "40-day period of preparation for Easter",
    themes: [
      "Penitence",
      "Self-examination",
      "Sacrifice",
      "Spiritual renewal"
    ],
    practices: [
      "Ash Wednesday",
      "Fasting",
      "Special devotions",
      "Stations of the Cross"
    ],
    significance: [
      "Spiritual discipline",
      "Identification with Christ",
      "Repentance",
      "Preparation for Easter"
    ],
    traditions: [
      "Purple vestments",
      "Removal of alleluias",
      "Simplified worship",
      "Holy Week observances"
    ]
  }
]

const worshipResources: WorshipResource[] = [
  {
    category: "Music Resources",
    description: "Materials for worship music ministry",
    examples: [
      "Hymnals",
      "Contemporary songbooks",
      "Digital music libraries",
      "Instrumental resources",
      "Choral materials"
    ],
    uses: [
      "Congregational singing",
      "Choral worship",
      "Special music",
      "Seasonal selections",
      "Service music"
    ],
    considerations: [
      "Copyright compliance",
      "Musical ability",
      "Cultural context",
      "Theological content",
      "Accessibility"
    ],
    implementation: [
      "Music planning",
      "Rehearsal preparation",
      "Team coordination",
      "Technical support",
      "Worship flow"
    ]
  },
  {
    category: "Liturgical Resources",
    description: "Materials for worship planning and leadership",
    examples: [
      "Prayer books",
      "Lectionaries",
      "Worship planning guides",
      "Ritual manuals",
      "Seasonal resources"
    ],
    uses: [
      "Service planning",
      "Liturgical preparation",
      "Seasonal worship",
      "Special services",
      "Daily office"
    ],
    considerations: [
      "Denominational traditions",
      "Local context",
      "Resource quality",
      "Practical application",
      "Community needs"
    ],
    implementation: [
      "Advance planning",
      "Team training",
      "Resource adaptation",
      "Evaluation process",
      "Continuous improvement"
    ]
  }
]

export default function WorshipLiturgyPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Worship and Liturgy</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="elements">Elements</TabsTrigger>
          <TabsTrigger value="styles">Styles</TabsTrigger>
          <TabsTrigger value="seasons">Seasons</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Understanding Christian Worship</CardTitle>
              <CardDescription>
                The theory and practice of Christian worship
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Christian worship encompasses the various ways Christians express
                devotion to God through liturgy, music, prayer, and sacramental
                celebration. It includes both traditional and contemporary forms,
                shaped by historical development and cultural context.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="elements">
          <div className="grid gap-4 md:grid-cols-2">
            {liturgicalElements.map((element) => (
              <Card key={element.element}>
                <CardHeader>
                  <CardTitle>{element.element}</CardTitle>
                  <CardDescription>{element.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Purpose:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {element.purpose.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Practices:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {element.practices.map((practice) => (
                      <li key={practice}>{practice}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Variations:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {element.variations.map((variation) => (
                      <li key={variation}>{variation}</li>
                    ))}
                  </ul>
                  <p><strong>Significance:</strong> {element.significance}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="styles">
          <div className="grid gap-4 md:grid-cols-2">
            {worshipStyles.map((style) => (
              <Card key={style.style}>
                <CardHeader>
                  <CardTitle>{style.style}</CardTitle>
                  <CardDescription>{style.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {style.characteristics.map((char) => (
                      <li key={char}>{char}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Elements:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {style.elements.map((element) => (
                      <li key={element}>{element}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Strengths:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {style.strengths.map((strength) => (
                      <li key={strength}>{strength}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5">
                    {style.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="seasons">
          <div className="grid gap-4 md:grid-cols-2">
            {liturgicalSeasons.map((season) => (
              <Card key={season.season}>
                <CardHeader>
                  <CardTitle>{season.season}</CardTitle>
                  <CardDescription>{season.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Themes:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {season.themes.map((theme) => (
                      <li key={theme}>{theme}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Practices:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {season.practices.map((practice) => (
                      <li key={practice}>{practice}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {season.significance.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Traditions:</h4>
                  <ul className="list-disc pl-5">
                    {season.traditions.map((tradition) => (
                      <li key={tradition}>{tradition}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources">
          <div className="grid gap-4 md:grid-cols-2">
            {worshipResources.map((resource) => (
              <Card key={resource.category}>
                <CardHeader>
                  <CardTitle>{resource.category}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Examples:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {resource.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Uses:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {resource.uses.map((use) => (
                      <li key={use}>{use}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Considerations:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {resource.considerations.map((consideration) => (
                      <li key={consideration}>{consideration}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Implementation:</h4>
                  <ul className="list-disc pl-5">
                    {resource.implementation.map((item) => (
                      <li key={item}>{item}</li>
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