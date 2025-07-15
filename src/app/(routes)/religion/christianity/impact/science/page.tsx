import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ScientificPeriod {
  era: string
  years: string
  description: string
  characteristics: string[]
  keyFigures: Array<{
    name: string
    contribution: string
    significance: string
    religiousContext: string
  }>
  developments: string[]
  impact: string
}

interface ScientificField {
  name: string
  description: string
  christianContributions: string[]
  keyDiscoveries: Array<{
    discovery: string
    discoverer: string
    year: string
    significance: string
  }>
  theologicalImplications: string[]
}

interface Debate {
  topic: string
  description: string
  christianPerspective: string[]
  scientificContext: string[]
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

interface ChristianScienceContent {
  introduction: string
  definition: string
  periods: ScientificPeriod[]
  fields: ScientificField[]
  debates: Debate[]
  contemporary: Contemporary[]
  impact: {
    scientific: string[]
    theological: string[]
    educational: string[]
  }
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Christianity's Impact on Science | Christianity",
  description: "Explore Christianity's profound influence on scientific development throughout history, from medieval universities to modern scientific inquiry.",
  openGraph: {
    title: "Christianity's Impact on Science | Christianity",
    description: "Comprehensive guide to Christian influence on scientific development",
    type: "website",
  },
}

const christianScienceContent: ChristianScienceContent = {
  introduction: `Christianity has played a pivotal role in the development of science, from the establishment of universities and the scientific method to the work of numerous Christian scientists who saw their research as a way to understand God's creation. This complex relationship has shaped both scientific inquiry and theological understanding.`,
  definition: `The interaction between Christianity and science encompasses both institutional support for scientific research and the philosophical framework that helped establish modern scientific methodology, along with ongoing dialogue between faith and reason in understanding the natural world.`,
  periods: [
    {
      era: "Early Christian and Medieval",
      years: "100-1400 CE",
      description: "Foundation period where Christian institutions preserved and advanced classical knowledge while developing new approaches to natural philosophy.",
      characteristics: [
        "Preservation of classical texts",
        "Monastic scholarship",
        "Cathedral schools",
        "University foundation",
        "Natural philosophy development"
      ],
      keyFigures: [
        {
          name: "Augustine of Hippo",
          contribution: "Integration of faith and reason",
          significance: "Established framework for scientific inquiry within Christian thought",
          religiousContext: "Emphasized God's rational ordering of creation"
        },
        {
          name: "Robert Grosseteste",
          contribution: "Scientific method foundations",
          significance: "Developed principles of experimental science",
          religiousContext: "Bishop who saw science as way to understand divine creation"
        }
      ],
      developments: [
        "Establishment of universities",
        "Development of logical analysis",
        "Preservation of Greek scientific texts",
        "Integration of Aristotelian natural philosophy",
        "Mathematical innovations"
      ],
      impact: "Created institutional and intellectual framework for scientific inquiry"
    },
    {
      era: "Renaissance and Scientific Revolution",
      years: "1400-1700 CE",
      description: "Period of major scientific advancement with significant Christian institutional support and theological engagement.",
      characteristics: [
        "Empirical observation",
        "Mathematical analysis",
        "Systematic experimentation",
        "Technological innovation",
        "Theological integration"
      ],
      keyFigures: [
        {
          name: "Nicolaus Copernicus",
          contribution: "Heliocentric theory",
          significance: "Revolutionary understanding of cosmic order",
          religiousContext: "Catholic cleric who saw divine order in mathematical harmony"
        },
        {
          name: "Johannes Kepler",
          contribution: "Laws of planetary motion",
          significance: "Mathematical description of planetary orbits",
          religiousContext: "Viewed science as understanding God's mathematical creation"
        }
      ],
      developments: [
        "Scientific method refinement",
        "Astronomical discoveries",
        "Mathematical physics",
        "Anatomical studies",
        "Natural history"
      ],
      impact: "Established modern scientific methodology and major theoretical frameworks"
    },
    {
      era: "Enlightenment to Modern",
      years: "1700-1900 CE",
      description: "Period of increasing specialization and professionalization of science, with ongoing Christian participation and support.",
      characteristics: [
        "Scientific specialization",
        "Professional institutions",
        "Technological advancement",
        "Educational expansion",
        "Methodological naturalism"
      ],
      keyFigures: [
        {
          name: "Michael Faraday",
          contribution: "Electromagnetic theory",
          significance: "Foundational work in electromagnetism",
          religiousContext: "Devout Christian who saw unity in natural laws"
        },
        {
          name: "Gregor Mendel",
          contribution: "Genetics foundations",
          significance: "Laws of inheritance",
          religiousContext: "Augustinian friar studying God's creation"
        }
      ],
      developments: [
        "Professional scientific societies",
        "Laboratory research",
        "Scientific publications",
        "Industrial applications",
        "Educational reform"
      ],
      impact: "Established modern scientific institutions and practices"
    },
    {
      era: "Contemporary",
      years: "1900-present",
      description: "Modern period of rapid scientific advancement and evolving dialogue between faith and science.",
      characteristics: [
        "Interdisciplinary research",
        "Ethical considerations",
        "Technological innovation",
        "Global collaboration",
        "Public engagement"
      ],
      keyFigures: [
        {
          name: "Georges Lemaître",
          contribution: "Big Bang theory",
          significance: "Cosmic expansion theory",
          religiousContext: "Catholic priest who integrated faith and cosmology"
        },
        {
          name: "Francis Collins",
          contribution: "Human Genome Project",
          significance: "Genetic mapping and research",
          religiousContext: "Integration of evolutionary biology and faith"
        }
      ],
      developments: [
        "Big Bang cosmology",
        "Genetic research",
        "Environmental science",
        "Bioethics",
        "Science-faith dialogue"
      ],
      impact: "Ongoing integration of scientific and religious perspectives"
    }
  ],
  fields: [
    {
      name: "Astronomy and Cosmology",
      description: "Study of celestial bodies and universe origins",
      christianContributions: [
        "Support for observatories",
        "Mathematical astronomy",
        "Cosmological theories",
        "Calendar development",
        "Big Bang theory"
      ],
      keyDiscoveries: [
        {
          discovery: "Heliocentric Theory",
          discoverer: "Nicolaus Copernicus",
          year: "1543",
          significance: "Revolutionary understanding of solar system"
        },
        {
          discovery: "Big Bang Theory",
          discoverer: "Georges Lemaître",
          year: "1927",
          significance: "Expanding universe theory"
        }
      ],
      theologicalImplications: [
        "Divine creation understanding",
        "Cosmic fine-tuning",
        "Universe temporality",
        "Human significance",
        "Natural theology"
      ]
    },
    {
      name: "Biology and Medicine",
      description: "Study of life and health sciences",
      christianContributions: [
        "Hospital development",
        "Medical education",
        "Genetics research",
        "Natural history",
        "Bioethics"
      ],
      keyDiscoveries: [
        {
          discovery: "Genetics Laws",
          discoverer: "Gregor Mendel",
          year: "1866",
          significance: "Foundation of modern genetics"
        },
        {
          discovery: "Human Genome",
          discoverer: "Francis Collins",
          year: "2003",
          significance: "Complete genetic mapping"
        }
      ],
      theologicalImplications: [
        "Human uniqueness",
        "Ethical considerations",
        "Environmental stewardship",
        "Medical ethics",
        "Evolution dialogue"
      ]
    }
  ],
  debates: [
    {
      topic: "Evolution and Creation",
      description: "Dialogue between evolutionary theory and creation accounts",
      christianPerspective: [
        "Various interpretative approaches",
        "Theistic evolution",
        "Divine guidance",
        "Natural processes",
        "Biblical interpretation"
      ],
      scientificContext: [
        "Natural selection",
        "Common descent",
        "Genetic evidence",
        "Fossil record",
        "Evolutionary mechanisms"
      ],
      resolution: "Many Christians accept evolutionary creation while maintaining divine role",
      impact: "Ongoing dialogue between faith and science"
    },
    {
      topic: "Cosmology and Creation",
      description: "Relationship between scientific cosmology and divine creation",
      christianPerspective: [
        "Divine creation",
        "Temporal beginning",
        "Fine-tuning",
        "Purpose and design",
        "Biblical cosmology"
      ],
      scientificContext: [
        "Big Bang theory",
        "Cosmic evolution",
        "Physical constants",
        "Multiverse theories",
        "Quantum origins"
      ],
      resolution: "Many see compatibility between scientific and theological accounts",
      impact: "Enhanced understanding of creation's complexity"
    }
  ],
  contemporary: [
    {
      area: "Science-Faith Integration",
      description: "Modern approaches to integrating scientific and religious understanding",
      currentTrends: [
        "Interdisciplinary dialogue",
        "Theological engagement",
        "Educational integration",
        "Public outreach",
        "Research programs"
      ],
      challenges: [
        "Methodological differences",
        "Cultural polarization",
        "Communication barriers",
        "Educational conflicts",
        "Public perception"
      ],
      opportunities: [
        "Collaborative research",
        "Ethical frameworks",
        "Educational development",
        "Public engagement",
        "Interdisciplinary insights"
      ],
      examples: [
        "Faith-science institutes",
        "University programs",
        "Research initiatives",
        "Public dialogues",
        "Educational resources"
      ]
    },
    {
      area: "Ethical Implications",
      description: "Christian perspectives on scientific ethics and applications",
      currentTrends: [
        "Bioethical concerns",
        "Environmental stewardship",
        "Technological ethics",
        "Research integrity",
        "Human dignity"
      ],
      challenges: [
        "Emerging technologies",
        "Ethical frameworks",
        "Policy development",
        "Cultural values",
        "Scientific applications"
      ],
      opportunities: [
        "Ethical guidance",
        "Policy development",
        "Public discourse",
        "Value integration",
        "Practical applications"
      ],
      examples: [
        "Bioethics committees",
        "Environmental initiatives",
        "Technology guidelines",
        "Research protocols",
        "Public policy"
      ]
    }
  ],
  impact: {
    scientific: [
      "Institutional development",
      "Methodological contributions",
      "Research support",
      "Educational advancement",
      "Ethical frameworks"
    ],
    theological: [
      "Natural theology",
      "Divine understanding",
      "Creation theology",
      "Ethical principles",
      "Faith-reason integration"
    ],
    educational: [
      "University establishment",
      "Scientific education",
      "Research programs",
      "Public understanding",
      "Interdisciplinary studies"
    ]
  },
  resources: [
    {
      title: "Science and Religion: A Historical Introduction",
      author: "Gary B. Ferngren",
      url: "/resources/science-religion-ferngren",
      type: "Book",
      description: "Comprehensive overview of science-religion interaction.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1421421720"
    },
    {
      title: "God's Philosophers: How the Medieval World Laid the Foundations of Modern Science",
      author: "James Hannam",
      url: "/resources/gods-philosophers-hannam",
      type: "Book",
      description: "Medieval Christian contributions to science.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1848311508"
    },
    {
      title: "The Language of God",
      author: "Francis Collins",
      url: "/resources/language-god-collins",
      type: "Book",
      description: "Modern perspective on faith-science integration.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1416542744"
    }
  ]
}

export default function ChristianSciencePage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Christianity's Impact on Science</h1>
        <p className="text-xl mb-4">{christianScienceContent.introduction}</p>
        <p className="text-lg mb-8">{christianScienceContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Historical Periods</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {christianScienceContent.periods.map((period, index) => (
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
                            {figure.religiousContext}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Developments:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {period.developments.map((dev, idx) => (
                        <li key={idx}>{dev}</li>
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
        <h2 className="text-3xl font-bold mb-4">Scientific Fields</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {christianScienceContent.fields.map((field, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{field.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{field.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Christian Contributions:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {field.christianContributions.map((contrib, idx) => (
                        <li key={idx}>{contrib}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Discoveries:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {field.keyDiscoveries.map((discovery, idx) => (
                        <li key={idx}>
                          <span className="font-medium">{discovery.discovery}</span>
                          <span className="text-slate-600 block text-sm">
                            by {discovery.discoverer}, {discovery.year}
                          </span>
                          <span className="text-slate-600 text-sm">
                            {discovery.significance}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Theological Implications:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {field.theologicalImplications.map((impl, idx) => (
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
          {christianScienceContent.debates.map((debate, index) => (
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
                    <h4 className="font-semibold mb-2">Scientific Context:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {debate.scientificContext.map((context, idx) => (
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
          {christianScienceContent.contemporary.map((cont, index) => (
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
              <CardTitle>Scientific Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {christianScienceContent.impact.scientific.map((item, idx) => (
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
                {christianScienceContent.impact.theological.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Educational Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {christianScienceContent.impact.educational.map((item, idx) => (
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
          {christianScienceContent.resources.map((resource, index) => (
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
          <Link href="/religion/christianity/impact/education" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore Christianity's influence on education.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/impact/philosophy" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover Christianity's impact on philosophical thought.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/christianity/beliefs/creation" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about Christian perspectives on creation.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 