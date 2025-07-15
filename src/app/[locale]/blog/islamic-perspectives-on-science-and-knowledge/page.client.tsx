import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Islamic Perspectives on Science & Knowledge: Ilm, Reason & Revelation | Religious Studies Blog",
  description: "Explore Islam's emphasis on seeking knowledge (Ilm). Understand Quranic encouragement for reflection (Tafakkur), reason (Aql), historical scientific contributions during the Golden Age, and contemporary engagement with science.",
  openGraph: {
    title: "Islamic Perspectives on Science & Knowledge: Ilm, Reason & Revelation | Religious Studies Blog",
    description: "A comprehensive guide to the Islamic view on science and knowledge, covering the Quranic basis for seeking Ilm, the role of Aql (reason) and Tafakkur (reflection), the Golden Age of Islamic science, and modern perspectives.",
    type: "article",
    images: [
      {
        url: "/images/islamic-science-knowledge.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "Islamic Perspectives on Science and Knowledge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamic Perspectives on Science & Knowledge: Ilm, Reason & Revelation",
    description: "Explore Islam's emphasis on seeking knowledge (Ilm), the roles of reason (Aql) and reflection (Tafakkur), and historical scientific contributions.",
    images: ["/images/islamic-science-knowledge.jpg"], // Placeholder - ensure image exists
  },
}

export default function IslamicPerspectivesOnScienceAndKnowledgePage() {
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
          <span aria-current="page">Science & Knowledge</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Islamic Perspectives on Science and Knowledge (Ilm)
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Ilm (Knowledge)</Badge>
            <Badge variant="secondary">Aql (Reason)</Badge>
            <Badge variant="secondary">Tafakkur (Reflection)</Badge>
            <Badge variant="secondary">Golden Age of Islam</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            Islam places a profound emphasis on the pursuit of knowledge (Ilm) as both a religious duty and a means
            to understand God's creation. The Quran and Sunnah encourage reflection (Tafakkur), critical thinking (Aql),
            and empirical observation, fostering a rich intellectual tradition that led to significant scientific
            advancements throughout history.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Quranic and Prophetic Foundations for Seeking Knowledge
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Quranic Encouragement</h3>
                    <ul className="mt-2">
                      <li>First revelation: "Read! (Iqra')" (Al-Alaq 96:1).</li>
                      <li>Numerous verses calling for Tafakkur (reflection) on creation (e.g., Aal 'Imran 3:190-191).</li>
                      <li>Emphasis on using Aql (reason, intellect) to understand divine signs.</li>
                      <li>High status for those who possess knowledge (Ulama) (e.g., Al-Mujadila 58:11).</li>
                      <li>Distinction between beneficial knowledge (Ilm Nafi') and harmful knowledge.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Prophetic Traditions (Hadith)</h3>
                    <ul className="mt-2">
                      <li>"Seeking knowledge is an obligation upon every Muslim." (Sunan Ibn Majah)</li>
                      <li>Encouragement to seek knowledge "even if it be in China."</li>
                      <li>Prayers for beneficial knowledge taught by the Prophet ﷺ.</li>
                      <li>Valuing scholars and the paths taken to acquire knowledge.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Key Concepts in Islamic Epistemology
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <h3 className="text-lg font-medium">Sources of Knowledge</h3>
                    <ul className="mt-2">
                      <li>Revelation (Wahy - Quran and Sunnah)</li>
                      <li>Reason (Aql)</li>
                      <li>Senses and Empirical Observation (Tajriba)</li>
                      <li>Intuition/Spiritual Inspiration (Ilham/Kashf - within certain frameworks)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Types of Knowledge</h3>
                    <ul className="mt-2">
                      <li>Religious sciences (Ulum al-Din: Tafsir, Hadith, Fiqh, etc.)</li>
                      <li>Rational/Intellectual sciences (Ulum al-Aqliyyah: philosophy, logic)</li>
                      <li>Natural/Physical sciences (Ulum al-Tabi'iyyah: medicine, astronomy, mathematics)</li>
                      <li>Distinction between Fard Ayn (individual obligation) and Fard Kifayah (communal obligation) knowledge.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Purpose of Knowledge</h3>
                    <ul className="mt-2">
                      <li>To know God and His creation.</li>
                      <li>To benefit humanity and improve society.</li>
                      <li>To fulfill one's duties as a Muslim.</li>
                      <li>To attain wisdom (Hikmah).</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  The Golden Age of Islamic Science (c. 8th - 14th Centuries)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Major Contributions</h3>
                    <ul className="mt-2">
                      <li><strong>Mathematics:</strong> Algebra (Al-Khwarizmi), trigonometry, Arabic numerals.</li>
                      <li><strong>Medicine:</strong> Hospitals (Bimaristan), advancements in surgery (Al-Zahrawi), pharmacology, comprehensive medical encyclopedias (Ibn Sina's Canon).</li>
                      <li><strong>Astronomy:</strong> Observatories, development of astronomical instruments (astrolabe), refined planetary models.</li>
                      <li><strong>Optics:</strong> Ibn al-Haytham (Alhazen) and the scientific method.</li>
                      <li><strong>Chemistry (Al-Kimiya):</strong> Jabir ibn Hayyan (Geber).</li>
                      <li><strong>Geography, Cartography, Sociology (Ibn Khaldun).</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Factors Contributing to Flourishing</h3>
                    <ul className="mt-2">
                      <li>Patronage of learning by Caliphs and rulers (e.g., House of Wisdom in Baghdad).</li>
                      <li>Translation movement (Greek, Persian, Indian texts into Arabic).</li>
                      <li>Openness to diverse intellectual traditions.</li>
                      <li>Emphasis on empirical research and experimentation.</li>
                      <li>Development of universities (Madrasas).</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Islam and Modern Science: Contemporary Engagement
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Areas of Discussion & Debate</h3>
                    <ul className="mt-2">
                      <li>Compatibility of faith and reason/science.</li>
                      <li>Ethical implications of new technologies (bioethics, AI).</li>
                      <li>Creation, evolution, and cosmology from an Islamic perspective.</li>
                      <li>The concept of "Islamic science" or "Islamization of knowledge."</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Contemporary Efforts</h3>
                    <ul className="mt-2">
                      <li>Promoting scientific education and research in Muslim societies.</li>
                      <li>Contributions of Muslim scientists to modern advancements.</li>
                      <li>Institutions dedicated to science, technology, and Islamic thought.</li>
                      <li>Discourse on developing science and technology within an Islamic ethical framework.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/islamic-contributions-to-civilization" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Contributions to Civilization</h3>
                    <p className="text-sm text-muted-foreground">
                      A broader look at the impact of Islamic scholarship.
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/islamic-perspectives-on-education-and-learning" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Education & Learning in Islam</h3>
                    <p className="text-sm text-muted-foreground">
                      The pedagogical approaches to acquiring knowledge.
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Delve into the history of the{" "}
                  <Link href="/islam/history/golden-age/house-of-wisdom" className="hover:underline">
                    House of Wisdom
                  </Link>
                  , or explore the contributions of figures like{" "}
                  <Link href="/islam/scholars/ibn-al-haytham" className="hover:underline">
                    Ibn al-Haytham
                  </Link>
                  . Consider the Islamic view on{" "}
                  <Link href="/islam/concepts/ilm" className="hover:underline">
                    Ilm (Knowledge)
                  </Link>
                  .
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/islam/science/ethics-in-science">Islamic Ethics in Science</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/islam/philosophy/faith-reason">Faith and Reason in Islam</Link>
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