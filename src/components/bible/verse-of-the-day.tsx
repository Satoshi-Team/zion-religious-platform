"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BibleVerse } from "@/types/bible"
import { bibleService } from "@/lib/services/bible-service"

export function VerseOfTheDay() {
  const [verse, setVerse] = useState<BibleVerse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function loadVerse() {
    setIsLoading(true)
    setError(null)
    try {
      const dailyVerse = await bibleService.getVerseOfDay()
      setVerse(dailyVerse)
    } catch (error) {
      console.error("Error loading verse of the day:", error)
      setError("Failed to load verse of the day")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadVerse()
  }, [])

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Verse of the Day</CardTitle>
          <CardDescription>Loading...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-secondary rounded w-3/4"></div>
            <div className="h-4 bg-secondary rounded w-1/2"></div>
            <div className="h-4 bg-secondary rounded w-2/3"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Verse of the Day</CardTitle>
          <CardDescription>Error loading verse</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-destructive">{error}</p>
            <Button onClick={loadVerse}>Try Again</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!verse) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Verse of the Day</CardTitle>
        <CardDescription>{verse.reference}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-lg italic">{verse.text}</p>
            <p className="text-sm text-muted-foreground">
              {verse.translation}
            </p>
          </div>

          {verse.commentary && (
            <div className="space-y-2">
              <h4 className="font-medium">Commentary</h4>
              <p className="text-sm">{verse.commentary}</p>
            </div>
          )}

          {verse.relatedVerses.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium">Related Verses</h4>
              <div className="flex flex-wrap gap-2">
                {verse.relatedVerses.map(ref => (
                  <span
                    key={ref}
                    className="px-2 py-1 text-sm bg-secondary rounded-full"
                  >
                    {ref}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <Button variant="outline" onClick={loadVerse}>
              New Verse
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 