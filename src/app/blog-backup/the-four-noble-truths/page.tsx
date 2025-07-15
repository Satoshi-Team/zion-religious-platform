import React from 'react'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The Four Noble Truths: Core Teachings of Buddhism | Religious Studies Blog",
  description: "Explore the fundamental teachings of Buddhism through the Four Noble Truths - from understanding suffering to the path of liberation. Discover how these timeless insights continue to guide spiritual seekers toward enlightenment.",
  openGraph: {
    title: "The Four Noble Truths: Core Teachings of Buddhism | Religious Studies Blog",
    description: "Explore the fundamental teachings of Buddhism through the Four Noble Truths - from understanding suffering to the path of liberation. Discover how these timeless insights continue to guide spiritual seekers toward enlightenment.",
    type: "article",
  },
}

export default function TheFourNobleTruthsPage() {
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

        <h1>The Four Noble Truths: Core Teachings of Buddhism</h1>

        <div className="space-y-6">
          <p>
            The Four Noble Truths represent the Buddha's first teaching after his
            enlightenment, delivered at Deer Park in Sarnath. These fundamental
            insights form the foundation of Buddhist philosophy and practice,
            offering a comprehensive framework for understanding and overcoming
            suffering.
          </p>

          <h2>First Noble Truth: The Truth of Suffering (Dukkha)</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Nature of Suffering:</h3>
              <ul>
                <li>Physical Pain</li>
                <li>Mental Anguish</li>
                <li>Impermanence</li>
                <li>Unsatisfactoriness</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Types of Suffering:</h3>
              <ul>
                <li>Birth and Death</li>
                <li>Old Age and Sickness</li>
                <li>Separation from Loved Ones</li>
                <li>Not Getting What One Wants</li>
              </ul>
            </div>
          </div>

          <h2>Second Noble Truth: The Origin of Suffering (Samudaya)</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Causes of Suffering:</h3>
              <ul>
                <li>Craving (Tanha)</li>
                <li>Attachment</li>
                <li>Ignorance</li>
                <li>Desire</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Root Causes:</h3>
              <ul>
                <li>Three Poisons</li>
                <li>Karmic Patterns</li>
                <li>Conditioned Existence</li>
                <li>Mental Formations</li>
              </ul>
            </div>
          </div>

          <h2>Third Noble Truth: The Cessation of Suffering (Nirodha)</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Ending Suffering:</h3>
              <ul>
                <li>Nirvana</li>
                <li>Liberation</li>
                <li>Freedom</li>
                <li>Peace</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Path to Cessation:</h3>
              <ul>
                <li>Letting Go</li>
                <li>Transcendence</li>
                <li>Awakening</li>
                <li>Realization</li>
              </ul>
            </div>
          </div>

          <h2>Fourth Noble Truth: The Path to the Cessation of Suffering (Magga)</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Noble Eightfold Path:</h3>
              <ul>
                <li>Right View</li>
                <li>Right Intention</li>
                <li>Right Speech</li>
                <li>Right Action</li>
                <li>Right Livelihood</li>
                <li>Right Effort</li>
                <li>Right Mindfulness</li>
                <li>Right Concentration</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Path Categories:</h3>
              <ul>
                <li>Wisdom (Panna)</li>
                <li>Ethical Conduct (Sila)</li>
                <li>Mental Discipline (Samadhi)</li>
                <li>Integrated Practice</li>
              </ul>
            </div>
          </div>

          <h2>Practical Application</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Daily Life:</h3>
              <ul>
                <li>Mindful Awareness</li>
                <li>Ethical Living</li>
                <li>Meditation Practice</li>
                <li>Wisdom Development</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Spiritual Growth:</h3>
              <ul>
                <li>Personal Transformation</li>
                <li>Community Support</li>
                <li>Teacher Guidance</li>
                <li>Continuous Learning</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/life-of-siddhartha-gautama"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Life of Siddhartha Gautama</h3>
              <p className="text-sm text-muted-foreground">
                Understanding the Buddha's journey to enlightenment
              </p>
            </Link>
            <Link
              href="/blog/the-noble-eightfold-path"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">The Noble Eightfold Path</h3>
              <p className="text-sm text-muted-foreground">
                Exploring the practical path to liberation
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Continue your exploration of Buddhist teachings through our comprehensive
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