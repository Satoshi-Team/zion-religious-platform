import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: t('medievalSikhism.title'),
    description: t('medievalSikhism.description'),
    keywords: t('medievalSikhism.keywords'),
    openGraph: {
      title: t('medievalSikhism.title'),
      description: t('medievalSikhism.description'),
      type: 'article',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('medievalSikhism.title'),
      description: t('medievalSikhism.description'),
    },
  }
}

export default function MedievalSikhismPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-center mb-8">Medieval Sikhism: 1708-1849</h1>
        
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950 p-6 rounded-lg mb-8">
          <p className="text-lg leading-relaxed">
            The medieval period of Sikhism spans from the death of Guru Gobind Singh Ji in 1708 to the 
            annexation of Punjab by the British in 1849. This era saw the rise of the Sikh Empire, 
            the development of Sikh political power, and the establishment of Sikh sovereignty over 
            much of northern India.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Historical Context</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Post-Guru Period</h3>
              <ul className="space-y-3">
                <li><strong>Guru Granth Sahib:</strong> Became the eternal Guru</li>
                <li><strong>Khalsa Panth:</strong> Assumed temporal authority</li>
                <li><strong>Mughal Decline:</strong> Weakening of Mughal Empire</li>
                <li><strong>Persian Invasions:</strong> Nadir Shah and Ahmad Shah Abdali</li>
                <li><strong>Regional Powers:</strong> Rise of Marathas and other powers</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Political Landscape</h3>
              <ul className="space-y-3">
                <li><strong>Misl Period:</strong> Confederation of Sikh warrior bands</li>
                <li><strong>Ranjit Singh:</strong> Unification under one ruler</li>
                <li><strong>Sikh Empire:</strong> Establishment of sovereign state</li>
                <li><strong>British Expansion:</strong> Growing British influence</li>
                <li><strong>Annexation:</strong> End of Sikh political independence</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">The Misl Period (1708-1799)</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Formation of Misls</h3>
              <p className="mb-4">
                After the death of Guru Gobind Singh Ji, the Sikh community organized into warrior bands 
                called misls to defend against persecution and establish Sikh sovereignty.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Major Misls:</h4>
                  <ul className="space-y-2">
                    <li><strong>Ahluwalia Misl:</strong> Led by Jassa Singh Ahluwalia</li>
                    <li><strong>Bhangi Misl:</strong> Based in Amritsar</li>
                    <li><strong>Ramgharia Misl:</strong> Led by Jassa Singh Ramgharia</li>
                    <li><strong>Kanhaiya Misl:</strong> Based in Gurdaspur</li>
                    <li><strong>Sukerchakia Misl:</strong> Based in Gujranwala</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Organization:</h4>
                  <ul className="space-y-2">
                    <li>Democratic leadership structure</li>
                    <li>Territorial divisions</li>
                    <li>Military cooperation</li>
                    <li>Shared resources</li>
                    <li>Collective decision-making</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Persian Invasions</h3>
              <p className="mb-4">
                The Sikh misls faced repeated invasions from Persian rulers, particularly Nadir Shah 
                and Ahmad Shah Abdali, who devastated northern India.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Nadir Shah (1739):</h4>
                  <ul className="space-y-2">
                    <li>Invaded Delhi and Punjab</li>
                    <li>Massacred thousands</li>
                    <li>Looted Mughal treasury</li>
                    <li>Sikhs resisted in hills</li>
                    <li>Established guerrilla warfare</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ahmad Shah Abdali:</h4>
                  <ul className="space-y-2">
                    <li>Multiple invasions (1747-1769)</li>
                    <li>Targeted Sikh communities</li>
                    <li>Destroyed Harmandir Sahib</li>
                    <li>Sikhs rebuilt after each invasion</li>
                    <li>Strengthened Sikh resolve</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Sikh Resistance and Growth</h3>
              <p className="mb-4">
                Despite persecution, the Sikh community grew stronger, developing effective guerrilla 
                warfare tactics and establishing control over large areas of Punjab.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Guerrilla Warfare:</h4>
                  <ul className="space-y-2">
                    <li>Hit-and-run tactics</li>
                    <li>Mountain hideouts</li>
                    <li>Mobile warfare</li>
                    <li>Surprise attacks</li>
                    <li>Territorial control</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Community Development:</h4>
                  <ul className="space-y-2">
                    <li>Rebuilding of gurdwaras</li>
                    <li>Establishment of new settlements</li>
                    <li>Economic development</li>
                    <li>Military training</li>
                    <li>Religious education</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Rise of Maharaja Ranjit Singh</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Early Life and Rise</h3>
              <p className="mb-4">
                Ranjit Singh, born in 1780, was the son of Mahan Singh, leader of the Sukerchakia Misl. 
                He showed exceptional leadership qualities from an early age.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Early Achievements:</h4>
                  <ul className="space-y-2">
                    <li>Became misl leader at age 12</li>
                    <li>Married into powerful families</li>
                    <li>Demonstrated military skill</li>
                    <li>Built alliances with other misls</li>
                    <li>Established Lahore as capital</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Leadership Qualities:</h4>
                  <ul className="space-y-2">
                    <li>Charismatic personality</li>
                    <li>Military genius</li>
                    <li>Diplomatic skills</li>
                    <li>Religious tolerance</li>
                    <li>Administrative ability</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Unification of Punjab</h3>
              <p className="mb-4">
                Ranjit Singh systematically unified the various misls and expanded his territory through 
                both military conquest and diplomatic alliances.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Military Campaigns:</h4>
                  <ul className="space-y-2">
                    <li>Conquest of Lahore (1799)</li>
                    <li>Capture of Amritsar (1802)</li>
                    <li>Expansion into Kashmir (1819)</li>
                    <li>Conquest of Multan (1818)</li>
                    <li>Control of Peshawar (1834)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Diplomatic Relations:</h4>
                  <ul className="space-y-2">
                    <li>Treaty with British (1809)</li>
                    <li>Alliances with Afghan rulers</li>
                    <li>Relations with other Indian states</li>
                    <li>European military advisors</li>
                    <li>Trade agreements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">The Sikh Empire (1799-1849)</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Administration and Governance</h3>
              <p className="mb-4">
                The Sikh Empire under Ranjit Singh was known for its efficient administration, 
                religious tolerance, and military strength.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Administrative Structure:</h4>
                  <ul className="space-y-2">
                    <li>Centralized government</li>
                    <li>Provincial governors</li>
                    <li>Revenue collection system</li>
                    <li>Judicial system</li>
                    <li>Military administration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Religious Policy:</h4>
                  <ul className="space-y-2">
                    <li>Complete religious tolerance</li>
                    <li>Support for all religions</li>
                    <li>Restoration of religious sites</li>
                    <li>Equal treatment of all faiths</li>
                    <li>Interfaith harmony</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Military Strength</h3>
              <p className="mb-4">
                The Sikh Empire maintained one of the most powerful armies in Asia, combining 
                traditional Sikh martial skills with modern European military techniques.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Army Composition:</h4>
                  <ul className="space-y-2">
                    <li>Regular infantry regiments</li>
                    <li>Artillery units</li>
                    <li>Cavalry divisions</li>
                    <li>European officers</li>
                    <li>Modern weaponry</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Military Achievements:</h4>
                  <ul className="space-y-2">
                    <li>Defeated Afghan forces</li>
                    <li>Controlled strategic territories</li>
                    <li>Protected northern frontiers</li>
                    <li>Maintained internal security</li>
                    <li>Respected by neighboring powers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Cultural and Economic Development</h3>
              <p className="mb-4">
                The Sikh Empire was a period of significant cultural, economic, and architectural development.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Cultural Achievements:</h4>
                  <ul className="space-y-2">
                    <li>Restoration of Harmandir Sahib</li>
                    <li>Construction of new gurdwaras</li>
                    <li>Patronage of arts and literature</li>
                    <li>Development of Sikh architecture</li>
                    <li>Preservation of cultural heritage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Economic Prosperity:</h4>
                  <ul className="space-y-2">
                    <li>Agricultural development</li>
                    <li>Trade and commerce</li>
                    <li>Industrial growth</li>
                    <li>Infrastructure development</li>
                    <li>Revenue generation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Decline and Fall</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">After Ranjit Singh</h3>
              <p className="mb-4">
                The death of Ranjit Singh in 1839 marked the beginning of the decline of the Sikh Empire, 
                as his successors lacked his leadership abilities.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Succession Issues:</h4>
                  <ul className="space-y-2">
                    <li>Weak successors</li>
                    <li>Court intrigues</li>
                    <li>Power struggles</li>
                    <li>Military disunity</li>
                    <li>Administrative decline</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Internal Conflicts:</h4>
                  <ul className="space-y-2">
                    <li>Factional fighting</li>
                    <li>Assassinations</li>
                    <li>Military coups</li>
                    <li>Economic problems</li>
                    <li>Loss of central authority</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Anglo-Sikh Wars</h3>
              <p className="mb-4">
                The weakening Sikh Empire faced two wars with the British East India Company, 
                leading to the eventual annexation of Punjab.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">First Anglo-Sikh War (1845-46):</h4>
                  <ul className="space-y-2">
                    <li>Sikh army crossed Sutlej</li>
                    <li>Battles of Mudki, Ferozeshah</li>
                    <li>Battle of Sobraon</li>
                    <li>Treaty of Lahore</li>
                    <li>Loss of territory</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Second Anglo-Sikh War (1848-49):</h4>
                  <ul className="space-y-2">
                    <li>Sikh rebellion</li>
                    <li>Battle of Chillianwala</li>
                    <li>Battle of Gujrat</li>
                    <li>Complete defeat</li>
                    <li>Annexation of Punjab</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Religious Developments</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Sikh Institutions</h3>
              <ul className="space-y-3">
                <li><strong>Gurdwara Development:</strong> Construction and restoration of Sikh temples</li>
                <li><strong>Langar Tradition:</strong> Community kitchens in all gurdwaras</li>
                <li><strong>Kirtan:</strong> Development of devotional music</li>
                <li><strong>Education:</strong> Sikh learning and scholarship</li>
                <li><strong>Pilgrimage:</strong> Development of Sikh holy sites</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Religious Leadership</h3>
              <ul className="space-y-3">
                <li><strong>Guru Granth Sahib:</strong> Established as eternal Guru</li>
                <li><strong>Khalsa Panth:</strong> Collective leadership of Sikh community</li>
                <li><strong>Religious Scholars:</strong> Development of Sikh theology</li>
                <li><strong>Community Service:</strong> Emphasis on seva and charity</li>
                <li><strong>Religious Tolerance:</strong> Respect for all faiths</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Legacy and Impact</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Political Legacy</h3>
              <ul className="space-y-2">
                <li><strong>Sovereignty:</strong> Demonstrated Sikh capacity for self-rule</li>
                <li><strong>Military Tradition:</strong> Established Sikh martial reputation</li>
                <li><strong>Administrative Skills:</strong> Showed Sikh governance abilities</li>
                <li><strong>Diplomatic Relations:</strong> Established international connections</li>
                <li><strong>Territorial Control:</strong> Unified large areas under Sikh rule</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Cultural Impact</h3>
              <ul className="space-y-2">
                <li><strong>Architecture:</strong> Sikh architectural traditions</li>
                <li><strong>Arts:</strong> Patronage of painting and sculpture</li>
                <li><strong>Literature:</strong> Development of Sikh literature</li>
                <li><strong>Music:</strong> Kirtan and devotional music</li>
                <li><strong>Festivals:</strong> Celebration of Sikh festivals</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Social Contributions</h3>
              <ul className="space-y-2">
                <li><strong>Religious Tolerance:</strong> Model of interfaith harmony</li>
                <li><strong>Social Justice:</strong> Commitment to equality</li>
                <li><strong>Community Service:</strong> Langar and seva traditions</li>
                <li><strong>Education:</strong> Emphasis on learning</li>
                <li><strong>Unity:</strong> Bringing diverse communities together</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Study Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Primary Sources</h3>
              <ul className="space-y-3">
                <li><strong>Court Chronicles:</strong> Official records of Sikh Empire</li>
                <li><strong>Travel Accounts:</strong> European and Indian travelers</li>
                <li><strong>Military Records:</strong> Battle accounts and strategies</li>
                <li><strong>Administrative Documents:</strong> Government records</li>
                <li><strong>Religious Texts:</strong> Sikh scripture and literature</li>
                <li><strong>Art and Architecture:</strong> Physical remains and monuments</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Modern Scholarship</h3>
              <ul className="space-y-3">
                <li><strong>Historical Research:</strong> Studies of Sikh Empire</li>
                <li><strong>Military History:</strong> Sikh military achievements</li>
                <li><strong>Political Analysis:</strong> Governance and administration</li>
                <li><strong>Cultural Studies:</strong> Art, architecture, and culture</li>
                <li><strong>Economic History:</strong> Trade and commerce</li>
                <li><strong>Comparative Studies:</strong> Sikh Empire in world context</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Transition to Modern Era</h3>
          <p className="text-center mb-4">
            The medieval period of Sikhism demonstrated the community's ability to establish and 
            maintain political sovereignty while preserving religious and cultural traditions. 
            The legacy of this era continues to inspire Sikhs worldwide.
          </p>
          <div className="text-center">
            <a 
              href="/religion/sikhism/history/modern" 
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Continue to Modern Sikhism →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 