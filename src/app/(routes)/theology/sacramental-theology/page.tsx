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
  title: "Sacramental Theology | Christian Sacraments and Sacred Actions",
  description: "Comprehensive exploration of Christian sacramental theology, including the nature, meaning, and practice of sacraments.",
  keywords: [
    "Sacramental Theology",
    "Christian Sacraments",
    "Baptism",
    "Eucharist",
    "Sacred Signs",
    "Liturgical Theology",
    "Grace"
  ]
}

interface Sacrament {
  name: string
  definition: string
  biblicalFoundation: string[]
  theologicalMeaning: string[]
  practice: string[]
  effects: string[]
}

interface Tradition {
  name: string
  sacramentalView: string
  numberOfSacraments: number
  distinctives: string[]
  keyTheologians: string[]
}

interface TheologicalTheme {
  theme: string
  description: string
  implications: string[]
  biblicalBasis: string[]
}

interface LiturgicalElement {
  element: string
  description: string
  significance: string[]
  practice: string[]
}

const sacraments: Sacrament[] = [
  {
    name: "Baptism",
    definition: "Sacrament of initiation and regeneration through water",
    biblicalFoundation: [
      "Matthew 28:19-20",
      "Acts 2:38",
      "Romans 6:3-4",
      "Colossians 2:12"
    ],
    theologicalMeaning: [
      "Death and resurrection with Christ",
      "Incorporation into Christ's body",
      "Washing away of sin",
      "Gift of the Holy Spirit"
    ],
    practice: [
      "Immersion or pouring of water",
      "Trinitarian formula",
      "Church community context",
      "Faith response"
    ],
    effects: [
      "Regeneration",
      "Church membership",
      "Forgiveness of sins",
      "New identity in Christ"
    ]
  },
  {
    name: "Eucharist",
    definition: "Sacrament of Christ's body and blood under forms of bread and wine",
    biblicalFoundation: [
      "Matthew 26:26-28",
      "1 Corinthians 11:23-26",
      "John 6:53-58"
    ],
    theologicalMeaning: [
      "Real presence of Christ",
      "Memorial of Christ's sacrifice",
      "Communion with Christ and Church",
      "Eschatological anticipation"
    ],
    practice: [
      "Breaking of bread",
      "Words of institution",
      "Communal celebration",
      "Regular observance"
    ],
    effects: [
      "Spiritual nourishment",
      "Unity with Christ",
      "Church fellowship",
      "Sanctifying grace"
    ]
  }
]

const traditions: Tradition[] = [
  {
    name: "Roman Catholic",
    sacramentalView: "Seven sacraments as efficacious signs of grace",
    numberOfSacraments: 7,
    distinctives: [
      "Ex opere operato efficacy",
      "Sacerdotal priesthood",
      "Transubstantiation",
      "Apostolic succession"
    ],
    keyTheologians: [
      "Thomas Aquinas",
      "Council of Trent",
      "Karl Rahner"
    ]
  },
  {
    name: "Reformed",
    sacramentalView: "Signs and seals of God's covenant promises",
    numberOfSacraments: 2,
    distinctives: [
      "Spiritual presence in Eucharist",
      "Covenant emphasis",
      "Word and sacrament unity",
      "Faith requirement"
    ],
    keyTheologians: [
      "John Calvin",
      "Heinrich Bullinger",
      "Herman Bavinck"
    ]
  },
  {
    name: "Orthodox",
    sacramentalView: "Divine mysteries conveying grace",
    numberOfSacraments: 7,
    distinctives: [
      "Mystery emphasis",
      "Theosis connection",
      "Liturgical context",
      "Pneumatological focus"
    ],
    keyTheologians: [
      "John of Damascus",
      "Nicholas Cabasilas",
      "Alexander Schmemann"
    ]
  }
]

const theologicalThemes: TheologicalTheme[] = [
  {
    theme: "Divine Grace",
    description: "Sacraments as means of grace conveying divine life",
    implications: [
      "God's initiative in salvation",
      "Visible signs of invisible grace",
      "Efficacious symbols",
      "Church as sacramental community"
    ],
    biblicalBasis: [
      "Ephesians 2:8-9",
      "John 1:16",
      "Titus 3:5-7"
    ]
  },
  {
    theme: "Church Unity",
    description: "Sacraments as bonds of unity in the church",
    implications: [
      "Common participation",
      "Shared faith expression",
      "Ecclesial communion",
      "Visible unity signs"
    ],
    biblicalBasis: [
      "1 Corinthians 10:16-17",
      "Ephesians 4:4-6",
      "Acts 2:42"
    ]
  }
]

const liturgicalElements: LiturgicalElement[] = [
  {
    element: "Matter",
    description: "Physical elements used in sacramental celebration",
    significance: [
      "Creation's goodness",
      "Incarnational principle",
      "Divine use of material",
      "Symbolic meaning"
    ],
    practice: [
      "Water in baptism",
      "Bread and wine in Eucharist",
      "Oil in anointing",
      "Proper material requirements"
    ]
  },
  {
    element: "Form",
    description: "Essential words and actions in sacramental celebration",
    significance: [
      "Divine institution",
      "Church's faith expression",
      "Efficacious formula",
      "Theological meaning"
    ],
    practice: [
      "Trinitarian formula in baptism",
      "Words of institution in Eucharist",
      "Proper minister",
      "Intentional celebration"
    ]
  }
]

export default function SacramentalTheologyPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Sacramental Theology</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sacraments">Sacraments</TabsTrigger>
          <TabsTrigger value="traditions">Traditions</TabsTrigger>
          <TabsTrigger value="themes">Themes</TabsTrigger>
          <TabsTrigger value="liturgical">Liturgical Elements</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Understanding Sacramental Theology</CardTitle>
              <CardDescription>
                The study of sacraments as means of grace and divine presence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Sacramental theology explores the nature, meaning, and practice of
                Christian sacraments as visible signs of invisible grace. It examines
                how God uses material elements and ritual actions to convey spiritual
                reality and divine presence.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sacraments">
          <div className="grid gap-4 md:grid-cols-2">
            {sacraments.map((sacrament) => (
              <Card key={sacrament.name}>
                <CardHeader>
                  <CardTitle>{sacrament.name}</CardTitle>
                  <CardDescription>{sacrament.definition}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Biblical Foundation:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {sacrament.biblicalFoundation.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Theological Meaning:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {sacrament.theologicalMeaning.map((meaning) => (
                      <li key={meaning}>{meaning}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Practice:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {sacrament.practice.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Effects:</h4>
                  <ul className="list-disc pl-5">
                    {sacrament.effects.map((effect) => (
                      <li key={effect}>{effect}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="traditions">
          <div className="grid gap-4 md:grid-cols-2">
            {traditions.map((tradition) => (
              <Card key={tradition.name}>
                <CardHeader>
                  <CardTitle>{tradition.name}</CardTitle>
                  <CardDescription>{tradition.sacramentalView}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">
                    <strong>Number of Sacraments:</strong> {tradition.numberOfSacraments}
                  </p>
                  <h4 className="font-semibold">Distinctives:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {tradition.distinctives.map((distinctive) => (
                      <li key={distinctive}>{distinctive}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Key Theologians:</h4>
                  <ul className="list-disc pl-5">
                    {tradition.keyTheologians.map((theologian) => (
                      <li key={theologian}>{theologian}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="themes">
          <div className="grid gap-4 md:grid-cols-2">
            {theologicalThemes.map((theme) => (
              <Card key={theme.theme}>
                <CardHeader>
                  <CardTitle>{theme.theme}</CardTitle>
                  <CardDescription>{theme.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Implications:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {theme.implications.map((implication) => (
                      <li key={implication}>{implication}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Biblical Basis:</h4>
                  <ul className="list-disc pl-5">
                    {theme.biblicalBasis.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="liturgical">
          <div className="grid gap-4 md:grid-cols-2">
            {liturgicalElements.map((element) => (
              <Card key={element.element}>
                <CardHeader>
                  <CardTitle>{element.element}</CardTitle>
                  <CardDescription>{element.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {element.significance.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Practice:</h4>
                  <ul className="list-disc pl-5">
                    {element.practice.map((item) => (
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