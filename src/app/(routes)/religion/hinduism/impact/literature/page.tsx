import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface LiteraryTradition {
  name: string
  sanskritName: string
  period: string
  regions: string[]
  description: string
  characteristics: string[]
  significance: string[]
  majorWorks: Array<{
    title: string
    sanskritTitle: string
    date: string
    description: string
    significance: string[]
    influence: string[]
  }>
  influence: string[]
}

interface Author {
  name: string
  sanskritName: string
  period: string
  tradition: string
  biography: {
    origin: string
    training: string[]
    positions: string[]
    teachers: string[]
    students: string[]
    majorWorks: Array<{
      title: string
      sanskritTitle: string
      date: string
      genre: string
      description: string
      significance: string
      keyFeatures: string[]
    }>
  }
  contributions: {
    composition: string[]
    innovation: string[]
    theory: string[]
    teaching: string[]
    other: string[]
  }
  legacy: string
  modernRelevance: string[]
}

interface LiteraryForm {
  name: string
  sanskritName: string
  category: string
  description: string
  origins: string[]
  development: string[]
  keyPractitioners: Array<{
    name: string
    sanskritName: string
    contribution: string
  }>
  characteristics: string[]
  significance: string[]
  modernApplications: string[]
}

interface LiteraryWork {
  name: string
  sanskritName: string
  period: string
  description: string
  composition: Array<{
    style: string
    technique: string
    features: string[]
  }>
  significance: string[]
  evolution: string
  modernUse: string[]
}

interface Resource {
  title: string
  author: string
  year: string
  type: string
  description: string
  language: string
  level: string
  amazonUrl?: string
  isbn?: string
}

interface HinduLiteratureContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  literaryTraditions: LiteraryTradition[]
  authors: Author[]
  literaryForms: LiteraryForm[]
  literaryWorks: LiteraryWork[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Hindu Literature | Hindu Impact",
  description: "Comprehensive exploration of Hindu literary traditions, texts, and their lasting impact on global literature.",
  openGraph: {
    title: "Hindu Literature | Hindu Impact",
    description: "In-depth study of Hindu literary heritage and its influence on global literary traditions",
    type: "website",
  },
}

const hinduLiteratureContent: HinduLiteratureContent = {
  introduction: `Hindu literature represents one of the world's richest literary traditions, encompassing diverse forms, styles, and expressions that have evolved over millennia. From the ancient Vedic hymns to contemporary works, Hindu literature has developed unique aesthetic principles and techniques that continue to influence global literary expression. This tradition combines spiritual wisdom with artistic excellence, creating works that serve both religious and aesthetic purposes while maintaining deep philosophical underpinnings.`,
  timeline: {
    start: "3000 BCE",
    end: "Present",
    overview: "Hindu literature has evolved through various periods, from the ancient Vedic texts to contemporary expressions, developing sophisticated techniques and styles while maintaining spiritual significance.",
    significance: [
      "Development of Sanskrit literature",
      "Evolution of poetic forms",
      "Creation of dramatic traditions",
      "Influence on global literature",
      "Preservation of ancient wisdom",
      "Development of philosophical texts",
      "Cultural synthesis and exchange",
      "Contemporary global influence"
    ]
  },
  literaryTraditions: [
    {
      name: "Vedic Literature",
      sanskritName: "वैदिक साहित्य",
      period: "3000 BCE - 500 BCE",
      regions: [
        "India",
        "Global Hindu communities"
      ],
      description: "The foundational literary tradition of Hinduism, encompassing sacred texts and philosophical works.",
      characteristics: [
        "Oral transmission",
        "Metrical composition",
        "Sacred language",
        "Ritual significance",
        "Philosophical depth"
      ],
      significance: [
        "Religious foundation",
        "Cultural preservation",
        "Literary innovation",
        "Historical record",
        "Spiritual guidance"
      ],
      majorWorks: [
        {
          title: "Rig Veda",
          sanskritTitle: "ऋग्वेद",
          date: "1500-1200 BCE",
          description: "The oldest of the four Vedas, containing 1,028 hymns in praise of various deities",
          significance: [
            "Literary excellence",
            "Spiritual wisdom",
            "Cultural foundation",
            "Historical record",
            "Philosophical depth"
          ],
          influence: [
            "Hindu literature",
            "Religious thought",
            "Cultural expression",
            "Literary standards",
            "Spiritual practice"
          ]
        }
      ],
      influence: [
        "Global literature",
        "Religious texts",
        "Cultural expression",
        "Literary techniques",
        "Spiritual guidance"
      ]
    },
    {
      name: "Epic Literature",
      sanskritName: "महाकाव्य साहित्य",
      period: "400 BCE - 400 CE",
      regions: [
        "India",
        "Southeast Asia",
        "Global Hindu communities"
      ],
      description: "A rich tradition of epic poetry that combines spiritual wisdom with narrative excellence.",
      characteristics: [
        "Narrative complexity",
        "Character depth",
        "Philosophical themes",
        "Moral lessons",
        "Cultural values"
      ],
      significance: [
        "Cultural preservation",
        "Moral education",
        "Literary innovation",
        "Historical record",
        "Spiritual guidance"
      ],
      majorWorks: [
        {
          title: "Mahabharata",
          sanskritTitle: "महाभारत",
          date: "400 BCE - 400 CE",
          description: "The world's longest epic poem, containing the Bhagavad Gita and numerous philosophical discourses",
          significance: [
            "Literary excellence",
            "Philosophical depth",
            "Cultural expression",
            "Moral guidance",
            "Historical record"
          ],
          influence: [
            "Global literature",
            "Religious thought",
            "Cultural expression",
            "Literary standards",
            "Moral education"
          ]
        }
      ],
      influence: [
        "Global literature",
        "Religious texts",
        "Cultural expression",
        "Literary techniques",
        "Moral education"
      ]
    },
    {
      name: "Classical Sanskrit Literature",
      sanskritName: "संस्कृत साहित्य",
      period: "200 BCE - 1200 CE",
      regions: [
        "India",
        "Southeast Asia",
        "Global Hindu communities"
      ],
      description: "A sophisticated literary tradition that developed in Hindu courts and temples, combining spiritual themes with artistic excellence.",
      characteristics: [
        "Poetic precision",
        "Dramatic elements",
        "Philosophical depth",
        "Technical mastery",
        "Cultural synthesis"
      ],
      significance: [
        "Cultural preservation",
        "Literary innovation",
        "Artistic expression",
        "Historical record",
        "Spiritual guidance"
      ],
      majorWorks: [
        {
          title: "Abhijnanashakuntalam",
          sanskritTitle: "अभिज्ञानशाकुन्तलम्",
          date: "2nd century BCE",
          description: "Kalidasa's masterpiece of Sanskrit drama, telling the story of Shakuntala and Dushyanta",
          significance: [
            "Dramatic excellence",
            "Literary innovation",
            "Cultural expression",
            "Technical mastery",
            "Global influence"
          ],
          influence: [
            "World drama",
            "Literary forms",
            "Cultural expression",
            "Artistic standards",
            "Global literature"
          ]
        }
      ],
      influence: [
        "Global literature",
        "Dramatic arts",
        "Cultural expression",
        "Literary techniques",
        "Artistic standards"
      ]
    },
    {
      name: "Bhakti Literature",
      sanskritName: "भक्ति साहित्य",
      period: "6th - 17th century CE",
      regions: [
        "India",
        "Nepal",
        "Bangladesh",
        "Global Hindu communities"
      ],
      description: "A devotional literary movement that expressed deep personal devotion to deities through poetry and songs.",
      characteristics: [
        "Emotional expression",
        "Personal devotion",
        "Regional languages",
        "Musical elements",
        "Spiritual intensity"
      ],
      significance: [
        "Religious reform",
        "Cultural revival",
        "Literary innovation",
        "Social change",
        "Spiritual awakening"
      ],
      majorWorks: [
        {
          title: "Ramcharitmanas",
          sanskritTitle: "रामचरितमानस",
          date: "16th century CE",
          description: "Tulsidas's masterpiece in Awadhi, retelling the Ramayana with deep devotion",
          significance: [
            "Literary excellence",
            "Cultural impact",
            "Religious influence",
            "Social reform",
            "Linguistic innovation"
          ],
          influence: [
            "Hindi literature",
            "Religious thought",
            "Cultural expression",
            "Literary standards",
            "Social values"
          ]
        }
      ],
      influence: [
        "Modern literature",
        "Religious expression",
        "Cultural revival",
        "Social reform",
        "Musical traditions"
      ]
    },
    {
      name: "Modern Hindu Literature",
      sanskritName: "आधुनिक हिन्दू साहित्य",
      period: "19th century CE - Present",
      regions: [
        "India",
        "Global Hindu communities",
        "Diaspora communities"
      ],
      description: "Contemporary literary expressions that blend traditional themes with modern forms and concerns.",
      characteristics: [
        "Contemporary themes",
        "Global perspectives",
        "Multiple languages",
        "Cultural synthesis",
        "Social relevance"
      ],
      significance: [
        "Cultural preservation",
        "Modern adaptation",
        "Global influence",
        "Social commentary",
        "Identity expression"
      ],
      majorWorks: [
        {
          title: "Gitanjali",
          sanskritTitle: "गीतांजलि",
          date: "1910 CE",
          description: "Rabindranath Tagore's collection of spiritual poems that won the Nobel Prize",
          significance: [
            "Literary excellence",
            "Global recognition",
            "Cultural synthesis",
            "Spiritual expression",
            "Modern innovation"
          ],
          influence: [
            "World literature",
            "Modern poetry",
            "Cultural exchange",
            "Literary standards",
            "Spiritual expression"
          ]
        }
      ],
      influence: [
        "Global literature",
        "Modern expression",
        "Cultural identity",
        "Social change",
        "Spiritual revival"
      ]
    }
  ],
  authors: [
    {
      name: "Kalidasa",
      sanskritName: "कालिदास",
      period: "4th-5th century CE",
      tradition: "Classical Sanskrit Literature",
      biography: {
        origin: "Ujjain",
        training: [
          "Sanskrit grammar",
          "Poetic composition",
          "Dramatic arts",
          "Philosophical studies",
          "Courtly literature"
        ],
        positions: [
          "Court poet",
          "Dramatist",
          "Cultural ambassador"
        ],
        teachers: [
          "Traditional scholars",
          "Court mentors"
        ],
        students: [
          "Numerous poets",
          "Literary tradition"
        ],
        majorWorks: [
          {
            title: "Meghaduta",
            sanskritTitle: "मेघदूत",
            date: "5th century CE",
            genre: "Lyric Poetry",
            description: "A masterpiece of Sanskrit poetry describing a cloud messenger's journey",
            significance: "Revolutionary fusion of nature poetry and emotional expression",
            keyFeatures: [
              "Poetic excellence",
              "Nature description",
              "Emotional depth",
              "Technical mastery",
              "Cultural synthesis"
            ]
          }
        ]
      },
      contributions: {
        composition: [
          "Poetic forms",
          "Dramatic techniques",
          "Literary styles",
          "Narrative methods",
          "Character development"
        ],
        innovation: [
          "New genres",
          "Literary forms",
          "Cultural synthesis",
          "Technical mastery",
          "Artistic expression"
        ],
        theory: [
          "Poetic principles",
          "Dramatic theory",
          "Literary standards",
          "Cultural expression",
          "Artistic techniques"
        ],
        teaching: [
          "Literary education",
          "Poetic training",
          "Cultural awareness",
          "Technical mastery",
          "Artistic expression"
        ],
        other: [
          "Cultural revival",
          "Literary standards",
          "Artistic expression",
          "Cultural exchange",
          "Global influence"
        ]
      },
      legacy: "Kalidasa's contributions transformed Sanskrit literature by successfully merging traditional themes with innovative techniques, establishing new standards for poetic and dramatic expression.",
      modernRelevance: [
        "Literary education",
        "Cultural preservation",
        "Artistic expression",
        "Literary standards",
        "Global influence"
      ]
    },
    {
      name: "Valmiki",
      sanskritName: "वाल्मीकि",
      period: "5th century BCE",
      tradition: "Epic Literature",
      biography: {
        origin: "Ancient India",
        training: [
          "Vedic studies",
          "Poetic composition",
          "Philosophical studies",
          "Spiritual practice",
          "Literary arts"
        ],
        positions: [
          "First poet (Adi Kavi)",
          "Epic composer",
          "Spiritual guide"
        ],
        teachers: [
          "Narada",
          "Traditional scholars"
        ],
        students: [
          "Lava and Kusha",
          "Literary tradition"
        ],
        majorWorks: [
          {
            title: "Ramayana",
            sanskritTitle: "रामायण",
            date: "5th century BCE",
            genre: "Epic Poetry",
            description: "The first epic poem in Sanskrit literature, telling the story of Rama",
            significance: "Foundation of epic poetry and cultural values",
            keyFeatures: [
              "Epic structure",
              "Character development",
              "Moral values",
              "Cultural synthesis",
              "Literary innovation"
            ]
          }
        ]
      },
      contributions: {
        composition: [
          "Epic form",
          "Poetic meter",
          "Narrative structure",
          "Character portrayal",
          "Moral themes"
        ],
        innovation: [
          "First epic",
          "New meter",
          "Literary form",
          "Cultural synthesis",
          "Spiritual expression"
        ],
        theory: [
          "Poetic principles",
          "Narrative techniques",
          "Literary standards",
          "Cultural expression",
          "Moral values"
        ],
        teaching: [
          "Literary education",
          "Spiritual guidance",
          "Cultural values",
          "Moral education",
          "Artistic expression"
        ],
        other: [
          "Cultural foundation",
          "Literary standards",
          "Moral values",
          "Spiritual guidance",
          "Global influence"
        ]
      },
      legacy: "Valmiki's Ramayana established the foundation of epic poetry in Sanskrit literature, setting standards for narrative structure, character development, and moral themes.",
      modernRelevance: [
        "Literary education",
        "Cultural values",
        "Moral guidance",
        "Spiritual inspiration",
        "Global influence"
      ]
    },
    {
      name: "Vyasa",
      sanskritName: "व्यास",
      period: "4th century BCE",
      tradition: "Epic Literature",
      biography: {
        origin: "Ancient India",
        training: [
          "Vedic studies",
          "Philosophical knowledge",
          "Literary composition",
          "Spiritual practice",
          "Historical research"
        ],
        positions: [
          "Epic composer",
          "Vedic compiler",
          "Spiritual guide"
        ],
        teachers: [
          "Traditional scholars",
          "Spiritual masters"
        ],
        students: [
          "Numerous disciples",
          "Literary tradition"
        ],
        majorWorks: [
          {
            title: "Mahabharata",
            sanskritTitle: "महाभारत",
            date: "4th century BCE",
            genre: "Epic Poetry",
            description: "The world's longest epic poem, containing the Bhagavad Gita",
            significance: "Comprehensive epic of human experience and spiritual wisdom",
            keyFeatures: [
              "Epic scope",
              "Philosophical depth",
              "Character complexity",
              "Moral dilemmas",
              "Spiritual wisdom"
            ]
          }
        ]
      },
      contributions: {
        composition: [
          "Epic structure",
          "Philosophical discourse",
          "Character development",
          "Moral themes",
          "Spiritual wisdom"
        ],
        innovation: [
          "Epic form",
          "Philosophical integration",
          "Narrative techniques",
          "Character complexity",
          "Moral exploration"
        ],
        theory: [
          "Literary principles",
          "Philosophical concepts",
          "Moral values",
          "Spiritual wisdom",
          "Cultural synthesis"
        ],
        teaching: [
          "Philosophical education",
          "Moral guidance",
          "Spiritual wisdom",
          "Literary standards",
          "Cultural values"
        ],
        other: [
          "Vedic compilation",
          "Cultural preservation",
          "Spiritual guidance",
          "Historical record",
          "Global influence"
        ]
      },
      legacy: "Vyasa's Mahabharata represents the pinnacle of epic literature, combining profound philosophical insights with complex human drama and spiritual wisdom.",
      modernRelevance: [
        "Philosophical study",
        "Moral guidance",
        "Spiritual wisdom",
        "Literary inspiration",
        "Cultural values"
      ]
    },
    {
      name: "Tulsidas",
      sanskritName: "तुलसीदास",
      period: "1532-1623 CE",
      tradition: "Bhakti Literature",
      biography: {
        origin: "Uttar Pradesh",
        training: [
          "Sanskrit studies",
          "Bhakti tradition",
          "Poetic composition",
          "Spiritual practice",
          "Regional languages"
        ],
        positions: [
          "Bhakti poet",
          "Spiritual guide",
          "Cultural reformer"
        ],
        teachers: [
          "Narharidas",
          "Traditional scholars"
        ],
        students: [
          "Numerous devotees",
          "Literary tradition"
        ],
        majorWorks: [
          {
            title: "Ramcharitmanas",
            sanskritTitle: "रामचरितमानस",
            date: "1574 CE",
            genre: "Devotional Epic",
            description: "A masterpiece in Awadhi, retelling the Ramayana with deep devotion",
            significance: "Revolutionary synthesis of devotion and literary excellence",
            keyFeatures: [
              "Devotional intensity",
              "Literary innovation",
              "Cultural synthesis",
              "Social reform",
              "Spiritual wisdom"
            ]
          }
        ]
      },
      contributions: {
        composition: [
          "Devotional poetry",
          "Literary innovation",
          "Cultural synthesis",
          "Social reform",
          "Spiritual expression"
        ],
        innovation: [
          "New genres",
          "Language reform",
          "Cultural synthesis",
          "Social change",
          "Spiritual expression"
        ],
        theory: [
          "Poetic principles",
          "Devotional expression",
          "Cultural values",
          "Social reform",
          "Spiritual guidance"
        ],
        teaching: [
          "Devotional practice",
          "Literary education",
          "Cultural values",
          "Social reform",
          "Spiritual guidance"
        ],
        other: [
          "Cultural revival",
          "Social reform",
          "Literary standards",
          "Spiritual guidance",
          "Global influence"
        ]
      },
      legacy: "Tulsidas's Ramcharitmanas revolutionized Hindu literature by making spiritual wisdom accessible through beautiful poetry in the vernacular language.",
      modernRelevance: [
        "Cultural preservation",
        "Spiritual guidance",
        "Literary inspiration",
        "Social values",
        "Global influence"
      ]
    }
  ],
  literaryForms: [
    {
      name: "Kavya",
      sanskritName: "काव्य",
      category: "Poetry",
      description: "A sophisticated form of Sanskrit poetry that combines aesthetic beauty with philosophical depth.",
      origins: [
        "Vedic hymns",
        "Epic poetry",
        "Court literature",
        "Religious expression",
        "Cultural tradition"
      ],
      development: [
        "Technical evolution",
        "Style development",
        "Theme expansion",
        "Cultural synthesis",
        "Modern adaptation"
      ],
      keyPractitioners: [
        {
          name: "Bharavi",
          sanskritName: "भारवि",
          contribution: "Revolutionary techniques and themes"
        }
      ],
      characteristics: [
        "Metrical precision",
        "Aesthetic beauty",
        "Philosophical depth",
        "Technical mastery",
        "Cultural elements"
      ],
      significance: [
        "Cultural preservation",
        "Literary innovation",
        "Artistic expression",
        "Historical record",
        "Spiritual guidance"
      ],
      modernApplications: [
        "Poetic composition",
        "Literary education",
        "Cultural expression",
        "Artistic standards",
        "Global literature"
      ]
    }
  ],
  literaryWorks: [
    {
      name: "Bhagavad Gita",
      sanskritName: "भगवद्गीता",
      period: "2nd century BCE",
      description: "A philosophical dialogue between Krishna and Arjuna, part of the Mahabharata.",
      composition: [
        {
          style: "Philosophical Poetry",
          technique: "Dialogue",
          features: [
            "Metrical precision",
            "Philosophical depth",
            "Spiritual wisdom",
            "Technical mastery",
            "Cultural synthesis"
          ]
        }
      ],
      significance: [
        "Spiritual guidance",
        "Philosophical depth",
        "Literary excellence",
        "Cultural expression",
        "Global influence"
      ],
      evolution: "Developed from earlier Upanishadic traditions, continues to influence global thought and literature",
      modernUse: [
        "Spiritual guidance",
        "Philosophical study",
        "Literary inspiration",
        "Cultural expression",
        "Global influence"
      ]
    }
  ],
  resources: [
    {
      title: "The Literature of Ancient India",
      author: "A.L. Basham",
      year: "1975",
      type: "Book",
      description: "Comprehensive study of ancient Indian literary traditions and texts",
      language: "English",
      level: "Advanced",
      isbn: "978-0140445444",
      amazonUrl: "https://www.amazon.com/Literature-Ancient-India-A-Basham/dp/0140445444"
    },
    {
      title: "Sanskrit Literature",
      author: "Arthur A. Macdonell",
      year: "2000",
      type: "Book",
      description: "Detailed exploration of Sanskrit literary traditions and forms",
      language: "English",
      level: "Advanced",
      isbn: "978-8120816202",
      amazonUrl: "https://www.amazon.com/Sanskrit-Literature-Arthur-A-Macdonell/dp/8120816203"
    },
    {
      title: "Indian Literature: A Concise History",
      author: "K. M. George",
      year: "1997",
      type: "Book",
      description: "Accessible introduction to Indian literary history and traditions",
      language: "English",
      level: "Intermediate",
      isbn: "978-8120817209",
      amazonUrl: "https://www.amazon.com/Indian-Literature-Concise-History-George/dp/8120817209"
    },
    {
      title: "The Ramayana: A Modern Translation",
      author: "Ramesh Menon",
      year: "2004",
      type: "Book",
      description: "Modern English translation of Valmiki's Ramayana with detailed commentary",
      language: "English",
      level: "Intermediate",
      isbn: "978-0865476950",
      amazonUrl: "https://www.amazon.com/Ramayana-Modern-Translation-Ramesh-Menon/dp/0865476950"
    },
    {
      title: "The Mahabharata: A Modern Translation",
      author: "Carole Satyamurti",
      year: "2015",
      type: "Book",
      description: "Contemporary English verse translation of Vyasa's Mahabharata",
      language: "English",
      level: "Intermediate",
      isbn: "978-0393351254",
      amazonUrl: "https://www.amazon.com/Mahabharata-Modern-Translation-Carole-Satyamurti/dp/039335125X"
    },
    {
      title: "Tulsidas: Poet, Saint, and Reformer",
      author: "F.R. Allchin",
      year: "1964",
      type: "Book",
      description: "Comprehensive study of Tulsidas's life, works, and influence",
      language: "English",
      level: "Advanced",
      isbn: "978-8120804681",
      amazonUrl: "https://www.amazon.com/Tulsidas-Poet-Saint-Reformer-Allchin/dp/8120804688"
    },
    {
      title: "Bhakti Poetry in Medieval India",
      author: "Neeti M. Sadarangani",
      year: "2004",
      type: "Book",
      description: "In-depth exploration of Bhakti literary traditions and their impact",
      language: "English",
      level: "Advanced",
      isbn: "978-8120813386",
      amazonUrl: "https://www.amazon.com/Bhakti-Poetry-Medieval-India-Sadarangani/dp/8120813383"
    },
    {
      title: "Modern Indian Literature: An Anthology",
      author: "K. M. George",
      year: "1992",
      type: "Book",
      description: "Collection of modern Indian literature including Hindu themes",
      language: "English",
      level: "Intermediate",
      isbn: "978-8120802348",
      amazonUrl: "https://www.amazon.com/Modern-Indian-Literature-Anthology-George/dp/8120802348"
    }
  ]
}

export default function HinduLiteraturePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Hindu Literature</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{hinduLiteratureContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {hinduLiteratureContent.timeline.start} - {hinduLiteratureContent.timeline.end}</p>
            <p>{hinduLiteratureContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {hinduLiteratureContent.timeline.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Literary Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Literary Traditions</CardTitle>
        </CardHeader>
        <CardContent>
          {hinduLiteratureContent.literaryTraditions.map((tradition, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {tradition.name} ({tradition.sanskritName})
              </h3>
              <p className="mb-2">{tradition.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {tradition.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Significance:</h4>
                  <ul className="list-disc pl-6">
                    {tradition.significance.map((sig, idx) => (
                      <li key={idx}>{sig}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Authors */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notable Authors</CardTitle>
        </CardHeader>
        <CardContent>
          {hinduLiteratureContent.authors.map((author, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {author.name} ({author.sanskritName})
              </h3>
              <p className="mb-2">Period: {author.period}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Contributions:</h4>
                  <ul className="list-disc pl-6">
                    {Object.entries(author.contributions).map(([category, items]) => (
                      <li key={category}>
                        <strong>{category}:</strong>
                        <ul className="list-disc pl-6">
                          {items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Legacy:</h4>
                  <p>{author.legacy}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Literary Forms */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Literary Forms</CardTitle>
        </CardHeader>
        <CardContent>
          {hinduLiteratureContent.literaryForms.map((form, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {form.name} ({form.sanskritName})
              </h3>
              <p className="mb-2">{form.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {form.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Applications:</h4>
                  <ul className="list-disc pl-6">
                    {form.modernApplications.map((app, idx) => (
                      <li key={idx}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Literary Works */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notable Literary Works</CardTitle>
        </CardHeader>
        <CardContent>
          {hinduLiteratureContent.literaryWorks.map((work, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {work.name} ({work.sanskritName})
              </h3>
              <p className="mb-2">{work.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Composition:</h4>
                  <ul className="list-disc pl-6">
                    {work.composition.map((item, idx) => (
                      <li key={idx}>
                        <strong>{item.style}:</strong>
                        <ul className="list-disc pl-6">
                          {item.features.map((feature, featureIdx) => (
                            <li key={featureIdx}>{feature}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Use:</h4>
                  <ul className="list-disc pl-6">
                    {work.modernUse.map((use, idx) => (
                      <li key={idx}>{use}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Resources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Further Reading</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hinduLiteratureContent.resources.map((resource, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h3 className="font-semibold">{resource.title}</h3>
                <p>Author: {resource.author}</p>
                <p>Year: {resource.year}</p>
                <p>Type: {resource.type}</p>
                <p>Description: {resource.description}</p>
                <p>Level: {resource.level}</p>
                {resource.isbn && <p>ISBN: {resource.isbn}</p>}
                {resource.amazonUrl && (
                  <Link href={resource.amazonUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="mt-2">Purchase on Amazon</Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 