"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BibleVerse } from "@/types/bible"
import { bibleService } from "@/lib/services/bible-service"
import { ShareVerse } from "./share-verse"
import { BibleVerseLink } from "./verse-link"

export function VerseOfDay() {
  const [verse, setVerse] = useState<BibleVerse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadVerse()
  }, [])

  async function loadVerse() {
    setIsLoading(true)
    setError(null)

    try {
      const verseOfDay = await bibleService.getVerseOfDay()
      setVerse(verseOfDay)
    } catch (error) {
      console.error("Error loading verse of the day:", error)
      setError("Failed to load verse of the day")
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Verse of the Day</CardTitle>
          <CardDescription>Loading...</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  if (error || !verse) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Verse of the Day</CardTitle>
          <CardDescription>
            {error || "No verse available"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={loadVerse}>Try Again</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Verse of the Day</CardTitle>
          <CardDescription>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">
                <BibleVerseLink reference={verse.reference} />
              </h3>
              <p className="text-xl italic">{verse.text}</p>
              <p className="text-sm text-muted-foreground">
                {verse.translation}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${verse.text}\n\n${verse.reference} (${verse.translation})`
                  )
                }}
              >
                Copy
              </Button>
              <Button onClick={loadVerse}>New Verse</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <ShareVerse verse={verse} />
    </div>
  )
}