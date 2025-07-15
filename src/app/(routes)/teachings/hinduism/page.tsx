import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hindu Teachings | Religious Knowledge",
  description: "Explore fundamental Hindu teachings, from Vedantic philosophy and core concepts to practices and traditions.",
  openGraph: {
    title: "Hindu Teachings | Religious Knowledge",
    description: "Comprehensive guide to Hindu philosophy and practices",
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
    title: "Core Concepts",
    description: "Fundamental principles and concepts of Hinduism",
    topics: [
      {
        name: "Brahman and Atman",
        path: "/teachings/hinduism/brahman-atman",
        sanskritName: "ब्रह्मन् और आत्मन्",
        description: "The ultimate reality and the individual self"
      },
      {
        name: "Dharma",
        path: "/teachings/hinduism/dharma",
        sanskritName: "धर्म",
        description: "Cosmic order, duty, and righteousness"
      },
      {
        name: "Karma",
        path: "/teachings/hinduism/karma",
        sanskritName: "कर्म",
        description: "The law of cause and effect"
      },
      {
        name: "Moksha",
        path: "/teachings/hinduism/moksha",
        sanskritName: "मोक्ष",
        description: "Liberation from the cycle of rebirth"
      }
    ]
  },
  {
    title: "Hindu Philosophy",
    description: "Major philosophical schools and concepts",
    topics: [
      {
        name: "Vedanta",
        path: "/teachings/hinduism/vedanta",
        sanskritName: "वेदान्त",
        description: "The culmination of Vedic knowledge"
      },
      {
        name: "Yoga Philosophy",
        path: "/teachings/hinduism/yoga-philosophy",
        sanskritName: "योग दर्शन",
        description: "The philosophy of union with the divine"
      },
      {
        name: "Samkhya",
        path: "/teachings/hinduism/samkhya",
        sanskritName: "सांख्य",
        description: "The enumeration of cosmic principles"
      },
      {
        name: "Bhakti Philosophy",
        path: "/teachings/hinduism/bhakti",
        sanskritName: "भक्ति",
        description: "The philosophy of divine love and devotion"
      }
    ]
  },
  {
    title: "Practices and Worship",
    description: "Religious practices and forms of worship",
    topics: [
      {
        name: "Puja",
        path: "/teachings/hinduism/puja",
        sanskritName: "पूजा",
        description: "Ritual worship and offerings"
      },
      {
        name: "Meditation",
        path: "/teachings/hinduism/meditation",
        sanskritName: "ध्यान",
        description: "Techniques of mental concentration"
      },
      {
        name: "Yoga Practice",
        path: "/teachings/hinduism/yoga",
        sanskritName: "योग",
        description: "The practice of spiritual disciplines"
      },
      {
        name: "Mantras",
        path: "/teachings/hinduism/mantras",
        sanskritName: "मन्त्र",
        description: "Sacred sounds and chants"
      }
    ]
  }
]

export default function HinduismPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Hindu Teachings</h1>
        <p className="text-xl mb-4">
          Explore the rich tapestry of Hindu philosophy, practices, and traditions. This comprehensive guide covers the fundamental concepts, philosophical schools, and spiritual practices that have shaped one of the world's oldest living religions.
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
        <h2 className="text-3xl font-bold mb-6">Hindu Traditions</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Link href="/teachings/hinduism/vaishnavism" className="block">
            <Card className="hover:bg-slate-50 transition-colors h-full">
              <CardHeader>
                <CardTitle>Vaishnavism</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Devotion to Vishnu and his avatars, particularly Krishna and Rama.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/hinduism/shaivism" className="block">
            <Card className="hover:bg-slate-50 transition-colors h-full">
              <CardHeader>
                <CardTitle>Shaivism</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Traditions centered on the worship of Shiva as the supreme deity.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/hinduism/shaktism" className="block">
            <Card className="hover:bg-slate-50 transition-colors h-full">
              <CardHeader>
                <CardTitle>Shaktism</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Focus on divine feminine power and the worship of Devi.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/hinduism/smartism" className="block">
            <Card className="hover:bg-slate-50 transition-colors h-full">
              <CardHeader>
                <CardTitle>Smartism</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Liberal tradition that accepts all major Hindu deities as forms of the one Brahman.</p>
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
          <Link href="/teachings/buddhism" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Buddhist Teachings</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover the profound wisdom and practices of Buddhism.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 