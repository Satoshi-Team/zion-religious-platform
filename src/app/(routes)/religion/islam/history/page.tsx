import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Islamic History | From Prophet Muhammad to Modern Era',
  description: 'Explore the comprehensive history of Islam, from the life of Prophet Muhammad and the early Islamic community to the development of Islamic civilization and modern challenges.',
  keywords: 'Islamic history, Prophet Muhammad, early Islam, Islamic civilization, caliphate, Islamic golden age, modern Islam',
  openGraph: {
    title: 'Islamic History | From Prophet Muhammad to Modern Era',
    description: 'Explore the comprehensive history of Islam, from the life of Prophet Muhammad to modern challenges.',
    type: 'website',
  },
}

export default function IslamHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="text-sm breadcrumbs mb-8">
        <ul>
          <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
          <li><Link href="/religion" className="text-blue-600 hover:text-blue-800">Religions</Link></li>
          <li><Link href="/religion/islam" className="text-blue-600 hover:text-blue-800">Islam</Link></li>
          <li className="text-gray-600">History</li>
        </ul>
      </nav>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-green-800 mb-6">Islamic History</h1>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <p className="text-lg text-green-800">
            The history of Islam spans over 1,400 years, beginning with the revelation to Prophet Muhammad 
            in 7th century Arabia and developing into a global civilization that has shaped world history, 
            culture, and spirituality.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Pre-Islamic Arabia</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-4">The Arabian Peninsula</h3>
            <p className="mb-4">
              Before the advent of Islam, the Arabian Peninsula was characterized by tribal societies, 
              polytheistic religions, and a complex network of trade routes connecting the major civilizations.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Social Structure</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Bedouin nomadic tribes</li>
                  <li>Urban merchant communities</li>
                  <li>Tribal alliances and conflicts</li>
                  <li>Honor-based social system</li>
                  <li>Oral tradition and poetry</li>
                  <li>Trade and commerce networks</li>
                  <li>Caravan routes and markets</li>
                  <li>Inter-tribal marriages</li>
                  <li>Customary law and justice</li>
                  <li>Hospitality traditions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Religious Landscape</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Polytheistic beliefs and idols</li>
                  <li>Kaaba as religious center</li>
                  <li>Jewish communities in Medina</li>
                  <li>Christian communities in Najran</li>
                  <li>Zoroastrian influence from Persia</li>
                  <li>Animistic tribal religions</li>
                  <li>Astral worship and divination</li>
                  <li>Pilgrimage traditions</li>
                  <li>Religious tolerance practices</li>
                  <li>Monotheistic Hanif tradition</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Mecca and the Quraysh</h3>
            <p className="mb-4">
              Mecca was the commercial and religious center of Arabia, controlled by the powerful 
              Quraysh tribe, who managed the Kaaba and the annual pilgrimage trade.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Economic Importance:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Major trade crossroads</li>
                  <li>Caravan route control</li>
                  <li>Pilgrimage economy</li>
                  <li>Market and fair organization</li>
                  <li>Banking and finance</li>
                  <li>International commerce</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Social Organization:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Quraysh tribal leadership</li>
                  <li>Merchant aristocracy</li>
                  <li>Religious authority</li>
                  <li>Political councils</li>
                  <li>Social stratification</li>
                  <li>Family and clan structures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">The Life of Prophet Muhammad (570-632 CE)</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Early Life and Background</h3>
              <p className="mb-3">
                Muhammad ibn Abdullah was born in Mecca in 570 CE into the respected Hashim clan 
                of the Quraysh tribe, experiencing both privilege and hardship in his formative years.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Family Background:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Father Abdullah died before birth</li>
                    <li>Mother Amina died when he was 6</li>
                    <li>Raised by grandfather Abdul Muttalib</li>
                    <li>Later cared for by uncle Abu Talib</li>
                    <li>Hashim clan of Quraysh tribe</li>
                    <li>Respected family lineage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Early Experiences:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Bedouin upbringing with Halima</li>
                    <li>Shepherd and caravan work</li>
                    <li>Exposure to different cultures</li>
                    <li>Reputation for honesty (Al-Amin)</li>
                    <li>Marriage to Khadija at 25</li>
                    <li>Successful merchant career</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">The First Revelation (610 CE)</h3>
              <p className="mb-3">
                At age 40, while meditating in the Cave of Hira, Muhammad received his first 
                revelation from God through the Angel Gabriel, marking the beginning of Islam.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">The Revelation:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Angel Gabriel appeared</li>
                    <li>Command to "Read" (Iqra)</li>
                    <li>First verses of Surah Al-Alaq</li>
                    <li>Overwhelming spiritual experience</li>
                    <li>Initial fear and uncertainty</li>
                    <li>Khadija's support and guidance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Early Response:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Private preaching to family</li>
                    <li>First converts: Khadija, Ali, Abu Bakr</li>
                    <li>Gradual public proclamation</li>
                    <li>Growing opposition from Quraysh</li>
                    <li>Persecution of early Muslims</li>
                    <li>Economic and social boycotts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">The Meccan Period (610-622 CE)</h3>
              <p className="mb-3">
                During the Meccan period, Muhammad focused on preaching monotheism and social 
                justice, facing increasing opposition from the Quraysh leadership.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Key Teachings:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Monotheism and divine unity</li>
                    <li>Social justice and equality</li>
                    <li>Care for orphans and poor</li>
                    <li>Moral and ethical conduct</li>
                    <li>Resurrection and judgment</li>
                    <li>Prophethood and revelation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Challenges Faced:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Quraysh opposition and persecution</li>
                    <li>Economic boycotts and sanctions</li>
                    <li>Social isolation and ridicule</li>
                    <li>Physical threats and violence</li>
                    <li>Loss of family support</li>
                    <li>Death of Khadija and Abu Talib</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">The Hijra and Medina Period (622-632 CE)</h3>
              <p className="mb-3">
                The migration to Medina in 622 CE marked a turning point, establishing the first 
                Islamic community and state under Muhammad's leadership.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Establishment of Community:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Constitution of Medina</li>
                    <li>Unity of Muslims and Jews</li>
                    <li>Establishment of mosque</li>
                    <li>Social and economic reforms</li>
                    <li>Military defense organization</li>
                    <li>Diplomatic relations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Major Events:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Battle of Badr (624 CE)</li>
                    <li>Battle of Uhud (625 CE)</li>
                    <li>Battle of the Trench (627 CE)</li>
                    <li>Treaty of Hudaybiyyah (628 CE)</li>
                    <li>Conquest of Mecca (630 CE)</li>
                    <li>Farewell Pilgrimage (632 CE)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">The Rashidun Caliphate (632-661 CE)</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">The Four Rightly Guided Caliphs</h3>
            <p className="mb-4">
              The Rashidun Caliphate represents the golden age of early Islam, characterized 
              by just leadership, rapid expansion, and the establishment of Islamic governance.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Abu Bakr (632-634 CE)</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>First caliph and close companion</li>
                  <li>Suppression of apostasy wars</li>
                  <li>Compilation of Quran</li>
                  <li>Establishment of administrative system</li>
                  <li>Expansion into Byzantine territories</li>
                  <li>Death from natural causes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Umar ibn al-Khattab (634-644 CE)</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Conquest of Jerusalem and Egypt</li>
                  <li>Establishment of diwan system</li>
                  <li>Creation of Islamic calendar</li>
                  <li>Social welfare programs</li>
                  <li>Administrative reforms</li>
                  <li>Assassination by Persian slave</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Uthman and Ali</h3>
            <p className="mb-4">
              The later Rashidun caliphs faced increasing internal challenges and conflicts 
              that would shape the future of Islamic governance and sectarian divisions.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Uthman ibn Affan (644-656 CE):</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Standardization of Quran</li>
                  <li>Naval expansion and conquests</li>
                  <li>Wealth and nepotism accusations</li>
                  <li>Growing opposition and rebellion</li>
                  <li>Assassination by rebels</li>
                  <li>First major internal conflict</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Ali ibn Abi Talib (656-661 CE):</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Fourth and final Rashidun caliph</li>
                  <li>Battle of the Camel (656 CE)</li>
                  <li>Battle of Siffin (657 CE)</li>
                  <li>Emergence of Kharijites</li>
                  <li>Assassination by Kharijite</li>
                  <li>End of Rashidun period</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">The Umayyad Caliphate (661-750 CE)</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Expansion and Administration</h3>
              <p className="mb-3">
                The Umayyad Caliphate established the first hereditary Islamic dynasty and 
                oversaw the greatest territorial expansion of the Islamic empire.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Territorial Expansion:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Conquest of North Africa</li>
                    <li>Invasion of Spain (711 CE)</li>
                    <li>Advance into Central Asia</li>
                    <li>Campaigns against Byzantium</li>
                    <li>Expansion into India</li>
                    <li>Largest empire of its time</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Administrative Reforms:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Arabization policies</li>
                    <li>Centralized bureaucracy</li>
                    <li>Taxation system reforms</li>
                    <li>Postal and communication networks</li>
                    <li>Currency standardization</li>
                    <li>Military organization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Cultural and Religious Development</h3>
              <p className="mb-3">
                The Umayyad period saw significant cultural achievements and the establishment 
                of Islamic architectural and artistic traditions.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Architectural Achievements:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Dome of the Rock (Jerusalem)</li>
                    <li>Great Mosque of Damascus</li>
                    <li>Umayyad Mosque of Aleppo</li>
                    <li>Desert palaces and fortresses</li>
                    <li>Urban planning and development</li>
                    <li>Islamic architectural style</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Cultural Integration:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Greek and Persian influences</li>
                    <li>Translation of classical texts</li>
                    <li>Development of Islamic art</li>
                    <li>Poetry and literature</li>
                    <li>Music and cultural exchange</li>
                    <li>Scientific and philosophical studies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">The Abbasid Caliphate (750-1258 CE)</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">The Islamic Golden Age</h3>
            <p className="mb-4">
              The Abbasid period represents the pinnacle of Islamic civilization, characterized 
              by unprecedented advances in science, philosophy, art, and culture.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-700 mb-3">Scientific Achievements</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>House of Wisdom in Baghdad</li>
                  <li>Translation of Greek and Persian texts</li>
                  <li>Advances in mathematics and algebra</li>
                  <li>Astronomical observations and instruments</li>
                  <li>Medical discoveries and hospitals</li>
                  <li>Chemical and alchemical research</li>
                  <li>Geographic and cartographic advances</li>
                  <li>Optical and physical sciences</li>
                  <li>Agricultural innovations</li>
                  <li>Engineering and architectural marvels</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-3">Cultural Flourishing</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Islamic philosophy and theology</li>
                  <li>Literature and poetry development</li>
                  <li>Calligraphy and visual arts</li>
                  <li>Music and musical theory</li>
                  <li>Architecture and urban design</li>
                  <li>Education and library systems</li>
                  <li>Trade and economic prosperity</li>
                  <li>Interfaith dialogue and tolerance</li>
                  <li>Legal and administrative systems</li>
                  <li>Social and cultural institutions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Political and Social Changes</h3>
            <p className="mb-4">
              The Abbasid period also saw significant political transformations and the 
              emergence of new social and cultural patterns.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Political Developments:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Move from Damascus to Baghdad</li>
                  <li>Persian influence in administration</li>
                  <li>Emergence of regional dynasties</li>
                  <li>Military slave system (Mamluks)</li>
                  <li>Bureaucratic centralization</li>
                  <li>Diplomatic relations with Europe</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Social Transformations:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Urbanization and city development</li>
                  <li>Merchant and artisan classes</li>
                  <li>Women's roles and rights</li>
                  <li>Slavery and social mobility</li>
                  <li>Religious diversity and tolerance</li>
                  <li>Educational opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Later Islamic Empires and Dynasties</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Regional Powers and Dynasties</h3>
              <p className="mb-3">
                Following the decline of the Abbasids, various regional Islamic dynasties 
                emerged, each contributing to the diversity and richness of Islamic civilization.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Major Dynasties:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Fatimid Caliphate (909-1171)</li>
                    <li>Seljuk Empire (1037-1194)</li>
                    <li>Mamluk Sultanate (1250-1517)</li>
                    <li>Ottoman Empire (1299-1922)</li>
                    <li>Safavid Empire (1501-1736)</li>
                    <li>Mughal Empire (1526-1857)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Cultural Contributions:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Architectural masterpieces</li>
                    <li>Artistic and literary traditions</li>
                    <li>Scientific and medical advances</li>
                    <li>Trade and economic networks</li>
                    <li>Educational institutions</li>
                    <li>Religious and philosophical thought</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">The Ottoman Empire</h3>
              <p className="mb-3">
                The Ottoman Empire became the most powerful Islamic state, spanning three 
                continents and lasting for over six centuries.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Territorial Expansion:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Conquest of Constantinople (1453)</li>
                    <li>Expansion into Europe</li>
                    <li>Control of North Africa</li>
                    <li>Dominance in Middle East</li>
                    <li>Influence in Central Asia</li>
                    <li>Naval power in Mediterranean</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Administrative System:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Millet system for minorities</li>
                    <li>Devshirme recruitment system</li>
                    <li>Janissary military corps</li>
                    <li>Complex bureaucracy</li>
                    <li>Religious tolerance policies</li>
                    <li>Economic and trade networks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Modern Era and Contemporary Challenges</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="mb-4">
              The modern era has brought both challenges and opportunities for Islamic 
              communities worldwide, requiring adaptation to changing global circumstances.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Historical Challenges</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>European colonialism and imperialism</li>
                  <li>Decline of Islamic empires</li>
                  <li>Westernization and modernization</li>
                  <li>Nationalism and independence movements</li>
                  <li>Cold War geopolitics</li>
                  <li>Oil politics and economic dependency</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Contemporary Issues</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Islamophobia and discrimination</li>
                  <li>Political extremism and terrorism</li>
                  <li>Economic development and inequality</li>
                  <li>Educational access and quality</li>
                  <li>Women's rights and gender equality</li>
                  <li>Interfaith dialogue and cooperation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Explore More Islamic Topics</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/religion/islam/overview" className="block p-4 bg-white rounded-lg border hover:border-green-300 transition-colors">
              <h4 className="font-semibold text-green-700 mb-2">Islamic Overview</h4>
              <p className="text-sm text-gray-600">Core beliefs and practices</p>
            </Link>
            <Link href="/religion/islam/teachings" className="block p-4 bg-white rounded-lg border hover:border-green-300 transition-colors">
              <h4 className="font-semibold text-green-700 mb-2">Islamic Teachings</h4>
              <p className="text-sm text-gray-600">Spiritual principles and theology</p>
            </Link>
            <Link href="/religion/islam/practices" className="block p-4 bg-white rounded-lg border hover:border-green-300 transition-colors">
              <h4 className="font-semibold text-green-700 mb-2">Islamic Practices</h4>
              <p className="text-sm text-gray-600">Daily rituals and worship</p>
            </Link>
            <Link href="/religion/islam/scriptures" className="block p-4 bg-white rounded-lg border hover:border-green-300 transition-colors">
              <h4 className="font-semibold text-green-700 mb-2">Islamic Scriptures</h4>
              <p className="text-sm text-gray-600">Quran, Hadith, and sacred texts</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 