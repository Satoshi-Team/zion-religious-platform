import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The Noble Eightfold Path: Practical Guide to Buddhist Practice | Religious Studies Blog",
  description: "Explore the Noble Eightfold Path - Buddhism's practical guide to ethical conduct, mental discipline, and wisdom. Discover how these eight interconnected practices lead to liberation and enlightenment.",
  openGraph: {
    title: "The Noble Eightfold Path: Practical Guide to Buddhist Practice | Religious Studies Blog",
    description: "Explore the Noble Eightfold Path - Buddhism's practical guide to ethical conduct, mental discipline, and wisdom. Discover how these eight interconnected practices lead to liberation and enlightenment.",
    type: "article",
  },
}

export default function TheNobleEightfoldPathPage() {
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

        <h1>The Noble Eightfold Path: Practical Guide to Buddhist Practice</h1>

        <div className="space-y-6">
          <p>
            The Noble Eightfold Path represents the Buddha's practical guide to
            ethical conduct, mental discipline, and wisdom. These eight
            interconnected practices form the fourth Noble Truth and provide a
            comprehensive framework for personal transformation and spiritual
            development.
          </p>

          <h2>Wisdom (Panna)</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Right View (Samma Ditthi):</h3>
              <ul>
                <li>Understanding the Four Noble Truths</li>
                <li>Karma and Rebirth</li>
                <li>Three Marks of Existence</li>
                <li>Interdependent Origination</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Right Intention (Samma Sankappa):</h3>
              <ul>
                <li>Renunciation</li>
                <li>Goodwill</li>
                <li>Harmlessness</li>
                <li>Compassionate Action</li>
              </ul>
            </div>
          </div>

          <h2>Ethical Conduct (Sila)</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Right Speech (Samma Vaca):</h3>
              <ul>
                <li>Truthful Communication</li>
                <li>Harmonious Speech</li>
                <li>Gentle Words</li>
                <li>Meaningful Dialogue</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Right Action (Samma Kammanta):</h3>
              <ul>
                <li>Non-harming</li>
                <li>Ethical Behavior</li>
                <li>Respect for Life</li>
                <li>Social Responsibility</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Right Livelihood (Samma Ajiva):</h3>
              <ul>
                <li>Ethical Occupation</li>
                <li>Honest Work</li>
                <li>Social Contribution</li>
                <li>Environmental Care</li>
              </ul>
            </div>
          </div>

          <h2>Mental Discipline (Samadhi)</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Right Effort (Samma Vayama):</h3>
              <ul>
                <li>Preventing Unwholesome States</li>
                <li>Abandoning Existing Unwholesome States</li>
                <li>Cultivating Wholesome States</li>
                <li>Maintaining Wholesome States</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Right Mindfulness (Samma Sati):</h3>
              <ul>
                <li>Body Awareness</li>
                <li>Feelings Awareness</li>
                <li>Mind Awareness</li>
                <li>Mental Objects Awareness</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Right Concentration (Samma Samadhi):</h3>
              <ul>
                <li>Focused Attention</li>
                <li>Meditative Absorption</li>
                <li>Mental Unification</li>
                <li>Deep Insight</li>
              </ul>
            </div>
          </div>

          <h2>Practical Application</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Daily Practice:</h3>
              <ul>
                <li>Mindful Living</li>
                <li>Ethical Decision Making</li>
                <li>Meditation Techniques</li>
                <li>Community Support</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Spiritual Development:</h3>
              <ul>
                <li>Personal Growth</li>
                <li>Wisdom Cultivation</li>
                <li>Compassion Development</li>
                <li>Liberation Path</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/the-four-noble-truths"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">The Four Noble Truths</h3>
              <p className="text-sm text-muted-foreground">
                Understanding the foundation of Buddhist teachings
              </p>
            </Link>
            <Link
              href="/blog/concepts-of-karma-and-rebirth"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Concepts of Karma and Rebirth</h3>
              <p className="text-sm text-muted-foreground">
                Exploring the cycle of existence
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Continue your exploration of Buddhist practice through our comprehensive
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