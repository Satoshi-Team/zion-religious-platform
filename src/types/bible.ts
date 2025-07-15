export interface BibleVerse {
  reference: string
  text: string
  translation: string
  context?: string
  crossReferences?: Array<{
    reference: string
    text: string
  }>
  commentary?: string
  relatedVerses: string[]
}

export interface BibleTranslation {
  id: string
  name: string
  language: string
  copyright: string
  source: string
}

export interface BibleBook {
  name: string
  testament: "Old" | "New"
  category: string
  chapters: number
  description: string
  keyThemes: string[]
}

export interface BibleChapter {
  book: string
  chapter: number
  verses: BibleVerse[]
}

export interface BibleSearchResult {
  query: string
  results: BibleVerse[]
  total: number
  page: number
  pageSize: number
}

export interface BibleCommentary {
  reference: string
  author: string
  text: string
  source: string
  date?: string
}

export interface BibleCrossReference {
  reference: string
  text: string
  relationship: string
  source: string
}

export interface BibleStudyNote {
  id: string
  reference: string
  title: string
  content: string
  tags: string[]
  date: string
  author?: string
  updatedAt?: string
}

export interface BibleDictionaryEntry {
  term: string
  definition: string
  references: string[]
  category: string
}

export interface BibleTimelineEvent {
  date: string
  title: string
  description: string
  references: string[]
  category: string
}

export interface BibleMap {
  name: string
  description: string
  imageUrl: string
  references: string[]
  coordinates: {
    lat: number
    lng: number
  }
}

export interface BibleCharacter {
  name: string
  description: string
  references: string[]
  relationships: Array<{
    name: string
    relationship: string
    references: string[]
  }>
  timeline: Array<{
    event: string
    reference: string
    date?: string
  }>
  locations: Array<{
    name: string
    references: string[]
    coordinates?: {
      lat: number
      lng: number
    }
  }>
  attributes: Array<{
    trait: string
    description: string
    references: string[]
  }>
}

export interface BibleTheme {
  name: string
  description: string
  references: string[]
  relatedThemes: string[]
  keyVerses: string[]
}

export interface BibleWordStudy {
  word: string
  reference: string
  hebrew?: {
    text: string
    transliteration: string
    meaning: string
    root: string
    partOfSpeech: string
  }
  greek?: {
    text: string
    transliteration: string
    meaning: string
    root: string
    partOfSpeech: string
  }
  definitions: Array<{
    source: string
    definition: string
    partOfSpeech: string
    examples: string[]
  }>
  usage: Array<{
    reference: string
    text: string
    translation: string
    context: string
  }>
  relatedWords: Array<{
    word: string
    relationship: string
    references: string[]
  }>
  etymology?: {
    origin: string
    history: string
    cognates: string[]
  }
}

export interface BibleOriginalLanguage {
  reference: string
  hebrew?: {
    text: string
    transliteration: string
    morphology: Array<{
      word: string
      partOfSpeech: string
      tense: string
      person: string
      number: string
      gender: string
      stem: string
    }>
  }
  greek?: {
    text: string
    transliteration: string
    morphology: Array<{
      word: string
      partOfSpeech: string
      tense: string
      voice: string
      mood: string
      person: string
      number: string
      gender: string
      case: string
    }>
  }
  transliteration: string
  morphology: Array<{
    word: string
    language: "Hebrew" | "Greek"
    analysis: any
  }>
  syntax: {
    clauses: Array<{
      type: string
      words: string[]
      function: string
    }>
    relationships: Array<{
      type: string
      from: string
      to: string
    }>
  }
}

export interface BibleNote {
  id: string
  reference: string
  title: string
  content: string
  tags: string[]
  date: string
  author?: string
  highlights?: Array<{
    text: string
    color: string
    note?: string
  }>
  bookmarks?: Array<{
    reference: string
    title: string
    note?: string
  }>
}

export interface BibleStudySession {
  id: string
  userId: string
  startTime: string
  endTime?: string
  verses: Array<{
    reference: string
    notes: string[]
    highlights: Array<{
      text: string
      color: string
    }>
  }>
  tags: string[]
}

export interface DetailedBibleStudyPlan {
  id: string
  title: string
  description: string
  duration: string
  topics: string[]
  readings: Array<{
    day: number
    references: string[]
    notes: string
    questions: Array<{
      question: string
      answer?: string
    }>
    activities: Array<{
      type: string
      description: string
      resources?: string[]
    }>
  }>
  author: string
  date: string
  prerequisites?: string[]
  resources: Array<{
    type: string
    title: string
    url: string
    description: string
  }>
  progress?: {
    currentDay: number
    completedDays: number[]
    lastRead: string
    notes: Array<{
      day: number
      content: string
      date: string
    }>
  }
}

export interface BibleQuiz {
  id: string
  title: string
  description: string
  questions: Array<{
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
    reference: string
  }>
  difficulty: "beginner" | "intermediate" | "advanced"
  timeLimit?: number
  passingScore: number
}

export interface BibleDictionary {
  term: string
  definition: string
  references: string[]
  category: string
  relatedTerms: string[]
  etymology?: string
  usage: Array<{
    reference: string
    context: string
  }>
}

export interface BibleTimeline {
  events: Array<{
    date: string
    title: string
    description: string
    references: string[]
    category: string
    location?: {
      name: string
      coordinates: {
        lat: number
        lng: number
      }
    }
  }>
  periods: Array<{
    start: string
    end: string
    title: string
    description: string
    keyEvents: string[]
  }>
}

export interface BibleMap {
  name: string
  description: string
  imageUrl: string
  references: string[]
  coordinates: {
    lat: number
    lng: number
  }
  markers: Array<{
    name: string
    coordinates: {
      lat: number
      lng: number
    }
    description: string
    references: string[]
  }>
  regions: Array<{
    name: string
    description: string
    references: string[]
    coordinates: Array<{
      lat: number
      lng: number
    }>
  }>
}

export interface BibleTheme {
  name: string
  description: string
  references: string[]
  relatedThemes: string[]
  keyVerses: string[]
  subthemes: Array<{
    name: string
    description: string
    references: string[]
  }>
  development: Array<{
    period: string
    description: string
    references: string[]
  }>
}

export interface BibleConcordance {
  word: string
  occurrences: Array<{
    reference: string
    text: string
    translation: string
    context?: {
      before: string
      word: string
      after: string
    }
    notes?: string
  }>
  totalOccurrences: number
  relatedWords?: string[]
  definitions?: Array<{
    source: string
    definition: string
    partOfSpeech: string
  }>
}

export interface BiblePrayerEntry {
  id: string
  date: string
  title: string
  content: string
  category?: string
  tags?: string[]
  answered?: boolean
  answerDate?: string
  answerNotes?: string
  relatedVerses?: string[]
  mood?: 'joyful' | 'grateful' | 'anxious' | 'sad' | 'hopeful' | 'peaceful'
  privacy?: 'private' | 'shared' | 'public'
  createdAt: string
  updatedAt: string
}

export interface BibleShareOptions {
  verse: BibleVerse
  message: string
  platforms: Array<"twitter" | "facebook" | "email">
}

export interface BibleReadingPlan {
  id: string
  title: string
  description: string
  duration: string
  topics: string[]
  readings: Array<{
    day: number
    references: string[]
    notes: string
    questions?: Array<{
      question: string
      answer?: string
    }>
  }>
  author: string
  date: string
  resources: Array<{
    title: string
    description: string
    url: string
  }>
} 