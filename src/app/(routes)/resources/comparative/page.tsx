import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Search, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Comparative Religious Studies | Religious Studies",
  description: "Explore comparative religious studies, analyzing mysticism, ethics, and practices across religious traditions.",
  openGraph: {
    title: "Comparative Religious Studies | Religious Studies",
    description: "Comprehensive guide to comparative religious studies",
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
    title: "The World's Religions",
    description: "Classic comprehensive guide to world religions by Huston Smith, exploring the essential elements of each tradition.",
    type: "book",
    author: "Huston Smith",
    publisher: "HarperOne",
    link: "https://www.amazon.com/Worlds-Religions-Huston-Smith/dp/0061660183",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$29.99",
    rating: 4.8,
    reviews: 5678
  },
  {
    title: "Comparative Religion: A History",
    description: "Historical development of comparative religious studies by Eric J. Sharpe, tracing the evolution of the field.",
    type: "book",
    author: "Eric J. Sharpe",
    publisher: "Open Court",
    link: "https://www.amazon.com/Comparative-Religion-History-Eric-Sharpe/dp/0812690931",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$34.95",
    rating: 4.7,
    reviews: 3456
  },
  {
    title: "God Is Not One",
    description: "Stephen Prothero's exploration of the unique characteristics and contributions of major world religions.",
    type: "book",
    author: "Stephen Prothero",
    publisher: "HarperOne",
    link: "https://www.amazon.com/God-Not-One-Eight-Religions/dp/0061571288",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$27.99",
    rating: 4.6,
    reviews: 2890
  },
  {
    title: "Comparative Religious Studies Fundamentals",
    description: "Online course covering the basics of comparative religious studies, including methodology and key concepts.",
    type: "course",
    link: "https://www.coursera.org/learn/comparative-religion",
    price: "$49.99/month"
  },
  {
    title: "Religious Studies Database",
    description: "Digital tool for comparative analysis of religious traditions, featuring primary texts and scholarly articles.",
    type: "tool",
    link: "https://religiousstudiesdb.com"
  },
  {
    title: "Comparative Religious Studies Community",
    description: "Online community for scholars and practitioners of comparative religious studies, fostering dialogue and research.",
    type: "community",
    link: "https://www.comparativereligion.org/community"
  }
]

export default function ComparativeStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Comparative Religious Studies</h1>
        <p className="text-xl mb-6">
          Explore the fascinating field of comparative religious studies, where we analyze and understand the similarities, differences, and interconnections between religious traditions. This comprehensive guide provides insights into the methodologies, key concepts, and major areas of study in comparative religion.
        </p>
        <p className="text-lg mb-4">
          Comparative religious studies examines how different traditions approach fundamental questions of human existence, divine reality, ethical behavior, and spiritual practice. Through careful analysis and respectful dialogue, we discover both the unique contributions of each tradition and the common threads that connect humanity's religious quest.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Core Methodologies</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Phenomenological Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Study religious phenomena as they appear in human experience, suspending judgment to understand beliefs and practices on their own terms. This method, pioneered by scholars like Mircea Eliade, helps us appreciate the lived reality of religious traditions.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Historical-Critical Method</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Examine religious traditions in their historical contexts, understanding how they developed and evolved over time. This approach reveals the dynamic nature of religious thought and practice.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Anthropological Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Investigate how religious beliefs and practices function within cultural systems, exploring their social roles and meanings through ethnographic study and cultural analysis.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Theological Dialogue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Engage in interfaith dialogue and theological comparison, exploring how different traditions address ultimate questions and ethical challenges in the modern world.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Major Areas of Investigation</h2>
        <div className="prose prose-slate max-w-none">
          <h3 className="text-2xl font-semibold">Mystical Experience</h3>
          <p className="mb-6">
            Study of mystical experiences across traditions reveals both universal patterns and culturally specific expressions. From Buddhist enlightenment to Christian union with God, we explore how different traditions understand and cultivate direct spiritual experience.
          </p>

          <h3 className="text-2xl font-semibold">Ethical Systems</h3>
          <p className="mb-6">
            Analysis of moral frameworks reveals how different traditions approach questions of right action, virtue, and social responsibility. We examine both shared ethical principles and unique cultural expressions of moral life.
          </p>

          <h3 className="text-2xl font-semibold">Ritual and Practice</h3>
          <p className="mb-6">
            Investigation of religious practices shows how traditions embody their beliefs in concrete actions. From meditation to prayer, from pilgrimage to sacrifice, we study the many ways humans engage with sacred reality.
          </p>

          <h3 className="text-2xl font-semibold">Sacred Texts</h3>
          <p className="mb-6">
            Comparative study of religious literature reveals both common themes and unique perspectives. We examine how different traditions interpret, preserve, and apply their sacred texts in contemporary life.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Contemporary Challenges</h2>
        <div className="prose prose-slate max-w-none">
          <p className="mb-4">
            Modern comparative religious studies faces several important challenges:
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Religious Pluralism:</strong> How can we respect the unique truth claims of different traditions while fostering meaningful dialogue?
            </li>
            <li>
              <strong>Cultural Context:</strong> How do we understand religious phenomena within their cultural contexts while making meaningful comparisons?
            </li>
            <li>
              <strong>Modern Interpretation:</strong> How can ancient traditions speak to contemporary issues like environmental crisis, social justice, and technological change?
            </li>
            <li>
              <strong>Methodological Questions:</strong> What are the limits and possibilities of comparing different religious traditions?
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Study Resources</h2>
        <p className="text-slate-600">Essential books and resources for comparative religious studies.</p>
        
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
        <p className="text-slate-600">Digital resources and communities for comparative religious studies.</p>
        
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

      <section className="prose prose-slate max-w-none">
        <h2 className="text-3xl font-bold">Future Directions</h2>
        <p>
          The field of comparative religious studies continues to evolve, addressing new challenges and opportunities:
        </p>
        <ul>
          <li>Integration of cognitive science and neuroscience in understanding religious experience</li>
          <li>Digital humanities approaches to analyzing religious texts and traditions</li>
          <li>Environmental and ecological perspectives in religious thought</li>
          <li>Intersection of religion with technology and artificial intelligence</li>
          <li>Role of religion in addressing global challenges and fostering peace</li>
        </ul>
      </section>
    </div>
  )
} 