import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Search, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Yoga Meditation | Hindu Practice",
  description: "Learn about Yoga meditation, its techniques, principles, and practical applications in daily life.",
  openGraph: {
    title: "Yoga Meditation | Hindu Practice",
    description: "Comprehensive guide to Yoga meditation practice",
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
    title: "The Yoga Sutras of Patanjali",
    description: "Classic text on Yoga philosophy and practice, translated and commented by Sri Swami Satchidananda.",
    type: "book",
    author: "Sri Swami Satchidananda",
    publisher: "Integral Yoga Publications",
    link: "https://www.amazon.com/Yoga-Sutras-Patanjali-Translation-Commentary/dp/193847707X",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$24.95",
    rating: 4.8,
    reviews: 2345
  },
  {
    title: "Light on Yoga",
    description: "Comprehensive guide to Yoga practice by B.K.S. Iyengar.",
    type: "book",
    author: "B.K.S. Iyengar",
    publisher: "Schocken",
    link: "https://www.amazon.com/Light-Yoga-Bible-Modern-Practice/dp/0805210318",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$29.95",
    rating: 4.9,
    reviews: 3456
  },
  {
    title: "Yoga Meditation Fundamentals",
    description: "Online course covering the basics of Yoga meditation practice.",
    type: "course",
    link: "https://www.coursera.org/learn/yoga-meditation",
    price: "$49.99/month"
  },
  {
    title: "Yoga Timer",
    description: "Digital tool for practicing Yoga meditation with guided sessions.",
    type: "tool",
    link: "https://yogatimer.com"
  },
  {
    title: "Yoga Meditation Community",
    description: "Online community for Yoga meditation practitioners to share experiences.",
    type: "community",
    link: "https://www.yogameditation.org/community"
  }
]

export default function YogaMeditationPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Yoga Meditation</h1>
        <p className="text-xl mb-4">
          Discover Yoga meditation, an ancient Hindu practice that combines physical postures, breath control, and meditation techniques to achieve spiritual growth and self-realization. This comprehensive guide explores the techniques, principles, and practical applications of Yoga meditation in daily life.
        </p>
      </section>

      <div className="grid gap-8">
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Core Principles</h2>
            <p className="text-slate-600">Understanding the fundamental aspects of Yoga meditation.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Asana (Posture)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Physical postures to prepare the body for meditation.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Pranayama (Breath Control)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Breathing techniques to calm the mind and energize the body.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Dhyana (Meditation)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Focused concentration leading to deep meditation.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Samadhi (Union)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">State of complete absorption and spiritual realization.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Practice Resources</h2>
            <p className="text-slate-600">Essential resources for developing your Yoga meditation practice.</p>
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
            <p className="text-slate-600">Digital tools and apps to support your Yoga meditation practice.</p>
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
            <p className="text-slate-600">Connect with other Yoga meditation practitioners.</p>
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
          <Link href="/meditation/hindu/mantra" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Mantra Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about mantra meditation and its focus on sacred sound vibrations.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/meditation/hindu/vedanta" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Vedanta Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore Vedanta meditation and its emphasis on self-inquiry and wisdom.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 