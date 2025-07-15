import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rastafarian History | Historical Development and Key Figures',
  description: 'Explore the history of Rastafarianism, from its origins in Jamaica to global influence. Learn about key figures, historical events, and the evolution of the faith.',
  keywords: 'Rastafarian history, Haile Selassie, Marcus Garvey, Jamaica, Ethiopian connection, historical development, key figures',
  openGraph: {
    title: 'Rastafarian History | Historical Development and Key Figures',
    description: 'Explore the history of Rastafarianism, from its origins in Jamaica to global influence.',
    type: 'website',
  },
}

export default function RastafarianHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="text-sm breadcrumbs mb-8">
        <ul>
          <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
          <li><Link href="/religion" className="text-blue-600 hover:text-blue-800">Religions</Link></li>
          <li><Link href="/religion/rastafarianism" className="text-blue-600 hover:text-blue-800">Rastafarianism</Link></li>
          <li className="text-gray-600">History</li>
        </ul>
      </nav>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-green-800 mb-6">Rastafarian History</h1>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <p className="text-lg text-green-800">
            Rastafarianism emerged in 1930s Jamaica as a spiritual response to colonial oppression, 
            drawing inspiration from Ethiopian history, biblical prophecy, and the vision of African liberation.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Historical Background</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-4">Jamaican Context</h3>
            <p className="mb-4">
              The emergence of Rastafarianism in Jamaica was shaped by centuries of colonial 
              oppression, African cultural memory, and the search for spiritual and political liberation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Colonial Legacy</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Transatlantic slave trade impact</li>
                  <li>British colonial rule and exploitation</li>
                  <li>Economic inequality and poverty</li>
                  <li>Cultural suppression and assimilation</li>
                  <li>Racial discrimination and segregation</li>
                  <li>Limited political representation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-3">Cultural Resistance</h4>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Preservation of African traditions</li>
                  <li>Maroon communities and resistance</li>
                  <li>Folk religions and spiritual practices</li>
                  <li>Oral traditions and storytelling</li>
                  <li>Music and cultural expression</li>
                  <li>Community solidarity and support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Ethiopian Connection</h3>
            <p className="mb-4">
              Ethiopia's unique history as an independent African nation and its biblical 
              significance provided a powerful foundation for Rastafarian theology.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Historical Significance:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Only African nation to resist colonization</li>
                  <li>Ancient Christian tradition</li>
                  <li>Solomonic dynasty claims</li>
                  <li>Kebra Nagast epic</li>
                  <li>Ark of the Covenant tradition</li>
                  <li>Biblical references throughout</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Symbolic Meaning:</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>African independence and pride</li>
                  <li>Divine protection and favor</li>
                  <li>Spiritual homeland and destiny</li>
                  <li>Biblical prophecy fulfillment</li>
                  <li>Cultural and religious heritage</li>
                  <li>Hope for African liberation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Key Historical Figures</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Marcus Garvey (1887-1940)</h3>
              <p className="mb-3">
                Marcus Garvey was a Jamaican political leader and founder of the Universal Negro 
                Improvement Association (UNIA), whose teachings profoundly influenced Rastafarianism.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Key Teachings:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>"Look to Africa for a king" prophecy</li>
                    <li>African unity and pride</li>
                    <li>Economic self-reliance</li>
                    <li>Repatriation to Africa</li>
                    <li>Black nationalism</li>
                    <li>Cultural restoration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Influence on Rastafarianism:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Prepared ground for Haile Selassie</li>
                    <li>Inspired African identity movement</li>
                    <li>Promoted self-determination</li>
                    <li>Emphasized cultural pride</li>
                    <li>Advocated for liberation</li>
                    <li>Founded UNIA organization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Haile Selassie I (1892-1975)</h3>
              <p className="mb-3">
                Emperor Haile Selassie I of Ethiopia is the central figure in Rastafarianism, 
                believed to be the living God and fulfillment of biblical prophecies.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Historical Role:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Emperor of Ethiopia (1930-1974)</li>
                    <li>Solomonic dynasty descendant</li>
                    <li>Defender of Ethiopian independence</li>
                    <li>Modernizer and reformer</li>
                    <li>International statesman</li>
                    <li>Pan-African leader</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Rastafarian Significance:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Incarnation of God (Jah)</li>
                    <li>Lion of Judah</li>
                    <li>King of Kings</li>
                    <li>Fulfillment of prophecy</li>
                    <li>Divine authority</li>
                    <li>Messianic figure</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">Leonard Howell (1898-1981)</h3>
              <p className="mb-3">
                Leonard Howell, known as the "First Rasta," was one of the earliest proponents 
                of Rastafarianism and established the first Rastafarian community in Jamaica.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Contributions:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>First to proclaim Haile Selassie as God</li>
                    <li>Established Pinnacle community</li>
                    <li>Developed early Rastafarian theology</li>
                    <li>Promoted natural living</li>
                    <li>Advocated for African identity</li>
                    <li>Faced persecution and imprisonment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Legacy:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Foundation of Rastafarian movement</li>
                    <li>Community living model</li>
                    <li>Spiritual leadership example</li>
                    <li>Resistance to oppression</li>
                    <li>Cultural preservation</li>
                    <li>Inspiration for future generations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Historical Development</h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-purple-800 mb-4">1930s - Origins</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-3">Key Events</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>1930 - Haile Selassie crowned Emperor</li>
                    <li>1932 - Leonard Howell begins preaching</li>
                    <li>1933 - First Rastafarian community formed</li>
                    <li>1935 - Italian invasion of Ethiopia</li>
                    <li>1937 - Howell imprisoned for sedition</li>
                    <li>1939 - Pinnacle community established</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-3">Early Development</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Biblical interpretation of events</li>
                    <li>Recognition of Haile Selassie as Messiah</li>
                    <li>Formation of core beliefs</li>
                    <li>Community living experiments</li>
                    <li>Persecution and resistance</li>
                    <li>Spread of teachings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">1940s-1950s - Growth</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">Expansion</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Spread beyond Pinnacle community</li>
                    <li>Formation of various groups</li>
                    <li>Development of practices</li>
                    <li>Cultural expressions emerge</li>
                    <li>Music and art development</li>
                    <li>International connections</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-3">Challenges</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Continued persecution</li>
                    <li>Police harassment</li>
                    <li>Social marginalization</li>
                    <li>Economic difficulties</li>
                    <li>Internal divisions</li>
                    <li>Government opposition</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">1960s-1970s - Global Influence</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-3">Cultural Impact</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Reggae music explosion</li>
                    <li>Bob Marley's global influence</li>
                    <li>International recognition</li>
                    <li>Cultural exchange</li>
                    <li>Political influence</li>
                    <li>Social justice advocacy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-3">Development</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Formalization of practices</li>
                    <li>Establishment of organizations</li>
                    <li>Educational programs</li>
                    <li>Community development</li>
                    <li>Interfaith dialogue</li>
                    <li>Academic recognition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Contemporary Era</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="mb-4">
              Rastafarianism continues to evolve and influence global culture, spirituality, 
              and social movements in the contemporary world.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Global Presence</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Communities worldwide</li>
                  <li>Cultural festivals and events</li>
                  <li>Educational institutions</li>
                  <li>Interfaith organizations</li>
                  <li>Social justice movements</li>
                  <li>Environmental activism</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Modern Challenges</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm">
                  <li>Commercialization concerns</li>
                  <li>Cultural appropriation</li>
                  <li>Generational changes</li>
                  <li>Technology integration</li>
                  <li>Globalization effects</li>
                  <li>Preservation of authenticity</li>
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