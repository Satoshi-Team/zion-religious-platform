"use client"

import React from 'react'
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { BibleVerse } from "@/types/bible"
import { bibleService } from "@/lib/services/bible-service"
import { BibleVerseLink } from "./verse-link"

interface ShareVerseProps {
  verse: BibleVerse
}

export function ShareVerse({ verse }: ShareVerseProps) {
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function handleShare() {
    if (!message.trim()) {
      setError("Please enter a message")
      return
    }

    setIsLoading(true)
    setError(null)
    setSuccess(false)

    try {
      await bibleService.shareVerse({
        verse,
        message,
        platforms: ["twitter", "facebook", "email"]
      })
      setSuccess(true)
      setMessage("")
    } catch (error) {
      console.error("Error sharing verse:", error)
      setError("Failed to share verse")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Share Verse</CardTitle>
        <CardDescription>
          Share this verse with others
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-medium">
              <BibleVerseLink reference={verse.reference} />
            </h3>
            <p className="text-lg italic">{verse.text}</p>
            <p className="text-sm text-muted-foreground">
              {verse.translation}
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium"
              >
                Add a message (optional)
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Share your thoughts about this verse..."
                className="min-h-[100px]"
              />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}
            {success && (
              <p className="text-sm text-green-500">
                Verse shared successfully!
              </p>
            )}

            <div className="flex flex-wrap gap-2">
              <Button
                onClick={handleShare}
                disabled={isLoading}
                className="flex-1"
              >
                {isLoading ? "Sharing..." : "Share"}
              </Button>
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
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const text = `${verse.text}\n\n${verse.reference} (${verse.translation})`
                  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    text
                  )}`
                  window.open(url, "_blank")
                }}
              >
                Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const text = `${verse.text}\n\n${verse.reference} (${verse.translation})`
                  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    text
                  )}`
                  window.open(url, "_blank")
                }}
              >
                Facebook
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const text = `${verse.text}\n\n${verse.reference} (${verse.translation})`
                  const url = `mailto:?subject=Bible Verse&body=${encodeURIComponent(
                    text
                  )}`
                  window.open(url, "_blank")
                }}
              >
                Email
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 