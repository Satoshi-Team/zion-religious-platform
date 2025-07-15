"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BibleCommentary } from "@/types/bible"
import { bibleService } from "@/lib/services/bible-service"

interface CommentaryProps {
  initialReference?: string
}

export function Commentary({ initialReference }: CommentaryProps) {
  const [reference, setReference] = useState(initialReference || "")
  const [commentaries, setCommentaries] = useState<BibleCommentary[]>([])
  const [isLoading, setIsLoading] = useState(false)

  async function handleLoadCommentary() {
    if (!reference.trim()) return

    setIsLoading(true)
    try {
      const loadedCommentaries = await bibleService.getCommentary(reference)
      setCommentaries(loadedCommentaries)
    } catch (error) {
      console.error("Error loading commentary:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bible Commentary</CardTitle>
        <CardDescription>
          Explore detailed commentary on Bible passages
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex gap-2">
            <input
              value={reference}
              onChange={e => setReference(e.target.value)}
              placeholder="Enter a Bible reference (e.g., John 3:16)"
              className="flex-1 px-3 py-2 border rounded-md"
              onKeyDown={e => {
                if (e.key === "Enter") {
                  handleLoadCommentary()
                }
              }}
            />
            <Button onClick={handleLoadCommentary}>Load Commentary</Button>
          </div>

          {isLoading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-secondary rounded w-3/4"></div>
              <div className="h-4 bg-secondary rounded w-1/2"></div>
              <div className="h-4 bg-secondary rounded w-2/3"></div>
            </div>
          ) : commentaries.length > 0 ? (
            <div className="space-y-6">
              {commentaries.map((commentary, index) => (
                <div key={index} className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{commentary.reference}</h3>
                    <p className="text-muted-foreground">
                      {commentary.author} • {commentary.source}
                      {commentary.date && ` • ${commentary.date}`}
                    </p>
                  </div>
                  <div className="prose prose-sm max-w-none">
                    <p>{commentary.text}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : reference ? (
            <p className="text-center text-muted-foreground">
              No commentary found for "{reference}"
            </p>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}