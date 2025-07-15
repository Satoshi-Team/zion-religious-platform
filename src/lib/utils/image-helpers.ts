import { Station } from '@/types/station'
import { STATION_IMAGES } from '../constants/station-images'
import { StationImages } from '@/types/station-images'

interface StationImage {
  url: string
  description: string
}

interface StationImagesMap {
  [key: string]: StationImage
}

// Cast the imported STATION_IMAGES to StationImagesMap
const typedStationImages = STATION_IMAGES as StationImagesMap

// Rename this to LOCAL_STATION_IMAGES to avoid conflict
const LOCAL_STATION_IMAGES: StationImagesMap = {
  "कर्नाटक भक्ति": {
    url: "...",
    description: "..."
  },
  "राजस्थानी भक्ति": {
    url: "...",
    description: "..."
  },
  "বাংলা কীর্তন": {
    url: "...",
    description: "..."
  }
  // ... rest of your station images
}

export function getStationImage(station: Station): string {
  // Use the typed version
  if (typedStationImages[station.name]?.url) {
    return typedStationImages[station.name].url
  }

  // Try local image
  const sanitizedName = station.name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')

  return `/images/stations/stations/${sanitizedName}.webp`
}

export function getStationFallbackImage(station: Station): string {
  // Use the typed version
  if (station.genre) {
    const genreKey = `${station.genre.toLowerCase()}_default`
    if (typedStationImages[genreKey]?.url) return typedStationImages[genreKey].url
  }

  if (station.country) {
    const countryKey = `${station.country.toLowerCase()}_default`
    if (typedStationImages[countryKey]?.url) return typedStationImages[countryKey].url
  }

  // Default fallback
  return typedStationImages.default.url
} 