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
import { Redis } from "@upstash/redis"

interface BibleQuiz {
  id: string
  title: string
  description: string
  difficulty: "beginner" | "intermediate" | "advanced"
  timeLimit: number
  passingScore: number
  questions: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
    reference: string
  }[]
}

// API Configuration
const API_CONFIG = {
  BIBLE_API: "https://api.scripture.api.bible/v1",
  BIBLE_GATEWAY: "https://www.biblegateway.com/passage",
  ESV_API: "https://api.esv.org/v3/passage/text",
  OPEN_BIBLE: "https://openbible.com/api",
  BIBLE_CLOUD: "https://biblecloud.com/api/v1",
  BIBLE_IS: "https://api.bible.is/v1",
  BIBLE_GET: "https://bible.get/api/v1",
  BIBLE_REF: "https://bible.ref/api/v1",
}

// Available Translations
export const TRANSLATIONS: BibleTranslation[] = [
  {
    id: "NIV",
    name: "New International Version",
    language: "English",
    copyright: "© 2011 Biblica, Inc.",
    source: "BIBLE_API"
  },
  {
    id: "ESV",
    name: "English Standard Version",
    language: "English",
    copyright: "© 2001 Crossway",
    source: "ESV_API"
  },
  {
    id: "KJV",
    name: "King James Version",
    language: "English",
    copyright: "Public Domain",
    source: "BIBLE_API"
  },
  {
    id: "NLT",
    name: "New Living Translation",
    language: "English",
    copyright: "© 1996, 2004, 2015 Tyndale House Foundation",
    source: "BIBLE_API"
  },
  {
    id: "NASB",
    name: "New American Standard Bible",
    language: "English",
    copyright: "© 1960, 1962, 1963, 1968, 1971, 1972, 1973, 1975, 1977, 1995 by The Lockman Foundation",
    source: "BIBLE_API"
  },
  {
    id: "CSB",
    name: "Christian Standard Bible",
    language: "English",
    copyright: "© 2017 Holman Bible Publishers",
    source: "BIBLE_API"
  },
  {
    id: "NKJV",
    name: "New King James Version",
    language: "English",
    copyright: "© 1982 Thomas Nelson",
    source: "BIBLE_API"
  },
  {
    id: "RSV",
    name: "Revised Standard Version",
    language: "English",
    copyright: "© 1946, 1952, 1971, 1973 National Council of Churches",
    source: "BIBLE_API"
  },
  {
    id: "NRSV",
    name: "New Revised Standard Version",
    language: "English",
    copyright: "© 1989 National Council of Churches",
    source: "BIBLE_API"
  },
  {
    id: "AMP",
    name: "Amplified Bible",
    language: "English",
    copyright: "© 2015 The Lockman Foundation",
    source: "BIBLE_API"
  },
  {
    id: "MSG",
    name: "The Message",
    language: "English",
    copyright: "© 1993, 1994, 1995, 1996, 2000, 2001, 2002 Eugene H. Peterson",
    source: "BIBLE_API"
  },
  {
    id: "NET",
    name: "New English Translation",
    language: "English",
    copyright: "© 1996-2016 Biblical Studies Press",
    source: "BIBLE_API"
  }
]

// Bible Books Data
export const BIBLE_BOOKS: BibleBook[] = [
  {
    name: "Genesis",
    testament: "Old",
    category: "Pentateuch",
    chapters: 50,
    description: "The first book of the Bible, containing the creation account and early human history.",
    keyThemes: ["Creation", "Fall", "Covenant", "God's faithfulness"]
  },
  // Add all 66 books here...
]

interface BibleServiceConfig {
  apiKey?: string
  defaultTranslation?: string
  cacheEnabled?: boolean
  cacheTTL?: number
}

export class BibleService {
  private apiKey: string
  private defaultTranslation: string
  private cacheEnabled: boolean
  private cacheTTL: number
  private redis: Redis | null

  constructor(config: BibleServiceConfig = {}) {
    this.apiKey = config.apiKey || process.env.BIBLE_API_KEY || ""
    this.defaultTranslation = config.defaultTranslation || "NIV"
    this.cacheEnabled = config.cacheEnabled ?? true
    this.cacheTTL = config.cacheTTL || 3600 // 1 hour default
    
    // Only initialize Redis if URL and token are provided
    const redisUrl = process.env.UPSTASH_REDIS_URL
    const redisToken = process.env.UPSTASH_REDIS_TOKEN
    
    if (redisUrl && redisToken) {
    this.redis = new Redis({
        url: redisUrl,
        token: redisToken,
    })
    } else {
      this.redis = null
      console.warn("Redis not initialized: Missing UPSTASH_REDIS_URL or UPSTASH_REDIS_TOKEN")
    }
  }

  async getVerseOfDay(): Promise<BibleVerse> {
    const cacheKey = this.getCacheKey("verse-of-day", new Date().toISOString().split('T')[0])
    
    try {
      // Try cache first
      const cached = await this.getFromCache<BibleVerse>(cacheKey)
      if (cached) return cached

      // Check if we have API key
      if (!this.apiKey) {
        console.warn("Bible API key not configured, returning fallback verse of the day")
        return this.getFallbackVerseOfDay()
      }

      // Get a random verse from Psalms or Proverbs
      const books = ["Psalms", "Proverbs"]
      const randomBook = books[Math.floor(Math.random() * books.length)]
      const maxChapter = randomBook === "Psalms" ? 150 : 31
      const chapter = Math.floor(Math.random() * maxChapter) + 1
      const maxVerse = randomBook === "Psalms" ? 176 : 35 // Approximate max verses per chapter
      const verse = Math.floor(Math.random() * maxVerse) + 1
      const reference = `${randomBook} ${chapter}:${verse}`

      const verseOfDay = await this.getVerse(reference)
      
      // Cache the result
      await this.setCache(cacheKey, verseOfDay)

      return verseOfDay
    } catch (error) {
      console.error("Error fetching verse of the day:", error)
      // Return fallback data instead of throwing error
      return this.getFallbackVerseOfDay()
    }
  }

  private getFallbackVerseOfDay(): BibleVerse {
    const today = new Date()
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24))
    const verseNumber = (dayOfYear % 150) + 1 // Use day of year to get consistent verse for the day
    
    return {
      reference: `Psalms ${Math.floor(verseNumber / 10) + 1}:${(verseNumber % 10) + 1}`,
      text: `This is the verse of the day for ${today.toLocaleDateString()}. Blessed is the one who trusts in the Lord, whose confidence is in him.`,
      translation: "NIV",
      context: "A daily verse to inspire and encourage your spiritual journey.",
      crossReferences: [],
      commentary: "This verse reminds us to place our trust in God and find our confidence in Him.",
      relatedVerses: []
    }
  }

  private getCacheKey(type: string, key: string): string {
    return `bible:${type}:${key}`
  }

  private async getFromCache<T>(key: string): Promise<T | null> {
    if (!this.cacheEnabled || !this.redis) return null
    try {
      const cached = await this.redis.get<T>(key)
      return cached
    } catch {
      return null
    }
  }

  private async setCache<T>(key: string, value: T): Promise<void> {
    if (!this.cacheEnabled || !this.redis) return
    try {
      await this.redis.set(key, value, { ex: this.cacheTTL })
    } catch (error) {
      console.error("Cache set error:", error)
    }
  }

  async getVerse(reference: string, translation: string = this.defaultTranslation): Promise<BibleVerse> {
    const cacheKey = this.getCacheKey("verse", `${translation}:${reference}`)
    
    try {
      // Try cache first
      const cached = await this.getFromCache<BibleVerse>(cacheKey)
      if (cached) return cached

      // Check if we have API key
      if (!this.apiKey) {
        console.warn("Bible API key not configured, returning fallback data")
        return this.getFallbackVerse(reference, translation)
      }

      // Try multiple APIs in sequence until we get a response
      const verse = await this.tryBibleAPI(reference, translation) ||
                   await this.tryESVAPI(reference) ||
                   await this.tryBibleGateway(reference, translation) ||
                   await this.tryBibleCloud(reference, translation) ||
                   await this.tryBibleIs(reference, translation) ||
                   await this.tryBibleGet(reference, translation) ||
                   await this.tryBibleRef(reference, translation)

      if (!verse) {
        console.warn("Could not fetch verse from any available source")
        return this.getFallbackVerse(reference, translation)
      }

      // Cache the result
      await this.setCache(cacheKey, verse)

      return verse
    } catch (error) {
      console.error("Error fetching verse:", error)
      // Return fallback data instead of throwing error
      return this.getFallbackVerse(reference, translation)
    }
  }

  private getFallbackVerse(reference: string, translation: string): BibleVerse {
    return {
      reference,
      text: `This is a placeholder verse for ${reference} in the ${translation} translation. This text is shown when the Bible API is not available.`,
      translation,
      context: "",
      crossReferences: [],
      commentary: "",
      relatedVerses: []
    }
  }

  private async tryBibleAPI(reference: string, translation: string): Promise<BibleVerse | null> {
    try {
      const response = await fetch(
        `${API_CONFIG.BIBLE_API}/bibles/${translation}/verses/${reference}`,
        {
          headers: {
            "api-key": this.apiKey
          }
        }
      )

      if (!response.ok) return null

      const data = await response.json()
      return this.formatBibleAPIVerse(data)
    } catch {
      return null
    }
  }

  private async tryESVAPI(reference: string): Promise<BibleVerse | null> {
    try {
      const response = await fetch(
        `${API_CONFIG.ESV_API}?q=${encodeURIComponent(reference)}`,
        {
          headers: {
            "Authorization": `Token ${process.env.ESV_API_KEY}`
          }
        }
      )

      if (!response.ok) return null

      const data = await response.json()
      return this.formatESVVerse(data)
    } catch {
      return null
    }
  }

  private async tryBibleGateway(reference: string, translation: string): Promise<BibleVerse | null> {
    try {
      const response = await fetch(
        `${API_CONFIG.BIBLE_GATEWAY}/passage/?search=${encodeURIComponent(reference)}&version=${translation}`
      )

      if (!response.ok) return null

      const data = await response.json()
      return this.formatBibleGatewayVerse(data)
    } catch {
      return null
    }
  }

  private async tryBibleCloud(reference: string, translation: string): Promise<BibleVerse | null> {
    try {
      const response = await fetch(
        `${API_CONFIG.BIBLE_CLOUD}/verses/${translation}/${reference}`,
        {
          headers: {
            "Authorization": `Bearer ${process.env.BIBLE_CLOUD_API_KEY}`
          }
        }
      )

      if (!response.ok) return null

      const data = await response.json()
      return this.formatBibleCloudVerse(data)
    } catch {
      return null
    }
  }

  private async tryBibleIs(reference: string, translation: string): Promise<BibleVerse | null> {
    try {
      const response = await fetch(
        `${API_CONFIG.BIBLE_IS}/bibles/${translation}/verses/${reference}`,
        {
          headers: {
            "Authorization": `Bearer ${process.env.BIBLE_IS_API_KEY}`
          }
        }
      )

      if (!response.ok) return null

      const data = await response.json()
      return this.formatBibleIsVerse(data)
    } catch {
      return null
    }
  }

  private async tryBibleGet(reference: string, translation: string): Promise<BibleVerse | null> {
    try {
      const response = await fetch(
        `${API_CONFIG.BIBLE_GET}/verses/${translation}/${reference}`,
        {
          headers: {
            "Authorization": `Bearer ${process.env.BIBLE_GET_API_KEY}`
          }
        }
      )

      if (!response.ok) return null

      const data = await response.json()
      return this.formatBibleGetVerse(data)
    } catch {
      return null
    }
  }

  private async tryBibleRef(reference: string, translation: string): Promise<BibleVerse | null> {
    try {
      const response = await fetch(
        `${API_CONFIG.BIBLE_REF}/verses/${translation}/${reference}`,
        {
          headers: {
            "Authorization": `Bearer ${process.env.BIBLE_REF_API_KEY}`
          }
        }
      )

      if (!response.ok) return null

      const data = await response.json()
      return this.formatBibleRefVerse(data)
    } catch {
      return null
    }
  }

  private formatBibleAPIVerse(data: any): BibleVerse {
    return {
      reference: data.reference,
      text: data.text,
      translation: data.translation,
      context: data.context || "",
      crossReferences: data.crossReferences || [],
      commentary: data.commentary || "",
      relatedVerses: data.relatedVerses || []
    }
  }

  private formatESVVerse(data: any): BibleVerse {
    return {
      reference: data.reference,
      text: data.passages[0],
      translation: "ESV",
      context: "",
      crossReferences: [],
      commentary: "",
      relatedVerses: []
    }
  }

  private formatBibleGatewayVerse(data: any): BibleVerse {
    return {
      reference: data.reference,
      text: data.text,
      translation: data.translation,
      context: "",
      crossReferences: [],
      commentary: "",
      relatedVerses: []
    }
  }

  private formatBibleCloudVerse(data: any): BibleVerse {
    return {
      reference: data.reference,
      text: data.text,
      translation: data.translation,
      context: data.context || "",
      crossReferences: data.crossReferences || [],
      commentary: data.commentary || "",
      relatedVerses: data.relatedVerses || []
    }
  }

  private formatBibleIsVerse(data: any): BibleVerse {
    return {
      reference: data.reference,
      text: data.text,
      translation: data.translation,
      context: data.context || "",
      crossReferences: data.crossReferences || [],
      commentary: data.commentary || "",
      relatedVerses: data.relatedVerses || []
    }
  }

  private formatBibleGetVerse(data: any): BibleVerse {
    return {
      reference: data.reference,
      text: data.text,
      translation: data.translation,
      context: data.context || "",
      crossReferences: data.crossReferences || [],
      commentary: data.commentary || "",
      relatedVerses: data.relatedVerses || []
    }
  }

  private formatBibleRefVerse(data: any): BibleVerse {
    return {
      reference: data.reference,
      text: data.text,
      translation: data.translation,
      context: data.context || "",
      crossReferences: data.crossReferences || [],
      commentary: data.commentary || "",
      relatedVerses: data.relatedVerses || []
    }
  }

  async getChapter(book: string, chapter: number, translation: string = this.defaultTranslation): Promise<BibleVerse[]> {
    const cacheKey = this.getCacheKey("chapter", `${translation}:${book}.${chapter}`)
    
    try {
      // Try cache first
      const cached = await this.getFromCache<BibleVerse[]>(cacheKey)
      if (cached) return cached

      // Check if we have API key
      if (!this.apiKey) {
        // Silent fallback during build time
        return this.getFallbackChapter(book, chapter, translation)
      }

      const response = await fetch(
        `${API_CONFIG.BIBLE_API}/bibles/${translation}/chapters/${book}.${chapter}`,
        {
          headers: {
            "api-key": this.apiKey
          }
        }
      )

      if (!response.ok) {
        // Silent fallback - no console.warn during build
        return this.getFallbackChapter(book, chapter, translation)
      }

      const data = await response.json()
      const verses = this.formatChapterVerses(data)

      // Cache the result
      await this.setCache(cacheKey, verses)

      return verses
    } catch (error) {
      // Silent fallback - no console.error during build
      return this.getFallbackChapter(book, chapter, translation)
    }
  }

  private getFallbackChapter(book: string, chapter: number, translation: string): BibleVerse[] {
    // Return mock data for build-time static generation
    const mockVerses: BibleVerse[] = []
    const verseCount = Math.min(50, Math.floor(Math.random() * 30) + 10) // Random verse count between 10-40
    
    for (let i = 1; i <= verseCount; i++) {
      mockVerses.push({
        reference: `${book} ${chapter}:${i}`,
        text: `This is verse ${i} of ${book} chapter ${chapter}. This is placeholder text for the ${translation} translation.`,
        translation,
        context: "",
        crossReferences: [],
        commentary: "",
        relatedVerses: []
      })
    }
    
    return mockVerses
  }

  private formatChapterVerses(data: any): BibleVerse[] {
    return data.verses.map((verse: any) => ({
      reference: verse.reference,
      text: verse.text,
      translation: data.translation,
      context: "",
      crossReferences: [],
      commentary: "",
      relatedVerses: []
    }))
  }

  async search(query: string, translation: string = this.defaultTranslation): Promise<BibleVerse[]> {
    const cacheKey = this.getCacheKey("search", `${translation}:${query}`)
    
    try {
      // Try cache first
      const cached = await this.getFromCache<BibleVerse[]>(cacheKey)
      if (cached) return cached

      const response = await fetch(
        `${API_CONFIG.BIBLE_API}/bibles/${translation}/search?query=${encodeURIComponent(query)}`,
        {
          headers: {
            "api-key": this.apiKey
          }
        }
      )

      if (!response.ok) throw new Error("Failed to search")

      const data = await response.json()
      const results = this.formatSearchResults(data)

      // Cache the result
      await this.setCache(cacheKey, results)

      return results
    } catch (error) {
      console.error("Error searching:", error)
      throw new Error("Failed to search Bible")
    }
  }

  private formatSearchResults(data: any): BibleVerse[] {
    return data.verses.map((verse: any) => ({
      reference: verse.reference,
      text: verse.text,
      translation: data.translation,
      context: verse.context || "",
      crossReferences: [],
      commentary: "",
      relatedVerses: []
    }))
  }

  async getParallelVerses(reference: string, translations: string[] = ["NIV", "ESV", "KJV"]): Promise<BibleVerse[]> {
    const cacheKey = this.getCacheKey("parallel", `${reference}:${translations.join(",")}`)
    
    try {
      // Try cache first
      const cached = await this.getFromCache<BibleVerse[]>(cacheKey)
      if (cached) return cached

      const verses = await Promise.all(
        translations.map(t => this.getVerse(reference, t))
      )

      // Cache the result
      await this.setCache(cacheKey, verses)

      return verses
    } catch (error) {
      console.error("Error fetching parallel verses:", error)
      throw new Error("Failed to fetch parallel verses")
    }
  }

  async getCommentary(reference: string): Promise<BibleCommentary[]> {
    const cacheKey = this.getCacheKey("commentary", reference)
    
    try {
      // Try cache first
      const cached = await this.getFromCache<BibleCommentary[]>(cacheKey)
      if (cached) return cached

      // Implement commentary fetching from various sources
      const commentaries = await Promise.all([
        this.fetchBibleGatewayCommentary(reference),
        this.fetchBibleCloudCommentary(reference),
        this.fetchBibleIsCommentary(reference)
      ])

      const results = commentaries.flat().filter(Boolean)

      // Cache the result
      await this.setCache(cacheKey, results)

      return results
    } catch (error) {
      console.error("Error fetching commentary:", error)
      throw new Error("Failed to fetch commentary")
    }
  }

  private async fetchBibleGatewayCommentary(reference: string): Promise<BibleCommentary[]> {
    // Implement Bible Gateway commentary fetching
    return []
  }

  private async fetchBibleCloudCommentary(reference: string): Promise<BibleCommentary[]> {
    // Implement Bible Cloud commentary fetching
    return []
  }

  private async fetchBibleIsCommentary(reference: string): Promise<BibleCommentary[]> {
    // Implement Bible.is commentary fetching
    return []
  }

  async getWordStudy(word: string, reference: string): Promise<BibleWordStudy> {
    const cacheKey = this.getCacheKey("word-study", `${reference}:${word}`)
    
    try {
      // Try cache first
      const cached = await this.getFromCache<BibleWordStudy>(cacheKey)
      if (cached) return cached

      // Fetch from multiple sources
      const [hebrew, greek, definitions, usage] = await Promise.all([
        this.fetchHebrewWord(word),
        this.fetchGreekWord(word),
        this.fetchWordDefinitions(word),
        this.fetchWordUsage(word)
      ])

      const study: BibleWordStudy = {
        word,
        reference,
        hebrew,
        greek,
        definitions,
        usage,
        relatedWords: await this.fetchRelatedWords(word),
        etymology: await this.fetchEtymology(word)
      }

      // Cache the result
      await this.setCache(cacheKey, study)

      return study
    } catch (error) {
      console.error("Error fetching word study:", error)
      throw new Error("Failed to fetch word study")
    }
  }

  async getOriginalLanguage(reference: string): Promise<BibleOriginalLanguage> {
    const cacheKey = this.getCacheKey("original-language", reference)
    
    try {
      // Try cache first
      const cached = await this.getFromCache<BibleOriginalLanguage>(cacheKey)
      if (cached) return cached

      // Fetch from multiple sources
      const [hebrew, greek, transliteration] = await Promise.all([
        this.fetchHebrewText(reference),
        this.fetchGreekText(reference),
        this.fetchTransliteration(reference)
      ])

      const original: BibleOriginalLanguage = {
        reference,
        hebrew,
        greek,
        transliteration,
        morphology: await this.fetchMorphology(reference),
        syntax: await this.fetchSyntax(reference)
      }

      // Cache the result
      await this.setCache(cacheKey, original)

      return original
    } catch (error) {
      console.error("Error fetching original language:", error)
      throw new Error("Failed to fetch original language")
    }
  }

  private async fetchHebrewWord(word: string): Promise<any> {
    try {
      const response = await fetch(
        `${API_CONFIG.BIBLE_API}/hebrew/words/${encodeURIComponent(word)}`,
        {
          headers: {
            "api-key": this.apiKey
          }
        }
      )

      if (!response.ok) return null

      return await response.json()
    } catch {
      return null
    }
  }

  private async fetchGreekWord(word: string): Promise<any> {
    try {
      const response = await fetch(
        `${API_CONFIG.BIBLE_API}/greek/words/${encodeURIComponent(word)}`,
        {
          headers: {
            "api-key": this.apiKey
          }
        }
      )

      if (!response.ok) return null

      return await response.json()
    } catch {
      return null
    }
  }

  private async fetchWordDefinitions(word: string): Promise<any[]> {
    try {
      const response = await fetch(
        `${API_CONFIG.BIBLE_API}/definitions/${encodeURIComponent(word)}`,
        {
          headers: {
            "api-key": this.apiKey
          }
        }
      )

      if (!response.ok) return []

      return await response.json()
    } catch {
      return []
    }
  }

  private async fetchWordUsage(word: string): Promise<any[]> {
    try {
      const response = await fetch(
        `${API_CONFIG.BIBLE_API}/usage/${encodeURIComponent(word)}`,
        {
          headers: {
            "api-key": this.apiKey
          }
        }
      )

      if (!response.ok) return []

      return await response.json()
    } catch {
      return []
    }
  }

  private async fetchRelatedWords(word: string): Promise<any[]> {
    try {
      const response = await fetch(
        `${API_CONFIG.BIBLE_API}/related/${encodeURIComponent(word)}`,
        {
          headers: {
            "api-key": this.apiKey
          }
        }
      )

      if (!response.ok) return []

      return await response.json()
    } catch {
      return []
    }
  }

  private async fetchEtymology(word: string): Promise<any> {
    try {
      const response = await fetch(
        `${API_CONFIG.BIBLE_API}/etymology/${encodeURIComponent(word)}`,
        {
          headers: {
            "api-key": this.apiKey
          }
        }
      )

      if (!response.ok) return null

      return await response.json()
    } catch {
      return null
    }
  }

  private async fetchHebrewText(reference: string): Promise<any> {
    try {
      const response = await fetch(
        `${API_CONFIG.BIBLE_API}/hebrew/text/${reference}`,
        {
          headers: {
            "api-key": this.apiKey
          }
        }
      )

      if (!response.ok) return null

      return await response.json()
    } catch {
      return null
    }
  }

  private async fetchGreekText(reference: string): Promise<any> {
    try {
      const response = await fetch(
        `${API_CONFIG.BIBLE_API}/greek/text/${reference}`,
        {
          headers: {
            "api-key": this.apiKey
          }
        }
      )

      if (!response.ok) return null

      return await response.json()
    } catch {
      return null
    }
  }

  private async fetchTransliteration(reference: string): Promise<any> {
    try {
      const response = await fetch(
        `${API_CONFIG.BIBLE_API}/transliteration/${reference}`,
        {
          headers: {
            "api-key": this.apiKey
          }
        }
      )

      if (!response.ok) return null

      return await response.json()
    } catch {
      return null
    }
  }

  private async fetchMorphology(reference: string): Promise<any> {
    try {
      const response = await fetch(
        `${API_CONFIG.BIBLE_API}/morphology/${reference}`,
        {
          headers: {
            "api-key": this.apiKey
          }
        }
      )

      if (!response.ok) return null

      return await response.json()
    } catch {
      return null
    }
  }

  private async fetchSyntax(reference: string): Promise<any> {
    try {
      const response = await fetch(
        `${API_CONFIG.BIBLE_API}/syntax/${reference}`,
        {
          headers: {
            "api-key": this.apiKey
          }
        }
      )

      if (!response.ok) return null

      return await response.json()
    } catch {
      return null
    }
  }

  async getAudioUrl(book: string, chapter: number): Promise<string | null> {
    const cacheKey = this.getCacheKey("audio", `${book}:${chapter}`)
    
    try {
      // Try cache first
      const cached = await this.getFromCache<string>(cacheKey)
      if (cached) return cached

      // Try multiple audio APIs in sequence
      const audioUrl = await this.tryBibleIsAudio(book, chapter) ||
                      await this.tryBibleCloudAudio(book, chapter) ||
                      await this.tryBibleGetAudio(book, chapter)

      if (!audioUrl) return null

      // Cache the result
      await this.setCache(cacheKey, audioUrl)

      return audioUrl
    } catch (error) {
      console.error("Error fetching audio URL:", error)
      return null
    }
  }

  private async tryBibleIsAudio(book: string, chapter: number): Promise<string | null> {
    try {
      const response = await fetch(
        `${API_CONFIG.BIBLE_IS}/audio/${book}/${chapter}`,
        {
          headers: {
            "api-key": this.apiKey
          }
        }
      )
      if (!response.ok) return null
      const data = await response.json()
      return data.audioUrl
    } catch {
      return null
    }
  }

  private async tryBibleCloudAudio(book: string, chapter: number): Promise<string | null> {
    try {
      const response = await fetch(
        `${API_CONFIG.BIBLE_CLOUD}/audio/${book}/${chapter}`,
        {
          headers: {
            "api-key": this.apiKey
          }
        }
      )
      if (!response.ok) return null
      const data = await response.json()
      return data.audioUrl
    } catch {
      return null
    }
  }

  private async tryBibleGetAudio(book: string, chapter: number): Promise<string | null> {
    try {
      const response = await fetch(
        `${API_CONFIG.BIBLE_GET}/audio/${book}/${chapter}`,
        {
          headers: {
            "api-key": this.apiKey
          }
        }
      )
      if (!response.ok) return null
      const data = await response.json()
      return data.audioUrl
    } catch {
      return null
    }
  }

  async searchConcordance(word: string): Promise<BibleConcordance[]> {
    const cacheKey = this.getCacheKey("concordance", word)
    
    try {
      // Try cache first
      const cached = await this.getFromCache<BibleConcordance[]>(cacheKey)
      if (cached) return cached

      // Implement concordance search from various sources
      const results = await Promise.all([
        this.fetchBibleGatewayConcordance(word),
        this.fetchBibleCloudConcordance(word),
        this.fetchBibleIsConcordance(word)
      ])

      const searchResults = results.flat().filter(Boolean)

      // Cache the result
      await this.setCache(cacheKey, searchResults)

      return searchResults
    } catch (error) {
      console.error("Error searching concordance:", error)
      throw new Error("Failed to search concordance")
    }
  }

  private async fetchBibleGatewayConcordance(word: string): Promise<BibleConcordance[]> {
    // Implement Bible Gateway concordance search
    return []
  }

  private async fetchBibleCloudConcordance(word: string): Promise<BibleConcordance[]> {
    // Implement Bible Cloud concordance search
    return []
  }

  private async fetchBibleIsConcordance(word: string): Promise<BibleConcordance[]> {
    // Implement Bible.is concordance search
    return []
  }

  async searchDictionary(term: string): Promise<BibleDictionary[]> {
    const cacheKey = this.getCacheKey("dictionary", term)
    
    try {
      // Try cache first
      const cached = await this.getFromCache<BibleDictionary[]>(cacheKey)
      if (cached) return cached

      // Implement dictionary search from various sources
      const results = await Promise.all([
        this.fetchBibleGatewayDictionary(term),
        this.fetchBibleCloudDictionary(term),
        this.fetchBibleIsDictionary(term)
      ])

      const searchResults = results.flat().filter(Boolean)

      // Cache the result
      await this.setCache(cacheKey, searchResults)

      return searchResults
    } catch (error) {
      console.error("Error searching dictionary:", error)
      throw new Error("Failed to search dictionary")
    }
  }

  private async fetchBibleGatewayDictionary(term: string): Promise<BibleDictionary[]> {
    // Implement Bible Gateway dictionary search
    return []
  }

  private async fetchBibleCloudDictionary(term: string): Promise<BibleDictionary[]> {
    // Implement Bible Cloud dictionary search
    return []
  }

  private async fetchBibleIsDictionary(term: string): Promise<BibleDictionary[]> {
    // Implement Bible.is dictionary search
    return []
  }

  async getMap(name: string): Promise<BibleMap> {
    const cacheKey = this.getCacheKey("map", name)
    
    try {
      // Try cache first
      const cached = await this.getFromCache<BibleMap>(cacheKey)
      if (cached) return cached

      // Implement map fetching from various sources
      const map = await this.fetchBibleGatewayMap(name) ||
                 await this.fetchBibleCloudMap(name) ||
                 await this.fetchBibleIsMap(name)

      if (!map) throw new Error("Map not found")

      // Cache the result
      await this.setCache(cacheKey, map)

      return map
    } catch (error) {
      console.error("Error fetching map:", error)
      throw new Error("Failed to fetch map")
    }
  }

  private async fetchBibleGatewayMap(name: string): Promise<BibleMap | null> {
    // Implement Bible Gateway map fetching
    return null
  }

  private async fetchBibleCloudMap(name: string): Promise<BibleMap | null> {
    // Implement Bible Cloud map fetching
    return null
  }

  private async fetchBibleIsMap(name: string): Promise<BibleMap | null> {
    // Implement Bible.is map fetching
    return null
  }

  async createPrayerEntry(entry: Omit<BiblePrayerEntry, 'id' | 'createdAt' | 'updatedAt'>): Promise<BiblePrayerEntry> {
    try {
      const newEntry: BiblePrayerEntry = {
        ...entry,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }

      // Store in database or cache
      const cacheKey = this.getCacheKey("prayer", newEntry.id)
      await this.setCache(cacheKey, newEntry)

      return newEntry
    } catch (error) {
      console.error("Error creating prayer entry:", error)
      throw new Error("Failed to create prayer entry")
    }
  }

  async getPrayerEntries(): Promise<BiblePrayerEntry[]> {
    try {
      // Implement fetching prayer entries from database or cache
      return []
    } catch (error) {
      console.error("Error fetching prayer entries:", error)
      throw new Error("Failed to fetch prayer entries")
    }
  }

  async updatePrayerEntry(id: string, updates: Partial<BiblePrayerEntry>): Promise<BiblePrayerEntry> {
    try {
      const cacheKey = this.getCacheKey("prayer", id)
      const existingEntry = await this.getFromCache<BiblePrayerEntry>(cacheKey)

      if (!existingEntry) throw new Error("Prayer entry not found")

      const updatedEntry: BiblePrayerEntry = {
        ...existingEntry,
        ...updates,
        updatedAt: new Date().toISOString()
      }

      await this.setCache(cacheKey, updatedEntry)
      return updatedEntry
    } catch (error) {
      console.error("Error updating prayer entry:", error)
      throw new Error("Failed to update prayer entry")
    }
  }

  async deletePrayerEntry(id: string): Promise<void> {
    try {
      if (!this.redis) return
      const cacheKey = this.getCacheKey("prayer", id)
      await this.redis.del(cacheKey)
    } catch (error) {
      console.error("Error deleting prayer entry:", error)
      throw new Error("Failed to delete prayer entry")
    }
  }

  async getQuiz(): Promise<BibleQuiz> {
    // For now, return a static quiz. In a real application, this would fetch from an API or database
    return {
      id: crypto.randomUUID(),
      title: "Bible Knowledge Quiz",
      description: "Test your knowledge of the Bible with these questions",
      difficulty: "intermediate",
      timeLimit: 300, // 5 minutes
      passingScore: 3,
      questions: [
        {
          question: "Who was the first man created according to the Bible?",
          options: ["Adam", "Noah", "Abraham", "Moses"],
          correctAnswer: 0, // Index of "Adam"
          explanation: "God formed man from the dust of the ground and breathed into his nostrils the breath of life.",
          reference: "Genesis 2:7"
        },
        {
          question: "How many days and nights did it rain during the flood?",
          options: ["30 days", "40 days", "50 days", "60 days"],
          correctAnswer: 1, // Index of "40 days"
          explanation: "The rain fell for 40 days and 40 nights, causing the great flood.",
          reference: "Genesis 7:12"
        },
        {
          question: "Who was thrown into the lions' den but was protected by God?",
          options: ["David", "Daniel", "Joseph", "Jonah"],
          correctAnswer: 1, // Index of "Daniel"
          explanation: "Daniel was thrown into the lions' den for praying to God, but God sent an angel to shut the lions' mouths.",
          reference: "Daniel 6:16-23"
        },
        {
          question: "Which book comes first in the New Testament?",
          options: ["Mark", "Luke", "John", "Matthew"],
          correctAnswer: 3, // Index of "Matthew"
          explanation: "The Gospel of Matthew is the first book of the New Testament.",
          reference: "Matthew 1:1"
        },
        {
          question: "Who denied Jesus three times?",
          options: ["John", "Peter", "James", "Andrew"],
          correctAnswer: 1, // Index of "Peter"
          explanation: "Peter denied knowing Jesus three times before the rooster crowed, just as Jesus had predicted.",
          reference: "Matthew 26:69-75"
        }
      ]
    }
  }

  async getStudyPlan(): Promise<BibleReadingPlan> {
    return {
      id: "30-day-reading",
      title: "30-Day Bible Reading Plan",
      description: "A comprehensive 30-day reading plan covering key books of the Bible",
      duration: "30 days",
      topics: ["Creation", "Exodus", "Psalms", "Proverbs", "Gospels", "Epistles"],
      readings: [
        {
          day: 1,
          references: ["Genesis 1-3"],
          notes: "Creation and the Fall",
          questions: [
            {
              question: "What does the creation account reveal about God's character?",
              answer: "God is creative, powerful, and orderly. He creates with purpose and declares His creation good."
            }
          ]
        }
      ],
      author: "Bible Study Team",
      date: new Date().toISOString(),
      resources: [
        {
          title: "30-Day Bible Reading Guide",
          url: "/guides/30-day-reading",
          description: "Comprehensive study guide for the 30-day reading plan"
        },
        {
          title: "Bible Commentary",
          url: "/commentary",
          description: "Detailed commentary on each passage"
        },
        {
          title: "Study Notes Template",
          url: "/templates/study-notes",
          description: "Printable template for taking study notes"
        }
      ]
    }
  }

  async shareVerse({ verse, message, platforms }: BibleShareOptions): Promise<void> {
    try {
      // For now, we'll just handle the sharing through the UI
      // In the future, this could be expanded to handle server-side sharing
      // or integration with social media APIs
      const shareText = message 
        ? `${message}\n\n${verse.text}\n\n${verse.reference} (${verse.translation})`
        : `${verse.text}\n\n${verse.reference} (${verse.translation})`

      // Log the share attempt
      console.log("Sharing verse:", {
        verse: verse.reference,
        message,
        platforms,
        shareText
      })

      // The actual sharing is handled by the UI components
      // This method exists to provide a consistent interface
      // and allow for future expansion of sharing capabilities
    } catch (error) {
      console.error("Error sharing verse:", error)
      throw new Error("Failed to share verse")
    }
  }

  async createStudyNote(note: Omit<BibleStudyNote, 'date'>): Promise<BibleStudyNote> {
    try {
      const newNote: BibleStudyNote = {
        ...note,
        date: new Date().toISOString()
      }

      // Store in database or cache
      const cacheKey = this.getCacheKey("study-note", newNote.reference)
      await this.setCache(cacheKey, newNote)

      return newNote
    } catch (error) {
      console.error("Error creating study note:", error)
      throw new Error("Failed to create study note")
    }
  }

  async getStudyNotes(reference?: string): Promise<BibleStudyNote[]> {
    try {
      // For now, return an empty array
      // In a real application, this would fetch from a database or cache
      return []
    } catch (error) {
      console.error("Error fetching study notes:", error)
      throw new Error("Failed to fetch study notes")
    }
  }

  async updateStudyNote(reference: string, updates: Partial<BibleStudyNote>): Promise<BibleStudyNote> {
    try {
      const cacheKey = this.getCacheKey("study-note", reference)
      const existingNote = await this.getFromCache<BibleStudyNote>(cacheKey)

      if (!existingNote) throw new Error("Study note not found")

      const updatedNote: BibleStudyNote = {
        ...existingNote,
        ...updates
      }

      await this.setCache(cacheKey, updatedNote)
      return updatedNote
    } catch (error) {
      console.error("Error updating study note:", error)
      throw new Error("Failed to update study note")
    }
  }

  async deleteStudyNote(reference: string): Promise<void> {
    try {
      if (!this.redis) return
      const cacheKey = this.getCacheKey("study-note", reference)
      await this.redis.del(cacheKey)
    } catch (error) {
      console.error("Error deleting study note:", error)
      throw new Error("Failed to delete study note")
    }
  }

  async saveStudySession(session: BibleStudySession): Promise<BibleStudySession> {
    try {
      const cacheKey = this.getCacheKey("study-session", session.id)
      await this.setCache(cacheKey, session)
      return session
    } catch (error) {
      console.error("Error saving study session:", error)
      throw new Error("Failed to save study session")
    }
  }

  async updateStudySession(session: BibleStudySession): Promise<BibleStudySession> {
    try {
      const cacheKey = this.getCacheKey("study-session", session.id)
      const existingSession = await this.getFromCache<BibleStudySession>(cacheKey)

      if (!existingSession) throw new Error("Study session not found")

      const updatedSession: BibleStudySession = {
        ...existingSession,
        ...session
      }

      await this.setCache(cacheKey, updatedSession)
      return updatedSession
    } catch (error) {
      console.error("Error updating study session:", error)
      throw new Error("Failed to update study session")
    }
  }

  async getStudySession(sessionId: string): Promise<BibleStudySession | null> {
    try {
      const cacheKey = this.getCacheKey("study-session", sessionId)
      return await this.getFromCache<BibleStudySession>(cacheKey)
    } catch (error) {
      console.error("Error fetching study session:", error)
      throw new Error("Failed to fetch study session")
    }
  }

  async deleteStudySession(sessionId: string): Promise<void> {
    if (!this.redis) return
    const cacheKey = this.getCacheKey("study-session", sessionId)
    await this.redis.del(cacheKey)
  }

  async getTimeline(): Promise<BibleTimeline> {
    const cacheKey = this.getCacheKey("timeline", "main")
    
    try {
      // Try cache first
      const cached = await this.getFromCache<BibleTimeline>(cacheKey)
      if (cached) return cached

      // Fetch timeline data from multiple sources
      const timeline = await this.fetchTimelineData()

      // Cache the result
      await this.setCache(cacheKey, timeline)

      return timeline
    } catch (error) {
      console.error("Error fetching timeline:", error)
      throw new Error("Failed to fetch Bible timeline")
    }
  }

  private async fetchTimelineData(): Promise<BibleTimeline> {
    // This is a placeholder implementation that returns a basic timeline
    // In a real implementation, this would fetch data from various Bible APIs
    return {
      events: [
        {
          date: "4000 BC",
          title: "Creation",
          description: "God creates the universe and everything in it",
          references: ["Genesis 1:1-2:3"],
          category: "Creation",
          location: {
            name: "Eden",
            coordinates: {
              lat: 33.5138,
              lng: 44.4236
            }
          }
        },
        {
          date: "2348 BC",
          title: "The Flood",
          description: "Noah's Ark and the Great Flood",
          references: ["Genesis 6-9"],
          category: "Judgment"
        }
      ],
      periods: [
        {
          start: "4000 BC",
          end: "2000 BC",
          title: "Early Biblical History",
          description: "From Creation to Abraham",
          keyEvents: ["Creation", "Fall", "Flood", "Tower of Babel"]
        }
      ]
    }
  }
}

// Export a singleton instance
export const bibleService = new BibleService() 