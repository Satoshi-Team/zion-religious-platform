import bibleData from '@/data/bible-data.json'

export interface BibleVerse {
  reference: string
  text: string
  translation: string
  context: string
  crossReferences: string[]
  commentary: string
  relatedVerses: string[]
}

export interface BibleChapter {
  verses: BibleVerse[]
  chapterNumber: number
  bookName: string
}

export class BibleWebService {
  private getBookApiName(book: string): string {
    const bookMappings: { [key: string]: string } = {
      'genesis': 'genesis',
      'exodus': 'exodus',
      'leviticus': 'leviticus',
      'numbers': 'numbers',
      'deuteronomy': 'deuteronomy',
      'joshua': 'joshua',
      'judges': 'judges',
      'ruth': 'ruth',
      '1-samuel': '1+samuel',
      '2-samuel': '2+samuel',
      '1-kings': '1+kings',
      '2-kings': '2+kings',
      '1-chronicles': '1+chronicles',
      '2-chronicles': '2+chronicles',
      'ezra': 'ezra',
      'nehemiah': 'nehemiah',
      'esther': 'esther',
      'job': 'job',
      'psalms': 'psalms',
      'proverbs': 'proverbs',
      'ecclesiastes': 'ecclesiastes',
      'song-of-solomon': 'song+of+solomon',
      'isaiah': 'isaiah',
      'jeremiah': 'jeremiah',
      'lamentations': 'lamentations',
      'ezekiel': 'ezekiel',
      'daniel': 'daniel',
      'hosea': 'hosea',
      'joel': 'joel',
      'amos': 'amos',
      'obadiah': 'obadiah',
      'jonah': 'jonah',
      'micah': 'micah',
      'nahum': 'nahum',
      'habakkuk': 'habakkuk',
      'zephaniah': 'zephaniah',
      'haggai': 'haggai',
      'zechariah': 'zechariah',
      'malachi': 'malachi',
      'matthew': 'matthew',
      'mark': 'mark',
      'luke': 'luke',
      'john': 'john',
      'acts': 'acts',
      'romans': 'romans',
      '1-corinthians': '1+corinthians',
      '2-corinthians': '2+corinthians',
      'galatians': 'galatians',
      'ephesians': 'ephesians',
      'philippians': 'philippians',
      'colossians': 'colossians',
      '1-thessalonians': '1+thessalonians',
      '2-thessalonians': '2+thessalonians',
      '1-timothy': '1+timothy',
      '2-timothy': '2+timothy',
      'titus': 'titus',
      'philemon': 'philemon',
      'hebrews': 'hebrews',
      'james': 'james',
      '1-peter': '1+peter',
      '2-peter': '2+peter',
      '1-john': '1+john',
      '2-john': '2+john',
      '3-john': '3+john',
      'jude': 'jude',
      'revelation': 'revelation'
    }
    return bookMappings[book.toLowerCase()] || book.toLowerCase().replace(/\s+/g, '')
    }

  async getChapter(book: string, chapter: number, translation: string = 'WEB'): Promise<BibleChapter> {
    try {
      // Use local data first
      const localData = await this.getChapterFromLocalData(book, chapter)
      if (localData && localData.verses.length > 0) {
        return localData
      }

      // Fallback to API if local data is not available
      const apiData = await this.getChapterFromAPI(book, chapter, translation)
        return {
        verses: apiData,
        chapterNumber: chapter,
        bookName: book
      }
    } catch (error) {
      console.error(`Error getting chapter ${book} ${chapter}:`, error)
      throw new Error(`Unable to load ${book} Chapter ${chapter} at this time. Please try again later or contact support if the issue persists.`)
      }
    }

  private async getChapterFromLocalData(book: string, chapter: number): Promise<BibleChapter | null> {
    try {
      const bookKey = book.toLowerCase().replace(/\s+/g, '-')
      const bookData = (bibleData as any)[bookKey]
      
      if (!bookData) {
        console.log(`Book ${bookKey} not found in local data`)
        return null
      }

      const chapterData = bookData.data[chapter.toString()]
      if (!chapterData || !Array.isArray(chapterData) || chapterData.length === 0) {
        console.log(`Chapter ${chapter} not found in local data for ${bookKey}`)
        return null
      }

      // Convert to BibleVerse format
      const verses: BibleVerse[] = chapterData.map((verse: any) => ({
        reference: verse.reference,
        text: verse.text,
        translation: verse.translation,
        context: verse.context || "",
        crossReferences: verse.crossReferences || [],
        commentary: verse.commentary || "",
        relatedVerses: verse.relatedVerses || []
      }))
    
    return {
        verses,
        chapterNumber: chapter,
        bookName: bookData.name
      }
    } catch (error) {
      console.error(`Error reading local data for ${book} ${chapter}:`, error)
      return null
    }
  }

  private async getChapterFromAPI(book: string, chapter: number, translation: string): Promise<BibleVerse[]> {
    try {
      const bookApiName = this.getBookApiName(book)
      const url = `https://bible-api.com/${bookApiName}+${chapter}?translation=${translation.toLowerCase()}`
      
      console.log(`Fetching Bible API: ${url}`)
      const response = await fetch(url)
      
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`)
      }
      
      const data = await response.json()
      
      if (!data.verses || !Array.isArray(data.verses)) {
        throw new Error('Invalid API response format')
      }
      
      return data.verses.map((verse: any) => ({
        reference: `${book} ${chapter}:${verse.verse}`,
        text: verse.text,
        translation: translation,
      context: "",
      crossReferences: [],
      commentary: "",
      relatedVerses: []
      }))
    } catch (error) {
      console.error(`Bible API error for ${book} ${chapter}:`, error.message)
      throw new Error(`Unable to load ${book} Chapter ${chapter} at this time. Please try again later or contact support if the issue persists.`)
    }
  }

  async getBooks(): Promise<string[]> {
    return Object.keys(bibleData).map(key => (bibleData as any)[key].name)
  }

  async getChaptersForBook(book: string): Promise<number[]> {
    const bookKey = book.toLowerCase().replace(/\s+/g, '-')
    const bookData = (bibleData as any)[bookKey]
    
    if (!bookData) {
      return []
    }

    return Array.from({ length: bookData.chapters }, (_, i) => i + 1)
  }
}

// Export a singleton instance
export const bibleWebService = new BibleWebService() 