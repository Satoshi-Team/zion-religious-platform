import { defaultLocale, isValidLocale, type Locale } from '@/config/i18n'

export async function getTranslations(locale: Locale) {
  try {
    // Try to load the specific locale file from the correct directory
    const module = await import(`@/lib/i18n/locales/${locale}.json`)
    const translations = module.default
    
    // Return a function that can handle deep key lookups
    return function t(key: string): string {
      // Type safety check
      if (typeof key !== 'string') {
        console.warn('Translation key is not a string:', key)
        return String(key || '')
      }
      
      const keys = key.split('.')
      let value = translations
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k]
        } else {
          return key // Return the key if not found
        }
      }
      return typeof value === 'string' ? value : key
    }
  } catch (error) {
    try {
      // Fallback to English
      const defaultModule = await import(`@/lib/i18n/locales/en.json`)
      const translations = defaultModule.default
      
      return function t(key: string): string {
        // Type safety check
        if (typeof key !== 'string') {
          console.warn('Translation key is not a string:', key)
          return String(key || '')
        }
        
        const keys = key.split('.')
        let value = translations
        for (const k of keys) {
          if (value && typeof value === 'object' && k in value) {
            value = value[k]
          } else {
            return key // Return the key if not found
          }
        }
        return typeof value === 'string' ? value : key
      }
    } catch {
      // Final fallback - return a function that just returns the key
      return function t(key: string): string {
        if (typeof key !== 'string') {
          return String(key || '')
        }
        return key
      }
    }
  }
}

export function getAlternateLinks(pathname: string) {
  return {
    'en': `https://zion.com/en${pathname}`,
    'es': `https://zion.com/es${pathname}`,
    'fr': `https://zion.com/fr${pathname}`,
    'de': `https://zion.com/de${pathname}`,
    'it': `https://zion.com/it${pathname}`,
    'pt': `https://zion.com/pt${pathname}`,
    'ru': `https://zion.com/ru${pathname}`,
    'zh': `https://zion.com/zh${pathname}`,
    'ja': `https://zion.com/ja${pathname}`,
    'ko': `https://zion.com/ko${pathname}`,
    'ar': `https://zion.com/ar${pathname}`,
    'hi': `https://zion.com/hi${pathname}`,
    'bn': `https://zion.com/bn${pathname}`,
    'ur': `https://zion.com/ur${pathname}`,
    'nl': `https://zion.com/nl${pathname}`,
    'pl': `https://zion.com/pl${pathname}`,
    'tr': `https://zion.com/tr${pathname}`,
    'vi': `https://zion.com/vi${pathname}`,
    'id': `https://zion.com/id${pathname}`,
    'th': `https://zion.com/th${pathname}`,
    'ms': `https://zion.com/ms${pathname}`,
    'fil': `https://zion.com/fil${pathname}`,
  }
} 