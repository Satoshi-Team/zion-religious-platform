import React from 'react'
import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Islamic Mysticism (Tasawwuf): Sufism, Practices & Philosophy | Religious Studies Blog",
  description: "Explore Tasawwuf (Sufism), the mystical dimension of Islam: its core principles (Tazkiyah, Dhikr), spiritual practices (Khalwa, Sama), major orders (Tariqas), and influential figures (Rumi, Ghazali).",
  openGraph: {
    title: "Islamic Mysticism (Tasawwuf): Sufism, Practices & Philosophy | Religious Studies Blog",
    description: "A comprehensive guide to Sufism (Tasawwuf), covering its spiritual foundations, key practices like Dhikr and Muraqaba, development of Tariqas (Sufi orders), and its impact on Islamic culture through figures like Rumi and Al-Ghazali.",
    type: "article",
    images: [
      {
        url: "/images/islamic-mysticism-sufism.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "Islamic Mysticism: Sufism and Its Practices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamic Mysticism (Tasawwuf): Sufism, Practices & Philosophy",
    description: "Explore Tasawwuf (Sufism): its core principles, spiritual practices, major orders, and influential figures.",
    images: ["/images/islamic-mysticism-sufism.jpg"], // Placeholder - ensure image exists
  },
}

export default function IslamicMysticismSufismAndItsPracticesPage() {
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
          <span aria-current="page">Islamic Mysticism (Sufism)</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Islamic Mysticism: Sufism and Its Practices (Tasawwuf)
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Tasawwuf</Badge>
            <Badge variant="secondary">Spiritual Path (Tariqah)</Badge>
            <Badge variant="secondary">Inner Dimensions of Islam</Badge>
            <Badge variant="secondary">Mystical Traditions</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            Tasawwuf, commonly known as Sufism, represents the mystical and esoteric dimension of Islam. It is a path
            focused on spiritual purification (Tazkiyah an-Nafs), remembrance of God (Dhikr), the cultivation of
            divine love (Mahabbah/Ishq), and the direct experiential knowledge of God (Ma'rifah). Sufism emphasizes
            the inner journey towards realizing the divine presence in oneself and the universe.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Foundations and Core Principles of Sufism
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Quranic & Prophetic Roots</h3>
                    <ul className="mt-2">
                      <li>Emphasis on Ihsan (excellence in faith and action).</li>
                      <li>Verses encouraging remembrance, contemplation, and nearness to God.</li>
                      <li>Prophetic traditions (Hadith) on asceticism (Zuhd) and spiritual states.</li>
                      <li>The example of the Prophet Muhammad ﷺ and his close Companions.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Key Concepts</h3>
                    <ul className="mt-2">
                      <li><strong>Tawhid (Oneness of God):</strong> Realizing the ultimate unity of being.</li>
                      <li><strong>Tazkiyah an-Nafs (Purification of the Self):</strong> Overcoming the lower self (Nafs) and its desires.</li>
                      <li><strong>Qalb (Heart):</strong> The spiritual center, to be purified and illuminated.</li>
                      <li><strong>Maqamat (Spiritual Stations):</strong> Gradual stages of development (e.g., Tawbah, Sabr, Shukr).</li>
                      <li><strong>Ahwal (Spiritual States):</strong> Transient experiences granted by God (e.g., Khawf, Raja, Shawq).</li>
                      <li><strong>Fana (Annihilation) & Baqa (Subsistence):</strong> Annihilation of the ego in God, and subsistence through God.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Spiritual Practices and Methods (Suluk)
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Core Practices</h3>
                    <ul className="mt-2">
                      <li><strong>Dhikr (Remembrance of God):</strong> Repetitive invocation of divine names or phrases (e.g., La ilaha illa Allah, Allah). Can be vocal (Jahri) or silent (Khafi).</li>
                      <li><strong>Muraqaba (Meditation/Contemplation):</strong> Focused awareness and contemplation on God's attributes or presence.</li>
                      <li><strong>Salawat (Blessings upon the Prophet ﷺ):</strong> Invoking peace and blessings upon Prophet Muhammad ﷺ.</li>
                      <li><strong>Tilawat al-Quran (Recitation of the Quran):</strong> Reflective reading of the Quran.</li>
                      <li><strong>Adherence to Sharia:</strong> Sufism emphasizes that the mystical path is grounded in Islamic law.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Guidance and Training</h3>
                    <ul className="mt-2">
                      <li><strong>Murshid/Shaykh (Spiritual Guide):</strong> An authorized master who guides the seeker (Murid/Salik).</li>
                      <li><strong>Bay'ah (Pledge of Allegiance):</strong> Formal initiation with a Shaykh.</li>
                      <li><strong>Suhbah (Companionship):</strong> Spending time with the Shaykh and fellow seekers.</li>
                      <li><strong>Khalwa/Chilla (Spiritual Retreat):</strong> Seclusion for intensive worship and contemplation.</li>
                      <li><strong>Sama (Spiritual Audition):</strong> Listening to mystical poetry and music, sometimes involving ritual movement (e.g., Whirling Dervishes of the Mevlevi order).</li>
                      <li><strong>Khidma (Service):</strong> Selfless service to others as a means of purification.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Major Sufi Orders (Tariqas) and Influential Figures
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Prominent Tariqas</h3>
                    <ul className="mt-2">
                      <li><strong>Qadiriyya:</strong> Founded by Abdul Qadir Jilani. Widespread globally.</li>
                      <li><strong>Naqshbandiyya:</strong> Emphasizes silent Dhikr and strict adherence to Sunnah.</li>
                      <li><strong>Chishtiyya:</strong> Prominent in South Asia, known for Sama and emphasis on love and service.</li>
                      <li><strong>Shadhiliyya:</strong> Founded by Abul Hasan al-Shadhili. Common in North Africa and the Middle East.</li>
                      <li><strong>Mevleviyya (Mawlawiyya):</strong> Founded by followers of Jalaluddin Rumi, known for the Sema (whirling) ceremony.</li>
                      <li><strong>Tijaniyya, Suhrawardiyya, Rifaiyya,</strong> and many others with distinct practices and lineages.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Key Sufi Masters & Thinkers</h3>
                    <ul className="mt-2">
                      <li>Hasan al-Basri (Early ascetic)</li>
                      <li>Rabia al-Adawiyya (Love of God)</li>
                      <li>Junayd al-Baghdadi (Sober Sufism)</li>
                      <li>Al-Hallaj (Ecstatic utterances)</li>
                      <li>Al-Ghazali (Synthesized Sufism with orthodoxy)</li>
                      <li>Ibn Arabi (Wahdat al-Wujud - Unity of Being)</li>
                      <li>Jalaluddin Rumi (Poet of divine love)</li>
                      <li>Shaykh Ahmad Sirhindi (Reformer of Naqshbandi order)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Cultural Impact and Contemporary Relevance
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Artistic & Literary Expressions</h3>
                    <ul className="mt-2">
                      <li>Profound influence on poetry (Rumi, Hafiz, Attar), music (Qawwali), and calligraphy.</li>
                      <li>Inspiration for specific architectural styles in shrines and lodges (Zawiyas/Khanqahs).</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Social & Ethical Contributions</h3>
                    <ul className="mt-2">
                      <li>Spread of Islam through peaceful means in many regions.</li>
                      <li>Emphasis on tolerance, love, and service to humanity.</li>
                      <li>Establishment of charitable institutions and community centers.</li>
                      <li>Role in interfaith dialogue and fostering understanding.</li>
                    </ul>
                  </div>
                </div>
                <h3 className="text-lg font-medium mt-4">Sufism Today</h3>
                <p className="text-sm text-muted-foreground">
                  Sufism continues to be a vibrant spiritual path for millions worldwide, adapting to modern contexts while seeking to preserve its core teachings. It faces challenges such as misrepresentation and the need for authentic guidance, but also offers profound resources for individual spiritual growth and global peace.
                </p>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/islamic-spirituality" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Spirituality</h3>
                    <p className="text-sm text-muted-foreground">
                      The broader context of inner dimensions in Islam.
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/islamic-ethics" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Ethics (Akhlaq)</h3>
                    <p className="text-sm text-muted-foreground">
                      Moral foundations deeply intertwined with Sufi practice.
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Learn more about influential figures like{" "}
                  <Link href="/scholars/rumi" className="hover:underline">
                    Rumi
                  </Link>
                  , or explore specific concepts such as{" "}
                  <Link href="/islam/concepts/dhikr" className="hover:underline">
                    Dhikr (Remembrance of God)
                  </Link>
                  . Discover different{" "}
                  <Link href="/islam/sufi-orders" className="hover:underline">
                    Sufi Orders (Tariqas)
                  </Link>
                  .
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/scholars/ghazali">Al-Ghazali's Contributions</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/islam/concepts/fana-baqa">Fana & Baqa</Link>
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