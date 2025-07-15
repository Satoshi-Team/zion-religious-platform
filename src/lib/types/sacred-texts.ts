export type SacredTextContentType = "text" | "commentary" | "translation"

export interface SacredTextContent {
  type: SacredTextContentType
  language: string
  url: string
}

export interface SacredText {
  id: string
  name: string
  originalName?: string
  religion: string
  description: string
  content: SacredTextContent[]
  academicResources?: any[]
  digitalArchives?: any[]
  lastVerified?: string
  language: string  // Required by the type system
  period: string    // Required by the type system
}