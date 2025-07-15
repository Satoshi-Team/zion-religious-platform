import React from 'react'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Buddhist Festivals and Celebrations: Sacred Time and Community | Religious Studies Blog",
  description: "Explore the rich tradition of Buddhist festivals and celebrations - from Vesak to Uposatha days. Discover how these sacred occasions connect communities, honor the Buddha's teachings, and guide spiritual development.",
  openGraph: {
    title: "Buddhist Festivals and Celebrations: Sacred Time and Community | Religious Studies Blog",
    description: "Explore the rich tradition of Buddhist festivals and celebrations - from Vesak to Uposatha days. Discover how these sacred occasions connect communities, honor the Buddha's teachings, and guide spiritual development.",
    type: "article",
  },
}

export default function BuddhistFestivalsAndCelebrationsPage() {
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

        <h1>Buddhist Festivals and Celebrations: Sacred Time and Community</h1>

        <div className="space-y-6">
          <p>
            Buddhist festivals and celebrations mark significant moments in the
            spiritual calendar, bringing communities together to honor the Buddha's
            life and teachings. This exploration examines the diverse traditions
            of Buddhist celebrations, their cultural expressions, and their role
            in maintaining spiritual connection and community bonds.
          </p>

          <h2>Major Festivals</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Universal Celebrations:</h3>
              <ul>
                <li>Vesak (Buddha's Birth, Enlightenment, and Parinirvana)</li>
                <li>Magha Puja (Fourfold Assembly)</li>
                <li>Asalha Puja (First Teaching)</li>
                <li>Kathina (Robe Offering)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Regional Festivals:</h3>
              <ul>
                <li>Songkran (Thai New Year)</li>
                <li>Loy Krathong (Festival of Lights)</li>
                <li>Ullambana (Ghost Festival)</li>
                <li>Losar (Tibetan New Year)</li>
              </ul>
            </div>
          </div>

          <h2>Ritual Practices</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Devotional Activities:</h3>
              <ul>
                <li>Offerings and Puja</li>
                <li>Circumambulation</li>
                <li>Lighting of Lamps</li>
                <li>Chanting and Recitation</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Merit-Making:</h3>
              <ul>
                <li>Dana (Generosity)</li>
                <li>Sil (Ethical Conduct)</li>
                <li>Bhavana (Meditation)</li>
                <li>Community Service</li>
              </ul>
            </div>
          </div>

          <h2>Cultural Expressions</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Artistic Traditions:</h3>
              <ul>
                <li>Festival Decorations</li>
                <li>Traditional Music</li>
                <li>Dance Performances</li>
                <li>Processions and Parades</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Community Activities:</h3>
              <ul>
                <li>Food Sharing</li>
                <li>Cultural Programs</li>
                <li>Educational Events</li>
                <li>Social Gatherings</li>
              </ul>
            </div>
          </div>

          <h2>Contemporary Adaptations</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Modern Celebrations:</h3>
              <ul>
                <li>Digital Observances</li>
                <li>Interfaith Events</li>
                <li>Cultural Festivals</li>
                <li>Community Outreach</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Global Participation:</h3>
              <ul>
                <li>International Vesak</li>
                <li>World Buddhist Summit</li>
                <li>Cultural Exchanges</li>
                <li>Virtual Celebrations</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/buddhist-rituals-and-practices"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Rituals and Practices</h3>
              <p className="text-sm text-muted-foreground">
                Sacred expressions of faith
              </p>
            </Link>
            <Link
              href="/blog/buddhist-art-and-architecture"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Art and Architecture</h3>
              <p className="text-sm text-muted-foreground">
                Visual expressions of enlightenment
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Continue your exploration of Buddhist festivals and celebrations through our
              comprehensive learning path in the{" "}
              <Link href="/religion/buddhism" className="hover:underline">
                Buddhism section
              </Link>
              . Compare and contrast with other religious celebrations in our{" "}
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