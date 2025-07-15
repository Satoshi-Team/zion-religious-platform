"use client"

interface AdConfig {
  bannerAdUnitId: string
  adSlots: {
    bottom: string
    sidebar: string
  }
}

const ADSENSE_PUB_ID = 'ca-pub-1882026272801542'

const config: Record<'web' | 'ios' | 'android', AdConfig> = {
  web: {
    bannerAdUnitId: ADSENSE_PUB_ID,
    adSlots: {
      bottom: 'XXXXXXXXXX',
      sidebar: 'YYYYYYYYYY'
    }
  },
  ios: {
    bannerAdUnitId: process.env.NEXT_PUBLIC_IOS_ADMOB_BANNER_ID || '',
    adSlots: {
      bottom: 'SMART_BANNER',
      sidebar: 'MEDIUM_RECTANGLE'
    }
  },
  android: {
    bannerAdUnitId: process.env.NEXT_PUBLIC_ANDROID_ADMOB_BANNER_ID || '',
    adSlots: {
      bottom: 'SMART_BANNER',
      sidebar: 'MEDIUM_RECTANGLE'
    }
  }
}

export function useAdMob() {
  const showBannerAd = async (position: 'bottom' | 'sidebar') => {
    try {
      if (typeof window === 'undefined') return

      const platform = window.isNativeApp 
        ? (window.isIOS ? 'ios' : 'android')
        : 'web'

      if (platform === 'web') {
        const adContainer = document.getElementById(`admob-${position}`)
        if (!adContainer) return

        // Clear existing ads
        adContainer.innerHTML = ''

        // Create new ad
        const adElement = document.createElement('ins')
        adElement.className = 'adsbygoogle'
        adElement.style.display = 'block'
        adElement.setAttribute('data-ad-client', config.web.bannerAdUnitId)
        adElement.setAttribute('data-ad-slot', config.web.adSlots[position])
        adElement.setAttribute('data-ad-format', position === 'sidebar' ? 'vertical' : 'horizontal')
        adElement.setAttribute('data-full-width-responsive', 'true')
        
        adContainer.appendChild(adElement);
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      } else if (platform === 'ios' && window.AdMob) {
        await window.AdMob.showBanner({
          adUnitId: config.ios.bannerAdUnitId,
          position: position === 'bottom' ? 'bottom' : 'top',
          size: config.ios.adSlots[position]
        })
      } else if (platform === 'android' && window.AndroidAds) {
        await window.AndroidAds.showBanner({
          adUnitId: config.android.bannerAdUnitId,
          position: position === 'bottom' ? 'bottom' : 'top',
          size: config.android.adSlots[position]
        })
      }
    } catch (error) {
      console.error('Error showing banner ad:', error)
    }
  }

  return {
    showBannerAd
  }
} 