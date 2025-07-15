import { cookies } from 'next/headers'
import { headers } from 'next/headers'
import { defaultLocale, isValidLocale, type Locale } from '@/config/i18n'

export async function getLocale(): Promise<Locale> {
  const cookieStore = cookies()
  const headersList = headers()
  
  // Try to get locale from cookie
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value
  if (cookieLocale && isValidLocale(cookieLocale)) {
    return cookieLocale
  }

  // Try to get locale from Accept-Language header
  const acceptLanguage = headersList.get('accept-language')
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')[0]
      .split('-')[0]
      .toLowerCase()
    
    if (isValidLocale(preferredLocale)) {
      return preferredLocale
    }
  }

  return defaultLocale
}

export async function getTranslations(locale: Locale) {
  try {
    const module = await import(`@/lib/i18n/locales/${locale}.json`)
    return module.default
  } catch (error) {
    try {
      const templateModule = await import(`@/lib/i18n/locales/${locale}.template.json`)
      return templateModule.default
    } catch {
      try {
        const defaultModule = await import(`@/lib/i18n/locales/en.json`)
        return defaultModule.default
      } catch {
        return {}
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