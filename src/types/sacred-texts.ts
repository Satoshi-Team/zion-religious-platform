export interface SacredTextResource {
  title: string
  tradition?: string
  description: string
  languages: string[]
  features?: string[]
  sections?: string[]
  resources: {
    translations: string[]
    commentaries: string[]
    study_guides: string[]
  }
  online_access?: {
    website: string
    app?: string
    api?: string
  }
}

export interface TextCategory {
  name: string
  description: string
  texts: {
    name: string
    content?: string
    chapters?: number
    themes: string[]
  }[]
}

export interface SacredTextCollection {
  title: string
  tradition: string
  description: string
  languages: string[]
  resources: {
    translations: string[]
    commentaries: string[]
    study_guides: string[]
  }
  href: string
} 