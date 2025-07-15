import { 
  TorahPortion, 
  TorahChapter, 
  TorahVerse, 
  TorahTranslation,
  TorahBook,
  TorahCommentary
} from "@/types/torah"

// Import Torah data
import torahData from "@/data/torah-data.json"

interface LocalTorahData {
  [portion: string]: {
  name: string
  hebrewName: string
    transliteratedName: string
  book: string
    chapters: string[]
  verses: number
  summary: string
  themes: string[]
    haftarah: string
    data: {
      [chapter: string]: {
        reference: string
        hebrewText: string
        englishText: string
        transliteration: string
        commentary: string
        rashi: string
        ibnEzra: string
        rambam: string
        chabad: string
        artscroll: string
        context: string
        crossReferences: string[]
        relatedVerses: string[]
      }[]
    }
  }
}

// Available Translations
export const TORAH_TRANSLATIONS: TorahTranslation[] = [
  {
    id: "HEBREW",
    name: "Hebrew Text",
    language: "Hebrew",
    copyright: "Public Domain",
    source: "LOCAL"
  },
  {
    id: "ENGLISH",
    name: "English Translation",
    language: "English", 
    copyright: "Public Domain",
    source: "LOCAL"
  },
  {
    id: "TRANSLITERATION",
    name: "Transliteration",
    language: "English",
    copyright: "Public Domain", 
    source: "LOCAL"
  }
]

// Torah book information
const TORAH_BOOKS: TorahBook[] = [
  {
    name: "Bereshit",
    englishName: "Genesis",
    hebrewName: "בְּרֵאשִׁית",
    chapters: 50,
    portions: [
      "bereshit", "noach", "lech-lecha", "vayera", "chayei-sarah",
      "toldot", "vayetzei", "vayishlach", "vayeshev", "miketz",
      "vayigash", "vayechi"
    ]
  },
  {
    name: "Shemot", 
    englishName: "Exodus",
    hebrewName: "שְׁמוֹת",
    chapters: 40,
    portions: [
      "shemot", "vaera", "bo", "beshalach", "yitro",
      "mishpatim", "terumah", "tetzaveh", "ki-tisa", "vayakhel",
      "pekudei"
    ]
  },
  {
    name: "Vayikra",
    englishName: "Leviticus", 
    hebrewName: "וַיִּקְרָא",
    chapters: 27,
    portions: [
      "vayikra", "tzav", "shmini", "tazria", "metzora",
      "achrei-mot", "kedoshim", "emor", "behar", "bechukotai"
    ]
  },
  {
    name: "Bamidbar",
    englishName: "Numbers",
    hebrewName: "בְּמִדְבַּר", 
    chapters: 36,
    portions: [
      "bamidbar", "nasso", "beha'alotcha", "sh'lach", "korach",
      "chukat", "balak", "pinchas", "matot", "masei"
    ]
  },
  {
    name: "Devarim",
    englishName: "Deuteronomy",
    hebrewName: "דְּבָרִים",
    chapters: 34, 
    portions: [
      "devarim", "vaetchanan", "eikev", "reeh", "shoftim",
      "ki-teitzei", "ki-tavo", "nitzavim", "vayeilech", "ha'azinu",
      "vezot-haberachah"
    ]
  }
]

// All 54 weekly portions (parashot)
const ALL_PORTIONS = [
  // Bereshit (Genesis)
  "bereshit", "noach", "lech-lecha", "vayera", "chayei-sarah",
  "toldot", "vayetzei", "vayishlach", "vayeshev", "miketz",
  "vayigash", "vayechi",
  
  // Shemot (Exodus)  
  "shemot", "vaera", "bo", "beshalach", "yitro",
  "mishpatim", "terumah", "tetzaveh", "ki-tisa", "vayakhel",
  "pekudei",
  
  // Vayikra (Leviticus)
  "vayikra", "tzav", "shmini", "tazria", "metzora",
  "achrei-mot", "kedoshim", "emor", "behar", "bechukotai",
  
  // Bamidbar (Numbers)
  "bamidbar", "nasso", "beha'alotcha", "sh'lach", "korach", 
  "chukat", "balak", "pinchas", "matot", "masei",
  
  // Devarim (Deuteronomy)
  "devarim", "vaetchanan", "eikev", "reeh", "shoftim",
  "ki-teitzei", "ki-tavo", "nitzavim", "vayeilech", "ha'azinu",
  "vezot-haberachah"
]

class TorahService {
  private data: LocalTorahData
  private defaultTranslation = "ENGLISH"

  constructor() {
    this.data = torahData as LocalTorahData
  }

  // Get all Torah books
  async getAllBooks(): Promise<TorahBook[]> {
    return TORAH_BOOKS
  }

  // Get book by name
  async getBook(bookName: string): Promise<TorahBook | null> {
    return TORAH_BOOKS.find(book => 
      book.name.toLowerCase() === bookName.toLowerCase() ||
      book.englishName.toLowerCase() === bookName.toLowerCase()
    ) || null
  }

  // Get all portions
  async getAllPortions(): Promise<TorahPortion[]> {
    return ALL_PORTIONS.map(portionKey => {
      const portion = this.data[portionKey]
      if (!portion) return null
      
      return {
        key: portionKey,
        name: portion.name,
        hebrewName: portion.hebrewName,
        transliteratedName: portion.transliteratedName,
        book: portion.book,
        chapters: portion.chapters,
        verses: portion.verses,
        summary: portion.summary,
        themes: portion.themes,
        haftarah: portion.haftarah
      }
    }).filter(Boolean) as TorahPortion[]
      }

  // Get portion by key
  async getPortion(portionKey: string): Promise<TorahPortion | null> {
    const portion = this.data[portionKey]
    if (!portion) return null

    return {
      key: portionKey,
      name: portion.name,
      hebrewName: portion.hebrewName,
      transliteratedName: portion.transliteratedName,
      book: portion.book,
      chapters: portion.chapters,
      verses: portion.verses,
      summary: portion.summary,
      themes: portion.themes,
      haftarah: portion.haftarah
    }
  }

  // Get chapter from portion
  async getChapter(portionKey: string, chapter: string, translation: string = this.defaultTranslation): Promise<TorahVerse[]> {
    const portion = this.data[portionKey]
    if (!portion || !portion.data[chapter]) {
      throw new Error(`Chapter not found: ${portionKey} ${chapter}`)
    }

    const chapterData = portion.data[chapter]
    return chapterData.map(verse => ({
      reference: verse.reference,
      hebrewText: verse.hebrewText,
      englishText: verse.englishText,
      transliteration: verse.transliteration,
      commentary: verse.commentary,
      rashi: verse.rashi,
      ibnEzra: verse.ibnEzra,
      rambam: verse.rambam,
      chabad: verse.chabad,
      artscroll: verse.artscroll,
      context: verse.context,
      crossReferences: verse.crossReferences,
      relatedVerses: verse.relatedVerses
    }))
  }

  // Get verse from portion and chapter
  async getVerse(portionKey: string, chapter: string, verseNumber: number, translation: string = this.defaultTranslation): Promise<TorahVerse | null> {
    const portion = this.data[portionKey]
    if (!portion || !portion.data[chapter]) return null

    const chapterData = portion.data[chapter]
    const verse = chapterData.find(v => {
      const verseNum = parseInt(v.reference.split(':')[1])
      return verseNum === verseNumber
    })

    if (!verse) return null

    return {
      reference: verse.reference,
      hebrewText: verse.hebrewText,
      englishText: verse.englishText,
      transliteration: verse.transliteration,
      commentary: verse.commentary,
      rashi: verse.rashi,
      ibnEzra: verse.ibnEzra,
      rambam: verse.rambam,
      chabad: verse.chabad,
      artscroll: verse.artscroll,
      context: verse.context,
      crossReferences: verse.crossReferences,
      relatedVerses: verse.relatedVerses
    }
      }

  // Get available translations
  async getAvailableTranslations(): Promise<TorahTranslation[]> {
    return TORAH_TRANSLATIONS
  }

  // Search verses
  async searchVerses(query: string, translation: string = this.defaultTranslation): Promise<TorahVerse[]> {
    const results: TorahVerse[] = []
    
    for (const portionKey of ALL_PORTIONS) {
      const portion = this.data[portionKey]
      if (!portion) continue

      for (const chapterKey of Object.keys(portion.data)) {
        const chapterData = portion.data[chapterKey]
        
        for (const verse of chapterData) {
          const searchText = translation === "HEBREW" ? verse.hebrewText :
                           translation === "ENGLISH" ? verse.englishText :
                           verse.transliteration

          if (searchText.toLowerCase().includes(query.toLowerCase())) {
              results.push({
              reference: verse.reference,
              hebrewText: verse.hebrewText,
              englishText: verse.englishText,
                transliteration: verse.transliteration,
              commentary: verse.commentary,
              rashi: verse.rashi,
              ibnEzra: verse.ibnEzra,
              rambam: verse.rambam,
              chabad: verse.chabad,
              artscroll: verse.artscroll,
              context: verse.context,
              crossReferences: verse.crossReferences,
              relatedVerses: verse.relatedVerses
              })
            }
          }
        }
      }

    return results
  }

  // Get portion summary
  async getPortionSummary(portionKey: string): Promise<string> {
    const portion = this.data[portionKey]
    return portion?.summary || "Summary not available"
  }

  // Get portion themes
  async getPortionThemes(portionKey: string): Promise<string[]> {
    const portion = this.data[portionKey]
    return portion?.themes || []
  }

  // Validate portion exists
  isValidPortion(portionKey: string): boolean {
    return ALL_PORTIONS.includes(portionKey)
  }

  // Validate chapter exists in portion
  isValidChapter(portionKey: string, chapter: string): boolean {
    const portion = this.data[portionKey]
    return portion?.data[chapter] !== undefined
  }

  // Get portion chapters
  getPortionChapters(portionKey: string): string[] {
    const portion = this.data[portionKey]
    return portion?.chapters || []
  }

  // Get verse of the day (random verse from available data)
  async getVerseOfDay(): Promise<any> {
    // Get a random portion
    const randomPortionKey = ALL_PORTIONS[Math.floor(Math.random() * ALL_PORTIONS.length)]
    const portion = this.data[randomPortionKey]
    
    if (!portion) {
      return {
        reference: "Bereshit 1:1",
        hebrew: "בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ",
        english: "In the beginning God created the heavens and the earth.",
        transliteration: "Bereishit bara Elohim et hashamayim ve'et ha'aretz",
        parsha: "Bereshit"
      }
    }

    // Get a random chapter
    const chapterKeys = Object.keys(portion.data)
    const randomChapterKey = chapterKeys[Math.floor(Math.random() * chapterKeys.length)]
    const chapter = portion.data[randomChapterKey]
    
    if (!chapter || chapter.length === 0) {
      return {
        reference: "Bereshit 1:1",
        hebrew: "בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ",
        english: "In the beginning God created the heavens and the earth.",
        transliteration: "Bereishit bara Elohim et hashamayim ve'et ha'aretz",
        parsha: "Bereshit"
      }
    }

    // Get a random verse
    const randomVerse = chapter[Math.floor(Math.random() * chapter.length)]
    
    return {
      reference: randomVerse.reference,
      hebrew: randomVerse.hebrewText,
      english: randomVerse.englishText,
      transliteration: randomVerse.transliteration,
      parsha: portion.name
    }
  }

  // Get current parasha (for now, return a default one)
  async getCurrentParasha(): Promise<any> {
    const portion = this.data['bereshit']
    if (!portion) {
      return {
        name: "Bereshit",
        hebrewName: "בְּרֵאשִׁית",
        book: "Bereshit",
        chapters: "1-6",
        summary: "The creation of the world and the beginning of human history",
        themes: ["Creation", "Beginnings", "Divine Order"]
      }
    }

    return {
      name: portion.name,
      hebrewName: portion.hebrewName,
      book: portion.book,
      chapters: portion.chapters.join(", "),
      summary: portion.summary,
      themes: portion.themes
    }
  }

  // Get all books (alias for getAllBooks)
  async getBooks(): Promise<TorahBook[]> {
    return this.getAllBooks()
  }
}

export const torahService = new TorahService() 