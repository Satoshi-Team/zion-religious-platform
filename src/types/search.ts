// Add ResourceType definition at the top
type ResourceType = 'article' | 'video' | 'audio' | 'book' | 'course' | 'meditation' | 'sacred_text' | 'study' | 'content'

export interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  type: ResourceType
  tags: string[]
  createdAt: string
  updatedAt: string
  isVerified?: boolean
  verificationSource?: string
}