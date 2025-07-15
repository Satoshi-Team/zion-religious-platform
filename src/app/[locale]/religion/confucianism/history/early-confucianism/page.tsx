import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: t('earlyConfucianism.title'),
    description: t('earlyConfucianism.description'),
    keywords: t('earlyConfucianism.keywords'),
    openGraph: {
      title: t('earlyConfucianism.title'),
      description: t('earlyConfucianism.description'),
      type: 'article',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('earlyConfucianism.title'),
      description: t('earlyConfucianism.description'),
    },
  }
}

export default function EarlyConfucianismPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-center mb-8">Early Confucianism: 551 BCE - 220 CE</h1>
        
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 p-6 rounded-lg mb-8">
          <p className="text-lg leading-relaxed">
            The early period of Confucianism encompasses the life of Confucius and the formative 
            centuries of the Confucian tradition. This era established the core principles, 
            texts, and philosophical framework that would define Confucianism as one of the 
            most influential intellectual traditions in Chinese and East Asian history.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-red-600 dark:text-red-400">Historical Context</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Spring and Autumn Period (770-476 BCE)</h3>
              <ul className="space-y-3">
                <li><strong>Political Fragmentation:</strong> Decline of Zhou dynasty authority</li>
                <li><strong>Warring States:</strong> Constant warfare between states</li>
                <li><strong>Social Upheaval:</strong> Breakdown of traditional order</li>
                <li><strong>Economic Changes:</strong> Growth of commerce and urbanization</li>
                <li><strong>Intellectual Ferment:</strong> Rise of various philosophical schools</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Hundred Schools of Thought</h3>
              <ul className="space-y-3">
                <li><strong>Confucianism:</strong> Emphasis on social harmony and moral cultivation</li>
                <li><strong>Daoism:</strong> Focus on natural way and individual freedom</li>
                <li><strong>Legalism:</strong> Strict laws and centralized authority</li>
                <li><strong>Mohism:</strong> Universal love and utilitarianism</li>
                <li><strong>Other Schools:</strong> Various philosophical traditions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-red-600 dark:text-red-400">Confucius: The Master</h2>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Life of Confucius</h3>
            <p className="mb-4">
              Confucius (Kong Qiu, 551-479 BCE) was born in the state of Lu (modern Shandong) 
              and became one of the most influential thinkers in Chinese history.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Early Life:</h4>
                <ul className="space-y-2">
                  <li>Born in 551 BCE in Qufu, Lu state</li>
                  <li>Descended from noble family</li>
                  <li>Father died when he was young</li>
                  <li>Raised by his mother</li>
                  <li>Self-educated in classics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Career and Teaching:</h4>
                <ul className="space-y-2">
                  <li>Worked as government official</li>
                  <li>Became teacher and advisor</li>
                  <li>Traveled to various states</li>
                  <li>Gathered disciples</li>
                  <li>Compiled and edited classics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Core Teachings</h3>
              <ul className="space-y-3">
                <li><strong>Ren (Humaneness):</strong> Benevolence and human-heartedness</li>
                <li><strong>Li (Ritual):</strong> Proper conduct and social norms</li>
                <li><strong>Xiao (Filial Piety):</strong> Respect for parents and ancestors</li>
                <li><strong>Zhong (Loyalty):</strong> Faithfulness to rulers and friends</li>
                <li><strong>Yi (Righteousness):</strong> Moral rightness and justice</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Educational Philosophy</h3>
              <ul className="space-y-3">
                <li><strong>Equal Education:</strong> "In teaching, there should be no distinction of classes"</li>
                <li><strong>Learning Methods:</strong> Study, reflection, and practice</li>
                <li><strong>Moral Development:</strong> Character cultivation through learning</li>
                <li><strong>Teacher-Student Relationship:</strong> Mutual respect and dedication</li>
                <li><strong>Lifelong Learning:</strong> Continuous self-improvement</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-red-600 dark:text-red-400">The Disciples and Successors</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Major Disciples</h3>
              <p className="mb-4">
                Confucius had many disciples who continued his teachings and contributed 
                to the development of Confucian thought.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Disciples:</h4>
                  <ul className="space-y-2">
                    <li><strong>Yan Hui:</strong> Most beloved disciple, known for virtue</li>
                    <li><strong>Zengzi:</strong> Author of Great Learning</li>
                    <li><strong>Zilu:</strong> Brave and straightforward</li>
                    <li><strong>Zigong:</strong> Skilled in speech and diplomacy</li>
                    <li><strong>Zixia:</strong> Expert in literature and ritual</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contributions:</h4>
                  <ul className="space-y-2">
                    <li>Preservation of teachings</li>
                    <li>Development of ideas</li>
                    <li>Compilation of texts</li>
                    <li>Spread of Confucianism</li>
                    <li>Establishment of schools</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Mencius (Mengzi)</h3>
              <p className="mb-4">
                Mencius (372-289 BCE) was the most important early Confucian thinker after Confucius, 
                developing and expanding Confucian philosophy.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Ideas:</h4>
                  <ul className="space-y-2">
                    <li>Innate goodness of human nature</li>
                    <li>Righteous government</li>
                    <li>People-centered politics</li>
                    <li>Moral cultivation</li>
                    <li>Right to revolution</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Philosophical Contributions:</h4>
                  <ul className="space-y-2">
                    <li>Development of ren (humaneness)</li>
                    <li>Theory of human nature</li>
                    <li>Political philosophy</li>
                    <li>Ethical theory</li>
                    <li>Educational thought</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Xunzi</h3>
              <p className="mb-4">
                Xunzi (310-235 BCE) was another major Confucian thinker who emphasized 
                the importance of education and ritual in moral development.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Ideas:</h4>
                  <ul className="space-y-2">
                    <li>Human nature is evil</li>
                    <li>Importance of education</li>
                    <li>Role of ritual and music</li>
                    <li>Heaven and human separation</li>
                    <li>Practical philosophy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contributions:</h4>
                  <ul className="space-y-2">
                    <li>Systematic philosophy</li>
                    <li>Educational theory</li>
                    <li>Ritual philosophy</li>
                    <li>Political thought</li>
                    <li>Influence on Legalism</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-red-600 dark:text-red-400">The Confucian Classics</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">The Five Classics</h3>
              <p className="mb-4">
                The Five Classics are the foundational texts of Confucianism, 
                compiled and edited during the early period.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">The Classics:</h4>
                  <ul className="space-y-2">
                    <li><strong>Book of Changes (Yi Jing):</strong> Divination and cosmology</li>
                    <li><strong>Book of Documents (Shu Jing):</strong> Historical records</li>
                    <li><strong>Book of Songs (Shi Jing):</strong> Poetry and folk songs</li>
                    <li><strong>Book of Rites (Li Ji):</strong> Ritual and ceremony</li>
                    <li><strong>Spring and Autumn Annals:</strong> Historical chronicle</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Significance:</h4>
                  <ul className="space-y-2">
                    <li>Foundation of education</li>
                    <li>Source of moral values</li>
                    <li>Historical knowledge</li>
                    <li>Literary models</li>
                    <li>Cultural heritage</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">The Four Books</h3>
              <p className="mb-4">
                The Four Books became the core curriculum of Confucian education, 
                containing the essential teachings of Confucianism.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">The Books:</h4>
                  <ul className="space-y-2">
                    <li><strong>Analects (Lunyu):</strong> Sayings of Confucius</li>
                    <li><strong>Mencius:</strong> Teachings of Mencius</li>
                    <li><strong>Great Learning:</strong> Self-cultivation and governance</li>
                    <li><strong>Doctrine of the Mean:</strong> Balance and harmony</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Educational Role:</h4>
                  <ul className="space-y-2">
                    <li>Primary texts for study</li>
                    <li>Moral instruction</li>
                    <li>Philosophical foundation</li>
                    <li>Civil service examination</li>
                    <li>Cultural literacy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-red-600 dark:text-red-400">Core Philosophical Concepts</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Ren (Humaneness)</h3>
              <p className="mb-4">
                Ren is the central virtue in Confucianism, encompassing benevolence, 
                compassion, and human-heartedness.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Definition:</h4>
                  <ul className="space-y-2">
                    <li>Benevolence and compassion</li>
                    <li>Human-heartedness</li>
                    <li>Love for others</li>
                    <li>Moral excellence</li>
                    <li>Perfect virtue</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Practice:</h4>
                  <ul className="space-y-2">
                    <li>Treating others with respect</li>
                    <li>Helping those in need</li>
                    <li>Forgiving others' faults</li>
                    <li>Being kind and generous</li>
                    <li>Cultivating moral character</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Li (Ritual)</h3>
              <p className="mb-4">
                Li refers to proper conduct, ritual, and social norms that maintain 
                harmony in society.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Aspects:</h4>
                  <ul className="space-y-2">
                    <li>Ceremonial rituals</li>
                    <li>Social etiquette</li>
                    <li>Proper behavior</li>
                    <li>Cultural norms</li>
                    <li>Moral standards</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Functions:</h4>
                  <ul className="space-y-2">
                    <li>Maintain social order</li>
                    <li>Express respect</li>
                    <li>Guide behavior</li>
                    <li>Preserve traditions</li>
                    <li>Foster harmony</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Xiao (Filial Piety)</h3>
              <p className="mb-4">
                Xiao is the virtue of filial piety, emphasizing respect and care for 
                parents and ancestors.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Meaning:</h4>
                  <ul className="space-y-2">
                    <li>Respect for parents</li>
                    <li>Care for elderly</li>
                    <li>Ancestor worship</li>
                    <li>Family loyalty</li>
                    <li>Generational continuity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Practice:</h4>
                  <ul className="space-y-2">
                    <li>Supporting parents</li>
                    <li>Following their advice</li>
                    <li>Honoring their memory</li>
                    <li>Continuing family line</li>
                    <li>Maintaining family honor</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-red-600 dark:text-red-400">Political Philosophy</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Virtuous Government</h3>
              <p className="mb-4">
                Confucianism emphasizes that good government depends on the moral 
                character of rulers and officials.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Ruler's Qualities:</h4>
                  <ul className="space-y-2">
                    <li>Moral virtue</li>
                    <li>Benevolence</li>
                    <li>Righteousness</li>
                    <li>Wisdom</li>
                    <li>Trustworthiness</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Government Principles:</h4>
                  <ul className="space-y-2">
                    <li>Rule by virtue</li>
                    <li>People-centered</li>
                    <li>Moral education</li>
                    <li>Proper rituals</li>
                    <li>Harmonious society</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Mencius's Political Thought</h3>
              <p className="mb-4">
                Mencius developed a more democratic political philosophy, emphasizing 
                the people's welfare and right to revolution.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Ideas:</h4>
                  <ul className="space-y-2">
                    <li>People are most important</li>
                    <li>State serves the people</li>
                    <li>Right to revolution</li>
                    <li>Benevolent government</li>
                    <li>Economic welfare</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Political Principles:</h4>
                  <ul className="space-y-2">
                    <li>Mandate of Heaven</li>
                    <li>People's consent</li>
                    <li>Moral leadership</li>
                    <li>Economic policies</li>
                    <li>Social harmony</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-red-600 dark:text-red-400">Educational Philosophy</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Learning and Self-Cultivation</h3>
              <ul className="space-y-3">
                <li><strong>Lifelong Learning:</strong> Continuous self-improvement throughout life</li>
                <li><strong>Moral Development:</strong> Character cultivation through study</li>
                <li><strong>Practice and Reflection:</strong> Combining study with action</li>
                <li><strong>Teacher-Student Relationship:</strong> Mutual respect and dedication</li>
                <li><strong>Equal Opportunity:</strong> Education available to all who seek it</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Educational Methods</h3>
              <ul className="space-y-3">
                <li><strong>Classical Study:</strong> Reading and memorizing classics</li>
                <li><strong>Discussion and Debate:</strong> Engaging with ideas and others</li>
                <li><strong>Ritual Practice:</strong> Learning through ceremonial activities</li>
                <li><strong>Moral Exemplars:</strong> Learning from virtuous people</li>
                <li><strong>Self-Examination:</strong> Reflecting on one's actions and character</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-red-600 dark:text-red-400">Legacy and Impact</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Intellectual Contributions</h3>
              <ul className="space-y-2">
                <li><strong>Moral Philosophy:</strong> Comprehensive ethical system</li>
                <li><strong>Political Thought:</strong> Theory of virtuous government</li>
                <li><strong>Educational Theory:</strong> Philosophy of learning and teaching</li>
                <li><strong>Social Philosophy:</strong> Theory of harmonious society</li>
                <li><strong>Cultural Values:</strong> Foundation of Chinese culture</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Social Impact</h3>
              <ul className="space-y-2">
                <li><strong>Family Values:</strong> Emphasis on family harmony</li>
                <li><strong>Social Hierarchy:</strong> Orderly social relationships</li>
                <li><strong>Moral Education:</strong> Character development</li>
                <li><strong>Cultural Traditions:</strong> Ritual and ceremony</li>
                <li><strong>Political Stability:</strong> Orderly government</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Cultural Influence</h3>
              <ul className="space-y-2">
                <li><strong>Chinese Culture:</strong> Foundation of traditional values</li>
                <li><strong>East Asian Civilization:</strong> Influence across region</li>
                <li><strong>Literature and Arts:</strong> Cultural expression</li>
                <li><strong>Social Institutions:</strong> Family and government</li>
                <li><strong>Educational Systems:</strong> Classical education</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-red-600 dark:text-red-400">Study Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Primary Sources</h3>
              <ul className="space-y-3">
                <li><strong>Analects:</strong> Sayings of Confucius</li>
                <li><strong>Mencius:</strong> Teachings of Mencius</li>
                <li><strong>Xunzi:</strong> Writings of Xunzi</li>
                <li><strong>Five Classics:</strong> Traditional canonical texts</li>
                <li><strong>Four Books:</strong> Core educational texts</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Modern Scholarship</h3>
              <ul className="space-y-3">
                <li><strong>Historical Research:</strong> Studies of early Confucianism</li>
                <li><strong>Philosophical Analysis:</strong> Confucian philosophy</li>
                <li><strong>Textual Studies:</strong> Manuscript and textual analysis</li>
                <li><strong>Archaeological Evidence:</strong> Material culture</li>
                <li><strong>Comparative Studies:</strong> Confucianism in world context</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Foundation of Chinese Civilization</h3>
          <p className="text-center mb-4">
            Early Confucianism established the philosophical and ethical foundation 
            that would guide Chinese civilization for millennia. The teachings of Confucius 
            and his successors continue to influence people throughout East Asia and beyond.
          </p>
          <div className="text-center">
            <a 
              href="/religion/confucianism/history/medieval" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Continue to Medieval Confucianism →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 