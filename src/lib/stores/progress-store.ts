import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface MeditationSession {
  id: string
  guideId: string
  startTime: string
  duration: number // in seconds
}

interface ProgressState {
  sessions: MeditationSession[]
  totalMinutesMeditated: number
  addSession: (session: Omit<MeditationSession, 'id'>) => void
  startSession: (guideId: string) => void
  completeSession: () => void
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      sessions: [],
      totalMinutesMeditated: 0,
      addSession: (sessionData) => {
        const session = {
          ...sessionData,
          id: crypto.randomUUID()
        }
        set((state) => ({
          sessions: [...state.sessions, session],
          totalMinutesMeditated: state.totalMinutesMeditated + Math.floor(session.duration / 60)
        }))
      },
      startSession: (guideId: string) => {
        // Store the start time and guide ID for the current session
        set(state => ({
          // You might want to store these in a separate "currentSession" field
          // or handle it according to your app's needs
        }))
      },
      completeSession: () => {
        // Implementation for completing a session
        set(state => ({
          // Update relevant state
        }))
      }
    }),
    {
      name: 'meditation-progress'
    }
  )
) 