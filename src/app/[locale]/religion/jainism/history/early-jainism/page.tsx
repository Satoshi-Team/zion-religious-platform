import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: t('earlyJainism.title'),
    description: t('earlyJainism.description'),
    keywords: t('earlyJainism.keywords'),
    openGraph: {
      title: t('earlyJainism.title'),
      description: t('earlyJainism.description'),
      type: 'article',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('earlyJainism.title'),
      description: t('earlyJainism.description'),
    },
  }
}

export default function EarlyJainismPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-center mb-8">Early Jainism: 599 BCE - 500 CE</h1>
        
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 p-6 rounded-lg mb-8">
          <p className="text-lg leading-relaxed">
            The early period of Jainism encompasses the life of Mahavira, the 24th Tirthankara, 
            and the formative centuries of the Jain tradition. This era established the core 
            principles, practices, and community structures that would define Jainism as a 
            distinct religious and philosophical tradition.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Historical Context</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Ancient India (6th Century BCE)</h3>
              <ul className="space-y-3">
                <li><strong>Social Structure:</strong> Rigid caste system and Brahmanical dominance</li>
                <li><strong>Religious Climate:</strong> Vedic rituals and sacrificial practices</li>
                <li><strong>Philosophical Movements:</strong> Rise of shramana traditions</li>
                <li><strong>Economic Changes:</strong> Growth of trade and urbanization</li>
                <li><strong>Political Landscape:</strong> Rise of powerful kingdoms and republics</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Shramana Tradition</h3>
              <ul className="space-y-3">
                <li><strong>Ascetic Movements:</strong> Rejection of Vedic authority</li>
                <li><strong>Renunciation:</strong> Emphasis on spiritual liberation</li>
                <li><strong>Non-violence:</strong> Ahimsa as central principle</li>
                <li><strong>Karma Theory:</strong> Understanding of cause and effect</li>
                <li><strong>Meditation:</strong> Contemplative practices</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Mahavira: The 24th Tirthankara</h2>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Life of Mahavira</h3>
            <p className="mb-4">
              Mahavira, born as Vardhamana, was the 24th and last Tirthankara of the current cosmic cycle. 
              His life and teachings established the foundation of Jainism as we know it today.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Early Life:</h4>
                <ul className="space-y-2">
                  <li>Born in 599 BCE in Kundagrama (modern Bihar)</li>
                  <li>Son of King Siddhartha and Queen Trishala</li>
                  <li>Kshatriya (warrior) caste background</li>
                  <li>Married to Yashoda and had a daughter</li>
                  <li>Lived in luxury as a prince</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Spiritual Awakening:</h4>
                <ul className="space-y-2">
                  <li>Renounced worldly life at age 30</li>
                  <li>Became a wandering ascetic</li>
                  <li>Practiced extreme austerities</li>
                  <li>Achieved kevala jnana (omniscience)</li>
                  <li>Became a Tirthankara (ford-maker)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Teachings and Philosophy</h3>
              <ul className="space-y-3">
                <li><strong>Ahimsa (Non-violence):</strong> Absolute non-violence toward all living beings</li>
                <li><strong>Anekantavada:</strong> Doctrine of multiple viewpoints</li>
                <li><strong>Syadvada:</strong> Theory of conditional predication</li>
                <li><strong>Karma Theory:</strong> Understanding of karmic bondage and liberation</li>
                <li><strong>Three Jewels:</strong> Right faith, right knowledge, right conduct</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Monastic Organization</h3>
              <ul className="space-y-3">
                <li><strong>Fourfold Sangha:</strong> Monks, nuns, laymen, laywomen</li>
                <li><strong>Monastic Rules:</strong> Strict code of conduct for ascetics</li>
                <li><strong>Lay Community:</strong> Guidelines for householders</li>
                <li><strong>Preaching Tours:</strong> Traveling to spread teachings</li>
                <li><strong>Disciples:</strong> Large following of monks and nuns</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">The Tirthankara Tradition</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Concept of Tirthankaras</h3>
              <p className="mb-4">
                Tirthankaras are spiritual teachers who have achieved liberation and show others 
                the path to moksha (liberation). They are not gods but enlightened beings.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Characteristics:</h4>
                  <ul className="space-y-2">
                    <li>Achieve kevala jnana (omniscience)</li>
                    <li>Establish the fourfold sangha</li>
                    <li>Preach the dharma</li>
                    <li>Attain moksha (liberation)</li>
                    <li>Serve as spiritual guides</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Historical Tirthankaras:</h4>
                  <ul className="space-y-2">
                    <li>Rishabhanatha (1st)</li>
                    <li>Parshvanatha (23rd)</li>
                    <li>Mahavira (24th)</li>
                    <li>Each has unique symbols</li>
                    <li>Different life stories</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Parshvanatha</h3>
              <p className="mb-4">
                Parshvanatha, the 23rd Tirthankara, lived about 250 years before Mahavira and 
                established important aspects of Jain practice.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Teachings:</h4>
                  <ul className="space-y-2">
                    <li>Four vows (chaturvratas)</li>
                    <li>Non-violence</li>
                    <li>Truthfulness</li>
                    <li>Non-stealing</li>
                    <li>Non-possession</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Legacy:</h4>
                  <ul className="space-y-2">
                    <li>Established monastic order</li>
                    <li>Influenced Mahavira</li>
                    <li>Historical evidence exists</li>
                    <li>Widely venerated</li>
                    <li>Symbol: serpent</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Core Philosophical Principles</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Ahimsa (Non-violence)</h3>
              <p className="mb-4">
                Ahimsa is the fundamental principle of Jainism, extending beyond physical violence 
                to include mental and verbal harm.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Physical Ahimsa:</h4>
                  <ul className="space-y-2">
                    <li>No killing of any living being</li>
                    <li>Vegetarianism</li>
                    <li>Careful walking</li>
                    <li>Filtering water</li>
                    <li>Protection of all life</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Mental Ahimsa:</h4>
                  <ul className="space-y-2">
                    <li>No harmful thoughts</li>
                    <li>Compassion for all</li>
                    <li>Forgiveness</li>
                    <li>Peaceful mind</li>
                    <li>Universal love</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Anekantavada (Multiple Viewpoints)</h3>
              <p className="mb-4">
                Anekantavada teaches that reality is complex and can be viewed from multiple perspectives, 
                promoting tolerance and understanding.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Principles:</h4>
                  <ul className="space-y-2">
                    <li>Reality is multifaceted</li>
                    <li>No single absolute truth</li>
                    <li>Multiple valid perspectives</li>
                    <li>Relativity of viewpoints</li>
                    <li>Intellectual humility</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Applications:</h4>
                  <ul className="space-y-2">
                    <li>Religious tolerance</li>
                    <li>Philosophical dialogue</li>
                    <li>Conflict resolution</li>
                    <li>Understanding others</li>
                    <li>Peaceful coexistence</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Karma Theory</h3>
              <p className="mb-4">
                Jain karma theory explains how actions bind the soul and how liberation can be achieved 
                through right conduct and purification.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Karmic Bondage:</h4>
                  <ul className="space-y-2">
                    <li>Actions create karmic particles</li>
                    <li>Karma attaches to the soul</li>
                    <li>Different types of karma</li>
                    <li>Karma determines rebirth</li>
                    <li>Cycle of samsara</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Liberation:</h4>
                  <ul className="space-y-2">
                    <li>Stopping new karma</li>
                    <li>Burning existing karma</li>
                    <li>Right conduct</li>
                    <li>Austerities</li>
                    <li>Moksha (liberation)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Monastic Life and Practices</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Five Great Vows (Mahavratas)</h3>
              <p className="mb-4">
                Monks and nuns take five great vows that form the foundation of Jain monastic life.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">The Vows:</h4>
                  <ul className="space-y-2">
                    <li><strong>Ahimsa:</strong> Non-violence</li>
                    <li><strong>Satya:</strong> Truthfulness</li>
                    <li><strong>Asteya:</strong> Non-stealing</li>
                    <li><strong>Brahmacharya:</strong> Celibacy</li>
                    <li><strong>Aparigraha:</strong> Non-possession</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Practice:</h4>
                  <ul className="space-y-2">
                    <li>Absolute observance</li>
                    <li>Daily reflection</li>
                    <li>Confession of violations</li>
                    <li>Penance for mistakes</li>
                    <li>Continuous effort</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Austerities (Tapas)</h3>
              <p className="mb-4">
                Austerities are practices that help purify the soul and burn accumulated karma.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">External Austerities:</h4>
                  <ul className="space-y-2">
                    <li>Fasting</li>
                    <li>Reduced food intake</li>
                    <li>Begging for food</li>
                    <li>Abstaining from tasty food</li>
                    <li>Physical hardships</li>
                    <li>Living in solitude</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Internal Austerities:</h4>
                  <ul className="space-y-2">
                    <li>Confession</li>
                    <li>Respect for others</li>
                    <li>Service to others</li>
                    <li>Study of scriptures</li>
                    <li>Meditation</li>
                    <li>Abandoning attachment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Lay Community</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Twelve Vows for Householders</h3>
              <ul className="space-y-3">
                <li><strong>Five Anuvratas:</strong> Lesser vows (non-violence, truth, non-stealing, celibacy, non-possession)</li>
                <li><strong>Three Gunavratas:</strong> Merit vows (limiting activities, limiting objects, avoiding purposeless sin)</li>
                <li><strong>Four Shikshavratas:</strong> Disciplinary vows (meditation, limited duration, fasting, charity)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Daily Practices</h3>
              <ul className="space-y-3">
                <li><strong>Morning Prayer:</strong> Navakar Mantra and other prayers</li>
                <li><strong>Vegetarianism:</strong> Strict vegetarian diet</li>
                <li><strong>Fasting:</strong> Regular fasting practices</li>
                <li><strong>Charity:</strong> Giving to monks and the needy</li>
                <li><strong>Study:</strong> Reading and studying scriptures</li>
                <li><strong>Meditation:</strong> Contemplative practices</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Scriptures and Literature</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Agamas (Canonical Texts)</h3>
              <ul className="space-y-3">
                <li><strong>Twelve Angas:</strong> Main canonical texts</li>
                <li><strong>Twelve Upangas:</strong> Secondary texts</li>
                <li><strong>Ten Prakirnakas:</strong> Mixed texts</li>
                <li><strong>Six Chedasutras:</strong> Disciplinary texts</li>
                <li><strong>Four Mulasutras:</strong> Root texts</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Key Texts</h3>
              <ul className="space-y-3">
                <li><strong>Acharanga Sutra:</strong> Rules for monks</li>
                <li><strong>Sutrakritanga:</strong> Philosophical discussions</li>
                <li><strong>Uttaradhyayana:</strong> Teachings and stories</li>
                <li><strong>Kalpa Sutra:</strong> Biographies of Tirthankaras</li>
                <li><strong>Tattvartha Sutra:</strong> Systematic philosophy</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Spread and Development</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Geographic Spread</h3>
              <ul className="space-y-3">
                <li><strong>Magadha:</strong> Original center in Bihar</li>
                <li><strong>Eastern India:</strong> Bengal and Orissa</li>
                <li><strong>Central India:</strong> Madhya Pradesh</li>
                <li><strong>Western India:</strong> Gujarat and Rajasthan</li>
                <li><strong>Southern India:</strong> Karnataka and Tamil Nadu</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Royal Patronage</h3>
              <ul className="space-y-3">
                <li><strong>Chandragupta Maurya:</strong> Converted to Jainism</li>
                <li><strong>Ashoka:</strong> Initially supported Jainism</li>
                <li><strong>Kharavela:</strong> Kalinga king and patron</li>
                <li><strong>Various Dynasties:</strong> Support across regions</li>
                <li><strong>Temple Building:</strong> Construction of Jain temples</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Legacy and Impact</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Religious Contributions</h3>
              <ul className="space-y-2">
                <li><strong>Non-violence:</strong> Comprehensive doctrine of ahimsa</li>
                <li><strong>Karma Theory:</strong> Detailed understanding of karma</li>
                <li><strong>Philosophy:</strong> Anekantavada and syadvada</li>
                <li><strong>Ethics:</strong> Strict moral code</li>
                <li><strong>Liberation:</strong> Path to moksha</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Social Impact</h3>
              <ul className="space-y-2">
                <li><strong>Vegetarianism:</strong> Promotion of non-violent diet</li>
                <li><strong>Education:</strong> Establishment of learning centers</li>
                <li><strong>Charity:</strong> Tradition of giving and service</li>
                <li><strong>Art and Architecture:</strong> Jain temples and art</li>
                <li><strong>Literature:</strong> Rich literary tradition</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Cultural Influence</h3>
              <ul className="space-y-2">
                <li><strong>Indian Philosophy:</strong> Influence on other traditions</li>
                <li><strong>Gandhi:</strong> Influence on non-violent movement</li>
                <li><strong>Environmental Ethics:</strong> Care for all living beings</li>
                <li><strong>Religious Tolerance:</strong> Anekantavada principle</li>
                <li><strong>Spiritual Practices:</strong> Meditation and austerity</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Study Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Primary Sources</h3>
              <ul className="space-y-3">
                <li><strong>Agama Literature:</strong> Canonical Jain texts</li>
                <li><strong>Biographies:</strong> Lives of Tirthankaras</li>
                <li><strong>Commentaries:</strong> Ancient and medieval commentaries</li>
                <li><strong>Inscriptions:</strong> Archaeological evidence</li>
                <li><strong>Art and Architecture:</strong> Temples and sculptures</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Modern Scholarship</h3>
              <ul className="space-y-3">
                <li><strong>Historical Research:</strong> Studies of early Jainism</li>
                <li><strong>Philosophical Analysis:</strong> Jain philosophy and logic</li>
                <li><strong>Archaeological Studies:</strong> Material evidence</li>
                <li><strong>Textual Studies:</strong> Manuscript and textual analysis</li>
                <li><strong>Comparative Religion:</strong> Jainism in world context</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Foundation for the Future</h3>
          <p className="text-center mb-4">
            The early period of Jainism established the philosophical and ethical foundation 
            that would guide the tradition for millennia. The teachings of Mahavira and the 
            early Jain community continue to inspire millions of people worldwide.
          </p>
          <div className="text-center">
            <a 
              href="/religion/jainism/history/medieval" 
              className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Continue to Medieval Jainism →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 