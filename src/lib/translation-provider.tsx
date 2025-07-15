'use client'

import React from 'react'
import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { isValidLocale } from '@/config/i18n'
import { getTranslations } from './i18n-fixed'

interface TranslationContextType {
  t: (key: string) => string
  currentLanguage: string
  isLoading: boolean
}

// Create a safe translation function that never fails
const safeTranslationFunction = (key: string): string => {
  if (!key || typeof key !== 'string') {
    console.warn('Translation key is not a string:', key)
    return String(key || '')
  }
  return key
}

export const TranslationContext = createContext<TranslationContextType>({
  t: safeTranslationFunction,
  currentLanguage: 'en',
  isLoading: true
})

// Cache for translation functions
const translationCache: Record<string, (key: string) => string> = {}

// Initialize English translation function immediately
let englishTranslationFunction: (key: string) => string
try {
  englishTranslationFunction = getTranslations('en')
  translationCache['en'] = englishTranslationFunction
  console.log('[TranslationProvider] English translation function initialized')
} catch (error) {
  console.error('Failed to initialize English translations:', error)
  englishTranslationFunction = safeTranslationFunction
  translationCache['en'] = englishTranslationFunction
}

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || ''
  const lang = pathname.split('/')[1] || 'en'
  const [translationFunction, setTranslationFunction] = useState<(key: string) => string>(() => {
    console.log('[TranslationProvider] Initializing with English translations')
    return englishTranslationFunction
  })
  const [isLoading, setIsLoading] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState(lang)

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        console.log(`[TranslationProvider] Loading translations for locale: ${lang}`)
        
        if (!isValidLocale(lang)) {
          console.log(`[TranslationProvider] Invalid locale: ${lang}, falling back to English`)
          setTranslationFunction(englishTranslationFunction)
          setCurrentLanguage(lang)
          setIsLoading(false)
          return
        }
        
        setIsLoading(true)
        
        // Clear cache to force fresh load
        delete translationCache[lang]
        
        const loadedTranslationFunction = getTranslations(lang)
        
        // Ensure we got a function
        if (typeof loadedTranslationFunction === 'function') {
          translationCache[lang] = loadedTranslationFunction
          console.log(`[TranslationProvider] Setting translation function for ${lang}`)
          setTranslationFunction(() => loadedTranslationFunction)
          setCurrentLanguage(lang)
        } else {
          console.error(`Translation function for ${lang} is not a function:`, loadedTranslationFunction)
          setTranslationFunction(englishTranslationFunction)
          setCurrentLanguage(lang)
        }
        
        document.documentElement.lang = lang
        document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`
      } catch (error) {
        console.error(`Failed to load translations for ${lang}:`, error)
        // Fallback to English
        setTranslationFunction(englishTranslationFunction)
        setCurrentLanguage(lang)
      } finally {
        setIsLoading(false)
      }
    }
    
    loadTranslations()
  }, [lang])

  // Use useCallback to ensure the t function is stable and uses the current translation function
  const t = useCallback((key: string): string => {
    console.log(`[TranslationProvider] t function called with key: ${key}`)
    console.log(`[TranslationProvider] Current translationFunction: ${typeof translationFunction}`)
    console.log(`[TranslationProvider] Current isLoading: ${isLoading}`)
    
    // Handle undefined/null keys
    if (!key || typeof key !== 'string') {
      console.warn('Translation key is not a string:', key)
      return String(key || '')
    }
    
    if (isLoading) {
      console.log(`[TranslationProvider] Still loading, returning key: ${key}`)
      return key
    }
    
    if (typeof translationFunction !== 'function') {
      console.error('Translation function is not a function:', translationFunction)
      return key
    }
    
    try {
      const result = translationFunction(key)
      console.log(`[TranslationProvider] Translated "${key}" to "${result}"`)
      return result
    } catch (error) {
      console.error(`Error translating key "${key}":`, error)
      return key
    }
  }, [translationFunction, isLoading])

  // Inline context value (no useMemo)
  return (
    <TranslationContext.Provider value={{ t, currentLanguage, isLoading }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}