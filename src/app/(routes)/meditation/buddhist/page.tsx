import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Resource {
  title: string
  author?: string
  url: string
  type: string
}

interface ResearchStudy {
  title: string
  source: string
  year: number
  findings: string
}

interface MeditationTechnique {
  name: string
  description?: string
  instructions?: string[]
  benefits?: string[]
  duration?: string
  level?: string
  areas?: string[]
  objects?: string[]
  stages?: string[]
  posture?: string[]
}

interface Practice {
  name: string
  description: string
  techniques: MeditationTechnique[]
  resources?: Resource[]
}

interface Tradition {
  id: string
  name: string
  description: string
  practices: Practice[]
}

interface ModernApplication {
  name: string
  description: string
  components: string[]
  research: ResearchStudy[]
}

interface BuddhistMeditation {
  traditions: Tradition[]
  modernApplications: ModernApplication[]
}

export async function generateMetadata() {
  return {
    title: 'Buddhist Meditation Practices | Traditional & Modern Approaches',
    description: 'Comprehensive guide to Buddhist meditation techniques including Vipassana, Samatha, Zen, and Tibetan practices. Learn authentic methods with expert guidance.',
    openGraph: {
      title: 'Buddhist Meditation Practices',
      description: 'Complete guide to Buddhist meditation traditions and techniques',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Buddhist Meditation Practices',
      description: 'Complete guide to Buddhist meditation traditions and techniques',
    }
  }
}

const buddhistMeditation: BuddhistMeditation = {
  traditions: [
    {
      id: 'theravada',
      name: 'Theravada Meditation',
      description: 'Traditional practices from the earliest Buddhist school',
      practices: [
        {
          name: 'Vipassana (Insight Meditation)',
          description: 'Development of clear seeing into the nature of reality',
          techniques: [
            {
              name: 'Mindfulness of Breathing (Anapanasati)',
              instructions: [
                'Find a quiet place and comfortable posture',
                'Focus attention on the sensation of breathing',
                'Notice the breath at the nostrils or abdomen',
                'Maintain gentle but firm attention',
                'Note when mind wanders and return to breath'
              ],
              benefits: [
                'Develops concentration',
                'Calms the mind',
                'Builds foundation for insight practice',
                'Reduces stress and anxiety'
              ],
              duration: '20-60 minutes',
              level: 'Beginner to Advanced'
            },
            {
              name: 'Four Foundations of Mindfulness',
              areas: [
                'Mindfulness of Body (Kayanupassana)',
                'Mindfulness of Feelings (Vedananupassana)',
                'Mindfulness of Mind (Cittanupassana)',
                'Mindfulness of Mental Objects (Dhammanupassana)'
              ],
              instructions: [
                'Systematically observe each foundation',
                'Notice characteristics of impermanence',
                'Maintain non-judgmental awareness',
                'Develop clear comprehension'
              ]
            }
          ],
          resources: [
            {
              title: 'Mindfulness in Plain English',
              author: 'Bhante Gunaratana',
              url: 'https://www.vipassana.com/meditation/mindfulness_in_plain_english.html',
              type: 'Book'
            },
            {
              title: 'Insight Meditation Society',
              url: 'https://www.dharma.org',
              type: 'Organization'
            }
          ]
        },
        {
          name: 'Samatha (Concentration Meditation)',
          description: 'Development of mental concentration and tranquility',
          techniques: [
            {
              name: 'Kasina Practice',
              description: 'Concentration on visual objects',
              objects: [
                'Earth kasina',
                'Water kasina',
                'Fire kasina',
                'Air kasina',
                'Color kasinas'
              ],
              instructions: [
                'Choose appropriate kasina object',
                'Focus attention exclusively on object',
                'Maintain steady concentration',
                'Progress through stages of absorption'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'zen',
      name: 'Zen (Chan) Meditation',
      description: 'Japanese and Chinese traditions emphasizing direct experience',
      practices: [
        {
          name: 'Zazen (Seated Meditation)',
          description: 'Core practice of Zen Buddhism',
          techniques: [
            {
              name: 'Shikantaza (Just Sitting)',
              instructions: [
                'Assume stable posture (full or half lotus)',
                'Keep spine straight, chin tucked',
                'Eyes half-open, focused few feet ahead',
                'Maintain open awareness without focus object'
              ],
              posture: [
                'Cross-legged on cushion (zafu)',
                'Hands in cosmic mudra',
                'Shoulders relaxed, back straight',
                'Tongue touching roof of mouth'
              ]
            }
          ],
          resources: [
            {
              title: 'Soto Zen Buddhist Association',
              url: 'https://szba.org',
              type: 'Organization'
            }
          ]
        }
      ]
    },
    {
      id: 'tibetan',
      name: 'Tibetan Buddhist Meditation',
      description: 'Vajrayana practices combining concentration and visualization',
      practices: [
        {
          name: 'Shamatha-Vipashyana',
          description: 'Combined practice of calm abiding and insight',
          techniques: [
            {
              name: 'Mindfulness with an Object',
              objects: [
                'Breath',
                'Visual object (Buddha image)',
                'Sound (mantra)',
                'Mental image'
              ],
              stages: [
                'Settling the mind',
                'Continuous attention',
                'Resetting attention',
                'Close attention',
                'Taming the mind',
                'Pacifying the mind',
                'Complete pacification',
                'Single-pointed attention',
                'Attentional balance'
              ]
            }
          ]
        }
      ]
    }
  ],
  modernApplications: [
    {
      name: 'Mindfulness-Based Stress Reduction (MBSR)',
      description: 'Secular program based on Buddhist mindfulness',
      components: [
        'Body scan meditation',
        'Sitting meditation',
        'Walking meditation',
        'Mindful movement'
      ],
      research: [
        {
          title: 'Effects of MBSR on anxiety and depression',
          source: 'Journal of Consulting and Clinical Psychology',
          year: 2020,
          findings: 'Significant reduction in symptoms of anxiety and depression'
        }
      ]
    }
  ]
}

export default function BuddhistMeditationPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Buddhist Meditation Practices</h1>
        <p className="text-xl text-muted-foreground">
          Explore authentic Buddhist meditation techniques from various traditions
        </p>
      </section>

      {buddhistMeditation.traditions.map((tradition) => (
        <section key={tradition.id} className="space-y-6">
          <h2 className="text-3xl font-semibold">{tradition.name}</h2>
          <p className="text-lg text-muted-foreground">{tradition.description}</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tradition.practices.map((practice) => (
              <Card key={practice.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{practice.name}</CardTitle>
                  <p className="text-muted-foreground">{practice.description}</p>
                </CardHeader>
                <CardContent className="flex-1 space-y-6">
                  {practice.techniques.map((technique) => (
                    <div key={technique.name} className="space-y-4">
                      <h4 className="font-semibold">{technique.name}</h4>
                      {technique.instructions && (
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium">Instructions:</h5>
                          <ul className="list-disc list-inside text-sm">
                            {technique.instructions.map((instruction) => (
                              <li key={instruction}>{instruction}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {technique.benefits && (
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium">Benefits:</h5>
                          <ul className="list-disc list-inside text-sm">
                            {technique.benefits.map((benefit) => (
                              <li key={benefit}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {technique.areas && (
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium">Areas of Practice:</h5>
                          <ul className="list-disc list-inside text-sm">
                            {technique.areas.map((area) => (
                              <li key={area}>{area}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {technique.objects && (
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium">Objects of Meditation:</h5>
                          <ul className="list-disc list-inside text-sm">
                            {technique.objects.map((object) => (
                              <li key={object}>{object}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {technique.stages && (
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium">Stages of Practice:</h5>
                          <ul className="list-disc list-inside text-sm">
                            {technique.stages.map((stage) => (
                              <li key={stage}>{stage}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {practice.resources && (
                    <div className="space-y-4">
                      <h4 className="font-semibold">Resources</h4>
                      <div className="grid gap-2">
                        {practice.resources.map((resource) => (
                          <a
                            key={resource.title}
                            href={resource.url}
                            className="flex items-center justify-between p-2 bg-secondary rounded-md hover:bg-secondary/90"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>{resource.title}</span>
                            <span className="text-sm text-muted-foreground">{resource.type}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Modern Applications</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {buddhistMeditation.modernApplications.map((application) => (
            <Card key={application.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{application.name}</CardTitle>
                <p className="text-muted-foreground">{application.description}</p>
              </CardHeader>
              <CardContent className="flex-1 space-y-6">
                <div className="space-y-2">
                  <h4 className="font-semibold">Components</h4>
                  <ul className="list-disc list-inside text-sm">
                    {application.components.map((component) => (
                      <li key={component}>{component}</li>
                    ))}
                  </ul>
                </div>
                {application.research && (
                  <div className="space-y-4">
                    <h4 className="font-semibold">Research Findings</h4>
                    {application.research.map((study) => (
                      <div key={study.title} className="text-sm">
                        <p className="font-medium">{study.title}</p>
                        <p className="text-muted-foreground">
                          {study.source} ({study.year})
                        </p>
                        <p>{study.findings}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
} 