export type ResourceType = "audio" | "video" | "text" | "study" | "course" | "reference" | "research"

export interface ReligiousResource {
  id: string
  name: string
  description: string
  url: string
  type: ResourceType
  religion: string
  language: string
  featured?: boolean
  isVerified?: boolean
  topics?: string[]
  organization?: string
}

export interface ReligiousStudy {
  id: string
  name: string
  description: string
  url: string
  type: ResourceType
  religion: string
  language: string
  topics?: string[]
  organization?: string
  isVerified?: boolean
  verifiedBy?: string
  availableLanguages?: string[]
} 