"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BibleStudySession } from "@/types/bible"
import { bibleService } from "@/lib/services/bible-service"

interface StudySessionProps {
  userId: string
  initialSession?: BibleStudySession
}

export function StudySession({ userId, initialSession }: StudySessionProps) {
  const [session, setSession] = useState<BibleStudySession | undefined>(initialSession)
  const [isActive, setIsActive] = useState(false)
  const [currentVerse, setCurrentVerse] = useState("")
  const [currentNote, setCurrentNote] = useState("")
  const [currentHighlight, setCurrentHighlight] = useState("")
  const [highlightColor, setHighlightColor] = useState("#ffeb3b")

  useEffect(() => {
    if (isActive && !session) {
      startSession()
    }
  }, [isActive])

  async function startSession() {
    const newSession: BibleStudySession = {
      id: crypto.randomUUID(),
      userId,
      startTime: new Date().toISOString(),
      verses: [],
      tags: []
    }

    try {
      await bibleService.saveStudySession(newSession)
      setSession(newSession)
    } catch (error) {
      console.error("Error starting study session:", error)
    }
  }

  async function endSession() {
    if (!session) return

    try {
      const updatedSession = {
        ...session,
        endTime: new Date().toISOString()
      }
      await bibleService.updateStudySession(updatedSession)
      setSession(updatedSession)
      setIsActive(false)
    } catch (error) {
      console.error("Error ending study session:", error)
    }
  }

  async function addVerse() {
    if (!session || !currentVerse) return

    try {
      const updatedSession = {
        ...session,
        verses: [
          ...session.verses,
          {
            reference: currentVerse,
            notes: currentNote ? [currentNote] : [],
            highlights: currentHighlight
              ? [{ text: currentHighlight, color: highlightColor }]
              : []
          }
        ]
      }
      await bibleService.updateStudySession(updatedSession)
      setSession(updatedSession)
      setCurrentVerse("")
      setCurrentNote("")
      setCurrentHighlight("")
    } catch (error) {
      console.error("Error adding verse:", error)
    }
  }

  async function addNote(verseIndex: number, note: string) {
    if (!session) return

    try {
      const updatedVerses = [...session.verses]
      updatedVerses[verseIndex].notes.push(note)
      const updatedSession = {
        ...session,
        verses: updatedVerses
      }
      await bibleService.updateStudySession(updatedSession)
      setSession(updatedSession)
    } catch (error) {
      console.error("Error adding note:", error)
    }
  }

  async function addHighlight(verseIndex: number, text: string, color: string) {
    if (!session) return

    try {
      const updatedVerses = [...session.verses]
      updatedVerses[verseIndex].highlights.push({ text, color })
      const updatedSession = {
        ...session,
        verses: updatedVerses
      }
      await bibleService.updateStudySession(updatedSession)
      setSession(updatedSession)
    } catch (error) {
      console.error("Error adding highlight:", error)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Study Session</CardTitle>
        <CardDescription>
          Track your Bible study progress and take notes
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!isActive ? (
          <div className="space-y-4">
            {session ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Started: {new Date(session.startTime).toLocaleString()}
                  </p>
                  {session.endTime && (
                    <p className="text-sm text-muted-foreground">
                      Ended: {new Date(session.endTime).toLocaleString()}
                    </p>
                  )}
                </div>
                <div className="space-y-4">
                  {session.verses.map((verse, index) => (
                    <div key={index} className="p-4 bg-secondary rounded-lg space-y-2">
                      <h3 className="font-medium">{verse.reference}</h3>
                      {verse.notes.length > 0 && (
                        <div className="space-y-1">
                          <h4 className="text-sm font-medium">Notes:</h4>
                          <ul className="list-disc list-inside text-sm">
                            {verse.notes.map((note, i) => (
                              <li key={i}>{note}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {verse.highlights.length > 0 && (
                        <div className="space-y-1">
                          <h4 className="text-sm font-medium">Highlights:</h4>
                          <div className="space-y-1">
                            {verse.highlights.map((highlight, i) => (
                              <div
                                key={i}
                                className="p-2 rounded"
                                style={{ backgroundColor: highlight.color }}
                              >
                                {highlight.text}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {!session.endTime && (
                  <Button onClick={() => setIsActive(true)}>Continue Session</Button>
                )}
              </div>
            ) : (
              <Button onClick={() => setIsActive(true)}>Start New Session</Button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="verse">Verse Reference</Label>
              <Input
                id="verse"
                value={currentVerse}
                onChange={e => setCurrentVerse(e.target.value)}
                placeholder="Enter verse reference (e.g., John 3:16)"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="note">Note</Label>
              <Input
                id="note"
                value={currentNote}
                onChange={e => setCurrentNote(e.target.value)}
                placeholder="Add a note about this verse"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="highlight">Highlight</Label>
              <div className="flex gap-2">
                <Input
                  id="highlight"
                  value={currentHighlight}
                  onChange={e => setCurrentHighlight(e.target.value)}
                  placeholder="Text to highlight"
                />
                <Input
                  type="color"
                  value={highlightColor}
                  onChange={e => setHighlightColor(e.target.value)}
                  className="w-20"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={endSession}>
                End Session
              </Button>
              <Button onClick={addVerse}>Add Verse</Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 