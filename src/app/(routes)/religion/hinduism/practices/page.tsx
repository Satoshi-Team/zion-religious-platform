import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hindu Practices | Rituals, Ceremonies, and Spiritual Observances',
  description: 'Explore comprehensive Hindu practices including daily rituals, ceremonies, worship, meditation, and spiritual disciplines that guide Hindu life and devotion.',
  keywords: 'Hindu practices, puja, rituals, ceremonies, meditation, yoga, worship, spiritual disciplines, Hindu observances',
  openGraph: {
    title: 'Hindu Practices | Rituals, Ceremonies, and Spiritual Observances',
    description: 'Explore comprehensive Hindu practices including daily rituals, ceremonies, and spiritual disciplines.',
    type: 'website',
  },
}

export default function HinduismPracticesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="text-sm breadcrumbs mb-8">
        <ul>
          <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
          <li><Link href="/religion" className="text-blue-600 hover:text-blue-800">Religions</Link></li>
          <li><Link href="/religion/hinduism" className="text-blue-600 hover:text-blue-800">Hinduism</Link></li>
          <li className="text-gray-600">Practices</li>
        </ul>
      </nav>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-orange-800 mb-6">Hindu Practices</h1>
        
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
          <p className="text-lg text-orange-800">
            Hindu practices encompass a comprehensive system of rituals, ceremonies, and 
            spiritual disciplines designed to purify the mind, cultivate devotion, and 
            guide individuals toward spiritual realization and liberation.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">Daily Worship and Rituals</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-4">Puja: Ritual Worship</h3>
            <p className="mb-4">
              Puja is the central form of Hindu worship, involving ritual offerings, 
              prayers, and devotion to deities in home shrines and temples.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Elements of Puja</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Avahana</strong> - Invoking the deity</li>
                  <li><strong>Asana</strong> - Offering seat</li>
                  <li><strong>Padya</strong> - Washing feet</li>
                  <li><strong>Arghya</strong> - Offering water</li>
                  <li><strong>Achamana</strong> - Purification</li>
                  <li><strong>Snana</strong> - Bathing the deity</li>
                  <li><strong>Vastra</strong> - Offering clothing</li>
                  <li><strong>Yajnopavita</strong> - Sacred thread</li>
                  <li><strong>Gandha</strong> - Sandalwood paste</li>
                  <li><strong>Pushpa</strong> - Flowers</li>
                  <li><strong>Dhupa</strong> - Incense</li>
                  <li><strong>Dipa</strong> - Lamp</li>
                  <li><strong>Naivedya</strong> - Food offering</li>
                  <li><strong>Tambula</strong> - Betel leaves</li>
                  <li><strong>Pradakshina</strong> - Circumambulation</li>
                  <li><strong>Namaskara</strong> - Prostration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Spiritual Significance</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Purification of mind and environment</li>
                  <li>Establishing connection with divine</li>
                  <li>Expression of gratitude and devotion</li>
                  <li>Receiving divine blessings and grace</li>
                  <li>Creating sacred space and atmosphere</li>
                  <li>Developing concentration and focus</li>
                  <li>Purification of karma</li>
                  <li>Spiritual discipline and regularity</li>
                  <li>Family and community bonding</li>
                  <li>Cultural preservation and transmission</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Home Worship and Temple Visits</h3>
            <p className="mb-4">
              Hindu worship takes place both in the home and in temples, with each 
              setting serving different spiritual and social purposes.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Home Worship:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Daily morning and evening prayers</li>
                  <li>Family shrine and altar</li>
                  <li>Personal meditation and japa</li>
                  <li>Reading of sacred texts</li>
                  <li>Simple offerings and rituals</li>
                  <li>Teaching children spiritual values</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Temple Worship:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Elaborate rituals and ceremonies</li>
                  <li>Priest-led worship services</li>
                  <li>Community gatherings and festivals</li>
                  <li>Darshan of temple deities</li>
                  <li>Special occasions and celebrations</li>
                  <li>Spiritual guidance and counseling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">Meditation and Spiritual Practices</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-3">Japa: Mantra Repetition</h3>
              <p className="mb-3">
                Japa is the practice of repeating sacred mantras, using prayer beads 
                (mala) to count repetitions and focus the mind.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Types of Japa:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Vaikhari (audible repetition)</li>
                    <li>Upamshu (whispered repetition)</li>
                    <li>Manasika (mental repetition)</li>
                    <li>Likhita (written repetition)</li>
                    <li>Gayatri mantra japa</li>
                    <li>Om namah shivaya japa</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Benefits:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Purification of mind</li>
                    <li>Development of concentration</li>
                    <li>Spiritual awakening</li>
                    <li>Removal of negative thoughts</li>
                    <li>Connection with divine energy</li>
                    <li>Inner peace and tranquility</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Dhyana: Meditation</h3>
              <p className="mb-3">
                Dhyana is the practice of focused meditation, leading to deeper states 
                of consciousness and spiritual realization.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Meditation Techniques:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Breath awareness meditation</li>
                    <li>Mantra meditation</li>
                    <li>Visualization techniques</li>
                    <li>Chakra meditation</li>
                    <li>Kundalini awakening</li>
                    <li>Self-inquiry meditation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Spiritual Goals:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Control of mind and senses</li>
                    <li>Self-realization</li>
                    <li>Union with divine</li>
                    <li>Transcendence of ego</li>
                    <li>Experience of pure consciousness</li>
                    <li>Liberation from samsara</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Yoga: Spiritual Discipline</h3>
              <p className="mb-3">
                Yoga is a comprehensive system of spiritual practices designed to unite 
                the individual soul with the universal consciousness.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Types of Yoga:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Hatha Yoga (physical postures)</li>
                    <li>Raja Yoga (meditation)</li>
                    <li>Bhakti Yoga (devotion)</li>
                    <li>Karma Yoga (selfless action)</li>
                    <li>Jnana Yoga (knowledge)</li>
                    <li>Kundalini Yoga (energy awakening)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Benefits:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Physical health and vitality</li>
                    <li>Mental clarity and focus</li>
                    <li>Emotional balance</li>
                    <li>Spiritual growth</li>
                    <li>Stress reduction</li>
                    <li>Self-realization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">Life Cycle Ceremonies (Samskaras)</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">The Sixteen Samskaras</h3>
            <p className="mb-4">
              Samskaras are sacred ceremonies that mark important stages in life, 
              purifying and preparing individuals for each phase of their journey.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Pre-Natal and Birth</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Garbhadhana</strong> - Conception ceremony</li>
                  <li><strong>Pumsavana</strong> - Male child prayer</li>
                  <li><strong>Simantonnayana</strong> - Hair parting</li>
                  <li><strong>Jatakarma</strong> - Birth ceremony</li>
                  <li><strong>Namakarana</strong> - Naming ceremony</li>
                  <li><strong>Nishkramana</strong> - First outing</li>
                  <li><strong>Annaprashana</strong> - First feeding</li>
                  <li><strong>Chudakarana</strong> - Hair cutting</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Education and Marriage</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Vidyarambha</strong> - Learning initiation</li>
                  <li><strong>Upanayana</strong> - Sacred thread ceremony</li>
                  <li><strong>Vedarambha</strong> - Vedic study beginning</li>
                  <li><strong>Keshanta</strong> - Beard shaving</li>
                  <li><strong>Samavartana</strong> - Return from studies</li>
                  <li><strong>Vivaha</strong> - Marriage ceremony</li>
                  <li><strong>Vanaprastha</strong> - Forest dwelling</li>
                  <li><strong>Sannyasa</strong> - Renunciation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">Major Life Ceremonies</h3>
            <p className="mb-4">
              Certain samskaras are particularly significant and widely practiced 
              in contemporary Hindu communities.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Upanayana (Sacred Thread):</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Initiation into Vedic studies</li>
                  <li>Receiving sacred thread</li>
                  <li>Gayatri mantra initiation</li>
                  <li>Beginning of spiritual education</li>
                  <li>Acceptance of dharma duties</li>
                  <li>Preparation for adult responsibilities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Vivaha (Marriage):</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Sacred union of two souls</li>
                  <li>Seven steps around fire</li>
                  <li>Exchange of garlands</li>
                  <li>Sacred vows and promises</li>
                  <li>Family and community blessing</li>
                  <li>Spiritual partnership</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">Festivals and Celebrations</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-3">Major Hindu Festivals</h3>
              <p className="mb-3">
                Hindu festivals celebrate divine events, seasonal changes, and spiritual 
                milestones, bringing communities together in devotion and joy.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Deity Festivals:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Diwali (Festival of Lights)</li>
                    <li>Holi (Festival of Colors)</li>
                    <li>Navaratri (Nine Nights)</li>
                    <li>Ganesh Chaturthi</li>
                    <li>Krishna Janmashtami</li>
                    <li>Rama Navami</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Seasonal Festivals:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Makar Sankranti</li>
                    <li>Vasant Panchami</li>
                    <li>Raksha Bandhan</li>
                    <li>Guru Purnima</li>
                    <li>Maha Shivaratri</li>
                    <li>Kartik Purnima</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Festival Practices</h3>
              <p className="mb-3">
                Each festival involves specific rituals, prayers, and community 
                activities that reinforce spiritual values and cultural traditions.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Ritual Activities:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Special pujas and prayers</li>
                    <li>Fasting and purification</li>
                    <li>Decorating homes and temples</li>
                    <li>Lighting lamps and candles</li>
                    <li>Offering special foods</li>
                    <li>Community gatherings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Spiritual Significance:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Divine grace and blessings</li>
                    <li>Purification of karma</li>
                    <li>Community harmony</li>
                    <li>Cultural preservation</li>
                    <li>Spiritual renewal</li>
                    <li>Family bonding</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">Pilgrimage and Sacred Places</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Tirtha Yatra: Sacred Journeys</h3>
            <p className="mb-4">
              Pilgrimage to sacred places is an important Hindu practice that combines 
              physical journey with spiritual purification and divine connection.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Types of Sacred Places</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Kashi (Varanasi)</strong> - City of Shiva</li>
                  <li><strong>Vrindavan</strong> - Land of Krishna</li>
                  <li><strong>Ayodhya</strong> - Birthplace of Rama</li>
                  <li><strong>Badrinath</strong> - Himalayan shrine</li>
                  <li><strong>Kedarnath</strong> - Mountain temple</li>
                  <li><strong>Gangotri</strong> - Source of Ganga</li>
                  <li><strong>Yamunotri</strong> - Source of Yamuna</li>
                  <li><strong>Rameshwaram</strong> - Southern temple</li>
                  <li><strong>Puri</strong> - Jagannath temple</li>
                  <li><strong>Dwarka</strong> - Krishna's city</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Pilgrimage Benefits</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Purification of sins and karma</li>
                  <li>Spiritual merit and blessings</li>
                  <li>Divine grace and protection</li>
                  <li>Community and cultural connection</li>
                  <li>Physical and mental discipline</li>
                  <li>Deepening of faith and devotion</li>
                  <li>Experience of sacred atmosphere</li>
                  <li>Connection with spiritual lineage</li>
                  <li>Renewal of spiritual commitment</li>
                  <li>Fulfillment of religious vows</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Sacred Rivers and Bathing</h3>
            <p className="mb-4">
              Sacred rivers, especially the Ganga, hold special significance in Hinduism, 
              with ritual bathing considered highly purifying.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Sacred Rivers:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Ganga (Ganges) - Most sacred</li>
                  <li>Yamuna - Krishna's river</li>
                  <li>Saraswati - Knowledge river</li>
                  <li>Godavari - Southern Ganga</li>
                  <li>Narmada - Central India</li>
                  <li>Kaveri - South India</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Ritual Bathing:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Purification of body and soul</li>
                  <li>Removal of sins and karma</li>
                  <li>Spiritual merit and blessings</li>
                  <li>Connection with divine energy</li>
                  <li>Healing and rejuvenation</li>
                  <li>Fulfillment of vows</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-orange-700 mb-6">Daily Observances and Ethics</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="mb-4">
              Hindu practices extend beyond formal rituals to include daily observances, 
              ethical conduct, and lifestyle choices that support spiritual growth.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Daily Observances</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Morning and evening prayers</li>
                  <li>Reading of sacred texts</li>
                  <li>Meditation and contemplation</li>
                  <li>Service to family and community</li>
                  <li>Vegetarian diet and fasting</li>
                  <li>Environmental care and respect</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Ethical Principles</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Ahimsa (non-violence)</li>
                  <li>Satya (truthfulness)</li>
                  <li>Asteya (non-stealing)</li>
                  <li>Brahmacharya (celibacy/moderation)</li>
                  <li>Aparigraha (non-possessiveness)</li>
                  <li>Compassion and kindness</li>
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
            <Link href="/religion/hinduism/deities" className="block p-4 bg-white rounded-lg border hover:border-orange-300 transition-colors">
              <h4 className="font-semibold text-orange-700 mb-2">Hindu Deities</h4>
              <p className="text-sm text-gray-600">Gods, goddesses, and divine manifestations</p>
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