import { Station } from "@/types/station"
import { fetchFeaturedStations } from "@/lib/radio-browser"
import { STATION_IMAGES } from "@/lib/constants/station-images"

const DEFAULT_STATIONS: Station[] = [
  {
    id: "liangyou-radio",
    name: "Liangyou Radio",
    genre: "Christian",
    country: "China",
    image: STATION_IMAGES["Liangyou Radio"].url,
    url: "https://liangyou.us/radio/stream"
  },
  {
    id: "glory-gospel",
    name: "Glory Gospel",
    genre: "Gospel",
    country: "United States",
    image: STATION_IMAGES["Glory Gospel"].url,
    url: "https://glorygospel.org/stream"
  },
  {
    id: "voice-of-salvation",
    name: "Voice of Salvation",
    genre: "Christian",
    country: "Taiwan",
    image: STATION_IMAGES["Voice of Salvation"].url,
    url: "https://vos.org/stream"
  },
  {
    id: "chinese-christian-radio",
    name: "Chinese Christian Radio",
    genre: "Christian",
    country: "China",
    image: STATION_IMAGES["Chinese Christian Radio"].url,
    url: "https://ccradio.org/stream"
  },
  {
    id: "heavenly-melody",
    name: "Heavenly Melody",
    genre: "Christian",
    country: "Hong Kong",
    image: STATION_IMAGES["Heavenly Melody"].url,
    url: "https://heavenlymelody.org/stream"
  }
]

class StationService {
  private static instance: StationService
  private cachedStations: Station[] | null = null

  private constructor() {}

  static getInstance(): StationService {
    if (!StationService.instance) {
      StationService.instance = new StationService()
    }
    return StationService.instance
  }

  async loadStationsFromJson(): Promise<Station[]> {
    try {
      console.log('Attempting to load stations from JSON...')
      const response = await fetch('/data/stations.json')
      console.log('JSON response status:', response.status)
      if (!response.ok) throw new Error('Failed to load stations')
      const data = await response.json()
      console.log('Successfully loaded stations:', data.length)
      return data
    } catch (error) {
      console.error('Error loading stations from JSON:', error)
      return []
    }
  }

  async loadStationsFromApi(): Promise<Station[]> {
    try {
      return await fetchFeaturedStations()
    } catch (error) {
      console.error('Error loading stations from API:', error)
      return []
    }
  }

  async getStations(): Promise<Station[]> {
    try {
      // Return cached stations if available
      if (this.cachedStations) return this.cachedStations

      // Try loading from JSON first
      let stations = await this.loadStationsFromJson()
      
      // If JSON fails or returns empty, try API
      if (stations.length === 0) {
        stations = await this.loadStationsFromApi()
      }

      // Cache the results
      this.cachedStations = stations
      return stations

    } catch (error) {
      console.error('Error in getStations:', error)
      return []
    }
  }

  async getStationById(id: string): Promise<Station | null> {
    try {
      const stations = await this.getStations()
      return stations.find(station => station.id === id) || null
    } catch (error) {
      console.error(`Error getting station ${id}:`, error)
      return null
    }
  }

  async getStationsByGenre(genre: string): Promise<Station[]> {
    try {
      const stations = await this.getStations()
      return stations.filter(station => station.genre === genre)
    } catch (error) {
      console.error(`Error getting stations for genre ${genre}:`, error)
      return []
    }
  }

  clearCache() {
    this.cachedStations = null
  }
}

// Export a singleton instance
export const stationService = StationService.getInstance() 