import React from 'react'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hindu Temples: Sacred Architecture and Worship",
  description: "Explore the profound architectural and spiritual significance of Hindu temples - from ancient Vedic altars to modern global sanctuaries. Discover how these sacred spaces embody divine principles and serve as centers of worship, community, and cultural preservation.",
  openGraph: {
    title: "Hindu Temples: Sacred Architecture and Worship",
    description: "Explore the profound architectural and spiritual significance of Hindu temples - from ancient Vedic altars to modern global sanctuaries. Discover how these sacred spaces embody divine principles and serve as centers of worship, community, and cultural preservation.",
    type: "article",
  },
}

export default function HinduTemplesPage() {
  return (
    <article className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-muted-foreground">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li>Hindu Temples: Sacred Architecture and Worship</li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1>Hindu Temples: Sacred Architecture and Worship</h1>
          
          <section>
            <h2>Architectural Evolution</h2>
            <ul>
              <li>
                <strong>Vedic Origins:</strong> Early fire altars and open-air worship spaces
                that evolved into structured temples, reflecting the transition from
                nomadic to settled communities
              </li>
              <li>
                <strong>Classical Period:</strong> Development of distinct architectural
                styles - Nagara (North), Dravida (South), and Vesara (Central) - each
                embodying unique regional expressions of divine principles
              </li>
              <li>
                <strong>Medieval Development:</strong> Grand temple complexes like
                Khajuraho, Konark, and Madurai that showcase advanced architectural
                techniques and artistic excellence
              </li>
            </ul>
          </section>

          <section>
            <h2>Sacred Geometry</h2>
            <ul>
              <li>
                <strong>Vastu Shastra:</strong> Ancient architectural science that
                harmonizes temple design with cosmic principles and natural elements
              </li>
              <li>
                <strong>Mandala Patterns:</strong> Sacred geometric designs that map
                the cosmos and guide the temple's layout, from the central sanctum to
                the outer walls
              </li>
              <li>
                <strong>Symbolic Elements:</strong> Architectural features that
                represent spiritual concepts - from the towering gopurams to the
                intricate carvings that tell divine stories
              </li>
            </ul>
          </section>

          <section>
            <h2>Worship Practices</h2>
            <ul>
              <li>
                <strong>Daily Rituals:</strong> From the pre-dawn abhishekam to the
                evening aarti, maintaining the cosmic rhythm through regular worship
              </li>
              <li>
                <strong>Festival Celebrations:</strong> Special ceremonies and
                processions that mark important religious occasions and seasonal
                transitions
              </li>
              <li>
                <strong>Community Functions:</strong> Temples as centers for
                education, cultural preservation, and social service, serving both
                spiritual and practical needs
              </li>
            </ul>
          </section>

          <section>
            <h2>Spiritual Significance</h2>
            <ul>
              <li>
                <strong>Cosmic Axis:</strong> Temples as vertical connections between
                earthly and divine realms, facilitating spiritual ascent
              </li>
              <li>
                <strong>Energy Centers:</strong> Strategic placement and design that
                harness and channel spiritual energy for the benefit of devotees
              </li>
              <li>
                <strong>Sacred Space:</strong> Creation of environments that support
                meditation, prayer, and divine communion through architectural
                elements and ritual practices
              </li>
            </ul>
          </section>

          {/* Related Topics */}
          <section>
            <h2>Related Topics</h2>
            <ul>
              <li>
                <Link href="/blog/hindu-rituals" className="hover:underline">
                  Hindu Rituals: Sacred Practices and Ceremonies
                </Link>
              </li>
              <li>
                <Link href="/blog/hindu-festivals" className="hover:underline">
                  Hindu Festivals: Celebrations of Divine Grace
                </Link>
              </li>
              <li>
                <Link href="/blog/hindu-art" className="hover:underline">
                  Hindu Art: Expressions of Divine Beauty
                </Link>
              </li>
            </ul>
          </section>

          {/* Further Study */}
          <section>
            <h2>Further Study</h2>
            <ul>
              <li>
                <Link href="/religion/hinduism" className="hover:underline">
                  Hinduism Learning Path
                </Link>
              </li>
              <li>
                <Link href="/religion/comparative" className="hover:underline">
                  Comparative Religion
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  )
} 