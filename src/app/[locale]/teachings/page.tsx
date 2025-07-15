import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Teachings - Religious & Spiritual Teachings | Zion.FM',
  description: 'Explore religious teachings, sermons, devotionals, and spiritual guidance from all major world religions. Access Bible teachings, Quranic lessons, Buddhist dharma talks, and more.',
  keywords: [
    'religious teachings', 'sermons', 'devotionals', 'bible teachings', 'spiritual guidance', 'dharma talks', 'religious education', 'Zion.FM'
  ],
  openGraph: {
    title: 'Teachings - Religious & Spiritual Teachings | Zion.FM',
    description: 'Explore religious teachings, sermons, devotionals, and spiritual guidance from all major world religions. Access Bible teachings, Quranic lessons, Buddhist dharma talks, and more.',
    type: 'website'
  }
}

function TeachingsPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Teachings: Religious & Spiritual Guidance</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Discover comprehensive teachings from all major world religions: sermons, devotionals, scripture studies, and spiritual guidance. Access Bible teachings, Quranic lessons, Buddhist dharma talks, Hindu wisdom, and more. All teachings are interlinked with scripture and study resources.
      </p>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Featured Teaching Collections</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/teachings/sermons" className="text-blue-600 hover:underline">Sermons & Homilies</Link> – Christian, Jewish, and interfaith sermons</li>
          <li><Link href="/teachings/devotionals" className="text-blue-600 hover:underline">Daily Devotionals</Link> – Short daily spiritual reflections</li>
          <li><Link href="/teachings/bible" className="text-blue-600 hover:underline">Bible Teachings</Link> – Scripture studies and biblical lessons</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Scripture-Based Teachings</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <Link href="/teachings/bible" className="text-blue-600 hover:underline">Bible Teachings</Link> – New Testament and Old Testament studies
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://www.bibleproject.com/" target="_blank" rel="noopener noreferrer" className="underline">BibleProject Resources</a></li>
              <li><a href="https://www.desiringgod.org/" target="_blank" rel="noopener noreferrer" className="underline">Desiring God</a></li>
            </ul>
          </li>
          <li>
            <Link href="/sacred-texts/quran" className="text-blue-600 hover:underline">Quranic Teachings</Link> – Islamic lessons and tafsir
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://quran.com/" target="_blank" rel="noopener noreferrer" className="underline">Quran.com</a></li>
              <li><a href="https://www.islamicity.org/" target="_blank" rel="noopener noreferrer" className="underline">Islamicity</a></li>
            </ul>
          </li>
          <li>
            <Link href="/sacred-texts/torah" className="text-blue-600 hover:underline">Torah Teachings</Link> – Jewish learning and commentary
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://www.sefaria.org/" target="_blank" rel="noopener noreferrer" className="underline">Sefaria</a></li>
              <li><a href="https://www.chabad.org/" target="_blank" rel="noopener noreferrer" className="underline">Chabad.org</a></li>
            </ul>
          </li>
          <li>
            <Link href="/sacred-texts/buddhist" className="text-blue-600 hover:underline">Buddhist Dharma Talks</Link> – Meditation and wisdom teachings</li>
          <li>
            <Link href="/sacred-texts/hindu" className="text-blue-600 hover:underline">Hindu Wisdom</Link> – Vedantic and yogic teachings</li>
          <li>
            <Link href="/sacred-texts/sikh" className="text-blue-600 hover:underline">Sikh Teachings</Link> – Gurbani and spiritual guidance</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Sermons & Homilies</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <Link href="/teachings/sermons" className="text-blue-600 hover:underline">Sermon Library</Link> – Christian, Jewish, and interfaith sermons
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://www.sermoncentral.com/" target="_blank" rel="noopener noreferrer" className="underline">SermonCentral</a></li>
              <li><a href="https://www.preachingtoday.com/" target="_blank" rel="noopener noreferrer" className="underline">Preaching Today</a></li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Daily Devotionals</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <Link href="/teachings/devotionals" className="text-blue-600 hover:underline">Devotional Library</Link> – Daily spiritual reflections
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://www.ourdailybread.org/" target="_blank" rel="noopener noreferrer" className="underline">Our Daily Bread</a></li>
              <li><a href="https://www.upperroom.org/" target="_blank" rel="noopener noreferrer" className="underline">Upper Room</a></li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Religious Tradition Teachings</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/religion/christianity/teachings" className="text-blue-600 hover:underline">Christian Teachings</Link></li>
          <li><Link href="/religion/islam/teachings" className="text-blue-600 hover:underline">Islamic Teachings</Link></li>
          <li><Link href="/religion/buddhism/teachings" className="text-blue-600 hover:underline">Buddhist Teachings</Link></li>
          <li><Link href="/religion/hinduism/teachings" className="text-blue-600 hover:underline">Hindu Teachings</Link></li>
          <li><Link href="/religion/judaism/teachings" className="text-blue-600 hover:underline">Jewish Teachings</Link></li>
          <li><Link href="/religion/sikhism/teachings" className="text-blue-600 hover:underline">Sikh Teachings</Link></li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Study & Learning Resources</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/studies" className="text-blue-600 hover:underline">Academic Studies</Link></li>
          <li><Link href="/studies/guides" className="text-blue-600 hover:underline">Study Guides</Link></li>
          <li><Link href="/studies/commentaries" className="text-blue-600 hover:underline">Scripture Commentaries</Link></li>
          <li><Link href="/studies/theology" className="text-blue-600 hover:underline">Theological Studies</Link></li>
          <li><Link href="/studies/comparative" className="text-blue-600 hover:underline">Comparative Religion</Link></li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Explore More</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/listen" className="text-blue-600 hover:underline">Audio Teachings</Link></li>
          <li><Link href="/meditation" className="text-blue-600 hover:underline">Meditation Guidance</Link></li>
          <li><Link href="/resources" className="text-blue-600 hover:underline">Teaching Resources</Link></li>
          <li><Link href="/sacred-texts" className="text-blue-600 hover:underline">Sacred Texts</Link></li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Help & Support</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>All teachings are verified and regularly updated</li>
          <li>Mobile-friendly and accessible design</li>
          <li>Need help? <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link></li>
        </ul>
      </section>
    </main>
  )
}

export default TeachingsPage 