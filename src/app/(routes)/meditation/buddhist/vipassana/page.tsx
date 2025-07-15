import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Search, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Vipassana Meditation | Buddhist Practice",
  description: "Learn about Vipassana meditation, its techniques, principles, and practical applications in daily life.",
  openGraph: {
    title: "Vipassana Meditation | Buddhist Practice",
    description: "Comprehensive guide to Vipassana meditation practice",
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
    title: "The Art of Living",
    description: "Comprehensive guide to Vipassana meditation by S.N. Goenka.",
    type: "book",
    author: "S.N. Goenka",
    publisher: "HarperOne",
    link: "https://www.amazon.com/Art-Living-Vipassana-Meditation-Goenka/dp/0060637242",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$16.99",
    rating: 4.8,
    reviews: 3456
  },
  {
    title: "Mindfulness in Plain English",
    description: "Practical guide to insight meditation by Bhante Henepola Gunaratana.",
    type: "book",
    author: "Bhante Henepola Gunaratana",
    publisher: "Wisdom Publications",
    link: "https://www.amazon.com/Mindfulness-Plain-English-Meditation-Updated/dp/0861719069",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$16.95",
    rating: 4.7,
    reviews: 2345
  },
  {
    title: "Vipassana Meditation Fundamentals",
    description: "Online course covering the basics of Vipassana meditation practice.",
    type: "course",
    link: "https://www.coursera.org/learn/vipassana-meditation",
    price: "$49.99/month"
  },
  {
    title: "Vipassana Timer",
    description: "Meditation timer app specifically designed for Vipassana practice.",
    type: "tool",
    link: "https://vipassanatimer.com"
  },
  {
    title: "Vipassana Community",
    description: "Online community for Vipassana practitioners to share experiences.",
    type: "community",
    link: "https://www.dhamma.org/en-US/community"
  }
]

export default function VipassanaPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Vipassana Meditation</h1>
        <p className="text-xl mb-4">
          Discover the practice of Vipassana meditation, an ancient technique that develops insight into the true nature of reality. This comprehensive guide explores the techniques, principles, and practical applications of Vipassana practice.
        </p>
      </section>

      <div className="grid gap-8">
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Core Principles</h2>
            <p className="text-slate-600">Understanding the fundamental aspects of Vipassana meditation.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Body Scanning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Systematic observation of bodily sensations to develop equanimity.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Mindful Observation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Developing awareness of thoughts and emotions without attachment.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Equanimity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Cultivating balanced awareness of all experiences.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Practice Resources</h2>
            <p className="text-slate-600">Essential resources for developing your Vipassana practice.</p>
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
            <p className="text-slate-600">Digital tools and apps to support your Vipassana practice.</p>
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
            <p className="text-slate-600">Connect with other Vipassana practitioners.</p>
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
        <h2 className="text-3xl font-bold mb-6">Explore Other Buddhist Meditation Practices</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/meditation/buddhist/mindfulness" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Mindfulness Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about mindfulness meditation and its focus on present-moment awareness.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/meditation/buddhist/zen" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Zen Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore Zen meditation and its emphasis on direct experience.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 