"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BibleSearchResult, BibleVerse } from "@/types/bible"
import { bibleService } from "@/lib/services/bible-service"

interface SearchProps {
  initialQuery?: string
}

export function Search({ initialQuery }: SearchProps) {
  const [query, setQuery] = useState(initialQuery || "")
  const [results, setResults] = useState<BibleSearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedResult, setSelectedResult] = useState<BibleSearchResult | null>(
    null
  )

  async function handleSearch() {
    if (!query.trim()) return

    setIsLoading(true)
    try {
      const searchResults = await bibleService.search(query)
      const formattedResults: BibleSearchResult = {
        query,
        results: searchResults,
        total: searchResults.length,
        page: 1,
        pageSize: searchResults.length
      }
      setResults([formattedResults])
      if (searchResults.length > 0) {
        setSelectedResult(formattedResults)
      }
    } catch (error) {
      console.error("Error searching:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bible Search</CardTitle>
        <CardDescription>
          Search for words, phrases, or topics in the Bible
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex gap-2">
            <Input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Enter your search query..."
              onKeyDown={e => {
                if (e.key === "Enter") {
                  handleSearch()
                }
              }}
            />
            <Button onClick={handleSearch}>Search</Button>
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
                  {results[0].results.map((verse: BibleVerse) => (
                    <button
                      key={verse.reference}
                      onClick={() => setSelectedResult(results[0])}
                      className={`w-full text-left p-2 rounded-md ${
                        selectedResult?.results[0]?.reference === verse.reference
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary"
                      }`}
                    >
                      {verse.reference}
                    </button>
                  ))}
                </div>
              </div>

              {selectedResult && (
                <div className="md:col-span-2 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">
                      Search Results for "{selectedResult.query}"
                    </h3>
                    <p className="text-muted-foreground">
                      Found {selectedResult.total} results
                    </p>
                  </div>

                  <div className="space-y-4">
                    {selectedResult.results.map((verse: BibleVerse) => (
                      <div
                        key={verse.reference}
                        className="p-4 rounded-lg border bg-secondary"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{verse.reference}</h4>
                            <span className="text-sm text-muted-foreground">
                              {verse.translation}
                            </span>
                          </div>

                          <p className="text-sm">{verse.text}</p>

                          {verse.context && (
                            <p className="text-sm text-muted-foreground">
                              {verse.context}
                            </p>
                          )}

                          {verse.crossReferences && verse.crossReferences.length > 0 && (
                            <div className="space-y-1">
                              <h5 className="text-sm font-medium">Cross References</h5>
                              {verse.crossReferences.map((ref, index) => (
                                <p key={index} className="text-sm text-muted-foreground">
                                  {ref.reference}: {ref.text}
                                </p>
                              ))}
                            </div>
                          )}

                          {verse.commentary && (
                            <div className="space-y-1">
                              <h5 className="text-sm font-medium">Commentary</h5>
                              <p className="text-sm text-muted-foreground">
                                {verse.commentary}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : query ? (
            <p className="text-center text-muted-foreground">
              No results found for "{query}"
            </p>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
} 