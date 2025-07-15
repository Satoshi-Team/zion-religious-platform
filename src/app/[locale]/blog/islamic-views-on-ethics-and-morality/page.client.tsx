import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Islamic Views on Ethics & Morality (Akhlaq): Quran, Sunnah & Character | Religious Studies Blog",
  description: "Explore Islamic ethics (Akhlaq): its divine sources (Quran, Sunnah), core values (Adl, Ihsan, Taqwa), personal virtues (Sabr, Shukr), social responsibilities (family, community), and ethical decision-making (Maslaha, Darar).",
  openGraph: {
    title: "Islamic Views on Ethics & Morality (Akhlaq): Quran, Sunnah & Character | Religious Studies Blog",
    description: "A comprehensive guide to Akhlaq (Islamic ethics and morality), covering foundational principles, character development (Tazkiyah), social ethics, and the application of ethical reasoning in Islam.",
    type: "article",
    images: [
      {
        url: "/images/islamic-ethics-morality.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "Islamic Views on Ethics and Morality (Akhlaq)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamic Views on Ethics & Morality (Akhlaq): Quran, Sunnah & Character",
    description: "Explore Islamic ethics (Akhlaq): its divine sources, core values, personal virtues, social responsibilities, and ethical decision-making.",
    images: ["/images/islamic-ethics-morality.jpg"], // Placeholder - ensure image exists
  },
}

export default function IslamicViewsOnEthicsAndMoralityPage() {
  return (
    <article className="prose prose-lg dark:prose-invert mx-auto">
      <div className="space-y-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <span aria-hidden="true">•</span>
          <Link href="/religion/islam" className="hover:underline">
            Islam
          </Link>
          <span aria-hidden="true">•</span>
          <span aria-current="page">Ethics & Morality (Akhlaq)</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Islamic Views on Ethics and Morality (Akhlaq)
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Akhlaq (Ethics/Morality)</Badge>
            <Badge variant="secondary">Taqwa (God-consciousness)</Badge>
            <Badge variant="secondary">Adl (Justice)</Badge>
            <Badge variant="secondary">Ihsan (Excellence)</Badge>
            <Badge variant="secondary">Tazkiyah (Purification)</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            Akhlaq, the Islamic system of ethics and morality, is integral to the faith, guiding a Muslim's conduct
            and character. Rooted in the Quran and Sunnah (Prophetic traditions), Akhlaq emphasizes the cultivation
            of virtues, fulfillment of responsibilities, and striving for moral excellence (Ihsan) in all aspects of life.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Foundational Principles and Sources of Akhlaq
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Divine Sources</h3>
                    <ul className="mt-2">
                      <li><strong>Quran:</strong> The primary source, providing explicit commands, parables, and moral guidance.</li>
                      <li><strong>Sunnah:</strong> The life, teachings, and approvals of Prophet Muhammad ﷺ, serving as the perfect moral exemplar.</li>
                      <li><strong>Ijma (Consensus) & Qiyas (Analogy):</strong> Secondary sources used by scholars to derive ethical rulings.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Core Values</h3>
                    <ul className="mt-2">
                      <li><strong>Taqwa (God-consciousness):</strong> The foundation of ethical behavior, awareness of God's presence and accountability.</li>
                      <li><strong>Adl (Justice):</strong> Fairness, impartiality in dealings, and upholding rights.</li>
                      <li><strong>Ihsan (Excellence/Perfection):</strong> Striving for beauty and excellence in worship and conduct.</li>
                      <li><strong>Rahma (Mercy & Compassion):</strong> Emulating God's mercy towards all creation.</li>
                      <li><strong>Sidq (Truthfulness) & Amana (Trustworthiness):</strong> Cornerstones of personal integrity.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Personal Ethics: Character Development (Tazkiyah)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <h3 className="text-lg font-medium">Key Virtues to Cultivate</h3>
                    <ul className="mt-2">
                      <li><strong>Sabr (Patience & Perseverance):</strong> In adversity, obedience, and abstaining from prohibitions.</li>
                      <li><strong>Shukr (Gratitude):</strong> Recognizing and appreciating God's blessings.</li>
                      <li><strong>Tawadu (Humility):</strong> Avoiding arrogance and acknowledging one's dependence on God.</li>
                      <li><strong>Haya (Modesty/Shame):</strong> A sense of shame that prevents wrongdoing.</li>
                      <li><strong>Ikhlas (Sincerity):</strong> Pure intention for the sake of God in all actions.</li>
                      <li><strong>Affection (Wudd) & Forgiveness (Afw).</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Vices to Avoid</h3>
                    <ul className="mt-2">
                      <li><strong>Kibr (Arrogance) & Ujub (Self-conceit).</strong></li>
                      <li><strong>Hasad (Envy) & Ghill (Malice).</strong></li>
                      <li><strong>Ghadab (Uncontrolled Anger).</strong></li>
                      <li><strong>Ghibah (Backbiting) & Namimah (Slander).</strong></li>
                      <li><strong>Bukhl (Stinginess) & Israf (Extravagance).</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Process of Tazkiyah (Purification)</h3>
                    <ul className="mt-2">
                      <li>Self-awareness and introspection (Muhasabah).</li>
                      <li>Repentance (Tawbah) and seeking forgiveness.</li>
                      <li>Striving against a_nafs (lower self) (Mujahadah).</li>
                      <li>Constant remembrance of God (Dhikr).</li>
                      <li>Companionship of the righteous (Suhbah).</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Social Ethics: Rights and Responsibilities
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Family and Kinship</h3>
                    <ul className="mt-2">
                      <li>Rights of parents (Birr al-Walidayn) and children.</li>
                      <li>Marital ethics: love, mercy, and mutual responsibility.</li>
                      <li>Maintaining ties of kinship (Silat al-Rahim).</li>
                      <li>Care for orphans and the vulnerable.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Community and Society</h3>
                    <ul className="mt-2">
                      <li>Rights of neighbors.</li>
                      <li>Enjoining good (Amr bil Ma'ruf) and forbidding evil (Nahy anil Munkar).</li>
                      <li>Cooperation in righteousness and piety (Ta'awun 'ala al-Birr wa al-Taqwa).</li>
                      <li>Social welfare, charity (Sadaqah), and supporting the needy.</li>
                      <li>Environmental stewardship and animal welfare.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Ethical Decision-Making in Islam
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Principles from Usul al-Fiqh</h3>
                    <ul className="mt-2">
                      <li><strong>Maslaha (Public Interest/Welfare):</strong> Prioritizing actions that bring benefit.</li>
                      <li><strong>Darar (Harm):</strong> Avoiding or minimizing harm; "Harm shall not be inflicted nor reciprocated."</li>
                      <li><strong>Darura (Necessity):</strong> Permissibility of prohibited things in dire need.</li>
                      <li><strong>Urf (Custom):</strong> Consideration of prevailing good customs that do not contradict Sharia.</li>
                      <li>Understanding Maqasid al-Sharia (Objectives of Islamic Law).</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Contemporary Ethical Issues</h3>
                    <ul className="mt-2">
                      <li>Bioethics (e.g., genetic engineering, end-of-life care).</li>
                      <li>Business and financial ethics.</li>
                      <li>Media and digital ethics.</li>
                      <li>Environmental ethics and sustainability.</li>
                      <li>Applying Islamic ethics to global justice issues.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/islamic-law-sharia-sources-and-applications" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Law (Sharia)</h3>
                    <p className="text-sm text-muted-foreground">
                      The legal framework that often underpins ethical rulings.
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/islamic-spirituality" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Spirituality (Tasawwuf)</h3>
                    <p className="text-sm text-muted-foreground">
                      Often emphasizes the internal dimensions of ethical development.
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Explore the concept of{" "}
                  <Link href="/islam/concepts/ihsan" className="hover:underline">
                    Ihsan (Moral Excellence)
                  </Link>
                  , or the process of{" "}
                  <Link href="/islam/concepts/tazkiyah" className="hover:underline">
                    Tazkiyah (Self-Purification)
                  </Link>
                  . Delve into specific virtues like{" "}
                  <Link href="/islam/virtues/sabr" className="hover:underline">
                    Sabr (Patience)
                  </Link>
                  .
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/islam/ethics/character">Islamic Character</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/islam/ethics/social-ethics">Social Ethics in Islam</Link>
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