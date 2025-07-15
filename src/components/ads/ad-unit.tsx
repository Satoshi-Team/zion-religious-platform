"use client"

import { useEffect } from "react"
import { useAdMob } from "@/services/admob-service"
import { usePremiumStore } from "@/services/premium-service"

interface AdUnitProps {
  position: 'bottom' | 'sidebar'
  className?: string
}

export function AdUnit({ position, className = '' }: AdUnitProps) {
  const { showBannerAd } = useAdMob()
  const { isPremium } = usePremiumStore()

  useEffect(() => {
    if (!isPremium) {
      showBannerAd(position)
    }
  }, [position, isPremium])

  if (isPremium) return null

  const adStyle = position === 'sidebar' 
    ? { minHeight: '250px', width: '300px' }
    : { height: '90px', width: '100%' }

  return (
    <div 
      className={`ad-container ${className}`} 
      id={`admob-${position}`}
      style={adStyle}
      data-ad-layout="in-article"
      data-ad-format={position === 'sidebar' ? 'vertical' : 'horizontal'}
    >
      <div className="text-xs text-muted-foreground text-center">Advertisement</div>
    </div>
  )
} 