import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Search, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Comparative Religious Practices | Religious Studies",
  description: "Explore comparative religious practices, analyzing rituals, ceremonies, and devotional activities across religious traditions.",
  openGraph: {
    title: "Comparative Religious Practices | Religious Studies",
    description: "Comprehensive guide to comparative religious practices",
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
    title: "Ritual: Perspectives and Dimensions",
    description: "Catherine Bell's comprehensive analysis of religious rituals and their significance across traditions.",
    type: "book",
    author: "Catherine Bell",
    publisher: "Oxford University Press",
    link: "https://www.amazon.com/Ritual-Perspectives-Dimensions-Catherine-Bell/dp/0199735107",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$34.95",
    rating: 4.8,
    reviews: 2876
  },
  {
    title: "The Ritual Process: Structure and Anti-Structure",
    description: "Victor Turner's influential work on ritual symbolism and social transformation.",
    type: "book",
    author: "Victor Turner",
    publisher: "Cornell University Press",
    link: "https://www.amazon.com/Ritual-Process-Structure-Anti-Structure/dp/0202011909",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$29.95",
    rating: 4.7,
    reviews: 2145
  },
  {
    title: "Sacred Performance: A Journey into Religious Practices",
    description: "Thomas J. Csordas's exploration of embodied religious practices across cultures.",
    type: "book",
    author: "Thomas J. Csordas",
    publisher: "University of California Press",
    link: "https://www.amazon.com/Sacred-Performance-Religious-Practices-Traditions/dp/0520249372",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$32.00",
    rating: 4.6,
    reviews: 1567
  },
  {
    title: "Comparative Religious Practices",
    description: "Online course exploring ritual, ceremony, and devotional practices across world religions.",
    type: "course",
    link: "https://www.coursera.org/learn/comparative-religious-practices",
    price: "$49.99/month"
  },
  {
    title: "Religious Practices Database",
    description: "Digital archive of religious rituals, ceremonies, and practices from various traditions.",
    type: "tool",
    link: "https://religiouspractices.org"
  },
  {
    title: "Global Religious Practices Network",
    description: "International community of scholars and practitioners studying religious practices.",
    type: "community",
    link: "https://globalreligiouspractices.org"
  }
]

export default function ComparativePracticesPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Comparative Religious Practices</h1>
        <p className="text-xl mb-6">
          Explore the rich diversity of religious practices across traditions, where beliefs take tangible form through ritual, ceremony, and devotional activities. This comprehensive guide examines how different religions embody their teachings through lived practice.
        </p>
        <p className="text-lg mb-4">
          Comparative religious practices investigates both the universal patterns and unique expressions of religious action across traditions. Through careful study of rituals, ceremonies, and devotional activities, we discover how religions create meaning through embodied practice.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Key Dimensions of Religious Practice</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Ritual Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                The formal patterns and elements that compose religious rituals, including sacred space, time, objects, gestures, and words. How different traditions organize and sequence ritual actions.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Embodied Practice</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                The role of the body in religious practice, including posture, movement, breath, and sensory experience. How traditions engage the whole person in religious activity.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Symbolic Expression</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                How religious practices employ symbols, metaphors, and sacred objects to convey meaning and create transformative experiences.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Community Formation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                The ways religious practices create and sustain community, establish social bonds, and transmit tradition across generations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Religious Traditions</h2>
        <div className="prose prose-slate max-w-none">
          <h3 className="text-2xl font-semibold">Buddhist Practices</h3>
          <p className="mb-6">
            From meditation and chanting to pilgrimage and offerings, Buddhist practices emphasize mindfulness, compassion, and the cultivation of wisdom. Ritual actions create conditions for insight and transformation.
          </p>

          <h3 className="text-2xl font-semibold">Islamic Practices</h3>
          <p className="mb-6">
            The Five Pillars provide a framework for Muslim practice, including daily prayer (salah), fasting (sawm), and pilgrimage (hajj). Devotional practices emphasize submission to divine will and community solidarity.
          </p>

          <h3 className="text-2xl font-semibold">Christian Practices</h3>
          <p className="mb-6">
            Centered on sacramental life, worship, and prayer, Christian practices include baptism, eucharist, and various forms of devotion. Liturgical traditions structure both individual and communal religious life.
          </p>

          <h3 className="text-2xl font-semibold">Hindu Practices</h3>
          <p className="mb-6">
            Puja (worship), meditation, yoga, and festival celebrations characterize Hindu practice. Emphasis on devotional relationship (bhakti) and ritual action (karma) in spiritual life.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Contemporary Research Areas</h2>
        <div className="prose prose-slate max-w-none">
          <p className="mb-4">
            Modern study of religious practices encompasses several key areas:
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Ritual Studies:</strong> Analysis of ritual structure, function, and meaning across traditions.
            </li>
            <li>
              <strong>Performance Theory:</strong> Understanding religious practice as embodied performance and social drama.
            </li>
            <li>
              <strong>Material Culture:</strong> Study of sacred objects, spaces, and artifacts in religious practice.
            </li>
            <li>
              <strong>Digital Religion:</strong> Impact of technology on religious practice and virtual religious communities.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Study Resources</h2>
        <p className="text-slate-600">Essential books and resources for studying comparative religious practices.</p>
        
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
        <h2 className="text-3xl font-bold">Research Tools</h2>
        <p className="text-slate-600">Digital resources and communities for religious practices studies.</p>
        
        <div className="grid gap-6 md:grid-cols-2">
          {resources
            .filter(resource => resource.type === "tool" || resource.type === "community")
            .map((resource, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    {resource.type === "tool" ? (
                      <Search className="h-5 w-5" />
                    ) : (
                      <Users className="h-5 w-5" />
                    )}
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{resource.description}</p>
                  <Button asChild className="mt-4 w-full">
                    <Link href={resource.link}>
                      {resource.type === "tool" ? "Access Tool" : "Join Community"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Explore Other Comparative Areas</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/resources/comparative/mysticism" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Comparative Mysticism</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Study mystical experiences and practices across traditions.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/resources/comparative/ethics" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Comparative Ethics</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore moral principles and values across religious traditions.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 