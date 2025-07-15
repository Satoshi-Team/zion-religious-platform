import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Islamic Calendar (Hijri) & Festivals: Sacred Time, Observances & Celebrations | Religious Studies Blog",
  description: "Explore the Hijri (Islamic lunar) calendar: its months (Muharram, Ramadan, Dhul Hijjah), significance, and major festivals like Eid al-Fitr, Eid al-Adha, Ashura, and Mawlid.",
  openGraph: {
    title: "Islamic Calendar (Hijri) & Festivals: Sacred Time, Observances & Celebrations | Religious Studies Blog",
    description: "A comprehensive guide to the Islamic Hijri calendar, its lunar months, sacred times, key festivals (Eid al-Fitr, Eid al-Adha), and their religious and cultural significance.",
    type: "article",
    images: [
      {
        url: "/images/islamic-calendar-festivals.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "Islamic Calendar and Festivals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamic Calendar (Hijri) & Festivals: Sacred Time & Celebrations",
    description: "Explore the Hijri calendar, its months, and major Islamic festivals like Eid al-Fitr, Eid al-Adha, Ashura, and Mawlid.",
    images: ["/images/islamic-calendar-festivals.jpg"], // Placeholder - ensure image exists
  },
}

export default function IslamicCalendarAndFestivalsPage() {
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
          <span aria-current="page">Calendar & Festivals</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Islamic Calendar (Hijri) and Festivals: Sacred Time and Celebrations
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Hijri Calendar</Badge>
            <Badge variant="secondary">Lunar Cycle</Badge>
            <Badge variant="secondary">Religious Observances</Badge>
            <Badge variant="secondary">Islamic Festivals</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            The Islamic calendar, known as the Hijri calendar, is a lunar calendar consisting of 12 months in a year of
            354 or 355 days. It is used to date events in many Muslim countries (concurrently with the Gregorian
            calendar) and used by Muslims everywhere to determine the proper days on which to observe the annual fast
            (Ramadan), to attend Hajj, and to celebrate other Islamic holidays and festivals.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  The Hijri Calendar: Structure and Significance
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Lunar Basis & Months</h3>
                    <ul className="mt-2">
                      <li>Based on the cycles of the moon; months begin with the sighting of the new crescent moon (Hilal).</li>
                      <li><strong>Twelve Lunar Months:</strong> Muharram, Safar, Rabi' al-Awwal, Rabi' al-Thani, Jumada al-Awwal, Jumada al-Thani, Rajab, Sha'ban, Ramadan, Shawwal, Dhu al-Qi'dah, Dhu al-Hijjah.</li>
                      <li>Months are either 29 or 30 days long.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Historical & Religious Importance</h3>
                    <ul className="mt-2">
                      <li><strong>Starting Point (Epoch):</strong> The Hijra (Prophet Muhammad's ﷺ migration from Mecca to Medina in 622 CE) marks the beginning of the Islamic calendar (Year 1 AH).</li>
                      <li>Determines timing for pillars of Islam like Sawm (fasting in Ramadan) and Hajj (pilgrimage in Dhu al-Hijjah).</li>
                      <li><strong>Sacred Months (Al-Ashhur al-Hurum):</strong> Dhu al-Qi'dah, Dhu al-Hijjah, Muharram, and Rajab, during which warfare was traditionally forbidden.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Major Islamic Festivals and Observances
                </h2>
                <Separator className="my-4" />
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Eid al-Fitr (Festival of Breaking the Fast)</h3>
                    <ul className="mt-2">
                      <li>Celebrated on the first day of Shawwal, marking the end of Ramadan.</li>
                      <li>Begins with a special congregational prayer (Salat al-Eid).</li>
                      <li>Characterized by giving Zakat al-Fitr (charity), feasting, visiting family and friends, and wearing new clothes.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Eid al-Adha (Festival of Sacrifice)</h3>
                    <ul className="mt-2">
                      <li>Celebrated on the 10th day of Dhu al-Hijjah, during the Hajj pilgrimage.</li>
                      <li>Commemorates Prophet Ibrahim's (Abraham's) willingness to sacrifice his son as an act of obedience to God.</li>
                      <li>Involves the sacrifice of an animal (Qurbani/Udhiyah), with meat distributed to family, friends, and the needy.</li>
                      <li>Also includes Salat al-Eid.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Ramadan (Month of Fasting)</h3>
                    <ul className="mt-2">
                      <li>The ninth month; Muslims abstain from food, drink, and sexual activity from dawn (Fajr) till sunset (Maghrib).</li>
                      <li>A time for increased prayer (Taraweeh), Quran recitation, charity (Sadaqah), and self-reflection.</li>
                      <li><strong>Laylat al-Qadr (Night of Decree/Power):</strong> One of the odd nights in the last ten days of Ramadan, considered the holiest night of the year.</li>
                    </ul>
                  </div>
                   <div>
                    <h3 className="text-lg font-medium">Islamic New Year (Al-Hijra / Muharram)</h3>
                    <ul className="mt-2">
                      <li>Marks the beginning of the Islamic Hijri year on the 1st of Muharram.</li>
                      <li>A time for reflection on the Hijra and its significance for the Muslim Ummah.</li>
                      <li><strong>Ashura (10th of Muharram):</strong> A significant day with historical importance for both Sunni and Shia Muslims, observed differently. For Sunnis, it's often a day of voluntary fasting. For Shias, it is a day of deep mourning commemorating the martyrdom of Husayn ibn Ali.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Mawlid an-Nabi (Prophet Muhammad's ﷺ Birthday)</h3>
                    <ul className="mt-2">
                      <li>Observed by many Muslims in Rabi' al-Awwal, though practices and acceptance vary among different Islamic schools of thought.</li>
                      <li>Often involves recounting the Prophet's ﷺ life (Sirah), poems of praise (Qasidas), and charitable acts.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Other Significant Occasions</h3>
                    <ul className="mt-2">
                      <li><strong>Isra' wal-Mi'raj (The Night Journey and Ascension):</strong> Commemorates the Prophet's ﷺ miraculous journey, often observed on the 27th of Rajab.</li>
                      <li><strong>Laylat al-Bara'ah (Mid-Sha'ban / Night of Forgiveness):</strong> Observed by some as a night of prayer and seeking forgiveness.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Cultural Expressions and Contemporary Significance
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Cultural Diversity</h3>
                    <ul className="mt-2">
                      <li>Festivals are celebrated with diverse cultural traditions, foods, and customs across the Muslim world.</li>
                      <li>Reinforce community bonds, family ties, and shared identity.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Modern Considerations</h3>
                    <ul className="mt-2">
                      <li>Moon sighting for calendar accuracy can lead to regional variations in starting/ending months.</li>
                      <li>Efforts for unified global Islamic calendar and sighting.</li>
                      <li>Adaptation of celebrations in diaspora communities and digital spaces.</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/the-five-pillars-of-islam" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">The Five Pillars of Islam</h3>
                    <p className="text-sm text-muted-foreground">
                      Many festivals are directly linked to these core practices.
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/islamic-astronomy" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Astronomy</h3>
                    <p className="text-sm text-muted-foreground">
                      The science behind moon sighting and calendar calculations.
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Learn more about specific events like{" "}
                  <Link href="/islam/concepts/ramadan" className="hover:underline">
                    Ramadan
                  </Link>
                  , or the significance of the{" "}
                  <Link href="/islam/concepts/hajj" className="hover:underline">
                    Hajj pilgrimage
                  </Link>
                  . Explore cultural variations in our regional Islam sections.
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/islam/concepts/eid">Understanding Eid</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/islam/history/hijra">The Hijra Significance</Link>
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