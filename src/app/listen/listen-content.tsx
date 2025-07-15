"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"
import { useState } from "react"

interface RadioStation {
  id: string
  name: string
  description: string
  streamUrl: string
  location: string
  language: string
  tradition: string
  tags: string[]
}

const radioStations: RadioStation[] = [
  {
    id: "1",
    name: "Vatican Radio",
    description: "Official radio service of the Holy See broadcasting Catholic programming",
    streamUrl: "https://radio.vaticannews.va/stream-en",
    location: "Vatican City",
    language: "Multiple",
    tradition: "Catholic",
    tags: ["Catholic", "Christian", "News", "Prayer"]
  },
  {
    id: "2",
    name: "Radio Bhakti",
    description: "24/7 Hindu devotional music and spiritual discourses",
    streamUrl: "https://stream.zeno.fm/bhakti",
    location: "India",
    language: "Hindi, Sanskrit",
    tradition: "Hindu",
    tags: ["Hindu", "Bhajans", "Spiritual", "Devotional"]
  },
  {
    id: "3",
    name: "Al-Quran Radio",
    description: "Continuous Quran recitation and Islamic teachings",
    streamUrl: "https://stream.radiojar.com/quran",
    location: "Saudi Arabia",
    language: "Arabic",
    tradition: "Islamic",
    tags: ["Islamic", "Quran", "Recitation"]
  },
  {
    id: "4",
    name: "Buddhist Radio",
    description: "Dharma talks, meditation music, and Buddhist teachings",
    streamUrl: "https://stream.buddhistradio.com",
    location: "Thailand",
    language: "Thai, English",
    tradition: "Buddhist",
    tags: ["Buddhist", "Meditation", "Dharma"]
  },
  {
    id: "5",
    name: "Jewish Music Radio",
    description: "Traditional Jewish music and cultural programming",
    streamUrl: "https://stream.jewishradio.com",
    location: "Israel",
    language: "Hebrew, English",
    tradition: "Jewish",
    tags: ["Jewish", "Cultural", "Traditional"]
  },
  {
    id: "6",
    name: "Vedanta Radio",
    description: "Lectures and discussions on Vedantic philosophy",
    streamUrl: "https://stream.vedantaradio.com",
    location: "India",
    language: "English",
    tradition: "Hindu",
    tags: ["Hindu", "Philosophy", "Vedanta"]
  },
  {
    id: "7",
    name: "Christian Praise",
    description: "Contemporary Christian music and worship",
    streamUrl: "https://stream.christianpraise.com",
    location: "United States",
    language: "English",
    tradition: "Christian",
    tags: ["Christian", "Worship", "Contemporary"]
  },
  {
    id: "8",
    name: "Sufi Soul",
    description: "Sufi music and mystical Islamic traditions",
    streamUrl: "https://stream.sufisoul.com",
    location: "Turkey",
    language: "Turkish, Persian",
    tradition: "Islamic",
    tags: ["Islamic", "Sufi", "Mystical"]
  },
  {
    id: "9",
    name: "Zen Radio",
    description: "Meditation music and Zen Buddhist teachings",
    streamUrl: "https://stream.zenradio.com",
    location: "Japan",
    language: "Japanese, English",
    tradition: "Buddhist",
    tags: ["Buddhist", "Zen", "Meditation"]
  },
  {
    id: "10",
    name: "Gospel Glory",
    description: "Traditional and contemporary gospel music",
    streamUrl: "https://stream.gospelglory.com",
    location: "United States",
    language: "English",
    tradition: "Christian",
    tags: ["Christian", "Gospel", "Soul"]
  }
]

export function ListenContent() {
  const [playingId, setPlayingId] = useState<string | null>(null)
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null)

  const handlePlay = (station: RadioStation) => {
    if (typeof window === 'undefined') return

    if (playingId === station.id) {
      audioElement?.pause()
      setPlayingId(null)
      setAudioElement(null)
    } else {
      audioElement?.pause()
      const audio = new Audio(station.streamUrl)
      audio.play()
      setPlayingId(station.id)
      setAudioElement(audio)
    }
  }

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {radioStations.map((station) => (
        <Card key={station.id} className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold">{station.name}</h3>
              <p className="text-sm text-muted-foreground">{station.location}</p>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePlay(station)}
            >
              {playingId === station.id ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">{station.description}</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Tradition:</span>
              <span className="text-sm text-muted-foreground">{station.tradition}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Language:</span>
              <span className="text-sm text-muted-foreground">{station.language}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {station.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
} 