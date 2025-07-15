import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hindu Deities | Gods, Goddesses, and Divine Manifestations',
  description: 'Explore the rich pantheon of Hindu deities including the Trimurti, major gods and goddesses, their attributes, symbolism, and spiritual significance in Hindu tradition.',
  keywords: 'Hindu deities, Hindu gods, Hindu goddesses, Trimurti, Brahma, Vishnu, Shiva, Lakshmi, Saraswati, Durga, Ganesha',
  openGraph: {
    title: 'Hindu Deities | Gods, Goddesses, and Divine Manifestations',
    description: 'Explore the rich pantheon of Hindu deities including the Trimurti and major gods and goddesses.',
    type: 'website',
  },
}

export default function HinduismDeitiesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="text-sm breadcrumbs mb-8">
        <ul>
          <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
          <li><Link href="/religion" className="text-blue-600 hover:text-blue-800">Religions</Link></li>
          <li><Link href="/religion/hinduism" className="text-blue-600 hover:text-blue-800">Hinduism</Link></li>
          <li className="text-gray-600">Deities</li>
        </ul>
      </nav>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-orange-800 mb-6">Hindu Deities</h1>
        
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
          <p className="text-lg text-orange-800">
            Hinduism encompasses a vast pantheon of deities representing different aspects 
            of the divine, from the supreme Brahman to personal gods and goddesses who 
            guide, protect, and inspire devotees on their spiritual journey.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">The Trimurti: The Three Main Deities</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-4">Brahma: The Creator</h3>
            <p className="mb-4">
              Brahma is the creator god of the Hindu trinity, responsible for the creation 
              of the universe and all living beings.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Attributes and Symbolism</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Four heads representing the four Vedas</li>
                  <li>Four arms holding sacred objects</li>
                  <li>White beard symbolizing wisdom</li>
                  <li>Red complexion representing creation</li>
                  <li>Hansa (swan) as vehicle</li>
                  <li>Lotus as seat</li>
                  <li>Water pot and rosary</li>
                  <li>Sacred texts and spoon</li>
                  <li>Creator of knowledge and arts</li>
                  <li>Source of cosmic intelligence</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Cosmic Functions</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Creation of the universe</li>
                  <li>Manifestation of cosmic intelligence</li>
                  <li>Establishment of dharma</li>
                  <li>Bestowal of knowledge</li>
                  <li>Creation of living beings</li>
                  <li>Setting cosmic cycles</li>
                  <li>Establishment of social order</li>
                  <li>Creation of arts and sciences</li>
                  <li>Manifestation of consciousness</li>
                  <li>Source of creative energy</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Vishnu: The Preserver</h3>
            <p className="mb-4">
              Vishnu is the preserver and protector of the universe, maintaining cosmic 
              order and appearing in various avatars to restore dharma.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Attributes and Symbolism</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Dark blue complexion (infinite sky)</li>
                  <li>Four arms with divine weapons</li>
                  <li>Conch shell (divine sound)</li>
                  <li>Discus (cosmic weapon)</li>
                  <li>Mace (authority and power)</li>
                  <li>Lotus (purity and beauty)</li>
                  <li>Garuda as vehicle</li>
                  <li>Ananta Shesha as bed</li>
                  <li>Kaustubha gem on chest</li>
                  <li>Shrivatsa mark on chest</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Ten Major Avatars</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Matsya</strong> - Fish (saved Vedas)</li>
                  <li><strong>Kurma</strong> - Tortoise (churning ocean)</li>
                  <li><strong>Varaha</strong> - Boar (lifted earth)</li>
                  <li><strong>Narasimha</strong> - Man-lion (protected devotee)</li>
                  <li><strong>Vamana</strong> - Dwarf (defeated demon)</li>
                  <li><strong>Parashurama</strong> - Warrior sage</li>
                  <li><strong>Rama</strong> - Ideal king</li>
                  <li><strong>Krishna</strong> - Divine teacher</li>
                  <li><strong>Buddha</strong> - Spiritual reformer</li>
                  <li><strong>Kalki</strong> - Future destroyer of evil</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">Shiva: The Destroyer</h3>
            <p className="mb-4">
              Shiva is the destroyer and transformer, representing the cyclical nature 
              of existence and the path to liberation.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Attributes and Symbolism:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Third eye (spiritual vision)</li>
                  <li>Snake around neck (cosmic energy)</li>
                  <li>Trident (three gunas)</li>
                  <li>Damaru drum (cosmic sound)</li>
                  <li>Ashes on body (renunciation)</li>
                  <li>Nandi bull as vehicle</li>
                  <li>Ganga in hair (purification)</li>
                  <li>Crescent moon (time cycles)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Cosmic Functions:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Destruction of ignorance</li>
                  <li>Transformation of consciousness</li>
                  <li>Liberation from samsara</li>
                  <li>Master of yoga and meditation</li>
                  <li>Lord of dance (Nataraja)</li>
                  <li>Destroyer of evil forces</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">Major Goddesses (Devis)</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-3">Lakshmi: Goddess of Prosperity</h3>
              <p className="mb-3">
                Lakshmi is the goddess of wealth, prosperity, and good fortune, representing 
                material and spiritual abundance.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Attributes:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Golden complexion</li>
                    <li>Four arms with lotus flowers</li>
                    <li>Gold coins flowing from hands</li>
                    <li>Owl as vehicle</li>
                    <li>Lotus seat</li>
                    <li>Elephant attendants</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Significance:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Material and spiritual wealth</li>
                    <li>Good fortune and success</li>
                    <li>Fertility and abundance</li>
                    <li>Purity and beauty</li>
                    <li>Devotion and grace</li>
                    <li>Protection and blessings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Saraswati: Goddess of Knowledge</h3>
              <p className="mb-3">
                Saraswati is the goddess of learning, wisdom, and the arts, representing 
                the power of knowledge and creative expression.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Attributes:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>White complexion</li>
                    <li>Four arms with sacred objects</li>
                    <li>Veena (musical instrument)</li>
                    <li>Sacred texts and rosary</li>
                    <li>White swan as vehicle</li>
                    <li>Lotus seat</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Significance:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Knowledge and wisdom</li>
                    <li>Education and learning</li>
                    <li>Arts and music</li>
                    <li>Speech and communication</li>
                    <li>Intellectual pursuits</li>
                    <li>Spiritual knowledge</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">Durga: The Warrior Goddess</h3>
              <p className="mb-3">
                Durga is the fierce warrior goddess who protects the universe from evil 
                forces and represents divine power and courage.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Attributes:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Eight or ten arms with weapons</li>
                    <li>Lion as vehicle</li>
                    <li>Third eye of wisdom</li>
                    <li>Various divine weapons</li>
                    <li>Fierce and beautiful form</li>
                    <li>Victory over demon Mahishasura</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Significance:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Protection from evil</li>
                    <li>Victory over obstacles</li>
                    <li>Divine power and strength</li>
                    <li>Maternal protection</li>
                    <li>Courage and fearlessness</li>
                    <li>Destruction of ignorance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Kali: The Dark Mother</h3>
              <p className="mb-3">
                Kali is the fierce form of the divine mother, representing time, death, 
                and the ultimate reality beyond form.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Attributes:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Dark complexion</li>
                    <li>Four arms with weapons</li>
                    <li>Tongue protruding</li>
                    <li>Garland of skulls</li>
                    <li>Standing on Shiva</li>
                    <li>Fierce and terrifying form</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Significance:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Destruction of ego</li>
                    <li>Liberation from fear</li>
                    <li>Time and transformation</li>
                    <li>Ultimate reality</li>
                    <li>Maternal protection</li>
                    <li>Spiritual awakening</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">Popular Deities and Their Significance</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Ganesha: The Remover of Obstacles</h3>
            <p className="mb-4">
              Ganesha is one of the most beloved Hindu deities, worshipped at the beginning 
              of any auspicious activity to remove obstacles and ensure success.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Physical Attributes</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Elephant head (wisdom and intelligence)</li>
                  <li>Human body (human consciousness)</li>
                  <li>Large belly (cosmic energy)</li>
                  <li>Four arms with sacred objects</li>
                  <li>Broken tusk (sacrifice for knowledge)</li>
                  <li>Mouse as vehicle (humility)</li>
                  <li>Modak (sweet) as favorite food</li>
                  <li>Red or orange complexion</li>
                  <li>Third eye (spiritual vision)</li>
                  <li>Snake as sacred thread</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Spiritual Significance</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Remover of obstacles</li>
                  <li>Patron of learning and wisdom</li>
                  <li>Protector of new beginnings</li>
                  <li>Master of success and prosperity</li>
                  <li>Guardian of knowledge</li>
                  <li>Symbol of unity and harmony</li>
                  <li>Representation of cosmic energy</li>
                  <li>Guide for spiritual seekers</li>
                  <li>Protector of the weak</li>
                  <li>Bestower of good fortune</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Hanuman: The Divine Servant</h3>
            <p className="mb-4">
              Hanuman is the embodiment of devotion, strength, and selfless service, 
              representing the ideal devotee and spiritual seeker.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Attributes and Qualities:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Monkey form with human qualities</li>
                  <li>Immense strength and power</li>
                  <li>Unwavering devotion to Rama</li>
                  <li>Knowledge of sacred texts</li>
                  <li>Ability to change size at will</li>
                  <li>Master of yoga and meditation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Spiritual Lessons:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Perfect devotion and surrender</li>
                  <li>Selfless service to others</li>
                  <li>Overcoming obstacles with faith</li>
                  <li>Humility despite great power</li>
                  <li>Loyalty and commitment</li>
                  <li>Spiritual discipline and control</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">Understanding Hindu Deities</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-3">Monotheism and Polytheism</h3>
              <p className="mb-3">
                Hinduism reconciles monotheistic and polytheistic perspectives through 
                the concept of one supreme reality manifesting in multiple forms.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Unified Reality:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Brahman as ultimate reality</li>
                    <li>Multiple manifestations of the divine</li>
                    <li>Different aspects of cosmic energy</li>
                    <li>Personal and impersonal forms</li>
                    <li>Unity in diversity</li>
                    <li>Transcendent and immanent aspects</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Devotional Approach:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Personal relationship with deity</li>
                    <li>Ishta devata (chosen deity)</li>
                    <li>Emotional and devotional connection</li>
                    <li>Ritual worship and prayer</li>
                    <li>Spiritual guidance and protection</li>
                    <li>Path to ultimate realization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Symbolism and Meaning</h3>
              <p className="mb-3">
                Hindu deities are rich in symbolism, with every attribute and action 
                carrying deep spiritual and philosophical significance.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Physical Symbolism:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Multiple arms (cosmic power)</li>
                    <li>Third eye (spiritual vision)</li>
                    <li>Vehicles (cosmic energies)</li>
                    <li>Weapons (spiritual powers)</li>
                    <li>Colors (cosmic qualities)</li>
                    <li>Ornaments (divine attributes)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Philosophical Meaning:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Cosmic functions and roles</li>
                    <li>Spiritual qualities and virtues</li>
                    <li>Paths to liberation</li>
                    <li>Cosmic principles and laws</li>
                    <li>Human potential and divinity</li>
                    <li>Ultimate reality and truth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">Worship and Devotion</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="mb-4">
              Worship of Hindu deities involves various practices and rituals designed 
              to establish connection with the divine and receive blessings.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Forms of Worship</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Puja (ritual worship)</li>
                  <li>Darshan (sacred viewing)</li>
                  <li>Bhajan and kirtan (devotional singing)</li>
                  <li>Meditation and contemplation</li>
                  <li>Pilgrimage to sacred places</li>
                  <li>Festivals and celebrations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Spiritual Benefits</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Purification of mind and heart</li>
                  <li>Development of devotion</li>
                  <li>Receiving divine grace</li>
                  <li>Overcoming obstacles</li>
                  <li>Spiritual growth and evolution</li>
                  <li>Ultimate liberation and peace</li>
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
            <Link href="/religion/hinduism/scriptures" className="block p-4 bg-white rounded-lg border hover:border-orange-300 transition-colors">
              <h4 className="font-semibold text-orange-700 mb-2">Hindu Scriptures</h4>
              <p className="text-sm text-gray-600">Sacred texts and philosophical literature</p>
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