import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface MeditationTradition {
  name: string
  sanskritName: string
  paliName: string
  period: string
  regions: string[]
  description: string
  characteristics: string[]
  texts: string[]
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

interface Meditator {
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
    meditation: string[]
    teaching: string[]
    theoretical: string[]
    innovation: string[]
    other: string[]
  }
  legacy: string
  modernRelevance: string[]
}

interface MeditationTechnique {
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

interface MeditationMethod {
  name: string
  sanskritName: string
  paliName: string
  period: string
  description: string
  techniques: Array<{
    method: string
    application: string
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

interface BuddhistMeditationContent {
  introduction: string
  timeline: {
    start: string
    end: string
    overview: string
    significance: string[]
  }
  meditationTraditions: MeditationTradition[]
  meditators: Meditator[]
  meditationTechniques: MeditationTechnique[]
  meditationMethods: MeditationMethod[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Buddhist Meditation | Buddhist Impact",
  description: "Comprehensive exploration of Buddhist meditation traditions, techniques, and their lasting impact on modern meditation practices.",
  openGraph: {
    title: "Buddhist Meditation | Buddhist Impact",
    description: "In-depth study of Buddhist meditation heritage and its influence on modern meditation practices",
    type: "website",
  },
}

const buddhistMeditationContent: BuddhistMeditationContent = {
  introduction: `Buddhist meditation represents a sophisticated system of mental training and spiritual development that has evolved over centuries. From the early mindfulness practices to complex visualization techniques, these traditions have contributed significantly to global meditation practices. These systems combine practical methods with profound theoretical understanding, offering both immediate benefits and long-term spiritual development.`,
  timeline: {
    start: "5th Century BCE",
    end: "Present",
    overview: "Buddhist meditation emerged with the teachings of the Buddha and developed into diverse traditions across different regions. From early mindfulness practices to complex tantric methods, it has evolved while maintaining its practical orientation.",
    significance: [
      "Development of meditation systems",
      "Evolution of mindfulness practices",
      "Creation of unique techniques",
      "Influence on modern meditation",
      "Preservation of wisdom traditions",
      "Development of regional schools",
      "Cultural synthesis and exchange",
      "Contemporary global influence"
    ]
  },
  meditationTraditions: [
    {
      name: "Theravāda Meditation",
      sanskritName: "स्थविरवाद",
      paliName: "Theravāda",
      period: "3rd Century BCE - Present",
      regions: [
        "Sri Lanka",
        "Myanmar",
        "Thailand",
        "Cambodia"
      ],
      description: "A systematic meditation tradition focusing on mindfulness and insight practices, emphasizing direct experience and liberation.",
      characteristics: [
        "Mindfulness practice",
        "Insight meditation",
        "Concentration practice",
        "Analytical meditation",
        "Practical application"
      ],
      texts: [
        "Satipaṭṭhāna Sutta",
        "Ānāpānasati Sutta",
        "Visuddhimagga",
        "Vimuttimagga"
      ],
      significance: [
        "Mindfulness foundation",
        "Insight development",
        "Liberation path",
        "Ethical framework",
        "Cultural preservation"
      ],
      majorWorks: [
        {
          title: "Visuddhimagga",
          sanskritTitle: "विशुद्धिमार्ग",
          paliTitle: "Visuddhimagga",
          date: "5th Century CE",
          author: "Buddhaghosa",
          description: "Path of Purification, comprehensive meditation manual",
          significance: "Most influential Theravāda meditation text",
          influence: [
            "Theravāda Buddhism",
            "Mindfulness practice",
            "Insight meditation",
            "Meditation theory",
            "Global meditation"
          ]
        }
      ],
      influence: [
        "Theravāda Buddhism",
        "Modern mindfulness",
        "Insight meditation",
        "Meditation theory",
        "Global practice"
      ]
    },
    {
      name: "Zen Meditation",
      sanskritName: "ध्यान",
      paliName: "Jhāna",
      period: "6th Century CE - Present",
      regions: [
        "China",
        "Japan",
        "Korea",
        "Vietnam"
      ],
      description: "A direct and practical meditation tradition emphasizing immediate experience and non-conceptual awareness.",
      characteristics: [
        "Zazen practice",
        "Koan study",
        "Direct pointing",
        "Non-dual awareness",
        "Practical wisdom"
      ],
      texts: [
        "Platform Sutra",
        "Shōbōgenzō",
        "Mumonkan",
        "Blue Cliff Record"
      ],
      significance: [
        "Direct experience",
        "Non-conceptual wisdom",
        "Practical realization",
        "Cultural synthesis",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Shōbōgenzō",
          sanskritTitle: "正法眼蔵",
          paliTitle: "Shōbōgenzō",
          date: "13th Century CE",
          author: "Dōgen",
          description: "Treasury of the True Dharma Eye",
          significance: "Foundational work of Zen meditation",
          influence: [
            "Zen Buddhism",
            "Meditation practice",
            "Philosophical insight",
            "Cultural impact",
            "Global Zen"
          ]
        }
      ],
      influence: [
        "Zen Buddhism",
        "Modern meditation",
        "Philosophical insight",
        "Cultural impact",
        "Global practice"
      ]
    },
    {
      name: "Tibetan Meditation",
      sanskritName: "वज्रयान",
      paliName: "Vajrayāna",
      period: "7th Century CE - Present",
      regions: [
        "Tibet",
        "Mongolia",
        "Bhutan",
        "Himalayan regions"
      ],
      description: "A comprehensive meditation tradition combining analytical and stabilizing practices with advanced tantric methods.",
      characteristics: [
        "Analytical meditation",
        "Stabilizing meditation",
        "Visualization practice",
        "Tantric methods",
        "Compassion training"
      ],
      texts: [
        "Lamrim",
        "Lojong",
        "Mahāmudrā",
        "Dzogchen"
      ],
      significance: [
        "Comprehensive practice",
        "Advanced methods",
        "Cultural preservation",
        "Philosophical depth",
        "Global influence"
      ],
      majorWorks: [
        {
          title: "Lamrim Chenmo",
          sanskritTitle: "लमरिम चेनमो",
          paliTitle: "Lamrim Chenmo",
          date: "15th Century CE",
          author: "Tsongkhapa",
          description: "Great Treatise on the Stages of the Path",
          significance: "Most influential Tibetan meditation text",
          influence: [
            "Tibetan Buddhism",
            "Meditation practice",
            "Philosophical insight",
            "Cultural impact",
            "Global Buddhism"
          ]
        }
      ],
      influence: [
        "Tibetan Buddhism",
        "Modern meditation",
        "Philosophical insight",
        "Cultural impact",
        "Global practice"
      ]
    }
  ],
  meditators: [
    {
      name: "Buddhaghosa",
      sanskritName: "बुद्धघोष",
      paliName: "Buddhaghosa",
      period: "5th Century CE",
      tradition: "Theravāda",
      biography: {
        origin: "India",
        training: [
          "Early Buddhist studies",
          "Theravāda meditation",
          "Commentarial work",
          "Literary composition"
        ],
        positions: [
          "Meditation master",
          "Teacher",
          "Writer"
        ],
        teachers: [
          "Various Theravāda masters",
          "Traditional scholars"
        ],
        students: [
          "Numerous monks",
          "Established commentarial tradition"
        ],
        majorWorks: [
          {
            title: "Visuddhimagga",
            sanskritTitle: "विशुद्धिमार्ग",
            paliTitle: "Visuddhimagga",
            date: "5th Century CE",
            genre: "Meditation manual",
            description: "Path of Purification",
            significance: "Most influential Theravāda meditation text",
            keyFeatures: [
              "Meditation methods",
              "Theoretical framework",
              "Practical guidance",
              "Cultural context",
              "Global influence"
            ]
          }
        ]
      },
      contributions: {
        meditation: [
          "Meditation methods",
          "Theoretical framework",
          "Practical guidance",
          "Cultural context",
          "Global influence"
        ],
        teaching: [
          "Meditation instruction",
          "Textual commentary",
          "Practical guidance",
          "Cultural preservation",
          "Global dialogue"
        ],
        theoretical: [
          "Meditation theory",
          "Analytical framework",
          "Practical insight",
          "Cultural synthesis",
          "Global perspective"
        ],
        innovation: [
          "Meditation methods",
          "Teaching approach",
          "Textual organization",
          "Cultural adaptation",
          "Global impact"
        ],
        other: [
          "Educational work",
          "Monastic development",
          "Cultural preservation",
          "Meditation dialogue",
          "International influence"
        ]
      },
      legacy: "Buddhaghosa's work has been crucial in developing Theravāda meditation and establishing the foundation of systematic meditation practice.",
      modernRelevance: [
        "Meditation practice",
        "Theoretical framework",
        "Comparative studies",
        "Global meditation",
        "Cultural impact"
      ]
    },
    {
      name: "Dōgen",
      sanskritName: "道元",
      paliName: "Dōgen",
      period: "1200-1253 CE",
      tradition: "Zen",
      biography: {
        origin: "Japan",
        training: [
          "Early Buddhist studies",
          "Zen meditation",
          "Chinese Chan",
          "Literary composition"
        ],
        positions: [
          "Zen master",
          "Teacher",
          "Writer"
        ],
        teachers: [
          "Rujing",
          "Various Chan masters"
        ],
        students: [
          "Numerous disciples",
          "Established Sōtō school"
        ],
        majorWorks: [
          {
            title: "Shōbōgenzō",
            sanskritTitle: "正法眼蔵",
            paliTitle: "Shōbōgenzō",
            date: "13th Century CE",
            genre: "Zen treatise",
            description: "Treasury of the True Dharma Eye",
            significance: "Foundational work of Zen meditation",
            keyFeatures: [
              "Zen practice",
              "Philosophical insight",
              "Practical guidance",
              "Cultural context",
              "Global influence"
            ]
          }
        ]
      },
      contributions: {
        meditation: [
          "Zazen practice",
          "Philosophical insight",
          "Practical guidance",
          "Cultural context",
          "Global influence"
        ],
        teaching: [
          "Zen instruction",
          "Textual commentary",
          "Practical guidance",
          "Cultural preservation",
          "Global dialogue"
        ],
        theoretical: [
          "Zen theory",
          "Analytical framework",
          "Practical insight",
          "Cultural synthesis",
          "Global perspective"
        ],
        innovation: [
          "Zen methods",
          "Teaching approach",
          "Textual organization",
          "Cultural adaptation",
          "Global impact"
        ],
        other: [
          "Educational work",
          "Monastic development",
          "Cultural preservation",
          "Zen dialogue",
          "International influence"
        ]
      },
      legacy: "Dōgen's work has been crucial in developing Zen meditation and establishing the foundation of Japanese Zen practice.",
      modernRelevance: [
        "Zen practice",
        "Philosophical insight",
        "Comparative studies",
        "Global Zen",
        "Cultural impact"
      ]
    },
    {
      name: "Tsongkhapa",
      sanskritName: "त्सोंगखापा",
      paliName: "Tsongkhapa",
      period: "1357-1419 CE",
      tradition: "Tibetan",
      biography: {
        origin: "Tibet",
        training: [
          "Early Buddhist studies",
          "Tibetan meditation",
          "Tantric practice",
          "Literary composition"
        ],
        positions: [
          "Meditation master",
          "Teacher",
          "Writer"
        ],
        teachers: [
          "Various Tibetan masters",
          "Traditional scholars"
        ],
        students: [
          "Numerous disciples",
          "Established Gelug school"
        ],
        majorWorks: [
          {
            title: "Lamrim Chenmo",
            sanskritTitle: "लमरिम चेनमो",
            paliTitle: "Lamrim Chenmo",
            date: "15th Century CE",
            genre: "Meditation manual",
            description: "Great Treatise on the Stages of the Path",
            significance: "Most influential Tibetan meditation text",
            keyFeatures: [
              "Meditation methods",
              "Philosophical insight",
              "Practical guidance",
              "Cultural context",
              "Global influence"
            ]
          }
        ]
      },
      contributions: {
        meditation: [
          "Analytical meditation",
          "Stabilizing meditation",
          "Tantric practice",
          "Cultural context",
          "Global influence"
        ],
        teaching: [
          "Meditation instruction",
          "Textual commentary",
          "Practical guidance",
          "Cultural preservation",
          "Global dialogue"
        ],
        theoretical: [
          "Meditation theory",
          "Analytical framework",
          "Practical insight",
          "Cultural synthesis",
          "Global perspective"
        ],
        innovation: [
          "Meditation methods",
          "Teaching approach",
          "Textual organization",
          "Cultural adaptation",
          "Global impact"
        ],
        other: [
          "Educational work",
          "Monastic development",
          "Cultural preservation",
          "Meditation dialogue",
          "International influence"
        ]
      },
      legacy: "Tsongkhapa's work has been crucial in developing Tibetan meditation and establishing the foundation of systematic meditation practice.",
      modernRelevance: [
        "Meditation practice",
        "Philosophical insight",
        "Comparative studies",
        "Global meditation",
        "Cultural impact"
      ]
    }
  ],
  meditationTechniques: [
    {
      name: "Mindfulness of Breathing",
      sanskritName: "आनापानस्मृति",
      paliName: "Ānāpānasati",
      category: "Concentration",
      description: "A fundamental meditation technique focusing on the natural breath as an object of awareness.",
      origins: [
        "Early Buddhist teachings",
        "Ānāpānasati Sutta",
        "Theravāda development"
      ],
      development: [
        "Early formulations",
        "Theravāda elaboration",
        "Regional interpretations",
        "Modern applications"
      ],
      keyPractitioners: [
        {
          name: "Buddha",
          sanskritName: "बुद्ध",
          paliName: "Buddha",
          contribution: "Original formulation"
        }
      ],
      characteristics: [
        "Breath awareness",
        "Present-moment focus",
        "Mental stability",
        "Analytical approach",
        "Practical application"
      ],
      significance: [
        "Meditative foundation",
        "Mental stability",
        "Insight development",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "Stress reduction",
        "Mental health",
        "Performance enhancement",
        "Cultural studies",
        "Global practice"
      ]
    },
    {
      name: "Loving-Kindness Meditation",
      sanskritName: "मैत्रीभावना",
      paliName: "Mettā-bhāvanā",
      category: "Compassion",
      description: "A heart-centered meditation practice cultivating universal love and compassion.",
      origins: [
        "Early Buddhist teachings",
        "Karaniya Metta Sutta",
        "Theravāda development"
      ],
      development: [
        "Early formulations",
        "Theravāda elaboration",
        "Regional interpretations",
        "Modern applications"
      ],
      keyPractitioners: [
        {
          name: "Buddha",
          sanskritName: "बुद्ध",
          paliName: "Buddha",
          contribution: "Original formulation"
        }
      ],
      characteristics: [
        "Heart cultivation",
        "Universal love",
        "Compassion development",
        "Analytical approach",
        "Practical application"
      ],
      significance: [
        "Emotional balance",
        "Social harmony",
        "Ethical development",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "Emotional well-being",
        "Social harmony",
        "Ethical practice",
        "Cultural studies",
        "Global practice"
      ]
    },
    {
      name: "Zen Meditation",
      sanskritName: "ध्यान",
      paliName: "Jhāna",
      category: "Direct Experience",
      description: "A direct meditation practice emphasizing non-conceptual awareness and immediate experience.",
      origins: [
        "Chan Buddhism",
        "Zen development",
        "Japanese adaptation"
      ],
      development: [
        "Chinese Chan",
        "Japanese Zen",
        "Regional interpretations",
        "Modern applications"
      ],
      keyPractitioners: [
        {
          name: "Dōgen",
          sanskritName: "道元",
          paliName: "Dōgen",
          contribution: "Systematic formulation"
        }
      ],
      characteristics: [
        "Direct experience",
        "Non-conceptual awareness",
        "Present-moment focus",
        "Analytical approach",
        "Practical application"
      ],
      significance: [
        "Immediate insight",
        "Non-dual wisdom",
        "Practical realization",
        "Cultural impact",
        "Global influence"
      ],
      modernApplications: [
        "Stress reduction",
        "Mental clarity",
        "Performance enhancement",
        "Cultural studies",
        "Global practice"
      ]
    }
  ],
  meditationMethods: [
    {
      name: "Vipassanā Meditation",
      sanskritName: "विपश्यना",
      paliName: "Vipassanā",
      period: "Ancient to Present",
      description: "A systematic method of insight meditation in Buddhism, involving careful observation of mental and physical phenomena.",
      techniques: [
        {
          method: "Mindful observation",
          application: "Phenomenal awareness",
          features: [
            "Present-moment focus",
            "Non-judgmental stance",
            "Clear awareness",
            "Practical application",
            "Cultural context"
          ]
        }
      ],
      significance: [
        "Insight development",
        "Liberation path",
        "Practical wisdom",
        "Cultural preservation",
        "Global influence"
      ],
      evolution: "Developed from early Buddhist methods, modern versions incorporate contemporary psychological approaches",
      modernUse: [
        "Stress reduction",
        "Mental health",
        "Performance enhancement",
        "Cultural analysis",
        "Global dialogue"
      ]
    }
  ],
  resources: [
    {
      title: "The Heart of Buddhist Meditation",
      author: "Nyanaponika Thera",
      year: "1962",
      type: "Book",
      description: "Comprehensive guide to Buddhist meditation practices and their application in modern life",
      language: "English",
      level: "Intermediate",
      isbn: "978-0877730551",
      amazonUrl: "https://www.amazon.com/Heart-Buddhist-Meditation-Nyanaponika-Thera/dp/0877730558"
    },
    {
      title: "Zen Mind, Beginner's Mind",
      author: "Shunryu Suzuki",
      year: "1970",
      type: "Book",
      description: "Classic introduction to Zen meditation practice and philosophy",
      language: "English",
      level: "Beginner",
      isbn: "978-0834800793",
      amazonUrl: "https://www.amazon.com/Zen-Mind-Beginners-Shunryu-Suzuki/dp/0834800799"
    },
    {
      title: "The Tibetan Book of Meditation",
      author: "Lama Christie McNally",
      year: "2006",
      type: "Book",
      description: "Practical guide to Tibetan Buddhist meditation techniques and their modern applications",
      language: "English",
      level: "Intermediate",
      isbn: "978-1590303451",
      amazonUrl: "https://www.amazon.com/Tibetan-Book-Meditation-Christie-McNally/dp/1590303453"
    }
  ]
}

export default function BuddhistMeditationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Buddhist Meditation</h1>
      
      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{buddhistMeditationContent.introduction}</p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Historical Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p><strong>Period:</strong> {buddhistMeditationContent.timeline.start} - {buddhistMeditationContent.timeline.end}</p>
            <p>{buddhistMeditationContent.timeline.overview}</p>
            <div>
              <h3 className="font-semibold mb-2">Key Developments:</h3>
              <ul className="list-disc pl-6">
                {buddhistMeditationContent.timeline.significance.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Meditation Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Meditation Traditions</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistMeditationContent.meditationTraditions.map((tradition, index) => (
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

      {/* Meditators */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notable Meditators</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistMeditationContent.meditators.map((meditator, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {meditator.name} ({meditator.sanskritName} / {meditator.paliName})
              </h3>
              <p className="mb-2">Period: {meditator.period}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Contributions:</h4>
                  <ul className="list-disc pl-6">
                    {Object.entries(meditator.contributions).map(([category, items]) => (
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
                  <p>{meditator.legacy}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Meditation Techniques */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Meditation Techniques</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistMeditationContent.meditationTechniques.map((technique, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {technique.name} ({technique.sanskritName} / {technique.paliName})
              </h3>
              <p className="mb-2">{technique.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Characteristics:</h4>
                  <ul className="list-disc pl-6">
                    {technique.characteristics.map((char, idx) => (
                      <li key={idx}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Modern Applications:</h4>
                  <ul className="list-disc pl-6">
                    {technique.modernApplications.map((app, idx) => (
                      <li key={idx}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Meditation Methods */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Meditation Methods</CardTitle>
        </CardHeader>
        <CardContent>
          {buddhistMeditationContent.meditationMethods.map((method, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {method.name} ({method.sanskritName} / {method.paliName})
              </h3>
              <p className="mb-2">{method.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Techniques:</h4>
                  <ul className="list-disc pl-6">
                    {method.techniques.map((item, idx) => (
                      <li key={idx}>
                        <strong>{item.method}:</strong>
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
                    {method.modernUse.map((use, idx) => (
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
            {buddhistMeditationContent.resources.map((resource, index) => (
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

      {/* Further Reading CTA */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Explore More Buddhist Meditation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-lg">
              Discover more about Buddhist meditation, its history, and its influence on modern meditation practices.
            </p>
            <Link href="/religion/buddhism/impact/psychology">
              <Button size="lg" className="mt-4">
                Explore Buddhist Psychology
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 