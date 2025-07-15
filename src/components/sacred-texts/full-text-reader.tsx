"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Loader2, Search, BookOpen, Globe, Download, Share2 } from "lucide-react"
import { FreeSacredTextsAPI, SacredTextResult, SearchResult } from "@/lib/services/free-sacred-texts-api"

interface FullTextReaderProps {
  tradition: 'bible' | 'quran' | 'buddhist' | 'hindu' | 'sikh'
  initialReference?: string
  showSearch?: boolean
  showMetadata?: boolean
}

export function FullTextReader({ 
  tradition, 
  initialReference, 
  showSearch = true, 
  showMetadata = true 
}: FullTextReaderProps) {
  const [text, setText] = useState<SacredTextResult | null>(null)
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [reference, setReference] = useState(initialReference || "")
  const [error, setError] = useState<string | null>(null)

  const api = new FreeSacredTextsAPI()

  useEffect(() => {
    if (initialReference) {
      loadText(initialReference)
    }
  }, [initialReference])

  const loadText = async (ref: string) => {
    setLoading(true)
    setError(null)
    
    try {
      let result: SacredTextResult | null = null
      
      switch (tradition) {
        case 'bible':
          result = await api.getBibleText(ref)
          break
        case 'quran':
          const [surah, ayah] = ref.split(':').map(Number)
          result = await api.getQuranText(surah, ayah)
          break
        case 'buddhist':
          result = await api.getBuddhistText(ref)
          break
        case 'hindu':
          result = await api.getHinduText(ref)
          break
        case 'sikh':
          result = await api.getSikhText(ref)
          break
      }
      
      if (result) {
        setText(result)
      } else {
        setError("Text not found. Please check the reference.")
      }
    } catch (err) {
      setError("Failed to load text. Please try again.")
      console.error("Error loading text:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async () => {
    if (!searchQuery.trim()) return
    
    setLoading(true)
    setError(null)
    
    try {
      const results = await api.searchSacredTexts(searchQuery, 10)
      setSearchResults(results)
    } catch (err) {
      setError("Search failed. Please try again.")
      console.error("Error searching:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleReferenceSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (reference.trim()) {
      loadText(reference.trim())
    }
  }

  const getTraditionInfo = () => {
    const info = {
      bible: { name: "Bible", color: "bg-blue-100 text-blue-800" },
      quran: { name: "Quran", color: "bg-green-100 text-green-800" },
      buddhist: { name: "Buddhist Texts", color: "bg-orange-100 text-orange-800" },
      hindu: { name: "Hindu Texts", color: "bg-red-100 text-red-800" },
      sikh: { name: "Sikh Texts", color: "bg-yellow-100 text-yellow-800" }
    }
    return info[tradition]
  }

  const traditionInfo = getTraditionInfo()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            {traditionInfo.name} Full Text Reader
          </h2>
          <p className="text-muted-foreground">
            Access complete sacred texts from free, open-source APIs
          </p>
        </div>
        <Badge className={traditionInfo.color}>
          {tradition.toUpperCase()}
        </Badge>
      </div>

      <Separator />

      {/* Reference Input */}
      <Card>
        <CardHeader>
          <CardTitle>Load Text</CardTitle>
          <CardDescription>
            Enter a reference to load the full text
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleReferenceSubmit} className="flex gap-2">
            <Input
              placeholder={getReferencePlaceholder()}
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={loading || !reference.trim()}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Load"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Search */}
      {showSearch && (
        <Card>
          <CardHeader>
            <CardTitle>Search Texts</CardTitle>
            <CardDescription>
              Search across all sacred texts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-4">
              <Input
                placeholder="Enter search terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleSearch} disabled={loading || !searchQuery.trim()}>
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
              </Button>
            </div>
            
            {searchResults.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold">Search Results:</h4>
                {searchResults.map((result, index) => (
                  <div key={index} className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{result.source}</Badge>
                      <span className="text-sm text-muted-foreground">{result.reference}</span>
                    </div>
                    <p className="text-sm">{result.text}</p>
                    <p className="text-xs text-muted-foreground mt-1">{result.translation}</p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Error Display */}
      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <p className="text-red-600">{error}</p>
          </CardContent>
        </Card>
      )}

      {/* Text Display */}
      {text && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{text.reference}</CardTitle>
                <CardDescription>
                  Source: {text.source} • API: {text.api}
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Original Text */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Original Text
              </h4>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-lg leading-relaxed">{text.originalText}</p>
              </div>
            </div>

            {/* Translation */}
            <div>
              <h4 className="font-semibold mb-2">Translation</h4>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-lg leading-relaxed">{text.translation}</p>
              </div>
            </div>

            {/* Transliteration */}
            {text.transliteration && (
              <div>
                <h4 className="font-semibold mb-2">Transliteration</h4>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-lg leading-relaxed italic">{text.transliteration}</p>
                </div>
              </div>
            )}

            {/* Metadata */}
            {showMetadata && (
              <div>
                <h4 className="font-semibold mb-2">Metadata</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Language:</span> {text.metadata.language}
                  </div>
                  <div>
                    <span className="font-medium">Translation:</span> {text.metadata.translation}
                  </div>
                  {text.metadata.copyright && (
                    <div className="col-span-2">
                      <span className="font-medium">Copyright:</span> {text.metadata.copyright}
                    </div>
                  )}
                  <div className="col-span-2">
                    <span className="font-medium">Last Updated:</span> {text.metadata.lastUpdated ? new Date(text.metadata.lastUpdated).toLocaleDateString() : 'Unknown'}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Available APIs Info */}
      <Card>
        <CardHeader>
          <CardTitle>Available APIs</CardTitle>
          <CardDescription>
            Free, open-source APIs used for text retrieval
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {api.getAvailableAPIs(tradition).map((apiInfo, index) => (
              <div key={index} className="p-3 border rounded-lg">
                <h5 className="font-medium mb-1">{apiInfo.name}</h5>
                <p className="text-sm text-muted-foreground mb-2">{apiInfo.description}</p>
                <div className="flex flex-wrap gap-1">
                  {apiInfo.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                {apiInfo.rateLimit && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Rate limit: {apiInfo.rateLimit}
                  </p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function getReferencePlaceholder(): string {
  return "e.g., John 3:16, 1:1-5, Genesis 1:1"
} 