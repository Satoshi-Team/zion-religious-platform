import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Listen - Audio Resources | Zion.FM',
  description: 'Explore a vast library of religious audio resources: sacred texts, music, sermons, and meditations. Listen to the Bible, Quran, Torah, and more. Discover playlists, podcasts, and official audio links for every tradition.',
  keywords: [
    'audio', 'listen', 'bible audio', 'quran audio', 'torah audio', 'religious music', 'sermons', 'podcasts', 'spiritual audio', 'Zion.FM'
  ],
  openGraph: {
    title: 'Listen - Audio Resources | Zion.FM',
    description: 'Explore a vast library of religious audio resources: sacred texts, music, sermons, and meditations. Listen to the Bible, Quran, Torah, and more. Discover playlists, podcasts, and official audio links for every tradition.',
    type: 'website'
  }
}

function ListenPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Listen: Audio Resources</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Discover a comprehensive collection of religious audio: sacred texts, music, sermons, meditations, and podcasts. Stream or download audio for study, worship, and inspiration. All resources are free and interlinked with scripture and study guides.
      </p>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Featured Audio Playlists</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/resources/music" className="text-blue-600 hover:underline">Sacred Music Library</Link> – Curated playlists from all major traditions</li>
          <li><Link href="/teachings/sermons" className="text-blue-600 hover:underline">Sermons & Homilies</Link> – Christian, Jewish, and interfaith sermons</li>
          <li><Link href="/teachings/devotionals" className="text-blue-600 hover:underline">Daily Devotionals</Link> – Short daily audio reflections</li>
          <li><Link href="/meditation" className="text-blue-600 hover:underline">Guided Meditations</Link> – Buddhist, Christian, Hindu, and Islamic meditations</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Sacred Texts Audio</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <Link href="/sacred-texts/bible" className="text-blue-600 hover:underline">Bible Audio</Link> – Listen to the Bible in multiple translations
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://www.biblegateway.com/resources/audio/" target="_blank" rel="noopener noreferrer" className="underline">BibleGateway Official Audio</a></li>
              <li><a href="https://www.faithcomesbyhearing.com/audio-bible-resources" target="_blank" rel="noopener noreferrer" className="underline">Faith Comes By Hearing</a></li>
            </ul>
          </li>
          <li>
            <Link href="/sacred-texts/quran" className="text-blue-600 hover:underline">Quran Audio</Link> – Recitations in Arabic and translations
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://quran.com/audio" target="_blank" rel="noopener noreferrer" className="underline">Quran.com Official Audio</a></li>
              <li><a href="https://www.islamicity.org/quransearch/" target="_blank" rel="noopener noreferrer" className="underline">Islamicity Quran Audio</a></li>
            </ul>
          </li>
          <li>
            <Link href="/sacred-texts/torah" className="text-blue-600 hover:underline">Torah Audio</Link> – Hebrew and English readings
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://www.sefaria.org/texts/Tanakh/Torah?lang=bi&with=Audio&lang2=en" target="_blank" rel="noopener noreferrer" className="underline">Sefaria Torah Audio</a></li>
            </ul>
          </li>
          <li>
            <Link href="/sacred-texts/buddhist" className="text-blue-600 hover:underline">Buddhist Sutras Audio</Link> – Chanting and readings</li>
          <li>
            <Link href="/sacred-texts/hindu" className="text-blue-600 hover:underline">Hindu Scriptures Audio</Link> – Vedas, Upanishads, Gita recitations</li>
          <li>
            <Link href="/sacred-texts/sikh" className="text-blue-600 hover:underline">Guru Granth Sahib Audio</Link> – Sikh scripture recitations</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Podcasts & Talks</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><a href="https://www.onbeing.org/series/podcast/" target="_blank" rel="noopener noreferrer" className="underline">On Being Podcast</a> – Interfaith spiritual conversations</li>
          <li><a href="https://www.bibleproject.com/podcasts/" target="_blank" rel="noopener noreferrer" className="underline">BibleProject Podcast</a> – Bible study and theology</li>
          <li><a href="https://www.buddhistgeeks.org/podcast/" target="_blank" rel="noopener noreferrer" className="underline">Buddhist Geeks</a> – Buddhist philosophy and meditation</li>
          <li><a href="https://www.hinduamerican.org/podcast" target="_blank" rel="noopener noreferrer" className="underline">Hindu American Foundation Podcast</a></li>
          <li><a href="https://www.sikhnet.com/gurbani-radio" target="_blank" rel="noopener noreferrer" className="underline">SikhNet Gurbani Radio</a></li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Explore More Audio</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/resources/music" className="text-blue-600 hover:underline">Sacred Music</Link></li>
          <li><Link href="/resources/art" className="text-blue-600 hover:underline">Religious Art (Audio Tours)</Link></li>
          <li><Link href="/studies/meditation" className="text-blue-600 hover:underline">Meditation Studies</Link></li>
          <li><Link href="/studies" className="text-blue-600 hover:underline">All Studies</Link></li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Accessibility & Help</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>All audio is accessible and mobile-friendly</li>
          <li>Transcripts and translations available for most resources</li>
          <li>Need help? <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link></li>
        </ul>
      </section>
    </main>
  )
}

export default ListenPage 