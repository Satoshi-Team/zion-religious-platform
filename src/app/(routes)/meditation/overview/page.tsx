import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export async function generateMetadata() {
  return {
    title: 'Meditation Practices Across World Religions | Comprehensive Guide',
    description: 'Explore meditation techniques from Buddhist, Hindu, Christian, Islamic, Jewish, and secular traditions. Learn authentic practices with expert guidance.',
    openGraph: {
      title: 'World Religious Meditation Practices',
      description: 'Comprehensive guide to meditation across religious traditions',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'World Religious Meditation Practices',
      description: 'Comprehensive guide to meditation across religious traditions',
    }
  }
}

const meditationTraditions = [
  {
    id: 'buddhist',
    name: 'Buddhist Meditation',
    traditions: [
      {
        name: 'Vipassana',
        description: 'Insight meditation focusing on mindful awareness of body, feelings, and mind states.',
        keyPractices: [
          {
            name: 'Anapanasati',
            description: 'Mindfulness of breathing',
            steps: [
              'Find a comfortable seated position',
              'Focus attention on the breath',
              'Notice sensations at the nostrils or abdomen',
              'Return attention when mind wanders'
            ],
            duration: '20-60 minutes',
            level: 'Beginner to Advanced'
          },
          {
            name: 'Body Scanning',
            description: 'Systematic awareness of bodily sensations',
            steps: [
              'Lie down or sit comfortably',
              'Move attention systematically through body parts',
              'Observe sensations without judgment',
              'Maintain continuous awareness'
            ],
            duration: '30-45 minutes',
            level: 'Intermediate'
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
            title: 'Insight Meditation Center',
            url: 'https://www.insightmeditationcenter.org',
            type: 'Online Resources & Courses'
          }
        ]
      },
      {
        name: 'Zen (Chan)',
        description: 'Direct perception of reality through seated meditation and mindful activity.',
        keyPractices: [
          {
            name: 'Zazen',
            description: 'Seated meditation focusing on present moment awareness',
            steps: [
              'Assume proper posture',
              'Half-lotus or Burmese position',
              'Keep eyes half-open',
              'Focus on breath or maintain open awareness'
            ],
            duration: '25-45 minutes',
            level: 'All levels'
          }
        ],
        resources: [
          {
            title: 'Zen Mind, Beginner\'s Mind',
            author: 'Shunryu Suzuki',
            url: 'https://www.sfzc.org',
            type: 'Book'
          }
        ]
      }
    ]
  },
  {
    id: 'christian',
    name: 'Christian Contemplative Practices',
    traditions: [
      {
        name: 'Centering Prayer',
        description: 'Silent prayer method focusing on consent to God\'s presence and action.',
        keyPractices: [
          {
            name: 'Centering Prayer Method',
            description: 'Silent contemplation using a sacred word',
            steps: [
              'Choose a sacred word as symbol of consent to God\'s presence',
              'Sit comfortably with eyes closed',
              'Introduce sacred word gently',
              'Return to word when engaged with thoughts'
            ],
            duration: '20 minutes, twice daily',
            level: 'All levels'
          }
        ],
        resources: [
          {
            title: 'Contemplative Outreach',
            url: 'https://www.contemplativeoutreach.org',
            type: 'Organization & Resources'
          }
        ]
      },
      {
        name: 'Lectio Divina',
        description: 'Sacred reading combining scripture, meditation, prayer, and contemplation.',
        steps: [
          'Lectio (Reading)',
          'Meditatio (Meditation)',
          'Oratio (Prayer)',
          'Contemplatio (Contemplation)'
        ],
        resources: [
          {
            title: 'The Art of Lectio Divina',
            url: 'https://www.ocarm.org/en/content/lectio/what-lectio-divina',
            type: 'Guide'
          }
        ]
      }
    ]
  }
]

export default function MeditationOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Meditation Practices Across World Religions</h1>
        <p className="text-xl text-muted-foreground">
          Explore authentic meditation techniques from major religious and spiritual traditions
        </p>
      </section>

      {meditationTraditions.map((tradition) => (
        <section key={tradition.id} className="space-y-6">
          <h2 className="text-3xl font-semibold">{tradition.name}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tradition.traditions.map((practice) => (
              <Card key={practice.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{practice.name}</CardTitle>
                  <p className="text-muted-foreground">{practice.description}</p>
                </CardHeader>
                <CardContent className="flex-1 space-y-6">
                  {practice.keyPractices && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Key Practices</h3>
                      {practice.keyPractices.map((keyPractice) => (
                        <div key={keyPractice.name} className="space-y-2">
                          <h4 className="font-semibold">{keyPractice.name}</h4>
                          <p className="text-sm text-muted-foreground">{keyPractice.description}</p>
                          <div className="pl-4">
                            <h5 className="text-sm font-medium">Steps:</h5>
                            <ul className="list-disc list-inside text-sm">
                              {keyPractice.steps.map((step) => (
                                <li key={step}>{step}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex gap-4 text-sm text-muted-foreground">
                            <span>Duration: {keyPractice.duration}</span>
                            <span>Level: {keyPractice.level}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Resources</h3>
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
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
} 