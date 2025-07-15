"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react"
import { useState } from "react"
import { pageStyles } from "@/styles/shared-styles"

export function MeditationPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(100)
  const [progress, setProgress] = useState(0)

  return (
    <Card className={pageStyles.components.player.wrapper}>
      <div className="flex flex-col space-y-6">
        <div className={pageStyles.components.player.header}>
          <div>
            <h3 className={pageStyles.components.player.title}>Morning Meditation</h3>
            <p className={pageStyles.components.player.duration}>15 minutes</p>
          </div>
          <div className="flex items-center space-x-2">
            <Volume2 className="h-5 w-5 text-muted-foreground" />
            <Slider
              defaultValue={[volume]}
              max={100}
              step={1}
              className="w-24"
              onValueChange={([value]) => setVolume(value)}
            />
          </div>
        </div>

        <Slider
          defaultValue={[progress]}
          max={100}
          step={1}
          className={pageStyles.components.player.slider}
          onValueChange={([value]) => setProgress(value)}
        />

        <div className={pageStyles.components.player.controls}>
          <Button 
            size="icon" 
            variant="ghost" 
            className={pageStyles.components.player.button.secondary}
          >
            <SkipBack className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            className={pageStyles.components.player.button.primary}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6" />
            )}
          </Button>
          <Button 
            size="icon" 
            variant="ghost" 
            className={pageStyles.components.player.button.secondary}
          >
            <SkipForward className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  )
} 