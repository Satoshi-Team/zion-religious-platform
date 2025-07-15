// Related Texts and Interlinks System for SEO
// Supports cross-references between Quran, Bible, and Torah

export interface RelatedText {
  type: 'quran' | 'bible' | 'torah' | 'external'
  reference: string // e.g., "Quran 2:255", "Bible Matthew 1:1", "Torah Genesis 1:1"
  title: string
  description: string
  relevance: 'direct' | 'thematic' | 'historical' | 'prophetic' | 'parallel'
  url?: string // For external links
  keywords: string[]
}

export interface VerseInterlinks {
  relatedTexts: RelatedText[]
  crossReferences: string[] // Direct verse references
  themes: string[]
  keywords: string[]
  seoDescription: string
}

export interface EnhancedQuranVerse {
  number: number
  arabic: string
  english: string
  transliteration: string
  tafsir?: string
  interlinks?: VerseInterlinks
}

export interface EnhancedBibleVerse {
  book: string
  chapter: number
  verse: number
  text: string
  interlinks?: VerseInterlinks
}

export interface EnhancedTorahVerse {
  hebrew: string
  english: string
  transliteration: string
  interlinks?: VerseInterlinks
}

// SEO-focused interlink categories
export const INTERLINK_CATEGORIES = {
  THEMATIC: 'thematic',
  PROPHETIC: 'prophetic',
  HISTORICAL: 'historical',
  PARALLEL: 'parallel',
  DOCTRINAL: 'doctrinal',
  ETHICAL: 'ethical',
  RITUAL: 'ritual',
  NARRATIVE: 'narrative'
} as const

// Common themes across sacred texts
export const CROSS_TEXT_THEMES = {
  CREATION: 'creation',
  MONOTHEISM: 'monotheism',
  PROPHECY: 'prophecy',
  MESSIAH: 'messiah',
  JUDGMENT: 'judgment',
  MERCY: 'mercy',
  PRAYER: 'prayer',
  CHARITY: 'charity',
  FASTING: 'fasting',
  PILGRIMAGE: 'pilgrimage',
  FAMILY: 'family',
  JUSTICE: 'justice',
  WISDOM: 'wisdom',
  FAITH: 'faith',
  REPENTANCE: 'repentance',
  FORGIVENESS: 'forgiveness',
  LOVE: 'love',
  PEACE: 'peace',
  WAR: 'war',
  LEADERSHIP: 'leadership'
} as const

// SEO keywords for different types of content
export const SEO_KEYWORDS = {
  QURAN: [
    'Quran', 'Koran', 'Islamic scripture', 'Muslim holy book', 'Arabic text',
    'Surah', 'Ayat', 'Tafsir', 'Islamic interpretation', 'Muslim teachings'
  ],
  BIBLE: [
    'Bible', 'Christian scripture', 'New Testament', 'Gospel', 'Biblical text',
    'Christian teachings', 'Biblical interpretation', 'Scripture study'
  ],
  TORAH: [
    'Torah', 'Jewish scripture', 'Hebrew Bible', 'Pentateuch', 'Jewish law',
    'Jewish teachings', 'Hebrew text', 'Jewish interpretation'
  ],
  COMPARATIVE: [
    'Comparative religion', 'Interfaith study', 'Sacred texts comparison',
    'Religious dialogue', 'Theological comparison', 'Scriptural parallels'
  ]
} as const 