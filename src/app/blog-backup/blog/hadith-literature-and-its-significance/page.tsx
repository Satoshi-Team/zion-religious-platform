import React from 'react'
import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Hadith Literature: Significance, Collection & Sciences | Religious Studies Blog",
  description: "Explore Hadith literature, the second source of Islamic guidance. Understand its categories (Qawli, Fi\'li, Taqriri), collection (Bukhari, Muslim), and the science of Hadith (Ilm al-Hadith).",
  openGraph: {
    title: "Hadith Literature: Significance, Collection & Sciences | Religious Studies Blog",
    description: "A comprehensive guide to Hadith literature, detailing its definition, types, major collections, the meticulous science of its authentication, and its role in Islamic law and life.",
    type: "article",
    images: [
      {
        url: "/images/hadith-literature.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "Hadith Literature and Its Significance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hadith Literature: Significance, Collection & Sciences",
    description: "Explore Hadith literature, the second source of Islamic guidance. Understand its categories, collection, and the science of Hadith (Ilm al-Hadith).",
    images: ["/images/hadith-literature.jpg"], // Placeholder - ensure image exists
  },
}

export default function HadithLiteratureAndItsSignificancePage() {
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
          <span aria-current="page">Hadith Literature</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Hadith Literature and Its Significance
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Sunnah</Badge>
            <Badge variant="secondary">Islamic Jurisprudence (Fiqh)</Badge>
            <Badge variant="secondary">Prophetic Traditions</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            Hadith literature (أحاديث) comprises the recorded narrations of the sayings, actions, and tacit approvals
            of the Prophet Muhammad ﷺ. As the second primary source of Islamic teachings after the Quran,
            Hadith provides essential context, explanation, and practical examples for understanding and implementing
            Islamic principles in all aspects of life.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Definition and Components of Hadith
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Core Elements</h3>
                    <ul className="mt-2">
                      <li><strong>Isnad (Chain of Narrators):</strong> The sequence of individuals who transmitted the narration.</li>
                      <li><strong>Matn (Text):</strong> The actual content or text of the narration.</li>
                      <li><strong>Takhrij (Grading):</strong> Scholarly assessment of authenticity.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Types of Hadith (Based on Origin)</h3>
                    <ul className="mt-2">
                      <li><strong>Hadith Qudsi (Sacred Hadith):</strong> Divine saying conveyed by the Prophet ﷺ in his own words.</li>
                      <li><strong>Hadith Nabawi (Prophetic Hadith):</strong> Direct sayings, actions, or approvals of the Prophet ﷺ.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Categories of Hadith (Based on Content)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <h3 className="text-lg font-medium">Qawli (Verbal)</h3>
                    <p className="text-sm text-muted-foreground">Direct sayings of the Prophet ﷺ.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Fi'li (Actions)</h3>
                    <p className="text-sm text-muted-foreground">Narrations of the Prophet's ﷺ deeds and practices.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Taqriri (Tacit Approval)</h3>
                    <p className="text-sm text-muted-foreground">Actions performed by Companions that the Prophet ﷺ observed and did not object to.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Sifati (Attributes)</h3>
                    <p className="text-sm text-muted-foreground">Descriptions of the Prophet's ﷺ physical appearance and character.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Collection and Preservation
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Historical Process</h3>
                    <ul className="mt-2">
                      <li>Early memorization and limited writing by Companions (Sahaba)</li>
                      <li>Systematic collection initiated by later generations (Tabi'in & Tabi' al-Tabi'in)</li>
                      <li>Compilation of major Hadith collections primarily in the 2nd-3rd Islamic centuries (8th-9th CE)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Major Sunni Collections (Al-Kutub al-Sittah)</h3>
                    <ul className="mt-2">
                      <li>Sahih al-Bukhari (Imam Bukhari)</li>
                      <li>Sahih Muslim (Imam Muslim)</li>
                      <li>Sunan Abu Dawud (Imam Abu Dawud)</li>
                      <li>Jami' at-Tirmidhi (Imam Tirmidhi)</li>
                      <li>Sunan an-Nasa'i (Imam an-Nasa'i)</li>
                      <li>Sunan Ibn Majah (Imam Ibn Majah)</li>
                      <li>(Also Muwatta Imam Malik - highly regarded)</li>
                    </ul>
                  </div>
                  {/* Consider adding major Shia collections if appropriate for curriculum scope */}
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  The Science of Hadith (Ilm al-Hadith / Usul al-Hadith)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Isnad Criticism (Naqd al-Isnad)</h3>
                    <ul className="mt-2">
                      <li><strong>Ilm al-Rijal (Knowledge of Men):</strong> Biography and reliability assessment of narrators.</li>
                      <li>Verification of narrator integrity (Adalah) and memory (Dabt).</li>
                      <li>Ensuring continuity of the chain (Ittisal).</li>
                      <li>Identifying hidden defects (Illal).</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Matn Criticism (Naqd al-Matn)</h3>
                    <ul className="mt-2">
                      <li>Compatibility with the Quran.</li>
                      <li>Consistency with other established Hadith.</li>
                      <li>Conformity with sound reason and historical facts.</li>
                      <li>Absence of linguistic errors or unusual phrasing.</li>
                    </ul>
                  </div>
                </div>
                <h3 className="text-lg font-medium mt-4">Classification by Authenticity</h3>
                <ul className="mt-2 grid gap-2 md:grid-cols-2 lg:grid-cols-4">
                  <li><strong>Sahih (Authentic):</strong> Meets highest standards of Isnad and Matn.</li>
                  <li><strong>Hasan (Good):</strong> Reliable but chain of narration is slightly less strong than Sahih.</li>
                  <li><strong>Da'if (Weak):</strong> Defects in Isnad or Matn. Generally not used for legal rulings but may be for virtues.</li>
                  <li><strong>Mawdu' (Fabricated):</strong> Proven to be falsely attributed to the Prophet ﷺ.</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Significance and Role in Islam
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Legal and Doctrinal Authority</h3>
                    <ul className="mt-2">
                      <li>Elucidates and specifies Quranic injunctions.</li>
                      <li>Provides details for acts of worship (Salah, Zakat, Hajj).</li>
                      <li>Establishes legal rulings not explicitly in the Quran.</li>
                      <li>Shapes Islamic theology (Aqidah) and ethics (Akhlaq).</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Guidance for Daily Life</h3>
                    <ul className="mt-2">
                      <li>Prophetic example (Sunnah) as a model for conduct.</li>
                      <li>Guidance on personal manners and social interactions.</li>
                      <li>Ethical framework for family, business, and community.</li>
                      <li>Source of spiritual inspiration and connection to the Prophet ﷺ.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/the-quran-structure-themes-and-interpretation" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">The Quran</h3>
                    <p className="text-sm text-muted-foreground">
                      The primary source, with Hadith providing explanation.
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/islamic-law-sharia" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Law (Sharia)</h3>
                    <p className="text-sm text-muted-foreground">
                      Hadith as a key source for deriving legal rulings.
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Delve deeper into the study of Prophetic traditions through our dedicated section on{" "}
                  <Link href="/religion/islam/hadith" className="hover:underline">
                    Hadith Sciences (Ilm al-Hadith)
                  </Link>
                  . Understand the methodology of scholars in our guide to{" "}
                  <Link href="/religion/islam/hadith-criticism" className="hover:underline">
                    Hadith Authentication & Criticism
                  </Link>
                  .
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/religion/islam/hadith">Explore Hadith Sciences</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/religion/islam/hadith-criticism">Study Authentication</Link>
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