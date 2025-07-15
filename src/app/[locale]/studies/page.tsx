import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Studies - Religious & Academic Studies | Zion.FM',
  description: 'Explore religious and academic studies: Bible, theology, history, philosophy, meditation, and comparative religion. Access guides, commentaries, and official resources for in-depth learning.',
  keywords: [
    'religious studies', 'bible study', 'theology', 'history', 'philosophy', 'meditation', 'comparative religion', 'academic studies', 'Zion.FM'
  ],
  openGraph: {
    title: 'Studies - Religious & Academic Studies | Zion.FM',
    description: 'Explore religious and academic studies: Bible, theology, history, philosophy, meditation, and comparative religion. Access guides, commentaries, and official resources for in-depth learning.',
    type: 'website'
  }
}

function StudiesPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Studies: Religious & Academic</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Explore in-depth studies of world religions: Bible, theology, history, philosophy, meditation, and comparative religion. Access guides, commentaries, and official resources for academic and personal learning. All resources are interlinked and verified.
      </p>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Featured Study Areas</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/studies/bible" className="text-blue-600 hover:underline">Bible Studies</Link> – Scripture analysis and study plans</li>
          <li><Link href="/studies/theology" className="text-blue-600 hover:underline">Theology</Link> – Christian, Islamic, Jewish, and comparative theology</li>
          <li><Link href="/studies/history" className="text-blue-600 hover:underline">Religious History</Link> – Timelines and historical analysis</li>
          <li><Link href="/studies/guides" className="text-blue-600 hover:underline">Study Guides</Link> – Step-by-step learning resources</li>
          <li><Link href="/studies/commentaries" className="text-blue-600 hover:underline">Scripture Commentaries</Link> – Expert insights and explanations</li>
          <li><Link href="/studies/comparative" className="text-blue-600 hover:underline">Comparative Religion</Link> – Compare beliefs and practices</li>
          <li><Link href="/studies/academic" className="text-blue-600 hover:underline">Academic Studies</Link> – University-level resources</li>
          <li><Link href="/studies/meditation" className="text-blue-600 hover:underline">Meditation Studies</Link> – Theory and practice</li>
          <li><Link href="/studies/philosophy" className="text-blue-600 hover:underline">Religious Philosophy</Link> – Philosophical traditions</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Guides & Commentaries</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/studies/guides" className="text-blue-600 hover:underline">Study Guides</Link> – Structured learning for all levels</li>
          <li><Link href="/studies/commentaries" className="text-blue-600 hover:underline">Scripture Commentaries</Link> – Expert explanations</li>
          <li><a href="https://www.biblegateway.com/resources/commentaries/" target="_blank" rel="noopener noreferrer" className="underline">BibleGateway Commentaries</a></li>
          <li><a href="https://www.sefaria.org/texts/Commentary" target="_blank" rel="noopener noreferrer" className="underline">Sefaria Jewish Commentaries</a></li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Comparative & Academic Resources</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/studies/comparative" className="text-blue-600 hover:underline">Comparative Religion</Link> – Compare beliefs, texts, and practices</li>
          <li><Link href="/studies/academic" className="text-blue-600 hover:underline">Academic Studies</Link> – University-level research</li>
          <li><a href="https://www.jstor.org/subject/religion" target="_blank" rel="noopener noreferrer" className="underline">JSTOR Religion</a></li>
          <li><a href="https://www.oxfordbibliographies.com/obo/page/religion" target="_blank" rel="noopener noreferrer" className="underline">Oxford Bibliographies</a></li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Explore More</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/resources" className="text-blue-600 hover:underline">Resource Library</Link></li>
          <li><Link href="/sacred-texts" className="text-blue-600 hover:underline">Sacred Texts</Link></li>
          <li><Link href="/meditation" className="text-blue-600 hover:underline">Meditation Practices</Link></li>
          <li><Link href="/listen" className="text-blue-600 hover:underline">Audio Studies</Link></li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Help & Support</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>All resources are verified and accessible</li>
          <li>Mobile-friendly and inclusive design</li>
          <li>Need help? <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link></li>
        </ul>
      </section>
    </main>
  )
}

export default StudiesPage 