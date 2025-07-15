"use client"

import { useEffect, useRef } from "react"
import { useAudioStore } from "@/lib/stores/audio-store"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, Volume2, Radio } from "lucide-react"
import { cn } from "@/lib/utils"

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const {
    isPlaying,
    currentStation,
    volume,
    isBuffering,
    error,
    setPlaying,
    setBuffering,
    setError,
    setAudioRef,
    togglePlay
  } = useAudioStore()

  useEffect(() => {
    if (audioRef.current) {
      // Configure audio element
      audioRef.current.crossOrigin = 'anonymous'
      audioRef.current.preload = 'auto'
      setAudioRef(audioRef.current)
      
      const handlePlaying = () => {
        setBuffering(false)
        setError(null)
      }
      
      const handleWaiting = () => setBuffering(true)
      
      const handleError = (e: Event) => {
        const audio = e.target as HTMLAudioElement
        console.error('Audio error:', {
          error: audio.error,
          networkState: audio.networkState,
          readyState: audio.readyState,
          src: audio.src
        })
        setError('Error playing audio stream. Please try again.')
        setPlaying(false)
        setBuffering(false)
      }

      const handleStalled = () => {
        setBuffering(true)
        console.warn('Stream stalled, attempting to resume...')
        audioRef.current?.load()
      }

      audioRef.current.addEventListener('playing', handlePlaying)
      audioRef.current.addEventListener('waiting', handleWaiting)
      audioRef.current.addEventListener('error', handleError)
      audioRef.current.addEventListener('abort', handleError)
      audioRef.current.addEventListener('stalled', handleStalled)

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('playing', handlePlaying)
          audioRef.current.removeEventListener('waiting', handleWaiting)
          audioRef.current.removeEventListener('error', handleError)
          audioRef.current.removeEventListener('abort', handleError)
          audioRef.current.removeEventListener('stalled', handleStalled)
        }
      }
    }
  }, [setBuffering, setError, setAudioRef, setPlaying])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error('Error playing audio:', error)
          setError('Error playing audio stream')
          setPlaying(false)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, setError, setPlaying])

  if (!currentStation) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t">
      <audio
        ref={audioRef}
        preload="auto"
      />
      
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
            {currentStation.favicon ? (
              <img 
                src={currentStation.favicon} 
                alt="" 
                className="h-full w-full rounded object-cover"
              />
            ) : (
              <Radio className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
          <div>
            <div className="font-medium line-clamp-1">{currentStation.name}</div>
            <div className="text-sm text-muted-foreground line-clamp-1">
              {currentStation.genre}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={togglePlay}
            disabled={isBuffering}
            className={cn(
              "h-8 w-8",
              isBuffering && "animate-pulse"
            )}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          
          <div className="hidden sm:flex items-center space-x-2">
            <Volume2 className="h-4 w-4" />
            <Slider
              value={[volume * 100]}
              max={100}
              step={1}
              className="w-24"
              onValueChange={(value) => useAudioStore.setState({ volume: value[0] / 100 })}
            />
          </div>
        </div>
      </div>
      
      {error && (
        <div className="bg-destructive/10 text-destructive text-sm px-4 py-2">
          {error}
        </div>
      )}
    </div>
  )
} 