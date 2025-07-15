import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Search, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Centering Prayer | Christian Practice",
  description: "Learn about Centering Prayer, a Christian contemplative practice that helps you rest in God's presence.",
  openGraph: {
    title: "Centering Prayer | Christian Practice",
    description: "Comprehensive guide to Centering Prayer practice",
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
    title: "Open Mind, Open Heart",
    description: "The foundational text on Centering Prayer by Thomas Keating.",
    type: "book",
    author: "Thomas Keating",
    publisher: "Continuum",
    link: "https://www.amazon.com/Open-Mind-Heart-Contemplative-Dimension/dp/0826416588",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$16.95",
    rating: 4.8,
    reviews: 1234
  },
  {
    title: "The Heart of Centering Prayer",
    description: "A comprehensive guide to the practice by Cynthia Bourgeault.",
    type: "book",
    author: "Cynthia Bourgeault",
    publisher: "Shambhala",
    link: "https://www.amazon.com/Heart-Centering-Prayer-Nondual-Christianity/dp/1611803433",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$18.95",
    rating: 4.7,
    reviews: 876
  },
  {
    title: "Centering Prayer Fundamentals",
    description: "Online course covering the basics of Centering Prayer practice.",
    type: "course",
    link: "https://www.coursera.org/learn/centering-prayer",
    price: "$49.99/month"
  },
  {
    title: "Centering Prayer Timer",
    description: "Digital tool for practicing Centering Prayer with guided sessions.",
    type: "tool",
    link: "https://centeringprayerapp.com"
  },
  {
    title: "Centering Prayer Community",
    description: "Online community for Centering Prayer practitioners to share experiences.",
    type: "community",
    link: "https://www.contemplativeoutreach.org/community"
  }
]

export default function CenteringPrayerPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Centering Prayer</h1>
        <p className="text-xl mb-4">
          Discover Centering Prayer, a Christian contemplative practice that helps you rest in God's presence. This comprehensive guide covers the essential elements of Centering Prayer and its practical applications in daily life.
        </p>
      </section>

      <div className="grid gap-8">
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Core Principles</h2>
            <p className="text-slate-600">Understanding the fundamental aspects of Centering Prayer.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Sacred Word</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Choosing and using a sacred word to return to God's presence.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Consent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Opening to God's presence and action within.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Thoughts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Gently letting go of thoughts when they arise.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Setting aside regular time for practice.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Practice Resources</h2>
            <p className="text-slate-600">Essential resources for developing your Centering Prayer practice.</p>
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
            <p className="text-slate-600">Digital tools and apps to support your Centering Prayer practice.</p>
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
            <p className="text-slate-600">Connect with other Centering Prayer practitioners.</p>
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
        <h2 className="text-3xl font-bold mb-6">Explore Other Christian Prayer Practices</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/meditation/christian/contemplative" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Contemplative Prayer</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about contemplative prayer and its focus on silent communion with God.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/meditation/christian/lectio-divina" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Lectio Divina</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore Lectio Divina and its emphasis on sacred reading and prayer.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 