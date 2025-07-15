import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hinduism Overview | Ancient Wisdom, Diverse Traditions, and Spiritual Paths',
  description: 'Explore the comprehensive overview of Hinduism, including core beliefs, diverse traditions, spiritual practices, and philosophical systems that guide over 1.2 billion followers worldwide.',
  keywords: 'Hinduism overview, Hindu beliefs, dharma, karma, reincarnation, Hindu philosophy, spiritual paths, Hindu traditions',
  openGraph: {
    title: 'Hinduism Overview | Ancient Wisdom, Diverse Traditions, and Spiritual Paths',
    description: 'Explore the comprehensive overview of Hinduism, including core beliefs, diverse traditions, and spiritual practices.',
    type: 'website',
  },
}

export default function HinduismOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="text-sm breadcrumbs mb-8">
        <ul>
          <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
          <li><Link href="/religion" className="text-blue-600 hover:text-blue-800">Religions</Link></li>
          <li className="text-gray-600">Hinduism</li>
        </ul>
      </nav>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-orange-800 mb-6">Hinduism Overview</h1>
        
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
          <p className="text-lg text-orange-800">
            Hinduism, known as Sanatana Dharma (the eternal law), is one of the world's oldest 
            religions, with over 1.2 billion followers worldwide. It encompasses a vast array of 
            beliefs, practices, and philosophical systems that have evolved over thousands of years.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">Core Beliefs and Philosophy</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-4">The Four Purusharthas: Life Goals</h3>
            <p className="mb-4">
              Hinduism recognizes four fundamental goals of human life, providing a comprehensive 
              framework for balanced living and spiritual development.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Dharma (Righteousness)</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Moral and ethical duties</li>
                  <li>Righteous living and conduct</li>
                  <li>Social and cosmic order</li>
                  <li>Individual responsibilities</li>
                  <li>Harmony with natural law</li>
                  <li>Spiritual foundation</li>
                  <li>Virtuous behavior</li>
                  <li>Justice and fairness</li>
                  <li>Truth and honesty</li>
                  <li>Compassion and kindness</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Artha (Prosperity)</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Material success and wealth</li>
                  <li>Economic security</li>
                  <li>Career and profession</li>
                  <li>Business and trade</li>
                  <li>Resource management</li>
                  <li>Social status and power</li>
                  <li>Family welfare</li>
                  <li>Community development</li>
                  <li>Responsible acquisition</li>
                  <li>Ethical prosperity</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Kama and Moksha</h3>
            <p className="mb-4">
              The remaining two purusharthas complete the human journey from earthly pleasures 
              to ultimate spiritual liberation.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Kama (Pleasure and Desire):</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Aesthetic and sensual pleasures</li>
                  <li>Art, music, and literature</li>
                  <li>Romantic love and relationships</li>
                  <li>Physical and emotional fulfillment</li>
                  <li>Creative expression</li>
                  <li>Balanced enjoyment of life</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Moksha (Liberation):</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Freedom from rebirth cycle</li>
                  <li>Union with the divine</li>
                  <li>Ultimate spiritual goal</li>
                  <li>Transcendence of ego</li>
                  <li>Realization of true self</li>
                  <li>Eternal peace and bliss</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">Fundamental Concepts</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-3">Dharma: The Cosmic Law</h3>
              <p className="mb-3">
                Dharma is the fundamental concept of cosmic order, moral law, and righteous living 
                that maintains harmony in the universe and guides human conduct.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Aspects of Dharma:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Rita (cosmic order)</li>
                    <li>Varna dharma (social duties)</li>
                    <li>Ashrama dharma (life stages)</li>
                    <li>Kula dharma (family duties)</li>
                    <li>Raja dharma (royal duties)</li>
                    <li>Sadharana dharma (universal duties)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Dharma in Practice:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Truthfulness and honesty</li>
                    <li>Non-violence (ahimsa)</li>
                    <li>Compassion and kindness</li>
                    <li>Self-discipline and control</li>
                    <li>Service to others</li>
                    <li>Environmental stewardship</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Karma: Law of Action and Consequence</h3>
              <p className="mb-3">
                Karma is the universal law of cause and effect, where every action has consequences 
                that shape one's present and future experiences.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Types of Karma:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Sanchita karma (accumulated)</li>
                    <li>Prarabdha karma (fruition)</li>
                    <li>Kriyamana karma (current)</li>
                    <li>Agami karma (future)</li>
                    <li>Good karma (punya)</li>
                    <li>Bad karma (papa)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Karma and Liberation:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Karma yoga (selfless action)</li>
                    <li>Detachment from results</li>
                    <li>Purification through good deeds</li>
                    <li>Breaking karmic cycles</li>
                    <li>Spiritual evolution</li>
                    <li>Path to moksha</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">Samsara: Cycle of Rebirth</h3>
              <p className="mb-3">
                Samsara is the continuous cycle of birth, death, and rebirth, driven by karma 
                and attachment, from which liberation (moksha) is sought.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Nature of Samsara:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Endless cycle of existence</li>
                    <li>Different realms of rebirth</li>
                    <li>Suffering and impermanence</li>
                    <li>Attachment and desire</li>
                    <li>Ignorance and delusion</li>
                    <li>Opportunity for growth</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Transcending Samsara:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Spiritual practice and discipline</li>
                    <li>Knowledge and wisdom</li>
                    <li>Detachment and renunciation</li>
                    <li>Devotion and surrender</li>
                    <li>Meditation and self-realization</li>
                    <li>Guru guidance and grace</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">The Nature of Reality</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Brahman: The Ultimate Reality</h3>
            <p className="mb-4">
              Brahman is the supreme, eternal, and infinite reality that underlies all existence, 
              the source and essence of everything in the universe.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Attributes of Brahman</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Sat (Existence) - Eternal and unchanging</li>
                  <li>Chit (Consciousness) - Pure awareness</li>
                  <li>Ananda (Bliss) - Infinite joy and peace</li>
                  <li>Nirguna (Without attributes)</li>
                  <li>Saguna (With attributes)</li>
                  <li>Omnipresent and omniscient</li>
                  <li>Beyond time and space</li>
                  <li>Impersonal and personal aspects</li>
                  <li>Source of all creation</li>
                  <li>Ultimate goal of realization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Realization of Brahman</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Through knowledge (jnana yoga)</li>
                  <li>Through devotion (bhakti yoga)</li>
                  <li>Through action (karma yoga)</li>
                  <li>Through meditation (raja yoga)</li>
                  <li>Guru's grace and guidance</li>
                  <li>Purification of mind and heart</li>
                  <li>Detachment from worldly desires</li>
                  <li>Direct experience and intuition</li>
                  <li>Scriptural study and reflection</li>
                  <li>Spiritual practices and disciplines</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Atman: The Individual Self</h3>
            <p className="mb-4">
              Atman is the eternal, unchanging self or soul that exists within every being, 
              ultimately identical with Brahman.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Nature of Atman:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Eternal and indestructible</li>
                  <li>Pure consciousness</li>
                  <li>Beyond body and mind</li>
                  <li>Witness to all experiences</li>
                  <li>Source of individual identity</li>
                  <li>Identical with Brahman</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Realization of Atman:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Self-inquiry and reflection</li>
                  <li>Meditation and contemplation</li>
                  <li>Discrimination and detachment</li>
                  <li>Purification of mind</li>
                  <li>Guru's guidance</li>
                  <li>Direct experience</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">The Four Paths to Liberation</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-3">Jnana Yoga: Path of Knowledge</h3>
              <p className="mb-3">
                Jnana yoga is the path of wisdom and knowledge, leading to liberation through 
                understanding the true nature of reality and the self.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Practices:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Study of sacred texts</li>
                    <li>Self-inquiry and reflection</li>
                    <li>Discrimination (viveka)</li>
                    <li>Detachment (vairagya)</li>
                    <li>Meditation and contemplation</li>
                    <li>Guru-disciple relationship</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Goals:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Understanding of Brahman</li>
                    <li>Realization of Atman</li>
                    <li>Discrimination of real from unreal</li>
                    <li>Freedom from ignorance</li>
                    <li>Direct knowledge of truth</li>
                    <li>Liberation from samsara</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Bhakti Yoga: Path of Devotion</h3>
              <p className="mb-3">
                Bhakti yoga is the path of loving devotion to God, cultivating love, surrender, 
                and emotional connection with the divine.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Practices:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Prayer and worship</li>
                    <li>Chanting and singing</li>
                    <li>Ritual and ceremony</li>
                    <li>Service to God and others</li>
                    <li>Reading sacred texts</li>
                    <li>Pilgrimage and festivals</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Goals:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Pure love for God</li>
                    <li>Surrender to divine will</li>
                    <li>Emotional purification</li>
                    <li>Union with the beloved</li>
                    <li>Grace and divine favor</li>
                    <li>Liberation through love</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Karma Yoga: Path of Selfless Action</h3>
              <p className="mb-3">
                Karma yoga is the path of selfless service and action, performing duties without 
                attachment to results for the welfare of others.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Practices:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Selfless service (seva)</li>
                    <li>Performance of duties</li>
                    <li>Detachment from results</li>
                    <li>Work as worship</li>
                    <li>Service to humanity</li>
                    <li>Sacrifice and charity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Goals:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Purification of mind</li>
                    <li>Freedom from ego</li>
                    <li>Development of character</li>
                    <li>Service to society</li>
                    <li>Karmic purification</li>
                    <li>Spiritual evolution</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-3">Raja Yoga: Path of Meditation</h3>
              <p className="mb-3">
                Raja yoga is the path of meditation and mental control, systematically training 
                the mind to achieve higher states of consciousness.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">Practices:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Yama and Niyama (ethical codes)</li>
                    <li>Asana (postures)</li>
                    <li>Pranayama (breath control)</li>
                    <li>Pratyahara (withdrawal of senses)</li>
                    <li>Dharana (concentration)</li>
                    <li>Dhyana (meditation)</li>
                    <li>Samadhi (absorption)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">Goals:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Control of mind and senses</li>
                    <li>Higher states of consciousness</li>
                    <li>Direct experience of reality</li>
                    <li>Union with the divine</li>
                    <li>Liberation from limitations</li>
                    <li>Supreme knowledge and bliss</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">Sacred Texts and Literature</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-4">The Vedas: Divine Knowledge</h3>
            <p className="mb-4">
              The Vedas are the oldest and most authoritative sacred texts of Hinduism, 
              containing divine revelations received by ancient sages in deep meditation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">The Four Vedas</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Rig Veda</strong> - Hymns and prayers</li>
                  <li><strong>Sama Veda</strong> - Musical chants</li>
                  <li><strong>Yajur Veda</strong> - Ritual formulas</li>
                  <li><strong>Atharva Veda</strong> - Spells and incantations</li>
                  <li>Each Veda has four parts</li>
                  <li>Samhitas (hymns)</li>
                  <li>Brahmanas (rituals)</li>
                  <li>Aranyakas (forest texts)</li>
                  <li>Upanishads (philosophy)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Philosophical Content</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Nature of reality and consciousness</li>
                  <li>Relationship between individual and cosmic</li>
                  <li>Ethical and moral principles</li>
                  <li>Ritual and ceremonial practices</li>
                  <li>Cosmology and creation</li>
                  <li>Spiritual practices and disciplines</li>
                  <li>Social and cultural values</li>
                  <li>Environmental and ecological wisdom</li>
                  <li>Healing and wellness practices</li>
                  <li>Artistic and cultural expressions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Other Sacred Texts</h3>
            <p className="mb-4">
              Beyond the Vedas, Hinduism has a vast literature including epics, puranas, 
              philosophical texts, and devotional literature.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Major Texts:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Upanishads (philosophical teachings)</li>
                  <li>Bhagavad Gita (spiritual dialogue)</li>
                  <li>Ramayana (epic of Rama)</li>
                  <li>Mahabharata (epic of the Bharatas)</li>
                  <li>Puranas (mythological stories)</li>
                  <li>Dharma Shastras (legal texts)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Philosophical Systems:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Vedanta (non-dualism)</li>
                  <li>Sankhya (dualistic philosophy)</li>
                  <li>Yoga (spiritual discipline)</li>
                  <li>Nyaya (logic and reasoning)</li>
                  <li>Vaisheshika (atomism)</li>
                  <li>Mimamsa (ritual interpretation)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">Global Impact and Contemporary Relevance</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="mb-4">
              Hinduism continues to influence global culture, spirituality, and philosophy, 
              offering timeless wisdom for modern challenges and opportunities.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Global Influence</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Yoga and meditation practices</li>
                  <li>Ayurvedic medicine and wellness</li>
                  <li>Environmental and ecological wisdom</li>
                  <li>Interfaith dialogue and tolerance</li>
                  <li>Art, music, and cultural expressions</li>
                  <li>Philosophical and spiritual teachings</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Contemporary Challenges</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Preservation of traditions</li>
                  <li>Adaptation to modern life</li>
                  <li>Intergenerational transmission</li>
                  <li>Cultural appropriation concerns</li>
                  <li>Social and economic development</li>
                  <li>Environmental sustainability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Explore More Hindu Topics</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/religion/hinduism/scriptures" className="block p-4 bg-white rounded-lg border hover:border-orange-300 transition-colors">
              <h4 className="font-semibold text-orange-700 mb-2">Hindu Scriptures</h4>
              <p className="text-sm text-gray-600">Sacred texts and philosophical literature</p>
            </Link>
            <Link href="/religion/hinduism/deities" className="block p-4 bg-white rounded-lg border hover:border-orange-300 transition-colors">
              <h4 className="font-semibold text-orange-700 mb-2">Hindu Deities</h4>
              <p className="text-sm text-gray-600">Gods, goddesses, and divine manifestations</p>
            </Link>
            <Link href="/religion/hinduism/practices" className="block p-4 bg-white rounded-lg border hover:border-orange-300 transition-colors">
              <h4 className="font-semibold text-orange-700 mb-2">Hindu Practices</h4>
              <p className="text-sm text-gray-600">Rituals, ceremonies, and spiritual practices</p>
            </Link>
            <Link href="/religion/hinduism/history" className="block p-4 bg-white rounded-lg border hover:border-orange-300 transition-colors">
              <h4 className="font-semibold text-orange-700 mb-2">Hindu History</h4>
              <p className="text-sm text-gray-600">Historical development and cultural evolution</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 