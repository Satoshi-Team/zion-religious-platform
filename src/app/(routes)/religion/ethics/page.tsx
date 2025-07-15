import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Religious Ethics: Principles and Moral Philosophy',
  description: 'Explore religious ethics across different faith traditions, including moral principles, ethical frameworks, and their application in contemporary society.'
}

function ReligiousEthicsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Religious Ethics: Principles and Moral Philosophy</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Religious ethics encompasses the moral principles, values, and ethical frameworks derived from 
        religious traditions and spiritual beliefs. It provides guidance for personal conduct, social 
        relationships, and moral decision-making across diverse cultural and religious contexts. 
        This page explores the foundations, principles, and applications of religious ethics.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Core Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Golden Rule:</strong> Treat others as you wish to be treated</li>
              <li><strong>Compassion:</strong> Empathy and care for all beings</li>
              <li><strong>Justice:</strong> Fairness and equity in relationships</li>
              <li><strong>Integrity:</strong> Honesty and moral consistency</li>
              <li><strong>Service:</strong> Selfless contribution to others</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ethical Frameworks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Virtue Ethics:</strong> Character and moral excellence</li>
              <li><strong>Deontological:</strong> Duty-based moral obligations</li>
              <li><strong>Consequentialist:</strong> Outcome-based decision making</li>
              <li><strong>Care Ethics:</strong> Relationship and compassion focus</li>
              <li><strong>Divine Command:</strong> Religious authority and revelation</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Application Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Personal Conduct:</strong> Individual moral choices</li>
              <li><strong>Social Justice:</strong> Community and societal issues</li>
              <li><strong>Environmental:</strong> Stewardship and sustainability</li>
              <li><strong>Bioethics:</strong> Medical and life decisions</li>
              <li><strong>Business Ethics:</strong> Economic and professional conduct</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Historical Development</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Early Ethics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Ancient moral codes, religious laws, and ethical teachings from early 
                civilizations and religious traditions.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/ethics/history/early-ethics">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medieval Period</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Development of systematic ethical theories, religious moral philosophy, 
                and integration of faith and reason.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/ethics/history/medieval">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modern Era</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Enlightenment ethics, secular moral philosophy, and contemporary 
                challenges to religious ethical frameworks.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/ethics/history/modern">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contemporary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Current ethical challenges, interfaith dialogue, and the role of 
                religious ethics in modern society.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/ethics/history">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Religious Traditions</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Abrahamic Traditions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Judaism:</strong> Halakha and ethical mitzvot</li>
                <li><strong>Christianity:</strong> Love, forgiveness, and service</li>
                <li><strong>Islam:</strong> Sharia and moral conduct</li>
                <li><strong>Common Themes:</strong> Justice, compassion, community</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Eastern Traditions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Hinduism:</strong> Dharma and karma</li>
                <li><strong>Buddhism:</strong> Eightfold Path and compassion</li>
                <li><strong>Confucianism:</strong> Ren and social harmony</li>
                <li><strong>Daoism:</strong> Wu wei and natural balance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Indigenous Traditions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Native American:</strong> Respect for all life</li>
                <li><strong>African Traditional:</strong> Community and ancestors</li>
                <li><strong>Pacific Islander:</strong> Harmony with nature</li>
                <li><strong>Common Themes:</strong> Interconnectedness, stewardship</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Contemporary Issues</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Social Justice</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Religious perspectives on poverty, inequality, human rights, 
                and social responsibility.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/ethics/social">Explore Social Ethics</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Environmental Ethics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Religious teachings on environmental stewardship, climate change, 
                and sustainable living.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/ethics/applied">Explore Applied Ethics</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bioethics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Religious perspectives on medical ethics, end-of-life care, 
                and biotechnology.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/ethics/principles">Explore Principles</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">References & Further Reading</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><a href="https://plato.stanford.edu/entries/ethics-religion/" target="_blank" rel="noopener noreferrer" className="underline">Stanford Encyclopedia: Religion and Ethics</a></li>
          <li><a href="https://www.britannica.com/topic/ethics-philosophy" target="_blank" rel="noopener noreferrer" className="underline">Britannica: Ethics</a></li>
          <li><a href="https://www.bbc.co.uk/ethics/" target="_blank" rel="noopener noreferrer" className="underline">BBC Ethics Guide</a></li>
          <li><a href="https://www.scu.edu/ethics/" target="_blank" rel="noopener noreferrer" className="underline">Santa Clara University: Markkula Center for Applied Ethics</a></li>
          <li><a href="https://www.huffpost.com/topic/religious-ethics" target="_blank" rel="noopener noreferrer" className="underline">HuffPost: Religious Ethics</a></li>
        </ul>
      </section>
    </div>
  )
}

export default ReligiousEthicsPage 