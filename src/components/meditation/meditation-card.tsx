"use client"

import React from 'react'
import { MeditationGuide } from "@/lib/constants/meditation-guides"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Download, Clock } from "lucide-react"
import { useAudioStore } from "@/lib/stores/audio-store"
import { pageStyles } from "@/styles/shared-styles"

interface MeditationCardProps {
  guide: MeditationGuide
}

export function MeditationCard({ guide }: MeditationCardProps) {
  const { setTrack, setPlaying } = useAudioStore()

  const handlePlay = () => {
    setTrack({
      id: guide.id,
      url: guide.audioUrl
    })
  }

  return (
    <Card className={pageStyles.components.card.wrapper}>
      <CardHeader>
        <CardTitle className={pageStyles.components.card.title}>
          {guide.title}
        </CardTitle>
      </CardHeader>
      <CardContent className={pageStyles.components.card.content}>
        <p className={pageStyles.components.card.description}>
          {guide.description}
        </p>
        <div className="flex items-center justify-between">
          <div className={pageStyles.components.card.buttonGroup}>
            <Button 
              size="sm" 
              onClick={handlePlay}
              className={pageStyles.buttons.primary}
            >
              <Play className="h-4 w-4 mr-2" />
              Play
            </Button>
            {guide.transcriptUrl && (
              <Button 
                size="sm" 
                variant="outline"
                className={pageStyles.buttons.outline}
              >
                <Download className="h-4 w-4 mr-2" />
                Transcript
              </Button>
            )}
          </div>
          <span className={pageStyles.components.card.tag}>
            {guide.level}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}