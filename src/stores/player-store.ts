"use client"

import { create } from 'zustand'
import { type Station } from '@/types/station'
import { VERIFIED_STATIONS } from '@/lib/constants/stations'

interface PlayerState {
  currentStation: Station | null
  currentTrack: string | null
  isPlaying: boolean
  isLoading: boolean
  volume: number
  stations: Station[]
  audioElement: HTMLAudioElement | null
  error: string | null
  playStation: (station: Station) => void
  pause: () => void
  togglePlay: () => void
  setVolume: (volume: number) => void
  nextStation: () => void
  previousStation: () => void
  initializeAudio: () => void
  currentIndex: number
  setCurrentStation: (station: Station) => void
  setStations: (stations: Station[]) => void
  setCurrentIndex: (index: number) => void
  setLoading: (loading: boolean) => void
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentStation: null,
  currentTrack: null,
  isPlaying: false,
  isLoading: false,
  volume: 80,
  error: null,
  stations: VERIFIED_STATIONS,
  audioElement: null,
  currentIndex: -1,

  initializeAudio: () => {
    if (typeof window === 'undefined') return
    
    const audio = new Audio()
    audio.volume = get().volume / 100
    
    set({ audioElement: audio })
  },

  playStation: async (station: Station) => {
    const { currentStation, audioElement, isPlaying } = get()
    
    try {
      if (currentStation?.id === station.id) {
        get().togglePlay()
        return
      }

      set({ isLoading: true, error: null })

      if (audioElement) {
        audioElement.pause()
        audioElement.src = ''
      }

      if (!audioElement) {
        get().initializeAudio()
        return
      }

      audioElement.src = station.url
      audioElement.load()

      await new Promise((resolve, reject) => {
        if (!audioElement) return reject('No audio element')

        const timeoutId = setTimeout(() => {
          reject(new Error('Loading timeout'))
        }, 10000)

        audioElement.oncanplay = () => {
          clearTimeout(timeoutId)
          resolve(true)
        }

        audioElement.onerror = () => {
          clearTimeout(timeoutId)
          reject(new Error('Failed to load audio'))
        }
      })

      await audioElement.play()

      set({
        currentStation: station,
        isPlaying: true,
        isLoading: false,
        error: null
      })

    } catch (error) {
      console.error('Playback failed:', error)
      set({
        error: 'Unable to play this station. Please try another one.',
        isPlaying: false,
        isLoading: false
      })
    }
  },

  pause: () => set({ isPlaying: false }),

  togglePlay: () => {
    const { audioElement, isPlaying, currentStation } = get()
    if (!audioElement || !currentStation) return

    if (isPlaying) {
      audioElement.pause()
    } else {
      audioElement.play()
    }
    
    set({ isPlaying: !isPlaying })
  },

  setVolume: (volume: number) => {
    const { audioElement } = get()
    if (audioElement) {
      audioElement.volume = volume / 100
    }
    set({ volume })
  },

  nextStation: () => {
    const { currentStation, stations } = get()
    if (!currentStation) return

    const currentIndex = stations.findIndex((s: Station) => s.id === currentStation.id)
    const nextIndex = (currentIndex + 1) % stations.length
    get().playStation(stations[nextIndex])
  },

  previousStation: () => {
    const { currentStation, stations } = get()
    if (!currentStation) return

    const currentIndex = stations.findIndex((s: Station) => s.id === currentStation.id)
    const previousIndex = (currentIndex - 1 + stations.length) % stations.length
    get().playStation(stations[previousIndex])
  },

  setCurrentStation: (station) => set({ currentStation: station }),

  setStations: (stations) => set({ stations }),

  setCurrentIndex: (index) => set({ currentIndex: index }),

  setLoading: (loading) => set({ isLoading: loading })
}))

// Initialize audio element on the client side
if (typeof window !== 'undefined') {
  usePlayerStore.getState().initializeAudio()
} 