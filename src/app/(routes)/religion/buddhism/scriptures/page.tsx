import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Buddhist Scriptures | Sacred Texts from Pali Canon to Mahayana Sutras',
  description: 'Explore the vast collection of Buddhist scriptures including the Pali Canon, Mahayana sutras, Tibetan texts, and philosophical literature that guide Buddhist practice.',
  keywords: 'Buddhist scriptures, Pali Canon, Tripitaka, Mahayana sutras, Tibetan texts, Buddhist literature, dharma texts',
  openGraph: {
    title: 'Buddhist Scriptures | Sacred Texts from Pali Canon to Mahayana Sutras',
    description: 'Explore the vast collection of Buddhist scriptures including the Pali Canon and Mahayana sutras.',
    type: 'website',
  },
}

export default function BuddhismScripturesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="text-sm breadcrumbs mb-8">
        <ul>
          <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
          <li><Link href="/religion" className="text-blue-600 hover:text-blue-800">Religions</Link></li>
          <li><Link href="/religion/buddhism" className="text-blue-600 hover:text-blue-800">Buddhism</Link></li>
          <li className="text-gray-600">Scriptures</li>
        </ul>
      </nav>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-yellow-800 mb-6">Buddhist Scriptures</h1>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
          <p className="text-lg text-yellow-800">
            Buddhist scriptures form one of the world's most extensive collections of 
            sacred literature, encompassing the teachings of the Buddha and his disciples 
            across different traditions and historical periods.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">The Pali Canon (Tipitaka)</h2>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-orange-800 mb-4">The Three Baskets</h3>
            <p className="mb-4">
              The Tipitaka, meaning "Three Baskets," is the oldest and most authoritative 
              collection of Buddhist scriptures, preserved in the Pali language.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Vinaya Pitaka (Discipline Basket)</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Monastic rules and regulations</li>
                  <li>Code of conduct for monks and nuns</li>
                  <li>Procedures for monastic life</li>
                  <li>Disciplinary procedures</li>
                  <li>Historical accounts of rule formation</li>
                  <li>Guidelines for community harmony</li>
                  <li>Ethical principles and values</li>
                  <li>Social and organizational structure</li>
                  <li>Conflict resolution methods</li>
                  <li>Preservation of monastic tradition</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Sutta Pitaka (Discourse Basket)</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Direct teachings of the Buddha</li>
                  <li>Dialogues and conversations</li>
                  <li>Stories and parables</li>
                  <li>Philosophical discussions</li>
                  <li>Meditation instructions</li>
                  <li>Ethical teachings</li>
                  <li>Cosmology and psychology</li>
                  <li>Path to liberation</li>
                  <li>Historical and biographical accounts</li>
                  <li>Practical guidance for daily life</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Abhidhamma Pitaka (Higher Teaching Basket)</h3>
            <p className="mb-4">
              The Abhidhamma contains systematic philosophical analysis and psychological 
              insights that form the foundation of Buddhist psychology and metaphysics.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Content and Structure:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Systematic analysis of consciousness</li>
                  <li>Classification of mental factors</li>
                  <li>Analysis of material phenomena</li>
                  <li>Relations between phenomena</li>
                  <li>Path of purification</li>
                  <li>Meditation techniques and stages</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Philosophical Significance:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Understanding of mind and matter</li>
                  <li>Analysis of consciousness</li>
                  <li>Psychology of meditation</li>
                  <li>Metaphysical framework</li>
                  <li>Path to enlightenment</li>
                  <li>Systematic spiritual development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Major Sutta Collections</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Digha Nikaya (Long Discourses)</h3>
              <p className="mb-3">
                The Digha Nikaya contains 34 long discourses covering major teachings, 
                including the Four Noble Truths and the Eightfold Path.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Key Suttas:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Mahaparinibbana Sutta (Final Days)</li>
                    <li>Brahmajala Sutta (Net of Views)</li>
                    <li>Samannaphala Sutta (Fruits of Asceticism)</li>
                    <li>Mahasatipatthana Sutta (Great Discourse on Mindfulness)</li>
                    <li>Sigalovada Sutta (Advice to Sigala)</li>
                    <li>Mahapadana Sutta (Great Discourse on Beginnings)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Themes:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Core Buddhist teachings</li>
                    <li>Meditation and mindfulness</li>
                    <li>Ethics and morality</li>
                    <li>Cosmology and rebirth</li>
                    <li>Social and family life</li>
                    <li>Spiritual development</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Majjhima Nikaya (Middle Length Discourses)</h3>
              <p className="mb-3">
                The Majjhima Nikaya contains 152 medium-length discourses that provide 
                practical guidance for spiritual practice and daily living.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Key Suttas:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Satipatthana Sutta (Foundations of Mindfulness)</li>
                    <li>Anapanasati Sutta (Mindfulness of Breathing)</li>
                    <li>Metta Sutta (Loving-kindness)</li>
                    <li>Kamma Sutta (Action)</li>
                    <li>Rahulovada Sutta (Advice to Rahula)</li>
                    <li>Alagaddupama Sutta (Simile of the Snake)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Practical Focus:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Meditation techniques</li>
                    <li>Mindfulness practices</li>
                    <li>Ethical conduct</li>
                    <li>Family relationships</li>
                    <li>Spiritual progress</li>
                    <li>Common misconceptions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Samyutta Nikaya (Connected Discourses)</h3>
              <p className="mb-3">
                The Samyutta Nikaya contains 2,889 shorter discourses organized by themes, 
                providing systematic coverage of Buddhist concepts.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Major Sections:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Sagatha-vagga (With Verses)</li>
                    <li>Nidana-vagga (Causes)</li>
                    <li>Khandha-vagga (Aggregates)</li>
                    <li>Salayatana-vagga (Sense Bases)</li>
                    <li>Maha-vagga (Great)</li>
                    <li>Abhisamaya-vagga (Penetrative Knowledge)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Systematic Coverage:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Core Buddhist concepts</li>
                    <li>Meditation practices</li>
                    <li>Psychological analysis</li>
                    <li>Philosophical discussions</li>
                    <li>Practical applications</li>
                    <li>Spiritual development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Mahayana Scriptures</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Prajnaparamita Sutras</h3>
            <p className="mb-4">
              The Prajnaparamita (Perfection of Wisdom) sutras are central to Mahayana 
              Buddhism, emphasizing the emptiness (sunyata) of all phenomena.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Major Texts</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Heart Sutra</strong> - Concise summary of emptiness</li>
                  <li><strong>Diamond Sutra</strong> - Perfection of wisdom</li>
                  <li><strong>Perfection of Wisdom in 8,000 Lines</strong></li>
                  <li><strong>Perfection of Wisdom in 25,000 Lines</strong></li>
                  <li><strong>Perfection of Wisdom in 100,000 Lines</strong></li>
                  <li>Emphasis on sunyata (emptiness)</li>
                  <li>Bodhisattva ideal and compassion</li>
                  <li>Transcendence of dualistic thinking</li>
                  <li>Ultimate reality beyond concepts</li>
                  <li>Path to complete enlightenment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Key Teachings</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Emptiness of all phenomena</li>
                  <li>Non-duality of samsara and nirvana</li>
                  <li>Bodhisattva path and compassion</li>
                  <li>Transcendence of conceptual thinking</li>
                  <li>Perfection of wisdom (prajna)</li>
                  <li>Skillful means (upaya)</li>
                  <li>Buddha nature in all beings</li>
                  <li>Interdependent origination</li>
                  <li>Ultimate and conventional truth</li>
                  <li>Complete enlightenment (sambodhi)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">Lotus Sutra (Saddharma Pundarika)</h3>
            <p className="mb-4">
              The Lotus Sutra is one of the most influential Mahayana texts, emphasizing 
              the universal potential for Buddhahood and skillful means.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Key Themes:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Universal Buddhahood</li>
                  <li>Skillful means (upaya)</li>
                  <li>One vehicle (ekayana)</li>
                  <li>Eternal Buddha nature</li>
                  <li>Compassion and wisdom</li>
                  <li>Transformation of the world</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Influence:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Foundation of many Mahayana schools</li>
                  <li>Development of Buddha nature concept</li>
                  <li>Emphasis on lay practice</li>
                  <li>Integration of diverse teachings</li>
                  <li>Universal salvation ideal</li>
                  <li>Cultural and artistic inspiration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Pure Land Scriptures</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Pure Land Sutras</h3>
              <p className="mb-3">
                Pure Land scriptures describe the Western Paradise of Amitabha Buddha 
                and the path of devotion leading to rebirth there.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Major Texts:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Larger Sukhavativyuha Sutra</li>
                    <li>Smaller Sukhavativyuha Sutra</li>
                    <li>Amitayurdhyana Sutra</li>
                    <li>Pratyutpanna Samadhi Sutra</li>
                    <li>Pure Land visualization practices</li>
                    <li>Devotional practices and vows</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Teachings:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Amitabha Buddha's vows</li>
                    <li>Pure Land visualization</li>
                    <li>Nembutsu practice</li>
                    <li>Faith and devotion</li>
                    <li>Easy path to liberation</li>
                    <li>Universal salvation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Pure Land Practice</h3>
              <p className="mb-3">
                Pure Land practice emphasizes devotion to Amitabha Buddha and the 
                recitation of his name for rebirth in the Western Paradise.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Core Practices:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Nembutsu (recitation of Buddha's name)</li>
                    <li>Pure Land visualization</li>
                    <li>Devotional practices</li>
                    <li>Faith in Amitabha's vows</li>
                    <li>Desire for rebirth in Pure Land</li>
                    <li>Gratitude and thanksgiving</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Benefits:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Easy path to liberation</li>
                    <li>Universal accessibility</li>
                    <li>Comfort and peace of mind</li>
                    <li>Community support</li>
                    <li>Hope and encouragement</li>
                    <li>Spiritual transformation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Tibetan Buddhist Scriptures</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Kangyur and Tengyur</h3>
            <p className="mb-4">
              The Tibetan Buddhist canon consists of the Kangyur (Buddha's words) and 
              Tengyur (commentaries), preserving a vast collection of Buddhist literature.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Kangyur (Buddha's Words)</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Vinaya (discipline) texts</li>
                  <li>Prajnaparamita sutras</li>
                  <li>Avatamsaka sutra</li>
                  <li>Ratnakuta sutras</li>
                  <li>Mahaparinirvana sutra</li>
                  <li>Lalitavistara sutra</li>
                  <li>Vimalakirti sutra</li>
                  <li>Lankavatara sutra</li>
                  <li>Samadhiraja sutra</li>
                  <li>Various tantric texts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Tengyur (Commentaries)</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Philosophical treatises</li>
                  <li>Commentaries on sutras</li>
                  <li>Abhidharma texts</li>
                  <li>Logic and epistemology</li>
                  <li>Grammar and linguistics</li>
                  <li>Medicine and astrology</li>
                  <li>Poetry and literature</li>
                  <li>Historical accounts</li>
                  <li>Biographies of masters</li>
                  <li>Tantric commentaries</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Tantric Texts and Practices</h3>
            <p className="mb-4">
              Tibetan Buddhism includes extensive tantric literature and practices 
              for advanced practitioners seeking rapid enlightenment.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Tantric Categories:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Kriya tantra (action tantra)</li>
                  <li>Carya tantra (performance tantra)</li>
                  <li>Yoga tantra (union tantra)</li>
                  <li>Anuttarayoga tantra (highest yoga)</li>
                  <li>Mother tantras</li>
                  <li>Father tantras</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Key Practices:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Deity yoga and visualization</li>
                  <li>Mantra recitation</li>
                  <li>Mudra and hand gestures</li>
                  <li>Mandala practices</li>
                  <li>Energy and chakra work</li>
                  <li>Advanced meditation techniques</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-700 mb-6">Zen and Chan Scriptures</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="mb-4">
              Zen/Chan Buddhism emphasizes direct experience and transmission beyond 
              words, with unique texts that reflect this approach.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Key Zen Texts</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Platform Sutra of the Sixth Patriarch</li>
                  <li>Blue Cliff Record</li>
                  <li>Gateless Gate</li>
                  <li>Book of Serenity</li>
                  <li>Transmission of the Lamp</li>
                  <li>Zen poetry and koans</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Zen Approach</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Direct pointing to mind</li>
                  <li>Transmission beyond words</li>
                  <li>Koan practice and inquiry</li>
                  <li>Sudden awakening</li>
                  <li>Everyday mind is Buddha</li>
                  <li>Simplicity and directness</li>
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