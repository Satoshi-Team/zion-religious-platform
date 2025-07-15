import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Buddhist Psychology and Mind Training: Cultivating Mental Well-being | Religious Studies Blog",
  description: "Explore the profound psychological insights and practical techniques of Buddhist mind training - from mindfulness to compassion cultivation. Discover how Buddhist psychology offers effective tools for mental health, emotional balance, and personal growth.",
  openGraph: {
    title: "Buddhist Psychology and Mind Training: Cultivating Mental Well-being | Religious Studies Blog",
    description: "Explore the profound psychological insights and practical techniques of Buddhist mind training - from mindfulness to compassion cultivation. Discover how Buddhist psychology offers effective tools for mental health, emotional balance, and personal growth.",
    type: "article",
  },
}

export default function BuddhistPsychologyAndMindTrainingPage() {
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

        <h1>Buddhist Psychology and Mind Training: Cultivating Mental Well-being</h1>

        <div className="space-y-6">
          <p>
            Buddhist psychology offers profound insights into the nature of mind and
            consciousness, providing practical methods for cultivating mental
            well-being and emotional balance. This exploration examines the
            psychological principles and training techniques that have guided
            practitioners for millennia.
          </p>

          <h2>Core Psychological Concepts</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Mind and Consciousness:</h3>
              <ul>
                <li>Five Aggregates (Skandhas)</li>
                <li>Eight Consciousnesses</li>
                <li>Mental Factors</li>
                <li>Consciousness Stream</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Mental States:</h3>
              <ul>
                <li>Wholesome States</li>
                <li>Unwholesome States</li>
                <li>Neutral States</li>
                <li>Meditative States</li>
              </ul>
            </div>
          </div>

          <h2>Mind Training Techniques</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Meditation Practices:</h3>
              <ul>
                <li>Mindfulness Meditation</li>
                <li>Concentration Practice</li>
                <li>Insight Meditation</li>
                <li>Loving-kindness Practice</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Mental Development:</h3>
              <ul>
                <li>Attention Training</li>
                <li>Emotional Regulation</li>
                <li>Thought Observation</li>
                <li>Mental Clarity</li>
              </ul>
            </div>
          </div>

          <h2>Emotional Intelligence</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Emotional Awareness:</h3>
              <ul>
                <li>Emotion Recognition</li>
                <li>Emotional Patterns</li>
                <li>Reactive Tendencies</li>
                <li>Emotional Balance</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Compassion Training:</h3>
              <ul>
                <li>Self-Compassion</li>
                <li>Empathy Development</li>
                <li>Compassionate Action</li>
                <li>Heart Practices</li>
              </ul>
            </div>
          </div>

          <h2>Contemporary Applications</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Mental Health:</h3>
              <ul>
                <li>Stress Reduction</li>
                <li>Anxiety Management</li>
                <li>Depression Treatment</li>
                <li>Trauma Healing</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Personal Growth:</h3>
              <ul>
                <li>Self-Awareness</li>
                <li>Resilience Building</li>
                <li>Relationship Skills</li>
                <li>Life Purpose</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/buddhist-meditation-techniques"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Meditation Techniques</h3>
              <p className="text-sm text-muted-foreground">
                Path to mindfulness and insight
              </p>
            </Link>
            <Link
              href="/blog/buddhism-and-mindfulness"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhism and Mindfulness</h3>
              <p className="text-sm text-muted-foreground">
                Ancient wisdom in modern life
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Continue your exploration of Buddhist psychology and mind training through our
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