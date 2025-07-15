import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "The Quran: Divine Revelation, Structure, Themes & Interpretation | Religious Studies Blog",
  description: "Explore the Quran, Islam's holy book: its divine origin, unique structure (Surahs and Ayahs), major themes (Tawhid, prophethood, ethics), and methods of interpretation (Tafsir).",
  openGraph: {
    title: "The Quran: Divine Revelation, Structure, Themes & Interpretation | Religious Studies Blog",
    description: "A comprehensive guide to the Quran, covering its revelation, linguistic miracle, organizational structure, core theological and ethical themes, and approaches to its interpretation.",
    type: "article",
    images: [
      {
        url: "/images/quran-structure-themes.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "The Quran: Structure, Themes, and Interpretation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Quran: Divine Revelation, Structure, Themes & Interpretation",
    description: "Explore the Quran, Islam's holy book: its divine origin, unique structure (Surahs and Ayahs), major themes (Tawhid, prophethood, ethics), and methods of interpretation (Tafsir).",
    images: ["/images/quran-structure-themes.jpg"], // Placeholder - ensure image exists
  },
}

export default function QuranStructureThemesAndInterpretationPage() {
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
          <span aria-current="page">The Quran</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            The Quran: Structure, Themes, and Interpretation
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Islamic Scripture</Badge>
            <Badge variant="secondary">Revelation</Badge>
            <Badge variant="secondary">Tafsir (Exegesis)</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            The Quran (القرآن), meaning "The Recitation," is the central religious text of Islam,
            believed by Muslims to be a revelation from God (Allah) verbatim. It is considered the
            literal word of God, revealed to the Prophet Muhammad ﷺ over a period of approximately 23 years.
            Its unique structure, profound themes, and methodologies of interpretation form the bedrock of Islamic faith, law, and civilization.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Divine Origin and Revelation
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Nature of Revelation (Wahy)</h3>
                    <ul className="mt-2">
                      <li>Revealed by Angel Jibril (Gabriel)</li>
                      <li>Gradual revelation over 23 years</li>
                      <li>Contextual (Asbab al-Nuzul - Occasions of Revelation)</li>
                      <li>Preserved Tablet (Lauh al-Mahfuz)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Linguistic Miracle (I'jaz)</h3>
                    <ul className="mt-2">
                      <li>Inimitable Arabic prose and eloquence</li>
                      <li>Unique literary style (Saj')</li>
                      <li>Challenge to produce a similar chapter</li>
                      <li>Impact on Arabic language and literature</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Structure of the Quran
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <h3 className="text-lg font-medium">Surahs and Ayahs</h3>
                    <ul className="mt-2">
                      <li>114 Chapters (Surahs)</li>
                      <li>Over 6,236 Verses (Ayahs)</li>
                      <li>Surah Al-Fatiha (The Opening) - cornerstone</li>
                      <li>Varying lengths of Surahs</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Organizational Principle</h3>
                    <ul className="mt-2">
                      <li>Generally arranged by decreasing length</li>
                      <li>Not strictly chronological</li>
                      <li>Divine arrangement (Tawqifi)</li>
                      <li>Internal coherence within Surahs</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Meccan & Medinan Surahs</h3>
                    <ul className="mt-2">
                      <li>Meccan (approx. 86 Surahs): Focus on Tawhid, hereafter, morality</li>
                      <li>Medinan (approx. 28 Surahs): Focus on law, community, social justice</li>
                      <li>Distinct stylistic and thematic features</li>
                      <li>Reflect stages of prophetic mission</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Major Themes in the Quran
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <h3 className="text-lg font-medium">Theology & Creed</h3>
                    <ul className="mt-2">
                      <li>Tawhid (Absolute Oneness of God)</li>
                      <li>Prophethood (Nubuwwah) & Messengers (Rusul)</li>
                      <li>Angels (Mala'ikah) & Divine Books (Kutub)</li>
                      <li>Day of Judgment (Yawm al-Din) & Afterlife (Akhirah)</li>
                      <li>Divine Decree (Qadar)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Moral & Ethical Guidance</h3>
                    <ul className="mt-2">
                      <li>Justice (Adl) and Equity (Qist)</li>
                      <li>Compassion (Rahmah) and Mercy</li>
                      <li>Honesty, Truthfulness, and Integrity</li>
                      <li>Patience (Sabr) and Gratitude (Shukr)</li>
                      <li>Prohibition of injustice, oppression, and corruption</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Legal & Social Framework</h3>
                    <ul className="mt-2">
                      <li>Family law (marriage, divorce, inheritance)</li>
                      <li>Economic principles (Zakat, Riba prohibition)</li>
                      <li>Social welfare and community obligations</li>
                      <li>Criminal justice and retribution (Qisas)</li>
                      <li>Rules of warfare and peace</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Stories of Prophets & Nations</h3>
                    <ul className="mt-2">
                      <li>Adam, Noah, Abraham, Moses, Jesus, etc.</li>
                      <li>Lessons from past civilizations</li>
                      <li>Divine justice and mercy in history</li>
                      <li>Guidance through exemplary lives</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">The Unseen (Al-Ghayb)</h3>
                    <ul className="mt-2">
                      <li>Paradise (Jannah) and Hellfire (Jahannam)</li>
                      <li>Angels and Jinn</li>
                      <li>The Soul (Ruh)</li>
                      <li>Divine Attributes and Actions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Humanity & Purpose</h3>
                    <ul className="mt-2">
                      <li>Creation of humanity (Khalifa - steward)</li>
                      <li>Purpose of life: Worship and servitude (Ibadah)</li>
                      <li>Free will and accountability</li>
                      <li>Journey of the soul</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Methods of Interpretation (Tafsir & Ta'wil)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Traditional Approaches (Tafsir)</h3>
                    <ul className="mt-2">
                      <li>Tafsir bil-Ma'thur (by reported tradition: Quran by Quran, Quran by Sunnah, sayings of Companions)</li>
                      <li>Tafsir bil-Ra'y (by sound reasoning, if consistent with sources)</li>
                      <li>Linguistic analysis (Nahw, Sarf, Balagha)</li>
                      <li>Knowledge of Asbab al-Nuzul</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Principles & Modern Approaches</h3>
                    <ul className="mt-2">
                      <li>Understanding Arabic language nuances</li>
                      <li>Considering historical and cultural context</li>
                      <li>Thematic interpretation (Tafsir Mawdu'i)</li>
                      <li>Scientific and social exegesis</li>
                      <li>Ta'wil (Figurative or allegorical interpretation for specific verses)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Preservation and Transmission
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Historical Process</h3>
                    <ul className="mt-2">
                      <li>Memorization (Hifz) by Companions</li>
                      <li>Written documentation during Prophet's ﷺ lifetime</li>
                      <li>Compilation under Caliph Abu Bakr</li>
                      <li>Standardization (Mushaf Uthmani) under Caliph Uthman</li>
                      <li>Development of diacritics (Tashkil) and recitation sciences (Tajwid)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Enduring Legacy</h3>
                    <ul className="mt-2">
                      <li>Continuous oral transmission (Tawatur)</li>
                      <li>Unchanged text for over 14 centuries</li>
                      <li>Millions of Huffaz (memorizers) globally</li>
                      <li>Global printing and digital dissemination</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/hadith-literature-and-its-significance" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Hadith & Sunnah</h3>
                    <p className="text-sm text-muted-foreground">
                      The Prophet's ﷺ teachings, complementing the Quran.
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/islamic-law-sharia" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Law (Sharia)</h3>
                    <p className="text-sm text-muted-foreground">
                      The Quran as the primary source of Sharia.
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Delve deeper into Quranic studies through our dedicated section on{" "}
                  <Link href="/religion/islam/quran" className="hover:underline">
                    The Holy Quran
                  </Link>
                  . Explore methods of interpretation in our guide to{" "}
                  <Link href="/religion/islam/tafsir" className="hover:underline">
                    Quranic Exegesis (Tafsir)
                  </Link>
                  .
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/religion/islam/quran">Explore The Quran</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/religion/islam/tafsir">Study Tafsir</Link>
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