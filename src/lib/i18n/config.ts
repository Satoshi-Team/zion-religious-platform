export const languages = {
  en: { name: "English", nativeName: "English" },
  es: { name: "Spanish", nativeName: "Español" },
  fr: { name: "French", nativeName: "Français" },
  de: { name: "German", nativeName: "Deutsch" },
  it: { name: "Italian", nativeName: "Italiano" },
  pt: { name: "Portuguese", nativeName: "Português" },
  ru: { name: "Russian", nativeName: "Русский" },
  zh: { name: "Chinese (Simplified)", nativeName: "简体中文" },
  ja: { name: "Japanese", nativeName: "日本語" },
  ko: { name: "Korean", nativeName: "한국어" },
  ar: { name: "Arabic", nativeName: "العربية" },
  hi: { name: "Hindi", nativeName: "हिन्दी" },
  bn: { name: "Bengali", nativeName: "বাংলা" },
  ur: { name: "Urdu", nativeName: "اردو" },
  nl: { name: "Dutch", nativeName: "Nederlands" },
  pl: { name: "Polish", nativeName: "Polski" },
  tr: { name: "Turkish", nativeName: "Türkçe" },
  vi: { name: "Vietnamese", nativeName: "Tiếng Việt" },
  id: { name: "Indonesian", nativeName: "Bahasa Indonesia" },
  th: { name: "Thai", nativeName: "ไทย" },
  ms: { name: "Malay", nativeName: "Bahasa Melayu" },
  fil: { name: "Filipino", nativeName: "Filipino" },
  sv: { name: "Swedish", nativeName: "Svenska" },
  da: { name: "Danish", nativeName: "Dansk" },
  no: { name: "Norwegian", nativeName: "Norsk" },
  fi: { name: "Finnish", nativeName: "Suomi" },
  cs: { name: "Czech", nativeName: "Čeština" },
  hu: { name: "Hungarian", nativeName: "Magyar" },
  ro: { name: "Romanian", nativeName: "Română" },
  el: { name: "Greek", nativeName: "Ελληνικά" },
  bg: { name: "Bulgarian", nativeName: "Български" },
  hr: { name: "Croatian", nativeName: "Hrvatski" },
  sk: { name: "Slovak", nativeName: "Slovenčina" },
  sl: { name: "Slovenian", nativeName: "Slovenščina" },
  lt: { name: "Lithuanian", nativeName: "Lietuvių" },
  lv: { name: "Latvian", nativeName: "Latviešu" },
  et: { name: "Estonian", nativeName: "Eesti" },
  uk: { name: "Ukrainian", nativeName: "Українська" },
  sr: { name: "Serbian", nativeName: "Српски" },
  he: { name: "Hebrew", nativeName: "עברית" },
  kn: { name: "Kannada", nativeName: "ಕನ್ನಡ" },
  pa: { name: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
  mr: { name: "Marathi", nativeName: "मराठी" },
  ml: { name: "Malayalam", nativeName: "മലയാളം" },
  ta: { name: "Tamil", nativeName: "தமிழ்" },
  te: { name: "Telugu", nativeName: "తెలుగు" },
  gu: { name: "Gujarati", nativeName: "ગુજરાતી" },
  as: { name: "Assamese", nativeName: "অসমীয়া" },
  kok: { name: "Konkani", nativeName: "कोंकणी" },
  ks: { name: "Kashmiri", nativeName: "کٲشُر" },
  mni: { name: "Manipuri", nativeName: "ꯃꯤꯇꯩ ꯂꯩꯕꯥꯔꯤ" },
  si: { name: "Sinhala", nativeName: "සිංහල" },
  ne: { name: "Nepali", nativeName: "नेपाली" }
} as const

export type Language = keyof typeof languages

export const defaultLanguage: Language = "en"

export function isValidLanguage(lang: string): lang is Language {
  return lang in languages
}

export const languageList = Object.entries(languages).map(([code, { name, nativeName }]) => ({
  code,
  name,
  nativeName
})) 