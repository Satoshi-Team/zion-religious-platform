import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Buddhist Festivals and Rituals | Religious Studies Blog",
  description: "Explore Buddhist festivals, ceremonies, and ritual practices across different traditions. Learn about important celebrations, daily practices, and their spiritual significance.",
  openGraph: {
    title: "Buddhist Festivals and Rituals | Religious Studies Blog",
    description: "Comprehensive guide to Buddhist ceremonial and ritual traditions",
    type: "article",
  },
}

export default function BuddhistFestivalsPage() {
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
          <span>Festivals & Rituals</span>
        </div>

        <h1>Buddhist Festivals and Rituals: Sacred Time and Practice</h1>

        <div className="space-y-6">
          <p>
            Buddhist festivals and rituals mark sacred moments and provide frameworks for spiritual practice.
            These ceremonies and celebrations connect practitioners to the teachings of the Buddha,
            strengthen community bonds, and create opportunities for merit-making and spiritual development.
          </p>

          <h2>Major Buddhist Festivals</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Universal Celebrations:</h3>
              <ul>
                <li>Vesak (Buddha Day)</li>
                <li>Māgha Pūjā</li>
                <li>Āsāḷha Pūjā</li>
                <li>Kathina Ceremony</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Regional Festivals:</h3>
              <ul>
                <li>Songkran Festival</li>
                <li>Ullambana Festival</li>
                <li>Obon Festival</li>
                <li>Losar Celebration</li>
              </ul>
            </div>
          </div>

          <h2>Daily Rituals</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Personal Practice:</h3>
              <ul>
                <li>Morning offerings</li>
                <li>Evening chanting</li>
                <li>Meditation sessions</li>
                <li>Devotional practices</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Communal Practice:</h3>
              <ul>
                <li>Temple services</li>
                <li>Group meditation</li>
                <li>Dharma discussions</li>
                <li>Alms rounds</li>
              </ul>
            </div>
          </div>

          <h2>Life Cycle Ceremonies</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Personal Milestones:</h3>
              <ul>
                <li>Birth blessings</li>
                <li>Coming of age</li>
                <li>Marriage ceremonies</li>
                <li>Funeral rites</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Monastic Ceremonies:</h3>
              <ul>
                <li>Ordination ritual</li>
                <li>Rains retreat</li>
                <li>Precept ceremonies</li>
                <li>Merit transfers</li>
              </ul>
            </div>
          </div>

          <h2>Ritual Elements</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Sacred Objects:</h3>
              <ul>
                <li>Offerings (flowers, incense)</li>
                <li>Ritual implements</li>
                <li>Sacred texts</li>
                <li>Ceremonial items</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Ritual Actions:</h3>
              <ul>
                <li>Prostrations</li>
                <li>Circumambulation</li>
                <li>Mantra recitation</li>
                <li>Mudra gestures</li>
              </ul>
            </div>
          </div>

          <h2>Special Observances</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Sacred Days:</h3>
              <ul>
                <li>Uposatha days</li>
                <li>Full moon ceremonies</li>
                <li>Annual observances</li>
                <li>Memorial days</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Retreat Practices:</h3>
              <ul>
                <li>Meditation retreats</li>
                <li>Pilgrimage journeys</li>
                <li>Intensive practice</li>
                <li>Solitary retreats</li>
              </ul>
            </div>
          </div>

          <h2>Contemporary Adaptations</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Modern Practices:</h3>
              <ul>
                <li>Online ceremonies</li>
                <li>Urban adaptations</li>
                <li>Interfaith events</li>
                <li>Secular observances</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Global Context:</h3>
              <ul>
                <li>Cultural integration</li>
                <li>Western adaptations</li>
                <li>New traditions</li>
                <li>Hybrid practices</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/buddhist-monasticism"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Monasticism</h3>
              <p className="text-sm text-muted-foreground">
                Learn about monastic traditions and ceremonies
              </p>
            </Link>
            <Link
              href="/blog/buddhist-art-and-architecture"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Art</h3>
              <p className="text-sm text-muted-foreground">
                Explore ritual objects and sacred spaces
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Deepen your understanding through our{" "}
              <Link href="/religion/buddhism/festivals" className="hover:underline">
                Buddhist Festivals
              </Link>{" "}
              section. Explore ritual practices in our{" "}
              <Link href="/religion/comparative-ritual" className="hover:underline">
                Comparative Ritual
              </Link>{" "}
              guide.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
} 