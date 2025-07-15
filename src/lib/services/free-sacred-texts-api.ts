// Free Sacred Texts API Service
// Integrates multiple free, open-source APIs for comprehensive text access

export interface FreeTextAPI {
  name: string
  baseUrl: string
  description: string
  features: string[]
  rateLimit?: string
  requiresAuth: boolean
  authType?: 'api_key' | 'token' | 'none'
  documentation: string
}

export interface SacredTextResult {
  reference: string
  originalText: string
  translation: string
  transliteration?: string
  source: string
  api: string
  metadata: {
    language: string
    translation: string
    copyright?: string
    lastUpdated?: string
  }
}

export interface SearchResult {
  reference: string
  text: string
  translation: string
  score: number
  source: string
  api: string
}

// Free APIs for Sacred Texts
export const FREE_SACRED_TEXT_APIS: Record<string, FreeTextAPI> = {
  // Bible APIs
  bible_gateway: {
    name: "Bible Gateway",
    baseUrl: "https://www.biblegateway.com",
    description: "Free Bible text access with multiple translations",
    features: ["Multiple translations", "Search functionality", "Audio versions"],
    rateLimit: "Reasonable use",
    requiresAuth: false,
    documentation: "https://www.biblegateway.com/usage/terms/"
  },
  
  bible_api: {
    name: "Bible API",
    baseUrl: "https://bible-api.com",
    description: "Free REST API for Bible texts",
    features: ["REST API", "Multiple translations", "JSON format"],
    rateLimit: "No strict limits",
    requiresAuth: false,
    documentation: "https://bible-api.com/"
  },
  
  bible_cloud: {
    name: "Bible Cloud",
    baseUrl: "https://biblecloud.com/api/v1",
    description: "Free Bible API with extensive features",
    features: ["Multiple translations", "Search", "Audio", "Commentaries"],
    rateLimit: "Generous limits",
    requiresAuth: true,
    authType: "api_key",
    documentation: "https://biblecloud.com/api/docs"
  },

  // Quran APIs
  quran_api: {
    name: "Quran API",
    baseUrl: "https://api.quran.com/api/v4",
    description: "Free Quran API with Arabic text and translations",
    features: ["Arabic text", "Multiple translations", "Audio recitations", "Tafsir"],
    rateLimit: "No strict limits",
    requiresAuth: false,
    documentation: "https://quran.api-docs.io/"
  },
  
  quran_cloud: {
    name: "Quran Cloud",
    baseUrl: "https://alquran.cloud/api",
    description: "Free Quran API with extensive features",
    features: ["Arabic text", "Translations", "Audio", "Tafsir", "Sajda"],
    rateLimit: "No strict limits",
    requiresAuth: false,
    documentation: "https://alquran.cloud/api"
  },

  // Buddhist Texts APIs
  sutta_central: {
    name: "SuttaCentral",
    baseUrl: "https://suttacentral.net/api",
    description: "Free API for Buddhist texts (Pali Canon)",
    features: ["Pali texts", "Translations", "Commentaries", "Search"],
    rateLimit: "Reasonable use",
    requiresAuth: false,
    documentation: "https://suttacentral.net/api"
  },
  
  buddhist_digital_resource: {
    name: "Buddhist Digital Resource Center",
    baseUrl: "https://www.tbrc.org/api",
    description: "Free API for Tibetan Buddhist texts",
    features: ["Tibetan texts", "Translations", "Manuscripts"],
    rateLimit: "Registration required",
    requiresAuth: true,
    authType: "token",
    documentation: "https://www.tbrc.org/api"
  },

  // Hindu Texts APIs
  vedic_heritage: {
    name: "Vedic Heritage Portal",
    baseUrl: "https://vedicheritage.gov.in/api",
    description: "Free API for Vedic texts",
    features: ["Vedas", "Upanishads", "Sanskrit texts"],
    rateLimit: "No strict limits",
    requiresAuth: false,
    documentation: "https://vedicheritage.gov.in/api"
  },
  
  sanskrit_documents: {
    name: "Sanskrit Documents",
    baseUrl: "https://sanskritdocuments.org/api",
    description: "Free API for Sanskrit texts",
    features: ["Sanskrit texts", "Translations", "Grammar"],
    rateLimit: "No strict limits",
    requiresAuth: false,
    documentation: "https://sanskritdocuments.org/api"
  },

  // Sikh Texts APIs
  sikh_net: {
    name: "SikhNet",
    baseUrl: "https://www.sikhnet.com/api",
    description: "Free API for Sikh texts",
    features: ["Guru Granth Sahib", "Dasam Granth", "Translations"],
    rateLimit: "Reasonable use",
    requiresAuth: false,
    documentation: "https://www.sikhnet.com/api"
  },
  
  search_gurbani: {
    name: "SearchGurbani",
    baseUrl: "https://www.searchgurbani.com/api",
    description: "Free API for Gurbani texts",
    features: ["Gurbani", "Search", "Translations", "Audio"],
    rateLimit: "No strict limits",
    requiresAuth: false,
    documentation: "https://www.searchgurbani.com/api"
  }
}

export class FreeSacredTextsAPI {
  private apiKeys: Record<string, string> = {}

  constructor(apiKeys?: Record<string, string>) {
    if (apiKeys) {
      this.apiKeys = apiKeys
    }
  }

  // Get Bible text from free APIs
  async getBibleText(reference: string, translation: string = "WEB"): Promise<SacredTextResult | null> {
    const apis = ["bible_api", "bible_gateway"]
    
    for (const apiName of apis) {
      try {
        const result = await this.fetchFromBibleAPI(apiName, reference, translation)
        if (result) return result
      } catch (error) {
        console.warn(`Failed to fetch from ${apiName}:`, error)
        continue
      }
    }
    
    return null
  }

  // Get Quran text from free APIs
  async getQuranText(surah: number, ayah: number, translation: string = "131"): Promise<SacredTextResult | null> {
    const apis = ["quran_api", "quran_cloud"]
    
    for (const apiName of apis) {
      try {
        const result = await this.fetchFromQuranAPI(apiName, surah, ayah, translation)
        if (result) return result
      } catch (error) {
        console.warn(`Failed to fetch from ${apiName}:`, error)
        continue
      }
    }
    
    return null
  }

  // Get Buddhist text from free APIs
  async getBuddhistText(reference: string, translation: string = "en"): Promise<SacredTextResult | null> {
    const apis = ["sutta_central", "buddhist_digital_resource"]
    
    for (const apiName of apis) {
      try {
        const result = await this.fetchFromBuddhistAPI(apiName, reference, translation)
        if (result) return result
      } catch (error) {
        console.warn(`Failed to fetch from ${apiName}:`, error)
        continue
      }
    }
    
    return null
  }

  // Get Hindu text from free APIs
  async getHinduText(reference: string, translation: string = "en"): Promise<SacredTextResult | null> {
    const apis = ["vedic_heritage", "sanskrit_documents"]
    
    for (const apiName of apis) {
      try {
        const result = await this.fetchFromHinduAPI(apiName, reference, translation)
        if (result) return result
      } catch (error) {
        console.warn(`Failed to fetch from ${apiName}:`, error)
        continue
      }
    }
    
    return null
  }

  // Get Sikh text from free APIs
  async getSikhText(reference: string, translation: string = "en"): Promise<SacredTextResult | null> {
    const apis = ["sikh_net", "search_gurbani"]
    
    for (const apiName of apis) {
      try {
        const result = await this.fetchFromSikhAPI(apiName, reference, translation)
        if (result) return result
      } catch (error) {
        console.warn(`Failed to fetch from ${apiName}:`, error)
        continue
      }
    }
    
    return null
  }

  // Search across all sacred texts
  async searchSacredTexts(query: string, limit: number = 20): Promise<SearchResult[]> {
    const results: SearchResult[] = []
    
    // Search Bible
    try {
      const bibleResults = await this.searchBible(query, limit / 4)
      results.push(...bibleResults)
    } catch (error) {
      console.warn("Bible search failed:", error)
    }
    
    // Search Quran
    try {
      const quranResults = await this.searchQuran(query, limit / 4)
      results.push(...quranResults)
    } catch (error) {
      console.warn("Quran search failed:", error)
    }
    
    // Search Buddhist texts
    try {
      const buddhistResults = await this.searchBuddhist(query, limit / 4)
      results.push(...buddhistResults)
    } catch (error) {
      console.warn("Buddhist search failed:", error)
    }
    
    // Search Hindu texts
    try {
      const hinduResults = await this.searchHindu(query, limit / 4)
      results.push(...hinduResults)
    } catch (error) {
      console.warn("Hindu search failed:", error)
    }
    
    // Search Sikh texts
    try {
      const sikhResults = await this.searchSikh(query, limit / 4)
      results.push(...sikhResults)
    } catch (error) {
      console.warn("Sikh search failed:", error)
    }
    
    return results.sort((a, b) => b.score - a.score).slice(0, limit)
  }

  // Private methods for specific API implementations
  private async fetchFromBibleAPI(apiName: string, reference: string, translation: string): Promise<SacredTextResult | null> {
    const api = FREE_SACRED_TEXT_APIS[apiName]
    if (!api) return null

    try {
      let url: string
      let headers: Record<string, string> = {}

      if (apiName === "bible_api") {
        url = `${api.baseUrl}/${reference}?translation=${translation}`
      } else if (apiName === "bible_gateway") {
        url = `${api.baseUrl}/passage/?search=${encodeURIComponent(reference)}&version=${translation}`
      } else {
        return null
      }

      if (api.requiresAuth && this.apiKeys[apiName]) {
        headers.Authorization = `Bearer ${this.apiKeys[apiName]}`
      }

      const response = await fetch(url, { headers })
      if (!response.ok) return null

      const data = await response.json()
      return this.formatBibleResult(data, reference, translation, apiName)
    } catch (error) {
      console.error(`Error fetching from ${apiName}:`, error)
      return null
    }
  }

  private async fetchFromQuranAPI(apiName: string, surah: number, ayah: number, translation: string): Promise<SacredTextResult | null> {
    const api = FREE_SACRED_TEXT_APIS[apiName]
    if (!api) return null

    try {
      let url: string

      if (apiName === "quran_api") {
        url = `${api.baseUrl}/quran/verses/uthmani?chapter_number=${surah}&verse_number=${ayah}`
      } else if (apiName === "quran_cloud") {
        url = `${api.baseUrl}/ayah/${surah}:${ayah}`
      } else {
        return null
      }

      const response = await fetch(url)
      if (!response.ok) return null

      const data = await response.json()
      return this.formatQuranResult(data, surah, ayah, translation, apiName)
    } catch (error) {
      console.error(`Error fetching from ${apiName}:`, error)
      return null
    }
  }

  private async fetchFromBuddhistAPI(apiName: string, reference: string, translation: string): Promise<SacredTextResult | null> {
    const api = FREE_SACRED_TEXT_APIS[apiName]
    if (!api) return null

    try {
      let url: string
      let headers: Record<string, string> = {}

      if (apiName === "sutta_central") {
        url = `${api.baseUrl}/sutta/${reference}?lang=${translation}`
      } else if (apiName === "buddhist_digital_resource") {
        url = `${api.baseUrl}/text/${reference}`
        if (this.apiKeys[apiName]) {
          headers.Authorization = `Bearer ${this.apiKeys[apiName]}`
        }
      } else {
        return null
      }

      const response = await fetch(url, { headers })
      if (!response.ok) return null

      const data = await response.json()
      return this.formatBuddhistResult(data, reference, translation, apiName)
    } catch (error) {
      console.error(`Error fetching from ${apiName}:`, error)
      return null
    }
  }

  private async fetchFromHinduAPI(apiName: string, reference: string, translation: string): Promise<SacredTextResult | null> {
    const api = FREE_SACRED_TEXT_APIS[apiName]
    if (!api) return null

    try {
      let url: string

      if (apiName === "vedic_heritage") {
        url = `${api.baseUrl}/text/${reference}?lang=${translation}`
      } else if (apiName === "sanskrit_documents") {
        url = `${api.baseUrl}/text/${reference}`
      } else {
        return null
      }

      const response = await fetch(url)
      if (!response.ok) return null

      const data = await response.json()
      return this.formatHinduResult(data, reference, translation, apiName)
    } catch (error) {
      console.error(`Error fetching from ${apiName}:`, error)
      return null
    }
  }

  private async fetchFromSikhAPI(apiName: string, reference: string, translation: string): Promise<SacredTextResult | null> {
    const api = FREE_SACRED_TEXT_APIS[apiName]
    if (!api) return null

    try {
      let url: string

      if (apiName === "sikh_net") {
        url = `${api.baseUrl}/gurbani/${reference}?lang=${translation}`
      } else if (apiName === "search_gurbani") {
        url = `${api.baseUrl}/gurbani/${reference}`
      } else {
        return null
      }

      const response = await fetch(url)
      if (!response.ok) return null

      const data = await response.json()
      return this.formatSikhResult(data, reference, translation, apiName)
    } catch (error) {
      console.error(`Error fetching from ${apiName}:`, error)
      return null
    }
  }

  // Search methods
  private async searchBible(query: string, limit: number): Promise<SearchResult[]> {
    // Implementation for Bible search
    return []
  }

  private async searchQuran(query: string, limit: number): Promise<SearchResult[]> {
    // Implementation for Quran search
    return []
  }

  private async searchBuddhist(query: string, limit: number): Promise<SearchResult[]> {
    // Implementation for Buddhist search
    return []
  }

  private async searchHindu(query: string, limit: number): Promise<SearchResult[]> {
    // Implementation for Hindu search
    return []
  }

  private async searchSikh(query: string, limit: number): Promise<SearchResult[]> {
    // Implementation for Sikh search
    return []
  }

  // Format methods for different API responses
  private formatBibleResult(data: any, reference: string, translation: string, apiName: string): SacredTextResult {
    return {
      reference,
      originalText: data.text || data.verses?.[0]?.text || "",
      translation: data.translation || data.verses?.[0]?.translation || "",
      source: "Bible",
      api: apiName,
      metadata: {
        language: "en",
        translation,
        copyright: data.copyright || "",
        lastUpdated: new Date().toISOString()
      }
    }
  }

  private formatQuranResult(data: any, surah: number, ayah: number, translation: string, apiName: string): SacredTextResult {
    return {
      reference: `${surah}:${ayah}`,
      originalText: data.text || data.verse?.text || "",
      translation: data.translation || data.verse?.translation || "",
      transliteration: data.transliteration || data.verse?.transliteration || "",
      source: "Quran",
      api: apiName,
      metadata: {
        language: "ar",
        translation,
        copyright: data.copyright || "",
        lastUpdated: new Date().toISOString()
      }
    }
  }

  private formatBuddhistResult(data: any, reference: string, translation: string, apiName: string): SacredTextResult {
    return {
      reference,
      originalText: data.text || data.sutta?.text || "",
      translation: data.translation || data.sutta?.translation || "",
      source: "Buddhist",
      api: apiName,
      metadata: {
        language: "pi",
        translation,
        copyright: data.copyright || "",
        lastUpdated: new Date().toISOString()
      }
    }
  }

  private formatHinduResult(data: any, reference: string, translation: string, apiName: string): SacredTextResult {
    return {
      reference,
      originalText: data.text || data.verse?.text || "",
      translation: data.translation || data.verse?.translation || "",
      source: "Hindu",
      api: apiName,
      metadata: {
        language: "sa",
        translation,
        copyright: data.copyright || "",
        lastUpdated: new Date().toISOString()
      }
    }
  }

  private formatSikhResult(data: any, reference: string, translation: string, apiName: string): SacredTextResult {
    return {
      reference,
      originalText: data.text || data.gurbani?.text || "",
      translation: data.translation || data.gurbani?.translation || "",
      source: "Sikh",
      api: apiName,
      metadata: {
        language: "pa",
        translation,
        copyright: data.copyright || "",
        lastUpdated: new Date().toISOString()
      }
    }
  }

  // Get available APIs for a specific tradition
  getAvailableAPIs(tradition: string): FreeTextAPI[] {
    const traditionAPIs: Record<string, string[]> = {
      bible: ["bible_api", "bible_gateway", "bible_cloud"],
      quran: ["quran_api", "quran_cloud"],
      buddhist: ["sutta_central", "buddhist_digital_resource"],
      hindu: ["vedic_heritage", "sanskrit_documents"],
      sikh: ["sikh_net", "search_gurbani"]
    }

    const apiNames = traditionAPIs[tradition.toLowerCase()] || []
    return apiNames.map(name => FREE_SACRED_TEXT_APIS[name]).filter(Boolean)
  }

  // Get API information
  getAPIInfo(apiName: string): FreeTextAPI | null {
    return FREE_SACRED_TEXT_APIS[apiName] || null
  }

  // Get all available APIs
  getAllAPIs(): FreeTextAPI[] {
    return Object.values(FREE_SACRED_TEXT_APIS)
  }
}

// Export singleton instance
export const freeSacredTextsAPI = new FreeSacredTextsAPI() 