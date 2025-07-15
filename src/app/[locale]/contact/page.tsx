import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us - Zion.FM | Get in Touch',
  description: 'Contact Zion.FM for questions, feedback, or support. We welcome inquiries about religious resources, technical issues, or content suggestions.',
  keywords: [
    'contact Zion.FM', 'support', 'feedback', 'questions', 'help', 'Zion.FM'
  ],
  openGraph: {
    title: 'Contact Us - Zion.FM | Get in Touch',
    description: 'Contact Zion.FM for questions, feedback, or support. We welcome inquiries about religious resources, technical issues, or content suggestions.',
    type: 'website'
  }
}

function ContactPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-muted-foreground mb-8">
        We welcome your questions, feedback, and suggestions. Whether you need help finding resources, have technical issues, or want to contribute content, we're here to help.
      </p>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Email:</strong> info@zion.fm</li>
          <li><strong>Support:</strong> support@zion.fm</li>
          <li><strong>Content Suggestions:</strong> content@zion.fm</li>
          <li><strong>Technical Issues:</strong> tech@zion.fm</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">How We Can Help</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Resource Questions:</strong> Help finding specific religious materials or information</li>
          <li><strong>Technical Support:</strong> Website issues, accessibility concerns, or mobile problems</li>
          <li><strong>Content Feedback:</strong> Suggestions for new content or improvements</li>
          <li><strong>Accuracy Reports:</strong> If you find any errors or inaccuracies</li>
          <li><strong>Accessibility:</strong> Help making our content more accessible</li>
          <li><strong>Partnership:</strong> Collaboration opportunities with religious organizations</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/about" className="text-blue-600 hover:underline">About Zion.FM</Link> – Learn more about our mission and values</li>
          <li><Link href="/sitemap" className="text-blue-600 hover:underline">Sitemap</Link> – Find all pages and resources</li>
          <li><Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> – How we protect your information</li>
          <li><Link href="/resources" className="text-blue-600 hover:underline">Resource Library</Link> – Comprehensive religious materials</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">External Support Resources</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><a href="https://www.interfaith.org/contact" target="_blank" rel="noopener noreferrer" className="underline">Interfaith Alliance</a> – Interfaith cooperation and dialogue</li>
          <li><a href="https://www.religionandpubliclife.org/contact" target="_blank" rel="noopener noreferrer" className="underline">Religion & Public Life</a> – Academic religious studies</li>
          <li><a href="https://www.parliamentofreligions.org/contact" target="_blank" rel="noopener noreferrer" className="underline">Parliament of Religions</a> – Global interfaith dialogue</li>
          <li><a href="https://www.uri.org/contact" target="_blank" rel="noopener noreferrer" className="underline">United Religions Initiative</a> – Interfaith cooperation</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Response Times</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>General Inquiries:</strong> Within 24-48 hours</li>
          <li><strong>Technical Support:</strong> Within 12-24 hours</li>
          <li><strong>Urgent Issues:</strong> Within 4-8 hours</li>
          <li><strong>Content Suggestions:</strong> Within 48-72 hours</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Explore Our Platform</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/sacred-texts" className="text-blue-600 hover:underline">Sacred Texts</Link> – Bible, Quran, Torah, and more</li>
          <li><Link href="/studies" className="text-blue-600 hover:underline">Studies</Link> – Academic and educational resources</li>
          <li><Link href="/meditation" className="text-blue-600 hover:underline">Meditation</Link> – Guided practices and resources</li>
          <li><Link href="/teachings" className="text-blue-600 hover:underline">Teachings</Link> – Religious guidance and sermons</li>
          <li><Link href="/blog" className="text-blue-600 hover:underline">Blog</Link> – Articles and insights</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Help & Support</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>We respond to all inquiries promptly and professionally</li>
          <li>Your privacy and security are our top priorities</li>
          <li>We welcome feedback to improve our platform</li>
        </ul>
      </section>
    </main>
  )
}

export default ContactPage 