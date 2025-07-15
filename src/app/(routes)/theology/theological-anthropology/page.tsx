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
  title: "Theological Anthropology | Christian Understanding of Human Nature",
  description: "Comprehensive exploration of theological anthropology, including human nature, purpose, and relationship with God.",
  keywords: [
    "Theological Anthropology",
    "Image of God",
    "Human Nature",
    "Original Sin",
    "Free Will",
    "Human Purpose",
    "Christian Anthropology"
  ]
}

interface DoctrinalConcept {
  concept: string
  definition: string
  biblicalBasis: string[]
  theologicalImplications: string[]
}

interface HumanFaculty {
  faculty: string
  description: string
  biblicalPerspective: string
  implications: string[]
}

interface Relationship {
  dimension: string
  description: string
  aspects: string[]
  significance: string
}

interface Perspective {
  tradition: string
  mainEmphasis: string
  keyThinkers: string[]
  distinctives: string[]
}

const doctrinalConcepts: DoctrinalConcept[] = [
  {
    concept: "Image of God (Imago Dei)",
    definition: "Humans created in God's image, reflecting divine attributes and purpose",
    biblicalBasis: [
      "Genesis 1:26-27",
      "Colossians 3:10",
      "James 3:9"
    ],
    theologicalImplications: [
      "Human dignity and worth",
      "Moral responsibility",
      "Capacity for relationship with God",
      "Cultural mandate"
    ]
  },
  {
    concept: "Original Sin",
    definition: "The universal human condition of sinfulness inherited from Adam",
    biblicalBasis: [
      "Romans 5:12-21",
      "Psalm 51:5",
      "Genesis 3"
    ],
    theologicalImplications: [
      "Universal human sinfulness",
      "Need for redemption",
      "Moral inability apart from grace",
      "Effects on human nature"
    ]
  },
  {
    concept: "Free Will and Grace",
    definition: "The relationship between human freedom and divine grace",
    biblicalBasis: [
      "Philippians 2:12-13",
      "John 6:44",
      "Romans 9:16"
    ],
    theologicalImplications: [
      "Nature of human choice",
      "Role of divine grace",
      "Responsibility and accountability",
      "Salvation process"
    ]
  }
]

const humanFaculties: HumanFaculty[] = [
  {
    faculty: "Reason",
    description: "Human capacity for rational thought and understanding",
    biblicalPerspective: "Gift from God for understanding truth and making moral decisions",
    implications: [
      "Ability to know God",
      "Moral reasoning",
      "Scientific investigation",
      "Philosophical reflection"
    ]
  },
  {
    faculty: "Will",
    description: "Capacity for voluntary choice and decision-making",
    biblicalPerspective: "Affected by sin but responsible before God",
    implications: [
      "Moral responsibility",
      "Personal agency",
      "Relationship with God",
      "Ethical decisions"
    ]
  },
  {
    faculty: "Emotions",
    description: "Affective capacity for feeling and responding",
    biblicalPerspective: "God-given capacity for relationship and worship",
    implications: [
      "Worship and devotion",
      "Interpersonal relationships",
      "Moral sensitivity",
      "Spiritual experience"
    ]
  }
]

const relationships: Relationship[] = [
  {
    dimension: "Relationship with God",
    description: "The primary relationship for which humans were created",
    aspects: [
      "Worship and devotion",
      "Communion and prayer",
      "Obedience and service",
      "Knowledge and love"
    ],
    significance: "Fundamental to human purpose and fulfillment"
  },
  {
    dimension: "Relationship with Others",
    description: "Social dimension of human existence",
    aspects: [
      "Family relationships",
      "Community life",
      "Social responsibility",
      "Church fellowship"
    ],
    significance: "Essential expression of love and image-bearing"
  },
  {
    dimension: "Relationship with Creation",
    description: "Human responsibility for creation",
    aspects: [
      "Stewardship",
      "Cultural development",
      "Environmental care",
      "Scientific exploration"
    ],
    significance: "Fulfillment of cultural mandate and creation care"
  }
]

const theologicalPerspectives: Perspective[] = [
  {
    tradition: "Reformed",
    mainEmphasis: "Total depravity and divine sovereignty",
    keyThinkers: [
      "John Calvin",
      "Herman Bavinck",
      "Karl Barth"
    ],
    distinctives: [
      "Emphasis on divine initiative",
      "Radical effects of sin",
      "Covenant theology",
      "Cultural engagement"
    ]
  },
  {
    tradition: "Catholic",
    mainEmphasis: "Natural law and grace building on nature",
    keyThinkers: [
      "Thomas Aquinas",
      "Karl Rahner",
      "Hans Urs von Balthasar"
    ],
    distinctives: [
      "Natural law theory",
      "Grace perfecting nature",
      "Sacramental anthropology",
      "Rational capacity"
    ]
  }
]

export default function TheologicalAnthropologyPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Theological Anthropology</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="concepts">Key Concepts</TabsTrigger>
          <TabsTrigger value="faculties">Human Faculties</TabsTrigger>
          <TabsTrigger value="relationships">Relationships</TabsTrigger>
          <TabsTrigger value="perspectives">Perspectives</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Understanding Theological Anthropology</CardTitle>
              <CardDescription>
                The Christian doctrine of human nature and purpose
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Theological anthropology explores the Christian understanding of
                human nature, purpose, and destiny. It examines what it means to be
                human in light of divine revelation, addressing questions of
                identity, purpose, sin, and redemption.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="concepts">
          <div className="grid gap-4 md:grid-cols-2">
            {doctrinalConcepts.map((concept) => (
              <Card key={concept.concept}>
                <CardHeader>
                  <CardTitle>{concept.concept}</CardTitle>
                  <CardDescription>{concept.definition}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Biblical Basis:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {concept.biblicalBasis.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Implications:</h4>
                  <ul className="list-disc pl-5">
                    {concept.theologicalImplications.map((implication) => (
                      <li key={implication}>{implication}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="faculties">
          <div className="grid gap-4 md:grid-cols-2">
            {humanFaculties.map((faculty) => (
              <Card key={faculty.faculty}>
                <CardHeader>
                  <CardTitle>{faculty.faculty}</CardTitle>
                  <CardDescription>{faculty.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2"><strong>Biblical Perspective:</strong> {faculty.biblicalPerspective}</p>
                  <h4 className="font-semibold">Implications:</h4>
                  <ul className="list-disc pl-5">
                    {faculty.implications.map((implication) => (
                      <li key={implication}>{implication}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="relationships">
          <div className="grid gap-4 md:grid-cols-2">
            {relationships.map((relationship) => (
              <Card key={relationship.dimension}>
                <CardHeader>
                  <CardTitle>{relationship.dimension}</CardTitle>
                  <CardDescription>{relationship.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Aspects:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {relationship.aspects.map((aspect) => (
                      <li key={aspect}>{aspect}</li>
                    ))}
                  </ul>
                  <p><strong>Significance:</strong> {relationship.significance}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="perspectives">
          <div className="grid gap-4 md:grid-cols-2">
            {theologicalPerspectives.map((perspective) => (
              <Card key={perspective.tradition}>
                <CardHeader>
                  <CardTitle>{perspective.tradition}</CardTitle>
                  <CardDescription>{perspective.mainEmphasis}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Key Thinkers:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {perspective.keyThinkers.map((thinker) => (
                      <li key={thinker}>{thinker}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Distinctive Elements:</h4>
                  <ul className="list-disc pl-5">
                    {perspective.distinctives.map((distinctive) => (
                      <li key={distinctive}>{distinctive}</li>
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