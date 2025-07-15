import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rastafarian Practices | Spiritual Practices and Lifestyle',
  description: 'Explore Rastafarian spiritual practices, including reasoning sessions, natural living, music, rituals, and the distinctive lifestyle that embodies the faith.',
  keywords: 'Rastafarian practices, reasoning sessions, ital food, natural living, music, rituals, lifestyle, spiritual practices',
  openGraph: {
    title: 'Rastafarian Practices | Spiritual Practices and Lifestyle',
    description: 'Explore Rastafarian spiritual practices, including reasoning sessions, natural living, and rituals.',
    type: 'website',
  },
}

export default function RastafarianPracticesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="text-sm breadcrumbs mb-8">
        <ul>
          <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
          <li><Link href="/religion" className="text-blue-600 hover:text-blue-800">Religions</Link></li>
          <li><Link href="/religion/rastafarianism" className="text-blue-600 hover:text-blue-800">Rastafarianism</Link></li>
          <li className="text-gray-600">Practices</li>
        </ul>
      </nav>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-green-800 mb-6">Rastafarian Practices</h1>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <p className="text-lg text-green-800">
            Rastafarian practices embody the spiritual principles of the faith through daily living, 
            community gatherings, natural lifestyle, and cultural expressions that reflect divine connection.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Reasoning Sessions</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-4">Community Discussion</h3>
            <p className="mb-4">
              Reasoning sessions are central to Rastafarian spiritual practice, involving 
              group discussions about scripture, current events, and spiritual matters.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Purpose and Structure</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Collective wisdom and understanding</li>
                  <li>Scriptural interpretation and application</li>
                  <li>Community building and unity</li>
                  <li>Spiritual growth and education</li>
                  <li>Problem-solving and guidance</li>
                  <li>Cultural preservation and transmission</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Format and Process</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Open discussion format</li>
                  <li>Respectful listening and speaking</li>
                  <li>Biblical reference and citation</li>
                  <li>Personal experience sharing</li>
                  <li>Consensus building</li>
                  <li>Spiritual guidance and counsel</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Groundedation</h3>
            <p className="mb-4">
              Groundedation sessions are formal teaching and learning gatherings where 
              experienced Rastafarians share knowledge and wisdom with the community.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Teaching Focus:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Biblical interpretation and application</li>
                  <li>Rastafarian history and theology</li>
                  <li>African history and culture</li>
                  <li>Natural living and health</li>
                  <li>Social justice and liberation</li>
                  <li>Spiritual practices and discipline</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Learning Outcomes:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Deepened spiritual understanding</li>
                  <li>Cultural knowledge and pride</li>
                  <li>Practical life skills</li>
                  <li>Community responsibility</li>
                  <li>Personal transformation</li>
                  <li>Social consciousness</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Natural Living (Ital)</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Ital Food</h3>
              <p className="mb-3">
                Ital food is natural, unprocessed, and spiritually pure nourishment that 
                honors the body as a temple and maintains connection with divine creation.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Principles:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Natural and unprocessed foods</li>
                    <li>Fresh fruits and vegetables</li>
                    <li>Whole grains and legumes</li>
                    <li>Herbs and spices for flavor</li>
                    <li>Minimal salt and no artificial additives</li>
                    <li>Organic and locally grown when possible</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Spiritual Benefits:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Maintains body as temple</li>
                    <li>Enhances spiritual clarity</li>
                    <li>Promotes health and vitality</li>
                    <li>Connects with natural creation</li>
                    <li>Supports meditation and prayer</li>
                    <li>Expresses gratitude for divine provision</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Herbal Medicine</h3>
              <p className="mb-3">
                Rastafarians use natural herbs and plants for healing, maintaining the 
                body's health through traditional knowledge and divine wisdom.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Common Herbs:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Ganja (cannabis) for meditation</li>
                    <li>Ginger for digestion and energy</li>
                    <li>Turmeric for anti-inflammatory</li>
                    <li>Aloe vera for healing</li>
                    <li>Peppermint for calming</li>
                    <li>Chamomile for relaxation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Healing Practices:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Teas and infusions</li>
                    <li>Topical applications</li>
                    <li>Steam baths and inhalations</li>
                    <li>Massage with herbal oils</li>
                    <li>Fasting and cleansing</li>
                    <li>Prayer and spiritual healing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Music and Expression</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">Reggae Music</h3>
            <p className="mb-4">
              Reggae music is a powerful spiritual expression in Rastafarianism, conveying 
              messages of liberation, unity, and divine connection through rhythm and lyrics.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-700 mb-3">Spiritual Themes</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Praise and worship of Jah</li>
                  <li>Liberation from oppression</li>
                  <li>Unity and brotherhood</li>
                  <li>Social justice and equality</li>
                  <li>Natural living and health</li>
                  <li>African identity and pride</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-3">Musical Elements</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Heavy bass and drum patterns</li>
                  <li>Guitar skanking rhythm</li>
                  <li>Harmonious vocals and chanting</li>
                  <li>Nyabinghi drumming influence</li>
                  <li>Spiritual lyrics and messages</li>
                  <li>Meditative and trance-like qualities</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Nyabinghi Ceremonies</h3>
            <p className="mb-4">
              Nyabinghi ceremonies are sacred gatherings featuring traditional drumming, 
              chanting, and spiritual practices that connect participants with divine energy.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Ceremonial Elements:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Traditional African drumming</li>
                  <li>Chanting and call-and-response</li>
                  <li>Scripture reading and interpretation</li>
                  <li>Prayer and meditation</li>
                  <li>Community sharing and fellowship</li>
                  <li>Spiritual healing and blessing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Spiritual Purpose:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Divine connection and worship</li>
                  <li>Community unity and bonding</li>
                  <li>Spiritual cleansing and renewal</li>
                  <li>Cultural preservation</li>
                  <li>Healing and transformation</li>
                  <li>Celebration of divine presence</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Lifestyle Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Dreadlocks</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Biblical Foundation</strong> - Based on Nazarite vows in Numbers 6</li>
                <li><strong>Natural Expression</strong> - Embracing natural hair without cutting</li>
                <li><strong>Spiritual Symbol</strong> - Connection to divine power and wisdom</li>
                <li><strong>Cultural Identity</strong> - Expression of African heritage</li>
                <li><strong>Lion's Mane</strong> - Symbolizing strength and divine authority</li>
                <li><strong>Meditation Aid</strong> - Enhancing spiritual focus and awareness</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Simple Living</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Material Detachment</strong> - Rejection of consumerism and materialism</li>
                <li><strong>Natural Resources</strong> - Using what nature provides</li>
                <li><strong>Community Sharing</strong> - Supporting one another in need</li>
                <li><strong>Environmental Care</strong> - Respecting and protecting creation</li>
                <li><strong>Spiritual Focus</strong> - Prioritizing spiritual over material concerns</li>
                <li><strong>Contentment</strong> - Finding satisfaction in simple blessings</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Daily Spiritual Practices</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Morning Practices</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Prayer and meditation</li>
                  <li>Scripture reading</li>
                  <li>Gratitude expression</li>
                  <li>Natural cleansing</li>
                  <li>Ital breakfast</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Daily Living</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Mindful work and service</li>
                  <li>Community interaction</li>
                  <li>Natural food preparation</li>
                  <li>Environmental stewardship</li>
                  <li>Spiritual reflection</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Evening Practices</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Evening prayer</li>
                  <li>Family time and sharing</li>
                  <li>Music and chanting</li>
                  <li>Gratitude for the day</li>
                  <li>Rest and renewal</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Community and Service</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="mb-4">
              Rastafarian practices emphasize community building, mutual support, and 
              service to others as expressions of divine love and unity.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Community Building</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Regular gatherings and ceremonies</li>
                  <li>Shared meals and fellowship</li>
                  <li>Collective decision-making</li>
                  <li>Cultural education and preservation</li>
                  <li>Intergenerational knowledge transfer</li>
                  <li>Support for new members</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Service and Outreach</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Helping those in need</li>
                  <li>Educational programs</li>
                  <li>Health and wellness support</li>
                  <li>Environmental conservation</li>
                  <li>Social justice advocacy</li>
                  <li>Cultural exchange and dialogue</li>
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
            <Link href="/religion/rastafarianism/teachings" className="block p-4 bg-white rounded-lg border hover:border-green-300 transition-colors">
              <h4 className="font-semibold text-green-700 mb-2">Rastafarian Teachings</h4>
              <p className="text-sm text-gray-600">Core beliefs and spiritual principles</p>
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