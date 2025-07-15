import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Buddhist Teachings | Core Principles, Philosophy, and Spiritual Wisdom',
  description: 'Explore comprehensive Buddhist teachings including the Four Noble Truths, Eightfold Path, dependent origination, and spiritual principles that guide the path to enlightenment.',
  keywords: 'Buddhist teachings, Four Noble Truths, Eightfold Path, dependent origination, Buddhist philosophy, spiritual principles',
  openGraph: {
    title: 'Buddhist Teachings | Core Principles, Philosophy, and Spiritual Wisdom',
    description: 'Explore comprehensive Buddhist teachings including the Four Noble Truths and Eightfold Path.',
    type: 'website',
  },
}

export default function BuddhismTeachingsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="text-sm breadcrumbs mb-8">
        <ul>
          <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
          <li><Link href="/religion" className="text-blue-600 hover:text-blue-800">Religions</Link></li>
          <li><Link href="/religion/buddhism" className="text-blue-600 hover:text-blue-800">Buddhism</Link></li>
          <li className="text-gray-600">Teachings</li>
        </ul>
      </nav>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-yellow-800 mb-6">Buddhist Teachings</h1>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
          <p className="text-lg text-yellow-800">
            Buddhist teachings provide a comprehensive framework for understanding the 
            nature of reality, the causes of suffering, and the path to liberation. 
            These teachings offer practical wisdom for living a meaningful and 
            spiritually fulfilling life.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">The Four Noble Truths</h2>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-orange-800 mb-4">The Foundation of Buddhist Wisdom</h3>
            <p className="mb-4">
              The Four Noble Truths form the cornerstone of Buddhist philosophy, providing 
              a systematic analysis of human suffering and the path to its cessation.
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
                  <li>Ignorance and delusion (avijja)</li>
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
              through the elimination of its causes and the realization of nirvana.
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
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Dependent Origination (Paticca Samuppada)</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">The Chain of Causation</h3>
            <p className="mb-4">
              Dependent origination explains how suffering arises through a chain of 
              interdependent factors and how it can be brought to an end.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-700 mb-3">The Twelve Links</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>1. Ignorance (avijja)</strong> - Not understanding reality</li>
                  <li><strong>2. Mental formations (sankhara)</strong> - Volitional activities</li>
                  <li><strong>3. Consciousness (vinnana)</strong> - Awareness and cognition</li>
                  <li><strong>4. Name and form (nama-rupa)</strong> - Mind and body</li>
                  <li><strong>5. Six sense bases (salayatana)</strong> - Sense organs</li>
                  <li><strong>6. Contact (phassa)</strong> - Sense-object contact</li>
                  <li><strong>7. Feeling (vedana)</strong> - Pleasant, unpleasant, neutral</li>
                  <li><strong>8. Craving (tanha)</strong> - Desire and attachment</li>
                  <li><strong>9. Clinging (upadana)</strong> - Grasping and holding</li>
                  <li><strong>10. Becoming (bhava)</strong> - Process of existence</li>
                  <li><strong>11. Birth (jati)</strong> - Arising of new existence</li>
                  <li><strong>12. Aging and death (jara-marana)</strong> - Decay and cessation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-3">Understanding and Application</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Interdependent nature of phenomena</li>
                  <li>No independent or permanent self</li>
                  <li>Conditioned nature of existence</li>
                  <li>Process of karma and rebirth</li>
                  <li>Path to liberation through wisdom</li>
                  <li>Breaking the cycle of suffering</li>
                  <li>Insight into emptiness</li>
                  <li>Freedom from ignorance</li>
                  <li>Realization of true nature</li>
                  <li>Complete liberation from samsara</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">The Three Characteristics</h3>
            <p className="mb-4">
              The three marks of existence describe the fundamental nature of all 
              conditioned phenomena and provide insight into the nature of reality.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Anicca (Impermanence):</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>All things are constantly changing</li>
                  <li>Nothing remains the same</li>
                  <li>Birth, growth, decay, death</li>
                  <li>Momentary arising and passing</li>
                  <li>Uncertainty and unpredictability</li>
                  <li>Conditioned nature of phenomena</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Dukkha (Suffering):</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Inherent unsatisfactoriness</li>
                  <li>Stress and tension</li>
                  <li>Dissatisfaction and discontent</li>
                  <li>Physical and mental pain</li>
                  <li>Separation and loss</li>
                  <li>Fundamental dis-ease</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">The Five Aggregates (Skandhas)</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Components of Experience</h3>
            <p className="mb-4">
              The five aggregates are the components that make up our experience of 
              existence, providing insight into the nature of the self and reality.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">The Five Aggregates</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>1. Form (rupa)</strong> - Physical body and material objects</li>
                  <li><strong>2. Feeling (vedana)</strong> - Pleasant, unpleasant, neutral sensations</li>
                  <li><strong>3. Perception (sanna)</strong> - Recognition and identification</li>
                  <li><strong>4. Mental formations (sankhara)</strong> - Thoughts, emotions, volitions</li>
                  <li><strong>5. Consciousness (vinnana)</strong> - Awareness and knowing</li>
                  <li>Interdependent and impermanent</li>
                  <li>No permanent self within them</li>
                  <li>Source of attachment and suffering</li>
                  <li>Objects of meditation and insight</li>
                  <li>Path to understanding anatta</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Insight and Liberation</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Understanding of no-self (anatta)</li>
                  <li>Freedom from identification</li>
                  <li>Reduction of attachment</li>
                  <li>Insight into impermanence</li>
                  <li>Realization of emptiness</li>
                  <li>Liberation from suffering</li>
                  <li>Direct experience of reality</li>
                  <li>Transcendence of ego</li>
                  <li>Compassion for all beings</li>
                  <li>Complete spiritual awakening</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Anatta (No-Self)</h3>
            <p className="mb-4">
              Anatta is the understanding that there is no permanent, unchanging self 
              or soul, challenging our fundamental assumptions about identity.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Understanding Anatta:</h4>
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
                <h4 className="font-semibold text-green-700 mb-2">Practical Implications:</h4>
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
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Buddhist Ethics and Values</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">The Five Precepts</h3>
              <p className="mb-3">
                The five precepts are the basic ethical guidelines for lay Buddhists, 
                providing a foundation for moral conduct and spiritual development.
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
              <h3 className="text-xl font-semibold text-blue-600 mb-3">The Four Sublime States</h3>
              <p className="mb-3">
                The Brahmaviharas are four qualities that lead to sublime states of mind 
                and are essential for spiritual development.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">The Four Qualities:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Loving-kindness (metta)</li>
                    <li>Compassion (karuna)</li>
                    <li>Sympathetic joy (mudita)</li>
                    <li>Equanimity (upekkha)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Benefits:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Purification of mind</li>
                    <li>Harmony with others</li>
                    <li>Freedom from ill-will</li>
                    <li>Spiritual progress</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Meditation and Contemplation</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="mb-4">
              Buddhist meditation practices are designed to develop concentration, 
              insight, and wisdom, leading to spiritual awakening and liberation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Types of Meditation</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Mindfulness meditation (satipatthana)</li>
                  <li>Loving-kindness meditation (metta)</li>
                  <li>Breath awareness (anapanasati)</li>
                  <li>Insight meditation (vipassana)</li>
                  <li>Concentration meditation (samatha)</li>
                  <li>Walking meditation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Benefits of Practice</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
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