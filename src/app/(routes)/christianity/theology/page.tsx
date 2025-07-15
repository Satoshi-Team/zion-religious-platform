import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Users, Lightbulb, Target, Globe, Heart, Brain, Eye, Search, Cross } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Christian Theology & Doctrinal Studies | ZION.FM',
  description: 'Comprehensive study of Christian theology, systematic theology, biblical theology, historical theology, and contemporary theological perspectives across Christian traditions.',
  keywords: 'Christian theology, systematic theology, biblical theology, historical theology, Christian doctrine, theological study, Christian beliefs, church doctrine',
  openGraph: {
    title: 'Christian Theology & Doctrinal Studies | ZION.FM',
    description: 'Comprehensive study of Christian theology, systematic theology, and doctrinal studies across Christian traditions.',
    type: 'website',
  },
}

const theologicalAreas = [
  {
    title: 'Systematic Theology',
    description: 'Organized study of Christian doctrines and beliefs',
    icon: BookOpen,
    href: '/studies/theology',
    topics: ['Doctrine of God', 'Christology', 'Pneumatology', 'Soteriology', 'Ecclesiology', 'Eschatology']
  },
  {
    title: 'Biblical Theology',
    description: 'Theological study based on biblical texts and themes',
    icon: BookOpen,
    href: '/sacred-texts/bible',
    topics: ['Biblical Hermeneutics', 'Theological Themes', 'Biblical Narrative', 'Covenant Theology', 'Redemptive History']
  },
  {
    title: 'Historical Theology',
    description: 'Development of Christian doctrine throughout history',
    icon: Users,
    href: '/religion/christianity/history',
    topics: ['Patristic Theology', 'Medieval Theology', 'Reformation Theology', 'Modern Theology', 'Contemporary Theology']
  },
  {
    title: 'Practical Theology',
    description: 'Application of theology to Christian life and ministry',
    icon: Heart,
    href: '/religion/christianity/practices',
    topics: ['Pastoral Theology', 'Moral Theology', 'Liturgical Theology', 'Missional Theology', 'Spiritual Formation']
  },
  {
    title: 'Comparative Theology',
    description: 'Theological dialogue with other religious traditions',
    icon: Globe,
    href: '/studies/comparative',
    topics: ['Interfaith Dialogue', 'Comparative Religion', 'Theological Pluralism', 'Religious Diversity', 'Global Christianity']
  },
  {
    title: 'Contemporary Theology',
    description: 'Modern theological movements and perspectives',
    icon: Lightbulb,
    href: '/studies/academic',
    topics: ['Liberation Theology', 'Process Theology', 'Feminist Theology', 'Postmodern Theology', 'Contextual Theology']
  }
]

const theologicalTopics = [
  {
    category: 'Doctrine of God (Theology Proper)',
    description: 'Study of God\'s nature, attributes, and existence',
    topics: [
      'Divine Attributes (Omnipotence, Omniscience, Omnipresence)',
      'Trinity and Triune Nature',
      'Divine Providence and Sovereignty',
      'Problem of Evil and Theodicy',
      'Divine Impassibility vs. Passibility'
    ]
  },
  {
    category: 'Christology',
    description: 'Study of Jesus Christ\'s person and work',
    topics: [
      'Incarnation and Hypostatic Union',
      'Divine and Human Natures',
      'Virgin Birth and Miracles',
      'Atonement Theories',
      'Resurrection and Ascension'
    ]
  },
  {
    category: 'Pneumatology',
    description: 'Study of the Holy Spirit',
    topics: [
      'Person and Work of the Holy Spirit',
      'Spiritual Gifts and Charismata',
      'Indwelling and Sanctification',
      'Baptism of the Holy Spirit',
      'Fruit of the Spirit'
    ]
  },
  {
    category: 'Soteriology',
    description: 'Study of salvation and redemption',
    topics: [
      'Original Sin and Human Nature',
      'Grace and Free Will',
      'Justification and Sanctification',
      'Predestination and Election',
      'Assurance of Salvation'
    ]
  },
  {
    category: 'Ecclesiology',
    description: 'Study of the Church',
    topics: [
      'Nature and Purpose of the Church',
      'Church Government and Polity',
      'Sacraments and Ordinances',
      'Church Unity and Diversity',
      'Mission and Evangelism'
    ]
  },
  {
    category: 'Eschatology',
    description: 'Study of last things and end times',
    topics: [
      'Second Coming of Christ',
      'Resurrection of the Dead',
      'Final Judgment',
      'Heaven and Hell',
      'Millennial Views'
    ]
  }
]

const theologicalTraditions = [
  {
    tradition: 'Eastern Orthodox Theology',
    description: 'Theological tradition of the Eastern Orthodox Church',
    characteristics: [
      'Emphasis on theosis (divinization)',
      'Iconography and visual theology',
      'Mystical theology and apophatic approach',
      'Patristic tradition and church fathers',
      'Sacramental theology and liturgy'
    ]
  },
  {
    tradition: 'Roman Catholic Theology',
    description: 'Theological tradition of the Roman Catholic Church',
    characteristics: [
      'Magisterium and papal authority',
      'Natural theology and reason',
      'Sacramental theology and transubstantiation',
      'Mariology and saints',
      'Social teaching and encyclicals'
    ]
  },
  {
    tradition: 'Protestant Theology',
    description: 'Theological traditions of the Protestant Reformation',
    characteristics: [
      'Sola Scriptura (Scripture alone)',
      'Sola Fide (Faith alone)',
      'Sola Gratia (Grace alone)',
      'Priesthood of all believers',
      'Justification by faith'
    ]
  },
  {
    tradition: 'Evangelical Theology',
    description: 'Modern evangelical theological perspectives',
    characteristics: [
      'Biblical inerrancy and authority',
      'Personal conversion and regeneration',
      'Evangelism and missions',
      'Conservative social values',
      'Dispensational eschatology'
    ]
  },
  {
    tradition: 'Liberal Theology',
    description: 'Progressive and liberal theological approaches',
    characteristics: [
      'Historical-critical biblical study',
      'Social justice and liberation',
      'Religious pluralism and tolerance',
      'Modernist and rationalist approaches',
      'Contextual and cultural adaptation'
    ]
  },
  {
    tradition: 'Pentecostal Theology',
    description: 'Charismatic and Pentecostal theological perspectives',
    characteristics: [
      'Baptism of the Holy Spirit',
      'Spiritual gifts and charismata',
      'Divine healing and miracles',
      'Spirit-led worship and experience',
      'Eschatological urgency'
    ]
  }
]

export default function ChristianTheologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Cross className="mx-auto h-16 w-16 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Christian Theology &
            <span className="text-blue-600 dark:text-blue-400"> Doctrinal Studies</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
            Explore the comprehensive study of Christian theology, systematic theology, biblical theology, and doctrinal studies across Christian traditions and denominations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/studies/theology"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Theology Studies
            </Link>
            <Link
              href="/sacred-texts/bible"
              className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Study Biblical Texts
            </Link>
          </div>
        </div>
      </section>

      {/* Theological Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Major Areas of Theological Study
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the comprehensive scope of Christian theological inquiry and doctrinal studies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {theologicalAreas.map((area) => (
              <Link
                key={area.title}
                href={area.href}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <area.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {area.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {area.description}
                </p>
                <ul className="space-y-2">
                  {area.topics.map((topic) => (
                    <li key={topic} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Theological Topics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Core Theological Topics
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore the fundamental doctrines and theological concepts that form the foundation of Christian belief
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {theologicalTopics.map((topic) => (
              <div
                key={topic.category}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {topic.category}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {topic.description}
                </p>
                <ul className="space-y-2">
                  {topic.topics.map((item) => (
                    <li key={item} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Theological Traditions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Christian Theological Traditions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the diverse theological traditions and denominational perspectives within Christianity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {theologicalTraditions.map((tradition) => (
              <div
                key={tradition.tradition}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {tradition.tradition}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {tradition.description}
                </p>
                <ul className="space-y-2">
                  {tradition.characteristics.map((characteristic) => (
                    <li key={characteristic} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                      {characteristic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Deepen Your Theological Understanding
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Continue your theological journey with our comprehensive resources and study materials
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/studies/theology"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Advanced Theology Studies
            </Link>
            <Link
              href="/religion/christianity/history"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Historical Development
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 