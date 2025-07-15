import React from 'react'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Bhakti Movement: Path of Divine Love",
  description: "Explore the transformative Bhakti Movement - from its medieval origins to contemporary expressions. Discover how devotional practices connect devotees with the divine through love, music, and spiritual surrender.",
  openGraph: {
    title: "Bhakti Movement: Path of Divine Love",
    description: "Explore the transformative Bhakti Movement - from its medieval origins to contemporary expressions. Discover how devotional practices connect devotees with the divine through love, music, and spiritual surrender.",
    type: "article",
  },
}

export default function BhaktiMovementPage() {
  return (
    <article className="container mx-auto px-4 py-8">
      <div className="mb-8">
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
            <li>Bhakti Movement</li>
          </ol>
        </nav>
      </div>

      <div className="prose prose-lg dark:prose-invert mx-auto">
        <h1>Bhakti Movement: Path of Divine Love</h1>

        <section>
          <h2>Historical Development</h2>
          <h3>Early Origins</h3>
          <ul>
            <li>Vedic devotional traditions</li>
            <li>Alvar and Nayanar saints</li>
            <li>Early Bhakti literature</li>
            <li>Regional expressions</li>
          </ul>

          <h3>Medieval Period</h3>
          <ul>
            <li>Ramanuja and Vishishtadvaita</li>
            <li>Madhva and Dvaita</li>
            <li>Sant traditions</li>
            <li>Regional movements</li>
          </ul>

          <h3>Modern Revival</h3>
          <ul>
            <li>Contemporary expressions</li>
            <li>Global influence</li>
            <li>Modern adaptations</li>
            <li>Cultural impact</li>
          </ul>
        </section>

        <section>
          <h2>Philosophical Foundations</h2>
          <h3>Core Concepts</h3>
          <ul>
            <li>Divine love and devotion</li>
            <li>Surrender and grace</li>
            <li>Personal relationship with God</li>
            <li>Spiritual transformation</li>
          </ul>

          <h3>Major Schools</h3>
          <ul>
            <li>Vaishnava traditions</li>
            <li>Shaiva traditions</li>
            <li>Shakta traditions</li>
            <li>Universal teachings</li>
          </ul>

          <h3>Spiritual Practices</h3>
          <ul>
            <li>Kirtan and bhajan</li>
            <li>Meditation and prayer</li>
            <li>Service and charity</li>
            <li>Community worship</li>
          </ul>
        </section>

        <section>
          <h2>Cultural Expressions</h2>
          <h3>Literary Traditions</h3>
          <ul>
            <li>Poetry and songs</li>
            <li>Devotional literature</li>
            <li>Biographical works</li>
            <li>Philosophical texts</li>
          </ul>

          <h3>Musical Heritage</h3>
          <ul>
            <li>Classical compositions</li>
            <li>Folk traditions</li>
            <li>Contemporary adaptations</li>
            <li>Global influence</li>
          </ul>

          <h3>Artistic Forms</h3>
          <ul>
            <li>Temple architecture</li>
            <li>Visual arts</li>
            <li>Performance traditions</li>
            <li>Cultural festivals</li>
          </ul>
        </section>

        <section>
          <h2>Social Impact</h2>
          <h3>Reform Movements</h3>
          <ul>
            <li>Social equality</li>
            <li>Gender empowerment</li>
            <li>Caste reform</li>
            <li>Educational initiatives</li>
          </ul>

          <h3>Community Building</h3>
          <ul>
            <li>Spiritual communities</li>
            <li>Social service</li>
            <li>Cultural preservation</li>
            <li>Global outreach</li>
          </ul>

          <h3>Contemporary Relevance</h3>
          <ul>
            <li>Modern adaptations</li>
            <li>Youth engagement</li>
            <li>Interfaith dialogue</li>
            <li>Social transformation</li>
          </ul>
        </section>

        <section>
          <h2>Related Topics</h2>
          <ul>
            <li>
              <Link href="/blog/hindu-philosophy">
                Hindu Philosophy
              </Link>
            </li>
            <li>
              <Link href="/blog/hindu-rituals">
                Hindu Rituals
              </Link>
            </li>
            <li>
              <Link href="/blog/hindu-festivals">
                Hindu Festivals
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Further Study</h2>
          <p>
            Continue your exploration of Hinduism through our comprehensive learning
            paths. Discover more about Hindu philosophy, practices, and their global
            impact in our Hinduism section, or explore comparative perspectives in
            our Comparative Religion section.
          </p>
        </section>
      </div>
    </article>
  )
} 