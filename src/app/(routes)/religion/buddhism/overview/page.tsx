import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Buddhism Overview | Path to Enlightenment and Inner Peace',
  description: 'Explore the comprehensive overview of Buddhism, including the Four Noble Truths, Eightfold Path, core teachings, and spiritual practices that guide millions toward enlightenment.',
  keywords: 'Buddhism overview, Four Noble Truths, Eightfold Path, Buddhist teachings, meditation, enlightenment, Buddhist philosophy',
  openGraph: {
    title: 'Buddhism Overview | Path to Enlightenment and Inner Peace',
    description: 'Explore the comprehensive overview of Buddhism, including the Four Noble Truths and Eightfold Path.',
    type: 'website',
  },
}

export default function BuddhismOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="text-sm breadcrumbs mb-8">
        <ul>
          <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
          <li><Link href="/religion" className="text-blue-600 hover:text-blue-800">Religions</Link></li>
          <li className="text-gray-600">Buddhism</li>
        </ul>
      </nav>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-yellow-800 mb-6">Buddhism Overview</h1>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
          <p className="text-lg text-yellow-800">
            Buddhism, founded by Siddhartha Gautama (the Buddha) in the 6th century BCE, 
            is a spiritual tradition that offers a path to enlightenment through wisdom, 
            ethical conduct, and mental discipline. With over 500 million followers worldwide, 
            Buddhism emphasizes personal spiritual development and the alleviation of suffering.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">The Four Noble Truths</h2>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-orange-800 mb-4">The Foundation of Buddhist Teaching</h3>
            <p className="mb-4">
              The Four Noble Truths form the cornerstone of Buddhist philosophy, providing 
              a comprehensive understanding of human suffering and the path to liberation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">1. Dukkha: The Truth of Suffering</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Physical pain and discomfort</li>
                  <li>Mental and emotional suffering</li>
                  <li>Dissatisfaction and discontent</li>
                  <li>Impermanence and change</li>
                  <li>Separation from what we love</li>
                  <li>Association with what we dislike</li>
                  <li>Not getting what we want</li>
                  <li>Getting what we don't want</li>
                  <li>Birth, aging, sickness, death</li>
                  <li>Fundamental unsatisfactoriness</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">2. Samudaya: The Cause of Suffering</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Craving and desire (tanha)</li>
                  <li>Attachment to pleasurable experiences</li>
                  <li>Aversion to unpleasant experiences</li>
                  <li>Ignorance and delusion</li>
                  <li>Self-centeredness and ego</li>
                  <li>Wrong views and misconceptions</li>
                  <li>Greed and possessiveness</li>
                  <li>Hatred and ill-will</li>
                  <li>Restlessness and worry</li>
                  <li>Doubt and uncertainty</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">3. Nirodha: The Cessation of Suffering</h3>
            <p className="mb-4">
              The third noble truth offers hope by showing that suffering can be overcome 
              through the elimination of its causes.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Nirvana (Nibbana):</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Complete freedom from suffering</li>
                  <li>Extinction of craving and desire</li>
                  <li>Liberation from the cycle of rebirth</li>
                  <li>Ultimate peace and happiness</li>
                  <li>Realization of true nature</li>
                  <li>Unconditioned state of being</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Path to Liberation:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Gradual reduction of suffering</li>
                  <li>Development of wisdom and insight</li>
                  <li>Cultivation of wholesome qualities</li>
                  <li>Abandonment of unwholesome states</li>
                  <li>Direct experience of reality</li>
                  <li>Complete spiritual awakening</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">The Noble Eightfold Path</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Wisdom (Prajna)</h3>
              <p className="mb-3">
                The first two factors of the path develop wisdom and understanding, 
                providing the foundation for spiritual practice.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">1. Right View (Samma Ditthi):</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Understanding the Four Noble Truths</li>
                    <li>Recognition of karma and rebirth</li>
                    <li>Comprehension of impermanence</li>
                    <li>Insight into no-self (anatta)</li>
                    <li>Knowledge of dependent origination</li>
                    <li>Clear understanding of reality</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">2. Right Intention (Samma Sankappa):</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Renunciation of worldly desires</li>
                    <li>Goodwill and loving-kindness</li>
                    <li>Harmlessness and compassion</li>
                    <li>Commitment to spiritual growth</li>
                    <li>Pure and wholesome thoughts</li>
                    <li>Dedication to liberation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Ethical Conduct (Sila)</h3>
              <p className="mb-3">
                The next three factors focus on ethical behavior and moral development, 
                creating a foundation for mental purification.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">3. Right Speech (Samma Vaca):</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Truthful and honest communication</li>
                    <li>Kind and gentle words</li>
                    <li>Harmonious and beneficial speech</li>
                    <li>Avoiding gossip and slander</li>
                    <li>Speaking at appropriate times</li>
                    <li>Words that promote peace</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">4. Right Action (Samma Kammanta):</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Non-violence and harmlessness</li>
                    <li>Respect for life and property</li>
                    <li>Sexual responsibility and restraint</li>
                    <li>Honest and ethical livelihood</li>
                    <li>Environmental care and respect</li>
                    <li>Actions that benefit others</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Mental Discipline (Samadhi)</h3>
              <p className="mb-3">
                The final three factors develop concentration and mental discipline, 
                leading to deep insight and liberation.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">6. Right Effort (Samma Vayama):</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Preventing unwholesome states</li>
                    <li>Overcoming existing negative qualities</li>
                    <li>Developing wholesome qualities</li>
                    <li>Maintaining positive states</li>
                    <li>Persistent and balanced effort</li>
                    <li>Enthusiasm for spiritual practice</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">7. Right Mindfulness (Samma Sati):</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Awareness of body and sensations</li>
                    <li>Mindfulness of feelings</li>
                    <li>Observation of mental states</li>
                    <li>Contemplation of mental objects</li>
                    <li>Present-moment awareness</li>
                    <li>Clear comprehension</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-3">Right Concentration (Samma Samadhi)</h3>
              <p className="mb-3">
                The eighth factor develops deep concentration and meditative absorption, 
                leading to insight and wisdom.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">Meditative States:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Access concentration (upacara)</li>
                    <li>Absorption concentration (appana)</li>
                    <li>Four jhanas (meditative absorptions)</li>
                    <li>Insight meditation (vipassana)</li>
                    <li>Loving-kindness meditation</li>
                    <li>Mindfulness of breathing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">Benefits:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Mental clarity and focus</li>
                    <li>Emotional balance and peace</li>
                    <li>Insight into reality</li>
                    <li>Freedom from mental defilements</li>
                    <li>Spiritual awakening</li>
                    <li>Ultimate liberation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Core Buddhist Concepts</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">The Three Marks of Existence</h3>
            <p className="mb-4">
              These three characteristics describe the fundamental nature of all 
              conditioned phenomena and provide insight into the nature of reality.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-700 mb-3">1. Anicca (Impermanence)</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>All things are constantly changing</li>
                  <li>Nothing remains the same</li>
                  <li>Birth, growth, decay, death</li>
                  <li>Momentary arising and passing</li>
                  <li>Uncertainty and unpredictability</li>
                  <li>Conditioned nature of phenomena</li>
                  <li>Dependency on causes and conditions</li>
                  <li>Lack of inherent stability</li>
                  <li>Transient nature of experience</li>
                  <li>Foundation for wisdom and insight</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-3">2. Dukkha (Suffering)</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Inherent unsatisfactoriness</li>
                  <li>Stress and tension</li>
                  <li>Dissatisfaction and discontent</li>
                  <li>Physical and mental pain</li>
                  <li>Separation and loss</li>
                  <li>Association with unpleasant</li>
                  <li>Not getting what one wants</li>
                  <li>Getting what one doesn't want</li>
                  <li>Fundamental dis-ease</li>
                  <li>Motivation for spiritual practice</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">3. Anatta (No-Self)</h3>
            <p className="mb-4">
              Anatta is the understanding that there is no permanent, unchanging self 
              or soul, challenging our fundamental assumptions about identity.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Understanding Anatta:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>No permanent self or soul</li>
                  <li>Identity as a process</li>
                  <li>Five aggregates (skandhas)</li>
                  <li>Dependent origination</li>
                  <li>Conditioned nature of self</li>
                  <li>Freedom from self-clinging</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Practical Implications:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Reduction of ego and pride</li>
                  <li>Compassion for all beings</li>
                  <li>Freedom from attachment</li>
                  <li>Equanimity and peace</li>
                  <li>Understanding of interdependence</li>
                  <li>Path to liberation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Karma and Rebirth</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">The Law of Karma</h3>
              <p className="mb-3">
                Karma is the law of cause and effect, where intentional actions create 
                consequences that shape future experiences and rebirth.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Types of Karma:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Wholesome karma (kusala)</li>
                    <li>Unwholesome karma (akusala)</li>
                    <li>Neutral karma (avyakata)</li>
                    <li>Past karma (accumulated)</li>
                    <li>Present karma (current actions)</li>
                    <li>Future karma (results)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Karmic Results:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Immediate effects</li>
                    <li>Rebirth consequences</li>
                    <li>Environmental conditions</li>
                    <li>Personal characteristics</li>
                    <li>Life circumstances</li>
                    <li>Spiritual opportunities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">The Cycle of Rebirth</h3>
              <p className="mb-3">
                Samsara is the continuous cycle of birth, death, and rebirth, driven 
                by karma and ignorance, from which liberation is sought.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Realms of Existence:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Heavenly realms (devas)</li>
                    <li>Human realm</li>
                    <li>Animal realm</li>
                    <li>Hungry ghost realm (pretas)</li>
                    <li>Hell realms (narakas)</li>
                    <li>Asura realm (demi-gods)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Liberation from Samsara:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Understanding of Four Noble Truths</li>
                    <li>Practice of Eightfold Path</li>
                    <li>Development of wisdom</li>
                    <li>Elimination of craving</li>
                    <li>Realization of nirvana</li>
                    <li>Complete freedom from rebirth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Buddhist Ethics and Values</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">The Five Precepts</h3>
            <p className="mb-4">
              The five precepts are the basic ethical guidelines for lay Buddhists, 
              providing a foundation for moral conduct and spiritual development.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Basic Precepts</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>1. Panatipata veramani</strong> - Refrain from killing</li>
                  <li><strong>2. Adinnadana veramani</strong> - Refrain from stealing</li>
                  <li><strong>3. Kamesu micchacara veramani</strong> - Refrain from sexual misconduct</li>
                  <li><strong>4. Musavada veramani</strong> - Refrain from false speech</li>
                  <li><strong>5. Suramerayamajja pamadatthana veramani</strong> - Refrain from intoxicants</li>
                  <li>Foundation for moral development</li>
                  <li>Protection for oneself and others</li>
                  <li>Preparation for meditation</li>
                  <li>Expression of compassion</li>
                  <li>Path to peace and harmony</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Positive Qualities</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Loving-kindness (metta)</li>
                  <li>Compassion (karuna)</li>
                  <li>Sympathetic joy (mudita)</li>
                  <li>Equanimity (upekkha)</li>
                  <li>Generosity (dana)</li>
                  <li>Patience (khanti)</li>
                  <li>Wisdom (panna)</li>
                  <li>Mindfulness (sati)</li>
                  <li>Concentration (samadhi)</li>
                  <li>Energy (viriya)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">The Four Sublime States</h3>
            <p className="mb-4">
              The Brahmaviharas are four qualities that lead to sublime states of mind 
              and are essential for spiritual development.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">The Four Qualities:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Loving-kindness (metta)</li>
                  <li>Compassion (karuna)</li>
                  <li>Sympathetic joy (mudita)</li>
                  <li>Equanimity (upekkha)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Benefits:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Purification of mind</li>
                  <li>Harmony with others</li>
                  <li>Freedom from ill-will</li>
                  <li>Spiritual progress</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Global Impact and Contemporary Relevance</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="mb-4">
              Buddhism continues to influence global culture, psychology, and spirituality, 
              offering practical wisdom for modern challenges and opportunities.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Global Influence</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Mindfulness and meditation practices</li>
                  <li>Psychology and mental health</li>
                  <li>Environmental and ecological wisdom</li>
                  <li>Interfaith dialogue and peace</li>
                  <li>Art, literature, and philosophy</li>
                  <li>Social justice and compassion</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Contemporary Applications</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Stress reduction and wellness</li>
                  <li>Conflict resolution and peace</li>
                  <li>Environmental sustainability</li>
                  <li>Ethical business practices</li>
                  <li>Education and learning</li>
                  <li>Healthcare and healing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Explore More Buddhist Topics</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/religion/buddhism/scriptures" className="block p-4 bg-white rounded-lg border hover:border-yellow-300 transition-colors">
              <h4 className="font-semibold text-yellow-700 mb-2">Buddhist Scriptures</h4>
              <p className="text-sm text-gray-600">Sacred texts and philosophical literature</p>
            </Link>
            <Link href="/religion/buddhism/teachings" className="block p-4 bg-white rounded-lg border hover:border-yellow-300 transition-colors">
              <h4 className="font-semibold text-yellow-700 mb-2">Buddhist Teachings</h4>
              <p className="text-sm text-gray-600">Core teachings and spiritual principles</p>
            </Link>
            <Link href="/religion/buddhism/practices" className="block p-4 bg-white rounded-lg border hover:border-yellow-300 transition-colors">
              <h4 className="font-semibold text-yellow-700 mb-2">Buddhist Practices</h4>
              <p className="text-sm text-gray-600">Meditation, rituals, and spiritual practices</p>
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