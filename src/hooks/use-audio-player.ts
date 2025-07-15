"use client"

import { useRef, useEffect, useState } from "react"
import { usePlayerStore } from "@/stores/player-store"
import { type Station } from "@/types/station"

interface AudioPlayerState {
  isPlaying: boolean
  isBuffering: boolean
  volume: number
  error: string | null
}

export function useAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [state, setState] = useState<AudioPlayerState>({
    isPlaying: false,
    isBuffering: false,
    volume: 1,
    error: null,
  })

  const { 
    currentStation,
    setCurrentStation,
    stations,
    currentIndex,
    setCurrentIndex 
  } = usePlayerStore()

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio()
      audioRef.current.volume = state.volume
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!audioRef.current || !currentStation) return

    audioRef.current.src = currentStation.url
    if (state.isPlaying) {
      audioRef.current.play().catch(handlePlayError)
    }
  }, [currentStation])

  const handlePlayError = (error: Error) => {
    console.error('Playback error:', error)
    setState(prev => ({ ...prev, error: 'Unable to play station. Please try again.' }))
  }

  const togglePlay = async () => {
    if (!audioRef.current || !currentStation) return

    try {
      if (state.isPlaying) {
        audioRef.current.pause()
        setState(prev => ({ ...prev, isPlaying: false }))
      } else {
        setState(prev => ({ ...prev, isBuffering: true }))
        await audioRef.current.play()
        setState(prev => ({ 
          ...prev, 
          isPlaying: true, 
          isBuffering: false,
          error: null 
        }))
      }
    } catch (error) {
      handlePlayError(error as Error)
    }
  }

  const setVolume = (value: number) => {
    if (!audioRef.current) return
    audioRef.current.volume = value
    setState(prev => ({ ...prev, volume: value }))
  }

  const nextStation = () => {
    if (!stations.length) return
    const nextIndex = (currentIndex + 1) % stations.length
    setCurrentIndex(nextIndex)
    setCurrentStation(stations[nextIndex])
  }

  const previousStation = () => {
    if (!stations.length) return
    const prevIndex = currentIndex <= 0 ? stations.length - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
    setCurrentStation(stations[prevIndex])
  }

  return {
    ...state,
    audioRef,
    currentStation,
    togglePlay,
    setVolume,
    nextStation,
    previousStation,
  }
}