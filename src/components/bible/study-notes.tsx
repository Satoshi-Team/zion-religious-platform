"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { BibleStudyNote } from "@/types/bible"
import { bibleService } from "@/lib/services/bible-service"

interface StudyNotesProps {
  initialNotes?: BibleStudyNote[]
}

export function StudyNotes({ initialNotes }: StudyNotesProps) {
  const [notes, setNotes] = useState<BibleStudyNote[]>(initialNotes || [])
  const [selectedNote, setSelectedNote] = useState<BibleStudyNote | null>(null)
  const [newNote, setNewNote] = useState({
    id: crypto.randomUUID(),
    reference: "",
    title: "",
    content: "",
    tags: [] as string[],
    date: new Date().toISOString()
  })
  const [isEditing, setIsEditing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleCreateNote() {
    if (!newNote.reference.trim() || !newNote.content.trim()) {
      setError("Reference and content are required")
      return
    }

    try {
      const { date, ...noteWithoutDate } = newNote
      const createdNote = await bibleService.createStudyNote(noteWithoutDate)
      setNotes([...notes, createdNote])
      setNewNote({
        id: crypto.randomUUID(),
        reference: "",
        title: "",
        content: "",
        tags: [],
        date: new Date().toISOString()
      })
      setError(null)
    } catch (error) {
      console.error("Error creating note:", error)
      setError("Failed to create note")
    }
  }

  async function handleUpdateNote(note: BibleStudyNote) {
    try {
      const updatedNote = await bibleService.updateStudyNote(note.reference, {
        title: note.title,
        content: note.content,
        tags: note.tags
      })
      setNotes(notes.map(n => (n.id === updatedNote.id ? updatedNote : n)))
      setSelectedNote(updatedNote)
      setIsEditing(false)
      setError(null)
    } catch (error) {
      console.error("Error updating note:", error)
      setError("Failed to update note")
    }
  }

  async function handleDeleteNote(noteId: string) {
    try {
      await bibleService.deleteStudyNote(noteId)
      setNotes(notes.filter(n => n.id !== noteId))
      setSelectedNote(null)
      setError(null)
    } catch (error) {
      console.error("Error deleting note:", error)
      setError("Failed to delete note")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Study Notes</CardTitle>
        <CardDescription>
          Create and manage your Bible study notes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Create New Note</h3>
              <div className="space-y-2">
                <input
                  value={newNote.reference}
                  onChange={e =>
                    setNewNote({ ...newNote, reference: e.target.value })
                  }
                  placeholder="Bible reference (e.g., John 3:16)"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <input
                  value={newNote.title}
                  onChange={e =>
                    setNewNote({ ...newNote, title: e.target.value })
                  }
                  placeholder="Note title"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <Textarea
                  value={newNote.content}
                  onChange={e =>
                    setNewNote({ ...newNote, content: e.target.value })
                  }
                  placeholder="Enter your notes..."
                  className="min-h-[100px]"
                />
                <input
                  value={newNote.tags.join(", ")}
                  onChange={e =>
                    setNewNote({
                      ...newNote,
                      tags: e.target.value.split(",").map(tag => tag.trim())
                    })
                  }
                  placeholder="Tags (comma-separated)"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button onClick={handleCreateNote}>Create Note</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1 space-y-2">
              <h3 className="font-medium">Your Notes</h3>
              <div className="space-y-2">
                {notes.map(note => (
                  <button
                    key={note.id}
                    onClick={() => {
                      setSelectedNote(note)
                      setIsEditing(false)
                    }}
                    className={`w-full text-left p-2 rounded-md ${
                      selectedNote?.id === note.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary"
                    }`}
                  >
                    {note.reference}
                  </button>
                ))}
              </div>
            </div>

            {selectedNote && (
              <div className="md:col-span-2 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{selectedNote.reference}</h3>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        {isEditing ? "Cancel" : "Edit"}
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteNote(selectedNote.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>

                  {isEditing ? (
                    <div className="space-y-2">
                      <Textarea
                        value={selectedNote.content}
                        onChange={e =>
                          setSelectedNote({
                            ...selectedNote,
                            content: e.target.value
                          })
                        }
                        className="min-h-[200px]"
                      />
                      <input
                        value={selectedNote.tags.join(", ")}
                        onChange={e =>
                          setSelectedNote({
                            ...selectedNote,
                            tags: e.target.value.split(",").map(tag => tag.trim())
                          })
                        }
                        placeholder="Tags (comma-separated)"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                      <Button
                        onClick={() => handleUpdateNote(selectedNote)}
                      >
                        Save Changes
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="whitespace-pre-wrap">{selectedNote.content}</p>

                      {selectedNote.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {selectedNote.tags.map(tag => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-sm bg-secondary rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <p className="text-sm text-muted-foreground">
                        Last updated:{" "}
                        {selectedNote.updatedAt !== undefined && selectedNote.updatedAt !== null
                          ? new Date(selectedNote.updatedAt).toLocaleDateString()
                          : new Date(selectedNote.date).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 