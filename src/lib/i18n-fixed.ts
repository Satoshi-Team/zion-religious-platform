import { defaultLocale, isValidLocale, type Locale } from '@/config/i18n'

// Import all translation files directly
import enTranslations from './i18n/locales/en.json'
import esTranslations from './i18n/locales/es.json'
import frTranslations from './i18n/locales/fr.json'
import deTranslations from './i18n/locales/de.json'
import itTranslations from './i18n/locales/it.json'
import ptTranslations from './i18n/locales/pt.json'
import ruTranslations from './i18n/locales/ru.json'
import zhTranslations from './i18n/locales/zh.json'
import jaTranslations from './i18n/locales/ja.json'
import koTranslations from './i18n/locales/ko.json'
import arTranslations from './i18n/locales/ar.json'
import hiTranslations from './i18n/locales/hi.json'
import bnTranslations from './i18n/locales/bn.json'
import urTranslations from './i18n/locales/ur.json'
import nlTranslations from './i18n/locales/nl.json'
import plTranslations from './i18n/locales/pl.json'
import trTranslations from './i18n/locales/tr.json'
import viTranslations from './i18n/locales/vi.json'
import idTranslations from './i18n/locales/id.json'
import thTranslations from './i18n/locales/th.json'
import msTranslations from './i18n/locales/ms.json'
import filTranslations from './i18n/locales/fil.json'
import svTranslations from './i18n/locales/sv.json'
import fiTranslations from './i18n/locales/fi.json'
import noTranslations from './i18n/locales/no.json'
import daTranslations from './i18n/locales/da.json'
import csTranslations from './i18n/locales/cs.json'
import elTranslations from './i18n/locales/el.json'
import heTranslations from './i18n/locales/he.json'
import ukTranslations from './i18n/locales/uk.json'
import roTranslations from './i18n/locales/ro.json'
import huTranslations from './i18n/locales/hu.json'
import bgTranslations from './i18n/locales/bg.json'
import srTranslations from './i18n/locales/sr.json'
import skTranslations from './i18n/locales/sk.json'
import slTranslations from './i18n/locales/sl.json'
import hrTranslations from './i18n/locales/hr.json'
import ltTranslations from './i18n/locales/lt.json'
import lvTranslations from './i18n/locales/lv.json'
import etTranslations from './i18n/locales/et.json'
import asTranslations from './i18n/locales/as.json'
import taTranslations from './i18n/locales/ta.json'
import teTranslations from './i18n/locales/te.json'
import mlTranslations from './i18n/locales/ml.json'
import knTranslations from './i18n/locales/kn.json'
import guTranslations from './i18n/locales/gu.json'
import paTranslations from './i18n/locales/pa.json'
import mrTranslations from './i18n/locales/mr.json'
import neTranslations from './i18n/locales/ne.json'
import siTranslations from './i18n/locales/si.json'
import mniTranslations from './i18n/locales/mni.json'
import kokTranslations from './i18n/locales/kok.json'
import ksTranslations from './i18n/locales/ks.json'

// Translation mapping
const translations: Record<string, any> = {
  en: enTranslations,
  es: esTranslations,
  fr: frTranslations,
  de: deTranslations,
  it: itTranslations,
  pt: ptTranslations,
  ru: ruTranslations,
  zh: zhTranslations,
  ja: jaTranslations,
  ko: koTranslations,
  ar: arTranslations,
  hi: hiTranslations,
  bn: bnTranslations,
  ur: urTranslations,
  nl: nlTranslations,
  pl: plTranslations,
  tr: trTranslations,
  vi: viTranslations,
  id: idTranslations,
  th: thTranslations,
  ms: msTranslations,
  fil: filTranslations,
  sv: svTranslations,
  fi: fiTranslations,
  no: noTranslations,
  da: daTranslations,
  cs: csTranslations,
  el: elTranslations,
  he: heTranslations,
  uk: ukTranslations,
  ro: roTranslations,
  hu: huTranslations,
  bg: bgTranslations,
  sr: srTranslations,
  sk: skTranslations,
  sl: slTranslations,
  hr: hrTranslations,
  lt: ltTranslations,
  lv: lvTranslations,
  et: etTranslations,
  as: asTranslations,
  ta: taTranslations,
  te: teTranslations,
  ml: mlTranslations,
  kn: knTranslations,
  gu: guTranslations,
  pa: paTranslations,
  mr: mrTranslations,
  ne: neTranslations,
  si: siTranslations,
  mni: mniTranslations,
  kok: kokTranslations,
  ks: ksTranslations,
}

export function getTranslations(locale: Locale) {
  console.log(`[getTranslations] Called with locale: ${locale}`)
  
  // Get translations for the locale, fallback to English
  const translationData = translations[locale] || translations['en']
  
  console.log(`[getTranslations] Translation data for ${locale}:`, translationData ? 'Found' : 'Not found')
  
  // Return a function that can handle deep key lookups including array indices
  return function t(key: string): string {
    // Type safety check
    if (typeof key !== 'string') {
      console.warn('[getTranslations] Translation key is not a string:', key)
      return String(key || '')
    }
    
    console.log(`[getTranslations] Translating key: ${key}`)
    
    const keys = key.split('.')
    let value = translationData
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        // Handle array indices
        if (Array.isArray(value) && !isNaN(Number(k))) {
          const index = Number(k)
          if (index >= 0 && index < value.length) {
            value = value[index]
          } else {
            console.log(`[getTranslations] Array index out of bounds: ${key}, returning key as fallback`)
            return key
          }
        } else if (k in value) {
          value = value[k]
        } else {
          // If not found, return the key
          console.log(`[getTranslations] Key not found: ${key}, returning key as fallback`)
          return key
        }
      } else {
        // If not found, return the key
        console.log(`[getTranslations] Key not found: ${key}, returning key as fallback`)
        return key
      }
    }
    
    const result = typeof value === 'string' ? value : key
    console.log(`[getTranslations] Result for ${key}: ${result}`)
    return result
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
    'sv': `https://zion.com/sv${pathname}`,
    'fi': `https://zion.com/fi${pathname}`,
    'no': `https://zion.com/no${pathname}`,
    'da': `https://zion.com/da${pathname}`,
    'cs': `https://zion.com/cs${pathname}`,
    'el': `https://zion.com/el${pathname}`,
    'he': `https://zion.com/he${pathname}`,
    'uk': `https://zion.com/uk${pathname}`,
    'ro': `https://zion.com/ro${pathname}`,
    'hu': `https://zion.com/hu${pathname}`,
    'bg': `https://zion.com/bg${pathname}`,
    'sr': `https://zion.com/sr${pathname}`,
    'sk': `https://zion.com/sk${pathname}`,
    'sl': `https://zion.com/sl${pathname}`,
    'hr': `https://zion.com/hr${pathname}`,
    'lt': `https://zion.com/lt${pathname}`,
    'lv': `https://zion.com/lv${pathname}`,
    'et': `https://zion.com/et${pathname}`,
    'as': `https://zion.com/as${pathname}`,
    'ta': `https://zion.com/ta${pathname}`,
    'te': `https://zion.com/te${pathname}`,
    'ml': `https://zion.com/ml${pathname}`,
    'kn': `https://zion.com/kn${pathname}`,
    'gu': `https://zion.com/gu${pathname}`,
    'pa': `https://zion.com/pa${pathname}`,
    'mr': `https://zion.com/mr${pathname}`,
    'ne': `https://zion.com/ne${pathname}`,
    'si': `https://zion.com/si${pathname}`,
    'mni': `https://zion.com/mni${pathname}`,
    'kok': `https://zion.com/kok${pathname}`,
    'ks': `https://zion.com/ks${pathname}`,
  }
} 