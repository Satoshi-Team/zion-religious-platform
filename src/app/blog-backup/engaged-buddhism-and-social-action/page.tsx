import React from 'react'
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Engaged Buddhism and Social Action: Compassion in Practice | Religious Studies Blog",
  description: "Explore the dynamic movement of Engaged Buddhism - from its origins with Thich Nhat Hanh to contemporary applications. Discover how Buddhist principles guide social action, environmental stewardship, and compassionate service.",
  openGraph: {
    title: "Engaged Buddhism and Social Action: Compassion in Practice | Religious Studies Blog",
    description: "Explore the dynamic movement of Engaged Buddhism - from its origins with Thich Nhat Hanh to contemporary applications. Discover how Buddhist principles guide social action, environmental stewardship, and compassionate service.",
    type: "article",
  },
}

export default function EngagedBuddhismAndSocialActionPage() {
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

        <h1>Engaged Buddhism and Social Action: Compassion in Practice</h1>

        <div className="space-y-6">
          <p>
            Engaged Buddhism represents a dynamic movement that applies Buddhist
            principles to contemporary social issues, emphasizing the inseparable
            connection between personal transformation and social change. This
            exploration examines how Buddhist wisdom guides compassionate action
            and social transformation in the modern world.
          </p>

          <h2>Foundational Principles</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Core Concepts:</h3>
              <ul>
                <li>Interbeing (Interconnectedness)</li>
                <li>Compassionate Action</li>
                <li>Mindful Engagement</li>
                <li>Right Action</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Ethical Framework:</h3>
              <ul>
                <li>Bodhisattva Ideal</li>
                <li>Social Ethics</li>
                <li>Non-violence</li>
                <li>Environmental Ethics</li>
              </ul>
            </div>
          </div>

          <h2>Areas of Engagement</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Social Justice:</h3>
              <ul>
                <li>Human Rights</li>
                <li>Economic Justice</li>
                <li>Gender Equality</li>
                <li>Racial Justice</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Environmental Action:</h3>
              <ul>
                <li>Climate Change</li>
                <li>Conservation</li>
                <li>Sustainable Living</li>
                <li>Animal Welfare</li>
              </ul>
            </div>
          </div>

          <h2>Practical Applications</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Community Programs:</h3>
              <ul>
                <li>Education Initiatives</li>
                <li>Healthcare Services</li>
                <li>Prison Programs</li>
                <li>Refugee Support</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Advocacy Work:</h3>
              <ul>
                <li>Policy Engagement</li>
                <li>Public Education</li>
                <li>Interfaith Dialogue</li>
                <li>Peace Building</li>
              </ul>
            </div>
          </div>

          <h2>Contemporary Movements</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Global Initiatives:</h3>
              <ul>
                <li>International Networks</li>
                <li>Youth Programs</li>
                <li>Digital Activism</li>
                <li>Grassroots Movements</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Future Directions:</h3>
              <ul>
                <li>Technology Integration</li>
                <li>Systemic Change</li>
                <li>Cultural Transformation</li>
                <li>Global Collaboration</li>
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
                Adaptation and innovation
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Continue your exploration of Engaged Buddhism through our
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