import { type Station } from "@/types/station"
import { STATION_CATEGORIES, LANGUAGES } from "@/lib/constants/stations"

interface UserPreferences {
  genres?: string[]
  languages?: string[]
  quality?: 'low' | 'medium' | 'high'
}

export function getStationsByGenre(stations: Station[], genre: string): Station[] {
  return stations.filter(station => station.genre === genre)
}

export function getStationsByLanguage(stations: Station[], language: keyof typeof LANGUAGES): Station[] {
  return stations.filter(station => station.language === language)
}

export function getStationsByRegion(stations: Station[], region: string): Station[] {
  const regionCountries = Object.values(STATION_CATEGORIES.REGION)
    .flat()
    .filter(country => country.includes(region))
  return stations.filter(station => station.country && regionCountries.includes(station.country))
}

export function getHighQualityStations(stations: Station[]): Station[] {
  return stations.filter(station => (station.bitrate ?? 0) >= 256)
}

export function sortStationsByPopularity(stations: Station[]): Station[] {
  return [...stations].sort((a, b) => {
    // Calculate popularity score based on available properties
    const getPopularityScore = (station: Station) => {
      let score = 0
      // Add points for verified status
      if (station.isVerified) score += 100
      // Add points for having a favicon
      if (station.favicon) score += 10
      // Add points for having a higher bitrate
      if (station.bitrate) score += Math.floor(station.bitrate / 32)
      // Add points for having tags
      if (station.tags) score += station.tags.length
      return score
    }

    return getPopularityScore(b) - getPopularityScore(a)
  })
}

export function groupStationsByGenre(stations: Station[]): Record<string, Station[]> {
  return stations.reduce((acc, station) => {
    const genre = station.genre || 'Unknown'
    if (!acc[genre]) acc[genre] = []
    acc[genre].push(station)
    return acc
  }, {} as Record<string, Station[]>)
}

export function getRecommendedStations(
  stations: Station[],
  userPreferences: {
    genres?: string[]
    languages?: string[]
    quality?: 'low' | 'medium' | 'high'
  }
): Station[] {
  return stations.filter(station => {
    const matchesGenre = !userPreferences.genres?.length || 
      (station.genre && userPreferences.genres.includes(station.genre))
    const matchesLanguage = !userPreferences.languages?.length || 
      (station.language && userPreferences.languages.includes(station.language))
    const matchesQuality = !userPreferences.quality || 
      (station.bitrate && getBitrateCategory(station.bitrate) === userPreferences.quality)
    
    return matchesGenre && matchesLanguage && matchesQuality
  })
}

function getBitrateCategory(bitrate: number): 'low' | 'medium' | 'high' {
  if (bitrate >= 256) return 'high'
  if (bitrate >= 128) return 'medium'
  return 'low'
}

export function filterStationsByPreferences(stations: Station[], userPreferences: UserPreferences): Station[] {
  return stations.filter(station => {
    const matchesGenre = !userPreferences.genres?.length || 
      (station.genre && userPreferences.genres.includes(station.genre))
    const matchesLanguage = !userPreferences.languages?.length || 
      (station.language && userPreferences.languages.includes(station.language))
    const matchesQuality = !userPreferences.quality || (() => {
      if (!station.bitrate) return false
      switch (userPreferences.quality) {
        case 'low': return station.bitrate <= 64
        case 'medium': return station.bitrate > 64 && station.bitrate <= 128
        case 'high': return station.bitrate > 128
        default: return true
      }
    })()

    return matchesGenre && matchesLanguage && matchesQuality
  })
} 