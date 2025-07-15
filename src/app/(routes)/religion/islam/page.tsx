import React from 'react'
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Islamic Studies | Religious Studies Portal",
  description: "Comprehensive exploration of Islamic theology, history, and cultural impact"
}

export default function IslamPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Islamic Studies</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Explore the rich traditions, theology, and cultural impact of Islam
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Core Studies</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Islamic Theology</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/islam/studies/tawhid" className="hover:underline">
                    Tawhid (Divine Unity)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/islam/studies/aqidah" className="hover:underline">
                    Aqidah (Creed)
                  </Link>
                </li>
                <li>
                  <Link href="/religion/islam/studies/fiqh" className="hover:underline">
                    Fiqh (Jurisprudence)
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/islam/studies">Explore Studies</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historical Periods</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/islam/history/early-islam" className="hover:underline">
                    Early Islam
                  </Link>
                </li>
                <li>
                  <Link href="/religion/islam/history/golden-age" className="hover:underline">
                    Islamic Golden Age
                  </Link>
                </li>
                <li>
                  <Link href="/religion/islam/history/contemporary" className="hover:underline">
                    Contemporary Islam
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/islam/history">Explore History</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cultural Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                <li>
                  <Link href="/religion/islam/impact/art" className="hover:underline">
                    Islamic Art & Architecture
                  </Link>
                </li>
                <li>
                  <Link href="/religion/islam/impact/science" className="hover:underline">
                    Scientific Contributions
                  </Link>
                </li>
                <li>
                  <Link href="/religion/islam/impact/philosophy" className="hover:underline">
                    Islamic Philosophy
                  </Link>
                </li>
              </ul>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/islam/impact">Explore Impact</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Practices & Spirituality</h2>
        <div className="grid gap-4 md:grid-cols-4">
          <Button variant="outline" asChild className="h-auto py-6">
            <Link href="/religion/islam/practices/prayer">
              <span className="flex flex-col">
                <span className="text-lg font-semibold">Prayer (Salah)</span>
                <span className="text-sm text-muted-foreground">Daily Worship</span>
              </span>
            </Link>
          </Button>
          <Button variant="outline" asChild className="h-auto py-6">
            <Link href="/religion/islam/practices/tasawwuf">
              <span className="flex flex-col">
                <span className="text-lg font-semibold">Tasawwuf</span>
                <span className="text-sm text-muted-foreground">Islamic Mysticism</span>
              </span>
            </Link>
          </Button>
          <Button variant="outline" asChild className="h-auto py-6">
            <Link href="/religion/islam/practices/dhikr">
              <span className="flex flex-col">
                <span className="text-lg font-semibold">Dhikr</span>
                <span className="text-sm text-muted-foreground">Remembrance</span>
              </span>
            </Link>
          </Button>
          <Button variant="outline" asChild className="h-auto py-6">
            <Link href="/religion/islam/practices/meditation">
              <span className="flex flex-col">
                <span className="text-lg font-semibold">Meditation</span>
                <span className="text-sm text-muted-foreground">Spiritual Practices</span>
              </span>
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
} 