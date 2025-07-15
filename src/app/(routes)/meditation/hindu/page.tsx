import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Sanskrit {
  devanagari: string
  iast: string // International Alphabet of Sanskrit Transliteration
  translation: string
}

interface TextReference {
  text: string
  verse: string
  sanskrit: Sanskrit
  explanation: string
  source: string
}

interface Technique {
  name: string
  sanskrit: Sanskrit
  description: string
  origin: {
    tradition: string
    period: string
    texts: TextReference[]
  }
  method: {
    prerequisites: string[]
    steps: string[]
    mantras?: Sanskrit[]
    duration: string
    frequency: string
    contraindications?: string[]
  }
  benefits: {
    spiritual: string[]
    mental: string[]
    physical: string[]
    research?: {
      study: string
      findings: string
      year: number
      source: string
    }[]
  }
  resources: {
    traditional: {
      title: string
      author: string
      url: string
      type: string
      language: string[]
    }[]
    modern: {
      title: string
      author: string
      url: string
      type: string
      year: number
    }[]
  }
}

const hinduMeditation: Technique[] = [
  {
    name: "Trataka",
    sanskrit: {
      devanagari: "त्राटक",
      iast: "trāṭaka",
      translation: "to gaze steadily"
    },
    description: "Steady gazing meditation technique that develops concentration and awakens the third eye (ajna chakra)",
    origin: {
      tradition: "Hatha Yoga",
      period: "Medieval period (c. 1100-1500 CE)",
      texts: [
        {
          text: "Hatha Yoga Pradipika",
          verse: "2.31-32",
          sanskrit: {
            devanagari: "निरीक्षेन्निश्चलदृशा सूक्ष्मलक्ष्यं समाहितः।",
            iast: "nirīkṣenniścaladṛśā sūkṣmalakṣyaṃ samāhitaḥ",
            translation: "Gaze steadily with an unwavering gaze at a small mark, being well-seated"
          },
          explanation: "The classical text describes the practice and its benefits",
          source: "Swami Muktibodhananda's translation"
        }
      ]
    },
    method: {
      prerequisites: [
        "Empty stomach (4 hours after meals)",
        "Quiet, dimly lit room",
        "Comfortable seated position",
        "Candle or black dot on white background",
        "Clean eyes"
      ],
      steps: [
        "Sit 2-3 feet from the object of focus",
        "Keep spine straight and body relaxed",
        "Gaze steadily at the object without blinking",
        "When tears come, close eyes and visualize the object",
        "Alternate between external and internal gazing",
        "End with palming (covering eyes with warm palms)"
      ],
      duration: "10-15 minutes total",
      frequency: "Daily practice, preferably at sunrise or sunset",
      contraindications: [
        "Acute eye conditions",
        "Epilepsy",
        "Severe anxiety",
        "Acute mental disorders"
      ]
    },
    benefits: {
      spiritual: [
        "Awakens ajna chakra (third eye)",
        "Develops one-pointed concentration",
        "Enhances meditation ability",
        "Increases inner awareness"
      ],
      mental: [
        "Improves concentration",
        "Reduces anxiety and mental tension",
        "Enhances memory",
        "Develops willpower"
      ],
      physical: [
        "Strengthens eye muscles",
        "Relieves eye strain",
        "Helps with insomnia",
        "Improves vision"
      ],
      research: [
        {
          study: "Effect of Trataka on Cognitive Functions",
          findings: "Significant improvement in selective and focused attention",
          year: 2019,
          source: "International Journal of Yoga"
        }
      ]
    },
    resources: {
      traditional: [
        {
          title: "Hatha Yoga Pradipika with Commentary",
          author: "Swami Muktibodhananda",
          url: "https://www.biharyoga.net/publications/hatha-yoga-pradipika",
          type: "Book",
          language: ["English", "Sanskrit", "Hindi"]
        }
      ],
      modern: [
        {
          title: "Trataka: Traditional Practice for Modern Life",
          author: "Dr. David Frawley",
          url: "https://www.vedanet.com/trataka-meditation",
          type: "Online Course",
          year: 2021
        }
      ]
    }
  }
  // Additional techniques would follow...
]

export default function HinduMeditationPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Hindu Meditation Practices</h1>
        <p className="text-xl text-muted-foreground">
          Explore traditional Hindu meditation techniques and their authentic applications
        </p>
      </section>

      {hinduMeditation.map((technique) => (
        <section key={technique.name} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-col space-y-2">
                <span>{technique.name}</span>
                <div className="flex space-x-4 text-lg">
                  <span className="font-devanagari">{technique.sanskrit.devanagari}</span>
                  <span className="italic">{technique.sanskrit.iast}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  "{technique.sanskrit.translation}"
                </span>
              </CardTitle>
              <p className="text-muted-foreground mt-4">{technique.description}</p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Origin Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Historical Origins</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm"><span className="font-medium">Tradition:</span> {technique.origin.tradition}</p>
                    <p className="text-sm"><span className="font-medium">Period:</span> {technique.origin.period}</p>
                  </div>
                  <div className="space-y-4">
                    {technique.origin.texts.map((text) => (
                      <div key={text.verse} className="space-y-2">
                        <p className="font-medium">{text.text} {text.verse}</p>
                        <p className="font-devanagari text-lg">{text.sanskrit.devanagari}</p>
                        <p className="italic text-sm">{text.sanskrit.iast}</p>
                        <p className="text-sm">"{text.sanskrit.translation}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Method Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Practice Method</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Prerequisites:</h4>
                      <ul className="list-disc list-inside text-sm">
                        {technique.method.prerequisites.map((prereq) => (
                          <li key={prereq}>{prereq}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Steps:</h4>
                      <ol className="list-decimal list-inside text-sm">
                        {technique.method.steps.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm"><span className="font-medium">Duration:</span> {technique.method.duration}</p>
                      <p className="text-sm"><span className="font-medium">Frequency:</span> {technique.method.frequency}</p>
                    </div>
                    {technique.method.contraindications && (
                      <div>
                        <h4 className="font-medium">Contraindications:</h4>
                        <ul className="list-disc list-inside text-sm">
                          {technique.method.contraindications.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Benefits</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium">Spiritual Benefits</h4>
                    <ul className="list-disc list-inside text-sm">
                      {technique.benefits.spiritual.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Mental Benefits</h4>
                    <ul className="list-disc list-inside text-sm">
                      {technique.benefits.mental.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Physical Benefits</h4>
                    <ul className="list-disc list-inside text-sm">
                      {technique.benefits.physical.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {technique.benefits.research && (
                  <div className="mt-4">
                    <h4 className="font-medium">Research Findings</h4>
                    <div className="space-y-2">
                      {technique.benefits.research.map((study) => (
                        <div key={study.study} className="text-sm">
                          <p className="font-medium">{study.study} ({study.year})</p>
                          <p>{study.findings}</p>
                          <p className="text-muted-foreground">Source: {study.source}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Resources</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Traditional Sources</h4>
                    <div className="space-y-2">
                      {technique.resources.traditional.map((resource) => (
                        <a
                          key={resource.title}
                          href={resource.url}
                          className="block p-2 bg-secondary rounded-md hover:bg-secondary/90"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex justify-between">
                            <span className="font-medium">{resource.title}</span>
                            <span className="text-sm text-muted-foreground">{resource.type}</span>
                          </div>
                          <p className="text-sm">by {resource.author}</p>
                          <p className="text-sm text-muted-foreground">
                            Available in: {resource.language.join(", ")}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Modern Resources</h4>
                    <div className="space-y-2">
                      {technique.resources.modern.map((resource) => (
                        <a
                          key={resource.title}
                          href={resource.url}
                          className="block p-2 bg-secondary rounded-md hover:bg-secondary/90"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex justify-between">
                            <span className="font-medium">{resource.title}</span>
                            <span className="text-sm text-muted-foreground">{resource.type}</span>
                          </div>
                          <p className="text-sm">by {resource.author}</p>
                          <p className="text-sm text-muted-foreground">{resource.year}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      ))}
    </div>
  )
} 