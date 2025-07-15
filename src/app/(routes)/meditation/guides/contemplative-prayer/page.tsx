import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PrayerMethod {
  title: string
  description: string
  origin: string
  steps: string[]
  tips?: string[]
  scriptureReference?: string
  duration?: string
}

interface Resource {
  title: string
  author?: string
  url: string
  type: string
  description: string
  affiliate?: boolean
  affiliateUrl?: string
}

interface ContemplativePrayerContent {
  introduction: string
  biblicalFoundation: {
    description: string
    verses: Array<{
      reference: string
      text: string
    }>
  }
  methods: PrayerMethod[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Contemplative Prayer Guide | Christian Meditation Practices",
  description: "Explore the rich tradition of Christian contemplative prayer and meditation. Learn ancient and modern methods of deepening your spiritual connection through contemplative practices.",
  openGraph: {
    title: "Contemplative Prayer Guide | Christian Meditation Practices",
    description: "Comprehensive guide to Christian contemplative prayer and meditation",
    type: "website",
  },
}

const contemplativePrayerContent: ContemplativePrayerContent = {
  introduction: `Contemplative prayer is a profound form of Christian meditation that seeks to cultivate a deep, intimate relationship with God through silence, stillness, and sacred attention. This ancient practice, rooted in scripture and developed through centuries of Christian tradition, offers a path to experience God's presence beyond words and intellectual understanding.`,
  biblicalFoundation: {
    description: "The practice of contemplative prayer is deeply rooted in biblical tradition, where we find numerous examples of holy men and women seeking intimate communion with God through silence and meditation.",
    verses: [
      {
        reference: "Psalm 46:10",
        text: "Be still, and know that I am God."
      },
      {
        reference: "Matthew 6:6",
        text: "But when you pray, go into your room, close the door and pray to your Father, who is unseen."
      },
      {
        reference: "1 Kings 19:11-12",
        text: "But the Lord was not in the wind... earthquake... fire... After the fire came a gentle whisper."
      }
    ]
  },
  methods: [
    {
      title: "Centering Prayer",
      description: "A method of silent prayer that prepares us to experience God's presence within us, emphasizing interior silence and surrender.",
      origin: "Developed by Fr. Thomas Keating and other Trappist monks in the 1970s",
      steps: [
        "Choose a sacred word as the symbol of your intention to consent to God's presence",
        "Sitting comfortably with eyes closed, settle briefly and silently introduce your sacred word",
        "When you become aware of thoughts, return ever-so-gently to your sacred word",
        "At the end of the prayer period, remain in silence with eyes closed for a couple of minutes"
      ],
      tips: [
        "Practice twice daily for 20 minutes each time",
        "Don't fight thoughts or emotions; simply let them go",
        "Choose a simple, one or two syllable sacred word (e.g., 'Jesus,' 'Love,' 'Peace')",
        "Avoid changing your sacred word during the prayer period"
      ],
      duration: "20 minutes"
    },
    {
      title: "Lectio Divina",
      description: "A contemplative way of reading the Bible that leads us deeper into God's word, combining reading, reflection, prayer, and contemplation.",
      origin: "Originated with early desert fathers and formalized by Guigo II in the 12th century",
      steps: [
        "Lectio (Reading): Slowly read a short scripture passage",
        "Meditatio (Meditation): Reflect deeply on the text",
        "Oratio (Prayer): Respond to God's word through prayer",
        "Contemplatio (Contemplation): Rest in God's presence"
      ],
      tips: [
        "Choose a short passage of scripture",
        "Read slowly and attentively",
        "Listen for a word or phrase that stands out",
        "Allow space for silence between each step"
      ],
      scriptureReference: "2 Timothy 3:16-17",
      duration: "15-30 minutes"
    },
    {
      title: "The Jesus Prayer",
      description: "A short, simple prayer that helps maintain constant awareness of God's presence throughout the day.",
      origin: "Developed in the Eastern Orthodox tradition, dating back to the 5th century",
      steps: [
        "Find a quiet place and comfortable position",
        "Begin to repeat the prayer: 'Lord Jesus Christ, Son of God, have mercy on me'",
        "Synchronize the prayer with your breathing",
        "Let the prayer descend from your mind into your heart"
      ],
      tips: [
        "Start with a few minutes and gradually increase duration",
        "Use a prayer rope to maintain focus if helpful",
        "Practice during daily activities",
        "Don't force concentration; maintain gentle attention"
      ],
      duration: "Start with 5-10 minutes"
    }
  ],
  resources: [
    {
      title: "Open Mind, Open Heart",
      author: "Thomas Keating",
      url: "/resources/open-mind-open-heart",
      type: "Book",
      description: "The classic guide to Centering Prayer by one of its founders.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0826456936"
    },
    {
      title: "The Way of the Heart",
      author: "Henri Nouwen",
      url: "/resources/way-of-heart",
      type: "Book",
      description: "Connecting psychologically and spiritually in your spiritual life.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/0345463358"
    },
    {
      title: "Wooden Prayer Rope",
      author: "Orthodox Crafts",
      url: "/resources/prayer-rope",
      type: "Equipment",
      description: "Traditional 33-knot prayer rope for practicing the Jesus Prayer.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/B07XYZDEF"
    }
  ]
}

export default function ContemplativePrayerPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Contemplative Prayer Guide</h1>
        <p className="text-xl mb-8">{contemplativePrayerContent.introduction}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Biblical Foundation</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-6">{contemplativePrayerContent.biblicalFoundation.description}</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {contemplativePrayerContent.biblicalFoundation.verses.map((verse, index) => (
                <div key={index} className="p-4 bg-slate-50 rounded-lg">
                  <p className="font-medium mb-2">{verse.reference}</p>
                  <p className="text-slate-600 italic">"{verse.text}"</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Methods of Contemplative Prayer</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {contemplativePrayerContent.methods.map((method, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{method.title}</CardTitle>
                <p className="text-sm text-slate-600">{method.origin}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{method.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Steps:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {method.steps.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ul>
                  </div>
                  {method.tips && (
                    <div>
                      <h4 className="font-semibold mb-2">Helpful Tips:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {method.tips.map((tip, idx) => (
                          <li key={idx}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {method.scriptureReference && (
                    <p className="text-sm text-slate-600">
                      Scripture Reference: {method.scriptureReference}
                    </p>
                  )}
                  {method.duration && (
                    <p className="text-sm text-slate-600">
                      Suggested Duration: {method.duration}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Recommended Resources</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {contemplativePrayerContent.resources.map((resource, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
                {resource.author && (
                  <p className="text-sm text-slate-600">By {resource.author}</p>
                )}
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
        <h2 className="text-3xl font-bold mb-6">Related Practices</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/meditation/guides/beginning" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Beginning Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Start your meditation journey with fundamental practices.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/christianity/prayer" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Christian Prayer</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore different forms of Christian prayer and devotion.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/studies/practices/meditation" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Meditation Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Compare contemplative practices across traditions.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 