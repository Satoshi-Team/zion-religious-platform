"use client"

import React from 'react'
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { BiblePrayerEntry } from "@/types/bible"
import { bibleService } from "@/lib/services/bible-service"

interface PrayerJournalProps {
  initialEntries?: BiblePrayerEntry[]
}

export function PrayerJournal({ initialEntries = [] }: PrayerJournalProps) {
  const [entries, setEntries] = useState<BiblePrayerEntry[]>(initialEntries)
  const [newEntry, setNewEntry] = useState({
    title: "",
    content: "",
    category: "prayer",
    tags: [] as string[],
    mood: "peaceful" as const,
    privacy: "private" as const,
    date: new Date().toISOString()
  })
  const [selectedEntry, setSelectedEntry] = useState<BiblePrayerEntry | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleCreateEntry() {
    if (!newEntry.title.trim() || !newEntry.content.trim()) {
      setError("Title and content are required")
      return
    }

    try {
      const createdEntry = await bibleService.createPrayerEntry(newEntry)
      setEntries([...entries, createdEntry])
      setNewEntry({
        title: "",
        content: "",
        category: "prayer",
        tags: [],
        mood: "peaceful",
        privacy: "private",
        date: new Date().toISOString()
      })
      setError(null)
    } catch (error) {
      setError("Failed to create prayer entry")
      console.error(error)
    }
  }

  async function handleUpdateEntry(entry: BiblePrayerEntry) {
    try {
      const updatedEntry = await bibleService.updatePrayerEntry(entry.id, entry)
      setEntries(entries.map(e => (e.id === updatedEntry.id ? updatedEntry : e)))
      setSelectedEntry(updatedEntry)
      setIsEditing(false)
    } catch (error) {
      setError("Failed to update prayer entry")
      console.error(error)
    }
  }

  async function handleDeleteEntry(id: string) {
    try {
      await bibleService.deletePrayerEntry(id)
      setEntries(entries.filter(e => e.id !== id))
      if (selectedEntry?.id === id) {
        setSelectedEntry(null)
      }
    } catch (error) {
      setError("Failed to delete prayer entry")
      console.error(error)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Prayer Journal</CardTitle>
        <CardDescription>
          Record and track your prayers and their answers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Title</label>
              <input
                type="text"
                value={newEntry.title}
                onChange={e => setNewEntry({ ...newEntry, title: e.target.value })}
                className="w-full p-2 border rounded-md"
                placeholder="Enter prayer title..."
              />
            </div>
            <div>
              <label className="text-sm font-medium">Content</label>
              <Textarea
                value={newEntry.content}
                onChange={e => setNewEntry({ ...newEntry, content: e.target.value })}
                placeholder="Write your prayer..."
                className="min-h-[100px]"
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button onClick={handleCreateEntry}>Add Prayer</Button>
          </div>

          <div className="space-y-4">
            {entries.map(entry => (
              <div
                key={entry.id}
                className="p-4 border rounded-lg space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{entry.title}</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedEntry(entry)
                        setIsEditing(true)
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteEntry(entry.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{entry.content}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{new Date(entry.date).toLocaleDateString()}</span>
                  {entry.category && (
                    <span className="px-2 py-1 bg-secondary rounded-full">
                      {entry.category}
                    </span>
                  )}
                  {entry.answered && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      Answered
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 