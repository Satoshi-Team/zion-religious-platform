import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Judaism: History, Beliefs, and Practices',
  description: 'Explore Judaism, one of the world\'s oldest monotheistic religions, including its history, beliefs, practices, and cultural impact.'
}

function JudaismPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Judaism: History, Beliefs, and Practices</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Judaism is one of the world's oldest monotheistic religions, with a rich history spanning over 3,000 years. 
        It encompasses religious, cultural, and ethnic dimensions, serving as both a faith tradition and a way of life 
        for Jewish communities worldwide. This page explores the core beliefs, historical development, practices, 
        and cultural impact of Judaism.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Core Beliefs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Monotheism:</strong> Belief in one God (YHWH)</li>
              <li><strong>Covenant:</strong> Special relationship between God and the Jewish people</li>
              <li><strong>Torah:</strong> Divine revelation and guidance for living</li>
              <li><strong>Tikkun Olam:</strong> Repairing and improving the world</li>
              <li><strong>Messianic Hope:</strong> Belief in ultimate redemption</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sacred Texts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Tanakh:</strong> Hebrew Bible (Torah, Nevi'im, Ketuvim)</li>
              <li><strong>Torah:</strong> First five books of Moses</li>
              <li><strong>Talmud:</strong> Rabbinic commentary and law</li>
              <li><strong>Midrash:</strong> Interpretive literature</li>
              <li><strong>Responsa:</strong> Rabbinic legal decisions</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Major Branches</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Orthodox:</strong> Traditional observance and beliefs</li>
              <li><strong>Conservative:</strong> Moderate approach to tradition</li>
              <li><strong>Reform:</strong> Progressive interpretation</li>
              <li><strong>Reconstructionist:</strong> Cultural and spiritual focus</li>
              <li><strong>Hasidic:</strong> Mystical and devotional traditions</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Historical Development</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Biblical Period</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                From Abraham to the Second Temple period, including the Exodus, conquest of Canaan, 
                and establishment of the monarchy.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/judaism/history/early-judaism">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medieval Period</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Development of rabbinic Judaism, Talmudic scholarship, and Jewish communities 
                in Europe, North Africa, and the Middle East.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/judaism/history/medieval">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modern Period</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Enlightenment, emancipation, and the development of modern Jewish movements 
                and Zionism.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/judaism/history/modern">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contemporary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Post-Holocaust developments, establishment of Israel, and contemporary 
                Jewish life worldwide.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/judaism/history">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Religious Practices</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Daily Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>Morning and evening prayers (Shacharit, Mincha, Maariv)</li>
                <li>Blessings before and after meals</li>
                <li>Study of Torah and Jewish texts</li>
                <li>Acts of loving-kindness (Gemilut Chasadim)</li>
                <li>Charity and social justice work</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weekly Observance</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>Shabbat (Sabbath) observance</li>
                <li>Torah reading and study</li>
                <li>Family meals and community gathering</li>
                <li>Rest and spiritual renewal</li>
                <li>Havdalah ceremony</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lifecycle Events</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>Brit Milah (circumcision)</li>
                <li>Bar/Bat Mitzvah</li>
                <li>Marriage (Kiddushin)</li>
                <li>Death and mourning practices</li>
                <li>Conversion process</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Cultural Impact</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Arts & Literature</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Jewish contributions to literature, music, visual arts, and cultural expression 
                throughout history.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/judaism/impact/art">Explore Art</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Philosophy & Ethics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Jewish philosophical traditions, ethical teachings, and contributions to 
                moral philosophy and social thought.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/judaism/impact/philosophy">Explore Philosophy</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Science & Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Jewish contributions to science, medicine, mathematics, and educational 
                traditions and institutions.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/judaism/impact/science">Explore Science</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">References & Further Reading</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><a href="https://www.jewishvirtuallibrary.org/" target="_blank" rel="noopener noreferrer" className="underline">Jewish Virtual Library</a></li>
          <li><a href="https://www.myjewishlearning.com/" target="_blank" rel="noopener noreferrer" className="underline">My Jewish Learning</a></li>
          <li><a href="https://www.chabad.org/" target="_blank" rel="noopener noreferrer" className="underline">Chabad.org</a></li>
          <li><a href="https://www.reformjudaism.org/" target="_blank" rel="noopener noreferrer" className="underline">Reform Judaism</a></li>
          <li><a href="https://www.ou.org/" target="_blank" rel="noopener noreferrer" className="underline">Orthodox Union</a></li>
        </ul>
      </section>
    </div>
  )
}

export default JudaismPage 