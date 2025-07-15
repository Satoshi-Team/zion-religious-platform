import { RadioBrowserRequest, getRandomBaseUrl } from '@/types/radio-browser'
import { RadioStation, Station, toStation } from '@/types/radio'

const RADIO_BROWSER_API = "https://de1.api.radio-browser.info/json"
const RADIO_GARDEN_API = "https://radio.garden/api/ara/content/places"
const DIRBLE_API = "https://api.dirble.com/v2/stations"

interface FetchStationsParams {
  limit?: number
  offset?: number
  tags?: string[]
  country?: string
  language?: string
}

// Religious station keywords for better filtering
const religiousKeywords = [
  "christian", "gospel", "religious", "worship", "catholic", 
  "buddhist", "islamic", "hindu", "spiritual", "meditation",
  "church", "praise", "faith", "christian rock", "christmas",
  "contemporary christian", "christian contemporary", "hymn",
  "christian music", "religious music", "christian radio"
]

// Add this function to help with CORS issues
function getProxiedUrl(url: string): string {
  // Use a CORS proxy if needed
  if (process.env.NEXT_PUBLIC_CORS_PROXY) {
    return `${process.env.NEXT_PUBLIC_CORS_PROXY}/${url}`
  }
  return url
}

async function fetchRadioBrowserStations(params: FetchStationsParams): Promise<BaseRadioStation[]> {
  const tagsString = [...(params.tags || []), ...religiousKeywords].join(",")
  
  const searchParams = new URLSearchParams({
    limit: params.limit?.toString() || "100",
    offset: params.offset?.toString() || "0",
    tagList: tagsString,
    ...(params.country && { country: params.country }),
    ...(params.language && { language: params.language }),
    hidebroken: "true",
    order: "votes",
    reverse: "true"
  })

  try {
    const response = await fetch(`${RADIO_BROWSER_API}/stations/search?${searchParams}`, {
      next: { revalidate: 3600 }
    })
    
    if (!response.ok) return []
    
    const stations = await response.json()
    return stations.map((station: any) => ({
      id: station.stationuuid,
      name: station.name,
      url: getProxiedUrl(station.url_resolved || station.url),
      favicon: station.favicon || "/images/radio-fallback.png",
      tags: station.tags?.split(",") || [],
      country: station.country || "Unknown",
      language: station.language || "Unknown",
      codec: station.codec || "Unknown",
      bitrate: station.bitrate || 0,
      genre: station.tags?.split(",")[0] || "Unknown",
      votes: station.votes || 0
    }))
  } catch (error) {
    console.error("Error fetching Radio Browser stations:", error)
    return []
  }
}

// Add more verified stations with multiple stream URLs
export const VERIFIED_STATIONS: BaseRadioStation[] = [
  {
    id: "ewtn-spanish",
    name: "EWTN Radio Católica",
    url: "https://ewtn-ice.streamguys1.com/spanish-aac",
    alternateStreams: [
      "https://ewtn-ice.streamguys1.com/spanish-mp3"
    ],
    favicon: "/images/stations/ewtn.png",
    tags: ["catholic", "spanish", "teaching"],
    country: "Spain",
    language: "Spanish",
    codec: "AAC",
    bitrate: 128,
    genre: "Catholic Teaching",
    isVerified: true
  },
  {
    id: "ewtn-english",
    name: "EWTN Radio",
    url: "https://ewtn-ice.streamguys1.com/ewtn-radio",
    alternateStreams: [
      "https://ewtn-ice.streamguys1.com/ewtn-radio-mp3"
    ],
    favicon: "/images/stations/ewtn.png",
    tags: ["catholic", "english", "teaching"],
    country: "United States",
    language: "English",
    codec: "AAC",
    bitrate: 128,
    genre: "Catholic Teaching",
    isVerified: true
  },
  {
    id: "relevant-radio",
    name: "Relevant Radio",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/RR_MAIN.mp3",
    favicon: "/images/stations/relevant.png",
    tags: ["catholic", "english", "teaching"],
    country: "United States",
    language: "English",
    codec: "MP3",
    bitrate: 128,
    genre: "Catholic Teaching",
    isVerified: true
  },
  {
    id: "radio-maria-usa",
    name: "Radio Maria USA",
    url: "https://dreamsiteradiocp4.com/proxy/rmusa?mp=/stream",
    favicon: "/images/stations/radio-maria.png",
    tags: ["catholic", "english", "prayer"],
    country: "United States",
    language: "English",
    codec: "MP3",
    bitrate: 128,
    genre: "Catholic",
    isVerified: true
  },
  {
    id: "muslim-central",
    name: "Muslim Central",
    url: "https://stream.muslimcentral.com/live.mp3",
    alternateStreams: [
      "https://stream.muslimcentral.com/live.aac"
    ],
    favicon: "/images/stations/muslim-central.png",
    tags: ["islamic", "english", "teaching"],
    country: "United States",
    language: "English",
    codec: "MP3",
    bitrate: 128,
    genre: "Islamic Teaching",
    isVerified: true
  },
  {
    id: "quran-radio",
    name: "Quran Radio",
    url: "https://backup.qurango.net/radio/ahmad_khader_altarabulsi",
    favicon: "/images/stations/quran-radio.png",
    tags: ["islamic", "arabic", "quran"],
    country: "Egypt",
    language: "Arabic",
    codec: "MP3",
    bitrate: 128,
    genre: "Islamic",
    isVerified: true
  }
]

// Add this function to validate stream URLs more reliably
async function checkStreamUrl(url: string): Promise<boolean> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000)  // 5 second timeout

    const response = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal  // Use AbortController signal instead of timeout
    })
    
    clearTimeout(timeoutId)  // Clear the timeout if request completes
    
    const contentType = response.headers.get('content-type')
    return contentType?.includes('audio') || false
  } catch (error) {
    return false
  }
}

// Update the fetchStations function
export async function fetchStations(params: FetchStationsParams = {}): Promise<Station[]> {
  const stations = VERIFIED_STATIONS.map(async station => {
    const isWorking = await checkStreamUrl(station.url)
    
    // Try alternate streams if main URL isn't working
    let workingUrl = station.url
    if (!isWorking && station.alternateStreams) {
      for (const altUrl of station.alternateStreams) {
        if (await checkStreamUrl(altUrl)) {
          workingUrl = altUrl
          break
        }
      }
    }
    
    return {
      ...station,
      url: workingUrl,
      isWorking: isWorking || station.alternateStreams?.some(url => url === workingUrl)
    }
  })

  return Promise.all(stations)
}

export async function fetchFeaturedStations(): Promise<Station[]> {
  return fetchStations({
    limit: 12,
    tags: ["religious", "christian", "gospel"],
    language: "english"
  })
}

// Helper function to validate station URL
export async function validateStationUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: "HEAD" })
    return response.ok
  } catch {
    return false
  }
}

// For the fetch timeout error, we'll create a custom fetch with timeout
function fetchWithTimeout(url: string, options: RequestInit & { timeout?: number }) {
  const { timeout = 8000, ...fetchOptions } = options
  
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)

  return fetch(url, {
    ...fetchOptions,
    signal: controller.signal
  }).finally(() => clearTimeout(id))
}

// Replace the existing fetch call with our custom fetch
async function makeRequest({ endpoint, params }: RadioBrowserRequest) {
  const baseUrl = await getRandomBaseUrl()
  const url = `${baseUrl}${endpoint}?${new URLSearchParams(params)}`

  try {
    const response = await fetchWithTimeout(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'MyRadioApp/1.0',
        'Content-Type': 'application/json'
      },
      timeout: 8000
    })

    if (!response.ok) 
      throw new Error(`HTTP error! status: ${response.status}`)
    
    return await response.json()
  } catch (error) {
    console.error('Radio browser API request failed:', error)
    throw error
  }
}

export async function makeRadioBrowserRequest({ endpoint, params }: RadioBrowserRequest): Promise<any> {
  const baseUrl = getRandomBaseUrl()
  // ... rest of the function ...
}

// Update the BaseRadioStation interface to match the one in types/radio.ts
export interface BaseRadioStation {
  id: string
  name: string
  url: string
  favicon: string
  tags: string[]
  country: string
  language: string
  codec: string
  bitrate: number
  genre: string
  alternateStreams?: string[]
  isVerified?: boolean
  votes?: number
} 