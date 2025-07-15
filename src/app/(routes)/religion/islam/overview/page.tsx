import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Islam Overview | Core Beliefs, Practices, and Global Significance',
  description: 'Explore the comprehensive overview of Islam, including core beliefs, the Five Pillars, Islamic history, global impact, and spiritual practices that guide over 1.8 billion Muslims worldwide.',
  keywords: 'Islam overview, Islamic beliefs, Five Pillars, Muslim practices, Islamic history, global Islam, Islamic spirituality, Muslim community',
  openGraph: {
    title: 'Islam Overview | Core Beliefs, Practices, and Global Significance',
    description: 'Explore the comprehensive overview of Islam, including core beliefs, the Five Pillars, and global impact.',
    type: 'website',
  },
}

export default function IslamOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="text-sm breadcrumbs mb-8">
        <ul>
          <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
          <li><Link href="/religion" className="text-blue-600 hover:text-blue-800">Religions</Link></li>
          <li className="text-gray-600">Islam</li>
        </ul>
      </nav>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-green-800 mb-6">Islam Overview</h1>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <p className="text-lg text-green-800">
            Islam, meaning "submission to God," is one of the world's major monotheistic religions, 
            with over 1.8 billion followers worldwide. Founded in the 7th century CE by Prophet Muhammad 
            (peace be upon him), Islam emphasizes monotheism, social justice, and spiritual development.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Core Beliefs and Theology</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Tawhid: The Oneness of God</h3>
            <p className="mb-4">
              The fundamental principle of Islam is Tawhid - the absolute oneness and unity of God (Allah). 
              This monotheistic belief forms the foundation of all Islamic theology and practice.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Attributes of Allah</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Al-Rahman</strong> - The Most Merciful</li>
                  <li><strong>Al-Rahim</strong> - The Most Compassionate</li>
                  <li><strong>Al-Malik</strong> - The Sovereign</li>
                  <li><strong>Al-Quddus</strong> - The Holy</li>
                  <li><strong>Al-Salam</strong> - The Source of Peace</li>
                  <li><strong>Al-Mu'min</strong> - The Guardian of Faith</li>
                  <li><strong>Al-Muhaymin</strong> - The Protector</li>
                  <li><strong>Al-Aziz</strong> - The Almighty</li>
                  <li><strong>Al-Jabbar</strong> - The Compeller</li>
                  <li><strong>Al-Mutakabbir</strong> - The Majestic</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Theological Implications</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Complete submission to divine will</li>
                  <li>Rejection of polytheism and idolatry</li>
                  <li>Direct relationship with God</li>
                  <li>Universal divine justice</li>
                  <li>Spiritual equality of all believers</li>
                  <li>Divine guidance through revelation</li>
                  <li>Accountability to God alone</li>
                  <li>Trust in divine wisdom and mercy</li>
                  <li>Recognition of divine sovereignty</li>
                  <li>Commitment to divine commandments</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-4">The Six Articles of Faith</h3>
            <p className="mb-4">
              Islamic belief is structured around six fundamental articles of faith that define 
              the core theological framework of the religion.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Core Beliefs</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Belief in Allah</strong> - The one true God</li>
                  <li><strong>Belief in Angels</strong> - Divine messengers and servants</li>
                  <li><strong>Belief in Divine Books</strong> - Revealed scriptures</li>
                  <li><strong>Belief in Prophets</strong> - Divine messengers to humanity</li>
                  <li><strong>Belief in the Day of Judgment</strong> - Final accountability</li>
                  <li><strong>Belief in Divine Decree</strong> - God's ultimate control</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Spiritual Significance</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Provides comprehensive worldview</li>
                  <li>Guides moral and ethical behavior</li>
                  <li>Offers comfort and hope</li>
                  <li>Encourages spiritual development</li>
                  <li>Promotes social responsibility</li>
                  <li>Fosters community unity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">The Five Pillars of Islam</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">1. Shahada (Declaration of Faith)</h3>
              <p className="mb-3">
                The Shahada is the fundamental declaration that establishes one's identity as a Muslim: 
                "There is no god but Allah, and Muhammad is the messenger of Allah."
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Spiritual Meaning:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Complete submission to God</li>
                    <li>Recognition of divine oneness</li>
                    <li>Acceptance of prophetic guidance</li>
                    <li>Commitment to Islamic way of life</li>
                    <li>Entry into Muslim community</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Practical Application:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Recited daily in prayers</li>
                    <li>Whispered to newborns</li>
                    <li>Final words for dying</li>
                    <li>Public declaration of conversion</li>
                    <li>Constant reminder of faith</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">2. Salah (Prayer)</h3>
              <p className="mb-3">
                Muslims perform five daily prayers at specific times, facing the Kaaba in Mecca, 
                establishing a direct connection with God throughout the day.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Prayer Times:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Fajr - Before sunrise</li>
                    <li>Dhuhr - Afternoon</li>
                    <li>Asr - Late afternoon</li>
                    <li>Maghrib - After sunset</li>
                    <li>Isha - Night</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Spiritual Benefits:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Regular divine connection</li>
                    <li>Discipline and self-control</li>
                    <li>Community solidarity</li>
                    <li>Spiritual purification</li>
                    <li>Mindfulness and reflection</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">3. Zakat (Charity)</h3>
              <p className="mb-3">
                Zakat is the obligatory giving of 2.5% of one's wealth annually to help the poor 
                and needy, promoting social justice and economic equality.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Recipients:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>The poor and needy</li>
                    <li>New converts to Islam</li>
                    <li>Those in debt</li>
                    <li>Travelers in need</li>
                    <li>Those working for God's cause</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Social Impact:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Poverty alleviation</li>
                    <li>Economic redistribution</li>
                    <li>Community solidarity</li>
                    <li>Social responsibility</li>
                    <li>Wealth purification</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">4. Sawm (Fasting)</h3>
              <p className="mb-3">
                During the month of Ramadan, Muslims fast from dawn to sunset, abstaining from 
                food, drink, and other physical needs to develop spiritual discipline and empathy.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Spiritual Goals:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Self-discipline and control</li>
                    <li>Spiritual purification</li>
                    <li>Empathy for the poor</li>
                    <li>Increased devotion</li>
                    <li>Community unity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Physical Benefits:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Health improvement</li>
                    <li>Detoxification</li>
                    <li>Weight management</li>
                    <li>Mental clarity</li>
                    <li>Appreciation for blessings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-3">5. Hajj (Pilgrimage)</h3>
              <p className="mb-3">
                Every able-bodied Muslim is required to perform the Hajj pilgrimage to Mecca 
                at least once in their lifetime, during the Islamic month of Dhu al-Hijjah.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">Pilgrimage Rituals:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Tawaf - Circumambulation of Kaaba</li>
                    <li>Sa'i - Walking between Safa and Marwa</li>
                    <li>Standing at Arafat</li>
                    <li>Stoning of the devil</li>
                    <li>Sacrifice of animals</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">Spiritual Significance:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Unity of Muslim community</li>
                    <li>Equality before God</li>
                    <li>Historical connection</li>
                    <li>Spiritual renewal</li>
                    <li>Global brotherhood</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Islamic Scriptures and Sources</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">The Holy Quran</h3>
            <p className="mb-4">
              The Quran is the central religious text of Islam, believed to be the literal word 
              of God revealed to Prophet Muhammad through the Angel Gabriel over 23 years.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Structure and Content</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>114 chapters (Surahs)</li>
                  <li>6,236 verses (Ayahs)</li>
                  <li>Revealed in Arabic</li>
                  <li>Chronological revelation</li>
                  <li>Meccan and Medinan periods</li>
                  <li>Various literary styles</li>
                  <li>Legal, moral, and spiritual guidance</li>
                  <li>Historical narratives</li>
                  <li>Scientific references</li>
                  <li>Prophetic stories</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Themes and Teachings</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Monotheism and divine unity</li>
                  <li>Social justice and equality</li>
                  <li>Moral and ethical conduct</li>
                  <li>Family and community values</li>
                  <li>Environmental stewardship</li>
                  <li>Interfaith relations</li>
                  <li>Economic principles</li>
                  <li>Political governance</li>
                  <li>Personal development</li>
                  <li>Spiritual purification</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Hadith Literature</h3>
            <p className="mb-4">
              Hadith are the recorded sayings, actions, and approvals of Prophet Muhammad, 
              providing guidance for Islamic practice and interpretation of the Quran.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Hadith Categories:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Sahih - Authentic and reliable</li>
                  <li>Hasan - Good and acceptable</li>
                  <li>Da'if - Weak and unreliable</li>
                  <li>Mawdu' - Fabricated and false</li>
                  <li>Mutawatir - Mass-transmitted</li>
                  <li>Ahad - Single-chain transmission</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Major Collections:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Sahih al-Bukhari</li>
                  <li>Sahih Muslim</li>
                  <li>Sunan Abu Dawud</li>
                  <li>Jami' at-Tirmidhi</li>
                  <li>Sunan an-Nasa'i</li>
                  <li>Sunan Ibn Majah</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Islamic Law and Ethics</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Sharia: Islamic Law</h3>
              <p className="mb-3">
                Sharia is the comprehensive Islamic legal system derived from the Quran, Hadith, 
                and scholarly consensus, guiding all aspects of Muslim life.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Legal Categories:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Fard - Obligatory actions</li>
                    <li>Mustahabb - Recommended actions</li>
                    <li>Mubah - Permitted actions</li>
                    <li>Makruh - Disliked actions</li>
                    <li>Haram - Forbidden actions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Areas of Application:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Worship and rituals</li>
                    <li>Family and marriage</li>
                    <li>Business and commerce</li>
                    <li>Criminal justice</li>
                    <li>Social relations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Islamic Ethics</h3>
              <p className="mb-3">
                Islamic ethics emphasize moral character, social responsibility, and spiritual 
                development as essential components of faith.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Core Values:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Justice and fairness</li>
                    <li>Compassion and mercy</li>
                    <li>Honesty and integrity</li>
                    <li>Humility and modesty</li>
                    <li>Generosity and charity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Social Principles:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Community solidarity</li>
                    <li>Family responsibility</li>
                    <li>Respect for elders</li>
                    <li>Care for the vulnerable</li>
                    <li>Environmental protection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Global Impact and Demographics</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Worldwide Presence</h3>
            <p className="mb-4">
              Islam is the world's second-largest religion, with over 1.8 billion followers 
              representing diverse cultures, languages, and ethnicities across all continents.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Geographic Distribution</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Asia-Pacific</strong> - 1.2 billion Muslims</li>
                  <li><strong>Middle East-North Africa</strong> - 400 million Muslims</li>
                  <li><strong>Sub-Saharan Africa</strong> - 250 million Muslims</li>
                  <li><strong>Europe</strong> - 44 million Muslims</li>
                  <li><strong>Americas</strong> - 6 million Muslims</li>
                  <li><strong>Oceania</strong> - 650,000 Muslims</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Cultural Diversity</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Arab, Persian, Turkish cultures</li>
                  <li>South Asian traditions</li>
                  <li>Southeast Asian practices</li>
                  <li>African Islamic heritage</li>
                  <li>European Muslim communities</li>
                  <li>American Muslim identity</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Contributions to Civilization</h3>
            <p className="mb-4">
              Islamic civilization has made significant contributions to science, medicine, 
              mathematics, philosophy, art, and architecture throughout history.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Scientific Achievements:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Algebra and mathematics</li>
                  <li>Astronomy and navigation</li>
                  <li>Medicine and pharmacology</li>
                  <li>Chemistry and alchemy</li>
                  <li>Physics and optics</li>
                  <li>Geography and cartography</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Cultural Contributions:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Islamic architecture</li>
                  <li>Calligraphy and art</li>
                  <li>Literature and poetry</li>
                  <li>Music and instruments</li>
                  <li>Cuisine and hospitality</li>
                  <li>Education and libraries</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Contemporary Challenges and Opportunities</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="mb-4">
              Modern Muslims face various challenges while also embracing opportunities for 
              growth, dialogue, and positive contribution to global society.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Contemporary Challenges</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Islamophobia and discrimination</li>
                  <li>Political extremism and terrorism</li>
                  <li>Cultural assimilation pressures</li>
                  <li>Economic inequality</li>
                  <li>Educational access</li>
                  <li>Interfaith dialogue</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Opportunities for Growth</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Global connectivity and communication</li>
                  <li>Educational advancement</li>
                  <li>Interfaith cooperation</li>
                  <li>Social justice advocacy</li>
                  <li>Environmental leadership</li>
                  <li>Cultural exchange</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Explore More Islamic Topics</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/religion/islam/teachings" className="block p-4 bg-white rounded-lg border hover:border-green-300 transition-colors">
              <h4 className="font-semibold text-green-700 mb-2">Islamic Teachings</h4>
              <p className="text-sm text-gray-600">Core beliefs and spiritual principles</p>
            </Link>
            <Link href="/religion/islam/practices" className="block p-4 bg-white rounded-lg border hover:border-green-300 transition-colors">
              <h4 className="font-semibold text-green-700 mb-2">Islamic Practices</h4>
              <p className="text-sm text-gray-600">Daily rituals and spiritual practices</p>
            </Link>
            <Link href="/religion/islam/history" className="block p-4 bg-white rounded-lg border hover:border-green-300 transition-colors">
              <h4 className="font-semibold text-green-700 mb-2">Islamic History</h4>
              <p className="text-sm text-gray-600">Historical development and key events</p>
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