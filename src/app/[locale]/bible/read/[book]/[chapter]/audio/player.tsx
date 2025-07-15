"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { bibleService } from "@/lib/services/bible-service"

interface AudioPlayerProps {
  params: {
    book: string
    chapter: string
  }
}

export function AudioPlayer({ params }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadAudio() {
      try {
        const url = await bibleService.getAudioUrl(params.book, parseInt(params.chapter))
        setAudioUrl(url)
      } catch (err) {
        setError("Failed to load audio. Please try again later.")
        console.error("Error loading audio:", err)
      }
    }

    loadAudio()
  }, [params.book, params.chapter])

  if (error) return <div className="text-red-500">{error}</div>
  if (!audioUrl) return <div>Loading audio...</div>

  return (
    <div className="space-y-4">
      <audio
        src={audioUrl}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            const audio = document.querySelector("audio")
            if (audio) {
              if (isPlaying) {
                audio.pause()
              } else {
                audio.play()
              }
              setIsPlaying(!isPlaying)
            }
          }}
        >
          {isPlaying ? "Pause" : "Play"}
        </Button>

        <Slider
          value={[currentTime]}
          max={duration}
          step={1}
          onValueChange={([value]) => {
            const audio = document.querySelector("audio")
            if (audio) {
              audio.currentTime = value
              setCurrentTime(value)
            }
          }}
          className="flex-1"
        />

        <div className="text-sm text-muted-foreground">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
    </div>
  )
}

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
} 