import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ShariahSource {
  name: string
  arabicName: string
  description: string
  significance: string[]
  quranicReferences: Array<{
    surah: string
    ayah: string
    text: string
    explanation: string
  }>
  examples: string[]
}

interface ShariahObjective {
  category: string
  arabicName: string
  description: string
  examples: string[]
  principles: string[]
  quranicBasis: Array<{
    surah: string
    ayah: string
    text: string
  }>
}

interface LegalDomain {
  name: string
  arabicName: string
  description: string
  aspects: Array<{
    name: string
    arabicName: string
    description: string
    rulings: string[]
    evidence: Array<{
      type: string
      source: string
      text: string
    }>
  }>
  principles: string[]
  sources: Array<{
    type: string
    reference: string
    explanation: string
  }>
}

interface ScholarlyPerspective {
  period: string
  scholars: Array<{
    name: string
    arabicName: string
    years: string
    contribution: string
    significance: string
    keyTexts: Array<{
      title: string
      arabicTitle: string
      description: string
      amazonUrl?: string
    }>
  }>
  mainIdeas: string[]
  impact: string
}

interface Implementation {
  context: string
  description: string
  mechanisms: string[]
  challenges: string[]
  solutions: string[]
  historicalExamples: Array<{
    period: string
    location: string
    description: string
    significance: string
  }>
}

interface Contemporary {
  aspect: string
  description: string
  challenges: string[]
  solutions: string[]
  examples: string[]
  scholarlyViews: Array<{
    scholar: string
    perspective: string
    reasoning: string
    implications: string[]
    references: Array<{
      title: string
      url: string
    }>
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
  year: string
  isbn?: string
  amazonUrl?: string
  affiliate?: boolean
  affiliateUrl?: string
}

interface ShariahContent {
  introduction: string
  definition: string
  importance: string[]
  sources: ShariahSource[]
  objectives: ShariahObjective[]
  domains: LegalDomain[]
  scholarlyPerspectives: ScholarlyPerspective[]
  implementation: Implementation[]
  contemporary: Contemporary[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Islamic Law (Shariah) | Islamic Studies",
  description: "Comprehensive exploration of Islamic Law (Shariah), its sources, objectives, and contemporary applications.",
  openGraph: {
    title: "Islamic Law (Shariah) | Islamic Studies",
    description: "In-depth study of divine law in Islam",
    type: "website",
  },
}

const shariahContent: ShariahContent = {
  introduction: `Shariah, the divine law of Islam, represents the comprehensive system of guidance that Allah has prescribed for humanity. It encompasses all aspects of human life, from religious obligations to social interactions, economic transactions, and moral conduct.`,
  definition: `Shariah, literally meaning 'the clear path to water', is the divine law of Islam derived primarily from the Quran and Sunnah. It provides a complete framework for human life, encompassing spiritual, moral, social, and legal dimensions.`,
  importance: [
    "Divine guidance for human life",
    "Comprehensive system of justice",
    "Protection of human rights and dignity",
    "Balance between individual and collective interests",
    "Framework for moral and ethical conduct",
    "Preservation of societal well-being",
    "Establishment of divine boundaries"
  ],
  sources: [
    {
      name: "Quran",
      arabicName: "القرآن",
      description: "The primary source of Shariah, containing divine revelation",
      significance: [
        "Direct divine speech",
        "Immutable and preserved",
        "Universal principles",
        "Ethical framework",
        "Legal foundations"
      ],
      quranicReferences: [
        {
          surah: "Al-Maidah",
          ayah: "5:48",
          text: "For each of you We have prescribed a law and a method",
          explanation: "Establishes divine origin of Shariah"
        },
        {
          surah: "Al-Jasiyah",
          ayah: "45:18",
          text: "Then We put you on a clear path of Our commandment",
          explanation: "Confirms Shariah as divine guidance"
        }
      ],
      examples: [
        "Rules of inheritance (4:11-12)",
        "Family law principles (4:3-4)",
        "Commercial regulations (2:275-280)",
        "Criminal law guidelines (5:38)",
        "Moral injunctions (17:23-39)"
      ]
    },
    {
      name: "Sunnah",
      arabicName: "السنة",
      description: "The prophetic tradition, including sayings, actions, and approvals",
      significance: [
        "Practical implementation",
        "Detailed explanation",
        "Contextual application",
        "Living example",
        "Supplementary legislation"
      ],
      quranicReferences: [
        {
          surah: "Al-Hashr",
          ayah: "59:7",
          text: "Whatever the Messenger gives you, take it",
          explanation: "Establishes authority of Sunnah"
        },
        {
          surah: "An-Najm",
          ayah: "53:3-4",
          text: "Nor does he speak from his own desire. It is only revelation revealed",
          explanation: "Confirms divine inspiration of Sunnah"
        }
      ],
      examples: [
        "Prayer details",
        "Business ethics",
        "Social interactions",
        "Judicial procedures",
        "Governance principles"
      ]
    }
  ],
  objectives: [
    {
      category: "Protection of Faith",
      arabicName: "حفظ الدين",
      description: "Safeguarding religious beliefs and practices",
      examples: [
        "Freedom of worship",
        "Religious education",
        "Protection of religious symbols",
        "Religious tolerance"
      ],
      principles: [
        "Religious freedom",
        "Non-compulsion",
        "Respect for beliefs",
        "Interfaith dialogue"
      ],
      quranicBasis: [
        {
          surah: "Al-Baqarah",
          ayah: "2:256",
          text: "There is no compulsion in religion"
        }
      ]
    },
    {
      category: "Protection of Life",
      arabicName: "حفظ النفس",
      description: "Ensuring the sanctity and dignity of human life",
      examples: [
        "Right to life",
        "Healthcare provisions",
        "Safety regulations",
        "Self-defense laws"
      ],
      principles: [
        "Sanctity of life",
        "Human dignity",
        "Physical integrity",
        "Quality of life"
      ],
      quranicBasis: [
        {
          surah: "Al-Maidah",
          ayah: "5:32",
          text: "Whoever saves a life, it is as if they saved all of humanity"
        }
      ]
    }
  ],
  scholarlyPerspectives: [
    {
      period: "Classical Period (8th-13th Century)",
      scholars: [
        {
          name: "Imam Abu Hanifa",
          arabicName: "أبو حنيفة",
          years: "699-767 CE",
          contribution: "Founder of the Hanafi school of jurisprudence",
          significance: "Pioneered systematic legal reasoning and analogical deduction",
          keyTexts: [
            {
              title: "Al-Fiqh Al-Akbar",
              arabicTitle: "الفقه الأكبر",
              description: "Foundational text on Islamic creed and law",
              amazonUrl: "https://www.amazon.com/Al-Fiqh-Al-Akbar-Abu-Hanifa/dp/1933764031"
            },
            {
              title: "Kitab Al-Athar",
              arabicTitle: "كتاب الآثار",
              description: "Collection of legal traditions and rulings",
              amazonUrl: "https://www.amazon.com/Kitab-Al-Athar-Imam-Abu-Hanifa/dp/1842001183"
            }
          ]
        },
        {
          name: "Imam Al-Shafi'i",
          arabicName: "الإمام الشافعي",
          years: "767-820 CE",
          contribution: "Established principles of Islamic jurisprudence",
          significance: "Systematized legal theory and methodology",
          keyTexts: [
            {
              title: "Al-Risala",
              arabicTitle: "الرسالة",
              description: "First systematic work on Islamic legal theory",
              amazonUrl: "https://www.amazon.com/Al-Risala-Principles-Islamic-Jurisprudence-Al-Shafii/dp/0946621152"
            },
            {
              title: "Kitab Al-Umm",
              arabicTitle: "كتاب الأم",
              description: "Comprehensive compilation of legal rulings",
              amazonUrl: "https://www.amazon.com/Kitab-al-Umm-Arabic-Muhammad-al-Shafii/dp/9953429375"
            }
          ]
        }
      ],
      mainIdeas: [
        "Systematic legal methodology",
        "Principles of jurisprudence",
        "Legal theory development",
        "Harmonization of texts",
        "Practical application"
      ],
      impact: "Established enduring frameworks for Islamic legal theory and practice"
    },
    {
      period: "Modern Period (19th-21st Century)",
      scholars: [
        {
          name: "Mohammad Hashim Kamali",
          arabicName: "محمد هاشم كمالي",
          years: "1944-present",
          contribution: "Contemporary analysis of Shariah principles",
          significance: "Bridge between classical and modern legal thought",
          keyTexts: [
            {
              title: "Principles of Islamic Jurisprudence",
              arabicTitle: "أصول الفقه الإسلامي",
              description: "Comprehensive modern work on Islamic legal theory",
              amazonUrl: "https://www.amazon.com/Principles-Islamic-Jurisprudence-Mohammad-Hashim/dp/0946621810"
            },
            {
              title: "Shariah Law: An Introduction",
              arabicTitle: "الشريعة الإسلامية: مدخل",
              description: "Accessible overview of Islamic law",
              amazonUrl: "https://www.amazon.com/Shariah-Law-Introduction-Mohammad-Hashim/dp/185168565X"
            }
          ]
        }
      ],
      mainIdeas: [
        "Contemporary application",
        "Legal reform",
        "Modern challenges",
        "Methodological renewal",
        "Integration with modern systems"
      ],
      impact: "Bridging classical principles with contemporary needs"
    }
  ],
  domains: [
    {
      name: "Personal Law",
      arabicName: "الأحوال الشخصية",
      description: "Regulations governing individual and family matters",
      aspects: [
        {
          name: "Marriage",
          arabicName: "النكاح",
          description: "Rules and guidelines for matrimonial relationships",
          rulings: [
            "Marriage contract requirements",
            "Spousal rights and obligations",
            "Divorce procedures",
            "Child custody and maintenance"
          ],
          evidence: [
            {
              type: "Quran",
              source: "4:1",
              text: "O mankind, fear your Lord, who created you from one soul"
            }
          ]
        }
      ],
      principles: [
        "Family stability",
        "Gender equity",
        "Child welfare",
        "Property rights"
      ],
      sources: [
        {
          type: "Quran",
          reference: "4:11-12",
          explanation: "Detailed inheritance shares"
        }
      ]
    }
  ],
  implementation: [
    {
      context: "Modern State",
      description: "Application of Shariah in contemporary governance",
      mechanisms: [
        "Constitutional framework",
        "Legal codification",
        "Judicial system",
        "Regulatory bodies"
      ],
      challenges: [
        "Modern context adaptation",
        "Legal pluralism",
        "International norms",
        "Technological changes"
      ],
      solutions: [
        "Progressive interpretation",
        "Harmonious integration",
        "Balanced approach",
        "Ethical guidelines"
      ],
      historicalExamples: [
        {
          period: "7th Century",
          location: "Medina",
          description: "First Islamic state under Prophet Muhammad",
          significance: "Established model of Shariah implementation"
        }
      ]
    }
  ],
  contemporary: [
    {
      aspect: "Bioethics",
      description: "Islamic legal perspective on modern medical issues",
      challenges: [
        "Genetic engineering",
        "Organ transplantation",
        "Artificial reproduction",
        "End-of-life care"
      ],
      solutions: [
        "Ethical guidelines",
        "Medical protocols",
        "Expert consultation",
        "Balance of benefits"
      ],
      examples: [
        "IVF regulations",
        "Brain death criteria",
        "Genetic screening",
        "Medical privacy"
      ],
      scholarlyViews: [
        {
          scholar: "Yusuf Al-Qaradawi",
          perspective: "Contemporary Medical Ethics",
          reasoning: "Integration of Islamic principles with modern medical science",
          implications: [
            "Ethical medical practice",
            "Patient rights",
            "Professional guidelines",
            "Research parameters"
          ],
          references: [
            {
              title: "The Lawful and Prohibited in Islam",
              url: "https://www.amazon.com/Lawful-Prohibited-Islam-Yusuf-Al-Qaradawi/dp/0892590166"
            }
          ]
        }
      ]
    }
  ],
  resources: [
    {
      title: "Principles of Islamic Jurisprudence",
      author: "Mohammad Hashim Kamali",
      url: "https://www.amazon.com/Principles-Islamic-Jurisprudence-Mohammad-Hashim/dp/0946621810",
      type: "Book",
      description: "Comprehensive introduction to Islamic legal theory",
      language: "English",
      level: "Advanced",
      year: "2003",
      isbn: "978-0946621810",
      amazonUrl: "https://www.amazon.com/Principles-Islamic-Jurisprudence-Mohammad-Hashim/dp/0946621810"
    },
    {
      title: "An Introduction to Islamic Law",
      author: "Wael B. Hallaq",
      url: "https://www.amazon.com/Introduction-Islamic-Law-Wael-Hallaq/dp/0521678730",
      type: "Textbook",
      description: "Historical development and principles of Islamic law",
      language: "English",
      level: "Intermediate",
      year: "2009",
      isbn: "978-0521678735",
      amazonUrl: "https://www.amazon.com/Introduction-Islamic-Law-Wael-Hallaq/dp/0521678730"
    },
    {
      title: "Maqasid al-Shariah: A Beginner's Guide",
      author: "Jasser Auda",
      url: "https://www.amazon.com/Maqasid-Al-Shariah-Beginners-Guide-Occasional/dp/1565645600",
      type: "Book",
      description: "Introduction to the objectives of Islamic law",
      language: "English",
      level: "Beginner",
      year: "2008",
      isbn: "978-1565645608",
      amazonUrl: "https://www.amazon.com/Maqasid-Al-Shariah-Beginners-Guide-Occasional/dp/1565645600"
    }
  ]
}

export default function ShariahPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Islamic Law (Shariah)</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction to Shariah</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{shariahContent.introduction}</p>
          <p className="mb-4">{shariahContent.definition}</p>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Importance of Shariah:</h3>
            <ul className="list-disc pl-6">
              {shariahContent.importance.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Sources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Sources of Shariah</CardTitle>
        </CardHeader>
        <CardContent>
          {shariahContent.sources.map((source, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {source.name} ({source.arabicName})
              </h3>
              <p className="mb-3">{source.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <ul className="list-disc pl-6">
                    {source.significance.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Quranic References:</h4>
                  <ul className="list-disc pl-6">
                    {source.quranicReferences.map((ref, idx) => (
                      <li key={idx}>
                        <strong>{ref.surah} ({ref.ayah})</strong>: {ref.text}
                        <p className="text-sm text-gray-600">{ref.explanation}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Scholarly Perspectives */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Scholarly Perspectives</CardTitle>
        </CardHeader>
        <CardContent>
          {shariahContent.scholarlyPerspectives.map((perspective, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{perspective.period}</h3>
              <div className="grid grid-cols-1 gap-4">
                {perspective.scholars.map((scholar, idx) => (
                  <div key={idx} className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold">
                      {scholar.name} ({scholar.arabicName}) - {scholar.years}
                    </h4>
                    <p className="mb-2">{scholar.contribution}</p>
                    <p className="mb-2 text-gray-600">{scholar.significance}</p>
                    <div className="mt-2">
                      <h5 className="font-semibold">Key Works:</h5>
                      <ul className="list-disc pl-6">
                        {scholar.keyTexts.map((text, textIdx) => (
                          <li key={textIdx}>
                            <Link
                              href={text.amazonUrl || "#"}
                              className="text-blue-600 hover:underline"
                              target="_blank"
                            >
                              {text.title} ({text.arabicTitle})
                            </Link>
                            <p className="text-sm text-gray-600">{text.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Main Ideas:</h4>
                <ul className="list-disc pl-6">
                  {perspective.mainIdeas.map((idea, idx) => (
                    <li key={idx}>{idea}</li>
                  ))}
                </ul>
                <p className="mt-2 text-gray-700">{perspective.impact}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Resources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Learning Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shariahContent.resources.map((resource, index) => (
              <Card key={index} className="bg-secondary/20">
                <CardHeader>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2"><strong>Author:</strong> {resource.author}</p>
                  <p className="mb-2"><strong>Type:</strong> {resource.type}</p>
                  <p className="mb-2"><strong>Level:</strong> {resource.level}</p>
                  <p className="mb-2"><strong>Year:</strong> {resource.year}</p>
                  <p className="mb-2"><strong>ISBN:</strong> {resource.isbn}</p>
                  <p className="mb-4">{resource.description}</p>
                  <Button asChild>
                    <Link href={resource.amazonUrl || resource.url} target="_blank">
                      View on Amazon
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 