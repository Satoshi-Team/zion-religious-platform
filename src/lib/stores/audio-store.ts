import { create } from 'zustand'
import { verifyStream, getProxiedUrl } from '@/lib/utils/verify-stream'

interface Station {
  id: string
  name: string
  url: string
  url_resolved?: string
  alternateStreams?: string[]
  favicon?: string
  genre?: string
  country?: string
}

interface AudioTrack {
  id?: string
  url: string
  title?: string
  author?: string
}

interface AudioState {
  isPlaying: boolean
  currentStation: Station | null
  currentTrack: AudioTrack | null
  currentTime: number
  duration: number
  volume: number
  isBuffering: boolean
  error: string | null
  audioRef: HTMLAudioElement | null
  
  // Actions
  setPlaying: (isPlaying: boolean) => void
  setStation: (station: Station | null) => void
  setVolume: (volume: number) => void
  setBuffering: (isBuffering: boolean) => void
  setError: (error: string | null) => void
  setAudioRef: (ref: HTMLAudioElement | null) => void
  setCurrentTime: (time: number) => void
  setDuration: (duration: number) => void
  togglePlay: () => void
  playStation: (station: Station) => Promise<void>
  setTrack: (track: AudioTrack) => void
}

export const useAudioStore = create<AudioState>((set, get) => ({
  isPlaying: false,
  currentStation: null,
  currentTrack: null,
  currentTime: 0,
  duration: 0,
  volume: 1,
  isBuffering: false,
  error: null,
  audioRef: null,

  setPlaying: (isPlaying) => set({ isPlaying }),
  setStation: (station) => set({ currentStation: station }),
  setVolume: (volume) => set({ volume }),
  setBuffering: (isBuffering) => set({ isBuffering }),
  setError: (error) => set({ error }),
  setAudioRef: (ref) => set({ audioRef: ref }),
  setCurrentTime: (time) => set({ currentTime: time }),
  setDuration: (duration) => set({ duration }),
  
  togglePlay: () => {
    const { isPlaying, currentStation, audioRef } = get()
    if (!currentStation || !audioRef) return
    
    if (isPlaying) {
      audioRef.pause()
      set({ isPlaying: false })
    } else {
      set({ isBuffering: true })
      audioRef.play()
        .then(() => set({ isPlaying: true, isBuffering: false, error: null }))
        .catch(error => {
          console.error('Playback error:', error)
          set({ 
            isPlaying: false, 
            isBuffering: false,
            error: 'Unable to play station. Please try again.' 
          })
        })
    }
  },
  
  playStation: async (station) => {
    const { audioRef } = get()
    if (!audioRef) return

    set({ isBuffering: true, error: null })
    
    // Stop current playback
    audioRef.pause()
    audioRef.currentTime = 0
    audioRef.src = ''

    const streamUrls = [
      station.url_resolved,
      station.url,
      ...(station.alternateStreams || [])
    ].filter((url): url is string => !!url)

    for (const url of streamUrls) {
      try {
        // Verify stream before attempting to play
        const isValid = await verifyStream(url)
        if (!isValid) {
          console.warn(`Stream validation failed for ${url}`)
          continue
        }

        const proxiedUrl = getProxiedUrl(url)
        console.log('Attempting playback:', proxiedUrl)
        
        audioRef.src = proxiedUrl
        audioRef.load()

        // Wait for canplay event
        await new Promise((resolve, reject) => {
          const timeoutId = setTimeout(() => {
            reject(new Error('Stream loading timeout'))
          }, 10000)

          const canPlayHandler = () => {
            clearTimeout(timeoutId)
            audioRef.removeEventListener('canplay', canPlayHandler)
            resolve(true)
          }

          audioRef.addEventListener('canplay', canPlayHandler)
        })

        await audioRef.play()
        
        set({ 
          currentStation: station, 
          isPlaying: true, 
          isBuffering: false,
          error: null 
        })
        return
      } catch (error) {
        console.warn(`Playback failed for ${url}:`, error)
      }
    }

    set({ 
      isBuffering: false,
      error: 'Unable to play this station. Please try another one.'
    })
  },
  
  setTrack: (track) => set({ 
    currentTrack: track,
    isPlaying: true,
    error: null 
  }),
})) 