import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Search, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Lectio Divina | Christian Practice",
  description: "Learn about Lectio Divina, the ancient Christian practice of sacred reading and prayer.",
  openGraph: {
    title: "Lectio Divina | Christian Practice",
    description: "Comprehensive guide to Lectio Divina practice",
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
    title: "Too Deep for Words",
    description: "Classic guide to Lectio Divina by Thelma Hall.",
    type: "book",
    author: "Thelma Hall",
    publisher: "Paulist Press",
    link: "https://www.amazon.com/Too-Deep-Words-Introducing-Contemplative/dp/0809133743",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$14.95",
    rating: 4.8,
    reviews: 987
  },
  {
    title: "Praying Scripture for a Change",
    description: "Practical guide to Lectio Divina by Tim Gray.",
    type: "book",
    author: "Tim Gray",
    publisher: "Ascension Press",
    link: "https://www.amazon.com/Praying-Scripture-Change-Introduction-Divina/dp/1934217693",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$16.95",
    rating: 4.7,
    reviews: 654
  },
  {
    title: "Lectio Divina Fundamentals",
    description: "Online course covering the basics of Lectio Divina practice.",
    type: "course",
    link: "https://www.coursera.org/learn/lectio-divina",
    price: "$49.99/month"
  },
  {
    title: "Lectio Divina App",
    description: "Digital tool for practicing Lectio Divina with guided sessions.",
    type: "tool",
    link: "https://lectiodivinaapp.com"
  },
  {
    title: "Lectio Divina Community",
    description: "Online community for Lectio Divina practitioners to share experiences.",
    type: "community",
    link: "https://www.lectiodivina.org/community"
  }
]

export default function LectioDivinaPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Lectio Divina</h1>
        <p className="text-xl mb-4">
          Explore the ancient Christian practice of Lectio Divina (Divine Reading), a method of praying with Scripture that leads to a deeper encounter with God. This comprehensive guide covers the four traditional steps of Lectio Divina and their practical applications.
        </p>
      </section>

      <div className="grid gap-8">
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Core Principles</h2>
            <p className="text-slate-600">Understanding the fundamental aspects of Lectio Divina.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Lectio (Reading)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Slow, attentive reading of Scripture to encounter God's word.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Meditatio (Meditation)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Reflecting on the text to understand its meaning for your life.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Oratio (Prayer)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Responding to God's word through prayer and conversation.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Contemplatio (Contemplation)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Resting in God's presence and receiving His love.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Practice Resources</h2>
            <p className="text-slate-600">Essential resources for developing your Lectio Divina practice.</p>
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
            <p className="text-slate-600">Digital tools and apps to support your Lectio Divina practice.</p>
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
            <p className="text-slate-600">Connect with other Lectio Divina practitioners.</p>
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
          <Link href="/meditation/christian/centering" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Centering Prayer</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore centering prayer and its emphasis on resting in God's presence.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 