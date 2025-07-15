import { cookies } from 'next/headers'

const LANGUAGE_COOKIE = 'preferred_language'
const DEFAULT_LANGUAGE = 'en'

interface LanguagePreference {
  code: string
  name: string
  direction: 'ltr' | 'rtl'
}

export const languageService = {
  getPreferredLanguage: (): string => {
    const cookieStore = cookies()
    return cookieStore.get(LANGUAGE_COOKIE)?.value || DEFAULT_LANGUAGE
  },

  setPreferredLanguage: async (language: string): Promise<void> => {
    const cookieStore = cookies()
    cookieStore.set(LANGUAGE_COOKIE, language, {
      path: '/',
      maxAge: 365 * 24 * 60 * 60, // 1 year
      sameSite: 'lax'
    })
  },

  getSupportedLanguages: (): LanguagePreference[] => {
    return [
      { code: 'en', name: 'English', direction: 'ltr' },
      { code: 'es', name: 'Español', direction: 'ltr' },
      { code: 'fr', name: 'Français', direction: 'ltr' },
      { code: 'de', name: 'Deutsch', direction: 'ltr' },
      { code: 'it', name: 'Italiano', direction: 'ltr' },
      { code: 'pt', name: 'Português', direction: 'ltr' },
      { code: 'ru', name: 'Русский', direction: 'ltr' },
      { code: 'zh', name: '中文', direction: 'ltr' },
      { code: 'ja', name: '日本語', direction: 'ltr' },
      { code: 'ko', name: '한국어', direction: 'ltr' },
      { code: 'ar', name: 'العربية', direction: 'rtl' },
      { code: 'hi', name: 'हिन्दी', direction: 'ltr' },
      { code: 'bn', name: 'বাংলা', direction: 'ltr' },
      { code: 'ur', name: 'اردو', direction: 'rtl' },
      { code: 'nl', name: 'Nederlands', direction: 'ltr' },
      { code: 'pl', name: 'Polski', direction: 'ltr' },
      { code: 'tr', name: 'Türkçe', direction: 'ltr' },
      { code: 'vi', name: 'Tiếng Việt', direction: 'ltr' },
      { code: 'id', name: 'Bahasa Indonesia', direction: 'ltr' },
      { code: 'th', name: 'ไทย', direction: 'ltr' },
      { code: 'ms', name: 'Bahasa Melayu', direction: 'ltr' },
      { code: 'fil', name: 'Filipino', direction: 'ltr' }
    ]
  }
} 