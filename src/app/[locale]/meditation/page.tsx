import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Meditation - Practices & Wisdom | Zion.FM',
  description: 'Explore meditation practices from all major world religions. Learn Christian, Buddhist, Hindu, and Islamic meditation with verified examples, quotes, and practical guidance.',
  keywords: [
    'meditation', 'spiritual practice', 'Christian meditation', 'Buddhist meditation', 'Hindu meditation', 'Islamic meditation', 'mindfulness', 'zen', 'vipassana', 'yoga', 'sufi', 'Zion.FM'
  ],
  openGraph: {
    title: 'Meditation - Practices & Wisdom | Zion.FM',
    description: 'Explore meditation practices from all major world religions. Learn Christian, Buddhist, Hindu, and Islamic meditation with verified examples, quotes, and practical guidance.',
    type: 'website'
  }
}

function MeditationPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Meditation: Practices & Wisdom</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Discover meditation practices from Christianity, Buddhism, Hinduism, Islam, and modern traditions. Each section features verified, direct examples and quotes to inspire your practice. All resources are interlinked with scripture, study guides, and official sources.
      </p>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Featured Meditation Traditions</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/meditation/christian" className="text-blue-600 hover:underline">Christian Meditation</Link> – Contemplative prayer, Lectio Divina, Centering Prayer, Jesus Prayer</li>
          <li><Link href="/meditation/buddhist" className="text-blue-600 hover:underline">Buddhist Meditation</Link> – Mindfulness, Vipassana, Zen, Loving-kindness, Tonglen</li>
          <li><Link href="/meditation/hindu" className="text-blue-600 hover:underline">Hindu Meditation</Link> – Mantra, Yoga, Vedantic meditation, Yoga Nidra</li>
          <li><Link href="/meditation/islamic" className="text-blue-600 hover:underline">Islamic Meditation</Link> – Dhikr, Sufi Muraqaba, breath practices, Sufi whirling</li>
          <li><Link href="/meditation/modern" className="text-blue-600 hover:underline">Modern & Interfaith</Link> – Mindfulness, gratitude, Transcendental Meditation, secular practices</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Verified Examples & Quotes</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-blue-700">Christian Meditation</h3>
            <blockquote className="border-l-4 pl-4 italic text-muted-foreground mb-2">"In daily life we must see that it is not happiness that makes us grateful, but gratefulness that makes us happy."<br/>— Brother David Steindl-Rast</blockquote>
            <p className="text-sm">Practice: <Link href="/meditation/christian/lectio-divina" className="underline">Lectio Divina</Link> – Meditative scripture reading</p>
            <p className="text-sm">Practice: <Link href="/meditation/christian/centering" className="underline">Centering Prayer</Link> – Silent contemplation</p>
            <p className="text-sm">Practice: <Link href="/meditation/christian/contemplative" className="underline">Contemplative Prayer</Link> – Deep spiritual reflection</p>
            <a href="https://gratefulness.org/resource/lectio-divina/" target="_blank" rel="noopener noreferrer" className="underline text-xs">Official Gratefulness.org Guide</a>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-700">Buddhist Meditation</h3>
            <blockquote className="border-l-4 pl-4 italic text-muted-foreground mb-2">"You yourself must strive. The Buddhas only point the way."<br/>— Dhammapada 276</blockquote>
            <p className="text-sm">Practice: <Link href="/meditation/buddhist/mindfulness" className="underline">Mindfulness (Sati)</Link> – Present-moment awareness</p>
            <p className="text-sm">Practice: <Link href="/meditation/buddhist/vipassana" className="underline">Vipassana</Link> – Insight meditation</p>
            <p className="text-sm">Practice: <Link href="/meditation/buddhist/zen" className="underline">Zen Meditation</Link> – Zazen sitting practice</p>
            <p className="text-sm">Practice: <Link href="/meditation/buddhist/loving-kindness" className="underline">Loving-kindness (Metta)</Link> – Compassion meditation</p>
            <a href="https://www.accesstoinsight.org/tipitaka/kn/dhp/dhp.20.budd.html#dhp-276" target="_blank" rel="noopener noreferrer" className="underline text-xs">Access to Insight: Dhammapada</a>
          </div>
          <div>
            <h3 className="font-semibold text-orange-700">Hindu Meditation</h3>
            <blockquote className="border-l-4 pl-4 italic text-muted-foreground mb-2">"When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place."<br/>— Bhagavad Gita 6:19</blockquote>
            <p className="text-sm">Practice: <Link href="/meditation/hindu/mantra" className="underline">Mantra Meditation</Link> – Repetition of sacred sounds</p>
            <p className="text-sm">Practice: <Link href="/meditation/hindu/yoga" className="underline">Yoga Meditation</Link> – Asana and pranayama</p>
            <p className="text-sm">Practice: <Link href="/meditation/hindu/vedanta" className="underline">Vedantic Meditation</Link> – Self-inquiry (Atma Vichara)</p>
            <p className="text-sm">Practice: <Link href="/meditation/hindu/yoga-nidra" className="underline">Yoga Nidra</Link> – Conscious sleep meditation</p>
            <a href="https://www.holy-bhagavad-gita.org/chapter/6/verse/19" target="_blank" rel="noopener noreferrer" className="underline text-xs">Read Bhagavad Gita 6:19</a>
          </div>
          <div>
            <h3 className="font-semibold text-green-700">Islamic Meditation</h3>
            <blockquote className="border-l-4 pl-4 italic text-muted-foreground mb-2">"Verily, in the remembrance of Allah do hearts find rest."<br/>— Quran 13:28</blockquote>
            <p className="text-sm">Practice: <Link href="/meditation/islamic/dhikr" className="underline">Dhikr</Link> – Repetitive remembrance of God</p>
            <p className="text-sm">Practice: <Link href="/meditation/islamic/sufi" className="underline">Sufi Meditation</Link> – Mystical practices</p>
            <p className="text-sm">Practice: <Link href="/meditation/islamic/muraqaba" className="underline">Muraqaba</Link> – Sufi contemplation</p>
            <p className="text-sm">Practice: <Link href="/meditation/islamic/breath" className="underline">Breath Awareness</Link> – Islamic breathing practices</p>
            <a href="https://quran.com/13/28" target="_blank" rel="noopener noreferrer" className="underline text-xs">Read Quran 13:28</a>
          </div>
          <div>
            <h3 className="font-semibold text-purple-700">Modern & Interfaith Meditation</h3>
            <blockquote className="border-l-4 pl-4 italic text-muted-foreground mb-2">"Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom."<br/>— Viktor E. Frankl</blockquote>
            <p className="text-sm">Practice: <Link href="/meditation/modern" className="underline">Mindfulness & Gratitude</Link> – Secular and interfaith approaches</p>
            <p className="text-sm">Practice: <Link href="/meditation/modern/transcendental" className="underline">Transcendental Meditation</Link> – TM technique</p>
            <p className="text-sm">Practice: <Link href="/meditation/modern/body-scan" className="underline">Body Scan</Link> – Progressive relaxation</p>
            <p className="text-sm">Practice: <Link href="/meditation/modern/walking" className="underline">Walking Meditation</Link> – Mindful movement</p>
            <a href="https://www.mindful.org/what-is-mindfulness/" target="_blank" rel="noopener noreferrer" className="underline text-xs">Mindful.org: What is Mindfulness?</a>
          </div>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Additional Meditation Practices</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Zen Buddhism:</strong> Zazen (sitting meditation), Koan practice, Shikantaza</li>
          <li><strong>Tibetan Buddhism:</strong> Tonglen (compassion meditation), Dzogchen, Mahamudra</li>
          <li><strong>Jainism:</strong> Preksha meditation, Samayika (equanimity)</li>
          <li><strong>Sikhism:</strong> Simran (remembrance), Naam Japna</li>
          <li><strong>Judaism:</strong> Hitbodedut (self-seclusion), Kabbalistic meditation</li>
          <li><strong>Taoism:</strong> Inner alchemy, Qigong meditation</li>
          <li><strong>Secular:</strong> Mindfulness-Based Stress Reduction (MBSR), Loving-kindness</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Explore More Meditation</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li><Link href="/studies/meditation" className="text-blue-600 hover:underline">Meditation Studies</Link></li>
          <li><Link href="/resources/music" className="text-blue-600 hover:underline">Sacred Music for Meditation</Link></li>
          <li><Link href="/resources/art" className="text-blue-600 hover:underline">Religious Art & Icons</Link></li>
          <li><Link href="/listen" className="text-blue-600 hover:underline">Guided Audio Meditations</Link></li>
          <li><Link href="/teachings" className="text-blue-600 hover:underline">Meditation Teachings</Link></li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Help & Support</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>All practices are verified and accessible</li>
          <li>Mobile-friendly and inclusive design</li>
          <li>Need help? <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link></li>
        </ul>
      </section>
    </main>
  )
}

export default MeditationPage 