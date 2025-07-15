import React from 'react'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Concepts of Karma and Rebirth: Understanding the Cycle of Existence | Religious Studies Blog",
  description: "Explore the profound Buddhist concepts of Karma and Rebirth - from understanding the law of cause and effect to the cycle of existence. Discover how these teachings shape Buddhist understanding of life, death, and liberation.",
  openGraph: {
    title: "Concepts of Karma and Rebirth: Understanding the Cycle of Existence | Religious Studies Blog",
    description: "Explore the profound Buddhist concepts of Karma and Rebirth - from understanding the law of cause and effect to the cycle of existence. Discover how these teachings shape Buddhist understanding of life, death, and liberation.",
    type: "article",
  },
}

export default function ConceptsOfKarmaAndRebirthPage() {
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

        <h1>Concepts of Karma and Rebirth: Understanding the Cycle of Existence</h1>

        <div className="space-y-6">
          <p>
            The Buddhist concepts of Karma and Rebirth form a fundamental framework
            for understanding the nature of existence and the path to liberation.
            These interconnected teachings explain how our actions shape our present
            and future experiences, and how the cycle of rebirth continues until
            enlightenment is achieved.
          </p>

          <h2>Understanding Karma</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Nature of Karma:</h3>
              <ul>
                <li>Law of Cause and Effect</li>
                <li>Intentional Actions</li>
                <li>Moral Consequences</li>
                <li>Universal Principle</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Types of Karma:</h3>
              <ul>
                <li>Wholesome Actions</li>
                <li>Unwholesome Actions</li>
                <li>Neutral Actions</li>
                <li>Karmic Results</li>
              </ul>
            </div>
          </div>

          <h2>Karmic Formation</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Mental Factors:</h3>
              <ul>
                <li>Intention (Cetana)</li>
                <li>Volition</li>
                <li>Mental States</li>
                <li>Consciousness</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Action Types:</h3>
              <ul>
                <li>Physical Actions</li>
                <li>Verbal Actions</li>
                <li>Mental Actions</li>
                <li>Karmic Seeds</li>
              </ul>
            </div>
          </div>

          <h2>Rebirth Process</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Death and Transition:</h3>
              <ul>
                <li>Consciousness Transfer</li>
                <li>Intermediate State</li>
                <li>Rebirth Factors</li>
                <li>Karmic Momentum</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Rebirth Realms:</h3>
              <ul>
                <li>Gods and Demi-gods</li>
                <li>Humans</li>
                <li>Animals</li>
                <li>Hungry Ghosts</li>
                <li>Hell Beings</li>
              </ul>
            </div>
          </div>

          <h2>Breaking the Cycle</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Path to Liberation:</h3>
              <ul>
                <li>Understanding Karma</li>
                <li>Ethical Living</li>
                <li>Mental Development</li>
                <li>Wisdom Cultivation</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Liberation Factors:</h3>
              <ul>
                <li>Right Understanding</li>
                <li>Mindful Awareness</li>
                <li>Compassionate Action</li>
                <li>Nirvana Realization</li>
              </ul>
            </div>
          </div>

          <h2>Practical Implications</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Daily Life:</h3>
              <ul>
                <li>Ethical Choices</li>
                <li>Mindful Actions</li>
                <li>Karmic Awareness</li>
                <li>Spiritual Growth</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Spiritual Practice:</h3>
              <ul>
                <li>Meditation</li>
                <li>Moral Conduct</li>
                <li>Wisdom Development</li>
                <li>Liberation Path</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/the-noble-eightfold-path"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">The Noble Eightfold Path</h3>
              <p className="text-sm text-muted-foreground">
                Understanding the path to liberation
              </p>
            </Link>
            <Link
              href="/blog/the-three-marks-of-existence"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">The Three Marks of Existence</h3>
              <p className="text-sm text-muted-foreground">
                Exploring the nature of reality
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Continue your exploration of Buddhist concepts through our comprehensive
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