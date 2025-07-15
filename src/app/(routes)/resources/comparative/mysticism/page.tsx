import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Search, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Comparative Mysticism | Religious Studies",
  description: "Explore mystical traditions across religions, analyzing contemplative practices, mystical experiences, and spiritual transformations.",
  openGraph: {
    title: "Comparative Mysticism | Religious Studies",
    description: "Comprehensive guide to comparative mysticism",
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
    title: "Mysticism: A Study in Nature and Development",
    description: "Evelyn Underhill's classic work exploring the universal characteristics of mystical experience across traditions.",
    type: "book",
    author: "Evelyn Underhill",
    publisher: "Oxford University Press",
    link: "https://www.amazon.com/Mysticism-Study-Development-Evelyn-Underhill/dp/0486422380",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$24.95",
    rating: 4.8,
    reviews: 3456
  },
  {
    title: "The Varieties of Mystical Experience",
    description: "William James's groundbreaking psychological study of mystical experiences across cultures and traditions.",
    type: "book",
    author: "William James",
    publisher: "Penguin Classics",
    link: "https://www.amazon.com/Varieties-Religious-Experience-Psychology-Penguin/dp/0140390340",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$18.00",
    rating: 4.7,
    reviews: 2890
  },
  {
    title: "Essential Mysticism",
    description: "T.N. Madan's comparative analysis of mystical traditions in world religions.",
    type: "book",
    author: "T.N. Madan",
    publisher: "Yale University Press",
    link: "https://www.amazon.com/Essential-Mysticism-Comparative-Analysis-Spiritual/dp/0300082703",
    affiliateLink: "https://amzn.to/3QZqX9Y",
    price: "$32.00",
    rating: 4.6,
    reviews: 1567
  },
  {
    title: "Comparative Mysticism Studies",
    description: "Online course exploring mystical traditions across world religions, including experiential practices.",
    type: "course",
    link: "https://www.coursera.org/learn/comparative-mysticism",
    price: "$49.99/month"
  },
  {
    title: "Mystical Texts Database",
    description: "Digital archive of mystical writings and experiences from various religious traditions.",
    type: "tool",
    link: "https://mysticaltexts.org"
  },
  {
    title: "Global Mysticism Network",
    description: "International community of scholars and practitioners studying mystical traditions.",
    type: "community",
    link: "https://globalmysticism.org"
  }
]

export default function ComparativeMysticismPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Comparative Mysticism</h1>
        <p className="text-xl mb-6">
          Explore the profound depths of mystical traditions across religions, where direct spiritual experience transcends cultural boundaries. This comprehensive guide examines how different traditions understand, cultivate, and interpret mystical experiences.
        </p>
        <p className="text-lg mb-4">
          Comparative mysticism investigates the universal and particular aspects of humanity's highest spiritual experiences. Through careful study of contemplative practices, mystical texts, and personal accounts, we discover both the common patterns and unique expressions of mystical consciousness across traditions.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Key Dimensions of Mystical Experience</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Ineffability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                The challenge of expressing mystical experiences in ordinary language. Across traditions, mystics emphasize that their deepest experiences transcend verbal description, often using poetry and paradox to point toward the ineffable.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Unity Consciousness</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                The experience of transcending the subject-object divide, often described as union with the divine, cosmic consciousness, or non-dual awareness. This appears in various forms across traditions.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Transformative Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                The profound personal transformation that follows mystical experiences, often involving shifts in values, perception, and relationship to self and world.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Noetic Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                The sense that mystical experiences reveal deep truths about reality, providing insights that, while often paradoxical, carry profound conviction for the experiencer.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Mystical Traditions</h2>
        <div className="prose prose-slate max-w-none">
          <h3 className="text-2xl font-semibold">Buddhist Mysticism</h3>
          <p className="mb-6">
            From Theravada insight practices to Zen koan study, Buddhist traditions offer systematic approaches to transcendent experience. The emphasis on emptiness (sunyata) and non-dual awareness provides unique perspectives on mystical consciousness.
          </p>

          <h3 className="text-2xl font-semibold">Islamic Mysticism</h3>
          <p className="mb-6">
            Sufi traditions emphasize the heart's direct knowledge of divine reality (ma'rifa) through practices of remembrance (dhikr) and love. The poetry of Rumi and Ibn Arabi expresses mystical insights through powerful metaphors.
          </p>

          <h3 className="text-2xl font-semibold">Christian Mysticism</h3>
          <p className="mb-6">
            From Desert Fathers to medieval mystics like Meister Eckhart, Christian contemplatives describe union with God through practices of contemplative prayer and radical self-emptying (kenosis).
          </p>

          <h3 className="text-2xl font-semibold">Hindu Mysticism</h3>
          <p className="mb-6">
            Vedantic traditions emphasize direct realization of ultimate reality (Brahman) through meditation, discrimination, and devotion. Tantric approaches work with subtle energies and consciousness.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Contemporary Research Areas</h2>
        <div className="prose prose-slate max-w-none">
          <p className="mb-4">
            Modern study of mysticism encompasses several key areas:
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Neuroscience of Mysticism:</strong> Brain imaging and neurological studies of contemplative states and mystical experiences.
            </li>
            <li>
              <strong>Phenomenology:</strong> Detailed analysis of the structure and qualities of mystical experiences across traditions.
            </li>
            <li>
              <strong>Cultural Context:</strong> Understanding how cultural and religious frameworks shape mystical experiences and their interpretation.
            </li>
            <li>
              <strong>Mysticism and Psychology:</strong> Relationships between mystical experiences, psychological health, and human development.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Study Resources</h2>
        <p className="text-slate-600">Essential books and resources for studying comparative mysticism.</p>
        
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
        <p className="text-slate-600">Digital resources and communities for mysticism studies.</p>
        
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
          The study of comparative mysticism continues to evolve with new approaches and questions:
        </p>
        <ul>
          <li>Integration of contemplative neuroscience with traditional mystical accounts</li>
          <li>Cross-cultural studies of mystical development and transformation</li>
          <li>Relationship between mystical experiences and social justice/ecological awareness</li>
          <li>Role of mysticism in interfaith dialogue and global spirituality</li>
          <li>Applications of mystical insights to contemporary challenges</li>
        </ul>
      </section>
    </div>
  )
} 