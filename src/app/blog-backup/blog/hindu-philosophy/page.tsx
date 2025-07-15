import React from 'react'
import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Hindu Philosophy: Astika (Orthodox) & Nastika (Heterodox) Schools | Religious Studies Blog",
  description: "Explore the six Astika (orthodox) schools of Hindu philosophy: Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa, and Vedanta. Also, learn about Nastika (heterodox) schools like Charvaka, Buddhism, and Jainism.",
  openGraph: {
    title: "Hindu Philosophy: Astika (Orthodox) & Nastika (Heterodox) Schools | Religious Studies Blog",
    description: "An overview of the major philosophical schools in Hinduism, detailing the six orthodox (Astika) systems and key heterodox (Nastika) perspectives.",
    type: "article",
    images: [
      {
        url: "/images/hindu-philosophy-schools.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "The Schools of Hindu Philosophy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hindu Philosophy: Astika & Nastika Schools Explained",
    description: "Discover the rich diversity of Hindu philosophical thought, from the six orthodox schools (Nyaya, Yoga, Vedanta, etc.) to heterodox views.",
    images: ["/images/hindu-philosophy-schools.jpg"], // Placeholder - ensure image exists
  },
}

export default function HinduPhilosophyPage() {
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
          <span aria-current="page">Hindu Philosophy</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Hindu Philosophy: Astika and Nastika Schools
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Astika Schools</Badge>
            <Badge variant="secondary">Nastika Schools</Badge>
            <Badge variant="secondary">Nyaya</Badge>
            <Badge variant="secondary">Vaisheshika</Badge>
            <Badge variant="secondary">Samkhya</Badge>
            <Badge variant="secondary">Yoga</Badge>
            <Badge variant="secondary">Mimamsa</Badge>
            <Badge variant="secondary">Vedanta</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            Hindu philosophy (Darshana) encompasses a diverse range of intellectual traditions and spiritual inquiries.
            These are broadly classified into Astika (orthodox) schools, which accept the authority of the Vedas, and
            Nastika (heterodox) schools, which do not. Each school offers unique perspectives on reality, epistemology, ethics, and liberation.
          </p>

          <ScrollArea className="h-[700px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Astika (Orthodox) Schools</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  The six Astika Darshanas are often grouped into three pairs based on their historical and conceptual proximity:
                  Nyaya-Vaisheshika, Samkhya-Yoga, and Mimamsa-Vedanta.
                </p>
                <Separator className="my-4" />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="p-4 bg-muted/40">
                    <h3 className="text-lg font-medium">Nyaya</h3>
                    <p className="mt-1 text-xs"><strong>Focus:</strong> Logic and Epistemology (Pramanas - means of valid knowledge).</p>
                    <p className="mt-1 text-xs"><strong>Founder/Text:</strong> Gautama Muni (Nyaya Sutras).</p>
                    <p className="mt-1 text-xs"><strong>Core Tenet:</strong> Attaining liberation through logical thinking and valid knowledge of reality. Identifies sixteen categories of reasoning.</p>
                  </Card>
                  <Card className="p-4 bg-muted/40">
                    <h3 className="text-lg font-medium">Vaisheshika</h3>
                    <p className="mt-1 text-xs"><strong>Focus:</strong> Metaphysics, Atomism (nature of reality as composed of atoms - Paramanu).</p>
                    <p className="mt-1 text-xs"><strong>Founder/Text:</strong> Kanada (Vaisheshika Sutras).</p>
                    <p className="mt-1 text-xs"><strong>Core Tenet:</strong> Understanding reality through the analysis of categories (Padarthas) of existence, including substance, quality, action. Posits that liberation comes from understanding these categories.</p>
                  </Card>
                  <Card className="p-4 bg-muted/40">
                    <h3 className="text-lg font-medium">Samkhya</h3>
                    <p className="mt-1 text-xs"><strong>Focus:</strong> Metaphysics, Dualism (Purusha - consciousness, and Prakriti - matter/nature).</p>
                    <p className="mt-1 text-xs"><strong>Founder/Text:</strong> Kapila (Samkhya Karika by Ishvarakrishna is a key text).</p>
                    <p className="mt-1 text-xs"><strong>Core Tenet:</strong> Liberation through the discriminative knowledge of Purusha as distinct from Prakriti and its evolutes. Atheistic in its classical form.</p>
                  </Card>
                  <Card className="p-4 bg-muted/40">
                    <h3 className="text-lg font-medium">Yoga</h3>
                    <p className="mt-1 text-xs"><strong>Focus:</strong> Practical path of spiritual discipline, psychology, and meditation.</p>
                    <p className="mt-1 text-xs"><strong>Founder/Text:</strong> Patanjali (Yoga Sutras).</p>
                    <p className="mt-1 text-xs"><strong>Core Tenet:</strong> Achieving liberation (Kaivalya) by stilling the modifications of the mind (Chitta Vritti Nirodha) through the eight limbs of Ashtanga Yoga. Accepts Samkhya metaphysics but introduces Ishvara (God).</p>
                  </Card>
                  <Card className="p-4 bg-muted/40">
                    <h3 className="text-lg font-medium">Mimamsa (Purva Mimamsa)</h3>
                    <p className="mt-1 text-xs"><strong>Focus:</strong> Exegesis of the Vedas, particularly the ritualistic portions (Karma Kanda).</p>
                    <p className="mt-1 text-xs"><strong>Founder/Text:</strong> Jaimini (Mimamsa Sutras).</p>
                    <p className="mt-1 text-xs"><strong>Core Tenet:</strong> Upholding the authority of the Vedas and the importance of performing Vedic rituals (Yajnas) correctly to attain heaven and fulfill Dharma. Focuses on the injunctive (vidhi) statements of the Vedas.</p>
                  </Card>
                  <Card className="p-4 bg-muted/40">
                    <h3 className="text-lg font-medium">Vedanta (Uttara Mimamsa)</h3>
                    <p className="mt-1 text-xs"><strong>Focus:</strong> Philosophical teachings of the Upanishads (Jnana Kanda of the Vedas).</p>
                    <p className="mt-1 text-xs"><strong>Key Texts:</strong> Upanishads, Brahma Sutras, Bhagavad Gita (Prasthanatrayi).</p>
                    <p className="mt-1 text-xs"><strong>Core Tenet:</strong> Understanding the nature of Brahman (Ultimate Reality), Atman (Self), and their relationship, leading to Moksha. Has various sub-schools like Advaita (non-dualism), Vishishtadvaita (qualified non-dualism), and Dvaita (dualism).</p>
                  </Card>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Nastika (Heterodox) Schools</h2>
                <p className="mt-2 text-sm text-muted-foreground">These schools do not accept the infallible authority of the Vedas.</p>
                <Separator className="my-4" />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="p-4 bg-muted/40">
                    <h3 className="text-lg font-medium">Charvaka (Lokayata)</h3>
                    <p className="mt-1 text-xs"><strong>Focus:</strong> Materialism, Skepticism, Empiricism.</p>
                    <p className="mt-1 text-xs"><strong>Core Tenet:</strong> Rejects supernaturalism, afterlife, karma, and scriptural authority. Perception is the only valid means of knowledge. Goal of life is pleasure.</p>
                  </Card>
                  <Card className="p-4 bg-muted/40">
                    <h3 className="text-lg font-medium">Buddhism</h3>
                    <p className="mt-1 text-xs"><strong>Founder:</strong> Siddhartha Gautama (the Buddha).</p>
                    <p className="mt-1 text-xs"><strong>Core Tenets:</strong> Four Noble Truths, Eightfold Path, concepts of Anatta (no-self), Anicca (impermanence), Dukkha (suffering), and Nirvana (liberation).</p>
                  </Card>
                  <Card className="p-4 bg-muted/40">
                    <h3 className="text-lg font-medium">Jainism</h3>
                    <p className="mt-1 text-xs"><strong>Founder:</strong> Mahavira (24th Tirthankara).</p>
                    <p className="mt-1 text-xs"><strong>Core Tenets:</strong> Ahimsa (non-violence), Anekantavada (many-sidedness of reality), Aparigraha (non-attachment), and liberation of the soul (Jiva) from karmic matter.</p>
                  </Card>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">Ajivika, another Nastika school founded by Makkhali Gosala, emphasized Niyati (fate or determinism), but its texts are largely lost.</p>
              </Card>

              <Card className="p-6">
                 <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Core Philosophical Concepts</h2>
                 <Separator className="my-4" />
                 <ul className="list-disc pl-4 text-sm space-y-1">
                  <li><strong>Brahman:</strong> The ultimate, impersonal, and all-pervading Cosmic Spirit or Absolute Reality.</li>
                  <li><strong>Atman:</strong> The individual soul, true Self, which in many schools (especially Vedanta) is identical to Brahman.</li>
                  <li><strong>Karma:</strong> The universal law of cause and effect; actions and their consequences influencing future rebirths.</li>
                  <li><strong>Samsara:</strong> The continuous cycle of birth, death, and rebirth.</li>
                  <li><strong>Moksha (or Mukti, Nirvana):</strong> Liberation from Samsara, the ultimate spiritual goal.</li>
                  <li><strong>Dharma:</strong> Cosmic law, righteousness, duty, ethics, and the principles that uphold order in the universe and society.</li>
                  <li><strong>Pramanas:</strong> Means of valid knowledge (e.g., perception, inference, testimony), crucial in Nyaya.</li>
            </ul>
              </Card>

              <div className="grid gap-4 md:grid-cols-3">
                <Link href="/blog/hindu-sacred-texts" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Hindu Sacred Texts</h3>
                    <p className="text-sm text-muted-foreground">Foundations of these philosophies.</p>
                  </Card>
                </Link>
                <Link href="/blog/yoga-paths-and-practices" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Yoga: Paths & Practices</h3>
                    <p className="text-sm text-muted-foreground">Practical application of Yoga school.</p>
                  </Card>
                </Link>
                <Link href="/blog/concepts-of-dharma-and-karma" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Dharma & Karma</h3>
                    <p className="text-sm text-muted-foreground">Key concepts in Hindu thought.</p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Explore the non-dualistic teachings of{" "}
                  <Link href="/hinduism/philosophy/advaita-vedanta" className="hover:underline">
                    Advaita Vedanta
                  </Link>
                  , the practical wisdom of{" "}
                  <Link href="/hinduism/philosophy/yoga-sutras" className="hover:underline">
                    Patanjali's Yoga Sutras
                </Link>
                  , or compare with{" "}
                  <Link href="/buddhism/philosophy/core-concepts" className="hover:underline">
                    Buddhist Philosophical Concepts
                </Link>
                  .
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/hinduism/philosophy/mimamsa-explained">Mimamsa School Details</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/hinduism/philosophy/samkhya-principles">Samkhya Metaphysics</Link>
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