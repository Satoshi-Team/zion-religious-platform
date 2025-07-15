import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Buddhism and Mindfulness: Ancient Wisdom in Modern Life | Religious Studies Blog",
  description: "Explore the profound connection between Buddhism and mindfulness - from ancient meditation practices to contemporary applications in psychology, healthcare, and daily life. Discover how Buddhist wisdom enhances modern mindfulness.",
  openGraph: {
    title: "Buddhism and Mindfulness: Ancient Wisdom in Modern Life | Religious Studies Blog",
    description: "Explore the profound connection between Buddhism and mindfulness - from ancient meditation practices to contemporary applications in psychology, healthcare, and daily life. Discover how Buddhist wisdom enhances modern mindfulness.",
    type: "article",
  },
}

export default function BuddhismAndMindfulnessPage() {
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

        <h1>Buddhism and Mindfulness: Ancient Wisdom in Modern Life</h1>

        <div className="space-y-6">
          <p>
            The integration of Buddhist mindfulness practices into contemporary
            life represents a profound bridge between ancient wisdom and modern
            applications. This exploration examines how Buddhist mindfulness
            principles have been adapted and applied in various fields, from
            psychology and healthcare to education and personal development.
          </p>

          <h2>Historical Foundations</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Buddhist Origins:</h3>
              <ul>
                <li>Satipatthana Sutta</li>
                <li>Anapanasati Sutta</li>
                <li>Four Foundations of Mindfulness</li>
                <li>Mindfulness in Daily Life</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Modern Adaptation:</h3>
              <ul>
                <li>Secular Mindfulness</li>
                <li>Scientific Research</li>
                <li>Clinical Applications</li>
                <li>Educational Programs</li>
              </ul>
            </div>
          </div>

          <h2>Core Principles</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Mindfulness Fundamentals:</h3>
              <ul>
                <li>Present Moment Awareness</li>
                <li>Non-judgmental Observation</li>
                <li>Acceptance and Equanimity</li>
                <li>Compassionate Attention</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Buddhist Integration:</h3>
              <ul>
                <li>Ethical Framework</li>
                <li>Wisdom Development</li>
                <li>Compassion Cultivation</li>
                <li>Spiritual Context</li>
              </ul>
            </div>
          </div>

          <h2>Contemporary Applications</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Healthcare and Wellness:</h3>
              <ul>
                <li>Mindfulness-Based Stress Reduction (MBSR)</li>
                <li>Mindfulness-Based Cognitive Therapy (MBCT)</li>
                <li>Pain Management</li>
                <li>Mental Health Treatment</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Education and Development:</h3>
              <ul>
                <li>School Programs</li>
                <li>Workplace Training</li>
                <li>Leadership Development</li>
                <li>Personal Growth</li>
              </ul>
            </div>
          </div>

          <h2>Research and Evidence</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3>Scientific Studies:</h3>
              <ul>
                <li>Neuroscientific Research</li>
                <li>Psychological Benefits</li>
                <li>Physical Health Effects</li>
                <li>Social Impact Studies</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3>Clinical Applications:</h3>
              <ul>
                <li>Anxiety and Depression</li>
                <li>Chronic Pain</li>
                <li>Addiction Recovery</li>
                <li>Trauma Treatment</li>
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
              href="/blog/buddhist-psychology-and-mind-training"
              className="rounded-lg border p-4 hover:border-foreground/50"
            >
              <h3 className="text-lg font-semibold">Buddhist Psychology and Mind Training</h3>
              <p className="text-sm text-muted-foreground">
                Cultivating mental well-being
              </p>
            </Link>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-4">
            <h3 className="text-lg font-semibold">Further Study</h3>
            <p className="text-sm text-muted-foreground">
              Continue your exploration of Buddhism and mindfulness through our
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