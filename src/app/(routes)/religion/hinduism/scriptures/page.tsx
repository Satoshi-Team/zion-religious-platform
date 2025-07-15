import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hindu Scriptures | Sacred Texts from Vedas to Modern Literature',
  description: 'Explore the vast collection of Hindu scriptures including the Vedas, Upanishads, Bhagavad Gita, epics, and philosophical texts that form the foundation of Hindu wisdom.',
  keywords: 'Hindu scriptures, Vedas, Upanishads, Bhagavad Gita, Ramayana, Mahabharata, Hindu sacred texts, Hindu philosophy',
  openGraph: {
    title: 'Hindu Scriptures | Sacred Texts from Vedas to Modern Literature',
    description: 'Explore the vast collection of Hindu scriptures including the Vedas, Upanishads, and Bhagavad Gita.',
    type: 'website',
  },
}

export default function HinduismScripturesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="text-sm breadcrumbs mb-8">
        <ul>
          <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
          <li><Link href="/religion" className="text-blue-600 hover:text-blue-800">Religions</Link></li>
          <li><Link href="/religion/hinduism" className="text-blue-600 hover:text-blue-800">Hinduism</Link></li>
          <li className="text-gray-600">Scriptures</li>
        </ul>
      </nav>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-orange-800 mb-6">Hindu Scriptures</h1>
        
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
          <p className="text-lg text-orange-800">
            Hindu scriptures form one of the world's most extensive and ancient collections of 
            sacred literature, spanning thousands of years and encompassing diverse philosophical, 
            spiritual, and cultural traditions.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">The Vedas: Divine Revelation</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-4">The Four Vedas</h3>
            <p className="mb-4">
              The Vedas are the oldest and most authoritative sacred texts of Hinduism, 
              considered to be divine revelations received by ancient sages in deep meditation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Rig Veda</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Oldest of the four Vedas</li>
                  <li>1,028 hymns in 10 books</li>
                  <li>Devotional prayers and mantras</li>
                  <li>Cosmological and philosophical insights</li>
                  <li>Praise of various deities</li>
                  <li>Ritual and ceremonial instructions</li>
                  <li>Social and moral teachings</li>
                  <li>Natural and environmental wisdom</li>
                  <li>Healing and medicinal knowledge</li>
                  <li>Spiritual practices and disciplines</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Sama Veda</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Musical rendering of Rig Veda hymns</li>
                  <li>1,875 verses set to melodies</li>
                  <li>Used in Soma sacrifice ceremonies</li>
                  <li>Emphasis on musical chanting</li>
                  <li>Spiritual power of sound</li>
                  <li>Harmony and rhythm in worship</li>
                  <li>Connection between music and divinity</li>
                  <li>Meditative and trance-inducing qualities</li>
                  <li>Preservation of ancient melodies</li>
                  <li>Sacred sound and vibration</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Yajur Veda and Atharva Veda</h3>
            <p className="mb-4">
              The remaining two Vedas complete the sacred quartet, each serving specific 
              purposes in ritual practice and spiritual knowledge.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Yajur Veda:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Ritual formulas and procedures</li>
                  <li>Sacrificial ceremonies and yajnas</li>
                  <li>Practical application of Vedic wisdom</li>
                  <li>Connection between ritual and cosmic order</li>
                  <li>Purification and transformation practices</li>
                  <li>Harmony between human and divine</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Atharva Veda:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Spells, incantations, and charms</li>
                  <li>Healing and medicinal practices</li>
                  <li>Protection from negative forces</li>
                  <li>Domestic and social rituals</li>
                  <li>Practical wisdom for daily life</li>
                  <li>Integration of spiritual and material</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">Vedic Literature Structure</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-3">The Four Parts of Each Veda</h3>
              <p className="mb-3">
                Each Veda is structured into four distinct parts, progressing from ritual 
                practice to philosophical understanding.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Samhitas (Collections):</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Original hymns and mantras</li>
                    <li>Direct divine revelations</li>
                    <li>Core spiritual knowledge</li>
                    <li>Sacred sound and vibration</li>
                    <li>Foundation of Vedic tradition</li>
                    <li>Preservation of ancient wisdom</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Brahmanas (Rituals):</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Detailed ritual instructions</li>
                    <li>Sacrificial procedures</li>
                    <li>Priestly duties and responsibilities</li>
                    <li>Symbolic interpretations</li>
                    <li>Connection to cosmic order</li>
                    <li>Practical application of wisdom</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Aranyakas and Upanishads</h3>
              <p className="mb-3">
                The later parts of Vedic literature focus on philosophical inquiry and 
                spiritual realization.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Aranyakas (Forest Texts):</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Meditation and contemplation</li>
                    <li>Symbolic interpretation of rituals</li>
                    <li>Preparation for renunciation</li>
                    <li>Bridge between ritual and philosophy</li>
                    <li>Inner spiritual practices</li>
                    <li>Transition to Upanishadic wisdom</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Upanishads (Philosophy):</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Philosophical teachings and dialogues</li>
                    <li>Nature of reality and consciousness</li>
                    <li>Relationship between individual and cosmic</li>
                    <li>Path to liberation and self-realization</li>
                    <li>Transcendental knowledge</li>
                    <li>Ultimate spiritual truth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">The Upanishads: Philosophical Wisdom</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Major Upanishads</h3>
            <p className="mb-4">
              The Upanishads represent the philosophical culmination of Vedic thought, 
              exploring the deepest questions of existence and consciousness.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Principal Upanishads</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Brihadaranyaka Upanishad</strong> - Largest and most comprehensive</li>
                  <li><strong>Chandogya Upanishad</strong> - Extensive philosophical dialogues</li>
                  <li><strong>Taittiriya Upanishad</strong> - Five-fold nature of reality</li>
                  <li><strong>Aitareya Upanishad</strong> - Creation and consciousness</li>
                  <li><strong>Kaushitaki Upanishad</strong> - Knowledge and liberation</li>
                  <li><strong>Kena Upanishad</strong> - Nature of Brahman</li>
                  <li><strong>Katha Upanishad</strong> - Death and immortality</li>
                  <li><strong>Isha Upanishad</strong> - Unity of all existence</li>
                  <li><strong>Mundaka Upanishad</strong> - Higher and lower knowledge</li>
                  <li><strong>Prashna Upanishad</strong> - Six fundamental questions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Core Teachings</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Brahman as ultimate reality</li>
                  <li>Atman as individual consciousness</li>
                  <li>Unity of Brahman and Atman</li>
                  <li>Maya and the nature of illusion</li>
                  <li>Karma and rebirth</li>
                  <li>Moksha as liberation</li>
                  <li>Meditation and self-inquiry</li>
                  <li>Guru-disciple relationship</li>
                  <li>Ethical and moral principles</li>
                  <li>Spiritual practices and disciplines</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Philosophical Concepts</h3>
            <p className="mb-4">
              The Upanishads introduce fundamental philosophical concepts that have shaped 
              Hindu thought for millennia.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Metaphysical Concepts:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Brahman - Ultimate reality</li>
                  <li>Atman - Individual self</li>
                  <li>Maya - Cosmic illusion</li>
                  <li>Prakriti - Material nature</li>
                  <li>Purusha - Pure consciousness</li>
                  <li>Gunas - Qualities of nature</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Spiritual Practices:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Meditation and contemplation</li>
                  <li>Self-inquiry and reflection</li>
                  <li>Detachment and renunciation</li>
                  <li>Devotion and surrender</li>
                  <li>Knowledge and wisdom</li>
                  <li>Guru guidance and grace</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">The Bhagavad Gita: Divine Song</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">Structure and Content</h3>
            <p className="mb-4">
              The Bhagavad Gita is a 700-verse dialogue between Lord Krishna and Arjuna, 
              addressing fundamental questions of duty, morality, and spiritual realization.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-700 mb-3">The Eighteen Chapters</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Chapters 1-6</strong> - Karma Yoga and selfless action</li>
                  <li><strong>Chapters 7-12</strong> - Bhakti Yoga and devotion</li>
                  <li><strong>Chapters 13-18</strong> - Jnana Yoga and knowledge</li>
                  <li>Arjuna's dilemma and confusion</li>
                  <li>Krishna's teachings and guidance</li>
                  <li>Practical application of wisdom</li>
                  <li>Integration of different paths</li>
                  <li>Ultimate goal of liberation</li>
                  <li>Divine grace and surrender</li>
                  <li>Universal spiritual principles</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-3">Key Teachings</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Dharma and righteous action</li>
                  <li>Detachment from results</li>
                  <li>Devotion to the divine</li>
                  <li>Knowledge and wisdom</li>
                  <li>Self-discipline and control</li>
                  <li>Equanimity in success and failure</li>
                  <li>Service to others</li>
                  <li>Surrender to divine will</li>
                  <li>Unity of all paths</li>
                  <li>Ultimate liberation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Philosophical Significance</h3>
            <p className="mb-4">
              The Gita synthesizes various philosophical approaches and provides practical 
              guidance for spiritual living.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Integration of Paths:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Karma Yoga - Selfless action</li>
                  <li>Bhakti Yoga - Loving devotion</li>
                  <li>Jnana Yoga - Knowledge and wisdom</li>
                  <li>Raja Yoga - Meditation and control</li>
                  <li>Harmony of different approaches</li>
                  <li>Personal temperament consideration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Practical Application:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Daily life and responsibilities</li>
                  <li>Work and professional duties</li>
                  <li>Family and social obligations</li>
                  <li>Spiritual practice and discipline</li>
                  <li>Ethical decision making</li>
                  <li>Inner peace and contentment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">The Epics: Ramayana and Mahabharata</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-3">The Ramayana</h3>
              <p className="mb-3">
                The Ramayana is the story of Lord Rama, an avatar of Vishnu, and his journey 
                of dharma, devotion, and righteous living.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Key Themes:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Dharma and righteous conduct</li>
                    <li>Ideal relationships and family values</li>
                    <li>Devotion and loyalty</li>
                    <li>Sacrifice and duty</li>
                    <li>Good versus evil</li>
                    <li>Divine grace and protection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Spiritual Lessons:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Ideal king and leadership</li>
                    <li>Perfect husband and wife</li>
                    <li>Loyal friend and servant</li>
                    <li>Obedient son and brother</li>
                    <li>Devotion to God</li>
                    <li>Victory of good over evil</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">The Mahabharata</h3>
              <p className="mb-3">
                The Mahabharata is the world's longest epic, containing the Bhagavad Gita 
                and exploring complex moral and philosophical issues.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Major Themes:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Complex moral dilemmas</li>
                    <li>Family conflicts and resolution</li>
                    <li>War and its consequences</li>
                    <li>Divine intervention and grace</li>
                    <li>Karma and its effects</li>
                    <li>Ultimate victory of dharma</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Philosophical Insights:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Nature of dharma and duty</li>
                    <li>Complexity of human nature</li>
                    <li>Role of divine guidance</li>
                    <li>Importance of righteous action</li>
                    <li>Consequences of choices</li>
                    <li>Path to spiritual liberation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">Philosophical Systems and Texts</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">The Six Darshanas</h3>
            <p className="mb-4">
              Hindu philosophy is organized into six classical systems, each providing 
              different perspectives on reality and liberation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Astika (Orthodox) Systems</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Vedanta</strong> - Non-dualistic philosophy</li>
                  <li><strong>Sankhya</strong> - Dualistic cosmology</li>
                  <li><strong>Yoga</strong> - Spiritual discipline</li>
                  <li><strong>Nyaya</strong> - Logic and reasoning</li>
                  <li><strong>Vaisheshika</strong> - Atomistic philosophy</li>
                  <li><strong>Mimamsa</strong> - Ritual interpretation</li>
                  <li>Acceptance of Vedic authority</li>
                  <li>Focus on liberation (moksha)</li>
                  <li>Systematic philosophical inquiry</li>
                  <li>Integration of theory and practice</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Key Philosophical Concepts</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Brahman and Atman relationship</li>
                  <li>Prakriti and Purusha duality</li>
                  <li>Gunas and their interactions</li>
                  <li>Karma and rebirth cycle</li>
                  <li>Maya and cosmic illusion</li>
                  <li>Dharma and righteous living</li>
                  <li>Meditation and spiritual practice</li>
                  <li>Guru-disciple tradition</li>
                  <li>Liberation and self-realization</li>
                  <li>Unity in diversity</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Modern and Contemporary Texts</h3>
            <p className="mb-4">
              Hindu literature continues to evolve with modern interpretations, commentaries, 
              and contemporary spiritual writings.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Modern Literature:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Swami Vivekananda's works</li>
                  <li>Rabindranath Tagore's writings</li>
                  <li>Mahatma Gandhi's spiritual texts</li>
                  <li>Modern guru teachings</li>
                  <li>Contemporary commentaries</li>
                  <li>Academic and scholarly works</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Contemporary Relevance:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Adaptation to modern life</li>
                  <li>Interfaith dialogue</li>
                  <li>Environmental consciousness</li>
                  <li>Social justice and equality</li>
                  <li>Scientific and technological integration</li>
                  <li>Global spiritual community</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Explore More Hindu Topics</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/religion/hinduism/overview" className="block p-4 bg-white rounded-lg border hover:border-orange-300 transition-colors">
              <h4 className="font-semibold text-orange-700 mb-2">Hindu Overview</h4>
              <p className="text-sm text-gray-600">Core beliefs and principles</p>
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