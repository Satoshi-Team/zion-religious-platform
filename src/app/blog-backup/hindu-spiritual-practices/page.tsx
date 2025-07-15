import React from 'react'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hindu Spiritual Practices: Paths to Enlightenment",
  description: "Explore the diverse spiritual practices of Hinduism - from meditation and yoga to devotional worship and selfless service. Discover how these ancient paths guide seekers toward self-realization and divine union.",
  openGraph: {
    title: "Hindu Spiritual Practices: Paths to Enlightenment",
    description: "Explore the diverse spiritual practices of Hinduism - from meditation and yoga to devotional worship and selfless service. Discover how these ancient paths guide seekers toward self-realization and divine union.",
    type: "article",
  },
}

export default function HinduSpiritualPracticesPage() {
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
            <li>Hindu Spiritual Practices: Paths to Enlightenment</li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1>Hindu Spiritual Practices: Paths to Enlightenment</h1>
          
          <section>
            <h2>Yoga Paths</h2>
            <ul>
              <li>
                <strong>Raja Yoga:</strong> The royal path of meditation and mental control, as systematized in Patanjali's Yoga Sutras, comprising the eight limbs (Ashtanga Yoga)
              </li>
              <li>
                <strong>Karma Yoga:</strong> The path of selfless action, expounded in the Bhagavad Gita, emphasizing service without attachment to results
              </li>
              <li>
                <strong>Bhakti Yoga:</strong> The path of devotion, detailed in the Bhagavata Purana and Narada Bhakti Sutras, cultivating love and surrender to the divine
              </li>
              <li>
                <strong>Jnana Yoga:</strong> The path of wisdom, as taught in the Upanishads and Advaita Vedanta texts, emphasizing self-inquiry and knowledge of Brahman
              </li>
            </ul>
          </section>

          <section>
            <h2>Meditation Techniques</h2>
            <ul>
              <li>
                <strong>Dhyana:</strong> The practice of meditation, described in the Yoga Sutras and Upanishads, focusing on concentration and mindfulness
              </li>
              <li>
                <strong>Mantra Meditation:</strong> The use of sacred sounds and phrases, as prescribed in the Tantras and Vedic texts, for spiritual transformation
              </li>
              <li>
                <strong>Trataka:</strong> The practice of focused gazing, detailed in the Hatha Yoga Pradipika, developing concentration and inner vision
              </li>
              <li>
                <strong>Pranayama:</strong> The control of vital energy through breath, systematized in the Yoga Sutras and Hatha Yoga texts
              </li>
            </ul>
          </section>

          <section>
            <h2>Devotional Practices</h2>
            <ul>
              <li>
                <strong>Puja:</strong> The ritual worship of deities, as described in the Agamas and Puranas, involving offerings, prayers, and meditation
              </li>
              <li>
                <strong>Kirtan:</strong> The devotional singing of divine names and mantras, popularized by the Bhakti movement and detailed in the Bhagavata Purana
              </li>
              <li>
                <strong>Japa:</strong> The repetition of mantras, particularly the Hare Krishna and Om mantras, as prescribed in various Tantric and Puranic texts
              </li>
              <li>
                <strong>Seva:</strong> Selfless service to others, emphasized in the Bhagavad Gita and teachings of modern spiritual masters
              </li>
            </ul>
          </section>

          <section>
            <h2>Spiritual Disciplines</h2>
            <ul>
              <li>
                <strong>Tapas:</strong> The practice of austerity and self-discipline, described in the Upanishads and Yoga texts, purifying body and mind
              </li>
              <li>
                <strong>Satsang:</strong> Association with spiritual seekers and teachers, emphasized in the Bhagavata Purana and teachings of modern gurus
              </li>
              <li>
                <strong>Svadhyaya:</strong> Self-study and reflection on sacred texts, as prescribed in the Yoga Sutras and Upanishads
              </li>
              <li>
                <strong>Vrata:</strong> Religious vows and observances, detailed in the Dharma Shastras and Puranas, cultivating spiritual discipline
              </li>
            </ul>
          </section>

          {/* Related Topics */}
          <section>
            <h2>Related Topics</h2>
            <ul>
              <li>
                <Link href="/blog/hindu-scriptures" className="hover:underline">
                  Hindu Scriptures: Sacred Texts and Their Significance
                </Link>
              </li>
              <li>
                <Link href="/blog/hindu-philosophy" className="hover:underline">
                  Hindu Philosophy: Schools and Thought
                </Link>
              </li>
              <li>
                <Link href="/blog/hindu-ethics" className="hover:underline">
                  Hindu Ethics: Principles and Applications
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