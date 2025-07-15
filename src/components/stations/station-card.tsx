'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Pause, Radio, Heart } from "lucide-react"
import { useAudioStore } from "@/lib/stores/audio-store"
import { cn } from "@/lib/utils"
import { type Station } from "@/lib/types"

interface StationCardProps {
  station: Station
  className?: string
}

export function StationCard({ station, className }: StationCardProps) {
  const { currentStation, isPlaying, isBuffering, playStation } = useAudioStore()
  
  const isCurrentStation = currentStation?.id === station.id
  const isCurrentlyPlaying = isCurrentStation && isPlaying

  const handlePlay = async () => {
    try {
      await playStation(station)
    } catch (error) {
      console.error('Failed to play station:', error)
    }
  }

  return (
    <Card className={cn("group relative overflow-hidden", className)}>
      <div className="aspect-square">
        {station.favicon ? (
          <img 
            src={station.favicon} 
            alt={station.name}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <Radio className="h-12 w-12 text-muted-foreground" />
          </div>
        )}
      </div>
      
      <Button
        onClick={handlePlay}
        variant="secondary"
        size="icon"
        className={cn(
          "absolute bottom-4 right-4 rounded-full shadow-lg",
          isBuffering && isCurrentStation && "animate-pulse"
        )}
      >
        {isCurrentlyPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
      </Button>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold line-clamp-1">{station.name}</h3>
            <p className="text-sm text-muted-foreground">
              {station.country} • {station.language}
            </p>
          </div>
          <Button variant="ghost" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {station.genres?.map(genre => (
            <span 
              key={genre}
              className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
} 