"use client"

import { useState } from "react"
import { useAudioPlayer } from "@/contexts/audio-player-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Play, Pause, Menu, Music2, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { verifiedStations } from "@/config/radio-stations"

export function PersistentPlayer() {
  const { currentStation, isPlaying, isLoading, playStation, stopPlayback, togglePlayback } = useAudioPlayer()
  const [isOpen, setIsOpen] = useState(false)

  if (!currentStation) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/80 p-4 backdrop-blur-sm">
        <div className="container flex items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="shrink-0">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader className="mb-4">
                  <SheetTitle>Radio Stations</SheetTitle>
                </SheetHeader>
                <ScrollArea className="h-[calc(100vh-8rem)]">
                  <div className="flex flex-col gap-2 pr-4">
                    {verifiedStations.map((station) => (
                      <Button
                        key={station.title}
                        variant="ghost"
                        className={cn(
                          "flex h-auto w-full flex-col items-start gap-1 px-2 py-3",
                          currentStation?.title === station.title && "bg-muted"
                        )}
                        onClick={() => {
                          playStation(station)
                          setIsOpen(false)
                        }}
                      >
                        <div className="flex w-full items-center justify-between">
                          <span className="font-medium">{station.title}</span>
                          {currentStation?.title === station.title && (
                            <Music2 className="h-4 w-4 text-primary" />
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {station.country} • {station.language}
                        </span>
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
            <div className="flex flex-col gap-0.5">
              <span className="font-medium">{currentStation.title}</span>
              <span className="text-sm text-muted-foreground">
                {currentStation.country} • {currentStation.language}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              disabled={isLoading}
              onClick={togglePlayback}
            >
              {isLoading ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              ) : isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={stopPlayback}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="h-[72px]" />
    </>
  )
} 