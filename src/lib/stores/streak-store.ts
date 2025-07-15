import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface StreakState {
  currentStreak: number
  longestStreak: number
  lastMeditationDate: string | null
  updateStreak: () => void
  resetStreak: () => void
}

export const useStreakStore = create<StreakState>()(
  persist(
    (set, get) => ({
      currentStreak: 0,
      longestStreak: 0,
      lastMeditationDate: null,
      updateStreak: () => {
        const today = new Date().toISOString().split('T')[0]
        const { currentStreak, longestStreak, lastMeditationDate } = get()

        if (!lastMeditationDate) {
          set({ currentStreak: 1, longestStreak: 1, lastMeditationDate: today })
          return
        }

        const lastDate = new Date(lastMeditationDate)
        const diffDays = Math.floor((new Date().getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24))

        if (diffDays === 1) {
          const newStreak = currentStreak + 1
          set({
            currentStreak: newStreak,
            longestStreak: Math.max(newStreak, longestStreak),
            lastMeditationDate: today
          })
        } else if (diffDays === 0) {
          set({ lastMeditationDate: today })
        } else {
          set({ currentStreak: 1, lastMeditationDate: today })
        }
      },
      resetStreak: () => {
        set({ currentStreak: 0, lastMeditationDate: null })
      }
    }),
    {
      name: 'meditation-streak'
    }
  )
) 