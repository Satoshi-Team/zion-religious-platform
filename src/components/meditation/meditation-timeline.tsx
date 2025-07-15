"use client"

import { useProgressStore } from "@/lib/stores/progress-store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MEDITATION_GUIDES } from "@/lib/constants/meditation-guides"

export function MeditationTimeline() {
  const { sessions, totalMinutesMeditated } = useProgressStore()

  const recentSessions = sessions
    .slice(-5)
    .reverse()
    .map(session => ({
      ...session,
      guide: MEDITATION_GUIDES.find(g => g.id === session.guideId)
    }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Meditation Journey</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-2xl font-bold">{totalMinutesMeditated}</p>
          <p className="text-sm text-muted-foreground">Total Minutes Meditated</p>
        </div>
        <div className="space-y-4">
          {recentSessions.map(session => (
            <div key={session.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{session.guide?.title}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(session.startTime).toLocaleDateString()}
                </p>
              </div>
              <span className="text-sm">
                {Math.floor(session.duration / 60)} min
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 