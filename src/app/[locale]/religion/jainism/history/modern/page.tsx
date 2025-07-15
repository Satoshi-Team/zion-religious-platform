import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: t('modernJainism.title'),
    description: t('modernJainism.description'),
    keywords: t('modernJainism.keywords'),
    openGraph: {
      title: t('modernJainism.title'),
      description: t('modernJainism.description'),
      type: 'article',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('modernJainism.title'),
      description: t('modernJainism.description'),
    },
  }
}

export default function ModernJainismPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-center mb-8">Modern Jainism: 1500-Present</h1>
        
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 p-6 rounded-lg mb-8">
          <p className="text-lg leading-relaxed">
            The modern period of Jainism encompasses the era from the 16th century to the present day. 
            This period has seen Jains adapt to colonial rule, participate in independence movements, 
            establish global communities, and face both challenges and opportunities in the contemporary world.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Mughal and Colonial Period (1500-1947)</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Mughal Rule</h3>
              <ul className="space-y-3">
                <li><strong>Akbar's Tolerance:</strong> Religious tolerance under Akbar</li>
                <li><strong>Jain Scholars:</strong> Hiravijaya Suri at Mughal court</li>
                <li><strong>Religious Freedom:</strong> Protection of Jain practices</li>
                <li><strong>Temple Building:</strong> Construction of new temples</li>
                <li><strong>Cultural Exchange:</strong> Interaction with Mughal culture</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">British Colonial Period</h3>
              <ul className="space-y-3">
                <li><strong>Economic Opportunities:</strong> Trade and commerce</li>
                <li><strong>Educational Access:</strong> Western education</li>
                <li><strong>Social Reform:</strong> Modernization movements</li>
                <li><strong>Political Participation:</strong> Involvement in independence</li>
                <li><strong>Cultural Preservation:</strong> Maintaining traditions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Jain Reform Movements</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Terapanth Movement</h3>
              <p className="mb-4">
                The Terapanth movement, founded by Acharya Bhikshu in the 18th century, 
                emphasized strict adherence to Jain principles and monastic discipline.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Principles:</h4>
                  <ul className="space-y-2">
                    <li>Strict monastic discipline</li>
                    <li>Emphasis on meditation</li>
                    <li>Rejection of idol worship</li>
                    <li>Focus on spiritual practice</li>
                    <li>Simple lifestyle</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Impact:</h4>
                  <ul className="space-y-2">
                    <li>Reform of monastic practices</li>
                    <li>Spiritual revival</li>
                    <li>Educational institutions</li>
                    <li>Social service activities</li>
                    <li>Global spread</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Sthanakvasi Movement</h3>
              <p className="mb-4">
                The Sthanakvasi movement, founded by Lavaji in the 17th century, 
                rejected temple worship and emphasized meditation and spiritual practice.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Beliefs:</h4>
                  <ul className="space-y-2">
                    <li>Rejection of idol worship</li>
                    <li>Emphasis on meditation</li>
                    <li>Simple religious practices</li>
                    <li>Focus on inner spirituality</li>
                    <li>Minimal ritualism</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Practices:</h4>
                  <ul className="space-y-2">
                    <li>Meditation halls (sthanakas)</li>
                    <li>Spiritual discourses</li>
                    <li>Study of scriptures</li>
                    <li>Austerities</li>
                    <li>Community service</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Modern Reform Movements</h3>
              <p className="mb-4">
                Various modern reform movements have sought to adapt Jainism to contemporary 
                challenges while preserving core principles.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Social Reforms:</h4>
                  <ul className="space-y-2">
                    <li>Women's education</li>
                    <li>Social equality</li>
                    <li>Modern education</li>
                    <li>Healthcare initiatives</li>
                    <li>Environmental protection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Religious Reforms:</h4>
                  <ul className="space-y-2">
                    <li>Simplified rituals</li>
                    <li>Modern interpretations</li>
                    <li>Interfaith dialogue</li>
                    <li>Youth engagement</li>
                    <li>Digital outreach</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Independence Movement</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Jain Participation</h3>
              <p className="mb-4">
                Jains played a significant role in India's independence movement, contributing 
                leaders, resources, and support to the cause of freedom.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Jain Leaders:</h4>
                  <ul className="space-y-2">
                    <li>Vallabhbhai Patel</li>
                    <li>Jamnalal Bajaj</li>
                    <li>Gandhi's Jain influences</li>
                    <li>Business community support</li>
                    <li>Intellectual contributions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contributions:</h4>
                  <ul className="space-y-2">
                    <li>Financial support</li>
                    <li>Non-violent resistance</li>
                    <li>Social reform</li>
                    <li>Educational initiatives</li>
                    <li>Cultural preservation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Gandhi's Jain Influences</h3>
              <p className="mb-4">
                Mahatma Gandhi was deeply influenced by Jain principles, particularly 
                ahimsa (non-violence) and anekantavada (multiple viewpoints).
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Jain Principles:</h4>
                  <ul className="space-y-2">
                    <li>Ahimsa (non-violence)</li>
                    <li>Anekantavada</li>
                    <li>Vegetarianism</li>
                    <li>Simple living</li>
                    <li>Truth and honesty</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Impact on Gandhi:</h4>
                  <ul className="space-y-2">
                    <li>Satyagraha movement</li>
                    <li>Non-violent resistance</li>
                    <li>Religious tolerance</li>
                    <li>Social reform</li>
                    <li>Indian independence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Post-Independence India</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Political Participation</h3>
              <p className="mb-4">
                Jains have been active participants in Indian democracy, contributing 
                leaders at various levels of government.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Political Leaders:</h4>
                  <ul className="space-y-2">
                    <li>Vallabhbhai Patel</li>
                    <li>Various ministers</li>
                    <li>State leaders</li>
                    <li>Local representatives</li>
                    <li>Bureaucratic positions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contributions:</h4>
                  <ul className="space-y-2">
                    <li>Nation building</li>
                    <li>Economic development</li>
                    <li>Social reform</li>
                    <li>Cultural preservation</li>
                    <li>International relations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Economic Contributions</h3>
              <p className="mb-4">
                Jains have made significant contributions to India's economic development 
                through business, trade, and philanthropy.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Business Activities:</h4>
                  <ul className="space-y-2">
                    <li>Diamond and jewelry trade</li>
                    <li>Textile industry</li>
                    <li>Banking and finance</li>
                    <li>Real estate</li>
                    <li>Technology sector</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Philanthropy:</h4>
                  <ul className="space-y-2">
                    <li>Educational institutions</li>
                    <li>Hospitals and healthcare</li>
                    <li>Religious institutions</li>
                    <li>Social welfare</li>
                    <li>Environmental projects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Global Jain Diaspora</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Migration Patterns</h3>
              <p className="mb-4">
                Jains have migrated to countries around the world, establishing vibrant 
                communities and contributing to their adopted societies.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Major Destinations:</h4>
                  <ul className="space-y-2">
                    <li>United States</li>
                    <li>United Kingdom</li>
                    <li>Canada</li>
                    <li>Australia</li>
                    <li>East Africa</li>
                    <li>Europe</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Reasons for Migration:</h4>
                  <ul className="space-y-2">
                    <li>Business opportunities</li>
                    <li>Educational pursuits</li>
                    <li>Family reunification</li>
                    <li>Political stability</li>
                    <li>Economic advancement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Diaspora Communities</h3>
              <p className="mb-4">
                Jain communities around the world have established temples, cultural centers, 
                and organizations to preserve their heritage and serve their communities.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Community Institutions:</h4>
                  <ul className="space-y-2">
                    <li>Jain temples</li>
                    <li>Cultural organizations</li>
                    <li>Educational institutions</li>
                    <li>Youth programs</li>
                    <li>Charitable organizations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contributions:</h4>
                  <ul className="space-y-2">
                    <li>Economic development</li>
                    <li>Cultural diversity</li>
                    <li>Community service</li>
                    <li>Interfaith dialogue</li>
                    <li>Environmental protection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Contemporary Challenges</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Identity and Assimilation</h3>
              <ul className="space-y-3">
                <li><strong>Cultural Preservation:</strong> Maintaining Jain identity in diverse societies</li>
                <li><strong>Youth Engagement:</strong> Connecting young Jains with their heritage</li>
                <li><strong>Interfaith Families:</strong> Supporting mixed-faith families</li>
                <li><strong>Language Preservation:</strong> Maintaining knowledge of traditional languages</li>
                <li><strong>Religious Education:</strong> Teaching Jain values and practices</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Modern Adaptations</h3>
              <ul className="space-y-3">
                <li><strong>Technology:</strong> Using digital platforms for religious activities</li>
                <li><strong>Modern Lifestyles:</strong> Adapting practices to contemporary life</li>
                <li><strong>Global Communication:</strong> Connecting worldwide communities</li>
                <li><strong>Environmental Issues:</strong> Addressing modern environmental challenges</li>
                <li><strong>Social Change:</strong> Responding to changing social norms</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Religious Practice</h3>
              <ul className="space-y-3">
                <li><strong>Monastic Decline:</strong> Decreasing number of monks and nuns</li>
                <li><strong>Ritual Simplification:</strong> Adapting complex rituals for modern life</li>
                <li><strong>Inter-sect Relations:</strong> Cooperation between different Jain sects</li>
                <li><strong>Religious Authority:</strong> Adapting to changing sources of authority</li>
                <li><strong>Spiritual Practice:</strong> Maintaining meditation and contemplation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Modern Jain Contributions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Science and Technology</h3>
              <ul className="space-y-2">
                <li><strong>Medical Research:</strong> Contributions to healthcare</li>
                <li><strong>Engineering:</strong> Innovation in various fields</li>
                <li><strong>Computer Science:</strong> Technology development</li>
                <li><strong>Environmental Science:</strong> Sustainability research</li>
                <li><strong>Space Exploration:</strong> Participation in space programs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Arts and Culture</h3>
              <ul className="space-y-2">
                <li><strong>Literature:</strong> Modern Jain writers and poets</li>
                <li><strong>Film:</strong> Bollywood and international cinema</li>
                <li><strong>Visual Arts:</strong> Contemporary Jain art</li>
                <li><strong>Architecture:</strong> Modern temple design</li>
                <li><strong>Music:</strong> Devotional and classical music</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Social Justice and Activism</h3>
              <ul className="space-y-2">
                <li><strong>Environmental Protection:</strong> Conservation and sustainability</li>
                <li><strong>Animal Rights:</strong> Protection of all living beings</li>
                <li><strong>Humanitarian Aid:</strong> Disaster relief and charity</li>
                <li><strong>Education:</strong> Promoting literacy and learning</li>
                <li><strong>Interfaith Dialogue:</strong> Building understanding between religions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Future Directions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Religious Development</h3>
              <ul className="space-y-2">
                <li><strong>Digital Jainism:</strong> Online communities and virtual services</li>
                <li><strong>Youth Programs:</strong> Engaging young Jains</li>
                <li><strong>Interfaith Families:</strong> Programs for mixed-faith families</li>
                <li><strong>Environmental Ethics:</strong> Jain environmentalism</li>
                <li><strong>Social Justice:</strong> Integrating activism with religious practice</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Community Building</h3>
              <ul className="space-y-2">
                <li><strong>Global Networks:</strong> Connecting Jain communities worldwide</li>
                <li><strong>Educational Programs:</strong> Jain studies and language learning</li>
                <li><strong>Cultural Preservation:</strong> Maintaining traditions and heritage</li>
                <li><strong>Intergenerational Connection:</strong> Bridging age gaps</li>
                <li><strong>Community Service:</strong> Expanding charitable activities</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Study Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Historical Sources</h3>
              <ul className="space-y-3">
                <li><strong>Colonial Records:</strong> British administrative documents</li>
                <li><strong>Movement Literature:</strong> Reform movement writings</li>
                <li><strong>Political Documents:</strong> Independence movement records</li>
                <li><strong>Migration Accounts:</strong> Personal stories and memoirs</li>
                <li><strong>Contemporary Sources:</strong> Modern Jain literature</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Modern Scholarship</h3>
              <ul className="space-y-3">
                <li><strong>Historical Research:</strong> Studies of modern Jainism</li>
                <li><strong>Diaspora Studies:</strong> Global Jain communities</li>
                <li><strong>Political Analysis:</strong> Jain political participation</li>
                <li><strong>Social Research:</strong> Contemporary Jain society</li>
                <li><strong>Cultural Studies:</strong> Modern Jain arts and culture</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">A Living Tradition</h3>
          <p className="text-center mb-4">
            Modern Jainism continues to evolve and adapt to changing circumstances while maintaining 
            its core values and traditions. Jains worldwide demonstrate remarkable resilience, 
            creativity, and commitment to their faith and community.
          </p>
          <div className="text-center">
            <a 
              href="/religion/jainism/overview" 
              className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Return to Jainism Overview →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 