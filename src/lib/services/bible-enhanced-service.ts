import { 
  BibleVerse, 
  BibleTranslation, 
  BibleBook, 
  BibleWordStudy, 
  BibleOriginalLanguage, 
  BibleShareOptions, 
  BibleStudyNote,
  BibleCommentary,
  BibleConcordance,
  BibleDictionary,
  BibleMap,
  BiblePrayerEntry,
  BibleReadingPlan,
  BibleStudySession,
  BibleTimeline
} from "@/types/bible"

// Import the local Bible data
import bibleData from "@/data/bible-data.json"

interface LocalBibleData {
  [book: string]: {
    name: string
    chapters: number
    testament: string
    data: {
      [chapter: string]: {
        reference: string
        text: string
        translation: string
        context: string
        crossReferences: string[]
        commentary: string
        relatedVerses: string[]
      }[]
    }
  }
}

// Available Translations
export const TRANSLATIONS: BibleTranslation[] = [
  {
    id: "WEB",
    name: "World English Bible",
    language: "English",
    copyright: "Public Domain",
    source: "LOCAL"
  },
  {
    id: "KJV",
    name: "King James Version",
    language: "English",
    copyright: "Public Domain",
    source: "LOCAL"
  },
  {
    id: "ASV",
    name: "American Standard Version",
    language: "English",
    copyright: "Public Domain",
    source: "LOCAL"
  }
]

// Bible book information with correct chapter counts
const BIBLE_BOOKS = {
  'genesis': { name: 'Genesis', chapters: 50, testament: 'Old' },
  'exodus': { name: 'Exodus', chapters: 40, testament: 'Old' },
  'leviticus': { name: 'Leviticus', chapters: 27, testament: 'Old' },
  'numbers': { name: 'Numbers', chapters: 36, testament: 'Old' },
  'deuteronomy': { name: 'Deuteronomy', chapters: 34, testament: 'Old' },
  'joshua': { name: 'Joshua', chapters: 24, testament: 'Old' },
  'judges': { name: 'Judges', chapters: 21, testament: 'Old' },
  'ruth': { name: 'Ruth', chapters: 4, testament: 'Old' },
  '1-samuel': { name: '1 Samuel', chapters: 31, testament: 'Old' },
  '2-samuel': { name: '2 Samuel', chapters: 24, testament: 'Old' },
  '1-kings': { name: '1 Kings', chapters: 22, testament: 'Old' },
  '2-kings': { name: '2 Kings', chapters: 25, testament: 'Old' },
  '1-chronicles': { name: '1 Chronicles', chapters: 29, testament: 'Old' },
  '2-chronicles': { name: '2 Chronicles', chapters: 36, testament: 'Old' },
  'ezra': { name: 'Ezra', chapters: 10, testament: 'Old' },
  'nehemiah': { name: 'Nehemiah', chapters: 13, testament: 'Old' },
  'esther': { name: 'Esther', chapters: 10, testament: 'Old' },
  'job': { name: 'Job', chapters: 42, testament: 'Old' },
  'psalms': { name: 'Psalms', chapters: 150, testament: 'Old' },
  'proverbs': { name: 'Proverbs', chapters: 31, testament: 'Old' },
  'ecclesiastes': { name: 'Ecclesiastes', chapters: 12, testament: 'Old' },
  'song-of-solomon': { name: 'Song of Solomon', chapters: 8, testament: 'Old' },
  'isaiah': { name: 'Isaiah', chapters: 66, testament: 'Old' },
  'jeremiah': { name: 'Jeremiah', chapters: 52, testament: 'Old' },
  'lamentations': { name: 'Lamentations', chapters: 5, testament: 'Old' },
  'ezekiel': { name: 'Ezekiel', chapters: 48, testament: 'Old' },
  'daniel': { name: 'Daniel', chapters: 12, testament: 'Old' },
  'hosea': { name: 'Hosea', chapters: 14, testament: 'Old' },
  'joel': { name: 'Joel', chapters: 3, testament: 'Old' },
  'amos': { name: 'Amos', chapters: 9, testament: 'Old' },
  'obadiah': { name: 'Obadiah', chapters: 1, testament: 'Old' },
  'jonah': { name: 'Jonah', chapters: 4, testament: 'Old' },
  'micah': { name: 'Micah', chapters: 7, testament: 'Old' },
  'nahum': { name: 'Nahum', chapters: 3, testament: 'Old' },
  'habakkuk': { name: 'Habakkuk', chapters: 3, testament: 'Old' },
  'zephaniah': { name: 'Zephaniah', chapters: 3, testament: 'Old' },
  'haggai': { name: 'Haggai', chapters: 2, testament: 'Old' },
  'zechariah': { name: 'Zechariah', chapters: 14, testament: 'Old' },
  'malachi': { name: 'Malachi', chapters: 4, testament: 'Old' },
  'matthew': { name: 'Matthew', chapters: 28, testament: 'New' },
  'mark': { name: 'Mark', chapters: 16, testament: 'New' },
  'luke': { name: 'Luke', chapters: 24, testament: 'New' },
  'john': { name: 'John', chapters: 21, testament: 'New' },
  'acts': { name: 'Acts', chapters: 28, testament: 'New' },
  'romans': { name: 'Romans', chapters: 16, testament: 'New' },
  '1-corinthians': { name: '1 Corinthians', chapters: 16, testament: 'New' },
  '2-corinthians': { name: '2 Corinthians', chapters: 13, testament: 'New' },
  'galatians': { name: 'Galatians', chapters: 6, testament: 'New' },
  'ephesians': { name: 'Ephesians', chapters: 6, testament: 'New' },
  'philippians': { name: 'Philippians', chapters: 4, testament: 'New' },
  'colossians': { name: 'Colossians', chapters: 4, testament: 'New' },
  '1-thessalonians': { name: '1 Thessalonians', chapters: 5, testament: 'New' },
  '2-thessalonians': { name: '2 Thessalonians', chapters: 3, testament: 'New' },
  '1-timothy': { name: '1 Timothy', chapters: 6, testament: 'New' },
  '2-timothy': { name: '2 Timothy', chapters: 4, testament: 'New' },
  'titus': { name: 'Titus', chapters: 3, testament: 'New' },
  'philemon': { name: 'Philemon', chapters: 1, testament: 'New' },
  'hebrews': { name: 'Hebrews', chapters: 13, testament: 'New' },
  'james': { name: 'James', chapters: 5, testament: 'New' },
  '1-peter': { name: '1 Peter', chapters: 5, testament: 'New' },
  '2-peter': { name: '2 Peter', chapters: 3, testament: 'New' },
  '1-john': { name: '1 John', chapters: 5, testament: 'New' },
  '2-john': { name: '2 John', chapters: 1, testament: 'New' },
  '3-john': { name: '3 John', chapters: 1, testament: 'New' },
  'jude': { name: 'Jude', chapters: 1, testament: 'New' },
  'revelation': { name: 'Revelation', chapters: 22, testament: 'New' }
}

class BibleEnhancedService {
  private data: LocalBibleData
  private defaultTranslation = "WEB"

  constructor() {
    this.data = bibleData as LocalBibleData
  }

  // Validate book and chapter before processing
  private validateBookAndChapter(book: string, chapter: number): { isValid: boolean; bookInfo?: any; error?: string } {
    const bookKey = this.normalizeBookName(book)
    const bookInfo = BIBLE_BOOKS[bookKey]
    
    if (!bookInfo) {
      return { isValid: false, error: `Book not found: ${book}` }
    }
    
    if (chapter < 1 || chapter > bookInfo.chapters) {
      return { isValid: false, error: `Chapter ${chapter} does not exist in ${bookInfo.name}. Valid chapters: 1-${bookInfo.chapters}` }
    }
    
    return { isValid: true, bookInfo }
  }

  async getChapter(book: string, chapter: number, translation: string = this.defaultTranslation): Promise<BibleVerse[]> {
    const validation = this.validateBookAndChapter(book, chapter)
    if (!validation.isValid) {
      throw new Error(validation.error)
    }

    const bookKey = this.normalizeBookName(book)
    const chapterKey = chapter.toString()
    
    // Check if data exists
    if (!this.data[bookKey] || !this.data[bookKey].data || !this.data[bookKey].data[chapterKey]) {
      throw new Error(`Chapter data not found: ${book} ${chapter}`)
    }

    const chapterData = this.data[bookKey].data[chapterKey]
    if (!Array.isArray(chapterData) || chapterData.length === 0) {
      throw new Error(`No verses found in ${book} ${chapter}`)
    }

    // Filter by translation and convert to BibleVerse format
    const verses = chapterData
      .filter(verse => verse.translation === translation)
      .map(verse => ({
        reference: verse.reference,
        text: verse.text,
        translation: verse.translation,
        context: verse.context || `From ${validation.bookInfo.name} chapter ${chapter}`,
        crossReferences: verse.crossReferences || [],
        commentary: verse.commentary || "",
        relatedVerses: verse.relatedVerses || []
      }))

    if (verses.length === 0) {
      throw new Error(`No verses found for translation ${translation} in ${book} ${chapter}`)
    }

    return verses.sort((a, b) => {
      const aNum = parseInt(a.reference.split(':')[1])
      const bNum = parseInt(b.reference.split(':')[1])
      return aNum - bNum
    })
  }

  async getVerse(book: string, chapter: number, verse: number, translation: string = this.defaultTranslation): Promise<BibleVerse | null> {
    const validation = this.validateBookAndChapter(book, chapter)
    if (!validation.isValid) {
      throw new Error(validation.error)
    }

    const bookKey = this.normalizeBookName(book)
    const chapterKey = chapter.toString()
    
    if (!this.data[bookKey] || !this.data[bookKey].data || !this.data[bookKey].data[chapterKey]) {
      return null
    }

    const chapterData = this.data[bookKey].data[chapterKey]
    const verseData = chapterData.find(v => {
      const verseNum = parseInt(v.reference.split(':')[1])
      return verseNum === verse && v.translation === translation
    })

    if (!verseData) return null

    return {
      reference: verseData.reference,
      text: verseData.text,
      translation: verseData.translation,
      context: verseData.context || `From ${validation.bookInfo.name} chapter ${chapter}`,
      crossReferences: verseData.crossReferences || [],
      commentary: verseData.commentary || "",
      relatedVerses: verseData.relatedVerses || []
    }
  }

  async getAllBooks(): Promise<BibleBook[]> {
    return Object.entries(BIBLE_BOOKS).map(([key, info]) => ({
      id: key,
      name: info.name,
      testament: info.testament,
      chapters: info.chapters,
      description: `${info.name} - ${info.testament} Testament`
    }))
  }

  async getBookInfo(book: string): Promise<BibleBook | null> {
    const bookKey = this.normalizeBookName(book)
    const bookInfo = BIBLE_BOOKS[bookKey]
    
    if (!bookInfo) return null
    
    return {
      id: bookKey,
      name: bookInfo.name,
      testament: bookInfo.testament,
      chapters: bookInfo.chapters,
      description: `${bookInfo.name} - ${bookInfo.testament} Testament`
    }
  }

  async searchVerses(query: string, translation: string = this.defaultTranslation): Promise<BibleVerse[]> {
    const results: BibleVerse[] = []
    
    for (const [bookKey, bookInfo] of Object.entries(BIBLE_BOOKS)) {
      if (!this.data[bookKey] || !this.data[bookKey].data) continue
      
      for (const [chapterKey, chapterData] of Object.entries(this.data[bookKey].data)) {
        if (!Array.isArray(chapterData)) continue
        
        for (const verse of chapterData) {
          if (verse.translation === translation && 
              (verse.text.toLowerCase().includes(query.toLowerCase()) || 
               verse.reference.toLowerCase().includes(query.toLowerCase()))) {
            results.push({
              reference: verse.reference,
              text: verse.text,
              translation: verse.translation,
              context: verse.context || `From ${bookInfo.name} chapter ${chapterKey}`,
              crossReferences: verse.crossReferences || [],
              commentary: verse.commentary || "",
              relatedVerses: verse.relatedVerses || []
            })
          }
        }
      }
    }
    
    return results.slice(0, 50) // Limit results
  }

  async getAvailableTranslations(): Promise<BibleTranslation[]> {
    return TRANSLATIONS
  }

  // Helper methods
  private normalizeBookName(book: string): string {
    return book.toLowerCase().replace(/\s+/g, '-')
  }

  private formatBookName(book: string): string {
    const bookKey = this.normalizeBookName(book)
    return BIBLE_BOOKS[bookKey]?.name || book
  }

  // Additional methods for enhanced functionality
  async getChapterSummary(book: string, chapter: number): Promise<string> {
    const validation = this.validateBookAndChapter(book, chapter)
    if (!validation.isValid) {
      throw new Error(validation.error)
    }
    
    return `Chapter ${chapter} of ${validation.bookInfo.name}`
  }

  async getBookSummary(book: string): Promise<string> {
    const bookInfo = await this.getBookInfo(book)
    if (!bookInfo) {
      throw new Error(`Book not found: ${book}`)
    }
    
    return `${bookInfo.name} is a book in the ${bookInfo.testament} Testament with ${bookInfo.chapters} chapters.`
  }

  // Validation methods
  isValidBook(book: string): boolean {
    const bookKey = this.normalizeBookName(book)
    return bookKey in BIBLE_BOOKS
  }

  isValidChapter(book: string, chapter: number): boolean {
    const bookKey = this.normalizeBookName(book)
    const bookInfo = BIBLE_BOOKS[bookKey]
    return bookInfo && chapter >= 1 && chapter <= bookInfo.chapters
  }

  getBookChapters(book: string): number {
    const bookKey = this.normalizeBookName(book)
    return BIBLE_BOOKS[bookKey]?.chapters || 0
  }

  // Returns a random verse from the entire Bible (default translation: WEB)
  async getVerseOfDay(translation: string = this.defaultTranslation): Promise<BibleVerse> {
    const bookKeys = Object.keys(this.data)
    while (true) {
      const bookKey = bookKeys[Math.floor(Math.random() * bookKeys.length)]
      const book = this.data[bookKey]
      const chapterKeys = Object.keys(book.data)
      if (chapterKeys.length === 0) continue
      const chapterKey = chapterKeys[Math.floor(Math.random() * chapterKeys.length)]
      const verses = book.data[chapterKey].filter(v => v.translation === translation)
      if (verses.length === 0) continue
      const verse = verses[Math.floor(Math.random() * verses.length)]
      return {
        reference: verse.reference,
        text: verse.text,
        translation: verse.translation,
        context: verse.context || `From ${book.name} chapter ${chapterKey}`,
        crossReferences: verse.crossReferences || [],
        commentary: verse.commentary || "",
        relatedVerses: verse.relatedVerses || []
      }
    }
  }
}

// Export singleton instance
export const bibleEnhancedService = new BibleEnhancedService()
