import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: 'Medieval Bahai Faith',
    description: 'The development of the Bahai Faith during the late 19th and early 20th centuries.',
    keywords: 'Bahai Faith, Medieval History, Abdu'l-Baha, International Expansion',
    openGraph: {
      title: 'Medieval Bahai Faith',
      description: 'The development of the Bahai Faith during the late 19th and early 20th centuries.',
      type: 'article',
      publishedTime: '2024-01-01T00:00:00.000Z',
      authors: ['ZION.FM'],
      section: 'Bahai',
      tags: ['Bahai Faith', 'Medieval History', 'Abdu'l-Baha', 'International Expansion', 'Religious Development']
    }
  }
},
    twitter: {
      card: 'summary_large_image',
      title: t('medievalJainism.title'),
      description: t('medievalJainism.description'),
    },
  }
}

export default function MedievalJainismPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-center mb-8">Medieval Jainism: 500-1500 CE</h1>
        
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 p-6 rounded-lg mb-8">
          <p className="text-lg leading-relaxed">
            The medieval period of Jainism spans from the 6th to the 15th century, encompassing 
            significant developments in philosophy, literature, art, and architecture. This era 
            saw the flourishing of Jain culture under various dynasties and the establishment 
            of enduring religious and cultural traditions.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Historical Context</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Political Landscape</h3>
              <ul className="space-y-3">
                <li><strong>Gupta Empire:</strong> Golden age of Indian culture</li>
                <li><strong>Chalukyas:</strong> Support for Jainism in Deccan</li>
                <li><strong>Rashtrakutas:</strong> Patronage of Jain art and literature</li>
                <li><strong>Cholas:</strong> Jain influence in South India</li>
                <li><strong>Delhi Sultanate:</strong> Challenges under Muslim rule</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Religious Climate</h3>
              <ul className="space-y-3">
                <li><strong>Hindu Revival:</strong> Bhakti movements and temple building</li>
                <li><strong>Buddhist Decline:</strong> Gradual decline of Buddhism</li>
                <li><strong>Islamic Arrival:</strong> New religious influences</li>
                <li><strong>Religious Competition:</strong> Competition for royal patronage</li>
                <li><strong>Syncretism:</strong> Blending of religious traditions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Royal Patronage and Support</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Chalukya Dynasty</h3>
              <p className="mb-4">
                The Chalukyas of Badami and Kalyani were major patrons of Jainism, supporting 
                the construction of temples and the development of Jain literature.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Architectural Patronage:</h4>
                  <ul className="space-y-2">
                    <li>Badami cave temples</li>
                    <li>Aihole temples</li>
                    <li>Pattadakal monuments</li>
                    <li>Jain cave complexes</li>
                    <li>Monolithic statues</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Literary Support:</h4>
                  <ul className="space-y-2">
                    <li>Kannada literature</li>
                    <li>Sanskrit works</li>
                    <li>Religious texts</li>
                    <li>Philosophical treatises</li>
                    <li>Historical chronicles</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Rashtrakuta Dynasty</h3>
              <p className="mb-4">
                The Rashtrakutas were among the greatest patrons of Jainism, creating some of 
                the most magnificent Jain monuments in India.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Monumental Achievements:</h4>
                  <ul className="space-y-2">
                    <li>Ellora cave temples</li>
                    <li>Kailasa temple</li>
                    <li>Indra Sabha cave</li>
                    <li>Jagannatha Sabha</li>
                    <li>Monolithic sculptures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cultural Contributions:</h4>
                  <ul className="space-y-2">
                    <li>Kannada literature</li>
                    <li>Religious poetry</li>
                    <li>Philosophical works</li>
                    <li>Educational institutions</li>
                    <li>Monastic support</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Other Dynasties</h3>
              <p className="mb-4">
                Various other dynasties across India provided support to Jainism during the medieval period.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Western India:</h4>
                  <ul className="space-y-2">
                    <li>Gujarat Solankis</li>
                    <li>Rajasthan rulers</li>
                    <li>Marwar kingdoms</li>
                    <li>Mewar support</li>
                    <li>Temple construction</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Southern India:</h4>
                  <ul className="space-y-2">
                    <li>Chola patronage</li>
                    <li>Pandya support</li>
                    <li>Hoysala kings</li>
                    <li>Vijayanagara Empire</li>
                    <li>Regional kingdoms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Philosophical Developments</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Systematic Philosophy</h3>
              <p className="mb-4">
                Medieval Jain philosophers developed systematic approaches to Jain thought, 
                creating comprehensive philosophical systems.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Philosophers:</h4>
                  <ul className="space-y-2">
                    <li>Umasvati (Tattvartha Sutra)</li>
                    <li>Kundakunda</li>
                    <li>Samantabhadra</li>
                    <li>Pujyapada</li>
                    <li>Akalanka</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Philosophical Topics:</h4>
                  <ul className="space-y-2">
                    <li>Metaphysics</li>
                    <li>Epistemology</li>
                    <li>Logic and dialectics</li>
                    <li>Ethics</li>
                    <li>Soteriology</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Logic and Dialectics</h3>
              <p className="mb-4">
                Jain logicians developed sophisticated systems of logic and debate, particularly 
                the theory of conditional predication (syadvada).
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Syadvada:</h4>
                  <ul className="space-y-2">
                    <li>Seven-fold predication</li>
                    <li>Conditional statements</li>
                    <li>Relativity of truth</li>
                    <li>Multiple viewpoints</li>
                    <li>Intellectual humility</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Debate Tradition:</h4>
                  <ul className="space-y-2">
                    <li>Public debates</li>
                    <li>Philosophical discussions</li>
                    <li>Inter-religious dialogue</li>
                    <li>Logical arguments</li>
                    <li>Intellectual exchange</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Literary Achievements</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Sanskrit Literature</h3>
              <p className="mb-4">
                Medieval Jain scholars produced extensive Sanskrit literature covering philosophy, 
                ethics, and religious practice.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Philosophical Works:</h4>
                  <ul className="space-y-2">
                    <li>Tattvartha Sutra commentaries</li>
                    <li>Logic and epistemology</li>
                    <li>Ethical treatises</li>
                    <li>Metaphysical works</li>
                    <li>Debate manuals</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Religious Texts:</h4>
                  <ul className="space-y-2">
                    <li>Ritual manuals</li>
                    <li>Devotional literature</li>
                    <li>Biographies of saints</li>
                    <li>Meditation guides</li>
                    <li>Moral stories</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Vernacular Literature</h3>
              <p className="mb-4">
                Jain scholars also contributed significantly to the development of vernacular 
                literatures across India.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Kannada Literature:</h4>
                  <ul className="space-y-2">
                    <li>Pampa's works</li>
                    <li>Ponna's poetry</li>
                    <li>Ranna's writings</li>
                    <li>Religious poetry</li>
                    <li>Historical chronicles</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Other Languages:</h4>
                  <ul className="space-y-2">
                    <li>Gujarati literature</li>
                    <li>Rajasthani works</li>
                    <li>Tamil texts</li>
                    <li>Marathi literature</li>
                    <li>Hindi compositions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Art and Architecture</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Cave Architecture</h3>
              <p className="mb-4">
                Medieval Jain cave architecture represents some of the most magnificent 
                achievements of Indian rock-cut architecture.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Ellora Caves:</h4>
                  <ul className="space-y-2">
                    <li>Caves 30-34 (Jain caves)</li>
                    <li>Indra Sabha</li>
                    <li>Jagannatha Sabha</li>
                    <li>Chota Kailasa</li>
                    <li>Monolithic sculptures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Other Sites:</h4>
                  <ul className="space-y-2">
                    <li>Badami caves</li>
                    <li>Aihole temples</li>
                    <li>Pattadakal</li>
                    <li>Gwalior caves</li>
                    <li>Udayagiri caves</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Temple Architecture</h3>
              <p className="mb-4">
                Jain temples of the medieval period showcase diverse architectural styles 
                and artistic excellence.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Architectural Styles:</h4>
                  <ul className="space-y-2">
                    <li>Nagara style</li>
                    <li>Dravida style</li>
                    <li>Vesara style</li>
                    <li>Regional variations</li>
                    <li>Innovative designs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Famous Temples:</h4>
                  <ul className="space-y-2">
                    <li>Dilwara temples</li>
                    <li>Girnar temples</li>
                    <li>Palitana temples</li>
                    <li>Shravanabelagola</li>
                    <li>Moodbidri temples</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Sculpture and Art</h3>
              <p className="mb-4">
                Jain art of the medieval period includes magnificent sculptures, paintings, 
                and decorative arts.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Sculptural Art:</h4>
                  <ul className="space-y-2">
                    <li>Tirthankara images</li>
                    <li>Yaksha and yakshi figures</li>
                    <li>Narrative reliefs</li>
                    <li>Architectural elements</li>
                    <li>Decorative motifs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Painting and Manuscripts:</h4>
                  <ul className="space-y-2">
                    <li>Manuscript illustrations</li>
                    <li>Wall paintings</li>
                    <li>Miniature paintings</li>
                    <li>Religious iconography</li>
                    <li>Decorative arts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Monastic Developments</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Monastic Orders</h3>
              <ul className="space-y-3">
                <li><strong>Digambara Monks:</strong> Sky-clad ascetics maintaining ancient traditions</li>
                <li><strong>Svetambara Monks:</strong> White-clad monks with modified practices</li>
                <li><strong>Monastic Centers:</strong> Establishment of major monastic institutions</li>
                <li><strong>Educational Role:</strong> Centers of learning and scholarship</li>
                <li><strong>Social Service:</strong> Charitable and educational activities</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Lay Community</h3>
              <ul className="space-y-3">
                <li><strong>Merchant Class:</strong> Strong support from trading communities</li>
                <li><strong>Professional Groups:</strong> Support from various occupational groups</li>
                <li><strong>Women's Participation:</strong> Active role of lay women</li>
                <li><strong>Charitable Activities:</strong> Building of temples and institutions</li>
                <li><strong>Cultural Patronage:</strong> Support for arts and literature</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Challenges and Adaptations</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Religious Competition</h3>
              <p className="mb-4">
                Jainism faced competition from other religious traditions, particularly 
                Hinduism and later Islam.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Hindu Revival:</h4>
                  <ul className="space-y-2">
                    <li>Bhakti movements</li>
                    <li>Temple building</li>
                    <li>Philosophical developments</li>
                    <li>Royal patronage</li>
                    <li>Social integration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Islamic Period:</h4>
                  <ul className="space-y-2">
                    <li>Delhi Sultanate</li>
                    <li>Religious restrictions</li>
                    <li>Temple destruction</li>
                    <li>Adaptation strategies</li>
                    <li>Survival mechanisms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Adaptation Strategies</h3>
              <p className="mb-4">
                Jain communities developed various strategies to maintain their identity 
                and practices during challenging times.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Social Strategies:</h4>
                  <ul className="space-y-2">
                    <li>Merchant networks</li>
                    <li>Community solidarity</li>
                    <li>Economic strength</li>
                    <li>Educational institutions</li>
                    <li>Cultural preservation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Religious Strategies:</h4>
                    <li>Text preservation</li>
                    <li>Monastic continuity</li>
                    <li>Ritual maintenance</li>
                    <li>Philosophical development</li>
                    <li>Artistic expression</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Legacy and Impact</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Cultural Contributions</h3>
              <ul className="space-y-2">
                <li><strong>Architecture:</strong> Magnificent temples and cave complexes</li>
                <li><strong>Literature:</strong> Rich literary tradition in multiple languages</li>
                <li><strong>Philosophy:</strong> Sophisticated philosophical systems</li>
                <li><strong>Art:</strong> Beautiful sculptures and paintings</li>
                <li><strong>Education:</strong> Centers of learning and scholarship</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Social Impact</h3>
              <ul className="space-y-2">
                <li><strong>Merchant Communities:</strong> Development of trading networks</li>
                <li><strong>Charitable Activities:</strong> Tradition of giving and service</li>
                <li><strong>Educational Institutions:</strong> Schools and libraries</li>
                <li><strong>Cultural Patronage:</strong> Support for arts and culture</li>
                <li><strong>Social Ethics:</strong> Emphasis on non-violence and compassion</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Religious Influence</h3>
              <ul className="space-y-2">
                <li><strong>Philosophical Systems:</strong> Influence on Indian philosophy</li>
                <li><strong>Ethical Principles:</strong> Impact on moral thought</li>
                <li><strong>Religious Practices:</strong> Contribution to Indian spirituality</li>
                <li><strong>Inter-religious Dialogue:</strong> Model of tolerance</li>
                <li><strong>Spiritual Traditions:</strong> Meditation and ascetic practices</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600 dark:text-yellow-400">Study Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Primary Sources</h3>
              <ul className="space-y-3">
                <li><strong>Philosophical Texts:</strong> Medieval commentaries and treatises</li>
                <li><strong>Literary Works:</strong> Sanskrit and vernacular literature</li>
                <li><strong>Inscriptions:</strong> Archaeological and epigraphic evidence</li>
                <li><strong>Art and Architecture:</strong> Temples, caves, and sculptures</li>
                <li><strong>Historical Chronicles:</strong> Dynastic and regional histories</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Modern Scholarship</h3>
              <ul className="space-y-3">
                <li><strong>Historical Research:</strong> Studies of medieval Jainism</li>
                <li><strong>Art History:</strong> Analysis of Jain art and architecture</li>
                <li><strong>Philosophical Studies:</strong> Medieval Jain philosophy</li>
                <li><strong>Archaeological Studies:</strong> Material evidence and sites</li>
                <li><strong>Literary Analysis:</strong> Medieval Jain literature</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Cultural Flourishing</h3>
          <p className="text-center mb-4">
            The medieval period of Jainism represents a golden age of cultural and intellectual 
            achievement. The magnificent temples, sophisticated philosophy, and rich literature 
            created during this era continue to inspire and influence people worldwide.
          </p>
          <div className="text-center">
            <a 
              href="/religion/jainism/history/modern" 
              className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Continue to Modern Jainism →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 