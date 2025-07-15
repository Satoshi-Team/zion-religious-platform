"use client"

import { useState, useEffect, useRef } from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, Volume2, VolumeX, Music2 } from "lucide-react"
import { useAudioPlayer } from "@/hooks/use-audio-player"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { cn } from "@/lib/utils"

interface SwipeState {
  startY: number
  currentY: number
  isOpen: boolean
}

interface MobilePlayerProps {
  className?: string
}

export function MobilePlayer({ className }: MobilePlayerProps) {
  const {
    isPlaying,
    isBuffering,
    currentStation,
    volume,
    error: playerError,
    togglePlay,
    setVolume,
    audioRef
  } = useAudioPlayer()

  const [isMuted, setIsMuted] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const MAX_RETRIES = 3

  const swipeRef = useRef<SwipeState>({
    startY: 0,
    currentY: 0,
    isOpen: false
  })
  const sheetRef = useRef<HTMLDivElement>(null)

  const [error, setError] = useState<string | null>(playerError)

  const handleTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0]
    swipeRef.current.startY = touch.clientY
    swipeRef.current.isOpen = true
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!swipeRef.current.isOpen) return
    const touch = e.touches[0]
    swipeRef.current.currentY = touch.clientY
    
    const deltaY = swipeRef.current.currentY - swipeRef.current.startY
    if (deltaY > 50) {
      // Swipe down - close sheet
      swipeRef.current.isOpen = false
      if (sheetRef.current) {
        const closeButton = sheetRef.current.querySelector('[data-sheet-close]')
        if (closeButton instanceof HTMLElement) closeButton.click()
      }
    }
  }

  useEffect(() => {
    setError(playerError)
  }, [playerError])

  useEffect(() => {
    if (!audioRef.current) return

    const handleError = async (e: ErrorEvent) => {
      console.error('Audio playback error:', e)
      
      if (retryCount < MAX_RETRIES) {
        setRetryCount(prev => prev + 1)
        setError('Connection lost. Retrying...')
        
        // Retry after a delay
        await new Promise(resolve => setTimeout(resolve, 2000))
        audioRef.current?.load()
        if (isPlaying) audioRef.current?.play()
      } else {
        setError('Unable to play station. Please try a different station.')
      }
    }

    const handleStalled = () => {
      setError('Stream connection stalled. Reconnecting...')
    }

    const handlePlaying = () => {
      setError(null)
      setRetryCount(0)
    }

    audioRef.current.addEventListener('error', handleError)
    audioRef.current.addEventListener('stalled', handleStalled)
    audioRef.current.addEventListener('playing', handlePlaying)

    return () => {
      if (!audioRef.current) return
      audioRef.current.removeEventListener('error', handleError)
      audioRef.current.removeEventListener('stalled', handleStalled)
      audioRef.current.removeEventListener('playing', handlePlaying)
    }
  }, [audioRef, isPlaying, retryCount])

  useEffect(() => {
    const element = sheetRef.current
    if (!element) return

    element.addEventListener('touchstart', handleTouchStart)
    element.addEventListener('touchmove', handleTouchMove)

    return () => {
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  const toggleMute = () => {
    if (!audioRef.current) return
    setIsMuted(!isMuted)
    audioRef.current.muted = !isMuted
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className={cn(
            "fixed bottom-20 right-4 z-50 rounded-full shadow-lg",
            className
          )}
          aria-label="Open audio player"
        >
          <Music2 className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        ref={sheetRef}
        side="bottom" 
        className={cn(
          "h-[40vh] rounded-t-xl touch-pan-y",
          className
        )}
      >
        <div className="flex flex-col h-full space-y-4 p-4">
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          {currentStation && (
            <>
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold truncate">{currentStation.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">{currentStation.genre}</p>
                </div>
              </div>

              <div className="flex items-center justify-between space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMute}
                  className="shrink-0"
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </Button>

                <Slider
                  value={[volume]}
                  max={1}
                  step={0.1}
                  onValueChange={([value]) => setVolume(value)}
                  className="w-[120px]"
                />
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={togglePlay}
                  disabled={isBuffering}
                  className="relative"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                  {isBuffering && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary" />
                    </div>
                  )}
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
} 