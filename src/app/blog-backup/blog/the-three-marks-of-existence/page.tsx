import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The Three Marks of Existence: Core Buddhist Teachings on Reality | Religious Studies Blog",
  description: "Explore the Three Marks of Existence (Anicca, Dukkha, Anatta) - fundamental Buddhist teachings that reveal the true nature of reality. Discover how understanding impermanence, suffering, and non-self leads to wisdom and liberation.",
  openGraph: {
    title: "The Three Marks of Existence: Core Buddhist Teachings on Reality | Religious Studies Blog",
    description: "Explore the Three Marks of Existence (Anicca, Dukkha, Anatta) - fundamental Buddhist teachings that reveal the true nature of reality. Discover how understanding impermanence, suffering, and non-self leads to wisdom and liberation.",
    type: "article",
  },
}

export default function TheThreeMarksOfExistencePage() {
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

        <h1>The Three Marks of Existence: Core Buddhist Teachings on Reality</h1>

        <div className="space-y-6">
          <p>
            The Three Marks of Existence (Tilakkhana) represent fundamental
            characteristics that the Buddha identified as inherent to all
            conditioned phenomena. These teachings - impermanence (Anicca),
            suffering (Dukkha), and non-self (Anatta) - form the cornerstone of
            Buddhist understanding of reality and the path to liberation.
          </p>

          <h2>Impermanence (Anicca)</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Nature of Change:</h3>
              <ul>
                <li>Constant Flux</li>
                <li>Momentary States</li>
                <li>Conditioned Phenomena</li>
                <li>Natural Processes</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Understanding Impermanence:</h3>
              <ul>
                <li>Physical Changes</li>
                <li>Mental States</li>
                <li>External Conditions</li>
                <li>Internal Processes</li>
              </ul>
            </div>
          </div>

          <h2>Suffering (Dukkha)</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Types of Suffering:</h3>
              <ul>
                <li>Physical Pain</li>
                <li>Mental Anguish</li>
                <li>Existential Discontent</li>
                <li>Conditioned States</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Nature of Dukkha:</h3>
              <ul>
                <li>Unsatisfactoriness</li>
                <li>Imperfection</li>
                <li>Conditioned Nature</li>
                <li>Universal Experience</li>
              </ul>
            </div>
          </div>

          <h2>Non-Self (Anatta)</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Understanding Anatta:</h3>
              <ul>
                <li>No Permanent Self</li>
                <li>Conditioned Aggregates</li>
                <li>Interdependent Nature</li>
                <li>Empty of Inherent Existence</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Five Aggregates:</h3>
              <ul>
                <li>Form (Rupa)</li>
                <li>Feeling (Vedana)</li>
                <li>Perception (Sanna)</li>
                <li>Mental Formations (Sankhara)</li>
                <li>Consciousness (Vinnana)</li>
              </ul>
            </div>
          </div>

          <h2>Practical Application</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Daily Life:</h3>
              <ul>
                <li>Mindful Awareness</li>
                <li>Accepting Change</li>
                <li>Letting Go</li>
                <li>Present Moment Focus</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Meditation Practice:</h3>
              <ul>
                <li>Insight Development</li>
                <li>Direct Experience</li>
                <li>Wisdom Cultivation</li>
                <li>Liberation Path</li>
              </ul>
            </div>
          </div>

          <h2>Liberation Through Understanding</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Path to Freedom:</h3>
              <ul>
                <li>Clear Comprehension</li>
                <li>Deep Insight</li>
                <li>Transcendent Wisdom</li>
                <li>Ultimate Liberation</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Benefits of Realization:</h3>
              <ul>
                <li>Freedom from Attachment</li>
                <li>Peace of Mind</li>
                <li>Compassionate Action</li>
                <li>Enlightened Living</li>
              </ul>
            </div>
          </div>

          <h2>Related Topics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/concepts-of-karma-and-rebirth"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Concepts of Karma and Rebirth</h3>
              <p className="text-sm text-muted-foreground">
                Understanding the cycle of existence
              </p>
            </Link>
            <Link
              href="/blog/the-five-precepts-and-ethical-conduct"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">The Five Precepts and Ethical Conduct</h3>
              <p className="text-sm text-muted-foreground">
                Exploring Buddhist moral guidelines
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