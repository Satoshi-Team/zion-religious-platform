import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sacred Texts - Scriptures of the World | Zion.FM',
  description: 'Explore the world’s sacred texts: Bible, Quran, Torah, Buddhist Sutras, Hindu Vedas, Sikh Guru Granth Sahib, and more. Read, study, and compare scriptures with official resources and guides.',
  keywords: [
    'sacred texts', 'scripture', 'bible', 'quran', 'torah', 'buddhist sutras', 'vedas', 'guru granth sahib', 'religious texts', 'Zion.FM'
  ],
  openGraph: {
    title: 'Sacred Texts - Scriptures of the World | Zion.FM',
    description: 'Explore the world’s sacred texts: Bible, Quran, Torah, Buddhist Sutras, Hindu Vedas, Sikh Guru Granth Sahib, and more. Read, study, and compare scriptures with official resources and guides.',
    type: 'website'
  }
}

function SacredTextsPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Sacred Texts: Scriptures of the World</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Explore the foundational scriptures of the world’s religions. Read, study, and compare the Bible, Quran, Torah, Buddhist Sutras, Hindu Vedas, Sikh Guru Granth Sahib, and more. All resources are interlinked with study guides, commentaries, and official sources.
      </p>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Featured Scriptures</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/sacred-texts/bible" className="text-blue-600 hover:underline">Bible</Link> – Old and New Testaments, multiple translations
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://www.biblegateway.com/" target="_blank" rel="noopener noreferrer" className="underline">BibleGateway</a></li>
              <li><a href="https://www.biblestudytools.com/" target="_blank" rel="noopener noreferrer" className="underline">Bible Study Tools</a></li>
            </ul>
          </li>
          <li><Link href="/sacred-texts/quran" className="text-blue-600 hover:underline">Quran</Link> – Arabic and translations, tafsir
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://quran.com/" target="_blank" rel="noopener noreferrer" className="underline">Quran.com</a></li>
              <li><a href="https://www.islamicity.org/quransearch/" target="_blank" rel="noopener noreferrer" className="underline">Islamicity Quran</a></li>
            </ul>
          </li>
          <li><Link href="/sacred-texts/torah" className="text-blue-600 hover:underline">Torah</Link> – Hebrew and English, commentaries
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://www.sefaria.org/texts/Tanakh/Torah" target="_blank" rel="noopener noreferrer" className="underline">Sefaria Torah</a></li>
              <li><a href="https://www.chabad.org/library/bible_cdo/aid/63255/jewish/The-Torah.htm" target="_blank" rel="noopener noreferrer" className="underline">Chabad Torah</a></li>
            </ul>
          </li>
          <li><Link href="/sacred-texts/buddhist" className="text-blue-600 hover:underline">Buddhist Sutras</Link> – Pali Canon, Mahayana, Vajrayana texts
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://www.accesstoinsight.org/" target="_blank" rel="noopener noreferrer" className="underline">Access to Insight</a></li>
              <li><a href="https://www.84000.co/" target="_blank" rel="noopener noreferrer" className="underline">84000: Translating the Words of the Buddha</a></li>
            </ul>
          </li>
          <li><Link href="/sacred-texts/hindu" className="text-blue-600 hover:underline">Hindu Scriptures</Link> – Vedas, Upanishads, Bhagavad Gita
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://www.holy-bhagavad-gita.org/" target="_blank" rel="noopener noreferrer" className="underline">Holy Bhagavad Gita</a></li>
              <li><a href="https://www.sacred-texts.com/hin/" target="_blank" rel="noopener noreferrer" className="underline">Sacred-texts.com Hinduism</a></li>
            </ul>
          </li>
          <li><Link href="/sacred-texts/sikh" className="text-blue-600 hover:underline">Guru Granth Sahib</Link> – Sikh scripture, English and Gurmukhi
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://www.sikhnet.com/sggs" target="_blank" rel="noopener noreferrer" className="underline">SikhNet Guru Granth Sahib</a></li>
              <li><a href="https://www.srigranth.org/servlet/gurbani.gurbani?Action=Page&Param=1&english=t&id=1" target="_blank" rel="noopener noreferrer" className="underline">SriGranth.org</a></li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Compare & Study Scriptures</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/studies/comparative" className="text-blue-600 hover:underline">Comparative Studies</Link> – Compare texts across traditions</li>
          <li><Link href="/studies/commentaries" className="text-blue-600 hover:underline">Scripture Commentaries</Link></li>
          <li><Link href="/studies/guides" className="text-blue-600 hover:underline">Study Guides</Link></li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Explore More</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/resources" className="text-blue-600 hover:underline">Resource Library</Link></li>
          <li><Link href="/studies" className="text-blue-600 hover:underline">Academic Studies</Link></li>
          <li><Link href="/meditation" className="text-blue-600 hover:underline">Meditation Practices</Link></li>
          <li><Link href="/listen" className="text-blue-600 hover:underline">Audio Scriptures</Link></li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Help & Support</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>All scriptures are verified and accessible</li>
          <li>Mobile-friendly and inclusive design</li>
          <li>Need help? <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link></li>
        </ul>
      </section>
    </main>
  )
}

export default SacredTextsPage 