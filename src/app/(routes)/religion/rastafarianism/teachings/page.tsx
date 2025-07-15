import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rastafarian Teachings | Core Beliefs and Spiritual Principles',
  description: 'Explore the core teachings of Rastafarianism, including divine kingship, African identity, liberation theology, and spiritual principles that guide the faith.',
  keywords: 'Rastafarian teachings, Haile Selassie, divine kingship, African identity, liberation theology, spiritual principles, Rastafarian beliefs',
  openGraph: {
    title: 'Rastafarian Teachings | Core Beliefs and Spiritual Principles',
    description: 'Explore the core teachings of Rastafarianism, including divine kingship, African identity, and liberation theology.',
    type: 'website',
  },
}

export default function RastafarianTeachingsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="text-sm breadcrumbs mb-8">
        <ul>
          <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
          <li><Link href="/religion" className="text-blue-600 hover:text-blue-800">Religions</Link></li>
          <li><Link href="/religion/rastafarianism" className="text-blue-600 hover:text-blue-800">Rastafarianism</Link></li>
          <li className="text-gray-600">Teachings</li>
        </ul>
      </nav>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-green-800 mb-6">Rastafarian Teachings</h1>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <p className="text-lg text-green-800">
            Rastafarian teachings center on divine kingship, African identity, liberation theology, 
            and spiritual principles that guide believers toward personal transformation and social justice.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Divine Kingship</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-4">Haile Selassie I</h3>
            <p className="mb-4">
              Emperor Haile Selassie I of Ethiopia is central to Rastafarian theology as the 
              living God, the Lion of Judah, and the fulfillment of biblical prophecies.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Biblical Foundation</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Revelation 5:5 - "Lion of the tribe of Judah"</li>
                  <li>Psalms 68:31 - "Ethiopia shall stretch forth her hands"</li>
                  <li>Isaiah 11:1 - "Rod of Jesse" prophecy</li>
                  <li>Genesis 49:10 - Scepter shall not depart from Judah</li>
                  <li>Solomonic dynasty connection through Kebra Nagast</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Divine Attributes</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Incarnation of God on Earth</li>
                  <li>King of Kings and Lord of Lords</li>
                  <li>Conquering Lion of Judah</li>
                  <li>Elect of God and Light of the World</li>
                  <li>Defender of the Faith</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">The Lion of Judah</h3>
            <p className="mb-4">
              The lion symbolizes strength, courage, and divine authority in Rastafarian theology, 
              representing both Haile Selassie and the spiritual qualities believers should embody.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Symbolic Meaning:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Strength and courage in adversity</li>
                  <li>Divine authority and kingship</li>
                  <li>Protection and leadership</li>
                  <li>Royal dignity and majesty</li>
                  <li>Spiritual power and presence</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Personal Application:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Standing firm in faith</li>
                  <li>Leading with courage</li>
                  <li>Protecting the vulnerable</li>
                  <li>Maintaining dignity</li>
                  <li>Expressing spiritual power</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">African Identity and Heritage</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Divine African Heritage</h3>
              <p className="mb-3">
                Rastafarians believe that Africans and people of African descent have a special 
                divine heritage and connection to God, as evidenced in biblical texts and Ethiopian history.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Biblical Evidence:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Ethiopia mentioned throughout Bible</li>
                    <li>Queen of Sheba's visit to Solomon</li>
                    <li>Ethiopian eunuch's conversion</li>
                    <li>Gihon river flowing through Ethiopia</li>
                    <li>Psalms 68:31 prophecy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Historical Foundation:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Kebra Nagast epic</li>
                    <li>Solomonic dynasty</li>
                    <li>Ark of the Covenant</li>
                    <li>Ancient Ethiopian Christianity</li>
                    <li>Pre-colonial African kingdoms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Return to Africa</h3>
              <p className="mb-3">
                The concept of repatriation to Africa, particularly Ethiopia, is central to 
                Rastafarian theology as a fulfillment of divine promise and spiritual destiny.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Spiritual Significance:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Return to ancestral homeland</li>
                    <li>Fulfillment of biblical prophecy</li>
                    <li>Restoration of divine heritage</li>
                    <li>Escape from Babylon system</li>
                    <li>Unity with African brothers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Practical Expression:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Cultural reconnection</li>
                    <li>Language learning</li>
                    <li>Historical study</li>
                    <li>Community building</li>
                    <li>Economic empowerment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Liberation Theology</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Babylon vs. Zion</h3>
            <p className="mb-4">
              Rastafarian theology contrasts the oppressive system of Babylon with the 
              ideal spiritual and physical homeland of Zion, guiding believers toward liberation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Babylon System</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Colonial oppression and exploitation</li>
                  <li>Economic inequality and poverty</li>
                  <li>Cultural suppression and assimilation</li>
                  <li>Spiritual deception and false religion</li>
                  <li>Political corruption and injustice</li>
                  <li>Materialism and consumerism</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Zion Ideal</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Freedom and self-determination</li>
                  <li>Economic justice and equality</li>
                  <li>Cultural pride and authenticity</li>
                  <li>True spiritual connection</li>
                  <li>Righteous leadership and governance</li>
                  <li>Simplicity and natural living</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Exodus and Liberation</h3>
            <p className="mb-4">
              The biblical story of Exodus serves as a powerful metaphor for liberation from 
              oppression and the journey toward spiritual and physical freedom.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Biblical Parallels:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Slavery in Egypt → Colonial oppression</li>
                  <li>Moses → Liberation leaders</li>
                  <li>Pharaoh → Oppressive systems</li>
                  <li>Red Sea → Atlantic crossing</li>
                  <li>Promised Land → Africa/Ethiopia</li>
                  <li>40 years → Period of preparation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Contemporary Application:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Economic liberation</li>
                  <li>Educational empowerment</li>
                  <li>Political self-determination</li>
                  <li>Cultural restoration</li>
                  <li>Spiritual awakening</li>
                  <li>Community building</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Spiritual Principles</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Natural Living</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Ital Food</strong> - Natural, unprocessed, and spiritually pure nourishment</li>
                <li><strong>Herbal Medicine</strong> - Natural healing through plants and herbs</li>
                <li><strong>Environmental Stewardship</strong> - Care for creation and natural resources</li>
                <li><strong>Simple Living</strong> - Rejection of materialism and consumerism</li>
                <li><strong>Physical Health</strong> - Maintaining the body as a temple</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Community and Unity</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>One Love</strong> - Universal love and brotherhood</li>
                <li><strong>Reasoning</strong> - Community discussion and spiritual growth</li>
                <li><strong>Groundedation</strong> - Teaching and learning sessions</li>
                <li><strong>Mutual Support</strong> - Helping one another in need</li>
                <li><strong>Cultural Preservation</strong> - Maintaining traditions and heritage</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Righteousness and Justice</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Personal Righteousness</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Moral integrity</li>
                  <li>Spiritual discipline</li>
                  <li>Self-control</li>
                  <li>Humility</li>
                  <li>Compassion</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Social Justice</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Equality for all</li>
                  <li>Economic fairness</li>
                  <li>Educational access</li>
                  <li>Political representation</li>
                  <li>Cultural respect</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Divine Justice</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>God's judgment</li>
                  <li>Karmic consequences</li>
                  <li>Divine retribution</li>
                  <li>Spiritual accountability</li>
                  <li>Eternal justice</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Contemporary Relevance</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="mb-4">
              Rastafarian teachings continue to inspire and guide people worldwide, offering 
              wisdom for personal transformation, social justice, and spiritual growth.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Personal Transformation</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Spiritual awakening and growth</li>
                  <li>Cultural identity and pride</li>
                  <li>Natural and healthy living</li>
                  <li>Community involvement</li>
                  <li>Social consciousness</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Social Impact</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Civil rights movements</li>
                  <li>Cultural preservation</li>
                  <li>Environmental awareness</li>
                  <li>Music and arts influence</li>
                  <li>Global solidarity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Explore More Rastafarian Topics</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/religion/rastafarianism/scriptures" className="block p-4 bg-white rounded-lg border hover:border-green-300 transition-colors">
              <h4 className="font-semibold text-green-700 mb-2">Rastafarian Scriptures</h4>
              <p className="text-sm text-gray-600">Sacred texts and biblical interpretation</p>
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