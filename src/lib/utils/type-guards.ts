import { type Station } from "@/types/station"
import { LANGUAGES, STATION_GENRES, GENRE_CATEGORIES } from "@/lib/constants/stations"

export function isValidLanguage(language: string): language is keyof typeof LANGUAGES {
  return language in LANGUAGES
}

export function isValidGenre(genre: string): genre is typeof STATION_GENRES[number] {
  return STATION_GENRES.includes(genre)
}

export function isMainGenre(genre: string): boolean {
  return GENRE_CATEGORIES.MAIN.includes(genre)
}

export function isSpecializedGenre(genre: string): boolean {
  return GENRE_CATEGORIES.SPECIALIZED.includes(genre)
}

export function isValidStation(station: unknown): station is Station {
  if (!station || typeof station !== 'object') return false
  
  const s = station as Station
  return (
    typeof s.id === 'string' &&
    typeof s.name === 'string' &&
    typeof s.url === 'string' &&
    typeof s.genre === 'string' &&
    isValidGenre(s.genre) &&
    typeof s.country === 'string' &&
    (!s.language || isValidLanguage(s.language))
  )
} 