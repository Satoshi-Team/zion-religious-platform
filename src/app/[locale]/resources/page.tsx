import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resources - Religious & Spiritual Resources | Zion.FM',
  description: 'Comprehensive religious resources: history, sacred places, art, music, calendar, and cultural heritage. Explore world religions through multimedia resources, official links, and curated collections.',
  keywords: [
    'religious resources', 'sacred places', 'religious art', 'sacred music', 'religious calendar', 'religious history', 'spiritual resources', 'Zion.FM'
  ],
  openGraph: {
    title: 'Resources - Religious & Spiritual Resources | Zion.FM',
    description: 'Comprehensive religious resources: history, sacred places, art, music, calendar, and cultural heritage. Explore world religions through multimedia resources, official links, and curated collections.',
    type: 'website'
  }
}

function ResourcesPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Resources: Religious & Spiritual</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Discover comprehensive resources for exploring world religions: historical timelines, sacred places, artistic traditions, musical heritage, and cultural calendars. All resources are curated, verified, and interlinked with scripture and study materials.
      </p>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Featured Resource Collections</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/resources/history" className="text-blue-600 hover:underline">Religious History</Link> – Comprehensive timelines and historical developments</li>
          <li><Link href="/resources/places" className="text-blue-600 hover:underline">Sacred Places</Link> – Temples, churches, mosques, and pilgrimage sites</li>
          <li><Link href="/resources/art" className="text-blue-600 hover:underline">Religious Art</Link> – Iconography, architecture, and artistic traditions</li>
          <li><Link href="/resources/music" className="text-blue-600 hover:underline">Sacred Music</Link> – Hymns, chants, and musical traditions</li>
          <li><Link href="/resources/calendar" className="text-blue-600 hover:underline">Religious Calendar</Link> – Festivals, holy days, and observances</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Historical Resources</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <Link href="/resources/history" className="text-blue-600 hover:underline">Religious History Overview</Link> – Timeline of world religions
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://www.britannica.com/topic/religion" target="_blank" rel="noopener noreferrer" className="underline">Encyclopedia Britannica Religion</a></li>
              <li><a href="https://www.metmuseum.org/toah/ht/?period=01&region=waa" target="_blank" rel="noopener noreferrer" className="underline">Metropolitan Museum Timeline</a></li>
            </ul>
          </li>
          <li><Link href="/studies/history" className="text-blue-600 hover:underline">Academic History Studies</Link></li>
          <li><Link href="/studies/comparative" className="text-blue-600 hover:underline">Comparative Religious Studies</Link></li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Sacred Places & Architecture</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <Link href="/resources/places" className="text-blue-600 hover:underline">Sacred Places Directory</Link> – Temples, churches, mosques, and shrines
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://whc.unesco.org/en/list/" target="_blank" rel="noopener noreferrer" className="underline">UNESCO World Heritage Sites</a></li>
              <li><a href="https://www.sacred-destinations.com/" target="_blank" rel="noopener noreferrer" className="underline">Sacred Destinations</a></li>
            </ul>
          </li>
          <li><Link href="/resources/art" className="text-blue-600 hover:underline">Religious Architecture</Link></li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Artistic & Cultural Resources</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <Link href="/resources/art" className="text-blue-600 hover:underline">Religious Art Collections</Link> – Iconography and artistic traditions
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://www.metmuseum.org/art/collection/search?department=19" target="_blank" rel="noopener noreferrer" className="underline">Metropolitan Museum Islamic Art</a></li>
              <li><a href="https://www.vam.ac.uk/collections/religion" target="_blank" rel="noopener noreferrer" className="underline">V&A Religious Collections</a></li>
            </ul>
          </li>
          <li>
            <Link href="/resources/music" className="text-blue-600 hover:underline">Sacred Music Library</Link> – Hymns, chants, and musical traditions
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://www.loc.gov/collections/sacred-music/" target="_blank" rel="noopener noreferrer" className="underline">Library of Congress Sacred Music</a></li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Calendar & Observances</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <Link href="/resources/calendar" className="text-blue-600 hover:underline">Religious Calendar</Link> – Festivals, holy days, and observances
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://www.interfaith-calendar.org/" target="_blank" rel="noopener noreferrer" className="underline">Interfaith Calendar</a></li>
              <li><a href="https://www.timeanddate.com/holidays/" target="_blank" rel="noopener noreferrer" className="underline">Time and Date Holidays</a></li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Study & Research Resources</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/studies" className="text-blue-600 hover:underline">Academic Studies</Link></li>
          <li><Link href="/studies/guides" className="text-blue-600 hover:underline">Study Guides</Link></li>
          <li><Link href="/studies/commentaries" className="text-blue-600 hover:underline">Scripture Commentaries</Link></li>
          <li><Link href="/studies/academic" className="text-blue-600 hover:underline">Academic Resources</Link></li>
          <li><a href="https://www.jstor.org/subject/religion" target="_blank" rel="noopener noreferrer" className="underline">JSTOR Religion Collection</a></li>
          <li><a href="https://www.oxfordbibliographies.com/obo/page/religion" target="_blank" rel="noopener noreferrer" className="underline">Oxford Bibliographies Religion</a></li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Explore More</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/listen" className="text-blue-600 hover:underline">Audio Resources</Link></li>
          <li><Link href="/teachings" className="text-blue-600 hover:underline">Teachings & Sermons</Link></li>
          <li><Link href="/meditation" className="text-blue-600 hover:underline">Meditation Resources</Link></li>
          <li><Link href="/sacred-texts" className="text-blue-600 hover:underline">Sacred Texts</Link></li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Help & Support</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>All resources are verified and regularly updated</li>
          <li>Mobile-friendly and accessible design</li>
          <li>Need help? <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link></li>
        </ul>
      </section>
    </main>
  )
}

export default ResourcesPage 