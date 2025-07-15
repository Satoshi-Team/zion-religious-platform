import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Life of Siddhartha Gautama: The Buddha's Journey to Enlightenment | Religious Studies Blog",
  description: "Explore the transformative journey of Siddhartha Gautama - from his princely origins to his profound awakening. Discover how his life experiences shaped the core teachings of Buddhism and continue to inspire spiritual seekers worldwide.",
  openGraph: {
    title: "Life of Siddhartha Gautama: The Buddha's Journey to Enlightenment | Religious Studies Blog",
    description: "Explore the transformative journey of Siddhartha Gautama - from his princely origins to his profound awakening. Discover how his life experiences shaped the core teachings of Buddhism and continue to inspire spiritual seekers worldwide.",
    type: "article",
  },
}

export default function LifeOfSiddharthaGautamaPage() {
  return (
    <article className="prose prose-lg dark:prose-invert mx-auto">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <span>•</span>
          <Link href="/religion/buddhism" className="hover:underline">
            Buddhism
          </Link>
          <span>•</span>
          <span>Foundations</span>
        </div>

        <h1>Life of Siddhartha Gautama: The Buddha's Journey to Enlightenment</h1>

        <div className="space-y-6">
          <p>
            The life of Siddhartha Gautama, who would become the Buddha, represents
            one of humanity's most profound spiritual journeys. This exploration
            examines his path from privileged prince to enlightened teacher,
            revealing how his experiences shaped the foundational teachings of
            Buddhism.
          </p>

          <h2>Early Life</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Royal Origins:</h3>
              <ul>
                <li>Birth in Lumbini (563 BCE)</li>
                <li>Shakya Clan Heritage</li>
                <li>Prophetic Signs</li>
                <li>Royal Upbringing</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Protected Youth:</h3>
              <ul>
                <li>Palace Life</li>
                <li>Education and Training</li>
                <li>Marriage and Family</li>
                <li>Material Comforts</li>
              </ul>
            </div>
          </div>

          <h2>The Great Departure</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Four Sights:</h3>
              <ul>
                <li>Old Age</li>
                <li>Sickness</li>
                <li>Death</li>
                <li>Spiritual Seeker</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Renunciation:</h3>
              <ul>
                <li>Leaving the Palace</li>
                <li>Family Sacrifice</li>
                <li>Spiritual Quest</li>
                <li>New Beginning</li>
              </ul>
            </div>
          </div>

          <h2>Spiritual Quest</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Ascetic Practices:</h3>
              <ul>
                <li>Forest Meditation</li>
                <li>Severe Austerities</li>
                <li>Physical Limits</li>
                <li>Spiritual Insights</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Middle Way:</h3>
              <ul>
                <li>Balance Discovery</li>
                <li>Moderate Path</li>
                <li>Essential Truths</li>
                <li>Practical Wisdom</li>
              </ul>
            </div>
          </div>

          <h2>Enlightenment</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Bodhi Tree Experience:</h3>
              <ul>
                <li>Final Meditation</li>
                <li>Mara's Temptations</li>
                <li>Profound Realization</li>
                <li>Complete Awakening</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Core Insights:</h3>
              <ul>
                <li>Four Noble Truths</li>
                <li>Dependent Origination</li>
                <li>Nirvana Realization</li>
                <li>Universal Truths</li>
              </ul>
            </div>
          </div>

          <h2>Teaching Mission</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>First Teachings:</h3>
              <ul>
                <li>Dharma Wheel</li>
                <li>First Disciples</li>
                <li>Sangha Formation</li>
                <li>Teaching Methods</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Lasting Legacy:</h3>
              <ul>
                <li>Monastic Community</li>
                <li>Lay Followers</li>
                <li>Spiritual Heritage</li>
                <li>Global Impact</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/the-four-noble-truths"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">The Four Noble Truths</h3>
              <p className="text-sm text-muted-foreground">
                Understanding the core teachings of Buddhism
              </p>
            </Link>
            <Link
              href="/blog/the-noble-eightfold-path"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">The Noble Eightfold Path</h3>
              <p className="text-sm text-muted-foreground">
                Exploring the path to enlightenment
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Continue your exploration of the Buddha's life and teachings through our comprehensive
              learning path in the{" "}
              <Link href="/religion/buddhism" className="hover:underline">
                Buddhism section
              </Link>
              . Compare and contrast with other religious traditions in our{" "}
              <Link href="/religion/comparative" className="hover:underline">
                Comparative Religion
              </Link>{" "}
              section.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
} 