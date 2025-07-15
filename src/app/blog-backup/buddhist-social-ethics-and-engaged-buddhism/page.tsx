import React from 'react'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Buddhist Social Ethics and Engaged Buddhism: Compassion in Action | Religious Studies Blog",
  description: "Explore the principles of Buddhist social ethics and the practice of Engaged Buddhism - from compassionate action to social transformation. Discover how Buddhist teachings guide ethical engagement with contemporary social issues.",
  openGraph: {
    title: "Buddhist Social Ethics and Engaged Buddhism: Compassion in Action | Religious Studies Blog",
    description: "Explore the principles of Buddhist social ethics and the practice of Engaged Buddhism - from compassionate action to social transformation. Discover how Buddhist teachings guide ethical engagement with contemporary social issues.",
    type: "article",
  },
}

export default function BuddhistSocialEthicsAndEngagedBuddhismPage() {
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

        <h1>Buddhist Social Ethics and Engaged Buddhism: Compassion in Action</h1>

        <div className="space-y-6">
          <p>
            Buddhist social ethics and Engaged Buddhism represent the practical
            application of Buddhist principles to address contemporary social
            challenges. This exploration examines how Buddhist teachings guide
            compassionate action, social transformation, and ethical engagement
            with global issues.
          </p>

          <h2>Core Principles</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Social Ethics:</h3>
              <ul>
                <li>Interdependence (Pratityasamutpada)</li>
                <li>Compassionate Action (Karuna)</li>
                <li>Right Livelihood (Samma Ajiva)</li>
                <li>Social Harmony (Sangha)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Engaged Buddhism:</h3>
              <ul>
                <li>Mindful Action</li>
                <li>Social Transformation</li>
                <li>Non-violent Change</li>
                <li>Collective Liberation</li>
              </ul>
            </div>
          </div>

          <h2>Social Action</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Community Development:</h3>
              <ul>
                <li>Education Initiatives</li>
                <li>Healthcare Programs</li>
                <li>Economic Empowerment</li>
                <li>Social Services</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Environmental Stewardship:</h3>
              <ul>
                <li>Conservation Efforts</li>
                <li>Sustainable Practices</li>
                <li>Climate Action</li>
                <li>Ecological Awareness</li>
              </ul>
            </div>
          </div>

          <h2>Contemporary Issues</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Social Justice:</h3>
              <ul>
                <li>Human Rights</li>
                <li>Gender Equality</li>
                <li>Economic Justice</li>
                <li>Cultural Preservation</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Peace and Conflict:</h3>
              <ul>
                <li>Conflict Resolution</li>
                <li>Interfaith Dialogue</li>
                <li>Non-violent Action</li>
                <li>Reconciliation</li>
              </ul>
            </div>
          </div>

          <h2>Practical Applications</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Organizational Work:</h3>
              <ul>
                <li>Buddhist NGOs</li>
                <li>Community Centers</li>
                <li>Educational Programs</li>
                <li>Social Enterprises</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Individual Practice:</h3>
              <ul>
                <li>Ethical Living</li>
                <li>Social Engagement</li>
                <li>Mindful Activism</li>
                <li>Compassionate Service</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/buddhist-ethics-and-morality"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Ethics and Morality</h3>
              <p className="text-sm text-muted-foreground">
                Path to virtuous living
              </p>
            </Link>
            <Link
              href="/blog/buddhism-in-the-modern-world"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhism in the Modern World</h3>
              <p className="text-sm text-muted-foreground">
                Contemporary challenges and opportunities
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Continue your exploration of Buddhist social ethics through our
              comprehensive learning path in the{" "}
              <Link href="/religion/buddhism" className="hover:underline">
                Buddhism section
              </Link>
              . Compare and contrast with other social ethics traditions in our{" "}
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