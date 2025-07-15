"use client"

import { createContext, useContext, useRef, useState } from "react"
import { toast } from "sonner"

interface Station {
  title: string
  country: string
  description: string
  tradition: string
  language: string
  tags: string[]
  streamUrl: string
}

interface AudioPlayerContextType {
  currentStation: Station | null
  isPlaying: boolean
  isLoading: boolean
  playStation: (station: Station) => void
  stopPlayback: () => void
  togglePlayback: () => void
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined)

export function AudioPlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentStation, setCurrentStation] = useState<Station | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const stopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.src = ""
    }
    setIsPlaying(false)
    setCurrentStation(null)
  }

  const togglePlayback = () => {
    if (!currentStation || !audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Playback error:", error)
        toast.error(`Unable to play ${currentStation.title}. Please try again.`)
      })
      setIsPlaying(true)
    }
  }

  const playStation = async (station: Station) => {
    try {
      setIsLoading(true)

      // Stop current playback if any
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ""
      }

      // Create new audio element if needed (only on client side)
      if (!audioRef.current && typeof window !== 'undefined') {
        audioRef.current = new Audio()
      }

      if (!audioRef.current) {
        throw new Error("Audio not available")
      }

      const audio = audioRef.current
      audio.preload = "auto"

      // Setup error handling
      audio.onerror = () => {
        setIsLoading(false)
        setIsPlaying(false)
        toast.error(`Unable to play ${station.title}. Please try again.`)
      }

      // Setup success handling
      audio.oncanplay = () => {
        setIsLoading(false)
        audio.play().catch((error) => {
          console.error("Playback error:", error)
          setIsPlaying(false)
          toast.error(`Unable to play ${station.title}. Please try again.`)
        })
        setIsPlaying(true)
      }

      // Setup stream ended handling
      audio.onended = () => {
        setIsPlaying(false)
        setIsLoading(false)
      }

      // Start loading the stream
      audio.src = station.streamUrl
      audio.load()
      setCurrentStation(station)

    } catch (error) {
      console.error("Stream error:", error)
      setIsLoading(false)
      setIsPlaying(false)
      toast.error(`Unable to play ${station.title}. Please try again.`)
    }
  }

  return (
    <AudioPlayerContext.Provider
      value={{
        currentStation,
        isPlaying,
        isLoading,
        playStation,
        stopPlayback,
        togglePlayback,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  )
}

export function useAudioPlayer() {
  const context = useContext(AudioPlayerContext)
  if (context === undefined) {
    throw new Error("useAudioPlayer must be used within an AudioPlayerProvider")
  }
  return context
} 