import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Buddhist Practices | Meditation, Rituals, and Spiritual Disciplines',
  description: 'Explore comprehensive Buddhist practices including meditation techniques, mindfulness, rituals, ceremonies, and spiritual disciplines that guide the path to enlightenment.',
  keywords: 'Buddhist practices, meditation, mindfulness, vipassana, metta, Buddhist rituals, spiritual disciplines, Buddhist ceremonies',
  openGraph: {
    title: 'Buddhist Practices | Meditation, Rituals, and Spiritual Disciplines',
    description: 'Explore comprehensive Buddhist practices including meditation techniques and spiritual disciplines.',
    type: 'website',
  },
}

export default function BuddhismPracticesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="text-sm breadcrumbs mb-8">
        <ul>
          <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
          <li><Link href="/religion" className="text-blue-600 hover:text-blue-800">Religions</Link></li>
          <li><Link href="/religion/buddhism" className="text-blue-600 hover:text-blue-800">Buddhism</Link></li>
          <li className="text-gray-600">Practices</li>
        </ul>
      </nav>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-yellow-800 mb-6">Buddhist Practices</h1>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
          <p className="text-lg text-yellow-800">
            Buddhist practices encompass a comprehensive system of meditation, mindfulness, 
            ethical conduct, and spiritual disciplines designed to purify the mind, 
            develop wisdom, and lead to enlightenment and liberation from suffering.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Meditation Practices</h2>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-orange-800 mb-4">Mindfulness Meditation (Satipatthana)</h3>
            <p className="mb-4">
              Mindfulness meditation is the foundation of Buddhist practice, developing 
              awareness of the present moment and insight into the nature of reality.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Four Foundations of Mindfulness</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Mindfulness of Body (kayanupassana)</strong></li>
                  <li>Breathing awareness</li>
                  <li>Body postures and movements</li>
                  <li>Physical sensations</li>
                  <li>Body parts and elements</li>
                  <li>Decay and impermanence</li>
                  <li><strong>Mindfulness of Feelings (vedananupassana)</strong></li>
                  <li>Pleasant, unpleasant, neutral</li>
                  <li>Worldly and unworldly feelings</li>
                  <li>Arising and passing of feelings</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Mind and Mental Objects</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Mindfulness of Mind (cittanupassana)</strong></li>
                  <li>States of consciousness</li>
                  <li>Mental qualities and defilements</li>
                  <li>Concentration and distraction</li>
                  <li>Expansive and contracted mind</li>
                  <li><strong>Mindfulness of Mental Objects (dhammanupassana)</strong></li>
                  <li>Five hindrances</li>
                  <li>Five aggregates</li>
                  <li>Six sense bases</li>
                  <li>Seven factors of enlightenment</li>
                  <li>Four Noble Truths</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Breath Awareness (Anapanasati)</h3>
            <p className="mb-4">
              Anapanasati is a systematic meditation on the breath that develops 
              concentration, mindfulness, and insight.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Sixteen Steps of Practice</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>First Tetrad (Body)</strong></li>
                  <li>Long breathing awareness</li>
                  <li>Short breathing awareness</li>
                  <li>Full body breathing</li>
                  <li>Calming bodily formations</li>
                  <li><strong>Second Tetrad (Feelings)</strong></li>
                  <li>Breathing with rapture</li>
                  <li>Breathing with pleasure</li>
                  <li>Mental formations awareness</li>
                  <li>Calming mental formations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Mind and Wisdom</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Third Tetrad (Mind)</strong></li>
                  <li>Mind awareness</li>
                  <li>Gladdening the mind</li>
                  <li>Concentrating the mind</li>
                  <li>Liberating the mind</li>
                  <li><strong>Fourth Tetrad (Wisdom)</strong></li>
                  <li>Impermanence contemplation</li>
                  <li>Fading away contemplation</li>
                  <li>Cessation contemplation</li>
                  <li>Relinquishment contemplation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Loving-Kindness Meditation (Metta)</h3>
            <p className="mb-4">
              Metta meditation develops universal love and compassion, purifying the 
              heart and creating harmony with all beings.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Progressive Development:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Loving-kindness toward oneself</li>
                  <li>Loving-kindness toward a benefactor</li>
                  <li>Loving-kindness toward a dear friend</li>
                  <li>Loving-kindness toward a neutral person</li>
                  <li>Loving-kindness toward a difficult person</li>
                  <li>Universal loving-kindness</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Benefits:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Purification of heart</li>
                  <li>Harmony with others</li>
                  <li>Freedom from ill-will</li>
                  <li>Protection from harm</li>
                  <li>Peaceful sleep</li>
                  <li>Spiritual progress</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Insight Meditation (Vipassana)</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">The Practice of Insight</h3>
              <p className="mb-3">
                Vipassana meditation develops direct insight into the three characteristics 
                of existence: impermanence, suffering, and no-self.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Insight Development:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Observation of body sensations</li>
                    <li>Awareness of mental states</li>
                    <li>Contemplation of impermanence</li>
                    <li>Understanding of suffering</li>
                    <li>Realization of no-self</li>
                    <li>Direct experience of reality</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Stages of Insight:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Knowledge of mind and matter</li>
                    <li>Knowledge of cause and effect</li>
                    <li>Knowledge of the three characteristics</li>
                    <li>Knowledge of arising and passing</li>
                    <li>Knowledge of dissolution</li>
                    <li>Knowledge of fear and danger</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Walking Meditation</h3>
              <p className="mb-3">
                Walking meditation develops mindfulness and concentration through 
                awareness of the walking process and body movements.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Practice Method:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Slow, deliberate walking</li>
                    <li>Awareness of lifting, moving, placing</li>
                    <li>Coordination with breathing</li>
                    <li>Mindfulness of sensations</li>
                    <li>Observation of mind states</li>
                    <li>Integration with sitting practice</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Benefits:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Physical and mental balance</li>
                    <li>Integration of practice into daily life</li>
                    <li>Development of continuous mindfulness</li>
                    <li>Relief from sitting meditation</li>
                    <li>Grounding and stability</li>
                    <li>Mind-body coordination</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Concentration Meditation (Samatha)</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">The Four Jhanas</h3>
            <p className="mb-4">
              The four jhanas are deep states of concentration that purify the mind 
              and provide a foundation for insight meditation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">First Jhana</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Applied thought (vitakka)</li>
                  <li>Sustained thought (vicara)</li>
                  <li>Rapture (piti)</li>
                  <li>Pleasure (sukha)</li>
                  <li>One-pointedness (ekaggata)</li>
                  <li>Separation from sensual pleasures</li>
                  <li>Separation from unwholesome states</li>
                  <li>Purification of mind</li>
                  <li>Stability and calm</li>
                  <li>Foundation for higher states</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Higher Jhanas</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Second Jhana</strong> - Rapture and pleasure</li>
                  <li><strong>Third Jhana</strong> - Pleasure and equanimity</li>
                  <li><strong>Fourth Jhana</strong> - Pure equanimity</li>
                  <li>Progressive refinement</li>
                  <li>Deeper concentration</li>
                  <li>Greater mental purity</li>
                  <li>Enhanced awareness</li>
                  <li>Preparation for insight</li>
                  <li>Spiritual power development</li>
                  <li>Path to liberation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">Meditation Objects</h3>
            <p className="mb-4">
              Various meditation objects can be used to develop concentration, 
              each suitable for different temperaments and stages of practice.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Traditional Objects:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Breath (anapanasati)</li>
                  <li>Loving-kindness (metta)</li>
                  <li>Compassion (karuna)</li>
                  <li>Sympathetic joy (mudita)</li>
                  <li>Equanimity (upekkha)</li>
                  <li>Death contemplation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Advanced Objects:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Kasina (colored disks)</li>
                  <li>Body parts (asubha)</li>
                  <li>Elements (dhatu)</li>
                  <li>Space (akasa)</li>
                  <li>Consciousness (vinnana)</li>
                  <li>Light (aloka)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Daily Observances and Ethics</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">The Five Precepts</h3>
              <p className="mb-3">
                The five precepts are the foundation of ethical conduct, providing 
                guidelines for wholesome living and spiritual development.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Basic Precepts:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Refrain from killing</li>
                    <li>Refrain from stealing</li>
                    <li>Refrain from sexual misconduct</li>
                    <li>Refrain from false speech</li>
                    <li>Refrain from intoxicants</li>
                    <li>Foundation for moral development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Benefits:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Protection for oneself and others</li>
                    <li>Preparation for meditation</li>
                    <li>Expression of compassion</li>
                    <li>Path to peace and harmony</li>
                    <li>Spiritual progress</li>
                    <li>Karmic purification</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Eight Precepts (Uposatha)</h3>
              <p className="mb-3">
                The eight precepts are observed on special days, providing more 
                intensive practice for lay practitioners.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Additional Precepts:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Refrain from eating after noon</li>
                    <li>Refrain from entertainment and adornment</li>
                    <li>Refrain from high and luxurious beds</li>
                    <li>Intensive practice opportunity</li>
                    <li>Monastic lifestyle experience</li>
                    <li>Spiritual purification</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Observance Days:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>New moon and full moon</li>
                    <li>Quarter moon days</li>
                    <li>Special Buddhist holidays</li>
                    <li>Personal retreat periods</li>
                    <li>Community practice days</li>
                    <li>Spiritual renewal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Rituals and Ceremonies</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Daily Rituals</h3>
            <p className="mb-4">
              Daily rituals help maintain spiritual awareness and create a sacred 
              atmosphere for practice and reflection.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Morning Practices</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Taking refuge in the Three Jewels</li>
                  <li>Recitation of the five precepts</li>
                  <li>Morning meditation session</li>
                  <li>Dedication of merit</li>
                  <li>Setting positive intentions</li>
                  <li>Gratitude and appreciation</li>
                  <li>Mindful preparation for the day</li>
                  <li>Connection with spiritual community</li>
                  <li>Reading of sacred texts</li>
                  <li>Contemplation of teachings</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Evening Practices</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Evening meditation session</li>
                  <li>Reflection on the day's actions</li>
                  <li>Confession and purification</li>
                  <li>Loving-kindness practice</li>
                  <li>Gratitude for the day's blessings</li>
                  <li>Preparation for restful sleep</li>
                  <li>Contemplation of impermanence</li>
                  <li>Dedication of merit to all beings</li>
                  <li>Setting intentions for tomorrow</li>
                  <li>Spiritual reading and study</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Special Ceremonies</h3>
            <p className="mb-4">
              Special ceremonies mark important occasions and provide opportunities 
              for community practice and spiritual renewal.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Life Cycle Ceremonies:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Baby blessing ceremonies</li>
                  <li>Coming of age rituals</li>
                  <li>Marriage ceremonies</li>
                  <li>Funeral and memorial services</li>
                  <li>Monastic ordination</li>
                  <li>Spiritual milestone celebrations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Seasonal Observances:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Buddha's birthday (Vesak)</li>
                  <li>Dharma day celebrations</li>
                  <li>Sangha day observances</li>
                  <li>Retreat periods</li>
                  <li>Festival celebrations</li>
                  <li>Community gatherings</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Pilgrimage and Sacred Places</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="mb-4">
              Pilgrimage to sacred Buddhist sites provides opportunities for spiritual 
              renewal, community connection, and deepening of practice.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Major Pilgrimage Sites</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Lumbini (Buddha's birthplace)</li>
                  <li>Bodh Gaya (enlightenment)</li>
                  <li>Sarnath (first teaching)</li>
                  <li>Kushinagar (final nirvana)</li>
                  <li>Rajgir and Nalanda</li>
                  <li>Sacred mountains and temples</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Pilgrimage Benefits</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Spiritual inspiration and renewal</li>
                  <li>Connection with Buddhist history</li>
                  <li>Community and sangha bonding</li>
                  <li>Deepening of faith and devotion</li>
                  <li>Purification of karma</li>
                  <li>Accumulation of merit</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Explore More Buddhist Topics</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/religion/buddhism/overview" className="block p-4 bg-white rounded-lg border hover:border-yellow-300 transition-colors">
              <h4 className="font-semibold text-yellow-700 mb-2">Buddhist Overview</h4>
              <p className="text-sm text-gray-600">Core beliefs and principles</p>
            </Link>
            <Link href="/religion/buddhism/scriptures" className="block p-4 bg-white rounded-lg border hover:border-yellow-300 transition-colors">
              <h4 className="font-semibold text-yellow-700 mb-2">Buddhist Scriptures</h4>
              <p className="text-sm text-gray-600">Sacred texts and philosophical literature</p>
            </Link>
            <Link href="/religion/buddhism/teachings" className="block p-4 bg-white rounded-lg border hover:border-yellow-300 transition-colors">
              <h4 className="font-semibold text-yellow-700 mb-2">Buddhist Teachings</h4>
              <p className="text-sm text-gray-600">Core teachings and spiritual principles</p>
            </Link>
            <Link href="/religion/buddhism/history" className="block p-4 bg-white rounded-lg border hover:border-yellow-300 transition-colors">
              <h4 className="font-semibold text-yellow-700 mb-2">Buddhist History</h4>
              <p className="text-sm text-gray-600">Historical development and cultural evolution</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 