import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PhilosophicalPeriod {
  era: string
  years: string
  description: string
  characteristics: string[]
  keyFigures: Array<{
    name: string
    contribution: string
    significance: string
    theologicalContext: string
  }>
  concepts: string[]
  impact: string
}

interface PhilosophicalTradition {
  name: string
  description: string
  christianElements: string[]
  keyIdeas: Array<{
    concept: string
    explanation: string
    significance: string
  }>
  theologicalImplications: string[]
}

interface PhilosophicalDebate {
  topic: string
  description: string
  christianPerspective: string[]
  philosophicalContext: string[]
  resolution: string
  impact: string
}

interface Contemporary {
  area: string
  description: string
  currentTrends: string[]
  challenges: string[]
  opportunities: string[]
  examples: string[]
}

interface Resource {
  title: string
  author: string
  url: string
  type: string
  description: string
  affiliate?: boolean
  affiliateUrl?: string
}

interface ChristianPhilosophyContent {
  introduction: string
  definition: string
  periods: PhilosophicalPeriod[]
  traditions: PhilosophicalTradition[]
  debates: PhilosophicalDebate[]
  contemporary: Contemporary[]
  impact: {
    philosophical: string[]
    theological: string[]
    cultural: string[]
  }
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Christianity's Impact on Philosophy | Christianity",
  description: "Explore Christianity's profound influence on philosophical thought throughout history, from ancient wisdom to contemporary discourse.",
  openGraph: {
    title: "Christianity's Impact on Philosophy | Christianity",
    description: "Comprehensive guide to Christian influence on philosophical thought",
    type: "website",
  },
}

const christianPhilosophyContent: ChristianPhilosophyContent = {
  introduction: `Christianity has profoundly shaped philosophical thought throughout history, introducing new concepts, reshaping ancient wisdom, and developing unique approaches to understanding reality, knowledge, ethics, and human nature. This influence continues to shape contemporary philosophical discourse.`,
  definition: `Christian philosophy encompasses both the philosophical traditions that have emerged within Christianity and the broader impact of Christian thought on philosophical inquiry, including metaphysics, epistemology, ethics, and other philosophical disciplines.`,
  periods: [
    {
      era: "Patristic Period",
      years: "100-450 CE",
      description: "Early Christian thinkers engaging with classical philosophy while developing distinctly Christian philosophical frameworks.",
      characteristics: [
        "Integration of faith and reason",
        "Engagement with Greek philosophy",
        "Development of systematic theology",
        "Apologetic discourse",
        "Moral philosophy"
      ],
      keyFigures: [
        {
          name: "Augustine of Hippo",
          contribution: "Synthesis of Platonism and Christianity",
          significance: "Foundational influence on Western philosophy",
          theologicalContext: "Developed Christian Platonism and theory of knowledge"
        },
        {
          name: "Justin Martyr",
          contribution: "Christian engagement with Greek philosophy",
          significance: "Bridge between classical and Christian thought",
          theologicalContext: "Logos doctrine and rational faith defense"
        }
      ],
      concepts: [
        "Divine illumination",
        "Evil as privation",
        "Time and eternity",
        "Free will",
        "Just war theory"
      ],
      impact: "Established foundation for Christian philosophical thought"
    },
    {
      era: "Medieval Scholasticism",
      years: "800-1400 CE",
      description: "Systematic development of Christian philosophy through rigorous logical analysis and synthesis with Aristotelian thought.",
      characteristics: [
        "Logical argumentation",
        "Systematic theology",
        "Aristotelian integration",
        "University development",
        "Philosophical theology"
      ],
      keyFigures: [
        {
          name: "Thomas Aquinas",
          contribution: "Synthesis of Aristotelian and Christian thought",
          significance: "Comprehensive philosophical-theological system",
          theologicalContext: "Natural theology and rational faith defense"
        },
        {
          name: "Anselm of Canterbury",
          contribution: "Ontological argument",
          significance: "Rational proofs for God's existence",
          theologicalContext: "Faith seeking understanding"
        }
      ],
      concepts: [
        "Natural law",
        "Analogical predication",
        "Essence and existence",
        "Divine simplicity",
        "Rational theology"
      ],
      impact: "Created comprehensive Christian philosophical framework"
    },
    {
      era: "Modern Period",
      years: "1400-1900 CE",
      description: "Christian philosophical engagement with modern thought, including rationalism, empiricism, and idealism.",
      characteristics: [
        "Epistemological focus",
        "Natural theology",
        "Moral philosophy",
        "Political theory",
        "Scientific integration"
      ],
      keyFigures: [
        {
          name: "Blaise Pascal",
          contribution: "Integration of faith and reason",
          significance: "Philosophical apologetics",
          theologicalContext: "Reason and religious experience"
        },
        {
          name: "Søren Kierkegaard",
          contribution: "Christian existentialism",
          significance: "Faith and subjective truth",
          theologicalContext: "Individual relationship with God"
        }
      ],
      concepts: [
        "Divine sovereignty",
        "Personal identity",
        "Religious epistemology",
        "Moral philosophy",
        "Existential faith"
      ],
      impact: "Developed modern Christian philosophical approaches"
    },
    {
      era: "Contemporary",
      years: "1900-present",
      description: "Modern engagement with analytical, continental, and postmodern philosophy from Christian perspectives.",
      characteristics: [
        "Analytical rigor",
        "Phenomenological analysis",
        "Hermeneutical approaches",
        "Interdisciplinary dialogue",
        "Cultural engagement"
      ],
      keyFigures: [
        {
          name: "Alvin Plantinga",
          contribution: "Reformed epistemology",
          significance: "Defense of religious knowledge",
          theologicalContext: "Warranted Christian belief"
        },
        {
          name: "Charles Taylor",
          contribution: "Secular age analysis",
          significance: "Understanding modern belief",
          theologicalContext: "Religious experience in secular age"
        }
      ],
      concepts: [
        "Religious epistemology",
        "Divine action",
        "Personal identity",
        "Moral realism",
        "Cultural analysis"
      ],
      impact: "Continues Christian philosophical engagement with contemporary thought"
    }
  ],
  traditions: [
    {
      name: "Natural Theology",
      description: "Philosophical approach to understanding God through reason and nature",
      christianElements: [
        "Rational arguments for God",
        "Natural law theory",
        "Divine attributes",
        "Creation theology",
        "Moral philosophy"
      ],
      keyIdeas: [
        {
          concept: "Five Ways",
          explanation: "Aquinas's arguments for God's existence",
          significance: "Rational demonstration of divine reality"
        },
        {
          concept: "Design Argument",
          explanation: "Inference to divine intelligence",
          significance: "Natural evidence for creation"
        }
      ],
      theologicalImplications: [
        "God's knowability",
        "Faith-reason relationship",
        "Divine attributes",
        "Creation order",
        "Moral law"
      ]
    },
    {
      name: "Christian Personalism",
      description: "Philosophical emphasis on human person and dignity",
      christianElements: [
        "Human dignity",
        "Personal God",
        "Relational reality",
        "Moral agency",
        "Social philosophy"
      ],
      keyIdeas: [
        {
          concept: "Person-centered ethics",
          explanation: "Human dignity as foundational",
          significance: "Basis for human rights"
        },
        {
          concept: "Communio personarum",
          explanation: "Community of persons",
          significance: "Social nature of humanity"
        }
      ],
      theologicalImplications: [
        "Image of God",
        "Human dignity",
        "Social nature",
        "Moral responsibility",
        "Divine-human relationship"
      ]
    }
  ],
  debates: [
    {
      topic: "Faith and Reason",
      description: "Relationship between religious faith and rational inquiry",
      christianPerspective: [
        "Complementary nature",
        "Faith seeking understanding",
        "Rational faith defense",
        "Divine illumination",
        "Natural knowledge"
      ],
      philosophicalContext: [
        "Epistemology",
        "Rationality",
        "Religious knowledge",
        "Truth claims",
        "Justified belief"
      ],
      resolution: "Various models of faith-reason integration",
      impact: "Ongoing dialogue between faith and philosophical inquiry"
    },
    {
      topic: "Divine Action and Human Freedom",
      description: "Relationship between divine sovereignty and human free will",
      christianPerspective: [
        "Compatibilism",
        "Libertarian freedom",
        "Divine providence",
        "Moral responsibility",
        "Grace and nature"
      ],
      philosophicalContext: [
        "Free will",
        "Determinism",
        "Moral responsibility",
        "Causation",
        "Agency"
      ],
      resolution: "Multiple theoretical frameworks proposed",
      impact: "Continued influence on free will debates"
    }
  ],
  contemporary: [
    {
      area: "Analytical Philosophy of Religion",
      description: "Modern analytical approaches to religious and theological questions",
      currentTrends: [
        "Reformed epistemology",
        "Divine attributes",
        "Religious experience",
        "Religious language",
        "Divine action"
      ],
      challenges: [
        "Religious pluralism",
        "Scientific naturalism",
        "Religious skepticism",
        "Cultural relativism",
        "Secularization"
      ],
      opportunities: [
        "Interdisciplinary dialogue",
        "New analytical tools",
        "Cultural engagement",
        "Theological development",
        "Apologetic approaches"
      ],
      examples: [
        "Divine hiddenness debates",
        "Religious epistemology",
        "Modal logic applications",
        "Divine attributes analysis",
        "Religious experience studies"
      ]
    },
    {
      area: "Ethics and Social Philosophy",
      description: "Christian perspectives on moral and social questions",
      currentTrends: [
        "Virtue ethics",
        "Social justice",
        "Environmental ethics",
        "Bioethics",
        "Political philosophy"
      ],
      challenges: [
        "Moral relativism",
        "Secular ethics",
        "Cultural changes",
        "Technological issues",
        "Social polarization"
      ],
      opportunities: [
        "Moral framework",
        "Social engagement",
        "Cultural dialogue",
        "Ethical guidance",
        "Policy development"
      ],
      examples: [
        "Bioethical debates",
        "Environmental stewardship",
        "Social justice initiatives",
        "Political theology",
        "Technology ethics"
      ]
    }
  ],
  impact: {
    philosophical: [
      "Epistemological frameworks",
      "Ethical systems",
      "Metaphysical concepts",
      "Political philosophy",
      "Personal identity theories"
    ],
    theological: [
      "Natural theology",
      "Systematic theology",
      "Moral theology",
      "Philosophical theology",
      "Apologetics"
    ],
    cultural: [
      "Educational institutions",
      "Ethical frameworks",
      "Political thought",
      "Human rights",
      "Social philosophy"
    ]
  },
  resources: [
    {
      title: "The Christian Philosophy Reader",
      author: "Craig A. Boyd",
      url: "/resources/christian-philosophy-boyd",
      type: "Book",
      description: "Comprehensive anthology of Christian philosophical texts.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0567031438"
    },
    {
      title: "A History of Christian Philosophy",
      author: "Étienne Gilson",
      url: "/resources/history-christian-philosophy-gilson",
      type: "Book",
      description: "Classic survey of Christian philosophical thought.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0394349024"
    },
    {
      title: "Faith and Reason",
      author: "Richard Swinburne",
      url: "/resources/faith-reason-swinburne",
      type: "Book",
      description: "Modern analysis of faith-reason relationship.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0199283923"
    }
  ]
}

export default function ChristianPhilosophyPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Christianity's Impact on Philosophy</h1>
        <p className="text-xl mb-4">{christianPhilosophyContent.introduction}</p>
        <p className="text-lg mb-8">{christianPhilosophyContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Historical Periods</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {christianPhilosophyContent.periods.map((period, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>
                  {period.era}
                  <span className="text-slate-600 text-sm block">
                    {period.years}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{period.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Characteristics:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {period.characteristics.map((char, idx) => (
                        <li key={idx}>{char}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Figures:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {period.keyFigures.map((figure, idx) => (
                        <li key={idx}>
                          <span className="font-medium">{figure.name}</span>
                          <span className="text-slate-600 block text-sm">
                            {figure.contribution}
                          </span>
                          <span className="text-slate-600 text-sm">
                            {figure.significance}
                          </span>
                          <span className="text-slate-600 italic text-sm">
                            {figure.theologicalContext}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Concepts:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {period.concepts.map((concept, idx) => (
                        <li key={idx}>{concept}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Impact:</h4>
                    <p className="text-slate-600">{period.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Philosophical Traditions</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {christianPhilosophyContent.traditions.map((tradition, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{tradition.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{tradition.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Christian Elements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {tradition.christianElements.map((element, idx) => (
                        <li key={idx}>{element}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Ideas:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {tradition.keyIdeas.map((idea, idx) => (
                        <li key={idx}>
                          <span className="font-medium">{idea.concept}</span>
                          <span className="text-slate-600 block text-sm">
                            {idea.explanation}
                          </span>
                          <span className="text-slate-600 text-sm">
                            {idea.significance}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Theological Implications:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {tradition.theologicalImplications.map((impl, idx) => (
                        <li key={idx}>{impl}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Key Debates</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {christianPhilosophyContent.debates.map((debate, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{debate.topic}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{debate.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Christian Perspective:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {debate.christianPerspective.map((persp, idx) => (
                        <li key={idx}>{persp}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Philosophical Context:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {debate.philosophicalContext.map((context, idx) => (
                        <li key={idx}>{context}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Resolution:</h4>
                    <p className="text-slate-600">{debate.resolution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Impact:</h4>
                    <p className="text-slate-600">{debate.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Contemporary Issues</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {christianPhilosophyContent.contemporary.map((cont, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{cont.area}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{cont.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Current Trends:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {cont.currentTrends.map((trend, idx) => (
                        <li key={idx}>{trend}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Challenges:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {cont.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Opportunities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {cont.opportunities.map((opportunity, idx) => (
                        <li key={idx}>{opportunity}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {cont.examples.map((example, idx) => (
                        <li key={idx}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Impact</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Philosophical Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {christianPhilosophyContent.impact.philosophical.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Theological Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {christianPhilosophyContent.impact.theological.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cultural Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {christianPhilosophyContent.impact.cultural.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Recommended Resources</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {christianPhilosophyContent.resources.map((resource, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
                <p className="text-sm text-slate-600">By {resource.author}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{resource.description}</p>
                <div className="space-x-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={resource.url}>Learn More</Link>
                  </Button>
                  {resource.affiliate && (
                    <Button asChild variant="default" size="sm">
                      <Link href={resource.affiliateUrl!} target="_blank" rel="noopener noreferrer">
                        View on Amazon
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Related Topics</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/religion/christianity/impact/theology" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Theology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore Christianity's systematic theological development.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/impact/science" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Science</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover Christianity's influence on scientific development.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/beliefs/reason" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Faith and Reason</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about Christian perspectives on faith and reason.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 