import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface FiqhSchool {
  name: string
  arabicName: string
  founder: {
    name: string
    arabicName: string
    period: string
    biography: string
  }
  methodology: string[]
  keyPrinciples: string[]
  distinctiveFeatures: string[]
  geographicalInfluence: string[]
  majorWorks: Array<{
    title: string
    author: string
    description: string
  }>
}

interface LegalCategory {
  name: string
  arabicName: string
  description: string
  subcategories: Array<{
    name: string
    arabicName: string
    description: string
    examples: string[]
  }>
  principles: string[]
  sources: Array<{
    type: string
    reference: string
    explanation: string
  }>
}

interface Methodology {
  name: string
  arabicName: string
  description: string
  principles: string[]
  application: string[]
  examples: string[]
}

interface Contemporary {
  aspect: string
  description: string
  challenges: string[]
  solutions: string[]
  examples: string[]
  scholarlyViews: Array<{
    perspective: string
    reasoning: string
    implications: string[]
  }>
}

interface Resource {
  title: string
  author: string
  url: string
  type: string
  description: string
  language: string
  level: string
  affiliate?: boolean
  affiliateUrl?: string
}

interface FiqhContent {
  introduction: string
  definition: string
  importance: string[]
  schools: FiqhSchool[]
  categories: LegalCategory[]
  methodology: Methodology[]
  contemporary: Contemporary[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Islamic Jurisprudence (Fiqh) | Islamic Studies",
  description: "Comprehensive exploration of Islamic Jurisprudence (Fiqh), its schools, methodology, and contemporary applications.",
  openGraph: {
    title: "Islamic Jurisprudence (Fiqh) | Islamic Studies",
    description: "In-depth study of Islamic legal theory and practice",
    type: "website",
  },
}

const fiqhContent: FiqhContent = {
  introduction: `Islamic Jurisprudence (Fiqh) represents the human understanding and practical application of Islamic law (Shariah). It is a comprehensive system that guides Muslims in their religious, personal, social, and economic affairs.`,
  definition: `Fiqh, linguistically meaning 'deep understanding', is the detailed study of Islamic law derived from the Quran and Sunnah. It encompasses the methodology of deriving legal rulings and the practical rulings themselves across all aspects of Muslim life.`,
  importance: [
    "Practical implementation of divine guidance",
    "Framework for individual and communal Muslim life",
    "Methodology for addressing new issues",
    "Preservation of Islamic legal tradition",
    "Bridge between revelation and practical application"
  ],
  schools: [
    {
      name: "Hanafi School",
      arabicName: "المذهب الحنفي",
      founder: {
        name: "Abu Hanifa",
        arabicName: "أبو حنيفة",
        period: "699-767 CE",
        biography: "Known as the Great Imam, pioneered systematic legal reasoning"
      },
      methodology: [
        "Emphasis on rational deduction",
        "Consideration of local customs",
        "Systematic qiyas (analogical reasoning)",
        "Preference for established practice",
        "Flexible legal solutions"
      ],
      keyPrinciples: [
        "Istihsan (juristic preference)",
        "Urf (custom) consideration",
        "Systematic qiyas application",
        "Gradualist approach",
        "Pragmatic solutions"
      ],
      distinctiveFeatures: [
        "Emphasis on reason",
        "Systematic legal theory",
        "Flexible methodology",
        "Commercial law development",
        "Urban context adaptation"
      ],
      geographicalInfluence: [
        "Turkey",
        "South Asia",
        "Central Asia",
        "Balkans",
        "Parts of Middle East"
      ],
      majorWorks: [
        {
          title: "Al-Hidayah",
          author: "Al-Marghinani",
          description: "Comprehensive Hanafi law manual"
        },
        {
          title: "Kitab al-Asl",
          author: "Muhammad al-Shaybani",
          description: "Foundational legal texts"
        }
      ]
    },
    {
      name: "Maliki School",
      arabicName: "المذهب المالكي",
      founder: {
        name: "Malik ibn Anas",
        arabicName: "مالك بن أنس",
        period: "711-795 CE",
        biography: "Scholar of Medina, emphasized Prophetic traditions and Medinan practice"
      },
      methodology: [
        "Emphasis on Medinan practice",
        "Strong hadith foundation",
        "Consideration of public interest",
        "Custom integration",
        "Practical approach"
      ],
      keyPrinciples: [
        "Amal Ahl al-Madinah (Medinan practice)",
        "Maslahah (public interest)",
        "Sadd al-Dhara'i (blocking means)",
        "Urf consideration",
        "Istislah (public good)"
      ],
      distinctiveFeatures: [
        "Medinan tradition emphasis",
        "Practical solutions",
        "Social context consideration",
        "Strong hadith foundation",
        "Public interest focus"
      ],
      geographicalInfluence: [
        "North Africa",
        "West Africa",
        "Parts of Egypt",
        "Sudan",
        "UAE"
      ],
      majorWorks: [
        {
          title: "Al-Muwatta",
          author: "Imam Malik",
          description: "First systematic legal text"
        },
        {
          title: "Al-Mudawwana",
          author: "Sahnun",
          description: "Comprehensive Maliki manual"
        }
      ]
    }
  ],
  categories: [
    {
      name: "Acts of Worship",
      arabicName: "العبادات",
      description: "Regulations governing religious practices and rituals",
      subcategories: [
        {
          name: "Purification",
          arabicName: "الطهارة",
          description: "Rules of ritual purity",
          examples: [
            "Wudu (ablution)",
            "Ghusl (ritual bath)",
            "Tayammum (dry ablution)",
            "Water classifications"
          ]
        },
        {
          name: "Prayer",
          arabicName: "الصلاة",
          description: "Obligatory and voluntary prayers",
          examples: [
            "Daily prayers",
            "Friday prayer",
            "Eid prayers",
            "Funeral prayer"
          ]
        }
      ],
      principles: [
        "Divine prescription",
        "Intention requirement",
        "Specific conditions",
        "Time sensitivity",
        "Regular performance"
      ],
      sources: [
        {
          type: "Quran",
          reference: "2:43",
          explanation: "Establishment of prayer obligation"
        },
        {
          type: "Hadith",
          reference: "Bukhari",
          explanation: "Detailed prayer instructions"
        }
      ]
    },
    {
      name: "Transactions",
      arabicName: "المعاملات",
      description: "Rules governing social and commercial interactions",
      subcategories: [
        {
          name: "Sales",
          arabicName: "البيوع",
          description: "Commercial transaction rules",
          examples: [
            "Contract conditions",
            "Prohibited transactions",
            "Trade ethics",
            "Market regulations"
          ]
        },
        {
          name: "Partnership",
          arabicName: "الشركة",
          description: "Business partnership regulations",
          examples: [
            "Types of partnerships",
            "Profit sharing",
            "Liability rules",
            "Dissolution procedures"
          ]
        }
      ],
      principles: [
        "Mutual consent",
        "Clear terms",
        "Absence of harm",
        "Risk sharing",
        "Ethical conduct"
      ],
      sources: [
        {
          type: "Quran",
          reference: "2:275",
          explanation: "Trade permissibility"
        },
        {
          type: "Hadith",
          reference: "Muslim",
          explanation: "Business ethics guidelines"
        }
      ]
    }
  ],
  methodology: [
    {
      name: "Legal Theory",
      arabicName: "أصول الفقه",
      description: "Principles and methodology of deriving legal rulings",
      principles: [
        "Textual interpretation",
        "Consensus consideration",
        "Analogical reasoning",
        "Public interest",
        "Custom integration"
      ],
      application: [
        "Source analysis",
        "Rule derivation",
        "Case comparison",
        "Context consideration",
        "Precedent application"
      ],
      examples: [
        "Quranic exegesis",
        "Hadith authentication",
        "Legal analogy",
        "Consensus verification",
        "Custom evaluation"
      ]
    },
    {
      name: "Legal Maxims",
      arabicName: "القواعد الفقهية",
      description: "General principles governing legal rulings",
      principles: [
        "Intention consideration",
        "Harm prevention",
        "Certainty preference",
        "Hardship removal",
        "Custom authority"
      ],
      application: [
        "Case analysis",
        "Rule application",
        "Exception identification",
        "Context evaluation",
        "Solution development"
      ],
      examples: [
        "Necessity exceptions",
        "Harm prevention cases",
        "Custom application",
        "Hardship relief",
        "Intention evaluation"
      ]
    }
  ],
  contemporary: [
    {
      aspect: "Modern Issues",
      description: "Application of Islamic law to contemporary challenges",
      challenges: [
        "Technological advancement",
        "Global finance",
        "Medical ethics",
        "Environmental issues",
        "Social changes"
      ],
      solutions: [
        "Collective ijtihad",
        "Interdisciplinary approach",
        "Contextual analysis",
        "Principle application",
        "Expert consultation"
      ],
      examples: [
        "Digital currencies",
        "Genetic engineering",
        "Environmental protection",
        "Modern contracts",
        "Social media"
      ],
      scholarlyViews: [
        {
          perspective: "Traditional application",
          reasoning: "Direct principle application",
          implications: [
            "Conservative approach",
            "Established methods",
            "Limited adaptation"
          ]
        },
        {
          perspective: "Contemporary adaptation",
          reasoning: "Context-based solutions",
          implications: [
            "Modern application",
            "Flexible approach",
            "Broader consideration"
          ]
        }
      ]
    },
    {
      aspect: "Minority Fiqh",
      description: "Islamic law application in non-Muslim societies",
      challenges: [
        "Legal system differences",
        "Cultural variations",
        "Religious freedom",
        "Integration issues",
        "Identity preservation"
      ],
      solutions: [
        "Contextual rulings",
        "Balance approach",
        "Local consideration",
        "Practical solutions",
        "Community guidance"
      ],
      examples: [
        "Financial transactions",
        "Marriage regulations",
        "Food requirements",
        "Social integration",
        "Religious practice"
      ],
      scholarlyViews: [
        {
          perspective: "Integration focus",
          reasoning: "Balanced participation",
          implications: [
            "Social harmony",
            "Legal compliance",
            "Identity preservation"
          ]
        },
        {
          perspective: "Traditional preservation",
          reasoning: "Core practice maintenance",
          implications: [
            "Religious authenticity",
            "Community cohesion",
            "Cultural distinction"
          ]
        }
      ]
    }
  ],
  resources: [
    {
      title: "Islamic Jurisprudence According to the Four Schools",
      author: "Abd al-Rahman al-Jaziri",
      url: "/resources/four-schools",
      type: "Book",
      description: "Comprehensive comparison of major schools.",
      language: "Arabic/English",
      level: "Advanced",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1590080114"
    },
    {
      title: "Principles of Islamic Jurisprudence",
      author: "Mohammad Hashim Kamali",
      url: "/resources/principles-fiqh",
      type: "Book",
      description: "Detailed study of legal methodology.",
      language: "English",
      level: "Intermediate",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0946621810"
    },
    {
      title: "Contemporary Fiqh Issues",
      author: "Various Scholars",
      url: "/resources/contemporary-fiqh",
      type: "Course",
      description: "Modern application of Islamic law.",
      language: "English",
      level: "Intermediate",
      affiliate: false
    }
  ]
}

export default function FiqhPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Islamic Jurisprudence (Fiqh)</h1>
        <p className="text-xl mb-4">{fiqhContent.introduction}</p>
        <p className="text-lg mb-8">{fiqhContent.definition}</p>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Importance</h3>
          <ul className="list-disc pl-5 space-y-2">
            {fiqhContent.importance.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Major Schools of Fiqh</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {fiqhContent.schools.map((school, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>
                  {school.name}
                  <span className="text-slate-600 text-sm block">
                    {school.arabicName}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Founder:</h4>
                    <p className="text-slate-600">
                      <span className="font-medium">{school.founder.name}</span>
                      <span className="block text-sm">{school.founder.arabicName}</span>
                      <span className="block text-sm">{school.founder.period}</span>
                      <span className="block italic">{school.founder.biography}</span>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Methodology:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {school.methodology.map((method, idx) => (
                        <li key={idx}>{method}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Principles:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {school.keyPrinciples.map((principle, idx) => (
                        <li key={idx}>{principle}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Distinctive Features:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {school.distinctiveFeatures.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Geographical Influence:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {school.geographicalInfluence.map((region, idx) => (
                        <li key={idx}>{region}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Major Works:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {school.majorWorks.map((work, idx) => (
                        <li key={idx}>
                          <span className="font-medium">{work.title}</span>
                          <span className="text-slate-600 block text-sm">
                            by {work.author}
                          </span>
                          <span className="text-slate-600 italic text-sm">
                            {work.description}
                          </span>
                        </li>
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
        <h2 className="text-3xl font-bold mb-4">Legal Categories</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {fiqhContent.categories.map((category, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>
                  {category.name}
                  <span className="text-slate-600 text-sm block">
                    {category.arabicName}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{category.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Subcategories:</h4>
                    {category.subcategories.map((sub, idx) => (
                      <div key={idx} className="mb-4">
                        <h5 className="font-medium">
                          {sub.name}
                          <span className="text-slate-600 text-sm block">
                            {sub.arabicName}
                          </span>
                        </h5>
                        <p className="text-slate-600 mb-2">{sub.description}</p>
                        <ul className="list-disc pl-5 space-y-1">
                          {sub.examples.map((example, exIdx) => (
                            <li key={exIdx}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Principles:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {category.principles.map((principle, idx) => (
                        <li key={idx}>{principle}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Sources:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {category.sources.map((source, idx) => (
                        <li key={idx}>
                          <span className="font-medium">{source.type}</span>
                          <span className="text-slate-600 block text-sm">
                            {source.reference}
                          </span>
                          <span className="text-slate-600 italic text-sm">
                            {source.explanation}
                          </span>
                        </li>
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
        <h2 className="text-3xl font-bold mb-4">Methodology</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {fiqhContent.methodology.map((method, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>
                  {method.name}
                  <span className="text-slate-600 text-sm block">
                    {method.arabicName}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{method.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Principles:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {method.principles.map((principle, idx) => (
                        <li key={idx}>{principle}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Application:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {method.application.map((app, idx) => (
                        <li key={idx}>{app}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {method.examples.map((example, idx) => (
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
        <h2 className="text-3xl font-bold mb-4">Contemporary Issues</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {fiqhContent.contemporary.map((cont, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{cont.aspect}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{cont.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Challenges:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {cont.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Solutions:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {cont.solutions.map((solution, idx) => (
                        <li key={idx}>{solution}</li>
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
                  <div>
                    <h4 className="font-semibold mb-2">Scholarly Views:</h4>
                    {cont.scholarlyViews.map((view, idx) => (
                      <div key={idx} className="mb-4">
                        <h5 className="font-medium">{view.perspective}</h5>
                        <p className="text-slate-600 mb-2">{view.reasoning}</p>
                        <ul className="list-disc pl-5 space-y-1">
                          {view.implications.map((impl, implIdx) => (
                            <li key={implIdx}>{impl}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Recommended Resources</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {fiqhContent.resources.map((resource, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
                <p className="text-sm text-slate-600">By {resource.author}</p>
                <p className="text-sm text-slate-600">
                  Language: {resource.language} | Level: {resource.level}
                </p>
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
          <Link href="/religion/islam/studies/usul" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Usul al-Fiqh</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the principles of Islamic legal theory.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/islam/studies/maqasid" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Maqasid al-Shariah</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the higher objectives of Islamic law.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/religion/islam/studies/qawaid" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Legal Maxims</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Study the fundamental principles of Islamic law.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 