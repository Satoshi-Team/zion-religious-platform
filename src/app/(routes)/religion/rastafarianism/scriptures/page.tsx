import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rastafarian Scriptures | Sacred Texts and Holy Books',
  description: 'Explore the sacred scriptures of Rastafarianism, including the Bible, Ethiopian texts, and Rastafarian interpretations. Learn about the spiritual foundation of the faith.',
  keywords: 'Rastafarian scriptures, Bible, Ethiopian texts, Holy Piby, Kebra Nagast, Rastafarian Bible interpretation, sacred texts, spiritual foundation',
  openGraph: {
    title: 'Rastafarian Scriptures | Sacred Texts and Holy Books',
    description: 'Explore the sacred scriptures of Rastafarianism, including the Bible, Ethiopian texts, and Rastafarian interpretations.',
    type: 'website',
  },
}

export default function RastafarianScripturesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="text-sm breadcrumbs mb-8">
        <ul>
          <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
          <li><Link href="/religion" className="text-blue-600 hover:text-blue-800">Religions</Link></li>
          <li><Link href="/religion/rastafarianism" className="text-blue-600 hover:text-blue-800">Rastafarianism</Link></li>
          <li className="text-gray-600">Scriptures</li>
        </ul>
      </nav>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-green-800 mb-6">Rastafarian Scriptures</h1>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <p className="text-lg text-green-800">
            Rastafarian spirituality is deeply rooted in biblical texts, particularly the Old Testament, 
            combined with Ethiopian sacred writings and Rastafarian interpretations that emphasize 
            African identity, liberation, and divine kingship.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">The Bible in Rastafarianism</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Old Testament Focus</h3>
              <p className="mb-4">
                Rastafarians place special emphasis on the Old Testament, particularly the books that 
                speak of Israel, Ethiopia, and divine kingship. Key texts include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Psalms</strong> - Songs of praise and prophecy about Zion</li>
                <li><strong>Isaiah</strong> - Prophecies about Ethiopia and divine kingship</li>
                <li><strong>Revelation</strong> - Apocalyptic visions of the Lion of Judah</li>
                <li><strong>Genesis</strong> - Creation and the origins of humanity</li>
                <li><strong>Exodus</strong> - Liberation from oppression and journey to freedom</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Biblical Interpretation</h3>
              <p className="mb-4">
                Rastafarians interpret the Bible through the lens of African identity and liberation theology:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Israel as symbolic of Africa and the African diaspora</li>
                <li>Ethiopia as the promised land and spiritual homeland</li>
                <li>Haile Selassie as the fulfillment of biblical prophecies</li>
                <li>Babylon as symbolic of oppressive systems and colonialism</li>
                <li>Zion as the ideal spiritual and physical homeland</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Ethiopian Sacred Texts</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-4">The Kebra Nagast</h3>
            <p className="mb-4">
              The "Glory of Kings" is Ethiopia's national epic and a foundational text for Rastafarians. 
              It tells the story of the Queen of Sheba's visit to King Solomon and the birth of their son, 
              Menelik I, who brought the Ark of the Covenant to Ethiopia.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Key Themes:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Divine kingship and the Solomonic dynasty</li>
                  <li>Ethiopia's special relationship with God</li>
                  <li>The Ark of the Covenant in Ethiopia</li>
                  <li>Ethiopian identity as God's chosen people</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Rastafarian Significance:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Confirms Ethiopia's divine status</li>
                  <li>Supports Haile Selassie's legitimacy</li>
                  <li>Establishes African biblical heritage</li>
                  <li>Provides historical foundation for the faith</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">The Holy Piby</h3>
            <p className="mb-4">
              Also known as the "Black Man's Bible," this text was written by Robert Athlyi Rogers 
              in the 1920s and serves as a foundational document for Rastafarian theology.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Key Teachings:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>African identity and divine heritage</li>
                  <li>Liberation from colonial oppression</li>
                  <li>Return to African homeland</li>
                  <li>Divine kingship and messianic hope</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Historical Context:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Written during Garvey era</li>
                  <li>Influenced early Rastafarian thought</li>
                  <li>Emphasized Ethiopian connection</li>
                  <li>Prepared ground for Haile Selassie</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Rastafarian Interpretations</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Symbolic Language</h3>
              <p className="mb-3">
                Rastafarians use symbolic language to interpret biblical texts, creating a unique 
                spiritual vocabulary that reflects their African identity and liberation theology.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Key Symbols:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li><strong>Lion</strong> - Strength, courage, divine kingship</li>
                    <li><strong>Lamb</strong> - Peace, gentleness, sacrifice</li>
                    <li><strong>Fire</strong> - Divine presence, purification</li>
                    <li><strong>Water</strong> - Life, cleansing, baptism</li>
                    <li><strong>Mountains</strong> - Spiritual elevation, divine encounter</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Biblical References:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Revelation 5:5 - "Lion of the tribe of Judah"</li>
                    <li>Psalms 68:31 - "Ethiopia shall stretch forth her hands"</li>
                    <li>Isaiah 11:1 - "Rod of Jesse" prophecy</li>
                    <li>Genesis 2:13 - Gihon river flowing through Ethiopia</li>
                    <li>Acts 8:27 - Ethiopian eunuch's conversion</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Liberation Theology</h3>
              <p className="mb-3">
                Rastafarian biblical interpretation emphasizes liberation from oppression, 
                both spiritual and physical, drawing parallels between biblical Israel and 
                the African diaspora experience.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Exodus Parallels:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Slavery in Egypt → Colonial oppression</li>
                    <li>Moses → Liberation leaders</li>
                    <li>Promised Land → Africa/Ethiopia</li>
                    <li>Pharaoh → Oppressive systems</li>
                    <li>Red Sea → Atlantic Ocean crossing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Contemporary Application:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Economic liberation</li>
                    <li>Cultural restoration</li>
                    <li>Spiritual awakening</li>
                    <li>Political empowerment</li>
                    <li>Social justice</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Study and Practice</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Scripture Study Methods</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Reasoning Sessions</strong> - Group discussions and interpretations</li>
                <li><strong>Personal Meditation</strong> - Individual study and reflection</li>
                <li><strong>Nyabinghi Ceremonies</strong> - Scriptural readings during gatherings</li>
                <li><strong>Groundedation</strong> - Community study and teaching sessions</li>
                <li><strong>Prophetic Interpretation</strong> - Understanding current events through scripture</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Key Passages for Study</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Revelation 5:5</strong> - The Lion of Judah</li>
                <li><strong>Psalms 68:31</strong> - Ethiopia's divine role</li>
                <li><strong>Isaiah 11:1-10</strong> - Messianic prophecies</li>
                <li><strong>Genesis 2:10-14</strong> - Rivers of Eden</li>
                <li><strong>Acts 8:26-40</strong> - Ethiopian conversion</li>
                <li><strong>Exodus 1-15</strong> - Liberation narrative</li>
                <li><strong>Psalms 137</strong> - By the rivers of Babylon</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Contemporary Relevance</h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="mb-4">
              Rastafarian scriptures continue to inspire and guide believers in the modern world, 
              offering wisdom for personal transformation, community building, and social justice.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <h4 className="font-semibold text-green-700 mb-2">Personal Growth</h4>
                <p className="text-sm">Spiritual development and self-awareness through biblical wisdom</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-green-700 mb-2">Community Building</h4>
                <p className="text-sm">Strengthening bonds through shared spiritual practices and values</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-green-700 mb-2">Social Justice</h4>
                <p className="text-sm">Applying liberation theology to contemporary struggles</p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Explore More Rastafarian Topics</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/religion/rastafarianism/teachings" className="block p-4 bg-white rounded-lg border hover:border-green-300 transition-colors">
              <h4 className="font-semibold text-green-700 mb-2">Rastafarian Teachings</h4>
              <p className="text-sm text-gray-600">Core beliefs and spiritual principles</p>
            </Link>
            <Link href="/religion/rastafarianism/practices" className="block p-4 bg-white rounded-lg border hover:border-green-300 transition-colors">
              <h4 className="font-semibold text-green-700 mb-2">Rastafarian Practices</h4>
              <p className="text-sm text-gray-600">Spiritual practices and lifestyle</p>
            </Link>
            <Link href="/religion/rastafarianism/history" className="block p-4 bg-white rounded-lg border hover:border-green-300 transition-colors">
              <h4 className="font-semibold text-green-700 mb-2">Rastafarian History</h4>
              <p className="text-sm text-gray-600">Historical development and key figures</p>
            </Link>
            <Link href="/religion/rastafarianism/impact" className="block p-4 bg-white rounded-lg border hover:border-green-300 transition-colors">
              <h4 className="font-semibold text-green-700 mb-2">Cultural Impact</h4>
              <p className="text-sm text-gray-600">Influence on music, culture, and society</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 