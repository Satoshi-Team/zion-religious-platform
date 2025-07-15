import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Religious & Spiritual Articles | Zion.FM',
  description: 'Explore religious and spiritual articles, insights, and perspectives from all major world religions. Read about theology, history, practices, and interfaith dialogue.',
  keywords: [
    'religious blog', 'spiritual articles', 'theology', 'interfaith', 'religious history', 'spiritual insights', 'Zion.FM'
  ],
  openGraph: {
    title: 'Blog - Religious & Spiritual Articles | Zion.FM',
    description: 'Explore religious and spiritual articles, insights, and perspectives from all major world religions. Read about theology, history, practices, and interfaith dialogue.',
    type: 'website'
  }
}

function BlogPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog: Religious & Spiritual Insights</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Discover insightful articles, theological perspectives, and spiritual wisdom from all major world religions. Explore interfaith dialogue, historical insights, and contemporary religious thought. All articles are carefully researched and interlinked with scripture and study resources.
      </p>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Featured Article Categories</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/blog/theology" className="text-blue-600 hover:underline">Theology & Doctrine</Link> – Deep theological insights and discussions</li>
          <li><Link href="/blog/history" className="text-blue-600 hover:underline">Religious History</Link> – Historical developments and events</li>
          <li><Link href="/blog/practices" className="text-blue-600 hover:underline">Spiritual Practices</Link> – Meditation, prayer, and rituals</li>
          <li><Link href="/blog/interfaith" className="text-blue-600 hover:underline">Interfaith Dialogue</Link> – Understanding between traditions</li>
          <li><Link href="/blog/contemporary" className="text-blue-600 hover:underline">Contemporary Issues</Link> – Modern religious perspectives</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Religion-Specific Articles</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <Link href="/religion/christianity/blog" className="text-blue-600 hover:underline">Christianity Articles</Link> – Christian theology and practice
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://www.christianitytoday.com/" target="_blank" rel="noopener noreferrer" className="underline">Christianity Today</a></li>
              <li><a href="https://www.firstthings.com/" target="_blank" rel="noopener noreferrer" className="underline">First Things</a></li>
            </ul>
          </li>
          <li>
            <Link href="/religion/islam/blog" className="text-blue-600 hover:underline">Islam Articles</Link> – Islamic thought and practice
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://www.islamicity.org/" target="_blank" rel="noopener noreferrer" className="underline">Islamicity</a></li>
              <li><a href="https://www.islamicfoundation.org/" target="_blank" rel="noopener noreferrer" className="underline">Islamic Foundation</a></li>
            </ul>
          </li>
          <li>
            <Link href="/religion/buddhism/blog" className="text-blue-600 hover:underline">Buddhism Articles</Link> – Buddhist philosophy and practice
            <ul className="ml-4 text-sm text-muted-foreground">
              <li><a href="https://www.lionsroar.com/" target="_blank" rel="noopener noreferrer" className="underline">Lion's Roar</a></li>
              <li><a href="https://www.tricycle.org/" target="_blank" rel="noopener noreferrer" className="underline">Tricycle</a></li>
            </ul>
          </li>
          <li>
            <Link href="/religion/hinduism/blog" className="text-blue-600 hover:underline">Hinduism Articles</Link> – Hindu philosophy and practice</li>
          <li>
            <Link href="/religion/judaism/blog" className="text-blue-600 hover:underline">Judaism Articles</Link> – Jewish thought and practice</li>
          <li>
            <Link href="/religion/sikhism/blog" className="text-blue-600 hover:underline">Sikhism Articles</Link> – Sikh philosophy and practice</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Featured Topics</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/blog/meditation" className="text-blue-600 hover:underline">Meditation & Mindfulness</Link></li>
          <li><Link href="/blog/scripture" className="text-blue-600 hover:underline">Scripture Study</Link></li>
          <li><Link href="/blog/ethics" className="text-blue-600 hover:underline">Religious Ethics</Link></li>
          <li><Link href="/blog/philosophy" className="text-blue-600 hover:underline">Religious Philosophy</Link></li>
          <li><Link href="/blog/science" className="text-blue-600 hover:underline">Religion & Science</Link></li>
          <li><Link href="/blog/art" className="text-blue-600 hover:underline">Religious Art & Culture</Link></li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Academic & Research</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/studies/academic" className="text-blue-600 hover:underline">Academic Studies</Link></li>
          <li><Link href="/studies/research" className="text-blue-600 hover:underline">Research Articles</Link></li>
          <li><a href="https://www.jstor.org/subject/religion" target="_blank" rel="noopener noreferrer" className="underline">JSTOR Religion</a></li>
          <li><a href="https://www.oxfordbibliographies.com/obo/page/religion" target="_blank" rel="noopener noreferrer" className="underline">Oxford Bibliographies</a></li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">External Blog Resources</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><a href="https://www.huffpost.com/religion" target="_blank" rel="noopener noreferrer" className="underline">HuffPost Religion</a></li>
          <li><a href="https://religionnews.com/" target="_blank" rel="noopener noreferrer" className="underline">Religion News Service</a></li>
          <li><a href="https://www.patheos.com/" target="_blank" rel="noopener noreferrer" className="underline">Patheos</a></li>
          <li><a href="https://www.beliefnet.com/" target="_blank" rel="noopener noreferrer" className="underline">Beliefnet</a></li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Explore More</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/teachings" className="text-blue-600 hover:underline">Teachings</Link></li>
          <li><Link href="/studies" className="text-blue-600 hover:underline">Studies</Link></li>
          <li><Link href="/resources" className="text-blue-600 hover:underline">Resources</Link></li>
          <li><Link href="/sacred-texts" className="text-blue-600 hover:underline">Sacred Texts</Link></li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Help & Support</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>All articles are carefully researched and verified</li>
          <li>Mobile-friendly and accessible design</li>
          <li>Need help? <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link></li>
        </ul>
      </section>
    </main>
  )
}

export default BlogPage 