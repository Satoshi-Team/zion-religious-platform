import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: t('earlySikhism.title'),
    description: t('earlySikhism.description'),
    keywords: t('earlySikhism.keywords'),
    openGraph: {
      title: t('earlySikhism.title'),
      description: t('earlySikhism.description'),
      type: 'article',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('earlySikhism.title'),
      description: t('earlySikhism.description'),
    },
  }
}

export default function EarlySikhismPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-center mb-8">Early Sikhism: 1469-1708</h1>
        
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950 p-6 rounded-lg mb-8">
          <p className="text-lg leading-relaxed">
            The early period of Sikhism encompasses the lives of the first ten Sikh Gurus, from Guru Nanak Dev Ji 
            to Guru Gobind Singh Ji. This foundational era established the core principles, practices, and 
            community structures that would define Sikhism as a distinct religious tradition.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Historical Context</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Punjab in the 15th-17th Centuries</h3>
              <ul className="space-y-3">
                <li><strong>Mughal Empire:</strong> Muslim rule over northern India</li>
                <li><strong>Religious Diversity:</strong> Hindu, Muslim, and various spiritual traditions</li>
                <li><strong>Social Inequality:</strong> Caste system and religious discrimination</li>
                <li><strong>Political Turmoil:</strong> Power struggles and regional conflicts</li>
                <li><strong>Cultural Exchange:</strong> Interaction between different religious communities</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Spiritual Climate</h3>
              <ul className="space-y-3">
                <li><strong>Bhakti Movement:</strong> Devotional movements in Hinduism</li>
                <li><strong>Sufism:</strong> Islamic mystical traditions</li>
                <li><strong>Sant Tradition:</strong> Poet-saints emphasizing devotion</li>
                <li><strong>Religious Reform:</strong> Calls for spiritual renewal</li>
                <li><strong>Social Reform:</strong> Movements against caste discrimination</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Guru Nanak Dev Ji (1469-1539)</h2>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">The Founder of Sikhism</h3>
            <p className="mb-4">
              Guru Nanak Dev Ji was born in Talwandi (now Nankana Sahib, Pakistan) and from an early age 
              showed signs of spiritual insight and concern for social justice.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Early Life:</h4>
                <ul className="space-y-2">
                  <li>Born to Hindu parents in a Muslim-ruled region</li>
                  <li>Showed spiritual inclination from childhood</li>
                  <li>Worked as an accountant and storekeeper</li>
                  <li>Married and had two sons</li>
                  <li>Experienced divine revelation at age 30</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Divine Mission:</h4>
                <ul className="space-y-2">
                  <li>Disappeared for three days in the Bein River</li>
                  <li>Returned with the message "There is no Hindu, there is no Muslim"</li>
                  <li>Began preaching the oneness of God</li>
                  <li>Emphasized equality and social justice</li>
                  <li>Started the tradition of langar (community kitchen)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Core Teachings</h3>
              <ul className="space-y-3">
                <li><strong>Ik Onkar:</strong> There is one God, the creator of all</li>
                <li><strong>Equality:</strong> All human beings are equal regardless of caste, gender, or religion</li>
                <li><strong>Honest Living:</strong> Earn through honest work and share with others</li>
                <li><strong>Devotion:</strong> Remember God in all actions (Naam Japna)</li>
                <li><strong>Service:</strong> Serve humanity as service to God (Seva)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Travels and Mission</h3>
              <p className="mb-4">
                Guru Nanak undertook four major journeys (udasis) covering thousands of miles across 
                India, Sri Lanka, Tibet, and the Middle East.
              </p>
              <ul className="space-y-2">
                <li><strong>First Udasi:</strong> East India, including Bengal and Assam</li>
                <li><strong>Second Udasi:</strong> South India and Sri Lanka</li>
                <li><strong>Third Udasi:</strong> North India, including Kashmir and Tibet</li>
                <li><strong>Fourth Udasi:</strong> West India and Middle East, including Mecca</li>
                <li><strong>Teaching Method:</strong> Used music, poetry, and dialogue to spread message</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">The Succession of Gurus</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Guru Angad Dev Ji (1504-1552)</h3>
              <p className="mb-4">
                The second Guru continued Guru Nanak's work and made significant contributions to Sikh organization.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Contributions:</h4>
                  <ul className="space-y-2">
                    <li>Standardized Gurmukhi script</li>
                    <li>Established langar tradition</li>
                    <li>Collected Guru Nanak's hymns</li>
                    <li>Emphasized physical fitness</li>
                    <li>Started wrestling competitions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Organizational Development:</h4>
                  <ul className="space-y-2">
                    <li>Established Sikh centers (dharamsalas)</li>
                    <li>Developed community structure</li>
                    <li>Emphasized education</li>
                    <li>Promoted physical discipline</li>
                    <li>Strengthened Sikh identity</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Guru Amar Das Ji (1479-1574)</h3>
              <p className="mb-4">
                The third Guru introduced important social reforms and established key Sikh institutions.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Social Reforms:</h4>
                  <ul className="space-y-2">
                    <li>Abolished purdah (veiling of women)</li>
                    <li>Prohibited sati (widow burning)</li>
                    <li>Established equality for women</li>
                    <li>Opposed caste discrimination</li>
                    <li>Promoted inter-caste marriages</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Institutional Development:</h4>
                  <ul className="space-y-2">
                    <li>Established 22 manjis (preaching centers)</li>
                    <li>Introduced Anand Karaj (Sikh marriage ceremony)</li>
                    <li>Established Baisakhi as gathering time</li>
                    <li>Emphasized sangat (congregation)</li>
                    <li>Developed Sikh code of conduct</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Guru Ram Das Ji (1534-1581)</h3>
              <p className="mb-4">
                The fourth Guru founded the city of Amritsar and established important Sikh traditions.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Amritsar Foundation:</h4>
                  <ul className="space-y-2">
                    <li>Founded the city of Amritsar</li>
                    <li>Started construction of Harmandir Sahib</li>
                    <li>Established Sikh spiritual center</li>
                    <li>Created central gathering place</li>
                    <li>Developed Sikh architecture</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Spiritual Contributions:</h4>
                  <ul className="space-y-2">
                    <li>Composed Laavan (wedding hymns)</li>
                    <li>Emphasized humility and service</li>
                    <li>Promoted Sikh way of life</li>
                    <li>Strengthened community bonds</li>
                    <li>Established Sikh identity</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Guru Arjan Dev Ji (1563-1606)</h3>
              <p className="mb-4">
                The fifth Guru compiled the Adi Granth and became the first Sikh martyr, marking a turning point in Sikh history.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Adi Granth Compilation:</h4>
                  <ul className="space-y-2">
                    <li>Compiled first Sikh scripture</li>
                    <li>Included hymns of previous Gurus</li>
                    <li>Added hymns of Hindu and Muslim saints</li>
                    <li>Established Sikh literary tradition</li>
                    <li>Created unified Sikh theology</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Martyrdom:</h4>
                  <ul className="space-y-2">
                    <li>Executed by Mughal Emperor Jahangir</li>
                    <li>Refused to convert to Islam</li>
                    <li>Demonstrated Sikh commitment to truth</li>
                    <li>Established martyrdom tradition</li>
                    <li>Strengthened Sikh resolve</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">The Warrior Gurus</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Guru Hargobind Ji (1595-1644)</h3>
              <p className="mb-4">
                The sixth Guru introduced the concept of Miri-Piri (temporal and spiritual authority) and 
                began the militarization of the Sikh community.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Miri-Piri Concept:</h4>
                  <ul className="space-y-2">
                    <li>Combined spiritual and temporal authority</li>
                    <li>Wore two swords symbolizing both powers</li>
                    <li>Established Akal Takht (throne of the timeless)</li>
                    <li>Created Sikh military tradition</li>
                    <li>Defended Sikh community</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Military Development:</h4>
                  <ul className="space-y-2">
                    <li>Built Sikh army</li>
                    <li>Established martial training</li>
                    <li>Defended against Mughal persecution</li>
                    <li>Created Sikh warrior tradition</li>
                    <li>Maintained Sikh sovereignty</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Guru Har Rai Ji (1630-1661)</h3>
              <p className="mb-4">
                The seventh Guru maintained the military tradition while emphasizing healing and compassion.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Healing Mission:</h4>
                  <ul className="space-y-2">
                    <li>Established herbal medicine gardens</li>
                    <li>Provided free medical care</li>
                    <li>Emphasized compassion and service</li>
                    <li>Maintained Sikh military strength</li>
                    <li>Protected Sikh community</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Diplomatic Relations:</h4>
                  <ul className="space-y-2">
                    <li>Maintained relations with Mughal court</li>
                    <li>Provided medical care to royalty</li>
                    <li>Demonstrated Sikh values</li>
                    <li>Strengthened Sikh reputation</li>
                    <li>Ensured community survival</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Guru Har Krishan Ji (1656-1664)</h3>
              <p className="mb-4">
                The eighth Guru, who became Guru at age five, demonstrated spiritual wisdom and selfless service.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Child Guru:</h4>
                  <ul className="space-y-2">
                    <li>Became Guru at age five</li>
                    <li>Demonstrated spiritual wisdom</li>
                    <li>Healed smallpox patients</li>
                    <li>Sacrificed life for others</li>
                    <li>Showed selfless service</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Legacy:</h4>
                  <ul className="space-y-2">
                    <li>Emphasized service to humanity</li>
                    <li>Demonstrated Sikh compassion</li>
                    <li>Showed spiritual maturity</li>
                    <li>Inspired Sikh devotion</li>
                    <li>Strengthened Sikh faith</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Guru Tegh Bahadur Ji (1621-1675)</h3>
              <p className="mb-4">
                The ninth Guru sacrificed his life defending religious freedom, becoming the second Sikh martyr.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Religious Freedom:</h4>
                  <ul className="space-y-2">
                    <li>Defended Kashmiri Pandits</li>
                    <li>Opposed forced conversions</li>
                    <li>Sacrificed life for others</li>
                    <li>Demonstrated Sikh courage</li>
                    <li>Established religious tolerance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Martyrdom:</h4>
                  <ul className="space-y-2">
                    <li>Executed by Mughal Emperor Aurangzeb</li>
                    <li>Refused to convert to Islam</li>
                    <li>Protected religious minorities</li>
                    <li>Strengthened Sikh resolve</li>
                    <li>Inspired future generations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Guru Gobind Singh Ji (1666-1708)</h2>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">The Tenth and Final Guru</h3>
            <p className="mb-4">
              Guru Gobind Singh Ji completed the Sikh transformation into a distinct religious community 
              with the creation of the Khalsa and the establishment of the Guru Granth Sahib as the eternal Guru.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Khalsa Creation:</h4>
                <ul className="space-y-2">
                  <li>Established Khalsa on Baisakhi 1699</li>
                  <li>Created distinct Sikh identity</li>
                  <li>Introduced Five Ks (articles of faith)</li>
                  <li>Established Amrit ceremony</li>
                  <li>Created Singh and Kaur names</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Five Ks:</h4>
                <ul className="space-y-2">
                  <li><strong>Kesh:</strong> Uncut hair</li>
                  <li><strong>Kangha:</strong> Wooden comb</li>
                  <li><strong>Kara:</strong> Steel bracelet</li>
                  <li><strong>Kachera:</strong> Cotton undergarments</li>
                  <li><strong>Kirpan:</strong> Ceremonial sword</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Major Battles and Challenges</h3>
              <ul className="space-y-3">
                <li><strong>Battle of Bhangani (1688):</strong> First major battle against hill chiefs</li>
                <li><strong>Battle of Nadaun (1691):</strong> Victory against Mughal forces</li>
                <li><strong>Battle of Anandpur (1700-1704):</strong> Siege by Mughal and hill chiefs</li>
                <li><strong>Battle of Chamkaur (1704):</strong> Heroic last stand with 40 Sikhs</li>
                <li><strong>Personal Sacrifices:</strong> Lost father, mother, and four sons</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Literary Contributions</h3>
              <ul className="space-y-3">
                <li><strong>Dasam Granth:</strong> Collection of his writings</li>
                <li><strong>Jaap Sahib:</strong> Morning prayer</li>
                <li><strong>Tav-Prasad Savaiye:</strong> Evening prayer</li>
                <li><strong>Chaupai Sahib:</strong> Prayer for protection</li>
                <li><strong>Zafarnama:</strong> Letter to Aurangzeb</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Final Legacy</h3>
              <ul className="space-y-3">
                <li><strong>Guru Granth Sahib:</strong> Declared as eternal Guru</li>
                <li><strong>Khalsa Panth:</strong> Established as temporal authority</li>
                <li><strong>Sikh Identity:</strong> Complete transformation into distinct religion</li>
                <li><strong>Martial Tradition:</strong> Established Sikh warrior ethos</li>
                <li><strong>Spiritual Foundation:</strong> Completed Sikh theological framework</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Development of Sikh Institutions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Religious Institutions</h3>
              <ul className="space-y-3">
                <li><strong>Gurdwaras:</strong> Sikh places of worship</li>
                <li><strong>Harmandir Sahib:</strong> Golden Temple in Amritsar</li>
                <li><strong>Akal Takht:</strong> Throne of temporal authority</li>
                <li><strong>Langar:</strong> Community kitchen tradition</li>
                <li><strong>Sangat:</strong> Congregational worship</li>
                <li><strong>Kirtan:</strong> Devotional music tradition</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Social Institutions</h3>
              <ul className="space-y-3">
                <li><strong>Khalsa:</strong> Order of initiated Sikhs</li>
                <li><strong>Panth:</strong> Sikh community as a whole</li>
                <li><strong>Manjis:</strong> Preaching centers</li>
                <li><strong>Masands:</strong> Early Sikh representatives</li>
                <li><strong>Community Service:</strong> Seva (selfless service)</li>
                <li><strong>Education:</strong> Sikh learning traditions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Sikh Scriptures and Literature</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Adi Granth (Guru Granth Sahib)</h3>
              <ul className="space-y-2">
                <li><strong>Compilation:</strong> Compiled by Guru Arjan Dev Ji</li>
                <li><strong>Contents:</strong> Hymns of Sikh Gurus and saints</li>
                <li><strong>Languages:</strong> Punjabi, Hindi, Persian, Sanskrit</li>
                <li><strong>Ragas:</strong> Musical compositions for singing</li>
                <li><strong>Authority:</strong> Eternal Guru of the Sikhs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Dasam Granth</h3>
              <ul className="space-y-2">
                <li><strong>Author:</strong> Guru Gobind Singh Ji</li>
                <li><strong>Contents:</strong> Prayers, poetry, and historical accounts</li>
                <li><strong>Significance:</strong> Important for Sikh worship</li>
                <li><strong>Status:</strong> Respected but not considered Guru</li>
                <li><strong>Use:</strong> Certain prayers and ceremonies</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Legacy and Impact</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Religious Contributions</h3>
              <ul className="space-y-2">
                <li><strong>Monotheism:</strong> Clear concept of one God</li>
                <li><strong>Equality:</strong> Universal human equality</li>
                <li><strong>Service:</strong> Selfless service to humanity</li>
                <li><strong>Devotion:</strong> Loving devotion to God</li>
                <li><strong>Honest Living:</strong> Ethical work and sharing</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Social Reforms</h3>
              <ul className="space-y-2">
                <li><strong>Caste System:</strong> Rejection of caste discrimination</li>
                <li><strong>Women's Rights:</strong> Equality for women</li>
                <li><strong>Religious Tolerance:</strong> Respect for all religions</li>
                <li><strong>Community Service:</strong> Langar and seva traditions</li>
                <li><strong>Education:</strong> Emphasis on learning</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Cultural Impact</h3>
              <ul className="space-y-2">
                <li><strong>Punjabi Culture:</strong> Development of Punjabi literature</li>
                <li><strong>Music:</strong> Kirtan and devotional music</li>
                <li><strong>Architecture:</strong> Sikh temple architecture</li>
                <li><strong>Martial Arts:</strong> Gatka and Sikh martial traditions</li>
                <li><strong>Identity:</strong> Distinct Sikh cultural identity</li>
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
                <li><strong>Guru Granth Sahib:</strong> Sikh scripture</li>
                <li><strong>Dasam Granth:</strong> Writings of Guru Gobind Singh</li>
                <li><strong>Janam Sakhis:</strong> Life stories of Guru Nanak</li>
                <li><strong>Gur Bilas:</strong> Historical accounts</li>
                <li><strong>Hukamnamas:</strong> Orders of the Gurus</li>
                <li><strong>Contemporary Accounts:</strong> Mughal and European records</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Modern Scholarship</h3>
              <ul className="space-y-3">
                <li><strong>Historical Research:</strong> Studies of early Sikh history</li>
                <li><strong>Theological Studies:</strong> Sikh philosophy and beliefs</li>
                <li><strong>Social History:</strong> Sikh community development</li>
                <li><strong>Literary Analysis:</strong> Sikh scripture and poetry</li>
                <li><strong>Archaeological Studies:</strong> Historical sites and artifacts</li>
                <li><strong>Comparative Religion:</strong> Sikhism in world religions context</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Foundation for the Future</h3>
          <p className="text-center mb-4">
            The early period of Sikhism established the foundation for a distinct religious tradition 
            that would continue to evolve and grow. The teachings and sacrifices of the Gurus created 
            a community committed to equality, service, and devotion to God.
          </p>
          <div className="text-center">
            <a 
              href="/religion/sikhism/history/medieval" 
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Continue to Medieval Sikhism →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 