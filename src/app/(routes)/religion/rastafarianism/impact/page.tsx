import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rastafarian Cultural Impact | Global Influence and Legacy',
  description: 'Explore the profound cultural impact of Rastafarianism on music, art, fashion, social movements, and global culture. Discover its lasting legacy and influence.',
  keywords: 'Rastafarian impact, reggae music, cultural influence, social movements, global legacy, music, art, fashion, activism',
  openGraph: {
    title: 'Rastafarian Cultural Impact | Global Influence and Legacy',
    description: 'Explore the profound cultural impact of Rastafarianism on music, art, fashion, and social movements.',
    type: 'website',
  },
}

export default function RastafarianImpactPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="text-sm breadcrumbs mb-8">
        <ul>
          <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
          <li><Link href="/religion" className="text-blue-600 hover:text-blue-800">Religions</Link></li>
          <li><Link href="/religion/rastafarianism" className="text-blue-600 hover:text-blue-800">Rastafarianism</Link></li>
          <li className="text-gray-600">Cultural Impact</li>
        </ul>
      </nav>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-green-800 mb-6">Rastafarian Cultural Impact</h1>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <p className="text-lg text-green-800">
            Rastafarianism has profoundly influenced global culture through music, art, fashion, 
            social movements, and spiritual practices, leaving an indelible mark on contemporary society.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Music and Reggae</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-4">Reggae Revolution</h3>
            <p className="mb-4">
              Reggae music, deeply rooted in Rastafarian spirituality, has become a global 
              phenomenon that transcends cultural and geographical boundaries.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Musical Innovation</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Heavy bass and drum patterns</li>
                  <li>Guitar skanking rhythm</li>
                  <li>Harmonious vocals and chanting</li>
                  <li>Nyabinghi drumming influence</li>
                  <li>Spiritual lyrics and messages</li>
                  <li>Meditative and trance-like qualities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Global Influence</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>International popularity and recognition</li>
                  <li>Influence on other music genres</li>
                  <li>Cultural exchange and fusion</li>
                  <li>Social and political commentary</li>
                  <li>Spiritual and philosophical themes</li>
                  <li>Universal appeal and accessibility</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">Bob Marley and Global Impact</h3>
            <p className="mb-4">
              Bob Marley, the most famous Rastafarian musician, brought Rastafarian messages 
              to a global audience and became a symbol of peace, unity, and liberation.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Musical Legacy:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Timeless songs and albums</li>
                  <li>Universal themes and messages</li>
                  <li>Cross-cultural appeal</li>
                  <li>Spiritual and political content</li>
                  <li>Influence on generations</li>
                  <li>Cultural ambassador role</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Social Impact:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Peace and unity advocacy</li>
                  <li>Social justice awareness</li>
                  <li>African identity promotion</li>
                  <li>Environmental consciousness</li>
                  <li>Spiritual awakening</li>
                  <li>Cultural pride and dignity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Fashion and Style</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Dreadlocks and Hair</h3>
              <p className="mb-3">
                Dreadlocks have become one of the most recognizable symbols of Rastafarianism, 
                influencing global fashion and challenging conventional beauty standards.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Cultural Significance:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Biblical Nazarite tradition</li>
                    <li>Natural hair expression</li>
                    <li>Spiritual and cultural identity</li>
                    <li>Resistance to assimilation</li>
                    <li>African heritage celebration</li>
                    <li>Divine connection symbol</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Global Influence:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Fashion industry adoption</li>
                    <li>Celebrity and pop culture</li>
                    <li>Natural hair movement</li>
                    <li>Cultural diversity acceptance</li>
                    <li>Beauty standard redefinition</li>
                    <li>Identity expression freedom</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Rastafarian Colors</h3>
              <p className="mb-3">
                The red, gold, and green colors of the Ethiopian flag have become powerful 
                symbols of African identity, liberation, and Rastafarian spirituality.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Color Meanings:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Red - Blood of martyrs and sacrifice</li>
                    <li>Gold - Wealth and prosperity</li>
                    <li>Green - Land and natural resources</li>
                    <li>Black - African people and identity</li>
                    <li>Unity and solidarity</li>
                    <li>Divine blessing and favor</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Cultural Impact:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Fashion and clothing design</li>
                    <li>Art and visual expression</li>
                    <li>Sports and team colors</li>
                    <li>Political and social movements</li>
                    <li>Brand and marketing</li>
                    <li>Global recognition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Social Movements</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Civil Rights and Liberation</h3>
            <p className="mb-4">
              Rastafarianism has inspired and influenced numerous social movements for 
              justice, equality, and liberation around the world.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Influence on Movements</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Civil rights movement</li>
                  <li>Black power movement</li>
                  <li>Pan-Africanism</li>
                  <li>Anti-colonial struggles</li>
                  <li>Indigenous rights</li>
                  <li>Environmental justice</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Key Contributions</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Spiritual foundation for activism</li>
                  <li>Cultural pride and identity</li>
                  <li>Non-violent resistance</li>
                  <li>Community organizing</li>
                  <li>International solidarity</li>
                  <li>Youth empowerment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Environmental Consciousness</h3>
            <p className="mb-4">
              Rastafarian emphasis on natural living and environmental stewardship has 
              influenced global environmental movements and sustainability practices.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Environmental Principles:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Natural and organic living</li>
                  <li>Environmental protection</li>
                  <li>Sustainable practices</li>
                  <li>Animal welfare</li>
                  <li>Resource conservation</li>
                  <li>Climate justice</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Global Impact:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Organic food movement</li>
                  <li>Natural medicine revival</li>
                  <li>Environmental activism</li>
                  <li>Sustainable agriculture</li>
                  <li>Conservation efforts</li>
                  <li>Green lifestyle adoption</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Art and Culture</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Visual Arts</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Painting and Sculpture</strong> - Depictions of Haile Selassie, biblical scenes, and African heritage</li>
                <li><strong>Graffiti and Street Art</strong> - Political and spiritual messages in public spaces</li>
                <li><strong>Textile Arts</strong> - Traditional African patterns and Rastafarian symbols</li>
                <li><strong>Photography</strong> - Documentation of Rastafarian life and culture</li>
                <li><strong>Digital Art</strong> - Modern expressions of Rastafarian themes</li>
                <li><strong>Installation Art</strong> - Immersive cultural experiences</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Literature and Poetry</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Spiritual Poetry</strong> - Expressions of divine connection and liberation</li>
                <li><strong>Autobiographical Works</strong> - Personal journeys and experiences</li>
                <li><strong>Philosophical Writings</strong> - Theological and cultural analysis</li>
                <li><strong>Children's Literature</strong> - Cultural education and preservation</li>
                <li><strong>Academic Research</strong> - Scholarly study and documentation</li>
                <li><strong>Oral Traditions</strong> - Storytelling and cultural transmission</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Film and Media</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Documentary Films</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Cultural exploration</li>
                  <li>Historical documentation</li>
                  <li>Personal stories</li>
                  <li>Social commentary</li>
                  <li>Educational content</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Feature Films</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Biographical dramas</li>
                  <li>Cultural narratives</li>
                  <li>Social justice themes</li>
                  <li>Spiritual journeys</li>
                  <li>Historical events</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Digital Media</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Online communities</li>
                  <li>Social media presence</li>
                  <li>Educational platforms</li>
                  <li>Cultural sharing</li>
                  <li>Global connectivity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Global Legacy</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="mb-4">
              Rastafarianism's global legacy continues to inspire and influence people 
              worldwide, transcending religious boundaries to impact culture, society, and spirituality.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Cultural Exchange</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Cross-cultural understanding</li>
                  <li>Interfaith dialogue</li>
                  <li>Global community building</li>
                  <li>Cultural preservation</li>
                  <li>Mutual respect and tolerance</li>
                  <li>Shared human values</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Contemporary Relevance</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Social justice advocacy</li>
                  <li>Environmental consciousness</li>
                  <li>Spiritual seeking</li>
                  <li>Cultural identity</li>
                  <li>Community building</li>
                  <li>Personal transformation</li>
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
            <Link href="/religion/rastafarianism/practices" className="block p-4 bg-white rounded-lg border hover:border-green-300 transition-colors">
              <h4 className="font-semibold text-green-700 mb-2">Rastafarian Practices</h4>
              <p className="text-sm text-gray-600">Spiritual practices and lifestyle</p>
            </Link>
            <Link href="/religion/rastafarianism/history" className="block p-4 bg-white rounded-lg border hover:border-green-300 transition-colors">
              <h4 className="font-semibold text-green-700 mb-2">Rastafarian History</h4>
              <p className="text-sm text-gray-600">Historical development and key figures</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 