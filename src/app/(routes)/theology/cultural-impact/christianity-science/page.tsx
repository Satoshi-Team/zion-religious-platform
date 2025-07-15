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
  title: "Christianity and Science | Cultural Impact",
  description: "Comprehensive exploration of the relationship between Christianity and science throughout history, including contributions, dialogues, and contemporary perspectives.",
  keywords: [
    "Christianity and Science",
    "Religion and Science",
    "Scientific History",
    "Christian Scientists",
    "Faith and Reason",
    "Scientific Method",
    "Religious Scientists",
    "Science History",
    "Theology and Science",
    "Scientific Discovery"
  ]
}

interface HistoricalPeriod {
  period: string
  description: string
  developments: string[]
  figures: string[]
  contributions: string[]
  impact: string[]
}

interface ScientificField {
  field: string
  description: string
  discoveries: string[]
  scientists: string[]
  principles: string[]
  significance: string[]
}

interface DialogueArea {
  area: string
  description: string
  topics: string[]
  approaches: string[]
  challenges: string[]
  developments: string[]
}

interface ContemporaryIssue {
  issue: string
  description: string
  perspectives: string[]
  research: string[]
  implications: string[]
  responses: string[]
}

const historicalPeriods: HistoricalPeriod[] = [
  {
    period: "Medieval Science (500-1400)",
    description: "Scientific development in Christian monasteries and universities",
    developments: [
      "Natural philosophy",
      "Mathematical studies",
      "Astronomical observations",
      "Medical knowledge",
      "Technological innovations"
    ],
    figures: [
      "Roger Bacon",
      "Albert the Great",
      "Robert Grosseteste",
      "Nicole Oresme",
      "Hildegard of Bingen"
    ],
    contributions: [
      "Scientific method foundations",
      "Empirical observation",
      "Mathematical analysis",
      "Natural studies",
      "Medical advances"
    ],
    impact: [
      "University system",
      "Scientific inquiry",
      "Educational methods",
      "Technology development",
      "Medical practice"
    ]
  },
  {
    period: "Scientific Revolution (1500-1700)",
    description: "Major scientific advances by Christian scientists",
    developments: [
      "Heliocentric theory",
      "Laws of motion",
      "Calculus",
      "Experimental method",
      "Modern astronomy"
    ],
    figures: [
      "Nicolaus Copernicus",
      "Johannes Kepler",
      "Galileo Galilei",
      "Isaac Newton",
      "Robert Boyle"
    ],
    contributions: [
      "Scientific method",
      "Physical laws",
      "Mathematical tools",
      "Astronomical discoveries",
      "Chemical principles"
    ],
    impact: [
      "Modern science",
      "Research methods",
      "World understanding",
      "Technology advancement",
      "Educational reform"
    ]
  }
]

const scientificFields: ScientificField[] = [
  {
    field: "Physics and Astronomy",
    description: "Study of physical laws and cosmic phenomena",
    discoveries: [
      "Universal gravitation",
      "Laws of motion",
      "Planetary orbits",
      "Wave theory",
      "Electromagnetic theory"
    ],
    scientists: [
      "Isaac Newton",
      "James Clerk Maxwell",
      "Michael Faraday",
      "Georges Lemaître",
      "William Thomson (Lord Kelvin)"
    ],
    principles: [
      "Natural laws",
      "Mathematical description",
      "Empirical observation",
      "Universal constants",
      "Physical theories"
    ],
    significance: [
      "Universe understanding",
      "Technology development",
      "Scientific method",
      "Theological implications",
      "Cultural impact"
    ]
  },
  {
    field: "Biology and Medicine",
    description: "Study of life and health sciences",
    discoveries: [
      "Genetics principles",
      "Cell theory",
      "Microbiology",
      "Anatomy studies",
      "Medical treatments"
    ],
    scientists: [
      "Gregor Mendel",
      "Louis Pasteur",
      "Joseph Lister",
      "George Washington Carver",
      "Francis Collins"
    ],
    principles: [
      "Scientific observation",
      "Experimental method",
      "Ethical research",
      "Medical care",
      "Life stewardship"
    ],
    significance: [
      "Health advancement",
      "Disease understanding",
      "Medical ethics",
      "Life sciences",
      "Healthcare development"
    ]
  }
]

const dialogueAreas: DialogueArea[] = [
  {
    area: "Origins and Evolution",
    description: "Dialogue between creation accounts and evolutionary theory",
    topics: [
      "Creation interpretation",
      "Evolutionary processes",
      "Human origins",
      "Biblical hermeneutics",
      "Scientific evidence"
    ],
    approaches: [
      "Theistic evolution",
      "Intelligent design",
      "Concordism",
      "Complementary view",
      "Integration models"
    ],
    challenges: [
      "Biblical interpretation",
      "Scientific data",
      "Theological implications",
      "Methodological issues",
      "Cultural tensions"
    ],
    developments: [
      "New research",
      "Theological insights",
      "Dialogue forums",
      "Educational resources",
      "Public engagement"
    ]
  },
  {
    area: "Cosmology and Creation",
    description: "Dialogue between Big Bang theory and creation theology",
    topics: [
      "Universe origins",
      "Cosmic fine-tuning",
      "Time and eternity",
      "Divine action",
      "Natural laws"
    ],
    approaches: [
      "Scientific research",
      "Theological reflection",
      "Philosophical analysis",
      "Interdisciplinary dialogue",
      "Public education"
    ],
    challenges: [
      "Technical complexity",
      "Philosophical questions",
      "Methodological limits",
      "Communication issues",
      "Cultural concerns"
    ],
    developments: [
      "New discoveries",
      "Theoretical advances",
      "Dialogue initiatives",
      "Educational programs",
      "Public understanding"
    ]
  }
]

const contemporaryIssues: ContemporaryIssue[] = [
  {
    issue: "Bioethics",
    description: "Ethical implications of biological and medical advances",
    perspectives: [
      "Christian ethics",
      "Scientific research",
      "Medical practice",
      "Human dignity",
      "Moral principles"
    ],
    research: [
      "Genetic studies",
      "Medical trials",
      "Ethical frameworks",
      "Policy analysis",
      "Case studies"
    ],
    implications: [
      "Healthcare policy",
      "Research ethics",
      "Medical practice",
      "Social impact",
      "Cultural values"
    ],
    responses: [
      "Ethical guidelines",
      "Policy development",
      "Public dialogue",
      "Professional training",
      "Community engagement"
    ]
  },
  {
    issue: "Environmental Science",
    description: "Christian perspectives on environmental stewardship",
    perspectives: [
      "Creation care",
      "Environmental ethics",
      "Scientific research",
      "Stewardship",
      "Sustainability"
    ],
    research: [
      "Climate studies",
      "Ecological research",
      "Conservation work",
      "Impact assessment",
      "Solution development"
    ],
    implications: [
      "Environmental policy",
      "Resource management",
      "Social responsibility",
      "Global impact",
      "Future generations"
    ],
    responses: [
      "Conservation efforts",
      "Policy advocacy",
      "Education programs",
      "Community action",
      "Global initiatives"
    ]
  }
]

export default function ChristianitySciencePage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Christianity and Science</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="historical">Historical</TabsTrigger>
          <TabsTrigger value="fields">Scientific Fields</TabsTrigger>
          <TabsTrigger value="dialogue">Dialogue</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Christianity's Relationship with Science</CardTitle>
              <CardDescription>
                The historical and ongoing interaction between Christian faith and scientific inquiry
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Christianity has played a significant role in the development of
                science, with many pioneering scientists being motivated by their
                Christian faith and understanding of God's creation.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="historical">
          <div className="grid gap-4 md:grid-cols-2">
            {historicalPeriods.map((period) => (
              <Card key={period.period}>
                <CardHeader>
                  <CardTitle>{period.period}</CardTitle>
                  <CardDescription>{period.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Developments:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {period.developments.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Key Figures:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {period.figures.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Contributions:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {period.contributions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Impact:</h4>
                  <ul className="list-disc pl-5">
                    {period.impact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="fields">
          <div className="grid gap-4 md:grid-cols-2">
            {scientificFields.map((field) => (
              <Card key={field.field}>
                <CardHeader>
                  <CardTitle>{field.field}</CardTitle>
                  <CardDescription>{field.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Discoveries:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {field.discoveries.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Scientists:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {field.scientists.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Principles:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {field.principles.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-5">
                    {field.significance.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="dialogue">
          <div className="grid gap-4 md:grid-cols-2">
            {dialogueAreas.map((area) => (
              <Card key={area.area}>
                <CardHeader>
                  <CardTitle>{area.area}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Topics:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {area.topics.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Approaches:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {area.approaches.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Challenges:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {area.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Developments:</h4>
                  <ul className="list-disc pl-5">
                    {area.developments.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="contemporary">
          <div className="grid gap-4 md:grid-cols-2">
            {contemporaryIssues.map((issue) => (
              <Card key={issue.issue}>
                <CardHeader>
                  <CardTitle>{issue.issue}</CardTitle>
                  <CardDescription>{issue.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold">Perspectives:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {issue.perspectives.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Research:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {issue.research.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Implications:</h4>
                  <ul className="list-disc pl-5 mb-2">
                    {issue.implications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold">Responses:</h4>
                  <ul className="list-disc pl-5">
                    {issue.responses.map((item) => (
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