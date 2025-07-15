import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - Zion.FM | Religious & Spiritual Resources',
  description: 'Learn about Zion.FM, our mission to provide comprehensive religious and spiritual resources, and our commitment to interfaith understanding and education.',
  keywords: [
    'about Zion.FM', 'religious resources', 'spiritual education', 'interfaith', 'mission', 'Zion.FM'
  ],
  openGraph: {
    title: 'About Us - Zion.FM | Religious & Spiritual Resources',
    description: 'Learn about Zion.FM, our mission to provide comprehensive religious and spiritual resources, and our commitment to interfaith understanding and education.',
    type: 'website'
  }
}

function AboutPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">About Zion.FM</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Zion.FM is dedicated to providing comprehensive, accurate, and accessible religious and spiritual resources for people of all faiths and backgrounds. Our mission is to foster understanding, respect, and dialogue between different religious traditions.
      </p>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="mb-4">
          We believe that understanding different religious traditions is essential for building a more peaceful and harmonious world. Our platform provides:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Comprehensive religious resources and educational materials</li>
          <li>Accurate and respectful information about all major world religions</li>
          <li>Tools for interfaith dialogue and understanding</li>
          <li>Accessible content for people of all backgrounds and abilities</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/sacred-texts" className="text-blue-600 hover:underline">Sacred Texts</Link> – Bible, Quran, Torah, and other religious scriptures</li>
          <li><Link href="/studies" className="text-blue-600 hover:underline">Academic Studies</Link> – Theology, history, and comparative religion</li>
          <li><Link href="/meditation" className="text-blue-600 hover:underline">Meditation Resources</Link> – Guided practices from various traditions</li>
          <li><Link href="/resources" className="text-blue-600 hover:underline">Cultural Resources</Link> – Art, music, and historical materials</li>
          <li><Link href="/teachings" className="text-blue-600 hover:underline">Religious Teachings</Link> – Sermons, devotionals, and spiritual guidance</li>
          <li><Link href="/blog" className="text-blue-600 hover:underline">Articles & Insights</Link> – Contemporary religious perspectives</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Accuracy:</strong> All content is carefully researched and verified</li>
          <li><strong>Respect:</strong> We treat all religious traditions with dignity and respect</li>
          <li><strong>Accessibility:</strong> Content is designed to be accessible to everyone</li>
          <li><strong>Inclusivity:</strong> We welcome people of all faiths and backgrounds</li>
          <li><strong>Education:</strong> We focus on learning and understanding</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">External Resources</h2>
        <p className="mb-4">We collaborate with and recommend these trusted organizations:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li><a href="https://www.interfaith.org/" target="_blank" rel="noopener noreferrer" className="underline">Interfaith Alliance</a> – Promoting interfaith cooperation</li>
          <li><a href="https://www.religionandpubliclife.org/" target="_blank" rel="noopener noreferrer" className="underline">Religion & Public Life</a> – Academic religious studies</li>
          <li><a href="https://www.parliamentofreligions.org/" target="_blank" rel="noopener noreferrer" className="underline">Parliament of Religions</a> – Global interfaith dialogue</li>
          <li><a href="https://www.uri.org/" target="_blank" rel="noopener noreferrer" className="underline">United Religions Initiative</a> – Interfaith cooperation</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Contact & Support</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link> – Get in touch with questions or feedback</li>
          <li><Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> – How we protect your information</li>
          <li>Email: info@zion.fm</li>
          <li>For technical support or content suggestions</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Explore Our Platform</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/sitemap" className="text-blue-600 hover:underline">Complete Sitemap</Link> – All pages and resources</li>
          <li><Link href="/resources" className="text-blue-600 hover:underline">Resource Library</Link> – Comprehensive religious materials</li>
          <li><Link href="/studies" className="text-blue-600 hover:underline">Study Materials</Link> – Academic and educational resources</li>
          <li><Link href="/blog" className="text-blue-600 hover:underline">Latest Articles</Link> – Current religious perspectives</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Help & Support</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>All content is regularly updated and verified</li>
          <li>Mobile-friendly and accessible design</li>
          <li>Need help? <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link></li>
        </ul>
      </section>
    </main>
  )
}

export default AboutPage 