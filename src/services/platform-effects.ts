"use client"

type PlatformType = 'web' | 'ios' | 'android'
type AdType = 'adsense' | 'admob'

class PlatformEffects {
  private platform: PlatformType
  private adType: AdType

  constructor() {
    this.platform = this.detectPlatform()
    this.adType = this.platform === 'web' ? 'adsense' : 'admob'
  }

  private detectPlatform(): PlatformType {
    if (typeof window === 'undefined') return 'web'
    
    // Check for native app flags first
    if (window.isNativeApp) {
      if (window.isIOS) return 'ios'
      if (window.isAndroid) return 'android'
    }
    
    // Fallback to user agent detection
    const userAgent = window.navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/.test(userAgent)) return 'ios'
    if (/android/.test(userAgent)) return 'android'
    return 'web'
  }

  public getPlatform(): PlatformType {
    return this.platform
  }

  public getAdType(): AdType {
    return this.adType
  }

  public hapticFeedback() {
    switch (this.platform) {
      case 'ios':
        if ('Haptics' in window) {
          // @ts-ignore - iOS specific
          window.Haptics.selectionStart()
        }
        break
      case 'android':
        if ('navigator' in window && 'vibrate' in navigator) {
          navigator.vibrate(50)
        }
        break
    }
  }

  public showAd() {
    switch (this.platform) {
      case 'ios':
        if ('AdMob' in window) {
          // @ts-ignore - iOS specific
          window.AdMob.showBanner({
            adUnitId: process.env.NEXT_PUBLIC_IOS_ADMOB_BANNER_ID,
            position: 'bottom',
            size: 'SMART_BANNER'
          })
        }
        break
      case 'android':
        if ('AndroidAds' in window) {
          // @ts-ignore - Android specific
          window.AndroidAds.showBanner({
            adUnitId: process.env.NEXT_PUBLIC_ANDROID_ADMOB_BANNER_ID,
            position: 'bottom',
            size: 'SMART_BANNER'
          })
        }
        break
      default:
        // Web AdSense implementation handled in component
        break
    }
  }

  public initializePlatform() {
    // Initialize platform-specific features
    switch (this.platform) {
      case 'ios':
        this.initializeIOS()
        break
      case 'android':
        this.initializeAndroid()
        break
      default:
        this.initializeWeb()
    }
  }

  private initializeIOS() {
    // iOS specific initialization
    if ('AdMob' in window) {
      // @ts-ignore - iOS specific
      window.AdMob.initialize()
    }
  }

  private initializeAndroid() {
    // Android specific initialization
    if ('AndroidAds' in window) {
      // @ts-ignore - Android specific
      window.AndroidAds.initialize()
    }
  }

  private initializeWeb() {
    // Web specific initialization
    // AdSense is handled via Next.js Script component
  }
}

export const platformEffects = new PlatformEffects() 