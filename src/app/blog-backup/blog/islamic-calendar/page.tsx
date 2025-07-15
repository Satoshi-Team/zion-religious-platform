import React from 'react'
import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "The Islamic Calendar (Hijri) | Religious Studies Blog",
  description: "Explore the Islamic lunar calendar system, its historical origins, calculation methods, and significance in religious observances and daily Muslim life.",
  openGraph: {
    title: "The Islamic Calendar (Hijri) | Religious Studies Blog",
    description: "Comprehensive guide to understanding the Islamic lunar calendar system",
    type: "article",
    images: [
      {
        url: "/images/islamic-calendar.jpg",
        width: 1200,
        height: 630,
        alt: "Islamic Calendar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Islamic Calendar (Hijri)",
    description: "Comprehensive guide to understanding the Islamic lunar calendar system",
    images: ["/images/islamic-calendar.jpg"],
  },
}

export default function IslamicCalendarPage() {
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
          <span aria-current="page">Calendar</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            The Islamic Calendar: Marking Sacred Time
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Time Keeping</Badge>
            <Badge variant="secondary">Religious Observances</Badge>
            <Badge variant="secondary">Lunar System</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            The Islamic calendar (Hijri) is a lunar calendar system that governs religious
            observances and commemorations in Islam. Based on the cycles of the moon, this
            calendar holds deep religious significance and provides the framework for timing
            worship, festivals, and historical remembrances in the Muslim world.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Historical Foundation
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Origins</h3>
                    <ul className="mt-2">
                      <li>Established by Umar ibn Al-Khattab</li>
                      <li>Hijra as starting point</li>
                      <li>Lunar month observation</li>
                      <li>Pre-Islamic traditions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Development</h3>
                    <ul className="mt-2">
                      <li>Standardization process</li>
                      <li>Regional variations</li>
                      <li>Astronomical calculations</li>
                      <li>Modern adaptations</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Calendar Structure
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Lunar Months</h3>
                    <ul className="mt-2">
                      <li>Muharram (New Year)</li>
                      <li>Safar</li>
                      <li>Rabi al-Awwal</li>
                      <li>Subsequent months</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Calculations</h3>
                    <ul className="mt-2">
                      <li>Moon sighting</li>
                      <li>29/30-day months</li>
                      <li>354/355-day year</li>
                      <li>Seasonal drift</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Religious Significance
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Sacred Months</h3>
                    <ul className="mt-2">
                      <li>Dhul-Hijjah (Pilgrimage)</li>
                      <li>Ramadan (Fasting)</li>
                      <li>Muharram (New Year)</li>
                      <li>Rajab (Night Journey)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Special Days</h3>
                    <ul className="mt-2">
                      <li>Friday prayers</li>
                      <li>Eid celebrations</li>
                      <li>Night of Power</li>
                      <li>Historical events</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Modern Application
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Contemporary Usage</h3>
                    <ul className="mt-2">
                      <li>Digital calendars</li>
                      <li>Mobile applications</li>
                      <li>Prayer timetables</li>
                      <li>Festival planning</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Global Coordination</h3>
                    <ul className="mt-2">
                      <li>International sighting</li>
                      <li>Regional differences</li>
                      <li>Scientific methods</li>
                      <li>Unity efforts</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Cultural Impact
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Social Influence</h3>
                    <ul className="mt-2">
                      <li>Community rhythms</li>
                      <li>Cultural traditions</li>
                      <li>Business practices</li>
                      <li>Educational timing</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Modern Challenges</h3>
                    <ul className="mt-2">
                      <li>Global coordination</li>
                      <li>Technological integration</li>
                      <li>Interfaith dialogue</li>
                      <li>Secular adaptation</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/islamic-festivals" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Festivals</h3>
                    <p className="text-sm text-muted-foreground">
                      Explore the celebrations marked by the Islamic calendar
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/islamic-astronomy" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Islamic Astronomy</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn about the astronomical basis of the Islamic calendar
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Deepen your understanding through our{" "}
                  <Link href="/religion/islam/calendar" className="hover:underline">
                    Islamic Calendar
                  </Link>{" "}
                  section. Compare time-keeping systems in our{" "}
                  <Link href="/religion/comparative-calendars" className="hover:underline">
                    Comparative Religious Calendars
                  </Link>{" "}
                  guide.
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/religion/islam/calendar">Explore Islamic Calendar</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/religion/comparative-calendars">Compare Calendar Systems</Link>
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