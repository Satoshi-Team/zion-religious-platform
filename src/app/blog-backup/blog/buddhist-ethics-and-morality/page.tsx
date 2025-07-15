import React from 'react'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Buddhist Ethics and Morality: Path to Virtuous Living | Religious Studies Blog",
  description: "Explore the comprehensive ethical framework of Buddhism - from the Five Precepts to the Noble Eightfold Path. Discover how Buddhist moral principles guide personal conduct, social relations, and global challenges.",
  openGraph: {
    title: "Buddhist Ethics and Morality: Path to Virtuous Living | Religious Studies Blog",
    description: "Explore the comprehensive ethical framework of Buddhism - from the Five Precepts to the Noble Eightfold Path. Discover how Buddhist moral principles guide personal conduct, social relations, and global challenges.",
    type: "article",
  },
}

export default function BuddhistEthicsAndMoralityPage() {
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

        <h1>Buddhist Ethics and Morality: Path to Virtuous Living</h1>

        <div className="space-y-6">
          <p>
            Buddhist ethics provides a comprehensive framework for moral conduct
            that guides practitioners toward liberation and enlightenment. This
            exploration examines the fundamental principles of Buddhist morality,
            their practical applications, and their role in personal and social
            transformation.
          </p>

          <h2>Core Ethical Principles</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Five Precepts (Pancasila):</h3>
              <ul>
                <li>Non-harming (Ahimsa)</li>
                <li>Truthful Speech</li>
                <li>Right Conduct</li>
                <li>Mindful Consumption</li>
                <li>Ethical Livelihood</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Ten Virtuous Actions:</h3>
              <ul>
                <li>Body: Non-harming, Non-stealing, Sexual Ethics</li>
                <li>Speech: Truth, Harmony, Kindness, Meaningful</li>
                <li>Mind: Non-attachment, Goodwill, Right View</li>
              </ul>
            </div>
          </div>

          <h2>Ethical Development</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Personal Transformation:</h3>
              <ul>
                <li>Mindfulness Practice</li>
                <li>Compassion Cultivation</li>
                <li>Wisdom Development</li>
                <li>Ethical Reflection</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Social Engagement:</h3>
              <ul>
                <li>Right Livelihood</li>
                <li>Community Service</li>
                <li>Environmental Ethics</li>
                <li>Social Justice</li>
              </ul>
            </div>
          </div>

          <h2>Contemporary Applications</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Modern Challenges:</h3>
              <ul>
                <li>Bioethics</li>
                <li>Technology Ethics</li>
                <li>Environmental Issues</li>
                <li>Social Justice</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Global Ethics:</h3>
              <ul>
                <li>Interfaith Dialogue</li>
                <li>Peace Building</li>
                <li>Human Rights</li>
                <li>Sustainable Development</li>
              </ul>
            </div>
          </div>

          <h2>Practical Implementation</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Daily Practice:</h3>
              <ul>
                <li>Mindful Living</li>
                <li>Ethical Decision Making</li>
                <li>Relationship Ethics</li>
                <li>Workplace Ethics</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Long-term Development:</h3>
              <ul>
                <li>Character Building</li>
                <li>Virtue Cultivation</li>
                <li>Ethical Leadership</li>
                <li>Community Building</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/the-five-precepts-and-ethical-conduct"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">The Five Precepts and Ethical Conduct</h3>
              <p className="text-sm text-muted-foreground">
                Buddhist moral guidelines
              </p>
            </Link>
            <Link
              href="/blog/buddhist-social-ethics-and-engaged-buddhism"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Social Ethics and Engaged Buddhism</h3>
              <p className="text-sm text-muted-foreground">
                Compassion in action
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Continue your exploration of Buddhist ethics through our
              comprehensive learning path in the{" "}
              <Link href="/religion/buddhism" className="hover:underline">
                Buddhism section
              </Link>
              . Compare and contrast with other ethical traditions in our{" "}
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