import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "The Four Purusharthas: Dharma, Artha, Kama, Moksha in Hinduism | Religious Studies Blog",
  description: "Explore the Four Purusharthas: Dharma (righteousness), Artha (prosperity), Kama (pleasure), and Moksha (liberation). These four aims of human life provide a framework for a balanced, ethical, and purposeful existence in Hinduism.",
  openGraph: {
    title: "The Four Purusharthas: Dharma, Artha, Kama, Moksha in Hinduism | Religious Studies Blog",
    description: "A guide to the Four Purusharthas – Dharma, Artha, Kama, and Moksha – the essential goals for a fulfilling and spiritually progressive life in the Hindu tradition.",
    type: "article",
    images: [
      {
        url: "/images/four-purusharthas.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "The Four Purusharthas: Dharma, Artha, Kama, Moksha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hinduism's Four Goals of Life: Dharma, Artha, Kama, Moksha",
    description: "Understand the Four Purusharthas – righteousness, prosperity, pleasure, and liberation – and how they guide a balanced and purposeful life in Hinduism.",
    images: ["/images/four-purusharthas.jpg"], // Placeholder - ensure image exists
  },
}

export default function TheFourPurusharthasPage() {
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
          <span aria-current="page">The Four Purusharthas</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            The Four Purusharthas: Goals of Human Life
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Dharma</Badge>
            <Badge variant="secondary">Artha</Badge>
            <Badge variant="secondary">Kama</Badge>
            <Badge variant="secondary">Moksha</Badge>
            <Badge variant="secondary">Righteousness</Badge>
            <Badge variant="secondary">Prosperity</Badge>
            <Badge variant="secondary">Pleasure</Badge>
            <Badge variant="secondary">Liberation</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            The Four Purusharthas represent Hinduism's comprehensive vision for human fulfillment, guiding individuals
            towards a balanced and purposeful existence. These four aims—Dharma (righteousness), Artha (prosperity),
            Kama (pleasure), and Moksha (liberation)—encompass the ethical, material, sensual, and spiritual dimensions of life.
          </p>

          <ScrollArea className="h-[700px] rounded-md border p-4">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="p-6 flex flex-col">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Dharma: Righteousness & Duty</h2>
                <Separator className="my-3" />
                <p className="text-sm text-muted-foreground mb-3 flex-grow">
                  The foundational principle, Dharma, signifies moral law, ethical conduct, and one's righteous duty.
                  It governs individual behavior and social order, ensuring harmony and sustainability.
                </p>
                <ul className="text-xs list-disc pl-4 space-y-1">
                  <li><strong>Moral & Ethical Conduct:</strong> Adherence to truth, non-violence, justice, and other universal virtues.</li>
                  <li><strong>Social Responsibility:</strong> Fulfilling duties towards family, society, and the world (Varnashrama Dharma, Svadharma).</li>
                  <li><strong>Spiritual Discipline:</strong> Practices that purify the mind and cultivate virtues.</li>
                  <li><strong>Foundation for Other Goals:</strong> Artha and Kama should be pursued within the boundaries of Dharma.</li>
                </ul>
              </Card>

              <Card className="p-6 flex flex-col">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Artha: Prosperity & Well-being</h2>
                <Separator className="my-3" />
                <p className="text-sm text-muted-foreground mb-3 flex-grow">
                  Artha refers to the pursuit of material wealth, economic prosperity, and the means necessary for a secure
                  and fulfilling life. It acknowledges the importance of resources for individual and societal well-being when acquired ethically.
                </p>
                <ul className="text-xs list-disc pl-4 space-y-1">
                  <li><strong>Material Success:</strong> Attainment of wealth, career development, and economic security through honest means.</li>
                  <li><strong>Resource Management:</strong> Responsible acquisition and utilization of resources.</li>
                  <li><strong>Social Contribution:</strong> Using wealth for the welfare of the community and supporting Dharma.</li>
                  <li><strong>Ethical Livelihood:</strong> Engaging in professions that are not harmful and contribute positively.</li>
                </ul>
              </Card>

              <Card className="p-6 flex flex-col">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Kama: Pleasure & Fulfillment</h2>
                <Separator className="my-3" />
                <p className="text-sm text-muted-foreground mb-3 flex-grow">
                  Kama signifies the enjoyment of sensual pleasures, emotional fulfillment, and aesthetic experiences.
                  Hinduism recognizes Kama as a legitimate human goal, provided it is pursued within ethical limits and does not hinder Dharma or Moksha.
                </p>
                <ul className="text-xs list-disc pl-4 space-y-1">
                  <li><strong>Sensory & Emotional Enjoyment:</strong> Fulfillment of desires, love, artistic expression, and harmonious relationships.</li>
                  <li><strong>Balanced Living:</strong> Enjoyment with moderation and mindfulness, avoiding overindulgence.</li>
                  <li><strong>Cultural Appreciation:</strong> Engagement with arts, music, and the beauty of life.</li>
                  <li><strong>Not an End in Itself:</strong> Kama should be aligned with Dharma and ultimately support the path to Moksha.</li>
                </ul>
              </Card>

              <Card className="p-6 flex flex-col">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Moksha: Liberation & Spiritual Freedom</h2>
                <Separator className="my-3" />
                <p className="text-sm text-muted-foreground mb-3 flex-grow">
                  Moksha is the ultimate goal of human life—liberation from the cycle of birth and death (Samsara).
                  It signifies self-realization, transcendence of the ego, and union with the ultimate reality (Brahman).
                </p>
                <ul className="text-xs list-disc pl-4 space-y-1">
                  <li><strong>Spiritual Freedom:</strong> Attainment of inner peace, true knowledge, and freedom from suffering.</li>
                  <li><strong>Self-Realization:</strong> Understanding the true nature of the Self (Atman) and its identity with Brahman.</li>
                  <li><strong>Paths to Liberation:</strong> Achieved through various yogic paths like Karma Yoga (selfless action), Bhakti Yoga (devotion), and Jnana Yoga (knowledge).</li>
                  <li><strong>Transcends Other Goals:</strong> While Dharma, Artha, and Kama are important, Moksha is the highest Purushartha.</li>
                </ul>
              </Card>
            </div>

            <Card className="p-6 mt-8">
              <h3 className="text-lg font-semibold">The Integrated Framework</h3>
              <Separator className="my-2" />
              <p className="text-sm">
                The Purusharthas are not seen as mutually exclusive but as an integrated framework. Dharma provides the ethical foundation;
                Artha and Kama are pursued within this framework for a fulfilling worldly life; and Moksha is the ultimate spiritual aspiration
                that gives ultimate meaning to the other three. A balanced pursuit of all four is considered ideal for holistic human development.
              </p>
            </Card>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/blog/concepts-of-dharma-and-karma" className="block">
                <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                  <h3 className="text-lg font-semibold">Dharma & Karma</h3>
                  <p className="text-sm text-muted-foreground">Ethical foundations of Purusharthas.</p>
                </Card>
              </Link>
              <Link href="/blog/hindu-ethics" className="block">
                <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                  <h3 className="text-lg font-semibold">Hindu Ethics</h3>
                  <p className="text-sm text-muted-foreground">Moral principles guiding the goals.</p>
                </Card>
              </Link>
              <Link href="/blog/yoga-paths-and-practices" className="block">
                <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                  <h3 className="text-lg font-semibold">Paths to Moksha (Yoga)</h3>
                  <p className="text-sm text-muted-foreground">Practices for ultimate liberation.</p>
                </Card>
              </Link>
            </div>

            <Card className="mt-8 bg-muted p-4">
              <h3 className="text-lg font-semibold">Further Study</h3>
              <p className="text-sm text-muted-foreground">
                Explore how to{" "}
                <Link href="/hinduism/living/balancing-purusharthas" className="hover:underline">
                  Balance Artha and Kama with Dharma
                </Link>
                , understand the significance of{" "}
                <Link href="/hinduism/philosophy/moksha-as-ultimate-goal" className="hover:underline">
                  Moksha as the Ultimate Aim
                </Link>
                , or see how Purusharthas apply in different{" "}
                <Link href="/hinduism/society/purusharthas-in-ashramas" className="hover:underline">
                  Life Stages (Ashramas)
                </Link>
                .
              </p>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" asChild>
                  <Link href="/hinduism/texts/dharma-shastras-purusharthas">Purusharthas in Dharma Shastras</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/hinduism/philosophy/vedanta-moksha">Vedanta on Moksha</Link>
                </Button>
              </div>
            </Card>
          </ScrollArea>
        </div>
      </div>
    </article>
  )
} 