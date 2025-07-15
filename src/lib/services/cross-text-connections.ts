import { BibleService } from './bible-service'

export interface CrossTextConnection {
  id: string
  title: string
  description: string
  category: 'creation' | 'monotheism' | 'prayer' | 'messianic' | 'ethics' | 'prophecy' | 'wisdom' | 'covenant'
  verses: {
    bible?: {
      reference: string
      text: string
      translation: string
      context: string
    }
    quran?: {
      reference: string
      arabic: string
      english: string
      transliteration: string
      context: string
    }
    torah?: {
      reference: string
      hebrew: string
      english: string
      transliteration: string
      context: string
    }
  }
  themes: string[]
  significance: string
  historicalContext: string
  theologicalImplications: string[]
  studyNotes: string[]
  relatedConnections: string[]
}

export interface CrossTextTheme {
  id: string
  name: string
  description: string
  connections: CrossTextConnection[]
  significance: string
  studyResources: {
    title: string
    url: string
    type: 'article' | 'book' | 'video' | 'course'
  }[]
}

export class CrossTextConnectionsService {
  private bibleService: BibleService

  constructor() {
    this.bibleService = new BibleService()
  }

  // Key Cross-Text Connections
  async getKeyConnections(): Promise<CrossTextConnection[]> {
    return [
      {
        id: 'creation-narratives',
        title: 'Creation Narratives',
        description: 'The foundational accounts of creation across the three Abrahamic traditions',
        category: 'creation',
        verses: {
          bible: {
            reference: 'Genesis 1:1',
            text: 'In the beginning God created the heavens and the earth.',
            translation: 'NIV',
            context: 'The opening verse of the Bible establishes God as the creator of all existence, setting the foundation for the entire biblical narrative.'
          },
          quran: {
            reference: 'Quran 2:255 (Ayat al-Kursi)',
            arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ',
            english: 'Allah - there is no deity except Him, the Ever-Living, the Self-Sustaining. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth.',
            transliteration: 'Allahu la ilaha illa huwal-hayyul-qayyum. La ta\'khudhuhu sinatuw-wa la nawm. Lahu ma fis-samawati wa ma fil-ard.',
            context: 'This verse, known as the Throne Verse, emphasizes Allah\'s absolute sovereignty and creative power over all existence.'
          },
          torah: {
            reference: 'Genesis 1:1',
            hebrew: 'בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ',
            english: 'In the beginning God created the heavens and the earth.',
            transliteration: 'Bereishit bara Elohim et hashamayim ve\'et ha\'aretz.',
            context: 'The opening of the Torah establishes the monotheistic creation narrative that forms the foundation of Jewish belief and practice.'
          }
        },
        themes: ['Creation', 'Monotheism', 'Divine Sovereignty', 'Cosmic Order'],
        significance: 'These verses establish the fundamental belief in a single, all-powerful creator God across all three Abrahamic traditions, despite their different theological emphases.',
        historicalContext: 'The creation narratives reflect the ancient Near Eastern context while establishing distinct monotheistic perspectives that would shape religious thought for millennia.',
        theologicalImplications: [
          'Establishes God as the ultimate source of all existence',
          'Provides foundation for understanding human purpose and responsibility',
          'Creates framework for understanding divine-human relationship',
          'Sets precedent for God\'s ongoing involvement in creation'
        ],
        studyNotes: [
          'Compare the different emphases: Genesis focuses on order and purpose, Quran emphasizes divine attributes, Torah establishes covenantal foundation',
          'Note the progression from chaos to order in Genesis, the emphasis on divine attributes in Quran, and the covenantal implications in Torah',
          'Consider how these creation accounts inform each tradition\'s understanding of human stewardship and environmental ethics'
        ],
        relatedConnections: ['monotheistic-declarations', 'divine-attributes', 'human-purpose']
      },
      {
        id: 'monotheistic-declarations',
        title: 'Monotheistic Declarations',
        description: 'Core statements affirming the oneness of God across traditions',
        category: 'monotheism',
        verses: {
          bible: {
            reference: 'Mark 12:29',
            text: 'The most important one," answered Jesus, "is this: \'Hear, O Israel: The Lord our God, the Lord is one.\'',
            translation: 'NIV',
            context: 'Jesus affirms the Shema, the central declaration of Jewish monotheism, as the greatest commandment.'
          },
          quran: {
            reference: 'Quran 112:1-4',
            arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿٤﴾',
            english: 'Say, "He is Allah, [who is] One, Allah, the Eternal Refuge. He neither begets nor is born, Nor is there to Him any equivalent."',
            transliteration: 'Qul huwa Allahu ahad. Allahus-samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad.',
            context: 'This surah, known as al-Ikhlas (Sincerity), is considered the essence of Islamic monotheism and divine unity.'
          },
          torah: {
            reference: 'Deuteronomy 6:4',
            hebrew: 'שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד',
            english: 'Hear, O Israel: The Lord our God, the Lord is one.',
            transliteration: 'Shema Yisrael Adonai Eloheinu Adonai Echad.',
            context: 'The Shema, the central declaration of Jewish faith, affirming the absolute unity of God.'
          }
        },
        themes: ['Monotheism', 'Divine Unity', 'Faith Declaration', 'Religious Identity'],
        significance: 'These verses represent the foundational monotheistic declarations that define the core beliefs of each tradition and distinguish them from polytheistic religions.',
        historicalContext: 'These declarations emerged in contexts where polytheism was prevalent, serving as powerful statements of religious identity and theological distinctiveness.',
        theologicalImplications: [
          'Establishes absolute divine unity as the foundation of faith',
          'Rejects any form of polytheism or divine multiplicity',
          'Creates framework for understanding divine-human relationship',
          'Provides basis for ethical monotheism'
        ],
        studyNotes: [
          'Compare the different emphases: Shema emphasizes covenantal relationship, Quran focuses on divine attributes, Mark shows Jesus\' affirmation of Jewish tradition',
          'Note how each tradition interprets divine unity: Jewish emphasis on covenantal monotheism, Islamic focus on divine transcendence, Christian affirmation of Jewish roots',
          'Consider the implications for interfaith dialogue and understanding'
        ],
        relatedConnections: ['creation-narratives', 'prayer-traditions', 'divine-attributes']
      },
      {
        id: 'prayer-traditions',
        title: 'Prayer Traditions',
        description: 'Foundational prayer texts that establish patterns of worship and communication with the divine',
        category: 'prayer',
        verses: {
          bible: {
            reference: 'Matthew 6:9-13',
            text: 'Our Father in heaven, hallowed be your name, your kingdom come, your will be done, on earth as it is in heaven...',
            translation: 'NIV',
            context: 'The Lord\'s Prayer, taught by Jesus as the model for Christian prayer, emphasizing God\'s fatherhood and kingdom.'
          },
          quran: {
            reference: 'Quran 1:1-7 (Al-Fatiha)',
            arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾',
            english: 'In the name of Allah, the Entirely Merciful, the Especially Merciful. [All] praise is [due] to Allah, Lord of the worlds, The Entirely Merciful, the Especially Merciful, Sovereign of the Day of Recompense.',
            transliteration: 'Bismillahi r-rahmani r-rahim. Al-hamdu lillahi rabbi l-\'alamin. Ar-rahmani r-rahim. Maliki yawmi d-din.',
            context: 'The Opening Chapter of the Quran, recited in every prayer, establishing the pattern of Islamic worship.'
          },
          torah: {
            reference: 'Numbers 6:24-26',
            hebrew: 'יְבָרֶכְךָ יְהוָה וְיִשְׁמְרֶךָ ﴿כד﴾ יָאֵר יְהוָה פָּנָיו אֵלֶיךָ וִיחֻנֶּךָּ ﴿כה﴾ יִשָּׂא יְהוָה פָּנָיו אֵלֶיךָ וְיָשֵׂם לְךָ שָׁלוֹם ﴿כו﴾',
            english: 'The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace.',
            transliteration: 'Yevarechecha Adonai veyishmerecha. Ya\'er Adonai panav elecha vichunecha. Yisa Adonai panav elecha veyasem lecha shalom.',
            context: 'The Priestly Blessing, a central prayer in Jewish tradition, emphasizing divine blessing and peace.'
          }
        },
        themes: ['Prayer', 'Worship', 'Divine Blessing', 'Spiritual Communication'],
        significance: 'These prayer texts establish the fundamental patterns of worship and communication with the divine across the three traditions.',
        historicalContext: 'These prayers emerged in different historical contexts but share common themes of divine praise, supplication, and blessing.',
        theologicalImplications: [
          'Establishes patterns for divine-human communication',
          'Emphasizes divine mercy and blessing',
          'Creates framework for communal worship',
          'Provides structure for spiritual practice'
        ],
        studyNotes: [
          'Compare the different emphases: Lord\'s Prayer emphasizes kingdom and forgiveness, Fatiha focuses on divine attributes and guidance, Priestly Blessing emphasizes blessing and peace',
          'Note the progression from individual blessing to communal worship to universal kingdom',
          'Consider how these prayers inform each tradition\'s understanding of divine-human relationship'
        ],
        relatedConnections: ['monotheistic-declarations', 'divine-attributes', 'spiritual-practice']
      },
      {
        id: 'messianic-prophecies',
        title: 'Messianic Prophecies',
        description: 'Texts that speak of divine messengers, saviors, and the fulfillment of divine promises',
        category: 'messianic',
        verses: {
          bible: {
            reference: 'Matthew 1:1',
            text: 'This is the genealogy of Jesus the Messiah the son of David, the son of Abraham.',
            translation: 'NIV',
            context: 'The opening of Matthew\'s Gospel establishes Jesus as the fulfillment of messianic prophecies through the Davidic and Abrahamic lines.'
          },
          quran: {
            reference: 'Quran 3:45',
            arabic: 'إِذْ قَالَتِ الْمَلَائِكَةُ يَا مَرْيَمُ إِنَّ اللَّهَ يُبَشِّرُكِ بِكَلِمَةٍ مِّنْهُ اسْمُهُ الْمَسِيحُ عِيسَى ابْنُ مَرْيَمَ',
            english: '[And mention] when the angels said, "O Mary, indeed Allah gives you good tidings of a word from Him, whose name will be the Messiah, Jesus, the son of Mary."',
            transliteration: 'Idh qalati l-mala\'ikatu ya Maryamu inna Allaha yubashshiruki bi-kalimatin minhu ismuhu l-masihu \'Isa bnu Maryam.',
            context: 'The Quran\'s account of the annunciation, recognizing Jesus as the Messiah while maintaining Islamic theological perspectives.'
          },
          torah: {
            reference: 'Genesis 12:1-3',
            hebrew: 'וַיֹּאמֶר יְהוָה אֶל־אַבְרָם לֶךְ־לְךָ מֵאַרְצְךָ וּמִמּוֹלַדְתְּךָ וּמִבֵּית אָבִיךָ אֶל־הָאָרֶץ אֲשֶׁר אַרְאֶךָּ',
            english: 'The Lord had said to Abram, "Go from your country, your people and your father\'s household to the land I will show you."',
            transliteration: 'Vayomer Adonai el-Avram lech-lecha me\'artzecha umimoladetecha umibeit avicha el-ha\'aretz asher areka.',
            context: 'The call of Abraham, establishing the covenantal foundation that would lead to the messianic promise.'
          }
        },
        themes: ['Messianic Promise', 'Divine Covenant', 'Prophecy Fulfillment', 'Salvation History'],
        significance: 'These texts establish the messianic expectations and divine promises that would shape the religious development of all three traditions.',
        historicalContext: 'These prophecies emerged in contexts of exile and expectation, providing hope for divine intervention and restoration.',
        theologicalImplications: [
          'Establishes framework for understanding divine promises',
          'Creates expectation for messianic fulfillment',
          'Provides foundation for salvation history',
          'Shapes understanding of divine-human covenant'
        ],
        studyNotes: [
          'Compare the different emphases: Genesis establishes covenantal foundation, Matthew shows fulfillment, Quran recognizes messianic role while maintaining Islamic perspective',
          'Note how each tradition interprets messianic expectations: Jewish emphasis on covenantal fulfillment, Christian focus on incarnation, Islamic recognition of prophetic role',
          'Consider the implications for interfaith understanding of messianic themes'
        ],
        relatedConnections: ['creation-narratives', 'divine-covenant', 'prophetic-tradition']
      }
    ]
  }

  // Get connections by category
  async getConnectionsByCategory(category: CrossTextConnection['category']): Promise<CrossTextConnection[]> {
    const connections = await this.getKeyConnections()
    return connections.filter(connection => connection.category === category)
  }

  // Get connections by theme
  async getConnectionsByTheme(theme: string): Promise<CrossTextConnection[]> {
    const connections = await this.getKeyConnections()
    return connections.filter(connection => 
      connection.themes.some(t => t.toLowerCase().includes(theme.toLowerCase()))
    )
  }

  // Get detailed connection by ID
  async getConnectionById(id: string): Promise<CrossTextConnection | null> {
    const connections = await this.getKeyConnections()
    return connections.find(connection => connection.id === id) || null
  }

  // Get cross-text themes
  async getCrossTextThemes(): Promise<CrossTextTheme[]> {
    return [
      {
        id: 'creation-and-cosmos',
        name: 'Creation and Cosmos',
        description: 'Understanding of the universe\'s origin and divine purpose across traditions',
        connections: await this.getConnectionsByCategory('creation'),
        significance: 'These texts establish the foundational understanding of existence and divine purpose that shapes all subsequent theological development.',
        studyResources: [
          {
            title: 'Creation Narratives in Comparative Religion',
            url: '/studies/comparative/creation',
            type: 'article'
          },
          {
            title: 'Divine Purpose in Abrahamic Traditions',
            url: '/studies/theology/divine-purpose',
            type: 'course'
          }
        ]
      },
      {
        id: 'divine-nature',
        name: 'Divine Nature and Attributes',
        description: 'Understanding of God\'s nature, attributes, and relationship with creation',
        connections: await this.getConnectionsByCategory('monotheism'),
        significance: 'These texts establish the fundamental understanding of divine nature that distinguishes monotheistic traditions from polytheistic religions.',
        studyResources: [
          {
            title: 'Monotheism in Abrahamic Traditions',
            url: '/studies/theology/monotheism',
            type: 'course'
          },
          {
            title: 'Divine Attributes Across Traditions',
            url: '/studies/comparative/divine-attributes',
            type: 'article'
          }
        ]
      },
      {
        id: 'worship-and-prayer',
        name: 'Worship and Prayer',
        description: 'Patterns of divine communication and spiritual practice',
        connections: await this.getConnectionsByCategory('prayer'),
        significance: 'These texts establish the fundamental patterns of worship and spiritual practice that define religious life across traditions.',
        studyResources: [
          {
            title: 'Prayer Traditions in Abrahamic Religions',
            url: '/studies/practice/prayer-traditions',
            type: 'course'
          },
          {
            title: 'Comparative Worship Practices',
            url: '/studies/comparative/worship',
            type: 'article'
          }
        ]
      },
      {
        id: 'messianic-expectation',
        name: 'Messianic Expectation and Fulfillment',
        description: 'Understanding of divine promises and their fulfillment in history',
        connections: await this.getConnectionsByCategory('messianic'),
        significance: 'These texts establish the framework for understanding divine promises and their fulfillment that shapes religious hope and expectation.',
        studyResources: [
          {
            title: 'Messianic Traditions in Abrahamic Religions',
            url: '/studies/theology/messianic-traditions',
            type: 'course'
          },
          {
            title: 'Prophecy and Fulfillment',
            url: '/studies/comparative/prophecy',
            type: 'article'
          }
        ]
      }
    ]
  }

  // Search connections
  async searchConnections(query: string): Promise<CrossTextConnection[]> {
    const connections = await this.getKeyConnections()
    const searchTerm = query.toLowerCase()
    
    return connections.filter(connection => 
      connection.title.toLowerCase().includes(searchTerm) ||
      connection.description.toLowerCase().includes(searchTerm) ||
      connection.themes.some(theme => theme.toLowerCase().includes(searchTerm)) ||
      connection.significance.toLowerCase().includes(searchTerm)
    )
  }

  // Get related connections
  async getRelatedConnections(connectionId: string): Promise<CrossTextConnection[]> {
    const connection = await this.getConnectionById(connectionId)
    if (!connection) return []
    
    const allConnections = await this.getKeyConnections()
    return allConnections.filter(conn => 
      conn.id !== connectionId && 
      (connection.relatedConnections.includes(conn.id) ||
       conn.themes.some(theme => connection.themes.includes(theme)))
    )
  }
} 