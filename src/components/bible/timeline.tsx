"use client"

import React from 'react'
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BibleTimeline } from "@/types/bible"
import { bibleService } from "@/lib/services/bible-service"

interface TimelineProps {
  initialTimeline?: BibleTimeline
}

export function Timeline({ initialTimeline }: TimelineProps) {
  const [timeline, setTimeline] = useState<BibleTimeline | undefined>(initialTimeline)
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)

  async function loadTimeline() {
    try {
      const loadedTimeline = await bibleService.getTimeline()
      setTimeline(loadedTimeline)
    } catch (error) {
      console.error("Error loading timeline:", error)
    }
  }

  if (!timeline) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Bible Timeline</CardTitle>
          <CardDescription>
            Explore the chronological events of the Bible
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={loadTimeline}>Load Timeline</Button>
        </CardContent>
      </Card>
    )
  }

  const filteredEvents = selectedPeriod
    ? timeline.events.filter(event => {
        const eventDate = new Date(event.date)
        const period = timeline.periods.find(p => p.title === selectedPeriod)
        if (!period) return false
        const periodStart = new Date(period.start)
        const periodEnd = new Date(period.end)
        return eventDate >= periodStart && eventDate <= periodEnd
      })
    : timeline.events

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bible Timeline</CardTitle>
        <CardDescription>
          Explore the chronological events of the Bible
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-medium">Periods</h3>
            <div className="flex flex-wrap gap-2">
              {timeline.periods.map(period => (
                <Button
                  key={period.title}
                  variant={selectedPeriod === period.title ? "default" : "outline"}
                  onClick={() => {
                    setSelectedPeriod(
                      selectedPeriod === period.title ? null : period.title
                    )
                    setSelectedEvent(null)
                  }}
                >
                  {period.title}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredEvents.map(event => (
              <div
                key={event.date}
                className={`p-4 rounded-lg border ${
                  selectedEvent === event.date
                    ? "bg-primary/10 border-primary"
                    : "bg-secondary"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setSelectedEvent(
                        selectedEvent === event.date ? null : event.date
                      )
                    }
                  >
                    {selectedEvent === event.date ? "Hide" : "Show"} Details
                  </Button>
                </div>

                {selectedEvent === event.date && (
                  <div className="mt-4 space-y-4">
                    <p>{event.description}</p>

                    {event.references.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">References:</h4>
                        <ul className="list-disc list-inside text-sm">
                          {event.references.map((ref, index) => (
                            <li key={index}>{ref}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {event.location && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Location:</h4>
                        <p className="text-sm">{event.location.name}</p>
                        {event.location.coordinates && (
                          <p className="text-sm text-muted-foreground">
                            Coordinates: {event.location.coordinates.lat},{" "}
                            {event.location.coordinates.lng}
                          </p>
                        )}
                      </div>
                    )}

                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        Category:
                      </span>
                      <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                        {event.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 