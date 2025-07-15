import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: t('modernSikhism.title'),
    description: t('modernSikhism.description'),
    keywords: t('modernSikhism.keywords'),
    openGraph: {
      title: t('modernSikhism.title'),
      description: t('modernSikhism.description'),
      type: 'article',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('modernSikhism.title'),
      description: t('modernSikhism.description'),
    },
  }
}

export default function ModernSikhismPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-center mb-8">Modern Sikhism: 1849-Present</h1>
        
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950 p-6 rounded-lg mb-8">
          <p className="text-lg leading-relaxed">
            The modern period of Sikhism encompasses the era from British annexation of Punjab in 1849 
            to the present day. This period has seen Sikhs adapt to colonial rule, participate in 
            independence movements, establish global communities, and face both challenges and 
            opportunities in the contemporary world.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">British Colonial Period (1849-1947)</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Early British Rule</h3>
              <ul className="space-y-3">
                <li><strong>Annexation:</strong> Punjab became part of British India</li>
                <li><strong>Military Service:</strong> Sikhs recruited into British Indian Army</li>
                <li><strong>Agricultural Development:</strong> Canal colonies and farming</li>
                <li><strong>Education:</strong> Introduction of Western education</li>
                <li><strong>Infrastructure:</strong> Railways, roads, and communication</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Sikh Response</h3>
              <ul className="space-y-3">
                <li><strong>Loyalty:</strong> Many Sikhs served British loyally</li>
                <li><strong>Resistance:</strong> Some participated in independence movements</li>
                <li><strong>Adaptation:</strong> Sikhs adapted to colonial administration</li>
                <li><strong>Preservation:</strong> Maintained religious and cultural identity</li>
                <li><strong>Reform:</strong> Religious and social reform movements</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Sikh Reform Movements</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Singh Sabha Movement</h3>
              <p className="mb-4">
                The Singh Sabha movement emerged in the late 19th century to reform and revitalize 
                Sikhism in response to Christian missionary activity and Hindu reform movements.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Objectives:</h4>
                  <ul className="space-y-2">
                    <li>Purify Sikh practices</li>
                    <li>Promote Sikh education</li>
                    <li>Counter missionary influence</li>
                    <li>Strengthen Sikh identity</li>
                    <li>Establish Sikh institutions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Achievements:</h4>
                  <ul className="space-y-2">
                    <li>Founded Khalsa College</li>
                    <li>Established Sikh schools</li>
                    <li>Published Sikh literature</li>
                    <li>Reformed gurdwara management</li>
                    <li>Strengthened Sikh unity</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Gurdwara Reform Movement</h3>
              <p className="mb-4">
                The Gurdwara Reform Movement (1920-1925) sought to free Sikh temples from the control 
                of hereditary priests (mahants) and establish democratic management.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Issues:</h4>
                  <ul className="space-y-2">
                    <li>Mahant control of gurdwaras</li>
                    <li>Corruption and mismanagement</li>
                    <li>Hindu practices in gurdwaras</li>
                    <li>Lack of Sikh control</li>
                    <li>Need for reform</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Results:</h4>
                  <ul className="space-y-2">
                    <li>Shiromani Gurdwara Parbandhak Committee</li>
                    <li>Democratic gurdwara management</li>
                    <li>Purification of Sikh practices</li>
                    <li>Strengthened Sikh identity</li>
                    <li>Political awakening</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Akali Movement</h3>
              <p className="mb-4">
                The Akali movement emerged from the Gurdwara Reform Movement and became a major 
                political force representing Sikh interests.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Political Role:</h4>
                  <ul className="space-y-2">
                    <li>Sikh political representation</li>
                    <li>Advocacy for Sikh rights</li>
                    <li>Participation in independence movement</li>
                    <li>Formation of political parties</li>
                    <li>Influence on Sikh politics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Legacy:</h4>
                  <ul className="space-y-2">
                    <li>Shiromani Akali Dal</li>
                    <li>Sikh political consciousness</li>
                    <li>Democratic traditions</li>
                    <li>Community organization</li>
                    <li>Political participation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Independence Movement</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Sikh Participation</h3>
              <p className="mb-4">
                Sikhs played a significant role in India's independence movement, contributing 
                leaders, soldiers, and support to the cause of freedom.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Sikh Leaders:</h4>
                  <ul className="space-y-2">
                    <li>Baba Kharak Singh</li>
                    <li>Master Tara Singh</li>
                    <li>Giani Kartar Singh</li>
                    <li>Bhai Parmanand</li>
                    <li>Udham Singh</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contributions:</h4>
                  <ul className="space-y-2">
                    <li>Political leadership</li>
                    <li>Mass mobilization</li>
                    <li>Sacrifices and imprisonment</li>
                    <li>Support for Congress</li>
                    <li>Advocacy for Sikh rights</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Partition and Migration</h3>
              <p className="mb-4">
                The partition of India in 1947 had a devastating impact on Sikhs, with massive 
                migration, violence, and loss of life and property.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Impact:</h4>
                  <ul className="space-y-2">
                    <li>Mass migration from Pakistan</li>
                    <li>Loss of historical sites</li>
                    <li>Violence and massacres</li>
                    <li>Displacement of millions</li>
                    <li>Loss of property and land</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Recovery:</h4>
                  <ul className="space-y-2">
                    <li>Resettlement in India</li>
                    <li>Rebuilding of communities</li>
                    <li>Preservation of culture</li>
                    <li>Economic recovery</li>
                    <li>Political participation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Post-Independence India</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Punjab State</h3>
              <p className="mb-4">
                After independence, Sikhs worked to establish Punjab as a Sikh-majority state 
                and participated actively in Indian democracy.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">State Formation:</h4>
                  <ul className="space-y-2">
                    <li>Punjabi Suba movement</li>
                    <li>Formation of Punjab state</li>
                    <li>Sikh majority state</li>
                    <li>Political representation</li>
                    <li>Cultural autonomy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Development:</h4>
                  <ul className="space-y-2">
                    <li>Green Revolution</li>
                    <li>Agricultural prosperity</li>
                    <li>Industrial development</li>
                    <li>Educational progress</li>
                    <li>Infrastructure growth</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Political Participation</h3>
              <p className="mb-4">
                Sikhs have been active participants in Indian democracy, contributing leaders 
                at all levels of government.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Political Leaders:</h4>
                  <ul className="space-y-2">
                    <li>Master Tara Singh</li>
                    <li>Pratap Singh Kairon</li>
                    <li>Parkash Singh Badal</li>
                    <li>Manmohan Singh</li>
                    <li>Harsimrat Kaur Badal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contributions:</h4>
                  <ul className="space-y-2">
                    <li>Prime Minister of India</li>
                    <li>Chief Ministers of Punjab</li>
                    <li>Cabinet ministers</li>
                    <li>Parliamentary representation</li>
                    <li>State and local leadership</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Global Sikh Diaspora</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Migration Patterns</h3>
              <p className="mb-4">
                Sikhs have migrated to countries around the world, establishing vibrant communities 
                and contributing to their adopted societies.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Major Destinations:</h4>
                  <ul className="space-y-2">
                    <li>United Kingdom</li>
                    <li>Canada</li>
                    <li>United States</li>
                    <li>Australia</li>
                    <li>New Zealand</li>
                    <li>East Africa</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Reasons for Migration:</h4>
                  <ul className="space-y-2">
                    <li>Economic opportunities</li>
                    <li>Political instability</li>
                    <li>Educational opportunities</li>
                    <li>Family reunification</li>
                    <li>Religious persecution</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Diaspora Communities</h3>
              <p className="mb-4">
                Sikh communities around the world have established gurdwaras, cultural centers, 
                and organizations to preserve their heritage and serve their communities.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Community Institutions:</h4>
                  <ul className="space-y-2">
                    <li>Gurdwaras and religious centers</li>
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
                    <li>Political participation</li>
                    <li>Interfaith dialogue</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Contemporary Challenges</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Identity and Assimilation</h3>
              <ul className="space-y-3">
                <li><strong>Cultural Preservation:</strong> Maintaining Sikh identity in diverse societies</li>
                <li><strong>Youth Engagement:</strong> Connecting young Sikhs with their heritage</li>
                <li><strong>Interfaith Families:</strong> Supporting mixed-faith families</li>
                <li><strong>Language Preservation:</strong> Maintaining Punjabi language skills</li>
                <li><strong>Religious Education:</strong> Teaching Sikh values and practices</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Discrimination and Prejudice</h3>
              <ul className="space-y-3">
                <li><strong>Religious Discrimination:</strong> Prejudice against Sikh appearance</li>
                <li><strong>Racial Profiling:</strong> Misidentification and targeting</li>
                <li><strong>Hate Crimes:</strong> Violence against Sikhs</li>
                <li><strong>Employment Discrimination:</strong> Workplace bias</li>
                <li><strong>Educational Challenges:</strong> Bullying and discrimination in schools</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Political Issues</h3>
              <ul className="space-y-3">
                <li><strong>Khalistan Movement:</strong> Calls for Sikh independence</li>
                <li><strong>Human Rights:</strong> Concerns about Sikh rights in India</li>
                <li><strong>Political Representation:</strong> Ensuring Sikh voices in government</li>
                <li><strong>Religious Freedom:</strong> Protecting Sikh religious practices</li>
                <li><strong>Justice Issues:</strong> Addressing historical grievances</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Modern Sikh Contributions</h2>
          
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
                <li><strong>Literature:</strong> Sikh writers and poets</li>
                <li><strong>Music:</strong> Bhangra and devotional music</li>
                <li><strong>Film:</strong> Bollywood and international cinema</li>
                <li><strong>Visual Arts:</strong> Painting, sculpture, and photography</li>
                <li><strong>Fashion:</strong> Sikh fashion and design</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Social Justice and Activism</h3>
              <ul className="space-y-2">
                <li><strong>Civil Rights:</strong> Advocacy for minority rights</li>
                <li><strong>Humanitarian Aid:</strong> Disaster relief and charity</li>
                <li><strong>Environmental Protection:</strong> Conservation efforts</li>
                <li><strong>Education:</strong> Promoting literacy and learning</li>
                <li><strong>Interfaith Dialogue:</strong> Building understanding between religions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Future Directions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Religious Development</h3>
              <ul className="space-y-2">
                <li><strong>Digital Sikhism:</strong> Online communities and virtual services</li>
                <li><strong>Interfaith Families:</strong> Programs for mixed-faith families</li>
                <li><strong>Youth Programs:</strong> Engaging young Sikhs</li>
                <li><strong>Social Justice:</strong> Integrating activism with religious practice</li>
                <li><strong>Environmental Ethics:</strong> Sikh environmentalism</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Community Building</h3>
              <ul className="space-y-2">
                <li><strong>Global Networks:</strong> Connecting Sikh communities worldwide</li>
                <li><strong>Educational Programs:</strong> Sikh studies and language learning</li>
                <li><strong>Cultural Preservation:</strong> Maintaining traditions and heritage</li>
                <li><strong>Intergenerational Connection:</strong> Bridging age gaps</li>
                <li><strong>Community Service:</strong> Expanding seva programs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Study Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Historical Sources</h3>
              <ul className="space-y-3">
                <li><strong>Colonial Records:</strong> British administrative documents</li>
                <li><strong>Movement Literature:</strong> Singh Sabha and Akali writings</li>
                <li><strong>Political Documents:</strong> Independence movement records</li>
                <li><strong>Migration Accounts:</strong> Personal stories and memoirs</li>
                <li><strong>Contemporary Sources:</strong> Modern Sikh literature</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Modern Scholarship</h3>
              <ul className="space-y-3">
                <li><strong>Historical Research:</strong> Studies of modern Sikh history</li>
                <li><strong>Diaspora Studies:</strong> Global Sikh communities</li>
                <li><strong>Political Analysis:</strong> Sikh political participation</li>
                <li><strong>Social Research:</strong> Contemporary Sikh society</li>
                <li><strong>Cultural Studies:</strong> Sikh arts and culture</li>
                <li><strong>Religious Studies:</strong> Modern Sikh theology</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">A Dynamic Community</h3>
          <p className="text-center mb-4">
            Modern Sikhism continues to evolve and adapt to changing circumstances while maintaining 
            its core values and traditions. Sikhs worldwide demonstrate remarkable resilience, 
            creativity, and commitment to their faith and community.
          </p>
          <div className="text-center">
            <a 
              href="/religion/sikhism/overview" 
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Return to Sikhism Overview →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 