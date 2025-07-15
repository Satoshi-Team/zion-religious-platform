'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

interface SwipeConfig {
  threshold?: number
  minDistance?: number
}

export function useSwipeNavigation({ 
  threshold = 50, 
  minDistance = 100 
}: SwipeConfig = {}) {
  const router = useRouter()
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const touchEnd = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleTouchStart = (e: TouchEvent) => {
      touchStart.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      touchEnd.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      }
    }

    const handleTouchEnd = () => {
      if (!touchStart.current || !touchEnd.current) return

      const xDiff = touchStart.current.x - touchEnd.current.x
      const yDiff = touchStart.current.y - touchEnd.current.y

      // Check if horizontal swipe is more significant than vertical
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        // Check if swipe distance meets minimum requirement
        if (Math.abs(xDiff) >= minDistance) {
          // Right to left swipe
          if (xDiff > threshold) {
            router.forward()
          }
          // Left to right swipe
          else if (xDiff < -threshold) {
            router.back()
          }
        }
      }

      touchStart.current = null
      touchEnd.current = null
    }

    document.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchmove', handleTouchMove)
    document.addEventListener('touchend', handleTouchEnd)

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [router, threshold, minDistance])
} 