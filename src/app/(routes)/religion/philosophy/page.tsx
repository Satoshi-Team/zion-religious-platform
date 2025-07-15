import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Religious Philosophy: Exploring Faith and Reason',
  description: 'Explore religious philosophy, including metaphysics, epistemology, ethics, and the relationship between faith and reason across different religious traditions.'
}

function ReligiousPhilosophyPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Religious Philosophy: Exploring Faith and Reason</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Religious philosophy examines fundamental questions about existence, knowledge, morality, 
        and the divine through the lens of religious traditions and spiritual inquiry. It bridges 
        the gap between faith and reason, exploring how religious beliefs inform our understanding 
        of reality and human experience. This page explores the major branches, historical development, 
        and contemporary issues in religious philosophy.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Major Branches</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Metaphysics:</strong> Nature of reality and existence</li>
              <li><strong>Epistemology:</strong> Knowledge and belief</li>
              <li><strong>Ethics:</strong> Moral principles and values</li>
              <li><strong>Philosophy of Religion:</strong> Religious concepts and arguments</li>
              <li><strong>Comparative Philosophy:</strong> Cross-cultural philosophical inquiry</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Core Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>What is the nature of God or the divine?</li>
              <li>How do we know religious truths?</li>
              <li>What is the meaning and purpose of life?</li>
              <li>How should we live morally?</li>
              <li>What is the relationship between faith and reason?</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Philosophical Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Rational Analysis:</strong> Logical reasoning and argument</li>
              <li><strong>Phenomenology:</strong> Study of religious experience</li>
              <li><strong>Hermeneutics:</strong> Interpretation of sacred texts</li>
              <li><strong>Comparative Study:</strong> Cross-traditional analysis</li>
              <li><strong>Existential Inquiry:</strong> Personal meaning and choice</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Historical Development</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Early Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Ancient philosophical traditions in Greece, India, China, and the Middle East, 
                exploring fundamental questions about existence and the divine.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/philosophy/history/early-philosophy">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medieval Period</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Integration of religious and philosophical thought, development of systematic 
                theology, and synthesis of faith and reason.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/philosophy/history/medieval">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modern Era</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Enlightenment philosophy, secular challenges to religious thought, and 
                development of modern philosophical approaches to religion.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/philosophy/history/modern">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contemporary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Current philosophical debates, interfaith dialogue, and the role of 
                religious philosophy in addressing modern challenges.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/philosophy/history">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Philosophical Traditions</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Western Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Ancient Greek:</strong> Plato, Aristotle, Stoicism</li>
                <li><strong>Medieval:</strong> Augustine, Aquinas, Islamic philosophy</li>
                <li><strong>Modern:</strong> Descartes, Kant, existentialism</li>
                <li><strong>Contemporary:</strong> Analytic and continental approaches</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Eastern Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Indian:</strong> Vedanta, Buddhism, Jainism</li>
                <li><strong>Chinese:</strong> Confucianism, Daoism, Buddhism</li>
                <li><strong>Japanese:</strong> Zen, Shinto philosophy</li>
                <li><strong>Islamic:</strong> Sufism, Islamic theology</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Indigenous Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Native American:</strong> Ecological wisdom</li>
                <li><strong>African:</strong> Ubuntu and community</li>
                <li><strong>Pacific Islander:</strong> Oceanic philosophy</li>
                <li><strong>Aboriginal:</strong> Dreamtime and connection</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Key Areas of Inquiry</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Metaphysics & Cosmology</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Questions about the nature of reality, existence, time, space, and the 
                fundamental structure of the universe.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/philosophy/impact/metaphysics">Explore Metaphysics</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Epistemology & Logic</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Study of knowledge, belief, truth, and the methods of reasoning and 
                argumentation in religious contexts.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/philosophy/impact/logic">Explore Logic</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ethics & Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Moral philosophy, ethical principles, value theory, and the application 
                of religious ethics to contemporary issues.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/philosophy/impact/ethics">Explore Ethics</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">References & Further Reading</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><a href="https://plato.stanford.edu/entries/philosophy-religion/" target="_blank" rel="noopener noreferrer" className="underline">Stanford Encyclopedia: Philosophy of Religion</a></li>
          <li><a href="https://www.britannica.com/topic/philosophy-of-religion" target="_blank" rel="noopener noreferrer" className="underline">Britannica: Philosophy of Religion</a></li>
          <li><a href="https://www.iep.utm.edu/religion/" target="_blank" rel="noopener noreferrer" className="underline">Internet Encyclopedia of Philosophy: Religion</a></li>
          <li><a href="https://www.oxfordbibliographies.com/view/document/obo-9780195396577/obo-9780195396577-0001.xml" target="_blank" rel="noopener noreferrer" className="underline">Oxford Bibliographies: Philosophy of Religion</a></li>
          <li><a href="https://www.philosophybasics.com/branch_religion.html" target="_blank" rel="noopener noreferrer" className="underline">Philosophy Basics: Philosophy of Religion</a></li>
        </ul>
      </section>
    </div>
  )
}

export default ReligiousPhilosophyPage 