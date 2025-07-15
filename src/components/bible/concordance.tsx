"use client"

import React from 'react'
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BibleConcordance } from "@/types/bible"
import { bibleService } from "@/lib/services/bible-service"

interface ConcordanceProps {
  initialTerm?: string
}

export function Concordance({ initialTerm }: ConcordanceProps) {
  const [searchTerm, setSearchTerm] = useState(initialTerm || "")
  const [results, setResults] = useState<BibleConcordance[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedEntry, setSelectedEntry] = useState<BibleConcordance | null>(null)

  async function handleSearch() {
    if (!searchTerm.trim()) return

    setIsLoading(true)
    try {
      const searchResults = await bibleService.searchConcordance(searchTerm)
      setResults(searchResults)
      if (searchResults.length > 0) {
        setSelectedEntry(searchResults[0])
      }
    } catch (error) {
      console.error("Error searching concordance:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bible Concordance</CardTitle>
        <CardDescription>
          Search for words and their occurrences in the Bible
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex gap-2">
            <Input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search for a word..."
              onKeyDown={e => {
                if (e.key === "Enter") {
                  handleSearch()
                }
              }}
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Search
            </button>
          </div>

          {isLoading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-secondary rounded w-3/4"></div>
              <div className="h-4 bg-secondary rounded w-1/2"></div>
              <div className="h-4 bg-secondary rounded w-2/3"></div>
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1 space-y-2">
                <h3 className="font-medium">Results</h3>
                <div className="space-y-2">
                  {results.map(entry => (
                    <button
                      key={entry.word}
                      onClick={() => setSelectedEntry(entry)}
                      className={`w-full text-left p-2 rounded-md ${
                        selectedEntry?.word === entry.word
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary"
                      }`}
                    >
                      {entry.word}
                    </button>
                  ))}
                </div>
              </div>

              {selectedEntry && (
                <div className="md:col-span-2 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{selectedEntry.word}</h3>
                    <p className="text-muted-foreground">
                      {selectedEntry.occurrences.length} occurrences
                    </p>
                  </div>

                  <div className="space-y-4">
                    {selectedEntry.occurrences.map((occurrence, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg border bg-secondary"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{occurrence.reference}</h4>
                            <span className="text-sm text-muted-foreground">
                              {occurrence.translation}
                            </span>
                          </div>

                          <div className="space-y-2">
                            <p className="text-sm">
                              {occurrence.context ? (
                                <>
                                  {occurrence.context.before}
                                  <span className="bg-primary/20 px-1 rounded">
                                    {occurrence.context.word}
                                  </span>
                                  {occurrence.context.after}
                                </>
                              ) : (
                                occurrence.text
                              )}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {occurrence.reference} • {occurrence.translation}
                            </p>
                          </div>

                          {occurrence.notes && (
                            <p className="text-sm text-muted-foreground">
                              {occurrence.notes}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {selectedEntry.relatedWords && selectedEntry.relatedWords.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-medium">Related Words</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedEntry.relatedWords.map(word => (
                          <button
                            key={word}
                            onClick={() => {
                              setSearchTerm(word)
                              handleSearch()
                            }}
                            className="px-2 py-1 text-sm bg-secondary rounded-full hover:bg-secondary/80"
                          >
                            {word}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : searchTerm ? (
            <p className="text-center text-muted-foreground">
              No results found for "{searchTerm}"
            </p>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}