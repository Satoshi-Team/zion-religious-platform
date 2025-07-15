import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Buddhist Teachings | Religious Knowledge",
  description: "Explore fundamental Buddhist teachings, from the Four Noble Truths and Noble Eightfold Path to meditation practices and philosophical concepts.",
  openGraph: {
    title: "Buddhist Teachings | Religious Knowledge",
    description: "Comprehensive guide to Buddhist philosophy and practices",
    type: "website",
  },
}

interface TeachingCategory {
  title: string
  description: string
  topics: Array<{
    name: string
    path: string
    description: string
    sanskritName?: string
  }>
}

const categories: TeachingCategory[] = [
  {
    title: "Core Teachings",
    description: "Fundamental principles and teachings of Buddhism",
    topics: [
      {
        name: "Four Noble Truths",
        path: "/teachings/buddhism/noble-truths",
        sanskritName: "Catvāri Āryasatyāni",
        description: "The foundational teaching about suffering and liberation"
      },
      {
        name: "Noble Eightfold Path",
        path: "/teachings/buddhism/eightfold-path",
        sanskritName: "Āryāṣṭāṅgamārga",
        description: "The path leading to the cessation of suffering"
      },
      {
        name: "Emptiness",
        path: "/teachings/buddhism/emptiness",
        sanskritName: "Śūnyatā",
        description: "The nature of reality and absence of inherent existence"
      },
      {
        name: "Three Marks of Existence",
        path: "/teachings/buddhism/three-marks",
        sanskritName: "Trilakṣaṇa",
        description: "The characteristics of all conditioned phenomena"
      }
    ]
  },
  {
    title: "Buddhist Practice",
    description: "Methods and approaches to Buddhist practice",
    topics: [
      {
        name: "Meditation",
        path: "/teachings/buddhism/meditation",
        sanskritName: "Bhāvanā",
        description: "Various forms of Buddhist meditation practice"
      },
      {
        name: "Mindfulness",
        path: "/teachings/buddhism/mindfulness",
        sanskritName: "Sati",
        description: "Cultivation of present-moment awareness"
      },
      {
        name: "Ethics",
        path: "/teachings/buddhism/ethics",
        sanskritName: "Śīla",
        description: "Moral principles and ethical conduct"
      },
      {
        name: "Compassion",
        path: "/teachings/buddhism/compassion",
        sanskritName: "Karuṇā",
        description: "Development of universal compassion"
      }
    ]
  },
  {
    title: "Buddhist Philosophy",
    description: "Key philosophical concepts and understanding",
    topics: [
      {
        name: "Dependent Origination",
        path: "/teachings/buddhism/dependent-origination",
        sanskritName: "Pratītyasamutpāda",
        description: "The principle of causality and interconnectedness"
      },
      {
        name: "Mind and Consciousness",
        path: "/teachings/buddhism/mind",
        sanskritName: "Citta",
        description: "Buddhist understanding of mind and mental phenomena"
      },
      {
        name: "Karma",
        path: "/teachings/buddhism/karma",
        sanskritName: "Karma",
        description: "The law of cause and effect in Buddhist thought"
      },
      {
        name: "Buddha Nature",
        path: "/teachings/buddhism/buddha-nature",
        sanskritName: "Tathāgatagarbha",
        description: "The potential for enlightenment within all beings"
      }
    ]
  }
]

export default function BuddhismPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Buddhist Teachings</h1>
        <p className="text-xl mb-4">
          Discover the profound wisdom and practical guidance of Buddhism, from its foundational teachings to advanced philosophical concepts. This comprehensive guide explores the various aspects of Buddhist thought, meditation practices, and different traditions that have developed over 2,500 years.
        </p>
      </section>

      <div className="grid gap-8">
        {categories.map((category, index) => (
          <section key={index} className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">{category.title}</h2>
              <p className="text-slate-600">{category.description}</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {category.topics.map((topic, topicIndex) => (
                <Link key={topicIndex} href={topic.path} className="block">
                  <Card className="h-full hover:bg-slate-50 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        {topic.name}
                        {topic.sanskritName && (
                          <span className="block text-sm text-slate-600 font-normal">
                            {topic.sanskritName}
                          </span>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{topic.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Buddhist Traditions</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Link href="/teachings/buddhism/theravada" className="block">
            <Card className="hover:bg-slate-50 transition-colors h-full">
              <CardHeader>
                <CardTitle>Theravada</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The Way of the Elders - Southern Buddhist tradition emphasizing individual liberation.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/buddhism/mahayana" className="block">
            <Card className="hover:bg-slate-50 transition-colors h-full">
              <CardHeader>
                <CardTitle>Mahayana</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The Great Vehicle - Northern Buddhist traditions focusing on universal liberation.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/buddhism/vajrayana" className="block">
            <Card className="hover:bg-slate-50 transition-colors h-full">
              <CardHeader>
                <CardTitle>Vajrayana</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The Diamond Vehicle - Tantric Buddhism incorporating esoteric practices.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/buddhism/zen" className="block">
            <Card className="hover:bg-slate-50 transition-colors h-full">
              <CardHeader>
                <CardTitle>Zen Buddhism</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Meditation-focused Japanese Buddhist tradition emphasizing direct experience.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Explore Other Religious Teachings</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/teachings/christianity" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Christian Teachings</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the fundamental beliefs and practices of Christianity.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/islam" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Islamic Teachings</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the core principles and practices of Islam.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/hinduism" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Hindu Teachings</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover the diverse traditions and philosophy of Hinduism.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 