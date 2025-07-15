"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { Slider } from '@/components/ui/slider'
import { useTranslations } from '@/hooks/use-translations'

interface Station {
  title: string
  country: string
  description: string
  tradition: string
  language: string
  tags: string[]
  streamUrl: string
}

interface RadioGridProps {
  stations: Station[]
  category?: string
}

export function RadioGrid({ stations, category }: RadioGridProps) {
  const { t } = useTranslations()
  const [activeStation, setActiveStation] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(100)
  const [isMuted, setIsMuted] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  // Initialize audio element only on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const audioElement = new Audio()
      setAudio(audioElement)
    }
  }, [])

  const handlePlay = (station: Station) => {
    if (!audio) return

    if (activeStation === station.title) {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        audio.play()
        setIsPlaying(true)
      }
    } else {
      audio.src = station.streamUrl
      audio.play()
      setActiveStation(station.title)
      setIsPlaying(true)
    }
  }

  const handleVolumeChange = (value: number[]) => {
    if (!audio) return
    
    const newVolume = value[0]
    setVolume(newVolume)
    audio.volume = newVolume / 100
    setIsMuted(newVolume === 0)
  }

  const handleMute = () => {
    if (!audio) return
    
    if (isMuted) {
      audio.volume = volume / 100
      setIsMuted(false)
    } else {
      audio.volume = 0
      setIsMuted(true)
    }
  }

  const filteredStations = category 
    ? stations.filter(station => station.tradition === category)
    : stations

  if (filteredStations.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">{t('listen.noStations')}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredStations.map((station) => (
        <Card key={station.title} className="flex flex-col">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                <span className="text-2xl">📻</span>
              </div>
              <div>
                <CardTitle>{station.title}</CardTitle>
                <CardDescription>
                  {station.language} • {station.country}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{station.description}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {station.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="text-xs bg-secondary px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4 w-full">
              <Button
                variant={activeStation === station.title && isPlaying ? "destructive" : "default"}
                size="icon"
                onClick={() => handlePlay(station)}
                disabled={!audio}
              >
                {activeStation === station.title && isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
              <div className="flex items-center space-x-2 flex-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleMute}
                  disabled={!audio}
                >
                  {isMuted ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </Button>
                <Slider
                  value={[isMuted ? 0 : volume]}
                  onValueChange={handleVolumeChange}
                  max={100}
                  step={1}
                  className="w-full"
                  disabled={!audio}
                />
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
} 