import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The Bhagavad Gita and Its Teachings: Divine Dialogue and Spiritual Guidance | Religious Studies Blog",
  description: "Explore the profound wisdom of the Bhagavad Gita - from its historical context in the Mahabharata to its timeless teachings on duty, devotion, and self-realization. Discover how this sacred dialogue between Krishna and Arjuna continues to guide seekers on their spiritual journey.",
  openGraph: {
    title: "The Bhagavad Gita and Its Teachings: Divine Dialogue and Spiritual Guidance | Religious Studies Blog",
    description: "Explore the profound wisdom of the Bhagavad Gita - from its historical context in the Mahabharata to its timeless teachings on duty, devotion, and self-realization. Discover how this sacred dialogue between Krishna and Arjuna continues to guide seekers on their spiritual journey.",
    type: "article",
  },
}

export default function TheBhagavadGitaAndItsTeachingsPage() {
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

        <h1>The Bhagavad Gita and Its Teachings: Divine Dialogue and Spiritual Guidance</h1>

        <div className="space-y-6">
          <p>
            The Bhagavad Gita, often called the "Song of God," stands as one of
            Hinduism's most revered texts, offering profound insights into duty,
            devotion, and the nature of reality. This sacred dialogue between
            Krishna and Arjuna on the battlefield of Kurukshetra provides timeless
            guidance for navigating life's challenges while pursuing spiritual
            growth.
          </p>

          <h2>Historical and Literary Context</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Mahabharata Setting:</h3>
              <ul>
                <li>Kurukshetra Battlefield</li>
                <li>Arjuna's Moral Dilemma</li>
                <li>Krishna's Divine Role</li>
                <li>Historical Significance</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Literary Structure:</h3>
              <ul>
                <li>Eighteen Chapters</li>
                <li>Seven Hundred Verses</li>
                <li>Poetic Form</li>
                <li>Dialogic Style</li>
              </ul>
            </div>
          </div>

          <h2>Core Teachings</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Paths to Liberation:</h3>
              <ul>
                <li>Karma Yoga (Path of Action)</li>
                <li>Bhakti Yoga (Path of Devotion)</li>
                <li>Jnana Yoga (Path of Knowledge)</li>
                <li>Raja Yoga (Path of Meditation)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Key Concepts:</h3>
              <ul>
                <li>Dharma (Duty)</li>
                <li>Karma (Action)</li>
                <li>Moksha (Liberation)</li>
                <li>Atman (Self)</li>
              </ul>
            </div>
          </div>

          <h2>Philosophical Insights</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Metaphysical Teachings:</h3>
              <ul>
                <li>Nature of Reality</li>
                <li>Divine Manifestation</li>
                <li>Cosmic Order</li>
                <li>Eternal Truth</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Ethical Guidelines:</h3>
              <ul>
                <li>Right Action</li>
                <li>Selfless Service</li>
                <li>Moral Duty</li>
                <li>Spiritual Discipline</li>
              </ul>
            </div>
          </div>

          <h2>Practical Applications</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Daily Life:</h3>
              <ul>
                <li>Work and Duty</li>
                <li>Relationships</li>
                <li>Decision Making</li>
                <li>Spiritual Practice</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Modern Relevance:</h3>
              <ul>
                <li>Leadership</li>
                <li>Ethics</li>
                <li>Psychology</li>
                <li>Well-being</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/concepts-of-dharma-and-karma"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Concepts of Dharma and Karma</h3>
              <p className="text-sm text-muted-foreground">
                Cosmic order and action
              </p>
            </Link>
            <Link
              href="/blog/the-four-purusharthas"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">The Four Purusharthas</h3>
              <p className="text-sm text-muted-foreground">
                Goals of human life
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