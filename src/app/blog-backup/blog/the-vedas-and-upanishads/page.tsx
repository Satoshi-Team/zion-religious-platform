import React from 'react'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The Vedas and Upanishads: Sacred Wisdom and Philosophical Insights | Religious Studies Blog",
  description: "Explore the profound wisdom of the Vedas and Upanishads - from the ancient hymns of the Rigveda to the philosophical insights of the Upanishads. Discover how these sacred texts form the foundation of Hindu thought and continue to guide spiritual seekers.",
  openGraph: {
    title: "The Vedas and Upanishads: Sacred Wisdom and Philosophical Insights | Religious Studies Blog",
    description: "Explore the profound wisdom of the Vedas and Upanishads - from the ancient hymns of the Rigveda to the philosophical insights of the Upanishads. Discover how these sacred texts form the foundation of Hindu thought and continue to guide spiritual seekers.",
    type: "article",
  },
}

export default function TheVedasAndUpanishadsPage() {
  return (
    <article className="prose prose-lg dark:prose-invert mx-auto">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <span>•</span>
          <Link href="/religion/hinduism" className="hover:underline">
            Hinduism
          </Link>
          <span>•</span>
          <span>Foundations</span>
        </div>

        <h1>The Vedas and Upanishads: Sacred Wisdom and Philosophical Insights</h1>

        <div className="space-y-6">
          <p>
            The Vedas and Upanishads represent the foundational texts of Hinduism,
            offering a profound synthesis of ritual practice, philosophical
            inquiry, and spiritual wisdom. These sacred scriptures have guided
            seekers for millennia, providing insights into the nature of reality,
            consciousness, and the path to liberation.
          </p>

          <h2>The Four Vedas</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Rigveda:</h3>
              <ul>
                <li>Ancient Hymns and Mantras</li>
                <li>Cosmic Order (Rta)</li>
                <li>Deity Invocations</li>
                <li>Sacred Knowledge</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Yajurveda:</h3>
              <ul>
                <li>Sacrificial Formulas</li>
                <li>Ritual Procedures</li>
                <li>Mantra Collections</li>
                <li>Ceremonial Guidelines</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Sāmaveda:</h3>
              <ul>
                <li>Musical Chants</li>
                <li>Melodic Patterns</li>
                <li>Ritual Songs</li>
                <li>Devotional Music</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Atharvaveda:</h3>
              <ul>
                <li>Magical Formulas</li>
                <li>Healing Practices</li>
                <li>Domestic Rituals</li>
                <li>Practical Wisdom</li>
              </ul>
            </div>
          </div>

          <h2>Vedic Literature</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Brahmanas:</h3>
              <ul>
                <li>Ritual Explanations</li>
                <li>Priestly Instructions</li>
                <li>Mythological Stories</li>
                <li>Sacred Procedures</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Aranyakas:</h3>
              <ul>
                <li>Forest Teachings</li>
                <li>Meditative Practices</li>
                <li>Symbolic Interpretations</li>
                <li>Spiritual Contemplation</li>
              </ul>
            </div>
          </div>

          <h2>The Upanishads</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Major Upanishads:</h3>
              <ul>
                <li>Brihadaranyaka Upanishad</li>
                <li>Chandogya Upanishad</li>
                <li>Katha Upanishad</li>
                <li>Mundaka Upanishad</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Core Teachings:</h3>
              <ul>
                <li>Brahman and Atman</li>
                <li>Maya and Reality</li>
                <li>Karma and Rebirth</li>
                <li>Moksha (Liberation)</li>
              </ul>
            </div>
          </div>

          <h2>Philosophical Insights</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Metaphysical Concepts:</h3>
              <ul>
                <li>Ultimate Reality</li>
                <li>Consciousness</li>
                <li>Cosmic Order</li>
                <li>Divine Unity</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Spiritual Practices:</h3>
              <ul>
                <li>Meditation</li>
                <li>Self-Inquiry</li>
                <li>Yogic Disciplines</li>
                <li>Devotional Worship</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/the-bhagavad-gita-and-its-teachings"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">The Bhagavad Gita and Its Teachings</h3>
              <p className="text-sm text-muted-foreground">
                Divine dialogue and spiritual guidance
              </p>
            </Link>
            <Link
              href="/blog/concepts-of-dharma-and-karma"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Concepts of Dharma and Karma</h3>
              <p className="text-sm text-muted-foreground">
                Cosmic order and action
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Continue your exploration of Hindu sacred texts through our
              comprehensive learning path in the{" "}
              <Link href="/religion/hinduism" className="hover:underline">
                Hinduism section
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