import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Sunni and Shia Islam: Understanding the Branches, Differences & Commonalities | Religious Studies Blog",
  description: "Explore Sunni and Shia Islam: their historical divergence (succession to Prophet Muhammad ﷺ), core theological differences (Imamate vs. Caliphate), shared foundations, and distinct practices.",
  openGraph: {
    title: "Sunni and Shia Islam: Understanding the Branches, Differences & Commonalities | Religious Studies Blog",
    description: "A comprehensive overview of Sunni and Shia Islam, covering their historical origins, key theological distinctions (e.g., Imamate, Caliphate, Hadith interpretation), shared beliefs, and unique religious practices.",
    type: "article",
    images: [
      {
        url: "/images/sunni-shia-islam.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "Sunni and Shia Islam: Differences and Commonalities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunni and Shia Islam: Understanding the Branches, Differences & Commonalities",
    description: "Explore Sunni and Shia Islam: their historical divergence, theological differences, shared foundations, and distinct practices.",
    images: ["/images/sunni-shia-islam.jpg"], // Placeholder - ensure image exists
  },
}

export default function SunniAndShiaIslamDifferencesAndCommonalitiesPage() {
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
          <span aria-current="page">Sunni & Shia Islam</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Sunni and Shia Islam: Differences and Commonalities
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Islamic History</Badge>
            <Badge variant="secondary">Theological Diversity</Badge>
            <Badge variant="secondary">Islamic Sects</Badge>
            <Badge variant="secondary">Comparative Religion</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            The distinction between Sunni and Shia Islam represents the most significant historical and theological
            divergence within the global Muslim Ummah (community). While both branches share core Islamic beliefs
            and practices, their differences, primarily stemming from the succession to Prophet Muhammad ﷺ,
            have led to distinct theological frameworks, legal interpretations, and devotional expressions.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Historical Origins of the Divergence
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">The Succession Crisis (632 CE)</h3>
                    <ul className="mt-2">
                      <li>Death of Prophet Muhammad ﷺ without an explicitly named successor.</li>
                      <li>Sunni view: Community chose Abu Bakr as the first Caliph (Khalifa - successor) based on consensus (Shura/Ijma).</li>
                      <li>Shia view: Prophet Muhammad ﷺ designated Ali ibn Abi Talib (his cousin and son-in-law) as his successor (Imam) at Ghadir Khumm.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Key Historical Events</h3>
                    <ul className="mt-2">
                      <li>The Saqifah meeting and election of Abu Bakr.</li>
                      <li>The Caliphates of Umar, Uthman, and Ali.</li>
                      <li>The Battle of the Camel (656 CE) and Battle of Siffin (657 CE).</li>
                      <li>The martyrdom of Husayn ibn Ali at Karbala (680 CE) - a pivotal event for Shia identity.</li>
                      <li>Emergence of distinct political and theological identities over centuries.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Core Shared Beliefs and Practices (Common Foundations)
                </h2>
                <Separator className="my-4" />
                <ul className="mt-2 grid gap-2 md:grid-cols-2">
                  <li><strong>Tawhid:</strong> Absolute Oneness of Allah.</li>
                  <li><strong>Prophethood:</strong> Belief in all prophets, with Muhammad ﷺ as the final prophet.</li>
                  <li><strong>The Quran:</strong> The unaltered and divine word of Allah.</li>
                  <li><strong>Belief in Angels, Divine Books, Day of Judgment, and Divine Decree (Qadar).</strong></li>
                  <li><strong>The Five Pillars of Islam:</strong> Shahada (declaration of faith), Salat (prayer), Zakat (charity), Sawm (fasting Ramadan), Hajj (pilgrimage to Mecca).</li>
                  <li>Reverence for Prophet Muhammad ﷺ and his family (Ahl al-Bayt), though with varying emphasis.</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Key Theological and Doctrinal Differences
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Sunni Perspectives</h3>
                    <ul className="mt-2 space-y-2">
                      <li><strong>Leadership (Caliphate):</strong> Caliphs are political and military leaders chosen by the community or their predecessors. They are not considered infallible or divinely appointed in the same way as prophets.</li>
                      <li><strong>Religious Authority:</strong> Derived from Quran, Sunnah, Ijma (consensus of scholars), and Qiyas (analogical reasoning). Scholars (Ulama) interpret religious texts.</li>
                      <li><strong>Companions (Sahaba):</strong> Generally hold all Companions in high esteem and consider their collective understanding as a source of guidance.</li>
                      <li><strong>Hadith:</strong> Rely on a vast corpus of Hadith transmitted through various chains, with major collections like Sahih al-Bukhari and Sahih Muslim.</li>
                      <li><strong>Mahdi:</strong> Belief in a future Mahdi (guided one) who will appear before the end of times, but views on his identity are less specific than in Shia Islam.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Shia Perspectives (primarily Twelver Shia - Ithna'ashariyyah)</h3>
                    <ul className="mt-2 space-y-2">
                      <li><strong>Leadership (Imamate):</strong> Imams are divinely appointed, infallible spiritual and political successors to the Prophet ﷺ from his lineage (Ahl al-Bayt), starting with Ali. Twelvers believe in twelve Imams.</li>
                      <li><strong>Religious Authority:</strong> Derived from Quran, Sunnah (of Prophet & Imams), Aql (intellect), and Ijma. Living Mujtahids (jurists) provide guidance through Ijtihad.</li>
                      <li><strong>Companions (Sahaba):</strong> Views on Companions vary; some are highly revered, while others are criticized based on their actions concerning Ali and Ahl al-Bayt.</li>
                      <li><strong>Hadith:</strong> Rely on Hadith transmitted through the Ahl al-Bayt and their trusted followers, with major collections like Al-Kafi.</li>
                      <li><strong>Mahdi:</strong> Believe the Twelfth Imam, Muhammad al-Mahdi, is in occultation (Ghaybah) and will return as the Mahdi to establish justice.</li>
                      <li><strong>Ismah (Infallibility):</strong> Belief in the infallibility of Prophets and Imams.</li>
                      <li><strong>Taqiyya (Dissimulation):</strong> Permissibility of concealing one's faith in times of persecution.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Differences in Religious Practices and Rituals
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Prayer (Salat)</h3>
                    <ul className="mt-2">
                      <li>Sunni: Typically pray five times separately. Hands usually folded during prayer.</li>
                      <li>Shia: Often combine some prayers (e.g., Dhuhr with Asr, Maghrib with Isha). Hands usually kept by the sides. May prostrate on a small clay tablet (Turbah).</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Call to Prayer (Adhan)</h3>
                    <ul className="mt-2">
                      <li>Minor variations in wording. Shia Adhan includes the phrase "Ashhadu anna Aliyyan waliyyullah" (I bear witness that Ali is the friend of Allah) by some, though not universally obligatory.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Temporary Marriage (Mut'ah)</h3>
                    <ul className="mt-2">
                      <li>Permitted in Shia (Ja'fari) jurisprudence, but generally forbidden in Sunni jurisprudence.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Commemorations</h3>
                    <ul className="mt-2">
                      <li><strong>Ashura:</strong> Commemorated by both, but with profound significance for Shia Muslims as the martyrdom of Husayn ibn Ali, involving mourning rituals (Majalis, processions).</li>
                      <li>Visitation of shrines of Imams and revered figures is more prominent in Shia practice.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Contemporary Demographics and Relations
                </h2>
                <Separator className="my-4" />
                <ul className="mt-2">
                  <li>Sunni Muslims constitute the majority (approx. 85-90%) of the world's Muslim population.</li>
                  <li>Shia Muslims are a significant minority, with major populations in Iran, Iraq, Bahrain, Azerbaijan, Lebanon, and Yemen.</li>
                  <li>Historically, relations have varied from peaceful coexistence to periods of tension and conflict, often influenced by political factors.</li>
                  <li>Modern efforts towards inter-sectarian understanding and dialogue exist, emphasizing shared Islamic values.</li>
                </ul>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/islamic-theology-aqidah" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Theology (Aqidah)</h3>
                    <p className="text-sm text-muted-foreground">
                      Explore core Islamic beliefs shared and distinct.
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/islamic-law-sharia-sources-and-applications" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Sharia: Sources & Applications</h3>
                    <p className="text-sm text-muted-foreground">
                      Understand how legal interpretations differ.
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Explore the historical context in our section on{" "}
                  <Link href="/religion/islam/history/early-caliphate" className="hover:underline">
                    The Early Islamic Caliphate
                  </Link>
                  . Delve into the concept of leadership in{" "}
                  <Link href="/religion/islam/imamate-caliphate" className="hover:underline">
                    Imamate and Caliphate in Islam
                  </Link>
                  .
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/religion/islam/history/early-caliphate">Early Caliphate History</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/religion/islam/imamate-caliphate">Leadership Concepts</Link>
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