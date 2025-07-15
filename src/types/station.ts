export interface Station {
  id: string
  name: string
  url: string
  favicon?: string
  genre?: string
  country?: string
  language?: string
  tags?: string[]
  bitrate?: number
  codec?: string
  isVerified?: boolean
  image?: string
  website?: string
  social?: {
    facebook?: string
    twitter?: string
    instagram?: string
    youtube?: string
  }
  alternateStreams?: string[]
  description?: string
  isWorking?: boolean
}

export interface StationResponse {
  stations: Station[]
  total: number
  offset: number
  limit: number
} 