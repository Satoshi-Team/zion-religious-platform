export interface TorahVerse {
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
}

export interface TorahChapter {
  number: number
  name: string
  hebrewName: string
  book: string
  verses: number
  versesData: TorahVerse[]
  summary: string
  themes: string[]
  portion?: string
  aliyah?: number
}

export interface TorahBook {
  name: string
  englishName: string
  hebrewName: string
  chapters: number
  portions: string[]
}

export interface TorahPortion {
  key: string
  name: string
  hebrewName: string
  transliteratedName: string
  book: string
  chapters: string[]
  verses: number
  summary: string
  themes: string[]
  haftarah: string
}

export interface TorahTranslation {
  id: string
  name: string
  language: string
  copyright: string
  source: string
}

export interface TorahCommentary {
  rashi: string
  ibnEzra: string
  rambam: string
  chabad: string
  artscroll: string
  general: string
}

export interface TorahSearchResult {
  reference: string
  hebrewText: string
  englishText: string
  transliteration: string
  book: string
  chapter: number
  verse: number
  portion?: string
}

export interface TorahVerseOfDay {
  reference: string
  hebrewText: string
  englishText: string
  transliteration: string
  book: string
  chapter: number
  verse: number
  portion?: string
  commentary?: string
} 