import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Christianity Overview | Core Beliefs, History, and Traditions',
  description: 'Comprehensive guide to Christianity covering core beliefs, theological traditions, historical development, denominational diversity, and spiritual practices.',
  keywords: 'Christianity, Christian faith, Christian theology, Christian history, Christian denominations, Christian practices, Biblical studies, Christian traditions, Christian worship, Christian spirituality',
  openGraph: {
    title: 'Christianity Overview | Core Beliefs, History, and Traditions',
    description: 'In-depth exploration of Christian faith, traditions, and practices across different denominations and historical periods.',
    images: [{ url: '/images/christianity-overview.jpg', width: 1200, height: 630 }]
  }
}

interface Denomination {
  id: string
  name: string
  founded: string
  adherents: string
  mainBeliefs: string[]
  distinctiveFeatures: string[]
  practices: {
    worship: string[]
    sacraments: string[]
    holidays: string[]
  }
  organization: {
    structure: string
    leadership: string
    governance: string
  }
  officialUrl: string
}

interface TheologicalTradition {
  id: string
  name: string
  period: string
  keyFigures: Array<{
    name: string
    dates: string
    contributions: string[]
  }>
  mainConcepts: string[]
  texts: Array<{
    title: string
    author: string
    significance: string
  }>
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function ChristianityOverviewPage({ params }: PageProps) {
  const denominations: Denomination[] = [
    // Catholic
    {
      id: 'catholic',
      name: 'Roman Catholic Church',
      founded: '1st century CE',
      adherents: '1.3 billion',
      mainBeliefs: [
        'Papal authority and infallibility',
        'Seven sacraments',
        'Marian doctrines',
        'Purgatory and intercession of saints',
        'Transubstantiation'
      ],
      distinctiveFeatures: [
        'Hierarchical structure with Pope as head',
        'Rich liturgical tradition',
        'Emphasis on tradition alongside Scripture',
        'Global presence and cultural diversity'
      ],
      practices: {
        worship: ['Mass', 'Liturgy of the Hours', 'Devotional prayers', 'Processions'],
        sacraments: ['Baptism', 'Confirmation', 'Eucharist', 'Reconciliation', 'Anointing of the Sick', 'Holy Orders', 'Matrimony'],
        holidays: ['Christmas', 'Easter', 'Pentecost', 'All Saints Day', 'Feast of the Assumption']
      },
      organization: {
        structure: 'Hierarchical with dioceses and parishes',
        leadership: 'Pope, Cardinals, Bishops, Priests',
        governance: 'Centralized authority with local diocesan autonomy'
      },
      officialUrl: 'https://www.vatican.va'
    },
    // Eastern Orthodox
    {
      id: 'orthodox',
      name: 'Eastern Orthodox Church',
      founded: '1st century CE',
      adherents: '260 million',
      mainBeliefs: [
        'Divine liturgy and sacraments',
        'Theosis (deification)',
        'Icon veneration',
        'Conciliar authority',
        'Mystical theology'
      ],
      distinctiveFeatures: [
        'Autocephalous church structure',
        'Rich iconographic tradition',
        'Emphasis on mystical experience',
        'Byzantine liturgical heritage'
      ],
      practices: {
        worship: ['Divine Liturgy', 'Vespers', 'Matins', 'Icon veneration', 'Fasting periods'],
        sacraments: ['Baptism', 'Chrismation', 'Eucharist', 'Confession', 'Holy Orders', 'Marriage', 'Anointing'],
        holidays: ['Pascha (Easter)', 'Christmas', 'Theophany', 'Dormition', 'Feast days of saints']
      },
      organization: {
        structure: 'Autocephalous churches with shared faith',
        leadership: 'Patriarchs, Metropolitans, Bishops, Priests',
        governance: 'Conciliar decision-making with local autonomy'
      },
      officialUrl: 'https://www.ec-patr.org'
    },
    // Oriental Orthodox
    {
      id: 'oriental-orthodox',
      name: 'Oriental Orthodox Churches',
      founded: '1st-5th centuries CE',
      adherents: '60 million',
      mainBeliefs: [
        'Miaphysite Christology',
        'Ancient liturgical traditions',
        'Veneration of saints and icons',
        'Emphasis on monasticism'
      ],
      distinctiveFeatures: [
        'Includes Coptic, Armenian, Syriac, Ethiopian, Eritrean, and Malankara churches',
        'Distinct from Eastern Orthodox since the Council of Chalcedon (451 CE)',
        'Rich local traditions and languages'
      ],
      practices: {
        worship: ['Divine Liturgy', 'Fasting', 'Pilgrimage', 'Feast days'],
        sacraments: ['Baptism', 'Chrismation', 'Eucharist', 'Confession', 'Marriage', 'Holy Orders', 'Unction'],
        holidays: ['Christmas', 'Epiphany', 'Easter', 'Feast of the Cross', 'Saints’ days']
      },
      organization: {
        structure: 'Autocephalous national churches',
        leadership: 'Patriarchs, Catholicoi, Metropolitans, Bishops',
        governance: 'Synodal and conciliar'
      },
      officialUrl: 'https://www.copticchurch.net'
    },
    // Assyrian Church of the East
    {
      id: 'assyrian',
      name: 'Assyrian Church of the East',
      founded: '1st century CE',
      adherents: '400,000',
      mainBeliefs: [
        'Dyophysite Christology',
        'Ancient East Syriac liturgy',
        'Emphasis on apostolic succession'
      ],
      distinctiveFeatures: [
        'Distinct from both Eastern and Oriental Orthodox',
        'Ancient roots in Mesopotamia and Persia',
        'Survived centuries of persecution'
      ],
      practices: {
        worship: ['Holy Qurbana', 'Fasting', 'Feast days'],
        sacraments: ['Baptism', 'Confirmation', 'Eucharist', 'Confession', 'Marriage', 'Holy Orders', 'Anointing'],
        holidays: ['Christmas', 'Epiphany', 'Easter', 'Saints’ days']
      },
      organization: {
        structure: 'Patriarchal',
        leadership: 'Catholicos-Patriarch, Bishops, Priests',
        governance: 'Synodal'
      },
      officialUrl: 'https://www.assyrianchurch.org'
    },
    // Protestant - Anglican
    {
      id: 'anglican',
      name: 'Anglican Communion',
      founded: '16th century CE',
      adherents: '85 million',
      mainBeliefs: [
        'Scripture, tradition, and reason',
        'Book of Common Prayer',
        'Apostolic succession',
        'Via media (middle way) between Catholic and Protestant'
      ],
      distinctiveFeatures: [
        'Global communion of national churches',
        'Episcopal polity',
        'Liturgical worship',
        'Broad theological spectrum'
      ],
      practices: {
        worship: ['Holy Communion', 'Morning/Evening Prayer', 'Liturgical calendar'],
        sacraments: ['Baptism', 'Eucharist (others recognized)'],
        holidays: ['Christmas', 'Easter', 'Pentecost', 'Saints’ days']
      },
      organization: {
        structure: 'Episcopal',
        leadership: 'Archbishops, Bishops, Priests, Deacons',
        governance: 'Synods and national conferences'
      },
      officialUrl: 'https://www.anglicancommunion.org'
    },
    // Protestant - Episcopal
    {
      id: 'episcopal',
      name: 'Episcopal Church (USA)',
      founded: '1789 CE',
      adherents: '1.7 million',
      mainBeliefs: [
        'Scripture, tradition, and reason',
        'Book of Common Prayer',
        'Apostolic succession',
        'Via media theology',
        'Social justice and inclusion'
      ],
      distinctiveFeatures: [
        'Member of Anglican Communion',
        'Progressive social positions',
        'Ordination of women and LGBTQ+ clergy',
        'Emphasis on social justice',
        'Liturgical worship with contemporary elements'
      ],
      practices: {
        worship: ['Holy Eucharist', 'Morning/Evening Prayer', 'Contemporary worship'],
        sacraments: ['Baptism', 'Eucharist', 'Confirmation', 'Reconciliation', 'Marriage', 'Ordination', 'Unction'],
        holidays: ['Christmas', 'Easter', 'Pentecost', 'All Saints Day', 'Epiphany']
      },
      organization: {
        structure: 'Episcopal',
        leadership: 'Presiding Bishop, Diocesan Bishops, Priests, Deacons',
        governance: 'General Convention, diocesan conventions'
      },
      officialUrl: 'https://www.episcopalchurch.org'
    },
    // Protestant - Lutheran
    {
      id: 'lutheran',
      name: 'Lutheranism',
      founded: '16th century CE',
      adherents: '75 million',
      mainBeliefs: [
        'Justification by faith alone',
        'Authority of Scripture',
        'Sacraments of Baptism and Eucharist',
        'Confessional documents (Augsburg Confession)'
      ],
      distinctiveFeatures: [
        'Liturgical worship',
        'Emphasis on preaching and hymnody',
        'Confessional identity',
        'Global presence, especially in Europe and Africa'
      ],
      practices: {
        worship: ['Divine Service', 'Hymn singing', 'Catechesis'],
        sacraments: ['Baptism', 'Eucharist'],
        holidays: ['Christmas', 'Easter', 'Reformation Day']
      },
      organization: {
        structure: 'Episcopal or synodical',
        leadership: 'Bishops, Pastors',
        governance: 'Synods and church assemblies'
      },
      officialUrl: 'https://www.lutheranworld.org'
    },
    // Protestant - Reformed/Presbyterian
    {
      id: 'reformed',
      name: 'Reformed/Presbyterian',
      founded: '16th century CE',
      adherents: '80 million',
      mainBeliefs: [
        'Sovereignty of God',
        'Predestination',
        'Authority of Scripture',
        'Confessions (Westminster, Belgic, Heidelberg)'
      ],
      distinctiveFeatures: [
        'Eldership (presbyterian polity)',
        'Simple worship',
        'Emphasis on preaching',
        'Strong educational tradition'
      ],
      practices: {
        worship: ['Preaching', 'Psalms/hymns', 'Catechism'],
        sacraments: ['Baptism', 'Lord’s Supper'],
        holidays: ['Christmas', 'Easter', 'Reformation Day']
      },
      organization: {
        structure: 'Presbyterian',
        leadership: 'Elders, Ministers',
        governance: 'Sessions, presbyteries, synods, general assemblies'
      },
      officialUrl: 'https://www.reformedpresbyterian.org/'
    },
    // Protestant - Methodist
    {
      id: 'methodist',
      name: 'Methodism',
      founded: '18th century CE',
      adherents: '60 million',
      mainBeliefs: [
        'Personal holiness and sanctification',
        'Free will and prevenient grace',
        'Open Communion',
        'Social justice and service'
      ],
      distinctiveFeatures: [
        'Connectional structure',
        'Emphasis on small groups',
        'Strong hymn tradition',
        'Global missions'
      ],
      practices: {
        worship: ['Preaching', 'Hymn singing', 'Class meetings'],
        sacraments: ['Baptism', 'Lord’s Supper'],
        holidays: ['Christmas', 'Easter', 'Wesley Day']
      },
      organization: {
        structure: 'Connectional',
        leadership: 'Bishops, Elders, Deacons',
        governance: 'Conferences (local, annual, general)'
      },
      officialUrl: 'https://worldmethodistcouncil.org/'
    },
    // Protestant - Baptist
    {
      id: 'baptist',
      name: 'Baptist',
      founded: '17th century CE',
      adherents: '100 million',
      mainBeliefs: [
        'Believer’s baptism by immersion',
        'Congregational autonomy',
        'Authority of Scripture',
        'Religious liberty'
      ],
      distinctiveFeatures: [
        'Local church independence',
        'Evangelistic focus',
        'Simple worship',
        'Strong presence in the Americas and Africa'
      ],
      practices: {
        worship: ['Preaching', 'Congregational singing', 'Prayer meetings'],
        sacraments: ['Baptism', 'Lord’s Supper'],
        holidays: ['Christmas', 'Easter', 'Baptism Sundays']
      },
      organization: {
        structure: 'Congregational',
        leadership: 'Pastors, Deacons',
        governance: 'Local church autonomy, associations, conventions'
      },
      officialUrl: 'https://www.baptistworld.org'
    },
    // Protestant - Southern Baptist
    {
      id: 'southern-baptist',
      name: 'Southern Baptist Convention',
      founded: '1845 CE',
      adherents: '14 million',
      mainBeliefs: [
        'Believer\'s baptism by immersion',
        'Authority of Scripture',
        'Priesthood of believers',
        'Autonomy of local churches',
        'Evangelism and missions'
      ],
      distinctiveFeatures: [
        'Largest Protestant denomination in USA',
        'Cooperative Program for missions',
        'Conservative theological positions',
        'Strong emphasis on evangelism',
        'Seminaries and educational institutions'
      ],
      practices: {
        worship: ['Preaching', 'Congregational singing', 'Prayer meetings', 'Sunday School'],
        sacraments: ['Baptism', 'Lord\'s Supper'],
        holidays: ['Christmas', 'Easter', 'Baptism Sundays', 'Revival meetings']
      },
      organization: {
        structure: 'Cooperative',
        leadership: 'Pastors, Deacons, Convention officers',
        governance: 'Annual convention, state conventions, local church autonomy'
      },
      officialUrl: 'https://www.sbc.net'
    },
    // Protestant - United Methodist
    {
      id: 'united-methodist',
      name: 'United Methodist Church',
      founded: '1968 CE',
      adherents: '12 million',
      mainBeliefs: [
        'Personal holiness and sanctification',
        'Free will and prevenient grace',
        'Open Communion',
        'Social justice and service',
        'Wesleyan quadrilateral (Scripture, tradition, reason, experience)'
      ],
      distinctiveFeatures: [
        'Connectional structure',
        'Emphasis on small groups and discipleship',
        'Strong hymn tradition',
        'Social justice and mission focus',
        'Global presence with autonomous conferences'
      ],
      practices: {
        worship: ['Preaching', 'Hymn singing', 'Class meetings', 'Mission work'],
        sacraments: ['Baptism', 'Lord\'s Supper'],
        holidays: ['Christmas', 'Easter', 'Wesley Day', 'All Saints Day']
      },
      organization: {
        structure: 'Connectional',
        leadership: 'Bishops, Elders, Deacons',
        governance: 'General Conference, jurisdictional conferences, annual conferences'
      },
      officialUrl: 'https://www.umc.org'
    },
    // Protestant - Presbyterian Church (USA)
    {
      id: 'presbyterian-usa',
      name: 'Presbyterian Church (USA)',
      founded: '1983 CE',
      adherents: '1.2 million',
      mainBeliefs: [
        'Sovereignty of God',
        'Authority of Scripture',
        'Reformed theology',
        'Social justice and inclusion',
        'Democratic church governance'
      ],
      distinctiveFeatures: [
        'Representative democracy in church governance',
        'Emphasis on education and theological training',
        'Progressive social positions',
        'Ecumenical relationships',
        'Strong emphasis on mission and service'
      ],
      practices: {
        worship: ['Preaching', 'Psalms and hymns', 'Catechism', 'Mission work'],
        sacraments: ['Baptism', 'Lord\'s Supper'],
        holidays: ['Christmas', 'Easter', 'Reformation Day', 'All Saints Day']
      },
      organization: {
        structure: 'Presbyterian',
        leadership: 'Ministers, Elders, Deacons',
        governance: 'Sessions, presbyteries, synods, general assembly'
      },
      officialUrl: 'https://www.pcusa.org'
    },
    // Protestant - Pentecostal
    {
      id: 'pentecostal',
      name: 'Pentecostalism',
      founded: '20th century CE',
      adherents: '280 million',
      mainBeliefs: [
        'Baptism in the Holy Spirit',
        'Speaking in tongues',
        'Divine healing',
        'Imminent return of Christ'
      ],
      distinctiveFeatures: [
        'Charismatic worship',
        'Emphasis on spiritual gifts',
        'Global revival movements',
        'Rapid growth in Global South'
      ],
      practices: {
        worship: ['Praise and worship', 'Prayer meetings', 'Healing services'],
        sacraments: ['Baptism', 'Lord’s Supper'],
        holidays: ['Christmas', 'Easter', 'Pentecost']
      },
      organization: {
        structure: 'Varied: congregational, episcopal, presbyterian',
        leadership: 'Pastors, Evangelists, Apostles',
        governance: 'Local autonomy to denominational structures'
      },
      officialUrl: 'https://www.pentecostalworldfellowship.org'
    },
    // Protestant - Adventist
    {
      id: 'adventist',
      name: 'Adventist',
      founded: '19th century CE',
      adherents: '25 million',
      mainBeliefs: [
        'Second Coming of Christ',
        'Sabbath observance (Saturday)',
        'Conditional immortality',
        'Health and holistic living'
      ],
      distinctiveFeatures: [
        'Sabbath worship',
        'Emphasis on prophecy',
        'Health and education institutions',
        'Global missions'
      ],
      practices: {
        worship: ['Sabbath services', 'Bible study', 'Health seminars'],
        sacraments: ['Baptism', 'Lord’s Supper', 'Foot washing'],
        holidays: ['Christmas', 'Easter', 'Sabbath']
      },
      organization: {
        structure: 'Representative',
        leadership: 'Pastors, Elders',
        governance: 'Conferences, unions, general conference'
      },
      officialUrl: 'https://www.adventist.org'
    },
    // Protestant - Evangelical
    {
      id: 'evangelical',
      name: 'Evangelical',
      founded: '18th-20th centuries CE',
      adherents: '600 million',
      mainBeliefs: [
        'Personal conversion (born again)',
        'Authority of Scripture',
        'Evangelism and mission',
        'Centrality of Christ’s atonement'
      ],
      distinctiveFeatures: [
        'Trans-denominational movement',
        'Emphasis on revival and missions',
        'Diverse worship styles',
        'Strong presence in Americas, Africa, Asia'
      ],
      practices: {
        worship: ['Preaching', 'Contemporary music', 'Prayer', 'Bible study'],
        sacraments: ['Baptism', 'Lord’s Supper'],
        holidays: ['Christmas', 'Easter', 'Revival meetings']
      },
      organization: {
        structure: 'Varied',
        leadership: 'Pastors, Evangelists',
        governance: 'Local autonomy, networks, alliances'
      },
      officialUrl: 'https://www.worldevangelicals.org'
    },
    // Restorationist/Nontrinitarian - Jehovah’s Witnesses
    {
      id: 'jehovahs-witnesses',
      name: 'Jehovah’s Witnesses',
      founded: '1870s CE',
      adherents: '8.7 million',
      mainBeliefs: [
        'Nontrinitarianism',
        'God’s Kingdom as government',
        'No immortality of the soul',
        'Biblical literalism'
      ],
      distinctiveFeatures: [
        'Door-to-door evangelism',
        'No celebration of traditional Christian holidays',
        'Refusal of military service and blood transfusions',
        'Centralized organization'
      ],
      practices: {
        worship: ['Kingdom Hall meetings', 'Bible study', 'Evangelism'],
        sacraments: ['Memorial of Christ’s death (annual)'],
        holidays: ['No traditional holidays']
      },
      organization: {
        structure: 'Centralized',
        leadership: 'Governing Body',
        governance: 'Watch Tower Bible and Tract Society'
      },
      officialUrl: 'https://www.jw.org'
    },
    // Restorationist/Nontrinitarian - Latter-day Saints
    {
      id: 'lds',
      name: 'Mormon (The Church of Jesus Christ of Latter-day Saints)',
      founded: '1830 CE',
      adherents: '16 million',
      mainBeliefs: [
        'Restoration of original church',
        'Additional scriptures (Book of Mormon, etc.)',
        'Eternal progression',
        'Nontrinitarianism'
      ],
      distinctiveFeatures: [
        'Missionary program',
        'Temple worship',
        'Emphasis on family and genealogy',
        'Health code (Word of Wisdom)'
      ],
      practices: {
        worship: ['Sacrament meeting', 'Family home evening', 'Temple ordinances'],
        sacraments: ['Baptism', 'Confirmation', 'Sacrament (bread and water)', 'Temple ordinances'],
        holidays: ['Christmas', 'Easter', 'Pioneer Day']
      },
      organization: {
        structure: 'Hierarchical',
        leadership: 'President/Prophet, Apostles, Bishops',
        governance: 'General Conference, local wards and stakes'
      },
      officialUrl: 'https://www.churchofjesuschrist.org'
    }
  ]

  const theologicalTraditions: TheologicalTradition[] = [
    {
      id: 'patristic',
      name: 'Patristic Theology',
      period: '1st-8th centuries CE',
      keyFigures: [
        {
          name: 'Augustine of Hippo',
          dates: '354-430 CE',
          contributions: ['Doctrine of original sin', 'Grace and predestination', 'Trinity theology', 'City of God']
        },
        {
          name: 'Athanasius of Alexandria',
          dates: '296-373 CE',
          contributions: ['Defense of Christ\'s divinity', 'Nicene Creed', 'Incarnation theology']
        },
        {
          name: 'Gregory of Nazianzus',
          dates: '329-390 CE',
          contributions: ['Trinity doctrine', 'Christology', 'Pastoral theology']
        }
      ],
      mainConcepts: [
        'Trinity doctrine development',
        'Christological controversies',
        'Scriptural interpretation',
        'Church structure and authority'
      ],
      texts: [
        {
          title: 'On the Trinity',
          author: 'Augustine of Hippo',
          significance: 'Definitive work on Trinitarian theology'
        },
        {
          title: 'On the Incarnation',
          author: 'Athanasius',
          significance: 'Classic defense of Christ\'s divine nature'
        }
      ]
    },
    {
      id: 'medieval',
      name: 'Medieval Theology',
      period: '9th-15th centuries CE',
      keyFigures: [
        {
          name: 'Thomas Aquinas',
          dates: '1225-1274 CE',
          contributions: ['Summa Theologica', 'Natural theology', 'Scholastic method', 'Virtue ethics']
        },
        {
          name: 'Anselm of Canterbury',
          dates: '1033-1109 CE',
          contributions: ['Ontological argument', 'Cur Deus Homo', 'Faith seeking understanding']
        },
        {
          name: 'Bonaventure',
          dates: '1221-1274 CE',
          contributions: ['Franciscan spirituality', 'Mystical theology', 'Creation theology']
        }
      ],
      mainConcepts: [
        'Scholastic methodology',
        'Natural theology',
        'Sacramental theology',
        'Mystical theology'
      ],
      texts: [
        {
          title: 'Summa Theologica',
          author: 'Thomas Aquinas',
          significance: 'Comprehensive systematic theology'
        },
        {
          title: 'Proslogion',
          author: 'Anselm of Canterbury',
          significance: 'Ontological argument for God\'s existence'
        }
      ]
    },
    {
      id: 'reformation',
      name: 'Reformation Theology',
      period: '16th-17th centuries CE',
      keyFigures: [
        {
          name: 'Martin Luther',
          dates: '1483-1546 CE',
          contributions: ['Justification by faith', 'Sola Scriptura', 'Priesthood of believers', '95 Theses']
        },
        {
          name: 'John Calvin',
          dates: '1509-1564 CE',
          contributions: ['Reformed theology', 'Predestination', 'Institutes of the Christian Religion']
        },
        {
          name: 'Ulrich Zwingli',
          dates: '1484-1531 CE',
          contributions: ['Swiss Reformation', 'Symbolic view of sacraments', 'Church-state relations']
        }
      ],
      mainConcepts: [
        'Sola Scriptura, Sola Fide, Sola Gratia',
        'Justification by faith alone',
        'Predestination and election',
        'Church reform and renewal'
      ],
      texts: [
        {
          title: 'Institutes of the Christian Religion',
          author: 'John Calvin',
          significance: 'Systematic presentation of Reformed theology'
        },
        {
          title: 'On the Bondage of the Will',
          author: 'Martin Luther',
          significance: 'Defense of predestination and grace'
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Christianity Overview</h1>
        <p className="text-xl text-muted-foreground">
          Explore the rich traditions, beliefs, and practices of Christianity across its major denominations and historical developments
        </p>
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
      </section>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="theology">Theology</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="denominations">Denominations</TabsTrigger>
          <TabsTrigger value="practices">Practices</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Core Beliefs and Foundations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Central Beliefs</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium mb-2">Monotheism and Trinity</h4>
                      <p className="text-sm">Belief in one God existing in three persons: Father, Son, and Holy Spirit</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium mb-2">Incarnation</h4>
                      <p className="text-sm">Jesus Christ as fully divine and fully human, the Son of God</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium mb-2">Salvation</h4>
                      <p className="text-sm">Redemption through Jesus Christ's death and resurrection</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium mb-2">Scripture</h4>
                      <p className="text-sm">Bible as inspired Word of God and primary authority for faith</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium mb-2">Church</h4>
                      <p className="text-sm">Community of believers as the body of Christ</p>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <h4 className="font-medium mb-2">Eschatology</h4>
                      <p className="text-sm">Hope in resurrection, eternal life, and God's final judgment</p>
                    </div>
                  </div>
                </div>
              </section>

              <Separator />

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Sacred Texts</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="font-semibold mb-3">Old Testament (Hebrew Bible)</h4>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Torah (Law):</strong> Genesis, Exodus, Leviticus, Numbers, Deuteronomy</li>
                      <li><strong>Prophets:</strong> Historical and prophetic books</li>
                      <li><strong>Writings:</strong> Psalms, Proverbs, Wisdom literature</li>
                      <li><strong>Significance:</strong> Foundation of Jewish-Christian tradition</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="font-semibold mb-3">New Testament</h4>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Gospels:</strong> Matthew, Mark, Luke, John</li>
                      <li><strong>Acts:</strong> Early church history</li>
                      <li><strong>Epistles:</strong> Pauline and general letters</li>
                      <li><strong>Revelation:</strong> Apocalyptic vision</li>
                    </ul>
                  </div>
                </div>
              </section>

              <Separator />

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Quick Navigation</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Link href={`/${params.locale}/christianity/theology`}>
                    <Card className="hover:bg-secondary transition-colors cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg">Theology</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Explore systematic theology and core doctrines</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href={`/${params.locale}/christianity/history`}>
                    <Card className="hover:bg-secondary transition-colors cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg">History</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Discover Christianity's historical development</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href={`/${params.locale}/christianity/christology`}>
                    <Card className="hover:bg-secondary transition-colors cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg">Christology</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Study of Jesus Christ's person and work</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="theology" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Christian Theology</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Core Theological Disciplines</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Link href={`/${params.locale}/christianity/christology`}>
                    <Card className="hover:bg-secondary transition-colors cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg">✝️ Christology</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">The study of Jesus Christ, his nature, person, and work</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href={`/${params.locale}/christianity/theology/soteriology`}>
                    <Card className="hover:bg-secondary transition-colors cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg">🕊️ Soteriology</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">The doctrine of salvation and how it is achieved</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href={`/${params.locale}/christianity/theology/ecclesiology`}>
                    <Card className="hover:bg-secondary transition-colors cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg">⛪ Ecclesiology</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">The study of the Church, its nature, structure, and mission</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href={`/${params.locale}/christianity/theology/pneumatology`}>
                    <Card className="hover:bg-secondary transition-colors cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg">🔥 Pneumatology</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">The study of the Holy Spirit and his work</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href={`/${params.locale}/christianity/theology/eschatology`}>
                    <Card className="hover:bg-secondary transition-colors cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg">🌅 Eschatology</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">The study of end times, resurrection, and final judgment</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </section>

              <Separator />

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Historical Theological Traditions</h3>
                <div className="space-y-6">
                  {theologicalTraditions.map((tradition) => (
                    <Card key={tradition.id}>
                      <CardHeader>
                        <CardTitle>{tradition.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{tradition.period}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Key Figures</h4>
                            <div className="space-y-3">
                              {tradition.keyFigures.map((figure, idx) => (
                                <div key={idx} className="p-3 bg-secondary rounded-lg">
                                  <p className="font-medium">{figure.name}</p>
                                  <p className="text-sm text-muted-foreground">{figure.dates}</p>
                                  <ul className="text-sm mt-2 space-y-1">
                                    {figure.contributions.map((contribution, cIdx) => (
                                      <li key={cIdx}>• {contribution}</li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Main Concepts</h4>
                            <ul className="list-disc list-inside space-y-1">
                              {tradition.mainConcepts.map((concept, idx) => (
                                <li key={idx} className="text-sm">{concept}</li>
                              ))}
                            </ul>
                            <h4 className="font-semibold mb-3 mt-4">Key Texts</h4>
                            <div className="space-y-2">
                              {tradition.texts.map((text, idx) => (
                                <div key={idx} className="p-3 bg-secondary rounded-lg">
                                  <p className="font-medium text-sm">{text.title}</p>
                                  <p className="text-xs text-muted-foreground">by {text.author}</p>
                                  <p className="text-xs mt-1">{text.significance}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Historical Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Major Historical Periods</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="font-semibold mb-3">Early Church (1st-3rd centuries)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Apostolic period and early Christian communities</li>
                      <li>• Development of church structure and leadership</li>
                      <li>• Early Christian writings and canon formation</li>
                      <li>• Persecution and martyrdom under Roman Empire</li>
                      <li>• Spread of Christianity throughout Mediterranean</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="font-semibold mb-3">Patristic Period (4th-8th centuries)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Constantine and Christianization of Roman Empire</li>
                      <li>• Ecumenical councils and creedal development</li>
                      <li>• Rise of monasticism and ascetic practices</li>
                      <li>• Theological controversies and heresies</li>
                      <li>• Establishment of Christian orthodoxy</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="font-semibold mb-3">Medieval Period (9th-15th centuries)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• East-West Schism (1054)</li>
                      <li>• Rise of scholasticism and universities</li>
                      <li>• Crusades and religious conflict</li>
                      <li>• Development of sacramental theology</li>
                      <li>• Mystical theology and spiritual practices</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="font-semibold mb-3">Reformation Period (16th-17th centuries)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Protestant Reformation and church reform</li>
                      <li>• Catholic Counter-Reformation</li>
                      <li>• Religious wars and conflicts</li>
                      <li>• Development of denominational diversity</li>
                      <li>• Bible translation and literacy</li>
                    </ul>
                  </div>
                </div>
              </section>

              <Separator />

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Explore Church History</h3>
                <div className="text-center">
                  <Link href={`/${params.locale}/christianity/history`}>
                    <Button size="lg">
                      Learn More About Church History
                    </Button>
                  </Link>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="denominations" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Major Christian Denominations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="mb-8">
                <p className="text-base text-muted-foreground">
                  Christianity is a global faith with remarkable diversity. Its major branches—Catholic, Orthodox, Protestant, and Restorationist—each encompass a wide range of traditions, beliefs, and practices. Explore the key features of each major group and their global impact below.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href={`/${params.locale}/christianity/history`} className="underline text-primary text-sm">Church History</Link>
                  <Link href={`/${params.locale}/christianity/theology`} className="underline text-primary text-sm">Christian Theology</Link>
                  <Link href={`/${params.locale}/christianity/christology`} className="underline text-primary text-sm">Christology</Link>
                </div>
              </section>
              {/* Catholic */}
              <h3 className="text-2xl font-bold mt-8 mb-4">Catholic</h3>
              {denominations.filter(d => d.id === 'catholic').map((denomination) => (
                <Card key={denomination.id} className="mb-6">
                  <CardHeader>
                    <CardTitle>{denomination.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Founded: {denomination.founded} | Adherents: {denomination.adherents}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Main Beliefs</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {denomination.mainBeliefs.map((belief, idx) => (
                            <li key={idx} className="text-sm">{belief}</li>
                          ))}
                        </ul>
                        <h4 className="font-semibold mb-3 mt-4">Distinctive Features</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {denomination.distinctiveFeatures.map((feature, idx) => (
                            <li key={idx} className="text-sm">{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Practices</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium text-sm">Worship</h5>
                            <ul className="list-disc list-inside text-sm">
                              {denomination.practices.worship.map((practice, idx) => (
                                <li key={idx}>{practice}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-sm">Sacraments</h5>
                            <ul className="list-disc list-inside text-sm">
                              {denomination.practices.sacraments.map((sacrament, idx) => (
                                <li key={idx}>{sacrament}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <h4 className="font-semibold mb-3 mt-4">Organization</h4>
                        <div className="text-sm space-y-1">
                          <p><strong>Structure:</strong> {denomination.organization.structure}</p>
                          <p><strong>Leadership:</strong> {denomination.organization.leadership}</p>
                          <p><strong>Governance:</strong> {denomination.organization.governance}</p>
                        </div>
                        <div className="mt-4">
                          <Button asChild variant="outline" size="sm">
                            <a href={denomination.officialUrl} target="_blank" rel="noopener noreferrer">
                              Start Your Discovery
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {/* Orthodox */}
              <h3 className="text-2xl font-bold mt-8 mb-4">Orthodox</h3>
              {denominations.filter(d => d.id === 'orthodox' || d.id === 'oriental-orthodox' || d.id === 'assyrian').map((denomination) => (
                <Card key={denomination.id} className="mb-6">
                  <CardHeader>
                    <CardTitle>{denomination.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Founded: {denomination.founded} | Adherents: {denomination.adherents}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Main Beliefs</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {denomination.mainBeliefs.map((belief, idx) => (
                            <li key={idx} className="text-sm">{belief}</li>
                          ))}
                        </ul>
                        <h4 className="font-semibold mb-3 mt-4">Distinctive Features</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {denomination.distinctiveFeatures.map((feature, idx) => (
                            <li key={idx} className="text-sm">{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Practices</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium text-sm">Worship</h5>
                            <ul className="list-disc list-inside text-sm">
                              {denomination.practices.worship.map((practice, idx) => (
                                <li key={idx}>{practice}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-sm">Sacraments</h5>
                            <ul className="list-disc list-inside text-sm">
                              {denomination.practices.sacraments.map((sacrament, idx) => (
                                <li key={idx}>{sacrament}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <h4 className="font-semibold mb-3 mt-4">Organization</h4>
                        <div className="text-sm space-y-1">
                          <p><strong>Structure:</strong> {denomination.organization.structure}</p>
                          <p><strong>Leadership:</strong> {denomination.organization.leadership}</p>
                          <p><strong>Governance:</strong> {denomination.organization.governance}</p>
                        </div>
                        <div className="mt-4">
                          <Button asChild variant="outline" size="sm">
                            <a href={denomination.officialUrl} target="_blank" rel="noopener noreferrer">
                              Start Your Discovery
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {/* Protestant */}
              <h3 className="text-2xl font-bold mt-8 mb-4">Protestant</h3>
              {denominations.filter(d => [
                'protestant',
                'anglican',
                'episcopal',
                'lutheran',
                'reformed',
                'presbyterian-usa',
                'methodist',
                'united-methodist',
                'baptist',
                'southern-baptist',
                'pentecostal',
                'adventist',
                'evangelical'
              ].includes(d.id)).map((denomination) => (
                <Card key={denomination.id} className="mb-6">
                  <CardHeader>
                    <CardTitle>{denomination.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Founded: {denomination.founded} | Adherents: {denomination.adherents}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Main Beliefs</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {denomination.mainBeliefs.map((belief, idx) => (
                            <li key={idx} className="text-sm">{belief}</li>
                          ))}
                        </ul>
                        <h4 className="font-semibold mb-3 mt-4">Distinctive Features</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {denomination.distinctiveFeatures.map((feature, idx) => (
                            <li key={idx} className="text-sm">{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Practices</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium text-sm">Worship</h5>
                            <ul className="list-disc list-inside text-sm">
                              {denomination.practices.worship.map((practice, idx) => (
                                <li key={idx}>{practice}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-sm">Sacraments</h5>
                            <ul className="list-disc list-inside text-sm">
                              {denomination.practices.sacraments.map((sacrament, idx) => (
                                <li key={idx}>{sacrament}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <h4 className="font-semibold mb-3 mt-4">Organization</h4>
                        <div className="text-sm space-y-1">
                          <p><strong>Structure:</strong> {denomination.organization.structure}</p>
                          <p><strong>Leadership:</strong> {denomination.organization.leadership}</p>
                          <p><strong>Governance:</strong> {denomination.organization.governance}</p>
                        </div>
                        {denomination.id !== 'pentecostal' && (
                          <div className="mt-4">
                            <Button asChild variant="outline" size="sm">
                              <a href={denomination.officialUrl} target="_blank" rel="noopener noreferrer">
                                Start Your Discovery
                              </a>
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {/* Restorationist/Other */}
              <h3 className="text-2xl font-bold mt-8 mb-4">Restorationist & Nontrinitarian</h3>
              {denominations.filter(d => d.id === 'jehovahs-witnesses' || d.id === 'lds').map((denomination) => (
                <Card key={denomination.id} className="mb-6">
                  <CardHeader>
                    <CardTitle>{denomination.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Founded: {denomination.founded} | Adherents: {denomination.adherents}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Main Beliefs</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {denomination.mainBeliefs.map((belief, idx) => (
                            <li key={idx} className="text-sm">{belief}</li>
                          ))}
                        </ul>
                        <h4 className="font-semibold mb-3 mt-4">Distinctive Features</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {denomination.distinctiveFeatures.map((feature, idx) => (
                            <li key={idx} className="text-sm">{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Practices</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium text-sm">Worship</h5>
                            <ul className="list-disc list-inside text-sm">
                              {denomination.practices.worship.map((practice, idx) => (
                                <li key={idx}>{practice}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-sm">Sacraments</h5>
                            <ul className="list-disc list-inside text-sm">
                              {denomination.practices.sacraments.map((sacrament, idx) => (
                                <li key={idx}>{sacrament}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <h4 className="font-semibold mb-3 mt-4">Organization</h4>
                        <div className="text-sm space-y-1">
                          <p><strong>Structure:</strong> {denomination.organization.structure}</p>
                          <p><strong>Leadership:</strong> {denomination.organization.leadership}</p>
                          <p><strong>Governance:</strong> {denomination.organization.governance}</p>
                        </div>
                        <div className="mt-4">
                          <Button asChild variant="outline" size="sm">
                            <a href={denomination.officialUrl} target="_blank" rel="noopener noreferrer">
                              Start Your Discovery
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="practices" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Christian Practices and Worship</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Core Practices</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="font-semibold mb-3">Worship</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Sunday worship services</li>
                      <li>• Prayer and meditation</li>
                      <li>• Singing hymns and spiritual songs</li>
                      <li>• Reading and preaching Scripture</li>
                      <li>• Communion/Eucharist</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="font-semibold mb-3">Spiritual Disciplines</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Daily prayer and devotion</li>
                      <li>• Bible study and meditation</li>
                      <li>• Fasting and self-denial</li>
                      <li>• Service and charity</li>
                      <li>• Fellowship and community</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="font-semibold mb-3">Sacraments</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Baptism (initiation)</li>
                      <li>• Eucharist/Communion (nourishment)</li>
                      <li>• Confirmation (maturity)</li>
                      <li>• Marriage (covenant)</li>
                      <li>• Ordination (service)</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-secondary rounded-lg">
                    <h4 className="font-semibold mb-3">Seasonal Observances</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Advent and Christmas</li>
                      <li>• Lent and Easter</li>
                      <li>• Pentecost</li>
                      <li>• Saints' feast days</li>
                      <li>• Ordinary time</li>
                    </ul>
                  </div>
                </div>
              </section>

              <Separator />

              <section className="space-y-4">
                <h3 className="text-xl font-semibold">Christian Life and Ethics</h3>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-semibold mb-2">Personal Ethics</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Love God and neighbor</li>
                      <li>• Honesty and integrity</li>
                      <li>• Forgiveness and reconciliation</li>
                      <li>• Humility and service</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-semibold mb-2">Social Justice</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Care for the poor</li>
                      <li>• Justice and equality</li>
                      <li>• Peace and reconciliation</li>
                      <li>• Environmental stewardship</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-semibold mb-2">Community Life</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Church membership</li>
                      <li>• Fellowship and support</li>
                      <li>• Mission and evangelism</li>
                      <li>• Interfaith dialogue</li>
                    </ul>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 