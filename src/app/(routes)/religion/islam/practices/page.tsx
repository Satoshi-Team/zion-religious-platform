import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Islamic Practices | Daily Rituals, Worship, and Spiritual Life',
  description: 'Explore comprehensive Islamic practices including daily prayers, fasting, charity, pilgrimage, and spiritual rituals that guide Muslim life and worship.',
  keywords: 'Islamic practices, daily prayers, salah, fasting, zakat, hajj, spiritual rituals, Muslim worship, Islamic lifestyle',
  openGraph: {
    title: 'Islamic Practices | Daily Rituals, Worship, and Spiritual Life',
    description: 'Explore comprehensive Islamic practices including daily prayers, fasting, charity, and pilgrimage.',
    type: 'website',
  },
}

export default function IslamPracticesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="text-sm breadcrumbs mb-8">
        <ul>
          <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
          <li><Link href="/religion" className="text-blue-600 hover:text-blue-800">Religions</Link></li>
          <li><Link href="/religion/islam" className="text-blue-600 hover:text-blue-800">Islam</Link></li>
          <li className="text-gray-600">Practices</li>
        </ul>
      </nav>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-green-800 mb-6">Islamic Practices</h1>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <p className="text-lg text-green-800">
            Islamic practices encompass a comprehensive system of worship, spiritual discipline, 
            and daily rituals that guide Muslims in their relationship with God and their community. 
            These practices are designed to purify the soul, strengthen faith, and maintain spiritual awareness.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">The Five Daily Prayers (Salah)</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Prayer Times and Structure</h3>
            <p className="mb-4">
              Muslims perform five obligatory prayers each day at specific times, creating a 
              rhythm of spiritual connection and mindfulness throughout daily life.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Daily Prayer Schedule</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Fajr</strong> - Before sunrise (2-4 units)</li>
                  <li><strong>Dhuhr</strong> - Afternoon (4 units)</li>
                  <li><strong>Asr</strong> - Late afternoon (4 units)</li>
                  <li><strong>Maghrib</strong> - After sunset (3 units)</li>
                  <li><strong>Isha</strong> - Night (4 units)</li>
                  <li><strong>Witr</strong> - Optional night prayer (1-3 units)</li>
                  <li><strong>Tahajjud</strong> - Optional late night prayer</li>
                  <li><strong>Duha</strong> - Optional mid-morning prayer</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Prayer Components</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Takbir</strong> - Opening declaration</li>
                  <li><strong>Qiyam</strong> - Standing position</li>
                  <li><strong>Ruku</strong> - Bowing position</li>
                  <li><strong>Sujood</strong> - Prostration</li>
                  <li><strong>Jalsa</strong> - Sitting between prostrations</li>
                  <li><strong>Tashahhud</strong> - Testimony of faith</li>
                  <li><strong>Tasleem</strong> - Closing salutations</li>
                  <li><strong>Dhikr</strong> - Remembrance after prayer</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-4">Prayer Preparation and Etiquette</h3>
            <p className="mb-4">
              Before prayer, Muslims perform ritual purification (wudu) and observe specific 
              etiquette to ensure spiritual readiness and proper worship.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Wudu (Ablution):</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Washing hands three times</li>
                  <li>Rinsing mouth and nose</li>
                  <li>Washing face completely</li>
                  <li>Washing arms to elbows</li>
                  <li>Wiping head and ears</li>
                  <li>Washing feet to ankles</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Prayer Etiquette:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Facing the Kaaba (Qibla)</li>
                  <li>Clean and modest clothing</li>
                  <li>Quiet and respectful environment</li>
                  <li>Proper prayer mat or clean surface</li>
                  <li>Mental and spiritual focus</li>
                  <li>Humility and submission</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Fasting and Spiritual Discipline</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Ramadan: The Month of Fasting</h3>
              <p className="mb-3">
                Ramadan is the ninth month of the Islamic calendar, during which Muslims fast 
                from dawn to sunset, engaging in increased worship, charity, and spiritual reflection.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Fasting Requirements:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Abstaining from food and drink</li>
                    <li>Refraining from smoking and intimate relations</li>
                    <li>Avoiding negative speech and behavior</li>
                    <li>Increased prayer and Quran recitation</li>
                    <li>Charity and good deeds</li>
                    <li>Spiritual self-discipline</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Spiritual Benefits:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Self-control and discipline</li>
                    <li>Empathy for the poor</li>
                    <li>Spiritual purification</li>
                    <li>Increased gratitude</li>
                    <li>Community solidarity</li>
                    <li>Divine mercy and forgiveness</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Other Fasting Practices</h3>
              <p className="mb-3">
                Beyond Ramadan, Muslims observe various voluntary fasts throughout the year 
                for spiritual growth and divine reward.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Recommended Fasts:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Mondays and Thursdays</li>
                    <li>White days (13th, 14th, 15th of lunar month)</li>
                    <li>Day of Arafah (9th Dhul Hijjah)</li>
                    <li>Ashura (10th Muharram)</li>
                    <li>Six days of Shawwal</li>
                    <li>Fasting during Rajab and Sha'ban</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Special Observances:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Laylat al-Qadr (Night of Power)</li>
                    <li>Last ten days of Ramadan</li>
                    <li>Fasting for specific intentions</li>
                    <li>Compensatory fasting</li>
                    <li>Vow-based fasting</li>
                    <li>Fasting for repentance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Charity and Social Responsibility</h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Zakat: Obligatory Charity</h3>
            <p className="mb-4">
              Zakat is the third pillar of Islam, requiring Muslims to give 2.5% of their 
              accumulated wealth annually to help the poor and needy.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Zakat Requirements</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Nisab threshold (minimum wealth)</li>
                  <li>Lunar year ownership</li>
                  <li>2.5% calculation on savings</li>
                  <li>Gold and silver valuation</li>
                  <li>Business inventory assessment</li>
                  <li>Agricultural produce (5-10%)</li>
                  <li>Livestock calculations</li>
                  <li>Investment and rental income</li>
                  <li>Debt considerations</li>
                  <li>Annual payment obligation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Beneficiaries (Asnaf)</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Fuqara (the poor)</li>
                  <li>Masakeen (the needy)</li>
                  <li>Amil (zakat collectors)</li>
                  <li>Mu'allafat al-Qulub (new converts)</li>
                  <li>Fi ar-Riqab (freeing slaves)</li>
                  <li>Al-Gharimin (debtors)</li>
                  <li>Fi Sabilillah (God's cause)</li>
                  <li>Ibn as-Sabil (travelers)</li>
                  <li>Orphans and widows</li>
                  <li>Students and scholars</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">Sadaqah: Voluntary Charity</h3>
            <p className="mb-4">
              Beyond obligatory zakat, Muslims are encouraged to give voluntary charity 
              (sadaqah) as an expression of gratitude and compassion.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Forms of Sadaqah:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Financial donations</li>
                  <li>Food and clothing assistance</li>
                  <li>Educational support</li>
                  <li>Healthcare provision</li>
                  <li>Infrastructure development</li>
                  <li>Environmental projects</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Spiritual Benefits:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Purification of wealth</li>
                  <li>Protection from calamity</li>
                  <li>Increase in blessings</li>
                  <li>Community solidarity</li>
                  <li>Personal satisfaction</li>
                  <li>Divine reward and mercy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Pilgrimage and Sacred Journeys</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Hajj: The Major Pilgrimage</h3>
              <p className="mb-3">
                Hajj is the fifth pillar of Islam, requiring every able-bodied Muslim to 
                perform the pilgrimage to Mecca at least once in their lifetime.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Hajj Rituals:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Ihram (sacred state)</li>
                    <li>Tawaf (circumambulation of Kaaba)</li>
                    <li>Sa'i (walking between Safa and Marwa)</li>
                    <li>Standing at Arafat</li>
                    <li>Muzdalifah overnight stay</li>
                    <li>Stoning of the devil</li>
                    <li>Animal sacrifice</li>
                    <li>Final Tawaf and Sa'i</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Spiritual Significance:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Unity of Muslim community</li>
                    <li>Equality before God</li>
                    <li>Historical reenactment</li>
                    <li>Spiritual purification</li>
                    <li>Forgiveness of sins</li>
                    <li>Global brotherhood</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Umrah: The Minor Pilgrimage</h3>
              <p className="mb-3">
                Umrah is a voluntary pilgrimage that can be performed at any time of the year, 
                involving a subset of Hajj rituals.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Umrah Rituals:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Entering Ihram</li>
                    <li>Performing Tawaf</li>
                    <li>Praying behind Maqam Ibrahim</li>
                    <li>Drinking Zamzam water</li>
                    <li>Performing Sa'i</li>
                    <li>Shaving or trimming hair</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Benefits:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Spiritual renewal</li>
                    <li>Forgiveness of sins</li>
                    <li>Increased faith</li>
                    <li>Blessings and rewards</li>
                    <li>Personal growth</li>
                    <li>Community connection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Daily Spiritual Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Dhikr and Remembrance</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Subhanallah</strong> - Glory be to God (33 times)</li>
                <li><strong>Alhamdulillah</strong> - Praise be to God (33 times)</li>
                <li><strong>Allahu Akbar</strong> - God is Great (33 times)</li>
                <li><strong>La ilaha illallah</strong> - There is no god but God</li>
                <li><strong>Astaghfirullah</strong> - I seek God's forgiveness</li>
                <li><strong>Bismillah</strong> - In the name of God</li>
                <li><strong>Salawat</strong> - Blessings on Prophet Muhammad</li>
                <li><strong>Morning and evening supplications</strong></li>
                <li><strong>Quran recitation and memorization</strong></li>
                <li><strong>Personal dua (supplication)</strong></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Moral and Ethical Practices</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Truthfulness and honesty</strong> in all dealings</li>
                <li><strong>Kindness and compassion</strong> toward all creation</li>
                <li><strong>Patience and perseverance</strong> in difficulties</li>
                <li><strong>Gratitude and thankfulness</strong> for blessings</li>
                <li><strong>Forgiveness and reconciliation</strong> with others</li>
                <li><strong>Modesty and humility</strong> in behavior</li>
                <li><strong>Justice and fairness</strong> in all matters</li>
                <li><strong>Generosity and hospitality</strong> to guests</li>
                <li><strong>Respect for parents and elders</strong></li>
                <li><strong>Care for family and community</strong></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Lifestyle and Dietary Practices</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Halal Lifestyle</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Halal food and beverages</li>
                  <li>Ethical business practices</li>
                  <li>Modest dress and behavior</li>
                  <li>Family and marital values</li>
                  <li>Social responsibility</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Health and Wellness</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Physical cleanliness</li>
                  <li>Mental and spiritual health</li>
                  <li>Balanced nutrition</li>
                  <li>Exercise and fitness</li>
                  <li>Stress management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Environmental Stewardship</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Conservation of resources</li>
                  <li>Protection of nature</li>
                  <li>Sustainable practices</li>
                  <li>Animal welfare</li>
                  <li>Clean environment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Community and Social Practices</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="mb-4">
              Islamic practices extend beyond individual worship to encompass community 
              building, social responsibility, and collective spiritual growth.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Community Gatherings</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Friday congregational prayers</li>
                  <li>Eid celebrations and festivals</li>
                  <li>Religious study circles</li>
                  <li>Community iftars during Ramadan</li>
                  <li>Charity and volunteer work</li>
                  <li>Interfaith dialogue and cooperation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Social Responsibilities</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Supporting the poor and needy</li>
                  <li>Visiting the sick and elderly</li>
                  <li>Attending funerals and condolences</li>
                  <li>Resolving conflicts and disputes</li>
                  <li>Promoting education and knowledge</li>
                  <li>Advocating for justice and equality</li>
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
              <p className="text-sm text-gray-600">Core beliefs and principles</p>
            </Link>
            <Link href="/religion/islam/teachings" className="block p-4 bg-white rounded-lg border hover:border-green-300 transition-colors">
              <h4 className="font-semibold text-green-700 mb-2">Islamic Teachings</h4>
              <p className="text-sm text-gray-600">Spiritual principles and theology</p>
            </Link>
            <Link href="/religion/islam/history" className="block p-4 bg-white rounded-lg border hover:border-green-300 transition-colors">
              <h4 className="font-semibold text-green-700 mb-2">Islamic History</h4>
              <p className="text-sm text-gray-600">Historical development and events</p>
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