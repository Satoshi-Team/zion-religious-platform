"use client"

import React from 'react'
import { MeditationGuide as MeditationGuideType } from "@/lib/constants/meditation-guides"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Download, Clock, Info } from "lucide-react"
import { useAudioStore } from "@/lib/stores/audio-store"

interface MeditationGuideProps {
  guide: MeditationGuideType
}

export function MeditationGuide({ guide }: MeditationGuideProps) {
  const { setTrack } = useAudioStore()

  const formatDuration = (duration: number | string) => {
    if (typeof duration === 'number') return `${Math.floor(duration / 60)} min`
    return duration
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex justify-between items-start">
          <span>{guide.title || guide.name}</span>
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {formatDuration(guide.duration)}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{guide.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {guide.tags?.map(tag => (
            <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button 
              size="sm" 
              onClick={() => setTrack({
                id: guide.id || crypto.randomUUID(),
                url: guide.audioUrl,
                title: guide.title || guide.name,
                author: guide.author || (guide.teacher?.name ?? 'Unknown')
              })}
            >
              <Play className="h-4 w-4 mr-2" />
              Play
            </Button>
            {guide.resources?.map(resource => 
              resource.format === 'audio' && (
                <Button key={resource.url} size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  {resource.title}
                </Button>
              )
            )}
          </div>
          <span className="text-sm font-medium">
            {guide.level}
          </span>
        </div>
      </CardContent>
    </Card>
  )
} 