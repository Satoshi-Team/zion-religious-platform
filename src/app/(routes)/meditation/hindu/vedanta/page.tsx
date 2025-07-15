import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Search, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Vedanta Meditation | Hindu Practice",
  description: "Learn about Vedanta meditation, its techniques, principles, and practical applications in daily life.",
  openGraph: {
    title: "Vedanta Meditation | Hindu Practice",
    description: "Comprehensive guide to Vedanta meditation practice",
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
    title: "The Essence of Vedanta",
    description: "Comprehensive guide to Vedanta philosophy and practice by Swami Vivekananda.",
    type: "book",
    author: "Swami Vivekananda",
    publisher: "Ramakrishna Math",
    link: "https://www.amazon.com/Complete-Works-Swami-Vivekananda/dp/8185301468",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$29.95",
    rating: 4.8,
    reviews: 2345
  },
  {
    title: "Vedanta Meditation Made Simple",
    description: "Practical guide to Vedanta meditation by Swami Sarvapriyananda.",
    type: "book",
    author: "Swami Sarvapriyananda",
    publisher: "Vedanta Society",
    link: "https://www.amazon.com/Vedanta-Meditation-Made-Simple-Practice/dp/193847707X",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$19.95",
    rating: 4.7,
    reviews: 1234
  },
  {
    title: "Vedanta Meditation Fundamentals",
    description: "Online course covering the basics of Vedanta meditation practice.",
    type: "course",
    link: "https://www.coursera.org/learn/vedanta-meditation",
    price: "$49.99/month"
  },
  {
    title: "Vedanta Timer",
    description: "Digital tool for practicing Vedanta meditation with guided sessions.",
    type: "tool",
    link: "https://vedantatimer.com"
  },
  {
    title: "Vedanta Meditation Community",
    description: "Online community for Vedanta meditation practitioners to share experiences.",
    type: "community",
    link: "https://www.vedantameditation.org/community"
  }
]

export default function VedantaMeditationPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Vedanta Meditation</h1>
        <p className="text-xl mb-4">
          Discover Vedanta meditation, an ancient Hindu practice that combines philosophical inquiry with meditation to realize the true nature of the self. This comprehensive guide explores the techniques, principles, and practical applications of Vedanta meditation in daily life.
        </p>
      </section>

      <div className="grid gap-8">
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Core Principles</h2>
            <p className="text-slate-600">Understanding the fundamental aspects of Vedanta meditation.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Sravana (Hearing)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Learning and understanding the teachings of Vedanta.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Manana (Reflection)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Deep contemplation on the teachings to remove doubts.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Nididhyasana (Meditation)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Direct experience of the truth through meditation.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Samadhi (Realization)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Complete realization of the true nature of the self.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Practice Resources</h2>
            <p className="text-slate-600">Essential resources for developing your Vedanta meditation practice.</p>
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
            <p className="text-slate-600">Digital tools and apps to support your Vedanta meditation practice.</p>
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
            <p className="text-slate-600">Connect with other Vedanta meditation practitioners.</p>
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
        <h2 className="text-3xl font-bold mb-6">Explore Other Hindu Meditation Practices</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/meditation/hindu/yoga" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Yoga Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about Yoga meditation and its focus on physical postures and breath control.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/meditation/hindu/mantra" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Mantra Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore Mantra meditation and its emphasis on sacred sound vibrations.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 