import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Search, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Zen Meditation | Buddhist Practice",
  description: "Learn about Zen meditation (Zazen), its techniques, principles, and practical applications in daily life.",
  openGraph: {
    title: "Zen Meditation | Buddhist Practice",
    description: "Comprehensive guide to Zen meditation practice",
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
    title: "Zen Mind, Beginner's Mind",
    description: "Classic text on Zen practice by Shunryu Suzuki.",
    type: "book",
    author: "Shunryu Suzuki",
    publisher: "Shambhala",
    link: "https://www.amazon.com/Zen-Mind-Beginners-Mind-Introduction/dp/0834800799",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$16.95",
    rating: 4.8,
    reviews: 2345
  },
  {
    title: "The Three Pillars of Zen",
    description: "Comprehensive guide to Zen practice by Philip Kapleau.",
    type: "book",
    author: "Philip Kapleau",
    publisher: "Anchor",
    link: "https://www.amazon.com/Three-Pillars-Zen-Teaching-Practice/dp/0385260938",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$18.95",
    rating: 4.7,
    reviews: 987
  },
  {
    title: "Zen Meditation Fundamentals",
    description: "Online course covering the basics of Zen meditation practice.",
    type: "course",
    link: "https://www.coursera.org/learn/zen-meditation",
    price: "$49.99/month"
  },
  {
    title: "Zen Timer",
    description: "Simple meditation timer app with Zen-inspired design.",
    type: "tool",
    link: "https://zentimer.com"
  },
  {
    title: "Zen Community",
    description: "Online community for Zen practitioners to share experiences.",
    type: "community",
    link: "https://www.zencenter.org/community"
  }
]

export default function ZenPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Zen Meditation (Zazen)</h1>
        <p className="text-xl mb-4">
          Explore the practice of Zen meditation (Zazen), a form of seated meditation that emphasizes direct experience and the realization of one's true nature. This comprehensive guide covers the techniques, principles, and practical applications of Zen practice.
        </p>
      </section>

      <div className="grid gap-8">
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Core Principles</h2>
            <p className="text-slate-600">Understanding the fundamental aspects of Zen meditation.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Just Sitting (Shikantaza)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">The practice of sitting with open awareness, without attachment to thoughts or experiences.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Koan Practice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Working with paradoxical questions to transcend dualistic thinking.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Posture and Breath</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Maintaining proper posture and natural breathing in meditation.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Practice Resources</h2>
            <p className="text-slate-600">Essential resources for developing your Zen practice.</p>
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
            <p className="text-slate-600">Digital tools and apps to support your Zen practice.</p>
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
            <p className="text-slate-600">Connect with other Zen practitioners.</p>
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
          <Link href="/meditation/buddhist/vipassana" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Vipassana Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore insight meditation and its emphasis on developing wisdom.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 