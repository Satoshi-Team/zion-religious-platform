'use client'

import React from 'react'
import { useSwipeNavigation } from '@/hooks/use-swipe-navigation'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'

// Dynamically import framer-motion
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  {
    ssr: false,
    loading: () => <div className="transition-opacity duration-200 ease-in-out" />
  }
)

const AnimatePresence = dynamic(
  () => import('framer-motion').then((mod) => mod.AnimatePresence),
  { ssr: false }
)

interface MobileOptimizedLayoutProps {
  children: React.ReactNode
}

export function MobileOptimizedLayout({ children }: MobileOptimizedLayoutProps) {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Enable swipe navigation
  useSwipeNavigation({
    threshold: 50,
    minDistance: 100
  })

  if (!isMounted) return null

  return (
    <AnimatePresence mode="wait">
      <MotionDiv
        key={pathname}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </MotionDiv>
    </AnimatePresence>
  )
} 