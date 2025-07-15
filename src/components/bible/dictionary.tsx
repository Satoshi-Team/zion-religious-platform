"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BibleDictionary } from "@/types/bible"
import { bibleService } from "@/lib/services/bible-service"

interface DictionaryProps {
  initialTerm?: string
}

export function Dictionary({ initialTerm }: DictionaryProps) {
  const [searchTerm, setSearchTerm] = useState(initialTerm || "")
  const [results, setResults] = useState<BibleDictionary[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedTerm, setSelectedTerm] = useState<BibleDictionary | null>(null)

  async function handleSearch() {
    if (!searchTerm.trim()) return

    setIsLoading(true)
    try {
      const searchResults = await bibleService.searchDictionary(searchTerm)
      setResults(searchResults)
      if (searchResults.length > 0) {
        setSelectedTerm(searchResults[0])
      }
    } catch (error) {
      console.error("Error searching dictionary:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bible Dictionary</CardTitle>
        <CardDescription>
          Search for terms and their meanings in the Bible
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex gap-2">
            <Input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search for a term..."
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
                  {results.map(term => (
                    <button
                      key={term.term}
                      onClick={() => setSelectedTerm(term)}
                      className={`w-full text-left p-2 rounded-md ${
                        selectedTerm?.term === term.term
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary"
                      }`}
                    >
                      {term.term}
                    </button>
                  ))}
                </div>
              </div>

              {selectedTerm && (
                <div className="md:col-span-2 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{selectedTerm.term}</h3>
                    <p className="text-muted-foreground">
                      Category: {selectedTerm.category}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Definition</h4>
                    <p>{selectedTerm.definition}</p>
                  </div>

                  {selectedTerm.etymology && (
                    <div className="space-y-2">
                      <h4 className="font-medium">Etymology</h4>
                      <p>{selectedTerm.etymology}</p>
                    </div>
                  )}

                  {selectedTerm.references.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-medium">References</h4>
                      <ul className="list-disc list-inside">
                        {selectedTerm.references.map((ref, index) => (
                          <li key={index}>{ref}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedTerm.relatedTerms.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-medium">Related Terms</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedTerm.relatedTerms.map(term => (
                          <button
                            key={term}
                            onClick={() => {
                              setSearchTerm(term)
                              handleSearch()
                            }}
                            className="px-2 py-1 text-sm bg-secondary rounded-full hover:bg-secondary/80"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedTerm.usage.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-medium">Usage Examples</h4>
                      <div className="space-y-2">
                        {selectedTerm.usage.map((usage, index) => (
                          <div key={index} className="p-2 bg-secondary rounded-md">
                            <p className="text-sm font-medium">{usage.reference}</p>
                            <p className="text-sm text-muted-foreground">
                              {usage.context}
                            </p>
                          </div>
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