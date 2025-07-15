"use client"

import { useEffect, useRef } from "react"
import { useAudioStore } from "@/lib/stores/audio-store"
import { useProgressStore } from "@/lib/stores/progress-store"
import { useStreakStore } from "@/lib/stores/streak-store"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2 } from "lucide-react"

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const {
    isPlaying,
    currentTrack,
    currentTime,
    duration,
    volume,
    setPlaying,
    setCurrentTime,
    setDuration,
    setVolume
  } = useAudioStore()

  const { startSession, completeSession } = useProgressStore()

  const updateStreak = useStreakStore(state => state.updateStreak)

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.play()
      else audioRef.current.pause()
    }
  }, [isPlaying, currentTrack])

  useEffect(() => {
    if (currentTrack?.id) {
      startSession(currentTrack.id)
    }
  }, [currentTrack])

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleEnded = () => {
    completeSession()
    updateStreak()
    setPlaying(false)
  }

  if (!currentTrack) return null

  return (
    <Card className="fixed bottom-0 left-0 right-0 p-4">
      <audio
        ref={audioRef}
        src={currentTrack.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause /> : <Play />}
        </Button>
        <Slider
          value={[currentTime]}
          max={duration}
          step={1}
          onValueChange={([value]) => {
            if (audioRef.current) {
              audioRef.current.currentTime = value
              setCurrentTime(value)
            }
          }}
        />
        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4" />
          <Slider
            value={[volume]}
            max={1}
            step={0.1}
            className="w-24"
            onValueChange={([value]) => {
              if (audioRef.current) {
                audioRef.current.volume = value
                setVolume(value)
              }
            }}
          />
        </div>
      </div>
    </Card>
  )
} 