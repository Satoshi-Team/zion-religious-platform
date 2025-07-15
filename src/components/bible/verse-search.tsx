"use client"

import React from 'react'
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BibleVerse } from "@/types/bible"
import { bibleService } from "@/lib/services/bible-service"
import { ShareVerse } from "./share-verse"
import { BibleVerseLink } from "./verse-link"

export function VerseSearch() {
  const [query, setQuery] = useState("")
  const [verses, setVerses] = useState<BibleVerse[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSearch() {
    if (!query.trim()) {
      setError("Please enter a search query")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const results = await bibleService.search(query)
      setVerses(results)
    } catch (error) {
      console.error("Error searching verses:", error)
      setError("Failed to search verses")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Search Verses</CardTitle>
          <CardDescription>
            Search for Bible verses by keyword or reference
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Enter keyword or reference..."
                onKeyDown={e => {
                  if (e.key === "Enter") handleSearch()
                }}
              />
              <Button
                onClick={handleSearch}
                disabled={isLoading}
              >
                {isLoading ? "Searching..." : "Search"}
              </Button>
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
        </CardContent>
      </Card>

      {verses.length > 0 && (
        <div className="space-y-6">
          {verses.map(verse => (
            <Card key={verse.reference}>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">
                    <BibleVerseLink reference={verse.reference} />
                  </h3>
                  <p className="text-lg italic">{verse.text}</p>
                  <p className="text-sm text-muted-foreground">
                    {verse.translation}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
} 