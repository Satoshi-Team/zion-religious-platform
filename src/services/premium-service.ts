"use client"

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface PremiumState {
  isPremium: boolean
  subscriptionEndDate: string | null
  setPremium: (endDate: string) => void
  clearPremium: () => void
}

export const usePremiumStore = create<PremiumState>()(
  persist(
    (set) => ({
      isPremium: false,
      subscriptionEndDate: null,
      setPremium: (endDate: string) => set({ 
        isPremium: true, 
        subscriptionEndDate: endDate 
      }),
      clearPremium: () => set({ 
        isPremium: false, 
        subscriptionEndDate: null 
      }),
    }),
    {
      name: 'premium-storage',
    }
  )
)

export const SUBSCRIPTION_PRICES = {
  MONTHLY: 5.00,
  YEARLY: 50.40, // $4.20 * 12
} as const

export function calculateSubscriptionEndDate(type: 'monthly' | 'yearly'): string {
  const date = new Date()
  if (type === 'monthly')
    date.setMonth(date.getMonth() + 1)
  else
    date.setFullYear(date.getFullYear() + 1)
  return date.toISOString()
}