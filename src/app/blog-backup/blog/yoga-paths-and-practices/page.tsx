import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Yoga: Paths and Practices in Hinduism | Karma, Bhakti, Jnana, Raja Yoga | Religious Studies Blog",
  description: "Explore the diverse paths of Yoga in Hinduism: Karma Yoga (action), Bhakti Yoga (devotion), Jnana Yoga (knowledge), and Raja Yoga (royal/meditative path). Understand their principles, practices, and goals for spiritual liberation.",
  openGraph: {
    title: "Yoga: Paths and Practices in Hinduism | Karma, Bhakti, Jnana, Raja Yoga | Religious Studies Blog",
    description: "A comprehensive guide to the major Yoga paths in Hinduism – Karma, Bhakti, Jnana, and Raja Yoga – including their philosophies, techniques, and aims.",
    type: "article",
    images: [
      {
        url: "/images/yoga-paths-practices.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "The Four Main Paths of Yoga in Hinduism",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga: Paths and Practices in Hinduism | Karma, Bhakti, Jnana, Raja Yoga",
    description: "Discover the four primary paths of Yoga in Hinduism: Karma, Bhakti, Jnana, and Raja Yoga.",
    images: ["/images/yoga-paths-practices.jpg"], // Placeholder - ensure image exists
  },
}

export default function YogaPathsAndPracticesPage() {
  return (
    <article className="prose prose-lg dark:prose-invert mx-auto">
      <div className="space-y-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <span aria-hidden="true">•</span>
          <Link href="/religion/hinduism" className="hover:underline">
            Hinduism
          </Link>
          <span aria-hidden="true">•</span>
          <span aria-current="page">Yoga: Paths & Practices</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Yoga: Paths and Practices in Hinduism
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Karma Yoga</Badge>
            <Badge variant="secondary">Bhakti Yoga</Badge>
            <Badge variant="secondary">Jnana Yoga</Badge>
            <Badge variant="secondary">Raja Yoga</Badge>
            <Badge variant="secondary">Ashtanga Yoga</Badge>
            <Badge variant="secondary">Patanjali</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            Yoga, derived from the Sanskrit root "yuj" meaning to unite or yoke, is a multifaceted spiritual discipline
            originating in ancient India. While often associated with physical postures (asanas) in the West, Yoga in
            Hinduism encompasses a wide array of paths and practices aimed at achieving Moksha (liberation) – the union
            of the individual self (Atman) with the ultimate reality (Brahman).
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">What is Yoga?</h2>
                <Separator className="my-4" />
                <p>
                  Yoga is a holistic system for well-being, integrating physical, mental, ethical, and spiritual aspects.
                  Its ultimate purpose is to transcend suffering and limitations by realizing one's true nature.
                  Different paths of Yoga cater to various temperaments and capacities, but all share the goal of
                  spiritual enlightenment and liberation from the cycle of Samsara (rebirth).
                </p>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">The Four Primary Paths of Yoga</h2>
                <Separator className="my-4" />
                <div className="space-y-6">
                  <Card className="p-4 bg-muted/40">
                    <h3 className="text-xl font-medium">1. Karma Yoga: The Path of Action</h3>
                    <p className="mt-2 text-sm">
                      Karma Yoga emphasizes selfless action performed without attachment to the results. It is the path of
                      fulfilling one's duties (Dharma) with skill and equanimity, dedicating all actions to the Divine.
                    </p>
                    <ul className="mt-2 text-xs list-disc pl-4">
                      <li><strong>Principle:</strong> Nishkama Karma (action without desire for fruits).</li>
                      <li><strong>Practices:</strong> Performing duties with mindfulness, detachment, and dedication; serving others selflessly.</li>
                      <li><strong>Primary Text:</strong> Bhagavad Gita.</li>
                      <li><strong>Goal:</strong> Purification of mind, freedom from karmic bondage.</li>
                    </ul>
                  </Card>

                  <Card className="p-4 bg-muted/40">
                    <h3 className="text-xl font-medium">2. Bhakti Yoga: The Path of Devotion</h3>
                    <p className="mt-2 text-sm">
                      Bhakti Yoga is the path of love and devotion towards a chosen form of God (Ishta-devata). It involves
                      channeling emotions towards the Divine through prayer, worship, chanting, and remembrance.
                    </p>
                    <ul className="mt-2 text-xs list-disc pl-4">
                      <li><strong>Principle:</strong> Cultivating intense love and surrender to God.</li>
                      <li><strong>Practices:</strong> Puja (ritual worship), Kirtan (devotional singing), Japa (mantra repetition), Smarana (remembrance of God), storytelling (Shravana).</li>
                      <li><strong>Primary Texts:</strong> Bhagavata Purana, Narada Bhakti Sutras, Bhagavad Gita.</li>
                      <li><strong>Goal:</strong> Experiencing divine union through love and grace.</li>
                    </ul>
                  </Card>

                  <Card className="p-4 bg-muted/40">
                    <h3 className="text-xl font-medium">3. Jnana Yoga: The Path of Knowledge</h3>
                    <p className="mt-2 text-sm">
                      Jnana Yoga is the path of wisdom and self-inquiry. It involves discriminating between the real (Atman/Brahman)
                      and the unreal (Maya/illusion) through study, reflection (Manana), and meditation (Nididhyasana).
                    </p>
                    <ul className="mt-2 text-xs list-disc pl-4">
                      <li><strong>Principle:</strong> Realizing the true Self (Atman) and its identity with Brahman.</li>
                      <li><strong>Practices:</strong> Study of scriptures (Shravana), contemplation on their meaning, deep meditation on "Who am I?".</li>
                      <li><strong>Primary Texts:</strong> Upanishads, Advaita Vedanta texts (e.g., works of Shankaracharya), Ashtavakra Gita.</li>
                      <li><strong>Goal:</strong> Attaining Moksha through direct realization of non-duality.</li>
                    </ul>
                  </Card>

                  <Card className="p-4 bg-muted/40">
                    <h3 className="text-xl font-medium">4. Raja Yoga: The Royal Path (Path of Meditation)</h3>
                    <p className="mt-2 text-sm">
                      Raja Yoga, systematized by Patanjali in the Yoga Sutras, is the path of mental control and meditation.
                      It aims to still the fluctuations of the mind (Chitta Vritti Nirodha) to achieve Kaivalya (aloneness/liberation).
                    </p>
                    <ul className="mt-2 text-xs list-disc pl-4">
                      <li><strong>Principle:</strong> Control and purification of the mind.</li>
                      <li><strong>Practices:</strong> The Eight Limbs of Yoga (Ashtanga Yoga) – see below.</li>
                      <li><strong>Primary Text:</strong> Patanjali's Yoga Sutras.</li>
                      <li><strong>Goal:</strong> Samadhi (superconscious state) and Kaivalya.</li>
                    </ul>
                  </Card>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">The Eight Limbs of Raja Yoga (Ashtanga Yoga)</h2>
                <Separator className="my-4" />
                <p>Patanjali's Raja Yoga outlines an eight-fold path for spiritual development:</p>
                <ol className="list-decimal pl-6 mt-2 space-y-1 text-sm">
                  <li><strong>Yama:</strong> Ethical restraints (non-violence, truthfulness, non-stealing, continence, non-covetousness).</li>
                  <li><strong>Niyama:</strong> Observances (purity, contentment, austerity, self-study, surrender to God).</li>
                  <li><strong>Asana:</strong> Steady and comfortable physical postures.</li>
                  <li><strong>Pranayama:</strong> Regulation and control of breath/life-force.</li>
                  <li><strong>Pratyahara:</strong> Withdrawal of the senses from external objects.</li>
                  <li><strong>Dharana:</strong> Concentration, fixing the mind on a single point.</li>
                  <li><strong>Dhyana:</strong> Meditation, uninterrupted flow of thought towards the object of concentration.</li>
                  <li><strong>Samadhi:</strong> Superconscious state, absorption, union with the object of meditation.</li>
                </ol>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Common Elements and Synthesis</h2>
                <Separator className="my-4" />
                <p>
                  While distinct, these paths of Yoga are not always mutually exclusive. Many practitioners integrate elements
                  from different paths. For example, Bhakti can support Karma Yoga by providing a divine focus for actions, and
                  the discipline of Raja Yoga can aid Jnana Yoga by steadying the mind for inquiry. The Bhagavad Gita itself
                  is renowned for its synthesis of Karma, Bhakti, and Jnana Yoga.
                </p>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/hindu-philosophy" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Hindu Philosophy</h3>
                    <p className="text-sm text-muted-foreground">
                      Understand the philosophical schools that underpin Yoga.
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/the-bhagavad-gita-and-its-teachings" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">The Bhagavad Gita</h3>
                    <p className="text-sm text-muted-foreground">
                      A key text for Karma, Bhakti, and Jnana Yoga.
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Delve deeper into{" "}
                  <Link href="/hinduism/texts/yoga-sutras" className="hover:underline">
                    Patanjali's Yoga Sutras
                  </Link>
                  , explore the practices of{" "}
                  <Link href="/hinduism/yoga/ashtanga" className="hover:underline">
                    Ashtanga Yoga
                  </Link>
                  , or compare different{" "}
                  <Link href="/hinduism/yoga/meditation-techniques" className="hover:underline">
                    Meditation Techniques
                  </Link>
                  .
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/hinduism/concepts/moksha">Understanding Moksha</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/hinduism/yoga/hatha-yoga">Hatha Yoga Basics</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </ScrollArea>
        </div>
      </div>
    </article>
  )
} 