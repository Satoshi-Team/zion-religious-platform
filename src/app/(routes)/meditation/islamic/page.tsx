import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Resource {
  title: string
  author: string
  url: string
  type: string
  description: string
  year?: number
  publisher?: string
  language?: string[]
}

interface Practice {
  name: string
  arabicName: string
  description: string
  origin: string
  quranicReference?: {
    surah: string
    ayah: string
    text: string
    translation: string
  }[]
  hadithReference?: {
    collection: string
    reference: string
    text: string
  }[]
  method: {
    prerequisites: string[]
    steps: string[]
    timing: string
    duration: string
    recommendations: string[]
  }
  benefits: string[]
  resources: Resource[]
}

const islamicMeditation: Practice[] = [
  {
    name: "Muraqabah",
    arabicName: "مراقبة",
    description: "Islamic meditation focusing on self-observation and spiritual vigilance",
    origin: "Derived from Quranic teachings and Prophetic traditions",
    quranicReference: [
      {
        surah: "Qaf",
        ayah: "50:16",
        text: "وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ",
        translation: "And We are closer to him than his jugular vein"
      }
    ],
    method: {
      prerequisites: [
        "Ritual purity (wudu)",
        "Quiet environment",
        "Comfortable sitting position",
        "Clean, modest clothing"
      ],
      steps: [
        "Begin with the intention (niyyah) for spiritual connection",
        "Focus on divine presence and attributes",
        "Observe thoughts without attachment",
        "Return focus to divine remembrance when distracted",
        "Conclude with gratitude and prayers"
      ],
      timing: "Preferably after dawn (Fajr) or night (Tahajjud) prayers",
      duration: "15-30 minutes",
      recommendations: [
        "Regular daily practice",
        "Gradual increase in duration",
        "Maintain focus on divine presence"
      ]
    },
    benefits: [
      "Enhanced spiritual awareness",
      "Improved concentration in prayer",
      "Emotional balance",
      "Deeper understanding of divine attributes",
      "Increased mindfulness in daily life"
    ],
    resources: [
      {
        title: "The Path to Spiritual Excellence",
        author: "Shaykh Nuh Ha Mim Keller",
        url: "https://www.masud.co.uk/ISLAM/nuh/spiritualexcellence.htm",
        type: "Article",
        description: "Comprehensive guide to Islamic meditation practices",
        language: ["English", "Arabic"]
      }
    ]
  },
  {
    name: "Dhikr",
    arabicName: "ذِكْر",
    description: "Rhythmic repetition of divine names and phrases",
    origin: "Established in the Quran and Prophetic tradition",
    quranicReference: [
      {
        surah: "Al-Ra'd",
        ayah: "13:28",
        text: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
        translation: "Verily, in the remembrance of Allah do hearts find rest"
      }
    ],
    method: {
      prerequisites: [
        "Ritual purity",
        "Facing the Qibla (if possible)",
        "Peaceful environment"
      ],
      steps: [
        "Begin with seeking forgiveness (Istighfar)",
        "Choose specific divine names or phrases",
        "Maintain rhythmic repetition",
        "Focus on meaning while reciting",
        "Conclude with personal supplications"
      ],
      timing: "Any time, but especially after prescribed prayers",
      duration: "Minimum 15 minutes",
      recommendations: [
        "Use prayer beads (tasbih) to count repetitions",
        "Practice both silently and audibly",
        "Maintain regular schedule"
      ]
    },
    benefits: [
      "Heart purification",
      "Stress relief",
      "Increased God-consciousness",
      "Improved focus",
      "Spiritual protection"
    ],
    resources: [
      {
        title: "The Science of Dhikr",
        author: "Dr. Umar Faruq Abd-Allah",
        url: "https://www.nawawi.org/courses/dhikr",
        type: "Course",
        description: "Academic exploration of Islamic remembrance practices",
        year: 2021
      }
    ]
  },
  {
    name: "Tafakkur",
    arabicName: "تفكر",
    description: "Contemplative meditation on creation and divine signs",
    origin: "Based on Quranic injunctions to reflect and contemplate",
    quranicReference: [
      {
        surah: "Al-Imran",
        ayah: "3:190-191",
        text: "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ",
        translation: "Indeed, in the creation of the heavens and earth and the alternation of night and day are signs for people of understanding"
      }
    ],
    method: {
      prerequisites: [
        "Clear mind",
        "Natural setting (if possible)",
        "Basic knowledge of Islamic teachings"
      ],
      steps: [
        "Select a subject for contemplation",
        "Observe deeply and mindfully",
        "Connect observations to divine attributes",
        "Journal insights and reflections",
        "Share beneficial insights with others"
      ],
      timing: "Any time, especially during nature walks or quiet moments",
      duration: "20-60 minutes",
      recommendations: [
        "Start with simple observations",
        "Progress to deeper metaphysical contemplation",
        "Maintain regular practice"
      ]
    },
    benefits: [
      "Deeper understanding of creation",
      "Enhanced spiritual insight",
      "Increased gratitude",
      "Improved critical thinking",
      "Stronger connection to divine signs"
    ],
    resources: [
      {
        title: "The Art of Spiritual Reflection",
        author: "Shaykh Hamza Yusuf",
        url: "https://sandala.org/courses/tafakkur",
        type: "Online Course",
        description: "Comprehensive guide to Islamic contemplative practices",
        year: 2022
      }
    ]
  }
]

export default function IslamicMeditationPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Islamic Meditation Practices</h1>
        <p className="text-xl text-muted-foreground">
          Explore traditional Islamic contemplative and meditative practices
        </p>
      </section>

      {islamicMeditation.map((practice) => (
        <section key={practice.name} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-col space-y-2">
                <span>{practice.name}</span>
                <span className="text-xl font-arabic">{practice.arabicName}</span>
              </CardTitle>
              <p className="text-muted-foreground">{practice.description}</p>
              <p className="text-sm">Origin: {practice.origin}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Quranic References */}
              {practice.quranicReference && (
                <div className="space-y-4">
                  <h3 className="font-semibold">Quranic References</h3>
                  {practice.quranicReference.map((ref) => (
                    <div key={ref.ayah} className="space-y-2">
                      <p className="text-sm font-medium">
                        Surah {ref.surah}, Verse {ref.ayah}
                      </p>
                      <p className="font-arabic text-lg text-right">{ref.text}</p>
                      <p className="text-sm italic">{ref.translation}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Method */}
              <div className="space-y-4">
                <h3 className="font-semibold">Method</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Prerequisites:</h4>
                    <ul className="list-disc list-inside text-sm">
                      {practice.method.prerequisites.map((prereq) => (
                        <li key={prereq}>{prereq}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Steps:</h4>
                    <ol className="list-decimal list-inside text-sm">
                      {practice.method.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">Timing: </span>
                      {practice.method.timing}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Duration: </span>
                      {practice.method.duration}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Recommendations:</h4>
                    <ul className="list-disc list-inside text-sm">
                      {practice.method.recommendations.map((rec) => (
                        <li key={rec}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-2">
                <h3 className="font-semibold">Benefits</h3>
                <ul className="list-disc list-inside text-sm">
                  {practice.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="space-y-4">
                <h3 className="font-semibold">Resources</h3>
                <div className="grid gap-2">
                  {practice.resources.map((resource) => (
                    <a
                      key={resource.title}
                      href={resource.url}
                      className="block p-2 bg-secondary rounded-md hover:bg-secondary/90"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-medium">{resource.title}</span>
                          <p className="text-sm text-muted-foreground">
                            by {resource.author}
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {resource.type}
                        </span>
                      </div>
                      <p className="text-sm mt-1">{resource.description}</p>
                      {resource.language && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Available in: {resource.language.join(", ")}
                        </p>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      ))}
    </div>
  )
} 