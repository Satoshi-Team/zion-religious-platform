"use client"

import { useProgressStore } from "@/lib/stores/progress-store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MEDITATION_GUIDES } from "@/lib/constants/meditation-guides"

export function MeditationAnalytics() {
  const { totalMinutesMeditated, sessions } = useProgressStore()

  const stats = {
    totalSessions: sessions.length,
    totalMinutes: Math.floor(sessions.reduce((acc, s) => acc + s.duration, 0) / 60),
    averageSessionLength: Math.floor(
      sessions.reduce((acc, s) => acc + s.duration, 0) / (sessions.length || 1) / 60
    ),
    favoriteGuide: sessions.reduce((acc, session) => {
      acc[session.guideId] = (acc[session.guideId] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  }

  const topGuideId = Object.entries(stats.favoriteGuide)
    .sort(([, a], [, b]) => b - a)[0]?.[0]

  const topGuide = MEDITATION_GUIDES.find(g => g.id === topGuideId)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-2xl font-bold">{totalMinutesMeditated}</p>
            <p className="text-sm text-muted-foreground">Total Minutes</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{sessions.length}</p>
            <p className="text-sm text-muted-foreground">Sessions</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{stats.totalMinutes}</p>
            <p className="text-sm text-muted-foreground">Total Minutes</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{stats.averageSessionLength}</p>
            <p className="text-sm text-muted-foreground">Avg. Session (min)</p>
          </div>
          <div>
            <p className="text-lg font-bold">{topGuide?.title || 'N/A'}</p>
            <p className="text-sm text-muted-foreground">Favorite Guide</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 