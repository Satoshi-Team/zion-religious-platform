interface TranslationSection {
  title: string
  description: string
}

interface NavigationSection {
  home: string
  studies: string
  teachings: string
  resources: string
  meditation: string
  sacredTexts: string
}

interface SacredTextSection {
  title: string
  description: string
  features: string[]
  resources: {
    translations: string[]
    commentaries: string[]
    studyGuides: string[]
  }
  onlineAccess: {
    website: string
    app?: string
  }
}

interface ResourceSection {
  title: string
  description: string
  level: string
  topics: string[]
  materials: string[]
  studyTips: string[]
}

export interface TranslationStructure {
  home: TranslationSection
  nav: NavigationSection
  studies: TranslationSection
  teachings: TranslationSection
  resources: TranslationSection
  meditation: TranslationSection
  sacredTexts: {
    bible: SacredTextSection
    quran: SacredTextSection
    buddhist: SacredTextSection
    hindu: SacredTextSection
    sikh: SacredTextSection
    zoroastrian: SacredTextSection
  }
  resourcePages: {
    beginner: ResourceSection
    intermediate: ResourceSection
    advanced: ResourceSection
  }
  history: {
    ancient: TranslationSection
    medieval: TranslationSection
    modern: TranslationSection
  }
}

export type SupportedLanguages = 'en' | 'zh' | 'hi' | 'es' | 'ar' | 'bn' | 'pt' | 'ru' | 'ja' | 'ur' 