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
  isWorking?: boolean
}

export interface RadioStation extends BaseRadioStation {
  stationuuid: string
  url_resolved: string
  homepage: string
  countrycode: string
  votes: number
  lastchangetime: string
  hls: boolean
  lastcheckok: boolean
  lastchecktime: string
  lastcheckoktime: string
  lastlocalchecktime: string
  clicktimestamp: string
  clickcount: number
  clicktrend: number
}

export interface Station extends BaseRadioStation {
  id: string
  genre: string
}

export interface RadioBrowserRequest {
  endpoint: string
  params: Record<string, string>
}

export function toStation(radio: Partial<RadioStation> & BaseRadioStation): Station {
  return {
    ...radio,
    id: radio.id || radio.stationuuid || 'unknown',
    genre: radio.genre || (Array.isArray(radio.tags) ? radio.tags[0] : 'Unknown')
  } as Station
} 