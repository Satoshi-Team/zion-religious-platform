import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface LiteraryTradition {
  name: string
  sanskritName: string
  paliName: string
  period: string
  regions: string[]
  description: string
  characteristics: string[]
  languages: string[]
  significance: string[]
  majorWorks: Array<{
    title: string
    sanskritTitle: string
    paliTitle: string
    date: string
    author: string
    description: string
    significance: string
    influence: string[]
  }>
  influence: string[]
}

interface Author {
  name: string
  sanskritName: string
  paliName: string
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
      paliTitle: string
      date: string
      genre: string
      description: string
      significance: string
      keyFeatures: string[]
    }>
  }
  contributions: {
    literary: string[]
    doctrinal: string[]
    philosophical: string[]
    cultural: string[]
    other: string[]
  }
  legacy: string
  modernRelevance: string[]
}

interface LiteraryForm {
  name: string
  sanskritName: string
  paliName: string
  category: string
  description: string
  origins: string[]
  development: string[]
  keyPractitioners: Array<{
    name: string
    sanskritName: string
    paliName: string
    contribution: string
  }>
  characteristics: string[]
  significance: string[]
  modernApplications: string[]
}

interface TextualTradition {
  name: string
  sanskritName: string
  paliName: string
  period: string
  description: string
  contents: string[]
  transmission: string[]
  significance: string[]
  modernStudy: string[]
  translations: string[]
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

interface BuddhistLiteratureContent {
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
  textualTraditions: TextualTradition[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Buddhist Literature | Buddhist Impact",
  description: "Comprehensive exploration of Buddhist literary traditions, forms, and their lasting impact on global literature.",
  openGraph: {
    title: "Buddhist Literature | Buddhist Impact",
    description: "In-depth study of Buddhist literary heritage and its influence on global literary traditions",
    type: "website",
  },
}

const buddhistLiteratureContent: BuddhistLiteratureContent = {
  introduction: `Buddhist literature represents a vast and diverse body of texts that has evolved over centuries, encompassing various languages, genres, and philosophical traditions. From the early Pali Canon to contemporary Buddhist writings, these texts have profoundly influenced both religious thought and world literature. Buddhist literary traditions combine spiritual wisdom with literary excellence, serving as both religious scripture and cultural heritage.`,
  timeline: {
    start: "5th Century BCE",
    end: "Present",
    overview: "Buddhist literature emerged with the teachings of the Buddha and developed into diverse traditions across different regions. From oral transmission to written texts, it has evolved while maintaining its spiritual essence.",
    significance: [
      "Development of literary traditions",
      "Evolution of philosophical texts",
      "Creation of unique genres",
      "Influence on global literature",
      "Preservation of cultural heritage",
      "Development of regional styles",
      "Cultural synthesis and exchange",
      "Contemporary global influence"
    ]
  },
  literaryTraditions: [
    {
      name: "Pali Canon",
      sanskritName: "पालि त्रिपिटक",
      paliName: "Pāli Tipiṭaka",
      period: "5th Century BCE - 1st Century CE",
      regions: [
        "India",
        "Sri Lanka",
        "Southeast Asia"
      ],
      description: "The earliest and most complete collection of Buddhist texts, preserved in the Pali language and containing the core teachings of the Buddha.",
      characteristics: [
        "Oral transmission",
        "Three baskets",
        "Systematic organization",
        "Commentarial tradition",
        "Historical accuracy"
      ],
      languages: [
        "Pali",
        "Sanskrit",
        "Local languages"
      ],
      significance: [
        "Earliest Buddhist texts",
        "Historical record",
        "Doctrinal foundation",
        "Literary influence",
        "Cultural preservation"
      ],
      majorWorks: [
        {
          title: "Dhammapada",
          sanskritTitle: "धर्मपद",
          paliTitle: "Dhammapada",
          date: "3rd Century BCE",
          author: "Traditional",
          description: "A collection of verses containing the essence of Buddhist teachings",
          significance: "Most widely read Buddhist text",
          influence: [
            "Buddhist literature",
            "Moral philosophy",
            "Poetic tradition",
            "Cultural expression",
            "Global influence"
          ]
        }
      ],
      influence: [
        "Theravada Buddhism",
        "Buddhist literature",
        "Philosophical thought",
        "Cultural traditions",
        "Global Buddhism"
      ]
    },
    {
      name: "Tibetan Buddhist Canon",
      sanskritName: "तिब्बती बौद्ध त्रिपिटक",
      paliName: "Tibetan Tipiṭaka",
      period: "8th-14th Century CE",
      regions: [
        "Tibet",
        "Mongolia",
        "Himalayan regions"
      ],
      description: "A comprehensive collection of Buddhist texts translated into Tibetan, including both the Kangyur (Buddha's words) and Tengyur (commentaries).",
      characteristics: [
        "Two-part structure",
        "Extensive commentaries",
        "Tantric texts",
        "Philosophical treatises",
        "Meditation manuals"
      ],
      languages: [
        "Tibetan",
        "Sanskrit",
        "Chinese"
      ],
      significance: [
        "Complete Buddhist literature",
        "Tantric tradition",
        "Philosophical synthesis",
        "Cultural preservation",
        "Meditation guidance"
      ],
      majorWorks: [
        {
          title: "Bardo Thodol",
          sanskritTitle: "बार्डो थोदोल",
          paliTitle: "Bardo Thodol",
          date: "8th Century CE",
          author: "Padmasambhava",
          description: "The Tibetan Book of the Dead, a guide to consciousness after death",
          significance: "Most famous Tibetan Buddhist text",
          influence: [
            "Death studies",
            "Psychology",
            "Western spirituality",
            "Cultural studies",
            "Global Buddhism"
          ]
        }
      ],
      influence: [
        "Tibetan Buddhism",
        "Vajrayana tradition",
        "Global Buddhism",
        "Western spirituality",
        "Death studies"
      ]
    },
    {
      name: "Chinese Buddhist Canon",
      sanskritName: "चीनी बौद्ध त्रिपिटक",
      paliName: "Chinese Tipiṭaka",
      period: "2nd Century CE - Present",
      regions: [
        "China",
        "Japan",
        "Korea",
        "Vietnam"
      ],
      description: "The most extensive collection of Buddhist texts in Chinese, including translations from Sanskrit, Pali, and other languages, along with indigenous Chinese Buddhist works.",
      characteristics: [
        "Multiple editions",
        "Indigenous works",
        "Pure Land texts",
        "Chan literature",
        "Commentarial tradition"
      ],
      languages: [
        "Chinese",
        "Sanskrit",
        "Pali"
      ],
      significance: [
        "East Asian Buddhism",
        "Cultural synthesis",
        "Literary tradition",
        "Philosophical development",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Platform Sutra",
          sanskritTitle: "प्लेटफॉर्म सूत्र",
          paliTitle: "Platform Sutta",
          date: "8th Century CE",
          author: "Huineng",
          description: "The Sixth Patriarch's Platform Scripture, a foundational Chan text",
          significance: "Most influential Chan text",
          influence: [
            "Chan Buddhism",
            "Zen literature",
            "Philosophical thought",
            "Cultural expression",
            "Global Buddhism"
          ]
        }
      ],
      influence: [
        "East Asian Buddhism",
        "Zen tradition",
        "Global Buddhism",
        "Philosophical thought",
        "Cultural exchange"
      ]
    }
  ],
  authors: [
    {
      name: "Nāgārjuna",
      sanskritName: "नागार्जुन",
      paliName: "Nāgārjuna",
      period: "2nd-3rd Century CE",
      tradition: "Mahayana Philosophy",
      biography: {
        origin: "South India",
        training: [
          "Buddhist studies",
          "Philosophical training",
          "Meditation practice",
          "Literary composition"
        ],
        positions: [
          "Philosopher",
          "Teacher",
          "Writer"
        ],
        teachers: [
          "Various Buddhist masters",
          "Philosophical traditions"
        ],
        students: [
          "Buddhist philosophers",
          "Literary scholars"
        ],
        majorWorks: [
          {
            title: "Mūlamadhyamakakārikā",
            sanskritTitle: "मूलमध्यमककारिका",
            paliTitle: "Mūlamajjhimakārikā",
            date: "2nd-3rd Century CE",
            genre: "Philosophical treatise",
            description: "Fundamental text of Madhyamaka philosophy",
            significance: "Foundational work of Mahayana philosophy",
            keyFeatures: [
              "Philosophical analysis",
              "Logical reasoning",
              "Doctrinal exposition",
              "Literary excellence",
              "Cultural impact"
            ]
          }
        ]
      },
      contributions: {
        literary: [
          "Philosophical poetry",
          "Commentarial works",
          "Literary style",
          "Textual organization",
          "Cultural expression"
        ],
        doctrinal: [
          "Madhyamaka philosophy",
          "Emptiness doctrine",
          "Two truths theory",
          "Middle way",
          "Philosophical synthesis"
        ],
        philosophical: [
          "Logical analysis",
          "Metaphysical inquiry",
          "Epistemological theory",
          "Philosophical method",
          "Critical thinking"
        ],
        cultural: [
          "Cultural synthesis",
          "Regional influence",
          "Literary tradition",
          "Philosophical culture",
          "Global impact"
        ],
        other: [
          "Educational work",
          "Monastic development",
          "Cultural preservation",
          "Philosophical dialogue",
          "International influence"
        ]
      },
      legacy: "Nāgārjuna's work has been crucial in developing Buddhist philosophy and establishing the foundation of Mahayana thought.",
      modernRelevance: [
        "Philosophical studies",
        "Literary analysis",
        "Cultural studies",
        "Comparative religion",
        "Global philosophy"
      ]
    },
    {
      name: "Vasubandhu",
      sanskritName: "वसुबन्धु",
      paliName: "Vasubandhu",
      period: "4th-5th Century CE",
      tradition: "Yogacara Philosophy",
      biography: {
        origin: "Gandhara",
        training: [
          "Sarvastivada studies",
          "Mahayana philosophy",
          "Yogacara tradition",
          "Literary composition"
        ],
        positions: [
          "Philosopher",
          "Teacher",
          "Writer"
        ],
        teachers: [
          "Asanga",
          "Various Buddhist masters"
        ],
        students: [
          "Buddhist philosophers",
          "Yogacara practitioners"
        ],
        majorWorks: [
          {
            title: "Abhidharmakośa",
            sanskritTitle: "अभिधर्मकोश",
            paliTitle: "Abhidhammakosa",
            date: "4th Century CE",
            genre: "Philosophical treatise",
            description: "Treasury of Abhidharma, comprehensive Buddhist psychology",
            significance: "Foundational work of Buddhist psychology",
            keyFeatures: [
              "Psychological analysis",
              "Philosophical system",
              "Doctrinal exposition",
              "Literary excellence",
              "Cultural impact"
            ]
          }
        ]
      },
      contributions: {
        literary: [
          "Philosophical treatises",
          "Commentarial works",
          "Literary style",
          "Textual organization",
          "Cultural expression"
        ],
        doctrinal: [
          "Yogacara philosophy",
          "Mind-only doctrine",
          "Consciousness theory",
          "Psychological system",
          "Philosophical synthesis"
        ],
        philosophical: [
          "Psychological analysis",
          "Epistemological theory",
          "Metaphysical inquiry",
          "Philosophical method",
          "Critical thinking"
        ],
        cultural: [
          "Cultural synthesis",
          "Regional influence",
          "Literary tradition",
          "Philosophical culture",
          "Global impact"
        ],
        other: [
          "Educational work",
          "Monastic development",
          "Cultural preservation",
          "Philosophical dialogue",
          "International influence"
        ]
      },
      legacy: "Vasubandhu's work has been crucial in developing Buddhist psychology and establishing the foundation of Yogacara thought.",
      modernRelevance: [
        "Psychological studies",
        "Philosophical analysis",
        "Cultural studies",
        "Comparative religion",
        "Global philosophy"
      ]
    },
    {
      name: "Asanga",
      sanskritName: "असंग",
      paliName: "Asanga",
      period: "4th Century CE",
      tradition: "Yogacara Philosophy",
      biography: {
        origin: "Gandhara",
        training: [
          "Mahayana studies",
          "Yogacara tradition",
          "Meditation practice",
          "Literary composition"
        ],
        positions: [
          "Philosopher",
          "Teacher",
          "Writer"
        ],
        teachers: [
          "Maitreya",
          "Various Buddhist masters"
        ],
        students: [
          "Vasubandhu",
          "Buddhist philosophers"
        ],
        majorWorks: [
          {
            title: "Yogācārabhūmi",
            sanskritTitle: "योगाचारभूमि",
            paliTitle: "Yogācārabhūmi",
            date: "4th Century CE",
            genre: "Philosophical treatise",
            description: "Stages of Yogacara Practice, comprehensive meditation manual",
            significance: "Foundational work of Yogacara practice",
            keyFeatures: [
              "Meditation stages",
              "Philosophical system",
              "Practice guidance",
              "Literary excellence",
              "Cultural impact"
            ]
          }
        ]
      },
      contributions: {
        literary: [
          "Philosophical treatises",
          "Practice manuals",
          "Literary style",
          "Textual organization",
          "Cultural expression"
        ],
        doctrinal: [
          "Yogacara philosophy",
          "Mind-only doctrine",
          "Practice system",
          "Meditation theory",
          "Philosophical synthesis"
        ],
        philosophical: [
          "Meditation theory",
          "Epistemological system",
          "Metaphysical inquiry",
          "Philosophical method",
          "Critical thinking"
        ],
        cultural: [
          "Cultural synthesis",
          "Regional influence",
          "Literary tradition",
          "Philosophical culture",
          "Global impact"
        ],
        other: [
          "Educational work",
          "Monastic development",
          "Cultural preservation",
          "Philosophical dialogue",
          "International influence"
        ]
      },
      legacy: "Asanga's work has been crucial in developing Buddhist meditation theory and establishing the foundation of Yogacara practice.",
      modernRelevance: [
        "Meditation studies",
        "Philosophical analysis",
        "Cultural studies",
        "Comparative religion",
        "Global philosophy"
      ]
    }
  ],
  literaryForms: [
    {
      name: "Sutra",
      sanskritName: "सूत्र",
      paliName: "Sutta",
      category: "Sacred Text",
      description: "A genre of Buddhist literature containing discourses attributed to the Buddha or his close disciples.",
      origins: [
        "Oral tradition",
        "Buddha's teachings",
        "Early Buddhism"
      ],
      development: [
        "Written form",
        "Regional variations",
        "Commentarial tradition",
        "Modern interpretation"
      ],
      keyPractitioners: [
        {
          name: "Buddha",
          sanskritName: "बुद्ध",
          paliName: "Buddha",
          contribution: "Original teacher"
        }
      ],
      characteristics: [
        "Narrative structure",
        "Didactic content",
        "Memorable format",
        "Oral style",
        "Spiritual purpose"
      ],
      significance: [
        "Teaching tool",
        "Cultural record",
        "Literary tradition",
        "Philosophical source",
        "Spiritual guide"
      ],
      modernApplications: [
        "Contemporary literature",
        "Educational texts",
        "Philosophical works",
        "Cultural studies",
        "Global Buddhism"
      ]
    },
    {
      name: "Jataka Tales",
      sanskritName: "जातक कथाएं",
      paliName: "Jātaka",
      category: "Narrative Literature",
      description: "A collection of stories about the Buddha's previous lives, illustrating moral principles and Buddhist teachings through engaging narratives.",
      origins: [
        "Oral tradition",
        "Folk tales",
        "Early Buddhism"
      ],
      development: [
        "Written form",
        "Regional variations",
        "Artistic adaptation",
        "Modern retellings"
      ],
      keyPractitioners: [
        {
          name: "Buddha",
          sanskritName: "बुद्ध",
          paliName: "Buddha",
          contribution: "Original storyteller"
        }
      ],
      characteristics: [
        "Moral lessons",
        "Animal characters",
        "Folk wisdom",
        "Cultural elements",
        "Universal themes"
      ],
      significance: [
        "Moral education",
        "Cultural preservation",
        "Literary tradition",
        "Artistic inspiration",
        "Global influence"
      ],
      modernApplications: [
        "Children's literature",
        "Moral education",
        "Cultural studies",
        "Artistic adaptation",
        "Global Buddhism"
      ]
    },
    {
      name: "Buddhist Poetry",
      sanskritName: "बौद्ध काव्य",
      paliName: "Buddha Kāvya",
      category: "Poetic Literature",
      description: "A rich tradition of Buddhist poetry expressing spiritual insights, philosophical concepts, and devotional sentiments through verse.",
      origins: [
        "Oral tradition",
        "Sanskrit poetry",
        "Pali verses"
      ],
      development: [
        "Regional styles",
        "Modern forms",
        "Contemporary expression",
        "Global influence"
      ],
      keyPractitioners: [
        {
          name: "Ashvaghosha",
          sanskritName: "अश्वघोष",
          paliName: "Assaghosa",
          contribution: "Pioneer Buddhist poet"
        }
      ],
      characteristics: [
        "Spiritual themes",
        "Metaphorical language",
        "Emotional depth",
        "Cultural elements",
        "Universal appeal"
      ],
      significance: [
        "Spiritual expression",
        "Cultural heritage",
        "Literary tradition",
        "Philosophical insight",
        "Global influence"
      ],
      modernApplications: [
        "Contemporary poetry",
        "Spiritual writing",
        "Cultural studies",
        "Literary analysis",
        "Global Buddhism"
      ]
    }
  ],
  textualTraditions: [
    {
      name: "Mahayana Sutras",
      sanskritName: "महायान सूत्र",
      paliName: "Mahāyāna Sutta",
      period: "1st Century BCE - 2nd Century CE",
      description: "A collection of texts that form the foundation of Mahayana Buddhist thought and practice.",
      contents: [
        "Philosophical teachings",
        "Bodhisattva ideal",
        "Emptiness doctrine",
        "Skillful means",
        "Pure Land teachings"
      ],
      transmission: [
        "Oral tradition",
        "Written texts",
        "Regional variations",
        "Commentarial works",
        "Modern translations"
      ],
      significance: [
        "Mahayana foundation",
        "Philosophical development",
        "Cultural synthesis",
        "Literary influence",
        "Global impact"
      ],
      modernStudy: [
        "Academic research",
        "Philosophical analysis",
        "Cultural studies",
        "Comparative religion",
        "Contemporary practice"
      ],
      translations: [
        "Modern languages",
        "Digital formats",
        "Study editions",
        "Popular versions",
        "Global distribution"
      ]
    }
  ],
  resources: [
    {
      title: "The Buddhist Literature of Ancient Gandhara",
      author: "Richard Salomon",
      year: "2018",
      type: "Book",
      description: "Comprehensive study of early Buddhist texts and their historical context",
      language: "English",
      level: "Advanced",
      isbn: "978-1614291682",
      amazonUrl: "https://www.amazon.com/Buddhist-Literature-Ancient-Gandhara-Introduction/dp/1614291688"
    },
    {
      title: "Buddhist Scriptures",
      author: "Donald S. Lopez Jr.",
      year: "2004",
      type: "Book",
      description: "A comprehensive anthology of Buddhist texts from various traditions",
      language: "English",
      level: "Intermediate",
      isbn: "978-0140447583",
      amazonUrl: "https://www.amazon.com/Buddhist-Scriptures-Penguin-Classics/dp/014044758X"
    },
    {
      title: "The Dhammapada",
      author: "Eknath Easwaran",
      year: "2007",
      type: "Book",
      description: "Translation and commentary on one of Buddhism's most beloved texts",
      language: "English",
      level: "Beginner",
      isbn: "978-1586380205",
      amazonUrl: "https://www.amazon.com/Dhammapada-Classic-Buddhist-Text/dp/1586380206"
    }
  ]
}

export default function BuddhistLiteraturePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Buddhist Literature</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{buddhistLiteratureContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {buddhistLiteratureContent.timeline.start} - {buddhistLiteratureContent.timeline.end}</p>
            <p>{buddhistLiteratureContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {buddhistLiteratureContent.timeline.significance.map((item, index) => (
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
          {buddhistLiteratureContent.literaryTraditions.map((tradition, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {tradition.name} ({tradition.sanskritName} / {tradition.paliName})
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
          {buddhistLiteratureContent.authors.map((author, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {author.name} ({author.sanskritName} / {author.paliName})
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
          {buddhistLiteratureContent.literaryForms.map((form, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {form.name} ({form.sanskritName} / {form.paliName})
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

      {/* Textual Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Textual Traditions</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistLiteratureContent.textualTraditions.map((tradition, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {tradition.name} ({tradition.sanskritName} / {tradition.paliName})
              </h3>
              <p className="mb-2">{tradition.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Contents:</h4>
                  <ul className="list-disc pl-6">
                    {tradition.contents.map((content, idx) => (
                      <li key={idx}>{content}</li>
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

      {/* Resources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Further Reading</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {buddhistLiteratureContent.resources.map((resource, index) => (
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