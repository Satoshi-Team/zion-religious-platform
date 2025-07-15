import React from 'react'
import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Islamic Law (Sharia): Sources, Methodology & Applications | Religious Studies Blog",
  description: "Explore Sharia (Islamic Law): its primary (Quran, Sunnah) and secondary (Ijma, Qiyas, Ijtihad) sources, legal methodology (Usul al-Fiqh), major schools (Madhahib), and applications.",
  openGraph: {
    title: "Islamic Law (Sharia): Sources, Methodology & Applications | Religious Studies Blog",
    description: "A comprehensive guide to Sharia, detailing its divine sources, principles of jurisprudence (Usul al-Fiqh), major schools of thought, and its application in worship, transactions, and contemporary issues.",
    type: "article",
    images: [
      {
        url: "/images/islamic-law-sources.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "Islamic Law (Sharia): Sources and Applications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamic Law (Sharia): Sources, Methodology & Applications",
    description: "Explore Sharia: its sources (Quran, Sunnah, Ijma, Qiyas), legal methodology, schools, and applications.",
    images: ["/images/islamic-law-sources.jpg"], // Placeholder - ensure image exists
  },
}

export default function IslamicLawShariaSourcesAndApplicationsPage() {
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
          <span aria-current="page">Sharia: Sources & Applications</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Islamic Law (Sharia): Sources and Applications
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Fiqh (Jurisprudence)</Badge>
            <Badge variant="secondary">Usul al-Fiqh</Badge>
            <Badge variant="secondary">Islamic Legal System</Badge>
            <Badge variant="secondary">Madhahib (Schools of Law)</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            Sharia (شريعة), often translated as Islamic Law, is the comprehensive divine framework guiding Muslims
            in all aspects of life. It encompasses moral, ethical, social, and legal dimensions derived from
            sacred sources and interpreted through established methodologies. Understanding its sources and applications
            is crucial to appreciating its role in Muslim society and individual practice.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Primary Sources of Sharia (Al-Adillah Al-Asliyyah)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">1. The Quran (القرآن)</h3>
                    <ul className="mt-2">
                      <li>The literal word of Allah, revealed to Prophet Muhammad ﷺ.</li>
                      <li>The foremost and definitive source.</li>
                      <li>Contains explicit legal injunctions (Nusus Qat'iyyah) and general principles.</li>
                      <li>Addresses core beliefs, worship, morality, and legal matters.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">2. The Sunnah (السنة)</h3>
                    <ul className="mt-2">
                      <li>The teachings, actions, and tacit approvals of Prophet Muhammad ﷺ.</li>
                      <li>Elaborates, clarifies, and specifies Quranic verses.</li>
                      <li>Provides practical application and an exemplary model.</li>
                      <li>Transmitted through Hadith literature.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Secondary Sources & Legal Methodology (Usul al-Fiqh)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <h3 className="text-lg font-medium">3. Ijma (الإجماع - Consensus)</h3>
                    <ul className="mt-2">
                      <li>Unanimous agreement of qualified Muslim scholars (Mujtahidun) on a specific legal ruling.</li>
                      <li>Consensus of the Companions (Sahaba) holds particular weight.</li>
                      <li>Ensures consistency and authority in legal matters.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">4. Qiyas (القياس - Analogical Reasoning)</h3>
                    <ul className="mt-2">
                      <li>Extending a ruling from an established case (Asl) to a new case (Far') based on a common effective cause (Illah).</li>
                      <li>Used when no direct text (Nass) exists for the new issue.</li>
                      <li>Requires rigorous methodology.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Other Methodological Tools (Derived Sources)</h3>
                    <ul className="mt-2">
                      <li><strong>Istihsan (Juristic Preference):</strong> Departing from a strict analogy for a stronger, more equitable ruling based on other Islamic principles.</li>
                      <li><strong>Maslaha Mursala (Public Interest):</strong> Rulings based on unstated public interests that align with Sharia objectives.</li>
                      <li><strong>Urf (Custom):</strong> Local customs and practices, if not contradicting Quran or Sunnah.</li>
                      <li><strong>Istishab (Presumption of Continuity):</strong> Assuming a previous ruling remains valid until proven otherwise.</li>
                      <li><strong>Sadd al-Dhara'i (Blocking the Means):</strong> Prohibiting lawful actions that may lead to unlawful outcomes.</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  The science of <strong>Usul al-Fiqh</strong> (Principles of Islamic Jurisprudence) governs the methodology for deriving rulings from these sources.
                </p>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Major Areas of Islamic Law (Fiqh)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Ibadat (Acts of Worship)</h3>
                    <ul className="mt-2">
                      <li>Salah (Prayer) and Taharah (Purification)</li>
                      <li>Zakat (Charity) and Sawm (Fasting)</li>
                      <li>Hajj (Pilgrimage) and Umrah</li>
                      <li>Dhikr (Remembrance of God) and Dua (Supplication)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Mu'amalat (Transactions & Interactions)</h3>
                    <ul className="mt-2">
                      <li>Financial transactions (Buyu', Riba, Mudarabah)</li>
                      <li>Family law (Nikah, Talaq, Mahr, Nasab)</li>
                      <li>Inheritance (Fara'id)</li>
                      <li>Contracts and obligations (Uqud)</li>
                      <li>Judicial procedures (Qada') and testimonies (Shahadat)</li>
                      <li>Criminal Law (Hudud, Qisas, Ta'zir)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Major Schools of Islamic Law (Madhahib)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Sunni Schools (Ahl al-Sunnah wa al-Jama'ah)</h3>
                    <ul className="mt-2">
                      <li><strong>Hanafi:</strong> Founded by Imam Abu Hanifa. Known for emphasis on Ra'y (reasoned opinion) and Istihsan.</li>
                      <li><strong>Maliki:</strong> Founded by Imam Malik ibn Anas. Emphasizes the practice of the people of Medina ('Amal Ahl al-Madina).</li>
                      <li><strong>Shafi'i:</strong> Founded by Imam Muhammad ibn Idris al-Shafi'i. Known for systematizing Usul al-Fiqh.</li>
                      <li><strong>Hanbali:</strong> Founded by Imam Ahmad ibn Hanbal. Known for strict adherence to Hadith.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Shia Schools</h3>
                    <ul className="mt-2">
                      <li><strong>Ja'fari (Twelver Shia):</strong> Attributed to Imam Ja'far al-Sadiq. Relies on Quran, Sunnah (of Prophet & Imams), Aql (Intellect), and Ijma.</li>
                      <li><strong>Zaydi:</strong> Attributed to Zayd ibn Ali. Shares some similarities with Sunni schools.</li>
                      <li><strong>Ismaili:</strong> Emphasizes Ta'wil (esoteric interpretation) and the authority of the Imam.</li>
                    </ul>
                    {/* Ibadi school could also be mentioned as distinct */}
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  These schools represent different interpretive methodologies but share core Islamic beliefs. Muslims may follow any recognized Madhhab.
                </p>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Contemporary Applications and Maqasid al-Sharia
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Maqasid al-Sharia (Objectives of Sharia)</h3>
                    <ul className="mt-2">
                      <li>Protection of Religion (Hifz al-Din)</li>
                      <li>Protection of Life (Hifz al-Nafs)</li>
                      <li>Protection of Intellect (Hifz al-Aql)</li>
                      <li>Protection of Lineage (Hifz al-Nasl)</li>
                      <li>Protection of Property (Hifz al-Mal)</li>
                      <li>(Some scholars add Protection of Dignity - Hifz al-Ird)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Modern Challenges & Ijtihad</h3>
                    <ul className="mt-2">
                      <li>Islamic finance and economics</li>
                      <li>Bioethics (genetic engineering, organ donation)</li>
                      <li>Environmental ethics and sustainability</li>
                      <li>Digital age issues (cybersecurity, AI ethics)</li>
                      <li>Human rights and social justice in modern contexts</li>
                      <li>The role of Ijtihad (independent legal reasoning) in addressing new issues.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/the-quran-structure-themes-and-interpretation" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">The Quran</h3>
                    <p className="text-sm text-muted-foreground">
                      The primary divine source of Sharia.
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/hadith-literature-and-its-significance" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Hadith & Sunnah</h3>
                    <p className="text-sm text-muted-foreground">
                      The Prophet's ﷺ teachings as a key source.
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Deepen your knowledge of Islamic legal theory in our section on{" "}
                  <Link href="/religion/islam/usul-al-fiqh" className="hover:underline">
                    Principles of Jurisprudence (Usul al-Fiqh)
                  </Link>
                  . Explore the various schools of thought in{" "}
                  <Link href="/religion/islam/madhahib" className="hover:underline">
                    Islamic Schools of Law (Madhahib)
                  </Link>
                  .
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/religion/islam/usul-al-fiqh">Study Usul al-Fiqh</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/religion/islam/madhahib">Explore Madhahib</Link>
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