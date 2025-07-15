import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Search, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Sufi Meditation | Islamic Practice",
  description: "Learn about Sufi meditation, its techniques, principles, and practical applications in daily life.",
  openGraph: {
    title: "Sufi Meditation | Islamic Practice",
    description: "Comprehensive guide to Sufi meditation practice",
    type: "website",
  },
}

interface Resource {
  title: string
  description: string
  type: "book" | "course" | "tool" | "community"
  link: string
  affiliateLink?: string
  author?: string
  publisher?: string
  price?: string
  rating?: number
  reviews?: number
}

const resources: Resource[] = [
  {
    title: "The Heart of Sufism",
    description: "Essential guide to Sufi meditation and spiritual practices by Hazrat Inayat Khan.",
    type: "book",
    author: "Hazrat Inayat Khan",
    publisher: "Shambhala Publications",
    link: "https://www.amazon.com/Heart-Sufism-Essential-Writings-Inayat/dp/1570625662",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$24.95",
    rating: 4.9,
    reviews: 1876
  },
  {
    title: "Sufi Meditation and Contemplation",
    description: "Practical guide to Sufi spiritual practices by Shaykh Nurjan Mirahmadi.",
    type: "book",
    author: "Shaykh Nurjan Mirahmadi",
    publisher: "Islamic Supreme Council of America",
    link: "https://www.amazon.com/Sufi-Meditation-Contemplation-Spiritual-Practices/dp/1930409362",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$21.95",
    rating: 4.8,
    reviews: 1234
  },
  {
    title: "Sufi Meditation Fundamentals",
    description: "Online course covering the basics of Sufi meditation practice.",
    type: "course",
    link: "https://www.coursera.org/learn/sufi-meditation",
    price: "$49.99/month"
  },
  {
    title: "Sufi Meditation Timer",
    description: "Digital tool for practicing Sufi meditation with guided sessions.",
    type: "tool",
    link: "https://sufitimer.com"
  },
  {
    title: "Sufi Meditation Community",
    description: "Online community for Sufi meditation practitioners to share experiences.",
    type: "community",
    link: "https://www.sufimeditation.org/community"
  }
]

export default function SufiMeditationPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Sufi Meditation</h1>
        <p className="text-xl mb-4">
          Discover Sufi meditation, a mystical Islamic practice that combines contemplation, remembrance, and spiritual purification to achieve divine union. This comprehensive guide explores the techniques, principles, and practical applications of Sufi meditation in daily life.
        </p>
      </section>

      <div className="grid gap-8">
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Core Principles</h2>
            <p className="text-slate-600">Understanding the fundamental aspects of Sufi meditation.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Fana (Annihilation)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">The practice of dissolving the ego to achieve union with the Divine.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Baqa (Subsistence)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Living in perpetual awareness of Divine presence after annihilation.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Hal (States)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Understanding and navigating spiritual states and experiences.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Maqam (Stations)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Progressing through spiritual stations on the path to Divine union.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Practice Resources</h2>
            <p className="text-slate-600">Essential resources for developing your Sufi meditation practice.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources
              .filter(resource => resource.type === "book")
              .map((resource, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{resource.description}</p>
                    {resource.author && (
                      <p className="text-sm text-slate-500">By {resource.author}</p>
                    )}
                    {resource.publisher && (
                      <p className="text-sm text-slate-500">Published by {resource.publisher}</p>
                    )}
                    {resource.price && (
                      <p className="text-sm font-medium mt-2">{resource.price}</p>
                    )}
                    {resource.rating && (
                      <p className="text-sm text-slate-500">
                        {resource.rating} ★ ({resource.reviews} reviews)
                      </p>
                    )}
                    <Button asChild className="mt-4 w-full">
                      <Link href={resource.affiliateLink || resource.link}>
                        Get it on Amazon
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Practice Tools</h2>
            <p className="text-slate-600">Digital tools and apps to support your Sufi meditation practice.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources
              .filter(resource => resource.type === "tool")
              .map((resource, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Search className="h-5 w-5" />
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{resource.description}</p>
                    <Button asChild className="mt-4 w-full">
                      <Link href={resource.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Practice Communities</h2>
            <p className="text-slate-600">Connect with other Sufi meditation practitioners.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources
              .filter(resource => resource.type === "community")
              .map((resource, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{resource.description}</p>
                    <Button asChild className="mt-4 w-full">
                      <Link href={resource.link}>
                        Join Community
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Explore Other Islamic Meditation Practices</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/meditation/islamic/dhikr" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Dhikr Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about Dhikr meditation and its practice of divine remembrance.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/meditation/islamic/muraqaba" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Muraqaba Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the practice of Islamic contemplation and spiritual vigilance.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 