import React from 'react'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Buddhist Ethics and Moral Philosophy: Path to Virtuous Living | Religious Studies Blog",
  description: "Explore the comprehensive ethical framework of Buddhism - from the Five Precepts to the Noble Eightfold Path. Discover how Buddhist moral principles guide personal conduct, social relations, and global challenges.",
  openGraph: {
    title: "Buddhist Ethics and Moral Philosophy: Path to Virtuous Living | Religious Studies Blog",
    description: "Explore the comprehensive ethical framework of Buddhism - from the Five Precepts to the Noble Eightfold Path. Discover how Buddhist moral principles guide personal conduct, social relations, and global challenges.",
    type: "article",
  },
}

export default function BuddhistEthicsAndMoralPhilosophyPage() {
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

        <h1>Buddhist Ethics and Moral Philosophy: Path to Virtuous Living</h1>

        <div className="space-y-6">
          <p>
            Buddhist ethics provides a comprehensive framework for moral living,
            rooted in wisdom and compassion. This exploration examines the
            fundamental principles that guide ethical conduct, from personal
            behavior to social responsibility, offering timeless insights for
            contemporary challenges.
          </p>

          <h2>Foundational Principles</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Core Values:</h3>
              <ul>
                <li>Ahimsa (Non-violence)</li>
                <li>Karuna (Compassion)</li>
                <li>Metta (Loving-kindness)</li>
                <li>Upekkha (Equanimity)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Ethical Guidelines:</h3>
              <ul>
                <li>Five Precepts</li>
                <li>Ten Wholesome Actions</li>
                <li>Six Perfections</li>
                <li>Four Immeasurables</li>
              </ul>
            </div>
          </div>

          <h2>Personal Ethics</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Individual Conduct:</h3>
              <ul>
                <li>Right Speech</li>
                <li>Right Action</li>
                <li>Right Livelihood</li>
                <li>Mindful Living</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Mental Development:</h3>
              <ul>
                <li>Right Effort</li>
                <li>Right Mindfulness</li>
                <li>Right Concentration</li>
                <li>Wisdom Cultivation</li>
              </ul>
            </div>
          </div>

          <h2>Social Ethics</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Community Relations:</h3>
              <ul>
                <li>Family Ethics</li>
                <li>Workplace Conduct</li>
                <li>Social Responsibility</li>
                <li>Environmental Stewardship</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Global Engagement:</h3>
              <ul>
                <li>Peace Building</li>
                <li>Social Justice</li>
                <li>Interfaith Dialogue</li>
                <li>Cultural Exchange</li>
              </ul>
            </div>
          </div>

          <h2>Contemporary Applications</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Modern Challenges:</h3>
              <ul>
                <li>Bioethics</li>
                <li>Digital Ethics</li>
                <li>Environmental Ethics</li>
                <li>Business Ethics</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Practical Wisdom:</h3>
              <ul>
                <li>Ethical Decision Making</li>
                <li>Conflict Resolution</li>
                <li>Leadership Ethics</li>
                <li>Social Innovation</li>
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
              href="/blog/the-noble-eightfold-path"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">The Noble Eightfold Path</h3>
              <p className="text-sm text-muted-foreground">
                Practical guide to Buddhist practice
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Continue your exploration of Buddhist ethics and moral philosophy through our
              comprehensive learning path in the{" "}
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