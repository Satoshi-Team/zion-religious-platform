interface Window {
  isNativeApp?: boolean
  isIOS?: boolean
  isAndroid?: boolean
  adsbygoogle?: any[]
  Haptics?: {
    selectionStart: () => void
  }
  AdMob?: {
    initialize: () => void
    showBanner: (options: any) => void
  }
  AndroidAds?: {
    initialize: () => void
    showBanner: (options: any) => void
  }
} 