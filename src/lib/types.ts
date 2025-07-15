export interface ResourceReference {
  sourceId: string
  sourceType: 'meditation' | 'sacred_text' | 'study' | 'content'
  relatedResources: {
    id: string
    type: 'meditation' | 'sacred_text' | 'study' | 'content'
    relationship: 'practice' | 'scripture' | 'commentary' | 'tradition'
  }[]
}

export interface Station {
  id: string
  name: string
  url: string
  country?: string
  language?: string
  genres?: string[]
  votes?: number
  isVerified?: boolean
  addedAt?: string
  updatedAt?: string
  favicon?: string
}

export interface GenreSubcategories {
  [key: string]: string[]
}

export interface GenreCategories {
  [key: string]: GenreSubcategories
}

export interface SearchFilters {
  religion?: string[]
  type?: string[]
  language?: string[]
  level?: string[]
  tradition?: string[]
  verified?: boolean
}

export interface AdvancedSearchFilters extends SearchFilters {
  dateRange?: {
    start: Date
    end: Date
  }
  tags?: string[]
  author?: string
  publisher?: string
  license?: string
}

export interface ReligiousResource {
  id: string
  name: string
  description: string
  url: string
  type: string
  religion: string
  language: string
  featured?: boolean
  isVerified?: boolean
  topics?: string[]
  organization?: string
} 