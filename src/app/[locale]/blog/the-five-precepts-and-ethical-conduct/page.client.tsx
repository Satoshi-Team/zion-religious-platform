import React from 'react'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The Five Precepts and Buddhist Ethical Conduct | Religious Studies Blog",
  description: "Explore the fundamental ethical guidelines of Buddhism through the Five Precepts. Learn how these principles shape moral behavior, spiritual development, and harmonious living in Buddhist practice.",
  openGraph: {
    title: "The Five Precepts and Buddhist Ethical Conduct | Religious Studies Blog",
    description: "Explore the fundamental ethical guidelines of Buddhism through the Five Precepts. Learn how these principles shape moral behavior, spiritual development, and harmonious living in Buddhist practice.",
    type: "article",
  },
}

export default function TheFivePreceptsPage() {
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
          <span>Ethics</span>
        </div>

        <h1>The Five Precepts: Foundation of Buddhist Ethics</h1>

        <div className="space-y-6">
          <p>
            The Five Precepts (Pañca-sīla) form the core ethical guidelines of
            Buddhist practice. These fundamental principles serve as the foundation
            for moral conduct, spiritual development, and harmonious living in
            Buddhist communities worldwide. Understanding and practicing these
            precepts is essential for anyone following the Buddhist path.
          </p>

          <h2>First Precept: Abstaining from Killing</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Core Principles:</h3>
              <ul>
                <li>Respect for Life</li>
                <li>Non-violence (Ahimsa)</li>
                <li>Compassion for All Beings</li>
                <li>Protection of Nature</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Practical Application:</h3>
              <ul>
                <li>Vegetarianism/Veganism</li>
                <li>Environmental Protection</li>
                <li>Peaceful Conflict Resolution</li>
                <li>Mindful Living</li>
              </ul>
            </div>
          </div>

          <h2>Second Precept: Abstaining from Stealing</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Key Aspects:</h3>
              <ul>
                <li>Honesty in Dealings</li>
                <li>Respect for Property</li>
                <li>Ethical Business Practices</li>
                <li>Generosity</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Modern Context:</h3>
              <ul>
                <li>Digital Ethics</li>
                <li>Intellectual Property</li>
                <li>Fair Trade</li>
                <li>Resource Sharing</li>
              </ul>
            </div>
          </div>

          <h2>Third Precept: Abstaining from Sexual Misconduct</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Ethical Guidelines:</h3>
              <ul>
                <li>Respectful Relationships</li>
                <li>Consent and Trust</li>
                <li>Fidelity</li>
                <li>Sexual Responsibility</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Contemporary Application:</h3>
              <ul>
                <li>Healthy Boundaries</li>
                <li>Gender Equality</li>
                <li>LGBTQ+ Perspectives</li>
                <li>Digital Relationships</li>
              </ul>
            </div>
          </div>

          <h2>Fourth Precept: Abstaining from False Speech</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Elements of Right Speech:</h3>
              <ul>
                <li>Truthfulness</li>
                <li>Beneficial Communication</li>
                <li>Harmonious Speech</li>
                <li>Mindful Expression</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Digital Age Challenges:</h3>
              <ul>
                <li>Social Media Ethics</li>
                <li>Online Discourse</li>
                <li>Information Integrity</li>
                <li>Digital Mindfulness</li>
              </ul>
            </div>
          </div>

          <h2>Fifth Precept: Abstaining from Intoxicants</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Understanding Intoxicants:</h3>
              <ul>
                <li>Mental Clarity</li>
                <li>Mindful Consumption</li>
                <li>Health and Wellbeing</li>
                <li>Spiritual Development</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Modern Challenges:</h3>
              <ul>
                <li>Substance Use</li>
                <li>Digital Addiction</li>
                <li>Entertainment Media</li>
                <li>Mindful Living</li>
              </ul>
            </div>
          </div>

          <h2>Practical Implementation</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Daily Practice:</h3>
              <ul>
                <li>Morning Recitation</li>
                <li>Mindful Reflection</li>
                <li>Ethical Decision-Making</li>
                <li>Community Support</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Spiritual Growth:</h3>
              <ul>
                <li>Meditation Practice</li>
                <li>Self-Reflection</li>
                <li>Karmic Understanding</li>
                <li>Progressive Training</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/concepts-of-karma-and-rebirth"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Karma and Rebirth</h3>
              <p className="text-sm text-muted-foreground">
                Understanding the law of cause and effect in Buddhist ethics
              </p>
            </Link>
            <Link
              href="/blog/the-noble-eightfold-path"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">The Noble Eightfold Path</h3>
              <p className="text-sm text-muted-foreground">
                Exploring the complete path of Buddhist practice
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Deepen your understanding of Buddhist ethics through our comprehensive
              learning path in the{" "}
              <Link href="/religion/buddhism" className="hover:underline">
                Buddhism section
              </Link>
              . Explore how these principles compare with other religious traditions
              in our{" "}
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