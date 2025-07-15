import { RelatedText, VerseInterlinks, CROSS_TEXT_THEMES, INTERLINK_CATEGORIES } from '@/types/related-texts'

// Interlinking Service for Sacred Texts
// Provides SEO-optimized cross-references between Quran, Bible, and Torah

export class InterlinkingService {
  // Core interlinking data for key verses
  private static interlinkData: Map<string, VerseInterlinks> = new Map()

  // Initialize interlinking data
  static initializeInterlinks() {
    this.setupQuranInterlinks()
    this.setupBibleInterlinks()
    this.setupTorahInterlinks()
  }

  // Quran Interlinks
  private static setupQuranInterlinks() {
    // Al-Fatiha (The Opening) - Most important prayer
    this.interlinkData.set('quran-1-1', {
      relatedTexts: [
        {
          type: 'bible',
          reference: 'Bible Matthew 6:9',
          title: 'The Lord\'s Prayer',
          description: 'Christian prayer taught by Jesus, similar to Al-Fatiha in structure and purpose',
          relevance: 'parallel',
          keywords: ['prayer', 'worship', 'divine guidance', 'spiritual opening']
        },
        {
          type: 'torah',
          reference: 'Torah Deuteronomy 6:4',
          title: 'Shema Yisrael',
          description: 'Jewish declaration of faith, emphasizing monotheism like Al-Fatiha',
          relevance: 'thematic',
          keywords: ['monotheism', 'faith declaration', 'divine unity']
        }
      ],
      crossReferences: ['Bible Matthew 6:9', 'Torah Deuteronomy 6:4'],
      themes: [CROSS_TEXT_THEMES.PRAYER, CROSS_TEXT_THEMES.MONOTHEISM],
      keywords: ['Basmala', 'divine opening', 'Islamic prayer', 'Quranic introduction'],
      seoDescription: 'The opening verse of the Quran (Basmala) - compare with Christian Lord\'s Prayer and Jewish Shema'
    })

    // Al-Baqarah 2:255 - Ayat al-Kursi (The Throne Verse)
    this.interlinkData.set('quran-2-255', {
      relatedTexts: [
        {
          type: 'bible',
          reference: 'Bible Isaiah 40:22',
          title: 'God\'s Throne and Sovereignty',
          description: 'Biblical description of God\'s throne and dominion over creation',
          relevance: 'thematic',
          keywords: ['divine throne', 'sovereignty', 'creation', 'divine power']
        },
        {
          type: 'torah',
          reference: 'Torah Genesis 1:1',
          title: 'Creation Narrative',
          description: 'Torah\'s account of creation, emphasizing God\'s power over all things',
          relevance: 'thematic',
          keywords: ['creation', 'divine power', 'heavens and earth']
        }
      ],
      crossReferences: ['Bible Isaiah 40:22', 'Torah Genesis 1:1'],
      themes: [CROSS_TEXT_THEMES.CREATION, CROSS_TEXT_THEMES.MONOTHEISM],
      keywords: ['Ayat al-Kursi', 'throne verse', 'divine sovereignty', 'Islamic protection'],
      seoDescription: 'The Throne Verse (Ayat al-Kursi) - explore divine sovereignty across Islamic, Christian, and Jewish traditions'
    })

    // Aal-Imran 3:3 - Confirmation of previous scriptures
    this.interlinkData.set('quran-3-3', {
      relatedTexts: [
        {
          type: 'bible',
          reference: 'Bible Matthew 5:17',
          title: 'Fulfillment of the Law',
          description: 'Jesus\' statement about fulfilling rather than abolishing the law',
          relevance: 'thematic',
          keywords: ['scripture fulfillment', 'divine revelation', 'prophetic continuity']
        },
        {
          type: 'torah',
          reference: 'Torah Deuteronomy 18:15',
          title: 'Promise of Future Prophet',
          description: 'Torah\'s promise of a prophet like Moses',
          relevance: 'prophetic',
          keywords: ['prophecy', 'future prophet', 'divine messenger']
        }
      ],
      crossReferences: ['Bible Matthew 5:17', 'Torah Deuteronomy 18:15'],
      themes: [CROSS_TEXT_THEMES.PROPHECY, CROSS_TEXT_THEMES.DOCTRINAL],
      keywords: ['scripture confirmation', 'divine revelation', 'prophetic tradition'],
      seoDescription: 'Quranic confirmation of previous scriptures - explore interfaith prophetic traditions'
    })
  }

  // Bible Interlinks
  private static setupBibleInterlinks() {
    // Matthew 1:1 - Genealogy of Jesus
    this.interlinkData.set('bible-matthew-1-1', {
      relatedTexts: [
        {
          type: 'quran',
          reference: 'Quran 3:45',
          title: 'Jesus in the Quran',
          description: 'Quranic account of Jesus\' birth and significance',
          relevance: 'thematic',
          keywords: ['Jesus Christ', 'Messiah', 'divine birth', 'prophetic lineage']
        },
        {
          type: 'torah',
          reference: 'Torah Genesis 12:1-3',
          title: 'Abrahamic Covenant',
          description: 'God\'s promise to Abraham, foundational to Jesus\' genealogy',
          relevance: 'historical',
          keywords: ['Abraham', 'covenant', 'promise', 'blessing']
        }
      ],
      crossReferences: ['Quran 3:45', 'Torah Genesis 12:1-3'],
      themes: [CROSS_TEXT_THEMES.MESSIAH, CROSS_TEXT_THEMES.PROPHECY],
      keywords: ['Jesus genealogy', 'Messianic lineage', 'Davidic line', 'Abrahamic promise'],
      seoDescription: 'Genealogy of Jesus Christ - explore Messianic prophecies across Christian, Islamic, and Jewish traditions'
    })

    // John 1:1 - The Word
    this.interlinkData.set('bible-john-1-1', {
      relatedTexts: [
        {
          type: 'quran',
          reference: 'Quran 3:45',
          title: 'Jesus as Word of God',
          description: 'Quranic reference to Jesus as the Word of God',
          relevance: 'thematic',
          keywords: ['Word of God', 'divine word', 'Jesus', 'divine nature']
        },
        {
          type: 'torah',
          reference: 'Torah Genesis 1:1',
          title: 'Creation by Word',
          description: 'Torah\'s account of creation through divine word',
          relevance: 'thematic',
          keywords: ['creation', 'divine word', 'beginning', 'cosmic order']
        }
      ],
      crossReferences: ['Quran 3:45', 'Torah Genesis 1:1'],
      themes: [CROSS_TEXT_THEMES.CREATION, CROSS_TEXT_THEMES.DOCTRINAL],
      keywords: ['Word of God', 'divine logos', 'creation', 'divine nature'],
      seoDescription: 'The Word in John 1:1 - explore divine word concepts across Christian, Islamic, and Jewish theology'
    })

    // Matthew 6:9 - Lord's Prayer
    this.interlinkData.set('bible-matthew-6-9', {
      relatedTexts: [
        {
          type: 'quran',
          reference: 'Quran 1:1-7',
          title: 'Al-Fatiha',
          description: 'Opening chapter of Quran, similar prayer structure',
          relevance: 'parallel',
          keywords: ['prayer', 'worship', 'divine guidance', 'spiritual opening']
        },
        {
          type: 'torah',
          reference: 'Torah Deuteronomy 6:4-9',
          title: 'Shema and Prayer',
          description: 'Jewish prayer and commandment to love God',
          relevance: 'thematic',
          keywords: ['prayer', 'divine love', 'commandment', 'spiritual practice']
        }
      ],
      crossReferences: ['Quran 1:1-7', 'Torah Deuteronomy 6:4-9'],
      themes: [CROSS_TEXT_THEMES.PRAYER, CROSS_TEXT_THEMES.WORSHIP],
      keywords: ['Lord\'s Prayer', 'Christian prayer', 'divine worship', 'spiritual guidance'],
      seoDescription: 'The Lord\'s Prayer - compare with Islamic Al-Fatiha and Jewish prayer traditions'
    })
  }

  // Torah Interlinks
  private static setupTorahInterlinks() {
    // Genesis 1:1 - Creation
    this.interlinkData.set('torah-genesis-1-1', {
      relatedTexts: [
        {
          type: 'quran',
          reference: 'Quran 2:255',
          title: 'Ayat al-Kursi',
          description: 'Quranic description of God\'s sovereignty over creation',
          relevance: 'thematic',
          keywords: ['creation', 'divine power', 'sovereignty', 'heavens and earth']
        },
        {
          type: 'bible',
          reference: 'Bible John 1:1',
          title: 'The Word and Creation',
          description: 'Christian account of creation through the Word',
          relevance: 'thematic',
          keywords: ['creation', 'divine word', 'beginning', 'cosmic order']
        }
      ],
      crossReferences: ['Quran 2:255', 'Bible John 1:1'],
      themes: [CROSS_TEXT_THEMES.CREATION, CROSS_TEXT_THEMES.MONOTHEISM],
      keywords: ['creation narrative', 'Genesis', 'divine beginning', 'cosmic origin'],
      seoDescription: 'Genesis 1:1 - Creation narrative - explore creation accounts across Jewish, Islamic, and Christian traditions'
    })

    // Exodus 1:1 - Israelites in Egypt
    this.interlinkData.set('torah-exodus-1-1', {
      relatedTexts: [
        {
          type: 'quran',
          reference: 'Quran 2:49',
          title: 'Exodus in Quran',
          description: 'Quranic account of Israelites\' exodus from Egypt',
          relevance: 'historical',
          keywords: ['exodus', 'Egypt', 'Israelites', 'divine deliverance']
        },
        {
          type: 'bible',
          reference: 'Bible Acts 7:6',
          title: 'Stephen\'s Speech',
          description: 'Christian account of Israelite history including Egypt',
          relevance: 'historical',
          keywords: ['Israelite history', 'Egypt', 'divine promise', 'prophetic fulfillment']
        }
      ],
      crossReferences: ['Quran 2:49', 'Bible Acts 7:6'],
      themes: [CROSS_TEXT_THEMES.HISTORICAL, CROSS_TEXT_THEMES.PROPHECY],
      keywords: ['exodus', 'Israelite history', 'Egypt', 'divine deliverance'],
      seoDescription: 'Exodus narrative - explore Israelite history across Jewish, Islamic, and Christian traditions'
    })

    // Deuteronomy 6:4 - Shema
    this.interlinkData.set('torah-deuteronomy-6-4', {
      relatedTexts: [
        {
          type: 'quran',
          reference: 'Quran 112:1',
          title: 'Surah Al-Ikhlas',
          description: 'Quranic declaration of divine unity',
          relevance: 'parallel',
          keywords: ['divine unity', 'monotheism', 'faith declaration', 'core belief']
        },
        {
          type: 'bible',
          reference: 'Bible Mark 12:29',
          title: 'Jesus on the Greatest Commandment',
          description: 'Jesus\' reference to the Shema as the greatest commandment',
          relevance: 'thematic',
          keywords: ['greatest commandment', 'divine love', 'monotheism', 'spiritual priority']
        }
      ],
      crossReferences: ['Quran 112:1', 'Bible Mark 12:29'],
      themes: [CROSS_TEXT_THEMES.MONOTHEISM, CROSS_TEXT_THEMES.FAITH],
      keywords: ['Shema', 'divine unity', 'monotheism', 'core commandment'],
      seoDescription: 'The Shema - Jewish declaration of faith - compare with Islamic and Christian monotheistic teachings'
    })
  }

  // Get interlinks for a specific verse
  static getInterlinks(textType: 'quran' | 'bible' | 'torah', reference: string): VerseInterlinks | null {
    const key = `${textType}-${reference.toLowerCase().replace(/[:\s]/g, '-')}`
    return this.interlinkData.get(key) || null
  }

  // Get related texts for a verse
  static getRelatedTexts(textType: 'quran' | 'bible' | 'torah', reference: string): RelatedText[] {
    const interlinks = this.getInterlinks(textType, reference)
    return interlinks?.relatedTexts || []
  }

  // Get cross-references for a verse
  static getCrossReferences(textType: 'quran' | 'bible' | 'torah', reference: string): string[] {
    const interlinks = this.getInterlinks(textType, reference)
    return interlinks?.crossReferences || []
  }

  // Get themes for a verse
  static getThemes(textType: 'quran' | 'bible' | 'torah', reference: string): string[] {
    const interlinks = this.getInterlinks(textType, reference)
    return interlinks?.themes || []
  }

  // Get SEO keywords for a verse
  static getSEOKeywords(textType: 'quran' | 'bible' | 'torah', reference: string): string[] {
    const interlinks = this.getInterlinks(textType, reference)
    return interlinks?.keywords || []
  }

  // Get SEO description for a verse
  static getSEODescription(textType: 'quran' | 'bible' | 'torah', reference: string): string {
    const interlinks = this.getInterlinks(textType, reference)
    return interlinks?.seoDescription || ''
  }

  // Search for verses by theme
  static searchByTheme(theme: string): string[] {
    const results: string[] = []
    for (const [key, interlinks] of this.interlinkData.entries()) {
      if (interlinks.themes.includes(theme)) {
        results.push(key)
      }
    }
    return results
  }

  // Search for verses by keyword
  static searchByKeyword(keyword: string): string[] {
    const results: string[] = []
    for (const [key, interlinks] of this.interlinkData.entries()) {
      if (interlinks.keywords.some(k => k.toLowerCase().includes(keyword.toLowerCase()))) {
        results.push(key)
      }
    }
    return results
  }

  // Get all interlinked verses
  static getAllInterlinkedVerses(): string[] {
    return Array.from(this.interlinkData.keys())
  }

  // Get statistics about interlinks
  static getInterlinkStats() {
    const totalVerses = this.interlinkData.size
    const totalRelatedTexts = Array.from(this.interlinkData.values())
      .reduce((sum, interlinks) => sum + interlinks.relatedTexts.length, 0)
    const totalCrossReferences = Array.from(this.interlinkData.values())
      .reduce((sum, interlinks) => sum + interlinks.crossReferences.length, 0)
    
    return {
      totalVerses,
      totalRelatedTexts,
      totalCrossReferences,
      averageRelatedTextsPerVerse: totalRelatedTexts / totalVerses,
      averageCrossReferencesPerVerse: totalCrossReferences / totalVerses
    }
  }
}

// Initialize interlinks when module is loaded
InterlinkingService.initializeInterlinks() 