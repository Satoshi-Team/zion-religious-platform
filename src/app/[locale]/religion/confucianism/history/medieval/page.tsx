import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: t('medievalConfucianism.title'),
    description: t('medievalConfucianism.description'),
    keywords: t('medievalConfucianism.keywords'),
    openGraph: {
      title: t('medievalConfucianism.title'),
      description: t('medievalConfucianism.description'),
      type: 'article',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('medievalConfucianism.title'),
      description: t('medievalConfucianism.description'),
    },
  }
}

export default function MedievalConfucianismPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-center mb-8">Medieval Confucianism: 220-1368 CE</h1>
        
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 p-6 rounded-lg mb-8">
          <p className="text-lg leading-relaxed">
            The medieval period of Confucianism spans from the fall of the Han dynasty to the 
            rise of the Ming dynasty. This era saw Confucianism adapt to new political realities, 
            interact with Buddhism and Daoism, and develop new philosophical approaches while 
            maintaining its core principles.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-red-600 dark:text-red-400">Historical Context</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Political Changes</h3>
              <ul className="space-y-3">
                <li><strong>Fall of Han Dynasty:</strong> End of unified empire (220 CE)</li>
                <li><strong>Three Kingdoms Period:</strong> Division and warfare (220-280)</li>
                <li><strong>Jin Dynasty:</strong> Brief reunification (265-420)</li>
                <li><strong>Northern and Southern Dynasties:</strong> Political fragmentation</li>
                <li><strong>Tang Dynasty:</strong> Cultural flourishing (618-907)</li>
                <li><strong>Song Dynasty:</strong> Neo-Confucian development (960-1279)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Religious Landscape</h3>
              <ul className="space-y-3">
                <li><strong>Buddhism:</strong> Major influence from India</li>
                <li><strong>Daoism:</strong> Indigenous religious tradition</li>
                <li><strong>Religious Competition:</strong> Competition for imperial favor</li>
                <li><strong>Syncretism:</strong> Blending of religious traditions</li>
                <li><strong>Confucian Response:</strong> Adaptation to new challenges</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-red-600 dark:text-red-400">Confucianism in the Six Dynasties</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Challenges and Adaptations</h3>
              <p className="mb-4">
                During the period of political fragmentation, Confucianism faced challenges 
                from Buddhism and Daoism while adapting to new social conditions.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Challenges:</h4>
                  <ul className="space-y-2">
                    <li>Political instability</li>
                    <li>Buddhist competition</li>
                    <li>Daoist influence</li>
                    <li>Social upheaval</li>
                    <li>Loss of imperial support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Adaptations:</h4>
                  <ul className="space-y-2">
                    <li>Philosophical responses</li>
                    <li>Textual preservation</li>
                    <li>Educational continuity</li>
                    <li>Social role maintenance</li>
                    <li>Cultural preservation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Confucian Scholars</h3>
              <p className="mb-4">
                Despite challenges, Confucian scholars continued to preserve and develop 
                the tradition during this period.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Figures:</h4>
                  <ul className="space-y-2">
                    <li>Wang Bi (226-249)</li>
                    <li>Guo Xiang (252-312)</li>
                    <li>Various commentators</li>
                    <li>Textual scholars</li>
                    <li>Educational leaders</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contributions:</h4>
                  <ul className="space-y-2">
                    <li>Textual commentary</li>
                    <li>Philosophical development</li>
                    <li>Educational preservation</li>
                    <li>Cultural continuity</li>
                    <li>Social stability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-red-600 dark:text-red-400">Tang Dynasty Revival</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Imperial Support</h3>
              <p className="mb-4">
                The Tang dynasty (618-907) saw a revival of Confucianism with strong 
                imperial support and cultural flourishing.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Government Support:</h4>
                  <ul className="space-y-2">
                    <li>Civil service examinations</li>
                    <li>Confucian education</li>
                    <li>Text compilation</li>
                    <li>Ritual ceremonies</li>
                    <li>Scholar-official system</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cultural Achievements:</h4>
                  <ul className="space-y-2">
                    <li>Classical scholarship</li>
                    <li>Literary development</li>
                    <li>Historical writing</li>
                    <li>Artistic expression</li>
                    <li>International influence</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Han Yu and the Confucian Revival</h3>
              <p className="mb-4">
                Han Yu (768-824) was a key figure in the Tang Confucian revival, 
                advocating for Confucianism against Buddhism and Daoism.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Ideas:</h4>
                  <ul className="space-y-2">
                    <li>Anti-Buddhist polemics</li>
                    <li>Confucian orthodoxy</li>
                    <li>Classical revival</li>
                    <li>Literary reform</li>
                    <li>Moral philosophy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Impact:</h4>
                  <ul className="space-y-2">
                    <li>Confucian resurgence</li>
                    <li>Literary influence</li>
                    <li>Philosophical development</li>
                    <li>Cultural nationalism</li>
                    <li>Educational reform</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-red-600 dark:text-red-400">Song Dynasty Neo-Confucianism</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">The Five Masters</h3>
              <p className="mb-4">
                The Song dynasty saw the development of Neo-Confucianism, a new synthesis 
                of Confucian thought that incorporated elements from Buddhism and Daoism.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Figures:</h4>
                  <ul className="space-y-2">
                    <li>Zhou Dunyi (1017-1073)</li>
                    <li>Zhang Zai (1020-1077)</li>
                    <li>Cheng Hao (1032-1085)</li>
                    <li>Cheng Yi (1033-1107)</li>
                    <li>Zhu Xi (1130-1200)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contributions:</h4>
                  <ul className="space-y-2">
                    <li>Metaphysical synthesis</li>
                    <li>Ethical system</li>
                    <li>Educational reform</li>
                    <li>Textual commentary</li>
                    <li>Philosophical integration</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Zhu Xi's Synthesis</h3>
              <p className="mb-4">
                Zhu Xi was the most important Neo-Confucian thinker, creating a comprehensive 
                philosophical system that would dominate East Asian thought for centuries.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Philosophical System:</h4>
                  <ul className="space-y-2">
                    <li>Li (Principle) and Qi (Material Force)</li>
                    <li>Investigation of things</li>
                    <li>Extension of knowledge</li>
                    <li>Sincerity and rectification</li>
                    <li>Self-cultivation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Educational Impact:</h4>
                  <ul className="space-y-2">
                    <li>Four Books commentary</li>
                    <li>Educational curriculum</li>
                    <li>Examination system</li>
                    <li>Textual authority</li>
                    <li>Cultural influence</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Neo-Confucian Philosophy</h3>
              <p className="mb-4">
                Neo-Confucianism developed a sophisticated metaphysical system that 
                addressed both cosmic and human concerns.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Metaphysical Concepts:</h4>
                  <ul className="space-y-2">
                    <li>Taiji (Supreme Ultimate)</li>
                    <li>Yin and Yang</li>
                    <li>Five Elements</li>
                    <li>Human nature</li>
                    <li>Moral principles</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ethical Principles:</h4>
                  <ul className="space-y-2">
                    <li>Investigation of things</li>
                    <li>Extension of knowledge</li>
                    <li>Sincerity of intention</li>
                    <li>Rectification of mind</li>
                    <li>Self-cultivation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-red-600 dark:text-red-400">Educational Developments</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Civil Service Examinations</h3>
              <p className="mb-4">
                The civil service examination system became the primary means of 
                selecting government officials, based on Confucian learning.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Examination System:</h4>
                  <ul className="space-y-2">
                    <li>Classical knowledge</li>
                    <li>Essay writing</li>
                    <li>Poetry composition</li>
                    <li>Policy analysis</li>
                    <li>Moral character</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Social Impact:</h4>
                  <ul className="space-y-2">
                    <li>Merit-based selection</li>
                    <li>Social mobility</li>
                    <li>Educational motivation</li>
                    <li>Cultural uniformity</li>
                    <li>Political stability</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Academies and Schools</h3>
              <p className="mb-4">
                Private academies and government schools flourished, providing 
                education in Confucian classics and preparing students for examinations.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Educational Institutions:</h4>
                  <ul className="space-y-2">
                    <li>Private academies</li>
                    <li>Government schools</li>
                    <li>Family education</li>
                    <li>Temple schools</li>
                    <li>Village schools</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Curriculum:</h4>
                  <ul className="space-y-2">
                    <li>Four Books</li>
                    <li>Five Classics</li>
                    <li>History and literature</li>
                    <li>Calligraphy</li>
                    <li>Ritual practice</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-red-600 dark:text-red-400">Cultural and Social Impact</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Literature and Arts</h3>
              <p className="mb-4">
                Confucianism influenced all aspects of cultural expression, from 
                literature and poetry to painting and calligraphy.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Literary Forms:</h4>
                  <ul className="space-y-2">
                    <li>Classical poetry</li>
                    <li>Historical writing</li>
                    <li>Philosophical essays</li>
                    <li>Biographical works</li>
                    <li>Educational texts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Artistic Expression:</h4>
                  <ul className="space-y-2">
                    <li>Landscape painting</li>
                    <li>Calligraphy</li>
                    <li>Music and ritual</li>
                    <li>Architecture</li>
                    <li>Decorative arts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Social Organization</h3>
              <p className="mb-4">
                Confucian principles shaped family structure, social relationships, 
                and community organization.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Family Structure:</h4>
                  <ul className="space-y-2">
                    <li>Filial piety</li>
                    <li>Respect for elders</li>
                    <li>Gender roles</li>
                    <li>Ancestor worship</li>
                    <li>Family harmony</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Social Relationships:</h4>
                  <ul className="space-y-2">
                    <li>Five relationships</li>
                    <li>Social hierarchy</li>
                    <li>Moral obligations</li>
                    <li>Community harmony</li>
                    <li>Ritual propriety</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-red-600 dark:text-red-400">Interaction with Other Traditions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Buddhism and Daoism</h3>
              <ul className="space-y-3">
                <li><strong>Competition:</strong> Rivalry for imperial favor and social influence</li>
                <li><strong>Influence:</strong> Buddhist and Daoist ideas on Neo-Confucianism</li>
                <li><strong>Syncretism:</strong> Blending of philosophical elements</li>
                <li><strong>Criticism:</strong> Confucian critiques of other traditions</li>
                <li><strong>Coexistence:</strong> Practical accommodation in society</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Religious Policy</h3>
              <ul className="space-y-3">
                <li><strong>Imperial Patronage:</strong> Government support for multiple traditions</li>
                <li><strong>Religious Tolerance:</strong> Generally peaceful coexistence</li>
                <li><strong>State Control:</strong> Government regulation of religious activities</li>
                <li><strong>Cultural Integration:</strong> Blending of religious practices</li>
                <li><strong>Social Harmony:</strong> Maintaining order among different groups</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-red-600 dark:text-red-400">Legacy and Impact</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Intellectual Legacy</h3>
              <ul className="space-y-2">
                <li><strong>Neo-Confucian Synthesis:</strong> Comprehensive philosophical system</li>
                <li><strong>Educational Tradition:</strong> Classical learning and examination system</li>
                <li><strong>Moral Philosophy:</strong> Ethical framework for society</li>
                <li><strong>Cultural Values:</strong> Foundation of East Asian civilization</li>
                <li><strong>Political Theory:</strong> Theory of virtuous government</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Social Impact</h3>
              <ul className="space-y-2">
                <li><strong>Family Values:</strong> Emphasis on filial piety and family harmony</li>
                <li><strong>Social Hierarchy:</strong> Orderly social relationships</li>
                <li><strong>Educational System:</strong> Merit-based selection and learning</li>
                <li><strong>Cultural Expression:</strong> Influence on arts and literature</li>
                <li><strong>Political Stability:</strong> Orderly government and society</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Regional Influence</h3>
              <ul className="space-y-2">
                <li><strong>Korea:</strong> Adoption of Neo-Confucianism</li>
                <li><strong>Japan:</strong> Influence on Tokugawa period</li>
                <li><strong>Vietnam:</strong> Confucian education and government</li>
                <li><strong>East Asia:</strong> Cultural and intellectual unity</li>
                <li><strong>Global Impact:</strong> Influence on world civilization</li>
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
                <li><strong>Neo-Confucian Texts:</strong> Writings of Song dynasty thinkers</li>
                <li><strong>Commentaries:</strong> Classical commentaries and interpretations</li>
                <li><strong>Historical Records:</strong> Dynastic histories and chronicles</li>
                <li><strong>Literary Works:</strong> Poetry, essays, and philosophical writings</li>
                <li><strong>Educational Materials:</strong> Examination texts and study guides</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Modern Scholarship</h3>
              <ul className="space-y-3">
                <li><strong>Historical Research:</strong> Studies of medieval Confucianism</li>
                <li><strong>Philosophical Analysis:</strong> Neo-Confucian philosophy</li>
                <li><strong>Educational History:</strong> Examination system and schools</li>
                <li><strong>Cultural Studies:</strong> Art, literature, and social impact</li>
                <li><strong>Comparative Studies:</strong> Confucianism in East Asian context</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Intellectual Flourishing</h3>
          <p className="text-center mb-4">
            The medieval period of Confucianism represents a time of intellectual 
            flourishing and cultural achievement. The development of Neo-Confucianism 
            and the establishment of educational systems created a lasting foundation 
            for East Asian civilization.
          </p>
          <div className="text-center">
            <a 
              href="/religion/confucianism/history/modern" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Continue to Modern Confucianism →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 